function jC(n,e){for(var a=0;a<e.length;a++){const i=e[a];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const c=Object.getOwnPropertyDescriptor(i,o);c&&Object.defineProperty(n,o,c.get?c:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();function n4(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bh={exports:{}},Fo={};var c0;function VC(){if(c0)return Fo;c0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(i,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:n,type:i,key:u,ref:o!==void 0?o:null,props:c}}return Fo.Fragment=e,Fo.jsx=a,Fo.jsxs=a,Fo}var u0;function GC(){return u0||(u0=1,bh.exports=VC()),bh.exports}var g=GC(),xh={exports:{}},Ho={},Sh={exports:{}},Mh={};var d0;function FC(){return d0||(d0=1,(function(n){function e(_,U){var V=_.length;_.push(U);e:for(;0<V;){var fe=V-1>>>1,be=_[fe];if(0<o(be,U))_[fe]=U,_[V]=be,V=fe;else break e}}function a(_){return _.length===0?null:_[0]}function i(_){if(_.length===0)return null;var U=_[0],V=_.pop();if(V!==U){_[0]=V;e:for(var fe=0,be=_.length,T=be>>>1;fe<T;){var Z=2*(fe+1)-1,ne=_[Z],oe=Z+1,ce=_[oe];if(0>o(ne,V))oe<be&&0>o(ce,ne)?(_[fe]=ce,_[oe]=V,fe=oe):(_[fe]=ne,_[Z]=V,fe=Z);else if(oe<be&&0>o(ce,V))_[fe]=ce,_[oe]=V,fe=oe;else break e}}return U}function o(_,U){var V=_.sortIndex-U.sortIndex;return V!==0?V:_.id-U.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var m=[],p=[],y=1,v=null,S=3,A=!1,E=!1,M=!1,D=!1,w=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function j(_){for(var U=a(p);U!==null;){if(U.callback===null)i(p);else if(U.startTime<=_)i(p),U.sortIndex=U.expirationTime,e(m,U);else break;U=a(p)}}function O(_){if(M=!1,j(_),!E)if(a(m)!==null)E=!0,q||(q=!0,se());else{var U=a(p);U!==null&&ge(O,U.startTime-_)}}var q=!1,B=-1,G=5,Q=-1;function ae(){return D?!0:!(n.unstable_now()-Q<G)}function de(){if(D=!1,q){var _=n.unstable_now();Q=_;var U=!0;try{e:{E=!1,M&&(M=!1,N(B),B=-1),A=!0;var V=S;try{n:{for(j(_),v=a(m);v!==null&&!(v.expirationTime>_&&ae());){var fe=v.callback;if(typeof fe=="function"){v.callback=null,S=v.priorityLevel;var be=fe(v.expirationTime<=_);if(_=n.unstable_now(),typeof be=="function"){v.callback=be,j(_),U=!0;break n}v===a(m)&&i(m),j(_)}else i(m);v=a(m)}if(v!==null)U=!0;else{var T=a(p);T!==null&&ge(O,T.startTime-_),U=!1}}break e}finally{v=null,S=V,A=!1}U=void 0}}finally{U?se():q=!1}}}var se;if(typeof P=="function")se=function(){P(de)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,le=re.port2;re.port1.onmessage=de,se=function(){le.postMessage(null)}}else se=function(){w(de,0)};function ge(_,U){B=w(function(){_(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(_){_.callback=null},n.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(_){switch(S){case 1:case 2:case 3:var U=3;break;default:U=S}var V=S;S=U;try{return _()}finally{S=V}},n.unstable_requestPaint=function(){D=!0},n.unstable_runWithPriority=function(_,U){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var V=S;S=_;try{return U()}finally{S=V}},n.unstable_scheduleCallback=function(_,U,V){var fe=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?fe+V:fe):V=fe,_){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=V+be,_={id:y++,callback:U,priorityLevel:_,startTime:V,expirationTime:be,sortIndex:-1},V>fe?(_.sortIndex=V,e(p,_),a(m)===null&&_===a(p)&&(M?(N(B),B=-1):M=!0,ge(O,V-fe))):(_.sortIndex=be,e(m,_),E||A||(E=!0,q||(q=!0,se()))),_},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(_){var U=S;return function(){var V=S;S=U;try{return _.apply(this,arguments)}finally{S=V}}}})(Mh)),Mh}var f0;function HC(){return f0||(f0=1,Sh.exports=FC()),Sh.exports}var Ch={exports:{}},ze={};var h0;function IC(){if(h0)return ze;h0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function A(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,D={};function w(T,Z,ne){this.props=T,this.context=Z,this.refs=D,this.updater=ne||E}w.prototype.isReactComponent={},w.prototype.setState=function(T,Z){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Z,"setState")},w.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function N(){}N.prototype=w.prototype;function P(T,Z,ne){this.props=T,this.context=Z,this.refs=D,this.updater=ne||E}var j=P.prototype=new N;j.constructor=P,M(j,w.prototype),j.isPureReactComponent=!0;var O=Array.isArray;function q(){}var B={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function Q(T,Z,ne){var oe=ne.ref;return{$$typeof:n,type:T,key:Z,ref:oe!==void 0?oe:null,props:ne}}function ae(T,Z){return Q(T.type,Z,T.props)}function de(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function se(T){var Z={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ne){return Z[ne]})}var re=/\/+/g;function le(T,Z){return typeof T=="object"&&T!==null&&T.key!=null?se(""+T.key):Z.toString(36)}function ge(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(q,q):(T.status="pending",T.then(function(Z){T.status==="pending"&&(T.status="fulfilled",T.value=Z)},function(Z){T.status==="pending"&&(T.status="rejected",T.reason=Z)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function _(T,Z,ne,oe,ce){var Ce=typeof T;(Ce==="undefined"||Ce==="boolean")&&(T=null);var te=!1;if(T===null)te=!0;else switch(Ce){case"bigint":case"string":case"number":te=!0;break;case"object":switch(T.$$typeof){case n:case e:te=!0;break;case y:return te=T._init,_(te(T._payload),Z,ne,oe,ce)}}if(te)return ce=ce(T),te=oe===""?"."+le(T,0):oe,O(ce)?(ne="",te!=null&&(ne=te.replace(re,"$&/")+"/"),_(ce,Z,ne,"",function(ee){return ee})):ce!=null&&(de(ce)&&(ce=ae(ce,ne+(ce.key==null||T&&T.key===ce.key?"":(""+ce.key).replace(re,"$&/")+"/")+te)),Z.push(ce)),1;te=0;var Pe=oe===""?".":oe+":";if(O(T))for(var pe=0;pe<T.length;pe++)oe=T[pe],Ce=Pe+le(oe,pe),te+=_(oe,Z,ne,Ce,ce);else if(pe=A(T),typeof pe=="function")for(T=pe.call(T),pe=0;!(oe=T.next()).done;)oe=oe.value,Ce=Pe+le(oe,pe++),te+=_(oe,Z,ne,Ce,ce);else if(Ce==="object"){if(typeof T.then=="function")return _(ge(T),Z,ne,oe,ce);throw Z=String(T),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return te}function U(T,Z,ne){if(T==null)return T;var oe=[],ce=0;return _(T,oe,"","",function(Ce){return Z.call(ne,Ce,ce++)}),oe}function V(T){if(T._status===-1){var Z=T._result;Z=Z(),Z.then(function(ne){(T._status===0||T._status===-1)&&(T._status=1,T._result=ne)},function(ne){(T._status===0||T._status===-1)&&(T._status=2,T._result=ne)}),T._status===-1&&(T._status=0,T._result=Z)}if(T._status===1)return T._result.default;throw T._result}var fe=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},be={map:U,forEach:function(T,Z,ne){U(T,function(){Z.apply(this,arguments)},ne)},count:function(T){var Z=0;return U(T,function(){Z++}),Z},toArray:function(T){return U(T,function(Z){return Z})||[]},only:function(T){if(!de(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return ze.Activity=v,ze.Children=be,ze.Component=w,ze.Fragment=a,ze.Profiler=o,ze.PureComponent=P,ze.StrictMode=i,ze.Suspense=m,ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ze.__COMPILER_RUNTIME={__proto__:null,c:function(T){return B.H.useMemoCache(T)}},ze.cache=function(T){return function(){return T.apply(null,arguments)}},ze.cacheSignal=function(){return null},ze.cloneElement=function(T,Z,ne){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var oe=M({},T.props),ce=T.key;if(Z!=null)for(Ce in Z.key!==void 0&&(ce=""+Z.key),Z)!G.call(Z,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&Z.ref===void 0||(oe[Ce]=Z[Ce]);var Ce=arguments.length-2;if(Ce===1)oe.children=ne;else if(1<Ce){for(var te=Array(Ce),Pe=0;Pe<Ce;Pe++)te[Pe]=arguments[Pe+2];oe.children=te}return Q(T.type,ce,oe)},ze.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:c,_context:T},T},ze.createElement=function(T,Z,ne){var oe,ce={},Ce=null;if(Z!=null)for(oe in Z.key!==void 0&&(Ce=""+Z.key),Z)G.call(Z,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(ce[oe]=Z[oe]);var te=arguments.length-2;if(te===1)ce.children=ne;else if(1<te){for(var Pe=Array(te),pe=0;pe<te;pe++)Pe[pe]=arguments[pe+2];ce.children=Pe}if(T&&T.defaultProps)for(oe in te=T.defaultProps,te)ce[oe]===void 0&&(ce[oe]=te[oe]);return Q(T,Ce,ce)},ze.createRef=function(){return{current:null}},ze.forwardRef=function(T){return{$$typeof:f,render:T}},ze.isValidElement=de,ze.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:V}},ze.memo=function(T,Z){return{$$typeof:p,type:T,compare:Z===void 0?null:Z}},ze.startTransition=function(T){var Z=B.T,ne={};B.T=ne;try{var oe=T(),ce=B.S;ce!==null&&ce(ne,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(q,fe)}catch(Ce){fe(Ce)}finally{Z!==null&&ne.types!==null&&(Z.types=ne.types),B.T=Z}},ze.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ze.use=function(T){return B.H.use(T)},ze.useActionState=function(T,Z,ne){return B.H.useActionState(T,Z,ne)},ze.useCallback=function(T,Z){return B.H.useCallback(T,Z)},ze.useContext=function(T){return B.H.useContext(T)},ze.useDebugValue=function(){},ze.useDeferredValue=function(T,Z){return B.H.useDeferredValue(T,Z)},ze.useEffect=function(T,Z){return B.H.useEffect(T,Z)},ze.useEffectEvent=function(T){return B.H.useEffectEvent(T)},ze.useId=function(){return B.H.useId()},ze.useImperativeHandle=function(T,Z,ne){return B.H.useImperativeHandle(T,Z,ne)},ze.useInsertionEffect=function(T,Z){return B.H.useInsertionEffect(T,Z)},ze.useLayoutEffect=function(T,Z){return B.H.useLayoutEffect(T,Z)},ze.useMemo=function(T,Z){return B.H.useMemo(T,Z)},ze.useOptimistic=function(T,Z){return B.H.useOptimistic(T,Z)},ze.useReducer=function(T,Z,ne){return B.H.useReducer(T,Z,ne)},ze.useRef=function(T){return B.H.useRef(T)},ze.useState=function(T){return B.H.useState(T)},ze.useSyncExternalStore=function(T,Z,ne){return B.H.useSyncExternalStore(T,Z,ne)},ze.useTransition=function(){return B.H.useTransition()},ze.version="19.2.0",ze}var m0;function Xm(){return m0||(m0=1,Ch.exports=IC()),Ch.exports}var Ah={exports:{}},ht={};var p0;function JC(){if(p0)return ht;p0=1;var n=Xm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var i={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,ht.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,y)},ht.flushSync=function(m){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,m)return m()}finally{u.T=p,i.p=y,i.d.f()}},ht.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(m,p))},ht.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},ht.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,v=f(y,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:A}):y==="script"&&i.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ht.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=f(p.as,p.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(m)},ht.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=f(y,p.crossOrigin);i.d.L(m,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ht.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=f(p.as,p.crossOrigin);i.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(m)},ht.requestFormReset=function(m){i.d.r(m)},ht.unstable_batchedUpdates=function(m,p){return m(p)},ht.useFormState=function(m,p,y){return u.H.useFormState(m,p,y)},ht.useFormStatus=function(){return u.H.useHostTransitionStatus()},ht.version="19.2.0",ht}var g0;function t4(){if(g0)return Ah.exports;g0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ah.exports=JC(),Ah.exports}var y0;function UC(){if(y0)return Ho;y0=1;var n=HC(),e=Xm(),a=t4();function i(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function u(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function f(t){if(t.tag===31){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(i(188))}function p(t){var r=t.alternate;if(!r){if(r=c(t),r===null)throw Error(i(188));return r!==t?null:t}for(var s=t,l=r;;){var d=s.return;if(d===null)break;var h=d.alternate;if(h===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===s)return m(d),t;if(h===l)return m(d),r;h=h.sibling}throw Error(i(188))}if(s.return!==l.return)s=d,l=h;else{for(var b=!1,C=d.child;C;){if(C===s){b=!0,s=d,l=h;break}if(C===l){b=!0,l=d,s=h;break}C=C.sibling}if(!b){for(C=h.child;C;){if(C===s){b=!0,s=h,l=d;break}if(C===l){b=!0,l=h,s=d;break}C=C.sibling}if(!b)throw Error(i(189))}}if(s.alternate!==l)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?t:r}function y(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=y(t),r!==null)return r;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),P=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=de&&t[de]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case w:return"Profiler";case D:return"StrictMode";case O:return"Suspense";case q:return"SuspenseList";case Q:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case P:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case j:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return r=t.displayName||null,r!==null?r:le(t.type)||"Memo";case G:r=t._payload,t=t._init;try{return le(t(r))}catch{}}return null}var ge=Array.isArray,_=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},fe=[],be=-1;function T(t){return{current:t}}function Z(t){0>be||(t.current=fe[be],fe[be]=null,be--)}function ne(t,r){be++,fe[be]=t.current,t.current=r}var oe=T(null),ce=T(null),Ce=T(null),te=T(null);function Pe(t,r){switch(ne(Ce,r),ne(ce,t),ne(oe,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?P1(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=P1(r),t=B1(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(oe),ne(oe,t)}function pe(){Z(oe),Z(ce),Z(Ce)}function ee(t){t.memoizedState!==null&&ne(te,t);var r=oe.current,s=B1(r,t.type);r!==s&&(ne(ce,t),ne(oe,s))}function xe(t){ce.current===t&&(Z(oe),Z(ce)),te.current===t&&(Z(te),zo._currentValue=V)}var Be,Ue;function De(t){if(Be===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);Be=r&&r[1]||"",Ue=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+Ue}var _e=!1;function vn(t,r){if(!t||_e)return"";_e=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(K){var J=K}Reflect.construct(t,[],$)}else{try{$.call()}catch(K){J=K}t.call($.prototype)}}else{try{throw Error()}catch(K){J=K}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(K){if(K&&J&&typeof K.stack=="string")return[K.stack,J.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],C=h[1];if(b&&C){var k=b.split(`
`),I=C.split(`
`);for(d=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;d<I.length&&!I[d].includes("DetermineComponentFrameRoot");)d++;if(l===k.length||d===I.length)for(l=k.length-1,d=I.length-1;1<=l&&0<=d&&k[l]!==I[d];)d--;for(;1<=l&&0<=d;l--,d--)if(k[l]!==I[d]){if(l!==1||d!==1)do if(l--,d--,0>d||k[l]!==I[d]){var W=`
`+k[l].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=l&&0<=d);break}}}finally{_e=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?De(s):""}function Fn(t,r){switch(t.tag){case 26:case 27:case 5:return De(t.type);case 16:return De("Lazy");case 13:return t.child!==r&&r!==null?De("Suspense Fallback"):De("Suspense");case 19:return De("SuspenseList");case 0:case 15:return vn(t.type,!1);case 11:return vn(t.type.render,!1);case 1:return vn(t.type,!0);case 31:return De("Activity");default:return""}}function dt(t){try{var r="",s=null;do r+=Fn(t,s),s=t,t=t.return;while(t);return r}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var sn=Object.prototype.hasOwnProperty,R=n.unstable_scheduleCallback,F=n.unstable_cancelCallback,Y=n.unstable_shouldYield,me=n.unstable_requestPaint,ie=n.unstable_now,ue=n.unstable_getCurrentPriorityLevel,Se=n.unstable_ImmediatePriority,He=n.unstable_UserBlockingPriority,Xe=n.unstable_NormalPriority,rt=n.unstable_LowPriority,Nr=n.unstable_IdlePriority,Gt=n.log,Ys=n.unstable_setDisableYieldValue,at=null,Bn=null;function Ft(t){if(typeof Gt=="function"&&Ys(t),Bn&&typeof Bn.setStrictMode=="function")try{Bn.setStrictMode(at,t)}catch{}}var ft=Math.clz32?Math.clz32:AS,id=Math.log,Dl=Math.LN2;function AS(t){return t>>>=0,t===0?32:31-(id(t)/Dl|0)|0}var El=256,Nl=262144,Rl=4194304;function Ua(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function kl(t,r,s){var l=t.pendingLanes;if(l===0)return 0;var d=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~h,l!==0?d=Ua(l):(b&=C,b!==0?d=Ua(b):s||(s=C&~t,s!==0&&(d=Ua(s))))):(C=l&~h,C!==0?d=Ua(C):b!==0?d=Ua(b):s||(s=l&~t,s!==0&&(d=Ua(s)))),d===0?0:r!==0&&r!==d&&(r&h)===0&&(h=d&-d,s=r&-r,h>=s||h===32&&(s&4194048)!==0)?r:d}function Zs(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function wS(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hg(){var t=Rl;return Rl<<=1,(Rl&62914560)===0&&(Rl=4194304),t}function sd(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function Ws(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function TS(t,r,s,l,d,h){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,k=t.expirationTimes,I=t.hiddenUpdates;for(s=b&~s;0<s;){var W=31-ft(s),$=1<<W;C[W]=0,k[W]=-1;var J=I[W];if(J!==null)for(I[W]=null,W=0;W<J.length;W++){var K=J[W];K!==null&&(K.lane&=-536870913)}s&=~$}l!==0&&mg(t,l,0),h!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~r))}function mg(t,r,s){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-ft(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function pg(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var l=31-ft(s),d=1<<l;d&r|t[l]&r&&(t[l]|=r),s&=~d}}function gg(t,r){var s=r&-r;return s=(s&42)!==0?1:od(s),(s&(t.suspendedLanes|r))!==0?0:s}function od(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ld(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yg(){var t=U.p;return t!==0?t:(t=window.event,t===void 0?32:t0(t.type))}function vg(t,r){var s=U.p;try{return U.p=t,r()}finally{U.p=s}}var na=Math.random().toString(36).slice(2),it="__reactFiber$"+na,xt="__reactProps$"+na,wi="__reactContainer$"+na,cd="__reactEvents$"+na,DS="__reactListeners$"+na,ES="__reactHandles$"+na,bg="__reactResources$"+na,Xs="__reactMarker$"+na;function ud(t){delete t[it],delete t[xt],delete t[cd],delete t[DS],delete t[ES]}function Ti(t){var r=t[it];if(r)return r;for(var s=t.parentNode;s;){if(r=s[wi]||s[it]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=G1(t);t!==null;){if(s=t[it])return s;t=G1(t)}return r}t=s,s=t.parentNode}return null}function Di(t){if(t=t[it]||t[wi]){var r=t.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return t}return null}function Qs(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(i(33))}function Ei(t){var r=t[bg];return r||(r=t[bg]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function et(t){t[Xs]=!0}var xg=new Set,Sg={};function qa(t,r){Ni(t,r),Ni(t+"Capture",r)}function Ni(t,r){for(Sg[t]=r,t=0;t<r.length;t++)xg.add(r[t])}var NS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mg={},Cg={};function RS(t){return sn.call(Cg,t)?!0:sn.call(Mg,t)?!1:NS.test(t)?Cg[t]=!0:(Mg[t]=!0,!1)}function Pl(t,r,s){if(RS(r))if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+s)}}function Bl(t,r,s){if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+s)}}function Rr(t,r,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(r,s,""+l)}}function Ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ag(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function kS(t,r,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,r);if(!t.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,h=l.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return d.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(t,r,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function dd(t){if(!t._valueTracker){var r=Ag(t)?"checked":"value";t._valueTracker=kS(t,r,""+t[r])}}function wg(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return t&&(l=Ag(t)?t.checked?"true":"false":t.value),t=l,t!==s?(r.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var PS=/[\n"\\]/g;function It(t){return t.replace(PS,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function fd(t,r,s,l,d,h,b,C){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),r!=null?b==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+Ht(r)):t.value!==""+Ht(r)&&(t.value=""+Ht(r)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),r!=null?hd(t,b,Ht(r)):s!=null?hd(t,b,Ht(s)):l!=null&&t.removeAttribute("value"),d==null&&h!=null&&(t.defaultChecked=!!h),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Ht(C):t.removeAttribute("name")}function Tg(t,r,s,l,d,h,b,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),r!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||r!=null)){dd(t);return}s=s!=null?""+Ht(s):"",r=r!=null?""+Ht(r):s,C||r===t.value||(t.value=r),t.defaultValue=r}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),dd(t)}function hd(t,r,s){r==="number"&&Ll(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ri(t,r,s,l){if(t=t.options,r){r={};for(var d=0;d<s.length;d++)r["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=r.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ht(s),r=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}r!==null||t[d].disabled||(r=t[d])}r!==null&&(r.selected=!0)}}function Dg(t,r,s){if(r!=null&&(r=""+Ht(r),r!==t.value&&(t.value=r),s==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=s!=null?""+Ht(s):""}function Eg(t,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(i(92));if(ge(l)){if(1<l.length)throw Error(i(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=Ht(r),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),dd(t)}function ki(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var BS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ng(t,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,s):typeof s!="number"||s===0||BS.has(r)?r==="float"?t.cssFloat=s:t[r]=(""+s).trim():t[r]=s+"px"}function Rg(t,r,s){if(r!=null&&typeof r!="object")throw Error(i(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in r)l=r[d],r.hasOwnProperty(d)&&s[d]!==l&&Ng(t,d,l)}else for(var h in r)r.hasOwnProperty(h)&&Ng(t,h,r[h])}function md(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var LS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_S=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(t){return _S.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function kr(){}var pd=null;function gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pi=null,Bi=null;function kg(t){var r=Di(t);if(r&&(t=r.stateNode)){var s=t[xt]||null;e:switch(t=r.stateNode,r.type){case"input":if(fd(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+It(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==t&&l.form===t.form){var d=l[xt]||null;if(!d)throw Error(i(90));fd(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===t.form&&wg(l)}break e;case"textarea":Dg(t,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Ri(t,!!s.multiple,r,!1)}}}var yd=!1;function Pg(t,r,s){if(yd)return t(r,s);yd=!0;try{var l=t(r);return l}finally{if(yd=!1,(Pi!==null||Bi!==null)&&(Mc(),Pi&&(r=Pi,t=Bi,Bi=Pi=null,kg(r),t)))for(r=0;r<t.length;r++)kg(t[r])}}function $s(t,r){var s=t.stateNode;if(s===null)return null;var l=s[xt]||null;if(l===null)return null;s=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=!1;if(Pr)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){vd=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{vd=!1}var ta=null,bd=null,Ol=null;function Bg(){if(Ol)return Ol;var t,r=bd,s=r.length,l,d="value"in ta?ta.value:ta.textContent,h=d.length;for(t=0;t<s&&r[t]===d[t];t++);var b=s-t;for(l=1;l<=b&&r[s-l]===d[h-l];l++);return Ol=d.slice(t,1<l?1-l:void 0)}function zl(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function jl(){return!0}function Lg(){return!1}function St(t){function r(s,l,d,h,b){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?jl:Lg,this.isPropagationStopped=Lg,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),r}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=St(Ka),no=v({},Ka,{view:0,detail:0}),OS=St(no),xd,Sd,to,Gl=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(xd=t.screenX-to.screenX,Sd=t.screenY-to.screenY):Sd=xd=0,to=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:Sd}}),_g=St(Gl),zS=v({},Gl,{dataTransfer:0}),jS=St(zS),VS=v({},no,{relatedTarget:0}),Md=St(VS),GS=v({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),FS=St(GS),HS=v({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IS=St(HS),JS=v({},Ka,{data:0}),Og=St(JS),US={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YS(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=KS[t])?!!r[t]:!1}function Cd(){return YS}var ZS=v({},no,{key:function(t){if(t.key){var r=US[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WS=St(ZS),XS=v({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zg=St(XS),QS=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),$S=St(QS),eM=v({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),nM=St(eM),tM=v({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rM=St(tM),aM=v({},Ka,{newState:0,oldState:0}),iM=St(aM),sM=[9,13,27,32],Ad=Pr&&"CompositionEvent"in window,ro=null;Pr&&"documentMode"in document&&(ro=document.documentMode);var oM=Pr&&"TextEvent"in window&&!ro,jg=Pr&&(!Ad||ro&&8<ro&&11>=ro),Vg=" ",Gg=!1;function Fg(t,r){switch(t){case"keyup":return sM.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function lM(t,r){switch(t){case"compositionend":return Hg(r);case"keypress":return r.which!==32?null:(Gg=!0,Vg);case"textInput":return t=r.data,t===Vg&&Gg?null:t;default:return null}}function cM(t,r){if(Li)return t==="compositionend"||!Ad&&Fg(t,r)?(t=Bg(),Ol=bd=ta=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return jg&&r.locale!=="ko"?null:r.data;default:return null}}var uM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!uM[t.type]:r==="textarea"}function Jg(t,r,s,l){Pi?Bi?Bi.push(l):Bi=[l]:Pi=l,r=Nc(r,"onChange"),0<r.length&&(s=new Vl("onChange","change",null,s,l),t.push({event:s,listeners:r}))}var ao=null,io=null;function dM(t){T1(t,0)}function Fl(t){var r=Qs(t);if(wg(r))return t}function Ug(t,r){if(t==="change")return r}var qg=!1;if(Pr){var wd;if(Pr){var Td="oninput"in document;if(!Td){var Kg=document.createElement("div");Kg.setAttribute("oninput","return;"),Td=typeof Kg.oninput=="function"}wd=Td}else wd=!1;qg=wd&&(!document.documentMode||9<document.documentMode)}function Yg(){ao&&(ao.detachEvent("onpropertychange",Zg),io=ao=null)}function Zg(t){if(t.propertyName==="value"&&Fl(io)){var r=[];Jg(r,io,t,gd(t)),Pg(dM,r)}}function fM(t,r,s){t==="focusin"?(Yg(),ao=r,io=s,ao.attachEvent("onpropertychange",Zg)):t==="focusout"&&Yg()}function hM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(io)}function mM(t,r){if(t==="click")return Fl(r)}function pM(t,r){if(t==="input"||t==="change")return Fl(r)}function gM(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Nt=typeof Object.is=="function"?Object.is:gM;function so(t,r){if(Nt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!sn.call(r,d)||!Nt(t[d],r[d]))return!1}return!0}function Wg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xg(t,r){var s=Wg(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=r&&l>=r)return{node:s,offset:r-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Wg(s)}}function Qg(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Qg(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function $g(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=Ll(t.document);r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=Ll(t.document)}return r}function Dd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var yM=Pr&&"documentMode"in document&&11>=document.documentMode,_i=null,Ed=null,oo=null,Nd=!1;function ey(t,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nd||_i==null||_i!==Ll(l)||(l=_i,"selectionStart"in l&&Dd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&so(oo,l)||(oo=l,l=Nc(Ed,"onSelect"),0<l.length&&(r=new Vl("onSelect","select",null,r,s),t.push({event:r,listeners:l}),r.target=_i)))}function Ya(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var Oi={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Rd={},ny={};Pr&&(ny=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Za(t){if(Rd[t])return Rd[t];if(!Oi[t])return t;var r=Oi[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in ny)return Rd[t]=r[s];return t}var ty=Za("animationend"),ry=Za("animationiteration"),ay=Za("animationstart"),vM=Za("transitionrun"),bM=Za("transitionstart"),xM=Za("transitioncancel"),iy=Za("transitionend"),sy=new Map,kd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kd.push("scrollEnd");function rr(t,r){sy.set(t,r),qa(r,[t])}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Jt=[],zi=0,Pd=0;function Il(){for(var t=zi,r=Pd=zi=0;r<t;){var s=Jt[r];Jt[r++]=null;var l=Jt[r];Jt[r++]=null;var d=Jt[r];Jt[r++]=null;var h=Jt[r];if(Jt[r++]=null,l!==null&&d!==null){var b=l.pending;b===null?d.next=d:(d.next=b.next,b.next=d),l.pending=d}h!==0&&oy(s,d,h)}}function Jl(t,r,s,l){Jt[zi++]=t,Jt[zi++]=r,Jt[zi++]=s,Jt[zi++]=l,Pd|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Bd(t,r,s,l){return Jl(t,r,s,l),Ul(t)}function Wa(t,r){return Jl(t,null,null,r),Ul(t)}function oy(t,r,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var d=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(d=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,d&&r!==null&&(d=31-ft(s),t=h.hiddenUpdates,l=t[d],l===null?t[d]=[r]:l.push(r),r.lane=s|536870912),h):null}function Ul(t){if(50<Ro)throw Ro=0,If=null,Error(i(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var ji={};function SM(t,r,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,r,s,l){return new SM(t,r,s,l)}function Ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Br(t,r){var s=t.alternate;return s===null?(s=Rt(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function ly(t,r){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,r=s.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function ql(t,r,s,l,d,h){var b=0;if(l=t,typeof t=="function")Ld(t)&&(b=1);else if(typeof t=="string")b=TC(t,s,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Q:return t=Rt(31,s,r,d),t.elementType=Q,t.lanes=h,t;case M:return Xa(s.children,d,h,r);case D:b=8,d|=24;break;case w:return t=Rt(12,s,r,d|2),t.elementType=w,t.lanes=h,t;case O:return t=Rt(13,s,r,d),t.elementType=O,t.lanes=h,t;case q:return t=Rt(19,s,r,d),t.elementType=q,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:b=10;break e;case N:b=9;break e;case j:b=11;break e;case B:b=14;break e;case G:b=16,l=null;break e}b=29,s=Error(i(130,t===null?"null":typeof t,"")),l=null}return r=Rt(b,s,r,d),r.elementType=t,r.type=l,r.lanes=h,r}function Xa(t,r,s,l){return t=Rt(7,t,l,r),t.lanes=s,t}function _d(t,r,s){return t=Rt(6,t,null,r),t.lanes=s,t}function cy(t){var r=Rt(18,null,null,0);return r.stateNode=t,r}function Od(t,r,s){return r=Rt(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var uy=new WeakMap;function Ut(t,r){if(typeof t=="object"&&t!==null){var s=uy.get(t);return s!==void 0?s:(r={value:t,source:r,stack:dt(r)},uy.set(t,r),r)}return{value:t,source:r,stack:dt(r)}}var Vi=[],Gi=0,Kl=null,lo=0,qt=[],Kt=0,ra=null,mr=1,pr="";function Lr(t,r){Vi[Gi++]=lo,Vi[Gi++]=Kl,Kl=t,lo=r}function dy(t,r,s){qt[Kt++]=mr,qt[Kt++]=pr,qt[Kt++]=ra,ra=t;var l=mr;t=pr;var d=32-ft(l)-1;l&=~(1<<d),s+=1;var h=32-ft(r)+d;if(30<h){var b=d-d%5;h=(l&(1<<b)-1).toString(32),l>>=b,d-=b,mr=1<<32-ft(r)+d|s<<d|l,pr=h+t}else mr=1<<h|s<<d|l,pr=t}function zd(t){t.return!==null&&(Lr(t,1),dy(t,1,0))}function jd(t){for(;t===Kl;)Kl=Vi[--Gi],Vi[Gi]=null,lo=Vi[--Gi],Vi[Gi]=null;for(;t===ra;)ra=qt[--Kt],qt[Kt]=null,pr=qt[--Kt],qt[Kt]=null,mr=qt[--Kt],qt[Kt]=null}function fy(t,r){qt[Kt++]=mr,qt[Kt++]=pr,qt[Kt++]=ra,mr=r.id,pr=r.overflow,ra=t}var st=null,bn=null,We=!1,aa=null,Yt=!1,Vd=Error(i(519));function ia(t){var r=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(Ut(r,t)),Vd}function hy(t){var r=t.stateNode,s=t.type,l=t.memoizedProps;switch(r[it]=t,r[xt]=l,s){case"dialog":Ke("cancel",r),Ke("close",r);break;case"iframe":case"object":case"embed":Ke("load",r);break;case"video":case"audio":for(s=0;s<Po.length;s++)Ke(Po[s],r);break;case"source":Ke("error",r);break;case"img":case"image":case"link":Ke("error",r),Ke("load",r);break;case"details":Ke("toggle",r);break;case"input":Ke("invalid",r),Tg(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ke("invalid",r);break;case"textarea":Ke("invalid",r),Eg(r,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||R1(r.textContent,s)?(l.popover!=null&&(Ke("beforetoggle",r),Ke("toggle",r)),l.onScroll!=null&&Ke("scroll",r),l.onScrollEnd!=null&&Ke("scrollend",r),l.onClick!=null&&(r.onclick=kr),r=!0):r=!1,r||ia(t,!0)}function my(t){for(st=t.return;st;)switch(st.tag){case 5:case 31:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:st=st.return}}function Fi(t){if(t!==st)return!1;if(!We)return my(t),We=!0,!1;var r=t.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||ah(t.type,t.memoizedProps)),s=!s),s&&bn&&ia(t),my(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));bn=V1(t)}else if(r===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));bn=V1(t)}else r===27?(r=bn,ba(t.type)?(t=ch,ch=null,bn=t):bn=r):bn=st?Wt(t.stateNode.nextSibling):null;return!0}function Qa(){bn=st=null,We=!1}function Gd(){var t=aa;return t!==null&&(wt===null?wt=t:wt.push.apply(wt,t),aa=null),t}function co(t){aa===null?aa=[t]:aa.push(t)}var Fd=T(null),$a=null,_r=null;function sa(t,r,s){ne(Fd,r._currentValue),r._currentValue=s}function Or(t){t._currentValue=Fd.current,Z(Fd)}function Hd(t,r,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===s)break;t=t.return}}function Id(t,r,s,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var h=d.dependencies;if(h!==null){var b=d.child;h=h.firstContext;e:for(;h!==null;){var C=h;h=d;for(var k=0;k<r.length;k++)if(C.context===r[k]){h.lanes|=s,C=h.alternate,C!==null&&(C.lanes|=s),Hd(h.return,s,t),l||(b=null);break e}h=C.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(i(341));b.lanes|=s,h=b.alternate,h!==null&&(h.lanes|=s),Hd(b,s,t),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===t){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function Hi(t,r,s,l){t=null;for(var d=r,h=!1;d!==null;){if(!h){if((d.flags&524288)!==0)h=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var C=d.type;Nt(d.pendingProps.value,b.value)||(t!==null?t.push(C):t=[C])}}else if(d===te.current){if(b=d.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}d=d.return}t!==null&&Id(r,t,s,l),r.flags|=262144}function Yl(t){for(t=t.firstContext;t!==null;){if(!Nt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ei(t){$a=t,_r=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ot(t){return py($a,t)}function Zl(t,r){return $a===null&&ei(t),py(t,r)}function py(t,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},_r===null){if(t===null)throw Error(i(308));_r=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else _r=_r.next=r;return s}var MM=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(s){return s()})}},CM=n.unstable_scheduleCallback,AM=n.unstable_NormalPriority,Hn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jd(){return{controller:new MM,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&CM(AM,function(){t.controller.abort()})}var fo=null,Ud=0,Ii=0,Ji=null;function wM(t,r){if(fo===null){var s=fo=[];Ud=0,Ii=Zf(),Ji={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ud++,r.then(gy,gy),r}function gy(){if(--Ud===0&&fo!==null){Ji!==null&&(Ji.status="fulfilled");var t=fo;fo=null,Ii=0,Ji=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function TM(t,r){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var d=0;d<s.length;d++)(0,s[d])(r)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var yy=_.S;_.S=function(t,r){e1=ie(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&wM(t,r),yy!==null&&yy(t,r)};var ni=T(null);function qd(){var t=ni.current;return t!==null?t:mn.pooledCache}function Wl(t,r){r===null?ne(ni,ni.current):ne(ni,r.pool)}function vy(){var t=qd();return t===null?null:{parent:Hn._currentValue,pool:t}}var Ui=Error(i(460)),Kd=Error(i(474)),Xl=Error(i(542)),Ql={then:function(){}};function by(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xy(t,r,s){switch(s=t[s],s===void 0?t.push(r):s!==r&&(r.then(kr,kr),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,My(t),t;default:if(typeof r.status=="string")r.then(kr,kr);else{if(t=mn,t!==null&&100<t.shellSuspendCounter)throw Error(i(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=l}},function(l){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,My(t),t}throw ri=r,Ui}}function ti(t){try{var r=t._init;return r(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ri=s,Ui):s}}var ri=null;function Sy(){if(ri===null)throw Error(i(459));var t=ri;return ri=null,t}function My(t){if(t===Ui||t===Xl)throw Error(i(483))}var qi=null,ho=0;function $l(t){var r=ho;return ho+=1,qi===null&&(qi=[]),xy(qi,t,r)}function mo(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function ec(t,r){throw r.$$typeof===S?Error(i(525)):(t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function Cy(t){function r(z,L){if(t){var H=z.deletions;H===null?(z.deletions=[L],z.flags|=16):H.push(L)}}function s(z,L){if(!t)return null;for(;L!==null;)r(z,L),L=L.sibling;return null}function l(z){for(var L=new Map;z!==null;)z.key!==null?L.set(z.key,z):L.set(z.index,z),z=z.sibling;return L}function d(z,L){return z=Br(z,L),z.index=0,z.sibling=null,z}function h(z,L,H){return z.index=H,t?(H=z.alternate,H!==null?(H=H.index,H<L?(z.flags|=67108866,L):H):(z.flags|=67108866,L)):(z.flags|=1048576,L)}function b(z){return t&&z.alternate===null&&(z.flags|=67108866),z}function C(z,L,H,X){return L===null||L.tag!==6?(L=_d(H,z.mode,X),L.return=z,L):(L=d(L,H),L.return=z,L)}function k(z,L,H,X){var ke=H.type;return ke===M?W(z,L,H.props.children,X,H.key):L!==null&&(L.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===G&&ti(ke)===L.type)?(L=d(L,H.props),mo(L,H),L.return=z,L):(L=ql(H.type,H.key,H.props,null,z.mode,X),mo(L,H),L.return=z,L)}function I(z,L,H,X){return L===null||L.tag!==4||L.stateNode.containerInfo!==H.containerInfo||L.stateNode.implementation!==H.implementation?(L=Od(H,z.mode,X),L.return=z,L):(L=d(L,H.children||[]),L.return=z,L)}function W(z,L,H,X,ke){return L===null||L.tag!==7?(L=Xa(H,z.mode,X,ke),L.return=z,L):(L=d(L,H),L.return=z,L)}function $(z,L,H){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=_d(""+L,z.mode,H),L.return=z,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case A:return H=ql(L.type,L.key,L.props,null,z.mode,H),mo(H,L),H.return=z,H;case E:return L=Od(L,z.mode,H),L.return=z,L;case G:return L=ti(L),$(z,L,H)}if(ge(L)||se(L))return L=Xa(L,z.mode,H,null),L.return=z,L;if(typeof L.then=="function")return $(z,$l(L),H);if(L.$$typeof===P)return $(z,Zl(z,L),H);ec(z,L)}return null}function J(z,L,H,X){var ke=L!==null?L.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ke!==null?null:C(z,L,""+H,X);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case A:return H.key===ke?k(z,L,H,X):null;case E:return H.key===ke?I(z,L,H,X):null;case G:return H=ti(H),J(z,L,H,X)}if(ge(H)||se(H))return ke!==null?null:W(z,L,H,X,null);if(typeof H.then=="function")return J(z,L,$l(H),X);if(H.$$typeof===P)return J(z,L,Zl(z,H),X);ec(z,H)}return null}function K(z,L,H,X,ke){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return z=z.get(H)||null,C(L,z,""+X,ke);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case A:return z=z.get(X.key===null?H:X.key)||null,k(L,z,X,ke);case E:return z=z.get(X.key===null?H:X.key)||null,I(L,z,X,ke);case G:return X=ti(X),K(z,L,H,X,ke)}if(ge(X)||se(X))return z=z.get(H)||null,W(L,z,X,ke,null);if(typeof X.then=="function")return K(z,L,H,$l(X),ke);if(X.$$typeof===P)return K(z,L,H,Zl(L,X),ke);ec(L,X)}return null}function Me(z,L,H,X){for(var ke=null,$e=null,Ne=L,Fe=L=0,Ze=null;Ne!==null&&Fe<H.length;Fe++){Ne.index>Fe?(Ze=Ne,Ne=null):Ze=Ne.sibling;var en=J(z,Ne,H[Fe],X);if(en===null){Ne===null&&(Ne=Ze);break}t&&Ne&&en.alternate===null&&r(z,Ne),L=h(en,L,Fe),$e===null?ke=en:$e.sibling=en,$e=en,Ne=Ze}if(Fe===H.length)return s(z,Ne),We&&Lr(z,Fe),ke;if(Ne===null){for(;Fe<H.length;Fe++)Ne=$(z,H[Fe],X),Ne!==null&&(L=h(Ne,L,Fe),$e===null?ke=Ne:$e.sibling=Ne,$e=Ne);return We&&Lr(z,Fe),ke}for(Ne=l(Ne);Fe<H.length;Fe++)Ze=K(Ne,z,Fe,H[Fe],X),Ze!==null&&(t&&Ze.alternate!==null&&Ne.delete(Ze.key===null?Fe:Ze.key),L=h(Ze,L,Fe),$e===null?ke=Ze:$e.sibling=Ze,$e=Ze);return t&&Ne.forEach(function(Aa){return r(z,Aa)}),We&&Lr(z,Fe),ke}function Le(z,L,H,X){if(H==null)throw Error(i(151));for(var ke=null,$e=null,Ne=L,Fe=L=0,Ze=null,en=H.next();Ne!==null&&!en.done;Fe++,en=H.next()){Ne.index>Fe?(Ze=Ne,Ne=null):Ze=Ne.sibling;var Aa=J(z,Ne,en.value,X);if(Aa===null){Ne===null&&(Ne=Ze);break}t&&Ne&&Aa.alternate===null&&r(z,Ne),L=h(Aa,L,Fe),$e===null?ke=Aa:$e.sibling=Aa,$e=Aa,Ne=Ze}if(en.done)return s(z,Ne),We&&Lr(z,Fe),ke;if(Ne===null){for(;!en.done;Fe++,en=H.next())en=$(z,en.value,X),en!==null&&(L=h(en,L,Fe),$e===null?ke=en:$e.sibling=en,$e=en);return We&&Lr(z,Fe),ke}for(Ne=l(Ne);!en.done;Fe++,en=H.next())en=K(Ne,z,Fe,en.value,X),en!==null&&(t&&en.alternate!==null&&Ne.delete(en.key===null?Fe:en.key),L=h(en,L,Fe),$e===null?ke=en:$e.sibling=en,$e=en);return t&&Ne.forEach(function(zC){return r(z,zC)}),We&&Lr(z,Fe),ke}function hn(z,L,H,X){if(typeof H=="object"&&H!==null&&H.type===M&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case A:e:{for(var ke=H.key;L!==null;){if(L.key===ke){if(ke=H.type,ke===M){if(L.tag===7){s(z,L.sibling),X=d(L,H.props.children),X.return=z,z=X;break e}}else if(L.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===G&&ti(ke)===L.type){s(z,L.sibling),X=d(L,H.props),mo(X,H),X.return=z,z=X;break e}s(z,L);break}else r(z,L);L=L.sibling}H.type===M?(X=Xa(H.props.children,z.mode,X,H.key),X.return=z,z=X):(X=ql(H.type,H.key,H.props,null,z.mode,X),mo(X,H),X.return=z,z=X)}return b(z);case E:e:{for(ke=H.key;L!==null;){if(L.key===ke)if(L.tag===4&&L.stateNode.containerInfo===H.containerInfo&&L.stateNode.implementation===H.implementation){s(z,L.sibling),X=d(L,H.children||[]),X.return=z,z=X;break e}else{s(z,L);break}else r(z,L);L=L.sibling}X=Od(H,z.mode,X),X.return=z,z=X}return b(z);case G:return H=ti(H),hn(z,L,H,X)}if(ge(H))return Me(z,L,H,X);if(se(H)){if(ke=se(H),typeof ke!="function")throw Error(i(150));return H=ke.call(H),Le(z,L,H,X)}if(typeof H.then=="function")return hn(z,L,$l(H),X);if(H.$$typeof===P)return hn(z,L,Zl(z,H),X);ec(z,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,L!==null&&L.tag===6?(s(z,L.sibling),X=d(L,H),X.return=z,z=X):(s(z,L),X=_d(H,z.mode,X),X.return=z,z=X),b(z)):s(z,L)}return function(z,L,H,X){try{ho=0;var ke=hn(z,L,H,X);return qi=null,ke}catch(Ne){if(Ne===Ui||Ne===Xl)throw Ne;var $e=Rt(29,Ne,null,z.mode);return $e.lanes=X,$e.return=z,$e}finally{}}}var ai=Cy(!0),Ay=Cy(!1),oa=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zd(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function la(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,r,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(rn&2)!==0){var d=l.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),l.pending=r,r=Ul(t),oy(t,null,s),r}return Jl(t,l,r,s),Ul(t)}function po(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,pg(t,s)}}function Wd(t,r){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?d=h=b:h=h.next=b,s=s.next}while(s!==null);h===null?d=h=r:h=h.next=r}else d=h=r;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}var Xd=!1;function go(){if(Xd){var t=Ji;if(t!==null)throw t}}function yo(t,r,s,l){Xd=!1;var d=t.updateQueue;oa=!1;var h=d.firstBaseUpdate,b=d.lastBaseUpdate,C=d.shared.pending;if(C!==null){d.shared.pending=null;var k=C,I=k.next;k.next=null,b===null?h=I:b.next=I,b=k;var W=t.alternate;W!==null&&(W=W.updateQueue,C=W.lastBaseUpdate,C!==b&&(C===null?W.firstBaseUpdate=I:C.next=I,W.lastBaseUpdate=k))}if(h!==null){var $=d.baseState;b=0,W=I=k=null,C=h;do{var J=C.lane&-536870913,K=J!==C.lane;if(K?(Ye&J)===J:(l&J)===J){J!==0&&J===Ii&&(Xd=!0),W!==null&&(W=W.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Me=t,Le=C;J=r;var hn=s;switch(Le.tag){case 1:if(Me=Le.payload,typeof Me=="function"){$=Me.call(hn,$,J);break e}$=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Le.payload,J=typeof Me=="function"?Me.call(hn,$,J):Me,J==null)break e;$=v({},$,J);break e;case 2:oa=!0}}J=C.callback,J!==null&&(t.flags|=64,K&&(t.flags|=8192),K=d.callbacks,K===null?d.callbacks=[J]:K.push(J))}else K={lane:J,tag:C.tag,payload:C.payload,callback:C.callback,next:null},W===null?(I=W=K,k=$):W=W.next=K,b|=J;if(C=C.next,C===null){if(C=d.shared.pending,C===null)break;K=C,C=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);W===null&&(k=$),d.baseState=k,d.firstBaseUpdate=I,d.lastBaseUpdate=W,h===null&&(d.shared.lanes=0),ma|=b,t.lanes=b,t.memoizedState=$}}function wy(t,r){if(typeof t!="function")throw Error(i(191,t));t.call(r)}function Ty(t,r){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)wy(s[t],r)}var Ki=T(null),nc=T(0);function Dy(t,r){t=Ur,ne(nc,t),ne(Ki,r),Ur=t|r.baseLanes}function Qd(){ne(nc,Ur),ne(Ki,Ki.current)}function $d(){Ur=nc.current,Z(Ki),Z(nc)}var kt=T(null),Zt=null;function ua(t){var r=t.alternate;ne(Ln,Ln.current&1),ne(kt,t),Zt===null&&(r===null||Ki.current!==null||r.memoizedState!==null)&&(Zt=t)}function ef(t){ne(Ln,Ln.current),ne(kt,t),Zt===null&&(Zt=t)}function Ey(t){t.tag===22?(ne(Ln,Ln.current),ne(kt,t),Zt===null&&(Zt=t)):da()}function da(){ne(Ln,Ln.current),ne(kt,kt.current)}function Pt(t){Z(kt),Zt===t&&(Zt=null),Z(Ln)}var Ln=T(0);function tc(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||oh(s)||lh(s)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zr=0,Ge=null,dn=null,In=null,rc=!1,Yi=!1,ii=!1,ac=0,vo=0,Zi=null,DM=0;function En(){throw Error(i(321))}function nf(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!Nt(t[s],r[s]))return!1;return!0}function tf(t,r,s,l,d,h){return zr=h,Ge=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_.H=t===null||t.memoizedState===null?dv:vf,ii=!1,h=s(l,d),ii=!1,Yi&&(h=Ry(r,s,l,d)),Ny(t),h}function Ny(t){_.H=So;var r=dn!==null&&dn.next!==null;if(zr=0,In=dn=Ge=null,rc=!1,vo=0,Zi=null,r)throw Error(i(300));t===null||Jn||(t=t.dependencies,t!==null&&Yl(t)&&(Jn=!0))}function Ry(t,r,s,l){Ge=t;var d=0;do{if(Yi&&(Zi=null),vo=0,Yi=!1,25<=d)throw Error(i(301));if(d+=1,In=dn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}_.H=fv,h=r(s,l)}while(Yi);return h}function EM(){var t=_.H,r=t.useState()[0];return r=typeof r.then=="function"?bo(r):r,t=t.useState()[0],(dn!==null?dn.memoizedState:null)!==t&&(Ge.flags|=1024),r}function rf(){var t=ac!==0;return ac=0,t}function af(t,r,s){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~s}function sf(t){if(rc){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}rc=!1}zr=0,In=dn=Ge=null,Yi=!1,vo=ac=0,Zi=null}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?Ge.memoizedState=In=t:In=In.next=t,In}function _n(){if(dn===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=dn.next;var r=In===null?Ge.memoizedState:In.next;if(r!==null)In=r,dn=t;else{if(t===null)throw Ge.alternate===null?Error(i(467)):Error(i(310));dn=t,t={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},In===null?Ge.memoizedState=In=t:In=In.next=t}return In}function ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(t){var r=vo;return vo+=1,Zi===null&&(Zi=[]),t=xy(Zi,t,r),r=Ge,(In===null?r.memoizedState:In.next)===null&&(r=r.alternate,_.H=r===null||r.memoizedState===null?dv:vf),t}function sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bo(t);if(t.$$typeof===P)return ot(t)}throw Error(i(438,String(t)))}function of(t){var r=null,s=Ge.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Ge.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=ic(),Ge.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(t),l=0;l<t;l++)s[l]=ae;return r.index++,s}function jr(t,r){return typeof r=="function"?r(t):r}function oc(t){var r=_n();return lf(r,dn,t)}function lf(t,r,s){var l=t.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=s;var d=t.baseQueue,h=l.pending;if(h!==null){if(d!==null){var b=d.next;d.next=h.next,h.next=b}r.baseQueue=d=h,l.pending=null}if(h=t.baseState,d===null)t.memoizedState=h;else{r=d.next;var C=b=null,k=null,I=r,W=!1;do{var $=I.lane&-536870913;if($!==I.lane?(Ye&$)===$:(zr&$)===$){var J=I.revertLane;if(J===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),$===Ii&&(W=!0);else if((zr&J)===J){I=I.next,J===Ii&&(W=!0);continue}else $={lane:0,revertLane:I.revertLane,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},k===null?(C=k=$,b=h):k=k.next=$,Ge.lanes|=J,ma|=J;$=I.action,ii&&s(h,$),h=I.hasEagerState?I.eagerState:s(h,$)}else J={lane:$,revertLane:I.revertLane,gesture:I.gesture,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},k===null?(C=k=J,b=h):k=k.next=J,Ge.lanes|=$,ma|=$;I=I.next}while(I!==null&&I!==r);if(k===null?b=h:k.next=C,!Nt(h,t.memoizedState)&&(Jn=!0,W&&(s=Ji,s!==null)))throw s;t.memoizedState=h,t.baseState=b,t.baseQueue=k,l.lastRenderedState=h}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function cf(t){var r=_n(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var l=s.dispatch,d=s.pending,h=r.memoizedState;if(d!==null){s.pending=null;var b=d=d.next;do h=t(h,b.action),b=b.next;while(b!==d);Nt(h,r.memoizedState)||(Jn=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),s.lastRenderedState=h}return[h,l]}function ky(t,r,s){var l=Ge,d=_n(),h=We;if(h){if(s===void 0)throw Error(i(407));s=s()}else s=r();var b=!Nt((dn||d).memoizedState,s);if(b&&(d.memoizedState=s,Jn=!0),d=d.queue,ff(Ly.bind(null,l,d,t),[t]),d.getSnapshot!==r||b||In!==null&&In.memoizedState.tag&1){if(l.flags|=2048,Wi(9,{destroy:void 0},By.bind(null,l,d,s,r),null),mn===null)throw Error(i(349));h||(zr&127)!==0||Py(l,r,s)}return s}function Py(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=Ge.updateQueue,r===null?(r=ic(),Ge.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function By(t,r,s,l){r.value=s,r.getSnapshot=l,_y(r)&&Oy(t)}function Ly(t,r,s){return s(function(){_y(r)&&Oy(t)})}function _y(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!Nt(t,s)}catch{return!0}}function Oy(t){var r=Wa(t,2);r!==null&&Tt(r,t,2)}function uf(t){var r=yt();if(typeof t=="function"){var s=t;if(t=s(),ii){Ft(!0);try{s()}finally{Ft(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:t},r}function zy(t,r,s,l){return t.baseState=s,lf(t,dn,typeof l=="function"?l:jr)}function NM(t,r,s,l,d){if(uc(t))throw Error(i(485));if(t=r.action,t!==null){var h={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};_.T!==null?s(!0):h.isTransition=!1,l(h),s=r.pending,s===null?(h.next=r.pending=h,jy(r,h)):(h.next=s.next,r.pending=s.next=h)}}function jy(t,r){var s=r.action,l=r.payload,d=t.state;if(r.isTransition){var h=_.T,b={};_.T=b;try{var C=s(d,l),k=_.S;k!==null&&k(b,C),Vy(t,r,C)}catch(I){df(t,r,I)}finally{h!==null&&b.types!==null&&(h.types=b.types),_.T=h}}else try{h=s(d,l),Vy(t,r,h)}catch(I){df(t,r,I)}}function Vy(t,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Gy(t,r,l)},function(l){return df(t,r,l)}):Gy(t,r,s)}function Gy(t,r,s){r.status="fulfilled",r.value=s,Fy(r),t.state=s,r=t.pending,r!==null&&(s=r.next,s===r?t.pending=null:(s=s.next,r.next=s,jy(t,s)))}function df(t,r,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,Fy(r),r=r.next;while(r!==l)}t.action=null}function Fy(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Hy(t,r){return r}function Iy(t,r){if(We){var s=mn.formState;if(s!==null){e:{var l=Ge;if(We){if(bn){n:{for(var d=bn,h=Yt;d.nodeType!==8;){if(!h){d=null;break n}if(d=Wt(d.nextSibling),d===null){d=null;break n}}h=d.data,d=h==="F!"||h==="F"?d:null}if(d){bn=Wt(d.nextSibling),l=d.data==="F!";break e}}ia(l)}l=!1}l&&(r=s[0])}}return s=yt(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hy,lastRenderedState:r},s.queue=l,s=lv.bind(null,Ge,l),l.dispatch=s,l=uf(!1),h=yf.bind(null,Ge,!1,l.queue),l=yt(),d={state:r,dispatch:null,action:t,pending:null},l.queue=d,s=NM.bind(null,Ge,d,h,s),d.dispatch=s,l.memoizedState=t,[r,s,!1]}function Jy(t){var r=_n();return Uy(r,dn,t)}function Uy(t,r,s){if(r=lf(t,r,Hy)[0],t=oc(jr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=bo(r)}catch(b){throw b===Ui?Xl:b}else l=r;r=_n();var d=r.queue,h=d.dispatch;return s!==r.memoizedState&&(Ge.flags|=2048,Wi(9,{destroy:void 0},RM.bind(null,d,s),null)),[l,h,t]}function RM(t,r){t.action=r}function qy(t){var r=_n(),s=dn;if(s!==null)return Uy(r,s,t);_n(),r=r.memoizedState,s=_n();var l=s.queue.dispatch;return s.memoizedState=t,[r,l,!1]}function Wi(t,r,s,l){return t={tag:t,create:s,deps:l,inst:r,next:null},r=Ge.updateQueue,r===null&&(r=ic(),Ge.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,r.lastEffect=t),t}function Ky(){return _n().memoizedState}function lc(t,r,s,l){var d=yt();Ge.flags|=t,d.memoizedState=Wi(1|r,{destroy:void 0},s,l===void 0?null:l)}function cc(t,r,s,l){var d=_n();l=l===void 0?null:l;var h=d.memoizedState.inst;dn!==null&&l!==null&&nf(l,dn.memoizedState.deps)?d.memoizedState=Wi(r,h,s,l):(Ge.flags|=t,d.memoizedState=Wi(1|r,h,s,l))}function Yy(t,r){lc(8390656,8,t,r)}function ff(t,r){cc(2048,8,t,r)}function kM(t){Ge.flags|=4;var r=Ge.updateQueue;if(r===null)r=ic(),Ge.updateQueue=r,r.events=[t];else{var s=r.events;s===null?r.events=[t]:s.push(t)}}function Zy(t){var r=_n().memoizedState;return kM({ref:r,nextImpl:t}),function(){if((rn&2)!==0)throw Error(i(440));return r.impl.apply(void 0,arguments)}}function Wy(t,r){return cc(4,2,t,r)}function Xy(t,r){return cc(4,4,t,r)}function Qy(t,r){if(typeof r=="function"){t=t();var s=r(t);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function $y(t,r,s){s=s!=null?s.concat([t]):null,cc(4,4,Qy.bind(null,r,t),s)}function hf(){}function ev(t,r){var s=_n();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&nf(r,l[1])?l[0]:(s.memoizedState=[t,r],t)}function nv(t,r){var s=_n();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&nf(r,l[1]))return l[0];if(l=t(),ii){Ft(!0);try{t()}finally{Ft(!1)}}return s.memoizedState=[l,r],l}function mf(t,r,s){return s===void 0||(zr&1073741824)!==0&&(Ye&261930)===0?t.memoizedState=r:(t.memoizedState=s,t=t1(),Ge.lanes|=t,ma|=t,s)}function tv(t,r,s,l){return Nt(s,r)?s:Ki.current!==null?(t=mf(t,s,l),Nt(t,r)||(Jn=!0),t):(zr&42)===0||(zr&1073741824)!==0&&(Ye&261930)===0?(Jn=!0,t.memoizedState=s):(t=t1(),Ge.lanes|=t,ma|=t,r)}function rv(t,r,s,l,d){var h=U.p;U.p=h!==0&&8>h?h:8;var b=_.T,C={};_.T=C,yf(t,!1,r,s);try{var k=d(),I=_.S;if(I!==null&&I(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var W=TM(k,l);xo(t,r,W,_t(t))}else xo(t,r,l,_t(t))}catch($){xo(t,r,{then:function(){},status:"rejected",reason:$},_t())}finally{U.p=h,b!==null&&C.types!==null&&(b.types=C.types),_.T=b}}function PM(){}function pf(t,r,s,l){if(t.tag!==5)throw Error(i(476));var d=av(t).queue;rv(t,d,r,V,s===null?PM:function(){return iv(t),s(l)})}function av(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:V},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:s},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function iv(t){var r=av(t);r.next===null&&(r=t.alternate.memoizedState),xo(t,r.next.queue,{},_t())}function gf(){return ot(zo)}function sv(){return _n().memoizedState}function ov(){return _n().memoizedState}function BM(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var s=_t();t=la(s);var l=ca(r,t,s);l!==null&&(Tt(l,r,s),po(l,r,s)),r={cache:Jd()},t.payload=r;return}r=r.return}}function LM(t,r,s){var l=_t();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},uc(t)?cv(r,s):(s=Bd(t,r,s,l),s!==null&&(Tt(s,t,l),uv(s,r,l)))}function lv(t,r,s){var l=_t();xo(t,r,s,l)}function xo(t,r,s,l){var d={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(uc(t))cv(r,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var b=r.lastRenderedState,C=h(b,s);if(d.hasEagerState=!0,d.eagerState=C,Nt(C,b))return Jl(t,r,d,0),mn===null&&Il(),!1}catch{}finally{}if(s=Bd(t,r,d,l),s!==null)return Tt(s,t,l),uv(s,r,l),!0}return!1}function yf(t,r,s,l){if(l={lane:2,revertLane:Zf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},uc(t)){if(r)throw Error(i(479))}else r=Bd(t,s,l,2),r!==null&&Tt(r,t,2)}function uc(t){var r=t.alternate;return t===Ge||r!==null&&r===Ge}function cv(t,r){Yi=rc=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function uv(t,r,s){if((s&4194048)!==0){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,pg(t,s)}}var So={readContext:ot,use:sc,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En};So.useEffectEvent=En;var dv={readContext:ot,use:sc,useCallback:function(t,r){return yt().memoizedState=[t,r===void 0?null:r],t},useContext:ot,useEffect:Yy,useImperativeHandle:function(t,r,s){s=s!=null?s.concat([t]):null,lc(4194308,4,Qy.bind(null,r,t),s)},useLayoutEffect:function(t,r){return lc(4194308,4,t,r)},useInsertionEffect:function(t,r){lc(4,2,t,r)},useMemo:function(t,r){var s=yt();r=r===void 0?null:r;var l=t();if(ii){Ft(!0);try{t()}finally{Ft(!1)}}return s.memoizedState=[l,r],l},useReducer:function(t,r,s){var l=yt();if(s!==void 0){var d=s(r);if(ii){Ft(!0);try{s(r)}finally{Ft(!1)}}}else d=r;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=LM.bind(null,Ge,t),[l.memoizedState,t]},useRef:function(t){var r=yt();return t={current:t},r.memoizedState=t},useState:function(t){t=uf(t);var r=t.queue,s=lv.bind(null,Ge,r);return r.dispatch=s,[t.memoizedState,s]},useDebugValue:hf,useDeferredValue:function(t,r){var s=yt();return mf(s,t,r)},useTransition:function(){var t=uf(!1);return t=rv.bind(null,Ge,t.queue,!0,!1),yt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,s){var l=Ge,d=yt();if(We){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),mn===null)throw Error(i(349));(Ye&127)!==0||Py(l,r,s)}d.memoizedState=s;var h={value:s,getSnapshot:r};return d.queue=h,Yy(Ly.bind(null,l,h,t),[t]),l.flags|=2048,Wi(9,{destroy:void 0},By.bind(null,l,h,s,r),null),s},useId:function(){var t=yt(),r=mn.identifierPrefix;if(We){var s=pr,l=mr;s=(l&~(1<<32-ft(l)-1)).toString(32)+s,r="_"+r+"R_"+s,s=ac++,0<s&&(r+="H"+s.toString(32)),r+="_"}else s=DM++,r="_"+r+"r_"+s.toString(32)+"_";return t.memoizedState=r},useHostTransitionStatus:gf,useFormState:Iy,useActionState:Iy,useOptimistic:function(t){var r=yt();r.memoizedState=r.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=yf.bind(null,Ge,!0,s),s.dispatch=r,[t,r]},useMemoCache:of,useCacheRefresh:function(){return yt().memoizedState=BM.bind(null,Ge)},useEffectEvent:function(t){var r=yt(),s={impl:t};return r.memoizedState=s,function(){if((rn&2)!==0)throw Error(i(440));return s.impl.apply(void 0,arguments)}}},vf={readContext:ot,use:sc,useCallback:ev,useContext:ot,useEffect:ff,useImperativeHandle:$y,useInsertionEffect:Wy,useLayoutEffect:Xy,useMemo:nv,useReducer:oc,useRef:Ky,useState:function(){return oc(jr)},useDebugValue:hf,useDeferredValue:function(t,r){var s=_n();return tv(s,dn.memoizedState,t,r)},useTransition:function(){var t=oc(jr)[0],r=_n().memoizedState;return[typeof t=="boolean"?t:bo(t),r]},useSyncExternalStore:ky,useId:sv,useHostTransitionStatus:gf,useFormState:Jy,useActionState:Jy,useOptimistic:function(t,r){var s=_n();return zy(s,dn,t,r)},useMemoCache:of,useCacheRefresh:ov};vf.useEffectEvent=Zy;var fv={readContext:ot,use:sc,useCallback:ev,useContext:ot,useEffect:ff,useImperativeHandle:$y,useInsertionEffect:Wy,useLayoutEffect:Xy,useMemo:nv,useReducer:cf,useRef:Ky,useState:function(){return cf(jr)},useDebugValue:hf,useDeferredValue:function(t,r){var s=_n();return dn===null?mf(s,t,r):tv(s,dn.memoizedState,t,r)},useTransition:function(){var t=cf(jr)[0],r=_n().memoizedState;return[typeof t=="boolean"?t:bo(t),r]},useSyncExternalStore:ky,useId:sv,useHostTransitionStatus:gf,useFormState:qy,useActionState:qy,useOptimistic:function(t,r){var s=_n();return dn!==null?zy(s,dn,t,r):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:of,useCacheRefresh:ov};fv.useEffectEvent=Zy;function bf(t,r,s,l){r=t.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var xf={enqueueSetState:function(t,r,s){t=t._reactInternals;var l=_t(),d=la(l);d.payload=r,s!=null&&(d.callback=s),r=ca(t,d,l),r!==null&&(Tt(r,t,l),po(r,t,l))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var l=_t(),d=la(l);d.tag=1,d.payload=r,s!=null&&(d.callback=s),r=ca(t,d,l),r!==null&&(Tt(r,t,l),po(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=_t(),l=la(s);l.tag=2,r!=null&&(l.callback=r),r=ca(t,l,s),r!==null&&(Tt(r,t,s),po(r,t,s))}};function hv(t,r,s,l,d,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):r.prototype&&r.prototype.isPureReactComponent?!so(s,l)||!so(d,h):!0}function mv(t,r,s,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==t&&xf.enqueueReplaceState(r,r.state,null)}function si(t,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(t=t.defaultProps){s===r&&(s=v({},s));for(var d in t)s[d]===void 0&&(s[d]=t[d])}return s}function pv(t){Hl(t)}function gv(t){console.error(t)}function yv(t){Hl(t)}function dc(t,r){try{var s=t.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function vv(t,r,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Sf(t,r,s){return s=la(s),s.tag=3,s.payload={element:null},s.callback=function(){dc(t,r)},s}function bv(t){return t=la(t),t.tag=3,t}function xv(t,r,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var h=l.value;t.payload=function(){return d(h)},t.callback=function(){vv(r,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){vv(r,s,l),typeof d!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function _M(t,r,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&Hi(r,s,d,!0),s=kt.current,s!==null){switch(s.tag){case 31:case 13:return Zt===null?Cc():s.alternate===null&&Nn===0&&(Nn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===Ql?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),qf(t,l,d)),!1;case 22:return s.flags|=65536,l===Ql?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),qf(t,l,d)),!1}throw Error(i(435,s.tag))}return qf(t,l,d),Cc(),!1}if(We)return r=kt.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,l!==Vd&&(t=Error(i(422),{cause:l}),co(Ut(t,s)))):(l!==Vd&&(r=Error(i(423),{cause:l}),co(Ut(r,s))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=Ut(l,s),d=Sf(t.stateNode,l,d),Wd(t,d),Nn!==4&&(Nn=2)),!1;var h=Error(i(520),{cause:l});if(h=Ut(h,s),No===null?No=[h]:No.push(h),Nn!==4&&(Nn=2),r===null)return!0;l=Ut(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,t=d&-d,s.lanes|=t,t=Sf(s.stateNode,l,t),Wd(s,t),!1;case 1:if(r=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pa===null||!pa.has(h))))return s.flags|=65536,d&=-d,s.lanes|=d,d=bv(d),xv(d,t,s,l),Wd(s,d),!1}s=s.return}while(s!==null);return!1}var Mf=Error(i(461)),Jn=!1;function lt(t,r,s,l){r.child=t===null?Ay(r,null,s,l):ai(r,t.child,s,l)}function Sv(t,r,s,l,d){s=s.render;var h=r.ref;if("ref"in l){var b={};for(var C in l)C!=="ref"&&(b[C]=l[C])}else b=l;return ei(r),l=tf(t,r,s,b,h,d),C=rf(),t!==null&&!Jn?(af(t,r,d),Vr(t,r,d)):(We&&C&&zd(r),r.flags|=1,lt(t,r,l,d),r.child)}function Mv(t,r,s,l,d){if(t===null){var h=s.type;return typeof h=="function"&&!Ld(h)&&h.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=h,Cv(t,r,h,l,d)):(t=ql(s.type,null,l,r,r.mode,d),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!Rf(t,d)){var b=h.memoizedProps;if(s=s.compare,s=s!==null?s:so,s(b,l)&&t.ref===r.ref)return Vr(t,r,d)}return r.flags|=1,t=Br(h,l),t.ref=r.ref,t.return=r,r.child=t}function Cv(t,r,s,l,d){if(t!==null){var h=t.memoizedProps;if(so(h,l)&&t.ref===r.ref)if(Jn=!1,r.pendingProps=l=h,Rf(t,d))(t.flags&131072)!==0&&(Jn=!0);else return r.lanes=t.lanes,Vr(t,r,d)}return Cf(t,r,s,l,d)}function Av(t,r,s,l){var d=l.children,h=t!==null?t.memoizedState:null;if(t===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((r.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=r.child=t.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~h}else l=0,r.child=null;return wv(t,r,h,s,l)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(r,h!==null?h.cachePool:null),h!==null?Dy(r,h):Qd(),Ey(r);else return l=r.lanes=536870912,wv(t,r,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(Wl(r,h.cachePool),Dy(r,h),da(),r.memoizedState=null):(t!==null&&Wl(r,null),Qd(),da());return lt(t,r,d,s),r.child}function Mo(t,r){return t!==null&&t.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function wv(t,r,s,l,d){var h=qd();return h=h===null?null:{parent:Hn._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},t!==null&&Wl(r,null),Qd(),Ey(r),t!==null&&Hi(t,r,l,!0),r.childLanes=d,null}function fc(t,r){return r=mc({mode:r.mode,children:r.children},t.mode),r.ref=t.ref,t.child=r,r.return=t,r}function Tv(t,r,s){return ai(r,t.child,null,s),t=fc(r,r.pendingProps),t.flags|=2,Pt(r),r.memoizedState=null,t}function OM(t,r,s){var l=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,t===null){if(We){if(l.mode==="hidden")return t=fc(r,l),r.lanes=536870912,Mo(null,t);if(ef(r),(t=bn)?(t=j1(t,Yt),t=t!==null&&t.data==="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:ra!==null?{id:mr,overflow:pr}:null,retryLane:536870912,hydrationErrors:null},s=cy(t),s.return=r,r.child=s,st=r,bn=null)):t=null,t===null)throw ia(r);return r.lanes=536870912,null}return fc(r,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(ef(r),d)if(r.flags&256)r.flags&=-257,r=Tv(t,r,s);else if(r.memoizedState!==null)r.child=t.child,r.flags|=128,r=null;else throw Error(i(558));else if(Jn||Hi(t,r,s,!1),d=(s&t.childLanes)!==0,Jn||d){if(l=mn,l!==null&&(b=gg(l,s),b!==0&&b!==h.retryLane))throw h.retryLane=b,Wa(t,b),Tt(l,t,b),Mf;Cc(),r=Tv(t,r,s)}else t=h.treeContext,bn=Wt(b.nextSibling),st=r,We=!0,aa=null,Yt=!1,t!==null&&fy(r,t),r=fc(r,l),r.flags|=4096;return r}return t=Br(t.child,{mode:l.mode,children:l.children}),t.ref=r.ref,r.child=t,t.return=r,t}function hc(t,r){var s=r.ref;if(s===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(t===null||t.ref!==s)&&(r.flags|=4194816)}}function Cf(t,r,s,l,d){return ei(r),s=tf(t,r,s,l,void 0,d),l=rf(),t!==null&&!Jn?(af(t,r,d),Vr(t,r,d)):(We&&l&&zd(r),r.flags|=1,lt(t,r,s,d),r.child)}function Dv(t,r,s,l,d,h){return ei(r),r.updateQueue=null,s=Ry(r,l,s,d),Ny(t),l=rf(),t!==null&&!Jn?(af(t,r,h),Vr(t,r,h)):(We&&l&&zd(r),r.flags|=1,lt(t,r,s,h),r.child)}function Ev(t,r,s,l,d){if(ei(r),r.stateNode===null){var h=ji,b=s.contextType;typeof b=="object"&&b!==null&&(h=ot(b)),h=new s(l,h),r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=xf,r.stateNode=h,h._reactInternals=r,h=r.stateNode,h.props=l,h.state=r.memoizedState,h.refs={},Yd(r),b=s.contextType,h.context=typeof b=="object"&&b!==null?ot(b):ji,h.state=r.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(bf(r,s,b,l),h.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&xf.enqueueReplaceState(h,h.state,null),yo(r,l,h,d),go(),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){h=r.stateNode;var C=r.memoizedProps,k=si(s,C);h.props=k;var I=h.context,W=s.contextType;b=ji,typeof W=="object"&&W!==null&&(b=ot(W));var $=s.getDerivedStateFromProps;W=typeof $=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=r.pendingProps!==C,W||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||I!==b)&&mv(r,h,l,b),oa=!1;var J=r.memoizedState;h.state=J,yo(r,l,h,d),go(),I=r.memoizedState,C||J!==I||oa?(typeof $=="function"&&(bf(r,s,$,l),I=r.memoizedState),(k=oa||hv(r,s,k,l,J,I,b))?(W||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(r.flags|=4194308)):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=I),h.props=l,h.state=I,h.context=b,l=k):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{h=r.stateNode,Zd(t,r),b=r.memoizedProps,W=si(s,b),h.props=W,$=r.pendingProps,J=h.context,I=s.contextType,k=ji,typeof I=="object"&&I!==null&&(k=ot(I)),C=s.getDerivedStateFromProps,(I=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==$||J!==k)&&mv(r,h,l,k),oa=!1,J=r.memoizedState,h.state=J,yo(r,l,h,d),go();var K=r.memoizedState;b!==$||J!==K||oa||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof C=="function"&&(bf(r,s,C,l),K=r.memoizedState),(W=oa||hv(r,s,W,l,J,K,k)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(I||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,K,k),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,K,k)),typeof h.componentDidUpdate=="function"&&(r.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&J===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&J===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=K),h.props=l,h.state=K,h.context=k,l=W):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&J===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&J===t.memoizedState||(r.flags|=1024),l=!1)}return h=l,hc(t,r),l=(r.flags&128)!==0,h||l?(h=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),r.flags|=1,t!==null&&l?(r.child=ai(r,t.child,null,d),r.child=ai(r,null,s,d)):lt(t,r,s,d),r.memoizedState=h.state,t=r.child):t=Vr(t,r,d),t}function Nv(t,r,s,l){return Qa(),r.flags|=256,lt(t,r,s,l),r.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:vy()}}function Tf(t,r,s){return t=t!==null?t.childLanes&~s:0,r&&(t|=Lt),t}function Rv(t,r,s){var l=r.pendingProps,d=!1,h=(r.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(Ln.current&2)!==0),b&&(d=!0,r.flags&=-129),b=(r.flags&32)!==0,r.flags&=-33,t===null){if(We){if(d?ua(r):da(),(t=bn)?(t=j1(t,Yt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:ra!==null?{id:mr,overflow:pr}:null,retryLane:536870912,hydrationErrors:null},s=cy(t),s.return=r,r.child=s,st=r,bn=null)):t=null,t===null)throw ia(r);return lh(t)?r.lanes=32:r.lanes=536870912,null}var C=l.children;return l=l.fallback,d?(da(),d=r.mode,C=mc({mode:"hidden",children:C},d),l=Xa(l,d,s,null),C.return=r,l.return=r,C.sibling=l,r.child=C,l=r.child,l.memoizedState=wf(s),l.childLanes=Tf(t,b,s),r.memoizedState=Af,Mo(null,l)):(ua(r),Df(r,C))}var k=t.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(h)r.flags&256?(ua(r),r.flags&=-257,r=Ef(t,r,s)):r.memoizedState!==null?(da(),r.child=t.child,r.flags|=128,r=null):(da(),C=l.fallback,d=r.mode,l=mc({mode:"visible",children:l.children},d),C=Xa(C,d,s,null),C.flags|=2,l.return=r,C.return=r,l.sibling=C,r.child=l,ai(r,t.child,null,s),l=r.child,l.memoizedState=wf(s),l.childLanes=Tf(t,b,s),r.memoizedState=Af,r=Mo(null,l));else if(ua(r),lh(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var I=b.dgst;b=I,l=Error(i(419)),l.stack="",l.digest=b,co({value:l,source:null,stack:null}),r=Ef(t,r,s)}else if(Jn||Hi(t,r,s,!1),b=(s&t.childLanes)!==0,Jn||b){if(b=mn,b!==null&&(l=gg(b,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,Wa(t,l),Tt(b,t,l),Mf;oh(C)||Cc(),r=Ef(t,r,s)}else oh(C)?(r.flags|=192,r.child=t.child,r=null):(t=k.treeContext,bn=Wt(C.nextSibling),st=r,We=!0,aa=null,Yt=!1,t!==null&&fy(r,t),r=Df(r,l.children),r.flags|=4096);return r}return d?(da(),C=l.fallback,d=r.mode,k=t.child,I=k.sibling,l=Br(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,I!==null?C=Br(I,C):(C=Xa(C,d,s,null),C.flags|=2),C.return=r,l.return=r,l.sibling=C,r.child=l,Mo(null,l),l=r.child,C=t.child.memoizedState,C===null?C=wf(s):(d=C.cachePool,d!==null?(k=Hn._currentValue,d=d.parent!==k?{parent:k,pool:k}:d):d=vy(),C={baseLanes:C.baseLanes|s,cachePool:d}),l.memoizedState=C,l.childLanes=Tf(t,b,s),r.memoizedState=Af,Mo(t.child,l)):(ua(r),s=t.child,t=s.sibling,s=Br(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,t!==null&&(b=r.deletions,b===null?(r.deletions=[t],r.flags|=16):b.push(t)),r.child=s,r.memoizedState=null,s)}function Df(t,r){return r=mc({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function mc(t,r){return t=Rt(22,t,null,r),t.lanes=0,t}function Ef(t,r,s){return ai(r,t.child,null,s),t=Df(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function kv(t,r,s){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Hd(t.return,r,s)}function Nf(t,r,s,l,d,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d,treeForkCount:h}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=d,b.treeForkCount=h)}function Pv(t,r,s){var l=r.pendingProps,d=l.revealOrder,h=l.tail;l=l.children;var b=Ln.current,C=(b&2)!==0;if(C?(b=b&1|2,r.flags|=128):b&=1,ne(Ln,b),lt(t,r,l,s),l=We?lo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kv(t,s,r);else if(t.tag===19)kv(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(s=r.child,d=null;s!==null;)t=s.alternate,t!==null&&tc(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=r.child,r.child=null):(d=s.sibling,s.sibling=null),Nf(r,!1,d,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=r.child,r.child=null;d!==null;){if(t=d.alternate,t!==null&&tc(t)===null){r.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}Nf(r,!0,s,null,h,l);break;case"together":Nf(r,!1,null,null,void 0,l);break;default:r.memoizedState=null}return r.child}function Vr(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),ma|=r.lanes,(s&r.childLanes)===0)if(t!==null){if(Hi(t,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,s=Br(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=Br(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function Rf(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function zM(t,r,s){switch(r.tag){case 3:Pe(r,r.stateNode.containerInfo),sa(r,Hn,t.memoizedState.cache),Qa();break;case 27:case 5:ee(r);break;case 4:Pe(r,r.stateNode.containerInfo);break;case 10:sa(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,ef(r),null;break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(ua(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Rv(t,r,s):(ua(r),t=Vr(t,r,s),t!==null?t.sibling:null);ua(r);break;case 19:var d=(t.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(Hi(t,r,s,!1),l=(s&r.childLanes)!==0),d){if(l)return Pv(t,r,s);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ne(Ln,Ln.current),l)break;return null;case 22:return r.lanes=0,Av(t,r,s,r.pendingProps);case 24:sa(r,Hn,t.memoizedState.cache)}return Vr(t,r,s)}function Bv(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps)Jn=!0;else{if(!Rf(t,s)&&(r.flags&128)===0)return Jn=!1,zM(t,r,s);Jn=(t.flags&131072)!==0}else Jn=!1,We&&(r.flags&1048576)!==0&&dy(r,lo,r.index);switch(r.lanes=0,r.tag){case 16:e:{var l=r.pendingProps;if(t=ti(r.elementType),r.type=t,typeof t=="function")Ld(t)?(l=si(t,l),r.tag=1,r=Ev(null,r,t,l,s)):(r.tag=0,r=Cf(null,r,t,l,s));else{if(t!=null){var d=t.$$typeof;if(d===j){r.tag=11,r=Sv(null,r,t,l,s);break e}else if(d===B){r.tag=14,r=Mv(null,r,t,l,s);break e}}throw r=le(t)||t,Error(i(306,r,""))}}return r;case 0:return Cf(t,r,r.type,r.pendingProps,s);case 1:return l=r.type,d=si(l,r.pendingProps),Ev(t,r,l,d,s);case 3:e:{if(Pe(r,r.stateNode.containerInfo),t===null)throw Error(i(387));l=r.pendingProps;var h=r.memoizedState;d=h.element,Zd(t,r),yo(r,l,null,s);var b=r.memoizedState;if(l=b.cache,sa(r,Hn,l),l!==h.cache&&Id(r,[Hn],s,!0),go(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){r=Nv(t,r,l,s);break e}else if(l!==d){d=Ut(Error(i(424)),r),co(d),r=Nv(t,r,l,s);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(bn=Wt(t.firstChild),st=r,We=!0,aa=null,Yt=!0,s=Ay(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Qa(),l===d){r=Vr(t,r,s);break e}lt(t,r,l,s)}r=r.child}return r;case 26:return hc(t,r),t===null?(s=J1(r.type,null,r.pendingProps,null))?r.memoizedState=s:We||(s=r.type,t=r.pendingProps,l=Rc(Ce.current).createElement(s),l[it]=r,l[xt]=t,ct(l,s,t),et(l),r.stateNode=l):r.memoizedState=J1(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return ee(r),t===null&&We&&(l=r.stateNode=F1(r.type,r.pendingProps,Ce.current),st=r,Yt=!0,d=bn,ba(r.type)?(ch=d,bn=Wt(l.firstChild)):bn=d),lt(t,r,r.pendingProps.children,s),hc(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&We&&((d=l=bn)&&(l=hC(l,r.type,r.pendingProps,Yt),l!==null?(r.stateNode=l,st=r,bn=Wt(l.firstChild),Yt=!1,d=!0):d=!1),d||ia(r)),ee(r),d=r.type,h=r.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,ah(d,h)?l=null:b!==null&&ah(d,b)&&(r.flags|=32),r.memoizedState!==null&&(d=tf(t,r,EM,null,null,s),zo._currentValue=d),hc(t,r),lt(t,r,l,s),r.child;case 6:return t===null&&We&&((t=s=bn)&&(s=mC(s,r.pendingProps,Yt),s!==null?(r.stateNode=s,st=r,bn=null,t=!0):t=!1),t||ia(r)),null;case 13:return Rv(t,r,s);case 4:return Pe(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=ai(r,null,l,s):lt(t,r,l,s),r.child;case 11:return Sv(t,r,r.type,r.pendingProps,s);case 7:return lt(t,r,r.pendingProps,s),r.child;case 8:return lt(t,r,r.pendingProps.children,s),r.child;case 12:return lt(t,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,sa(r,r.type,l.value),lt(t,r,l.children,s),r.child;case 9:return d=r.type._context,l=r.pendingProps.children,ei(r),d=ot(d),l=l(d),r.flags|=1,lt(t,r,l,s),r.child;case 14:return Mv(t,r,r.type,r.pendingProps,s);case 15:return Cv(t,r,r.type,r.pendingProps,s);case 19:return Pv(t,r,s);case 31:return OM(t,r,s);case 22:return Av(t,r,s,r.pendingProps);case 24:return ei(r),l=ot(Hn),t===null?(d=qd(),d===null&&(d=mn,h=Jd(),d.pooledCache=h,h.refCount++,h!==null&&(d.pooledCacheLanes|=s),d=h),r.memoizedState={parent:l,cache:d},Yd(r),sa(r,Hn,d)):((t.lanes&s)!==0&&(Zd(t,r),yo(r,null,null,s),go()),d=t.memoizedState,h=r.memoizedState,d.parent!==l?(d={parent:l,cache:l},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),sa(r,Hn,l)):(l=h.cache,sa(r,Hn,l),l!==d.cache&&Id(r,[Hn],s,!0))),lt(t,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function Gr(t){t.flags|=4}function kf(t,r,s,l,d){if((r=(t.mode&32)!==0)&&(r=!1),r){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(s1())t.flags|=8192;else throw ri=Ql,Kd}else t.flags&=-16777217}function Lv(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Z1(r))if(s1())t.flags|=8192;else throw ri=Ql,Kd}function pc(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?hg():536870912,t.lanes|=r,es|=r)}function Co(t,r){if(!We)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(r)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=s,r}function jM(t,r,s){var l=r.pendingProps;switch(jd(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(r),null;case 1:return xn(r),null;case 3:return s=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Or(Hn),pe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Fi(r)?Gr(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Gd())),xn(r),null;case 26:var d=r.type,h=r.memoizedState;return t===null?(Gr(r),h!==null?(xn(r),Lv(r,h)):(xn(r),kf(r,d,null,l,s))):h?h!==t.memoizedState?(Gr(r),xn(r),Lv(r,h)):(xn(r),r.flags&=-16777217):(t=t.memoizedProps,t!==l&&Gr(r),xn(r),kf(r,d,t,l,s)),null;case 27:if(xe(r),s=Ce.current,d=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Gr(r);else{if(!l){if(r.stateNode===null)throw Error(i(166));return xn(r),null}t=oe.current,Fi(r)?hy(r):(t=F1(d,l,s),r.stateNode=t,Gr(r))}return xn(r),null;case 5:if(xe(r),d=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Gr(r);else{if(!l){if(r.stateNode===null)throw Error(i(166));return xn(r),null}if(h=oe.current,Fi(r))hy(r);else{var b=Rc(Ce.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(d,{is:l.is}):b.createElement(d)}}h[it]=r,h[xt]=l;e:for(b=r.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===r)break e;for(;b.sibling===null;){if(b.return===null||b.return===r)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}r.stateNode=h;e:switch(ct(h,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Gr(r)}}return xn(r),kf(r,r.type,t===null?null:t.memoizedProps,r.pendingProps,s),null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&Gr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(i(166));if(t=Ce.current,Fi(r)){if(t=r.stateNode,s=r.memoizedProps,l=null,d=st,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[it]=r,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||R1(t.nodeValue,s)),t||ia(r,!0)}else t=Rc(t).createTextNode(l),t[it]=r,r.stateNode=t}return xn(r),null;case 31:if(s=r.memoizedState,t===null||t.memoizedState!==null){if(l=Fi(r),s!==null){if(t===null){if(!l)throw Error(i(318));if(t=r.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(557));t[it]=r}else Qa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;xn(r),t=!1}else s=Gd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return r.flags&256?(Pt(r),r):(Pt(r),null);if((r.flags&128)!==0)throw Error(i(558))}return xn(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=Fi(r),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(i(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[it]=r}else Qa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;xn(r),d=!1}else d=Gd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(Pt(r),r):(Pt(r),null)}return Pt(r),(r.flags&128)!==0?(r.lanes=s,r):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=r.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==d&&(l.flags|=2048)),s!==t&&s&&(r.child.flags|=8192),pc(r,r.updateQueue),xn(r),null);case 4:return pe(),t===null&&$f(r.stateNode.containerInfo),xn(r),null;case 10:return Or(r.type),xn(r),null;case 19:if(Z(Ln),l=r.memoizedState,l===null)return xn(r),null;if(d=(r.flags&128)!==0,h=l.rendering,h===null)if(d)Co(l,!1);else{if(Nn!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(h=tc(t),h!==null){for(r.flags|=128,Co(l,!1),t=h.updateQueue,r.updateQueue=t,pc(r,t),r.subtreeFlags=0,t=s,s=r.child;s!==null;)ly(s,t),s=s.sibling;return ne(Ln,Ln.current&1|2),We&&Lr(r,l.treeForkCount),r.child}t=t.sibling}l.tail!==null&&ie()>xc&&(r.flags|=128,d=!0,Co(l,!1),r.lanes=4194304)}else{if(!d)if(t=tc(h),t!==null){if(r.flags|=128,d=!0,t=t.updateQueue,r.updateQueue=t,pc(r,t),Co(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!We)return xn(r),null}else 2*ie()-l.renderingStartTime>xc&&s!==536870912&&(r.flags|=128,d=!0,Co(l,!1),r.lanes=4194304);l.isBackwards?(h.sibling=r.child,r.child=h):(t=l.last,t!==null?t.sibling=h:r.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ie(),t.sibling=null,s=Ln.current,ne(Ln,d?s&1|2:s&1),We&&Lr(r,l.treeForkCount),t):(xn(r),null);case 22:case 23:return Pt(r),$d(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(xn(r),r.subtreeFlags&6&&(r.flags|=8192)):xn(r),s=r.updateQueue,s!==null&&pc(r,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),t!==null&&Z(ni),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Or(Hn),xn(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function VM(t,r){switch(jd(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Or(Hn),pe(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return xe(r),null;case 31:if(r.memoizedState!==null){if(Pt(r),r.alternate===null)throw Error(i(340));Qa()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 13:if(Pt(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Qa()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Z(Ln),null;case 4:return pe(),null;case 10:return Or(r.type),null;case 22:case 23:return Pt(r),$d(),t!==null&&Z(ni),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Or(Hn),null;case 25:return null;default:return null}}function _v(t,r){switch(jd(r),r.tag){case 3:Or(Hn),pe();break;case 26:case 27:case 5:xe(r);break;case 4:pe();break;case 31:r.memoizedState!==null&&Pt(r);break;case 13:Pt(r);break;case 19:Z(Ln);break;case 10:Or(r.type);break;case 22:case 23:Pt(r),$d(),t!==null&&Z(ni);break;case 24:Or(Hn)}}function Ao(t,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&t)===t){l=void 0;var h=s.create,b=s.inst;l=h(),b.destroy=l}s=s.next}while(s!==d)}}catch(C){ln(r,r.return,C)}}function fa(t,r,s){try{var l=r.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var h=d.next;l=h;do{if((l.tag&t)===t){var b=l.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,d=r;var k=s,I=C;try{I()}catch(W){ln(d,k,W)}}}l=l.next}while(l!==h)}}catch(W){ln(r,r.return,W)}}function Ov(t){var r=t.updateQueue;if(r!==null){var s=t.stateNode;try{Ty(r,s)}catch(l){ln(t,t.return,l)}}}function zv(t,r,s){s.props=si(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){ln(t,r,l)}}function wo(t,r){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(d){ln(t,r,d)}}function gr(t,r){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){ln(t,r,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){ln(t,r,d)}else s.current=null}function jv(t){var r=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){ln(t,t.return,d)}}function Pf(t,r,s){try{var l=t.stateNode;oC(l,t.type,s,r),l[xt]=r}catch(d){ln(t,t.return,d)}}function Vv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function Bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(t),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=kr));else if(l!==4&&(l===27&&ba(t.type)&&(s=t.stateNode,r=null),t=t.child,t!==null))for(Lf(t,r,s),t=t.sibling;t!==null;)Lf(t,r,s),t=t.sibling}function gc(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(l!==4&&(l===27&&ba(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(gc(t,r,s),t=t.sibling;t!==null;)gc(t,r,s),t=t.sibling}function Gv(t){var r=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);ct(r,l,s),r[it]=t,r[xt]=s}catch(h){ln(t,t.return,h)}}var Fr=!1,Un=!1,_f=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,nt=null;function GM(t,r){if(t=t.containerInfo,th=zc,t=$g(t),Dd(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var b=0,C=-1,k=-1,I=0,W=0,$=t,J=null;n:for(;;){for(var K;$!==s||d!==0&&$.nodeType!==3||(C=b+d),$!==h||l!==0&&$.nodeType!==3||(k=b+l),$.nodeType===3&&(b+=$.nodeValue.length),(K=$.firstChild)!==null;)J=$,$=K;for(;;){if($===t)break n;if(J===s&&++I===d&&(C=b),J===h&&++W===l&&(k=b),(K=$.nextSibling)!==null)break;$=J,J=$.parentNode}$=K}s=C===-1||k===-1?null:{start:C,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(rh={focusedElem:t,selectionRange:s},zc=!1,nt=r;nt!==null;)if(r=nt,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,nt=t;else for(;nt!==null;){switch(r=nt,h=r.alternate,t=r.flags,r.tag){case 0:if((t&4)!==0&&(t=r.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)d=t[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=r,d=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var Me=si(s.type,d);t=l.getSnapshotBeforeUpdate(Me,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(Le){ln(s,s.return,Le)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,s=t.nodeType,s===9)sh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(i(163))}if(t=r.sibling,t!==null){t.return=r.return,nt=t;break}nt=r.return}}function Hv(t,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ir(t,s),l&4&&Ao(5,s);break;case 1:if(Ir(t,s),l&4)if(t=s.stateNode,r===null)try{t.componentDidMount()}catch(b){ln(s,s.return,b)}else{var d=si(s.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(d,r,t.__reactInternalSnapshotBeforeUpdate)}catch(b){ln(s,s.return,b)}}l&64&&Ov(s),l&512&&wo(s,s.return);break;case 3:if(Ir(t,s),l&64&&(t=s.updateQueue,t!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{Ty(t,r)}catch(b){ln(s,s.return,b)}}break;case 27:r===null&&l&4&&Gv(s);case 26:case 5:Ir(t,s),r===null&&l&4&&jv(s),l&512&&wo(s,s.return);break;case 12:Ir(t,s);break;case 31:Ir(t,s),l&4&&Uv(t,s);break;case 13:Ir(t,s),l&4&&qv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=ZM.bind(null,s),pC(t,s))));break;case 22:if(l=s.memoizedState!==null||Fr,!l){r=r!==null&&r.memoizedState!==null||Un,d=Fr;var h=Un;Fr=l,(Un=r)&&!h?Jr(t,s,(s.subtreeFlags&8772)!==0):Ir(t,s),Fr=d,Un=h}break;case 30:break;default:Ir(t,s)}}function Iv(t){var r=t.alternate;r!==null&&(t.alternate=null,Iv(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&ud(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Mn=null,Mt=!1;function Hr(t,r,s){for(s=s.child;s!==null;)Jv(t,r,s),s=s.sibling}function Jv(t,r,s){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(at,s)}catch{}switch(s.tag){case 26:Un||gr(s,r),Hr(t,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Un||gr(s,r);var l=Mn,d=Mt;ba(s.type)&&(Mn=s.stateNode,Mt=!1),Hr(t,r,s),Lo(s.stateNode),Mn=l,Mt=d;break;case 5:Un||gr(s,r);case 6:if(l=Mn,d=Mt,Mn=null,Hr(t,r,s),Mn=l,Mt=d,Mn!==null)if(Mt)try{(Mn.nodeType===9?Mn.body:Mn.nodeName==="HTML"?Mn.ownerDocument.body:Mn).removeChild(s.stateNode)}catch(h){ln(s,r,h)}else try{Mn.removeChild(s.stateNode)}catch(h){ln(s,r,h)}break;case 18:Mn!==null&&(Mt?(t=Mn,O1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),ls(t)):O1(Mn,s.stateNode));break;case 4:l=Mn,d=Mt,Mn=s.stateNode.containerInfo,Mt=!0,Hr(t,r,s),Mn=l,Mt=d;break;case 0:case 11:case 14:case 15:fa(2,s,r),Un||fa(4,s,r),Hr(t,r,s);break;case 1:Un||(gr(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&zv(s,r,l)),Hr(t,r,s);break;case 21:Hr(t,r,s);break;case 22:Un=(l=Un)||s.memoizedState!==null,Hr(t,r,s),Un=l;break;default:Hr(t,r,s)}}function Uv(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ls(t)}catch(s){ln(r,r.return,s)}}}function qv(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ls(t)}catch(s){ln(r,r.return,s)}}function FM(t){switch(t.tag){case 31:case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Fv),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Fv),r;default:throw Error(i(435,t.tag))}}function yc(t,r){var s=FM(t);r.forEach(function(l){if(!s.has(l)){s.add(l);var d=WM.bind(null,t,l);l.then(d,d)}})}function Ct(t,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],h=t,b=r,C=b;e:for(;C!==null;){switch(C.tag){case 27:if(ba(C.type)){Mn=C.stateNode,Mt=!1;break e}break;case 5:Mn=C.stateNode,Mt=!1;break e;case 3:case 4:Mn=C.stateNode.containerInfo,Mt=!0;break e}C=C.return}if(Mn===null)throw Error(i(160));Jv(h,b,d),Mn=null,Mt=!1,h=d.alternate,h!==null&&(h.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Kv(r,t),r=r.sibling}var ar=null;function Kv(t,r){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ct(r,t),At(t),l&4&&(fa(3,t,t.return),Ao(3,t),fa(5,t,t.return));break;case 1:Ct(r,t),At(t),l&512&&(Un||s===null||gr(s,s.return)),l&64&&Fr&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=ar;if(Ct(r,t),At(t),l&512&&(Un||s===null||gr(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,d=d.ownerDocument||d;n:switch(l){case"title":h=d.getElementsByTagName("title")[0],(!h||h[Xs]||h[it]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=d.createElement(l),d.head.insertBefore(h,d.querySelector("head > title"))),ct(h,l,s),h[it]=t,et(h),l=h;break e;case"link":var b=K1("link","href",d).get(l+(s.href||""));if(b){for(var C=0;C<b.length;C++)if(h=b[C],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(C,1);break n}}h=d.createElement(l),ct(h,l,s),d.head.appendChild(h);break;case"meta":if(b=K1("meta","content",d).get(l+(s.content||""))){for(C=0;C<b.length;C++)if(h=b[C],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(C,1);break n}}h=d.createElement(l),ct(h,l,s),d.head.appendChild(h);break;default:throw Error(i(468,l))}h[it]=t,et(h),l=h}t.stateNode=l}else Y1(d,t.type,t.stateNode);else t.stateNode=q1(d,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?Y1(d,t.type,t.stateNode):q1(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Pf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Ct(r,t),At(t),l&512&&(Un||s===null||gr(s,s.return)),s!==null&&l&4&&Pf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Ct(r,t),At(t),l&512&&(Un||s===null||gr(s,s.return)),t.flags&32){d=t.stateNode;try{ki(d,"")}catch(Me){ln(t,t.return,Me)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,Pf(t,d,s!==null?s.memoizedProps:d)),l&1024&&(_f=!0);break;case 6:if(Ct(r,t),At(t),l&4){if(t.stateNode===null)throw Error(i(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Me){ln(t,t.return,Me)}}break;case 3:if(Bc=null,d=ar,ar=kc(r.containerInfo),Ct(r,t),ar=d,At(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ls(r.containerInfo)}catch(Me){ln(t,t.return,Me)}_f&&(_f=!1,Yv(t));break;case 4:l=ar,ar=kc(t.stateNode.containerInfo),Ct(r,t),At(t),ar=l;break;case 12:Ct(r,t),At(t);break;case 31:Ct(r,t),At(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 13:Ct(r,t),At(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(bc=ie()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 22:d=t.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,I=Fr,W=Un;if(Fr=I||d,Un=W||k,Ct(r,t),Un=W,Fr=I,At(t),l&8192)e:for(r=t.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(s===null||k||Fr||Un||oi(t)),s=null,r=t;;){if(r.tag===5||r.tag===26){if(s===null){k=s=r;try{if(h=k.stateNode,d)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=k.stateNode;var $=k.memoizedProps.style,J=$!=null&&$.hasOwnProperty("display")?$.display:null;C.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Me){ln(k,k.return,Me)}}}else if(r.tag===6){if(s===null){k=r;try{k.stateNode.nodeValue=d?"":k.memoizedProps}catch(Me){ln(k,k.return,Me)}}}else if(r.tag===18){if(s===null){k=r;try{var K=k.stateNode;d?z1(K,!0):z1(k.stateNode,!1)}catch(Me){ln(k,k.return,Me)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yc(t,s))));break;case 19:Ct(r,t),At(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 30:break;case 21:break;default:Ct(r,t),At(t)}}function At(t){var r=t.flags;if(r&2){try{for(var s,l=t.return;l!==null;){if(Vv(l)){s=l;break}l=l.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var d=s.stateNode,h=Bf(t);gc(t,h,d);break;case 5:var b=s.stateNode;s.flags&32&&(ki(b,""),s.flags&=-33);var C=Bf(t);gc(t,C,b);break;case 3:case 4:var k=s.stateNode.containerInfo,I=Bf(t);Lf(t,I,k);break;default:throw Error(i(161))}}catch(W){ln(t,t.return,W)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Yv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Yv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Ir(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Hv(t,r.alternate,r),r=r.sibling}function oi(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:fa(4,r,r.return),oi(r);break;case 1:gr(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&zv(r,r.return,s),oi(r);break;case 27:Lo(r.stateNode);case 26:case 5:gr(r,r.return),oi(r);break;case 22:r.memoizedState===null&&oi(r);break;case 30:oi(r);break;default:oi(r)}t=t.sibling}}function Jr(t,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,d=t,h=r,b=h.flags;switch(h.tag){case 0:case 11:case 15:Jr(d,h,s),Ao(4,h);break;case 1:if(Jr(d,h,s),l=h,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(I){ln(l,l.return,I)}if(l=h,d=l.updateQueue,d!==null){var C=l.stateNode;try{var k=d.shared.hiddenCallbacks;if(k!==null)for(d.shared.hiddenCallbacks=null,d=0;d<k.length;d++)wy(k[d],C)}catch(I){ln(l,l.return,I)}}s&&b&64&&Ov(h),wo(h,h.return);break;case 27:Gv(h);case 26:case 5:Jr(d,h,s),s&&l===null&&b&4&&jv(h),wo(h,h.return);break;case 12:Jr(d,h,s);break;case 31:Jr(d,h,s),s&&b&4&&Uv(d,h);break;case 13:Jr(d,h,s),s&&b&4&&qv(d,h);break;case 22:h.memoizedState===null&&Jr(d,h,s),wo(h,h.return);break;case 30:break;default:Jr(d,h,s)}r=r.sibling}}function Of(t,r){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&uo(s))}function zf(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&uo(t))}function ir(t,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Zv(t,r,s,l),r=r.sibling}function Zv(t,r,s,l){var d=r.flags;switch(r.tag){case 0:case 11:case 15:ir(t,r,s,l),d&2048&&Ao(9,r);break;case 1:ir(t,r,s,l);break;case 3:ir(t,r,s,l),d&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&uo(t)));break;case 12:if(d&2048){ir(t,r,s,l),t=r.stateNode;try{var h=r.memoizedProps,b=h.id,C=h.onPostCommit;typeof C=="function"&&C(b,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){ln(r,r.return,k)}}else ir(t,r,s,l);break;case 31:ir(t,r,s,l);break;case 13:ir(t,r,s,l);break;case 23:break;case 22:h=r.stateNode,b=r.alternate,r.memoizedState!==null?h._visibility&2?ir(t,r,s,l):To(t,r):h._visibility&2?ir(t,r,s,l):(h._visibility|=2,Xi(t,r,s,l,(r.subtreeFlags&10256)!==0||!1)),d&2048&&Of(b,r);break;case 24:ir(t,r,s,l),d&2048&&zf(r.alternate,r);break;default:ir(t,r,s,l)}}function Xi(t,r,s,l,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var h=t,b=r,C=s,k=l,I=b.flags;switch(b.tag){case 0:case 11:case 15:Xi(h,b,C,k,d),Ao(8,b);break;case 23:break;case 22:var W=b.stateNode;b.memoizedState!==null?W._visibility&2?Xi(h,b,C,k,d):To(h,b):(W._visibility|=2,Xi(h,b,C,k,d)),d&&I&2048&&Of(b.alternate,b);break;case 24:Xi(h,b,C,k,d),d&&I&2048&&zf(b.alternate,b);break;default:Xi(h,b,C,k,d)}r=r.sibling}}function To(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=t,l=r,d=l.flags;switch(l.tag){case 22:To(s,l),d&2048&&Of(l.alternate,l);break;case 24:To(s,l),d&2048&&zf(l.alternate,l);break;default:To(s,l)}r=r.sibling}}var Do=8192;function Qi(t,r,s){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)Wv(t,r,s),t=t.sibling}function Wv(t,r,s){switch(t.tag){case 26:Qi(t,r,s),t.flags&Do&&t.memoizedState!==null&&DC(s,ar,t.memoizedState,t.memoizedProps);break;case 5:Qi(t,r,s);break;case 3:case 4:var l=ar;ar=kc(t.stateNode.containerInfo),Qi(t,r,s),ar=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Do,Do=16777216,Qi(t,r,s),Do=l):Qi(t,r,s));break;default:Qi(t,r,s)}}function Xv(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function Eo(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];nt=l,$v(l,t)}Xv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qv(t),t=t.sibling}function Qv(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&fa(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,vc(t)):Eo(t);break;default:Eo(t)}}function vc(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];nt=l,$v(l,t)}Xv(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:fa(8,r,r.return),vc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,vc(r));break;default:vc(r)}t=t.sibling}}function $v(t,r){for(;nt!==null;){var s=nt;switch(s.tag){case 0:case 11:case 15:fa(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:uo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,nt=l;else e:for(s=t;nt!==null;){l=nt;var d=l.sibling,h=l.return;if(Iv(l),l===s){nt=null;break e}if(d!==null){d.return=h,nt=d;break e}nt=h}}}var HM={getCacheForType:function(t){var r=ot(Hn),s=r.data.get(t);return s===void 0&&(s=t(),r.data.set(t,s)),s},cacheSignal:function(){return ot(Hn).controller.signal}},IM=typeof WeakMap=="function"?WeakMap:Map,rn=0,mn=null,qe=null,Ye=0,on=0,Bt=null,ha=!1,$i=!1,jf=!1,Ur=0,Nn=0,ma=0,li=0,Vf=0,Lt=0,es=0,No=null,wt=null,Gf=!1,bc=0,e1=0,xc=1/0,Sc=null,pa=null,Wn=0,ga=null,ns=null,qr=0,Ff=0,Hf=null,n1=null,Ro=0,If=null;function _t(){return(rn&2)!==0&&Ye!==0?Ye&-Ye:_.T!==null?Zf():yg()}function t1(){if(Lt===0)if((Ye&536870912)===0||We){var t=Nl;Nl<<=1,(Nl&3932160)===0&&(Nl=262144),Lt=t}else Lt=536870912;return t=kt.current,t!==null&&(t.flags|=32),Lt}function Tt(t,r,s){(t===mn&&(on===2||on===9)||t.cancelPendingCommit!==null)&&(ts(t,0),ya(t,Ye,Lt,!1)),Ws(t,s),((rn&2)===0||t!==mn)&&(t===mn&&((rn&2)===0&&(li|=s),Nn===4&&ya(t,Ye,Lt,!1)),yr(t))}function r1(t,r,s){if((rn&6)!==0)throw Error(i(327));var l=!s&&(r&127)===0&&(r&t.expiredLanes)===0||Zs(t,r),d=l?qM(t,r):Uf(t,r,!0),h=l;do{if(d===0){$i&&!l&&ya(t,r,0,!1);break}else{if(s=t.current.alternate,h&&!JM(s)){d=Uf(t,r,!1),h=!1;continue}if(d===2){if(h=r,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){r=b;e:{var C=t;d=No;var k=C.current.memoizedState.isDehydrated;if(k&&(ts(C,b).flags|=256),b=Uf(C,b,!1),b!==2){if(jf&&!k){C.errorRecoveryDisabledLanes|=h,li|=h,d=4;break e}h=wt,wt=d,h!==null&&(wt===null?wt=h:wt.push.apply(wt,h))}d=b}if(h=!1,d!==2)continue}}if(d===1){ts(t,0),ya(t,r,0,!0);break}e:{switch(l=t,h=d,h){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:ya(l,r,Lt,!ha);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(d=bc+300-ie(),10<d)){if(ya(l,r,Lt,!ha),kl(l,0,!0)!==0)break e;qr=r,l.timeoutHandle=L1(a1.bind(null,l,s,wt,Sc,Gf,r,Lt,li,es,ha,h,"Throttled",-0,0),d);break e}a1(l,s,wt,Sc,Gf,r,Lt,li,es,ha,h,null,-0,0)}}break}while(!0);yr(t)}function a1(t,r,s,l,d,h,b,C,k,I,W,$,J,K){if(t.timeoutHandle=-1,$=r.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kr},Wv(r,h,$);var Me=(h&62914560)===h?bc-ie():(h&4194048)===h?e1-ie():0;if(Me=EC($,Me),Me!==null){qr=h,t.cancelPendingCommit=Me(f1.bind(null,t,r,h,s,l,d,b,C,k,W,$,null,J,K)),ya(t,h,b,!I);return}}f1(t,r,h,s,l,d,b,C,k)}function JM(t){for(var r=t;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],h=d.getSnapshot;d=d.value;try{if(!Nt(h(),d))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ya(t,r,s,l){r&=~Vf,r&=~li,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var d=r;0<d;){var h=31-ft(d),b=1<<h;l[h]=-1,d&=~b}s!==0&&mg(t,s,r)}function Mc(){return(rn&6)===0?(ko(0),!1):!0}function Jf(){if(qe!==null){if(on===0)var t=qe.return;else t=qe,_r=$a=null,sf(t),qi=null,ho=0,t=qe;for(;t!==null;)_v(t.alternate,t),t=t.return;qe=null}}function ts(t,r){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,uC(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),qr=0,Jf(),mn=t,qe=s=Br(t.current,null),Ye=r,on=0,Bt=null,ha=!1,$i=Zs(t,r),jf=!1,es=Lt=Vf=li=ma=Nn=0,wt=No=null,Gf=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var d=31-ft(l),h=1<<d;r|=t[d],l&=~h}return Ur=r,Il(),s}function i1(t,r){Ge=null,_.H=So,r===Ui||r===Xl?(r=Sy(),on=3):r===Kd?(r=Sy(),on=4):on=r===Mf?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Bt=r,qe===null&&(Nn=1,dc(t,Ut(r,t.current)))}function s1(){var t=kt.current;return t===null?!0:(Ye&4194048)===Ye?Zt===null:(Ye&62914560)===Ye||(Ye&536870912)!==0?t===Zt:!1}function o1(){var t=_.H;return _.H=So,t===null?So:t}function l1(){var t=_.A;return _.A=HM,t}function Cc(){Nn=4,ha||(Ye&4194048)!==Ye&&kt.current!==null||($i=!0),(ma&134217727)===0&&(li&134217727)===0||mn===null||ya(mn,Ye,Lt,!1)}function Uf(t,r,s){var l=rn;rn|=2;var d=o1(),h=l1();(mn!==t||Ye!==r)&&(Sc=null,ts(t,r)),r=!1;var b=Nn;e:do try{if(on!==0&&qe!==null){var C=qe,k=Bt;switch(on){case 8:Jf(),b=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(r=!0);var I=on;if(on=0,Bt=null,rs(t,C,k,I),s&&$i){b=0;break e}break;default:I=on,on=0,Bt=null,rs(t,C,k,I)}}UM(),b=Nn;break}catch(W){i1(t,W)}while(!0);return r&&t.shellSuspendCounter++,_r=$a=null,rn=l,_.H=d,_.A=h,qe===null&&(mn=null,Ye=0,Il()),b}function UM(){for(;qe!==null;)c1(qe)}function qM(t,r){var s=rn;rn|=2;var l=o1(),d=l1();mn!==t||Ye!==r?(Sc=null,xc=ie()+500,ts(t,r)):$i=Zs(t,r);e:do try{if(on!==0&&qe!==null){r=qe;var h=Bt;n:switch(on){case 1:on=0,Bt=null,rs(t,r,h,1);break;case 2:case 9:if(by(h)){on=0,Bt=null,u1(r);break}r=function(){on!==2&&on!==9||mn!==t||(on=7),yr(t)},h.then(r,r);break e;case 3:on=7;break e;case 4:on=5;break e;case 7:by(h)?(on=0,Bt=null,u1(r)):(on=0,Bt=null,rs(t,r,h,7));break;case 5:var b=null;switch(qe.tag){case 26:b=qe.memoizedState;case 5:case 27:var C=qe;if(b?Z1(b):C.stateNode.complete){on=0,Bt=null;var k=C.sibling;if(k!==null)qe=k;else{var I=C.return;I!==null?(qe=I,Ac(I)):qe=null}break n}}on=0,Bt=null,rs(t,r,h,5);break;case 6:on=0,Bt=null,rs(t,r,h,6);break;case 8:Jf(),Nn=6;break e;default:throw Error(i(462))}}KM();break}catch(W){i1(t,W)}while(!0);return _r=$a=null,_.H=l,_.A=d,rn=s,qe!==null?0:(mn=null,Ye=0,Il(),Nn)}function KM(){for(;qe!==null&&!Y();)c1(qe)}function c1(t){var r=Bv(t.alternate,t,Ur);t.memoizedProps=t.pendingProps,r===null?Ac(t):qe=r}function u1(t){var r=t,s=r.alternate;switch(r.tag){case 15:case 0:r=Dv(s,r,r.pendingProps,r.type,void 0,Ye);break;case 11:r=Dv(s,r,r.pendingProps,r.type.render,r.ref,Ye);break;case 5:sf(r);default:_v(s,r),r=qe=ly(r,Ur),r=Bv(s,r,Ur)}t.memoizedProps=t.pendingProps,r===null?Ac(t):qe=r}function rs(t,r,s,l){_r=$a=null,sf(r),qi=null,ho=0;var d=r.return;try{if(_M(t,d,r,s,Ye)){Nn=1,dc(t,Ut(s,t.current)),qe=null;return}}catch(h){if(d!==null)throw qe=d,h;Nn=1,dc(t,Ut(s,t.current)),qe=null;return}r.flags&32768?(We||l===1?t=!0:$i||(Ye&536870912)!==0?t=!1:(ha=t=!0,(l===2||l===9||l===3||l===6)&&(l=kt.current,l!==null&&l.tag===13&&(l.flags|=16384))),d1(r,t)):Ac(r)}function Ac(t){var r=t;do{if((r.flags&32768)!==0){d1(r,ha);return}t=r.return;var s=jM(r.alternate,r,Ur);if(s!==null){qe=s;return}if(r=r.sibling,r!==null){qe=r;return}qe=r=t}while(r!==null);Nn===0&&(Nn=5)}function d1(t,r){do{var s=VM(t.alternate,t);if(s!==null){s.flags&=32767,qe=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(t=t.sibling,t!==null)){qe=t;return}qe=t=s}while(t!==null);Nn=6,qe=null}function f1(t,r,s,l,d,h,b,C,k){t.cancelPendingCommit=null;do wc();while(Wn!==0);if((rn&6)!==0)throw Error(i(327));if(r!==null){if(r===t.current)throw Error(i(177));if(h=r.lanes|r.childLanes,h|=Pd,TS(t,s,h,b,C,k),t===mn&&(qe=mn=null,Ye=0),ns=r,ga=t,qr=s,Ff=h,Hf=d,n1=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,XM(Xe,function(){return y1(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,d=U.p,U.p=2,b=rn,rn|=4;try{GM(t,r,s)}finally{rn=b,U.p=d,_.T=l}}Wn=1,h1(),m1(),p1()}}function h1(){if(Wn===1){Wn=0;var t=ga,r=ns,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=_.T,_.T=null;var l=U.p;U.p=2;var d=rn;rn|=4;try{Kv(r,t);var h=rh,b=$g(t.containerInfo),C=h.focusedElem,k=h.selectionRange;if(b!==C&&C&&C.ownerDocument&&Qg(C.ownerDocument.documentElement,C)){if(k!==null&&Dd(C)){var I=k.start,W=k.end;if(W===void 0&&(W=I),"selectionStart"in C)C.selectionStart=I,C.selectionEnd=Math.min(W,C.value.length);else{var $=C.ownerDocument||document,J=$&&$.defaultView||window;if(J.getSelection){var K=J.getSelection(),Me=C.textContent.length,Le=Math.min(k.start,Me),hn=k.end===void 0?Le:Math.min(k.end,Me);!K.extend&&Le>hn&&(b=hn,hn=Le,Le=b);var z=Xg(C,Le),L=Xg(C,hn);if(z&&L&&(K.rangeCount!==1||K.anchorNode!==z.node||K.anchorOffset!==z.offset||K.focusNode!==L.node||K.focusOffset!==L.offset)){var H=$.createRange();H.setStart(z.node,z.offset),K.removeAllRanges(),Le>hn?(K.addRange(H),K.extend(L.node,L.offset)):(H.setEnd(L.node,L.offset),K.addRange(H))}}}}for($=[],K=C;K=K.parentNode;)K.nodeType===1&&$.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<$.length;C++){var X=$[C];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}zc=!!th,rh=th=null}finally{rn=d,U.p=l,_.T=s}}t.current=r,Wn=2}}function m1(){if(Wn===2){Wn=0;var t=ga,r=ns,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=_.T,_.T=null;var l=U.p;U.p=2;var d=rn;rn|=4;try{Hv(t,r.alternate,r)}finally{rn=d,U.p=l,_.T=s}}Wn=3}}function p1(){if(Wn===4||Wn===3){Wn=0,me();var t=ga,r=ns,s=qr,l=n1;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Wn=5:(Wn=0,ns=ga=null,g1(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(pa=null),ld(s),r=r.stateNode,Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(at,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=_.T,d=U.p,U.p=2,_.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var C=l[b];h(C.value,{componentStack:C.stack})}}finally{_.T=r,U.p=d}}(qr&3)!==0&&wc(),yr(t),d=t.pendingLanes,(s&261930)!==0&&(d&42)!==0?t===If?Ro++:(Ro=0,If=t):Ro=0,ko(0)}}function g1(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,uo(r)))}function wc(){return h1(),m1(),p1(),y1()}function y1(){if(Wn!==5)return!1;var t=ga,r=Ff;Ff=0;var s=ld(qr),l=_.T,d=U.p;try{U.p=32>s?32:s,_.T=null,s=Hf,Hf=null;var h=ga,b=qr;if(Wn=0,ns=ga=null,qr=0,(rn&6)!==0)throw Error(i(331));var C=rn;if(rn|=4,Qv(h.current),Zv(h,h.current,b,s),rn=C,ko(0,!1),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(at,h)}catch{}return!0}finally{U.p=d,_.T=l,g1(t,r)}}function v1(t,r,s){r=Ut(s,r),r=Sf(t.stateNode,r,2),t=ca(t,r,2),t!==null&&(Ws(t,2),yr(t))}function ln(t,r,s){if(t.tag===3)v1(t,t,s);else for(;r!==null;){if(r.tag===3){v1(r,t,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))){t=Ut(s,t),s=bv(2),l=ca(r,s,2),l!==null&&(xv(s,l,r,t),Ws(l,2),yr(l));break}}r=r.return}}function qf(t,r,s){var l=t.pingCache;if(l===null){l=t.pingCache=new IM;var d=new Set;l.set(r,d)}else d=l.get(r),d===void 0&&(d=new Set,l.set(r,d));d.has(s)||(jf=!0,d.add(s),t=YM.bind(null,t,r,s),r.then(t,t))}function YM(t,r,s){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,mn===t&&(Ye&s)===s&&(Nn===4||Nn===3&&(Ye&62914560)===Ye&&300>ie()-bc?(rn&2)===0&&ts(t,0):Vf|=s,es===Ye&&(es=0)),yr(t)}function b1(t,r){r===0&&(r=hg()),t=Wa(t,r),t!==null&&(Ws(t,r),yr(t))}function ZM(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),b1(t,s)}function WM(t,r){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(r),b1(t,s)}function XM(t,r){return R(t,r)}var Tc=null,as=null,Kf=!1,Dc=!1,Yf=!1,va=0;function yr(t){t!==as&&t.next===null&&(as===null?Tc=as=t:as=as.next=t),Dc=!0,Kf||(Kf=!0,$M())}function ko(t,r){if(!Yf&&Dc){Yf=!0;do for(var s=!1,l=Tc;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var h=0;else{var b=l.suspendedLanes,C=l.pingedLanes;h=(1<<31-ft(42|t)+1)-1,h&=d&~(b&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,C1(l,h))}else h=Ye,h=kl(l,l===mn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Zs(l,h)||(s=!0,C1(l,h));l=l.next}while(s);Yf=!1}}function QM(){x1()}function x1(){Dc=Kf=!1;var t=0;va!==0&&cC()&&(t=va);for(var r=ie(),s=null,l=Tc;l!==null;){var d=l.next,h=S1(l,r);h===0?(l.next=null,s===null?Tc=d:s.next=d,d===null&&(as=s)):(s=l,(t!==0||(h&3)!==0)&&(Dc=!0)),l=d}Wn!==0&&Wn!==5||ko(t),va!==0&&(va=0)}function S1(t,r){for(var s=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-ft(h),C=1<<b,k=d[b];k===-1?((C&s)===0||(C&l)!==0)&&(d[b]=wS(C,r)):k<=r&&(t.expiredLanes|=C),h&=~C}if(r=mn,s=Ye,s=kl(t,t===r?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===r&&(on===2||on===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&F(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Zs(t,s)){if(r=s&-s,r===t.callbackPriority)return r;switch(l!==null&&F(l),ld(s)){case 2:case 8:s=He;break;case 32:s=Xe;break;case 268435456:s=Nr;break;default:s=Xe}return l=M1.bind(null,t),s=R(s,l),t.callbackPriority=r,t.callbackNode=s,r}return l!==null&&l!==null&&F(l),t.callbackPriority=2,t.callbackNode=null,2}function M1(t,r){if(Wn!==0&&Wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(wc()&&t.callbackNode!==s)return null;var l=Ye;return l=kl(t,t===mn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(r1(t,l,r),S1(t,ie()),t.callbackNode!=null&&t.callbackNode===s?M1.bind(null,t):null)}function C1(t,r){if(wc())return null;r1(t,r,!0)}function $M(){dC(function(){(rn&6)!==0?R(Se,QM):x1()})}function Zf(){if(va===0){var t=Ii;t===0&&(t=El,El<<=1,(El&261888)===0&&(El=256)),va=t}return va}function A1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_l(""+t)}function w1(t,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,t.id&&s.setAttribute("form",t.id),r.parentNode.insertBefore(s,r),t=new FormData(t),s.parentNode.removeChild(s),t}function eC(t,r,s,l,d){if(r==="submit"&&s&&s.stateNode===d){var h=A1((d[xt]||null).action),b=l.submitter;b&&(r=(r=b[xt]||null)?A1(r.formAction):b.getAttribute("formAction"),r!==null&&(h=r,b=null));var C=new Vl("action","action",null,l,d);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(va!==0){var k=b?w1(d,b):new FormData(d);pf(s,{pending:!0,data:k,method:d.method,action:h},null,k)}}else typeof h=="function"&&(C.preventDefault(),k=b?w1(d,b):new FormData(d),pf(s,{pending:!0,data:k,method:d.method,action:h},h,k))},currentTarget:d}]})}}for(var Wf=0;Wf<kd.length;Wf++){var Xf=kd[Wf],nC=Xf.toLowerCase(),tC=Xf[0].toUpperCase()+Xf.slice(1);rr(nC,"on"+tC)}rr(ty,"onAnimationEnd"),rr(ry,"onAnimationIteration"),rr(ay,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(vM,"onTransitionRun"),rr(bM,"onTransitionStart"),rr(xM,"onTransitionCancel"),rr(iy,"onTransitionEnd"),Ni("onMouseEnter",["mouseout","mouseover"]),Ni("onMouseLeave",["mouseout","mouseover"]),Ni("onPointerEnter",["pointerout","pointerover"]),Ni("onPointerLeave",["pointerout","pointerover"]),qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function T1(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],d=l.event;l=l.listeners;e:{var h=void 0;if(r)for(var b=l.length-1;0<=b;b--){var C=l[b],k=C.instance,I=C.currentTarget;if(C=C.listener,k!==h&&d.isPropagationStopped())break e;h=C,d.currentTarget=I;try{h(d)}catch(W){Hl(W)}d.currentTarget=null,h=k}else for(b=0;b<l.length;b++){if(C=l[b],k=C.instance,I=C.currentTarget,C=C.listener,k!==h&&d.isPropagationStopped())break e;h=C,d.currentTarget=I;try{h(d)}catch(W){Hl(W)}d.currentTarget=null,h=k}}}}function Ke(t,r){var s=r[cd];s===void 0&&(s=r[cd]=new Set);var l=t+"__bubble";s.has(l)||(D1(r,t,2,!1),s.add(l))}function Qf(t,r,s){var l=0;r&&(l|=4),D1(s,t,l,r)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[Ec]){t[Ec]=!0,xg.forEach(function(s){s!=="selectionchange"&&(rC.has(s)||Qf(s,!1,t),Qf(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Ec]||(r[Ec]=!0,Qf("selectionchange",!1,r))}}function D1(t,r,s,l){switch(t0(r)){case 2:var d=kC;break;case 8:d=PC;break;default:d=mh}s=d.bind(null,r,s,t),d=void 0,!vd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(r,s,{capture:!0,passive:d}):t.addEventListener(r,s,!0):d!==void 0?t.addEventListener(r,s,{passive:d}):t.addEventListener(r,s,!1)}function eh(t,r,s,l,d){var h=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var C=l.stateNode.containerInfo;if(C===d)break;if(b===4)for(b=l.return;b!==null;){var k=b.tag;if((k===3||k===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;C!==null;){if(b=Ti(C),b===null)return;if(k=b.tag,k===5||k===6||k===26||k===27){l=h=b;continue e}C=C.parentNode}}l=l.return}Pg(function(){var I=h,W=gd(s),$=[];e:{var J=sy.get(t);if(J!==void 0){var K=Vl,Me=t;switch(t){case"keypress":if(zl(s)===0)break e;case"keydown":case"keyup":K=WS;break;case"focusin":Me="focus",K=Md;break;case"focusout":Me="blur",K=Md;break;case"beforeblur":case"afterblur":K=Md;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=jS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=$S;break;case ty:case ry:case ay:K=FS;break;case iy:K=nM;break;case"scroll":case"scrollend":K=OS;break;case"wheel":K=rM;break;case"copy":case"cut":case"paste":K=IS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=zg;break;case"toggle":case"beforetoggle":K=iM}var Le=(r&4)!==0,hn=!Le&&(t==="scroll"||t==="scrollend"),z=Le?J!==null?J+"Capture":null:J;Le=[];for(var L=I,H;L!==null;){var X=L;if(H=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||H===null||z===null||(X=$s(L,z),X!=null&&Le.push(Bo(L,X,H))),hn)break;L=L.return}0<Le.length&&(J=new K(J,Me,null,s,W),$.push({event:J,listeners:Le}))}}if((r&7)===0){e:{if(J=t==="mouseover"||t==="pointerover",K=t==="mouseout"||t==="pointerout",J&&s!==pd&&(Me=s.relatedTarget||s.fromElement)&&(Ti(Me)||Me[wi]))break e;if((K||J)&&(J=W.window===W?W:(J=W.ownerDocument)?J.defaultView||J.parentWindow:window,K?(Me=s.relatedTarget||s.toElement,K=I,Me=Me?Ti(Me):null,Me!==null&&(hn=c(Me),Le=Me.tag,Me!==hn||Le!==5&&Le!==27&&Le!==6)&&(Me=null)):(K=null,Me=I),K!==Me)){if(Le=_g,X="onMouseLeave",z="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(Le=zg,X="onPointerLeave",z="onPointerEnter",L="pointer"),hn=K==null?J:Qs(K),H=Me==null?J:Qs(Me),J=new Le(X,L+"leave",K,s,W),J.target=hn,J.relatedTarget=H,X=null,Ti(W)===I&&(Le=new Le(z,L+"enter",Me,s,W),Le.target=H,Le.relatedTarget=hn,X=Le),hn=X,K&&Me)n:{for(Le=aC,z=K,L=Me,H=0,X=z;X;X=Le(X))H++;X=0;for(var ke=L;ke;ke=Le(ke))X++;for(;0<H-X;)z=Le(z),H--;for(;0<X-H;)L=Le(L),X--;for(;H--;){if(z===L||L!==null&&z===L.alternate){Le=z;break n}z=Le(z),L=Le(L)}Le=null}else Le=null;K!==null&&E1($,J,K,Le,!1),Me!==null&&hn!==null&&E1($,hn,Me,Le,!0)}}e:{if(J=I?Qs(I):window,K=J.nodeName&&J.nodeName.toLowerCase(),K==="select"||K==="input"&&J.type==="file")var $e=Ug;else if(Ig(J))if(qg)$e=pM;else{$e=hM;var Ne=fM}else K=J.nodeName,!K||K.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?I&&md(I.elementType)&&($e=Ug):$e=mM;if($e&&($e=$e(t,I))){Jg($,$e,s,W);break e}Ne&&Ne(t,J,I),t==="focusout"&&I&&J.type==="number"&&I.memoizedProps.value!=null&&hd(J,"number",J.value)}switch(Ne=I?Qs(I):window,t){case"focusin":(Ig(Ne)||Ne.contentEditable==="true")&&(_i=Ne,Ed=I,oo=null);break;case"focusout":oo=Ed=_i=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,ey($,s,W);break;case"selectionchange":if(yM)break;case"keydown":case"keyup":ey($,s,W)}var Fe;if(Ad)e:{switch(t){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else Li?Fg(t,s)&&(Ze="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ze="onCompositionStart");Ze&&(jg&&s.locale!=="ko"&&(Li||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&Li&&(Fe=Bg()):(ta=W,bd="value"in ta?ta.value:ta.textContent,Li=!0)),Ne=Nc(I,Ze),0<Ne.length&&(Ze=new Og(Ze,t,null,s,W),$.push({event:Ze,listeners:Ne}),Fe?Ze.data=Fe:(Fe=Hg(s),Fe!==null&&(Ze.data=Fe)))),(Fe=oM?lM(t,s):cM(t,s))&&(Ze=Nc(I,"onBeforeInput"),0<Ze.length&&(Ne=new Og("onBeforeInput","beforeinput",null,s,W),$.push({event:Ne,listeners:Ze}),Ne.data=Fe)),eC($,t,I,s,W)}T1($,r)})}function Bo(t,r,s){return{instance:t,listener:r,currentTarget:s}}function Nc(t,r){for(var s=r+"Capture",l=[];t!==null;){var d=t,h=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||h===null||(d=$s(t,s),d!=null&&l.unshift(Bo(t,d,h)),d=$s(t,r),d!=null&&l.push(Bo(t,d,h))),t.tag===3)return l;t=t.return}return[]}function aC(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E1(t,r,s,l,d){for(var h=r._reactName,b=[];s!==null&&s!==l;){var C=s,k=C.alternate,I=C.stateNode;if(C=C.tag,k!==null&&k===l)break;C!==5&&C!==26&&C!==27||I===null||(k=I,d?(I=$s(s,h),I!=null&&b.unshift(Bo(s,I,k))):d||(I=$s(s,h),I!=null&&b.push(Bo(s,I,k)))),s=s.return}b.length!==0&&t.push({event:r,listeners:b})}var iC=/\r\n?/g,sC=/\u0000|\uFFFD/g;function N1(t){return(typeof t=="string"?t:""+t).replace(iC,`
`).replace(sC,"")}function R1(t,r){return r=N1(r),N1(t)===r}function fn(t,r,s,l,d,h){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||ki(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&ki(t,""+l);break;case"className":Bl(t,"class",l);break;case"tabIndex":Bl(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Bl(t,s,l);break;case"style":Rg(t,l,h);break;case"data":if(r!=="object"){Bl(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=_l(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(r!=="input"&&fn(t,r,"name",d.name,d,null),fn(t,r,"formEncType",d.formEncType,d,null),fn(t,r,"formMethod",d.formMethod,d,null),fn(t,r,"formTarget",d.formTarget,d,null)):(fn(t,r,"encType",d.encType,d,null),fn(t,r,"method",d.method,d,null),fn(t,r,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=_l(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=kr);break;case"onScroll":l!=null&&Ke("scroll",t);break;case"onScrollEnd":l!=null&&Ke("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(i(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=_l(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Ke("beforetoggle",t),Ke("toggle",t),Pl(t,"popover",l);break;case"xlinkActuate":Rr(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Rr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Rr(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Rr(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Rr(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Rr(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Rr(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Rr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Rr(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=LS.get(s)||s,Pl(t,s,l))}}function nh(t,r,s,l,d,h){switch(s){case"style":Rg(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(i(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ki(t,l):(typeof l=="number"||typeof l=="bigint")&&ki(t,""+l);break;case"onScroll":l!=null&&Ke("scroll",t);break;case"onScrollEnd":l!=null&&Ke("scrollend",t);break;case"onClick":l!=null&&(t.onclick=kr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sg.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),r=s.slice(2,d?s.length-7:void 0),h=t[xt]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(r,h,d),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(r,l,d);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Pl(t,s,l)}}}function ct(t,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",t),Ke("load",t);var l=!1,d=!1,h;for(h in s)if(s.hasOwnProperty(h)){var b=s[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:fn(t,r,h,b,s,null)}}d&&fn(t,r,"srcSet",s.srcSet,s,null),l&&fn(t,r,"src",s.src,s,null);return;case"input":Ke("invalid",t);var C=h=b=d=null,k=null,I=null;for(l in s)if(s.hasOwnProperty(l)){var W=s[l];if(W!=null)switch(l){case"name":d=W;break;case"type":b=W;break;case"checked":k=W;break;case"defaultChecked":I=W;break;case"value":h=W;break;case"defaultValue":C=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,r));break;default:fn(t,r,l,W,s,null)}}Tg(t,h,C,k,I,b,d,!1);return;case"select":Ke("invalid",t),l=b=h=null;for(d in s)if(s.hasOwnProperty(d)&&(C=s[d],C!=null))switch(d){case"value":h=C;break;case"defaultValue":b=C;break;case"multiple":l=C;default:fn(t,r,d,C,s,null)}r=h,s=b,t.multiple=!!l,r!=null?Ri(t,!!l,r,!1):s!=null&&Ri(t,!!l,s,!0);return;case"textarea":Ke("invalid",t),h=d=l=null;for(b in s)if(s.hasOwnProperty(b)&&(C=s[b],C!=null))switch(b){case"value":l=C;break;case"defaultValue":d=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(i(91));break;default:fn(t,r,b,C,s,null)}Eg(t,l,d,h);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:fn(t,r,k,l,s,null)}return;case"dialog":Ke("beforetoggle",t),Ke("toggle",t),Ke("cancel",t),Ke("close",t);break;case"iframe":case"object":Ke("load",t);break;case"video":case"audio":for(l=0;l<Po.length;l++)Ke(Po[l],t);break;case"image":Ke("error",t),Ke("load",t);break;case"details":Ke("toggle",t);break;case"embed":case"source":case"link":Ke("error",t),Ke("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:fn(t,r,I,l,s,null)}return;default:if(md(r)){for(W in s)s.hasOwnProperty(W)&&(l=s[W],l!==void 0&&nh(t,r,W,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&fn(t,r,C,l,s,null))}function oC(t,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,h=null,b=null,C=null,k=null,I=null,W=null;for(K in s){var $=s[K];if(s.hasOwnProperty(K)&&$!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":k=$;default:l.hasOwnProperty(K)||fn(t,r,K,null,l,$)}}for(var J in l){var K=l[J];if($=s[J],l.hasOwnProperty(J)&&(K!=null||$!=null))switch(J){case"type":h=K;break;case"name":d=K;break;case"checked":I=K;break;case"defaultChecked":W=K;break;case"value":b=K;break;case"defaultValue":C=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,r));break;default:K!==$&&fn(t,r,J,K,l,$)}}fd(t,b,C,k,I,W,h,d);return;case"select":K=b=C=J=null;for(h in s)if(k=s[h],s.hasOwnProperty(h)&&k!=null)switch(h){case"value":break;case"multiple":K=k;default:l.hasOwnProperty(h)||fn(t,r,h,null,l,k)}for(d in l)if(h=l[d],k=s[d],l.hasOwnProperty(d)&&(h!=null||k!=null))switch(d){case"value":J=h;break;case"defaultValue":C=h;break;case"multiple":b=h;default:h!==k&&fn(t,r,d,h,l,k)}r=C,s=b,l=K,J!=null?Ri(t,!!s,J,!1):!!l!=!!s&&(r!=null?Ri(t,!!s,r,!0):Ri(t,!!s,s?[]:"",!1));return;case"textarea":K=J=null;for(C in s)if(d=s[C],s.hasOwnProperty(C)&&d!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:fn(t,r,C,null,l,d)}for(b in l)if(d=l[b],h=s[b],l.hasOwnProperty(b)&&(d!=null||h!=null))switch(b){case"value":J=d;break;case"defaultValue":K=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==h&&fn(t,r,b,d,l,h)}Dg(t,J,K);return;case"option":for(var Me in s)if(J=s[Me],s.hasOwnProperty(Me)&&J!=null&&!l.hasOwnProperty(Me))switch(Me){case"selected":t.selected=!1;break;default:fn(t,r,Me,null,l,J)}for(k in l)if(J=l[k],K=s[k],l.hasOwnProperty(k)&&J!==K&&(J!=null||K!=null))switch(k){case"selected":t.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:fn(t,r,k,J,l,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Le in s)J=s[Le],s.hasOwnProperty(Le)&&J!=null&&!l.hasOwnProperty(Le)&&fn(t,r,Le,null,l,J);for(I in l)if(J=l[I],K=s[I],l.hasOwnProperty(I)&&J!==K&&(J!=null||K!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,r));break;default:fn(t,r,I,J,l,K)}return;default:if(md(r)){for(var hn in s)J=s[hn],s.hasOwnProperty(hn)&&J!==void 0&&!l.hasOwnProperty(hn)&&nh(t,r,hn,void 0,l,J);for(W in l)J=l[W],K=s[W],!l.hasOwnProperty(W)||J===K||J===void 0&&K===void 0||nh(t,r,W,J,l,K);return}}for(var z in s)J=s[z],s.hasOwnProperty(z)&&J!=null&&!l.hasOwnProperty(z)&&fn(t,r,z,null,l,J);for($ in l)J=l[$],K=s[$],!l.hasOwnProperty($)||J===K||J==null&&K==null||fn(t,r,$,J,l,K)}function k1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lC(){if(typeof performance.getEntriesByType=="function"){for(var t=0,r=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var d=s[l],h=d.transferSize,b=d.initiatorType,C=d.duration;if(h&&C&&k1(b)){for(b=0,C=d.responseEnd,l+=1;l<s.length;l++){var k=s[l],I=k.startTime;if(I>C)break;var W=k.transferSize,$=k.initiatorType;W&&k1($)&&(k=k.responseEnd,b+=W*(k<C?1:(C-I)/(k-I)))}if(--l,r+=8*(h+b)/(d.duration/1e3),t++,10<t)break}}if(0<t)return r/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var th=null,rh=null;function Rc(t){return t.nodeType===9?t:t.ownerDocument}function P1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B1(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function ah(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ih=null;function cC(){var t=window.event;return t&&t.type==="popstate"?t===ih?!1:(ih=t,!0):(ih=null,!1)}var L1=typeof setTimeout=="function"?setTimeout:void 0,uC=typeof clearTimeout=="function"?clearTimeout:void 0,_1=typeof Promise=="function"?Promise:void 0,dC=typeof queueMicrotask=="function"?queueMicrotask:typeof _1<"u"?function(t){return _1.resolve(null).then(t).catch(fC)}:L1;function fC(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function O1(t,r){var s=r,l=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(d),ls(r);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Lo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Lo(s);for(var h=s.firstChild;h;){var b=h.nextSibling,C=h.nodeName;h[Xs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=b}}else s==="body"&&Lo(t.ownerDocument.body);s=d}while(s);ls(r)}function z1(t,r){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?r?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(r?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function sh(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":sh(s),ud(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function hC(t,r,s,l){for(;t.nodeType===1;){var d=s;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Xs])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var h=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Wt(t.nextSibling),t===null)break}return null}function mC(t,r,s){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Wt(t.nextSibling),t===null))return null;return t}function j1(t,r){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Wt(t.nextSibling),t===null))return null;return t}function oh(t){return t.data==="$?"||t.data==="$~"}function lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function pC(t,r){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=r;else if(t.data!=="$?"||s.readyState!=="loading")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Wt(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return t}var ch=null;function V1(t){t=t.nextSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(r===0)return Wt(t.nextSibling);r--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||r++}t=t.nextSibling}return null}function G1(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(r===0)return t;r--}else s!=="/$"&&s!=="/&"||r++}t=t.previousSibling}return null}function F1(t,r,s){switch(r=Rc(s),t){case"html":if(t=r.documentElement,!t)throw Error(i(452));return t;case"head":if(t=r.head,!t)throw Error(i(453));return t;case"body":if(t=r.body,!t)throw Error(i(454));return t;default:throw Error(i(451))}}function Lo(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ud(t)}var Xt=new Map,H1=new Set;function kc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Kr=U.d;U.d={f:gC,r:yC,D:vC,C:bC,L:xC,m:SC,X:CC,S:MC,M:AC};function gC(){var t=Kr.f(),r=Mc();return t||r}function yC(t){var r=Di(t);r!==null&&r.tag===5&&r.type==="form"?iv(r):Kr.r(t)}var is=typeof document>"u"?null:document;function I1(t,r,s){var l=is;if(l&&typeof r=="string"&&r){var d=It(r);d='link[rel="'+t+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),H1.has(d)||(H1.add(d),t={rel:t,crossOrigin:s,href:r},l.querySelector(d)===null&&(r=l.createElement("link"),ct(r,"link",t),et(r),l.head.appendChild(r)))}}function vC(t){Kr.D(t),I1("dns-prefetch",t,null)}function bC(t,r){Kr.C(t,r),I1("preconnect",t,r)}function xC(t,r,s){Kr.L(t,r,s);var l=is;if(l&&t&&r){var d='link[rel="preload"][as="'+It(r)+'"]';r==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+It(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+It(s.imageSizes)+'"]')):d+='[href="'+It(t)+'"]';var h=d;switch(r){case"style":h=ss(t);break;case"script":h=os(t)}Xt.has(h)||(t=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:t,as:r},s),Xt.set(h,t),l.querySelector(d)!==null||r==="style"&&l.querySelector(_o(h))||r==="script"&&l.querySelector(Oo(h))||(r=l.createElement("link"),ct(r,"link",t),et(r),l.head.appendChild(r)))}}function SC(t,r){Kr.m(t,r);var s=is;if(s&&t){var l=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(t)+'"]',h=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=os(t)}if(!Xt.has(h)&&(t=v({rel:"modulepreload",href:t},r),Xt.set(h,t),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Oo(h)))return}l=s.createElement("link"),ct(l,"link",t),et(l),s.head.appendChild(l)}}}function MC(t,r,s){Kr.S(t,r,s);var l=is;if(l&&t){var d=Ei(l).hoistableStyles,h=ss(t);r=r||"default";var b=d.get(h);if(!b){var C={loading:0,preload:null};if(b=l.querySelector(_o(h)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":r},s),(s=Xt.get(h))&&uh(t,s);var k=b=l.createElement("link");et(k),ct(k,"link",t),k._p=new Promise(function(I,W){k.onload=I,k.onerror=W}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Pc(b,r,l)}b={type:"stylesheet",instance:b,count:1,state:C},d.set(h,b)}}}function CC(t,r){Kr.X(t,r);var s=is;if(s&&t){var l=Ei(s).hoistableScripts,d=os(t),h=l.get(d);h||(h=s.querySelector(Oo(d)),h||(t=v({src:t,async:!0},r),(r=Xt.get(d))&&dh(t,r),h=s.createElement("script"),et(h),ct(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(d,h))}}function AC(t,r){Kr.M(t,r);var s=is;if(s&&t){var l=Ei(s).hoistableScripts,d=os(t),h=l.get(d);h||(h=s.querySelector(Oo(d)),h||(t=v({src:t,async:!0,type:"module"},r),(r=Xt.get(d))&&dh(t,r),h=s.createElement("script"),et(h),ct(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(d,h))}}function J1(t,r,s,l){var d=(d=Ce.current)?kc(d):null;if(!d)throw Error(i(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=ss(s.href),s=Ei(d).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ss(s.href);var h=Ei(d).hoistableStyles,b=h.get(t);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=d.querySelector(_o(t)))&&!h._p&&(b.instance=h,b.state.loading=5),Xt.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Xt.set(t,s),h||wC(d,t,s,b.state))),r&&l===null)throw Error(i(528,""));return b}if(r&&l!==null)throw Error(i(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=os(s),s=Ei(d).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,t))}}function ss(t){return'href="'+It(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function U1(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function wC(t,r,s,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),ct(r,"link",s),et(r),t.head.appendChild(r))}function os(t){return'[src="'+It(t)+'"]'}function Oo(t){return"script[async]"+t}function q1(t,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+It(s.href)+'"]');if(l)return r.instance=l,et(l),l;var d=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),et(l),ct(l,"style",d),Pc(l,s.precedence,t),r.instance=l;case"stylesheet":d=ss(s.href);var h=t.querySelector(_o(d));if(h)return r.state.loading|=4,r.instance=h,et(h),h;l=U1(s),(d=Xt.get(d))&&uh(l,d),h=(t.ownerDocument||t).createElement("link"),et(h);var b=h;return b._p=new Promise(function(C,k){b.onload=C,b.onerror=k}),ct(h,"link",l),r.state.loading|=4,Pc(h,s.precedence,t),r.instance=h;case"script":return h=os(s.src),(d=t.querySelector(Oo(h)))?(r.instance=d,et(d),d):(l=s,(d=Xt.get(h))&&(l=v({},s),dh(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),et(d),ct(d,"link",l),t.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Pc(l,s.precedence,t));return r.instance}function Pc(t,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,h=d,b=0;b<l.length;b++){var C=l[b];if(C.dataset.precedence===r)h=C;else if(h!==d)break}h?h.parentNode.insertBefore(t,h.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(t,r.firstChild))}function uh(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function dh(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var Bc=null;function K1(t,r,s){if(Bc===null){var l=new Map,d=Bc=new Map;d.set(s,l)}else d=Bc,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),d=0;d<s.length;d++){var h=s[d];if(!(h[Xs]||h[it]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(r)||"";b=t+b;var C=l.get(b);C?C.push(h):l.set(b,[h])}}return l}function Y1(t,r,s){t=t.ownerDocument||t,t.head.insertBefore(s,r==="title"?t.querySelector("head > title"):null)}function TC(t,r,s){if(s===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Z1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function DC(t,r,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ss(l.href),h=r.querySelector(_o(d));if(h){r=h._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(t.count++,t=Lc.bind(t),r.then(t,t)),s.state.loading|=4,s.instance=h,et(h);return}h=r.ownerDocument||r,l=U1(l),(d=Xt.get(d))&&uh(l,d),h=h.createElement("link"),et(h);var b=h;b._p=new Promise(function(C,k){b.onload=C,b.onerror=k}),ct(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Lc.bind(t),r.addEventListener("load",s),r.addEventListener("error",s))}}var fh=0;function EC(t,r){return t.stylesheets&&t.count===0&&Oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Oc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+r);0<t.imgBytes&&fh===0&&(fh=62500*lC());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Oc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>fh?50:800)+r);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function Oc(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,r.forEach(NC,t),_c=null,Lc.call(t))}function NC(t,r){if(!(r.state.loading&4)){var s=_c.get(t);if(s)var l=s.get(null);else{s=new Map,_c.set(t,s);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<d.length;h++){var b=d[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}d=r.instance,b=d.getAttribute("data-precedence"),h=s.get(b)||l,h===l&&s.set(null,d),s.set(b,d),this.count++,l=Lc.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),h?h.parentNode.insertBefore(d,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),r.state.loading|=4}}var zo={$$typeof:P,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function RC(t,r,s,l,d,h,b,C,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sd(0),this.hiddenUpdates=sd(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function W1(t,r,s,l,d,h,b,C,k,I,W,$){return t=new RC(t,r,s,b,k,I,W,$,C),r=1,h===!0&&(r|=24),h=Rt(3,null,null,r),t.current=h,h.stateNode=t,r=Jd(),r.refCount++,t.pooledCache=r,r.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:r},Yd(h),t}function X1(t){return t?(t=ji,t):ji}function Q1(t,r,s,l,d,h){d=X1(d),l.context===null?l.context=d:l.pendingContext=d,l=la(r),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=ca(t,l,r),s!==null&&(Tt(s,t,r),po(s,t,r))}function $1(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function hh(t,r){$1(t,r),(t=t.alternate)&&$1(t,r)}function e0(t){if(t.tag===13||t.tag===31){var r=Wa(t,67108864);r!==null&&Tt(r,t,67108864),hh(t,67108864)}}function n0(t){if(t.tag===13||t.tag===31){var r=_t();r=od(r);var s=Wa(t,r);s!==null&&Tt(s,t,r),hh(t,r)}}var zc=!0;function kC(t,r,s,l){var d=_.T;_.T=null;var h=U.p;try{U.p=2,mh(t,r,s,l)}finally{U.p=h,_.T=d}}function PC(t,r,s,l){var d=_.T;_.T=null;var h=U.p;try{U.p=8,mh(t,r,s,l)}finally{U.p=h,_.T=d}}function mh(t,r,s,l){if(zc){var d=ph(l);if(d===null)eh(t,r,l,jc,s),r0(t,l);else if(LC(d,t,r,s,l))l.stopPropagation();else if(r0(t,l),r&4&&-1<BC.indexOf(t)){for(;d!==null;){var h=Di(d);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Ua(h.pendingLanes);if(b!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var k=1<<31-ft(b);C.entanglements[1]|=k,b&=~k}yr(h),(rn&6)===0&&(xc=ie()+500,ko(0))}}break;case 31:case 13:C=Wa(h,2),C!==null&&Tt(C,h,2),Mc(),hh(h,2)}if(h=ph(l),h===null&&eh(t,r,l,jc,s),h===d)break;d=h}d!==null&&l.stopPropagation()}else eh(t,r,l,null,s)}}function ph(t){return t=gd(t),gh(t)}var jc=null;function gh(t){if(jc=null,t=Ti(t),t!==null){var r=c(t);if(r===null)t=null;else{var s=r.tag;if(s===13){if(t=u(r),t!==null)return t;t=null}else if(s===31){if(t=f(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return jc=t,null}function t0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case Se:return 2;case He:return 8;case Xe:case rt:return 32;case Nr:return 268435456;default:return 32}default:return 32}}var yh=!1,xa=null,Sa=null,Ma=null,jo=new Map,Vo=new Map,Ca=[],BC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r0(t,r){switch(t){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":jo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(r.pointerId)}}function Go(t,r,s,l,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[d]},r!==null&&(r=Di(r),r!==null&&e0(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),t)}function LC(t,r,s,l,d){switch(r){case"focusin":return xa=Go(xa,t,r,s,l,d),!0;case"dragenter":return Sa=Go(Sa,t,r,s,l,d),!0;case"mouseover":return Ma=Go(Ma,t,r,s,l,d),!0;case"pointerover":var h=d.pointerId;return jo.set(h,Go(jo.get(h)||null,t,r,s,l,d)),!0;case"gotpointercapture":return h=d.pointerId,Vo.set(h,Go(Vo.get(h)||null,t,r,s,l,d)),!0}return!1}function a0(t){var r=Ti(t.target);if(r!==null){var s=c(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){t.blockedOn=r,vg(t.priority,function(){n0(s)});return}}else if(r===31){if(r=f(s),r!==null){t.blockedOn=r,vg(t.priority,function(){n0(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=ph(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);pd=l,s.target.dispatchEvent(l),pd=null}else return r=Di(s),r!==null&&e0(r),t.blockedOn=s,!1;r.shift()}return!0}function i0(t,r,s){Vc(t)&&s.delete(r)}function _C(){yh=!1,xa!==null&&Vc(xa)&&(xa=null),Sa!==null&&Vc(Sa)&&(Sa=null),Ma!==null&&Vc(Ma)&&(Ma=null),jo.forEach(i0),Vo.forEach(i0)}function Gc(t,r){t.blockedOn===r&&(t.blockedOn=null,yh||(yh=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_C)))}var Fc=null;function s0(t){Fc!==t&&(Fc=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Fc===t&&(Fc=null);for(var r=0;r<t.length;r+=3){var s=t[r],l=t[r+1],d=t[r+2];if(typeof l!="function"){if(gh(l||s)===null)continue;break}var h=Di(s);h!==null&&(t.splice(r,3),r-=3,pf(h,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function ls(t){function r(k){return Gc(k,t)}xa!==null&&Gc(xa,t),Sa!==null&&Gc(Sa,t),Ma!==null&&Gc(Ma,t),jo.forEach(r),Vo.forEach(r);for(var s=0;s<Ca.length;s++){var l=Ca[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ca.length&&(s=Ca[0],s.blockedOn===null);)a0(s),s.blockedOn===null&&Ca.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],h=s[l+1],b=d[xt]||null;if(typeof h=="function")b||s0(s);else if(b){var C=null;if(h&&h.hasAttribute("formAction")){if(d=h,b=h[xt]||null)C=b.formAction;else if(gh(d)!==null)continue}else C=b.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),s0(s)}}}function o0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return d=b})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function vh(t){this._internalRoot=t}Hc.prototype.render=vh.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));var s=r.current,l=_t();Q1(s,l,t,r,null,null)},Hc.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Q1(t.current,2,null,t,null,null),Mc(),r[wi]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var r=yg();t={blockedOn:null,target:t,priority:r};for(var s=0;s<Ca.length&&r!==0&&r<Ca[s].priority;s++);Ca.splice(s,0,t),s===0&&a0(t)}};var l0=e.version;if(l0!=="19.2.0")throw Error(i(527,l0,"19.2.0"));U.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=p(r),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var OC={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{at=Ic.inject(OC),Bn=Ic}catch{}}return Ho.createRoot=function(t,r){if(!o(t))throw Error(i(299));var s=!1,l="",d=pv,h=gv,b=yv;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(h=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError)),r=W1(t,1,!1,null,null,s,l,null,d,h,b,o0),t[wi]=r.current,$f(t),new vh(r)},Ho.hydrateRoot=function(t,r,s){if(!o(t))throw Error(i(299));var l=!1,d="",h=pv,b=gv,C=yv,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),r=W1(t,1,!0,r,s??null,l,d,k,h,b,C,o0),r.context=X1(null),s=r.current,l=_t(),l=od(l),d=la(l),d.callback=null,ca(s,d,l),s=l,r.current.lanes=s,Ws(r,s),yr(r),t[wi]=r.current,$f(t),new Hc(r)},Ho.version="19.2.0",Ho}var v0;function qC(){if(v0)return xh.exports;v0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),xh.exports=UC(),xh.exports}var KC=qC(),x=Xm();const On=n4(x),Qm=jC({__proto__:null,default:On},[x]),YC=x.createContext(null),wh={didCatch:!1,error:null};class ZC extends x.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=wh}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var a,i,o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];(a=(i=this.props).onReset)===null||a===void 0||a.call(i,{args:c,reason:"imperative-api"}),this.setState(wh)}}componentDidCatch(e,a){var i,o;(i=(o=this.props).onError)===null||i===void 0||i.call(o,e,a)}componentDidUpdate(e,a){const{didCatch:i}=this.state,{resetKeys:o}=this.props;if(i&&a.error!==null&&WC(e.resetKeys,o)){var c,u;(c=(u=this.props).onReset)===null||c===void 0||c.call(u,{next:o,prev:e.resetKeys,reason:"keys"}),this.setState(wh)}}render(){const{children:e,fallbackRender:a,FallbackComponent:i,fallback:o}=this.props,{didCatch:c,error:u}=this.state;let f=e;if(c){const m={error:u,resetErrorBoundary:this.resetErrorBoundary};if(typeof a=="function")f=a(m);else if(i)f=x.createElement(i,m);else if(o!==void 0)f=o;else throw u}return x.createElement(YC.Provider,{value:{didCatch:c,error:u,resetErrorBoundary:this.resetErrorBoundary}},f)}}function WC(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.length!==e.length||n.some((a,i)=>!Object.is(a,e[i]))}const XC={SPARK_RUNTIME_LOADED:"sparkRuntimeLoaded"},QC=n=>{};class Jc{async getKeys(){const e=await fetch("/_spark/kv",{method:"GET"});if(!e.ok){const i=`Failed to fetch KV keys: ${e.statusText}`;return Promise.reject(new Error(i))}let a;try{a=await e.json()}catch{const o="Failed to parse KV keys response";return Promise.reject(new Error(o))}if(!Array.isArray(a)){const i="KV keys response is not an array";return Promise.reject(new Error(i))}return a}async getAll(){const e=await this.getKeys(),a={},i=await Promise.all(e.map(o=>this.getKey(o)));return e.forEach((o,c)=>{const u=i[c];u!==void 0&&(a[o]=u)}),a}async getKey(e,a){let i=`/_spark/kv/${encodeURIComponent(e)}`;a&&(i+=`?collection=${encodeURIComponent(a)}`);const o=await fetch(i,{method:"GET",headers:{"Content-Type":"text/plain"}});if(!o.ok){const u=`Failed to fetch KV key: ${o.statusText}`;return o.status===404?void 0:Promise.reject(new Error(u))}const c=await o.text();try{return JSON.parse(c)}catch{const f="Failed to parse KV key response";return Promise.reject(new Error(f))}}async getOrSetKey(e,a){const i=await this.getKey(e);if(i!==void 0)return i;const o=await fetch(`/_spark/kv/${encodeURIComponent(e)}`,{method:"POST",headers:{"Content-Type":"text/plain","X-Spark-Initial":"true"},body:JSON.stringify(a)});if(!o.ok){const c=`Failed to set default value for key: ${o.statusText}`;return Promise.reject(new Error(c))}return a}async setKey(e,a,i){let o=`/_spark/kv/${encodeURIComponent(e)}`;i&&(o+=`?collection=${encodeURIComponent(i)}`);const c=await fetch(o,{method:"POST",headers:{"Content-Type":"text/plain","X-Spark-Initial":"false"},body:JSON.stringify(a)});if(!c.ok){const u=`Failed to set key: ${c.statusText}`;return Promise.reject(new Error(u))}QC({payload:{value:JSON.stringify(a)}})}async deleteKey(e,a){let i=`/_spark/kv/${encodeURIComponent(e)}`;a&&(i+=`?collection=${encodeURIComponent(a)}`),await fetch(i,{method:"DELETE"})}}const $C={"ai21-jamba-instruct":"ai21-labs/ai21-jamba-instruct","cohere-command-r-plus":"cohere/cohere-command-r-plus","cohere-command-r":"cohere/cohere-command-r","gpt-4o-mini":"openai/gpt-4o-mini","gpt-4o":"openai/gpt-4o","meta-llama-3.1-405b-instruct":"meta/meta-llama-3.1-405b-instruct","meta-llama-3.1-70b-instruct":"meta/meta-llama-3.1-70b-instruct","meta-llama-3.1-8b-instruct":"meta/meta-llama-3.1-8b-instruct","meta-llama-3-70b-instruct":"meta/meta-llama-3-70b-instruct","meta-llama-3-8b-instruct":"meta/meta-llama-3-8b-instruct","mistral-large-2407":"mistral-ai/mistral-large-2407","mistral-large":"mistral-ai/mistral-large","mistral-nemo":"mistral-ai/mistral-nemo","mistral-small":"mistral-ai/mistral-small","phi-3-medium-128K-instruct":"microsoft/phi-3-medium-128K-instruct","phi-3-medium-4K-instruct":"microsoft/phi-3-medium-4K-instruct","phi-3-mini-128K-instruct":"microsoft/phi-3-mini-128K-instruct","phi-3-mini-4K-instruct":"microsoft/phi-3-mini-4K-instruct","phi-3-small-128K-instruct":"microsoft/phi-3-small-128K-instruct","phi-3-small-8K-instruct":"microsoft/phi-3-small-8K-instruct"},eA=n=>n?$C[n]||n:"openai/gpt-4o";async function nA(n,e,a){const i=eA(e),u=await fetch("/_spark/llm",{method:"POST",body:JSON.stringify({messages:[{role:"system",content:"You are a helpful assistant."},{role:"user",content:n}],temperature:1,top_p:1,max_tokens:1e3,model:i,response_format:{type:a?"json_object":"text"}}),headers:{"Content-Type":"application/json"}});if(!u.ok){const p=await u.text();throw new Error(`LLM request failed: ${u.status} ${u.statusText} - ${p}`)}return(await u.json()).choices[0].message.content}function tA(n,...e){return n.reduce((a,i,o)=>a+i+(e[o]||""),"")}let Uc=null;async function rA(){try{return Uc||(Uc=await(await fetch("/_spark/user")).json(),Uc)}catch(n){return console.error("Failed to fetch user data:",n),null}}const r4={url:window?.location?.href,load_ms:window?.performance?.now()};window.parent.postMessage({type:XC.SPARK_RUNTIME_LOADED,payload:r4},"*");fetch("/_spark/loaded",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r4)});const aA={keys:async()=>new Jc().getKeys(),get:async n=>new Jc().getKey(n),set:async(n,e)=>new Jc().setKey(n,e),delete:async n=>new Jc().deleteKey(n)};window.spark={llmPrompt:tA,llm:nA,user:rA,kv:aA};const sm=()=>navigator.language.toLowerCase().startsWith("fr")?"fr":"en",a4=()=>({language:sm(),birthDate:"",otpCode:"",reason:"illness",insurance:"swiss",hasEmployer:!1,consentNLPD:!1,consentMarketing:!1,identityCard:null,insuranceCard:null,firstName:"",lastName:"",birthDatePersonal:"",gender:"",nationality:"",avsNumber:"",street:"",npa:"",city:"",country:"",email:"",profession:"",employerName:"",employerAddress:"",referringDoctor:"",generalPractitioner:"",accidentDate:"",accidentInsurance:"",claimNumber:"",basicInsurance:"",cardNumber:"",policyNumber:"",complementaryInsurance:""}),iA=()=>{try{const n=sessionStorage.getItem("wizard-form-data");if(n)return{...JSON.parse(n),identityCard:null,insuranceCard:null}}catch(n){console.error("Failed to load from sessionStorage",n)}return a4()},sA=n=>{try{sessionStorage.setItem("wizard-form-data",JSON.stringify(n))}catch(e){console.error("Failed to save to sessionStorage",e)}},oA=()=>{const[n,e]=x.useState("landing"),[a,i]=x.useState(sm()),[o,c]=x.useState(iA());x.useEffect(()=>{sA(o)},[o]);const u=v=>{"language"in v&&v.language&&i(v.language);const{language:S,...A}=v;Object.keys(A).length>0&&c(E=>({...E,...A}))},f=v=>{e(v)},m=()=>{const v=["landing","security","otp","qualification","loading","admin","success"],S=v.indexOf(n);S<v.length-1&&e(v[S+1])},p=()=>{const v=["landing","security","otp","qualification","loading","admin","success"],S=v.indexOf(n);if(S>0){const A=v[S-1];e(A==="loading"?v[S-2]:A)}},y=()=>{e("landing"),i(sm()),sessionStorage.removeItem("wizard-form-data"),c(a4())};return{currentStep:n,formData:{...o,language:a},updateFormData:u,goToStep:f,nextStep:m,prevStep:p,resetWizard:y}};const lA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,i)=>i?i.toUpperCase():a.toLowerCase()),b0=n=>{const e=cA(n);return e.charAt(0).toUpperCase()+e.slice(1)},i4=(...n)=>n.filter((e,a,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===a).join(" ").trim();var uA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const dA=x.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:o="",children:c,iconNode:u,...f},m)=>x.createElement("svg",{ref:m,...uA,width:e,height:e,stroke:n,strokeWidth:i?Number(a)*24/Number(e):a,className:i4("lucide",o),...f},[...u.map(([p,y])=>x.createElement(p,y)),...Array.isArray(c)?c:[c]]));const $n=(n,e)=>{const a=x.forwardRef(({className:i,...o},c)=>x.createElement(dA,{ref:c,iconNode:e,className:i4(`lucide-${lA(b0(n))}`,`lucide-${n}`,i),...o}));return a.displayName=b0(n),a};const fA=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ju=$n("arrow-left",fA);const hA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],yl=$n("arrow-right",hA);const mA=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],pA=$n("briefcase",mA);const gA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],yA=$n("calendar",gA);const vA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Vu=$n("check",vA);const bA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Gu=$n("chevron-down",bA);const xA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],SA=$n("chevron-up",xA);const MA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Sn=$n("circle-alert",MA);const CA=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ys=$n("circle-check-big",CA);const AA=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],wA=$n("clipboard-list",AA);const TA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],DA=$n("globe",TA);const EA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],s4=$n("loader-circle",EA);const NA=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],RA=$n("refresh-cw",NA);const kA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],PA=$n("shield",kA);const BA=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],LA=$n("sparkles",BA);const _A=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],OA=$n("triangle-alert",_A);const zA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],jA=$n("upload",zA);const VA=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],GA=$n("user",VA);const FA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],o4=$n("x",FA),HA="/assets/logo-hlt-SDnMJMTh.png";var vl=t4();const IA=n4(vl);function x0(n,[e,a]){return Math.min(a,Math.max(e,n))}function gn(n,e,{checkForDefaultPrevented:a=!0}={}){return function(o){if(n?.(o),a===!1||!o.defaultPrevented)return e?.(o)}}function JA(n,e){const a=x.createContext(e),i=c=>{const{children:u,...f}=c,m=x.useMemo(()=>f,Object.values(f));return g.jsx(a.Provider,{value:m,children:u})};i.displayName=n+"Provider";function o(c){const u=x.useContext(a);if(u)return u;if(e!==void 0)return e;throw new Error(`\`${c}\` must be used within \`${n}\``)}return[i,o]}function bl(n,e=[]){let a=[];function i(c,u){const f=x.createContext(u),m=a.length;a=[...a,u];const p=v=>{const{scope:S,children:A,...E}=v,M=S?.[n]?.[m]||f,D=x.useMemo(()=>E,Object.values(E));return g.jsx(M.Provider,{value:D,children:A})};p.displayName=c+"Provider";function y(v,S){const A=S?.[n]?.[m]||f,E=x.useContext(A);if(E)return E;if(u!==void 0)return u;throw new Error(`\`${v}\` must be used within \`${c}\``)}return[p,y]}const o=()=>{const c=a.map(u=>x.createContext(u));return function(f){const m=f?.[n]||c;return x.useMemo(()=>({[`__scope${n}`]:{...f,[n]:m}}),[f,m])}};return o.scopeName=n,[i,UA(o,...e)]}function UA(...n){const e=n[0];if(n.length===1)return e;const a=()=>{const i=n.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(c){const u=i.reduce((f,{useScope:m,scopeName:p})=>{const v=m(c)[`__scope${p}`];return{...f,...v}},{});return x.useMemo(()=>({[`__scope${e.scopeName}`]:u}),[u])}};return a.scopeName=e.scopeName,a}function S0(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function zs(...n){return e=>{let a=!1;const i=n.map(o=>{const c=S0(o,e);return!a&&typeof c=="function"&&(a=!0),c});if(a)return()=>{for(let o=0;o<i.length;o++){const c=i[o];typeof c=="function"?c():S0(n[o],null)}}}}function Dn(...n){return x.useCallback(zs(...n),n)}function M0(n){const e=qA(n),a=x.forwardRef((i,o)=>{const{children:c,...u}=i,f=x.Children.toArray(c),m=f.find(YA);if(m){const p=m.props.children,y=f.map(v=>v===m?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:v);return g.jsx(e,{...u,ref:o,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return g.jsx(e,{...u,ref:o,children:c})});return a.displayName=`${n}.Slot`,a}function qA(n){const e=x.forwardRef((a,i)=>{const{children:o,...c}=a;if(x.isValidElement(o)){const u=WA(o),f=ZA(c,o.props);return o.type!==x.Fragment&&(f.ref=i?zs(i,u):u),x.cloneElement(o,f)}return x.Children.count(o)>1?x.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var KA=Symbol("radix.slottable");function YA(n){return x.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===KA}function ZA(n,e){const a={...e};for(const i in e){const o=n[i],c=e[i];/^on[A-Z]/.test(i)?o&&c?a[i]=(...f)=>{const m=c(...f);return o(...f),m}:o&&(a[i]=o):i==="style"?a[i]={...o,...c}:i==="className"&&(a[i]=[o,c].filter(Boolean).join(" "))}return{...n,...a}}function WA(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?n.props.ref:n.props.ref||n.ref)}function XA(n){const e=n+"CollectionProvider",[a,i]=bl(e),[o,c]=a(e,{collectionRef:{current:null},itemMap:new Map}),u=M=>{const{scope:D,children:w}=M,N=On.useRef(null),P=On.useRef(new Map).current;return g.jsx(o,{scope:D,itemMap:P,collectionRef:N,children:w})};u.displayName=e;const f=n+"CollectionSlot",m=M0(f),p=On.forwardRef((M,D)=>{const{scope:w,children:N}=M,P=c(f,w),j=Dn(D,P.collectionRef);return g.jsx(m,{ref:j,children:N})});p.displayName=f;const y=n+"CollectionItemSlot",v="data-radix-collection-item",S=M0(y),A=On.forwardRef((M,D)=>{const{scope:w,children:N,...P}=M,j=On.useRef(null),O=Dn(D,j),q=c(y,w);return On.useEffect(()=>(q.itemMap.set(j,{ref:j,...P}),()=>void q.itemMap.delete(j))),g.jsx(S,{[v]:"",ref:O,children:N})});A.displayName=y;function E(M){const D=c(n+"CollectionConsumer",M);return On.useCallback(()=>{const N=D.collectionRef.current;if(!N)return[];const P=Array.from(N.querySelectorAll(`[${v}]`));return Array.from(D.itemMap.values()).sort((q,B)=>P.indexOf(q.ref.current)-P.indexOf(B.ref.current))},[D.collectionRef,D.itemMap])}return[{Provider:u,Slot:p,ItemSlot:A},E,i]}var QA=x.createContext(void 0);function $A(n){const e=x.useContext(QA);return n||e||"ltr"}function e6(n){const e=n6(n),a=x.forwardRef((i,o)=>{const{children:c,...u}=i,f=x.Children.toArray(c),m=f.find(r6);if(m){const p=m.props.children,y=f.map(v=>v===m?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:v);return g.jsx(e,{...u,ref:o,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return g.jsx(e,{...u,ref:o,children:c})});return a.displayName=`${n}.Slot`,a}function n6(n){const e=x.forwardRef((a,i)=>{const{children:o,...c}=a;if(x.isValidElement(o)){const u=i6(o),f=a6(c,o.props);return o.type!==x.Fragment&&(f.ref=i?zs(i,u):u),x.cloneElement(o,f)}return x.Children.count(o)>1?x.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var t6=Symbol("radix.slottable");function r6(n){return x.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===t6}function a6(n,e){const a={...e};for(const i in e){const o=n[i],c=e[i];/^on[A-Z]/.test(i)?o&&c?a[i]=(...f)=>{const m=c(...f);return o(...f),m}:o&&(a[i]=o):i==="style"?a[i]={...o,...c}:i==="className"&&(a[i]=[o,c].filter(Boolean).join(" "))}return{...n,...a}}function i6(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?n.props.ref:n.props.ref||n.ref)}var s6=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],un=s6.reduce((n,e)=>{const a=e6(`Primitive.${e}`),i=x.forwardRef((o,c)=>{const{asChild:u,...f}=o,m=u?a:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),g.jsx(m,{...f,ref:c})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function o6(n,e){n&&vl.flushSync(()=>n.dispatchEvent(e))}function bi(n){const e=x.useRef(n);return x.useEffect(()=>{e.current=n}),x.useMemo(()=>(...a)=>e.current?.(...a),[])}function l6(n,e=globalThis?.document){const a=bi(n);x.useEffect(()=>{const i=o=>{o.key==="Escape"&&a(o)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[a,e])}var c6="DismissableLayer",om="dismissableLayer.update",u6="dismissableLayer.pointerDownOutside",d6="dismissableLayer.focusOutside",C0,l4=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$m=x.forwardRef((n,e)=>{const{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:c,onInteractOutside:u,onDismiss:f,...m}=n,p=x.useContext(l4),[y,v]=x.useState(null),S=y?.ownerDocument??globalThis?.document,[,A]=x.useState({}),E=Dn(e,B=>v(B)),M=Array.from(p.layers),[D]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),w=M.indexOf(D),N=y?M.indexOf(y):-1,P=p.layersWithOutsidePointerEventsDisabled.size>0,j=N>=w,O=m6(B=>{const G=B.target,Q=[...p.branches].some(ae=>ae.contains(G));!j||Q||(o?.(B),u?.(B),B.defaultPrevented||f?.())},S),q=p6(B=>{const G=B.target;[...p.branches].some(ae=>ae.contains(G))||(c?.(B),u?.(B),B.defaultPrevented||f?.())},S);return l6(B=>{N===p.layers.size-1&&(i?.(B),!B.defaultPrevented&&f&&(B.preventDefault(),f()))},S),x.useEffect(()=>{if(y)return a&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(C0=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(y)),p.layers.add(y),A0(),()=>{a&&p.layersWithOutsidePointerEventsDisabled.size===1&&(S.body.style.pointerEvents=C0)}},[y,S,a,p]),x.useEffect(()=>()=>{y&&(p.layers.delete(y),p.layersWithOutsidePointerEventsDisabled.delete(y),A0())},[y,p]),x.useEffect(()=>{const B=()=>A({});return document.addEventListener(om,B),()=>document.removeEventListener(om,B)},[]),g.jsx(un.div,{...m,ref:E,style:{pointerEvents:P?j?"auto":"none":void 0,...n.style},onFocusCapture:gn(n.onFocusCapture,q.onFocusCapture),onBlurCapture:gn(n.onBlurCapture,q.onBlurCapture),onPointerDownCapture:gn(n.onPointerDownCapture,O.onPointerDownCapture)})});$m.displayName=c6;var f6="DismissableLayerBranch",h6=x.forwardRef((n,e)=>{const a=x.useContext(l4),i=x.useRef(null),o=Dn(e,i);return x.useEffect(()=>{const c=i.current;if(c)return a.branches.add(c),()=>{a.branches.delete(c)}},[a.branches]),g.jsx(un.div,{...n,ref:o})});h6.displayName=f6;function m6(n,e=globalThis?.document){const a=bi(n),i=x.useRef(!1),o=x.useRef(()=>{});return x.useEffect(()=>{const c=f=>{if(f.target&&!i.current){let m=function(){c4(u6,a,p,{discrete:!0})};const p={originalEvent:f};f.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=m,e.addEventListener("click",o.current,{once:!0})):m()}else e.removeEventListener("click",o.current);i.current=!1},u=window.setTimeout(()=>{e.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(u),e.removeEventListener("pointerdown",c),e.removeEventListener("click",o.current)}},[e,a]),{onPointerDownCapture:()=>i.current=!0}}function p6(n,e=globalThis?.document){const a=bi(n),i=x.useRef(!1);return x.useEffect(()=>{const o=c=>{c.target&&!i.current&&c4(d6,a,{originalEvent:c},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,a]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function A0(){const n=new CustomEvent(om);document.dispatchEvent(n)}function c4(n,e,a,{discrete:i}){const o=a.originalEvent.target,c=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:a});e&&o.addEventListener(n,e,{once:!0}),i?o6(o,c):o.dispatchEvent(c)}var Th=0;function u4(){x.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??w0()),document.body.insertAdjacentElement("beforeend",n[1]??w0()),Th++,()=>{Th===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Th--}},[])}function w0(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Dh="focusScope.autoFocusOnMount",Eh="focusScope.autoFocusOnUnmount",T0={bubbles:!1,cancelable:!0},g6="FocusScope",ep=x.forwardRef((n,e)=>{const{loop:a=!1,trapped:i=!1,onMountAutoFocus:o,onUnmountAutoFocus:c,...u}=n,[f,m]=x.useState(null),p=bi(o),y=bi(c),v=x.useRef(null),S=Dn(e,M=>m(M)),A=x.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;x.useEffect(()=>{if(i){let M=function(P){if(A.paused||!f)return;const j=P.target;f.contains(j)?v.current=j:Da(v.current,{select:!0})},D=function(P){if(A.paused||!f)return;const j=P.relatedTarget;j!==null&&(f.contains(j)||Da(v.current,{select:!0}))},w=function(P){if(document.activeElement===document.body)for(const O of P)O.removedNodes.length>0&&Da(f)};document.addEventListener("focusin",M),document.addEventListener("focusout",D);const N=new MutationObserver(w);return f&&N.observe(f,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",M),document.removeEventListener("focusout",D),N.disconnect()}}},[i,f,A.paused]),x.useEffect(()=>{if(f){E0.add(A);const M=document.activeElement;if(!f.contains(M)){const w=new CustomEvent(Dh,T0);f.addEventListener(Dh,p),f.dispatchEvent(w),w.defaultPrevented||(y6(M6(d4(f)),{select:!0}),document.activeElement===M&&Da(f))}return()=>{f.removeEventListener(Dh,p),setTimeout(()=>{const w=new CustomEvent(Eh,T0);f.addEventListener(Eh,y),f.dispatchEvent(w),w.defaultPrevented||Da(M??document.body,{select:!0}),f.removeEventListener(Eh,y),E0.remove(A)},0)}}},[f,p,y,A]);const E=x.useCallback(M=>{if(!a&&!i||A.paused)return;const D=M.key==="Tab"&&!M.altKey&&!M.ctrlKey&&!M.metaKey,w=document.activeElement;if(D&&w){const N=M.currentTarget,[P,j]=v6(N);P&&j?!M.shiftKey&&w===j?(M.preventDefault(),a&&Da(P,{select:!0})):M.shiftKey&&w===P&&(M.preventDefault(),a&&Da(j,{select:!0})):w===N&&M.preventDefault()}},[a,i,A.paused]);return g.jsx(un.div,{tabIndex:-1,...u,ref:S,onKeyDown:E})});ep.displayName=g6;function y6(n,{select:e=!1}={}){const a=document.activeElement;for(const i of n)if(Da(i,{select:e}),document.activeElement!==a)return}function v6(n){const e=d4(n),a=D0(e,n),i=D0(e.reverse(),n);return[a,i]}function d4(n){const e=[],a=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const o=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||o?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;a.nextNode();)e.push(a.currentNode);return e}function D0(n,e){for(const a of n)if(!b6(a,{upTo:e}))return a}function b6(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function x6(n){return n instanceof HTMLInputElement&&"select"in n}function Da(n,{select:e=!1}={}){if(n&&n.focus){const a=document.activeElement;n.focus({preventScroll:!0}),n!==a&&x6(n)&&e&&n.select()}}var E0=S6();function S6(){let n=[];return{add(e){const a=n[0];e!==a&&a?.pause(),n=N0(n,e),n.unshift(e)},remove(e){n=N0(n,e),n[0]?.resume()}}}function N0(n,e){const a=[...n],i=a.indexOf(e);return i!==-1&&a.splice(i,1),a}function M6(n){return n.filter(e=>e.tagName!=="A")}var gt=globalThis?.document?x.useLayoutEffect:()=>{},C6=Qm[" useId ".trim().toString()]||(()=>{}),A6=0;function ws(n){const[e,a]=x.useState(C6());return gt(()=>{a(i=>i??String(A6++))},[n]),n||(e?`radix-${e}`:"")}const w6=["top","right","bottom","left"],_a=Math.min,Ot=Math.max,fu=Math.round,qc=Math.floor,Cr=n=>({x:n,y:n}),T6={left:"right",right:"left",bottom:"top",top:"bottom"},D6={start:"end",end:"start"};function lm(n,e,a){return Ot(n,_a(e,a))}function Wr(n,e){return typeof n=="function"?n(e):n}function Xr(n){return n.split("-")[0]}function js(n){return n.split("-")[1]}function np(n){return n==="x"?"y":"x"}function tp(n){return n==="y"?"height":"width"}const E6=new Set(["top","bottom"]);function Mr(n){return E6.has(Xr(n))?"y":"x"}function rp(n){return np(Mr(n))}function N6(n,e,a){a===void 0&&(a=!1);const i=js(n),o=rp(n),c=tp(o);let u=o==="x"?i===(a?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[c]>e.floating[c]&&(u=hu(u)),[u,hu(u)]}function R6(n){const e=hu(n);return[cm(n),e,cm(e)]}function cm(n){return n.replace(/start|end/g,e=>D6[e])}const R0=["left","right"],k0=["right","left"],k6=["top","bottom"],P6=["bottom","top"];function B6(n,e,a){switch(n){case"top":case"bottom":return a?e?k0:R0:e?R0:k0;case"left":case"right":return e?k6:P6;default:return[]}}function L6(n,e,a,i){const o=js(n);let c=B6(Xr(n),a==="start",i);return o&&(c=c.map(u=>u+"-"+o),e&&(c=c.concat(c.map(cm)))),c}function hu(n){return n.replace(/left|right|bottom|top/g,e=>T6[e])}function _6(n){return{top:0,right:0,bottom:0,left:0,...n}}function f4(n){return typeof n!="number"?_6(n):{top:n,right:n,bottom:n,left:n}}function mu(n){const{x:e,y:a,width:i,height:o}=n;return{width:i,height:o,top:a,left:e,right:e+i,bottom:a+o,x:e,y:a}}function P0(n,e,a){let{reference:i,floating:o}=n;const c=Mr(e),u=rp(e),f=tp(u),m=Xr(e),p=c==="y",y=i.x+i.width/2-o.width/2,v=i.y+i.height/2-o.height/2,S=i[f]/2-o[f]/2;let A;switch(m){case"top":A={x:y,y:i.y-o.height};break;case"bottom":A={x:y,y:i.y+i.height};break;case"right":A={x:i.x+i.width,y:v};break;case"left":A={x:i.x-o.width,y:v};break;default:A={x:i.x,y:i.y}}switch(js(e)){case"start":A[u]-=S*(a&&p?-1:1);break;case"end":A[u]+=S*(a&&p?-1:1);break}return A}const O6=async(n,e,a)=>{const{placement:i="bottom",strategy:o="absolute",middleware:c=[],platform:u}=a,f=c.filter(Boolean),m=await(u.isRTL==null?void 0:u.isRTL(e));let p=await u.getElementRects({reference:n,floating:e,strategy:o}),{x:y,y:v}=P0(p,i,m),S=i,A={},E=0;for(let M=0;M<f.length;M++){const{name:D,fn:w}=f[M],{x:N,y:P,data:j,reset:O}=await w({x:y,y:v,initialPlacement:i,placement:S,strategy:o,middlewareData:A,rects:p,platform:u,elements:{reference:n,floating:e}});y=N??y,v=P??v,A={...A,[D]:{...A[D],...j}},O&&E<=50&&(E++,typeof O=="object"&&(O.placement&&(S=O.placement),O.rects&&(p=O.rects===!0?await u.getElementRects({reference:n,floating:e,strategy:o}):O.rects),{x:y,y:v}=P0(p,S,m)),M=-1)}return{x:y,y:v,placement:S,strategy:o,middlewareData:A}};async function il(n,e){var a;e===void 0&&(e={});const{x:i,y:o,platform:c,rects:u,elements:f,strategy:m}=n,{boundary:p="clippingAncestors",rootBoundary:y="viewport",elementContext:v="floating",altBoundary:S=!1,padding:A=0}=Wr(e,n),E=f4(A),D=f[S?v==="floating"?"reference":"floating":v],w=mu(await c.getClippingRect({element:(a=await(c.isElement==null?void 0:c.isElement(D)))==null||a?D:D.contextElement||await(c.getDocumentElement==null?void 0:c.getDocumentElement(f.floating)),boundary:p,rootBoundary:y,strategy:m})),N=v==="floating"?{x:i,y:o,width:u.floating.width,height:u.floating.height}:u.reference,P=await(c.getOffsetParent==null?void 0:c.getOffsetParent(f.floating)),j=await(c.isElement==null?void 0:c.isElement(P))?await(c.getScale==null?void 0:c.getScale(P))||{x:1,y:1}:{x:1,y:1},O=mu(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:N,offsetParent:P,strategy:m}):N);return{top:(w.top-O.top+E.top)/j.y,bottom:(O.bottom-w.bottom+E.bottom)/j.y,left:(w.left-O.left+E.left)/j.x,right:(O.right-w.right+E.right)/j.x}}const z6=n=>({name:"arrow",options:n,async fn(e){const{x:a,y:i,placement:o,rects:c,platform:u,elements:f,middlewareData:m}=e,{element:p,padding:y=0}=Wr(n,e)||{};if(p==null)return{};const v=f4(y),S={x:a,y:i},A=rp(o),E=tp(A),M=await u.getDimensions(p),D=A==="y",w=D?"top":"left",N=D?"bottom":"right",P=D?"clientHeight":"clientWidth",j=c.reference[E]+c.reference[A]-S[A]-c.floating[E],O=S[A]-c.reference[A],q=await(u.getOffsetParent==null?void 0:u.getOffsetParent(p));let B=q?q[P]:0;(!B||!await(u.isElement==null?void 0:u.isElement(q)))&&(B=f.floating[P]||c.floating[E]);const G=j/2-O/2,Q=B/2-M[E]/2-1,ae=_a(v[w],Q),de=_a(v[N],Q),se=ae,re=B-M[E]-de,le=B/2-M[E]/2+G,ge=lm(se,le,re),_=!m.arrow&&js(o)!=null&&le!==ge&&c.reference[E]/2-(le<se?ae:de)-M[E]/2<0,U=_?le<se?le-se:le-re:0;return{[A]:S[A]+U,data:{[A]:ge,centerOffset:le-ge-U,..._&&{alignmentOffset:U}},reset:_}}}),j6=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var a,i;const{placement:o,middlewareData:c,rects:u,initialPlacement:f,platform:m,elements:p}=e,{mainAxis:y=!0,crossAxis:v=!0,fallbackPlacements:S,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:M=!0,...D}=Wr(n,e);if((a=c.arrow)!=null&&a.alignmentOffset)return{};const w=Xr(o),N=Mr(f),P=Xr(f)===f,j=await(m.isRTL==null?void 0:m.isRTL(p.floating)),O=S||(P||!M?[hu(f)]:R6(f)),q=E!=="none";!S&&q&&O.push(...L6(f,M,E,j));const B=[f,...O],G=await il(e,D),Q=[];let ae=((i=c.flip)==null?void 0:i.overflows)||[];if(y&&Q.push(G[w]),v){const le=N6(o,u,j);Q.push(G[le[0]],G[le[1]])}if(ae=[...ae,{placement:o,overflows:Q}],!Q.every(le=>le<=0)){var de,se;const le=(((de=c.flip)==null?void 0:de.index)||0)+1,ge=B[le];if(ge&&(!(v==="alignment"?N!==Mr(ge):!1)||ae.every(V=>Mr(V.placement)===N?V.overflows[0]>0:!0)))return{data:{index:le,overflows:ae},reset:{placement:ge}};let _=(se=ae.filter(U=>U.overflows[0]<=0).sort((U,V)=>U.overflows[1]-V.overflows[1])[0])==null?void 0:se.placement;if(!_)switch(A){case"bestFit":{var re;const U=(re=ae.filter(V=>{if(q){const fe=Mr(V.placement);return fe===N||fe==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(fe=>fe>0).reduce((fe,be)=>fe+be,0)]).sort((V,fe)=>V[1]-fe[1])[0])==null?void 0:re[0];U&&(_=U);break}case"initialPlacement":_=f;break}if(o!==_)return{reset:{placement:_}}}return{}}}};function B0(n,e){return{top:n.top-e.height,right:n.right-e.width,bottom:n.bottom-e.height,left:n.left-e.width}}function L0(n){return w6.some(e=>n[e]>=0)}const V6=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(e){const{rects:a}=e,{strategy:i="referenceHidden",...o}=Wr(n,e);switch(i){case"referenceHidden":{const c=await il(e,{...o,elementContext:"reference"}),u=B0(c,a.reference);return{data:{referenceHiddenOffsets:u,referenceHidden:L0(u)}}}case"escaped":{const c=await il(e,{...o,altBoundary:!0}),u=B0(c,a.floating);return{data:{escapedOffsets:u,escaped:L0(u)}}}default:return{}}}}},h4=new Set(["left","top"]);async function G6(n,e){const{placement:a,platform:i,elements:o}=n,c=await(i.isRTL==null?void 0:i.isRTL(o.floating)),u=Xr(a),f=js(a),m=Mr(a)==="y",p=h4.has(u)?-1:1,y=c&&m?-1:1,v=Wr(e,n);let{mainAxis:S,crossAxis:A,alignmentAxis:E}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return f&&typeof E=="number"&&(A=f==="end"?E*-1:E),m?{x:A*y,y:S*p}:{x:S*p,y:A*y}}const F6=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var a,i;const{x:o,y:c,placement:u,middlewareData:f}=e,m=await G6(e,n);return u===((a=f.offset)==null?void 0:a.placement)&&(i=f.arrow)!=null&&i.alignmentOffset?{}:{x:o+m.x,y:c+m.y,data:{...m,placement:u}}}}},H6=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:a,y:i,placement:o}=e,{mainAxis:c=!0,crossAxis:u=!1,limiter:f={fn:D=>{let{x:w,y:N}=D;return{x:w,y:N}}},...m}=Wr(n,e),p={x:a,y:i},y=await il(e,m),v=Mr(Xr(o)),S=np(v);let A=p[S],E=p[v];if(c){const D=S==="y"?"top":"left",w=S==="y"?"bottom":"right",N=A+y[D],P=A-y[w];A=lm(N,A,P)}if(u){const D=v==="y"?"top":"left",w=v==="y"?"bottom":"right",N=E+y[D],P=E-y[w];E=lm(N,E,P)}const M=f.fn({...e,[S]:A,[v]:E});return{...M,data:{x:M.x-a,y:M.y-i,enabled:{[S]:c,[v]:u}}}}}},I6=function(n){return n===void 0&&(n={}),{options:n,fn(e){const{x:a,y:i,placement:o,rects:c,middlewareData:u}=e,{offset:f=0,mainAxis:m=!0,crossAxis:p=!0}=Wr(n,e),y={x:a,y:i},v=Mr(o),S=np(v);let A=y[S],E=y[v];const M=Wr(f,e),D=typeof M=="number"?{mainAxis:M,crossAxis:0}:{mainAxis:0,crossAxis:0,...M};if(m){const P=S==="y"?"height":"width",j=c.reference[S]-c.floating[P]+D.mainAxis,O=c.reference[S]+c.reference[P]-D.mainAxis;A<j?A=j:A>O&&(A=O)}if(p){var w,N;const P=S==="y"?"width":"height",j=h4.has(Xr(o)),O=c.reference[v]-c.floating[P]+(j&&((w=u.offset)==null?void 0:w[v])||0)+(j?0:D.crossAxis),q=c.reference[v]+c.reference[P]+(j?0:((N=u.offset)==null?void 0:N[v])||0)-(j?D.crossAxis:0);E<O?E=O:E>q&&(E=q)}return{[S]:A,[v]:E}}}},J6=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(e){var a,i;const{placement:o,rects:c,platform:u,elements:f}=e,{apply:m=()=>{},...p}=Wr(n,e),y=await il(e,p),v=Xr(o),S=js(o),A=Mr(o)==="y",{width:E,height:M}=c.floating;let D,w;v==="top"||v==="bottom"?(D=v,w=S===(await(u.isRTL==null?void 0:u.isRTL(f.floating))?"start":"end")?"left":"right"):(w=v,D=S==="end"?"top":"bottom");const N=M-y.top-y.bottom,P=E-y.left-y.right,j=_a(M-y[D],N),O=_a(E-y[w],P),q=!e.middlewareData.shift;let B=j,G=O;if((a=e.middlewareData.shift)!=null&&a.enabled.x&&(G=P),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(B=N),q&&!S){const ae=Ot(y.left,0),de=Ot(y.right,0),se=Ot(y.top,0),re=Ot(y.bottom,0);A?G=E-2*(ae!==0||de!==0?ae+de:Ot(y.left,y.right)):B=M-2*(se!==0||re!==0?se+re:Ot(y.top,y.bottom))}await m({...e,availableWidth:G,availableHeight:B});const Q=await u.getDimensions(f.floating);return E!==Q.width||M!==Q.height?{reset:{rects:!0}}:{}}}};function Fu(){return typeof window<"u"}function Vs(n){return m4(n)?(n.nodeName||"").toLowerCase():"#document"}function jt(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Er(n){var e;return(e=(m4(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function m4(n){return Fu()?n instanceof Node||n instanceof jt(n).Node:!1}function dr(n){return Fu()?n instanceof Element||n instanceof jt(n).Element:!1}function Dr(n){return Fu()?n instanceof HTMLElement||n instanceof jt(n).HTMLElement:!1}function _0(n){return!Fu()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof jt(n).ShadowRoot}const U6=new Set(["inline","contents"]);function xl(n){const{overflow:e,overflowX:a,overflowY:i,display:o}=fr(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+a)&&!U6.has(o)}const q6=new Set(["table","td","th"]);function K6(n){return q6.has(Vs(n))}const Y6=[":popover-open",":modal"];function Hu(n){return Y6.some(e=>{try{return n.matches(e)}catch{return!1}})}const Z6=["transform","translate","scale","rotate","perspective"],W6=["transform","translate","scale","rotate","perspective","filter"],X6=["paint","layout","strict","content"];function ap(n){const e=ip(),a=dr(n)?fr(n):n;return Z6.some(i=>a[i]?a[i]!=="none":!1)||(a.containerType?a.containerType!=="normal":!1)||!e&&(a.backdropFilter?a.backdropFilter!=="none":!1)||!e&&(a.filter?a.filter!=="none":!1)||W6.some(i=>(a.willChange||"").includes(i))||X6.some(i=>(a.contain||"").includes(i))}function Q6(n){let e=Oa(n);for(;Dr(e)&&!Ns(e);){if(ap(e))return e;if(Hu(e))return null;e=Oa(e)}return null}function ip(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const $6=new Set(["html","body","#document"]);function Ns(n){return $6.has(Vs(n))}function fr(n){return jt(n).getComputedStyle(n)}function Iu(n){return dr(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Oa(n){if(Vs(n)==="html")return n;const e=n.assignedSlot||n.parentNode||_0(n)&&n.host||Er(n);return _0(e)?e.host:e}function p4(n){const e=Oa(n);return Ns(e)?n.ownerDocument?n.ownerDocument.body:n.body:Dr(e)&&xl(e)?e:p4(e)}function sl(n,e,a){var i;e===void 0&&(e=[]),a===void 0&&(a=!0);const o=p4(n),c=o===((i=n.ownerDocument)==null?void 0:i.body),u=jt(o);if(c){const f=um(u);return e.concat(u,u.visualViewport||[],xl(o)?o:[],f&&a?sl(f):[])}return e.concat(o,sl(o,[],a))}function um(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function g4(n){const e=fr(n);let a=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=Dr(n),c=o?n.offsetWidth:a,u=o?n.offsetHeight:i,f=fu(a)!==c||fu(i)!==u;return f&&(a=c,i=u),{width:a,height:i,$:f}}function sp(n){return dr(n)?n:n.contextElement}function Ts(n){const e=sp(n);if(!Dr(e))return Cr(1);const a=e.getBoundingClientRect(),{width:i,height:o,$:c}=g4(e);let u=(c?fu(a.width):a.width)/i,f=(c?fu(a.height):a.height)/o;return(!u||!Number.isFinite(u))&&(u=1),(!f||!Number.isFinite(f))&&(f=1),{x:u,y:f}}const ew=Cr(0);function y4(n){const e=jt(n);return!ip()||!e.visualViewport?ew:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function nw(n,e,a){return e===void 0&&(e=!1),!a||e&&a!==jt(n)?!1:e}function xi(n,e,a,i){e===void 0&&(e=!1),a===void 0&&(a=!1);const o=n.getBoundingClientRect(),c=sp(n);let u=Cr(1);e&&(i?dr(i)&&(u=Ts(i)):u=Ts(n));const f=nw(c,a,i)?y4(c):Cr(0);let m=(o.left+f.x)/u.x,p=(o.top+f.y)/u.y,y=o.width/u.x,v=o.height/u.y;if(c){const S=jt(c),A=i&&dr(i)?jt(i):i;let E=S,M=um(E);for(;M&&i&&A!==E;){const D=Ts(M),w=M.getBoundingClientRect(),N=fr(M),P=w.left+(M.clientLeft+parseFloat(N.paddingLeft))*D.x,j=w.top+(M.clientTop+parseFloat(N.paddingTop))*D.y;m*=D.x,p*=D.y,y*=D.x,v*=D.y,m+=P,p+=j,E=jt(M),M=um(E)}}return mu({width:y,height:v,x:m,y:p})}function Ju(n,e){const a=Iu(n).scrollLeft;return e?e.left+a:xi(Er(n)).left+a}function v4(n,e){const a=n.getBoundingClientRect(),i=a.left+e.scrollLeft-Ju(n,a),o=a.top+e.scrollTop;return{x:i,y:o}}function tw(n){let{elements:e,rect:a,offsetParent:i,strategy:o}=n;const c=o==="fixed",u=Er(i),f=e?Hu(e.floating):!1;if(i===u||f&&c)return a;let m={scrollLeft:0,scrollTop:0},p=Cr(1);const y=Cr(0),v=Dr(i);if((v||!v&&!c)&&((Vs(i)!=="body"||xl(u))&&(m=Iu(i)),Dr(i))){const A=xi(i);p=Ts(i),y.x=A.x+i.clientLeft,y.y=A.y+i.clientTop}const S=u&&!v&&!c?v4(u,m):Cr(0);return{width:a.width*p.x,height:a.height*p.y,x:a.x*p.x-m.scrollLeft*p.x+y.x+S.x,y:a.y*p.y-m.scrollTop*p.y+y.y+S.y}}function rw(n){return Array.from(n.getClientRects())}function aw(n){const e=Er(n),a=Iu(n),i=n.ownerDocument.body,o=Ot(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),c=Ot(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let u=-a.scrollLeft+Ju(n);const f=-a.scrollTop;return fr(i).direction==="rtl"&&(u+=Ot(e.clientWidth,i.clientWidth)-o),{width:o,height:c,x:u,y:f}}const O0=25;function iw(n,e){const a=jt(n),i=Er(n),o=a.visualViewport;let c=i.clientWidth,u=i.clientHeight,f=0,m=0;if(o){c=o.width,u=o.height;const y=ip();(!y||y&&e==="fixed")&&(f=o.offsetLeft,m=o.offsetTop)}const p=Ju(i);if(p<=0){const y=i.ownerDocument,v=y.body,S=getComputedStyle(v),A=y.compatMode==="CSS1Compat"&&parseFloat(S.marginLeft)+parseFloat(S.marginRight)||0,E=Math.abs(i.clientWidth-v.clientWidth-A);E<=O0&&(c-=E)}else p<=O0&&(c+=p);return{width:c,height:u,x:f,y:m}}const sw=new Set(["absolute","fixed"]);function ow(n,e){const a=xi(n,!0,e==="fixed"),i=a.top+n.clientTop,o=a.left+n.clientLeft,c=Dr(n)?Ts(n):Cr(1),u=n.clientWidth*c.x,f=n.clientHeight*c.y,m=o*c.x,p=i*c.y;return{width:u,height:f,x:m,y:p}}function z0(n,e,a){let i;if(e==="viewport")i=iw(n,a);else if(e==="document")i=aw(Er(n));else if(dr(e))i=ow(e,a);else{const o=y4(n);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return mu(i)}function b4(n,e){const a=Oa(n);return a===e||!dr(a)||Ns(a)?!1:fr(a).position==="fixed"||b4(a,e)}function lw(n,e){const a=e.get(n);if(a)return a;let i=sl(n,[],!1).filter(f=>dr(f)&&Vs(f)!=="body"),o=null;const c=fr(n).position==="fixed";let u=c?Oa(n):n;for(;dr(u)&&!Ns(u);){const f=fr(u),m=ap(u);!m&&f.position==="fixed"&&(o=null),(c?!m&&!o:!m&&f.position==="static"&&!!o&&sw.has(o.position)||xl(u)&&!m&&b4(n,u))?i=i.filter(y=>y!==u):o=f,u=Oa(u)}return e.set(n,i),i}function cw(n){let{element:e,boundary:a,rootBoundary:i,strategy:o}=n;const u=[...a==="clippingAncestors"?Hu(e)?[]:lw(e,this._c):[].concat(a),i],f=u[0],m=u.reduce((p,y)=>{const v=z0(e,y,o);return p.top=Ot(v.top,p.top),p.right=_a(v.right,p.right),p.bottom=_a(v.bottom,p.bottom),p.left=Ot(v.left,p.left),p},z0(e,f,o));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}}function uw(n){const{width:e,height:a}=g4(n);return{width:e,height:a}}function dw(n,e,a){const i=Dr(e),o=Er(e),c=a==="fixed",u=xi(n,!0,c,e);let f={scrollLeft:0,scrollTop:0};const m=Cr(0);function p(){m.x=Ju(o)}if(i||!i&&!c)if((Vs(e)!=="body"||xl(o))&&(f=Iu(e)),i){const A=xi(e,!0,c,e);m.x=A.x+e.clientLeft,m.y=A.y+e.clientTop}else o&&p();c&&!i&&o&&p();const y=o&&!i&&!c?v4(o,f):Cr(0),v=u.left+f.scrollLeft-m.x-y.x,S=u.top+f.scrollTop-m.y-y.y;return{x:v,y:S,width:u.width,height:u.height}}function Nh(n){return fr(n).position==="static"}function j0(n,e){if(!Dr(n)||fr(n).position==="fixed")return null;if(e)return e(n);let a=n.offsetParent;return Er(n)===a&&(a=a.ownerDocument.body),a}function x4(n,e){const a=jt(n);if(Hu(n))return a;if(!Dr(n)){let o=Oa(n);for(;o&&!Ns(o);){if(dr(o)&&!Nh(o))return o;o=Oa(o)}return a}let i=j0(n,e);for(;i&&K6(i)&&Nh(i);)i=j0(i,e);return i&&Ns(i)&&Nh(i)&&!ap(i)?a:i||Q6(n)||a}const fw=async function(n){const e=this.getOffsetParent||x4,a=this.getDimensions,i=await a(n.floating);return{reference:dw(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function hw(n){return fr(n).direction==="rtl"}const mw={convertOffsetParentRelativeRectToViewportRelativeRect:tw,getDocumentElement:Er,getClippingRect:cw,getOffsetParent:x4,getElementRects:fw,getClientRects:rw,getDimensions:uw,getScale:Ts,isElement:dr,isRTL:hw};function S4(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function pw(n,e){let a=null,i;const o=Er(n);function c(){var f;clearTimeout(i),(f=a)==null||f.disconnect(),a=null}function u(f,m){f===void 0&&(f=!1),m===void 0&&(m=1),c();const p=n.getBoundingClientRect(),{left:y,top:v,width:S,height:A}=p;if(f||e(),!S||!A)return;const E=qc(v),M=qc(o.clientWidth-(y+S)),D=qc(o.clientHeight-(v+A)),w=qc(y),P={rootMargin:-E+"px "+-M+"px "+-D+"px "+-w+"px",threshold:Ot(0,_a(1,m))||1};let j=!0;function O(q){const B=q[0].intersectionRatio;if(B!==m){if(!j)return u();B?u(!1,B):i=setTimeout(()=>{u(!1,1e-7)},1e3)}B===1&&!S4(p,n.getBoundingClientRect())&&u(),j=!1}try{a=new IntersectionObserver(O,{...P,root:o.ownerDocument})}catch{a=new IntersectionObserver(O,P)}a.observe(n)}return u(!0),c}function gw(n,e,a,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:c=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:m=!1}=i,p=sp(n),y=o||c?[...p?sl(p):[],...sl(e)]:[];y.forEach(w=>{o&&w.addEventListener("scroll",a,{passive:!0}),c&&w.addEventListener("resize",a)});const v=p&&f?pw(p,a):null;let S=-1,A=null;u&&(A=new ResizeObserver(w=>{let[N]=w;N&&N.target===p&&A&&(A.unobserve(e),cancelAnimationFrame(S),S=requestAnimationFrame(()=>{var P;(P=A)==null||P.observe(e)})),a()}),p&&!m&&A.observe(p),A.observe(e));let E,M=m?xi(n):null;m&&D();function D(){const w=xi(n);M&&!S4(M,w)&&a(),M=w,E=requestAnimationFrame(D)}return a(),()=>{var w;y.forEach(N=>{o&&N.removeEventListener("scroll",a),c&&N.removeEventListener("resize",a)}),v?.(),(w=A)==null||w.disconnect(),A=null,m&&cancelAnimationFrame(E)}}const yw=F6,vw=H6,bw=j6,xw=J6,Sw=V6,V0=z6,Mw=I6,Cw=(n,e,a)=>{const i=new Map,o={platform:mw,...a},c={...o.platform,_c:i};return O6(n,e,{...o,platform:c})};var Aw=typeof document<"u",ww=function(){},au=Aw?x.useLayoutEffect:ww;function pu(n,e){if(n===e)return!0;if(typeof n!=typeof e)return!1;if(typeof n=="function"&&n.toString()===e.toString())return!0;let a,i,o;if(n&&e&&typeof n=="object"){if(Array.isArray(n)){if(a=n.length,a!==e.length)return!1;for(i=a;i--!==0;)if(!pu(n[i],e[i]))return!1;return!0}if(o=Object.keys(n),a=o.length,a!==Object.keys(e).length)return!1;for(i=a;i--!==0;)if(!{}.hasOwnProperty.call(e,o[i]))return!1;for(i=a;i--!==0;){const c=o[i];if(!(c==="_owner"&&n.$$typeof)&&!pu(n[c],e[c]))return!1}return!0}return n!==n&&e!==e}function M4(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function G0(n,e){const a=M4(n);return Math.round(e*a)/a}function Rh(n){const e=x.useRef(n);return au(()=>{e.current=n}),e}function Tw(n){n===void 0&&(n={});const{placement:e="bottom",strategy:a="absolute",middleware:i=[],platform:o,elements:{reference:c,floating:u}={},transform:f=!0,whileElementsMounted:m,open:p}=n,[y,v]=x.useState({x:0,y:0,strategy:a,placement:e,middlewareData:{},isPositioned:!1}),[S,A]=x.useState(i);pu(S,i)||A(i);const[E,M]=x.useState(null),[D,w]=x.useState(null),N=x.useCallback(V=>{V!==q.current&&(q.current=V,M(V))},[]),P=x.useCallback(V=>{V!==B.current&&(B.current=V,w(V))},[]),j=c||E,O=u||D,q=x.useRef(null),B=x.useRef(null),G=x.useRef(y),Q=m!=null,ae=Rh(m),de=Rh(o),se=Rh(p),re=x.useCallback(()=>{if(!q.current||!B.current)return;const V={placement:e,strategy:a,middleware:S};de.current&&(V.platform=de.current),Cw(q.current,B.current,V).then(fe=>{const be={...fe,isPositioned:se.current!==!1};le.current&&!pu(G.current,be)&&(G.current=be,vl.flushSync(()=>{v(be)}))})},[S,e,a,de,se]);au(()=>{p===!1&&G.current.isPositioned&&(G.current.isPositioned=!1,v(V=>({...V,isPositioned:!1})))},[p]);const le=x.useRef(!1);au(()=>(le.current=!0,()=>{le.current=!1}),[]),au(()=>{if(j&&(q.current=j),O&&(B.current=O),j&&O){if(ae.current)return ae.current(j,O,re);re()}},[j,O,re,ae,Q]);const ge=x.useMemo(()=>({reference:q,floating:B,setReference:N,setFloating:P}),[N,P]),_=x.useMemo(()=>({reference:j,floating:O}),[j,O]),U=x.useMemo(()=>{const V={position:a,left:0,top:0};if(!_.floating)return V;const fe=G0(_.floating,y.x),be=G0(_.floating,y.y);return f?{...V,transform:"translate("+fe+"px, "+be+"px)",...M4(_.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:fe,top:be}},[a,f,_.floating,y.x,y.y]);return x.useMemo(()=>({...y,update:re,refs:ge,elements:_,floatingStyles:U}),[y,re,ge,_,U])}const Dw=n=>{function e(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:n,fn(a){const{element:i,padding:o}=typeof n=="function"?n(a):n;return i&&e(i)?i.current!=null?V0({element:i.current,padding:o}).fn(a):{}:i?V0({element:i,padding:o}).fn(a):{}}}},Ew=(n,e)=>({...yw(n),options:[n,e]}),Nw=(n,e)=>({...vw(n),options:[n,e]}),Rw=(n,e)=>({...Mw(n),options:[n,e]}),kw=(n,e)=>({...bw(n),options:[n,e]}),Pw=(n,e)=>({...xw(n),options:[n,e]}),Bw=(n,e)=>({...Sw(n),options:[n,e]}),Lw=(n,e)=>({...Dw(n),options:[n,e]});var _w="Arrow",C4=x.forwardRef((n,e)=>{const{children:a,width:i=10,height:o=5,...c}=n;return g.jsx(un.svg,{...c,ref:e,width:i,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?a:g.jsx("polygon",{points:"0,0 30,0 15,10"})})});C4.displayName=_w;var Ow=C4;function A4(n){const[e,a]=x.useState(void 0);return gt(()=>{if(n){a({width:n.offsetWidth,height:n.offsetHeight});const i=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const c=o[0];let u,f;if("borderBoxSize"in c){const m=c.borderBoxSize,p=Array.isArray(m)?m[0]:m;u=p.inlineSize,f=p.blockSize}else u=n.offsetWidth,f=n.offsetHeight;a({width:u,height:f})});return i.observe(n,{box:"border-box"}),()=>i.unobserve(n)}else a(void 0)},[n]),e}var op="Popper",[w4,T4]=bl(op),[zw,D4]=w4(op),E4=n=>{const{__scopePopper:e,children:a}=n,[i,o]=x.useState(null);return g.jsx(zw,{scope:e,anchor:i,onAnchorChange:o,children:a})};E4.displayName=op;var N4="PopperAnchor",R4=x.forwardRef((n,e)=>{const{__scopePopper:a,virtualRef:i,...o}=n,c=D4(N4,a),u=x.useRef(null),f=Dn(e,u),m=x.useRef(null);return x.useEffect(()=>{const p=m.current;m.current=i?.current||u.current,p!==m.current&&c.onAnchorChange(m.current)}),i?null:g.jsx(un.div,{...o,ref:f})});R4.displayName=N4;var lp="PopperContent",[jw,Vw]=w4(lp),k4=x.forwardRef((n,e)=>{const{__scopePopper:a,side:i="bottom",sideOffset:o=0,align:c="center",alignOffset:u=0,arrowPadding:f=0,avoidCollisions:m=!0,collisionBoundary:p=[],collisionPadding:y=0,sticky:v="partial",hideWhenDetached:S=!1,updatePositionStrategy:A="optimized",onPlaced:E,...M}=n,D=D4(lp,a),[w,N]=x.useState(null),P=Dn(e,te=>N(te)),[j,O]=x.useState(null),q=A4(j),B=q?.width??0,G=q?.height??0,Q=i+(c!=="center"?"-"+c:""),ae=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},de=Array.isArray(p)?p:[p],se=de.length>0,re={padding:ae,boundary:de.filter(Fw),altBoundary:se},{refs:le,floatingStyles:ge,placement:_,isPositioned:U,middlewareData:V}=Tw({strategy:"fixed",placement:Q,whileElementsMounted:(...te)=>gw(...te,{animationFrame:A==="always"}),elements:{reference:D.anchor},middleware:[Ew({mainAxis:o+G,alignmentAxis:u}),m&&Nw({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?Rw():void 0,...re}),m&&kw({...re}),Pw({...re,apply:({elements:te,rects:Pe,availableWidth:pe,availableHeight:ee})=>{const{width:xe,height:Be}=Pe.reference,Ue=te.floating.style;Ue.setProperty("--radix-popper-available-width",`${pe}px`),Ue.setProperty("--radix-popper-available-height",`${ee}px`),Ue.setProperty("--radix-popper-anchor-width",`${xe}px`),Ue.setProperty("--radix-popper-anchor-height",`${Be}px`)}}),j&&Lw({element:j,padding:f}),Hw({arrowWidth:B,arrowHeight:G}),S&&Bw({strategy:"referenceHidden",...re})]}),[fe,be]=L4(_),T=bi(E);gt(()=>{U&&T?.()},[U,T]);const Z=V.arrow?.x,ne=V.arrow?.y,oe=V.arrow?.centerOffset!==0,[ce,Ce]=x.useState();return gt(()=>{w&&Ce(window.getComputedStyle(w).zIndex)},[w]),g.jsx("div",{ref:le.setFloating,"data-radix-popper-content-wrapper":"",style:{...ge,transform:U?ge.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[V.transformOrigin?.x,V.transformOrigin?.y].join(" "),...V.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:g.jsx(jw,{scope:a,placedSide:fe,onArrowChange:O,arrowX:Z,arrowY:ne,shouldHideArrow:oe,children:g.jsx(un.div,{"data-side":fe,"data-align":be,...M,ref:P,style:{...M.style,animation:U?void 0:"none"}})})})});k4.displayName=lp;var P4="PopperArrow",Gw={top:"bottom",right:"left",bottom:"top",left:"right"},B4=x.forwardRef(function(e,a){const{__scopePopper:i,...o}=e,c=Vw(P4,i),u=Gw[c.placedSide];return g.jsx("span",{ref:c.onArrowChange,style:{position:"absolute",left:c.arrowX,top:c.arrowY,[u]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[c.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[c.placedSide],visibility:c.shouldHideArrow?"hidden":void 0},children:g.jsx(Ow,{...o,ref:a,style:{...o.style,display:"block"}})})});B4.displayName=P4;function Fw(n){return n!==null}var Hw=n=>({name:"transformOrigin",options:n,fn(e){const{placement:a,rects:i,middlewareData:o}=e,u=o.arrow?.centerOffset!==0,f=u?0:n.arrowWidth,m=u?0:n.arrowHeight,[p,y]=L4(a),v={start:"0%",center:"50%",end:"100%"}[y],S=(o.arrow?.x??0)+f/2,A=(o.arrow?.y??0)+m/2;let E="",M="";return p==="bottom"?(E=u?v:`${S}px`,M=`${-m}px`):p==="top"?(E=u?v:`${S}px`,M=`${i.floating.height+m}px`):p==="right"?(E=`${-m}px`,M=u?v:`${A}px`):p==="left"&&(E=`${i.floating.width+m}px`,M=u?v:`${A}px`),{data:{x:E,y:M}}}});function L4(n){const[e,a="center"]=n.split("-");return[e,a]}var Iw=E4,Jw=R4,Uw=k4,qw=B4,Kw="Portal",cp=x.forwardRef((n,e)=>{const{container:a,...i}=n,[o,c]=x.useState(!1);gt(()=>c(!0),[]);const u=a||o&&globalThis?.document?.body;return u?IA.createPortal(g.jsx(un.div,{...i,ref:e}),u):null});cp.displayName=Kw;function Yw(n){const e=Zw(n),a=x.forwardRef((i,o)=>{const{children:c,...u}=i,f=x.Children.toArray(c),m=f.find(Xw);if(m){const p=m.props.children,y=f.map(v=>v===m?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:v);return g.jsx(e,{...u,ref:o,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return g.jsx(e,{...u,ref:o,children:c})});return a.displayName=`${n}.Slot`,a}function Zw(n){const e=x.forwardRef((a,i)=>{const{children:o,...c}=a;if(x.isValidElement(o)){const u=$w(o),f=Qw(c,o.props);return o.type!==x.Fragment&&(f.ref=i?zs(i,u):u),x.cloneElement(o,f)}return x.Children.count(o)>1?x.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var Ww=Symbol("radix.slottable");function Xw(n){return x.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Ww}function Qw(n,e){const a={...e};for(const i in e){const o=n[i],c=e[i];/^on[A-Z]/.test(i)?o&&c?a[i]=(...f)=>{const m=c(...f);return o(...f),m}:o&&(a[i]=o):i==="style"?a[i]={...o,...c}:i==="className"&&(a[i]=[o,c].filter(Boolean).join(" "))}return{...n,...a}}function $w(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?n.props.ref:n.props.ref||n.ref)}var eT=Qm[" useInsertionEffect ".trim().toString()]||gt;function gu({prop:n,defaultProp:e,onChange:a=()=>{},caller:i}){const[o,c,u]=nT({defaultProp:e,onChange:a}),f=n!==void 0,m=f?n:o;{const y=x.useRef(n!==void 0);x.useEffect(()=>{const v=y.current;v!==f&&console.warn(`${i} is changing from ${v?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=f},[f,i])}const p=x.useCallback(y=>{if(f){const v=tT(y)?y(n):y;v!==n&&u.current?.(v)}else c(y)},[f,n,c,u]);return[m,p]}function nT({defaultProp:n,onChange:e}){const[a,i]=x.useState(n),o=x.useRef(a),c=x.useRef(e);return eT(()=>{c.current=e},[e]),x.useEffect(()=>{o.current!==a&&(c.current?.(a),o.current=a)},[a,o]),[a,i,c]}function tT(n){return typeof n=="function"}function _4(n){const e=x.useRef({value:n,previous:n});return x.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}var O4=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),rT="VisuallyHidden",aT=x.forwardRef((n,e)=>g.jsx(un.span,{...n,ref:e,style:{...O4,...n.style}}));aT.displayName=rT;var iT=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},cs=new WeakMap,Kc=new WeakMap,Yc={},kh=0,z4=function(n){return n&&(n.host||z4(n.parentNode))},sT=function(n,e){return e.map(function(a){if(n.contains(a))return a;var i=z4(a);return i&&n.contains(i)?i:(console.error("aria-hidden",a,"in not contained inside",n,". Doing nothing"),null)}).filter(function(a){return!!a})},oT=function(n,e,a,i){var o=sT(e,Array.isArray(n)?n:[n]);Yc[a]||(Yc[a]=new WeakMap);var c=Yc[a],u=[],f=new Set,m=new Set(o),p=function(v){!v||f.has(v)||(f.add(v),p(v.parentNode))};o.forEach(p);var y=function(v){!v||m.has(v)||Array.prototype.forEach.call(v.children,function(S){if(f.has(S))y(S);else try{var A=S.getAttribute(i),E=A!==null&&A!=="false",M=(cs.get(S)||0)+1,D=(c.get(S)||0)+1;cs.set(S,M),c.set(S,D),u.push(S),M===1&&E&&Kc.set(S,!0),D===1&&S.setAttribute(a,"true"),E||S.setAttribute(i,"true")}catch(w){console.error("aria-hidden: cannot operate on ",S,w)}})};return y(e),f.clear(),kh++,function(){u.forEach(function(v){var S=cs.get(v)-1,A=c.get(v)-1;cs.set(v,S),c.set(v,A),S||(Kc.has(v)||v.removeAttribute(i),Kc.delete(v)),A||v.removeAttribute(a)}),kh--,kh||(cs=new WeakMap,cs=new WeakMap,Kc=new WeakMap,Yc={})}},j4=function(n,e,a){a===void 0&&(a="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),o=iT(n);return o?(i.push.apply(i,Array.from(o.querySelectorAll("[aria-live], script"))),oT(i,o,a,"aria-hidden")):function(){return null}},br=function(){return br=Object.assign||function(e){for(var a,i=1,o=arguments.length;i<o;i++){a=arguments[i];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},br.apply(this,arguments)};function V4(n,e){var a={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(a[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(a[i[o]]=n[i[o]]);return a}function lT(n,e,a){if(a||arguments.length===2)for(var i=0,o=e.length,c;i<o;i++)(c||!(i in e))&&(c||(c=Array.prototype.slice.call(e,0,i)),c[i]=e[i]);return n.concat(c||Array.prototype.slice.call(e))}var iu="right-scroll-bar-position",su="width-before-scroll-bar",cT="with-scroll-bars-hidden",uT="--removed-body-scroll-bar-size";function Ph(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function dT(n,e){var a=x.useState(function(){return{value:n,callback:e,facade:{get current(){return a.value},set current(i){var o=a.value;o!==i&&(a.value=i,a.callback(i,o))}}}})[0];return a.callback=e,a.facade}var fT=typeof window<"u"?x.useLayoutEffect:x.useEffect,F0=new WeakMap;function hT(n,e){var a=dT(null,function(i){return n.forEach(function(o){return Ph(o,i)})});return fT(function(){var i=F0.get(a);if(i){var o=new Set(i),c=new Set(n),u=a.current;o.forEach(function(f){c.has(f)||Ph(f,null)}),c.forEach(function(f){o.has(f)||Ph(f,u)})}F0.set(a,n)},[n]),a}function mT(n){return n}function pT(n,e){e===void 0&&(e=mT);var a=[],i=!1,o={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:n},useMedium:function(c){var u=e(c,i);return a.push(u),function(){a=a.filter(function(f){return f!==u})}},assignSyncMedium:function(c){for(i=!0;a.length;){var u=a;a=[],u.forEach(c)}a={push:function(f){return c(f)},filter:function(){return a}}},assignMedium:function(c){i=!0;var u=[];if(a.length){var f=a;a=[],f.forEach(c),u=a}var m=function(){var y=u;u=[],y.forEach(c)},p=function(){return Promise.resolve().then(m)};p(),a={push:function(y){u.push(y),p()},filter:function(y){return u=u.filter(y),a}}}};return o}function gT(n){n===void 0&&(n={});var e=pT(null);return e.options=br({async:!0,ssr:!1},n),e}var G4=function(n){var e=n.sideCar,a=V4(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return x.createElement(i,br({},a))};G4.isSideCarExport=!0;function yT(n,e){return n.useMedium(e),G4}var F4=gT(),Bh=function(){},Uu=x.forwardRef(function(n,e){var a=x.useRef(null),i=x.useState({onScrollCapture:Bh,onWheelCapture:Bh,onTouchMoveCapture:Bh}),o=i[0],c=i[1],u=n.forwardProps,f=n.children,m=n.className,p=n.removeScrollBar,y=n.enabled,v=n.shards,S=n.sideCar,A=n.noRelative,E=n.noIsolation,M=n.inert,D=n.allowPinchZoom,w=n.as,N=w===void 0?"div":w,P=n.gapMode,j=V4(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),O=S,q=hT([a,e]),B=br(br({},j),o);return x.createElement(x.Fragment,null,y&&x.createElement(O,{sideCar:F4,removeScrollBar:p,shards:v,noRelative:A,noIsolation:E,inert:M,setCallbacks:c,allowPinchZoom:!!D,lockRef:a,gapMode:P}),u?x.cloneElement(x.Children.only(f),br(br({},B),{ref:q})):x.createElement(N,br({},B,{className:m,ref:q}),f))});Uu.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Uu.classNames={fullWidth:su,zeroRight:iu};var vT=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function bT(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=vT();return e&&n.setAttribute("nonce",e),n}function xT(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function ST(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var MT=function(){var n=0,e=null;return{add:function(a){n==0&&(e=bT())&&(xT(e,a),ST(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},CT=function(){var n=MT();return function(e,a){x.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&a])}},H4=function(){var n=CT(),e=function(a){var i=a.styles,o=a.dynamic;return n(i,o),null};return e},AT={left:0,top:0,right:0,gap:0},Lh=function(n){return parseInt(n||"",10)||0},wT=function(n){var e=window.getComputedStyle(document.body),a=e[n==="padding"?"paddingLeft":"marginLeft"],i=e[n==="padding"?"paddingTop":"marginTop"],o=e[n==="padding"?"paddingRight":"marginRight"];return[Lh(a),Lh(i),Lh(o)]},TT=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return AT;var e=wT(n),a=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-a+e[2]-e[0])}},DT=H4(),Ds="data-scroll-locked",ET=function(n,e,a,i){var o=n.left,c=n.top,u=n.right,f=n.gap;return a===void 0&&(a="margin"),`
  .`.concat(cT,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(f,"px ").concat(i,`;
  }
  body[`).concat(Ds,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),a==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(f,"px ").concat(i,`;
    `),a==="padding"&&"padding-right: ".concat(f,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(iu,` {
    right: `).concat(f,"px ").concat(i,`;
  }
  
  .`).concat(su,` {
    margin-right: `).concat(f,"px ").concat(i,`;
  }
  
  .`).concat(iu," .").concat(iu,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(su," .").concat(su,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(Ds,`] {
    `).concat(uT,": ").concat(f,`px;
  }
`)},H0=function(){var n=parseInt(document.body.getAttribute(Ds)||"0",10);return isFinite(n)?n:0},NT=function(){x.useEffect(function(){return document.body.setAttribute(Ds,(H0()+1).toString()),function(){var n=H0()-1;n<=0?document.body.removeAttribute(Ds):document.body.setAttribute(Ds,n.toString())}},[])},RT=function(n){var e=n.noRelative,a=n.noImportant,i=n.gapMode,o=i===void 0?"margin":i;NT();var c=x.useMemo(function(){return TT(o)},[o]);return x.createElement(DT,{styles:ET(c,!e,o,a?"":"!important")})},dm=!1;if(typeof window<"u")try{var Zc=Object.defineProperty({},"passive",{get:function(){return dm=!0,!0}});window.addEventListener("test",Zc,Zc),window.removeEventListener("test",Zc,Zc)}catch{dm=!1}var us=dm?{passive:!1}:!1,kT=function(n){return n.tagName==="TEXTAREA"},I4=function(n,e){if(!(n instanceof Element))return!1;var a=window.getComputedStyle(n);return a[e]!=="hidden"&&!(a.overflowY===a.overflowX&&!kT(n)&&a[e]==="visible")},PT=function(n){return I4(n,"overflowY")},BT=function(n){return I4(n,"overflowX")},I0=function(n,e){var a=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var o=J4(n,i);if(o){var c=U4(n,i),u=c[1],f=c[2];if(u>f)return!0}i=i.parentNode}while(i&&i!==a.body);return!1},LT=function(n){var e=n.scrollTop,a=n.scrollHeight,i=n.clientHeight;return[e,a,i]},_T=function(n){var e=n.scrollLeft,a=n.scrollWidth,i=n.clientWidth;return[e,a,i]},J4=function(n,e){return n==="v"?PT(e):BT(e)},U4=function(n,e){return n==="v"?LT(e):_T(e)},OT=function(n,e){return n==="h"&&e==="rtl"?-1:1},zT=function(n,e,a,i,o){var c=OT(n,window.getComputedStyle(e).direction),u=c*i,f=a.target,m=e.contains(f),p=!1,y=u>0,v=0,S=0;do{if(!f)break;var A=U4(n,f),E=A[0],M=A[1],D=A[2],w=M-D-c*E;(E||w)&&J4(n,f)&&(v+=w,S+=E);var N=f.parentNode;f=N&&N.nodeType===Node.DOCUMENT_FRAGMENT_NODE?N.host:N}while(!m&&f!==document.body||m&&(e.contains(f)||e===f));return(y&&Math.abs(v)<1||!y&&Math.abs(S)<1)&&(p=!0),p},Wc=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},J0=function(n){return[n.deltaX,n.deltaY]},U0=function(n){return n&&"current"in n?n.current:n},jT=function(n,e){return n[0]===e[0]&&n[1]===e[1]},VT=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},GT=0,ds=[];function FT(n){var e=x.useRef([]),a=x.useRef([0,0]),i=x.useRef(),o=x.useState(GT++)[0],c=x.useState(H4)[0],u=x.useRef(n);x.useEffect(function(){u.current=n},[n]),x.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(o));var M=lT([n.lockRef.current],(n.shards||[]).map(U0),!0).filter(Boolean);return M.forEach(function(D){return D.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),M.forEach(function(D){return D.classList.remove("allow-interactivity-".concat(o))})}}},[n.inert,n.lockRef.current,n.shards]);var f=x.useCallback(function(M,D){if("touches"in M&&M.touches.length===2||M.type==="wheel"&&M.ctrlKey)return!u.current.allowPinchZoom;var w=Wc(M),N=a.current,P="deltaX"in M?M.deltaX:N[0]-w[0],j="deltaY"in M?M.deltaY:N[1]-w[1],O,q=M.target,B=Math.abs(P)>Math.abs(j)?"h":"v";if("touches"in M&&B==="h"&&q.type==="range")return!1;var G=window.getSelection(),Q=G&&G.anchorNode,ae=Q?Q===q||Q.contains(q):!1;if(ae)return!1;var de=I0(B,q);if(!de)return!0;if(de?O=B:(O=B==="v"?"h":"v",de=I0(B,q)),!de)return!1;if(!i.current&&"changedTouches"in M&&(P||j)&&(i.current=O),!O)return!0;var se=i.current||O;return zT(se,D,M,se==="h"?P:j)},[]),m=x.useCallback(function(M){var D=M;if(!(!ds.length||ds[ds.length-1]!==c)){var w="deltaY"in D?J0(D):Wc(D),N=e.current.filter(function(O){return O.name===D.type&&(O.target===D.target||D.target===O.shadowParent)&&jT(O.delta,w)})[0];if(N&&N.should){D.cancelable&&D.preventDefault();return}if(!N){var P=(u.current.shards||[]).map(U0).filter(Boolean).filter(function(O){return O.contains(D.target)}),j=P.length>0?f(D,P[0]):!u.current.noIsolation;j&&D.cancelable&&D.preventDefault()}}},[]),p=x.useCallback(function(M,D,w,N){var P={name:M,delta:D,target:w,should:N,shadowParent:HT(w)};e.current.push(P),setTimeout(function(){e.current=e.current.filter(function(j){return j!==P})},1)},[]),y=x.useCallback(function(M){a.current=Wc(M),i.current=void 0},[]),v=x.useCallback(function(M){p(M.type,J0(M),M.target,f(M,n.lockRef.current))},[]),S=x.useCallback(function(M){p(M.type,Wc(M),M.target,f(M,n.lockRef.current))},[]);x.useEffect(function(){return ds.push(c),n.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:S}),document.addEventListener("wheel",m,us),document.addEventListener("touchmove",m,us),document.addEventListener("touchstart",y,us),function(){ds=ds.filter(function(M){return M!==c}),document.removeEventListener("wheel",m,us),document.removeEventListener("touchmove",m,us),document.removeEventListener("touchstart",y,us)}},[]);var A=n.removeScrollBar,E=n.inert;return x.createElement(x.Fragment,null,E?x.createElement(c,{styles:VT(o)}):null,A?x.createElement(RT,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function HT(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const IT=yT(F4,FT);var up=x.forwardRef(function(n,e){return x.createElement(Uu,br({},n,{ref:e,sideCar:IT}))});up.classNames=Uu.classNames;var JT=[" ","Enter","ArrowUp","ArrowDown"],UT=[" ","Enter"],Si="Select",[qu,Ku,qT]=XA(Si),[Gs]=bl(Si,[qT,T4]),Yu=T4(),[KT,Ha]=Gs(Si),[YT,ZT]=Gs(Si),q4=n=>{const{__scopeSelect:e,children:a,open:i,defaultOpen:o,onOpenChange:c,value:u,defaultValue:f,onValueChange:m,dir:p,name:y,autoComplete:v,disabled:S,required:A,form:E}=n,M=Yu(e),[D,w]=x.useState(null),[N,P]=x.useState(null),[j,O]=x.useState(!1),q=$A(p),[B,G]=gu({prop:i,defaultProp:o??!1,onChange:c,caller:Si}),[Q,ae]=gu({prop:u,defaultProp:f,onChange:m,caller:Si}),de=x.useRef(null),se=D?E||!!D.closest("form"):!0,[re,le]=x.useState(new Set),ge=Array.from(re).map(_=>_.props.value).join(";");return g.jsx(Iw,{...M,children:g.jsxs(KT,{required:A,scope:e,trigger:D,onTriggerChange:w,valueNode:N,onValueNodeChange:P,valueNodeHasChildren:j,onValueNodeHasChildrenChange:O,contentId:ws(),value:Q,onValueChange:ae,open:B,onOpenChange:G,dir:q,triggerPointerDownPosRef:de,disabled:S,children:[g.jsx(qu.Provider,{scope:e,children:g.jsx(YT,{scope:n.__scopeSelect,onNativeOptionAdd:x.useCallback(_=>{le(U=>new Set(U).add(_))},[]),onNativeOptionRemove:x.useCallback(_=>{le(U=>{const V=new Set(U);return V.delete(_),V})},[]),children:a})}),se?g.jsxs(mx,{"aria-hidden":!0,required:A,tabIndex:-1,name:y,autoComplete:v,value:Q,onChange:_=>ae(_.target.value),disabled:S,form:E,children:[Q===void 0?g.jsx("option",{value:""}):null,Array.from(re)]},ge):null]})})};q4.displayName=Si;var K4="SelectTrigger",Y4=x.forwardRef((n,e)=>{const{__scopeSelect:a,disabled:i=!1,...o}=n,c=Yu(a),u=Ha(K4,a),f=u.disabled||i,m=Dn(e,u.onTriggerChange),p=Ku(a),y=x.useRef("touch"),[v,S,A]=gx(M=>{const D=p().filter(P=>!P.disabled),w=D.find(P=>P.value===u.value),N=yx(D,M,w);N!==void 0&&u.onValueChange(N.value)}),E=M=>{f||(u.onOpenChange(!0),A()),M&&(u.triggerPointerDownPosRef.current={x:Math.round(M.pageX),y:Math.round(M.pageY)})};return g.jsx(Jw,{asChild:!0,...c,children:g.jsx(un.button,{type:"button",role:"combobox","aria-controls":u.contentId,"aria-expanded":u.open,"aria-required":u.required,"aria-autocomplete":"none",dir:u.dir,"data-state":u.open?"open":"closed",disabled:f,"data-disabled":f?"":void 0,"data-placeholder":px(u.value)?"":void 0,...o,ref:m,onClick:gn(o.onClick,M=>{M.currentTarget.focus(),y.current!=="mouse"&&E(M)}),onPointerDown:gn(o.onPointerDown,M=>{y.current=M.pointerType;const D=M.target;D.hasPointerCapture(M.pointerId)&&D.releasePointerCapture(M.pointerId),M.button===0&&M.ctrlKey===!1&&M.pointerType==="mouse"&&(E(M),M.preventDefault())}),onKeyDown:gn(o.onKeyDown,M=>{const D=v.current!=="";!(M.ctrlKey||M.altKey||M.metaKey)&&M.key.length===1&&S(M.key),!(D&&M.key===" ")&&JT.includes(M.key)&&(E(),M.preventDefault())})})})});Y4.displayName=K4;var Z4="SelectValue",W4=x.forwardRef((n,e)=>{const{__scopeSelect:a,className:i,style:o,children:c,placeholder:u="",...f}=n,m=Ha(Z4,a),{onValueNodeHasChildrenChange:p}=m,y=c!==void 0,v=Dn(e,m.onValueNodeChange);return gt(()=>{p(y)},[p,y]),g.jsx(un.span,{...f,ref:v,style:{pointerEvents:"none"},children:px(m.value)?g.jsx(g.Fragment,{children:u}):c})});W4.displayName=Z4;var WT="SelectIcon",X4=x.forwardRef((n,e)=>{const{__scopeSelect:a,children:i,...o}=n;return g.jsx(un.span,{"aria-hidden":!0,...o,ref:e,children:i||"▼"})});X4.displayName=WT;var XT="SelectPortal",Q4=n=>g.jsx(cp,{asChild:!0,...n});Q4.displayName=XT;var Mi="SelectContent",$4=x.forwardRef((n,e)=>{const a=Ha(Mi,n.__scopeSelect),[i,o]=x.useState();if(gt(()=>{o(new DocumentFragment)},[]),!a.open){const c=i;return c?vl.createPortal(g.jsx(ex,{scope:n.__scopeSelect,children:g.jsx(qu.Slot,{scope:n.__scopeSelect,children:g.jsx("div",{children:n.children})})}),c):null}return g.jsx(nx,{...n,ref:e})});$4.displayName=Mi;var or=10,[ex,Ia]=Gs(Mi),QT="SelectContentImpl",$T=Yw("SelectContent.RemoveScroll"),nx=x.forwardRef((n,e)=>{const{__scopeSelect:a,position:i="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:c,onPointerDownOutside:u,side:f,sideOffset:m,align:p,alignOffset:y,arrowPadding:v,collisionBoundary:S,collisionPadding:A,sticky:E,hideWhenDetached:M,avoidCollisions:D,...w}=n,N=Ha(Mi,a),[P,j]=x.useState(null),[O,q]=x.useState(null),B=Dn(e,te=>j(te)),[G,Q]=x.useState(null),[ae,de]=x.useState(null),se=Ku(a),[re,le]=x.useState(!1),ge=x.useRef(!1);x.useEffect(()=>{if(P)return j4(P)},[P]),u4();const _=x.useCallback(te=>{const[Pe,...pe]=se().map(Be=>Be.ref.current),[ee]=pe.slice(-1),xe=document.activeElement;for(const Be of te)if(Be===xe||(Be?.scrollIntoView({block:"nearest"}),Be===Pe&&O&&(O.scrollTop=0),Be===ee&&O&&(O.scrollTop=O.scrollHeight),Be?.focus(),document.activeElement!==xe))return},[se,O]),U=x.useCallback(()=>_([G,P]),[_,G,P]);x.useEffect(()=>{re&&U()},[re,U]);const{onOpenChange:V,triggerPointerDownPosRef:fe}=N;x.useEffect(()=>{if(P){let te={x:0,y:0};const Pe=ee=>{te={x:Math.abs(Math.round(ee.pageX)-(fe.current?.x??0)),y:Math.abs(Math.round(ee.pageY)-(fe.current?.y??0))}},pe=ee=>{te.x<=10&&te.y<=10?ee.preventDefault():P.contains(ee.target)||V(!1),document.removeEventListener("pointermove",Pe),fe.current=null};return fe.current!==null&&(document.addEventListener("pointermove",Pe),document.addEventListener("pointerup",pe,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",Pe),document.removeEventListener("pointerup",pe,{capture:!0})}}},[P,V,fe]),x.useEffect(()=>{const te=()=>V(!1);return window.addEventListener("blur",te),window.addEventListener("resize",te),()=>{window.removeEventListener("blur",te),window.removeEventListener("resize",te)}},[V]);const[be,T]=gx(te=>{const Pe=se().filter(xe=>!xe.disabled),pe=Pe.find(xe=>xe.ref.current===document.activeElement),ee=yx(Pe,te,pe);ee&&setTimeout(()=>ee.ref.current.focus())}),Z=x.useCallback((te,Pe,pe)=>{const ee=!ge.current&&!pe;(N.value!==void 0&&N.value===Pe||ee)&&(Q(te),ee&&(ge.current=!0))},[N.value]),ne=x.useCallback(()=>P?.focus(),[P]),oe=x.useCallback((te,Pe,pe)=>{const ee=!ge.current&&!pe;(N.value!==void 0&&N.value===Pe||ee)&&de(te)},[N.value]),ce=i==="popper"?fm:tx,Ce=ce===fm?{side:f,sideOffset:m,align:p,alignOffset:y,arrowPadding:v,collisionBoundary:S,collisionPadding:A,sticky:E,hideWhenDetached:M,avoidCollisions:D}:{};return g.jsx(ex,{scope:a,content:P,viewport:O,onViewportChange:q,itemRefCallback:Z,selectedItem:G,onItemLeave:ne,itemTextRefCallback:oe,focusSelectedItem:U,selectedItemText:ae,position:i,isPositioned:re,searchRef:be,children:g.jsx(up,{as:$T,allowPinchZoom:!0,children:g.jsx(ep,{asChild:!0,trapped:N.open,onMountAutoFocus:te=>{te.preventDefault()},onUnmountAutoFocus:gn(o,te=>{N.trigger?.focus({preventScroll:!0}),te.preventDefault()}),children:g.jsx($m,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:te=>te.preventDefault(),onDismiss:()=>N.onOpenChange(!1),children:g.jsx(ce,{role:"listbox",id:N.contentId,"data-state":N.open?"open":"closed",dir:N.dir,onContextMenu:te=>te.preventDefault(),...w,...Ce,onPlaced:()=>le(!0),ref:B,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:gn(w.onKeyDown,te=>{const Pe=te.ctrlKey||te.altKey||te.metaKey;if(te.key==="Tab"&&te.preventDefault(),!Pe&&te.key.length===1&&T(te.key),["ArrowUp","ArrowDown","Home","End"].includes(te.key)){let ee=se().filter(xe=>!xe.disabled).map(xe=>xe.ref.current);if(["ArrowUp","End"].includes(te.key)&&(ee=ee.slice().reverse()),["ArrowUp","ArrowDown"].includes(te.key)){const xe=te.target,Be=ee.indexOf(xe);ee=ee.slice(Be+1)}setTimeout(()=>_(ee)),te.preventDefault()}})})})})})})});nx.displayName=QT;var e8="SelectItemAlignedPosition",tx=x.forwardRef((n,e)=>{const{__scopeSelect:a,onPlaced:i,...o}=n,c=Ha(Mi,a),u=Ia(Mi,a),[f,m]=x.useState(null),[p,y]=x.useState(null),v=Dn(e,B=>y(B)),S=Ku(a),A=x.useRef(!1),E=x.useRef(!0),{viewport:M,selectedItem:D,selectedItemText:w,focusSelectedItem:N}=u,P=x.useCallback(()=>{if(c.trigger&&c.valueNode&&f&&p&&M&&D&&w){const B=c.trigger.getBoundingClientRect(),G=p.getBoundingClientRect(),Q=c.valueNode.getBoundingClientRect(),ae=w.getBoundingClientRect();if(c.dir!=="rtl"){const xe=ae.left-G.left,Be=Q.left-xe,Ue=B.left-Be,De=B.width+Ue,_e=Math.max(De,G.width),vn=window.innerWidth-or,Fn=x0(Be,[or,Math.max(or,vn-_e)]);f.style.minWidth=De+"px",f.style.left=Fn+"px"}else{const xe=G.right-ae.right,Be=window.innerWidth-Q.right-xe,Ue=window.innerWidth-B.right-Be,De=B.width+Ue,_e=Math.max(De,G.width),vn=window.innerWidth-or,Fn=x0(Be,[or,Math.max(or,vn-_e)]);f.style.minWidth=De+"px",f.style.right=Fn+"px"}const de=S(),se=window.innerHeight-or*2,re=M.scrollHeight,le=window.getComputedStyle(p),ge=parseInt(le.borderTopWidth,10),_=parseInt(le.paddingTop,10),U=parseInt(le.borderBottomWidth,10),V=parseInt(le.paddingBottom,10),fe=ge+_+re+V+U,be=Math.min(D.offsetHeight*5,fe),T=window.getComputedStyle(M),Z=parseInt(T.paddingTop,10),ne=parseInt(T.paddingBottom,10),oe=B.top+B.height/2-or,ce=se-oe,Ce=D.offsetHeight/2,te=D.offsetTop+Ce,Pe=ge+_+te,pe=fe-Pe;if(Pe<=oe){const xe=de.length>0&&D===de[de.length-1].ref.current;f.style.bottom="0px";const Be=p.clientHeight-M.offsetTop-M.offsetHeight,Ue=Math.max(ce,Ce+(xe?ne:0)+Be+U),De=Pe+Ue;f.style.height=De+"px"}else{const xe=de.length>0&&D===de[0].ref.current;f.style.top="0px";const Ue=Math.max(oe,ge+M.offsetTop+(xe?Z:0)+Ce)+pe;f.style.height=Ue+"px",M.scrollTop=Pe-oe+M.offsetTop}f.style.margin=`${or}px 0`,f.style.minHeight=be+"px",f.style.maxHeight=se+"px",i?.(),requestAnimationFrame(()=>A.current=!0)}},[S,c.trigger,c.valueNode,f,p,M,D,w,c.dir,i]);gt(()=>P(),[P]);const[j,O]=x.useState();gt(()=>{p&&O(window.getComputedStyle(p).zIndex)},[p]);const q=x.useCallback(B=>{B&&E.current===!0&&(P(),N?.(),E.current=!1)},[P,N]);return g.jsx(t8,{scope:a,contentWrapper:f,shouldExpandOnScrollRef:A,onScrollButtonChange:q,children:g.jsx("div",{ref:m,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:j},children:g.jsx(un.div,{...o,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}})})})});tx.displayName=e8;var n8="SelectPopperPosition",fm=x.forwardRef((n,e)=>{const{__scopeSelect:a,align:i="start",collisionPadding:o=or,...c}=n,u=Yu(a);return g.jsx(Uw,{...u,...c,ref:e,align:i,collisionPadding:o,style:{boxSizing:"border-box",...c.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});fm.displayName=n8;var[t8,dp]=Gs(Mi,{}),hm="SelectViewport",rx=x.forwardRef((n,e)=>{const{__scopeSelect:a,nonce:i,...o}=n,c=Ia(hm,a),u=dp(hm,a),f=Dn(e,c.onViewportChange),m=x.useRef(0);return g.jsxs(g.Fragment,{children:[g.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),g.jsx(qu.Slot,{scope:a,children:g.jsx(un.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:f,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:gn(o.onScroll,p=>{const y=p.currentTarget,{contentWrapper:v,shouldExpandOnScrollRef:S}=u;if(S?.current&&v){const A=Math.abs(m.current-y.scrollTop);if(A>0){const E=window.innerHeight-or*2,M=parseFloat(v.style.minHeight),D=parseFloat(v.style.height),w=Math.max(M,D);if(w<E){const N=w+A,P=Math.min(E,N),j=N-P;v.style.height=P+"px",v.style.bottom==="0px"&&(y.scrollTop=j>0?j:0,v.style.justifyContent="flex-end")}}}m.current=y.scrollTop})})})]})});rx.displayName=hm;var ax="SelectGroup",[r8,a8]=Gs(ax),i8=x.forwardRef((n,e)=>{const{__scopeSelect:a,...i}=n,o=ws();return g.jsx(r8,{scope:a,id:o,children:g.jsx(un.div,{role:"group","aria-labelledby":o,...i,ref:e})})});i8.displayName=ax;var ix="SelectLabel",s8=x.forwardRef((n,e)=>{const{__scopeSelect:a,...i}=n,o=a8(ix,a);return g.jsx(un.div,{id:o.id,...i,ref:e})});s8.displayName=ix;var yu="SelectItem",[o8,sx]=Gs(yu),ox=x.forwardRef((n,e)=>{const{__scopeSelect:a,value:i,disabled:o=!1,textValue:c,...u}=n,f=Ha(yu,a),m=Ia(yu,a),p=f.value===i,[y,v]=x.useState(c??""),[S,A]=x.useState(!1),E=Dn(e,N=>m.itemRefCallback?.(N,i,o)),M=ws(),D=x.useRef("touch"),w=()=>{o||(f.onValueChange(i),f.onOpenChange(!1))};if(i==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return g.jsx(o8,{scope:a,value:i,disabled:o,textId:M,isSelected:p,onItemTextChange:x.useCallback(N=>{v(P=>P||(N?.textContent??"").trim())},[]),children:g.jsx(qu.ItemSlot,{scope:a,value:i,disabled:o,textValue:y,children:g.jsx(un.div,{role:"option","aria-labelledby":M,"data-highlighted":S?"":void 0,"aria-selected":p&&S,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...u,ref:E,onFocus:gn(u.onFocus,()=>A(!0)),onBlur:gn(u.onBlur,()=>A(!1)),onClick:gn(u.onClick,()=>{D.current!=="mouse"&&w()}),onPointerUp:gn(u.onPointerUp,()=>{D.current==="mouse"&&w()}),onPointerDown:gn(u.onPointerDown,N=>{D.current=N.pointerType}),onPointerMove:gn(u.onPointerMove,N=>{D.current=N.pointerType,o?m.onItemLeave?.():D.current==="mouse"&&N.currentTarget.focus({preventScroll:!0})}),onPointerLeave:gn(u.onPointerLeave,N=>{N.currentTarget===document.activeElement&&m.onItemLeave?.()}),onKeyDown:gn(u.onKeyDown,N=>{m.searchRef?.current!==""&&N.key===" "||(UT.includes(N.key)&&w(),N.key===" "&&N.preventDefault())})})})})});ox.displayName=yu;var Zo="SelectItemText",lx=x.forwardRef((n,e)=>{const{__scopeSelect:a,className:i,style:o,...c}=n,u=Ha(Zo,a),f=Ia(Zo,a),m=sx(Zo,a),p=ZT(Zo,a),[y,v]=x.useState(null),S=Dn(e,w=>v(w),m.onItemTextChange,w=>f.itemTextRefCallback?.(w,m.value,m.disabled)),A=y?.textContent,E=x.useMemo(()=>g.jsx("option",{value:m.value,disabled:m.disabled,children:A},m.value),[m.disabled,m.value,A]),{onNativeOptionAdd:M,onNativeOptionRemove:D}=p;return gt(()=>(M(E),()=>D(E)),[M,D,E]),g.jsxs(g.Fragment,{children:[g.jsx(un.span,{id:m.textId,...c,ref:S}),m.isSelected&&u.valueNode&&!u.valueNodeHasChildren?vl.createPortal(c.children,u.valueNode):null]})});lx.displayName=Zo;var cx="SelectItemIndicator",ux=x.forwardRef((n,e)=>{const{__scopeSelect:a,...i}=n;return sx(cx,a).isSelected?g.jsx(un.span,{"aria-hidden":!0,...i,ref:e}):null});ux.displayName=cx;var mm="SelectScrollUpButton",dx=x.forwardRef((n,e)=>{const a=Ia(mm,n.__scopeSelect),i=dp(mm,n.__scopeSelect),[o,c]=x.useState(!1),u=Dn(e,i.onScrollButtonChange);return gt(()=>{if(a.viewport&&a.isPositioned){let f=function(){const p=m.scrollTop>0;c(p)};const m=a.viewport;return f(),m.addEventListener("scroll",f),()=>m.removeEventListener("scroll",f)}},[a.viewport,a.isPositioned]),o?g.jsx(hx,{...n,ref:u,onAutoScroll:()=>{const{viewport:f,selectedItem:m}=a;f&&m&&(f.scrollTop=f.scrollTop-m.offsetHeight)}}):null});dx.displayName=mm;var pm="SelectScrollDownButton",fx=x.forwardRef((n,e)=>{const a=Ia(pm,n.__scopeSelect),i=dp(pm,n.__scopeSelect),[o,c]=x.useState(!1),u=Dn(e,i.onScrollButtonChange);return gt(()=>{if(a.viewport&&a.isPositioned){let f=function(){const p=m.scrollHeight-m.clientHeight,y=Math.ceil(m.scrollTop)<p;c(y)};const m=a.viewport;return f(),m.addEventListener("scroll",f),()=>m.removeEventListener("scroll",f)}},[a.viewport,a.isPositioned]),o?g.jsx(hx,{...n,ref:u,onAutoScroll:()=>{const{viewport:f,selectedItem:m}=a;f&&m&&(f.scrollTop=f.scrollTop+m.offsetHeight)}}):null});fx.displayName=pm;var hx=x.forwardRef((n,e)=>{const{__scopeSelect:a,onAutoScroll:i,...o}=n,c=Ia("SelectScrollButton",a),u=x.useRef(null),f=Ku(a),m=x.useCallback(()=>{u.current!==null&&(window.clearInterval(u.current),u.current=null)},[]);return x.useEffect(()=>()=>m(),[m]),gt(()=>{f().find(y=>y.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[f]),g.jsx(un.div,{"aria-hidden":!0,...o,ref:e,style:{flexShrink:0,...o.style},onPointerDown:gn(o.onPointerDown,()=>{u.current===null&&(u.current=window.setInterval(i,50))}),onPointerMove:gn(o.onPointerMove,()=>{c.onItemLeave?.(),u.current===null&&(u.current=window.setInterval(i,50))}),onPointerLeave:gn(o.onPointerLeave,()=>{m()})})}),l8="SelectSeparator",c8=x.forwardRef((n,e)=>{const{__scopeSelect:a,...i}=n;return g.jsx(un.div,{"aria-hidden":!0,...i,ref:e})});c8.displayName=l8;var gm="SelectArrow",u8=x.forwardRef((n,e)=>{const{__scopeSelect:a,...i}=n,o=Yu(a),c=Ha(gm,a),u=Ia(gm,a);return c.open&&u.position==="popper"?g.jsx(qw,{...o,...i,ref:e}):null});u8.displayName=gm;var d8="SelectBubbleInput",mx=x.forwardRef(({__scopeSelect:n,value:e,...a},i)=>{const o=x.useRef(null),c=Dn(i,o),u=_4(e);return x.useEffect(()=>{const f=o.current;if(!f)return;const m=window.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(m,"value").set;if(u!==e&&y){const v=new Event("change",{bubbles:!0});y.call(f,e),f.dispatchEvent(v)}},[u,e]),g.jsx(un.select,{...a,style:{...O4,...a.style},ref:c,defaultValue:e})});mx.displayName=d8;function px(n){return n===""||n===void 0}function gx(n){const e=bi(n),a=x.useRef(""),i=x.useRef(0),o=x.useCallback(u=>{const f=a.current+u;e(f),(function m(p){a.current=p,window.clearTimeout(i.current),p!==""&&(i.current=window.setTimeout(()=>m(""),1e3))})(f)},[e]),c=x.useCallback(()=>{a.current="",window.clearTimeout(i.current)},[]);return x.useEffect(()=>()=>window.clearTimeout(i.current),[]),[a,o,c]}function yx(n,e,a){const o=e.length>1&&Array.from(e).every(p=>p===e[0])?e[0]:e,c=a?n.indexOf(a):-1;let u=f8(n,Math.max(c,0));o.length===1&&(u=u.filter(p=>p!==a));const m=u.find(p=>p.textValue.toLowerCase().startsWith(o.toLowerCase()));return m!==a?m:void 0}function f8(n,e){return n.map((a,i)=>n[(e+i)%n.length])}var h8=q4,m8=Y4,p8=W4,g8=X4,y8=Q4,v8=$4,b8=rx,x8=ox,S8=lx,M8=ux,C8=dx,A8=fx;function vx(n){var e,a,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(a=vx(n[e]))&&(i&&(i+=" "),i+=a)}else for(a in n)n[a]&&(i&&(i+=" "),i+=a);return i}function bx(){for(var n,e,a=0,i="",o=arguments.length;a<o;a++)(n=arguments[a])&&(e=vx(n))&&(i&&(i+=" "),i+=e);return i}const w8=(n,e)=>{const a=new Array(n.length+e.length);for(let i=0;i<n.length;i++)a[i]=n[i];for(let i=0;i<e.length;i++)a[n.length+i]=e[i];return a},T8=(n,e)=>({classGroupId:n,validator:e}),xx=(n=new Map,e=null,a)=>({nextPart:n,validators:e,classGroupId:a}),vu="-",q0=[],D8="arbitrary..",E8=n=>{const e=R8(n),{conflictingClassGroups:a,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:u=>{if(u.startsWith("[")&&u.endsWith("]"))return N8(u);const f=u.split(vu),m=f[0]===""&&f.length>1?1:0;return Sx(f,m,e)},getConflictingClassGroupIds:(u,f)=>{if(f){const m=i[u],p=a[u];return m?p?w8(p,m):m:p||q0}return a[u]||q0}}},Sx=(n,e,a)=>{if(n.length-e===0)return a.classGroupId;const o=n[e],c=a.nextPart.get(o);if(c){const p=Sx(n,e+1,c);if(p)return p}const u=a.validators;if(u===null)return;const f=e===0?n.join(vu):n.slice(e).join(vu),m=u.length;for(let p=0;p<m;p++){const y=u[p];if(y.validator(f))return y.classGroupId}},N8=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),a=e.indexOf(":"),i=e.slice(0,a);return i?D8+i:void 0})(),R8=n=>{const{theme:e,classGroups:a}=n;return k8(a,e)},k8=(n,e)=>{const a=xx();for(const i in n){const o=n[i];fp(o,a,i,e)}return a},fp=(n,e,a,i)=>{const o=n.length;for(let c=0;c<o;c++){const u=n[c];P8(u,e,a,i)}},P8=(n,e,a,i)=>{if(typeof n=="string"){B8(n,e,a);return}if(typeof n=="function"){L8(n,e,a,i);return}_8(n,e,a,i)},B8=(n,e,a)=>{const i=n===""?e:Mx(e,n);i.classGroupId=a},L8=(n,e,a,i)=>{if(O8(n)){fp(n(i),e,a,i);return}e.validators===null&&(e.validators=[]),e.validators.push(T8(a,n))},_8=(n,e,a,i)=>{const o=Object.entries(n),c=o.length;for(let u=0;u<c;u++){const[f,m]=o[u];fp(m,Mx(e,f),a,i)}},Mx=(n,e)=>{let a=n;const i=e.split(vu),o=i.length;for(let c=0;c<o;c++){const u=i[c];let f=a.nextPart.get(u);f||(f=xx(),a.nextPart.set(u,f)),a=f}return a},O8=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,z8=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,a=Object.create(null),i=Object.create(null);const o=(c,u)=>{a[c]=u,e++,e>n&&(e=0,i=a,a=Object.create(null))};return{get(c){let u=a[c];if(u!==void 0)return u;if((u=i[c])!==void 0)return o(c,u),u},set(c,u){c in a?a[c]=u:o(c,u)}}},ym="!",K0=":",j8=[],Y0=(n,e,a,i,o)=>({modifiers:n,hasImportantModifier:e,baseClassName:a,maybePostfixModifierPosition:i,isExternal:o}),V8=n=>{const{prefix:e,experimentalParseClassName:a}=n;let i=o=>{const c=[];let u=0,f=0,m=0,p;const y=o.length;for(let M=0;M<y;M++){const D=o[M];if(u===0&&f===0){if(D===K0){c.push(o.slice(m,M)),m=M+1;continue}if(D==="/"){p=M;continue}}D==="["?u++:D==="]"?u--:D==="("?f++:D===")"&&f--}const v=c.length===0?o:o.slice(m);let S=v,A=!1;v.endsWith(ym)?(S=v.slice(0,-1),A=!0):v.startsWith(ym)&&(S=v.slice(1),A=!0);const E=p&&p>m?p-m:void 0;return Y0(c,A,S,E)};if(e){const o=e+K0,c=i;i=u=>u.startsWith(o)?c(u.slice(o.length)):Y0(j8,!1,u,void 0,!0)}if(a){const o=i;i=c=>a({className:c,parseClassName:o})}return i},G8=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((a,i)=>{e.set(a,1e6+i)}),a=>{const i=[];let o=[];for(let c=0;c<a.length;c++){const u=a[c],f=u[0]==="[",m=e.has(u);f||m?(o.length>0&&(o.sort(),i.push(...o),o=[]),i.push(u)):o.push(u)}return o.length>0&&(o.sort(),i.push(...o)),i}},F8=n=>({cache:z8(n.cacheSize),parseClassName:V8(n),sortModifiers:G8(n),...E8(n)}),H8=/\s+/,I8=(n,e)=>{const{parseClassName:a,getClassGroupId:i,getConflictingClassGroupIds:o,sortModifiers:c}=e,u=[],f=n.trim().split(H8);let m="";for(let p=f.length-1;p>=0;p-=1){const y=f[p],{isExternal:v,modifiers:S,hasImportantModifier:A,baseClassName:E,maybePostfixModifierPosition:M}=a(y);if(v){m=y+(m.length>0?" "+m:m);continue}let D=!!M,w=i(D?E.substring(0,M):E);if(!w){if(!D){m=y+(m.length>0?" "+m:m);continue}if(w=i(E),!w){m=y+(m.length>0?" "+m:m);continue}D=!1}const N=S.length===0?"":S.length===1?S[0]:c(S).join(":"),P=A?N+ym:N,j=P+w;if(u.indexOf(j)>-1)continue;u.push(j);const O=o(w,D);for(let q=0;q<O.length;++q){const B=O[q];u.push(P+B)}m=y+(m.length>0?" "+m:m)}return m},J8=(...n)=>{let e=0,a,i,o="";for(;e<n.length;)(a=n[e++])&&(i=Cx(a))&&(o&&(o+=" "),o+=i);return o},Cx=n=>{if(typeof n=="string")return n;let e,a="";for(let i=0;i<n.length;i++)n[i]&&(e=Cx(n[i]))&&(a&&(a+=" "),a+=e);return a},U8=(n,...e)=>{let a,i,o,c;const u=m=>{const p=e.reduce((y,v)=>v(y),n());return a=F8(p),i=a.cache.get,o=a.cache.set,c=f,f(m)},f=m=>{const p=i(m);if(p)return p;const y=I8(m,a);return o(m,y),y};return c=u,(...m)=>c(J8(...m))},q8=[],Xn=n=>{const e=a=>a[n]||q8;return e.isThemeGetter=!0,e},Ax=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,wx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,K8=/^\d+\/\d+$/,Y8=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Z8=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,W8=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,X8=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Q8=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,fs=n=>K8.test(n),Ie=n=>!!n&&!Number.isNaN(Number(n)),wa=n=>!!n&&Number.isInteger(Number(n)),_h=n=>n.endsWith("%")&&Ie(n.slice(0,-1)),Yr=n=>Y8.test(n),$8=()=>!0,e7=n=>Z8.test(n)&&!W8.test(n),Tx=()=>!1,n7=n=>X8.test(n),t7=n=>Q8.test(n),r7=n=>!Ae(n)&&!we(n),a7=n=>Fs(n,Nx,Tx),Ae=n=>Ax.test(n),ci=n=>Fs(n,Rx,e7),Oh=n=>Fs(n,c7,Ie),Z0=n=>Fs(n,Dx,Tx),i7=n=>Fs(n,Ex,t7),Xc=n=>Fs(n,kx,n7),we=n=>wx.test(n),Io=n=>Hs(n,Rx),s7=n=>Hs(n,u7),W0=n=>Hs(n,Dx),o7=n=>Hs(n,Nx),l7=n=>Hs(n,Ex),Qc=n=>Hs(n,kx,!0),Fs=(n,e,a)=>{const i=Ax.exec(n);return i?i[1]?e(i[1]):a(i[2]):!1},Hs=(n,e,a=!1)=>{const i=wx.exec(n);return i?i[1]?e(i[1]):a:!1},Dx=n=>n==="position"||n==="percentage",Ex=n=>n==="image"||n==="url",Nx=n=>n==="length"||n==="size"||n==="bg-size",Rx=n=>n==="length",c7=n=>n==="number",u7=n=>n==="family-name",kx=n=>n==="shadow",d7=()=>{const n=Xn("color"),e=Xn("font"),a=Xn("text"),i=Xn("font-weight"),o=Xn("tracking"),c=Xn("leading"),u=Xn("breakpoint"),f=Xn("container"),m=Xn("spacing"),p=Xn("radius"),y=Xn("shadow"),v=Xn("inset-shadow"),S=Xn("text-shadow"),A=Xn("drop-shadow"),E=Xn("blur"),M=Xn("perspective"),D=Xn("aspect"),w=Xn("ease"),N=Xn("animate"),P=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],O=()=>[...j(),we,Ae],q=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto","contain","none"],G=()=>[we,Ae,m],Q=()=>[fs,"full","auto",...G()],ae=()=>[wa,"none","subgrid",we,Ae],de=()=>["auto",{span:["full",wa,we,Ae]},wa,we,Ae],se=()=>[wa,"auto",we,Ae],re=()=>["auto","min","max","fr",we,Ae],le=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ge=()=>["start","end","center","stretch","center-safe","end-safe"],_=()=>["auto",...G()],U=()=>[fs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...G()],V=()=>[n,we,Ae],fe=()=>[...j(),W0,Z0,{position:[we,Ae]}],be=()=>["no-repeat",{repeat:["","x","y","space","round"]}],T=()=>["auto","cover","contain",o7,a7,{size:[we,Ae]}],Z=()=>[_h,Io,ci],ne=()=>["","none","full",p,we,Ae],oe=()=>["",Ie,Io,ci],ce=()=>["solid","dashed","dotted","double"],Ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>[Ie,_h,W0,Z0],Pe=()=>["","none",E,we,Ae],pe=()=>["none",Ie,we,Ae],ee=()=>["none",Ie,we,Ae],xe=()=>[Ie,we,Ae],Be=()=>[fs,"full",...G()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Yr],breakpoint:[Yr],color:[$8],container:[Yr],"drop-shadow":[Yr],ease:["in","out","in-out"],font:[r7],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Yr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Yr],shadow:[Yr],spacing:["px",Ie],text:[Yr],"text-shadow":[Yr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",fs,Ae,we,D]}],container:["container"],columns:[{columns:[Ie,Ae,we,f]}],"break-after":[{"break-after":P()}],"break-before":[{"break-before":P()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:O()}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Q()}],"inset-x":[{"inset-x":Q()}],"inset-y":[{"inset-y":Q()}],start:[{start:Q()}],end:[{end:Q()}],top:[{top:Q()}],right:[{right:Q()}],bottom:[{bottom:Q()}],left:[{left:Q()}],visibility:["visible","invisible","collapse"],z:[{z:[wa,"auto",we,Ae]}],basis:[{basis:[fs,"full","auto",f,...G()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ie,fs,"auto","initial","none",Ae]}],grow:[{grow:["",Ie,we,Ae]}],shrink:[{shrink:["",Ie,we,Ae]}],order:[{order:[wa,"first","last","none",we,Ae]}],"grid-cols":[{"grid-cols":ae()}],"col-start-end":[{col:de()}],"col-start":[{"col-start":se()}],"col-end":[{"col-end":se()}],"grid-rows":[{"grid-rows":ae()}],"row-start-end":[{row:de()}],"row-start":[{"row-start":se()}],"row-end":[{"row-end":se()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":re()}],"auto-rows":[{"auto-rows":re()}],gap:[{gap:G()}],"gap-x":[{"gap-x":G()}],"gap-y":[{"gap-y":G()}],"justify-content":[{justify:[...le(),"normal"]}],"justify-items":[{"justify-items":[...ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...ge()]}],"align-content":[{content:["normal",...le()]}],"align-items":[{items:[...ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":le()}],"place-items":[{"place-items":[...ge(),"baseline"]}],"place-self":[{"place-self":["auto",...ge()]}],p:[{p:G()}],px:[{px:G()}],py:[{py:G()}],ps:[{ps:G()}],pe:[{pe:G()}],pt:[{pt:G()}],pr:[{pr:G()}],pb:[{pb:G()}],pl:[{pl:G()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":G()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":G()}],"space-y-reverse":["space-y-reverse"],size:[{size:U()}],w:[{w:[f,"screen",...U()]}],"min-w":[{"min-w":[f,"screen","none",...U()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[u]},...U()]}],h:[{h:["screen","lh",...U()]}],"min-h":[{"min-h":["screen","lh","none",...U()]}],"max-h":[{"max-h":["screen","lh",...U()]}],"font-size":[{text:["base",a,Io,ci]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,we,Oh]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_h,Ae]}],"font-family":[{font:[s7,Ae,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,we,Ae]}],"line-clamp":[{"line-clamp":[Ie,"none",we,Oh]}],leading:[{leading:[c,...G()]}],"list-image":[{"list-image":["none",we,Ae]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,Ae]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:V()}],"text-color":[{text:V()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ie,"from-font","auto",we,ci]}],"text-decoration-color":[{decoration:V()}],"underline-offset":[{"underline-offset":[Ie,"auto",we,Ae]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,Ae]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,Ae]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:fe()}],"bg-repeat":[{bg:be()}],"bg-size":[{bg:T()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},wa,we,Ae],radial:["",we,Ae],conic:[wa,we,Ae]},l7,i7]}],"bg-color":[{bg:V()}],"gradient-from-pos":[{from:Z()}],"gradient-via-pos":[{via:Z()}],"gradient-to-pos":[{to:Z()}],"gradient-from":[{from:V()}],"gradient-via":[{via:V()}],"gradient-to":[{to:V()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:oe()}],"border-w-x":[{"border-x":oe()}],"border-w-y":[{"border-y":oe()}],"border-w-s":[{"border-s":oe()}],"border-w-e":[{"border-e":oe()}],"border-w-t":[{"border-t":oe()}],"border-w-r":[{"border-r":oe()}],"border-w-b":[{"border-b":oe()}],"border-w-l":[{"border-l":oe()}],"divide-x":[{"divide-x":oe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":oe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ce(),"hidden","none"]}],"divide-style":[{divide:[...ce(),"hidden","none"]}],"border-color":[{border:V()}],"border-color-x":[{"border-x":V()}],"border-color-y":[{"border-y":V()}],"border-color-s":[{"border-s":V()}],"border-color-e":[{"border-e":V()}],"border-color-t":[{"border-t":V()}],"border-color-r":[{"border-r":V()}],"border-color-b":[{"border-b":V()}],"border-color-l":[{"border-l":V()}],"divide-color":[{divide:V()}],"outline-style":[{outline:[...ce(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ie,we,Ae]}],"outline-w":[{outline:["",Ie,Io,ci]}],"outline-color":[{outline:V()}],shadow:[{shadow:["","none",y,Qc,Xc]}],"shadow-color":[{shadow:V()}],"inset-shadow":[{"inset-shadow":["none",v,Qc,Xc]}],"inset-shadow-color":[{"inset-shadow":V()}],"ring-w":[{ring:oe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:V()}],"ring-offset-w":[{"ring-offset":[Ie,ci]}],"ring-offset-color":[{"ring-offset":V()}],"inset-ring-w":[{"inset-ring":oe()}],"inset-ring-color":[{"inset-ring":V()}],"text-shadow":[{"text-shadow":["none",S,Qc,Xc]}],"text-shadow-color":[{"text-shadow":V()}],opacity:[{opacity:[Ie,we,Ae]}],"mix-blend":[{"mix-blend":[...Ce(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ce()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ie]}],"mask-image-linear-from-pos":[{"mask-linear-from":te()}],"mask-image-linear-to-pos":[{"mask-linear-to":te()}],"mask-image-linear-from-color":[{"mask-linear-from":V()}],"mask-image-linear-to-color":[{"mask-linear-to":V()}],"mask-image-t-from-pos":[{"mask-t-from":te()}],"mask-image-t-to-pos":[{"mask-t-to":te()}],"mask-image-t-from-color":[{"mask-t-from":V()}],"mask-image-t-to-color":[{"mask-t-to":V()}],"mask-image-r-from-pos":[{"mask-r-from":te()}],"mask-image-r-to-pos":[{"mask-r-to":te()}],"mask-image-r-from-color":[{"mask-r-from":V()}],"mask-image-r-to-color":[{"mask-r-to":V()}],"mask-image-b-from-pos":[{"mask-b-from":te()}],"mask-image-b-to-pos":[{"mask-b-to":te()}],"mask-image-b-from-color":[{"mask-b-from":V()}],"mask-image-b-to-color":[{"mask-b-to":V()}],"mask-image-l-from-pos":[{"mask-l-from":te()}],"mask-image-l-to-pos":[{"mask-l-to":te()}],"mask-image-l-from-color":[{"mask-l-from":V()}],"mask-image-l-to-color":[{"mask-l-to":V()}],"mask-image-x-from-pos":[{"mask-x-from":te()}],"mask-image-x-to-pos":[{"mask-x-to":te()}],"mask-image-x-from-color":[{"mask-x-from":V()}],"mask-image-x-to-color":[{"mask-x-to":V()}],"mask-image-y-from-pos":[{"mask-y-from":te()}],"mask-image-y-to-pos":[{"mask-y-to":te()}],"mask-image-y-from-color":[{"mask-y-from":V()}],"mask-image-y-to-color":[{"mask-y-to":V()}],"mask-image-radial":[{"mask-radial":[we,Ae]}],"mask-image-radial-from-pos":[{"mask-radial-from":te()}],"mask-image-radial-to-pos":[{"mask-radial-to":te()}],"mask-image-radial-from-color":[{"mask-radial-from":V()}],"mask-image-radial-to-color":[{"mask-radial-to":V()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":j()}],"mask-image-conic-pos":[{"mask-conic":[Ie]}],"mask-image-conic-from-pos":[{"mask-conic-from":te()}],"mask-image-conic-to-pos":[{"mask-conic-to":te()}],"mask-image-conic-from-color":[{"mask-conic-from":V()}],"mask-image-conic-to-color":[{"mask-conic-to":V()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:fe()}],"mask-repeat":[{mask:be()}],"mask-size":[{mask:T()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,Ae]}],filter:[{filter:["","none",we,Ae]}],blur:[{blur:Pe()}],brightness:[{brightness:[Ie,we,Ae]}],contrast:[{contrast:[Ie,we,Ae]}],"drop-shadow":[{"drop-shadow":["","none",A,Qc,Xc]}],"drop-shadow-color":[{"drop-shadow":V()}],grayscale:[{grayscale:["",Ie,we,Ae]}],"hue-rotate":[{"hue-rotate":[Ie,we,Ae]}],invert:[{invert:["",Ie,we,Ae]}],saturate:[{saturate:[Ie,we,Ae]}],sepia:[{sepia:["",Ie,we,Ae]}],"backdrop-filter":[{"backdrop-filter":["","none",we,Ae]}],"backdrop-blur":[{"backdrop-blur":Pe()}],"backdrop-brightness":[{"backdrop-brightness":[Ie,we,Ae]}],"backdrop-contrast":[{"backdrop-contrast":[Ie,we,Ae]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ie,we,Ae]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ie,we,Ae]}],"backdrop-invert":[{"backdrop-invert":["",Ie,we,Ae]}],"backdrop-opacity":[{"backdrop-opacity":[Ie,we,Ae]}],"backdrop-saturate":[{"backdrop-saturate":[Ie,we,Ae]}],"backdrop-sepia":[{"backdrop-sepia":["",Ie,we,Ae]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":G()}],"border-spacing-x":[{"border-spacing-x":G()}],"border-spacing-y":[{"border-spacing-y":G()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,Ae]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ie,"initial",we,Ae]}],ease:[{ease:["linear","initial",w,we,Ae]}],delay:[{delay:[Ie,we,Ae]}],animate:[{animate:["none",N,we,Ae]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[M,we,Ae]}],"perspective-origin":[{"perspective-origin":O()}],rotate:[{rotate:pe()}],"rotate-x":[{"rotate-x":pe()}],"rotate-y":[{"rotate-y":pe()}],"rotate-z":[{"rotate-z":pe()}],scale:[{scale:ee()}],"scale-x":[{"scale-x":ee()}],"scale-y":[{"scale-y":ee()}],"scale-z":[{"scale-z":ee()}],"scale-3d":["scale-3d"],skew:[{skew:xe()}],"skew-x":[{"skew-x":xe()}],"skew-y":[{"skew-y":xe()}],transform:[{transform:[we,Ae,"","none","gpu","cpu"]}],"transform-origin":[{origin:O()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Be()}],"translate-x":[{"translate-x":Be()}],"translate-y":[{"translate-y":Be()}],"translate-z":[{"translate-z":Be()}],"translate-none":["translate-none"],accent:[{accent:V()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:V()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,Ae]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,Ae]}],fill:[{fill:["none",...V()]}],"stroke-w":[{stroke:[Ie,Io,ci,Oh]}],stroke:[{stroke:["none",...V()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},f7=U8(d7);function yn(...n){return f7(bx(n))}function Px({...n}){return g.jsx(h8,{"data-slot":"select",...n})}function Bx({...n}){return g.jsx(p8,{"data-slot":"select-value",...n})}function Lx({className:n,size:e="default",children:a,...i}){return g.jsxs(m8,{"data-slot":"select-trigger","data-size":e,className:yn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...i,children:[a,g.jsx(g8,{asChild:!0,children:g.jsx(Gu,{className:"size-4 opacity-50"})})]})}function _x({className:n,children:e,position:a="popper",...i}){return g.jsx(y8,{children:g.jsxs(v8,{"data-slot":"select-content",className:yn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",a==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:a,...i,children:[g.jsx(h7,{}),g.jsx(b8,{className:yn("p-1",a==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:e}),g.jsx(m7,{})]})})}function Qo({className:n,children:e,...a}){return g.jsxs(x8,{"data-slot":"select-item",className:yn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...a,children:[g.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:g.jsx(M8,{children:g.jsx(Vu,{className:"size-4"})})}),g.jsx(S8,{children:e})]})}function h7({className:n,...e}){return g.jsx(C8,{"data-slot":"select-scroll-up-button",className:yn("flex cursor-default items-center justify-center py-1",n),...e,children:g.jsx(SA,{className:"size-4"})})}function m7({className:n,...e}){return g.jsx(A8,{"data-slot":"select-scroll-down-button",className:yn("flex cursor-default items-center justify-center py-1",n),...e,children:g.jsx(Gu,{className:"size-4"})})}var p7=Symbol.for("react.lazy"),bu=Qm[" use ".trim().toString()];function g7(n){return typeof n=="object"&&n!==null&&"then"in n}function Ox(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===p7&&"_payload"in n&&g7(n._payload)}function zx(n){const e=v7(n),a=x.forwardRef((i,o)=>{let{children:c,...u}=i;Ox(c)&&typeof bu=="function"&&(c=bu(c._payload));const f=x.Children.toArray(c),m=f.find(x7);if(m){const p=m.props.children,y=f.map(v=>v===m?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:v);return g.jsx(e,{...u,ref:o,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return g.jsx(e,{...u,ref:o,children:c})});return a.displayName=`${n}.Slot`,a}var y7=zx("Slot");function v7(n){const e=x.forwardRef((a,i)=>{let{children:o,...c}=a;if(Ox(o)&&typeof bu=="function"&&(o=bu(o._payload)),x.isValidElement(o)){const u=M7(o),f=S7(c,o.props);return o.type!==x.Fragment&&(f.ref=i?zs(i,u):u),x.cloneElement(o,f)}return x.Children.count(o)>1?x.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var b7=Symbol("radix.slottable");function x7(n){return x.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===b7}function S7(n,e){const a={...e};for(const i in e){const o=n[i],c=e[i];/^on[A-Z]/.test(i)?o&&c?a[i]=(...f)=>{const m=c(...f);return o(...f),m}:o&&(a[i]=o):i==="style"?a[i]={...o,...c}:i==="className"&&(a[i]=[o,c].filter(Boolean).join(" "))}return{...n,...a}}function M7(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?n.props.ref:n.props.ref||n.ref)}const X0=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Q0=bx,jx=(n,e)=>a=>{var i;if(e?.variants==null)return Q0(n,a?.class,a?.className);const{variants:o,defaultVariants:c}=e,u=Object.keys(o).map(p=>{const y=a?.[p],v=c?.[p];if(y===null)return null;const S=X0(y)||X0(v);return o[p][S]}),f=a&&Object.entries(a).reduce((p,y)=>{let[v,S]=y;return S===void 0||(p[v]=S),p},{}),m=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((p,y)=>{let{class:v,className:S,...A}=y;return Object.entries(A).every(E=>{let[M,D]=E;return Array.isArray(D)?D.includes({...c,...f}[M]):{...c,...f}[M]===D})?[...p,v,S]:p},[]);return Q0(n,u,m,a?.class,a?.className)},C7=jx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function er({className:n,variant:e,size:a,asChild:i=!1,...o}){const c=i?y7:"button";return g.jsx(c,{"data-slot":"button",className:yn(C7({variant:e,size:a,className:n})),...o})}const hp=x.createContext({});function mp(n){const e=x.useRef(null);return e.current===null&&(e.current=n()),e.current}const pp=typeof window<"u",Vx=pp?x.useLayoutEffect:x.useEffect,Zu=x.createContext(null);function gp(n,e){n.indexOf(e)===-1&&n.push(e)}function yp(n,e){const a=n.indexOf(e);a>-1&&n.splice(a,1)}const Qr=(n,e,a)=>a>e?e:a<n?n:a;let vp=()=>{};const $r={},Gx=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Fx(n){return typeof n=="object"&&n!==null}const Hx=n=>/^0[^.\s]+$/u.test(n);function bp(n){let e;return()=>(e===void 0&&(e=n()),e)}const nr=n=>n,A7=(n,e)=>a=>e(n(a)),Sl=(...n)=>n.reduce(A7),ol=(n,e,a)=>{const i=e-n;return i===0?1:(a-n)/i};class xp{constructor(){this.subscriptions=[]}add(e){return gp(this.subscriptions,e),()=>yp(this.subscriptions,e)}notify(e,a,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,a,i);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(e,a,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ar=n=>n*1e3,$t=n=>n/1e3;function Ix(n,e){return e?n*(1e3/e):0}const Jx=(n,e,a)=>(((1-3*a+3*e)*n+(3*a-6*e))*n+3*e)*n,w7=1e-7,T7=12;function D7(n,e,a,i,o){let c,u,f=0;do u=e+(a-e)/2,c=Jx(u,i,o)-n,c>0?a=u:e=u;while(Math.abs(c)>w7&&++f<T7);return u}function Ml(n,e,a,i){if(n===e&&a===i)return nr;const o=c=>D7(c,0,1,n,a);return c=>c===0||c===1?c:Jx(o(c),e,i)}const Ux=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,qx=n=>e=>1-n(1-e),Kx=Ml(.33,1.53,.69,.99),Sp=qx(Kx),Yx=Ux(Sp),Zx=n=>(n*=2)<1?.5*Sp(n):.5*(2-Math.pow(2,-10*(n-1))),Mp=n=>1-Math.sin(Math.acos(n)),Wx=qx(Mp),Xx=Ux(Mp),E7=Ml(.42,0,1,1),N7=Ml(0,0,.58,1),Qx=Ml(.42,0,.58,1),R7=n=>Array.isArray(n)&&typeof n[0]!="number",$x=n=>Array.isArray(n)&&typeof n[0]=="number",k7={linear:nr,easeIn:E7,easeInOut:Qx,easeOut:N7,circIn:Mp,circInOut:Xx,circOut:Wx,backIn:Sp,backInOut:Yx,backOut:Kx,anticipate:Zx},P7=n=>typeof n=="string",$0=n=>{if($x(n)){vp(n.length===4);const[e,a,i,o]=n;return Ml(e,a,i,o)}else if(P7(n))return k7[n];return n},$c=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function B7(n,e){let a=new Set,i=new Set,o=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function m(y){u.has(y)&&(p.schedule(y),n()),y(f)}const p={schedule:(y,v=!1,S=!1)=>{const E=S&&o?a:i;return v&&u.add(y),E.has(y)||E.add(y),y},cancel:y=>{i.delete(y),u.delete(y)},process:y=>{if(f=y,o){c=!0;return}o=!0,[a,i]=[i,a],a.forEach(m),a.clear(),o=!1,c&&(c=!1,p.process(y))}};return p}const L7=40;function e3(n,e){let a=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>a=!0,u=$c.reduce((P,j)=>(P[j]=B7(c),P),{}),{setup:f,read:m,resolveKeyframes:p,preUpdate:y,update:v,preRender:S,render:A,postRender:E}=u,M=()=>{const P=$r.useManualTiming?o.timestamp:performance.now();a=!1,$r.useManualTiming||(o.delta=i?1e3/60:Math.max(Math.min(P-o.timestamp,L7),1)),o.timestamp=P,o.isProcessing=!0,f.process(o),m.process(o),p.process(o),y.process(o),v.process(o),S.process(o),A.process(o),E.process(o),o.isProcessing=!1,a&&e&&(i=!1,n(M))},D=()=>{a=!0,i=!0,o.isProcessing||n(M)};return{schedule:$c.reduce((P,j)=>{const O=u[j];return P[j]=(q,B=!1,G=!1)=>(a||D(),O.schedule(q,B,G)),P},{}),cancel:P=>{for(let j=0;j<$c.length;j++)u[$c[j]].cancel(P)},state:o,steps:u}}const{schedule:Cn,cancel:za,state:ut,steps:zh}=e3(typeof requestAnimationFrame<"u"?requestAnimationFrame:nr,!0);let ou;function _7(){ou=void 0}const Et={now:()=>(ou===void 0&&Et.set(ut.isProcessing||$r.useManualTiming?ut.timestamp:performance.now()),ou),set:n=>{ou=n,queueMicrotask(_7)}},n3=n=>e=>typeof e=="string"&&e.startsWith(n),Cp=n3("--"),O7=n3("var(--"),Ap=n=>O7(n)?z7.test(n.split("/*")[0].trim()):!1,z7=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Is={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ll={...Is,transform:n=>Qr(0,1,n)},eu={...Is,default:1},$o=n=>Math.round(n*1e5)/1e5,wp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function j7(n){return n==null}const V7=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Tp=(n,e)=>a=>!!(typeof a=="string"&&V7.test(a)&&a.startsWith(n)||e&&!j7(a)&&Object.prototype.hasOwnProperty.call(a,e)),t3=(n,e,a)=>i=>{if(typeof i!="string")return i;const[o,c,u,f]=i.match(wp);return{[n]:parseFloat(o),[e]:parseFloat(c),[a]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},G7=n=>Qr(0,255,n),jh={...Is,transform:n=>Math.round(G7(n))},hi={test:Tp("rgb","red"),parse:t3("red","green","blue"),transform:({red:n,green:e,blue:a,alpha:i=1})=>"rgba("+jh.transform(n)+", "+jh.transform(e)+", "+jh.transform(a)+", "+$o(ll.transform(i))+")"};function F7(n){let e="",a="",i="",o="";return n.length>5?(e=n.substring(1,3),a=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),a=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,a+=a,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(a,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const vm={test:Tp("#"),parse:F7,transform:hi.transform},Cl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Ea=Cl("deg"),wr=Cl("%"),Oe=Cl("px"),H7=Cl("vh"),I7=Cl("vw"),eb={...wr,parse:n=>wr.parse(n)/100,transform:n=>wr.transform(n*100)},xs={test:Tp("hsl","hue"),parse:t3("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:a,alpha:i=1})=>"hsla("+Math.round(n)+", "+wr.transform($o(e))+", "+wr.transform($o(a))+", "+$o(ll.transform(i))+")"},Kn={test:n=>hi.test(n)||vm.test(n)||xs.test(n),parse:n=>hi.test(n)?hi.parse(n):xs.test(n)?xs.parse(n):vm.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?hi.transform(n):xs.transform(n),getAnimatableNone:n=>{const e=Kn.parse(n);return e.alpha=0,Kn.transform(e)}},J7=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function U7(n){return isNaN(n)&&typeof n=="string"&&(n.match(wp)?.length||0)+(n.match(J7)?.length||0)>0}const r3="number",a3="color",q7="var",K7="var(",nb="${}",Y7=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function cl(n){const e=n.toString(),a=[],i={color:[],number:[],var:[]},o=[];let c=0;const f=e.replace(Y7,m=>(Kn.test(m)?(i.color.push(c),o.push(a3),a.push(Kn.parse(m))):m.startsWith(K7)?(i.var.push(c),o.push(q7),a.push(m)):(i.number.push(c),o.push(r3),a.push(parseFloat(m))),++c,nb)).split(nb);return{values:a,split:f,indexes:i,types:o}}function i3(n){return cl(n).values}function s3(n){const{split:e,types:a}=cl(n),i=e.length;return o=>{let c="";for(let u=0;u<i;u++)if(c+=e[u],o[u]!==void 0){const f=a[u];f===r3?c+=$o(o[u]):f===a3?c+=Kn.transform(o[u]):c+=o[u]}return c}}const Z7=n=>typeof n=="number"?0:Kn.test(n)?Kn.getAnimatableNone(n):n;function W7(n){const e=i3(n);return s3(n)(e.map(Z7))}const ja={test:U7,parse:i3,createTransformer:s3,getAnimatableNone:W7};function Vh(n,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?n+(e-n)*6*a:a<1/2?e:a<2/3?n+(e-n)*(2/3-a)*6:n}function X7({hue:n,saturation:e,lightness:a,alpha:i}){n/=360,e/=100,a/=100;let o=0,c=0,u=0;if(!e)o=c=u=a;else{const f=a<.5?a*(1+e):a+e-a*e,m=2*a-f;o=Vh(m,f,n+1/3),c=Vh(m,f,n),u=Vh(m,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:i}}function xu(n,e){return a=>a>0?e:n}const wn=(n,e,a)=>n+(e-n)*a,Gh=(n,e,a)=>{const i=n*n,o=a*(e*e-i)+i;return o<0?0:Math.sqrt(o)},Q7=[vm,hi,xs],$7=n=>Q7.find(e=>e.test(n));function tb(n){const e=$7(n);if(!e)return!1;let a=e.parse(n);return e===xs&&(a=X7(a)),a}const rb=(n,e)=>{const a=tb(n),i=tb(e);if(!a||!i)return xu(n,e);const o={...a};return c=>(o.red=Gh(a.red,i.red,c),o.green=Gh(a.green,i.green,c),o.blue=Gh(a.blue,i.blue,c),o.alpha=wn(a.alpha,i.alpha,c),hi.transform(o))},bm=new Set(["none","hidden"]);function e9(n,e){return bm.has(n)?a=>a<=0?n:e:a=>a>=1?e:n}function n9(n,e){return a=>wn(n,e,a)}function Dp(n){return typeof n=="number"?n9:typeof n=="string"?Ap(n)?xu:Kn.test(n)?rb:a9:Array.isArray(n)?o3:typeof n=="object"?Kn.test(n)?rb:t9:xu}function o3(n,e){const a=[...n],i=a.length,o=n.map((c,u)=>Dp(c)(c,e[u]));return c=>{for(let u=0;u<i;u++)a[u]=o[u](c);return a}}function t9(n,e){const a={...n,...e},i={};for(const o in a)n[o]!==void 0&&e[o]!==void 0&&(i[o]=Dp(n[o])(n[o],e[o]));return o=>{for(const c in i)a[c]=i[c](o);return a}}function r9(n,e){const a=[],i={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const c=e.types[o],u=n.indexes[c][i[c]],f=n.values[u]??0;a[o]=f,i[c]++}return a}const a9=(n,e)=>{const a=ja.createTransformer(e),i=cl(n),o=cl(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?bm.has(n)&&!o.values.length||bm.has(e)&&!i.values.length?e9(n,e):Sl(o3(r9(i,o),o.values),a):xu(n,e)};function l3(n,e,a){return typeof n=="number"&&typeof e=="number"&&typeof a=="number"?wn(n,e,a):Dp(n)(n,e)}const i9=n=>{const e=({timestamp:a})=>n(a);return{start:(a=!0)=>Cn.update(e,a),stop:()=>za(e),now:()=>ut.isProcessing?ut.timestamp:Et.now()}},c3=(n,e,a=10)=>{let i="";const o=Math.max(Math.round(e/a),2);for(let c=0;c<o;c++)i+=Math.round(n(c/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Su=2e4;function Ep(n){let e=0;const a=50;let i=n.next(e);for(;!i.done&&e<Su;)e+=a,i=n.next(e);return e>=Su?1/0:e}function s9(n,e=100,a){const i=a({...n,keyframes:[0,e]}),o=Math.min(Ep(i),Su);return{type:"keyframes",ease:c=>i.next(o*c).value/e,duration:$t(o)}}const o9=5;function u3(n,e,a){const i=Math.max(e-o9,0);return Ix(a-n(i),e-i)}const Rn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Fh=.001;function l9({duration:n=Rn.duration,bounce:e=Rn.bounce,velocity:a=Rn.velocity,mass:i=Rn.mass}){let o,c,u=1-e;u=Qr(Rn.minDamping,Rn.maxDamping,u),n=Qr(Rn.minDuration,Rn.maxDuration,$t(n)),u<1?(o=p=>{const y=p*u,v=y*n,S=y-a,A=xm(p,u),E=Math.exp(-v);return Fh-S/A*E},c=p=>{const v=p*u*n,S=v*a+a,A=Math.pow(u,2)*Math.pow(p,2)*n,E=Math.exp(-v),M=xm(Math.pow(p,2),u);return(-o(p)+Fh>0?-1:1)*((S-A)*E)/M}):(o=p=>{const y=Math.exp(-p*n),v=(p-a)*n+1;return-Fh+y*v},c=p=>{const y=Math.exp(-p*n),v=(a-p)*(n*n);return y*v});const f=5/n,m=u9(o,c,f);if(n=Ar(n),isNaN(m))return{stiffness:Rn.stiffness,damping:Rn.damping,duration:n};{const p=Math.pow(m,2)*i;return{stiffness:p,damping:u*2*Math.sqrt(i*p),duration:n}}}const c9=12;function u9(n,e,a){let i=a;for(let o=1;o<c9;o++)i=i-n(i)/e(i);return i}function xm(n,e){return n*Math.sqrt(1-e*e)}const d9=["duration","bounce"],f9=["stiffness","damping","mass"];function ab(n,e){return e.some(a=>n[a]!==void 0)}function h9(n){let e={velocity:Rn.velocity,stiffness:Rn.stiffness,damping:Rn.damping,mass:Rn.mass,isResolvedFromDuration:!1,...n};if(!ab(n,f9)&&ab(n,d9))if(n.visualDuration){const a=n.visualDuration,i=2*Math.PI/(a*1.2),o=i*i,c=2*Qr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Rn.mass,stiffness:o,damping:c}}else{const a=l9(n);e={...e,...a,mass:Rn.mass},e.isResolvedFromDuration=!0}return e}function Mu(n=Rn.visualDuration,e=Rn.bounce){const a=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=a;const c=a.keyframes[0],u=a.keyframes[a.keyframes.length-1],f={done:!1,value:c},{stiffness:m,damping:p,mass:y,duration:v,velocity:S,isResolvedFromDuration:A}=h9({...a,velocity:-$t(a.velocity||0)}),E=S||0,M=p/(2*Math.sqrt(m*y)),D=u-c,w=$t(Math.sqrt(m/y)),N=Math.abs(D)<5;i||(i=N?Rn.restSpeed.granular:Rn.restSpeed.default),o||(o=N?Rn.restDelta.granular:Rn.restDelta.default);let P;if(M<1){const O=xm(w,M);P=q=>{const B=Math.exp(-M*w*q);return u-B*((E+M*w*D)/O*Math.sin(O*q)+D*Math.cos(O*q))}}else if(M===1)P=O=>u-Math.exp(-w*O)*(D+(E+w*D)*O);else{const O=w*Math.sqrt(M*M-1);P=q=>{const B=Math.exp(-M*w*q),G=Math.min(O*q,300);return u-B*((E+M*w*D)*Math.sinh(G)+O*D*Math.cosh(G))/O}}const j={calculatedDuration:A&&v||null,next:O=>{const q=P(O);if(A)f.done=O>=v;else{let B=O===0?E:0;M<1&&(B=O===0?Ar(E):u3(P,O,q));const G=Math.abs(B)<=i,Q=Math.abs(u-q)<=o;f.done=G&&Q}return f.value=f.done?u:q,f},toString:()=>{const O=Math.min(Ep(j),Su),q=c3(B=>j.next(O*B).value,O,30);return O+"ms "+q},toTransition:()=>{}};return j}Mu.applyToOptions=n=>{const e=s9(n,100,Mu);return n.ease=e.ease,n.duration=Ar(e.duration),n.type="keyframes",n};function Sm({keyframes:n,velocity:e=0,power:a=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:m,restDelta:p=.5,restSpeed:y}){const v=n[0],S={done:!1,value:v},A=G=>f!==void 0&&G<f||m!==void 0&&G>m,E=G=>f===void 0?m:m===void 0||Math.abs(f-G)<Math.abs(m-G)?f:m;let M=a*e;const D=v+M,w=u===void 0?D:u(D);w!==D&&(M=w-v);const N=G=>-M*Math.exp(-G/i),P=G=>w+N(G),j=G=>{const Q=N(G),ae=P(G);S.done=Math.abs(Q)<=p,S.value=S.done?w:ae};let O,q;const B=G=>{A(S.value)&&(O=G,q=Mu({keyframes:[S.value,E(S.value)],velocity:u3(P,G,S.value),damping:o,stiffness:c,restDelta:p,restSpeed:y}))};return B(0),{calculatedDuration:null,next:G=>{let Q=!1;return!q&&O===void 0&&(Q=!0,j(G),B(G)),O!==void 0&&G>=O?q.next(G-O):(!Q&&j(G),S)}}}function m9(n,e,a){const i=[],o=a||$r.mix||l3,c=n.length-1;for(let u=0;u<c;u++){let f=o(n[u],n[u+1]);if(e){const m=Array.isArray(e)?e[u]||nr:e;f=Sl(m,f)}i.push(f)}return i}function p9(n,e,{clamp:a=!0,ease:i,mixer:o}={}){const c=n.length;if(vp(c===e.length),c===1)return()=>e[0];if(c===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[c-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=m9(e,i,o),m=f.length,p=y=>{if(u&&y<n[0])return e[0];let v=0;if(m>1)for(;v<n.length-2&&!(y<n[v+1]);v++);const S=ol(n[v],n[v+1],y);return f[v](S)};return a?y=>p(Qr(n[0],n[c-1],y)):p}function g9(n,e){const a=n[n.length-1];for(let i=1;i<=e;i++){const o=ol(0,e,i);n.push(wn(a,1,o))}}function y9(n){const e=[0];return g9(e,n.length-1),e}function v9(n,e){return n.map(a=>a*e)}function b9(n,e){return n.map(()=>e||Qx).splice(0,n.length-1)}function el({duration:n=300,keyframes:e,times:a,ease:i="easeInOut"}){const o=R7(i)?i.map($0):$0(i),c={done:!1,value:e[0]},u=v9(a&&a.length===e.length?a:y9(e),n),f=p9(u,e,{ease:Array.isArray(o)?o:b9(e,o)});return{calculatedDuration:n,next:m=>(c.value=f(m),c.done=m>=n,c)}}const x9=n=>n!==null;function Np(n,{repeat:e,repeatType:a="loop"},i,o=1){const c=n.filter(x9),f=o<0||e&&a!=="loop"&&e%2===1?0:c.length-1;return!f||i===void 0?c[f]:i}const S9={decay:Sm,inertia:Sm,tween:el,keyframes:el,spring:Mu};function d3(n){typeof n.type=="string"&&(n.type=S9[n.type])}class Rp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,a){return this.finished.then(e,a)}}const M9=n=>n/100;class kp extends Rp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:a}=this.options;a&&a.updatedAt!==Et.now()&&this.tick(Et.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;d3(e);const{type:a=el,repeat:i=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=e;let{keyframes:f}=e;const m=a||el;m!==el&&typeof f[0]!="number"&&(this.mixKeyframes=Sl(M9,l3(f[0],f[1])),f=[0,100]);const p=m({...e,keyframes:f});c==="mirror"&&(this.mirroredGenerator=m({...e,keyframes:[...f].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=Ep(p));const{calculatedDuration:y}=p;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=p}updateTime(e){const a=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(e,a=!1){const{generator:i,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:m}=this;if(this.startTime===null)return i.next(0);const{delay:p=0,keyframes:y,repeat:v,repeatType:S,repeatDelay:A,type:E,onUpdate:M,finalKeyframe:D}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),a?this.currentTime=e:this.updateTime(e);const w=this.currentTime-p*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?w<0:w>o;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let P=this.currentTime,j=i;if(v){const G=Math.min(this.currentTime,o)/f;let Q=Math.floor(G),ae=G%1;!ae&&G>=1&&(ae=1),ae===1&&Q--,Q=Math.min(Q,v+1),!!(Q%2)&&(S==="reverse"?(ae=1-ae,A&&(ae-=A/f)):S==="mirror"&&(j=u)),P=Qr(0,1,ae)*f}const O=N?{done:!1,value:y[0]}:j.next(P);c&&(O.value=c(O.value));let{done:q}=O;!N&&m!==null&&(q=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const B=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&q);return B&&E!==Sm&&(O.value=Np(y,this.options,D,this.speed)),M&&M(O.value),B&&this.finish(),O}then(e,a){return this.finished.then(e,a)}get duration(){return $t(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+$t(e)}get time(){return $t(this.currentTime)}set time(e){e=Ar(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Et.now());const a=this.playbackSpeed!==e;this.playbackSpeed=e,a&&(this.time=$t(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=i9,startTime:a}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=a??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Et.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function C9(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const mi=n=>n*180/Math.PI,Mm=n=>{const e=mi(Math.atan2(n[1],n[0]));return Cm(e)},A9={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Mm,rotateZ:Mm,skewX:n=>mi(Math.atan(n[1])),skewY:n=>mi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Cm=n=>(n=n%360,n<0&&(n+=360),n),ib=Mm,sb=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),ob=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),w9={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sb,scaleY:ob,scale:n=>(sb(n)+ob(n))/2,rotateX:n=>Cm(mi(Math.atan2(n[6],n[5]))),rotateY:n=>Cm(mi(Math.atan2(-n[2],n[0]))),rotateZ:ib,rotate:ib,skewX:n=>mi(Math.atan(n[4])),skewY:n=>mi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Am(n){return n.includes("scale")?1:0}function wm(n,e){if(!n||n==="none")return Am(e);const a=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(a)i=w9,o=a;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=A9,o=f}if(!o)return Am(e);const c=i[e],u=o[1].split(",").map(D9);return typeof c=="function"?c(u):u[c]}const T9=(n,e)=>{const{transform:a="none"}=getComputedStyle(n);return wm(a,e)};function D9(n){return parseFloat(n.trim())}const Js=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Us=new Set(Js),lb=n=>n===Is||n===Oe,E9=new Set(["x","y","z"]),N9=Js.filter(n=>!E9.has(n));function R9(n){const e=[];return N9.forEach(a=>{const i=n.getValue(a);i!==void 0&&(e.push([a,i.get()]),i.set(a.startsWith("scale")?1:0))}),e}const yi={width:({x:n},{paddingLeft:e="0",paddingRight:a="0"})=>n.max-n.min-parseFloat(e)-parseFloat(a),height:({y:n},{paddingTop:e="0",paddingBottom:a="0"})=>n.max-n.min-parseFloat(e)-parseFloat(a),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>wm(e,"x"),y:(n,{transform:e})=>wm(e,"y")};yi.translateX=yi.x;yi.translateY=yi.y;const vi=new Set;let Tm=!1,Dm=!1,Em=!1;function f3(){if(Dm){const n=Array.from(vi).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),a=new Map;e.forEach(i=>{const o=R9(i);o.length&&(a.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=a.get(i);o&&o.forEach(([c,u])=>{i.getValue(c)?.set(u)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Dm=!1,Tm=!1,vi.forEach(n=>n.complete(Em)),vi.clear()}function h3(){vi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Dm=!0)})}function k9(){Em=!0,h3(),f3(),Em=!1}class Pp{constructor(e,a,i,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=a,this.name=i,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(vi.add(this),Tm||(Tm=!0,Cn.read(h3),Cn.resolveKeyframes(f3))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:a,element:i,motionValue:o}=this;if(e[0]===null){const c=o?.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(i&&a){const f=i.readValue(a,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}C9(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),vi.delete(this)}cancel(){this.state==="scheduled"&&(vi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const P9=n=>n.startsWith("--");function B9(n,e,a){P9(e)?n.style.setProperty(e,a):n.style[e]=a}const L9=bp(()=>window.ScrollTimeline!==void 0),_9={};function O9(n,e){const a=bp(n);return()=>_9[e]??a()}const m3=O9(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Wo=([n,e,a,i])=>`cubic-bezier(${n}, ${e}, ${a}, ${i})`,cb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Wo([0,.65,.55,1]),circOut:Wo([.55,0,1,.45]),backIn:Wo([.31,.01,.66,-.59]),backOut:Wo([.33,1.53,.69,.99])};function p3(n,e){if(n)return typeof n=="function"?m3()?c3(n,e):"ease-out":$x(n)?Wo(n):Array.isArray(n)?n.map(a=>p3(a,e)||cb.easeOut):cb[n]}function z9(n,e,a,{delay:i=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:m}={},p=void 0){const y={[e]:a};m&&(y.offset=m);const v=p3(f,o);Array.isArray(v)&&(y.easing=v);const S={delay:i,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return p&&(S.pseudoElement=p),n.animate(y,S)}function g3(n){return typeof n=="function"&&"applyToOptions"in n}function j9({type:n,...e}){return g3(n)&&m3()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class V9 extends Rp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:a,name:i,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:m}=e;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=e,vp(typeof e.type!="string");const p=j9(e);this.animation=z9(a,i,o,p,c),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=Np(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(y):B9(a,i,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return $t(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+$t(e)}get time(){return $t(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Ar(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:a}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&L9()?(this.animation.timeline=e,nr):a(this)}}const y3={anticipate:Zx,backInOut:Yx,circInOut:Xx};function G9(n){return n in y3}function F9(n){typeof n.ease=="string"&&G9(n.ease)&&(n.ease=y3[n.ease])}const ub=10;class H9 extends V9{constructor(e){F9(e),d3(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:a,onUpdate:i,onComplete:o,element:c,...u}=this.options;if(!a)return;if(e!==void 0){a.set(e);return}const f=new kp({...u,autoplay:!1}),m=Ar(this.finishedTime??this.time);a.setWithVelocity(f.sample(m-ub).value,f.sample(m).value,ub),f.stop()}}const db=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ja.test(n)||n==="0")&&!n.startsWith("url("));function I9(n){const e=n[0];if(n.length===1)return!0;for(let a=0;a<n.length;a++)if(n[a]!==e)return!0}function J9(n,e,a,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const c=n[n.length-1],u=db(o,e),f=db(c,e);return!u||!f?!1:I9(n)||(a==="spring"||g3(a))&&i}function Nm(n){n.duration=0,n.type="keyframes"}const U9=new Set(["opacity","clipPath","filter","transform"]),q9=bp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function K9(n){const{motionValue:e,name:a,repeatDelay:i,repeatType:o,damping:c,type:u}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:p}=e.owner.getProps();return q9()&&a&&U9.has(a)&&(a!=="transform"||!p)&&!m&&!i&&o!=="mirror"&&c!==0&&u!=="inertia"}const Y9=40;class Z9 extends Rp{constructor({autoplay:e=!0,delay:a=0,type:i="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:m,motionValue:p,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Et.now();const S={autoplay:e,delay:a,type:i,repeat:o,repeatDelay:c,repeatType:u,name:m,motionValue:p,element:y,...v},A=y?.KeyframeResolver||Pp;this.keyframeResolver=new A(f,(E,M,D)=>this.onKeyframesResolved(E,M,S,!D),m,p,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,a,i,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:m,isHandoff:p,onUpdate:y}=i;this.resolvedAt=Et.now(),J9(e,c,u,f)||(($r.instantAnimations||!m)&&y?.(Np(e,i,a)),e[0]=e[e.length-1],Nm(i),i.repeat=0);const S={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>Y9?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...i,keyframes:e},A=!p&&K9(S)?new H9({...S,element:S.motionValue.owner.current}):new kp(S);A.finished.then(()=>this.notifyFinished()).catch(nr),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(e,a){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),k9()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const W9=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function X9(n){const e=W9.exec(n);if(!e)return[,];const[,a,i,o]=e;return[`--${a??i}`,o]}function v3(n,e,a=1){const[i,o]=X9(n);if(!i)return;const c=window.getComputedStyle(e).getPropertyValue(i);if(c){const u=c.trim();return Gx(u)?parseFloat(u):u}return Ap(o)?v3(o,e,a+1):o}function Bp(n,e){return n?.[e]??n?.default??n}const b3=new Set(["width","height","top","left","right","bottom",...Js]),Q9={test:n=>n==="auto",parse:n=>n},x3=n=>e=>e.test(n),S3=[Is,Oe,wr,Ea,I7,H7,Q9],fb=n=>S3.find(x3(n));function $9(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Hx(n):!0}const eD=new Set(["brightness","contrast","saturate","opacity"]);function nD(n){const[e,a]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=a.match(wp)||[];if(!i)return n;const o=a.replace(i,"");let c=eD.has(e)?1:0;return i!==a&&(c*=100),e+"("+c+o+")"}const tD=/\b([a-z-]*)\(.*?\)/gu,Rm={...ja,getAnimatableNone:n=>{const e=n.match(tD);return e?e.map(nD).join(" "):n}},hb={...Is,transform:Math.round},rD={rotate:Ea,rotateX:Ea,rotateY:Ea,rotateZ:Ea,scale:eu,scaleX:eu,scaleY:eu,scaleZ:eu,skew:Ea,skewX:Ea,skewY:Ea,distance:Oe,translateX:Oe,translateY:Oe,translateZ:Oe,x:Oe,y:Oe,z:Oe,perspective:Oe,transformPerspective:Oe,opacity:ll,originX:eb,originY:eb,originZ:Oe},Lp={borderWidth:Oe,borderTopWidth:Oe,borderRightWidth:Oe,borderBottomWidth:Oe,borderLeftWidth:Oe,borderRadius:Oe,radius:Oe,borderTopLeftRadius:Oe,borderTopRightRadius:Oe,borderBottomRightRadius:Oe,borderBottomLeftRadius:Oe,width:Oe,maxWidth:Oe,height:Oe,maxHeight:Oe,top:Oe,right:Oe,bottom:Oe,left:Oe,padding:Oe,paddingTop:Oe,paddingRight:Oe,paddingBottom:Oe,paddingLeft:Oe,margin:Oe,marginTop:Oe,marginRight:Oe,marginBottom:Oe,marginLeft:Oe,backgroundPositionX:Oe,backgroundPositionY:Oe,...rD,zIndex:hb,fillOpacity:ll,strokeOpacity:ll,numOctaves:hb},aD={...Lp,color:Kn,backgroundColor:Kn,outlineColor:Kn,fill:Kn,stroke:Kn,borderColor:Kn,borderTopColor:Kn,borderRightColor:Kn,borderBottomColor:Kn,borderLeftColor:Kn,filter:Rm,WebkitFilter:Rm},M3=n=>aD[n];function C3(n,e){let a=M3(n);return a!==Rm&&(a=ja),a.getAnimatableNone?a.getAnimatableNone(e):void 0}const iD=new Set(["auto","none","0"]);function sD(n,e,a){let i=0,o;for(;i<n.length&&!o;){const c=n[i];typeof c=="string"&&!iD.has(c)&&cl(c).values.length&&(o=n[i]),i++}if(o&&a)for(const c of e)n[c]=C3(a,o)}class oD extends Pp{constructor(e,a,i,o,c){super(e,a,i,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:a,name:i}=this;if(!a||!a.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let p=e[m];if(typeof p=="string"&&(p=p.trim(),Ap(p))){const y=v3(p,a.current);y!==void 0&&(e[m]=y),m===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!b3.has(i)||e.length!==2)return;const[o,c]=e,u=fb(o),f=fb(c);if(u!==f)if(lb(u)&&lb(f))for(let m=0;m<e.length;m++){const p=e[m];typeof p=="string"&&(e[m]=parseFloat(p))}else yi[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:a}=this,i=[];for(let o=0;o<e.length;o++)(e[o]===null||$9(e[o]))&&i.push(o);i.length&&sD(e,i,a)}measureInitialState(){const{element:e,unresolvedKeyframes:a,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yi[i](e.measureViewportBox(),window.getComputedStyle(e.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){const{element:e,name:a,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const o=e.getValue(a);o&&o.jump(this.measuredOrigin,!1);const c=i.length-1,u=i[c];i[c]=yi[a](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,m])=>{e.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function lD(n,e,a){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const o=a?.[n]??i.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const A3=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function w3(n){return Fx(n)&&"offsetHeight"in n}const mb=30,cD=n=>!isNaN(parseFloat(n));class uD{constructor(e,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const o=Et.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=a.owner}setCurrent(e){this.current=e,this.updatedAt=Et.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=cD(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,a){this.events[e]||(this.events[e]=new xp);const i=this.events[e].add(a);return e==="change"?()=>{i(),Cn.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,a){this.passiveEffect=e,this.stopPassiveEffect=a}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,a,i){this.set(a),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,a=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Et.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>mb)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,mb);return Ix(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(e){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=e(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Rs(n,e){return new uD(n,e)}const{schedule:_p}=e3(queueMicrotask,!1),lr={x:!1,y:!1};function T3(){return lr.x||lr.y}function dD(n){return n==="x"||n==="y"?lr[n]?null:(lr[n]=!0,()=>{lr[n]=!1}):lr.x||lr.y?null:(lr.x=lr.y=!0,()=>{lr.x=lr.y=!1})}function D3(n,e){const a=lD(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[a,o,()=>i.abort()]}function pb(n){return!(n.pointerType==="touch"||T3())}function fD(n,e,a={}){const[i,o,c]=D3(n,a),u=f=>{if(!pb(f))return;const{target:m}=f,p=e(m,f);if(typeof p!="function"||!m)return;const y=v=>{pb(v)&&(p(v),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,o)};return i.forEach(f=>{f.addEventListener("pointerenter",u,o)}),c}const E3=(n,e)=>e?n===e?!0:E3(n,e.parentElement):!1,Op=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,hD=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function mD(n){return hD.has(n.tagName)||n.tabIndex!==-1}const lu=new WeakSet;function gb(n){return e=>{e.key==="Enter"&&n(e)}}function Hh(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const pD=(n,e)=>{const a=n.currentTarget;if(!a)return;const i=gb(()=>{if(lu.has(a))return;Hh(a,"down");const o=gb(()=>{Hh(a,"up")}),c=()=>Hh(a,"cancel");a.addEventListener("keyup",o,e),a.addEventListener("blur",c,e)});a.addEventListener("keydown",i,e),a.addEventListener("blur",()=>a.removeEventListener("keydown",i),e)};function yb(n){return Op(n)&&!T3()}function gD(n,e,a={}){const[i,o,c]=D3(n,a),u=f=>{const m=f.currentTarget;if(!yb(f))return;lu.add(m);const p=e(m,f),y=(A,E)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",S),lu.has(m)&&lu.delete(m),yb(A)&&typeof p=="function"&&p(A,{success:E})},v=A=>{y(A,m===window||m===document||a.useGlobalTarget||E3(m,A.target))},S=A=>{y(A,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",S,o)};return i.forEach(f=>{(a.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),w3(f)&&(f.addEventListener("focus",p=>pD(p,o)),!mD(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function N3(n){return Fx(n)&&"ownerSVGElement"in n}function yD(n){return N3(n)&&n.tagName==="svg"}const pt=n=>!!(n&&n.getVelocity),vD=[...S3,Kn,ja],bD=n=>vD.find(x3(n)),zp=x.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function vb(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function xD(...n){return e=>{let a=!1;const i=n.map(o=>{const c=vb(o,e);return!a&&typeof c=="function"&&(a=!0),c});if(a)return()=>{for(let o=0;o<i.length;o++){const c=i[o];typeof c=="function"?c():vb(n[o],null)}}}}function SD(...n){return x.useCallback(xD(...n),n)}class MD extends x.Component{getSnapshotBeforeUpdate(e){const a=this.props.childRef.current;if(a&&e.isPresent&&!this.props.isPresent){const i=a.offsetParent,o=w3(i)&&i.offsetWidth||0,c=this.props.sizeRef.current;c.height=a.offsetHeight||0,c.width=a.offsetWidth||0,c.top=a.offsetTop,c.left=a.offsetLeft,c.right=o-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function CD({children:n,isPresent:e,anchorX:a,root:i}){const o=x.useId(),c=x.useRef(null),u=x.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=x.useContext(zp),m=SD(c,n?.ref);return x.useInsertionEffect(()=>{const{width:p,height:y,top:v,left:S,right:A}=u.current;if(e||!c.current||!p||!y)return;const E=a==="left"?`left: ${S}`:`right: ${A}`;c.current.dataset.motionPopId=o;const M=document.createElement("style");f&&(M.nonce=f);const D=i??document.head;return D.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${y}px !important;
            ${E}px !important;
            top: ${v}px !important;
          }
        `),()=>{D.contains(M)&&D.removeChild(M)}},[e]),g.jsx(MD,{isPresent:e,childRef:c,sizeRef:u,children:x.cloneElement(n,{ref:m})})}const AD=({children:n,initial:e,isPresent:a,onExitComplete:i,custom:o,presenceAffectsLayout:c,mode:u,anchorX:f,root:m})=>{const p=mp(wD),y=x.useId();let v=!0,S=x.useMemo(()=>(v=!1,{id:y,initial:e,isPresent:a,custom:o,onExitComplete:A=>{p.set(A,!0);for(const E of p.values())if(!E)return;i&&i()},register:A=>(p.set(A,!1),()=>p.delete(A))}),[a,p,i]);return c&&v&&(S={...S}),x.useMemo(()=>{p.forEach((A,E)=>p.set(E,!1))},[a]),x.useEffect(()=>{!a&&!p.size&&i&&i()},[a]),u==="popLayout"&&(n=g.jsx(CD,{isPresent:a,anchorX:f,root:m,children:n})),g.jsx(Zu.Provider,{value:S,children:n})};function wD(){return new Map}function R3(n=!0){const e=x.useContext(Zu);if(e===null)return[!0,null];const{isPresent:a,onExitComplete:i,register:o}=e,c=x.useId();x.useEffect(()=>{if(n)return o(c)},[n]);const u=x.useCallback(()=>n&&i&&i(c),[c,i,n]);return!a&&i?[!1,u]:[!0]}const nu=n=>n.key||"";function bb(n){const e=[];return x.Children.forEach(n,a=>{x.isValidElement(a)&&e.push(a)}),e}const cu=({children:n,custom:e,initial:a=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:c="sync",propagate:u=!1,anchorX:f="left",root:m})=>{const[p,y]=R3(u),v=x.useMemo(()=>bb(n),[n]),S=u&&!p?[]:v.map(nu),A=x.useRef(!0),E=x.useRef(v),M=mp(()=>new Map),[D,w]=x.useState(v),[N,P]=x.useState(v);Vx(()=>{A.current=!1,E.current=v;for(let q=0;q<N.length;q++){const B=nu(N[q]);S.includes(B)?M.delete(B):M.get(B)!==!0&&M.set(B,!1)}},[N,S.length,S.join("-")]);const j=[];if(v!==D){let q=[...v];for(let B=0;B<N.length;B++){const G=N[B],Q=nu(G);S.includes(Q)||(q.splice(B,0,G),j.push(G))}return c==="wait"&&j.length&&(q=j),P(bb(q)),w(v),null}const{forceRender:O}=x.useContext(hp);return g.jsx(g.Fragment,{children:N.map(q=>{const B=nu(q),G=u&&!p?!1:v===N||S.includes(B),Q=()=>{if(M.has(B))M.set(B,!0);else return;let ae=!0;M.forEach(de=>{de||(ae=!1)}),ae&&(O?.(),P(E.current),u&&y?.(),i&&i())};return g.jsx(AD,{isPresent:G,initial:!A.current||a?void 0:!1,custom:e,presenceAffectsLayout:o,mode:c,root:m,onExitComplete:G?void 0:Q,anchorX:f,children:q},B)})})},k3=x.createContext({strict:!1}),xb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ks={};for(const n in xb)ks[n]={isEnabled:e=>xb[n].some(a=>!!e[a])};function TD(n){for(const e in n)ks[e]={...ks[e],...n[e]}}const DD=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Cu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||DD.has(n)}let P3=n=>!Cu(n);function ED(n){typeof n=="function"&&(P3=e=>e.startsWith("on")?!Cu(e):n(e))}try{ED(require("@emotion/is-prop-valid").default)}catch{}function ND(n,e,a){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||(P3(o)||a===!0&&Cu(o)||!e&&!Cu(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}const Wu=x.createContext({});function Xu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ul(n){return typeof n=="string"||Array.isArray(n)}const jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...jp];function Qu(n){return Xu(n.animate)||Vp.some(e=>ul(n[e]))}function B3(n){return!!(Qu(n)||n.variants)}function RD(n,e){if(Qu(n)){const{initial:a,animate:i}=n;return{initial:a===!1||ul(a)?a:void 0,animate:ul(i)?i:void 0}}return n.inherit!==!1?e:{}}function kD(n){const{initial:e,animate:a}=RD(n,x.useContext(Wu));return x.useMemo(()=>({initial:e,animate:a}),[Sb(e),Sb(a)])}function Sb(n){return Array.isArray(n)?n.join(" "):n}const dl={};function PD(n){for(const e in n)dl[e]=n[e],Cp(e)&&(dl[e].isCSSVariable=!0)}function L3(n,{layout:e,layoutId:a}){return Us.has(n)||n.startsWith("origin")||(e||a!==void 0)&&(!!dl[n]||n==="opacity")}const BD={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LD=Js.length;function _D(n,e,a){let i="",o=!0;for(let c=0;c<LD;c++){const u=Js[c],f=n[u];if(f===void 0)continue;let m=!0;if(typeof f=="number"?m=f===(u.startsWith("scale")?1:0):m=parseFloat(f)===0,!m||a){const p=A3(f,Lp[u]);if(!m){o=!1;const y=BD[u]||u;i+=`${y}(${p}) `}a&&(e[u]=p)}}return i=i.trim(),a?i=a(e,o?"":i):o&&(i="none"),i}function Gp(n,e,a){const{style:i,vars:o,transformOrigin:c}=n;let u=!1,f=!1;for(const m in e){const p=e[m];if(Us.has(m)){u=!0;continue}else if(Cp(m)){o[m]=p;continue}else{const y=A3(p,Lp[m]);m.startsWith("origin")?(f=!0,c[m]=y):i[m]=y}}if(e.transform||(u||a?i.transform=_D(e,n.transform,a):i.transform&&(i.transform="none")),f){const{originX:m="50%",originY:p="50%",originZ:y=0}=c;i.transformOrigin=`${m} ${p} ${y}`}}const Fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function _3(n,e,a){for(const i in e)!pt(e[i])&&!L3(i,a)&&(n[i]=e[i])}function OD({transformTemplate:n},e){return x.useMemo(()=>{const a=Fp();return Gp(a,e,n),Object.assign({},a.vars,a.style)},[e])}function zD(n,e){const a=n.style||{},i={};return _3(i,a,n),Object.assign(i,OD(n,e)),i}function jD(n,e){const a={},i=zD(n,e);return n.drag&&n.dragListener!==!1&&(a.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(a.tabIndex=0),a.style=i,a}const VD={offset:"stroke-dashoffset",array:"stroke-dasharray"},GD={offset:"strokeDashoffset",array:"strokeDasharray"};function FD(n,e,a=1,i=0,o=!0){n.pathLength=1;const c=o?VD:GD;n[c.offset]=Oe.transform(-i);const u=Oe.transform(e),f=Oe.transform(a);n[c.array]=`${u} ${f}`}function O3(n,{attrX:e,attrY:a,attrScale:i,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...f},m,p,y){if(Gp(n,f,p),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:S}=n;v.transform&&(S.transform=v.transform,delete v.transform),(S.transform||v.transformOrigin)&&(S.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete v.transformBox),e!==void 0&&(v.x=e),a!==void 0&&(v.y=a),i!==void 0&&(v.scale=i),o!==void 0&&FD(v,o,c,u,!1)}const z3=()=>({...Fp(),attrs:{}}),j3=n=>typeof n=="string"&&n.toLowerCase()==="svg";function HD(n,e,a,i){const o=x.useMemo(()=>{const c=z3();return O3(c,e,j3(i),n.transformTemplate,n.style),{...c.attrs,style:{...c.style}}},[e]);if(n.style){const c={};_3(c,n.style,n),o.style={...c,...o.style}}return o}const ID=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hp(n){return typeof n!="string"||n.includes("-")?!1:!!(ID.indexOf(n)>-1||/[A-Z]/u.test(n))}function JD(n,e,a,{latestValues:i},o,c=!1){const f=(Hp(n)?HD:jD)(e,i,o,n),m=ND(e,typeof n=="string",c),p=n!==x.Fragment?{...m,...f,ref:a}:{},{children:y}=e,v=x.useMemo(()=>pt(y)?y.get():y,[y]);return x.createElement(n,{...p,children:v})}function Mb(n){const e=[{},{}];return n?.values.forEach((a,i)=>{e[0][i]=a.get(),e[1][i]=a.getVelocity()}),e}function Ip(n,e,a,i){if(typeof e=="function"){const[o,c]=Mb(i);e=e(a!==void 0?a:n.custom,o,c)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,c]=Mb(i);e=e(a!==void 0?a:n.custom,o,c)}return e}function uu(n){return pt(n)?n.get():n}function UD({scrapeMotionValuesFromProps:n,createRenderState:e},a,i,o){return{latestValues:qD(a,i,o,n),renderState:e()}}function qD(n,e,a,i){const o={},c=i(n,{});for(const S in c)o[S]=uu(c[S]);let{initial:u,animate:f}=n;const m=Qu(n),p=B3(n);e&&p&&!m&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let y=a?a.initial===!1:!1;y=y||u===!1;const v=y?f:u;if(v&&typeof v!="boolean"&&!Xu(v)){const S=Array.isArray(v)?v:[v];for(let A=0;A<S.length;A++){const E=Ip(n,S[A]);if(E){const{transitionEnd:M,transition:D,...w}=E;for(const N in w){let P=w[N];if(Array.isArray(P)){const j=y?P.length-1:0;P=P[j]}P!==null&&(o[N]=P)}for(const N in M)o[N]=M[N]}}}return o}const V3=n=>(e,a)=>{const i=x.useContext(Wu),o=x.useContext(Zu),c=()=>UD(n,e,i,o);return a?c():mp(c)};function Jp(n,e,a){const{style:i}=n,o={};for(const c in i)(pt(i[c])||e.style&&pt(e.style[c])||L3(c,n)||a?.getValue(c)?.liveStyle!==void 0)&&(o[c]=i[c]);return o}const KD=V3({scrapeMotionValuesFromProps:Jp,createRenderState:Fp});function G3(n,e,a){const i=Jp(n,e,a);for(const o in n)if(pt(n[o])||pt(e[o])){const c=Js.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[c]=n[o]}return i}const YD=V3({scrapeMotionValuesFromProps:G3,createRenderState:z3}),ZD=Symbol.for("motionComponentSymbol");function Ss(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function WD(n,e,a){return x.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),a&&(typeof a=="function"?a(i):Ss(a)&&(a.current=i))},[e])}const Up=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),XD="framerAppearId",F3="data-"+Up(XD),H3=x.createContext({});function QD(n,e,a,i,o){const{visualElement:c}=x.useContext(Wu),u=x.useContext(k3),f=x.useContext(Zu),m=x.useContext(zp).reducedMotion,p=x.useRef(null);i=i||u.renderer,!p.current&&i&&(p.current=i(n,{visualState:e,parent:c,props:a,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:m}));const y=p.current,v=x.useContext(H3);y&&!y.projection&&o&&(y.type==="html"||y.type==="svg")&&$D(p.current,a,o,v);const S=x.useRef(!1);x.useInsertionEffect(()=>{y&&S.current&&y.update(a,f)});const A=a[F3],E=x.useRef(!!A&&!window.MotionHandoffIsComplete?.(A)&&window.MotionHasOptimisedAnimation?.(A));return Vx(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),E.current&&y.animationState&&y.animationState.animateChanges())}),x.useEffect(()=>{y&&(!E.current&&y.animationState&&y.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(A)}),E.current=!1),y.enteringChildren=void 0)}),y}function $D(n,e,a,i){const{layoutId:o,layout:c,drag:u,dragConstraints:f,layoutScroll:m,layoutRoot:p,layoutCrossfade:y}=e;n.projection=new a(n.latestValues,e["data-framer-portal-id"]?void 0:I3(n.parent)),n.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||f&&Ss(f),visualElement:n,animationType:typeof c=="string"?c:"both",initialPromotionConfig:i,crossfade:y,layoutScroll:m,layoutRoot:p})}function I3(n){if(n)return n.options.allowProjection!==!1?n.projection:I3(n.parent)}function Ih(n,{forwardMotionProps:e=!1}={},a,i){a&&TD(a);const o=Hp(n)?YD:KD;function c(f,m){let p;const y={...x.useContext(zp),...f,layoutId:eE(f)},{isStatic:v}=y,S=kD(f),A=o(f,v);if(!v&&pp){nE();const E=tE(y);p=E.MeasureLayout,S.visualElement=QD(n,A,y,i,E.ProjectionNode)}return g.jsxs(Wu.Provider,{value:S,children:[p&&S.visualElement?g.jsx(p,{visualElement:S.visualElement,...y}):null,JD(n,f,WD(A,S.visualElement,m),A,v,e)]})}c.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const u=x.forwardRef(c);return u[ZD]=n,u}function eE({layoutId:n}){const e=x.useContext(hp).id;return e&&n!==void 0?e+"-"+n:n}function nE(n,e){x.useContext(k3).strict}function tE(n){const{drag:e,layout:a}=ks;if(!e&&!a)return{};const i={...e,...a};return{MeasureLayout:e?.isEnabled(n)||a?.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function rE(n,e){if(typeof Proxy>"u")return Ih;const a=new Map,i=(c,u)=>Ih(c,u,n,e),o=(c,u)=>i(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?i:(a.has(u)||a.set(u,Ih(u,void 0,n,e)),a.get(u))})}function J3({top:n,left:e,right:a,bottom:i}){return{x:{min:e,max:a},y:{min:n,max:i}}}function aE({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function iE(n,e){if(!e)return n;const a=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:a.y,left:a.x,bottom:i.y,right:i.x}}function Jh(n){return n===void 0||n===1}function km({scale:n,scaleX:e,scaleY:a}){return!Jh(n)||!Jh(e)||!Jh(a)}function di(n){return km(n)||U3(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function U3(n){return Cb(n.x)||Cb(n.y)}function Cb(n){return n&&n!=="0%"}function Au(n,e,a){const i=n-a,o=e*i;return a+o}function Ab(n,e,a,i,o){return o!==void 0&&(n=Au(n,o,i)),Au(n,a,i)+e}function Pm(n,e=0,a=1,i,o){n.min=Ab(n.min,e,a,i,o),n.max=Ab(n.max,e,a,i,o)}function q3(n,{x:e,y:a}){Pm(n.x,e.translate,e.scale,e.originPoint),Pm(n.y,a.translate,a.scale,a.originPoint)}const wb=.999999999999,Tb=1.0000000000001;function sE(n,e,a,i=!1){const o=a.length;if(!o)return;e.x=e.y=1;let c,u;for(let f=0;f<o;f++){c=a[f],u=c.projectionDelta;const{visualElement:m}=c.options;m&&m.props.style&&m.props.style.display==="contents"||(i&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Cs(n,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,q3(n,u)),i&&di(c.latestValues)&&Cs(n,c.latestValues))}e.x<Tb&&e.x>wb&&(e.x=1),e.y<Tb&&e.y>wb&&(e.y=1)}function Ms(n,e){n.min=n.min+e,n.max=n.max+e}function Db(n,e,a,i,o=.5){const c=wn(n.min,n.max,o);Pm(n,e,a,c,i)}function Cs(n,e){Db(n.x,e.x,e.scaleX,e.scale,e.originX),Db(n.y,e.y,e.scaleY,e.scale,e.originY)}function K3(n,e){return J3(iE(n.getBoundingClientRect(),e))}function oE(n,e,a){const i=K3(n,a),{scroll:o}=e;return o&&(Ms(i.x,o.offset.x),Ms(i.y,o.offset.y)),i}const Eb=()=>({translate:0,scale:1,origin:0,originPoint:0}),As=()=>({x:Eb(),y:Eb()}),Nb=()=>({min:0,max:0}),Qn=()=>({x:Nb(),y:Nb()}),Bm={current:null},Y3={current:!1};function lE(){if(Y3.current=!0,!!pp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Bm.current=n.matches;n.addEventListener("change",e),e()}else Bm.current=!1}const cE=new WeakMap;function uE(n,e,a){for(const i in e){const o=e[i],c=a[i];if(pt(o))n.addValue(i,o);else if(pt(c))n.addValue(i,Rs(o,{owner:n}));else if(c!==o)if(n.hasValue(i)){const u=n.getValue(i);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(i);n.addValue(i,Rs(u!==void 0?u:o,{owner:n}))}}for(const i in a)e[i]===void 0&&n.removeValue(i);return e}const Rb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class dE{scrapeMotionValuesFromProps(e,a,i){return{}}constructor({parent:e,props:a,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:c,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Et.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Cn.render(this.render,!1,!0))};const{latestValues:m,renderState:p}=u;this.latestValues=m,this.baseTarget={...m},this.initialValues=a.initial?{...m}:{},this.renderState=p,this.parent=e,this.props=a,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!c,this.isControllingVariants=Qu(a),this.isVariantNode=B3(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(a,{},this);for(const S in v){const A=v[S];m[S]!==void 0&&pt(A)&&A.set(m[S])}}mount(e){this.current=e,cE.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,i)=>this.bindToMotionValue(i,a)),Y3.current||lE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Bm.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),za(this.notifyUpdate),za(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const a=this.features[e];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,a){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Us.has(e);i&&this.onBindTransform&&this.onBindTransform();const o=a.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Cn.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,a)),this.valueSubscriptions.set(e,()=>{o(),c&&c(),a.owner&&a.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ks){const a=ks[e];if(!a)continue;const{isEnabled:i,Feature:o}=a;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,a){this.latestValues[e]=a}update(e,a){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let i=0;i<Rb.length;i++){const o=Rb[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=e[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=uE(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(e),()=>a.variantChildren.delete(e)}addValue(e,a){const i=this.values.get(e);a!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,a),this.values.set(e,a),this.latestValues[e]=a.get())}removeValue(e){this.values.delete(e);const a=this.valueSubscriptions.get(e);a&&(a(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,a){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&a!==void 0&&(i=Rs(a===null?void 0:a,{owner:this}),this.addValue(e,i)),i}readValue(e,a){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Gx(i)||Hx(i))?i=parseFloat(i):!bD(i)&&ja.test(a)&&(i=C3(e,a)),this.setBaseTarget(e,pt(i)?i.get():i)),pt(i)?i.get():i}setBaseTarget(e,a){this.baseTarget[e]=a}getBaseTarget(e){const{initial:a}=this.props;let i;if(typeof a=="string"||typeof a=="object"){const c=Ip(this.props,a,this.presenceContext?.custom);c&&(i=c[e])}if(a&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!pt(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,a){return this.events[e]||(this.events[e]=new xp),this.events[e].add(a)}notify(e,...a){this.events[e]&&this.events[e].notify(...a)}scheduleRenderMicrotask(){_p.render(this.render)}}class Z3 extends dE{constructor(){super(...arguments),this.KeyframeResolver=oD}sortInstanceNodePosition(e,a){return e.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(e,a){return e.style?e.style[a]:void 0}removeValueFromRenderState(e,{vars:a,style:i}){delete a[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;pt(e)&&(this.childSubscription=e.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}function W3(n,{style:e,vars:a},i,o){const c=n.style;let u;for(u in e)c[u]=e[u];o?.applyProjectionStyles(c,i);for(u in a)c.setProperty(u,a[u])}function fE(n){return window.getComputedStyle(n)}class hE extends Z3{constructor(){super(...arguments),this.type="html",this.renderInstance=W3}readValueFromInstance(e,a){if(Us.has(a))return this.projection?.isProjecting?Am(a):T9(e,a);{const i=fE(e),o=(Cp(a)?i.getPropertyValue(a):i[a])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:a}){return K3(e,a)}build(e,a,i){Gp(e,a,i.transformTemplate)}scrapeMotionValuesFromProps(e,a,i){return Jp(e,a,i)}}const X3=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function mE(n,e,a,i){W3(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(X3.has(o)?o:Up(o),e.attrs[o])}class pE extends Z3{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qn}getBaseTargetFromProps(e,a){return e[a]}readValueFromInstance(e,a){if(Us.has(a)){const i=M3(a);return i&&i.default||0}return a=X3.has(a)?a:Up(a),e.getAttribute(a)}scrapeMotionValuesFromProps(e,a,i){return G3(e,a,i)}build(e,a,i){O3(e,a,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,a,i,o){mE(e,a,i,o)}mount(e){this.isSVGTag=j3(e.tagName),super.mount(e)}}const gE=(n,e)=>Hp(n)?new pE(e):new hE(e,{allowProjection:n!==x.Fragment});function Es(n,e,a){const i=n.getProps();return Ip(i,e,a!==void 0?a:i.custom,n)}const Lm=n=>Array.isArray(n);function yE(n,e,a){n.hasValue(e)?n.getValue(e).set(a):n.addValue(e,Rs(a))}function vE(n){return Lm(n)?n[n.length-1]||0:n}function bE(n,e){const a=Es(n,e);let{transitionEnd:i={},transition:o={},...c}=a||{};c={...c,...i};for(const u in c){const f=vE(c[u]);yE(n,u,f)}}function xE(n){return!!(pt(n)&&n.add)}function _m(n,e){const a=n.getValue("willChange");if(xE(a))return a.add(e);if(!a&&$r.WillChange){const i=new $r.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function Q3(n){return n.props[F3]}const SE=n=>n!==null;function ME(n,{repeat:e,repeatType:a="loop"},i){const o=n.filter(SE),c=e&&a!=="loop"&&e%2===1?0:o.length-1;return o[c]}const CE={type:"spring",stiffness:500,damping:25,restSpeed:10},AE=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),wE={type:"keyframes",duration:.8},TE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},DE=(n,{keyframes:e})=>e.length>2?wE:Us.has(n)?n.startsWith("scale")?AE(e[1]):CE:TE;function EE({when:n,delay:e,delayChildren:a,staggerChildren:i,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:f,from:m,elapsed:p,...y}){return!!Object.keys(y).length}const qp=(n,e,a,i={},o,c)=>u=>{const f=Bp(i,n)||{},m=f.delay||i.delay||0;let{elapsed:p=0}=i;p=p-Ar(m);const y={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-p,onUpdate:S=>{e.set(S),f.onUpdate&&f.onUpdate(S)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:c?void 0:o};EE(f)||Object.assign(y,DE(n,y)),y.duration&&(y.duration=Ar(y.duration)),y.repeatDelay&&(y.repeatDelay=Ar(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Nm(y),y.delay===0&&(v=!0)),($r.instantAnimations||$r.skipAnimations)&&(v=!0,Nm(y),y.delay=0),y.allowFlatten=!f.type&&!f.ease,v&&!c&&e.get()!==void 0){const S=ME(y.keyframes,f);if(S!==void 0){Cn.update(()=>{y.onUpdate(S),y.onComplete()});return}}return f.isSync?new kp(y):new Z9(y)};function NE({protectedKeys:n,needsAnimating:e},a){const i=n.hasOwnProperty(a)&&e[a]!==!0;return e[a]=!1,i}function $3(n,e,{delay:a=0,transitionOverride:i,type:o}={}){let{transition:c=n.getDefaultTransition(),transitionEnd:u,...f}=e;i&&(c=i);const m=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const y in f){const v=n.getValue(y,n.latestValues[y]??null),S=f[y];if(S===void 0||p&&NE(p,y))continue;const A={delay:a,...Bp(c||{},y)},E=v.get();if(E!==void 0&&!v.isAnimating&&!Array.isArray(S)&&S===E&&!A.velocity)continue;let M=!1;if(window.MotionHandoffAnimation){const w=Q3(n);if(w){const N=window.MotionHandoffAnimation(w,y,Cn);N!==null&&(A.startTime=N,M=!0)}}_m(n,y),v.start(qp(y,v,S,n.shouldReduceMotion&&b3.has(y)?{type:!1}:A,n,M));const D=v.animation;D&&m.push(D)}return u&&Promise.all(m).then(()=>{Cn.update(()=>{u&&bE(n,u)})}),m}function e5(n,e,a,i=0,o=1){const c=Array.from(n).sort((p,y)=>p.sortNodePosition(y)).indexOf(e),u=n.size,f=(u-1)*i;return typeof a=="function"?a(c,u):o===1?c*i:f-c*i}function Om(n,e,a={}){const i=Es(n,e,a.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=i||{};a.transitionOverride&&(o=a.transitionOverride);const c=i?()=>Promise.all($3(n,i,a)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:p=0,staggerChildren:y,staggerDirection:v}=o;return RE(n,e,m,p,y,v,a)}:()=>Promise.resolve(),{when:f}=o;if(f){const[m,p]=f==="beforeChildren"?[c,u]:[u,c];return m().then(()=>p())}else return Promise.all([c(),u(a.delay)])}function RE(n,e,a=0,i=0,o=0,c=1,u){const f=[];for(const m of n.variantChildren)m.notify("AnimationStart",e),f.push(Om(m,e,{...u,delay:a+(typeof i=="function"?0:i)+e5(n.variantChildren,m,i,o,c)}).then(()=>m.notify("AnimationComplete",e)));return Promise.all(f)}function kE(n,e,a={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(c=>Om(n,c,a));i=Promise.all(o)}else if(typeof e=="string")i=Om(n,e,a);else{const o=typeof e=="function"?Es(n,e,a.custom):e;i=Promise.all($3(n,o,a))}return i.then(()=>{n.notify("AnimationComplete",e)})}function n5(n,e){if(!Array.isArray(e))return!1;const a=e.length;if(a!==n.length)return!1;for(let i=0;i<a;i++)if(e[i]!==n[i])return!1;return!0}const PE=Vp.length;function t5(n){if(!n)return;if(!n.isControllingVariants){const a=n.parent?t5(n.parent)||{}:{};return n.props.initial!==void 0&&(a.initial=n.props.initial),a}const e={};for(let a=0;a<PE;a++){const i=Vp[a],o=n.props[i];(ul(o)||o===!1)&&(e[i]=o)}return e}const BE=[...jp].reverse(),LE=jp.length;function _E(n){return e=>Promise.all(e.map(({animation:a,options:i})=>kE(n,a,i)))}function OE(n){let e=_E(n),a=kb(),i=!0;const o=m=>(p,y)=>{const v=Es(n,y,m==="exit"?n.presenceContext?.custom:void 0);if(v){const{transition:S,transitionEnd:A,...E}=v;p={...p,...E,...A}}return p};function c(m){e=m(n)}function u(m){const{props:p}=n,y=t5(n.parent)||{},v=[],S=new Set;let A={},E=1/0;for(let D=0;D<LE;D++){const w=BE[D],N=a[w],P=p[w]!==void 0?p[w]:y[w],j=ul(P),O=w===m?N.isActive:null;O===!1&&(E=D);let q=P===y[w]&&P!==p[w]&&j;if(q&&i&&n.manuallyAnimateOnMount&&(q=!1),N.protectedKeys={...A},!N.isActive&&O===null||!P&&!N.prevProp||Xu(P)||typeof P=="boolean")continue;const B=zE(N.prevProp,P);let G=B||w===m&&N.isActive&&!q&&j||D>E&&j,Q=!1;const ae=Array.isArray(P)?P:[P];let de=ae.reduce(o(w),{});O===!1&&(de={});const{prevResolvedValues:se={}}=N,re={...se,...de},le=U=>{G=!0,S.has(U)&&(Q=!0,S.delete(U)),N.needsAnimating[U]=!0;const V=n.getValue(U);V&&(V.liveStyle=!1)};for(const U in re){const V=de[U],fe=se[U];if(A.hasOwnProperty(U))continue;let be=!1;Lm(V)&&Lm(fe)?be=!n5(V,fe):be=V!==fe,be?V!=null?le(U):S.add(U):V!==void 0&&S.has(U)?le(U):N.protectedKeys[U]=!0}N.prevProp=P,N.prevResolvedValues=de,N.isActive&&(A={...A,...de}),i&&n.blockInitialAnimation&&(G=!1);const ge=q&&B;G&&(!ge||Q)&&v.push(...ae.map(U=>{const V={type:w};if(typeof U=="string"&&i&&!ge&&n.manuallyAnimateOnMount&&n.parent){const{parent:fe}=n,be=Es(fe,U);if(fe.enteringChildren&&be){const{delayChildren:T}=be.transition||{};V.delay=e5(fe.enteringChildren,n,T)}}return{animation:U,options:V}}))}if(S.size){const D={};if(typeof p.initial!="boolean"){const w=Es(n,Array.isArray(p.initial)?p.initial[0]:p.initial);w&&w.transition&&(D.transition=w.transition)}S.forEach(w=>{const N=n.getBaseTarget(w),P=n.getValue(w);P&&(P.liveStyle=!0),D[w]=N??null}),v.push({animation:D})}let M=!!v.length;return i&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(M=!1),i=!1,M?e(v):Promise.resolve()}function f(m,p){if(a[m].isActive===p)return Promise.resolve();n.variantChildren?.forEach(v=>v.animationState?.setActive(m,p)),a[m].isActive=p;const y=u(m);for(const v in a)a[v].protectedKeys={};return y}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>a,reset:()=>{a=kb()}}}function zE(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!n5(e,n):!1}function ui(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function kb(){return{animate:ui(!0),whileInView:ui(),whileHover:ui(),whileTap:ui(),whileDrag:ui(),whileFocus:ui(),exit:ui()}}class Ja{constructor(e){this.isMounted=!1,this.node=e}update(){}}class jE extends Ja{constructor(e){super(e),e.animationState||(e.animationState=OE(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Xu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:a}=this.node.prevProps||{};e!==a&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let VE=0;class GE extends Ja{constructor(){super(...arguments),this.id=VE++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:a}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const o=this.node.animationState.setActive("exit",!e);a&&!e&&o.then(()=>{a(this.id)})}mount(){const{register:e,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const FE={animation:{Feature:jE},exit:{Feature:GE}};function fl(n,e,a,i={passive:!0}){return n.addEventListener(e,a,i),()=>n.removeEventListener(e,a)}function Al(n){return{point:{x:n.pageX,y:n.pageY}}}const HE=n=>e=>Op(e)&&n(e,Al(e));function nl(n,e,a,i){return fl(n,e,HE(a),i)}const r5=1e-4,IE=1-r5,JE=1+r5,a5=.01,UE=0-a5,qE=0+a5;function bt(n){return n.max-n.min}function KE(n,e,a){return Math.abs(n-e)<=a}function Pb(n,e,a,i=.5){n.origin=i,n.originPoint=wn(e.min,e.max,n.origin),n.scale=bt(a)/bt(e),n.translate=wn(a.min,a.max,n.origin)-n.originPoint,(n.scale>=IE&&n.scale<=JE||isNaN(n.scale))&&(n.scale=1),(n.translate>=UE&&n.translate<=qE||isNaN(n.translate))&&(n.translate=0)}function tl(n,e,a,i){Pb(n.x,e.x,a.x,i?i.originX:void 0),Pb(n.y,e.y,a.y,i?i.originY:void 0)}function Bb(n,e,a){n.min=a.min+e.min,n.max=n.min+bt(e)}function YE(n,e,a){Bb(n.x,e.x,a.x),Bb(n.y,e.y,a.y)}function Lb(n,e,a){n.min=e.min-a.min,n.max=n.min+bt(e)}function wu(n,e,a){Lb(n.x,e.x,a.x),Lb(n.y,e.y,a.y)}function Qt(n){return[n("x"),n("y")]}const i5=({current:n})=>n?n.ownerDocument.defaultView:null,_b=(n,e)=>Math.abs(n-e);function ZE(n,e){const a=_b(n.x,e.x),i=_b(n.y,e.y);return Math.sqrt(a**2+i**2)}class s5{constructor(e,a,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=qh(this.lastMoveEventInfo,this.history),A=this.startEvent!==null,E=ZE(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!A&&!E)return;const{point:M}=S,{timestamp:D}=ut;this.history.push({...M,timestamp:D});const{onStart:w,onMove:N}=this.handlers;A||(w&&w(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,S)},this.handlePointerMove=(S,A)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=Uh(A,this.transformPagePoint),Cn.update(this.updatePoint,!0)},this.handlePointerUp=(S,A)=>{this.end();const{onEnd:E,onSessionEnd:M,resumeAnimation:D}=this.handlers;if(this.dragSnapToOrigin&&D&&D(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=qh(S.type==="pointercancel"?this.lastMoveEventInfo:Uh(A,this.transformPagePoint),this.history);this.startEvent&&E&&E(S,w),M&&M(S,w)},!Op(e))return;this.dragSnapToOrigin=c,this.handlers=a,this.transformPagePoint=i,this.distanceThreshold=u,this.contextWindow=o||window;const f=Al(e),m=Uh(f,this.transformPagePoint),{point:p}=m,{timestamp:y}=ut;this.history=[{...p,timestamp:y}];const{onSessionStart:v}=a;v&&v(e,qh(m,this.history)),this.removeListeners=Sl(nl(this.contextWindow,"pointermove",this.handlePointerMove),nl(this.contextWindow,"pointerup",this.handlePointerUp),nl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),za(this.updatePoint)}}function Uh(n,e){return e?{point:e(n.point)}:n}function Ob(n,e){return{x:n.x-e.x,y:n.y-e.y}}function qh({point:n},e){return{point:n,delta:Ob(n,o5(e)),offset:Ob(n,WE(e)),velocity:XE(e,.1)}}function WE(n){return n[0]}function o5(n){return n[n.length-1]}function XE(n,e){if(n.length<2)return{x:0,y:0};let a=n.length-1,i=null;const o=o5(n);for(;a>=0&&(i=n[a],!(o.timestamp-i.timestamp>Ar(e)));)a--;if(!i)return{x:0,y:0};const c=$t(o.timestamp-i.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-i.x)/c,y:(o.y-i.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function QE(n,{min:e,max:a},i){return e!==void 0&&n<e?n=i?wn(e,n,i.min):Math.max(n,e):a!==void 0&&n>a&&(n=i?wn(a,n,i.max):Math.min(n,a)),n}function zb(n,e,a){return{min:e!==void 0?n.min+e:void 0,max:a!==void 0?n.max+a-(n.max-n.min):void 0}}function $E(n,{top:e,left:a,bottom:i,right:o}){return{x:zb(n.x,a,o),y:zb(n.y,e,i)}}function jb(n,e){let a=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([a,i]=[i,a]),{min:a,max:i}}function eN(n,e){return{x:jb(n.x,e.x),y:jb(n.y,e.y)}}function nN(n,e){let a=.5;const i=bt(n),o=bt(e);return o>i?a=ol(e.min,e.max-i,n.min):i>o&&(a=ol(n.min,n.max-o,e.min)),Qr(0,1,a)}function tN(n,e){const a={};return e.min!==void 0&&(a.min=e.min-n.min),e.max!==void 0&&(a.max=e.max-n.min),a}const zm=.35;function rN(n=zm){return n===!1?n=0:n===!0&&(n=zm),{x:Vb(n,"left","right"),y:Vb(n,"top","bottom")}}function Vb(n,e,a){return{min:Gb(n,e),max:Gb(n,a)}}function Gb(n,e){return typeof n=="number"?n:n[e]||0}const aN=new WeakMap;class iN{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:a=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),a&&this.snapToCursor(Al(v).point)},u=(v,S)=>{const{drag:A,dragPropagation:E,onDragStart:M}=this.getProps();if(A&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dD(A),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qt(w=>{let N=this.getAxisMotionValue(w).get()||0;if(wr.test(N)){const{projection:P}=this.visualElement;if(P&&P.layout){const j=P.layout.layoutBox[w];j&&(N=bt(j)*(parseFloat(N)/100))}}this.originPoint[w]=N}),M&&Cn.postRender(()=>M(v,S)),_m(this.visualElement,"transform");const{animationState:D}=this.visualElement;D&&D.setActive("whileDrag",!0)},f=(v,S)=>{this.latestPointerEvent=v,this.latestPanInfo=S;const{dragPropagation:A,dragDirectionLock:E,onDirectionLock:M,onDrag:D}=this.getProps();if(!A&&!this.openDragLock)return;const{offset:w}=S;if(E&&this.currentDirection===null){this.currentDirection=sN(w),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",S.point,w),this.updateAxis("y",S.point,w),this.visualElement.render(),D&&D(v,S)},m=(v,S)=>{this.latestPointerEvent=v,this.latestPanInfo=S,this.stop(v,S),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>Qt(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new s5(e,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:m,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:i,contextWindow:i5(this.visualElement)})}stop(e,a){const i=e||this.latestPointerEvent,o=a||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!i)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Cn.postRender(()=>f(i,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:a}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}updateAxis(e,a,i){const{drag:o}=this.getProps();if(!i||!tu(e,o,this.currentDirection))return;const c=this.getAxisMotionValue(e);let u=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(u=QE(u,this.constraints[e],this.elastic[e])),c.set(u)}resolveConstraints(){const{dragConstraints:e,dragElastic:a}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&Ss(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=$E(i.layoutBox,e):this.constraints=!1,this.elastic=rN(a),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Qt(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=tN(i.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:a}=this.getProps();if(!e||!Ss(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=oE(i,o.root,this.visualElement.getTransformPagePoint());let u=eN(o.layout.layoutBox,c);if(a){const f=a(aE(u));this.hasMutatedConstraints=!!f,f&&(u=J3(f))}return u}startAnimation(e){const{drag:a,dragMomentum:i,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),m=this.constraints||{},p=Qt(y=>{if(!tu(y,a,this.currentDirection))return;let v=m&&m[y]||{};u&&(v={min:0,max:0});const S=o?200:1e6,A=o?40:1e7,E={type:"inertia",velocity:i?e[y]:0,bounceStiffness:S,bounceDamping:A,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(y,E)});return Promise.all(p).then(f)}startAxisValueAnimation(e,a){const i=this.getAxisMotionValue(e);return _m(this.visualElement,e),i.start(qp(e,i,0,a,this.visualElement,!1))}stopAnimation(){Qt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Qt(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const a=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),o=i[a];return o||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Qt(a=>{const{drag:i}=this.getProps();if(!tu(a,i,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(a);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[a];c.set(e[a]-wn(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:a}=this.getProps(),{projection:i}=this.visualElement;if(!Ss(a)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Qt(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const m=f.get();o[u]=nN({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Qt(u=>{if(!tu(u,e,null))return;const f=this.getAxisMotionValue(u),{min:m,max:p}=this.constraints[u];f.set(wn(m,p,o[u]))})}addListeners(){if(!this.visualElement.current)return;aN.set(this.visualElement,this);const e=this.visualElement.current,a=nl(e,"pointerdown",m=>{const{drag:p,dragListener:y=!0}=this.getProps();p&&y&&this.start(m)}),i=()=>{const{dragConstraints:m}=this.getProps();Ss(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,c=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Cn.read(i);const u=fl(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:p})=>{this.isDragging&&p&&(Qt(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=m[y].translate,v.set(v.get()+m[y].translate))}),this.visualElement.render())}));return()=>{u(),a(),c(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=zm,dragMomentum:f=!0}=e;return{...e,drag:a,dragDirectionLock:i,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function tu(n,e,a){return(e===!0||e===n)&&(a===null||a===n)}function sN(n,e=10){let a=null;return Math.abs(n.y)>e?a="y":Math.abs(n.x)>e&&(a="x"),a}class oN extends Ja{constructor(e){super(e),this.removeGroupControls=nr,this.removeListeners=nr,this.controls=new iN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||nr}unmount(){this.removeGroupControls(),this.removeListeners()}}const Fb=n=>(e,a)=>{n&&Cn.postRender(()=>n(e,a))};class lN extends Ja{constructor(){super(...arguments),this.removePointerDownListener=nr}onPointerDown(e){this.session=new s5(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:i5(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:a,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:Fb(e),onStart:Fb(a),onMove:i,onEnd:(c,u)=>{delete this.session,o&&Cn.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=nl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const du={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hb(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Jo={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Oe.test(n))n=parseFloat(n);else return n;const a=Hb(n,e.target.x),i=Hb(n,e.target.y);return`${a}% ${i}%`}},cN={correct:(n,{treeScale:e,projectionDelta:a})=>{const i=n,o=ja.parse(n);if(o.length>5)return i;const c=ja.createTransformer(n),u=typeof o[0]!="number"?1:0,f=a.x.scale*e.x,m=a.y.scale*e.y;o[0+u]/=f,o[1+u]/=m;const p=wn(f,m,.5);return typeof o[2+u]=="number"&&(o[2+u]/=p),typeof o[3+u]=="number"&&(o[3+u]/=p),c(o)}};let Kh=!1;class uN extends x.Component{componentDidMount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:i,layoutId:o}=this.props,{projection:c}=e;PD(dN),c&&(a.group&&a.group.add(c),i&&i.register&&o&&i.register(c),Kh&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),du.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:a,visualElement:i,drag:o,isPresent:c}=this.props,{projection:u}=i;return u&&(u.isPresent=c,Kh=!0,o||e.layoutDependency!==a||a===void 0||e.isPresent!==c?u.willUpdate():this.safeToRemove(),e.isPresent!==c&&(c?u.promote():u.relegate()||Cn.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),_p.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:i}=this.props,{projection:o}=e;Kh=!0,o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function l5(n){const[e,a]=R3(),i=x.useContext(hp);return g.jsx(uN,{...n,layoutGroup:i,switchLayoutGroup:x.useContext(H3),isPresent:e,safeToRemove:a})}const dN={borderRadius:{...Jo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Jo,borderTopRightRadius:Jo,borderBottomLeftRadius:Jo,borderBottomRightRadius:Jo,boxShadow:cN};function fN(n,e,a){const i=pt(n)?n:Rs(n);return i.start(qp("",i,e,a)),i.animation}const hN=(n,e)=>n.depth-e.depth;class mN{constructor(){this.children=[],this.isDirty=!1}add(e){gp(this.children,e),this.isDirty=!0}remove(e){yp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(hN),this.isDirty=!1,this.children.forEach(e)}}function pN(n,e){const a=Et.now(),i=({timestamp:o})=>{const c=o-a;c>=e&&(za(i),n(c-e))};return Cn.setup(i,!0),()=>za(i)}const c5=["TopLeft","TopRight","BottomLeft","BottomRight"],gN=c5.length,Ib=n=>typeof n=="string"?parseFloat(n):n,Jb=n=>typeof n=="number"||Oe.test(n);function yN(n,e,a,i,o,c){o?(n.opacity=wn(0,a.opacity??1,vN(i)),n.opacityExit=wn(e.opacity??1,0,bN(i))):c&&(n.opacity=wn(e.opacity??1,a.opacity??1,i));for(let u=0;u<gN;u++){const f=`border${c5[u]}Radius`;let m=Ub(e,f),p=Ub(a,f);if(m===void 0&&p===void 0)continue;m||(m=0),p||(p=0),m===0||p===0||Jb(m)===Jb(p)?(n[f]=Math.max(wn(Ib(m),Ib(p),i),0),(wr.test(p)||wr.test(m))&&(n[f]+="%")):n[f]=p}(e.rotate||a.rotate)&&(n.rotate=wn(e.rotate||0,a.rotate||0,i))}function Ub(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const vN=u5(0,.5,Wx),bN=u5(.5,.95,nr);function u5(n,e,a){return i=>i<n?0:i>e?1:a(ol(n,e,i))}function qb(n,e){n.min=e.min,n.max=e.max}function sr(n,e){qb(n.x,e.x),qb(n.y,e.y)}function Kb(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Yb(n,e,a,i,o){return n-=e,n=Au(n,1/a,i),o!==void 0&&(n=Au(n,1/o,i)),n}function xN(n,e=0,a=1,i=.5,o,c=n,u=n){if(wr.test(e)&&(e=parseFloat(e),e=wn(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=wn(c.min,c.max,i);n===c&&(f-=e),n.min=Yb(n.min,e,a,f,o),n.max=Yb(n.max,e,a,f,o)}function Zb(n,e,[a,i,o],c,u){xN(n,e[a],e[i],e[o],e.scale,c,u)}const SN=["x","scaleX","originX"],MN=["y","scaleY","originY"];function Wb(n,e,a,i){Zb(n.x,e,SN,a?a.x:void 0,i?i.x:void 0),Zb(n.y,e,MN,a?a.y:void 0,i?i.y:void 0)}function Xb(n){return n.translate===0&&n.scale===1}function d5(n){return Xb(n.x)&&Xb(n.y)}function Qb(n,e){return n.min===e.min&&n.max===e.max}function CN(n,e){return Qb(n.x,e.x)&&Qb(n.y,e.y)}function $b(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function f5(n,e){return $b(n.x,e.x)&&$b(n.y,e.y)}function e2(n){return bt(n.x)/bt(n.y)}function n2(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class AN{constructor(){this.members=[]}add(e){gp(this.members,e),e.scheduleRender()}remove(e){if(yp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(e){const a=this.members.findIndex(o=>e===o);if(a===0)return!1;let i;for(let o=a;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1){i=c;break}}return i?(this.promote(i),!0):!1}promote(e,a){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,a&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:a,resumingFrom:i}=e;a.onExitComplete&&a.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function wN(n,e,a){let i="";const o=n.x.translate/e.x,c=n.y.translate/e.y,u=a?.z||0;if((o||c||u)&&(i=`translate3d(${o}px, ${c}px, ${u}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),a){const{transformPerspective:p,rotate:y,rotateX:v,rotateY:S,skewX:A,skewY:E}=a;p&&(i=`perspective(${p}px) ${i}`),y&&(i+=`rotate(${y}deg) `),v&&(i+=`rotateX(${v}deg) `),S&&(i+=`rotateY(${S}deg) `),A&&(i+=`skewX(${A}deg) `),E&&(i+=`skewY(${E}deg) `)}const f=n.x.scale*e.x,m=n.y.scale*e.y;return(f!==1||m!==1)&&(i+=`scale(${f}, ${m})`),i||"none"}const Yh=["","X","Y","Z"],TN=1e3;let DN=0;function Zh(n,e,a,i){const{latestValues:o}=e;o[n]&&(a[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function h5(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const a=Q3(e);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:c}=n.options;window.MotionCancelOptimisedAnimation(a,"transform",Cn,!(o||c))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&h5(i)}function m5({attachResizeListener:n,defaultParent:e,measureScroll:a,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(u={},f=e?.()){this.id=DN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(RN),this.nodes.forEach(LN),this.nodes.forEach(_N),this.nodes.forEach(kN)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new mN)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new xp),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const m=this.eventHandlers.get(u);m&&m.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=N3(u)&&!yD(u),this.instance=u;const{layoutId:f,layout:m,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||f)&&(this.isLayoutDirty=!0),n){let y,v=0;const S=()=>this.root.updateBlockedByResize=!1;Cn.read(()=>{v=window.innerWidth}),n(u,()=>{const A=window.innerWidth;A!==v&&(v=A,this.root.updateBlockedByResize=!0,y&&y(),y=pN(S,250),du.hasAnimatedSinceResize&&(du.hasAnimatedSinceResize=!1,this.nodes.forEach(a2)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:S,layout:A})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||p.getDefaultTransition()||GN,{onLayoutAnimationStart:M,onLayoutAnimationComplete:D}=p.getProps(),w=!this.targetLayout||!f5(this.targetLayout,A),N=!v&&S;if(this.options.layoutRoot||this.resumeFrom||N||v&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const P={...Bp(E,"layout"),onPlay:M,onComplete:D};(p.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P),this.setAnimationOrigin(y,N)}else v||a2(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),za(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ON),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&h5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(t2);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(r2);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(BN),this.nodes.forEach(EN),this.nodes.forEach(NN)):this.nodes.forEach(r2),this.clearAllSnapshots();const f=Et.now();ut.delta=Qr(0,1e3/60,f-ut.timestamp),ut.timestamp=f,ut.isProcessing=!0,zh.update.process(ut),zh.preRender.process(ut),zh.render.process(ut),ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(PN),this.sharedNodes.forEach(zN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Cn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Cn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!bt(this.snapshot.measuredBox.x)&&!bt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Qn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const m=i(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!d5(this.projectionDelta),m=this.getTransformTemplate(),p=m?m(this.latestValues,""):void 0,y=p!==this.prevTransformTemplateValue;u&&this.instance&&(f||di(this.latestValues)||y)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);return u&&(m=this.removeTransform(m)),FN(m),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Qn();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(HN))){const{scroll:p}=this.root;p&&(Ms(f.x,p.offset.x),Ms(f.y,p.offset.y))}return f}removeElementScroll(u){const f=Qn();if(sr(f,u),this.scroll?.wasRoot)return f;for(let m=0;m<this.path.length;m++){const p=this.path[m],{scroll:y,options:v}=p;p!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&sr(f,u),Ms(f.x,y.offset.x),Ms(f.y,y.offset.y))}return f}applyTransform(u,f=!1){const m=Qn();sr(m,u);for(let p=0;p<this.path.length;p++){const y=this.path[p];!f&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Cs(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),di(y.latestValues)&&Cs(m,y.latestValues)}return di(this.latestValues)&&Cs(m,this.latestValues),m}removeTransform(u){const f=Qn();sr(f,u);for(let m=0;m<this.path.length;m++){const p=this.path[m];if(!p.instance||!di(p.latestValues))continue;km(p.latestValues)&&p.updateSnapshot();const y=Qn(),v=p.measurePageBox();sr(y,v),Wb(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,y)}return di(this.latestValues)&&Wb(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(u||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!this.layout||!(y||v))return;this.resolvedRelativeTargetAt=ut.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qn(),this.targetWithTransforms=Qn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),YE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):sr(this.target,this.layout.layoutBox),q3(this.target,this.targetDelta)):sr(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||km(this.parent.latestValues)||U3(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,m){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qn(),this.relativeTargetOrigin=Qn(),wu(this.relativeTargetOrigin,f,m),sr(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ut.timestamp&&(m=!1),m)return;const{layout:p,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||y))return;sr(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;sE(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Qn());const{target:A}=u;if(!A){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Kb(this.prevProjectionDelta.x,this.projectionDelta.x),Kb(this.prevProjectionDelta.y,this.projectionDelta.y)),tl(this.projectionDelta,this.layoutCorrected,A,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==S||!n2(this.projectionDelta.x,this.prevProjectionDelta.x)||!n2(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",A))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=As(),this.projectionDelta=As(),this.projectionDeltaWithTransform=As()}setAnimationOrigin(u,f=!1){const m=this.snapshot,p=m?m.latestValues:{},y={...this.latestValues},v=As();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const S=Qn(),A=m?m.source:void 0,E=this.layout?this.layout.source:void 0,M=A!==E,D=this.getStack(),w=!D||D.members.length<=1,N=!!(M&&!w&&this.options.crossfade===!0&&!this.path.some(VN));this.animationProgress=0;let P;this.mixTargetDelta=j=>{const O=j/1e3;i2(v.x,u.x,O),i2(v.y,u.y,O),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wu(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),jN(this.relativeTarget,this.relativeTargetOrigin,S,O),P&&CN(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=Qn()),sr(P,this.relativeTarget)),M&&(this.animationValues=y,yN(y,p,this.latestValues,O,N,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(za(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Cn.update(()=>{du.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Rs(0)),this.currentAnimation=fN(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(TN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:m,layout:p,latestValues:y}=u;if(!(!f||!m||!p)){if(this!==u&&this.layout&&p&&p5(this.options.animationType,this.layout.layoutBox,p.layoutBox)){m=this.target||Qn();const v=bt(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+v;const S=bt(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+S}sr(f,m),Cs(f,y),tl(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new AN),this.sharedNodes.get(u).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:m}={}){const p=this.getStack();p&&p.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const p={};m.z&&Zh("z",u,p,this.animationValues);for(let y=0;y<Yh.length;y++)Zh(`rotate${Yh[y]}`,u,p,this.animationValues),Zh(`skew${Yh[y]}`,u,p,this.animationValues);u.render();for(const y in p)u.setStaticValue(y,p[y]),this.animationValues&&(this.animationValues[y]=p[y]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=uu(f?.pointerEvents)||"",u.transform=m?m(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=uu(f?.pointerEvents)||""),this.hasProjected&&!di(this.latestValues)&&(u.transform=m?m({},""):"none",this.hasProjected=!1);return}u.visibility="";const y=p.animationValues||p.latestValues;this.applyTransformsToTarget();let v=wN(this.projectionDeltaWithTransform,this.treeScale,y);m&&(v=m(y,v)),u.transform=v;const{x:S,y:A}=this.projectionDelta;u.transformOrigin=`${S.origin*100}% ${A.origin*100}% 0`,p.animationValues?u.opacity=p===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:u.opacity=p===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const E in dl){if(y[E]===void 0)continue;const{correct:M,applyTo:D,isCSSVariable:w}=dl[E],N=v==="none"?y[E]:M(y[E],p);if(D){const P=D.length;for(let j=0;j<P;j++)u[D[j]]=N}else w?this.options.visualElement.renderState.vars[E]=N:u[E]=N}this.options.layoutId&&(u.pointerEvents=p===this?uu(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(t2),this.root.sharedNodes.clear()}}}function EN(n){n.updateLayout()}function NN(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=n.layout,{animationType:o}=n.options,c=e.source!==n.layout.source;o==="size"?Qt(y=>{const v=c?e.measuredBox[y]:e.layoutBox[y],S=bt(v);v.min=a[y].min,v.max=v.min+S}):p5(o,e.layoutBox,a)&&Qt(y=>{const v=c?e.measuredBox[y]:e.layoutBox[y],S=bt(a[y]);v.max=v.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+S)});const u=As();tl(u,a,e.layoutBox);const f=As();c?tl(f,n.applyTransform(i,!0),e.measuredBox):tl(f,a,e.layoutBox);const m=!d5(u);let p=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:S}=y;if(v&&S){const A=Qn();wu(A,e.layoutBox,v.layoutBox);const E=Qn();wu(E,a,S.layoutBox),f5(A,E)||(p=!0),y.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=A,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:e,delta:f,layoutDelta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function RN(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function kN(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function PN(n){n.clearSnapshot()}function t2(n){n.clearMeasurements()}function r2(n){n.isLayoutDirty=!1}function BN(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function a2(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function LN(n){n.resolveTargetDelta()}function _N(n){n.calcProjection()}function ON(n){n.resetSkewAndRotation()}function zN(n){n.removeLeadSnapshot()}function i2(n,e,a){n.translate=wn(e.translate,0,a),n.scale=wn(e.scale,1,a),n.origin=e.origin,n.originPoint=e.originPoint}function s2(n,e,a,i){n.min=wn(e.min,a.min,i),n.max=wn(e.max,a.max,i)}function jN(n,e,a,i){s2(n.x,e.x,a.x,i),s2(n.y,e.y,a.y,i)}function VN(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const GN={duration:.45,ease:[.4,0,.1,1]},o2=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),l2=o2("applewebkit/")&&!o2("chrome/")?Math.round:nr;function c2(n){n.min=l2(n.min),n.max=l2(n.max)}function FN(n){c2(n.x),c2(n.y)}function p5(n,e,a){return n==="position"||n==="preserve-aspect"&&!KE(e2(e),e2(a),.2)}function HN(n){return n!==n.root&&n.scroll?.wasRoot}const IN=m5({attachResizeListener:(n,e)=>fl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Wh={current:void 0},g5=m5({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Wh.current){const n=new IN({});n.mount(window),n.setOptions({layoutScroll:!0}),Wh.current=n}return Wh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),JN={pan:{Feature:lN},drag:{Feature:oN,ProjectionNode:g5,MeasureLayout:l5}};function u2(n,e,a){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,c=i[o];c&&Cn.postRender(()=>c(e,Al(e)))}class UN extends Ja{mount(){const{current:e}=this.node;e&&(this.unmount=fD(e,(a,i)=>(u2(this.node,i,"Start"),o=>u2(this.node,o,"End"))))}unmount(){}}class qN extends Ja{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Sl(fl(this.node.current,"focus",()=>this.onFocus()),fl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function d2(n,e,a){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),c=i[o];c&&Cn.postRender(()=>c(e,Al(e)))}class KN extends Ja{mount(){const{current:e}=this.node;e&&(this.unmount=gD(e,(a,i)=>(d2(this.node,i,"Start"),(o,{success:c})=>d2(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const jm=new WeakMap,Xh=new WeakMap,YN=n=>{const e=jm.get(n.target);e&&e(n)},ZN=n=>{n.forEach(YN)};function WN({root:n,...e}){const a=n||document;Xh.has(a)||Xh.set(a,{});const i=Xh.get(a),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(ZN,{root:n,...e})),i[o]}function XN(n,e,a){const i=WN(e);return jm.set(n,a),i.observe(n),()=>{jm.delete(n),i.unobserve(n)}}const QN={some:0,all:1};class $N extends Ja{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:a,margin:i,amount:o="some",once:c}=e,u={root:a?a.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:QN[o]},f=m=>{const{isIntersecting:p}=m;if(this.isInView===p||(this.isInView=p,c&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),S=p?y:v;S&&S(m)};return XN(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:a}=this.node;["amount","margin","root"].some(eR(e,a))&&this.startObserver()}unmount(){}}function eR({viewport:n={}},{viewport:e={}}={}){return a=>n[a]!==e[a]}const nR={inView:{Feature:$N},tap:{Feature:KN},focus:{Feature:qN},hover:{Feature:UN}},tR={layout:{ProjectionNode:g5,MeasureLayout:l5}},rR={...FE,...nR,...JN,...tR},ye=rE(rR,gE),aR={fr:{welcome:"Accélérez votre prise en charge.",subtitle:"Notre admission en ligne permet de préparer votre venue à l'Hôpital de La Tour.",description:"Vos données sont traitées de façon confidentielle.",selectLanguage:"Choisissez votre langue",start:"Démarrer l'admission",secure:"Vos données sont protégées",fast:"Rapide et simple",minutes:"Seulement 5 minutes"},en:{welcome:"Speed up your care.",subtitle:"Our online admission allows you to prepare your visit to La Tour Hospital.",description:"Your data is treated confidentially.",selectLanguage:"Choose your language",start:"Start online admission",secure:"Your data is protected",fast:"Quick and simple",minutes:"Only 5 minutes"}},iR={fr:{title:"Vérification de sécurité",subtitle:"Pour accéder à votre dossier, veuillez confirmer votre date de naissance",label:"Date de naissance",placeholder:"JJ.MM.YYYY",continue:"Continuer",back:"Retour",required:"La date de naissance est requise",invalid:"Date invalide",futureDate:"La date de naissance ne peut pas être dans le futur",verifying:"Vérification..."},en:{title:"Security Verification",subtitle:"To access your file, please confirm your date of birth",label:"Date of birth",placeholder:"DD.MM.YYYY",continue:"Continue",back:"Back",required:"Date of birth is required",invalid:"Invalid date",futureDate:"Date of birth cannot be in the future",verifying:"Verifying..."}},sR={fr:{title:"Code de vérification",subtitle:"Un code à 6 chiffres vous a été envoyé par SMS au numéro se terminant par XXXX",label:"Code de vérification",placeholder:"000000",continue:"Vérifier",back:"Retour",required:"Le code est requis",invalid:"Code invalide (6 chiffres requis)",verifying:"Vérification...",resend:"Renvoyer le code"},en:{title:"Verification Code",subtitle:"A 6-digit code has been sent by SMS to the number ending in XXXX",label:"Verification code",placeholder:"000000",continue:"Verify",back:"Back",required:"Code is required",invalid:"Invalid code (6 digits required)",verifying:"Verifying...",resend:"Resend code"}},oR={fr:{title:"Identification",subtitle:"Aidez-nous à mieux comprendre votre situation",reasonLabel:"Raison de la venue",illness:"Maladie",accident:"Accident",hasEmployerLabel:"J'ai un employeur",yes:"Oui",no:"Non",insuranceLabel:"Type d'assurance",swiss:"Assurance LAMal",international:"Autre assurance",auto:"Autopayeur",documentsLabel:"Documents requis",identityCard:"Carte d'identité ou passport",insuranceCard:"Carte d'assurance maladie (base)",uploadText:"Glisser-déposer ou cliquer",consentsLabel:"Consentements",consentNLPDPrefix:"J'accepte la ",consentNLPDLink:"Politique de confidentialité",privacyPolicyUrl:"https://www.la-tour.ch/fr/informations-generales/politique-de-confidentialite",consentMarketing:"J'aimerais être informé des services ou offres complémentaires de l'Hôpital de La Tour en lien avec mon parcours de soins et mes besoins.",continue:"Continuer",back:"Retour",reasonRequired:"Veuillez sélectionner une raison",insuranceRequired:"Veuillez sélectionner un type d'assurance",identityCardRequired:"La carte d'identité est obligatoire",insuranceCardRequired:"La carte d'assurance est obligatoire",consentNLPDRequired:"Le consentement nLPD est obligatoire",optional:"Optionnel",fileTooLarge:"Le fichier est trop volumineux. Taille maximale: 10 MB",invalidFileFormat:"Format de fichier non valide. Formats acceptés: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",fileTooLargeAndInvalidFormat:"Le fichier est trop volumineux et le format n'est pas valide. Taille maximale: 10 MB. Formats acceptés: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",insuranceHelp:"En savoir plus",insuranceHelpTitle:"Choix du type d'assurance",insuranceHelpSwiss:"Assurance LAMal",insuranceHelpSwissDesc:"Concerne les personnes affiliées au système d'assurance maladie obligatoire suisse (LaMAL/KVG). C'est le cas pour la majorité des résidents en Suisse.",insuranceHelpInternational:"Autre assurance",insuranceHelpInternationalDesc:"Sélectionnez cette option si votre couverture ne relève pas de l'assurance de base LaMAL. Cela inclut principalement deux cas :",insuranceHelpInternationalItem1:"Assurances d'organisations internationales : Si vous êtes affilié(e) au régime d'assurance de votre employeur (ex: CERN, ONU, missions diplomatiques).",insuranceHelpInternationalItem2:"Assurances privées suisses (hors LaMAL) : Si vous disposez d'une assurance privée qui n'opère pas dans le cadre de la LaMAL (ex: certaines polices d'AXA, Zurich, etc.).",insuranceHelpAuto:"Autopayeur",insuranceHelpAutoDesc:"Sélectionnez cette option si vous prévoyez de régler vous-même l'intégralité des frais de votre visite, sans passer par une assurance. Un acompte pourra vous être demandé lors de votre admission."},en:{title:"Identification",subtitle:"Help us better understand your situation",reasonLabel:"Reason for visit",illness:"Illness",accident:"Accident",hasEmployerLabel:"I have an employer",yes:"Yes",no:"No",insuranceLabel:"Insurance type",swiss:"LAMal insurance",international:"Other insurance",auto:"Self-payer",documentsLabel:"Required documents",identityCard:"ID card or passport",insuranceCard:"Insurance card (Basic)",uploadText:"Drag & drop or click",consentsLabel:"Consents",consentNLPDPrefix:"I accept the ",consentNLPDLink:"Privacy policy",privacyPolicyUrl:"https://www.la-tour.ch/en/general-information/privacy-policy",consentMarketing:"I would like to be informed about any additional services or offerings at Hôpital de La Tour that relate to my care pathway and needs.",continue:"Continue",back:"Back",reasonRequired:"Please select a reason",insuranceRequired:"Please select an insurance type",identityCardRequired:"Identity card is required",insuranceCardRequired:"Insurance card is required",consentNLPDRequired:"Data protection consent is required",optional:"Optional",fileTooLarge:"File is too large. Maximum size: 10 MB",invalidFileFormat:"Invalid file format. Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",fileTooLargeAndInvalidFormat:"File is too large and format is invalid. Maximum size: 10 MB. Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",insuranceHelp:"Learn more",insuranceHelpTitle:"Insurance type selection",insuranceHelpSwiss:"Swiss insurance",insuranceHelpSwissDesc:"For individuals affiliated with the Swiss mandatory health insurance system (LAMal/KVG). This applies to the majority of residents in Switzerland.",insuranceHelpInternational:"Other insurance",insuranceHelpInternationalDesc:"Select this option if your coverage is not part of LAMal basic insurance. This primarily includes two cases:",insuranceHelpInternationalItem1:"International organization insurance: If you are affiliated with your employer's insurance scheme (e.g., CERN, UN, diplomatic missions).",insuranceHelpInternationalItem2:"Swiss private insurance (outside LAMal): If you have private insurance that does not operate within the LAMal framework (e.g., certain policies from AXA, Zurich, etc.).",insuranceHelpAuto:"Self-payer",insuranceHelpAutoDesc:"Select this option if you plan to pay for your visit in full yourself, without going through insurance. A deposit may be requested upon admission."}},lR={fr:{title:"Informations administratives",subtitle:"Complétez vos informations personnelles",identity:"Identité",firstName:"Prénom",lastName:"Nom",birthDate:"Date de naissance",birthDatePlaceholder:"JJ.MM.YYYY",gender:"Genre",genderPlaceholder:"Sélectionner",male:"Homme",female:"Femme",other:"Non-binaire",nationality:"Nationalité",nationalityPlaceholder:"Sélectionner",contact:"Coordonnées",street:"Rue",npa:"NPA (Code Postal)",city:"Ville",country:"Pays",countryPlaceholder:"Sélectionnez",email:"Email",employer:"Employeur",profession:"Profession",employerName:"Nom de l'employeur",employerAddress:"Adresse de l'employeur",doctors:"Médecins",referringDoctor:"Médecin envoyeur",generalPractitioner:"Médecin de famille",accidentData:"Données Accident",accidentDate:"Date de l'accident",accidentDatePlaceholder:"JJ.MM.YYYY",accidentInsurance:"Nom de l'assurance accident",claimNumber:"N° de sinistre",insuranceData:"Assurance & Couverture Sociale",avsNumber:"Numéro AVS",basicInsurance:"Nom de l'assurance de base",cardNumber:"N° de carte d'assurance de base",policyNumber:"Assurance de base - N° de police",complementaryInsurance:"N° de carte d'assurance complémentaire",continue:"Soumettre",back:"Retour",required:"Ce champ est requis",invalidEmail:"Format email invalide (exemple: nom@domaine.com)",invalidNpa:"Code postal invalide (chiffres uniquement)",invalidDate:"Date invalide",invalidCardNumber:"Le numéro de carte doit contenir exactement 20 chiffres",invalidAvsNumber:"Le numéro AVS doit contenir exactement 13 chiffres",optional:"Optionnel",noResults:"Aucun résultat"},en:{title:"Administrative Information",subtitle:"Complete your personal information",identity:"Identity",firstName:"First name",lastName:"Last name",birthDate:"Date of birth",birthDatePlaceholder:"DD.MM.YYYY",gender:"Gender",genderPlaceholder:"Select",male:"Male",female:"Female",other:"Non-binary",nationality:"Nationality",nationalityPlaceholder:"Select",contact:"Contact",street:"Street",npa:"Postal code",city:"City",country:"Country",countryPlaceholder:"Select",email:"Email",employer:"Employer",profession:"Profession",employerName:"Employer name",employerAddress:"Employer address",doctors:"Doctors",referringDoctor:"Referring doctor",generalPractitioner:"General Practitioner",accidentData:"Accident Data",accidentDate:"Accident date",accidentDatePlaceholder:"DD.MM.YYYY",accidentInsurance:"Accident insurance name",claimNumber:"Claim No.",insuranceData:"Insurance & Social Coverage",avsNumber:"AHV Number",basicInsurance:"Basic insurance name",cardNumber:"Basic insurance card number",policyNumber:"Basic insurance - Policy number",complementaryInsurance:"Complementary insurance card number",continue:"Submit",back:"Back",required:"This field is required",invalidEmail:"Invalid email format (example: name@domain.com)",invalidNpa:"Invalid postal code (digits only)",invalidDate:"Invalid date",invalidCardNumber:"Card number must contain exactly 20 digits",invalidAvsNumber:"AHV number must contain exactly 13 digits",optional:"Optional",noResults:"No results"}},cR={fr:{title:"Admission en ligne envoyée avec succès",message:"Merci d'avoir soumis votre demande. Elle sera traitée afin de préparer votre arrivée.",button:"Comment se rendre à l'hôpital?",link:"https://www.la-tour.ch/fr/hopital-de-la-tour/se-rendre-lhopital-de-la-tour"},en:{title:"Online admission submitted successfully",message:"Thank you for submitting your request. It will be processed to prepare your arrival.",button:"How to get to the hospital?",link:"https://www.la-tour.ch/en/hopital-de-la-tour/getting-hopital-de-la-tour"}},uR={fr:{message:"Veuillez patienter, vos documents sont en cours de traitement"},en:{message:"Please wait, your documents are being processed"}},Qh=[{key:"qualification",labelFr:"Identification",labelEn:"Identification"},{key:"admin",labelFr:"Informations",labelEn:"Information"},{key:"success",labelFr:"Terminé",labelEn:"Complete"}],qs=[.16,1,.3,1],dR={hidden:{opacity:0,scale:.92},visible:{opacity:1,scale:1,transition:{duration:.6,ease:qs,staggerChildren:.08,delayChildren:.1}}},$h={hidden:{opacity:0,y:20,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:qs}}},fR={hidden:{opacity:0,scale:.5},visible:{opacity:1,scale:1,transition:{duration:.7,ease:qs,scale:{type:"spring",stiffness:100,damping:15}}}},em={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.5,ease:qs}}},f2={hidden:{opacity:0,scale:.8},visible:n=>({opacity:1,scale:1,transition:{delay:.6+n*.1,duration:.5,ease:qs}})},hR={hidden:{opacity:0,scale:.9,y:10},visible:{opacity:1,scale:1,y:0,transition:{delay:.4,duration:.6,ease:qs}}};function mR({language:n,onLanguageChange:e,onStart:a}){const i=aR[n];return g.jsx("div",{className:"min-h-screen flex justify-center px-4 py-8",children:g.jsx(ye.div,{className:"w-full max-w-md mx-auto",children:g.jsxs(ye.div,{className:"bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 backdrop-blur-sm",variants:dR,initial:"hidden",animate:"visible",style:{willChange:"transform, opacity"},children:[g.jsx(ye.div,{className:"text-center mb-6",variants:$h,children:g.jsx(ye.div,{className:"mx-auto mb-6 flex items-center justify-center",variants:fR,style:{willChange:"transform, opacity"},children:g.jsx("img",{src:HA,alt:"Hôpital La Tour",className:"h-16 w-auto"})})}),g.jsx(ye.div,{className:"mb-6",variants:$h,children:g.jsxs("div",{className:"flex items-center justify-between gap-4",children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-brand-text",children:[g.jsx(ye.span,{whileHover:{rotate:360},transition:{duration:.5},style:{willChange:"transform"},children:g.jsx(DA,{className:"w-4 h-4 text-brand-primary"})}),i.selectLanguage]}),g.jsxs(Px,{value:n,onValueChange:o=>e(o),children:[g.jsx(Lx,{className:"h-12 w-[180px]",children:g.jsx(Bx,{})}),g.jsxs(_x,{children:[g.jsx(Qo,{value:"fr",children:"Français"}),g.jsx(Qo,{value:"en",children:"English"})]})]})]})}),g.jsxs(ye.div,{className:"text-center mb-6",variants:$h,children:[g.jsx(ye.h1,{className:"text-2xl font-bold text-brand-text mb-4",variants:em,children:i.welcome}),g.jsx(ye.p,{className:"text-base text-slate-600 mb-4 leading-relaxed",variants:em,children:i.subtitle}),g.jsx(ye.p,{className:"text-sm text-slate-600",variants:em,children:i.description})]}),g.jsx(ye.div,{variants:hR,children:g.jsx(er,{onClick:a,size:"lg",className:"group w-full h-14 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all",asChild:!0,children:g.jsx(ye.button,{whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},style:{willChange:"transform"},children:g.jsxs("div",{className:"flex items-center justify-center gap-2",children:[g.jsx(LA,{className:"w-5 h-5 transition-transform group-hover:rotate-12"}),i.start,g.jsx(yl,{className:"w-5 h-5 transition-transform group-hover:translate-x-1"})]})})})}),g.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[g.jsxs(ye.div,{className:"flex items-center gap-2 text-xs text-slate-600",custom:0,variants:f2,children:[g.jsx(ye.div,{className:"w-2 h-2 rounded-full bg-brand-success",animate:{scale:[1,1.2,1]},transition:{repeat:1/0,duration:2,delay:1,ease:"easeInOut"},style:{willChange:"transform"}}),i.secure]}),g.jsxs(ye.div,{className:"flex items-center gap-2 text-xs text-slate-600",custom:1,variants:f2,children:[g.jsx(ye.div,{className:"w-2 h-2 rounded-full bg-brand-primary",animate:{scale:[1,1.2,1]},transition:{repeat:1/0,duration:2,delay:1.3,ease:"easeInOut"},style:{willChange:"transform"}}),i.minutes]})]})]})})})}var wl=n=>n.type==="checkbox",pi=n=>n instanceof Date,Dt=n=>n==null;const y5=n=>typeof n=="object";var Zn=n=>!Dt(n)&&!Array.isArray(n)&&y5(n)&&!pi(n),pR=n=>Zn(n)&&n.target?wl(n.target)?n.target.checked:n.target.value:n,gR=n=>n.substring(0,n.search(/\.\d+(\.|$)/))||n,yR=(n,e)=>n.has(gR(e)),vR=n=>{const e=n.constructor&&n.constructor.prototype;return Zn(e)&&e.hasOwnProperty("isPrototypeOf")},Kp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function tt(n){let e;const a=Array.isArray(n),i=typeof FileList<"u"?n instanceof FileList:!1;if(n instanceof Date)e=new Date(n);else if(!(Kp&&(n instanceof Blob||i))&&(a||Zn(n)))if(e=a?[]:Object.create(Object.getPrototypeOf(n)),!a&&!vR(n))e=n;else for(const o in n)n.hasOwnProperty(o)&&(e[o]=tt(n[o]));else return n;return e}var $u=n=>/^\w*$/.test(n),zn=n=>n===void 0,Yp=n=>Array.isArray(n)?n.filter(Boolean):[],Zp=n=>Yp(n.replace(/["|']|\]/g,"").split(/\.|\[/)),Te=(n,e,a)=>{if(!e||!Zn(n))return a;const i=($u(e)?[e]:Zp(e)).reduce((o,c)=>Dt(o)?o:o[c],n);return zn(i)||i===n?zn(n[e])?a:n[e]:i},vr=n=>typeof n=="boolean",pn=(n,e,a)=>{let i=-1;const o=$u(e)?[e]:Zp(e),c=o.length,u=c-1;for(;++i<c;){const f=o[i];let m=a;if(i!==u){const p=n[f];m=Zn(p)||Array.isArray(p)?p:isNaN(+o[i+1])?{}:[]}if(f==="__proto__"||f==="constructor"||f==="prototype")return;n[f]=m,n=n[f]}};const h2={BLUR:"blur",FOCUS_OUT:"focusout"},cr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Zr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},bR=On.createContext(null);bR.displayName="HookFormContext";var xR=(n,e,a,i=!0)=>{const o={defaultValues:e._defaultValues};for(const c in n)Object.defineProperty(o,c,{get:()=>{const u=c;return e._proxyFormState[u]!==cr.all&&(e._proxyFormState[u]=!i||cr.all),n[u]}});return o};const SR=typeof window<"u"?On.useLayoutEffect:On.useEffect;var zt=n=>typeof n=="string",MR=(n,e,a,i,o)=>zt(n)?(i&&e.watch.add(n),Te(a,n,o)):Array.isArray(n)?n.map(c=>(i&&e.watch.add(c),Te(a,c))):(i&&(e.watchAll=!0),a),Vm=n=>Dt(n)||!y5(n);function Ra(n,e,a=new WeakSet){if(Vm(n)||Vm(e))return Object.is(n,e);if(pi(n)&&pi(e))return n.getTime()===e.getTime();const i=Object.keys(n),o=Object.keys(e);if(i.length!==o.length)return!1;if(a.has(n)||a.has(e))return!0;a.add(n),a.add(e);for(const c of i){const u=n[c];if(!o.includes(c))return!1;if(c!=="ref"){const f=e[c];if(pi(u)&&pi(f)||Zn(u)&&Zn(f)||Array.isArray(u)&&Array.isArray(f)?!Ra(u,f,a):!Object.is(u,f))return!1}}return!0}var v5=(n,e,a,i,o)=>e?{...a[n],types:{...a[n]&&a[n].types?a[n].types:{},[i]:o||!0}}:{},rl=n=>Array.isArray(n)?n:[n],m2=()=>{let n=[];return{get observers(){return n},next:o=>{for(const c of n)c.next&&c.next(o)},subscribe:o=>(n.push(o),{unsubscribe:()=>{n=n.filter(c=>c!==o)}}),unsubscribe:()=>{n=[]}}};function b5(n,e){const a={};for(const i in n)if(n.hasOwnProperty(i)){const o=n[i],c=e[i];if(o&&Zn(o)&&c){const u=b5(o,c);Zn(u)&&(a[i]=u)}else n[i]&&(a[i]=c)}return a}var vt=n=>Zn(n)&&!Object.keys(n).length,Wp=n=>n.type==="file",ur=n=>typeof n=="function",Tu=n=>{if(!Kp)return!1;const e=n?n.ownerDocument:0;return n instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},x5=n=>n.type==="select-multiple",Xp=n=>n.type==="radio",CR=n=>Xp(n)||wl(n),nm=n=>Tu(n)&&n.isConnected;function AR(n,e){const a=e.slice(0,-1).length;let i=0;for(;i<a;)n=zn(n)?i++:n[e[i++]];return n}function wR(n){for(const e in n)if(n.hasOwnProperty(e)&&!zn(n[e]))return!1;return!0}function qn(n,e){const a=Array.isArray(e)?e:$u(e)?[e]:Zp(e),i=a.length===1?n:AR(n,a),o=a.length-1,c=a[o];return i&&delete i[c],o!==0&&(Zn(i)&&vt(i)||Array.isArray(i)&&wR(i))&&qn(n,a.slice(0,-1)),n}var TR=n=>{for(const e in n)if(ur(n[e]))return!0;return!1};function S5(n){return Array.isArray(n)||Zn(n)&&!TR(n)}function Gm(n,e={}){for(const a in n){const i=n[a];S5(i)?(e[a]=Array.isArray(i)?[]:{},Gm(i,e[a])):zn(i)||(e[a]=!0)}return e}function vs(n,e,a){a||(a=Gm(e));for(const i in n){const o=n[i];if(S5(o))zn(e)||Vm(a[i])?a[i]=Gm(o,Array.isArray(o)?[]:{}):vs(o,Dt(e)?{}:e[i],a[i]);else{const c=e[i];a[i]=!Ra(o,c)}}return a}const p2={value:!1,isValid:!1},g2={value:!0,isValid:!0};var M5=n=>{if(Array.isArray(n)){if(n.length>1){const e=n.filter(a=>a&&a.checked&&!a.disabled).map(a=>a.value);return{value:e,isValid:!!e.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!zn(n[0].attributes.value)?zn(n[0].value)||n[0].value===""?g2:{value:n[0].value,isValid:!0}:g2:p2}return p2},C5=(n,{valueAsNumber:e,valueAsDate:a,setValueAs:i})=>zn(n)?n:e?n===""?NaN:n&&+n:a&&zt(n)?new Date(n):i?i(n):n;const y2={isValid:!1,value:null};var A5=n=>Array.isArray(n)?n.reduce((e,a)=>a&&a.checked&&!a.disabled?{isValid:!0,value:a.value}:e,y2):y2;function v2(n){const e=n.ref;return Wp(e)?e.files:Xp(e)?A5(n.refs).value:x5(e)?[...e.selectedOptions].map(({value:a})=>a):wl(e)?M5(n.refs).value:C5(zn(e.value)?n.ref.value:e.value,n)}var DR=(n,e,a,i)=>{const o={};for(const c of n){const u=Te(e,c);u&&pn(o,c,u._f)}return{criteriaMode:a,names:[...n],fields:o,shouldUseNativeValidation:i}},Du=n=>n instanceof RegExp,Uo=n=>zn(n)?n:Du(n)?n.source:Zn(n)?Du(n.value)?n.value.source:n.value:n,b2=n=>({isOnSubmit:!n||n===cr.onSubmit,isOnBlur:n===cr.onBlur,isOnChange:n===cr.onChange,isOnAll:n===cr.all,isOnTouch:n===cr.onTouched});const x2="AsyncFunction";var ER=n=>!!n&&!!n.validate&&!!(ur(n.validate)&&n.validate.constructor.name===x2||Zn(n.validate)&&Object.values(n.validate).find(e=>e.constructor.name===x2)),NR=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate),S2=(n,e,a)=>!a&&(e.watchAll||e.watch.has(n)||[...e.watch].some(i=>n.startsWith(i)&&/^\.\w+/.test(n.slice(i.length))));const al=(n,e,a,i)=>{for(const o of a||Object.keys(n)){const c=Te(n,o);if(c){const{_f:u,...f}=c;if(u){if(u.refs&&u.refs[0]&&e(u.refs[0],o)&&!i)return!0;if(u.ref&&e(u.ref,u.name)&&!i)return!0;if(al(f,e))break}else if(Zn(f)&&al(f,e))break}}};function M2(n,e,a){const i=Te(n,a);if(i||$u(a))return{error:i,name:a};const o=a.split(".");for(;o.length;){const c=o.join("."),u=Te(e,c),f=Te(n,c);if(u&&!Array.isArray(u)&&a!==c)return{name:a};if(f&&f.type)return{name:c,error:f};if(f&&f.root&&f.root.type)return{name:`${c}.root`,error:f.root};o.pop()}return{name:a}}var RR=(n,e,a,i)=>{a(n);const{name:o,...c}=n;return vt(c)||Object.keys(c).length>=Object.keys(e).length||Object.keys(c).find(u=>e[u]===(!i||cr.all))},kR=(n,e,a)=>!n||!e||n===e||rl(n).some(i=>i&&(a?i===e:i.startsWith(e)||e.startsWith(i))),PR=(n,e,a,i,o)=>o.isOnAll?!1:!a&&o.isOnTouch?!(e||n):(a?i.isOnBlur:o.isOnBlur)?!n:(a?i.isOnChange:o.isOnChange)?n:!0,BR=(n,e)=>!Yp(Te(n,e)).length&&qn(n,e),LR=(n,e,a)=>{const i=rl(Te(n,a));return pn(i,"root",e[a]),pn(n,a,i),n};function C2(n,e,a="validate"){if(zt(n)||Array.isArray(n)&&n.every(zt)||vr(n)&&!n)return{type:a,message:zt(n)?n:"",ref:e}}var hs=n=>Zn(n)&&!Du(n)?n:{value:n,message:""},A2=async(n,e,a,i,o,c)=>{const{ref:u,refs:f,required:m,maxLength:p,minLength:y,min:v,max:S,pattern:A,validate:E,name:M,valueAsNumber:D,mount:w}=n._f,N=Te(a,M);if(!w||e.has(M))return{};const P=f?f[0]:u,j=se=>{o&&P.reportValidity&&(P.setCustomValidity(vr(se)?"":se||""),P.reportValidity())},O={},q=Xp(u),B=wl(u),G=q||B,Q=(D||Wp(u))&&zn(u.value)&&zn(N)||Tu(u)&&u.value===""||N===""||Array.isArray(N)&&!N.length,ae=v5.bind(null,M,i,O),de=(se,re,le,ge=Zr.maxLength,_=Zr.minLength)=>{const U=se?re:le;O[M]={type:se?ge:_,message:U,ref:u,...ae(se?ge:_,U)}};if(c?!Array.isArray(N)||!N.length:m&&(!G&&(Q||Dt(N))||vr(N)&&!N||B&&!M5(f).isValid||q&&!A5(f).isValid)){const{value:se,message:re}=zt(m)?{value:!!m,message:m}:hs(m);if(se&&(O[M]={type:Zr.required,message:re,ref:P,...ae(Zr.required,re)},!i))return j(re),O}if(!Q&&(!Dt(v)||!Dt(S))){let se,re;const le=hs(S),ge=hs(v);if(!Dt(N)&&!isNaN(N)){const _=u.valueAsNumber||N&&+N;Dt(le.value)||(se=_>le.value),Dt(ge.value)||(re=_<ge.value)}else{const _=u.valueAsDate||new Date(N),U=be=>new Date(new Date().toDateString()+" "+be),V=u.type=="time",fe=u.type=="week";zt(le.value)&&N&&(se=V?U(N)>U(le.value):fe?N>le.value:_>new Date(le.value)),zt(ge.value)&&N&&(re=V?U(N)<U(ge.value):fe?N<ge.value:_<new Date(ge.value))}if((se||re)&&(de(!!se,le.message,ge.message,Zr.max,Zr.min),!i))return j(O[M].message),O}if((p||y)&&!Q&&(zt(N)||c&&Array.isArray(N))){const se=hs(p),re=hs(y),le=!Dt(se.value)&&N.length>+se.value,ge=!Dt(re.value)&&N.length<+re.value;if((le||ge)&&(de(le,se.message,re.message),!i))return j(O[M].message),O}if(A&&!Q&&zt(N)){const{value:se,message:re}=hs(A);if(Du(se)&&!N.match(se)&&(O[M]={type:Zr.pattern,message:re,ref:u,...ae(Zr.pattern,re)},!i))return j(re),O}if(E){if(ur(E)){const se=await E(N,a),re=C2(se,P);if(re&&(O[M]={...re,...ae(Zr.validate,re.message)},!i))return j(re.message),O}else if(Zn(E)){let se={};for(const re in E){if(!vt(se)&&!i)break;const le=C2(await E[re](N,a),P,re);le&&(se={...le,...ae(re,le.message)},j(le.message),i&&(O[M]=se))}if(!vt(se)&&(O[M]={ref:P,...se},!i))return O}}return j(!0),O};const _R={mode:cr.onSubmit,reValidateMode:cr.onChange,shouldFocusError:!0};function OR(n={}){let e={..._R,...n},a={submitCount:0,isDirty:!1,isReady:!1,isLoading:ur(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},i={},o=Zn(e.defaultValues)||Zn(e.values)?tt(e.defaultValues||e.values)||{}:{},c=e.shouldUnregister?{}:tt(o),u={action:!1,mount:!1,watch:!1},f={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},m,p=0;const y={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let v={...y};const S={array:m2(),state:m2()},A=e.criteriaMode===cr.all,E=R=>F=>{clearTimeout(p),p=setTimeout(R,F)},M=async R=>{if(!e.disabled&&(y.isValid||v.isValid||R)){const F=e.resolver?vt((await B()).errors):await Q(i,!0);F!==a.isValid&&S.state.next({isValid:F})}},D=(R,F)=>{!e.disabled&&(y.isValidating||y.validatingFields||v.isValidating||v.validatingFields)&&((R||Array.from(f.mount)).forEach(Y=>{Y&&(F?pn(a.validatingFields,Y,F):qn(a.validatingFields,Y))}),S.state.next({validatingFields:a.validatingFields,isValidating:!vt(a.validatingFields)}))},w=(R,F=[],Y,me,ie=!0,ue=!0)=>{if(me&&Y&&!e.disabled){if(u.action=!0,ue&&Array.isArray(Te(i,R))){const Se=Y(Te(i,R),me.argA,me.argB);ie&&pn(i,R,Se)}if(ue&&Array.isArray(Te(a.errors,R))){const Se=Y(Te(a.errors,R),me.argA,me.argB);ie&&pn(a.errors,R,Se),BR(a.errors,R)}if((y.touchedFields||v.touchedFields)&&ue&&Array.isArray(Te(a.touchedFields,R))){const Se=Y(Te(a.touchedFields,R),me.argA,me.argB);ie&&pn(a.touchedFields,R,Se)}(y.dirtyFields||v.dirtyFields)&&(a.dirtyFields=vs(o,c)),S.state.next({name:R,isDirty:de(R,F),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else pn(c,R,F)},N=(R,F)=>{pn(a.errors,R,F),S.state.next({errors:a.errors})},P=R=>{a.errors=R,S.state.next({errors:a.errors,isValid:!1})},j=(R,F,Y,me)=>{const ie=Te(i,R);if(ie){const ue=Te(c,R,zn(Y)?Te(o,R):Y);zn(ue)||me&&me.defaultChecked||F?pn(c,R,F?ue:v2(ie._f)):le(R,ue),u.mount&&!u.action&&M()}},O=(R,F,Y,me,ie)=>{let ue=!1,Se=!1;const He={name:R};if(!e.disabled){if(!Y||me){(y.isDirty||v.isDirty)&&(Se=a.isDirty,a.isDirty=He.isDirty=de(),ue=Se!==He.isDirty);const Xe=Ra(Te(o,R),F);Se=!!Te(a.dirtyFields,R),Xe?qn(a.dirtyFields,R):pn(a.dirtyFields,R,!0),He.dirtyFields=a.dirtyFields,ue=ue||(y.dirtyFields||v.dirtyFields)&&Se!==!Xe}if(Y){const Xe=Te(a.touchedFields,R);Xe||(pn(a.touchedFields,R,Y),He.touchedFields=a.touchedFields,ue=ue||(y.touchedFields||v.touchedFields)&&Xe!==Y)}ue&&ie&&S.state.next(He)}return ue?He:{}},q=(R,F,Y,me)=>{const ie=Te(a.errors,R),ue=(y.isValid||v.isValid)&&vr(F)&&a.isValid!==F;if(e.delayError&&Y?(m=E(()=>N(R,Y)),m(e.delayError)):(clearTimeout(p),m=null,Y?pn(a.errors,R,Y):qn(a.errors,R)),(Y?!Ra(ie,Y):ie)||!vt(me)||ue){const Se={...me,...ue&&vr(F)?{isValid:F}:{},errors:a.errors,name:R};a={...a,...Se},S.state.next(Se)}},B=async R=>{D(R,!0);const F=await e.resolver(c,e.context,DR(R||f.mount,i,e.criteriaMode,e.shouldUseNativeValidation));return D(R),F},G=async R=>{const{errors:F}=await B(R);if(R)for(const Y of R){const me=Te(F,Y);me?pn(a.errors,Y,me):qn(a.errors,Y)}else a.errors=F;return F},Q=async(R,F,Y={valid:!0})=>{for(const me in R){const ie=R[me];if(ie){const{_f:ue,...Se}=ie;if(ue){const He=f.array.has(ue.name),Xe=ie._f&&ER(ie._f);Xe&&y.validatingFields&&D([ue.name],!0);const rt=await A2(ie,f.disabled,c,A,e.shouldUseNativeValidation&&!F,He);if(Xe&&y.validatingFields&&D([ue.name]),rt[ue.name]&&(Y.valid=!1,F))break;!F&&(Te(rt,ue.name)?He?LR(a.errors,rt,ue.name):pn(a.errors,ue.name,rt[ue.name]):qn(a.errors,ue.name))}!vt(Se)&&await Q(Se,F,Y)}}return Y.valid},ae=()=>{for(const R of f.unMount){const F=Te(i,R);F&&(F._f.refs?F._f.refs.every(Y=>!nm(Y)):!nm(F._f.ref))&&te(R)}f.unMount=new Set},de=(R,F)=>!e.disabled&&(R&&F&&pn(c,R,F),!Ra(be(),o)),se=(R,F,Y)=>MR(R,f,{...u.mount?c:zn(F)?o:zt(R)?{[R]:F}:F},Y,F),re=R=>Yp(Te(u.mount?c:o,R,e.shouldUnregister?Te(o,R,[]):[])),le=(R,F,Y={})=>{const me=Te(i,R);let ie=F;if(me){const ue=me._f;ue&&(!ue.disabled&&pn(c,R,C5(F,ue)),ie=Tu(ue.ref)&&Dt(F)?"":F,x5(ue.ref)?[...ue.ref.options].forEach(Se=>Se.selected=ie.includes(Se.value)):ue.refs?wl(ue.ref)?ue.refs.forEach(Se=>{(!Se.defaultChecked||!Se.disabled)&&(Array.isArray(ie)?Se.checked=!!ie.find(He=>He===Se.value):Se.checked=ie===Se.value||!!ie)}):ue.refs.forEach(Se=>Se.checked=Se.value===ie):Wp(ue.ref)?ue.ref.value="":(ue.ref.value=ie,ue.ref.type||S.state.next({name:R,values:tt(c)})))}(Y.shouldDirty||Y.shouldTouch)&&O(R,ie,Y.shouldTouch,Y.shouldDirty,!0),Y.shouldValidate&&fe(R)},ge=(R,F,Y)=>{for(const me in F){if(!F.hasOwnProperty(me))return;const ie=F[me],ue=R+"."+me,Se=Te(i,ue);(f.array.has(R)||Zn(ie)||Se&&!Se._f)&&!pi(ie)?ge(ue,ie,Y):le(ue,ie,Y)}},_=(R,F,Y={})=>{const me=Te(i,R),ie=f.array.has(R),ue=tt(F);pn(c,R,ue),ie?(S.array.next({name:R,values:tt(c)}),(y.isDirty||y.dirtyFields||v.isDirty||v.dirtyFields)&&Y.shouldDirty&&S.state.next({name:R,dirtyFields:vs(o,c),isDirty:de(R,ue)})):me&&!me._f&&!Dt(ue)?ge(R,ue,Y):le(R,ue,Y),S2(R,f)&&S.state.next({...a,name:R}),S.state.next({name:u.mount?R:void 0,values:tt(c)})},U=async R=>{u.mount=!0;const F=R.target;let Y=F.name,me=!0;const ie=Te(i,Y),ue=Xe=>{me=Number.isNaN(Xe)||pi(Xe)&&isNaN(Xe.getTime())||Ra(Xe,Te(c,Y,Xe))},Se=b2(e.mode),He=b2(e.reValidateMode);if(ie){let Xe,rt;const Nr=F.type?v2(ie._f):pR(R),Gt=R.type===h2.BLUR||R.type===h2.FOCUS_OUT,Ys=!NR(ie._f)&&!e.resolver&&!Te(a.errors,Y)&&!ie._f.deps||PR(Gt,Te(a.touchedFields,Y),a.isSubmitted,He,Se),at=S2(Y,f,Gt);pn(c,Y,Nr),Gt?(!F||!F.readOnly)&&(ie._f.onBlur&&ie._f.onBlur(R),m&&m(0)):ie._f.onChange&&ie._f.onChange(R);const Bn=O(Y,Nr,Gt),Ft=!vt(Bn)||at;if(!Gt&&S.state.next({name:Y,type:R.type,values:tt(c)}),Ys)return(y.isValid||v.isValid)&&(e.mode==="onBlur"?Gt&&M():Gt||M()),Ft&&S.state.next({name:Y,...at?{}:Bn});if(!Gt&&at&&S.state.next({...a}),e.resolver){const{errors:ft}=await B([Y]);if(ue(Nr),me){const id=M2(a.errors,i,Y),Dl=M2(ft,i,id.name||Y);Xe=Dl.error,Y=Dl.name,rt=vt(ft)}}else D([Y],!0),Xe=(await A2(ie,f.disabled,c,A,e.shouldUseNativeValidation))[Y],D([Y]),ue(Nr),me&&(Xe?rt=!1:(y.isValid||v.isValid)&&(rt=await Q(i,!0)));me&&(ie._f.deps&&(!Array.isArray(ie._f.deps)||ie._f.deps.length>0)&&fe(ie._f.deps),q(Y,rt,Xe,Bn))}},V=(R,F)=>{if(Te(a.errors,F)&&R.focus)return R.focus(),1},fe=async(R,F={})=>{let Y,me;const ie=rl(R);if(e.resolver){const ue=await G(zn(R)?R:ie);Y=vt(ue),me=R?!ie.some(Se=>Te(ue,Se)):Y}else R?(me=(await Promise.all(ie.map(async ue=>{const Se=Te(i,ue);return await Q(Se&&Se._f?{[ue]:Se}:Se)}))).every(Boolean),!(!me&&!a.isValid)&&M()):me=Y=await Q(i);return S.state.next({...!zt(R)||(y.isValid||v.isValid)&&Y!==a.isValid?{}:{name:R},...e.resolver||!R?{isValid:Y}:{},errors:a.errors}),F.shouldFocus&&!me&&al(i,V,R?ie:f.mount),me},be=(R,F)=>{let Y={...u.mount?c:o};return F&&(Y=b5(F.dirtyFields?a.dirtyFields:a.touchedFields,Y)),zn(R)?Y:zt(R)?Te(Y,R):R.map(me=>Te(Y,me))},T=(R,F)=>({invalid:!!Te((F||a).errors,R),isDirty:!!Te((F||a).dirtyFields,R),error:Te((F||a).errors,R),isValidating:!!Te(a.validatingFields,R),isTouched:!!Te((F||a).touchedFields,R)}),Z=R=>{R&&rl(R).forEach(F=>qn(a.errors,F)),S.state.next({errors:R?a.errors:{}})},ne=(R,F,Y)=>{const me=(Te(i,R,{_f:{}})._f||{}).ref,ie=Te(a.errors,R)||{},{ref:ue,message:Se,type:He,...Xe}=ie;pn(a.errors,R,{...Xe,...F,ref:me}),S.state.next({name:R,errors:a.errors,isValid:!1}),Y&&Y.shouldFocus&&me&&me.focus&&me.focus()},oe=(R,F)=>ur(R)?S.state.subscribe({next:Y=>"values"in Y&&R(se(void 0,F),Y)}):se(R,F,!0),ce=R=>S.state.subscribe({next:F=>{kR(R.name,F.name,R.exact)&&RR(F,R.formState||y,Fn,R.reRenderRoot)&&R.callback({values:{...c},...a,...F,defaultValues:o})}}).unsubscribe,Ce=R=>(u.mount=!0,v={...v,...R.formState},ce({...R,formState:v})),te=(R,F={})=>{for(const Y of R?rl(R):f.mount)f.mount.delete(Y),f.array.delete(Y),F.keepValue||(qn(i,Y),qn(c,Y)),!F.keepError&&qn(a.errors,Y),!F.keepDirty&&qn(a.dirtyFields,Y),!F.keepTouched&&qn(a.touchedFields,Y),!F.keepIsValidating&&qn(a.validatingFields,Y),!e.shouldUnregister&&!F.keepDefaultValue&&qn(o,Y);S.state.next({values:tt(c)}),S.state.next({...a,...F.keepDirty?{isDirty:de()}:{}}),!F.keepIsValid&&M()},Pe=({disabled:R,name:F})=>{(vr(R)&&u.mount||R||f.disabled.has(F))&&(R?f.disabled.add(F):f.disabled.delete(F))},pe=(R,F={})=>{let Y=Te(i,R);const me=vr(F.disabled)||vr(e.disabled);return pn(i,R,{...Y||{},_f:{...Y&&Y._f?Y._f:{ref:{name:R}},name:R,mount:!0,...F}}),f.mount.add(R),Y?Pe({disabled:vr(F.disabled)?F.disabled:e.disabled,name:R}):j(R,!0,F.value),{...me?{disabled:F.disabled||e.disabled}:{},...e.progressive?{required:!!F.required,min:Uo(F.min),max:Uo(F.max),minLength:Uo(F.minLength),maxLength:Uo(F.maxLength),pattern:Uo(F.pattern)}:{},name:R,onChange:U,onBlur:U,ref:ie=>{if(ie){pe(R,F),Y=Te(i,R);const ue=zn(ie.value)&&ie.querySelectorAll&&ie.querySelectorAll("input,select,textarea")[0]||ie,Se=CR(ue),He=Y._f.refs||[];if(Se?He.find(Xe=>Xe===ue):ue===Y._f.ref)return;pn(i,R,{_f:{...Y._f,...Se?{refs:[...He.filter(nm),ue,...Array.isArray(Te(o,R))?[{}]:[]],ref:{type:ue.type,name:R}}:{ref:ue}}}),j(R,!1,void 0,ue)}else Y=Te(i,R,{}),Y._f&&(Y._f.mount=!1),(e.shouldUnregister||F.shouldUnregister)&&!(yR(f.array,R)&&u.action)&&f.unMount.add(R)}}},ee=()=>e.shouldFocusError&&al(i,V,f.mount),xe=R=>{vr(R)&&(S.state.next({disabled:R}),al(i,(F,Y)=>{const me=Te(i,Y);me&&(F.disabled=me._f.disabled||R,Array.isArray(me._f.refs)&&me._f.refs.forEach(ie=>{ie.disabled=me._f.disabled||R}))},0,!1))},Be=(R,F)=>async Y=>{let me;Y&&(Y.preventDefault&&Y.preventDefault(),Y.persist&&Y.persist());let ie=tt(c);if(S.state.next({isSubmitting:!0}),e.resolver){const{errors:ue,values:Se}=await B();a.errors=ue,ie=tt(Se)}else await Q(i);if(f.disabled.size)for(const ue of f.disabled)qn(ie,ue);if(qn(a.errors,"root"),vt(a.errors)){S.state.next({errors:{}});try{await R(ie,Y)}catch(ue){me=ue}}else F&&await F({...a.errors},Y),ee(),setTimeout(ee);if(S.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:vt(a.errors)&&!me,submitCount:a.submitCount+1,errors:a.errors}),me)throw me},Ue=(R,F={})=>{Te(i,R)&&(zn(F.defaultValue)?_(R,tt(Te(o,R))):(_(R,F.defaultValue),pn(o,R,tt(F.defaultValue))),F.keepTouched||qn(a.touchedFields,R),F.keepDirty||(qn(a.dirtyFields,R),a.isDirty=F.defaultValue?de(R,tt(Te(o,R))):de()),F.keepError||(qn(a.errors,R),y.isValid&&M()),S.state.next({...a}))},De=(R,F={})=>{const Y=R?tt(R):o,me=tt(Y),ie=vt(R),ue=ie?o:me;if(F.keepDefaultValues||(o=Y),!F.keepValues){if(F.keepDirtyValues){const Se=new Set([...f.mount,...Object.keys(vs(o,c))]);for(const He of Array.from(Se))Te(a.dirtyFields,He)?pn(ue,He,Te(c,He)):_(He,Te(ue,He))}else{if(Kp&&zn(R))for(const Se of f.mount){const He=Te(i,Se);if(He&&He._f){const Xe=Array.isArray(He._f.refs)?He._f.refs[0]:He._f.ref;if(Tu(Xe)){const rt=Xe.closest("form");if(rt){rt.reset();break}}}}if(F.keepFieldsRef)for(const Se of f.mount)_(Se,Te(ue,Se));else i={}}c=e.shouldUnregister?F.keepDefaultValues?tt(o):{}:tt(ue),S.array.next({values:{...ue}}),S.state.next({values:{...ue}})}f={mount:F.keepDirtyValues?f.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!y.isValid||!!F.keepIsValid||!!F.keepDirtyValues||!e.shouldUnregister&&!vt(ue),u.watch=!!e.shouldUnregister,S.state.next({submitCount:F.keepSubmitCount?a.submitCount:0,isDirty:ie?!1:F.keepDirty?a.isDirty:!!(F.keepDefaultValues&&!Ra(R,o)),isSubmitted:F.keepIsSubmitted?a.isSubmitted:!1,dirtyFields:ie?{}:F.keepDirtyValues?F.keepDefaultValues&&c?vs(o,c):a.dirtyFields:F.keepDefaultValues&&R?vs(o,R):F.keepDirty?a.dirtyFields:{},touchedFields:F.keepTouched?a.touchedFields:{},errors:F.keepErrors?a.errors:{},isSubmitSuccessful:F.keepIsSubmitSuccessful?a.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:o})},_e=(R,F)=>De(ur(R)?R(c):R,F),vn=(R,F={})=>{const Y=Te(i,R),me=Y&&Y._f;if(me){const ie=me.refs?me.refs[0]:me.ref;ie.focus&&(ie.focus(),F.shouldSelect&&ur(ie.select)&&ie.select())}},Fn=R=>{a={...a,...R}},sn={control:{register:pe,unregister:te,getFieldState:T,handleSubmit:Be,setError:ne,_subscribe:ce,_runSchema:B,_focusError:ee,_getWatch:se,_getDirty:de,_setValid:M,_setFieldArray:w,_setDisabledField:Pe,_setErrors:P,_getFieldArray:re,_reset:De,_resetDefaultValues:()=>ur(e.defaultValues)&&e.defaultValues().then(R=>{_e(R,e.resetOptions),S.state.next({isLoading:!1})}),_removeUnmounted:ae,_disableForm:xe,_subjects:S,_proxyFormState:y,get _fields(){return i},get _formValues(){return c},get _state(){return u},set _state(R){u=R},get _defaultValues(){return o},get _names(){return f},set _names(R){f=R},get _formState(){return a},get _options(){return e},set _options(R){e={...e,...R}}},subscribe:Ce,trigger:fe,register:pe,handleSubmit:Be,watch:oe,setValue:_,getValues:be,reset:_e,resetField:Ue,clearErrors:Z,unregister:te,setError:ne,setFocus:vn,getFieldState:T};return{...sn,formControl:sn}}function ed(n={}){const e=On.useRef(void 0),a=On.useRef(void 0),[i,o]=On.useState({isDirty:!1,isValidating:!1,isLoading:ur(n.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1,isReady:!1,defaultValues:ur(n.defaultValues)?void 0:n.defaultValues});if(!e.current)if(n.formControl)e.current={...n.formControl,formState:i},n.defaultValues&&!ur(n.defaultValues)&&n.formControl.reset(n.defaultValues,n.resetOptions);else{const{formControl:u,...f}=OR(n);e.current={...f,formState:i}}const c=e.current.control;return c._options=n,SR(()=>{const u=c._subscribe({formState:c._proxyFormState,callback:()=>o({...c._formState}),reRenderRoot:!0});return o(f=>({...f,isReady:!0})),c._formState.isReady=!0,u},[c]),On.useEffect(()=>c._disableForm(n.disabled),[c,n.disabled]),On.useEffect(()=>{n.mode&&(c._options.mode=n.mode),n.reValidateMode&&(c._options.reValidateMode=n.reValidateMode)},[c,n.mode,n.reValidateMode]),On.useEffect(()=>{n.errors&&(c._setErrors(n.errors),c._focusError())},[c,n.errors]),On.useEffect(()=>{n.shouldUnregister&&c._subjects.state.next({values:c._getWatch()})},[c,n.shouldUnregister]),On.useEffect(()=>{if(c._proxyFormState.isDirty){const u=c._getDirty();u!==i.isDirty&&c._subjects.state.next({isDirty:u})}},[c,i.isDirty]),On.useEffect(()=>{var u;n.values&&!Ra(n.values,a.current)?(c._reset(n.values,{keepFieldsRef:!0,...c._options.resetOptions}),!((u=c._options.resetOptions)===null||u===void 0)&&u.keepIsValid||c._setValid(),a.current=n.values,o(f=>({...f}))):c._resetDefaultValues()},[c,n.values]),On.useEffect(()=>{c._state.mount||(c._setValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),e.current.formState=xR(i,c),e.current}const w2=(n,e,a)=>{if(n&&"reportValidity"in n){const i=Te(a,e);n.setCustomValidity(i&&i.message||""),n.reportValidity()}},w5=(n,e)=>{for(const a in e.fields){const i=e.fields[a];i&&i.ref&&"reportValidity"in i.ref?w2(i.ref,a,n):i&&i.refs&&i.refs.forEach(o=>w2(o,a,n))}},zR=(n,e)=>{e.shouldUseNativeValidation&&w5(n,e);const a={};for(const i in n){const o=Te(e.fields,i),c=Object.assign(n[i]||{},{ref:o&&o.ref});if(jR(e.names||Object.keys(n),i)){const u=Object.assign({},Te(a,i));pn(u,"root",c),pn(a,i,u)}else pn(a,i,c)}return a},jR=(n,e)=>{const a=T2(e);return n.some(i=>T2(i).match(`^${a}\\.\\d+`))};function T2(n){return n.replace(/\]|\[/g,"")}function VR(n,e){for(var a={};n.length;){var i=n[0],o=i.code,c=i.message,u=i.path.join(".");if(!a[u])if("unionErrors"in i){var f=i.unionErrors[0].errors[0];a[u]={message:f.message,type:f.code}}else a[u]={message:c,type:o};if("unionErrors"in i&&i.unionErrors.forEach(function(y){return y.errors.forEach(function(v){return n.push(v)})}),e){var m=a[u].types,p=m&&m[i.code];a[u]=v5(u,e,a,o,p?[].concat(p,i.message):i.message)}n.shift()}return a}function nd(n,e,a){return a===void 0&&(a={}),function(i,o,c){try{return Promise.resolve((function(u,f){try{var m=Promise.resolve(n[a.mode==="sync"?"parse":"parseAsync"](i,e)).then(function(p){return c.shouldUseNativeValidation&&w5({},c),{errors:{},values:a.raw?Object.assign({},i):p}})}catch(p){return f(p)}return m&&m.then?m.then(void 0,f):m})(0,function(u){if((function(f){return Array.isArray(f?.errors)})(u))return{values:{},errors:zR(VR(u.errors,!c.shouldUseNativeValidation&&c.criteriaMode==="all"),c)};throw u}))}catch(u){return Promise.reject(u)}}}const GR=()=>{const n=async(o,c)=>{const u=window;return u.shell?.ajaxSafePost?u.shell.ajaxSafePost(o,c):(console.log(`[DEV MODE] API Call to trigger: ${o}`,c),new Promise(f=>{setTimeout(()=>{f({success:!0,data:c})},500)}))};return{postData:n,verifyBirthDate:async o=>await n("verify-birthdate",{birthDate:o}),verifyOTP:async o=>await n("verify-otp",{code:o}),submitForm:async o=>await n("submit-preadmission",o)}};var tn;(function(n){n.assertEqual=o=>{};function e(o){}n.assertIs=e;function a(o){throw new Error}n.assertNever=a,n.arrayToEnum=o=>{const c={};for(const u of o)c[u]=u;return c},n.getValidEnumValues=o=>{const c=n.objectKeys(o).filter(f=>typeof o[o[f]]!="number"),u={};for(const f of c)u[f]=o[f];return n.objectValues(u)},n.objectValues=o=>n.objectKeys(o).map(function(c){return o[c]}),n.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const c=[];for(const u in o)Object.prototype.hasOwnProperty.call(o,u)&&c.push(u);return c},n.find=(o,c)=>{for(const u of o)if(c(u))return u},n.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&Number.isFinite(o)&&Math.floor(o)===o;function i(o,c=" | "){return o.map(u=>typeof u=="string"?`'${u}'`:u).join(c)}n.joinValues=i,n.jsonStringifyReplacer=(o,c)=>typeof c=="bigint"?c.toString():c})(tn||(tn={}));var D2;(function(n){n.mergeShapes=(e,a)=>({...e,...a})})(D2||(D2={}));const Ee=tn.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Na=n=>{switch(typeof n){case"undefined":return Ee.undefined;case"string":return Ee.string;case"number":return Number.isNaN(n)?Ee.nan:Ee.number;case"boolean":return Ee.boolean;case"function":return Ee.function;case"bigint":return Ee.bigint;case"symbol":return Ee.symbol;case"object":return Array.isArray(n)?Ee.array:n===null?Ee.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?Ee.promise:typeof Map<"u"&&n instanceof Map?Ee.map:typeof Set<"u"&&n instanceof Set?Ee.set:typeof Date<"u"&&n instanceof Date?Ee.date:Ee.object;default:return Ee.unknown}},he=tn.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ea extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const a=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,a):this.__proto__=a,this.name="ZodError",this.issues=e}format(e){const a=e||function(c){return c.message},i={_errors:[]},o=c=>{for(const u of c.issues)if(u.code==="invalid_union")u.unionErrors.map(o);else if(u.code==="invalid_return_type")o(u.returnTypeError);else if(u.code==="invalid_arguments")o(u.argumentsError);else if(u.path.length===0)i._errors.push(a(u));else{let f=i,m=0;for(;m<u.path.length;){const p=u.path[m];m===u.path.length-1?(f[p]=f[p]||{_errors:[]},f[p]._errors.push(a(u))):f[p]=f[p]||{_errors:[]},f=f[p],m++}}};return o(this),i}static assert(e){if(!(e instanceof ea))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,tn.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=a=>a.message){const a={},i=[];for(const o of this.issues)if(o.path.length>0){const c=o.path[0];a[c]=a[c]||[],a[c].push(e(o))}else i.push(e(o));return{formErrors:i,fieldErrors:a}}get formErrors(){return this.flatten()}}ea.create=n=>new ea(n);const Fm=(n,e)=>{let a;switch(n.code){case he.invalid_type:n.received===Ee.undefined?a="Required":a=`Expected ${n.expected}, received ${n.received}`;break;case he.invalid_literal:a=`Invalid literal value, expected ${JSON.stringify(n.expected,tn.jsonStringifyReplacer)}`;break;case he.unrecognized_keys:a=`Unrecognized key(s) in object: ${tn.joinValues(n.keys,", ")}`;break;case he.invalid_union:a="Invalid input";break;case he.invalid_union_discriminator:a=`Invalid discriminator value. Expected ${tn.joinValues(n.options)}`;break;case he.invalid_enum_value:a=`Invalid enum value. Expected ${tn.joinValues(n.options)}, received '${n.received}'`;break;case he.invalid_arguments:a="Invalid function arguments";break;case he.invalid_return_type:a="Invalid function return type";break;case he.invalid_date:a="Invalid date";break;case he.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(a=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(a=`${a} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?a=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?a=`Invalid input: must end with "${n.validation.endsWith}"`:tn.assertNever(n.validation):n.validation!=="regex"?a=`Invalid ${n.validation}`:a="Invalid";break;case he.too_small:n.type==="array"?a=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?a=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?a=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="bigint"?a=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?a=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:a="Invalid input";break;case he.too_big:n.type==="array"?a=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?a=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?a=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?a=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?a=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:a="Invalid input";break;case he.custom:a="Invalid input";break;case he.invalid_intersection_types:a="Intersection results could not be merged";break;case he.not_multiple_of:a=`Number must be a multiple of ${n.multipleOf}`;break;case he.not_finite:a="Number must be finite";break;default:a=e.defaultError,tn.assertNever(n)}return{message:a}};let FR=Fm;function HR(){return FR}const IR=n=>{const{data:e,path:a,errorMaps:i,issueData:o}=n,c=[...a,...o.path||[]],u={...o,path:c};if(o.message!==void 0)return{...o,path:c,message:o.message};let f="";const m=i.filter(p=>!!p).slice().reverse();for(const p of m)f=p(u,{data:e,defaultError:f}).message;return{...o,path:c,message:f}};function ve(n,e){const a=HR(),i=IR({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,a,a===Fm?void 0:Fm].filter(o=>!!o)});n.common.issues.push(i)}class Vt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,a){const i=[];for(const o of a){if(o.status==="aborted")return je;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,a){const i=[];for(const o of a){const c=await o.key,u=await o.value;i.push({key:c,value:u})}return Vt.mergeObjectSync(e,i)}static mergeObjectSync(e,a){const i={};for(const o of a){const{key:c,value:u}=o;if(c.status==="aborted"||u.status==="aborted")return je;c.status==="dirty"&&e.dirty(),u.status==="dirty"&&e.dirty(),c.value!=="__proto__"&&(typeof u.value<"u"||o.alwaysSet)&&(i[c.value]=u.value)}return{status:e.value,value:i}}}const je=Object.freeze({status:"aborted"}),Xo=n=>({status:"dirty",value:n}),tr=n=>({status:"valid",value:n}),E2=n=>n.status==="aborted",N2=n=>n.status==="dirty",Ps=n=>n.status==="valid",Eu=n=>typeof Promise<"u"&&n instanceof Promise;var Re;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e?.message})(Re||(Re={}));class Va{constructor(e,a,i,o){this._cachedPath=[],this.parent=e,this.data=a,this._path=i,this._key=o}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const R2=(n,e)=>{if(Ps(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const a=new ea(n.common.issues);return this._error=a,this._error}}};function Je(n){if(!n)return{};const{errorMap:e,invalid_type_error:a,required_error:i,description:o}=n;if(e&&(a||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(u,f)=>{const{message:m}=n;return u.code==="invalid_enum_value"?{message:m??f.defaultError}:typeof f.data>"u"?{message:m??i??f.defaultError}:u.code!=="invalid_type"?{message:f.defaultError}:{message:m??a??f.defaultError}},description:o}}class Qe{get description(){return this._def.description}_getType(e){return Na(e.data)}_getOrReturnCtx(e,a){return a||{common:e.parent.common,data:e.data,parsedType:Na(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Vt,ctx:{common:e.parent.common,data:e.data,parsedType:Na(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const a=this._parse(e);if(Eu(a))throw new Error("Synchronous parse encountered promise.");return a}_parseAsync(e){const a=this._parse(e);return Promise.resolve(a)}parse(e,a){const i=this.safeParse(e,a);if(i.success)return i.data;throw i.error}safeParse(e,a){const i={common:{issues:[],async:a?.async??!1,contextualErrorMap:a?.errorMap},path:a?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Na(e)},o=this._parseSync({data:e,path:i.path,parent:i});return R2(i,o)}"~validate"(e){const a={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Na(e)};if(!this["~standard"].async)try{const i=this._parseSync({data:e,path:[],parent:a});return Ps(i)?{value:i.value}:{issues:a.common.issues}}catch(i){i?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),a.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:a}).then(i=>Ps(i)?{value:i.value}:{issues:a.common.issues})}async parseAsync(e,a){const i=await this.safeParseAsync(e,a);if(i.success)return i.data;throw i.error}async safeParseAsync(e,a){const i={common:{issues:[],contextualErrorMap:a?.errorMap,async:!0},path:a?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Na(e)},o=this._parse({data:e,path:i.path,parent:i}),c=await(Eu(o)?o:Promise.resolve(o));return R2(i,c)}refine(e,a){const i=o=>typeof a=="string"||typeof a>"u"?{message:a}:typeof a=="function"?a(o):a;return this._refinement((o,c)=>{const u=e(o),f=()=>c.addIssue({code:he.custom,...i(o)});return typeof Promise<"u"&&u instanceof Promise?u.then(m=>m?!0:(f(),!1)):u?!0:(f(),!1)})}refinement(e,a){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof a=="function"?a(i,o):a),!1))}_refinement(e){return new Ls({schema:this,typeName:Ve.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:a=>this["~validate"](a)}}optional(){return Pa.create(this,this._def)}nullable(){return _s.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Tr.create(this)}promise(){return Pu.create(this,this._def)}or(e){return Ru.create([this,e],this._def)}and(e){return ku.create(this,e,this._def)}transform(e){return new Ls({...Je(this._def),schema:this,typeName:Ve.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const a=typeof e=="function"?e:()=>e;return new Jm({...Je(this._def),innerType:this,defaultValue:a,typeName:Ve.ZodDefault})}brand(){return new fk({typeName:Ve.ZodBranded,type:this,...Je(this._def)})}catch(e){const a=typeof e=="function"?e:()=>e;return new Um({...Je(this._def),innerType:this,catchValue:a,typeName:Ve.ZodCatch})}describe(e){const a=this.constructor;return new a({...this._def,description:e})}pipe(e){return Qp.create(this,e)}readonly(){return qm.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const JR=/^c[^\s-]{8,}$/i,UR=/^[0-9a-z]+$/,qR=/^[0-9A-HJKMNP-TV-Z]{26}$/i,KR=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,YR=/^[a-z0-9_-]{21}$/i,ZR=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,WR=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,XR=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,QR="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let tm;const $R=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ek=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,nk=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,tk=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,rk=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,ak=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,T5="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",ik=new RegExp(`^${T5}$`);function D5(n){let e="[0-5]\\d";n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`);const a=n.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${a}`}function sk(n){return new RegExp(`^${D5(n)}$`)}function ok(n){let e=`${T5}T${D5(n)}`;const a=[];return a.push(n.local?"Z?":"Z"),n.offset&&a.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${a.join("|")})`,new RegExp(`^${e}$`)}function lk(n,e){return!!((e==="v4"||!e)&&$R.test(n)||(e==="v6"||!e)&&nk.test(n))}function ck(n,e){if(!ZR.test(n))return!1;try{const[a]=n.split(".");if(!a)return!1;const i=a.replace(/-/g,"+").replace(/_/g,"/").padEnd(a.length+(4-a.length%4)%4,"="),o=JSON.parse(atob(i));return!(typeof o!="object"||o===null||"typ"in o&&o?.typ!=="JWT"||!o.alg||e&&o.alg!==e)}catch{return!1}}function uk(n,e){return!!((e==="v4"||!e)&&ek.test(n)||(e==="v6"||!e)&&tk.test(n))}class ka extends Qe{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Ee.string){const c=this._getOrReturnCtx(e);return ve(c,{code:he.invalid_type,expected:Ee.string,received:c.parsedType}),je}const i=new Vt;let o;for(const c of this._def.checks)if(c.kind==="min")e.data.length<c.value&&(o=this._getOrReturnCtx(e,o),ve(o,{code:he.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),i.dirty());else if(c.kind==="max")e.data.length>c.value&&(o=this._getOrReturnCtx(e,o),ve(o,{code:he.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),i.dirty());else if(c.kind==="length"){const u=e.data.length>c.value,f=e.data.length<c.value;(u||f)&&(o=this._getOrReturnCtx(e,o),u?ve(o,{code:he.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}):f&&ve(o,{code:he.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}),i.dirty())}else if(c.kind==="email")XR.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"email",code:he.invalid_string,message:c.message}),i.dirty());else if(c.kind==="emoji")tm||(tm=new RegExp(QR,"u")),tm.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"emoji",code:he.invalid_string,message:c.message}),i.dirty());else if(c.kind==="uuid")KR.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"uuid",code:he.invalid_string,message:c.message}),i.dirty());else if(c.kind==="nanoid")YR.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"nanoid",code:he.invalid_string,message:c.message}),i.dirty());else if(c.kind==="cuid")JR.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"cuid",code:he.invalid_string,message:c.message}),i.dirty());else if(c.kind==="cuid2")UR.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"cuid2",code:he.invalid_string,message:c.message}),i.dirty());else if(c.kind==="ulid")qR.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"ulid",code:he.invalid_string,message:c.message}),i.dirty());else if(c.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),ve(o,{validation:"url",code:he.invalid_string,message:c.message}),i.dirty()}else c.kind==="regex"?(c.regex.lastIndex=0,c.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"regex",code:he.invalid_string,message:c.message}),i.dirty())):c.kind==="trim"?e.data=e.data.trim():c.kind==="includes"?e.data.includes(c.value,c.position)||(o=this._getOrReturnCtx(e,o),ve(o,{code:he.invalid_string,validation:{includes:c.value,position:c.position},message:c.message}),i.dirty()):c.kind==="toLowerCase"?e.data=e.data.toLowerCase():c.kind==="toUpperCase"?e.data=e.data.toUpperCase():c.kind==="startsWith"?e.data.startsWith(c.value)||(o=this._getOrReturnCtx(e,o),ve(o,{code:he.invalid_string,validation:{startsWith:c.value},message:c.message}),i.dirty()):c.kind==="endsWith"?e.data.endsWith(c.value)||(o=this._getOrReturnCtx(e,o),ve(o,{code:he.invalid_string,validation:{endsWith:c.value},message:c.message}),i.dirty()):c.kind==="datetime"?ok(c).test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{code:he.invalid_string,validation:"datetime",message:c.message}),i.dirty()):c.kind==="date"?ik.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{code:he.invalid_string,validation:"date",message:c.message}),i.dirty()):c.kind==="time"?sk(c).test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{code:he.invalid_string,validation:"time",message:c.message}),i.dirty()):c.kind==="duration"?WR.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"duration",code:he.invalid_string,message:c.message}),i.dirty()):c.kind==="ip"?lk(e.data,c.version)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"ip",code:he.invalid_string,message:c.message}),i.dirty()):c.kind==="jwt"?ck(e.data,c.alg)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"jwt",code:he.invalid_string,message:c.message}),i.dirty()):c.kind==="cidr"?uk(e.data,c.version)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"cidr",code:he.invalid_string,message:c.message}),i.dirty()):c.kind==="base64"?rk.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"base64",code:he.invalid_string,message:c.message}),i.dirty()):c.kind==="base64url"?ak.test(e.data)||(o=this._getOrReturnCtx(e,o),ve(o,{validation:"base64url",code:he.invalid_string,message:c.message}),i.dirty()):tn.assertNever(c);return{status:i.value,value:e.data}}_regex(e,a,i){return this.refinement(o=>e.test(o),{validation:a,code:he.invalid_string,...Re.errToObj(i)})}_addCheck(e){return new ka({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Re.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Re.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Re.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Re.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Re.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Re.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Re.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Re.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Re.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...Re.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...Re.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Re.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...Re.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...Re.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...Re.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...Re.errToObj(e)})}regex(e,a){return this._addCheck({kind:"regex",regex:e,...Re.errToObj(a)})}includes(e,a){return this._addCheck({kind:"includes",value:e,position:a?.position,...Re.errToObj(a?.message)})}startsWith(e,a){return this._addCheck({kind:"startsWith",value:e,...Re.errToObj(a)})}endsWith(e,a){return this._addCheck({kind:"endsWith",value:e,...Re.errToObj(a)})}min(e,a){return this._addCheck({kind:"min",value:e,...Re.errToObj(a)})}max(e,a){return this._addCheck({kind:"max",value:e,...Re.errToObj(a)})}length(e,a){return this._addCheck({kind:"length",value:e,...Re.errToObj(a)})}nonempty(e){return this.min(1,Re.errToObj(e))}trim(){return new ka({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ka({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ka({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const a of this._def.checks)a.kind==="min"&&(e===null||a.value>e)&&(e=a.value);return e}get maxLength(){let e=null;for(const a of this._def.checks)a.kind==="max"&&(e===null||a.value<e)&&(e=a.value);return e}}ka.create=n=>new ka({checks:[],typeName:Ve.ZodString,coerce:n?.coerce??!1,...Je(n)});function dk(n,e){const a=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=a>i?a:i,c=Number.parseInt(n.toFixed(o).replace(".","")),u=Number.parseInt(e.toFixed(o).replace(".",""));return c%u/10**o}class hl extends Qe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Ee.number){const c=this._getOrReturnCtx(e);return ve(c,{code:he.invalid_type,expected:Ee.number,received:c.parsedType}),je}let i;const o=new Vt;for(const c of this._def.checks)c.kind==="int"?tn.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),ve(i,{code:he.invalid_type,expected:"integer",received:"float",message:c.message}),o.dirty()):c.kind==="min"?(c.inclusive?e.data<c.value:e.data<=c.value)&&(i=this._getOrReturnCtx(e,i),ve(i,{code:he.too_small,minimum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),o.dirty()):c.kind==="max"?(c.inclusive?e.data>c.value:e.data>=c.value)&&(i=this._getOrReturnCtx(e,i),ve(i,{code:he.too_big,maximum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),o.dirty()):c.kind==="multipleOf"?dk(e.data,c.value)!==0&&(i=this._getOrReturnCtx(e,i),ve(i,{code:he.not_multiple_of,multipleOf:c.value,message:c.message}),o.dirty()):c.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),ve(i,{code:he.not_finite,message:c.message}),o.dirty()):tn.assertNever(c);return{status:o.value,value:e.data}}gte(e,a){return this.setLimit("min",e,!0,Re.toString(a))}gt(e,a){return this.setLimit("min",e,!1,Re.toString(a))}lte(e,a){return this.setLimit("max",e,!0,Re.toString(a))}lt(e,a){return this.setLimit("max",e,!1,Re.toString(a))}setLimit(e,a,i,o){return new hl({...this._def,checks:[...this._def.checks,{kind:e,value:a,inclusive:i,message:Re.toString(o)}]})}_addCheck(e){return new hl({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Re.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Re.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Re.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Re.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Re.toString(e)})}multipleOf(e,a){return this._addCheck({kind:"multipleOf",value:e,message:Re.toString(a)})}finite(e){return this._addCheck({kind:"finite",message:Re.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Re.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Re.toString(e)})}get minValue(){let e=null;for(const a of this._def.checks)a.kind==="min"&&(e===null||a.value>e)&&(e=a.value);return e}get maxValue(){let e=null;for(const a of this._def.checks)a.kind==="max"&&(e===null||a.value<e)&&(e=a.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&tn.isInteger(e.value))}get isFinite(){let e=null,a=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(a===null||i.value>a)&&(a=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(a)&&Number.isFinite(e)}}hl.create=n=>new hl({checks:[],typeName:Ve.ZodNumber,coerce:n?.coerce||!1,...Je(n)});class ml extends Qe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==Ee.bigint)return this._getInvalidInput(e);let i;const o=new Vt;for(const c of this._def.checks)c.kind==="min"?(c.inclusive?e.data<c.value:e.data<=c.value)&&(i=this._getOrReturnCtx(e,i),ve(i,{code:he.too_small,type:"bigint",minimum:c.value,inclusive:c.inclusive,message:c.message}),o.dirty()):c.kind==="max"?(c.inclusive?e.data>c.value:e.data>=c.value)&&(i=this._getOrReturnCtx(e,i),ve(i,{code:he.too_big,type:"bigint",maximum:c.value,inclusive:c.inclusive,message:c.message}),o.dirty()):c.kind==="multipleOf"?e.data%c.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),ve(i,{code:he.not_multiple_of,multipleOf:c.value,message:c.message}),o.dirty()):tn.assertNever(c);return{status:o.value,value:e.data}}_getInvalidInput(e){const a=this._getOrReturnCtx(e);return ve(a,{code:he.invalid_type,expected:Ee.bigint,received:a.parsedType}),je}gte(e,a){return this.setLimit("min",e,!0,Re.toString(a))}gt(e,a){return this.setLimit("min",e,!1,Re.toString(a))}lte(e,a){return this.setLimit("max",e,!0,Re.toString(a))}lt(e,a){return this.setLimit("max",e,!1,Re.toString(a))}setLimit(e,a,i,o){return new ml({...this._def,checks:[...this._def.checks,{kind:e,value:a,inclusive:i,message:Re.toString(o)}]})}_addCheck(e){return new ml({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Re.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Re.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Re.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Re.toString(e)})}multipleOf(e,a){return this._addCheck({kind:"multipleOf",value:e,message:Re.toString(a)})}get minValue(){let e=null;for(const a of this._def.checks)a.kind==="min"&&(e===null||a.value>e)&&(e=a.value);return e}get maxValue(){let e=null;for(const a of this._def.checks)a.kind==="max"&&(e===null||a.value<e)&&(e=a.value);return e}}ml.create=n=>new ml({checks:[],typeName:Ve.ZodBigInt,coerce:n?.coerce??!1,...Je(n)});class Hm extends Qe{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Ee.boolean){const i=this._getOrReturnCtx(e);return ve(i,{code:he.invalid_type,expected:Ee.boolean,received:i.parsedType}),je}return tr(e.data)}}Hm.create=n=>new Hm({typeName:Ve.ZodBoolean,coerce:n?.coerce||!1,...Je(n)});class Nu extends Qe{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Ee.date){const c=this._getOrReturnCtx(e);return ve(c,{code:he.invalid_type,expected:Ee.date,received:c.parsedType}),je}if(Number.isNaN(e.data.getTime())){const c=this._getOrReturnCtx(e);return ve(c,{code:he.invalid_date}),je}const i=new Vt;let o;for(const c of this._def.checks)c.kind==="min"?e.data.getTime()<c.value&&(o=this._getOrReturnCtx(e,o),ve(o,{code:he.too_small,message:c.message,inclusive:!0,exact:!1,minimum:c.value,type:"date"}),i.dirty()):c.kind==="max"?e.data.getTime()>c.value&&(o=this._getOrReturnCtx(e,o),ve(o,{code:he.too_big,message:c.message,inclusive:!0,exact:!1,maximum:c.value,type:"date"}),i.dirty()):tn.assertNever(c);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Nu({...this._def,checks:[...this._def.checks,e]})}min(e,a){return this._addCheck({kind:"min",value:e.getTime(),message:Re.toString(a)})}max(e,a){return this._addCheck({kind:"max",value:e.getTime(),message:Re.toString(a)})}get minDate(){let e=null;for(const a of this._def.checks)a.kind==="min"&&(e===null||a.value>e)&&(e=a.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const a of this._def.checks)a.kind==="max"&&(e===null||a.value<e)&&(e=a.value);return e!=null?new Date(e):null}}Nu.create=n=>new Nu({checks:[],coerce:n?.coerce||!1,typeName:Ve.ZodDate,...Je(n)});class k2 extends Qe{_parse(e){if(this._getType(e)!==Ee.symbol){const i=this._getOrReturnCtx(e);return ve(i,{code:he.invalid_type,expected:Ee.symbol,received:i.parsedType}),je}return tr(e.data)}}k2.create=n=>new k2({typeName:Ve.ZodSymbol,...Je(n)});class P2 extends Qe{_parse(e){if(this._getType(e)!==Ee.undefined){const i=this._getOrReturnCtx(e);return ve(i,{code:he.invalid_type,expected:Ee.undefined,received:i.parsedType}),je}return tr(e.data)}}P2.create=n=>new P2({typeName:Ve.ZodUndefined,...Je(n)});class B2 extends Qe{_parse(e){if(this._getType(e)!==Ee.null){const i=this._getOrReturnCtx(e);return ve(i,{code:he.invalid_type,expected:Ee.null,received:i.parsedType}),je}return tr(e.data)}}B2.create=n=>new B2({typeName:Ve.ZodNull,...Je(n)});class pl extends Qe{constructor(){super(...arguments),this._any=!0}_parse(e){return tr(e.data)}}pl.create=n=>new pl({typeName:Ve.ZodAny,...Je(n)});class L2 extends Qe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return tr(e.data)}}L2.create=n=>new L2({typeName:Ve.ZodUnknown,...Je(n)});class Ga extends Qe{_parse(e){const a=this._getOrReturnCtx(e);return ve(a,{code:he.invalid_type,expected:Ee.never,received:a.parsedType}),je}}Ga.create=n=>new Ga({typeName:Ve.ZodNever,...Je(n)});class _2 extends Qe{_parse(e){if(this._getType(e)!==Ee.undefined){const i=this._getOrReturnCtx(e);return ve(i,{code:he.invalid_type,expected:Ee.void,received:i.parsedType}),je}return tr(e.data)}}_2.create=n=>new _2({typeName:Ve.ZodVoid,...Je(n)});class Tr extends Qe{_parse(e){const{ctx:a,status:i}=this._processInputParams(e),o=this._def;if(a.parsedType!==Ee.array)return ve(a,{code:he.invalid_type,expected:Ee.array,received:a.parsedType}),je;if(o.exactLength!==null){const u=a.data.length>o.exactLength.value,f=a.data.length<o.exactLength.value;(u||f)&&(ve(a,{code:u?he.too_big:he.too_small,minimum:f?o.exactLength.value:void 0,maximum:u?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&a.data.length<o.minLength.value&&(ve(a,{code:he.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&a.data.length>o.maxLength.value&&(ve(a,{code:he.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),a.common.async)return Promise.all([...a.data].map((u,f)=>o.type._parseAsync(new Va(a,u,a.path,f)))).then(u=>Vt.mergeArray(i,u));const c=[...a.data].map((u,f)=>o.type._parseSync(new Va(a,u,a.path,f)));return Vt.mergeArray(i,c)}get element(){return this._def.type}min(e,a){return new Tr({...this._def,minLength:{value:e,message:Re.toString(a)}})}max(e,a){return new Tr({...this._def,maxLength:{value:e,message:Re.toString(a)}})}length(e,a){return new Tr({...this._def,exactLength:{value:e,message:Re.toString(a)}})}nonempty(e){return this.min(1,e)}}Tr.create=(n,e)=>new Tr({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Ve.ZodArray,...Je(e)});function bs(n){if(n instanceof Yn){const e={};for(const a in n.shape){const i=n.shape[a];e[a]=Pa.create(bs(i))}return new Yn({...n._def,shape:()=>e})}else return n instanceof Tr?new Tr({...n._def,type:bs(n.element)}):n instanceof Pa?Pa.create(bs(n.unwrap())):n instanceof _s?_s.create(bs(n.unwrap())):n instanceof Ci?Ci.create(n.items.map(e=>bs(e))):n}class Yn extends Qe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),a=tn.objectKeys(e);return this._cached={shape:e,keys:a},this._cached}_parse(e){if(this._getType(e)!==Ee.object){const p=this._getOrReturnCtx(e);return ve(p,{code:he.invalid_type,expected:Ee.object,received:p.parsedType}),je}const{status:i,ctx:o}=this._processInputParams(e),{shape:c,keys:u}=this._getCached(),f=[];if(!(this._def.catchall instanceof Ga&&this._def.unknownKeys==="strip"))for(const p in o.data)u.includes(p)||f.push(p);const m=[];for(const p of u){const y=c[p],v=o.data[p];m.push({key:{status:"valid",value:p},value:y._parse(new Va(o,v,o.path,p)),alwaysSet:p in o.data})}if(this._def.catchall instanceof Ga){const p=this._def.unknownKeys;if(p==="passthrough")for(const y of f)m.push({key:{status:"valid",value:y},value:{status:"valid",value:o.data[y]}});else if(p==="strict")f.length>0&&(ve(o,{code:he.unrecognized_keys,keys:f}),i.dirty());else if(p!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const p=this._def.catchall;for(const y of f){const v=o.data[y];m.push({key:{status:"valid",value:y},value:p._parse(new Va(o,v,o.path,y)),alwaysSet:y in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const p=[];for(const y of m){const v=await y.key,S=await y.value;p.push({key:v,value:S,alwaysSet:y.alwaysSet})}return p}).then(p=>Vt.mergeObjectSync(i,p)):Vt.mergeObjectSync(i,m)}get shape(){return this._def.shape()}strict(e){return Re.errToObj,new Yn({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(a,i)=>{const o=this._def.errorMap?.(a,i).message??i.defaultError;return a.code==="unrecognized_keys"?{message:Re.errToObj(e).message??o}:{message:o}}}:{}})}strip(){return new Yn({...this._def,unknownKeys:"strip"})}passthrough(){return new Yn({...this._def,unknownKeys:"passthrough"})}extend(e){return new Yn({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Yn({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ve.ZodObject})}setKey(e,a){return this.augment({[e]:a})}catchall(e){return new Yn({...this._def,catchall:e})}pick(e){const a={};for(const i of tn.objectKeys(e))e[i]&&this.shape[i]&&(a[i]=this.shape[i]);return new Yn({...this._def,shape:()=>a})}omit(e){const a={};for(const i of tn.objectKeys(this.shape))e[i]||(a[i]=this.shape[i]);return new Yn({...this._def,shape:()=>a})}deepPartial(){return bs(this)}partial(e){const a={};for(const i of tn.objectKeys(this.shape)){const o=this.shape[i];e&&!e[i]?a[i]=o:a[i]=o.optional()}return new Yn({...this._def,shape:()=>a})}required(e){const a={};for(const i of tn.objectKeys(this.shape))if(e&&!e[i])a[i]=this.shape[i];else{let c=this.shape[i];for(;c instanceof Pa;)c=c._def.innerType;a[i]=c}return new Yn({...this._def,shape:()=>a})}keyof(){return E5(tn.objectKeys(this.shape))}}Yn.create=(n,e)=>new Yn({shape:()=>n,unknownKeys:"strip",catchall:Ga.create(),typeName:Ve.ZodObject,...Je(e)});Yn.strictCreate=(n,e)=>new Yn({shape:()=>n,unknownKeys:"strict",catchall:Ga.create(),typeName:Ve.ZodObject,...Je(e)});Yn.lazycreate=(n,e)=>new Yn({shape:n,unknownKeys:"strip",catchall:Ga.create(),typeName:Ve.ZodObject,...Je(e)});class Ru extends Qe{_parse(e){const{ctx:a}=this._processInputParams(e),i=this._def.options;function o(c){for(const f of c)if(f.result.status==="valid")return f.result;for(const f of c)if(f.result.status==="dirty")return a.common.issues.push(...f.ctx.common.issues),f.result;const u=c.map(f=>new ea(f.ctx.common.issues));return ve(a,{code:he.invalid_union,unionErrors:u}),je}if(a.common.async)return Promise.all(i.map(async c=>{const u={...a,common:{...a.common,issues:[]},parent:null};return{result:await c._parseAsync({data:a.data,path:a.path,parent:u}),ctx:u}})).then(o);{let c;const u=[];for(const m of i){const p={...a,common:{...a.common,issues:[]},parent:null},y=m._parseSync({data:a.data,path:a.path,parent:p});if(y.status==="valid")return y;y.status==="dirty"&&!c&&(c={result:y,ctx:p}),p.common.issues.length&&u.push(p.common.issues)}if(c)return a.common.issues.push(...c.ctx.common.issues),c.result;const f=u.map(m=>new ea(m));return ve(a,{code:he.invalid_union,unionErrors:f}),je}}get options(){return this._def.options}}Ru.create=(n,e)=>new Ru({options:n,typeName:Ve.ZodUnion,...Je(e)});function Im(n,e){const a=Na(n),i=Na(e);if(n===e)return{valid:!0,data:n};if(a===Ee.object&&i===Ee.object){const o=tn.objectKeys(e),c=tn.objectKeys(n).filter(f=>o.indexOf(f)!==-1),u={...n,...e};for(const f of c){const m=Im(n[f],e[f]);if(!m.valid)return{valid:!1};u[f]=m.data}return{valid:!0,data:u}}else if(a===Ee.array&&i===Ee.array){if(n.length!==e.length)return{valid:!1};const o=[];for(let c=0;c<n.length;c++){const u=n[c],f=e[c],m=Im(u,f);if(!m.valid)return{valid:!1};o.push(m.data)}return{valid:!0,data:o}}else return a===Ee.date&&i===Ee.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class ku extends Qe{_parse(e){const{status:a,ctx:i}=this._processInputParams(e),o=(c,u)=>{if(E2(c)||E2(u))return je;const f=Im(c.value,u.value);return f.valid?((N2(c)||N2(u))&&a.dirty(),{status:a.value,value:f.data}):(ve(i,{code:he.invalid_intersection_types}),je)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([c,u])=>o(c,u)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}ku.create=(n,e,a)=>new ku({left:n,right:e,typeName:Ve.ZodIntersection,...Je(a)});class Ci extends Qe{_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ee.array)return ve(i,{code:he.invalid_type,expected:Ee.array,received:i.parsedType}),je;if(i.data.length<this._def.items.length)return ve(i,{code:he.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),je;!this._def.rest&&i.data.length>this._def.items.length&&(ve(i,{code:he.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),a.dirty());const c=[...i.data].map((u,f)=>{const m=this._def.items[f]||this._def.rest;return m?m._parse(new Va(i,u,i.path,f)):null}).filter(u=>!!u);return i.common.async?Promise.all(c).then(u=>Vt.mergeArray(a,u)):Vt.mergeArray(a,c)}get items(){return this._def.items}rest(e){return new Ci({...this._def,rest:e})}}Ci.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ci({items:n,typeName:Ve.ZodTuple,rest:null,...Je(e)})};class O2 extends Qe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ee.map)return ve(i,{code:he.invalid_type,expected:Ee.map,received:i.parsedType}),je;const o=this._def.keyType,c=this._def.valueType,u=[...i.data.entries()].map(([f,m],p)=>({key:o._parse(new Va(i,f,i.path,[p,"key"])),value:c._parse(new Va(i,m,i.path,[p,"value"]))}));if(i.common.async){const f=new Map;return Promise.resolve().then(async()=>{for(const m of u){const p=await m.key,y=await m.value;if(p.status==="aborted"||y.status==="aborted")return je;(p.status==="dirty"||y.status==="dirty")&&a.dirty(),f.set(p.value,y.value)}return{status:a.value,value:f}})}else{const f=new Map;for(const m of u){const p=m.key,y=m.value;if(p.status==="aborted"||y.status==="aborted")return je;(p.status==="dirty"||y.status==="dirty")&&a.dirty(),f.set(p.value,y.value)}return{status:a.value,value:f}}}}O2.create=(n,e,a)=>new O2({valueType:e,keyType:n,typeName:Ve.ZodMap,...Je(a)});class gl extends Qe{_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ee.set)return ve(i,{code:he.invalid_type,expected:Ee.set,received:i.parsedType}),je;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ve(i,{code:he.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),a.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ve(i,{code:he.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),a.dirty());const c=this._def.valueType;function u(m){const p=new Set;for(const y of m){if(y.status==="aborted")return je;y.status==="dirty"&&a.dirty(),p.add(y.value)}return{status:a.value,value:p}}const f=[...i.data.values()].map((m,p)=>c._parse(new Va(i,m,i.path,p)));return i.common.async?Promise.all(f).then(m=>u(m)):u(f)}min(e,a){return new gl({...this._def,minSize:{value:e,message:Re.toString(a)}})}max(e,a){return new gl({...this._def,maxSize:{value:e,message:Re.toString(a)}})}size(e,a){return this.min(e,a).max(e,a)}nonempty(e){return this.min(1,e)}}gl.create=(n,e)=>new gl({valueType:n,minSize:null,maxSize:null,typeName:Ve.ZodSet,...Je(e)});class z2 extends Qe{get schema(){return this._def.getter()}_parse(e){const{ctx:a}=this._processInputParams(e);return this._def.getter()._parse({data:a.data,path:a.path,parent:a})}}z2.create=(n,e)=>new z2({getter:n,typeName:Ve.ZodLazy,...Je(e)});class j2 extends Qe{_parse(e){if(e.data!==this._def.value){const a=this._getOrReturnCtx(e);return ve(a,{received:a.data,code:he.invalid_literal,expected:this._def.value}),je}return{status:"valid",value:e.data}}get value(){return this._def.value}}j2.create=(n,e)=>new j2({value:n,typeName:Ve.ZodLiteral,...Je(e)});function E5(n,e){return new Bs({values:n,typeName:Ve.ZodEnum,...Je(e)})}class Bs extends Qe{_parse(e){if(typeof e.data!="string"){const a=this._getOrReturnCtx(e),i=this._def.values;return ve(a,{expected:tn.joinValues(i),received:a.parsedType,code:he.invalid_type}),je}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const a=this._getOrReturnCtx(e),i=this._def.values;return ve(a,{received:a.data,code:he.invalid_enum_value,options:i}),je}return tr(e.data)}get options(){return this._def.values}get enum(){const e={};for(const a of this._def.values)e[a]=a;return e}get Values(){const e={};for(const a of this._def.values)e[a]=a;return e}get Enum(){const e={};for(const a of this._def.values)e[a]=a;return e}extract(e,a=this._def){return Bs.create(e,{...this._def,...a})}exclude(e,a=this._def){return Bs.create(this.options.filter(i=>!e.includes(i)),{...this._def,...a})}}Bs.create=E5;class V2 extends Qe{_parse(e){const a=tn.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==Ee.string&&i.parsedType!==Ee.number){const o=tn.objectValues(a);return ve(i,{expected:tn.joinValues(o),received:i.parsedType,code:he.invalid_type}),je}if(this._cache||(this._cache=new Set(tn.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const o=tn.objectValues(a);return ve(i,{received:i.data,code:he.invalid_enum_value,options:o}),je}return tr(e.data)}get enum(){return this._def.values}}V2.create=(n,e)=>new V2({values:n,typeName:Ve.ZodNativeEnum,...Je(e)});class Pu extends Qe{unwrap(){return this._def.type}_parse(e){const{ctx:a}=this._processInputParams(e);if(a.parsedType!==Ee.promise&&a.common.async===!1)return ve(a,{code:he.invalid_type,expected:Ee.promise,received:a.parsedType}),je;const i=a.parsedType===Ee.promise?a.data:Promise.resolve(a.data);return tr(i.then(o=>this._def.type.parseAsync(o,{path:a.path,errorMap:a.common.contextualErrorMap})))}}Pu.create=(n,e)=>new Pu({type:n,typeName:Ve.ZodPromise,...Je(e)});class Ls extends Qe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ve.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:a,ctx:i}=this._processInputParams(e),o=this._def.effect||null,c={addIssue:u=>{ve(i,u),u.fatal?a.abort():a.dirty()},get path(){return i.path}};if(c.addIssue=c.addIssue.bind(c),o.type==="preprocess"){const u=o.transform(i.data,c);if(i.common.async)return Promise.resolve(u).then(async f=>{if(a.value==="aborted")return je;const m=await this._def.schema._parseAsync({data:f,path:i.path,parent:i});return m.status==="aborted"?je:m.status==="dirty"||a.value==="dirty"?Xo(m.value):m});{if(a.value==="aborted")return je;const f=this._def.schema._parseSync({data:u,path:i.path,parent:i});return f.status==="aborted"?je:f.status==="dirty"||a.value==="dirty"?Xo(f.value):f}}if(o.type==="refinement"){const u=f=>{const m=o.refinement(f,c);if(i.common.async)return Promise.resolve(m);if(m instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return f};if(i.common.async===!1){const f=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return f.status==="aborted"?je:(f.status==="dirty"&&a.dirty(),u(f.value),{status:a.value,value:f.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(f=>f.status==="aborted"?je:(f.status==="dirty"&&a.dirty(),u(f.value).then(()=>({status:a.value,value:f.value}))))}if(o.type==="transform")if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ps(u))return je;const f=o.transform(u.value,c);if(f instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:a.value,value:f}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>Ps(u)?Promise.resolve(o.transform(u.value,c)).then(f=>({status:a.value,value:f})):je);tn.assertNever(o)}}Ls.create=(n,e,a)=>new Ls({schema:n,typeName:Ve.ZodEffects,effect:e,...Je(a)});Ls.createWithPreprocess=(n,e,a)=>new Ls({schema:e,effect:{type:"preprocess",transform:n},typeName:Ve.ZodEffects,...Je(a)});class Pa extends Qe{_parse(e){return this._getType(e)===Ee.undefined?tr(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Pa.create=(n,e)=>new Pa({innerType:n,typeName:Ve.ZodOptional,...Je(e)});class _s extends Qe{_parse(e){return this._getType(e)===Ee.null?tr(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}_s.create=(n,e)=>new _s({innerType:n,typeName:Ve.ZodNullable,...Je(e)});class Jm extends Qe{_parse(e){const{ctx:a}=this._processInputParams(e);let i=a.data;return a.parsedType===Ee.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:a.path,parent:a})}removeDefault(){return this._def.innerType}}Jm.create=(n,e)=>new Jm({innerType:n,typeName:Ve.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Je(e)});class Um extends Qe{_parse(e){const{ctx:a}=this._processInputParams(e),i={...a,common:{...a.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Eu(o)?o.then(c=>({status:"valid",value:c.status==="valid"?c.value:this._def.catchValue({get error(){return new ea(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new ea(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Um.create=(n,e)=>new Um({innerType:n,typeName:Ve.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Je(e)});class G2 extends Qe{_parse(e){if(this._getType(e)!==Ee.nan){const i=this._getOrReturnCtx(e);return ve(i,{code:he.invalid_type,expected:Ee.nan,received:i.parsedType}),je}return{status:"valid",value:e.data}}}G2.create=n=>new G2({typeName:Ve.ZodNaN,...Je(n)});class fk extends Qe{_parse(e){const{ctx:a}=this._processInputParams(e),i=a.data;return this._def.type._parse({data:i,path:a.path,parent:a})}unwrap(){return this._def.type}}class Qp extends Qe{_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const c=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return c.status==="aborted"?je:c.status==="dirty"?(a.dirty(),Xo(c.value)):this._def.out._parseAsync({data:c.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?je:o.status==="dirty"?(a.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,a){return new Qp({in:e,out:a,typeName:Ve.ZodPipeline})}}class qm extends Qe{_parse(e){const a=this._def.innerType._parse(e),i=o=>(Ps(o)&&(o.value=Object.freeze(o.value)),o);return Eu(a)?a.then(o=>i(o)):i(a)}unwrap(){return this._def.innerType}}qm.create=(n,e)=>new qm({innerType:n,typeName:Ve.ZodReadonly,...Je(e)});function F2(n,e){const a=typeof n=="function"?n(e):typeof n=="string"?{message:n}:n;return typeof a=="string"?{message:a}:a}function hk(n,e={},a){return n?pl.create().superRefine((i,o)=>{const c=n(i);if(c instanceof Promise)return c.then(u=>{if(!u){const f=F2(e,i),m=f.fatal??a??!0;o.addIssue({code:"custom",...f,fatal:m})}});if(!c){const u=F2(e,i),f=u.fatal??a??!0;o.addIssue({code:"custom",...u,fatal:f})}}):pl.create()}var Ve;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Ve||(Ve={}));const rm=(n,e={message:`Input not instance of ${n.name}`})=>hk(a=>a instanceof n,e),nn=ka.create,am=Hm.create;pl.create;Ga.create;Tr.create;const td=Yn.create;Ru.create;ku.create;Ci.create;const H2=Bs.create;Pu.create;Pa.create;_s.create;const N5=n=>{if(!n||n.length!==10)return!1;const[e,a,i]=n.split("-"),o=new Date(parseInt(e),parseInt(a)-1,parseInt(i));return!isNaN(o.getTime())&&o.getDate()===parseInt(i)&&o.getMonth()===parseInt(a)-1&&o.getFullYear()===parseInt(e)},mk=n=>td({birthDate:nn().min(1,n.required).refine(N5,n.invalid).refine(e=>{const[a,i,o]=e.split("-");return new Date(parseInt(a),parseInt(i)-1,parseInt(o))<=new Date},n.futureDate)});function Gn(n){const e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new n.constructor(+n):typeof n=="number"||e==="[object Number]"||typeof n=="string"||e==="[object String]"?new Date(n):new Date(NaN)}function kn(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}function R5(n,e){const a=Gn(n);return isNaN(e)?kn(n,NaN):(e&&a.setDate(a.getDate()+e),a)}const k5=6048e5,pk=864e5,gk=6e4,yk=36e5,vk=1e3;let bk={};function Ks(){return bk}function Fa(n,e){const a=Ks(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,o=Gn(n),c=o.getDay(),u=(c<i?7:0)+c-i;return o.setDate(o.getDate()-u),o.setHours(0,0,0,0),o}function Os(n){return Fa(n,{weekStartsOn:1})}function P5(n){const e=Gn(n),a=e.getFullYear(),i=kn(n,0);i.setFullYear(a+1,0,4),i.setHours(0,0,0,0);const o=Os(i),c=kn(n,0);c.setFullYear(a,0,4),c.setHours(0,0,0,0);const u=Os(c);return e.getTime()>=o.getTime()?a+1:e.getTime()>=u.getTime()?a:a-1}function Km(n){const e=Gn(n);return e.setHours(0,0,0,0),e}function Bu(n){const e=Gn(n),a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),+n-+a}function xk(n,e){const a=Km(n),i=Km(e),o=+a-Bu(a),c=+i-Bu(i);return Math.round((o-c)/pk)}function Sk(n){const e=P5(n),a=kn(n,0);return a.setFullYear(e,0,4),a.setHours(0,0,0,0),Os(a)}function Mk(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function $p(n){if(!Mk(n)&&typeof n!="number")return!1;const e=Gn(n);return!isNaN(Number(e))}function Ck(n){const e=Gn(n),a=kn(n,0);return a.setFullYear(e.getFullYear(),0,1),a.setHours(0,0,0,0),a}const Ak={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},wk=(n,e,a)=>{let i;const o=Ak[n];return typeof o=="string"?i=o:e===1?i=o.one:i=o.other.replace("{{count}}",e.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+i:i+" ago":i};function im(n){return(e={})=>{const a=e.width?String(e.width):n.defaultWidth;return n.formats[a]||n.formats[n.defaultWidth]}}const Tk={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Dk={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ek={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Nk={date:im({formats:Tk,defaultWidth:"full"}),time:im({formats:Dk,defaultWidth:"full"}),dateTime:im({formats:Ek,defaultWidth:"full"})},Rk={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},kk=(n,e,a,i)=>Rk[n];function qo(n){return(e,a)=>{const i=a?.context?String(a.context):"standalone";let o;if(i==="formatting"&&n.formattingValues){const u=n.defaultFormattingWidth||n.defaultWidth,f=a?.width?String(a.width):u;o=n.formattingValues[f]||n.formattingValues[u]}else{const u=n.defaultWidth,f=a?.width?String(a.width):n.defaultWidth;o=n.values[f]||n.values[u]}const c=n.argumentCallback?n.argumentCallback(e):e;return o[c]}}const Pk={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Bk={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Lk={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},_k={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ok={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},zk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},jk=(n,e)=>{const a=Number(n),i=a%100;if(i>20||i<10)switch(i%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Vk={ordinalNumber:jk,era:qo({values:Pk,defaultWidth:"wide"}),quarter:qo({values:Bk,defaultWidth:"wide",argumentCallback:n=>n-1}),month:qo({values:Lk,defaultWidth:"wide"}),day:qo({values:_k,defaultWidth:"wide"}),dayPeriod:qo({values:Ok,defaultWidth:"wide",formattingValues:zk,defaultFormattingWidth:"wide"})};function Ko(n){return(e,a={})=>{const i=a.width,o=i&&n.matchPatterns[i]||n.matchPatterns[n.defaultMatchWidth],c=e.match(o);if(!c)return null;const u=c[0],f=i&&n.parsePatterns[i]||n.parsePatterns[n.defaultParseWidth],m=Array.isArray(f)?Fk(f,v=>v.test(u)):Gk(f,v=>v.test(u));let p;p=n.valueCallback?n.valueCallback(m):m,p=a.valueCallback?a.valueCallback(p):p;const y=e.slice(u.length);return{value:p,rest:y}}}function Gk(n,e){for(const a in n)if(Object.prototype.hasOwnProperty.call(n,a)&&e(n[a]))return a}function Fk(n,e){for(let a=0;a<n.length;a++)if(e(n[a]))return a}function Hk(n){return(e,a={})=>{const i=e.match(n.matchPattern);if(!i)return null;const o=i[0],c=e.match(n.parsePattern);if(!c)return null;let u=n.valueCallback?n.valueCallback(c[0]):c[0];u=a.valueCallback?a.valueCallback(u):u;const f=e.slice(o.length);return{value:u,rest:f}}}const Ik=/^(\d+)(th|st|nd|rd)?/i,Jk=/\d+/i,Uk={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qk={any:[/^b/i,/^(a|c)/i]},Kk={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Yk={any:[/1/i,/2/i,/3/i,/4/i]},Zk={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Wk={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xk={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qk={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$k={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},eP={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},nP={ordinalNumber:Hk({matchPattern:Ik,parsePattern:Jk,valueCallback:n=>parseInt(n,10)}),era:Ko({matchPatterns:Uk,defaultMatchWidth:"wide",parsePatterns:qk,defaultParseWidth:"any"}),quarter:Ko({matchPatterns:Kk,defaultMatchWidth:"wide",parsePatterns:Yk,defaultParseWidth:"any",valueCallback:n=>n+1}),month:Ko({matchPatterns:Zk,defaultMatchWidth:"wide",parsePatterns:Wk,defaultParseWidth:"any"}),day:Ko({matchPatterns:Xk,defaultMatchWidth:"wide",parsePatterns:Qk,defaultParseWidth:"any"}),dayPeriod:Ko({matchPatterns:$k,defaultMatchWidth:"any",parsePatterns:eP,defaultParseWidth:"any"})},B5={code:"en-US",formatDistance:wk,formatLong:Nk,formatRelative:kk,localize:Vk,match:nP,options:{weekStartsOn:0,firstWeekContainsDate:1}};function tP(n){const e=Gn(n);return xk(e,Ck(e))+1}function L5(n){const e=Gn(n),a=+Os(e)-+Sk(e);return Math.round(a/k5)+1}function eg(n,e){const a=Gn(n),i=a.getFullYear(),o=Ks(),c=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,u=kn(n,0);u.setFullYear(i+1,0,c),u.setHours(0,0,0,0);const f=Fa(u,e),m=kn(n,0);m.setFullYear(i,0,c),m.setHours(0,0,0,0);const p=Fa(m,e);return a.getTime()>=f.getTime()?i+1:a.getTime()>=p.getTime()?i:i-1}function rP(n,e){const a=Ks(),i=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=eg(n,e),c=kn(n,0);return c.setFullYear(o,0,i),c.setHours(0,0,0,0),Fa(c,e)}function _5(n,e){const a=Gn(n),i=+Fa(a,e)-+rP(a,e);return Math.round(i/k5)+1}function cn(n,e){const a=n<0?"-":"",i=Math.abs(n).toString().padStart(e,"0");return a+i}const Ta={y(n,e){const a=n.getFullYear(),i=a>0?a:1-a;return cn(e==="yy"?i%100:i,e.length)},M(n,e){const a=n.getMonth();return e==="M"?String(a+1):cn(a+1,2)},d(n,e){return cn(n.getDate(),e.length)},a(n,e){const a=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(n,e){return cn(n.getHours()%12||12,e.length)},H(n,e){return cn(n.getHours(),e.length)},m(n,e){return cn(n.getMinutes(),e.length)},s(n,e){return cn(n.getSeconds(),e.length)},S(n,e){const a=e.length,i=n.getMilliseconds(),o=Math.trunc(i*Math.pow(10,a-3));return cn(o,e.length)}},ms={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},I2={G:function(n,e,a){const i=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(i,{width:"abbreviated"});case"GGGGG":return a.era(i,{width:"narrow"});case"GGGG":default:return a.era(i,{width:"wide"})}},y:function(n,e,a){if(e==="yo"){const i=n.getFullYear(),o=i>0?i:1-i;return a.ordinalNumber(o,{unit:"year"})}return Ta.y(n,e)},Y:function(n,e,a,i){const o=eg(n,i),c=o>0?o:1-o;if(e==="YY"){const u=c%100;return cn(u,2)}return e==="Yo"?a.ordinalNumber(c,{unit:"year"}):cn(c,e.length)},R:function(n,e){const a=P5(n);return cn(a,e.length)},u:function(n,e){const a=n.getFullYear();return cn(a,e.length)},Q:function(n,e,a){const i=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return cn(i,2);case"Qo":return a.ordinalNumber(i,{unit:"quarter"});case"QQQ":return a.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(i,{width:"wide",context:"formatting"})}},q:function(n,e,a){const i=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return cn(i,2);case"qo":return a.ordinalNumber(i,{unit:"quarter"});case"qqq":return a.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(i,{width:"wide",context:"standalone"})}},M:function(n,e,a){const i=n.getMonth();switch(e){case"M":case"MM":return Ta.M(n,e);case"Mo":return a.ordinalNumber(i+1,{unit:"month"});case"MMM":return a.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(i,{width:"wide",context:"formatting"})}},L:function(n,e,a){const i=n.getMonth();switch(e){case"L":return String(i+1);case"LL":return cn(i+1,2);case"Lo":return a.ordinalNumber(i+1,{unit:"month"});case"LLL":return a.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(i,{width:"wide",context:"standalone"})}},w:function(n,e,a,i){const o=_5(n,i);return e==="wo"?a.ordinalNumber(o,{unit:"week"}):cn(o,e.length)},I:function(n,e,a){const i=L5(n);return e==="Io"?a.ordinalNumber(i,{unit:"week"}):cn(i,e.length)},d:function(n,e,a){return e==="do"?a.ordinalNumber(n.getDate(),{unit:"date"}):Ta.d(n,e)},D:function(n,e,a){const i=tP(n);return e==="Do"?a.ordinalNumber(i,{unit:"dayOfYear"}):cn(i,e.length)},E:function(n,e,a){const i=n.getDay();switch(e){case"E":case"EE":case"EEE":return a.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(i,{width:"short",context:"formatting"});case"EEEE":default:return a.day(i,{width:"wide",context:"formatting"})}},e:function(n,e,a,i){const o=n.getDay(),c=(o-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(c);case"ee":return cn(c,2);case"eo":return a.ordinalNumber(c,{unit:"day"});case"eee":return a.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(o,{width:"short",context:"formatting"});case"eeee":default:return a.day(o,{width:"wide",context:"formatting"})}},c:function(n,e,a,i){const o=n.getDay(),c=(o-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(c);case"cc":return cn(c,e.length);case"co":return a.ordinalNumber(c,{unit:"day"});case"ccc":return a.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(o,{width:"narrow",context:"standalone"});case"cccccc":return a.day(o,{width:"short",context:"standalone"});case"cccc":default:return a.day(o,{width:"wide",context:"standalone"})}},i:function(n,e,a){const i=n.getDay(),o=i===0?7:i;switch(e){case"i":return String(o);case"ii":return cn(o,e.length);case"io":return a.ordinalNumber(o,{unit:"day"});case"iii":return a.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(i,{width:"short",context:"formatting"});case"iiii":default:return a.day(i,{width:"wide",context:"formatting"})}},a:function(n,e,a){const o=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(n,e,a){const i=n.getHours();let o;switch(i===12?o=ms.noon:i===0?o=ms.midnight:o=i/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(n,e,a){const i=n.getHours();let o;switch(i>=17?o=ms.evening:i>=12?o=ms.afternoon:i>=4?o=ms.morning:o=ms.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(n,e,a){if(e==="ho"){let i=n.getHours()%12;return i===0&&(i=12),a.ordinalNumber(i,{unit:"hour"})}return Ta.h(n,e)},H:function(n,e,a){return e==="Ho"?a.ordinalNumber(n.getHours(),{unit:"hour"}):Ta.H(n,e)},K:function(n,e,a){const i=n.getHours()%12;return e==="Ko"?a.ordinalNumber(i,{unit:"hour"}):cn(i,e.length)},k:function(n,e,a){let i=n.getHours();return i===0&&(i=24),e==="ko"?a.ordinalNumber(i,{unit:"hour"}):cn(i,e.length)},m:function(n,e,a){return e==="mo"?a.ordinalNumber(n.getMinutes(),{unit:"minute"}):Ta.m(n,e)},s:function(n,e,a){return e==="so"?a.ordinalNumber(n.getSeconds(),{unit:"second"}):Ta.s(n,e)},S:function(n,e){return Ta.S(n,e)},X:function(n,e,a){const i=n.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return U2(i);case"XXXX":case"XX":return fi(i);case"XXXXX":case"XXX":default:return fi(i,":")}},x:function(n,e,a){const i=n.getTimezoneOffset();switch(e){case"x":return U2(i);case"xxxx":case"xx":return fi(i);case"xxxxx":case"xxx":default:return fi(i,":")}},O:function(n,e,a){const i=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+J2(i,":");case"OOOO":default:return"GMT"+fi(i,":")}},z:function(n,e,a){const i=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+J2(i,":");case"zzzz":default:return"GMT"+fi(i,":")}},t:function(n,e,a){const i=Math.trunc(n.getTime()/1e3);return cn(i,e.length)},T:function(n,e,a){const i=n.getTime();return cn(i,e.length)}};function J2(n,e=""){const a=n>0?"-":"+",i=Math.abs(n),o=Math.trunc(i/60),c=i%60;return c===0?a+String(o):a+String(o)+e+cn(c,2)}function U2(n,e){return n%60===0?(n>0?"-":"+")+cn(Math.abs(n)/60,2):fi(n,e)}function fi(n,e=""){const a=n>0?"-":"+",i=Math.abs(n),o=cn(Math.trunc(i/60),2),c=cn(i%60,2);return a+o+e+c}const q2=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},O5=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},aP=(n,e)=>{const a=n.match(/(P+)(p+)?/)||[],i=a[1],o=a[2];if(!o)return q2(n,e);let c;switch(i){case"P":c=e.dateTime({width:"short"});break;case"PP":c=e.dateTime({width:"medium"});break;case"PPP":c=e.dateTime({width:"long"});break;case"PPPP":default:c=e.dateTime({width:"full"});break}return c.replace("{{date}}",q2(i,e)).replace("{{time}}",O5(o,e))},Ym={p:O5,P:aP},iP=/^D+$/,sP=/^Y+$/,oP=["D","DD","YY","YYYY"];function z5(n){return iP.test(n)}function j5(n){return sP.test(n)}function Zm(n,e,a){const i=lP(n,e,a);if(console.warn(i),oP.includes(n))throw new RangeError(i)}function lP(n,e,a){const i=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${i} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const cP=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,uP=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dP=/^'([^]*?)'?$/,fP=/''/g,hP=/[a-zA-Z]/;function Wm(n,e,a){const i=Ks(),o=i.locale??B5,c=i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,u=i.weekStartsOn??i.locale?.options?.weekStartsOn??0,f=Gn(n);if(!$p(f))throw new RangeError("Invalid time value");let m=e.match(uP).map(y=>{const v=y[0];if(v==="p"||v==="P"){const S=Ym[v];return S(y,o.formatLong)}return y}).join("").match(cP).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const v=y[0];if(v==="'")return{isToken:!1,value:mP(y)};if(I2[v])return{isToken:!0,value:y};if(v.match(hP))throw new RangeError("Format string contains an unescaped latin alphabet character `"+v+"`");return{isToken:!1,value:y}});o.localize.preprocessor&&(m=o.localize.preprocessor(f,m));const p={firstWeekContainsDate:c,weekStartsOn:u,locale:o};return m.map(y=>{if(!y.isToken)return y.value;const v=y.value;(j5(v)||z5(v))&&Zm(v,e,String(n));const S=I2[v[0]];return S(f,v,o.localize,p)}).join("")}function mP(n){const e=n.match(dP);return e?e[1].replace(fP,"'"):n}function pP(){return Object.assign({},Ks())}function gP(n){let a=Gn(n).getDay();return a===0&&(a=7),a}function yP(n,e){const a=Gn(n),i=Gn(e);return a.getTime()>i.getTime()}function vP(n,e){const a=e instanceof Date?kn(e,0):new e(0);return a.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),a.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),a}const bP=10;class V5{subPriority=0;validate(e,a){return!0}}class xP extends V5{constructor(e,a,i,o,c){super(),this.value=e,this.validateValue=a,this.setValue=i,this.priority=o,c&&(this.subPriority=c)}validate(e,a){return this.validateValue(e,this.value,a)}set(e,a,i){return this.setValue(e,a,this.value,i)}}class SP extends V5{priority=bP;subPriority=-1;set(e,a){return a.timestampIsSet?e:kn(e,vP(e,Date))}}class an{run(e,a,i,o){const c=this.parse(e,a,i,o);return c?{setter:new xP(c.value,this.validate,this.set,this.priority,this.subPriority),rest:c.rest}:null}validate(e,a,i){return!0}}class MP extends an{priority=140;parse(e,a,i){switch(a){case"G":case"GG":case"GGG":return i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"});case"GGGGG":return i.era(e,{width:"narrow"});case"GGGG":default:return i.era(e,{width:"wide"})||i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"})}}set(e,a,i){return a.era=i,e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["R","u","t","T"]}const jn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},xr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Vn(n,e){return n&&{value:e(n.value),rest:n.rest}}function Tn(n,e){const a=e.match(n);return a?{value:parseInt(a[0],10),rest:e.slice(a[0].length)}:null}function Sr(n,e){const a=e.match(n);if(!a)return null;if(a[0]==="Z")return{value:0,rest:e.slice(1)};const i=a[1]==="+"?1:-1,o=a[2]?parseInt(a[2],10):0,c=a[3]?parseInt(a[3],10):0,u=a[5]?parseInt(a[5],10):0;return{value:i*(o*yk+c*gk+u*vk),rest:e.slice(a[0].length)}}function G5(n){return Tn(jn.anyDigitsSigned,n)}function Pn(n,e){switch(n){case 1:return Tn(jn.singleDigit,e);case 2:return Tn(jn.twoDigits,e);case 3:return Tn(jn.threeDigits,e);case 4:return Tn(jn.fourDigits,e);default:return Tn(new RegExp("^\\d{1,"+n+"}"),e)}}function Lu(n,e){switch(n){case 1:return Tn(jn.singleDigitSigned,e);case 2:return Tn(jn.twoDigitsSigned,e);case 3:return Tn(jn.threeDigitsSigned,e);case 4:return Tn(jn.fourDigitsSigned,e);default:return Tn(new RegExp("^-?\\d{1,"+n+"}"),e)}}function ng(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function F5(n,e){const a=e>0,i=a?e:1-e;let o;if(i<=50)o=n||100;else{const c=i+50,u=Math.trunc(c/100)*100,f=n>=c%100;o=n+u-(f?100:0)}return a?o:1-o}function H5(n){return n%400===0||n%4===0&&n%100!==0}class CP extends an{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(e,a,i){const o=c=>({year:c,isTwoDigitYear:a==="yy"});switch(a){case"y":return Vn(Pn(4,e),o);case"yo":return Vn(i.ordinalNumber(e,{unit:"year"}),o);default:return Vn(Pn(a.length,e),o)}}validate(e,a){return a.isTwoDigitYear||a.year>0}set(e,a,i){const o=e.getFullYear();if(i.isTwoDigitYear){const u=F5(i.year,o);return e.setFullYear(u,0,1),e.setHours(0,0,0,0),e}const c=!("era"in a)||a.era===1?i.year:1-i.year;return e.setFullYear(c,0,1),e.setHours(0,0,0,0),e}}class AP extends an{priority=130;parse(e,a,i){const o=c=>({year:c,isTwoDigitYear:a==="YY"});switch(a){case"Y":return Vn(Pn(4,e),o);case"Yo":return Vn(i.ordinalNumber(e,{unit:"year"}),o);default:return Vn(Pn(a.length,e),o)}}validate(e,a){return a.isTwoDigitYear||a.year>0}set(e,a,i,o){const c=eg(e,o);if(i.isTwoDigitYear){const f=F5(i.year,c);return e.setFullYear(f,0,o.firstWeekContainsDate),e.setHours(0,0,0,0),Fa(e,o)}const u=!("era"in a)||a.era===1?i.year:1-i.year;return e.setFullYear(u,0,o.firstWeekContainsDate),e.setHours(0,0,0,0),Fa(e,o)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class wP extends an{priority=130;parse(e,a){return Lu(a==="R"?4:a.length,e)}set(e,a,i){const o=kn(e,0);return o.setFullYear(i,0,4),o.setHours(0,0,0,0),Os(o)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class TP extends an{priority=130;parse(e,a){return Lu(a==="u"?4:a.length,e)}set(e,a,i){return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class DP extends an{priority=120;parse(e,a,i){switch(a){case"Q":case"QQ":return Pn(a.length,e);case"Qo":return i.ordinalNumber(e,{unit:"quarter"});case"QQQ":return i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(e,{width:"wide",context:"formatting"})||i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,a){return a>=1&&a<=4}set(e,a,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class EP extends an{priority=120;parse(e,a,i){switch(a){case"q":case"qq":return Pn(a.length,e);case"qo":return i.ordinalNumber(e,{unit:"quarter"});case"qqq":return i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(e,{width:"wide",context:"standalone"})||i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,a){return a>=1&&a<=4}set(e,a,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class NP extends an{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(e,a,i){const o=c=>c-1;switch(a){case"M":return Vn(Tn(jn.month,e),o);case"MM":return Vn(Pn(2,e),o);case"Mo":return Vn(i.ordinalNumber(e,{unit:"month"}),o);case"MMM":return i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(e,{width:"wide",context:"formatting"})||i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"})}}validate(e,a){return a>=0&&a<=11}set(e,a,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}class RP extends an{priority=110;parse(e,a,i){const o=c=>c-1;switch(a){case"L":return Vn(Tn(jn.month,e),o);case"LL":return Vn(Pn(2,e),o);case"Lo":return Vn(i.ordinalNumber(e,{unit:"month"}),o);case"LLL":return i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(e,{width:"wide",context:"standalone"})||i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"})}}validate(e,a){return a>=0&&a<=11}set(e,a,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function kP(n,e,a){const i=Gn(n),o=_5(i,a)-e;return i.setDate(i.getDate()-o*7),i}class PP extends an{priority=100;parse(e,a,i){switch(a){case"w":return Tn(jn.week,e);case"wo":return i.ordinalNumber(e,{unit:"week"});default:return Pn(a.length,e)}}validate(e,a){return a>=1&&a<=53}set(e,a,i,o){return Fa(kP(e,i,o),o)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function BP(n,e){const a=Gn(n),i=L5(a)-e;return a.setDate(a.getDate()-i*7),a}class LP extends an{priority=100;parse(e,a,i){switch(a){case"I":return Tn(jn.week,e);case"Io":return i.ordinalNumber(e,{unit:"week"});default:return Pn(a.length,e)}}validate(e,a){return a>=1&&a<=53}set(e,a,i){return Os(BP(e,i))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const _P=[31,28,31,30,31,30,31,31,30,31,30,31],OP=[31,29,31,30,31,30,31,31,30,31,30,31];class zP extends an{priority=90;subPriority=1;parse(e,a,i){switch(a){case"d":return Tn(jn.date,e);case"do":return i.ordinalNumber(e,{unit:"date"});default:return Pn(a.length,e)}}validate(e,a){const i=e.getFullYear(),o=H5(i),c=e.getMonth();return o?a>=1&&a<=OP[c]:a>=1&&a<=_P[c]}set(e,a,i){return e.setDate(i),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class jP extends an{priority=90;subpriority=1;parse(e,a,i){switch(a){case"D":case"DD":return Tn(jn.dayOfYear,e);case"Do":return i.ordinalNumber(e,{unit:"date"});default:return Pn(a.length,e)}}validate(e,a){const i=e.getFullYear();return H5(i)?a>=1&&a<=366:a>=1&&a<=365}set(e,a,i){return e.setMonth(0,i),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function tg(n,e,a){const i=Ks(),o=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0,c=Gn(n),u=c.getDay(),m=(e%7+7)%7,p=7-o,y=e<0||e>6?e-(u+p)%7:(m+p)%7-(u+p)%7;return R5(c,y)}class VP extends an{priority=90;parse(e,a,i){switch(a){case"E":case"EE":case"EEE":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,a){return a>=0&&a<=6}set(e,a,i,o){return e=tg(e,i,o),e.setHours(0,0,0,0),e}incompatibleTokens=["D","i","e","c","t","T"]}class GP extends an{priority=90;parse(e,a,i,o){const c=u=>{const f=Math.floor((u-1)/7)*7;return(u+o.weekStartsOn+6)%7+f};switch(a){case"e":case"ee":return Vn(Pn(a.length,e),c);case"eo":return Vn(i.ordinalNumber(e,{unit:"day"}),c);case"eee":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeeee":return i.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,a){return a>=0&&a<=6}set(e,a,i,o){return e=tg(e,i,o),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class FP extends an{priority=90;parse(e,a,i,o){const c=u=>{const f=Math.floor((u-1)/7)*7;return(u+o.weekStartsOn+6)%7+f};switch(a){case"c":case"cc":return Vn(Pn(a.length,e),c);case"co":return Vn(i.ordinalNumber(e,{unit:"day"}),c);case"ccc":return i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"ccccc":return i.day(e,{width:"narrow",context:"standalone"});case"cccccc":return i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(e,{width:"wide",context:"standalone"})||i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"})}}validate(e,a){return a>=0&&a<=6}set(e,a,i,o){return e=tg(e,i,o),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function HP(n,e){const a=Gn(n),i=gP(a),o=e-i;return R5(a,o)}class IP extends an{priority=90;parse(e,a,i){const o=c=>c===0?7:c;switch(a){case"i":case"ii":return Pn(a.length,e);case"io":return i.ordinalNumber(e,{unit:"day"});case"iii":return Vn(i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),o);case"iiiii":return Vn(i.day(e,{width:"narrow",context:"formatting"}),o);case"iiiiii":return Vn(i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),o);case"iiii":default:return Vn(i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),o)}}validate(e,a){return a>=1&&a<=7}set(e,a,i){return e=HP(e,i),e.setHours(0,0,0,0),e}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class JP extends an{priority=80;parse(e,a,i){switch(a){case"a":case"aa":case"aaa":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,a,i){return e.setHours(ng(i),0,0,0),e}incompatibleTokens=["b","B","H","k","t","T"]}class UP extends an{priority=80;parse(e,a,i){switch(a){case"b":case"bb":case"bbb":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,a,i){return e.setHours(ng(i),0,0,0),e}incompatibleTokens=["a","B","H","k","t","T"]}class qP extends an{priority=80;parse(e,a,i){switch(a){case"B":case"BB":case"BBB":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,a,i){return e.setHours(ng(i),0,0,0),e}incompatibleTokens=["a","b","t","T"]}class KP extends an{priority=70;parse(e,a,i){switch(a){case"h":return Tn(jn.hour12h,e);case"ho":return i.ordinalNumber(e,{unit:"hour"});default:return Pn(a.length,e)}}validate(e,a){return a>=1&&a<=12}set(e,a,i){const o=e.getHours()>=12;return o&&i<12?e.setHours(i+12,0,0,0):!o&&i===12?e.setHours(0,0,0,0):e.setHours(i,0,0,0),e}incompatibleTokens=["H","K","k","t","T"]}class YP extends an{priority=70;parse(e,a,i){switch(a){case"H":return Tn(jn.hour23h,e);case"Ho":return i.ordinalNumber(e,{unit:"hour"});default:return Pn(a.length,e)}}validate(e,a){return a>=0&&a<=23}set(e,a,i){return e.setHours(i,0,0,0),e}incompatibleTokens=["a","b","h","K","k","t","T"]}class ZP extends an{priority=70;parse(e,a,i){switch(a){case"K":return Tn(jn.hour11h,e);case"Ko":return i.ordinalNumber(e,{unit:"hour"});default:return Pn(a.length,e)}}validate(e,a){return a>=0&&a<=11}set(e,a,i){return e.getHours()>=12&&i<12?e.setHours(i+12,0,0,0):e.setHours(i,0,0,0),e}incompatibleTokens=["h","H","k","t","T"]}class WP extends an{priority=70;parse(e,a,i){switch(a){case"k":return Tn(jn.hour24h,e);case"ko":return i.ordinalNumber(e,{unit:"hour"});default:return Pn(a.length,e)}}validate(e,a){return a>=1&&a<=24}set(e,a,i){const o=i<=24?i%24:i;return e.setHours(o,0,0,0),e}incompatibleTokens=["a","b","h","H","K","t","T"]}class XP extends an{priority=60;parse(e,a,i){switch(a){case"m":return Tn(jn.minute,e);case"mo":return i.ordinalNumber(e,{unit:"minute"});default:return Pn(a.length,e)}}validate(e,a){return a>=0&&a<=59}set(e,a,i){return e.setMinutes(i,0,0),e}incompatibleTokens=["t","T"]}class QP extends an{priority=50;parse(e,a,i){switch(a){case"s":return Tn(jn.second,e);case"so":return i.ordinalNumber(e,{unit:"second"});default:return Pn(a.length,e)}}validate(e,a){return a>=0&&a<=59}set(e,a,i){return e.setSeconds(i,0),e}incompatibleTokens=["t","T"]}class $P extends an{priority=30;parse(e,a){const i=o=>Math.trunc(o*Math.pow(10,-a.length+3));return Vn(Pn(a.length,e),i)}set(e,a,i){return e.setMilliseconds(i),e}incompatibleTokens=["t","T"]}class eB extends an{priority=10;parse(e,a){switch(a){case"X":return Sr(xr.basicOptionalMinutes,e);case"XX":return Sr(xr.basic,e);case"XXXX":return Sr(xr.basicOptionalSeconds,e);case"XXXXX":return Sr(xr.extendedOptionalSeconds,e);case"XXX":default:return Sr(xr.extended,e)}}set(e,a,i){return a.timestampIsSet?e:kn(e,e.getTime()-Bu(e)-i)}incompatibleTokens=["t","T","x"]}class nB extends an{priority=10;parse(e,a){switch(a){case"x":return Sr(xr.basicOptionalMinutes,e);case"xx":return Sr(xr.basic,e);case"xxxx":return Sr(xr.basicOptionalSeconds,e);case"xxxxx":return Sr(xr.extendedOptionalSeconds,e);case"xxx":default:return Sr(xr.extended,e)}}set(e,a,i){return a.timestampIsSet?e:kn(e,e.getTime()-Bu(e)-i)}incompatibleTokens=["t","T","X"]}class tB extends an{priority=40;parse(e){return G5(e)}set(e,a,i){return[kn(e,i*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class rB extends an{priority=20;parse(e){return G5(e)}set(e,a,i){return[kn(e,i),{timestampIsSet:!0}]}incompatibleTokens="*"}const aB={G:new MP,y:new CP,Y:new AP,R:new wP,u:new TP,Q:new DP,q:new EP,M:new NP,L:new RP,w:new PP,I:new LP,d:new zP,D:new jP,E:new VP,e:new GP,c:new FP,i:new IP,a:new JP,b:new UP,B:new qP,h:new KP,H:new YP,K:new ZP,k:new WP,m:new XP,s:new QP,S:new $P,X:new eB,x:new nB,t:new tB,T:new rB},iB=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,sB=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oB=/^'([^]*?)'?$/,lB=/''/g,cB=/\S/,uB=/[a-zA-Z]/;function I5(n,e,a,i){const o=pP(),c=o.locale??B5,u=o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,f=o.weekStartsOn??o.locale?.options?.weekStartsOn??0;if(e==="")return n===""?Gn(a):kn(a,NaN);const m={firstWeekContainsDate:u,weekStartsOn:f,locale:c},p=[new SP],y=e.match(sB).map(M=>{const D=M[0];if(D in Ym){const w=Ym[D];return w(M,c.formatLong)}return M}).join("").match(iB),v=[];for(let M of y){j5(M)&&Zm(M,e,n),z5(M)&&Zm(M,e,n);const D=M[0],w=aB[D];if(w){const{incompatibleTokens:N}=w;if(Array.isArray(N)){const j=v.find(O=>N.includes(O.token)||O.token===D);if(j)throw new RangeError(`The format string mustn't contain \`${j.fullToken}\` and \`${M}\` at the same time`)}else if(w.incompatibleTokens==="*"&&v.length>0)throw new RangeError(`The format string mustn't contain \`${M}\` and any other token at the same time`);v.push({token:D,fullToken:M});const P=w.run(n,M,c.match,m);if(!P)return kn(a,NaN);p.push(P.setter),n=P.rest}else{if(D.match(uB))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");if(M==="''"?M="'":D==="'"&&(M=dB(M)),n.indexOf(M)===0)n=n.slice(M.length);else return kn(a,NaN)}}if(n.length>0&&cB.test(n))return kn(a,NaN);const S=p.map(M=>M.priority).sort((M,D)=>D-M).filter((M,D,w)=>w.indexOf(M)===D).map(M=>p.filter(D=>D.priority===M).sort((D,w)=>w.subPriority-D.subPriority)).map(M=>M[0]);let A=Gn(a);if(isNaN(A.getTime()))return kn(a,NaN);const E={};for(const M of S){if(!M.validate(A,m))return kn(a,NaN);const D=M.set(A,E,m);Array.isArray(D)?(A=D[0],Object.assign(E,D[1])):A=D}return kn(a,A)}function dB(n){return n.match(oB)[1].replace(lB,"'")}function fB(){return Km(Date.now())}function J5(n){const e=n.replace(/\D/g,"").slice(0,8),a=[];return e.length>0&&a.push(e.slice(0,2)),e.length>2&&a.push(e.slice(2,4)),e.length>4&&a.push(e.slice(4,8)),a.join(".")}function U5(n,e={}){if(!n||n.length!==10)return null;const a=I5(n,"dd.MM.yyyy",new Date);return!$p(a)||!e.allowFuture&&yP(a,fB())||Wm(a,"dd.MM.yyyy")!==n?null:Wm(a,"yyyy-MM-dd")}function hB(n){if(!n)return"";const e=I5(n,"yyyy-MM-dd",new Date);return $p(e)?Wm(e,"dd.MM.yyyy"):""}function An({className:n,type:e,...a}){return g.jsx("input",{type:e,"data-slot":"input",className:yn("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...a})}function rg({className:n,...e}){return g.jsx("div",{"data-slot":"card",className:yn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",n),...e})}function ag({className:n,...e}){return g.jsx("div",{"data-slot":"card-header",className:yn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",n),...e})}function ig({className:n,...e}){return g.jsx("div",{"data-slot":"card-title",className:yn("leading-none font-semibold",n),...e})}function sg({className:n,...e}){return g.jsx("div",{"data-slot":"card-description",className:yn("text-muted-foreground text-sm",n),...e})}function og({className:n,...e}){return g.jsx("div",{"data-slot":"card-content",className:yn("px-6",n),...e})}const q5=[.25,.46,.45,.94],Ba={SCALE_PULSE:[1,1.03,1],SCALE_HOVER:1.02,SCALE_TAP:.98,DURATION_DEFAULT:.4,DURATION_LONG:.5,STAGGER_DELAY:.1,PULSE_DURATION:2},K5={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:Ba.STAGGER_DELAY,delayChildren:Ba.STAGGER_DELAY}}},gi={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:Ba.DURATION_DEFAULT,ease:q5}}},Y5={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:Ba.DURATION_LONG,ease:q5}},pulse:{scale:Ba.SCALE_PULSE,transition:{duration:Ba.PULSE_DURATION,repeat:1/0,ease:"easeInOut"}}},_u={hover:{scale:Ba.SCALE_HOVER,transition:{duration:.2}},tap:{scale:Ba.SCALE_TAP,transition:{duration:.1}}};function mB({language:n,birthDate:e,onBirthDateChange:a,onNext:i,onBack:o}){const c=iR[n],{verifyBirthDate:u}=GR(),[f,m]=x.useState(!1),[p,y]=x.useState(""),[v,S]=x.useState(""),A=mk({required:c.required,invalid:c.invalid,futureDate:c.futureDate}),{register:E,handleSubmit:M,formState:{errors:D},setValue:w,trigger:N}=ed({resolver:nd(A),defaultValues:{birthDate:e}});x.useEffect(()=>{e&&y(hB(e))},[]);const P=O=>{const q=O.target.value,B=J5(q);if(y(B),S(""),B.length===10){const G=U5(B,{allowFuture:!1});G?(w("birthDate",G),a(G),N("birthDate")):(w("birthDate",""),a(""),N("birthDate"))}else w("birthDate",""),a("")},j=async O=>{m(!0),S("");try{const q=await u(O.birthDate);q.success?i():S(q.message||c.invalid)}catch{S(c.invalid)}finally{m(!1)}};return g.jsx("div",{className:"min-h-screen flex justify-center px-4 py-8",children:g.jsx(ye.div,{className:"w-full max-w-md mx-auto",variants:K5,initial:"hidden",animate:"visible",style:{willChange:"opacity"},children:g.jsxs(rg,{className:"bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-0 backdrop-blur-sm",children:[g.jsx(ag,{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4",children:g.jsxs(ye.div,{variants:gi,style:{willChange:"transform, opacity"},children:[g.jsx(ye.div,{className:"w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",variants:Y5,animate:"pulse",style:{willChange:"transform"},children:g.jsx(yA,{className:"w-8 h-8 text-brand-primary"})}),g.jsx(ig,{className:"text-2xl font-bold text-brand-text text-center mb-2",children:c.title}),g.jsx(sg,{className:"text-sm text-slate-600 text-center",children:c.subtitle})]})}),g.jsx(og,{className:"px-6 sm:px-8 pb-6 sm:pb-8",children:g.jsxs("form",{onSubmit:M(j),className:"space-y-6",children:[g.jsxs(ye.div,{variants:gi,style:{willChange:"transform, opacity"},children:[g.jsx("label",{htmlFor:"birthDate",className:"block text-sm font-medium text-brand-text mb-2",children:c.label}),g.jsx("div",{className:"relative",children:g.jsx(An,{id:"birthDate",type:"text",inputMode:"numeric",value:p,onChange:P,placeholder:c.placeholder,"aria-invalid":!!(D.birthDate||v),className:`w-full h-12 px-4 font-mono tracking-wider ${D.birthDate||v?"border-brand-error focus-visible:ring-brand-error":""}`,disabled:f,maxLength:10})}),(D.birthDate||v)&&g.jsxs(ye.div,{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},transition:{duration:.2},children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:D.birthDate?.message||v})]})]}),g.jsxs(ye.div,{className:"flex gap-3 pt-4",variants:gi,style:{willChange:"transform, opacity"},children:[g.jsx(er,{type:"button",onClick:o,disabled:f,variant:"outline",size:"lg",className:"h-12 px-6 transition-all",asChild:!0,children:g.jsxs(ye.button,{variants:_u,whileHover:"hover",whileTap:"tap",style:{willChange:"transform"},children:[g.jsx(ye.div,{whileHover:{x:-2},transition:{duration:.2},children:g.jsx(ju,{className:"w-5 h-5"})}),c.back]})}),g.jsx(er,{type:"submit",disabled:f,size:"lg",className:"group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all overflow-hidden relative",asChild:!0,children:g.jsx(ye.button,{variants:_u,whileHover:"hover",whileTap:"tap",style:{willChange:"transform"},children:f?g.jsxs(ye.div,{className:"relative z-10 flex items-center justify-center gap-2",initial:{opacity:0},animate:{opacity:1},children:[g.jsx(s4,{className:"w-5 h-5 animate-spin"}),c.verifying]}):g.jsxs(ye.div,{className:"relative z-10 flex items-center justify-center gap-2",children:[c.continue,g.jsx(ye.div,{whileHover:{x:2},transition:{duration:.2},children:g.jsx(yl,{className:"w-5 h-5"})})]})})})]})]})})]})})})}const pB=n=>td({otpCode:nn().min(1,n.required).regex(/^\d{6}$/,n.invalid)});var gB=Object.defineProperty,yB=Object.defineProperties,vB=Object.getOwnPropertyDescriptors,Ou=Object.getOwnPropertySymbols,Z5=Object.prototype.hasOwnProperty,W5=Object.prototype.propertyIsEnumerable,K2=(n,e,a)=>e in n?gB(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,bB=(n,e)=>{for(var a in e||(e={}))Z5.call(e,a)&&K2(n,a,e[a]);if(Ou)for(var a of Ou(e))W5.call(e,a)&&K2(n,a,e[a]);return n},xB=(n,e)=>yB(n,vB(e)),SB=(n,e)=>{var a={};for(var i in n)Z5.call(n,i)&&e.indexOf(i)<0&&(a[i]=n[i]);if(n!=null&&Ou)for(var i of Ou(n))e.indexOf(i)<0&&W5.call(n,i)&&(a[i]=n[i]);return a};function MB(n){let e=setTimeout(n,0),a=setTimeout(n,10),i=setTimeout(n,50);return[e,a,i]}function CB(n){let e=x.useRef();return x.useEffect(()=>{e.current=n}),e.current}var AB=18,X5=40,wB=`${X5}px`,TB=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function DB({containerRef:n,inputRef:e,pushPasswordManagerStrategy:a,isFocused:i}){let[o,c]=x.useState(!1),[u,f]=x.useState(!1),[m,p]=x.useState(!1),y=x.useMemo(()=>a==="none"?!1:(a==="increase-width"||a==="experimental-no-flickering")&&o&&u,[o,u,a]),v=x.useCallback(()=>{let S=n.current,A=e.current;if(!S||!A||m||a==="none")return;let E=S,M=E.getBoundingClientRect().left+E.offsetWidth,D=E.getBoundingClientRect().top+E.offsetHeight/2,w=M-AB,N=D;document.querySelectorAll(TB).length===0&&document.elementFromPoint(w,N)===S||(c(!0),p(!0))},[n,e,m,a]);return x.useEffect(()=>{let S=n.current;if(!S||a==="none")return;function A(){let M=window.innerWidth-S.getBoundingClientRect().right;f(M>=X5)}A();let E=setInterval(A,1e3);return()=>{clearInterval(E)}},[n,a]),x.useEffect(()=>{let S=i||document.activeElement===e.current;if(a==="none"||!S)return;let A=setTimeout(v,0),E=setTimeout(v,2e3),M=setTimeout(v,5e3),D=setTimeout(()=>{p(!0)},6e3);return()=>{clearTimeout(A),clearTimeout(E),clearTimeout(M),clearTimeout(D)}},[e,i,a,v]),{hasPWMBadge:o,willPushPWMBadge:y,PWM_BADGE_SPACE_WIDTH:wB}}var Q5=x.createContext({}),$5=x.forwardRef((n,e)=>{var a=n,{value:i,onChange:o,maxLength:c,textAlign:u="left",pattern:f,placeholder:m,inputMode:p="numeric",onComplete:y,pushPasswordManagerStrategy:v="increase-width",pasteTransformer:S,containerClassName:A,noScriptCSSFallback:E=EB,render:M,children:D}=a,w=SB(a,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]),N,P,j,O,q;let[B,G]=x.useState(typeof w.defaultValue=="string"?w.defaultValue:""),Q=i??B,ae=CB(Q),de=x.useCallback(De=>{o?.(De),G(De)},[o]),se=x.useMemo(()=>f?typeof f=="string"?new RegExp(f):f:null,[f]),re=x.useRef(null),le=x.useRef(null),ge=x.useRef({value:Q,onChange:de,isIOS:typeof window<"u"&&((P=(N=window?.CSS)==null?void 0:N.supports)==null?void 0:P.call(N,"-webkit-touch-callout","none"))}),_=x.useRef({prev:[(j=re.current)==null?void 0:j.selectionStart,(O=re.current)==null?void 0:O.selectionEnd,(q=re.current)==null?void 0:q.selectionDirection]});x.useImperativeHandle(e,()=>re.current,[]),x.useEffect(()=>{let De=re.current,_e=le.current;if(!De||!_e)return;ge.current.value!==De.value&&ge.current.onChange(De.value),_.current.prev=[De.selectionStart,De.selectionEnd,De.selectionDirection];function vn(){if(document.activeElement!==De){Z(null),oe(null);return}let sn=De.selectionStart,R=De.selectionEnd,F=De.selectionDirection,Y=De.maxLength,me=De.value,ie=_.current.prev,ue=-1,Se=-1,He;if(me.length!==0&&sn!==null&&R!==null){let Gt=sn===R,Ys=sn===me.length&&me.length<Y;if(Gt&&!Ys){let at=sn;if(at===0)ue=0,Se=1,He="forward";else if(at===Y)ue=at-1,Se=at,He="backward";else if(Y>1&&me.length>1){let Bn=0;if(ie[0]!==null&&ie[1]!==null){He=at<ie[1]?"backward":"forward";let Ft=ie[0]===ie[1]&&ie[0]<Y;He==="backward"&&!Ft&&(Bn=-1)}ue=Bn+at,Se=Bn+at+1}}ue!==-1&&Se!==-1&&ue!==Se&&re.current.setSelectionRange(ue,Se,He)}let Xe=ue!==-1?ue:sn,rt=Se!==-1?Se:R,Nr=He??F;Z(Xe),oe(rt),_.current.prev=[Xe,rt,Nr]}if(document.addEventListener("selectionchange",vn,{capture:!0}),vn(),document.activeElement===De&&be(!0),!document.getElementById("input-otp-style")){let sn=document.createElement("style");if(sn.id="input-otp-style",document.head.appendChild(sn),sn.sheet){let R="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";Yo(sn.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),Yo(sn.sheet,`[data-input-otp]:autofill { ${R} }`),Yo(sn.sheet,`[data-input-otp]:-webkit-autofill { ${R} }`),Yo(sn.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),Yo(sn.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let Fn=()=>{_e&&_e.style.setProperty("--root-height",`${De.clientHeight}px`)};Fn();let dt=new ResizeObserver(Fn);return dt.observe(De),()=>{document.removeEventListener("selectionchange",vn,{capture:!0}),dt.disconnect()}},[]);let[U,V]=x.useState(!1),[fe,be]=x.useState(!1),[T,Z]=x.useState(null),[ne,oe]=x.useState(null);x.useEffect(()=>{MB(()=>{var De,_e,vn,Fn;(De=re.current)==null||De.dispatchEvent(new Event("input"));let dt=(_e=re.current)==null?void 0:_e.selectionStart,sn=(vn=re.current)==null?void 0:vn.selectionEnd,R=(Fn=re.current)==null?void 0:Fn.selectionDirection;dt!==null&&sn!==null&&(Z(dt),oe(sn),_.current.prev=[dt,sn,R])})},[Q,fe]),x.useEffect(()=>{ae!==void 0&&Q!==ae&&ae.length<c&&Q.length===c&&y?.(Q)},[c,y,ae,Q]);let ce=DB({containerRef:le,inputRef:re,pushPasswordManagerStrategy:v,isFocused:fe}),Ce=x.useCallback(De=>{let _e=De.currentTarget.value.slice(0,c);if(_e.length>0&&se&&!se.test(_e)){De.preventDefault();return}typeof ae=="string"&&_e.length<ae.length&&document.dispatchEvent(new Event("selectionchange")),de(_e)},[c,de,ae,se]),te=x.useCallback(()=>{var De;if(re.current){let _e=Math.min(re.current.value.length,c-1),vn=re.current.value.length;(De=re.current)==null||De.setSelectionRange(_e,vn),Z(_e),oe(vn)}be(!0)},[c]),Pe=x.useCallback(De=>{var _e,vn;let Fn=re.current;if(!S&&(!ge.current.isIOS||!De.clipboardData||!Fn))return;let dt=De.clipboardData.getData("text/plain"),sn=S?S(dt):dt;De.preventDefault();let R=(_e=re.current)==null?void 0:_e.selectionStart,F=(vn=re.current)==null?void 0:vn.selectionEnd,Y=(R!==F?Q.slice(0,R)+sn+Q.slice(F):Q.slice(0,R)+sn+Q.slice(R)).slice(0,c);if(Y.length>0&&se&&!se.test(Y))return;Fn.value=Y,de(Y);let me=Math.min(Y.length,c-1),ie=Y.length;Fn.setSelectionRange(me,ie),Z(me),oe(ie)},[c,de,se,Q]),pe=x.useMemo(()=>({position:"relative",cursor:w.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[w.disabled]),ee=x.useMemo(()=>({position:"absolute",inset:0,width:ce.willPushPWMBadge?`calc(100% + ${ce.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:ce.willPushPWMBadge?`inset(0 ${ce.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:u,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[ce.PWM_BADGE_SPACE_WIDTH,ce.willPushPWMBadge,u]),xe=x.useMemo(()=>x.createElement("input",xB(bB({autoComplete:w.autoComplete||"one-time-code"},w),{"data-input-otp":!0,"data-input-otp-placeholder-shown":Q.length===0||void 0,"data-input-otp-mss":T,"data-input-otp-mse":ne,inputMode:p,pattern:se?.source,"aria-placeholder":m,style:ee,maxLength:c,value:Q,ref:re,onPaste:De=>{var _e;Pe(De),(_e=w.onPaste)==null||_e.call(w,De)},onChange:Ce,onMouseOver:De=>{var _e;V(!0),(_e=w.onMouseOver)==null||_e.call(w,De)},onMouseLeave:De=>{var _e;V(!1),(_e=w.onMouseLeave)==null||_e.call(w,De)},onFocus:De=>{var _e;te(),(_e=w.onFocus)==null||_e.call(w,De)},onBlur:De=>{var _e;be(!1),(_e=w.onBlur)==null||_e.call(w,De)}})),[Ce,te,Pe,p,ee,c,ne,T,w,se?.source,Q]),Be=x.useMemo(()=>({slots:Array.from({length:c}).map((De,_e)=>{var vn;let Fn=fe&&T!==null&&ne!==null&&(T===ne&&_e===T||_e>=T&&_e<ne),dt=Q[_e]!==void 0?Q[_e]:null,sn=Q[0]!==void 0?null:(vn=m?.[_e])!=null?vn:null;return{char:dt,placeholderChar:sn,isActive:Fn,hasFakeCaret:Fn&&dt===null}}),isFocused:fe,isHovering:!w.disabled&&U}),[fe,U,c,ne,T,w.disabled,Q]),Ue=x.useMemo(()=>M?M(Be):x.createElement(Q5.Provider,{value:Be},D),[D,Be,M]);return x.createElement(x.Fragment,null,E!==null&&x.createElement("noscript",null,x.createElement("style",null,E)),x.createElement("div",{ref:le,"data-input-otp-container":!0,style:pe,className:A},Ue,x.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},xe)))});$5.displayName="Input";function Yo(n,e){try{n.insertRule(e)}catch{console.error("input-otp could not insert CSS rule:",e)}}var EB=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;function NB({className:n,containerClassName:e,...a}){return g.jsx($5,{"data-slot":"input-otp",containerClassName:yn("flex items-center gap-2 has-disabled:opacity-50",e),className:yn("disabled:cursor-not-allowed",n),...a})}function RB({className:n,...e}){return g.jsx("div",{"data-slot":"input-otp-group",className:yn("flex items-center",n),...e})}function ps({index:n,className:e,...a}){const i=x.useContext(Q5),{char:o,hasFakeCaret:c,isActive:u}=i?.slots[n]??{};return g.jsxs("div",{"data-slot":"input-otp-slot","data-active":u,className:yn("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",e),...a,children:[o,c&&g.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:g.jsx("div",{className:"animate-caret-blink bg-foreground h-4 w-px duration-1000"})})]})}function kB({language:n,otpCode:e,onOTPChange:a,onNext:i,onBack:o}){const c=sR[n],u=pB({required:c.required,invalid:c.invalid}),{register:f,handleSubmit:m,formState:{errors:p},setValue:y,trigger:v}=ed({resolver:nd(u),defaultValues:{otpCode:e}}),S=E=>{const M=E.replace(/\D/g,"").slice(0,6);y("otpCode",M),a(M),v("otpCode")},A=async E=>{i()};return g.jsx("div",{className:"min-h-screen flex justify-center px-4 py-8",children:g.jsx(ye.div,{className:"w-full max-w-md mx-auto",variants:K5,initial:"hidden",animate:"visible",style:{willChange:"opacity"},children:g.jsxs(rg,{className:"bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-0 backdrop-blur-sm",children:[g.jsx(ag,{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4",children:g.jsxs(ye.div,{variants:gi,style:{willChange:"transform, opacity"},children:[g.jsx(ye.div,{className:"w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",variants:Y5,animate:"pulse",style:{willChange:"transform"},children:g.jsx(PA,{className:"w-8 h-8 text-brand-primary"})}),g.jsx(ig,{className:"text-2xl font-bold text-brand-text text-center mb-2",children:c.title}),g.jsx(sg,{className:"text-sm text-slate-600 text-center",children:c.subtitle})]})}),g.jsx(og,{className:"px-6 sm:px-8 pb-6 sm:pb-8",children:g.jsxs("form",{onSubmit:m(A),className:"space-y-6",children:[g.jsxs(ye.div,{variants:gi,style:{willChange:"transform, opacity"},children:[g.jsx("label",{htmlFor:"otp",className:"block text-sm font-medium text-brand-text mb-3 text-center sm:text-left",children:c.label}),g.jsx(NB,{id:"otp",maxLength:6,value:e,onChange:S,containerClassName:"justify-center","aria-invalid":!!p.otpCode,children:g.jsxs(RB,{className:"gap-1.5 sm:gap-2",children:[g.jsx(ps,{index:0,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),g.jsx(ps,{index:1,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),g.jsx(ps,{index:2,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),g.jsx(ps,{index:3,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),g.jsx(ps,{index:4,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),g.jsx(ps,{index:5,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"})]})}),p.otpCode&&g.jsxs(ye.div,{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},transition:{duration:.2},children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:p.otpCode.message})]})]}),g.jsx(ye.div,{variants:gi,style:{willChange:"transform, opacity"},children:g.jsx(er,{type:"button",variant:"ghost",className:"w-full text-brand-primary hover:text-brand-primary-hover hover:bg-brand-primary/5",onClick:()=>{console.log("Resend OTP")},children:c.resend})}),g.jsxs(ye.div,{className:"flex gap-3 pt-4",variants:gi,style:{willChange:"transform, opacity"},children:[g.jsx(er,{type:"button",onClick:o,variant:"outline",size:"lg",className:"h-12 px-6",asChild:!0,children:g.jsxs(ye.button,{variants:_u,whileHover:"hover",whileTap:"tap",style:{willChange:"transform"},children:[g.jsx(ju,{className:"w-5 h-5"}),c.back]})}),g.jsx(er,{type:"submit",size:"lg",className:"flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white",asChild:!0,children:g.jsxs(ye.button,{variants:_u,whileHover:"hover",whileTap:"tap",style:{willChange:"transform"},children:[c.continue,g.jsx(yl,{className:"w-5 h-5"})]})})]})]})})]})})})}function PB({language:n}){const e=uR[n];return g.jsx("div",{className:"min-h-screen flex items-start justify-center px-4",style:{paddingTop:"40vh"},children:g.jsx("div",{className:"w-full max-w-md mx-auto -translate-y-1/2",children:g.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-slate-100 p-8 sm:p-12 relative z-10",children:g.jsxs("div",{className:"flex flex-col items-center justify-center space-y-6",children:[g.jsx("div",{className:"w-20 h-20 bg-brand-primary/10 rounded-xl flex items-center justify-center",children:g.jsx(s4,{className:"w-10 h-10 text-brand-primary animate-spin"})}),g.jsx("p",{className:"text-lg text-center text-slate-700 font-medium",children:e.message})]})})})})}function BB(n,e){return x.useReducer((a,i)=>e[a][i]??a,n)}var Tl=n=>{const{present:e,children:a}=n,i=LB(e),o=typeof a=="function"?a({present:i.isPresent}):x.Children.only(a),c=Dn(i.ref,_B(o));return typeof a=="function"||i.isPresent?x.cloneElement(o,{ref:c}):null};Tl.displayName="Presence";function LB(n){const[e,a]=x.useState(),i=x.useRef(null),o=x.useRef(n),c=x.useRef("none"),u=n?"mounted":"unmounted",[f,m]=BB(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const p=ru(i.current);c.current=f==="mounted"?p:"none"},[f]),gt(()=>{const p=i.current,y=o.current;if(y!==n){const S=c.current,A=ru(p);n?m("MOUNT"):A==="none"||p?.display==="none"?m("UNMOUNT"):m(y&&S!==A?"ANIMATION_OUT":"UNMOUNT"),o.current=n}},[n,m]),gt(()=>{if(e){let p;const y=e.ownerDocument.defaultView??window,v=A=>{const M=ru(i.current).includes(CSS.escape(A.animationName));if(A.target===e&&M&&(m("ANIMATION_END"),!o.current)){const D=e.style.animationFillMode;e.style.animationFillMode="forwards",p=y.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=D)})}},S=A=>{A.target===e&&(c.current=ru(i.current))};return e.addEventListener("animationstart",S),e.addEventListener("animationcancel",v),e.addEventListener("animationend",v),()=>{y.clearTimeout(p),e.removeEventListener("animationstart",S),e.removeEventListener("animationcancel",v),e.removeEventListener("animationend",v)}}else m("ANIMATION_END")},[e,m]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:x.useCallback(p=>{i.current=p?getComputedStyle(p):null,a(p)},[])}}function ru(n){return n?.animationName||"none"}function _B(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?n.props.ref:n.props.ref||n.ref)}function OB(n){const e=zB(n),a=x.forwardRef((i,o)=>{const{children:c,...u}=i,f=x.Children.toArray(c),m=f.find(VB);if(m){const p=m.props.children,y=f.map(v=>v===m?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:v);return g.jsx(e,{...u,ref:o,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return g.jsx(e,{...u,ref:o,children:c})});return a.displayName=`${n}.Slot`,a}function zB(n){const e=x.forwardRef((a,i)=>{const{children:o,...c}=a;if(x.isValidElement(o)){const u=FB(o),f=GB(c,o.props);return o.type!==x.Fragment&&(f.ref=i?zs(i,u):u),x.cloneElement(o,f)}return x.Children.count(o)>1?x.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var jB=Symbol("radix.slottable");function VB(n){return x.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===jB}function GB(n,e){const a={...e};for(const i in e){const o=n[i],c=e[i];/^on[A-Z]/.test(i)?o&&c?a[i]=(...f)=>{const m=c(...f);return o(...f),m}:o&&(a[i]=o):i==="style"?a[i]={...o,...c}:i==="className"&&(a[i]=[o,c].filter(Boolean).join(" "))}return{...n,...a}}function FB(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?n.props.ref:n.props.ref||n.ref)}var rd="Dialog",[eS]=bl(rd),[HB,hr]=eS(rd),nS=n=>{const{__scopeDialog:e,children:a,open:i,defaultOpen:o,onOpenChange:c,modal:u=!0}=n,f=x.useRef(null),m=x.useRef(null),[p,y]=gu({prop:i,defaultProp:o??!1,onChange:c,caller:rd});return g.jsx(HB,{scope:e,triggerRef:f,contentRef:m,contentId:ws(),titleId:ws(),descriptionId:ws(),open:p,onOpenChange:y,onOpenToggle:x.useCallback(()=>y(v=>!v),[y]),modal:u,children:a})};nS.displayName=rd;var tS="DialogTrigger",rS=x.forwardRef((n,e)=>{const{__scopeDialog:a,...i}=n,o=hr(tS,a),c=Dn(e,o.triggerRef);return g.jsx(un.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ug(o.open),...i,ref:c,onClick:gn(n.onClick,o.onOpenToggle)})});rS.displayName=tS;var lg="DialogPortal",[IB,aS]=eS(lg,{forceMount:void 0}),iS=n=>{const{__scopeDialog:e,forceMount:a,children:i,container:o}=n,c=hr(lg,e);return g.jsx(IB,{scope:e,forceMount:a,children:x.Children.map(i,u=>g.jsx(Tl,{present:a||c.open,children:g.jsx(cp,{asChild:!0,container:o,children:u})}))})};iS.displayName=lg;var zu="DialogOverlay",sS=x.forwardRef((n,e)=>{const a=aS(zu,n.__scopeDialog),{forceMount:i=a.forceMount,...o}=n,c=hr(zu,n.__scopeDialog);return c.modal?g.jsx(Tl,{present:i||c.open,children:g.jsx(UB,{...o,ref:e})}):null});sS.displayName=zu;var JB=OB("DialogOverlay.RemoveScroll"),UB=x.forwardRef((n,e)=>{const{__scopeDialog:a,...i}=n,o=hr(zu,a);return g.jsx(up,{as:JB,allowPinchZoom:!0,shards:[o.contentRef],children:g.jsx(un.div,{"data-state":ug(o.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),Ai="DialogContent",oS=x.forwardRef((n,e)=>{const a=aS(Ai,n.__scopeDialog),{forceMount:i=a.forceMount,...o}=n,c=hr(Ai,n.__scopeDialog);return g.jsx(Tl,{present:i||c.open,children:c.modal?g.jsx(qB,{...o,ref:e}):g.jsx(KB,{...o,ref:e})})});oS.displayName=Ai;var qB=x.forwardRef((n,e)=>{const a=hr(Ai,n.__scopeDialog),i=x.useRef(null),o=Dn(e,a.contentRef,i);return x.useEffect(()=>{const c=i.current;if(c)return j4(c)},[]),g.jsx(lS,{...n,ref:o,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:gn(n.onCloseAutoFocus,c=>{c.preventDefault(),a.triggerRef.current?.focus()}),onPointerDownOutside:gn(n.onPointerDownOutside,c=>{const u=c.detail.originalEvent,f=u.button===0&&u.ctrlKey===!0;(u.button===2||f)&&c.preventDefault()}),onFocusOutside:gn(n.onFocusOutside,c=>c.preventDefault())})}),KB=x.forwardRef((n,e)=>{const a=hr(Ai,n.__scopeDialog),i=x.useRef(!1),o=x.useRef(!1);return g.jsx(lS,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{n.onCloseAutoFocus?.(c),c.defaultPrevented||(i.current||a.triggerRef.current?.focus(),c.preventDefault()),i.current=!1,o.current=!1},onInteractOutside:c=>{n.onInteractOutside?.(c),c.defaultPrevented||(i.current=!0,c.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const u=c.target;a.triggerRef.current?.contains(u)&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&o.current&&c.preventDefault()}})}),lS=x.forwardRef((n,e)=>{const{__scopeDialog:a,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:c,...u}=n,f=hr(Ai,a),m=x.useRef(null),p=Dn(e,m);return u4(),g.jsxs(g.Fragment,{children:[g.jsx(ep,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:o,onUnmountAutoFocus:c,children:g.jsx($m,{role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":ug(f.open),...u,ref:p,onDismiss:()=>f.onOpenChange(!1)})}),g.jsxs(g.Fragment,{children:[g.jsx(ZB,{titleId:f.titleId}),g.jsx(XB,{contentRef:m,descriptionId:f.descriptionId})]})]})}),cg="DialogTitle",cS=x.forwardRef((n,e)=>{const{__scopeDialog:a,...i}=n,o=hr(cg,a);return g.jsx(un.h2,{id:o.titleId,...i,ref:e})});cS.displayName=cg;var uS="DialogDescription",YB=x.forwardRef((n,e)=>{const{__scopeDialog:a,...i}=n,o=hr(uS,a);return g.jsx(un.p,{id:o.descriptionId,...i,ref:e})});YB.displayName=uS;var dS="DialogClose",fS=x.forwardRef((n,e)=>{const{__scopeDialog:a,...i}=n,o=hr(dS,a);return g.jsx(un.button,{type:"button",...i,ref:e,onClick:gn(n.onClick,()=>o.onOpenChange(!1))})});fS.displayName=dS;function ug(n){return n?"open":"closed"}var hS="DialogTitleWarning",[UL,mS]=JA(hS,{contentName:Ai,titleName:cg,docsSlug:"dialog"}),ZB=({titleId:n})=>{const e=mS(hS),a=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return x.useEffect(()=>{n&&(document.getElementById(n)||console.error(a))},[a,n]),null},WB="DialogDescriptionWarning",XB=({contentRef:n,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${mS(WB).contentName}}.`;return x.useEffect(()=>{const o=n.current?.getAttribute("aria-describedby");e&&o&&(document.getElementById(e)||console.warn(i))},[i,n,e]),null},QB=nS,$B=rS,eL=iS,nL=sS,tL=oS,rL=cS,aL=fS;function iL({...n}){return g.jsx(QB,{"data-slot":"dialog",...n})}function sL({...n}){return g.jsx($B,{"data-slot":"dialog-trigger",...n})}function oL({...n}){return g.jsx(eL,{"data-slot":"dialog-portal",...n})}function lL({className:n,...e}){return g.jsx(nL,{"data-slot":"dialog-overlay",className:yn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...e})}function cL({className:n,children:e,...a}){return g.jsxs(oL,{"data-slot":"dialog-portal",children:[g.jsx(lL,{}),g.jsxs(tL,{"data-slot":"dialog-content",className:yn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...a,children:[e,g.jsxs(aL,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[g.jsx(o4,{}),g.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function uL({className:n,...e}){return g.jsx("div",{"data-slot":"dialog-header",className:yn("flex flex-col gap-2 text-center sm:text-left",n),...e})}function dL({className:n,...e}){return g.jsx(rL,{"data-slot":"dialog-title",className:yn("text-lg leading-none font-semibold",n),...e})}var ad="Checkbox",[fL]=bl(ad),[hL,dg]=fL(ad);function mL(n){const{__scopeCheckbox:e,checked:a,children:i,defaultChecked:o,disabled:c,form:u,name:f,onCheckedChange:m,required:p,value:y="on",internal_do_not_use_render:v}=n,[S,A]=gu({prop:a,defaultProp:o??!1,onChange:m,caller:ad}),[E,M]=x.useState(null),[D,w]=x.useState(null),N=x.useRef(!1),P=E?!!u||!!E.closest("form"):!0,j={checked:S,disabled:c,setChecked:A,control:E,setControl:M,name:f,form:u,value:y,hasConsumerStoppedPropagationRef:N,required:p,defaultChecked:La(o)?!1:o,isFormControl:P,bubbleInput:D,setBubbleInput:w};return g.jsx(hL,{scope:e,...j,children:pL(v)?v(j):i})}var pS="CheckboxTrigger",gS=x.forwardRef(({__scopeCheckbox:n,onKeyDown:e,onClick:a,...i},o)=>{const{control:c,value:u,disabled:f,checked:m,required:p,setControl:y,setChecked:v,hasConsumerStoppedPropagationRef:S,isFormControl:A,bubbleInput:E}=dg(pS,n),M=Dn(o,y),D=x.useRef(m);return x.useEffect(()=>{const w=c?.form;if(w){const N=()=>v(D.current);return w.addEventListener("reset",N),()=>w.removeEventListener("reset",N)}},[c,v]),g.jsx(un.button,{type:"button",role:"checkbox","aria-checked":La(m)?"mixed":m,"aria-required":p,"data-state":MS(m),"data-disabled":f?"":void 0,disabled:f,value:u,...i,ref:M,onKeyDown:gn(e,w=>{w.key==="Enter"&&w.preventDefault()}),onClick:gn(a,w=>{v(N=>La(N)?!0:!N),E&&A&&(S.current=w.isPropagationStopped(),S.current||w.stopPropagation())})})});gS.displayName=pS;var yS=x.forwardRef((n,e)=>{const{__scopeCheckbox:a,name:i,checked:o,defaultChecked:c,required:u,disabled:f,value:m,onCheckedChange:p,form:y,...v}=n;return g.jsx(mL,{__scopeCheckbox:a,checked:o,defaultChecked:c,disabled:f,required:u,onCheckedChange:p,name:i,form:y,value:m,internal_do_not_use_render:({isFormControl:S})=>g.jsxs(g.Fragment,{children:[g.jsx(gS,{...v,ref:e,__scopeCheckbox:a}),S&&g.jsx(SS,{__scopeCheckbox:a})]})})});yS.displayName=ad;var vS="CheckboxIndicator",bS=x.forwardRef((n,e)=>{const{__scopeCheckbox:a,forceMount:i,...o}=n,c=dg(vS,a);return g.jsx(Tl,{present:i||La(c.checked)||c.checked===!0,children:g.jsx(un.span,{"data-state":MS(c.checked),"data-disabled":c.disabled?"":void 0,...o,ref:e,style:{pointerEvents:"none",...n.style}})})});bS.displayName=vS;var xS="CheckboxBubbleInput",SS=x.forwardRef(({__scopeCheckbox:n,...e},a)=>{const{control:i,hasConsumerStoppedPropagationRef:o,checked:c,defaultChecked:u,required:f,disabled:m,name:p,value:y,form:v,bubbleInput:S,setBubbleInput:A}=dg(xS,n),E=Dn(a,A),M=_4(c),D=A4(i);x.useEffect(()=>{const N=S;if(!N)return;const P=window.HTMLInputElement.prototype,O=Object.getOwnPropertyDescriptor(P,"checked").set,q=!o.current;if(M!==c&&O){const B=new Event("click",{bubbles:q});N.indeterminate=La(c),O.call(N,La(c)?!1:c),N.dispatchEvent(B)}},[S,M,c,o]);const w=x.useRef(La(c)?!1:c);return g.jsx(un.input,{type:"checkbox","aria-hidden":!0,defaultChecked:u??w.current,required:f,disabled:m,name:p,value:y,form:v,...e,tabIndex:-1,ref:E,style:{...e.style,...D,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});SS.displayName=xS;function pL(n){return typeof n=="function"}function La(n){return n==="indeterminate"}function MS(n){return La(n)?"indeterminate":n?"checked":"unchecked"}function Y2({className:n,...e}){return g.jsx(yS,{"data-slot":"checkbox",className:yn("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...e,children:g.jsx(bS,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:g.jsx(Vu,{className:"size-3.5"})})})}var gL=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],yL=gL.reduce((n,e)=>{const a=zx(`Primitive.${e}`),i=x.forwardRef((o,c)=>{const{asChild:u,...f}=o,m=u?a:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),g.jsx(m,{...f,ref:c})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{}),vL="Label",CS=x.forwardRef((n,e)=>g.jsx(yL.label,{...n,ref:e,onMouseDown:a=>{a.target.closest("button, input, select, textarea")||(n.onMouseDown?.(a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));CS.displayName=vL;var bL=CS;function Z2({className:n,...e}){return g.jsx(bL,{"data-slot":"label",className:yn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...e})}const xL=10*1024*1024,SL=["application/pdf","image/jpeg","image/jpg","image/png","image/heic","image/heif","image/webp","image/tiff","image/tif"],ML=[".pdf",".jpg",".jpeg",".png",".heic",".heif",".webp",".tif",".tiff"],CL={fr:{fileTooLarge:"Le fichier est trop volumineux (max 10 Mo)",invalidFileFormat:"Format non supporté (PDF, JPG, PNG, HEIC, WebP, TIFF)",fileTooLargeAndInvalidFormat:"Le fichier est trop volumineux et le format n'est pas supporté"},en:{fileTooLarge:"File is too large (max 10 MB)",invalidFileFormat:"Unsupported format (PDF, JPG, PNG, HEIC, WebP, TIFF)",fileTooLargeAndInvalidFormat:"File is too large and format is not supported"}};function W2({label:n,file:e,onFileChange:a,uploadText:i,required:o,optional:c,optionalText:u,language:f,error:m,onErrorChange:p,id:y,className:v=""}){const[S,A]=x.useState(!1),[E,M]=x.useState(""),D=CL[f],w=q=>{M(""),p&&p("");const B=q.size<=xL,G="."+q.name.split(".").pop()?.toLowerCase(),Q=SL.includes(q.type)||ML.includes(G);return!B&&!Q?(M(D.fileTooLargeAndInvalidFormat),p&&p(D.fileTooLargeAndInvalidFormat),!1):B?Q?!0:(M(D.invalidFileFormat),p&&p(D.invalidFileFormat),!1):(M(D.fileTooLarge),p&&p(D.fileTooLarge),!1)},N=q=>{q.preventDefault();const B=q.dataTransfer.files[0];B&&w(B)&&a(B),A(!1)},P=q=>{const B=q.target.files?.[0];B&&w(B)&&a(B)},j=()=>{a(null),M(""),p&&p("")},O=m||E;return g.jsxs("div",{id:y,className:v,children:[g.jsxs("p",{className:"text-sm font-bold text-brand-text mb-2",children:[n,o&&g.jsx("span",{className:"text-brand-error ml-1",children:"*"}),c&&u&&g.jsxs("span",{className:"text-slate-500 text-xs ml-2",children:["(",u,")"]})]}),e?g.jsxs("div",{className:"h-36 rounded-lg border-2 border-brand-success bg-gradient-to-br from-brand-success/10 to-brand-success/5 p-4 flex flex-col items-center justify-center relative shadow-sm",children:[g.jsx("button",{type:"button",onClick:j,className:"absolute top-2 right-2 hover:scale-110 transition-transform","aria-label":"Supprimer le fichier",children:g.jsx(o4,{className:"w-4 h-4 text-slate-600 hover:text-brand-error"})}),g.jsx("div",{children:g.jsx(ys,{className:"w-8 h-8 text-brand-success mb-2"})}),g.jsx("p",{className:"text-xs text-brand-success font-semibold text-center px-2 truncate max-w-full",children:e.name})]}):g.jsxs(g.Fragment,{children:[g.jsxs("label",{onDrop:N,onDragOver:q=>{q.preventDefault(),A(!0)},onDragLeave:()=>A(!1),className:`h-36 rounded-lg border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center hover:scale-[1.02] ${S?"border-brand-primary bg-brand-primary/5 scale-105":O?"border-brand-error bg-red-50":"border-slate-300 hover:border-brand-primary bg-slate-50 hover:bg-slate-100"}`,children:[g.jsx(jA,{className:`w-8 h-8 mb-2 transition-colors ${S?"text-brand-primary":O?"text-brand-error":"text-slate-400"}`}),g.jsx("p",{className:"text-xs text-slate-500 text-center px-2 font-medium",children:i}),g.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.tif,.tiff",onChange:P,className:"hidden","aria-label":n})]}),O&&g.jsxs("div",{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",role:"alert",children:[g.jsx(Sn,{className:"w-4 h-4 flex-shrink-0"}),g.jsx("span",{children:O})]})]})]})}const AL=(n,e,a)=>{const i=e==="accident"&&n==="swiss"||e==="illness"&&n==="swiss";return td({reason:H2(["illness","accident"],{errorMap:()=>({message:a.reasonRequired})}),insurance:H2(["swiss","international","auto"],{errorMap:()=>({message:a.insuranceRequired})}),hasEmployer:am(),consentNLPD:am().refine(o=>o===!0,a.consentNLPDRequired),consentMarketing:am(),identityCard:rm(File,{message:a.identityCardRequired}),insuranceCard:i?rm(File,{message:a.insuranceCardRequired}):rm(File).optional().nullable()})},fg=[.25,.46,.45,.94],wL=[.16,1,.3,1],mt={SCALE_PULSE:[1,1.03,1],SCALE_HOVER:1.02,SCALE_TAP:.98,DURATION_DEFAULT:.4,DURATION_LONG:.5,STAGGER_DELAY:.1,PULSE_DURATION:2},TL=["swiss","international","auto"],DL={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:mt.STAGGER_DELAY,delayChildren:mt.STAGGER_DELAY}}},gs={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:mt.DURATION_DEFAULT,ease:fg}}},EL={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:mt.DURATION_LONG,ease:fg}},pulse:{scale:mt.SCALE_PULSE,transition:{duration:mt.PULSE_DURATION,repeat:1/0,ease:"easeInOut"}}},NL={hidden:{opacity:0,height:0,scale:.95},visible:{opacity:1,height:"auto",scale:1,transition:{duration:.5,ease:wL,opacity:{duration:.3},height:{duration:.5},scale:{duration:.4,delay:.1}}},exit:{opacity:0,height:0,scale:.95,transition:{duration:.3,ease:fg}}},X2={hover:{scale:1.01,transition:{duration:.2}},tap:{scale:.98,transition:{duration:.1}}};function RL({language:n,reason:e,insurance:a,hasEmployer:i,consentNLPD:o,consentMarketing:c,identityCard:u,insuranceCard:f,onReasonChange:m,onInsuranceChange:p,onHasEmployerChange:y,onConsentNLPDChange:v,onConsentMarketingChange:S,onIdentityCardChange:A,onInsuranceCardChange:E,onNext:M,onBack:D}){const w=oR[n],N=x.useRef(null),P=x.useRef(null),j=x.useRef(null),O=x.useRef(null),q=x.useRef(null),[B,G]=x.useState(e),[Q,ae]=x.useState(a),de=x.useMemo(()=>AL(Q,B,{reasonRequired:w.reasonRequired,insuranceRequired:w.insuranceRequired,identityCardRequired:w.identityCardRequired,insuranceCardRequired:w.insuranceCardRequired,consentNLPDRequired:w.consentNLPDRequired}),[Q,B,w.reasonRequired,w.insuranceRequired,w.identityCardRequired,w.insuranceCardRequired,w.consentNLPDRequired]),{handleSubmit:se,formState:{errors:re},setValue:le,trigger:ge,watch:_}=ed({resolver:nd(de),mode:"onSubmit",defaultValues:{reason:e||void 0,insurance:a||void 0,hasEmployer:i,consentNLPD:o,consentMarketing:c,identityCard:u||void 0,insuranceCard:f||void 0}}),U=_(),V=U.reason||e,fe=U.insurance||a,be=fe==="swiss";x.useEffect(()=>{V!==B&&G(V)},[V,B]),x.useEffect(()=>{fe!==Q&&ae(fe)},[fe,Q]),x.useEffect(()=>{const ce=Object.keys(re);if(ce.length>0){const Ce=ce[0],Pe={reason:N,insurance:P,identityCard:j,insuranceCard:O,consentNLPD:q}[Ce];Pe?.current&&Pe.current.scrollIntoView({behavior:"smooth",block:"center"})}},[re]);const T=x.useCallback(ce=>{le("reason",ce,{shouldValidate:!1}),m(ce)},[le,m]),Z=x.useCallback(ce=>{le("insurance",ce,{shouldValidate:!1}),p(ce)},[le,p]),ne=x.useCallback((ce,Ce)=>{ce==="identity"?(le("identityCard",Ce,{shouldValidate:!0}),A(Ce)):(le("insuranceCard",Ce,{shouldValidate:!0}),E(Ce))},[le,A,E]),oe=x.useCallback(()=>{M()},[M]);return g.jsx("div",{className:"min-h-screen flex items-center justify-center px-4 py-4",children:g.jsx(ye.div,{className:"w-full max-w-2xl mx-auto",variants:DL,initial:"hidden",animate:"visible",children:g.jsxs("div",{className:"bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 backdrop-blur-sm relative z-10",children:[g.jsxs(ye.div,{className:"mb-8",variants:gs,children:[g.jsx(ye.div,{className:"w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-primary/20",variants:EL,animate:"pulse",children:g.jsx(wA,{className:"w-8 h-8 text-white"})}),g.jsx(ye.h1,{className:"text-2xl font-bold text-brand-text text-center mb-2",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3},children:w.title}),g.jsx(ye.p,{className:"text-sm text-slate-600 text-center",initial:{opacity:0},animate:{opacity:1},transition:{delay:.25,duration:.3},children:w.subtitle})]}),g.jsxs("form",{onSubmit:se(oe),className:"space-y-8",children:[g.jsxs(ye.div,{ref:N,id:"reason",variants:gs,role:"group","aria-labelledby":"reason-label",children:[g.jsx("label",{id:"reason-label",className:"block text-sm font-semibold text-brand-text mb-3",children:w.reasonLabel}),g.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[g.jsxs(ye.button,{type:"button",onClick:()=>T("illness"),className:`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${V==="illness"?"bg-brand-primary text-white border border-brand-primary":"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary"}`,whileHover:{scale:mt.SCALE_HOVER},whileTap:{scale:mt.SCALE_TAP},"aria-pressed":V==="illness","aria-label":w.illness,children:[V==="illness"&&g.jsx(ye.span,{className:"absolute top-2 right-2",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:g.jsx(ys,{className:"w-5 h-5"})}),w.illness]}),g.jsxs(ye.button,{type:"button",onClick:()=>T("accident"),className:`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${V==="accident"?"bg-brand-primary text-white border border-brand-primary":"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary"}`,whileHover:{scale:mt.SCALE_HOVER},whileTap:{scale:mt.SCALE_TAP},"aria-pressed":V==="accident","aria-label":w.accident,children:[V==="accident"&&g.jsx(ye.span,{className:"absolute top-2 right-2",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:g.jsx(ys,{className:"w-5 h-5"})}),w.accident]})]}),g.jsx(cu,{children:re.reason&&g.jsxs(ye.div,{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.2},children:[g.jsx(Sn,{className:"w-4 h-4 flex-shrink-0"}),g.jsx("span",{children:re.reason?.message})]})})]}),g.jsx(cu,{mode:"wait",children:V==="accident"&&g.jsxs(ye.div,{variants:NL,initial:"hidden",animate:"visible",exit:"exit",style:{overflow:"hidden"},children:[g.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[g.jsx(ye.div,{animate:{rotate:[0,-10,10,-10,0]},transition:{duration:.5,delay:.3},children:g.jsx(pA,{className:"w-5 h-5 text-brand-primary"})}),g.jsx("label",{id:"employer-label",className:"block text-sm font-semibold text-brand-text",children:w.hasEmployerLabel})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-3",role:"group","aria-labelledby":"employer-label",children:[g.jsxs(ye.button,{type:"button",onClick:()=>{le("hasEmployer",!0,{shouldValidate:!1}),y(!0)},className:`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${i?"bg-brand-primary text-white border border-brand-primary":"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary"}`,whileHover:{scale:mt.SCALE_HOVER},whileTap:{scale:mt.SCALE_TAP},"aria-pressed":i,"aria-label":w.yes,children:[i&&g.jsx(ye.span,{className:"absolute top-2 right-2",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:g.jsx(ys,{className:"w-5 h-5"})}),w.yes]}),g.jsxs(ye.button,{type:"button",onClick:()=>{le("hasEmployer",!1,{shouldValidate:!1}),y(!1)},className:`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${i?"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary":"bg-brand-primary text-white border border-brand-primary"}`,whileHover:{scale:mt.SCALE_HOVER},whileTap:{scale:mt.SCALE_TAP},"aria-pressed":!i,"aria-label":w.no,children:[!i&&g.jsx(ye.span,{className:"absolute top-2 right-2",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:g.jsx(ys,{className:"w-5 h-5"})}),w.no]})]})]},"employer-section")}),g.jsxs(ye.div,{ref:P,id:"insurance",variants:gs,role:"group","aria-labelledby":"insurance-label",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[g.jsx("label",{id:"insurance-label",className:"block text-sm font-semibold text-brand-text",children:w.insuranceLabel}),g.jsxs(iL,{children:[g.jsx(sL,{asChild:!0,children:g.jsx("button",{type:"button",className:"text-brand-primary hover:text-brand-primary-hover text-sm font-medium underline transition-colors",children:w.insuranceHelp})}),g.jsxs(cL,{className:"max-w-2xl max-h-[80vh] overflow-y-auto",children:[g.jsx(uL,{children:g.jsx(dL,{className:"text-xl font-bold text-brand-text",children:w.insuranceHelpTitle})}),g.jsxs("div",{className:"space-y-4 text-brand-text",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"font-bold text-brand-primary mb-1",children:w.insuranceHelpSwiss}),g.jsx("p",{className:"text-sm leading-relaxed",children:w.insuranceHelpSwissDesc})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-bold text-brand-primary mb-1",children:w.insuranceHelpInternational}),g.jsx("p",{className:"text-sm leading-relaxed mb-2",children:w.insuranceHelpInternationalDesc}),g.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm",children:[g.jsx("li",{children:w.insuranceHelpInternationalItem1}),g.jsx("li",{children:w.insuranceHelpInternationalItem2})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-bold text-brand-primary mb-1",children:w.insuranceHelpAuto}),g.jsx("p",{className:"text-sm leading-relaxed",children:w.insuranceHelpAutoDesc})]})]})]})]})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",children:TL.map((ce,Ce)=>g.jsxs(ye.button,{type:"button",onClick:()=>Z(ce),className:`h-14 px-4 rounded-md font-medium text-sm relative overflow-hidden transition-all ${fe===ce?"bg-brand-primary text-white border border-brand-primary":"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary"}`,whileHover:{scale:mt.SCALE_HOVER},whileTap:{scale:mt.SCALE_TAP},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:Ce*.05},"aria-pressed":fe===ce,"aria-label":w[ce],children:[fe===ce&&g.jsx(ye.span,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:g.jsx(ys,{className:"w-4 h-4 absolute top-2 right-2"})}),w[ce]]},ce))}),g.jsx(cu,{children:re.insurance&&g.jsxs(ye.div,{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.2},children:[g.jsx(Sn,{className:"w-4 h-4 flex-shrink-0"}),g.jsx("span",{children:re.insurance?.message})]})})]}),g.jsx(ye.div,{variants:gs,children:g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{ref:j,children:g.jsx(W2,{id:"identityCard",label:w.identityCard,file:u,onFileChange:ce=>ne("identity",ce),uploadText:w.uploadText,required:!0,language:n,error:re.identityCard?.message})}),g.jsx("div",{ref:O,children:g.jsx(W2,{id:"insuranceCard",file:f,onFileChange:ce=>ne("insurance",ce),label:w.insuranceCard,uploadText:w.uploadText,required:be,optional:!be,optionalText:w.optional,language:n,error:re.insuranceCard?.message})})]})}),g.jsxs(ye.div,{ref:q,variants:gs,children:[g.jsx("label",{className:"block text-sm font-semibold text-brand-text mb-3",children:w.consentsLabel}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{children:[g.jsxs("div",{className:`flex items-start gap-3 p-4 bg-slate-50 rounded-lg ${re.consentNLPD?"border-2 border-brand-error":""}`,children:[g.jsx(Y2,{id:"consentNLPD",checked:o,onCheckedChange:ce=>{le("consentNLPD",ce===!0,{shouldValidate:!0}),v(ce===!0)},className:"mt-0.5"}),g.jsxs(Z2,{htmlFor:"consentNLPD",className:"text-sm font-medium text-brand-text cursor-pointer flex-1 leading-5",children:[w.consentNLPDPrefix,g.jsx("a",{href:w.privacyPolicyUrl,target:"_blank",rel:"noopener noreferrer",className:"text-brand-primary hover:underline",onClick:ce=>ce.stopPropagation(),children:w.consentNLPDLink}),g.jsx("span",{className:"text-brand-error ml-1",children:"*"})]})]}),re.consentNLPD&&g.jsxs("div",{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4 flex-shrink-0"}),g.jsx("span",{children:re.consentNLPD?.message})]})]}),g.jsxs("div",{className:"flex items-start gap-3 p-4 bg-slate-50 rounded-lg",children:[g.jsx(Y2,{id:"consentMarketing",checked:c,onCheckedChange:ce=>{le("consentMarketing",ce===!0),S(ce===!0)},className:"mt-0.5"}),g.jsxs(Z2,{htmlFor:"consentMarketing",className:"text-sm font-medium text-brand-text cursor-pointer flex-1 leading-5",children:[w.consentMarketing," ",g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",w.optional,")"]})]})]})]})]}),g.jsxs(ye.div,{className:"flex gap-3 pt-4",variants:gs,children:[g.jsx(er,{type:"button",onClick:D,variant:"outline",size:"lg",className:"h-12 px-6 transition-all",asChild:!0,children:g.jsxs(ye.button,{variants:X2,whileHover:"hover",whileTap:"tap","aria-label":w.back,children:[g.jsx(ju,{className:"w-5 h-5"}),w.back]})}),g.jsx(er,{type:"submit",size:"lg",className:"group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all",asChild:!0,children:g.jsxs(ye.button,{variants:X2,whileHover:"hover",whileTap:"tap","aria-label":w.continue,children:[w.continue,g.jsx(ye.div,{whileHover:{x:2},transition:{duration:.2},className:"inline-block",children:g.jsx(yl,{className:"w-5 h-5"})})]})})]})]})]})})})}function Q2({id:n,value:e,onChange:a,countries:i,placeholder:o="",error:c,required:u=!1,label:f,noResultsText:m="Aucun résultat"}){const[p,y]=x.useState(!1),[v,S]=x.useState(""),[A,E]=x.useState(-1),M=x.useRef(null),D=x.useRef(null),w=i.filter(B=>B.name.toLowerCase().includes(v.toLowerCase()));x.useEffect(()=>{const B=G=>{D.current&&!D.current.contains(G.target)&&M.current&&!M.current.contains(G.target)&&y(!1)};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[]),x.useEffect(()=>{p||(S(""),E(-1))},[p]);const N=B=>{S(B.target.value),y(!0),E(-1)},P=()=>{y(!0)},j=B=>{a(B.name),S(""),y(!1)},O=B=>{if(!p){(B.key==="ArrowDown"||B.key==="ArrowUp"||B.key==="Enter")&&(B.preventDefault(),y(!0));return}switch(B.key){case"ArrowDown":B.preventDefault(),E(G=>G<w.length-1?G+1:G);break;case"ArrowUp":B.preventDefault(),E(G=>G>0?G-1:0);break;case"Enter":B.preventDefault(),A>=0&&A<w.length&&j(w[A]);break;case"Escape":B.preventDefault(),y(!1);break}};x.useEffect(()=>{if(A>=0&&D.current){const B=D.current.children[A];B&&B.scrollIntoView({block:"nearest"})}},[A]);const q=p?v:e;return g.jsxs("div",{className:"relative",children:[g.jsxs("label",{htmlFor:n,className:"block text-sm font-medium text-brand-text mb-2",children:[f," ",u&&g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsxs("div",{className:"relative",children:[g.jsx("input",{ref:M,id:n,type:"text",value:q,onChange:N,onClick:P,onKeyDown:O,placeholder:o,autoComplete:"off",className:`w-full h-12 px-4 pr-10 rounded-md border transition-all ${c?"border-brand-error focus:ring-2 focus:ring-brand-error focus:border-transparent":"border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"}`}),g.jsx(Gu,{className:`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none transition-transform ${p?"rotate-180":""}`})]}),p&&g.jsx("div",{ref:D,className:"absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto",children:w.length>0?w.map((B,G)=>g.jsx("div",{onClick:()=>j(B),className:`px-4 py-2.5 cursor-pointer transition-colors ${G===A?"bg-brand-primary text-white":e===B.name?"bg-slate-100":"hover:bg-slate-50"}`,children:B.name},B.code)):g.jsx("div",{className:"px-4 py-2.5 text-slate-500 text-sm",children:m})}),c&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:c})]})]})}const kL=`\uFEFFName;ID\r
 Hagemann Gysling Kerstin ;1\r
Aapro Matti;2\r
Abbassi  Ziad;3\r
Abbas-Terki Nadji;4\r
Abbet Philippe;5\r
Abbou Boubeker;6\r
Abboud Anna-Eliane;7\r
Abdelkrim Tarik;8\r
Abdelnour-Berchtold Etienne;9\r
Abdel-Sayed Andrew;10\r
Abdi Lotfi;11\r
Abdul Malak Nasser;12\r
Abed Fatiha;13\r
Abed Meriem;14\r
Abetel Gilbert;15\r
Abid Nadine;16\r
Abihanna Francis;17\r
Abosaleh Marem;18\r
Abou Fernandez Magali;19\r
Abou-Thouraya Raphaël;20\r
Abouzeid Hana;21\r
Abramowski Serge;22\r
Abrassart Sophie;23\r
Abreu Marlène;24\r
Abril Fernando;25\r
Accietto Cataldo;26\r
Accorroni Alice;27\r
Aceto Leonardo;28\r
Acevedo-Gonzalez Guillermo;29\r
Achor Annabel;30\r
Achour Faïza Djalila;31\r
Acikgoz Ebru;32\r
Acker Antoine;33\r
Ackermann Sandrine;34\r
Actis Giroux Isabella;35\r
Adal Karim;36\r
Adam Emilie;37\r
Adamini A. Filippo;38\r
Adamopoulos Dionysios;39\r
Adatto Maurice;40\r
Addamiano Costanza;41\r
Adeleye Lara;42\r
Adjadj Elias;43\r
Adler Dan Elie;44\r
Aeberhard Jean-Manuel;45\r
Aebi Alexandre;46\r
Aebi Raffaella;47\r
Aebischer Gaspard;48\r
Aegerter Jean-Philippe;49\r
Aellen Pirkl Susanne;50\r
Aerts Leen;51\r
Aeschbach  Thomas;52\r
Aeschbach Bolzani Virginie;53\r
Aeschimann  Yaëlle;54\r
Afanasiev Vadim ;55\r
Affolter Alexandre;56\r
Aghaie Kakroudi Jérôme;57\r
Aghanya Elspeth;58\r
Agoritsas-Ciss Aliki;59\r
Agrifoglio Arido;60\r
Ahmadi Nematollah;61\r
Ahouel Abdelkader;62\r
Ahriz Nassim;63\r
Airey Thomas;64\r
Akbayin Mehtap;65\r
Akiki Alain;66\r
Akiki Liliane;67\r
Akkawi Mohamed Fayez;68\r
Akram Ahmad Nehad;69\r
Al Amine Antoinette;70\r
Al Awadhi Abdullah;71\r
Al Bitar Bassel;72\r
Al Chahabi-Hamwy Myriam;73\r
Al Cheika Abdul Moumen;74\r
Al Jarrah Saif;75\r
Al Saffar Nashwa;76\r
Aladjem Denis;77\r
Alami-Gomaa Dalia;78\r
Alberge Lola;79\r
Alberto Chloé;80\r
Alborino Domenico;81\r
Alcoba-Reitz Kristina;82\r
Alcocer Lanza Maria Fernanda;83\r
Alcouce Eduardo;84\r
Alder Virginie;85\r
Aldrin Ughetto (gardes);86\r
Alexander James;87\r
Alfò Katia;88\r
Algarra Laure;89\r
Alibashe  Mohamed ;90\r
Alibegovic Zaza Jasmina;91\r
Allainmat Laurent;92\r
Allain-Pons Beatrice;93\r
Allali Danièle;94\r
Allali Danièle ASSC;95\r
Allali Infirmière Carouge;96\r
Allaoua Amir;97\r
Allard Quentin;98\r
Allemann Pierre;99\r
Allgöwer Dietegen;100\r
Allieri Thierry;101\r
Allouche Pierre-Yves;102\r
Allouchery Justine;103\r
Almagbaly Usameh;104\r
Al-Mayahi Mohamed;105\r
Almeida Marques Nilson;106\r
Al-Sultan Suhaib;107\r
Altay Unal;108\r
Althaus Fabrice;109\r
Althaus Marc-André;110\r
Altrichter Loan;111\r
Altwegg Guillaume;112\r
Alvarez Valérie;113\r
Alves Cyrielle;114\r
Alves Philippe;115\r
Alzuphar Stephen Jacques;116\r
Amans Jean-Marc;117\r
Amaudruz Monique;118\r
Ambassade du Qatar Bonn ;119\r
Amblard Didier;120\r
Ambrosetti Alexandra;121\r
Ambrosetti Patrick;122\r
Ambrosetti Thomas;123\r
Ameloot Shaghayegh ;124\r
Ameti Adelina;125\r
Amico Andrea;126\r
Amiet Gerhard;127\r
Amini Kouroche;128\r
Amini Simine;129\r
Ammane Hany;130\r
Ammann Patrick;131\r
Ammann Wolfgang;132\r
Ammar Khadija;133\r
Ammar Malek;134\r
Ammon Jurg;135\r
Amram Marie-Laure;136\r
Amram Patrick;137\r
Amselem Samuel;138\r
Amstutz Béguin Céline;139\r
Amstutz Cédric;140\r
Amstutz Sébastien;141\r
Amstutz Vincent;142\r
Amy Mélodie;143\r
Amzalag / Pralong Composition corporelle;144\r
Amzalag Gaël;145\r
Anafack-Rodriguez Ana Maria;146\r
Anastaze Stelle Karine;147\r
Anchieri Catherine;148\r
Ancrenaz-Tulvan Georgiana;149\r
Andenmatten Zufferey Franziska;150\r
Andenmatten-Trigona Béatrice;151\r
Anderson Sabrina;152\r
Andonovski Andja;153\r
Andrade Lopes Stéphanie;154\r
Andrade Patricio;155\r
Andraud Hervé;156\r
André Raphaël;157\r
André-Lévigne Dominik;158\r
Andreoli Gauthier;159\r
Andres Axel;160\r
Andrey Christophe;161\r
Andrey Urias Aline;162\r
Andrieux Cyril;163\r
Andrieux-Chastonay Elodie;164\r
Anex Frédéric;165\r
Angelot Sophie;166\r
Angst Felix;167\r
Anguenot Jean-Luc;168\r
Anken Jean-Frédéric;169\r
Anker Nicolas;170\r
Annezo Jean-Luc;171\r
Anquetil Véréna;172\r
Anschütz Lukas;173\r
Anselmi Leonardo;174\r
Antheriou Marie-Caroline;175\r
Antille Christophe;176\r
Antille Frei Marieke;177\r
Antille Valérie;178\r
Antonelli Eric;179\r
Antoni Gyana;180\r
Antoniotti Elsa;181\r
Anvari Tehrani Masoero Ariane;182\r
Aouad Soumaya;183\r
Apetrei Silviu;184\r
Apresian Gurgen;185\r
Apri Jean-Christophe;186\r
Araeipour-Tehrani Yasha;187\r
Arana Alvaro;188\r
Arango Fanny;189\r
Araoz Diego;190\r
Ardigo Sheila;191\r
Arditi Philippe Daniel;192\r
Aresu Yan;193\r
Ariarajah Regueiro Niroshini Violet;194\r
Arkhurst Richard;195\r
Armand Nathalie;196\r
Armenian Berj;197\r
Arminjon Stéphane;198\r
Arnaud Clémence;199\r
Arnaudon Claire;200\r
Arnold Mireille;201\r
Arnoult Anne-Cécile;202\r
Arquer Marina;203\r
Arrigoni Eviano;204\r
Arroja José David;205\r
Arroja José-Manuel;206\r
Arroyo Jesus;207\r
Arsich Janick;208\r
Arslanagic Semir;209\r
Arthaud Christian;210\r
Ascione Ciro;211\r
Ashkin Hamid;212\r
Asrih  Mohamed;213\r
Assal Frédéric;214\r
Assal Mathieu;215\r
Assir Forsyth Noémie;216\r
Assistant Medecine Interne II;217\r
Assoul Dalila;218\r
Assuelli Marie-Thérèse;219\r
Astouric Julien;220\r
Athlani Lionel;221\r
Atrash Sylvain;222\r
Aubier Pascale;223\r
Aubin Paul-Alexandre;224\r
Audry Ruta;225\r
Augiey Marc;226\r
Augsburger Aurélie;227\r
Augsburger Florence;228\r
Auguste Riddley;229\r
Auriol Alexia;230\r
Autre medecin Taitant;231\r
Autunno Elsa;232\r
Auvergne Bertrand;233\r
Avalle Philippe;234\r
Avdilova Ibraimi Ajshe;235\r
Avramov-Rendall Katia;236\r
Avril Jacqueline;237\r
Axmann Shadi;238\r
Ayass Jihane;239\r
Aybek Rusca Selma;240\r
Aymon Eugene;241\r
Ayoun Gilles;242\r
Azar-Pey  Nadereh;243\r
Aze-Dervaux Mathilde;244\r
Azuaga Martinez Alicia;245\r
Azzouz Fares;246\r
Ba Guillemette;247\r
Ba Marieme;248\r
Ba Marième;249\r
Baalbaki Rayan;250\r
Baba-Ali Lies;251\r
Babel Jean-François;252\r
Babic-Milovanovic Ivana;253\r
Baccaro Maria;254\r
Bacchiocchi-Suilen Caroline;255\r
Bach Claudine;256\r
Bachelard Jessica Kim;257\r
Bachelard Olivier;258\r
Bachmann Brigitte;259\r
Bachmann Ruxandra;260\r
Backhouse Laetitia;261\r
Baconnier Astrid;262\r
Badaoui Elie;263\r
Bader Adeline;264\r
Bader Colette;265\r
Bader Jean-Claude;266\r
Bader Marlyse;267\r
Baer Dave;268\r
Baer Jean-Luc;269\r
Baer Sylvia;270\r
Baer Xavier;271\r
Baeriswyl Vincent;272\r
Baesu Crinu;273\r
Bagetakou Spyridoula;274\r
Baghdadi Lama;275\r
Baglivo Edoardo;276\r
Bagutti Carlo Eduardo;277\r
Bahurel Jérôme;278\r
Baili Hassene;279\r
Bailly Beauregard Laure;280\r
Bailly Daniel;281\r
Bakelants Emma;282\r
Bakes Jérôme;283\r
Bal Eric;284\r
Balandraux Martine;285\r
Balavoine Franceline;286\r
Balavoine Jean-François;287\r
Balderrama Fernando;288\r
Balin Lydie;289\r
Bally Daniel;290\r
Balta Marilena Ligia;291\r
Baltariu Gabriel;292\r
Bambule Yves;293\r
Bandelier Cédric Laurent;294\r
Bandelier Cédric Yves;295\r
Bandelier Patrick;296\r
Bandelier Raymond;297\r
Bang Pascal Ilhyun;298\r
Bannwart Christian;299\r
Bänziger Oskar;300\r
Bapst Thomas;301\r
Baptista Helder;302\r
Baptista Juliette;303\r
Bara Eva;304\r
Baradel Aurelien;305\r
Baraschi Constantin;306\r
Barazzone Philippe;307\r
Barbanneau-Sadoun Marie-Pierre ;308\r
Barbe Stéphanie;309\r
Barbetta Silvia;310\r
Barbey Christine;311\r
Barbezat Sandrine;312\r
Barbezat Silva;313\r
Barbin Madeleine;314\r
Barbut Bruno;315\r
Bard Benoît;316\r
Barde Caroline;317\r
Barde Jean-Pierre;318\r
Barde-Oberlé Lia;319\r
Barhoumi Oualid;320\r
Barmont Alain;321\r
Barnoud Maëlle;322\r
Baroudi Mariem;323\r
Baroz-Mao Wei-Ta;324\r
Barras Nicolas;325\r
Barratier Sylvain;326\r
Barré-Kummer Sophie;327\r
Barrelet Iona;328\r
Barrière Nicolas;329\r
Barriga Claudia;330\r
Barro Elena;331\r
Barro Javier;332\r
Barro-Rossier Céline;333\r
Barroussel Robert;334\r
Barrué-Belou Simon;335\r
Barruel-Dalzotto Myriam;336\r
Barthassat Vincent;337\r
Barthel Pierre-Yves;338\r
Barthes Manuella;339\r
Bartky Nils;340\r
Bartoli Andrea;341\r
Bartolone Placido;342\r
Basbous Mohamed;343\r
Basile Artus;344\r
Bassand Xavier;345\r
Bassyouny Farrag Khaled;346\r
Basti Ali;347\r
Bastien Julie;348\r
Battikha Jalal-Gaston;349\r
Battisti Thierry;350\r
Bau Amanda;351\r
Baud May;352\r
Baud Patrick;353\r
Baudere Charles;354\r
Baudin Annelise ;355\r
Baudoin Julien;356\r
Baudouin Alexandre;357\r
Baudoux Nathalie;358\r
Baumann Pascale;359\r
Baumann Remy;360\r
Baumann-Benvenuti Fleur;361\r
Baumgartner Jean-Marc;362\r
Baumgartner-Naderi Sharare;363\r
Baux Lucile;364\r
Baxarias Tibau Joaquin;365\r
Baya Abdellah;366\r
Bazire Edouard;367\r
Bazzoli Matteo;368\r
Bdour Moez;369\r
Beau Nicolas;370\r
Beaud Zufferey Carine;371\r
Beaufour Pascale;372\r
Beaulieu Jean-Yves;373\r
Beauverd Yan;374\r
Bec Eric;375\r
Becart Sophie;376\r
Becciolini Elisabeth;377\r
Becerra Fosenbauer Maria;378\r
Bech Stapfer Carine;379\r
Beck Pierre;380\r
Becket Sandra;381\r
Beck-Tuske Erika;382\r
Bécret Cécile Anne;383\r
Bedat Benoït;384\r
Bedat Bernard;385\r
Bedat Philippe;386\r
Bédert Ludmila;387\r
Bednarkiewicz Marek;388\r
Beer Sandra;389\r
Beetschen Gavela Carole;390\r
Beffa Ferdinand;391\r
Beffa Paolo;392\r
Beggah-Alioua Sabah;393\r
Beguin François;394\r
Béguin Pierre;395\r
Behavana Jean-Claude;396\r
Behrend-Tran Tuyet-Nga;397\r
Behrens Oriella Garance;398\r
Bejic Mirsada;399\r
Beknazar Evgueni;400\r
Bekri Taoufik;401\r
Belabbas Linda;402\r
Belaieff Jean;403\r
Belaieff Wilson;404\r
Belarbi Camil;405\r
Belbal Karima;406\r
Beldi Moez;407\r
Belhia Fadhil ;408\r
Belkheir Rachid;409\r
Bellara Samir;410\r
Bellaton Franck;411\r
Bellavia Marina;412\r
Belley Catherine;413\r
Belli Dominique;414\r
Bellon Mathilde;415\r
Bellosta  Véronique;416\r
Belmejdoub Yacine ;417\r
Belotti Eva;418\r
Belouaer Amani;419\r
Beltrémieux Aurélie;420\r
Ben Abdeljelil Hassen;421\r
Ben Abderrahman Wajdi;422\r
Ben Aïssa Assma;423\r
Ben Allel Mélina;424\r
Ben Hassel Selim;425\r
Benador Daivy;426\r
Benaim Charles;427\r
Benamar Mohamed;428\r
Benamran Daniel;429\r
Benazza Mohammed;430\r
Benbassat David Orson;431\r
Benchaa-Magnin Chahinaz;432\r
Benchalgo Abdelmadjid;433\r
Benchaou Mimoun;434\r
Benchouk Samy;435\r
Bendaho Zahra;436\r
Bene Jean-Jacques;437\r
Benedetti Charles;438\r
Bengoa José M.;439\r
Benhamou Senouf Avigael;440\r
Benhima Ghadah;441\r
Benhissen Zineb;442\r
Beni Catia;443\r
Beniada Camille;444\r
Beniada Référent Dr Allali;445\r
Beniada Référent Dr Lazarou;446\r
Benkabouche Mohamed;447\r
Benkortbi  Abderrahim;448\r
Benmiloud Karim;449\r
Bennani Ismail;450\r
Benoit Cédric;451\r
Benoit Raymond;452\r
Benoit-Gonin Frédéric ;453\r
Bensabre Sonia;454\r
Benusiglio Léon N.;455\r
Benvenuti Jean-François;456\r
Benzaquen  David (Nyon);457\r
Benzaquen David;458\r
Benzina Nabil;459\r
Berdah Daniel;460\r
Bërdynaj Blert;461\r
Berezne Alice;462\r
Bergendahl Daniela;463\r
Bergensen Edward;464\r
Berger André;465\r
Berger-Tellerini Rosella;466\r
Bergier Samuel;467\r
Bergoend Pierre;468\r
Bergot Rene;469\r
Berhoune Chafik;470\r
Beria Philippe;471\r
Berindea Ramona;472\r
Berindei-Gurita Codruta-Maria;473\r
Berionni Pauline;474\r
Beris Photis;475\r
Berkane Nadia;476\r
Berkani Sylvie;477\r
Berkcan Serpil;478\r
Berlincourt Fanny;479\r
Bernabeu Francisco-Javier;480\r
Bernal Chloé;481\r
Bernard Fanette;482\r
Bernard Grichting Cindy;483\r
Bernard Louis;484\r
Bernard Stéphane;485\r
Bernard-Burgan Hania;486\r
Bernardini Caroline;487\r
Bernasconi Arnaud;488\r
Bernatas Pierre;489\r
Berner Jeanne;490\r
Bernerd Thomas;491\r
Bernet Valentin;492\r
Berney Jean-Yves;493\r
Berney Lamielle  Maud;494\r
Berney Pascal;495\r
Berney Sylvain ;496\r
Berney Thierry;497\r
Bernhard Jacques;498\r
Bernheim Philippe;499\r
Bernier Lucie;500\r
Bernimoulin Michael;501\r
Bernou Hervé;502\r
Bernoulli Nicole;503\r
Berra Gregory;504\r
Berrada Mouncef;505\r
Berret Joël;506\r
Berret Patrick;507\r
Berry Mélanie;508\r
Berry Raymond;509\r
Berthaudin Alice;510\r
Berthelier Julie;511\r
Berthet Angélique;512\r
Berthet François;513\r
Berthold Alain;514\r
Berthold Dominik;515\r
Bertholet-Masset Beatrice;516\r
Bertoli Angela;517\r
Bertolini David;518\r
Bertoncini Claude;519\r
Bertoni Andrea;520\r
Bertossa Pascale;521\r
Bertrand Charles;522\r
Bertrand Jean-Marc;523\r
Bertrand Pierre;524\r
Bertrand Raymond;525\r
Bessard Gwendoline;526\r
Bessard Thierry;527\r
Besse Valentina;528\r
Besson Delphine;529\r
Besson Duvanel Cécile;530\r
Besson Marius;531\r
Betend Claude;532\r
Bettens Hubert;533\r
Bettex Aude;534\r
Bettini Nathalie;535\r
Bettoni Annette;536\r
Bettoni Marco ;537\r
Beucher Marion;538\r
Beurey Arnaud;539\r
Bévoz Patrice;540\r
Bezzola Alain;541\r
Biancale Lionel;542\r
Bianchi Davide;543\r
Bianchi Movarekhi Patrizia Grace;544\r
Bianchi Stefano;545\r
Bianchi-Demicheli Francesco ;546\r
Biayi Kamanda;547\r
Bibbo-Rosset Evelyne;548\r
Bichard Philippe;549\r
Bideau Sar Martine;550\r
Bidlingmeyer Michel;551\r
Bieler Luc;552\r
Bierens De Haan Eric;553\r
Bieri Jean-Pierre;554\r
Biesel-Desthieux Marie-Noëlle;555\r
Bill Olivier;556\r
Billen Auriane;557\r
Billières Julien;558\r
Billy Jessica;559\r
Bindschedler Marc;560\r
Bine Alexandre;561\r
Binet Fabienne;562\r
Binôme Covid .;563\r
Binyet Daniel;564\r
Birchmeier Myriam;565\r
Birkmaier Timo;566\r
Biro-Levescot Charlotte;567\r
Birraux Brigitte;568\r
Birraux Jacques;569\r
Bisch Laurence;570\r
Bischoff Tièche Caroline;571\r
Bishara Ana;572\r
Bittel Truffer Nadine;573\r
Bitton Alain;574\r
Biver Emmanuel;575\r
Bivol Gabriela;576\r
Blachon Jehann;577\r
Blampey Marie;578\r
Blanc Adrien;579\r
Blanc Caroline;580\r
Blanc Gontran;581\r
Blanc Louis;582\r
Blanc Martine;583\r
Blanc Raschle Aline;584\r
Blanc Xavier;585\r
Blanchard Agnès;586\r
Blanchard Gabriela;587\r
Blanche Coralie;588\r
Blanche Sarah;589\r
Blanchet Lola;590\r
Blanchet Paul;591\r
Blanchet Thomas;592\r
Blanchon Jean-François;593\r
Blanchut Pierre;594\r
Blanc-Moya Rafael;595\r
Blank  Christoph ;596\r
Blanquaert Violaine;597\r
Blaser Alfred;598\r
Blaser Pierre-François;599\r
Blaser Samuel;600\r
Blatmann Carlos;601\r
Blatter Tereza;602\r
Blayo Clément;603\r
Bliujiene Jurgita;604\r
Bloetzer Clemens;605\r
Blondon Marc;606\r
Bloss-Dimond Dawn;607\r
Bloy Nicolas;608\r
Blum Sigrun;609\r
Blunier Jonathan;610\r
Blunier Paul;611\r
Bobillier Matthieu;612\r
Bobillier-Chaumont Nadège ;613\r
Bocaert Jordan;614\r
Bochatay Alexandre;615\r
Bochatay Laurent;616\r
Bocherens Astrid;617\r
Bochud Tornay Chantal;618\r
Bocksberger Jean-Philippe;619\r
Bodino Christophe;620\r
Bodmer Alexandre;621\r
Bodmer Conrad;622\r
Bodmer Françoise;623\r
Bodmer Ronald;624\r
Bodson Anne;625\r
Boehlen Françoise;626\r
Boehler Isabel;627\r
Boerlin Jean-Pierre;628\r
Boffi El Amari Emmanuelle;629\r
Bogeart Nicolas;630\r
Boggio Remo;631\r
Bogousslavsky Julien;632\r
Bohan-Chapuis Christine;633\r
Boillat Dominique;634\r
Boillat Harry;635\r
Boinay Christian;636\r
Boisset Marc;637\r
Boiu Sorina-Mioara;638\r
Boivin Mélanie;639\r
Bolli-Schaffer Lucie;640\r
Bologna Ilaria;641\r
Bolognini Claude;642\r
Bombeli Audrey;643\r
Bon Charles;644\r
Bon Marie Christine;645\r
Bonada Irène;646\r
Bonamy François;647\r
Bonfanti Silvia;648\r
Bonfigli Sabrina;649\r
Bongard Jean-Pierre;650\r
Bongard Olivier;651\r
Bongiorno Vito;652\r
Bongiovanni Pauliina;653\r
Bonhote Nils;654\r
Bonneau Jean-Christoph;655\r
Bonnerot  Mathieu;656\r
Bonnet Christophe;657\r
Bonnetain Marie;658\r
Bono Sylvie;659\r
Bonvallat Sophie;660\r
Bonvin Alexis;661\r
Bonvin Emmanuel;662\r
Bonvin Jean-Luc;663\r
Bonvin Louis;664\r
Bonvini  Robert;665\r
Boo Marc;666\r
Borbély Yves;667\r
Borcan Daniela-Angela;668\r
Bordeau Emeline;669\r
Bordigoni Jean-Philippe;670\r
Bordry Natacha;671\r
Borecka Arditi Marie;672\r
Borecka Krystina;673\r
Borens Olivier;674\r
Borgeat Morgane;675\r
Borgeaud Marlyse;676\r
Borgeaud Maxime ;677\r
Borges Helder;678\r
Borges Jean-Paul;679\r
Borges Monica;680\r
Borloz Stéphane;681\r
Borner Benoît;682\r
Bornet Marc-Antoine;683\r
Bornhauser Antoine;684\r
Borruat François-Xavier;685\r
Borzykowski Joseph;686\r
Bösch Anne;687\r
Boscherini Duccio ;688\r
Bosco Chiara;689\r
Boselie Franciscus ;690\r
Boss Jean-Pierre;691\r
Bossard Daniel;692\r
Bosshard Thomas;693\r
Bosson Valentin;694\r
Bossy Hayes Sabine;695\r
Botbol Rebecca;696\r
Botsikas Diomidis;697\r
Botta-Kauer Yolanda;698\r
Bouabida Mokhtar;699\r
Bouayed Salim;700\r
Bouchardy Judith;701\r
Bouchardy Laurence;702\r
Bouchenaki Nadia;703\r
Boucher Anne;704\r
Boucher Lucie;705\r
Bouchet Catherine;706\r
Bouchet Lise;707\r
Bouchez Laurie;708\r
Bouchut Françoise;709\r
Bouclier Philippe;710\r
Boudabbous Sana;711\r
Bouexiere Clément;712\r
Bouffioux Nathalie;713\r
Bouiller Camille;714\r
Boukakiou Reda;715\r
Boukrid Iman;716\r
Boukrid Meriem;717\r
Boulan Jacques;718\r
Bouland Philippe;719\r
Boulard Sylvain;720\r
Boulin Pauline;721\r
Boulle Philippe;722\r
Boulze Emilie;723\r
Boumendjel Nadir;724\r
Bounaix Laura;725\r
Bouquillon Paul-Joseph;726\r
Bouras Kenza;727\r
Bourban-Jirounek Catherine;728\r
Bourezg Ali;729\r
Bourg Sylvain;730\r
Bourgeois Jean-Michel;731\r
Bourilhon  Nicolas;732\r
Bourin Ezekiel;733\r
Bourquin Vincent;734\r
Bourrasset Yoan;735\r
Bourrier Didier;736\r
Bourrit Blaise;737\r
Bours Boris;738\r
Boustany Raïf;739\r
Boutes Patrick;740\r
Boutherre Cyrille;741\r
Boutier Vincent;742\r
Boutly Rushdy;743\r
Bouton Christine;744\r
Boutrik Chaima;745\r
Bouvais Wilfried;746\r
Bouvet Eric;747\r
Bouvier Catherine;748\r
Bouvier Jean-Luc;749\r
Bouvier Lisa;750\r
Bouvier-Peyrou Monique;751\r
Bouvrais Matthieu;752\r
Bouyer Michael;753\r
Bouzelmat Faïrouz ;754\r
Bouziane Haïder;755\r
Bovay Grazyna;756\r
Bovet Jerome;757\r
Bovet Luc;758\r
Bovet-Boone Françoise;759\r
Bovier Patrick;760\r
Boydell Emma;761\r
Boyer Sandy;762\r
Boyom Jacques;763\r
Boyreau Matthieu;764\r
Boyreau Matthieu ( CMG );765\r
Brabec Céline;766\r
Brachet Laure;767\r
Braillard Olivia;768\r
Brakeni Djamal Eddine;769\r
Brallet Julien;770\r
Brami Philippe;771\r
Brand  Patrick;772\r
Brand Ulrich;773\r
Brander Patrick;774\r
Brandstätter Hilda;775\r
Brandt Aliénor;776\r
Brantus Pierre;777\r
Brard Romain;778\r
Bratanov Christo;779\r
Brault Elodie;780\r
Brawand Anne;781\r
Brazy Jacky JB Médical Services SARL;782\r
Brechbühl Karen;783\r
Breguet Romain;784\r
Brékine Dmitri ;785\r
Bressoud Raymond;786\r
Breuneval Thomas;787\r
Breuss Eric;788\r
Bria Alexandre;789\r
Briand Elena;790\r
Briand Jacques;791\r
Briand Pauline;792\r
Bridel  Claire;793\r
Briefer Jean-Pierre;794\r
Briffard-Rigaud Marie-Josephe;795\r
Brigatti Francesca;796\r
Brighi Perret Loredana;797\r
Brin  Nathalie;798\r
Briner Ralph;799\r
Brinon-Lanz Christelle;800\r
Brito Campos Luis;801\r
Brito Rita;802\r
Brocco Sabrina;803\r
Brodard Jeremy;804\r
Brodard Jérémy;805\r
Brohart Justine;806\r
Bron Blaise Alain;807\r
Bron Daniel;808\r
Bron Johan Philippe;809\r
Bron Luc;810\r
Bron Philippe Johan;811\r
Bron Schwartz Guillaume;812\r
Brönnimann Enrico;813\r
Brönnimann Peter;814\r
Broquet Céline;815\r
Broquet Georges;816\r
Brosio Ester;817\r
Brosse Frédéric;818\r
Brouillard Sophie;819\r
Brousse Hugues;820\r
Brouze-Guilbert Sylvie;821\r
Bruchez Frédéric;822\r
Bruggeman-Gain  Nathalie;823\r
Bruggimann Jean Paul;824\r
Bruhier Natacha;825\r
Bruley Marie;826\r
Brun Charlotte;827\r
Brun Grégoire;828\r
Brun Jean-André;829\r
Brun Nathalie;830\r
Bruneel Millon Justine;831\r
Brunelli Roche Anne-Patricia;832\r
Bruschweiler Stern Nadia;833\r
Brustlein Nicolas;834\r
Bruyère André;835\r
Brys Véronique;836\r
Bu  Nicolas;837\r
Buccafusca Giancarlo;838\r
Bucher Pascal;839\r
Bucher-Praz Caroline ;840\r
Buchholzer Samantha;841\r
Buchs Bertrand;842\r
Buchs Jean-Bernard;843\r
Buchs Nicolas;844\r
Buchser Eric;845\r
Buck Gabriela;846\r
Buclin Emilie;847\r
Buclin Thiebaud Séverine;848\r
Bueno Requena Levy Camila;849\r
Buerge Edwards Anne;850\r
Buffat Juliette;851\r
Buffaz-Sutra Anne;852\r
Bugmann Philippe;853\r
Bugnon Anne-Valerie;854\r
Bugnon Olivier;855\r
Bugnon Pierre;856\r
Buhaj Stéphane;857\r
Bühler  Leo;858\r
Buia Geoffrey;859\r
Bulic Olivier;860\r
Bumbacher Moïra;861\r
Bunel Elise;862\r
Bungener Werhli Mireille;863\r
Bünzli Dominique Alain;864\r
Buono Pablo;865\r
Burel Benoît;866\r
Burgan Colberg Caroline;867\r
Burgan Saed;868\r
Burgener Dominique;869\r
Burger Albert;870\r
Burger Natalie;871\r
Burger Nathalie;872\r
Burkhard Michael ;873\r
Burkhardt Claudia;874\r
Burki Albert;875\r
Burki Caroline;876\r
Burki Vincent ;877\r
Burnand Jérôme;878\r
Burnet Florent;879\r
Burnier Eric;880\r
Burnier MIchel;881\r
Burret Pascal;882\r
Burri Haran;883\r
Burri Sascha;884\r
Bustos Diana;885\r
Buswell Lorenz;886\r
Butavand Alexis;887\r
Büttner  Bernd ;888\r
Büttner Olaf;889\r
Butty Anne-Virginie;890\r
Butz Irina;891\r
Buvry Cécile;892\r
Buxtorf-Friedli Konstantine;893\r
Buzduga Mihaela;894\r
Buzzi Marta;895\r
Cabaud  Lucie;896\r
Caberet Maud;897\r
Cabinet Dermatologie;898\r
Cacciti Sarah;899\r
Cachemaille Matthieu;900\r
Cahannes Anne-Marie;901\r
Cai Fang;902\r
Caillaut Hélène;903\r
Cailler Lionel;904\r
Cailleteau  Benoît;905\r
Caire Nail Laura;906\r
Calame Nathalie;907\r
Calderari Fabien;908\r
Calero Irene;909\r
Callejon Muriel;910\r
Callet-Delacampagne Clarence;911\r
Calmes Jean-Marie;912\r
Calmy Alexandra;913\r
Caloz-Rossier Christine;914\r
Calza Anne-Marie;915\r
Camby Anémone;916\r
Camenzind Isabelle;917\r
Camenzind Michel;918\r
Campagne Jean-Pierre;919\r
Campanelli Alexandre;920\r
Campanini Claude;921\r
Campanini Pierrick;922\r
Campiglia Cédric;923\r
Campione Laurent;924\r
Campos José-Angel;925\r
Campos Maria del Pilar;926\r
Canabady Marie-Florence;927\r
Canavese Jean-Claude;928\r
Cancelli Emmanuelle;929\r
Candelier Philippe;930\r
Candolfi Muriel;931\r
Cani Naim;932\r
Cannelle Alexandre;933\r
Canova Gérard;934\r
Canova-Aviolat Laurence;935\r
Cantero  Pablo;936\r
Canto Cristina;937\r
Cao-Thian Song-Ki;938\r
Capanna Federica;939\r
Caparrotti Francesca;940\r
Cappucci Aurore;941\r
Carbonnel Guillaume;942\r
Carcaterra Andrea;943\r
CardioTour - Drs Fournet & Zaza;944\r
CardioTour - Drs Fournet & Zaza T;945\r
Cardis Jeanne;946\r
Carecchio Anne;947\r
Carera Sager Caroline;948\r
Carillon Alain;949\r
Carità Nadia;950\r
Carlino Stefano;951\r
Carlucci Enzo;952\r
Carme Julie;953\r
Carmona Gorki;954\r
Caro Jean-Yves;955\r
Carota Antonio;956\r
Carrasco Luna Marta;957\r
Carrelet de Loisy Marie-Alineor;958\r
Carrier Jean-François;959\r
Carrier Marianne;960\r
Carron Jean-Paul;961\r
Carroz Anne;962\r
Carruzzo Pierre-Alain;963\r
Casella-Guido Giuseppina;964\r
Casimiri Marie-Line;965\r
Casolini De Stéfano Cinzia;966\r
Casorella Giovanni;967\r
Cassan Sébastien;968\r
Castanier Michèle;969\r
Castelain Jean;970\r
Castelan Camargo Hartus;971\r
Casthelaz Marc;972\r
Castilla Luis;973\r
Castillo Jorge Nestor;974\r
Castori-Manns Fabienne;975\r
Castro Jimenez Mayte;976\r
Castro Patricia;977\r
Castro Soares Paulo;978\r
Casutt Maurus;979\r
Catillaz Françoise;980\r
Catimel Gilles;981\r
Cattin Yves;982\r
Catzeflis Chantal;983\r
Cauchy François;984\r
Cauden Franck;985\r
Caulfield Aileen;986\r
Caussanel François;987\r
Cavé Geoffroy;988\r
Caviezel Alessandro;989\r
Cayette Sylvia;990\r
Ceaux Elodie;991\r
Cech Peter;992\r
Celhaiguibel Matthieu ;993\r
Celi Julien;994\r
Celi Letizia;995\r
Celik Hakan;996\r
Cellich Maurice;997\r
Centeno Wolf Noemi;998\r
Centre de médecine générale .;999\r
Centre Hospitalier  Universitaire Vaudois / CHUV;1000\r
Centre La Tour des pathologies digestives;1001\r
Centre médical de Lancy .;1002\r
Centre Médical de Magellan ;1003\r
Centre médical de St-Cergue ;1004\r
Centre médical de Vernier ;1005\r
Centre médical des Acacias .;1006\r
Centre Suisse de Médecine Préventive (CSMP);1007\r
Cerceau Marianne;1008\r
Ceresara Gaia;1009\r
Ceria Charles;1010\r
Ceroni Dimitri;1011\r
Cerri David;1012\r
Cerruti François;1013\r
Cervini Eric;1014\r
Cevey Philippe;1015\r
Chacowry Pala Komal;1016\r
Chaintron Lucie;1017\r
Chalard Pascal;1018\r
Chalier Michel;1019\r
Chamaa Tawfik;1020\r
Chamay Weber Catherine;1021\r
Chambre Anne-Laure;1022\r
Chamot Anne-Marie;1023\r
Chamot Patrick;1024\r
Chamot Virginie;1025\r
Champiat Lucie;1026\r
Champion Ambroise;1027\r
Chandelier Pierre;1028\r
Chanson Céline;1029\r
Chanson Jean-François;1030\r
Chantre Daniel;1031\r
Chantreuil Quentin;1032\r
Chanut-Beck Bénédicte;1033\r
Chanvillard Thomas;1034\r
Chaon Pierre;1035\r
Chapel Didier;1036\r
Chapiron-Michel Delphine;1037\r
Chappaz Christophe;1038\r
Chappuis Danièle;1039\r
Chappuis François;1040\r
Chappuis Julien;1041\r
Chappuis-Gisin Emilie;1042\r
Chapuis Pierre-Yves;1043\r
Chapuis-Taillard Caroline;1044\r
Charavy Sophie;1045\r
Charbonnet Pierre;1046\r
Charbonnier Florian;1047\r
Charbonnier Gilbert;1048\r
Chardon Christophe;1049\r
Chardonnens Didier;1050\r
Chardonnens Eric;1051\r
Charlet Will Isabelle;1052\r
Charvieux Baptiste ;1053\r
Chassot Gilles;1054\r
Chassot Mathieu;1055\r
Chassot Olivier;1056\r
Chastenet De Castaing  Maryvonne;1057\r
Chastenet Maryvonne;1058\r
Chatelain Didier;1059\r
Chatelain Fontanella Vanessa;1060\r
Chatelain Pascal;1061\r
Chatelain Quentin;1062\r
Chatelain Quentin ;1063\r
Chatelain-Pauls Claudia;1064\r
Chatelanat  Karine;1065\r
Chatelanat Pierre;1066\r
Châtenay Pascal;1067\r
Chatillon Fabienne;1068\r
Chatton Chambaz  Isabelle ;1069\r
Chatziioannidou Kyriaki;1070\r
Chaumeil Franck;1071\r
Chauvenet Claude;1072\r
Chauvet Sylvie;1073\r
Chavaz Adrien;1074\r
Chaves-Vischer Virginie;1075\r
Chayestemehr Sacha;1076\r
Chazot Julie;1077\r
Chedeau Guy;1078\r
Chef de Clinique/Alves .;1079\r
Cheffe de Clinique Pneumologie .;1080\r
Cheffe de Clinique/Billières  ;1081\r
Chemla Patrick;1082\r
Chen Haw-Tzer ;1083\r
Chenet Pierre;1084\r
Cheretakis Alexandre;1085\r
Cherif Mona;1086\r
Cherix Stéphane;1087\r
Cherpillod Anne;1088\r
Cherrier Justine;1089\r
Cheseaux Nicole;1090\r
Chevalier Julia;1091\r
Chevalier Kévin;1092\r
Chevallay Mickael;1093\r
Chevalley Denis;1094\r
Chevalley Jean-Pierre;1095\r
Chevallier Isabelle;1096\r
Chevallier Mathieu;1097\r
Chevallier-Lugon Chloé;1098\r
Chevallier-Ruggeri Paola;1099\r
Chevey Jean-Michel;1100\r
Chevrier Florian;1101\r
Chevrier Raphaël;1102\r
Chevrot Claude;1103\r
Chiari Mike;1104\r
Chiari Mike (Nyon);1105\r
Chiarini  Bastien;1106\r
Chick Grégoire ;1107\r
Chiesa Sarah;1108\r
Chiffi-De Los Rios Tamara;1109\r
Chipier Alain;1110\r
Chipier-Hochstrasser Lucile;1111\r
Chirent Fabrice;1112\r
Chirurgie viscérale/générale ;1113\r
Chiticariu-Durr Elena;1114\r
Chmelik Patricia;1115\r
Chmouliovsky Leila ;1116\r
Choffat-Duss Caroline;1117\r
Choffel Alexy;1118\r
Choi-Toche Luis David;1119\r
Chok Ziad;1120\r
Chollet Vincent;1121\r
Chollet Yvan;1122\r
Chollet Yves;1123\r
Chollet-Janin Amélie;1124\r
Chomel-Guillaume Sophie;1125\r
Choudja Ouabo Cécile;1126\r
Chouf  Amandine;1127\r
Chougrani Nicolas;1128\r
Chouteau Julien;1129\r
Christen Boris;1130\r
Christen Thierry;1131\r
Christensen Pierre;1132\r
Christin Laurent;1133\r
Christofilopoulos Panayiotis;1134\r
Christophe-Richtmann Liliane;1135\r
Chrysafi Maria;1136\r
Chu Chen Kuang;1137\r
CHU Montpellier Hopital Arnaud de Villeneuve;1138\r
Chuat Vuissoz Françoise;1139\r
Chucla Fernando;1140\r
Chucri Salim;1141\r
Chuey Cesar Amilcar;1142\r
Chuey-Cesar Amilcar;1143\r
Chung Christopher;1144\r
Ciaroni Stefano;1145\r
Ciaroni-Rappaz Odile;1146\r
Ciavatta Ettore;1147\r
Cibotto Delphine;1148\r
Cibrario Arnaud ;1149\r
Cikes Alex;1150\r
Cikirikcioglu  Mustafa;1151\r
Cimasoni Laurent;1152\r
Cintas Ringenbach Alexandra ;1153\r
Ciortea Lucia;1154\r
Cirafici Paul;1155\r
Cisier Déborah;1156\r
Cissé Amadou;1157\r
Cisse Boubacar;1158\r
Cissé-Gerelle Gabrielle;1159\r
Cité générations  Maison de santé;1160\r
Citraro-Meyer Melina;1161\r
Ciubotariu Ioan;1162\r
Ciubotariu Nicolae Grigore;1163\r
Ciucchi Laurent;1164\r
Ciuffreda Buehler Donatella;1165\r
Civalleri Marylène;1166\r
Clark Megan;1167\r
Clark Tom;1168\r
Claude Florian;1169\r
Claude Sophie;1170\r
Claveri Philippe;1171\r
Clayton Helena;1172\r
Clément François;1173\r
Clement Jean-Pierre;1174\r
Clément Michel;1175\r
Clément Serge;1176\r
Clemente Marc;1177\r
Clénin German;1178\r
Clerc Bernard;1179\r
Clerc Christelle;1180\r
Clinique Bois-Bougy ;1181\r
Clinique de Carouge .;1182\r
Clinique de Genolier .;1183\r
Clinique de Maisonneuve .;1184\r
Clinique des Grangettes Genève .;1185\r
Cloesen Jean-Philippe;1186\r
Cloppet Olivier;1187\r
Clot Julie;1188\r
Clottes Arnaud;1189\r
Coattrenec Yann;1190\r
Coattrenec Yvan;1191\r
Cochard Blaise;1192\r
Cochard Nicollier Sylvie;1193\r
Cochaud Daniel;1194\r
Cocor Cristina;1195\r
Codeluppi Gianmarco;1196\r
Coeytaux Jackson Alessandra;1197\r
Coeytaux Sandrine;1198\r
Cohen Corinne ;1199\r
Coin Isabelle;1200\r
Cois  Michela;1201\r
Coissard Anne-Nadine;1202\r
Colarusso Gina;1203\r
Colin Victor;1204\r
Collao Lamb Claudia;1205\r
Collaud Sybile;1206\r
Collet Philippe;1207\r
Collet Tinh-Hai;1208\r
Collipal von Wyl Tatiana;1209\r
Colomb Céline;1210\r
Colombé Jessica;1211\r
Colosimo Daniele;1212\r
Coltamai Lionel;1213\r
Colutta Emiliana;1214\r
Comandone-Calleja Dominique;1215\r
Combaud Etienne;1216\r
Combe Didier;1217\r
Cometto Hugo;1218\r
Compagnon  Philippe;1219\r
Compere Jacques;1220\r
Comte Alain;1221\r
Comte Isabelle;1222\r
Comte Pierre;1223\r
Comtesse Mireille;1224\r
Comtesse Yannis;1225\r
Conconi Julie;1226\r
Condevaux Marie-Jeanne;1227\r
Condrea Devillaz Maria;1228\r
Confessore Ciro;1229\r
Connebert Nicolas;1230\r
Conquet Nicolas;1231\r
Constans Sophie;1232\r
Constanthin Paul;1233\r
Constantinidis Dino;1234\r
Conti Francesco;1235\r
Conti Gaëtan;1236\r
Conti Letizia;1237\r
Conus Aliénor;1238\r
Convert Eléonore;1239\r
Coordination Service Patient HDLT;1240\r
Coppens Elia;1241\r
Coppi Stéphane;1242\r
Copponnex Christelle;1243\r
Copt Christophe;1244\r
Coquoz Christian ;1245\r
Corajod Jean-Yves;1246\r
Corcelle Aline;1247\r
Cordier Jean-Luc;1248\r
Cordier Maria;1249\r
Cording Susanne;1250\r
Cordonnier Airy;1251\r
Cormack Catherine;1252\r
Corne Jean-Claude;1253\r
Cornella Fedra;1254\r
Corniola Marco;1255\r
Cornu  Anne-Sophie;1256\r
Cornut Joëlle;1257\r
Cornut Josy-Philippe;1258\r
Corolleur Sébastien;1259\r
Coronado Liz;1260\r
Corre-Ghose Christine;1261\r
Correia Jorge;1262\r
Corsat Jean-Philippe;1263\r
Cortes Flavio;1264\r
Corthay Paul;1265\r
Corthesy Marc-Etienne;1266\r
Corvaglia Roberto;1267\r
Cosandier-Auberson Lucille;1268\r
Cosentino Yves;1269\r
Cosinschi Adrien;1270\r
Costagliola Arielle;1271\r
Coste Peggy;1272\r
Costea Florin;1273\r
Cotarcea Gabriela;1274\r
Cotofana Gabriela;1275\r
Cottet Simon;1276\r
Cottier  Yves-Cédric;1277\r
Cottier Yves-Cedric ;1278\r
Cotton Tania;1279\r
Couchouron Arnaud;1280\r
Cougn Laurent;1281\r
Coulin Benoît;1282\r
Coullet Claude;1283\r
Coulon Ludivine;1284\r
Courbe Virginie;1285\r
Court Stéphane;1286\r
Courtheheuse Christiane;1287\r
Courtois Marie;1288\r
Courvoisier François;1289\r
Courvoisier Pierre-Alain;1290\r
Cousin Antoine;1291\r
Cousina  Charles;1292\r
Coustet Baptiste;1293\r
Couto Malta Rita;1294\r
Couto-Popovic Branka;1295\r
Couturier  Maxence;1296\r
Couturier Dominique;1297\r
CPAM Haute-Savoie ;1298\r
Cramer Berenice;1299\r
Creanga Catalina Mihaela;1300\r
Crédeville Mathilde;1301\r
Credoz Anne-Laure;1302\r
Cressens Anne-Marie;1303\r
Cretallaz Jean-Pierre;1304\r
Crettenand-Sager Nicole;1305\r
Crettol Daniel;1306\r
Crevel Ewelina;1307\r
Cribier Charles;1308\r
Crisan Honorata;1309\r
Croci Jean-Pascal;1310\r
Croze Philippe;1311\r
Cruzado Donia;1312\r
Cuadras Patrick;1313\r
Cuenat-Godinat Candice;1314\r
Cuendet Raymond;1315\r
Cuenod Philippe;1316\r
Cuffel Cyril;1317\r
Cugerone Arnaud;1318\r
Culebras Xavier;1319\r
Cunningham Elsbeth;1320\r
Cunningham Gregory James;1321\r
Cunningham Michael;1322\r
Cunningham Sophie;1323\r
Cunningham Timothy-John;1324\r
Cupelin Pauline;1325\r
Cupiti Jean;1326\r
Curelariu Viorica-Marinel;1327\r
Cusato Francesco;1328\r
Cutelle Grégoire;1329\r
Cvetkovska Anastasija;1330\r
Da Broi Michele;1331\r
Da Costa Alexandre;1332\r
Da Costa Branco Soraia;1333\r
Da Costa César;1334\r
Da Costa Marina;1335\r
Da Rocha Francisco;1336\r
Da Silva Godinho Eduardo ;1337\r
Dabadie Benoît;1338\r
Dabboubi Najia;1339\r
Dabiri Jonathan;1340\r
Dacier-Conti Nathalie;1341\r
Daeniker Isabelle;1342\r
Daeniker Laurent;1343\r
Dafflon Michel;1344\r
D'Agostino Valerie;1345\r
Dahl Farhoumad Agnès;1346\r
Dähler Coline;1347\r
Dahmani Zakaria ;1348\r
Daillet Alain;1349\r
Dal Gobbo Bruno;1350\r
Dalateh Gomez Laura;1351\r
Dalkou Sofia;1352\r
Dallan Cecilia;1353\r
Dalliere Ghislain-Nicolas;1354\r
Dallon Giraud Emmanuelle;1355\r
Dami Roland;1356\r
Damsa Cristian;1357\r
D'Andiran  Gérald;1358\r
Daneva Treand Tatiana;1359\r
Dang Huu Hieu;1360\r
Dang Thanh;1361\r
D'Angelo Fabrizia;1362\r
Dang-Rossi Mai;1363\r
Daniluk Anna;1364\r
Danzer Daniel;1365\r
Däppen Siebert Fabienne;1366\r
Darbre Abdelrahman Stéphanie;1367\r
Dardel Raymond;1368\r
Darioly-Bornet Stéphanie;1369\r
Darmal Adam;1370\r
Darmal-Zaki Rohina;1371\r
Darouichi M'hamed;1372\r
D'arrigo Elisa;1373\r
Darsouni Melouka;1374\r
Darwiche Rola;1375\r
Daskalou Dimitrios;1376\r
Daucourt Camille-Laure;1377\r
Dauré Muriel;1378\r
Dautel Marion;1379\r
Dauvillaire  Thierry;1380\r
Daux Aurélien;1381\r
Davet Alain;1382\r
David Anthony;1383\r
David Laurence;1384\r
David Stéphane;1385\r
David Yoann;1386\r
David-Montefiore Emmanuel;1387\r
Davoine Elise;1388\r
Davroux Youri;1389\r
Dayal Nicolas;1390\r
Dayer Anastasia;1391\r
Dayer Jean-Michel;1392\r
Dayer Romain;1393\r
Dayer Zamora Veronique;1394\r
Dbeissi Samir;1395\r
De Almeida Cachola Ana;1396\r
De Almeida Sofia;1397\r
De Benedetti Edoardo;1398\r
De Blasi Graziella;1399\r
De Blonay Jean;1400\r
De Boccard Georges;1401\r
De Bros Laurence;1402\r
De Buren Gérard;1403\r
De Camaret Crettaz Caroline;1404\r
De Candolle Gabriel;1405\r
De Cataldo  Silvia;1406\r
De Coulon Géraldo;1407\r
De Dycker Yannick;1408\r
De Francesco Tommaso;1409\r
De Gorski Arachk;1410\r
De Groote Jack;1411\r
De Haller Raoul;1412\r
De Heller Henri-Kim;1413\r
De Iaco-Praz Anne-Catherine;1414\r
De Kalbermatten Bénédicte;1415\r
De La Rue Du Can Arthur;1416\r
De La Serna Camille;1417\r
De Labouchere Colombe;1418\r
de Lambilly Nathalie;1419\r
De Lassus-Bristow Ariane;1420\r
De Laveaucoupet Eric;1421\r
De Leuze Emmanuel;1422\r
De Lorenzi Caroline;1423\r
De Luca Pier Paolo;1424\r
De Luca Roberta;1425\r
De Luca Roberta - cabinet;1426\r
De Luca Roberta_hon. privés p/Gardes;1427\r
De Lucia Amalia;1428\r
De Lucia Anna Maria;1429\r
De Lucia Sylvain;1430\r
De Maesschalck Thibault;1431\r
De Marco Giacomo;1432\r
De Massougnes  Sophie;1433\r
De Montmollin Jeanne;1434\r
De Muralt Mégevand  Muriel;1435\r
De Pablos Florine;1436\r
De Pauw Laurie-Anne;1437\r
De Peyer Eliane;1438\r
De Pieri Marco;1439\r
De Pierre Philippe;1440\r
De Pinho Barros Ana;1441\r
De Pinho Barros Ana Margarida;1442\r
De Pree Christian;1443\r
De Preux Elisabeth;1444\r
De Quatrebarbes Julie;1445\r
De Quay Nicolas;1446\r
De Sans Laura ;1447\r
De Saussure Philippe;1448\r
De Seigneux Sophie;1449\r
De Senarclens Olivier;1450\r
De Siebenthal Gabriella;1451\r
De Smet Alexander;1452\r
De Sousa Anthony;1453\r
De Sousa Paulo;1454\r
De Sousa Rodrigo;1455\r
De Sousa Sandra;1456\r
De Tonnac de Villeneuve Aliénor;1457\r
De Torrenté de la Jara Gabrielle;1458\r
De Vallière Serge;1459\r
De Vries de Heckelingen Lambert;1460\r
De Waart Sacha;1461\r
Debabeche Adnane;1462\r
Debétaz  Maria;1463\r
Debetaz Maria;1464\r
Debrach Anne-Cécile;1465\r
Decaro Van Houten Dorine;1466\r
Dechamboux Pierre;1467\r
Dechegne Diana;1468\r
Dechevrens Olivier;1469\r
Decorde Myriam;1470\r
Decroux Pascale;1471\r
Dederding Jean-Pierre;1472\r
Defacqz Anne;1473\r
Déforel Yannick;1474\r
Defraine Joachim ;1475\r
Defrance Jean-Pierre ;1476\r
Degeorges Fabien;1477\r
Deglon Viviane;1478\r
Degoumois-Smith Catherine;1479\r
Degroote Jonathan;1480\r
Deguines Yann;1481\r
Dehavay Céline;1482\r
Dehiba Zoheir;1483\r
Dehlavi Ali;1484\r
Dehmani Sirine;1485\r
Dejaune Pascaline;1486\r
Dejeu Eric;1487\r
Del Vento  Federico;1488\r
Delacrétaz Fanny;1489\r
Delacroix-Tarenne Aurélie;1490\r
Deladoey Johnny;1491\r
Delahoche Quentin;1492\r
Delain Jean Paul;1493\r
Delaite Jean-Yves;1494\r
Delaloye Robert;1495\r
Delaune Vaihere;1496\r
Delaval Dominique;1497\r
Delavennat Laurence;1498\r
Delay Jean Baptiste;1499\r
Delcroix Amaury;1500\r
Deleamont Philippe-Alain;1501\r
Déléaval Marion;1502\r
Deleaval Patrick-Jeff;1503\r
Deléglise Célie;1504\r
Delessert Alexandre;1505\r
Delessert-Bekesi Katalin;1506\r
Deletang Bérénice;1507\r
Delétra Yves;1508\r
Della Ricca Nicolas;1509\r
Della Santa Pascale;1510\r
Della Torre Rocco;1511\r
Dello Buono Davide;1512\r
Delmas Léa;1513\r
Delmi Marco;1514\r
Deloffre Emilie;1515\r
Delorme Philippe;1516\r
Delouane Mohamed - Mounsef;1517\r
Delsert Hugo;1518\r
Deluermoz Christine ;1519\r
Deluze Christophe;1520\r
Delvoie Amandine;1521\r
Demarchi Marco Stefano;1522\r
Démaret Marc-Antoine;1523\r
Demartines Nicolas;1524\r
Dementhon Christine;1525\r
Demeyere Brice;1526\r
Demicheli Rita;1527\r
Demierre Bertrand;1528\r
D'Emma Costantino;1529\r
Dénéréaz Daisy;1530\r
Denion Philippe;1531\r
Denizot Benoit;1532\r
Department of Health Abu Dhabi - Head Office;1533\r
Deplanque Gaël;1534\r
Déprés Camille;1535\r
Deriaz Nicolas;1536\r
Deric Serge;1537\r
Derigon Constance;1538\r
Derivaz Mastrogiacomo Sophie;1539\r
Dermigny Antoine;1540\r
Deroche François;1541\r
Derone Julie ;1542\r
D'Errico Amalia;1543\r
D'Ersu Eleanor;1544\r
Des Courtis Antoine;1545\r
Desbaillets Nicolas;1546\r
Desbeaumes Jean-Marc;1547\r
Descartes René;1548\r
Deschanel Denise;1549\r
Descombes Claudia;1550\r
Descombes Pierre;1551\r
Desgrand Pierre;1552\r
Desgrez Virginie;1553\r
Desjacques Paul;1554\r
Desjacques Yves;1555\r
Deslarzes Tristan;1556\r
Desmangles Philippe;1557\r
Desmangles Virginie;1558\r
Desmarchelier Romain;1559\r
Desmarchelier Thomas;1560\r
Desmeules Jules;1561\r
D'Espine Marc;1562\r
Desponds Hauswirth Laure;1563\r
Desroche Philippe;1564\r
Desthieux Gloria;1565\r
Detroux  Valentine;1566\r
Deudon Benjamin;1567\r
Devin Alexandre;1568\r
Dewaele Thierry;1569\r
Dezissert Linda;1570\r
Di Benedetto Franco;1571\r
Di Carlo Giampaolo;1572\r
Di Dio Filippo;1573\r
Di Dio Natalie;1574\r
Di Giuseppe Alexandre;1575\r
Di Laura Frattura Giorgio;1576\r
Di Liberto Giovanni;1577\r
Di Pollina Laura;1578\r
Di Summa Pietro;1579\r
Diaine  Annabelle;1580\r
Diamand Sophie;1581\r
Diana Alessandro;1582\r
Dias Da Silva Pessoa De Amorim Joana;1583\r
Diaz Badial Pablo;1584\r
Diaz Bria Marina;1585\r
Diaz Simon;1586\r
Didisheim Clémence;1587\r
Didy Elisabeth;1588\r
Diederichs Alexander;1589\r
Dietrich Pierre-Yves;1590\r
Dieudonné Hélène;1591\r
Diez Sébastien;1592\r
Diez-Blanco Carlos;1593\r
Dijkstra Jan Auke;1594\r
Dimitriou Julien;1595\r
Dimitriou Laure;1596\r
Dinichert Antoine;1597\r
Dinichert Dominique;1598\r
Dinu Isabella;1599\r
Dinu Steluta Oana;1600\r
Diomande Frédéric;1601\r
Direction Générale HDLT ;1602\r
Dirlewanger Mirjam;1603\r
Dirren Elisabeth;1604\r
Disabato Mara;1605\r
Dischl  Benoît;1606\r
Diserens Marc;1607\r
Ditisheim Agnès;1608\r
Ditisheim Saskia;1609\r
Dizdari Ernal;1610\r
Dizerens Pierre;1611\r
Djaafar Souad;1612\r
Djakovic Tanja;1613\r
Djamen Antoinette;1614\r
Djennane Samir;1615\r
Djilloul  Hamida;1616\r
Djitik Sylvio Emile;1617\r
Dobre Gratiela;1618\r
Dobrescu Ionut;1619\r
Dobrinov Alexandre;1620\r
Dobrynski Nicolas;1621\r
Doche Eric;1622\r
Dodu Malina-Gabriela;1623\r
Doell Stefan;1624\r
Dolea Carmen;1625\r
Dombre Vincent;1626\r
Dombrowski Caroline;1627\r
Domenjoz Iris;1628\r
Dominati Arnaud;1629\r
Dominguez Dennis;1630\r
Dominguez Michel;1631\r
Dominicé Dao Melissa;1632\r
Dominik Jean-Michel;1633\r
Donalisio Massimo;1634\r
Donath Razvan;1635\r
Donato Grazia;1636\r
Donayre Dylan;1637\r
Doneux Anne;1638\r
Dong Hongguang;1639\r
Donkor Evelyne;1640\r
Donot Isabelle;1641\r
Donzé Yann;1642\r
D'Oro Antonello;1643\r
Dorribo Victor;1644\r
Dorsaz Stéphanie ;1645\r
Dorst Jacques;1646\r
Dos Santos  Stéphanie;1647\r
Dos Santos Bragança Angel;1648\r
Do-Thi  Phuong-Huyen;1649\r
Dott Philippe;1650\r
Dottrens Nathalie;1651\r
Douchet Nelson;1652\r
Douchet Philippe;1653\r
Doulcet Philippe;1654\r
Douma Dominique;1655\r
Douspis Stéphane;1656\r
Dozier Catherine;1657\r
Draghiciu Crina;1658\r
Dragomir Johann;1659\r
Dreher Fabien;1660\r
Drepper Michael David;1661\r
Drifte Roduit Geneviève;1662\r
Drittenbass Lisca;1663\r
Drivet Florian;1664\r
Dromard Majchrzak Karine;1665\r
Dromzée Eric ;1666\r
Drouet Adrien;1667\r
Drouot Marjorie;1668\r
Droz-Breguet Dominique ;1669\r
Droz-Dit-Busset Muriel;1670\r
Droz-Riedo Laure;1671\r
Druel Thierry;1672\r
Druga Aneta;1673\r
Drweski Pierre;1674\r
Du Mesnil Du Buisson Tristan;1675\r
Du Pasquier Daphné;1676\r
Duarte Moreira Daniela;1677\r
Duarte-Tusgul Selin;1678\r
Dubas Céline;1679\r
Dubas Jacques;1680\r
Dubas Jean-Marie;1681\r
Duboc Jean Pierre;1682\r
Dubois Aurélien;1683\r
Dubois Denis;1684\r
Dubois Stéphanie;1685\r
Dubois Thierry;1686\r
Dubois-Ferrière Victor ;1687\r
Dubois-Schicker Mireille (10479);1688\r
Dubouloz Prosper;1689\r
Dubra Alexandre;1690\r
Dubra Daiana;1691\r
Dubray Stephanie;1692\r
Dubrulle Stéphane;1693\r
Dubuis Jean-Michel;1694\r
Dubuis Nicolas;1695\r
Dubuis Vesselin;1696\r
Dubuisson Jean;1697\r
Dubuisson Jean-Bernard;1698\r
Duc Myriam;1699\r
Ducali Lotfi;1700\r
Duchesne Nadine;1701\r
Duchosal Catherine;1702\r
Duchosal Christophe;1703\r
Duchoud Lorry;1704\r
Ducommun Valérie;1705\r
Ducommun Yoan;1706\r
Ducrest Philippe;1707\r
Ducret Claire;1708\r
Duda Cristobal;1709\r
Duda Francisco;1710\r
Dudler Jean;1711\r
Dufay-Najid Myriam;1712\r
Dufey Jean;1713\r
Duff John;1714\r
Dufour Jean-François;1715\r
Dugravot Aurelie;1716\r
Dulguerov Nicolas;1717\r
Dulguerov Pavel;1718\r
Duliege Maxime;1719\r
Dumas Aurélie;1720\r
Dumas Clémence;1721\r
Dumitrascu Andra;1722\r
Dumont Floriane;1723\r
Dumont-Girard Fanny;1724\r
Dumoulin Bertrand;1725\r
Dumoulin Yann;1726\r
Dumps Patrick;1727\r
Dunand Adeline;1728\r
Dunand Géraldine;1729\r
Dunand Nicolas;1730\r
Dunand-Ditisheim Murielle;1731\r
Duong Phuc-Hung;1732\r
Duparc Hugo;1733\r
Dupont  Denis;1734\r
Dupont Patrick;1735\r
Dupont Suzy;1736\r
Dupraz Eléonore;1737\r
Dupraz Jean;1738\r
Dupuis  Laurent;1739\r
Dupuis Arnaud;1740\r
Duraffourg Anne;1741\r
Duraffourg Anne (Nyon) ;1742\r
Duran Livia-Maria;1743\r
Duran Maria Montserrat;1744\r
Durand Emilie;1745\r
Durand Jean-Paul;1746\r
Durand Lydie;1747\r
Durand Richard;1748\r
Durand Sylvie;1749\r
Durrer-Blaetter Dominique;1750\r
Dussauge Isabelle;1751\r
Dussoix Philippe;1752\r
Dussoix Philippe ;1753\r
Dutheil Amélie;1754\r
Duthon Victoria;1755\r
Dutriaux Clémentine;1756\r
Duval Claire;1757\r
Duxbury Béatrice;1758\r
Dyroff Christian Michael;1759\r
Ebengo Emmanuel;1760\r
Ebiner Jérôme;1761\r
Ebstein Déborah;1762\r
Ecker Timo Michael;1763\r
Eckers Franziska;1764\r
Ecklin Jean-Paul;1765\r
Eddé Michel;1766\r
Edgar-Zangger Evelyne;1767\r
Edney Timothy;1768\r
Egal Asha;1769\r
Eger Grosjean Antoine;1770\r
Egervarine Radvanyi Monika ;1771\r
Eggel Yan;1772\r
Egger Bernard;1773\r
Egger Jean-François;1774\r
Egger Marc;1775\r
Egger Pierre;1776\r
Egloff Peter;1777\r
Ehle Roussy Anne;1778\r
Ehlenberger Tom;1779\r
Ehrensperger Christian;1780\r
Eichenberger Carine;1781\r
Eicher Goldschmidt Natania;1782\r
Eid Toufic;1783\r
Eisenbrand Anne;1784\r
Eisner Harold;1785\r
Ejnes Laurent;1786\r
El Badaoui Soumaya;1787\r
El Bentiri Hagar Anissa;1788\r
El Ghaoui Hicham;1789\r
El Haddad Ahmed;1790\r
El Hasnaoui Sofia;1791\r
El Maazi Sofia;1792\r
El Mestikawy Yousri;1793\r
El Nayef Fahed;1794\r
El Olmi Khaled;1795\r
El Rahal Dania;1796\r
El-Aji Mohamed;1797\r
Elamly Ahmed;1798\r
Eldner Thomas Klaus Korst;1799\r
El-Gowhari Gihane;1800\r
Elliott Jennifer;1801\r
Elmas-Lubino Evrim;1802\r
Elmiger Romain;1803\r
Emery Montant Florence;1804\r
Emond Héloïse;1805\r
Emonet Stephane;1806\r
EMS Nouveau Kermont ;1807\r
Enache Raluca Elena;1808\r
Engler Delphine;1809\r
Epiney Jacques;1810\r
Epiney Manuella;1811\r
Erbrich Anne-Catherine;1812\r
Ernandez Thomas;1813\r
Erni-Paumathiod Corinne;1814\r
Errouane Samir;1815\r
Escher Monica;1816\r
Eschmann  Andrea;1817\r
Eschmann Luc;1818\r
Escribano Paredes Jose Bernardo;1819\r
Escudero Lapuente Rocio;1820\r
Esculier Clarinde;1821\r
Espa Cervena Katerina;1822\r
Espinoza Daniel;1823\r
Estanove Jean-Grégoire;1824\r
Esteve Carlos;1825\r
Esteves Marie;1826\r
Esthéticienne ;1827\r
Estienne Laurence;1828\r
Estoppey Damaris;1829\r
Estoppey Olivier;1830\r
Estoppey-Pozzobon Damaris;1831\r
Etemadi Abdul Quddus;1832\r
Etemadi-Fassnacht Fanny;1833\r
Etienne Tom Jacques;1834\r
Etudiant Ecole Physiotherapie;1835\r
Eusebio Jorge;1836\r
Evard Sophie;1837\r
Evrard Emilien;1838\r
Exhenry Cristina;1839\r
Exner Shahnaz;1840\r
Expositio Gabarain Maddi;1841\r
Exquis Bernard;1842\r
Eynard Engel Carole;1843\r
Ezri Jessica;1844\r
Fabre Céline;1845\r
Fabreguet Isabelle;1846\r
Facchini Marco;1847\r
Fachinotti Pierluigi;1848\r
Faidutti Bernard;1849\r
Faigaux Roland;1850\r
Faineteau Ani;1851\r
Fairhurst Katherine;1852\r
Falamaki Katayoun;1853\r
Falbriard Alain;1854\r
Falchéri Jean-Philippe;1855\r
Falciola Jacques;1856\r
Falconnet Catherine;1857\r
Falesi Mattia;1858\r
Faller Nicolas;1859\r
Fallet-Juge Marion;1860\r
Falque Stéphanie;1861\r
Faltin Daniel;1862\r
Fan Chunli ;1863\r
Fan Stouffs Hairong;1864\r
Fankhauser Laurence;1865\r
Fankhauser Martine;1866\r
Farah Najeh;1867\r
Farah Nesrine;1868\r
Fararik Michael;1869\r
Fargeat Mathilde;1870\r
Fargier-Bochaton Odile;1871\r
Farinotti Paolo;1872\r
Farny Caroline;1873\r
Farpour Bijan;1874\r
Farpour-Lambert Nathalie;1875\r
Farquet Dunon Murielle;1876\r
Farquet Jean-Jerome;1877\r
Fasmeyer  Jérôme;1878\r
Fassa Amir Ali;1879\r
Fauchere-Berge Alix;1880\r
Faundez Antonio Arturo;1881\r
Fauquex-Bopp Tara;1882\r
Faure Marie-Annick;1883\r
Faure van Rossum Annabelle;1884\r
Faust Aurélia;1885\r
Favet-Vollenweider Laurence;1886\r
Favia Agostino;1887\r
Favre Benoit;1888\r
Favre Cécile;1889\r
Favre Guillaume;1890\r
Favre Izabela;1891\r
Favre Laurent;1892\r
Favre Olivier;1893\r
Favre Pascal;1894\r
Favre Sarah;1895\r
Favrod-Coune Thierry;1896\r
Fayez Akkawi Mohamed;1897\r
Fayolle Damien;1898\r
Fayolle Limongelli Marie-José;1899\r
Fazel Dehkordi Mohammad;1900\r
Federova Alina;1901\r
Fehlmann Christophe;1902\r
Feilchenfeldt Jonas;1903\r
Feillet Pauline;1904\r
Feka-Homsy Pranvera;1905\r
Felberbaum Isaline;1906\r
Feldman Manuel;1907\r
Félix Samira;1908\r
Fell Honoré;1909\r
Fellrath Frédéric;1910\r
Fellrath Jean-Marc;1911\r
Fencz Marcel;1912\r
Fenner Vanessa;1913\r
Ferchichi Amine;1914\r
Ferey Solène;1915\r
Fernandez Benjamin;1916\r
Fernandez Eugenio;1917\r
Fernandez Stéphanie;1918\r
Fernex Céline;1919\r
Fernex Lucie;1920\r
Ferney Adrien;1921\r
Feroiu Corneliu;1922\r
Ferrara Donato;1923\r
Ferrari Serge;1924\r
Ferrari-Alfons Claudio;1925\r
Ferrario Chiara;1926\r
Ferreira Gundar Mélissa;1927\r
Ferretti  Laura;1928\r
Ferretti Laura;1929\r
Ferrier Cecilia;1930\r
Ferrière Karin;1931\r
Ferro Luzzi Elena;1932\r
Ferry-Hmidouch Rachida;1933\r
Fertani Sara;1934\r
Fertani Sara_hon. pour gardes;1935\r
Fetter Penaud Catherine;1936\r
Feusi Ernst;1937\r
Feusier Michael;1938\r
Fexi Dimitra;1939\r
Fiechter Gwendoline ;1940\r
Fierz Yvonne;1941\r
Figard Thomas ;1942\r
Fikri Jalal;1943\r
Filliettaz Olivier;1944\r
Filliez Georges;1945\r
Filtri Lucia;1946\r
Finci David;1947\r
Finci Leo;1948\r
Finci Sabetaj;1949\r
Finckh Axel;1950\r
Fiorentini Sarah;1951\r
Fiorini Eros;1952\r
Fisch Loraine;1953\r
Fischberg Scheherazade;1954\r
Fischer Beat;1955\r
Fischer Marcel;1956\r
Fischer Neuhaus Anna-Barbara;1957\r
Fischer Stoca Alexandra;1958\r
Fishberg S.;1959\r
Fivel Ambroise;1960\r
Flahault Emmanuel;1961\r
Flahou Clément;1962\r
Flamion Kim;1963\r
Fletcher  Clarissa ;1964\r
Fleury Gregory;1965\r
Fleury Jean-Pierre;1966\r
Fleury Nicolas;1967\r
Fleury Valentin;1968\r
Fleury Vanessa;1969\r
Flisch Christian William;1970\r
Florea Ancuta;1971\r
Flores John;1972\r
Floris Evellyn;1973\r
Flory Nicolas;1974\r
Flury Tchernin Elodie;1975\r
Fodor Thomas;1976\r
Fol Stéphane;1977\r
Foletti Antonio;1978\r
Folle Roustan Laurence;1979\r
Fondation cancer du sein .;1980\r
Fondation pour la recherche en orthopédie;1981\r
Fonjallaz  Marie-Henriette;1982\r
Fonjallaz Sylviane;1983\r
Fontalbat-Boyé Françoise;1984\r
Fontanet Bruno;1985\r
Fontanille Bernard;1986\r
Forcada Marie-Therese;1987\r
Forest Frederic;1988\r
Forestier Bossut Karine;1989\r
Forneris Alexandre;1990\r
Forni Michel;1991\r
Forster Alexandre;1992\r
Forster Horváth Csaba;1993\r
Forte Marques Ana Rita;1994\r
Foucault Romain;1995\r
Foucher Marie-Pierre;1996\r
Fouilland Camille;1997\r
Fouillet Philippe;1998\r
Foulex-Vaillant Aurélie;1999\r
Foulkes Adrian;2000\r
Four Seasons Hotel des Bergues ;2001\r
Fourchet François;2002\r
Fournet Dominique;2003\r
Fournet Nicole;2004\r
Fournier Lara;2005\r
Fournier Nicolas;2006\r
Fournier Pierre;2007\r
Fouz Roson Natalia;2008\r
Fracchia Silvia;2009\r
Fracchia-Chaillon Evelyne;2010\r
Franceschetti Nicolas;2011\r
Francillon Marc Paul;2012\r
Francini Lorenzo;2013\r
Francis Dällenbach Margret;2014\r
Francis Gerstel Patricia;2015\r
Francis Karim;2016\r
Francisty Barbora;2017\r
Franck Florent;2018\r
Franck Gilles;2019\r
François Anne;2020\r
François Claire;2021\r
François Joris;2022\r
Frangos Antoine;2023\r
Frangos Caroline;2024\r
Frangos Emilia;2025\r
Franke Thorsten;2026\r
Franzoni Gabrielle;2027\r
Frascarolo Sylvain;2028\r
Fratianni Axelle;2029\r
Frei Heinrich;2030\r
Frei Mélanie;2031\r
Freiburghaus Vincent;2032\r
Freire Silvia;2033\r
Freitas Da Rocha Joao;2034\r
Freitas da Rocha Joaõ Manuel;2035\r
Freitas Joao;2036\r
Frerot Cécile;2037\r
Fresard François;2038\r
Fresard Isabelle;2039\r
Fresse-Lubrano Aurélie;2040\r
Freudiger Hans;2041\r
Frey Walter O.;2042\r
Friberg Marie-Madeleine;2043\r
Fridez Pierre-Alain;2044\r
Friedlaender Alex;2045\r
Friedli André;2046\r
Friedli Axel;2047\r
Friedrich Rolf;2048\r
Frisone Daniele;2049\r
Frisone Daniele_ hon. pour gardes;2050\r
Friszer Stéphanie Myriam Esther;2051\r
Fritsch Carlo;2052\r
Fritsch Emmanuel;2053\r
Fritsch Karsten;2054\r
Fritschi Hans;2055\r
Frizon Louise;2056\r
Froidevaux Anne-Claude;2057\r
Froidevaux Pierre;2058\r
Fromont Isabelle;2059\r
Fromont Isaure;2060\r
Frossard Jean-Louis;2061\r
Frund Frésard Claire-Dominique;2062\r
Fuertes Nguyen Mercedes;2063\r
Fuhrer Clara;2064\r
Fuhrmann Edya;2065\r
Fulliquet Edouard;2066\r
Fulpius Thierry;2067\r
Fumani Célia;2068\r
Fumeaux Zina;2069\r
Fürrer Flavie;2070\r
Fürst Rossier Amanda;2071\r
Fuzat Laurent;2072\r
Gabathuler Jean;2073\r
Gabay Cem;2074\r
Gabellon Serge;2075\r
Gabioud-Bouyer Laurence;2076\r
Gabrielli  Aline;2077\r
Gache Pascal;2078\r
Gacond  Cyril;2079\r
Gafundu Faida Judith;2080\r
Gagiu Ion Nicolae;2081\r
Gagnebin  Anne-Lise;2082\r
Gagnebin Joël;2083\r
Gaillard Anca Cristina;2084\r
Gaillard Jean Christophe;2085\r
Gaillard Stéphanie;2086\r
Gaillard Thibaut;2087\r
Galatoire Janni;2088\r
Gall Bernard;2089\r
Galland Olivier;2090\r
Gallardo Cristina;2091\r
Galli Brenno;2092\r
Gallice Nathalie;2093\r
Gallois-Schmit Aline;2094\r
Gallopin Yves;2095\r
Galy Jean-François;2096\r
Gamba Lucien;2097\r
Gamba Marc-Antoine;2098\r
Gambazzi Laurent;2099\r
Gambirasio Richard;2100\r
Gander Marc;2101\r
Gans Rebmann Greta;2102\r
Gantcheva Neli;2103\r
Garcia Anne;2104\r
Garcia Baeza Carmen Maria;2105\r
Garcia Bernard;2106\r
Garcia Segarra Nuria;2107\r
Garcia Vincent;2108\r
Garcia-Tarodo Stéphanie;2109\r
Garde Claude;2110\r
Gardet Georges;2111\r
Gardon Roland;2112\r
Garessus  Jonathan;2113\r
Gariani Karim;2114\r
Garibaldi Riccardo;2115\r
Garmier Marie;2116\r
Garreau Olivier;2117\r
Gartenmann Christian;2118\r
Gaspard Lionel;2119\r
Gaspoz Axel;2120\r
Gaspoz Jean-Michel;2121\r
Gasquet Nicolas;2122\r
Gast Jacques;2123\r
Gastaldi Giacomo;2124\r
Gaston Eric;2125\r
Gau-Botfield Julie;2126\r
Gaud Emilie;2127\r
Gaudin Thomas;2128\r
Gauthey Jérôme;2129\r
Gauthey Laurent;2130\r
Gauthey Magali;2131\r
Gauthey Magali_hon. privés p/Gardes;2132\r
Gavillet Olivier;2133\r
Gavinio Roberto;2134\r
Gay Alexandre;2135\r
Gay Louis-Jean;2136\r
Gay Nicolas;2137\r
Gaye Safiétou;2138\r
Gaytan Sansa Josep Maria;2139\r
Gaziaux Aurélie;2140\r
Geay Emma;2141\r
Gebre-Michael Isaac;2142\r
Gehriger Lionel;2143\r
Gehrke Thomas ;2144\r
Geiger Dominique;2145\r
Geinoz Gilbert;2146\r
Geiser Elisa;2147\r
Geiser Vrtek Priscille;2148\r
Gelbard Sarah-Lyne;2149\r
Geles François;2150\r
Gemayel Anouche;2151\r
Gemayel Gino;2152\r
Gendey Baumann Milly;2153\r
Gendre Grégoire;2154\r
Gendre Julia;2155\r
Geneva Tourism Franck Romanet;2156\r
Genevay Stéphane;2157\r
Genève-Médecins SA .;2158\r
Genin Bernard;2159\r
Genin Gilles;2160\r
Genoud Myriam;2161\r
Genoud Vassilis ;2162\r
Genoud Vincent Vital;2163\r
George Anne-Claude;2164\r
George François;2165\r
George John;2166\r
Georges Paul;2167\r
Georgescu Lachenal Daniela;2168\r
Georgiou Georgios;2169\r
Georgitsogiannakos Nikolaos;2170\r
Gerard Isabelle;2171\r
Gérard Isabelle;2172\r
Geray Willy;2173\r
Gerber Annick;2174\r
Gerber Philippe;2175\r
Gerboud Franck;2176\r
Germain Fanny;2177\r
Germanier Lionel;2178\r
Germeau Nathalie;2179\r
Gerstel Caroline;2180\r
Gerstel Eric;2181\r
Gervaix Alain;2182\r
Gervaz Pascal;2183\r
Gervet Elodie;2184\r
Gex Laurence;2185\r
Ghanipour Mathieu;2186\r
Ghavami Anoosh;2187\r
Ghez Adela;2188\r
Ghilardi Giuseppe;2189\r
Ghilardi Sandrine;2190\r
Ghinescu Cristian;2191\r
Ghisletta Valerio;2192\r
Ghose Clive;2193\r
Giacobino Philippe;2194\r
Giacomini Katia Astrid;2195\r
Gialamas Eleftherios;2196\r
Giannakopoulos Georges;2197\r
Giannakoura Anastasia ;2198\r
Giannelli Sandra;2199\r
Gianotti Federica;2200\r
Giffo Boniface;2201\r
Gigon Edward;2202\r
Gigon Marcel;2203\r
Gil Marc;2204\r
Gil Miñana Joan;2205\r
Gilgien-Denereaz Lauriane;2206\r
Gillabert Cédric;2207\r
Giller Bastian;2208\r
Gilles Paturel ;2209\r
Gilliard Dominique Isabelle;2210\r
Gilliéron Pascal;2211\r
Gillon Thierry;2212\r
Gilson Alice;2213\r
Gindre Amaury;2214\r
Ginguené Carole;2215\r
Gini Antoine;2216\r
Ginola Emilie;2217\r
Giobellina Christophe;2218\r
Giordano Martine;2219\r
Giorgio Marie-Thérèse;2220\r
Giovanouli Anthie;2221\r
Girard Anne-Claire;2222\r
Girard Laurent;2223\r
Girardet Nendaz Genevieve;2224\r
Girard-Guyonvarc'h Charlotte;2225\r
Girardin Céline;2226\r
Girardin Marc;2227\r
Girardy Laurence;2228\r
Giraud Pierric;2229\r
Giraud Tatiana;2230\r
Girier Pierre;2231\r
Girod Marc;2232\r
Girolet Eric;2233\r
Giroud Didier;2234\r
Gitnacht Yvonne Esther;2235\r
Giudicelli Guillaume;2236\r
Giuffrida Riccardo;2237\r
Giustranti Valérie;2238\r
Givaudan Mélanie;2239\r
Givry Cosima;2240\r
Gjerstad Rikley Eva;2241\r
Gjoni Shpresa;2242\r
Gkomouzas Angelos;2243\r
Gkouvastos Konstantinos;2244\r
Glanz Ludovic;2245\r
Glasson Philippe;2246\r
Glatz Nicolas;2247\r
Glauser Thierry;2248\r
Gobet Mio;2249\r
Gobiet Mélanie;2250\r
Goddet de Murcia Nathalie;2251\r
Godin Norman;2252\r
Godinho Oliveira Lourenço Ana Paula;2253\r
Goethals  Maureen;2254\r
Goga Cristina;2255\r
Gohner Sven;2256\r
Gojanovic Boris;2257\r
Gojanovic Boris (Nyon);2258\r
Gökdemir Ergenekon;2259\r
Gökduman  Bulus;2260\r
Gökok Nil;2261\r
Golay Hadrien;2262\r
Golay Wetzel Sandrine;2263\r
Golay-Petersen Marija;2264\r
Gold Benjamin;2265\r
Gold Nadia;2266\r
Goldenberg Pauline;2267\r
Gollut Stéphanie;2268\r
Gollut Stéphanie-Hypnose cabinet;2269\r
Golosetti Mickaël;2270\r
Gomes Da Rosa Patrick;2271\r
Gomes dos Reis  Nancy;2272\r
Gomez Candolfi Susana;2273\r
Gomez Parada Karina;2274\r
Gondar Renato;2275\r
Gonin Michel;2276\r
Gonnet Philippe;2277\r
Gonzalez Amanda;2278\r
Gonzalez Fernando;2279\r
Gonzalez Michel;2280\r
Gonzalez Nguyen-Tang Elsa;2281\r
Goossens Nicolas;2282\r
Gorican Karel;2283\r
Götti-Alipour Yassaman;2284\r
Gouel Geninasca Valérie;2285\r
Goulouti Eleni;2286\r
Goumaz Augustin;2287\r
Goumaz Michel Joseph;2288\r
Goumaz Michel Olivier;2289\r
Goumaz Patrick;2290\r
Goupeyou Tchouangang Marquise;2291\r
Gourguechon Thibault;2292\r
Gourmala Djamal;2293\r
Graber Christian;2294\r
Grado-Ranzanici Giulia;2295\r
Grall Gwenaëlle;2296\r
Gramatica Luca;2297\r
Granchamp Alain;2298\r
Grandin Stephane;2299\r
Grandjean Eduna;2300\r
Grandjean Etienne;2301\r
Grandjean Thierry;2302\r
Grangeon Valentine;2303\r
Grangier Christian;2304\r
Granier Laborie Marie;2305\r
Granieri Carla;2306\r
Granno Simone;2307\r
Grappin Alexis;2308\r
Grappin Alexis (Harmony);2309\r
Grashkoska Civkaroska Silvana;2310\r
Gratius Elise;2311\r
Grattarola Giovanni;2312\r
Grau Marie-Paule;2313\r
Graz Yohann;2314\r
Grazioli Aron;2315\r
Grazioli Gauthier Lorenzo;2316\r
Greco Blaise;2317\r
Greder Bernard;2318\r
Greder Catherine;2319\r
Green  Yvan;2320\r
Gregurovic Franka;2321\r
Greiner-Malher Oliver;2322\r
Gremeaux Vincent;2323\r
Gremion Gérald;2324\r
Grenak Degoumois  Zita;2325\r
Grepinet Caroline;2326\r
Grépinet-Ayewubo Caroline;2327\r
Grept-Locher Sandrine;2328\r
Gressot Pablo;2329\r
Greva Aksel;2330\r
Grigorev Cristina;2331\r
Grillet Mélanie;2332\r
Grilo Nuno;2333\r
Grimaitre Michel;2334\r
Grimaître Raphaël;2335\r
Grimaldi Raffaele;2336\r
Grin Didier;2337\r
Grin Séverine;2338\r
Griscom Stewart;2339\r
Grisel Philippe;2340\r
Grob Walter;2341\r
Groene Laurent;2342\r
Grosclaude Maxime;2343\r
Grosclaude Maxime (Nyon);2344\r
Groscurth Andreas;2345\r
Gros-Jean Maxime;2346\r
Grosjean Pierre;2347\r
Grosrey Catherine;2348\r
Gross Willy;2349\r
Grosse Baptiste;2350\r
Grossen Camille;2351\r
Grossenbacher Peter;2352\r
Grossholz Marianne;2353\r
Grosso Damien;2354\r
Groupe Médical d'Onex SA .;2355\r
Groux Claude;2356\r
Gruet Pascal;2357\r
Grujic-Zivanovic Jelena;2358\r
Grumser Anne;2359\r
Grunauer Nicolas;2360\r
Grundheber Matis;2361\r
Grünenwald Michèle;2362\r
Gruner Laurent;2363\r
Gruz Laurence;2364\r
Guanella Nicolas;2365\r
Guarneri Catherine ;2366\r
Gübeli Alissa;2367\r
Gubler Cordula;2368\r
Gubser Roger;2369\r
Gubser Sarah;2370\r
Gueddi Salah;2371\r
Guedj Danae;2372\r
Gueguen Amandine;2373\r
Gueissaz Félix;2374\r
Guemara Romain;2375\r
Gueneau de Mussy Pierre;2376\r
Guenin Graziella;2377\r
Gueorguiev Maria;2378\r
Guerin Rachel;2379\r
Guerne  Pierre-André;2380\r
Guéron Thierry;2381\r
Guerraz Morgan;2382\r
Guerre Pascal;2383\r
Guessous Idris;2384\r
Guffond Fabienne;2385\r
Guggi Serge;2386\r
Guggi Vincent;2387\r
Guglielmi Stefano;2388\r
Guglielmo Valentina;2389\r
Guibentif Léa;2390\r
Guibert Marie-Béatrice;2391\r
Guibert Pierre;2392\r
Guiberteau Christelle;2393\r
Guiberteau Julien;2394\r
Guido Ramseier Rosanna;2395\r
Guidon Alain;2396\r
Guignard / Pralong Composition corporelle;2397\r
Guignard / Radiologie CT-Scan .;2398\r
Guignard Lucie;2399\r
Guignard Renaud;2400\r
Guilbert Christine;2401\r
Guilbert Patrick;2402\r
Guilhem Jean-Bernard;2403\r
Guillaume Eric;2404\r
Guillaume-Gentil  Simon;2405\r
Guillaumin David;2406\r
Guillem Fernandez Gil;2407\r
Guillemot Françoise;2408\r
Guillén Gloor José Antonio;2409\r
Guillermin  Alexandre;2410\r
Guillermin-Spahr Marie-Luce;2411\r
Guillet-Dauphiné Nadine;2412\r
Guillot Sophie;2413\r
Guillotel Benoît;2414\r
Guillou Ronan;2415\r
Guinand Alexandre;2416\r
Guinand Julie;2417\r
Guinand Olivier;2418\r
Guinand Stéphane;2419\r
Guiraud-Caladou Florent;2420\r
Guiren Mohamed;2421\r
Guitton Hervé;2422\r
Güleryüz Attila;2423\r
Gumener Raphael;2424\r
Gumowski Pierre;2425\r
Gurbanov Elvin;2426\r
Gurrieri Daniele;2427\r
Gurtner Rebekka;2428\r
Gusberti Franco;2429\r
Guth Eric;2430\r
Guy  Blandine;2431\r
Guy Xavier;2432\r
Guyon Mariane;2433\r
Gygax Yves-Alain;2434\r
Haaz Sophie;2435\r
Haba-Rubio José;2436\r
Habib Nermine;2437\r
Habicht Frank;2438\r
Hache Albert;2439\r
Hachulla Anne-Lise;2440\r
Hack Michel;2441\r
Hacquard Aurélien;2442\r
Hadaya Karine;2443\r
Hadjseyd Chahreddine;2444\r
Haeberli-Bazarbachi Dania;2445\r
Haemmerli Julien;2446\r
Haenni Patrick;2447\r
Haesler Erik;2448\r
Hafen Gaudenz;2449\r
Hafez Baher;2450\r
Hafliger Werner;2451\r
Hafner Catherine;2452\r
Hafsaoui-Ouchnak Sabrine;2453\r
Hagmann  Myriam;2454\r
Hagmann Michael;2455\r
Hagmann Nicolas;2456\r
Haidar Fadi;2457\r
Haïoun Najia;2458\r
Haldy Philippe;2459\r
Halfon Liliana;2460\r
Halfon Patricia;2461\r
Halfon Poletti Alice;2462\r
Hall Audrey Rose;2463\r
Hall Benjamin;2464\r
Haller-Hester Dagmar;2465\r
Halperin Daniel S.;2466\r
Haluzicky Martin;2467\r
Hamard Marion;2468\r
Hamdan Yaëlle;2469\r
Hamdani Antoine;2470\r
Hamel John-John;2471\r
Hamel-Romoscanu Ilinca;2472\r
Hammoud Yamani Fouz;2473\r
Hamsag Nikola;2474\r
Hanafi Zineb;2475\r
Hänggeli Charles-André;2476\r
Häni Eugen;2477\r
Hänni Catherine;2478\r
Hänni Sandra;2479\r
Hannouche Didier;2480\r
Hansali Violaine Jeanne Martine;2481\r
Hanssens Charlotte;2482\r
Hany Stéfan;2483\r
Harchaoui Yassine;2484\r
Harding Pille;2485\r
Hardy Samuel;2486\r
Haroutunian Getsy;2487\r
Haroutunian Nechan;2488\r
Harter Felix Manuel;2489\r
Hartmann Christophe;2490\r
Hartmann Julia;2491\r
Hartmann Marie;2492\r
Hasanic Alan;2493\r
Hashemi Pouya;2494\r
Hashemi-Nadjafabadi Ahmad;2495\r
Hassani Abdelghani;2496\r
Hassani Hassen;2497\r
Hassani Salah Eddine;2498\r
Hassène Baili Référent Dr Allali;2499\r
Hassoun Jérémy;2500\r
Hauguel Brice;2501\r
Hauser  Matthias;2502\r
Hauser Conrad;2503\r
Hauser Johannes;2504\r
Hauser Philipp;2505\r
Hauser Renate;2506\r
Hausler-Szecsi Kati;2507\r
Haverdings Hester;2508\r
Ha-Vinh Leuchter Russia Elisa;2509\r
Haxhimeri Kaltrina;2510\r
Haydar Ahmad;2511\r
Hayek Desiree;2512\r
Hebben Sebastien;2513\r
Hebert Diane;2514\r
Hedayati Dezfouli Meriem;2515\r
Hediger Nitschmann Sonja;2516\r
Hegelbach-Feller Dominique;2517\r
Hegi Christophe;2518\r
Hegi-Croce Raffaella;2519\r
Heinen-Vees Caroline;2520\r
Heiner Gujer;2521\r
Heini Adrian;2522\r
Heinicke Jade;2523\r
Heinicke Jean-Marc;2524\r
Heiniger Simon;2525\r
Heinzmann Sidonie;2526\r
Heitz Philippe;2527\r
Helfer Christian;2528\r
Helfer-Witz Nicole;2529\r
Helg Claudine;2530\r
Hellbardt Ariane;2531\r
Henke Ralph;2532\r
Hennel Elisabeth;2533\r
Henninger Stéphane;2534\r
Henriet Noémie;2535\r
Henry Bouvet Chloé;2536\r
Hentsch Christophe;2537\r
Hentsch Lisa;2538\r
Hentsch Nikita;2539\r
Herbaut Andreea;2540\r
Herbreteau Corinne;2541\r
Herfeld Madeline;2542\r
Herfroy Vincent;2543\r
Hergibo Laurent;2544\r
Herisanu Elena-Camelia;2545\r
Heritier Barras Anne-Chantal;2546\r
Héritier François;2547\r
Heritier Paul;2548\r
Herkert Clément;2549\r
Hermal Charlotte;2550\r
Hermann Thomas;2551\r
Hermenjat Patrick;2552\r
Hermes-Laufer Julia;2553\r
Hernandez Corzo Edgar;2554\r
Herren Gilles;2555\r
Herren Tara;2556\r
Herrera Bruno;2557\r
Herrmann Martin;2558\r
Herrmann Thomas;2559\r
Herter Clavel  Catherine;2560\r
Herz-Sharbatov Marc;2561\r
Hess Vincent;2562\r
Hesse Eva;2563\r
Heuberger Franck;2564\r
Heutschi-Oztürk Hafize;2565\r
Heymann Marc;2566\r
Heymans Frédéric;2567\r
Heymans Philippe;2568\r
Heyrani Nobari Bentolhoda ;2569\r
Heyse Sara;2570\r
Hicklin Luc;2571\r
Higelin Fabien;2572\r
Himer Nabile ;2573\r
Hirsbrunner Almagbaly Pascale;2574\r
Hirschel Susanne;2575\r
Hitz Olivier;2576\r
Hoan Delphine;2577\r
Hoang-Dao Thu-Thuy;2578\r
Hobi Alexandre;2579\r
Hoch Mikaël;2580\r
Hoch Sylvaine;2581\r
Hoehn Luca;2582\r
Hoffmann Arian;2583\r
Hoffmann Jacques Lars;2584\r
Hoffmeyer Pierre;2585\r
Hofmann Karen;2586\r
Hofmann Peter;2587\r
Hogendijk Sietse;2588\r
Holzer Franz Josef;2589\r
Holzer Nicolas;2590\r
Homsy Antoine;2591\r
Hong Minh Luyen;2592\r
Hôpital de Nyon / GHOL .;2593\r
Hôpital de Ste-Croix Ste-Croix;2594\r
Hôpital du Valais .;2595\r
Hôpitaux Universitaires  de Genève HUG;2596\r
Horisberger Alice ;2597\r
Horn Thierry;2598\r
Horowicz Mathilde ;2599\r
Horvat Ladislav;2600\r
Horvath Judit;2601\r
Horvath Michel;2602\r
Hosamee Nabilah;2603\r
Hosner Michel-Edouard;2604\r
Hottinger Isabelle;2605\r
Houlmann Sébastien;2606\r
Howart-Frey Claude;2607\r
Hozé Chloé;2608\r
Hsieh Aurélie;2609\r
Hsieh Julien Wen;2610\r
Hsieh Vincent;2611\r
Hsin Han-Nien;2612\r
Hsu Christophe;2613\r
Hua Sophie;2614\r
Huard Claude;2615\r
Huaume Hadrien ;2616\r
Huber Caroline;2617\r
Huber Christoph;2618\r
Huber Jean-François;2619\r
Huber Olivier;2620\r
Huber-Geismann Flore;2621\r
Huber-Sauteur Evelyne;2622\r
Huboux Clara;2623\r
Huehn Christophe;2624\r
Hueso Ibanez Raquel;2625\r
Hueso Ibáñez Raquel;2626\r
HUG - Chirurgie Thoracique et  Endocrinienne (CTH);2627\r
Hugentobler Max;2628\r
Hugli Anne;2629\r
Hulin Thierry;2630\r
Hulliger Boonekamp Caroline;2631\r
Hulliger Stéphane;2632\r
Hülya Özsahin Ayse;2633\r
Humbert Domitille;2634\r
Humbertclaude Luc;2635\r
Hunkeler Michel;2636\r
Hurni Ariane;2637\r
Hurni Rainer;2638\r
Hurry Yann;2639\r
Hurtado  Mayra;2640\r
Husi Bernard;2641\r
Hussami Mahmoud;2642\r
Hutin Dominique;2643\r
Huttenmoser Jean-Luc;2644\r
Huwyler Tibor;2645\r
Huynh Do  Phi;2646\r
Huynh-Ba Marc;2647\r
Huynh-Vo Huu Le Jeannine;2648\r
Hwang Jeanni;2649\r
HWU Hand & Wrist Unit SA Chick Grégoire;2650\r
Hyde Alexis;2651\r
Hyman Yariv-Gerald;2652\r
Iakova Maria;2653\r
Iancu Ferfoglia Ruxandra;2654\r
Ibanez Vicente;2655\r
Ibecheole Victoria;2656\r
Idan Roni;2657\r
Idris Nimatullah;2658\r
Ignasse Marion;2659\r
Igo-Kemenes Agnès;2660\r
Ilic Jasna;2661\r
Iliescu Roxana Ileana;2662\r
Illan Montero Jonathan;2663\r
Illi Claude;2664\r
Imbert Lucie;2665\r
Imhof Daniel;2666\r
Imholz Benoït;2667\r
Imhoos Gabriela;2668\r
Inan Ihsan;2669\r
Inconnu .;2670\r
Infirmier(e) .;2671\r
Ingold Blaise;2672\r
Innaurato Giovanni;2673\r
Inoubli Le Roy Sarra;2674\r
Inselspital Hôpital Universitaire de Berne;2675\r
Ion-Pintiliciuc Oana-gabriela;2676\r
Iranchahr Parviz;2677\r
Iranmanesh Pouya;2678\r
Irle Claudius;2679\r
Irles Thierry;2680\r
IRM Cardiaque Drs Fournet & Zaza;2681\r
Isaza  Paula Camila;2682\r
Isaza Mauget Paula Camila;2683\r
Iselin Christophe;2684\r
Isoard Oana;2685\r
Isoz Corinne;2686\r
Issakova Olga;2687\r
Issaris Constantin;2688\r
Istria Jacques;2689\r
Ittig Isabel;2690\r
Itty Santosh James;2691\r
Iudici Michele;2692\r
Iuera Christian;2693\r
Iurea Cristian;2694\r
Iwanowski Patricia;2695\r
Jaafar Jaafar;2696\r
Jaboulet-Velluz Marie;2697\r
Jaccard Christian;2698\r
Jaccard Yves-Bernard;2699\r
Jackson John Paul;2700\r
Jacob Noémie;2701\r
Jacob Sandrine;2702\r
Jacot des Combes Bertrand;2703\r
Jacot Yves;2704\r
Jacquelin-Ravel Nathalie;2705\r
Jacquemoud Guy;2706\r
Jacquemoud Nicolas;2707\r
Jacques Léa;2708\r
Jacquier Cédric;2709\r
Jacquier Christophe;2710\r
Jacquot Laurent;2711\r
Jacquot Simelise;2712\r
Jafou Nariman;2713\r
Jager Stephan;2714\r
Jaggi Pauline;2715\r
Jaillet Juliette;2716\r
Jakab Zsofia;2717\r
Jalbert Bénédicte;2718\r
Jamme Sharon;2719\r
Jan Luc;2720\r
Janaillac Marie;2721\r
Janjic Danilo;2722\r
Jannelli Gianpaolo;2723\r
Janssen Insa;2724\r
Janssens Jean-Paul;2725\r
Jany Richard;2726\r
Jaquerod Alain;2727\r
Jaques  Denis;2728\r
Jaques Dominique;2729\r
Jaques Olivier;2730\r
Jaquet André;2731\r
Jaquet Yves;2732\r
Jaquinet Alexandre R.;2733\r
Jarcin Eric;2734\r
Jargy Dominique;2735\r
Jastrow Meyer Nicole;2736\r
Jaton Laure;2737\r
Jauch Klein Tamara;2738\r
Jaudet Nadim;2739\r
Jaunin-Stalder Nicole;2740\r
Jauslin Pierre-Antoine;2741\r
Jauslin-Lironi Corinne;2742\r
Javelle Bernard;2743\r
Jayet Pierre-Yves;2744\r
Jean Schubert;2745\r
Jeangeorges Ambre;2746\r
Jeanneret  Cyril;2747\r
Jeanneret Renaud;2748\r
Jeannet Claudine;2749\r
Jeauneaux Stéphanie;2750\r
Jedday Latifa;2751\r
Jegou Sébastien;2752\r
Jelea Iolanda-Voichita;2753\r
Jelk Morales Laurence;2754\r
Jenni Françoise;2755\r
Jenny Benoît;2756\r
Jequier Elise;2757\r
Jéquier Vincent;2758\r
Jichlinski Daniel;2759\r
Jimenez Thomet  Jeannette;2760\r
Jirovec Martin;2761\r
Jitten Philippe;2762\r
Jiva Hill Resort Relais & Château;2763\r
Joccallaz Manuel;2764\r
Jochum Charbanou;2765\r
Jocteur Monrozier Emmanuel;2766\r
Jocteur-Monrozier Hélène;2767\r
John Valérie;2768\r
Joliat Alain;2769\r
Jolidon René-Marc;2770\r
Jolivet Didier;2771\r
Jolly Marieke;2772\r
Jolou Jalal;2773\r
Joly Anne Catherine;2774\r
Joly Anne-Catherine;2775\r
Jordan Bernard;2776\r
Jordan Elsa;2777\r
Jornod Naima;2778\r
Josse Ingrid;2779\r
Josué Sylvain;2780\r
Jotterand Drepper Valérie;2781\r
Jotterand Sébastien;2782\r
Jouanneau Fabrice;2783\r
Jouaux Sophie;2784\r
Joubert Emmauel;2785\r
Joubert Patrick;2786\r
Jouffroy Emilie;2787\r
Joulin Clémentine;2788\r
Jovanovic Jovan;2789\r
Jovanovic Stevan;2790\r
Jubin Jean-Pierre;2791\r
Judas Céline;2792\r
Juge Christian;2793\r
Juge Olivier;2794\r
Juillard Marina;2795\r
Juillerat Eric;2796\r
Juillet de Saint-Lager Alix;2797\r
Julen Olivier;2798\r
Juliano Angelo;2799\r
Jung Michel;2800\r
Jung Minoa;2801\r
Jung Wiggins Emmanuelle;2802\r
Jungers Claire;2803\r
Jungo Nançoz Carol;2804\r
Junod Perron Noëlle;2805\r
Juravle Sergiu;2806\r
Jurjiu Lilian;2807\r
K. Moor Beat;2808\r
Kadjangaba  Abdelsalam;2809\r
Kadouche Serge;2810\r
Kadri Sabrina;2811\r
Kadyrov Alikhan;2812\r
Kaelin André;2813\r
Kaelin Gambirasio Isabelle;2814\r
Kaiser Laurent;2815\r
Kaladji Fouad;2816\r
Kalami Yas;2817\r
Kalangos Afksendiyos;2818\r
Kalbermatten Daniel;2819\r
Kalibala Jacklean;2820\r
Kälin Miriam;2821\r
Kalina Daniel;2822\r
Kalonji Tshibambula Pauline;2823\r
Kalonji Tshibangu;2824\r
Kambale  Débora ;2825\r
Kamdem Gueksi Benerike;2826\r
Kamenov Kamen;2827\r
Kamler Premila;2828\r
Kammacher Guerreiro Melissa;2829\r
Kamoun Pierre-David;2830\r
Kämpfen Stéphane;2831\r
Kämpfer Constanze;2832\r
Kanazoe-Giovannoni Delphine;2833\r
Kandara Khaled;2834\r
Kapanci Cem;2835\r
Kapina Viktoria;2836\r
Kaplun Marc;2837\r
Kaptan Yildiz Banu;2838\r
Karababa Ali;2839\r
Karababa Deniz;2840\r
Karachristianidou Anastasia;2841\r
Karagevrekis Maïa;2842\r
Karalis Stergios;2843\r
Karapetian Ochine;2844\r
Karatzios Christos;2845\r
Kardan Reza;2846\r
Karege Gatete;2847\r
Karenovics Wolfram;2848\r
Karentzos Alexandros;2849\r
Karimzadeh Soran;2850\r
Karpuz Süleyman Baris;2851\r
Karsegard Joachim;2852\r
Kashef Hala;2853\r
Kaspar Charles-Henri;2854\r
Kassouha Ammar;2855\r
Kati Arezki;2856\r
Katz Deborah;2857\r
Katz Eugène;2858\r
Kaufmann Christoph;2859\r
Kawasaki Aki;2860\r
Kawkab Wahid;2861\r
Kechroud Yasine;2862\r
Kehrer Philippe-Dominique;2863\r
Keil Ioana-Corina;2864\r
Keinath Emmanuel;2865\r
Keller Alain Denis;2866\r
Kempf-Haber Malgorzata;2867\r
Kenfak Foguena Alain;2868\r
Keraim Salah;2869\r
Keravec Erwan;2870\r
Kerdudo Veau Cécile;2871\r
Kerguillec François;2872\r
Kerkour Nadia;2873\r
Kermode-Noppel Tessa;2874\r
Kern Ilse;2875\r
Kern Kathrin;2876\r
Keryer Alexis;2877\r
Kessler Brondolo Vera;2878\r
Keta Adriana;2879\r
Ketterer Ludivine;2880\r
Keunen Karlijn;2881\r
Khabiri Ebrahim;2882\r
Khachatryan Arman;2883\r
Khalifeh Ghassan;2884\r
Khan Ahmer;2885\r
Khatchatourov Gregory;2886\r
Khaw Nathalie;2887\r
Kheir Valéria;2888\r
Kheireddine Nizar;2889\r
Khelifa Ilhem;2890\r
Kherad Omar;2891\r
Khodabux Imran;2892\r
Khokhlov Serguei;2893\r
Khoutir Mahour;2894\r
Kieny Pascal;2895\r
Kies Chafika;2896\r
Kik Léa;2897\r
Kim Floryane;2898\r
Kimpe Vincent;2899\r
Kinapenne Alain;2900\r
Kini Riad;2901\r
Kirchhofer Laila ;2902\r
Kirchner Volker;2903\r
Kisfaludy Koppany;2904\r
Kiss Mihail;2905\r
Kissling-Rana Sarah;2906\r
Klabunde Stéphanie;2907\r
Klay Michael;2908\r
Klee Philippe;2909\r
Kleffel Jan-Hendrick;2910\r
Klein  Amélie ;2911\r
Klein Jacques;2912\r
Klein Marianne;2913\r
Klein Patricia;2914\r
Kleinmann Sonia;2915\r
Kleinschmidt Andreas;2916\r
Klinkenbergh Dominique;2917\r
Klunge Céline;2918\r
Knoepfli Hans-Jürg;2919\r
Knuchel Judith;2920\r
Kobel Thierry;2921\r
Kocher Mathilde;2922\r
Kodiyan  Alex;2923\r
Koerffy Alice;2924\r
Koessler Thibaud;2925\r
Koglin Laurent;2926\r
Koglin Laurent (Nyon);2927\r
Kohler André;2928\r
Köhler Ballan Bettina;2929\r
Kohler Florian;2930\r
Kohler Rémy;2931\r
Kohler-Baud Therese;2932\r
Kohlik Magdalena;2933\r
Kohut Michel;2934\r
Kokje Vivianne;2935\r
Kolly Samuel;2936\r
Kolo Christophe Frank;2937\r
Kondo Oestreicher Mitsuko;2938\r
Kone Jean-Luc;2939\r
Konfino Sally Orly;2940\r
König Marcel;2941\r
Konstantinidis Philippe;2942\r
Konzelmann Michel;2943\r
Kooger Infante Nicoline;2944\r
Kopp Benoît;2945\r
Korff Christian;2946\r
Koroltchouk Lioubov;2947\r
Kosinski Christophe;2948\r
Kostova Yanka;2949\r
Kotab Petr;2950\r
Kotalova Monika;2951\r
Kotowski Marc;2952\r
Kotterik Susanne;2953\r
Kotthaus Alexandra;2954\r
Kouablan Annie;2955\r
Koull Zoé;2956\r
Kountouri Melpomeni ;2957\r
Kozycki Lalomia Sarah;2958\r
KPR (Drs Kherad/Poli/Ritz);2959\r
Kraemer Ronald;2960\r
Kraft Dieter;2961\r
Kraft Walter-Dorian;2962\r
Krähenbühl Jean-Daniel;2963\r
Kramer Nouchine;2964\r
Kramer-Gauchat Marie-Claire;2965\r
Krania Maria;2966\r
Kratz Ben ;2967\r
Krause KarlHeinz;2968\r
Krawczyk Philippe;2969\r
Krayenbühl Andrea;2970\r
Krayenbühl Christophe;2971\r
Kraytem  Amira;2972\r
Krebs Peter;2973\r
Kremen Michal;2974\r
Krischer Joachim;2975\r
Kropf Michael;2976\r
Kubiak Mathieu;2977\r
Kubr Ivan;2978\r
Kudla André;2979\r
Küffer  Julie;2980\r
Kuffer Thierry;2981\r
Kulier Regina;2982\r
Kundig François;2983\r
Küng Marc ;2984\r
Kuntschen François;2985\r
Kunz Edward;2986\r
Kunzle Estelle;2987\r
Kurian Mary;2988\r
Kurmann Patric;2989\r
Kursner David;2990\r
Kürsteiner Gudat Karin;2991\r
Kuster Matthias;2992\r
Kuzmanovic Igor;2993\r
Kuzoe Liengme Bayi;2994\r
La Riva-Pfenninger Sabrina;2995\r
La Scala Giorgio;2996\r
Laamouri Nabil;2997\r
Labergerie Annie;2998\r
Labidi-Galy Intidhar ;2999\r
Lacatis Codrina;3000\r
Lacatis Dumitru;3001\r
Lachat Virginie;3002\r
Lachaux-Couttet Guillaume;3003\r
Lachenal Yann;3004\r
Lacour Marc;3005\r
Lacroix Jean-Matthieu;3006\r
Lacroix Sylvie;3007\r
Lädermann Alexandre;3008\r
Lädermann Alexandre (Carouge);3009\r
Lador Frédéric;3010\r
Ladouceur Magalie;3011\r
Lafarge Nathalie;3012\r
Laffin Bruno;3013\r
Laffitte Emmanuel;3014\r
Lagana Frédéric;3015\r
Lages Amédée;3016\r
Lagnaux Anne;3017\r
Lagnaux Yvan;3018\r
Lagrange Philippe;3019\r
Lagrange Sophie;3020\r
Lahlaidi Sierra Nadia;3021\r
Lahlou Taima;3022\r
Lahzami Samir;3023\r
Lakhdari Amel;3024\r
Lakki Brahim;3025\r
Lalain Jean-Pierre;3026\r
Lalicata-Gisselbaek Marianna;3027\r
Lalive d'Epinay Patrice;3028\r
Lam Célia;3029\r
Lam Thanh;3030\r
Lamadon Anne-Laure;3031\r
Lamaud Lise;3032\r
Lambert Jean-François;3033\r
Lambert Kalinka;3034\r
Lambert Stéphanie;3035\r
Lambiel Julien;3036\r
Lambiel Silvia;3037\r
Lamblin Julien;3038\r
Lamboley Loic;3039\r
Lamon Aurélie;3040\r
Lamouille Jessie;3041\r
Lamy Mona;3042\r
Lamy Tina;3043\r
Lanaspa Abel;3044\r
Lançon Annie;3045\r
Landes Ulrich;3046\r
Landis Basile;3047\r
Landis Theodor;3048\r
Landry Jean-Sébastien;3049\r
Lanfranchini  Elena ;3050\r
Lanfranconi Agathe;3051\r
Lang Noémie;3052\r
Lang Pierre-Oliver;3053\r
Langella Marie-Aude;3054\r
Langenskiöld Elisabeth;3055\r
Langner-Viviani Felicitas;3056\r
Lanier Cedric;3057\r
Lanier Noémie;3058\r
Lannes Xavier;3059\r
Lantcron Irwing;3060\r
Lantigner Florian;3061\r
Lanz  Christian;3062\r
Länzlinger Yohann;3063\r
Laoust Laurent;3064\r
Laperrière Nicole;3065\r
Laplace-Deslarzes Marie-C.;3066\r
Lapointe Anne-Karine;3067\r
Laporte Laurent;3068\r
Laporte Nadège;3069\r
Laporte Paoline;3070\r
Lapras Christophe;3071\r
Laptenkova Irina;3072\r
Larequi Ivan-Philippe;3073\r
Larigaldie Sophie;3074\r
Larrègle Xavier;3075\r
Larribau Rosalie;3076\r
Lartigue Alexis;3077\r
Lascano Agustina;3078\r
Lasseron Alain;3079\r
Lathuilière Aurélien;3080\r
Latif Najib;3081\r
Latini Keller Vanessa;3082\r
Latreille-Ladoux Frank;3083\r
Latremouille Arnaud;3084\r
Laudato Pietro Aniello;3085\r
Lauer Hermann Peter;3086\r
Laugaudin Solenn;3087\r
Laugier Nathalie;3088\r
Lauper Kim;3089\r
Lauper Nicolas;3090\r
Laurencet France;3091\r
Laurencet Marie-Eva;3092\r
Laurencet Pierre-Alexandre;3093\r
Laurent Cécile;3094\r
Laurent Doglio Marie;3095\r
Laurent Lidwine;3096\r
Laurent Margaux;3097\r
Laurent-Desbiolles Valérie;3098\r
Lauria Francesca;3099\r
Lavalley Adrien;3100\r
Lavanchy Anne-Laure;3101\r
Lavaud Jeanne;3102\r
Lavi Fereydoun;3103\r
Lawi David;3104\r
Lawson Ludovic;3105\r
Lazarou Ilias;3106\r
Lazovic Mihailo;3107\r
Lazzari Marcela Silvia;3108\r
Le Baron Marie;3109\r
Le Berquier Sophie;3110\r
Le Bras Russo Dominique;3111\r
Le Breton Julien;3112\r
Le Canderff Loïc;3113\r
Le Coroller Nicolas;3114\r
Le Denmat Bernard;3115\r
Le Fort Dominique;3116\r
Le Gal Frédérique Anne;3117\r
Le Guen Antoine;3118\r
Le Huec Jean-Charles;3119\r
Le Mao Tavernier Quentin;3120\r
Le Masle-Lastiolas Jean-Luc;3121\r
Le Meliner Rozenn;3122\r
Le Pogam Jérémy;3123\r
Le Pors Claire;3124\r
Le Roux Cédric;3125\r
Le Saint Laurent;3126\r
Lê Thanh Nam;3127\r
Leal Sandra;3128\r
Lebeau Aurore;3129\r
Lebel Jean-Christophe;3130\r
Leblond-Donnet Noémie;3131\r
Lebret Yannick;3132\r
Lebrun Elsa;3133\r
Lechevrel Aurélie;3134\r
Leclère Jean-Christophe;3135\r
Lecocq  Khadidiatou;3136\r
Lecointre Jean-Marc;3137\r
Lecomte Philippe;3138\r
Lecoq Sylvie;3139\r
Lecoultre Virgile;3140\r
Lecourt Vincent;3141\r
Lécureux-Joris Flavie;3142\r
Ledemazel Jennifer;3143\r
Lederrey Jacques;3144\r
Lee Da Silva Telma;3145\r
Lefebvre-Lavaud Stéphanie;3146\r
Lefebvre-Ramseyer Daniele;3147\r
Lefort Vincent;3148\r
Lefranc Fanny;3149\r
Leggieri Nicola;3150\r
Legout Laurence;3151\r
Legrand Emilie;3152\r
Legros-Lefeuvre Alexina ;3153\r
Lehmann Catherine;3154\r
Lehmann Virgilio;3155\r
Lehnen Aude;3156\r
Leidi Tommaso;3157\r
Leinenweber Philippe;3158\r
Leis Alexander;3159\r
Leishman Crispin;3160\r
Leleu Tom;3161\r
Lelouch Stéphane;3162\r
Leloup Christian;3163\r
Lemery Romain;3164\r
Lemma Aline;3165\r
Lemos Schönnagel Denise;3166\r
Lenglet Fanny;3167\r
Leo Vladimir;3168\r
Leon Sanchez Sonia;3169\r
Leonarduzzi Serge;3170\r
Leone Leila;3171\r
Leoni Maxime;3172\r
Lepori Morgane;3173\r
Leppert Richard;3174\r
Leproux Anaïk;3175\r
Leray Pierig;3176\r
Leresche Claire;3177\r
Leresche Pierre-Henri;3178\r
Leromain Catherine;3179\r
Leroux Jacques;3180\r
Les Hauts d'Anières .;3181\r
Lesaichot Agnès;3182\r
Lesbros Drahoslava;3183\r
Lesinski Jacqueline ;3184\r
Leuba Pierre-Alain;3185\r
Leuchter Igor;3186\r
Leuenberger Andre;3187\r
Leuenberger Véronique;3188\r
Leung Ki En-Ling;3189\r
Leutwyler Aline;3190\r
Levallois Cécile;3191\r
Levivier Marc Consultations;3192\r
Levy Clara;3193\r
Levy Gabriel;3194\r
Levy Marc;3195\r
Levy Sébastien;3196\r
Lew Daniel;3197\r
Leyvraz Xavier;3198\r
Lhopitallier Loïc;3199\r
L'Huillier Arnaud;3200\r
Liandrat Sophie;3201\r
Liard Pierre;3202\r
Liard Yannick;3203\r
Liberek Vincent;3204\r
Lidsky Déborah;3205\r
Liebeskind Bernard;3206\r
Liengme Nicolas;3207\r
Lienhart Christophe;3208\r
Lienhart Rémi;3209\r
Liernur Thibaut;3210\r
Ligoutsikou Konstantina ;3211\r
Lima Faria Luis;3212\r
Lima Ferreira Kubias Ana Elisa;3213\r
Limonta  Alessandro;3214\r
Linder Arthur;3215\r
Link Ladislav;3216\r
Linker Claude;3217\r
Liot Emilie;3218\r
Lironi Alain;3219\r
Lironi Céline;3220\r
Lironi Marilyne;3221\r
Lison Delphine;3222\r
Lito Silvin;3223\r
Lizé Nathan;3224\r
Llobet Laura;3225\r
Llorente Gandullo Eva;3226\r
Lloret-Linares Célia;3227\r
Lo Cicero Andrea;3228\r
Lo Conte Antonio;3229\r
Locca Yannic Ivan;3230\r
Locher Jean;3231\r
Loiret-Bernal Pierre Cédric;3232\r
Loiseleur Martial;3233\r
Loison Damien;3234\r
Loizeau Sylviane;3235\r
Lolachi Sanaz;3236\r
Lombard Thomas;3237\r
Lombardo Gabriele;3238\r
Lombardo Patrick;3239\r
Lomero David;3240\r
Loneux Philippe-Jacques;3241\r
Longagna Chloé;3242\r
Longchamps Henri;3243\r
Longeret Catherine;3244\r
Longhino Valentina;3245\r
Longo Maria Vittoria;3246\r
Loosli Andreas;3247\r
Lopes Manuel;3248\r
Lopez Sarah;3249\r
Lopez-Liuchi José;3250\r
Lorenz Eric;3251\r
Lorenzi  Patrizio;3252\r
Loretan Audrey;3253\r
Lormant Christophe;3254\r
Loron Amaury;3255\r
Loser-Barras Christine;3256\r
Losey Fabienne;3257\r
Loton Hadrien;3258\r
Loudenot Jean-Claude;3259\r
Loudiyi Adnane;3260\r
Loup Richard;3261\r
Loup Sonia;3262\r
Lourenco Joao;3263\r
Low Ian;3264\r
Lübbe Jann;3265\r
Lubrano di Scampamorte Alessandro;3266\r
Lucas Dominique;3267\r
Lucchetta Gabriel;3268\r
Luchetta Bradbury Rachel;3269\r
Luchino Cora;3270\r
Lücker Lise Margrit;3271\r
Luczak Corinne;3272\r
Lüdke Eric;3273\r
Ludovici Valeria;3274\r
Luethi François;3275\r
Lufungula Lokotolo Annie;3276\r
Luis Botija  Gogorcena;3277\r
Luisoni Anne;3278\r
Luks David;3279\r
Lumbreras Areta Marina;3280\r
Luong Thien;3281\r
Lups-Deplaine Catherine;3282\r
Lüscher Virginie;3283\r
Lustenberger Ingrid;3284\r
Lüthi Séverine;3285\r
Lutz  Alexandre;3286\r
Luxury Care Services Nathalie Zumsteg Blanc;3287\r
Luy Hannelore;3288\r
Luya Schmidt Anaïs;3289\r
Luyet Carine;3290\r
Luyet Cédric;3291\r
Luzuy Frank;3292\r
Luzuy Sophie;3293\r
Lyon Xavier-Hugues;3294\r
Lyonnet Coulibaly  Marion;3295\r
Mabboux Jean-René;3296\r
Maby-Mottet Vanessa;3297\r
Macfarlane Rachel;3298\r
Mach Amélie;3299\r
Mach François;3300\r
Mach Nicolas;3301\r
Macheda David;3302\r
Macheret Hubert;3303\r
Machi Paolo;3304\r
Machicao Diego;3305\r
Maciovan Adina Siren;3306\r
Mack Sahar;3307\r
Madani Seyed;3308\r
Madej Emeric;3309\r
Maden Amandine;3310\r
Madi Nasser;3311\r
Madignier Anne-Catherine;3312\r
Madrane Rögner Sofia;3313\r
Maduri Rodolfo;3314\r
Maeder Bernard;3315\r
Maendly Caroline;3316\r
Maggi Duvernay Florence;3317\r
Maggi Florence;3318\r
Maggiore Daniele;3319\r
Magini Giulia;3320\r
Magnani Nadège;3321\r
Magne Eric;3322\r
Magnenat Jean Luc;3323\r
Magnenat Luc;3324\r
Magnenat-Barberat Dominique;3325\r
Magnin Julie;3326\r
Magnin Marc;3327\r
Mahammedi Madij;3328\r
Mahhou Sennouni Fatima;3329\r
Mahinc Laurence;3330\r
Mahitchi Emile;3331\r
Mahler Finn ;3332\r
Mahler Liv;3333\r
Mahler Per Bo ;3334\r
Mahne Elif;3335\r
Mahour Bacha Khoutir;3336\r
Maillard Agnès;3337\r
Maillard Alexia;3338\r
Maillard Anne-Béatrice;3339\r
Maillard Christophe;3340\r
Maillard Dewarrat Géraldine;3341\r
Maillard Jean-Christophe;3342\r
Maillard Lucien;3343\r
Maillat Cédric;3344\r
Mainieri Francesca;3345\r
Maino Paolo;3346\r
Mainta Ismini;3347\r
Maitre Bernadette;3348\r
Maître Sophie;3349\r
Maître Thierry;3350\r
Majchrzak Dromard  Karine ( CMG );3351\r
Majchrzak Dromard Karine;3352\r
Major Attila;3353\r
Makni Amir;3354\r
Makoundou Léa;3355\r
Makoundou Vincent;3356\r
Malacarne - Beltrémieux .;3357\r
Malacarne Sarah;3358\r
Malaval Thierry;3359\r
Malavallon Benjamin;3360\r
Malesevic Natalie;3361\r
Malgouires Fabien;3362\r
Malis Didier;3363\r
Malisse Marie;3364\r
Mally Robert;3365\r
Malmberg Christer;3366\r
Malot Justine;3367\r
Malushaj Luan;3368\r
Mamez Anne-Claire;3369\r
Mampuya Wambaka Ange;3370\r
Manar Saïd;3371\r
Manchuel Joanna;3372\r
Mandra-Zarra Sabrina;3373\r
Mandwewala Suma;3374\r
Maneff Christina;3375\r
Mangin Philippe;3376\r
Manguzzi  Elena;3377\r
Mantegani Alain;3378\r
Mapelli Elisa;3379\r
Maragkoudakis  Christos;3380\r
Maragkoudakis Christos;3381\r
Marangon Nicola;3382\r
Marangon-Rosay Anne;3383\r
Marc Gebelin Stéphanie;3384\r
Marcet Yves;3385\r
Marchal Anne-Laurence;3386\r
Marchal Francis;3387\r
Marci Roberto;3388\r
Marek Aleksandra;3389\r
Marello Noémie;3390\r
Marenco Patrice;3391\r
Marenco Patrice Olivier;3392\r
Marendaz René;3393\r
Maret Alexandre;3394\r
Margain Guénolée;3395\r
Margalith  Jonathan;3396\r
Margni Daniel;3397\r
Margot Sophie;3398\r
Marguerat Isabelle;3399\r
Marguet-Carpentier Elodie;3400\r
Mariani Jean-Pierre;3401\r
Marie Julien;3402\r
Mariéthoz de Halleux Sophie;3403\r
Marinov Ludmil;3404\r
Marion-Waehlti Marie-Claire;3405\r
Mariotti Nicolas;3406\r
Maritato-Brocher Emilia;3407\r
Mariz Nguyen Huan Chi;3408\r
Marjollet Michel;3409\r
Markham Genequand Lydia;3410\r
Märki-Germann Daphné;3411\r
Markoulidaki Anthoula;3412\r
Marolf Arthur;3413\r
Marone Diop Issa Laye;3414\r
Maroun Yacoub Marc;3415\r
Marques De Sousa Raphaela;3416\r
Marra  Pasquale-Franco;3417\r
Marti Alexandre;3418\r
Martigne Magali;3419\r
Martin Du Pan Pruijm Sophie;3420\r
Martin Du Pan Remy;3421\r
Martin Eva;3422\r
Martin Gabrièle;3423\r
Martin Jean-Baptiste;3424\r
Martin Jean-Jacques;3425\r
Martin Medina Maria Jose;3426\r
Martin Rémy;3427\r
Martin Sébastien;3428\r
Martin Sophie;3429\r
Martinelli Pascal;3430\r
Martinez Castaneda Martin;3431\r
Martinez Romain;3432\r
Martinez Thelmo;3433\r
Martinho Grueber Maude - cabinet;3434\r
Martinho Grueber Maude Delphine;3435\r
Martinho Tiago;3436\r
Martinho Tiago (Nyon);3437\r
Martino Antonella;3438\r
Martinou Vincent;3439\r
Martins  Jorge;3440\r
Martins Cristiano;3441\r
Mary Grégoire;3442\r
Mary Jean-Paul;3443\r
Mascitti Pietro;3444\r
Masek Antonin;3445\r
Massa Horace;3446\r
Massera Edy;3447\r
Masset Christine;3448\r
Massfelder Julie;3449\r
Masson Grégoire;3450\r
Masson Raphaël;3451\r
Massonet Yves;3452\r
Masson-Monguzzi Catherine;3453\r
Massot Valérie;3454\r
Mathey-Doret Virginie;3455\r
Mathez Ambre;3456\r
Mathez Christian;3457\r
Mathez-Loïc Fabien;3458\r
Matos Marta;3459\r
Matrai Catherine;3460\r
Mattart Mélanie;3461\r
Mattern Lucien;3462\r
Matute Juan Carlos;3463\r
Mauler Flavien;3464\r
Maurel-Pierotti Anne;3465\r
Maurer Alisa;3466\r
Maurer-Pajic Carolina;3467\r
Mauron Véronique;3468\r
Maury Marie-Hélène;3469\r
Mavromati Maria;3470\r
May Adrien;3471\r
May Daniel;3472\r
May Laurence;3473\r
Mayboroda Ivanna;3474\r
Mayer Cédric;3475\r
Mayer Frank;3476\r
Mayor Grégoire;3477\r
Maziarski Philippe;3478\r
Mazouri Sanae;3479\r
Mazuel Quentin;3480\r
Mazza-Stalder Jesica;3481\r
Mazzetti Sara;3482\r
Mazzola Olivia;3483\r
Mazzolari Adrien;3484\r
Mazzucco Andrea;3485\r
Mbayo Poyo Paul;3486\r
McQuillan Annabel ;3487\r
Meach Francesco;3488\r
Mechahougui Hiba;3489\r
Médecin Assistant Bloc op et Unité F;3490\r
Médecin autre ASMI déduction ASMI contrats LCA;3491\r
Médecin Cantonal (envoyeur) ;3492\r
Médecin CS PLAIES  .;3493\r
Médecin de l'unité  d'observation;3494\r
Médecin des urgences .;3495\r
Médecin Interne Pneumologie .;3496\r
Médecin Modèle  ANF;3497\r
Médecin Modèle  DER2;3498\r
Médecin Modèle  DOU;3499\r
Médecin Modèle  GRD;3500\r
Médecin Modèle  HU;3501\r
Médecin Modèle  MI3;3502\r
Médecin Modéle  MIC;3503\r
Médecin Modèle  NFS7;3504\r
Médecin Modèle  PLA;3505\r
Médecin Modèle  SYB;3506\r
Médecin Modèle 000;3507\r
Médecin Modèle AER ;3508\r
Médecin Modèle AFD;3509\r
Médecin Modèle AFF ;3510\r
Médecin Modèle AFS;3511\r
Médecin Modèle AFU;3512\r
Médecin Modèle AFV;3513\r
Médecin Modèle AN5;3514\r
Médecin Modèle ANG;3515\r
Médecin Modèle ANT ;3516\r
Médecin Modèle ASE;3517\r
Médecin Modèle ASF;3518\r
Médecin Modéle BEN ;3519\r
Médecin Modèle BEN ;3520\r
Médecin Modèle BER ;3521\r
Médecin Modèle BET;3522\r
Médecin Modèle CAF;3523\r
Médecin Modèle CAR ;3524\r
Médecin Modèle CAT ;3525\r
Médecin Modèle CAY ;3526\r
Médecin Modèle CMC ;3527\r
Médecin Modèle CMM;3528\r
Médecin Modèle Coro;3529\r
Médecin Modèle CSMP;3530\r
Médecin Modèle CUP Check-up ophalmo;3531\r
Médecin Modèle CVZ ;3532\r
Médecin Modèle CZC ;3533\r
Médecin Modèle DEL;3534\r
Médecin Modèle DER;3535\r
Médecin Modèle DIA;3536\r
Médecin Modèle DIE;3537\r
Médecin Modèle ERG;3538\r
Médecin Modèle ETE ;3539\r
Médecin Modèle FFU;3540\r
Médecin Modèle FNE;3541\r
Médecin Modèle FZW ;3542\r
Médecin Modèle GAR;3543\r
Médecin Modèle HNF;3544\r
Médecin Modèle HNU;3545\r
Médecin Modèle HSI;3546\r
Médecin Modèle HUN - MICI;3547\r
Médecin Modèle HVI;3548\r
Médecin Modèle HYP2;3549\r
Médecin Modèle IRM;3550\r
Médecin Modèle LEU;3551\r
Médecin Modéle LEV;3552\r
Médecin Modèle MAH;3553\r
Médecin Modèle MAN;3554\r
Médecin Modèle MEG ;3555\r
Médecin Modèle MEX;3556\r
Médecin Modèle MFU;3557\r
Médecin Modéle MGM;3558\r
Médecin Modèle MI2;3559\r
Médecin Modèle MMT;3560\r
Médecin Modèle MNF;3561\r
Médecin Modèle MRA;3562\r
Médecin Modèle MSE;3563\r
Médecin Modèle MSP;3564\r
Médecin Modèle MSU;3565\r
Médecin Modèle MTS;3566\r
Médecin Modèle NAC;3567\r
Médecin Modèle NEU;3568\r
Médecin Modèle NF1;3569\r
Médecin Modèle NF7;3570\r
Médecin Modèle NFS;3571\r
Médecin Modèle NFU;3572\r
Médecin Modèle NP;3573\r
Médecin Modèle NPEP;3574\r
Médecin Modèle NRL Neurologues;3575\r
Médecin Modèle NSF ;3576\r
Médecin Modèle NSI;3577\r
Médecin Modèle NUC ;3578\r
Médecin Modèle NUT;3579\r
Médecin Modèle OLY Swiss Olympic;3580\r
Médecin Modéle ORL ;3581\r
Médecin Modèle P16 ;3582\r
Médecin Modèle PED;3583\r
Médecin Modèle PET-CT ;3584\r
Médecin Modèle PHY;3585\r
Médecin Modèle PNE;3586\r
Médecin Modèle PNL;3587\r
Médecin Modèle PNM;3588\r
Médecin Modèle PRP;3589\r
Médecin Modèle PRPv2;3590\r
Médecin Modèle PSN;3591\r
Médecin Modèle PSY;3592\r
Médecin Modèle PTS;3593\r
Médecin Modèle RAD Radiologie;3594\r
Médecin Modèle RHU ;3595\r
Médecin Modèle RTM FV NF ;3596\r
Médecin Modèle SAY2;3597\r
Médecin Modèle SEF;3598\r
Médecin Modèle SEI;3599\r
Médecin Modèle SEM;3600\r
Médecin Modèle Séniors SUM;3601\r
Médecin Modèle SIE;3602\r
Médecin Modèle SIF;3603\r
Médecin Modèle SSO;3604\r
Médecin Modèle STT ;3605\r
Médecin Modèle SUS ;3606\r
Médecin Modèle TAF;3607\r
Médecin Modèle TFU ;3608\r
Médecin Modèle TMS;3609\r
Médecin modèle TSF;3610\r
Médecin Modèle TSI;3611\r
Médecin Modèle TVI;3612\r
Médecin Modèle TZW ;3613\r
Médecin Modèle WEL ;3614\r
Médecin Modéle ZEN;3615\r
Medecin sans honoraires (corr);3616\r
Medecin Soins Intensifs .;3617\r
Medecine cardio-pulmonaire .;3618\r
Médecine du Sport (Interne);3619\r
Médecine du Sport III;3620\r
Médecine du Sport VII;3621\r
Médecine du Sport VII - Nyon;3622\r
Médecine du Sport VIII;3623\r
Médecine interne - Drs Kherad, Petriccioli, Ritz;3624\r
Médecine nucléaire HUG ;3625\r
Médecine oncologie .;3626\r
Médecins HUG oncologie;3627\r
Medical EMAZ Connexion ;3628\r
Medinger Sadowski Carole;3629\r
Megevand Christophe;3630\r
Megevand Eric;3631\r
Megevand Jean-Marie;3632\r
Mégevand Lador Chloé;3633\r
Mégevand Pierre;3634\r
Mégevand Vladimir;3635\r
Mehl-Fokianos Christina;3636\r
Meier Francis;3637\r
Meier-Zeh Félix;3638\r
Meiltz Alexandre;3639\r
Meister Rafael;3640\r
Meizoz Jacques ;3641\r
Mejean Virginie;3642\r
Mejicanos Gonzalez Mario Roberto;3643\r
Mekarcha  Niels;3644\r
Mekideche Abdelhafid;3645\r
Mekoguem Carine;3646\r
Melchior-Capiot Jocelyne ;3647\r
Melis Karyn;3648\r
Mellin Douchy Géraldine;3649\r
Melnic Petronela;3650\r
Membrez Philippe;3651\r
Mena Vana;3652\r
Menard Caroline;3653\r
Mendez Purificacion;3654\r
Menegay  Christiane;3655\r
Ménétré Pierre;3656\r
Menetrey Jacques;3657\r
Ménétrey Régis ;3658\r
Menghrajani Pareesa;3659\r
Mengin Matthieu;3660\r
Mengu Ma Tooh Jonathan;3661\r
Menouillard Olivier;3662\r
Menouret Emmanuel;3663\r
Menzel-Courgeon Julia;3664\r
Mérandon Solène;3665\r
Merbaï Djouadi Sabrina;3666\r
Mercanti Valentina;3667\r
Mercier Eric;3668\r
Merckaert Sophie;3669\r
Merckling Luana;3670\r
Merglen Arnaud;3671\r
Merglen Nelline;3672\r
Meri Cortes Francesca;3673\r
Merienne Théo;3674\r
Merier Gilles;3675\r
Mérillon Camille;3676\r
Merine Sassi Mohamed;3677\r
Merle Geoffrey;3678\r
Merlo Adrian;3679\r
Mermillod-Falk Nadja;3680\r
Mermod Maxime;3681\r
Merrot Olivier;3682\r
Merz Victoire;3683\r
Mesgarzadeh Massoud;3684\r
Meskaldji  Mahacine;3685\r
Messe Maria;3686\r
Messe Romain;3687\r
Messerer Mahmoud ;3688\r
Messerli Guy;3689\r
Messerli Kristell;3690\r
Messmer Noémi;3691\r
Metenier Corinne;3692\r
Metral Johanna;3693\r
Métraux Noëlle;3694\r
Metroz Audrey;3695\r
Metzger Antoine;3696\r
Metzger Jacques-Thierry;3697\r
Metzger Philippe;3698\r
Meugnier Marie;3699\r
Meurette Guillaume;3700\r
Meusy Benoït;3701\r
Meyer De Stadelhofen Léo;3702\r
Meyer Elin;3703\r
Meyer Harbarth Marianne;3704\r
Meyer Jérémy;3705\r
Meyer Patrick;3706\r
Meyer Philippe;3707\r
Meyer Sylvain;3708\r
Meyer Ursula;3709\r
Meyer Wolfgang;3710\r
Meyer-Hamme Ulrike;3711\r
Meynard Anne;3712\r
Mialle Maelane;3713\r
Mialon Anaïs;3714\r
Miauton Chloé;3715\r
Michaelis Conus Karin;3716\r
Michalon Arnaud;3717\r
Michaud Alain;3718\r
Michaut Laëtitia;3719\r
Micheels Patrick;3720\r
Michel Anne-Laure;3721\r
Michel Beat;3722\r
Michel Christophe;3723\r
Michel Jacky;3724\r
Michel Joëlle;3725\r
Michel Yann;3726\r
Michel-De Blasi Elena;3727\r
Michelet Pierre-Raphaël;3728\r
Michelet Thomas;3729\r
Micheli Holloway Clementine;3730\r
Micheli Philippe;3731\r
Michels Chloé;3732\r
Michetti Pierre;3733\r
Migeot Jean Baptiste;3734\r
Mignot Guinet Benedicte;3735\r
Miguet Philippe;3736\r
Milani David;3737\r
Millet Hélène;3738\r
Millière Séverine;3739\r
Millon Pauline;3740\r
Milusheva Vanya;3741\r
Mimouni Nicolas;3742\r
Minciu Octavian;3743\r
Minetto Dany;3744\r
Ming Azevedo Pedro;3745\r
Minghelli Gianni;3746\r
Minier Pierre;3747\r
Mino Miriame;3748\r
Mirlesse Nicolas;3749\r
Mirzoyan Boris;3750\r
Miserez Zaugg Corinne;3751\r
Misic Mladen;3752\r
Missana Adriana;3753\r
Mission du Koweit ;3754\r
Mission Qatar Genève ;3755\r
Mivielle Claire;3756\r
Mizuno Aki;3757\r
Mock Pascal;3758\r
Mock Stéphane;3759\r
Modarressi  Ali;3760\r
Moenne Loccoz Alix;3761\r
Moeri Michaël;3762\r
Mogenet Anne-Claire;3763\r
Mogenet Pierre-Antoine;3764\r
Mohadjerine Ali-Reza;3765\r
Mohamed Rania;3766\r
Moiroud Virginie;3767\r
Moix Paul-André;3768\r
Molcard Antoine;3769\r
Molette Catherine;3770\r
Molinard-Chenu Aude;3771\r
Molins Laureano;3772\r
Mollet Emmanuel;3773\r
Mollica Caterina;3774\r
Molliqaj Granit;3775\r
Momjian Armen;3776\r
Momjian Shahan;3777\r
Momjian-Mayor Isabelle;3778\r
Moneme Ali;3779\r
Monfort Isabelle;3780\r
Monfront Hervé;3781\r
Monico Cyrill;3782\r
Monico Pierre;3783\r
Monier Clémence;3784\r
Monig Stefan;3785\r
Monigel Hanga;3786\r
Monin Emile;3787\r
Monnard Simon Michel;3788\r
Monney Gilbert;3789\r
Monney May;3790\r
Monnier Matthieu;3791\r
Monnier Sindy;3792\r
Monnier Yan;3793\r
Monsigny Maurice;3794\r
Montandon Denys;3795\r
Montandon Valérie;3796\r
Montauzé Jérémie;3797\r
Montavon-Salomon Nicole;3798\r
Monteil Stéphane;3799\r
Monteiro Castro Carlos;3800\r
Monteiro Irène;3801\r
Montemurro Michael;3802\r
Montessuit Michel;3803\r
Montoro Oscar;3804\r
Moos Edoardo;3805\r
Morales Axel;3806\r
Morales Boscan Alexis;3807\r
Morales Michel Ange;3808\r
Morales Raphaël;3809\r
Morand Marc;3810\r
Morand Olga;3811\r
Morand Renault Aline;3812\r
Morandi Eléonore;3813\r
Morard Isabelle;3814\r
Morati Chafika;3815\r
Morawska Ghizlaine ;3816\r
Mordillat Laurence;3817\r
Moreau Aurélie;3818\r
Moreau Thomas;3819\r
Moreillon Maxime;3820\r
Moreillon Maxime (Nyon);3821\r
Morel  Yves;3822\r
Morel Abram;3823\r
Morel Jérémy;3824\r
Morel Philippe;3825\r
Morel Vincent;3826\r
Morel-Detot Anne;3827\r
Morère Pierre-Henri;3828\r
Moret Emmanuelle;3829\r
Moret Philippe;3830\r
Moret Serge;3831\r
Moretti Francesco;3832\r
Morice François;3833\r
Morier-Genoud Stéphane;3834\r
Moritz Virginie;3835\r
Mosar Francesca;3836\r
Moschouri Eleni;3837\r
Moser Michael;3838\r
Moser Nicolas;3839\r
Mossaz Alexandre;3840\r
Mossaz Léonard;3841\r
Motamed Sandrine;3842\r
Motta Filippo;3843\r
Mottaz Alain;3844\r
Mottaz Michel;3845\r
Mottu Alexandre;3846\r
Mottu François;3847\r
Mottu Isabelle;3848\r
Mouawia Ibrahim;3849\r
Moubayed Hayssam;3850\r
Mouco Chaves Stéphanie;3851\r
Mouette Franck;3852\r
Mouga Kamal Nissrine;3853\r
Mouhsine Elyasid;3854\r
Moukoko Eyoum Jacques;3855\r
Moulin Cyril;3856\r
Moulin Kelly;3857\r
Mounier Elodie;3858\r
Mourad Abdallah;3859\r
Mouron Philippe;3860\r
Mouron-Hryciuk Julie;3861\r
Moursli-Goual Fouzia;3862\r
Mousset Germain;3863\r
Mousset Germain (Harmony);3864\r
Moustafov-Alpman Sabri;3865\r
Mouthon Alexis;3866\r
Moutinot Bérénice;3867\r
Movarekhi Hossen;3868\r
Movarekhi Sina Michel;3869\r
Moy Joëlle;3870\r
Mraihi Hamza;3871\r
Mroue Said;3872\r
Mudry Albert;3873\r
Mueller Saegesser Gabriela;3874\r
Muff Guillaume;3875\r
Müggler Kevin;3876\r
Mugnai Damiano;3877\r
Mugnier Mathis;3878\r
Mugnier Maxime;3879\r
Muhlstein-Barasche Judith;3880\r
Muji Afërdita;3881\r
Müller Andrea;3882\r
Müller Halima;3883\r
Müller Hubertus Fritz Georg;3884\r
Munaretto Francesco;3885\r
Munier Alain;3886\r
Muniz Guimaraes Celso;3887\r
Munoz Carlos-Fernando;3888\r
Munoz Natalia;3889\r
Muradbegovic Edin;3890\r
Muradbegovic Jennifer;3891\r
Muradbegovic Mirza;3892\r
Mureseanu  Laura-Alexandra;3893\r
Murisier François;3894\r
Murith Conus Célestine;3895\r
Murith Nicolas;3896\r
Mürner-Aeschbacher Rosette;3897\r
Musumeci Enrico;3898\r
Musy de Coulon Pierre-André;3899\r
Mutar Hadile;3900\r
Myers Catherine;3901\r
Myers Patrick;3902\r
Myers Peter;3903\r
Mykoniati Sofia;3904\r
Nabet Michaël;3905\r
Nachit Marine;3906\r
Nachmias Lucy;3907\r
Nadaud Toussaint;3908\r
Naeseh Wael;3909\r
Naggar Leslie;3910\r
Nagy Hulliger Monika;3911\r
Nahon Laurence;3912\r
Nahum Solange Raquel;3913\r
Nail Laura;3914\r
Naim Jean-Pierre;3915\r
Naim Rodriguez Nadim;3916\r
Naïmi Léonard;3917\r
Naimi Niloufar;3918\r
Naimi Roxane;3919\r
Najar-Giroud Alexandra;3920\r
Nakaluba Gondwe Manda;3921\r
Nanchen David;3922\r
Nancoz Olivier;3923\r
Nançoz Olivier;3924\r
Nani Mariano ;3925\r
Napoléon Bertrand;3926\r
Nardo Patrizia;3927\r
Nargi Fernando;3928\r
Nasce Alberto;3929\r
Navarria-Forney Isabelle;3930\r
Naville Arnaud;3931\r
Nawej Olivier;3932\r
Nay Camille;3933\r
Nchimi  Christine;3934\r
Neeser Marie-Therese;3935\r
Negulescu Raluca;3936\r
Nemitz Nicolas;3937\r
Nencha Umberto;3938\r
Neroladaki Angeliki;3939\r
Neroni Mauro ;3940\r
Nesa Kristiana;3941\r
Neumann Nicolas;3942\r
Neuroknife Champion Benzaquen Levivier;3943\r
Neury David;3944\r
Neuvillers Cecile;3945\r
Neveu Aurélie;3946\r
Newsom Nancy ;3947\r
Newton Letovanec Anita;3948\r
Neyroud Serge;3949\r
Ngbilo Cédric;3950\r
Ngo Phalkun;3951\r
Ngo Trieu Minh Hai;3952\r
Nguiffo Boyom Jacques;3953\r
Nguyen Duc-Hui;3954\r
Nguyen Howles Maï;3955\r
Nguyen Kim Hoang-Nam;3956\r
Nguyen Marie-Christine;3957\r
Nguyen Minh-Chanh;3958\r
Nguyen Quang Guy;3959\r
Nguyen Than Phieu Yen;3960\r
Nguyen Toan-Luc;3961\r
Nguyen Vân-Dài;3962\r
Nguyen Vinh-Kim;3963\r
Nguyen-Tang Thai;3964\r
Nica Alexandru;3965\r
Nicastro Nicolas;3966\r
Nichita Cristina ;3967\r
Nichols  Lucille;3968\r
Niclauss Nadja;3969\r
Nicol Clément;3970\r
Nicolae Andrei Mihai;3971\r
Nicolas Sophie;3972\r
Nicolet Thierry;3973\r
Nicolet-Chatelain Geneviève;3974\r
Nicollier Ludivine;3975\r
Nicollier-Fahrni Anne;3976\r
Nicora Christine;3977\r
Nicoucar Keyvan;3978\r
Nicoud Philippe;3979\r
Niculescu Maria-Viviana;3980\r
Niederhäuser Julien;3981\r
Niederhauser Laurène;3982\r
Niedree Prune;3983\r
Nieto Nathalie;3984\r
Nigolian Sisvan;3985\r
Nigro Stimato Vittoria;3986\r
Nikolakopoulos  Konstantinos ;3987\r
Nikolaou Charalampia;3988\r
Nikolic Damjan;3989\r
Niksic Laurent;3990\r
Niksic-Stuber Viviane;3991\r
Niyibizi Eva;3992\r
Nkoulou René;3993\r
Noack Patrik;3994\r
Nobahar Corke Mahbiz;3995\r
Noble Jacques (N 3762.25);3996\r
Noble Stéphane;3997\r
Noël Jade-Aurore;3998\r
Nogueira Loures Vania;3999\r
Nogues Alexandre;4000\r
Nollet Marine;4001\r
Nom;4002\r
Nooristani Mohammad Younos;4003\r
Norberg Michael;4004\r
Nordback Sophie;4005\r
Nordet David;4006\r
Notaridis Grigorios;4007\r
Nouri Aria;4008\r
Novarin Johanne;4009\r
Novello Quentin;4010\r
Novier Alain;4011\r
Nowak Alexandra;4012\r
Nozan Zohreh;4013\r
Nozic Adnan;4014\r
Nsangu Mampasi Mireille;4015\r
Ntawuruhunga Emmanuel;4016\r
Nuber Yoann;4017\r
Nur Nasrah;4018\r
Nusbaum Nicolas;4019\r
Nusbaumer Chanial Christine;4020\r
Nyffeler  Richard;4021\r
Nyffenegger Laurent;4022\r
Nyikus Vince;4023\r
Nykiel Grégory;4024\r
N'Yobo Stéphanie;4025\r
Nzale Nicolas;4026\r
Obrenovic Mihailo;4027\r
Obrist Elodie;4028\r
Ochs Nicolas;4029\r
O'Connor Sean;4030\r
Oddou Christel;4031\r
Oderbolz Kevin;4032\r
Odier Luc;4033\r
Ödman Micaela;4034\r
Ody Bernard;4035\r
Oeggerli Edgar José;4036\r
Oeggerli Louis Henri;4037\r
Oggier Stéphane;4038\r
O'Hayon Naïm Rebecca;4039\r
Olario Carmen;4040\r
Oldani Graziano;4041\r
Oleineac Eugeniu;4042\r
Oliveira de Almeida Fonseca Laura do Mar;4043\r
Olivier Jacques;4044\r
Olivier Jean-Pierre;4045\r
Olivier Timothée;4046\r
Olivieri Juan;4047\r
Ollo Diana;4048\r
Ollo Diana -  DO.Gastroentérologie;4049\r
Olteanu Dorel Ovidiu;4050\r
Omarini Laurence;4051\r
Omrani Fatma ;4052\r
Ongaro Marie;4053\r
Onrubia Xavier;4054\r
Oppikofer-Doody Anne-Marie;4055\r
Oppliger Roland;4056\r
Orana Blerim;4057\r
Oranges Carlo;4058\r
Orbegozo Marie;4059\r
Orci Lorenzo;4060\r
Oreste Yannick;4061\r
Orfeuvre Benoit;4062\r
Oria Inès;4063\r
Ornon Grégory;4064\r
Orset Pascal;4065\r
Orsi Toth Lorinc;4066\r
Ortelli Giordano;4067\r
Ortigueira Monica;4068\r
Ortiz Penarrocha Mercedes;4069\r
Ory Gaëlle Dominique Suzanne;4070\r
Ory Jean-Marc;4071\r
Osman Gholam-Omar;4072\r
Osman Sarah;4073\r
Ostermann Sandrine;4074\r
Osterwalder Marina;4075\r
Otal-Pradas Valentina;4076\r
Ott Christian;4077\r
Ott Etienne;4078\r
Otten Philippe ;4079\r
Otterström Claire;4080\r
Ottesen Sandrine;4081\r
Ottogalli Vanessa;4082\r
Ouabas Adel;4083\r
Ouardiri Marti Yasmina;4084\r
Ouared Dalila;4085\r
Oudar Philippe;4086\r
Oueghlani Bekri Evelyne;4087\r
Oughlis Yacine;4088\r
Oulhaci De Saussure Wassila;4089\r
Oumarou Gaston;4090\r
Oury Anne Pascale;4091\r
Overton Venet Mary;4092\r
Öztürk Mehmet;4093\r
Paccaud Catherine;4094\r
Paccaud Joris;4095\r
Paccaud Yan;4096\r
Pacetti Graziella;4097\r
Pache Camille;4098\r
Pacheco Oller Nuria;4099\r
Padayachy Alexia;4100\r
Padilla del Rey María Luz;4101\r
Padlina Ivan;4102\r
Pagani Alessio;4103\r
Pagano François;4104\r
Pagin Simon;4105\r
Pagkalos Ioannis;4106\r
Pahud Bernard;4107\r
Paiano Sandra;4108\r
Paillard Laurent;4109\r
Païta Franck;4110\r
Paizi Jenny;4111\r
Palanque Stéphane;4112\r
Paley Jacques;4113\r
Palhais Nuno;4114\r
Paliard-Franco Sabine;4115\r
Pallud Didier;4116\r
Pambet Anne-Claire;4117\r
Panarello Francesca;4118\r
Panos Aristotelis;4119\r
Pant Samaksha;4120\r
Paoletta Michel;4121\r
Paolisso Lucie;4122\r
Paounov Serafim;4123\r
Papachristou Christos ;4124\r
Papadimitriou Georges;4125\r
Papadopoulou Domniki;4126\r
Papadopoulou Maria-Aikaterini;4127\r
Papaefthymiou Olga;4128\r
Papaloizos Michael;4129\r
Papaloïzos Michaël;4130\r
Papanastasioou Eirini;4131\r
Papazyan Jean-Pierre;4132\r
Papillard Matthieu;4133\r
Papillon Frédéric;4134\r
Papis Sébastien;4135\r
Papis Thibault;4136\r
Paratte Géraldine;4137\r
Paratte Jacques;4138\r
Paratte Philippe;4139\r
Paravy Adrien;4140\r
Parel Yann;4141\r
Parillo Silvestro;4142\r
Paris Samuel;4143\r
Paris Valérie;4144\r
Park Chan-Il;4145\r
Parsai Djahanguir;4146\r
Parsai Jeannine;4147\r
Partouche Michel;4148\r
Parvet Jean;4149\r
Parwani Massoud;4150\r
Pasca Constanta;4151\r
Pasche Antoine;4152\r
Pasche Mélanie;4153\r
Paschoud Anca;4154\r
Pascu Mircea;4155\r
Pascual Andres;4156\r
Pasqualini Jousson Claudine;4157\r
Pasquier Jean;4158\r
Passanante Jérôme;4159\r
Passaquay Frédéric ;4160\r
Passarin Olga;4161\r
Pasteur Rémery Amalia-Elena;4162\r
Pastor Damien;4163\r
Pasty Simon;4164\r
Patizel Hélène;4165\r
Patri Michelle;4166\r
Patroni Alexia;4167\r
Patry Michel;4168\r
Patte Cindy;4169\r
Pauchard  Guy;4170\r
Paul Sophie;4171\r
Pauthier Alain;4172\r
Pavlidou Evangelia;4173\r
Pavlousek Andre;4174\r
Pavlovic Alexander;4175\r
Payen Isabelle;4176\r
Payot Podevin Caroline;4177\r
Peccoux Levorin Céline;4178\r
Peccoux Marie-Laure;4179\r
Pechalat Philippe;4180\r
Pechère Marc;4181\r
Pechère-Bertschi Antoinette;4182\r
Peclard  Marie;4183\r
Peclard Marie;4184\r
Pecoul Victor;4185\r
Pedat Jeanne;4186\r
Pedrazzini  Baptiste;4187\r
Peduzzi Jean Nicolas ;4188\r
Pehlivan Mücahit Salim;4189\r
Peiris Waser Nyali;4190\r
Peixoto Oliveira Nelson;4191\r
Pelet Daniel;4192\r
Pelet François;4193\r
Pelissier Stéphanie;4194\r
Pellaton Saskia;4195\r
Pelle Sandra;4196\r
Pellegrinelli Gianmaria;4197\r
Pellenc Quentin;4198\r
Pelletier Florence;4199\r
Pellicciotta Sylvie;4200\r
Pellissier Michel;4201\r
Pellissier Stéphane-Arthur;4202\r
Pelloux Corinne;4203\r
Pelloux Daniel;4204\r
Pelluet Vincent;4205\r
Peltier Adrien;4206\r
Peltzer Jörg;4207\r
Penet Nicolas;4208\r
Pennisi Lemy;4209\r
Perard-Delecluse Robin;4210\r
Perbet Emilie;4211\r
Perdrix Jean;4212\r
Pereira Julie;4213\r
Pereira Miozzari  Anne Catherine;4214\r
Perentes Jean Yannis;4215\r
Perez Codesido Sabela;4216\r
Pérez Gonzalez Estefania ;4217\r
Perez Jean-Baptiste;4218\r
Perez Lyat;4219\r
Perez Mora Candela;4220\r
Perez Patrick;4221\r
Pérez Valdivia Arlenys;4222\r
Perez-Bayas Estrella;4223\r
Perez-Vasseur Virginie;4224\r
Perin Sandrine;4225\r
Perin-Minisini Maria-Jole;4226\r
Perler Camille_ hon. privés p/Gardes;4227\r
Perles Tracy;4228\r
Permanence Médicale ;4229\r
Pernet Anik;4230\r
Pernet Manuel;4231\r
Pernin Thomas;4232\r
Perogamvros Lampros;4233\r
Perolini Sarah;4234\r
Perone Nicolas;4235\r
Perreau Fanny;4236\r
Perrelet Antoine;4237\r
Perrelet Isabelle;4238\r
Perren John;4239\r
Perrenoud Christian;4240\r
Perren-Pinton Catherine;4241\r
Perret Ioan;4242\r
Perret Laurent;4243\r
Perret Nicolas;4244\r
Perret Xavier;4245\r
Perreten Niklaus;4246\r
Perrier  Michel;4247\r
Perrier-David Patrick;4248\r
Perrig Stephen;4249\r
Perrin Emmanuelle;4250\r
Perrin Etienne;4251\r
Perrin Nils;4252\r
Perrin-Albu Anne;4253\r
Perrot Pauline;4254\r
Perrot Pierre-Alain;4255\r
Perrotton Marie;4256\r
Perruchoud Christophe;4257\r
Persoz Christophe;4258\r
Péry Jean-Christophe;4259\r
Pessina Pierre-Alain;4260\r
Pestana Gomez Ana;4261\r
Peter Robin;4262\r
Peter-Berner Clarisse;4263\r
Peterlini-Maillet Johanna;4264\r
Peter-Riesch Bettina;4265\r
Peterschmitt Dominique;4266\r
Petersen-Ivacic Ingrid;4267\r
Petignat Patrick;4268\r
Petit Bizzocchi Isabelle;4269\r
Petit Esther;4270\r
Petit Gerard;4271\r
Petit Helène;4272\r
Petit Hélène;4273\r
Petit Laetitia-Marie;4274\r
Petit Laetitia-Marie - cabinet;4275\r
Petit-Bourgeois David;4276\r
Petitpierre Bernard;4277\r
Petitpierre Marc Ernst;4278\r
Petitpierre Nicolas;4279\r
Petitpierre Stéphanie;4280\r
Petrasova Barbora;4281\r
Petreska Ivana;4282\r
Petri Daidie Isabelle;4283\r
Petriccioli Nicole;4284\r
Petropoulos Ioannis;4285\r
Petrou Ilias;4286\r
Petrovic Dusan;4287\r
Peyraud Nicolas;4288\r
Peyret Blandine;4289\r
Peyret Gilles;4290\r
Peyrilles Arnaud;4291\r
Peysson Remi;4292\r
Pezzoli Reto;4293\r
Pezzoni Agathe;4294\r
Pfaender Sascha;4295\r
Pfennig Didier;4296\r
Pfister Gerard;4297\r
Pfister Thomas;4298\r
Pham Bac Binh;4299\r
Phan Thanh Thùy Châu;4300\r
Philippe Alix;4301\r
Philippe Jacques;4302\r
Philippe Marie-Laure;4303\r
Philippe Mélanie;4304\r
Philippe-Vasiliu Monica;4305\r
Philippin Odile;4306\r
Physio Cardio-Respiratoire Hôpital de La Tour;4307\r
Physiothéraphie Numéro général;4308\r
Piasecki Krzysztof ;4309\r
Picard Fabienne;4310\r
Picard Valérie;4311\r
Picard-Trabelsi Shahar;4312\r
Piccinin Pascal;4313\r
Pichard Claude;4314\r
Piclin Florian;4315\r
Pictet  Hiba;4316\r
Piellard Thierry;4317\r
Pierobon Filippo;4318\r
Pierrisnard Arthur;4319\r
Pierrisnard Marie-Amélie;4320\r
Pierron Nelsie;4321\r
Pierrot Laetitia;4322\r
Pignard Elodie;4323\r
Piguet Emmanuel;4324\r
Piguet Valérie;4325\r
Pilet Lucie;4326\r
Piletta Pierre;4327\r
Pillant Virginie;4328\r
Piller Claramunt Murielle;4329\r
Piller Manfred;4330\r
Piller Yves;4331\r
Pilloud Jérôme;4332\r
Pilotto  Jean-Marc;4333\r
Pilotto Pierre-Antoine;4334\r
Pin Anne-Sophie;4335\r
Pin Cristina;4336\r
Pinatel Baptiste;4337\r
Pinaton Agnès;4338\r
Pinaud Kim;4339\r
Pinget Laurent;4340\r
Pinguet Olivier;4341\r
Pinosch Selina;4342\r
Pinter Tamas;4343\r
Pinto Ana;4344\r
Pinto Joana;4345\r
Pion Olivier;4346\r
Piotton Sébastien ;4347\r
Piotton Sébastien (Nyon);4348\r
Piquemal Bruno;4349\r
Piqueres Gardet Sylvie;4350\r
Pirek Miroslav;4351\r
Pires Antonio;4352\r
Pires Rita;4353\r
Pirollet Alexandre;4354\r
Pirson Leopold;4355\r
Pisaruto Marisa;4356\r
Piselli Stéphane;4357\r
Pissas Julien;4358\r
Pitchon Suzanne;4359\r
Pittet Vincent;4360\r
Pittet-Cuenod Brigitte;4361\r
Pittet-Maitre Bénédicte;4362\r
Plojoux Jérôme;4363\r
Plojoux Olivier;4364\r
Pluchino Nicola;4365\r
Pochon Nicolas;4366\r
Pocquet Korine;4367\r
Poglia David;4368\r
Poglia Pietro;4369\r
Polchlopek Blasiak Karolina ;4370\r
Polet Damien;4371\r
Poli Lauriane;4372\r
Polic Nemanja;4373\r
Polikar Ralf;4374\r
Polikowski Marc;4375\r
Politi Sofia;4376\r
Polla Luigi Leonardo;4377\r
Poloni Barbara;4378\r
Polymenidi-Morel Ioanna;4379\r
Ponce Olivier;4380\r
Poncet Gilbert;4381\r
Ponchet Claire;4382\r
Poncini Gabriele;4383\r
Ponnaz Laura;4384\r
Ponnelle-Poulin Alice;4385\r
Pons Philippe;4386\r
Ponsot Ondine;4387\r
Ponte Belén;4388\r
Pontier Frédérique;4389\r
Pool 724 ;4390\r
Pool ASMI  Anesthésistes;4391\r
Pool ASMI Médecins autres;4392\r
Pool Etage Pédiatrie (PEP);4393\r
Pool Interne PED (PIP);4394\r
Pool Maternité Pédiatrie (PMP);4395\r
Pool Senior NEO (PSN);4396\r
Pool Senior PED (PSP);4397\r
Pop Iulian Andrei;4398\r
Popa Paula;4399\r
Popescu Christian;4400\r
Popescu Sabine;4401\r
Popescu Silvia;4402\r
Popescu Stefan;4403\r
Popov Milen;4404\r
Popova Nadya;4405\r
Porchet François;4406\r
Porco Hélène;4407\r
Porta Thierry;4408\r
Porte Lionel;4409\r
Portela  Marina;4410\r
Portier Michel;4411\r
Posternak Laurence;4412\r
Potin Mathieu;4413\r
Potric Ana;4414\r
Potterat Mélissa;4415\r
Pottier Philippe;4416\r
Poupon Muriel;4417\r
Pournaras Dinichert Constance;4418\r
Pourret Rémy;4419\r
Pralong  Jacques;4420\r
Pralong / Tabouret Composition corporelle;4421\r
Pralong François;4422\r
Praplan Patrick;4423\r
Praz Elodie;4424\r
Praz Jean-Olivier;4425\r
Praz Laurent;4426\r
Préaubert Xavier;4427\r
Preiss Stefan;4428\r
Preitner Jean;4429\r
Premium Switzerland Peter Zombori;4430\r
Prevot Marianne;4431\r
Prina Aline Larue;4432\r
Prina Laurence;4433\r
Prina Laurence ( CMG );4434\r
Prina-Rosso Aline;4435\r
Princé Caroline;4436\r
Prince-dit-Clottu Hélène;4437\r
Prins Christa;4438\r
Pripp Charlotte;4439\r
Privé Barbara;4440\r
Probst Clara;4441\r
Procopiou Michel;4442\r
Prod'Hom Blaise;4443\r
Prod'Hom Marc;4444\r
Prodolliet Aristide;4445\r
Proust Jacques;4446\r
Providoli Romeo;4447\r
Prudhon-Chatelain Gilles;4448\r
Prues-Latour Valerie;4449\r
Prunier André;4450\r
Pruvot Etienne;4451\r
Psatha  Vasiliki ;4452\r
Puczkowski Pavel;4453\r
Pugin Deborah;4454\r
Pugliesi Rinaldi Angela;4455\r
Pugliesi Rinaldi Angela (Carouge);4456\r
Pugliesi Rinaldi Angela _ hon. pour gardes;4457\r
Pujol-Morand Anne;4458\r
Pupier Sabine;4459\r
Puthod Emilie;4460\r
Py Agathe;4461\r
Py Pierre;4462\r
Qailouli Saïd;4463\r
Qineticare Limited Trish Robson;4464\r
Quadri Cloé;4465\r
Quadri Lucia;4466\r
Quaegebeur Alice;4467\r
Quantinet Céline;4468\r
Quaranta Delphine;4469\r
Quarenghi Massimo;4470\r
Quartenoud Benoît;4471\r
Queloz Sébastien;4472\r
Quental Daniela;4473\r
Quercia Kelly;4474\r
Quibel Thibaud;4475\r
Quinet Marie-Laure;4476\r
Quinette Alice;4477\r
Quinodoz Didier;4478\r
Quinodoz Pierre;4479\r
Quintero Alexandre;4480\r
Quiroz Heigs Pfeffer Milagros;4481\r
Quiroz Pfeffer Milagros;4482\r
Raad Emmanuel;4483\r
Raad Razah;4484\r
Rabaeus Mikael;4485\r
Rabatel Jean-Pierre;4486\r
Rabufetti Alessandro;4487\r
Racine  Charles;4488\r
Racine-Stamm Josiane;4489\r
Radi Sofia;4490\r
Radosav Loredana;4491\r
Radu Alexandre;4492\r
Raetzo Marc-Andre;4493\r
Rafalowicz Jean-Bernard;4494\r
Raffoul Toni;4495\r
Rager Olivier;4496\r
Raggenbass Frischkecht Axelle;4497\r
Raginel Colette;4498\r
Raguso Comasia;4499\r
Rahban Charbel;4500\r
Rahban Charbel Y.;4501\r
Rahimi Amena;4502\r
Rahmim-Baghdadi Guilda;4503\r
Raimondi Pierre;4504\r
Raiss Hicham;4505\r
Rakotoniaina Andri;4506\r
Ramadan Aymen;4507\r
Ramain Emmanuel;4508\r
Ramazzina Michel;4509\r
Rambaud Vincent;4510\r
Rambeaud Beatrice;4511\r
Rambert Estelle;4512\r
Ramiaraka Julienne;4513\r
Ramirez Sandra;4514\r
Ramlawi Majd;4515\r
Ramos Jean-Claude;4516\r
Ramyead Lauriane;4517\r
Ranchin Isabelle;4518\r
Ransan Mickaël ;4519\r
Ranza Emmanuelle;4520\r
Rao  Malgorzata Myzka;4521\r
Rao  Sekander;4522\r
Rao Malgorzata;4523\r
Rapin Pierre;4524\r
Rapp Fabrice;4525\r
Rascle Marie-Elisabeth;4526\r
Rasic Milana;4527\r
Rassam-Hasso Yasmine;4528\r
Rassouli-Hyka Soudabeh;4529\r
Rathgeb Jean-Paul;4530\r
Ratib Osman;4531\r
Ratnam Arul;4532\r
Ratzenberger Bruno;4533\r
Ravard Celine;4534\r
Ray Adrien;4535\r
Ray Sylvie;4536\r
Rayo Luis;4537\r
Razafimahatratra  Andrianantenaina ;4538\r
Reber Alexandra;4539\r
Reber Martin;4540\r
Reber Olga;4541\r
Rebon Senra Ivan;4542\r
Reboredo Daniel;4543\r
Regad Corinne;4544\r
Regagba Lahcene;4545\r
Regamey Patrick;4546\r
Regard Liliane;4547\r
Regazzoni Loïc;4548\r
Reggiori Laurence;4549\r
Regusci Matteo;4550\r
Regusci Stefano;4551\r
Rehberg-Klug Benno;4552\r
Reiff Maria;4553\r
Reiland Youri;4554\r
Reinhard Laetitia;4555\r
Reinhard Laurent;4556\r
Reinhardt Michael;4557\r
Rekik Faouzi;4558\r
Relecom Allan;4559\r
Renard Julien;4560\r
Renaud Isabelle;4561\r
Renold-Moynier Catherine;4562\r
Repesse Aude;4563\r
Repond Pierre-Andre;4564\r
Resek Mincarelli Griselda;4565\r
Restellini Alexandre;4566\r
Restellini Aurélio;4567\r
Restellini Sophie;4568\r
Restellini Sophie -  cabinet;4569\r
Retailleau Florent;4570\r
Reuillard Christian;4571\r
Reuille Olivier;4572\r
Reuse  Carmen;4573\r
Reust Pierre;4574\r
Revaz Sylvie;4575\r
Revaz-Kuchler Céline;4576\r
Reverdin Alexandra Kathryn;4577\r
Reverdin Nicolas;4578\r
Revil Isabelle;4579\r
Revil Signorat Amélie;4580\r
Rey Bataillard Vincianne;4581\r
Rey Constance;4582\r
Rey Fabian;4583\r
Rey Gilbert;4584\r
Rey Jean-Pierre;4585\r
Reymond Alain-Nicolas;4586\r
Reymond Jean-Marc;4587\r
Reymond Jérémy;4588\r
Reymond Justine;4589\r
Reymond Mattéo;4590\r
Reymond Nils;4591\r
Reynaud Thomas;4592\r
Reynaud-Jaquerod Corinne;4593\r
Reyneke Annabelle;4594\r
Rhenter Jean-Luc;4595\r
Rhyner Patrick;4596\r
Ribordy Laetitia;4597\r
Ricchetti-Coignard Alma;4598\r
Ricci-Bovier Claudia;4599\r
Richard Aline;4600\r
Richard Claude;4601\r
Richard Emmanuelle;4602\r
Richard Fabien;4603\r
Richard François;4604\r
Richard Jean-Christophe;4605\r
Richard Sylvain;4606\r
Riche Olivier;4607\r
Richtering Sarah;4608\r
Rick Jean-Raymond;4609\r
Ricou François;4610\r
Rieder Arabelle;4611\r
Rieder Claude;4612\r
Rieder Jean-Pierre;4613\r
Rieder-Zanone Anne;4614\r
Riedlinger Françoise;4615\r
Riegel Jacques;4616\r
Rieger Eric;4617\r
Riem René P.;4618\r
Riera Isabelle;4619\r
Ries Claude;4620\r
Riesch Yulia;4621\r
Rieu-Chevreau Caroline;4622\r
Rigamonti Fabio;4623\r
Rigaud Denis;4624\r
Rigaux Camille;4625\r
Righetti Piercarlo;4626\r
Righetti Vincent;4627\r
Rigumye Orphée;4628\r
Rikley Eva;4629\r
Rimbau Ignacio;4630\r
Rime Jacques;4631\r
Rinaldo Camilla;4632\r
Rion Raphaël;4633\r
Riondel Monique;4634\r
Riquier Françoise;4635\r
Ris Frédéric;4636\r
Risler Testard Nathalie;4637\r
Risse Xavier;4638\r
Ritz Marc;4639\r
Rival Fabien;4640\r
Rivara Mangeat Claire-Bénédicte;4641\r
Rivas Gruber Janina;4642\r
Rivault Valentine;4643\r
Rivier Catherine;4644\r
Rivier Sophie;4645\r
Rizk Karen;4646\r
Rizzato Alexandre;4647\r
Rizzi Buchs Cristina;4648\r
Rizzo Jennifer;4649\r
Rizzo Natasha;4650\r
Robbiati Anne;4651\r
Robert Cécile;4652\r
Robert François Valérie;4653\r
Robert Jean-Paul;4654\r
Robert John Henri;4655\r
Robert Laurent;4656\r
Robert Pierre-Alain;4657\r
Robert Pinaqui Marie;4658\r
Robert-Ebadi Helia;4659\r
Robert-Grandpierre François;4660\r
Roberti Marzio;4661\r
Robyr Susini Romaine;4662\r
Rocaboy Manuel;4663\r
Rocca Alda;4664\r
Roch Cédric;4665\r
Roch Philippe;4666\r
Rochat Anne-Sophie;4667\r
Rochat Charles-Henry;4668\r
Rochat Stéphane;4669\r
Rochat Tamara;4670\r
Roche Bruno;4671\r
Rocher Chanzy Marie Cécile;4672\r
Roch-Fournier Ludivine;4673\r
Roch-Suzuki Risako;4674\r
Rod Fleury Thierry;4675\r
Rodel Olivier;4676\r
Rodondi Pierre-Yves;4677\r
Rodrigues Bandeira Joyce;4678\r
Rodrigues Gaspar;4679\r
Rodrigues Maria Inês;4680\r
Rodrigues-Mocard Sylvie;4681\r
Rodriguez Juan Felipe;4682\r
Rodriguez Pablo;4683\r
Rodriguez Reimundes Ezequiel;4684\r
Rodriguez-Vigouroux Robert;4685\r
Roehrich Olivia;4686\r
Roffler Jacob;4687\r
Roger-Vermond Adeline;4688\r
Rohner Stephane;4689\r
Rohr Marie;4690\r
Roig Benard Catherine;4691\r
Roldan Zagarra Liliana-Ethel;4692\r
Roll Piguet Anne-Catherine;4693\r
Rolland Marc;4694\r
Rolland Nicolas;4695\r
Rollier Jean-Charles;4696\r
Röllin Galliker Katja;4697\r
Romano Edouard;4698\r
Romanowicz Anne;4699\r
Rombaldi Florence;4700\r
Romelli Massimo;4701\r
Roméo Marie-Antoinette;4702\r
Roncin Jean-Philippe;4703\r
Ronga Alexandre;4704\r
Ronna Maud;4705\r
Ropraz Nicolas;4706\r
Rosa Antonio;4707\r
Rosa Bernard;4708\r
Rosato Chiara;4709\r
Rosatti Peter;4710\r
Roset-Bahmanyar Edith;4711\r
Roshdi Maryam;4712\r
Rossé Mélanie;4713\r
Rosset  Chantal;4714\r
Rosset Antoine;4715\r
Rosset Eric;4716\r
Rosset Geraldine;4717\r
Rossi Cécile;4718\r
Rossi Gina;4719\r
Rossi Jean-Marie;4720\r
Rossi Michel;4721\r
Rossi Righetti Aline;4722\r
Rossier Luca;4723\r
Rossillion Dill Béatrice;4724\r
Rossmann-Parmentier Anne;4725\r
Rostan Alain;4726\r
Roth André;4727\r
Roth Aurélie;4728\r
Roth Daisy;4729\r
Roth Damien;4730\r
Roth Kilian;4731\r
Roth Sani Isabelle;4732\r
Roth Serge;4733\r
Roth Thierry;4734\r
Rothenfluh Dominique;4735\r
Röthlisberger René;4736\r
Rotunno Teresa;4737\r
Rotzetter-Otero Maria;4738\r
Roudet Aurélien;4739\r
Rouffilange Jean-Michel;4740\r
Rougemont  Mathieu;4741\r
Rouget Alain;4742\r
Rouhani Patrick;4743\r
Rouijel Jalil;4744\r
Rouiller Nathalie;4745\r
Rouiller-Braunschweig Carole;4746\r
Roukain Abdallah ;4747\r
Rousseau Samantha;4748\r
Roussel Virgine;4749\r
Rousselot Annick;4750\r
Roux Etienne;4751\r
Royer-Drouard Camille;4752\r
Royné Christophe;4753\r
Royston Eva;4754\r
Rozain Montaru Corinne;4755\r
Rozier Aubry Bérengère;4756\r
Rozinthe Anouk;4757\r
Rubimbura Vladimir;4758\r
Rubovszky Stephane;4759\r
Rudaz François;4760\r
Rudermann Raquel;4761\r
Rudhardt Anne Madeleine;4762\r
Rüdisühli Tatiana;4763\r
Rudolf Stefanie;4764\r
Rueda Romero Carolina;4765\r
Rüedi Virginie;4766\r
Rueff Cacitti Karine;4767\r
Rueff Nicolas;4768\r
Ruetschi Peter;4769\r
Rufenacht Pierre;4770\r
Rufener Philippe;4771\r
Ruffieux Philippe;4772\r
Ruffieux-Jordan Anne;4773\r
Ruff-Zemp Véronique;4774\r
Rugolotto Veronica;4775\r
Ruhlmann Stephane;4776\r
Russo Larissa;4777\r
Rutschmann Blaise;4778\r
Rutschmann Olivier;4779\r
Rutz Federico;4780\r
Rwagasore Ernest;4781\r
Rybak Olivia;4782\r
Ryser Patrick;4783\r
Ryser Rüetschi Joëlle;4784\r
Saban Dino;4785\r
Sabatier Didier;4786\r
Sabau Liana;4787\r
Sabeh Naouaf;4788\r
Sabouret Huguenin Laurence;4789\r
Sacquet Eric;4790\r
Sacristan Mikael;4791\r
Sacroug Kazatchkova Tatiana;4792\r
Sadfi Sabry;4793\r
Sadfi-Charbonnier Semia;4794\r
Sadowski Christophe;4795\r
Sadowski Michel;4796\r
Sadri Hassan;4797\r
Sagues Julien;4798\r
Sahil Maral;4799\r
Said Hakim;4800\r
Saidat Yanis;4801\r
Sailly Matthieu;4802\r
Saint-Faust Marie;4803\r
Saint-Léger Cédric;4804\r
Sakbani Kenan;4805\r
Salamin Bonnemain Sophie;4806\r
Salamoni Françoise;4807\r
Salamoni Myriam;4808\r
Salamun Julien;4809\r
Saldarriaga  José Manuel;4810\r
Salem Maurice;4811\r
Salle Véronique;4812\r
Salmi-Babouri Sabrina;4813\r
Salomon Denis;4814\r
Salti Raouf;4815\r
Salvo Davide;4816\r
Samaras Dimitrios;4817\r
Samaras Nikolaos;4818\r
Samba Nganga Annie;4819\r
Sambardier Pierre-Yves;4820\r
Sambian Noël Elisabeth;4821\r
Sami Sana;4822\r
Samii Kaveh;4823\r
Samson Jacky;4824\r
Sanchez Oliver;4825\r
Sancosme Yann;4826\r
Sandell-Delaloye Patricia;4827\r
Sander Caroline;4828\r
Sandoz Alain;4829\r
Sandoz Laurent;4830\r
Sanduloviciu Maria-Georgeta;4831\r
Sanga Amandine;4832\r
Sangermani Arnoldi Simona;4833\r
Sangleraz  Karen;4834\r
Sangsue Bernard;4835\r
Sans médecin de famille .;4836\r
Sans médecin envoyeur .;4837\r
Sans médecin ttt hospitalier .;4838\r
Sanson Nicole;4839\r
Sansonetti Alessandra;4840\r
Sansot Marie;4841\r
Sant Aditya;4842\r
Santabarbara Antonio;4843\r
Santander Oberson Isaura;4844\r
Santini Sara;4845\r
Santo Woodley  Antonella;4846\r
Santoro Becirevic Nure;4847\r
Santoro Nelly;4848\r
Santschi Fabien;4849\r
Santy Fanny-May;4850\r
Sap Liesbeth;4851\r
Sapounakis Konstantinos;4852\r
Sapovalova Daina;4853\r
Sappino André-Pascal;4854\r
Saracci Chiara;4855\r
Sarkisian Jessica;4856\r
Sarrafzadeh Asita;4857\r
Sartori Paola;4858\r
Sartorius Mark;4859\r
Satric Nevena;4860\r
Saudan Marc;4861\r
Saudan Margaux;4862\r
Saudan-Kister Ariane;4863\r
Saunders Gasser Catherine;4864\r
Saunier Jacques;4865\r
Saurer Andreas;4866\r
Sauty Stéphanie;4867\r
Sauvet Goichon Bénédicte;4868\r
Savain Jean-François;4869\r
Savchuk Halyna;4870\r
Saveret Anne-Cloé;4871\r
Savioz Jean-Marc;4872\r
Savopol Monique;4873\r
Savoy Mona;4874\r
Savva Elena;4875\r
Saxer Till;4876\r
Sayag Eric;4877\r
Sayegh Alexandre;4878\r
Sayegh Constantin;4879\r
Sayegh Souheil;4880\r
Sayegh Souheil (Carouge);4881\r
Sayoud Abdallah;4882\r
Sbaï Amal;4883\r
Scampa Matteo;4884\r
Scardino Sylvie;4885\r
Scelles Charles;4886\r
Scerba François;4887\r
Schaefer / Radiologie CT-Scan .;4888\r
Schaefer Christophe;4889\r
Schaefer Gayon Ana;4890\r
Schaepkens van Riempst Julie;4891\r
Schafer Nzalé Jacqueline;4892\r
Schafroth Christian;4893\r
Schaller Dorian;4894\r
Schaller Karl;4895\r
Schaller Laetitia;4896\r
Schaller Mathilde;4897\r
Schaller Philippe;4898\r
Schär Marie;4899\r
Schaub Emmanuel;4900\r
Schell Jean-Marie;4901\r
Schellongova   Magdalena;4902\r
Schenkel Laurent;4903\r
Schenkel Marie-Claude ;4904\r
Schenker Jean-Martin;4905\r
Schepens Jean-Marc;4906\r
Schers Gregory;4907\r
Scherwey Patrick;4908\r
Schiavone Séverine;4909\r
Schiffer Véronique;4910\r
Schihin Romain;4911\r
Schiller Anna;4912\r
Schiller Patrick;4913\r
Schilliger Maxime;4914\r
Schils Frederic;4915\r
Schilter Béatrice;4916\r
Schiltz Boris;4917\r
Schilz Boris;4918\r
Schindler Maximilian;4919\r
Schizas Constantin;4920\r
Schlaefli Raphael;4921\r
Schmalz Ott Stéphanie ;4922\r
Schmeer Claudia;4923\r
Schmid Brumm Sabina;4924\r
Schmid Claude;4925\r
Schmid Ivo;4926\r
Schmid Mathilde;4927\r
Schmid Olivier;4928\r
Schmid Thomas;4929\r
Schmidlin Franz;4930\r
Schmidlin Martina;4931\r
Schmidt  Blaise;4932\r
Schmit Hugo;4933\r
Schmutz Marc;4934\r
Schnabel Anne;4935\r
Schnee Jean-François;4936\r
Schneider Dominique-Pierre;4937\r
Schneider Nicolas;4938\r
Schneider-Paccot Aurélie;4939\r
Schnetzler Bruno;4940\r
Schnyder Joris Coralie;4941\r
Schnyder Jost;4942\r
Schnyder Willy;4943\r
Schnyder-Schriber Isabelle;4944\r
Schoepfer Alain;4945\r
Schonenberg Philippe;4946\r
Schönenberg-Odier Valérie;4947\r
Schoofs Fabian;4948\r
Schopfer Albert ;4949\r
Schopfer Patrick;4950\r
Schopfer Quentin;4951\r
Schouler Laurent;4952\r
Schrago Grégoire;4953\r
Schrai Richard;4954\r
Schraknepper Johannes;4955\r
Schreiber Arnaud;4956\r
Schreiber Bernard;4957\r
Schriber Peter;4958\r
Schroeder Christian ;4959\r
Schroft Andreas Carl;4960\r
Schrumpf David;4961\r
Schubiger  Paul Georg;4962\r
Schucht Philippe;4963\r
Schuhmacher Mario;4964\r
Schüller Alexandra;4965\r
Schulte-Eickhoff Regina;4966\r
Schütz Nicolas;4967\r
Schütz Sandra;4968\r
Schwab Marcos;4969\r
Schwab Morgane;4970\r
Schwartz Delphine;4971\r
Schwartz Georges;4972\r
Schwarz Blatt Carine;4973\r
Schwarz-Hoey Urs;4974\r
Schwarzkopf Milica ;4975\r
Schweri Céline;4976\r
Schwitzgebel Valérie;4977\r
Schwitzguébel Adrien;4978\r
Schwob Alain;4979\r
Sciotto Francesco;4980\r
Sciotto Francesco_hon. pour gardes;4981\r
Sciotto-Canel Lucie;4982\r
Scolozzi Paolo;4983\r
Scotti Elena;4984\r
Scotto Coralie;4985\r
Sculier Delphine;4986\r
Sebe Philippe;4987\r
Sébo Paul;4988\r
Seebach Jörg;4989\r
Segard Anne-Charlotte;4990\r
Seidel Funda;4991\r
Seidler Lela;4992\r
Seidler Stéphanie;4993\r
Seirafi Mariam;4994\r
Seite Pascal;4995\r
Seium Neberay Yodit;4996\r
Seiz Alexander;4997\r
Sekera Eva;4998\r
Selbach  Ann-Christin;4999\r
Selbt Mathias;5000\r
Selleger Charles;5001\r
Selleger Marlyse;5002\r
Sellidj Zoubir;5003\r
Selz Thierry;5004\r
Sendersky Viktorie;5005\r
Sengelin Madignier Anne-Catherine;5006\r
Seniors Service des Urgences;5007\r
Senn Pascal;5008\r
Senn-Scherer Michèle;5009\r
Senouci Samir;5010\r
Senouf David;5011\r
Sentici Ali;5012\r
Seppey Michel;5013\r
Serafini Séverine;5014\r
Sereti Maria;5015\r
Serex  Charles-Arnaud;5016\r
Serex Charles-Arnaud;5017\r
Serir Nabila;5018\r
Serra Sa Ana Regina;5019\r
Serratrice Jacques;5020\r
Servant Guillaume;5021\r
Server Aude;5022\r
Service Antenne Plaie .;5023\r
Service Cardiologie non-invasive;5024\r
Service de Cardiologie;5025\r
Service de Radio - oncologie (Nyon);5026\r
Service de Radiologie;5027\r
Service de Radio-oncologie Service de Radio-oncologie;5028\r
Service d'Ophtalmologie;5029\r
Service du Médecin Cantonal .;5030\r
Service médical du CERN ;5031\r
Service Pédiatrie POP;5032\r
Seuret Flavien;5033\r
Seurot Antoine;5034\r
Sevaljevic Milan;5035\r
Sevessand Claire;5036\r
Seywert  Anne Joan;5037\r
Sfakianaki Ilektra;5038\r
Sfez Michael;5039\r
Sgroi Antonino;5040\r
Shabanov Stas;5041\r
Shafaatian Nicolas;5042\r
Shafaeddin Bahar;5043\r
Shahinfar Kiana;5044\r
Sharara Nabil;5045\r
Sharkhith Hiba;5046\r
Sharma Vaibhav;5047\r
Sheybani Esmaïl;5048\r
Shiriaeva Tatiana;5049\r
Shoker Dyna ;5050\r
Shooner Stéphane;5051\r
Sibaï Karim;5052\r
Sibon Marc;5053\r
Sidler Marc;5054\r
Sidoti Pinto Claudio;5055\r
Siegenthaler Nils;5056\r
Siegrist Gilbert Paul;5057\r
Siegrist Olivier ;5058\r
Siegrist Véronique;5059\r
Sierra Jorge;5060\r
Sierro Bérénice;5061\r
Sierro Danielle;5062\r
Siewe Sandrine;5063\r
Signori-Correa Mabel Fatima;5064\r
Signorile Christine;5065\r
Sigwart Ulrich;5066\r
Silberschmidt Andrina ;5067\r
Silhadi Sabrina;5068\r
Silivan Antonela;5069\r
Silva Isael;5070\r
Silva Morales Lina Maria;5071\r
Silva Teixeira Andrea;5072\r
Silvestrin-Proy Sylvie;5073\r
Simet Guillaume;5074\r
Simon Audrey ;5075\r
Simon Chantal;5076\r
Simon Claude-André;5077\r
Simon Eszter;5078\r
Simon François;5079\r
Simon Jonathan;5080\r
Simon Nicolas;5081\r
Simon Raphaël;5082\r
Simonazzi  Anne-Lise;5083\r
Simond-Bertocchi Emmanuelle;5084\r
Simonin Hélène;5085\r
Simonnot Vincent;5086\r
Simonot Claire;5087\r
Sinamountry Khampheng;5088\r
Sinizergues Virginie;5089\r
Sinniger Marc;5090\r
SIP MFO;5091\r
Sirakova Mariela;5092\r
Sistovaris-Roth Arielle;5093\r
Sivalingam Sathiapalan Suranthaniy;5094\r
Skala Karel;5095\r
Skibinski Nastasia;5096\r
Skowron Olivier;5097\r
Skrivan Valérie;5098\r
Sladoljev Sandra;5099\r
Slama-Chaudhry Anbreen;5100\r
Slosman Daniel;5101\r
Smaoui Malik;5102\r
Smekens Laure;5103\r
Sofio Thierry;5104\r
Soi même;5105\r
Sojevic Ivana;5106\r
Sokolowski Anne;5107\r
Solard Christine;5108\r
Sologashvili Tornike;5109\r
Solomos Leonidas;5110\r
Sommaruga Samuel;5111\r
Sommer Julie;5112\r
Sommer Richard;5113\r
Sommer-Bühler Johanna;5114\r
Sonnet Martin;5115\r
Sood  Radhika;5116\r
Soravia Claudio;5117\r
Soravia-Dunand Viviane;5118\r
Sorin Nicole;5119\r
Sornay Philippe;5120\r
SOS Médecins Genève .;5121\r
Sosa Mascarel Monia;5122\r
Sossauër Gaëtan;5123\r
Sossauer Laura;5124\r
Sottas Cyrille;5125\r
Sottas Oriane;5126\r
Souchier Laure;5127\r
Souclier Jean-Michel;5128\r
Soufi Maya;5129\r
Soulier Christian;5130\r
Soulier-Lauper Mirella;5131\r
Soussan Bruno;5132\r
Sowinska Magdalena;5133\r
Spack Elodie;5134\r
Spada Alessandra;5135\r
Spahn Barbara;5136\r
Spahr Isabelle;5137\r
Spertini François;5138\r
Spielberger Iris Patrizia;5139\r
Spinelli Alessandra;5140\r
Spitalier Clara;5141\r
Spoorenberg Pierre-Emmanuel;5142\r
Sprenger Corpataux Lima;5143\r
Sprünger Ellen;5144\r
Spuhler  Steve;5145\r
Stadali-Ullrich Heidrun;5146\r
Stadelmann Sara;5147\r
Stafuzza Caterina;5148\r
Stafylakis Dimitrios;5149\r
Stalberg Ana-Maria;5150\r
Stalder Maryvonne;5151\r
Stalder Nicolas;5152\r
Stamm Jean-Pierre;5153\r
Stampfli Andres Tomoe;5154\r
Stanekova Katarina;5155\r
Staneschi  Corina;5156\r
Staquet Bruno;5157\r
Starnoni Daniele;5158\r
Starobinski Michel;5159\r
Staub Maire Heidi;5160\r
Staubli Samuel;5161\r
Stauffacher Raphaël;5162\r
Stauffer Ettlin Mélanie;5163\r
Stauffert Olivier;5164\r
Stebler Kevin;5165\r
Stebler-Fontaine Laura;5166\r
Stefanelli Salvatore;5167\r
Stefanescu Adrian;5168\r
Steffen Viviane;5169\r
Stehle Patrick;5170\r
Steighardt Anna;5171\r
Steiner Collet Nathalie;5172\r
Steiner Jacques;5173\r
Stelle Marc;5174\r
Stepanian Ragnetta;5175\r
Stephan Caroline;5176\r
Stern Denis;5177\r
Sternberg Julie;5178\r
Stettler  Sandra;5179\r
Stieger Patrick;5180\r
Stierlin-Hirschel Jessica;5181\r
Stierlin-Hirschel Jessica_hon. privés p/Gardes;5182\r
Stimec Milena;5183\r
Stingelin Guerne Sibylle;5184\r
Stocker Thang;5185\r
Stoeckel Julie;5186\r
Stoermann-Chopard Catherine;5187\r
Stojiljkovic Dejan;5188\r
Stosiek Karolina;5189\r
Strebel Matthew;5190\r
Streit Médioni David;5191\r
Streuli Isabelle;5192\r
Stringini Virginie;5193\r
Stroe Berseth Simona;5194\r
Stroot Martine;5195\r
Strubi Alexandre;5196\r
Stuber Viviane;5197\r
Stuckelberg Georges;5198\r
Stuckelberger Pierre;5199\r
Stucki Lisette;5200\r
Stucki Pascal;5201\r
Suarez Orozco Ruby;5202\r
Suarez Ruby;5203\r
Suchocki David;5204\r
Sudries Jean Claude;5205\r
Sugasi  Stia;5206\r
Suh Nathalie;5207\r
SUMCAB 2 Service des Urgences;5208\r
SUMCAB 3 Service des Urgences;5209\r
Sunthorn Henri;5210\r
Surber Rodolphe;5211\r
Sussetto Massimo;5212\r
Susz Patrick;5213\r
Suter Aline;5214\r
Sutter Peter;5215\r
Suva Médecine du travail;5216\r
Suva Région Suisse Occidentale ;5217\r
Sveikata Lukas;5218\r
Swiss Discovery ;5219\r
Swiss Innovation Power ;5220\r
Swiss Med Office Sàrl .;5221\r
Swiss Medical Excellence Hana Andoulsi;5222\r
Swiss Medical Gate SA ;5223\r
Syburra Thomas;5224\r
Sylvestre Fabien;5225\r
Szabo Nathalie;5226\r
Szadeczki Arthur;5227\r
Szappanyos-Vuaridel Daniele;5228\r
Szekelyi Tess;5229\r
Szita Gillian;5230\r
Sztajzel Juan;5231\r
Sztajzel Manuel;5232\r
Sztajzel Roman;5233\r
Taban François;5234\r
Taban Sonia;5235\r
Tabibian David;5236\r
Tabouret / Radiologie CT-Scan .;5237\r
Tabouret / Von  Düring;5238\r
Tabouret-Viaud Claire;5239\r
Tabrizian Michel;5240\r
Taddei Sara;5241\r
Tafer Nathalie;5242\r
Tagliente Nikolaos;5243\r
Taisne Anaïs;5244\r
Tajeddin May;5245\r
Tajeddin Mohamed;5246\r
Talbit Stéphane;5247\r
Tamburini-Bonnefoy Jérôme;5248\r
Tamm Christian;5249\r
Tanga Antonella;5250\r
Tanguy Gaëlle;5251\r
Tannast Moritz;5252\r
Tantin  Arnaud;5253\r
Tarabay Antonio;5254\r
Taramarcaz Philip;5255\r
Taramarcaz Sonia ;5256\r
Tarasiuk-Stanislawek Katarzyna ;5257\r
Tarazi Lian;5258\r
Tardieu Gilles;5259\r
Tardieu-Maspoli Veronica;5260\r
Tardy Michel;5261\r
Tardy-Bouaziz Nadira;5262\r
Tartarat Chapitre Yves;5263\r
Tartarat-Chapitre Maud;5264\r
Tassoti Pauline;5265\r
Tatzber Tim-Yann;5266\r
Taugwalder Fabienne;5267\r
Taussky Daniel;5268\r
Tauxe Françoise;5269\r
Tauxe Pierre-Olivier;5270\r
Tavaglione Fedora;5271\r
Tavarini Francesca;5272\r
Tawadros-Cardinaux Cécile;5273\r
Taye Merid;5274\r
Tchernin David;5275\r
Tebyanian Mojdeh;5276\r
Tedjini Sabine;5277\r
Teicher Samuel;5278\r
Tekdogan Boran-Can;5279\r
Tekleab Samuel;5280\r
Telnov Oleksandr;5281\r
Temel Civan;5282\r
Temperli Philippe;5283\r
Tempia-Caliera Schäppi Michela;5284\r
Tenorio Rodrigo Xavier;5285\r
Tenthorey Daniel;5286\r
Tercier Stéphane;5287\r
Terracina Didier;5288\r
Terraz Laetitia;5289\r
Terraz Sylvain;5290\r
Terrettaz Emmanuel;5291\r
Terrettaz Marianne;5292\r
Terrier Marie;5293\r
Terrier Sandra;5294\r
Terwey Isabell ;5295\r
Terzic Andrej;5296\r
Tessitore Enrico;5297\r
Testuz Ariane;5298\r
Thein Eric;5299\r
Theintz Florence;5300\r
Theodosiadis  Evangelos;5301\r
Theodosiadis Evangelos;5302\r
Theofilou Nantia Eleni;5303\r
Theraulaz Damien;5304\r
Thevenod Nelly;5305\r
Thiebaud Gilbert;5306\r
Thiebot Leclerc Laure;5307\r
Thiel Laurent;5308\r
Thielen Anne-Marie;5309\r
Thiemann Stéphanie;5310\r
Thierry Romain;5311\r
Thiry Claudie;5312\r
Thomas Axelle;5313\r
Thomé Françoise;5314\r
Thomet Céline;5315\r
Thornton-Bolle Emanuelle;5316\r
Thouvenin Laure;5317\r
Thürlimann  Alice;5318\r
Thurneysen André;5319\r
Thurneysen Thomas;5320\r
Thus Bruno;5321\r
Tiberghien Florence;5322\r
Tieu Thi Ngoc Diep;5323\r
Tirefort Jérôme;5324\r
Tirefort Yordanka;5325\r
Tisserand Stéphanie;5326\r
Tissot Cecile;5327\r
Tissot Frédéric;5328\r
Tivadar Simona;5329\r
Tkachuk Panos Elena;5330\r
Tkatch Lubos;5331\r
Toan Dinh Lam;5332\r
Tobalem Stéphan;5333\r
Tobler Olivier;5334\r
Tobosaru Dorina;5335\r
Tochon Bernard;5336\r
Todorovic Tania;5337\r
Toman Charbonnet Jaroslava;5338\r
Tomas Borges Eduardo;5339\r
Tonna Denise;5340\r
Tonnel Estelle;5341\r
Tonsigh Elena;5342\r
Tonson la Tour Aude;5343\r
Tonson la Tour Aude _ hon. privés p/Gardes;5344\r
Torea Ana;5345\r
Torelle-Midun Elise;5346\r
Torralvo Javier;5347\r
Torregrossa Anaïs;5348\r
Torres Samarin David;5349\r
Tortat Anne-Victoire;5350\r
Toscani Letizia;5351\r
Tosco Tristan;5352\r
Tosco-Delalex Catherine;5353\r
Tosetti Lorenzo;5354\r
Toso Christian;5355\r
Touabi Malek;5356\r
Touil Lamari Amal;5357\r
Toulou Abah Camille;5358\r
Tounsi Nawel;5359\r
Touray Musa;5360\r
Tourillon Romain;5361\r
Tournesac Philippe;5362\r
Tourteau Agathe;5363\r
Toussaint Bruno;5364\r
Toutoungi Mohamed;5365\r
Trad Ilham;5366\r
Tran Nguyen-Toan;5367\r
Tran Philippe;5368\r
Tran Quang Duy;5369\r
Tran Sao-Nam;5370\r
Tran Thien-An;5371\r
Traub Marie-Claire;5372\r
Treina Zuber Geneviève;5373\r
Tremblay Alexandre;5374\r
Tressens Astrid;5375\r
Treuvey Sabine;5376\r
Trifoglio-Ouraga Sandra;5377\r
Trifu Antonia;5378\r
Trigo Trindade Pedro;5379\r
Trigui Nader;5380\r
Trimouille Delphine;5381\r
Tripet Arnaud;5382\r
Tripier Champ Marion;5383\r
Triponez Frédéric;5384\r
Trisconi Yves;5385\r
Triverio Pierre Alain;5386\r
Trivino Teresa;5387\r
Troillet Chiappori Valeria;5388\r
Troillet François-Xavier ;5389\r
Trombetti Andrea;5390\r
Troscompt Orélie;5391\r
Trossello Bruno;5392\r
Trottet Louise;5393\r
Truflandier Karine;5394\r
Tsampikaki Eirini;5395\r
Tschanz Christophe;5396\r
Tscholl Philipp;5397\r
Tschopp Benjamin;5398\r
Tschopp Jonathan;5399\r
Tschopp Marie Bénédicte;5400\r
Tschopp Mathias;5401\r
Tsigkanou-Pappas Eleni;5402\r
Tsimploulis Georgios ;5403\r
Tsinas Dionysios;5404\r
Tsopra Olga;5405\r
Tsouka Alexandra;5406\r
Tsouka Alexandra_hon. privés p/Gardes;5407\r
Tsouka Alexandra_Hypnose cabinet;5408\r
Tsoupras Andreas ;5409\r
Tu Lan Allaire-Pham;5410\r
Tubacki Caroline;5411\r
Tuchschmid Yan;5412\r
Tudisco Jean-Blaise;5413\r
Tullen Emmanuelle;5414\r
Turgis Eric;5415\r
Turzanski Jean-Marie;5416\r
Tutta Paolo;5417\r
Tzika Evangelia;5418\r
Ubaldi Stefania;5419\r
Udriot Blaise;5420\r
Uffer Matieu;5421\r
Ughetto Aldrin;5422\r
Uginet Marjolaine;5423\r
Uhe  Isabelle;5424\r
Uldry Valérie;5425\r
Ulrich Holden Françoise;5426\r
Umbria Espinosa Guillermo;5427\r
Undurraga-Malinvemo Manuela;5428\r
Urbano Luis;5429\r
Urbanski Geoffrey;5430\r
Urbanski Marcin;5431\r
Üstün Yenice Ferah;5432\r
Utrera David;5433\r
Vaccaro Francesco;5434\r
Vaglio Vincent;5435\r
Vaissellet Sébastien;5436\r
Vakapoulos Konstantinos;5437\r
Vala Dominique;5438\r
Valdez Ramiro;5439\r
Valerio Massimo;5440\r
Valisena Silvia;5441\r
Valiton-Crusi Antonella;5442\r
Valla Christian;5443\r
Vallas Marc;5444\r
Vallat Julie;5445\r
Valle Gort Carlos;5446\r
Vallelian Nicolas;5447\r
Vallenet Jean-Paul;5448\r
Vallet Roger;5449\r
Vallez Muriel;5450\r
Van Aaken Jan;5451\r
Van Der Aa Daphne;5452\r
Van der Kooi Karin;5453\r
Van Dommelen Yaëlle;5454\r
Van Dooren Kristina;5455\r
Van Houtte Laetitia;5456\r
Van Issum Christopher;5457\r
Van Leckwyck Lara;5458\r
Van Linthoudt Daniel;5459\r
Van Meir Veerle;5460\r
Van Otterlo Ronald;5461\r
Van Ruymbeke Corentin;5462\r
Van Steenberghe  Mathieu;5463\r
Van Tulder Laurence;5464\r
Vanacker Clara;5465\r
Vancayzeele Saskia;5466\r
Vandamme Frédérique ;5467\r
Vanden Eynde Mathieu;5468\r
Vandenberghe Véronique;5469\r
Vandenberghe-Dürr Sophie;5470\r
Vandenbussche Patrick;5471\r
Vandenhaute Martin;5472\r
Vanderbrecht Marc ;5473\r
Vandertuin Lynda;5474\r
Vankatova Lenka;5475\r
Vannay Léa;5476\r
Vannotti Matthias;5477\r
Vanoy Julie;5478\r
Vantieghem Karine ;5479\r
Varcher Monica;5480\r
Varela Veronica;5481\r
Vargas Bernardo;5482\r
Varin Simon;5483\r
Varlet Julie;5484\r
Varlot Rémi;5485\r
Varotto Laura;5486\r
Varsori-Deom Marie;5487\r
Vasey Baptiste;5488\r
Vasquez  Rodrigo;5489\r
Vassal Dominique;5490\r
Vasseur Marianne;5491\r
Vassiliadi Melita;5492\r
Vaucher Dominic;5493\r
Vaucher Marinette;5494\r
Vauclair Frédéric;5495\r
Vaudan Vutskits Geneviève;5496\r
Vauthey Claude;5497\r
Vauthey Déborah ;5498\r
Vayne-Bossert Petra;5499\r
Vecera Domenico;5500\r
Vecsey Julia;5501\r
Venturini Olivier;5502\r
Veragut Davies Beatrice;5503\r
Verbat Victor;5504\r
Verdan Sandrine;5505\r
Verdi Giovanna;5506\r
Verdier Rémy;5507\r
Verdon Gabriel;5508\r
Verger Laëtitia;5509\r
Vergotte-Weber Stéphanie;5510\r
Vericel Bastien;5511\r
Verin Vitali;5512\r
Verlooven Robin;5513\r
Vermeille Matthieu;5514\r
Vernet Marine;5515\r
Verney François;5516\r
Verniory Jean-Pierre;5517\r
Vero Caido Tania;5518\r
Verschueren Mirela;5519\r
Vesely Barbara;5520\r
Vesproumis Pascal ;5521\r
Vetsch Melissa;5522\r
Vetterli Marie;5523\r
Vetterli Suzanne;5524\r
Vial  Patrick;5525\r
Vial Amélie;5526\r
Vialard Philippe;5527\r
Vialletelle Anne-Marie;5528\r
Vian Stéphane;5529\r
Vicente  Claire;5530\r
Vidal Bertrand;5531\r
Vieira Cardoso Diogo;5532\r
Vieira De Mello-Pula Drenusha;5533\r
Viero Rigamonti Daniela;5534\r
Vigliano  Anne-Laure;5535\r
Vigliano Anne-Laure;5536\r
Vignat Emmanuel;5537\r
Vignaux Laurence;5538\r
Vilas Boas Ana;5539\r
Vilchez Octavio;5540\r
Vilet Anne;5541\r
Villa Fabio;5542\r
Villafranca Jean-Marc;5543\r
Villar Penka;5544\r
Villard Delphine;5545\r
Villard François;5546\r
Villard Frederic;5547\r
Villard Linda;5548\r
Villarroel Cécilia;5549\r
Villatte Edouard;5550\r
Villella Barras Roberta;5551\r
Villiger Erich;5552\r
Villiger Yann;5553\r
Vilmin-Dupla Fleur;5554\r
Vincent Jessica;5555\r
Vincent Philippe;5556\r
Vine Rupert;5557\r
Vinokourov Elena;5558\r
Virard Philippe;5559\r
Virassamy Carine;5560\r
Viret Jean-Daniel;5561\r
Viret Muriel;5562\r
Virot Jean-Luc;5563\r
Visentin Alissa;5564\r
Visery Gregory;5565\r
Viski Sandor;5566\r
Vital Durand Marc;5567\r
Vitali Dylan;5568\r
Vitry Jérôme;5569\r
Vlastos Anne-Thérèse;5570\r
Vlekova Veronique;5571\r
Vochtchinina Nadejda;5572\r
Vogel Steven;5573\r
Voilquin Marine ;5574\r
Vokatch-Boldyreva Natalia;5575\r
Volant Gwennaelle;5576\r
Volant Jean-Claude;5577\r
Vollenweider Leila;5578\r
Vollenweider Marc;5579\r
Vollenweider Peter;5580\r
Von Der Weid Nicolas;5581\r
Von Düring Anne;5582\r
Von Gunten Sylviane;5583\r
Von Mitzlaff Christian;5584\r
Von Orelli Jacques;5585\r
Von Planta Maya;5586\r
Von Rotz Marc;5587\r
Von Schön-Angerer Tileman-Dothias;5588\r
Vongthilath Rechana;5589\r
Vongthilath Réchana;5590\r
Vonlanthen Esther;5591\r
Vonlanthen Marcel;5592\r
Vonlanthen Marie-Claire;5593\r
Vonlaufen Alain;5594\r
Vora Samir;5595\r
Voreopoulou Thaleia;5596\r
Voruz François;5597\r
Vostrel  Philippe (Carouge);5598\r
Vostrel Philippe;5599\r
Vouillon Charles;5600\r
Voute Lancelot;5601\r
Vu Cantero Diêm-Lan;5602\r
Vu Francis Dinh Trong;5603\r
Vuadens-Lehmann Alyssa;5604\r
Vuagniaux Aurélie;5605\r
Vuala Catherine;5606\r
Vuarand Laure;5607\r
Vuichoud Marc;5608\r
Vuille Cédric;5609\r
Vuille Dana;5610\r
Vuillemin Marie;5611\r
Vuillermoz Bernard;5612\r
Vukic Barbara;5613\r
Vuksanovic Milan-Alexandar;5614\r
Vunda Mudiama Aaron;5615\r
Wacker Julie;5616\r
Waeber Baptiste;5617\r
Waelchli Laurent;5618\r
Waelti Fanny;5619\r
Wagner Elise;5620\r
Wakim Souza Pinto Ana Rosa;5621\r
Waldburger Jean-Marc;5622\r
Walser-Bouhrazen Anne;5623\r
Walther Curt;5624\r
Wandeler Jean-Marc;5625\r
Wang Sidi;5626\r
Wang-Buholzer Carine;5627\r
Wanyanga Pierre;5628\r
Warnier Pierre-Axel;5629\r
Wasem Yves-Marie;5630\r
Wassmer Charles-Henri;5631\r
Wassmer Frank-Alain;5632\r
Wattier Valery;5633\r
Weber Francis;5634\r
Weber Jacques;5635\r
Weber Olga;5636\r
Weber Pascal;5637\r
Weber Raphaël;5638\r
Weber Yaskevich Olga;5639\r
Wegener Stéphanie ;5640\r
Wegmüller  Roland;5641\r
Wegmüller Guillaume;5642\r
Wegmüller-de Gautard Géraldine;5643\r
Wegrzyn Julien;5644\r
Wehrli Laurent;5645\r
Weibel Veltz Laurence;5646\r
Weinberg Aryé;5647\r
Weiner Marc;5648\r
Weisse Arno;5649\r
Weitsch Sophie;5650\r
Wellinger John;5651\r
Wenger Jean-Marie;5652\r
Wenger Olivier;5653\r
Wenner Etienne;5654\r
Werner Caroline;5655\r
Wespi Yves;5656\r
Westeel Olivier;5657\r
Wettstein Michael;5658\r
Wicki Benoît;5659\r
Wicky Claude;5660\r
Widikker Igor;5661\r
Widmeier Arnaud;5662\r
Widmer Daniel;5663\r
Widmer Pierre;5664\r
Wieczorek Florent;5665\r
Wiederkehr De La Fuente Victoria;5666\r
Wiedmer Esther;5667\r
Wiesner Lucie;5668\r
Wiesner-Roch Ines;5669\r
Wilhem Laetitia;5670\r
Will Manon;5671\r
Willame Alexia;5672\r
Will-Charlet Isabelle;5673\r
Willemin François;5674\r
Willi Jean-Pierre;5675\r
Willimann Catherine;5676\r
Wilson Sevaljevic Claudia;5677\r
Winckler Tizado Juan Christian;5678\r
Winderickx Eric;5679\r
Winkelmann Jean-Jacques;5680\r
Winterton Nina;5681\r
Wintsch Joelle;5682\r
Wirth Johann Gregory;5683\r
Wirz Daniel;5684\r
Witz Claude;5685\r
Witzeling Alexandra;5686\r
Witzig Edouard-Patrick;5687\r
Witzig Jacques-Alain;5688\r
Wojtusciszyn Anne;5689\r
Wolf Leslie;5690\r
Wolfer Anita;5691\r
Wolfer Samantha;5692\r
Wolff Stéphane;5693\r
Wu  Laetitia;5694\r
Wuarin Lydia;5695\r
Wuillemin Timothée;5696\r
Wunder Dorothea ;5697\r
Wurtz Alexis;5698\r
Wüthrich Philippe;5699\r
Wuyts Audrey;5700\r
Wyss Karine;5701\r
Wyss Rolf;5702\r
Wyss Sabine;5703\r
Wyss Thomas;5704\r
Wyssa Blaise;5705\r
Yachai Mansour;5706\r
Yahfoufi Bachir;5707\r
Yarol Nuray;5708\r
Ydema Alice;5709\r
Yeboah Kasongo Kabuya Ann Abenaa;5710\r
Yerly-Liebhauser Ghislaine;5711\r
Yersin Engelberger Marie;5712\r
Yersin-Clottu Estelle;5713\r
Yildiz Mustafa;5714\r
Younossian / Lücker / Adler;5715\r
Younossian / Lücker / Adler T;5716\r
Younossian Alain Bigin ;5717\r
Yousfi Linda;5718\r
YPO;5719\r
Zaabar Nacer;5720\r
Zabloz Vincent;5721\r
Zaccarini-Develey Sonia;5722\r
Zacharia André;5723\r
Zago Baltazar Rafael;5724\r
Zahui Angenor;5725\r
Zaidan Naime;5726\r
Zaïm Armita;5727\r
Zair Djelloul;5728\r
Zambaz Camille;5729\r
Zambelli Pierre-Yves;5730\r
Zamfirov Kiril;5731\r
Zamora Samuel;5732\r
Zampieri Burdet Laure Lyne;5733\r
Zanardi Elodie;5734\r
Zanardi Frederic;5735\r
Zanchi Fabio;5736\r
Zandirad Eric;5737\r
Zaninetti-Schaerer Anne;5738\r
Zanone Georges Xavier;5739\r
Zanoni Gilles;5740\r
Zanot Marc;5741\r
Zariat Makrem;5742\r
Zarra Sabrina;5743\r
Zaugg Patrice;5744\r
Zaugg Thomas;5745\r
Zaugg Yannick;5746\r
Zavodsky Christof Lukas;5747\r
Zavras Elisabeth;5748\r
Zawodnik  Stanislas;5749\r
Zawodnik Astrid;5750\r
Zaza Stéphane;5751\r
Zebad Abdul Wali;5752\r
Zeller Mathias;5753\r
Zellweger Michael;5754\r
Zemmouri Abdelaziz ;5755\r
Zenelaj Besa;5756\r
Zerlauth Jean-Baptiste;5757\r
Zermatten Philippe;5758\r
Zeukeng Eliane;5759\r
Zhang Philippe;5760\r
Zhu Weimin;5761\r
Ziadé Mounir;5762\r
Ziegler Laure;5763\r
Ziliotto Alain;5764\r
Ziltener Jean-Luc;5765\r
Zimianiti Ioanna;5766\r
Zimmermann Jacques;5767\r
Zimmermann Marc;5768\r
Zimmermann Marie-Line;5769\r
Zimmermann Yael;5770\r
Zingg Matthieu;5771\r
Zirbs Savigny Brigitte;5772\r
Zisimopoulou Sofia;5773\r
Zizza Marco;5774\r
Zogg Martin;5775\r
Zorzoli Mario;5776\r
Zosso Caroline;5777\r
Zotter Harald;5778\r
Zrounba Fadel;5779\r
Zufferey Guillaume;5780\r
Zufferey Pascal;5781\r
Zufferey Stéphane;5782\r
Zullo Maria Josephine ;5783\r
Zumbé Sébastien;5784\r
Zumkehr Julien;5785\r
Zumstein Matthias;5786\r
Zurbuchen Philippe;5787\r
Zürcher Doris;5788\r
Zürcher-Krauskopf Christian;5789\r
Zürcher-Pfund Line;5790\r
Zurkinden Benoît;5791\r
Zurkinden Ralph ;5792\r
Zurkirch Marc-Antoine;5793\r
Zweigart Roxane;5794\r
`;function $2({id:n,value:e,onChange:a,placeholder:i="",error:o,required:c=!1,label:u,noResultsText:f="Aucun résultat",optionalText:m}){const[p,y]=x.useState(!1),[v,S]=x.useState(""),[A,E]=x.useState(-1),[M,D]=x.useState([]),w=x.useRef(null),N=x.useRef(null);x.useEffect(()=>{(()=>{try{const re=kL.split(`
`).filter(le=>le.trim()).slice(1).map(le=>({name:le.split(";")[0]?.trim()||""})).filter(le=>le.name).sort((le,ge)=>le.name.localeCompare(ge.name,"fr",{sensitivity:"base",ignorePunctuation:!0,numeric:!0}));D(re)}catch(de){console.error("Error loading doctors:",de)}})()},[]);const P=v||e,j=M.filter(ae=>ae.name.toLowerCase().includes(P.toLowerCase()));x.useEffect(()=>{const ae=de=>{N.current&&!N.current.contains(de.target)&&w.current&&!w.current.contains(de.target)&&y(!1)};return document.addEventListener("mousedown",ae),()=>document.removeEventListener("mousedown",ae)},[]),x.useEffect(()=>{p||(S(""),E(-1))},[p]);const O=ae=>{const de=ae.target.value;a(de),S(de),y(de.length>=3),E(-1)},q=()=>{e.length>=3&&(S(e),y(!0))},B=ae=>{a(ae.name),S(""),y(!1)},G=ae=>{if(!p){(ae.key==="ArrowDown"||ae.key==="ArrowUp"||ae.key==="Enter")&&(ae.preventDefault(),y(!0));return}switch(ae.key){case"ArrowDown":ae.preventDefault(),E(de=>de<j.length-1?de+1:de);break;case"ArrowUp":ae.preventDefault(),E(de=>de>0?de-1:0);break;case"Enter":ae.preventDefault(),A>=0&&A<j.length&&B(j[A]);break;case"Escape":ae.preventDefault(),y(!1);break}};x.useEffect(()=>{if(A>=0&&N.current){const ae=N.current.children[A];ae&&ae.scrollIntoView({block:"nearest"})}},[A]);const Q=v||e;return g.jsxs("div",{className:"relative",children:[g.jsxs("label",{htmlFor:n,className:"block text-sm font-medium text-brand-text mb-2",children:[u," ",c?g.jsx("span",{className:"text-brand-error",children:"*"}):m&&g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m,")"]})]}),g.jsxs("div",{className:"relative",children:[g.jsx("input",{ref:w,id:n,type:"text",value:Q,onChange:O,onClick:q,onKeyDown:G,placeholder:i,autoComplete:"off",className:`w-full h-12 px-4 pr-10 rounded-md border transition-all ${o?"border-brand-error focus:ring-2 focus:ring-brand-error focus:border-transparent":"border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"}`}),g.jsx(Gu,{className:`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none transition-transform ${p?"rotate-180":""}`})]}),p&&P.length>=3&&g.jsx("div",{ref:N,className:"absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto",children:j.length>0?j.slice(0,50).map((ae,de)=>g.jsx("div",{onClick:()=>B(ae),className:`px-4 py-2.5 cursor-pointer transition-colors ${de===A?"bg-brand-primary text-white":e===ae.name?"bg-slate-100":"hover:bg-slate-50"}`,children:ae.name},de)):g.jsx("div",{className:"px-4 py-2.5 text-slate-500 text-sm",children:f})}),o&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:o})]})]})}const PL={fr:[{code:"CH",name:"Suisse"},{code:"FR",name:"France"},{code:"DE",name:"Allemagne"},{code:"IT",name:"Italie"},{code:"AF",name:"Afghanistan"},{code:"AL",name:"Albanie"},{code:"DZ",name:"Algérie"},{code:"AD",name:"Andorre"},{code:"AO",name:"Angola"},{code:"AR",name:"Argentine"},{code:"AM",name:"Arménie"},{code:"AU",name:"Australie"},{code:"AT",name:"Autriche"},{code:"AZ",name:"Azerbaïdjan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahreïn"},{code:"BD",name:"Bangladesh"},{code:"BB",name:"Barbade"},{code:"BY",name:"Biélorussie"},{code:"BE",name:"Belgique"},{code:"BZ",name:"Belize"},{code:"BJ",name:"Bénin"},{code:"BT",name:"Bhoutan"},{code:"BO",name:"Bolivie"},{code:"BA",name:"Bosnie-Herzégovine"},{code:"BW",name:"Botswana"},{code:"BR",name:"Brésil"},{code:"BN",name:"Brunei"},{code:"BG",name:"Bulgarie"},{code:"BF",name:"Burkina Faso"},{code:"BI",name:"Burundi"},{code:"KH",name:"Cambodge"},{code:"CM",name:"Cameroun"},{code:"CA",name:"Canada"},{code:"CV",name:"Cap-Vert"},{code:"CF",name:"République centrafricaine"},{code:"TD",name:"Tchad"},{code:"CL",name:"Chili"},{code:"CN",name:"Chine"},{code:"CO",name:"Colombie"},{code:"KM",name:"Comores"},{code:"CG",name:"Congo"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatie"},{code:"CU",name:"Cuba"},{code:"CY",name:"Chypre"},{code:"CZ",name:"République tchèque"},{code:"DK",name:"Danemark"},{code:"DJ",name:"Djibouti"},{code:"DM",name:"Dominique"},{code:"DO",name:"République dominicaine"},{code:"EC",name:"Équateur"},{code:"EG",name:"Égypte"},{code:"SV",name:"Salvador"},{code:"GQ",name:"Guinée équatoriale"},{code:"ER",name:"Érythrée"},{code:"EE",name:"Estonie"},{code:"ET",name:"Éthiopie"},{code:"FJ",name:"Fidji"},{code:"FI",name:"Finlande"},{code:"GA",name:"Gabon"},{code:"GM",name:"Gambie"},{code:"GE",name:"Géorgie"},{code:"GH",name:"Ghana"},{code:"GR",name:"Grèce"},{code:"GD",name:"Grenade"},{code:"GT",name:"Guatemala"},{code:"GN",name:"Guinée"},{code:"GW",name:"Guinée-Bissau"},{code:"GY",name:"Guyana"},{code:"HT",name:"Haïti"},{code:"HN",name:"Honduras"},{code:"HU",name:"Hongrie"},{code:"IS",name:"Islande"},{code:"IN",name:"Inde"},{code:"ID",name:"Indonésie"},{code:"IR",name:"Iran"},{code:"IQ",name:"Irak"},{code:"IE",name:"Irlande"},{code:"IL",name:"Israël"},{code:"JM",name:"Jamaïque"},{code:"JP",name:"Japon"},{code:"JO",name:"Jordanie"},{code:"KZ",name:"Kazakhstan"},{code:"KE",name:"Kenya"},{code:"KI",name:"Kiribati"},{code:"KW",name:"Koweït"},{code:"KG",name:"Kirghizistan"},{code:"LA",name:"Laos"},{code:"LV",name:"Lettonie"},{code:"LB",name:"Liban"},{code:"LS",name:"Lesotho"},{code:"LR",name:"Liberia"},{code:"LY",name:"Libye"},{code:"LI",name:"Liechtenstein"},{code:"LT",name:"Lituanie"},{code:"LU",name:"Luxembourg"},{code:"MG",name:"Madagascar"},{code:"MW",name:"Malawi"},{code:"MY",name:"Malaisie"},{code:"MV",name:"Maldives"},{code:"ML",name:"Mali"},{code:"MT",name:"Malte"},{code:"MH",name:"Îles Marshall"},{code:"MR",name:"Mauritanie"},{code:"MU",name:"Maurice"},{code:"MX",name:"Mexique"},{code:"FM",name:"Micronésie"},{code:"MD",name:"Moldavie"},{code:"MC",name:"Monaco"},{code:"MN",name:"Mongolie"},{code:"ME",name:"Monténégro"},{code:"MA",name:"Maroc"},{code:"MZ",name:"Mozambique"},{code:"MM",name:"Myanmar"},{code:"NA",name:"Namibie"},{code:"NR",name:"Nauru"},{code:"NP",name:"Népal"},{code:"NL",name:"Pays-Bas"},{code:"NZ",name:"Nouvelle-Zélande"},{code:"NI",name:"Nicaragua"},{code:"NE",name:"Niger"},{code:"NG",name:"Nigeria"},{code:"KP",name:"Corée du Nord"},{code:"MK",name:"Macédoine du Nord"},{code:"NO",name:"Norvège"},{code:"OM",name:"Oman"},{code:"PK",name:"Pakistan"},{code:"PW",name:"Palaos"},{code:"PA",name:"Panama"},{code:"PG",name:"Papouasie-Nouvelle-Guinée"},{code:"PY",name:"Paraguay"},{code:"PE",name:"Pérou"},{code:"PH",name:"Philippines"},{code:"PL",name:"Pologne"},{code:"PT",name:"Portugal"},{code:"QA",name:"Qatar"},{code:"RO",name:"Roumanie"},{code:"RU",name:"Russie"},{code:"RW",name:"Rwanda"},{code:"KN",name:"Saint-Kitts-et-Nevis"},{code:"LC",name:"Sainte-Lucie"},{code:"VC",name:"Saint-Vincent-et-les-Grenadines"},{code:"WS",name:"Samoa"},{code:"SM",name:"Saint-Marin"},{code:"ST",name:"Sao Tomé-et-Principe"},{code:"SA",name:"Arabie saoudite"},{code:"SN",name:"Sénégal"},{code:"RS",name:"Serbie"},{code:"SC",name:"Seychelles"},{code:"SL",name:"Sierra Leone"},{code:"SG",name:"Singapour"},{code:"SK",name:"Slovaquie"},{code:"SI",name:"Slovénie"},{code:"SB",name:"Îles Salomon"},{code:"SO",name:"Somalie"},{code:"ZA",name:"Afrique du Sud"},{code:"KR",name:"Corée du Sud"},{code:"SS",name:"Soudan du Sud"},{code:"ES",name:"Espagne"},{code:"LK",name:"Sri Lanka"},{code:"SD",name:"Soudan"},{code:"SR",name:"Suriname"},{code:"SE",name:"Suède"},{code:"SY",name:"Syrie"},{code:"TJ",name:"Tadjikistan"},{code:"TZ",name:"Tanzanie"},{code:"TH",name:"Thaïlande"},{code:"TL",name:"Timor oriental"},{code:"TG",name:"Togo"},{code:"TO",name:"Tonga"},{code:"TT",name:"Trinité-et-Tobago"},{code:"TN",name:"Tunisie"},{code:"TR",name:"Turquie"},{code:"TM",name:"Turkménistan"},{code:"TV",name:"Tuvalu"},{code:"UG",name:"Ouganda"},{code:"UA",name:"Ukraine"},{code:"AE",name:"Émirats arabes unis"},{code:"GB",name:"Royaume-Uni"},{code:"US",name:"États-Unis"},{code:"UY",name:"Uruguay"},{code:"UZ",name:"Ouzbékistan"},{code:"VU",name:"Vanuatu"},{code:"VA",name:"Vatican"},{code:"VE",name:"Venezuela"},{code:"VN",name:"Vietnam"},{code:"YE",name:"Yémen"},{code:"ZM",name:"Zambie"},{code:"ZW",name:"Zimbabwe"}],en:[{code:"CH",name:"Switzerland"},{code:"FR",name:"France"},{code:"DE",name:"Germany"},{code:"IT",name:"Italy"},{code:"AF",name:"Afghanistan"},{code:"AL",name:"Albania"},{code:"DZ",name:"Algeria"},{code:"AD",name:"Andorra"},{code:"AO",name:"Angola"},{code:"AR",name:"Argentina"},{code:"AM",name:"Armenia"},{code:"AU",name:"Australia"},{code:"AT",name:"Austria"},{code:"AZ",name:"Azerbaijan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahrain"},{code:"BD",name:"Bangladesh"},{code:"BB",name:"Barbados"},{code:"BY",name:"Belarus"},{code:"BE",name:"Belgium"},{code:"BZ",name:"Belize"},{code:"BJ",name:"Benin"},{code:"BT",name:"Bhutan"},{code:"BO",name:"Bolivia"},{code:"BA",name:"Bosnia and Herzegovina"},{code:"BW",name:"Botswana"},{code:"BR",name:"Brazil"},{code:"BN",name:"Brunei"},{code:"BG",name:"Bulgaria"},{code:"BF",name:"Burkina Faso"},{code:"BI",name:"Burundi"},{code:"KH",name:"Cambodia"},{code:"CM",name:"Cameroon"},{code:"CA",name:"Canada"},{code:"CV",name:"Cape Verde"},{code:"CF",name:"Central African Republic"},{code:"TD",name:"Chad"},{code:"CL",name:"Chile"},{code:"CN",name:"China"},{code:"CO",name:"Colombia"},{code:"KM",name:"Comoros"},{code:"CG",name:"Congo"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatia"},{code:"CU",name:"Cuba"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czech Republic"},{code:"DK",name:"Denmark"},{code:"DJ",name:"Djibouti"},{code:"DM",name:"Dominica"},{code:"DO",name:"Dominican Republic"},{code:"EC",name:"Ecuador"},{code:"EG",name:"Egypt"},{code:"SV",name:"El Salvador"},{code:"GQ",name:"Equatorial Guinea"},{code:"ER",name:"Eritrea"},{code:"EE",name:"Estonia"},{code:"ET",name:"Ethiopia"},{code:"FJ",name:"Fiji"},{code:"FI",name:"Finland"},{code:"GA",name:"Gabon"},{code:"GM",name:"Gambia"},{code:"GE",name:"Georgia"},{code:"GH",name:"Ghana"},{code:"GR",name:"Greece"},{code:"GD",name:"Grenada"},{code:"GT",name:"Guatemala"},{code:"GN",name:"Guinea"},{code:"GW",name:"Guinea-Bissau"},{code:"GY",name:"Guyana"},{code:"HT",name:"Haiti"},{code:"HN",name:"Honduras"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},{code:"IN",name:"India"},{code:"ID",name:"Indonesia"},{code:"IR",name:"Iran"},{code:"IQ",name:"Iraq"},{code:"IE",name:"Ireland"},{code:"IL",name:"Israel"},{code:"JM",name:"Jamaica"},{code:"JP",name:"Japan"},{code:"JO",name:"Jordan"},{code:"KZ",name:"Kazakhstan"},{code:"KE",name:"Kenya"},{code:"KI",name:"Kiribati"},{code:"KW",name:"Kuwait"},{code:"KG",name:"Kyrgyzstan"},{code:"LA",name:"Laos"},{code:"LV",name:"Latvia"},{code:"LB",name:"Lebanon"},{code:"LS",name:"Lesotho"},{code:"LR",name:"Liberia"},{code:"LY",name:"Libya"},{code:"LI",name:"Liechtenstein"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MG",name:"Madagascar"},{code:"MW",name:"Malawi"},{code:"MY",name:"Malaysia"},{code:"MV",name:"Maldives"},{code:"ML",name:"Mali"},{code:"MT",name:"Malta"},{code:"MH",name:"Marshall Islands"},{code:"MR",name:"Mauritania"},{code:"MU",name:"Mauritius"},{code:"MX",name:"Mexico"},{code:"FM",name:"Micronesia"},{code:"MD",name:"Moldova"},{code:"MC",name:"Monaco"},{code:"MN",name:"Mongolia"},{code:"ME",name:"Montenegro"},{code:"MA",name:"Morocco"},{code:"MZ",name:"Mozambique"},{code:"MM",name:"Myanmar"},{code:"NA",name:"Namibia"},{code:"NR",name:"Nauru"},{code:"NP",name:"Nepal"},{code:"NL",name:"Netherlands"},{code:"NZ",name:"New Zealand"},{code:"NI",name:"Nicaragua"},{code:"NE",name:"Niger"},{code:"NG",name:"Nigeria"},{code:"KP",name:"North Korea"},{code:"MK",name:"North Macedonia"},{code:"NO",name:"Norway"},{code:"OM",name:"Oman"},{code:"PK",name:"Pakistan"},{code:"PW",name:"Palau"},{code:"PA",name:"Panama"},{code:"PG",name:"Papua New Guinea"},{code:"PY",name:"Paraguay"},{code:"PE",name:"Peru"},{code:"PH",name:"Philippines"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"QA",name:"Qatar"},{code:"RO",name:"Romania"},{code:"RU",name:"Russia"},{code:"RW",name:"Rwanda"},{code:"KN",name:"Saint Kitts and Nevis"},{code:"LC",name:"Saint Lucia"},{code:"VC",name:"Saint Vincent and the Grenadines"},{code:"WS",name:"Samoa"},{code:"SM",name:"San Marino"},{code:"ST",name:"Sao Tome and Principe"},{code:"SA",name:"Saudi Arabia"},{code:"SN",name:"Senegal"},{code:"RS",name:"Serbia"},{code:"SC",name:"Seychelles"},{code:"SL",name:"Sierra Leone"},{code:"SG",name:"Singapore"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"SB",name:"Solomon Islands"},{code:"SO",name:"Somalia"},{code:"ZA",name:"South Africa"},{code:"KR",name:"South Korea"},{code:"SS",name:"South Sudan"},{code:"ES",name:"Spain"},{code:"LK",name:"Sri Lanka"},{code:"SD",name:"Sudan"},{code:"SR",name:"Suriname"},{code:"SE",name:"Sweden"},{code:"SY",name:"Syria"},{code:"TJ",name:"Tajikistan"},{code:"TZ",name:"Tanzania"},{code:"TH",name:"Thailand"},{code:"TL",name:"Timor-Leste"},{code:"TG",name:"Togo"},{code:"TO",name:"Tonga"},{code:"TT",name:"Trinidad and Tobago"},{code:"TN",name:"Tunisia"},{code:"TR",name:"Turkey"},{code:"TM",name:"Turkmenistan"},{code:"TV",name:"Tuvalu"},{code:"UG",name:"Uganda"},{code:"UA",name:"Ukraine"},{code:"AE",name:"United Arab Emirates"},{code:"GB",name:"United Kingdom"},{code:"US",name:"United States"},{code:"UY",name:"Uruguay"},{code:"UZ",name:"Uzbekistan"},{code:"VU",name:"Vanuatu"},{code:"VA",name:"Vatican City"},{code:"VE",name:"Venezuela"},{code:"VN",name:"Vietnam"},{code:"YE",name:"Yemen"},{code:"ZM",name:"Zambia"},{code:"ZW",name:"Zimbabwe"}]},e4=["CH","FR"];function BL(n){const e=PL[n],a=e.filter(o=>e4.includes(o.code)),i=e.filter(o=>!e4.includes(o.code)).sort((o,c)=>o.name.localeCompare(c.name,n));return[...a,...i]}const LL=(n,e,a,i)=>td({firstName:nn().min(1,i.required),lastName:nn().min(1,i.required),gender:nn().min(1,i.required),nationality:nn().min(1,i.required),street:nn().min(1,i.required),npa:nn().min(1,i.required).regex(/^\d+$/,i.invalidNpa),city:nn().min(1,i.required),country:nn().min(1,i.required),email:nn().min(1,i.required).email(i.invalidEmail),profession:a?nn().min(1,i.required):nn(),employerName:a?nn().min(1,i.required):nn(),employerAddress:a?nn().min(1,i.required):nn(),referringDoctor:nn().optional(),generalPractitioner:nn().optional(),accidentDate:n==="accident"?nn().min(1,i.required).refine(N5,i.invalidDate):nn().optional(),accidentInsurance:nn().optional(),claimNumber:nn().optional(),avsNumber:e==="swiss"?nn().min(1,i.required).refine(o=>/^\d{13}$/.test(o.replace(/\./g,"")),i.invalidAvsNumber):nn().optional(),basicInsurance:n==="accident"||e==="swiss"||e==="international"?nn().min(1,i.required):nn().optional(),cardNumber:n==="accident"||e==="swiss"?nn().min(1,i.required).refine(o=>/^\d{20}$/.test(o.replace(/\s/g,"")),i.invalidCardNumber):nn().optional(),policyNumber:e==="international"?nn().min(1,i.required):nn().optional(),complementaryInsurance:nn().optional()});function _L({language:n,formData:e,reason:a,insurance:i,hasEmployer:o,onFormDataChange:c,onNext:u,onBack:f}){const m=lR[n],[p,y]=x.useState(""),v=BL(n),S=x.useRef(null),A=x.useRef(null),E=x.useRef(null),M=x.useRef(null),D=x.useRef(null),w=x.useRef(null),N=x.useRef(null),P=x.useRef(null),j=x.useRef(null),O=x.useRef(null),q=x.useRef(null),B=x.useRef(null),G=x.useRef(null),Q=x.useRef(null),ae=x.useRef(null),de=x.useRef(null),se=x.useRef(null),re=x.useRef(null),le=x.useRef(null),ge=x.useRef(null),_=x.useRef(null),U=x.useRef(null),V=LL(a,i,o,{required:m.required,invalidEmail:m.invalidEmail,invalidNpa:m.invalidNpa,invalidDate:m.invalidDate,invalidCardNumber:m.invalidCardNumber,invalidAvsNumber:m.invalidAvsNumber}),{register:fe,handleSubmit:be,formState:{errors:T},setValue:Z,watch:ne,trigger:oe}=ed({resolver:nd(V),defaultValues:{firstName:e.firstName,lastName:e.lastName,gender:e.gender,nationality:e.nationality,street:e.street,npa:e.npa,city:e.city,country:e.country,email:e.email,profession:e.profession,employerName:e.employerName,employerAddress:e.employerAddress,referringDoctor:e.referringDoctor,generalPractitioner:e.generalPractitioner,accidentDate:e.accidentDate,accidentInsurance:e.accidentInsurance,claimNumber:e.claimNumber,avsNumber:e.avsNumber,basicInsurance:e.basicInsurance,cardNumber:e.cardNumber,policyNumber:e.policyNumber,complementaryInsurance:e.complementaryInsurance}});x.useEffect(()=>{if(Object.keys(T).length>0){const ee=Object.keys(T)[0],Be={firstName:S,lastName:A,gender:E,nationality:M,street:D,npa:w,city:N,country:P,email:j,profession:O,employerName:q,employerAddress:B,referringDoctor:G,generalPractitioner:Q,accidentDate:ae,accidentInsurance:de,claimNumber:se,avsNumber:re,basicInsurance:le,cardNumber:ge,policyNumber:_,complementaryInsurance:U}[ee];Be?.current&&Be.current.scrollIntoView({behavior:"smooth",block:"center"})}},[T]),x.useEffect(()=>{if(e.accidentDate){const[ee,xe,Be]=e.accidentDate.split("-");ee&&xe&&Be&&y(`${Be}.${xe}.${ee}`)}},[]);const ce=ee=>{const xe=J5(ee);if(y(xe),xe.length===10){const Be=U5(xe,{allowFuture:!0});Be?(Z("accidentDate",Be),c({accidentDate:Be}),oe("accidentDate")):(Z("accidentDate",""),c({accidentDate:""}),oe("accidentDate"))}else Z("accidentDate",""),c({accidentDate:""}),a==="accident"&&oe("accidentDate")},Ce=ee=>{c(ee),u()},te=ee=>{const xe=ee.replace(/\D/g,"");let Be="";for(let Ue=0;Ue<xe.length&&Ue<13;Ue++)(Ue===3||Ue===7||Ue===11)&&(Be+="."),Be+=xe[Ue];return Be},Pe=ee=>{const xe=ee.replace(/\D/g,"");let Be="";for(let Ue=0;Ue<xe.length&&Ue<20;Ue++)(Ue===5||Ue===8||Ue===11||Ue===14||Ue===17)&&(Be+="."),Be+=xe[Ue];return Be},pe=(ee,xe)=>{Z(ee,xe),c({[ee]:xe}),oe(ee)};return g.jsx("div",{className:"min-h-screen py-4 px-4",children:g.jsx("div",{className:"w-full max-w-2xl mx-auto",children:g.jsxs(rg,{className:"bg-white rounded-xl shadow-sm border border-slate-100 p-0 relative z-10",children:[g.jsxs(ag,{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4",children:[g.jsx("div",{className:"w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",children:g.jsx(GA,{className:"w-8 h-8 text-brand-primary"})}),g.jsx(ig,{className:"text-2xl font-bold text-brand-text text-center mb-2",children:m.title}),g.jsx(sg,{className:"text-sm text-slate-600 text-center",children:m.subtitle})]}),g.jsx(og,{className:"px-6 sm:px-8 pb-6 sm:pb-8",children:g.jsxs("form",{onSubmit:be(Ce),className:"space-y-6",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:g.jsx("span",{className:"font-semibold text-brand-text",children:m.identity})}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{ref:S,children:[g.jsxs("label",{htmlFor:"firstName",className:"block text-sm font-medium text-brand-text mb-2",children:[m.firstName," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"firstName",type:"text",...fe("firstName"),onChange:ee=>pe("firstName",ee.target.value),"aria-invalid":!!T.firstName,className:`w-full h-12 px-4 ${T.firstName?"border-brand-error focus-visible:ring-brand-error":""}`}),T.firstName&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.firstName.message})]})]}),g.jsxs("div",{ref:A,children:[g.jsxs("label",{htmlFor:"lastName",className:"block text-sm font-medium text-brand-text mb-2",children:[m.lastName," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"lastName",type:"text",...fe("lastName"),onChange:ee=>pe("lastName",ee.target.value),"aria-invalid":!!T.lastName,className:`w-full h-12 px-4 ${T.lastName?"border-brand-error focus-visible:ring-brand-error":""}`}),T.lastName&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.lastName.message})]})]}),g.jsxs("div",{ref:E,children:[g.jsxs("label",{htmlFor:"gender",className:"block text-sm font-medium text-brand-text mb-2",children:[m.gender," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsxs(Px,{value:e.gender,onValueChange:ee=>pe("gender",ee),children:[g.jsx(Lx,{id:"gender",className:`w-full h-12 ${T.gender?"border-brand-error focus:ring-2 focus:ring-brand-error":""} ${e.gender?"":"text-slate-400"}`,children:g.jsx(Bx,{placeholder:m.genderPlaceholder})}),g.jsxs(_x,{children:[g.jsx(Qo,{value:"male",children:m.male}),g.jsx(Qo,{value:"female",children:m.female}),g.jsx(Qo,{value:"other",children:m.other})]})]}),T.gender&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.gender.message})]})]}),g.jsx("div",{ref:M,children:g.jsx(Q2,{id:"nationality",label:m.nationality,value:e.nationality,onChange:ee=>pe("nationality",ee),countries:v,placeholder:m.nationalityPlaceholder,error:T.nationality?.message,noResultsText:m.noResults,required:!0})})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:g.jsx("span",{className:"font-semibold text-brand-text",children:m.contact})}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{ref:D,children:[g.jsxs("label",{htmlFor:"street",className:"block text-sm font-medium text-brand-text mb-2",children:[m.street," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"street",type:"text",value:e.street,onChange:ee=>pe("street",ee.target.value),"aria-invalid":!!T.street,className:`w-full h-12 px-4 ${T.street?"border-brand-error focus-visible:ring-brand-error":""}`}),T.street&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.street.message})]})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[g.jsxs("div",{ref:w,children:[g.jsxs("label",{htmlFor:"npa",className:"block text-sm font-medium text-brand-text mb-2",children:[m.npa," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"npa",type:"text",inputMode:"numeric",value:e.npa,onChange:ee=>{const xe=ee.target.value.replace(/\D/g,"");pe("npa",xe)},"aria-invalid":!!T.npa,className:`w-full h-12 px-4 ${T.npa?"border-brand-error focus-visible:ring-brand-error":""}`}),T.npa&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.npa.message})]})]}),g.jsxs("div",{ref:N,children:[g.jsxs("label",{htmlFor:"city",className:"block text-sm font-medium text-brand-text mb-2",children:[m.city," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"city",type:"text",value:e.city,onChange:ee=>pe("city",ee.target.value),"aria-invalid":!!T.city,className:`w-full h-12 px-4 ${T.city?"border-brand-error focus-visible:ring-brand-error":""}`}),T.city&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.city.message})]})]})]}),g.jsx("div",{ref:P,children:g.jsx(Q2,{id:"country",label:m.country,value:e.country,onChange:ee=>pe("country",ee),countries:v,placeholder:m.countryPlaceholder,error:T.country?.message,noResultsText:m.noResults,required:!0})}),g.jsxs("div",{ref:j,children:[g.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium text-brand-text mb-2",children:[m.email," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"email",type:"email",value:e.email,onChange:ee=>pe("email",ee.target.value),"aria-invalid":!!T.email,className:`w-full h-12 px-4 ${T.email?"border-brand-error focus-visible:ring-brand-error":""}`}),T.email&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.email.message})]})]})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:g.jsx("span",{className:"font-semibold text-brand-text",children:m.employer})}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{ref:O,children:[g.jsxs("label",{htmlFor:"profession",className:"block text-sm font-medium text-brand-text mb-2",children:[m.profession," ",o?g.jsx("span",{className:"text-brand-error",children:"*"}):g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"profession",type:"text",value:e.profession,onChange:ee=>pe("profession",ee.target.value),"aria-invalid":!!T.profession,className:`w-full h-12 px-4 ${T.profession?"border-brand-error focus-visible:ring-brand-error":""}`}),T.profession&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.profession.message})]})]}),g.jsxs("div",{children:[g.jsxs("label",{htmlFor:"employerName",className:"block text-sm font-medium text-brand-text mb-2",children:[m.employerName," ",o?g.jsx("span",{className:"text-brand-error",children:"*"}):g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"employerName",type:"text",value:e.employerName,onChange:ee=>pe("employerName",ee.target.value),"aria-invalid":!!T.employerName,className:`w-full h-12 px-4 ${T.employerName?"border-brand-error focus-visible:ring-brand-error":""}`}),T.employerName&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.employerName.message})]})]}),g.jsxs("div",{children:[g.jsxs("label",{htmlFor:"employerAddress",className:"block text-sm font-medium text-brand-text mb-2",children:[m.employerAddress," ",o?g.jsx("span",{className:"text-brand-error",children:"*"}):g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"employerAddress",type:"text",value:e.employerAddress,onChange:ee=>pe("employerAddress",ee.target.value),"aria-invalid":!!T.employerAddress,className:`w-full h-12 px-4 ${T.employerAddress?"border-brand-error focus-visible:ring-brand-error":""}`}),T.employerAddress&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.employerAddress.message})]})]})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:g.jsx("span",{className:"font-semibold text-brand-text",children:m.doctors})}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{ref:G,children:g.jsx($2,{id:"referringDoctor",label:m.referringDoctor,value:e.referringDoctor,onChange:ee=>pe("referringDoctor",ee),placeholder:m.referringDoctor,error:T.referringDoctor?.message,noResultsText:m.noResults,required:!1,optionalText:m.optional})}),g.jsx("div",{ref:Q,children:g.jsx($2,{id:"generalPractitioner",label:m.generalPractitioner,value:e.generalPractitioner,onChange:ee=>pe("generalPractitioner",ee),placeholder:m.generalPractitioner,error:T.generalPractitioner?.message,noResultsText:m.noResults,required:!1,optionalText:m.optional})})]})]}),a==="accident"&&g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:g.jsx("span",{className:"font-semibold text-brand-text",children:m.accidentData})}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{ref:ae,children:[g.jsxs("label",{htmlFor:"accidentDate",className:"block text-sm font-medium text-brand-text mb-2",children:[m.accidentDate," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"accidentDate",type:"text",inputMode:"numeric",value:p,onChange:ee=>ce(ee.target.value),placeholder:m.accidentDatePlaceholder,maxLength:10,"aria-invalid":!!T.accidentDate,className:`w-full h-12 px-4 font-mono tracking-wider ${T.accidentDate?"border-brand-error focus-visible:ring-brand-error":""}`}),T.accidentDate&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.accidentDate.message})]})]}),g.jsxs("div",{ref:de,children:[g.jsxs("label",{htmlFor:"accidentInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[m.accidentInsurance," ",g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"accidentInsurance",type:"text",value:e.accidentInsurance,onChange:ee=>pe("accidentInsurance",ee.target.value),className:"w-full h-12 px-4"})]}),g.jsxs("div",{ref:se,children:[g.jsxs("label",{htmlFor:"claimNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[m.claimNumber," ",g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"claimNumber",type:"text",value:e.claimNumber,onChange:ee=>pe("claimNumber",ee.target.value),className:"w-full h-12 px-4"})]})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:g.jsx("span",{className:"font-semibold text-brand-text",children:m.insuranceData})}),g.jsxs("div",{className:"space-y-4",children:[i==="swiss"&&g.jsxs("div",{ref:re,children:[g.jsxs("label",{htmlFor:"avsNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[m.avsNumber," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"avsNumber",type:"text",inputMode:"numeric",maxLength:16,placeholder:"756.1234.5678.97",value:te(e.avsNumber),onChange:ee=>{const xe=ee.target.value.replace(/\D/g,"");pe("avsNumber",xe)},"aria-invalid":!!T.avsNumber,className:`w-full h-12 px-4 font-mono tracking-wider ${T.avsNumber?"border-brand-error focus-visible:ring-brand-error":""}`}),T.avsNumber&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.avsNumber.message})]})]}),(i==="international"||i==="auto")&&g.jsxs("div",{children:[g.jsxs("label",{htmlFor:"avsNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[m.avsNumber," ",g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"avsNumber",type:"text",inputMode:"numeric",maxLength:16,placeholder:"756.1234.5678.97",value:te(e.avsNumber),onChange:ee=>{const xe=ee.target.value.replace(/\D/g,"");pe("avsNumber",xe)},className:"w-full h-12 px-4 font-mono tracking-wider"})]}),(i==="swiss"||i==="international")&&g.jsxs("div",{ref:le,children:[g.jsxs("label",{htmlFor:"basicInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[m.basicInsurance," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"basicInsurance",type:"text",value:e.basicInsurance,onChange:ee=>pe("basicInsurance",ee.target.value),"aria-invalid":!!T.basicInsurance,className:`w-full h-12 px-4 ${T.basicInsurance?"border-brand-error focus-visible:ring-brand-error":""}`}),T.basicInsurance&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.basicInsurance.message})]})]}),i==="auto"&&a!=="accident"&&g.jsxs("div",{children:[g.jsxs("label",{htmlFor:"basicInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[m.basicInsurance," ",g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"basicInsurance",type:"text",value:e.basicInsurance,onChange:ee=>pe("basicInsurance",ee.target.value),className:"w-full h-12 px-4"})]}),i==="auto"&&a==="accident"&&g.jsxs("div",{children:[g.jsxs("label",{htmlFor:"basicInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[m.basicInsurance," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"basicInsurance",type:"text",value:e.basicInsurance,onChange:ee=>pe("basicInsurance",ee.target.value),"aria-invalid":!!T.basicInsurance,className:`w-full h-12 px-4 ${T.basicInsurance?"border-brand-error focus-visible:ring-brand-error":""}`}),T.basicInsurance&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.basicInsurance.message})]})]}),i==="swiss"&&g.jsxs("div",{ref:ge,children:[g.jsxs("label",{htmlFor:"cardNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[m.cardNumber," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"cardNumber",type:"text",inputMode:"numeric",maxLength:25,placeholder:"80756.123.456.789.012.345",value:Pe(e.cardNumber),onChange:ee=>{const xe=ee.target.value.replace(/\D/g,"");pe("cardNumber",xe)},"aria-invalid":!!T.cardNumber,className:`w-full h-12 px-4 font-mono tracking-wider ${T.cardNumber?"border-brand-error focus-visible:ring-brand-error":""}`}),T.cardNumber&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.cardNumber.message})]})]}),i==="auto"&&a!=="accident"&&g.jsxs("div",{children:[g.jsxs("label",{htmlFor:"cardNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[m.cardNumber," ",g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"cardNumber",type:"text",inputMode:"numeric",maxLength:25,placeholder:"80756.123.456.789.012.345",value:Pe(e.cardNumber),onChange:ee=>{const xe=ee.target.value.replace(/\D/g,"");pe("cardNumber",xe)},className:"w-full h-12 px-4 font-mono tracking-wider"})]}),i==="auto"&&a==="accident"&&g.jsxs("div",{children:[g.jsxs("label",{htmlFor:"cardNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[m.cardNumber," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"cardNumber",type:"text",inputMode:"numeric",maxLength:25,placeholder:"80756.123.456.789.012.345",value:Pe(e.cardNumber),onChange:ee=>{const xe=ee.target.value.replace(/\D/g,"");pe("cardNumber",xe)},"aria-invalid":!!T.cardNumber,className:`w-full h-12 px-4 font-mono tracking-wider ${T.cardNumber?"border-brand-error focus-visible:ring-brand-error":""}`}),T.cardNumber&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.cardNumber.message})]})]}),i==="international"&&g.jsxs("div",{ref:_,children:[g.jsxs("label",{htmlFor:"policyNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[m.policyNumber," ",g.jsx("span",{className:"text-brand-error",children:"*"})]}),g.jsx(An,{id:"policyNumber",type:"text",value:e.policyNumber,onChange:ee=>pe("policyNumber",ee.target.value),"aria-invalid":!!T.policyNumber,className:`w-full h-12 px-4 ${T.policyNumber?"border-brand-error focus-visible:ring-brand-error":""}`}),T.policyNumber&&g.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[g.jsx(Sn,{className:"w-4 h-4"}),g.jsx("span",{children:T.policyNumber.message})]})]}),g.jsxs("div",{ref:U,children:[g.jsxs("label",{htmlFor:"complementaryInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[m.complementaryInsurance," ",g.jsxs("span",{className:"text-slate-500 text-xs",children:["(",m.optional,")"]})]}),g.jsx(An,{id:"complementaryInsurance",type:"text",value:e.complementaryInsurance,onChange:ee=>pe("complementaryInsurance",ee.target.value),className:"w-full h-12 px-4"})]})]})]}),g.jsxs("div",{className:"flex gap-3 pt-4",children:[g.jsxs(er,{type:"button",onClick:f,variant:"outline",size:"lg",className:"h-12 px-6 hover:scale-[1.02] active:scale-98 transition-all",children:[g.jsx(ju,{className:"w-5 h-5"}),m.back]}),g.jsxs(er,{type:"submit",size:"lg",className:"group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white hover:scale-[1.02] active:scale-98 transition-all",children:[m.continue,g.jsx(yl,{className:"w-5 h-5 transition-transform group-hover:translate-x-0.5"})]})]})]})})]})})})}function OL({language:n}){const e=cR[n],a=()=>{window.open(e.link,"_blank")};return g.jsx("div",{className:"min-h-screen py-4 px-4",children:g.jsx("div",{className:"w-full max-w-2xl mx-auto",children:g.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6 sm:p-8 relative z-10",children:g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"w-32 h-32 border-4 border-brand-text rounded-full flex items-center justify-center mx-auto mb-6",children:g.jsx(Vu,{className:"w-16 h-16 text-brand-text",strokeWidth:3})}),g.jsx("h1",{className:"text-2xl font-bold text-brand-text mb-4",children:e.title}),g.jsx("p",{className:"text-base text-brand-text mb-8 max-w-xl mx-auto leading-relaxed",children:e.message}),g.jsx(er,{onClick:a,size:"lg",className:"w-full max-w-md mx-auto h-14 px-8 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full hover:scale-[1.02] active:scale-98 transition-all",children:e.button})]})})})})}function zL({currentStep:n,language:e}){const a=Qh.findIndex(i=>i.key===n);return g.jsx("div",{className:"w-full pt-6 pb-4 relative z-20 px-6 sm:px-8",children:g.jsx("div",{className:"max-w-2xl mx-auto",children:g.jsx("div",{className:"max-w-md mx-auto px-2",children:g.jsxs("div",{className:"flex items-start justify-between relative px-4",children:[g.jsx("div",{className:"absolute top-5 h-0.5 bg-slate-200",style:{left:"calc(16.67% + 4px)",right:"calc(16.67% + 4px)"},children:g.jsx("div",{className:"h-full bg-gradient-to-r from-brand-primary to-brand-primary-hover transition-all duration-500 ease-out",style:{width:`${a/(Qh.length-1)*100}%`}})}),Qh.map((i,o)=>{const c=o<a,u=o===a,f=e==="fr"?i.labelFr:i.labelEn;return g.jsxs("div",{className:"flex flex-col items-center relative z-10 flex-1",children:[g.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${c?"bg-brand-success text-white scale-100":u?"bg-brand-primary text-white scale-110 shadow-lg shadow-brand-primary/30":"bg-white border-2 border-slate-200 text-slate-400"}`,children:c?g.jsx(Vu,{className:"w-5 h-5",strokeWidth:3}):g.jsx("span",{className:"text-sm font-semibold",children:o+1})}),g.jsx("span",{className:`mt-3 text-xs sm:text-sm text-center transition-all leading-tight max-w-[90px] ${u?"text-brand-primary font-bold":c?"text-brand-success font-medium":"text-slate-500 font-medium"}`,children:f})]},i.key)})]})})})})}function jL(){const{currentStep:n,formData:e,updateFormData:a,nextStep:i,prevStep:o,resetWizard:c}=oA();x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[n]),x.useEffect(()=>{if(n==="loading"){const m=setTimeout(()=>{i()},7e3);return()=>clearTimeout(m)}},[n,i]);const u={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},f={duration:.3};return g.jsxs("div",{className:"bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden min-h-screen",children:[g.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",children:g.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"radial-gradient(circle at 2px 2px, oklch(0.556 0 0) 1px, transparent 0)",backgroundSize:"32px 32px"}})}),n!=="landing"&&n!=="security"&&n!=="otp"&&n!=="loading"&&g.jsx(zL,{currentStep:n,language:e.language}),g.jsxs(cu,{mode:"wait",children:[n==="landing"&&g.jsx(ye.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:f,children:g.jsx(mR,{language:e.language,onLanguageChange:m=>a({language:m}),onStart:i})},"landing"),n==="security"&&g.jsx(ye.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:f,children:g.jsx(mB,{language:e.language,birthDate:e.birthDate,onBirthDateChange:m=>a({birthDate:m}),onNext:i,onBack:o})},"security"),n==="otp"&&g.jsx(ye.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:f,children:g.jsx(kB,{language:e.language,otpCode:e.otpCode,onOTPChange:m=>a({otpCode:m}),onNext:i,onBack:o})},"otp"),n==="loading"&&g.jsx(ye.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:f,children:g.jsx(PB,{language:e.language})},"loading"),n==="qualification"&&g.jsx(ye.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:f,children:g.jsx(RL,{language:e.language,reason:e.reason,insurance:e.insurance,hasEmployer:e.hasEmployer,consentNLPD:e.consentNLPD,consentMarketing:e.consentMarketing,identityCard:e.identityCard,insuranceCard:e.insuranceCard,onReasonChange:m=>a({reason:m}),onInsuranceChange:m=>a({insurance:m}),onHasEmployerChange:m=>a({hasEmployer:m}),onConsentNLPDChange:m=>a({consentNLPD:m}),onConsentMarketingChange:m=>a({consentMarketing:m}),onIdentityCardChange:m=>a({identityCard:m}),onInsuranceCardChange:m=>a({insuranceCard:m}),onNext:i,onBack:o})},"qualification"),n==="admin"&&g.jsx(ye.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:f,children:g.jsx(_L,{language:e.language,formData:e,reason:e.reason,insurance:e.insurance,hasEmployer:e.hasEmployer,onFormDataChange:m=>a(m),onNext:i,onBack:o})},"admin"),n==="success"&&g.jsx(ye.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:f,children:g.jsx(OL,{language:e.language,onRestart:c})},"success")]})]})}const VL=jx("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function GL({className:n,variant:e,...a}){return g.jsx("div",{"data-slot":"alert",role:"alert",className:yn(VL({variant:e}),n),...a})}function FL({className:n,...e}){return g.jsx("div",{"data-slot":"alert-title",className:yn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",n),...e})}function HL({className:n,...e}){return g.jsx("div",{"data-slot":"alert-description",className:yn("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",n),...e})}const IL=({error:n,resetErrorBoundary:e})=>g.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center p-4",children:g.jsxs("div",{className:"w-full max-w-md",children:[g.jsxs(GL,{variant:"destructive",className:"mb-6",children:[g.jsx(OA,{}),g.jsx(FL,{children:"This spark has encountered a runtime error"}),g.jsx(HL,{children:"Something unexpected happened while running the application. The error details are shown below. Contact the spark author and let them know about this issue."})]}),g.jsxs("div",{className:"bg-card border rounded-lg p-4 mb-6",children:[g.jsx("h3",{className:"font-semibold text-sm text-muted-foreground mb-2",children:"Error Details:"}),g.jsx("pre",{className:"text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32",children:n.message})]}),g.jsxs(er,{onClick:e,className:"w-full",variant:"outline",children:[g.jsx(RA,{}),"Try Again"]})]})});KC.createRoot(document.getElementById("root")).render(g.jsx(ZC,{FallbackComponent:IL,children:g.jsx("div",{id:"spark-app",children:g.jsx(jL,{})})}));
