goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27113 = arguments.length;
switch (G__27113) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27114 = (function (f,blockable,meta27115){
this.f = f;
this.blockable = blockable;
this.meta27115 = meta27115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27116,meta27115__$1){
var self__ = this;
var _27116__$1 = this;
return (new cljs.core.async.t_cljs$core$async27114(self__.f,self__.blockable,meta27115__$1));
});

cljs.core.async.t_cljs$core$async27114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27116){
var self__ = this;
var _27116__$1 = this;
return self__.meta27115;
});

cljs.core.async.t_cljs$core$async27114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27115","meta27115",-2139527597,null)], null);
});

cljs.core.async.t_cljs$core$async27114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27114";

cljs.core.async.t_cljs$core$async27114.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27114");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27114.
 */
cljs.core.async.__GT_t_cljs$core$async27114 = (function cljs$core$async$__GT_t_cljs$core$async27114(f__$1,blockable__$1,meta27115){
return (new cljs.core.async.t_cljs$core$async27114(f__$1,blockable__$1,meta27115));
});

}

return (new cljs.core.async.t_cljs$core$async27114(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27138 = arguments.length;
switch (G__27138) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27153 = arguments.length;
switch (G__27153) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27163 = arguments.length;
switch (G__27163) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29986 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29986) : fn1.call(null,val_29986));
} else {
cljs.core.async.impl.dispatch.run(((function (val_29986,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29986) : fn1.call(null,val_29986));
});})(val_29986,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27182 = arguments.length;
switch (G__27182) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___30004 = n;
var x_30007 = (0);
while(true){
if((x_30007 < n__4607__auto___30004)){
(a[x_30007] = (0));

var G__30008 = (x_30007 + (1));
x_30007 = G__30008;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__30011 = (i + (1));
i = G__30011;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27199 = (function (flag,meta27200){
this.flag = flag;
this.meta27200 = meta27200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27201,meta27200__$1){
var self__ = this;
var _27201__$1 = this;
return (new cljs.core.async.t_cljs$core$async27199(self__.flag,meta27200__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27201){
var self__ = this;
var _27201__$1 = this;
return self__.meta27200;
});})(flag))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27199.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27200","meta27200",600386470,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27199";

cljs.core.async.t_cljs$core$async27199.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27199");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27199.
 */
cljs.core.async.__GT_t_cljs$core$async27199 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27199(flag__$1,meta27200){
return (new cljs.core.async.t_cljs$core$async27199(flag__$1,meta27200));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27199(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27216 = (function (flag,cb,meta27217){
this.flag = flag;
this.cb = cb;
this.meta27217 = meta27217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27218,meta27217__$1){
var self__ = this;
var _27218__$1 = this;
return (new cljs.core.async.t_cljs$core$async27216(self__.flag,self__.cb,meta27217__$1));
});

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27218){
var self__ = this;
var _27218__$1 = this;
return self__.meta27217;
});

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27217","meta27217",999603215,null)], null);
});

cljs.core.async.t_cljs$core$async27216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27216";

cljs.core.async.t_cljs$core$async27216.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27216");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27216.
 */
cljs.core.async.__GT_t_cljs$core$async27216 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27216(flag__$1,cb__$1,meta27217){
return (new cljs.core.async.t_cljs$core$async27216(flag__$1,cb__$1,meta27217));
});

}

return (new cljs.core.async.t_cljs$core$async27216(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27231_SHARP_){
var G__27234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27231_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27234) : fret.call(null,G__27234));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27232_SHARP_){
var G__27236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27232_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27236) : fret.call(null,G__27236));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30038 = (i + (1));
i = G__30038;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30041 = arguments.length;
var i__4731__auto___30042 = (0);
while(true){
if((i__4731__auto___30042 < len__4730__auto___30041)){
args__4736__auto__.push((arguments[i__4731__auto___30042]));

var G__30043 = (i__4731__auto___30042 + (1));
i__4731__auto___30042 = G__30043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27254){
var map__27255 = p__27254;
var map__27255__$1 = (((((!((map__27255 == null))))?(((((map__27255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27255):map__27255);
var opts = map__27255__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27245){
var G__27246 = cljs.core.first(seq27245);
var seq27245__$1 = cljs.core.next(seq27245);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27246,seq27245__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27286 = arguments.length;
switch (G__27286) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27023__auto___30053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30053){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30053){
return (function (state_27347){
var state_val_27348 = (state_27347[(1)]);
if((state_val_27348 === (7))){
var inst_27338 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27368_30055 = state_27347__$1;
(statearr_27368_30055[(2)] = inst_27338);

(statearr_27368_30055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (1))){
var state_27347__$1 = state_27347;
var statearr_27369_30056 = state_27347__$1;
(statearr_27369_30056[(2)] = null);

(statearr_27369_30056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (4))){
var inst_27316 = (state_27347[(7)]);
var inst_27316__$1 = (state_27347[(2)]);
var inst_27318 = (inst_27316__$1 == null);
var state_27347__$1 = (function (){var statearr_27376 = state_27347;
(statearr_27376[(7)] = inst_27316__$1);

return statearr_27376;
})();
if(cljs.core.truth_(inst_27318)){
var statearr_27377_30058 = state_27347__$1;
(statearr_27377_30058[(1)] = (5));

} else {
var statearr_27382_30059 = state_27347__$1;
(statearr_27382_30059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (13))){
var state_27347__$1 = state_27347;
var statearr_27384_30062 = state_27347__$1;
(statearr_27384_30062[(2)] = null);

(statearr_27384_30062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (6))){
var inst_27316 = (state_27347[(7)]);
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27347__$1,(11),to,inst_27316);
} else {
if((state_val_27348 === (3))){
var inst_27340 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27347__$1,inst_27340);
} else {
if((state_val_27348 === (12))){
var state_27347__$1 = state_27347;
var statearr_27392_30066 = state_27347__$1;
(statearr_27392_30066[(2)] = null);

(statearr_27392_30066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (2))){
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27347__$1,(4),from);
} else {
if((state_val_27348 === (11))){
var inst_27331 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
if(cljs.core.truth_(inst_27331)){
var statearr_27396_30068 = state_27347__$1;
(statearr_27396_30068[(1)] = (12));

} else {
var statearr_27397_30072 = state_27347__$1;
(statearr_27397_30072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (9))){
var state_27347__$1 = state_27347;
var statearr_27399_30075 = state_27347__$1;
(statearr_27399_30075[(2)] = null);

(statearr_27399_30075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (5))){
var state_27347__$1 = state_27347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27401_30077 = state_27347__$1;
(statearr_27401_30077[(1)] = (8));

} else {
var statearr_27405_30078 = state_27347__$1;
(statearr_27405_30078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (14))){
var inst_27336 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27407_30087 = state_27347__$1;
(statearr_27407_30087[(2)] = inst_27336);

(statearr_27407_30087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (10))){
var inst_27327 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27409_30093 = state_27347__$1;
(statearr_27409_30093[(2)] = inst_27327);

(statearr_27409_30093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (8))){
var inst_27324 = cljs.core.async.close_BANG_(to);
var state_27347__$1 = state_27347;
var statearr_27410_30096 = state_27347__$1;
(statearr_27410_30096[(2)] = inst_27324);

(statearr_27410_30096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30053))
;
return ((function (switch__26722__auto__,c__27023__auto___30053){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_27411 = [null,null,null,null,null,null,null,null];
(statearr_27411[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_27411[(1)] = (1));

return statearr_27411;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_27347){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27347);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e27412){if((e27412 instanceof Object)){
var ex__26726__auto__ = e27412;
var statearr_27417_30099 = state_27347;
(statearr_27417_30099[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30100 = state_27347;
state_27347 = G__30100;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_27347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_27347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30053))
})();
var state__27025__auto__ = (function (){var statearr_27419 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_27419[(6)] = c__27023__auto___30053);

return statearr_27419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30053))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__27422){
var vec__27423 = p__27422;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27423,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27423,(1),null);
var job = vec__27423;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27023__auto___30109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30109,res,vec__27423,v,p,job,jobs,results){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30109,res,vec__27423,v,p,job,jobs,results){
return (function (state_27432){
var state_val_27433 = (state_27432[(1)]);
if((state_val_27433 === (1))){
var state_27432__$1 = state_27432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27432__$1,(2),res,v);
} else {
if((state_val_27433 === (2))){
var inst_27429 = (state_27432[(2)]);
var inst_27430 = cljs.core.async.close_BANG_(res);
var state_27432__$1 = (function (){var statearr_27435 = state_27432;
(statearr_27435[(7)] = inst_27429);

return statearr_27435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27432__$1,inst_27430);
} else {
return null;
}
}
});})(c__27023__auto___30109,res,vec__27423,v,p,job,jobs,results))
;
return ((function (switch__26722__auto__,c__27023__auto___30109,res,vec__27423,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0 = (function (){
var statearr_27436 = [null,null,null,null,null,null,null,null];
(statearr_27436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__);

(statearr_27436[(1)] = (1));

return statearr_27436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1 = (function (state_27432){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27432);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e27437){if((e27437 instanceof Object)){
var ex__26726__auto__ = e27437;
var statearr_27438_30131 = state_27432;
(statearr_27438_30131[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30132 = state_27432;
state_27432 = G__30132;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = function(state_27432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1.call(this,state_27432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30109,res,vec__27423,v,p,job,jobs,results))
})();
var state__27025__auto__ = (function (){var statearr_27448 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_27448[(6)] = c__27023__auto___30109);

return statearr_27448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30109,res,vec__27423,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27449){
var vec__27454 = p__27449;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27454,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27454,(1),null);
var job = vec__27454;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___30145 = n;
var __30146 = (0);
while(true){
if((__30146 < n__4607__auto___30145)){
var G__27457_30150 = type;
var G__27457_30151__$1 = (((G__27457_30150 instanceof cljs.core.Keyword))?G__27457_30150.fqn:null);
switch (G__27457_30151__$1) {
case "compute":
var c__27023__auto___30153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30146,c__27023__auto___30153,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (__30146,c__27023__auto___30153,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async){
return (function (state_27472){
var state_val_27473 = (state_27472[(1)]);
if((state_val_27473 === (1))){
var state_27472__$1 = state_27472;
var statearr_27475_30154 = state_27472__$1;
(statearr_27475_30154[(2)] = null);

(statearr_27475_30154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (2))){
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27472__$1,(4),jobs);
} else {
if((state_val_27473 === (3))){
var inst_27470 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27472__$1,inst_27470);
} else {
if((state_val_27473 === (4))){
var inst_27462 = (state_27472[(2)]);
var inst_27463 = process(inst_27462);
var state_27472__$1 = state_27472;
if(cljs.core.truth_(inst_27463)){
var statearr_27476_30157 = state_27472__$1;
(statearr_27476_30157[(1)] = (5));

} else {
var statearr_27477_30158 = state_27472__$1;
(statearr_27477_30158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (5))){
var state_27472__$1 = state_27472;
var statearr_27482_30159 = state_27472__$1;
(statearr_27482_30159[(2)] = null);

(statearr_27482_30159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (6))){
var state_27472__$1 = state_27472;
var statearr_27483_30160 = state_27472__$1;
(statearr_27483_30160[(2)] = null);

(statearr_27483_30160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (7))){
var inst_27468 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
var statearr_27484_30163 = state_27472__$1;
(statearr_27484_30163[(2)] = inst_27468);

(statearr_27484_30163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30146,c__27023__auto___30153,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async))
;
return ((function (__30146,switch__26722__auto__,c__27023__auto___30153,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0 = (function (){
var statearr_27488 = [null,null,null,null,null,null,null];
(statearr_27488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__);

(statearr_27488[(1)] = (1));

return statearr_27488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1 = (function (state_27472){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27472);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e27492){if((e27492 instanceof Object)){
var ex__26726__auto__ = e27492;
var statearr_27493_30166 = state_27472;
(statearr_27493_30166[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30167 = state_27472;
state_27472 = G__30167;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = function(state_27472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1.call(this,state_27472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__;
})()
;})(__30146,switch__26722__auto__,c__27023__auto___30153,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27502 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_27502[(6)] = c__27023__auto___30153);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(__30146,c__27023__auto___30153,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async))
);


break;
case "async":
var c__27023__auto___30169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30146,c__27023__auto___30169,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (__30146,c__27023__auto___30169,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async){
return (function (state_27526){
var state_val_27527 = (state_27526[(1)]);
if((state_val_27527 === (1))){
var state_27526__$1 = state_27526;
var statearr_27534_30173 = state_27526__$1;
(statearr_27534_30173[(2)] = null);

(statearr_27534_30173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27527 === (2))){
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27526__$1,(4),jobs);
} else {
if((state_val_27527 === (3))){
var inst_27524 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27526__$1,inst_27524);
} else {
if((state_val_27527 === (4))){
var inst_27513 = (state_27526[(2)]);
var inst_27517 = async(inst_27513);
var state_27526__$1 = state_27526;
if(cljs.core.truth_(inst_27517)){
var statearr_27536_30176 = state_27526__$1;
(statearr_27536_30176[(1)] = (5));

} else {
var statearr_27538_30178 = state_27526__$1;
(statearr_27538_30178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27527 === (5))){
var state_27526__$1 = state_27526;
var statearr_27539_30180 = state_27526__$1;
(statearr_27539_30180[(2)] = null);

(statearr_27539_30180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27527 === (6))){
var state_27526__$1 = state_27526;
var statearr_27541_30181 = state_27526__$1;
(statearr_27541_30181[(2)] = null);

(statearr_27541_30181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27527 === (7))){
var inst_27522 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
var statearr_27542_30184 = state_27526__$1;
(statearr_27542_30184[(2)] = inst_27522);

(statearr_27542_30184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30146,c__27023__auto___30169,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async))
;
return ((function (__30146,switch__26722__auto__,c__27023__auto___30169,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0 = (function (){
var statearr_27543 = [null,null,null,null,null,null,null];
(statearr_27543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__);

(statearr_27543[(1)] = (1));

return statearr_27543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1 = (function (state_27526){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27526);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e27544){if((e27544 instanceof Object)){
var ex__26726__auto__ = e27544;
var statearr_27545_30188 = state_27526;
(statearr_27545_30188[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30189 = state_27526;
state_27526 = G__30189;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = function(state_27526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1.call(this,state_27526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__;
})()
;})(__30146,switch__26722__auto__,c__27023__auto___30169,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27546 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_27546[(6)] = c__27023__auto___30169);

return statearr_27546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(__30146,c__27023__auto___30169,G__27457_30150,G__27457_30151__$1,n__4607__auto___30145,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27457_30151__$1)].join('')));

}

var G__30190 = (__30146 + (1));
__30146 = G__30190;
continue;
} else {
}
break;
}

var c__27023__auto___30191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30191,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30191,jobs,results,process,async){
return (function (state_27568){
var state_val_27569 = (state_27568[(1)]);
if((state_val_27569 === (7))){
var inst_27564 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27577_30194 = state_27568__$1;
(statearr_27577_30194[(2)] = inst_27564);

(statearr_27577_30194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (1))){
var state_27568__$1 = state_27568;
var statearr_27582_30195 = state_27568__$1;
(statearr_27582_30195[(2)] = null);

(statearr_27582_30195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (4))){
var inst_27549 = (state_27568[(7)]);
var inst_27549__$1 = (state_27568[(2)]);
var inst_27550 = (inst_27549__$1 == null);
var state_27568__$1 = (function (){var statearr_27583 = state_27568;
(statearr_27583[(7)] = inst_27549__$1);

return statearr_27583;
})();
if(cljs.core.truth_(inst_27550)){
var statearr_27584_30196 = state_27568__$1;
(statearr_27584_30196[(1)] = (5));

} else {
var statearr_27589_30197 = state_27568__$1;
(statearr_27589_30197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (6))){
var inst_27549 = (state_27568[(7)]);
var inst_27554 = (state_27568[(8)]);
var inst_27554__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27556 = [inst_27549,inst_27554__$1];
var inst_27557 = (new cljs.core.PersistentVector(null,2,(5),inst_27555,inst_27556,null));
var state_27568__$1 = (function (){var statearr_27590 = state_27568;
(statearr_27590[(8)] = inst_27554__$1);

return statearr_27590;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27568__$1,(8),jobs,inst_27557);
} else {
if((state_val_27569 === (3))){
var inst_27566 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27568__$1,inst_27566);
} else {
if((state_val_27569 === (2))){
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27568__$1,(4),from);
} else {
if((state_val_27569 === (9))){
var inst_27561 = (state_27568[(2)]);
var state_27568__$1 = (function (){var statearr_27597 = state_27568;
(statearr_27597[(9)] = inst_27561);

return statearr_27597;
})();
var statearr_27598_30200 = state_27568__$1;
(statearr_27598_30200[(2)] = null);

(statearr_27598_30200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (5))){
var inst_27552 = cljs.core.async.close_BANG_(jobs);
var state_27568__$1 = state_27568;
var statearr_27599_30201 = state_27568__$1;
(statearr_27599_30201[(2)] = inst_27552);

(statearr_27599_30201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (8))){
var inst_27554 = (state_27568[(8)]);
var inst_27559 = (state_27568[(2)]);
var state_27568__$1 = (function (){var statearr_27607 = state_27568;
(statearr_27607[(10)] = inst_27559);

return statearr_27607;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27568__$1,(9),results,inst_27554);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30191,jobs,results,process,async))
;
return ((function (switch__26722__auto__,c__27023__auto___30191,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0 = (function (){
var statearr_27611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27611[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__);

(statearr_27611[(1)] = (1));

return statearr_27611;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1 = (function (state_27568){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27568);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e27615){if((e27615 instanceof Object)){
var ex__26726__auto__ = e27615;
var statearr_27620_30202 = state_27568;
(statearr_27620_30202[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30204 = state_27568;
state_27568 = G__30204;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = function(state_27568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1.call(this,state_27568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30191,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27624 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_27624[(6)] = c__27023__auto___30191);

return statearr_27624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30191,jobs,results,process,async))
);


var c__27023__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto__,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto__,jobs,results,process,async){
return (function (state_27678){
var state_val_27680 = (state_27678[(1)]);
if((state_val_27680 === (7))){
var inst_27674 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27683_30208 = state_27678__$1;
(statearr_27683_30208[(2)] = inst_27674);

(statearr_27683_30208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (20))){
var state_27678__$1 = state_27678;
var statearr_27684_30211 = state_27678__$1;
(statearr_27684_30211[(2)] = null);

(statearr_27684_30211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (1))){
var state_27678__$1 = state_27678;
var statearr_27685_30212 = state_27678__$1;
(statearr_27685_30212[(2)] = null);

(statearr_27685_30212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (4))){
var inst_27633 = (state_27678[(7)]);
var inst_27633__$1 = (state_27678[(2)]);
var inst_27634 = (inst_27633__$1 == null);
var state_27678__$1 = (function (){var statearr_27688 = state_27678;
(statearr_27688[(7)] = inst_27633__$1);

return statearr_27688;
})();
if(cljs.core.truth_(inst_27634)){
var statearr_27690_30215 = state_27678__$1;
(statearr_27690_30215[(1)] = (5));

} else {
var statearr_27692_30216 = state_27678__$1;
(statearr_27692_30216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (15))){
var inst_27649 = (state_27678[(8)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27678__$1,(18),to,inst_27649);
} else {
if((state_val_27680 === (21))){
var inst_27669 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27694_30219 = state_27678__$1;
(statearr_27694_30219[(2)] = inst_27669);

(statearr_27694_30219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (13))){
var inst_27671 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27698 = state_27678;
(statearr_27698[(9)] = inst_27671);

return statearr_27698;
})();
var statearr_27699_30221 = state_27678__$1;
(statearr_27699_30221[(2)] = null);

(statearr_27699_30221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (6))){
var inst_27633 = (state_27678[(7)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27678__$1,(11),inst_27633);
} else {
if((state_val_27680 === (17))){
var inst_27664 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
if(cljs.core.truth_(inst_27664)){
var statearr_27700_30223 = state_27678__$1;
(statearr_27700_30223[(1)] = (19));

} else {
var statearr_27701_30224 = state_27678__$1;
(statearr_27701_30224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (3))){
var inst_27676 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27678__$1,inst_27676);
} else {
if((state_val_27680 === (12))){
var inst_27646 = (state_27678[(10)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27678__$1,(14),inst_27646);
} else {
if((state_val_27680 === (2))){
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27678__$1,(4),results);
} else {
if((state_val_27680 === (19))){
var state_27678__$1 = state_27678;
var statearr_27712_30227 = state_27678__$1;
(statearr_27712_30227[(2)] = null);

(statearr_27712_30227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (11))){
var inst_27646 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27719 = state_27678;
(statearr_27719[(10)] = inst_27646);

return statearr_27719;
})();
var statearr_27720_30228 = state_27678__$1;
(statearr_27720_30228[(2)] = null);

(statearr_27720_30228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (9))){
var state_27678__$1 = state_27678;
var statearr_27721_30229 = state_27678__$1;
(statearr_27721_30229[(2)] = null);

(statearr_27721_30229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (5))){
var state_27678__$1 = state_27678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27724_30230 = state_27678__$1;
(statearr_27724_30230[(1)] = (8));

} else {
var statearr_27728_30231 = state_27678__$1;
(statearr_27728_30231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (14))){
var inst_27657 = (state_27678[(11)]);
var inst_27649 = (state_27678[(8)]);
var inst_27649__$1 = (state_27678[(2)]);
var inst_27656 = (inst_27649__$1 == null);
var inst_27657__$1 = cljs.core.not(inst_27656);
var state_27678__$1 = (function (){var statearr_27735 = state_27678;
(statearr_27735[(11)] = inst_27657__$1);

(statearr_27735[(8)] = inst_27649__$1);

return statearr_27735;
})();
if(inst_27657__$1){
var statearr_27739_30233 = state_27678__$1;
(statearr_27739_30233[(1)] = (15));

} else {
var statearr_27741_30234 = state_27678__$1;
(statearr_27741_30234[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (16))){
var inst_27657 = (state_27678[(11)]);
var state_27678__$1 = state_27678;
var statearr_27745_30235 = state_27678__$1;
(statearr_27745_30235[(2)] = inst_27657);

(statearr_27745_30235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (10))){
var inst_27640 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27748_30236 = state_27678__$1;
(statearr_27748_30236[(2)] = inst_27640);

(statearr_27748_30236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (18))){
var inst_27661 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27749_30237 = state_27678__$1;
(statearr_27749_30237[(2)] = inst_27661);

(statearr_27749_30237[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27680 === (8))){
var inst_27637 = cljs.core.async.close_BANG_(to);
var state_27678__$1 = state_27678;
var statearr_27753_30238 = state_27678__$1;
(statearr_27753_30238[(2)] = inst_27637);

(statearr_27753_30238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto__,jobs,results,process,async))
;
return ((function (switch__26722__auto__,c__27023__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0 = (function (){
var statearr_27754 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__);

(statearr_27754[(1)] = (1));

return statearr_27754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1 = (function (state_27678){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27678);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e27757){if((e27757 instanceof Object)){
var ex__26726__auto__ = e27757;
var statearr_27761_30244 = state_27678;
(statearr_27761_30244[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30245 = state_27678;
state_27678 = G__30245;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__ = function(state_27678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1.call(this,state_27678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto__,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27764 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_27764[(6)] = c__27023__auto__);

return statearr_27764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto__,jobs,results,process,async))
);

return c__27023__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27778 = arguments.length;
switch (G__27778) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27793 = arguments.length;
switch (G__27793) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27812 = arguments.length;
switch (G__27812) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27023__auto___30263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30263,tc,fc){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30263,tc,fc){
return (function (state_27852){
var state_val_27853 = (state_27852[(1)]);
if((state_val_27853 === (7))){
var inst_27848 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
var statearr_27862_30264 = state_27852__$1;
(statearr_27862_30264[(2)] = inst_27848);

(statearr_27862_30264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (1))){
var state_27852__$1 = state_27852;
var statearr_27863_30265 = state_27852__$1;
(statearr_27863_30265[(2)] = null);

(statearr_27863_30265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (4))){
var inst_27829 = (state_27852[(7)]);
var inst_27829__$1 = (state_27852[(2)]);
var inst_27830 = (inst_27829__$1 == null);
var state_27852__$1 = (function (){var statearr_27871 = state_27852;
(statearr_27871[(7)] = inst_27829__$1);

return statearr_27871;
})();
if(cljs.core.truth_(inst_27830)){
var statearr_27875_30269 = state_27852__$1;
(statearr_27875_30269[(1)] = (5));

} else {
var statearr_27876_30270 = state_27852__$1;
(statearr_27876_30270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (13))){
var state_27852__$1 = state_27852;
var statearr_27880_30271 = state_27852__$1;
(statearr_27880_30271[(2)] = null);

(statearr_27880_30271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (6))){
var inst_27829 = (state_27852[(7)]);
var inst_27835 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27829) : p.call(null,inst_27829));
var state_27852__$1 = state_27852;
if(cljs.core.truth_(inst_27835)){
var statearr_27885_30275 = state_27852__$1;
(statearr_27885_30275[(1)] = (9));

} else {
var statearr_27890_30276 = state_27852__$1;
(statearr_27890_30276[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (3))){
var inst_27850 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27852__$1,inst_27850);
} else {
if((state_val_27853 === (12))){
var state_27852__$1 = state_27852;
var statearr_27895_30278 = state_27852__$1;
(statearr_27895_30278[(2)] = null);

(statearr_27895_30278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (2))){
var state_27852__$1 = state_27852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27852__$1,(4),ch);
} else {
if((state_val_27853 === (11))){
var inst_27829 = (state_27852[(7)]);
var inst_27839 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27852__$1,(8),inst_27839,inst_27829);
} else {
if((state_val_27853 === (9))){
var state_27852__$1 = state_27852;
var statearr_27901_30285 = state_27852__$1;
(statearr_27901_30285[(2)] = tc);

(statearr_27901_30285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (5))){
var inst_27832 = cljs.core.async.close_BANG_(tc);
var inst_27833 = cljs.core.async.close_BANG_(fc);
var state_27852__$1 = (function (){var statearr_27902 = state_27852;
(statearr_27902[(8)] = inst_27832);

return statearr_27902;
})();
var statearr_27903_30289 = state_27852__$1;
(statearr_27903_30289[(2)] = inst_27833);

(statearr_27903_30289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (14))){
var inst_27846 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
var statearr_27905_30290 = state_27852__$1;
(statearr_27905_30290[(2)] = inst_27846);

(statearr_27905_30290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (10))){
var state_27852__$1 = state_27852;
var statearr_27906_30294 = state_27852__$1;
(statearr_27906_30294[(2)] = fc);

(statearr_27906_30294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (8))){
var inst_27841 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
if(cljs.core.truth_(inst_27841)){
var statearr_27907_30295 = state_27852__$1;
(statearr_27907_30295[(1)] = (12));

} else {
var statearr_27908_30296 = state_27852__$1;
(statearr_27908_30296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30263,tc,fc))
;
return ((function (switch__26722__auto__,c__27023__auto___30263,tc,fc){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_27912 = [null,null,null,null,null,null,null,null,null];
(statearr_27912[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_27912[(1)] = (1));

return statearr_27912;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_27852){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27852);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e27913){if((e27913 instanceof Object)){
var ex__26726__auto__ = e27913;
var statearr_27914_30300 = state_27852;
(statearr_27914_30300[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30305 = state_27852;
state_27852 = G__30305;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_27852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_27852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30263,tc,fc))
})();
var state__27025__auto__ = (function (){var statearr_27915 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_27915[(6)] = c__27023__auto___30263);

return statearr_27915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30263,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27023__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto__){
return (function (state_27943){
var state_val_27944 = (state_27943[(1)]);
if((state_val_27944 === (7))){
var inst_27939 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27951_30312 = state_27943__$1;
(statearr_27951_30312[(2)] = inst_27939);

(statearr_27951_30312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (1))){
var inst_27920 = init;
var state_27943__$1 = (function (){var statearr_27952 = state_27943;
(statearr_27952[(7)] = inst_27920);

return statearr_27952;
})();
var statearr_27953_30316 = state_27943__$1;
(statearr_27953_30316[(2)] = null);

(statearr_27953_30316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (4))){
var inst_27925 = (state_27943[(8)]);
var inst_27925__$1 = (state_27943[(2)]);
var inst_27926 = (inst_27925__$1 == null);
var state_27943__$1 = (function (){var statearr_27954 = state_27943;
(statearr_27954[(8)] = inst_27925__$1);

return statearr_27954;
})();
if(cljs.core.truth_(inst_27926)){
var statearr_27955_30320 = state_27943__$1;
(statearr_27955_30320[(1)] = (5));

} else {
var statearr_27956_30321 = state_27943__$1;
(statearr_27956_30321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (6))){
var inst_27925 = (state_27943[(8)]);
var inst_27920 = (state_27943[(7)]);
var inst_27930 = (state_27943[(9)]);
var inst_27930__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27920,inst_27925) : f.call(null,inst_27920,inst_27925));
var inst_27931 = cljs.core.reduced_QMARK_(inst_27930__$1);
var state_27943__$1 = (function (){var statearr_27957 = state_27943;
(statearr_27957[(9)] = inst_27930__$1);

return statearr_27957;
})();
if(inst_27931){
var statearr_27958_30328 = state_27943__$1;
(statearr_27958_30328[(1)] = (8));

} else {
var statearr_27959_30329 = state_27943__$1;
(statearr_27959_30329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (3))){
var inst_27941 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27943__$1,inst_27941);
} else {
if((state_val_27944 === (2))){
var state_27943__$1 = state_27943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27943__$1,(4),ch);
} else {
if((state_val_27944 === (9))){
var inst_27930 = (state_27943[(9)]);
var inst_27920 = inst_27930;
var state_27943__$1 = (function (){var statearr_27962 = state_27943;
(statearr_27962[(7)] = inst_27920);

return statearr_27962;
})();
var statearr_27963_30333 = state_27943__$1;
(statearr_27963_30333[(2)] = null);

(statearr_27963_30333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (5))){
var inst_27920 = (state_27943[(7)]);
var state_27943__$1 = state_27943;
var statearr_27964_30337 = state_27943__$1;
(statearr_27964_30337[(2)] = inst_27920);

(statearr_27964_30337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (10))){
var inst_27937 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27965_30339 = state_27943__$1;
(statearr_27965_30339[(2)] = inst_27937);

(statearr_27965_30339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (8))){
var inst_27930 = (state_27943[(9)]);
var inst_27933 = cljs.core.deref(inst_27930);
var state_27943__$1 = state_27943;
var statearr_27966_30341 = state_27943__$1;
(statearr_27966_30341[(2)] = inst_27933);

(statearr_27966_30341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto__))
;
return ((function (switch__26722__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26723__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26723__auto____0 = (function (){
var statearr_27967 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27967[(0)] = cljs$core$async$reduce_$_state_machine__26723__auto__);

(statearr_27967[(1)] = (1));

return statearr_27967;
});
var cljs$core$async$reduce_$_state_machine__26723__auto____1 = (function (state_27943){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27943);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e27968){if((e27968 instanceof Object)){
var ex__26726__auto__ = e27968;
var statearr_27969_30343 = state_27943;
(statearr_27969_30343[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30344 = state_27943;
state_27943 = G__30344;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26723__auto__ = function(state_27943){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26723__auto____1.call(this,state_27943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26723__auto____0;
cljs$core$async$reduce_$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26723__auto____1;
return cljs$core$async$reduce_$_state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_27972 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_27972[(6)] = c__27023__auto__);

return statearr_27972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27023__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto__,f__$1){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto__,f__$1){
return (function (state_27994){
var state_val_27995 = (state_27994[(1)]);
if((state_val_27995 === (1))){
var inst_27988 = cljs.core.async.reduce(f__$1,init,ch);
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27994__$1,(2),inst_27988);
} else {
if((state_val_27995 === (2))){
var inst_27990 = (state_27994[(2)]);
var inst_27992 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27990) : f__$1.call(null,inst_27990));
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27994__$1,inst_27992);
} else {
return null;
}
}
});})(c__27023__auto__,f__$1))
;
return ((function (switch__26722__auto__,c__27023__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26723__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26723__auto____0 = (function (){
var statearr_28000 = [null,null,null,null,null,null,null];
(statearr_28000[(0)] = cljs$core$async$transduce_$_state_machine__26723__auto__);

(statearr_28000[(1)] = (1));

return statearr_28000;
});
var cljs$core$async$transduce_$_state_machine__26723__auto____1 = (function (state_27994){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_27994);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e28002){if((e28002 instanceof Object)){
var ex__26726__auto__ = e28002;
var statearr_28003_30345 = state_27994;
(statearr_28003_30345[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30352 = state_27994;
state_27994 = G__30352;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26723__auto__ = function(state_27994){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26723__auto____1.call(this,state_27994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26723__auto____0;
cljs$core$async$transduce_$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26723__auto____1;
return cljs$core$async$transduce_$_state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto__,f__$1))
})();
var state__27025__auto__ = (function (){var statearr_28008 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_28008[(6)] = c__27023__auto__);

return statearr_28008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto__,f__$1))
);

return c__27023__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28013 = arguments.length;
switch (G__28013) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27023__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto__){
return (function (state_28048){
var state_val_28049 = (state_28048[(1)]);
if((state_val_28049 === (7))){
var inst_28030 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28054_30364 = state_28048__$1;
(statearr_28054_30364[(2)] = inst_28030);

(statearr_28054_30364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (1))){
var inst_28024 = cljs.core.seq(coll);
var inst_28025 = inst_28024;
var state_28048__$1 = (function (){var statearr_28058 = state_28048;
(statearr_28058[(7)] = inst_28025);

return statearr_28058;
})();
var statearr_28061_30367 = state_28048__$1;
(statearr_28061_30367[(2)] = null);

(statearr_28061_30367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (4))){
var inst_28025 = (state_28048[(7)]);
var inst_28028 = cljs.core.first(inst_28025);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28048__$1,(7),ch,inst_28028);
} else {
if((state_val_28049 === (13))){
var inst_28042 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28071_30369 = state_28048__$1;
(statearr_28071_30369[(2)] = inst_28042);

(statearr_28071_30369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (6))){
var inst_28033 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
if(cljs.core.truth_(inst_28033)){
var statearr_28073_30372 = state_28048__$1;
(statearr_28073_30372[(1)] = (8));

} else {
var statearr_28074_30374 = state_28048__$1;
(statearr_28074_30374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (3))){
var inst_28046 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28048__$1,inst_28046);
} else {
if((state_val_28049 === (12))){
var state_28048__$1 = state_28048;
var statearr_28078_30377 = state_28048__$1;
(statearr_28078_30377[(2)] = null);

(statearr_28078_30377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (2))){
var inst_28025 = (state_28048[(7)]);
var state_28048__$1 = state_28048;
if(cljs.core.truth_(inst_28025)){
var statearr_28082_30378 = state_28048__$1;
(statearr_28082_30378[(1)] = (4));

} else {
var statearr_28083_30379 = state_28048__$1;
(statearr_28083_30379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (11))){
var inst_28039 = cljs.core.async.close_BANG_(ch);
var state_28048__$1 = state_28048;
var statearr_28084_30380 = state_28048__$1;
(statearr_28084_30380[(2)] = inst_28039);

(statearr_28084_30380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (9))){
var state_28048__$1 = state_28048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28085_30385 = state_28048__$1;
(statearr_28085_30385[(1)] = (11));

} else {
var statearr_28086_30386 = state_28048__$1;
(statearr_28086_30386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (5))){
var inst_28025 = (state_28048[(7)]);
var state_28048__$1 = state_28048;
var statearr_28087_30389 = state_28048__$1;
(statearr_28087_30389[(2)] = inst_28025);

(statearr_28087_30389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (10))){
var inst_28044 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28088_30394 = state_28048__$1;
(statearr_28088_30394[(2)] = inst_28044);

(statearr_28088_30394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (8))){
var inst_28025 = (state_28048[(7)]);
var inst_28035 = cljs.core.next(inst_28025);
var inst_28025__$1 = inst_28035;
var state_28048__$1 = (function (){var statearr_28091 = state_28048;
(statearr_28091[(7)] = inst_28025__$1);

return statearr_28091;
})();
var statearr_28092_30395 = state_28048__$1;
(statearr_28092_30395[(2)] = null);

(statearr_28092_30395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto__))
;
return ((function (switch__26722__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_28096 = [null,null,null,null,null,null,null,null];
(statearr_28096[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_28096[(1)] = (1));

return statearr_28096;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_28048){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_28048);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e28097){if((e28097 instanceof Object)){
var ex__26726__auto__ = e28097;
var statearr_28098_30401 = state_28048;
(statearr_28098_30401[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30402 = state_28048;
state_28048 = G__30402;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_28048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_28048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_28102 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_28102[(6)] = c__27023__auto__);

return statearr_28102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28142 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28142 = (function (ch,cs,meta28143){
this.ch = ch;
this.cs = cs;
this.meta28143 = meta28143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28144,meta28143__$1){
var self__ = this;
var _28144__$1 = this;
return (new cljs.core.async.t_cljs$core$async28142(self__.ch,self__.cs,meta28143__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28144){
var self__ = this;
var _28144__$1 = this;
return self__.meta28143;
});})(cs))
;

cljs.core.async.t_cljs$core$async28142.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28142.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28142.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28142.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28142.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28142.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28143","meta28143",-758818862,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28142";

cljs.core.async.t_cljs$core$async28142.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28142");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28142.
 */
cljs.core.async.__GT_t_cljs$core$async28142 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28142(ch__$1,cs__$1,meta28143){
return (new cljs.core.async.t_cljs$core$async28142(ch__$1,cs__$1,meta28143));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28142(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27023__auto___30424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30424,cs,m,dchan,dctr,done){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30424,cs,m,dchan,dctr,done){
return (function (state_28339){
var state_val_28344 = (state_28339[(1)]);
if((state_val_28344 === (7))){
var inst_28331 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28359_30426 = state_28339__$1;
(statearr_28359_30426[(2)] = inst_28331);

(statearr_28359_30426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (20))){
var inst_28211 = (state_28339[(7)]);
var inst_28227 = cljs.core.first(inst_28211);
var inst_28229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28227,(0),null);
var inst_28231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28227,(1),null);
var state_28339__$1 = (function (){var statearr_28366 = state_28339;
(statearr_28366[(8)] = inst_28229);

return statearr_28366;
})();
if(cljs.core.truth_(inst_28231)){
var statearr_28368_30432 = state_28339__$1;
(statearr_28368_30432[(1)] = (22));

} else {
var statearr_28369_30433 = state_28339__$1;
(statearr_28369_30433[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (27))){
var inst_28273 = (state_28339[(9)]);
var inst_28271 = (state_28339[(10)]);
var inst_28278 = (state_28339[(11)]);
var inst_28162 = (state_28339[(12)]);
var inst_28278__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28271,inst_28273);
var inst_28279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28278__$1,inst_28162,done);
var state_28339__$1 = (function (){var statearr_28379 = state_28339;
(statearr_28379[(11)] = inst_28278__$1);

return statearr_28379;
})();
if(cljs.core.truth_(inst_28279)){
var statearr_28384_30439 = state_28339__$1;
(statearr_28384_30439[(1)] = (30));

} else {
var statearr_28385_30443 = state_28339__$1;
(statearr_28385_30443[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (1))){
var state_28339__$1 = state_28339;
var statearr_28390_30447 = state_28339__$1;
(statearr_28390_30447[(2)] = null);

(statearr_28390_30447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (24))){
var inst_28211 = (state_28339[(7)]);
var inst_28236 = (state_28339[(2)]);
var inst_28237 = cljs.core.next(inst_28211);
var inst_28171 = inst_28237;
var inst_28172 = null;
var inst_28173 = (0);
var inst_28174 = (0);
var state_28339__$1 = (function (){var statearr_28395 = state_28339;
(statearr_28395[(13)] = inst_28173);

(statearr_28395[(14)] = inst_28172);

(statearr_28395[(15)] = inst_28174);

(statearr_28395[(16)] = inst_28171);

(statearr_28395[(17)] = inst_28236);

return statearr_28395;
})();
var statearr_28398_30452 = state_28339__$1;
(statearr_28398_30452[(2)] = null);

(statearr_28398_30452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (39))){
var state_28339__$1 = state_28339;
var statearr_28410_30457 = state_28339__$1;
(statearr_28410_30457[(2)] = null);

(statearr_28410_30457[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (4))){
var inst_28162 = (state_28339[(12)]);
var inst_28162__$1 = (state_28339[(2)]);
var inst_28163 = (inst_28162__$1 == null);
var state_28339__$1 = (function (){var statearr_28415 = state_28339;
(statearr_28415[(12)] = inst_28162__$1);

return statearr_28415;
})();
if(cljs.core.truth_(inst_28163)){
var statearr_28416_30459 = state_28339__$1;
(statearr_28416_30459[(1)] = (5));

} else {
var statearr_28417_30460 = state_28339__$1;
(statearr_28417_30460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (15))){
var inst_28173 = (state_28339[(13)]);
var inst_28172 = (state_28339[(14)]);
var inst_28174 = (state_28339[(15)]);
var inst_28171 = (state_28339[(16)]);
var inst_28191 = (state_28339[(2)]);
var inst_28208 = (inst_28174 + (1));
var tmp28405 = inst_28173;
var tmp28406 = inst_28172;
var tmp28407 = inst_28171;
var inst_28171__$1 = tmp28407;
var inst_28172__$1 = tmp28406;
var inst_28173__$1 = tmp28405;
var inst_28174__$1 = inst_28208;
var state_28339__$1 = (function (){var statearr_28418 = state_28339;
(statearr_28418[(13)] = inst_28173__$1);

(statearr_28418[(14)] = inst_28172__$1);

(statearr_28418[(18)] = inst_28191);

(statearr_28418[(15)] = inst_28174__$1);

(statearr_28418[(16)] = inst_28171__$1);

return statearr_28418;
})();
var statearr_28419_30465 = state_28339__$1;
(statearr_28419_30465[(2)] = null);

(statearr_28419_30465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (21))){
var inst_28240 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28425_30466 = state_28339__$1;
(statearr_28425_30466[(2)] = inst_28240);

(statearr_28425_30466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (31))){
var inst_28278 = (state_28339[(11)]);
var inst_28282 = done(null);
var inst_28283 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28278);
var state_28339__$1 = (function (){var statearr_28427 = state_28339;
(statearr_28427[(19)] = inst_28282);

return statearr_28427;
})();
var statearr_28428_30470 = state_28339__$1;
(statearr_28428_30470[(2)] = inst_28283);

(statearr_28428_30470[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (32))){
var inst_28273 = (state_28339[(9)]);
var inst_28270 = (state_28339[(20)]);
var inst_28271 = (state_28339[(10)]);
var inst_28272 = (state_28339[(21)]);
var inst_28285 = (state_28339[(2)]);
var inst_28286 = (inst_28273 + (1));
var tmp28420 = inst_28270;
var tmp28421 = inst_28271;
var tmp28422 = inst_28272;
var inst_28270__$1 = tmp28420;
var inst_28271__$1 = tmp28421;
var inst_28272__$1 = tmp28422;
var inst_28273__$1 = inst_28286;
var state_28339__$1 = (function (){var statearr_28434 = state_28339;
(statearr_28434[(22)] = inst_28285);

(statearr_28434[(9)] = inst_28273__$1);

(statearr_28434[(20)] = inst_28270__$1);

(statearr_28434[(10)] = inst_28271__$1);

(statearr_28434[(21)] = inst_28272__$1);

return statearr_28434;
})();
var statearr_28436_30473 = state_28339__$1;
(statearr_28436_30473[(2)] = null);

(statearr_28436_30473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (40))){
var inst_28302 = (state_28339[(23)]);
var inst_28306 = done(null);
var inst_28307 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28302);
var state_28339__$1 = (function (){var statearr_28441 = state_28339;
(statearr_28441[(24)] = inst_28306);

return statearr_28441;
})();
var statearr_28442_30483 = state_28339__$1;
(statearr_28442_30483[(2)] = inst_28307);

(statearr_28442_30483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (33))){
var inst_28289 = (state_28339[(25)]);
var inst_28291 = cljs.core.chunked_seq_QMARK_(inst_28289);
var state_28339__$1 = state_28339;
if(inst_28291){
var statearr_28443_30491 = state_28339__$1;
(statearr_28443_30491[(1)] = (36));

} else {
var statearr_28444_30492 = state_28339__$1;
(statearr_28444_30492[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (13))){
var inst_28185 = (state_28339[(26)]);
var inst_28188 = cljs.core.async.close_BANG_(inst_28185);
var state_28339__$1 = state_28339;
var statearr_28447_30495 = state_28339__$1;
(statearr_28447_30495[(2)] = inst_28188);

(statearr_28447_30495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (22))){
var inst_28229 = (state_28339[(8)]);
var inst_28233 = cljs.core.async.close_BANG_(inst_28229);
var state_28339__$1 = state_28339;
var statearr_28448_30497 = state_28339__$1;
(statearr_28448_30497[(2)] = inst_28233);

(statearr_28448_30497[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (36))){
var inst_28289 = (state_28339[(25)]);
var inst_28293 = cljs.core.chunk_first(inst_28289);
var inst_28297 = cljs.core.chunk_rest(inst_28289);
var inst_28299 = cljs.core.count(inst_28293);
var inst_28270 = inst_28297;
var inst_28271 = inst_28293;
var inst_28272 = inst_28299;
var inst_28273 = (0);
var state_28339__$1 = (function (){var statearr_28453 = state_28339;
(statearr_28453[(9)] = inst_28273);

(statearr_28453[(20)] = inst_28270);

(statearr_28453[(10)] = inst_28271);

(statearr_28453[(21)] = inst_28272);

return statearr_28453;
})();
var statearr_28454_30502 = state_28339__$1;
(statearr_28454_30502[(2)] = null);

(statearr_28454_30502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (41))){
var inst_28289 = (state_28339[(25)]);
var inst_28309 = (state_28339[(2)]);
var inst_28311 = cljs.core.next(inst_28289);
var inst_28270 = inst_28311;
var inst_28271 = null;
var inst_28272 = (0);
var inst_28273 = (0);
var state_28339__$1 = (function (){var statearr_28459 = state_28339;
(statearr_28459[(9)] = inst_28273);

(statearr_28459[(20)] = inst_28270);

(statearr_28459[(10)] = inst_28271);

(statearr_28459[(21)] = inst_28272);

(statearr_28459[(27)] = inst_28309);

return statearr_28459;
})();
var statearr_28468_30503 = state_28339__$1;
(statearr_28468_30503[(2)] = null);

(statearr_28468_30503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (43))){
var state_28339__$1 = state_28339;
var statearr_28473_30504 = state_28339__$1;
(statearr_28473_30504[(2)] = null);

(statearr_28473_30504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (29))){
var inst_28319 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28474_30505 = state_28339__$1;
(statearr_28474_30505[(2)] = inst_28319);

(statearr_28474_30505[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (44))){
var inst_28328 = (state_28339[(2)]);
var state_28339__$1 = (function (){var statearr_28479 = state_28339;
(statearr_28479[(28)] = inst_28328);

return statearr_28479;
})();
var statearr_28481_30512 = state_28339__$1;
(statearr_28481_30512[(2)] = null);

(statearr_28481_30512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (6))){
var inst_28261 = (state_28339[(29)]);
var inst_28260 = cljs.core.deref(cs);
var inst_28261__$1 = cljs.core.keys(inst_28260);
var inst_28262 = cljs.core.count(inst_28261__$1);
var inst_28263 = cljs.core.reset_BANG_(dctr,inst_28262);
var inst_28269 = cljs.core.seq(inst_28261__$1);
var inst_28270 = inst_28269;
var inst_28271 = null;
var inst_28272 = (0);
var inst_28273 = (0);
var state_28339__$1 = (function (){var statearr_28487 = state_28339;
(statearr_28487[(29)] = inst_28261__$1);

(statearr_28487[(9)] = inst_28273);

(statearr_28487[(20)] = inst_28270);

(statearr_28487[(10)] = inst_28271);

(statearr_28487[(21)] = inst_28272);

(statearr_28487[(30)] = inst_28263);

return statearr_28487;
})();
var statearr_28491_30519 = state_28339__$1;
(statearr_28491_30519[(2)] = null);

(statearr_28491_30519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (28))){
var inst_28289 = (state_28339[(25)]);
var inst_28270 = (state_28339[(20)]);
var inst_28289__$1 = cljs.core.seq(inst_28270);
var state_28339__$1 = (function (){var statearr_28496 = state_28339;
(statearr_28496[(25)] = inst_28289__$1);

return statearr_28496;
})();
if(inst_28289__$1){
var statearr_28497_30522 = state_28339__$1;
(statearr_28497_30522[(1)] = (33));

} else {
var statearr_28500_30523 = state_28339__$1;
(statearr_28500_30523[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (25))){
var inst_28273 = (state_28339[(9)]);
var inst_28272 = (state_28339[(21)]);
var inst_28275 = (inst_28273 < inst_28272);
var inst_28276 = inst_28275;
var state_28339__$1 = state_28339;
if(cljs.core.truth_(inst_28276)){
var statearr_28503_30525 = state_28339__$1;
(statearr_28503_30525[(1)] = (27));

} else {
var statearr_28504_30527 = state_28339__$1;
(statearr_28504_30527[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (34))){
var state_28339__$1 = state_28339;
var statearr_28513_30529 = state_28339__$1;
(statearr_28513_30529[(2)] = null);

(statearr_28513_30529[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (17))){
var state_28339__$1 = state_28339;
var statearr_28514_30531 = state_28339__$1;
(statearr_28514_30531[(2)] = null);

(statearr_28514_30531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (3))){
var inst_28333 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28339__$1,inst_28333);
} else {
if((state_val_28344 === (12))){
var inst_28245 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28521_30535 = state_28339__$1;
(statearr_28521_30535[(2)] = inst_28245);

(statearr_28521_30535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (2))){
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28339__$1,(4),ch);
} else {
if((state_val_28344 === (23))){
var state_28339__$1 = state_28339;
var statearr_28524_30536 = state_28339__$1;
(statearr_28524_30536[(2)] = null);

(statearr_28524_30536[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (35))){
var inst_28317 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28525_30539 = state_28339__$1;
(statearr_28525_30539[(2)] = inst_28317);

(statearr_28525_30539[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (19))){
var inst_28211 = (state_28339[(7)]);
var inst_28216 = cljs.core.chunk_first(inst_28211);
var inst_28219 = cljs.core.chunk_rest(inst_28211);
var inst_28220 = cljs.core.count(inst_28216);
var inst_28171 = inst_28219;
var inst_28172 = inst_28216;
var inst_28173 = inst_28220;
var inst_28174 = (0);
var state_28339__$1 = (function (){var statearr_28530 = state_28339;
(statearr_28530[(13)] = inst_28173);

(statearr_28530[(14)] = inst_28172);

(statearr_28530[(15)] = inst_28174);

(statearr_28530[(16)] = inst_28171);

return statearr_28530;
})();
var statearr_28531_30545 = state_28339__$1;
(statearr_28531_30545[(2)] = null);

(statearr_28531_30545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (11))){
var inst_28211 = (state_28339[(7)]);
var inst_28171 = (state_28339[(16)]);
var inst_28211__$1 = cljs.core.seq(inst_28171);
var state_28339__$1 = (function (){var statearr_28532 = state_28339;
(statearr_28532[(7)] = inst_28211__$1);

return statearr_28532;
})();
if(inst_28211__$1){
var statearr_28536_30547 = state_28339__$1;
(statearr_28536_30547[(1)] = (16));

} else {
var statearr_28538_30548 = state_28339__$1;
(statearr_28538_30548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (9))){
var inst_28247 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28539_30551 = state_28339__$1;
(statearr_28539_30551[(2)] = inst_28247);

(statearr_28539_30551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (5))){
var inst_28169 = cljs.core.deref(cs);
var inst_28170 = cljs.core.seq(inst_28169);
var inst_28171 = inst_28170;
var inst_28172 = null;
var inst_28173 = (0);
var inst_28174 = (0);
var state_28339__$1 = (function (){var statearr_28541 = state_28339;
(statearr_28541[(13)] = inst_28173);

(statearr_28541[(14)] = inst_28172);

(statearr_28541[(15)] = inst_28174);

(statearr_28541[(16)] = inst_28171);

return statearr_28541;
})();
var statearr_28543_30555 = state_28339__$1;
(statearr_28543_30555[(2)] = null);

(statearr_28543_30555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (14))){
var state_28339__$1 = state_28339;
var statearr_28544_30558 = state_28339__$1;
(statearr_28544_30558[(2)] = null);

(statearr_28544_30558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (45))){
var inst_28325 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28547_30560 = state_28339__$1;
(statearr_28547_30560[(2)] = inst_28325);

(statearr_28547_30560[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (26))){
var inst_28261 = (state_28339[(29)]);
var inst_28321 = (state_28339[(2)]);
var inst_28322 = cljs.core.seq(inst_28261);
var state_28339__$1 = (function (){var statearr_28549 = state_28339;
(statearr_28549[(31)] = inst_28321);

return statearr_28549;
})();
if(inst_28322){
var statearr_28551_30563 = state_28339__$1;
(statearr_28551_30563[(1)] = (42));

} else {
var statearr_28553_30564 = state_28339__$1;
(statearr_28553_30564[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (16))){
var inst_28211 = (state_28339[(7)]);
var inst_28214 = cljs.core.chunked_seq_QMARK_(inst_28211);
var state_28339__$1 = state_28339;
if(inst_28214){
var statearr_28557_30573 = state_28339__$1;
(statearr_28557_30573[(1)] = (19));

} else {
var statearr_28558_30575 = state_28339__$1;
(statearr_28558_30575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (38))){
var inst_28314 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28562_30576 = state_28339__$1;
(statearr_28562_30576[(2)] = inst_28314);

(statearr_28562_30576[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (30))){
var state_28339__$1 = state_28339;
var statearr_28566_30578 = state_28339__$1;
(statearr_28566_30578[(2)] = null);

(statearr_28566_30578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (10))){
var inst_28172 = (state_28339[(14)]);
var inst_28174 = (state_28339[(15)]);
var inst_28184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28172,inst_28174);
var inst_28185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28184,(0),null);
var inst_28186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28184,(1),null);
var state_28339__$1 = (function (){var statearr_28567 = state_28339;
(statearr_28567[(26)] = inst_28185);

return statearr_28567;
})();
if(cljs.core.truth_(inst_28186)){
var statearr_28568_30581 = state_28339__$1;
(statearr_28568_30581[(1)] = (13));

} else {
var statearr_28569_30582 = state_28339__$1;
(statearr_28569_30582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (18))){
var inst_28243 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28570_30583 = state_28339__$1;
(statearr_28570_30583[(2)] = inst_28243);

(statearr_28570_30583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (42))){
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28339__$1,(45),dchan);
} else {
if((state_val_28344 === (37))){
var inst_28289 = (state_28339[(25)]);
var inst_28302 = (state_28339[(23)]);
var inst_28162 = (state_28339[(12)]);
var inst_28302__$1 = cljs.core.first(inst_28289);
var inst_28303 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28302__$1,inst_28162,done);
var state_28339__$1 = (function (){var statearr_28573 = state_28339;
(statearr_28573[(23)] = inst_28302__$1);

return statearr_28573;
})();
if(cljs.core.truth_(inst_28303)){
var statearr_28574_30588 = state_28339__$1;
(statearr_28574_30588[(1)] = (39));

} else {
var statearr_28575_30589 = state_28339__$1;
(statearr_28575_30589[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (8))){
var inst_28173 = (state_28339[(13)]);
var inst_28174 = (state_28339[(15)]);
var inst_28178 = (inst_28174 < inst_28173);
var inst_28179 = inst_28178;
var state_28339__$1 = state_28339;
if(cljs.core.truth_(inst_28179)){
var statearr_28576_30591 = state_28339__$1;
(statearr_28576_30591[(1)] = (10));

} else {
var statearr_28577_30592 = state_28339__$1;
(statearr_28577_30592[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30424,cs,m,dchan,dctr,done))
;
return ((function (switch__26722__auto__,c__27023__auto___30424,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26723__auto__ = null;
var cljs$core$async$mult_$_state_machine__26723__auto____0 = (function (){
var statearr_28578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28578[(0)] = cljs$core$async$mult_$_state_machine__26723__auto__);

(statearr_28578[(1)] = (1));

return statearr_28578;
});
var cljs$core$async$mult_$_state_machine__26723__auto____1 = (function (state_28339){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_28339);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e28580){if((e28580 instanceof Object)){
var ex__26726__auto__ = e28580;
var statearr_28581_30598 = state_28339;
(statearr_28581_30598[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30601 = state_28339;
state_28339 = G__30601;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26723__auto__ = function(state_28339){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26723__auto____1.call(this,state_28339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26723__auto____0;
cljs$core$async$mult_$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26723__auto____1;
return cljs$core$async$mult_$_state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30424,cs,m,dchan,dctr,done))
})();
var state__27025__auto__ = (function (){var statearr_28582 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_28582[(6)] = c__27023__auto___30424);

return statearr_28582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30424,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28588 = arguments.length;
switch (G__28588) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30638 = arguments.length;
var i__4731__auto___30639 = (0);
while(true){
if((i__4731__auto___30639 < len__4730__auto___30638)){
args__4736__auto__.push((arguments[i__4731__auto___30639]));

var G__30641 = (i__4731__auto___30639 + (1));
i__4731__auto___30639 = G__30641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28630){
var map__28631 = p__28630;
var map__28631__$1 = (((((!((map__28631 == null))))?(((((map__28631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28631):map__28631);
var opts = map__28631__$1;
var statearr_28633_30650 = state;
(statearr_28633_30650[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__28631,map__28631__$1,opts){
return (function (val){
var statearr_28635_30655 = state;
(statearr_28635_30655[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__28631,map__28631__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28638_30656 = state;
(statearr_28638_30656[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28621){
var G__28622 = cljs.core.first(seq28621);
var seq28621__$1 = cljs.core.next(seq28621);
var G__28623 = cljs.core.first(seq28621__$1);
var seq28621__$2 = cljs.core.next(seq28621__$1);
var G__28624 = cljs.core.first(seq28621__$2);
var seq28621__$3 = cljs.core.next(seq28621__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28622,G__28623,G__28624,seq28621__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28646 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28647){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28647 = meta28647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28648,meta28647__$1){
var self__ = this;
var _28648__$1 = this;
return (new cljs.core.async.t_cljs$core$async28646(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28647__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28648){
var self__ = this;
var _28648__$1 = this;
return self__.meta28647;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28647","meta28647",2134837588,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28646";

cljs.core.async.t_cljs$core$async28646.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28646");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28646.
 */
cljs.core.async.__GT_t_cljs$core$async28646 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28646(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28647){
return (new cljs.core.async.t_cljs$core$async28646(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28647));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28646(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27023__auto___30699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28767){
var state_val_28768 = (state_28767[(1)]);
if((state_val_28768 === (7))){
var inst_28672 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28773_30700 = state_28767__$1;
(statearr_28773_30700[(2)] = inst_28672);

(statearr_28773_30700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (20))){
var inst_28685 = (state_28767[(7)]);
var state_28767__$1 = state_28767;
var statearr_28775_30701 = state_28767__$1;
(statearr_28775_30701[(2)] = inst_28685);

(statearr_28775_30701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (27))){
var state_28767__$1 = state_28767;
var statearr_28776_30703 = state_28767__$1;
(statearr_28776_30703[(2)] = null);

(statearr_28776_30703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (1))){
var inst_28656 = (state_28767[(8)]);
var inst_28656__$1 = calc_state();
var inst_28659 = (inst_28656__$1 == null);
var inst_28660 = cljs.core.not(inst_28659);
var state_28767__$1 = (function (){var statearr_28777 = state_28767;
(statearr_28777[(8)] = inst_28656__$1);

return statearr_28777;
})();
if(inst_28660){
var statearr_28778_30704 = state_28767__$1;
(statearr_28778_30704[(1)] = (2));

} else {
var statearr_28780_30705 = state_28767__$1;
(statearr_28780_30705[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (24))){
var inst_28722 = (state_28767[(9)]);
var inst_28737 = (state_28767[(10)]);
var inst_28712 = (state_28767[(11)]);
var inst_28737__$1 = (inst_28712.cljs$core$IFn$_invoke$arity$1 ? inst_28712.cljs$core$IFn$_invoke$arity$1(inst_28722) : inst_28712.call(null,inst_28722));
var state_28767__$1 = (function (){var statearr_28781 = state_28767;
(statearr_28781[(10)] = inst_28737__$1);

return statearr_28781;
})();
if(cljs.core.truth_(inst_28737__$1)){
var statearr_28783_30706 = state_28767__$1;
(statearr_28783_30706[(1)] = (29));

} else {
var statearr_28785_30707 = state_28767__$1;
(statearr_28785_30707[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (4))){
var inst_28675 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28675)){
var statearr_28788_30708 = state_28767__$1;
(statearr_28788_30708[(1)] = (8));

} else {
var statearr_28789_30709 = state_28767__$1;
(statearr_28789_30709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (15))){
var inst_28706 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28706)){
var statearr_28793_30710 = state_28767__$1;
(statearr_28793_30710[(1)] = (19));

} else {
var statearr_28794_30711 = state_28767__$1;
(statearr_28794_30711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (21))){
var inst_28711 = (state_28767[(12)]);
var inst_28711__$1 = (state_28767[(2)]);
var inst_28712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28711__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28711__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28711__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28767__$1 = (function (){var statearr_28798 = state_28767;
(statearr_28798[(13)] = inst_28713);

(statearr_28798[(12)] = inst_28711__$1);

(statearr_28798[(11)] = inst_28712);

return statearr_28798;
})();
return cljs.core.async.ioc_alts_BANG_(state_28767__$1,(22),inst_28714);
} else {
if((state_val_28768 === (31))){
var inst_28745 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28745)){
var statearr_28799_30712 = state_28767__$1;
(statearr_28799_30712[(1)] = (32));

} else {
var statearr_28800_30713 = state_28767__$1;
(statearr_28800_30713[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (32))){
var inst_28720 = (state_28767[(14)]);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28767__$1,(35),out,inst_28720);
} else {
if((state_val_28768 === (33))){
var inst_28711 = (state_28767[(12)]);
var inst_28685 = inst_28711;
var state_28767__$1 = (function (){var statearr_28801 = state_28767;
(statearr_28801[(7)] = inst_28685);

return statearr_28801;
})();
var statearr_28802_30715 = state_28767__$1;
(statearr_28802_30715[(2)] = null);

(statearr_28802_30715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (13))){
var inst_28685 = (state_28767[(7)]);
var inst_28695 = inst_28685.cljs$lang$protocol_mask$partition0$;
var inst_28696 = (inst_28695 & (64));
var inst_28697 = inst_28685.cljs$core$ISeq$;
var inst_28698 = (cljs.core.PROTOCOL_SENTINEL === inst_28697);
var inst_28699 = ((inst_28696) || (inst_28698));
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28699)){
var statearr_28803_30716 = state_28767__$1;
(statearr_28803_30716[(1)] = (16));

} else {
var statearr_28804_30717 = state_28767__$1;
(statearr_28804_30717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (22))){
var inst_28720 = (state_28767[(14)]);
var inst_28722 = (state_28767[(9)]);
var inst_28719 = (state_28767[(2)]);
var inst_28720__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28719,(0),null);
var inst_28722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28719,(1),null);
var inst_28723 = (inst_28720__$1 == null);
var inst_28724 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28722__$1,change);
var inst_28725 = ((inst_28723) || (inst_28724));
var state_28767__$1 = (function (){var statearr_28805 = state_28767;
(statearr_28805[(14)] = inst_28720__$1);

(statearr_28805[(9)] = inst_28722__$1);

return statearr_28805;
})();
if(cljs.core.truth_(inst_28725)){
var statearr_28806_30718 = state_28767__$1;
(statearr_28806_30718[(1)] = (23));

} else {
var statearr_28807_30719 = state_28767__$1;
(statearr_28807_30719[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (36))){
var inst_28711 = (state_28767[(12)]);
var inst_28685 = inst_28711;
var state_28767__$1 = (function (){var statearr_28809 = state_28767;
(statearr_28809[(7)] = inst_28685);

return statearr_28809;
})();
var statearr_28810_30724 = state_28767__$1;
(statearr_28810_30724[(2)] = null);

(statearr_28810_30724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (29))){
var inst_28737 = (state_28767[(10)]);
var state_28767__$1 = state_28767;
var statearr_28812_30725 = state_28767__$1;
(statearr_28812_30725[(2)] = inst_28737);

(statearr_28812_30725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (6))){
var state_28767__$1 = state_28767;
var statearr_28814_30726 = state_28767__$1;
(statearr_28814_30726[(2)] = false);

(statearr_28814_30726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (28))){
var inst_28733 = (state_28767[(2)]);
var inst_28734 = calc_state();
var inst_28685 = inst_28734;
var state_28767__$1 = (function (){var statearr_28817 = state_28767;
(statearr_28817[(15)] = inst_28733);

(statearr_28817[(7)] = inst_28685);

return statearr_28817;
})();
var statearr_28819_30727 = state_28767__$1;
(statearr_28819_30727[(2)] = null);

(statearr_28819_30727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (25))){
var inst_28760 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28820_30728 = state_28767__$1;
(statearr_28820_30728[(2)] = inst_28760);

(statearr_28820_30728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (34))){
var inst_28758 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28822_30730 = state_28767__$1;
(statearr_28822_30730[(2)] = inst_28758);

(statearr_28822_30730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (17))){
var state_28767__$1 = state_28767;
var statearr_28823_30731 = state_28767__$1;
(statearr_28823_30731[(2)] = false);

(statearr_28823_30731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (3))){
var state_28767__$1 = state_28767;
var statearr_28824_30732 = state_28767__$1;
(statearr_28824_30732[(2)] = false);

(statearr_28824_30732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (12))){
var inst_28762 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28767__$1,inst_28762);
} else {
if((state_val_28768 === (2))){
var inst_28656 = (state_28767[(8)]);
var inst_28663 = inst_28656.cljs$lang$protocol_mask$partition0$;
var inst_28664 = (inst_28663 & (64));
var inst_28665 = inst_28656.cljs$core$ISeq$;
var inst_28666 = (cljs.core.PROTOCOL_SENTINEL === inst_28665);
var inst_28667 = ((inst_28664) || (inst_28666));
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28667)){
var statearr_28828_30733 = state_28767__$1;
(statearr_28828_30733[(1)] = (5));

} else {
var statearr_28829_30734 = state_28767__$1;
(statearr_28829_30734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (23))){
var inst_28720 = (state_28767[(14)]);
var inst_28727 = (inst_28720 == null);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28727)){
var statearr_28830_30739 = state_28767__$1;
(statearr_28830_30739[(1)] = (26));

} else {
var statearr_28831_30740 = state_28767__$1;
(statearr_28831_30740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (35))){
var inst_28749 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28749)){
var statearr_28832_30744 = state_28767__$1;
(statearr_28832_30744[(1)] = (36));

} else {
var statearr_28833_30745 = state_28767__$1;
(statearr_28833_30745[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (19))){
var inst_28685 = (state_28767[(7)]);
var inst_28708 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28685);
var state_28767__$1 = state_28767;
var statearr_28834_30746 = state_28767__$1;
(statearr_28834_30746[(2)] = inst_28708);

(statearr_28834_30746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (11))){
var inst_28685 = (state_28767[(7)]);
var inst_28691 = (inst_28685 == null);
var inst_28692 = cljs.core.not(inst_28691);
var state_28767__$1 = state_28767;
if(inst_28692){
var statearr_28840_30751 = state_28767__$1;
(statearr_28840_30751[(1)] = (13));

} else {
var statearr_28848_30752 = state_28767__$1;
(statearr_28848_30752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (9))){
var inst_28656 = (state_28767[(8)]);
var state_28767__$1 = state_28767;
var statearr_28854_30756 = state_28767__$1;
(statearr_28854_30756[(2)] = inst_28656);

(statearr_28854_30756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (5))){
var state_28767__$1 = state_28767;
var statearr_28858_30757 = state_28767__$1;
(statearr_28858_30757[(2)] = true);

(statearr_28858_30757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (14))){
var state_28767__$1 = state_28767;
var statearr_28867_30758 = state_28767__$1;
(statearr_28867_30758[(2)] = false);

(statearr_28867_30758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (26))){
var inst_28722 = (state_28767[(9)]);
var inst_28730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28722);
var state_28767__$1 = state_28767;
var statearr_28874_30762 = state_28767__$1;
(statearr_28874_30762[(2)] = inst_28730);

(statearr_28874_30762[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (16))){
var state_28767__$1 = state_28767;
var statearr_28885_30764 = state_28767__$1;
(statearr_28885_30764[(2)] = true);

(statearr_28885_30764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (38))){
var inst_28754 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28898_30768 = state_28767__$1;
(statearr_28898_30768[(2)] = inst_28754);

(statearr_28898_30768[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (30))){
var inst_28713 = (state_28767[(13)]);
var inst_28722 = (state_28767[(9)]);
var inst_28712 = (state_28767[(11)]);
var inst_28740 = cljs.core.empty_QMARK_(inst_28712);
var inst_28741 = (inst_28713.cljs$core$IFn$_invoke$arity$1 ? inst_28713.cljs$core$IFn$_invoke$arity$1(inst_28722) : inst_28713.call(null,inst_28722));
var inst_28742 = cljs.core.not(inst_28741);
var inst_28743 = ((inst_28740) && (inst_28742));
var state_28767__$1 = state_28767;
var statearr_28905_30773 = state_28767__$1;
(statearr_28905_30773[(2)] = inst_28743);

(statearr_28905_30773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (10))){
var inst_28656 = (state_28767[(8)]);
var inst_28680 = (state_28767[(2)]);
var inst_28681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28680,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28680,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28680,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28685 = inst_28656;
var state_28767__$1 = (function (){var statearr_28916 = state_28767;
(statearr_28916[(16)] = inst_28681);

(statearr_28916[(7)] = inst_28685);

(statearr_28916[(17)] = inst_28682);

(statearr_28916[(18)] = inst_28683);

return statearr_28916;
})();
var statearr_28918_30782 = state_28767__$1;
(statearr_28918_30782[(2)] = null);

(statearr_28918_30782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (18))){
var inst_28703 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28923_30785 = state_28767__$1;
(statearr_28923_30785[(2)] = inst_28703);

(statearr_28923_30785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (37))){
var state_28767__$1 = state_28767;
var statearr_28927_30786 = state_28767__$1;
(statearr_28927_30786[(2)] = null);

(statearr_28927_30786[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (8))){
var inst_28656 = (state_28767[(8)]);
var inst_28677 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28656);
var state_28767__$1 = state_28767;
var statearr_28928_30788 = state_28767__$1;
(statearr_28928_30788[(2)] = inst_28677);

(statearr_28928_30788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26722__auto__,c__27023__auto___30699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26723__auto__ = null;
var cljs$core$async$mix_$_state_machine__26723__auto____0 = (function (){
var statearr_28929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28929[(0)] = cljs$core$async$mix_$_state_machine__26723__auto__);

(statearr_28929[(1)] = (1));

return statearr_28929;
});
var cljs$core$async$mix_$_state_machine__26723__auto____1 = (function (state_28767){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_28767);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e28931){if((e28931 instanceof Object)){
var ex__26726__auto__ = e28931;
var statearr_28932_30792 = state_28767;
(statearr_28932_30792[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30793 = state_28767;
state_28767 = G__30793;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26723__auto__ = function(state_28767){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26723__auto____1.call(this,state_28767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26723__auto____0;
cljs$core$async$mix_$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26723__auto____1;
return cljs$core$async$mix_$_state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27025__auto__ = (function (){var statearr_28937 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_28937[(6)] = c__27023__auto___30699);

return statearr_28937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28978 = arguments.length;
switch (G__28978) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29012 = arguments.length;
switch (G__29012) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__29007_SHARP_){
if(cljs.core.truth_((p1__29007_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29007_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29007_SHARP_.call(null,topic)))){
return p1__29007_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29007_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29021 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29022){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29022 = meta29022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29023,meta29022__$1){
var self__ = this;
var _29023__$1 = this;
return (new cljs.core.async.t_cljs$core$async29021(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29022__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29023){
var self__ = this;
var _29023__$1 = this;
return self__.meta29022;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29021.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29021.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29022","meta29022",-995939978,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29021";

cljs.core.async.t_cljs$core$async29021.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29021");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29021.
 */
cljs.core.async.__GT_t_cljs$core$async29021 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29021(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29022){
return (new cljs.core.async.t_cljs$core$async29021(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29022));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29021(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27023__auto___30816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30816,mults,ensure_mult,p){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30816,mults,ensure_mult,p){
return (function (state_29112){
var state_val_29113 = (state_29112[(1)]);
if((state_val_29113 === (7))){
var inst_29108 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29116_30817 = state_29112__$1;
(statearr_29116_30817[(2)] = inst_29108);

(statearr_29116_30817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (20))){
var state_29112__$1 = state_29112;
var statearr_29118_30818 = state_29112__$1;
(statearr_29118_30818[(2)] = null);

(statearr_29118_30818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (1))){
var state_29112__$1 = state_29112;
var statearr_29119_30820 = state_29112__$1;
(statearr_29119_30820[(2)] = null);

(statearr_29119_30820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (24))){
var inst_29091 = (state_29112[(7)]);
var inst_29100 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29091);
var state_29112__$1 = state_29112;
var statearr_29120_30821 = state_29112__$1;
(statearr_29120_30821[(2)] = inst_29100);

(statearr_29120_30821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (4))){
var inst_29043 = (state_29112[(8)]);
var inst_29043__$1 = (state_29112[(2)]);
var inst_29044 = (inst_29043__$1 == null);
var state_29112__$1 = (function (){var statearr_29121 = state_29112;
(statearr_29121[(8)] = inst_29043__$1);

return statearr_29121;
})();
if(cljs.core.truth_(inst_29044)){
var statearr_29122_30822 = state_29112__$1;
(statearr_29122_30822[(1)] = (5));

} else {
var statearr_29123_30823 = state_29112__$1;
(statearr_29123_30823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (15))){
var inst_29085 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29126_30824 = state_29112__$1;
(statearr_29126_30824[(2)] = inst_29085);

(statearr_29126_30824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (21))){
var inst_29105 = (state_29112[(2)]);
var state_29112__$1 = (function (){var statearr_29127 = state_29112;
(statearr_29127[(9)] = inst_29105);

return statearr_29127;
})();
var statearr_29128_30825 = state_29112__$1;
(statearr_29128_30825[(2)] = null);

(statearr_29128_30825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (13))){
var inst_29067 = (state_29112[(10)]);
var inst_29069 = cljs.core.chunked_seq_QMARK_(inst_29067);
var state_29112__$1 = state_29112;
if(inst_29069){
var statearr_29133_30829 = state_29112__$1;
(statearr_29133_30829[(1)] = (16));

} else {
var statearr_29135_30830 = state_29112__$1;
(statearr_29135_30830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (22))){
var inst_29097 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
if(cljs.core.truth_(inst_29097)){
var statearr_29136_30835 = state_29112__$1;
(statearr_29136_30835[(1)] = (23));

} else {
var statearr_29137_30836 = state_29112__$1;
(statearr_29137_30836[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (6))){
var inst_29043 = (state_29112[(8)]);
var inst_29091 = (state_29112[(7)]);
var inst_29093 = (state_29112[(11)]);
var inst_29091__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29043) : topic_fn.call(null,inst_29043));
var inst_29092 = cljs.core.deref(mults);
var inst_29093__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29092,inst_29091__$1);
var state_29112__$1 = (function (){var statearr_29149 = state_29112;
(statearr_29149[(7)] = inst_29091__$1);

(statearr_29149[(11)] = inst_29093__$1);

return statearr_29149;
})();
if(cljs.core.truth_(inst_29093__$1)){
var statearr_29151_30837 = state_29112__$1;
(statearr_29151_30837[(1)] = (19));

} else {
var statearr_29152_30838 = state_29112__$1;
(statearr_29152_30838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (25))){
var inst_29102 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29153_30839 = state_29112__$1;
(statearr_29153_30839[(2)] = inst_29102);

(statearr_29153_30839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (17))){
var inst_29067 = (state_29112[(10)]);
var inst_29076 = cljs.core.first(inst_29067);
var inst_29077 = cljs.core.async.muxch_STAR_(inst_29076);
var inst_29078 = cljs.core.async.close_BANG_(inst_29077);
var inst_29079 = cljs.core.next(inst_29067);
var inst_29053 = inst_29079;
var inst_29054 = null;
var inst_29055 = (0);
var inst_29056 = (0);
var state_29112__$1 = (function (){var statearr_29158 = state_29112;
(statearr_29158[(12)] = inst_29056);

(statearr_29158[(13)] = inst_29078);

(statearr_29158[(14)] = inst_29055);

(statearr_29158[(15)] = inst_29054);

(statearr_29158[(16)] = inst_29053);

return statearr_29158;
})();
var statearr_29159_30840 = state_29112__$1;
(statearr_29159_30840[(2)] = null);

(statearr_29159_30840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (3))){
var inst_29110 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29112__$1,inst_29110);
} else {
if((state_val_29113 === (12))){
var inst_29087 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29160_30841 = state_29112__$1;
(statearr_29160_30841[(2)] = inst_29087);

(statearr_29160_30841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (2))){
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29112__$1,(4),ch);
} else {
if((state_val_29113 === (23))){
var state_29112__$1 = state_29112;
var statearr_29161_30843 = state_29112__$1;
(statearr_29161_30843[(2)] = null);

(statearr_29161_30843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (19))){
var inst_29043 = (state_29112[(8)]);
var inst_29093 = (state_29112[(11)]);
var inst_29095 = cljs.core.async.muxch_STAR_(inst_29093);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29112__$1,(22),inst_29095,inst_29043);
} else {
if((state_val_29113 === (11))){
var inst_29067 = (state_29112[(10)]);
var inst_29053 = (state_29112[(16)]);
var inst_29067__$1 = cljs.core.seq(inst_29053);
var state_29112__$1 = (function (){var statearr_29162 = state_29112;
(statearr_29162[(10)] = inst_29067__$1);

return statearr_29162;
})();
if(inst_29067__$1){
var statearr_29163_30845 = state_29112__$1;
(statearr_29163_30845[(1)] = (13));

} else {
var statearr_29164_30846 = state_29112__$1;
(statearr_29164_30846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (9))){
var inst_29089 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29165_30847 = state_29112__$1;
(statearr_29165_30847[(2)] = inst_29089);

(statearr_29165_30847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (5))){
var inst_29050 = cljs.core.deref(mults);
var inst_29051 = cljs.core.vals(inst_29050);
var inst_29052 = cljs.core.seq(inst_29051);
var inst_29053 = inst_29052;
var inst_29054 = null;
var inst_29055 = (0);
var inst_29056 = (0);
var state_29112__$1 = (function (){var statearr_29166 = state_29112;
(statearr_29166[(12)] = inst_29056);

(statearr_29166[(14)] = inst_29055);

(statearr_29166[(15)] = inst_29054);

(statearr_29166[(16)] = inst_29053);

return statearr_29166;
})();
var statearr_29167_30849 = state_29112__$1;
(statearr_29167_30849[(2)] = null);

(statearr_29167_30849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (14))){
var state_29112__$1 = state_29112;
var statearr_29172_30851 = state_29112__$1;
(statearr_29172_30851[(2)] = null);

(statearr_29172_30851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (16))){
var inst_29067 = (state_29112[(10)]);
var inst_29071 = cljs.core.chunk_first(inst_29067);
var inst_29072 = cljs.core.chunk_rest(inst_29067);
var inst_29073 = cljs.core.count(inst_29071);
var inst_29053 = inst_29072;
var inst_29054 = inst_29071;
var inst_29055 = inst_29073;
var inst_29056 = (0);
var state_29112__$1 = (function (){var statearr_29173 = state_29112;
(statearr_29173[(12)] = inst_29056);

(statearr_29173[(14)] = inst_29055);

(statearr_29173[(15)] = inst_29054);

(statearr_29173[(16)] = inst_29053);

return statearr_29173;
})();
var statearr_29174_30857 = state_29112__$1;
(statearr_29174_30857[(2)] = null);

(statearr_29174_30857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (10))){
var inst_29056 = (state_29112[(12)]);
var inst_29055 = (state_29112[(14)]);
var inst_29054 = (state_29112[(15)]);
var inst_29053 = (state_29112[(16)]);
var inst_29061 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29054,inst_29056);
var inst_29062 = cljs.core.async.muxch_STAR_(inst_29061);
var inst_29063 = cljs.core.async.close_BANG_(inst_29062);
var inst_29064 = (inst_29056 + (1));
var tmp29169 = inst_29055;
var tmp29170 = inst_29054;
var tmp29171 = inst_29053;
var inst_29053__$1 = tmp29171;
var inst_29054__$1 = tmp29170;
var inst_29055__$1 = tmp29169;
var inst_29056__$1 = inst_29064;
var state_29112__$1 = (function (){var statearr_29175 = state_29112;
(statearr_29175[(12)] = inst_29056__$1);

(statearr_29175[(14)] = inst_29055__$1);

(statearr_29175[(15)] = inst_29054__$1);

(statearr_29175[(17)] = inst_29063);

(statearr_29175[(16)] = inst_29053__$1);

return statearr_29175;
})();
var statearr_29176_30858 = state_29112__$1;
(statearr_29176_30858[(2)] = null);

(statearr_29176_30858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (18))){
var inst_29082 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29177_30860 = state_29112__$1;
(statearr_29177_30860[(2)] = inst_29082);

(statearr_29177_30860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (8))){
var inst_29056 = (state_29112[(12)]);
var inst_29055 = (state_29112[(14)]);
var inst_29058 = (inst_29056 < inst_29055);
var inst_29059 = inst_29058;
var state_29112__$1 = state_29112;
if(cljs.core.truth_(inst_29059)){
var statearr_29178_30861 = state_29112__$1;
(statearr_29178_30861[(1)] = (10));

} else {
var statearr_29179_30862 = state_29112__$1;
(statearr_29179_30862[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30816,mults,ensure_mult,p))
;
return ((function (switch__26722__auto__,c__27023__auto___30816,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_29180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29180[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_29180[(1)] = (1));

return statearr_29180;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_29112){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29112);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29181){if((e29181 instanceof Object)){
var ex__26726__auto__ = e29181;
var statearr_29182_30867 = state_29112;
(statearr_29182_30867[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30868 = state_29112;
state_29112 = G__30868;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_29112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_29112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30816,mults,ensure_mult,p))
})();
var state__27025__auto__ = (function (){var statearr_29183 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29183[(6)] = c__27023__auto___30816);

return statearr_29183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30816,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29188 = arguments.length;
switch (G__29188) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29195 = arguments.length;
switch (G__29195) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29199 = arguments.length;
switch (G__29199) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__27023__auto___30873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29243){
var state_val_29244 = (state_29243[(1)]);
if((state_val_29244 === (7))){
var state_29243__$1 = state_29243;
var statearr_29245_30876 = state_29243__$1;
(statearr_29245_30876[(2)] = null);

(statearr_29245_30876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (1))){
var state_29243__$1 = state_29243;
var statearr_29246_30880 = state_29243__$1;
(statearr_29246_30880[(2)] = null);

(statearr_29246_30880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (4))){
var inst_29204 = (state_29243[(7)]);
var inst_29206 = (inst_29204 < cnt);
var state_29243__$1 = state_29243;
if(cljs.core.truth_(inst_29206)){
var statearr_29248_30883 = state_29243__$1;
(statearr_29248_30883[(1)] = (6));

} else {
var statearr_29249_30884 = state_29243__$1;
(statearr_29249_30884[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (15))){
var inst_29238 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29250_30885 = state_29243__$1;
(statearr_29250_30885[(2)] = inst_29238);

(statearr_29250_30885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (13))){
var inst_29229 = cljs.core.async.close_BANG_(out);
var state_29243__$1 = state_29243;
var statearr_29251_30886 = state_29243__$1;
(statearr_29251_30886[(2)] = inst_29229);

(statearr_29251_30886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (6))){
var state_29243__$1 = state_29243;
var statearr_29253_30887 = state_29243__$1;
(statearr_29253_30887[(2)] = null);

(statearr_29253_30887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (3))){
var inst_29240 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29243__$1,inst_29240);
} else {
if((state_val_29244 === (12))){
var inst_29226 = (state_29243[(8)]);
var inst_29226__$1 = (state_29243[(2)]);
var inst_29227 = cljs.core.some(cljs.core.nil_QMARK_,inst_29226__$1);
var state_29243__$1 = (function (){var statearr_29261 = state_29243;
(statearr_29261[(8)] = inst_29226__$1);

return statearr_29261;
})();
if(cljs.core.truth_(inst_29227)){
var statearr_29262_30888 = state_29243__$1;
(statearr_29262_30888[(1)] = (13));

} else {
var statearr_29263_30889 = state_29243__$1;
(statearr_29263_30889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (2))){
var inst_29203 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29204 = (0);
var state_29243__$1 = (function (){var statearr_29266 = state_29243;
(statearr_29266[(9)] = inst_29203);

(statearr_29266[(7)] = inst_29204);

return statearr_29266;
})();
var statearr_29268_30890 = state_29243__$1;
(statearr_29268_30890[(2)] = null);

(statearr_29268_30890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (11))){
var inst_29204 = (state_29243[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_29243,(10),Object,null,(9));
var inst_29213 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29204) : chs__$1.call(null,inst_29204));
var inst_29214 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29204) : done.call(null,inst_29204));
var inst_29215 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29213,inst_29214);
var state_29243__$1 = state_29243;
var statearr_29269_30892 = state_29243__$1;
(statearr_29269_30892[(2)] = inst_29215);


cljs.core.async.impl.ioc_helpers.process_exception(state_29243__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (9))){
var inst_29204 = (state_29243[(7)]);
var inst_29217 = (state_29243[(2)]);
var inst_29218 = (inst_29204 + (1));
var inst_29204__$1 = inst_29218;
var state_29243__$1 = (function (){var statearr_29272 = state_29243;
(statearr_29272[(10)] = inst_29217);

(statearr_29272[(7)] = inst_29204__$1);

return statearr_29272;
})();
var statearr_29273_30893 = state_29243__$1;
(statearr_29273_30893[(2)] = null);

(statearr_29273_30893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (5))){
var inst_29224 = (state_29243[(2)]);
var state_29243__$1 = (function (){var statearr_29275 = state_29243;
(statearr_29275[(11)] = inst_29224);

return statearr_29275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29243__$1,(12),dchan);
} else {
if((state_val_29244 === (14))){
var inst_29226 = (state_29243[(8)]);
var inst_29233 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29226);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29243__$1,(16),out,inst_29233);
} else {
if((state_val_29244 === (16))){
var inst_29235 = (state_29243[(2)]);
var state_29243__$1 = (function (){var statearr_29276 = state_29243;
(statearr_29276[(12)] = inst_29235);

return statearr_29276;
})();
var statearr_29277_30895 = state_29243__$1;
(statearr_29277_30895[(2)] = null);

(statearr_29277_30895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (10))){
var inst_29208 = (state_29243[(2)]);
var inst_29209 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29243__$1 = (function (){var statearr_29279 = state_29243;
(statearr_29279[(13)] = inst_29208);

return statearr_29279;
})();
var statearr_29280_30896 = state_29243__$1;
(statearr_29280_30896[(2)] = inst_29209);


cljs.core.async.impl.ioc_helpers.process_exception(state_29243__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (8))){
var inst_29222 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29282_30897 = state_29243__$1;
(statearr_29282_30897[(2)] = inst_29222);

(statearr_29282_30897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30873,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26722__auto__,c__27023__auto___30873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_29285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29285[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_29285[(1)] = (1));

return statearr_29285;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_29243){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29243);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29287){if((e29287 instanceof Object)){
var ex__26726__auto__ = e29287;
var statearr_29288_30898 = state_29243;
(statearr_29288_30898[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30899 = state_29243;
state_29243 = G__30899;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_29243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_29243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30873,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27025__auto__ = (function (){var statearr_29289 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29289[(6)] = c__27023__auto___30873);

return statearr_29289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30873,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29295 = arguments.length;
switch (G__29295) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27023__auto___30909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30909,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30909,out){
return (function (state_29331){
var state_val_29332 = (state_29331[(1)]);
if((state_val_29332 === (7))){
var inst_29311 = (state_29331[(7)]);
var inst_29310 = (state_29331[(8)]);
var inst_29310__$1 = (state_29331[(2)]);
var inst_29311__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29310__$1,(0),null);
var inst_29312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29310__$1,(1),null);
var inst_29313 = (inst_29311__$1 == null);
var state_29331__$1 = (function (){var statearr_29334 = state_29331;
(statearr_29334[(7)] = inst_29311__$1);

(statearr_29334[(8)] = inst_29310__$1);

(statearr_29334[(9)] = inst_29312);

return statearr_29334;
})();
if(cljs.core.truth_(inst_29313)){
var statearr_29335_30912 = state_29331__$1;
(statearr_29335_30912[(1)] = (8));

} else {
var statearr_29336_30913 = state_29331__$1;
(statearr_29336_30913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (1))){
var inst_29300 = cljs.core.vec(chs);
var inst_29301 = inst_29300;
var state_29331__$1 = (function (){var statearr_29339 = state_29331;
(statearr_29339[(10)] = inst_29301);

return statearr_29339;
})();
var statearr_29341_30914 = state_29331__$1;
(statearr_29341_30914[(2)] = null);

(statearr_29341_30914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (4))){
var inst_29301 = (state_29331[(10)]);
var state_29331__$1 = state_29331;
return cljs.core.async.ioc_alts_BANG_(state_29331__$1,(7),inst_29301);
} else {
if((state_val_29332 === (6))){
var inst_29327 = (state_29331[(2)]);
var state_29331__$1 = state_29331;
var statearr_29342_30915 = state_29331__$1;
(statearr_29342_30915[(2)] = inst_29327);

(statearr_29342_30915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (3))){
var inst_29329 = (state_29331[(2)]);
var state_29331__$1 = state_29331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29331__$1,inst_29329);
} else {
if((state_val_29332 === (2))){
var inst_29301 = (state_29331[(10)]);
var inst_29303 = cljs.core.count(inst_29301);
var inst_29304 = (inst_29303 > (0));
var state_29331__$1 = state_29331;
if(cljs.core.truth_(inst_29304)){
var statearr_29344_30916 = state_29331__$1;
(statearr_29344_30916[(1)] = (4));

} else {
var statearr_29345_30917 = state_29331__$1;
(statearr_29345_30917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (11))){
var inst_29301 = (state_29331[(10)]);
var inst_29320 = (state_29331[(2)]);
var tmp29343 = inst_29301;
var inst_29301__$1 = tmp29343;
var state_29331__$1 = (function (){var statearr_29350 = state_29331;
(statearr_29350[(11)] = inst_29320);

(statearr_29350[(10)] = inst_29301__$1);

return statearr_29350;
})();
var statearr_29354_30920 = state_29331__$1;
(statearr_29354_30920[(2)] = null);

(statearr_29354_30920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (9))){
var inst_29311 = (state_29331[(7)]);
var state_29331__$1 = state_29331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29331__$1,(11),out,inst_29311);
} else {
if((state_val_29332 === (5))){
var inst_29325 = cljs.core.async.close_BANG_(out);
var state_29331__$1 = state_29331;
var statearr_29379_30923 = state_29331__$1;
(statearr_29379_30923[(2)] = inst_29325);

(statearr_29379_30923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (10))){
var inst_29323 = (state_29331[(2)]);
var state_29331__$1 = state_29331;
var statearr_29384_30924 = state_29331__$1;
(statearr_29384_30924[(2)] = inst_29323);

(statearr_29384_30924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29332 === (8))){
var inst_29311 = (state_29331[(7)]);
var inst_29301 = (state_29331[(10)]);
var inst_29310 = (state_29331[(8)]);
var inst_29312 = (state_29331[(9)]);
var inst_29315 = (function (){var cs = inst_29301;
var vec__29306 = inst_29310;
var v = inst_29311;
var c = inst_29312;
return ((function (cs,vec__29306,v,c,inst_29311,inst_29301,inst_29310,inst_29312,state_val_29332,c__27023__auto___30909,out){
return (function (p1__29290_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29290_SHARP_);
});
;})(cs,vec__29306,v,c,inst_29311,inst_29301,inst_29310,inst_29312,state_val_29332,c__27023__auto___30909,out))
})();
var inst_29316 = cljs.core.filterv(inst_29315,inst_29301);
var inst_29301__$1 = inst_29316;
var state_29331__$1 = (function (){var statearr_29397 = state_29331;
(statearr_29397[(10)] = inst_29301__$1);

return statearr_29397;
})();
var statearr_29399_30925 = state_29331__$1;
(statearr_29399_30925[(2)] = null);

(statearr_29399_30925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30909,out))
;
return ((function (switch__26722__auto__,c__27023__auto___30909,out){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_29404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29404[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_29404[(1)] = (1));

return statearr_29404;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_29331){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29331);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29405){if((e29405 instanceof Object)){
var ex__26726__auto__ = e29405;
var statearr_29406_30927 = state_29331;
(statearr_29406_30927[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30928 = state_29331;
state_29331 = G__30928;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_29331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_29331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30909,out))
})();
var state__27025__auto__ = (function (){var statearr_29407 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29407[(6)] = c__27023__auto___30909);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30909,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29414 = arguments.length;
switch (G__29414) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27023__auto___30932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30932,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30932,out){
return (function (state_29438){
var state_val_29439 = (state_29438[(1)]);
if((state_val_29439 === (7))){
var inst_29420 = (state_29438[(7)]);
var inst_29420__$1 = (state_29438[(2)]);
var inst_29421 = (inst_29420__$1 == null);
var inst_29422 = cljs.core.not(inst_29421);
var state_29438__$1 = (function (){var statearr_29442 = state_29438;
(statearr_29442[(7)] = inst_29420__$1);

return statearr_29442;
})();
if(inst_29422){
var statearr_29444_30933 = state_29438__$1;
(statearr_29444_30933[(1)] = (8));

} else {
var statearr_29445_30937 = state_29438__$1;
(statearr_29445_30937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (1))){
var inst_29415 = (0);
var state_29438__$1 = (function (){var statearr_29449 = state_29438;
(statearr_29449[(8)] = inst_29415);

return statearr_29449;
})();
var statearr_29451_30938 = state_29438__$1;
(statearr_29451_30938[(2)] = null);

(statearr_29451_30938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (4))){
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29438__$1,(7),ch);
} else {
if((state_val_29439 === (6))){
var inst_29433 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
var statearr_29453_30946 = state_29438__$1;
(statearr_29453_30946[(2)] = inst_29433);

(statearr_29453_30946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (3))){
var inst_29435 = (state_29438[(2)]);
var inst_29436 = cljs.core.async.close_BANG_(out);
var state_29438__$1 = (function (){var statearr_29454 = state_29438;
(statearr_29454[(9)] = inst_29435);

return statearr_29454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29438__$1,inst_29436);
} else {
if((state_val_29439 === (2))){
var inst_29415 = (state_29438[(8)]);
var inst_29417 = (inst_29415 < n);
var state_29438__$1 = state_29438;
if(cljs.core.truth_(inst_29417)){
var statearr_29456_30947 = state_29438__$1;
(statearr_29456_30947[(1)] = (4));

} else {
var statearr_29457_30948 = state_29438__$1;
(statearr_29457_30948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (11))){
var inst_29415 = (state_29438[(8)]);
var inst_29425 = (state_29438[(2)]);
var inst_29426 = (inst_29415 + (1));
var inst_29415__$1 = inst_29426;
var state_29438__$1 = (function (){var statearr_29458 = state_29438;
(statearr_29458[(10)] = inst_29425);

(statearr_29458[(8)] = inst_29415__$1);

return statearr_29458;
})();
var statearr_29459_30952 = state_29438__$1;
(statearr_29459_30952[(2)] = null);

(statearr_29459_30952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (9))){
var state_29438__$1 = state_29438;
var statearr_29460_30953 = state_29438__$1;
(statearr_29460_30953[(2)] = null);

(statearr_29460_30953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (5))){
var state_29438__$1 = state_29438;
var statearr_29461_30954 = state_29438__$1;
(statearr_29461_30954[(2)] = null);

(statearr_29461_30954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (10))){
var inst_29430 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
var statearr_29462_30958 = state_29438__$1;
(statearr_29462_30958[(2)] = inst_29430);

(statearr_29462_30958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (8))){
var inst_29420 = (state_29438[(7)]);
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29438__$1,(11),out,inst_29420);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30932,out))
;
return ((function (switch__26722__auto__,c__27023__auto___30932,out){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_29463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29463[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_29463[(1)] = (1));

return statearr_29463;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_29438){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29438);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29467){if((e29467 instanceof Object)){
var ex__26726__auto__ = e29467;
var statearr_29468_30962 = state_29438;
(statearr_29468_30962[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30963 = state_29438;
state_29438 = G__30963;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_29438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_29438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30932,out))
})();
var state__27025__auto__ = (function (){var statearr_29469 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29469[(6)] = c__27023__auto___30932);

return statearr_29469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30932,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29472 = (function (f,ch,meta29473){
this.f = f;
this.ch = ch;
this.meta29473 = meta29473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29474,meta29473__$1){
var self__ = this;
var _29474__$1 = this;
return (new cljs.core.async.t_cljs$core$async29472(self__.f,self__.ch,meta29473__$1));
});

cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29474){
var self__ = this;
var _29474__$1 = this;
return self__.meta29473;
});

cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29479 = (function (f,ch,meta29473,_,fn1,meta29480){
this.f = f;
this.ch = ch;
this.meta29473 = meta29473;
this._ = _;
this.fn1 = fn1;
this.meta29480 = meta29480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29481,meta29480__$1){
var self__ = this;
var _29481__$1 = this;
return (new cljs.core.async.t_cljs$core$async29479(self__.f,self__.ch,self__.meta29473,self__._,self__.fn1,meta29480__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29481){
var self__ = this;
var _29481__$1 = this;
return self__.meta29480;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29471_SHARP_){
var G__29485 = (((p1__29471_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29471_SHARP_) : self__.f.call(null,p1__29471_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29485) : f1.call(null,G__29485));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29479.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29473","meta29473",1957563894,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29472","cljs.core.async/t_cljs$core$async29472",-541310575,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29480","meta29480",-183398870,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29479";

cljs.core.async.t_cljs$core$async29479.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29479");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29479.
 */
cljs.core.async.__GT_t_cljs$core$async29479 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29479(f__$1,ch__$1,meta29473__$1,___$2,fn1__$1,meta29480){
return (new cljs.core.async.t_cljs$core$async29479(f__$1,ch__$1,meta29473__$1,___$2,fn1__$1,meta29480));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29479(self__.f,self__.ch,self__.meta29473,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29493 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29493) : self__.f.call(null,G__29493));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29473","meta29473",1957563894,null)], null);
});

cljs.core.async.t_cljs$core$async29472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29472";

cljs.core.async.t_cljs$core$async29472.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29472");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29472.
 */
cljs.core.async.__GT_t_cljs$core$async29472 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29472(f__$1,ch__$1,meta29473){
return (new cljs.core.async.t_cljs$core$async29472(f__$1,ch__$1,meta29473));
});

}

return (new cljs.core.async.t_cljs$core$async29472(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29500 = (function (f,ch,meta29501){
this.f = f;
this.ch = ch;
this.meta29501 = meta29501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29502,meta29501__$1){
var self__ = this;
var _29502__$1 = this;
return (new cljs.core.async.t_cljs$core$async29500(self__.f,self__.ch,meta29501__$1));
});

cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29502){
var self__ = this;
var _29502__$1 = this;
return self__.meta29501;
});

cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async29500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29501","meta29501",2022317005,null)], null);
});

cljs.core.async.t_cljs$core$async29500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29500";

cljs.core.async.t_cljs$core$async29500.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29500");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29500.
 */
cljs.core.async.__GT_t_cljs$core$async29500 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29500(f__$1,ch__$1,meta29501){
return (new cljs.core.async.t_cljs$core$async29500(f__$1,ch__$1,meta29501));
});

}

return (new cljs.core.async.t_cljs$core$async29500(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29530 = (function (p,ch,meta29531){
this.p = p;
this.ch = ch;
this.meta29531 = meta29531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29532,meta29531__$1){
var self__ = this;
var _29532__$1 = this;
return (new cljs.core.async.t_cljs$core$async29530(self__.p,self__.ch,meta29531__$1));
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29532){
var self__ = this;
var _29532__$1 = this;
return self__.meta29531;
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29531","meta29531",645449630,null)], null);
});

cljs.core.async.t_cljs$core$async29530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29530";

cljs.core.async.t_cljs$core$async29530.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29530");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29530.
 */
cljs.core.async.__GT_t_cljs$core$async29530 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29530(p__$1,ch__$1,meta29531){
return (new cljs.core.async.t_cljs$core$async29530(p__$1,ch__$1,meta29531));
});

}

return (new cljs.core.async.t_cljs$core$async29530(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29563 = arguments.length;
switch (G__29563) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27023__auto___30993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___30993,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___30993,out){
return (function (state_29589){
var state_val_29590 = (state_29589[(1)]);
if((state_val_29590 === (7))){
var inst_29585 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29591_30994 = state_29589__$1;
(statearr_29591_30994[(2)] = inst_29585);

(statearr_29591_30994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (1))){
var state_29589__$1 = state_29589;
var statearr_29592_30995 = state_29589__$1;
(statearr_29592_30995[(2)] = null);

(statearr_29592_30995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (4))){
var inst_29571 = (state_29589[(7)]);
var inst_29571__$1 = (state_29589[(2)]);
var inst_29572 = (inst_29571__$1 == null);
var state_29589__$1 = (function (){var statearr_29595 = state_29589;
(statearr_29595[(7)] = inst_29571__$1);

return statearr_29595;
})();
if(cljs.core.truth_(inst_29572)){
var statearr_29596_30996 = state_29589__$1;
(statearr_29596_30996[(1)] = (5));

} else {
var statearr_29597_30997 = state_29589__$1;
(statearr_29597_30997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (6))){
var inst_29571 = (state_29589[(7)]);
var inst_29576 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29571) : p.call(null,inst_29571));
var state_29589__$1 = state_29589;
if(cljs.core.truth_(inst_29576)){
var statearr_29598_31004 = state_29589__$1;
(statearr_29598_31004[(1)] = (8));

} else {
var statearr_29599_31005 = state_29589__$1;
(statearr_29599_31005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (3))){
var inst_29587 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29589__$1,inst_29587);
} else {
if((state_val_29590 === (2))){
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29589__$1,(4),ch);
} else {
if((state_val_29590 === (11))){
var inst_29579 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29600_31006 = state_29589__$1;
(statearr_29600_31006[(2)] = inst_29579);

(statearr_29600_31006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (9))){
var state_29589__$1 = state_29589;
var statearr_29601_31007 = state_29589__$1;
(statearr_29601_31007[(2)] = null);

(statearr_29601_31007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (5))){
var inst_29574 = cljs.core.async.close_BANG_(out);
var state_29589__$1 = state_29589;
var statearr_29602_31008 = state_29589__$1;
(statearr_29602_31008[(2)] = inst_29574);

(statearr_29602_31008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (10))){
var inst_29582 = (state_29589[(2)]);
var state_29589__$1 = (function (){var statearr_29603 = state_29589;
(statearr_29603[(8)] = inst_29582);

return statearr_29603;
})();
var statearr_29604_31009 = state_29589__$1;
(statearr_29604_31009[(2)] = null);

(statearr_29604_31009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (8))){
var inst_29571 = (state_29589[(7)]);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29589__$1,(11),out,inst_29571);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___30993,out))
;
return ((function (switch__26722__auto__,c__27023__auto___30993,out){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_29606 = [null,null,null,null,null,null,null,null,null];
(statearr_29606[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_29606[(1)] = (1));

return statearr_29606;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_29589){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29589);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29607){if((e29607 instanceof Object)){
var ex__26726__auto__ = e29607;
var statearr_29608_31010 = state_29589;
(statearr_29608_31010[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31014 = state_29589;
state_29589 = G__31014;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_29589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_29589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___30993,out))
})();
var state__27025__auto__ = (function (){var statearr_29609 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29609[(6)] = c__27023__auto___30993);

return statearr_29609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___30993,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29611 = arguments.length;
switch (G__29611) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27023__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto__){
return (function (state_29674){
var state_val_29675 = (state_29674[(1)]);
if((state_val_29675 === (7))){
var inst_29670 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29676_31019 = state_29674__$1;
(statearr_29676_31019[(2)] = inst_29670);

(statearr_29676_31019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (20))){
var inst_29640 = (state_29674[(7)]);
var inst_29651 = (state_29674[(2)]);
var inst_29652 = cljs.core.next(inst_29640);
var inst_29626 = inst_29652;
var inst_29627 = null;
var inst_29628 = (0);
var inst_29629 = (0);
var state_29674__$1 = (function (){var statearr_29677 = state_29674;
(statearr_29677[(8)] = inst_29627);

(statearr_29677[(9)] = inst_29629);

(statearr_29677[(10)] = inst_29651);

(statearr_29677[(11)] = inst_29628);

(statearr_29677[(12)] = inst_29626);

return statearr_29677;
})();
var statearr_29678_31022 = state_29674__$1;
(statearr_29678_31022[(2)] = null);

(statearr_29678_31022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (1))){
var state_29674__$1 = state_29674;
var statearr_29679_31023 = state_29674__$1;
(statearr_29679_31023[(2)] = null);

(statearr_29679_31023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (4))){
var inst_29615 = (state_29674[(13)]);
var inst_29615__$1 = (state_29674[(2)]);
var inst_29616 = (inst_29615__$1 == null);
var state_29674__$1 = (function (){var statearr_29680 = state_29674;
(statearr_29680[(13)] = inst_29615__$1);

return statearr_29680;
})();
if(cljs.core.truth_(inst_29616)){
var statearr_29681_31024 = state_29674__$1;
(statearr_29681_31024[(1)] = (5));

} else {
var statearr_29682_31025 = state_29674__$1;
(statearr_29682_31025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (15))){
var state_29674__$1 = state_29674;
var statearr_29686_31026 = state_29674__$1;
(statearr_29686_31026[(2)] = null);

(statearr_29686_31026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (21))){
var state_29674__$1 = state_29674;
var statearr_29687_31027 = state_29674__$1;
(statearr_29687_31027[(2)] = null);

(statearr_29687_31027[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (13))){
var inst_29627 = (state_29674[(8)]);
var inst_29629 = (state_29674[(9)]);
var inst_29628 = (state_29674[(11)]);
var inst_29626 = (state_29674[(12)]);
var inst_29636 = (state_29674[(2)]);
var inst_29637 = (inst_29629 + (1));
var tmp29683 = inst_29627;
var tmp29684 = inst_29628;
var tmp29685 = inst_29626;
var inst_29626__$1 = tmp29685;
var inst_29627__$1 = tmp29683;
var inst_29628__$1 = tmp29684;
var inst_29629__$1 = inst_29637;
var state_29674__$1 = (function (){var statearr_29688 = state_29674;
(statearr_29688[(8)] = inst_29627__$1);

(statearr_29688[(14)] = inst_29636);

(statearr_29688[(9)] = inst_29629__$1);

(statearr_29688[(11)] = inst_29628__$1);

(statearr_29688[(12)] = inst_29626__$1);

return statearr_29688;
})();
var statearr_29689_31030 = state_29674__$1;
(statearr_29689_31030[(2)] = null);

(statearr_29689_31030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (22))){
var state_29674__$1 = state_29674;
var statearr_29690_31031 = state_29674__$1;
(statearr_29690_31031[(2)] = null);

(statearr_29690_31031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (6))){
var inst_29615 = (state_29674[(13)]);
var inst_29624 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29615) : f.call(null,inst_29615));
var inst_29625 = cljs.core.seq(inst_29624);
var inst_29626 = inst_29625;
var inst_29627 = null;
var inst_29628 = (0);
var inst_29629 = (0);
var state_29674__$1 = (function (){var statearr_29691 = state_29674;
(statearr_29691[(8)] = inst_29627);

(statearr_29691[(9)] = inst_29629);

(statearr_29691[(11)] = inst_29628);

(statearr_29691[(12)] = inst_29626);

return statearr_29691;
})();
var statearr_29697_31032 = state_29674__$1;
(statearr_29697_31032[(2)] = null);

(statearr_29697_31032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (17))){
var inst_29640 = (state_29674[(7)]);
var inst_29644 = cljs.core.chunk_first(inst_29640);
var inst_29645 = cljs.core.chunk_rest(inst_29640);
var inst_29646 = cljs.core.count(inst_29644);
var inst_29626 = inst_29645;
var inst_29627 = inst_29644;
var inst_29628 = inst_29646;
var inst_29629 = (0);
var state_29674__$1 = (function (){var statearr_29698 = state_29674;
(statearr_29698[(8)] = inst_29627);

(statearr_29698[(9)] = inst_29629);

(statearr_29698[(11)] = inst_29628);

(statearr_29698[(12)] = inst_29626);

return statearr_29698;
})();
var statearr_29699_31036 = state_29674__$1;
(statearr_29699_31036[(2)] = null);

(statearr_29699_31036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (3))){
var inst_29672 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29674__$1,inst_29672);
} else {
if((state_val_29675 === (12))){
var inst_29660 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29700_31043 = state_29674__$1;
(statearr_29700_31043[(2)] = inst_29660);

(statearr_29700_31043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (2))){
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29674__$1,(4),in$);
} else {
if((state_val_29675 === (23))){
var inst_29668 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29701_31044 = state_29674__$1;
(statearr_29701_31044[(2)] = inst_29668);

(statearr_29701_31044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (19))){
var inst_29655 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29706_31046 = state_29674__$1;
(statearr_29706_31046[(2)] = inst_29655);

(statearr_29706_31046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (11))){
var inst_29640 = (state_29674[(7)]);
var inst_29626 = (state_29674[(12)]);
var inst_29640__$1 = cljs.core.seq(inst_29626);
var state_29674__$1 = (function (){var statearr_29711 = state_29674;
(statearr_29711[(7)] = inst_29640__$1);

return statearr_29711;
})();
if(inst_29640__$1){
var statearr_29712_31048 = state_29674__$1;
(statearr_29712_31048[(1)] = (14));

} else {
var statearr_29733_31050 = state_29674__$1;
(statearr_29733_31050[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (9))){
var inst_29662 = (state_29674[(2)]);
var inst_29663 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29674__$1 = (function (){var statearr_29734 = state_29674;
(statearr_29734[(15)] = inst_29662);

return statearr_29734;
})();
if(cljs.core.truth_(inst_29663)){
var statearr_29735_31052 = state_29674__$1;
(statearr_29735_31052[(1)] = (21));

} else {
var statearr_29736_31053 = state_29674__$1;
(statearr_29736_31053[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (5))){
var inst_29618 = cljs.core.async.close_BANG_(out);
var state_29674__$1 = state_29674;
var statearr_29737_31055 = state_29674__$1;
(statearr_29737_31055[(2)] = inst_29618);

(statearr_29737_31055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (14))){
var inst_29640 = (state_29674[(7)]);
var inst_29642 = cljs.core.chunked_seq_QMARK_(inst_29640);
var state_29674__$1 = state_29674;
if(inst_29642){
var statearr_29738_31056 = state_29674__$1;
(statearr_29738_31056[(1)] = (17));

} else {
var statearr_29739_31057 = state_29674__$1;
(statearr_29739_31057[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (16))){
var inst_29658 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29740_31058 = state_29674__$1;
(statearr_29740_31058[(2)] = inst_29658);

(statearr_29740_31058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (10))){
var inst_29627 = (state_29674[(8)]);
var inst_29629 = (state_29674[(9)]);
var inst_29634 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29627,inst_29629);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29674__$1,(13),out,inst_29634);
} else {
if((state_val_29675 === (18))){
var inst_29640 = (state_29674[(7)]);
var inst_29649 = cljs.core.first(inst_29640);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29674__$1,(20),out,inst_29649);
} else {
if((state_val_29675 === (8))){
var inst_29629 = (state_29674[(9)]);
var inst_29628 = (state_29674[(11)]);
var inst_29631 = (inst_29629 < inst_29628);
var inst_29632 = inst_29631;
var state_29674__$1 = state_29674;
if(cljs.core.truth_(inst_29632)){
var statearr_29741_31059 = state_29674__$1;
(statearr_29741_31059[(1)] = (10));

} else {
var statearr_29742_31060 = state_29674__$1;
(statearr_29742_31060[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto__))
;
return ((function (switch__26722__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26723__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26723__auto____0 = (function (){
var statearr_29748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29748[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26723__auto__);

(statearr_29748[(1)] = (1));

return statearr_29748;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26723__auto____1 = (function (state_29674){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29674);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29749){if((e29749 instanceof Object)){
var ex__26726__auto__ = e29749;
var statearr_29750_31061 = state_29674;
(statearr_29750_31061[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31062 = state_29674;
state_29674 = G__31062;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26723__auto__ = function(state_29674){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26723__auto____1.call(this,state_29674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26723__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26723__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_29751 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29751[(6)] = c__27023__auto__);

return statearr_29751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29754 = arguments.length;
switch (G__29754) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29756 = arguments.length;
switch (G__29756) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29758 = arguments.length;
switch (G__29758) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27023__auto___31066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___31066,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___31066,out){
return (function (state_29782){
var state_val_29783 = (state_29782[(1)]);
if((state_val_29783 === (7))){
var inst_29777 = (state_29782[(2)]);
var state_29782__$1 = state_29782;
var statearr_29784_31068 = state_29782__$1;
(statearr_29784_31068[(2)] = inst_29777);

(statearr_29784_31068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29783 === (1))){
var inst_29759 = null;
var state_29782__$1 = (function (){var statearr_29785 = state_29782;
(statearr_29785[(7)] = inst_29759);

return statearr_29785;
})();
var statearr_29786_31070 = state_29782__$1;
(statearr_29786_31070[(2)] = null);

(statearr_29786_31070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29783 === (4))){
var inst_29762 = (state_29782[(8)]);
var inst_29762__$1 = (state_29782[(2)]);
var inst_29763 = (inst_29762__$1 == null);
var inst_29764 = cljs.core.not(inst_29763);
var state_29782__$1 = (function (){var statearr_29787 = state_29782;
(statearr_29787[(8)] = inst_29762__$1);

return statearr_29787;
})();
if(inst_29764){
var statearr_29788_31072 = state_29782__$1;
(statearr_29788_31072[(1)] = (5));

} else {
var statearr_29789_31073 = state_29782__$1;
(statearr_29789_31073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29783 === (6))){
var state_29782__$1 = state_29782;
var statearr_29790_31074 = state_29782__$1;
(statearr_29790_31074[(2)] = null);

(statearr_29790_31074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29783 === (3))){
var inst_29779 = (state_29782[(2)]);
var inst_29780 = cljs.core.async.close_BANG_(out);
var state_29782__$1 = (function (){var statearr_29791 = state_29782;
(statearr_29791[(9)] = inst_29779);

return statearr_29791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29782__$1,inst_29780);
} else {
if((state_val_29783 === (2))){
var state_29782__$1 = state_29782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29782__$1,(4),ch);
} else {
if((state_val_29783 === (11))){
var inst_29762 = (state_29782[(8)]);
var inst_29771 = (state_29782[(2)]);
var inst_29759 = inst_29762;
var state_29782__$1 = (function (){var statearr_29792 = state_29782;
(statearr_29792[(10)] = inst_29771);

(statearr_29792[(7)] = inst_29759);

return statearr_29792;
})();
var statearr_29793_31076 = state_29782__$1;
(statearr_29793_31076[(2)] = null);

(statearr_29793_31076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29783 === (9))){
var inst_29762 = (state_29782[(8)]);
var state_29782__$1 = state_29782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29782__$1,(11),out,inst_29762);
} else {
if((state_val_29783 === (5))){
var inst_29759 = (state_29782[(7)]);
var inst_29762 = (state_29782[(8)]);
var inst_29766 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29762,inst_29759);
var state_29782__$1 = state_29782;
if(inst_29766){
var statearr_29798_31078 = state_29782__$1;
(statearr_29798_31078[(1)] = (8));

} else {
var statearr_29799_31079 = state_29782__$1;
(statearr_29799_31079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29783 === (10))){
var inst_29774 = (state_29782[(2)]);
var state_29782__$1 = state_29782;
var statearr_29800_31080 = state_29782__$1;
(statearr_29800_31080[(2)] = inst_29774);

(statearr_29800_31080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29783 === (8))){
var inst_29759 = (state_29782[(7)]);
var tmp29797 = inst_29759;
var inst_29759__$1 = tmp29797;
var state_29782__$1 = (function (){var statearr_29801 = state_29782;
(statearr_29801[(7)] = inst_29759__$1);

return statearr_29801;
})();
var statearr_29802_31081 = state_29782__$1;
(statearr_29802_31081[(2)] = null);

(statearr_29802_31081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___31066,out))
;
return ((function (switch__26722__auto__,c__27023__auto___31066,out){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_29805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29805[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_29805[(1)] = (1));

return statearr_29805;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_29782){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29782);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29806){if((e29806 instanceof Object)){
var ex__26726__auto__ = e29806;
var statearr_29807_31083 = state_29782;
(statearr_29807_31083[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31084 = state_29782;
state_29782 = G__31084;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_29782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_29782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___31066,out))
})();
var state__27025__auto__ = (function (){var statearr_29808 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29808[(6)] = c__27023__auto___31066);

return statearr_29808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___31066,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29813 = arguments.length;
switch (G__29813) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27023__auto___31086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___31086,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___31086,out){
return (function (state_29853){
var state_val_29854 = (state_29853[(1)]);
if((state_val_29854 === (7))){
var inst_29849 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29855_31088 = state_29853__$1;
(statearr_29855_31088[(2)] = inst_29849);

(statearr_29855_31088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (1))){
var inst_29814 = (new Array(n));
var inst_29815 = inst_29814;
var inst_29816 = (0);
var state_29853__$1 = (function (){var statearr_29856 = state_29853;
(statearr_29856[(7)] = inst_29816);

(statearr_29856[(8)] = inst_29815);

return statearr_29856;
})();
var statearr_29857_31098 = state_29853__$1;
(statearr_29857_31098[(2)] = null);

(statearr_29857_31098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (4))){
var inst_29819 = (state_29853[(9)]);
var inst_29819__$1 = (state_29853[(2)]);
var inst_29820 = (inst_29819__$1 == null);
var inst_29821 = cljs.core.not(inst_29820);
var state_29853__$1 = (function (){var statearr_29861 = state_29853;
(statearr_29861[(9)] = inst_29819__$1);

return statearr_29861;
})();
if(inst_29821){
var statearr_29862_31104 = state_29853__$1;
(statearr_29862_31104[(1)] = (5));

} else {
var statearr_29863_31105 = state_29853__$1;
(statearr_29863_31105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (15))){
var inst_29843 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29864_31109 = state_29853__$1;
(statearr_29864_31109[(2)] = inst_29843);

(statearr_29864_31109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (13))){
var state_29853__$1 = state_29853;
var statearr_29865_31114 = state_29853__$1;
(statearr_29865_31114[(2)] = null);

(statearr_29865_31114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (6))){
var inst_29816 = (state_29853[(7)]);
var inst_29839 = (inst_29816 > (0));
var state_29853__$1 = state_29853;
if(cljs.core.truth_(inst_29839)){
var statearr_29866_31116 = state_29853__$1;
(statearr_29866_31116[(1)] = (12));

} else {
var statearr_29867_31117 = state_29853__$1;
(statearr_29867_31117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (3))){
var inst_29851 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29853__$1,inst_29851);
} else {
if((state_val_29854 === (12))){
var inst_29815 = (state_29853[(8)]);
var inst_29841 = cljs.core.vec(inst_29815);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29853__$1,(15),out,inst_29841);
} else {
if((state_val_29854 === (2))){
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29853__$1,(4),ch);
} else {
if((state_val_29854 === (11))){
var inst_29833 = (state_29853[(2)]);
var inst_29834 = (new Array(n));
var inst_29815 = inst_29834;
var inst_29816 = (0);
var state_29853__$1 = (function (){var statearr_29868 = state_29853;
(statearr_29868[(7)] = inst_29816);

(statearr_29868[(10)] = inst_29833);

(statearr_29868[(8)] = inst_29815);

return statearr_29868;
})();
var statearr_29869_31118 = state_29853__$1;
(statearr_29869_31118[(2)] = null);

(statearr_29869_31118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (9))){
var inst_29815 = (state_29853[(8)]);
var inst_29831 = cljs.core.vec(inst_29815);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29853__$1,(11),out,inst_29831);
} else {
if((state_val_29854 === (5))){
var inst_29816 = (state_29853[(7)]);
var inst_29815 = (state_29853[(8)]);
var inst_29824 = (state_29853[(11)]);
var inst_29819 = (state_29853[(9)]);
var inst_29823 = (inst_29815[inst_29816] = inst_29819);
var inst_29824__$1 = (inst_29816 + (1));
var inst_29825 = (inst_29824__$1 < n);
var state_29853__$1 = (function (){var statearr_29870 = state_29853;
(statearr_29870[(12)] = inst_29823);

(statearr_29870[(11)] = inst_29824__$1);

return statearr_29870;
})();
if(cljs.core.truth_(inst_29825)){
var statearr_29871_31125 = state_29853__$1;
(statearr_29871_31125[(1)] = (8));

} else {
var statearr_29872_31126 = state_29853__$1;
(statearr_29872_31126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (14))){
var inst_29846 = (state_29853[(2)]);
var inst_29847 = cljs.core.async.close_BANG_(out);
var state_29853__$1 = (function (){var statearr_29874 = state_29853;
(statearr_29874[(13)] = inst_29846);

return statearr_29874;
})();
var statearr_29875_31131 = state_29853__$1;
(statearr_29875_31131[(2)] = inst_29847);

(statearr_29875_31131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (10))){
var inst_29837 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29880_31132 = state_29853__$1;
(statearr_29880_31132[(2)] = inst_29837);

(statearr_29880_31132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (8))){
var inst_29815 = (state_29853[(8)]);
var inst_29824 = (state_29853[(11)]);
var tmp29873 = inst_29815;
var inst_29815__$1 = tmp29873;
var inst_29816 = inst_29824;
var state_29853__$1 = (function (){var statearr_29881 = state_29853;
(statearr_29881[(7)] = inst_29816);

(statearr_29881[(8)] = inst_29815__$1);

return statearr_29881;
})();
var statearr_29882_31138 = state_29853__$1;
(statearr_29882_31138[(2)] = null);

(statearr_29882_31138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___31086,out))
;
return ((function (switch__26722__auto__,c__27023__auto___31086,out){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_29883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29883[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_29883[(1)] = (1));

return statearr_29883;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_29853){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29853);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29884){if((e29884 instanceof Object)){
var ex__26726__auto__ = e29884;
var statearr_29889_31151 = state_29853;
(statearr_29889_31151[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31152 = state_29853;
state_29853 = G__31152;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_29853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_29853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___31086,out))
})();
var state__27025__auto__ = (function (){var statearr_29890 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29890[(6)] = c__27023__auto___31086);

return statearr_29890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___31086,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29892 = arguments.length;
switch (G__29892) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27023__auto___31164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27023__auto___31164,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26722__auto__ = ((function (c__27023__auto___31164,out){
return (function (state_29934){
var state_val_29935 = (state_29934[(1)]);
if((state_val_29935 === (7))){
var inst_29930 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29936_31166 = state_29934__$1;
(statearr_29936_31166[(2)] = inst_29930);

(statearr_29936_31166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (1))){
var inst_29893 = [];
var inst_29894 = inst_29893;
var inst_29895 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29934__$1 = (function (){var statearr_29937 = state_29934;
(statearr_29937[(7)] = inst_29895);

(statearr_29937[(8)] = inst_29894);

return statearr_29937;
})();
var statearr_29938_31168 = state_29934__$1;
(statearr_29938_31168[(2)] = null);

(statearr_29938_31168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (4))){
var inst_29898 = (state_29934[(9)]);
var inst_29898__$1 = (state_29934[(2)]);
var inst_29899 = (inst_29898__$1 == null);
var inst_29900 = cljs.core.not(inst_29899);
var state_29934__$1 = (function (){var statearr_29939 = state_29934;
(statearr_29939[(9)] = inst_29898__$1);

return statearr_29939;
})();
if(inst_29900){
var statearr_29940_31171 = state_29934__$1;
(statearr_29940_31171[(1)] = (5));

} else {
var statearr_29941_31172 = state_29934__$1;
(statearr_29941_31172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (15))){
var inst_29924 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29942_31173 = state_29934__$1;
(statearr_29942_31173[(2)] = inst_29924);

(statearr_29942_31173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (13))){
var state_29934__$1 = state_29934;
var statearr_29943_31174 = state_29934__$1;
(statearr_29943_31174[(2)] = null);

(statearr_29943_31174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (6))){
var inst_29894 = (state_29934[(8)]);
var inst_29919 = inst_29894.length;
var inst_29920 = (inst_29919 > (0));
var state_29934__$1 = state_29934;
if(cljs.core.truth_(inst_29920)){
var statearr_29944_31175 = state_29934__$1;
(statearr_29944_31175[(1)] = (12));

} else {
var statearr_29945_31176 = state_29934__$1;
(statearr_29945_31176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (3))){
var inst_29932 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29934__$1,inst_29932);
} else {
if((state_val_29935 === (12))){
var inst_29894 = (state_29934[(8)]);
var inst_29922 = cljs.core.vec(inst_29894);
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29934__$1,(15),out,inst_29922);
} else {
if((state_val_29935 === (2))){
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29934__$1,(4),ch);
} else {
if((state_val_29935 === (11))){
var inst_29902 = (state_29934[(10)]);
var inst_29898 = (state_29934[(9)]);
var inst_29912 = (state_29934[(2)]);
var inst_29913 = [];
var inst_29914 = inst_29913.push(inst_29898);
var inst_29894 = inst_29913;
var inst_29895 = inst_29902;
var state_29934__$1 = (function (){var statearr_29946 = state_29934;
(statearr_29946[(11)] = inst_29912);

(statearr_29946[(12)] = inst_29914);

(statearr_29946[(7)] = inst_29895);

(statearr_29946[(8)] = inst_29894);

return statearr_29946;
})();
var statearr_29947_31178 = state_29934__$1;
(statearr_29947_31178[(2)] = null);

(statearr_29947_31178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (9))){
var inst_29894 = (state_29934[(8)]);
var inst_29910 = cljs.core.vec(inst_29894);
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29934__$1,(11),out,inst_29910);
} else {
if((state_val_29935 === (5))){
var inst_29902 = (state_29934[(10)]);
var inst_29895 = (state_29934[(7)]);
var inst_29898 = (state_29934[(9)]);
var inst_29902__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29898) : f.call(null,inst_29898));
var inst_29903 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29902__$1,inst_29895);
var inst_29904 = cljs.core.keyword_identical_QMARK_(inst_29895,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29905 = ((inst_29903) || (inst_29904));
var state_29934__$1 = (function (){var statearr_29948 = state_29934;
(statearr_29948[(10)] = inst_29902__$1);

return statearr_29948;
})();
if(cljs.core.truth_(inst_29905)){
var statearr_29949_31183 = state_29934__$1;
(statearr_29949_31183[(1)] = (8));

} else {
var statearr_29950_31184 = state_29934__$1;
(statearr_29950_31184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (14))){
var inst_29927 = (state_29934[(2)]);
var inst_29928 = cljs.core.async.close_BANG_(out);
var state_29934__$1 = (function (){var statearr_29952 = state_29934;
(statearr_29952[(13)] = inst_29927);

return statearr_29952;
})();
var statearr_29953_31186 = state_29934__$1;
(statearr_29953_31186[(2)] = inst_29928);

(statearr_29953_31186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (10))){
var inst_29917 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29954_31188 = state_29934__$1;
(statearr_29954_31188[(2)] = inst_29917);

(statearr_29954_31188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (8))){
var inst_29902 = (state_29934[(10)]);
var inst_29894 = (state_29934[(8)]);
var inst_29898 = (state_29934[(9)]);
var inst_29907 = inst_29894.push(inst_29898);
var tmp29951 = inst_29894;
var inst_29894__$1 = tmp29951;
var inst_29895 = inst_29902;
var state_29934__$1 = (function (){var statearr_29955 = state_29934;
(statearr_29955[(14)] = inst_29907);

(statearr_29955[(7)] = inst_29895);

(statearr_29955[(8)] = inst_29894__$1);

return statearr_29955;
})();
var statearr_29956_31190 = state_29934__$1;
(statearr_29956_31190[(2)] = null);

(statearr_29956_31190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27023__auto___31164,out))
;
return ((function (switch__26722__auto__,c__27023__auto___31164,out){
return (function() {
var cljs$core$async$state_machine__26723__auto__ = null;
var cljs$core$async$state_machine__26723__auto____0 = (function (){
var statearr_29957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29957[(0)] = cljs$core$async$state_machine__26723__auto__);

(statearr_29957[(1)] = (1));

return statearr_29957;
});
var cljs$core$async$state_machine__26723__auto____1 = (function (state_29934){
while(true){
var ret_value__26724__auto__ = (function (){try{while(true){
var result__26725__auto__ = switch__26722__auto__(state_29934);
if(cljs.core.keyword_identical_QMARK_(result__26725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26725__auto__;
}
break;
}
}catch (e29958){if((e29958 instanceof Object)){
var ex__26726__auto__ = e29958;
var statearr_29959_31191 = state_29934;
(statearr_29959_31191[(5)] = ex__26726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29958;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31192 = state_29934;
state_29934 = G__31192;
continue;
} else {
return ret_value__26724__auto__;
}
break;
}
});
cljs$core$async$state_machine__26723__auto__ = function(state_29934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26723__auto____1.call(this,state_29934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26723__auto____0;
cljs$core$async$state_machine__26723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26723__auto____1;
return cljs$core$async$state_machine__26723__auto__;
})()
;})(switch__26722__auto__,c__27023__auto___31164,out))
})();
var state__27025__auto__ = (function (){var statearr_29960 = (f__27024__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27024__auto__.cljs$core$IFn$_invoke$arity$0() : f__27024__auto__.call(null));
(statearr_29960[(6)] = c__27023__auto___31164);

return statearr_29960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27025__auto__);
});})(c__27023__auto___31164,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
