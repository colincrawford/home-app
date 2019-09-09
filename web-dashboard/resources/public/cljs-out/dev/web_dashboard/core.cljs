(ns ^:figwheel-hooks web-dashboard.core
  (:require
   [web-dashboard.websocket :as ws]
   [web-dashboard.view :as v]
   [web-dashboard.thermometer-readings :as rd]))

(def temperature-reading-websocket-server "ws://localhost:9090")

(def ws (atom nil))

(defn handle-ws-message-text
  [msg]
  (let [reading (rd/from-json msg)
        fahrenheit (:temperature-fahrenheit reading)]
    (v/update-temperature fahrenheit)))

(defn handle-ws-message
  [message]
  (ws/handle-ws-msg-text handle-ws-message-text message))

(defn start-websocket
  []
  (let [websocket (ws/create-websocket temperature-reading-websocket-server)
        websocket (ws/on-message websocket handle-ws-message)]
    (v/ws-connected)
    (reset! ws websocket)))

(defn stop-websocket
  []
  (when-not (nil? @ws)
    (.close @ws)
    (v/ws-disconnected)
    (reset! ws nil)))

(v/render)
