FROM ccolin84/raspbian-check

RUN apt-get update -y

RUN apt-get install curl build-essential -y

RUN apt-get install wiringpi

COPY . /usr/src/myapp

WORKDIR /usr/src/myapp

RUN sh send-to-rabbitmq/download-rabbit-mq-c.sh

RUN cd send-to-rabbitmq && make

RUN cd thermometer && make

ENTRYPOINT ["./run.sh"]
