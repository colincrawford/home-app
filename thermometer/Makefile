.PHONY: clean

C := gcc
FLAGS := -Wall
OS := $(shell uname)

INSTALL := @echo "Unable to determine your OS, you need to install check for testing"
ifeq ($(OS) , Linux)
	INSTALL := @echo "You need to either install check via your package manager or install check from source and run ./configure.sh to update your LD_LIBRARY_PATH"
endif
ifeq ($(OS),Darwin)
	INSTALL := brew install check
endif

all: install clean test bin/Thermometer

test: bin/conversions.tests bin/temperature.tests
	./bin/conversions.tests
	./bin/temperature.tests

bin/Thermometer: bin bin/conversions.o bin/temperature.o
	$(C) $(FLAGS) src/Thermometer.c bin/conversions.o bin/temperature.o -o bin/Thermometer -lwiringPi -lm

bin/conversions.o: bin src/conversions.c
	$(C) $(FLAGS) src/conversions.c -c -o bin/conversions.o

bin/conversions.tests.o: bin src/conversions.tests.c
	$(C) $(FLAGS) src/conversions.tests.c -c -o bin/conversions.tests.o

bin/conversions.tests: bin bin/conversions.o bin/conversions.tests.o
	$(C) $(FLAGS) bin/conversions.tests.o bin/conversions.o -o bin/conversions.tests -lcheck -lm -lpthread

bin/temperature.o: bin src/temperature.c
	$(C) $(FLAGS) src/temperature.c -c -o bin/temperature.o

bin/temperature.tests.o: bin src/temperature.tests.c
	$(C) $(FLAGS) src/temperature.tests.c -c -o bin/temperature.tests.o

bin/temperature.tests: bin bin/temperature.o bin/conversions.o bin/temperature.tests.o
	$(C) $(FLAGS) bin/temperature.tests.o bin/temperature.o bin/conversions.o -o bin/temperature.tests -lcheck -lm -lpthread

install:
	@echo "Running on $(OS)"
	$(INSTALL)

bin:
	mkdir bin

clean: bin
	rm -rf bin/*
