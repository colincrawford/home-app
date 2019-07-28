FROM ccolin84/raspbian-check

COPY . /usr/src/myapp

WORKDIR /usr/src/myapp

RUN apt-get update -y

RUN apt-get install curl build-essential -y

RUN apt-get install wiringpi

RUN make

CMD ["./bin/Thermometer"]
