#include <wiringPi.h>
#include <pcf8591.h>
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

#include "Thermometer.h"

#define address 0x48 //pcf8591 default address
#define pinbase 64	 //any number above 64
#define A0 pinbase + 0
#define A1 pinbase + 1
#define A2 pinbase + 2
#define A3 pinbase + 3
#define DELAY 2000

int main(void)
{
	int adcValue;
	float tempKelvin, tempCelsius, tempFahrenheit;
	float voltage, resistance;

	// exit when setting up the wire fails
	if (wiringPiSetup() == -1)
	{
		printf("Error setting up wiringPi!");
		return 1;
	}

	pcf8591Setup(pinbase, address);

	while (true)
	{
		//read A0 pin
		adcValue = analogRead(A0);
		// calculate voltage
		voltage = voltage_from_pin(adcValue);
		resistance = resistance_from_voltage(voltage);
		tempKelvin = kelvin_temp_from_resistance(resistance);
		tempCelsius = celsius_from_kelvin(tempKelvin);
		tempFahrenheit = fahrenheit_from_celsius(tempCelsius);
		printf(
				"ADC value : %d  ,\tVoltage : %.2fV, \tTemperature : %.2fC %.2fF\n",
				adcValue, voltage, tempCelsius, tempFahrenheit);
		delay(DELAY);
	}
	return 0;
}

float voltage_from_pin(int pinValue)
{
	return (float)pinValue / (255.0 * 3.3);
}

//calculate resistance value of thermistor
float resistance_from_voltage(float voltage)
{
	return (10 * voltage) / (3.3 - voltage);
}

float kelvin_temp_from_resistance(float resistance)
{
	return 1 / (1 / (273.15 + 25) + log(resistance / 10) / 3950.0);
}

float celsius_from_kelvin(float tempKelvin)
{
	return tempKelvin - 273.15;
}

float fahrenheit_from_celsius(float tempCelsius)
{
	return (tempCelsius * ((float)9 / (float)5)) + 32;
}