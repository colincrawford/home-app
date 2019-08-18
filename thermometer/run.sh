#!/bin/bash

./wait-for-rabbitmq.sh
echo "Starting thermometer readings..."

./send-to-rabbitmq/bin/send-to-rabbitmq < <(./thermometer/bin/thermometer)
