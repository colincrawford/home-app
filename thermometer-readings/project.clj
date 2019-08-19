(defproject thermometer-readings "0.1.0"
  :description "apps to handle thermometer readings from home app"
  :url "https://github.com/colinlcrawford/home-app"
  :license {:name "MIT"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [http-kit "2.3.0"]
                 [com.novemberain/langohr "5.1.0"]
                 [org.clojure/java.jdbc "0.7.9"]
                 [migratus "1.2.4"]
                 [org.postgresql/postgresql "42.2.6.jre7"]]
  :plugins [[migratus-lein "0.7.2"]]
  :main ^:skip-aot thermometer-readings.core
  :target-path "target/%s"
  :migratus {:store :database
             :migration-dir "migrations"
             :db "jdbc:postgresql://localhost/thermometer_readings?user=thermometer_readings&password=thermometer_readings"}
  :profiles {:uberjar {:aot :all}
             :websocket-server {:main thermometer-readings.websocket-server
                                :uberjar-name "websocket-server"}
             :rest-api {:main thermometer-readings.rest-api
                        :uberjar-name "rest-api"}
             :storage {:main thermometer-readings.storage
                       :uberjar-name "storage"}})
