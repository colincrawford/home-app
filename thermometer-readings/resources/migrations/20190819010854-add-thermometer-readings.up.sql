CREATE TABLE thermometer_reading(
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP,
    temperature_fahrenheit NUMERIC,
    temperature_celsius NUMERIC,
    adc_value NUMERIC,
    voltage NUMERIC,
    resistance NUMERIC
);
