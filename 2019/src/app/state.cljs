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
                                   {:name "Amalie Holt Kleive" :time ""}
                                   {:name "Solå" :time ""}]}
                       {:title "Furuberget Showcase" :venue "Tilt" :url "https://www.facebook.com/events/381909052634802/" :info ""
                        :concerts [{:name "Wild Fauna" :time ""}
                                   {:name "TAPE TRASH" :time ""}
                                   {:name "Posterboys" :time ""}
                                   {:name "Killer Kid Mozart" :time ""}]}
                       {:title "Uhørt Showcase" :venue "Uhørt" :url "https://www.facebook.com/events/356174811636414/" :info ""
                        :concerts [{:name "komakid" :time ""}
                                   {:name "Martin Fjalsett" :time ""}]}]}
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
                                     {:name "The New Death Cult" :time "22:30"}]}
                         {:title "Polar Artist Showcase & Sodd" :venue "Uhørt" :url "https://www.facebook.com/events/655379984880754/" :info ""
                          :concerts [{:name "Sauropod" :time "17:30"}
                                     {:name "JUNO" :time "18:10"}
                                     {:name "SURPRISE!" :time "18:50"}
                                     {:name "Spielbergs" :time "19:30"}]}]}
             {:day "Fredag"
              :venues [{:title "Apollon Records Off:Larm Showcase" :venue "Uhørt" :url "https://www.facebook.com/events/244316283123036/" :info ""
                        :concerts [{:name "35 TAPES" :time "18:00"}
                                   {:name "Subshine" :time "18:40"}
                                   {:name "The Tronosonic Experience" :time "19:20"}
                                   {:name "Sail By Summer" :time "20:00"}
                                   {:name "Deathcrush" :time "20:30"}]}
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
                                    {:name "Timeworn" :time "22:30"}]}
                        {:title "Karisma Records Off:Larm" :venue "Uhørt" :url "https://www.facebook.com/events/554063654999944/" :info ""
                         :concerts [{:name "Wobbler" :time ""}
                                    {:name "Oak" :time ""}
                                    {:name "Fervent Mind" :time ""}
                                    {:name "Superlynx" :time ""}]}
                        {:title "Torggatafest" :venue "LOKK" :url "https://bylarm.no/torggatafest/" :info ""
                         :concerts [{:name "Ruben Dawson" :time "15:00"}
                                    {:name "Jonas Farah" :time "15:50"}
                                    {:name "Tovanski & Martin Massiv" :time "16:40"}
                                    {:name "LeJamz" :time "17:30"}
                                    {:name "Big Daddy Karsten" :time "18:20"}]}
                        {:title "Torggatafest" :venue "Konrad" :url "https://bylarm.no/torggatafest/" :info ""
                         :concerts [{:name "From Scratch" :time "15:00"}
                                    {:name "Klossmajor" :time "15:40"}
                                    {:name "Avind" :time "16:20"}
                                    {:name "Soft Punch" :time "17:00"}
                                    {:name "Murmur" :time "17:40"}
                                    {:name "Joggebukse" :time "18:20"}
                                    {:name "Alphie" :time "19:00"}
                                    {:name "Bakka Street-Boyz" :time "19:40"}]}
                        {:title "Torggatafest" :venue "Shoebar" :url "https://bylarm.no/torggatafest/" :info ""
                         :concerts [{:name "Hanne Fjeldstad" :time "15:00"}
                                    {:name "Masåva" :time "15:50"}
                                    {:name "Mia Berg" :time "16:40"}
                                    {:name "Sqrow" :time "17:30"}
                                    {:name "Anna Kajander" :time "18:20"}]}
                        {:title "Torggatafest" :venue "VANS" :url "https://bylarm.no/torggatafest/" :info ""
                         :concerts [{:name "Draug" :time "15:25"}
                                    {:name "Killer Kid Mozart" :time "16:15"}
                                    {:name "Globox" :time "17:05"}
                                    {:name "Skalla" :time "17:55"}
                                    {:name "Æsthetica" :time "18:45"}]}
                        {:title "Torggatafest" :venue "Vintage Gitar" :url "https://bylarm.no/torggatafest/" :info ""
                         :concerts [{:name "Erik Lindo" :time "15:00"}
                                    {:name "Ask Carol" :time "15:50"}
                                    {:name "MGUN" :time "16:40"}
                                    {:name "Tobi Duschampe" :time "17:30"}
                                    {:name "Bendik Bergestig" :time "18:20"}]}
                        {:title "Torggatafest" :venue "Festivalteltet" :url "https://bylarm.no/torggatafest/" :info ""
                         :concerts [{:name "KitFai" :time "15:00"}
                                    {:name "Beharie" :time "15:40"}
                                    {:name "Mindtrix" :time "16:20"}
                                    {:name "Louam" :time "17:00"}
                                    {:name "Queendom" :time "17:40"}
                                    {:name "Finding Neo" :time "18:20"}]}
                        {:title "Torggatafest" :venue "Peoples" :url "https://bylarm.no/torggatafest/" :info ""
                         :concerts [{:name "Nani" :time "15:20"}
                                    {:name "Ewezy" :time "16:00"}
                                    {:name "Mukaina" :time "16:40"}
                                    {:name "Martin O" :time "17:20"}
                                    {:name "KPLR" :time "18:00"}]}
                        {:title "Torggatafest" :venue "Dr Martens" :url "https://bylarm.no/torggatafest/" :info ""
                         :concerts [{:name "Drago" :time "15:00"}
                                    {:name "Sweam" :time "15:50"}
                                    {:name "2nd Class People" :time "16:40"}
                                    {:name "Wild Fauna" :time "17:30"}
                                    {:name "Svalestup" :time "18:20"}]}]}]}))
