.PHONY: clean

C := gcc
FLAGS := -Wall

all: clean test bin/Thermometer

test: bin/conversions.spec
	./bin/conversions.spec

bin/Thermometer: bin bin/conversions.o
	$(C) $(FLAGS) src/Thermometer.c bin/conversions.o -o bin/Thermometer -lwiringPi

bin/conversions.o: bin src/conversions.c
	$(C) $(FLAGS) src/conversions.c -c -o bin/conversions.o

bin/conversions.spec.o: src/conversions.spec.c
	$(C) $(FLAGS) src/conversions.spec.c -c -o bin/conversions.spec.o

bin/conversions.spec: bin bin/conversions.o bin/conversions.spec.o
	$(C) $(FLAGS) bin/conversions.spec.o bin/conversions.o -o bin/conversions.spec -lcheck -lm -lpthread

bin:
	mkdir bin

clean: bin
	rm bin/*