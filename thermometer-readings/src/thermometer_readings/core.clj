(ns thermometer-readings.core
  (:gen-class)
  (:require [thermometer-readings.readings :as rd]))

(defn handle-reading []
  (println "reading!"))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (rd/connect-to-rabbitmq))
