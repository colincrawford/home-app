(ns ^:figwheel-hooks web-dashboard.thermometer-readings)

(defn json-to-map
  "Parses a json string and returns it as a map with keywords"
  [json]
  (-> json
      (js/JSON.parse)
      (js->clj :keywordize-keys true)))

(defn from-json
  "Parses a thermometer reading from a json string"
  [json]
  (let [{:keys [timestamp
                adcValue
                resistance
                voltage
                temperatureCelcius
                temperatureFahrenheit]}
        (json-to-map json)]
    {:timestamp timestamp
     :adc-value adcValue
     :voltage voltage
     :temperature-celcius temperatureCelcius
     :temperature-fahrenheit temperatureFahrenheit}))
