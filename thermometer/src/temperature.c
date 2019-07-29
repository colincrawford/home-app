#include "temperature.h"
#include "conversions.h"

void temperature(struct temperature_t *temp, float resistance)
{
	float kelvin = kelvin_temp_from_resistance(resistance);
	float celsius = celsius_from_kelvin(kelvin);
	float fahrenheit = fahrenheit_from_celsius(celsius);
	temp->kelvin = kelvin;
	temp->celsius = celsius;
	temp->fahrenheit = fahrenheit;
}