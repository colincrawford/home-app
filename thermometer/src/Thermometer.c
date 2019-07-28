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

struct temperature_t
{
	float tempKelvin;
	float tempCelsius;
	float tempFahrenheit;
};

void temperature(struct temperature_t *temp, float resistance)
{
	float tempKelvin = kelvin_temp_from_resistance(resistance);
	float tempCelsius = celsius_from_kelvin(tempKelvin);
	float tempFahrenheit = fahrenheit_from_celsius(tempCelsius);
	temp->tempKelvin = tempKelvin;
	temp->tempCelsius = tempCelsius;
	temp->tempFahrenheit = tempFahrenheit;
}

void set_current_time(char *time_str, struct tm *current_time)
{
	int year, month, day, hour, minute, second;
	year = current_time->tm_year + 1900;
	month = current_time->tm_mon + 1;
	day = current_time->tm_mday;
	hour = current_time->tm_hour;
	minute = current_time->tm_min;
	second = current_time->tm_sec;
	memset(time_str, 0, sizeof(char) * 100);
	sprintf(time_str, "%02d/%02d/%02d %02d:%02d:%02d", month, day, year, hour, minute, second);
}

int main(void)
{
	int adcValue;
	float tempKelvin, tempCelsius, tempFahrenheit;
	float voltage, resistance;
	time_t t;
	struct tm *current_time;
	struct temperature_t temp;
	char time_str[100];

	// exit when setting up the wire fails
	if (wiringPiSetup() == -1)
	{
		printf("Error setting up wiringPi!");
		return 1;
	}

	pcf8591Setup(pinbase, address);

	while (true)
	{
		// time in seconds
		t = time(NULL);
		// to get current time
		current_time = localtime(&t);
		set_current_time(time_str, current_time);

		//read A0 pin
		adcValue = analogRead(A0);
		// calculate voltage
		voltage = voltage_from_pin(adcValue);
		resistance = resistance_from_voltage(voltage);
		temperature(&temp, resistance);
		printf(
				"{ \"timestamp\": \"%s\", \"adcValue\": %d, \"voltage\": %.2f, \"temperatureCelsius\": %.2f, \"temperatureFahrenheit\": %.2fF }",
				time_str, adcValue, voltage, temp.tempCelsius, temp.tempFahrenheit);
		fflush(stdout);
		delay(DELAY);
	}
	return 0;
}
