(ns thermometer-readings.websocket-server
  (:gen-class)
  (:require [thermometer-readings.readings :as rd])
  (:use [org.httpkit.server]))

(defn open-ws-connections
  "filter out closed websocket connections"
  [connections]
  (vec (filter open? connections)))

(defn log-connections
  [connections]
  (println (str "connections: " (count connections))))

(defn get-connection-handler
  "append the connection to a pool of connections"
  [connections]
  (fn 
    [request]
    (with-channel request channel
      ;; remove the channel from the connection pool
      (on-close channel (fn [status]
                          ;; filter out the closed connections
                          (swap! connections open-ws-connections)
                          (log-connections @connections)))
      (swap! connections conj channel)
      (log-connections @connections))))


(defn get-ws-message-handler
  "broadcast the temperature reading to each connection"
  [connections]
  (fn
    [ch {:keys [content-type delivery-tag] :as meta} ^bytes payload]
    (doseq [connection @connections]
      (send! connection payload))))

;; store the each websocket connection in a vector
;; when a temperature reading is received, broadcast
;; it to each connection
(defn -main
  "broadcasts temperature readings via websocket"
  [& args]
  (let [connections (atom [])
        connection-handler (get-connection-handler connections)
        message-handler (get-ws-message-handler connections)]
    (rd/connect-to-rabbitmq message-handler)
    (println "Starting ws server...")
    (run-server connection-handler {:port 9090})))
