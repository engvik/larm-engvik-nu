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
var len__4730__auto___29816 = arguments.length;
var i__4731__auto___29817 = (0);
while(true){
if((i__4731__auto___29817 < len__4730__auto___29816)){
args__4736__auto__.push((arguments[i__4731__auto___29817]));

var G__29818 = (i__4731__auto___29817 + (1));
i__4731__auto___29817 = G__29818;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq29524){
var G__29525 = cljs.core.first(seq29524);
var seq29524__$1 = cljs.core.next(seq29524);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29525,seq29524__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__29530){
var map__29532 = p__29530;
var map__29532__$1 = (((((!((map__29532 == null))))?(((((map__29532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29532):map__29532);
var src = map__29532__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29532__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29532__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__29537 = cljs.core.seq(sources);
var chunk__29538 = null;
var count__29539 = (0);
var i__29540 = (0);
while(true){
if((i__29540 < count__29539)){
var map__29550 = chunk__29538.cljs$core$IIndexed$_nth$arity$2(null,i__29540);
var map__29550__$1 = (((((!((map__29550 == null))))?(((((map__29550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29550):map__29550);
var src = map__29550__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29550__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29550__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29550__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29550__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__29823 = seq__29537;
var G__29824 = chunk__29538;
var G__29825 = count__29539;
var G__29826 = (i__29540 + (1));
seq__29537 = G__29823;
chunk__29538 = G__29824;
count__29539 = G__29825;
i__29540 = G__29826;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__29537);
if(temp__5720__auto__){
var seq__29537__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29537__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29537__$1);
var G__29827 = cljs.core.chunk_rest(seq__29537__$1);
var G__29828 = c__4550__auto__;
var G__29829 = cljs.core.count(c__4550__auto__);
var G__29830 = (0);
seq__29537 = G__29827;
chunk__29538 = G__29828;
count__29539 = G__29829;
i__29540 = G__29830;
continue;
} else {
var map__29552 = cljs.core.first(seq__29537__$1);
var map__29552__$1 = (((((!((map__29552 == null))))?(((((map__29552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29552):map__29552);
var src = map__29552__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__29835 = cljs.core.next(seq__29537__$1);
var G__29836 = null;
var G__29837 = (0);
var G__29838 = (0);
seq__29537 = G__29835;
chunk__29538 = G__29836;
count__29539 = G__29837;
i__29540 = G__29838;
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
var seq__29556 = cljs.core.seq(js_requires);
var chunk__29557 = null;
var count__29558 = (0);
var i__29559 = (0);
while(true){
if((i__29559 < count__29558)){
var js_ns = chunk__29557.cljs$core$IIndexed$_nth$arity$2(null,i__29559);
var require_str_29839 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29839);


var G__29840 = seq__29556;
var G__29841 = chunk__29557;
var G__29842 = count__29558;
var G__29843 = (i__29559 + (1));
seq__29556 = G__29840;
chunk__29557 = G__29841;
count__29558 = G__29842;
i__29559 = G__29843;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__29556);
if(temp__5720__auto__){
var seq__29556__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29556__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29556__$1);
var G__29844 = cljs.core.chunk_rest(seq__29556__$1);
var G__29845 = c__4550__auto__;
var G__29846 = cljs.core.count(c__4550__auto__);
var G__29847 = (0);
seq__29556 = G__29844;
chunk__29557 = G__29845;
count__29558 = G__29846;
i__29559 = G__29847;
continue;
} else {
var js_ns = cljs.core.first(seq__29556__$1);
var require_str_29848 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29848);


var G__29849 = cljs.core.next(seq__29556__$1);
var G__29850 = null;
var G__29851 = (0);
var G__29852 = (0);
seq__29556 = G__29849;
chunk__29557 = G__29850;
count__29558 = G__29851;
i__29559 = G__29852;
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
var G__29560 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__29560) : callback.call(null,G__29560));
} else {
var G__29561 = shadow.cljs.devtools.client.env.files_url();
var G__29562 = ((function (G__29561){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__29561))
;
var G__29563 = "POST";
var G__29564 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__29565 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__29561,G__29562,G__29563,G__29564,G__29565);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__29567){
var map__29568 = p__29567;
var map__29568__$1 = (((((!((map__29568 == null))))?(((((map__29568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29568):map__29568);
var msg = map__29568__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29568__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29568__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29576 = info;
var map__29576__$1 = (((((!((map__29576 == null))))?(((((map__29576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29576):map__29576);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29576__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29576__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__29576,map__29576__$1,sources,compiled,map__29568,map__29568__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29590(s__29591){
return (new cljs.core.LazySeq(null,((function (map__29576,map__29576__$1,sources,compiled,map__29568,map__29568__$1,msg,info,reload_info){
return (function (){
var s__29591__$1 = s__29591;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29591__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__29602 = cljs.core.first(xs__6277__auto__);
var map__29602__$1 = (((((!((map__29602 == null))))?(((((map__29602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29602):map__29602);
var src = map__29602__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29602__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29602__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__29591__$1,map__29602,map__29602__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29576,map__29576__$1,sources,compiled,map__29568,map__29568__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29590_$_iter__29592(s__29593){
return (new cljs.core.LazySeq(null,((function (s__29591__$1,map__29602,map__29602__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29576,map__29576__$1,sources,compiled,map__29568,map__29568__$1,msg,info,reload_info){
return (function (){
var s__29593__$1 = s__29593;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29593__$1);
if(temp__5720__auto____$1){
var s__29593__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29593__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29593__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29595 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29594 = (0);
while(true){
if((i__29594 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29594);
cljs.core.chunk_append(b__29595,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29859 = (i__29594 + (1));
i__29594 = G__29859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29595),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29590_$_iter__29592(cljs.core.chunk_rest(s__29593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29595),null);
}
} else {
var warning = cljs.core.first(s__29593__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29590_$_iter__29592(cljs.core.rest(s__29593__$2)));
}
} else {
return null;
}
break;
}
});})(s__29591__$1,map__29602,map__29602__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29576,map__29576__$1,sources,compiled,map__29568,map__29568__$1,msg,info,reload_info))
,null,null));
});})(s__29591__$1,map__29602,map__29602__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29576,map__29576__$1,sources,compiled,map__29568,map__29568__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29590(cljs.core.rest(s__29591__$1)));
} else {
var G__29865 = cljs.core.rest(s__29591__$1);
s__29591__$1 = G__29865;
continue;
}
} else {
var G__29866 = cljs.core.rest(s__29591__$1);
s__29591__$1 = G__29866;
continue;
}
} else {
return null;
}
break;
}
});})(map__29576,map__29576__$1,sources,compiled,map__29568,map__29568__$1,msg,info,reload_info))
,null,null));
});})(map__29576,map__29576__$1,sources,compiled,map__29568,map__29568__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__29619_29869 = cljs.core.seq(warnings);
var chunk__29620_29870 = null;
var count__29621_29871 = (0);
var i__29622_29872 = (0);
while(true){
if((i__29622_29872 < count__29621_29871)){
var map__29640_29873 = chunk__29620_29870.cljs$core$IIndexed$_nth$arity$2(null,i__29622_29872);
var map__29640_29874__$1 = (((((!((map__29640_29873 == null))))?(((((map__29640_29873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29640_29873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29640_29873):map__29640_29873);
var w_29875 = map__29640_29874__$1;
var msg_29876__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29640_29874__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29640_29874__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29640_29874__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29640_29874__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29879)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29877),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29878),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29876__$1)].join(''));


var G__29880 = seq__29619_29869;
var G__29881 = chunk__29620_29870;
var G__29882 = count__29621_29871;
var G__29883 = (i__29622_29872 + (1));
seq__29619_29869 = G__29880;
chunk__29620_29870 = G__29881;
count__29621_29871 = G__29882;
i__29622_29872 = G__29883;
continue;
} else {
var temp__5720__auto___29884 = cljs.core.seq(seq__29619_29869);
if(temp__5720__auto___29884){
var seq__29619_29885__$1 = temp__5720__auto___29884;
if(cljs.core.chunked_seq_QMARK_(seq__29619_29885__$1)){
var c__4550__auto___29886 = cljs.core.chunk_first(seq__29619_29885__$1);
var G__29887 = cljs.core.chunk_rest(seq__29619_29885__$1);
var G__29888 = c__4550__auto___29886;
var G__29889 = cljs.core.count(c__4550__auto___29886);
var G__29890 = (0);
seq__29619_29869 = G__29887;
chunk__29620_29870 = G__29888;
count__29621_29871 = G__29889;
i__29622_29872 = G__29890;
continue;
} else {
var map__29658_29892 = cljs.core.first(seq__29619_29885__$1);
var map__29658_29893__$1 = (((((!((map__29658_29892 == null))))?(((((map__29658_29892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29658_29892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29658_29892):map__29658_29892);
var w_29894 = map__29658_29893__$1;
var msg_29895__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29658_29893__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29658_29893__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29658_29893__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29658_29893__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29898)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29896),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29897),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29895__$1)].join(''));


var G__29900 = cljs.core.next(seq__29619_29885__$1);
var G__29901 = null;
var G__29902 = (0);
var G__29903 = (0);
seq__29619_29869 = G__29900;
chunk__29620_29870 = G__29901;
count__29621_29871 = G__29902;
i__29622_29872 = G__29903;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29576,map__29576__$1,sources,compiled,warnings,map__29568,map__29568__$1,msg,info,reload_info){
return (function (p__29660){
var map__29661 = p__29660;
var map__29661__$1 = (((((!((map__29661 == null))))?(((((map__29661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29661):map__29661);
var src = map__29661__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29661__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__29576,map__29576__$1,sources,compiled,warnings,map__29568,map__29568__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29576,map__29576__$1,sources,compiled,warnings,map__29568,map__29568__$1,msg,info,reload_info){
return (function (p__29663){
var map__29664 = p__29663;
var map__29664__$1 = (((((!((map__29664 == null))))?(((((map__29664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29664):map__29664);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__29576,map__29576__$1,sources,compiled,warnings,map__29568,map__29568__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29576,map__29576__$1,sources,compiled,warnings,map__29568,map__29568__$1,msg,info,reload_info){
return (function (p__29680){
var map__29681 = p__29680;
var map__29681__$1 = (((((!((map__29681 == null))))?(((((map__29681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29681):map__29681);
var rc = map__29681__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29681__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__29576,map__29576__$1,sources,compiled,warnings,map__29568,map__29568__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__29576,map__29576__$1,sources,compiled,warnings,map__29568,map__29568__$1,msg,info,reload_info){
return (function (p1__29566_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__29566_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__29576,map__29576__$1,sources,compiled,warnings,map__29568,map__29568__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__29700){
var map__29701 = p__29700;
var map__29701__$1 = (((((!((map__29701 == null))))?(((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29701):map__29701);
var msg = map__29701__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29701__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__29703 = cljs.core.seq(updates);
var chunk__29705 = null;
var count__29706 = (0);
var i__29707 = (0);
while(true){
if((i__29707 < count__29706)){
var path = chunk__29705.cljs$core$IIndexed$_nth$arity$2(null,i__29707);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29749_29920 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29752_29921 = null;
var count__29753_29922 = (0);
var i__29754_29923 = (0);
while(true){
if((i__29754_29923 < count__29753_29922)){
var node_29926 = chunk__29752_29921.cljs$core$IIndexed$_nth$arity$2(null,i__29754_29923);
var path_match_29928 = shadow.cljs.devtools.client.browser.match_paths(node_29926.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29928)){
var new_link_29929 = (function (){var G__29760 = node_29926.cloneNode(true);
G__29760.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29928),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29760;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29928], 0));

goog.dom.insertSiblingAfter(new_link_29929,node_29926);

goog.dom.removeNode(node_29926);


var G__29937 = seq__29749_29920;
var G__29938 = chunk__29752_29921;
var G__29939 = count__29753_29922;
var G__29940 = (i__29754_29923 + (1));
seq__29749_29920 = G__29937;
chunk__29752_29921 = G__29938;
count__29753_29922 = G__29939;
i__29754_29923 = G__29940;
continue;
} else {
var G__29943 = seq__29749_29920;
var G__29944 = chunk__29752_29921;
var G__29945 = count__29753_29922;
var G__29946 = (i__29754_29923 + (1));
seq__29749_29920 = G__29943;
chunk__29752_29921 = G__29944;
count__29753_29922 = G__29945;
i__29754_29923 = G__29946;
continue;
}
} else {
var temp__5720__auto___29953 = cljs.core.seq(seq__29749_29920);
if(temp__5720__auto___29953){
var seq__29749_29954__$1 = temp__5720__auto___29953;
if(cljs.core.chunked_seq_QMARK_(seq__29749_29954__$1)){
var c__4550__auto___29957 = cljs.core.chunk_first(seq__29749_29954__$1);
var G__29959 = cljs.core.chunk_rest(seq__29749_29954__$1);
var G__29960 = c__4550__auto___29957;
var G__29961 = cljs.core.count(c__4550__auto___29957);
var G__29962 = (0);
seq__29749_29920 = G__29959;
chunk__29752_29921 = G__29960;
count__29753_29922 = G__29961;
i__29754_29923 = G__29962;
continue;
} else {
var node_29969 = cljs.core.first(seq__29749_29954__$1);
var path_match_29972 = shadow.cljs.devtools.client.browser.match_paths(node_29969.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29972)){
var new_link_29977 = (function (){var G__29761 = node_29969.cloneNode(true);
G__29761.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29972),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29761;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29972], 0));

goog.dom.insertSiblingAfter(new_link_29977,node_29969);

goog.dom.removeNode(node_29969);


var G__29980 = cljs.core.next(seq__29749_29954__$1);
var G__29981 = null;
var G__29982 = (0);
var G__29983 = (0);
seq__29749_29920 = G__29980;
chunk__29752_29921 = G__29981;
count__29753_29922 = G__29982;
i__29754_29923 = G__29983;
continue;
} else {
var G__29984 = cljs.core.next(seq__29749_29954__$1);
var G__29985 = null;
var G__29986 = (0);
var G__29987 = (0);
seq__29749_29920 = G__29984;
chunk__29752_29921 = G__29985;
count__29753_29922 = G__29986;
i__29754_29923 = G__29987;
continue;
}
}
} else {
}
}
break;
}


var G__29988 = seq__29703;
var G__29989 = chunk__29705;
var G__29990 = count__29706;
var G__29991 = (i__29707 + (1));
seq__29703 = G__29988;
chunk__29705 = G__29989;
count__29706 = G__29990;
i__29707 = G__29991;
continue;
} else {
var G__29993 = seq__29703;
var G__29994 = chunk__29705;
var G__29995 = count__29706;
var G__29996 = (i__29707 + (1));
seq__29703 = G__29993;
chunk__29705 = G__29994;
count__29706 = G__29995;
i__29707 = G__29996;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__29703);
if(temp__5720__auto__){
var seq__29703__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29703__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29703__$1);
var G__30000 = cljs.core.chunk_rest(seq__29703__$1);
var G__30001 = c__4550__auto__;
var G__30002 = cljs.core.count(c__4550__auto__);
var G__30003 = (0);
seq__29703 = G__30000;
chunk__29705 = G__30001;
count__29706 = G__30002;
i__29707 = G__30003;
continue;
} else {
var path = cljs.core.first(seq__29703__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29765_30004 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29768_30005 = null;
var count__29769_30006 = (0);
var i__29770_30007 = (0);
while(true){
if((i__29770_30007 < count__29769_30006)){
var node_30008 = chunk__29768_30005.cljs$core$IIndexed$_nth$arity$2(null,i__29770_30007);
var path_match_30009 = shadow.cljs.devtools.client.browser.match_paths(node_30008.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30009)){
var new_link_30010 = (function (){var G__29775 = node_30008.cloneNode(true);
G__29775.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30009),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29775;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30009], 0));

goog.dom.insertSiblingAfter(new_link_30010,node_30008);

goog.dom.removeNode(node_30008);


var G__30012 = seq__29765_30004;
var G__30013 = chunk__29768_30005;
var G__30014 = count__29769_30006;
var G__30015 = (i__29770_30007 + (1));
seq__29765_30004 = G__30012;
chunk__29768_30005 = G__30013;
count__29769_30006 = G__30014;
i__29770_30007 = G__30015;
continue;
} else {
var G__30018 = seq__29765_30004;
var G__30019 = chunk__29768_30005;
var G__30020 = count__29769_30006;
var G__30021 = (i__29770_30007 + (1));
seq__29765_30004 = G__30018;
chunk__29768_30005 = G__30019;
count__29769_30006 = G__30020;
i__29770_30007 = G__30021;
continue;
}
} else {
var temp__5720__auto___30022__$1 = cljs.core.seq(seq__29765_30004);
if(temp__5720__auto___30022__$1){
var seq__29765_30023__$1 = temp__5720__auto___30022__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29765_30023__$1)){
var c__4550__auto___30024 = cljs.core.chunk_first(seq__29765_30023__$1);
var G__30025 = cljs.core.chunk_rest(seq__29765_30023__$1);
var G__30026 = c__4550__auto___30024;
var G__30027 = cljs.core.count(c__4550__auto___30024);
var G__30028 = (0);
seq__29765_30004 = G__30025;
chunk__29768_30005 = G__30026;
count__29769_30006 = G__30027;
i__29770_30007 = G__30028;
continue;
} else {
var node_30031 = cljs.core.first(seq__29765_30023__$1);
var path_match_30032 = shadow.cljs.devtools.client.browser.match_paths(node_30031.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30032)){
var new_link_30033 = (function (){var G__29776 = node_30031.cloneNode(true);
G__29776.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30032),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29776;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30032], 0));

goog.dom.insertSiblingAfter(new_link_30033,node_30031);

goog.dom.removeNode(node_30031);


var G__30034 = cljs.core.next(seq__29765_30023__$1);
var G__30035 = null;
var G__30036 = (0);
var G__30037 = (0);
seq__29765_30004 = G__30034;
chunk__29768_30005 = G__30035;
count__29769_30006 = G__30036;
i__29770_30007 = G__30037;
continue;
} else {
var G__30038 = cljs.core.next(seq__29765_30023__$1);
var G__30039 = null;
var G__30040 = (0);
var G__30041 = (0);
seq__29765_30004 = G__30038;
chunk__29768_30005 = G__30039;
count__29769_30006 = G__30040;
i__29770_30007 = G__30041;
continue;
}
}
} else {
}
}
break;
}


var G__30042 = cljs.core.next(seq__29703__$1);
var G__30043 = null;
var G__30044 = (0);
var G__30045 = (0);
seq__29703 = G__30042;
chunk__29705 = G__30043;
count__29706 = G__30044;
i__29707 = G__30045;
continue;
} else {
var G__30046 = cljs.core.next(seq__29703__$1);
var G__30047 = null;
var G__30048 = (0);
var G__30049 = (0);
seq__29703 = G__30046;
chunk__29705 = G__30047;
count__29706 = G__30048;
i__29707 = G__30049;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__29779){
var map__29780 = p__29779;
var map__29780__$1 = (((((!((map__29780 == null))))?(((((map__29780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29780):map__29780);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29780__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__29780,map__29780__$1,id,js){
return (function (){
return eval(js);
});})(map__29780,map__29780__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__29783){
var map__29784 = p__29783;
var map__29784__$1 = (((((!((map__29784 == null))))?(((((map__29784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29784):map__29784);
var msg = map__29784__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29784__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29784__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29784__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29784,map__29784__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__29789){
var map__29790 = p__29789;
var map__29790__$1 = (((((!((map__29790 == null))))?(((((map__29790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29790):map__29790);
var src = map__29790__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29790__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__29784,map__29784__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__29784,map__29784__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__29784,map__29784__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__29793){
var map__29794 = p__29793;
var map__29794__$1 = (((((!((map__29794 == null))))?(((((map__29794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29794):map__29794);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29794__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29794__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__29794,map__29794__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__29794,map__29794__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__29796){
var map__29797 = p__29796;
var map__29797__$1 = (((((!((map__29797 == null))))?(((((map__29797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29797):map__29797);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29797__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29797__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__29799){
var map__29800 = p__29799;
var map__29800__$1 = (((((!((map__29800 == null))))?(((((map__29800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29800):map__29800);
var msg = map__29800__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29800__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__29802 = type;
var G__29802__$1 = (((G__29802 instanceof cljs.core.Keyword))?G__29802.fqn:null);
switch (G__29802__$1) {
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
var G__29804 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__29805 = ((function (G__29804){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__29804))
;
var G__29806 = "POST";
var G__29807 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__29808 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__29804,G__29805,G__29806,G__29807,G__29808);
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
}catch (e29812){var e = e29812;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___30059 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___30059)){
var s_30060 = temp__5720__auto___30059;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_30060.onclose = ((function (s_30060,temp__5720__auto___30059){
return (function (e){
return null;
});})(s_30060,temp__5720__auto___30059))
;

s_30060.close();

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
