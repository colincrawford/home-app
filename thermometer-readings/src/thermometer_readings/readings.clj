(ns thermometer-readings.readings
  (:gen-class)
  (:require [langohr.core      :as rmq]
            [langohr.channel   :as lch]
            [langohr.queue     :as lq]
            [langohr.consumers :as lc]
            [langohr.basic     :as lb]))

(def url "amqp://guest:guest@localhost")

(defn connect-to-rabbitmq
  [message-handler]
  (let [conn  (rmq/connect {:uri url}) ;; Connect to our URL
        ch    (lch/open conn) ;; Open a channel
        qname "temperature-reading"]
    (println "Connected to Rabbitmq!")
    ;; Create a queue
    (lq/declare ch qname {:exclusive false :auto-delete true})
    ;; Subscribe to the queue
    ;; The message-handler will be executed for each message
    (lc/subscribe ch qname message-handler {:auto-ack true})))
