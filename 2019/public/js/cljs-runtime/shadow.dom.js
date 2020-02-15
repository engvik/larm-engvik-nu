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
return cljs.core.cons((coll[idx]),(function (){var G__26938 = coll;
var G__26940 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__26938,G__26940) : shadow.dom.lazy_native_coll_seq.call(null,G__26938,G__26940));
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
var G__26984 = arguments.length;
switch (G__26984) {
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
var G__27057 = arguments.length;
switch (G__27057) {
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
var G__27089 = arguments.length;
switch (G__27089) {
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
var G__27117 = arguments.length;
switch (G__27117) {
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
var G__27132 = arguments.length;
switch (G__27132) {
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
var G__27135 = document;
var G__27136 = shadow.dom.dom_node(el);
return goog.dom.contains(G__27135,G__27136);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__27138 = shadow.dom.dom_node(parent);
var G__27139 = shadow.dom.dom_node(el);
return goog.dom.contains(G__27138,G__27139);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__27144 = shadow.dom.dom_node(el);
var G__27145 = cls;
return goog.dom.classlist.add(G__27144,G__27145);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__27150 = shadow.dom.dom_node(el);
var G__27151 = cls;
return goog.dom.classlist.remove(G__27150,G__27151);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__27160 = arguments.length;
switch (G__27160) {
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
var G__27170 = shadow.dom.dom_node(el);
var G__27171 = cls;
return goog.dom.classlist.toggle(G__27170,G__27171);
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
}catch (e27188){if((e27188 instanceof Object)){
var e = e27188;
return console.log("didnt support attachEvent",el,e);
} else {
throw e27188;

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
var seq__27205 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__27206 = null;
var count__27207 = (0);
var i__27208 = (0);
while(true){
if((i__27208 < count__27207)){
var el = chunk__27206.cljs$core$IIndexed$_nth$arity$2(null,i__27208);
var handler_27956__$1 = ((function (seq__27205,chunk__27206,count__27207,i__27208,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__27205,chunk__27206,count__27207,i__27208,el))
;
var G__27232_27957 = el;
var G__27233_27958 = cljs.core.name(ev);
var G__27234_27959 = handler_27956__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__27232_27957,G__27233_27958,G__27234_27959) : shadow.dom.dom_listen.call(null,G__27232_27957,G__27233_27958,G__27234_27959));


var G__27960 = seq__27205;
var G__27961 = chunk__27206;
var G__27962 = count__27207;
var G__27963 = (i__27208 + (1));
seq__27205 = G__27960;
chunk__27206 = G__27961;
count__27207 = G__27962;
i__27208 = G__27963;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27205);
if(temp__5720__auto__){
var seq__27205__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27205__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27205__$1);
var G__27964 = cljs.core.chunk_rest(seq__27205__$1);
var G__27965 = c__4550__auto__;
var G__27966 = cljs.core.count(c__4550__auto__);
var G__27967 = (0);
seq__27205 = G__27964;
chunk__27206 = G__27965;
count__27207 = G__27966;
i__27208 = G__27967;
continue;
} else {
var el = cljs.core.first(seq__27205__$1);
var handler_27968__$1 = ((function (seq__27205,chunk__27206,count__27207,i__27208,el,seq__27205__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__27205,chunk__27206,count__27207,i__27208,el,seq__27205__$1,temp__5720__auto__))
;
var G__27242_27969 = el;
var G__27243_27970 = cljs.core.name(ev);
var G__27244_27971 = handler_27968__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__27242_27969,G__27243_27970,G__27244_27971) : shadow.dom.dom_listen.call(null,G__27242_27969,G__27243_27970,G__27244_27971));


var G__27972 = cljs.core.next(seq__27205__$1);
var G__27973 = null;
var G__27974 = (0);
var G__27975 = (0);
seq__27205 = G__27972;
chunk__27206 = G__27973;
count__27207 = G__27974;
i__27208 = G__27975;
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
var G__27248 = arguments.length;
switch (G__27248) {
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
var G__27263 = shadow.dom.dom_node(el);
var G__27264 = cljs.core.name(ev);
var G__27265 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__27263,G__27264,G__27265) : shadow.dom.dom_listen.call(null,G__27263,G__27264,G__27265));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__27268 = shadow.dom.dom_node(el);
var G__27269 = cljs.core.name(ev);
var G__27270 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__27268,G__27269,G__27270) : shadow.dom.dom_listen_remove.call(null,G__27268,G__27269,G__27270));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__27276 = cljs.core.seq(events);
var chunk__27277 = null;
var count__27278 = (0);
var i__27279 = (0);
while(true){
if((i__27279 < count__27278)){
var vec__27298 = chunk__27277.cljs$core$IIndexed$_nth$arity$2(null,i__27279);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27298,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27298,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__27978 = seq__27276;
var G__27979 = chunk__27277;
var G__27980 = count__27278;
var G__27981 = (i__27279 + (1));
seq__27276 = G__27978;
chunk__27277 = G__27979;
count__27278 = G__27980;
i__27279 = G__27981;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27276);
if(temp__5720__auto__){
var seq__27276__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27276__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27276__$1);
var G__27983 = cljs.core.chunk_rest(seq__27276__$1);
var G__27984 = c__4550__auto__;
var G__27985 = cljs.core.count(c__4550__auto__);
var G__27986 = (0);
seq__27276 = G__27983;
chunk__27277 = G__27984;
count__27278 = G__27985;
i__27279 = G__27986;
continue;
} else {
var vec__27305 = cljs.core.first(seq__27276__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27305,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__27989 = cljs.core.next(seq__27276__$1);
var G__27990 = null;
var G__27991 = (0);
var G__27992 = (0);
seq__27276 = G__27989;
chunk__27277 = G__27990;
count__27278 = G__27991;
i__27279 = G__27992;
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
var seq__27313 = cljs.core.seq(styles);
var chunk__27314 = null;
var count__27315 = (0);
var i__27316 = (0);
while(true){
if((i__27316 < count__27315)){
var vec__27341 = chunk__27314.cljs$core$IIndexed$_nth$arity$2(null,i__27316);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27341,(1),null);
var G__27345_27997 = dom;
var G__27346_27998 = cljs.core.name(k);
var G__27347_27999 = (((v == null))?"":v);
goog.style.setStyle(G__27345_27997,G__27346_27998,G__27347_27999);


var G__28000 = seq__27313;
var G__28001 = chunk__27314;
var G__28002 = count__27315;
var G__28003 = (i__27316 + (1));
seq__27313 = G__28000;
chunk__27314 = G__28001;
count__27315 = G__28002;
i__27316 = G__28003;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27313);
if(temp__5720__auto__){
var seq__27313__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27313__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27313__$1);
var G__28006 = cljs.core.chunk_rest(seq__27313__$1);
var G__28007 = c__4550__auto__;
var G__28008 = cljs.core.count(c__4550__auto__);
var G__28009 = (0);
seq__27313 = G__28006;
chunk__27314 = G__28007;
count__27315 = G__28008;
i__27316 = G__28009;
continue;
} else {
var vec__27352 = cljs.core.first(seq__27313__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27352,(1),null);
var G__27355_28012 = dom;
var G__27356_28013 = cljs.core.name(k);
var G__27357_28014 = (((v == null))?"":v);
goog.style.setStyle(G__27355_28012,G__27356_28013,G__27357_28014);


var G__28015 = cljs.core.next(seq__27313__$1);
var G__28016 = null;
var G__28017 = (0);
var G__28018 = (0);
seq__27313 = G__28015;
chunk__27314 = G__28016;
count__27315 = G__28017;
i__27316 = G__28018;
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
var G__27367_28019 = key;
var G__27367_28020__$1 = (((G__27367_28019 instanceof cljs.core.Keyword))?G__27367_28019.fqn:null);
switch (G__27367_28020__$1) {
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
var ks_28025 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_28025,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_28025,"aria-");
}
})())){
el.setAttribute(ks_28025,value);
} else {
(el[ks_28025] = value);
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
var G__27393 = shadow.dom.dom_node(el);
var G__27394 = cls;
return goog.dom.classlist.contains(G__27393,G__27394);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__27411){
var map__27413 = p__27411;
var map__27413__$1 = (((((!((map__27413 == null))))?(((((map__27413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27413):map__27413);
var props = map__27413__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27413__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__27418 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27418,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27418,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27418,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__27423 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__27423,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__27423;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__27428 = arguments.length;
switch (G__27428) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__27442){
var vec__27443 = p__27442;
var seq__27444 = cljs.core.seq(vec__27443);
var first__27445 = cljs.core.first(seq__27444);
var seq__27444__$1 = cljs.core.next(seq__27444);
var nn = first__27445;
var first__27445__$1 = cljs.core.first(seq__27444__$1);
var seq__27444__$2 = cljs.core.next(seq__27444__$1);
var np = first__27445__$1;
var nc = seq__27444__$2;
var node = vec__27443;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27451 = nn;
var G__27452 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27451,G__27452) : create_fn.call(null,G__27451,G__27452));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27454 = nn;
var G__27455 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27454,G__27455) : create_fn.call(null,G__27454,G__27455));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__27463 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27463,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27463,(1),null);
var seq__27470_28043 = cljs.core.seq(node_children);
var chunk__27471_28044 = null;
var count__27472_28045 = (0);
var i__27473_28046 = (0);
while(true){
if((i__27473_28046 < count__27472_28045)){
var child_struct_28047 = chunk__27471_28044.cljs$core$IIndexed$_nth$arity$2(null,i__27473_28046);
var children_28048 = shadow.dom.dom_node(child_struct_28047);
if(cljs.core.seq_QMARK_(children_28048)){
var seq__27512_28050 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28048));
var chunk__27514_28051 = null;
var count__27515_28052 = (0);
var i__27516_28053 = (0);
while(true){
if((i__27516_28053 < count__27515_28052)){
var child_28055 = chunk__27514_28051.cljs$core$IIndexed$_nth$arity$2(null,i__27516_28053);
if(cljs.core.truth_(child_28055)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28055);


var G__28057 = seq__27512_28050;
var G__28058 = chunk__27514_28051;
var G__28059 = count__27515_28052;
var G__28060 = (i__27516_28053 + (1));
seq__27512_28050 = G__28057;
chunk__27514_28051 = G__28058;
count__27515_28052 = G__28059;
i__27516_28053 = G__28060;
continue;
} else {
var G__28062 = seq__27512_28050;
var G__28063 = chunk__27514_28051;
var G__28064 = count__27515_28052;
var G__28065 = (i__27516_28053 + (1));
seq__27512_28050 = G__28062;
chunk__27514_28051 = G__28063;
count__27515_28052 = G__28064;
i__27516_28053 = G__28065;
continue;
}
} else {
var temp__5720__auto___28066 = cljs.core.seq(seq__27512_28050);
if(temp__5720__auto___28066){
var seq__27512_28068__$1 = temp__5720__auto___28066;
if(cljs.core.chunked_seq_QMARK_(seq__27512_28068__$1)){
var c__4550__auto___28069 = cljs.core.chunk_first(seq__27512_28068__$1);
var G__28070 = cljs.core.chunk_rest(seq__27512_28068__$1);
var G__28071 = c__4550__auto___28069;
var G__28072 = cljs.core.count(c__4550__auto___28069);
var G__28073 = (0);
seq__27512_28050 = G__28070;
chunk__27514_28051 = G__28071;
count__27515_28052 = G__28072;
i__27516_28053 = G__28073;
continue;
} else {
var child_28075 = cljs.core.first(seq__27512_28068__$1);
if(cljs.core.truth_(child_28075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28075);


var G__28077 = cljs.core.next(seq__27512_28068__$1);
var G__28078 = null;
var G__28079 = (0);
var G__28080 = (0);
seq__27512_28050 = G__28077;
chunk__27514_28051 = G__28078;
count__27515_28052 = G__28079;
i__27516_28053 = G__28080;
continue;
} else {
var G__28081 = cljs.core.next(seq__27512_28068__$1);
var G__28082 = null;
var G__28083 = (0);
var G__28084 = (0);
seq__27512_28050 = G__28081;
chunk__27514_28051 = G__28082;
count__27515_28052 = G__28083;
i__27516_28053 = G__28084;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28048);
}


var G__28086 = seq__27470_28043;
var G__28087 = chunk__27471_28044;
var G__28088 = count__27472_28045;
var G__28089 = (i__27473_28046 + (1));
seq__27470_28043 = G__28086;
chunk__27471_28044 = G__28087;
count__27472_28045 = G__28088;
i__27473_28046 = G__28089;
continue;
} else {
var temp__5720__auto___28090 = cljs.core.seq(seq__27470_28043);
if(temp__5720__auto___28090){
var seq__27470_28091__$1 = temp__5720__auto___28090;
if(cljs.core.chunked_seq_QMARK_(seq__27470_28091__$1)){
var c__4550__auto___28092 = cljs.core.chunk_first(seq__27470_28091__$1);
var G__28093 = cljs.core.chunk_rest(seq__27470_28091__$1);
var G__28094 = c__4550__auto___28092;
var G__28095 = cljs.core.count(c__4550__auto___28092);
var G__28096 = (0);
seq__27470_28043 = G__28093;
chunk__27471_28044 = G__28094;
count__27472_28045 = G__28095;
i__27473_28046 = G__28096;
continue;
} else {
var child_struct_28097 = cljs.core.first(seq__27470_28091__$1);
var children_28098 = shadow.dom.dom_node(child_struct_28097);
if(cljs.core.seq_QMARK_(children_28098)){
var seq__27525_28100 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28098));
var chunk__27527_28101 = null;
var count__27528_28102 = (0);
var i__27529_28103 = (0);
while(true){
if((i__27529_28103 < count__27528_28102)){
var child_28105 = chunk__27527_28101.cljs$core$IIndexed$_nth$arity$2(null,i__27529_28103);
if(cljs.core.truth_(child_28105)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28105);


var G__28106 = seq__27525_28100;
var G__28107 = chunk__27527_28101;
var G__28108 = count__27528_28102;
var G__28109 = (i__27529_28103 + (1));
seq__27525_28100 = G__28106;
chunk__27527_28101 = G__28107;
count__27528_28102 = G__28108;
i__27529_28103 = G__28109;
continue;
} else {
var G__28110 = seq__27525_28100;
var G__28111 = chunk__27527_28101;
var G__28112 = count__27528_28102;
var G__28113 = (i__27529_28103 + (1));
seq__27525_28100 = G__28110;
chunk__27527_28101 = G__28111;
count__27528_28102 = G__28112;
i__27529_28103 = G__28113;
continue;
}
} else {
var temp__5720__auto___28114__$1 = cljs.core.seq(seq__27525_28100);
if(temp__5720__auto___28114__$1){
var seq__27525_28115__$1 = temp__5720__auto___28114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27525_28115__$1)){
var c__4550__auto___28116 = cljs.core.chunk_first(seq__27525_28115__$1);
var G__28118 = cljs.core.chunk_rest(seq__27525_28115__$1);
var G__28119 = c__4550__auto___28116;
var G__28120 = cljs.core.count(c__4550__auto___28116);
var G__28121 = (0);
seq__27525_28100 = G__28118;
chunk__27527_28101 = G__28119;
count__27528_28102 = G__28120;
i__27529_28103 = G__28121;
continue;
} else {
var child_28122 = cljs.core.first(seq__27525_28115__$1);
if(cljs.core.truth_(child_28122)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28122);


var G__28124 = cljs.core.next(seq__27525_28115__$1);
var G__28125 = null;
var G__28126 = (0);
var G__28127 = (0);
seq__27525_28100 = G__28124;
chunk__27527_28101 = G__28125;
count__27528_28102 = G__28126;
i__27529_28103 = G__28127;
continue;
} else {
var G__28128 = cljs.core.next(seq__27525_28115__$1);
var G__28129 = null;
var G__28130 = (0);
var G__28131 = (0);
seq__27525_28100 = G__28128;
chunk__27527_28101 = G__28129;
count__27528_28102 = G__28130;
i__27529_28103 = G__28131;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28098);
}


var G__28132 = cljs.core.next(seq__27470_28091__$1);
var G__28133 = null;
var G__28134 = (0);
var G__28135 = (0);
seq__27470_28043 = G__28132;
chunk__27471_28044 = G__28133;
count__27472_28045 = G__28134;
i__27473_28046 = G__28135;
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
var G__27544 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__27544);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__27547 = cljs.core.seq(node);
var chunk__27548 = null;
var count__27549 = (0);
var i__27550 = (0);
while(true){
if((i__27550 < count__27549)){
var n = chunk__27548.cljs$core$IIndexed$_nth$arity$2(null,i__27550);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28141 = seq__27547;
var G__28142 = chunk__27548;
var G__28143 = count__27549;
var G__28144 = (i__27550 + (1));
seq__27547 = G__28141;
chunk__27548 = G__28142;
count__27549 = G__28143;
i__27550 = G__28144;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27547);
if(temp__5720__auto__){
var seq__27547__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27547__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27547__$1);
var G__28146 = cljs.core.chunk_rest(seq__27547__$1);
var G__28147 = c__4550__auto__;
var G__28148 = cljs.core.count(c__4550__auto__);
var G__28149 = (0);
seq__27547 = G__28146;
chunk__27548 = G__28147;
count__27549 = G__28148;
i__27550 = G__28149;
continue;
} else {
var n = cljs.core.first(seq__27547__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28151 = cljs.core.next(seq__27547__$1);
var G__28152 = null;
var G__28153 = (0);
var G__28154 = (0);
seq__27547 = G__28151;
chunk__27548 = G__28152;
count__27549 = G__28153;
i__27550 = G__28154;
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
var G__27567 = shadow.dom.dom_node(new$);
var G__27568 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__27567,G__27568);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__27571 = arguments.length;
switch (G__27571) {
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
var G__27576 = arguments.length;
switch (G__27576) {
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
var G__27590 = arguments.length;
switch (G__27590) {
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
var len__4730__auto___28167 = arguments.length;
var i__4731__auto___28168 = (0);
while(true){
if((i__4731__auto___28168 < len__4730__auto___28167)){
args__4736__auto__.push((arguments[i__4731__auto___28168]));

var G__28170 = (i__4731__auto___28168 + (1));
i__4731__auto___28168 = G__28170;
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
var seq__27595_28172 = cljs.core.seq(nodes);
var chunk__27596_28173 = null;
var count__27597_28174 = (0);
var i__27598_28175 = (0);
while(true){
if((i__27598_28175 < count__27597_28174)){
var node_28176 = chunk__27596_28173.cljs$core$IIndexed$_nth$arity$2(null,i__27598_28175);
fragment.appendChild(shadow.dom._to_dom(node_28176));


var G__28177 = seq__27595_28172;
var G__28178 = chunk__27596_28173;
var G__28179 = count__27597_28174;
var G__28180 = (i__27598_28175 + (1));
seq__27595_28172 = G__28177;
chunk__27596_28173 = G__28178;
count__27597_28174 = G__28179;
i__27598_28175 = G__28180;
continue;
} else {
var temp__5720__auto___28182 = cljs.core.seq(seq__27595_28172);
if(temp__5720__auto___28182){
var seq__27595_28183__$1 = temp__5720__auto___28182;
if(cljs.core.chunked_seq_QMARK_(seq__27595_28183__$1)){
var c__4550__auto___28184 = cljs.core.chunk_first(seq__27595_28183__$1);
var G__28185 = cljs.core.chunk_rest(seq__27595_28183__$1);
var G__28186 = c__4550__auto___28184;
var G__28187 = cljs.core.count(c__4550__auto___28184);
var G__28188 = (0);
seq__27595_28172 = G__28185;
chunk__27596_28173 = G__28186;
count__27597_28174 = G__28187;
i__27598_28175 = G__28188;
continue;
} else {
var node_28190 = cljs.core.first(seq__27595_28183__$1);
fragment.appendChild(shadow.dom._to_dom(node_28190));


var G__28191 = cljs.core.next(seq__27595_28183__$1);
var G__28192 = null;
var G__28193 = (0);
var G__28194 = (0);
seq__27595_28172 = G__28191;
chunk__27596_28173 = G__28192;
count__27597_28174 = G__28193;
i__27598_28175 = G__28194;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq27594){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27594));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__27602_28198 = cljs.core.seq(scripts);
var chunk__27603_28199 = null;
var count__27604_28200 = (0);
var i__27605_28201 = (0);
while(true){
if((i__27605_28201 < count__27604_28200)){
var vec__27615_28202 = chunk__27603_28199.cljs$core$IIndexed$_nth$arity$2(null,i__27605_28201);
var script_tag_28203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27615_28202,(0),null);
var script_body_28204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27615_28202,(1),null);
eval(script_body_28204);


var G__28206 = seq__27602_28198;
var G__28207 = chunk__27603_28199;
var G__28208 = count__27604_28200;
var G__28209 = (i__27605_28201 + (1));
seq__27602_28198 = G__28206;
chunk__27603_28199 = G__28207;
count__27604_28200 = G__28208;
i__27605_28201 = G__28209;
continue;
} else {
var temp__5720__auto___28210 = cljs.core.seq(seq__27602_28198);
if(temp__5720__auto___28210){
var seq__27602_28211__$1 = temp__5720__auto___28210;
if(cljs.core.chunked_seq_QMARK_(seq__27602_28211__$1)){
var c__4550__auto___28212 = cljs.core.chunk_first(seq__27602_28211__$1);
var G__28214 = cljs.core.chunk_rest(seq__27602_28211__$1);
var G__28215 = c__4550__auto___28212;
var G__28216 = cljs.core.count(c__4550__auto___28212);
var G__28217 = (0);
seq__27602_28198 = G__28214;
chunk__27603_28199 = G__28215;
count__27604_28200 = G__28216;
i__27605_28201 = G__28217;
continue;
} else {
var vec__27618_28219 = cljs.core.first(seq__27602_28211__$1);
var script_tag_28220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27618_28219,(0),null);
var script_body_28221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27618_28219,(1),null);
eval(script_body_28221);


var G__28223 = cljs.core.next(seq__27602_28211__$1);
var G__28224 = null;
var G__28225 = (0);
var G__28226 = (0);
seq__27602_28198 = G__28223;
chunk__27603_28199 = G__28224;
count__27604_28200 = G__28225;
i__27605_28201 = G__28226;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__27621){
var vec__27622 = p__27621;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27622,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27622,(1),null);
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
var G__27625 = shadow.dom.dom_node(el);
var G__27626 = cls;
return goog.dom.getAncestorByClass(G__27625,G__27626);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__27628 = arguments.length;
switch (G__27628) {
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
var G__27629 = shadow.dom.dom_node(el);
var G__27630 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__27629,G__27630);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__27631 = shadow.dom.dom_node(el);
var G__27632 = cljs.core.name(tag);
var G__27633 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__27631,G__27632,G__27633);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__27634 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__27634);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__27635 = shadow.dom.dom_node(dom);
var G__27636 = value;
return goog.dom.forms.setValue(G__27635,G__27636);
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
var seq__27638 = cljs.core.seq(style_keys);
var chunk__27639 = null;
var count__27640 = (0);
var i__27641 = (0);
while(true){
if((i__27641 < count__27640)){
var it = chunk__27639.cljs$core$IIndexed$_nth$arity$2(null,i__27641);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__28243 = seq__27638;
var G__28244 = chunk__27639;
var G__28245 = count__27640;
var G__28246 = (i__27641 + (1));
seq__27638 = G__28243;
chunk__27639 = G__28244;
count__27640 = G__28245;
i__27641 = G__28246;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27638);
if(temp__5720__auto__){
var seq__27638__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27638__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27638__$1);
var G__28248 = cljs.core.chunk_rest(seq__27638__$1);
var G__28249 = c__4550__auto__;
var G__28250 = cljs.core.count(c__4550__auto__);
var G__28251 = (0);
seq__27638 = G__28248;
chunk__27639 = G__28249;
count__27640 = G__28250;
i__27641 = G__28251;
continue;
} else {
var it = cljs.core.first(seq__27638__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__28252 = cljs.core.next(seq__27638__$1);
var G__28253 = null;
var G__28254 = (0);
var G__28255 = (0);
seq__27638 = G__28252;
chunk__27639 = G__28253;
count__27640 = G__28254;
i__27641 = G__28255;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27648,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27658 = k27648;
var G__27658__$1 = (((G__27658 instanceof cljs.core.Keyword))?G__27658.fqn:null);
switch (G__27658__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27648,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27659){
var vec__27660 = p__27659;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27660,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27660,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27647){
var self__ = this;
var G__27647__$1 = this;
return (new cljs.core.RecordIter((0),G__27647__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__27668 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27668(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27649,other27650){
var self__ = this;
var this27649__$1 = this;
return (((!((other27650 == null)))) && ((this27649__$1.constructor === other27650.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27649__$1.x,other27650.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27649__$1.y,other27650.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27649__$1.__extmap,other27650.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27647){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27674 = cljs.core.keyword_identical_QMARK_;
var expr__27675 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27677 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__27678 = expr__27675;
return (pred__27674.cljs$core$IFn$_invoke$arity$2 ? pred__27674.cljs$core$IFn$_invoke$arity$2(G__27677,G__27678) : pred__27674.call(null,G__27677,G__27678));
})())){
return (new shadow.dom.Coordinate(G__27647,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27679 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__27680 = expr__27675;
return (pred__27674.cljs$core$IFn$_invoke$arity$2 ? pred__27674.cljs$core$IFn$_invoke$arity$2(G__27679,G__27680) : pred__27674.call(null,G__27679,G__27680));
})())){
return (new shadow.dom.Coordinate(self__.x,G__27647,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27647),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27647){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__27647,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__27651){
var extmap__4424__auto__ = (function (){var G__27686 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27651,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__27651)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27686);
} else {
return G__27686;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27651),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27651),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__27691 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__27691);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__27694 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__27694);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__27696 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__27696);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27700,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27709 = k27700;
var G__27709__$1 = (((G__27709 instanceof cljs.core.Keyword))?G__27709.fqn:null);
switch (G__27709__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27700,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27711){
var vec__27712 = p__27711;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27712,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27712,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27699){
var self__ = this;
var G__27699__$1 = this;
return (new cljs.core.RecordIter((0),G__27699__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__27719 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27719(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27701,other27702){
var self__ = this;
var this27701__$1 = this;
return (((!((other27702 == null)))) && ((this27701__$1.constructor === other27702.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27701__$1.w,other27702.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27701__$1.h,other27702.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27701__$1.__extmap,other27702.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27699){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27722 = cljs.core.keyword_identical_QMARK_;
var expr__27723 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27726 = new cljs.core.Keyword(null,"w","w",354169001);
var G__27727 = expr__27723;
return (pred__27722.cljs$core$IFn$_invoke$arity$2 ? pred__27722.cljs$core$IFn$_invoke$arity$2(G__27726,G__27727) : pred__27722.call(null,G__27726,G__27727));
})())){
return (new shadow.dom.Size(G__27699,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27728 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__27729 = expr__27723;
return (pred__27722.cljs$core$IFn$_invoke$arity$2 ? pred__27722.cljs$core$IFn$_invoke$arity$2(G__27728,G__27729) : pred__27722.call(null,G__27728,G__27729));
})())){
return (new shadow.dom.Size(self__.w,G__27699,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27699),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27699){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__27699,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__27705){
var extmap__4424__auto__ = (function (){var G__27730 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27705,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__27705)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27730);
} else {
return G__27730;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27705),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27705),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__27732 = shadow.dom.dom_node(el);
return goog.style.getSize(G__27732);
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
var G__28298 = (i + (1));
var G__28299 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__28298;
ret = G__28299;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27739){
var vec__27740 = p__27739;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27740,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__27744 = arguments.length;
switch (G__27744) {
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
var G__27746_28304 = new_node;
var G__27747_28305 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__27746_28304,G__27747_28305);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__27749_28306 = new_node;
var G__27750_28307 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__27749_28306,G__27750_28307);

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
var G__28308 = ps;
var G__28309 = (i + (1));
el__$1 = G__28308;
i = G__28309;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__27765 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__27765);
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
var G__27774 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__27774);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__27776 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__27776);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__27783 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27783,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27783,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27783,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__27791_28310 = cljs.core.seq(props);
var chunk__27792_28311 = null;
var count__27793_28312 = (0);
var i__27794_28313 = (0);
while(true){
if((i__27794_28313 < count__27793_28312)){
var vec__27824_28314 = chunk__27792_28311.cljs$core$IIndexed$_nth$arity$2(null,i__27794_28313);
var k_28315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824_28314,(0),null);
var v_28316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824_28314,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_28315);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_28315),v_28316);


var G__28319 = seq__27791_28310;
var G__28320 = chunk__27792_28311;
var G__28321 = count__27793_28312;
var G__28322 = (i__27794_28313 + (1));
seq__27791_28310 = G__28319;
chunk__27792_28311 = G__28320;
count__27793_28312 = G__28321;
i__27794_28313 = G__28322;
continue;
} else {
var temp__5720__auto___28323 = cljs.core.seq(seq__27791_28310);
if(temp__5720__auto___28323){
var seq__27791_28324__$1 = temp__5720__auto___28323;
if(cljs.core.chunked_seq_QMARK_(seq__27791_28324__$1)){
var c__4550__auto___28325 = cljs.core.chunk_first(seq__27791_28324__$1);
var G__28326 = cljs.core.chunk_rest(seq__27791_28324__$1);
var G__28327 = c__4550__auto___28325;
var G__28328 = cljs.core.count(c__4550__auto___28325);
var G__28329 = (0);
seq__27791_28310 = G__28326;
chunk__27792_28311 = G__28327;
count__27793_28312 = G__28328;
i__27794_28313 = G__28329;
continue;
} else {
var vec__27829_28331 = cljs.core.first(seq__27791_28324__$1);
var k_28332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27829_28331,(0),null);
var v_28333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27829_28331,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_28332);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_28332),v_28333);


var G__28335 = cljs.core.next(seq__27791_28324__$1);
var G__28336 = null;
var G__28337 = (0);
var G__28338 = (0);
seq__27791_28310 = G__28335;
chunk__27792_28311 = G__28336;
count__27793_28312 = G__28337;
i__27794_28313 = G__28338;
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
var vec__27836 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27836,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27836,(1),null);
var seq__27841_28339 = cljs.core.seq(node_children);
var chunk__27843_28340 = null;
var count__27844_28341 = (0);
var i__27845_28342 = (0);
while(true){
if((i__27845_28342 < count__27844_28341)){
var child_struct_28343 = chunk__27843_28340.cljs$core$IIndexed$_nth$arity$2(null,i__27845_28342);
if((!((child_struct_28343 == null)))){
if(typeof child_struct_28343 === 'string'){
var text_28344 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_28344),child_struct_28343].join(''));
} else {
var children_28349 = shadow.dom.svg_node(child_struct_28343);
if(cljs.core.seq_QMARK_(children_28349)){
var seq__27872_28350 = cljs.core.seq(children_28349);
var chunk__27874_28351 = null;
var count__27875_28352 = (0);
var i__27876_28353 = (0);
while(true){
if((i__27876_28353 < count__27875_28352)){
var child_28357 = chunk__27874_28351.cljs$core$IIndexed$_nth$arity$2(null,i__27876_28353);
if(cljs.core.truth_(child_28357)){
node.appendChild(child_28357);


var G__28358 = seq__27872_28350;
var G__28359 = chunk__27874_28351;
var G__28360 = count__27875_28352;
var G__28361 = (i__27876_28353 + (1));
seq__27872_28350 = G__28358;
chunk__27874_28351 = G__28359;
count__27875_28352 = G__28360;
i__27876_28353 = G__28361;
continue;
} else {
var G__28362 = seq__27872_28350;
var G__28363 = chunk__27874_28351;
var G__28364 = count__27875_28352;
var G__28365 = (i__27876_28353 + (1));
seq__27872_28350 = G__28362;
chunk__27874_28351 = G__28363;
count__27875_28352 = G__28364;
i__27876_28353 = G__28365;
continue;
}
} else {
var temp__5720__auto___28366 = cljs.core.seq(seq__27872_28350);
if(temp__5720__auto___28366){
var seq__27872_28367__$1 = temp__5720__auto___28366;
if(cljs.core.chunked_seq_QMARK_(seq__27872_28367__$1)){
var c__4550__auto___28368 = cljs.core.chunk_first(seq__27872_28367__$1);
var G__28369 = cljs.core.chunk_rest(seq__27872_28367__$1);
var G__28370 = c__4550__auto___28368;
var G__28371 = cljs.core.count(c__4550__auto___28368);
var G__28372 = (0);
seq__27872_28350 = G__28369;
chunk__27874_28351 = G__28370;
count__27875_28352 = G__28371;
i__27876_28353 = G__28372;
continue;
} else {
var child_28373 = cljs.core.first(seq__27872_28367__$1);
if(cljs.core.truth_(child_28373)){
node.appendChild(child_28373);


var G__28374 = cljs.core.next(seq__27872_28367__$1);
var G__28375 = null;
var G__28376 = (0);
var G__28377 = (0);
seq__27872_28350 = G__28374;
chunk__27874_28351 = G__28375;
count__27875_28352 = G__28376;
i__27876_28353 = G__28377;
continue;
} else {
var G__28378 = cljs.core.next(seq__27872_28367__$1);
var G__28379 = null;
var G__28380 = (0);
var G__28381 = (0);
seq__27872_28350 = G__28378;
chunk__27874_28351 = G__28379;
count__27875_28352 = G__28380;
i__27876_28353 = G__28381;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_28349);
}
}


var G__28382 = seq__27841_28339;
var G__28383 = chunk__27843_28340;
var G__28384 = count__27844_28341;
var G__28385 = (i__27845_28342 + (1));
seq__27841_28339 = G__28382;
chunk__27843_28340 = G__28383;
count__27844_28341 = G__28384;
i__27845_28342 = G__28385;
continue;
} else {
var G__28389 = seq__27841_28339;
var G__28390 = chunk__27843_28340;
var G__28391 = count__27844_28341;
var G__28392 = (i__27845_28342 + (1));
seq__27841_28339 = G__28389;
chunk__27843_28340 = G__28390;
count__27844_28341 = G__28391;
i__27845_28342 = G__28392;
continue;
}
} else {
var temp__5720__auto___28393 = cljs.core.seq(seq__27841_28339);
if(temp__5720__auto___28393){
var seq__27841_28394__$1 = temp__5720__auto___28393;
if(cljs.core.chunked_seq_QMARK_(seq__27841_28394__$1)){
var c__4550__auto___28395 = cljs.core.chunk_first(seq__27841_28394__$1);
var G__28396 = cljs.core.chunk_rest(seq__27841_28394__$1);
var G__28397 = c__4550__auto___28395;
var G__28398 = cljs.core.count(c__4550__auto___28395);
var G__28399 = (0);
seq__27841_28339 = G__28396;
chunk__27843_28340 = G__28397;
count__27844_28341 = G__28398;
i__27845_28342 = G__28399;
continue;
} else {
var child_struct_28400 = cljs.core.first(seq__27841_28394__$1);
if((!((child_struct_28400 == null)))){
if(typeof child_struct_28400 === 'string'){
var text_28401 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_28401),child_struct_28400].join(''));
} else {
var children_28402 = shadow.dom.svg_node(child_struct_28400);
if(cljs.core.seq_QMARK_(children_28402)){
var seq__27886_28403 = cljs.core.seq(children_28402);
var chunk__27888_28404 = null;
var count__27889_28405 = (0);
var i__27890_28406 = (0);
while(true){
if((i__27890_28406 < count__27889_28405)){
var child_28407 = chunk__27888_28404.cljs$core$IIndexed$_nth$arity$2(null,i__27890_28406);
if(cljs.core.truth_(child_28407)){
node.appendChild(child_28407);


var G__28408 = seq__27886_28403;
var G__28409 = chunk__27888_28404;
var G__28410 = count__27889_28405;
var G__28411 = (i__27890_28406 + (1));
seq__27886_28403 = G__28408;
chunk__27888_28404 = G__28409;
count__27889_28405 = G__28410;
i__27890_28406 = G__28411;
continue;
} else {
var G__28415 = seq__27886_28403;
var G__28416 = chunk__27888_28404;
var G__28417 = count__27889_28405;
var G__28418 = (i__27890_28406 + (1));
seq__27886_28403 = G__28415;
chunk__27888_28404 = G__28416;
count__27889_28405 = G__28417;
i__27890_28406 = G__28418;
continue;
}
} else {
var temp__5720__auto___28419__$1 = cljs.core.seq(seq__27886_28403);
if(temp__5720__auto___28419__$1){
var seq__27886_28420__$1 = temp__5720__auto___28419__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27886_28420__$1)){
var c__4550__auto___28421 = cljs.core.chunk_first(seq__27886_28420__$1);
var G__28422 = cljs.core.chunk_rest(seq__27886_28420__$1);
var G__28423 = c__4550__auto___28421;
var G__28424 = cljs.core.count(c__4550__auto___28421);
var G__28425 = (0);
seq__27886_28403 = G__28422;
chunk__27888_28404 = G__28423;
count__27889_28405 = G__28424;
i__27890_28406 = G__28425;
continue;
} else {
var child_28426 = cljs.core.first(seq__27886_28420__$1);
if(cljs.core.truth_(child_28426)){
node.appendChild(child_28426);


var G__28427 = cljs.core.next(seq__27886_28420__$1);
var G__28428 = null;
var G__28429 = (0);
var G__28430 = (0);
seq__27886_28403 = G__28427;
chunk__27888_28404 = G__28428;
count__27889_28405 = G__28429;
i__27890_28406 = G__28430;
continue;
} else {
var G__28431 = cljs.core.next(seq__27886_28420__$1);
var G__28432 = null;
var G__28433 = (0);
var G__28434 = (0);
seq__27886_28403 = G__28431;
chunk__27888_28404 = G__28432;
count__27889_28405 = G__28433;
i__27890_28406 = G__28434;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_28402);
}
}


var G__28435 = cljs.core.next(seq__27841_28394__$1);
var G__28436 = null;
var G__28437 = (0);
var G__28438 = (0);
seq__27841_28339 = G__28435;
chunk__27843_28340 = G__28436;
count__27844_28341 = G__28437;
i__27845_28342 = G__28438;
continue;
} else {
var G__28439 = cljs.core.next(seq__27841_28394__$1);
var G__28440 = null;
var G__28441 = (0);
var G__28442 = (0);
seq__27841_28339 = G__28439;
chunk__27843_28340 = G__28440;
count__27844_28341 = G__28441;
i__27845_28342 = G__28442;
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

var G__27896_28443 = shadow.dom._to_svg;
var G__27897_28444 = "string";
var G__27898_28445 = ((function (G__27896_28443,G__27897_28444){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__27896_28443,G__27897_28444))
;
goog.object.set(G__27896_28443,G__27897_28444,G__27898_28445);

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

var G__27900_28449 = shadow.dom._to_svg;
var G__27901_28450 = "null";
var G__27902_28451 = ((function (G__27900_28449,G__27901_28450){
return (function (_){
return null;
});})(G__27900_28449,G__27901_28450))
;
goog.object.set(G__27900_28449,G__27901_28450,G__27902_28451);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28452 = arguments.length;
var i__4731__auto___28453 = (0);
while(true){
if((i__4731__auto___28453 < len__4730__auto___28452)){
args__4736__auto__.push((arguments[i__4731__auto___28453]));

var G__28454 = (i__4731__auto___28453 + (1));
i__4731__auto___28453 = G__28454;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq27904){
var G__27905 = cljs.core.first(seq27904);
var seq27904__$1 = cljs.core.next(seq27904);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27905,seq27904__$1);
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
var G__27909 = arguments.length;
switch (G__27909) {
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
var G__27913_28460 = shadow.dom.dom_node(el);
var G__27914_28461 = cljs.core.name(event);
var G__27915_28462 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__27913_28460,G__27914_28461,G__27915_28462) : shadow.dom.dom_listen.call(null,G__27913_28460,G__27914_28461,G__27915_28462));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__24338__auto___28463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___28463,buf,chan,event_fn){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___28463,buf,chan,event_fn){
return (function (state_27921){
var state_val_27922 = (state_27921[(1)]);
if((state_val_27922 === (1))){
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27921__$1,(2),once_or_cleanup);
} else {
if((state_val_27922 === (2))){
var inst_27918 = (state_27921[(2)]);
var inst_27919 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_27921__$1 = (function (){var statearr_27925 = state_27921;
(statearr_27925[(7)] = inst_27918);

return statearr_27925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27921__$1,inst_27919);
} else {
return null;
}
}
});})(c__24338__auto___28463,buf,chan,event_fn))
;
return ((function (switch__24084__auto__,c__24338__auto___28463,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__24085__auto__ = null;
var shadow$dom$state_machine__24085__auto____0 = (function (){
var statearr_27926 = [null,null,null,null,null,null,null,null];
(statearr_27926[(0)] = shadow$dom$state_machine__24085__auto__);

(statearr_27926[(1)] = (1));

return statearr_27926;
});
var shadow$dom$state_machine__24085__auto____1 = (function (state_27921){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_27921);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e27928){if((e27928 instanceof Object)){
var ex__24088__auto__ = e27928;
var statearr_27929_28464 = state_27921;
(statearr_27929_28464[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28467 = state_27921;
state_27921 = G__28467;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
shadow$dom$state_machine__24085__auto__ = function(state_27921){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__24085__auto____0.call(this);
case 1:
return shadow$dom$state_machine__24085__auto____1.call(this,state_27921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__24085__auto____0;
shadow$dom$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__24085__auto____1;
return shadow$dom$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___28463,buf,chan,event_fn))
})();
var state__24340__auto__ = (function (){var statearr_27930 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_27930[(6)] = c__24338__auto___28463);

return statearr_27930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___28463,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
