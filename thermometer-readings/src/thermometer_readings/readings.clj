(ns thermometer-readings.readings
  (:gen-class))

(def sample-reading
  {:temperatureFahrenheit 85.0
   :temperatureCelsius    10.5})

(defn collect-reading []
  sample-reading)
