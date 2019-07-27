.PHONY: clean

C := gcc
FLAGS := -Wall

bin: bin/Thermometer

test: bin/Thermometer.spec

bin/Thermometer: bin
	$(C) $(FLAGS) src/Thermometer.c -o bin/Thermometer -lwiringPi -lm

bin/Thermometer.spec: bin
	$(C) $(FLAGS) src/Thermometer.spec.c -o bin/Thermometer.spec

bin:
	mkdir bin

clean:
	rm bin/*