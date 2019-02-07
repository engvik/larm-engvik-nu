goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23485){
var map__23487 = p__23485;
var map__23487__$1 = (((((!((map__23487 == null))))?(((((map__23487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23487):map__23487);
var m = map__23487__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23487__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23487__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__23495_23729 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23496_23730 = null;
var count__23497_23731 = (0);
var i__23498_23732 = (0);
while(true){
if((i__23498_23732 < count__23497_23731)){
var f_23735 = chunk__23496_23730.cljs$core$IIndexed$_nth$arity$2(null,i__23498_23732);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23735], 0));


var G__23736 = seq__23495_23729;
var G__23737 = chunk__23496_23730;
var G__23738 = count__23497_23731;
var G__23739 = (i__23498_23732 + (1));
seq__23495_23729 = G__23736;
chunk__23496_23730 = G__23737;
count__23497_23731 = G__23738;
i__23498_23732 = G__23739;
continue;
} else {
var temp__5720__auto___23742 = cljs.core.seq(seq__23495_23729);
if(temp__5720__auto___23742){
var seq__23495_23744__$1 = temp__5720__auto___23742;
if(cljs.core.chunked_seq_QMARK_(seq__23495_23744__$1)){
var c__4550__auto___23745 = cljs.core.chunk_first(seq__23495_23744__$1);
var G__23746 = cljs.core.chunk_rest(seq__23495_23744__$1);
var G__23747 = c__4550__auto___23745;
var G__23748 = cljs.core.count(c__4550__auto___23745);
var G__23749 = (0);
seq__23495_23729 = G__23746;
chunk__23496_23730 = G__23747;
count__23497_23731 = G__23748;
i__23498_23732 = G__23749;
continue;
} else {
var f_23750 = cljs.core.first(seq__23495_23744__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23750], 0));


var G__23751 = cljs.core.next(seq__23495_23744__$1);
var G__23752 = null;
var G__23753 = (0);
var G__23754 = (0);
seq__23495_23729 = G__23751;
chunk__23496_23730 = G__23752;
count__23497_23731 = G__23753;
i__23498_23732 = G__23754;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23755 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23755], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23755)))?cljs.core.second(arglists_23755):arglists_23755)], 0));
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
var seq__23508_23765 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23509_23766 = null;
var count__23510_23767 = (0);
var i__23511_23768 = (0);
while(true){
if((i__23511_23768 < count__23510_23767)){
var vec__23522_23769 = chunk__23509_23766.cljs$core$IIndexed$_nth$arity$2(null,i__23511_23768);
var name_23770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23522_23769,(0),null);
var map__23525_23771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23522_23769,(1),null);
var map__23525_23772__$1 = (((((!((map__23525_23771 == null))))?(((((map__23525_23771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23525_23771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23525_23771):map__23525_23771);
var doc_23773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525_23772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525_23772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23770], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23774], 0));

if(cljs.core.truth_(doc_23773)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23773], 0));
} else {
}


var G__23783 = seq__23508_23765;
var G__23784 = chunk__23509_23766;
var G__23785 = count__23510_23767;
var G__23786 = (i__23511_23768 + (1));
seq__23508_23765 = G__23783;
chunk__23509_23766 = G__23784;
count__23510_23767 = G__23785;
i__23511_23768 = G__23786;
continue;
} else {
var temp__5720__auto___23787 = cljs.core.seq(seq__23508_23765);
if(temp__5720__auto___23787){
var seq__23508_23788__$1 = temp__5720__auto___23787;
if(cljs.core.chunked_seq_QMARK_(seq__23508_23788__$1)){
var c__4550__auto___23789 = cljs.core.chunk_first(seq__23508_23788__$1);
var G__23790 = cljs.core.chunk_rest(seq__23508_23788__$1);
var G__23791 = c__4550__auto___23789;
var G__23792 = cljs.core.count(c__4550__auto___23789);
var G__23793 = (0);
seq__23508_23765 = G__23790;
chunk__23509_23766 = G__23791;
count__23510_23767 = G__23792;
i__23511_23768 = G__23793;
continue;
} else {
var vec__23527_23794 = cljs.core.first(seq__23508_23788__$1);
var name_23795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23527_23794,(0),null);
var map__23530_23796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23527_23794,(1),null);
var map__23530_23797__$1 = (((((!((map__23530_23796 == null))))?(((((map__23530_23796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23530_23796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23530_23796):map__23530_23796);
var doc_23798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23530_23797__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23530_23797__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23795], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23799], 0));

if(cljs.core.truth_(doc_23798)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23798], 0));
} else {
}


var G__23810 = cljs.core.next(seq__23508_23788__$1);
var G__23811 = null;
var G__23812 = (0);
var G__23813 = (0);
seq__23508_23765 = G__23810;
chunk__23509_23766 = G__23811;
count__23510_23767 = G__23812;
i__23511_23768 = G__23813;
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

var seq__23532 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23533 = null;
var count__23534 = (0);
var i__23535 = (0);
while(true){
if((i__23535 < count__23534)){
var role = chunk__23533.cljs$core$IIndexed$_nth$arity$2(null,i__23535);
var temp__5720__auto___23821__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___23821__$1)){
var spec_23825 = temp__5720__auto___23821__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23825)], 0));
} else {
}


var G__23827 = seq__23532;
var G__23828 = chunk__23533;
var G__23829 = count__23534;
var G__23830 = (i__23535 + (1));
seq__23532 = G__23827;
chunk__23533 = G__23828;
count__23534 = G__23829;
i__23535 = G__23830;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__23532);
if(temp__5720__auto____$1){
var seq__23532__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23532__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23532__$1);
var G__23831 = cljs.core.chunk_rest(seq__23532__$1);
var G__23832 = c__4550__auto__;
var G__23833 = cljs.core.count(c__4550__auto__);
var G__23834 = (0);
seq__23532 = G__23831;
chunk__23533 = G__23832;
count__23534 = G__23833;
i__23535 = G__23834;
continue;
} else {
var role = cljs.core.first(seq__23532__$1);
var temp__5720__auto___23839__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___23839__$2)){
var spec_23840 = temp__5720__auto___23839__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23840)], 0));
} else {
}


var G__23842 = cljs.core.next(seq__23532__$1);
var G__23843 = null;
var G__23844 = (0);
var G__23845 = (0);
seq__23532 = G__23842;
chunk__23533 = G__23843;
count__23534 = G__23844;
i__23535 = G__23845;
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
var G__23872 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__23873 = cljs.core.ex_cause(t);
via = G__23872;
t = G__23873;
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
var map__23585 = datafied_throwable;
var map__23585__$1 = (((((!((map__23585 == null))))?(((((map__23585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23585):map__23585);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23585__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23585__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23585__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__23586 = cljs.core.last(via);
var map__23586__$1 = (((((!((map__23586 == null))))?(((((map__23586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23586):map__23586);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23586__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23586__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23586__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23587 = data;
var map__23587__$1 = (((((!((map__23587 == null))))?(((((map__23587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23587):map__23587);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23587__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23587__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23587__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__23588 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__23588__$1 = (((((!((map__23588 == null))))?(((((map__23588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23588):map__23588);
var top_data = map__23588__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23588__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__23603 = phase;
var G__23603__$1 = (((G__23603 instanceof cljs.core.Keyword))?G__23603.fqn:null);
switch (G__23603__$1) {
case "read-source":
var map__23604 = data;
var map__23604__$1 = (((((!((map__23604 == null))))?(((((map__23604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23604):map__23604);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__23609 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__23609__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23609,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23609);
var G__23609__$2 = (cljs.core.truth_((function (){var fexpr__23611 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23611.cljs$core$IFn$_invoke$arity$1 ? fexpr__23611.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23611.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23609__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23609__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23609__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__23612 = top_data;
var G__23612__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23612,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23612);
var G__23612__$2 = (cljs.core.truth_((function (){var fexpr__23613 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23613.cljs$core$IFn$_invoke$arity$1 ? fexpr__23613.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23613.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23612__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23612__$1);
var G__23612__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23612__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23612__$2);
var G__23612__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23612__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23612__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23612__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23612__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__23617 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(3),null);
var G__23621 = top_data;
var G__23621__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23621,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__23621);
var G__23621__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23621__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__23621__$1);
var G__23621__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23621__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__23621__$2);
var G__23621__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23621__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23621__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23621__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23621__$4;
}

break;
case "execution":
var vec__23625 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23625,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23625,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23625,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23625,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__23625,source__$1,method,file,line,G__23603,G__23603__$1,map__23585,map__23585__$1,via,trace,phase,map__23586,map__23586__$1,type,message,data,map__23587,map__23587__$1,problems,fn,caller,map__23588,map__23588__$1,top_data,source){
return (function (p1__23556_SHARP_){
var or__4131__auto__ = (p1__23556_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__23631 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23631.cljs$core$IFn$_invoke$arity$1 ? fexpr__23631.cljs$core$IFn$_invoke$arity$1(p1__23556_SHARP_) : fexpr__23631.call(null,p1__23556_SHARP_));
}
});})(vec__23625,source__$1,method,file,line,G__23603,G__23603__$1,map__23585,map__23585__$1,via,trace,phase,map__23586,map__23586__$1,type,message,data,map__23587,map__23587__$1,problems,fn,caller,map__23588,map__23588__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__23634 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__23634__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23634,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__23634);
var G__23634__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23634__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23634__$1);
var G__23634__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23634__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__23634__$2);
var G__23634__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23634__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__23634__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23634__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23634__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23603__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__23651){
var map__23654 = p__23651;
var map__23654__$1 = (((((!((map__23654 == null))))?(((((map__23654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23654):map__23654);
var triage_data = map__23654__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__23667 = phase;
var G__23667__$1 = (((G__23667 instanceof cljs.core.Keyword))?G__23667.fqn:null);
switch (G__23667__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__23668 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__23669 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23670 = loc;
var G__23671 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23674_23948 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23675_23949 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23676_23950 = true;
var _STAR_print_fn_STAR__temp_val__23677_23951 = ((function (_STAR_print_newline_STAR__orig_val__23674_23948,_STAR_print_fn_STAR__orig_val__23675_23949,_STAR_print_newline_STAR__temp_val__23676_23950,sb__4661__auto__,G__23668,G__23669,G__23670,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23674_23948,_STAR_print_fn_STAR__orig_val__23675_23949,_STAR_print_newline_STAR__temp_val__23676_23950,sb__4661__auto__,G__23668,G__23669,G__23670,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23676_23950;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23677_23951;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__23674_23948,_STAR_print_fn_STAR__orig_val__23675_23949,_STAR_print_newline_STAR__temp_val__23676_23950,_STAR_print_fn_STAR__temp_val__23677_23951,sb__4661__auto__,G__23668,G__23669,G__23670,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__23674_23948,_STAR_print_fn_STAR__orig_val__23675_23949,_STAR_print_newline_STAR__temp_val__23676_23950,_STAR_print_fn_STAR__temp_val__23677_23951,sb__4661__auto__,G__23668,G__23669,G__23670,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__23645_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23645_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__23674_23948,_STAR_print_fn_STAR__orig_val__23675_23949,_STAR_print_newline_STAR__temp_val__23676_23950,_STAR_print_fn_STAR__temp_val__23677_23951,sb__4661__auto__,G__23668,G__23669,G__23670,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__23674_23948,_STAR_print_fn_STAR__orig_val__23675_23949,_STAR_print_newline_STAR__temp_val__23676_23950,_STAR_print_fn_STAR__temp_val__23677_23951,sb__4661__auto__,G__23668,G__23669,G__23670,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23675_23949;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23674_23948;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23668,G__23669,G__23670,G__23671) : format.call(null,G__23668,G__23669,G__23670,G__23671));

break;
case "macroexpansion":
var G__23680 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__23681 = cause_type;
var G__23682 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23683 = loc;
var G__23684 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23680,G__23681,G__23682,G__23683,G__23684) : format.call(null,G__23680,G__23681,G__23682,G__23683,G__23684));

break;
case "compile-syntax-check":
var G__23686 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__23687 = cause_type;
var G__23688 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23689 = loc;
var G__23690 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23686,G__23687,G__23688,G__23689,G__23690) : format.call(null,G__23686,G__23687,G__23688,G__23689,G__23690));

break;
case "compilation":
var G__23691 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__23692 = cause_type;
var G__23693 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23694 = loc;
var G__23695 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23691,G__23692,G__23693,G__23694,G__23695) : format.call(null,G__23691,G__23692,G__23693,G__23694,G__23695));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__23696 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__23697 = symbol;
var G__23698 = loc;
var G__23699 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23700_23985 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23701_23986 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23702_23987 = true;
var _STAR_print_fn_STAR__temp_val__23703_23988 = ((function (_STAR_print_newline_STAR__orig_val__23700_23985,_STAR_print_fn_STAR__orig_val__23701_23986,_STAR_print_newline_STAR__temp_val__23702_23987,sb__4661__auto__,G__23696,G__23697,G__23698,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23700_23985,_STAR_print_fn_STAR__orig_val__23701_23986,_STAR_print_newline_STAR__temp_val__23702_23987,sb__4661__auto__,G__23696,G__23697,G__23698,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23702_23987;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23703_23988;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__23700_23985,_STAR_print_fn_STAR__orig_val__23701_23986,_STAR_print_newline_STAR__temp_val__23702_23987,_STAR_print_fn_STAR__temp_val__23703_23988,sb__4661__auto__,G__23696,G__23697,G__23698,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__23700_23985,_STAR_print_fn_STAR__orig_val__23701_23986,_STAR_print_newline_STAR__temp_val__23702_23987,_STAR_print_fn_STAR__temp_val__23703_23988,sb__4661__auto__,G__23696,G__23697,G__23698,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__23648_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23648_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__23700_23985,_STAR_print_fn_STAR__orig_val__23701_23986,_STAR_print_newline_STAR__temp_val__23702_23987,_STAR_print_fn_STAR__temp_val__23703_23988,sb__4661__auto__,G__23696,G__23697,G__23698,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__23700_23985,_STAR_print_fn_STAR__orig_val__23701_23986,_STAR_print_newline_STAR__temp_val__23702_23987,_STAR_print_fn_STAR__temp_val__23703_23988,sb__4661__auto__,G__23696,G__23697,G__23698,G__23667,G__23667__$1,loc,class_name,simple_class,cause_type,format,map__23654,map__23654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23701_23986;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23700_23985;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23696,G__23697,G__23698,G__23699) : format.call(null,G__23696,G__23697,G__23698,G__23699));
} else {
var G__23704 = "Execution error%s at %s(%s).\n%s\n";
var G__23705 = cause_type;
var G__23706 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23707 = loc;
var G__23708 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23704,G__23705,G__23706,G__23707,G__23708) : format.call(null,G__23704,G__23705,G__23706,G__23707,G__23708));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23667__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
