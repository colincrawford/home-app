FROM ccolin84/raspbian-check

RUN apt-get update -y

RUN apt-get install curl build-essential cmake libssl-dev wiringpi -y

COPY . /usr/src/myapp

WORKDIR /usr/src/myapp

RUN sh send-to-rabbitmq/download-rabbit-mq-c.sh

RUN ls /usr/local/lib

RUN mv /usr/local/lib/arm-linux-gnueabihf/librabbitmq* /usr/local/lib

ENV LD_LIBRARY_PATH /lib:/usr/lib:/usr/local/lib

RUN cd send-to-rabbitmq && make clean && make all

RUN cd thermometer && make

ENTRYPOINT ["./run.sh"]
