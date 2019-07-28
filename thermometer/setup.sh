curl -L -o check-0.12.0.tar.gz https://github.com/libcheck/check/releases/download/0.12.0/check-0.12.0.tar.gz

tar xvzf check-0.12.0.tar.gz

cd check-0.12.0

rm check-0.12.0.tar.gz

./configure
make
make check
sudo make install

cd ../
./configure