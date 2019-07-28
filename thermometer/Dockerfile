FROM ccolin84/raspbian-check

COPY . /usr/src/myapp

WORKDIR /usr/src/myapp

RUN apt-get update -y && apt-get upgrade -y

RUN apt-get install curl build-essential -y

RUN apt-get install wiringpi

RUN env

RUN make

RUN whoami

CMD ["./bin/Thermometer"]
