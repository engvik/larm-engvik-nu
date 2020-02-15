goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28754__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28756__i = 0, G__28756__a = new Array(arguments.length -  0);
while (G__28756__i < G__28756__a.length) {G__28756__a[G__28756__i] = arguments[G__28756__i + 0]; ++G__28756__i;}
  args = new cljs.core.IndexedSeq(G__28756__a,0,null);
} 
return G__28754__delegate.call(this,args);};
G__28754.cljs$lang$maxFixedArity = 0;
G__28754.cljs$lang$applyTo = (function (arglist__28757){
var args = cljs.core.seq(arglist__28757);
return G__28754__delegate(args);
});
G__28754.cljs$core$IFn$_invoke$arity$variadic = G__28754__delegate;
return G__28754;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28758__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28763__i = 0, G__28763__a = new Array(arguments.length -  0);
while (G__28763__i < G__28763__a.length) {G__28763__a[G__28763__i] = arguments[G__28763__i + 0]; ++G__28763__i;}
  args = new cljs.core.IndexedSeq(G__28763__a,0,null);
} 
return G__28758__delegate.call(this,args);};
G__28758.cljs$lang$maxFixedArity = 0;
G__28758.cljs$lang$applyTo = (function (arglist__28764){
var args = cljs.core.seq(arglist__28764);
return G__28758__delegate(args);
});
G__28758.cljs$core$IFn$_invoke$arity$variadic = G__28758__delegate;
return G__28758;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
