(ns app.core
  (:require [reagent.core :as r]
            [app.views :as views]))

(defn ^:export main []
  (r/render [views/app]
    (.getElementById js/document "app")))
