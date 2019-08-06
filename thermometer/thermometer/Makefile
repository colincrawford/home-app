CC := gcc
C_FLAGS := -Wall -std=c17
LD_FLAGS := lwiringPi -lm
TEST_LD_FLAGS := -lcheck -lm -lpthread

SRC_DIR := src
BUILD_DIR := bin

MODULES := conversions.c temperature.c
OBJS := $(patsubst %.c,$(BUILD_DIR)/%.o,$(MODULES))
TESTS := $(patsubst %.c,$(BUILD_DIR)/%.tests,$(MODULES))

TARGETS += thermometer

.PHONY: all clean test build

all: $(BUILD_DIR) test build

build: $(TARGETS)

$(TARGETS): $(OBJS)
	$(CC) $(SRC_DIR)/$@.c -o $(BUILD_DIR)/$@ $(OBJS) $(C_FLAGS) $(LD_FLAGS)

$(BUILD_DIR)/%.o: $(SRC_DIR)/%.c
	$(CC) $< -o $@ -c $(C_FLAGS)

test: $(TESTS)

$(BUILD_DIR)/%.tests: $(SRC_DIR)/%.tests.c $(OBJS)
	$(CC) $< -o $@ $(OBJS) $(C_FLAGS) $(TEST_LD_FLAGS)
	./$@

clean: $(BUILD_DIR)
	rm -rf bin/*

$(BUILD_DIR):
	mkdir $(BUILD_DIR)