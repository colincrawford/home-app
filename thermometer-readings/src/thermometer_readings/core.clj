(ns thermometer-readings.core
  (:gen-class)
  (:require [thermometer-readings.readings :as rd]))

(defn stdout-message-handler
  [ch {:keys [content-type delivery-tag] :as meta} ^bytes payload]
  (println
   (format "[consumer] Received a message: %s, delivery tag: %d, content type: %s"
           (String. payload "UTF-8") delivery-tag content-type)))

(defn -main
  "connects to rabbitmq and prints the messages to stdout"
  [& args]
  (println "Connecting to Rabbitmq...")
  (rd/connect-to-rabbitmq stdout-message-handler))
