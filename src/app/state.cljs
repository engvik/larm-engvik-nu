(ns app.state
 (:require [reagent.core :as r]))

(defonce app-state
  (r/atom {:days
            [{:day "Onsdag"
              :venues [{:title "Agenturet, Tik Records & Blanca Records Showcase" :venue "Ingensteds" :url "https://www.facebook.com/events/591573074603296/" :info ""
                        :concerts [{:name "Elida Høgalmen" :time ""}
                                   {:name "Jonas Hibiki" :time ""}
                                   {:name "Birgitta Alida" :time ""}
                                   {:name "Pelicat" :time ""}
                                   {:name "Verdensrommet DJs" :time ""}]}
                       {:title "Furuberget Showcase" :venue "Tilt" :url "https://www.facebook.com/events/381909052634802/" :info ""
                        :concerts [{:name "Wild Fauna" :time ""}
                                   {:name "TAPE TRASH" :time ""}]}]}
             {:day "Torsdag"
                        :venues [{:title "Jansen Records/Pekula/Blanca Records" :venue "Tilt" :url "https://www.facebook.com/events/2296681343698920/" :info ""
                        :concerts [{:name "Kongle" :time "19:00"}
                                   {:name "Birgitta Alida" :time "20:00"}
                                   {:name "TBA (US/NO)" :time "20:30"}
                                   {:name "Arthur Kay" :time "21:00"}
                                   {:name "Louien" :time "21:30"}
                                   {:name "Orions Belte" :time "22:00"}
                                   {:name "TBA" :time "23:00"}
                                   {:name "Amgala Temple" :time "00:00"}]}]}
             {:day "Fredag"
              :venues [{:title "Apollon Records Off:Larm Showcase" :venue "Uhørt" :url "https://www.facebook.com/events/244316283123036/" :info ""
                        :concerts [{:name "Deathcrush" :time ""}
                                   {:name "Sail By Summer" :time ""}
                                   {:name "Subshine" :time ""}
                                   {:name "The Tronosonic Experience" :time ""}
                                   {:name "35 TAPES" :time ""}]}
                       {:title "Mother Likes It Showcase" :venue "Tilt" :url "https://www.facebook.com/events/2174182142843786/" :info ""
                        :concerts [{:name "Magnus Hængsle" :time "19:00"}
                                   {:name "Ludvig The Band" :time "20:00"}
                                   {:name "Nellys Crush" :time "21:00"}
                                   {:name "Brut Booglaoo" :time "22:00"}]}
                       {:title "Loyal Blood Records Off:larm labelnight" :venue "Vaterland" :url "https://www.facebook.com/events/487810885083685/" :info ""
                        :concerts [{:name "Death Throne" :time ""}
                                   {:name "Mansters" :time ""}
                                   {:name "Psykopath" :time ""}]}]}
             {:day "Lørdag"
              :venues [{:title "Brylarm" :venue "Kulturkirken Jakob" :url "https://www.facebook.com/events/300541287479380/" :info ""
                        :concerts [{:name "Oslo Ess" :time ""}
                                   {:name "Isák" :time ""}
                                   {:name "Pelicat" :time ""}
                                   {:name "Susanna & David Wallumrød" :time ""}
                                   {:name "Magnus Grønneberg" :time ""}]}
                        {:title "Diger Distro Festkveld" :venue "Tilt" :url "https://www.facebook.com/events/2280054258928515/" :info ""
                        :concerts [{:name "Pieces of Juno" :time ""}
                                   {:name "Espen T. Hangård" :time ""}
                                   {:name "Listen to Girl" :time ""}
                                   {:name "KitFai" :time ""}
                                   {:name "Sex Judas" :time ""}]}]}]}))
