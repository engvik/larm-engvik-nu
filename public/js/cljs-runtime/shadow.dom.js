goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30142 = coll;
var G__30143 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30142,G__30143) : shadow.dom.lazy_native_coll_seq.call(null,G__30142,G__30143));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__30179 = arguments.length;
switch (G__30179) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__30187 = arguments.length;
switch (G__30187) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__30193 = arguments.length;
switch (G__30193) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__30199 = arguments.length;
switch (G__30199) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__30205 = arguments.length;
switch (G__30205) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__30206 = document;
var G__30207 = shadow.dom.dom_node(el);
return goog.dom.contains(G__30206,G__30207);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__30209 = shadow.dom.dom_node(parent);
var G__30210 = shadow.dom.dom_node(el);
return goog.dom.contains(G__30209,G__30210);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__30213 = shadow.dom.dom_node(el);
var G__30214 = cls;
return goog.dom.classlist.add(G__30213,G__30214);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__30217 = shadow.dom.dom_node(el);
var G__30218 = cls;
return goog.dom.classlist.remove(G__30217,G__30218);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__30222 = arguments.length;
switch (G__30222) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__30225 = shadow.dom.dom_node(el);
var G__30226 = cls;
return goog.dom.classlist.toggle(G__30225,G__30226);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e30232){if((e30232 instanceof Object)){
var e = e30232;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30232;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__30240 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30241 = null;
var count__30242 = (0);
var i__30243 = (0);
while(true){
if((i__30243 < count__30242)){
var el = chunk__30241.cljs$core$IIndexed$_nth$arity$2(null,i__30243);
var handler_31087__$1 = ((function (seq__30240,chunk__30241,count__30242,i__30243,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30240,chunk__30241,count__30242,i__30243,el))
;
var G__30253_31089 = el;
var G__30254_31090 = cljs.core.name(ev);
var G__30255_31091 = handler_31087__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30253_31089,G__30254_31090,G__30255_31091) : shadow.dom.dom_listen.call(null,G__30253_31089,G__30254_31090,G__30255_31091));


var G__31093 = seq__30240;
var G__31094 = chunk__30241;
var G__31095 = count__30242;
var G__31096 = (i__30243 + (1));
seq__30240 = G__31093;
chunk__30241 = G__31094;
count__30242 = G__31095;
i__30243 = G__31096;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30240);
if(temp__5720__auto__){
var seq__30240__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30240__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30240__$1);
var G__31099 = cljs.core.chunk_rest(seq__30240__$1);
var G__31100 = c__4550__auto__;
var G__31101 = cljs.core.count(c__4550__auto__);
var G__31102 = (0);
seq__30240 = G__31099;
chunk__30241 = G__31100;
count__30242 = G__31101;
i__30243 = G__31102;
continue;
} else {
var el = cljs.core.first(seq__30240__$1);
var handler_31103__$1 = ((function (seq__30240,chunk__30241,count__30242,i__30243,el,seq__30240__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30240,chunk__30241,count__30242,i__30243,el,seq__30240__$1,temp__5720__auto__))
;
var G__30257_31106 = el;
var G__30258_31107 = cljs.core.name(ev);
var G__30259_31108 = handler_31103__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30257_31106,G__30258_31107,G__30259_31108) : shadow.dom.dom_listen.call(null,G__30257_31106,G__30258_31107,G__30259_31108));


var G__31110 = cljs.core.next(seq__30240__$1);
var G__31111 = null;
var G__31112 = (0);
var G__31113 = (0);
seq__30240 = G__31110;
chunk__30241 = G__31111;
count__30242 = G__31112;
i__30243 = G__31113;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__30262 = arguments.length;
switch (G__30262) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__30266 = shadow.dom.dom_node(el);
var G__30267 = cljs.core.name(ev);
var G__30268 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30266,G__30267,G__30268) : shadow.dom.dom_listen.call(null,G__30266,G__30267,G__30268));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__30272 = shadow.dom.dom_node(el);
var G__30273 = cljs.core.name(ev);
var G__30274 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__30272,G__30273,G__30274) : shadow.dom.dom_listen_remove.call(null,G__30272,G__30273,G__30274));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__30277 = cljs.core.seq(events);
var chunk__30279 = null;
var count__30280 = (0);
var i__30281 = (0);
while(true){
if((i__30281 < count__30280)){
var vec__30291 = chunk__30279.cljs$core$IIndexed$_nth$arity$2(null,i__30281);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30291,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30291,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31120 = seq__30277;
var G__31121 = chunk__30279;
var G__31122 = count__30280;
var G__31123 = (i__30281 + (1));
seq__30277 = G__31120;
chunk__30279 = G__31121;
count__30280 = G__31122;
i__30281 = G__31123;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30277);
if(temp__5720__auto__){
var seq__30277__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30277__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30277__$1);
var G__31127 = cljs.core.chunk_rest(seq__30277__$1);
var G__31128 = c__4550__auto__;
var G__31129 = cljs.core.count(c__4550__auto__);
var G__31130 = (0);
seq__30277 = G__31127;
chunk__30279 = G__31128;
count__30280 = G__31129;
i__30281 = G__31130;
continue;
} else {
var vec__30297 = cljs.core.first(seq__30277__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30297,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31133 = cljs.core.next(seq__30277__$1);
var G__31134 = null;
var G__31135 = (0);
var G__31136 = (0);
seq__30277 = G__31133;
chunk__30279 = G__31134;
count__30280 = G__31135;
i__30281 = G__31136;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__30301 = cljs.core.seq(styles);
var chunk__30302 = null;
var count__30303 = (0);
var i__30304 = (0);
while(true){
if((i__30304 < count__30303)){
var vec__30322 = chunk__30302.cljs$core$IIndexed$_nth$arity$2(null,i__30304);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30322,(1),null);
var G__30325_31140 = dom;
var G__30326_31141 = cljs.core.name(k);
var G__30327_31142 = (((v == null))?"":v);
goog.style.setStyle(G__30325_31140,G__30326_31141,G__30327_31142);


var G__31143 = seq__30301;
var G__31144 = chunk__30302;
var G__31145 = count__30303;
var G__31146 = (i__30304 + (1));
seq__30301 = G__31143;
chunk__30302 = G__31144;
count__30303 = G__31145;
i__30304 = G__31146;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30301);
if(temp__5720__auto__){
var seq__30301__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30301__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30301__$1);
var G__31147 = cljs.core.chunk_rest(seq__30301__$1);
var G__31148 = c__4550__auto__;
var G__31149 = cljs.core.count(c__4550__auto__);
var G__31150 = (0);
seq__30301 = G__31147;
chunk__30302 = G__31148;
count__30303 = G__31149;
i__30304 = G__31150;
continue;
} else {
var vec__30330 = cljs.core.first(seq__30301__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330,(1),null);
var G__30334_31153 = dom;
var G__30335_31154 = cljs.core.name(k);
var G__30336_31155 = (((v == null))?"":v);
goog.style.setStyle(G__30334_31153,G__30335_31154,G__30336_31155);


var G__31156 = cljs.core.next(seq__30301__$1);
var G__31157 = null;
var G__31158 = (0);
var G__31159 = (0);
seq__30301 = G__31156;
chunk__30302 = G__31157;
count__30303 = G__31158;
i__30304 = G__31159;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__30342_31161 = key;
var G__30342_31162__$1 = (((G__30342_31161 instanceof cljs.core.Keyword))?G__30342_31161.fqn:null);
switch (G__30342_31162__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_31167 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_31167,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_31167,"aria-");
}
})())){
el.setAttribute(ks_31167,value);
} else {
(el[ks_31167] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__30350 = shadow.dom.dom_node(el);
var G__30351 = cls;
return goog.dom.classlist.contains(G__30350,G__30351);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30373){
var map__30375 = p__30373;
var map__30375__$1 = (((((!((map__30375 == null))))?(((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30375):map__30375);
var props = map__30375__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30398 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30403 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30403,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30403;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30415 = arguments.length;
switch (G__30415) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30416){
var vec__30417 = p__30416;
var seq__30418 = cljs.core.seq(vec__30417);
var first__30419 = cljs.core.first(seq__30418);
var seq__30418__$1 = cljs.core.next(seq__30418);
var nn = first__30419;
var first__30419__$1 = cljs.core.first(seq__30418__$1);
var seq__30418__$2 = cljs.core.next(seq__30418__$1);
var np = first__30419__$1;
var nc = seq__30418__$2;
var node = vec__30417;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30436 = nn;
var G__30437 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30436,G__30437) : create_fn.call(null,G__30436,G__30437));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30441 = nn;
var G__30442 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30441,G__30442) : create_fn.call(null,G__30441,G__30442));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30475 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30475,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30475,(1),null);
var seq__30478_31193 = cljs.core.seq(node_children);
var chunk__30479_31194 = null;
var count__30480_31195 = (0);
var i__30481_31196 = (0);
while(true){
if((i__30481_31196 < count__30480_31195)){
var child_struct_31197 = chunk__30479_31194.cljs$core$IIndexed$_nth$arity$2(null,i__30481_31196);
var children_31198 = shadow.dom.dom_node(child_struct_31197);
if(cljs.core.seq_QMARK_(children_31198)){
var seq__30566_31199 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31198));
var chunk__30568_31200 = null;
var count__30569_31201 = (0);
var i__30570_31202 = (0);
while(true){
if((i__30570_31202 < count__30569_31201)){
var child_31203 = chunk__30568_31200.cljs$core$IIndexed$_nth$arity$2(null,i__30570_31202);
if(cljs.core.truth_(child_31203)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31203);


var G__31204 = seq__30566_31199;
var G__31205 = chunk__30568_31200;
var G__31206 = count__30569_31201;
var G__31207 = (i__30570_31202 + (1));
seq__30566_31199 = G__31204;
chunk__30568_31200 = G__31205;
count__30569_31201 = G__31206;
i__30570_31202 = G__31207;
continue;
} else {
var G__31211 = seq__30566_31199;
var G__31212 = chunk__30568_31200;
var G__31213 = count__30569_31201;
var G__31214 = (i__30570_31202 + (1));
seq__30566_31199 = G__31211;
chunk__30568_31200 = G__31212;
count__30569_31201 = G__31213;
i__30570_31202 = G__31214;
continue;
}
} else {
var temp__5720__auto___31215 = cljs.core.seq(seq__30566_31199);
if(temp__5720__auto___31215){
var seq__30566_31216__$1 = temp__5720__auto___31215;
if(cljs.core.chunked_seq_QMARK_(seq__30566_31216__$1)){
var c__4550__auto___31217 = cljs.core.chunk_first(seq__30566_31216__$1);
var G__31218 = cljs.core.chunk_rest(seq__30566_31216__$1);
var G__31219 = c__4550__auto___31217;
var G__31220 = cljs.core.count(c__4550__auto___31217);
var G__31221 = (0);
seq__30566_31199 = G__31218;
chunk__30568_31200 = G__31219;
count__30569_31201 = G__31220;
i__30570_31202 = G__31221;
continue;
} else {
var child_31222 = cljs.core.first(seq__30566_31216__$1);
if(cljs.core.truth_(child_31222)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31222);


var G__31223 = cljs.core.next(seq__30566_31216__$1);
var G__31224 = null;
var G__31225 = (0);
var G__31226 = (0);
seq__30566_31199 = G__31223;
chunk__30568_31200 = G__31224;
count__30569_31201 = G__31225;
i__30570_31202 = G__31226;
continue;
} else {
var G__31227 = cljs.core.next(seq__30566_31216__$1);
var G__31228 = null;
var G__31229 = (0);
var G__31230 = (0);
seq__30566_31199 = G__31227;
chunk__30568_31200 = G__31228;
count__30569_31201 = G__31229;
i__30570_31202 = G__31230;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31198);
}


var G__31231 = seq__30478_31193;
var G__31232 = chunk__30479_31194;
var G__31233 = count__30480_31195;
var G__31234 = (i__30481_31196 + (1));
seq__30478_31193 = G__31231;
chunk__30479_31194 = G__31232;
count__30480_31195 = G__31233;
i__30481_31196 = G__31234;
continue;
} else {
var temp__5720__auto___31235 = cljs.core.seq(seq__30478_31193);
if(temp__5720__auto___31235){
var seq__30478_31240__$1 = temp__5720__auto___31235;
if(cljs.core.chunked_seq_QMARK_(seq__30478_31240__$1)){
var c__4550__auto___31241 = cljs.core.chunk_first(seq__30478_31240__$1);
var G__31242 = cljs.core.chunk_rest(seq__30478_31240__$1);
var G__31243 = c__4550__auto___31241;
var G__31244 = cljs.core.count(c__4550__auto___31241);
var G__31245 = (0);
seq__30478_31193 = G__31242;
chunk__30479_31194 = G__31243;
count__30480_31195 = G__31244;
i__30481_31196 = G__31245;
continue;
} else {
var child_struct_31246 = cljs.core.first(seq__30478_31240__$1);
var children_31247 = shadow.dom.dom_node(child_struct_31246);
if(cljs.core.seq_QMARK_(children_31247)){
var seq__30605_31248 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31247));
var chunk__30607_31249 = null;
var count__30608_31250 = (0);
var i__30609_31251 = (0);
while(true){
if((i__30609_31251 < count__30608_31250)){
var child_31252 = chunk__30607_31249.cljs$core$IIndexed$_nth$arity$2(null,i__30609_31251);
if(cljs.core.truth_(child_31252)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31252);


var G__31253 = seq__30605_31248;
var G__31254 = chunk__30607_31249;
var G__31255 = count__30608_31250;
var G__31256 = (i__30609_31251 + (1));
seq__30605_31248 = G__31253;
chunk__30607_31249 = G__31254;
count__30608_31250 = G__31255;
i__30609_31251 = G__31256;
continue;
} else {
var G__31257 = seq__30605_31248;
var G__31258 = chunk__30607_31249;
var G__31259 = count__30608_31250;
var G__31260 = (i__30609_31251 + (1));
seq__30605_31248 = G__31257;
chunk__30607_31249 = G__31258;
count__30608_31250 = G__31259;
i__30609_31251 = G__31260;
continue;
}
} else {
var temp__5720__auto___31261__$1 = cljs.core.seq(seq__30605_31248);
if(temp__5720__auto___31261__$1){
var seq__30605_31262__$1 = temp__5720__auto___31261__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30605_31262__$1)){
var c__4550__auto___31263 = cljs.core.chunk_first(seq__30605_31262__$1);
var G__31264 = cljs.core.chunk_rest(seq__30605_31262__$1);
var G__31265 = c__4550__auto___31263;
var G__31266 = cljs.core.count(c__4550__auto___31263);
var G__31267 = (0);
seq__30605_31248 = G__31264;
chunk__30607_31249 = G__31265;
count__30608_31250 = G__31266;
i__30609_31251 = G__31267;
continue;
} else {
var child_31268 = cljs.core.first(seq__30605_31262__$1);
if(cljs.core.truth_(child_31268)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31268);


var G__31269 = cljs.core.next(seq__30605_31262__$1);
var G__31270 = null;
var G__31271 = (0);
var G__31272 = (0);
seq__30605_31248 = G__31269;
chunk__30607_31249 = G__31270;
count__30608_31250 = G__31271;
i__30609_31251 = G__31272;
continue;
} else {
var G__31273 = cljs.core.next(seq__30605_31262__$1);
var G__31274 = null;
var G__31275 = (0);
var G__31276 = (0);
seq__30605_31248 = G__31273;
chunk__30607_31249 = G__31274;
count__30608_31250 = G__31275;
i__30609_31251 = G__31276;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31247);
}


var G__31277 = cljs.core.next(seq__30478_31240__$1);
var G__31278 = null;
var G__31279 = (0);
var G__31280 = (0);
seq__30478_31193 = G__31277;
chunk__30479_31194 = G__31278;
count__30480_31195 = G__31279;
i__30481_31196 = G__31280;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__30640 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__30640);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__30651 = cljs.core.seq(node);
var chunk__30652 = null;
var count__30653 = (0);
var i__30654 = (0);
while(true){
if((i__30654 < count__30653)){
var n = chunk__30652.cljs$core$IIndexed$_nth$arity$2(null,i__30654);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31285 = seq__30651;
var G__31286 = chunk__30652;
var G__31287 = count__30653;
var G__31288 = (i__30654 + (1));
seq__30651 = G__31285;
chunk__30652 = G__31286;
count__30653 = G__31287;
i__30654 = G__31288;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30651);
if(temp__5720__auto__){
var seq__30651__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30651__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30651__$1);
var G__31289 = cljs.core.chunk_rest(seq__30651__$1);
var G__31290 = c__4550__auto__;
var G__31291 = cljs.core.count(c__4550__auto__);
var G__31292 = (0);
seq__30651 = G__31289;
chunk__30652 = G__31290;
count__30653 = G__31291;
i__30654 = G__31292;
continue;
} else {
var n = cljs.core.first(seq__30651__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31293 = cljs.core.next(seq__30651__$1);
var G__31294 = null;
var G__31295 = (0);
var G__31296 = (0);
seq__30651 = G__31293;
chunk__30652 = G__31294;
count__30653 = G__31295;
i__30654 = G__31296;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__30669 = shadow.dom.dom_node(new$);
var G__30670 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__30669,G__30670);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__30673 = arguments.length;
switch (G__30673) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__30683 = arguments.length;
switch (G__30683) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__30696 = arguments.length;
switch (G__30696) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31306 = arguments.length;
var i__4731__auto___31307 = (0);
while(true){
if((i__4731__auto___31307 < len__4730__auto___31306)){
args__4736__auto__.push((arguments[i__4731__auto___31307]));

var G__31308 = (i__4731__auto___31307 + (1));
i__4731__auto___31307 = G__31308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__30720_31309 = cljs.core.seq(nodes);
var chunk__30721_31310 = null;
var count__30722_31311 = (0);
var i__30723_31312 = (0);
while(true){
if((i__30723_31312 < count__30722_31311)){
var node_31313 = chunk__30721_31310.cljs$core$IIndexed$_nth$arity$2(null,i__30723_31312);
fragment.appendChild(shadow.dom._to_dom(node_31313));


var G__31314 = seq__30720_31309;
var G__31315 = chunk__30721_31310;
var G__31316 = count__30722_31311;
var G__31317 = (i__30723_31312 + (1));
seq__30720_31309 = G__31314;
chunk__30721_31310 = G__31315;
count__30722_31311 = G__31316;
i__30723_31312 = G__31317;
continue;
} else {
var temp__5720__auto___31321 = cljs.core.seq(seq__30720_31309);
if(temp__5720__auto___31321){
var seq__30720_31322__$1 = temp__5720__auto___31321;
if(cljs.core.chunked_seq_QMARK_(seq__30720_31322__$1)){
var c__4550__auto___31323 = cljs.core.chunk_first(seq__30720_31322__$1);
var G__31324 = cljs.core.chunk_rest(seq__30720_31322__$1);
var G__31325 = c__4550__auto___31323;
var G__31326 = cljs.core.count(c__4550__auto___31323);
var G__31327 = (0);
seq__30720_31309 = G__31324;
chunk__30721_31310 = G__31325;
count__30722_31311 = G__31326;
i__30723_31312 = G__31327;
continue;
} else {
var node_31328 = cljs.core.first(seq__30720_31322__$1);
fragment.appendChild(shadow.dom._to_dom(node_31328));


var G__31329 = cljs.core.next(seq__30720_31322__$1);
var G__31330 = null;
var G__31331 = (0);
var G__31332 = (0);
seq__30720_31309 = G__31329;
chunk__30721_31310 = G__31330;
count__30722_31311 = G__31331;
i__30723_31312 = G__31332;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq30714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30714));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__30735_31333 = cljs.core.seq(scripts);
var chunk__30736_31334 = null;
var count__30737_31335 = (0);
var i__30738_31336 = (0);
while(true){
if((i__30738_31336 < count__30737_31335)){
var vec__30753_31337 = chunk__30736_31334.cljs$core$IIndexed$_nth$arity$2(null,i__30738_31336);
var script_tag_31338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30753_31337,(0),null);
var script_body_31339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30753_31337,(1),null);
eval(script_body_31339);


var G__31340 = seq__30735_31333;
var G__31341 = chunk__30736_31334;
var G__31342 = count__30737_31335;
var G__31343 = (i__30738_31336 + (1));
seq__30735_31333 = G__31340;
chunk__30736_31334 = G__31341;
count__30737_31335 = G__31342;
i__30738_31336 = G__31343;
continue;
} else {
var temp__5720__auto___31344 = cljs.core.seq(seq__30735_31333);
if(temp__5720__auto___31344){
var seq__30735_31345__$1 = temp__5720__auto___31344;
if(cljs.core.chunked_seq_QMARK_(seq__30735_31345__$1)){
var c__4550__auto___31346 = cljs.core.chunk_first(seq__30735_31345__$1);
var G__31347 = cljs.core.chunk_rest(seq__30735_31345__$1);
var G__31348 = c__4550__auto___31346;
var G__31349 = cljs.core.count(c__4550__auto___31346);
var G__31350 = (0);
seq__30735_31333 = G__31347;
chunk__30736_31334 = G__31348;
count__30737_31335 = G__31349;
i__30738_31336 = G__31350;
continue;
} else {
var vec__30759_31351 = cljs.core.first(seq__30735_31345__$1);
var script_tag_31352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30759_31351,(0),null);
var script_body_31353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30759_31351,(1),null);
eval(script_body_31353);


var G__31354 = cljs.core.next(seq__30735_31345__$1);
var G__31355 = null;
var G__31356 = (0);
var G__31357 = (0);
seq__30735_31333 = G__31354;
chunk__30736_31334 = G__31355;
count__30737_31335 = G__31356;
i__30738_31336 = G__31357;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__30763){
var vec__30765 = p__30763;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30765,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30765,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__30783 = shadow.dom.dom_node(el);
var G__30784 = cls;
return goog.dom.getAncestorByClass(G__30783,G__30784);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__30789 = arguments.length;
switch (G__30789) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__30790 = shadow.dom.dom_node(el);
var G__30791 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__30790,G__30791);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__30794 = shadow.dom.dom_node(el);
var G__30795 = cljs.core.name(tag);
var G__30796 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__30794,G__30795,G__30796);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__30797 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__30797);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__30798 = shadow.dom.dom_node(dom);
var G__30799 = value;
return goog.dom.forms.setValue(G__30798,G__30799);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__30801 = cljs.core.seq(style_keys);
var chunk__30802 = null;
var count__30803 = (0);
var i__30804 = (0);
while(true){
if((i__30804 < count__30803)){
var it = chunk__30802.cljs$core$IIndexed$_nth$arity$2(null,i__30804);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31363 = seq__30801;
var G__31364 = chunk__30802;
var G__31365 = count__30803;
var G__31366 = (i__30804 + (1));
seq__30801 = G__31363;
chunk__30802 = G__31364;
count__30803 = G__31365;
i__30804 = G__31366;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30801);
if(temp__5720__auto__){
var seq__30801__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30801__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30801__$1);
var G__31367 = cljs.core.chunk_rest(seq__30801__$1);
var G__31368 = c__4550__auto__;
var G__31369 = cljs.core.count(c__4550__auto__);
var G__31370 = (0);
seq__30801 = G__31367;
chunk__30802 = G__31368;
count__30803 = G__31369;
i__30804 = G__31370;
continue;
} else {
var it = cljs.core.first(seq__30801__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31371 = cljs.core.next(seq__30801__$1);
var G__31372 = null;
var G__31373 = (0);
var G__31374 = (0);
seq__30801 = G__31371;
chunk__30802 = G__31372;
count__30803 = G__31373;
i__30804 = G__31374;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30807,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30811 = k30807;
var G__30811__$1 = (((G__30811 instanceof cljs.core.Keyword))?G__30811.fqn:null);
switch (G__30811__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30807,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30812){
var vec__30813 = p__30812;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30813,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30813,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30806){
var self__ = this;
var G__30806__$1 = this;
return (new cljs.core.RecordIter((0),G__30806__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__30819 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__30819(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30808,other30809){
var self__ = this;
var this30808__$1 = this;
return (((!((other30809 == null)))) && ((this30808__$1.constructor === other30809.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30808__$1.x,other30809.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30808__$1.y,other30809.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30808__$1.__extmap,other30809.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30806){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30826 = cljs.core.keyword_identical_QMARK_;
var expr__30827 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__30831 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__30832 = expr__30827;
return (pred__30826.cljs$core$IFn$_invoke$arity$2 ? pred__30826.cljs$core$IFn$_invoke$arity$2(G__30831,G__30832) : pred__30826.call(null,G__30831,G__30832));
})())){
return (new shadow.dom.Coordinate(G__30806,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30833 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__30834 = expr__30827;
return (pred__30826.cljs$core$IFn$_invoke$arity$2 ? pred__30826.cljs$core$IFn$_invoke$arity$2(G__30833,G__30834) : pred__30826.call(null,G__30833,G__30834));
})())){
return (new shadow.dom.Coordinate(self__.x,G__30806,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__30806),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30806){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__30806,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__30810){
var extmap__4424__auto__ = (function (){var G__30842 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30810,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__30810)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30842);
} else {
return G__30842;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30810),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30810),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__30844 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__30844);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__30848 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__30848);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__30850 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__30850);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30853,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30859 = k30853;
var G__30859__$1 = (((G__30859 instanceof cljs.core.Keyword))?G__30859.fqn:null);
switch (G__30859__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30853,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30863){
var vec__30864 = p__30863;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30864,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30864,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30852){
var self__ = this;
var G__30852__$1 = this;
return (new cljs.core.RecordIter((0),G__30852__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__30871 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__30871(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30854,other30855){
var self__ = this;
var this30854__$1 = this;
return (((!((other30855 == null)))) && ((this30854__$1.constructor === other30855.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30854__$1.w,other30855.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30854__$1.h,other30855.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30854__$1.__extmap,other30855.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30852){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30874 = cljs.core.keyword_identical_QMARK_;
var expr__30875 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__30878 = new cljs.core.Keyword(null,"w","w",354169001);
var G__30879 = expr__30875;
return (pred__30874.cljs$core$IFn$_invoke$arity$2 ? pred__30874.cljs$core$IFn$_invoke$arity$2(G__30878,G__30879) : pred__30874.call(null,G__30878,G__30879));
})())){
return (new shadow.dom.Size(G__30852,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30881 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__30882 = expr__30875;
return (pred__30874.cljs$core$IFn$_invoke$arity$2 ? pred__30874.cljs$core$IFn$_invoke$arity$2(G__30881,G__30882) : pred__30874.call(null,G__30881,G__30882));
})())){
return (new shadow.dom.Size(self__.w,G__30852,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__30852),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30852){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30852,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30856){
var extmap__4424__auto__ = (function (){var G__30891 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30856,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30856)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30891);
} else {
return G__30891;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30856),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30856),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__30894 = shadow.dom.dom_node(el);
return goog.style.getSize(G__30894);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__31408 = (i + (1));
var G__31409 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31408;
ret = G__31409;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30905){
var vec__30906 = p__30905;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30906,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30906,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30911 = arguments.length;
switch (G__30911) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__30918_31416 = new_node;
var G__30919_31417 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__30918_31416,G__30919_31417);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__30921_31418 = new_node;
var G__30922_31419 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__30921_31418,G__30922_31419);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__31420 = ps;
var G__31421 = (i + (1));
el__$1 = G__31420;
i = G__31421;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__30926 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__30926);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__30930 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__30930);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__30931 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__30931);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__30934 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30934,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30934,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30934,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30939_31423 = cljs.core.seq(props);
var chunk__30940_31424 = null;
var count__30941_31425 = (0);
var i__30942_31426 = (0);
while(true){
if((i__30942_31426 < count__30941_31425)){
var vec__30955_31427 = chunk__30940_31424.cljs$core$IIndexed$_nth$arity$2(null,i__30942_31426);
var k_31428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955_31427,(0),null);
var v_31429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955_31427,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_31428);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31428),v_31429);


var G__31430 = seq__30939_31423;
var G__31431 = chunk__30940_31424;
var G__31432 = count__30941_31425;
var G__31433 = (i__30942_31426 + (1));
seq__30939_31423 = G__31430;
chunk__30940_31424 = G__31431;
count__30941_31425 = G__31432;
i__30942_31426 = G__31433;
continue;
} else {
var temp__5720__auto___31434 = cljs.core.seq(seq__30939_31423);
if(temp__5720__auto___31434){
var seq__30939_31435__$1 = temp__5720__auto___31434;
if(cljs.core.chunked_seq_QMARK_(seq__30939_31435__$1)){
var c__4550__auto___31436 = cljs.core.chunk_first(seq__30939_31435__$1);
var G__31437 = cljs.core.chunk_rest(seq__30939_31435__$1);
var G__31438 = c__4550__auto___31436;
var G__31439 = cljs.core.count(c__4550__auto___31436);
var G__31440 = (0);
seq__30939_31423 = G__31437;
chunk__30940_31424 = G__31438;
count__30941_31425 = G__31439;
i__30942_31426 = G__31440;
continue;
} else {
var vec__30959_31441 = cljs.core.first(seq__30939_31435__$1);
var k_31442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30959_31441,(0),null);
var v_31443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30959_31441,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_31442);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31442),v_31443);


var G__31451 = cljs.core.next(seq__30939_31435__$1);
var G__31452 = null;
var G__31453 = (0);
var G__31454 = (0);
seq__30939_31423 = G__31451;
chunk__30940_31424 = G__31452;
count__30941_31425 = G__31453;
i__30942_31426 = G__31454;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__30965 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30965,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30965,(1),null);
var seq__30968_31455 = cljs.core.seq(node_children);
var chunk__30970_31456 = null;
var count__30971_31457 = (0);
var i__30972_31458 = (0);
while(true){
if((i__30972_31458 < count__30971_31457)){
var child_struct_31459 = chunk__30970_31456.cljs$core$IIndexed$_nth$arity$2(null,i__30972_31458);
if((!((child_struct_31459 == null)))){
if(typeof child_struct_31459 === 'string'){
var text_31460 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31460),child_struct_31459].join(''));
} else {
var children_31461 = shadow.dom.svg_node(child_struct_31459);
if(cljs.core.seq_QMARK_(children_31461)){
var seq__30986_31462 = cljs.core.seq(children_31461);
var chunk__30988_31463 = null;
var count__30989_31464 = (0);
var i__30990_31465 = (0);
while(true){
if((i__30990_31465 < count__30989_31464)){
var child_31466 = chunk__30988_31463.cljs$core$IIndexed$_nth$arity$2(null,i__30990_31465);
if(cljs.core.truth_(child_31466)){
node.appendChild(child_31466);


var G__31467 = seq__30986_31462;
var G__31468 = chunk__30988_31463;
var G__31469 = count__30989_31464;
var G__31470 = (i__30990_31465 + (1));
seq__30986_31462 = G__31467;
chunk__30988_31463 = G__31468;
count__30989_31464 = G__31469;
i__30990_31465 = G__31470;
continue;
} else {
var G__31471 = seq__30986_31462;
var G__31472 = chunk__30988_31463;
var G__31473 = count__30989_31464;
var G__31474 = (i__30990_31465 + (1));
seq__30986_31462 = G__31471;
chunk__30988_31463 = G__31472;
count__30989_31464 = G__31473;
i__30990_31465 = G__31474;
continue;
}
} else {
var temp__5720__auto___31475 = cljs.core.seq(seq__30986_31462);
if(temp__5720__auto___31475){
var seq__30986_31476__$1 = temp__5720__auto___31475;
if(cljs.core.chunked_seq_QMARK_(seq__30986_31476__$1)){
var c__4550__auto___31477 = cljs.core.chunk_first(seq__30986_31476__$1);
var G__31478 = cljs.core.chunk_rest(seq__30986_31476__$1);
var G__31479 = c__4550__auto___31477;
var G__31480 = cljs.core.count(c__4550__auto___31477);
var G__31481 = (0);
seq__30986_31462 = G__31478;
chunk__30988_31463 = G__31479;
count__30989_31464 = G__31480;
i__30990_31465 = G__31481;
continue;
} else {
var child_31482 = cljs.core.first(seq__30986_31476__$1);
if(cljs.core.truth_(child_31482)){
node.appendChild(child_31482);


var G__31483 = cljs.core.next(seq__30986_31476__$1);
var G__31484 = null;
var G__31485 = (0);
var G__31486 = (0);
seq__30986_31462 = G__31483;
chunk__30988_31463 = G__31484;
count__30989_31464 = G__31485;
i__30990_31465 = G__31486;
continue;
} else {
var G__31487 = cljs.core.next(seq__30986_31476__$1);
var G__31488 = null;
var G__31489 = (0);
var G__31490 = (0);
seq__30986_31462 = G__31487;
chunk__30988_31463 = G__31488;
count__30989_31464 = G__31489;
i__30990_31465 = G__31490;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31461);
}
}


var G__31492 = seq__30968_31455;
var G__31493 = chunk__30970_31456;
var G__31494 = count__30971_31457;
var G__31495 = (i__30972_31458 + (1));
seq__30968_31455 = G__31492;
chunk__30970_31456 = G__31493;
count__30971_31457 = G__31494;
i__30972_31458 = G__31495;
continue;
} else {
var G__31496 = seq__30968_31455;
var G__31497 = chunk__30970_31456;
var G__31498 = count__30971_31457;
var G__31499 = (i__30972_31458 + (1));
seq__30968_31455 = G__31496;
chunk__30970_31456 = G__31497;
count__30971_31457 = G__31498;
i__30972_31458 = G__31499;
continue;
}
} else {
var temp__5720__auto___31500 = cljs.core.seq(seq__30968_31455);
if(temp__5720__auto___31500){
var seq__30968_31501__$1 = temp__5720__auto___31500;
if(cljs.core.chunked_seq_QMARK_(seq__30968_31501__$1)){
var c__4550__auto___31502 = cljs.core.chunk_first(seq__30968_31501__$1);
var G__31503 = cljs.core.chunk_rest(seq__30968_31501__$1);
var G__31504 = c__4550__auto___31502;
var G__31505 = cljs.core.count(c__4550__auto___31502);
var G__31506 = (0);
seq__30968_31455 = G__31503;
chunk__30970_31456 = G__31504;
count__30971_31457 = G__31505;
i__30972_31458 = G__31506;
continue;
} else {
var child_struct_31507 = cljs.core.first(seq__30968_31501__$1);
if((!((child_struct_31507 == null)))){
if(typeof child_struct_31507 === 'string'){
var text_31509 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31509),child_struct_31507].join(''));
} else {
var children_31510 = shadow.dom.svg_node(child_struct_31507);
if(cljs.core.seq_QMARK_(children_31510)){
var seq__30998_31511 = cljs.core.seq(children_31510);
var chunk__31000_31512 = null;
var count__31001_31513 = (0);
var i__31002_31514 = (0);
while(true){
if((i__31002_31514 < count__31001_31513)){
var child_31515 = chunk__31000_31512.cljs$core$IIndexed$_nth$arity$2(null,i__31002_31514);
if(cljs.core.truth_(child_31515)){
node.appendChild(child_31515);


var G__31516 = seq__30998_31511;
var G__31517 = chunk__31000_31512;
var G__31518 = count__31001_31513;
var G__31519 = (i__31002_31514 + (1));
seq__30998_31511 = G__31516;
chunk__31000_31512 = G__31517;
count__31001_31513 = G__31518;
i__31002_31514 = G__31519;
continue;
} else {
var G__31520 = seq__30998_31511;
var G__31521 = chunk__31000_31512;
var G__31522 = count__31001_31513;
var G__31523 = (i__31002_31514 + (1));
seq__30998_31511 = G__31520;
chunk__31000_31512 = G__31521;
count__31001_31513 = G__31522;
i__31002_31514 = G__31523;
continue;
}
} else {
var temp__5720__auto___31524__$1 = cljs.core.seq(seq__30998_31511);
if(temp__5720__auto___31524__$1){
var seq__30998_31525__$1 = temp__5720__auto___31524__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30998_31525__$1)){
var c__4550__auto___31526 = cljs.core.chunk_first(seq__30998_31525__$1);
var G__31527 = cljs.core.chunk_rest(seq__30998_31525__$1);
var G__31528 = c__4550__auto___31526;
var G__31529 = cljs.core.count(c__4550__auto___31526);
var G__31530 = (0);
seq__30998_31511 = G__31527;
chunk__31000_31512 = G__31528;
count__31001_31513 = G__31529;
i__31002_31514 = G__31530;
continue;
} else {
var child_31531 = cljs.core.first(seq__30998_31525__$1);
if(cljs.core.truth_(child_31531)){
node.appendChild(child_31531);


var G__31532 = cljs.core.next(seq__30998_31525__$1);
var G__31533 = null;
var G__31534 = (0);
var G__31535 = (0);
seq__30998_31511 = G__31532;
chunk__31000_31512 = G__31533;
count__31001_31513 = G__31534;
i__31002_31514 = G__31535;
continue;
} else {
var G__31536 = cljs.core.next(seq__30998_31525__$1);
var G__31537 = null;
var G__31538 = (0);
var G__31539 = (0);
seq__30998_31511 = G__31536;
chunk__31000_31512 = G__31537;
count__31001_31513 = G__31538;
i__31002_31514 = G__31539;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31510);
}
}


var G__31540 = cljs.core.next(seq__30968_31501__$1);
var G__31541 = null;
var G__31542 = (0);
var G__31543 = (0);
seq__30968_31455 = G__31540;
chunk__30970_31456 = G__31541;
count__30971_31457 = G__31542;
i__30972_31458 = G__31543;
continue;
} else {
var G__31544 = cljs.core.next(seq__30968_31501__$1);
var G__31545 = null;
var G__31546 = (0);
var G__31547 = (0);
seq__30968_31455 = G__31544;
chunk__30970_31456 = G__31545;
count__30971_31457 = G__31546;
i__30972_31458 = G__31547;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__31011_31548 = shadow.dom._to_svg;
var G__31012_31549 = "string";
var G__31013_31550 = ((function (G__31011_31548,G__31012_31549){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__31011_31548,G__31012_31549))
;
goog.object.set(G__31011_31548,G__31012_31549,G__31013_31550);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__31016_31551 = shadow.dom._to_svg;
var G__31017_31552 = "null";
var G__31018_31553 = ((function (G__31016_31551,G__31017_31552){
return (function (_){
return null;
});})(G__31016_31551,G__31017_31552))
;
goog.object.set(G__31016_31551,G__31017_31552,G__31018_31553);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31554 = arguments.length;
var i__4731__auto___31555 = (0);
while(true){
if((i__4731__auto___31555 < len__4730__auto___31554)){
args__4736__auto__.push((arguments[i__4731__auto___31555]));

var G__31556 = (i__4731__auto___31555 + (1));
i__4731__auto___31555 = G__31556;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq31020){
var G__31021 = cljs.core.first(seq31020);
var seq31020__$1 = cljs.core.next(seq31020);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31021,seq31020__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__31029 = arguments.length;
switch (G__31029) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__31033_31562 = shadow.dom.dom_node(el);
var G__31034_31563 = cljs.core.name(event);
var G__31035_31564 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31033_31562,G__31034_31563,G__31035_31564) : shadow.dom.dom_listen.call(null,G__31033_31562,G__31034_31563,G__31035_31564));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__27023__auto___31567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___31567,buf,chan,event_fn){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___31567,buf,chan,event_fn){
return (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (1))){
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31041__$1,(2),once_or_cleanup);
} else {
if((state_val_31042 === (2))){
var inst_31038 = (state_31041[(2)]);
var inst_31039 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_31041__$1 = (function (){var statearr_31045 = state_31041;
(statearr_31045[(7)] = inst_31038);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31041__$1,inst_31039);
} else {
return null;
}
}
});})(c__27023__auto___31567,buf,chan,event_fn))
;
return ((function (switch__26722__auto__,c__27023__auto___31567,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__26723__auto__ = null;
var shadow$dom$state_machine__26723__auto____0 = (function (){
var statearr_31047 = [null,null,null,null,null,null,null,null];
(statearr_31047[(0)] = shadow$dom$state_machine__26723__auto__);

(statearr_31047[(1)] = (1));

return statearr_31047;
});
var shadow$dom$state_machine__26723__auto____1 = (function (state_31041){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_31041);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e31049){if((e31049 instanceof Object)){
var ex__26726__auto__ = e31049;
var statearr_31051_31570 = state_31041;
(statearr_31051_31570[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31571 = state_31041;
state_31041 = G__31571;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
shadow$dom$state_machine__26723__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26723__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26723__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26723__auto____0;
shadow$dom$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26723__auto____1;
return shadow$dom$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___31567,buf,chan,event_fn))
})();
var state__27025__auto__ = (function (){var statearr_31054 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_31054[(6)] = c__27023__auto___31567);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___31567,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
