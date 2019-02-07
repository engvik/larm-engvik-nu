(ns app.views)

(defn header
  []
  [:div {:class "header"}
    [:h1  "Free:Larm"]
    [:p "xx.xx - xx.xx"]
    [:p "Free gigs during by:Larm since 2014!"]])

(defn concerts
  []
  [:div {:class "concerts"}
    [:h2 "2019 coming soon"]])

(defn footer
  []
  [:div {:class "footer"}
    [:p {:class "footer-text"}
      [:a {:href "mailto:lars@engvik.nu"} "Savner du noe?"]
      [:a {:href "https://github.com/engvik/larm-engvik-nu"} "Kode på Github"]
    ]])

(defn app []
  [:div
    [header]
    [concerts]
    [footer]
  ]
)