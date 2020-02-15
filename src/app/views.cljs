(ns app.views
  (:require [app.state :refer [app-state]]))

(defn <header>
  []
  [:div {:class "header"}
    [:h1  "Free:Larm"]
    [:p "26.02 - 29.02"]
    [:p "En oversikt over gratiskonsertene by:Larm-uka."]])

(defn <show>
  [{:keys [name time]}]
  [:div {:class "slot"}
    [:span time]
    [:span name]])

(defn <venue>
  [{:keys [title venue url info concerts]}]
  [:div {:class "venue"}
    [:h3 venue]
    [:a {:href url} title]
    [:p info]
    (for [concert (->> concerts)]
      ^{:key (:name concert)} [<show> concert])])

(defn <venues>
  [venues]
  [:div {:class "day"}
    (for [venue (->> venues)]
     ^{:key (:venue venue)} [<venue> venue])])

(defn <day>
  [{:keys [day venues]}]
  [:div 
    [:h2 day]
    [<venues> venues]])

(defn <concerts>
  [days]
  [:div {:class "concerts"}
    (for [day (->> days)]
      ^{:key (:day day)} [<day> day])])

(defn <concerts-container>
  []
  (let [{:keys [days]} @app-state]
    [<concerts> days]))

(defn <footer>
  []
  [:div {:class "footer"}
    [:p {:class "footer-text"}
      [:a {:href "mailto:lars@engvik.nu"} "Savner du noe?"]
      [:a {:href "https://github.com/engvik/larm-engvik-nu"} "Kode på GitHub"]]
    [:span "Siden 2014!"]])

(defn app
  []
  [:div
    [<header>]
    [<concerts-container>]
    [<footer>]])
