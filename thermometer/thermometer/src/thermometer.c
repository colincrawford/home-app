#include <wiringPi.h>
#include <pcf8591.h>
#include <stdio.h>
#include <stdbool.h>
#include <time.h>
#include <string.h>

#include "conversions.h"
#include "temperature.h"

#define address 0x48 //pcf8591 default address
#define pinbase 64	 //any number above 64

#define A0 pinbase + 0
#define A1 pinbase + 1
#define A2 pinbase + 2
#define A3 pinbase + 3

// delay between temperature readings
#define DELAY 2000

void set_current_time(char *time_str, struct tm *current_time);

int main(void)
{
	int adcValue;
	float voltage, resistance;
	time_t t;
	struct tm *current_time;
	temperature temp;
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
		init_temperature(&temp, resistance);
		printf(
				"{ \"timestamp\": \"%s\", \"adcValue\": %d, \"resistance\": %.2f, \"voltage\": %.2f, \"temperatureCelsius\": %.2f, \"temperatureFahrenheit\": %.2f }\n",
				time_str, adcValue, resistance, voltage, temp.celsius, temp.fahrenheit);
		fflush(stdout);
		delay(DELAY);
	}
	return 0;
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
