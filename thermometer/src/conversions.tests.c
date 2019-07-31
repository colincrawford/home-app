#include "stdlib.h"
#include "check.h"
#include "conversions.h"

START_TEST(test_voltage_from_pin)
{
  int pinValue = 5;
  float expected_voltage = 0.06470588235294117;

  float voltage = voltage_from_pin(pinValue);

  ck_assert_float_eq_tol(expected_voltage, voltage, 0.001);
}
END_TEST

START_TEST(test_resistance_from_voltage)
{
  float voltage = 1.77;
  float expected_resistance = 11.61;

  float resistance = resistance_from_voltage(voltage);

  ck_assert_float_eq_tol(expected_resistance, resistance, 0.05);
}
END_TEST

START_TEST(test_kelvin_temp_from_resistance)
{
  float resistance = 11.61;
  float expected_temp_kelvin = 294.83;

  float temp_kelvin = kelvin_temp_from_resistance(resistance);

  ck_assert_float_eq_tol(expected_temp_kelvin, temp_kelvin, 0.01);
}
END_TEST

Suite *conversions_suite(void)
{
  Suite *s;
  TCase *tc_core;

  s = suite_create("Conversions");

  /* Core test case */
  tc_core = tcase_create("Core");

  tcase_add_test(tc_core, test_voltage_from_pin);
  tcase_add_test(tc_core, test_resistance_from_voltage);
  tcase_add_test(tc_core, test_kelvin_temp_from_resistance);
  suite_add_tcase(s, tc_core);

  return s;
}

int main(void)
{
  int number_failed;
  Suite *s;
  SRunner *sr;

  s = conversions_suite();
  sr = srunner_create(s);

  srunner_run_all(sr, CK_NORMAL);
  number_failed = srunner_ntests_failed(sr);
  srunner_free(sr);
  return (number_failed == 0) ? EXIT_SUCCESS : EXIT_FAILURE;
}