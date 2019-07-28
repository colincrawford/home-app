FROM gcc:4.9

COPY . /usr/src/myapp

WORKDIR /usr/src/myapp

RUN ./setup.sh

RUN make

CMD ["./bin/Thermometer"]