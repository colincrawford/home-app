#!/bin/bash

curl -L -o rabbitmq-c-0.9.0.tar.gz https://github.com/alanxz/rabbitmq-c/archive/v0.9.0.tar.gz \
    && tar xvzf rabbitmq-c-0.9.0.tar.gz \
    && rm rabbitmq-c-0.9.0.tar.gz \
    && cd rabbitmq-c-0.9.0 \
    && mkdir build && cd build \
    && cmake -DCMAKE_INSTALL_PREFIX=/usr/local -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl/ -DBUILD_STATIC_LIBS=ON .. \
    && cmake --build . --target install
