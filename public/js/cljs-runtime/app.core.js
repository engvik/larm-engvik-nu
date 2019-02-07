goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.views');
app.core.main = (function app$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app], null),document.getElementById("app"));
});
goog.exportSymbol('app.core.main', app.core.main);

//# sourceMappingURL=app.core.js.map
