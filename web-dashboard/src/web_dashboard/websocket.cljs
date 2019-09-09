(ns ^:figwheel-hooks web-dashboard.websocket)

;;; A utility ns for working with websockets

(defn create-websocket
  "Create a js websocket object"
  [url]
  (js/WebSocket. url))

(defn on-message
  "Adds a message handler for websocket message events"
  [websocket message-handler]
  (.addEventListener websocket "message" message-handler)
  websocket)

(defn handle-ws-msg-text
  "Extracts the text from a websocket message and provides
   it to a handler fn"
  [text-handler message]
  (-> message
      (.-data)
      (.text)
      (.then text-handler)))
