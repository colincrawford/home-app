(ns thermometer-readings.storage
  (:require [thermometer-readings.readings :as rd])
  (:use [org.httpkit.server]))

(defn storage-message-handler
  "Stores the temperature reading message in the db"
  [ch {:keys [content-type delivery-tag] :as meta} ^bytes payload]
  (println "Not implemented"))

(defn -main
  [& args]
  (println "Not implemented"))
