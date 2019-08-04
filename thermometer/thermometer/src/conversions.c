#include <math.h>

float voltage_from_pin(int pinValue)
{
  return (((float)pinValue) / 255.0) * 3.3;
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