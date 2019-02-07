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
var G__19401__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19409__i = 0, G__19409__a = new Array(arguments.length -  0);
while (G__19409__i < G__19409__a.length) {G__19409__a[G__19409__i] = arguments[G__19409__i + 0]; ++G__19409__i;}
  args = new cljs.core.IndexedSeq(G__19409__a,0,null);
} 
return G__19401__delegate.call(this,args);};
G__19401.cljs$lang$maxFixedArity = 0;
G__19401.cljs$lang$applyTo = (function (arglist__19411){
var args = cljs.core.seq(arglist__19411);
return G__19401__delegate(args);
});
G__19401.cljs$core$IFn$_invoke$arity$variadic = G__19401__delegate;
return G__19401;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19416__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19421__i = 0, G__19421__a = new Array(arguments.length -  0);
while (G__19421__i < G__19421__a.length) {G__19421__a[G__19421__i] = arguments[G__19421__i + 0]; ++G__19421__i;}
  args = new cljs.core.IndexedSeq(G__19421__a,0,null);
} 
return G__19416__delegate.call(this,args);};
G__19416.cljs$lang$maxFixedArity = 0;
G__19416.cljs$lang$applyTo = (function (arglist__19422){
var args = cljs.core.seq(arglist__19422);
return G__19416__delegate(args);
});
G__19416.cljs$core$IFn$_invoke$arity$variadic = G__19416__delegate;
return G__19416;
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
