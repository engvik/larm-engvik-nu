goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__24443){
var vec__24444 = p__24443;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__24452 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__24456 = arguments.length;
switch (G__24456) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__24498_24584 = clojure.data.equality_partition;
var G__24499_24585 = "null";
var G__24500_24586 = ((function (G__24498_24584,G__24499_24585){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24498_24584,G__24499_24585))
;
goog.object.set(G__24498_24584,G__24499_24585,G__24500_24586);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__24504_24587 = clojure.data.equality_partition;
var G__24505_24588 = "string";
var G__24506_24589 = ((function (G__24504_24587,G__24505_24588){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24504_24587,G__24505_24588))
;
goog.object.set(G__24504_24587,G__24505_24588,G__24506_24589);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__24508_24590 = clojure.data.equality_partition;
var G__24509_24591 = "number";
var G__24510_24592 = ((function (G__24508_24590,G__24509_24591){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24508_24590,G__24509_24591))
;
goog.object.set(G__24508_24590,G__24509_24591,G__24510_24592);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__24511_24597 = clojure.data.equality_partition;
var G__24512_24598 = "array";
var G__24513_24599 = ((function (G__24511_24597,G__24512_24598){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__24511_24597,G__24512_24598))
;
goog.object.set(G__24511_24597,G__24512_24598,G__24513_24599);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__24514_24601 = clojure.data.equality_partition;
var G__24515_24602 = "function";
var G__24516_24603 = ((function (G__24514_24601,G__24515_24602){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24514_24601,G__24515_24602))
;
goog.object.set(G__24514_24601,G__24515_24602,G__24516_24603);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__24517_24607 = clojure.data.equality_partition;
var G__24518_24608 = "boolean";
var G__24519_24609 = ((function (G__24517_24607,G__24518_24608){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24517_24607,G__24518_24608))
;
goog.object.set(G__24517_24607,G__24518_24608,G__24519_24609);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__24521_24610 = clojure.data.equality_partition;
var G__24522_24611 = "_";
var G__24523_24612 = ((function (G__24521_24610,G__24522_24611){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__24521_24610,G__24522_24611))
;
goog.object.set(G__24521_24610,G__24522_24611,G__24523_24612);
goog.object.set(clojure.data.Diff,"null",true);

var G__24532_24625 = clojure.data.diff_similar;
var G__24533_24626 = "null";
var G__24534_24627 = ((function (G__24532_24625,G__24533_24626){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24532_24625,G__24533_24626))
;
goog.object.set(G__24532_24625,G__24533_24626,G__24534_24627);

goog.object.set(clojure.data.Diff,"string",true);

var G__24537_24631 = clojure.data.diff_similar;
var G__24538_24632 = "string";
var G__24539_24633 = ((function (G__24537_24631,G__24538_24632){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24537_24631,G__24538_24632))
;
goog.object.set(G__24537_24631,G__24538_24632,G__24539_24633);

goog.object.set(clojure.data.Diff,"number",true);

var G__24541_24634 = clojure.data.diff_similar;
var G__24542_24635 = "number";
var G__24543_24636 = ((function (G__24541_24634,G__24542_24635){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24541_24634,G__24542_24635))
;
goog.object.set(G__24541_24634,G__24542_24635,G__24543_24636);

goog.object.set(clojure.data.Diff,"array",true);

var G__24544_24639 = clojure.data.diff_similar;
var G__24545_24640 = "array";
var G__24546_24641 = ((function (G__24544_24639,G__24545_24640){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__24544_24639,G__24545_24640))
;
goog.object.set(G__24544_24639,G__24545_24640,G__24546_24641);

goog.object.set(clojure.data.Diff,"function",true);

var G__24548_24642 = clojure.data.diff_similar;
var G__24549_24643 = "function";
var G__24550_24644 = ((function (G__24548_24642,G__24549_24643){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24548_24642,G__24549_24643))
;
goog.object.set(G__24548_24642,G__24549_24643,G__24550_24644);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__24552_24649 = clojure.data.diff_similar;
var G__24553_24650 = "boolean";
var G__24554_24651 = ((function (G__24552_24649,G__24553_24650){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24552_24649,G__24553_24650))
;
goog.object.set(G__24552_24649,G__24553_24650,G__24554_24651);

goog.object.set(clojure.data.Diff,"_",true);

var G__24555_24652 = clojure.data.diff_similar;
var G__24556_24653 = "_";
var G__24557_24654 = ((function (G__24555_24652,G__24556_24653){
return (function (a,b){
var fexpr__24560 = (function (){var G__24561 = clojure.data.equality_partition(a);
var G__24561__$1 = (((G__24561 instanceof cljs.core.Keyword))?G__24561.fqn:null);
switch (G__24561__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24561__$1)].join('')));

}
})();
return (fexpr__24560.cljs$core$IFn$_invoke$arity$2 ? fexpr__24560.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__24560.call(null,a,b));
});})(G__24555_24652,G__24556_24653))
;
goog.object.set(G__24555_24652,G__24556_24653,G__24557_24654);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
