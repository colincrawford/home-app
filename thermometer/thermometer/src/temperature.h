#ifndef TEMPERATURE_H
#define TEMPERATURE_H

typedef struct {
	float kelvin;
	float celsius;
	float fahrenheit;
} temperature;

void init_temperature(temperature *temp, float resistance);

#endif