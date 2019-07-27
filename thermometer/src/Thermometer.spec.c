#include "check.h"
#include "Thermometer.h"

START_TEST(test_voltage_from_pin)
{
  int pinValue = 5;
  float expected_voltage = 0.0059417706476530005;

  float voltage = voltage_from_pin(pinValue);

  ck_assert_float_eq(expected_voltage, voltage);
}
END_TEST

int main(void)
{
  return 0;
}