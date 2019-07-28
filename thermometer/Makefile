.PHONY: clean

C := gcc
FLAGS := -Wall
OS := $(shell uname)

INSTALL := @echo "Unable to determine your OS, you need to install check for testing"
ifeq ($(OS) , Linux)
	INSTALL := sudo apt-get install check
endif
ifeq ($(OS),Darwin)
	INSTALL := brew install check
endif

all: install clean test bin/Thermometer

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

install:
	@echo "Running on $(OS)"
	$(INSTALL)

bin:
	mkdir bin

clean: bin
	rm -rf bin/*