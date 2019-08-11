FROM gcc:latest

RUN apt-get update -y

RUN apt-get install curl build-essential cmake libssl-dev -y

COPY . /usr/src/myapp

WORKDIR /usr/src/myapp

RUN sh send-to-rabbitmq/download-rabbit-mq-c.sh

RUN mv /usr/local/lib/x86_64-linux-gnu/librabbitmq* /usr/local/lib

ENV LD_LIBRARY_PATH /lib:/usr/lib:/usr/local/lib

RUN cd send-to-rabbitmq && make clean && make all

ENTRYPOINT ["./run.mock.sh"]
