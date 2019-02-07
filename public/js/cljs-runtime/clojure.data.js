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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__27388){
var vec__27389 = p__27388;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27389,(1),null);
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
var vec__27402 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27402,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27402,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27402,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__27427 = arguments.length;
switch (G__27427) {
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

var G__27485_27799 = clojure.data.equality_partition;
var G__27486_27800 = "null";
var G__27487_27801 = ((function (G__27485_27799,G__27486_27800){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27485_27799,G__27486_27800))
;
goog.object.set(G__27485_27799,G__27486_27800,G__27487_27801);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__27489_27802 = clojure.data.equality_partition;
var G__27490_27803 = "string";
var G__27491_27804 = ((function (G__27489_27802,G__27490_27803){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27489_27802,G__27490_27803))
;
goog.object.set(G__27489_27802,G__27490_27803,G__27491_27804);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__27498_27807 = clojure.data.equality_partition;
var G__27499_27808 = "number";
var G__27500_27809 = ((function (G__27498_27807,G__27499_27808){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27498_27807,G__27499_27808))
;
goog.object.set(G__27498_27807,G__27499_27808,G__27500_27809);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__27507_27814 = clojure.data.equality_partition;
var G__27508_27815 = "array";
var G__27509_27816 = ((function (G__27507_27814,G__27508_27815){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__27507_27814,G__27508_27815))
;
goog.object.set(G__27507_27814,G__27508_27815,G__27509_27816);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__27514_27817 = clojure.data.equality_partition;
var G__27515_27818 = "function";
var G__27516_27819 = ((function (G__27514_27817,G__27515_27818){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27514_27817,G__27515_27818))
;
goog.object.set(G__27514_27817,G__27515_27818,G__27516_27819);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__27528_27820 = clojure.data.equality_partition;
var G__27529_27821 = "boolean";
var G__27530_27822 = ((function (G__27528_27820,G__27529_27821){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27528_27820,G__27529_27821))
;
goog.object.set(G__27528_27820,G__27529_27821,G__27530_27822);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__27531_27824 = clojure.data.equality_partition;
var G__27532_27825 = "_";
var G__27533_27826 = ((function (G__27531_27824,G__27532_27825){
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
});})(G__27531_27824,G__27532_27825))
;
goog.object.set(G__27531_27824,G__27532_27825,G__27533_27826);
goog.object.set(clojure.data.Diff,"null",true);

var G__27602_27859 = clojure.data.diff_similar;
var G__27603_27860 = "null";
var G__27604_27861 = ((function (G__27602_27859,G__27603_27860){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27602_27859,G__27603_27860))
;
goog.object.set(G__27602_27859,G__27603_27860,G__27604_27861);

goog.object.set(clojure.data.Diff,"string",true);

var G__27608_27868 = clojure.data.diff_similar;
var G__27609_27869 = "string";
var G__27610_27870 = ((function (G__27608_27868,G__27609_27869){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27608_27868,G__27609_27869))
;
goog.object.set(G__27608_27868,G__27609_27869,G__27610_27870);

goog.object.set(clojure.data.Diff,"number",true);

var G__27617_27872 = clojure.data.diff_similar;
var G__27618_27873 = "number";
var G__27619_27874 = ((function (G__27617_27872,G__27618_27873){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27617_27872,G__27618_27873))
;
goog.object.set(G__27617_27872,G__27618_27873,G__27619_27874);

goog.object.set(clojure.data.Diff,"array",true);

var G__27621_27877 = clojure.data.diff_similar;
var G__27622_27878 = "array";
var G__27623_27879 = ((function (G__27621_27877,G__27622_27878){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__27621_27877,G__27622_27878))
;
goog.object.set(G__27621_27877,G__27622_27878,G__27623_27879);

goog.object.set(clojure.data.Diff,"function",true);

var G__27628_27881 = clojure.data.diff_similar;
var G__27629_27882 = "function";
var G__27630_27883 = ((function (G__27628_27881,G__27629_27882){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27628_27881,G__27629_27882))
;
goog.object.set(G__27628_27881,G__27629_27882,G__27630_27883);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__27642_27891 = clojure.data.diff_similar;
var G__27643_27892 = "boolean";
var G__27644_27893 = ((function (G__27642_27891,G__27643_27892){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27642_27891,G__27643_27892))
;
goog.object.set(G__27642_27891,G__27643_27892,G__27644_27893);

goog.object.set(clojure.data.Diff,"_",true);

var G__27652_27896 = clojure.data.diff_similar;
var G__27653_27897 = "_";
var G__27654_27898 = ((function (G__27652_27896,G__27653_27897){
return (function (a,b){
var fexpr__27679 = (function (){var G__27681 = clojure.data.equality_partition(a);
var G__27681__$1 = (((G__27681 instanceof cljs.core.Keyword))?G__27681.fqn:null);
switch (G__27681__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27681__$1)].join('')));

}
})();
return (fexpr__27679.cljs$core$IFn$_invoke$arity$2 ? fexpr__27679.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__27679.call(null,a,b));
});})(G__27652_27896,G__27653_27897))
;
goog.object.set(G__27652_27896,G__27653_27897,G__27654_27898);
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
