(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [web-dashboard.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote web-dashboard.core-test))