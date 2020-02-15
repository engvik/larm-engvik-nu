goog.provide('app.state');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof app !== 'undefined') && (typeof app.state !== 'undefined') && (typeof app.state.app_state !== 'undefined')){
} else {
app.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"day","day",-274800446),"Onsdag",new cljs.core.Keyword(null,"venues","venues",-1766149966),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Agenturet, Tik Records & Blanca Records Showcase",new cljs.core.Keyword(null,"venue","venue",-731609643),"Ingensteds",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/events/591573074603296/",new cljs.core.Keyword(null,"info","info",-317069002),"",new cljs.core.Keyword(null,"concerts","concerts",1435423155),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Elida H\u00F8galmen",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jonas Hibiki",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Birgitta Alida",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Pelicat",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Verdensrommet DJs",new cljs.core.Keyword(null,"time","time",1385887882),""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Furuberget Showcase",new cljs.core.Keyword(null,"venue","venue",-731609643),"Tilt",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/events/381909052634802/",new cljs.core.Keyword(null,"info","info",-317069002),"",new cljs.core.Keyword(null,"concerts","concerts",1435423155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wild Fauna",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"TAPE TRASH",new cljs.core.Keyword(null,"time","time",1385887882),""], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"day","day",-274800446),"Torsdag",new cljs.core.Keyword(null,"venues","venues",-1766149966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Jansen Records/Pekula/Blanca Records",new cljs.core.Keyword(null,"venue","venue",-731609643),"Tilt",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/events/2296681343698920/",new cljs.core.Keyword(null,"info","info",-317069002),"",new cljs.core.Keyword(null,"concerts","concerts",1435423155),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Kongle",new cljs.core.Keyword(null,"time","time",1385887882),"19:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Birgitta Alida",new cljs.core.Keyword(null,"time","time",1385887882),"20:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"TBA (US/NO)",new cljs.core.Keyword(null,"time","time",1385887882),"20:30"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Arthur Kay",new cljs.core.Keyword(null,"time","time",1385887882),"21:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Louien",new cljs.core.Keyword(null,"time","time",1385887882),"21:30"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Orions Belte",new cljs.core.Keyword(null,"time","time",1385887882),"22:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"TBA",new cljs.core.Keyword(null,"time","time",1385887882),"23:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Amgala Temple",new cljs.core.Keyword(null,"time","time",1385887882),"00:00"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"day","day",-274800446),"Fredag",new cljs.core.Keyword(null,"venues","venues",-1766149966),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Apollon Records Off:Larm Showcase",new cljs.core.Keyword(null,"venue","venue",-731609643),"Uh\u00F8rt",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/events/244316283123036/",new cljs.core.Keyword(null,"info","info",-317069002),"",new cljs.core.Keyword(null,"concerts","concerts",1435423155),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Deathcrush",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sail By Summer",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Subshine",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"The Tronosonic Experience",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"35 TAPES",new cljs.core.Keyword(null,"time","time",1385887882),""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Mother Likes It Showcase",new cljs.core.Keyword(null,"venue","venue",-731609643),"Tilt",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/events/2174182142843786/",new cljs.core.Keyword(null,"info","info",-317069002),"",new cljs.core.Keyword(null,"concerts","concerts",1435423155),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Magnus H\u00E6ngsle",new cljs.core.Keyword(null,"time","time",1385887882),"19:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ludvig The Band",new cljs.core.Keyword(null,"time","time",1385887882),"20:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Nellys Crush",new cljs.core.Keyword(null,"time","time",1385887882),"21:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Brut Booglaoo",new cljs.core.Keyword(null,"time","time",1385887882),"22:00"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Loyal Blood Records Off:larm labelnight",new cljs.core.Keyword(null,"venue","venue",-731609643),"Vaterland",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/events/487810885083685/",new cljs.core.Keyword(null,"info","info",-317069002),"",new cljs.core.Keyword(null,"concerts","concerts",1435423155),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Death Throne",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mansters",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Psykopath",new cljs.core.Keyword(null,"time","time",1385887882),""], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"day","day",-274800446),"L\u00F8rdag",new cljs.core.Keyword(null,"venues","venues",-1766149966),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Brylarm",new cljs.core.Keyword(null,"venue","venue",-731609643),"Kulturkirken Jakob",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/events/300541287479380/",new cljs.core.Keyword(null,"info","info",-317069002),"",new cljs.core.Keyword(null,"concerts","concerts",1435423155),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Oslo Ess",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Is\u00E1k",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Pelicat",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Susanna & David Wallumr\u00F8d",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Magnus Gr\u00F8nneberg",new cljs.core.Keyword(null,"time","time",1385887882),""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Diger Distro Festkveld",new cljs.core.Keyword(null,"venue","venue",-731609643),"Tilt",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/events/2280054258928515/",new cljs.core.Keyword(null,"info","info",-317069002),"",new cljs.core.Keyword(null,"concerts","concerts",1435423155),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Pieces of Juno",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Espen T. Hang\u00E5rd",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Listen to Girl",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"KitFai",new cljs.core.Keyword(null,"time","time",1385887882),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sex Judas",new cljs.core.Keyword(null,"time","time",1385887882),""], null)], null)], null)], null)], null)], null)], null));
}

//# sourceMappingURL=app.state.js.map