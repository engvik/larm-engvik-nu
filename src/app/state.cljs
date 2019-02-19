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
                                     {:name "Amgala Temple" :time "00:00"}]}
                         {:title "Bru:Larm" :venue "Vaterland" :url "https://www.facebook.com/events/1186660731493711/?event_time_id=1186660738160377" :info ""
                          :concerts [{:name "Hudkreft" :time "19:30"}
                                     {:name "Sorgen" :time "20:30"}
                                     {:name "Lazy Queen" :time "21:30"}
                                     {:name "The New Death Cult" :time "22:30"}]}]}
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
                       {:title "Bru:Larm" :venue "Vaterland" :url "https://www.facebook.com/events/1186660731493711/?event_time_id=1186660741493710" :info ""
                        :concerts [{:name "Psykopath" :time "20:30"}
                                   {:name "Mansters" :time "21:30"}
                                   {:name "Death Throne" :time "22:30"}]}
                       {:title "Off:larm" :venue "Postkontoret" :url "https://www.facebook.com/events/393516471213993/" :info ""
                        :concerts [{:name "Rikke Normann" :time ""}
                                   {:name "Anton Ruud" :time ""}
                                   {:name "Kompass" :time ""}]}]}
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
                                    {:name "Sex Judas" :time ""}]}
                        {:title "Bru:Larm" :venue "Vaterland" :url "https://www.facebook.com/events/1186660731493711/?event_time_id=1186660734827044" :info ""
                         :concerts [{:name "Agenda" :time "21:30"}
                                    {:name "Timeworn" :time "22:30"}]}]}]}))
