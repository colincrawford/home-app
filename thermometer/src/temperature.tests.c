#include "stdlib.h"
#include "check.h"
#include "temperature.h"

START_TEST(test_temperature)
{
  float resistance, temp_celsius, temp_fahrenheit, temp_kelvin;
  resistance = 11.61;
  temp_celsius = 21.68;
  temp_fahrenheit = 71.02;
  temp_kelvin = 294.828;
  struct temperature_t temp;

  temperature(&temp, resistance);

  ck_assert_float_eq_tol(temp.kelvin, temp_kelvin, 0.01);
  ck_assert_float_eq_tol(temp.celsius, temp_celsius, 0.01);
  ck_assert_float_eq_tol(temp.fahrenheit, temp_fahrenheit, 0.01);
}
END_TEST

Suite *temperature_suite(void)
{
  Suite *s;
  TCase *tc_core;

  s = suite_create("Temperature");

  /* Core test case */
  tc_core = tcase_create("Core");

  tcase_add_test(tc_core, test_temperature);
  suite_add_tcase(s, tc_core);

  return s;
}

int main(void)
{
  int number_failed;
  Suite *s;
  SRunner *sr;

  s = temperature_suite();
  sr = srunner_create(s);

  srunner_run_all(sr, CK_NORMAL);
  number_failed = srunner_ntests_failed(sr);
  srunner_free(sr);
  return (number_failed == 0) ? EXIT_SUCCESS : EXIT_FAILURE;
}
