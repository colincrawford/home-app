(ns thermometer-readings.db
  (:gen-class)
  (:require [thermometer-readings.readings :as rd]
            [clojure.java.jdbc :as sql]))

(def pg-db
  (str
   "jdbc:postgresql://" ; jdbc connection string
   "localhost/" ; database ip
   "thermometer_readings/" ; database name
   "?user=thermometer_readings" ; username
   "&password=thermometer_readings" ; password
   ))

(defn get-readings
  "Gets thermometer readings from the database."
  [{:keys [limit offset]
    :or {offset 0, limit 10}}]
  (let [query "select * from thermometer_reading offset ? limit ?"]
    (sql/query pg-db [query offset limit])))

(defn insert-reading
  "Inserts a thermometer reading into the database."
  [{:keys [temperature-fahrenheit
           temperature-celsius
           timestamp
           adc-value
           voltage
           resistance]}]
  (sql/insert!
   pg-db
   :thermometer_reading
   {:timestamp timestamp
    :temperature_celsius temperature-celsius
    :temperature_fahrenheit temperature-fahrenheit
    :adc_value adc-value
    :voltage voltage
    :resistance resistance}))
