goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32490 = arguments.length;
var i__4731__auto___32491 = (0);
while(true){
if((i__4731__auto___32491 < len__4730__auto___32490)){
args__4736__auto__.push((arguments[i__4731__auto___32491]));

var G__32492 = (i__4731__auto___32491 + (1));
i__4731__auto___32491 = G__32492;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq32323){
var G__32324 = cljs.core.first(seq32323);
var seq32323__$1 = cljs.core.next(seq32323);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32324,seq32323__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__32337){
var map__32338 = p__32337;
var map__32338__$1 = (((((!((map__32338 == null))))?(((((map__32338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32338):map__32338);
var src = map__32338__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32338__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32338__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__32343 = cljs.core.seq(sources);
var chunk__32344 = null;
var count__32345 = (0);
var i__32346 = (0);
while(true){
if((i__32346 < count__32345)){
var map__32353 = chunk__32344.cljs$core$IIndexed$_nth$arity$2(null,i__32346);
var map__32353__$1 = (((((!((map__32353 == null))))?(((((map__32353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32353):map__32353);
var src = map__32353__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32353__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32353__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32353__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32353__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__32493 = seq__32343;
var G__32494 = chunk__32344;
var G__32495 = count__32345;
var G__32496 = (i__32346 + (1));
seq__32343 = G__32493;
chunk__32344 = G__32494;
count__32345 = G__32495;
i__32346 = G__32496;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__32343);
if(temp__5720__auto__){
var seq__32343__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32343__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32343__$1);
var G__32497 = cljs.core.chunk_rest(seq__32343__$1);
var G__32498 = c__4550__auto__;
var G__32499 = cljs.core.count(c__4550__auto__);
var G__32500 = (0);
seq__32343 = G__32497;
chunk__32344 = G__32498;
count__32345 = G__32499;
i__32346 = G__32500;
continue;
} else {
var map__32355 = cljs.core.first(seq__32343__$1);
var map__32355__$1 = (((((!((map__32355 == null))))?(((((map__32355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32355):map__32355);
var src = map__32355__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32355__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32355__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32355__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32355__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__32501 = cljs.core.next(seq__32343__$1);
var G__32502 = null;
var G__32503 = (0);
var G__32504 = (0);
seq__32343 = G__32501;
chunk__32344 = G__32502;
count__32345 = G__32503;
i__32346 = G__32504;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__32357 = cljs.core.seq(js_requires);
var chunk__32358 = null;
var count__32359 = (0);
var i__32360 = (0);
while(true){
if((i__32360 < count__32359)){
var js_ns = chunk__32358.cljs$core$IIndexed$_nth$arity$2(null,i__32360);
var require_str_32505 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32505);


var G__32506 = seq__32357;
var G__32507 = chunk__32358;
var G__32508 = count__32359;
var G__32509 = (i__32360 + (1));
seq__32357 = G__32506;
chunk__32358 = G__32507;
count__32359 = G__32508;
i__32360 = G__32509;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__32357);
if(temp__5720__auto__){
var seq__32357__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32357__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32357__$1);
var G__32510 = cljs.core.chunk_rest(seq__32357__$1);
var G__32511 = c__4550__auto__;
var G__32512 = cljs.core.count(c__4550__auto__);
var G__32513 = (0);
seq__32357 = G__32510;
chunk__32358 = G__32511;
count__32359 = G__32512;
i__32360 = G__32513;
continue;
} else {
var js_ns = cljs.core.first(seq__32357__$1);
var require_str_32514 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32514);


var G__32515 = cljs.core.next(seq__32357__$1);
var G__32516 = null;
var G__32517 = (0);
var G__32518 = (0);
seq__32357 = G__32515;
chunk__32358 = G__32516;
count__32359 = G__32517;
i__32360 = G__32518;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__32363 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__32363) : callback.call(null,G__32363));
} else {
var G__32364 = shadow.cljs.devtools.client.env.files_url();
var G__32365 = ((function (G__32364){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__32364))
;
var G__32366 = "POST";
var G__32367 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__32368 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__32364,G__32365,G__32366,G__32367,G__32368);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__32371){
var map__32373 = p__32371;
var map__32373__$1 = (((((!((map__32373 == null))))?(((((map__32373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32373):map__32373);
var msg = map__32373__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32373__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32373__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__32375 = info;
var map__32375__$1 = (((((!((map__32375 == null))))?(((((map__32375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32375):map__32375);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32375__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32375__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__32375,map__32375__$1,sources,compiled,map__32373,map__32373__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32377(s__32378){
return (new cljs.core.LazySeq(null,((function (map__32375,map__32375__$1,sources,compiled,map__32373,map__32373__$1,msg,info,reload_info){
return (function (){
var s__32378__$1 = s__32378;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__32378__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__32383 = cljs.core.first(xs__6277__auto__);
var map__32383__$1 = (((((!((map__32383 == null))))?(((((map__32383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32383):map__32383);
var src = map__32383__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32383__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32383__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__32378__$1,map__32383,map__32383__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__32375,map__32375__$1,sources,compiled,map__32373,map__32373__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32377_$_iter__32379(s__32380){
return (new cljs.core.LazySeq(null,((function (s__32378__$1,map__32383,map__32383__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__32375,map__32375__$1,sources,compiled,map__32373,map__32373__$1,msg,info,reload_info){
return (function (){
var s__32380__$1 = s__32380;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__32380__$1);
if(temp__5720__auto____$1){
var s__32380__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32380__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__32380__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__32382 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__32381 = (0);
while(true){
if((i__32381 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__32381);
cljs.core.chunk_append(b__32382,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32519 = (i__32381 + (1));
i__32381 = G__32519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32382),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32377_$_iter__32379(cljs.core.chunk_rest(s__32380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32382),null);
}
} else {
var warning = cljs.core.first(s__32380__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32377_$_iter__32379(cljs.core.rest(s__32380__$2)));
}
} else {
return null;
}
break;
}
});})(s__32378__$1,map__32383,map__32383__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__32375,map__32375__$1,sources,compiled,map__32373,map__32373__$1,msg,info,reload_info))
,null,null));
});})(s__32378__$1,map__32383,map__32383__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__32375,map__32375__$1,sources,compiled,map__32373,map__32373__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32377(cljs.core.rest(s__32378__$1)));
} else {
var G__32520 = cljs.core.rest(s__32378__$1);
s__32378__$1 = G__32520;
continue;
}
} else {
var G__32521 = cljs.core.rest(s__32378__$1);
s__32378__$1 = G__32521;
continue;
}
} else {
return null;
}
break;
}
});})(map__32375,map__32375__$1,sources,compiled,map__32373,map__32373__$1,msg,info,reload_info))
,null,null));
});})(map__32375,map__32375__$1,sources,compiled,map__32373,map__32373__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__32385_32522 = cljs.core.seq(warnings);
var chunk__32386_32523 = null;
var count__32387_32524 = (0);
var i__32388_32525 = (0);
while(true){
if((i__32388_32525 < count__32387_32524)){
var map__32393_32526 = chunk__32386_32523.cljs$core$IIndexed$_nth$arity$2(null,i__32388_32525);
var map__32393_32527__$1 = (((((!((map__32393_32526 == null))))?(((((map__32393_32526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32393_32526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32393_32526):map__32393_32526);
var w_32528 = map__32393_32527__$1;
var msg_32529__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32393_32527__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32393_32527__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32393_32527__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32393_32527__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32532)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32530),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32531),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32529__$1)].join(''));


var G__32533 = seq__32385_32522;
var G__32534 = chunk__32386_32523;
var G__32535 = count__32387_32524;
var G__32536 = (i__32388_32525 + (1));
seq__32385_32522 = G__32533;
chunk__32386_32523 = G__32534;
count__32387_32524 = G__32535;
i__32388_32525 = G__32536;
continue;
} else {
var temp__5720__auto___32537 = cljs.core.seq(seq__32385_32522);
if(temp__5720__auto___32537){
var seq__32385_32538__$1 = temp__5720__auto___32537;
if(cljs.core.chunked_seq_QMARK_(seq__32385_32538__$1)){
var c__4550__auto___32539 = cljs.core.chunk_first(seq__32385_32538__$1);
var G__32540 = cljs.core.chunk_rest(seq__32385_32538__$1);
var G__32541 = c__4550__auto___32539;
var G__32542 = cljs.core.count(c__4550__auto___32539);
var G__32543 = (0);
seq__32385_32522 = G__32540;
chunk__32386_32523 = G__32541;
count__32387_32524 = G__32542;
i__32388_32525 = G__32543;
continue;
} else {
var map__32395_32544 = cljs.core.first(seq__32385_32538__$1);
var map__32395_32545__$1 = (((((!((map__32395_32544 == null))))?(((((map__32395_32544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32395_32544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32395_32544):map__32395_32544);
var w_32546 = map__32395_32545__$1;
var msg_32547__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395_32545__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395_32545__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395_32545__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395_32545__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32550)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32548),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32549),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32547__$1)].join(''));


var G__32551 = cljs.core.next(seq__32385_32538__$1);
var G__32552 = null;
var G__32553 = (0);
var G__32554 = (0);
seq__32385_32522 = G__32551;
chunk__32386_32523 = G__32552;
count__32387_32524 = G__32553;
i__32388_32525 = G__32554;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__32375,map__32375__$1,sources,compiled,warnings,map__32373,map__32373__$1,msg,info,reload_info){
return (function (p__32397){
var map__32398 = p__32397;
var map__32398__$1 = (((((!((map__32398 == null))))?(((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32398):map__32398);
var src = map__32398__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32398__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__32375,map__32375__$1,sources,compiled,warnings,map__32373,map__32373__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__32375,map__32375__$1,sources,compiled,warnings,map__32373,map__32373__$1,msg,info,reload_info){
return (function (p__32400){
var map__32401 = p__32400;
var map__32401__$1 = (((((!((map__32401 == null))))?(((((map__32401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32401):map__32401);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32401__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__32375,map__32375__$1,sources,compiled,warnings,map__32373,map__32373__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__32375,map__32375__$1,sources,compiled,warnings,map__32373,map__32373__$1,msg,info,reload_info){
return (function (p__32403){
var map__32404 = p__32403;
var map__32404__$1 = (((((!((map__32404 == null))))?(((((map__32404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32404):map__32404);
var rc = map__32404__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32404__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__32375,map__32375__$1,sources,compiled,warnings,map__32373,map__32373__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__32375,map__32375__$1,sources,compiled,warnings,map__32373,map__32373__$1,msg,info,reload_info){
return (function (p1__32370_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__32370_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__32375,map__32375__$1,sources,compiled,warnings,map__32373,map__32373__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4120__auto__){
return rel_new;
} else {
return and__4120__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__32408){
var map__32409 = p__32408;
var map__32409__$1 = (((((!((map__32409 == null))))?(((((map__32409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32409):map__32409);
var msg = map__32409__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32409__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__32411 = cljs.core.seq(updates);
var chunk__32413 = null;
var count__32414 = (0);
var i__32415 = (0);
while(true){
if((i__32415 < count__32414)){
var path = chunk__32413.cljs$core$IIndexed$_nth$arity$2(null,i__32415);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32441_32555 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32444_32556 = null;
var count__32445_32557 = (0);
var i__32446_32558 = (0);
while(true){
if((i__32446_32558 < count__32445_32557)){
var node_32559 = chunk__32444_32556.cljs$core$IIndexed$_nth$arity$2(null,i__32446_32558);
var path_match_32560 = shadow.cljs.devtools.client.browser.match_paths(node_32559.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32560)){
var new_link_32561 = (function (){var G__32451 = node_32559.cloneNode(true);
G__32451.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32560),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32451;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32560], 0));

goog.dom.insertSiblingAfter(new_link_32561,node_32559);

goog.dom.removeNode(node_32559);


var G__32562 = seq__32441_32555;
var G__32563 = chunk__32444_32556;
var G__32564 = count__32445_32557;
var G__32565 = (i__32446_32558 + (1));
seq__32441_32555 = G__32562;
chunk__32444_32556 = G__32563;
count__32445_32557 = G__32564;
i__32446_32558 = G__32565;
continue;
} else {
var G__32566 = seq__32441_32555;
var G__32567 = chunk__32444_32556;
var G__32568 = count__32445_32557;
var G__32569 = (i__32446_32558 + (1));
seq__32441_32555 = G__32566;
chunk__32444_32556 = G__32567;
count__32445_32557 = G__32568;
i__32446_32558 = G__32569;
continue;
}
} else {
var temp__5720__auto___32570 = cljs.core.seq(seq__32441_32555);
if(temp__5720__auto___32570){
var seq__32441_32571__$1 = temp__5720__auto___32570;
if(cljs.core.chunked_seq_QMARK_(seq__32441_32571__$1)){
var c__4550__auto___32572 = cljs.core.chunk_first(seq__32441_32571__$1);
var G__32573 = cljs.core.chunk_rest(seq__32441_32571__$1);
var G__32574 = c__4550__auto___32572;
var G__32575 = cljs.core.count(c__4550__auto___32572);
var G__32576 = (0);
seq__32441_32555 = G__32573;
chunk__32444_32556 = G__32574;
count__32445_32557 = G__32575;
i__32446_32558 = G__32576;
continue;
} else {
var node_32577 = cljs.core.first(seq__32441_32571__$1);
var path_match_32578 = shadow.cljs.devtools.client.browser.match_paths(node_32577.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32578)){
var new_link_32579 = (function (){var G__32452 = node_32577.cloneNode(true);
G__32452.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32578),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32452;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32578], 0));

goog.dom.insertSiblingAfter(new_link_32579,node_32577);

goog.dom.removeNode(node_32577);


var G__32580 = cljs.core.next(seq__32441_32571__$1);
var G__32581 = null;
var G__32582 = (0);
var G__32583 = (0);
seq__32441_32555 = G__32580;
chunk__32444_32556 = G__32581;
count__32445_32557 = G__32582;
i__32446_32558 = G__32583;
continue;
} else {
var G__32584 = cljs.core.next(seq__32441_32571__$1);
var G__32585 = null;
var G__32586 = (0);
var G__32587 = (0);
seq__32441_32555 = G__32584;
chunk__32444_32556 = G__32585;
count__32445_32557 = G__32586;
i__32446_32558 = G__32587;
continue;
}
}
} else {
}
}
break;
}


var G__32588 = seq__32411;
var G__32589 = chunk__32413;
var G__32590 = count__32414;
var G__32591 = (i__32415 + (1));
seq__32411 = G__32588;
chunk__32413 = G__32589;
count__32414 = G__32590;
i__32415 = G__32591;
continue;
} else {
var G__32592 = seq__32411;
var G__32593 = chunk__32413;
var G__32594 = count__32414;
var G__32595 = (i__32415 + (1));
seq__32411 = G__32592;
chunk__32413 = G__32593;
count__32414 = G__32594;
i__32415 = G__32595;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__32411);
if(temp__5720__auto__){
var seq__32411__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32411__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32411__$1);
var G__32596 = cljs.core.chunk_rest(seq__32411__$1);
var G__32597 = c__4550__auto__;
var G__32598 = cljs.core.count(c__4550__auto__);
var G__32599 = (0);
seq__32411 = G__32596;
chunk__32413 = G__32597;
count__32414 = G__32598;
i__32415 = G__32599;
continue;
} else {
var path = cljs.core.first(seq__32411__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32453_32600 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32456_32601 = null;
var count__32457_32602 = (0);
var i__32458_32603 = (0);
while(true){
if((i__32458_32603 < count__32457_32602)){
var node_32604 = chunk__32456_32601.cljs$core$IIndexed$_nth$arity$2(null,i__32458_32603);
var path_match_32605 = shadow.cljs.devtools.client.browser.match_paths(node_32604.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32605)){
var new_link_32606 = (function (){var G__32463 = node_32604.cloneNode(true);
G__32463.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32605),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32463;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32605], 0));

goog.dom.insertSiblingAfter(new_link_32606,node_32604);

goog.dom.removeNode(node_32604);


var G__32607 = seq__32453_32600;
var G__32608 = chunk__32456_32601;
var G__32609 = count__32457_32602;
var G__32610 = (i__32458_32603 + (1));
seq__32453_32600 = G__32607;
chunk__32456_32601 = G__32608;
count__32457_32602 = G__32609;
i__32458_32603 = G__32610;
continue;
} else {
var G__32611 = seq__32453_32600;
var G__32612 = chunk__32456_32601;
var G__32613 = count__32457_32602;
var G__32614 = (i__32458_32603 + (1));
seq__32453_32600 = G__32611;
chunk__32456_32601 = G__32612;
count__32457_32602 = G__32613;
i__32458_32603 = G__32614;
continue;
}
} else {
var temp__5720__auto___32615__$1 = cljs.core.seq(seq__32453_32600);
if(temp__5720__auto___32615__$1){
var seq__32453_32616__$1 = temp__5720__auto___32615__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32453_32616__$1)){
var c__4550__auto___32617 = cljs.core.chunk_first(seq__32453_32616__$1);
var G__32618 = cljs.core.chunk_rest(seq__32453_32616__$1);
var G__32619 = c__4550__auto___32617;
var G__32620 = cljs.core.count(c__4550__auto___32617);
var G__32621 = (0);
seq__32453_32600 = G__32618;
chunk__32456_32601 = G__32619;
count__32457_32602 = G__32620;
i__32458_32603 = G__32621;
continue;
} else {
var node_32622 = cljs.core.first(seq__32453_32616__$1);
var path_match_32623 = shadow.cljs.devtools.client.browser.match_paths(node_32622.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32623)){
var new_link_32624 = (function (){var G__32464 = node_32622.cloneNode(true);
G__32464.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32623),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32464;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32623], 0));

goog.dom.insertSiblingAfter(new_link_32624,node_32622);

goog.dom.removeNode(node_32622);


var G__32625 = cljs.core.next(seq__32453_32616__$1);
var G__32626 = null;
var G__32627 = (0);
var G__32628 = (0);
seq__32453_32600 = G__32625;
chunk__32456_32601 = G__32626;
count__32457_32602 = G__32627;
i__32458_32603 = G__32628;
continue;
} else {
var G__32629 = cljs.core.next(seq__32453_32616__$1);
var G__32630 = null;
var G__32631 = (0);
var G__32632 = (0);
seq__32453_32600 = G__32629;
chunk__32456_32601 = G__32630;
count__32457_32602 = G__32631;
i__32458_32603 = G__32632;
continue;
}
}
} else {
}
}
break;
}


var G__32633 = cljs.core.next(seq__32411__$1);
var G__32634 = null;
var G__32635 = (0);
var G__32636 = (0);
seq__32411 = G__32633;
chunk__32413 = G__32634;
count__32414 = G__32635;
i__32415 = G__32636;
continue;
} else {
var G__32637 = cljs.core.next(seq__32411__$1);
var G__32638 = null;
var G__32639 = (0);
var G__32640 = (0);
seq__32411 = G__32637;
chunk__32413 = G__32638;
count__32414 = G__32639;
i__32415 = G__32640;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__32465){
var map__32466 = p__32465;
var map__32466__$1 = (((((!((map__32466 == null))))?(((((map__32466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32466):map__32466);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32466__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32466__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__32466,map__32466__$1,id,js){
return (function (){
return eval(js);
});})(map__32466,map__32466__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__32468){
var map__32469 = p__32468;
var map__32469__$1 = (((((!((map__32469 == null))))?(((((map__32469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32469):map__32469);
var msg = map__32469__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32469__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32469__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32469__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32469__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__32469,map__32469__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__32471){
var map__32472 = p__32471;
var map__32472__$1 = (((((!((map__32472 == null))))?(((((map__32472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32472):map__32472);
var src = map__32472__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32472__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__32469,map__32469__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__32469,map__32469__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__32469,map__32469__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__32474){
var map__32475 = p__32474;
var map__32475__$1 = (((((!((map__32475 == null))))?(((((map__32475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32475):map__32475);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32475__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32475__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__32475,map__32475__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__32475,map__32475__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__32477){
var map__32478 = p__32477;
var map__32478__$1 = (((((!((map__32478 == null))))?(((((map__32478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32478):map__32478);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32478__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32478__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__32480){
var map__32481 = p__32480;
var map__32481__$1 = (((((!((map__32481 == null))))?(((((map__32481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32481):map__32481);
var msg = map__32481__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__32483 = type;
var G__32483__$1 = (((G__32483 instanceof cljs.core.Keyword))?G__32483.fqn:null);
switch (G__32483__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__32484 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__32485 = ((function (G__32484){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__32484))
;
var G__32486 = "POST";
var G__32487 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__32488 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__32484,G__32485,G__32486,G__32487,G__32488);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e32489){var e = e32489;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___32642 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___32642)){
var s_32643 = temp__5720__auto___32642;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_32643.onclose = ((function (s_32643,temp__5720__auto___32642){
return (function (e){
return null;
});})(s_32643,temp__5720__auto___32642))
;

s_32643.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
