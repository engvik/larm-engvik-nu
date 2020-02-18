(ns app.state
 (:require [reagent.core :as r]))

(defonce app-state
  (r/atom {:days
            [{:day "Onsdag"
              :venues [{:title "GEMS Showcase" :venue "Tilt" :url "https://www.facebook.com/events/250467122604625/" :info ""
                        :concerts [{:name "Bård Berg" :time ""}
                                   {:name "Magic Mirror" :time ""}
                                   {:name "Birgitta Alida" :time ""}]}]}
             {:day "Torsdag"
                :venues [{:title "Jansen Records Showcase" :venue "Tilt" :url "https://www.facebook.com/events/500744453979063/" :info ""
                          :concerts [{:name "Kropp" :time "18:30"}
                                   {:name "Vegar & Ivar Band" :time "19:15"}
                                   {:name "Closing Eyes" :time "20:00"}
                                   {:name "Darling West" :time "20:45"}
                                   {:name "Mall Girl" :time "12:30"}
                                   {:name "Mats Wawa" :time "22:15"}
                                   {:name "Kefeider" :time "23:00"}
                                   {:name "The Modern Times" :time "23:45"}
                                   {:name "Soft Ride" :time "00:30"}
                                   {:name "Torgeir Waldemar" :time "01:15"}]}
                        {:title "Svenska:Larm" :venue "Uhørt" :url "https://www.facebook.com/events/229804888029798/" :info ""
                          :concerts [{:name "TAPE TRASH" :time "18:00"}
                                     {:name "Ljushuvud" :time "18:50"}
                                     {:name "Jag & Ellen" :time "19:40"}
                                     {:name "Killer Kid Mozart" :time "20:30"}
                                     {:name "BRAINCOATS" :time "21:20"}]}
                        {:title "Vaterlarm" :venue "Vaterland" :url "https://www.facebook.com/events/783597285470547/" :info ""
                          :concerts [{:name "Blackwater" :time "21:00"}
                                     {:name "Lazy Queen" :time "22:00"}
                                     {:name "WIZRD" :time "23:00"}]}]}
             {:day "Fredag"
              :venues [{:title "SellOut!/Mother Likes It/Sheep Chase Showcase" :venue "Tilt" :url "https://www.facebook.com/events/470698936954829/" :info ""
                        :concerts [{:name "Tone Bringsdal" :time ""}
                                   {:name "Divest" :time ""}
                                   {:name "FOAMMM" :time ""}
                                   {:name "Sweetheart" :time ""}
                                   {:name "Beezewax" :time ""}
                                   {:name "Outer Limit Lotus" :time ""}
                                   {:name "Label" :time ""}
                                   {:name "The Harvey Steel Show" :time ""}
                                   {:name "Mokri" :time ""}]}
                       {:title "Apollon Records Off:Larm Showcase" :venue "Uhørt" :url "https://www.facebook.com/events/491632641743239/" :info ""
                        :concerts [{:name "Anders Buaas" :time ""}
                                   {:name "Bismarck" :time ""}
                                   {:name "Obijan" :time ""}
                                   {:name "Alwanzatar" :time ""}
                                   {:name "The Violent Years" :time ""}]}
                       {:title "Off:larm" :venue "Postkontoret" :url "https://www.facebook.com/events/1693518864149109/" :info ""
                        :concerts [{:name "Jørund Vålandsmyr & Menigheten" :time "19:30"}
                                   {:name "TBA" :time "20:30"}
                                   {:name "The MallRats." :time "21:30"}
                                   {:name "Carina Frantzen" :time "22:30"}]}
                       {:title "Vaterlarm" :venue "Vaterland" :url "https://www.facebook.com/events/206093270509856/" :info ""
                          :concerts [{:name "Rackstraw" :time "21:00"}
                                     {:name "Third Stone" :time "22:00"}
                                     {:name "Draken" :time "23:00"}]}]}
             {:day "Lørdag"
              :venues [{:title "Fysisk Format Showcase" :venue "Tilt" :url "https://www.facebook.com/events/850496845406794/" :info ""
                        :concerts [{:name "HYMN" :time ""}
                                   {:name "Duvel" :time ""}
                                   {:name "Haugust" :time ""}
                                   {:name "Ormskrik" :time ""}
                                   {:name "IEatHeartAttacks" :time ""}
                                   {:name "The Secret Sound of Dreamwalkers" :time ""}]}
                       {:title "Vaterlarm" :venue "Vaterland" :url "https://www.facebook.com/events/186716042737025/" :info ""
                          :concerts [{:name "MAKTKAMP" :time "21:00"}
                                     {:name "Kennel" :time "22:00"}
                                     {:name "Anti Social Rejects" :time "23:00"}]}
                       {:title "Torggatafest" :venue "LOKK" :url "https://bylarm.no/music/news/torggatafest/" :info ""
                        :concerts [{:name "Jonathan Floyd" :time "15:00"}
                                   {:name "UngeKatter" :time "15:40"}
                                   {:name "J-Zino" :time "16:20"}
                                   {:name "Aram" :time "17:00"}
                                   {:name "Bård Berg" :time "17:40"}]}
                       {:title "Torggatafest" :venue "Vans" :url "https://bylarm.no/music/news/torggatafest/" :info ""
                        :concerts [{:name "SANDSLOTT" :time "14:30"}
                                   {:name "Doglover95" :time "15:20"}
                                   {:name "Helmer" :time "16:00"}
                                   {:name "Tapewind" :time "16:40"}
                                   {:name "A Different Message" :time "17:20"}]}
                       {:title "Torggatafest" :venue "Vintage Gitar" :url "https://bylarm.no/music/news/torggatafest/" :info ""
                        :concerts [{:name "von werden" :time "14:00"}
                                   {:name "KitFai" :time "14:40"}
                                   {:name "Castaway Hounds" :time "15:20"}
                                   {:name "WIZRD" :time "16:00"}
                                   {:name "wingdings" :time "16:40"}]}
                       {:title "Torggatafest" :venue "Oche" :url "https://bylarm.no/music/news/torggatafest/" :info ""
                        :concerts [{:name "Caterina Eliza" :time "13:00"}
                                   {:name "Benedikt" :time "13:40"}
                                   {:name "AWSE" :time "14:20"}
                                   {:name "Anna Kajander" :time "15:00"}
                                   {:name "Zueva" :time "15:40"}
                                   {:name "INGO" :time "16:20"}
                                   {:name "I See Rivers" :time "17:00"}]}
                       {:title "Torggatafest" :venue "Festivalteltet" :url "https://bylarm.no/music/news/torggatafest/" :info ""
                        :concerts [{:name "Banaan" :time "15:00"}
                                   {:name "Anna Soleil" :time "15:40"}
                                   {:name "Louam" :time "16:20"}
                                   {:name "Sarah Camille" :time "17:00"}
                                   {:name "Metteson" :time "17:40"}
                                   {:name "Hell:Sector" :time "18:20"}]}]}]}))
