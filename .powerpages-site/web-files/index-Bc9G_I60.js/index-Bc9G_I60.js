function hA(n,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in n)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(n,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function b4(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _h={exports:{}},el={};var Dv;function mA(){if(Dv)return el;Dv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function r(i,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:n,type:i,key:u,ref:s!==void 0?s:null,props:l}}return el.Fragment=e,el.jsx=r,el.jsxs=r,el}var Ev;function pA(){return Ev||(Ev=1,_h.exports=mA()),_h.exports}var b=pA(),Oh={exports:{}},nl={},zh={exports:{}},jh={};var Nv;function gA(){return Nv||(Nv=1,(function(n){function e(T,D){var I=T.length;T.push(D);e:for(;0<I;){var q=I-1>>>1,$=T[q];if(0<s($,D))T[q]=D,T[I]=$,I=q;else break e}}function r(T){return T.length===0?null:T[0]}function i(T){if(T.length===0)return null;var D=T[0],I=T.pop();if(I!==D){T[0]=I;e:for(var q=0,$=T.length,P=$>>>1;q<P;){var Z=2*(q+1)-1,te=T[Z],X=Z+1,Q=T[X];if(0>s(te,I))X<$&&0>s(Q,te)?(T[q]=Q,T[X]=I,q=X):(T[q]=te,T[Z]=I,q=Z);else if(X<$&&0>s(Q,I))T[q]=Q,T[X]=I,q=X;else break e}}return D}function s(T,D){var I=T.sortIndex-D.sortIndex;return I!==0?I:T.id-D.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],p=[],m=1,y=null,v=3,x=!1,A=!1,S=!1,N=!1,w=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function z(T){for(var D=r(p);D!==null;){if(D.callback===null)i(p);else if(D.startTime<=T)i(p),D.sortIndex=D.expirationTime,e(f,D);else break;D=r(p)}}function G(T){if(S=!1,z(T),!A)if(r(f)!==null)A=!0,_||(_=!0,F());else{var D=r(p);D!==null&&Y(G,D.startTime-T)}}var _=!1,O=-1,E=5,k=-1;function j(){return N?!0:!(n.unstable_now()-k<E)}function V(){if(N=!1,_){var T=n.unstable_now();k=T;var D=!0;try{e:{A=!1,S&&(S=!1,R(O),O=-1),x=!0;var I=v;try{n:{for(z(T),y=r(f);y!==null&&!(y.expirationTime>T&&j());){var q=y.callback;if(typeof q=="function"){y.callback=null,v=y.priorityLevel;var $=q(y.expirationTime<=T);if(T=n.unstable_now(),typeof $=="function"){y.callback=$,z(T),D=!0;break n}y===r(f)&&i(f),z(T)}else i(f);y=r(f)}if(y!==null)D=!0;else{var P=r(p);P!==null&&Y(G,P.startTime-T),D=!1}}break e}finally{y=null,v=I,x=!1}D=void 0}}finally{D?F():_=!1}}}var F;if(typeof L=="function")F=function(){L(V)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=V,F=function(){H.postMessage(null)}}else F=function(){w(V,0)};function Y(T,D){O=w(function(){T(n.unstable_now())},D)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(T){T.callback=null},n.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_next=function(T){switch(v){case 1:case 2:case 3:var D=3;break;default:D=v}var I=v;v=D;try{return T()}finally{v=I}},n.unstable_requestPaint=function(){N=!0},n.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=v;v=T;try{return D()}finally{v=I}},n.unstable_scheduleCallback=function(T,D,I){var q=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?q+I:q):I=q,T){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=I+$,T={id:m++,callback:D,priorityLevel:T,startTime:I,expirationTime:$,sortIndex:-1},I>q?(T.sortIndex=I,e(p,T),r(f)===null&&T===r(p)&&(S?(R(O),O=-1):S=!0,Y(G,I-q))):(T.sortIndex=$,e(f,T),A||x||(A=!0,_||(_=!0,F()))),T},n.unstable_shouldYield=j,n.unstable_wrapCallback=function(T){var D=v;return function(){var I=v;v=D;try{return T.apply(this,arguments)}finally{v=I}}}})(jh)),jh}var Rv;function yA(){return Rv||(Rv=1,zh.exports=gA()),zh.exports}var Vh={exports:{}},He={};var kv;function vA(){if(kv)return He;kv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,N={};function w(P,Z,te){this.props=P,this.context=Z,this.refs=N,this.updater=te||A}w.prototype.isReactComponent={},w.prototype.setState=function(P,Z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Z,"setState")},w.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function R(){}R.prototype=w.prototype;function L(P,Z,te){this.props=P,this.context=Z,this.refs=N,this.updater=te||A}var z=L.prototype=new R;z.constructor=L,S(z,w.prototype),z.isPureReactComponent=!0;var G=Array.isArray;function _(){}var O={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function k(P,Z,te){var X=te.ref;return{$$typeof:n,type:P,key:Z,ref:X!==void 0?X:null,props:te}}function j(P,Z){return k(P.type,Z,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function F(P){var Z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(te){return Z[te]})}var U=/\/+/g;function H(P,Z){return typeof P=="object"&&P!==null&&P.key!=null?F(""+P.key):Z.toString(36)}function Y(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(_,_):(P.status="pending",P.then(function(Z){P.status==="pending"&&(P.status="fulfilled",P.value=Z)},function(Z){P.status==="pending"&&(P.status="rejected",P.reason=Z)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function T(P,Z,te,X,Q){var ye=typeof P;(ye==="undefined"||ye==="boolean")&&(P=null);var ce=!1;if(P===null)ce=!0;else switch(ye){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(P.$$typeof){case n:case e:ce=!0;break;case m:return ce=P._init,T(ce(P._payload),Z,te,X,Q)}}if(ce)return Q=Q(P),ce=X===""?"."+H(P,0):X,G(Q)?(te="",ce!=null&&(te=ce.replace(U,"$&/")+"/"),T(Q,Z,te,"",function(oe){return oe})):Q!=null&&(V(Q)&&(Q=j(Q,te+(Q.key==null||P&&P.key===Q.key?"":(""+Q.key).replace(U,"$&/")+"/")+ce)),Z.push(Q)),1;ce=0;var Se=X===""?".":X+":";if(G(P))for(var ge=0;ge<P.length;ge++)X=P[ge],ye=Se+H(X,ge),ce+=T(X,Z,te,ye,Q);else if(ge=x(P),typeof ge=="function")for(P=ge.call(P),ge=0;!(X=P.next()).done;)X=X.value,ye=Se+H(X,ge++),ce+=T(X,Z,te,ye,Q);else if(ye==="object"){if(typeof P.then=="function")return T(Y(P),Z,te,X,Q);throw Z=String(P),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ce}function D(P,Z,te){if(P==null)return P;var X=[],Q=0;return T(P,X,"","",function(ye){return Z.call(te,ye,Q++)}),X}function I(P){if(P._status===-1){var Z=P._result;Z=Z(),Z.then(function(te){(P._status===0||P._status===-1)&&(P._status=1,P._result=te)},function(te){(P._status===0||P._status===-1)&&(P._status=2,P._result=te)}),P._status===-1&&(P._status=0,P._result=Z)}if(P._status===1)return P._result.default;throw P._result}var q=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},$={map:D,forEach:function(P,Z,te){D(P,function(){Z.apply(this,arguments)},te)},count:function(P){var Z=0;return D(P,function(){Z++}),Z},toArray:function(P){return D(P,function(Z){return Z})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return He.Activity=y,He.Children=$,He.Component=w,He.Fragment=r,He.Profiler=s,He.PureComponent=L,He.StrictMode=i,He.Suspense=f,He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,He.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},He.cache=function(P){return function(){return P.apply(null,arguments)}},He.cacheSignal=function(){return null},He.cloneElement=function(P,Z,te){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var X=S({},P.props),Q=P.key;if(Z!=null)for(ye in Z.key!==void 0&&(Q=""+Z.key),Z)!E.call(Z,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&Z.ref===void 0||(X[ye]=Z[ye]);var ye=arguments.length-2;if(ye===1)X.children=te;else if(1<ye){for(var ce=Array(ye),Se=0;Se<ye;Se++)ce[Se]=arguments[Se+2];X.children=ce}return k(P.type,Q,X)},He.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},He.createElement=function(P,Z,te){var X,Q={},ye=null;if(Z!=null)for(X in Z.key!==void 0&&(ye=""+Z.key),Z)E.call(Z,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(Q[X]=Z[X]);var ce=arguments.length-2;if(ce===1)Q.children=te;else if(1<ce){for(var Se=Array(ce),ge=0;ge<ce;ge++)Se[ge]=arguments[ge+2];Q.children=Se}if(P&&P.defaultProps)for(X in ce=P.defaultProps,ce)Q[X]===void 0&&(Q[X]=ce[X]);return k(P,ye,Q)},He.createRef=function(){return{current:null}},He.forwardRef=function(P){return{$$typeof:d,render:P}},He.isValidElement=V,He.lazy=function(P){return{$$typeof:m,_payload:{_status:-1,_result:P},_init:I}},He.memo=function(P,Z){return{$$typeof:p,type:P,compare:Z===void 0?null:Z}},He.startTransition=function(P){var Z=O.T,te={};O.T=te;try{var X=P(),Q=O.S;Q!==null&&Q(te,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(_,q)}catch(ye){q(ye)}finally{Z!==null&&te.types!==null&&(Z.types=te.types),O.T=Z}},He.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},He.use=function(P){return O.H.use(P)},He.useActionState=function(P,Z,te){return O.H.useActionState(P,Z,te)},He.useCallback=function(P,Z){return O.H.useCallback(P,Z)},He.useContext=function(P){return O.H.useContext(P)},He.useDebugValue=function(){},He.useDeferredValue=function(P,Z){return O.H.useDeferredValue(P,Z)},He.useEffect=function(P,Z){return O.H.useEffect(P,Z)},He.useEffectEvent=function(P){return O.H.useEffectEvent(P)},He.useId=function(){return O.H.useId()},He.useImperativeHandle=function(P,Z,te){return O.H.useImperativeHandle(P,Z,te)},He.useInsertionEffect=function(P,Z){return O.H.useInsertionEffect(P,Z)},He.useLayoutEffect=function(P,Z){return O.H.useLayoutEffect(P,Z)},He.useMemo=function(P,Z){return O.H.useMemo(P,Z)},He.useOptimistic=function(P,Z){return O.H.useOptimistic(P,Z)},He.useReducer=function(P,Z,te){return O.H.useReducer(P,Z,te)},He.useRef=function(P){return O.H.useRef(P)},He.useState=function(P){return O.H.useState(P)},He.useSyncExternalStore=function(P,Z,te){return O.H.useSyncExternalStore(P,Z,te)},He.useTransition=function(){return O.H.useTransition()},He.version="19.2.0",He}var Pv;function mp(){return Pv||(Pv=1,Vh.exports=vA()),Vh.exports}var Fh={exports:{}},vt={};var Bv;function bA(){if(Bv)return vt;Bv=1;var n=mp();function e(f){var p="https://react.dev/errors/"+f;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+f+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(e(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(f,p,m){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:f,containerInfo:p,implementation:m}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,p){if(f==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,vt.createPortal=function(f,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(f,p,null,m)},vt.flushSync=function(f){var p=u.T,m=i.p;try{if(u.T=null,i.p=2,f)return f()}finally{u.T=p,i.p=m,i.d.f()}},vt.preconnect=function(f,p){typeof f=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(f,p))},vt.prefetchDNS=function(f){typeof f=="string"&&i.d.D(f)},vt.preinit=function(f,p){if(typeof f=="string"&&p&&typeof p.as=="string"){var m=p.as,y=d(m,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?i.d.S(f,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:x}):m==="script"&&i.d.X(f,{crossOrigin:y,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},vt.preinitModule=function(f,p){if(typeof f=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=d(p.as,p.crossOrigin);i.d.M(f,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(f)},vt.preload=function(f,p){if(typeof f=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,y=d(m,p.crossOrigin);i.d.L(f,m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},vt.preloadModule=function(f,p){if(typeof f=="string")if(p){var m=d(p.as,p.crossOrigin);i.d.m(f,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(f)},vt.requestFormReset=function(f){i.d.r(f)},vt.unstable_batchedUpdates=function(f,p){return f(p)},vt.useFormState=function(f,p,m){return u.H.useFormState(f,p,m)},vt.useFormStatus=function(){return u.H.useHostTransitionStatus()},vt.version="19.2.0",vt}var Lv;function x4(){if(Lv)return Fh.exports;Lv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Fh.exports=bA(),Fh.exports}var _v;function xA(){if(_v)return nl;_v=1;var n=yA(),e=mp(),r=x4();function i(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var a=t,o=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(o=a.return),t=a.return;while(t)}return a.tag===3?o:null}function u(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function d(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function f(t){if(l(t)!==t)throw Error(i(188))}function p(t){var a=t.alternate;if(!a){if(a=l(t),a===null)throw Error(i(188));return a!==t?null:t}for(var o=t,c=a;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){o=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return f(h),t;if(g===c)return f(h),a;g=g.sibling}throw Error(i(188))}if(o.return!==c.return)o=h,c=g;else{for(var M=!1,B=h.child;B;){if(B===o){M=!0,o=h,c=g;break}if(B===c){M=!0,c=h,o=g;break}B=B.sibling}if(!M){for(B=g.child;B;){if(B===o){M=!0,o=g,c=h;break}if(B===c){M=!0,c=g,o=h;break}B=B.sibling}if(!M)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:a}function m(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=m(t),a!==null)return a;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),L=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var U=Symbol.for("react.client.reference");function H(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===U?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case S:return"Fragment";case w:return"Profiler";case N:return"StrictMode";case G:return"Suspense";case _:return"SuspenseList";case k:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case L:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case z:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return a=t.displayName||null,a!==null?a:H(t.type)||"Memo";case E:a=t._payload,t=t._init;try{return H(t(a))}catch{}}return null}var Y=Array.isArray,T=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},q=[],$=-1;function P(t){return{current:t}}function Z(t){0>$||(t.current=q[$],q[$]=null,$--)}function te(t,a){$++,q[$]=t.current,t.current=a}var X=P(null),Q=P(null),ye=P(null),ce=P(null);function Se(t,a){switch(te(ye,a),te(Q,t),te(X,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?W0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=W0(a),t=X0(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(X),te(X,t)}function ge(){Z(X),Z(Q),Z(ye)}function oe(t){t.memoizedState!==null&&te(ce,t);var a=X.current,o=X0(a,t.type);a!==o&&(te(Q,t),te(X,o))}function fe(t){Q.current===t&&(Z(X),Z(Q)),ce.current===t&&(Z(ce),Wo._currentValue=I)}var xe,_e;function Me(t){if(xe===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);xe=a&&a[1]||"",_e=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xe+t+_e}var Ae=!1;function Je(t,a){if(!t||Ae)return"";Ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(le){var ie=le}Reflect.construct(t,[],me)}else{try{me.call()}catch(le){ie=le}t.call(me.prototype)}}else{try{throw Error()}catch(le){ie=le}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(le){if(le&&ie&&typeof le.stack=="string")return[le.stack,ie.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),M=g[0],B=g[1];if(M&&B){var K=M.split(`
`),ae=B.split(`
`);for(h=c=0;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;for(;h<ae.length&&!ae[h].includes("DetermineComponentFrameRoot");)h++;if(c===K.length||h===ae.length)for(c=K.length-1,h=ae.length-1;1<=c&&0<=h&&K[c]!==ae[h];)h--;for(;1<=c&&0<=h;c--,h--)if(K[c]!==ae[h]){if(c!==1||h!==1)do if(c--,h--,0>h||K[c]!==ae[h]){var de=`
`+K[c].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=c&&0<=h);break}}}finally{Ae=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?Me(o):""}function Fe(t,a){switch(t.tag){case 26:case 27:case 5:return Me(t.type);case 16:return Me("Lazy");case 13:return t.child!==a&&a!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Je(t.type,!1);case 11:return Je(t.type.render,!1);case 1:return Je(t.type,!0);case 31:return Me("Activity");default:return""}}function qe(t){try{var a="",o=null;do a+=Fe(t,o),o=t,t=t.return;while(t);return a}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var je=Object.prototype.hasOwnProperty,J=n.unstable_scheduleCallback,ee=n.unstable_cancelCallback,se=n.unstable_shouldYield,ve=n.unstable_requestPaint,ue=n.unstable_now,pe=n.unstable_getCurrentPriorityLevel,Ce=n.unstable_ImmediatePriority,Ge=n.unstable_UserBlockingPriority,Oe=n.unstable_NormalPriority,Cn=n.unstable_LowPriority,An=n.unstable_IdlePriority,En=n.log,ot=n.unstable_setDisableYieldValue,vn=null,rn=null;function Kn(t){if(typeof En=="function"&&ot(t),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(vn,t)}catch{}}var Yn=Math.clz32?Math.clz32:Gl,lo=Math.log,ha=Math.LN2;function Gl(t){return t>>>=0,t===0?32:31-(lo(t)/ha|0)|0}var Ar=256,ji=262144,Ot=4194304;function yt(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function cr(t,a,o){var c=t.pendingLanes;if(c===0)return 0;var h=0,g=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var B=c&134217727;return B!==0?(c=B&~g,c!==0?h=yt(c):(M&=B,M!==0?h=yt(M):o||(o=B&~t,o!==0&&(h=yt(o))))):(B=c&~g,B!==0?h=yt(B):M!==0?h=yt(M):o||(o=c&~t,o!==0&&(h=yt(o)))),h===0?0:a!==0&&a!==h&&(a&g)===0&&(g=h&-h,o=a&-a,g>=o||g===32&&(o&4194048)!==0)?a:h}function ur(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Hl(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(){var t=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),t}function dr(t){for(var a=[],o=0;31>o;o++)a.push(t);return a}function co(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nM(t,a,o,c,h,g){var M=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var B=t.entanglements,K=t.expirationTimes,ae=t.hiddenUpdates;for(o=M&~o;0<o;){var de=31-Yn(o),me=1<<de;B[de]=0,K[de]=-1;var ie=ae[de];if(ie!==null)for(ae[de]=null,de=0;de<ie.length;de++){var le=ie[de];le!==null&&(le.lane&=-536870913)}o&=~me}c!==0&&Pg(t,c,0),g!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=g&~(M&~a))}function Pg(t,a,o){t.pendingLanes|=a,t.suspendedLanes&=~a;var c=31-Yn(a);t.entangledLanes|=a,t.entanglements[c]=t.entanglements[c]|1073741824|o&261930}function Bg(t,a){var o=t.entangledLanes|=a;for(t=t.entanglements;o;){var c=31-Yn(o),h=1<<c;h&a|t[c]&a&&(t[c]|=a),o&=~h}}function Lg(t,a){var o=a&-a;return o=(o&42)!==0?1:Cd(o),(o&(t.suspendedLanes|a))!==0?0:o}function Cd(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ad(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _g(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:xv(t.type))}function Og(t,a){var o=D.p;try{return D.p=t,a()}finally{D.p=o}}var ma=Math.random().toString(36).slice(2),dt="__reactFiber$"+ma,Tt="__reactProps$"+ma,Vi="__reactContainer$"+ma,wd="__reactEvents$"+ma,tM="__reactListeners$"+ma,rM="__reactHandles$"+ma,zg="__reactResources$"+ma,uo="__reactMarker$"+ma;function Td(t){delete t[dt],delete t[Tt],delete t[wd],delete t[tM],delete t[rM]}function Fi(t){var a=t[dt];if(a)return a;for(var o=t.parentNode;o;){if(a=o[Vi]||o[dt]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(t=av(t);t!==null;){if(o=t[dt])return o;t=av(t)}return a}t=o,o=t.parentNode}return null}function Gi(t){if(t=t[dt]||t[Vi]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function fo(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(i(33))}function Hi(t){var a=t[zg];return a||(a=t[zg]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function lt(t){t[uo]=!0}var jg=new Set,Vg={};function ai(t,a){Ii(t,a),Ii(t+"Capture",a)}function Ii(t,a){for(Vg[t]=a,t=0;t<a.length;t++)jg.add(a[t])}var aM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fg={},Gg={};function iM(t){return je.call(Gg,t)?!0:je.call(Fg,t)?!1:aM.test(t)?Gg[t]=!0:(Fg[t]=!0,!1)}function Il(t,a,o){if(iM(a))if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+o)}}function Ul(t,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+o)}}function Hr(t,a,o,c){if(c===null)t.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(a,o,""+c)}}function Yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hg(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function sM(t,a,o){var c=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var h=c.get,g=c.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return h.call(this)},set:function(M){o=""+M,g.call(this,M)}}),Object.defineProperty(t,a,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Dd(t){if(!t._valueTracker){var a=Hg(t)?"checked":"value";t._valueTracker=sM(t,a,""+t[a])}}function Ig(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var o=a.getValue(),c="";return t&&(c=Hg(t)?t.checked?"true":"false":t.value),t=c,t!==o?(a.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var oM=/[\n"\\]/g;function Zt(t){return t.replace(oM,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ed(t,a,o,c,h,g,M,B){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),a!=null?M==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Yt(a)):t.value!==""+Yt(a)&&(t.value=""+Yt(a)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),a!=null?Nd(t,M,Yt(a)):o!=null?Nd(t,M,Yt(o)):c!=null&&t.removeAttribute("value"),h==null&&g!=null&&(t.defaultChecked=!!g),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),B!=null&&typeof B!="function"&&typeof B!="symbol"&&typeof B!="boolean"?t.name=""+Yt(B):t.removeAttribute("name")}function Ug(t,a,o,c,h,g,M,B){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.type=g),a!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||a!=null)){Dd(t);return}o=o!=null?""+Yt(o):"",a=a!=null?""+Yt(a):o,B||a===t.value||(t.value=a),t.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,t.checked=B?t.checked:!!c,t.defaultChecked=!!c,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Dd(t)}function Nd(t,a,o){a==="number"&&Jl(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function Ui(t,a,o,c){if(t=t.options,a){a={};for(var h=0;h<o.length;h++)a["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=a.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Yt(o),a=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,c&&(t[h].defaultSelected=!0);return}a!==null||t[h].disabled||(a=t[h])}a!==null&&(a.selected=!0)}}function Jg(t,a,o){if(a!=null&&(a=""+Yt(a),a!==t.value&&(t.value=a),o==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=o!=null?""+Yt(o):""}function qg(t,a,o,c){if(a==null){if(c!=null){if(o!=null)throw Error(i(92));if(Y(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),a=o}o=Yt(a),t.defaultValue=o,c=t.textContent,c===o&&c!==""&&c!==null&&(t.value=c),Dd(t)}function Ji(t,a){if(a){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=a;return}}t.textContent=a}var lM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kg(t,a,o){var c=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":c?t.setProperty(a,o):typeof o!="number"||o===0||lM.has(a)?a==="float"?t.cssFloat=o:t[a]=(""+o).trim():t[a]=o+"px"}function Yg(t,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(t=t.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?t.setProperty(c,""):c==="float"?t.cssFloat="":t[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&o[h]!==c&&Kg(t,h,c)}else for(var g in a)a.hasOwnProperty(g)&&Kg(t,g,a[g])}function Rd(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(t){return uM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ir(){}var kd=null;function Pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qi=null,Ki=null;function Zg(t){var a=Gi(t);if(a&&(t=a.stateNode)){var o=t[Tt]||null;e:switch(t=a.stateNode,a.type){case"input":if(Ed(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Zt(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var c=o[a];if(c!==t&&c.form===t.form){var h=c[Tt]||null;if(!h)throw Error(i(90));Ed(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<o.length;a++)c=o[a],c.form===t.form&&Ig(c)}break e;case"textarea":Jg(t,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&Ui(t,!!o.multiple,a,!1)}}}var Bd=!1;function Wg(t,a,o){if(Bd)return t(a,o);Bd=!0;try{var c=t(a);return c}finally{if(Bd=!1,(qi!==null||Ki!==null)&&(Bc(),qi&&(a=qi,t=Ki,Ki=qi=null,Zg(a),t)))for(a=0;a<t.length;a++)Zg(t[a])}}function ho(t,a){var o=t.stateNode;if(o===null)return null;var c=o[Tt]||null;if(c===null)return null;o=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ld=!1;if(Ur)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Ld=!1}var pa=null,_d=null,Kl=null;function Xg(){if(Kl)return Kl;var t,a=_d,o=a.length,c,h="value"in pa?pa.value:pa.textContent,g=h.length;for(t=0;t<o&&a[t]===h[t];t++);var M=o-t;for(c=1;c<=M&&a[o-c]===h[g-c];c++);return Kl=h.slice(t,1<c?1-c:void 0)}function Yl(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function Qg(){return!1}function Dt(t){function a(o,c,h,g,M){this._reactName=o,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var B in t)t.hasOwnProperty(B)&&(o=t[B],this[B]=o?o(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Zl:Qg,this.isPropagationStopped=Qg,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),a}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=Dt(ii),po=y({},ii,{view:0,detail:0}),dM=Dt(po),Od,zd,go,Xl=y({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Od=t.screenX-go.screenX,zd=t.screenY-go.screenY):zd=Od=0,go=t),Od)},movementY:function(t){return"movementY"in t?t.movementY:zd}}),$g=Dt(Xl),fM=y({},Xl,{dataTransfer:0}),hM=Dt(fM),mM=y({},po,{relatedTarget:0}),jd=Dt(mM),pM=y({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),gM=Dt(pM),yM=y({},ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vM=Dt(yM),bM=y({},ii,{data:0}),e1=Dt(bM),xM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CM(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=MM[t])?!!a[t]:!1}function Vd(){return CM}var AM=y({},po,{key:function(t){if(t.key){var a=xM[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wM=Dt(AM),TM=y({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n1=Dt(TM),DM=y({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),EM=Dt(DM),NM=y({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),RM=Dt(NM),kM=y({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=Dt(kM),BM=y({},ii,{newState:0,oldState:0}),LM=Dt(BM),_M=[9,13,27,32],Fd=Ur&&"CompositionEvent"in window,yo=null;Ur&&"documentMode"in document&&(yo=document.documentMode);var OM=Ur&&"TextEvent"in window&&!yo,t1=Ur&&(!Fd||yo&&8<yo&&11>=yo),r1=" ",a1=!1;function i1(t,a){switch(t){case"keyup":return _M.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yi=!1;function zM(t,a){switch(t){case"compositionend":return s1(a);case"keypress":return a.which!==32?null:(a1=!0,r1);case"textInput":return t=a.data,t===r1&&a1?null:t;default:return null}}function jM(t,a){if(Yi)return t==="compositionend"||!Fd&&i1(t,a)?(t=Xg(),Kl=_d=pa=null,Yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return t1&&a.locale!=="ko"?null:a.data;default:return null}}var VM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!VM[t.type]:a==="textarea"}function l1(t,a,o,c){qi?Ki?Ki.push(c):Ki=[c]:qi=c,a=Fc(a,"onChange"),0<a.length&&(o=new Wl("onChange","change",null,o,c),t.push({event:o,listeners:a}))}var vo=null,bo=null;function FM(t){U0(t,0)}function Ql(t){var a=fo(t);if(Ig(a))return t}function c1(t,a){if(t==="change")return a}var u1=!1;if(Ur){var Gd;if(Ur){var Hd="oninput"in document;if(!Hd){var d1=document.createElement("div");d1.setAttribute("oninput","return;"),Hd=typeof d1.oninput=="function"}Gd=Hd}else Gd=!1;u1=Gd&&(!document.documentMode||9<document.documentMode)}function f1(){vo&&(vo.detachEvent("onpropertychange",h1),bo=vo=null)}function h1(t){if(t.propertyName==="value"&&Ql(bo)){var a=[];l1(a,bo,t,Pd(t)),Wg(FM,a)}}function GM(t,a,o){t==="focusin"?(f1(),vo=a,bo=o,vo.attachEvent("onpropertychange",h1)):t==="focusout"&&f1()}function HM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(bo)}function IM(t,a){if(t==="click")return Ql(a)}function UM(t,a){if(t==="input"||t==="change")return Ql(a)}function JM(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var zt=typeof Object.is=="function"?Object.is:JM;function xo(t,a){if(zt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var o=Object.keys(t),c=Object.keys(a);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var h=o[c];if(!je.call(a,h)||!zt(t[h],a[h]))return!1}return!0}function m1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function p1(t,a){var o=m1(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=a&&c>=a)return{node:o,offset:a-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=m1(o)}}function g1(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?g1(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function y1(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Jl(t.document);a instanceof t.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)t=a.contentWindow;else break;a=Jl(t.document)}return a}function Id(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var qM=Ur&&"documentMode"in document&&11>=document.documentMode,Zi=null,Ud=null,So=null,Jd=!1;function v1(t,a,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Jd||Zi==null||Zi!==Jl(c)||(c=Zi,"selectionStart"in c&&Id(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),So&&xo(So,c)||(So=c,c=Fc(Ud,"onSelect"),0<c.length&&(a=new Wl("onSelect","select",null,a,o),t.push({event:a,listeners:c}),a.target=Zi)))}function si(t,a){var o={};return o[t.toLowerCase()]=a.toLowerCase(),o["Webkit"+t]="webkit"+a,o["Moz"+t]="moz"+a,o}var Wi={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionrun:si("Transition","TransitionRun"),transitionstart:si("Transition","TransitionStart"),transitioncancel:si("Transition","TransitionCancel"),transitionend:si("Transition","TransitionEnd")},qd={},b1={};Ur&&(b1=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function oi(t){if(qd[t])return qd[t];if(!Wi[t])return t;var a=Wi[t],o;for(o in a)if(a.hasOwnProperty(o)&&o in b1)return qd[t]=a[o];return t}var x1=oi("animationend"),S1=oi("animationiteration"),M1=oi("animationstart"),KM=oi("transitionrun"),YM=oi("transitionstart"),ZM=oi("transitioncancel"),C1=oi("transitionend"),A1=new Map,Kd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kd.push("scrollEnd");function fr(t,a){A1.set(t,a),ai(a,[t])}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Wt=[],Xi=0,Yd=0;function ec(){for(var t=Xi,a=Yd=Xi=0;a<t;){var o=Wt[a];Wt[a++]=null;var c=Wt[a];Wt[a++]=null;var h=Wt[a];Wt[a++]=null;var g=Wt[a];if(Wt[a++]=null,c!==null&&h!==null){var M=c.pending;M===null?h.next=h:(h.next=M.next,M.next=h),c.pending=h}g!==0&&w1(o,h,g)}}function nc(t,a,o,c){Wt[Xi++]=t,Wt[Xi++]=a,Wt[Xi++]=o,Wt[Xi++]=c,Yd|=c,t.lanes|=c,t=t.alternate,t!==null&&(t.lanes|=c)}function Zd(t,a,o,c){return nc(t,a,o,c),tc(t)}function li(t,a){return nc(t,null,null,a),tc(t)}function w1(t,a,o){t.lanes|=o;var c=t.alternate;c!==null&&(c.lanes|=o);for(var h=!1,g=t.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(t=g.stateNode,t===null||t._visibility&1||(h=!0)),t=g,g=g.return;return t.tag===3?(g=t.stateNode,h&&a!==null&&(h=31-Yn(o),t=g.hiddenUpdates,c=t[h],c===null?t[h]=[a]:c.push(a),a.lane=o|536870912),g):null}function tc(t){if(50<Io)throw Io=0,ih=null,Error(i(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Qi={};function WM(t,a,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,a,o,c){return new WM(t,a,o,c)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jr(t,a){var o=t.alternate;return o===null?(o=jt(t.tag,a,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=a,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,a=t.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function T1(t,a){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,a=o.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function rc(t,a,o,c,h,g){var M=0;if(c=t,typeof t=="function")Wd(t)&&(M=1);else if(typeof t=="string")M=nA(t,o,X.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case k:return t=jt(31,o,a,h),t.elementType=k,t.lanes=g,t;case S:return ci(o.children,h,g,a);case N:M=8,h|=24;break;case w:return t=jt(12,o,a,h|2),t.elementType=w,t.lanes=g,t;case G:return t=jt(13,o,a,h),t.elementType=G,t.lanes=g,t;case _:return t=jt(19,o,a,h),t.elementType=_,t.lanes=g,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:M=10;break e;case R:M=9;break e;case z:M=11;break e;case O:M=14;break e;case E:M=16,c=null;break e}M=29,o=Error(i(130,t===null?"null":typeof t,"")),c=null}return a=jt(M,o,a,h),a.elementType=t,a.type=c,a.lanes=g,a}function ci(t,a,o,c){return t=jt(7,t,c,a),t.lanes=o,t}function Xd(t,a,o){return t=jt(6,t,null,a),t.lanes=o,t}function D1(t){var a=jt(18,null,null,0);return a.stateNode=t,a}function Qd(t,a,o){return a=jt(4,t.children!==null?t.children:[],t.key,a),a.lanes=o,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var E1=new WeakMap;function Xt(t,a){if(typeof t=="object"&&t!==null){var o=E1.get(t);return o!==void 0?o:(a={value:t,source:a,stack:qe(a)},E1.set(t,a),a)}return{value:t,source:a,stack:qe(a)}}var $i=[],es=0,ac=null,Mo=0,Qt=[],$t=0,ga=null,Tr=1,Dr="";function qr(t,a){$i[es++]=Mo,$i[es++]=ac,ac=t,Mo=a}function N1(t,a,o){Qt[$t++]=Tr,Qt[$t++]=Dr,Qt[$t++]=ga,ga=t;var c=Tr;t=Dr;var h=32-Yn(c)-1;c&=~(1<<h),o+=1;var g=32-Yn(a)+h;if(30<g){var M=h-h%5;g=(c&(1<<M)-1).toString(32),c>>=M,h-=M,Tr=1<<32-Yn(a)+h|o<<h|c,Dr=g+t}else Tr=1<<g|o<<h|c,Dr=t}function $d(t){t.return!==null&&(qr(t,1),N1(t,1,0))}function ef(t){for(;t===ac;)ac=$i[--es],$i[es]=null,Mo=$i[--es],$i[es]=null;for(;t===ga;)ga=Qt[--$t],Qt[$t]=null,Dr=Qt[--$t],Qt[$t]=null,Tr=Qt[--$t],Qt[$t]=null}function R1(t,a){Qt[$t++]=Tr,Qt[$t++]=Dr,Qt[$t++]=ga,Tr=a.id,Dr=a.overflow,ga=t}var ft=null,wn=null,nn=!1,ya=null,er=!1,nf=Error(i(519));function va(t){var a=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(Xt(a,t)),nf}function k1(t){var a=t.stateNode,o=t.type,c=t.memoizedProps;switch(a[dt]=t,a[Tt]=c,o){case"dialog":Qe("cancel",a),Qe("close",a);break;case"iframe":case"object":case"embed":Qe("load",a);break;case"video":case"audio":for(o=0;o<Jo.length;o++)Qe(Jo[o],a);break;case"source":Qe("error",a);break;case"img":case"image":case"link":Qe("error",a),Qe("load",a);break;case"details":Qe("toggle",a);break;case"input":Qe("invalid",a),Ug(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Qe("invalid",a);break;case"textarea":Qe("invalid",a),qg(a,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||c.suppressHydrationWarning===!0||Y0(a.textContent,o)?(c.popover!=null&&(Qe("beforetoggle",a),Qe("toggle",a)),c.onScroll!=null&&Qe("scroll",a),c.onScrollEnd!=null&&Qe("scrollend",a),c.onClick!=null&&(a.onclick=Ir),a=!0):a=!1,a||va(t,!0)}function P1(t){for(ft=t.return;ft;)switch(ft.tag){case 5:case 31:case 13:er=!1;return;case 27:case 3:er=!0;return;default:ft=ft.return}}function ns(t){if(t!==ft)return!1;if(!nn)return P1(t),nn=!0,!1;var a=t.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||xh(t.type,t.memoizedProps)),o=!o),o&&wn&&va(t),P1(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));wn=rv(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));wn=rv(t)}else a===27?(a=wn,Pa(t.type)?(t=wh,wh=null,wn=t):wn=a):wn=ft?tr(t.stateNode.nextSibling):null;return!0}function ui(){wn=ft=null,nn=!1}function tf(){var t=ya;return t!==null&&(kt===null?kt=t:kt.push.apply(kt,t),ya=null),t}function Co(t){ya===null?ya=[t]:ya.push(t)}var rf=P(null),di=null,Kr=null;function ba(t,a,o){te(rf,a._currentValue),a._currentValue=o}function Yr(t){t._currentValue=rf.current,Z(rf)}function af(t,a,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),t===o)break;t=t.return}}function sf(t,a,o,c){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var g=h.dependencies;if(g!==null){var M=h.child;g=g.firstContext;e:for(;g!==null;){var B=g;g=h;for(var K=0;K<a.length;K++)if(B.context===a[K]){g.lanes|=o,B=g.alternate,B!==null&&(B.lanes|=o),af(g.return,o,t),c||(M=null);break e}g=B.next}}else if(h.tag===18){if(M=h.return,M===null)throw Error(i(341));M.lanes|=o,g=M.alternate,g!==null&&(g.lanes|=o),af(M,o,t),M=null}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===t){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}}function ts(t,a,o,c){t=null;for(var h=a,g=!1;h!==null;){if(!g){if((h.flags&524288)!==0)g=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var M=h.alternate;if(M===null)throw Error(i(387));if(M=M.memoizedProps,M!==null){var B=h.type;zt(h.pendingProps.value,M.value)||(t!==null?t.push(B):t=[B])}}else if(h===ce.current){if(M=h.alternate,M===null)throw Error(i(387));M.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}h=h.return}t!==null&&sf(a,t,o,c),a.flags|=262144}function ic(t){for(t=t.firstContext;t!==null;){if(!zt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fi(t){di=t,Kr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ht(t){return B1(di,t)}function sc(t,a){return di===null&&fi(t),B1(t,a)}function B1(t,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Kr===null){if(t===null)throw Error(i(308));Kr=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Kr=Kr.next=a;return o}var XM=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(o,c){t.push(c)}};this.abort=function(){a.aborted=!0,t.forEach(function(o){return o()})}},QM=n.unstable_scheduleCallback,$M=n.unstable_NormalPriority,Zn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function of(){return{controller:new XM,data:new Map,refCount:0}}function Ao(t){t.refCount--,t.refCount===0&&QM($M,function(){t.controller.abort()})}var wo=null,lf=0,rs=0,as=null;function eC(t,a){if(wo===null){var o=wo=[];lf=0,rs=dh(),as={status:"pending",value:void 0,then:function(c){o.push(c)}}}return lf++,a.then(L1,L1),a}function L1(){if(--lf===0&&wo!==null){as!==null&&(as.status="fulfilled");var t=wo;wo=null,rs=0,as=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function nC(t,a){var o=[],c={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return t.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<o.length;h++)(0,o[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<o.length;h++)(0,o[h])(void 0)}),c}var _1=T.S;T.S=function(t,a){v0=ue(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&eC(t,a),_1!==null&&_1(t,a)};var hi=P(null);function cf(){var t=hi.current;return t!==null?t:bn.pooledCache}function oc(t,a){a===null?te(hi,hi.current):te(hi,a.pool)}function O1(){var t=cf();return t===null?null:{parent:Zn._currentValue,pool:t}}var is=Error(i(460)),uf=Error(i(474)),lc=Error(i(542)),cc={then:function(){}};function z1(t){return t=t.status,t==="fulfilled"||t==="rejected"}function j1(t,a,o){switch(o=t[o],o===void 0?t.push(a):o!==a&&(a.then(Ir,Ir),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,F1(t),t;default:if(typeof a.status=="string")a.then(Ir,Ir);else{if(t=bn,t!==null&&100<t.shellSuspendCounter)throw Error(i(482));t=a,t.status="pending",t.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,F1(t),t}throw pi=a,is}}function mi(t){try{var a=t._init;return a(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(pi=o,is):o}}var pi=null;function V1(){if(pi===null)throw Error(i(459));var t=pi;return pi=null,t}function F1(t){if(t===is||t===lc)throw Error(i(483))}var ss=null,To=0;function uc(t){var a=To;return To+=1,ss===null&&(ss=[]),j1(ss,t,a)}function Do(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function dc(t,a){throw a.$$typeof===v?Error(i(525)):(t=Object.prototype.toString.call(a),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function G1(t){function a(ne,W){if(t){var re=ne.deletions;re===null?(ne.deletions=[W],ne.flags|=16):re.push(W)}}function o(ne,W){if(!t)return null;for(;W!==null;)a(ne,W),W=W.sibling;return null}function c(ne){for(var W=new Map;ne!==null;)ne.key!==null?W.set(ne.key,ne):W.set(ne.index,ne),ne=ne.sibling;return W}function h(ne,W){return ne=Jr(ne,W),ne.index=0,ne.sibling=null,ne}function g(ne,W,re){return ne.index=re,t?(re=ne.alternate,re!==null?(re=re.index,re<W?(ne.flags|=67108866,W):re):(ne.flags|=67108866,W)):(ne.flags|=1048576,W)}function M(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function B(ne,W,re,he){return W===null||W.tag!==6?(W=Xd(re,ne.mode,he),W.return=ne,W):(W=h(W,re),W.return=ne,W)}function K(ne,W,re,he){var Le=re.type;return Le===S?de(ne,W,re.props.children,he,re.key):W!==null&&(W.elementType===Le||typeof Le=="object"&&Le!==null&&Le.$$typeof===E&&mi(Le)===W.type)?(W=h(W,re.props),Do(W,re),W.return=ne,W):(W=rc(re.type,re.key,re.props,null,ne.mode,he),Do(W,re),W.return=ne,W)}function ae(ne,W,re,he){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=Qd(re,ne.mode,he),W.return=ne,W):(W=h(W,re.children||[]),W.return=ne,W)}function de(ne,W,re,he,Le){return W===null||W.tag!==7?(W=ci(re,ne.mode,he,Le),W.return=ne,W):(W=h(W,re),W.return=ne,W)}function me(ne,W,re){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Xd(""+W,ne.mode,re),W.return=ne,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return re=rc(W.type,W.key,W.props,null,ne.mode,re),Do(re,W),re.return=ne,re;case A:return W=Qd(W,ne.mode,re),W.return=ne,W;case E:return W=mi(W),me(ne,W,re)}if(Y(W)||F(W))return W=ci(W,ne.mode,re,null),W.return=ne,W;if(typeof W.then=="function")return me(ne,uc(W),re);if(W.$$typeof===L)return me(ne,sc(ne,W),re);dc(ne,W)}return null}function ie(ne,W,re,he){var Le=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return Le!==null?null:B(ne,W,""+re,he);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case x:return re.key===Le?K(ne,W,re,he):null;case A:return re.key===Le?ae(ne,W,re,he):null;case E:return re=mi(re),ie(ne,W,re,he)}if(Y(re)||F(re))return Le!==null?null:de(ne,W,re,he,null);if(typeof re.then=="function")return ie(ne,W,uc(re),he);if(re.$$typeof===L)return ie(ne,W,sc(ne,re),he);dc(ne,re)}return null}function le(ne,W,re,he,Le){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return ne=ne.get(re)||null,B(W,ne,""+he,Le);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case x:return ne=ne.get(he.key===null?re:he.key)||null,K(W,ne,he,Le);case A:return ne=ne.get(he.key===null?re:he.key)||null,ae(W,ne,he,Le);case E:return he=mi(he),le(ne,W,re,he,Le)}if(Y(he)||F(he))return ne=ne.get(re)||null,de(W,ne,he,Le,null);if(typeof he.then=="function")return le(ne,W,re,uc(he),Le);if(he.$$typeof===L)return le(ne,W,re,sc(W,he),Le);dc(W,he)}return null}function De(ne,W,re,he){for(var Le=null,an=null,Pe=W,Ye=W=0,en=null;Pe!==null&&Ye<re.length;Ye++){Pe.index>Ye?(en=Pe,Pe=null):en=Pe.sibling;var sn=ie(ne,Pe,re[Ye],he);if(sn===null){Pe===null&&(Pe=en);break}t&&Pe&&sn.alternate===null&&a(ne,Pe),W=g(sn,W,Ye),an===null?Le=sn:an.sibling=sn,an=sn,Pe=en}if(Ye===re.length)return o(ne,Pe),nn&&qr(ne,Ye),Le;if(Pe===null){for(;Ye<re.length;Ye++)Pe=me(ne,re[Ye],he),Pe!==null&&(W=g(Pe,W,Ye),an===null?Le=Pe:an.sibling=Pe,an=Pe);return nn&&qr(ne,Ye),Le}for(Pe=c(Pe);Ye<re.length;Ye++)en=le(Pe,ne,Ye,re[Ye],he),en!==null&&(t&&en.alternate!==null&&Pe.delete(en.key===null?Ye:en.key),W=g(en,W,Ye),an===null?Le=en:an.sibling=en,an=en);return t&&Pe.forEach(function(za){return a(ne,za)}),nn&&qr(ne,Ye),Le}function ze(ne,W,re,he){if(re==null)throw Error(i(151));for(var Le=null,an=null,Pe=W,Ye=W=0,en=null,sn=re.next();Pe!==null&&!sn.done;Ye++,sn=re.next()){Pe.index>Ye?(en=Pe,Pe=null):en=Pe.sibling;var za=ie(ne,Pe,sn.value,he);if(za===null){Pe===null&&(Pe=en);break}t&&Pe&&za.alternate===null&&a(ne,Pe),W=g(za,W,Ye),an===null?Le=za:an.sibling=za,an=za,Pe=en}if(sn.done)return o(ne,Pe),nn&&qr(ne,Ye),Le;if(Pe===null){for(;!sn.done;Ye++,sn=re.next())sn=me(ne,sn.value,he),sn!==null&&(W=g(sn,W,Ye),an===null?Le=sn:an.sibling=sn,an=sn);return nn&&qr(ne,Ye),Le}for(Pe=c(Pe);!sn.done;Ye++,sn=re.next())sn=le(Pe,ne,Ye,sn.value,he),sn!==null&&(t&&sn.alternate!==null&&Pe.delete(sn.key===null?Ye:sn.key),W=g(sn,W,Ye),an===null?Le=sn:an.sibling=sn,an=sn);return t&&Pe.forEach(function(fA){return a(ne,fA)}),nn&&qr(ne,Ye),Le}function yn(ne,W,re,he){if(typeof re=="object"&&re!==null&&re.type===S&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case x:e:{for(var Le=re.key;W!==null;){if(W.key===Le){if(Le=re.type,Le===S){if(W.tag===7){o(ne,W.sibling),he=h(W,re.props.children),he.return=ne,ne=he;break e}}else if(W.elementType===Le||typeof Le=="object"&&Le!==null&&Le.$$typeof===E&&mi(Le)===W.type){o(ne,W.sibling),he=h(W,re.props),Do(he,re),he.return=ne,ne=he;break e}o(ne,W);break}else a(ne,W);W=W.sibling}re.type===S?(he=ci(re.props.children,ne.mode,he,re.key),he.return=ne,ne=he):(he=rc(re.type,re.key,re.props,null,ne.mode,he),Do(he,re),he.return=ne,ne=he)}return M(ne);case A:e:{for(Le=re.key;W!==null;){if(W.key===Le)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){o(ne,W.sibling),he=h(W,re.children||[]),he.return=ne,ne=he;break e}else{o(ne,W);break}else a(ne,W);W=W.sibling}he=Qd(re,ne.mode,he),he.return=ne,ne=he}return M(ne);case E:return re=mi(re),yn(ne,W,re,he)}if(Y(re))return De(ne,W,re,he);if(F(re)){if(Le=F(re),typeof Le!="function")throw Error(i(150));return re=Le.call(re),ze(ne,W,re,he)}if(typeof re.then=="function")return yn(ne,W,uc(re),he);if(re.$$typeof===L)return yn(ne,W,sc(ne,re),he);dc(ne,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,W!==null&&W.tag===6?(o(ne,W.sibling),he=h(W,re),he.return=ne,ne=he):(o(ne,W),he=Xd(re,ne.mode,he),he.return=ne,ne=he),M(ne)):o(ne,W)}return function(ne,W,re,he){try{To=0;var Le=yn(ne,W,re,he);return ss=null,Le}catch(Pe){if(Pe===is||Pe===lc)throw Pe;var an=jt(29,Pe,null,ne.mode);return an.lanes=he,an.return=ne,an}finally{}}}var gi=G1(!0),H1=G1(!1),xa=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,a,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(cn&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=tc(t),w1(t,null,o),a}return nc(t,c,a,o),tc(t)}function Eo(t,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var c=a.lanes;c&=t.pendingLanes,o|=c,a.lanes=o,Bg(t,o)}}function hf(t,a){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var M={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?h=g=M:g=g.next=M,o=o.next}while(o!==null);g===null?h=g=a:g=g.next=a}else h=g=a;o={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=a:t.next=a,o.lastBaseUpdate=a}var mf=!1;function No(){if(mf){var t=as;if(t!==null)throw t}}function Ro(t,a,o,c){mf=!1;var h=t.updateQueue;xa=!1;var g=h.firstBaseUpdate,M=h.lastBaseUpdate,B=h.shared.pending;if(B!==null){h.shared.pending=null;var K=B,ae=K.next;K.next=null,M===null?g=ae:M.next=ae,M=K;var de=t.alternate;de!==null&&(de=de.updateQueue,B=de.lastBaseUpdate,B!==M&&(B===null?de.firstBaseUpdate=ae:B.next=ae,de.lastBaseUpdate=K))}if(g!==null){var me=h.baseState;M=0,de=ae=K=null,B=g;do{var ie=B.lane&-536870913,le=ie!==B.lane;if(le?($e&ie)===ie:(c&ie)===ie){ie!==0&&ie===rs&&(mf=!0),de!==null&&(de=de.next={lane:0,tag:B.tag,payload:B.payload,callback:null,next:null});e:{var De=t,ze=B;ie=a;var yn=o;switch(ze.tag){case 1:if(De=ze.payload,typeof De=="function"){me=De.call(yn,me,ie);break e}me=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=ze.payload,ie=typeof De=="function"?De.call(yn,me,ie):De,ie==null)break e;me=y({},me,ie);break e;case 2:xa=!0}}ie=B.callback,ie!==null&&(t.flags|=64,le&&(t.flags|=8192),le=h.callbacks,le===null?h.callbacks=[ie]:le.push(ie))}else le={lane:ie,tag:B.tag,payload:B.payload,callback:B.callback,next:null},de===null?(ae=de=le,K=me):de=de.next=le,M|=ie;if(B=B.next,B===null){if(B=h.shared.pending,B===null)break;le=B,B=le.next,le.next=null,h.lastBaseUpdate=le,h.shared.pending=null}}while(!0);de===null&&(K=me),h.baseState=K,h.firstBaseUpdate=ae,h.lastBaseUpdate=de,g===null&&(h.shared.lanes=0),Da|=M,t.lanes=M,t.memoizedState=me}}function I1(t,a){if(typeof t!="function")throw Error(i(191,t));t.call(a)}function U1(t,a){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)I1(o[t],a)}var os=P(null),fc=P(0);function J1(t,a){t=ra,te(fc,t),te(os,a),ra=t|a.baseLanes}function pf(){te(fc,ra),te(os,os.current)}function gf(){ra=fc.current,Z(os),Z(fc)}var Vt=P(null),nr=null;function Ca(t){var a=t.alternate;te(Fn,Fn.current&1),te(Vt,t),nr===null&&(a===null||os.current!==null||a.memoizedState!==null)&&(nr=t)}function yf(t){te(Fn,Fn.current),te(Vt,t),nr===null&&(nr=t)}function q1(t){t.tag===22?(te(Fn,Fn.current),te(Vt,t),nr===null&&(nr=t)):Aa()}function Aa(){te(Fn,Fn.current),te(Vt,Vt.current)}function Ft(t){Z(Vt),nr===t&&(nr=null),Z(Fn)}var Fn=P(0);function hc(t){for(var a=t;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||Ah(o)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Zr=0,Ke=null,pn=null,Wn=null,mc=!1,ls=!1,yi=!1,pc=0,ko=0,cs=null,tC=0;function _n(){throw Error(i(321))}function vf(t,a){if(a===null)return!1;for(var o=0;o<a.length&&o<t.length;o++)if(!zt(t[o],a[o]))return!1;return!0}function bf(t,a,o,c,h,g){return Zr=g,Ke=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,T.H=t===null||t.memoizedState===null?Ny:Lf,yi=!1,g=o(c,h),yi=!1,ls&&(g=Y1(a,o,c,h)),K1(t),g}function K1(t){T.H=Lo;var a=pn!==null&&pn.next!==null;if(Zr=0,Wn=pn=Ke=null,mc=!1,ko=0,cs=null,a)throw Error(i(300));t===null||Xn||(t=t.dependencies,t!==null&&ic(t)&&(Xn=!0))}function Y1(t,a,o,c){Ke=t;var h=0;do{if(ls&&(cs=null),ko=0,ls=!1,25<=h)throw Error(i(301));if(h+=1,Wn=pn=null,t.updateQueue!=null){var g=t.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}T.H=Ry,g=a(o,c)}while(ls);return g}function rC(){var t=T.H,a=t.useState()[0];return a=typeof a.then=="function"?Po(a):a,t=t.useState()[0],(pn!==null?pn.memoizedState:null)!==t&&(Ke.flags|=1024),a}function xf(){var t=pc!==0;return pc=0,t}function Sf(t,a,o){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~o}function Mf(t){if(mc){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}mc=!1}Zr=0,Wn=pn=Ke=null,ls=!1,ko=pc=0,cs=null}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wn===null?Ke.memoizedState=Wn=t:Wn=Wn.next=t,Wn}function Gn(){if(pn===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=pn.next;var a=Wn===null?Ke.memoizedState:Wn.next;if(a!==null)Wn=a,pn=t;else{if(t===null)throw Ke.alternate===null?Error(i(467)):Error(i(310));pn=t,t={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Wn===null?Ke.memoizedState=Wn=t:Wn=Wn.next=t}return Wn}function gc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(t){var a=ko;return ko+=1,cs===null&&(cs=[]),t=j1(cs,t,a),a=Ke,(Wn===null?a.memoizedState:Wn.next)===null&&(a=a.alternate,T.H=a===null||a.memoizedState===null?Ny:Lf),t}function yc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Po(t);if(t.$$typeof===L)return ht(t)}throw Error(i(438,String(t)))}function Cf(t){var a=null,o=Ke.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var c=Ke.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=gc(),Ke.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(t),c=0;c<t;c++)o[c]=j;return a.index++,o}function Wr(t,a){return typeof a=="function"?a(t):a}function vc(t){var a=Gn();return Af(a,pn,t)}function Af(t,a,o){var c=t.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var h=t.baseQueue,g=c.pending;if(g!==null){if(h!==null){var M=h.next;h.next=g.next,g.next=M}a.baseQueue=h=g,c.pending=null}if(g=t.baseState,h===null)t.memoizedState=g;else{a=h.next;var B=M=null,K=null,ae=a,de=!1;do{var me=ae.lane&-536870913;if(me!==ae.lane?($e&me)===me:(Zr&me)===me){var ie=ae.revertLane;if(ie===0)K!==null&&(K=K.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),me===rs&&(de=!0);else if((Zr&ie)===ie){ae=ae.next,ie===rs&&(de=!0);continue}else me={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},K===null?(B=K=me,M=g):K=K.next=me,Ke.lanes|=ie,Da|=ie;me=ae.action,yi&&o(g,me),g=ae.hasEagerState?ae.eagerState:o(g,me)}else ie={lane:me,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},K===null?(B=K=ie,M=g):K=K.next=ie,Ke.lanes|=me,Da|=me;ae=ae.next}while(ae!==null&&ae!==a);if(K===null?M=g:K.next=B,!zt(g,t.memoizedState)&&(Xn=!0,de&&(o=as,o!==null)))throw o;t.memoizedState=g,t.baseState=M,t.baseQueue=K,c.lastRenderedState=g}return h===null&&(c.lanes=0),[t.memoizedState,c.dispatch]}function wf(t){var a=Gn(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=o.dispatch,h=o.pending,g=a.memoizedState;if(h!==null){o.pending=null;var M=h=h.next;do g=t(g,M.action),M=M.next;while(M!==h);zt(g,a.memoizedState)||(Xn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),o.lastRenderedState=g}return[g,c]}function Z1(t,a,o){var c=Ke,h=Gn(),g=nn;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=a();var M=!zt((pn||h).memoizedState,o);if(M&&(h.memoizedState=o,Xn=!0),h=h.queue,Ef(Q1.bind(null,c,h,t),[t]),h.getSnapshot!==a||M||Wn!==null&&Wn.memoizedState.tag&1){if(c.flags|=2048,us(9,{destroy:void 0},X1.bind(null,c,h,o,a),null),bn===null)throw Error(i(349));g||(Zr&127)!==0||W1(c,a,o)}return o}function W1(t,a,o){t.flags|=16384,t={getSnapshot:a,value:o},a=Ke.updateQueue,a===null?(a=gc(),Ke.updateQueue=a,a.stores=[t]):(o=a.stores,o===null?a.stores=[t]:o.push(t))}function X1(t,a,o,c){a.value=o,a.getSnapshot=c,$1(a)&&ey(t)}function Q1(t,a,o){return o(function(){$1(a)&&ey(t)})}function $1(t){var a=t.getSnapshot;t=t.value;try{var o=a();return!zt(t,o)}catch{return!0}}function ey(t){var a=li(t,2);a!==null&&Pt(a,t,2)}function Tf(t){var a=Mt();if(typeof t=="function"){var o=t;if(t=o(),yi){Kn(!0);try{o()}finally{Kn(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:t},a}function ny(t,a,o,c){return t.baseState=o,Af(t,pn,typeof c=="function"?c:Wr)}function aC(t,a,o,c,h){if(Sc(t))throw Error(i(485));if(t=a.action,t!==null){var g={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){g.listeners.push(M)}};T.T!==null?o(!0):g.isTransition=!1,c(g),o=a.pending,o===null?(g.next=a.pending=g,ty(a,g)):(g.next=o.next,a.pending=o.next=g)}}function ty(t,a){var o=a.action,c=a.payload,h=t.state;if(a.isTransition){var g=T.T,M={};T.T=M;try{var B=o(h,c),K=T.S;K!==null&&K(M,B),ry(t,a,B)}catch(ae){Df(t,a,ae)}finally{g!==null&&M.types!==null&&(g.types=M.types),T.T=g}}else try{g=o(h,c),ry(t,a,g)}catch(ae){Df(t,a,ae)}}function ry(t,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){ay(t,a,c)},function(c){return Df(t,a,c)}):ay(t,a,o)}function ay(t,a,o){a.status="fulfilled",a.value=o,iy(a),t.state=o,a=t.pending,a!==null&&(o=a.next,o===a?t.pending=null:(o=o.next,a.next=o,ty(t,o)))}function Df(t,a,o){var c=t.pending;if(t.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=o,iy(a),a=a.next;while(a!==c)}t.action=null}function iy(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function sy(t,a){return a}function oy(t,a){if(nn){var o=bn.formState;if(o!==null){e:{var c=Ke;if(nn){if(wn){n:{for(var h=wn,g=er;h.nodeType!==8;){if(!g){h=null;break n}if(h=tr(h.nextSibling),h===null){h=null;break n}}g=h.data,h=g==="F!"||g==="F"?h:null}if(h){wn=tr(h.nextSibling),c=h.data==="F!";break e}}va(c)}c=!1}c&&(a=o[0])}}return o=Mt(),o.memoizedState=o.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sy,lastRenderedState:a},o.queue=c,o=Ty.bind(null,Ke,c),c.dispatch=o,c=Tf(!1),g=Bf.bind(null,Ke,!1,c.queue),c=Mt(),h={state:a,dispatch:null,action:t,pending:null},c.queue=h,o=aC.bind(null,Ke,h,g,o),h.dispatch=o,c.memoizedState=t,[a,o,!1]}function ly(t){var a=Gn();return cy(a,pn,t)}function cy(t,a,o){if(a=Af(t,a,sy)[0],t=vc(Wr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=Po(a)}catch(M){throw M===is?lc:M}else c=a;a=Gn();var h=a.queue,g=h.dispatch;return o!==a.memoizedState&&(Ke.flags|=2048,us(9,{destroy:void 0},iC.bind(null,h,o),null)),[c,g,t]}function iC(t,a){t.action=a}function uy(t){var a=Gn(),o=pn;if(o!==null)return cy(a,o,t);Gn(),a=a.memoizedState,o=Gn();var c=o.queue.dispatch;return o.memoizedState=t,[a,c,!1]}function us(t,a,o,c){return t={tag:t,create:o,deps:c,inst:a,next:null},a=Ke.updateQueue,a===null&&(a=gc(),Ke.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,a.lastEffect=t),t}function dy(){return Gn().memoizedState}function bc(t,a,o,c){var h=Mt();Ke.flags|=t,h.memoizedState=us(1|a,{destroy:void 0},o,c===void 0?null:c)}function xc(t,a,o,c){var h=Gn();c=c===void 0?null:c;var g=h.memoizedState.inst;pn!==null&&c!==null&&vf(c,pn.memoizedState.deps)?h.memoizedState=us(a,g,o,c):(Ke.flags|=t,h.memoizedState=us(1|a,g,o,c))}function fy(t,a){bc(8390656,8,t,a)}function Ef(t,a){xc(2048,8,t,a)}function sC(t){Ke.flags|=4;var a=Ke.updateQueue;if(a===null)a=gc(),Ke.updateQueue=a,a.events=[t];else{var o=a.events;o===null?a.events=[t]:o.push(t)}}function hy(t){var a=Gn().memoizedState;return sC({ref:a,nextImpl:t}),function(){if((cn&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}function my(t,a){return xc(4,2,t,a)}function py(t,a){return xc(4,4,t,a)}function gy(t,a){if(typeof a=="function"){t=t();var o=a(t);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function yy(t,a,o){o=o!=null?o.concat([t]):null,xc(4,4,gy.bind(null,a,t),o)}function Nf(){}function vy(t,a){var o=Gn();a=a===void 0?null:a;var c=o.memoizedState;return a!==null&&vf(a,c[1])?c[0]:(o.memoizedState=[t,a],t)}function by(t,a){var o=Gn();a=a===void 0?null:a;var c=o.memoizedState;if(a!==null&&vf(a,c[1]))return c[0];if(c=t(),yi){Kn(!0);try{t()}finally{Kn(!1)}}return o.memoizedState=[c,a],c}function Rf(t,a,o){return o===void 0||(Zr&1073741824)!==0&&($e&261930)===0?t.memoizedState=a:(t.memoizedState=o,t=x0(),Ke.lanes|=t,Da|=t,o)}function xy(t,a,o,c){return zt(o,a)?o:os.current!==null?(t=Rf(t,o,c),zt(t,a)||(Xn=!0),t):(Zr&42)===0||(Zr&1073741824)!==0&&($e&261930)===0?(Xn=!0,t.memoizedState=o):(t=x0(),Ke.lanes|=t,Da|=t,a)}function Sy(t,a,o,c,h){var g=D.p;D.p=g!==0&&8>g?g:8;var M=T.T,B={};T.T=B,Bf(t,!1,a,o);try{var K=h(),ae=T.S;if(ae!==null&&ae(B,K),K!==null&&typeof K=="object"&&typeof K.then=="function"){var de=nC(K,c);Bo(t,a,de,It(t))}else Bo(t,a,c,It(t))}catch(me){Bo(t,a,{then:function(){},status:"rejected",reason:me},It())}finally{D.p=g,M!==null&&B.types!==null&&(M.types=B.types),T.T=M}}function oC(){}function kf(t,a,o,c){if(t.tag!==5)throw Error(i(476));var h=My(t).queue;Sy(t,h,a,I,o===null?oC:function(){return Cy(t),o(c)})}function My(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:I},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:o},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Cy(t){var a=My(t);a.next===null&&(a=t.alternate.memoizedState),Bo(t,a.next.queue,{},It())}function Pf(){return ht(Wo)}function Ay(){return Gn().memoizedState}function wy(){return Gn().memoizedState}function lC(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var o=It();t=Sa(o);var c=Ma(a,t,o);c!==null&&(Pt(c,a,o),Eo(c,a,o)),a={cache:of()},t.payload=a;return}a=a.return}}function cC(t,a,o){var c=It();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Sc(t)?Dy(a,o):(o=Zd(t,a,o,c),o!==null&&(Pt(o,t,c),Ey(o,a,c)))}function Ty(t,a,o){var c=It();Bo(t,a,o,c)}function Bo(t,a,o,c){var h={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Sc(t))Dy(a,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var M=a.lastRenderedState,B=g(M,o);if(h.hasEagerState=!0,h.eagerState=B,zt(B,M))return nc(t,a,h,0),bn===null&&ec(),!1}catch{}finally{}if(o=Zd(t,a,h,c),o!==null)return Pt(o,t,c),Ey(o,a,c),!0}return!1}function Bf(t,a,o,c){if(c={lane:2,revertLane:dh(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Sc(t)){if(a)throw Error(i(479))}else a=Zd(t,o,c,2),a!==null&&Pt(a,t,2)}function Sc(t){var a=t.alternate;return t===Ke||a!==null&&a===Ke}function Dy(t,a){ls=mc=!0;var o=t.pending;o===null?a.next=a:(a.next=o.next,o.next=a),t.pending=a}function Ey(t,a,o){if((o&4194048)!==0){var c=a.lanes;c&=t.pendingLanes,o|=c,a.lanes=o,Bg(t,o)}}var Lo={readContext:ht,use:yc,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n};Lo.useEffectEvent=_n;var Ny={readContext:ht,use:yc,useCallback:function(t,a){return Mt().memoizedState=[t,a===void 0?null:a],t},useContext:ht,useEffect:fy,useImperativeHandle:function(t,a,o){o=o!=null?o.concat([t]):null,bc(4194308,4,gy.bind(null,a,t),o)},useLayoutEffect:function(t,a){return bc(4194308,4,t,a)},useInsertionEffect:function(t,a){bc(4,2,t,a)},useMemo:function(t,a){var o=Mt();a=a===void 0?null:a;var c=t();if(yi){Kn(!0);try{t()}finally{Kn(!1)}}return o.memoizedState=[c,a],c},useReducer:function(t,a,o){var c=Mt();if(o!==void 0){var h=o(a);if(yi){Kn(!0);try{o(a)}finally{Kn(!1)}}}else h=a;return c.memoizedState=c.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},c.queue=t,t=t.dispatch=cC.bind(null,Ke,t),[c.memoizedState,t]},useRef:function(t){var a=Mt();return t={current:t},a.memoizedState=t},useState:function(t){t=Tf(t);var a=t.queue,o=Ty.bind(null,Ke,a);return a.dispatch=o,[t.memoizedState,o]},useDebugValue:Nf,useDeferredValue:function(t,a){var o=Mt();return Rf(o,t,a)},useTransition:function(){var t=Tf(!1);return t=Sy.bind(null,Ke,t.queue,!0,!1),Mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,o){var c=Ke,h=Mt();if(nn){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),bn===null)throw Error(i(349));($e&127)!==0||W1(c,a,o)}h.memoizedState=o;var g={value:o,getSnapshot:a};return h.queue=g,fy(Q1.bind(null,c,g,t),[t]),c.flags|=2048,us(9,{destroy:void 0},X1.bind(null,c,g,o,a),null),o},useId:function(){var t=Mt(),a=bn.identifierPrefix;if(nn){var o=Dr,c=Tr;o=(c&~(1<<32-Yn(c)-1)).toString(32)+o,a="_"+a+"R_"+o,o=pc++,0<o&&(a+="H"+o.toString(32)),a+="_"}else o=tC++,a="_"+a+"r_"+o.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Pf,useFormState:oy,useActionState:oy,useOptimistic:function(t){var a=Mt();a.memoizedState=a.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Bf.bind(null,Ke,!0,o),o.dispatch=a,[t,a]},useMemoCache:Cf,useCacheRefresh:function(){return Mt().memoizedState=lC.bind(null,Ke)},useEffectEvent:function(t){var a=Mt(),o={impl:t};return a.memoizedState=o,function(){if((cn&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:ht,use:yc,useCallback:vy,useContext:ht,useEffect:Ef,useImperativeHandle:yy,useInsertionEffect:my,useLayoutEffect:py,useMemo:by,useReducer:vc,useRef:dy,useState:function(){return vc(Wr)},useDebugValue:Nf,useDeferredValue:function(t,a){var o=Gn();return xy(o,pn.memoizedState,t,a)},useTransition:function(){var t=vc(Wr)[0],a=Gn().memoizedState;return[typeof t=="boolean"?t:Po(t),a]},useSyncExternalStore:Z1,useId:Ay,useHostTransitionStatus:Pf,useFormState:ly,useActionState:ly,useOptimistic:function(t,a){var o=Gn();return ny(o,pn,t,a)},useMemoCache:Cf,useCacheRefresh:wy};Lf.useEffectEvent=hy;var Ry={readContext:ht,use:yc,useCallback:vy,useContext:ht,useEffect:Ef,useImperativeHandle:yy,useInsertionEffect:my,useLayoutEffect:py,useMemo:by,useReducer:wf,useRef:dy,useState:function(){return wf(Wr)},useDebugValue:Nf,useDeferredValue:function(t,a){var o=Gn();return pn===null?Rf(o,t,a):xy(o,pn.memoizedState,t,a)},useTransition:function(){var t=wf(Wr)[0],a=Gn().memoizedState;return[typeof t=="boolean"?t:Po(t),a]},useSyncExternalStore:Z1,useId:Ay,useHostTransitionStatus:Pf,useFormState:uy,useActionState:uy,useOptimistic:function(t,a){var o=Gn();return pn!==null?ny(o,pn,t,a):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:wy};Ry.useEffectEvent=hy;function _f(t,a,o,c){a=t.memoizedState,o=o(c,a),o=o==null?a:y({},a,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Of={enqueueSetState:function(t,a,o){t=t._reactInternals;var c=It(),h=Sa(c);h.payload=a,o!=null&&(h.callback=o),a=Ma(t,h,c),a!==null&&(Pt(a,t,c),Eo(a,t,c))},enqueueReplaceState:function(t,a,o){t=t._reactInternals;var c=It(),h=Sa(c);h.tag=1,h.payload=a,o!=null&&(h.callback=o),a=Ma(t,h,c),a!==null&&(Pt(a,t,c),Eo(a,t,c))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var o=It(),c=Sa(o);c.tag=2,a!=null&&(c.callback=a),a=Ma(t,c,o),a!==null&&(Pt(a,t,o),Eo(a,t,o))}};function ky(t,a,o,c,h,g,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,g,M):a.prototype&&a.prototype.isPureReactComponent?!xo(o,c)||!xo(h,g):!0}function Py(t,a,o,c){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,c),a.state!==t&&Of.enqueueReplaceState(a,a.state,null)}function vi(t,a){var o=a;if("ref"in a){o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}if(t=t.defaultProps){o===a&&(o=y({},o));for(var h in t)o[h]===void 0&&(o[h]=t[h])}return o}function By(t){$l(t)}function Ly(t){console.error(t)}function _y(t){$l(t)}function Mc(t,a){try{var o=t.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function Oy(t,a,o){try{var c=t.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function zf(t,a,o){return o=Sa(o),o.tag=3,o.payload={element:null},o.callback=function(){Mc(t,a)},o}function zy(t){return t=Sa(t),t.tag=3,t}function jy(t,a,o,c){var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=c.value;t.payload=function(){return h(g)},t.callback=function(){Oy(a,o,c)}}var M=o.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Oy(a,o,c),typeof h!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var B=c.stack;this.componentDidCatch(c.value,{componentStack:B!==null?B:""})})}function uC(t,a,o,c,h){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=o.alternate,a!==null&&ts(a,o,h,!0),o=Vt.current,o!==null){switch(o.tag){case 31:case 13:return nr===null?Lc():o.alternate===null&&On===0&&(On=3),o.flags&=-257,o.flags|=65536,o.lanes=h,c===cc?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([c]):a.add(c),lh(t,c,h)),!1;case 22:return o.flags|=65536,c===cc?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([c]):o.add(c)),lh(t,c,h)),!1}throw Error(i(435,o.tag))}return lh(t,c,h),Lc(),!1}if(nn)return a=Vt.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==nf&&(t=Error(i(422),{cause:c}),Co(Xt(t,o)))):(c!==nf&&(a=Error(i(423),{cause:c}),Co(Xt(a,o))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,c=Xt(c,o),h=zf(t.stateNode,c,h),hf(t,h),On!==4&&(On=2)),!1;var g=Error(i(520),{cause:c});if(g=Xt(g,o),Ho===null?Ho=[g]:Ho.push(g),On!==4&&(On=2),a===null)return!0;c=Xt(c,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,t=h&-h,o.lanes|=t,t=zf(o.stateNode,c,t),hf(o,t),!1;case 1:if(a=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ea===null||!Ea.has(g))))return o.flags|=65536,h&=-h,o.lanes|=h,h=zy(h),jy(h,t,o,c),hf(o,h),!1}o=o.return}while(o!==null);return!1}var jf=Error(i(461)),Xn=!1;function mt(t,a,o,c){a.child=t===null?H1(a,null,o,c):gi(a,t.child,o,c)}function Vy(t,a,o,c,h){o=o.render;var g=a.ref;if("ref"in c){var M={};for(var B in c)B!=="ref"&&(M[B]=c[B])}else M=c;return fi(a),c=bf(t,a,o,M,g,h),B=xf(),t!==null&&!Xn?(Sf(t,a,h),Xr(t,a,h)):(nn&&B&&$d(a),a.flags|=1,mt(t,a,c,h),a.child)}function Fy(t,a,o,c,h){if(t===null){var g=o.type;return typeof g=="function"&&!Wd(g)&&g.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=g,Gy(t,a,g,c,h)):(t=rc(o.type,null,c,a,a.mode,h),t.ref=a.ref,t.return=a,a.child=t)}if(g=t.child,!qf(t,h)){var M=g.memoizedProps;if(o=o.compare,o=o!==null?o:xo,o(M,c)&&t.ref===a.ref)return Xr(t,a,h)}return a.flags|=1,t=Jr(g,c),t.ref=a.ref,t.return=a,a.child=t}function Gy(t,a,o,c,h){if(t!==null){var g=t.memoizedProps;if(xo(g,c)&&t.ref===a.ref)if(Xn=!1,a.pendingProps=c=g,qf(t,h))(t.flags&131072)!==0&&(Xn=!0);else return a.lanes=t.lanes,Xr(t,a,h)}return Vf(t,a,o,c,h)}function Hy(t,a,o,c){var h=c.children,g=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((a.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,t!==null){for(c=a.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;c=h&~g}else c=0,a.child=null;return Iy(t,a,g,o,c)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&oc(a,g!==null?g.cachePool:null),g!==null?J1(a,g):pf(),q1(a);else return c=a.lanes=536870912,Iy(t,a,g!==null?g.baseLanes|o:o,o,c)}else g!==null?(oc(a,g.cachePool),J1(a,g),Aa(),a.memoizedState=null):(t!==null&&oc(a,null),pf(),Aa());return mt(t,a,h,o),a.child}function _o(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Iy(t,a,o,c,h){var g=cf();return g=g===null?null:{parent:Zn._currentValue,pool:g},a.memoizedState={baseLanes:o,cachePool:g},t!==null&&oc(a,null),pf(),q1(a),t!==null&&ts(t,a,c,!0),a.childLanes=h,null}function Cc(t,a){return a=wc({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Uy(t,a,o){return gi(a,t.child,null,o),t=Cc(a,a.pendingProps),t.flags|=2,Ft(a),a.memoizedState=null,t}function dC(t,a,o){var c=a.pendingProps,h=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(nn){if(c.mode==="hidden")return t=Cc(a,c),a.lanes=536870912,_o(null,t);if(yf(a),(t=wn)?(t=tv(t,er),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Tr,overflow:Dr}:null,retryLane:536870912,hydrationErrors:null},o=D1(t),o.return=a,a.child=o,ft=a,wn=null)):t=null,t===null)throw va(a);return a.lanes=536870912,null}return Cc(a,c)}var g=t.memoizedState;if(g!==null){var M=g.dehydrated;if(yf(a),h)if(a.flags&256)a.flags&=-257,a=Uy(t,a,o);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(i(558));else if(Xn||ts(t,a,o,!1),h=(o&t.childLanes)!==0,Xn||h){if(c=bn,c!==null&&(M=Lg(c,o),M!==0&&M!==g.retryLane))throw g.retryLane=M,li(t,M),Pt(c,t,M),jf;Lc(),a=Uy(t,a,o)}else t=g.treeContext,wn=tr(M.nextSibling),ft=a,nn=!0,ya=null,er=!1,t!==null&&R1(a,t),a=Cc(a,c),a.flags|=4096;return a}return t=Jr(t.child,{mode:c.mode,children:c.children}),t.ref=a.ref,a.child=t,t.return=a,t}function Ac(t,a){var o=a.ref;if(o===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(t===null||t.ref!==o)&&(a.flags|=4194816)}}function Vf(t,a,o,c,h){return fi(a),o=bf(t,a,o,c,void 0,h),c=xf(),t!==null&&!Xn?(Sf(t,a,h),Xr(t,a,h)):(nn&&c&&$d(a),a.flags|=1,mt(t,a,o,h),a.child)}function Jy(t,a,o,c,h,g){return fi(a),a.updateQueue=null,o=Y1(a,c,o,h),K1(t),c=xf(),t!==null&&!Xn?(Sf(t,a,g),Xr(t,a,g)):(nn&&c&&$d(a),a.flags|=1,mt(t,a,o,g),a.child)}function qy(t,a,o,c,h){if(fi(a),a.stateNode===null){var g=Qi,M=o.contextType;typeof M=="object"&&M!==null&&(g=ht(M)),g=new o(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Of,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},df(a),M=o.contextType,g.context=typeof M=="object"&&M!==null?ht(M):Qi,g.state=a.memoizedState,M=o.getDerivedStateFromProps,typeof M=="function"&&(_f(a,o,M,c),g.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(M=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),M!==g.state&&Of.enqueueReplaceState(g,g.state,null),Ro(a,c,g,h),No(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(t===null){g=a.stateNode;var B=a.memoizedProps,K=vi(o,B);g.props=K;var ae=g.context,de=o.contextType;M=Qi,typeof de=="object"&&de!==null&&(M=ht(de));var me=o.getDerivedStateFromProps;de=typeof me=="function"||typeof g.getSnapshotBeforeUpdate=="function",B=a.pendingProps!==B,de||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(B||ae!==M)&&Py(a,g,c,M),xa=!1;var ie=a.memoizedState;g.state=ie,Ro(a,c,g,h),No(),ae=a.memoizedState,B||ie!==ae||xa?(typeof me=="function"&&(_f(a,o,me,c),ae=a.memoizedState),(K=xa||ky(a,o,K,c,ie,ae,M))?(de||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=ae),g.props=c,g.state=ae,g.context=M,c=K):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,ff(t,a),M=a.memoizedProps,de=vi(o,M),g.props=de,me=a.pendingProps,ie=g.context,ae=o.contextType,K=Qi,typeof ae=="object"&&ae!==null&&(K=ht(ae)),B=o.getDerivedStateFromProps,(ae=typeof B=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(M!==me||ie!==K)&&Py(a,g,c,K),xa=!1,ie=a.memoizedState,g.state=ie,Ro(a,c,g,h),No();var le=a.memoizedState;M!==me||ie!==le||xa||t!==null&&t.dependencies!==null&&ic(t.dependencies)?(typeof B=="function"&&(_f(a,o,B,c),le=a.memoizedState),(de=xa||ky(a,o,de,c,ie,le,K)||t!==null&&t.dependencies!==null&&ic(t.dependencies))?(ae||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,le,K),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,le,K)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=le),g.props=c,g.state=le,g.context=K,c=de):(typeof g.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(a.flags|=1024),c=!1)}return g=c,Ac(t,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,t!==null&&c?(a.child=gi(a,t.child,null,h),a.child=gi(a,null,o,h)):mt(t,a,o,h),a.memoizedState=g.state,t=a.child):t=Xr(t,a,h),t}function Ky(t,a,o,c){return ui(),a.flags|=256,mt(t,a,o,c),a.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gf(t){return{baseLanes:t,cachePool:O1()}}function Hf(t,a,o){return t=t!==null?t.childLanes&~o:0,a&&(t|=Ht),t}function Yy(t,a,o){var c=a.pendingProps,h=!1,g=(a.flags&128)!==0,M;if((M=g)||(M=t!==null&&t.memoizedState===null?!1:(Fn.current&2)!==0),M&&(h=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,t===null){if(nn){if(h?Ca(a):Aa(),(t=wn)?(t=tv(t,er),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Tr,overflow:Dr}:null,retryLane:536870912,hydrationErrors:null},o=D1(t),o.return=a,a.child=o,ft=a,wn=null)):t=null,t===null)throw va(a);return Ah(t)?a.lanes=32:a.lanes=536870912,null}var B=c.children;return c=c.fallback,h?(Aa(),h=a.mode,B=wc({mode:"hidden",children:B},h),c=ci(c,h,o,null),B.return=a,c.return=a,B.sibling=c,a.child=B,c=a.child,c.memoizedState=Gf(o),c.childLanes=Hf(t,M,o),a.memoizedState=Ff,_o(null,c)):(Ca(a),If(a,B))}var K=t.memoizedState;if(K!==null&&(B=K.dehydrated,B!==null)){if(g)a.flags&256?(Ca(a),a.flags&=-257,a=Uf(t,a,o)):a.memoizedState!==null?(Aa(),a.child=t.child,a.flags|=128,a=null):(Aa(),B=c.fallback,h=a.mode,c=wc({mode:"visible",children:c.children},h),B=ci(B,h,o,null),B.flags|=2,c.return=a,B.return=a,c.sibling=B,a.child=c,gi(a,t.child,null,o),c=a.child,c.memoizedState=Gf(o),c.childLanes=Hf(t,M,o),a.memoizedState=Ff,a=_o(null,c));else if(Ca(a),Ah(B)){if(M=B.nextSibling&&B.nextSibling.dataset,M)var ae=M.dgst;M=ae,c=Error(i(419)),c.stack="",c.digest=M,Co({value:c,source:null,stack:null}),a=Uf(t,a,o)}else if(Xn||ts(t,a,o,!1),M=(o&t.childLanes)!==0,Xn||M){if(M=bn,M!==null&&(c=Lg(M,o),c!==0&&c!==K.retryLane))throw K.retryLane=c,li(t,c),Pt(M,t,c),jf;Ch(B)||Lc(),a=Uf(t,a,o)}else Ch(B)?(a.flags|=192,a.child=t.child,a=null):(t=K.treeContext,wn=tr(B.nextSibling),ft=a,nn=!0,ya=null,er=!1,t!==null&&R1(a,t),a=If(a,c.children),a.flags|=4096);return a}return h?(Aa(),B=c.fallback,h=a.mode,K=t.child,ae=K.sibling,c=Jr(K,{mode:"hidden",children:c.children}),c.subtreeFlags=K.subtreeFlags&65011712,ae!==null?B=Jr(ae,B):(B=ci(B,h,o,null),B.flags|=2),B.return=a,c.return=a,c.sibling=B,a.child=c,_o(null,c),c=a.child,B=t.child.memoizedState,B===null?B=Gf(o):(h=B.cachePool,h!==null?(K=Zn._currentValue,h=h.parent!==K?{parent:K,pool:K}:h):h=O1(),B={baseLanes:B.baseLanes|o,cachePool:h}),c.memoizedState=B,c.childLanes=Hf(t,M,o),a.memoizedState=Ff,_o(t.child,c)):(Ca(a),o=t.child,t=o.sibling,o=Jr(o,{mode:"visible",children:c.children}),o.return=a,o.sibling=null,t!==null&&(M=a.deletions,M===null?(a.deletions=[t],a.flags|=16):M.push(t)),a.child=o,a.memoizedState=null,o)}function If(t,a){return a=wc({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function wc(t,a){return t=jt(22,t,null,a),t.lanes=0,t}function Uf(t,a,o){return gi(a,t.child,null,o),t=If(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Zy(t,a,o){t.lanes|=a;var c=t.alternate;c!==null&&(c.lanes|=a),af(t.return,a,o)}function Jf(t,a,o,c,h,g){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:h,treeForkCount:g}:(M.isBackwards=a,M.rendering=null,M.renderingStartTime=0,M.last=c,M.tail=o,M.tailMode=h,M.treeForkCount=g)}function Wy(t,a,o){var c=a.pendingProps,h=c.revealOrder,g=c.tail;c=c.children;var M=Fn.current,B=(M&2)!==0;if(B?(M=M&1|2,a.flags|=128):M&=1,te(Fn,M),mt(t,a,c,o),c=nn?Mo:0,!B&&t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zy(t,o,a);else if(t.tag===19)Zy(t,o,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(o=a.child,h=null;o!==null;)t=o.alternate,t!==null&&hc(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=a.child,a.child=null):(h=o.sibling,o.sibling=null),Jf(a,!1,h,o,g,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,h=a.child,a.child=null;h!==null;){if(t=h.alternate,t!==null&&hc(t)===null){a.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Jf(a,!0,o,null,g,c);break;case"together":Jf(a,!1,null,null,void 0,c);break;default:a.memoizedState=null}return a.child}function Xr(t,a,o){if(t!==null&&(a.dependencies=t.dependencies),Da|=a.lanes,(o&a.childLanes)===0)if(t!==null){if(ts(t,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(i(153));if(a.child!==null){for(t=a.child,o=Jr(t,t.pendingProps),a.child=o,o.return=a;t.sibling!==null;)t=t.sibling,o=o.sibling=Jr(t,t.pendingProps),o.return=a;o.sibling=null}return a.child}function qf(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&ic(t)))}function fC(t,a,o){switch(a.tag){case 3:Se(a,a.stateNode.containerInfo),ba(a,Zn,t.memoizedState.cache),ui();break;case 27:case 5:oe(a);break;case 4:Se(a,a.stateNode.containerInfo);break;case 10:ba(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,yf(a),null;break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Ca(a),a.flags|=128,null):(o&a.child.childLanes)!==0?Yy(t,a,o):(Ca(a),t=Xr(t,a,o),t!==null?t.sibling:null);Ca(a);break;case 19:var h=(t.flags&128)!==0;if(c=(o&a.childLanes)!==0,c||(ts(t,a,o,!1),c=(o&a.childLanes)!==0),h){if(c)return Wy(t,a,o);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),te(Fn,Fn.current),c)break;return null;case 22:return a.lanes=0,Hy(t,a,o,a.pendingProps);case 24:ba(a,Zn,t.memoizedState.cache)}return Xr(t,a,o)}function Xy(t,a,o){if(t!==null)if(t.memoizedProps!==a.pendingProps)Xn=!0;else{if(!qf(t,o)&&(a.flags&128)===0)return Xn=!1,fC(t,a,o);Xn=(t.flags&131072)!==0}else Xn=!1,nn&&(a.flags&1048576)!==0&&N1(a,Mo,a.index);switch(a.lanes=0,a.tag){case 16:e:{var c=a.pendingProps;if(t=mi(a.elementType),a.type=t,typeof t=="function")Wd(t)?(c=vi(t,c),a.tag=1,a=qy(null,a,t,c,o)):(a.tag=0,a=Vf(null,a,t,c,o));else{if(t!=null){var h=t.$$typeof;if(h===z){a.tag=11,a=Vy(null,a,t,c,o);break e}else if(h===O){a.tag=14,a=Fy(null,a,t,c,o);break e}}throw a=H(t)||t,Error(i(306,a,""))}}return a;case 0:return Vf(t,a,a.type,a.pendingProps,o);case 1:return c=a.type,h=vi(c,a.pendingProps),qy(t,a,c,h,o);case 3:e:{if(Se(a,a.stateNode.containerInfo),t===null)throw Error(i(387));c=a.pendingProps;var g=a.memoizedState;h=g.element,ff(t,a),Ro(a,c,null,o);var M=a.memoizedState;if(c=M.cache,ba(a,Zn,c),c!==g.cache&&sf(a,[Zn],o,!0),No(),c=M.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=Ky(t,a,c,o);break e}else if(c!==h){h=Xt(Error(i(424)),a),Co(h),a=Ky(t,a,c,o);break e}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(wn=tr(t.firstChild),ft=a,nn=!0,ya=null,er=!0,o=H1(a,null,c,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ui(),c===h){a=Xr(t,a,o);break e}mt(t,a,c,o)}a=a.child}return a;case 26:return Ac(t,a),t===null?(o=lv(a.type,null,a.pendingProps,null))?a.memoizedState=o:nn||(o=a.type,t=a.pendingProps,c=Gc(ye.current).createElement(o),c[dt]=a,c[Tt]=t,pt(c,o,t),lt(c),a.stateNode=c):a.memoizedState=lv(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return oe(a),t===null&&nn&&(c=a.stateNode=iv(a.type,a.pendingProps,ye.current),ft=a,er=!0,h=wn,Pa(a.type)?(wh=h,wn=tr(c.firstChild)):wn=h),mt(t,a,a.pendingProps.children,o),Ac(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&nn&&((h=c=wn)&&(c=HC(c,a.type,a.pendingProps,er),c!==null?(a.stateNode=c,ft=a,wn=tr(c.firstChild),er=!1,h=!0):h=!1),h||va(a)),oe(a),h=a.type,g=a.pendingProps,M=t!==null?t.memoizedProps:null,c=g.children,xh(h,g)?c=null:M!==null&&xh(h,M)&&(a.flags|=32),a.memoizedState!==null&&(h=bf(t,a,rC,null,null,o),Wo._currentValue=h),Ac(t,a),mt(t,a,c,o),a.child;case 6:return t===null&&nn&&((t=o=wn)&&(o=IC(o,a.pendingProps,er),o!==null?(a.stateNode=o,ft=a,wn=null,t=!0):t=!1),t||va(a)),null;case 13:return Yy(t,a,o);case 4:return Se(a,a.stateNode.containerInfo),c=a.pendingProps,t===null?a.child=gi(a,null,c,o):mt(t,a,c,o),a.child;case 11:return Vy(t,a,a.type,a.pendingProps,o);case 7:return mt(t,a,a.pendingProps,o),a.child;case 8:return mt(t,a,a.pendingProps.children,o),a.child;case 12:return mt(t,a,a.pendingProps.children,o),a.child;case 10:return c=a.pendingProps,ba(a,a.type,c.value),mt(t,a,c.children,o),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,fi(a),h=ht(h),c=c(h),a.flags|=1,mt(t,a,c,o),a.child;case 14:return Fy(t,a,a.type,a.pendingProps,o);case 15:return Gy(t,a,a.type,a.pendingProps,o);case 19:return Wy(t,a,o);case 31:return dC(t,a,o);case 22:return Hy(t,a,o,a.pendingProps);case 24:return fi(a),c=ht(Zn),t===null?(h=cf(),h===null&&(h=bn,g=of(),h.pooledCache=g,g.refCount++,g!==null&&(h.pooledCacheLanes|=o),h=g),a.memoizedState={parent:c,cache:h},df(a),ba(a,Zn,h)):((t.lanes&o)!==0&&(ff(t,a),Ro(a,null,null,o),No()),h=t.memoizedState,g=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),ba(a,Zn,c)):(c=g.cache,ba(a,Zn,c),c!==h.cache&&sf(a,[Zn],o,!0))),mt(t,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Qr(t){t.flags|=4}function Kf(t,a,o,c,h){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(A0())t.flags|=8192;else throw pi=cc,uf}else t.flags&=-16777217}function Qy(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!hv(a))if(A0())t.flags|=8192;else throw pi=cc,uf}function Tc(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?wr():536870912,t.lanes|=a,ms|=a)}function Oo(t,a){if(!nn)switch(t.tailMode){case"hidden":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Tn(t){var a=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(a)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=c,t.childLanes=o,a}function hC(t,a,o){var c=a.pendingProps;switch(ef(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(a),null;case 1:return Tn(a),null;case 3:return o=a.stateNode,c=null,t!==null&&(c=t.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Yr(Zn),ge(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(ns(a)?Qr(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,tf())),Tn(a),null;case 26:var h=a.type,g=a.memoizedState;return t===null?(Qr(a),g!==null?(Tn(a),Qy(a,g)):(Tn(a),Kf(a,h,null,c,o))):g?g!==t.memoizedState?(Qr(a),Tn(a),Qy(a,g)):(Tn(a),a.flags&=-16777217):(t=t.memoizedProps,t!==c&&Qr(a),Tn(a),Kf(a,h,t,c,o)),null;case 27:if(fe(a),o=ye.current,h=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==c&&Qr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return Tn(a),null}t=X.current,ns(a)?k1(a):(t=iv(h,c,o),a.stateNode=t,Qr(a))}return Tn(a),null;case 5:if(fe(a),h=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==c&&Qr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return Tn(a),null}if(g=X.current,ns(a))k1(a);else{var M=Gc(ye.current);switch(g){case 1:g=M.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:g=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":g=M.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":g=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":g=M.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof c.is=="string"?M.createElement("select",{is:c.is}):M.createElement("select"),c.multiple?g.multiple=!0:c.size&&(g.size=c.size);break;default:g=typeof c.is=="string"?M.createElement(h,{is:c.is}):M.createElement(h)}}g[dt]=a,g[Tt]=c;e:for(M=a.child;M!==null;){if(M.tag===5||M.tag===6)g.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===a)break e;for(;M.sibling===null;){if(M.return===null||M.return===a)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}a.stateNode=g;e:switch(pt(g,h,c),h){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Qr(a)}}return Tn(a),Kf(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,o),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==c&&Qr(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(t=ye.current,ns(a)){if(t=a.stateNode,o=a.memoizedProps,c=null,h=ft,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}t[dt]=a,t=!!(t.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||Y0(t.nodeValue,o)),t||va(a,!0)}else t=Gc(t).createTextNode(c),t[dt]=a,a.stateNode=t}return Tn(a),null;case 31:if(o=a.memoizedState,t===null||t.memoizedState!==null){if(c=ns(a),o!==null){if(t===null){if(!c)throw Error(i(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(557));t[dt]=a}else ui(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Tn(a),t=!1}else o=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return a.flags&256?(Ft(a),a):(Ft(a),null);if((a.flags&128)!==0)throw Error(i(558))}return Tn(a),null;case 13:if(c=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=ns(a),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(i(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[dt]=a}else ui(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Tn(a),h=!1}else h=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(Ft(a),a):(Ft(a),null)}return Ft(a),(a.flags&128)!==0?(a.lanes=o,a):(o=c!==null,t=t!==null&&t.memoizedState!==null,o&&(c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool),g=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==h&&(c.flags|=2048)),o!==t&&o&&(a.child.flags|=8192),Tc(a,a.updateQueue),Tn(a),null);case 4:return ge(),t===null&&ph(a.stateNode.containerInfo),Tn(a),null;case 10:return Yr(a.type),Tn(a),null;case 19:if(Z(Fn),c=a.memoizedState,c===null)return Tn(a),null;if(h=(a.flags&128)!==0,g=c.rendering,g===null)if(h)Oo(c,!1);else{if(On!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(g=hc(t),g!==null){for(a.flags|=128,Oo(c,!1),t=g.updateQueue,a.updateQueue=t,Tc(a,t),a.subtreeFlags=0,t=o,o=a.child;o!==null;)T1(o,t),o=o.sibling;return te(Fn,Fn.current&1|2),nn&&qr(a,c.treeForkCount),a.child}t=t.sibling}c.tail!==null&&ue()>kc&&(a.flags|=128,h=!0,Oo(c,!1),a.lanes=4194304)}else{if(!h)if(t=hc(g),t!==null){if(a.flags|=128,h=!0,t=t.updateQueue,a.updateQueue=t,Tc(a,t),Oo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!g.alternate&&!nn)return Tn(a),null}else 2*ue()-c.renderingStartTime>kc&&o!==536870912&&(a.flags|=128,h=!0,Oo(c,!1),a.lanes=4194304);c.isBackwards?(g.sibling=a.child,a.child=g):(t=c.last,t!==null?t.sibling=g:a.child=g,c.last=g)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=ue(),t.sibling=null,o=Fn.current,te(Fn,h?o&1|2:o&1),nn&&qr(a,c.treeForkCount),t):(Tn(a),null);case 22:case 23:return Ft(a),gf(),c=a.memoizedState!==null,t!==null?t.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(o&536870912)!==0&&(a.flags&128)===0&&(Tn(a),a.subtreeFlags&6&&(a.flags|=8192)):Tn(a),o=a.updateQueue,o!==null&&Tc(a,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048),t!==null&&Z(hi),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Yr(Zn),Tn(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function mC(t,a){switch(ef(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Yr(Zn),ge(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return fe(a),null;case 31:if(a.memoizedState!==null){if(Ft(a),a.alternate===null)throw Error(i(340));ui()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Ft(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(i(340));ui()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Z(Fn),null;case 4:return ge(),null;case 10:return Yr(a.type),null;case 22:case 23:return Ft(a),gf(),t!==null&&Z(hi),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Yr(Zn),null;case 25:return null;default:return null}}function $y(t,a){switch(ef(a),a.tag){case 3:Yr(Zn),ge();break;case 26:case 27:case 5:fe(a);break;case 4:ge();break;case 31:a.memoizedState!==null&&Ft(a);break;case 13:Ft(a);break;case 19:Z(Fn);break;case 10:Yr(a.type);break;case 22:case 23:Ft(a),gf(),t!==null&&Z(hi);break;case 24:Yr(Zn)}}function zo(t,a){try{var o=a.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){c=void 0;var g=o.create,M=o.inst;c=g(),M.destroy=c}o=o.next}while(o!==h)}}catch(B){fn(a,a.return,B)}}function wa(t,a,o){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var g=h.next;c=g;do{if((c.tag&t)===t){var M=c.inst,B=M.destroy;if(B!==void 0){M.destroy=void 0,h=a;var K=o,ae=B;try{ae()}catch(de){fn(h,K,de)}}}c=c.next}while(c!==g)}}catch(de){fn(a,a.return,de)}}function e0(t){var a=t.updateQueue;if(a!==null){var o=t.stateNode;try{U1(a,o)}catch(c){fn(t,t.return,c)}}}function n0(t,a,o){o.props=vi(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(c){fn(t,a,c)}}function jo(t,a){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var c=t.stateNode;break;case 30:c=t.stateNode;break;default:c=t.stateNode}typeof o=="function"?t.refCleanup=o(c):o.current=c}}catch(h){fn(t,a,h)}}function Er(t,a){var o=t.ref,c=t.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(h){fn(t,a,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(h){fn(t,a,h)}else o.current=null}function t0(t){var a=t.type,o=t.memoizedProps,c=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(h){fn(t,t.return,h)}}function Yf(t,a,o){try{var c=t.stateNode;OC(c,t.type,o,a),c[Tt]=a}catch(h){fn(t,t.return,h)}}function r0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function Zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,a,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(t),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Ir));else if(c!==4&&(c===27&&Pa(t.type)&&(o=t.stateNode,a=null),t=t.child,t!==null))for(Wf(t,a,o),t=t.sibling;t!==null;)Wf(t,a,o),t=t.sibling}function Dc(t,a,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,a?o.insertBefore(t,a):o.appendChild(t);else if(c!==4&&(c===27&&Pa(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(Dc(t,a,o),t=t.sibling;t!==null;)Dc(t,a,o),t=t.sibling}function a0(t){var a=t.stateNode,o=t.memoizedProps;try{for(var c=t.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);pt(a,c,o),a[dt]=t,a[Tt]=o}catch(g){fn(t,t.return,g)}}var $r=!1,Qn=!1,Xf=!1,i0=typeof WeakSet=="function"?WeakSet:Set,ct=null;function pC(t,a){if(t=t.containerInfo,vh=Yc,t=y1(t),Id(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var M=0,B=-1,K=-1,ae=0,de=0,me=t,ie=null;n:for(;;){for(var le;me!==o||h!==0&&me.nodeType!==3||(B=M+h),me!==g||c!==0&&me.nodeType!==3||(K=M+c),me.nodeType===3&&(M+=me.nodeValue.length),(le=me.firstChild)!==null;)ie=me,me=le;for(;;){if(me===t)break n;if(ie===o&&++ae===h&&(B=M),ie===g&&++de===c&&(K=M),(le=me.nextSibling)!==null)break;me=ie,ie=me.parentNode}me=le}o=B===-1||K===-1?null:{start:B,end:K}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:t,selectionRange:o},Yc=!1,ct=a;ct!==null;)if(a=ct,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,ct=t;else for(;ct!==null;){switch(a=ct,g=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)h=t[o],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&g!==null){t=void 0,o=a,h=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var De=vi(o.type,h);t=c.getSnapshotBeforeUpdate(De,g),c.__reactInternalSnapshotBeforeUpdate=t}catch(ze){fn(o,o.return,ze)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,o=t.nodeType,o===9)Mh(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(i(163))}if(t=a.sibling,t!==null){t.return=a.return,ct=t;break}ct=a.return}}function s0(t,a,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:na(t,o),c&4&&zo(5,o);break;case 1:if(na(t,o),c&4)if(t=o.stateNode,a===null)try{t.componentDidMount()}catch(M){fn(o,o.return,M)}else{var h=vi(o.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(h,a,t.__reactInternalSnapshotBeforeUpdate)}catch(M){fn(o,o.return,M)}}c&64&&e0(o),c&512&&jo(o,o.return);break;case 3:if(na(t,o),c&64&&(t=o.updateQueue,t!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{U1(t,a)}catch(M){fn(o,o.return,M)}}break;case 27:a===null&&c&4&&a0(o);case 26:case 5:na(t,o),a===null&&c&4&&t0(o),c&512&&jo(o,o.return);break;case 12:na(t,o);break;case 31:na(t,o),c&4&&c0(t,o);break;case 13:na(t,o),c&4&&u0(t,o),c&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=AC.bind(null,o),UC(t,o))));break;case 22:if(c=o.memoizedState!==null||$r,!c){a=a!==null&&a.memoizedState!==null||Qn,h=$r;var g=Qn;$r=c,(Qn=a)&&!g?ta(t,o,(o.subtreeFlags&8772)!==0):na(t,o),$r=h,Qn=g}break;case 30:break;default:na(t,o)}}function o0(t){var a=t.alternate;a!==null&&(t.alternate=null,o0(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Td(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nn=null,Et=!1;function ea(t,a,o){for(o=o.child;o!==null;)l0(t,a,o),o=o.sibling}function l0(t,a,o){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(vn,o)}catch{}switch(o.tag){case 26:Qn||Er(o,a),ea(t,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Qn||Er(o,a);var c=Nn,h=Et;Pa(o.type)&&(Nn=o.stateNode,Et=!1),ea(t,a,o),Ko(o.stateNode),Nn=c,Et=h;break;case 5:Qn||Er(o,a);case 6:if(c=Nn,h=Et,Nn=null,ea(t,a,o),Nn=c,Et=h,Nn!==null)if(Et)try{(Nn.nodeType===9?Nn.body:Nn.nodeName==="HTML"?Nn.ownerDocument.body:Nn).removeChild(o.stateNode)}catch(g){fn(o,a,g)}else try{Nn.removeChild(o.stateNode)}catch(g){fn(o,a,g)}break;case 18:Nn!==null&&(Et?(t=Nn,ev(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),Ms(t)):ev(Nn,o.stateNode));break;case 4:c=Nn,h=Et,Nn=o.stateNode.containerInfo,Et=!0,ea(t,a,o),Nn=c,Et=h;break;case 0:case 11:case 14:case 15:wa(2,o,a),Qn||wa(4,o,a),ea(t,a,o);break;case 1:Qn||(Er(o,a),c=o.stateNode,typeof c.componentWillUnmount=="function"&&n0(o,a,c)),ea(t,a,o);break;case 21:ea(t,a,o);break;case 22:Qn=(c=Qn)||o.memoizedState!==null,ea(t,a,o),Qn=c;break;default:ea(t,a,o)}}function c0(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ms(t)}catch(o){fn(a,a.return,o)}}}function u0(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ms(t)}catch(o){fn(a,a.return,o)}}function gC(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new i0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new i0),a;default:throw Error(i(435,t.tag))}}function Ec(t,a){var o=gC(t);a.forEach(function(c){if(!o.has(c)){o.add(c);var h=wC.bind(null,t,c);c.then(h,h)}})}function Nt(t,a){var o=a.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c],g=t,M=a,B=M;e:for(;B!==null;){switch(B.tag){case 27:if(Pa(B.type)){Nn=B.stateNode,Et=!1;break e}break;case 5:Nn=B.stateNode,Et=!1;break e;case 3:case 4:Nn=B.stateNode.containerInfo,Et=!0;break e}B=B.return}if(Nn===null)throw Error(i(160));l0(g,M,h),Nn=null,Et=!1,g=h.alternate,g!==null&&(g.return=null),h.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)d0(a,t),a=a.sibling}var hr=null;function d0(t,a){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nt(a,t),Rt(t),c&4&&(wa(3,t,t.return),zo(3,t),wa(5,t,t.return));break;case 1:Nt(a,t),Rt(t),c&512&&(Qn||o===null||Er(o,o.return)),c&64&&$r&&(t=t.updateQueue,t!==null&&(c=t.callbacks,c!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var h=hr;if(Nt(a,t),Rt(t),c&512&&(Qn||o===null||Er(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=t.memoizedState,o===null)if(c===null)if(t.stateNode===null){e:{c=t.type,o=t.memoizedProps,h=h.ownerDocument||h;n:switch(c){case"title":g=h.getElementsByTagName("title")[0],(!g||g[uo]||g[dt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=h.createElement(c),h.head.insertBefore(g,h.querySelector("head > title"))),pt(g,c,o),g[dt]=t,lt(g),c=g;break e;case"link":var M=dv("link","href",h).get(c+(o.href||""));if(M){for(var B=0;B<M.length;B++)if(g=M[B],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){M.splice(B,1);break n}}g=h.createElement(c),pt(g,c,o),h.head.appendChild(g);break;case"meta":if(M=dv("meta","content",h).get(c+(o.content||""))){for(B=0;B<M.length;B++)if(g=M[B],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){M.splice(B,1);break n}}g=h.createElement(c),pt(g,c,o),h.head.appendChild(g);break;default:throw Error(i(468,c))}g[dt]=t,lt(g),c=g}t.stateNode=c}else fv(h,t.type,t.stateNode);else t.stateNode=uv(h,c,t.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?fv(h,t.type,t.stateNode):uv(h,c,t.memoizedProps)):c===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,o.memoizedProps)}break;case 27:Nt(a,t),Rt(t),c&512&&(Qn||o===null||Er(o,o.return)),o!==null&&c&4&&Yf(t,t.memoizedProps,o.memoizedProps);break;case 5:if(Nt(a,t),Rt(t),c&512&&(Qn||o===null||Er(o,o.return)),t.flags&32){h=t.stateNode;try{Ji(h,"")}catch(De){fn(t,t.return,De)}}c&4&&t.stateNode!=null&&(h=t.memoizedProps,Yf(t,h,o!==null?o.memoizedProps:h)),c&1024&&(Xf=!0);break;case 6:if(Nt(a,t),Rt(t),c&4){if(t.stateNode===null)throw Error(i(162));c=t.memoizedProps,o=t.stateNode;try{o.nodeValue=c}catch(De){fn(t,t.return,De)}}break;case 3:if(Uc=null,h=hr,hr=Hc(a.containerInfo),Nt(a,t),hr=h,Rt(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ms(a.containerInfo)}catch(De){fn(t,t.return,De)}Xf&&(Xf=!1,f0(t));break;case 4:c=hr,hr=Hc(t.stateNode.containerInfo),Nt(a,t),Rt(t),hr=c;break;case 12:Nt(a,t),Rt(t);break;case 31:Nt(a,t),Rt(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Ec(t,c)));break;case 13:Nt(a,t),Rt(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Rc=ue()),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Ec(t,c)));break;case 22:h=t.memoizedState!==null;var K=o!==null&&o.memoizedState!==null,ae=$r,de=Qn;if($r=ae||h,Qn=de||K,Nt(a,t),Qn=de,$r=ae,Rt(t),c&8192)e:for(a=t.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(o===null||K||$r||Qn||bi(t)),o=null,a=t;;){if(a.tag===5||a.tag===26){if(o===null){K=o=a;try{if(g=K.stateNode,h)M=g.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{B=K.stateNode;var me=K.memoizedProps.style,ie=me!=null&&me.hasOwnProperty("display")?me.display:null;B.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(De){fn(K,K.return,De)}}}else if(a.tag===6){if(o===null){K=a;try{K.stateNode.nodeValue=h?"":K.memoizedProps}catch(De){fn(K,K.return,De)}}}else if(a.tag===18){if(o===null){K=a;try{var le=K.stateNode;h?nv(le,!0):nv(K.stateNode,!1)}catch(De){fn(K,K.return,De)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=t.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Ec(t,o))));break;case 19:Nt(a,t),Rt(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Ec(t,c)));break;case 30:break;case 21:break;default:Nt(a,t),Rt(t)}}function Rt(t){var a=t.flags;if(a&2){try{for(var o,c=t.return;c!==null;){if(r0(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var h=o.stateNode,g=Zf(t);Dc(t,g,h);break;case 5:var M=o.stateNode;o.flags&32&&(Ji(M,""),o.flags&=-33);var B=Zf(t);Dc(t,B,M);break;case 3:case 4:var K=o.stateNode.containerInfo,ae=Zf(t);Wf(t,ae,K);break;default:throw Error(i(161))}}catch(de){fn(t,t.return,de)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function f0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;f0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function na(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)s0(t,a.alternate,a),a=a.sibling}function bi(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:wa(4,a,a.return),bi(a);break;case 1:Er(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&n0(a,a.return,o),bi(a);break;case 27:Ko(a.stateNode);case 26:case 5:Er(a,a.return),bi(a);break;case 22:a.memoizedState===null&&bi(a);break;case 30:bi(a);break;default:bi(a)}t=t.sibling}}function ta(t,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=t,g=a,M=g.flags;switch(g.tag){case 0:case 11:case 15:ta(h,g,o),zo(4,g);break;case 1:if(ta(h,g,o),c=g,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(ae){fn(c,c.return,ae)}if(c=g,h=c.updateQueue,h!==null){var B=c.stateNode;try{var K=h.shared.hiddenCallbacks;if(K!==null)for(h.shared.hiddenCallbacks=null,h=0;h<K.length;h++)I1(K[h],B)}catch(ae){fn(c,c.return,ae)}}o&&M&64&&e0(g),jo(g,g.return);break;case 27:a0(g);case 26:case 5:ta(h,g,o),o&&c===null&&M&4&&t0(g),jo(g,g.return);break;case 12:ta(h,g,o);break;case 31:ta(h,g,o),o&&M&4&&c0(h,g);break;case 13:ta(h,g,o),o&&M&4&&u0(h,g);break;case 22:g.memoizedState===null&&ta(h,g,o),jo(g,g.return);break;case 30:break;default:ta(h,g,o)}a=a.sibling}}function Qf(t,a){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&Ao(o))}function $f(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ao(t))}function mr(t,a,o,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)h0(t,a,o,c),a=a.sibling}function h0(t,a,o,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:mr(t,a,o,c),h&2048&&zo(9,a);break;case 1:mr(t,a,o,c);break;case 3:mr(t,a,o,c),h&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ao(t)));break;case 12:if(h&2048){mr(t,a,o,c),t=a.stateNode;try{var g=a.memoizedProps,M=g.id,B=g.onPostCommit;typeof B=="function"&&B(M,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(K){fn(a,a.return,K)}}else mr(t,a,o,c);break;case 31:mr(t,a,o,c);break;case 13:mr(t,a,o,c);break;case 23:break;case 22:g=a.stateNode,M=a.alternate,a.memoizedState!==null?g._visibility&2?mr(t,a,o,c):Vo(t,a):g._visibility&2?mr(t,a,o,c):(g._visibility|=2,ds(t,a,o,c,(a.subtreeFlags&10256)!==0||!1)),h&2048&&Qf(M,a);break;case 24:mr(t,a,o,c),h&2048&&$f(a.alternate,a);break;default:mr(t,a,o,c)}}function ds(t,a,o,c,h){for(h=h&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var g=t,M=a,B=o,K=c,ae=M.flags;switch(M.tag){case 0:case 11:case 15:ds(g,M,B,K,h),zo(8,M);break;case 23:break;case 22:var de=M.stateNode;M.memoizedState!==null?de._visibility&2?ds(g,M,B,K,h):Vo(g,M):(de._visibility|=2,ds(g,M,B,K,h)),h&&ae&2048&&Qf(M.alternate,M);break;case 24:ds(g,M,B,K,h),h&&ae&2048&&$f(M.alternate,M);break;default:ds(g,M,B,K,h)}a=a.sibling}}function Vo(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=t,c=a,h=c.flags;switch(c.tag){case 22:Vo(o,c),h&2048&&Qf(c.alternate,c);break;case 24:Vo(o,c),h&2048&&$f(c.alternate,c);break;default:Vo(o,c)}a=a.sibling}}var Fo=8192;function fs(t,a,o){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)m0(t,a,o),t=t.sibling}function m0(t,a,o){switch(t.tag){case 26:fs(t,a,o),t.flags&Fo&&t.memoizedState!==null&&tA(o,hr,t.memoizedState,t.memoizedProps);break;case 5:fs(t,a,o);break;case 3:case 4:var c=hr;hr=Hc(t.stateNode.containerInfo),fs(t,a,o),hr=c;break;case 22:t.memoizedState===null&&(c=t.alternate,c!==null&&c.memoizedState!==null?(c=Fo,Fo=16777216,fs(t,a,o),Fo=c):fs(t,a,o));break;default:fs(t,a,o)}}function p0(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Go(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];ct=c,y0(c,t)}p0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)g0(t),t=t.sibling}function g0(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&wa(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,Nc(t)):Go(t);break;default:Go(t)}}function Nc(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];ct=c,y0(c,t)}p0(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:wa(8,a,a.return),Nc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,Nc(a));break;default:Nc(a)}t=t.sibling}}function y0(t,a){for(;ct!==null;){var o=ct;switch(o.tag){case 0:case 11:case 15:wa(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ao(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,ct=c;else e:for(o=t;ct!==null;){c=ct;var h=c.sibling,g=c.return;if(o0(c),c===o){ct=null;break e}if(h!==null){h.return=g,ct=h;break e}ct=g}}}var yC={getCacheForType:function(t){var a=ht(Zn),o=a.data.get(t);return o===void 0&&(o=t(),a.data.set(t,o)),o},cacheSignal:function(){return ht(Zn).controller.signal}},vC=typeof WeakMap=="function"?WeakMap:Map,cn=0,bn=null,Xe=null,$e=0,dn=0,Gt=null,Ta=!1,hs=!1,eh=!1,ra=0,On=0,Da=0,xi=0,nh=0,Ht=0,ms=0,Ho=null,kt=null,th=!1,Rc=0,v0=0,kc=1/0,Pc=null,Ea=null,rt=0,Na=null,ps=null,aa=0,rh=0,ah=null,b0=null,Io=0,ih=null;function It(){return(cn&2)!==0&&$e!==0?$e&-$e:T.T!==null?dh():_g()}function x0(){if(Ht===0)if(($e&536870912)===0||nn){var t=ji;ji<<=1,(ji&3932160)===0&&(ji=262144),Ht=t}else Ht=536870912;return t=Vt.current,t!==null&&(t.flags|=32),Ht}function Pt(t,a,o){(t===bn&&(dn===2||dn===9)||t.cancelPendingCommit!==null)&&(gs(t,0),Ra(t,$e,Ht,!1)),co(t,o),((cn&2)===0||t!==bn)&&(t===bn&&((cn&2)===0&&(xi|=o),On===4&&Ra(t,$e,Ht,!1)),Nr(t))}function S0(t,a,o){if((cn&6)!==0)throw Error(i(327));var c=!o&&(a&127)===0&&(a&t.expiredLanes)===0||ur(t,a),h=c?SC(t,a):oh(t,a,!0),g=c;do{if(h===0){hs&&!c&&Ra(t,a,0,!1);break}else{if(o=t.current.alternate,g&&!bC(o)){h=oh(t,a,!1),g=!1;continue}if(h===2){if(g=a,t.errorRecoveryDisabledLanes&g)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;e:{var B=t;h=Ho;var K=B.current.memoizedState.isDehydrated;if(K&&(gs(B,M).flags|=256),M=oh(B,M,!1),M!==2){if(eh&&!K){B.errorRecoveryDisabledLanes|=g,xi|=g,h=4;break e}g=kt,kt=h,g!==null&&(kt===null?kt=g:kt.push.apply(kt,g))}h=M}if(g=!1,h!==2)continue}}if(h===1){gs(t,0),Ra(t,a,0,!0);break}e:{switch(c=t,g=h,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:Ra(c,a,Ht,!Ta);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(h=Rc+300-ue(),10<h)){if(Ra(c,a,Ht,!Ta),cr(c,0,!0)!==0)break e;aa=a,c.timeoutHandle=Q0(M0.bind(null,c,o,kt,Pc,th,a,Ht,xi,ms,Ta,g,"Throttled",-0,0),h);break e}M0(c,o,kt,Pc,th,a,Ht,xi,ms,Ta,g,null,-0,0)}}break}while(!0);Nr(t)}function M0(t,a,o,c,h,g,M,B,K,ae,de,me,ie,le){if(t.timeoutHandle=-1,me=a.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ir},m0(a,g,me);var De=(g&62914560)===g?Rc-ue():(g&4194048)===g?v0-ue():0;if(De=rA(me,De),De!==null){aa=g,t.cancelPendingCommit=De(R0.bind(null,t,a,g,o,c,h,M,B,K,de,me,null,ie,le)),Ra(t,g,M,!ae);return}}R0(t,a,g,o,c,h,M,B,K)}function bC(t){for(var a=t;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var h=o[c],g=h.getSnapshot;h=h.value;try{if(!zt(g(),h))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ra(t,a,o,c){a&=~nh,a&=~xi,t.suspendedLanes|=a,t.pingedLanes&=~a,c&&(t.warmLanes|=a),c=t.expirationTimes;for(var h=a;0<h;){var g=31-Yn(h),M=1<<g;c[g]=-1,h&=~M}o!==0&&Pg(t,o,a)}function Bc(){return(cn&6)===0?(Uo(0),!1):!0}function sh(){if(Xe!==null){if(dn===0)var t=Xe.return;else t=Xe,Kr=di=null,Mf(t),ss=null,To=0,t=Xe;for(;t!==null;)$y(t.alternate,t),t=t.return;Xe=null}}function gs(t,a){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,VC(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),aa=0,sh(),bn=t,Xe=o=Jr(t.current,null),$e=a,dn=0,Gt=null,Ta=!1,hs=ur(t,a),eh=!1,ms=Ht=nh=xi=Da=On=0,kt=Ho=null,th=!1,(a&8)!==0&&(a|=a&32);var c=t.entangledLanes;if(c!==0)for(t=t.entanglements,c&=a;0<c;){var h=31-Yn(c),g=1<<h;a|=t[h],c&=~g}return ra=a,ec(),o}function C0(t,a){Ke=null,T.H=Lo,a===is||a===lc?(a=V1(),dn=3):a===uf?(a=V1(),dn=4):dn=a===jf?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Gt=a,Xe===null&&(On=1,Mc(t,Xt(a,t.current)))}function A0(){var t=Vt.current;return t===null?!0:($e&4194048)===$e?nr===null:($e&62914560)===$e||($e&536870912)!==0?t===nr:!1}function w0(){var t=T.H;return T.H=Lo,t===null?Lo:t}function T0(){var t=T.A;return T.A=yC,t}function Lc(){On=4,Ta||($e&4194048)!==$e&&Vt.current!==null||(hs=!0),(Da&134217727)===0&&(xi&134217727)===0||bn===null||Ra(bn,$e,Ht,!1)}function oh(t,a,o){var c=cn;cn|=2;var h=w0(),g=T0();(bn!==t||$e!==a)&&(Pc=null,gs(t,a)),a=!1;var M=On;e:do try{if(dn!==0&&Xe!==null){var B=Xe,K=Gt;switch(dn){case 8:sh(),M=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(a=!0);var ae=dn;if(dn=0,Gt=null,ys(t,B,K,ae),o&&hs){M=0;break e}break;default:ae=dn,dn=0,Gt=null,ys(t,B,K,ae)}}xC(),M=On;break}catch(de){C0(t,de)}while(!0);return a&&t.shellSuspendCounter++,Kr=di=null,cn=c,T.H=h,T.A=g,Xe===null&&(bn=null,$e=0,ec()),M}function xC(){for(;Xe!==null;)D0(Xe)}function SC(t,a){var o=cn;cn|=2;var c=w0(),h=T0();bn!==t||$e!==a?(Pc=null,kc=ue()+500,gs(t,a)):hs=ur(t,a);e:do try{if(dn!==0&&Xe!==null){a=Xe;var g=Gt;n:switch(dn){case 1:dn=0,Gt=null,ys(t,a,g,1);break;case 2:case 9:if(z1(g)){dn=0,Gt=null,E0(a);break}a=function(){dn!==2&&dn!==9||bn!==t||(dn=7),Nr(t)},g.then(a,a);break e;case 3:dn=7;break e;case 4:dn=5;break e;case 7:z1(g)?(dn=0,Gt=null,E0(a)):(dn=0,Gt=null,ys(t,a,g,7));break;case 5:var M=null;switch(Xe.tag){case 26:M=Xe.memoizedState;case 5:case 27:var B=Xe;if(M?hv(M):B.stateNode.complete){dn=0,Gt=null;var K=B.sibling;if(K!==null)Xe=K;else{var ae=B.return;ae!==null?(Xe=ae,_c(ae)):Xe=null}break n}}dn=0,Gt=null,ys(t,a,g,5);break;case 6:dn=0,Gt=null,ys(t,a,g,6);break;case 8:sh(),On=6;break e;default:throw Error(i(462))}}MC();break}catch(de){C0(t,de)}while(!0);return Kr=di=null,T.H=c,T.A=h,cn=o,Xe!==null?0:(bn=null,$e=0,ec(),On)}function MC(){for(;Xe!==null&&!se();)D0(Xe)}function D0(t){var a=Xy(t.alternate,t,ra);t.memoizedProps=t.pendingProps,a===null?_c(t):Xe=a}function E0(t){var a=t,o=a.alternate;switch(a.tag){case 15:case 0:a=Jy(o,a,a.pendingProps,a.type,void 0,$e);break;case 11:a=Jy(o,a,a.pendingProps,a.type.render,a.ref,$e);break;case 5:Mf(a);default:$y(o,a),a=Xe=T1(a,ra),a=Xy(o,a,ra)}t.memoizedProps=t.pendingProps,a===null?_c(t):Xe=a}function ys(t,a,o,c){Kr=di=null,Mf(a),ss=null,To=0;var h=a.return;try{if(uC(t,h,a,o,$e)){On=1,Mc(t,Xt(o,t.current)),Xe=null;return}}catch(g){if(h!==null)throw Xe=h,g;On=1,Mc(t,Xt(o,t.current)),Xe=null;return}a.flags&32768?(nn||c===1?t=!0:hs||($e&536870912)!==0?t=!1:(Ta=t=!0,(c===2||c===9||c===3||c===6)&&(c=Vt.current,c!==null&&c.tag===13&&(c.flags|=16384))),N0(a,t)):_c(a)}function _c(t){var a=t;do{if((a.flags&32768)!==0){N0(a,Ta);return}t=a.return;var o=hC(a.alternate,a,ra);if(o!==null){Xe=o;return}if(a=a.sibling,a!==null){Xe=a;return}Xe=a=t}while(a!==null);On===0&&(On=5)}function N0(t,a){do{var o=mC(t.alternate,t);if(o!==null){o.flags&=32767,Xe=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(t=t.sibling,t!==null)){Xe=t;return}Xe=t=o}while(t!==null);On=6,Xe=null}function R0(t,a,o,c,h,g,M,B,K){t.cancelPendingCommit=null;do Oc();while(rt!==0);if((cn&6)!==0)throw Error(i(327));if(a!==null){if(a===t.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=Yd,nM(t,o,g,M,B,K),t===bn&&(Xe=bn=null,$e=0),ps=a,Na=t,aa=o,rh=g,ah=h,b0=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,TC(Oe,function(){return _0(),null})):(t.callbackNode=null,t.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=T.T,T.T=null,h=D.p,D.p=2,M=cn,cn|=4;try{pC(t,a,o)}finally{cn=M,D.p=h,T.T=c}}rt=1,k0(),P0(),B0()}}function k0(){if(rt===1){rt=0;var t=Na,a=ps,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=T.T,T.T=null;var c=D.p;D.p=2;var h=cn;cn|=4;try{d0(a,t);var g=bh,M=y1(t.containerInfo),B=g.focusedElem,K=g.selectionRange;if(M!==B&&B&&B.ownerDocument&&g1(B.ownerDocument.documentElement,B)){if(K!==null&&Id(B)){var ae=K.start,de=K.end;if(de===void 0&&(de=ae),"selectionStart"in B)B.selectionStart=ae,B.selectionEnd=Math.min(de,B.value.length);else{var me=B.ownerDocument||document,ie=me&&me.defaultView||window;if(ie.getSelection){var le=ie.getSelection(),De=B.textContent.length,ze=Math.min(K.start,De),yn=K.end===void 0?ze:Math.min(K.end,De);!le.extend&&ze>yn&&(M=yn,yn=ze,ze=M);var ne=p1(B,ze),W=p1(B,yn);if(ne&&W&&(le.rangeCount!==1||le.anchorNode!==ne.node||le.anchorOffset!==ne.offset||le.focusNode!==W.node||le.focusOffset!==W.offset)){var re=me.createRange();re.setStart(ne.node,ne.offset),le.removeAllRanges(),ze>yn?(le.addRange(re),le.extend(W.node,W.offset)):(re.setEnd(W.node,W.offset),le.addRange(re))}}}}for(me=[],le=B;le=le.parentNode;)le.nodeType===1&&me.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof B.focus=="function"&&B.focus(),B=0;B<me.length;B++){var he=me[B];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}Yc=!!vh,bh=vh=null}finally{cn=h,D.p=c,T.T=o}}t.current=a,rt=2}}function P0(){if(rt===2){rt=0;var t=Na,a=ps,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=T.T,T.T=null;var c=D.p;D.p=2;var h=cn;cn|=4;try{s0(t,a.alternate,a)}finally{cn=h,D.p=c,T.T=o}}rt=3}}function B0(){if(rt===4||rt===3){rt=0,ve();var t=Na,a=ps,o=aa,c=b0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?rt=5:(rt=0,ps=Na=null,L0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Ea=null),Ad(o),a=a.stateNode,rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(vn,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=T.T,h=D.p,D.p=2,T.T=null;try{for(var g=t.onRecoverableError,M=0;M<c.length;M++){var B=c[M];g(B.value,{componentStack:B.stack})}}finally{T.T=a,D.p=h}}(aa&3)!==0&&Oc(),Nr(t),h=t.pendingLanes,(o&261930)!==0&&(h&42)!==0?t===ih?Io++:(Io=0,ih=t):Io=0,Uo(0)}}function L0(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Ao(a)))}function Oc(){return k0(),P0(),B0(),_0()}function _0(){if(rt!==5)return!1;var t=Na,a=rh;rh=0;var o=Ad(aa),c=T.T,h=D.p;try{D.p=32>o?32:o,T.T=null,o=ah,ah=null;var g=Na,M=aa;if(rt=0,ps=Na=null,aa=0,(cn&6)!==0)throw Error(i(331));var B=cn;if(cn|=4,g0(g.current),h0(g,g.current,M,o),cn=B,Uo(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(vn,g)}catch{}return!0}finally{D.p=h,T.T=c,L0(t,a)}}function O0(t,a,o){a=Xt(o,a),a=zf(t.stateNode,a,2),t=Ma(t,a,2),t!==null&&(co(t,2),Nr(t))}function fn(t,a,o){if(t.tag===3)O0(t,t,o);else for(;a!==null;){if(a.tag===3){O0(a,t,o);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ea===null||!Ea.has(c))){t=Xt(o,t),o=zy(2),c=Ma(a,o,2),c!==null&&(jy(o,c,a,t),co(c,2),Nr(c));break}}a=a.return}}function lh(t,a,o){var c=t.pingCache;if(c===null){c=t.pingCache=new vC;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(o)||(eh=!0,h.add(o),t=CC.bind(null,t,a,o),a.then(t,t))}function CC(t,a,o){var c=t.pingCache;c!==null&&c.delete(a),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,bn===t&&($e&o)===o&&(On===4||On===3&&($e&62914560)===$e&&300>ue()-Rc?(cn&2)===0&&gs(t,0):nh|=o,ms===$e&&(ms=0)),Nr(t)}function z0(t,a){a===0&&(a=wr()),t=li(t,a),t!==null&&(co(t,a),Nr(t))}function AC(t){var a=t.memoizedState,o=0;a!==null&&(o=a.retryLane),z0(t,o)}function wC(t,a){var o=0;switch(t.tag){case 31:case 13:var c=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:c=t.stateNode;break;case 22:c=t.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),z0(t,o)}function TC(t,a){return J(t,a)}var zc=null,vs=null,ch=!1,jc=!1,uh=!1,ka=0;function Nr(t){t!==vs&&t.next===null&&(vs===null?zc=vs=t:vs=vs.next=t),jc=!0,ch||(ch=!0,EC())}function Uo(t,a){if(!uh&&jc){uh=!0;do for(var o=!1,c=zc;c!==null;){if(t!==0){var h=c.pendingLanes;if(h===0)var g=0;else{var M=c.suspendedLanes,B=c.pingedLanes;g=(1<<31-Yn(42|t)+1)-1,g&=h&~(M&~B),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,G0(c,g))}else g=$e,g=cr(c,c===bn?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||ur(c,g)||(o=!0,G0(c,g));c=c.next}while(o);uh=!1}}function DC(){j0()}function j0(){jc=ch=!1;var t=0;ka!==0&&jC()&&(t=ka);for(var a=ue(),o=null,c=zc;c!==null;){var h=c.next,g=V0(c,a);g===0?(c.next=null,o===null?zc=h:o.next=h,h===null&&(vs=o)):(o=c,(t!==0||(g&3)!==0)&&(jc=!0)),c=h}rt!==0&&rt!==5||Uo(t),ka!==0&&(ka=0)}function V0(t,a){for(var o=t.suspendedLanes,c=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes&-62914561;0<g;){var M=31-Yn(g),B=1<<M,K=h[M];K===-1?((B&o)===0||(B&c)!==0)&&(h[M]=Hl(B,a)):K<=a&&(t.expiredLanes|=B),g&=~B}if(a=bn,o=$e,o=cr(t,t===a?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c=t.callbackNode,o===0||t===a&&(dn===2||dn===9)||t.cancelPendingCommit!==null)return c!==null&&c!==null&&ee(c),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||ur(t,o)){if(a=o&-o,a===t.callbackPriority)return a;switch(c!==null&&ee(c),Ad(o)){case 2:case 8:o=Ge;break;case 32:o=Oe;break;case 268435456:o=An;break;default:o=Oe}return c=F0.bind(null,t),o=J(o,c),t.callbackPriority=a,t.callbackNode=o,a}return c!==null&&c!==null&&ee(c),t.callbackPriority=2,t.callbackNode=null,2}function F0(t,a){if(rt!==0&&rt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(Oc()&&t.callbackNode!==o)return null;var c=$e;return c=cr(t,t===bn?c:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c===0?null:(S0(t,c,a),V0(t,ue()),t.callbackNode!=null&&t.callbackNode===o?F0.bind(null,t):null)}function G0(t,a){if(Oc())return null;S0(t,a,!0)}function EC(){FC(function(){(cn&6)!==0?J(Ce,DC):j0()})}function dh(){if(ka===0){var t=rs;t===0&&(t=Ar,Ar<<=1,(Ar&261888)===0&&(Ar=256)),ka=t}return ka}function H0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ql(""+t)}function I0(t,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,t.id&&o.setAttribute("form",t.id),a.parentNode.insertBefore(o,a),t=new FormData(t),o.parentNode.removeChild(o),t}function NC(t,a,o,c,h){if(a==="submit"&&o&&o.stateNode===h){var g=H0((h[Tt]||null).action),M=c.submitter;M&&(a=(a=M[Tt]||null)?H0(a.formAction):M.getAttribute("formAction"),a!==null&&(g=a,M=null));var B=new Wl("action","action",null,c,h);t.push({event:B,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ka!==0){var K=M?I0(h,M):new FormData(h);kf(o,{pending:!0,data:K,method:h.method,action:g},null,K)}}else typeof g=="function"&&(B.preventDefault(),K=M?I0(h,M):new FormData(h),kf(o,{pending:!0,data:K,method:h.method,action:g},g,K))},currentTarget:h}]})}}for(var fh=0;fh<Kd.length;fh++){var hh=Kd[fh],RC=hh.toLowerCase(),kC=hh[0].toUpperCase()+hh.slice(1);fr(RC,"on"+kC)}fr(x1,"onAnimationEnd"),fr(S1,"onAnimationIteration"),fr(M1,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(KM,"onTransitionRun"),fr(YM,"onTransitionStart"),fr(ZM,"onTransitionCancel"),fr(C1,"onTransitionEnd"),Ii("onMouseEnter",["mouseout","mouseover"]),Ii("onMouseLeave",["mouseout","mouseover"]),Ii("onPointerEnter",["pointerout","pointerover"]),Ii("onPointerLeave",["pointerout","pointerover"]),ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function U0(t,a){a=(a&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],h=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var M=c.length-1;0<=M;M--){var B=c[M],K=B.instance,ae=B.currentTarget;if(B=B.listener,K!==g&&h.isPropagationStopped())break e;g=B,h.currentTarget=ae;try{g(h)}catch(de){$l(de)}h.currentTarget=null,g=K}else for(M=0;M<c.length;M++){if(B=c[M],K=B.instance,ae=B.currentTarget,B=B.listener,K!==g&&h.isPropagationStopped())break e;g=B,h.currentTarget=ae;try{g(h)}catch(de){$l(de)}h.currentTarget=null,g=K}}}}function Qe(t,a){var o=a[wd];o===void 0&&(o=a[wd]=new Set);var c=t+"__bubble";o.has(c)||(J0(a,t,2,!1),o.add(c))}function mh(t,a,o){var c=0;a&&(c|=4),J0(o,t,c,a)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function ph(t){if(!t[Vc]){t[Vc]=!0,jg.forEach(function(o){o!=="selectionchange"&&(PC.has(o)||mh(o,!1,t),mh(o,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Vc]||(a[Vc]=!0,mh("selectionchange",!1,a))}}function J0(t,a,o,c){switch(xv(a)){case 2:var h=sA;break;case 8:h=oA;break;default:h=Rh}o=h.bind(null,a,o,t),h=void 0,!Ld||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?t.addEventListener(a,o,{capture:!0,passive:h}):t.addEventListener(a,o,!0):h!==void 0?t.addEventListener(a,o,{passive:h}):t.addEventListener(a,o,!1)}function gh(t,a,o,c,h){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var B=c.stateNode.containerInfo;if(B===h)break;if(M===4)for(M=c.return;M!==null;){var K=M.tag;if((K===3||K===4)&&M.stateNode.containerInfo===h)return;M=M.return}for(;B!==null;){if(M=Fi(B),M===null)return;if(K=M.tag,K===5||K===6||K===26||K===27){c=g=M;continue e}B=B.parentNode}}c=c.return}Wg(function(){var ae=g,de=Pd(o),me=[];e:{var ie=A1.get(t);if(ie!==void 0){var le=Wl,De=t;switch(t){case"keypress":if(Yl(o)===0)break e;case"keydown":case"keyup":le=wM;break;case"focusin":De="focus",le=jd;break;case"focusout":De="blur",le=jd;break;case"beforeblur":case"afterblur":le=jd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=$g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=hM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=EM;break;case x1:case S1:case M1:le=gM;break;case C1:le=RM;break;case"scroll":case"scrollend":le=dM;break;case"wheel":le=PM;break;case"copy":case"cut":case"paste":le=vM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=n1;break;case"toggle":case"beforetoggle":le=LM}var ze=(a&4)!==0,yn=!ze&&(t==="scroll"||t==="scrollend"),ne=ze?ie!==null?ie+"Capture":null:ie;ze=[];for(var W=ae,re;W!==null;){var he=W;if(re=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||re===null||ne===null||(he=ho(W,ne),he!=null&&ze.push(qo(W,he,re))),yn)break;W=W.return}0<ze.length&&(ie=new le(ie,De,null,o,de),me.push({event:ie,listeners:ze}))}}if((a&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ie&&o!==kd&&(De=o.relatedTarget||o.fromElement)&&(Fi(De)||De[Vi]))break e;if((le||ie)&&(ie=de.window===de?de:(ie=de.ownerDocument)?ie.defaultView||ie.parentWindow:window,le?(De=o.relatedTarget||o.toElement,le=ae,De=De?Fi(De):null,De!==null&&(yn=l(De),ze=De.tag,De!==yn||ze!==5&&ze!==27&&ze!==6)&&(De=null)):(le=null,De=ae),le!==De)){if(ze=$g,he="onMouseLeave",ne="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ze=n1,he="onPointerLeave",ne="onPointerEnter",W="pointer"),yn=le==null?ie:fo(le),re=De==null?ie:fo(De),ie=new ze(he,W+"leave",le,o,de),ie.target=yn,ie.relatedTarget=re,he=null,Fi(de)===ae&&(ze=new ze(ne,W+"enter",De,o,de),ze.target=re,ze.relatedTarget=yn,he=ze),yn=he,le&&De)n:{for(ze=BC,ne=le,W=De,re=0,he=ne;he;he=ze(he))re++;he=0;for(var Le=W;Le;Le=ze(Le))he++;for(;0<re-he;)ne=ze(ne),re--;for(;0<he-re;)W=ze(W),he--;for(;re--;){if(ne===W||W!==null&&ne===W.alternate){ze=ne;break n}ne=ze(ne),W=ze(W)}ze=null}else ze=null;le!==null&&q0(me,ie,le,ze,!1),De!==null&&yn!==null&&q0(me,yn,De,ze,!0)}}e:{if(ie=ae?fo(ae):window,le=ie.nodeName&&ie.nodeName.toLowerCase(),le==="select"||le==="input"&&ie.type==="file")var an=c1;else if(o1(ie))if(u1)an=UM;else{an=HM;var Pe=GM}else le=ie.nodeName,!le||le.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ae&&Rd(ae.elementType)&&(an=c1):an=IM;if(an&&(an=an(t,ae))){l1(me,an,o,de);break e}Pe&&Pe(t,ie,ae),t==="focusout"&&ae&&ie.type==="number"&&ae.memoizedProps.value!=null&&Nd(ie,"number",ie.value)}switch(Pe=ae?fo(ae):window,t){case"focusin":(o1(Pe)||Pe.contentEditable==="true")&&(Zi=Pe,Ud=ae,So=null);break;case"focusout":So=Ud=Zi=null;break;case"mousedown":Jd=!0;break;case"contextmenu":case"mouseup":case"dragend":Jd=!1,v1(me,o,de);break;case"selectionchange":if(qM)break;case"keydown":case"keyup":v1(me,o,de)}var Ye;if(Fd)e:{switch(t){case"compositionstart":var en="onCompositionStart";break e;case"compositionend":en="onCompositionEnd";break e;case"compositionupdate":en="onCompositionUpdate";break e}en=void 0}else Yi?i1(t,o)&&(en="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(en="onCompositionStart");en&&(t1&&o.locale!=="ko"&&(Yi||en!=="onCompositionStart"?en==="onCompositionEnd"&&Yi&&(Ye=Xg()):(pa=de,_d="value"in pa?pa.value:pa.textContent,Yi=!0)),Pe=Fc(ae,en),0<Pe.length&&(en=new e1(en,t,null,o,de),me.push({event:en,listeners:Pe}),Ye?en.data=Ye:(Ye=s1(o),Ye!==null&&(en.data=Ye)))),(Ye=OM?zM(t,o):jM(t,o))&&(en=Fc(ae,"onBeforeInput"),0<en.length&&(Pe=new e1("onBeforeInput","beforeinput",null,o,de),me.push({event:Pe,listeners:en}),Pe.data=Ye)),NC(me,t,ae,o,de)}U0(me,a)})}function qo(t,a,o){return{instance:t,listener:a,currentTarget:o}}function Fc(t,a){for(var o=a+"Capture",c=[];t!==null;){var h=t,g=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||g===null||(h=ho(t,o),h!=null&&c.unshift(qo(t,h,g)),h=ho(t,a),h!=null&&c.push(qo(t,h,g))),t.tag===3)return c;t=t.return}return[]}function BC(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function q0(t,a,o,c,h){for(var g=a._reactName,M=[];o!==null&&o!==c;){var B=o,K=B.alternate,ae=B.stateNode;if(B=B.tag,K!==null&&K===c)break;B!==5&&B!==26&&B!==27||ae===null||(K=ae,h?(ae=ho(o,g),ae!=null&&M.unshift(qo(o,ae,K))):h||(ae=ho(o,g),ae!=null&&M.push(qo(o,ae,K)))),o=o.return}M.length!==0&&t.push({event:a,listeners:M})}var LC=/\r\n?/g,_C=/\u0000|\uFFFD/g;function K0(t){return(typeof t=="string"?t:""+t).replace(LC,`
`).replace(_C,"")}function Y0(t,a){return a=K0(a),K0(t)===a}function gn(t,a,o,c,h,g){switch(o){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Ji(t,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Ji(t,""+c);break;case"className":Ul(t,"class",c);break;case"tabIndex":Ul(t,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ul(t,o,c);break;case"style":Yg(t,c,g);break;case"data":if(a!=="object"){Ul(t,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||o!=="href")){t.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(o);break}c=ql(""+c),t.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(a!=="input"&&gn(t,a,"name",h.name,h,null),gn(t,a,"formEncType",h.formEncType,h,null),gn(t,a,"formMethod",h.formMethod,h,null),gn(t,a,"formTarget",h.formTarget,h,null)):(gn(t,a,"encType",h.encType,h,null),gn(t,a,"method",h.method,h,null),gn(t,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(o);break}c=ql(""+c),t.setAttribute(o,c);break;case"onClick":c!=null&&(t.onclick=Ir);break;case"onScroll":c!=null&&Qe("scroll",t);break;case"onScrollEnd":c!=null&&Qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(h.children!=null)throw Error(i(60));t.innerHTML=o}}break;case"multiple":t.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":t.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){t.removeAttribute("xlink:href");break}o=ql(""+c),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(o,""+c):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":c===!0?t.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(o,c):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?t.setAttribute(o,c):t.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?t.removeAttribute(o):t.setAttribute(o,c);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),Il(t,"popover",c);break;case"xlinkActuate":Hr(t,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Hr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Hr(t,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Hr(t,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Hr(t,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Hr(t,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Hr(t,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Hr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Hr(t,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Il(t,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=cM.get(o)||o,Il(t,o,c))}}function yh(t,a,o,c,h,g){switch(o){case"style":Yg(t,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(h.children!=null)throw Error(i(60));t.innerHTML=o}}break;case"children":typeof c=="string"?Ji(t,c):(typeof c=="number"||typeof c=="bigint")&&Ji(t,""+c);break;case"onScroll":c!=null&&Qe("scroll",t);break;case"onScrollEnd":c!=null&&Qe("scrollend",t);break;case"onClick":c!=null&&(t.onclick=Ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vg.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),a=o.slice(2,h?o.length-7:void 0),g=t[Tt]||null,g=g!=null?g[o]:null,typeof g=="function"&&t.removeEventListener(a,g,h),typeof c=="function")){typeof g!="function"&&g!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(a,c,h);break e}o in t?t[o]=c:c===!0?t.setAttribute(o,""):Il(t,o,c)}}}function pt(t,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var c=!1,h=!1,g;for(g in o)if(o.hasOwnProperty(g)){var M=o[g];if(M!=null)switch(g){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:gn(t,a,g,M,o,null)}}h&&gn(t,a,"srcSet",o.srcSet,o,null),c&&gn(t,a,"src",o.src,o,null);return;case"input":Qe("invalid",t);var B=g=M=h=null,K=null,ae=null;for(c in o)if(o.hasOwnProperty(c)){var de=o[c];if(de!=null)switch(c){case"name":h=de;break;case"type":M=de;break;case"checked":K=de;break;case"defaultChecked":ae=de;break;case"value":g=de;break;case"defaultValue":B=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(i(137,a));break;default:gn(t,a,c,de,o,null)}}Ug(t,g,B,K,ae,M,h,!1);return;case"select":Qe("invalid",t),c=M=g=null;for(h in o)if(o.hasOwnProperty(h)&&(B=o[h],B!=null))switch(h){case"value":g=B;break;case"defaultValue":M=B;break;case"multiple":c=B;default:gn(t,a,h,B,o,null)}a=g,o=M,t.multiple=!!c,a!=null?Ui(t,!!c,a,!1):o!=null&&Ui(t,!!c,o,!0);return;case"textarea":Qe("invalid",t),g=h=c=null;for(M in o)if(o.hasOwnProperty(M)&&(B=o[M],B!=null))switch(M){case"value":c=B;break;case"defaultValue":h=B;break;case"children":g=B;break;case"dangerouslySetInnerHTML":if(B!=null)throw Error(i(91));break;default:gn(t,a,M,B,o,null)}qg(t,c,h,g);return;case"option":for(K in o)if(o.hasOwnProperty(K)&&(c=o[K],c!=null))switch(K){case"selected":t.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:gn(t,a,K,c,o,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(c=0;c<Jo.length;c++)Qe(Jo[c],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in o)if(o.hasOwnProperty(ae)&&(c=o[ae],c!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:gn(t,a,ae,c,o,null)}return;default:if(Rd(a)){for(de in o)o.hasOwnProperty(de)&&(c=o[de],c!==void 0&&yh(t,a,de,c,o,void 0));return}}for(B in o)o.hasOwnProperty(B)&&(c=o[B],c!=null&&gn(t,a,B,c,o,null))}function OC(t,a,o,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,g=null,M=null,B=null,K=null,ae=null,de=null;for(le in o){var me=o[le];if(o.hasOwnProperty(le)&&me!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":K=me;default:c.hasOwnProperty(le)||gn(t,a,le,null,c,me)}}for(var ie in c){var le=c[ie];if(me=o[ie],c.hasOwnProperty(ie)&&(le!=null||me!=null))switch(ie){case"type":g=le;break;case"name":h=le;break;case"checked":ae=le;break;case"defaultChecked":de=le;break;case"value":M=le;break;case"defaultValue":B=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(i(137,a));break;default:le!==me&&gn(t,a,ie,le,c,me)}}Ed(t,M,B,K,ae,de,g,h);return;case"select":le=M=B=ie=null;for(g in o)if(K=o[g],o.hasOwnProperty(g)&&K!=null)switch(g){case"value":break;case"multiple":le=K;default:c.hasOwnProperty(g)||gn(t,a,g,null,c,K)}for(h in c)if(g=c[h],K=o[h],c.hasOwnProperty(h)&&(g!=null||K!=null))switch(h){case"value":ie=g;break;case"defaultValue":B=g;break;case"multiple":M=g;default:g!==K&&gn(t,a,h,g,c,K)}a=B,o=M,c=le,ie!=null?Ui(t,!!o,ie,!1):!!c!=!!o&&(a!=null?Ui(t,!!o,a,!0):Ui(t,!!o,o?[]:"",!1));return;case"textarea":le=ie=null;for(B in o)if(h=o[B],o.hasOwnProperty(B)&&h!=null&&!c.hasOwnProperty(B))switch(B){case"value":break;case"children":break;default:gn(t,a,B,null,c,h)}for(M in c)if(h=c[M],g=o[M],c.hasOwnProperty(M)&&(h!=null||g!=null))switch(M){case"value":ie=h;break;case"defaultValue":le=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==g&&gn(t,a,M,h,c,g)}Jg(t,ie,le);return;case"option":for(var De in o)if(ie=o[De],o.hasOwnProperty(De)&&ie!=null&&!c.hasOwnProperty(De))switch(De){case"selected":t.selected=!1;break;default:gn(t,a,De,null,c,ie)}for(K in c)if(ie=c[K],le=o[K],c.hasOwnProperty(K)&&ie!==le&&(ie!=null||le!=null))switch(K){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:gn(t,a,K,ie,c,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ze in o)ie=o[ze],o.hasOwnProperty(ze)&&ie!=null&&!c.hasOwnProperty(ze)&&gn(t,a,ze,null,c,ie);for(ae in c)if(ie=c[ae],le=o[ae],c.hasOwnProperty(ae)&&ie!==le&&(ie!=null||le!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(i(137,a));break;default:gn(t,a,ae,ie,c,le)}return;default:if(Rd(a)){for(var yn in o)ie=o[yn],o.hasOwnProperty(yn)&&ie!==void 0&&!c.hasOwnProperty(yn)&&yh(t,a,yn,void 0,c,ie);for(de in c)ie=c[de],le=o[de],!c.hasOwnProperty(de)||ie===le||ie===void 0&&le===void 0||yh(t,a,de,ie,c,le);return}}for(var ne in o)ie=o[ne],o.hasOwnProperty(ne)&&ie!=null&&!c.hasOwnProperty(ne)&&gn(t,a,ne,null,c,ie);for(me in c)ie=c[me],le=o[me],!c.hasOwnProperty(me)||ie===le||ie==null&&le==null||gn(t,a,me,ie,c,le)}function Z0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zC(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var h=o[c],g=h.transferSize,M=h.initiatorType,B=h.duration;if(g&&B&&Z0(M)){for(M=0,B=h.responseEnd,c+=1;c<o.length;c++){var K=o[c],ae=K.startTime;if(ae>B)break;var de=K.transferSize,me=K.initiatorType;de&&Z0(me)&&(K=K.responseEnd,M+=de*(K<B?1:(B-ae)/(K-ae)))}if(--c,a+=8*(g+M)/(h.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var vh=null,bh=null;function Gc(t){return t.nodeType===9?t:t.ownerDocument}function W0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function xh(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Sh=null;function jC(){var t=window.event;return t&&t.type==="popstate"?t===Sh?!1:(Sh=t,!0):(Sh=null,!1)}var Q0=typeof setTimeout=="function"?setTimeout:void 0,VC=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,FC=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(t){return $0.resolve(null).then(t).catch(GC)}:Q0;function GC(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function ev(t,a){var o=a,c=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"||o==="/&"){if(c===0){t.removeChild(h),Ms(a);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")Ko(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,Ko(o);for(var g=o.firstChild;g;){var M=g.nextSibling,B=g.nodeName;g[uo]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=M}}else o==="body"&&Ko(t.ownerDocument.body);o=h}while(o);Ms(a)}function nv(t,a){var o=t;t=0;do{var c=o.nextSibling;if(o.nodeType===1?a?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(a?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=c}while(o)}function Mh(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Mh(o),Td(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function HC(t,a,o,c){for(;t.nodeType===1;){var h=o;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(c){if(!t[uo])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(g=t.getAttribute("rel"),g==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(g!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(g=t.getAttribute("src"),(g!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&g&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var g=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===g)return t}else return t;if(t=tr(t.nextSibling),t===null)break}return null}function IC(t,a,o){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=tr(t.nextSibling),t===null))return null;return t}function tv(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=tr(t.nextSibling),t===null))return null;return t}function Ch(t){return t.data==="$?"||t.data==="$~"}function Ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function UC(t,a){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||o.readyState!=="loading")a();else{var c=function(){a(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),t._reactRetry=c}}function tr(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var wh=null;function rv(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(a===0)return tr(t.nextSibling);a--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||a++}t=t.nextSibling}return null}function av(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(a===0)return t;a--}else o!=="/$"&&o!=="/&"||a++}t=t.previousSibling}return null}function iv(t,a,o){switch(a=Gc(o),t){case"html":if(t=a.documentElement,!t)throw Error(i(452));return t;case"head":if(t=a.head,!t)throw Error(i(453));return t;case"body":if(t=a.body,!t)throw Error(i(454));return t;default:throw Error(i(451))}}function Ko(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Td(t)}var rr=new Map,sv=new Set;function Hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=D.d;D.d={f:JC,r:qC,D:KC,C:YC,L:ZC,m:WC,X:QC,S:XC,M:$C};function JC(){var t=ia.f(),a=Bc();return t||a}function qC(t){var a=Gi(t);a!==null&&a.tag===5&&a.type==="form"?Cy(a):ia.r(t)}var bs=typeof document>"u"?null:document;function ov(t,a,o){var c=bs;if(c&&typeof a=="string"&&a){var h=Zt(a);h='link[rel="'+t+'"][href="'+h+'"]',typeof o=="string"&&(h+='[crossorigin="'+o+'"]'),sv.has(h)||(sv.add(h),t={rel:t,crossOrigin:o,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),pt(a,"link",t),lt(a),c.head.appendChild(a)))}}function KC(t){ia.D(t),ov("dns-prefetch",t,null)}function YC(t,a){ia.C(t,a),ov("preconnect",t,a)}function ZC(t,a,o){ia.L(t,a,o);var c=bs;if(c&&t&&a){var h='link[rel="preload"][as="'+Zt(a)+'"]';a==="image"&&o&&o.imageSrcSet?(h+='[imagesrcset="'+Zt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(h+='[imagesizes="'+Zt(o.imageSizes)+'"]')):h+='[href="'+Zt(t)+'"]';var g=h;switch(a){case"style":g=xs(t);break;case"script":g=Ss(t)}rr.has(g)||(t=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:t,as:a},o),rr.set(g,t),c.querySelector(h)!==null||a==="style"&&c.querySelector(Yo(g))||a==="script"&&c.querySelector(Zo(g))||(a=c.createElement("link"),pt(a,"link",t),lt(a),c.head.appendChild(a)))}}function WC(t,a){ia.m(t,a);var o=bs;if(o&&t){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+Zt(c)+'"][href="'+Zt(t)+'"]',g=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Ss(t)}if(!rr.has(g)&&(t=y({rel:"modulepreload",href:t},a),rr.set(g,t),o.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zo(g)))return}c=o.createElement("link"),pt(c,"link",t),lt(c),o.head.appendChild(c)}}}function XC(t,a,o){ia.S(t,a,o);var c=bs;if(c&&t){var h=Hi(c).hoistableStyles,g=xs(t);a=a||"default";var M=h.get(g);if(!M){var B={loading:0,preload:null};if(M=c.querySelector(Yo(g)))B.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":a},o),(o=rr.get(g))&&Th(t,o);var K=M=c.createElement("link");lt(K),pt(K,"link",t),K._p=new Promise(function(ae,de){K.onload=ae,K.onerror=de}),K.addEventListener("load",function(){B.loading|=1}),K.addEventListener("error",function(){B.loading|=2}),B.loading|=4,Ic(M,a,c)}M={type:"stylesheet",instance:M,count:1,state:B},h.set(g,M)}}}function QC(t,a){ia.X(t,a);var o=bs;if(o&&t){var c=Hi(o).hoistableScripts,h=Ss(t),g=c.get(h);g||(g=o.querySelector(Zo(h)),g||(t=y({src:t,async:!0},a),(a=rr.get(h))&&Dh(t,a),g=o.createElement("script"),lt(g),pt(g,"link",t),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(h,g))}}function $C(t,a){ia.M(t,a);var o=bs;if(o&&t){var c=Hi(o).hoistableScripts,h=Ss(t),g=c.get(h);g||(g=o.querySelector(Zo(h)),g||(t=y({src:t,async:!0,type:"module"},a),(a=rr.get(h))&&Dh(t,a),g=o.createElement("script"),lt(g),pt(g,"link",t),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(h,g))}}function lv(t,a,o,c){var h=(h=ye.current)?Hc(h):null;if(!h)throw Error(i(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=xs(o.href),o=Hi(h).hoistableStyles,c=o.get(a),c||(c={type:"style",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=xs(o.href);var g=Hi(h).hoistableStyles,M=g.get(t);if(M||(h=h.ownerDocument||h,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(t,M),(g=h.querySelector(Yo(t)))&&!g._p&&(M.instance=g,M.state.loading=5),rr.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},rr.set(t,o),g||eA(h,t,o,M.state))),a&&c===null)throw Error(i(528,""));return M}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ss(o),o=Hi(h).hoistableScripts,c=o.get(a),c||(c={type:"script",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,t))}}function xs(t){return'href="'+Zt(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function cv(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function eA(t,a,o,c){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=t.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),pt(a,"link",o),lt(a),t.head.appendChild(a))}function Ss(t){return'[src="'+Zt(t)+'"]'}function Zo(t){return"script[async]"+t}function uv(t,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var c=t.querySelector('style[data-href~="'+Zt(o.href)+'"]');if(c)return a.instance=c,lt(c),c;var h=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(t.ownerDocument||t).createElement("style"),lt(c),pt(c,"style",h),Ic(c,o.precedence,t),a.instance=c;case"stylesheet":h=xs(o.href);var g=t.querySelector(Yo(h));if(g)return a.state.loading|=4,a.instance=g,lt(g),g;c=cv(o),(h=rr.get(h))&&Th(c,h),g=(t.ownerDocument||t).createElement("link"),lt(g);var M=g;return M._p=new Promise(function(B,K){M.onload=B,M.onerror=K}),pt(g,"link",c),a.state.loading|=4,Ic(g,o.precedence,t),a.instance=g;case"script":return g=Ss(o.src),(h=t.querySelector(Zo(g)))?(a.instance=h,lt(h),h):(c=o,(h=rr.get(g))&&(c=y({},o),Dh(c,h)),t=t.ownerDocument||t,h=t.createElement("script"),lt(h),pt(h,"link",c),t.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ic(c,o.precedence,t));return a.instance}function Ic(t,a,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,g=h,M=0;M<c.length;M++){var B=c[M];if(B.dataset.precedence===a)g=B;else if(g!==h)break}g?g.parentNode.insertBefore(t,g.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(t,a.firstChild))}function Th(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Dh(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Uc=null;function dv(t,a,o){if(Uc===null){var c=new Map,h=Uc=new Map;h.set(o,c)}else h=Uc,c=h.get(o),c||(c=new Map,h.set(o,c));if(c.has(t))return c;for(c.set(t,null),o=o.getElementsByTagName(t),h=0;h<o.length;h++){var g=o[h];if(!(g[uo]||g[dt]||t==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var M=g.getAttribute(a)||"";M=t+M;var B=c.get(M);B?B.push(g):c.set(M,[g])}}return c}function fv(t,a,o){t=t.ownerDocument||t,t.head.insertBefore(o,a==="title"?t.querySelector("head > title"):null)}function nA(t,a,o){if(o===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function hv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tA(t,a,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var h=xs(c.href),g=a.querySelector(Yo(h));if(g){a=g._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Jc.bind(t),a.then(t,t)),o.state.loading|=4,o.instance=g,lt(g);return}g=a.ownerDocument||a,c=cv(c),(h=rr.get(h))&&Th(c,h),g=g.createElement("link"),lt(g);var M=g;M._p=new Promise(function(B,K){M.onload=B,M.onerror=K}),pt(g,"link",c),o.instance=g}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,a),(a=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Jc.bind(t),a.addEventListener("load",o),a.addEventListener("error",o))}}var Eh=0;function rA(t,a){return t.stylesheets&&t.count===0&&Kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var c=setTimeout(function(){if(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend){var g=t.unsuspend;t.unsuspend=null,g()}},6e4+a);0<t.imgBytes&&Eh===0&&(Eh=62500*zC());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend)){var g=t.unsuspend;t.unsuspend=null,g()}},(t.imgBytes>Eh?50:800)+a);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(c),clearTimeout(h)}}:null}function Jc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var qc=null;function Kc(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qc=new Map,a.forEach(aA,t),qc=null,Jc.call(t))}function aA(t,a){if(!(a.state.loading&4)){var o=qc.get(t);if(o)var c=o.get(null);else{o=new Map,qc.set(t,o);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<h.length;g++){var M=h[g];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(o.set(M.dataset.precedence,M),c=M)}c&&o.set(null,c)}h=a.instance,M=h.getAttribute("data-precedence"),g=o.get(M)||c,g===c&&o.set(null,h),o.set(M,h),this.count++,c=Jc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),g?g.parentNode.insertBefore(h,g.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),a.state.loading|=4}}var Wo={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function iA(t,a,o,c,h,g,M,B,K){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dr(0),this.hiddenUpdates=dr(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=g,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=K,this.incompleteTransitions=new Map}function mv(t,a,o,c,h,g,M,B,K,ae,de,me){return t=new iA(t,a,o,M,K,ae,de,me,B),a=1,g===!0&&(a|=24),g=jt(3,null,null,a),t.current=g,g.stateNode=t,a=of(),a.refCount++,t.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:a},df(g),t}function pv(t){return t?(t=Qi,t):Qi}function gv(t,a,o,c,h,g){h=pv(h),c.context===null?c.context=h:c.pendingContext=h,c=Sa(a),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=Ma(t,c,a),o!==null&&(Pt(o,t,a),Eo(o,t,a))}function yv(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<a?o:a}}function Nh(t,a){yv(t,a),(t=t.alternate)&&yv(t,a)}function vv(t){if(t.tag===13||t.tag===31){var a=li(t,67108864);a!==null&&Pt(a,t,67108864),Nh(t,67108864)}}function bv(t){if(t.tag===13||t.tag===31){var a=It();a=Cd(a);var o=li(t,a);o!==null&&Pt(o,t,a),Nh(t,a)}}var Yc=!0;function sA(t,a,o,c){var h=T.T;T.T=null;var g=D.p;try{D.p=2,Rh(t,a,o,c)}finally{D.p=g,T.T=h}}function oA(t,a,o,c){var h=T.T;T.T=null;var g=D.p;try{D.p=8,Rh(t,a,o,c)}finally{D.p=g,T.T=h}}function Rh(t,a,o,c){if(Yc){var h=kh(c);if(h===null)gh(t,a,c,Zc,o),Sv(t,c);else if(cA(h,t,a,o,c))c.stopPropagation();else if(Sv(t,c),a&4&&-1<lA.indexOf(t)){for(;h!==null;){var g=Gi(h);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var M=yt(g.pendingLanes);if(M!==0){var B=g;for(B.pendingLanes|=2,B.entangledLanes|=2;M;){var K=1<<31-Yn(M);B.entanglements[1]|=K,M&=~K}Nr(g),(cn&6)===0&&(kc=ue()+500,Uo(0))}}break;case 31:case 13:B=li(g,2),B!==null&&Pt(B,g,2),Bc(),Nh(g,2)}if(g=kh(c),g===null&&gh(t,a,c,Zc,o),g===h)break;h=g}h!==null&&c.stopPropagation()}else gh(t,a,c,null,o)}}function kh(t){return t=Pd(t),Ph(t)}var Zc=null;function Ph(t){if(Zc=null,t=Fi(t),t!==null){var a=l(t);if(a===null)t=null;else{var o=a.tag;if(o===13){if(t=u(a),t!==null)return t;t=null}else if(o===31){if(t=d(a),t!==null)return t;t=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Zc=t,null}function xv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pe()){case Ce:return 2;case Ge:return 8;case Oe:case Cn:return 32;case An:return 268435456;default:return 32}default:return 32}}var Bh=!1,Ba=null,La=null,_a=null,Xo=new Map,Qo=new Map,Oa=[],lA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(t,a){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":Xo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(a.pointerId)}}function $o(t,a,o,c,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:a,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},a!==null&&(a=Gi(a),a!==null&&vv(a)),t):(t.eventSystemFlags|=c,a=t.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),t)}function cA(t,a,o,c,h){switch(a){case"focusin":return Ba=$o(Ba,t,a,o,c,h),!0;case"dragenter":return La=$o(La,t,a,o,c,h),!0;case"mouseover":return _a=$o(_a,t,a,o,c,h),!0;case"pointerover":var g=h.pointerId;return Xo.set(g,$o(Xo.get(g)||null,t,a,o,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Qo.set(g,$o(Qo.get(g)||null,t,a,o,c,h)),!0}return!1}function Mv(t){var a=Fi(t.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=u(o),a!==null){t.blockedOn=a,Og(t.priority,function(){bv(o)});return}}else if(a===31){if(a=d(o),a!==null){t.blockedOn=a,Og(t.priority,function(){bv(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wc(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var o=kh(t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);kd=c,o.target.dispatchEvent(c),kd=null}else return a=Gi(o),a!==null&&vv(a),t.blockedOn=o,!1;a.shift()}return!0}function Cv(t,a,o){Wc(t)&&o.delete(a)}function uA(){Bh=!1,Ba!==null&&Wc(Ba)&&(Ba=null),La!==null&&Wc(La)&&(La=null),_a!==null&&Wc(_a)&&(_a=null),Xo.forEach(Cv),Qo.forEach(Cv)}function Xc(t,a){t.blockedOn===a&&(t.blockedOn=null,Bh||(Bh=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,uA)))}var Qc=null;function Av(t){Qc!==t&&(Qc=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Qc===t&&(Qc=null);for(var a=0;a<t.length;a+=3){var o=t[a],c=t[a+1],h=t[a+2];if(typeof c!="function"){if(Ph(c||o)===null)continue;break}var g=Gi(o);g!==null&&(t.splice(a,3),a-=3,kf(g,{pending:!0,data:h,method:o.method,action:c},c,h))}}))}function Ms(t){function a(K){return Xc(K,t)}Ba!==null&&Xc(Ba,t),La!==null&&Xc(La,t),_a!==null&&Xc(_a,t),Xo.forEach(a),Qo.forEach(a);for(var o=0;o<Oa.length;o++){var c=Oa[o];c.blockedOn===t&&(c.blockedOn=null)}for(;0<Oa.length&&(o=Oa[0],o.blockedOn===null);)Mv(o),o.blockedOn===null&&Oa.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var h=o[c],g=o[c+1],M=h[Tt]||null;if(typeof g=="function")M||Av(o);else if(M){var B=null;if(g&&g.hasAttribute("formAction")){if(h=g,M=g[Tt]||null)B=M.formAction;else if(Ph(h)!==null)continue}else B=M.action;typeof B=="function"?o[c+1]=B:(o.splice(c,3),c-=3),Av(o)}}}function wv(){function t(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(M){return h=M})},focusReset:"manual",scroll:"manual"})}function a(){h!==null&&(h(),h=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),h!==null&&(h(),h=null)}}}function Lh(t){this._internalRoot=t}$c.prototype.render=Lh.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,c=It();gv(o,c,t,a,null,null)},$c.prototype.unmount=Lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;gv(t.current,2,null,t,null,null),Bc(),a[Vi]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var a=_g();t={blockedOn:null,target:t,priority:a};for(var o=0;o<Oa.length&&a!==0&&a<Oa[o].priority;o++);Oa.splice(o,0,t),o===0&&Mv(t)}};var Tv=e.version;if(Tv!=="19.2.0")throw Error(i(527,Tv,"19.2.0"));D.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=p(a),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var dA={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{vn=eu.inject(dA),rn=eu}catch{}}return nl.createRoot=function(t,a){if(!s(t))throw Error(i(299));var o=!1,c="",h=By,g=Ly,M=_y;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),a=mv(t,1,!1,null,null,o,c,null,h,g,M,wv),t[Vi]=a.current,ph(t),new Lh(a)},nl.hydrateRoot=function(t,a,o){if(!s(t))throw Error(i(299));var c=!1,h="",g=By,M=Ly,B=_y,K=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(M=o.onCaughtError),o.onRecoverableError!==void 0&&(B=o.onRecoverableError),o.formState!==void 0&&(K=o.formState)),a=mv(t,1,!0,a,o??null,c,h,K,g,M,B,wv),a.context=pv(null),o=a.current,c=It(),c=Cd(c),h=Sa(c),h.callback=null,Ma(o,h,c),o=c,a.current.lanes=o,co(a,o),Nr(a),t[Vi]=a.current,ph(t),new $c(a)},nl.version="19.2.0",nl}var Ov;function SA(){if(Ov)return Oh.exports;Ov=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Oh.exports=xA(),Oh.exports}var MA=SA(),C=mp();const Hn=b4(C),pp=hA({__proto__:null,default:Hn},[C]),CA=C.createContext(null),Gh={didCatch:!1,error:null};class AA extends C.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Gh}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var r,i,s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];(r=(i=this.props).onReset)===null||r===void 0||r.call(i,{args:l,reason:"imperative-api"}),this.setState(Gh)}}componentDidCatch(e,r){var i,s;(i=(s=this.props).onError)===null||i===void 0||i.call(s,e,r)}componentDidUpdate(e,r){const{didCatch:i}=this.state,{resetKeys:s}=this.props;if(i&&r.error!==null&&wA(e.resetKeys,s)){var l,u;(l=(u=this.props).onReset)===null||l===void 0||l.call(u,{next:s,prev:e.resetKeys,reason:"keys"}),this.setState(Gh)}}render(){const{children:e,fallbackRender:r,FallbackComponent:i,fallback:s}=this.props,{didCatch:l,error:u}=this.state;let d=e;if(l){const f={error:u,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")d=r(f);else if(i)d=C.createElement(i,f);else if(s!==void 0)d=s;else throw u}return C.createElement(CA.Provider,{value:{didCatch:l,error:u,resetErrorBoundary:this.resetErrorBoundary}},d)}}function wA(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.length!==e.length||n.some((r,i)=>!Object.is(r,e[i]))}const TA={SPARK_RUNTIME_LOADED:"sparkRuntimeLoaded"},DA=n=>{};class nu{async getKeys(){const e=await fetch("/_spark/kv",{method:"GET"});if(!e.ok){const i=`Failed to fetch KV keys: ${e.statusText}`;return Promise.reject(new Error(i))}let r;try{r=await e.json()}catch{const s="Failed to parse KV keys response";return Promise.reject(new Error(s))}if(!Array.isArray(r)){const i="KV keys response is not an array";return Promise.reject(new Error(i))}return r}async getAll(){const e=await this.getKeys(),r={},i=await Promise.all(e.map(s=>this.getKey(s)));return e.forEach((s,l)=>{const u=i[l];u!==void 0&&(r[s]=u)}),r}async getKey(e,r){let i=`/_spark/kv/${encodeURIComponent(e)}`;r&&(i+=`?collection=${encodeURIComponent(r)}`);const s=await fetch(i,{method:"GET",headers:{"Content-Type":"text/plain"}});if(!s.ok){const u=`Failed to fetch KV key: ${s.statusText}`;return s.status===404?void 0:Promise.reject(new Error(u))}const l=await s.text();try{return JSON.parse(l)}catch{const d="Failed to parse KV key response";return Promise.reject(new Error(d))}}async getOrSetKey(e,r){const i=await this.getKey(e);if(i!==void 0)return i;const s=await fetch(`/_spark/kv/${encodeURIComponent(e)}`,{method:"POST",headers:{"Content-Type":"text/plain","X-Spark-Initial":"true"},body:JSON.stringify(r)});if(!s.ok){const l=`Failed to set default value for key: ${s.statusText}`;return Promise.reject(new Error(l))}return r}async setKey(e,r,i){let s=`/_spark/kv/${encodeURIComponent(e)}`;i&&(s+=`?collection=${encodeURIComponent(i)}`);const l=await fetch(s,{method:"POST",headers:{"Content-Type":"text/plain","X-Spark-Initial":"false"},body:JSON.stringify(r)});if(!l.ok){const u=`Failed to set key: ${l.statusText}`;return Promise.reject(new Error(u))}DA({payload:{value:JSON.stringify(r)}})}async deleteKey(e,r){let i=`/_spark/kv/${encodeURIComponent(e)}`;r&&(i+=`?collection=${encodeURIComponent(r)}`),await fetch(i,{method:"DELETE"})}}const EA={"ai21-jamba-instruct":"ai21-labs/ai21-jamba-instruct","cohere-command-r-plus":"cohere/cohere-command-r-plus","cohere-command-r":"cohere/cohere-command-r","gpt-4o-mini":"openai/gpt-4o-mini","gpt-4o":"openai/gpt-4o","meta-llama-3.1-405b-instruct":"meta/meta-llama-3.1-405b-instruct","meta-llama-3.1-70b-instruct":"meta/meta-llama-3.1-70b-instruct","meta-llama-3.1-8b-instruct":"meta/meta-llama-3.1-8b-instruct","meta-llama-3-70b-instruct":"meta/meta-llama-3-70b-instruct","meta-llama-3-8b-instruct":"meta/meta-llama-3-8b-instruct","mistral-large-2407":"mistral-ai/mistral-large-2407","mistral-large":"mistral-ai/mistral-large","mistral-nemo":"mistral-ai/mistral-nemo","mistral-small":"mistral-ai/mistral-small","phi-3-medium-128K-instruct":"microsoft/phi-3-medium-128K-instruct","phi-3-medium-4K-instruct":"microsoft/phi-3-medium-4K-instruct","phi-3-mini-128K-instruct":"microsoft/phi-3-mini-128K-instruct","phi-3-mini-4K-instruct":"microsoft/phi-3-mini-4K-instruct","phi-3-small-128K-instruct":"microsoft/phi-3-small-128K-instruct","phi-3-small-8K-instruct":"microsoft/phi-3-small-8K-instruct"},NA=n=>n?EA[n]||n:"openai/gpt-4o";async function RA(n,e,r){const i=NA(e),u=await fetch("/_spark/llm",{method:"POST",body:JSON.stringify({messages:[{role:"system",content:"You are a helpful assistant."},{role:"user",content:n}],temperature:1,top_p:1,max_tokens:1e3,model:i,response_format:{type:r?"json_object":"text"}}),headers:{"Content-Type":"application/json"}});if(!u.ok){const p=await u.text();throw new Error(`LLM request failed: ${u.status} ${u.statusText} - ${p}`)}return(await u.json()).choices[0].message.content}function kA(n,...e){return n.reduce((r,i,s)=>r+i+(e[s]||""),"")}let tu=null;async function PA(){try{return tu||(tu=await(await fetch("/_spark/user")).json(),tu)}catch(n){return console.error("Failed to fetch user data:",n),null}}const S4={url:window?.location?.href,load_ms:window?.performance?.now()};window.parent.postMessage({type:TA.SPARK_RUNTIME_LOADED,payload:S4},"*");fetch("/_spark/loaded",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S4)});const BA={keys:async()=>new nu().getKeys(),get:async n=>new nu().getKey(n),set:async(n,e)=>new nu().setKey(n,e),delete:async n=>new nu().deleteKey(n)};window.spark={llmPrompt:kA,llm:RA,user:PA,kv:BA};const Cm=()=>navigator.language.toLowerCase().startsWith("fr")?"fr":"en",M4=()=>({language:Cm(),birthDate:"",otpCode:"",reason:"illness",insurance:"swiss",hasEmployer:!1,consentNLPD:!1,consentMarketing:!1,identityCard:null,insuranceCard:null,firstName:"",lastName:"",birthDatePersonal:"",gender:"",nationality:"",avsNumber:"",street:"",npa:"",city:"",country:"",email:"",profession:"",employerName:"",employerAddress:"",referringDoctor:"",generalPractitioner:"",accidentDate:"",accidentInsurance:"",claimNumber:"",basicInsurance:"",cardNumber:"",policyNumber:"",complementaryInsurance:""}),LA=()=>{try{const n=sessionStorage.getItem("wizard-form-data");if(n)return{...JSON.parse(n),identityCard:null,insuranceCard:null}}catch(n){console.error("Failed to load from sessionStorage",n)}return M4()},_A=n=>{try{sessionStorage.setItem("wizard-form-data",JSON.stringify(n))}catch(e){console.error("Failed to save to sessionStorage",e)}},OA=()=>{const[n,e]=C.useState("landing"),[r,i]=C.useState(Cm()),[s,l]=C.useState(LA());C.useEffect(()=>{_A(s)},[s]);const u=y=>{"language"in y&&y.language&&i(y.language);const{language:v,...x}=y;Object.keys(x).length>0&&l(A=>({...A,...x}))},d=y=>{e(y)},f=()=>{const y=["landing","security","otp","qualification","loading","admin","success"],v=y.indexOf(n);v<y.length-1&&e(y[v+1])},p=()=>{const y=["landing","security","otp","qualification","loading","admin","success"],v=y.indexOf(n);if(v>0){const x=y[v-1];e(x==="loading"?y[v-2]:x)}},m=()=>{e("landing"),i(Cm()),sessionStorage.removeItem("wizard-form-data"),l(M4())};return{currentStep:n,formData:{...s,language:r},updateFormData:u,goToStep:d,nextStep:f,prevStep:p,resetWizard:m}};const zA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase()),zv=n=>{const e=jA(n);return e.charAt(0).toUpperCase()+e.slice(1)},C4=(...n)=>n.filter((e,r,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===r).join(" ").trim();var VA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const FA=C.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:u,...d},f)=>C.createElement("svg",{ref:f,...VA,width:e,height:e,stroke:n,strokeWidth:i?Number(r)*24/Number(e):r,className:C4("lucide",s),...d},[...u.map(([p,m])=>C.createElement(p,m)),...Array.isArray(l)?l:[l]]));const st=(n,e)=>{const r=C.forwardRef(({className:i,...s},l)=>C.createElement(FA,{ref:l,iconNode:e,className:C4(`lucide-${zA(zv(n))}`,`lucide-${n}`,i),...s}));return r.displayName=zv(n),r};const GA=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nd=st("arrow-left",GA);const HA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],kl=st("arrow-right",HA);const IA=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],UA=st("briefcase",IA);const JA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],qA=st("calendar",JA);const KA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],td=st("check",KA);const YA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rd=st("chevron-down",YA);const ZA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],WA=st("chevron-up",ZA);const XA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Dn=st("circle-alert",XA);const QA=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Rs=st("circle-check-big",QA);const $A=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],e6=st("clipboard-list",$A);const n6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],t6=st("globe",n6);const r6=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],gp=st("loader-circle",r6);const a6=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],i6=st("refresh-cw",a6);const s6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],o6=st("shield",s6);const l6=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],c6=st("sparkles",l6);const u6=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],d6=st("triangle-alert",u6);const f6=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],h6=st("upload",f6);const m6=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],p6=st("user",m6);const g6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],A4=st("x",g6),y6="/assets/logo-hlt-SDnMJMTh.png";var Pl=x4();const v6=b4(Pl);function jv(n,[e,r]){return Math.min(r,Math.max(e,n))}function Sn(n,e,{checkForDefaultPrevented:r=!0}={}){return function(s){if(n?.(s),r===!1||!s.defaultPrevented)return e?.(s)}}function b6(n,e){const r=C.createContext(e),i=l=>{const{children:u,...d}=l,f=C.useMemo(()=>d,Object.values(d));return b.jsx(r.Provider,{value:f,children:u})};i.displayName=n+"Provider";function s(l){const u=C.useContext(r);if(u)return u;if(e!==void 0)return e;throw new Error(`\`${l}\` must be used within \`${n}\``)}return[i,s]}function Bl(n,e=[]){let r=[];function i(l,u){const d=C.createContext(u),f=r.length;r=[...r,u];const p=y=>{const{scope:v,children:x,...A}=y,S=v?.[n]?.[f]||d,N=C.useMemo(()=>A,Object.values(A));return b.jsx(S.Provider,{value:N,children:x})};p.displayName=l+"Provider";function m(y,v){const x=v?.[n]?.[f]||d,A=C.useContext(x);if(A)return A;if(u!==void 0)return u;throw new Error(`\`${y}\` must be used within \`${l}\``)}return[p,m]}const s=()=>{const l=r.map(u=>C.createContext(u));return function(d){const f=d?.[n]||l;return C.useMemo(()=>({[`__scope${n}`]:{...d,[n]:f}}),[d,f])}};return s.scopeName=n,[i,x6(s,...e)]}function x6(...n){const e=n[0];if(n.length===1)return e;const r=()=>{const i=n.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(l){const u=i.reduce((d,{useScope:f,scopeName:p})=>{const y=f(l)[`__scope${p}`];return{...d,...y}},{});return C.useMemo(()=>({[`__scope${e.scopeName}`]:u}),[u])}};return r.scopeName=e.scopeName,r}function Vv(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function Xs(...n){return e=>{let r=!1;const i=n.map(s=>{const l=Vv(s,e);return!r&&typeof l=="function"&&(r=!0),l});if(r)return()=>{for(let s=0;s<i.length;s++){const l=i[s];typeof l=="function"?l():Vv(n[s],null)}}}}function Ln(...n){return C.useCallback(Xs(...n),n)}function Fv(n){const e=S6(n),r=C.forwardRef((i,s)=>{const{children:l,...u}=i,d=C.Children.toArray(l),f=d.find(C6);if(f){const p=f.props.children,m=d.map(y=>y===f?C.Children.count(p)>1?C.Children.only(null):C.isValidElement(p)?p.props.children:null:y);return b.jsx(e,{...u,ref:s,children:C.isValidElement(p)?C.cloneElement(p,void 0,m):null})}return b.jsx(e,{...u,ref:s,children:l})});return r.displayName=`${n}.Slot`,r}function S6(n){const e=C.forwardRef((r,i)=>{const{children:s,...l}=r;if(C.isValidElement(s)){const u=w6(s),d=A6(l,s.props);return s.type!==C.Fragment&&(d.ref=i?Xs(i,u):u),C.cloneElement(s,d)}return C.Children.count(s)>1?C.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var M6=Symbol("radix.slottable");function C6(n){return C.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===M6}function A6(n,e){const r={...e};for(const i in e){const s=n[i],l=e[i];/^on[A-Z]/.test(i)?s&&l?r[i]=(...d)=>{const f=l(...d);return s(...d),f}:s&&(r[i]=s):i==="style"?r[i]={...s,...l}:i==="className"&&(r[i]=[s,l].filter(Boolean).join(" "))}return{...n,...r}}function w6(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function T6(n){const e=n+"CollectionProvider",[r,i]=Bl(e),[s,l]=r(e,{collectionRef:{current:null},itemMap:new Map}),u=S=>{const{scope:N,children:w}=S,R=Hn.useRef(null),L=Hn.useRef(new Map).current;return b.jsx(s,{scope:N,itemMap:L,collectionRef:R,children:w})};u.displayName=e;const d=n+"CollectionSlot",f=Fv(d),p=Hn.forwardRef((S,N)=>{const{scope:w,children:R}=S,L=l(d,w),z=Ln(N,L.collectionRef);return b.jsx(f,{ref:z,children:R})});p.displayName=d;const m=n+"CollectionItemSlot",y="data-radix-collection-item",v=Fv(m),x=Hn.forwardRef((S,N)=>{const{scope:w,children:R,...L}=S,z=Hn.useRef(null),G=Ln(N,z),_=l(m,w);return Hn.useEffect(()=>(_.itemMap.set(z,{ref:z,...L}),()=>void _.itemMap.delete(z))),b.jsx(v,{[y]:"",ref:G,children:R})});x.displayName=m;function A(S){const N=l(n+"CollectionConsumer",S);return Hn.useCallback(()=>{const R=N.collectionRef.current;if(!R)return[];const L=Array.from(R.querySelectorAll(`[${y}]`));return Array.from(N.itemMap.values()).sort((_,O)=>L.indexOf(_.ref.current)-L.indexOf(O.ref.current))},[N.collectionRef,N.itemMap])}return[{Provider:u,Slot:p,ItemSlot:x},A,i]}var D6=C.createContext(void 0);function E6(n){const e=C.useContext(D6);return n||e||"ltr"}function N6(n){const e=R6(n),r=C.forwardRef((i,s)=>{const{children:l,...u}=i,d=C.Children.toArray(l),f=d.find(P6);if(f){const p=f.props.children,m=d.map(y=>y===f?C.Children.count(p)>1?C.Children.only(null):C.isValidElement(p)?p.props.children:null:y);return b.jsx(e,{...u,ref:s,children:C.isValidElement(p)?C.cloneElement(p,void 0,m):null})}return b.jsx(e,{...u,ref:s,children:l})});return r.displayName=`${n}.Slot`,r}function R6(n){const e=C.forwardRef((r,i)=>{const{children:s,...l}=r;if(C.isValidElement(s)){const u=L6(s),d=B6(l,s.props);return s.type!==C.Fragment&&(d.ref=i?Xs(i,u):u),C.cloneElement(s,d)}return C.Children.count(s)>1?C.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var k6=Symbol("radix.slottable");function P6(n){return C.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===k6}function B6(n,e){const r={...e};for(const i in e){const s=n[i],l=e[i];/^on[A-Z]/.test(i)?s&&l?r[i]=(...d)=>{const f=l(...d);return s(...d),f}:s&&(r[i]=s):i==="style"?r[i]={...s,...l}:i==="className"&&(r[i]=[s,l].filter(Boolean).join(" "))}return{...n,...r}}function L6(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var _6=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],mn=_6.reduce((n,e)=>{const r=N6(`Primitive.${e}`),i=C.forwardRef((s,l)=>{const{asChild:u,...d}=s,f=u?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),b.jsx(f,{...d,ref:l})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function O6(n,e){n&&Pl.flushSync(()=>n.dispatchEvent(e))}function Pi(n){const e=C.useRef(n);return C.useEffect(()=>{e.current=n}),C.useMemo(()=>(...r)=>e.current?.(...r),[])}function z6(n,e=globalThis?.document){const r=Pi(n);C.useEffect(()=>{const i=s=>{s.key==="Escape"&&r(s)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[r,e])}var j6="DismissableLayer",Am="dismissableLayer.update",V6="dismissableLayer.pointerDownOutside",F6="dismissableLayer.focusOutside",Gv,w4=C.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),yp=C.forwardRef((n,e)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:l,onInteractOutside:u,onDismiss:d,...f}=n,p=C.useContext(w4),[m,y]=C.useState(null),v=m?.ownerDocument??globalThis?.document,[,x]=C.useState({}),A=Ln(e,O=>y(O)),S=Array.from(p.layers),[N]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),w=S.indexOf(N),R=m?S.indexOf(m):-1,L=p.layersWithOutsidePointerEventsDisabled.size>0,z=R>=w,G=I6(O=>{const E=O.target,k=[...p.branches].some(j=>j.contains(E));!z||k||(s?.(O),u?.(O),O.defaultPrevented||d?.())},v),_=U6(O=>{const E=O.target;[...p.branches].some(j=>j.contains(E))||(l?.(O),u?.(O),O.defaultPrevented||d?.())},v);return z6(O=>{R===p.layers.size-1&&(i?.(O),!O.defaultPrevented&&d&&(O.preventDefault(),d()))},v),C.useEffect(()=>{if(m)return r&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(Gv=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(m)),p.layers.add(m),Hv(),()=>{r&&p.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Gv)}},[m,v,r,p]),C.useEffect(()=>()=>{m&&(p.layers.delete(m),p.layersWithOutsidePointerEventsDisabled.delete(m),Hv())},[m,p]),C.useEffect(()=>{const O=()=>x({});return document.addEventListener(Am,O),()=>document.removeEventListener(Am,O)},[]),b.jsx(mn.div,{...f,ref:A,style:{pointerEvents:L?z?"auto":"none":void 0,...n.style},onFocusCapture:Sn(n.onFocusCapture,_.onFocusCapture),onBlurCapture:Sn(n.onBlurCapture,_.onBlurCapture),onPointerDownCapture:Sn(n.onPointerDownCapture,G.onPointerDownCapture)})});yp.displayName=j6;var G6="DismissableLayerBranch",H6=C.forwardRef((n,e)=>{const r=C.useContext(w4),i=C.useRef(null),s=Ln(e,i);return C.useEffect(()=>{const l=i.current;if(l)return r.branches.add(l),()=>{r.branches.delete(l)}},[r.branches]),b.jsx(mn.div,{...n,ref:s})});H6.displayName=G6;function I6(n,e=globalThis?.document){const r=Pi(n),i=C.useRef(!1),s=C.useRef(()=>{});return C.useEffect(()=>{const l=d=>{if(d.target&&!i.current){let f=function(){T4(V6,r,p,{discrete:!0})};const p={originalEvent:d};d.pointerType==="touch"?(e.removeEventListener("click",s.current),s.current=f,e.addEventListener("click",s.current,{once:!0})):f()}else e.removeEventListener("click",s.current);i.current=!1},u=window.setTimeout(()=>{e.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(u),e.removeEventListener("pointerdown",l),e.removeEventListener("click",s.current)}},[e,r]),{onPointerDownCapture:()=>i.current=!0}}function U6(n,e=globalThis?.document){const r=Pi(n),i=C.useRef(!1);return C.useEffect(()=>{const s=l=>{l.target&&!i.current&&T4(F6,r,{originalEvent:l},{discrete:!1})};return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Hv(){const n=new CustomEvent(Am);document.dispatchEvent(n)}function T4(n,e,r,{discrete:i}){const s=r.originalEvent.target,l=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:r});e&&s.addEventListener(n,e,{once:!0}),i?O6(s,l):s.dispatchEvent(l)}var Hh=0;function D4(){C.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??Iv()),document.body.insertAdjacentElement("beforeend",n[1]??Iv()),Hh++,()=>{Hh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Hh--}},[])}function Iv(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Ih="focusScope.autoFocusOnMount",Uh="focusScope.autoFocusOnUnmount",Uv={bubbles:!1,cancelable:!0},J6="FocusScope",vp=C.forwardRef((n,e)=>{const{loop:r=!1,trapped:i=!1,onMountAutoFocus:s,onUnmountAutoFocus:l,...u}=n,[d,f]=C.useState(null),p=Pi(s),m=Pi(l),y=C.useRef(null),v=Ln(e,S=>f(S)),x=C.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;C.useEffect(()=>{if(i){let S=function(L){if(x.paused||!d)return;const z=L.target;d.contains(z)?y.current=z:Fa(y.current,{select:!0})},N=function(L){if(x.paused||!d)return;const z=L.relatedTarget;z!==null&&(d.contains(z)||Fa(y.current,{select:!0}))},w=function(L){if(document.activeElement===document.body)for(const G of L)G.removedNodes.length>0&&Fa(d)};document.addEventListener("focusin",S),document.addEventListener("focusout",N);const R=new MutationObserver(w);return d&&R.observe(d,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",S),document.removeEventListener("focusout",N),R.disconnect()}}},[i,d,x.paused]),C.useEffect(()=>{if(d){qv.add(x);const S=document.activeElement;if(!d.contains(S)){const w=new CustomEvent(Ih,Uv);d.addEventListener(Ih,p),d.dispatchEvent(w),w.defaultPrevented||(q6(X6(E4(d)),{select:!0}),document.activeElement===S&&Fa(d))}return()=>{d.removeEventListener(Ih,p),setTimeout(()=>{const w=new CustomEvent(Uh,Uv);d.addEventListener(Uh,m),d.dispatchEvent(w),w.defaultPrevented||Fa(S??document.body,{select:!0}),d.removeEventListener(Uh,m),qv.remove(x)},0)}}},[d,p,m,x]);const A=C.useCallback(S=>{if(!r&&!i||x.paused)return;const N=S.key==="Tab"&&!S.altKey&&!S.ctrlKey&&!S.metaKey,w=document.activeElement;if(N&&w){const R=S.currentTarget,[L,z]=K6(R);L&&z?!S.shiftKey&&w===z?(S.preventDefault(),r&&Fa(L,{select:!0})):S.shiftKey&&w===L&&(S.preventDefault(),r&&Fa(z,{select:!0})):w===R&&S.preventDefault()}},[r,i,x.paused]);return b.jsx(mn.div,{tabIndex:-1,...u,ref:v,onKeyDown:A})});vp.displayName=J6;function q6(n,{select:e=!1}={}){const r=document.activeElement;for(const i of n)if(Fa(i,{select:e}),document.activeElement!==r)return}function K6(n){const e=E4(n),r=Jv(e,n),i=Jv(e.reverse(),n);return[r,i]}function E4(n){const e=[],r=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const s=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||s?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)e.push(r.currentNode);return e}function Jv(n,e){for(const r of n)if(!Y6(r,{upTo:e}))return r}function Y6(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function Z6(n){return n instanceof HTMLInputElement&&"select"in n}function Fa(n,{select:e=!1}={}){if(n&&n.focus){const r=document.activeElement;n.focus({preventScroll:!0}),n!==r&&Z6(n)&&e&&n.select()}}var qv=W6();function W6(){let n=[];return{add(e){const r=n[0];e!==r&&r?.pause(),n=Kv(n,e),n.unshift(e)},remove(e){n=Kv(n,e),n[0]?.resume()}}}function Kv(n,e){const r=[...n],i=r.indexOf(e);return i!==-1&&r.splice(i,1),r}function X6(n){return n.filter(e=>e.tagName!=="A")}var St=globalThis?.document?C.useLayoutEffect:()=>{},Q6=pp[" useId ".trim().toString()]||(()=>{}),$6=0;function Vs(n){const[e,r]=C.useState(Q6());return St(()=>{r(i=>i??String($6++))},[n]),n||(e?`radix-${e}`:"")}const ew=["top","right","bottom","left"],Ya=Math.min,Ut=Math.max,Au=Math.round,ru=Math.floor,Or=n=>({x:n,y:n}),nw={left:"right",right:"left",bottom:"top",top:"bottom"},tw={start:"end",end:"start"};function wm(n,e,r){return Ut(n,Ya(e,r))}function la(n,e){return typeof n=="function"?n(e):n}function ca(n){return n.split("-")[0]}function Qs(n){return n.split("-")[1]}function bp(n){return n==="x"?"y":"x"}function xp(n){return n==="y"?"height":"width"}const rw=new Set(["top","bottom"]);function _r(n){return rw.has(ca(n))?"y":"x"}function Sp(n){return bp(_r(n))}function aw(n,e,r){r===void 0&&(r=!1);const i=Qs(n),s=Sp(n),l=xp(s);let u=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(u=wu(u)),[u,wu(u)]}function iw(n){const e=wu(n);return[Tm(n),e,Tm(e)]}function Tm(n){return n.replace(/start|end/g,e=>tw[e])}const Yv=["left","right"],Zv=["right","left"],sw=["top","bottom"],ow=["bottom","top"];function lw(n,e,r){switch(n){case"top":case"bottom":return r?e?Zv:Yv:e?Yv:Zv;case"left":case"right":return e?sw:ow;default:return[]}}function cw(n,e,r,i){const s=Qs(n);let l=lw(ca(n),r==="start",i);return s&&(l=l.map(u=>u+"-"+s),e&&(l=l.concat(l.map(Tm)))),l}function wu(n){return n.replace(/left|right|bottom|top/g,e=>nw[e])}function uw(n){return{top:0,right:0,bottom:0,left:0,...n}}function N4(n){return typeof n!="number"?uw(n):{top:n,right:n,bottom:n,left:n}}function Tu(n){const{x:e,y:r,width:i,height:s}=n;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Wv(n,e,r){let{reference:i,floating:s}=n;const l=_r(e),u=Sp(e),d=xp(u),f=ca(e),p=l==="y",m=i.x+i.width/2-s.width/2,y=i.y+i.height/2-s.height/2,v=i[d]/2-s[d]/2;let x;switch(f){case"top":x={x:m,y:i.y-s.height};break;case"bottom":x={x:m,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y};break;case"left":x={x:i.x-s.width,y};break;default:x={x:i.x,y:i.y}}switch(Qs(e)){case"start":x[u]-=v*(r&&p?-1:1);break;case"end":x[u]+=v*(r&&p?-1:1);break}return x}const dw=async(n,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:l=[],platform:u}=r,d=l.filter(Boolean),f=await(u.isRTL==null?void 0:u.isRTL(e));let p=await u.getElementRects({reference:n,floating:e,strategy:s}),{x:m,y}=Wv(p,i,f),v=i,x={},A=0;for(let S=0;S<d.length;S++){const{name:N,fn:w}=d[S],{x:R,y:L,data:z,reset:G}=await w({x:m,y,initialPlacement:i,placement:v,strategy:s,middlewareData:x,rects:p,platform:u,elements:{reference:n,floating:e}});m=R??m,y=L??y,x={...x,[N]:{...x[N],...z}},G&&A<=50&&(A++,typeof G=="object"&&(G.placement&&(v=G.placement),G.rects&&(p=G.rects===!0?await u.getElementRects({reference:n,floating:e,strategy:s}):G.rects),{x:m,y}=Wv(p,v,f)),S=-1)}return{x:m,y,placement:v,strategy:s,middlewareData:x}};async function bl(n,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:l,rects:u,elements:d,strategy:f}=n,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:y="floating",altBoundary:v=!1,padding:x=0}=la(e,n),A=N4(x),N=d[v?y==="floating"?"reference":"floating":y],w=Tu(await l.getClippingRect({element:(r=await(l.isElement==null?void 0:l.isElement(N)))==null||r?N:N.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(d.floating)),boundary:p,rootBoundary:m,strategy:f})),R=y==="floating"?{x:i,y:s,width:u.floating.width,height:u.floating.height}:u.reference,L=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d.floating)),z=await(l.isElement==null?void 0:l.isElement(L))?await(l.getScale==null?void 0:l.getScale(L))||{x:1,y:1}:{x:1,y:1},G=Tu(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:R,offsetParent:L,strategy:f}):R);return{top:(w.top-G.top+A.top)/z.y,bottom:(G.bottom-w.bottom+A.bottom)/z.y,left:(w.left-G.left+A.left)/z.x,right:(G.right-w.right+A.right)/z.x}}const fw=n=>({name:"arrow",options:n,async fn(e){const{x:r,y:i,placement:s,rects:l,platform:u,elements:d,middlewareData:f}=e,{element:p,padding:m=0}=la(n,e)||{};if(p==null)return{};const y=N4(m),v={x:r,y:i},x=Sp(s),A=xp(x),S=await u.getDimensions(p),N=x==="y",w=N?"top":"left",R=N?"bottom":"right",L=N?"clientHeight":"clientWidth",z=l.reference[A]+l.reference[x]-v[x]-l.floating[A],G=v[x]-l.reference[x],_=await(u.getOffsetParent==null?void 0:u.getOffsetParent(p));let O=_?_[L]:0;(!O||!await(u.isElement==null?void 0:u.isElement(_)))&&(O=d.floating[L]||l.floating[A]);const E=z/2-G/2,k=O/2-S[A]/2-1,j=Ya(y[w],k),V=Ya(y[R],k),F=j,U=O-S[A]-V,H=O/2-S[A]/2+E,Y=wm(F,H,U),T=!f.arrow&&Qs(s)!=null&&H!==Y&&l.reference[A]/2-(H<F?j:V)-S[A]/2<0,D=T?H<F?H-F:H-U:0;return{[x]:v[x]+D,data:{[x]:Y,centerOffset:H-Y-D,...T&&{alignmentOffset:D}},reset:T}}}),hw=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var r,i;const{placement:s,middlewareData:l,rects:u,initialPlacement:d,platform:f,elements:p}=e,{mainAxis:m=!0,crossAxis:y=!0,fallbackPlacements:v,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:S=!0,...N}=la(n,e);if((r=l.arrow)!=null&&r.alignmentOffset)return{};const w=ca(s),R=_r(d),L=ca(d)===d,z=await(f.isRTL==null?void 0:f.isRTL(p.floating)),G=v||(L||!S?[wu(d)]:iw(d)),_=A!=="none";!v&&_&&G.push(...cw(d,S,A,z));const O=[d,...G],E=await bl(e,N),k=[];let j=((i=l.flip)==null?void 0:i.overflows)||[];if(m&&k.push(E[w]),y){const H=aw(s,u,z);k.push(E[H[0]],E[H[1]])}if(j=[...j,{placement:s,overflows:k}],!k.every(H=>H<=0)){var V,F;const H=(((V=l.flip)==null?void 0:V.index)||0)+1,Y=O[H];if(Y&&(!(y==="alignment"?R!==_r(Y):!1)||j.every(I=>_r(I.placement)===R?I.overflows[0]>0:!0)))return{data:{index:H,overflows:j},reset:{placement:Y}};let T=(F=j.filter(D=>D.overflows[0]<=0).sort((D,I)=>D.overflows[1]-I.overflows[1])[0])==null?void 0:F.placement;if(!T)switch(x){case"bestFit":{var U;const D=(U=j.filter(I=>{if(_){const q=_r(I.placement);return q===R||q==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(q=>q>0).reduce((q,$)=>q+$,0)]).sort((I,q)=>I[1]-q[1])[0])==null?void 0:U[0];D&&(T=D);break}case"initialPlacement":T=d;break}if(s!==T)return{reset:{placement:T}}}return{}}}};function Xv(n,e){return{top:n.top-e.height,right:n.right-e.width,bottom:n.bottom-e.height,left:n.left-e.width}}function Qv(n){return ew.some(e=>n[e]>=0)}const mw=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(e){const{rects:r}=e,{strategy:i="referenceHidden",...s}=la(n,e);switch(i){case"referenceHidden":{const l=await bl(e,{...s,elementContext:"reference"}),u=Xv(l,r.reference);return{data:{referenceHiddenOffsets:u,referenceHidden:Qv(u)}}}case"escaped":{const l=await bl(e,{...s,altBoundary:!0}),u=Xv(l,r.floating);return{data:{escapedOffsets:u,escaped:Qv(u)}}}default:return{}}}}},R4=new Set(["left","top"]);async function pw(n,e){const{placement:r,platform:i,elements:s}=n,l=await(i.isRTL==null?void 0:i.isRTL(s.floating)),u=ca(r),d=Qs(r),f=_r(r)==="y",p=R4.has(u)?-1:1,m=l&&f?-1:1,y=la(e,n);let{mainAxis:v,crossAxis:x,alignmentAxis:A}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return d&&typeof A=="number"&&(x=d==="end"?A*-1:A),f?{x:x*m,y:v*p}:{x:v*p,y:x*m}}const gw=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var r,i;const{x:s,y:l,placement:u,middlewareData:d}=e,f=await pw(e,n);return u===((r=d.offset)==null?void 0:r.placement)&&(i=d.arrow)!=null&&i.alignmentOffset?{}:{x:s+f.x,y:l+f.y,data:{...f,placement:u}}}}},yw=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:l=!0,crossAxis:u=!1,limiter:d={fn:N=>{let{x:w,y:R}=N;return{x:w,y:R}}},...f}=la(n,e),p={x:r,y:i},m=await bl(e,f),y=_r(ca(s)),v=bp(y);let x=p[v],A=p[y];if(l){const N=v==="y"?"top":"left",w=v==="y"?"bottom":"right",R=x+m[N],L=x-m[w];x=wm(R,x,L)}if(u){const N=y==="y"?"top":"left",w=y==="y"?"bottom":"right",R=A+m[N],L=A-m[w];A=wm(R,A,L)}const S=d.fn({...e,[v]:x,[y]:A});return{...S,data:{x:S.x-r,y:S.y-i,enabled:{[v]:l,[y]:u}}}}}},vw=function(n){return n===void 0&&(n={}),{options:n,fn(e){const{x:r,y:i,placement:s,rects:l,middlewareData:u}=e,{offset:d=0,mainAxis:f=!0,crossAxis:p=!0}=la(n,e),m={x:r,y:i},y=_r(s),v=bp(y);let x=m[v],A=m[y];const S=la(d,e),N=typeof S=="number"?{mainAxis:S,crossAxis:0}:{mainAxis:0,crossAxis:0,...S};if(f){const L=v==="y"?"height":"width",z=l.reference[v]-l.floating[L]+N.mainAxis,G=l.reference[v]+l.reference[L]-N.mainAxis;x<z?x=z:x>G&&(x=G)}if(p){var w,R;const L=v==="y"?"width":"height",z=R4.has(ca(s)),G=l.reference[y]-l.floating[L]+(z&&((w=u.offset)==null?void 0:w[y])||0)+(z?0:N.crossAxis),_=l.reference[y]+l.reference[L]+(z?0:((R=u.offset)==null?void 0:R[y])||0)-(z?N.crossAxis:0);A<G?A=G:A>_&&(A=_)}return{[v]:x,[y]:A}}}},bw=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(e){var r,i;const{placement:s,rects:l,platform:u,elements:d}=e,{apply:f=()=>{},...p}=la(n,e),m=await bl(e,p),y=ca(s),v=Qs(s),x=_r(s)==="y",{width:A,height:S}=l.floating;let N,w;y==="top"||y==="bottom"?(N=y,w=v===(await(u.isRTL==null?void 0:u.isRTL(d.floating))?"start":"end")?"left":"right"):(w=y,N=v==="end"?"top":"bottom");const R=S-m.top-m.bottom,L=A-m.left-m.right,z=Ya(S-m[N],R),G=Ya(A-m[w],L),_=!e.middlewareData.shift;let O=z,E=G;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(E=L),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(O=R),_&&!v){const j=Ut(m.left,0),V=Ut(m.right,0),F=Ut(m.top,0),U=Ut(m.bottom,0);x?E=A-2*(j!==0||V!==0?j+V:Ut(m.left,m.right)):O=S-2*(F!==0||U!==0?F+U:Ut(m.top,m.bottom))}await f({...e,availableWidth:E,availableHeight:O});const k=await u.getDimensions(d.floating);return A!==k.width||S!==k.height?{reset:{rects:!0}}:{}}}};function ad(){return typeof window<"u"}function $s(n){return k4(n)?(n.nodeName||"").toLowerCase():"#document"}function qt(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Gr(n){var e;return(e=(k4(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function k4(n){return ad()?n instanceof Node||n instanceof qt(n).Node:!1}function Sr(n){return ad()?n instanceof Element||n instanceof qt(n).Element:!1}function Fr(n){return ad()?n instanceof HTMLElement||n instanceof qt(n).HTMLElement:!1}function $v(n){return!ad()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof qt(n).ShadowRoot}const xw=new Set(["inline","contents"]);function Ll(n){const{overflow:e,overflowX:r,overflowY:i,display:s}=Mr(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!xw.has(s)}const Sw=new Set(["table","td","th"]);function Mw(n){return Sw.has($s(n))}const Cw=[":popover-open",":modal"];function id(n){return Cw.some(e=>{try{return n.matches(e)}catch{return!1}})}const Aw=["transform","translate","scale","rotate","perspective"],ww=["transform","translate","scale","rotate","perspective","filter"],Tw=["paint","layout","strict","content"];function Mp(n){const e=Cp(),r=Sr(n)?Mr(n):n;return Aw.some(i=>r[i]?r[i]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||ww.some(i=>(r.willChange||"").includes(i))||Tw.some(i=>(r.contain||"").includes(i))}function Dw(n){let e=Za(n);for(;Fr(e)&&!Is(e);){if(Mp(e))return e;if(id(e))return null;e=Za(e)}return null}function Cp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ew=new Set(["html","body","#document"]);function Is(n){return Ew.has($s(n))}function Mr(n){return qt(n).getComputedStyle(n)}function sd(n){return Sr(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Za(n){if($s(n)==="html")return n;const e=n.assignedSlot||n.parentNode||$v(n)&&n.host||Gr(n);return $v(e)?e.host:e}function P4(n){const e=Za(n);return Is(e)?n.ownerDocument?n.ownerDocument.body:n.body:Fr(e)&&Ll(e)?e:P4(e)}function xl(n,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=P4(n),l=s===((i=n.ownerDocument)==null?void 0:i.body),u=qt(s);if(l){const d=Dm(u);return e.concat(u,u.visualViewport||[],Ll(s)?s:[],d&&r?xl(d):[])}return e.concat(s,xl(s,[],r))}function Dm(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function B4(n){const e=Mr(n);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Fr(n),l=s?n.offsetWidth:r,u=s?n.offsetHeight:i,d=Au(r)!==l||Au(i)!==u;return d&&(r=l,i=u),{width:r,height:i,$:d}}function Ap(n){return Sr(n)?n:n.contextElement}function Fs(n){const e=Ap(n);if(!Fr(e))return Or(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:l}=B4(e);let u=(l?Au(r.width):r.width)/i,d=(l?Au(r.height):r.height)/s;return(!u||!Number.isFinite(u))&&(u=1),(!d||!Number.isFinite(d))&&(d=1),{x:u,y:d}}const Nw=Or(0);function L4(n){const e=qt(n);return!Cp()||!e.visualViewport?Nw:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Rw(n,e,r){return e===void 0&&(e=!1),!r||e&&r!==qt(n)?!1:e}function Bi(n,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=n.getBoundingClientRect(),l=Ap(n);let u=Or(1);e&&(i?Sr(i)&&(u=Fs(i)):u=Fs(n));const d=Rw(l,r,i)?L4(l):Or(0);let f=(s.left+d.x)/u.x,p=(s.top+d.y)/u.y,m=s.width/u.x,y=s.height/u.y;if(l){const v=qt(l),x=i&&Sr(i)?qt(i):i;let A=v,S=Dm(A);for(;S&&i&&x!==A;){const N=Fs(S),w=S.getBoundingClientRect(),R=Mr(S),L=w.left+(S.clientLeft+parseFloat(R.paddingLeft))*N.x,z=w.top+(S.clientTop+parseFloat(R.paddingTop))*N.y;f*=N.x,p*=N.y,m*=N.x,y*=N.y,f+=L,p+=z,A=qt(S),S=Dm(A)}}return Tu({width:m,height:y,x:f,y:p})}function od(n,e){const r=sd(n).scrollLeft;return e?e.left+r:Bi(Gr(n)).left+r}function _4(n,e){const r=n.getBoundingClientRect(),i=r.left+e.scrollLeft-od(n,r),s=r.top+e.scrollTop;return{x:i,y:s}}function kw(n){let{elements:e,rect:r,offsetParent:i,strategy:s}=n;const l=s==="fixed",u=Gr(i),d=e?id(e.floating):!1;if(i===u||d&&l)return r;let f={scrollLeft:0,scrollTop:0},p=Or(1);const m=Or(0),y=Fr(i);if((y||!y&&!l)&&(($s(i)!=="body"||Ll(u))&&(f=sd(i)),Fr(i))){const x=Bi(i);p=Fs(i),m.x=x.x+i.clientLeft,m.y=x.y+i.clientTop}const v=u&&!y&&!l?_4(u,f):Or(0);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-f.scrollLeft*p.x+m.x+v.x,y:r.y*p.y-f.scrollTop*p.y+m.y+v.y}}function Pw(n){return Array.from(n.getClientRects())}function Bw(n){const e=Gr(n),r=sd(n),i=n.ownerDocument.body,s=Ut(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),l=Ut(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let u=-r.scrollLeft+od(n);const d=-r.scrollTop;return Mr(i).direction==="rtl"&&(u+=Ut(e.clientWidth,i.clientWidth)-s),{width:s,height:l,x:u,y:d}}const e2=25;function Lw(n,e){const r=qt(n),i=Gr(n),s=r.visualViewport;let l=i.clientWidth,u=i.clientHeight,d=0,f=0;if(s){l=s.width,u=s.height;const m=Cp();(!m||m&&e==="fixed")&&(d=s.offsetLeft,f=s.offsetTop)}const p=od(i);if(p<=0){const m=i.ownerDocument,y=m.body,v=getComputedStyle(y),x=m.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,A=Math.abs(i.clientWidth-y.clientWidth-x);A<=e2&&(l-=A)}else p<=e2&&(l+=p);return{width:l,height:u,x:d,y:f}}const _w=new Set(["absolute","fixed"]);function Ow(n,e){const r=Bi(n,!0,e==="fixed"),i=r.top+n.clientTop,s=r.left+n.clientLeft,l=Fr(n)?Fs(n):Or(1),u=n.clientWidth*l.x,d=n.clientHeight*l.y,f=s*l.x,p=i*l.y;return{width:u,height:d,x:f,y:p}}function n2(n,e,r){let i;if(e==="viewport")i=Lw(n,r);else if(e==="document")i=Bw(Gr(n));else if(Sr(e))i=Ow(e,r);else{const s=L4(n);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Tu(i)}function O4(n,e){const r=Za(n);return r===e||!Sr(r)||Is(r)?!1:Mr(r).position==="fixed"||O4(r,e)}function zw(n,e){const r=e.get(n);if(r)return r;let i=xl(n,[],!1).filter(d=>Sr(d)&&$s(d)!=="body"),s=null;const l=Mr(n).position==="fixed";let u=l?Za(n):n;for(;Sr(u)&&!Is(u);){const d=Mr(u),f=Mp(u);!f&&d.position==="fixed"&&(s=null),(l?!f&&!s:!f&&d.position==="static"&&!!s&&_w.has(s.position)||Ll(u)&&!f&&O4(n,u))?i=i.filter(m=>m!==u):s=d,u=Za(u)}return e.set(n,i),i}function jw(n){let{element:e,boundary:r,rootBoundary:i,strategy:s}=n;const u=[...r==="clippingAncestors"?id(e)?[]:zw(e,this._c):[].concat(r),i],d=u[0],f=u.reduce((p,m)=>{const y=n2(e,m,s);return p.top=Ut(y.top,p.top),p.right=Ya(y.right,p.right),p.bottom=Ya(y.bottom,p.bottom),p.left=Ut(y.left,p.left),p},n2(e,d,s));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function Vw(n){const{width:e,height:r}=B4(n);return{width:e,height:r}}function Fw(n,e,r){const i=Fr(e),s=Gr(e),l=r==="fixed",u=Bi(n,!0,l,e);let d={scrollLeft:0,scrollTop:0};const f=Or(0);function p(){f.x=od(s)}if(i||!i&&!l)if(($s(e)!=="body"||Ll(s))&&(d=sd(e)),i){const x=Bi(e,!0,l,e);f.x=x.x+e.clientLeft,f.y=x.y+e.clientTop}else s&&p();l&&!i&&s&&p();const m=s&&!i&&!l?_4(s,d):Or(0),y=u.left+d.scrollLeft-f.x-m.x,v=u.top+d.scrollTop-f.y-m.y;return{x:y,y:v,width:u.width,height:u.height}}function Jh(n){return Mr(n).position==="static"}function t2(n,e){if(!Fr(n)||Mr(n).position==="fixed")return null;if(e)return e(n);let r=n.offsetParent;return Gr(n)===r&&(r=r.ownerDocument.body),r}function z4(n,e){const r=qt(n);if(id(n))return r;if(!Fr(n)){let s=Za(n);for(;s&&!Is(s);){if(Sr(s)&&!Jh(s))return s;s=Za(s)}return r}let i=t2(n,e);for(;i&&Mw(i)&&Jh(i);)i=t2(i,e);return i&&Is(i)&&Jh(i)&&!Mp(i)?r:i||Dw(n)||r}const Gw=async function(n){const e=this.getOffsetParent||z4,r=this.getDimensions,i=await r(n.floating);return{reference:Fw(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Hw(n){return Mr(n).direction==="rtl"}const Iw={convertOffsetParentRelativeRectToViewportRelativeRect:kw,getDocumentElement:Gr,getClippingRect:jw,getOffsetParent:z4,getElementRects:Gw,getClientRects:Pw,getDimensions:Vw,getScale:Fs,isElement:Sr,isRTL:Hw};function j4(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function Uw(n,e){let r=null,i;const s=Gr(n);function l(){var d;clearTimeout(i),(d=r)==null||d.disconnect(),r=null}function u(d,f){d===void 0&&(d=!1),f===void 0&&(f=1),l();const p=n.getBoundingClientRect(),{left:m,top:y,width:v,height:x}=p;if(d||e(),!v||!x)return;const A=ru(y),S=ru(s.clientWidth-(m+v)),N=ru(s.clientHeight-(y+x)),w=ru(m),L={rootMargin:-A+"px "+-S+"px "+-N+"px "+-w+"px",threshold:Ut(0,Ya(1,f))||1};let z=!0;function G(_){const O=_[0].intersectionRatio;if(O!==f){if(!z)return u();O?u(!1,O):i=setTimeout(()=>{u(!1,1e-7)},1e3)}O===1&&!j4(p,n.getBoundingClientRect())&&u(),z=!1}try{r=new IntersectionObserver(G,{...L,root:s.ownerDocument})}catch{r=new IntersectionObserver(G,L)}r.observe(n)}return u(!0),l}function Jw(n,e,r,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:f=!1}=i,p=Ap(n),m=s||l?[...p?xl(p):[],...xl(e)]:[];m.forEach(w=>{s&&w.addEventListener("scroll",r,{passive:!0}),l&&w.addEventListener("resize",r)});const y=p&&d?Uw(p,r):null;let v=-1,x=null;u&&(x=new ResizeObserver(w=>{let[R]=w;R&&R.target===p&&x&&(x.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var L;(L=x)==null||L.observe(e)})),r()}),p&&!f&&x.observe(p),x.observe(e));let A,S=f?Bi(n):null;f&&N();function N(){const w=Bi(n);S&&!j4(S,w)&&r(),S=w,A=requestAnimationFrame(N)}return r(),()=>{var w;m.forEach(R=>{s&&R.removeEventListener("scroll",r),l&&R.removeEventListener("resize",r)}),y?.(),(w=x)==null||w.disconnect(),x=null,f&&cancelAnimationFrame(A)}}const qw=gw,Kw=yw,Yw=hw,Zw=bw,Ww=mw,r2=fw,Xw=vw,Qw=(n,e,r)=>{const i=new Map,s={platform:Iw,...r},l={...s.platform,_c:i};return dw(n,e,{...s,platform:l})};var $w=typeof document<"u",e8=function(){},pu=$w?C.useLayoutEffect:e8;function Du(n,e){if(n===e)return!0;if(typeof n!=typeof e)return!1;if(typeof n=="function"&&n.toString()===e.toString())return!0;let r,i,s;if(n&&e&&typeof n=="object"){if(Array.isArray(n)){if(r=n.length,r!==e.length)return!1;for(i=r;i--!==0;)if(!Du(n[i],e[i]))return!1;return!0}if(s=Object.keys(n),r=s.length,r!==Object.keys(e).length)return!1;for(i=r;i--!==0;)if(!{}.hasOwnProperty.call(e,s[i]))return!1;for(i=r;i--!==0;){const l=s[i];if(!(l==="_owner"&&n.$$typeof)&&!Du(n[l],e[l]))return!1}return!0}return n!==n&&e!==e}function V4(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function a2(n,e){const r=V4(n);return Math.round(e*r)/r}function qh(n){const e=C.useRef(n);return pu(()=>{e.current=n}),e}function n8(n){n===void 0&&(n={});const{placement:e="bottom",strategy:r="absolute",middleware:i=[],platform:s,elements:{reference:l,floating:u}={},transform:d=!0,whileElementsMounted:f,open:p}=n,[m,y]=C.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[v,x]=C.useState(i);Du(v,i)||x(i);const[A,S]=C.useState(null),[N,w]=C.useState(null),R=C.useCallback(I=>{I!==_.current&&(_.current=I,S(I))},[]),L=C.useCallback(I=>{I!==O.current&&(O.current=I,w(I))},[]),z=l||A,G=u||N,_=C.useRef(null),O=C.useRef(null),E=C.useRef(m),k=f!=null,j=qh(f),V=qh(s),F=qh(p),U=C.useCallback(()=>{if(!_.current||!O.current)return;const I={placement:e,strategy:r,middleware:v};V.current&&(I.platform=V.current),Qw(_.current,O.current,I).then(q=>{const $={...q,isPositioned:F.current!==!1};H.current&&!Du(E.current,$)&&(E.current=$,Pl.flushSync(()=>{y($)}))})},[v,e,r,V,F]);pu(()=>{p===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,y(I=>({...I,isPositioned:!1})))},[p]);const H=C.useRef(!1);pu(()=>(H.current=!0,()=>{H.current=!1}),[]),pu(()=>{if(z&&(_.current=z),G&&(O.current=G),z&&G){if(j.current)return j.current(z,G,U);U()}},[z,G,U,j,k]);const Y=C.useMemo(()=>({reference:_,floating:O,setReference:R,setFloating:L}),[R,L]),T=C.useMemo(()=>({reference:z,floating:G}),[z,G]),D=C.useMemo(()=>{const I={position:r,left:0,top:0};if(!T.floating)return I;const q=a2(T.floating,m.x),$=a2(T.floating,m.y);return d?{...I,transform:"translate("+q+"px, "+$+"px)",...V4(T.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:q,top:$}},[r,d,T.floating,m.x,m.y]);return C.useMemo(()=>({...m,update:U,refs:Y,elements:T,floatingStyles:D}),[m,U,Y,T,D])}const t8=n=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:n,fn(r){const{element:i,padding:s}=typeof n=="function"?n(r):n;return i&&e(i)?i.current!=null?r2({element:i.current,padding:s}).fn(r):{}:i?r2({element:i,padding:s}).fn(r):{}}}},r8=(n,e)=>({...qw(n),options:[n,e]}),a8=(n,e)=>({...Kw(n),options:[n,e]}),i8=(n,e)=>({...Xw(n),options:[n,e]}),s8=(n,e)=>({...Yw(n),options:[n,e]}),o8=(n,e)=>({...Zw(n),options:[n,e]}),l8=(n,e)=>({...Ww(n),options:[n,e]}),c8=(n,e)=>({...t8(n),options:[n,e]});var u8="Arrow",F4=C.forwardRef((n,e)=>{const{children:r,width:i=10,height:s=5,...l}=n;return b.jsx(mn.svg,{...l,ref:e,width:i,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?r:b.jsx("polygon",{points:"0,0 30,0 15,10"})})});F4.displayName=u8;var d8=F4;function G4(n){const[e,r]=C.useState(void 0);return St(()=>{if(n){r({width:n.offsetWidth,height:n.offsetHeight});const i=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const l=s[0];let u,d;if("borderBoxSize"in l){const f=l.borderBoxSize,p=Array.isArray(f)?f[0]:f;u=p.inlineSize,d=p.blockSize}else u=n.offsetWidth,d=n.offsetHeight;r({width:u,height:d})});return i.observe(n,{box:"border-box"}),()=>i.unobserve(n)}else r(void 0)},[n]),e}var wp="Popper",[H4,I4]=Bl(wp),[f8,U4]=H4(wp),J4=n=>{const{__scopePopper:e,children:r}=n,[i,s]=C.useState(null);return b.jsx(f8,{scope:e,anchor:i,onAnchorChange:s,children:r})};J4.displayName=wp;var q4="PopperAnchor",K4=C.forwardRef((n,e)=>{const{__scopePopper:r,virtualRef:i,...s}=n,l=U4(q4,r),u=C.useRef(null),d=Ln(e,u),f=C.useRef(null);return C.useEffect(()=>{const p=f.current;f.current=i?.current||u.current,p!==f.current&&l.onAnchorChange(f.current)}),i?null:b.jsx(mn.div,{...s,ref:d})});K4.displayName=q4;var Tp="PopperContent",[h8,m8]=H4(Tp),Y4=C.forwardRef((n,e)=>{const{__scopePopper:r,side:i="bottom",sideOffset:s=0,align:l="center",alignOffset:u=0,arrowPadding:d=0,avoidCollisions:f=!0,collisionBoundary:p=[],collisionPadding:m=0,sticky:y="partial",hideWhenDetached:v=!1,updatePositionStrategy:x="optimized",onPlaced:A,...S}=n,N=U4(Tp,r),[w,R]=C.useState(null),L=Ln(e,ce=>R(ce)),[z,G]=C.useState(null),_=G4(z),O=_?.width??0,E=_?.height??0,k=i+(l!=="center"?"-"+l:""),j=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},V=Array.isArray(p)?p:[p],F=V.length>0,U={padding:j,boundary:V.filter(g8),altBoundary:F},{refs:H,floatingStyles:Y,placement:T,isPositioned:D,middlewareData:I}=n8({strategy:"fixed",placement:k,whileElementsMounted:(...ce)=>Jw(...ce,{animationFrame:x==="always"}),elements:{reference:N.anchor},middleware:[r8({mainAxis:s+E,alignmentAxis:u}),f&&a8({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?i8():void 0,...U}),f&&s8({...U}),o8({...U,apply:({elements:ce,rects:Se,availableWidth:ge,availableHeight:oe})=>{const{width:fe,height:xe}=Se.reference,_e=ce.floating.style;_e.setProperty("--radix-popper-available-width",`${ge}px`),_e.setProperty("--radix-popper-available-height",`${oe}px`),_e.setProperty("--radix-popper-anchor-width",`${fe}px`),_e.setProperty("--radix-popper-anchor-height",`${xe}px`)}}),z&&c8({element:z,padding:d}),y8({arrowWidth:O,arrowHeight:E}),v&&l8({strategy:"referenceHidden",...U})]}),[q,$]=X4(T),P=Pi(A);St(()=>{D&&P?.()},[D,P]);const Z=I.arrow?.x,te=I.arrow?.y,X=I.arrow?.centerOffset!==0,[Q,ye]=C.useState();return St(()=>{w&&ye(window.getComputedStyle(w).zIndex)},[w]),b.jsx("div",{ref:H.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:D?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Q,"--radix-popper-transform-origin":[I.transformOrigin?.x,I.transformOrigin?.y].join(" "),...I.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:b.jsx(h8,{scope:r,placedSide:q,onArrowChange:G,arrowX:Z,arrowY:te,shouldHideArrow:X,children:b.jsx(mn.div,{"data-side":q,"data-align":$,...S,ref:L,style:{...S.style,animation:D?void 0:"none"}})})})});Y4.displayName=Tp;var Z4="PopperArrow",p8={top:"bottom",right:"left",bottom:"top",left:"right"},W4=C.forwardRef(function(e,r){const{__scopePopper:i,...s}=e,l=m8(Z4,i),u=p8[l.placedSide];return b.jsx("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[u]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0},children:b.jsx(d8,{...s,ref:r,style:{...s.style,display:"block"}})})});W4.displayName=Z4;function g8(n){return n!==null}var y8=n=>({name:"transformOrigin",options:n,fn(e){const{placement:r,rects:i,middlewareData:s}=e,u=s.arrow?.centerOffset!==0,d=u?0:n.arrowWidth,f=u?0:n.arrowHeight,[p,m]=X4(r),y={start:"0%",center:"50%",end:"100%"}[m],v=(s.arrow?.x??0)+d/2,x=(s.arrow?.y??0)+f/2;let A="",S="";return p==="bottom"?(A=u?y:`${v}px`,S=`${-f}px`):p==="top"?(A=u?y:`${v}px`,S=`${i.floating.height+f}px`):p==="right"?(A=`${-f}px`,S=u?y:`${x}px`):p==="left"&&(A=`${i.floating.width+f}px`,S=u?y:`${x}px`),{data:{x:A,y:S}}}});function X4(n){const[e,r="center"]=n.split("-");return[e,r]}var v8=J4,b8=K4,x8=Y4,S8=W4,M8="Portal",Dp=C.forwardRef((n,e)=>{const{container:r,...i}=n,[s,l]=C.useState(!1);St(()=>l(!0),[]);const u=r||s&&globalThis?.document?.body;return u?v6.createPortal(b.jsx(mn.div,{...i,ref:e}),u):null});Dp.displayName=M8;function C8(n){const e=A8(n),r=C.forwardRef((i,s)=>{const{children:l,...u}=i,d=C.Children.toArray(l),f=d.find(T8);if(f){const p=f.props.children,m=d.map(y=>y===f?C.Children.count(p)>1?C.Children.only(null):C.isValidElement(p)?p.props.children:null:y);return b.jsx(e,{...u,ref:s,children:C.isValidElement(p)?C.cloneElement(p,void 0,m):null})}return b.jsx(e,{...u,ref:s,children:l})});return r.displayName=`${n}.Slot`,r}function A8(n){const e=C.forwardRef((r,i)=>{const{children:s,...l}=r;if(C.isValidElement(s)){const u=E8(s),d=D8(l,s.props);return s.type!==C.Fragment&&(d.ref=i?Xs(i,u):u),C.cloneElement(s,d)}return C.Children.count(s)>1?C.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var w8=Symbol("radix.slottable");function T8(n){return C.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===w8}function D8(n,e){const r={...e};for(const i in e){const s=n[i],l=e[i];/^on[A-Z]/.test(i)?s&&l?r[i]=(...d)=>{const f=l(...d);return s(...d),f}:s&&(r[i]=s):i==="style"?r[i]={...s,...l}:i==="className"&&(r[i]=[s,l].filter(Boolean).join(" "))}return{...n,...r}}function E8(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var N8=pp[" useInsertionEffect ".trim().toString()]||St;function Eu({prop:n,defaultProp:e,onChange:r=()=>{},caller:i}){const[s,l,u]=R8({defaultProp:e,onChange:r}),d=n!==void 0,f=d?n:s;{const m=C.useRef(n!==void 0);C.useEffect(()=>{const y=m.current;y!==d&&console.warn(`${i} is changing from ${y?"controlled":"uncontrolled"} to ${d?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=d},[d,i])}const p=C.useCallback(m=>{if(d){const y=k8(m)?m(n):m;y!==n&&u.current?.(y)}else l(m)},[d,n,l,u]);return[f,p]}function R8({defaultProp:n,onChange:e}){const[r,i]=C.useState(n),s=C.useRef(r),l=C.useRef(e);return N8(()=>{l.current=e},[e]),C.useEffect(()=>{s.current!==r&&(l.current?.(r),s.current=r)},[r,s]),[r,i,l]}function k8(n){return typeof n=="function"}function Q4(n){const e=C.useRef({value:n,previous:n});return C.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}var $4=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),P8="VisuallyHidden",B8=C.forwardRef((n,e)=>b.jsx(mn.span,{...n,ref:e,style:{...$4,...n.style}}));B8.displayName=P8;var L8=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},Cs=new WeakMap,au=new WeakMap,iu={},Kh=0,e3=function(n){return n&&(n.host||e3(n.parentNode))},_8=function(n,e){return e.map(function(r){if(n.contains(r))return r;var i=e3(r);return i&&n.contains(i)?i:(console.error("aria-hidden",r,"in not contained inside",n,". Doing nothing"),null)}).filter(function(r){return!!r})},O8=function(n,e,r,i){var s=_8(e,Array.isArray(n)?n:[n]);iu[r]||(iu[r]=new WeakMap);var l=iu[r],u=[],d=new Set,f=new Set(s),p=function(y){!y||d.has(y)||(d.add(y),p(y.parentNode))};s.forEach(p);var m=function(y){!y||f.has(y)||Array.prototype.forEach.call(y.children,function(v){if(d.has(v))m(v);else try{var x=v.getAttribute(i),A=x!==null&&x!=="false",S=(Cs.get(v)||0)+1,N=(l.get(v)||0)+1;Cs.set(v,S),l.set(v,N),u.push(v),S===1&&A&&au.set(v,!0),N===1&&v.setAttribute(r,"true"),A||v.setAttribute(i,"true")}catch(w){console.error("aria-hidden: cannot operate on ",v,w)}})};return m(e),d.clear(),Kh++,function(){u.forEach(function(y){var v=Cs.get(y)-1,x=l.get(y)-1;Cs.set(y,v),l.set(y,x),v||(au.has(y)||y.removeAttribute(i),au.delete(y)),x||y.removeAttribute(r)}),Kh--,Kh||(Cs=new WeakMap,Cs=new WeakMap,au=new WeakMap,iu={})}},n3=function(n,e,r){r===void 0&&(r="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),s=L8(n);return s?(i.push.apply(i,Array.from(s.querySelectorAll("[aria-live], script"))),O8(i,s,r,"aria-hidden")):function(){return null}},Pr=function(){return Pr=Object.assign||function(e){for(var r,i=1,s=arguments.length;i<s;i++){r=arguments[i];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},Pr.apply(this,arguments)};function t3(n,e){var r={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(r[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(r[i[s]]=n[i[s]]);return r}function z8(n,e,r){if(r||arguments.length===2)for(var i=0,s=e.length,l;i<s;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var gu="right-scroll-bar-position",yu="width-before-scroll-bar",j8="with-scroll-bars-hidden",V8="--removed-body-scroll-bar-size";function Yh(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function F8(n,e){var r=C.useState(function(){return{value:n,callback:e,facade:{get current(){return r.value},set current(i){var s=r.value;s!==i&&(r.value=i,r.callback(i,s))}}}})[0];return r.callback=e,r.facade}var G8=typeof window<"u"?C.useLayoutEffect:C.useEffect,i2=new WeakMap;function H8(n,e){var r=F8(null,function(i){return n.forEach(function(s){return Yh(s,i)})});return G8(function(){var i=i2.get(r);if(i){var s=new Set(i),l=new Set(n),u=r.current;s.forEach(function(d){l.has(d)||Yh(d,null)}),l.forEach(function(d){s.has(d)||Yh(d,u)})}i2.set(r,n)},[n]),r}function I8(n){return n}function U8(n,e){e===void 0&&(e=I8);var r=[],i=!1,s={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:n},useMedium:function(l){var u=e(l,i);return r.push(u),function(){r=r.filter(function(d){return d!==u})}},assignSyncMedium:function(l){for(i=!0;r.length;){var u=r;r=[],u.forEach(l)}r={push:function(d){return l(d)},filter:function(){return r}}},assignMedium:function(l){i=!0;var u=[];if(r.length){var d=r;r=[],d.forEach(l),u=r}var f=function(){var m=u;u=[],m.forEach(l)},p=function(){return Promise.resolve().then(f)};p(),r={push:function(m){u.push(m),p()},filter:function(m){return u=u.filter(m),r}}}};return s}function J8(n){n===void 0&&(n={});var e=U8(null);return e.options=Pr({async:!0,ssr:!1},n),e}var r3=function(n){var e=n.sideCar,r=t3(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return C.createElement(i,Pr({},r))};r3.isSideCarExport=!0;function q8(n,e){return n.useMedium(e),r3}var a3=J8(),Zh=function(){},ld=C.forwardRef(function(n,e){var r=C.useRef(null),i=C.useState({onScrollCapture:Zh,onWheelCapture:Zh,onTouchMoveCapture:Zh}),s=i[0],l=i[1],u=n.forwardProps,d=n.children,f=n.className,p=n.removeScrollBar,m=n.enabled,y=n.shards,v=n.sideCar,x=n.noRelative,A=n.noIsolation,S=n.inert,N=n.allowPinchZoom,w=n.as,R=w===void 0?"div":w,L=n.gapMode,z=t3(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),G=v,_=H8([r,e]),O=Pr(Pr({},z),s);return C.createElement(C.Fragment,null,m&&C.createElement(G,{sideCar:a3,removeScrollBar:p,shards:y,noRelative:x,noIsolation:A,inert:S,setCallbacks:l,allowPinchZoom:!!N,lockRef:r,gapMode:L}),u?C.cloneElement(C.Children.only(d),Pr(Pr({},O),{ref:_})):C.createElement(R,Pr({},O,{className:f,ref:_}),d))});ld.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ld.classNames={fullWidth:yu,zeroRight:gu};var K8=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Y8(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=K8();return e&&n.setAttribute("nonce",e),n}function Z8(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function W8(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var X8=function(){var n=0,e=null;return{add:function(r){n==0&&(e=Y8())&&(Z8(e,r),W8(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},Q8=function(){var n=X8();return function(e,r){C.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&r])}},i3=function(){var n=Q8(),e=function(r){var i=r.styles,s=r.dynamic;return n(i,s),null};return e},$8={left:0,top:0,right:0,gap:0},Wh=function(n){return parseInt(n||"",10)||0},e7=function(n){var e=window.getComputedStyle(document.body),r=e[n==="padding"?"paddingLeft":"marginLeft"],i=e[n==="padding"?"paddingTop":"marginTop"],s=e[n==="padding"?"paddingRight":"marginRight"];return[Wh(r),Wh(i),Wh(s)]},n7=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return $8;var e=e7(n),r=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-r+e[2]-e[0])}},t7=i3(),Gs="data-scroll-locked",r7=function(n,e,r,i){var s=n.left,l=n.top,u=n.right,d=n.gap;return r===void 0&&(r="margin"),`
  .`.concat(j8,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(d,"px ").concat(i,`;
  }
  body[`).concat(Gs,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),r==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(l,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d,"px ").concat(i,`;
    `),r==="padding"&&"padding-right: ".concat(d,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(gu,` {
    right: `).concat(d,"px ").concat(i,`;
  }
  
  .`).concat(yu,` {
    margin-right: `).concat(d,"px ").concat(i,`;
  }
  
  .`).concat(gu," .").concat(gu,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(yu," .").concat(yu,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(Gs,`] {
    `).concat(V8,": ").concat(d,`px;
  }
`)},s2=function(){var n=parseInt(document.body.getAttribute(Gs)||"0",10);return isFinite(n)?n:0},a7=function(){C.useEffect(function(){return document.body.setAttribute(Gs,(s2()+1).toString()),function(){var n=s2()-1;n<=0?document.body.removeAttribute(Gs):document.body.setAttribute(Gs,n.toString())}},[])},i7=function(n){var e=n.noRelative,r=n.noImportant,i=n.gapMode,s=i===void 0?"margin":i;a7();var l=C.useMemo(function(){return n7(s)},[s]);return C.createElement(t7,{styles:r7(l,!e,s,r?"":"!important")})},Em=!1;if(typeof window<"u")try{var su=Object.defineProperty({},"passive",{get:function(){return Em=!0,!0}});window.addEventListener("test",su,su),window.removeEventListener("test",su,su)}catch{Em=!1}var As=Em?{passive:!1}:!1,s7=function(n){return n.tagName==="TEXTAREA"},s3=function(n,e){if(!(n instanceof Element))return!1;var r=window.getComputedStyle(n);return r[e]!=="hidden"&&!(r.overflowY===r.overflowX&&!s7(n)&&r[e]==="visible")},o7=function(n){return s3(n,"overflowY")},l7=function(n){return s3(n,"overflowX")},o2=function(n,e){var r=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var s=o3(n,i);if(s){var l=l3(n,i),u=l[1],d=l[2];if(u>d)return!0}i=i.parentNode}while(i&&i!==r.body);return!1},c7=function(n){var e=n.scrollTop,r=n.scrollHeight,i=n.clientHeight;return[e,r,i]},u7=function(n){var e=n.scrollLeft,r=n.scrollWidth,i=n.clientWidth;return[e,r,i]},o3=function(n,e){return n==="v"?o7(e):l7(e)},l3=function(n,e){return n==="v"?c7(e):u7(e)},d7=function(n,e){return n==="h"&&e==="rtl"?-1:1},f7=function(n,e,r,i,s){var l=d7(n,window.getComputedStyle(e).direction),u=l*i,d=r.target,f=e.contains(d),p=!1,m=u>0,y=0,v=0;do{if(!d)break;var x=l3(n,d),A=x[0],S=x[1],N=x[2],w=S-N-l*A;(A||w)&&o3(n,d)&&(y+=w,v+=A);var R=d.parentNode;d=R&&R.nodeType===Node.DOCUMENT_FRAGMENT_NODE?R.host:R}while(!f&&d!==document.body||f&&(e.contains(d)||e===d));return(m&&Math.abs(y)<1||!m&&Math.abs(v)<1)&&(p=!0),p},ou=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},l2=function(n){return[n.deltaX,n.deltaY]},c2=function(n){return n&&"current"in n?n.current:n},h7=function(n,e){return n[0]===e[0]&&n[1]===e[1]},m7=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},p7=0,ws=[];function g7(n){var e=C.useRef([]),r=C.useRef([0,0]),i=C.useRef(),s=C.useState(p7++)[0],l=C.useState(i3)[0],u=C.useRef(n);C.useEffect(function(){u.current=n},[n]),C.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(s));var S=z8([n.lockRef.current],(n.shards||[]).map(c2),!0).filter(Boolean);return S.forEach(function(N){return N.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),S.forEach(function(N){return N.classList.remove("allow-interactivity-".concat(s))})}}},[n.inert,n.lockRef.current,n.shards]);var d=C.useCallback(function(S,N){if("touches"in S&&S.touches.length===2||S.type==="wheel"&&S.ctrlKey)return!u.current.allowPinchZoom;var w=ou(S),R=r.current,L="deltaX"in S?S.deltaX:R[0]-w[0],z="deltaY"in S?S.deltaY:R[1]-w[1],G,_=S.target,O=Math.abs(L)>Math.abs(z)?"h":"v";if("touches"in S&&O==="h"&&_.type==="range")return!1;var E=window.getSelection(),k=E&&E.anchorNode,j=k?k===_||k.contains(_):!1;if(j)return!1;var V=o2(O,_);if(!V)return!0;if(V?G=O:(G=O==="v"?"h":"v",V=o2(O,_)),!V)return!1;if(!i.current&&"changedTouches"in S&&(L||z)&&(i.current=G),!G)return!0;var F=i.current||G;return f7(F,N,S,F==="h"?L:z)},[]),f=C.useCallback(function(S){var N=S;if(!(!ws.length||ws[ws.length-1]!==l)){var w="deltaY"in N?l2(N):ou(N),R=e.current.filter(function(G){return G.name===N.type&&(G.target===N.target||N.target===G.shadowParent)&&h7(G.delta,w)})[0];if(R&&R.should){N.cancelable&&N.preventDefault();return}if(!R){var L=(u.current.shards||[]).map(c2).filter(Boolean).filter(function(G){return G.contains(N.target)}),z=L.length>0?d(N,L[0]):!u.current.noIsolation;z&&N.cancelable&&N.preventDefault()}}},[]),p=C.useCallback(function(S,N,w,R){var L={name:S,delta:N,target:w,should:R,shadowParent:y7(w)};e.current.push(L),setTimeout(function(){e.current=e.current.filter(function(z){return z!==L})},1)},[]),m=C.useCallback(function(S){r.current=ou(S),i.current=void 0},[]),y=C.useCallback(function(S){p(S.type,l2(S),S.target,d(S,n.lockRef.current))},[]),v=C.useCallback(function(S){p(S.type,ou(S),S.target,d(S,n.lockRef.current))},[]);C.useEffect(function(){return ws.push(l),n.setCallbacks({onScrollCapture:y,onWheelCapture:y,onTouchMoveCapture:v}),document.addEventListener("wheel",f,As),document.addEventListener("touchmove",f,As),document.addEventListener("touchstart",m,As),function(){ws=ws.filter(function(S){return S!==l}),document.removeEventListener("wheel",f,As),document.removeEventListener("touchmove",f,As),document.removeEventListener("touchstart",m,As)}},[]);var x=n.removeScrollBar,A=n.inert;return C.createElement(C.Fragment,null,A?C.createElement(l,{styles:m7(s)}):null,x?C.createElement(i7,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function y7(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const v7=q8(a3,g7);var Ep=C.forwardRef(function(n,e){return C.createElement(ld,Pr({},n,{ref:e,sideCar:v7}))});Ep.classNames=ld.classNames;var b7=[" ","Enter","ArrowUp","ArrowDown"],x7=[" ","Enter"],Li="Select",[cd,ud,S7]=T6(Li),[eo]=Bl(Li,[S7,I4]),dd=I4(),[M7,ni]=eo(Li),[C7,A7]=eo(Li),c3=n=>{const{__scopeSelect:e,children:r,open:i,defaultOpen:s,onOpenChange:l,value:u,defaultValue:d,onValueChange:f,dir:p,name:m,autoComplete:y,disabled:v,required:x,form:A}=n,S=dd(e),[N,w]=C.useState(null),[R,L]=C.useState(null),[z,G]=C.useState(!1),_=E6(p),[O,E]=Eu({prop:i,defaultProp:s??!1,onChange:l,caller:Li}),[k,j]=Eu({prop:u,defaultProp:d,onChange:f,caller:Li}),V=C.useRef(null),F=N?A||!!N.closest("form"):!0,[U,H]=C.useState(new Set),Y=Array.from(U).map(T=>T.props.value).join(";");return b.jsx(v8,{...S,children:b.jsxs(M7,{required:x,scope:e,trigger:N,onTriggerChange:w,valueNode:R,onValueNodeChange:L,valueNodeHasChildren:z,onValueNodeHasChildrenChange:G,contentId:Vs(),value:k,onValueChange:j,open:O,onOpenChange:E,dir:_,triggerPointerDownPosRef:V,disabled:v,children:[b.jsx(cd.Provider,{scope:e,children:b.jsx(C7,{scope:n.__scopeSelect,onNativeOptionAdd:C.useCallback(T=>{H(D=>new Set(D).add(T))},[]),onNativeOptionRemove:C.useCallback(T=>{H(D=>{const I=new Set(D);return I.delete(T),I})},[]),children:r})}),F?b.jsxs(k3,{"aria-hidden":!0,required:x,tabIndex:-1,name:m,autoComplete:y,value:k,onChange:T=>j(T.target.value),disabled:v,form:A,children:[k===void 0?b.jsx("option",{value:""}):null,Array.from(U)]},Y):null]})})};c3.displayName=Li;var u3="SelectTrigger",d3=C.forwardRef((n,e)=>{const{__scopeSelect:r,disabled:i=!1,...s}=n,l=dd(r),u=ni(u3,r),d=u.disabled||i,f=Ln(e,u.onTriggerChange),p=ud(r),m=C.useRef("touch"),[y,v,x]=B3(S=>{const N=p().filter(L=>!L.disabled),w=N.find(L=>L.value===u.value),R=L3(N,S,w);R!==void 0&&u.onValueChange(R.value)}),A=S=>{d||(u.onOpenChange(!0),x()),S&&(u.triggerPointerDownPosRef.current={x:Math.round(S.pageX),y:Math.round(S.pageY)})};return b.jsx(b8,{asChild:!0,...l,children:b.jsx(mn.button,{type:"button",role:"combobox","aria-controls":u.contentId,"aria-expanded":u.open,"aria-required":u.required,"aria-autocomplete":"none",dir:u.dir,"data-state":u.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":P3(u.value)?"":void 0,...s,ref:f,onClick:Sn(s.onClick,S=>{S.currentTarget.focus(),m.current!=="mouse"&&A(S)}),onPointerDown:Sn(s.onPointerDown,S=>{m.current=S.pointerType;const N=S.target;N.hasPointerCapture(S.pointerId)&&N.releasePointerCapture(S.pointerId),S.button===0&&S.ctrlKey===!1&&S.pointerType==="mouse"&&(A(S),S.preventDefault())}),onKeyDown:Sn(s.onKeyDown,S=>{const N=y.current!=="";!(S.ctrlKey||S.altKey||S.metaKey)&&S.key.length===1&&v(S.key),!(N&&S.key===" ")&&b7.includes(S.key)&&(A(),S.preventDefault())})})})});d3.displayName=u3;var f3="SelectValue",h3=C.forwardRef((n,e)=>{const{__scopeSelect:r,className:i,style:s,children:l,placeholder:u="",...d}=n,f=ni(f3,r),{onValueNodeHasChildrenChange:p}=f,m=l!==void 0,y=Ln(e,f.onValueNodeChange);return St(()=>{p(m)},[p,m]),b.jsx(mn.span,{...d,ref:y,style:{pointerEvents:"none"},children:P3(f.value)?b.jsx(b.Fragment,{children:u}):l})});h3.displayName=f3;var w7="SelectIcon",m3=C.forwardRef((n,e)=>{const{__scopeSelect:r,children:i,...s}=n;return b.jsx(mn.span,{"aria-hidden":!0,...s,ref:e,children:i||"▼"})});m3.displayName=w7;var T7="SelectPortal",p3=n=>b.jsx(Dp,{asChild:!0,...n});p3.displayName=T7;var _i="SelectContent",g3=C.forwardRef((n,e)=>{const r=ni(_i,n.__scopeSelect),[i,s]=C.useState();if(St(()=>{s(new DocumentFragment)},[]),!r.open){const l=i;return l?Pl.createPortal(b.jsx(y3,{scope:n.__scopeSelect,children:b.jsx(cd.Slot,{scope:n.__scopeSelect,children:b.jsx("div",{children:n.children})})}),l):null}return b.jsx(v3,{...n,ref:e})});g3.displayName=_i;var yr=10,[y3,ti]=eo(_i),D7="SelectContentImpl",E7=C8("SelectContent.RemoveScroll"),v3=C.forwardRef((n,e)=>{const{__scopeSelect:r,position:i="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:l,onPointerDownOutside:u,side:d,sideOffset:f,align:p,alignOffset:m,arrowPadding:y,collisionBoundary:v,collisionPadding:x,sticky:A,hideWhenDetached:S,avoidCollisions:N,...w}=n,R=ni(_i,r),[L,z]=C.useState(null),[G,_]=C.useState(null),O=Ln(e,ce=>z(ce)),[E,k]=C.useState(null),[j,V]=C.useState(null),F=ud(r),[U,H]=C.useState(!1),Y=C.useRef(!1);C.useEffect(()=>{if(L)return n3(L)},[L]),D4();const T=C.useCallback(ce=>{const[Se,...ge]=F().map(xe=>xe.ref.current),[oe]=ge.slice(-1),fe=document.activeElement;for(const xe of ce)if(xe===fe||(xe?.scrollIntoView({block:"nearest"}),xe===Se&&G&&(G.scrollTop=0),xe===oe&&G&&(G.scrollTop=G.scrollHeight),xe?.focus(),document.activeElement!==fe))return},[F,G]),D=C.useCallback(()=>T([E,L]),[T,E,L]);C.useEffect(()=>{U&&D()},[U,D]);const{onOpenChange:I,triggerPointerDownPosRef:q}=R;C.useEffect(()=>{if(L){let ce={x:0,y:0};const Se=oe=>{ce={x:Math.abs(Math.round(oe.pageX)-(q.current?.x??0)),y:Math.abs(Math.round(oe.pageY)-(q.current?.y??0))}},ge=oe=>{ce.x<=10&&ce.y<=10?oe.preventDefault():L.contains(oe.target)||I(!1),document.removeEventListener("pointermove",Se),q.current=null};return q.current!==null&&(document.addEventListener("pointermove",Se),document.addEventListener("pointerup",ge,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",Se),document.removeEventListener("pointerup",ge,{capture:!0})}}},[L,I,q]),C.useEffect(()=>{const ce=()=>I(!1);return window.addEventListener("blur",ce),window.addEventListener("resize",ce),()=>{window.removeEventListener("blur",ce),window.removeEventListener("resize",ce)}},[I]);const[$,P]=B3(ce=>{const Se=F().filter(fe=>!fe.disabled),ge=Se.find(fe=>fe.ref.current===document.activeElement),oe=L3(Se,ce,ge);oe&&setTimeout(()=>oe.ref.current.focus())}),Z=C.useCallback((ce,Se,ge)=>{const oe=!Y.current&&!ge;(R.value!==void 0&&R.value===Se||oe)&&(k(ce),oe&&(Y.current=!0))},[R.value]),te=C.useCallback(()=>L?.focus(),[L]),X=C.useCallback((ce,Se,ge)=>{const oe=!Y.current&&!ge;(R.value!==void 0&&R.value===Se||oe)&&V(ce)},[R.value]),Q=i==="popper"?Nm:b3,ye=Q===Nm?{side:d,sideOffset:f,align:p,alignOffset:m,arrowPadding:y,collisionBoundary:v,collisionPadding:x,sticky:A,hideWhenDetached:S,avoidCollisions:N}:{};return b.jsx(y3,{scope:r,content:L,viewport:G,onViewportChange:_,itemRefCallback:Z,selectedItem:E,onItemLeave:te,itemTextRefCallback:X,focusSelectedItem:D,selectedItemText:j,position:i,isPositioned:U,searchRef:$,children:b.jsx(Ep,{as:E7,allowPinchZoom:!0,children:b.jsx(vp,{asChild:!0,trapped:R.open,onMountAutoFocus:ce=>{ce.preventDefault()},onUnmountAutoFocus:Sn(s,ce=>{R.trigger?.focus({preventScroll:!0}),ce.preventDefault()}),children:b.jsx(yp,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:ce=>ce.preventDefault(),onDismiss:()=>R.onOpenChange(!1),children:b.jsx(Q,{role:"listbox",id:R.contentId,"data-state":R.open?"open":"closed",dir:R.dir,onContextMenu:ce=>ce.preventDefault(),...w,...ye,onPlaced:()=>H(!0),ref:O,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:Sn(w.onKeyDown,ce=>{const Se=ce.ctrlKey||ce.altKey||ce.metaKey;if(ce.key==="Tab"&&ce.preventDefault(),!Se&&ce.key.length===1&&P(ce.key),["ArrowUp","ArrowDown","Home","End"].includes(ce.key)){let oe=F().filter(fe=>!fe.disabled).map(fe=>fe.ref.current);if(["ArrowUp","End"].includes(ce.key)&&(oe=oe.slice().reverse()),["ArrowUp","ArrowDown"].includes(ce.key)){const fe=ce.target,xe=oe.indexOf(fe);oe=oe.slice(xe+1)}setTimeout(()=>T(oe)),ce.preventDefault()}})})})})})})});v3.displayName=D7;var N7="SelectItemAlignedPosition",b3=C.forwardRef((n,e)=>{const{__scopeSelect:r,onPlaced:i,...s}=n,l=ni(_i,r),u=ti(_i,r),[d,f]=C.useState(null),[p,m]=C.useState(null),y=Ln(e,O=>m(O)),v=ud(r),x=C.useRef(!1),A=C.useRef(!0),{viewport:S,selectedItem:N,selectedItemText:w,focusSelectedItem:R}=u,L=C.useCallback(()=>{if(l.trigger&&l.valueNode&&d&&p&&S&&N&&w){const O=l.trigger.getBoundingClientRect(),E=p.getBoundingClientRect(),k=l.valueNode.getBoundingClientRect(),j=w.getBoundingClientRect();if(l.dir!=="rtl"){const fe=j.left-E.left,xe=k.left-fe,_e=O.left-xe,Me=O.width+_e,Ae=Math.max(Me,E.width),Je=window.innerWidth-yr,Fe=jv(xe,[yr,Math.max(yr,Je-Ae)]);d.style.minWidth=Me+"px",d.style.left=Fe+"px"}else{const fe=E.right-j.right,xe=window.innerWidth-k.right-fe,_e=window.innerWidth-O.right-xe,Me=O.width+_e,Ae=Math.max(Me,E.width),Je=window.innerWidth-yr,Fe=jv(xe,[yr,Math.max(yr,Je-Ae)]);d.style.minWidth=Me+"px",d.style.right=Fe+"px"}const V=v(),F=window.innerHeight-yr*2,U=S.scrollHeight,H=window.getComputedStyle(p),Y=parseInt(H.borderTopWidth,10),T=parseInt(H.paddingTop,10),D=parseInt(H.borderBottomWidth,10),I=parseInt(H.paddingBottom,10),q=Y+T+U+I+D,$=Math.min(N.offsetHeight*5,q),P=window.getComputedStyle(S),Z=parseInt(P.paddingTop,10),te=parseInt(P.paddingBottom,10),X=O.top+O.height/2-yr,Q=F-X,ye=N.offsetHeight/2,ce=N.offsetTop+ye,Se=Y+T+ce,ge=q-Se;if(Se<=X){const fe=V.length>0&&N===V[V.length-1].ref.current;d.style.bottom="0px";const xe=p.clientHeight-S.offsetTop-S.offsetHeight,_e=Math.max(Q,ye+(fe?te:0)+xe+D),Me=Se+_e;d.style.height=Me+"px"}else{const fe=V.length>0&&N===V[0].ref.current;d.style.top="0px";const _e=Math.max(X,Y+S.offsetTop+(fe?Z:0)+ye)+ge;d.style.height=_e+"px",S.scrollTop=Se-X+S.offsetTop}d.style.margin=`${yr}px 0`,d.style.minHeight=$+"px",d.style.maxHeight=F+"px",i?.(),requestAnimationFrame(()=>x.current=!0)}},[v,l.trigger,l.valueNode,d,p,S,N,w,l.dir,i]);St(()=>L(),[L]);const[z,G]=C.useState();St(()=>{p&&G(window.getComputedStyle(p).zIndex)},[p]);const _=C.useCallback(O=>{O&&A.current===!0&&(L(),R?.(),A.current=!1)},[L,R]);return b.jsx(k7,{scope:r,contentWrapper:d,shouldExpandOnScrollRef:x,onScrollButtonChange:_,children:b.jsx("div",{ref:f,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:z},children:b.jsx(mn.div,{...s,ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});b3.displayName=N7;var R7="SelectPopperPosition",Nm=C.forwardRef((n,e)=>{const{__scopeSelect:r,align:i="start",collisionPadding:s=yr,...l}=n,u=dd(r);return b.jsx(x8,{...u,...l,ref:e,align:i,collisionPadding:s,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Nm.displayName=R7;var[k7,Np]=eo(_i,{}),Rm="SelectViewport",x3=C.forwardRef((n,e)=>{const{__scopeSelect:r,nonce:i,...s}=n,l=ti(Rm,r),u=Np(Rm,r),d=Ln(e,l.onViewportChange),f=C.useRef(0);return b.jsxs(b.Fragment,{children:[b.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),b.jsx(cd.Slot,{scope:r,children:b.jsx(mn.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:d,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:Sn(s.onScroll,p=>{const m=p.currentTarget,{contentWrapper:y,shouldExpandOnScrollRef:v}=u;if(v?.current&&y){const x=Math.abs(f.current-m.scrollTop);if(x>0){const A=window.innerHeight-yr*2,S=parseFloat(y.style.minHeight),N=parseFloat(y.style.height),w=Math.max(S,N);if(w<A){const R=w+x,L=Math.min(A,R),z=R-L;y.style.height=L+"px",y.style.bottom==="0px"&&(m.scrollTop=z>0?z:0,y.style.justifyContent="flex-end")}}}f.current=m.scrollTop})})})]})});x3.displayName=Rm;var S3="SelectGroup",[P7,B7]=eo(S3),L7=C.forwardRef((n,e)=>{const{__scopeSelect:r,...i}=n,s=Vs();return b.jsx(P7,{scope:r,id:s,children:b.jsx(mn.div,{role:"group","aria-labelledby":s,...i,ref:e})})});L7.displayName=S3;var M3="SelectLabel",_7=C.forwardRef((n,e)=>{const{__scopeSelect:r,...i}=n,s=B7(M3,r);return b.jsx(mn.div,{id:s.id,...i,ref:e})});_7.displayName=M3;var Nu="SelectItem",[O7,C3]=eo(Nu),A3=C.forwardRef((n,e)=>{const{__scopeSelect:r,value:i,disabled:s=!1,textValue:l,...u}=n,d=ni(Nu,r),f=ti(Nu,r),p=d.value===i,[m,y]=C.useState(l??""),[v,x]=C.useState(!1),A=Ln(e,R=>f.itemRefCallback?.(R,i,s)),S=Vs(),N=C.useRef("touch"),w=()=>{s||(d.onValueChange(i),d.onOpenChange(!1))};if(i==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return b.jsx(O7,{scope:r,value:i,disabled:s,textId:S,isSelected:p,onItemTextChange:C.useCallback(R=>{y(L=>L||(R?.textContent??"").trim())},[]),children:b.jsx(cd.ItemSlot,{scope:r,value:i,disabled:s,textValue:m,children:b.jsx(mn.div,{role:"option","aria-labelledby":S,"data-highlighted":v?"":void 0,"aria-selected":p&&v,"data-state":p?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...u,ref:A,onFocus:Sn(u.onFocus,()=>x(!0)),onBlur:Sn(u.onBlur,()=>x(!1)),onClick:Sn(u.onClick,()=>{N.current!=="mouse"&&w()}),onPointerUp:Sn(u.onPointerUp,()=>{N.current==="mouse"&&w()}),onPointerDown:Sn(u.onPointerDown,R=>{N.current=R.pointerType}),onPointerMove:Sn(u.onPointerMove,R=>{N.current=R.pointerType,s?f.onItemLeave?.():N.current==="mouse"&&R.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Sn(u.onPointerLeave,R=>{R.currentTarget===document.activeElement&&f.onItemLeave?.()}),onKeyDown:Sn(u.onKeyDown,R=>{f.searchRef?.current!==""&&R.key===" "||(x7.includes(R.key)&&w(),R.key===" "&&R.preventDefault())})})})})});A3.displayName=Nu;var cl="SelectItemText",w3=C.forwardRef((n,e)=>{const{__scopeSelect:r,className:i,style:s,...l}=n,u=ni(cl,r),d=ti(cl,r),f=C3(cl,r),p=A7(cl,r),[m,y]=C.useState(null),v=Ln(e,w=>y(w),f.onItemTextChange,w=>d.itemTextRefCallback?.(w,f.value,f.disabled)),x=m?.textContent,A=C.useMemo(()=>b.jsx("option",{value:f.value,disabled:f.disabled,children:x},f.value),[f.disabled,f.value,x]),{onNativeOptionAdd:S,onNativeOptionRemove:N}=p;return St(()=>(S(A),()=>N(A)),[S,N,A]),b.jsxs(b.Fragment,{children:[b.jsx(mn.span,{id:f.textId,...l,ref:v}),f.isSelected&&u.valueNode&&!u.valueNodeHasChildren?Pl.createPortal(l.children,u.valueNode):null]})});w3.displayName=cl;var T3="SelectItemIndicator",D3=C.forwardRef((n,e)=>{const{__scopeSelect:r,...i}=n;return C3(T3,r).isSelected?b.jsx(mn.span,{"aria-hidden":!0,...i,ref:e}):null});D3.displayName=T3;var km="SelectScrollUpButton",E3=C.forwardRef((n,e)=>{const r=ti(km,n.__scopeSelect),i=Np(km,n.__scopeSelect),[s,l]=C.useState(!1),u=Ln(e,i.onScrollButtonChange);return St(()=>{if(r.viewport&&r.isPositioned){let d=function(){const p=f.scrollTop>0;l(p)};const f=r.viewport;return d(),f.addEventListener("scroll",d),()=>f.removeEventListener("scroll",d)}},[r.viewport,r.isPositioned]),s?b.jsx(R3,{...n,ref:u,onAutoScroll:()=>{const{viewport:d,selectedItem:f}=r;d&&f&&(d.scrollTop=d.scrollTop-f.offsetHeight)}}):null});E3.displayName=km;var Pm="SelectScrollDownButton",N3=C.forwardRef((n,e)=>{const r=ti(Pm,n.__scopeSelect),i=Np(Pm,n.__scopeSelect),[s,l]=C.useState(!1),u=Ln(e,i.onScrollButtonChange);return St(()=>{if(r.viewport&&r.isPositioned){let d=function(){const p=f.scrollHeight-f.clientHeight,m=Math.ceil(f.scrollTop)<p;l(m)};const f=r.viewport;return d(),f.addEventListener("scroll",d),()=>f.removeEventListener("scroll",d)}},[r.viewport,r.isPositioned]),s?b.jsx(R3,{...n,ref:u,onAutoScroll:()=>{const{viewport:d,selectedItem:f}=r;d&&f&&(d.scrollTop=d.scrollTop+f.offsetHeight)}}):null});N3.displayName=Pm;var R3=C.forwardRef((n,e)=>{const{__scopeSelect:r,onAutoScroll:i,...s}=n,l=ti("SelectScrollButton",r),u=C.useRef(null),d=ud(r),f=C.useCallback(()=>{u.current!==null&&(window.clearInterval(u.current),u.current=null)},[]);return C.useEffect(()=>()=>f(),[f]),St(()=>{d().find(m=>m.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[d]),b.jsx(mn.div,{"aria-hidden":!0,...s,ref:e,style:{flexShrink:0,...s.style},onPointerDown:Sn(s.onPointerDown,()=>{u.current===null&&(u.current=window.setInterval(i,50))}),onPointerMove:Sn(s.onPointerMove,()=>{l.onItemLeave?.(),u.current===null&&(u.current=window.setInterval(i,50))}),onPointerLeave:Sn(s.onPointerLeave,()=>{f()})})}),z7="SelectSeparator",j7=C.forwardRef((n,e)=>{const{__scopeSelect:r,...i}=n;return b.jsx(mn.div,{"aria-hidden":!0,...i,ref:e})});j7.displayName=z7;var Bm="SelectArrow",V7=C.forwardRef((n,e)=>{const{__scopeSelect:r,...i}=n,s=dd(r),l=ni(Bm,r),u=ti(Bm,r);return l.open&&u.position==="popper"?b.jsx(S8,{...s,...i,ref:e}):null});V7.displayName=Bm;var F7="SelectBubbleInput",k3=C.forwardRef(({__scopeSelect:n,value:e,...r},i)=>{const s=C.useRef(null),l=Ln(i,s),u=Q4(e);return C.useEffect(()=>{const d=s.current;if(!d)return;const f=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(f,"value").set;if(u!==e&&m){const y=new Event("change",{bubbles:!0});m.call(d,e),d.dispatchEvent(y)}},[u,e]),b.jsx(mn.select,{...r,style:{...$4,...r.style},ref:l,defaultValue:e})});k3.displayName=F7;function P3(n){return n===""||n===void 0}function B3(n){const e=Pi(n),r=C.useRef(""),i=C.useRef(0),s=C.useCallback(u=>{const d=r.current+u;e(d),(function f(p){r.current=p,window.clearTimeout(i.current),p!==""&&(i.current=window.setTimeout(()=>f(""),1e3))})(d)},[e]),l=C.useCallback(()=>{r.current="",window.clearTimeout(i.current)},[]);return C.useEffect(()=>()=>window.clearTimeout(i.current),[]),[r,s,l]}function L3(n,e,r){const s=e.length>1&&Array.from(e).every(p=>p===e[0])?e[0]:e,l=r?n.indexOf(r):-1;let u=G7(n,Math.max(l,0));s.length===1&&(u=u.filter(p=>p!==r));const f=u.find(p=>p.textValue.toLowerCase().startsWith(s.toLowerCase()));return f!==r?f:void 0}function G7(n,e){return n.map((r,i)=>n[(e+i)%n.length])}var H7=c3,I7=d3,U7=h3,J7=m3,q7=p3,K7=g3,Y7=x3,Z7=A3,W7=w3,X7=D3,Q7=E3,$7=N3;function _3(n){var e,r,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(r=_3(n[e]))&&(i&&(i+=" "),i+=r)}else for(r in n)n[r]&&(i&&(i+=" "),i+=r);return i}function O3(){for(var n,e,r=0,i="",s=arguments.length;r<s;r++)(n=arguments[r])&&(e=_3(n))&&(i&&(i+=" "),i+=e);return i}const eT=(n,e)=>{const r=new Array(n.length+e.length);for(let i=0;i<n.length;i++)r[i]=n[i];for(let i=0;i<e.length;i++)r[n.length+i]=e[i];return r},nT=(n,e)=>({classGroupId:n,validator:e}),z3=(n=new Map,e=null,r)=>({nextPart:n,validators:e,classGroupId:r}),Ru="-",u2=[],tT="arbitrary..",rT=n=>{const e=iT(n),{conflictingClassGroups:r,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:u=>{if(u.startsWith("[")&&u.endsWith("]"))return aT(u);const d=u.split(Ru),f=d[0]===""&&d.length>1?1:0;return j3(d,f,e)},getConflictingClassGroupIds:(u,d)=>{if(d){const f=i[u],p=r[u];return f?p?eT(p,f):f:p||u2}return r[u]||u2}}},j3=(n,e,r)=>{if(n.length-e===0)return r.classGroupId;const s=n[e],l=r.nextPart.get(s);if(l){const p=j3(n,e+1,l);if(p)return p}const u=r.validators;if(u===null)return;const d=e===0?n.join(Ru):n.slice(e).join(Ru),f=u.length;for(let p=0;p<f;p++){const m=u[p];if(m.validator(d))return m.classGroupId}},aT=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),r=e.indexOf(":"),i=e.slice(0,r);return i?tT+i:void 0})(),iT=n=>{const{theme:e,classGroups:r}=n;return sT(r,e)},sT=(n,e)=>{const r=z3();for(const i in n){const s=n[i];Rp(s,r,i,e)}return r},Rp=(n,e,r,i)=>{const s=n.length;for(let l=0;l<s;l++){const u=n[l];oT(u,e,r,i)}},oT=(n,e,r,i)=>{if(typeof n=="string"){lT(n,e,r);return}if(typeof n=="function"){cT(n,e,r,i);return}uT(n,e,r,i)},lT=(n,e,r)=>{const i=n===""?e:V3(e,n);i.classGroupId=r},cT=(n,e,r,i)=>{if(dT(n)){Rp(n(i),e,r,i);return}e.validators===null&&(e.validators=[]),e.validators.push(nT(r,n))},uT=(n,e,r,i)=>{const s=Object.entries(n),l=s.length;for(let u=0;u<l;u++){const[d,f]=s[u];Rp(f,V3(e,d),r,i)}},V3=(n,e)=>{let r=n;const i=e.split(Ru),s=i.length;for(let l=0;l<s;l++){const u=i[l];let d=r.nextPart.get(u);d||(d=z3(),r.nextPart.set(u,d)),r=d}return r},dT=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,fT=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,r=Object.create(null),i=Object.create(null);const s=(l,u)=>{r[l]=u,e++,e>n&&(e=0,i=r,r=Object.create(null))};return{get(l){let u=r[l];if(u!==void 0)return u;if((u=i[l])!==void 0)return s(l,u),u},set(l,u){l in r?r[l]=u:s(l,u)}}},Lm="!",d2=":",hT=[],f2=(n,e,r,i,s)=>({modifiers:n,hasImportantModifier:e,baseClassName:r,maybePostfixModifierPosition:i,isExternal:s}),mT=n=>{const{prefix:e,experimentalParseClassName:r}=n;let i=s=>{const l=[];let u=0,d=0,f=0,p;const m=s.length;for(let S=0;S<m;S++){const N=s[S];if(u===0&&d===0){if(N===d2){l.push(s.slice(f,S)),f=S+1;continue}if(N==="/"){p=S;continue}}N==="["?u++:N==="]"?u--:N==="("?d++:N===")"&&d--}const y=l.length===0?s:s.slice(f);let v=y,x=!1;y.endsWith(Lm)?(v=y.slice(0,-1),x=!0):y.startsWith(Lm)&&(v=y.slice(1),x=!0);const A=p&&p>f?p-f:void 0;return f2(l,x,v,A)};if(e){const s=e+d2,l=i;i=u=>u.startsWith(s)?l(u.slice(s.length)):f2(hT,!1,u,void 0,!0)}if(r){const s=i;i=l=>r({className:l,parseClassName:s})}return i},pT=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((r,i)=>{e.set(r,1e6+i)}),r=>{const i=[];let s=[];for(let l=0;l<r.length;l++){const u=r[l],d=u[0]==="[",f=e.has(u);d||f?(s.length>0&&(s.sort(),i.push(...s),s=[]),i.push(u)):s.push(u)}return s.length>0&&(s.sort(),i.push(...s)),i}},gT=n=>({cache:fT(n.cacheSize),parseClassName:mT(n),sortModifiers:pT(n),...rT(n)}),yT=/\s+/,vT=(n,e)=>{const{parseClassName:r,getClassGroupId:i,getConflictingClassGroupIds:s,sortModifiers:l}=e,u=[],d=n.trim().split(yT);let f="";for(let p=d.length-1;p>=0;p-=1){const m=d[p],{isExternal:y,modifiers:v,hasImportantModifier:x,baseClassName:A,maybePostfixModifierPosition:S}=r(m);if(y){f=m+(f.length>0?" "+f:f);continue}let N=!!S,w=i(N?A.substring(0,S):A);if(!w){if(!N){f=m+(f.length>0?" "+f:f);continue}if(w=i(A),!w){f=m+(f.length>0?" "+f:f);continue}N=!1}const R=v.length===0?"":v.length===1?v[0]:l(v).join(":"),L=x?R+Lm:R,z=L+w;if(u.indexOf(z)>-1)continue;u.push(z);const G=s(w,N);for(let _=0;_<G.length;++_){const O=G[_];u.push(L+O)}f=m+(f.length>0?" "+f:f)}return f},bT=(...n)=>{let e=0,r,i,s="";for(;e<n.length;)(r=n[e++])&&(i=F3(r))&&(s&&(s+=" "),s+=i);return s},F3=n=>{if(typeof n=="string")return n;let e,r="";for(let i=0;i<n.length;i++)n[i]&&(e=F3(n[i]))&&(r&&(r+=" "),r+=e);return r},xT=(n,...e)=>{let r,i,s,l;const u=f=>{const p=e.reduce((m,y)=>y(m),n());return r=gT(p),i=r.cache.get,s=r.cache.set,l=d,d(f)},d=f=>{const p=i(f);if(p)return p;const m=vT(f,r);return s(f,m),m};return l=u,(...f)=>l(bT(...f))},ST=[],at=n=>{const e=r=>r[n]||ST;return e.isThemeGetter=!0,e},G3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,H3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,MT=/^\d+\/\d+$/,CT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,AT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,wT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,TT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,DT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ts=n=>MT.test(n),Ze=n=>!!n&&!Number.isNaN(Number(n)),ja=n=>!!n&&Number.isInteger(Number(n)),Xh=n=>n.endsWith("%")&&Ze(n.slice(0,-1)),sa=n=>CT.test(n),ET=()=>!0,NT=n=>AT.test(n)&&!wT.test(n),I3=()=>!1,RT=n=>TT.test(n),kT=n=>DT.test(n),PT=n=>!Ee(n)&&!Ne(n),BT=n=>no(n,q3,I3),Ee=n=>G3.test(n),Si=n=>no(n,K3,NT),Qh=n=>no(n,jT,Ze),h2=n=>no(n,U3,I3),LT=n=>no(n,J3,kT),lu=n=>no(n,Y3,RT),Ne=n=>H3.test(n),tl=n=>to(n,K3),_T=n=>to(n,VT),m2=n=>to(n,U3),OT=n=>to(n,q3),zT=n=>to(n,J3),cu=n=>to(n,Y3,!0),no=(n,e,r)=>{const i=G3.exec(n);return i?i[1]?e(i[1]):r(i[2]):!1},to=(n,e,r=!1)=>{const i=H3.exec(n);return i?i[1]?e(i[1]):r:!1},U3=n=>n==="position"||n==="percentage",J3=n=>n==="image"||n==="url",q3=n=>n==="length"||n==="size"||n==="bg-size",K3=n=>n==="length",jT=n=>n==="number",VT=n=>n==="family-name",Y3=n=>n==="shadow",FT=()=>{const n=at("color"),e=at("font"),r=at("text"),i=at("font-weight"),s=at("tracking"),l=at("leading"),u=at("breakpoint"),d=at("container"),f=at("spacing"),p=at("radius"),m=at("shadow"),y=at("inset-shadow"),v=at("text-shadow"),x=at("drop-shadow"),A=at("blur"),S=at("perspective"),N=at("aspect"),w=at("ease"),R=at("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],G=()=>[...z(),Ne,Ee],_=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],E=()=>[Ne,Ee,f],k=()=>[Ts,"full","auto",...E()],j=()=>[ja,"none","subgrid",Ne,Ee],V=()=>["auto",{span:["full",ja,Ne,Ee]},ja,Ne,Ee],F=()=>[ja,"auto",Ne,Ee],U=()=>["auto","min","max","fr",Ne,Ee],H=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Y=()=>["start","end","center","stretch","center-safe","end-safe"],T=()=>["auto",...E()],D=()=>[Ts,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],I=()=>[n,Ne,Ee],q=()=>[...z(),m2,h2,{position:[Ne,Ee]}],$=()=>["no-repeat",{repeat:["","x","y","space","round"]}],P=()=>["auto","cover","contain",OT,BT,{size:[Ne,Ee]}],Z=()=>[Xh,tl,Si],te=()=>["","none","full",p,Ne,Ee],X=()=>["",Ze,tl,Si],Q=()=>["solid","dashed","dotted","double"],ye=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ce=()=>[Ze,Xh,m2,h2],Se=()=>["","none",A,Ne,Ee],ge=()=>["none",Ze,Ne,Ee],oe=()=>["none",Ze,Ne,Ee],fe=()=>[Ze,Ne,Ee],xe=()=>[Ts,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[sa],breakpoint:[sa],color:[ET],container:[sa],"drop-shadow":[sa],ease:["in","out","in-out"],font:[PT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[sa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[sa],shadow:[sa],spacing:["px",Ze],text:[sa],"text-shadow":[sa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ts,Ee,Ne,N]}],container:["container"],columns:[{columns:[Ze,Ee,Ne,d]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:G()}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:k()}],"inset-x":[{"inset-x":k()}],"inset-y":[{"inset-y":k()}],start:[{start:k()}],end:[{end:k()}],top:[{top:k()}],right:[{right:k()}],bottom:[{bottom:k()}],left:[{left:k()}],visibility:["visible","invisible","collapse"],z:[{z:[ja,"auto",Ne,Ee]}],basis:[{basis:[Ts,"full","auto",d,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ze,Ts,"auto","initial","none",Ee]}],grow:[{grow:["",Ze,Ne,Ee]}],shrink:[{shrink:["",Ze,Ne,Ee]}],order:[{order:[ja,"first","last","none",Ne,Ee]}],"grid-cols":[{"grid-cols":j()}],"col-start-end":[{col:V()}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":j()}],"row-start-end":[{row:V()}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":U()}],"auto-rows":[{"auto-rows":U()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...H(),"normal"]}],"justify-items":[{"justify-items":[...Y(),"normal"]}],"justify-self":[{"justify-self":["auto",...Y()]}],"align-content":[{content:["normal",...H()]}],"align-items":[{items:[...Y(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Y(),{baseline:["","last"]}]}],"place-content":[{"place-content":H()}],"place-items":[{"place-items":[...Y(),"baseline"]}],"place-self":[{"place-self":["auto",...Y()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:T()}],mx:[{mx:T()}],my:[{my:T()}],ms:[{ms:T()}],me:[{me:T()}],mt:[{mt:T()}],mr:[{mr:T()}],mb:[{mb:T()}],ml:[{ml:T()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:D()}],w:[{w:[d,"screen",...D()]}],"min-w":[{"min-w":[d,"screen","none",...D()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[u]},...D()]}],h:[{h:["screen","lh",...D()]}],"min-h":[{"min-h":["screen","lh","none",...D()]}],"max-h":[{"max-h":["screen","lh",...D()]}],"font-size":[{text:["base",r,tl,Si]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,Ne,Qh]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Xh,Ee]}],"font-family":[{font:[_T,Ee,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,Ne,Ee]}],"line-clamp":[{"line-clamp":[Ze,"none",Ne,Qh]}],leading:[{leading:[l,...E()]}],"list-image":[{"list-image":["none",Ne,Ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ne,Ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Q(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ze,"from-font","auto",Ne,Si]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[Ze,"auto",Ne,Ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ne,Ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ne,Ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:q()}],"bg-repeat":[{bg:$()}],"bg-size":[{bg:P()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ja,Ne,Ee],radial:["",Ne,Ee],conic:[ja,Ne,Ee]},zT,LT]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:Z()}],"gradient-via-pos":[{via:Z()}],"gradient-to-pos":[{to:Z()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:te()}],"rounded-s":[{"rounded-s":te()}],"rounded-e":[{"rounded-e":te()}],"rounded-t":[{"rounded-t":te()}],"rounded-r":[{"rounded-r":te()}],"rounded-b":[{"rounded-b":te()}],"rounded-l":[{"rounded-l":te()}],"rounded-ss":[{"rounded-ss":te()}],"rounded-se":[{"rounded-se":te()}],"rounded-ee":[{"rounded-ee":te()}],"rounded-es":[{"rounded-es":te()}],"rounded-tl":[{"rounded-tl":te()}],"rounded-tr":[{"rounded-tr":te()}],"rounded-br":[{"rounded-br":te()}],"rounded-bl":[{"rounded-bl":te()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Q(),"hidden","none"]}],"divide-style":[{divide:[...Q(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...Q(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ze,Ne,Ee]}],"outline-w":[{outline:["",Ze,tl,Si]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",m,cu,lu]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",y,cu,lu]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[Ze,Si]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",v,cu,lu]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[Ze,Ne,Ee]}],"mix-blend":[{"mix-blend":[...ye(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ye()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ze]}],"mask-image-linear-from-pos":[{"mask-linear-from":ce()}],"mask-image-linear-to-pos":[{"mask-linear-to":ce()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":ce()}],"mask-image-t-to-pos":[{"mask-t-to":ce()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":ce()}],"mask-image-r-to-pos":[{"mask-r-to":ce()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":ce()}],"mask-image-b-to-pos":[{"mask-b-to":ce()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":ce()}],"mask-image-l-to-pos":[{"mask-l-to":ce()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":ce()}],"mask-image-x-to-pos":[{"mask-x-to":ce()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":ce()}],"mask-image-y-to-pos":[{"mask-y-to":ce()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[Ne,Ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":ce()}],"mask-image-radial-to-pos":[{"mask-radial-to":ce()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":z()}],"mask-image-conic-pos":[{"mask-conic":[Ze]}],"mask-image-conic-from-pos":[{"mask-conic-from":ce()}],"mask-image-conic-to-pos":[{"mask-conic-to":ce()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:q()}],"mask-repeat":[{mask:$()}],"mask-size":[{mask:P()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Ne,Ee]}],filter:[{filter:["","none",Ne,Ee]}],blur:[{blur:Se()}],brightness:[{brightness:[Ze,Ne,Ee]}],contrast:[{contrast:[Ze,Ne,Ee]}],"drop-shadow":[{"drop-shadow":["","none",x,cu,lu]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",Ze,Ne,Ee]}],"hue-rotate":[{"hue-rotate":[Ze,Ne,Ee]}],invert:[{invert:["",Ze,Ne,Ee]}],saturate:[{saturate:[Ze,Ne,Ee]}],sepia:[{sepia:["",Ze,Ne,Ee]}],"backdrop-filter":[{"backdrop-filter":["","none",Ne,Ee]}],"backdrop-blur":[{"backdrop-blur":Se()}],"backdrop-brightness":[{"backdrop-brightness":[Ze,Ne,Ee]}],"backdrop-contrast":[{"backdrop-contrast":[Ze,Ne,Ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ze,Ne,Ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ze,Ne,Ee]}],"backdrop-invert":[{"backdrop-invert":["",Ze,Ne,Ee]}],"backdrop-opacity":[{"backdrop-opacity":[Ze,Ne,Ee]}],"backdrop-saturate":[{"backdrop-saturate":[Ze,Ne,Ee]}],"backdrop-sepia":[{"backdrop-sepia":["",Ze,Ne,Ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ne,Ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ze,"initial",Ne,Ee]}],ease:[{ease:["linear","initial",w,Ne,Ee]}],delay:[{delay:[Ze,Ne,Ee]}],animate:[{animate:["none",R,Ne,Ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[S,Ne,Ee]}],"perspective-origin":[{"perspective-origin":G()}],rotate:[{rotate:ge()}],"rotate-x":[{"rotate-x":ge()}],"rotate-y":[{"rotate-y":ge()}],"rotate-z":[{"rotate-z":ge()}],scale:[{scale:oe()}],"scale-x":[{"scale-x":oe()}],"scale-y":[{"scale-y":oe()}],"scale-z":[{"scale-z":oe()}],"scale-3d":["scale-3d"],skew:[{skew:fe()}],"skew-x":[{"skew-x":fe()}],"skew-y":[{"skew-y":fe()}],transform:[{transform:[Ne,Ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:G()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:xe()}],"translate-x":[{"translate-x":xe()}],"translate-y":[{"translate-y":xe()}],"translate-z":[{"translate-z":xe()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ne,Ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ne,Ee]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[Ze,tl,Si,Qh]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},GT=xT(FT);function Mn(...n){return GT(O3(n))}function Z3({...n}){return b.jsx(H7,{"data-slot":"select",...n})}function W3({...n}){return b.jsx(U7,{"data-slot":"select-value",...n})}function X3({className:n,size:e="default",children:r,...i}){return b.jsxs(I7,{"data-slot":"select-trigger","data-size":e,className:Mn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...i,children:[r,b.jsx(J7,{asChild:!0,children:b.jsx(rd,{className:"size-4 opacity-50"})})]})}function Q3({className:n,children:e,position:r="popper",...i}){return b.jsx(q7,{children:b.jsxs(K7,{"data-slot":"select-content",className:Mn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:r,...i,children:[b.jsx(HT,{}),b.jsx(Y7,{className:Mn("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:e}),b.jsx(IT,{})]})})}function fl({className:n,children:e,...r}){return b.jsxs(Z7,{"data-slot":"select-item",className:Mn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...r,children:[b.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:b.jsx(X7,{children:b.jsx(td,{className:"size-4"})})}),b.jsx(W7,{children:e})]})}function HT({className:n,...e}){return b.jsx(Q7,{"data-slot":"select-scroll-up-button",className:Mn("flex cursor-default items-center justify-center py-1",n),...e,children:b.jsx(WA,{className:"size-4"})})}function IT({className:n,...e}){return b.jsx($7,{"data-slot":"select-scroll-down-button",className:Mn("flex cursor-default items-center justify-center py-1",n),...e,children:b.jsx(rd,{className:"size-4"})})}var UT=Symbol.for("react.lazy"),ku=pp[" use ".trim().toString()];function JT(n){return typeof n=="object"&&n!==null&&"then"in n}function $3(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===UT&&"_payload"in n&&JT(n._payload)}function e5(n){const e=KT(n),r=C.forwardRef((i,s)=>{let{children:l,...u}=i;$3(l)&&typeof ku=="function"&&(l=ku(l._payload));const d=C.Children.toArray(l),f=d.find(ZT);if(f){const p=f.props.children,m=d.map(y=>y===f?C.Children.count(p)>1?C.Children.only(null):C.isValidElement(p)?p.props.children:null:y);return b.jsx(e,{...u,ref:s,children:C.isValidElement(p)?C.cloneElement(p,void 0,m):null})}return b.jsx(e,{...u,ref:s,children:l})});return r.displayName=`${n}.Slot`,r}var qT=e5("Slot");function KT(n){const e=C.forwardRef((r,i)=>{let{children:s,...l}=r;if($3(s)&&typeof ku=="function"&&(s=ku(s._payload)),C.isValidElement(s)){const u=XT(s),d=WT(l,s.props);return s.type!==C.Fragment&&(d.ref=i?Xs(i,u):u),C.cloneElement(s,d)}return C.Children.count(s)>1?C.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var YT=Symbol("radix.slottable");function ZT(n){return C.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===YT}function WT(n,e){const r={...e};for(const i in e){const s=n[i],l=e[i];/^on[A-Z]/.test(i)?s&&l?r[i]=(...d)=>{const f=l(...d);return s(...d),f}:s&&(r[i]=s):i==="style"?r[i]={...s,...l}:i==="className"&&(r[i]=[s,l].filter(Boolean).join(" "))}return{...n,...r}}function XT(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}const p2=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,g2=O3,n5=(n,e)=>r=>{var i;if(e?.variants==null)return g2(n,r?.class,r?.className);const{variants:s,defaultVariants:l}=e,u=Object.keys(s).map(p=>{const m=r?.[p],y=l?.[p];if(m===null)return null;const v=p2(m)||p2(y);return s[p][v]}),d=r&&Object.entries(r).reduce((p,m)=>{let[y,v]=m;return v===void 0||(p[y]=v),p},{}),f=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((p,m)=>{let{class:y,className:v,...x}=m;return Object.entries(x).every(A=>{let[S,N]=A;return Array.isArray(N)?N.includes({...l,...d}[S]):{...l,...d}[S]===N})?[...p,y,v]:p},[]);return g2(n,u,f,r?.class,r?.className)},QT=n5("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function sr({className:n,variant:e,size:r,asChild:i=!1,...s}){const l=i?qT:"button";return b.jsx(l,{"data-slot":"button",className:Mn(QT({variant:e,size:r,className:n})),...s})}const kp=C.createContext({});function Pp(n){const e=C.useRef(null);return e.current===null&&(e.current=n()),e.current}const Bp=typeof window<"u",t5=Bp?C.useLayoutEffect:C.useEffect,fd=C.createContext(null);function Lp(n,e){n.indexOf(e)===-1&&n.push(e)}function _p(n,e){const r=n.indexOf(e);r>-1&&n.splice(r,1)}const ua=(n,e,r)=>r>e?e:r<n?n:r;let Op=()=>{};const da={},r5=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function a5(n){return typeof n=="object"&&n!==null}const i5=n=>/^0[^.\s]+$/u.test(n);function zp(n){let e;return()=>(e===void 0&&(e=n()),e)}const or=n=>n,$T=(n,e)=>r=>e(n(r)),_l=(...n)=>n.reduce($T),Sl=(n,e,r)=>{const i=e-n;return i===0?1:(r-n)/i};class jp{constructor(){this.subscriptions=[]}add(e){return Lp(this.subscriptions,e),()=>_p(this.subscriptions,e)}notify(e,r,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,r,i);else for(let l=0;l<s;l++){const u=this.subscriptions[l];u&&u(e,r,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const zr=n=>n*1e3,ir=n=>n/1e3;function s5(n,e){return e?n*(1e3/e):0}const o5=(n,e,r)=>(((1-3*r+3*e)*n+(3*r-6*e))*n+3*e)*n,e9=1e-7,n9=12;function t9(n,e,r,i,s){let l,u,d=0;do u=e+(r-e)/2,l=o5(u,i,s)-n,l>0?r=u:e=u;while(Math.abs(l)>e9&&++d<n9);return u}function Ol(n,e,r,i){if(n===e&&r===i)return or;const s=l=>t9(l,0,1,n,r);return l=>l===0||l===1?l:o5(s(l),e,i)}const l5=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,c5=n=>e=>1-n(1-e),u5=Ol(.33,1.53,.69,.99),Vp=c5(u5),d5=l5(Vp),f5=n=>(n*=2)<1?.5*Vp(n):.5*(2-Math.pow(2,-10*(n-1))),Fp=n=>1-Math.sin(Math.acos(n)),h5=c5(Fp),m5=l5(Fp),r9=Ol(.42,0,1,1),a9=Ol(0,0,.58,1),p5=Ol(.42,0,.58,1),i9=n=>Array.isArray(n)&&typeof n[0]!="number",g5=n=>Array.isArray(n)&&typeof n[0]=="number",s9={linear:or,easeIn:r9,easeInOut:p5,easeOut:a9,circIn:Fp,circInOut:m5,circOut:h5,backIn:Vp,backInOut:d5,backOut:u5,anticipate:f5},o9=n=>typeof n=="string",y2=n=>{if(g5(n)){Op(n.length===4);const[e,r,i,s]=n;return Ol(e,r,i,s)}else if(o9(n))return s9[n];return n},uu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function l9(n,e){let r=new Set,i=new Set,s=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(m){u.has(m)&&(p.schedule(m),n()),m(d)}const p={schedule:(m,y=!1,v=!1)=>{const A=v&&s?r:i;return y&&u.add(m),A.has(m)||A.add(m),m},cancel:m=>{i.delete(m),u.delete(m)},process:m=>{if(d=m,s){l=!0;return}s=!0,[r,i]=[i,r],r.forEach(f),r.clear(),s=!1,l&&(l=!1,p.process(m))}};return p}const c9=40;function y5(n,e){let r=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>r=!0,u=uu.reduce((L,z)=>(L[z]=l9(l),L),{}),{setup:d,read:f,resolveKeyframes:p,preUpdate:m,update:y,preRender:v,render:x,postRender:A}=u,S=()=>{const L=da.useManualTiming?s.timestamp:performance.now();r=!1,da.useManualTiming||(s.delta=i?1e3/60:Math.max(Math.min(L-s.timestamp,c9),1)),s.timestamp=L,s.isProcessing=!0,d.process(s),f.process(s),p.process(s),m.process(s),y.process(s),v.process(s),x.process(s),A.process(s),s.isProcessing=!1,r&&e&&(i=!1,n(S))},N=()=>{r=!0,i=!0,s.isProcessing||n(S)};return{schedule:uu.reduce((L,z)=>{const G=u[z];return L[z]=(_,O=!1,E=!1)=>(r||N(),G.schedule(_,O,E)),L},{}),cancel:L=>{for(let z=0;z<uu.length;z++)u[uu[z]].cancel(L)},state:s,steps:u}}const{schedule:Rn,cancel:Wa,state:gt,steps:$h}=y5(typeof requestAnimationFrame<"u"?requestAnimationFrame:or,!0);let vu;function u9(){vu=void 0}const _t={now:()=>(vu===void 0&&_t.set(gt.isProcessing||da.useManualTiming?gt.timestamp:performance.now()),vu),set:n=>{vu=n,queueMicrotask(u9)}},v5=n=>e=>typeof e=="string"&&e.startsWith(n),Gp=v5("--"),d9=v5("var(--"),Hp=n=>d9(n)?f9.test(n.split("/*")[0].trim()):!1,f9=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ro={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ml={...ro,transform:n=>ua(0,1,n)},du={...ro,default:1},hl=n=>Math.round(n*1e5)/1e5,Ip=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function h9(n){return n==null}const m9=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Up=(n,e)=>r=>!!(typeof r=="string"&&m9.test(r)&&r.startsWith(n)||e&&!h9(r)&&Object.prototype.hasOwnProperty.call(r,e)),b5=(n,e,r)=>i=>{if(typeof i!="string")return i;const[s,l,u,d]=i.match(Ip);return{[n]:parseFloat(s),[e]:parseFloat(l),[r]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},p9=n=>ua(0,255,n),em={...ro,transform:n=>Math.round(p9(n))},wi={test:Up("rgb","red"),parse:b5("red","green","blue"),transform:({red:n,green:e,blue:r,alpha:i=1})=>"rgba("+em.transform(n)+", "+em.transform(e)+", "+em.transform(r)+", "+hl(Ml.transform(i))+")"};function g9(n){let e="",r="",i="",s="";return n.length>5?(e=n.substring(1,3),r=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(e=n.substring(1,2),r=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),e+=e,r+=r,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const _m={test:Up("#"),parse:g9,transform:wi.transform},zl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Ga=zl("deg"),jr=zl("%"),Ve=zl("px"),y9=zl("vh"),v9=zl("vw"),v2={...jr,parse:n=>jr.parse(n)/100,transform:n=>jr.transform(n*100)},Bs={test:Up("hsl","hue"),parse:b5("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:r,alpha:i=1})=>"hsla("+Math.round(n)+", "+jr.transform(hl(e))+", "+jr.transform(hl(r))+", "+hl(Ml.transform(i))+")"},et={test:n=>wi.test(n)||_m.test(n)||Bs.test(n),parse:n=>wi.test(n)?wi.parse(n):Bs.test(n)?Bs.parse(n):_m.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?wi.transform(n):Bs.transform(n),getAnimatableNone:n=>{const e=et.parse(n);return e.alpha=0,et.transform(e)}},b9=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function x9(n){return isNaN(n)&&typeof n=="string"&&(n.match(Ip)?.length||0)+(n.match(b9)?.length||0)>0}const x5="number",S5="color",S9="var",M9="var(",b2="${}",C9=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Cl(n){const e=n.toString(),r=[],i={color:[],number:[],var:[]},s=[];let l=0;const d=e.replace(C9,f=>(et.test(f)?(i.color.push(l),s.push(S5),r.push(et.parse(f))):f.startsWith(M9)?(i.var.push(l),s.push(S9),r.push(f)):(i.number.push(l),s.push(x5),r.push(parseFloat(f))),++l,b2)).split(b2);return{values:r,split:d,indexes:i,types:s}}function M5(n){return Cl(n).values}function C5(n){const{split:e,types:r}=Cl(n),i=e.length;return s=>{let l="";for(let u=0;u<i;u++)if(l+=e[u],s[u]!==void 0){const d=r[u];d===x5?l+=hl(s[u]):d===S5?l+=et.transform(s[u]):l+=s[u]}return l}}const A9=n=>typeof n=="number"?0:et.test(n)?et.getAnimatableNone(n):n;function w9(n){const e=M5(n);return C5(n)(e.map(A9))}const Xa={test:x9,parse:M5,createTransformer:C5,getAnimatableNone:w9};function nm(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(e-n)*6*r:r<1/2?e:r<2/3?n+(e-n)*(2/3-r)*6:n}function T9({hue:n,saturation:e,lightness:r,alpha:i}){n/=360,e/=100,r/=100;let s=0,l=0,u=0;if(!e)s=l=u=r;else{const d=r<.5?r*(1+e):r+e-r*e,f=2*r-d;s=nm(f,d,n+1/3),l=nm(f,d,n),u=nm(f,d,n-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:i}}function Pu(n,e){return r=>r>0?e:n}const Pn=(n,e,r)=>n+(e-n)*r,tm=(n,e,r)=>{const i=n*n,s=r*(e*e-i)+i;return s<0?0:Math.sqrt(s)},D9=[_m,wi,Bs],E9=n=>D9.find(e=>e.test(n));function x2(n){const e=E9(n);if(!e)return!1;let r=e.parse(n);return e===Bs&&(r=T9(r)),r}const S2=(n,e)=>{const r=x2(n),i=x2(e);if(!r||!i)return Pu(n,e);const s={...r};return l=>(s.red=tm(r.red,i.red,l),s.green=tm(r.green,i.green,l),s.blue=tm(r.blue,i.blue,l),s.alpha=Pn(r.alpha,i.alpha,l),wi.transform(s))},Om=new Set(["none","hidden"]);function N9(n,e){return Om.has(n)?r=>r<=0?n:e:r=>r>=1?e:n}function R9(n,e){return r=>Pn(n,e,r)}function Jp(n){return typeof n=="number"?R9:typeof n=="string"?Hp(n)?Pu:et.test(n)?S2:B9:Array.isArray(n)?A5:typeof n=="object"?et.test(n)?S2:k9:Pu}function A5(n,e){const r=[...n],i=r.length,s=n.map((l,u)=>Jp(l)(l,e[u]));return l=>{for(let u=0;u<i;u++)r[u]=s[u](l);return r}}function k9(n,e){const r={...n,...e},i={};for(const s in r)n[s]!==void 0&&e[s]!==void 0&&(i[s]=Jp(n[s])(n[s],e[s]));return s=>{for(const l in i)r[l]=i[l](s);return r}}function P9(n,e){const r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const l=e.types[s],u=n.indexes[l][i[l]],d=n.values[u]??0;r[s]=d,i[l]++}return r}const B9=(n,e)=>{const r=Xa.createTransformer(e),i=Cl(n),s=Cl(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Om.has(n)&&!s.values.length||Om.has(e)&&!i.values.length?N9(n,e):_l(A5(P9(i,s),s.values),r):Pu(n,e)};function w5(n,e,r){return typeof n=="number"&&typeof e=="number"&&typeof r=="number"?Pn(n,e,r):Jp(n)(n,e)}const L9=n=>{const e=({timestamp:r})=>n(r);return{start:(r=!0)=>Rn.update(e,r),stop:()=>Wa(e),now:()=>gt.isProcessing?gt.timestamp:_t.now()}},T5=(n,e,r=10)=>{let i="";const s=Math.max(Math.round(e/r),2);for(let l=0;l<s;l++)i+=Math.round(n(l/(s-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Bu=2e4;function qp(n){let e=0;const r=50;let i=n.next(e);for(;!i.done&&e<Bu;)e+=r,i=n.next(e);return e>=Bu?1/0:e}function _9(n,e=100,r){const i=r({...n,keyframes:[0,e]}),s=Math.min(qp(i),Bu);return{type:"keyframes",ease:l=>i.next(s*l).value/e,duration:ir(s)}}const O9=5;function D5(n,e,r){const i=Math.max(e-O9,0);return s5(r-n(i),e-i)}const zn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},rm=.001;function z9({duration:n=zn.duration,bounce:e=zn.bounce,velocity:r=zn.velocity,mass:i=zn.mass}){let s,l,u=1-e;u=ua(zn.minDamping,zn.maxDamping,u),n=ua(zn.minDuration,zn.maxDuration,ir(n)),u<1?(s=p=>{const m=p*u,y=m*n,v=m-r,x=zm(p,u),A=Math.exp(-y);return rm-v/x*A},l=p=>{const y=p*u*n,v=y*r+r,x=Math.pow(u,2)*Math.pow(p,2)*n,A=Math.exp(-y),S=zm(Math.pow(p,2),u);return(-s(p)+rm>0?-1:1)*((v-x)*A)/S}):(s=p=>{const m=Math.exp(-p*n),y=(p-r)*n+1;return-rm+m*y},l=p=>{const m=Math.exp(-p*n),y=(r-p)*(n*n);return m*y});const d=5/n,f=V9(s,l,d);if(n=zr(n),isNaN(f))return{stiffness:zn.stiffness,damping:zn.damping,duration:n};{const p=Math.pow(f,2)*i;return{stiffness:p,damping:u*2*Math.sqrt(i*p),duration:n}}}const j9=12;function V9(n,e,r){let i=r;for(let s=1;s<j9;s++)i=i-n(i)/e(i);return i}function zm(n,e){return n*Math.sqrt(1-e*e)}const F9=["duration","bounce"],G9=["stiffness","damping","mass"];function M2(n,e){return e.some(r=>n[r]!==void 0)}function H9(n){let e={velocity:zn.velocity,stiffness:zn.stiffness,damping:zn.damping,mass:zn.mass,isResolvedFromDuration:!1,...n};if(!M2(n,G9)&&M2(n,F9))if(n.visualDuration){const r=n.visualDuration,i=2*Math.PI/(r*1.2),s=i*i,l=2*ua(.05,1,1-(n.bounce||0))*Math.sqrt(s);e={...e,mass:zn.mass,stiffness:s,damping:l}}else{const r=z9(n);e={...e,...r,mass:zn.mass},e.isResolvedFromDuration=!0}return e}function Lu(n=zn.visualDuration,e=zn.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:s}=r;const l=r.keyframes[0],u=r.keyframes[r.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:p,mass:m,duration:y,velocity:v,isResolvedFromDuration:x}=H9({...r,velocity:-ir(r.velocity||0)}),A=v||0,S=p/(2*Math.sqrt(f*m)),N=u-l,w=ir(Math.sqrt(f/m)),R=Math.abs(N)<5;i||(i=R?zn.restSpeed.granular:zn.restSpeed.default),s||(s=R?zn.restDelta.granular:zn.restDelta.default);let L;if(S<1){const G=zm(w,S);L=_=>{const O=Math.exp(-S*w*_);return u-O*((A+S*w*N)/G*Math.sin(G*_)+N*Math.cos(G*_))}}else if(S===1)L=G=>u-Math.exp(-w*G)*(N+(A+w*N)*G);else{const G=w*Math.sqrt(S*S-1);L=_=>{const O=Math.exp(-S*w*_),E=Math.min(G*_,300);return u-O*((A+S*w*N)*Math.sinh(E)+G*N*Math.cosh(E))/G}}const z={calculatedDuration:x&&y||null,next:G=>{const _=L(G);if(x)d.done=G>=y;else{let O=G===0?A:0;S<1&&(O=G===0?zr(A):D5(L,G,_));const E=Math.abs(O)<=i,k=Math.abs(u-_)<=s;d.done=E&&k}return d.value=d.done?u:_,d},toString:()=>{const G=Math.min(qp(z),Bu),_=T5(O=>z.next(G*O).value,G,30);return G+"ms "+_},toTransition:()=>{}};return z}Lu.applyToOptions=n=>{const e=_9(n,100,Lu);return n.ease=e.ease,n.duration=zr(e.duration),n.type="keyframes",n};function jm({keyframes:n,velocity:e=0,power:r=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:f,restDelta:p=.5,restSpeed:m}){const y=n[0],v={done:!1,value:y},x=E=>d!==void 0&&E<d||f!==void 0&&E>f,A=E=>d===void 0?f:f===void 0||Math.abs(d-E)<Math.abs(f-E)?d:f;let S=r*e;const N=y+S,w=u===void 0?N:u(N);w!==N&&(S=w-y);const R=E=>-S*Math.exp(-E/i),L=E=>w+R(E),z=E=>{const k=R(E),j=L(E);v.done=Math.abs(k)<=p,v.value=v.done?w:j};let G,_;const O=E=>{x(v.value)&&(G=E,_=Lu({keyframes:[v.value,A(v.value)],velocity:D5(L,E,v.value),damping:s,stiffness:l,restDelta:p,restSpeed:m}))};return O(0),{calculatedDuration:null,next:E=>{let k=!1;return!_&&G===void 0&&(k=!0,z(E),O(E)),G!==void 0&&E>=G?_.next(E-G):(!k&&z(E),v)}}}function I9(n,e,r){const i=[],s=r||da.mix||w5,l=n.length-1;for(let u=0;u<l;u++){let d=s(n[u],n[u+1]);if(e){const f=Array.isArray(e)?e[u]||or:e;d=_l(f,d)}i.push(d)}return i}function U9(n,e,{clamp:r=!0,ease:i,mixer:s}={}){const l=n.length;if(Op(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const d=I9(e,i,s),f=d.length,p=m=>{if(u&&m<n[0])return e[0];let y=0;if(f>1)for(;y<n.length-2&&!(m<n[y+1]);y++);const v=Sl(n[y],n[y+1],m);return d[y](v)};return r?m=>p(ua(n[0],n[l-1],m)):p}function J9(n,e){const r=n[n.length-1];for(let i=1;i<=e;i++){const s=Sl(0,e,i);n.push(Pn(r,1,s))}}function q9(n){const e=[0];return J9(e,n.length-1),e}function K9(n,e){return n.map(r=>r*e)}function Y9(n,e){return n.map(()=>e||p5).splice(0,n.length-1)}function ml({duration:n=300,keyframes:e,times:r,ease:i="easeInOut"}){const s=i9(i)?i.map(y2):y2(i),l={done:!1,value:e[0]},u=K9(r&&r.length===e.length?r:q9(e),n),d=U9(u,e,{ease:Array.isArray(s)?s:Y9(e,s)});return{calculatedDuration:n,next:f=>(l.value=d(f),l.done=f>=n,l)}}const Z9=n=>n!==null;function Kp(n,{repeat:e,repeatType:r="loop"},i,s=1){const l=n.filter(Z9),d=s<0||e&&r!=="loop"&&e%2===1?0:l.length-1;return!d||i===void 0?l[d]:i}const W9={decay:jm,inertia:jm,tween:ml,keyframes:ml,spring:Lu};function E5(n){typeof n.type=="string"&&(n.type=W9[n.type])}class Yp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,r){return this.finished.then(e,r)}}const X9=n=>n/100;class Zp extends Yp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==_t.now()&&this.tick(_t.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;E5(e);const{type:r=ml,repeat:i=0,repeatDelay:s=0,repeatType:l,velocity:u=0}=e;let{keyframes:d}=e;const f=r||ml;f!==ml&&typeof d[0]!="number"&&(this.mixKeyframes=_l(X9,w5(d[0],d[1])),d=[0,100]);const p=f({...e,keyframes:d});l==="mirror"&&(this.mirroredGenerator=f({...e,keyframes:[...d].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=qp(p));const{calculatedDuration:m}=p;this.calculatedDuration=m,this.resolvedDuration=m+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=p}updateTime(e){const r=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(e,r=!1){const{generator:i,totalDuration:s,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:f}=this;if(this.startTime===null)return i.next(0);const{delay:p=0,keyframes:m,repeat:y,repeatType:v,repeatDelay:x,type:A,onUpdate:S,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),r?this.currentTime=e:this.updateTime(e);const w=this.currentTime-p*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?w<0:w>s;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let L=this.currentTime,z=i;if(y){const E=Math.min(this.currentTime,s)/d;let k=Math.floor(E),j=E%1;!j&&E>=1&&(j=1),j===1&&k--,k=Math.min(k,y+1),!!(k%2)&&(v==="reverse"?(j=1-j,x&&(j-=x/d)):v==="mirror"&&(z=u)),L=ua(0,1,j)*d}const G=R?{done:!1,value:m[0]}:z.next(L);l&&(G.value=l(G.value));let{done:_}=G;!R&&f!==null&&(_=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&_);return O&&A!==jm&&(G.value=Kp(m,this.options,N,this.speed)),S&&S(G.value),O&&this.finish(),G}then(e,r){return this.finished.then(e,r)}get duration(){return ir(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+ir(e)}get time(){return ir(this.currentTime)}set time(e){e=zr(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(_t.now());const r=this.playbackSpeed!==e;this.playbackSpeed=e,r&&(this.time=ir(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=L9,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=r??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(_t.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function Q9(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Ti=n=>n*180/Math.PI,Vm=n=>{const e=Ti(Math.atan2(n[1],n[0]));return Fm(e)},$9={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Vm,rotateZ:Vm,skewX:n=>Ti(Math.atan(n[1])),skewY:n=>Ti(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Fm=n=>(n=n%360,n<0&&(n+=360),n),C2=Vm,A2=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),w2=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),eD={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:A2,scaleY:w2,scale:n=>(A2(n)+w2(n))/2,rotateX:n=>Fm(Ti(Math.atan2(n[6],n[5]))),rotateY:n=>Fm(Ti(Math.atan2(-n[2],n[0]))),rotateZ:C2,rotate:C2,skewX:n=>Ti(Math.atan(n[4])),skewY:n=>Ti(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Gm(n){return n.includes("scale")?1:0}function Hm(n,e){if(!n||n==="none")return Gm(e);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,s;if(r)i=eD,s=r;else{const d=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=$9,s=d}if(!s)return Gm(e);const l=i[e],u=s[1].split(",").map(tD);return typeof l=="function"?l(u):u[l]}const nD=(n,e)=>{const{transform:r="none"}=getComputedStyle(n);return Hm(r,e)};function tD(n){return parseFloat(n.trim())}const ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],io=new Set(ao),T2=n=>n===ro||n===Ve,rD=new Set(["x","y","z"]),aD=ao.filter(n=>!rD.has(n));function iD(n){const e=[];return aD.forEach(r=>{const i=n.getValue(r);i!==void 0&&(e.push([r,i.get()]),i.set(r.startsWith("scale")?1:0))}),e}const Ri={width:({x:n},{paddingLeft:e="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(e)-parseFloat(r),height:({y:n},{paddingTop:e="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(e)-parseFloat(r),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Hm(e,"x"),y:(n,{transform:e})=>Hm(e,"y")};Ri.translateX=Ri.x;Ri.translateY=Ri.y;const ki=new Set;let Im=!1,Um=!1,Jm=!1;function N5(){if(Um){const n=Array.from(ki).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),r=new Map;e.forEach(i=>{const s=iD(i);s.length&&(r.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=r.get(i);s&&s.forEach(([l,u])=>{i.getValue(l)?.set(u)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Um=!1,Im=!1,ki.forEach(n=>n.complete(Jm)),ki.clear()}function R5(){ki.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Um=!0)})}function sD(){Jm=!0,R5(),N5(),Jm=!1}class Wp{constructor(e,r,i,s,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=r,this.name=i,this.motionValue=s,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(ki.add(this),Im||(Im=!0,Rn.read(R5),Rn.resolveKeyframes(N5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:r,element:i,motionValue:s}=this;if(e[0]===null){const l=s?.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(i&&r){const d=i.readValue(r,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),s&&l===void 0&&s.set(e[0])}Q9(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ki.delete(this)}cancel(){this.state==="scheduled"&&(ki.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const oD=n=>n.startsWith("--");function lD(n,e,r){oD(e)?n.style.setProperty(e,r):n.style[e]=r}const cD=zp(()=>window.ScrollTimeline!==void 0),uD={};function dD(n,e){const r=zp(n);return()=>uD[e]??r()}const k5=dD(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ul=([n,e,r,i])=>`cubic-bezier(${n}, ${e}, ${r}, ${i})`,D2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ul([0,.65,.55,1]),circOut:ul([.55,0,1,.45]),backIn:ul([.31,.01,.66,-.59]),backOut:ul([.33,1.53,.69,.99])};function P5(n,e){if(n)return typeof n=="function"?k5()?T5(n,e):"ease-out":g5(n)?ul(n):Array.isArray(n)?n.map(r=>P5(r,e)||D2.easeOut):D2[n]}function fD(n,e,r,{delay:i=0,duration:s=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:f}={},p=void 0){const m={[e]:r};f&&(m.offset=f);const y=P5(d,s);Array.isArray(y)&&(m.easing=y);const v={delay:i,duration:s,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return p&&(v.pseudoElement=p),n.animate(m,v)}function B5(n){return typeof n=="function"&&"applyToOptions"in n}function hD({type:n,...e}){return B5(n)&&k5()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class mD extends Yp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:r,name:i,keyframes:s,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:f}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,Op(typeof e.type!="string");const p=hD(e);this.animation=fD(r,i,s,p,l),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=Kp(s,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(m):lD(r,i,m),this.animation.cancel()}f?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return ir(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+ir(e)}get time(){return ir(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=zr(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&cD()?(this.animation.timeline=e,or):r(this)}}const L5={anticipate:f5,backInOut:d5,circInOut:m5};function pD(n){return n in L5}function gD(n){typeof n.ease=="string"&&pD(n.ease)&&(n.ease=L5[n.ease])}const E2=10;class yD extends mD{constructor(e){gD(e),E5(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:r,onUpdate:i,onComplete:s,element:l,...u}=this.options;if(!r)return;if(e!==void 0){r.set(e);return}const d=new Zp({...u,autoplay:!1}),f=zr(this.finishedTime??this.time);r.setWithVelocity(d.sample(f-E2).value,d.sample(f).value,E2),d.stop()}}const N2=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Xa.test(n)||n==="0")&&!n.startsWith("url("));function vD(n){const e=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==e)return!0}function bD(n,e,r,i){const s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=N2(s,e),d=N2(l,e);return!u||!d?!1:vD(n)||(r==="spring"||B5(r))&&i}function qm(n){n.duration=0,n.type="keyframes"}const xD=new Set(["opacity","clipPath","filter","transform"]),SD=zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function MD(n){const{motionValue:e,name:r,repeatDelay:i,repeatType:s,damping:l,type:u}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:p}=e.owner.getProps();return SD()&&r&&xD.has(r)&&(r!=="transform"||!p)&&!f&&!i&&s!=="mirror"&&l!==0&&u!=="inertia"}const CD=40;class AD extends Yp{constructor({autoplay:e=!0,delay:r=0,type:i="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:f,motionValue:p,element:m,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=_t.now();const v={autoplay:e,delay:r,type:i,repeat:s,repeatDelay:l,repeatType:u,name:f,motionValue:p,element:m,...y},x=m?.KeyframeResolver||Wp;this.keyframeResolver=new x(d,(A,S,N)=>this.onKeyframesResolved(A,S,v,!N),f,p,m),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,r,i,s){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:f,isHandoff:p,onUpdate:m}=i;this.resolvedAt=_t.now(),bD(e,l,u,d)||((da.instantAnimations||!f)&&m?.(Kp(e,i,r)),e[0]=e[e.length-1],qm(i),i.repeat=0);const v={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>CD?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...i,keyframes:e},x=!p&&MD(v)?new yD({...v,element:v.motionValue.owner.current}):new Zp(v);x.finished.then(()=>this.notifyFinished()).catch(or),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,r){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),sD()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const wD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TD(n){const e=wD.exec(n);if(!e)return[,];const[,r,i,s]=e;return[`--${r??i}`,s]}function _5(n,e,r=1){const[i,s]=TD(n);if(!i)return;const l=window.getComputedStyle(e).getPropertyValue(i);if(l){const u=l.trim();return r5(u)?parseFloat(u):u}return Hp(s)?_5(s,e,r+1):s}function Xp(n,e){return n?.[e]??n?.default??n}const O5=new Set(["width","height","top","left","right","bottom",...ao]),DD={test:n=>n==="auto",parse:n=>n},z5=n=>e=>e.test(n),j5=[ro,Ve,jr,Ga,v9,y9,DD],R2=n=>j5.find(z5(n));function ED(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||i5(n):!0}const ND=new Set(["brightness","contrast","saturate","opacity"]);function RD(n){const[e,r]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=r.match(Ip)||[];if(!i)return n;const s=r.replace(i,"");let l=ND.has(e)?1:0;return i!==r&&(l*=100),e+"("+l+s+")"}const kD=/\b([a-z-]*)\(.*?\)/gu,Km={...Xa,getAnimatableNone:n=>{const e=n.match(kD);return e?e.map(RD).join(" "):n}},k2={...ro,transform:Math.round},PD={rotate:Ga,rotateX:Ga,rotateY:Ga,rotateZ:Ga,scale:du,scaleX:du,scaleY:du,scaleZ:du,skew:Ga,skewX:Ga,skewY:Ga,distance:Ve,translateX:Ve,translateY:Ve,translateZ:Ve,x:Ve,y:Ve,z:Ve,perspective:Ve,transformPerspective:Ve,opacity:Ml,originX:v2,originY:v2,originZ:Ve},Qp={borderWidth:Ve,borderTopWidth:Ve,borderRightWidth:Ve,borderBottomWidth:Ve,borderLeftWidth:Ve,borderRadius:Ve,radius:Ve,borderTopLeftRadius:Ve,borderTopRightRadius:Ve,borderBottomRightRadius:Ve,borderBottomLeftRadius:Ve,width:Ve,maxWidth:Ve,height:Ve,maxHeight:Ve,top:Ve,right:Ve,bottom:Ve,left:Ve,padding:Ve,paddingTop:Ve,paddingRight:Ve,paddingBottom:Ve,paddingLeft:Ve,margin:Ve,marginTop:Ve,marginRight:Ve,marginBottom:Ve,marginLeft:Ve,backgroundPositionX:Ve,backgroundPositionY:Ve,...PD,zIndex:k2,fillOpacity:Ml,strokeOpacity:Ml,numOctaves:k2},BD={...Qp,color:et,backgroundColor:et,outlineColor:et,fill:et,stroke:et,borderColor:et,borderTopColor:et,borderRightColor:et,borderBottomColor:et,borderLeftColor:et,filter:Km,WebkitFilter:Km},V5=n=>BD[n];function F5(n,e){let r=V5(n);return r!==Km&&(r=Xa),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const LD=new Set(["auto","none","0"]);function _D(n,e,r){let i=0,s;for(;i<n.length&&!s;){const l=n[i];typeof l=="string"&&!LD.has(l)&&Cl(l).values.length&&(s=n[i]),i++}if(s&&r)for(const l of e)n[l]=F5(r,s)}class OD extends Wp{constructor(e,r,i,s,l){super(e,r,i,s,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:r,name:i}=this;if(!r||!r.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let p=e[f];if(typeof p=="string"&&(p=p.trim(),Hp(p))){const m=_5(p,r.current);m!==void 0&&(e[f]=m),f===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!O5.has(i)||e.length!==2)return;const[s,l]=e,u=R2(s),d=R2(l);if(u!==d)if(T2(u)&&T2(d))for(let f=0;f<e.length;f++){const p=e[f];typeof p=="string"&&(e[f]=parseFloat(p))}else Ri[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:r}=this,i=[];for(let s=0;s<e.length;s++)(e[s]===null||ED(e[s]))&&i.push(s);i.length&&_D(e,i,r)}measureInitialState(){const{element:e,unresolvedKeyframes:r,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ri[i](e.measureViewportBox(),window.getComputedStyle(e.current)),r[0]=this.measuredOrigin;const s=r[r.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){const{element:e,name:r,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const s=e.getValue(r);s&&s.jump(this.measuredOrigin,!1);const l=i.length-1,u=i[l];i[l]=Ri[r](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([d,f])=>{e.getValue(d).set(f)}),this.resolveNoneKeyframes()}}function zD(n,e,r){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const s=r?.[n]??i.querySelectorAll(n);return s?Array.from(s):[]}return Array.from(n)}const G5=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function H5(n){return a5(n)&&"offsetHeight"in n}const P2=30,jD=n=>!isNaN(parseFloat(n));class VD{constructor(e,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const s=_t.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=r.owner}setCurrent(e){this.current=e,this.updatedAt=_t.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=jD(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new jp);const i=this.events[e].add(r);return e==="change"?()=>{i(),Rn.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,r,i){this.set(r),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,r=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=_t.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>P2)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,P2);return s5(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(e){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Us(n,e){return new VD(n,e)}const{schedule:$p}=y5(queueMicrotask,!1),vr={x:!1,y:!1};function I5(){return vr.x||vr.y}function FD(n){return n==="x"||n==="y"?vr[n]?null:(vr[n]=!0,()=>{vr[n]=!1}):vr.x||vr.y?null:(vr.x=vr.y=!0,()=>{vr.x=vr.y=!1})}function U5(n,e){const r=zD(n),i=new AbortController,s={passive:!0,...e,signal:i.signal};return[r,s,()=>i.abort()]}function B2(n){return!(n.pointerType==="touch"||I5())}function GD(n,e,r={}){const[i,s,l]=U5(n,r),u=d=>{if(!B2(d))return;const{target:f}=d,p=e(f,d);if(typeof p!="function"||!f)return;const m=y=>{B2(y)&&(p(y),f.removeEventListener("pointerleave",m))};f.addEventListener("pointerleave",m,s)};return i.forEach(d=>{d.addEventListener("pointerenter",u,s)}),l}const J5=(n,e)=>e?n===e?!0:J5(n,e.parentElement):!1,eg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,HD=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ID(n){return HD.has(n.tagName)||n.tabIndex!==-1}const bu=new WeakSet;function L2(n){return e=>{e.key==="Enter"&&n(e)}}function am(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const UD=(n,e)=>{const r=n.currentTarget;if(!r)return;const i=L2(()=>{if(bu.has(r))return;am(r,"down");const s=L2(()=>{am(r,"up")}),l=()=>am(r,"cancel");r.addEventListener("keyup",s,e),r.addEventListener("blur",l,e)});r.addEventListener("keydown",i,e),r.addEventListener("blur",()=>r.removeEventListener("keydown",i),e)};function _2(n){return eg(n)&&!I5()}function JD(n,e,r={}){const[i,s,l]=U5(n,r),u=d=>{const f=d.currentTarget;if(!_2(d))return;bu.add(f);const p=e(f,d),m=(x,A)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),bu.has(f)&&bu.delete(f),_2(x)&&typeof p=="function"&&p(x,{success:A})},y=x=>{m(x,f===window||f===document||r.useGlobalTarget||J5(f,x.target))},v=x=>{m(x,!1)};window.addEventListener("pointerup",y,s),window.addEventListener("pointercancel",v,s)};return i.forEach(d=>{(r.useGlobalTarget?window:d).addEventListener("pointerdown",u,s),H5(d)&&(d.addEventListener("focus",p=>UD(p,s)),!ID(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function q5(n){return a5(n)&&"ownerSVGElement"in n}function qD(n){return q5(n)&&n.tagName==="svg"}const xt=n=>!!(n&&n.getVelocity),KD=[...j5,et,Xa],YD=n=>KD.find(z5(n)),ng=C.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function O2(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function ZD(...n){return e=>{let r=!1;const i=n.map(s=>{const l=O2(s,e);return!r&&typeof l=="function"&&(r=!0),l});if(r)return()=>{for(let s=0;s<i.length;s++){const l=i[s];typeof l=="function"?l():O2(n[s],null)}}}}function WD(...n){return C.useCallback(ZD(...n),n)}class XD extends C.Component{getSnapshotBeforeUpdate(e){const r=this.props.childRef.current;if(r&&e.isPresent&&!this.props.isPresent){const i=r.offsetParent,s=H5(i)&&i.offsetWidth||0,l=this.props.sizeRef.current;l.height=r.offsetHeight||0,l.width=r.offsetWidth||0,l.top=r.offsetTop,l.left=r.offsetLeft,l.right=s-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function QD({children:n,isPresent:e,anchorX:r,root:i}){const s=C.useId(),l=C.useRef(null),u=C.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=C.useContext(ng),f=WD(l,n?.ref);return C.useInsertionEffect(()=>{const{width:p,height:m,top:y,left:v,right:x}=u.current;if(e||!l.current||!p||!m)return;const A=r==="left"?`left: ${v}`:`right: ${x}`;l.current.dataset.motionPopId=s;const S=document.createElement("style");d&&(S.nonce=d);const N=i??document.head;return N.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${A}px !important;
            top: ${y}px !important;
          }
        `),()=>{N.contains(S)&&N.removeChild(S)}},[e]),b.jsx(XD,{isPresent:e,childRef:l,sizeRef:u,children:C.cloneElement(n,{ref:f})})}const $D=({children:n,initial:e,isPresent:r,onExitComplete:i,custom:s,presenceAffectsLayout:l,mode:u,anchorX:d,root:f})=>{const p=Pp(eE),m=C.useId();let y=!0,v=C.useMemo(()=>(y=!1,{id:m,initial:e,isPresent:r,custom:s,onExitComplete:x=>{p.set(x,!0);for(const A of p.values())if(!A)return;i&&i()},register:x=>(p.set(x,!1),()=>p.delete(x))}),[r,p,i]);return l&&y&&(v={...v}),C.useMemo(()=>{p.forEach((x,A)=>p.set(A,!1))},[r]),C.useEffect(()=>{!r&&!p.size&&i&&i()},[r]),u==="popLayout"&&(n=b.jsx(QD,{isPresent:r,anchorX:d,root:f,children:n})),b.jsx(fd.Provider,{value:v,children:n})};function eE(){return new Map}function K5(n=!0){const e=C.useContext(fd);if(e===null)return[!0,null];const{isPresent:r,onExitComplete:i,register:s}=e,l=C.useId();C.useEffect(()=>{if(n)return s(l)},[n]);const u=C.useCallback(()=>n&&i&&i(l),[l,i,n]);return!r&&i?[!1,u]:[!0]}const fu=n=>n.key||"";function z2(n){const e=[];return C.Children.forEach(n,r=>{C.isValidElement(r)&&e.push(r)}),e}const xu=({children:n,custom:e,initial:r=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:l="sync",propagate:u=!1,anchorX:d="left",root:f})=>{const[p,m]=K5(u),y=C.useMemo(()=>z2(n),[n]),v=u&&!p?[]:y.map(fu),x=C.useRef(!0),A=C.useRef(y),S=Pp(()=>new Map),[N,w]=C.useState(y),[R,L]=C.useState(y);t5(()=>{x.current=!1,A.current=y;for(let _=0;_<R.length;_++){const O=fu(R[_]);v.includes(O)?S.delete(O):S.get(O)!==!0&&S.set(O,!1)}},[R,v.length,v.join("-")]);const z=[];if(y!==N){let _=[...y];for(let O=0;O<R.length;O++){const E=R[O],k=fu(E);v.includes(k)||(_.splice(O,0,E),z.push(E))}return l==="wait"&&z.length&&(_=z),L(z2(_)),w(y),null}const{forceRender:G}=C.useContext(kp);return b.jsx(b.Fragment,{children:R.map(_=>{const O=fu(_),E=u&&!p?!1:y===R||v.includes(O),k=()=>{if(S.has(O))S.set(O,!0);else return;let j=!0;S.forEach(V=>{V||(j=!1)}),j&&(G?.(),L(A.current),u&&m?.(),i&&i())};return b.jsx($D,{isPresent:E,initial:!x.current||r?void 0:!1,custom:e,presenceAffectsLayout:s,mode:l,root:f,onExitComplete:E?void 0:k,anchorX:d,children:_},O)})})},Y5=C.createContext({strict:!1}),j2={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Js={};for(const n in j2)Js[n]={isEnabled:e=>j2[n].some(r=>!!e[r])};function nE(n){for(const e in n)Js[e]={...Js[e],...n[e]}}const tE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _u(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||tE.has(n)}let Z5=n=>!_u(n);function rE(n){typeof n=="function"&&(Z5=e=>e.startsWith("on")?!_u(e):n(e))}try{rE(require("@emotion/is-prop-valid").default)}catch{}function aE(n,e,r){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(Z5(s)||r===!0&&_u(s)||!e&&!_u(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}const hd=C.createContext({});function md(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Al(n){return typeof n=="string"||Array.isArray(n)}const tg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rg=["initial",...tg];function pd(n){return md(n.animate)||rg.some(e=>Al(n[e]))}function W5(n){return!!(pd(n)||n.variants)}function iE(n,e){if(pd(n)){const{initial:r,animate:i}=n;return{initial:r===!1||Al(r)?r:void 0,animate:Al(i)?i:void 0}}return n.inherit!==!1?e:{}}function sE(n){const{initial:e,animate:r}=iE(n,C.useContext(hd));return C.useMemo(()=>({initial:e,animate:r}),[V2(e),V2(r)])}function V2(n){return Array.isArray(n)?n.join(" "):n}const wl={};function oE(n){for(const e in n)wl[e]=n[e],Gp(e)&&(wl[e].isCSSVariable=!0)}function X5(n,{layout:e,layoutId:r}){return io.has(n)||n.startsWith("origin")||(e||r!==void 0)&&(!!wl[n]||n==="opacity")}const lE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cE=ao.length;function uE(n,e,r){let i="",s=!0;for(let l=0;l<cE;l++){const u=ao[l],d=n[u];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(u.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||r){const p=G5(d,Qp[u]);if(!f){s=!1;const m=lE[u]||u;i+=`${m}(${p}) `}r&&(e[u]=p)}}return i=i.trim(),r?i=r(e,s?"":i):s&&(i="none"),i}function ag(n,e,r){const{style:i,vars:s,transformOrigin:l}=n;let u=!1,d=!1;for(const f in e){const p=e[f];if(io.has(f)){u=!0;continue}else if(Gp(f)){s[f]=p;continue}else{const m=G5(p,Qp[f]);f.startsWith("origin")?(d=!0,l[f]=m):i[f]=m}}if(e.transform||(u||r?i.transform=uE(e,n.transform,r):i.transform&&(i.transform="none")),d){const{originX:f="50%",originY:p="50%",originZ:m=0}=l;i.transformOrigin=`${f} ${p} ${m}`}}const ig=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Q5(n,e,r){for(const i in e)!xt(e[i])&&!X5(i,r)&&(n[i]=e[i])}function dE({transformTemplate:n},e){return C.useMemo(()=>{const r=ig();return ag(r,e,n),Object.assign({},r.vars,r.style)},[e])}function fE(n,e){const r=n.style||{},i={};return Q5(i,r,n),Object.assign(i,dE(n,e)),i}function hE(n,e){const r={},i=fE(n,e);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=i,r}const mE={offset:"stroke-dashoffset",array:"stroke-dasharray"},pE={offset:"strokeDashoffset",array:"strokeDasharray"};function gE(n,e,r=1,i=0,s=!0){n.pathLength=1;const l=s?mE:pE;n[l.offset]=Ve.transform(-i);const u=Ve.transform(e),d=Ve.transform(r);n[l.array]=`${u} ${d}`}function $5(n,{attrX:e,attrY:r,attrScale:i,pathLength:s,pathSpacing:l=1,pathOffset:u=0,...d},f,p,m){if(ag(n,d,p),f){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:v}=n;y.transform&&(v.transform=y.transform,delete y.transform),(v.transform||y.transformOrigin)&&(v.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),v.transform&&(v.transformBox=m?.transformBox??"fill-box",delete y.transformBox),e!==void 0&&(y.x=e),r!==void 0&&(y.y=r),i!==void 0&&(y.scale=i),s!==void 0&&gE(y,s,l,u,!1)}const ex=()=>({...ig(),attrs:{}}),nx=n=>typeof n=="string"&&n.toLowerCase()==="svg";function yE(n,e,r,i){const s=C.useMemo(()=>{const l=ex();return $5(l,e,nx(i),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};Q5(l,n.style,n),s.style={...l,...s.style}}return s}const vE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sg(n){return typeof n!="string"||n.includes("-")?!1:!!(vE.indexOf(n)>-1||/[A-Z]/u.test(n))}function bE(n,e,r,{latestValues:i},s,l=!1){const d=(sg(n)?yE:hE)(e,i,s,n),f=aE(e,typeof n=="string",l),p=n!==C.Fragment?{...f,...d,ref:r}:{},{children:m}=e,y=C.useMemo(()=>xt(m)?m.get():m,[m]);return C.createElement(n,{...p,children:y})}function F2(n){const e=[{},{}];return n?.values.forEach((r,i)=>{e[0][i]=r.get(),e[1][i]=r.getVelocity()}),e}function og(n,e,r,i){if(typeof e=="function"){const[s,l]=F2(i);e=e(r!==void 0?r:n.custom,s,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[s,l]=F2(i);e=e(r!==void 0?r:n.custom,s,l)}return e}function Su(n){return xt(n)?n.get():n}function xE({scrapeMotionValuesFromProps:n,createRenderState:e},r,i,s){return{latestValues:SE(r,i,s,n),renderState:e()}}function SE(n,e,r,i){const s={},l=i(n,{});for(const v in l)s[v]=Su(l[v]);let{initial:u,animate:d}=n;const f=pd(n),p=W5(n);e&&p&&!f&&n.inherit!==!1&&(u===void 0&&(u=e.initial),d===void 0&&(d=e.animate));let m=r?r.initial===!1:!1;m=m||u===!1;const y=m?d:u;if(y&&typeof y!="boolean"&&!md(y)){const v=Array.isArray(y)?y:[y];for(let x=0;x<v.length;x++){const A=og(n,v[x]);if(A){const{transitionEnd:S,transition:N,...w}=A;for(const R in w){let L=w[R];if(Array.isArray(L)){const z=m?L.length-1:0;L=L[z]}L!==null&&(s[R]=L)}for(const R in S)s[R]=S[R]}}}return s}const tx=n=>(e,r)=>{const i=C.useContext(hd),s=C.useContext(fd),l=()=>xE(n,e,i,s);return r?l():Pp(l)};function lg(n,e,r){const{style:i}=n,s={};for(const l in i)(xt(i[l])||e.style&&xt(e.style[l])||X5(l,n)||r?.getValue(l)?.liveStyle!==void 0)&&(s[l]=i[l]);return s}const ME=tx({scrapeMotionValuesFromProps:lg,createRenderState:ig});function rx(n,e,r){const i=lg(n,e,r);for(const s in n)if(xt(n[s])||xt(e[s])){const l=ao.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[l]=n[s]}return i}const CE=tx({scrapeMotionValuesFromProps:rx,createRenderState:ex}),AE=Symbol.for("motionComponentSymbol");function Ls(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function wE(n,e,r){return C.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),r&&(typeof r=="function"?r(i):Ls(r)&&(r.current=i))},[e])}const cg=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),TE="framerAppearId",ax="data-"+cg(TE),ix=C.createContext({});function DE(n,e,r,i,s){const{visualElement:l}=C.useContext(hd),u=C.useContext(Y5),d=C.useContext(fd),f=C.useContext(ng).reducedMotion,p=C.useRef(null);i=i||u.renderer,!p.current&&i&&(p.current=i(n,{visualState:e,parent:l,props:r,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:f}));const m=p.current,y=C.useContext(ix);m&&!m.projection&&s&&(m.type==="html"||m.type==="svg")&&EE(p.current,r,s,y);const v=C.useRef(!1);C.useInsertionEffect(()=>{m&&v.current&&m.update(r,d)});const x=r[ax],A=C.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return t5(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),A.current&&m.animationState&&m.animationState.animateChanges())}),C.useEffect(()=>{m&&(!A.current&&m.animationState&&m.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),A.current=!1),m.enteringChildren=void 0)}),m}function EE(n,e,r,i){const{layoutId:s,layout:l,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:p,layoutCrossfade:m}=e;n.projection=new r(n.latestValues,e["data-framer-portal-id"]?void 0:sx(n.parent)),n.projection.setOptions({layoutId:s,layout:l,alwaysMeasureLayout:!!u||d&&Ls(d),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,crossfade:m,layoutScroll:f,layoutRoot:p})}function sx(n){if(n)return n.options.allowProjection!==!1?n.projection:sx(n.parent)}function im(n,{forwardMotionProps:e=!1}={},r,i){r&&nE(r);const s=sg(n)?CE:ME;function l(d,f){let p;const m={...C.useContext(ng),...d,layoutId:NE(d)},{isStatic:y}=m,v=sE(d),x=s(d,y);if(!y&&Bp){RE();const A=kE(m);p=A.MeasureLayout,v.visualElement=DE(n,x,m,i,A.ProjectionNode)}return b.jsxs(hd.Provider,{value:v,children:[p&&v.visualElement?b.jsx(p,{visualElement:v.visualElement,...m}):null,bE(n,d,wE(x,v.visualElement,f),x,y,e)]})}l.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const u=C.forwardRef(l);return u[AE]=n,u}function NE({layoutId:n}){const e=C.useContext(kp).id;return e&&n!==void 0?e+"-"+n:n}function RE(n,e){C.useContext(Y5).strict}function kE(n){const{drag:e,layout:r}=Js;if(!e&&!r)return{};const i={...e,...r};return{MeasureLayout:e?.isEnabled(n)||r?.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function PE(n,e){if(typeof Proxy>"u")return im;const r=new Map,i=(l,u)=>im(l,u,n,e),s=(l,u)=>i(l,u);return new Proxy(s,{get:(l,u)=>u==="create"?i:(r.has(u)||r.set(u,im(u,void 0,n,e)),r.get(u))})}function ox({top:n,left:e,right:r,bottom:i}){return{x:{min:e,max:r},y:{min:n,max:i}}}function BE({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function LE(n,e){if(!e)return n;const r=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:i.y,right:i.x}}function sm(n){return n===void 0||n===1}function Ym({scale:n,scaleX:e,scaleY:r}){return!sm(n)||!sm(e)||!sm(r)}function Ci(n){return Ym(n)||lx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function lx(n){return G2(n.x)||G2(n.y)}function G2(n){return n&&n!=="0%"}function Ou(n,e,r){const i=n-r,s=e*i;return r+s}function H2(n,e,r,i,s){return s!==void 0&&(n=Ou(n,s,i)),Ou(n,r,i)+e}function Zm(n,e=0,r=1,i,s){n.min=H2(n.min,e,r,i,s),n.max=H2(n.max,e,r,i,s)}function cx(n,{x:e,y:r}){Zm(n.x,e.translate,e.scale,e.originPoint),Zm(n.y,r.translate,r.scale,r.originPoint)}const I2=.999999999999,U2=1.0000000000001;function _E(n,e,r,i=!1){const s=r.length;if(!s)return;e.x=e.y=1;let l,u;for(let d=0;d<s;d++){l=r[d],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(i&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Os(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,cx(n,u)),i&&Ci(l.latestValues)&&Os(n,l.latestValues))}e.x<U2&&e.x>I2&&(e.x=1),e.y<U2&&e.y>I2&&(e.y=1)}function _s(n,e){n.min=n.min+e,n.max=n.max+e}function J2(n,e,r,i,s=.5){const l=Pn(n.min,n.max,s);Zm(n,e,r,l,i)}function Os(n,e){J2(n.x,e.x,e.scaleX,e.scale,e.originX),J2(n.y,e.y,e.scaleY,e.scale,e.originY)}function ux(n,e){return ox(LE(n.getBoundingClientRect(),e))}function OE(n,e,r){const i=ux(n,r),{scroll:s}=e;return s&&(_s(i.x,s.offset.x),_s(i.y,s.offset.y)),i}const q2=()=>({translate:0,scale:1,origin:0,originPoint:0}),zs=()=>({x:q2(),y:q2()}),K2=()=>({min:0,max:0}),it=()=>({x:K2(),y:K2()}),Wm={current:null},dx={current:!1};function zE(){if(dx.current=!0,!!Bp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Wm.current=n.matches;n.addEventListener("change",e),e()}else Wm.current=!1}const jE=new WeakMap;function VE(n,e,r){for(const i in e){const s=e[i],l=r[i];if(xt(s))n.addValue(i,s);else if(xt(l))n.addValue(i,Us(s,{owner:n}));else if(l!==s)if(n.hasValue(i)){const u=n.getValue(i);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=n.getStaticValue(i);n.addValue(i,Us(u!==void 0?u:s,{owner:n}))}}for(const i in r)e[i]===void 0&&n.removeValue(i);return e}const Y2=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class FE{scrapeMotionValuesFromProps(e,r,i){return{}}constructor({parent:e,props:r,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Wp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=_t.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Rn.render(this.render,!1,!0))};const{latestValues:f,renderState:p}=u;this.latestValues=f,this.baseTarget={...f},this.initialValues=r.initial?{...f}:{},this.renderState=p,this.parent=e,this.props=r,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=pd(r),this.isVariantNode=W5(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...y}=this.scrapeMotionValuesFromProps(r,{},this);for(const v in y){const x=y[v];f[v]!==void 0&&xt(x)&&x.set(f[v])}}mount(e){this.current=e,jE.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),dx.current||zE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Wm.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Wa(this.notifyUpdate),Wa(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const r=this.features[e];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,r){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=io.has(e);i&&this.onBindTransform&&this.onBindTransform();const s=r.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Rn.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,r)),this.valueSubscriptions.set(e,()=>{s(),l&&l(),r.owner&&r.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Js){const r=Js[e];if(!r)continue;const{isEnabled:i,Feature:s}=r;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):it()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let i=0;i<Y2.length;i++){const s=Y2[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l="on"+s,u=e[l];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=VE(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){const i=this.values.get(e);r!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,r),this.values.set(e,r),this.latestValues[e]=r.get())}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&r!==void 0&&(i=Us(r===null?void 0:r,{owner:this}),this.addValue(e,i)),i}readValue(e,r){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(r5(i)||i5(i))?i=parseFloat(i):!YD(i)&&Xa.test(r)&&(i=F5(e,r)),this.setBaseTarget(e,xt(i)?i.get():i)),xt(i)?i.get():i}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const l=og(this.props,r,this.presenceContext?.custom);l&&(i=l[e])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!xt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new jp),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}scheduleRenderMicrotask(){$p.render(this.render)}}class fx extends FE{constructor(){super(...arguments),this.KeyframeResolver=OD}sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:i}){delete r[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;xt(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function hx(n,{style:e,vars:r},i,s){const l=n.style;let u;for(u in e)l[u]=e[u];s?.applyProjectionStyles(l,i);for(u in r)l.setProperty(u,r[u])}function GE(n){return window.getComputedStyle(n)}class HE extends fx{constructor(){super(...arguments),this.type="html",this.renderInstance=hx}readValueFromInstance(e,r){if(io.has(r))return this.projection?.isProjecting?Gm(r):nD(e,r);{const i=GE(e),s=(Gp(r)?i.getPropertyValue(r):i[r])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:r}){return ux(e,r)}build(e,r,i){ag(e,r,i.transformTemplate)}scrapeMotionValuesFromProps(e,r,i){return lg(e,r,i)}}const mx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function IE(n,e,r,i){hx(n,e,void 0,i);for(const s in e.attrs)n.setAttribute(mx.has(s)?s:cg(s),e.attrs[s])}class UE extends fx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=it}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(io.has(r)){const i=V5(r);return i&&i.default||0}return r=mx.has(r)?r:cg(r),e.getAttribute(r)}scrapeMotionValuesFromProps(e,r,i){return rx(e,r,i)}build(e,r,i){$5(e,r,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,r,i,s){IE(e,r,i,s)}mount(e){this.isSVGTag=nx(e.tagName),super.mount(e)}}const JE=(n,e)=>sg(n)?new UE(e):new HE(e,{allowProjection:n!==C.Fragment});function Hs(n,e,r){const i=n.getProps();return og(i,e,r!==void 0?r:i.custom,n)}const Xm=n=>Array.isArray(n);function qE(n,e,r){n.hasValue(e)?n.getValue(e).set(r):n.addValue(e,Us(r))}function KE(n){return Xm(n)?n[n.length-1]||0:n}function YE(n,e){const r=Hs(n,e);let{transitionEnd:i={},transition:s={},...l}=r||{};l={...l,...i};for(const u in l){const d=KE(l[u]);qE(n,u,d)}}function ZE(n){return!!(xt(n)&&n.add)}function Qm(n,e){const r=n.getValue("willChange");if(ZE(r))return r.add(e);if(!r&&da.WillChange){const i=new da.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function px(n){return n.props[ax]}const WE=n=>n!==null;function XE(n,{repeat:e,repeatType:r="loop"},i){const s=n.filter(WE),l=e&&r!=="loop"&&e%2===1?0:s.length-1;return s[l]}const QE={type:"spring",stiffness:500,damping:25,restSpeed:10},$E=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),eN={type:"keyframes",duration:.8},nN={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},tN=(n,{keyframes:e})=>e.length>2?eN:io.has(n)?n.startsWith("scale")?$E(e[1]):QE:nN;function rN({when:n,delay:e,delayChildren:r,staggerChildren:i,staggerDirection:s,repeat:l,repeatType:u,repeatDelay:d,from:f,elapsed:p,...m}){return!!Object.keys(m).length}const ug=(n,e,r,i={},s,l)=>u=>{const d=Xp(i,n)||{},f=d.delay||i.delay||0;let{elapsed:p=0}=i;p=p-zr(f);const m={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-p,onUpdate:v=>{e.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:n,motionValue:e,element:l?void 0:s};rN(d)||Object.assign(m,tN(n,m)),m.duration&&(m.duration=zr(m.duration)),m.repeatDelay&&(m.repeatDelay=zr(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(qm(m),m.delay===0&&(y=!0)),(da.instantAnimations||da.skipAnimations)&&(y=!0,qm(m),m.delay=0),m.allowFlatten=!d.type&&!d.ease,y&&!l&&e.get()!==void 0){const v=XE(m.keyframes,d);if(v!==void 0){Rn.update(()=>{m.onUpdate(v),m.onComplete()});return}}return d.isSync?new Zp(m):new AD(m)};function aN({protectedKeys:n,needsAnimating:e},r){const i=n.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,i}function gx(n,e,{delay:r=0,transitionOverride:i,type:s}={}){let{transition:l=n.getDefaultTransition(),transitionEnd:u,...d}=e;i&&(l=i);const f=[],p=s&&n.animationState&&n.animationState.getState()[s];for(const m in d){const y=n.getValue(m,n.latestValues[m]??null),v=d[m];if(v===void 0||p&&aN(p,m))continue;const x={delay:r,...Xp(l||{},m)},A=y.get();if(A!==void 0&&!y.isAnimating&&!Array.isArray(v)&&v===A&&!x.velocity)continue;let S=!1;if(window.MotionHandoffAnimation){const w=px(n);if(w){const R=window.MotionHandoffAnimation(w,m,Rn);R!==null&&(x.startTime=R,S=!0)}}Qm(n,m),y.start(ug(m,y,v,n.shouldReduceMotion&&O5.has(m)?{type:!1}:x,n,S));const N=y.animation;N&&f.push(N)}return u&&Promise.all(f).then(()=>{Rn.update(()=>{u&&YE(n,u)})}),f}function yx(n,e,r,i=0,s=1){const l=Array.from(n).sort((p,m)=>p.sortNodePosition(m)).indexOf(e),u=n.size,d=(u-1)*i;return typeof r=="function"?r(l,u):s===1?l*i:d-l*i}function $m(n,e,r={}){const i=Hs(n,e,r.type==="exit"?n.presenceContext?.custom:void 0);let{transition:s=n.getDefaultTransition()||{}}=i||{};r.transitionOverride&&(s=r.transitionOverride);const l=i?()=>Promise.all(gx(n,i,r)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(f=0)=>{const{delayChildren:p=0,staggerChildren:m,staggerDirection:y}=s;return iN(n,e,f,p,m,y,r)}:()=>Promise.resolve(),{when:d}=s;if(d){const[f,p]=d==="beforeChildren"?[l,u]:[u,l];return f().then(()=>p())}else return Promise.all([l(),u(r.delay)])}function iN(n,e,r=0,i=0,s=0,l=1,u){const d=[];for(const f of n.variantChildren)f.notify("AnimationStart",e),d.push($m(f,e,{...u,delay:r+(typeof i=="function"?0:i)+yx(n.variantChildren,f,i,s,l)}).then(()=>f.notify("AnimationComplete",e)));return Promise.all(d)}function sN(n,e,r={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(l=>$m(n,l,r));i=Promise.all(s)}else if(typeof e=="string")i=$m(n,e,r);else{const s=typeof e=="function"?Hs(n,e,r.custom):e;i=Promise.all(gx(n,s,r))}return i.then(()=>{n.notify("AnimationComplete",e)})}function vx(n,e){if(!Array.isArray(e))return!1;const r=e.length;if(r!==n.length)return!1;for(let i=0;i<r;i++)if(e[i]!==n[i])return!1;return!0}const oN=rg.length;function bx(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?bx(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const e={};for(let r=0;r<oN;r++){const i=rg[r],s=n.props[i];(Al(s)||s===!1)&&(e[i]=s)}return e}const lN=[...tg].reverse(),cN=tg.length;function uN(n){return e=>Promise.all(e.map(({animation:r,options:i})=>sN(n,r,i)))}function dN(n){let e=uN(n),r=Z2(),i=!0;const s=f=>(p,m)=>{const y=Hs(n,m,f==="exit"?n.presenceContext?.custom:void 0);if(y){const{transition:v,transitionEnd:x,...A}=y;p={...p,...A,...x}}return p};function l(f){e=f(n)}function u(f){const{props:p}=n,m=bx(n.parent)||{},y=[],v=new Set;let x={},A=1/0;for(let N=0;N<cN;N++){const w=lN[N],R=r[w],L=p[w]!==void 0?p[w]:m[w],z=Al(L),G=w===f?R.isActive:null;G===!1&&(A=N);let _=L===m[w]&&L!==p[w]&&z;if(_&&i&&n.manuallyAnimateOnMount&&(_=!1),R.protectedKeys={...x},!R.isActive&&G===null||!L&&!R.prevProp||md(L)||typeof L=="boolean")continue;const O=fN(R.prevProp,L);let E=O||w===f&&R.isActive&&!_&&z||N>A&&z,k=!1;const j=Array.isArray(L)?L:[L];let V=j.reduce(s(w),{});G===!1&&(V={});const{prevResolvedValues:F={}}=R,U={...F,...V},H=D=>{E=!0,v.has(D)&&(k=!0,v.delete(D)),R.needsAnimating[D]=!0;const I=n.getValue(D);I&&(I.liveStyle=!1)};for(const D in U){const I=V[D],q=F[D];if(x.hasOwnProperty(D))continue;let $=!1;Xm(I)&&Xm(q)?$=!vx(I,q):$=I!==q,$?I!=null?H(D):v.add(D):I!==void 0&&v.has(D)?H(D):R.protectedKeys[D]=!0}R.prevProp=L,R.prevResolvedValues=V,R.isActive&&(x={...x,...V}),i&&n.blockInitialAnimation&&(E=!1);const Y=_&&O;E&&(!Y||k)&&y.push(...j.map(D=>{const I={type:w};if(typeof D=="string"&&i&&!Y&&n.manuallyAnimateOnMount&&n.parent){const{parent:q}=n,$=Hs(q,D);if(q.enteringChildren&&$){const{delayChildren:P}=$.transition||{};I.delay=yx(q.enteringChildren,n,P)}}return{animation:D,options:I}}))}if(v.size){const N={};if(typeof p.initial!="boolean"){const w=Hs(n,Array.isArray(p.initial)?p.initial[0]:p.initial);w&&w.transition&&(N.transition=w.transition)}v.forEach(w=>{const R=n.getBaseTarget(w),L=n.getValue(w);L&&(L.liveStyle=!0),N[w]=R??null}),y.push({animation:N})}let S=!!y.length;return i&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(y):Promise.resolve()}function d(f,p){if(r[f].isActive===p)return Promise.resolve();n.variantChildren?.forEach(y=>y.animationState?.setActive(f,p)),r[f].isActive=p;const m=u(f);for(const y in r)r[y].protectedKeys={};return m}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>r,reset:()=>{r=Z2()}}}function fN(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!vx(e,n):!1}function Mi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Z2(){return{animate:Mi(!0),whileInView:Mi(),whileHover:Mi(),whileTap:Mi(),whileDrag:Mi(),whileFocus:Mi(),exit:Mi()}}class ri{constructor(e){this.isMounted=!1,this.node=e}update(){}}class hN extends ri{constructor(e){super(e),e.animationState||(e.animationState=dN(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();md(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:r}=this.node.prevProps||{};e!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let mN=0;class pN extends ri{constructor(){super(...arguments),this.id=mN++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);r&&!e&&s.then(()=>{r(this.id)})}mount(){const{register:e,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const gN={animation:{Feature:hN},exit:{Feature:pN}};function Tl(n,e,r,i={passive:!0}){return n.addEventListener(e,r,i),()=>n.removeEventListener(e,r)}function jl(n){return{point:{x:n.pageX,y:n.pageY}}}const yN=n=>e=>eg(e)&&n(e,jl(e));function pl(n,e,r,i){return Tl(n,e,yN(r),i)}const xx=1e-4,vN=1-xx,bN=1+xx,Sx=.01,xN=0-Sx,SN=0+Sx;function wt(n){return n.max-n.min}function MN(n,e,r){return Math.abs(n-e)<=r}function W2(n,e,r,i=.5){n.origin=i,n.originPoint=Pn(e.min,e.max,n.origin),n.scale=wt(r)/wt(e),n.translate=Pn(r.min,r.max,n.origin)-n.originPoint,(n.scale>=vN&&n.scale<=bN||isNaN(n.scale))&&(n.scale=1),(n.translate>=xN&&n.translate<=SN||isNaN(n.translate))&&(n.translate=0)}function gl(n,e,r,i){W2(n.x,e.x,r.x,i?i.originX:void 0),W2(n.y,e.y,r.y,i?i.originY:void 0)}function X2(n,e,r){n.min=r.min+e.min,n.max=n.min+wt(e)}function CN(n,e,r){X2(n.x,e.x,r.x),X2(n.y,e.y,r.y)}function Q2(n,e,r){n.min=e.min-r.min,n.max=n.min+wt(e)}function zu(n,e,r){Q2(n.x,e.x,r.x),Q2(n.y,e.y,r.y)}function ar(n){return[n("x"),n("y")]}const Mx=({current:n})=>n?n.ownerDocument.defaultView:null,$2=(n,e)=>Math.abs(n-e);function AN(n,e){const r=$2(n.x,e.x),i=$2(n.y,e.y);return Math.sqrt(r**2+i**2)}class Cx{constructor(e,r,{transformPagePoint:i,contextWindow:s=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=lm(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,A=AN(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!A)return;const{point:S}=v,{timestamp:N}=gt;this.history.push({...S,timestamp:N});const{onStart:w,onMove:R}=this.handlers;x||(w&&w(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=om(x,this.transformPagePoint),Rn.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:A,onSessionEnd:S,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=lm(v.type==="pointercancel"?this.lastMoveEventInfo:om(x,this.transformPagePoint),this.history);this.startEvent&&A&&A(v,w),S&&S(v,w)},!eg(e))return;this.dragSnapToOrigin=l,this.handlers=r,this.transformPagePoint=i,this.distanceThreshold=u,this.contextWindow=s||window;const d=jl(e),f=om(d,this.transformPagePoint),{point:p}=f,{timestamp:m}=gt;this.history=[{...p,timestamp:m}];const{onSessionStart:y}=r;y&&y(e,lm(f,this.history)),this.removeListeners=_l(pl(this.contextWindow,"pointermove",this.handlePointerMove),pl(this.contextWindow,"pointerup",this.handlePointerUp),pl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Wa(this.updatePoint)}}function om(n,e){return e?{point:e(n.point)}:n}function eb(n,e){return{x:n.x-e.x,y:n.y-e.y}}function lm({point:n},e){return{point:n,delta:eb(n,Ax(e)),offset:eb(n,wN(e)),velocity:TN(e,.1)}}function wN(n){return n[0]}function Ax(n){return n[n.length-1]}function TN(n,e){if(n.length<2)return{x:0,y:0};let r=n.length-1,i=null;const s=Ax(n);for(;r>=0&&(i=n[r],!(s.timestamp-i.timestamp>zr(e)));)r--;if(!i)return{x:0,y:0};const l=ir(s.timestamp-i.timestamp);if(l===0)return{x:0,y:0};const u={x:(s.x-i.x)/l,y:(s.y-i.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function DN(n,{min:e,max:r},i){return e!==void 0&&n<e?n=i?Pn(e,n,i.min):Math.max(n,e):r!==void 0&&n>r&&(n=i?Pn(r,n,i.max):Math.min(n,r)),n}function nb(n,e,r){return{min:e!==void 0?n.min+e:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function EN(n,{top:e,left:r,bottom:i,right:s}){return{x:nb(n.x,r,s),y:nb(n.y,e,i)}}function tb(n,e){let r=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([r,i]=[i,r]),{min:r,max:i}}function NN(n,e){return{x:tb(n.x,e.x),y:tb(n.y,e.y)}}function RN(n,e){let r=.5;const i=wt(n),s=wt(e);return s>i?r=Sl(e.min,e.max-i,n.min):i>s&&(r=Sl(n.min,n.max-s,e.min)),ua(0,1,r)}function kN(n,e){const r={};return e.min!==void 0&&(r.min=e.min-n.min),e.max!==void 0&&(r.max=e.max-n.min),r}const ep=.35;function PN(n=ep){return n===!1?n=0:n===!0&&(n=ep),{x:rb(n,"left","right"),y:rb(n,"top","bottom")}}function rb(n,e,r){return{min:ab(n,e),max:ab(n,r)}}function ab(n,e){return typeof n=="number"?n:n[e]||0}const BN=new WeakMap;class LN{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=it(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:r=!1,distanceThreshold:i}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(jl(y).point)},u=(y,v)=>{const{drag:x,dragPropagation:A,onDragStart:S}=this.getProps();if(x&&!A&&(this.openDragLock&&this.openDragLock(),this.openDragLock=FD(x),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ar(w=>{let R=this.getAxisMotionValue(w).get()||0;if(jr.test(R)){const{projection:L}=this.visualElement;if(L&&L.layout){const z=L.layout.layoutBox[w];z&&(R=wt(z)*(parseFloat(R)/100))}}this.originPoint[w]=R}),S&&Rn.postRender(()=>S(y,v)),Qm(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},d=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:A,onDirectionLock:S,onDrag:N}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:w}=v;if(A&&this.currentDirection===null){this.currentDirection=_N(w),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",v.point,w),this.updateAxis("y",v.point,w),this.visualElement.render(),N&&N(y,v)},f=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v,this.stop(y,v),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>ar(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Cx(e,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:f,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:i,contextWindow:Mx(this.visualElement)})}stop(e,r){const i=e||this.latestPointerEvent,s=r||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!s||!i)return;const{velocity:u}=s;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Rn.postRender(()=>d(i,s))}cancel(){this.isDragging=!1;const{projection:e,animationState:r}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(e,r,i){const{drag:s}=this.getProps();if(!i||!hu(e,s,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(u=DN(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){const{dragConstraints:e,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;e&&Ls(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=EN(i.layoutBox,e):this.constraints=!1,this.elastic=PN(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ar(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=kN(i.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!Ls(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=OE(i,s.root,this.visualElement.getTransformPagePoint());let u=NN(s.layout.layoutBox,l);if(r){const d=r(BE(u));this.hasMutatedConstraints=!!d,d&&(u=ox(d))}return u}startAnimation(e){const{drag:r,dragMomentum:i,dragElastic:s,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},p=ar(m=>{if(!hu(m,r,this.currentDirection))return;let y=f&&f[m]||{};u&&(y={min:0,max:0});const v=s?200:1e6,x=s?40:1e7,A={type:"inertia",velocity:i?e[m]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(m,A)});return Promise.all(p).then(d)}startAxisValueAnimation(e,r){const i=this.getAxisMotionValue(e);return Qm(this.visualElement,e),i.start(ug(e,i,0,r,this.visualElement,!1))}stopAnimation(){ar(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ar(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const r=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[r];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){ar(r=>{const{drag:i}=this.getProps();if(!hu(r,i,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(r);if(s&&s.layout){const{min:u,max:d}=s.layout.layoutBox[r];l.set(e[r]-Pn(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:r}=this.getProps(),{projection:i}=this.visualElement;if(!Ls(r)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};ar(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const f=d.get();s[u]=RN({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),ar(u=>{if(!hu(u,e,null))return;const d=this.getAxisMotionValue(u),{min:f,max:p}=this.constraints[u];d.set(Pn(f,p,s[u]))})}addListeners(){if(!this.visualElement.current)return;BN.set(this.visualElement,this);const e=this.visualElement.current,r=pl(e,"pointerdown",f=>{const{drag:p,dragListener:m=!0}=this.getProps();p&&m&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();Ls(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,l=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Rn.read(i);const u=Tl(window,"resize",()=>this.scalePositionWithinConstraints()),d=s.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:p})=>{this.isDragging&&p&&(ar(m=>{const y=this.getAxisMotionValue(m);y&&(this.originPoint[m]+=f[m].translate,y.set(y.get()+f[m].translate))}),this.visualElement.render())}));return()=>{u(),r(),l(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:u=ep,dragMomentum:d=!0}=e;return{...e,drag:r,dragDirectionLock:i,dragPropagation:s,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function hu(n,e,r){return(e===!0||e===n)&&(r===null||r===n)}function _N(n,e=10){let r=null;return Math.abs(n.y)>e?r="y":Math.abs(n.x)>e&&(r="x"),r}class ON extends ri{constructor(e){super(e),this.removeGroupControls=or,this.removeListeners=or,this.controls=new LN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||or}unmount(){this.removeGroupControls(),this.removeListeners()}}const ib=n=>(e,r)=>{n&&Rn.postRender(()=>n(e,r))};class zN extends ri{constructor(){super(...arguments),this.removePointerDownListener=or}onPointerDown(e){this.session=new Cx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Mx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:r,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ib(e),onStart:ib(r),onMove:i,onEnd:(l,u)=>{delete this.session,s&&Rn.postRender(()=>s(l,u))}}}mount(){this.removePointerDownListener=pl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Mu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function sb(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const rl={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ve.test(n))n=parseFloat(n);else return n;const r=sb(n,e.target.x),i=sb(n,e.target.y);return`${r}% ${i}%`}},jN={correct:(n,{treeScale:e,projectionDelta:r})=>{const i=n,s=Xa.parse(n);if(s.length>5)return i;const l=Xa.createTransformer(n),u=typeof s[0]!="number"?1:0,d=r.x.scale*e.x,f=r.y.scale*e.y;s[0+u]/=d,s[1+u]/=f;const p=Pn(d,f,.5);return typeof s[2+u]=="number"&&(s[2+u]/=p),typeof s[3+u]=="number"&&(s[3+u]/=p),l(s)}};let cm=!1;class VN extends C.Component{componentDidMount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:i,layoutId:s}=this.props,{projection:l}=e;oE(FN),l&&(r.group&&r.group.add(l),i&&i.register&&s&&i.register(l),cm&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Mu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:r,visualElement:i,drag:s,isPresent:l}=this.props,{projection:u}=i;return u&&(u.isPresent=l,cm=!0,s||e.layoutDependency!==r||r===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Rn.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),$p.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:i}=this.props,{projection:s}=e;cm=!0,s&&(s.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function wx(n){const[e,r]=K5(),i=C.useContext(kp);return b.jsx(VN,{...n,layoutGroup:i,switchLayoutGroup:C.useContext(ix),isPresent:e,safeToRemove:r})}const FN={borderRadius:{...rl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:rl,borderTopRightRadius:rl,borderBottomLeftRadius:rl,borderBottomRightRadius:rl,boxShadow:jN};function GN(n,e,r){const i=xt(n)?n:Us(n);return i.start(ug("",i,e,r)),i.animation}const HN=(n,e)=>n.depth-e.depth;class IN{constructor(){this.children=[],this.isDirty=!1}add(e){Lp(this.children,e),this.isDirty=!0}remove(e){_p(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(HN),this.isDirty=!1,this.children.forEach(e)}}function UN(n,e){const r=_t.now(),i=({timestamp:s})=>{const l=s-r;l>=e&&(Wa(i),n(l-e))};return Rn.setup(i,!0),()=>Wa(i)}const Tx=["TopLeft","TopRight","BottomLeft","BottomRight"],JN=Tx.length,ob=n=>typeof n=="string"?parseFloat(n):n,lb=n=>typeof n=="number"||Ve.test(n);function qN(n,e,r,i,s,l){s?(n.opacity=Pn(0,r.opacity??1,KN(i)),n.opacityExit=Pn(e.opacity??1,0,YN(i))):l&&(n.opacity=Pn(e.opacity??1,r.opacity??1,i));for(let u=0;u<JN;u++){const d=`border${Tx[u]}Radius`;let f=cb(e,d),p=cb(r,d);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||lb(f)===lb(p)?(n[d]=Math.max(Pn(ob(f),ob(p),i),0),(jr.test(p)||jr.test(f))&&(n[d]+="%")):n[d]=p}(e.rotate||r.rotate)&&(n.rotate=Pn(e.rotate||0,r.rotate||0,i))}function cb(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const KN=Dx(0,.5,h5),YN=Dx(.5,.95,or);function Dx(n,e,r){return i=>i<n?0:i>e?1:r(Sl(n,e,i))}function ub(n,e){n.min=e.min,n.max=e.max}function pr(n,e){ub(n.x,e.x),ub(n.y,e.y)}function db(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function fb(n,e,r,i,s){return n-=e,n=Ou(n,1/r,i),s!==void 0&&(n=Ou(n,1/s,i)),n}function ZN(n,e=0,r=1,i=.5,s,l=n,u=n){if(jr.test(e)&&(e=parseFloat(e),e=Pn(u.min,u.max,e/100)-u.min),typeof e!="number")return;let d=Pn(l.min,l.max,i);n===l&&(d-=e),n.min=fb(n.min,e,r,d,s),n.max=fb(n.max,e,r,d,s)}function hb(n,e,[r,i,s],l,u){ZN(n,e[r],e[i],e[s],e.scale,l,u)}const WN=["x","scaleX","originX"],XN=["y","scaleY","originY"];function mb(n,e,r,i){hb(n.x,e,WN,r?r.x:void 0,i?i.x:void 0),hb(n.y,e,XN,r?r.y:void 0,i?i.y:void 0)}function pb(n){return n.translate===0&&n.scale===1}function Ex(n){return pb(n.x)&&pb(n.y)}function gb(n,e){return n.min===e.min&&n.max===e.max}function QN(n,e){return gb(n.x,e.x)&&gb(n.y,e.y)}function yb(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Nx(n,e){return yb(n.x,e.x)&&yb(n.y,e.y)}function vb(n){return wt(n.x)/wt(n.y)}function bb(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class $N{constructor(){this.members=[]}add(e){Lp(this.members,e),e.scheduleRender()}remove(e){if(_p(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(e){const r=this.members.findIndex(s=>e===s);if(r===0)return!1;let i;for(let s=r;s>=0;s--){const l=this.members[s];if(l.isPresent!==!1){i=l;break}}return i?(this.promote(i),!0):!1}promote(e,r){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,r&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:r,resumingFrom:i}=e;r.onExitComplete&&r.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function eR(n,e,r){let i="";const s=n.x.translate/e.x,l=n.y.translate/e.y,u=r?.z||0;if((s||l||u)&&(i=`translate3d(${s}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),r){const{transformPerspective:p,rotate:m,rotateX:y,rotateY:v,skewX:x,skewY:A}=r;p&&(i=`perspective(${p}px) ${i}`),m&&(i+=`rotate(${m}deg) `),y&&(i+=`rotateX(${y}deg) `),v&&(i+=`rotateY(${v}deg) `),x&&(i+=`skewX(${x}deg) `),A&&(i+=`skewY(${A}deg) `)}const d=n.x.scale*e.x,f=n.y.scale*e.y;return(d!==1||f!==1)&&(i+=`scale(${d}, ${f})`),i||"none"}const um=["","X","Y","Z"],nR=1e3;let tR=0;function dm(n,e,r,i){const{latestValues:s}=e;s[n]&&(r[n]=s[n],e.setStaticValue(n,0),i&&(i[n]=0))}function Rx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const r=px(e);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:s,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",Rn,!(s||l))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&Rx(i)}function kx({attachResizeListener:n,defaultParent:e,measureScroll:r,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(u={},d=e?.()){this.id=tR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(iR),this.nodes.forEach(cR),this.nodes.forEach(uR),this.nodes.forEach(sR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new IN)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new jp),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const f=this.eventHandlers.get(u);f&&f.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=q5(u)&&!qD(u),this.instance=u;const{layoutId:d,layout:f,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||d)&&(this.isLayoutDirty=!0),n){let m,y=0;const v=()=>this.root.updateBlockedByResize=!1;Rn.read(()=>{y=window.innerWidth}),n(u,()=>{const x=window.innerWidth;x!==y&&(y=x,this.root.updateBlockedByResize=!0,m&&m(),m=UN(v,250),Mu.hasAnimatedSinceResize&&(Mu.hasAnimatedSinceResize=!1,this.nodes.forEach(Mb)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||f)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:y,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||p.getDefaultTransition()||pR,{onLayoutAnimationStart:S,onLayoutAnimationComplete:N}=p.getProps(),w=!this.targetLayout||!Nx(this.targetLayout,x),R=!y&&v;if(this.options.layoutRoot||this.resumeFrom||R||y&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Xp(A,"layout"),onPlay:S,onComplete:N};(p.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(m,R)}else y||Mb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Wa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dR),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Rx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xb);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Sb);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(lR),this.nodes.forEach(rR),this.nodes.forEach(aR)):this.nodes.forEach(Sb),this.clearAllSnapshots();const d=_t.now();gt.delta=ua(0,1e3/60,d-gt.timestamp),gt.timestamp=d,gt.isProcessing=!0,$h.update.process(gt),$h.preRender.process(gt),$h.render.process(gt),gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(oR),this.sharedNodes.forEach(fR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Rn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Rn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!wt(this.snapshot.measuredBox.x)&&!wt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=it(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const f=i(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!Ex(this.projectionDelta),f=this.getTransformTemplate(),p=f?f(this.latestValues,""):void 0,m=p!==this.prevTransformTemplateValue;u&&this.instance&&(d||Ci(this.latestValues)||m)&&(s(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return u&&(f=this.removeTransform(f)),gR(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return it();const d=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(yR))){const{scroll:p}=this.root;p&&(_s(d.x,p.offset.x),_s(d.y,p.offset.y))}return d}removeElementScroll(u){const d=it();if(pr(d,u),this.scroll?.wasRoot)return d;for(let f=0;f<this.path.length;f++){const p=this.path[f],{scroll:m,options:y}=p;p!==this.root&&m&&y.layoutScroll&&(m.wasRoot&&pr(d,u),_s(d.x,m.offset.x),_s(d.y,m.offset.y))}return d}applyTransform(u,d=!1){const f=it();pr(f,u);for(let p=0;p<this.path.length;p++){const m=this.path[p];!d&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Os(f,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),Ci(m.latestValues)&&Os(f,m.latestValues)}return Ci(this.latestValues)&&Os(f,this.latestValues),f}removeTransform(u){const d=it();pr(d,u);for(let f=0;f<this.path.length;f++){const p=this.path[f];if(!p.instance||!Ci(p.latestValues))continue;Ym(p.latestValues)&&p.updateSnapshot();const m=it(),y=p.measurePageBox();pr(m,y),mb(d,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,m)}return Ci(this.latestValues)&&mb(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:y}=this.options;if(!this.layout||!(m||y))return;this.resolvedRelativeTargetAt=gt.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=it(),this.targetWithTransforms=it()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),CN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pr(this.target,this.layout.layoutBox),cx(this.target,this.targetDelta)):pr(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ym(this.parent.latestValues)||lx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,d,f){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=it(),this.relativeTargetOrigin=it(),zu(this.relativeTargetOrigin,d,f),pr(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),d=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===gt.timestamp&&(f=!1),f)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;pr(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,v=this.treeScale.y;_E(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=it());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(db(this.prevProjectionDelta.x,this.projectionDelta.x),db(this.prevProjectionDelta.y,this.projectionDelta.y)),gl(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==v||!bb(this.projectionDelta.x,this.prevProjectionDelta.x)||!bb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zs(),this.projectionDelta=zs(),this.projectionDeltaWithTransform=zs()}setAnimationOrigin(u,d=!1){const f=this.snapshot,p=f?f.latestValues:{},m={...this.latestValues},y=zs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=it(),x=f?f.source:void 0,A=this.layout?this.layout.source:void 0,S=x!==A,N=this.getStack(),w=!N||N.members.length<=1,R=!!(S&&!w&&this.options.crossfade===!0&&!this.path.some(mR));this.animationProgress=0;let L;this.mixTargetDelta=z=>{const G=z/1e3;Cb(y.x,u.x,G),Cb(y.y,u.y,G),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zu(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),hR(this.relativeTarget,this.relativeTargetOrigin,v,G),L&&QN(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=it()),pr(L,this.relativeTarget)),S&&(this.animationValues=m,qN(m,p,this.latestValues,G,R,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Wa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Rn.update(()=>{Mu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Us(0)),this.currentAnimation=GN(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),u.onUpdate&&u.onUpdate(d)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(nR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:f,layout:p,latestValues:m}=u;if(!(!d||!f||!p)){if(this!==u&&this.layout&&p&&Px(this.options.animationType,this.layout.layoutBox,p.layoutBox)){f=this.target||it();const y=wt(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+y;const v=wt(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+v}pr(d,f),Os(d,m),gl(this.projectionDeltaWithTransform,this.layoutCorrected,d,m)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new $N),this.sharedNodes.get(u).add(d);const p=d.options.initialPromotionConfig;d.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:f}={}){const p=this.getStack();p&&p.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const p={};f.z&&dm("z",u,p,this.animationValues);for(let m=0;m<um.length;m++)dm(`rotate${um[m]}`,u,p,this.animationValues),dm(`skew${um[m]}`,u,p,this.animationValues);u.render();for(const m in p)u.setStaticValue(m,p[m]),this.animationValues&&(this.animationValues[m]=p[m]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Su(d?.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Su(d?.pointerEvents)||""),this.hasProjected&&!Ci(this.latestValues)&&(u.transform=f?f({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=p.animationValues||p.latestValues;this.applyTransformsToTarget();let y=eR(this.projectionDeltaWithTransform,this.treeScale,m);f&&(y=f(m,y)),u.transform=y;const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const A in wl){if(m[A]===void 0)continue;const{correct:S,applyTo:N,isCSSVariable:w}=wl[A],R=y==="none"?m[A]:S(m[A],p);if(N){const L=N.length;for(let z=0;z<L;z++)u[N[z]]=R}else w?this.options.visualElement.renderState.vars[A]=R:u[A]=R}this.options.layoutId&&(u.pointerEvents=p===this?Su(d?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(xb),this.root.sharedNodes.clear()}}}function rR(n){n.updateLayout()}function aR(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=n.layout,{animationType:s}=n.options,l=e.source!==n.layout.source;s==="size"?ar(m=>{const y=l?e.measuredBox[m]:e.layoutBox[m],v=wt(y);y.min=r[m].min,y.max=y.min+v}):Px(s,e.layoutBox,r)&&ar(m=>{const y=l?e.measuredBox[m]:e.layoutBox[m],v=wt(r[m]);y.max=y.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+v)});const u=zs();gl(u,r,e.layoutBox);const d=zs();l?gl(d,n.applyTransform(i,!0),e.measuredBox):gl(d,r,e.layoutBox);const f=!Ex(u);let p=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:y,layout:v}=m;if(y&&v){const x=it();zu(x,e.layoutBox,y.layoutBox);const A=it();zu(A,r,v.layoutBox),Nx(x,A)||(p=!0),m.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=x,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function iR(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function sR(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function oR(n){n.clearSnapshot()}function xb(n){n.clearMeasurements()}function Sb(n){n.isLayoutDirty=!1}function lR(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Mb(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function cR(n){n.resolveTargetDelta()}function uR(n){n.calcProjection()}function dR(n){n.resetSkewAndRotation()}function fR(n){n.removeLeadSnapshot()}function Cb(n,e,r){n.translate=Pn(e.translate,0,r),n.scale=Pn(e.scale,1,r),n.origin=e.origin,n.originPoint=e.originPoint}function Ab(n,e,r,i){n.min=Pn(e.min,r.min,i),n.max=Pn(e.max,r.max,i)}function hR(n,e,r,i){Ab(n.x,e.x,r.x,i),Ab(n.y,e.y,r.y,i)}function mR(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const pR={duration:.45,ease:[.4,0,.1,1]},wb=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Tb=wb("applewebkit/")&&!wb("chrome/")?Math.round:or;function Db(n){n.min=Tb(n.min),n.max=Tb(n.max)}function gR(n){Db(n.x),Db(n.y)}function Px(n,e,r){return n==="position"||n==="preserve-aspect"&&!MN(vb(e),vb(r),.2)}function yR(n){return n!==n.root&&n.scroll?.wasRoot}const vR=kx({attachResizeListener:(n,e)=>Tl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fm={current:void 0},Bx=kx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!fm.current){const n=new vR({});n.mount(window),n.setOptions({layoutScroll:!0}),fm.current=n}return fm.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),bR={pan:{Feature:zN},drag:{Feature:ON,ProjectionNode:Bx,MeasureLayout:wx}};function Eb(n,e,r){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",r==="Start");const s="onHover"+r,l=i[s];l&&Rn.postRender(()=>l(e,jl(e)))}class xR extends ri{mount(){const{current:e}=this.node;e&&(this.unmount=GD(e,(r,i)=>(Eb(this.node,i,"Start"),s=>Eb(this.node,s,"End"))))}unmount(){}}class SR extends ri{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=_l(Tl(this.node.current,"focus",()=>this.onFocus()),Tl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Nb(n,e,r){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",r==="Start");const s="onTap"+(r==="End"?"":r),l=i[s];l&&Rn.postRender(()=>l(e,jl(e)))}class MR extends ri{mount(){const{current:e}=this.node;e&&(this.unmount=JD(e,(r,i)=>(Nb(this.node,i,"Start"),(s,{success:l})=>Nb(this.node,s,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const np=new WeakMap,hm=new WeakMap,CR=n=>{const e=np.get(n.target);e&&e(n)},AR=n=>{n.forEach(CR)};function wR({root:n,...e}){const r=n||document;hm.has(r)||hm.set(r,{});const i=hm.get(r),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(AR,{root:n,...e})),i[s]}function TR(n,e,r){const i=wR(e);return np.set(n,r),i.observe(n),()=>{np.delete(n),i.unobserve(n)}}const DR={some:0,all:1};class ER extends ri{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:r,margin:i,amount:s="some",once:l}=e,u={root:r?r.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:DR[s]},d=f=>{const{isIntersecting:p}=f;if(this.isInView===p||(this.isInView=p,l&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:m,onViewportLeave:y}=this.node.getProps(),v=p?m:y;v&&v(f)};return TR(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:r}=this.node;["amount","margin","root"].some(NR(e,r))&&this.startObserver()}unmount(){}}function NR({viewport:n={}},{viewport:e={}}={}){return r=>n[r]!==e[r]}const RR={inView:{Feature:ER},tap:{Feature:MR},focus:{Feature:SR},hover:{Feature:xR}},kR={layout:{ProjectionNode:Bx,MeasureLayout:wx}},PR={...gN,...RR,...bR,...kR},Te=PE(PR,JE),BR={fr:{welcome:"Accélérez votre prise en charge.",subtitle:"Notre admission en ligne permet de préparer votre venue à l'Hôpital de La Tour.",description:"Vos données sont traitées de façon confidentielle.",selectLanguage:"Choisissez votre langue",start:"Démarrer l'admission",secure:"Vos données sont protégées",fast:"Rapide et simple",minutes:"Seulement 5 minutes"},en:{welcome:"Speed up your care.",subtitle:"Our online admission allows you to prepare your visit to La Tour Hospital.",description:"Your data is treated confidentially.",selectLanguage:"Choose your language",start:"Start online admission",secure:"Your data is protected",fast:"Quick and simple",minutes:"Only 5 minutes"}},LR={fr:{title:"Vérification de sécurité",subtitle:"Pour accéder à votre dossier, veuillez confirmer votre date de naissance",label:"Date de naissance",placeholder:"JJ.MM.YYYY",continue:"Continuer",back:"Retour",required:"La date de naissance est requise",invalid:"Date invalide",futureDate:"La date de naissance ne peut pas être dans le futur",verifying:"Vérification..."},en:{title:"Security Verification",subtitle:"To access your file, please confirm your date of birth",label:"Date of birth",placeholder:"DD.MM.YYYY",continue:"Continue",back:"Back",required:"Date of birth is required",invalid:"Invalid date",futureDate:"Date of birth cannot be in the future",verifying:"Verifying..."}},_R={fr:{title:"Code de vérification",subtitle:"Un code à 6 chiffres vous a été envoyé par SMS au numéro se terminant par XXXX",label:"Code de vérification",placeholder:"000000",continue:"Vérifier",back:"Retour",required:"Le code est requis",invalid:"Code invalide (6 chiffres requis)",verifying:"Vérification...",resend:"Renvoyer le code"},en:{title:"Verification Code",subtitle:"A 6-digit code has been sent by SMS to the number ending in XXXX",label:"Verification code",placeholder:"000000",continue:"Verify",back:"Back",required:"Code is required",invalid:"Invalid code (6 digits required)",verifying:"Verifying...",resend:"Resend code"}},OR={fr:{title:"Identification",subtitle:"Aidez-nous à mieux comprendre votre situation",reasonLabel:"Raison de la venue",illness:"Maladie",accident:"Accident",hasEmployerLabel:"J'ai un employeur",yes:"Oui",no:"Non",insuranceLabel:"Type d'assurance",swiss:"Assurance LAMal",international:"Autre assurance",auto:"Autopayeur",documentsLabel:"Documents requis",identityCard:"Carte d'identité ou passport",insuranceCard:"Carte d'assurance maladie (base)",uploadText:"Glisser-déposer ou cliquer",consentsLabel:"Consentements",consentNLPDPrefix:"J'accepte la ",consentNLPDLink:"Politique de confidentialité",privacyPolicyUrl:"https://www.la-tour.ch/fr/informations-generales/politique-de-confidentialite",consentMarketing:"J'aimerais être informé des services ou offres complémentaires de l'Hôpital de La Tour en lien avec mon parcours de soins et mes besoins.",continue:"Continuer",back:"Retour",reasonRequired:"Veuillez sélectionner une raison",insuranceRequired:"Veuillez sélectionner un type d'assurance",identityCardRequired:"La carte d'identité est obligatoire",insuranceCardRequired:"La carte d'assurance est obligatoire",consentNLPDRequired:"Le consentement nLPD est obligatoire",optional:"Optionnel",fileTooLarge:"Le fichier est trop volumineux. Taille maximale: 10 MB",invalidFileFormat:"Format de fichier non valide. Formats acceptés: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",fileTooLargeAndInvalidFormat:"Le fichier est trop volumineux et le format n'est pas valide. Taille maximale: 10 MB. Formats acceptés: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",insuranceHelp:"En savoir plus",insuranceHelpTitle:"Choix du type d'assurance",insuranceHelpSwiss:"Assurance LAMal",insuranceHelpSwissDesc:"Concerne les personnes affiliées au système d'assurance maladie obligatoire suisse (LaMAL/KVG). C'est le cas pour la majorité des résidents en Suisse.",insuranceHelpInternational:"Autre assurance",insuranceHelpInternationalDesc:"Sélectionnez cette option si votre couverture ne relève pas de l'assurance de base LaMAL. Cela inclut principalement deux cas :",insuranceHelpInternationalItem1:"Assurances d'organisations internationales : Si vous êtes affilié(e) au régime d'assurance de votre employeur (ex: CERN, ONU, missions diplomatiques).",insuranceHelpInternationalItem2:"Assurances privées suisses (hors LaMAL) : Si vous disposez d'une assurance privée qui n'opère pas dans le cadre de la LaMAL (ex: certaines polices d'AXA, Zurich, etc.).",insuranceHelpAuto:"Autopayeur",insuranceHelpAutoDesc:"Sélectionnez cette option si vous prévoyez de régler vous-même l'intégralité des frais de votre visite, sans passer par une assurance. Un acompte pourra vous être demandé lors de votre admission."},en:{title:"Identification",subtitle:"Help us better understand your situation",reasonLabel:"Reason for visit",illness:"Illness",accident:"Accident",hasEmployerLabel:"I have an employer",yes:"Yes",no:"No",insuranceLabel:"Insurance type",swiss:"LAMal insurance",international:"Other insurance",auto:"Self-payer",documentsLabel:"Required documents",identityCard:"ID card or passport",insuranceCard:"Insurance card (Basic)",uploadText:"Drag & drop or click",consentsLabel:"Consents",consentNLPDPrefix:"I accept the ",consentNLPDLink:"Privacy policy",privacyPolicyUrl:"https://www.la-tour.ch/en/general-information/privacy-policy",consentMarketing:"I would like to be informed about any additional services or offerings at Hôpital de La Tour that relate to my care pathway and needs.",continue:"Continue",back:"Back",reasonRequired:"Please select a reason",insuranceRequired:"Please select an insurance type",identityCardRequired:"Identity card is required",insuranceCardRequired:"Insurance card is required",consentNLPDRequired:"Data protection consent is required",optional:"Optional",fileTooLarge:"File is too large. Maximum size: 10 MB",invalidFileFormat:"Invalid file format. Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",fileTooLargeAndInvalidFormat:"File is too large and format is invalid. Maximum size: 10 MB. Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",insuranceHelp:"Learn more",insuranceHelpTitle:"Insurance type selection",insuranceHelpSwiss:"Swiss insurance",insuranceHelpSwissDesc:"For individuals affiliated with the Swiss mandatory health insurance system (LAMal/KVG). This applies to the majority of residents in Switzerland.",insuranceHelpInternational:"Other insurance",insuranceHelpInternationalDesc:"Select this option if your coverage is not part of LAMal basic insurance. This primarily includes two cases:",insuranceHelpInternationalItem1:"International organization insurance: If you are affiliated with your employer's insurance scheme (e.g., CERN, UN, diplomatic missions).",insuranceHelpInternationalItem2:"Swiss private insurance (outside LAMal): If you have private insurance that does not operate within the LAMal framework (e.g., certain policies from AXA, Zurich, etc.).",insuranceHelpAuto:"Self-payer",insuranceHelpAutoDesc:"Select this option if you plan to pay for your visit in full yourself, without going through insurance. A deposit may be requested upon admission."}},zR={fr:{title:"Informations administratives",subtitle:"Complétez vos informations personnelles",identity:"Identité",firstName:"Prénom",lastName:"Nom",birthDate:"Date de naissance",birthDatePlaceholder:"JJ.MM.YYYY",gender:"Genre",genderPlaceholder:"Sélectionner",male:"Homme",female:"Femme",other:"Non-binaire",nationality:"Nationalité",nationalityPlaceholder:"Sélectionner",contact:"Coordonnées",street:"Rue",npa:"NPA (Code Postal)",city:"Ville",country:"Pays",countryPlaceholder:"Sélectionnez",email:"Email",employer:"Employeur",profession:"Profession",employerName:"Nom de l'employeur",employerAddress:"Adresse de l'employeur",doctors:"Médecins",referringDoctor:"Médecin envoyeur",generalPractitioner:"Médecin de famille",accidentData:"Données Accident",accidentDate:"Date de l'accident",accidentDatePlaceholder:"JJ.MM.YYYY",accidentInsurance:"Nom de l'assurance accident",claimNumber:"N° de sinistre",insuranceData:"Assurance & Couverture Sociale",avsNumber:"Numéro AVS",basicInsurance:"Nom de l'assurance de base",cardNumber:"N° de carte d'assurance de base",policyNumber:"Assurance de base - N° de police",complementaryInsurance:"N° de carte d'assurance complémentaire",continue:"Soumettre",back:"Retour",required:"Ce champ est requis",invalidEmail:"Format email invalide (exemple: nom@domaine.com)",invalidNpa:"Code postal invalide (chiffres uniquement)",invalidDate:"Date invalide",invalidCardNumber:"Le numéro de carte doit contenir exactement 20 chiffres",invalidAvsNumber:"Le numéro AVS doit contenir exactement 13 chiffres",optional:"Optionnel",noResults:"Aucun résultat"},en:{title:"Administrative Information",subtitle:"Complete your personal information",identity:"Identity",firstName:"First name",lastName:"Last name",birthDate:"Date of birth",birthDatePlaceholder:"DD.MM.YYYY",gender:"Gender",genderPlaceholder:"Select",male:"Male",female:"Female",other:"Non-binary",nationality:"Nationality",nationalityPlaceholder:"Select",contact:"Contact",street:"Street",npa:"Postal code",city:"City",country:"Country",countryPlaceholder:"Select",email:"Email",employer:"Employer",profession:"Profession",employerName:"Employer name",employerAddress:"Employer address",doctors:"Doctors",referringDoctor:"Referring doctor",generalPractitioner:"General Practitioner",accidentData:"Accident Data",accidentDate:"Accident date",accidentDatePlaceholder:"DD.MM.YYYY",accidentInsurance:"Accident insurance name",claimNumber:"Claim No.",insuranceData:"Insurance & Social Coverage",avsNumber:"AHV Number",basicInsurance:"Basic insurance name",cardNumber:"Basic insurance card number",policyNumber:"Basic insurance - Policy number",complementaryInsurance:"Complementary insurance card number",continue:"Submit",back:"Back",required:"This field is required",invalidEmail:"Invalid email format (example: name@domain.com)",invalidNpa:"Invalid postal code (digits only)",invalidDate:"Invalid date",invalidCardNumber:"Card number must contain exactly 20 digits",invalidAvsNumber:"AHV number must contain exactly 13 digits",optional:"Optional",noResults:"No results"}},jR={fr:{title:"Admission en ligne envoyée avec succès",message:"Merci d'avoir soumis votre demande. Elle sera traitée afin de préparer votre arrivée.",button:"Comment se rendre à l'hôpital?",link:"https://www.la-tour.ch/fr/hopital-de-la-tour/se-rendre-lhopital-de-la-tour"},en:{title:"Online admission submitted successfully",message:"Thank you for submitting your request. It will be processed to prepare your arrival.",button:"How to get to the hospital?",link:"https://www.la-tour.ch/en/hopital-de-la-tour/getting-hopital-de-la-tour"}},VR={fr:{message:"Veuillez patienter, vos documents sont en cours de traitement"},en:{message:"Please wait, your documents are being processed"}},mm=[{key:"qualification",labelFr:"Identification",labelEn:"Identification"},{key:"admin",labelFr:"Informations",labelEn:"Information"},{key:"success",labelFr:"Terminé",labelEn:"Complete"}],so=[.16,1,.3,1],FR={hidden:{opacity:0,scale:.92},visible:{opacity:1,scale:1,transition:{duration:.6,ease:so,staggerChildren:.08,delayChildren:.1}}},pm={hidden:{opacity:0,y:20,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:so}}},GR={hidden:{opacity:0,scale:.5},visible:{opacity:1,scale:1,transition:{duration:.7,ease:so,scale:{type:"spring",stiffness:100,damping:15}}}},gm={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.5,ease:so}}},Rb={hidden:{opacity:0,scale:.8},visible:n=>({opacity:1,scale:1,transition:{delay:.6+n*.1,duration:.5,ease:so}})},HR={hidden:{opacity:0,scale:.9,y:10},visible:{opacity:1,scale:1,y:0,transition:{delay:.4,duration:.6,ease:so}}};function IR({language:n,onLanguageChange:e,onStart:r}){const i=BR[n];return b.jsx("div",{className:"min-h-screen flex justify-center px-4 py-8",children:b.jsx(Te.div,{className:"w-full max-w-md mx-auto",children:b.jsxs(Te.div,{className:"bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 backdrop-blur-sm",variants:FR,initial:"hidden",animate:"visible",style:{willChange:"transform, opacity"},children:[b.jsx(Te.div,{className:"text-center mb-6",variants:pm,children:b.jsx(Te.div,{className:"mx-auto mb-6 flex items-center justify-center",variants:GR,style:{willChange:"transform, opacity"},children:b.jsx("img",{src:y6,alt:"Hôpital La Tour",className:"h-16 w-auto"})})}),b.jsx(Te.div,{className:"mb-6",variants:pm,children:b.jsxs("div",{className:"flex items-center justify-between gap-4",children:[b.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-brand-text",children:[b.jsx(Te.span,{whileHover:{rotate:360},transition:{duration:.5},style:{willChange:"transform"},children:b.jsx(t6,{className:"w-4 h-4 text-brand-primary"})}),i.selectLanguage]}),b.jsxs(Z3,{value:n,onValueChange:s=>e(s),children:[b.jsx(X3,{className:"h-12 w-[180px]",children:b.jsx(W3,{})}),b.jsxs(Q3,{children:[b.jsx(fl,{value:"fr",children:"Français"}),b.jsx(fl,{value:"en",children:"English"})]})]})]})}),b.jsxs(Te.div,{className:"text-center mb-6",variants:pm,children:[b.jsx(Te.h1,{className:"text-2xl font-bold text-brand-text mb-4",variants:gm,children:i.welcome}),b.jsx(Te.p,{className:"text-base text-slate-600 mb-4 leading-relaxed",variants:gm,children:i.subtitle}),b.jsx(Te.p,{className:"text-sm text-slate-600",variants:gm,children:i.description})]}),b.jsx(Te.div,{variants:HR,children:b.jsx(sr,{onClick:r,size:"lg",className:"group w-full h-14 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all",asChild:!0,children:b.jsx(Te.button,{whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25},style:{willChange:"transform"},children:b.jsxs("div",{className:"flex items-center justify-center gap-2",children:[b.jsx(c6,{className:"w-5 h-5 transition-transform group-hover:rotate-12"}),i.start,b.jsx(kl,{className:"w-5 h-5 transition-transform group-hover:translate-x-1"})]})})})}),b.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[b.jsxs(Te.div,{className:"flex items-center gap-2 text-xs text-slate-600",custom:0,variants:Rb,children:[b.jsx(Te.div,{className:"w-2 h-2 rounded-full bg-brand-success",animate:{scale:[1,1.2,1]},transition:{repeat:1/0,duration:2,delay:1,ease:"easeInOut"},style:{willChange:"transform"}}),i.secure]}),b.jsxs(Te.div,{className:"flex items-center gap-2 text-xs text-slate-600",custom:1,variants:Rb,children:[b.jsx(Te.div,{className:"w-2 h-2 rounded-full bg-brand-primary",animate:{scale:[1,1.2,1]},transition:{repeat:1/0,duration:2,delay:1.3,ease:"easeInOut"},style:{willChange:"transform"}}),i.minutes]})]})]})})})}var Vl=n=>n.type==="checkbox",Di=n=>n instanceof Date,Bt=n=>n==null;const Lx=n=>typeof n=="object";var tt=n=>!Bt(n)&&!Array.isArray(n)&&Lx(n)&&!Di(n),UR=n=>tt(n)&&n.target?Vl(n.target)?n.target.checked:n.target.value:n,JR=n=>n.substring(0,n.search(/\.\d+(\.|$)/))||n,qR=(n,e)=>n.has(JR(e)),KR=n=>{const e=n.constructor&&n.constructor.prototype;return tt(e)&&e.hasOwnProperty("isPrototypeOf")},dg=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ut(n){let e;const r=Array.isArray(n),i=typeof FileList<"u"?n instanceof FileList:!1;if(n instanceof Date)e=new Date(n);else if(!(dg&&(n instanceof Blob||i))&&(r||tt(n)))if(e=r?[]:Object.create(Object.getPrototypeOf(n)),!r&&!KR(n))e=n;else for(const s in n)n.hasOwnProperty(s)&&(e[s]=ut(n[s]));else return n;return e}var gd=n=>/^\w*$/.test(n),In=n=>n===void 0,fg=n=>Array.isArray(n)?n.filter(Boolean):[],hg=n=>fg(n.replace(/["|']|\]/g,"").split(/\.|\[/)),Re=(n,e,r)=>{if(!e||!tt(n))return r;const i=(gd(e)?[e]:hg(e)).reduce((s,l)=>Bt(s)?s:s[l],n);return In(i)||i===n?In(n[e])?r:n[e]:i},Rr=n=>typeof n=="boolean",xn=(n,e,r)=>{let i=-1;const s=gd(e)?[e]:hg(e),l=s.length,u=l-1;for(;++i<l;){const d=s[i];let f=r;if(i!==u){const p=n[d];f=tt(p)||Array.isArray(p)?p:isNaN(+s[i+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;n[d]=f,n=n[d]}};const kb={BLUR:"blur",FOCUS_OUT:"focusout"},br={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},oa={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},YR=Hn.createContext(null);YR.displayName="HookFormContext";var ZR=(n,e,r,i=!0)=>{const s={defaultValues:e._defaultValues};for(const l in n)Object.defineProperty(s,l,{get:()=>{const u=l;return e._proxyFormState[u]!==br.all&&(e._proxyFormState[u]=!i||br.all),n[u]}});return s};const WR=typeof window<"u"?Hn.useLayoutEffect:Hn.useEffect;var Jt=n=>typeof n=="string",XR=(n,e,r,i,s)=>Jt(n)?(i&&e.watch.add(n),Re(r,n,s)):Array.isArray(n)?n.map(l=>(i&&e.watch.add(l),Re(r,l))):(i&&(e.watchAll=!0),r),tp=n=>Bt(n)||!Lx(n);function Ia(n,e,r=new WeakSet){if(tp(n)||tp(e))return Object.is(n,e);if(Di(n)&&Di(e))return n.getTime()===e.getTime();const i=Object.keys(n),s=Object.keys(e);if(i.length!==s.length)return!1;if(r.has(n)||r.has(e))return!0;r.add(n),r.add(e);for(const l of i){const u=n[l];if(!s.includes(l))return!1;if(l!=="ref"){const d=e[l];if(Di(u)&&Di(d)||tt(u)&&tt(d)||Array.isArray(u)&&Array.isArray(d)?!Ia(u,d,r):!Object.is(u,d))return!1}}return!0}var _x=(n,e,r,i,s)=>e?{...r[n],types:{...r[n]&&r[n].types?r[n].types:{},[i]:s||!0}}:{},yl=n=>Array.isArray(n)?n:[n],Pb=()=>{let n=[];return{get observers(){return n},next:s=>{for(const l of n)l.next&&l.next(s)},subscribe:s=>(n.push(s),{unsubscribe:()=>{n=n.filter(l=>l!==s)}}),unsubscribe:()=>{n=[]}}};function Ox(n,e){const r={};for(const i in n)if(n.hasOwnProperty(i)){const s=n[i],l=e[i];if(s&&tt(s)&&l){const u=Ox(s,l);tt(u)&&(r[i]=u)}else n[i]&&(r[i]=l)}return r}var Ct=n=>tt(n)&&!Object.keys(n).length,mg=n=>n.type==="file",xr=n=>typeof n=="function",ju=n=>{if(!dg)return!1;const e=n?n.ownerDocument:0;return n instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},zx=n=>n.type==="select-multiple",pg=n=>n.type==="radio",QR=n=>pg(n)||Vl(n),ym=n=>ju(n)&&n.isConnected;function $R(n,e){const r=e.slice(0,-1).length;let i=0;for(;i<r;)n=In(n)?i++:n[e[i++]];return n}function ek(n){for(const e in n)if(n.hasOwnProperty(e)&&!In(n[e]))return!1;return!0}function $n(n,e){const r=Array.isArray(e)?e:gd(e)?[e]:hg(e),i=r.length===1?n:$R(n,r),s=r.length-1,l=r[s];return i&&delete i[l],s!==0&&(tt(i)&&Ct(i)||Array.isArray(i)&&ek(i))&&$n(n,r.slice(0,-1)),n}var nk=n=>{for(const e in n)if(xr(n[e]))return!0;return!1};function jx(n){return Array.isArray(n)||tt(n)&&!nk(n)}function rp(n,e={}){for(const r in n){const i=n[r];jx(i)?(e[r]=Array.isArray(i)?[]:{},rp(i,e[r])):In(i)||(e[r]=!0)}return e}function ks(n,e,r){r||(r=rp(e));for(const i in n){const s=n[i];if(jx(s))In(e)||tp(r[i])?r[i]=rp(s,Array.isArray(s)?[]:{}):ks(s,Bt(e)?{}:e[i],r[i]);else{const l=e[i];r[i]=!Ia(s,l)}}return r}const Bb={value:!1,isValid:!1},Lb={value:!0,isValid:!0};var Vx=n=>{if(Array.isArray(n)){if(n.length>1){const e=n.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:e,isValid:!!e.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!In(n[0].attributes.value)?In(n[0].value)||n[0].value===""?Lb:{value:n[0].value,isValid:!0}:Lb:Bb}return Bb},Fx=(n,{valueAsNumber:e,valueAsDate:r,setValueAs:i})=>In(n)?n:e?n===""?NaN:n&&+n:r&&Jt(n)?new Date(n):i?i(n):n;const _b={isValid:!1,value:null};var Gx=n=>Array.isArray(n)?n.reduce((e,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e,_b):_b;function Ob(n){const e=n.ref;return mg(e)?e.files:pg(e)?Gx(n.refs).value:zx(e)?[...e.selectedOptions].map(({value:r})=>r):Vl(e)?Vx(n.refs).value:Fx(In(e.value)?n.ref.value:e.value,n)}var tk=(n,e,r,i)=>{const s={};for(const l of n){const u=Re(e,l);u&&xn(s,l,u._f)}return{criteriaMode:r,names:[...n],fields:s,shouldUseNativeValidation:i}},Vu=n=>n instanceof RegExp,al=n=>In(n)?n:Vu(n)?n.source:tt(n)?Vu(n.value)?n.value.source:n.value:n,zb=n=>({isOnSubmit:!n||n===br.onSubmit,isOnBlur:n===br.onBlur,isOnChange:n===br.onChange,isOnAll:n===br.all,isOnTouch:n===br.onTouched});const jb="AsyncFunction";var rk=n=>!!n&&!!n.validate&&!!(xr(n.validate)&&n.validate.constructor.name===jb||tt(n.validate)&&Object.values(n.validate).find(e=>e.constructor.name===jb)),ak=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate),Vb=(n,e,r)=>!r&&(e.watchAll||e.watch.has(n)||[...e.watch].some(i=>n.startsWith(i)&&/^\.\w+/.test(n.slice(i.length))));const vl=(n,e,r,i)=>{for(const s of r||Object.keys(n)){const l=Re(n,s);if(l){const{_f:u,...d}=l;if(u){if(u.refs&&u.refs[0]&&e(u.refs[0],s)&&!i)return!0;if(u.ref&&e(u.ref,u.name)&&!i)return!0;if(vl(d,e))break}else if(tt(d)&&vl(d,e))break}}};function Fb(n,e,r){const i=Re(n,r);if(i||gd(r))return{error:i,name:r};const s=r.split(".");for(;s.length;){const l=s.join("."),u=Re(e,l),d=Re(n,l);if(u&&!Array.isArray(u)&&r!==l)return{name:r};if(d&&d.type)return{name:l,error:d};if(d&&d.root&&d.root.type)return{name:`${l}.root`,error:d.root};s.pop()}return{name:r}}var ik=(n,e,r,i)=>{r(n);const{name:s,...l}=n;return Ct(l)||Object.keys(l).length>=Object.keys(e).length||Object.keys(l).find(u=>e[u]===(!i||br.all))},sk=(n,e,r)=>!n||!e||n===e||yl(n).some(i=>i&&(r?i===e:i.startsWith(e)||e.startsWith(i))),ok=(n,e,r,i,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(e||n):(r?i.isOnBlur:s.isOnBlur)?!n:(r?i.isOnChange:s.isOnChange)?n:!0,lk=(n,e)=>!fg(Re(n,e)).length&&$n(n,e),ck=(n,e,r)=>{const i=yl(Re(n,r));return xn(i,"root",e[r]),xn(n,r,i),n};function Gb(n,e,r="validate"){if(Jt(n)||Array.isArray(n)&&n.every(Jt)||Rr(n)&&!n)return{type:r,message:Jt(n)?n:"",ref:e}}var Ds=n=>tt(n)&&!Vu(n)?n:{value:n,message:""},Hb=async(n,e,r,i,s,l)=>{const{ref:u,refs:d,required:f,maxLength:p,minLength:m,min:y,max:v,pattern:x,validate:A,name:S,valueAsNumber:N,mount:w}=n._f,R=Re(r,S);if(!w||e.has(S))return{};const L=d?d[0]:u,z=F=>{s&&L.reportValidity&&(L.setCustomValidity(Rr(F)?"":F||""),L.reportValidity())},G={},_=pg(u),O=Vl(u),E=_||O,k=(N||mg(u))&&In(u.value)&&In(R)||ju(u)&&u.value===""||R===""||Array.isArray(R)&&!R.length,j=_x.bind(null,S,i,G),V=(F,U,H,Y=oa.maxLength,T=oa.minLength)=>{const D=F?U:H;G[S]={type:F?Y:T,message:D,ref:u,...j(F?Y:T,D)}};if(l?!Array.isArray(R)||!R.length:f&&(!E&&(k||Bt(R))||Rr(R)&&!R||O&&!Vx(d).isValid||_&&!Gx(d).isValid)){const{value:F,message:U}=Jt(f)?{value:!!f,message:f}:Ds(f);if(F&&(G[S]={type:oa.required,message:U,ref:L,...j(oa.required,U)},!i))return z(U),G}if(!k&&(!Bt(y)||!Bt(v))){let F,U;const H=Ds(v),Y=Ds(y);if(!Bt(R)&&!isNaN(R)){const T=u.valueAsNumber||R&&+R;Bt(H.value)||(F=T>H.value),Bt(Y.value)||(U=T<Y.value)}else{const T=u.valueAsDate||new Date(R),D=$=>new Date(new Date().toDateString()+" "+$),I=u.type=="time",q=u.type=="week";Jt(H.value)&&R&&(F=I?D(R)>D(H.value):q?R>H.value:T>new Date(H.value)),Jt(Y.value)&&R&&(U=I?D(R)<D(Y.value):q?R<Y.value:T<new Date(Y.value))}if((F||U)&&(V(!!F,H.message,Y.message,oa.max,oa.min),!i))return z(G[S].message),G}if((p||m)&&!k&&(Jt(R)||l&&Array.isArray(R))){const F=Ds(p),U=Ds(m),H=!Bt(F.value)&&R.length>+F.value,Y=!Bt(U.value)&&R.length<+U.value;if((H||Y)&&(V(H,F.message,U.message),!i))return z(G[S].message),G}if(x&&!k&&Jt(R)){const{value:F,message:U}=Ds(x);if(Vu(F)&&!R.match(F)&&(G[S]={type:oa.pattern,message:U,ref:u,...j(oa.pattern,U)},!i))return z(U),G}if(A){if(xr(A)){const F=await A(R,r),U=Gb(F,L);if(U&&(G[S]={...U,...j(oa.validate,U.message)},!i))return z(U.message),G}else if(tt(A)){let F={};for(const U in A){if(!Ct(F)&&!i)break;const H=Gb(await A[U](R,r),L,U);H&&(F={...H,...j(U,H.message)},z(H.message),i&&(G[S]=F))}if(!Ct(F)&&(G[S]={ref:L,...F},!i))return G}}return z(!0),G};const uk={mode:br.onSubmit,reValidateMode:br.onChange,shouldFocusError:!0};function dk(n={}){let e={...uk,...n},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:xr(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},i={},s=tt(e.defaultValues)||tt(e.values)?ut(e.defaultValues||e.values)||{}:{},l=e.shouldUnregister?{}:ut(s),u={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},f,p=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let y={...m};const v={array:Pb(),state:Pb()},x=e.criteriaMode===br.all,A=J=>ee=>{clearTimeout(p),p=setTimeout(J,ee)},S=async J=>{if(!e.disabled&&(m.isValid||y.isValid||J)){const ee=e.resolver?Ct((await O()).errors):await k(i,!0);ee!==r.isValid&&v.state.next({isValid:ee})}},N=(J,ee)=>{!e.disabled&&(m.isValidating||m.validatingFields||y.isValidating||y.validatingFields)&&((J||Array.from(d.mount)).forEach(se=>{se&&(ee?xn(r.validatingFields,se,ee):$n(r.validatingFields,se))}),v.state.next({validatingFields:r.validatingFields,isValidating:!Ct(r.validatingFields)}))},w=(J,ee=[],se,ve,ue=!0,pe=!0)=>{if(ve&&se&&!e.disabled){if(u.action=!0,pe&&Array.isArray(Re(i,J))){const Ce=se(Re(i,J),ve.argA,ve.argB);ue&&xn(i,J,Ce)}if(pe&&Array.isArray(Re(r.errors,J))){const Ce=se(Re(r.errors,J),ve.argA,ve.argB);ue&&xn(r.errors,J,Ce),lk(r.errors,J)}if((m.touchedFields||y.touchedFields)&&pe&&Array.isArray(Re(r.touchedFields,J))){const Ce=se(Re(r.touchedFields,J),ve.argA,ve.argB);ue&&xn(r.touchedFields,J,Ce)}(m.dirtyFields||y.dirtyFields)&&(r.dirtyFields=ks(s,l)),v.state.next({name:J,isDirty:V(J,ee),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else xn(l,J,ee)},R=(J,ee)=>{xn(r.errors,J,ee),v.state.next({errors:r.errors})},L=J=>{r.errors=J,v.state.next({errors:r.errors,isValid:!1})},z=(J,ee,se,ve)=>{const ue=Re(i,J);if(ue){const pe=Re(l,J,In(se)?Re(s,J):se);In(pe)||ve&&ve.defaultChecked||ee?xn(l,J,ee?pe:Ob(ue._f)):H(J,pe),u.mount&&!u.action&&S()}},G=(J,ee,se,ve,ue)=>{let pe=!1,Ce=!1;const Ge={name:J};if(!e.disabled){if(!se||ve){(m.isDirty||y.isDirty)&&(Ce=r.isDirty,r.isDirty=Ge.isDirty=V(),pe=Ce!==Ge.isDirty);const Oe=Ia(Re(s,J),ee);Ce=!!Re(r.dirtyFields,J),Oe?$n(r.dirtyFields,J):xn(r.dirtyFields,J,!0),Ge.dirtyFields=r.dirtyFields,pe=pe||(m.dirtyFields||y.dirtyFields)&&Ce!==!Oe}if(se){const Oe=Re(r.touchedFields,J);Oe||(xn(r.touchedFields,J,se),Ge.touchedFields=r.touchedFields,pe=pe||(m.touchedFields||y.touchedFields)&&Oe!==se)}pe&&ue&&v.state.next(Ge)}return pe?Ge:{}},_=(J,ee,se,ve)=>{const ue=Re(r.errors,J),pe=(m.isValid||y.isValid)&&Rr(ee)&&r.isValid!==ee;if(e.delayError&&se?(f=A(()=>R(J,se)),f(e.delayError)):(clearTimeout(p),f=null,se?xn(r.errors,J,se):$n(r.errors,J)),(se?!Ia(ue,se):ue)||!Ct(ve)||pe){const Ce={...ve,...pe&&Rr(ee)?{isValid:ee}:{},errors:r.errors,name:J};r={...r,...Ce},v.state.next(Ce)}},O=async J=>{N(J,!0);const ee=await e.resolver(l,e.context,tk(J||d.mount,i,e.criteriaMode,e.shouldUseNativeValidation));return N(J),ee},E=async J=>{const{errors:ee}=await O(J);if(J)for(const se of J){const ve=Re(ee,se);ve?xn(r.errors,se,ve):$n(r.errors,se)}else r.errors=ee;return ee},k=async(J,ee,se={valid:!0})=>{for(const ve in J){const ue=J[ve];if(ue){const{_f:pe,...Ce}=ue;if(pe){const Ge=d.array.has(pe.name),Oe=ue._f&&rk(ue._f);Oe&&m.validatingFields&&N([pe.name],!0);const Cn=await Hb(ue,d.disabled,l,x,e.shouldUseNativeValidation&&!ee,Ge);if(Oe&&m.validatingFields&&N([pe.name]),Cn[pe.name]&&(se.valid=!1,ee))break;!ee&&(Re(Cn,pe.name)?Ge?ck(r.errors,Cn,pe.name):xn(r.errors,pe.name,Cn[pe.name]):$n(r.errors,pe.name))}!Ct(Ce)&&await k(Ce,ee,se)}}return se.valid},j=()=>{for(const J of d.unMount){const ee=Re(i,J);ee&&(ee._f.refs?ee._f.refs.every(se=>!ym(se)):!ym(ee._f.ref))&&ce(J)}d.unMount=new Set},V=(J,ee)=>!e.disabled&&(J&&ee&&xn(l,J,ee),!Ia($(),s)),F=(J,ee,se)=>XR(J,d,{...u.mount?l:In(ee)?s:Jt(J)?{[J]:ee}:ee},se,ee),U=J=>fg(Re(u.mount?l:s,J,e.shouldUnregister?Re(s,J,[]):[])),H=(J,ee,se={})=>{const ve=Re(i,J);let ue=ee;if(ve){const pe=ve._f;pe&&(!pe.disabled&&xn(l,J,Fx(ee,pe)),ue=ju(pe.ref)&&Bt(ee)?"":ee,zx(pe.ref)?[...pe.ref.options].forEach(Ce=>Ce.selected=ue.includes(Ce.value)):pe.refs?Vl(pe.ref)?pe.refs.forEach(Ce=>{(!Ce.defaultChecked||!Ce.disabled)&&(Array.isArray(ue)?Ce.checked=!!ue.find(Ge=>Ge===Ce.value):Ce.checked=ue===Ce.value||!!ue)}):pe.refs.forEach(Ce=>Ce.checked=Ce.value===ue):mg(pe.ref)?pe.ref.value="":(pe.ref.value=ue,pe.ref.type||v.state.next({name:J,values:ut(l)})))}(se.shouldDirty||se.shouldTouch)&&G(J,ue,se.shouldTouch,se.shouldDirty,!0),se.shouldValidate&&q(J)},Y=(J,ee,se)=>{for(const ve in ee){if(!ee.hasOwnProperty(ve))return;const ue=ee[ve],pe=J+"."+ve,Ce=Re(i,pe);(d.array.has(J)||tt(ue)||Ce&&!Ce._f)&&!Di(ue)?Y(pe,ue,se):H(pe,ue,se)}},T=(J,ee,se={})=>{const ve=Re(i,J),ue=d.array.has(J),pe=ut(ee);xn(l,J,pe),ue?(v.array.next({name:J,values:ut(l)}),(m.isDirty||m.dirtyFields||y.isDirty||y.dirtyFields)&&se.shouldDirty&&v.state.next({name:J,dirtyFields:ks(s,l),isDirty:V(J,pe)})):ve&&!ve._f&&!Bt(pe)?Y(J,pe,se):H(J,pe,se),Vb(J,d)&&v.state.next({...r,name:J}),v.state.next({name:u.mount?J:void 0,values:ut(l)})},D=async J=>{u.mount=!0;const ee=J.target;let se=ee.name,ve=!0;const ue=Re(i,se),pe=Oe=>{ve=Number.isNaN(Oe)||Di(Oe)&&isNaN(Oe.getTime())||Ia(Oe,Re(l,se,Oe))},Ce=zb(e.mode),Ge=zb(e.reValidateMode);if(ue){let Oe,Cn;const An=ee.type?Ob(ue._f):UR(J),En=J.type===kb.BLUR||J.type===kb.FOCUS_OUT,ot=!ak(ue._f)&&!e.resolver&&!Re(r.errors,se)&&!ue._f.deps||ok(En,Re(r.touchedFields,se),r.isSubmitted,Ge,Ce),vn=Vb(se,d,En);xn(l,se,An),En?(!ee||!ee.readOnly)&&(ue._f.onBlur&&ue._f.onBlur(J),f&&f(0)):ue._f.onChange&&ue._f.onChange(J);const rn=G(se,An,En),Kn=!Ct(rn)||vn;if(!En&&v.state.next({name:se,type:J.type,values:ut(l)}),ot)return(m.isValid||y.isValid)&&(e.mode==="onBlur"?En&&S():En||S()),Kn&&v.state.next({name:se,...vn?{}:rn});if(!En&&vn&&v.state.next({...r}),e.resolver){const{errors:Yn}=await O([se]);if(pe(An),ve){const lo=Fb(r.errors,i,se),ha=Fb(Yn,i,lo.name||se);Oe=ha.error,se=ha.name,Cn=Ct(Yn)}}else N([se],!0),Oe=(await Hb(ue,d.disabled,l,x,e.shouldUseNativeValidation))[se],N([se]),pe(An),ve&&(Oe?Cn=!1:(m.isValid||y.isValid)&&(Cn=await k(i,!0)));ve&&(ue._f.deps&&(!Array.isArray(ue._f.deps)||ue._f.deps.length>0)&&q(ue._f.deps),_(se,Cn,Oe,rn))}},I=(J,ee)=>{if(Re(r.errors,ee)&&J.focus)return J.focus(),1},q=async(J,ee={})=>{let se,ve;const ue=yl(J);if(e.resolver){const pe=await E(In(J)?J:ue);se=Ct(pe),ve=J?!ue.some(Ce=>Re(pe,Ce)):se}else J?(ve=(await Promise.all(ue.map(async pe=>{const Ce=Re(i,pe);return await k(Ce&&Ce._f?{[pe]:Ce}:Ce)}))).every(Boolean),!(!ve&&!r.isValid)&&S()):ve=se=await k(i);return v.state.next({...!Jt(J)||(m.isValid||y.isValid)&&se!==r.isValid?{}:{name:J},...e.resolver||!J?{isValid:se}:{},errors:r.errors}),ee.shouldFocus&&!ve&&vl(i,I,J?ue:d.mount),ve},$=(J,ee)=>{let se={...u.mount?l:s};return ee&&(se=Ox(ee.dirtyFields?r.dirtyFields:r.touchedFields,se)),In(J)?se:Jt(J)?Re(se,J):J.map(ve=>Re(se,ve))},P=(J,ee)=>({invalid:!!Re((ee||r).errors,J),isDirty:!!Re((ee||r).dirtyFields,J),error:Re((ee||r).errors,J),isValidating:!!Re(r.validatingFields,J),isTouched:!!Re((ee||r).touchedFields,J)}),Z=J=>{J&&yl(J).forEach(ee=>$n(r.errors,ee)),v.state.next({errors:J?r.errors:{}})},te=(J,ee,se)=>{const ve=(Re(i,J,{_f:{}})._f||{}).ref,ue=Re(r.errors,J)||{},{ref:pe,message:Ce,type:Ge,...Oe}=ue;xn(r.errors,J,{...Oe,...ee,ref:ve}),v.state.next({name:J,errors:r.errors,isValid:!1}),se&&se.shouldFocus&&ve&&ve.focus&&ve.focus()},X=(J,ee)=>xr(J)?v.state.subscribe({next:se=>"values"in se&&J(F(void 0,ee),se)}):F(J,ee,!0),Q=J=>v.state.subscribe({next:ee=>{sk(J.name,ee.name,J.exact)&&ik(ee,J.formState||m,Fe,J.reRenderRoot)&&J.callback({values:{...l},...r,...ee,defaultValues:s})}}).unsubscribe,ye=J=>(u.mount=!0,y={...y,...J.formState},Q({...J,formState:y})),ce=(J,ee={})=>{for(const se of J?yl(J):d.mount)d.mount.delete(se),d.array.delete(se),ee.keepValue||($n(i,se),$n(l,se)),!ee.keepError&&$n(r.errors,se),!ee.keepDirty&&$n(r.dirtyFields,se),!ee.keepTouched&&$n(r.touchedFields,se),!ee.keepIsValidating&&$n(r.validatingFields,se),!e.shouldUnregister&&!ee.keepDefaultValue&&$n(s,se);v.state.next({values:ut(l)}),v.state.next({...r,...ee.keepDirty?{isDirty:V()}:{}}),!ee.keepIsValid&&S()},Se=({disabled:J,name:ee})=>{(Rr(J)&&u.mount||J||d.disabled.has(ee))&&(J?d.disabled.add(ee):d.disabled.delete(ee))},ge=(J,ee={})=>{let se=Re(i,J);const ve=Rr(ee.disabled)||Rr(e.disabled);return xn(i,J,{...se||{},_f:{...se&&se._f?se._f:{ref:{name:J}},name:J,mount:!0,...ee}}),d.mount.add(J),se?Se({disabled:Rr(ee.disabled)?ee.disabled:e.disabled,name:J}):z(J,!0,ee.value),{...ve?{disabled:ee.disabled||e.disabled}:{},...e.progressive?{required:!!ee.required,min:al(ee.min),max:al(ee.max),minLength:al(ee.minLength),maxLength:al(ee.maxLength),pattern:al(ee.pattern)}:{},name:J,onChange:D,onBlur:D,ref:ue=>{if(ue){ge(J,ee),se=Re(i,J);const pe=In(ue.value)&&ue.querySelectorAll&&ue.querySelectorAll("input,select,textarea")[0]||ue,Ce=QR(pe),Ge=se._f.refs||[];if(Ce?Ge.find(Oe=>Oe===pe):pe===se._f.ref)return;xn(i,J,{_f:{...se._f,...Ce?{refs:[...Ge.filter(ym),pe,...Array.isArray(Re(s,J))?[{}]:[]],ref:{type:pe.type,name:J}}:{ref:pe}}}),z(J,!1,void 0,pe)}else se=Re(i,J,{}),se._f&&(se._f.mount=!1),(e.shouldUnregister||ee.shouldUnregister)&&!(qR(d.array,J)&&u.action)&&d.unMount.add(J)}}},oe=()=>e.shouldFocusError&&vl(i,I,d.mount),fe=J=>{Rr(J)&&(v.state.next({disabled:J}),vl(i,(ee,se)=>{const ve=Re(i,se);ve&&(ee.disabled=ve._f.disabled||J,Array.isArray(ve._f.refs)&&ve._f.refs.forEach(ue=>{ue.disabled=ve._f.disabled||J}))},0,!1))},xe=(J,ee)=>async se=>{let ve;se&&(se.preventDefault&&se.preventDefault(),se.persist&&se.persist());let ue=ut(l);if(v.state.next({isSubmitting:!0}),e.resolver){const{errors:pe,values:Ce}=await O();r.errors=pe,ue=ut(Ce)}else await k(i);if(d.disabled.size)for(const pe of d.disabled)$n(ue,pe);if($n(r.errors,"root"),Ct(r.errors)){v.state.next({errors:{}});try{await J(ue,se)}catch(pe){ve=pe}}else ee&&await ee({...r.errors},se),oe(),setTimeout(oe);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ct(r.errors)&&!ve,submitCount:r.submitCount+1,errors:r.errors}),ve)throw ve},_e=(J,ee={})=>{Re(i,J)&&(In(ee.defaultValue)?T(J,ut(Re(s,J))):(T(J,ee.defaultValue),xn(s,J,ut(ee.defaultValue))),ee.keepTouched||$n(r.touchedFields,J),ee.keepDirty||($n(r.dirtyFields,J),r.isDirty=ee.defaultValue?V(J,ut(Re(s,J))):V()),ee.keepError||($n(r.errors,J),m.isValid&&S()),v.state.next({...r}))},Me=(J,ee={})=>{const se=J?ut(J):s,ve=ut(se),ue=Ct(J),pe=ue?s:ve;if(ee.keepDefaultValues||(s=se),!ee.keepValues){if(ee.keepDirtyValues){const Ce=new Set([...d.mount,...Object.keys(ks(s,l))]);for(const Ge of Array.from(Ce))Re(r.dirtyFields,Ge)?xn(pe,Ge,Re(l,Ge)):T(Ge,Re(pe,Ge))}else{if(dg&&In(J))for(const Ce of d.mount){const Ge=Re(i,Ce);if(Ge&&Ge._f){const Oe=Array.isArray(Ge._f.refs)?Ge._f.refs[0]:Ge._f.ref;if(ju(Oe)){const Cn=Oe.closest("form");if(Cn){Cn.reset();break}}}}if(ee.keepFieldsRef)for(const Ce of d.mount)T(Ce,Re(pe,Ce));else i={}}l=e.shouldUnregister?ee.keepDefaultValues?ut(s):{}:ut(pe),v.array.next({values:{...pe}}),v.state.next({values:{...pe}})}d={mount:ee.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!m.isValid||!!ee.keepIsValid||!!ee.keepDirtyValues||!e.shouldUnregister&&!Ct(pe),u.watch=!!e.shouldUnregister,v.state.next({submitCount:ee.keepSubmitCount?r.submitCount:0,isDirty:ue?!1:ee.keepDirty?r.isDirty:!!(ee.keepDefaultValues&&!Ia(J,s)),isSubmitted:ee.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:ue?{}:ee.keepDirtyValues?ee.keepDefaultValues&&l?ks(s,l):r.dirtyFields:ee.keepDefaultValues&&J?ks(s,J):ee.keepDirty?r.dirtyFields:{},touchedFields:ee.keepTouched?r.touchedFields:{},errors:ee.keepErrors?r.errors:{},isSubmitSuccessful:ee.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},Ae=(J,ee)=>Me(xr(J)?J(l):J,ee),Je=(J,ee={})=>{const se=Re(i,J),ve=se&&se._f;if(ve){const ue=ve.refs?ve.refs[0]:ve.ref;ue.focus&&(ue.focus(),ee.shouldSelect&&xr(ue.select)&&ue.select())}},Fe=J=>{r={...r,...J}},je={control:{register:ge,unregister:ce,getFieldState:P,handleSubmit:xe,setError:te,_subscribe:Q,_runSchema:O,_focusError:oe,_getWatch:F,_getDirty:V,_setValid:S,_setFieldArray:w,_setDisabledField:Se,_setErrors:L,_getFieldArray:U,_reset:Me,_resetDefaultValues:()=>xr(e.defaultValues)&&e.defaultValues().then(J=>{Ae(J,e.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:j,_disableForm:fe,_subjects:v,_proxyFormState:m,get _fields(){return i},get _formValues(){return l},get _state(){return u},set _state(J){u=J},get _defaultValues(){return s},get _names(){return d},set _names(J){d=J},get _formState(){return r},get _options(){return e},set _options(J){e={...e,...J}}},subscribe:ye,trigger:q,register:ge,handleSubmit:xe,watch:X,setValue:T,getValues:$,reset:Ae,resetField:_e,clearErrors:Z,unregister:ce,setError:te,setFocus:Je,getFieldState:P};return{...je,formControl:je}}function yd(n={}){const e=Hn.useRef(void 0),r=Hn.useRef(void 0),[i,s]=Hn.useState({isDirty:!1,isValidating:!1,isLoading:xr(n.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1,isReady:!1,defaultValues:xr(n.defaultValues)?void 0:n.defaultValues});if(!e.current)if(n.formControl)e.current={...n.formControl,formState:i},n.defaultValues&&!xr(n.defaultValues)&&n.formControl.reset(n.defaultValues,n.resetOptions);else{const{formControl:u,...d}=dk(n);e.current={...d,formState:i}}const l=e.current.control;return l._options=n,WR(()=>{const u=l._subscribe({formState:l._proxyFormState,callback:()=>s({...l._formState}),reRenderRoot:!0});return s(d=>({...d,isReady:!0})),l._formState.isReady=!0,u},[l]),Hn.useEffect(()=>l._disableForm(n.disabled),[l,n.disabled]),Hn.useEffect(()=>{n.mode&&(l._options.mode=n.mode),n.reValidateMode&&(l._options.reValidateMode=n.reValidateMode)},[l,n.mode,n.reValidateMode]),Hn.useEffect(()=>{n.errors&&(l._setErrors(n.errors),l._focusError())},[l,n.errors]),Hn.useEffect(()=>{n.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,n.shouldUnregister]),Hn.useEffect(()=>{if(l._proxyFormState.isDirty){const u=l._getDirty();u!==i.isDirty&&l._subjects.state.next({isDirty:u})}},[l,i.isDirty]),Hn.useEffect(()=>{var u;n.values&&!Ia(n.values,r.current)?(l._reset(n.values,{keepFieldsRef:!0,...l._options.resetOptions}),!((u=l._options.resetOptions)===null||u===void 0)&&u.keepIsValid||l._setValid(),r.current=n.values,s(d=>({...d}))):l._resetDefaultValues()},[l,n.values]),Hn.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),e.current.formState=ZR(i,l),e.current}const Ib=(n,e,r)=>{if(n&&"reportValidity"in n){const i=Re(r,e);n.setCustomValidity(i&&i.message||""),n.reportValidity()}},Hx=(n,e)=>{for(const r in e.fields){const i=e.fields[r];i&&i.ref&&"reportValidity"in i.ref?Ib(i.ref,r,n):i&&i.refs&&i.refs.forEach(s=>Ib(s,r,n))}},fk=(n,e)=>{e.shouldUseNativeValidation&&Hx(n,e);const r={};for(const i in n){const s=Re(e.fields,i),l=Object.assign(n[i]||{},{ref:s&&s.ref});if(hk(e.names||Object.keys(n),i)){const u=Object.assign({},Re(r,i));xn(u,"root",l),xn(r,i,u)}else xn(r,i,l)}return r},hk=(n,e)=>{const r=Ub(e);return n.some(i=>Ub(i).match(`^${r}\\.\\d+`))};function Ub(n){return n.replace(/\]|\[/g,"")}function mk(n,e){for(var r={};n.length;){var i=n[0],s=i.code,l=i.message,u=i.path.join(".");if(!r[u])if("unionErrors"in i){var d=i.unionErrors[0].errors[0];r[u]={message:d.message,type:d.code}}else r[u]={message:l,type:s};if("unionErrors"in i&&i.unionErrors.forEach(function(m){return m.errors.forEach(function(y){return n.push(y)})}),e){var f=r[u].types,p=f&&f[i.code];r[u]=_x(u,e,r,s,p?[].concat(p,i.message):i.message)}n.shift()}return r}function vd(n,e,r){return r===void 0&&(r={}),function(i,s,l){try{return Promise.resolve((function(u,d){try{var f=Promise.resolve(n[r.mode==="sync"?"parse":"parseAsync"](i,e)).then(function(p){return l.shouldUseNativeValidation&&Hx({},l),{errors:{},values:r.raw?Object.assign({},i):p}})}catch(p){return d(p)}return f&&f.then?f.then(void 0,d):f})(0,function(u){if((function(d){return Array.isArray(d?.errors)})(u))return{values:{},errors:fk(mk(u.errors,!l.shouldUseNativeValidation&&l.criteriaMode==="all"),l)};throw u}))}catch(u){return Promise.reject(u)}}}const pk="f729da03-646c-f011-b4cc-0022487492a4",gk=async(n,e)=>(console.log(`[DEV MODE - API DISABLED] API Call to trigger: ${n}`,e),new Promise(r=>{setTimeout(()=>{r({success:!0,data:e})},500)})),yk=n=>new Promise((e,r)=>{const i=new FileReader;i.readAsDataURL(n),i.onload=()=>{const l=i.result.split(",")[1];e(l)},i.onerror=s=>r(s)}),Ix=n=>n?n.toLowerCase().split(/(-|\s)/).map(e=>e==="-"||e===" "?e:e.charAt(0).toUpperCase()+e.slice(1)).join(""):"",vk=n=>{if(!n)return"";const e=n.split(" ")[0];return Ix(e)},bk=n=>({lastName:Ix(n.last_name),firstName:vk(n.first_names),gender:n.gender,nationality:n.nationality}),Ux=()=>{const n=async(l,u)=>gk(l,u);return{postData:n,verifyBirthDate:async l=>await n("verify-birthdate",{birthDate:l}),verifyOTP:async l=>await n("verify-otp",{code:l}),submitForm:async l=>await n("submit-preadmission",l),extractDocumentData:async(l,u)=>{try{console.log(`📄 OCR: Extraction des données du document ${u}...`);const d=await yk(l),f=u==="id_card"?"identityid":"insuranceid";return typeof window.shell<"u"&&window.shell.ajaxSafePost?new Promise((p,m)=>{window.shell.ajaxSafePost({type:"POST",url:`/_api/cloudflow/v1.0/trigger/${pk}`,data:{eventData:JSON.stringify({doc:f,base64:d})}}).done(function(y){console.log("Cloud flow OCR appelé avec succès (raw):",y);try{let v={};if(typeof y=="string"){const A=JSON.parse(y);A.json&&typeof A.json=="string"?v=JSON.parse(A.json):v=A}else y.json&&typeof y.json=="string"?v=JSON.parse(y.json):v=y;console.log("📄 OCR: Données brutes parsées:",v);const x=bk(v);console.log("📄 OCR: Données mappées:",x),p(x)}catch(v){console.error("Erreur parsing réponse OCR:",v),m(v)}}).fail(function(y){console.error("❌ Erreur Cloud flow OCR:",y),m(y)})}):(console.log("[DEV MODE] OCR Cloud Flow Call",{docType:f,base64Length:d.length}),new Promise(p=>{setTimeout(()=>{p({lastName:"Dupont",firstName:"Jean",gender:"male",nationality:"CH"})},1500)}))}catch(d){return console.error("❌ OCR: Erreur lors de l'extraction:",d),null}}}};var ln;(function(n){n.assertEqual=s=>{};function e(s){}n.assertIs=e;function r(s){throw new Error}n.assertNever=r,n.arrayToEnum=s=>{const l={};for(const u of s)l[u]=u;return l},n.getValidEnumValues=s=>{const l=n.objectKeys(s).filter(d=>typeof s[s[d]]!="number"),u={};for(const d of l)u[d]=s[d];return n.objectValues(u)},n.objectValues=s=>n.objectKeys(s).map(function(l){return s[l]}),n.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const l=[];for(const u in s)Object.prototype.hasOwnProperty.call(s,u)&&l.push(u);return l},n.find=(s,l)=>{for(const u of s)if(l(u))return u},n.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function i(s,l=" | "){return s.map(u=>typeof u=="string"?`'${u}'`:u).join(l)}n.joinValues=i,n.jsonStringifyReplacer=(s,l)=>typeof l=="bigint"?l.toString():l})(ln||(ln={}));var Jb;(function(n){n.mergeShapes=(e,r)=>({...e,...r})})(Jb||(Jb={}));const ke=ln.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ha=n=>{switch(typeof n){case"undefined":return ke.undefined;case"string":return ke.string;case"number":return Number.isNaN(n)?ke.nan:ke.number;case"boolean":return ke.boolean;case"function":return ke.function;case"bigint":return ke.bigint;case"symbol":return ke.symbol;case"object":return Array.isArray(n)?ke.array:n===null?ke.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?ke.promise:typeof Map<"u"&&n instanceof Map?ke.map:typeof Set<"u"&&n instanceof Set?ke.set:typeof Date<"u"&&n instanceof Date?ke.date:ke.object;default:return ke.unknown}},be=ln.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class fa extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}format(e){const r=e||function(l){return l.message},i={_errors:[]},s=l=>{for(const u of l.issues)if(u.code==="invalid_union")u.unionErrors.map(s);else if(u.code==="invalid_return_type")s(u.returnTypeError);else if(u.code==="invalid_arguments")s(u.argumentsError);else if(u.path.length===0)i._errors.push(r(u));else{let d=i,f=0;for(;f<u.path.length;){const p=u.path[f];f===u.path.length-1?(d[p]=d[p]||{_errors:[]},d[p]._errors.push(r(u))):d[p]=d[p]||{_errors:[]},d=d[p],f++}}};return s(this),i}static assert(e){if(!(e instanceof fa))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ln.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){const r={},i=[];for(const s of this.issues)if(s.path.length>0){const l=s.path[0];r[l]=r[l]||[],r[l].push(e(s))}else i.push(e(s));return{formErrors:i,fieldErrors:r}}get formErrors(){return this.flatten()}}fa.create=n=>new fa(n);const ap=(n,e)=>{let r;switch(n.code){case be.invalid_type:n.received===ke.undefined?r="Required":r=`Expected ${n.expected}, received ${n.received}`;break;case be.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(n.expected,ln.jsonStringifyReplacer)}`;break;case be.unrecognized_keys:r=`Unrecognized key(s) in object: ${ln.joinValues(n.keys,", ")}`;break;case be.invalid_union:r="Invalid input";break;case be.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${ln.joinValues(n.options)}`;break;case be.invalid_enum_value:r=`Invalid enum value. Expected ${ln.joinValues(n.options)}, received '${n.received}'`;break;case be.invalid_arguments:r="Invalid function arguments";break;case be.invalid_return_type:r="Invalid function return type";break;case be.invalid_date:r="Invalid date";break;case be.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(r=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?r=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?r=`Invalid input: must end with "${n.validation.endsWith}"`:ln.assertNever(n.validation):n.validation!=="regex"?r=`Invalid ${n.validation}`:r="Invalid";break;case be.too_small:n.type==="array"?r=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?r=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?r=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="bigint"?r=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?r=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:r="Invalid input";break;case be.too_big:n.type==="array"?r=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?r=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?r=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?r=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?r=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:r="Invalid input";break;case be.custom:r="Invalid input";break;case be.invalid_intersection_types:r="Intersection results could not be merged";break;case be.not_multiple_of:r=`Number must be a multiple of ${n.multipleOf}`;break;case be.not_finite:r="Number must be finite";break;default:r=e.defaultError,ln.assertNever(n)}return{message:r}};let xk=ap;function Sk(){return xk}const Mk=n=>{const{data:e,path:r,errorMaps:i,issueData:s}=n,l=[...r,...s.path||[]],u={...s,path:l};if(s.message!==void 0)return{...s,path:l,message:s.message};let d="";const f=i.filter(p=>!!p).slice().reverse();for(const p of f)d=p(u,{data:e,defaultError:d}).message;return{...s,path:l,message:d}};function we(n,e){const r=Sk(),i=Mk({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,r,r===ap?void 0:ap].filter(s=>!!s)});n.common.issues.push(i)}class Kt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){const i=[];for(const s of r){if(s.status==="aborted")return Ie;s.status==="dirty"&&e.dirty(),i.push(s.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,r){const i=[];for(const s of r){const l=await s.key,u=await s.value;i.push({key:l,value:u})}return Kt.mergeObjectSync(e,i)}static mergeObjectSync(e,r){const i={};for(const s of r){const{key:l,value:u}=s;if(l.status==="aborted"||u.status==="aborted")return Ie;l.status==="dirty"&&e.dirty(),u.status==="dirty"&&e.dirty(),l.value!=="__proto__"&&(typeof u.value<"u"||s.alwaysSet)&&(i[l.value]=u.value)}return{status:e.value,value:i}}}const Ie=Object.freeze({status:"aborted"}),dl=n=>({status:"dirty",value:n}),lr=n=>({status:"valid",value:n}),qb=n=>n.status==="aborted",Kb=n=>n.status==="dirty",qs=n=>n.status==="valid",Fu=n=>typeof Promise<"u"&&n instanceof Promise;var Be;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e?.message})(Be||(Be={}));class Qa{constructor(e,r,i,s){this._cachedPath=[],this.parent=e,this.data=r,this._path=i,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Yb=(n,e)=>{if(qs(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new fa(n.common.issues);return this._error=r,this._error}}};function We(n){if(!n)return{};const{errorMap:e,invalid_type_error:r,required_error:i,description:s}=n;if(e&&(r||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(u,d)=>{const{message:f}=n;return u.code==="invalid_enum_value"?{message:f??d.defaultError}:typeof d.data>"u"?{message:f??i??d.defaultError}:u.code!=="invalid_type"?{message:d.defaultError}:{message:f??r??d.defaultError}},description:s}}class tn{get description(){return this._def.description}_getType(e){return Ha(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:Ha(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Kt,ctx:{common:e.parent.common,data:e.data,parsedType:Ha(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const r=this._parse(e);if(Fu(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){const r=this._parse(e);return Promise.resolve(r)}parse(e,r){const i=this.safeParse(e,r);if(i.success)return i.data;throw i.error}safeParse(e,r){const i={common:{issues:[],async:r?.async??!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ha(e)},s=this._parseSync({data:e,path:i.path,parent:i});return Yb(i,s)}"~validate"(e){const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ha(e)};if(!this["~standard"].async)try{const i=this._parseSync({data:e,path:[],parent:r});return qs(i)?{value:i.value}:{issues:r.common.issues}}catch(i){i?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:r}).then(i=>qs(i)?{value:i.value}:{issues:r.common.issues})}async parseAsync(e,r){const i=await this.safeParseAsync(e,r);if(i.success)return i.data;throw i.error}async safeParseAsync(e,r){const i={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ha(e)},s=this._parse({data:e,path:i.path,parent:i}),l=await(Fu(s)?s:Promise.resolve(s));return Yb(i,l)}refine(e,r){const i=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,l)=>{const u=e(s),d=()=>l.addIssue({code:be.custom,...i(s)});return typeof Promise<"u"&&u instanceof Promise?u.then(f=>f?!0:(d(),!1)):u?!0:(d(),!1)})}refinement(e,r){return this._refinement((i,s)=>e(i)?!0:(s.addIssue(typeof r=="function"?r(i,s):r),!1))}_refinement(e){return new Ys({schema:this,typeName:Ue.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return Ja.create(this,this._def)}nullable(){return Zs.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Vr.create(this)}promise(){return Uu.create(this,this._def)}or(e){return Hu.create([this,e],this._def)}and(e){return Iu.create(this,e,this._def)}transform(e){return new Ys({...We(this._def),schema:this,typeName:Ue.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const r=typeof e=="function"?e:()=>e;return new op({...We(this._def),innerType:this,defaultValue:r,typeName:Ue.ZodDefault})}brand(){return new Jk({typeName:Ue.ZodBranded,type:this,...We(this._def)})}catch(e){const r=typeof e=="function"?e:()=>e;return new lp({...We(this._def),innerType:this,catchValue:r,typeName:Ue.ZodCatch})}describe(e){const r=this.constructor;return new r({...this._def,description:e})}pipe(e){return gg.create(this,e)}readonly(){return cp.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ck=/^c[^\s-]{8,}$/i,Ak=/^[0-9a-z]+$/,wk=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Tk=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Dk=/^[a-z0-9_-]{21}$/i,Ek=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Nk=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Rk=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,kk="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let vm;const Pk=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Bk=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Lk=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,_k=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ok=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,zk=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Jx="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",jk=new RegExp(`^${Jx}$`);function qx(n){let e="[0-5]\\d";n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`);const r=n.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${r}`}function Vk(n){return new RegExp(`^${qx(n)}$`)}function Fk(n){let e=`${Jx}T${qx(n)}`;const r=[];return r.push(n.local?"Z?":"Z"),n.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function Gk(n,e){return!!((e==="v4"||!e)&&Pk.test(n)||(e==="v6"||!e)&&Lk.test(n))}function Hk(n,e){if(!Ek.test(n))return!1;try{const[r]=n.split(".");if(!r)return!1;const i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),s=JSON.parse(atob(i));return!(typeof s!="object"||s===null||"typ"in s&&s?.typ!=="JWT"||!s.alg||e&&s.alg!==e)}catch{return!1}}function Ik(n,e){return!!((e==="v4"||!e)&&Bk.test(n)||(e==="v6"||!e)&&_k.test(n))}class Ua extends tn{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==ke.string){const l=this._getOrReturnCtx(e);return we(l,{code:be.invalid_type,expected:ke.string,received:l.parsedType}),Ie}const i=new Kt;let s;for(const l of this._def.checks)if(l.kind==="min")e.data.length<l.value&&(s=this._getOrReturnCtx(e,s),we(s,{code:be.too_small,minimum:l.value,type:"string",inclusive:!0,exact:!1,message:l.message}),i.dirty());else if(l.kind==="max")e.data.length>l.value&&(s=this._getOrReturnCtx(e,s),we(s,{code:be.too_big,maximum:l.value,type:"string",inclusive:!0,exact:!1,message:l.message}),i.dirty());else if(l.kind==="length"){const u=e.data.length>l.value,d=e.data.length<l.value;(u||d)&&(s=this._getOrReturnCtx(e,s),u?we(s,{code:be.too_big,maximum:l.value,type:"string",inclusive:!0,exact:!0,message:l.message}):d&&we(s,{code:be.too_small,minimum:l.value,type:"string",inclusive:!0,exact:!0,message:l.message}),i.dirty())}else if(l.kind==="email")Rk.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"email",code:be.invalid_string,message:l.message}),i.dirty());else if(l.kind==="emoji")vm||(vm=new RegExp(kk,"u")),vm.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"emoji",code:be.invalid_string,message:l.message}),i.dirty());else if(l.kind==="uuid")Tk.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"uuid",code:be.invalid_string,message:l.message}),i.dirty());else if(l.kind==="nanoid")Dk.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"nanoid",code:be.invalid_string,message:l.message}),i.dirty());else if(l.kind==="cuid")Ck.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"cuid",code:be.invalid_string,message:l.message}),i.dirty());else if(l.kind==="cuid2")Ak.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"cuid2",code:be.invalid_string,message:l.message}),i.dirty());else if(l.kind==="ulid")wk.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"ulid",code:be.invalid_string,message:l.message}),i.dirty());else if(l.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),we(s,{validation:"url",code:be.invalid_string,message:l.message}),i.dirty()}else l.kind==="regex"?(l.regex.lastIndex=0,l.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"regex",code:be.invalid_string,message:l.message}),i.dirty())):l.kind==="trim"?e.data=e.data.trim():l.kind==="includes"?e.data.includes(l.value,l.position)||(s=this._getOrReturnCtx(e,s),we(s,{code:be.invalid_string,validation:{includes:l.value,position:l.position},message:l.message}),i.dirty()):l.kind==="toLowerCase"?e.data=e.data.toLowerCase():l.kind==="toUpperCase"?e.data=e.data.toUpperCase():l.kind==="startsWith"?e.data.startsWith(l.value)||(s=this._getOrReturnCtx(e,s),we(s,{code:be.invalid_string,validation:{startsWith:l.value},message:l.message}),i.dirty()):l.kind==="endsWith"?e.data.endsWith(l.value)||(s=this._getOrReturnCtx(e,s),we(s,{code:be.invalid_string,validation:{endsWith:l.value},message:l.message}),i.dirty()):l.kind==="datetime"?Fk(l).test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{code:be.invalid_string,validation:"datetime",message:l.message}),i.dirty()):l.kind==="date"?jk.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{code:be.invalid_string,validation:"date",message:l.message}),i.dirty()):l.kind==="time"?Vk(l).test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{code:be.invalid_string,validation:"time",message:l.message}),i.dirty()):l.kind==="duration"?Nk.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"duration",code:be.invalid_string,message:l.message}),i.dirty()):l.kind==="ip"?Gk(e.data,l.version)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"ip",code:be.invalid_string,message:l.message}),i.dirty()):l.kind==="jwt"?Hk(e.data,l.alg)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"jwt",code:be.invalid_string,message:l.message}),i.dirty()):l.kind==="cidr"?Ik(e.data,l.version)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"cidr",code:be.invalid_string,message:l.message}),i.dirty()):l.kind==="base64"?Ok.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"base64",code:be.invalid_string,message:l.message}),i.dirty()):l.kind==="base64url"?zk.test(e.data)||(s=this._getOrReturnCtx(e,s),we(s,{validation:"base64url",code:be.invalid_string,message:l.message}),i.dirty()):ln.assertNever(l);return{status:i.value,value:e.data}}_regex(e,r,i){return this.refinement(s=>e.test(s),{validation:r,code:be.invalid_string,...Be.errToObj(i)})}_addCheck(e){return new Ua({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Be.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Be.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Be.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Be.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Be.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Be.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Be.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Be.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Be.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...Be.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...Be.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Be.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...Be.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...Be.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...Be.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...Be.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...Be.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...Be.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...Be.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...Be.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...Be.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...Be.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...Be.errToObj(r)})}nonempty(e){return this.min(1,Be.errToObj(e))}trim(){return new Ua({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Ua({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Ua({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}Ua.create=n=>new Ua({checks:[],typeName:Ue.ZodString,coerce:n?.coerce??!1,...We(n)});function Uk(n,e){const r=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,s=r>i?r:i,l=Number.parseInt(n.toFixed(s).replace(".","")),u=Number.parseInt(e.toFixed(s).replace(".",""));return l%u/10**s}class Dl extends tn{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==ke.number){const l=this._getOrReturnCtx(e);return we(l,{code:be.invalid_type,expected:ke.number,received:l.parsedType}),Ie}let i;const s=new Kt;for(const l of this._def.checks)l.kind==="int"?ln.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),we(i,{code:be.invalid_type,expected:"integer",received:"float",message:l.message}),s.dirty()):l.kind==="min"?(l.inclusive?e.data<l.value:e.data<=l.value)&&(i=this._getOrReturnCtx(e,i),we(i,{code:be.too_small,minimum:l.value,type:"number",inclusive:l.inclusive,exact:!1,message:l.message}),s.dirty()):l.kind==="max"?(l.inclusive?e.data>l.value:e.data>=l.value)&&(i=this._getOrReturnCtx(e,i),we(i,{code:be.too_big,maximum:l.value,type:"number",inclusive:l.inclusive,exact:!1,message:l.message}),s.dirty()):l.kind==="multipleOf"?Uk(e.data,l.value)!==0&&(i=this._getOrReturnCtx(e,i),we(i,{code:be.not_multiple_of,multipleOf:l.value,message:l.message}),s.dirty()):l.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),we(i,{code:be.not_finite,message:l.message}),s.dirty()):ln.assertNever(l);return{status:s.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,Be.toString(r))}gt(e,r){return this.setLimit("min",e,!1,Be.toString(r))}lte(e,r){return this.setLimit("max",e,!0,Be.toString(r))}lt(e,r){return this.setLimit("max",e,!1,Be.toString(r))}setLimit(e,r,i,s){return new Dl({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:Be.toString(s)}]})}_addCheck(e){return new Dl({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Be.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Be.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Be.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Be.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Be.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:Be.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:Be.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Be.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Be.toString(e)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ln.isInteger(e.value))}get isFinite(){let e=null,r=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(r===null||i.value>r)&&(r=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(r)&&Number.isFinite(e)}}Dl.create=n=>new Dl({checks:[],typeName:Ue.ZodNumber,coerce:n?.coerce||!1,...We(n)});class El extends tn{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==ke.bigint)return this._getInvalidInput(e);let i;const s=new Kt;for(const l of this._def.checks)l.kind==="min"?(l.inclusive?e.data<l.value:e.data<=l.value)&&(i=this._getOrReturnCtx(e,i),we(i,{code:be.too_small,type:"bigint",minimum:l.value,inclusive:l.inclusive,message:l.message}),s.dirty()):l.kind==="max"?(l.inclusive?e.data>l.value:e.data>=l.value)&&(i=this._getOrReturnCtx(e,i),we(i,{code:be.too_big,type:"bigint",maximum:l.value,inclusive:l.inclusive,message:l.message}),s.dirty()):l.kind==="multipleOf"?e.data%l.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),we(i,{code:be.not_multiple_of,multipleOf:l.value,message:l.message}),s.dirty()):ln.assertNever(l);return{status:s.value,value:e.data}}_getInvalidInput(e){const r=this._getOrReturnCtx(e);return we(r,{code:be.invalid_type,expected:ke.bigint,received:r.parsedType}),Ie}gte(e,r){return this.setLimit("min",e,!0,Be.toString(r))}gt(e,r){return this.setLimit("min",e,!1,Be.toString(r))}lte(e,r){return this.setLimit("max",e,!0,Be.toString(r))}lt(e,r){return this.setLimit("max",e,!1,Be.toString(r))}setLimit(e,r,i,s){return new El({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:i,message:Be.toString(s)}]})}_addCheck(e){return new El({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Be.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Be.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Be.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Be.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:Be.toString(r)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}El.create=n=>new El({checks:[],typeName:Ue.ZodBigInt,coerce:n?.coerce??!1,...We(n)});class ip extends tn{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==ke.boolean){const i=this._getOrReturnCtx(e);return we(i,{code:be.invalid_type,expected:ke.boolean,received:i.parsedType}),Ie}return lr(e.data)}}ip.create=n=>new ip({typeName:Ue.ZodBoolean,coerce:n?.coerce||!1,...We(n)});class Gu extends tn{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==ke.date){const l=this._getOrReturnCtx(e);return we(l,{code:be.invalid_type,expected:ke.date,received:l.parsedType}),Ie}if(Number.isNaN(e.data.getTime())){const l=this._getOrReturnCtx(e);return we(l,{code:be.invalid_date}),Ie}const i=new Kt;let s;for(const l of this._def.checks)l.kind==="min"?e.data.getTime()<l.value&&(s=this._getOrReturnCtx(e,s),we(s,{code:be.too_small,message:l.message,inclusive:!0,exact:!1,minimum:l.value,type:"date"}),i.dirty()):l.kind==="max"?e.data.getTime()>l.value&&(s=this._getOrReturnCtx(e,s),we(s,{code:be.too_big,message:l.message,inclusive:!0,exact:!1,maximum:l.value,type:"date"}),i.dirty()):ln.assertNever(l);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Gu({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:Be.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:Be.toString(r)})}get minDate(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}}Gu.create=n=>new Gu({checks:[],coerce:n?.coerce||!1,typeName:Ue.ZodDate,...We(n)});class Zb extends tn{_parse(e){if(this._getType(e)!==ke.symbol){const i=this._getOrReturnCtx(e);return we(i,{code:be.invalid_type,expected:ke.symbol,received:i.parsedType}),Ie}return lr(e.data)}}Zb.create=n=>new Zb({typeName:Ue.ZodSymbol,...We(n)});class Wb extends tn{_parse(e){if(this._getType(e)!==ke.undefined){const i=this._getOrReturnCtx(e);return we(i,{code:be.invalid_type,expected:ke.undefined,received:i.parsedType}),Ie}return lr(e.data)}}Wb.create=n=>new Wb({typeName:Ue.ZodUndefined,...We(n)});class Xb extends tn{_parse(e){if(this._getType(e)!==ke.null){const i=this._getOrReturnCtx(e);return we(i,{code:be.invalid_type,expected:ke.null,received:i.parsedType}),Ie}return lr(e.data)}}Xb.create=n=>new Xb({typeName:Ue.ZodNull,...We(n)});class Nl extends tn{constructor(){super(...arguments),this._any=!0}_parse(e){return lr(e.data)}}Nl.create=n=>new Nl({typeName:Ue.ZodAny,...We(n)});class Qb extends tn{constructor(){super(...arguments),this._unknown=!0}_parse(e){return lr(e.data)}}Qb.create=n=>new Qb({typeName:Ue.ZodUnknown,...We(n)});class $a extends tn{_parse(e){const r=this._getOrReturnCtx(e);return we(r,{code:be.invalid_type,expected:ke.never,received:r.parsedType}),Ie}}$a.create=n=>new $a({typeName:Ue.ZodNever,...We(n)});class $b extends tn{_parse(e){if(this._getType(e)!==ke.undefined){const i=this._getOrReturnCtx(e);return we(i,{code:be.invalid_type,expected:ke.void,received:i.parsedType}),Ie}return lr(e.data)}}$b.create=n=>new $b({typeName:Ue.ZodVoid,...We(n)});class Vr extends tn{_parse(e){const{ctx:r,status:i}=this._processInputParams(e),s=this._def;if(r.parsedType!==ke.array)return we(r,{code:be.invalid_type,expected:ke.array,received:r.parsedType}),Ie;if(s.exactLength!==null){const u=r.data.length>s.exactLength.value,d=r.data.length<s.exactLength.value;(u||d)&&(we(r,{code:u?be.too_big:be.too_small,minimum:d?s.exactLength.value:void 0,maximum:u?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),i.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(we(r,{code:be.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),i.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(we(r,{code:be.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),i.dirty()),r.common.async)return Promise.all([...r.data].map((u,d)=>s.type._parseAsync(new Qa(r,u,r.path,d)))).then(u=>Kt.mergeArray(i,u));const l=[...r.data].map((u,d)=>s.type._parseSync(new Qa(r,u,r.path,d)));return Kt.mergeArray(i,l)}get element(){return this._def.type}min(e,r){return new Vr({...this._def,minLength:{value:e,message:Be.toString(r)}})}max(e,r){return new Vr({...this._def,maxLength:{value:e,message:Be.toString(r)}})}length(e,r){return new Vr({...this._def,exactLength:{value:e,message:Be.toString(r)}})}nonempty(e){return this.min(1,e)}}Vr.create=(n,e)=>new Vr({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Ue.ZodArray,...We(e)});function Ps(n){if(n instanceof nt){const e={};for(const r in n.shape){const i=n.shape[r];e[r]=Ja.create(Ps(i))}return new nt({...n._def,shape:()=>e})}else return n instanceof Vr?new Vr({...n._def,type:Ps(n.element)}):n instanceof Ja?Ja.create(Ps(n.unwrap())):n instanceof Zs?Zs.create(Ps(n.unwrap())):n instanceof Oi?Oi.create(n.items.map(e=>Ps(e))):n}class nt extends tn{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),r=ln.objectKeys(e);return this._cached={shape:e,keys:r},this._cached}_parse(e){if(this._getType(e)!==ke.object){const p=this._getOrReturnCtx(e);return we(p,{code:be.invalid_type,expected:ke.object,received:p.parsedType}),Ie}const{status:i,ctx:s}=this._processInputParams(e),{shape:l,keys:u}=this._getCached(),d=[];if(!(this._def.catchall instanceof $a&&this._def.unknownKeys==="strip"))for(const p in s.data)u.includes(p)||d.push(p);const f=[];for(const p of u){const m=l[p],y=s.data[p];f.push({key:{status:"valid",value:p},value:m._parse(new Qa(s,y,s.path,p)),alwaysSet:p in s.data})}if(this._def.catchall instanceof $a){const p=this._def.unknownKeys;if(p==="passthrough")for(const m of d)f.push({key:{status:"valid",value:m},value:{status:"valid",value:s.data[m]}});else if(p==="strict")d.length>0&&(we(s,{code:be.unrecognized_keys,keys:d}),i.dirty());else if(p!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const p=this._def.catchall;for(const m of d){const y=s.data[m];f.push({key:{status:"valid",value:m},value:p._parse(new Qa(s,y,s.path,m)),alwaysSet:m in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const p=[];for(const m of f){const y=await m.key,v=await m.value;p.push({key:y,value:v,alwaysSet:m.alwaysSet})}return p}).then(p=>Kt.mergeObjectSync(i,p)):Kt.mergeObjectSync(i,f)}get shape(){return this._def.shape()}strict(e){return Be.errToObj,new nt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,i)=>{const s=this._def.errorMap?.(r,i).message??i.defaultError;return r.code==="unrecognized_keys"?{message:Be.errToObj(e).message??s}:{message:s}}}:{}})}strip(){return new nt({...this._def,unknownKeys:"strip"})}passthrough(){return new nt({...this._def,unknownKeys:"passthrough"})}extend(e){return new nt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new nt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ue.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new nt({...this._def,catchall:e})}pick(e){const r={};for(const i of ln.objectKeys(e))e[i]&&this.shape[i]&&(r[i]=this.shape[i]);return new nt({...this._def,shape:()=>r})}omit(e){const r={};for(const i of ln.objectKeys(this.shape))e[i]||(r[i]=this.shape[i]);return new nt({...this._def,shape:()=>r})}deepPartial(){return Ps(this)}partial(e){const r={};for(const i of ln.objectKeys(this.shape)){const s=this.shape[i];e&&!e[i]?r[i]=s:r[i]=s.optional()}return new nt({...this._def,shape:()=>r})}required(e){const r={};for(const i of ln.objectKeys(this.shape))if(e&&!e[i])r[i]=this.shape[i];else{let l=this.shape[i];for(;l instanceof Ja;)l=l._def.innerType;r[i]=l}return new nt({...this._def,shape:()=>r})}keyof(){return Kx(ln.objectKeys(this.shape))}}nt.create=(n,e)=>new nt({shape:()=>n,unknownKeys:"strip",catchall:$a.create(),typeName:Ue.ZodObject,...We(e)});nt.strictCreate=(n,e)=>new nt({shape:()=>n,unknownKeys:"strict",catchall:$a.create(),typeName:Ue.ZodObject,...We(e)});nt.lazycreate=(n,e)=>new nt({shape:n,unknownKeys:"strip",catchall:$a.create(),typeName:Ue.ZodObject,...We(e)});class Hu extends tn{_parse(e){const{ctx:r}=this._processInputParams(e),i=this._def.options;function s(l){for(const d of l)if(d.result.status==="valid")return d.result;for(const d of l)if(d.result.status==="dirty")return r.common.issues.push(...d.ctx.common.issues),d.result;const u=l.map(d=>new fa(d.ctx.common.issues));return we(r,{code:be.invalid_union,unionErrors:u}),Ie}if(r.common.async)return Promise.all(i.map(async l=>{const u={...r,common:{...r.common,issues:[]},parent:null};return{result:await l._parseAsync({data:r.data,path:r.path,parent:u}),ctx:u}})).then(s);{let l;const u=[];for(const f of i){const p={...r,common:{...r.common,issues:[]},parent:null},m=f._parseSync({data:r.data,path:r.path,parent:p});if(m.status==="valid")return m;m.status==="dirty"&&!l&&(l={result:m,ctx:p}),p.common.issues.length&&u.push(p.common.issues)}if(l)return r.common.issues.push(...l.ctx.common.issues),l.result;const d=u.map(f=>new fa(f));return we(r,{code:be.invalid_union,unionErrors:d}),Ie}}get options(){return this._def.options}}Hu.create=(n,e)=>new Hu({options:n,typeName:Ue.ZodUnion,...We(e)});function sp(n,e){const r=Ha(n),i=Ha(e);if(n===e)return{valid:!0,data:n};if(r===ke.object&&i===ke.object){const s=ln.objectKeys(e),l=ln.objectKeys(n).filter(d=>s.indexOf(d)!==-1),u={...n,...e};for(const d of l){const f=sp(n[d],e[d]);if(!f.valid)return{valid:!1};u[d]=f.data}return{valid:!0,data:u}}else if(r===ke.array&&i===ke.array){if(n.length!==e.length)return{valid:!1};const s=[];for(let l=0;l<n.length;l++){const u=n[l],d=e[l],f=sp(u,d);if(!f.valid)return{valid:!1};s.push(f.data)}return{valid:!0,data:s}}else return r===ke.date&&i===ke.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class Iu extends tn{_parse(e){const{status:r,ctx:i}=this._processInputParams(e),s=(l,u)=>{if(qb(l)||qb(u))return Ie;const d=sp(l.value,u.value);return d.valid?((Kb(l)||Kb(u))&&r.dirty(),{status:r.value,value:d.data}):(we(i,{code:be.invalid_intersection_types}),Ie)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([l,u])=>s(l,u)):s(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Iu.create=(n,e,r)=>new Iu({left:n,right:e,typeName:Ue.ZodIntersection,...We(r)});class Oi extends tn{_parse(e){const{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==ke.array)return we(i,{code:be.invalid_type,expected:ke.array,received:i.parsedType}),Ie;if(i.data.length<this._def.items.length)return we(i,{code:be.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ie;!this._def.rest&&i.data.length>this._def.items.length&&(we(i,{code:be.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const l=[...i.data].map((u,d)=>{const f=this._def.items[d]||this._def.rest;return f?f._parse(new Qa(i,u,i.path,d)):null}).filter(u=>!!u);return i.common.async?Promise.all(l).then(u=>Kt.mergeArray(r,u)):Kt.mergeArray(r,l)}get items(){return this._def.items}rest(e){return new Oi({...this._def,rest:e})}}Oi.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Oi({items:n,typeName:Ue.ZodTuple,rest:null,...We(e)})};class e4 extends tn{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==ke.map)return we(i,{code:be.invalid_type,expected:ke.map,received:i.parsedType}),Ie;const s=this._def.keyType,l=this._def.valueType,u=[...i.data.entries()].map(([d,f],p)=>({key:s._parse(new Qa(i,d,i.path,[p,"key"])),value:l._parse(new Qa(i,f,i.path,[p,"value"]))}));if(i.common.async){const d=new Map;return Promise.resolve().then(async()=>{for(const f of u){const p=await f.key,m=await f.value;if(p.status==="aborted"||m.status==="aborted")return Ie;(p.status==="dirty"||m.status==="dirty")&&r.dirty(),d.set(p.value,m.value)}return{status:r.value,value:d}})}else{const d=new Map;for(const f of u){const p=f.key,m=f.value;if(p.status==="aborted"||m.status==="aborted")return Ie;(p.status==="dirty"||m.status==="dirty")&&r.dirty(),d.set(p.value,m.value)}return{status:r.value,value:d}}}}e4.create=(n,e,r)=>new e4({valueType:e,keyType:n,typeName:Ue.ZodMap,...We(r)});class Rl extends tn{_parse(e){const{status:r,ctx:i}=this._processInputParams(e);if(i.parsedType!==ke.set)return we(i,{code:be.invalid_type,expected:ke.set,received:i.parsedType}),Ie;const s=this._def;s.minSize!==null&&i.data.size<s.minSize.value&&(we(i,{code:be.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&i.data.size>s.maxSize.value&&(we(i,{code:be.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());const l=this._def.valueType;function u(f){const p=new Set;for(const m of f){if(m.status==="aborted")return Ie;m.status==="dirty"&&r.dirty(),p.add(m.value)}return{status:r.value,value:p}}const d=[...i.data.values()].map((f,p)=>l._parse(new Qa(i,f,i.path,p)));return i.common.async?Promise.all(d).then(f=>u(f)):u(d)}min(e,r){return new Rl({...this._def,minSize:{value:e,message:Be.toString(r)}})}max(e,r){return new Rl({...this._def,maxSize:{value:e,message:Be.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}}Rl.create=(n,e)=>new Rl({valueType:n,minSize:null,maxSize:null,typeName:Ue.ZodSet,...We(e)});class n4 extends tn{get schema(){return this._def.getter()}_parse(e){const{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}n4.create=(n,e)=>new n4({getter:n,typeName:Ue.ZodLazy,...We(e)});class t4 extends tn{_parse(e){if(e.data!==this._def.value){const r=this._getOrReturnCtx(e);return we(r,{received:r.data,code:be.invalid_literal,expected:this._def.value}),Ie}return{status:"valid",value:e.data}}get value(){return this._def.value}}t4.create=(n,e)=>new t4({value:n,typeName:Ue.ZodLiteral,...We(e)});function Kx(n,e){return new Ks({values:n,typeName:Ue.ZodEnum,...We(e)})}class Ks extends tn{_parse(e){if(typeof e.data!="string"){const r=this._getOrReturnCtx(e),i=this._def.values;return we(r,{expected:ln.joinValues(i),received:r.parsedType,code:be.invalid_type}),Ie}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const r=this._getOrReturnCtx(e),i=this._def.values;return we(r,{received:r.data,code:be.invalid_enum_value,options:i}),Ie}return lr(e.data)}get options(){return this._def.values}get enum(){const e={};for(const r of this._def.values)e[r]=r;return e}get Values(){const e={};for(const r of this._def.values)e[r]=r;return e}get Enum(){const e={};for(const r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return Ks.create(e,{...this._def,...r})}exclude(e,r=this._def){return Ks.create(this.options.filter(i=>!e.includes(i)),{...this._def,...r})}}Ks.create=Kx;class r4 extends tn{_parse(e){const r=ln.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==ke.string&&i.parsedType!==ke.number){const s=ln.objectValues(r);return we(i,{expected:ln.joinValues(s),received:i.parsedType,code:be.invalid_type}),Ie}if(this._cache||(this._cache=new Set(ln.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const s=ln.objectValues(r);return we(i,{received:i.data,code:be.invalid_enum_value,options:s}),Ie}return lr(e.data)}get enum(){return this._def.values}}r4.create=(n,e)=>new r4({values:n,typeName:Ue.ZodNativeEnum,...We(e)});class Uu extends tn{unwrap(){return this._def.type}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==ke.promise&&r.common.async===!1)return we(r,{code:be.invalid_type,expected:ke.promise,received:r.parsedType}),Ie;const i=r.parsedType===ke.promise?r.data:Promise.resolve(r.data);return lr(i.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}}Uu.create=(n,e)=>new Uu({type:n,typeName:Ue.ZodPromise,...We(e)});class Ys extends tn{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ue.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:r,ctx:i}=this._processInputParams(e),s=this._def.effect||null,l={addIssue:u=>{we(i,u),u.fatal?r.abort():r.dirty()},get path(){return i.path}};if(l.addIssue=l.addIssue.bind(l),s.type==="preprocess"){const u=s.transform(i.data,l);if(i.common.async)return Promise.resolve(u).then(async d=>{if(r.value==="aborted")return Ie;const f=await this._def.schema._parseAsync({data:d,path:i.path,parent:i});return f.status==="aborted"?Ie:f.status==="dirty"||r.value==="dirty"?dl(f.value):f});{if(r.value==="aborted")return Ie;const d=this._def.schema._parseSync({data:u,path:i.path,parent:i});return d.status==="aborted"?Ie:d.status==="dirty"||r.value==="dirty"?dl(d.value):d}}if(s.type==="refinement"){const u=d=>{const f=s.refinement(d,l);if(i.common.async)return Promise.resolve(f);if(f instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return d};if(i.common.async===!1){const d=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return d.status==="aborted"?Ie:(d.status==="dirty"&&r.dirty(),u(d.value),{status:r.value,value:d.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(d=>d.status==="aborted"?Ie:(d.status==="dirty"&&r.dirty(),u(d.value).then(()=>({status:r.value,value:d.value}))))}if(s.type==="transform")if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!qs(u))return Ie;const d=s.transform(u.value,l);if(d instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:d}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>qs(u)?Promise.resolve(s.transform(u.value,l)).then(d=>({status:r.value,value:d})):Ie);ln.assertNever(s)}}Ys.create=(n,e,r)=>new Ys({schema:n,typeName:Ue.ZodEffects,effect:e,...We(r)});Ys.createWithPreprocess=(n,e,r)=>new Ys({schema:e,effect:{type:"preprocess",transform:n},typeName:Ue.ZodEffects,...We(r)});class Ja extends tn{_parse(e){return this._getType(e)===ke.undefined?lr(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ja.create=(n,e)=>new Ja({innerType:n,typeName:Ue.ZodOptional,...We(e)});class Zs extends tn{_parse(e){return this._getType(e)===ke.null?lr(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Zs.create=(n,e)=>new Zs({innerType:n,typeName:Ue.ZodNullable,...We(e)});class op extends tn{_parse(e){const{ctx:r}=this._processInputParams(e);let i=r.data;return r.parsedType===ke.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}op.create=(n,e)=>new op({innerType:n,typeName:Ue.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...We(e)});class lp extends tn{_parse(e){const{ctx:r}=this._processInputParams(e),i={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Fu(s)?s.then(l=>({status:"valid",value:l.status==="valid"?l.value:this._def.catchValue({get error(){return new fa(i.common.issues)},input:i.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new fa(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}lp.create=(n,e)=>new lp({innerType:n,typeName:Ue.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...We(e)});class a4 extends tn{_parse(e){if(this._getType(e)!==ke.nan){const i=this._getOrReturnCtx(e);return we(i,{code:be.invalid_type,expected:ke.nan,received:i.parsedType}),Ie}return{status:"valid",value:e.data}}}a4.create=n=>new a4({typeName:Ue.ZodNaN,...We(n)});class Jk extends tn{_parse(e){const{ctx:r}=this._processInputParams(e),i=r.data;return this._def.type._parse({data:i,path:r.path,parent:r})}unwrap(){return this._def.type}}class gg extends tn{_parse(e){const{status:r,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const l=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return l.status==="aborted"?Ie:l.status==="dirty"?(r.dirty(),dl(l.value)):this._def.out._parseAsync({data:l.value,path:i.path,parent:i})})();{const s=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?Ie:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:i.path,parent:i})}}static create(e,r){return new gg({in:e,out:r,typeName:Ue.ZodPipeline})}}class cp extends tn{_parse(e){const r=this._def.innerType._parse(e),i=s=>(qs(s)&&(s.value=Object.freeze(s.value)),s);return Fu(r)?r.then(s=>i(s)):i(r)}unwrap(){return this._def.innerType}}cp.create=(n,e)=>new cp({innerType:n,typeName:Ue.ZodReadonly,...We(e)});function i4(n,e){const r=typeof n=="function"?n(e):typeof n=="string"?{message:n}:n;return typeof r=="string"?{message:r}:r}function qk(n,e={},r){return n?Nl.create().superRefine((i,s)=>{const l=n(i);if(l instanceof Promise)return l.then(u=>{if(!u){const d=i4(e,i),f=d.fatal??r??!0;s.addIssue({code:"custom",...d,fatal:f})}});if(!l){const u=i4(e,i),d=u.fatal??r??!0;s.addIssue({code:"custom",...u,fatal:d})}}):Nl.create()}var Ue;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Ue||(Ue={}));const bm=(n,e={message:`Input not instance of ${n.name}`})=>qk(r=>r instanceof n,e),on=Ua.create,xm=ip.create;Nl.create;$a.create;Vr.create;const bd=nt.create;Hu.create;Iu.create;Oi.create;const s4=Ks.create;Uu.create;Ja.create;Zs.create;const Yx=n=>{if(!n||n.length!==10)return!1;const[e,r,i]=n.split("-"),s=new Date(parseInt(e),parseInt(r)-1,parseInt(i));return!isNaN(s.getTime())&&s.getDate()===parseInt(i)&&s.getMonth()===parseInt(r)-1&&s.getFullYear()===parseInt(e)},Kk=n=>bd({birthDate:on().min(1,n.required).refine(Yx,n.invalid).refine(e=>{const[r,i,s]=e.split("-");return new Date(parseInt(r),parseInt(i)-1,parseInt(s))<=new Date},n.futureDate)});function qn(n){const e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new n.constructor(+n):typeof n=="number"||e==="[object Number]"||typeof n=="string"||e==="[object String]"?new Date(n):new Date(NaN)}function jn(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}function Zx(n,e){const r=qn(n);return isNaN(e)?jn(n,NaN):(e&&r.setDate(r.getDate()+e),r)}const Wx=6048e5,Yk=864e5,Zk=6e4,Wk=36e5,Xk=1e3;let Qk={};function oo(){return Qk}function ei(n,e){const r=oo(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=qn(n),l=s.getDay(),u=(l<i?7:0)+l-i;return s.setDate(s.getDate()-u),s.setHours(0,0,0,0),s}function Ws(n){return ei(n,{weekStartsOn:1})}function Xx(n){const e=qn(n),r=e.getFullYear(),i=jn(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=Ws(i),l=jn(n,0);l.setFullYear(r,0,4),l.setHours(0,0,0,0);const u=Ws(l);return e.getTime()>=s.getTime()?r+1:e.getTime()>=u.getTime()?r:r-1}function up(n){const e=qn(n);return e.setHours(0,0,0,0),e}function Ju(n){const e=qn(n),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+n-+r}function $k(n,e){const r=up(n),i=up(e),s=+r-Ju(r),l=+i-Ju(i);return Math.round((s-l)/Yk)}function eP(n){const e=Xx(n),r=jn(n,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),Ws(r)}function nP(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function yg(n){if(!nP(n)&&typeof n!="number")return!1;const e=qn(n);return!isNaN(Number(e))}function tP(n){const e=qn(n),r=jn(n,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const rP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},aP=(n,e,r)=>{let i;const s=rP[n];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Sm(n){return(e={})=>{const r=e.width?String(e.width):n.defaultWidth;return n.formats[r]||n.formats[n.defaultWidth]}}const iP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},sP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},oP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},lP={date:Sm({formats:iP,defaultWidth:"full"}),time:Sm({formats:sP,defaultWidth:"full"}),dateTime:Sm({formats:oP,defaultWidth:"full"})},cP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},uP=(n,e,r,i)=>cP[n];function il(n){return(e,r)=>{const i=r?.context?String(r.context):"standalone";let s;if(i==="formatting"&&n.formattingValues){const u=n.defaultFormattingWidth||n.defaultWidth,d=r?.width?String(r.width):u;s=n.formattingValues[d]||n.formattingValues[u]}else{const u=n.defaultWidth,d=r?.width?String(r.width):n.defaultWidth;s=n.values[d]||n.values[u]}const l=n.argumentCallback?n.argumentCallback(e):e;return s[l]}}const dP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},fP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},hP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},mP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},pP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},gP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},yP=(n,e)=>{const r=Number(n),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},vP={ordinalNumber:yP,era:il({values:dP,defaultWidth:"wide"}),quarter:il({values:fP,defaultWidth:"wide",argumentCallback:n=>n-1}),month:il({values:hP,defaultWidth:"wide"}),day:il({values:mP,defaultWidth:"wide"}),dayPeriod:il({values:pP,defaultWidth:"wide",formattingValues:gP,defaultFormattingWidth:"wide"})};function sl(n){return(e,r={})=>{const i=r.width,s=i&&n.matchPatterns[i]||n.matchPatterns[n.defaultMatchWidth],l=e.match(s);if(!l)return null;const u=l[0],d=i&&n.parsePatterns[i]||n.parsePatterns[n.defaultParseWidth],f=Array.isArray(d)?xP(d,y=>y.test(u)):bP(d,y=>y.test(u));let p;p=n.valueCallback?n.valueCallback(f):f,p=r.valueCallback?r.valueCallback(p):p;const m=e.slice(u.length);return{value:p,rest:m}}}function bP(n,e){for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&e(n[r]))return r}function xP(n,e){for(let r=0;r<n.length;r++)if(e(n[r]))return r}function SP(n){return(e,r={})=>{const i=e.match(n.matchPattern);if(!i)return null;const s=i[0],l=e.match(n.parsePattern);if(!l)return null;let u=n.valueCallback?n.valueCallback(l[0]):l[0];u=r.valueCallback?r.valueCallback(u):u;const d=e.slice(s.length);return{value:u,rest:d}}}const MP=/^(\d+)(th|st|nd|rd)?/i,CP=/\d+/i,AP={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wP={any:[/^b/i,/^(a|c)/i]},TP={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},DP={any:[/1/i,/2/i,/3/i,/4/i]},EP={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},NP={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},RP={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},kP={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},PP={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},BP={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},LP={ordinalNumber:SP({matchPattern:MP,parsePattern:CP,valueCallback:n=>parseInt(n,10)}),era:sl({matchPatterns:AP,defaultMatchWidth:"wide",parsePatterns:wP,defaultParseWidth:"any"}),quarter:sl({matchPatterns:TP,defaultMatchWidth:"wide",parsePatterns:DP,defaultParseWidth:"any",valueCallback:n=>n+1}),month:sl({matchPatterns:EP,defaultMatchWidth:"wide",parsePatterns:NP,defaultParseWidth:"any"}),day:sl({matchPatterns:RP,defaultMatchWidth:"wide",parsePatterns:kP,defaultParseWidth:"any"}),dayPeriod:sl({matchPatterns:PP,defaultMatchWidth:"any",parsePatterns:BP,defaultParseWidth:"any"})},Qx={code:"en-US",formatDistance:aP,formatLong:lP,formatRelative:uP,localize:vP,match:LP,options:{weekStartsOn:0,firstWeekContainsDate:1}};function _P(n){const e=qn(n);return $k(e,tP(e))+1}function $x(n){const e=qn(n),r=+Ws(e)-+eP(e);return Math.round(r/Wx)+1}function vg(n,e){const r=qn(n),i=r.getFullYear(),s=oo(),l=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,u=jn(n,0);u.setFullYear(i+1,0,l),u.setHours(0,0,0,0);const d=ei(u,e),f=jn(n,0);f.setFullYear(i,0,l),f.setHours(0,0,0,0);const p=ei(f,e);return r.getTime()>=d.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function OP(n,e){const r=oo(),i=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=vg(n,e),l=jn(n,0);return l.setFullYear(s,0,i),l.setHours(0,0,0,0),ei(l,e)}function eS(n,e){const r=qn(n),i=+ei(r,e)-+OP(r,e);return Math.round(i/Wx)+1}function hn(n,e){const r=n<0?"-":"",i=Math.abs(n).toString().padStart(e,"0");return r+i}const Va={y(n,e){const r=n.getFullYear(),i=r>0?r:1-r;return hn(e==="yy"?i%100:i,e.length)},M(n,e){const r=n.getMonth();return e==="M"?String(r+1):hn(r+1,2)},d(n,e){return hn(n.getDate(),e.length)},a(n,e){const r=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(n,e){return hn(n.getHours()%12||12,e.length)},H(n,e){return hn(n.getHours(),e.length)},m(n,e){return hn(n.getMinutes(),e.length)},s(n,e){return hn(n.getSeconds(),e.length)},S(n,e){const r=e.length,i=n.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return hn(s,e.length)}},Es={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},o4={G:function(n,e,r){const i=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(n,e,r){if(e==="yo"){const i=n.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Va.y(n,e)},Y:function(n,e,r,i){const s=vg(n,i),l=s>0?s:1-s;if(e==="YY"){const u=l%100;return hn(u,2)}return e==="Yo"?r.ordinalNumber(l,{unit:"year"}):hn(l,e.length)},R:function(n,e){const r=Xx(n);return hn(r,e.length)},u:function(n,e){const r=n.getFullYear();return hn(r,e.length)},Q:function(n,e,r){const i=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return hn(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(n,e,r){const i=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return hn(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(n,e,r){const i=n.getMonth();switch(e){case"M":case"MM":return Va.M(n,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(n,e,r){const i=n.getMonth();switch(e){case"L":return String(i+1);case"LL":return hn(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(n,e,r,i){const s=eS(n,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):hn(s,e.length)},I:function(n,e,r){const i=$x(n);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):hn(i,e.length)},d:function(n,e,r){return e==="do"?r.ordinalNumber(n.getDate(),{unit:"date"}):Va.d(n,e)},D:function(n,e,r){const i=_P(n);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):hn(i,e.length)},E:function(n,e,r){const i=n.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(n,e,r,i){const s=n.getDay(),l=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return hn(l,2);case"eo":return r.ordinalNumber(l,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,r,i){const s=n.getDay(),l=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return hn(l,e.length);case"co":return r.ordinalNumber(l,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,r){const i=n.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return hn(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(n,e,r){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,r){const i=n.getHours();let s;switch(i===12?s=Es.noon:i===0?s=Es.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,r){const i=n.getHours();let s;switch(i>=17?s=Es.evening:i>=12?s=Es.afternoon:i>=4?s=Es.morning:s=Es.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,r){if(e==="ho"){let i=n.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Va.h(n,e)},H:function(n,e,r){return e==="Ho"?r.ordinalNumber(n.getHours(),{unit:"hour"}):Va.H(n,e)},K:function(n,e,r){const i=n.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):hn(i,e.length)},k:function(n,e,r){let i=n.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):hn(i,e.length)},m:function(n,e,r){return e==="mo"?r.ordinalNumber(n.getMinutes(),{unit:"minute"}):Va.m(n,e)},s:function(n,e,r){return e==="so"?r.ordinalNumber(n.getSeconds(),{unit:"second"}):Va.s(n,e)},S:function(n,e){return Va.S(n,e)},X:function(n,e,r){const i=n.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return c4(i);case"XXXX":case"XX":return Ai(i);case"XXXXX":case"XXX":default:return Ai(i,":")}},x:function(n,e,r){const i=n.getTimezoneOffset();switch(e){case"x":return c4(i);case"xxxx":case"xx":return Ai(i);case"xxxxx":case"xxx":default:return Ai(i,":")}},O:function(n,e,r){const i=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+l4(i,":");case"OOOO":default:return"GMT"+Ai(i,":")}},z:function(n,e,r){const i=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+l4(i,":");case"zzzz":default:return"GMT"+Ai(i,":")}},t:function(n,e,r){const i=Math.trunc(n.getTime()/1e3);return hn(i,e.length)},T:function(n,e,r){const i=n.getTime();return hn(i,e.length)}};function l4(n,e=""){const r=n>0?"-":"+",i=Math.abs(n),s=Math.trunc(i/60),l=i%60;return l===0?r+String(s):r+String(s)+e+hn(l,2)}function c4(n,e){return n%60===0?(n>0?"-":"+")+hn(Math.abs(n)/60,2):Ai(n,e)}function Ai(n,e=""){const r=n>0?"-":"+",i=Math.abs(n),s=hn(Math.trunc(i/60),2),l=hn(i%60,2);return r+s+e+l}const u4=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},nS=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},zP=(n,e)=>{const r=n.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return u4(n,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",u4(i,e)).replace("{{time}}",nS(s,e))},dp={p:nS,P:zP},jP=/^D+$/,VP=/^Y+$/,FP=["D","DD","YY","YYYY"];function tS(n){return jP.test(n)}function rS(n){return VP.test(n)}function fp(n,e,r){const i=GP(n,e,r);if(console.warn(i),FP.includes(n))throw new RangeError(i)}function GP(n,e,r){const i=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const HP=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,IP=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,UP=/^'([^]*?)'?$/,JP=/''/g,qP=/[a-zA-Z]/;function hp(n,e,r){const i=oo(),s=i.locale??Qx,l=i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,u=i.weekStartsOn??i.locale?.options?.weekStartsOn??0,d=qn(n);if(!yg(d))throw new RangeError("Invalid time value");let f=e.match(IP).map(m=>{const y=m[0];if(y==="p"||y==="P"){const v=dp[y];return v(m,s.formatLong)}return m}).join("").match(HP).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const y=m[0];if(y==="'")return{isToken:!1,value:KP(m)};if(o4[y])return{isToken:!0,value:m};if(y.match(qP))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:m}});s.localize.preprocessor&&(f=s.localize.preprocessor(d,f));const p={firstWeekContainsDate:l,weekStartsOn:u,locale:s};return f.map(m=>{if(!m.isToken)return m.value;const y=m.value;(rS(y)||tS(y))&&fp(y,e,String(n));const v=o4[y[0]];return v(d,y,s.localize,p)}).join("")}function KP(n){const e=n.match(UP);return e?e[1].replace(JP,"'"):n}function YP(){return Object.assign({},oo())}function ZP(n){let r=qn(n).getDay();return r===0&&(r=7),r}function WP(n,e){const r=qn(n),i=qn(e);return r.getTime()>i.getTime()}function XP(n,e){const r=e instanceof Date?jn(e,0):new e(0);return r.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),r.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),r}const QP=10;class aS{subPriority=0;validate(e,r){return!0}}class $P extends aS{constructor(e,r,i,s,l){super(),this.value=e,this.validateValue=r,this.setValue=i,this.priority=s,l&&(this.subPriority=l)}validate(e,r){return this.validateValue(e,this.value,r)}set(e,r,i){return this.setValue(e,r,this.value,i)}}class eB extends aS{priority=QP;subPriority=-1;set(e,r){return r.timestampIsSet?e:jn(e,XP(e,Date))}}class un{run(e,r,i,s){const l=this.parse(e,r,i,s);return l?{setter:new $P(l.value,this.validate,this.set,this.priority,this.subPriority),rest:l.rest}:null}validate(e,r,i){return!0}}class nB extends un{priority=140;parse(e,r,i){switch(r){case"G":case"GG":case"GGG":return i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"});case"GGGGG":return i.era(e,{width:"narrow"});case"GGGG":default:return i.era(e,{width:"wide"})||i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"})}}set(e,r,i){return r.era=i,e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["R","u","t","T"]}const Un={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Br={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Jn(n,e){return n&&{value:e(n.value),rest:n.rest}}function Bn(n,e){const r=e.match(n);return r?{value:parseInt(r[0],10),rest:e.slice(r[0].length)}:null}function Lr(n,e){const r=e.match(n);if(!r)return null;if(r[0]==="Z")return{value:0,rest:e.slice(1)};const i=r[1]==="+"?1:-1,s=r[2]?parseInt(r[2],10):0,l=r[3]?parseInt(r[3],10):0,u=r[5]?parseInt(r[5],10):0;return{value:i*(s*Wk+l*Zk+u*Xk),rest:e.slice(r[0].length)}}function iS(n){return Bn(Un.anyDigitsSigned,n)}function Vn(n,e){switch(n){case 1:return Bn(Un.singleDigit,e);case 2:return Bn(Un.twoDigits,e);case 3:return Bn(Un.threeDigits,e);case 4:return Bn(Un.fourDigits,e);default:return Bn(new RegExp("^\\d{1,"+n+"}"),e)}}function qu(n,e){switch(n){case 1:return Bn(Un.singleDigitSigned,e);case 2:return Bn(Un.twoDigitsSigned,e);case 3:return Bn(Un.threeDigitsSigned,e);case 4:return Bn(Un.fourDigitsSigned,e);default:return Bn(new RegExp("^-?\\d{1,"+n+"}"),e)}}function bg(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function sS(n,e){const r=e>0,i=r?e:1-e;let s;if(i<=50)s=n||100;else{const l=i+50,u=Math.trunc(l/100)*100,d=n>=l%100;s=n+u-(d?100:0)}return r?s:1-s}function oS(n){return n%400===0||n%4===0&&n%100!==0}class tB extends un{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(e,r,i){const s=l=>({year:l,isTwoDigitYear:r==="yy"});switch(r){case"y":return Jn(Vn(4,e),s);case"yo":return Jn(i.ordinalNumber(e,{unit:"year"}),s);default:return Jn(Vn(r.length,e),s)}}validate(e,r){return r.isTwoDigitYear||r.year>0}set(e,r,i){const s=e.getFullYear();if(i.isTwoDigitYear){const u=sS(i.year,s);return e.setFullYear(u,0,1),e.setHours(0,0,0,0),e}const l=!("era"in r)||r.era===1?i.year:1-i.year;return e.setFullYear(l,0,1),e.setHours(0,0,0,0),e}}class rB extends un{priority=130;parse(e,r,i){const s=l=>({year:l,isTwoDigitYear:r==="YY"});switch(r){case"Y":return Jn(Vn(4,e),s);case"Yo":return Jn(i.ordinalNumber(e,{unit:"year"}),s);default:return Jn(Vn(r.length,e),s)}}validate(e,r){return r.isTwoDigitYear||r.year>0}set(e,r,i,s){const l=vg(e,s);if(i.isTwoDigitYear){const d=sS(i.year,l);return e.setFullYear(d,0,s.firstWeekContainsDate),e.setHours(0,0,0,0),ei(e,s)}const u=!("era"in r)||r.era===1?i.year:1-i.year;return e.setFullYear(u,0,s.firstWeekContainsDate),e.setHours(0,0,0,0),ei(e,s)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class aB extends un{priority=130;parse(e,r){return qu(r==="R"?4:r.length,e)}set(e,r,i){const s=jn(e,0);return s.setFullYear(i,0,4),s.setHours(0,0,0,0),Ws(s)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class iB extends un{priority=130;parse(e,r){return qu(r==="u"?4:r.length,e)}set(e,r,i){return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class sB extends un{priority=120;parse(e,r,i){switch(r){case"Q":case"QQ":return Vn(r.length,e);case"Qo":return i.ordinalNumber(e,{unit:"quarter"});case"QQQ":return i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(e,{width:"wide",context:"formatting"})||i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=1&&r<=4}set(e,r,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class oB extends un{priority=120;parse(e,r,i){switch(r){case"q":case"qq":return Vn(r.length,e);case"qo":return i.ordinalNumber(e,{unit:"quarter"});case"qqq":return i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(e,{width:"wide",context:"standalone"})||i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=1&&r<=4}set(e,r,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class lB extends un{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(e,r,i){const s=l=>l-1;switch(r){case"M":return Jn(Bn(Un.month,e),s);case"MM":return Jn(Vn(2,e),s);case"Mo":return Jn(i.ordinalNumber(e,{unit:"month"}),s);case"MMM":return i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(e,{width:"wide",context:"formatting"})||i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=11}set(e,r,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}class cB extends un{priority=110;parse(e,r,i){const s=l=>l-1;switch(r){case"L":return Jn(Bn(Un.month,e),s);case"LL":return Jn(Vn(2,e),s);case"Lo":return Jn(i.ordinalNumber(e,{unit:"month"}),s);case"LLL":return i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(e,{width:"wide",context:"standalone"})||i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=0&&r<=11}set(e,r,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function uB(n,e,r){const i=qn(n),s=eS(i,r)-e;return i.setDate(i.getDate()-s*7),i}class dB extends un{priority=100;parse(e,r,i){switch(r){case"w":return Bn(Un.week,e);case"wo":return i.ordinalNumber(e,{unit:"week"});default:return Vn(r.length,e)}}validate(e,r){return r>=1&&r<=53}set(e,r,i,s){return ei(uB(e,i,s),s)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function fB(n,e){const r=qn(n),i=$x(r)-e;return r.setDate(r.getDate()-i*7),r}class hB extends un{priority=100;parse(e,r,i){switch(r){case"I":return Bn(Un.week,e);case"Io":return i.ordinalNumber(e,{unit:"week"});default:return Vn(r.length,e)}}validate(e,r){return r>=1&&r<=53}set(e,r,i){return Ws(fB(e,i))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const mB=[31,28,31,30,31,30,31,31,30,31,30,31],pB=[31,29,31,30,31,30,31,31,30,31,30,31];class gB extends un{priority=90;subPriority=1;parse(e,r,i){switch(r){case"d":return Bn(Un.date,e);case"do":return i.ordinalNumber(e,{unit:"date"});default:return Vn(r.length,e)}}validate(e,r){const i=e.getFullYear(),s=oS(i),l=e.getMonth();return s?r>=1&&r<=pB[l]:r>=1&&r<=mB[l]}set(e,r,i){return e.setDate(i),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class yB extends un{priority=90;subpriority=1;parse(e,r,i){switch(r){case"D":case"DD":return Bn(Un.dayOfYear,e);case"Do":return i.ordinalNumber(e,{unit:"date"});default:return Vn(r.length,e)}}validate(e,r){const i=e.getFullYear();return oS(i)?r>=1&&r<=366:r>=1&&r<=365}set(e,r,i){return e.setMonth(0,i),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function xg(n,e,r){const i=oo(),s=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0,l=qn(n),u=l.getDay(),f=(e%7+7)%7,p=7-s,m=e<0||e>6?e-(u+p)%7:(f+p)%7-(u+p)%7;return Zx(l,m)}class vB extends un{priority=90;parse(e,r,i){switch(r){case"E":case"EE":case"EEE":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=6}set(e,r,i,s){return e=xg(e,i,s),e.setHours(0,0,0,0),e}incompatibleTokens=["D","i","e","c","t","T"]}class bB extends un{priority=90;parse(e,r,i,s){const l=u=>{const d=Math.floor((u-1)/7)*7;return(u+s.weekStartsOn+6)%7+d};switch(r){case"e":case"ee":return Jn(Vn(r.length,e),l);case"eo":return Jn(i.ordinalNumber(e,{unit:"day"}),l);case"eee":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeeee":return i.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=6}set(e,r,i,s){return e=xg(e,i,s),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class xB extends un{priority=90;parse(e,r,i,s){const l=u=>{const d=Math.floor((u-1)/7)*7;return(u+s.weekStartsOn+6)%7+d};switch(r){case"c":case"cc":return Jn(Vn(r.length,e),l);case"co":return Jn(i.ordinalNumber(e,{unit:"day"}),l);case"ccc":return i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"ccccc":return i.day(e,{width:"narrow",context:"standalone"});case"cccccc":return i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(e,{width:"wide",context:"standalone"})||i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=0&&r<=6}set(e,r,i,s){return e=xg(e,i,s),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function SB(n,e){const r=qn(n),i=ZP(r),s=e-i;return Zx(r,s)}class MB extends un{priority=90;parse(e,r,i){const s=l=>l===0?7:l;switch(r){case"i":case"ii":return Vn(r.length,e);case"io":return i.ordinalNumber(e,{unit:"day"});case"iii":return Jn(i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),s);case"iiiii":return Jn(i.day(e,{width:"narrow",context:"formatting"}),s);case"iiiiii":return Jn(i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),s);case"iiii":default:return Jn(i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),s)}}validate(e,r){return r>=1&&r<=7}set(e,r,i){return e=SB(e,i),e.setHours(0,0,0,0),e}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class CB extends un{priority=80;parse(e,r,i){switch(r){case"a":case"aa":case"aaa":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,i){return e.setHours(bg(i),0,0,0),e}incompatibleTokens=["b","B","H","k","t","T"]}class AB extends un{priority=80;parse(e,r,i){switch(r){case"b":case"bb":case"bbb":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,i){return e.setHours(bg(i),0,0,0),e}incompatibleTokens=["a","B","H","k","t","T"]}class wB extends un{priority=80;parse(e,r,i){switch(r){case"B":case"BB":case"BBB":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,i){return e.setHours(bg(i),0,0,0),e}incompatibleTokens=["a","b","t","T"]}class TB extends un{priority=70;parse(e,r,i){switch(r){case"h":return Bn(Un.hour12h,e);case"ho":return i.ordinalNumber(e,{unit:"hour"});default:return Vn(r.length,e)}}validate(e,r){return r>=1&&r<=12}set(e,r,i){const s=e.getHours()>=12;return s&&i<12?e.setHours(i+12,0,0,0):!s&&i===12?e.setHours(0,0,0,0):e.setHours(i,0,0,0),e}incompatibleTokens=["H","K","k","t","T"]}class DB extends un{priority=70;parse(e,r,i){switch(r){case"H":return Bn(Un.hour23h,e);case"Ho":return i.ordinalNumber(e,{unit:"hour"});default:return Vn(r.length,e)}}validate(e,r){return r>=0&&r<=23}set(e,r,i){return e.setHours(i,0,0,0),e}incompatibleTokens=["a","b","h","K","k","t","T"]}class EB extends un{priority=70;parse(e,r,i){switch(r){case"K":return Bn(Un.hour11h,e);case"Ko":return i.ordinalNumber(e,{unit:"hour"});default:return Vn(r.length,e)}}validate(e,r){return r>=0&&r<=11}set(e,r,i){return e.getHours()>=12&&i<12?e.setHours(i+12,0,0,0):e.setHours(i,0,0,0),e}incompatibleTokens=["h","H","k","t","T"]}class NB extends un{priority=70;parse(e,r,i){switch(r){case"k":return Bn(Un.hour24h,e);case"ko":return i.ordinalNumber(e,{unit:"hour"});default:return Vn(r.length,e)}}validate(e,r){return r>=1&&r<=24}set(e,r,i){const s=i<=24?i%24:i;return e.setHours(s,0,0,0),e}incompatibleTokens=["a","b","h","H","K","t","T"]}class RB extends un{priority=60;parse(e,r,i){switch(r){case"m":return Bn(Un.minute,e);case"mo":return i.ordinalNumber(e,{unit:"minute"});default:return Vn(r.length,e)}}validate(e,r){return r>=0&&r<=59}set(e,r,i){return e.setMinutes(i,0,0),e}incompatibleTokens=["t","T"]}class kB extends un{priority=50;parse(e,r,i){switch(r){case"s":return Bn(Un.second,e);case"so":return i.ordinalNumber(e,{unit:"second"});default:return Vn(r.length,e)}}validate(e,r){return r>=0&&r<=59}set(e,r,i){return e.setSeconds(i,0),e}incompatibleTokens=["t","T"]}class PB extends un{priority=30;parse(e,r){const i=s=>Math.trunc(s*Math.pow(10,-r.length+3));return Jn(Vn(r.length,e),i)}set(e,r,i){return e.setMilliseconds(i),e}incompatibleTokens=["t","T"]}class BB extends un{priority=10;parse(e,r){switch(r){case"X":return Lr(Br.basicOptionalMinutes,e);case"XX":return Lr(Br.basic,e);case"XXXX":return Lr(Br.basicOptionalSeconds,e);case"XXXXX":return Lr(Br.extendedOptionalSeconds,e);case"XXX":default:return Lr(Br.extended,e)}}set(e,r,i){return r.timestampIsSet?e:jn(e,e.getTime()-Ju(e)-i)}incompatibleTokens=["t","T","x"]}class LB extends un{priority=10;parse(e,r){switch(r){case"x":return Lr(Br.basicOptionalMinutes,e);case"xx":return Lr(Br.basic,e);case"xxxx":return Lr(Br.basicOptionalSeconds,e);case"xxxxx":return Lr(Br.extendedOptionalSeconds,e);case"xxx":default:return Lr(Br.extended,e)}}set(e,r,i){return r.timestampIsSet?e:jn(e,e.getTime()-Ju(e)-i)}incompatibleTokens=["t","T","X"]}class _B extends un{priority=40;parse(e){return iS(e)}set(e,r,i){return[jn(e,i*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class OB extends un{priority=20;parse(e){return iS(e)}set(e,r,i){return[jn(e,i),{timestampIsSet:!0}]}incompatibleTokens="*"}const zB={G:new nB,y:new tB,Y:new rB,R:new aB,u:new iB,Q:new sB,q:new oB,M:new lB,L:new cB,w:new dB,I:new hB,d:new gB,D:new yB,E:new vB,e:new bB,c:new xB,i:new MB,a:new CB,b:new AB,B:new wB,h:new TB,H:new DB,K:new EB,k:new NB,m:new RB,s:new kB,S:new PB,X:new BB,x:new LB,t:new _B,T:new OB},jB=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,VB=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,FB=/^'([^]*?)'?$/,GB=/''/g,HB=/\S/,IB=/[a-zA-Z]/;function lS(n,e,r,i){const s=YP(),l=s.locale??Qx,u=s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,d=s.weekStartsOn??s.locale?.options?.weekStartsOn??0;if(e==="")return n===""?qn(r):jn(r,NaN);const f={firstWeekContainsDate:u,weekStartsOn:d,locale:l},p=[new eB],m=e.match(VB).map(S=>{const N=S[0];if(N in dp){const w=dp[N];return w(S,l.formatLong)}return S}).join("").match(jB),y=[];for(let S of m){rS(S)&&fp(S,e,n),tS(S)&&fp(S,e,n);const N=S[0],w=zB[N];if(w){const{incompatibleTokens:R}=w;if(Array.isArray(R)){const z=y.find(G=>R.includes(G.token)||G.token===N);if(z)throw new RangeError(`The format string mustn't contain \`${z.fullToken}\` and \`${S}\` at the same time`)}else if(w.incompatibleTokens==="*"&&y.length>0)throw new RangeError(`The format string mustn't contain \`${S}\` and any other token at the same time`);y.push({token:N,fullToken:S});const L=w.run(n,S,l.match,f);if(!L)return jn(r,NaN);p.push(L.setter),n=L.rest}else{if(N.match(IB))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");if(S==="''"?S="'":N==="'"&&(S=UB(S)),n.indexOf(S)===0)n=n.slice(S.length);else return jn(r,NaN)}}if(n.length>0&&HB.test(n))return jn(r,NaN);const v=p.map(S=>S.priority).sort((S,N)=>N-S).filter((S,N,w)=>w.indexOf(S)===N).map(S=>p.filter(N=>N.priority===S).sort((N,w)=>w.subPriority-N.subPriority)).map(S=>S[0]);let x=qn(r);if(isNaN(x.getTime()))return jn(r,NaN);const A={};for(const S of v){if(!S.validate(x,f))return jn(r,NaN);const N=S.set(x,A,f);Array.isArray(N)?(x=N[0],Object.assign(A,N[1])):x=N}return jn(r,x)}function UB(n){return n.match(FB)[1].replace(GB,"'")}function JB(){return up(Date.now())}function cS(n){const e=n.replace(/\D/g,"").slice(0,8),r=[];return e.length>0&&r.push(e.slice(0,2)),e.length>2&&r.push(e.slice(2,4)),e.length>4&&r.push(e.slice(4,8)),r.join(".")}function uS(n,e={}){if(!n||n.length!==10)return null;const r=lS(n,"dd.MM.yyyy",new Date);return!yg(r)||!e.allowFuture&&WP(r,JB())||hp(r,"dd.MM.yyyy")!==n?null:hp(r,"yyyy-MM-dd")}function qB(n){if(!n)return"";const e=lS(n,"yyyy-MM-dd",new Date);return yg(e)?hp(e,"dd.MM.yyyy"):""}function kn({className:n,type:e,...r}){return b.jsx("input",{type:e,"data-slot":"input",className:Mn("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...r})}function Sg({className:n,...e}){return b.jsx("div",{"data-slot":"card",className:Mn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",n),...e})}function Mg({className:n,...e}){return b.jsx("div",{"data-slot":"card-header",className:Mn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",n),...e})}function Cg({className:n,...e}){return b.jsx("div",{"data-slot":"card-title",className:Mn("leading-none font-semibold",n),...e})}function Ag({className:n,...e}){return b.jsx("div",{"data-slot":"card-description",className:Mn("text-muted-foreground text-sm",n),...e})}function wg({className:n,...e}){return b.jsx("div",{"data-slot":"card-content",className:Mn("px-6",n),...e})}const dS=[.25,.46,.45,.94],qa={SCALE_PULSE:[1,1.03,1],SCALE_HOVER:1.02,SCALE_TAP:.98,DURATION_DEFAULT:.4,DURATION_LONG:.5,STAGGER_DELAY:.1,PULSE_DURATION:2},fS={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:qa.STAGGER_DELAY,delayChildren:qa.STAGGER_DELAY}}},Ei={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:qa.DURATION_DEFAULT,ease:dS}}},hS={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:qa.DURATION_LONG,ease:dS}},pulse:{scale:qa.SCALE_PULSE,transition:{duration:qa.PULSE_DURATION,repeat:1/0,ease:"easeInOut"}}},Ku={hover:{scale:qa.SCALE_HOVER,transition:{duration:.2}},tap:{scale:qa.SCALE_TAP,transition:{duration:.1}}};function KB({language:n,birthDate:e,onBirthDateChange:r,onNext:i,onBack:s}){const l=LR[n],{verifyBirthDate:u}=Ux(),[d,f]=C.useState(!1),[p,m]=C.useState(""),[y,v]=C.useState(""),x=Kk({required:l.required,invalid:l.invalid,futureDate:l.futureDate}),{register:A,handleSubmit:S,formState:{errors:N},setValue:w,trigger:R}=yd({resolver:vd(x),defaultValues:{birthDate:e}});C.useEffect(()=>{e&&m(qB(e))},[]);const L=G=>{const _=G.target.value,O=cS(_);if(m(O),v(""),O.length===10){const E=uS(O,{allowFuture:!1});E?(w("birthDate",E),r(E),R("birthDate")):(w("birthDate",""),r(""),R("birthDate"))}else w("birthDate",""),r("")},z=async G=>{f(!0),v("");try{const _=await u(G.birthDate);_.success?i():v(_.message||l.invalid)}catch{v(l.invalid)}finally{f(!1)}};return b.jsx("div",{className:"min-h-screen flex justify-center px-4 py-8",children:b.jsx(Te.div,{className:"w-full max-w-md mx-auto",variants:fS,initial:"hidden",animate:"visible",style:{willChange:"opacity"},children:b.jsxs(Sg,{className:"bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-0 backdrop-blur-sm",children:[b.jsx(Mg,{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4",children:b.jsxs(Te.div,{variants:Ei,style:{willChange:"transform, opacity"},children:[b.jsx(Te.div,{className:"w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",variants:hS,animate:"pulse",style:{willChange:"transform"},children:b.jsx(qA,{className:"w-8 h-8 text-brand-primary"})}),b.jsx(Cg,{className:"text-2xl font-bold text-brand-text text-center mb-2",children:l.title}),b.jsx(Ag,{className:"text-sm text-slate-600 text-center",children:l.subtitle})]})}),b.jsx(wg,{className:"px-6 sm:px-8 pb-6 sm:pb-8",children:b.jsxs("form",{onSubmit:S(z),className:"space-y-6",children:[b.jsxs(Te.div,{variants:Ei,style:{willChange:"transform, opacity"},children:[b.jsx("label",{htmlFor:"birthDate",className:"block text-sm font-medium text-brand-text mb-2",children:l.label}),b.jsx("div",{className:"relative",children:b.jsx(kn,{id:"birthDate",type:"text",inputMode:"numeric",value:p,onChange:L,placeholder:l.placeholder,"aria-invalid":!!(N.birthDate||y),className:`w-full h-12 px-4 font-mono tracking-wider ${N.birthDate||y?"border-brand-error focus-visible:ring-brand-error":""}`,disabled:d,maxLength:10})}),(N.birthDate||y)&&b.jsxs(Te.div,{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},transition:{duration:.2},children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:N.birthDate?.message||y})]})]}),b.jsxs(Te.div,{className:"flex gap-3 pt-4",variants:Ei,style:{willChange:"transform, opacity"},children:[b.jsx(sr,{type:"button",onClick:s,disabled:d,variant:"outline",size:"lg",className:"h-12 px-6 transition-all",asChild:!0,children:b.jsxs(Te.button,{variants:Ku,whileHover:"hover",whileTap:"tap",style:{willChange:"transform"},children:[b.jsx(Te.div,{whileHover:{x:-2},transition:{duration:.2},children:b.jsx(nd,{className:"w-5 h-5"})}),l.back]})}),b.jsx(sr,{type:"submit",disabled:d,size:"lg",className:"group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all overflow-hidden relative",asChild:!0,children:b.jsx(Te.button,{variants:Ku,whileHover:"hover",whileTap:"tap",style:{willChange:"transform"},children:d?b.jsxs(Te.div,{className:"relative z-10 flex items-center justify-center gap-2",initial:{opacity:0},animate:{opacity:1},children:[b.jsx(gp,{className:"w-5 h-5 animate-spin"}),l.verifying]}):b.jsxs(Te.div,{className:"relative z-10 flex items-center justify-center gap-2",children:[l.continue,b.jsx(Te.div,{whileHover:{x:2},transition:{duration:.2},children:b.jsx(kl,{className:"w-5 h-5"})})]})})})]})]})})]})})})}const YB=n=>bd({otpCode:on().min(1,n.required).regex(/^\d{6}$/,n.invalid)});var ZB=Object.defineProperty,WB=Object.defineProperties,XB=Object.getOwnPropertyDescriptors,Yu=Object.getOwnPropertySymbols,mS=Object.prototype.hasOwnProperty,pS=Object.prototype.propertyIsEnumerable,d4=(n,e,r)=>e in n?ZB(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,QB=(n,e)=>{for(var r in e||(e={}))mS.call(e,r)&&d4(n,r,e[r]);if(Yu)for(var r of Yu(e))pS.call(e,r)&&d4(n,r,e[r]);return n},$B=(n,e)=>WB(n,XB(e)),eL=(n,e)=>{var r={};for(var i in n)mS.call(n,i)&&e.indexOf(i)<0&&(r[i]=n[i]);if(n!=null&&Yu)for(var i of Yu(n))e.indexOf(i)<0&&pS.call(n,i)&&(r[i]=n[i]);return r};function nL(n){let e=setTimeout(n,0),r=setTimeout(n,10),i=setTimeout(n,50);return[e,r,i]}function tL(n){let e=C.useRef();return C.useEffect(()=>{e.current=n}),e.current}var rL=18,gS=40,aL=`${gS}px`,iL=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function sL({containerRef:n,inputRef:e,pushPasswordManagerStrategy:r,isFocused:i}){let[s,l]=C.useState(!1),[u,d]=C.useState(!1),[f,p]=C.useState(!1),m=C.useMemo(()=>r==="none"?!1:(r==="increase-width"||r==="experimental-no-flickering")&&s&&u,[s,u,r]),y=C.useCallback(()=>{let v=n.current,x=e.current;if(!v||!x||f||r==="none")return;let A=v,S=A.getBoundingClientRect().left+A.offsetWidth,N=A.getBoundingClientRect().top+A.offsetHeight/2,w=S-rL,R=N;document.querySelectorAll(iL).length===0&&document.elementFromPoint(w,R)===v||(l(!0),p(!0))},[n,e,f,r]);return C.useEffect(()=>{let v=n.current;if(!v||r==="none")return;function x(){let S=window.innerWidth-v.getBoundingClientRect().right;d(S>=gS)}x();let A=setInterval(x,1e3);return()=>{clearInterval(A)}},[n,r]),C.useEffect(()=>{let v=i||document.activeElement===e.current;if(r==="none"||!v)return;let x=setTimeout(y,0),A=setTimeout(y,2e3),S=setTimeout(y,5e3),N=setTimeout(()=>{p(!0)},6e3);return()=>{clearTimeout(x),clearTimeout(A),clearTimeout(S),clearTimeout(N)}},[e,i,r,y]),{hasPWMBadge:s,willPushPWMBadge:m,PWM_BADGE_SPACE_WIDTH:aL}}var yS=C.createContext({}),vS=C.forwardRef((n,e)=>{var r=n,{value:i,onChange:s,maxLength:l,textAlign:u="left",pattern:d,placeholder:f,inputMode:p="numeric",onComplete:m,pushPasswordManagerStrategy:y="increase-width",pasteTransformer:v,containerClassName:x,noScriptCSSFallback:A=oL,render:S,children:N}=r,w=eL(r,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]),R,L,z,G,_;let[O,E]=C.useState(typeof w.defaultValue=="string"?w.defaultValue:""),k=i??O,j=tL(k),V=C.useCallback(Me=>{s?.(Me),E(Me)},[s]),F=C.useMemo(()=>d?typeof d=="string"?new RegExp(d):d:null,[d]),U=C.useRef(null),H=C.useRef(null),Y=C.useRef({value:k,onChange:V,isIOS:typeof window<"u"&&((L=(R=window?.CSS)==null?void 0:R.supports)==null?void 0:L.call(R,"-webkit-touch-callout","none"))}),T=C.useRef({prev:[(z=U.current)==null?void 0:z.selectionStart,(G=U.current)==null?void 0:G.selectionEnd,(_=U.current)==null?void 0:_.selectionDirection]});C.useImperativeHandle(e,()=>U.current,[]),C.useEffect(()=>{let Me=U.current,Ae=H.current;if(!Me||!Ae)return;Y.current.value!==Me.value&&Y.current.onChange(Me.value),T.current.prev=[Me.selectionStart,Me.selectionEnd,Me.selectionDirection];function Je(){if(document.activeElement!==Me){Z(null),X(null);return}let je=Me.selectionStart,J=Me.selectionEnd,ee=Me.selectionDirection,se=Me.maxLength,ve=Me.value,ue=T.current.prev,pe=-1,Ce=-1,Ge;if(ve.length!==0&&je!==null&&J!==null){let En=je===J,ot=je===ve.length&&ve.length<se;if(En&&!ot){let vn=je;if(vn===0)pe=0,Ce=1,Ge="forward";else if(vn===se)pe=vn-1,Ce=vn,Ge="backward";else if(se>1&&ve.length>1){let rn=0;if(ue[0]!==null&&ue[1]!==null){Ge=vn<ue[1]?"backward":"forward";let Kn=ue[0]===ue[1]&&ue[0]<se;Ge==="backward"&&!Kn&&(rn=-1)}pe=rn+vn,Ce=rn+vn+1}}pe!==-1&&Ce!==-1&&pe!==Ce&&U.current.setSelectionRange(pe,Ce,Ge)}let Oe=pe!==-1?pe:je,Cn=Ce!==-1?Ce:J,An=Ge??ee;Z(Oe),X(Cn),T.current.prev=[Oe,Cn,An]}if(document.addEventListener("selectionchange",Je,{capture:!0}),Je(),document.activeElement===Me&&$(!0),!document.getElementById("input-otp-style")){let je=document.createElement("style");if(je.id="input-otp-style",document.head.appendChild(je),je.sheet){let J="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";ol(je.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),ol(je.sheet,`[data-input-otp]:autofill { ${J} }`),ol(je.sheet,`[data-input-otp]:-webkit-autofill { ${J} }`),ol(je.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),ol(je.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let Fe=()=>{Ae&&Ae.style.setProperty("--root-height",`${Me.clientHeight}px`)};Fe();let qe=new ResizeObserver(Fe);return qe.observe(Me),()=>{document.removeEventListener("selectionchange",Je,{capture:!0}),qe.disconnect()}},[]);let[D,I]=C.useState(!1),[q,$]=C.useState(!1),[P,Z]=C.useState(null),[te,X]=C.useState(null);C.useEffect(()=>{nL(()=>{var Me,Ae,Je,Fe;(Me=U.current)==null||Me.dispatchEvent(new Event("input"));let qe=(Ae=U.current)==null?void 0:Ae.selectionStart,je=(Je=U.current)==null?void 0:Je.selectionEnd,J=(Fe=U.current)==null?void 0:Fe.selectionDirection;qe!==null&&je!==null&&(Z(qe),X(je),T.current.prev=[qe,je,J])})},[k,q]),C.useEffect(()=>{j!==void 0&&k!==j&&j.length<l&&k.length===l&&m?.(k)},[l,m,j,k]);let Q=sL({containerRef:H,inputRef:U,pushPasswordManagerStrategy:y,isFocused:q}),ye=C.useCallback(Me=>{let Ae=Me.currentTarget.value.slice(0,l);if(Ae.length>0&&F&&!F.test(Ae)){Me.preventDefault();return}typeof j=="string"&&Ae.length<j.length&&document.dispatchEvent(new Event("selectionchange")),V(Ae)},[l,V,j,F]),ce=C.useCallback(()=>{var Me;if(U.current){let Ae=Math.min(U.current.value.length,l-1),Je=U.current.value.length;(Me=U.current)==null||Me.setSelectionRange(Ae,Je),Z(Ae),X(Je)}$(!0)},[l]),Se=C.useCallback(Me=>{var Ae,Je;let Fe=U.current;if(!v&&(!Y.current.isIOS||!Me.clipboardData||!Fe))return;let qe=Me.clipboardData.getData("text/plain"),je=v?v(qe):qe;Me.preventDefault();let J=(Ae=U.current)==null?void 0:Ae.selectionStart,ee=(Je=U.current)==null?void 0:Je.selectionEnd,se=(J!==ee?k.slice(0,J)+je+k.slice(ee):k.slice(0,J)+je+k.slice(J)).slice(0,l);if(se.length>0&&F&&!F.test(se))return;Fe.value=se,V(se);let ve=Math.min(se.length,l-1),ue=se.length;Fe.setSelectionRange(ve,ue),Z(ve),X(ue)},[l,V,F,k]),ge=C.useMemo(()=>({position:"relative",cursor:w.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[w.disabled]),oe=C.useMemo(()=>({position:"absolute",inset:0,width:Q.willPushPWMBadge?`calc(100% + ${Q.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:Q.willPushPWMBadge?`inset(0 ${Q.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:u,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[Q.PWM_BADGE_SPACE_WIDTH,Q.willPushPWMBadge,u]),fe=C.useMemo(()=>C.createElement("input",$B(QB({autoComplete:w.autoComplete||"one-time-code"},w),{"data-input-otp":!0,"data-input-otp-placeholder-shown":k.length===0||void 0,"data-input-otp-mss":P,"data-input-otp-mse":te,inputMode:p,pattern:F?.source,"aria-placeholder":f,style:oe,maxLength:l,value:k,ref:U,onPaste:Me=>{var Ae;Se(Me),(Ae=w.onPaste)==null||Ae.call(w,Me)},onChange:ye,onMouseOver:Me=>{var Ae;I(!0),(Ae=w.onMouseOver)==null||Ae.call(w,Me)},onMouseLeave:Me=>{var Ae;I(!1),(Ae=w.onMouseLeave)==null||Ae.call(w,Me)},onFocus:Me=>{var Ae;ce(),(Ae=w.onFocus)==null||Ae.call(w,Me)},onBlur:Me=>{var Ae;$(!1),(Ae=w.onBlur)==null||Ae.call(w,Me)}})),[ye,ce,Se,p,oe,l,te,P,w,F?.source,k]),xe=C.useMemo(()=>({slots:Array.from({length:l}).map((Me,Ae)=>{var Je;let Fe=q&&P!==null&&te!==null&&(P===te&&Ae===P||Ae>=P&&Ae<te),qe=k[Ae]!==void 0?k[Ae]:null,je=k[0]!==void 0?null:(Je=f?.[Ae])!=null?Je:null;return{char:qe,placeholderChar:je,isActive:Fe,hasFakeCaret:Fe&&qe===null}}),isFocused:q,isHovering:!w.disabled&&D}),[q,D,l,te,P,w.disabled,k]),_e=C.useMemo(()=>S?S(xe):C.createElement(yS.Provider,{value:xe},N),[N,xe,S]);return C.createElement(C.Fragment,null,A!==null&&C.createElement("noscript",null,C.createElement("style",null,A)),C.createElement("div",{ref:H,"data-input-otp-container":!0,style:ge,className:x},_e,C.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},fe)))});vS.displayName="Input";function ol(n,e){try{n.insertRule(e)}catch{console.error("input-otp could not insert CSS rule:",e)}}var oL=`
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
}`;function lL({className:n,containerClassName:e,...r}){return b.jsx(vS,{"data-slot":"input-otp",containerClassName:Mn("flex items-center gap-2 has-disabled:opacity-50",e),className:Mn("disabled:cursor-not-allowed",n),...r})}function cL({className:n,...e}){return b.jsx("div",{"data-slot":"input-otp-group",className:Mn("flex items-center",n),...e})}function Ns({index:n,className:e,...r}){const i=C.useContext(yS),{char:s,hasFakeCaret:l,isActive:u}=i?.slots[n]??{};return b.jsxs("div",{"data-slot":"input-otp-slot","data-active":u,className:Mn("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",e),...r,children:[s,l&&b.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:b.jsx("div",{className:"animate-caret-blink bg-foreground h-4 w-px duration-1000"})})]})}function uL({language:n,otpCode:e,onOTPChange:r,onNext:i,onBack:s}){const l=_R[n],u=YB({required:l.required,invalid:l.invalid}),{register:d,handleSubmit:f,formState:{errors:p},setValue:m,trigger:y}=yd({resolver:vd(u),defaultValues:{otpCode:e}}),v=A=>{const S=A.replace(/\D/g,"").slice(0,6);m("otpCode",S),r(S),y("otpCode")},x=async A=>{i()};return b.jsx("div",{className:"min-h-screen flex justify-center px-4 py-8",children:b.jsx(Te.div,{className:"w-full max-w-md mx-auto",variants:fS,initial:"hidden",animate:"visible",style:{willChange:"opacity"},children:b.jsxs(Sg,{className:"bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-0 backdrop-blur-sm",children:[b.jsx(Mg,{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4",children:b.jsxs(Te.div,{variants:Ei,style:{willChange:"transform, opacity"},children:[b.jsx(Te.div,{className:"w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",variants:hS,animate:"pulse",style:{willChange:"transform"},children:b.jsx(o6,{className:"w-8 h-8 text-brand-primary"})}),b.jsx(Cg,{className:"text-2xl font-bold text-brand-text text-center mb-2",children:l.title}),b.jsx(Ag,{className:"text-sm text-slate-600 text-center",children:l.subtitle})]})}),b.jsx(wg,{className:"px-6 sm:px-8 pb-6 sm:pb-8",children:b.jsxs("form",{onSubmit:f(x),className:"space-y-6",children:[b.jsxs(Te.div,{variants:Ei,style:{willChange:"transform, opacity"},children:[b.jsx("label",{htmlFor:"otp",className:"block text-sm font-medium text-brand-text mb-3 text-center sm:text-left",children:l.label}),b.jsx(lL,{id:"otp",maxLength:6,value:e,onChange:v,containerClassName:"justify-center","aria-invalid":!!p.otpCode,children:b.jsxs(cL,{className:"gap-1.5 sm:gap-2",children:[b.jsx(Ns,{index:0,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),b.jsx(Ns,{index:1,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),b.jsx(Ns,{index:2,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),b.jsx(Ns,{index:3,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),b.jsx(Ns,{index:4,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"}),b.jsx(Ns,{index:5,className:"h-12 w-11 sm:h-14 sm:w-14 text-xl sm:text-2xl font-semibold border-slate-300 data-[active=true]:border-brand-primary data-[active=true]:ring-brand-primary/50 aria-invalid:border-brand-error aria-invalid:data-[active=true]:border-brand-error aria-invalid:data-[active=true]:ring-brand-error/50"})]})}),p.otpCode&&b.jsxs(Te.div,{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},transition:{duration:.2},children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:p.otpCode.message})]})]}),b.jsx(Te.div,{variants:Ei,style:{willChange:"transform, opacity"},children:b.jsx(sr,{type:"button",variant:"ghost",className:"w-full text-brand-primary hover:text-brand-primary-hover hover:bg-brand-primary/5",onClick:()=>{console.log("Resend OTP")},children:l.resend})}),b.jsxs(Te.div,{className:"flex gap-3 pt-4",variants:Ei,style:{willChange:"transform, opacity"},children:[b.jsx(sr,{type:"button",onClick:s,variant:"outline",size:"lg",className:"h-12 px-6",asChild:!0,children:b.jsxs(Te.button,{variants:Ku,whileHover:"hover",whileTap:"tap",style:{willChange:"transform"},children:[b.jsx(nd,{className:"w-5 h-5"}),l.back]})}),b.jsx(sr,{type:"submit",size:"lg",className:"flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white",asChild:!0,children:b.jsxs(Te.button,{variants:Ku,whileHover:"hover",whileTap:"tap",style:{willChange:"transform"},children:[l.continue,b.jsx(kl,{className:"w-5 h-5"})]})})]})]})})]})})})}function dL({language:n}){const e=VR[n];return b.jsx("div",{className:"min-h-screen flex items-start justify-center px-4",style:{paddingTop:"40vh"},children:b.jsx("div",{className:"w-full max-w-md mx-auto -translate-y-1/2",children:b.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-slate-100 p-8 sm:p-12 relative z-10",children:b.jsxs("div",{className:"flex flex-col items-center justify-center space-y-6",children:[b.jsx("div",{className:"w-20 h-20 bg-brand-primary/10 rounded-xl flex items-center justify-center",children:b.jsx(gp,{className:"w-10 h-10 text-brand-primary animate-spin"})}),b.jsx("p",{className:"text-lg text-center text-slate-700 font-medium",children:e.message})]})})})})}function fL(n,e){return C.useReducer((r,i)=>e[r][i]??r,n)}var Fl=n=>{const{present:e,children:r}=n,i=hL(e),s=typeof r=="function"?r({present:i.isPresent}):C.Children.only(r),l=Ln(i.ref,mL(s));return typeof r=="function"||i.isPresent?C.cloneElement(s,{ref:l}):null};Fl.displayName="Presence";function hL(n){const[e,r]=C.useState(),i=C.useRef(null),s=C.useRef(n),l=C.useRef("none"),u=n?"mounted":"unmounted",[d,f]=fL(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return C.useEffect(()=>{const p=mu(i.current);l.current=d==="mounted"?p:"none"},[d]),St(()=>{const p=i.current,m=s.current;if(m!==n){const v=l.current,x=mu(p);n?f("MOUNT"):x==="none"||p?.display==="none"?f("UNMOUNT"):f(m&&v!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=n}},[n,f]),St(()=>{if(e){let p;const m=e.ownerDocument.defaultView??window,y=x=>{const S=mu(i.current).includes(CSS.escape(x.animationName));if(x.target===e&&S&&(f("ANIMATION_END"),!s.current)){const N=e.style.animationFillMode;e.style.animationFillMode="forwards",p=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=N)})}},v=x=>{x.target===e&&(l.current=mu(i.current))};return e.addEventListener("animationstart",v),e.addEventListener("animationcancel",y),e.addEventListener("animationend",y),()=>{m.clearTimeout(p),e.removeEventListener("animationstart",v),e.removeEventListener("animationcancel",y),e.removeEventListener("animationend",y)}}else f("ANIMATION_END")},[e,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:C.useCallback(p=>{i.current=p?getComputedStyle(p):null,r(p)},[])}}function mu(n){return n?.animationName||"none"}function mL(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function pL(n){const e=gL(n),r=C.forwardRef((i,s)=>{const{children:l,...u}=i,d=C.Children.toArray(l),f=d.find(vL);if(f){const p=f.props.children,m=d.map(y=>y===f?C.Children.count(p)>1?C.Children.only(null):C.isValidElement(p)?p.props.children:null:y);return b.jsx(e,{...u,ref:s,children:C.isValidElement(p)?C.cloneElement(p,void 0,m):null})}return b.jsx(e,{...u,ref:s,children:l})});return r.displayName=`${n}.Slot`,r}function gL(n){const e=C.forwardRef((r,i)=>{const{children:s,...l}=r;if(C.isValidElement(s)){const u=xL(s),d=bL(l,s.props);return s.type!==C.Fragment&&(d.ref=i?Xs(i,u):u),C.cloneElement(s,d)}return C.Children.count(s)>1?C.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var yL=Symbol("radix.slottable");function vL(n){return C.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===yL}function bL(n,e){const r={...e};for(const i in e){const s=n[i],l=e[i];/^on[A-Z]/.test(i)?s&&l?r[i]=(...d)=>{const f=l(...d);return s(...d),f}:s&&(r[i]=s):i==="style"?r[i]={...s,...l}:i==="className"&&(r[i]=[s,l].filter(Boolean).join(" "))}return{...n,...r}}function xL(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var xd="Dialog",[bS]=Bl(xd),[SL,Cr]=bS(xd),xS=n=>{const{__scopeDialog:e,children:r,open:i,defaultOpen:s,onOpenChange:l,modal:u=!0}=n,d=C.useRef(null),f=C.useRef(null),[p,m]=Eu({prop:i,defaultProp:s??!1,onChange:l,caller:xd});return b.jsx(SL,{scope:e,triggerRef:d,contentRef:f,contentId:Vs(),titleId:Vs(),descriptionId:Vs(),open:p,onOpenChange:m,onOpenToggle:C.useCallback(()=>m(y=>!y),[m]),modal:u,children:r})};xS.displayName=xd;var SS="DialogTrigger",MS=C.forwardRef((n,e)=>{const{__scopeDialog:r,...i}=n,s=Cr(SS,r),l=Ln(e,s.triggerRef);return b.jsx(mn.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":Eg(s.open),...i,ref:l,onClick:Sn(n.onClick,s.onOpenToggle)})});MS.displayName=SS;var Tg="DialogPortal",[ML,CS]=bS(Tg,{forceMount:void 0}),AS=n=>{const{__scopeDialog:e,forceMount:r,children:i,container:s}=n,l=Cr(Tg,e);return b.jsx(ML,{scope:e,forceMount:r,children:C.Children.map(i,u=>b.jsx(Fl,{present:r||l.open,children:b.jsx(Dp,{asChild:!0,container:s,children:u})}))})};AS.displayName=Tg;var Zu="DialogOverlay",wS=C.forwardRef((n,e)=>{const r=CS(Zu,n.__scopeDialog),{forceMount:i=r.forceMount,...s}=n,l=Cr(Zu,n.__scopeDialog);return l.modal?b.jsx(Fl,{present:i||l.open,children:b.jsx(AL,{...s,ref:e})}):null});wS.displayName=Zu;var CL=pL("DialogOverlay.RemoveScroll"),AL=C.forwardRef((n,e)=>{const{__scopeDialog:r,...i}=n,s=Cr(Zu,r);return b.jsx(Ep,{as:CL,allowPinchZoom:!0,shards:[s.contentRef],children:b.jsx(mn.div,{"data-state":Eg(s.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),zi="DialogContent",TS=C.forwardRef((n,e)=>{const r=CS(zi,n.__scopeDialog),{forceMount:i=r.forceMount,...s}=n,l=Cr(zi,n.__scopeDialog);return b.jsx(Fl,{present:i||l.open,children:l.modal?b.jsx(wL,{...s,ref:e}):b.jsx(TL,{...s,ref:e})})});TS.displayName=zi;var wL=C.forwardRef((n,e)=>{const r=Cr(zi,n.__scopeDialog),i=C.useRef(null),s=Ln(e,r.contentRef,i);return C.useEffect(()=>{const l=i.current;if(l)return n3(l)},[]),b.jsx(DS,{...n,ref:s,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Sn(n.onCloseAutoFocus,l=>{l.preventDefault(),r.triggerRef.current?.focus()}),onPointerDownOutside:Sn(n.onPointerDownOutside,l=>{const u=l.detail.originalEvent,d=u.button===0&&u.ctrlKey===!0;(u.button===2||d)&&l.preventDefault()}),onFocusOutside:Sn(n.onFocusOutside,l=>l.preventDefault())})}),TL=C.forwardRef((n,e)=>{const r=Cr(zi,n.__scopeDialog),i=C.useRef(!1),s=C.useRef(!1);return b.jsx(DS,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{n.onCloseAutoFocus?.(l),l.defaultPrevented||(i.current||r.triggerRef.current?.focus(),l.preventDefault()),i.current=!1,s.current=!1},onInteractOutside:l=>{n.onInteractOutside?.(l),l.defaultPrevented||(i.current=!0,l.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const u=l.target;r.triggerRef.current?.contains(u)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&s.current&&l.preventDefault()}})}),DS=C.forwardRef((n,e)=>{const{__scopeDialog:r,trapFocus:i,onOpenAutoFocus:s,onCloseAutoFocus:l,...u}=n,d=Cr(zi,r),f=C.useRef(null),p=Ln(e,f);return D4(),b.jsxs(b.Fragment,{children:[b.jsx(vp,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:s,onUnmountAutoFocus:l,children:b.jsx(yp,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":Eg(d.open),...u,ref:p,onDismiss:()=>d.onOpenChange(!1)})}),b.jsxs(b.Fragment,{children:[b.jsx(EL,{titleId:d.titleId}),b.jsx(RL,{contentRef:f,descriptionId:d.descriptionId})]})]})}),Dg="DialogTitle",ES=C.forwardRef((n,e)=>{const{__scopeDialog:r,...i}=n,s=Cr(Dg,r);return b.jsx(mn.h2,{id:s.titleId,...i,ref:e})});ES.displayName=Dg;var NS="DialogDescription",DL=C.forwardRef((n,e)=>{const{__scopeDialog:r,...i}=n,s=Cr(NS,r);return b.jsx(mn.p,{id:s.descriptionId,...i,ref:e})});DL.displayName=NS;var RS="DialogClose",kS=C.forwardRef((n,e)=>{const{__scopeDialog:r,...i}=n,s=Cr(RS,r);return b.jsx(mn.button,{type:"button",...i,ref:e,onClick:Sn(n.onClick,()=>s.onOpenChange(!1))})});kS.displayName=RS;function Eg(n){return n?"open":"closed"}var PS="DialogTitleWarning",[B_,BS]=b6(PS,{contentName:zi,titleName:Dg,docsSlug:"dialog"}),EL=({titleId:n})=>{const e=BS(PS),r=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return C.useEffect(()=>{n&&(document.getElementById(n)||console.error(r))},[r,n]),null},NL="DialogDescriptionWarning",RL=({contentRef:n,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${BS(NL).contentName}}.`;return C.useEffect(()=>{const s=n.current?.getAttribute("aria-describedby");e&&s&&(document.getElementById(e)||console.warn(i))},[i,n,e]),null},kL=xS,PL=MS,BL=AS,LL=wS,_L=TS,OL=ES,zL=kS;function jL({...n}){return b.jsx(kL,{"data-slot":"dialog",...n})}function VL({...n}){return b.jsx(PL,{"data-slot":"dialog-trigger",...n})}function FL({...n}){return b.jsx(BL,{"data-slot":"dialog-portal",...n})}function GL({className:n,...e}){return b.jsx(LL,{"data-slot":"dialog-overlay",className:Mn("data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...e})}function HL({className:n,children:e,...r}){return b.jsxs(FL,{"data-slot":"dialog-portal",children:[b.jsx(GL,{}),b.jsxs(_L,{"data-slot":"dialog-content",className:Mn("bg-background data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-150 sm:max-w-lg",n),...r,children:[e,b.jsxs(zL,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[b.jsx(A4,{}),b.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function IL({className:n,...e}){return b.jsx("div",{"data-slot":"dialog-header",className:Mn("flex flex-col gap-2 text-center sm:text-left",n),...e})}function UL({className:n,...e}){return b.jsx(OL,{"data-slot":"dialog-title",className:Mn("text-lg leading-none font-semibold",n),...e})}var Sd="Checkbox",[JL]=Bl(Sd),[qL,Ng]=JL(Sd);function KL(n){const{__scopeCheckbox:e,checked:r,children:i,defaultChecked:s,disabled:l,form:u,name:d,onCheckedChange:f,required:p,value:m="on",internal_do_not_use_render:y}=n,[v,x]=Eu({prop:r,defaultProp:s??!1,onChange:f,caller:Sd}),[A,S]=C.useState(null),[N,w]=C.useState(null),R=C.useRef(!1),L=A?!!u||!!A.closest("form"):!0,z={checked:v,disabled:l,setChecked:x,control:A,setControl:S,name:d,form:u,value:m,hasConsumerStoppedPropagationRef:R,required:p,defaultChecked:Ka(s)?!1:s,isFormControl:L,bubbleInput:N,setBubbleInput:w};return b.jsx(qL,{scope:e,...z,children:YL(y)?y(z):i})}var LS="CheckboxTrigger",_S=C.forwardRef(({__scopeCheckbox:n,onKeyDown:e,onClick:r,...i},s)=>{const{control:l,value:u,disabled:d,checked:f,required:p,setControl:m,setChecked:y,hasConsumerStoppedPropagationRef:v,isFormControl:x,bubbleInput:A}=Ng(LS,n),S=Ln(s,m),N=C.useRef(f);return C.useEffect(()=>{const w=l?.form;if(w){const R=()=>y(N.current);return w.addEventListener("reset",R),()=>w.removeEventListener("reset",R)}},[l,y]),b.jsx(mn.button,{type:"button",role:"checkbox","aria-checked":Ka(f)?"mixed":f,"aria-required":p,"data-state":GS(f),"data-disabled":d?"":void 0,disabled:d,value:u,...i,ref:S,onKeyDown:Sn(e,w=>{w.key==="Enter"&&w.preventDefault()}),onClick:Sn(r,w=>{y(R=>Ka(R)?!0:!R),A&&x&&(v.current=w.isPropagationStopped(),v.current||w.stopPropagation())})})});_S.displayName=LS;var OS=C.forwardRef((n,e)=>{const{__scopeCheckbox:r,name:i,checked:s,defaultChecked:l,required:u,disabled:d,value:f,onCheckedChange:p,form:m,...y}=n;return b.jsx(KL,{__scopeCheckbox:r,checked:s,defaultChecked:l,disabled:d,required:u,onCheckedChange:p,name:i,form:m,value:f,internal_do_not_use_render:({isFormControl:v})=>b.jsxs(b.Fragment,{children:[b.jsx(_S,{...y,ref:e,__scopeCheckbox:r}),v&&b.jsx(FS,{__scopeCheckbox:r})]})})});OS.displayName=Sd;var zS="CheckboxIndicator",jS=C.forwardRef((n,e)=>{const{__scopeCheckbox:r,forceMount:i,...s}=n,l=Ng(zS,r);return b.jsx(Fl,{present:i||Ka(l.checked)||l.checked===!0,children:b.jsx(mn.span,{"data-state":GS(l.checked),"data-disabled":l.disabled?"":void 0,...s,ref:e,style:{pointerEvents:"none",...n.style}})})});jS.displayName=zS;var VS="CheckboxBubbleInput",FS=C.forwardRef(({__scopeCheckbox:n,...e},r)=>{const{control:i,hasConsumerStoppedPropagationRef:s,checked:l,defaultChecked:u,required:d,disabled:f,name:p,value:m,form:y,bubbleInput:v,setBubbleInput:x}=Ng(VS,n),A=Ln(r,x),S=Q4(l),N=G4(i);C.useEffect(()=>{const R=v;if(!R)return;const L=window.HTMLInputElement.prototype,G=Object.getOwnPropertyDescriptor(L,"checked").set,_=!s.current;if(S!==l&&G){const O=new Event("click",{bubbles:_});R.indeterminate=Ka(l),G.call(R,Ka(l)?!1:l),R.dispatchEvent(O)}},[v,S,l,s]);const w=C.useRef(Ka(l)?!1:l);return b.jsx(mn.input,{type:"checkbox","aria-hidden":!0,defaultChecked:u??w.current,required:d,disabled:f,name:p,value:m,form:y,...e,tabIndex:-1,ref:A,style:{...e.style,...N,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});FS.displayName=VS;function YL(n){return typeof n=="function"}function Ka(n){return n==="indeterminate"}function GS(n){return Ka(n)?"indeterminate":n?"checked":"unchecked"}function f4({className:n,...e}){return b.jsx(OS,{"data-slot":"checkbox",className:Mn("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...e,children:b.jsx(jS,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:b.jsx(td,{className:"size-3.5"})})})}var ZL=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],WL=ZL.reduce((n,e)=>{const r=e5(`Primitive.${e}`),i=C.forwardRef((s,l)=>{const{asChild:u,...d}=s,f=u?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),b.jsx(f,{...d,ref:l})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{}),XL="Label",HS=C.forwardRef((n,e)=>b.jsx(WL.label,{...n,ref:e,onMouseDown:r=>{r.target.closest("button, input, select, textarea")||(n.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));HS.displayName=XL;var QL=HS;function h4({className:n,...e}){return b.jsx(QL,{"data-slot":"label",className:Mn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...e})}function $L(n,e){return e.forEach((function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach((function(i){if(i!=="default"&&!(i in n)){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}}))})),Object.freeze(n)}function IS(n,e){return new Promise((function(r,i){let s;return e_(n).then((function(l){try{return s=l,r(new Blob([e.slice(0,2),s,e.slice(2)],{type:"image/jpeg"}))}catch(u){return i(u)}}),i)}))}const e_=n=>new Promise(((e,r)=>{const i=new FileReader;i.addEventListener("load",(({target:{result:s}})=>{const l=new DataView(s);let u=0;if(l.getUint16(u)!==65496)return r("not a valid JPEG");for(u+=2;;){const d=l.getUint16(u);if(d===65498)break;const f=l.getUint16(u+2);if(d===65505&&l.getUint32(u+4)===1165519206){const p=u+10;let m;switch(l.getUint16(p)){case 18761:m=!0;break;case 19789:m=!1;break;default:return r("TIFF header contains invalid endian")}if(l.getUint16(p+2,m)!==42)return r("TIFF header contains invalid version");const y=l.getUint32(p+4,m),v=p+y+2+12*l.getUint16(p+y,m);for(let x=p+y+2;x<v;x+=12)if(l.getUint16(x,m)==274){if(l.getUint16(x+2,m)!==3)return r("Orientation data type is invalid");if(l.getUint32(x+4,m)!==1)return r("Orientation data count is invalid");l.setUint16(x+8,1,m);break}return e(s.slice(u,u+2+f))}u+=2+f}return e(new Blob)})),i.readAsArrayBuffer(n)}));var Wu={},n_={get exports(){return Wu},set exports(n){Wu=n}};(function(n){var e,r,i={};n_.exports=i,i.parse=function(s,l){for(var u=i.bin.readUshort,d=i.bin.readUint,f=0,p={},m=new Uint8Array(s),y=m.length-4;d(m,y)!=101010256;)y--;f=y,f+=4;var v=u(m,f+=4);u(m,f+=2);var x=d(m,f+=2),A=d(m,f+=4);f+=4,f=A;for(var S=0;S<v;S++){d(m,f),f+=4,f+=4,f+=4,d(m,f+=4),x=d(m,f+=4);var N=d(m,f+=4),w=u(m,f+=4),R=u(m,f+2),L=u(m,f+4);f+=6;var z=d(m,f+=8);f+=4,f+=w+R+L,i._readLocal(m,z,p,x,N,l)}return p},i._readLocal=function(s,l,u,d,f,p){var m=i.bin.readUshort,y=i.bin.readUint;y(s,l),m(s,l+=4),m(s,l+=2);var v=m(s,l+=2);y(s,l+=2),y(s,l+=4),l+=4;var x=m(s,l+=8),A=m(s,l+=2);l+=2;var S=i.bin.readUTF8(s,l,x);if(l+=x,l+=A,p)u[S]={size:f,csize:d};else{var N=new Uint8Array(s.buffer,l);if(v==0)u[S]=new Uint8Array(N.buffer.slice(l,l+d));else{if(v!=8)throw"unknown compression method: "+v;var w=new Uint8Array(f);i.inflateRaw(N,w),u[S]=w}}},i.inflateRaw=function(s,l){return i.F.inflate(s,l)},i.inflate=function(s,l){return s[0],s[1],i.inflateRaw(new Uint8Array(s.buffer,s.byteOffset+2,s.length-6),l)},i.deflate=function(s,l){l==null&&(l={level:6});var u=0,d=new Uint8Array(50+Math.floor(1.1*s.length));d[u]=120,d[u+1]=156,u+=2,u=i.F.deflateRaw(s,d,u,l.level);var f=i.adler(s,0,s.length);return d[u+0]=f>>>24&255,d[u+1]=f>>>16&255,d[u+2]=f>>>8&255,d[u+3]=f>>>0&255,new Uint8Array(d.buffer,0,u+4)},i.deflateRaw=function(s,l){l==null&&(l={level:6});var u=new Uint8Array(50+Math.floor(1.1*s.length)),d=i.F.deflateRaw(s,u,d,l.level);return new Uint8Array(u.buffer,0,d)},i.encode=function(s,l){l==null&&(l=!1);var u=0,d=i.bin.writeUint,f=i.bin.writeUshort,p={};for(var m in s){var y=!i._noNeed(m)&&!l,v=s[m],x=i.crc.crc(v,0,v.length);p[m]={cpr:y,usize:v.length,crc:x,file:y?i.deflateRaw(v):v}}for(var m in p)u+=p[m].file.length+30+46+2*i.bin.sizeUTF8(m);u+=22;var A=new Uint8Array(u),S=0,N=[];for(var m in p){var w=p[m];N.push(S),S=i._writeHeader(A,S,m,w,0)}var R=0,L=S;for(var m in p)w=p[m],N.push(S),S=i._writeHeader(A,S,m,w,1,N[R++]);var z=S-L;return d(A,S,101010256),S+=4,f(A,S+=4,R),f(A,S+=2,R),d(A,S+=2,z),d(A,S+=4,L),S+=4,S+=2,A.buffer},i._noNeed=function(s){var l=s.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(l)!=-1},i._writeHeader=function(s,l,u,d,f,p){var m=i.bin.writeUint,y=i.bin.writeUshort,v=d.file;return m(s,l,f==0?67324752:33639248),l+=4,f==1&&(l+=2),y(s,l,20),y(s,l+=2,0),y(s,l+=2,d.cpr?8:0),m(s,l+=2,0),m(s,l+=4,d.crc),m(s,l+=4,v.length),m(s,l+=4,d.usize),y(s,l+=4,i.bin.sizeUTF8(u)),y(s,l+=2,0),l+=2,f==1&&(l+=2,l+=2,m(s,l+=6,p),l+=4),l+=i.bin.writeUTF8(s,l,u),f==0&&(s.set(v,l),l+=v.length),l},i.crc={table:(function(){for(var s=new Uint32Array(256),l=0;l<256;l++){for(var u=l,d=0;d<8;d++)1&u?u=3988292384^u>>>1:u>>>=1;s[l]=u}return s})(),update:function(s,l,u,d){for(var f=0;f<d;f++)s=i.crc.table[255&(s^l[u+f])]^s>>>8;return s},crc:function(s,l,u){return 4294967295^i.crc.update(4294967295,s,l,u)}},i.adler=function(s,l,u){for(var d=1,f=0,p=l,m=l+u;p<m;){for(var y=Math.min(p+5552,m);p<y;)f+=d+=s[p++];d%=65521,f%=65521}return f<<16|d},i.bin={readUshort:function(s,l){return s[l]|s[l+1]<<8},writeUshort:function(s,l,u){s[l]=255&u,s[l+1]=u>>8&255},readUint:function(s,l){return 16777216*s[l+3]+(s[l+2]<<16|s[l+1]<<8|s[l])},writeUint:function(s,l,u){s[l]=255&u,s[l+1]=u>>8&255,s[l+2]=u>>16&255,s[l+3]=u>>24&255},readASCII:function(s,l,u){for(var d="",f=0;f<u;f++)d+=String.fromCharCode(s[l+f]);return d},writeASCII:function(s,l,u){for(var d=0;d<u.length;d++)s[l+d]=u.charCodeAt(d)},pad:function(s){return s.length<2?"0"+s:s},readUTF8:function(s,l,u){for(var d,f="",p=0;p<u;p++)f+="%"+i.bin.pad(s[l+p].toString(16));try{d=decodeURIComponent(f)}catch{return i.bin.readASCII(s,l,u)}return d},writeUTF8:function(s,l,u){for(var d=u.length,f=0,p=0;p<d;p++){var m=u.charCodeAt(p);if((4294967168&m)==0)s[l+f]=m,f++;else if((4294965248&m)==0)s[l+f]=192|m>>6,s[l+f+1]=128|m>>0&63,f+=2;else if((4294901760&m)==0)s[l+f]=224|m>>12,s[l+f+1]=128|m>>6&63,s[l+f+2]=128|m>>0&63,f+=3;else{if((4292870144&m)!=0)throw"e";s[l+f]=240|m>>18,s[l+f+1]=128|m>>12&63,s[l+f+2]=128|m>>6&63,s[l+f+3]=128|m>>0&63,f+=4}}return f},sizeUTF8:function(s){for(var l=s.length,u=0,d=0;d<l;d++){var f=s.charCodeAt(d);if((4294967168&f)==0)u++;else if((4294965248&f)==0)u+=2;else if((4294901760&f)==0)u+=3;else{if((4292870144&f)!=0)throw"e";u+=4}}return u}},i.F={},i.F.deflateRaw=function(s,l,u,d){var f=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][d],p=i.F.U,m=i.F._goodIndex;i.F._hash;var y=i.F._putsE,v=0,x=u<<3,A=0,S=s.length;if(d==0){for(;v<S;)y(l,x,v+(V=Math.min(65535,S-v))==S?1:0),x=i.F._copyExact(s,v,V,l,x+8),v+=V;return x>>>3}var N=p.lits,w=p.strt,R=p.prev,L=0,z=0,G=0,_=0,O=0,E=0;for(S>2&&(w[E=i.F._hash(s,0)]=0),v=0;v<S;v++){if(O=E,v+1<S-2){E=i.F._hash(s,v+1);var k=v+1&32767;R[k]=w[E],w[E]=k}if(A<=v){(L>14e3||z>26697)&&S-v>100&&(A<v&&(N[L]=v-A,L+=2,A=v),x=i.F._writeBlock(v==S-1||A==S?1:0,N,L,_,s,G,v-G,l,x),L=z=_=0,G=v);var j=0;v<S-2&&(j=i.F._bestMatch(s,v,R,O,Math.min(f[2],S-v),f[3]));var V=j>>>16,F=65535&j;if(j!=0){F=65535&j;var U=m(V=j>>>16,p.of0);p.lhst[257+U]++;var H=m(F,p.df0);p.dhst[H]++,_+=p.exb[U]+p.dxb[H],N[L]=V<<23|v-A,N[L+1]=F<<16|U<<8|H,L+=2,A=v+V}else p.lhst[s[v]]++;z++}}for(G==v&&s.length!=0||(A<v&&(N[L]=v-A,L+=2,A=v),x=i.F._writeBlock(1,N,L,_,s,G,v-G,l,x),L=0,z=0,L=z=_=0,G=v);(7&x)!=0;)x++;return x>>>3},i.F._bestMatch=function(s,l,u,d,f,p){var m=32767&l,y=u[m],v=m-y+32768&32767;if(y==m||d!=i.F._hash(s,l-v))return 0;for(var x=0,A=0,S=Math.min(32767,l);v<=S&&--p!=0&&y!=m;){if(x==0||s[l+x]==s[l+x-v]){var N=i.F._howLong(s,l,v);if(N>x){if(A=v,(x=N)>=f)break;v+2<N&&(N=v+2);for(var w=0,R=0;R<N-2;R++){var L=l-v+R+32768&32767,z=L-u[L]+32768&32767;z>w&&(w=z,y=L)}}}v+=(m=y)-(y=u[m])+32768&32767}return x<<16|A},i.F._howLong=function(s,l,u){if(s[l]!=s[l-u]||s[l+1]!=s[l+1-u]||s[l+2]!=s[l+2-u])return 0;var d=l,f=Math.min(s.length,l+258);for(l+=3;l<f&&s[l]==s[l-u];)l++;return l-d},i.F._hash=function(s,l){return(s[l]<<8|s[l+1])+(s[l+2]<<4)&65535},i.saved=0,i.F._writeBlock=function(s,l,u,d,f,p,m,y,v){var x,A,S,N,w,R,L,z,G,_=i.F.U,O=i.F._putsF,E=i.F._putsE;_.lhst[256]++,A=(x=i.F.getTrees())[0],S=x[1],N=x[2],w=x[3],R=x[4],L=x[5],z=x[6],G=x[7];var k=32+((v+3&7)==0?0:8-(v+3&7))+(m<<3),j=d+i.F.contSize(_.fltree,_.lhst)+i.F.contSize(_.fdtree,_.dhst),V=d+i.F.contSize(_.ltree,_.lhst)+i.F.contSize(_.dtree,_.dhst);V+=14+3*L+i.F.contSize(_.itree,_.ihst)+(2*_.ihst[16]+3*_.ihst[17]+7*_.ihst[18]);for(var F=0;F<286;F++)_.lhst[F]=0;for(F=0;F<30;F++)_.dhst[F]=0;for(F=0;F<19;F++)_.ihst[F]=0;var U=k<j&&k<V?0:j<V?1:2;if(O(y,v,s),O(y,v+1,U),v+=3,U==0){for(;(7&v)!=0;)v++;v=i.F._copyExact(f,p,m,y,v)}else{var H,Y;if(U==1&&(H=_.fltree,Y=_.fdtree),U==2){i.F.makeCodes(_.ltree,A),i.F.revCodes(_.ltree,A),i.F.makeCodes(_.dtree,S),i.F.revCodes(_.dtree,S),i.F.makeCodes(_.itree,N),i.F.revCodes(_.itree,N),H=_.ltree,Y=_.dtree,E(y,v,w-257),E(y,v+=5,R-1),E(y,v+=5,L-4),v+=4;for(var T=0;T<L;T++)E(y,v+3*T,_.itree[1+(_.ordr[T]<<1)]);v+=3*L,v=i.F._codeTiny(z,_.itree,y,v),v=i.F._codeTiny(G,_.itree,y,v)}for(var D=p,I=0;I<u;I+=2){for(var q=l[I],$=q>>>23,P=D+(8388607&q);D<P;)v=i.F._writeLit(f[D++],H,y,v);if($!=0){var Z=l[I+1],te=Z>>16,X=Z>>8&255,Q=255&Z;E(y,v=i.F._writeLit(257+X,H,y,v),$-_.of0[X]),v+=_.exb[X],O(y,v=i.F._writeLit(Q,Y,y,v),te-_.df0[Q]),v+=_.dxb[Q],D+=$}}v=i.F._writeLit(256,H,y,v)}return v},i.F._copyExact=function(s,l,u,d,f){var p=f>>>3;return d[p]=u,d[p+1]=u>>>8,d[p+2]=255-d[p],d[p+3]=255-d[p+1],p+=4,d.set(new Uint8Array(s.buffer,l,u),p),f+(u+4<<3)},i.F.getTrees=function(){for(var s=i.F.U,l=i.F._hufTree(s.lhst,s.ltree,15),u=i.F._hufTree(s.dhst,s.dtree,15),d=[],f=i.F._lenCodes(s.ltree,d),p=[],m=i.F._lenCodes(s.dtree,p),y=0;y<d.length;y+=2)s.ihst[d[y]]++;for(y=0;y<p.length;y+=2)s.ihst[p[y]]++;for(var v=i.F._hufTree(s.ihst,s.itree,7),x=19;x>4&&s.itree[1+(s.ordr[x-1]<<1)]==0;)x--;return[l,u,v,f,m,x,d,p]},i.F.getSecond=function(s){for(var l=[],u=0;u<s.length;u+=2)l.push(s[u+1]);return l},i.F.nonZero=function(s){for(var l="",u=0;u<s.length;u+=2)s[u+1]!=0&&(l+=(u>>1)+",");return l},i.F.contSize=function(s,l){for(var u=0,d=0;d<l.length;d++)u+=l[d]*s[1+(d<<1)];return u},i.F._codeTiny=function(s,l,u,d){for(var f=0;f<s.length;f+=2){var p=s[f],m=s[f+1];d=i.F._writeLit(p,l,u,d);var y=p==16?2:p==17?3:7;p>15&&(i.F._putsE(u,d,m,y),d+=y)}return d},i.F._lenCodes=function(s,l){for(var u=s.length;u!=2&&s[u-1]==0;)u-=2;for(var d=0;d<u;d+=2){var f=s[d+1],p=d+3<u?s[d+3]:-1,m=d+5<u?s[d+5]:-1,y=d==0?-1:s[d-1];if(f==0&&p==f&&m==f){for(var v=d+5;v+2<u&&s[v+2]==f;)v+=2;(x=Math.min(v+1-d>>>1,138))<11?l.push(17,x-3):l.push(18,x-11),d+=2*x-2}else if(f==y&&p==f&&m==f){for(v=d+5;v+2<u&&s[v+2]==f;)v+=2;var x=Math.min(v+1-d>>>1,6);l.push(16,x-3),d+=2*x-2}else l.push(f,0)}return u>>>1},i.F._hufTree=function(s,l,u){var d=[],f=s.length,p=l.length,m=0;for(m=0;m<p;m+=2)l[m]=0,l[m+1]=0;for(m=0;m<f;m++)s[m]!=0&&d.push({lit:m,f:s[m]});var y=d.length,v=d.slice(0);if(y==0)return 0;if(y==1){var x=d[0].lit;return v=x==0?1:0,l[1+(x<<1)]=1,l[1+(v<<1)]=1,1}d.sort((function(z,G){return z.f-G.f}));var A=d[0],S=d[1],N=0,w=1,R=2;for(d[0]={lit:-1,f:A.f+S.f,l:A,r:S,d:0};w!=y-1;)A=N!=w&&(R==y||d[N].f<d[R].f)?d[N++]:d[R++],S=N!=w&&(R==y||d[N].f<d[R].f)?d[N++]:d[R++],d[w++]={lit:-1,f:A.f+S.f,l:A,r:S};var L=i.F.setDepth(d[w-1],0);for(L>u&&(i.F.restrictDepth(v,u,L),L=u),m=0;m<y;m++)l[1+(v[m].lit<<1)]=v[m].d;return L},i.F.setDepth=function(s,l){return s.lit!=-1?(s.d=l,l):Math.max(i.F.setDepth(s.l,l+1),i.F.setDepth(s.r,l+1))},i.F.restrictDepth=function(s,l,u){var d=0,f=1<<u-l,p=0;for(s.sort((function(y,v){return v.d==y.d?y.f-v.f:v.d-y.d})),d=0;d<s.length&&s[d].d>l;d++){var m=s[d].d;s[d].d=l,p+=f-(1<<u-m)}for(p>>>=u-l;p>0;)(m=s[d].d)<l?(s[d].d++,p-=1<<l-m-1):d++;for(;d>=0;d--)s[d].d==l&&p<0&&(s[d].d--,p++);p!=0&&console.log("debt left")},i.F._goodIndex=function(s,l){var u=0;return l[16|u]<=s&&(u|=16),l[8|u]<=s&&(u|=8),l[4|u]<=s&&(u|=4),l[2|u]<=s&&(u|=2),l[1|u]<=s&&(u|=1),u},i.F._writeLit=function(s,l,u,d){return i.F._putsF(u,d,l[s<<1]),d+l[1+(s<<1)]},i.F.inflate=function(s,l){var u=Uint8Array;if(s[0]==3&&s[1]==0)return l||new u(0);var d=i.F,f=d._bitsF,p=d._bitsE,m=d._decodeTiny,y=d.makeCodes,v=d.codes2map,x=d._get17,A=d.U,S=l==null;S&&(l=new u(s.length>>>2<<3));for(var N,w,R=0,L=0,z=0,G=0,_=0,O=0,E=0,k=0,j=0;R==0;)if(R=f(s,j,1),L=f(s,j+1,2),j+=3,L!=0){if(S&&(l=i.F._check(l,k+(1<<17))),L==1&&(N=A.flmap,w=A.fdmap,O=511,E=31),L==2){z=p(s,j,5)+257,G=p(s,j+5,5)+1,_=p(s,j+10,4)+4,j+=14;for(var V=0;V<38;V+=2)A.itree[V]=0,A.itree[V+1]=0;var F=1;for(V=0;V<_;V++){var U=p(s,j+3*V,3);A.itree[1+(A.ordr[V]<<1)]=U,U>F&&(F=U)}j+=3*_,y(A.itree,F),v(A.itree,F,A.imap),N=A.lmap,w=A.dmap,j=m(A.imap,(1<<F)-1,z+G,s,j,A.ttree);var H=d._copyOut(A.ttree,0,z,A.ltree);O=(1<<H)-1;var Y=d._copyOut(A.ttree,z,G,A.dtree);E=(1<<Y)-1,y(A.ltree,H),v(A.ltree,H,N),y(A.dtree,Y),v(A.dtree,Y,w)}for(;;){var T=N[x(s,j)&O];j+=15&T;var D=T>>>4;if(!(D>>>8))l[k++]=D;else{if(D==256)break;var I=k+D-254;if(D>264){var q=A.ldef[D-257];I=k+(q>>>3)+p(s,j,7&q),j+=7&q}var $=w[x(s,j)&E];j+=15&$;var P=$>>>4,Z=A.ddef[P],te=(Z>>>4)+f(s,j,15&Z);for(j+=15&Z,S&&(l=i.F._check(l,k+(1<<17)));k<I;)l[k]=l[k++-te],l[k]=l[k++-te],l[k]=l[k++-te],l[k]=l[k++-te];k=I}}}else{(7&j)!=0&&(j+=8-(7&j));var X=4+(j>>>3),Q=s[X-4]|s[X-3]<<8;S&&(l=i.F._check(l,k+Q)),l.set(new u(s.buffer,s.byteOffset+X,Q),k),j=X+Q<<3,k+=Q}return l.length==k?l:l.slice(0,k)},i.F._check=function(s,l){var u=s.length;if(l<=u)return s;var d=new Uint8Array(Math.max(u<<1,l));return d.set(s,0),d},i.F._decodeTiny=function(s,l,u,d,f,p){for(var m=i.F._bitsE,y=i.F._get17,v=0;v<u;){var x=s[y(d,f)&l];f+=15&x;var A=x>>>4;if(A<=15)p[v]=A,v++;else{var S=0,N=0;A==16?(N=3+m(d,f,2),f+=2,S=p[v-1]):A==17?(N=3+m(d,f,3),f+=3):A==18&&(N=11+m(d,f,7),f+=7);for(var w=v+N;v<w;)p[v]=S,v++}}return f},i.F._copyOut=function(s,l,u,d){for(var f=0,p=0,m=d.length>>>1;p<u;){var y=s[p+l];d[p<<1]=0,d[1+(p<<1)]=y,y>f&&(f=y),p++}for(;p<m;)d[p<<1]=0,d[1+(p<<1)]=0,p++;return f},i.F.makeCodes=function(s,l){for(var u,d,f,p,m=i.F.U,y=s.length,v=m.bl_count,x=0;x<=l;x++)v[x]=0;for(x=1;x<y;x+=2)v[s[x]]++;var A=m.next_code;for(u=0,v[0]=0,d=1;d<=l;d++)u=u+v[d-1]<<1,A[d]=u;for(f=0;f<y;f+=2)(p=s[f+1])!=0&&(s[f]=A[p],A[p]++)},i.F.codes2map=function(s,l,u){for(var d=s.length,f=i.F.U.rev15,p=0;p<d;p+=2)if(s[p+1]!=0)for(var m=p>>1,y=s[p+1],v=m<<4|y,x=l-y,A=s[p]<<x,S=A+(1<<x);A!=S;)u[f[A]>>>15-l]=v,A++},i.F.revCodes=function(s,l){for(var u=i.F.U.rev15,d=15-l,f=0;f<s.length;f+=2){var p=s[f]<<l-s[f+1];s[f]=u[p]>>>d}},i.F._putsE=function(s,l,u){u<<=7&l;var d=l>>>3;s[d]|=u,s[d+1]|=u>>>8},i.F._putsF=function(s,l,u){u<<=7&l;var d=l>>>3;s[d]|=u,s[d+1]|=u>>>8,s[d+2]|=u>>>16},i.F._bitsE=function(s,l,u){return(s[l>>>3]|s[1+(l>>>3)]<<8)>>>(7&l)&(1<<u)-1},i.F._bitsF=function(s,l,u){return(s[l>>>3]|s[1+(l>>>3)]<<8|s[2+(l>>>3)]<<16)>>>(7&l)&(1<<u)-1},i.F._get17=function(s,l){return(s[l>>>3]|s[1+(l>>>3)]<<8|s[2+(l>>>3)]<<16)>>>(7&l)},i.F._get25=function(s,l){return(s[l>>>3]|s[1+(l>>>3)]<<8|s[2+(l>>>3)]<<16|s[3+(l>>>3)]<<24)>>>(7&l)},i.F.U=(e=Uint16Array,r=Uint32Array,{next_code:new e(16),bl_count:new e(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new e(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new r(32),flmap:new e(512),fltree:[],fdmap:new e(32),fdtree:[],lmap:new e(32768),ltree:[],ttree:[],dmap:new e(32768),dtree:[],imap:new e(512),itree:[],rev15:new e(32768),lhst:new r(286),dhst:new r(30),ihst:new r(19),lits:new r(15e3),strt:new e(65536),prev:new e(32768)}),(function(){for(var s=i.F.U,l=0;l<32768;l++){var u=l;u=(4278255360&(u=(4042322160&(u=(3435973836&(u=(2863311530&u)>>>1|(1431655765&u)<<1))>>>2|(858993459&u)<<2))>>>4|(252645135&u)<<4))>>>8|(16711935&u)<<8,s.rev15[l]=(u>>>16|u<<16)>>>17}function d(f,p,m){for(;p--!=0;)f.push(0,m)}for(l=0;l<32;l++)s.ldef[l]=s.of0[l]<<3|s.exb[l],s.ddef[l]=s.df0[l]<<4|s.dxb[l];d(s.fltree,144,8),d(s.fltree,112,9),d(s.fltree,24,7),d(s.fltree,8,8),i.F.makeCodes(s.fltree,9),i.F.codes2map(s.fltree,9,s.flmap),i.F.revCodes(s.fltree,9),d(s.fdtree,32,5),i.F.makeCodes(s.fdtree,5),i.F.codes2map(s.fdtree,5,s.fdmap),i.F.revCodes(s.fdtree,5),d(s.itree,19,0),d(s.ltree,286,0),d(s.dtree,30,0),d(s.ttree,320,0)})()})();var t_=$L({__proto__:null,default:Wu},[Wu]);const gr=(function(){var n={nextZero(m,y){for(;m[y]!=0;)y++;return y},readUshort:(m,y)=>m[y]<<8|m[y+1],writeUshort(m,y,v){m[y]=v>>8&255,m[y+1]=255&v},readUint:(m,y)=>16777216*m[y]+(m[y+1]<<16|m[y+2]<<8|m[y+3]),writeUint(m,y,v){m[y]=v>>24&255,m[y+1]=v>>16&255,m[y+2]=v>>8&255,m[y+3]=255&v},readASCII(m,y,v){let x="";for(let A=0;A<v;A++)x+=String.fromCharCode(m[y+A]);return x},writeASCII(m,y,v){for(let x=0;x<v.length;x++)m[y+x]=v.charCodeAt(x)},readBytes(m,y,v){const x=[];for(let A=0;A<v;A++)x.push(m[y+A]);return x},pad:m=>m.length<2?`0${m}`:m,readUTF8(m,y,v){let x,A="";for(let S=0;S<v;S++)A+=`%${n.pad(m[y+S].toString(16))}`;try{x=decodeURIComponent(A)}catch{return n.readASCII(m,y,v)}return x}};function e(m,y,v,x){const A=y*v,S=l(x),N=Math.ceil(y*S/8),w=new Uint8Array(4*A),R=new Uint32Array(w.buffer),{ctype:L}=x,{depth:z}=x,G=n.readUshort;if(L==6){const q=A<<2;if(z==8)for(var _=0;_<q;_+=4)w[_]=m[_],w[_+1]=m[_+1],w[_+2]=m[_+2],w[_+3]=m[_+3];if(z==16)for(_=0;_<q;_++)w[_]=m[_<<1]}else if(L==2){const q=x.tabs.tRNS;if(q==null){if(z==8)for(_=0;_<A;_++){var O=3*_;R[_]=255<<24|m[O+2]<<16|m[O+1]<<8|m[O]}if(z==16)for(_=0;_<A;_++)O=6*_,R[_]=255<<24|m[O+4]<<16|m[O+2]<<8|m[O]}else{var E=q[0];const $=q[1],P=q[2];if(z==8)for(_=0;_<A;_++){var k=_<<2;O=3*_,R[_]=255<<24|m[O+2]<<16|m[O+1]<<8|m[O],m[O]==E&&m[O+1]==$&&m[O+2]==P&&(w[k+3]=0)}if(z==16)for(_=0;_<A;_++)k=_<<2,O=6*_,R[_]=255<<24|m[O+4]<<16|m[O+2]<<8|m[O],G(m,O)==E&&G(m,O+2)==$&&G(m,O+4)==P&&(w[k+3]=0)}}else if(L==3){const q=x.tabs.PLTE,$=x.tabs.tRNS,P=$?$.length:0;if(z==1)for(var j=0;j<v;j++){var V=j*N,F=j*y;for(_=0;_<y;_++){k=F+_<<2;var U=3*(H=m[V+(_>>3)]>>7-((7&_)<<0)&1);w[k]=q[U],w[k+1]=q[U+1],w[k+2]=q[U+2],w[k+3]=H<P?$[H]:255}}if(z==2)for(j=0;j<v;j++)for(V=j*N,F=j*y,_=0;_<y;_++)k=F+_<<2,U=3*(H=m[V+(_>>2)]>>6-((3&_)<<1)&3),w[k]=q[U],w[k+1]=q[U+1],w[k+2]=q[U+2],w[k+3]=H<P?$[H]:255;if(z==4)for(j=0;j<v;j++)for(V=j*N,F=j*y,_=0;_<y;_++)k=F+_<<2,U=3*(H=m[V+(_>>1)]>>4-((1&_)<<2)&15),w[k]=q[U],w[k+1]=q[U+1],w[k+2]=q[U+2],w[k+3]=H<P?$[H]:255;if(z==8)for(_=0;_<A;_++){var H;k=_<<2,U=3*(H=m[_]),w[k]=q[U],w[k+1]=q[U+1],w[k+2]=q[U+2],w[k+3]=H<P?$[H]:255}}else if(L==4){if(z==8)for(_=0;_<A;_++){k=_<<2;var Y=m[T=_<<1];w[k]=Y,w[k+1]=Y,w[k+2]=Y,w[k+3]=m[T+1]}if(z==16)for(_=0;_<A;_++){var T;k=_<<2,Y=m[T=_<<2],w[k]=Y,w[k+1]=Y,w[k+2]=Y,w[k+3]=m[T+2]}}else if(L==0)for(E=x.tabs.tRNS?x.tabs.tRNS:-1,j=0;j<v;j++){const q=j*N,$=j*y;if(z==1)for(var D=0;D<y;D++){var I=(Y=255*(m[q+(D>>>3)]>>>7-(7&D)&1))==255*E?0:255;R[$+D]=I<<24|Y<<16|Y<<8|Y}else if(z==2)for(D=0;D<y;D++)I=(Y=85*(m[q+(D>>>2)]>>>6-((3&D)<<1)&3))==85*E?0:255,R[$+D]=I<<24|Y<<16|Y<<8|Y;else if(z==4)for(D=0;D<y;D++)I=(Y=17*(m[q+(D>>>1)]>>>4-((1&D)<<2)&15))==17*E?0:255,R[$+D]=I<<24|Y<<16|Y<<8|Y;else if(z==8)for(D=0;D<y;D++)I=(Y=m[q+D])==E?0:255,R[$+D]=I<<24|Y<<16|Y<<8|Y;else if(z==16)for(D=0;D<y;D++)Y=m[q+(D<<1)],I=G(m,q+(D<<1))==E?0:255,R[$+D]=I<<24|Y<<16|Y<<8|Y}return w}function r(m,y,v,x){const A=l(m),S=Math.ceil(v*A/8),N=new Uint8Array((S+1+m.interlace)*x);return y=m.tabs.CgBI?s(y,N):i(y,N),m.interlace==0?y=u(y,m,0,v,x):m.interlace==1&&(y=(function(R,L){const z=L.width,G=L.height,_=l(L),O=_>>3,E=Math.ceil(z*_/8),k=new Uint8Array(G*E);let j=0;const V=[0,0,4,0,2,0,1],F=[0,4,0,2,0,1,0],U=[8,8,8,4,4,2,2],H=[8,8,4,4,2,2,1];let Y=0;for(;Y<7;){const D=U[Y],I=H[Y];let q=0,$=0,P=V[Y];for(;P<G;)P+=D,$++;let Z=F[Y];for(;Z<z;)Z+=I,q++;const te=Math.ceil(q*_/8);u(R,L,j,q,$);let X=0,Q=V[Y];for(;Q<G;){let ye=F[Y],ce=j+X*te<<3;for(;ye<z;){var T;if(_==1&&(T=(T=R[ce>>3])>>7-(7&ce)&1,k[Q*E+(ye>>3)]|=T<<7-((7&ye)<<0)),_==2&&(T=(T=R[ce>>3])>>6-(7&ce)&3,k[Q*E+(ye>>2)]|=T<<6-((3&ye)<<1)),_==4&&(T=(T=R[ce>>3])>>4-(7&ce)&15,k[Q*E+(ye>>1)]|=T<<4-((1&ye)<<2)),_>=8){const Se=Q*E+ye*O;for(let ge=0;ge<O;ge++)k[Se+ge]=R[(ce>>3)+ge]}ce+=_,ye+=I}X++,Q+=D}q*$!=0&&(j+=$*(1+te)),Y+=1}return k})(y,m)),y}function i(m,y){return s(new Uint8Array(m.buffer,2,m.length-6),y)}var s=(function(){const m={H:{}};return m.H.N=function(y,v){const x=Uint8Array;let A,S,N=0,w=0,R=0,L=0,z=0,G=0,_=0,O=0,E=0;if(y[0]==3&&y[1]==0)return v||new x(0);const k=m.H,j=k.b,V=k.e,F=k.R,U=k.n,H=k.A,Y=k.Z,T=k.m,D=v==null;for(D&&(v=new x(y.length>>>2<<5));N==0;)if(N=j(y,E,1),w=j(y,E+1,2),E+=3,w!=0){if(D&&(v=m.H.W(v,O+(1<<17))),w==1&&(A=T.J,S=T.h,G=511,_=31),w==2){R=V(y,E,5)+257,L=V(y,E+5,5)+1,z=V(y,E+10,4)+4,E+=14;let q=1;for(var I=0;I<38;I+=2)T.Q[I]=0,T.Q[I+1]=0;for(I=0;I<z;I++){const Z=V(y,E+3*I,3);T.Q[1+(T.X[I]<<1)]=Z,Z>q&&(q=Z)}E+=3*z,U(T.Q,q),H(T.Q,q,T.u),A=T.w,S=T.d,E=F(T.u,(1<<q)-1,R+L,y,E,T.v);const $=k.V(T.v,0,R,T.C);G=(1<<$)-1;const P=k.V(T.v,R,L,T.D);_=(1<<P)-1,U(T.C,$),H(T.C,$,A),U(T.D,P),H(T.D,P,S)}for(;;){const q=A[Y(y,E)&G];E+=15&q;const $=q>>>4;if(!($>>>8))v[O++]=$;else{if($==256)break;{let P=O+$-254;if($>264){const ye=T.q[$-257];P=O+(ye>>>3)+V(y,E,7&ye),E+=7&ye}const Z=S[Y(y,E)&_];E+=15&Z;const te=Z>>>4,X=T.c[te],Q=(X>>>4)+j(y,E,15&X);for(E+=15&X;O<P;)v[O]=v[O++-Q],v[O]=v[O++-Q],v[O]=v[O++-Q],v[O]=v[O++-Q];O=P}}}}else{(7&E)!=0&&(E+=8-(7&E));const q=4+(E>>>3),$=y[q-4]|y[q-3]<<8;D&&(v=m.H.W(v,O+$)),v.set(new x(y.buffer,y.byteOffset+q,$),O),E=q+$<<3,O+=$}return v.length==O?v:v.slice(0,O)},m.H.W=function(y,v){const x=y.length;if(v<=x)return y;const A=new Uint8Array(x<<1);return A.set(y,0),A},m.H.R=function(y,v,x,A,S,N){const w=m.H.e,R=m.H.Z;let L=0;for(;L<x;){const z=y[R(A,S)&v];S+=15&z;const G=z>>>4;if(G<=15)N[L]=G,L++;else{let _=0,O=0;G==16?(O=3+w(A,S,2),S+=2,_=N[L-1]):G==17?(O=3+w(A,S,3),S+=3):G==18&&(O=11+w(A,S,7),S+=7);const E=L+O;for(;L<E;)N[L]=_,L++}}return S},m.H.V=function(y,v,x,A){let S=0,N=0;const w=A.length>>>1;for(;N<x;){const R=y[N+v];A[N<<1]=0,A[1+(N<<1)]=R,R>S&&(S=R),N++}for(;N<w;)A[N<<1]=0,A[1+(N<<1)]=0,N++;return S},m.H.n=function(y,v){const x=m.H.m,A=y.length;let S,N,w,R;const L=x.j;for(var z=0;z<=v;z++)L[z]=0;for(z=1;z<A;z+=2)L[y[z]]++;const G=x.K;for(S=0,L[0]=0,N=1;N<=v;N++)S=S+L[N-1]<<1,G[N]=S;for(w=0;w<A;w+=2)R=y[w+1],R!=0&&(y[w]=G[R],G[R]++)},m.H.A=function(y,v,x){const A=y.length,S=m.H.m.r;for(let N=0;N<A;N+=2)if(y[N+1]!=0){const w=N>>1,R=y[N+1],L=w<<4|R,z=v-R;let G=y[N]<<z;const _=G+(1<<z);for(;G!=_;)x[S[G]>>>15-v]=L,G++}},m.H.l=function(y,v){const x=m.H.m.r,A=15-v;for(let S=0;S<y.length;S+=2){const N=y[S]<<v-y[S+1];y[S]=x[N]>>>A}},m.H.M=function(y,v,x){x<<=7&v;const A=v>>>3;y[A]|=x,y[A+1]|=x>>>8},m.H.I=function(y,v,x){x<<=7&v;const A=v>>>3;y[A]|=x,y[A+1]|=x>>>8,y[A+2]|=x>>>16},m.H.e=function(y,v,x){return(y[v>>>3]|y[1+(v>>>3)]<<8)>>>(7&v)&(1<<x)-1},m.H.b=function(y,v,x){return(y[v>>>3]|y[1+(v>>>3)]<<8|y[2+(v>>>3)]<<16)>>>(7&v)&(1<<x)-1},m.H.Z=function(y,v){return(y[v>>>3]|y[1+(v>>>3)]<<8|y[2+(v>>>3)]<<16)>>>(7&v)},m.H.i=function(y,v){return(y[v>>>3]|y[1+(v>>>3)]<<8|y[2+(v>>>3)]<<16|y[3+(v>>>3)]<<24)>>>(7&v)},m.H.m=(function(){const y=Uint16Array,v=Uint32Array;return{K:new y(16),j:new y(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new y(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new v(32),J:new y(512),_:[],h:new y(32),$:[],w:new y(32768),C:[],v:[],d:new y(32768),D:[],u:new y(512),Q:[],r:new y(32768),s:new v(286),Y:new v(30),a:new v(19),t:new v(15e3),k:new y(65536),g:new y(32768)}})(),(function(){const y=m.H.m;for(var v=0;v<32768;v++){let A=v;A=(2863311530&A)>>>1|(1431655765&A)<<1,A=(3435973836&A)>>>2|(858993459&A)<<2,A=(4042322160&A)>>>4|(252645135&A)<<4,A=(4278255360&A)>>>8|(16711935&A)<<8,y.r[v]=(A>>>16|A<<16)>>>17}function x(A,S,N){for(;S--!=0;)A.push(0,N)}for(v=0;v<32;v++)y.q[v]=y.S[v]<<3|y.T[v],y.c[v]=y.p[v]<<4|y.z[v];x(y._,144,8),x(y._,112,9),x(y._,24,7),x(y._,8,8),m.H.n(y._,9),m.H.A(y._,9,y.J),m.H.l(y._,9),x(y.$,32,5),m.H.n(y.$,5),m.H.A(y.$,5,y.h),m.H.l(y.$,5),x(y.Q,19,0),x(y.C,286,0),x(y.D,30,0),x(y.v,320,0)})(),m.H.N})();function l(m){return[1,null,3,1,2,null,4][m.ctype]*m.depth}function u(m,y,v,x,A){let S=l(y);const N=Math.ceil(x*S/8);let w,R;S=Math.ceil(S/8);let L=m[v],z=0;if(L>1&&(m[v]=[0,0,1][L-2]),L==3)for(z=S;z<N;z++)m[z+1]=m[z+1]+(m[z+1-S]>>>1)&255;for(let G=0;G<A;G++)if(w=v+G*N,R=w+G+1,L=m[R-1],z=0,L==0)for(;z<N;z++)m[w+z]=m[R+z];else if(L==1){for(;z<S;z++)m[w+z]=m[R+z];for(;z<N;z++)m[w+z]=m[R+z]+m[w+z-S]}else if(L==2)for(;z<N;z++)m[w+z]=m[R+z]+m[w+z-N];else if(L==3){for(;z<S;z++)m[w+z]=m[R+z]+(m[w+z-N]>>>1);for(;z<N;z++)m[w+z]=m[R+z]+(m[w+z-N]+m[w+z-S]>>>1)}else{for(;z<S;z++)m[w+z]=m[R+z]+d(0,m[w+z-N],0);for(;z<N;z++)m[w+z]=m[R+z]+d(m[w+z-S],m[w+z-N],m[w+z-S-N])}return m}function d(m,y,v){const x=m+y-v,A=x-m,S=x-y,N=x-v;return A*A<=S*S&&A*A<=N*N?m:S*S<=N*N?y:v}function f(m,y,v){v.width=n.readUint(m,y),y+=4,v.height=n.readUint(m,y),y+=4,v.depth=m[y],y++,v.ctype=m[y],y++,v.compress=m[y],y++,v.filter=m[y],y++,v.interlace=m[y],y++}function p(m,y,v,x,A,S,N,w,R){const L=Math.min(y,A),z=Math.min(v,S);let G=0,_=0;for(let Y=0;Y<z;Y++)for(let T=0;T<L;T++)if(N>=0&&w>=0?(G=Y*y+T<<2,_=(w+Y)*A+N+T<<2):(G=(-w+Y)*y-N+T<<2,_=Y*A+T<<2),R==0)x[_]=m[G],x[_+1]=m[G+1],x[_+2]=m[G+2],x[_+3]=m[G+3];else if(R==1){var O=m[G+3]*.00392156862745098,E=m[G]*O,k=m[G+1]*O,j=m[G+2]*O,V=x[_+3]*(1/255),F=x[_]*V,U=x[_+1]*V,H=x[_+2]*V;const D=1-O,I=O+V*D,q=I==0?0:1/I;x[_+3]=255*I,x[_+0]=(E+F*D)*q,x[_+1]=(k+U*D)*q,x[_+2]=(j+H*D)*q}else if(R==2)O=m[G+3],E=m[G],k=m[G+1],j=m[G+2],V=x[_+3],F=x[_],U=x[_+1],H=x[_+2],O==V&&E==F&&k==U&&j==H?(x[_]=0,x[_+1]=0,x[_+2]=0,x[_+3]=0):(x[_]=E,x[_+1]=k,x[_+2]=j,x[_+3]=O);else if(R==3){if(O=m[G+3],E=m[G],k=m[G+1],j=m[G+2],V=x[_+3],F=x[_],U=x[_+1],H=x[_+2],O==V&&E==F&&k==U&&j==H)continue;if(O<220&&V>20)return!1}return!0}return{decode:function(y){const v=new Uint8Array(y);let x=8;const A=n,S=A.readUshort,N=A.readUint,w={tabs:{},frames:[]},R=new Uint8Array(v.length);let L,z=0,G=0;const _=[137,80,78,71,13,10,26,10];for(var O=0;O<8;O++)if(v[O]!=_[O])throw"The input is not a PNG file!";for(;x<v.length;){const Y=A.readUint(v,x);x+=4;const T=A.readASCII(v,x,4);if(x+=4,T=="IHDR")f(v,x,w);else if(T=="iCCP"){for(var E=x;v[E]!=0;)E++;A.readASCII(v,x,E-x),v[E+1];const D=v.slice(E+2,x+Y);let I=null;try{I=i(D)}catch{I=s(D)}w.tabs[T]=I}else if(T=="CgBI")w.tabs[T]=v.slice(x,x+4);else if(T=="IDAT"){for(O=0;O<Y;O++)R[z+O]=v[x+O];z+=Y}else if(T=="acTL")w.tabs[T]={num_frames:N(v,x),num_plays:N(v,x+4)},L=new Uint8Array(v.length);else if(T=="fcTL"){G!=0&&((H=w.frames[w.frames.length-1]).data=r(w,L.slice(0,G),H.rect.width,H.rect.height),G=0);const D={x:N(v,x+12),y:N(v,x+16),width:N(v,x+4),height:N(v,x+8)};let I=S(v,x+22);I=S(v,x+20)/(I==0?100:I);const q={rect:D,delay:Math.round(1e3*I),dispose:v[x+24],blend:v[x+25]};w.frames.push(q)}else if(T=="fdAT"){for(O=0;O<Y-4;O++)L[G+O]=v[x+O+4];G+=Y-4}else if(T=="pHYs")w.tabs[T]=[A.readUint(v,x),A.readUint(v,x+4),v[x+8]];else if(T=="cHRM")for(w.tabs[T]=[],O=0;O<8;O++)w.tabs[T].push(A.readUint(v,x+4*O));else if(T=="tEXt"||T=="zTXt"){w.tabs[T]==null&&(w.tabs[T]={});var k=A.nextZero(v,x),j=A.readASCII(v,x,k-x),V=x+Y-k-1;if(T=="tEXt")U=A.readASCII(v,k+1,V);else{var F=i(v.slice(k+2,k+2+V));U=A.readUTF8(F,0,F.length)}w.tabs[T][j]=U}else if(T=="iTXt"){w.tabs[T]==null&&(w.tabs[T]={}),k=0,E=x,k=A.nextZero(v,E),j=A.readASCII(v,E,k-E);const D=v[E=k+1];var U;v[E+1],E+=2,k=A.nextZero(v,E),A.readASCII(v,E,k-E),E=k+1,k=A.nextZero(v,E),A.readUTF8(v,E,k-E),V=Y-((E=k+1)-x),D==0?U=A.readUTF8(v,E,V):(F=i(v.slice(E,E+V)),U=A.readUTF8(F,0,F.length)),w.tabs[T][j]=U}else if(T=="PLTE")w.tabs[T]=A.readBytes(v,x,Y);else if(T=="hIST"){const D=w.tabs.PLTE.length/3;for(w.tabs[T]=[],O=0;O<D;O++)w.tabs[T].push(S(v,x+2*O))}else if(T=="tRNS")w.ctype==3?w.tabs[T]=A.readBytes(v,x,Y):w.ctype==0?w.tabs[T]=S(v,x):w.ctype==2&&(w.tabs[T]=[S(v,x),S(v,x+2),S(v,x+4)]);else if(T=="gAMA")w.tabs[T]=A.readUint(v,x)/1e5;else if(T=="sRGB")w.tabs[T]=v[x];else if(T=="bKGD")w.ctype==0||w.ctype==4?w.tabs[T]=[S(v,x)]:w.ctype==2||w.ctype==6?w.tabs[T]=[S(v,x),S(v,x+2),S(v,x+4)]:w.ctype==3&&(w.tabs[T]=v[x]);else if(T=="IEND")break;x+=Y,A.readUint(v,x),x+=4}var H;return G!=0&&((H=w.frames[w.frames.length-1]).data=r(w,L.slice(0,G),H.rect.width,H.rect.height)),w.data=r(w,R,w.width,w.height),delete w.compress,delete w.interlace,delete w.filter,w},toRGBA8:function(y){const v=y.width,x=y.height;if(y.tabs.acTL==null)return[e(y.data,v,x,y).buffer];const A=[];y.frames[0].data==null&&(y.frames[0].data=y.data);const S=v*x*4,N=new Uint8Array(S),w=new Uint8Array(S),R=new Uint8Array(S);for(let z=0;z<y.frames.length;z++){const G=y.frames[z],_=G.rect.x,O=G.rect.y,E=G.rect.width,k=G.rect.height,j=e(G.data,E,k,y);if(z!=0)for(var L=0;L<S;L++)R[L]=N[L];if(G.blend==0?p(j,E,k,N,v,x,_,O,0):G.blend==1&&p(j,E,k,N,v,x,_,O,1),A.push(N.buffer.slice(0)),G.dispose!=0){if(G.dispose==1)p(w,E,k,N,v,x,_,O,0);else if(G.dispose==2)for(L=0;L<S;L++)N[L]=R[L]}}return A},_paeth:d,_copyTile:p,_bin:n}})();(function(){const{_copyTile:n}=gr,{_bin:e}=gr,r=gr._paeth;var i={table:(function(){const E=new Uint32Array(256);for(let k=0;k<256;k++){let j=k;for(let V=0;V<8;V++)1&j?j=3988292384^j>>>1:j>>>=1;E[k]=j}return E})(),update(E,k,j,V){for(let F=0;F<V;F++)E=i.table[255&(E^k[j+F])]^E>>>8;return E},crc:(E,k,j)=>4294967295^i.update(4294967295,E,k,j)};function s(E,k,j,V){k[j]+=E[0]*V>>4,k[j+1]+=E[1]*V>>4,k[j+2]+=E[2]*V>>4,k[j+3]+=E[3]*V>>4}function l(E){return Math.max(0,Math.min(255,E))}function u(E,k){const j=E[0]-k[0],V=E[1]-k[1],F=E[2]-k[2],U=E[3]-k[3];return j*j+V*V+F*F+U*U}function d(E,k,j,V,F,U,H){H==null&&(H=1);const Y=V.length,T=[];for(var D=0;D<Y;D++){const Q=V[D];T.push([Q>>>0&255,Q>>>8&255,Q>>>16&255,Q>>>24&255])}for(D=0;D<Y;D++){let Q=4294967295;for(var I=0,q=0;q<Y;q++){var $=u(T[D],T[q]);q!=D&&$<Q&&(Q=$,I=q)}}const P=new Uint32Array(F.buffer),Z=new Int16Array(k*j*4),te=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(D=0;D<te.length;D++)te[D]=255*((te[D]+.5)/16-.5);for(let Q=0;Q<j;Q++)for(let ye=0;ye<k;ye++){var X;D=4*(Q*k+ye),H!=2?X=[l(E[D]+Z[D]),l(E[D+1]+Z[D+1]),l(E[D+2]+Z[D+2]),l(E[D+3]+Z[D+3])]:($=te[4*(3&Q)+(3&ye)],X=[l(E[D]+$),l(E[D+1]+$),l(E[D+2]+$),l(E[D+3]+$)]),I=0;let ce=16777215;for(q=0;q<Y;q++){const oe=u(X,T[q]);oe<ce&&(ce=oe,I=q)}const Se=T[I],ge=[X[0]-Se[0],X[1]-Se[1],X[2]-Se[2],X[3]-Se[3]];H==1&&(ye!=k-1&&s(ge,Z,D+4,7),Q!=j-1&&(ye!=0&&s(ge,Z,D+4*k-4,3),s(ge,Z,D+4*k,5),ye!=k-1&&s(ge,Z,D+4*k+4,1))),U[D>>2]=I,P[D>>2]=V[I]}}function f(E,k,j,V,F){F==null&&(F={});const{crc:U}=i,H=e.writeUint,Y=e.writeUshort,T=e.writeASCII;let D=8;const I=E.frames.length>1;let q,$=!1,P=33+(I?20:0);if(F.sRGB!=null&&(P+=13),F.pHYs!=null&&(P+=21),F.iCCP!=null&&(q=pako.deflate(F.iCCP),P+=21+q.length+4),E.ctype==3){for(var Z=E.plte.length,te=0;te<Z;te++)E.plte[te]>>>24!=255&&($=!0);P+=8+3*Z+4+($?8+1*Z+4:0)}for(var X=0;X<E.frames.length;X++)I&&(P+=38),P+=(Se=E.frames[X]).cimg.length+12,X!=0&&(P+=4);P+=12;const Q=new Uint8Array(P),ye=[137,80,78,71,13,10,26,10];for(te=0;te<8;te++)Q[te]=ye[te];if(H(Q,D,13),D+=4,T(Q,D,"IHDR"),D+=4,H(Q,D,k),D+=4,H(Q,D,j),D+=4,Q[D]=E.depth,D++,Q[D]=E.ctype,D++,Q[D]=0,D++,Q[D]=0,D++,Q[D]=0,D++,H(Q,D,U(Q,D-17,17)),D+=4,F.sRGB!=null&&(H(Q,D,1),D+=4,T(Q,D,"sRGB"),D+=4,Q[D]=F.sRGB,D++,H(Q,D,U(Q,D-5,5)),D+=4),F.iCCP!=null){const ge=13+q.length;H(Q,D,ge),D+=4,T(Q,D,"iCCP"),D+=4,T(Q,D,"ICC profile"),D+=11,D+=2,Q.set(q,D),D+=q.length,H(Q,D,U(Q,D-(ge+4),ge+4)),D+=4}if(F.pHYs!=null&&(H(Q,D,9),D+=4,T(Q,D,"pHYs"),D+=4,H(Q,D,F.pHYs[0]),D+=4,H(Q,D,F.pHYs[1]),D+=4,Q[D]=F.pHYs[2],D++,H(Q,D,U(Q,D-13,13)),D+=4),I&&(H(Q,D,8),D+=4,T(Q,D,"acTL"),D+=4,H(Q,D,E.frames.length),D+=4,H(Q,D,F.loop!=null?F.loop:0),D+=4,H(Q,D,U(Q,D-12,12)),D+=4),E.ctype==3){for(H(Q,D,3*(Z=E.plte.length)),D+=4,T(Q,D,"PLTE"),D+=4,te=0;te<Z;te++){const ge=3*te,oe=E.plte[te],fe=255&oe,xe=oe>>>8&255,_e=oe>>>16&255;Q[D+ge+0]=fe,Q[D+ge+1]=xe,Q[D+ge+2]=_e}if(D+=3*Z,H(Q,D,U(Q,D-3*Z-4,3*Z+4)),D+=4,$){for(H(Q,D,Z),D+=4,T(Q,D,"tRNS"),D+=4,te=0;te<Z;te++)Q[D+te]=E.plte[te]>>>24&255;D+=Z,H(Q,D,U(Q,D-Z-4,Z+4)),D+=4}}let ce=0;for(X=0;X<E.frames.length;X++){var Se=E.frames[X];I&&(H(Q,D,26),D+=4,T(Q,D,"fcTL"),D+=4,H(Q,D,ce++),D+=4,H(Q,D,Se.rect.width),D+=4,H(Q,D,Se.rect.height),D+=4,H(Q,D,Se.rect.x),D+=4,H(Q,D,Se.rect.y),D+=4,Y(Q,D,V[X]),D+=2,Y(Q,D,1e3),D+=2,Q[D]=Se.dispose,D++,Q[D]=Se.blend,D++,H(Q,D,U(Q,D-30,30)),D+=4);const ge=Se.cimg;H(Q,D,(Z=ge.length)+(X==0?0:4)),D+=4;const oe=D;T(Q,D,X==0?"IDAT":"fdAT"),D+=4,X!=0&&(H(Q,D,ce++),D+=4),Q.set(ge,D),D+=Z,H(Q,D,U(Q,oe,D-oe)),D+=4}return H(Q,D,0),D+=4,T(Q,D,"IEND"),D+=4,H(Q,D,U(Q,D-4,4)),D+=4,Q.buffer}function p(E,k,j){for(let V=0;V<E.frames.length;V++){const F=E.frames[V];F.rect.width;const U=F.rect.height,H=new Uint8Array(U*F.bpl+U);F.cimg=x(F.img,U,F.bpp,F.bpl,H,k,j)}}function m(E,k,j,V,F){const U=F[0],H=F[1],Y=F[2],T=F[3],D=F[4],I=F[5];let q=6,$=8,P=255;for(var Z=0;Z<E.length;Z++){const Je=new Uint8Array(E[Z]);for(var te=Je.length,X=0;X<te;X+=4)P&=Je[X+3]}const Q=P!=255,ye=(function(Fe,qe,je,J,ee,se){const ve=[];for(var ue=0;ue<Fe.length;ue++){const An=new Uint8Array(Fe[ue]),En=new Uint32Array(An.buffer);var pe;let ot=0,vn=0,rn=qe,Kn=je,Yn=J?1:0;if(ue!=0){const lo=se||J||ue==1||ve[ue-2].dispose!=0?1:2;let ha=0,Gl=1e9;for(let Ar=0;Ar<lo;Ar++){var Ce=new Uint8Array(Fe[ue-1-Ar]);const ji=new Uint32Array(Fe[ue-1-Ar]);let Ot=qe,yt=je,cr=-1,ur=-1;for(let wr=0;wr<je;wr++)for(let dr=0;dr<qe;dr++)En[Oe=wr*qe+dr]!=ji[Oe]&&(dr<Ot&&(Ot=dr),dr>cr&&(cr=dr),wr<yt&&(yt=wr),wr>ur&&(ur=wr));cr==-1&&(Ot=yt=cr=ur=0),ee&&((1&Ot)==1&&Ot--,(1&yt)==1&&yt--);const Hl=(cr-Ot+1)*(ur-yt+1);Hl<Gl&&(Gl=Hl,ha=Ar,ot=Ot,vn=yt,rn=cr-Ot+1,Kn=ur-yt+1)}Ce=new Uint8Array(Fe[ue-1-ha]),ha==1&&(ve[ue-1].dispose=2),pe=new Uint8Array(rn*Kn*4),n(Ce,qe,je,pe,rn,Kn,-ot,-vn,0),Yn=n(An,qe,je,pe,rn,Kn,-ot,-vn,3)?1:0,Yn==1?v(An,qe,je,pe,{x:ot,y:vn,width:rn,height:Kn}):n(An,qe,je,pe,rn,Kn,-ot,-vn,0)}else pe=An.slice(0);ve.push({rect:{x:ot,y:vn,width:rn,height:Kn},img:pe,blend:Yn,dispose:0})}if(J)for(ue=0;ue<ve.length;ue++){if((Cn=ve[ue]).blend==1)continue;const An=Cn.rect,En=ve[ue-1].rect,ot=Math.min(An.x,En.x),vn=Math.min(An.y,En.y),rn={x:ot,y:vn,width:Math.max(An.x+An.width,En.x+En.width)-ot,height:Math.max(An.y+An.height,En.y+En.height)-vn};ve[ue-1].dispose=1,ue-1!=0&&y(Fe,qe,je,ve,ue-1,rn,ee),y(Fe,qe,je,ve,ue,rn,ee)}let Ge=0;if(Fe.length!=1)for(var Oe=0;Oe<ve.length;Oe++){var Cn;Ge+=(Cn=ve[Oe]).rect.width*Cn.rect.height}return ve})(E,k,j,U,H,Y),ce={},Se=[],ge=[];if(V!=0){const Je=[];for(X=0;X<ye.length;X++)Je.push(ye[X].img.buffer);const Fe=(function(ee){let se=0;for(var ve=0;ve<ee.length;ve++)se+=ee[ve].byteLength;const ue=new Uint8Array(se);let pe=0;for(ve=0;ve<ee.length;ve++){const Ce=new Uint8Array(ee[ve]),Ge=Ce.length;for(let Oe=0;Oe<Ge;Oe+=4){let Cn=Ce[Oe],An=Ce[Oe+1],En=Ce[Oe+2];const ot=Ce[Oe+3];ot==0&&(Cn=An=En=0),ue[pe+Oe]=Cn,ue[pe+Oe+1]=An,ue[pe+Oe+2]=En,ue[pe+Oe+3]=ot}pe+=Ge}return ue.buffer})(Je),qe=S(Fe,V);for(X=0;X<qe.plte.length;X++)Se.push(qe.plte[X].est.rgba);let je=0;for(X=0;X<ye.length;X++){const J=(fe=ye[X]).img.length;var oe=new Uint8Array(qe.inds.buffer,je>>2,J>>2);ge.push(oe);const ee=new Uint8Array(qe.abuf,je,J);I&&d(fe.img,fe.rect.width,fe.rect.height,Se,ee,oe),fe.img.set(ee),je+=J}}else for(Z=0;Z<ye.length;Z++){var fe=ye[Z];const Je=new Uint32Array(fe.img.buffer);var xe=fe.rect.width;for(te=Je.length,oe=new Uint8Array(te),ge.push(oe),X=0;X<te;X++){const Fe=Je[X];if(X!=0&&Fe==Je[X-1])oe[X]=oe[X-1];else if(X>xe&&Fe==Je[X-xe])oe[X]=oe[X-xe];else{let qe=ce[Fe];if(qe==null&&(ce[Fe]=qe=Se.length,Se.push(Fe),Se.length>=300))break;oe[X]=qe}}}const _e=Se.length;for(_e<=256&&D==0&&($=_e<=2?1:_e<=4?2:_e<=16?4:8,$=Math.max($,T)),Z=0;Z<ye.length;Z++){(fe=ye[Z]).rect.x,fe.rect.y,xe=fe.rect.width;const Je=fe.rect.height;let Fe=fe.img;new Uint32Array(Fe.buffer);let qe=4*xe,je=4;if(_e<=256&&D==0){qe=Math.ceil($*xe/8);var Me=new Uint8Array(qe*Je);const J=ge[Z];for(let ee=0;ee<Je;ee++){X=ee*qe;const se=ee*xe;if($==8)for(var Ae=0;Ae<xe;Ae++)Me[X+Ae]=J[se+Ae];else if($==4)for(Ae=0;Ae<xe;Ae++)Me[X+(Ae>>1)]|=J[se+Ae]<<4-4*(1&Ae);else if($==2)for(Ae=0;Ae<xe;Ae++)Me[X+(Ae>>2)]|=J[se+Ae]<<6-2*(3&Ae);else if($==1)for(Ae=0;Ae<xe;Ae++)Me[X+(Ae>>3)]|=J[se+Ae]<<7-1*(7&Ae)}Fe=Me,q=3,je=1}else if(Q==0&&ye.length==1){Me=new Uint8Array(xe*Je*3);const J=xe*Je;for(X=0;X<J;X++){const ee=3*X,se=4*X;Me[ee]=Fe[se],Me[ee+1]=Fe[se+1],Me[ee+2]=Fe[se+2]}Fe=Me,q=2,je=3,qe=3*xe}fe.img=Fe,fe.bpl=qe,fe.bpp=je}return{ctype:q,depth:$,plte:Se,frames:ye}}function y(E,k,j,V,F,U,H){const Y=Uint8Array,T=Uint32Array,D=new Y(E[F-1]),I=new T(E[F-1]),q=F+1<E.length?new Y(E[F+1]):null,$=new Y(E[F]),P=new T($.buffer);let Z=k,te=j,X=-1,Q=-1;for(let ce=0;ce<U.height;ce++)for(let Se=0;Se<U.width;Se++){const ge=U.x+Se,oe=U.y+ce,fe=oe*k+ge,xe=P[fe];xe==0||V[F-1].dispose==0&&I[fe]==xe&&(q==null||q[4*fe+3]!=0)||(ge<Z&&(Z=ge),ge>X&&(X=ge),oe<te&&(te=oe),oe>Q&&(Q=oe))}X==-1&&(Z=te=X=Q=0),H&&((1&Z)==1&&Z--,(1&te)==1&&te--),U={x:Z,y:te,width:X-Z+1,height:Q-te+1};const ye=V[F];ye.rect=U,ye.blend=1,ye.img=new Uint8Array(U.width*U.height*4),V[F-1].dispose==0?(n(D,k,j,ye.img,U.width,U.height,-U.x,-U.y,0),v($,k,j,ye.img,U)):n($,k,j,ye.img,U.width,U.height,-U.x,-U.y,0)}function v(E,k,j,V,F){n(E,k,j,V,F.width,F.height,-F.x,-F.y,2)}function x(E,k,j,V,F,U,H){const Y=[];let T,D=[0,1,2,3,4];U!=-1?D=[U]:(k*V>5e5||j==1)&&(D=[0]),H&&(T={level:0});const I=t_;for(var q=0;q<D.length;q++){for(let Z=0;Z<k;Z++)A(F,E,Z,V,j,D[q]);Y.push(I.deflate(F,T))}let $,P=1e9;for(q=0;q<Y.length;q++)Y[q].length<P&&($=q,P=Y[q].length);return Y[$]}function A(E,k,j,V,F,U){const H=j*V;let Y=H+j;if(E[Y]=U,Y++,U==0)if(V<500)for(var T=0;T<V;T++)E[Y+T]=k[H+T];else E.set(new Uint8Array(k.buffer,H,V),Y);else if(U==1){for(T=0;T<F;T++)E[Y+T]=k[H+T];for(T=F;T<V;T++)E[Y+T]=k[H+T]-k[H+T-F]+256&255}else if(j==0){for(T=0;T<F;T++)E[Y+T]=k[H+T];if(U==2)for(T=F;T<V;T++)E[Y+T]=k[H+T];if(U==3)for(T=F;T<V;T++)E[Y+T]=k[H+T]-(k[H+T-F]>>1)+256&255;if(U==4)for(T=F;T<V;T++)E[Y+T]=k[H+T]-r(k[H+T-F],0,0)+256&255}else{if(U==2)for(T=0;T<V;T++)E[Y+T]=k[H+T]+256-k[H+T-V]&255;if(U==3){for(T=0;T<F;T++)E[Y+T]=k[H+T]+256-(k[H+T-V]>>1)&255;for(T=F;T<V;T++)E[Y+T]=k[H+T]+256-(k[H+T-V]+k[H+T-F]>>1)&255}if(U==4){for(T=0;T<F;T++)E[Y+T]=k[H+T]+256-r(0,k[H+T-V],0)&255;for(T=F;T<V;T++)E[Y+T]=k[H+T]+256-r(k[H+T-F],k[H+T-V],k[H+T-F-V])&255}}}function S(E,k){const j=new Uint8Array(E),V=j.slice(0),F=new Uint32Array(V.buffer),U=N(V,k),H=U[0],Y=U[1],T=j.length,D=new Uint8Array(T>>2);let I;if(j.length<2e7)for(var q=0;q<T;q+=4)I=w(H,$=j[q]*(1/255),P=j[q+1]*(1/255),Z=j[q+2]*(1/255),te=j[q+3]*(1/255)),D[q>>2]=I.ind,F[q>>2]=I.est.rgba;else for(q=0;q<T;q+=4){var $=j[q]*.00392156862745098,P=j[q+1]*(1/255),Z=j[q+2]*(1/255),te=j[q+3]*(1/255);for(I=H;I.left;)I=R(I.est,$,P,Z,te)<=0?I.left:I.right;D[q>>2]=I.ind,F[q>>2]=I.est.rgba}return{abuf:V.buffer,inds:D,plte:Y}}function N(E,k,j){j==null&&(j=1e-4);const V=new Uint32Array(E.buffer),F={i0:0,i1:E.length,bst:null,est:null,tdst:0,left:null,right:null};F.bst=G(E,F.i0,F.i1),F.est=_(F.bst);const U=[F];for(;U.length<k;){let Y=0,T=0;for(var H=0;H<U.length;H++)U[H].est.L>Y&&(Y=U[H].est.L,T=H);if(Y<j)break;const D=U[T],I=L(E,V,D.i0,D.i1,D.est.e,D.est.eMq255);if(D.i0>=I||D.i1<=I){D.est.L=0;continue}const q={i0:D.i0,i1:I,bst:null,est:null,tdst:0,left:null,right:null};q.bst=G(E,q.i0,q.i1),q.est=_(q.bst);const $={i0:I,i1:D.i1,bst:null,est:null,tdst:0,left:null,right:null};for($.bst={R:[],m:[],N:D.bst.N-q.bst.N},H=0;H<16;H++)$.bst.R[H]=D.bst.R[H]-q.bst.R[H];for(H=0;H<4;H++)$.bst.m[H]=D.bst.m[H]-q.bst.m[H];$.est=_($.bst),D.left=q,D.right=$,U[T]=q,U.push($)}for(U.sort(((Y,T)=>T.bst.N-Y.bst.N)),H=0;H<U.length;H++)U[H].ind=H;return[F,U]}function w(E,k,j,V,F){if(E.left==null)return E.tdst=(function(q,$,P,Z,te){const X=$-q[0],Q=P-q[1],ye=Z-q[2],ce=te-q[3];return X*X+Q*Q+ye*ye+ce*ce})(E.est.q,k,j,V,F),E;const U=R(E.est,k,j,V,F);let H=E.left,Y=E.right;U>0&&(H=E.right,Y=E.left);const T=w(H,k,j,V,F);if(T.tdst<=U*U)return T;const D=w(Y,k,j,V,F);return D.tdst<T.tdst?D:T}function R(E,k,j,V,F){const{e:U}=E;return U[0]*k+U[1]*j+U[2]*V+U[3]*F-E.eMq}function L(E,k,j,V,F,U){for(V-=4;j<V;){for(;z(E,j,F)<=U;)j+=4;for(;z(E,V,F)>U;)V-=4;if(j>=V)break;const H=k[j>>2];k[j>>2]=k[V>>2],k[V>>2]=H,j+=4,V-=4}for(;z(E,j,F)>U;)j-=4;return j+4}function z(E,k,j){return E[k]*j[0]+E[k+1]*j[1]+E[k+2]*j[2]+E[k+3]*j[3]}function G(E,k,j){const V=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],F=[0,0,0,0],U=j-k>>2;for(let H=k;H<j;H+=4){const Y=E[H]*.00392156862745098,T=E[H+1]*(1/255),D=E[H+2]*(1/255),I=E[H+3]*(1/255);F[0]+=Y,F[1]+=T,F[2]+=D,F[3]+=I,V[0]+=Y*Y,V[1]+=Y*T,V[2]+=Y*D,V[3]+=Y*I,V[5]+=T*T,V[6]+=T*D,V[7]+=T*I,V[10]+=D*D,V[11]+=D*I,V[15]+=I*I}return V[4]=V[1],V[8]=V[2],V[9]=V[6],V[12]=V[3],V[13]=V[7],V[14]=V[11],{R:V,m:F,N:U}}function _(E){const{R:k}=E,{m:j}=E,{N:V}=E,F=j[0],U=j[1],H=j[2],Y=j[3],T=V==0?0:1/V,D=[k[0]-F*F*T,k[1]-F*U*T,k[2]-F*H*T,k[3]-F*Y*T,k[4]-U*F*T,k[5]-U*U*T,k[6]-U*H*T,k[7]-U*Y*T,k[8]-H*F*T,k[9]-H*U*T,k[10]-H*H*T,k[11]-H*Y*T,k[12]-Y*F*T,k[13]-Y*U*T,k[14]-Y*H*T,k[15]-Y*Y*T],I=D,q=O;let $=[Math.random(),Math.random(),Math.random(),Math.random()],P=0,Z=0;if(V!=0)for(let X=0;X<16&&($=q.multVec(I,$),Z=Math.sqrt(q.dot($,$)),$=q.sml(1/Z,$),!(X!=0&&Math.abs(Z-P)<1e-9));X++)P=Z;const te=[F*T,U*T,H*T,Y*T];return{Cov:D,q:te,e:$,L:P,eMq255:q.dot(q.sml(255,te),$),eMq:q.dot($,te),rgba:(Math.round(255*te[3])<<24|Math.round(255*te[2])<<16|Math.round(255*te[1])<<8|Math.round(255*te[0])<<0)>>>0}}var O={multVec:(E,k)=>[E[0]*k[0]+E[1]*k[1]+E[2]*k[2]+E[3]*k[3],E[4]*k[0]+E[5]*k[1]+E[6]*k[2]+E[7]*k[3],E[8]*k[0]+E[9]*k[1]+E[10]*k[2]+E[11]*k[3],E[12]*k[0]+E[13]*k[1]+E[14]*k[2]+E[15]*k[3]],dot:(E,k)=>E[0]*k[0]+E[1]*k[1]+E[2]*k[2]+E[3]*k[3],sml:(E,k)=>[E*k[0],E*k[1],E*k[2],E*k[3]]};gr.encode=function(k,j,V,F,U,H,Y){F==null&&(F=0),Y==null&&(Y=!1);const T=m(k,j,V,F,[!1,!1,!1,0,Y,!1]);return p(T,-1),f(T,j,V,U,H)},gr.encodeLL=function(k,j,V,F,U,H,Y,T){const D={ctype:0+(F==1?0:2)+(U==0?0:4),depth:H,frames:[]},I=(F+U)*H,q=I*j;for(let $=0;$<k.length;$++)D.frames.push({rect:{x:0,y:0,width:j,height:V},img:new Uint8Array(k[$]),blend:0,dispose:1,bpp:Math.ceil(I/8),bpl:Math.ceil(q/8)});return p(D,0,!0),f(D,j,V,Y,T)},gr.encode.compress=m,gr.encode.dither=d,gr.quantize=S,gr.quantize.getKDtree=N,gr.quantize.getNearest=w})();const US={toArrayBuffer(n,e){const r=n.width,i=n.height,s=r<<2,l=n.getContext("2d").getImageData(0,0,r,i),u=new Uint32Array(l.data.buffer),d=(32*r+31)/32<<2,f=d*i,p=122+f,m=new ArrayBuffer(p),y=new DataView(m),v=1<<20;let x,A,S,N,w=v,R=0,L=0,z=0;function G(E){y.setUint16(L,E,!0),L+=2}function _(E){y.setUint32(L,E,!0),L+=4}function O(E){L+=E}G(19778),_(p),O(4),_(122),_(108),_(r),_(-i>>>0),G(1),G(32),_(3),_(f),_(2835),_(2835),O(8),_(16711680),_(65280),_(255),_(4278190080),_(1466527264),(function E(){for(;R<i&&w>0;){for(N=122+R*d,x=0;x<s;)w--,A=u[z++],S=A>>>24,y.setUint32(N+x,A<<8|S),x+=4;R++}z<u.length?(w=v,setTimeout(E,US._dly)):e(m)})()},toBlob(n,e){this.toArrayBuffer(n,(r=>{e(new Blob([r],{type:"image/bmp"}))}))},_dly:9};var Lt={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},r_={[Lt.CHROME]:16384,[Lt.FIREFOX]:11180,[Lt.DESKTOP_SAFARI]:16384,[Lt.IE]:8192,[Lt.IOS]:4096,[Lt.ETC]:8192};const Rg=typeof window<"u",JS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Xu=Rg&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),a_=(Rg||JS)&&(Xu&&Xu.getOriginalSymbol(window,"File")||typeof File<"u"&&File),qS=(Rg||JS)&&(Xu&&Xu.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function kg(n,e,r=Date.now()){return new Promise((i=>{const s=n.split(","),l=s[0].match(/:(.*?);/)[1],u=globalThis.atob(s[1]);let d=u.length;const f=new Uint8Array(d);for(;d--;)f[d]=u.charCodeAt(d);const p=new Blob([f],{type:l});p.name=e,p.lastModified=r,i(p)}))}function KS(n){return new Promise(((e,r)=>{const i=new qS;i.onload=()=>e(i.result),i.onerror=s=>r(s),i.readAsDataURL(n)}))}function YS(n){return new Promise(((e,r)=>{const i=new Image;i.onload=()=>e(i),i.onerror=s=>r(s),i.src=n}))}function Ni(){if(Ni.cachedResult!==void 0)return Ni.cachedResult;let n=Lt.ETC;const{userAgent:e}=navigator;return/Chrom(e|ium)/i.test(e)?n=Lt.CHROME:/iP(ad|od|hone)/i.test(e)&&/WebKit/i.test(e)?n=Lt.IOS:/Safari/i.test(e)?n=Lt.DESKTOP_SAFARI:/Firefox/i.test(e)?n=Lt.FIREFOX:(/MSIE/i.test(e)||document.documentMode)&&(n=Lt.IE),Ni.cachedResult=n,Ni.cachedResult}function ZS(n,e){const r=Ni(),i=r_[r];let s=n,l=e,u=s*l;const d=s>l?l/s:s/l;for(;u>i*i;){const f=(i+s)/2,p=(i+l)/2;f<p?(l=p,s=p*d):(l=f*d,s=f),u=s*l}return{width:s,height:l}}function Md(n,e){let r,i;try{if(r=new OffscreenCanvas(n,e),i=r.getContext("2d"),i===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{r=document.createElement("canvas"),i=r.getContext("2d")}return r.width=n,r.height=e,[r,i]}function WS(n,e){const{width:r,height:i}=ZS(n.width,n.height),[s,l]=Md(r,i);return e&&/jpe?g/.test(e)&&(l.fillStyle="white",l.fillRect(0,0,s.width,s.height)),l.drawImage(n,0,0,s.width,s.height),s}function Cu(){return Cu.cachedResult!==void 0||(Cu.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Cu.cachedResult}function Qu(n,e={}){return new Promise((function(r,i){let s,l;var u=function(){try{return l=WS(s,e.fileType||n.type),r([s,l])}catch(f){return i(f)}},d=function(f){try{var p=function(m){try{throw m}catch(y){return i(y)}};try{let m;return KS(n).then((function(y){try{return m=y,YS(m).then((function(v){try{return s=v,(function(){try{return u()}catch(x){return i(x)}})()}catch(x){return p(x)}}),p)}catch(v){return p(v)}}),p)}catch(m){p(m)}}catch(m){return i(m)}};try{if(Cu()||[Lt.DESKTOP_SAFARI,Lt.MOBILE_SAFARI].includes(Ni()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(n).then((function(f){try{return s=f,u()}catch{return d()}}),d)}catch{d()}}))}function $u(n,e,r,i,s=1){return new Promise((function(l,u){let d;if(e==="image/png"){let y,v,x;return y=n.getContext("2d"),{data:v}=y.getImageData(0,0,n.width,n.height),x=gr.encode([v.buffer],n.width,n.height,4096*s),d=new Blob([x],{type:e}),d.name=r,d.lastModified=i,f.call(this)}{let y=function(){return f.call(this)};var p=y;if(e==="image/bmp")return new Promise((v=>US.toBlob(n,v))).then((function(v){try{return d=v,d.name=r,d.lastModified=i,y.call(this)}catch(x){return u(x)}}).bind(this),u);{let v=function(){return y.call(this)};var m=v;if(typeof OffscreenCanvas=="function"&&n instanceof OffscreenCanvas)return n.convertToBlob({type:e,quality:s}).then((function(x){try{return d=x,d.name=r,d.lastModified=i,v.call(this)}catch(A){return u(A)}}).bind(this),u);{let x;return x=n.toDataURL(e,s),kg(x,r,i).then((function(A){try{return d=A,v.call(this)}catch(S){return u(S)}}).bind(this),u)}}}function f(){return l(d)}}))}function kr(n){n.width=0,n.height=0}function js(){return new Promise((function(n,e){let r,i,s,l;return js.cachedResult!==void 0?n(js.cachedResult):kg("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then((function(u){try{return r=u,Qu(r).then((function(d){try{return i=d[1],$u(i,r.type,r.name,r.lastModified).then((function(f){try{return s=f,kr(i),Qu(s).then((function(p){try{return l=p[0],js.cachedResult=l.width===1&&l.height===2,n(js.cachedResult)}catch(m){return e(m)}}),e)}catch(p){return e(p)}}),e)}catch(f){return e(f)}}),e)}catch(d){return e(d)}}),e)}))}function XS(n){return new Promise(((e,r)=>{const i=new qS;i.onload=s=>{const l=new DataView(s.target.result);if(l.getUint16(0,!1)!=65496)return e(-2);const u=l.byteLength;let d=2;for(;d<u;){if(l.getUint16(d+2,!1)<=8)return e(-1);const f=l.getUint16(d,!1);if(d+=2,f==65505){if(l.getUint32(d+=2,!1)!=1165519206)return e(-1);const p=l.getUint16(d+=6,!1)==18761;d+=l.getUint32(d+4,p);const m=l.getUint16(d,p);d+=2;for(let y=0;y<m;y++)if(l.getUint16(d+12*y,p)==274)return e(l.getUint16(d+12*y+8,p))}else{if((65280&f)!=65280)break;d+=l.getUint16(d,!1)}}return e(-1)},i.onerror=s=>r(s),i.readAsArrayBuffer(n)}))}function QS(n,e){const{width:r}=n,{height:i}=n,{maxWidthOrHeight:s}=e;let l,u=n;return isFinite(s)&&(r>s||i>s)&&([u,l]=Md(r,i),r>i?(u.width=s,u.height=i/r*s):(u.width=r/i*s,u.height=s),l.drawImage(n,0,0,u.width,u.height),kr(n)),u}function $S(n,e){const{width:r}=n,{height:i}=n,[s,l]=Md(r,i);switch(e>4&&e<9?(s.width=i,s.height=r):(s.width=r,s.height=i),e){case 2:l.transform(-1,0,0,1,r,0);break;case 3:l.transform(-1,0,0,-1,r,i);break;case 4:l.transform(1,0,0,-1,0,i);break;case 5:l.transform(0,1,1,0,0,0);break;case 6:l.transform(0,1,-1,0,i,0);break;case 7:l.transform(0,-1,-1,0,i,r);break;case 8:l.transform(0,-1,1,0,0,r)}return l.drawImage(n,0,0,r,i),kr(n),s}function m4(n,e,r=0){return new Promise((function(i,s){let l,u,d,f,p,m,y,v,x,A,S,N,w,R,L,z,G,_,O,E;function k(V=5){if(e.signal&&e.signal.aborted)throw e.signal.reason;l+=V,e.onProgress(Math.min(l,100))}function j(V){if(e.signal&&e.signal.aborted)throw e.signal.reason;l=Math.min(Math.max(V,l),100),e.onProgress(l)}return l=r,u=e.maxIteration||10,d=1024*e.maxSizeMB*1024,k(),Qu(n,e).then((function(V){try{return[,f]=V,k(),p=QS(f,e),k(),new Promise((function(F,U){var H;if(!(H=e.exifOrientation))return XS(n).then((function(T){try{return H=T,Y.call(this)}catch(D){return U(D)}}).bind(this),U);function Y(){return F(H)}return Y.call(this)})).then((function(F){try{return m=F,k(),js().then((function(U){try{return y=U?p:$S(p,m),k(),v=e.initialQuality||1,x=e.fileType||n.type,$u(y,x,n.name,n.lastModified,v).then((function(H){try{{let I=function(){if(u--&&(L>d||L>w)){let $,P;return $=E?.95*O.width:O.width,P=E?.95*O.height:O.height,[G,_]=Md($,P),_.drawImage(O,0,0,$,P),v*=x==="image/png"?.85:.95,$u(G,x,n.name,n.lastModified,v).then((function(Z){try{return z=Z,kr(O),O=G,L=z.size,j(Math.min(99,Math.floor((R-L)/(R-d)*100))),I}catch(te){return s(te)}}),s)}return[1]},q=function(){return kr(O),kr(G),kr(p),kr(y),kr(f),j(100),i(z)};var T=I,D=q;if(A=H,k(),S=A.size>d,N=A.size>n.size,!S&&!N)return j(100),i(A);var Y;return w=n.size,R=A.size,L=R,O=y,E=!e.alwaysKeepResolution&&S,(Y=(function($){for(;$;){if($.then)return void $.then(Y,s);try{if($.pop){if($.length)return $.pop()?q.call(this):$;$=I}else $=$.call(this)}catch(P){return s(P)}}}).bind(this))(I)}}catch(I){return s(I)}}).bind(this),s)}catch(H){return s(H)}}).bind(this),s)}catch(U){return s(U)}}).bind(this),s)}catch(F){return s(F)}}).bind(this),s)}))}const i_=`
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;let Mm;function s_(n,e){return new Promise(((r,i)=>{Mm||(Mm=(function(u){const d=[];return d.push(u),URL.createObjectURL(new Blob(d))})(i_));const s=new Worker(Mm);s.addEventListener("message",(function(u){if(e.signal&&e.signal.aborted)s.terminate();else if(u.data.progress===void 0){if(u.data.error)return i(new Error(u.data.error)),void s.terminate();r(u.data.file),s.terminate()}else e.onProgress(u.data.progress)})),s.addEventListener("error",i),e.signal&&e.signal.addEventListener("abort",(()=>{i(e.signal.reason),s.terminate()})),s.postMessage({file:n,imageCompressionLibUrl:e.libURL,options:{...e,onProgress:void 0,signal:void 0}})}))}function bt(n,e){return new Promise((function(r,i){let s,l,u,d,f,p;if(s={...e},u=0,{onProgress:d}=s,s.maxSizeMB=s.maxSizeMB||Number.POSITIVE_INFINITY,f=typeof s.useWebWorker!="boolean"||s.useWebWorker,delete s.useWebWorker,s.onProgress=x=>{u=x,typeof d=="function"&&d(u)},!(n instanceof Blob||n instanceof a_))return i(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(n.type))return i(new Error("The file given is not an image"));if(p=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!f||typeof Worker!="function"||p)return m4(n,s).then((function(x){try{return l=x,v.call(this)}catch(A){return i(A)}}).bind(this),i);var m=(function(){try{return v.call(this)}catch(x){return i(x)}}).bind(this),y=function(x){try{return m4(n,s).then((function(A){try{return l=A,m()}catch(S){return i(S)}}),i)}catch(A){return i(A)}};try{return s.libURL=s.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",s_(n,s).then((function(x){try{return l=x,m()}catch{return y()}}),y)}catch{y()}function v(){try{l.name=n.name,l.lastModified=n.lastModified}catch{}try{s.preserveExif&&n.type==="image/jpeg"&&(!s.fileType||s.fileType&&s.fileType===n.type)&&(l=IS(n,l))}catch{}return r(l)}}))}bt.getDataUrlFromFile=KS,bt.getFilefromDataUrl=kg,bt.loadImage=YS,bt.drawImageInCanvas=WS,bt.drawFileInCanvas=Qu,bt.canvasToFile=$u,bt.getExifOrientation=XS,bt.handleMaxWidthOrHeight=QS,bt.followExifOrientation=$S,bt.cleanupCanvasMemory=kr,bt.isAutoOrientationInBrowser=js,bt.approximateBelowMaximumCanvasSizeOfBrowser=ZS,bt.copyExifWithoutOrientation=IS,bt.getBrowserName=Ni,bt.version="2.0.2";const o_=10*1024*1024,l_=["application/pdf","image/jpeg","image/jpg","image/png","image/heic","image/heif","image/webp","image/tiff","image/tif"],c_=[".pdf",".jpg",".jpeg",".png",".heic",".heif",".webp",".tif",".tiff"],u_={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!1,fileType:"image/jpeg",initialQuality:.8},d_=["image/jpeg","image/jpg","image/png","image/heic","image/heif","image/webp","image/tiff","image/tif"],f_={fr:{fileTooLarge:"Le fichier est trop volumineux (max 10 Mo)",invalidFileFormat:"Format non supporté (PDF, JPG, PNG, HEIC, WebP, TIFF)",fileTooLargeAndInvalidFormat:"Le fichier est trop volumineux et le format n'est pas supporté",compressing:"Compression en cours..."},en:{fileTooLarge:"File is too large (max 10 MB)",invalidFileFormat:"Unsupported format (PDF, JPG, PNG, HEIC, WebP, TIFF)",fileTooLargeAndInvalidFormat:"File is too large and format is not supported",compressing:"Compressing..."}};function p4({label:n,file:e,onFileChange:r,uploadText:i,required:s,optional:l,optionalText:u,language:d,error:f,onErrorChange:p,id:m,className:y=""}){const[v,x]=C.useState(!1),[A,S]=C.useState(""),[N,w]=C.useState(!1),R=f_[d],L=V=>{const F="."+V.name.split(".").pop()?.toLowerCase();return d_.includes(V.type)||[".heic",".heif"].includes(F)},z=async V=>{try{const F=(V.size/1024/1024).toFixed(2),U=await bt(V,u_),H=(U.size/1024/1024).toFixed(2),Y=((1-U.size/V.size)*100).toFixed(1);console.log(`📸 Compression: ${V.name}`),console.log(`   Taille initiale: ${F} MB`),console.log(`   Taille compressée: ${H} MB`),console.log(`   Réduction: ${Y}%`);const D=V.name.toLowerCase().replace(/\.(heic|heif|png|webp|tiff|tif)$/i,".jpg");return new File([U],D,{type:"image/jpeg"})}catch(F){return console.error("Erreur lors de la compression:",F),V}},G=V=>{S(""),p&&p("");const F=V.size<=o_,U="."+V.name.split(".").pop()?.toLowerCase(),H=l_.includes(V.type)||c_.includes(U);return!F&&!H?(S(R.fileTooLargeAndInvalidFormat),p&&p(R.fileTooLargeAndInvalidFormat),!1):F?H?!0:(S(R.invalidFileFormat),p&&p(R.invalidFileFormat),!1):(S(R.fileTooLarge),p&&p(R.fileTooLarge),!1)},_=async V=>{if(G(V))if(L(V)){w(!0);try{const F=await z(V);r(F)}finally{w(!1)}}else r(V)},O=async V=>{V.preventDefault();const F=V.dataTransfer.files[0];F&&await _(F),x(!1)},E=async V=>{const F=V.target.files?.[0];F&&await _(F)},k=()=>{r(null),S(""),p&&p("")},j=f||A;return b.jsxs("div",{id:m,className:y,children:[b.jsxs("p",{className:"text-sm font-bold text-brand-text mb-2",children:[n,s&&b.jsx("span",{className:"text-brand-error ml-1",children:"*"}),l&&u&&b.jsxs("span",{className:"text-slate-500 text-xs ml-2",children:["(",u,")"]})]}),e?b.jsxs("div",{className:"h-36 rounded-lg border-2 border-brand-success bg-gradient-to-br from-brand-success/10 to-brand-success/5 p-4 flex flex-col items-center justify-center relative shadow-sm",children:[b.jsx("button",{type:"button",onClick:k,className:"absolute top-2 right-2 hover:scale-110 transition-transform","aria-label":"Supprimer le fichier",children:b.jsx(A4,{className:"w-4 h-4 text-slate-600 hover:text-brand-error"})}),b.jsx("div",{children:b.jsx(Rs,{className:"w-8 h-8 text-brand-success mb-2"})}),b.jsx("p",{className:"text-xs text-brand-success font-semibold text-center px-2 truncate max-w-full",children:e.name})]}):N?b.jsxs("div",{className:"h-36 rounded-lg border-2 border-dashed border-brand-primary bg-brand-primary/5 p-4 flex flex-col items-center justify-center",children:[b.jsx(gp,{className:"w-8 h-8 text-brand-primary mb-2 animate-spin"}),b.jsx("p",{className:"text-xs text-brand-primary font-medium",children:R.compressing})]}):b.jsxs(b.Fragment,{children:[b.jsxs("label",{onDrop:O,onDragOver:V=>{V.preventDefault(),x(!0)},onDragLeave:()=>x(!1),className:`h-36 rounded-lg border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center hover:scale-[1.02] ${v?"border-brand-primary bg-brand-primary/5 scale-105":j?"border-brand-error bg-red-50":"border-slate-300 hover:border-brand-primary bg-slate-50 hover:bg-slate-100"}`,children:[b.jsx(h6,{className:`w-8 h-8 mb-2 transition-colors ${v?"text-brand-primary":j?"text-brand-error":"text-slate-400"}`}),b.jsx("p",{className:"text-xs text-slate-500 text-center px-2 font-medium",children:i}),b.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.tif,.tiff",onChange:E,className:"hidden","aria-label":n})]}),j&&b.jsxs("div",{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",role:"alert",children:[b.jsx(Dn,{className:"w-4 h-4 flex-shrink-0"}),b.jsx("span",{children:j})]})]})]})}const h_=(n,e,r)=>{const i=e==="accident"&&n==="swiss"||e==="illness"&&n==="swiss";return bd({reason:s4(["illness","accident"],{errorMap:()=>({message:r.reasonRequired})}),insurance:s4(["swiss","international","auto"],{errorMap:()=>({message:r.insuranceRequired})}),hasEmployer:xm(),consentNLPD:xm().refine(s=>s===!0,r.consentNLPDRequired),consentMarketing:xm(),identityCard:bm(File,{message:r.identityCardRequired}),insuranceCard:i?bm(File,{message:r.insuranceCardRequired}):bm(File).optional().nullable()})},eM={fr:[{code:"CH",name:"Suisse"},{code:"FR",name:"France"},{code:"DE",name:"Allemagne"},{code:"IT",name:"Italie"},{code:"AF",name:"Afghanistan"},{code:"AL",name:"Albanie"},{code:"DZ",name:"Algérie"},{code:"AD",name:"Andorre"},{code:"AO",name:"Angola"},{code:"AR",name:"Argentine"},{code:"AM",name:"Arménie"},{code:"AU",name:"Australie"},{code:"AT",name:"Autriche"},{code:"AZ",name:"Azerbaïdjan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahreïn"},{code:"BD",name:"Bangladesh"},{code:"BB",name:"Barbade"},{code:"BY",name:"Biélorussie"},{code:"BE",name:"Belgique"},{code:"BZ",name:"Belize"},{code:"BJ",name:"Bénin"},{code:"BT",name:"Bhoutan"},{code:"BO",name:"Bolivie"},{code:"BA",name:"Bosnie-Herzégovine"},{code:"BW",name:"Botswana"},{code:"BR",name:"Brésil"},{code:"BN",name:"Brunei"},{code:"BG",name:"Bulgarie"},{code:"BF",name:"Burkina Faso"},{code:"BI",name:"Burundi"},{code:"KH",name:"Cambodge"},{code:"CM",name:"Cameroun"},{code:"CA",name:"Canada"},{code:"CV",name:"Cap-Vert"},{code:"CF",name:"République centrafricaine"},{code:"TD",name:"Tchad"},{code:"CL",name:"Chili"},{code:"CN",name:"Chine"},{code:"CO",name:"Colombie"},{code:"KM",name:"Comores"},{code:"CG",name:"Congo"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatie"},{code:"CU",name:"Cuba"},{code:"CY",name:"Chypre"},{code:"CZ",name:"République tchèque"},{code:"DK",name:"Danemark"},{code:"DJ",name:"Djibouti"},{code:"DM",name:"Dominique"},{code:"DO",name:"République dominicaine"},{code:"EC",name:"Équateur"},{code:"EG",name:"Égypte"},{code:"SV",name:"Salvador"},{code:"GQ",name:"Guinée équatoriale"},{code:"ER",name:"Érythrée"},{code:"EE",name:"Estonie"},{code:"ET",name:"Éthiopie"},{code:"FJ",name:"Fidji"},{code:"FI",name:"Finlande"},{code:"GA",name:"Gabon"},{code:"GM",name:"Gambie"},{code:"GE",name:"Géorgie"},{code:"GH",name:"Ghana"},{code:"GR",name:"Grèce"},{code:"GD",name:"Grenade"},{code:"GT",name:"Guatemala"},{code:"GN",name:"Guinée"},{code:"GW",name:"Guinée-Bissau"},{code:"GY",name:"Guyana"},{code:"HT",name:"Haïti"},{code:"HN",name:"Honduras"},{code:"HU",name:"Hongrie"},{code:"IS",name:"Islande"},{code:"IN",name:"Inde"},{code:"ID",name:"Indonésie"},{code:"IR",name:"Iran"},{code:"IQ",name:"Irak"},{code:"IE",name:"Irlande"},{code:"IL",name:"Israël"},{code:"JM",name:"Jamaïque"},{code:"JP",name:"Japon"},{code:"JO",name:"Jordanie"},{code:"KZ",name:"Kazakhstan"},{code:"KE",name:"Kenya"},{code:"KI",name:"Kiribati"},{code:"KW",name:"Koweït"},{code:"KG",name:"Kirghizistan"},{code:"LA",name:"Laos"},{code:"LV",name:"Lettonie"},{code:"LB",name:"Liban"},{code:"LS",name:"Lesotho"},{code:"LR",name:"Liberia"},{code:"LY",name:"Libye"},{code:"LI",name:"Liechtenstein"},{code:"LT",name:"Lituanie"},{code:"LU",name:"Luxembourg"},{code:"MG",name:"Madagascar"},{code:"MW",name:"Malawi"},{code:"MY",name:"Malaisie"},{code:"MV",name:"Maldives"},{code:"ML",name:"Mali"},{code:"MT",name:"Malte"},{code:"MH",name:"Îles Marshall"},{code:"MR",name:"Mauritanie"},{code:"MU",name:"Maurice"},{code:"MX",name:"Mexique"},{code:"FM",name:"Micronésie"},{code:"MD",name:"Moldavie"},{code:"MC",name:"Monaco"},{code:"MN",name:"Mongolie"},{code:"ME",name:"Monténégro"},{code:"MA",name:"Maroc"},{code:"MZ",name:"Mozambique"},{code:"MM",name:"Myanmar"},{code:"NA",name:"Namibie"},{code:"NR",name:"Nauru"},{code:"NP",name:"Népal"},{code:"NL",name:"Pays-Bas"},{code:"NZ",name:"Nouvelle-Zélande"},{code:"NI",name:"Nicaragua"},{code:"NE",name:"Niger"},{code:"NG",name:"Nigeria"},{code:"KP",name:"Corée du Nord"},{code:"MK",name:"Macédoine du Nord"},{code:"NO",name:"Norvège"},{code:"OM",name:"Oman"},{code:"PK",name:"Pakistan"},{code:"PW",name:"Palaos"},{code:"PA",name:"Panama"},{code:"PG",name:"Papouasie-Nouvelle-Guinée"},{code:"PY",name:"Paraguay"},{code:"PE",name:"Pérou"},{code:"PH",name:"Philippines"},{code:"PL",name:"Pologne"},{code:"PT",name:"Portugal"},{code:"QA",name:"Qatar"},{code:"RO",name:"Roumanie"},{code:"RU",name:"Russie"},{code:"RW",name:"Rwanda"},{code:"KN",name:"Saint-Kitts-et-Nevis"},{code:"LC",name:"Sainte-Lucie"},{code:"VC",name:"Saint-Vincent-et-les-Grenadines"},{code:"WS",name:"Samoa"},{code:"SM",name:"Saint-Marin"},{code:"ST",name:"Sao Tomé-et-Principe"},{code:"SA",name:"Arabie saoudite"},{code:"SN",name:"Sénégal"},{code:"RS",name:"Serbie"},{code:"SC",name:"Seychelles"},{code:"SL",name:"Sierra Leone"},{code:"SG",name:"Singapour"},{code:"SK",name:"Slovaquie"},{code:"SI",name:"Slovénie"},{code:"SB",name:"Îles Salomon"},{code:"SO",name:"Somalie"},{code:"ZA",name:"Afrique du Sud"},{code:"KR",name:"Corée du Sud"},{code:"SS",name:"Soudan du Sud"},{code:"ES",name:"Espagne"},{code:"LK",name:"Sri Lanka"},{code:"SD",name:"Soudan"},{code:"SR",name:"Suriname"},{code:"SE",name:"Suède"},{code:"SY",name:"Syrie"},{code:"TJ",name:"Tadjikistan"},{code:"TZ",name:"Tanzanie"},{code:"TH",name:"Thaïlande"},{code:"TL",name:"Timor oriental"},{code:"TG",name:"Togo"},{code:"TO",name:"Tonga"},{code:"TT",name:"Trinité-et-Tobago"},{code:"TN",name:"Tunisie"},{code:"TR",name:"Turquie"},{code:"TM",name:"Turkménistan"},{code:"TV",name:"Tuvalu"},{code:"UG",name:"Ouganda"},{code:"UA",name:"Ukraine"},{code:"AE",name:"Émirats arabes unis"},{code:"GB",name:"Royaume-Uni"},{code:"US",name:"États-Unis"},{code:"UY",name:"Uruguay"},{code:"UZ",name:"Ouzbékistan"},{code:"VU",name:"Vanuatu"},{code:"VA",name:"Vatican"},{code:"VE",name:"Venezuela"},{code:"VN",name:"Vietnam"},{code:"YE",name:"Yémen"},{code:"ZM",name:"Zambie"},{code:"ZW",name:"Zimbabwe"}],en:[{code:"CH",name:"Switzerland"},{code:"FR",name:"France"},{code:"DE",name:"Germany"},{code:"IT",name:"Italy"},{code:"AF",name:"Afghanistan"},{code:"AL",name:"Albania"},{code:"DZ",name:"Algeria"},{code:"AD",name:"Andorra"},{code:"AO",name:"Angola"},{code:"AR",name:"Argentina"},{code:"AM",name:"Armenia"},{code:"AU",name:"Australia"},{code:"AT",name:"Austria"},{code:"AZ",name:"Azerbaijan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahrain"},{code:"BD",name:"Bangladesh"},{code:"BB",name:"Barbados"},{code:"BY",name:"Belarus"},{code:"BE",name:"Belgium"},{code:"BZ",name:"Belize"},{code:"BJ",name:"Benin"},{code:"BT",name:"Bhutan"},{code:"BO",name:"Bolivia"},{code:"BA",name:"Bosnia and Herzegovina"},{code:"BW",name:"Botswana"},{code:"BR",name:"Brazil"},{code:"BN",name:"Brunei"},{code:"BG",name:"Bulgaria"},{code:"BF",name:"Burkina Faso"},{code:"BI",name:"Burundi"},{code:"KH",name:"Cambodia"},{code:"CM",name:"Cameroon"},{code:"CA",name:"Canada"},{code:"CV",name:"Cape Verde"},{code:"CF",name:"Central African Republic"},{code:"TD",name:"Chad"},{code:"CL",name:"Chile"},{code:"CN",name:"China"},{code:"CO",name:"Colombia"},{code:"KM",name:"Comoros"},{code:"CG",name:"Congo"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatia"},{code:"CU",name:"Cuba"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czech Republic"},{code:"DK",name:"Denmark"},{code:"DJ",name:"Djibouti"},{code:"DM",name:"Dominica"},{code:"DO",name:"Dominican Republic"},{code:"EC",name:"Ecuador"},{code:"EG",name:"Egypt"},{code:"SV",name:"El Salvador"},{code:"GQ",name:"Equatorial Guinea"},{code:"ER",name:"Eritrea"},{code:"EE",name:"Estonia"},{code:"ET",name:"Ethiopia"},{code:"FJ",name:"Fiji"},{code:"FI",name:"Finland"},{code:"GA",name:"Gabon"},{code:"GM",name:"Gambia"},{code:"GE",name:"Georgia"},{code:"GH",name:"Ghana"},{code:"GR",name:"Greece"},{code:"GD",name:"Grenada"},{code:"GT",name:"Guatemala"},{code:"GN",name:"Guinea"},{code:"GW",name:"Guinea-Bissau"},{code:"GY",name:"Guyana"},{code:"HT",name:"Haiti"},{code:"HN",name:"Honduras"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},{code:"IN",name:"India"},{code:"ID",name:"Indonesia"},{code:"IR",name:"Iran"},{code:"IQ",name:"Iraq"},{code:"IE",name:"Ireland"},{code:"IL",name:"Israel"},{code:"JM",name:"Jamaica"},{code:"JP",name:"Japan"},{code:"JO",name:"Jordan"},{code:"KZ",name:"Kazakhstan"},{code:"KE",name:"Kenya"},{code:"KI",name:"Kiribati"},{code:"KW",name:"Kuwait"},{code:"KG",name:"Kyrgyzstan"},{code:"LA",name:"Laos"},{code:"LV",name:"Latvia"},{code:"LB",name:"Lebanon"},{code:"LS",name:"Lesotho"},{code:"LR",name:"Liberia"},{code:"LY",name:"Libya"},{code:"LI",name:"Liechtenstein"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MG",name:"Madagascar"},{code:"MW",name:"Malawi"},{code:"MY",name:"Malaysia"},{code:"MV",name:"Maldives"},{code:"ML",name:"Mali"},{code:"MT",name:"Malta"},{code:"MH",name:"Marshall Islands"},{code:"MR",name:"Mauritania"},{code:"MU",name:"Mauritius"},{code:"MX",name:"Mexico"},{code:"FM",name:"Micronesia"},{code:"MD",name:"Moldova"},{code:"MC",name:"Monaco"},{code:"MN",name:"Mongolia"},{code:"ME",name:"Montenegro"},{code:"MA",name:"Morocco"},{code:"MZ",name:"Mozambique"},{code:"MM",name:"Myanmar"},{code:"NA",name:"Namibia"},{code:"NR",name:"Nauru"},{code:"NP",name:"Nepal"},{code:"NL",name:"Netherlands"},{code:"NZ",name:"New Zealand"},{code:"NI",name:"Nicaragua"},{code:"NE",name:"Niger"},{code:"NG",name:"Nigeria"},{code:"KP",name:"North Korea"},{code:"MK",name:"North Macedonia"},{code:"NO",name:"Norway"},{code:"OM",name:"Oman"},{code:"PK",name:"Pakistan"},{code:"PW",name:"Palau"},{code:"PA",name:"Panama"},{code:"PG",name:"Papua New Guinea"},{code:"PY",name:"Paraguay"},{code:"PE",name:"Peru"},{code:"PH",name:"Philippines"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"QA",name:"Qatar"},{code:"RO",name:"Romania"},{code:"RU",name:"Russia"},{code:"RW",name:"Rwanda"},{code:"KN",name:"Saint Kitts and Nevis"},{code:"LC",name:"Saint Lucia"},{code:"VC",name:"Saint Vincent and the Grenadines"},{code:"WS",name:"Samoa"},{code:"SM",name:"San Marino"},{code:"ST",name:"Sao Tome and Principe"},{code:"SA",name:"Saudi Arabia"},{code:"SN",name:"Senegal"},{code:"RS",name:"Serbia"},{code:"SC",name:"Seychelles"},{code:"SL",name:"Sierra Leone"},{code:"SG",name:"Singapore"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"SB",name:"Solomon Islands"},{code:"SO",name:"Somalia"},{code:"ZA",name:"South Africa"},{code:"KR",name:"South Korea"},{code:"SS",name:"South Sudan"},{code:"ES",name:"Spain"},{code:"LK",name:"Sri Lanka"},{code:"SD",name:"Sudan"},{code:"SR",name:"Suriname"},{code:"SE",name:"Sweden"},{code:"SY",name:"Syria"},{code:"TJ",name:"Tajikistan"},{code:"TZ",name:"Tanzania"},{code:"TH",name:"Thailand"},{code:"TL",name:"Timor-Leste"},{code:"TG",name:"Togo"},{code:"TO",name:"Tonga"},{code:"TT",name:"Trinidad and Tobago"},{code:"TN",name:"Tunisia"},{code:"TR",name:"Turkey"},{code:"TM",name:"Turkmenistan"},{code:"TV",name:"Tuvalu"},{code:"UG",name:"Uganda"},{code:"UA",name:"Ukraine"},{code:"AE",name:"United Arab Emirates"},{code:"GB",name:"United Kingdom"},{code:"US",name:"United States"},{code:"UY",name:"Uruguay"},{code:"UZ",name:"Uzbekistan"},{code:"VU",name:"Vanuatu"},{code:"VA",name:"Vatican City"},{code:"VE",name:"Venezuela"},{code:"VN",name:"Vietnam"},{code:"YE",name:"Yemen"},{code:"ZM",name:"Zambia"},{code:"ZW",name:"Zimbabwe"}]},g4=["CH","FR"];function m_(n){const e=eM[n],r=e.filter(s=>g4.includes(s.code)),i=e.filter(s=>!g4.includes(s.code)).sort((s,l)=>s.name.localeCompare(l.name,n));return[...r,...i]}function p_(n,e){return eM[e].find(s=>s.code===n.toUpperCase())?.name??n}const ed=[.25,.46,.45,.94],At={SCALE_HOVER:1.02,SCALE_TAP:.98,DURATION_DEFAULT:.4,DURATION_LONG:.5,STAGGER_DELAY:.1,PULSE_DURATION:2},g_=["swiss","international","auto"],y_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:At.STAGGER_DELAY,delayChildren:At.STAGGER_DELAY}}},ll={hidden:{opacity:0,transform:"translateY(15px)"},visible:{opacity:1,transform:"translateY(0px)",transition:{duration:At.DURATION_DEFAULT,ease:ed}}},v_={hidden:{opacity:0,transform:"scale(0.7)"},visible:{opacity:1,transform:"scale(1)",transition:{duration:At.DURATION_LONG,ease:ed}},pulse:{transform:["scale(1)","scale(1.03)","scale(1)"],transition:{duration:At.PULSE_DURATION,repeat:1/0,ease:"easeInOut"}}},b_={hidden:{opacity:0,transform:"translateY(-10px)",willChange:"transform, opacity"},visible:{opacity:1,transform:"translateY(0px)",transition:{duration:.25,ease:ed}},exit:{opacity:0,transform:"translateY(-10px)",transition:{duration:.15,ease:ed}}};function x_({language:n,reason:e,insurance:r,hasEmployer:i,consentNLPD:s,consentMarketing:l,identityCard:u,insuranceCard:d,onReasonChange:f,onInsuranceChange:p,onHasEmployerChange:m,onConsentNLPDChange:y,onConsentMarketingChange:v,onIdentityCardChange:x,onInsuranceCardChange:A,onOCRDataExtracted:S,onNext:N,onBack:w}){const R=OR[n],{extractDocumentData:L}=Ux(),[z,G]=C.useState(!1),[_,O]=C.useState(null),E=C.useRef(null),k=C.useRef(null),j=C.useRef(null),V=C.useRef(null),F=C.useRef(null),[U,H]=C.useState(e),[Y,T]=C.useState(r),D=C.useMemo(()=>h_(Y,U,{reasonRequired:R.reasonRequired,insuranceRequired:R.insuranceRequired,identityCardRequired:R.identityCardRequired,insuranceCardRequired:R.insuranceCardRequired,consentNLPDRequired:R.consentNLPDRequired}),[Y,U,R.reasonRequired,R.insuranceRequired,R.identityCardRequired,R.insuranceCardRequired,R.consentNLPDRequired]),{handleSubmit:I,formState:{errors:q},setValue:$,trigger:P,watch:Z}=yd({resolver:vd(D),mode:"onSubmit",defaultValues:{reason:e||void 0,insurance:r||void 0,hasEmployer:i,consentNLPD:s,consentMarketing:l,identityCard:u||void 0,insuranceCard:d||void 0}}),te=Z(),X=te.reason||e,Q=te.insurance||r,ye=Q==="swiss";C.useEffect(()=>{X!==U&&H(X)},[X,U]),C.useEffect(()=>{Q!==Y&&T(Q)},[Q,Y]),C.useEffect(()=>{const fe=Object.keys(q);if(fe.length>0){const xe=fe[0],Me={reason:E,insurance:k,identityCard:j,insuranceCard:V,consentNLPD:F}[xe];Me?.current&&Me.current.scrollIntoView({behavior:"smooth",block:"center"})}},[q]);const ce=C.useCallback(fe=>{$("reason",fe,{shouldValidate:!1}),f(fe)},[$,f]),Se=C.useCallback(fe=>{$("insurance",fe,{shouldValidate:!1}),p(fe)},[$,p]),ge=C.useCallback(async(fe,xe)=>{if(fe==="identity"){if($("identityCard",xe,{shouldValidate:!0}),x(xe),xe){G(!0),O(null);try{const _e=await L(xe,"id_card");_e&&(S({firstName:_e.firstName,lastName:_e.lastName,gender:_e.gender,nationality:p_(_e.nationality,n)}),console.log("✅ OCR: Données pré-remplies avec succès"))}catch(_e){console.error("❌ OCR: Erreur lors de l'extraction",_e),O(n==="fr"?"Erreur lors de l'analyse du document. Veuillez saisir vos informations manuellement.":"Error analyzing document. Please enter your information manually.")}finally{G(!1)}}}else $("insuranceCard",xe,{shouldValidate:!0}),A(xe)},[$,x,A,L,S,n]),oe=C.useCallback(()=>{N()},[N]);return b.jsx("div",{className:"min-h-screen flex items-center justify-center px-4 py-4",children:b.jsx(Te.div,{className:"w-full max-w-2xl mx-auto",variants:y_,initial:"hidden",animate:"visible",children:b.jsxs("div",{className:"bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 backdrop-blur-sm relative z-10",children:[b.jsxs(Te.div,{className:"mb-8",variants:ll,children:[b.jsx(Te.div,{className:"w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-primary/20",variants:v_,animate:"pulse",children:b.jsx(e6,{className:"w-8 h-8 text-white"})}),b.jsx(Te.h1,{className:"text-2xl font-bold text-brand-text text-center mb-2",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3},children:R.title}),b.jsx(Te.p,{className:"text-sm text-slate-600 text-center",initial:{opacity:0},animate:{opacity:1},transition:{delay:.25,duration:.3},children:R.subtitle})]}),b.jsxs("form",{onSubmit:I(oe),className:"space-y-8",children:[b.jsxs(Te.div,{ref:E,id:"reason",variants:ll,role:"group","aria-labelledby":"reason-label",children:[b.jsx("label",{id:"reason-label",className:"block text-sm font-semibold text-brand-text mb-3",children:R.reasonLabel}),b.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[b.jsxs(Te.button,{type:"button",onClick:()=>ce("illness"),className:`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${X==="illness"?"bg-brand-primary text-white border border-brand-primary":"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary"}`,whileHover:{scale:At.SCALE_HOVER},whileTap:{scale:At.SCALE_TAP},"aria-pressed":X==="illness","aria-label":R.illness,children:[X==="illness"&&b.jsx(Te.span,{className:"absolute top-2 right-2",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:b.jsx(Rs,{className:"w-5 h-5"})}),R.illness]}),b.jsxs(Te.button,{type:"button",onClick:()=>ce("accident"),className:`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${X==="accident"?"bg-brand-primary text-white border border-brand-primary":"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary"}`,whileHover:{scale:At.SCALE_HOVER},whileTap:{scale:At.SCALE_TAP},"aria-pressed":X==="accident","aria-label":R.accident,children:[X==="accident"&&b.jsx(Te.span,{className:"absolute top-2 right-2",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:b.jsx(Rs,{className:"w-5 h-5"})}),R.accident]})]}),b.jsx(xu,{children:q.reason&&b.jsxs(Te.div,{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.2},children:[b.jsx(Dn,{className:"w-4 h-4 flex-shrink-0"}),b.jsx("span",{children:q.reason?.message})]})})]}),b.jsx(xu,{mode:"wait",children:X==="accident"&&b.jsxs(Te.div,{variants:b_,initial:"hidden",animate:"visible",exit:"exit",style:{overflow:"hidden"},children:[b.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[b.jsx(Te.div,{animate:{rotate:[0,-10,10,-10,0]},transition:{duration:.5,delay:.3},children:b.jsx(UA,{className:"w-5 h-5 text-brand-primary"})}),b.jsx("label",{id:"employer-label",className:"block text-sm font-semibold text-brand-text",children:R.hasEmployerLabel})]}),b.jsxs("div",{className:"grid grid-cols-2 gap-3",role:"group","aria-labelledby":"employer-label",children:[b.jsxs(Te.button,{type:"button",onClick:()=>{$("hasEmployer",!0,{shouldValidate:!1}),m(!0)},className:`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${i?"bg-brand-primary text-white border border-brand-primary":"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary"}`,whileHover:{scale:At.SCALE_HOVER},whileTap:{scale:At.SCALE_TAP},"aria-pressed":i,"aria-label":R.yes,children:[i&&b.jsx(Te.span,{className:"absolute top-2 right-2",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:b.jsx(Rs,{className:"w-5 h-5"})}),R.yes]}),b.jsxs(Te.button,{type:"button",onClick:()=>{$("hasEmployer",!1,{shouldValidate:!1}),m(!1)},className:`h-14 px-6 rounded-md font-medium transition-all relative overflow-hidden ${i?"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary":"bg-brand-primary text-white border border-brand-primary"}`,whileHover:{scale:At.SCALE_HOVER},whileTap:{scale:At.SCALE_TAP},"aria-pressed":!i,"aria-label":R.no,children:[!i&&b.jsx(Te.span,{className:"absolute top-2 right-2",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:b.jsx(Rs,{className:"w-5 h-5"})}),R.no]})]})]},"employer-section")}),b.jsxs(Te.div,{ref:k,id:"insurance",variants:ll,role:"group","aria-labelledby":"insurance-label",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[b.jsx("label",{id:"insurance-label",className:"block text-sm font-semibold text-brand-text",children:R.insuranceLabel}),b.jsxs(jL,{children:[b.jsx(VL,{asChild:!0,children:b.jsx("button",{type:"button",className:"text-brand-primary hover:text-brand-primary-hover text-sm font-medium underline transition-colors",children:R.insuranceHelp})}),b.jsxs(HL,{className:"max-w-2xl max-h-[80vh] overflow-y-auto",children:[b.jsx(IL,{children:b.jsx(UL,{className:"text-xl font-bold text-brand-text",children:R.insuranceHelpTitle})}),b.jsxs("div",{className:"space-y-4 text-brand-text",children:[b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold text-brand-primary mb-1",children:R.insuranceHelpSwiss}),b.jsx("p",{className:"text-sm leading-relaxed",children:R.insuranceHelpSwissDesc})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold text-brand-primary mb-1",children:R.insuranceHelpInternational}),b.jsx("p",{className:"text-sm leading-relaxed mb-2",children:R.insuranceHelpInternationalDesc}),b.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-sm",children:[b.jsx("li",{children:R.insuranceHelpInternationalItem1}),b.jsx("li",{children:R.insuranceHelpInternationalItem2})]})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold text-brand-primary mb-1",children:R.insuranceHelpAuto}),b.jsx("p",{className:"text-sm leading-relaxed",children:R.insuranceHelpAutoDesc})]})]})]})]})]}),b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",children:g_.map((fe,xe)=>b.jsxs(Te.button,{type:"button",onClick:()=>Se(fe),className:`h-14 px-4 rounded-md font-medium text-sm relative overflow-hidden transition-all ${Q===fe?"bg-brand-primary text-white border border-brand-primary":"border border-slate-300 text-slate-700 bg-white hover:border-brand-primary"}`,whileHover:{scale:At.SCALE_HOVER},whileTap:{scale:At.SCALE_TAP},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:xe*.05},"aria-pressed":Q===fe,"aria-label":R[fe],children:[Q===fe&&b.jsx(Te.span,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:15},children:b.jsx(Rs,{className:"w-4 h-4 absolute top-2 right-2"})}),R[fe]]},fe))}),b.jsx(xu,{children:q.insurance&&b.jsxs(Te.div,{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.2},children:[b.jsx(Dn,{className:"w-4 h-4 flex-shrink-0"}),b.jsx("span",{children:q.insurance?.message})]})})]}),b.jsx(Te.div,{variants:ll,children:b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{ref:j,children:b.jsx(p4,{id:"identityCard",label:R.identityCard,file:u,onFileChange:fe=>ge("identity",fe),uploadText:R.uploadText,required:!0,language:n,error:q.identityCard?.message})}),b.jsx("div",{ref:V,children:b.jsx(p4,{id:"insuranceCard",file:d,onFileChange:fe=>ge("insurance",fe),label:R.insuranceCard,uploadText:R.uploadText,required:ye,optional:!ye,optionalText:R.optional,language:n,error:q.insuranceCard?.message})})]})}),b.jsxs(Te.div,{ref:F,variants:ll,children:[b.jsx("label",{className:"block text-sm font-semibold text-brand-text mb-3",children:R.consentsLabel}),b.jsxs("div",{className:"space-y-3",children:[b.jsxs("div",{children:[b.jsxs("div",{className:`flex items-start gap-3 p-4 bg-slate-50 rounded-lg ${q.consentNLPD?"border-2 border-brand-error":""}`,children:[b.jsx(f4,{id:"consentNLPD",checked:s,onCheckedChange:fe=>{$("consentNLPD",fe===!0,{shouldValidate:!0}),y(fe===!0)},className:"mt-0.5"}),b.jsxs(h4,{htmlFor:"consentNLPD",className:"text-sm font-medium text-brand-text cursor-pointer flex-1 leading-5 inline",children:[R.consentNLPDPrefix," ",b.jsx("a",{href:R.privacyPolicyUrl,target:"_blank",rel:"noopener noreferrer",className:"text-brand-primary hover:underline inline",onClick:fe=>fe.stopPropagation(),children:R.consentNLPDLink}),b.jsx("span",{className:"text-brand-error ml-1",children:"*"})]})]}),q.consentNLPD&&b.jsxs("div",{className:"flex items-center gap-2 mt-2 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4 flex-shrink-0"}),b.jsx("span",{children:q.consentNLPD?.message})]})]}),b.jsxs("div",{className:"flex items-start gap-3 p-4 bg-slate-50 rounded-lg",children:[b.jsx(f4,{id:"consentMarketing",checked:l,onCheckedChange:fe=>{$("consentMarketing",fe===!0),v(fe===!0)},className:"mt-0.5"}),b.jsxs(h4,{htmlFor:"consentMarketing",className:"text-sm font-medium text-brand-text cursor-pointer flex-1 leading-5",children:[R.consentMarketing," ",b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",R.optional,")"]})]})]})]})]}),b.jsxs("div",{className:"flex gap-3 pt-4",children:[b.jsxs(sr,{type:"button",onClick:w,variant:"outline",size:"lg",className:"h-12 px-6 transition-all hover:scale-[1.01] active:scale-[0.98]","aria-label":R.back,children:[b.jsx(nd,{className:"w-5 h-5"}),R.back]}),b.jsxs(sr,{type:"submit",size:"lg",className:"group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white transition-all hover:scale-[1.01] active:scale-[0.98]","aria-label":R.continue,children:[R.continue,b.jsx(kl,{className:"w-5 h-5 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})})}function y4({id:n,value:e,onChange:r,countries:i,placeholder:s="",error:l,required:u=!1,label:d,noResultsText:f="Aucun résultat"}){const[p,m]=C.useState(!1),[y,v]=C.useState(""),[x,A]=C.useState(-1),S=C.useRef(null),N=C.useRef(null),w=i.filter(O=>O.name.toLowerCase().includes(y.toLowerCase()));C.useEffect(()=>{const O=E=>{N.current&&!N.current.contains(E.target)&&S.current&&!S.current.contains(E.target)&&m(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[]),C.useEffect(()=>{p||(v(""),A(-1))},[p]);const R=O=>{v(O.target.value),m(!0),A(-1)},L=()=>{m(!0)},z=O=>{r(O.name),v(""),m(!1)},G=O=>{if(!p){(O.key==="ArrowDown"||O.key==="ArrowUp"||O.key==="Enter")&&(O.preventDefault(),m(!0));return}switch(O.key){case"ArrowDown":O.preventDefault(),A(E=>E<w.length-1?E+1:E);break;case"ArrowUp":O.preventDefault(),A(E=>E>0?E-1:0);break;case"Enter":O.preventDefault(),x>=0&&x<w.length&&z(w[x]);break;case"Escape":O.preventDefault(),m(!1);break}};C.useEffect(()=>{if(x>=0&&N.current){const O=N.current.children[x];O&&O.scrollIntoView({block:"nearest"})}},[x]);const _=p?y:e;return b.jsxs("div",{className:"relative",children:[b.jsxs("label",{htmlFor:n,className:"block text-sm font-medium text-brand-text mb-2",children:[d," ",u&&b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsxs("div",{className:"relative",children:[b.jsx("input",{ref:S,id:n,type:"text",value:_,onChange:R,onClick:L,onKeyDown:G,placeholder:s,autoComplete:"off",className:`w-full h-12 px-4 pr-10 rounded-md border transition-all ${l?"border-brand-error focus:ring-2 focus:ring-brand-error focus:border-transparent":"border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"}`}),b.jsx(rd,{className:`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none transition-transform ${p?"rotate-180":""}`})]}),p&&b.jsx("div",{ref:N,className:"absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto",children:w.length>0?w.map((O,E)=>b.jsx("div",{onClick:()=>z(O),className:`px-4 py-2.5 cursor-pointer transition-colors ${E===x?"bg-brand-primary text-white":e===O.name?"bg-slate-100":"hover:bg-slate-50"}`,children:O.name},O.code)):b.jsx("div",{className:"px-4 py-2.5 text-slate-500 text-sm",children:f})}),l&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:l})]})]})}const S_=`\uFEFFName;ID\r
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
`;function v4({id:n,value:e,onChange:r,placeholder:i="",error:s,required:l=!1,label:u,noResultsText:d="Aucun résultat",optionalText:f}){const[p,m]=C.useState(!1),[y,v]=C.useState(""),[x,A]=C.useState(-1),[S,N]=C.useState([]),w=C.useRef(null),R=C.useRef(null);C.useEffect(()=>{(()=>{try{const U=S_.split(`
`).filter(H=>H.trim()).slice(1).map(H=>({name:H.split(";")[0]?.trim()||""})).filter(H=>H.name).sort((H,Y)=>H.name.localeCompare(Y.name,"fr",{sensitivity:"base",ignorePunctuation:!0,numeric:!0}));N(U)}catch(V){console.error("Error loading doctors:",V)}})()},[]);const L=y||e,z=S.filter(j=>j.name.toLowerCase().includes(L.toLowerCase()));C.useEffect(()=>{const j=V=>{R.current&&!R.current.contains(V.target)&&w.current&&!w.current.contains(V.target)&&m(!1)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[]),C.useEffect(()=>{p||(v(""),A(-1))},[p]);const G=j=>{const V=j.target.value;r(V),v(V),m(V.length>=3),A(-1)},_=()=>{e.length>=3&&(v(e),m(!0))},O=j=>{r(j.name),v(""),m(!1)},E=j=>{if(!p){(j.key==="ArrowDown"||j.key==="ArrowUp"||j.key==="Enter")&&(j.preventDefault(),m(!0));return}switch(j.key){case"ArrowDown":j.preventDefault(),A(V=>V<z.length-1?V+1:V);break;case"ArrowUp":j.preventDefault(),A(V=>V>0?V-1:0);break;case"Enter":j.preventDefault(),x>=0&&x<z.length&&O(z[x]);break;case"Escape":j.preventDefault(),m(!1);break}};C.useEffect(()=>{if(x>=0&&R.current){const j=R.current.children[x];j&&j.scrollIntoView({block:"nearest"})}},[x]);const k=y||e;return b.jsxs("div",{className:"relative",children:[b.jsxs("label",{htmlFor:n,className:"block text-sm font-medium text-brand-text mb-2",children:[u," ",l?b.jsx("span",{className:"text-brand-error",children:"*"}):f&&b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f,")"]})]}),b.jsxs("div",{className:"relative",children:[b.jsx("input",{ref:w,id:n,type:"text",value:k,onChange:G,onClick:_,onKeyDown:E,placeholder:i,autoComplete:"off",className:`w-full h-12 px-4 pr-10 rounded-md border transition-all ${s?"border-brand-error focus:ring-2 focus:ring-brand-error focus:border-transparent":"border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"}`}),b.jsx(rd,{className:`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none transition-transform ${p?"rotate-180":""}`})]}),p&&L.length>=3&&b.jsx("div",{ref:R,className:"absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto",children:z.length>0?z.slice(0,50).map((j,V)=>b.jsx("div",{onClick:()=>O(j),className:`px-4 py-2.5 cursor-pointer transition-colors ${V===x?"bg-brand-primary text-white":e===j.name?"bg-slate-100":"hover:bg-slate-50"}`,children:j.name},V)):b.jsx("div",{className:"px-4 py-2.5 text-slate-500 text-sm",children:d})}),s&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:s})]})]})}const M_=(n,e,r,i)=>bd({firstName:on().min(1,i.required),lastName:on().min(1,i.required),gender:on().min(1,i.required),nationality:on().min(1,i.required),street:on().min(1,i.required),npa:on().min(1,i.required).regex(/^\d+$/,i.invalidNpa),city:on().min(1,i.required),country:on().min(1,i.required),email:on().min(1,i.required).email(i.invalidEmail),profession:r?on().min(1,i.required):on(),employerName:r?on().min(1,i.required):on(),employerAddress:r?on().min(1,i.required):on(),referringDoctor:on().optional(),generalPractitioner:on().optional(),accidentDate:n==="accident"?on().min(1,i.required).refine(Yx,i.invalidDate):on().optional(),accidentInsurance:on().optional(),claimNumber:on().optional(),avsNumber:e==="swiss"?on().min(1,i.required).refine(s=>/^\d{13}$/.test(s.replace(/\./g,"")),i.invalidAvsNumber):on().optional(),basicInsurance:n==="accident"||e==="swiss"||e==="international"?on().min(1,i.required):on().optional(),cardNumber:n==="accident"||e==="swiss"?on().min(1,i.required).refine(s=>/^\d{20}$/.test(s.replace(/\s/g,"")),i.invalidCardNumber):on().optional(),policyNumber:e==="international"?on().min(1,i.required):on().optional(),complementaryInsurance:on().optional()});function C_({language:n,formData:e,reason:r,insurance:i,hasEmployer:s,onFormDataChange:l,onNext:u,onBack:d}){const f=zR[n],[p,m]=C.useState(""),y=m_(n),v=C.useRef(null),x=C.useRef(null),A=C.useRef(null),S=C.useRef(null),N=C.useRef(null),w=C.useRef(null),R=C.useRef(null),L=C.useRef(null),z=C.useRef(null),G=C.useRef(null),_=C.useRef(null),O=C.useRef(null),E=C.useRef(null),k=C.useRef(null),j=C.useRef(null),V=C.useRef(null),F=C.useRef(null),U=C.useRef(null),H=C.useRef(null),Y=C.useRef(null),T=C.useRef(null),D=C.useRef(null),I=M_(r,i,s,{required:f.required,invalidEmail:f.invalidEmail,invalidNpa:f.invalidNpa,invalidDate:f.invalidDate,invalidCardNumber:f.invalidCardNumber,invalidAvsNumber:f.invalidAvsNumber}),{register:q,handleSubmit:$,formState:{errors:P},setValue:Z,watch:te,trigger:X}=yd({resolver:vd(I),defaultValues:{firstName:e.firstName,lastName:e.lastName,gender:e.gender,nationality:e.nationality,street:e.street,npa:e.npa,city:e.city,country:e.country,email:e.email,profession:e.profession,employerName:e.employerName,employerAddress:e.employerAddress,referringDoctor:e.referringDoctor,generalPractitioner:e.generalPractitioner,accidentDate:e.accidentDate,accidentInsurance:e.accidentInsurance,claimNumber:e.claimNumber,avsNumber:e.avsNumber,basicInsurance:e.basicInsurance,cardNumber:e.cardNumber,policyNumber:e.policyNumber,complementaryInsurance:e.complementaryInsurance}});C.useEffect(()=>{if(Object.keys(P).length>0){const oe=Object.keys(P)[0],xe={firstName:v,lastName:x,gender:A,nationality:S,street:N,npa:w,city:R,country:L,email:z,profession:G,employerName:_,employerAddress:O,referringDoctor:E,generalPractitioner:k,accidentDate:j,accidentInsurance:V,claimNumber:F,avsNumber:U,basicInsurance:H,cardNumber:Y,policyNumber:T,complementaryInsurance:D}[oe];xe?.current&&xe.current.scrollIntoView({behavior:"smooth",block:"center"})}},[P]),C.useEffect(()=>{if(e.accidentDate){const[oe,fe,xe]=e.accidentDate.split("-");oe&&fe&&xe&&m(`${xe}.${fe}.${oe}`)}},[]);const Q=oe=>{const fe=cS(oe);if(m(fe),fe.length===10){const xe=uS(fe,{allowFuture:!0});xe?(Z("accidentDate",xe),l({accidentDate:xe}),X("accidentDate")):(Z("accidentDate",""),l({accidentDate:""}),X("accidentDate"))}else Z("accidentDate",""),l({accidentDate:""}),r==="accident"&&X("accidentDate")},ye=oe=>{l(oe),u()},ce=oe=>{const fe=oe.replace(/\D/g,"");let xe="";for(let _e=0;_e<fe.length&&_e<13;_e++)(_e===3||_e===7||_e===11)&&(xe+="."),xe+=fe[_e];return xe},Se=oe=>{const fe=oe.replace(/\D/g,"");let xe="";for(let _e=0;_e<fe.length&&_e<20;_e++)(_e===5||_e===8||_e===11||_e===14||_e===17)&&(xe+="."),xe+=fe[_e];return xe},ge=(oe,fe)=>{Z(oe,fe),l({[oe]:fe}),X(oe)};return b.jsx("div",{className:"min-h-screen py-4 px-4",children:b.jsx("div",{className:"w-full max-w-2xl mx-auto",children:b.jsxs(Sg,{className:"bg-white rounded-xl shadow-sm border border-slate-100 p-0 relative z-10",children:[b.jsxs(Mg,{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4",children:[b.jsx("div",{className:"w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",children:b.jsx(p6,{className:"w-8 h-8 text-brand-primary"})}),b.jsx(Cg,{className:"text-2xl font-bold text-brand-text text-center mb-2",children:f.title}),b.jsx(Ag,{className:"text-sm text-slate-600 text-center",children:f.subtitle})]}),b.jsx(wg,{className:"px-6 sm:px-8 pb-6 sm:pb-8",children:b.jsxs("form",{onSubmit:$(ye),className:"space-y-6",children:[b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:b.jsx("span",{className:"font-semibold text-brand-text",children:f.identity})}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("div",{ref:v,children:[b.jsxs("label",{htmlFor:"firstName",className:"block text-sm font-medium text-brand-text mb-2",children:[f.firstName," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"firstName",type:"text",...q("firstName"),onChange:oe=>ge("firstName",oe.target.value),"aria-invalid":!!P.firstName,className:`w-full h-12 px-4 ${P.firstName?"border-brand-error focus-visible:ring-brand-error":""}`}),P.firstName&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.firstName.message})]})]}),b.jsxs("div",{ref:x,children:[b.jsxs("label",{htmlFor:"lastName",className:"block text-sm font-medium text-brand-text mb-2",children:[f.lastName," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"lastName",type:"text",...q("lastName"),onChange:oe=>ge("lastName",oe.target.value),"aria-invalid":!!P.lastName,className:`w-full h-12 px-4 ${P.lastName?"border-brand-error focus-visible:ring-brand-error":""}`}),P.lastName&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.lastName.message})]})]}),b.jsxs("div",{ref:A,children:[b.jsxs("label",{htmlFor:"gender",className:"block text-sm font-medium text-brand-text mb-2",children:[f.gender," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsxs(Z3,{value:e.gender,onValueChange:oe=>ge("gender",oe),children:[b.jsx(X3,{id:"gender",className:`w-full h-12 ${P.gender?"border-brand-error focus:ring-2 focus:ring-brand-error":""} ${e.gender?"":"text-slate-400"}`,children:b.jsx(W3,{placeholder:f.genderPlaceholder})}),b.jsxs(Q3,{children:[b.jsx(fl,{value:"male",children:f.male}),b.jsx(fl,{value:"female",children:f.female}),b.jsx(fl,{value:"other",children:f.other})]})]}),P.gender&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.gender.message})]})]}),b.jsx("div",{ref:S,children:b.jsx(y4,{id:"nationality",label:f.nationality,value:e.nationality,onChange:oe=>ge("nationality",oe),countries:y,placeholder:f.nationalityPlaceholder,error:P.nationality?.message,noResultsText:f.noResults,required:!0})})]})]}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:b.jsx("span",{className:"font-semibold text-brand-text",children:f.contact})}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("div",{ref:N,children:[b.jsxs("label",{htmlFor:"street",className:"block text-sm font-medium text-brand-text mb-2",children:[f.street," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"street",type:"text",value:e.street,onChange:oe=>ge("street",oe.target.value),"aria-invalid":!!P.street,className:`w-full h-12 px-4 ${P.street?"border-brand-error focus-visible:ring-brand-error":""}`}),P.street&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.street.message})]})]}),b.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[b.jsxs("div",{ref:w,children:[b.jsxs("label",{htmlFor:"npa",className:"block text-sm font-medium text-brand-text mb-2",children:[f.npa," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"npa",type:"text",inputMode:"numeric",value:e.npa,onChange:oe=>{const fe=oe.target.value.replace(/\D/g,"");ge("npa",fe)},"aria-invalid":!!P.npa,className:`w-full h-12 px-4 ${P.npa?"border-brand-error focus-visible:ring-brand-error":""}`}),P.npa&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.npa.message})]})]}),b.jsxs("div",{ref:R,children:[b.jsxs("label",{htmlFor:"city",className:"block text-sm font-medium text-brand-text mb-2",children:[f.city," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"city",type:"text",value:e.city,onChange:oe=>ge("city",oe.target.value),"aria-invalid":!!P.city,className:`w-full h-12 px-4 ${P.city?"border-brand-error focus-visible:ring-brand-error":""}`}),P.city&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.city.message})]})]})]}),b.jsx("div",{ref:L,children:b.jsx(y4,{id:"country",label:f.country,value:e.country,onChange:oe=>ge("country",oe),countries:y,placeholder:f.countryPlaceholder,error:P.country?.message,noResultsText:f.noResults,required:!0})}),b.jsxs("div",{ref:z,children:[b.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium text-brand-text mb-2",children:[f.email," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"email",type:"email",value:e.email,onChange:oe=>ge("email",oe.target.value),"aria-invalid":!!P.email,className:`w-full h-12 px-4 ${P.email?"border-brand-error focus-visible:ring-brand-error":""}`}),P.email&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.email.message})]})]})]})]}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:b.jsx("span",{className:"font-semibold text-brand-text",children:f.employer})}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("div",{ref:G,children:[b.jsxs("label",{htmlFor:"profession",className:"block text-sm font-medium text-brand-text mb-2",children:[f.profession," ",s?b.jsx("span",{className:"text-brand-error",children:"*"}):b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"profession",type:"text",value:e.profession,onChange:oe=>ge("profession",oe.target.value),"aria-invalid":!!P.profession,className:`w-full h-12 px-4 ${P.profession?"border-brand-error focus-visible:ring-brand-error":""}`}),P.profession&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.profession.message})]})]}),b.jsxs("div",{children:[b.jsxs("label",{htmlFor:"employerName",className:"block text-sm font-medium text-brand-text mb-2",children:[f.employerName," ",s?b.jsx("span",{className:"text-brand-error",children:"*"}):b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"employerName",type:"text",value:e.employerName,onChange:oe=>ge("employerName",oe.target.value),"aria-invalid":!!P.employerName,className:`w-full h-12 px-4 ${P.employerName?"border-brand-error focus-visible:ring-brand-error":""}`}),P.employerName&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.employerName.message})]})]}),b.jsxs("div",{children:[b.jsxs("label",{htmlFor:"employerAddress",className:"block text-sm font-medium text-brand-text mb-2",children:[f.employerAddress," ",s?b.jsx("span",{className:"text-brand-error",children:"*"}):b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"employerAddress",type:"text",value:e.employerAddress,onChange:oe=>ge("employerAddress",oe.target.value),"aria-invalid":!!P.employerAddress,className:`w-full h-12 px-4 ${P.employerAddress?"border-brand-error focus-visible:ring-brand-error":""}`}),P.employerAddress&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.employerAddress.message})]})]})]})]}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:b.jsx("span",{className:"font-semibold text-brand-text",children:f.doctors})}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{ref:E,children:b.jsx(v4,{id:"referringDoctor",label:f.referringDoctor,value:e.referringDoctor,onChange:oe=>ge("referringDoctor",oe),placeholder:f.referringDoctor,error:P.referringDoctor?.message,noResultsText:f.noResults,required:!1,optionalText:f.optional})}),b.jsx("div",{ref:k,children:b.jsx(v4,{id:"generalPractitioner",label:f.generalPractitioner,value:e.generalPractitioner,onChange:oe=>ge("generalPractitioner",oe),placeholder:f.generalPractitioner,error:P.generalPractitioner?.message,noResultsText:f.noResults,required:!1,optionalText:f.optional})})]})]}),r==="accident"&&b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:b.jsx("span",{className:"font-semibold text-brand-text",children:f.accidentData})}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("div",{ref:j,children:[b.jsxs("label",{htmlFor:"accidentDate",className:"block text-sm font-medium text-brand-text mb-2",children:[f.accidentDate," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"accidentDate",type:"text",inputMode:"numeric",value:p,onChange:oe=>Q(oe.target.value),placeholder:f.accidentDatePlaceholder,maxLength:10,"aria-invalid":!!P.accidentDate,className:`w-full h-12 px-4 font-mono tracking-wider ${P.accidentDate?"border-brand-error focus-visible:ring-brand-error":""}`}),P.accidentDate&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.accidentDate.message})]})]}),b.jsxs("div",{ref:V,children:[b.jsxs("label",{htmlFor:"accidentInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[f.accidentInsurance," ",b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"accidentInsurance",type:"text",value:e.accidentInsurance,onChange:oe=>ge("accidentInsurance",oe.target.value),className:"w-full h-12 px-4"})]}),b.jsxs("div",{ref:F,children:[b.jsxs("label",{htmlFor:"claimNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[f.claimNumber," ",b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"claimNumber",type:"text",value:e.claimNumber,onChange:oe=>ge("claimNumber",oe.target.value),className:"w-full h-12 px-4"})]})]})]}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{className:"p-4 bg-slate-50 rounded-lg",children:b.jsx("span",{className:"font-semibold text-brand-text",children:f.insuranceData})}),b.jsxs("div",{className:"space-y-4",children:[i==="swiss"&&b.jsxs("div",{ref:U,children:[b.jsxs("label",{htmlFor:"avsNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[f.avsNumber," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"avsNumber",type:"text",inputMode:"numeric",maxLength:16,placeholder:"756.1234.5678.97",value:ce(e.avsNumber),onChange:oe=>{const fe=oe.target.value.replace(/\D/g,"");ge("avsNumber",fe)},"aria-invalid":!!P.avsNumber,className:`w-full h-12 px-4 font-mono tracking-wider ${P.avsNumber?"border-brand-error focus-visible:ring-brand-error":""}`}),P.avsNumber&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.avsNumber.message})]})]}),(i==="international"||i==="auto")&&b.jsxs("div",{children:[b.jsxs("label",{htmlFor:"avsNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[f.avsNumber," ",b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"avsNumber",type:"text",inputMode:"numeric",maxLength:16,placeholder:"756.1234.5678.97",value:ce(e.avsNumber),onChange:oe=>{const fe=oe.target.value.replace(/\D/g,"");ge("avsNumber",fe)},className:"w-full h-12 px-4 font-mono tracking-wider"})]}),(i==="swiss"||i==="international")&&b.jsxs("div",{ref:H,children:[b.jsxs("label",{htmlFor:"basicInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[f.basicInsurance," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"basicInsurance",type:"text",value:e.basicInsurance,onChange:oe=>ge("basicInsurance",oe.target.value),"aria-invalid":!!P.basicInsurance,className:`w-full h-12 px-4 ${P.basicInsurance?"border-brand-error focus-visible:ring-brand-error":""}`}),P.basicInsurance&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.basicInsurance.message})]})]}),i==="auto"&&r!=="accident"&&b.jsxs("div",{children:[b.jsxs("label",{htmlFor:"basicInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[f.basicInsurance," ",b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"basicInsurance",type:"text",value:e.basicInsurance,onChange:oe=>ge("basicInsurance",oe.target.value),className:"w-full h-12 px-4"})]}),i==="auto"&&r==="accident"&&b.jsxs("div",{children:[b.jsxs("label",{htmlFor:"basicInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[f.basicInsurance," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"basicInsurance",type:"text",value:e.basicInsurance,onChange:oe=>ge("basicInsurance",oe.target.value),"aria-invalid":!!P.basicInsurance,className:`w-full h-12 px-4 ${P.basicInsurance?"border-brand-error focus-visible:ring-brand-error":""}`}),P.basicInsurance&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.basicInsurance.message})]})]}),i==="swiss"&&b.jsxs("div",{ref:Y,children:[b.jsxs("label",{htmlFor:"cardNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[f.cardNumber," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"cardNumber",type:"text",inputMode:"numeric",maxLength:25,placeholder:"80756.123.456.789.012.345",value:Se(e.cardNumber),onChange:oe=>{const fe=oe.target.value.replace(/\D/g,"");ge("cardNumber",fe)},"aria-invalid":!!P.cardNumber,className:`w-full h-12 px-4 font-mono tracking-wider ${P.cardNumber?"border-brand-error focus-visible:ring-brand-error":""}`}),P.cardNumber&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.cardNumber.message})]})]}),i==="auto"&&r!=="accident"&&b.jsxs("div",{children:[b.jsxs("label",{htmlFor:"cardNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[f.cardNumber," ",b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"cardNumber",type:"text",inputMode:"numeric",maxLength:25,placeholder:"80756.123.456.789.012.345",value:Se(e.cardNumber),onChange:oe=>{const fe=oe.target.value.replace(/\D/g,"");ge("cardNumber",fe)},className:"w-full h-12 px-4 font-mono tracking-wider"})]}),i==="auto"&&r==="accident"&&b.jsxs("div",{children:[b.jsxs("label",{htmlFor:"cardNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[f.cardNumber," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"cardNumber",type:"text",inputMode:"numeric",maxLength:25,placeholder:"80756.123.456.789.012.345",value:Se(e.cardNumber),onChange:oe=>{const fe=oe.target.value.replace(/\D/g,"");ge("cardNumber",fe)},"aria-invalid":!!P.cardNumber,className:`w-full h-12 px-4 font-mono tracking-wider ${P.cardNumber?"border-brand-error focus-visible:ring-brand-error":""}`}),P.cardNumber&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.cardNumber.message})]})]}),i==="international"&&b.jsxs("div",{ref:T,children:[b.jsxs("label",{htmlFor:"policyNumber",className:"block text-sm font-medium text-brand-text mb-2",children:[f.policyNumber," ",b.jsx("span",{className:"text-brand-error",children:"*"})]}),b.jsx(kn,{id:"policyNumber",type:"text",value:e.policyNumber,onChange:oe=>ge("policyNumber",oe.target.value),"aria-invalid":!!P.policyNumber,className:`w-full h-12 px-4 ${P.policyNumber?"border-brand-error focus-visible:ring-brand-error":""}`}),P.policyNumber&&b.jsxs("div",{className:"flex items-center gap-2 mt-1 text-brand-error text-sm",children:[b.jsx(Dn,{className:"w-4 h-4"}),b.jsx("span",{children:P.policyNumber.message})]})]}),b.jsxs("div",{ref:D,children:[b.jsxs("label",{htmlFor:"complementaryInsurance",className:"block text-sm font-medium text-brand-text mb-2",children:[f.complementaryInsurance," ",b.jsxs("span",{className:"text-slate-500 text-xs",children:["(",f.optional,")"]})]}),b.jsx(kn,{id:"complementaryInsurance",type:"text",value:e.complementaryInsurance,onChange:oe=>ge("complementaryInsurance",oe.target.value),className:"w-full h-12 px-4"})]})]})]}),b.jsxs("div",{className:"flex gap-3 pt-4",children:[b.jsxs(sr,{type:"button",onClick:d,variant:"outline",size:"lg",className:"h-12 px-6 hover:scale-[1.02] active:scale-98 transition-all",children:[b.jsx(nd,{className:"w-5 h-5"}),f.back]}),b.jsxs(sr,{type:"submit",size:"lg",className:"group flex-1 h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white hover:scale-[1.02] active:scale-98 transition-all",children:[f.continue,b.jsx(kl,{className:"w-5 h-5 transition-transform group-hover:translate-x-0.5"})]})]})]})})]})})})}function A_({language:n}){const e=jR[n],r=()=>{window.open(e.link,"_blank")};return b.jsx("div",{className:"min-h-screen py-4 px-4",children:b.jsx("div",{className:"w-full max-w-2xl mx-auto",children:b.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6 sm:p-8 relative z-10",children:b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"w-32 h-32 border-4 border-brand-text rounded-full flex items-center justify-center mx-auto mb-6",children:b.jsx(td,{className:"w-16 h-16 text-brand-text",strokeWidth:3})}),b.jsx("h1",{className:"text-2xl font-bold text-brand-text mb-4",children:e.title}),b.jsx("p",{className:"text-base text-brand-text mb-8 max-w-xl mx-auto leading-relaxed",children:e.message}),b.jsx(sr,{onClick:r,size:"lg",className:"w-full max-w-md mx-auto h-14 px-8 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full hover:scale-[1.02] active:scale-98 transition-all",children:e.button})]})})})})}function w_({currentStep:n,language:e}){const r=mm.findIndex(i=>i.key===n);return b.jsx("div",{className:"w-full pt-6 pb-4 relative z-20 px-6 sm:px-8",children:b.jsx("div",{className:"max-w-2xl mx-auto",children:b.jsx("div",{className:"max-w-md mx-auto px-2",children:b.jsxs("div",{className:"flex items-start justify-between relative px-4",children:[b.jsx("div",{className:"absolute top-5 h-0.5 bg-slate-200",style:{left:"calc(16.67% + 4px)",right:"calc(16.67% + 4px)"},children:b.jsx("div",{className:"h-full bg-gradient-to-r from-brand-primary to-brand-primary-hover transition-all duration-500 ease-out",style:{width:`${r/(mm.length-1)*100}%`}})}),mm.map((i,s)=>{const l=s<r,u=s===r,d=e==="fr"?i.labelFr:i.labelEn;return b.jsxs("div",{className:"flex flex-col items-center relative z-10 flex-1",children:[b.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${l?"bg-brand-success text-white scale-100":u?"bg-brand-primary text-white scale-110 shadow-lg shadow-brand-primary/30":"bg-white border-2 border-slate-200 text-slate-400"}`,children:l?b.jsx(td,{className:"w-5 h-5",strokeWidth:3}):b.jsx("span",{className:"text-sm font-semibold",children:s+1})}),b.jsx("span",{className:`mt-3 text-xs sm:text-sm text-center transition-all leading-tight max-w-[90px] ${u?"text-brand-primary font-bold":l?"text-brand-success font-medium":"text-slate-500 font-medium"}`,children:d})]},i.key)})]})})})})}function T_(){const{currentStep:n,formData:e,updateFormData:r,nextStep:i,prevStep:s,resetWizard:l}=OA();C.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[n]),C.useEffect(()=>{if(n==="loading"){const f=setTimeout(()=>{i()},7e3);return()=>clearTimeout(f)}},[n,i]);const u={initial:{opacity:0,transform:"translateY(20px)",willChange:"transform, opacity"},animate:{opacity:1,transform:"translateY(0px)"},exit:{opacity:0,transform:"translateY(-20px)"}},d={duration:.2,ease:[.25,.46,.45,.94]};return b.jsxs("div",{className:"bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden min-h-screen",children:[b.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",children:b.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"radial-gradient(circle at 2px 2px, oklch(0.556 0 0) 1px, transparent 0)",backgroundSize:"32px 32px"}})}),n!=="landing"&&n!=="security"&&n!=="otp"&&n!=="loading"&&b.jsx(w_,{currentStep:n,language:e.language}),b.jsxs(xu,{mode:"wait",children:[n==="landing"&&b.jsx(Te.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:d,children:b.jsx(IR,{language:e.language,onLanguageChange:f=>r({language:f}),onStart:i})},"landing"),n==="security"&&b.jsx(Te.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:d,children:b.jsx(KB,{language:e.language,birthDate:e.birthDate,onBirthDateChange:f=>r({birthDate:f}),onNext:i,onBack:s})},"security"),n==="otp"&&b.jsx(Te.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:d,children:b.jsx(uL,{language:e.language,otpCode:e.otpCode,onOTPChange:f=>r({otpCode:f}),onNext:i,onBack:s})},"otp"),n==="loading"&&b.jsx(Te.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:d,children:b.jsx(dL,{language:e.language})},"loading"),n==="qualification"&&b.jsx(Te.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:d,children:b.jsx(x_,{language:e.language,reason:e.reason,insurance:e.insurance,hasEmployer:e.hasEmployer,consentNLPD:e.consentNLPD,consentMarketing:e.consentMarketing,identityCard:e.identityCard,insuranceCard:e.insuranceCard,onReasonChange:f=>r({reason:f}),onInsuranceChange:f=>r({insurance:f}),onHasEmployerChange:f=>r({hasEmployer:f}),onConsentNLPDChange:f=>r({consentNLPD:f}),onConsentMarketingChange:f=>r({consentMarketing:f}),onIdentityCardChange:f=>r({identityCard:f}),onInsuranceCardChange:f=>r({insuranceCard:f}),onOCRDataExtracted:f=>r({firstName:f.firstName,lastName:f.lastName,gender:f.gender,nationality:f.nationality}),onNext:i,onBack:s})},"qualification"),n==="admin"&&b.jsx(Te.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:d,children:b.jsx(C_,{language:e.language,formData:e,reason:e.reason,insurance:e.insurance,hasEmployer:e.hasEmployer,onFormDataChange:f=>r(f),onNext:i,onBack:s})},"admin"),n==="success"&&b.jsx(Te.div,{variants:u,initial:"initial",animate:"animate",exit:"exit",transition:d,children:b.jsx(A_,{language:e.language,onRestart:l})},"success")]})]})}const D_=n5("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function E_({className:n,variant:e,...r}){return b.jsx("div",{"data-slot":"alert",role:"alert",className:Mn(D_({variant:e}),n),...r})}function N_({className:n,...e}){return b.jsx("div",{"data-slot":"alert-title",className:Mn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",n),...e})}function R_({className:n,...e}){return b.jsx("div",{"data-slot":"alert-description",className:Mn("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",n),...e})}const k_=({error:n,resetErrorBoundary:e})=>b.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center p-4",children:b.jsxs("div",{className:"w-full max-w-md",children:[b.jsxs(E_,{variant:"destructive",className:"mb-6",children:[b.jsx(d6,{}),b.jsx(N_,{children:"This spark has encountered a runtime error"}),b.jsx(R_,{children:"Something unexpected happened while running the application. The error details are shown below. Contact the spark author and let them know about this issue."})]}),b.jsxs("div",{className:"bg-card border rounded-lg p-4 mb-6",children:[b.jsx("h3",{className:"font-semibold text-sm text-muted-foreground mb-2",children:"Error Details:"}),b.jsx("pre",{className:"text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32",children:n.message})]}),b.jsxs(sr,{onClick:e,className:"w-full",variant:"outline",children:[b.jsx(i6,{}),"Try Again"]})]})});typeof window<"u"&&window.addEventListener("error",n=>{if(n.message?.includes("createDocumentFragment")||n.message?.includes("Cannot read properties of undefined"))return console.warn("[Power Platform] Erreur jQuery interceptée:",n.message),n.preventDefault(),n.stopImmediatePropagation(),!0},!0);MA.createRoot(document.getElementById("root")).render(b.jsx(AA,{FallbackComponent:k_,children:b.jsx("div",{id:"spark-app",children:b.jsx(T_,{})})}));
