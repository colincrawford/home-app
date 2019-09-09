(ns ^:figwheel-hooks web-dashboard.view
  (:require [goog.dom :as gdom]
            [goog.dom.classlist :as gcl]))

;;; Library to handle view updates for the app

(defn escape-text
  [dangerous-text]
  (gdom/getTextContent (gdom/createTextNode dangerous-text)))

(defn create-div
  [properties]
  (let [element (gdom/createElement "div")
        properties-obj (clj->js properties)]
    (gdom/setProperties element properties-obj)
    element))

(defn create-span
  [properties]
  (let [element (gdom/createElement "span")
        properties-obj (clj->js properties)]
    (gdom/setProperties element properties-obj)
    element))

(defn get-app-element []
  (gdom/getElement "app"))

(defn get-connection-status-element
  []
  (gdom/getElement "connection-status"))

(defn get-temperature-display-element
  []
  (gdom/getElement "temperature-display"))

(defn ws-connected
  []
  (when-let [connection-status-element (get-connection-status-element)]
    (gdom/setTextContent connection-status-element "connected")
    (gcl/addRemove connection-status-element "alert-danger" "alert-success")))

(defn ws-disconnected
  []
  (when-let [connection-status-element (get-connection-status-element)]
    (gdom/setTextContent connection-status-element "disconnected")
    (gcl/addRemove connection-status-element "alert-success" "alert-danger")))

(defn update-temperature
  [new-temperature]
  (let [text (str "temperature: " (escape-text new-temperature) " &#8457;")
        temperature-display (get-temperature-display-element)
        properties (clj->js {:innerHTML text})]
    (when-not (nil? temperature-display)
      (when-not (gcl/contains temperature-display "alert-success")
        (ws-connected))
      (gdom/setProperties temperature-display properties))))


(defn render
  []
  (let [app (get-app-element)
        connection-status (create-div 
                           {:id "connection-status"
                            :className "alert"
                            :textContent "connecting..."})
        temperature-display (create-span
                             {:id "temperature-display"
                              :className "p-2 pl-5 text-white bg-primary"
                              :innerHTML "- &#8457;"})]
    (gdom/removeChildren app)
    (gdom/appendChild app connection-status)
    (gdom/appendChild app temperature-display)))
