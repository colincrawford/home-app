(ns thermometer-readings.rest-api
  (:gen-class)
  (:require [thermometer-readings.readings :as rd])
  (:use [thermometer-readings.db :as db]
        [compojure.route :only [files not-found]]
        [compojure.core :only [defroutes GET]]
        org.httpkit.server))

(defn bad-user-input
  [error-message]
  {:status  404
   :headers {"Content-Type" "application/json"}
   :body    {:error true
             :message error-message}})

(defn validate-param
  "Validates a single param.

   a param has
   :name - the name of the param in the request
   :validate - a function to validate the param it returns
    an error message or nil (nil meaning the param is valid)
   :default - if the param is nil in the request, use this value
  
   ex: {:name :id
        :validate #(nil))
        :default 10}
  "
  [request {:keys [name default validate]}]
  (let [value (-> request :params name)
        param-name (clojure.core/name name)
        error-message (validate value)]
    (cond
      (and (nil? value) (nil? default))
      {:error-message (str param-name " is required")}
      
      (nil? value)
      {name default}
      
      (not (nil? error-message))
      {:error-message error-message}
      
      :else
      {name value})))

(defn validate-params
  "Validates a list of request params.
  
   returns a result
   ex: {:params {:param-name value}
        :error-message \"\"}
  
   params is a sequence of param maps
  "
  [request params]
  (let [validate-req-param #(validate-param request %)
        validation-results (map validate-req-param params)
        has-error? #((complement nil?) (:error-message %))
        failed-validations (filter has-error? validation-results)
        passed-validations (filter (complement has-error?) validation-results)
        error-message (:error-message (first failed-validations))
        valid-params (into {} passed-validations)]
    (if (string? error-message)
      {:error-message error-message}
      {:params valid-params})))

(defn success
  [response]
  {:status  200
   :headers {"Content-Type" "application/json"}
   :body    {:error false
             :data response}})
(defn get-thermometer-readings
  [req]
  (let [max-records 50
        default-limit 10
        default-offset 0
        limit-param (-> req :params :limit)
        offset-param (-> req :params :offset)
        limit (if (nil? limit-param) default-limit limit-param)
        offset (if (nil? offset-param) default-offset offset-param)]
    (cond
      (or (< limit 0) (< offset 0))
      (bad-user-input "limit and offset must be greater than 0")
      
      (> limit max-records)
      (bad-user-input (str "only " max-records " may be fetched at a time"))
      
      :else (let [readings (db/get-readings {:limit limit
                                             :offset offset})]
              (success readings)))))

(defroutes all-routes
  (GET "/thermometer-readings" [] get-thermometer-readings))

(defonce server nil)

(defn start-server
  []
  (reset! server (run-server all-routes {:port 8080})))

(defn stop-server []
  (when-not (nil? @server)
    ;; graceful shutdown: wait 100ms for existing requests to be finished
    ;; :timeout is optional, when no timeout, stop immediately
    (@server :timeout 100)
    (reset! server nil)))

(defn -main
  "Exposes a REST API over http to query past temperature readings"
  [& args]
  (start-server))
