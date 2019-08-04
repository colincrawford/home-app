#ifndef CONVERSIONS_H
#define CONVERSIONS_H

float voltage_from_pin(int pinValue);
float kelvin_temp_from_resistance(float resistance);
float resistance_from_voltage(float voltage);
float celsius_from_kelvin(float tempKelvin);
float fahrenheit_from_celsius(float tempCelsius);

#endif