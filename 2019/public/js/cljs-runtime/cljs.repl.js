goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21840){
var map__21841 = p__21840;
var map__21841__$1 = (((((!((map__21841 == null))))?(((((map__21841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21841):map__21841);
var m = map__21841__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21841__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21841__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21843_22026 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21844_22027 = null;
var count__21845_22028 = (0);
var i__21846_22029 = (0);
while(true){
if((i__21846_22029 < count__21845_22028)){
var f_22030 = chunk__21844_22027.cljs$core$IIndexed$_nth$arity$2(null,i__21846_22029);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22030], 0));


var G__22031 = seq__21843_22026;
var G__22032 = chunk__21844_22027;
var G__22033 = count__21845_22028;
var G__22034 = (i__21846_22029 + (1));
seq__21843_22026 = G__22031;
chunk__21844_22027 = G__22032;
count__21845_22028 = G__22033;
i__21846_22029 = G__22034;
continue;
} else {
var temp__5720__auto___22035 = cljs.core.seq(seq__21843_22026);
if(temp__5720__auto___22035){
var seq__21843_22036__$1 = temp__5720__auto___22035;
if(cljs.core.chunked_seq_QMARK_(seq__21843_22036__$1)){
var c__4550__auto___22037 = cljs.core.chunk_first(seq__21843_22036__$1);
var G__22090 = cljs.core.chunk_rest(seq__21843_22036__$1);
var G__22091 = c__4550__auto___22037;
var G__22092 = cljs.core.count(c__4550__auto___22037);
var G__22093 = (0);
seq__21843_22026 = G__22090;
chunk__21844_22027 = G__22091;
count__21845_22028 = G__22092;
i__21846_22029 = G__22093;
continue;
} else {
var f_22094 = cljs.core.first(seq__21843_22036__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22094], 0));


var G__22095 = cljs.core.next(seq__21843_22036__$1);
var G__22096 = null;
var G__22097 = (0);
var G__22098 = (0);
seq__21843_22026 = G__22095;
chunk__21844_22027 = G__22096;
count__21845_22028 = G__22097;
i__21846_22029 = G__22098;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22103 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_22103], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_22103)))?cljs.core.second(arglists_22103):arglists_22103)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21856_22104 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21857_22105 = null;
var count__21858_22106 = (0);
var i__21859_22107 = (0);
while(true){
if((i__21859_22107 < count__21858_22106)){
var vec__21879_22108 = chunk__21857_22105.cljs$core$IIndexed$_nth$arity$2(null,i__21859_22107);
var name_22109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21879_22108,(0),null);
var map__21882_22110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21879_22108,(1),null);
var map__21882_22111__$1 = (((((!((map__21882_22110 == null))))?(((((map__21882_22110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21882_22110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21882_22110):map__21882_22110);
var doc_22112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21882_22111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21882_22111__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22109], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22113], 0));

if(cljs.core.truth_(doc_22112)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22112], 0));
} else {
}


var G__22119 = seq__21856_22104;
var G__22120 = chunk__21857_22105;
var G__22121 = count__21858_22106;
var G__22122 = (i__21859_22107 + (1));
seq__21856_22104 = G__22119;
chunk__21857_22105 = G__22120;
count__21858_22106 = G__22121;
i__21859_22107 = G__22122;
continue;
} else {
var temp__5720__auto___22123 = cljs.core.seq(seq__21856_22104);
if(temp__5720__auto___22123){
var seq__21856_22126__$1 = temp__5720__auto___22123;
if(cljs.core.chunked_seq_QMARK_(seq__21856_22126__$1)){
var c__4550__auto___22128 = cljs.core.chunk_first(seq__21856_22126__$1);
var G__22129 = cljs.core.chunk_rest(seq__21856_22126__$1);
var G__22130 = c__4550__auto___22128;
var G__22131 = cljs.core.count(c__4550__auto___22128);
var G__22132 = (0);
seq__21856_22104 = G__22129;
chunk__21857_22105 = G__22130;
count__21858_22106 = G__22131;
i__21859_22107 = G__22132;
continue;
} else {
var vec__21884_22134 = cljs.core.first(seq__21856_22126__$1);
var name_22135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21884_22134,(0),null);
var map__21887_22136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21884_22134,(1),null);
var map__21887_22137__$1 = (((((!((map__21887_22136 == null))))?(((((map__21887_22136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21887_22136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21887_22136):map__21887_22136);
var doc_22138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21887_22137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21887_22137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22135], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22139], 0));

if(cljs.core.truth_(doc_22138)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22138], 0));
} else {
}


var G__22141 = cljs.core.next(seq__21856_22126__$1);
var G__22142 = null;
var G__22143 = (0);
var G__22144 = (0);
seq__21856_22104 = G__22141;
chunk__21857_22105 = G__22142;
count__21858_22106 = G__22143;
i__21859_22107 = G__22144;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21889 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21890 = null;
var count__21891 = (0);
var i__21892 = (0);
while(true){
if((i__21892 < count__21891)){
var role = chunk__21890.cljs$core$IIndexed$_nth$arity$2(null,i__21892);
var temp__5720__auto___22148__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22148__$1)){
var spec_22150 = temp__5720__auto___22148__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22150)], 0));
} else {
}


var G__22151 = seq__21889;
var G__22152 = chunk__21890;
var G__22153 = count__21891;
var G__22154 = (i__21892 + (1));
seq__21889 = G__22151;
chunk__21890 = G__22152;
count__21891 = G__22153;
i__21892 = G__22154;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__21889);
if(temp__5720__auto____$1){
var seq__21889__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21889__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21889__$1);
var G__22155 = cljs.core.chunk_rest(seq__21889__$1);
var G__22156 = c__4550__auto__;
var G__22157 = cljs.core.count(c__4550__auto__);
var G__22158 = (0);
seq__21889 = G__22155;
chunk__21890 = G__22156;
count__21891 = G__22157;
i__21892 = G__22158;
continue;
} else {
var role = cljs.core.first(seq__21889__$1);
var temp__5720__auto___22159__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22159__$2)){
var spec_22160 = temp__5720__auto___22159__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22160)], 0));
} else {
}


var G__22161 = cljs.core.next(seq__21889__$1);
var G__22162 = null;
var G__22163 = (0);
var G__22164 = (0);
seq__21889 = G__22161;
chunk__21890 = G__22162;
count__21891 = G__22163;
i__21892 = G__22164;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__22170 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__22171 = cljs.core.ex_cause(t);
via = G__22170;
t = G__22171;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21910 = datafied_throwable;
var map__21910__$1 = (((((!((map__21910 == null))))?(((((map__21910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21910):map__21910);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21910__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21910__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21910__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21911 = cljs.core.last(via);
var map__21911__$1 = (((((!((map__21911 == null))))?(((((map__21911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21911):map__21911);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21912 = data;
var map__21912__$1 = (((((!((map__21912 == null))))?(((((map__21912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21912):map__21912);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21912__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21912__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21912__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21913 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21913__$1 = (((((!((map__21913 == null))))?(((((map__21913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21913):map__21913);
var top_data = map__21913__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21913__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21919 = phase;
var G__21919__$1 = (((G__21919 instanceof cljs.core.Keyword))?G__21919.fqn:null);
switch (G__21919__$1) {
case "read-source":
var map__21920 = data;
var map__21920__$1 = (((((!((map__21920 == null))))?(((((map__21920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21920):map__21920);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21922 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21922__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21922,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21922);
var G__21922__$2 = (cljs.core.truth_((function (){var fexpr__21923 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21923.cljs$core$IFn$_invoke$arity$1 ? fexpr__21923.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21923.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21922__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21922__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21922__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21922__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21924 = top_data;
var G__21924__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21924,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21924);
var G__21924__$2 = (cljs.core.truth_((function (){var fexpr__21928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21928.cljs$core$IFn$_invoke$arity$1 ? fexpr__21928.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21928.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21924__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21924__$1);
var G__21924__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21924__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21924__$2);
var G__21924__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21924__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21924__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21924__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21924__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21935 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(3),null);
var G__21938 = top_data;
var G__21938__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21938,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21938);
var G__21938__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21938__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21938__$1);
var G__21938__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21938__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21938__$2);
var G__21938__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21938__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21938__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21938__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21938__$4;
}

break;
case "execution":
var vec__21946 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__21946,source__$1,method,file,line,G__21919,G__21919__$1,map__21910,map__21910__$1,via,trace,phase,map__21911,map__21911__$1,type,message,data,map__21912,map__21912__$1,problems,fn,caller,map__21913,map__21913__$1,top_data,source){
return (function (p1__21909_SHARP_){
var or__4131__auto__ = (p1__21909_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__21950 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21950.cljs$core$IFn$_invoke$arity$1 ? fexpr__21950.cljs$core$IFn$_invoke$arity$1(p1__21909_SHARP_) : fexpr__21950.call(null,p1__21909_SHARP_));
}
});})(vec__21946,source__$1,method,file,line,G__21919,G__21919__$1,map__21910,map__21910__$1,via,trace,phase,map__21911,map__21911__$1,type,message,data,map__21912,map__21912__$1,problems,fn,caller,map__21913,map__21913__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__21951 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21951__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21951,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21951);
var G__21951__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21951__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21951__$1);
var G__21951__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21951__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21951__$2);
var G__21951__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21951__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21951__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21951__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21951__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21919__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21956){
var map__21957 = p__21956;
var map__21957__$1 = (((((!((map__21957 == null))))?(((((map__21957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21957):map__21957);
var triage_data = map__21957__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21962 = phase;
var G__21962__$1 = (((G__21962 instanceof cljs.core.Keyword))?G__21962.fqn:null);
switch (G__21962__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21963 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21964 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21965 = loc;
var G__21966 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21970_22486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21971_22487 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21972_22488 = true;
var _STAR_print_fn_STAR__temp_val__21973_22489 = ((function (_STAR_print_newline_STAR__orig_val__21970_22486,_STAR_print_fn_STAR__orig_val__21971_22487,_STAR_print_newline_STAR__temp_val__21972_22488,sb__4661__auto__,G__21963,G__21964,G__21965,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21970_22486,_STAR_print_fn_STAR__orig_val__21971_22487,_STAR_print_newline_STAR__temp_val__21972_22488,sb__4661__auto__,G__21963,G__21964,G__21965,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21972_22488;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21973_22489;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21970_22486,_STAR_print_fn_STAR__orig_val__21971_22487,_STAR_print_newline_STAR__temp_val__21972_22488,_STAR_print_fn_STAR__temp_val__21973_22489,sb__4661__auto__,G__21963,G__21964,G__21965,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__21970_22486,_STAR_print_fn_STAR__orig_val__21971_22487,_STAR_print_newline_STAR__temp_val__21972_22488,_STAR_print_fn_STAR__temp_val__21973_22489,sb__4661__auto__,G__21963,G__21964,G__21965,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21953_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21953_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21970_22486,_STAR_print_fn_STAR__orig_val__21971_22487,_STAR_print_newline_STAR__temp_val__21972_22488,_STAR_print_fn_STAR__temp_val__21973_22489,sb__4661__auto__,G__21963,G__21964,G__21965,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21970_22486,_STAR_print_fn_STAR__orig_val__21971_22487,_STAR_print_newline_STAR__temp_val__21972_22488,_STAR_print_fn_STAR__temp_val__21973_22489,sb__4661__auto__,G__21963,G__21964,G__21965,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21971_22487;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21970_22486;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21963,G__21964,G__21965,G__21966) : format.call(null,G__21963,G__21964,G__21965,G__21966));

break;
case "macroexpansion":
var G__21978 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21979 = cause_type;
var G__21980 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21981 = loc;
var G__21982 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21978,G__21979,G__21980,G__21981,G__21982) : format.call(null,G__21978,G__21979,G__21980,G__21981,G__21982));

break;
case "compile-syntax-check":
var G__21983 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21984 = cause_type;
var G__21985 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21986 = loc;
var G__21987 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21983,G__21984,G__21985,G__21986,G__21987) : format.call(null,G__21983,G__21984,G__21985,G__21986,G__21987));

break;
case "compilation":
var G__21992 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21993 = cause_type;
var G__21994 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21995 = loc;
var G__21996 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21992,G__21993,G__21994,G__21995,G__21996) : format.call(null,G__21992,G__21993,G__21994,G__21995,G__21996));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21997 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21998 = symbol;
var G__21999 = loc;
var G__22000 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22002_22536 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22003_22537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22004_22538 = true;
var _STAR_print_fn_STAR__temp_val__22005_22539 = ((function (_STAR_print_newline_STAR__orig_val__22002_22536,_STAR_print_fn_STAR__orig_val__22003_22537,_STAR_print_newline_STAR__temp_val__22004_22538,sb__4661__auto__,G__21997,G__21998,G__21999,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22002_22536,_STAR_print_fn_STAR__orig_val__22003_22537,_STAR_print_newline_STAR__temp_val__22004_22538,sb__4661__auto__,G__21997,G__21998,G__21999,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22004_22538;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22005_22539;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22002_22536,_STAR_print_fn_STAR__orig_val__22003_22537,_STAR_print_newline_STAR__temp_val__22004_22538,_STAR_print_fn_STAR__temp_val__22005_22539,sb__4661__auto__,G__21997,G__21998,G__21999,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__22002_22536,_STAR_print_fn_STAR__orig_val__22003_22537,_STAR_print_newline_STAR__temp_val__22004_22538,_STAR_print_fn_STAR__temp_val__22005_22539,sb__4661__auto__,G__21997,G__21998,G__21999,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21954_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21954_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22002_22536,_STAR_print_fn_STAR__orig_val__22003_22537,_STAR_print_newline_STAR__temp_val__22004_22538,_STAR_print_fn_STAR__temp_val__22005_22539,sb__4661__auto__,G__21997,G__21998,G__21999,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22002_22536,_STAR_print_fn_STAR__orig_val__22003_22537,_STAR_print_newline_STAR__temp_val__22004_22538,_STAR_print_fn_STAR__temp_val__22005_22539,sb__4661__auto__,G__21997,G__21998,G__21999,G__21962,G__21962__$1,loc,class_name,simple_class,cause_type,format,map__21957,map__21957__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22003_22537;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22002_22536;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21997,G__21998,G__21999,G__22000) : format.call(null,G__21997,G__21998,G__21999,G__22000));
} else {
var G__22010 = "Execution error%s at %s(%s).\n%s\n";
var G__22011 = cause_type;
var G__22012 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22013 = loc;
var G__22014 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22010,G__22011,G__22012,G__22013,G__22014) : format.call(null,G__22010,G__22011,G__22012,G__22013,G__22014));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21962__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
