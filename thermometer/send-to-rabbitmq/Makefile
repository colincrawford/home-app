CC := gcc
C_FLAGS := -Wall -std=c11

SRC_DIR := src
BUILD_DIR := bin

TARGET += $(BUILD_DIR)/send-to-rabbitmq

.PHONY: all clean

all: $(BUILD_DIR) $(TARGET)

$(TARGET): $(SRC_DIR)/send-to-rabbitmq.c
	$(CC) $< -o $@ $(C_FLAGS) -lrabbitmq -L/usr/local/lib/

$(BUILD_DIR):
	mkdir $(BUILD_DIR)

clean:
	rm -rf bin/*
