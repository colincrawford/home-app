(ns thermometer-readings.readings
  (:gen-class)
  (:require [langohr.core      :as rmq]
            [langohr.channel   :as lch]
            [langohr.queue     :as lq]
            [langohr.consumers :as lc]
            [langohr.basic     :as lb]))

(def sample-reading
  {:temperatureFahrenheit 85.0
   :temperatureCelsius    10.5})

(defn collect-reading []
  sample-reading)

(defn message-handler
  [ch {:keys [content-type delivery-tag] :as meta} ^bytes payload]
  (println
   (format "[consumer] Received a message: %s, delivery tag: %d, content type: %s"
           (String. payload "UTF-8") delivery-tag content-type)))

(def url (get (System/getenv) "CLOUDAMQP_URL" "amqp://guest:guest@localhost"))

(defn connect-to-rabbitmq
  [& args]
  (let [conn  (rmq/connect {:uri url}) ;; Connect to our URL
        ch    (lch/open conn) ;; Open a channel
        qname "temperature-reading"]
    (println "[main] Connected")
    ;; Create a queue
    (lq/declare ch qname {:exclusive false :auto-delete true})
    ;; Subscribe to the queue
    ;; The message-handler will be executed for each message
    (lc/subscribe ch qname message-handler {:auto-ack true})
    ;; Enqueue a msg to the queue via the default exchange
    ;; All queues are bound to it with their name as routing key
    ;; (lb/publish ch "" qname "Hello!" {:content-type "text/plain"})
    ;; (Thread/sleep 2000)
    ;; (println "[main] Disconnecting...")
    ;; Close the connection (channels will automatically be closed too)
    ;; (rmq/close conn)))
    ))
