#!/bin/bash

until $(curl --output /dev/null -m 3 --silent --head --fail http://localhost:15672)
do
    echo "Waiting for Rabbitmq..."
    sleep 3
done

