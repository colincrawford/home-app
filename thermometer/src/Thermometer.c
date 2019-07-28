#include <wiringPi.h>
#include <pcf8591.h>
#include <stdio.h>
#include <stdbool.h>
#include <time.h>

#include "conversions.h"

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
	time_t t;

	// exit when setting up the wire fails
	if (wiringPiSetup() == -1)
	{
		printf("Error setting up wiringPi!");
		return 1;
	}

	pcf8591Setup(pinbase, address);

	while (true)
	{
		time(&t);
		//read A0 pin
		adcValue = analogRead(A0);
		// calculate voltage
		voltage = voltage_from_pin(adcValue);
		resistance = resistance_from_voltage(voltage);
		tempKelvin = kelvin_temp_from_resistance(resistance);
		tempCelsius = celsius_from_kelvin(tempKelvin);
		tempFahrenheit = fahrenheit_from_celsius(tempCelsius);
		printf(
				"%s - ADC value : %d  ,\tVoltage : %.2fV, \tTemperature : %.2fC %.2fF\n",
				ctime(&t), adcValue, voltage, tempCelsius, tempFahrenheit);
		delay(DELAY);
	}
	return 0;
}