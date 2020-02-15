goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24470 = arguments.length;
switch (G__24470) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24471 = (function (f,blockable,meta24472){
this.f = f;
this.blockable = blockable;
this.meta24472 = meta24472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24473,meta24472__$1){
var self__ = this;
var _24473__$1 = this;
return (new cljs.core.async.t_cljs$core$async24471(self__.f,self__.blockable,meta24472__$1));
});

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24473){
var self__ = this;
var _24473__$1 = this;
return self__.meta24472;
});

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24472","meta24472",-1619784605,null)], null);
});

cljs.core.async.t_cljs$core$async24471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24471";

cljs.core.async.t_cljs$core$async24471.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async24471");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24471.
 */
cljs.core.async.__GT_t_cljs$core$async24471 = (function cljs$core$async$__GT_t_cljs$core$async24471(f__$1,blockable__$1,meta24472){
return (new cljs.core.async.t_cljs$core$async24471(f__$1,blockable__$1,meta24472));
});

}

return (new cljs.core.async.t_cljs$core$async24471(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24507 = arguments.length;
switch (G__24507) {
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
var G__24529 = arguments.length;
switch (G__24529) {
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
var G__24540 = arguments.length;
switch (G__24540) {
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
var val_26815 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26815) : fn1.call(null,val_26815));
} else {
cljs.core.async.impl.dispatch.run(((function (val_26815,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26815) : fn1.call(null,val_26815));
});})(val_26815,ret))
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
var G__24562 = arguments.length;
switch (G__24562) {
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
var n__4607__auto___26823 = n;
var x_26824 = (0);
while(true){
if((x_26824 < n__4607__auto___26823)){
(a[x_26824] = (0));

var G__26825 = (x_26824 + (1));
x_26824 = G__26825;
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

var G__26826 = (i + (1));
i = G__26826;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24567 = (function (flag,meta24568){
this.flag = flag;
this.meta24568 = meta24568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24569,meta24568__$1){
var self__ = this;
var _24569__$1 = this;
return (new cljs.core.async.t_cljs$core$async24567(self__.flag,meta24568__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24569){
var self__ = this;
var _24569__$1 = this;
return self__.meta24568;
});})(flag))
;

cljs.core.async.t_cljs$core$async24567.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24567.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24567.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24568","meta24568",-588848052,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24567";

cljs.core.async.t_cljs$core$async24567.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async24567");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24567.
 */
cljs.core.async.__GT_t_cljs$core$async24567 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24567(flag__$1,meta24568){
return (new cljs.core.async.t_cljs$core$async24567(flag__$1,meta24568));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24567(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24577 = (function (flag,cb,meta24578){
this.flag = flag;
this.cb = cb;
this.meta24578 = meta24578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24579,meta24578__$1){
var self__ = this;
var _24579__$1 = this;
return (new cljs.core.async.t_cljs$core$async24577(self__.flag,self__.cb,meta24578__$1));
});

cljs.core.async.t_cljs$core$async24577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24579){
var self__ = this;
var _24579__$1 = this;
return self__.meta24578;
});

cljs.core.async.t_cljs$core$async24577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async24577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24578","meta24578",-197252893,null)], null);
});

cljs.core.async.t_cljs$core$async24577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24577";

cljs.core.async.t_cljs$core$async24577.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async24577");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24577.
 */
cljs.core.async.__GT_t_cljs$core$async24577 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24577(flag__$1,cb__$1,meta24578){
return (new cljs.core.async.t_cljs$core$async24577(flag__$1,cb__$1,meta24578));
});

}

return (new cljs.core.async.t_cljs$core$async24577(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24619_SHARP_){
var G__24637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24619_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24637) : fret.call(null,G__24637));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24623_SHARP_){
var G__24638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24623_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24638) : fret.call(null,G__24638));
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
var G__26848 = (i + (1));
i = G__26848;
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
var len__4730__auto___26854 = arguments.length;
var i__4731__auto___26856 = (0);
while(true){
if((i__4731__auto___26856 < len__4730__auto___26854)){
args__4736__auto__.push((arguments[i__4731__auto___26856]));

var G__26857 = (i__4731__auto___26856 + (1));
i__4731__auto___26856 = G__26857;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24658){
var map__24659 = p__24658;
var map__24659__$1 = (((((!((map__24659 == null))))?(((((map__24659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24659):map__24659);
var opts = map__24659__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24655){
var G__24656 = cljs.core.first(seq24655);
var seq24655__$1 = cljs.core.next(seq24655);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24656,seq24655__$1);
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
var G__24669 = arguments.length;
switch (G__24669) {
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
var c__24338__auto___26873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___26873){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___26873){
return (function (state_24707){
var state_val_24708 = (state_24707[(1)]);
if((state_val_24708 === (7))){
var inst_24700 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24724_26877 = state_24707__$1;
(statearr_24724_26877[(2)] = inst_24700);

(statearr_24724_26877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (1))){
var state_24707__$1 = state_24707;
var statearr_24730_26879 = state_24707__$1;
(statearr_24730_26879[(2)] = null);

(statearr_24730_26879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (4))){
var inst_24680 = (state_24707[(7)]);
var inst_24680__$1 = (state_24707[(2)]);
var inst_24681 = (inst_24680__$1 == null);
var state_24707__$1 = (function (){var statearr_24736 = state_24707;
(statearr_24736[(7)] = inst_24680__$1);

return statearr_24736;
})();
if(cljs.core.truth_(inst_24681)){
var statearr_24737_26884 = state_24707__$1;
(statearr_24737_26884[(1)] = (5));

} else {
var statearr_24738_26886 = state_24707__$1;
(statearr_24738_26886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (13))){
var state_24707__$1 = state_24707;
var statearr_24739_26887 = state_24707__$1;
(statearr_24739_26887[(2)] = null);

(statearr_24739_26887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (6))){
var inst_24680 = (state_24707[(7)]);
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24707__$1,(11),to,inst_24680);
} else {
if((state_val_24708 === (3))){
var inst_24702 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24707__$1,inst_24702);
} else {
if((state_val_24708 === (12))){
var state_24707__$1 = state_24707;
var statearr_24745_26890 = state_24707__$1;
(statearr_24745_26890[(2)] = null);

(statearr_24745_26890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (2))){
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24707__$1,(4),from);
} else {
if((state_val_24708 === (11))){
var inst_24693 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
if(cljs.core.truth_(inst_24693)){
var statearr_24746_26896 = state_24707__$1;
(statearr_24746_26896[(1)] = (12));

} else {
var statearr_24747_26897 = state_24707__$1;
(statearr_24747_26897[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (9))){
var state_24707__$1 = state_24707;
var statearr_24750_26898 = state_24707__$1;
(statearr_24750_26898[(2)] = null);

(statearr_24750_26898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (5))){
var state_24707__$1 = state_24707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24752_26899 = state_24707__$1;
(statearr_24752_26899[(1)] = (8));

} else {
var statearr_24754_26900 = state_24707__$1;
(statearr_24754_26900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (14))){
var inst_24698 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24756_26907 = state_24707__$1;
(statearr_24756_26907[(2)] = inst_24698);

(statearr_24756_26907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (10))){
var inst_24687 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24757_26910 = state_24707__$1;
(statearr_24757_26910[(2)] = inst_24687);

(statearr_24757_26910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (8))){
var inst_24684 = cljs.core.async.close_BANG_(to);
var state_24707__$1 = state_24707;
var statearr_24761_26911 = state_24707__$1;
(statearr_24761_26911[(2)] = inst_24684);

(statearr_24761_26911[(1)] = (10));


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
});})(c__24338__auto___26873))
;
return ((function (switch__24084__auto__,c__24338__auto___26873){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_24765 = [null,null,null,null,null,null,null,null];
(statearr_24765[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_24765[(1)] = (1));

return statearr_24765;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_24707){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_24707);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e24768){if((e24768 instanceof Object)){
var ex__24088__auto__ = e24768;
var statearr_24771_26915 = state_24707;
(statearr_24771_26915[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_24707;
state_24707 = G__26918;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_24707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_24707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___26873))
})();
var state__24340__auto__ = (function (){var statearr_24775 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_24775[(6)] = c__24338__auto___26873);

return statearr_24775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___26873))
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
return (function (p__24787){
var vec__24789 = p__24787;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24789,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24789,(1),null);
var job = vec__24789;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24338__auto___26933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___26933,res,vec__24789,v,p,job,jobs,results){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___26933,res,vec__24789,v,p,job,jobs,results){
return (function (state_24798){
var state_val_24799 = (state_24798[(1)]);
if((state_val_24799 === (1))){
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24798__$1,(2),res,v);
} else {
if((state_val_24799 === (2))){
var inst_24795 = (state_24798[(2)]);
var inst_24796 = cljs.core.async.close_BANG_(res);
var state_24798__$1 = (function (){var statearr_24800 = state_24798;
(statearr_24800[(7)] = inst_24795);

return statearr_24800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24798__$1,inst_24796);
} else {
return null;
}
}
});})(c__24338__auto___26933,res,vec__24789,v,p,job,jobs,results))
;
return ((function (switch__24084__auto__,c__24338__auto___26933,res,vec__24789,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0 = (function (){
var statearr_24802 = [null,null,null,null,null,null,null,null];
(statearr_24802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__);

(statearr_24802[(1)] = (1));

return statearr_24802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1 = (function (state_24798){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_24798);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e24805){if((e24805 instanceof Object)){
var ex__24088__auto__ = e24805;
var statearr_24806_26934 = state_24798;
(statearr_24806_26934[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24805;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26935 = state_24798;
state_24798 = G__26935;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = function(state_24798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1.call(this,state_24798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___26933,res,vec__24789,v,p,job,jobs,results))
})();
var state__24340__auto__ = (function (){var statearr_24811 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_24811[(6)] = c__24338__auto___26933);

return statearr_24811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___26933,res,vec__24789,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24813){
var vec__24815 = p__24813;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24815,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24815,(1),null);
var job = vec__24815;
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
var n__4607__auto___26939 = n;
var __26942 = (0);
while(true){
if((__26942 < n__4607__auto___26939)){
var G__24826_26943 = type;
var G__24826_26944__$1 = (((G__24826_26943 instanceof cljs.core.Keyword))?G__24826_26943.fqn:null);
switch (G__24826_26944__$1) {
case "compute":
var c__24338__auto___26946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26942,c__24338__auto___26946,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (__26942,c__24338__auto___26946,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async){
return (function (state_24848){
var state_val_24849 = (state_24848[(1)]);
if((state_val_24849 === (1))){
var state_24848__$1 = state_24848;
var statearr_24855_26947 = state_24848__$1;
(statearr_24855_26947[(2)] = null);

(statearr_24855_26947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (2))){
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24848__$1,(4),jobs);
} else {
if((state_val_24849 === (3))){
var inst_24845 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24848__$1,inst_24845);
} else {
if((state_val_24849 === (4))){
var inst_24837 = (state_24848[(2)]);
var inst_24838 = process(inst_24837);
var state_24848__$1 = state_24848;
if(cljs.core.truth_(inst_24838)){
var statearr_24856_26948 = state_24848__$1;
(statearr_24856_26948[(1)] = (5));

} else {
var statearr_24857_26950 = state_24848__$1;
(statearr_24857_26950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (5))){
var state_24848__$1 = state_24848;
var statearr_24858_26951 = state_24848__$1;
(statearr_24858_26951[(2)] = null);

(statearr_24858_26951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (6))){
var state_24848__$1 = state_24848;
var statearr_24859_26953 = state_24848__$1;
(statearr_24859_26953[(2)] = null);

(statearr_24859_26953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (7))){
var inst_24843 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
var statearr_24860_26954 = state_24848__$1;
(statearr_24860_26954[(2)] = inst_24843);

(statearr_24860_26954[(1)] = (3));


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
});})(__26942,c__24338__auto___26946,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async))
;
return ((function (__26942,switch__24084__auto__,c__24338__auto___26946,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0 = (function (){
var statearr_24871 = [null,null,null,null,null,null,null];
(statearr_24871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__);

(statearr_24871[(1)] = (1));

return statearr_24871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1 = (function (state_24848){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_24848);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e24876){if((e24876 instanceof Object)){
var ex__24088__auto__ = e24876;
var statearr_24877_26960 = state_24848;
(statearr_24877_26960[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26962 = state_24848;
state_24848 = G__26962;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = function(state_24848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1.call(this,state_24848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__;
})()
;})(__26942,switch__24084__auto__,c__24338__auto___26946,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async))
})();
var state__24340__auto__ = (function (){var statearr_24882 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_24882[(6)] = c__24338__auto___26946);

return statearr_24882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(__26942,c__24338__auto___26946,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async))
);


break;
case "async":
var c__24338__auto___26965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26942,c__24338__auto___26965,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (__26942,c__24338__auto___26965,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async){
return (function (state_24901){
var state_val_24902 = (state_24901[(1)]);
if((state_val_24902 === (1))){
var state_24901__$1 = state_24901;
var statearr_24903_26969 = state_24901__$1;
(statearr_24903_26969[(2)] = null);

(statearr_24903_26969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (2))){
var state_24901__$1 = state_24901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24901__$1,(4),jobs);
} else {
if((state_val_24902 === (3))){
var inst_24898 = (state_24901[(2)]);
var state_24901__$1 = state_24901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24901__$1,inst_24898);
} else {
if((state_val_24902 === (4))){
var inst_24886 = (state_24901[(2)]);
var inst_24887 = async(inst_24886);
var state_24901__$1 = state_24901;
if(cljs.core.truth_(inst_24887)){
var statearr_24904_26971 = state_24901__$1;
(statearr_24904_26971[(1)] = (5));

} else {
var statearr_24905_26973 = state_24901__$1;
(statearr_24905_26973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (5))){
var state_24901__$1 = state_24901;
var statearr_24906_26974 = state_24901__$1;
(statearr_24906_26974[(2)] = null);

(statearr_24906_26974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (6))){
var state_24901__$1 = state_24901;
var statearr_24909_26975 = state_24901__$1;
(statearr_24909_26975[(2)] = null);

(statearr_24909_26975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24902 === (7))){
var inst_24896 = (state_24901[(2)]);
var state_24901__$1 = state_24901;
var statearr_24910_26978 = state_24901__$1;
(statearr_24910_26978[(2)] = inst_24896);

(statearr_24910_26978[(1)] = (3));


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
});})(__26942,c__24338__auto___26965,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async))
;
return ((function (__26942,switch__24084__auto__,c__24338__auto___26965,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0 = (function (){
var statearr_24911 = [null,null,null,null,null,null,null];
(statearr_24911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__);

(statearr_24911[(1)] = (1));

return statearr_24911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1 = (function (state_24901){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_24901);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e24912){if((e24912 instanceof Object)){
var ex__24088__auto__ = e24912;
var statearr_24914_26987 = state_24901;
(statearr_24914_26987[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26990 = state_24901;
state_24901 = G__26990;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = function(state_24901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1.call(this,state_24901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__;
})()
;})(__26942,switch__24084__auto__,c__24338__auto___26965,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async))
})();
var state__24340__auto__ = (function (){var statearr_24919 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_24919[(6)] = c__24338__auto___26965);

return statearr_24919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(__26942,c__24338__auto___26965,G__24826_26943,G__24826_26944__$1,n__4607__auto___26939,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24826_26944__$1)].join('')));

}

var G__26993 = (__26942 + (1));
__26942 = G__26993;
continue;
} else {
}
break;
}

var c__24338__auto___26994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___26994,jobs,results,process,async){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___26994,jobs,results,process,async){
return (function (state_24942){
var state_val_24943 = (state_24942[(1)]);
if((state_val_24943 === (7))){
var inst_24938 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
var statearr_24945_26996 = state_24942__$1;
(statearr_24945_26996[(2)] = inst_24938);

(statearr_24945_26996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24943 === (1))){
var state_24942__$1 = state_24942;
var statearr_24947_27001 = state_24942__$1;
(statearr_24947_27001[(2)] = null);

(statearr_24947_27001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24943 === (4))){
var inst_24922 = (state_24942[(7)]);
var inst_24922__$1 = (state_24942[(2)]);
var inst_24923 = (inst_24922__$1 == null);
var state_24942__$1 = (function (){var statearr_24952 = state_24942;
(statearr_24952[(7)] = inst_24922__$1);

return statearr_24952;
})();
if(cljs.core.truth_(inst_24923)){
var statearr_24953_27004 = state_24942__$1;
(statearr_24953_27004[(1)] = (5));

} else {
var statearr_24956_27005 = state_24942__$1;
(statearr_24956_27005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24943 === (6))){
var inst_24922 = (state_24942[(7)]);
var inst_24927 = (state_24942[(8)]);
var inst_24927__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24929 = [inst_24922,inst_24927__$1];
var inst_24930 = (new cljs.core.PersistentVector(null,2,(5),inst_24928,inst_24929,null));
var state_24942__$1 = (function (){var statearr_24958 = state_24942;
(statearr_24958[(8)] = inst_24927__$1);

return statearr_24958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24942__$1,(8),jobs,inst_24930);
} else {
if((state_val_24943 === (3))){
var inst_24940 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24942__$1,inst_24940);
} else {
if((state_val_24943 === (2))){
var state_24942__$1 = state_24942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24942__$1,(4),from);
} else {
if((state_val_24943 === (9))){
var inst_24934 = (state_24942[(2)]);
var state_24942__$1 = (function (){var statearr_24960 = state_24942;
(statearr_24960[(9)] = inst_24934);

return statearr_24960;
})();
var statearr_24961_27015 = state_24942__$1;
(statearr_24961_27015[(2)] = null);

(statearr_24961_27015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24943 === (5))){
var inst_24925 = cljs.core.async.close_BANG_(jobs);
var state_24942__$1 = state_24942;
var statearr_24962_27018 = state_24942__$1;
(statearr_24962_27018[(2)] = inst_24925);

(statearr_24962_27018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24943 === (8))){
var inst_24927 = (state_24942[(8)]);
var inst_24932 = (state_24942[(2)]);
var state_24942__$1 = (function (){var statearr_24963 = state_24942;
(statearr_24963[(10)] = inst_24932);

return statearr_24963;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24942__$1,(9),results,inst_24927);
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
});})(c__24338__auto___26994,jobs,results,process,async))
;
return ((function (switch__24084__auto__,c__24338__auto___26994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0 = (function (){
var statearr_24964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__);

(statearr_24964[(1)] = (1));

return statearr_24964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1 = (function (state_24942){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_24942);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e24965){if((e24965 instanceof Object)){
var ex__24088__auto__ = e24965;
var statearr_24966_27025 = state_24942;
(statearr_24966_27025[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27026 = state_24942;
state_24942 = G__27026;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = function(state_24942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1.call(this,state_24942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___26994,jobs,results,process,async))
})();
var state__24340__auto__ = (function (){var statearr_24967 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_24967[(6)] = c__24338__auto___26994);

return statearr_24967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___26994,jobs,results,process,async))
);


var c__24338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto__,jobs,results,process,async){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto__,jobs,results,process,async){
return (function (state_25006){
var state_val_25007 = (state_25006[(1)]);
if((state_val_25007 === (7))){
var inst_25002 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
var statearr_25008_27031 = state_25006__$1;
(statearr_25008_27031[(2)] = inst_25002);

(statearr_25008_27031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (20))){
var state_25006__$1 = state_25006;
var statearr_25009_27038 = state_25006__$1;
(statearr_25009_27038[(2)] = null);

(statearr_25009_27038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (1))){
var state_25006__$1 = state_25006;
var statearr_25010_27046 = state_25006__$1;
(statearr_25010_27046[(2)] = null);

(statearr_25010_27046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (4))){
var inst_24970 = (state_25006[(7)]);
var inst_24970__$1 = (state_25006[(2)]);
var inst_24971 = (inst_24970__$1 == null);
var state_25006__$1 = (function (){var statearr_25011 = state_25006;
(statearr_25011[(7)] = inst_24970__$1);

return statearr_25011;
})();
if(cljs.core.truth_(inst_24971)){
var statearr_25012_27056 = state_25006__$1;
(statearr_25012_27056[(1)] = (5));

} else {
var statearr_25013_27059 = state_25006__$1;
(statearr_25013_27059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (15))){
var inst_24983 = (state_25006[(8)]);
var state_25006__$1 = state_25006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25006__$1,(18),to,inst_24983);
} else {
if((state_val_25007 === (21))){
var inst_24997 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
var statearr_25014_27070 = state_25006__$1;
(statearr_25014_27070[(2)] = inst_24997);

(statearr_25014_27070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (13))){
var inst_24999 = (state_25006[(2)]);
var state_25006__$1 = (function (){var statearr_25015 = state_25006;
(statearr_25015[(9)] = inst_24999);

return statearr_25015;
})();
var statearr_25016_27078 = state_25006__$1;
(statearr_25016_27078[(2)] = null);

(statearr_25016_27078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (6))){
var inst_24970 = (state_25006[(7)]);
var state_25006__$1 = state_25006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25006__$1,(11),inst_24970);
} else {
if((state_val_25007 === (17))){
var inst_24992 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
if(cljs.core.truth_(inst_24992)){
var statearr_25021_27088 = state_25006__$1;
(statearr_25021_27088[(1)] = (19));

} else {
var statearr_25022_27090 = state_25006__$1;
(statearr_25022_27090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (3))){
var inst_25004 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25006__$1,inst_25004);
} else {
if((state_val_25007 === (12))){
var inst_24980 = (state_25006[(10)]);
var state_25006__$1 = state_25006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25006__$1,(14),inst_24980);
} else {
if((state_val_25007 === (2))){
var state_25006__$1 = state_25006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25006__$1,(4),results);
} else {
if((state_val_25007 === (19))){
var state_25006__$1 = state_25006;
var statearr_25033_27103 = state_25006__$1;
(statearr_25033_27103[(2)] = null);

(statearr_25033_27103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (11))){
var inst_24980 = (state_25006[(2)]);
var state_25006__$1 = (function (){var statearr_25038 = state_25006;
(statearr_25038[(10)] = inst_24980);

return statearr_25038;
})();
var statearr_25039_27112 = state_25006__$1;
(statearr_25039_27112[(2)] = null);

(statearr_25039_27112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (9))){
var state_25006__$1 = state_25006;
var statearr_25040_27113 = state_25006__$1;
(statearr_25040_27113[(2)] = null);

(statearr_25040_27113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (5))){
var state_25006__$1 = state_25006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25041_27115 = state_25006__$1;
(statearr_25041_27115[(1)] = (8));

} else {
var statearr_25043_27116 = state_25006__$1;
(statearr_25043_27116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (14))){
var inst_24986 = (state_25006[(11)]);
var inst_24983 = (state_25006[(8)]);
var inst_24983__$1 = (state_25006[(2)]);
var inst_24985 = (inst_24983__$1 == null);
var inst_24986__$1 = cljs.core.not(inst_24985);
var state_25006__$1 = (function (){var statearr_25052 = state_25006;
(statearr_25052[(11)] = inst_24986__$1);

(statearr_25052[(8)] = inst_24983__$1);

return statearr_25052;
})();
if(inst_24986__$1){
var statearr_25053_27118 = state_25006__$1;
(statearr_25053_27118[(1)] = (15));

} else {
var statearr_25054_27119 = state_25006__$1;
(statearr_25054_27119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (16))){
var inst_24986 = (state_25006[(11)]);
var state_25006__$1 = state_25006;
var statearr_25060_27123 = state_25006__$1;
(statearr_25060_27123[(2)] = inst_24986);

(statearr_25060_27123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (10))){
var inst_24977 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
var statearr_25062_27127 = state_25006__$1;
(statearr_25062_27127[(2)] = inst_24977);

(statearr_25062_27127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (18))){
var inst_24989 = (state_25006[(2)]);
var state_25006__$1 = state_25006;
var statearr_25063_27129 = state_25006__$1;
(statearr_25063_27129[(2)] = inst_24989);

(statearr_25063_27129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25007 === (8))){
var inst_24974 = cljs.core.async.close_BANG_(to);
var state_25006__$1 = state_25006;
var statearr_25068_27130 = state_25006__$1;
(statearr_25068_27130[(2)] = inst_24974);

(statearr_25068_27130[(1)] = (10));


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
});})(c__24338__auto__,jobs,results,process,async))
;
return ((function (switch__24084__auto__,c__24338__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0 = (function (){
var statearr_25071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__);

(statearr_25071[(1)] = (1));

return statearr_25071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1 = (function (state_25006){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_25006);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e25072){if((e25072 instanceof Object)){
var ex__24088__auto__ = e25072;
var statearr_25073_27133 = state_25006;
(statearr_25073_27133[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27134 = state_25006;
state_25006 = G__27134;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__ = function(state_25006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1.call(this,state_25006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto__,jobs,results,process,async))
})();
var state__24340__auto__ = (function (){var statearr_25074 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_25074[(6)] = c__24338__auto__);

return statearr_25074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto__,jobs,results,process,async))
);

return c__24338__auto__;
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
var G__25076 = arguments.length;
switch (G__25076) {
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
var G__25078 = arguments.length;
switch (G__25078) {
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
var G__25080 = arguments.length;
switch (G__25080) {
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
var c__24338__auto___27180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___27180,tc,fc){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___27180,tc,fc){
return (function (state_25112){
var state_val_25113 = (state_25112[(1)]);
if((state_val_25113 === (7))){
var inst_25108 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
var statearr_25114_27185 = state_25112__$1;
(statearr_25114_27185[(2)] = inst_25108);

(statearr_25114_27185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (1))){
var state_25112__$1 = state_25112;
var statearr_25115_27187 = state_25112__$1;
(statearr_25115_27187[(2)] = null);

(statearr_25115_27187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (4))){
var inst_25089 = (state_25112[(7)]);
var inst_25089__$1 = (state_25112[(2)]);
var inst_25090 = (inst_25089__$1 == null);
var state_25112__$1 = (function (){var statearr_25116 = state_25112;
(statearr_25116[(7)] = inst_25089__$1);

return statearr_25116;
})();
if(cljs.core.truth_(inst_25090)){
var statearr_25118_27191 = state_25112__$1;
(statearr_25118_27191[(1)] = (5));

} else {
var statearr_25119_27193 = state_25112__$1;
(statearr_25119_27193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (13))){
var state_25112__$1 = state_25112;
var statearr_25120_27194 = state_25112__$1;
(statearr_25120_27194[(2)] = null);

(statearr_25120_27194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (6))){
var inst_25089 = (state_25112[(7)]);
var inst_25095 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25089) : p.call(null,inst_25089));
var state_25112__$1 = state_25112;
if(cljs.core.truth_(inst_25095)){
var statearr_25121_27196 = state_25112__$1;
(statearr_25121_27196[(1)] = (9));

} else {
var statearr_25122_27197 = state_25112__$1;
(statearr_25122_27197[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (3))){
var inst_25110 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25112__$1,inst_25110);
} else {
if((state_val_25113 === (12))){
var state_25112__$1 = state_25112;
var statearr_25127_27202 = state_25112__$1;
(statearr_25127_27202[(2)] = null);

(statearr_25127_27202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (2))){
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25112__$1,(4),ch);
} else {
if((state_val_25113 === (11))){
var inst_25089 = (state_25112[(7)]);
var inst_25099 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25112__$1,(8),inst_25099,inst_25089);
} else {
if((state_val_25113 === (9))){
var state_25112__$1 = state_25112;
var statearr_25128_27209 = state_25112__$1;
(statearr_25128_27209[(2)] = tc);

(statearr_25128_27209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (5))){
var inst_25092 = cljs.core.async.close_BANG_(tc);
var inst_25093 = cljs.core.async.close_BANG_(fc);
var state_25112__$1 = (function (){var statearr_25129 = state_25112;
(statearr_25129[(8)] = inst_25092);

return statearr_25129;
})();
var statearr_25130_27217 = state_25112__$1;
(statearr_25130_27217[(2)] = inst_25093);

(statearr_25130_27217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (14))){
var inst_25106 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
var statearr_25131_27218 = state_25112__$1;
(statearr_25131_27218[(2)] = inst_25106);

(statearr_25131_27218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (10))){
var state_25112__$1 = state_25112;
var statearr_25132_27220 = state_25112__$1;
(statearr_25132_27220[(2)] = fc);

(statearr_25132_27220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (8))){
var inst_25101 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
if(cljs.core.truth_(inst_25101)){
var statearr_25133_27225 = state_25112__$1;
(statearr_25133_27225[(1)] = (12));

} else {
var statearr_25134_27228 = state_25112__$1;
(statearr_25134_27228[(1)] = (13));

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
});})(c__24338__auto___27180,tc,fc))
;
return ((function (switch__24084__auto__,c__24338__auto___27180,tc,fc){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_25135 = [null,null,null,null,null,null,null,null,null];
(statearr_25135[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_25135[(1)] = (1));

return statearr_25135;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_25112){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_25112);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e25136){if((e25136 instanceof Object)){
var ex__24088__auto__ = e25136;
var statearr_25137_27236 = state_25112;
(statearr_25137_27236[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27240 = state_25112;
state_25112 = G__27240;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_25112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_25112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___27180,tc,fc))
})();
var state__24340__auto__ = (function (){var statearr_25138 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_25138[(6)] = c__24338__auto___27180);

return statearr_25138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___27180,tc,fc))
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
var c__24338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto__){
return (function (state_25159){
var state_val_25160 = (state_25159[(1)]);
if((state_val_25160 === (7))){
var inst_25155 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
var statearr_25162_27246 = state_25159__$1;
(statearr_25162_27246[(2)] = inst_25155);

(statearr_25162_27246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (1))){
var inst_25139 = init;
var state_25159__$1 = (function (){var statearr_25163 = state_25159;
(statearr_25163[(7)] = inst_25139);

return statearr_25163;
})();
var statearr_25164_27249 = state_25159__$1;
(statearr_25164_27249[(2)] = null);

(statearr_25164_27249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (4))){
var inst_25142 = (state_25159[(8)]);
var inst_25142__$1 = (state_25159[(2)]);
var inst_25143 = (inst_25142__$1 == null);
var state_25159__$1 = (function (){var statearr_25165 = state_25159;
(statearr_25165[(8)] = inst_25142__$1);

return statearr_25165;
})();
if(cljs.core.truth_(inst_25143)){
var statearr_25166_27256 = state_25159__$1;
(statearr_25166_27256[(1)] = (5));

} else {
var statearr_25167_27257 = state_25159__$1;
(statearr_25167_27257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (6))){
var inst_25146 = (state_25159[(9)]);
var inst_25139 = (state_25159[(7)]);
var inst_25142 = (state_25159[(8)]);
var inst_25146__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_25139,inst_25142) : f.call(null,inst_25139,inst_25142));
var inst_25147 = cljs.core.reduced_QMARK_(inst_25146__$1);
var state_25159__$1 = (function (){var statearr_25168 = state_25159;
(statearr_25168[(9)] = inst_25146__$1);

return statearr_25168;
})();
if(inst_25147){
var statearr_25169_27262 = state_25159__$1;
(statearr_25169_27262[(1)] = (8));

} else {
var statearr_25170_27266 = state_25159__$1;
(statearr_25170_27266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (3))){
var inst_25157 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25159__$1,inst_25157);
} else {
if((state_val_25160 === (2))){
var state_25159__$1 = state_25159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25159__$1,(4),ch);
} else {
if((state_val_25160 === (9))){
var inst_25146 = (state_25159[(9)]);
var inst_25139 = inst_25146;
var state_25159__$1 = (function (){var statearr_25172 = state_25159;
(statearr_25172[(7)] = inst_25139);

return statearr_25172;
})();
var statearr_25173_27271 = state_25159__$1;
(statearr_25173_27271[(2)] = null);

(statearr_25173_27271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (5))){
var inst_25139 = (state_25159[(7)]);
var state_25159__$1 = state_25159;
var statearr_25174_27275 = state_25159__$1;
(statearr_25174_27275[(2)] = inst_25139);

(statearr_25174_27275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (10))){
var inst_25153 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
var statearr_25175_27280 = state_25159__$1;
(statearr_25175_27280[(2)] = inst_25153);

(statearr_25175_27280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (8))){
var inst_25146 = (state_25159[(9)]);
var inst_25149 = cljs.core.deref(inst_25146);
var state_25159__$1 = state_25159;
var statearr_25176_27287 = state_25159__$1;
(statearr_25176_27287[(2)] = inst_25149);

(statearr_25176_27287[(1)] = (10));


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
});})(c__24338__auto__))
;
return ((function (switch__24084__auto__,c__24338__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24085__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24085__auto____0 = (function (){
var statearr_25177 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25177[(0)] = cljs$core$async$reduce_$_state_machine__24085__auto__);

(statearr_25177[(1)] = (1));

return statearr_25177;
});
var cljs$core$async$reduce_$_state_machine__24085__auto____1 = (function (state_25159){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_25159);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e25178){if((e25178 instanceof Object)){
var ex__24088__auto__ = e25178;
var statearr_25179_27295 = state_25159;
(statearr_25179_27295[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27302 = state_25159;
state_25159 = G__27302;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24085__auto__ = function(state_25159){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24085__auto____1.call(this,state_25159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24085__auto____0;
cljs$core$async$reduce_$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24085__auto____1;
return cljs$core$async$reduce_$_state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_25180 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_25180[(6)] = c__24338__auto__);

return statearr_25180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto__,f__$1){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto__,f__$1){
return (function (state_25186){
var state_val_25187 = (state_25186[(1)]);
if((state_val_25187 === (1))){
var inst_25181 = cljs.core.async.reduce(f__$1,init,ch);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25186__$1,(2),inst_25181);
} else {
if((state_val_25187 === (2))){
var inst_25183 = (state_25186[(2)]);
var inst_25184 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_25183) : f__$1.call(null,inst_25183));
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25186__$1,inst_25184);
} else {
return null;
}
}
});})(c__24338__auto__,f__$1))
;
return ((function (switch__24084__auto__,c__24338__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24085__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24085__auto____0 = (function (){
var statearr_25188 = [null,null,null,null,null,null,null];
(statearr_25188[(0)] = cljs$core$async$transduce_$_state_machine__24085__auto__);

(statearr_25188[(1)] = (1));

return statearr_25188;
});
var cljs$core$async$transduce_$_state_machine__24085__auto____1 = (function (state_25186){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_25186);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e25189){if((e25189 instanceof Object)){
var ex__24088__auto__ = e25189;
var statearr_25190_27328 = state_25186;
(statearr_25190_27328[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27329 = state_25186;
state_25186 = G__27329;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24085__auto__ = function(state_25186){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24085__auto____1.call(this,state_25186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24085__auto____0;
cljs$core$async$transduce_$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24085__auto____1;
return cljs$core$async$transduce_$_state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto__,f__$1))
})();
var state__24340__auto__ = (function (){var statearr_25192 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_25192[(6)] = c__24338__auto__);

return statearr_25192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto__,f__$1))
);

return c__24338__auto__;
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
var G__25194 = arguments.length;
switch (G__25194) {
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
var c__24338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto__){
return (function (state_25219){
var state_val_25220 = (state_25219[(1)]);
if((state_val_25220 === (7))){
var inst_25201 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25222_27351 = state_25219__$1;
(statearr_25222_27351[(2)] = inst_25201);

(statearr_25222_27351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (1))){
var inst_25195 = cljs.core.seq(coll);
var inst_25196 = inst_25195;
var state_25219__$1 = (function (){var statearr_25224 = state_25219;
(statearr_25224[(7)] = inst_25196);

return statearr_25224;
})();
var statearr_25225_27358 = state_25219__$1;
(statearr_25225_27358[(2)] = null);

(statearr_25225_27358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (4))){
var inst_25196 = (state_25219[(7)]);
var inst_25199 = cljs.core.first(inst_25196);
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25219__$1,(7),ch,inst_25199);
} else {
if((state_val_25220 === (13))){
var inst_25213 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25226_27363 = state_25219__$1;
(statearr_25226_27363[(2)] = inst_25213);

(statearr_25226_27363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (6))){
var inst_25204 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
if(cljs.core.truth_(inst_25204)){
var statearr_25227_27365 = state_25219__$1;
(statearr_25227_27365[(1)] = (8));

} else {
var statearr_25228_27366 = state_25219__$1;
(statearr_25228_27366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (3))){
var inst_25217 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25219__$1,inst_25217);
} else {
if((state_val_25220 === (12))){
var state_25219__$1 = state_25219;
var statearr_25229_27369 = state_25219__$1;
(statearr_25229_27369[(2)] = null);

(statearr_25229_27369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (2))){
var inst_25196 = (state_25219[(7)]);
var state_25219__$1 = state_25219;
if(cljs.core.truth_(inst_25196)){
var statearr_25230_27372 = state_25219__$1;
(statearr_25230_27372[(1)] = (4));

} else {
var statearr_25231_27374 = state_25219__$1;
(statearr_25231_27374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (11))){
var inst_25210 = cljs.core.async.close_BANG_(ch);
var state_25219__$1 = state_25219;
var statearr_25232_27375 = state_25219__$1;
(statearr_25232_27375[(2)] = inst_25210);

(statearr_25232_27375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (9))){
var state_25219__$1 = state_25219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25233_27378 = state_25219__$1;
(statearr_25233_27378[(1)] = (11));

} else {
var statearr_25234_27380 = state_25219__$1;
(statearr_25234_27380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (5))){
var inst_25196 = (state_25219[(7)]);
var state_25219__$1 = state_25219;
var statearr_25235_27382 = state_25219__$1;
(statearr_25235_27382[(2)] = inst_25196);

(statearr_25235_27382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (10))){
var inst_25215 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25237_27383 = state_25219__$1;
(statearr_25237_27383[(2)] = inst_25215);

(statearr_25237_27383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (8))){
var inst_25196 = (state_25219[(7)]);
var inst_25206 = cljs.core.next(inst_25196);
var inst_25196__$1 = inst_25206;
var state_25219__$1 = (function (){var statearr_25238 = state_25219;
(statearr_25238[(7)] = inst_25196__$1);

return statearr_25238;
})();
var statearr_25239_27387 = state_25219__$1;
(statearr_25239_27387[(2)] = null);

(statearr_25239_27387[(1)] = (2));


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
});})(c__24338__auto__))
;
return ((function (switch__24084__auto__,c__24338__auto__){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_25240 = [null,null,null,null,null,null,null,null];
(statearr_25240[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_25240[(1)] = (1));

return statearr_25240;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_25219){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_25219);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e25241){if((e25241 instanceof Object)){
var ex__24088__auto__ = e25241;
var statearr_25242_27392 = state_25219;
(statearr_25242_27392[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27397 = state_25219;
state_25219 = G__27397;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_25219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_25219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_25243 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_25243[(6)] = c__24338__auto__);

return statearr_25243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25252 = (function (ch,cs,meta25253){
this.ch = ch;
this.cs = cs;
this.meta25253 = meta25253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25254,meta25253__$1){
var self__ = this;
var _25254__$1 = this;
return (new cljs.core.async.t_cljs$core$async25252(self__.ch,self__.cs,meta25253__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25254){
var self__ = this;
var _25254__$1 = this;
return self__.meta25253;
});})(cs))
;

cljs.core.async.t_cljs$core$async25252.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25252.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25252.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25252.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25252.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25252.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25253","meta25253",433234243,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25252";

cljs.core.async.t_cljs$core$async25252.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25252");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25252.
 */
cljs.core.async.__GT_t_cljs$core$async25252 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25252(ch__$1,cs__$1,meta25253){
return (new cljs.core.async.t_cljs$core$async25252(ch__$1,cs__$1,meta25253));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25252(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24338__auto___27446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___27446,cs,m,dchan,dctr,done){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___27446,cs,m,dchan,dctr,done){
return (function (state_25400){
var state_val_25401 = (state_25400[(1)]);
if((state_val_25401 === (7))){
var inst_25392 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25403_27453 = state_25400__$1;
(statearr_25403_27453[(2)] = inst_25392);

(statearr_25403_27453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (20))){
var inst_25292 = (state_25400[(7)]);
var inst_25306 = cljs.core.first(inst_25292);
var inst_25307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25306,(0),null);
var inst_25308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25306,(1),null);
var state_25400__$1 = (function (){var statearr_25406 = state_25400;
(statearr_25406[(8)] = inst_25307);

return statearr_25406;
})();
if(cljs.core.truth_(inst_25308)){
var statearr_25407_27461 = state_25400__$1;
(statearr_25407_27461[(1)] = (22));

} else {
var statearr_25408_27462 = state_25400__$1;
(statearr_25408_27462[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (27))){
var inst_25343 = (state_25400[(9)]);
var inst_25336 = (state_25400[(10)]);
var inst_25338 = (state_25400[(11)]);
var inst_25260 = (state_25400[(12)]);
var inst_25343__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25336,inst_25338);
var inst_25344 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25343__$1,inst_25260,done);
var state_25400__$1 = (function (){var statearr_25413 = state_25400;
(statearr_25413[(9)] = inst_25343__$1);

return statearr_25413;
})();
if(cljs.core.truth_(inst_25344)){
var statearr_25414_27474 = state_25400__$1;
(statearr_25414_27474[(1)] = (30));

} else {
var statearr_25415_27481 = state_25400__$1;
(statearr_25415_27481[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (1))){
var state_25400__$1 = state_25400;
var statearr_25420_27482 = state_25400__$1;
(statearr_25420_27482[(2)] = null);

(statearr_25420_27482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (24))){
var inst_25292 = (state_25400[(7)]);
var inst_25313 = (state_25400[(2)]);
var inst_25314 = cljs.core.next(inst_25292);
var inst_25270 = inst_25314;
var inst_25271 = null;
var inst_25272 = (0);
var inst_25273 = (0);
var state_25400__$1 = (function (){var statearr_25421 = state_25400;
(statearr_25421[(13)] = inst_25272);

(statearr_25421[(14)] = inst_25270);

(statearr_25421[(15)] = inst_25271);

(statearr_25421[(16)] = inst_25273);

(statearr_25421[(17)] = inst_25313);

return statearr_25421;
})();
var statearr_25426_27485 = state_25400__$1;
(statearr_25426_27485[(2)] = null);

(statearr_25426_27485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (39))){
var state_25400__$1 = state_25400;
var statearr_25430_27486 = state_25400__$1;
(statearr_25430_27486[(2)] = null);

(statearr_25430_27486[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (4))){
var inst_25260 = (state_25400[(12)]);
var inst_25260__$1 = (state_25400[(2)]);
var inst_25261 = (inst_25260__$1 == null);
var state_25400__$1 = (function (){var statearr_25431 = state_25400;
(statearr_25431[(12)] = inst_25260__$1);

return statearr_25431;
})();
if(cljs.core.truth_(inst_25261)){
var statearr_25432_27487 = state_25400__$1;
(statearr_25432_27487[(1)] = (5));

} else {
var statearr_25433_27488 = state_25400__$1;
(statearr_25433_27488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (15))){
var inst_25272 = (state_25400[(13)]);
var inst_25270 = (state_25400[(14)]);
var inst_25271 = (state_25400[(15)]);
var inst_25273 = (state_25400[(16)]);
var inst_25288 = (state_25400[(2)]);
var inst_25289 = (inst_25273 + (1));
var tmp25427 = inst_25272;
var tmp25428 = inst_25270;
var tmp25429 = inst_25271;
var inst_25270__$1 = tmp25428;
var inst_25271__$1 = tmp25429;
var inst_25272__$1 = tmp25427;
var inst_25273__$1 = inst_25289;
var state_25400__$1 = (function (){var statearr_25435 = state_25400;
(statearr_25435[(13)] = inst_25272__$1);

(statearr_25435[(14)] = inst_25270__$1);

(statearr_25435[(15)] = inst_25271__$1);

(statearr_25435[(18)] = inst_25288);

(statearr_25435[(16)] = inst_25273__$1);

return statearr_25435;
})();
var statearr_25437_27496 = state_25400__$1;
(statearr_25437_27496[(2)] = null);

(statearr_25437_27496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (21))){
var inst_25317 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25441_27505 = state_25400__$1;
(statearr_25441_27505[(2)] = inst_25317);

(statearr_25441_27505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (31))){
var inst_25343 = (state_25400[(9)]);
var inst_25347 = done(null);
var inst_25348 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25343);
var state_25400__$1 = (function (){var statearr_25442 = state_25400;
(statearr_25442[(19)] = inst_25347);

return statearr_25442;
})();
var statearr_25443_27508 = state_25400__$1;
(statearr_25443_27508[(2)] = inst_25348);

(statearr_25443_27508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (32))){
var inst_25336 = (state_25400[(10)]);
var inst_25338 = (state_25400[(11)]);
var inst_25337 = (state_25400[(20)]);
var inst_25335 = (state_25400[(21)]);
var inst_25350 = (state_25400[(2)]);
var inst_25351 = (inst_25338 + (1));
var tmp25438 = inst_25336;
var tmp25439 = inst_25337;
var tmp25440 = inst_25335;
var inst_25335__$1 = tmp25440;
var inst_25336__$1 = tmp25438;
var inst_25337__$1 = tmp25439;
var inst_25338__$1 = inst_25351;
var state_25400__$1 = (function (){var statearr_25446 = state_25400;
(statearr_25446[(10)] = inst_25336__$1);

(statearr_25446[(11)] = inst_25338__$1);

(statearr_25446[(20)] = inst_25337__$1);

(statearr_25446[(22)] = inst_25350);

(statearr_25446[(21)] = inst_25335__$1);

return statearr_25446;
})();
var statearr_25447_27509 = state_25400__$1;
(statearr_25447_27509[(2)] = null);

(statearr_25447_27509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (40))){
var inst_25363 = (state_25400[(23)]);
var inst_25367 = done(null);
var inst_25368 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25363);
var state_25400__$1 = (function (){var statearr_25449 = state_25400;
(statearr_25449[(24)] = inst_25367);

return statearr_25449;
})();
var statearr_25450_27511 = state_25400__$1;
(statearr_25450_27511[(2)] = inst_25368);

(statearr_25450_27511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (33))){
var inst_25354 = (state_25400[(25)]);
var inst_25356 = cljs.core.chunked_seq_QMARK_(inst_25354);
var state_25400__$1 = state_25400;
if(inst_25356){
var statearr_25451_27518 = state_25400__$1;
(statearr_25451_27518[(1)] = (36));

} else {
var statearr_25456_27519 = state_25400__$1;
(statearr_25456_27519[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (13))){
var inst_25282 = (state_25400[(26)]);
var inst_25285 = cljs.core.async.close_BANG_(inst_25282);
var state_25400__$1 = state_25400;
var statearr_25457_27520 = state_25400__$1;
(statearr_25457_27520[(2)] = inst_25285);

(statearr_25457_27520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (22))){
var inst_25307 = (state_25400[(8)]);
var inst_25310 = cljs.core.async.close_BANG_(inst_25307);
var state_25400__$1 = state_25400;
var statearr_25462_27521 = state_25400__$1;
(statearr_25462_27521[(2)] = inst_25310);

(statearr_25462_27521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (36))){
var inst_25354 = (state_25400[(25)]);
var inst_25358 = cljs.core.chunk_first(inst_25354);
var inst_25359 = cljs.core.chunk_rest(inst_25354);
var inst_25360 = cljs.core.count(inst_25358);
var inst_25335 = inst_25359;
var inst_25336 = inst_25358;
var inst_25337 = inst_25360;
var inst_25338 = (0);
var state_25400__$1 = (function (){var statearr_25465 = state_25400;
(statearr_25465[(10)] = inst_25336);

(statearr_25465[(11)] = inst_25338);

(statearr_25465[(20)] = inst_25337);

(statearr_25465[(21)] = inst_25335);

return statearr_25465;
})();
var statearr_25466_27522 = state_25400__$1;
(statearr_25466_27522[(2)] = null);

(statearr_25466_27522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (41))){
var inst_25354 = (state_25400[(25)]);
var inst_25370 = (state_25400[(2)]);
var inst_25371 = cljs.core.next(inst_25354);
var inst_25335 = inst_25371;
var inst_25336 = null;
var inst_25337 = (0);
var inst_25338 = (0);
var state_25400__$1 = (function (){var statearr_25467 = state_25400;
(statearr_25467[(10)] = inst_25336);

(statearr_25467[(11)] = inst_25338);

(statearr_25467[(27)] = inst_25370);

(statearr_25467[(20)] = inst_25337);

(statearr_25467[(21)] = inst_25335);

return statearr_25467;
})();
var statearr_25469_27523 = state_25400__$1;
(statearr_25469_27523[(2)] = null);

(statearr_25469_27523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (43))){
var state_25400__$1 = state_25400;
var statearr_25470_27524 = state_25400__$1;
(statearr_25470_27524[(2)] = null);

(statearr_25470_27524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (29))){
var inst_25380 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25475_27531 = state_25400__$1;
(statearr_25475_27531[(2)] = inst_25380);

(statearr_25475_27531[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (44))){
var inst_25389 = (state_25400[(2)]);
var state_25400__$1 = (function (){var statearr_25476 = state_25400;
(statearr_25476[(28)] = inst_25389);

return statearr_25476;
})();
var statearr_25477_27532 = state_25400__$1;
(statearr_25477_27532[(2)] = null);

(statearr_25477_27532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (6))){
var inst_25327 = (state_25400[(29)]);
var inst_25326 = cljs.core.deref(cs);
var inst_25327__$1 = cljs.core.keys(inst_25326);
var inst_25328 = cljs.core.count(inst_25327__$1);
var inst_25329 = cljs.core.reset_BANG_(dctr,inst_25328);
var inst_25334 = cljs.core.seq(inst_25327__$1);
var inst_25335 = inst_25334;
var inst_25336 = null;
var inst_25337 = (0);
var inst_25338 = (0);
var state_25400__$1 = (function (){var statearr_25478 = state_25400;
(statearr_25478[(10)] = inst_25336);

(statearr_25478[(11)] = inst_25338);

(statearr_25478[(20)] = inst_25337);

(statearr_25478[(30)] = inst_25329);

(statearr_25478[(29)] = inst_25327__$1);

(statearr_25478[(21)] = inst_25335);

return statearr_25478;
})();
var statearr_25481_27533 = state_25400__$1;
(statearr_25481_27533[(2)] = null);

(statearr_25481_27533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (28))){
var inst_25335 = (state_25400[(21)]);
var inst_25354 = (state_25400[(25)]);
var inst_25354__$1 = cljs.core.seq(inst_25335);
var state_25400__$1 = (function (){var statearr_25482 = state_25400;
(statearr_25482[(25)] = inst_25354__$1);

return statearr_25482;
})();
if(inst_25354__$1){
var statearr_25484_27534 = state_25400__$1;
(statearr_25484_27534[(1)] = (33));

} else {
var statearr_25485_27535 = state_25400__$1;
(statearr_25485_27535[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (25))){
var inst_25338 = (state_25400[(11)]);
var inst_25337 = (state_25400[(20)]);
var inst_25340 = (inst_25338 < inst_25337);
var inst_25341 = inst_25340;
var state_25400__$1 = state_25400;
if(cljs.core.truth_(inst_25341)){
var statearr_25486_27537 = state_25400__$1;
(statearr_25486_27537[(1)] = (27));

} else {
var statearr_25487_27538 = state_25400__$1;
(statearr_25487_27538[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (34))){
var state_25400__$1 = state_25400;
var statearr_25488_27539 = state_25400__$1;
(statearr_25488_27539[(2)] = null);

(statearr_25488_27539[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (17))){
var state_25400__$1 = state_25400;
var statearr_25489_27540 = state_25400__$1;
(statearr_25489_27540[(2)] = null);

(statearr_25489_27540[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (3))){
var inst_25395 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25400__$1,inst_25395);
} else {
if((state_val_25401 === (12))){
var inst_25322 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25490_27541 = state_25400__$1;
(statearr_25490_27541[(2)] = inst_25322);

(statearr_25490_27541[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (2))){
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25400__$1,(4),ch);
} else {
if((state_val_25401 === (23))){
var state_25400__$1 = state_25400;
var statearr_25491_27543 = state_25400__$1;
(statearr_25491_27543[(2)] = null);

(statearr_25491_27543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (35))){
var inst_25378 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25492_27545 = state_25400__$1;
(statearr_25492_27545[(2)] = inst_25378);

(statearr_25492_27545[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (19))){
var inst_25292 = (state_25400[(7)]);
var inst_25296 = cljs.core.chunk_first(inst_25292);
var inst_25297 = cljs.core.chunk_rest(inst_25292);
var inst_25299 = cljs.core.count(inst_25296);
var inst_25270 = inst_25297;
var inst_25271 = inst_25296;
var inst_25272 = inst_25299;
var inst_25273 = (0);
var state_25400__$1 = (function (){var statearr_25493 = state_25400;
(statearr_25493[(13)] = inst_25272);

(statearr_25493[(14)] = inst_25270);

(statearr_25493[(15)] = inst_25271);

(statearr_25493[(16)] = inst_25273);

return statearr_25493;
})();
var statearr_25496_27551 = state_25400__$1;
(statearr_25496_27551[(2)] = null);

(statearr_25496_27551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (11))){
var inst_25292 = (state_25400[(7)]);
var inst_25270 = (state_25400[(14)]);
var inst_25292__$1 = cljs.core.seq(inst_25270);
var state_25400__$1 = (function (){var statearr_25497 = state_25400;
(statearr_25497[(7)] = inst_25292__$1);

return statearr_25497;
})();
if(inst_25292__$1){
var statearr_25498_27560 = state_25400__$1;
(statearr_25498_27560[(1)] = (16));

} else {
var statearr_25501_27561 = state_25400__$1;
(statearr_25501_27561[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (9))){
var inst_25324 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25502_27566 = state_25400__$1;
(statearr_25502_27566[(2)] = inst_25324);

(statearr_25502_27566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (5))){
var inst_25267 = cljs.core.deref(cs);
var inst_25268 = cljs.core.seq(inst_25267);
var inst_25270 = inst_25268;
var inst_25271 = null;
var inst_25272 = (0);
var inst_25273 = (0);
var state_25400__$1 = (function (){var statearr_25504 = state_25400;
(statearr_25504[(13)] = inst_25272);

(statearr_25504[(14)] = inst_25270);

(statearr_25504[(15)] = inst_25271);

(statearr_25504[(16)] = inst_25273);

return statearr_25504;
})();
var statearr_25505_27569 = state_25400__$1;
(statearr_25505_27569[(2)] = null);

(statearr_25505_27569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (14))){
var state_25400__$1 = state_25400;
var statearr_25507_27572 = state_25400__$1;
(statearr_25507_27572[(2)] = null);

(statearr_25507_27572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (45))){
var inst_25386 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25511_27573 = state_25400__$1;
(statearr_25511_27573[(2)] = inst_25386);

(statearr_25511_27573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (26))){
var inst_25327 = (state_25400[(29)]);
var inst_25382 = (state_25400[(2)]);
var inst_25383 = cljs.core.seq(inst_25327);
var state_25400__$1 = (function (){var statearr_25512 = state_25400;
(statearr_25512[(31)] = inst_25382);

return statearr_25512;
})();
if(inst_25383){
var statearr_25513_27575 = state_25400__$1;
(statearr_25513_27575[(1)] = (42));

} else {
var statearr_25514_27577 = state_25400__$1;
(statearr_25514_27577[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (16))){
var inst_25292 = (state_25400[(7)]);
var inst_25294 = cljs.core.chunked_seq_QMARK_(inst_25292);
var state_25400__$1 = state_25400;
if(inst_25294){
var statearr_25516_27578 = state_25400__$1;
(statearr_25516_27578[(1)] = (19));

} else {
var statearr_25517_27579 = state_25400__$1;
(statearr_25517_27579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (38))){
var inst_25374 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25518_27580 = state_25400__$1;
(statearr_25518_27580[(2)] = inst_25374);

(statearr_25518_27580[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (30))){
var state_25400__$1 = state_25400;
var statearr_25521_27581 = state_25400__$1;
(statearr_25521_27581[(2)] = null);

(statearr_25521_27581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (10))){
var inst_25271 = (state_25400[(15)]);
var inst_25273 = (state_25400[(16)]);
var inst_25281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25271,inst_25273);
var inst_25282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25281,(0),null);
var inst_25283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25281,(1),null);
var state_25400__$1 = (function (){var statearr_25523 = state_25400;
(statearr_25523[(26)] = inst_25282);

return statearr_25523;
})();
if(cljs.core.truth_(inst_25283)){
var statearr_25524_27582 = state_25400__$1;
(statearr_25524_27582[(1)] = (13));

} else {
var statearr_25525_27583 = state_25400__$1;
(statearr_25525_27583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (18))){
var inst_25320 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25526_27584 = state_25400__$1;
(statearr_25526_27584[(2)] = inst_25320);

(statearr_25526_27584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (42))){
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25400__$1,(45),dchan);
} else {
if((state_val_25401 === (37))){
var inst_25363 = (state_25400[(23)]);
var inst_25260 = (state_25400[(12)]);
var inst_25354 = (state_25400[(25)]);
var inst_25363__$1 = cljs.core.first(inst_25354);
var inst_25364 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25363__$1,inst_25260,done);
var state_25400__$1 = (function (){var statearr_25527 = state_25400;
(statearr_25527[(23)] = inst_25363__$1);

return statearr_25527;
})();
if(cljs.core.truth_(inst_25364)){
var statearr_25528_27585 = state_25400__$1;
(statearr_25528_27585[(1)] = (39));

} else {
var statearr_25529_27586 = state_25400__$1;
(statearr_25529_27586[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (8))){
var inst_25272 = (state_25400[(13)]);
var inst_25273 = (state_25400[(16)]);
var inst_25275 = (inst_25273 < inst_25272);
var inst_25276 = inst_25275;
var state_25400__$1 = state_25400;
if(cljs.core.truth_(inst_25276)){
var statearr_25530_27588 = state_25400__$1;
(statearr_25530_27588[(1)] = (10));

} else {
var statearr_25531_27589 = state_25400__$1;
(statearr_25531_27589[(1)] = (11));

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
});})(c__24338__auto___27446,cs,m,dchan,dctr,done))
;
return ((function (switch__24084__auto__,c__24338__auto___27446,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24085__auto__ = null;
var cljs$core$async$mult_$_state_machine__24085__auto____0 = (function (){
var statearr_25532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25532[(0)] = cljs$core$async$mult_$_state_machine__24085__auto__);

(statearr_25532[(1)] = (1));

return statearr_25532;
});
var cljs$core$async$mult_$_state_machine__24085__auto____1 = (function (state_25400){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_25400);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e25533){if((e25533 instanceof Object)){
var ex__24088__auto__ = e25533;
var statearr_25534_27591 = state_25400;
(statearr_25534_27591[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27592 = state_25400;
state_25400 = G__27592;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24085__auto__ = function(state_25400){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24085__auto____1.call(this,state_25400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24085__auto____0;
cljs$core$async$mult_$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24085__auto____1;
return cljs$core$async$mult_$_state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___27446,cs,m,dchan,dctr,done))
})();
var state__24340__auto__ = (function (){var statearr_25535 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_25535[(6)] = c__24338__auto___27446);

return statearr_25535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___27446,cs,m,dchan,dctr,done))
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
var G__25537 = arguments.length;
switch (G__25537) {
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
var len__4730__auto___27599 = arguments.length;
var i__4731__auto___27600 = (0);
while(true){
if((i__4731__auto___27600 < len__4730__auto___27599)){
args__4736__auto__.push((arguments[i__4731__auto___27600]));

var G__27601 = (i__4731__auto___27600 + (1));
i__4731__auto___27600 = G__27601;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25571){
var map__25572 = p__25571;
var map__25572__$1 = (((((!((map__25572 == null))))?(((((map__25572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25572):map__25572);
var opts = map__25572__$1;
var statearr_25574_27609 = state;
(statearr_25574_27609[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__25572,map__25572__$1,opts){
return (function (val){
var statearr_25575_27610 = state;
(statearr_25575_27610[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25572,map__25572__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25576_27614 = state;
(statearr_25576_27614[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25567){
var G__25568 = cljs.core.first(seq25567);
var seq25567__$1 = cljs.core.next(seq25567);
var G__25569 = cljs.core.first(seq25567__$1);
var seq25567__$2 = cljs.core.next(seq25567__$1);
var G__25570 = cljs.core.first(seq25567__$2);
var seq25567__$3 = cljs.core.next(seq25567__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25568,G__25569,G__25570,seq25567__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25580 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25581){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25581 = meta25581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25582,meta25581__$1){
var self__ = this;
var _25582__$1 = this;
return (new cljs.core.async.t_cljs$core$async25580(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25581__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25582){
var self__ = this;
var _25582__$1 = this;
return self__.meta25581;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25580.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25580.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25581","meta25581",1959096932,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25580";

cljs.core.async.t_cljs$core$async25580.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25580");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25580.
 */
cljs.core.async.__GT_t_cljs$core$async25580 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25580(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25581){
return (new cljs.core.async.t_cljs$core$async25580(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25581));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25580(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24338__auto___27637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___27637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___27637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25695){
var state_val_25696 = (state_25695[(1)]);
if((state_val_25696 === (7))){
var inst_25604 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
var statearr_25697_27642 = state_25695__$1;
(statearr_25697_27642[(2)] = inst_25604);

(statearr_25697_27642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (20))){
var inst_25617 = (state_25695[(7)]);
var state_25695__$1 = state_25695;
var statearr_25698_27643 = state_25695__$1;
(statearr_25698_27643[(2)] = inst_25617);

(statearr_25698_27643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (27))){
var state_25695__$1 = state_25695;
var statearr_25699_27644 = state_25695__$1;
(statearr_25699_27644[(2)] = null);

(statearr_25699_27644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (1))){
var inst_25590 = (state_25695[(8)]);
var inst_25590__$1 = calc_state();
var inst_25593 = (inst_25590__$1 == null);
var inst_25594 = cljs.core.not(inst_25593);
var state_25695__$1 = (function (){var statearr_25700 = state_25695;
(statearr_25700[(8)] = inst_25590__$1);

return statearr_25700;
})();
if(inst_25594){
var statearr_25701_27645 = state_25695__$1;
(statearr_25701_27645[(1)] = (2));

} else {
var statearr_25702_27646 = state_25695__$1;
(statearr_25702_27646[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (24))){
var inst_25643 = (state_25695[(9)]);
var inst_25669 = (state_25695[(10)]);
var inst_25655 = (state_25695[(11)]);
var inst_25669__$1 = (inst_25643.cljs$core$IFn$_invoke$arity$1 ? inst_25643.cljs$core$IFn$_invoke$arity$1(inst_25655) : inst_25643.call(null,inst_25655));
var state_25695__$1 = (function (){var statearr_25703 = state_25695;
(statearr_25703[(10)] = inst_25669__$1);

return statearr_25703;
})();
if(cljs.core.truth_(inst_25669__$1)){
var statearr_25704_27652 = state_25695__$1;
(statearr_25704_27652[(1)] = (29));

} else {
var statearr_25705_27653 = state_25695__$1;
(statearr_25705_27653[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (4))){
var inst_25607 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
if(cljs.core.truth_(inst_25607)){
var statearr_25706_27654 = state_25695__$1;
(statearr_25706_27654[(1)] = (8));

} else {
var statearr_25707_27655 = state_25695__$1;
(statearr_25707_27655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (15))){
var inst_25636 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
if(cljs.core.truth_(inst_25636)){
var statearr_25708_27656 = state_25695__$1;
(statearr_25708_27656[(1)] = (19));

} else {
var statearr_25709_27657 = state_25695__$1;
(statearr_25709_27657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (21))){
var inst_25641 = (state_25695[(12)]);
var inst_25641__$1 = (state_25695[(2)]);
var inst_25643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25641__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25641__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25641__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25695__$1 = (function (){var statearr_25710 = state_25695;
(statearr_25710[(13)] = inst_25644);

(statearr_25710[(9)] = inst_25643);

(statearr_25710[(12)] = inst_25641__$1);

return statearr_25710;
})();
return cljs.core.async.ioc_alts_BANG_(state_25695__$1,(22),inst_25646);
} else {
if((state_val_25696 === (31))){
var inst_25677 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
if(cljs.core.truth_(inst_25677)){
var statearr_25711_27663 = state_25695__$1;
(statearr_25711_27663[(1)] = (32));

} else {
var statearr_25712_27664 = state_25695__$1;
(statearr_25712_27664[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (32))){
var inst_25654 = (state_25695[(14)]);
var state_25695__$1 = state_25695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25695__$1,(35),out,inst_25654);
} else {
if((state_val_25696 === (33))){
var inst_25641 = (state_25695[(12)]);
var inst_25617 = inst_25641;
var state_25695__$1 = (function (){var statearr_25714 = state_25695;
(statearr_25714[(7)] = inst_25617);

return statearr_25714;
})();
var statearr_25715_27665 = state_25695__$1;
(statearr_25715_27665[(2)] = null);

(statearr_25715_27665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (13))){
var inst_25617 = (state_25695[(7)]);
var inst_25625 = inst_25617.cljs$lang$protocol_mask$partition0$;
var inst_25626 = (inst_25625 & (64));
var inst_25627 = inst_25617.cljs$core$ISeq$;
var inst_25628 = (cljs.core.PROTOCOL_SENTINEL === inst_25627);
var inst_25629 = ((inst_25626) || (inst_25628));
var state_25695__$1 = state_25695;
if(cljs.core.truth_(inst_25629)){
var statearr_25716_27666 = state_25695__$1;
(statearr_25716_27666[(1)] = (16));

} else {
var statearr_25717_27667 = state_25695__$1;
(statearr_25717_27667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (22))){
var inst_25655 = (state_25695[(11)]);
var inst_25654 = (state_25695[(14)]);
var inst_25651 = (state_25695[(2)]);
var inst_25654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25651,(0),null);
var inst_25655__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25651,(1),null);
var inst_25656 = (inst_25654__$1 == null);
var inst_25657 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25655__$1,change);
var inst_25658 = ((inst_25656) || (inst_25657));
var state_25695__$1 = (function (){var statearr_25721 = state_25695;
(statearr_25721[(11)] = inst_25655__$1);

(statearr_25721[(14)] = inst_25654__$1);

return statearr_25721;
})();
if(cljs.core.truth_(inst_25658)){
var statearr_25722_27669 = state_25695__$1;
(statearr_25722_27669[(1)] = (23));

} else {
var statearr_25723_27670 = state_25695__$1;
(statearr_25723_27670[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (36))){
var inst_25641 = (state_25695[(12)]);
var inst_25617 = inst_25641;
var state_25695__$1 = (function (){var statearr_25724 = state_25695;
(statearr_25724[(7)] = inst_25617);

return statearr_25724;
})();
var statearr_25725_27671 = state_25695__$1;
(statearr_25725_27671[(2)] = null);

(statearr_25725_27671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (29))){
var inst_25669 = (state_25695[(10)]);
var state_25695__$1 = state_25695;
var statearr_25726_27672 = state_25695__$1;
(statearr_25726_27672[(2)] = inst_25669);

(statearr_25726_27672[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (6))){
var state_25695__$1 = state_25695;
var statearr_25730_27673 = state_25695__$1;
(statearr_25730_27673[(2)] = false);

(statearr_25730_27673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (28))){
var inst_25665 = (state_25695[(2)]);
var inst_25666 = calc_state();
var inst_25617 = inst_25666;
var state_25695__$1 = (function (){var statearr_25731 = state_25695;
(statearr_25731[(15)] = inst_25665);

(statearr_25731[(7)] = inst_25617);

return statearr_25731;
})();
var statearr_25732_27681 = state_25695__$1;
(statearr_25732_27681[(2)] = null);

(statearr_25732_27681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (25))){
var inst_25691 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
var statearr_25734_27682 = state_25695__$1;
(statearr_25734_27682[(2)] = inst_25691);

(statearr_25734_27682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (34))){
var inst_25689 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
var statearr_25736_27683 = state_25695__$1;
(statearr_25736_27683[(2)] = inst_25689);

(statearr_25736_27683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (17))){
var state_25695__$1 = state_25695;
var statearr_25737_27684 = state_25695__$1;
(statearr_25737_27684[(2)] = false);

(statearr_25737_27684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (3))){
var state_25695__$1 = state_25695;
var statearr_25739_27685 = state_25695__$1;
(statearr_25739_27685[(2)] = false);

(statearr_25739_27685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (12))){
var inst_25693 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25695__$1,inst_25693);
} else {
if((state_val_25696 === (2))){
var inst_25590 = (state_25695[(8)]);
var inst_25596 = inst_25590.cljs$lang$protocol_mask$partition0$;
var inst_25597 = (inst_25596 & (64));
var inst_25598 = inst_25590.cljs$core$ISeq$;
var inst_25599 = (cljs.core.PROTOCOL_SENTINEL === inst_25598);
var inst_25600 = ((inst_25597) || (inst_25599));
var state_25695__$1 = state_25695;
if(cljs.core.truth_(inst_25600)){
var statearr_25742_27687 = state_25695__$1;
(statearr_25742_27687[(1)] = (5));

} else {
var statearr_25743_27688 = state_25695__$1;
(statearr_25743_27688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (23))){
var inst_25654 = (state_25695[(14)]);
var inst_25660 = (inst_25654 == null);
var state_25695__$1 = state_25695;
if(cljs.core.truth_(inst_25660)){
var statearr_25746_27689 = state_25695__$1;
(statearr_25746_27689[(1)] = (26));

} else {
var statearr_25747_27690 = state_25695__$1;
(statearr_25747_27690[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (35))){
var inst_25680 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
if(cljs.core.truth_(inst_25680)){
var statearr_25750_27692 = state_25695__$1;
(statearr_25750_27692[(1)] = (36));

} else {
var statearr_25751_27693 = state_25695__$1;
(statearr_25751_27693[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (19))){
var inst_25617 = (state_25695[(7)]);
var inst_25638 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25617);
var state_25695__$1 = state_25695;
var statearr_25752_27695 = state_25695__$1;
(statearr_25752_27695[(2)] = inst_25638);

(statearr_25752_27695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (11))){
var inst_25617 = (state_25695[(7)]);
var inst_25621 = (inst_25617 == null);
var inst_25622 = cljs.core.not(inst_25621);
var state_25695__$1 = state_25695;
if(inst_25622){
var statearr_25753_27697 = state_25695__$1;
(statearr_25753_27697[(1)] = (13));

} else {
var statearr_25754_27698 = state_25695__$1;
(statearr_25754_27698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (9))){
var inst_25590 = (state_25695[(8)]);
var state_25695__$1 = state_25695;
var statearr_25755_27703 = state_25695__$1;
(statearr_25755_27703[(2)] = inst_25590);

(statearr_25755_27703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (5))){
var state_25695__$1 = state_25695;
var statearr_25756_27704 = state_25695__$1;
(statearr_25756_27704[(2)] = true);

(statearr_25756_27704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (14))){
var state_25695__$1 = state_25695;
var statearr_25757_27706 = state_25695__$1;
(statearr_25757_27706[(2)] = false);

(statearr_25757_27706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (26))){
var inst_25655 = (state_25695[(11)]);
var inst_25662 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25655);
var state_25695__$1 = state_25695;
var statearr_25759_27707 = state_25695__$1;
(statearr_25759_27707[(2)] = inst_25662);

(statearr_25759_27707[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (16))){
var state_25695__$1 = state_25695;
var statearr_25760_27708 = state_25695__$1;
(statearr_25760_27708[(2)] = true);

(statearr_25760_27708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (38))){
var inst_25685 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
var statearr_25761_27710 = state_25695__$1;
(statearr_25761_27710[(2)] = inst_25685);

(statearr_25761_27710[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (30))){
var inst_25644 = (state_25695[(13)]);
var inst_25643 = (state_25695[(9)]);
var inst_25655 = (state_25695[(11)]);
var inst_25672 = cljs.core.empty_QMARK_(inst_25643);
var inst_25673 = (inst_25644.cljs$core$IFn$_invoke$arity$1 ? inst_25644.cljs$core$IFn$_invoke$arity$1(inst_25655) : inst_25644.call(null,inst_25655));
var inst_25674 = cljs.core.not(inst_25673);
var inst_25675 = ((inst_25672) && (inst_25674));
var state_25695__$1 = state_25695;
var statearr_25764_27715 = state_25695__$1;
(statearr_25764_27715[(2)] = inst_25675);

(statearr_25764_27715[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (10))){
var inst_25590 = (state_25695[(8)]);
var inst_25613 = (state_25695[(2)]);
var inst_25614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25613,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25613,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25613,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25617 = inst_25590;
var state_25695__$1 = (function (){var statearr_25765 = state_25695;
(statearr_25765[(16)] = inst_25616);

(statearr_25765[(17)] = inst_25615);

(statearr_25765[(18)] = inst_25614);

(statearr_25765[(7)] = inst_25617);

return statearr_25765;
})();
var statearr_25766_27716 = state_25695__$1;
(statearr_25766_27716[(2)] = null);

(statearr_25766_27716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (18))){
var inst_25633 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
var statearr_25767_27717 = state_25695__$1;
(statearr_25767_27717[(2)] = inst_25633);

(statearr_25767_27717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (37))){
var state_25695__$1 = state_25695;
var statearr_25768_27718 = state_25695__$1;
(statearr_25768_27718[(2)] = null);

(statearr_25768_27718[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (8))){
var inst_25590 = (state_25695[(8)]);
var inst_25610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25590);
var state_25695__$1 = state_25695;
var statearr_25769_27720 = state_25695__$1;
(statearr_25769_27720[(2)] = inst_25610);

(statearr_25769_27720[(1)] = (10));


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
});})(c__24338__auto___27637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24084__auto__,c__24338__auto___27637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24085__auto__ = null;
var cljs$core$async$mix_$_state_machine__24085__auto____0 = (function (){
var statearr_25770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25770[(0)] = cljs$core$async$mix_$_state_machine__24085__auto__);

(statearr_25770[(1)] = (1));

return statearr_25770;
});
var cljs$core$async$mix_$_state_machine__24085__auto____1 = (function (state_25695){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_25695);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e25771){if((e25771 instanceof Object)){
var ex__24088__auto__ = e25771;
var statearr_25772_27721 = state_25695;
(statearr_25772_27721[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27725 = state_25695;
state_25695 = G__27725;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24085__auto__ = function(state_25695){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24085__auto____1.call(this,state_25695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24085__auto____0;
cljs$core$async$mix_$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24085__auto____1;
return cljs$core$async$mix_$_state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___27637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24340__auto__ = (function (){var statearr_25775 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_25775[(6)] = c__24338__auto___27637);

return statearr_25775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___27637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__25783 = arguments.length;
switch (G__25783) {
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
var G__25786 = arguments.length;
switch (G__25786) {
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
return (function (p1__25784_SHARP_){
if(cljs.core.truth_((p1__25784_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25784_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25784_SHARP_.call(null,topic)))){
return p1__25784_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25784_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25787 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25788){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25788 = meta25788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25789,meta25788__$1){
var self__ = this;
var _25789__$1 = this;
return (new cljs.core.async.t_cljs$core$async25787(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25788__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25789){
var self__ = this;
var _25789__$1 = this;
return self__.meta25788;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25787.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25788","meta25788",-1605570953,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25787";

cljs.core.async.t_cljs$core$async25787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25787");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25787.
 */
cljs.core.async.__GT_t_cljs$core$async25787 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25787(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25788){
return (new cljs.core.async.t_cljs$core$async25787(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25788));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25787(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24338__auto___27748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___27748,mults,ensure_mult,p){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___27748,mults,ensure_mult,p){
return (function (state_25876){
var state_val_25877 = (state_25876[(1)]);
if((state_val_25877 === (7))){
var inst_25872 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25878_27751 = state_25876__$1;
(statearr_25878_27751[(2)] = inst_25872);

(statearr_25878_27751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (20))){
var state_25876__$1 = state_25876;
var statearr_25879_27752 = state_25876__$1;
(statearr_25879_27752[(2)] = null);

(statearr_25879_27752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (1))){
var state_25876__$1 = state_25876;
var statearr_25880_27753 = state_25876__$1;
(statearr_25880_27753[(2)] = null);

(statearr_25880_27753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (24))){
var inst_25853 = (state_25876[(7)]);
var inst_25864 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25853);
var state_25876__$1 = state_25876;
var statearr_25881_27756 = state_25876__$1;
(statearr_25881_27756[(2)] = inst_25864);

(statearr_25881_27756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (4))){
var inst_25805 = (state_25876[(8)]);
var inst_25805__$1 = (state_25876[(2)]);
var inst_25806 = (inst_25805__$1 == null);
var state_25876__$1 = (function (){var statearr_25882 = state_25876;
(statearr_25882[(8)] = inst_25805__$1);

return statearr_25882;
})();
if(cljs.core.truth_(inst_25806)){
var statearr_25883_27758 = state_25876__$1;
(statearr_25883_27758[(1)] = (5));

} else {
var statearr_25884_27761 = state_25876__$1;
(statearr_25884_27761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (15))){
var inst_25847 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25885_27763 = state_25876__$1;
(statearr_25885_27763[(2)] = inst_25847);

(statearr_25885_27763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (21))){
var inst_25869 = (state_25876[(2)]);
var state_25876__$1 = (function (){var statearr_25886 = state_25876;
(statearr_25886[(9)] = inst_25869);

return statearr_25886;
})();
var statearr_25887_27764 = state_25876__$1;
(statearr_25887_27764[(2)] = null);

(statearr_25887_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (13))){
var inst_25829 = (state_25876[(10)]);
var inst_25831 = cljs.core.chunked_seq_QMARK_(inst_25829);
var state_25876__$1 = state_25876;
if(inst_25831){
var statearr_25888_27766 = state_25876__$1;
(statearr_25888_27766[(1)] = (16));

} else {
var statearr_25889_27767 = state_25876__$1;
(statearr_25889_27767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (22))){
var inst_25861 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
if(cljs.core.truth_(inst_25861)){
var statearr_25890_27769 = state_25876__$1;
(statearr_25890_27769[(1)] = (23));

} else {
var statearr_25893_27771 = state_25876__$1;
(statearr_25893_27771[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (6))){
var inst_25855 = (state_25876[(11)]);
var inst_25853 = (state_25876[(7)]);
var inst_25805 = (state_25876[(8)]);
var inst_25853__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25805) : topic_fn.call(null,inst_25805));
var inst_25854 = cljs.core.deref(mults);
var inst_25855__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25854,inst_25853__$1);
var state_25876__$1 = (function (){var statearr_25895 = state_25876;
(statearr_25895[(11)] = inst_25855__$1);

(statearr_25895[(7)] = inst_25853__$1);

return statearr_25895;
})();
if(cljs.core.truth_(inst_25855__$1)){
var statearr_25896_27772 = state_25876__$1;
(statearr_25896_27772[(1)] = (19));

} else {
var statearr_25897_27773 = state_25876__$1;
(statearr_25897_27773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (25))){
var inst_25866 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25898_27775 = state_25876__$1;
(statearr_25898_27775[(2)] = inst_25866);

(statearr_25898_27775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (17))){
var inst_25829 = (state_25876[(10)]);
var inst_25838 = cljs.core.first(inst_25829);
var inst_25839 = cljs.core.async.muxch_STAR_(inst_25838);
var inst_25840 = cljs.core.async.close_BANG_(inst_25839);
var inst_25841 = cljs.core.next(inst_25829);
var inst_25815 = inst_25841;
var inst_25816 = null;
var inst_25817 = (0);
var inst_25818 = (0);
var state_25876__$1 = (function (){var statearr_25899 = state_25876;
(statearr_25899[(12)] = inst_25840);

(statearr_25899[(13)] = inst_25818);

(statearr_25899[(14)] = inst_25815);

(statearr_25899[(15)] = inst_25817);

(statearr_25899[(16)] = inst_25816);

return statearr_25899;
})();
var statearr_25900_27777 = state_25876__$1;
(statearr_25900_27777[(2)] = null);

(statearr_25900_27777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (3))){
var inst_25874 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25876__$1,inst_25874);
} else {
if((state_val_25877 === (12))){
var inst_25849 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25903_27786 = state_25876__$1;
(statearr_25903_27786[(2)] = inst_25849);

(statearr_25903_27786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (2))){
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25876__$1,(4),ch);
} else {
if((state_val_25877 === (23))){
var state_25876__$1 = state_25876;
var statearr_25910_27795 = state_25876__$1;
(statearr_25910_27795[(2)] = null);

(statearr_25910_27795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (19))){
var inst_25855 = (state_25876[(11)]);
var inst_25805 = (state_25876[(8)]);
var inst_25859 = cljs.core.async.muxch_STAR_(inst_25855);
var state_25876__$1 = state_25876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25876__$1,(22),inst_25859,inst_25805);
} else {
if((state_val_25877 === (11))){
var inst_25829 = (state_25876[(10)]);
var inst_25815 = (state_25876[(14)]);
var inst_25829__$1 = cljs.core.seq(inst_25815);
var state_25876__$1 = (function (){var statearr_25911 = state_25876;
(statearr_25911[(10)] = inst_25829__$1);

return statearr_25911;
})();
if(inst_25829__$1){
var statearr_25912_27804 = state_25876__$1;
(statearr_25912_27804[(1)] = (13));

} else {
var statearr_25916_27810 = state_25876__$1;
(statearr_25916_27810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (9))){
var inst_25851 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25917_27814 = state_25876__$1;
(statearr_25917_27814[(2)] = inst_25851);

(statearr_25917_27814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (5))){
var inst_25812 = cljs.core.deref(mults);
var inst_25813 = cljs.core.vals(inst_25812);
var inst_25814 = cljs.core.seq(inst_25813);
var inst_25815 = inst_25814;
var inst_25816 = null;
var inst_25817 = (0);
var inst_25818 = (0);
var state_25876__$1 = (function (){var statearr_25921 = state_25876;
(statearr_25921[(13)] = inst_25818);

(statearr_25921[(14)] = inst_25815);

(statearr_25921[(15)] = inst_25817);

(statearr_25921[(16)] = inst_25816);

return statearr_25921;
})();
var statearr_25922_27827 = state_25876__$1;
(statearr_25922_27827[(2)] = null);

(statearr_25922_27827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (14))){
var state_25876__$1 = state_25876;
var statearr_25928_27828 = state_25876__$1;
(statearr_25928_27828[(2)] = null);

(statearr_25928_27828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (16))){
var inst_25829 = (state_25876[(10)]);
var inst_25833 = cljs.core.chunk_first(inst_25829);
var inst_25834 = cljs.core.chunk_rest(inst_25829);
var inst_25835 = cljs.core.count(inst_25833);
var inst_25815 = inst_25834;
var inst_25816 = inst_25833;
var inst_25817 = inst_25835;
var inst_25818 = (0);
var state_25876__$1 = (function (){var statearr_25931 = state_25876;
(statearr_25931[(13)] = inst_25818);

(statearr_25931[(14)] = inst_25815);

(statearr_25931[(15)] = inst_25817);

(statearr_25931[(16)] = inst_25816);

return statearr_25931;
})();
var statearr_25933_27832 = state_25876__$1;
(statearr_25933_27832[(2)] = null);

(statearr_25933_27832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (10))){
var inst_25818 = (state_25876[(13)]);
var inst_25815 = (state_25876[(14)]);
var inst_25817 = (state_25876[(15)]);
var inst_25816 = (state_25876[(16)]);
var inst_25823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25816,inst_25818);
var inst_25824 = cljs.core.async.muxch_STAR_(inst_25823);
var inst_25825 = cljs.core.async.close_BANG_(inst_25824);
var inst_25826 = (inst_25818 + (1));
var tmp25925 = inst_25815;
var tmp25926 = inst_25817;
var tmp25927 = inst_25816;
var inst_25815__$1 = tmp25925;
var inst_25816__$1 = tmp25927;
var inst_25817__$1 = tmp25926;
var inst_25818__$1 = inst_25826;
var state_25876__$1 = (function (){var statearr_25934 = state_25876;
(statearr_25934[(13)] = inst_25818__$1);

(statearr_25934[(17)] = inst_25825);

(statearr_25934[(14)] = inst_25815__$1);

(statearr_25934[(15)] = inst_25817__$1);

(statearr_25934[(16)] = inst_25816__$1);

return statearr_25934;
})();
var statearr_25937_27834 = state_25876__$1;
(statearr_25937_27834[(2)] = null);

(statearr_25937_27834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (18))){
var inst_25844 = (state_25876[(2)]);
var state_25876__$1 = state_25876;
var statearr_25939_27835 = state_25876__$1;
(statearr_25939_27835[(2)] = inst_25844);

(statearr_25939_27835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25877 === (8))){
var inst_25818 = (state_25876[(13)]);
var inst_25817 = (state_25876[(15)]);
var inst_25820 = (inst_25818 < inst_25817);
var inst_25821 = inst_25820;
var state_25876__$1 = state_25876;
if(cljs.core.truth_(inst_25821)){
var statearr_25943_27839 = state_25876__$1;
(statearr_25943_27839[(1)] = (10));

} else {
var statearr_25944_27840 = state_25876__$1;
(statearr_25944_27840[(1)] = (11));

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
});})(c__24338__auto___27748,mults,ensure_mult,p))
;
return ((function (switch__24084__auto__,c__24338__auto___27748,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_25948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25948[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_25948[(1)] = (1));

return statearr_25948;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_25876){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_25876);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e25950){if((e25950 instanceof Object)){
var ex__24088__auto__ = e25950;
var statearr_25951_27856 = state_25876;
(statearr_25951_27856[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27857 = state_25876;
state_25876 = G__27857;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_25876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_25876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___27748,mults,ensure_mult,p))
})();
var state__24340__auto__ = (function (){var statearr_25954 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_25954[(6)] = c__24338__auto___27748);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___27748,mults,ensure_mult,p))
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
var G__25959 = arguments.length;
switch (G__25959) {
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
var G__25971 = arguments.length;
switch (G__25971) {
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
var G__25973 = arguments.length;
switch (G__25973) {
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
var c__24338__auto___27868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___27868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___27868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26015){
var state_val_26016 = (state_26015[(1)]);
if((state_val_26016 === (7))){
var state_26015__$1 = state_26015;
var statearr_26021_27869 = state_26015__$1;
(statearr_26021_27869[(2)] = null);

(statearr_26021_27869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (1))){
var state_26015__$1 = state_26015;
var statearr_26023_27870 = state_26015__$1;
(statearr_26023_27870[(2)] = null);

(statearr_26023_27870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (4))){
var inst_25976 = (state_26015[(7)]);
var inst_25978 = (inst_25976 < cnt);
var state_26015__$1 = state_26015;
if(cljs.core.truth_(inst_25978)){
var statearr_26026_27871 = state_26015__$1;
(statearr_26026_27871[(1)] = (6));

} else {
var statearr_26028_27878 = state_26015__$1;
(statearr_26028_27878[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (15))){
var inst_26011 = (state_26015[(2)]);
var state_26015__$1 = state_26015;
var statearr_26031_27879 = state_26015__$1;
(statearr_26031_27879[(2)] = inst_26011);

(statearr_26031_27879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (13))){
var inst_26004 = cljs.core.async.close_BANG_(out);
var state_26015__$1 = state_26015;
var statearr_26032_27880 = state_26015__$1;
(statearr_26032_27880[(2)] = inst_26004);

(statearr_26032_27880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (6))){
var state_26015__$1 = state_26015;
var statearr_26033_27881 = state_26015__$1;
(statearr_26033_27881[(2)] = null);

(statearr_26033_27881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (3))){
var inst_26013 = (state_26015[(2)]);
var state_26015__$1 = state_26015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26015__$1,inst_26013);
} else {
if((state_val_26016 === (12))){
var inst_26001 = (state_26015[(8)]);
var inst_26001__$1 = (state_26015[(2)]);
var inst_26002 = cljs.core.some(cljs.core.nil_QMARK_,inst_26001__$1);
var state_26015__$1 = (function (){var statearr_26034 = state_26015;
(statearr_26034[(8)] = inst_26001__$1);

return statearr_26034;
})();
if(cljs.core.truth_(inst_26002)){
var statearr_26035_27882 = state_26015__$1;
(statearr_26035_27882[(1)] = (13));

} else {
var statearr_26036_27883 = state_26015__$1;
(statearr_26036_27883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (2))){
var inst_25975 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25976 = (0);
var state_26015__$1 = (function (){var statearr_26039 = state_26015;
(statearr_26039[(7)] = inst_25976);

(statearr_26039[(9)] = inst_25975);

return statearr_26039;
})();
var statearr_26040_27884 = state_26015__$1;
(statearr_26040_27884[(2)] = null);

(statearr_26040_27884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (11))){
var inst_25976 = (state_26015[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26015,(10),Object,null,(9));
var inst_25985 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25976) : chs__$1.call(null,inst_25976));
var inst_25986 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25976) : done.call(null,inst_25976));
var inst_25987 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25985,inst_25986);
var state_26015__$1 = state_26015;
var statearr_26044_27885 = state_26015__$1;
(statearr_26044_27885[(2)] = inst_25987);


cljs.core.async.impl.ioc_helpers.process_exception(state_26015__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (9))){
var inst_25976 = (state_26015[(7)]);
var inst_25989 = (state_26015[(2)]);
var inst_25990 = (inst_25976 + (1));
var inst_25976__$1 = inst_25990;
var state_26015__$1 = (function (){var statearr_26045 = state_26015;
(statearr_26045[(7)] = inst_25976__$1);

(statearr_26045[(10)] = inst_25989);

return statearr_26045;
})();
var statearr_26046_27892 = state_26015__$1;
(statearr_26046_27892[(2)] = null);

(statearr_26046_27892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (5))){
var inst_25996 = (state_26015[(2)]);
var state_26015__$1 = (function (){var statearr_26053 = state_26015;
(statearr_26053[(11)] = inst_25996);

return statearr_26053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26015__$1,(12),dchan);
} else {
if((state_val_26016 === (14))){
var inst_26001 = (state_26015[(8)]);
var inst_26006 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26001);
var state_26015__$1 = state_26015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26015__$1,(16),out,inst_26006);
} else {
if((state_val_26016 === (16))){
var inst_26008 = (state_26015[(2)]);
var state_26015__$1 = (function (){var statearr_26054 = state_26015;
(statearr_26054[(12)] = inst_26008);

return statearr_26054;
})();
var statearr_26057_27893 = state_26015__$1;
(statearr_26057_27893[(2)] = null);

(statearr_26057_27893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (10))){
var inst_25980 = (state_26015[(2)]);
var inst_25981 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26015__$1 = (function (){var statearr_26059 = state_26015;
(statearr_26059[(13)] = inst_25980);

return statearr_26059;
})();
var statearr_26060_27894 = state_26015__$1;
(statearr_26060_27894[(2)] = inst_25981);


cljs.core.async.impl.ioc_helpers.process_exception(state_26015__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (8))){
var inst_25994 = (state_26015[(2)]);
var state_26015__$1 = state_26015;
var statearr_26061_27895 = state_26015__$1;
(statearr_26061_27895[(2)] = inst_25994);

(statearr_26061_27895[(1)] = (5));


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
});})(c__24338__auto___27868,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24084__auto__,c__24338__auto___27868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_26072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26072[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_26072[(1)] = (1));

return statearr_26072;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_26015){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_26015);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e26074){if((e26074 instanceof Object)){
var ex__24088__auto__ = e26074;
var statearr_26075_27899 = state_26015;
(statearr_26075_27899[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27903 = state_26015;
state_26015 = G__27903;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_26015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_26015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___27868,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24340__auto__ = (function (){var statearr_26076 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_26076[(6)] = c__24338__auto___27868);

return statearr_26076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___27868,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26079 = arguments.length;
switch (G__26079) {
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
var c__24338__auto___27907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___27907,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___27907,out){
return (function (state_26115){
var state_val_26116 = (state_26115[(1)]);
if((state_val_26116 === (7))){
var inst_26095 = (state_26115[(7)]);
var inst_26094 = (state_26115[(8)]);
var inst_26094__$1 = (state_26115[(2)]);
var inst_26095__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26094__$1,(0),null);
var inst_26096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26094__$1,(1),null);
var inst_26097 = (inst_26095__$1 == null);
var state_26115__$1 = (function (){var statearr_26117 = state_26115;
(statearr_26117[(7)] = inst_26095__$1);

(statearr_26117[(9)] = inst_26096);

(statearr_26117[(8)] = inst_26094__$1);

return statearr_26117;
})();
if(cljs.core.truth_(inst_26097)){
var statearr_26122_27910 = state_26115__$1;
(statearr_26122_27910[(1)] = (8));

} else {
var statearr_26123_27911 = state_26115__$1;
(statearr_26123_27911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (1))){
var inst_26084 = cljs.core.vec(chs);
var inst_26085 = inst_26084;
var state_26115__$1 = (function (){var statearr_26128 = state_26115;
(statearr_26128[(10)] = inst_26085);

return statearr_26128;
})();
var statearr_26129_27912 = state_26115__$1;
(statearr_26129_27912[(2)] = null);

(statearr_26129_27912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (4))){
var inst_26085 = (state_26115[(10)]);
var state_26115__$1 = state_26115;
return cljs.core.async.ioc_alts_BANG_(state_26115__$1,(7),inst_26085);
} else {
if((state_val_26116 === (6))){
var inst_26111 = (state_26115[(2)]);
var state_26115__$1 = state_26115;
var statearr_26134_27916 = state_26115__$1;
(statearr_26134_27916[(2)] = inst_26111);

(statearr_26134_27916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (3))){
var inst_26113 = (state_26115[(2)]);
var state_26115__$1 = state_26115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26115__$1,inst_26113);
} else {
if((state_val_26116 === (2))){
var inst_26085 = (state_26115[(10)]);
var inst_26087 = cljs.core.count(inst_26085);
var inst_26088 = (inst_26087 > (0));
var state_26115__$1 = state_26115;
if(cljs.core.truth_(inst_26088)){
var statearr_26136_27923 = state_26115__$1;
(statearr_26136_27923[(1)] = (4));

} else {
var statearr_26137_27924 = state_26115__$1;
(statearr_26137_27924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (11))){
var inst_26085 = (state_26115[(10)]);
var inst_26104 = (state_26115[(2)]);
var tmp26135 = inst_26085;
var inst_26085__$1 = tmp26135;
var state_26115__$1 = (function (){var statearr_26138 = state_26115;
(statearr_26138[(10)] = inst_26085__$1);

(statearr_26138[(11)] = inst_26104);

return statearr_26138;
})();
var statearr_26139_27927 = state_26115__$1;
(statearr_26139_27927[(2)] = null);

(statearr_26139_27927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (9))){
var inst_26095 = (state_26115[(7)]);
var state_26115__$1 = state_26115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26115__$1,(11),out,inst_26095);
} else {
if((state_val_26116 === (5))){
var inst_26109 = cljs.core.async.close_BANG_(out);
var state_26115__$1 = state_26115;
var statearr_26141_27931 = state_26115__$1;
(statearr_26141_27931[(2)] = inst_26109);

(statearr_26141_27931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (10))){
var inst_26107 = (state_26115[(2)]);
var state_26115__$1 = state_26115;
var statearr_26142_27932 = state_26115__$1;
(statearr_26142_27932[(2)] = inst_26107);

(statearr_26142_27932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (8))){
var inst_26095 = (state_26115[(7)]);
var inst_26096 = (state_26115[(9)]);
var inst_26094 = (state_26115[(8)]);
var inst_26085 = (state_26115[(10)]);
var inst_26099 = (function (){var cs = inst_26085;
var vec__26090 = inst_26094;
var v = inst_26095;
var c = inst_26096;
return ((function (cs,vec__26090,v,c,inst_26095,inst_26096,inst_26094,inst_26085,state_val_26116,c__24338__auto___27907,out){
return (function (p1__26077_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26077_SHARP_);
});
;})(cs,vec__26090,v,c,inst_26095,inst_26096,inst_26094,inst_26085,state_val_26116,c__24338__auto___27907,out))
})();
var inst_26100 = cljs.core.filterv(inst_26099,inst_26085);
var inst_26085__$1 = inst_26100;
var state_26115__$1 = (function (){var statearr_26143 = state_26115;
(statearr_26143[(10)] = inst_26085__$1);

return statearr_26143;
})();
var statearr_26145_27933 = state_26115__$1;
(statearr_26145_27933[(2)] = null);

(statearr_26145_27933[(1)] = (2));


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
});})(c__24338__auto___27907,out))
;
return ((function (switch__24084__auto__,c__24338__auto___27907,out){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_26146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26146[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_26146[(1)] = (1));

return statearr_26146;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_26115){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_26115);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e26147){if((e26147 instanceof Object)){
var ex__24088__auto__ = e26147;
var statearr_26148_27934 = state_26115;
(statearr_26148_27934[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27935 = state_26115;
state_26115 = G__27935;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_26115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_26115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___27907,out))
})();
var state__24340__auto__ = (function (){var statearr_26149 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_26149[(6)] = c__24338__auto___27907);

return statearr_26149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___27907,out))
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
var G__26157 = arguments.length;
switch (G__26157) {
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
var c__24338__auto___27937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___27937,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___27937,out){
return (function (state_26188){
var state_val_26189 = (state_26188[(1)]);
if((state_val_26189 === (7))){
var inst_26170 = (state_26188[(7)]);
var inst_26170__$1 = (state_26188[(2)]);
var inst_26171 = (inst_26170__$1 == null);
var inst_26172 = cljs.core.not(inst_26171);
var state_26188__$1 = (function (){var statearr_26196 = state_26188;
(statearr_26196[(7)] = inst_26170__$1);

return statearr_26196;
})();
if(inst_26172){
var statearr_26197_27938 = state_26188__$1;
(statearr_26197_27938[(1)] = (8));

} else {
var statearr_26198_27939 = state_26188__$1;
(statearr_26198_27939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (1))){
var inst_26165 = (0);
var state_26188__$1 = (function (){var statearr_26199 = state_26188;
(statearr_26199[(8)] = inst_26165);

return statearr_26199;
})();
var statearr_26200_27940 = state_26188__$1;
(statearr_26200_27940[(2)] = null);

(statearr_26200_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (4))){
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26188__$1,(7),ch);
} else {
if((state_val_26189 === (6))){
var inst_26183 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
var statearr_26201_27941 = state_26188__$1;
(statearr_26201_27941[(2)] = inst_26183);

(statearr_26201_27941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (3))){
var inst_26185 = (state_26188[(2)]);
var inst_26186 = cljs.core.async.close_BANG_(out);
var state_26188__$1 = (function (){var statearr_26206 = state_26188;
(statearr_26206[(9)] = inst_26185);

return statearr_26206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26188__$1,inst_26186);
} else {
if((state_val_26189 === (2))){
var inst_26165 = (state_26188[(8)]);
var inst_26167 = (inst_26165 < n);
var state_26188__$1 = state_26188;
if(cljs.core.truth_(inst_26167)){
var statearr_26211_27942 = state_26188__$1;
(statearr_26211_27942[(1)] = (4));

} else {
var statearr_26212_27943 = state_26188__$1;
(statearr_26212_27943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (11))){
var inst_26165 = (state_26188[(8)]);
var inst_26175 = (state_26188[(2)]);
var inst_26176 = (inst_26165 + (1));
var inst_26165__$1 = inst_26176;
var state_26188__$1 = (function (){var statearr_26233 = state_26188;
(statearr_26233[(8)] = inst_26165__$1);

(statearr_26233[(10)] = inst_26175);

return statearr_26233;
})();
var statearr_26234_27945 = state_26188__$1;
(statearr_26234_27945[(2)] = null);

(statearr_26234_27945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (9))){
var state_26188__$1 = state_26188;
var statearr_26239_27946 = state_26188__$1;
(statearr_26239_27946[(2)] = null);

(statearr_26239_27946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (5))){
var state_26188__$1 = state_26188;
var statearr_26244_27947 = state_26188__$1;
(statearr_26244_27947[(2)] = null);

(statearr_26244_27947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (10))){
var inst_26180 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
var statearr_26245_27949 = state_26188__$1;
(statearr_26245_27949[(2)] = inst_26180);

(statearr_26245_27949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (8))){
var inst_26170 = (state_26188[(7)]);
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26188__$1,(11),out,inst_26170);
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
});})(c__24338__auto___27937,out))
;
return ((function (switch__24084__auto__,c__24338__auto___27937,out){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_26250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26250[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_26250[(1)] = (1));

return statearr_26250;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_26188){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_26188);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e26251){if((e26251 instanceof Object)){
var ex__24088__auto__ = e26251;
var statearr_26252_27951 = state_26188;
(statearr_26252_27951[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27953 = state_26188;
state_26188 = G__27953;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_26188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_26188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___27937,out))
})();
var state__24340__auto__ = (function (){var statearr_26258 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_26258[(6)] = c__24338__auto___27937);

return statearr_26258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___27937,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26260 = (function (f,ch,meta26261){
this.f = f;
this.ch = ch;
this.meta26261 = meta26261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26262,meta26261__$1){
var self__ = this;
var _26262__$1 = this;
return (new cljs.core.async.t_cljs$core$async26260(self__.f,self__.ch,meta26261__$1));
});

cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26262){
var self__ = this;
var _26262__$1 = this;
return self__.meta26261;
});

cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26268 = (function (f,ch,meta26261,_,fn1,meta26269){
this.f = f;
this.ch = ch;
this.meta26261 = meta26261;
this._ = _;
this.fn1 = fn1;
this.meta26269 = meta26269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26270,meta26269__$1){
var self__ = this;
var _26270__$1 = this;
return (new cljs.core.async.t_cljs$core$async26268(self__.f,self__.ch,self__.meta26261,self__._,self__.fn1,meta26269__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26270){
var self__ = this;
var _26270__$1 = this;
return self__.meta26269;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26259_SHARP_){
var G__26280 = (((p1__26259_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26259_SHARP_) : self__.f.call(null,p1__26259_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26280) : f1.call(null,G__26280));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26268.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26261","meta26261",-1729764438,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26260","cljs.core.async/t_cljs$core$async26260",806570273,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26269","meta26269",788299856,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26268";

cljs.core.async.t_cljs$core$async26268.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26268");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26268.
 */
cljs.core.async.__GT_t_cljs$core$async26268 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26268(f__$1,ch__$1,meta26261__$1,___$2,fn1__$1,meta26269){
return (new cljs.core.async.t_cljs$core$async26268(f__$1,ch__$1,meta26261__$1,___$2,fn1__$1,meta26269));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26268(self__.f,self__.ch,self__.meta26261,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26287 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26287) : self__.f.call(null,G__26287));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26261","meta26261",-1729764438,null)], null);
});

cljs.core.async.t_cljs$core$async26260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26260";

cljs.core.async.t_cljs$core$async26260.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26260");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26260.
 */
cljs.core.async.__GT_t_cljs$core$async26260 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26260(f__$1,ch__$1,meta26261){
return (new cljs.core.async.t_cljs$core$async26260(f__$1,ch__$1,meta26261));
});

}

return (new cljs.core.async.t_cljs$core$async26260(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26290 = (function (f,ch,meta26291){
this.f = f;
this.ch = ch;
this.meta26291 = meta26291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26292,meta26291__$1){
var self__ = this;
var _26292__$1 = this;
return (new cljs.core.async.t_cljs$core$async26290(self__.f,self__.ch,meta26291__$1));
});

cljs.core.async.t_cljs$core$async26290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26292){
var self__ = this;
var _26292__$1 = this;
return self__.meta26291;
});

cljs.core.async.t_cljs$core$async26290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async26290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26291","meta26291",1396036119,null)], null);
});

cljs.core.async.t_cljs$core$async26290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26290";

cljs.core.async.t_cljs$core$async26290.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26290");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26290.
 */
cljs.core.async.__GT_t_cljs$core$async26290 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26290(f__$1,ch__$1,meta26291){
return (new cljs.core.async.t_cljs$core$async26290(f__$1,ch__$1,meta26291));
});

}

return (new cljs.core.async.t_cljs$core$async26290(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26310 = (function (p,ch,meta26311){
this.p = p;
this.ch = ch;
this.meta26311 = meta26311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26312,meta26311__$1){
var self__ = this;
var _26312__$1 = this;
return (new cljs.core.async.t_cljs$core$async26310(self__.p,self__.ch,meta26311__$1));
});

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26312){
var self__ = this;
var _26312__$1 = this;
return self__.meta26311;
});

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26311","meta26311",1900041957,null)], null);
});

cljs.core.async.t_cljs$core$async26310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26310";

cljs.core.async.t_cljs$core$async26310.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26310");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26310.
 */
cljs.core.async.__GT_t_cljs$core$async26310 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26310(p__$1,ch__$1,meta26311){
return (new cljs.core.async.t_cljs$core$async26310(p__$1,ch__$1,meta26311));
});

}

return (new cljs.core.async.t_cljs$core$async26310(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26326 = arguments.length;
switch (G__26326) {
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
var c__24338__auto___27982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___27982,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___27982,out){
return (function (state_26351){
var state_val_26352 = (state_26351[(1)]);
if((state_val_26352 === (7))){
var inst_26347 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
var statearr_26353_27987 = state_26351__$1;
(statearr_26353_27987[(2)] = inst_26347);

(statearr_26353_27987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (1))){
var state_26351__$1 = state_26351;
var statearr_26355_27988 = state_26351__$1;
(statearr_26355_27988[(2)] = null);

(statearr_26355_27988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (4))){
var inst_26333 = (state_26351[(7)]);
var inst_26333__$1 = (state_26351[(2)]);
var inst_26334 = (inst_26333__$1 == null);
var state_26351__$1 = (function (){var statearr_26356 = state_26351;
(statearr_26356[(7)] = inst_26333__$1);

return statearr_26356;
})();
if(cljs.core.truth_(inst_26334)){
var statearr_26357_27993 = state_26351__$1;
(statearr_26357_27993[(1)] = (5));

} else {
var statearr_26358_27994 = state_26351__$1;
(statearr_26358_27994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (6))){
var inst_26333 = (state_26351[(7)]);
var inst_26338 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26333) : p.call(null,inst_26333));
var state_26351__$1 = state_26351;
if(cljs.core.truth_(inst_26338)){
var statearr_26359_27995 = state_26351__$1;
(statearr_26359_27995[(1)] = (8));

} else {
var statearr_26360_27996 = state_26351__$1;
(statearr_26360_27996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (3))){
var inst_26349 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26351__$1,inst_26349);
} else {
if((state_val_26352 === (2))){
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26351__$1,(4),ch);
} else {
if((state_val_26352 === (11))){
var inst_26341 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
var statearr_26361_28004 = state_26351__$1;
(statearr_26361_28004[(2)] = inst_26341);

(statearr_26361_28004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (9))){
var state_26351__$1 = state_26351;
var statearr_26362_28005 = state_26351__$1;
(statearr_26362_28005[(2)] = null);

(statearr_26362_28005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (5))){
var inst_26336 = cljs.core.async.close_BANG_(out);
var state_26351__$1 = state_26351;
var statearr_26367_28010 = state_26351__$1;
(statearr_26367_28010[(2)] = inst_26336);

(statearr_26367_28010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (10))){
var inst_26344 = (state_26351[(2)]);
var state_26351__$1 = (function (){var statearr_26368 = state_26351;
(statearr_26368[(8)] = inst_26344);

return statearr_26368;
})();
var statearr_26369_28011 = state_26351__$1;
(statearr_26369_28011[(2)] = null);

(statearr_26369_28011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (8))){
var inst_26333 = (state_26351[(7)]);
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26351__$1,(11),out,inst_26333);
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
});})(c__24338__auto___27982,out))
;
return ((function (switch__24084__auto__,c__24338__auto___27982,out){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_26374 = [null,null,null,null,null,null,null,null,null];
(statearr_26374[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_26374[(1)] = (1));

return statearr_26374;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_26351){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_26351);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e26375){if((e26375 instanceof Object)){
var ex__24088__auto__ = e26375;
var statearr_26376_28022 = state_26351;
(statearr_26376_28022[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28023 = state_26351;
state_26351 = G__28023;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_26351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_26351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___27982,out))
})();
var state__24340__auto__ = (function (){var statearr_26377 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_26377[(6)] = c__24338__auto___27982);

return statearr_26377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___27982,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26381 = arguments.length;
switch (G__26381) {
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
var c__24338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto__){
return (function (state_26443){
var state_val_26444 = (state_26443[(1)]);
if((state_val_26444 === (7))){
var inst_26439 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26447_28026 = state_26443__$1;
(statearr_26447_28026[(2)] = inst_26439);

(statearr_26447_28026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (20))){
var inst_26409 = (state_26443[(7)]);
var inst_26420 = (state_26443[(2)]);
var inst_26421 = cljs.core.next(inst_26409);
var inst_26395 = inst_26421;
var inst_26396 = null;
var inst_26397 = (0);
var inst_26398 = (0);
var state_26443__$1 = (function (){var statearr_26448 = state_26443;
(statearr_26448[(8)] = inst_26398);

(statearr_26448[(9)] = inst_26420);

(statearr_26448[(10)] = inst_26397);

(statearr_26448[(11)] = inst_26396);

(statearr_26448[(12)] = inst_26395);

return statearr_26448;
})();
var statearr_26449_28027 = state_26443__$1;
(statearr_26449_28027[(2)] = null);

(statearr_26449_28027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (1))){
var state_26443__$1 = state_26443;
var statearr_26450_28028 = state_26443__$1;
(statearr_26450_28028[(2)] = null);

(statearr_26450_28028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (4))){
var inst_26384 = (state_26443[(13)]);
var inst_26384__$1 = (state_26443[(2)]);
var inst_26385 = (inst_26384__$1 == null);
var state_26443__$1 = (function (){var statearr_26451 = state_26443;
(statearr_26451[(13)] = inst_26384__$1);

return statearr_26451;
})();
if(cljs.core.truth_(inst_26385)){
var statearr_26455_28029 = state_26443__$1;
(statearr_26455_28029[(1)] = (5));

} else {
var statearr_26456_28030 = state_26443__$1;
(statearr_26456_28030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (15))){
var state_26443__$1 = state_26443;
var statearr_26461_28031 = state_26443__$1;
(statearr_26461_28031[(2)] = null);

(statearr_26461_28031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (21))){
var state_26443__$1 = state_26443;
var statearr_26462_28032 = state_26443__$1;
(statearr_26462_28032[(2)] = null);

(statearr_26462_28032[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (13))){
var inst_26398 = (state_26443[(8)]);
var inst_26397 = (state_26443[(10)]);
var inst_26396 = (state_26443[(11)]);
var inst_26395 = (state_26443[(12)]);
var inst_26405 = (state_26443[(2)]);
var inst_26406 = (inst_26398 + (1));
var tmp26458 = inst_26397;
var tmp26459 = inst_26396;
var tmp26460 = inst_26395;
var inst_26395__$1 = tmp26460;
var inst_26396__$1 = tmp26459;
var inst_26397__$1 = tmp26458;
var inst_26398__$1 = inst_26406;
var state_26443__$1 = (function (){var statearr_26464 = state_26443;
(statearr_26464[(8)] = inst_26398__$1);

(statearr_26464[(10)] = inst_26397__$1);

(statearr_26464[(11)] = inst_26396__$1);

(statearr_26464[(14)] = inst_26405);

(statearr_26464[(12)] = inst_26395__$1);

return statearr_26464;
})();
var statearr_26465_28034 = state_26443__$1;
(statearr_26465_28034[(2)] = null);

(statearr_26465_28034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (22))){
var state_26443__$1 = state_26443;
var statearr_26467_28036 = state_26443__$1;
(statearr_26467_28036[(2)] = null);

(statearr_26467_28036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (6))){
var inst_26384 = (state_26443[(13)]);
var inst_26393 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26384) : f.call(null,inst_26384));
var inst_26394 = cljs.core.seq(inst_26393);
var inst_26395 = inst_26394;
var inst_26396 = null;
var inst_26397 = (0);
var inst_26398 = (0);
var state_26443__$1 = (function (){var statearr_26468 = state_26443;
(statearr_26468[(8)] = inst_26398);

(statearr_26468[(10)] = inst_26397);

(statearr_26468[(11)] = inst_26396);

(statearr_26468[(12)] = inst_26395);

return statearr_26468;
})();
var statearr_26469_28037 = state_26443__$1;
(statearr_26469_28037[(2)] = null);

(statearr_26469_28037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (17))){
var inst_26409 = (state_26443[(7)]);
var inst_26413 = cljs.core.chunk_first(inst_26409);
var inst_26414 = cljs.core.chunk_rest(inst_26409);
var inst_26415 = cljs.core.count(inst_26413);
var inst_26395 = inst_26414;
var inst_26396 = inst_26413;
var inst_26397 = inst_26415;
var inst_26398 = (0);
var state_26443__$1 = (function (){var statearr_26470 = state_26443;
(statearr_26470[(8)] = inst_26398);

(statearr_26470[(10)] = inst_26397);

(statearr_26470[(11)] = inst_26396);

(statearr_26470[(12)] = inst_26395);

return statearr_26470;
})();
var statearr_26471_28039 = state_26443__$1;
(statearr_26471_28039[(2)] = null);

(statearr_26471_28039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (3))){
var inst_26441 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26443__$1,inst_26441);
} else {
if((state_val_26444 === (12))){
var inst_26429 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26473_28040 = state_26443__$1;
(statearr_26473_28040[(2)] = inst_26429);

(statearr_26473_28040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (2))){
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26443__$1,(4),in$);
} else {
if((state_val_26444 === (23))){
var inst_26437 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26475_28041 = state_26443__$1;
(statearr_26475_28041[(2)] = inst_26437);

(statearr_26475_28041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (19))){
var inst_26424 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26476_28042 = state_26443__$1;
(statearr_26476_28042[(2)] = inst_26424);

(statearr_26476_28042[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (11))){
var inst_26409 = (state_26443[(7)]);
var inst_26395 = (state_26443[(12)]);
var inst_26409__$1 = cljs.core.seq(inst_26395);
var state_26443__$1 = (function (){var statearr_26477 = state_26443;
(statearr_26477[(7)] = inst_26409__$1);

return statearr_26477;
})();
if(inst_26409__$1){
var statearr_26478_28049 = state_26443__$1;
(statearr_26478_28049[(1)] = (14));

} else {
var statearr_26479_28054 = state_26443__$1;
(statearr_26479_28054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (9))){
var inst_26431 = (state_26443[(2)]);
var inst_26432 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26443__$1 = (function (){var statearr_26480 = state_26443;
(statearr_26480[(15)] = inst_26431);

return statearr_26480;
})();
if(cljs.core.truth_(inst_26432)){
var statearr_26481_28056 = state_26443__$1;
(statearr_26481_28056[(1)] = (21));

} else {
var statearr_26482_28061 = state_26443__$1;
(statearr_26482_28061[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (5))){
var inst_26387 = cljs.core.async.close_BANG_(out);
var state_26443__$1 = state_26443;
var statearr_26483_28067 = state_26443__$1;
(statearr_26483_28067[(2)] = inst_26387);

(statearr_26483_28067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (14))){
var inst_26409 = (state_26443[(7)]);
var inst_26411 = cljs.core.chunked_seq_QMARK_(inst_26409);
var state_26443__$1 = state_26443;
if(inst_26411){
var statearr_26484_28074 = state_26443__$1;
(statearr_26484_28074[(1)] = (17));

} else {
var statearr_26485_28076 = state_26443__$1;
(statearr_26485_28076[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (16))){
var inst_26427 = (state_26443[(2)]);
var state_26443__$1 = state_26443;
var statearr_26486_28085 = state_26443__$1;
(statearr_26486_28085[(2)] = inst_26427);

(statearr_26486_28085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26444 === (10))){
var inst_26398 = (state_26443[(8)]);
var inst_26396 = (state_26443[(11)]);
var inst_26403 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26396,inst_26398);
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26443__$1,(13),out,inst_26403);
} else {
if((state_val_26444 === (18))){
var inst_26409 = (state_26443[(7)]);
var inst_26418 = cljs.core.first(inst_26409);
var state_26443__$1 = state_26443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26443__$1,(20),out,inst_26418);
} else {
if((state_val_26444 === (8))){
var inst_26398 = (state_26443[(8)]);
var inst_26397 = (state_26443[(10)]);
var inst_26400 = (inst_26398 < inst_26397);
var inst_26401 = inst_26400;
var state_26443__$1 = state_26443;
if(cljs.core.truth_(inst_26401)){
var statearr_26488_28099 = state_26443__$1;
(statearr_26488_28099[(1)] = (10));

} else {
var statearr_26493_28104 = state_26443__$1;
(statearr_26493_28104[(1)] = (11));

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
});})(c__24338__auto__))
;
return ((function (switch__24084__auto__,c__24338__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24085__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24085__auto____0 = (function (){
var statearr_26494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26494[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24085__auto__);

(statearr_26494[(1)] = (1));

return statearr_26494;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24085__auto____1 = (function (state_26443){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_26443);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e26495){if((e26495 instanceof Object)){
var ex__24088__auto__ = e26495;
var statearr_26496_28117 = state_26443;
(statearr_26496_28117[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28123 = state_26443;
state_26443 = G__28123;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24085__auto__ = function(state_26443){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24085__auto____1.call(this,state_26443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24085__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24085__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_26502 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_26502[(6)] = c__24338__auto__);

return statearr_26502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26508 = arguments.length;
switch (G__26508) {
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
var G__26513 = arguments.length;
switch (G__26513) {
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
var G__26523 = arguments.length;
switch (G__26523) {
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
var c__24338__auto___28145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___28145,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___28145,out){
return (function (state_26553){
var state_val_26554 = (state_26553[(1)]);
if((state_val_26554 === (7))){
var inst_26548 = (state_26553[(2)]);
var state_26553__$1 = state_26553;
var statearr_26555_28150 = state_26553__$1;
(statearr_26555_28150[(2)] = inst_26548);

(statearr_26555_28150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (1))){
var inst_26527 = null;
var state_26553__$1 = (function (){var statearr_26556 = state_26553;
(statearr_26556[(7)] = inst_26527);

return statearr_26556;
})();
var statearr_26557_28155 = state_26553__$1;
(statearr_26557_28155[(2)] = null);

(statearr_26557_28155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (4))){
var inst_26532 = (state_26553[(8)]);
var inst_26532__$1 = (state_26553[(2)]);
var inst_26533 = (inst_26532__$1 == null);
var inst_26535 = cljs.core.not(inst_26533);
var state_26553__$1 = (function (){var statearr_26559 = state_26553;
(statearr_26559[(8)] = inst_26532__$1);

return statearr_26559;
})();
if(inst_26535){
var statearr_26560_28157 = state_26553__$1;
(statearr_26560_28157[(1)] = (5));

} else {
var statearr_26561_28158 = state_26553__$1;
(statearr_26561_28158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (6))){
var state_26553__$1 = state_26553;
var statearr_26564_28159 = state_26553__$1;
(statearr_26564_28159[(2)] = null);

(statearr_26564_28159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (3))){
var inst_26550 = (state_26553[(2)]);
var inst_26551 = cljs.core.async.close_BANG_(out);
var state_26553__$1 = (function (){var statearr_26566 = state_26553;
(statearr_26566[(9)] = inst_26550);

return statearr_26566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26553__$1,inst_26551);
} else {
if((state_val_26554 === (2))){
var state_26553__$1 = state_26553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26553__$1,(4),ch);
} else {
if((state_val_26554 === (11))){
var inst_26532 = (state_26553[(8)]);
var inst_26542 = (state_26553[(2)]);
var inst_26527 = inst_26532;
var state_26553__$1 = (function (){var statearr_26569 = state_26553;
(statearr_26569[(10)] = inst_26542);

(statearr_26569[(7)] = inst_26527);

return statearr_26569;
})();
var statearr_26570_28161 = state_26553__$1;
(statearr_26570_28161[(2)] = null);

(statearr_26570_28161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (9))){
var inst_26532 = (state_26553[(8)]);
var state_26553__$1 = state_26553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26553__$1,(11),out,inst_26532);
} else {
if((state_val_26554 === (5))){
var inst_26527 = (state_26553[(7)]);
var inst_26532 = (state_26553[(8)]);
var inst_26537 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26532,inst_26527);
var state_26553__$1 = state_26553;
if(inst_26537){
var statearr_26572_28163 = state_26553__$1;
(statearr_26572_28163[(1)] = (8));

} else {
var statearr_26573_28164 = state_26553__$1;
(statearr_26573_28164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (10))){
var inst_26545 = (state_26553[(2)]);
var state_26553__$1 = state_26553;
var statearr_26574_28165 = state_26553__$1;
(statearr_26574_28165[(2)] = inst_26545);

(statearr_26574_28165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (8))){
var inst_26527 = (state_26553[(7)]);
var tmp26571 = inst_26527;
var inst_26527__$1 = tmp26571;
var state_26553__$1 = (function (){var statearr_26575 = state_26553;
(statearr_26575[(7)] = inst_26527__$1);

return statearr_26575;
})();
var statearr_26577_28166 = state_26553__$1;
(statearr_26577_28166[(2)] = null);

(statearr_26577_28166[(1)] = (2));


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
});})(c__24338__auto___28145,out))
;
return ((function (switch__24084__auto__,c__24338__auto___28145,out){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_26580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26580[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_26580[(1)] = (1));

return statearr_26580;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_26553){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_26553);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e26581){if((e26581 instanceof Object)){
var ex__24088__auto__ = e26581;
var statearr_26584_28169 = state_26553;
(statearr_26584_28169[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28171 = state_26553;
state_26553 = G__28171;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_26553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_26553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___28145,out))
})();
var state__24340__auto__ = (function (){var statearr_26585 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_26585[(6)] = c__24338__auto___28145);

return statearr_26585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___28145,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26589 = arguments.length;
switch (G__26589) {
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
var c__24338__auto___28195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___28195,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___28195,out){
return (function (state_26630){
var state_val_26631 = (state_26630[(1)]);
if((state_val_26631 === (7))){
var inst_26626 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26632_28197 = state_26630__$1;
(statearr_26632_28197[(2)] = inst_26626);

(statearr_26632_28197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (1))){
var inst_26593 = (new Array(n));
var inst_26594 = inst_26593;
var inst_26595 = (0);
var state_26630__$1 = (function (){var statearr_26633 = state_26630;
(statearr_26633[(7)] = inst_26595);

(statearr_26633[(8)] = inst_26594);

return statearr_26633;
})();
var statearr_26634_28205 = state_26630__$1;
(statearr_26634_28205[(2)] = null);

(statearr_26634_28205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (4))){
var inst_26598 = (state_26630[(9)]);
var inst_26598__$1 = (state_26630[(2)]);
var inst_26599 = (inst_26598__$1 == null);
var inst_26600 = cljs.core.not(inst_26599);
var state_26630__$1 = (function (){var statearr_26635 = state_26630;
(statearr_26635[(9)] = inst_26598__$1);

return statearr_26635;
})();
if(inst_26600){
var statearr_26636_28213 = state_26630__$1;
(statearr_26636_28213[(1)] = (5));

} else {
var statearr_26637_28218 = state_26630__$1;
(statearr_26637_28218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (15))){
var inst_26620 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26638_28222 = state_26630__$1;
(statearr_26638_28222[(2)] = inst_26620);

(statearr_26638_28222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (13))){
var state_26630__$1 = state_26630;
var statearr_26639_28227 = state_26630__$1;
(statearr_26639_28227[(2)] = null);

(statearr_26639_28227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (6))){
var inst_26595 = (state_26630[(7)]);
var inst_26616 = (inst_26595 > (0));
var state_26630__$1 = state_26630;
if(cljs.core.truth_(inst_26616)){
var statearr_26640_28228 = state_26630__$1;
(statearr_26640_28228[(1)] = (12));

} else {
var statearr_26641_28229 = state_26630__$1;
(statearr_26641_28229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (3))){
var inst_26628 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26630__$1,inst_26628);
} else {
if((state_val_26631 === (12))){
var inst_26594 = (state_26630[(8)]);
var inst_26618 = cljs.core.vec(inst_26594);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26630__$1,(15),out,inst_26618);
} else {
if((state_val_26631 === (2))){
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26630__$1,(4),ch);
} else {
if((state_val_26631 === (11))){
var inst_26610 = (state_26630[(2)]);
var inst_26611 = (new Array(n));
var inst_26594 = inst_26611;
var inst_26595 = (0);
var state_26630__$1 = (function (){var statearr_26650 = state_26630;
(statearr_26650[(7)] = inst_26595);

(statearr_26650[(8)] = inst_26594);

(statearr_26650[(10)] = inst_26610);

return statearr_26650;
})();
var statearr_26653_28231 = state_26630__$1;
(statearr_26653_28231[(2)] = null);

(statearr_26653_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (9))){
var inst_26594 = (state_26630[(8)]);
var inst_26608 = cljs.core.vec(inst_26594);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26630__$1,(11),out,inst_26608);
} else {
if((state_val_26631 === (5))){
var inst_26603 = (state_26630[(11)]);
var inst_26595 = (state_26630[(7)]);
var inst_26594 = (state_26630[(8)]);
var inst_26598 = (state_26630[(9)]);
var inst_26602 = (inst_26594[inst_26595] = inst_26598);
var inst_26603__$1 = (inst_26595 + (1));
var inst_26604 = (inst_26603__$1 < n);
var state_26630__$1 = (function (){var statearr_26656 = state_26630;
(statearr_26656[(11)] = inst_26603__$1);

(statearr_26656[(12)] = inst_26602);

return statearr_26656;
})();
if(cljs.core.truth_(inst_26604)){
var statearr_26658_28232 = state_26630__$1;
(statearr_26658_28232[(1)] = (8));

} else {
var statearr_26659_28233 = state_26630__$1;
(statearr_26659_28233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (14))){
var inst_26623 = (state_26630[(2)]);
var inst_26624 = cljs.core.async.close_BANG_(out);
var state_26630__$1 = (function (){var statearr_26661 = state_26630;
(statearr_26661[(13)] = inst_26623);

return statearr_26661;
})();
var statearr_26662_28234 = state_26630__$1;
(statearr_26662_28234[(2)] = inst_26624);

(statearr_26662_28234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (10))){
var inst_26614 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26667_28235 = state_26630__$1;
(statearr_26667_28235[(2)] = inst_26614);

(statearr_26667_28235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (8))){
var inst_26603 = (state_26630[(11)]);
var inst_26594 = (state_26630[(8)]);
var tmp26660 = inst_26594;
var inst_26594__$1 = tmp26660;
var inst_26595 = inst_26603;
var state_26630__$1 = (function (){var statearr_26672 = state_26630;
(statearr_26672[(7)] = inst_26595);

(statearr_26672[(8)] = inst_26594__$1);

return statearr_26672;
})();
var statearr_26673_28236 = state_26630__$1;
(statearr_26673_28236[(2)] = null);

(statearr_26673_28236[(1)] = (2));


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
});})(c__24338__auto___28195,out))
;
return ((function (switch__24084__auto__,c__24338__auto___28195,out){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_26678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26678[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_26678[(1)] = (1));

return statearr_26678;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_26630){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_26630);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e26679){if((e26679 instanceof Object)){
var ex__24088__auto__ = e26679;
var statearr_26680_28237 = state_26630;
(statearr_26680_28237[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28238 = state_26630;
state_26630 = G__28238;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_26630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_26630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___28195,out))
})();
var state__24340__auto__ = (function (){var statearr_26681 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_26681[(6)] = c__24338__auto___28195);

return statearr_26681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___28195,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26689 = arguments.length;
switch (G__26689) {
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
var c__24338__auto___28241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24338__auto___28241,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24084__auto__ = ((function (c__24338__auto___28241,out){
return (function (state_26739){
var state_val_26740 = (state_26739[(1)]);
if((state_val_26740 === (7))){
var inst_26735 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26741_28242 = state_26739__$1;
(statearr_26741_28242[(2)] = inst_26735);

(statearr_26741_28242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (1))){
var inst_26697 = [];
var inst_26698 = inst_26697;
var inst_26699 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26739__$1 = (function (){var statearr_26742 = state_26739;
(statearr_26742[(7)] = inst_26698);

(statearr_26742[(8)] = inst_26699);

return statearr_26742;
})();
var statearr_26743_28247 = state_26739__$1;
(statearr_26743_28247[(2)] = null);

(statearr_26743_28247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (4))){
var inst_26702 = (state_26739[(9)]);
var inst_26702__$1 = (state_26739[(2)]);
var inst_26703 = (inst_26702__$1 == null);
var inst_26704 = cljs.core.not(inst_26703);
var state_26739__$1 = (function (){var statearr_26744 = state_26739;
(statearr_26744[(9)] = inst_26702__$1);

return statearr_26744;
})();
if(inst_26704){
var statearr_26745_28256 = state_26739__$1;
(statearr_26745_28256[(1)] = (5));

} else {
var statearr_26750_28257 = state_26739__$1;
(statearr_26750_28257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (15))){
var inst_26729 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26755_28258 = state_26739__$1;
(statearr_26755_28258[(2)] = inst_26729);

(statearr_26755_28258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (13))){
var state_26739__$1 = state_26739;
var statearr_26760_28259 = state_26739__$1;
(statearr_26760_28259[(2)] = null);

(statearr_26760_28259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (6))){
var inst_26698 = (state_26739[(7)]);
var inst_26724 = inst_26698.length;
var inst_26725 = (inst_26724 > (0));
var state_26739__$1 = state_26739;
if(cljs.core.truth_(inst_26725)){
var statearr_26761_28261 = state_26739__$1;
(statearr_26761_28261[(1)] = (12));

} else {
var statearr_26762_28262 = state_26739__$1;
(statearr_26762_28262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (3))){
var inst_26737 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26739__$1,inst_26737);
} else {
if((state_val_26740 === (12))){
var inst_26698 = (state_26739[(7)]);
var inst_26727 = cljs.core.vec(inst_26698);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26739__$1,(15),out,inst_26727);
} else {
if((state_val_26740 === (2))){
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26739__$1,(4),ch);
} else {
if((state_val_26740 === (11))){
var inst_26702 = (state_26739[(9)]);
var inst_26706 = (state_26739[(10)]);
var inst_26717 = (state_26739[(2)]);
var inst_26718 = [];
var inst_26719 = inst_26718.push(inst_26702);
var inst_26698 = inst_26718;
var inst_26699 = inst_26706;
var state_26739__$1 = (function (){var statearr_26764 = state_26739;
(statearr_26764[(11)] = inst_26717);

(statearr_26764[(7)] = inst_26698);

(statearr_26764[(8)] = inst_26699);

(statearr_26764[(12)] = inst_26719);

return statearr_26764;
})();
var statearr_26767_28265 = state_26739__$1;
(statearr_26767_28265[(2)] = null);

(statearr_26767_28265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (9))){
var inst_26698 = (state_26739[(7)]);
var inst_26715 = cljs.core.vec(inst_26698);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26739__$1,(11),out,inst_26715);
} else {
if((state_val_26740 === (5))){
var inst_26702 = (state_26739[(9)]);
var inst_26699 = (state_26739[(8)]);
var inst_26706 = (state_26739[(10)]);
var inst_26706__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26702) : f.call(null,inst_26702));
var inst_26707 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26706__$1,inst_26699);
var inst_26708 = cljs.core.keyword_identical_QMARK_(inst_26699,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26709 = ((inst_26707) || (inst_26708));
var state_26739__$1 = (function (){var statearr_26771 = state_26739;
(statearr_26771[(10)] = inst_26706__$1);

return statearr_26771;
})();
if(cljs.core.truth_(inst_26709)){
var statearr_26772_28267 = state_26739__$1;
(statearr_26772_28267[(1)] = (8));

} else {
var statearr_26774_28268 = state_26739__$1;
(statearr_26774_28268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (14))){
var inst_26732 = (state_26739[(2)]);
var inst_26733 = cljs.core.async.close_BANG_(out);
var state_26739__$1 = (function (){var statearr_26776 = state_26739;
(statearr_26776[(13)] = inst_26732);

return statearr_26776;
})();
var statearr_26777_28269 = state_26739__$1;
(statearr_26777_28269[(2)] = inst_26733);

(statearr_26777_28269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (10))){
var inst_26722 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26779_28270 = state_26739__$1;
(statearr_26779_28270[(2)] = inst_26722);

(statearr_26779_28270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (8))){
var inst_26698 = (state_26739[(7)]);
var inst_26702 = (state_26739[(9)]);
var inst_26706 = (state_26739[(10)]);
var inst_26712 = inst_26698.push(inst_26702);
var tmp26775 = inst_26698;
var inst_26698__$1 = tmp26775;
var inst_26699 = inst_26706;
var state_26739__$1 = (function (){var statearr_26782 = state_26739;
(statearr_26782[(14)] = inst_26712);

(statearr_26782[(7)] = inst_26698__$1);

(statearr_26782[(8)] = inst_26699);

return statearr_26782;
})();
var statearr_26783_28271 = state_26739__$1;
(statearr_26783_28271[(2)] = null);

(statearr_26783_28271[(1)] = (2));


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
});})(c__24338__auto___28241,out))
;
return ((function (switch__24084__auto__,c__24338__auto___28241,out){
return (function() {
var cljs$core$async$state_machine__24085__auto__ = null;
var cljs$core$async$state_machine__24085__auto____0 = (function (){
var statearr_26784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26784[(0)] = cljs$core$async$state_machine__24085__auto__);

(statearr_26784[(1)] = (1));

return statearr_26784;
});
var cljs$core$async$state_machine__24085__auto____1 = (function (state_26739){
while(true){
var ret_value__24086__auto__ = (function (){try{while(true){
var result__24087__auto__ = switch__24084__auto__(state_26739);
if(cljs.core.keyword_identical_QMARK_(result__24087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24087__auto__;
}
break;
}
}catch (e26787){if((e26787 instanceof Object)){
var ex__24088__auto__ = e26787;
var statearr_26789_28272 = state_26739;
(statearr_26789_28272[(5)] = ex__24088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28273 = state_26739;
state_26739 = G__28273;
continue;
} else {
return ret_value__24086__auto__;
}
break;
}
});
cljs$core$async$state_machine__24085__auto__ = function(state_26739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24085__auto____1.call(this,state_26739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24085__auto____0;
cljs$core$async$state_machine__24085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24085__auto____1;
return cljs$core$async$state_machine__24085__auto__;
})()
;})(switch__24084__auto__,c__24338__auto___28241,out))
})();
var state__24340__auto__ = (function (){var statearr_26792 = (f__24339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24339__auto__.cljs$core$IFn$_invoke$arity$0() : f__24339__auto__.call(null));
(statearr_26792[(6)] = c__24338__auto___28241);

return statearr_26792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24340__auto__);
});})(c__24338__auto___28241,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
