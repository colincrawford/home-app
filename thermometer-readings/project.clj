(defproject thermometer-readings "0.1.0"
  :description "apps to handle thermometer readings from home app"
  :url "https://github.com/colinlcrawford/home-app"
  :license {:name "MIT"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [com.novemberain/langohr "5.1.0"]]
  :main ^:skip-aot thermometer-readings.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
