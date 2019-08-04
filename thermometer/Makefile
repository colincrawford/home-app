.PHONY: clean

C := gcc
FLAGS := -Wall
OS := $(shell uname)
TEST_FLAGS := -lcheck -lm -lpthread

SRC_DIR := ./src
BUILD_DIR := ./bin

SRCS := $(shell find $(SRC_DIR) -name *.c)
OBJS := $(patsubst $(SRC_DIR)/%.c,$(BUILD_DIR)/%.o,$(SRCS))
TEST_SRCS := $(shell find $(SRC_DIR) -name *.tests.c)
TEST_OBJS := $(patsubst $(SRC_DIR)/%.c,$(BUILD_DIR)/%.o,$(TEST_SRCS))

INSTALL := @echo "Unable to determine your OS, you need to install check for testing"
ifeq ($(OS) , Linux)
	INSTALL := @echo "You need to either install check via your package manager or install check from source and run ./configure.sh to update your LD_LIBRARY_PATH"
endif
ifeq ($(OS),Darwin)
	INSTALL := brew install check
endif

# all: install clean test bin/Thermometer
all:
	echo $(TEST_OBJS)
	./bin/conversions.tests
	./bin/temperature.tests

$(SRC_DIR)/$(SRCS): 

bin/Thermometer: bin $(OBJECTS)
	$(C) $(FLAGS) src/Thermometer.c $(OBJECTS) -o bin/Thermometer -lwiringPi -lm

bin/conversions.o: bin
	$(C) $(FLAGS) src/conversions.c -c -o bin/conversions.o

bin/temperature.o: bin src/temperature.c
	$(C) $(FLAGS) src/temperature.c -c -o bin/temperature.o

bin/conversions.tests: bin bin/conversions.o
	$(C) $(FLAGS) src/conversions.tests.c bin/conversions.o -o bin/conversions.tests $(TEST_FLAGS)

bin/temperature.tests: bin bin/temperature.o bin/conversions.o
	$(C) $(FLAGS) src/temperature.tests.c bin/temperature.o bin/conversions.o -o bin/temperature.tests $(TEST_FLAGS)

install:
	@echo "Running on $(OS)"
	$(INSTALL)

bin:
	mkdir bin

clean: bin
	rm -rf bin/*
