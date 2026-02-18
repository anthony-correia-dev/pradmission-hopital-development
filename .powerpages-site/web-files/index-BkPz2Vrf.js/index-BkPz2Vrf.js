var W3=Object.defineProperty;var $3=(r,t,a)=>t in r?W3(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var te=(r,t,a)=>$3(r,typeof t!="symbol"?t+"":t,a);import{r as e4,j as y,a as n4,R as $0,S as a4,C as ep,b as r4,O as np,P as t4,c as ap,d as i4,T as rp,D as tp,e as l4,f as ip,I as o4,g as lp,h as op,i as s4,k as sp,V as u4,l as up,m as c4,n as d4,o as f4,p as h4,q as m4}from"./radix-B_M9QBSi.js";import{a as D,r as lf,R as ne,g as g4,E as p4}from"./react-vendor-B9mbZ0IC.js";import{o as y4,r as b4,a as v4,b as Fi,s as le,i as Es,c as Dt,e as kd,u as Gn,d as S4,F as M4}from"./forms-DvZhKWZ9.js";import{i as wg,g as C4,s as cp,a as dp,b as Ng,c as fp,d as x4,e as A4,f as E4,h as D4,r as w4,j as N4,k as hp,l as B4,m as R4,n as L4,o as T4,S as P4,H as O4,F as ki,p as z4,q as F4,t as mp,u as k4,v as Bg,w as G4}from"./motion-B1gxuMV4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(s){if(s.ep)return;s.ep=!0;const u=a(s);fetch(s.href,u)}})();const ye=r=>typeof r=="string",Ll=()=>{let r,t;const a=new Promise((l,s)=>{r=l,t=s});return a.resolve=r,a.reject=t,a},Rg=r=>r==null?"":""+r,j4=(r,t,a)=>{r.forEach(l=>{t[l]&&(a[l]=t[l])})},H4=/###/g,Lg=r=>r&&r.indexOf("###")>-1?r.replace(H4,"."):r,Tg=r=>!r||ye(r),ql=(r,t,a)=>{const l=ye(t)?t.split("."):t;let s=0;for(;s<l.length-1;){if(Tg(r))return{};const u=Lg(l[s]);!r[u]&&a&&(r[u]=new a),Object.prototype.hasOwnProperty.call(r,u)?r=r[u]:r={},++s}return Tg(r)?{}:{obj:r,k:Lg(l[s])}},Pg=(r,t,a)=>{const{obj:l,k:s}=ql(r,t,Object);if(l!==void 0||t.length===1){l[s]=a;return}let u=t[t.length-1],f=t.slice(0,t.length-1),h=ql(r,f,Object);for(;h.obj===void 0&&f.length;)u=`${f[f.length-1]}.${u}`,f=f.slice(0,f.length-1),h=ql(r,f,Object),h!=null&&h.obj&&typeof h.obj[`${h.k}.${u}`]<"u"&&(h.obj=void 0);h.obj[`${h.k}.${u}`]=a},_4=(r,t,a,l)=>{const{obj:s,k:u}=ql(r,t,Object);s[u]=s[u]||[],s[u].push(a)},Ds=(r,t)=>{const{obj:a,k:l}=ql(r,t);if(a&&Object.prototype.hasOwnProperty.call(a,l))return a[l]},V4=(r,t,a)=>{const l=Ds(r,a);return l!==void 0?l:Ds(t,a)},gp=(r,t,a)=>{for(const l in t)l!=="__proto__"&&l!=="constructor"&&(l in r?ye(r[l])||r[l]instanceof String||ye(t[l])||t[l]instanceof String?a&&(r[l]=t[l]):gp(r[l],t[l],a):r[l]=t[l]);return r},Di=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var I4={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const J4=r=>ye(r)?r.replace(/[&<>"'\/]/g,t=>I4[t]):r;class q4{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const a=this.regExpMap.get(t);if(a!==void 0)return a;const l=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,l),this.regExpQueue.push(t),l}}const U4=[" ",",","?","!",";"],K4=new q4(20),Y4=(r,t,a)=>{t=t||"",a=a||"";const l=U4.filter(f=>t.indexOf(f)<0&&a.indexOf(f)<0);if(l.length===0)return!0;const s=K4.getRegExp(`(${l.map(f=>f==="?"?"\\?":f).join("|")})`);let u=!s.test(r);if(!u){const f=r.indexOf(a);f>0&&!s.test(r.substring(0,f))&&(u=!0)}return u},Gd=(r,t,a=".")=>{if(!r)return;if(r[t])return Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;const l=t.split(a);let s=r;for(let u=0;u<l.length;){if(!s||typeof s!="object")return;let f,h="";for(let m=u;m<l.length;++m)if(m!==u&&(h+=a),h+=l[m],f=s[h],f!==void 0){if(["string","number","boolean"].indexOf(typeof f)>-1&&m<l.length-1)continue;u+=m-u+1;break}s=f}return s},Xl=r=>r==null?void 0:r.replace("_","-"),Z4={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,t){var a,l;(l=(a=console==null?void 0:console[r])==null?void 0:a.apply)==null||l.call(a,console,t)}};class ws{constructor(t,a={}){this.init(t,a)}init(t,a={}){this.prefix=a.prefix||"i18next:",this.logger=t||Z4,this.options=a,this.debug=a.debug}log(...t){return this.forward(t,"log","",!0)}warn(...t){return this.forward(t,"warn","",!0)}error(...t){return this.forward(t,"error","")}deprecate(...t){return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(t,a,l,s){return s&&!this.debug?null:(ye(t[0])&&(t[0]=`${l}${this.prefix} ${t[0]}`),this.logger[a](t))}create(t){return new ws(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new ws(this.logger,t)}}var Za=new ws;class Vs{constructor(){this.observers={}}on(t,a){return t.split(" ").forEach(l=>{this.observers[l]||(this.observers[l]=new Map);const s=this.observers[l].get(a)||0;this.observers[l].set(a,s+1)}),this}off(t,a){if(this.observers[t]){if(!a){delete this.observers[t];return}this.observers[t].delete(a)}}emit(t,...a){this.observers[t]&&Array.from(this.observers[t].entries()).forEach(([s,u])=>{for(let f=0;f<u;f++)s(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,u])=>{for(let f=0;f<u;f++)s.apply(s,[t,...a])})}}class Og extends Vs{constructor(t,a={ns:["translation"],defaultNS:"translation"}){super(),this.data=t||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const a=this.options.ns.indexOf(t);a>-1&&this.options.ns.splice(a,1)}getResource(t,a,l,s={}){var p,v;const u=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,f=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let h;t.indexOf(".")>-1?h=t.split("."):(h=[t,a],l&&(Array.isArray(l)?h.push(...l):ye(l)&&u?h.push(...l.split(u)):h.push(l)));const m=Ds(this.data,h);return!m&&!a&&!l&&t.indexOf(".")>-1&&(t=h[0],a=h[1],l=h.slice(2).join(".")),m||!f||!ye(l)?m:Gd((v=(p=this.data)==null?void 0:p[t])==null?void 0:v[a],l,u)}addResource(t,a,l,s,u={silent:!1}){const f=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let h=[t,a];l&&(h=h.concat(f?l.split(f):l)),t.indexOf(".")>-1&&(h=t.split("."),s=a,a=h[1]),this.addNamespaces(a),Pg(this.data,h,s),u.silent||this.emit("added",t,a,l,s)}addResources(t,a,l,s={silent:!1}){for(const u in l)(ye(l[u])||Array.isArray(l[u]))&&this.addResource(t,a,u,l[u],{silent:!0});s.silent||this.emit("added",t,a,l)}addResourceBundle(t,a,l,s,u,f={silent:!1,skipCopy:!1}){let h=[t,a];t.indexOf(".")>-1&&(h=t.split("."),s=l,l=a,a=h[1]),this.addNamespaces(a);let m=Ds(this.data,h)||{};f.skipCopy||(l=JSON.parse(JSON.stringify(l))),s?gp(m,l,u):m={...m,...l},Pg(this.data,h,m),f.silent||this.emit("added",t,a,l)}removeResourceBundle(t,a){this.hasResourceBundle(t,a)&&delete this.data[t][a],this.removeNamespaces(a),this.emit("removed",t,a)}hasResourceBundle(t,a){return this.getResource(t,a)!==void 0}getResourceBundle(t,a){return a||(a=this.options.defaultNS),this.getResource(t,a)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const a=this.getDataByLanguage(t);return!!(a&&Object.keys(a)||[]).find(s=>a[s]&&Object.keys(a[s]).length>0)}toJSON(){return this.data}}var pp={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,t,a,l,s){return r.forEach(u=>{var f;t=((f=this.processors[u])==null?void 0:f.process(t,a,l,s))??t}),t}};const yp=Symbol("i18next/PATH_KEY");function X4(){const r=[],t=Object.create(null);let a;return t.get=(l,s)=>{var u;return(u=a==null?void 0:a.revoke)==null||u.call(a),s===yp?r:(r.push(s),a=Proxy.revocable(l,t),a.proxy)},Proxy.revocable(Object.create(null),t).proxy}function jd(r,t){const{[yp]:a}=r(X4());return a.join((t==null?void 0:t.keySeparator)??".")}const zg={},cd=r=>!ye(r)&&typeof r!="boolean"&&typeof r!="number";class Ns extends Vs{constructor(t,a={}){super(),j4(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Za.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t,a={interpolation:{}}){const l={...a};if(t==null)return!1;const s=this.resolve(t,l);if((s==null?void 0:s.res)===void 0)return!1;const u=cd(s.res);return!(l.returnObjects===!1&&u)}extractFromKey(t,a){let l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");const s=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let u=a.ns||this.options.defaultNS||[];const f=l&&t.indexOf(l)>-1,h=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!Y4(t,l,s);if(f&&!h){const m=t.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:t,namespaces:ye(u)?[u]:u};const p=t.split(l);(l!==s||l===s&&this.options.ns.indexOf(p[0])>-1)&&(u=p.shift()),t=p.join(s)}return{key:t,namespaces:ye(u)?[u]:u}}translate(t,a,l){let s=typeof a=="object"?{...a}:a;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),t==null)return"";typeof t=="function"&&(t=jd(t,{...this.options,...s})),Array.isArray(t)||(t=[String(t)]);const u=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,f=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:h,namespaces:m}=this.extractFromKey(t[t.length-1],s),p=m[m.length-1];let v=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;v===void 0&&(v=":");const g=s.lng||this.language,S=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode")return S?u?{res:`${p}${v}${h}`,usedKey:h,exactUsedKey:h,usedLng:g,usedNS:p,usedParams:this.getUsedParamsDetails(s)}:`${p}${v}${h}`:u?{res:h,usedKey:h,exactUsedKey:h,usedLng:g,usedNS:p,usedParams:this.getUsedParamsDetails(s)}:h;const x=this.resolve(t,s);let M=x==null?void 0:x.res;const E=(x==null?void 0:x.usedKey)||h,w=(x==null?void 0:x.exactUsedKey)||h,A=["[object Number]","[object Function]","[object RegExp]"],L=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,G=!this.i18nFormat||this.i18nFormat.handleAsObject,N=s.count!==void 0&&!ye(s.count),H=Ns.hasDefaultValue(s),V=N?this.pluralResolver.getSuffix(g,s.count,s):"",U=s.ordinal&&N?this.pluralResolver.getSuffix(g,s.count,{ordinal:!1}):"",X=N&&!s.ordinal&&s.count===0,z=X&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${V}`]||s[`defaultValue${U}`]||s.defaultValue;let O=M;G&&!M&&H&&(O=z);const Q=cd(O),q=Object.prototype.toString.apply(O);if(G&&O&&Q&&A.indexOf(q)<0&&!(ye(L)&&Array.isArray(O))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const J=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,O,{...s,ns:m}):`key '${h} (${this.language})' returned an object instead of string.`;return u?(x.res=J,x.usedParams=this.getUsedParamsDetails(s),x):J}if(f){const J=Array.isArray(O),$=J?[]:{},ee=J?w:E;for(const R in O)if(Object.prototype.hasOwnProperty.call(O,R)){const I=`${ee}${f}${R}`;H&&!M?$[R]=this.translate(I,{...s,defaultValue:cd(z)?z[R]:void 0,joinArrays:!1,ns:m}):$[R]=this.translate(I,{...s,joinArrays:!1,ns:m}),$[R]===I&&($[R]=O[R])}M=$}}else if(G&&ye(L)&&Array.isArray(M))M=M.join(L),M&&(M=this.extendTranslation(M,t,s,l));else{let J=!1,$=!1;!this.isValidLookup(M)&&H&&(J=!0,M=z),this.isValidLookup(M)||($=!0,M=h);const R=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&$?void 0:M,I=H&&z!==M&&this.options.updateMissing;if($||J||I){if(this.logger.log(I?"updateKey":"missingKey",g,p,h,I?z:M),f){const re=this.resolve(h,{...s,keySeparator:!1});re&&re.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let W=[];const ie=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ie&&ie[0])for(let re=0;re<ie.length;re++)W.push(ie[re]);else this.options.saveMissingTo==="all"?W=this.languageUtils.toResolveHierarchy(s.lng||this.language):W.push(s.lng||this.language);const se=(re,be,ae)=>{var ge;const ce=H&&ae!==M?ae:R;this.options.missingKeyHandler?this.options.missingKeyHandler(re,p,be,ce,I,s):(ge=this.backendConnector)!=null&&ge.saveMissing&&this.backendConnector.saveMissing(re,p,be,ce,I,s),this.emit("missingKey",re,p,be,M)};this.options.saveMissing&&(this.options.saveMissingPlurals&&N?W.forEach(re=>{const be=this.pluralResolver.getSuffixes(re,s);X&&s[`defaultValue${this.options.pluralSeparator}zero`]&&be.indexOf(`${this.options.pluralSeparator}zero`)<0&&be.push(`${this.options.pluralSeparator}zero`),be.forEach(ae=>{se([re],h+ae,s[`defaultValue${ae}`]||z)})}):se(W,h,z))}M=this.extendTranslation(M,t,s,x,l),$&&M===h&&this.options.appendNamespaceToMissingKey&&(M=`${p}${v}${h}`),($||J)&&this.options.parseMissingKeyHandler&&(M=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}${v}${h}`:h,J?M:void 0,s))}return u?(x.res=M,x.usedParams=this.getUsedParamsDetails(s),x):M}extendTranslation(t,a,l,s,u){var m,p;if((m=this.i18nFormat)!=null&&m.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...l},l.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init({...l,interpolation:{...this.options.interpolation,...l.interpolation}});const v=ye(t)&&(((p=l==null?void 0:l.interpolation)==null?void 0:p.skipOnVariables)!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(v){const x=t.match(this.interpolator.nestingRegexp);g=x&&x.length}let S=l.replace&&!ye(l.replace)?l.replace:l;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),t=this.interpolator.interpolate(t,S,l.lng||this.language||s.usedLng,l),v){const x=t.match(this.interpolator.nestingRegexp),M=x&&x.length;g<M&&(l.nest=!1)}!l.lng&&s&&s.res&&(l.lng=this.language||s.usedLng),l.nest!==!1&&(t=this.interpolator.nest(t,(...x)=>(u==null?void 0:u[0])===x[0]&&!l.context?(this.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${a[0]}`),null):this.translate(...x,a),l)),l.interpolation&&this.interpolator.reset()}const f=l.postProcess||this.options.postProcess,h=ye(f)?[f]:f;return t!=null&&(h!=null&&h.length)&&l.applyPostProcessor!==!1&&(t=pp.handle(h,t,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(l)},...l}:l,this)),t}resolve(t,a={}){let l,s,u,f,h;return ye(t)&&(t=[t]),t.forEach(m=>{if(this.isValidLookup(l))return;const p=this.extractFromKey(m,a),v=p.key;s=v;let g=p.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const S=a.count!==void 0&&!ye(a.count),x=S&&!a.ordinal&&a.count===0,M=a.context!==void 0&&(ye(a.context)||typeof a.context=="number")&&a.context!=="",E=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);g.forEach(w=>{var A,L;this.isValidLookup(l)||(h=w,!zg[`${E[0]}-${w}`]&&((A=this.utils)!=null&&A.hasLoadedNamespace)&&!((L=this.utils)!=null&&L.hasLoadedNamespace(h))&&(zg[`${E[0]}-${w}`]=!0,this.logger.warn(`key "${s}" for languages "${E.join(", ")}" won't get resolved as namespace "${h}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(G=>{var V;if(this.isValidLookup(l))return;f=G;const N=[v];if((V=this.i18nFormat)!=null&&V.addLookupKeys)this.i18nFormat.addLookupKeys(N,v,G,w,a);else{let U;S&&(U=this.pluralResolver.getSuffix(G,a.count,a));const X=`${this.options.pluralSeparator}zero`,z=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(S&&(a.ordinal&&U.indexOf(z)===0&&N.push(v+U.replace(z,this.options.pluralSeparator)),N.push(v+U),x&&N.push(v+X)),M){const O=`${v}${this.options.contextSeparator||"_"}${a.context}`;N.push(O),S&&(a.ordinal&&U.indexOf(z)===0&&N.push(O+U.replace(z,this.options.pluralSeparator)),N.push(O+U),x&&N.push(O+X))}}let H;for(;H=N.pop();)this.isValidLookup(l)||(u=H,l=this.getResource(G,w,H,a))}))})}),{res:l,usedKey:s,exactUsedKey:u,usedLng:f,usedNS:h}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,a,l,s={}){var u;return(u=this.i18nFormat)!=null&&u.getResource?this.i18nFormat.getResource(t,a,l,s):this.resourceStore.getResource(t,a,l,s)}getUsedParamsDetails(t={}){const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],l=t.replace&&!ye(t.replace);let s=l?t.replace:t;if(l&&typeof t.count<"u"&&(s.count=t.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!l){s={...s};for(const u of a)delete s[u]}return s}static hasDefaultValue(t){const a="defaultValue";for(const l in t)if(Object.prototype.hasOwnProperty.call(t,l)&&a===l.substring(0,a.length)&&t[l]!==void 0)return!0;return!1}}class Fg{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Za.create("languageUtils")}getScriptPartFromCode(t){if(t=Xl(t),!t||t.indexOf("-")<0)return null;const a=t.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(t){if(t=Xl(t),!t||t.indexOf("-")<0)return t;const a=t.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(t){if(ye(t)&&t.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(t)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let a;return t.forEach(l=>{if(a)return;const s=this.formatLanguageCode(l);(!this.options.supportedLngs||this.isSupportedCode(s))&&(a=s)}),!a&&this.options.supportedLngs&&t.forEach(l=>{if(a)return;const s=this.getScriptPartFromCode(l);if(this.isSupportedCode(s))return a=s;const u=this.getLanguagePartFromCode(l);if(this.isSupportedCode(u))return a=u;a=this.options.supportedLngs.find(f=>{if(f===u)return f;if(!(f.indexOf("-")<0&&u.indexOf("-")<0)&&(f.indexOf("-")>0&&u.indexOf("-")<0&&f.substring(0,f.indexOf("-"))===u||f.indexOf(u)===0&&u.length>1))return f})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(t,a){if(!t)return[];if(typeof t=="function"&&(t=t(a)),ye(t)&&(t=[t]),Array.isArray(t))return t;if(!a)return t.default||[];let l=t[a];return l||(l=t[this.getScriptPartFromCode(a)]),l||(l=t[this.formatLanguageCode(a)]),l||(l=t[this.getLanguagePartFromCode(a)]),l||(l=t.default),l||[]}toResolveHierarchy(t,a){const l=this.getFallbackCodes((a===!1?[]:a)||this.options.fallbackLng||[],t),s=[],u=f=>{f&&(this.isSupportedCode(f)?s.push(f):this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`))};return ye(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(t))):ye(t)&&u(this.formatLanguageCode(t)),l.forEach(f=>{s.indexOf(f)<0&&u(this.formatLanguageCode(f))}),s}}const kg={zero:0,one:1,two:2,few:3,many:4,other:5},Gg={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Q4{constructor(t,a={}){this.languageUtils=t,this.options=a,this.logger=Za.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(t,a={}){const l=Xl(t==="dev"?"en":t),s=a.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:l,type:s});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let f;try{f=new Intl.PluralRules(l,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Gg;if(!t.match(/-|_/))return Gg;const m=this.languageUtils.getLanguagePartFromCode(t);f=this.getRule(m,a)}return this.pluralRulesCache[u]=f,f}needsPlural(t,a={}){let l=this.getRule(t,a);return l||(l=this.getRule("dev",a)),(l==null?void 0:l.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,a,l={}){return this.getSuffixes(t,l).map(s=>`${a}${s}`)}getSuffixes(t,a={}){let l=this.getRule(t,a);return l||(l=this.getRule("dev",a)),l?l.resolvedOptions().pluralCategories.sort((s,u)=>kg[s]-kg[u]).map(s=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(t,a,l={}){const s=this.getRule(t,l);return s?`${this.options.prepend}${l.ordinal?`ordinal${this.options.prepend}`:""}${s.select(a)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",a,l))}}const jg=(r,t,a,l=".",s=!0)=>{let u=V4(r,t,a);return!u&&s&&ye(a)&&(u=Gd(r,a,l),u===void 0&&(u=Gd(t,a,l))),u},dd=r=>r.replace(/\$/g,"$$$$");class Hg{constructor(t={}){var a;this.logger=Za.create("interpolator"),this.options=t,this.format=((a=t==null?void 0:t.interpolation)==null?void 0:a.format)||(l=>l),this.init(t)}init(t={}){t.interpolation||(t.interpolation={escapeValue:!0});const{escape:a,escapeValue:l,useRawValueToEscape:s,prefix:u,prefixEscaped:f,suffix:h,suffixEscaped:m,formatSeparator:p,unescapeSuffix:v,unescapePrefix:g,nestingPrefix:S,nestingPrefixEscaped:x,nestingSuffix:M,nestingSuffixEscaped:E,nestingOptionsSeparator:w,maxReplaces:A,alwaysFormat:L}=t.interpolation;this.escape=a!==void 0?a:J4,this.escapeValue=l!==void 0?l:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=u?Di(u):f||"{{",this.suffix=h?Di(h):m||"}}",this.formatSeparator=p||",",this.unescapePrefix=v?"":g||"-",this.unescapeSuffix=this.unescapePrefix?"":v||"",this.nestingPrefix=S?Di(S):x||Di("$t("),this.nestingSuffix=M?Di(M):E||Di(")"),this.nestingOptionsSeparator=w||",",this.maxReplaces=A||1e3,this.alwaysFormat=L!==void 0?L:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(a,l)=>(a==null?void 0:a.source)===l?(a.lastIndex=0,a):new RegExp(l,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(t,a,l,s){var x;let u,f,h;const m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},p=M=>{if(M.indexOf(this.formatSeparator)<0){const L=jg(a,m,M,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(L,void 0,l,{...s,...a,interpolationkey:M}):L}const E=M.split(this.formatSeparator),w=E.shift().trim(),A=E.join(this.formatSeparator).trim();return this.format(jg(a,m,w,this.options.keySeparator,this.options.ignoreJSONStructure),A,l,{...s,...a,interpolationkey:w})};this.resetRegExp();const v=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,g=((x=s==null?void 0:s.interpolation)==null?void 0:x.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:M=>dd(M)},{regex:this.regexp,safeValue:M=>this.escapeValue?dd(this.escape(M)):dd(M)}].forEach(M=>{for(h=0;u=M.regex.exec(t);){const E=u[1].trim();if(f=p(E),f===void 0)if(typeof v=="function"){const A=v(t,u,s);f=ye(A)?A:""}else if(s&&Object.prototype.hasOwnProperty.call(s,E))f="";else if(g){f=u[0];continue}else this.logger.warn(`missed to pass in variable ${E} for interpolating ${t}`),f="";else!ye(f)&&!this.useRawValueToEscape&&(f=Rg(f));const w=M.safeValue(f);if(t=t.replace(u[0],w),g?(M.regex.lastIndex+=f.length,M.regex.lastIndex-=u[0].length):M.regex.lastIndex=0,h++,h>=this.maxReplaces)break}}),t}nest(t,a,l={}){let s,u,f;const h=(m,p)=>{const v=this.nestingOptionsSeparator;if(m.indexOf(v)<0)return m;const g=m.split(new RegExp(`${v}[ ]*{`));let S=`{${g[1]}`;m=g[0],S=this.interpolate(S,f);const x=S.match(/'/g),M=S.match(/"/g);(((x==null?void 0:x.length)??0)%2===0&&!M||M.length%2!==0)&&(S=S.replace(/'/g,'"'));try{f=JSON.parse(S),p&&(f={...p,...f})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${m}`,E),`${m}${v}${S}`}return f.defaultValue&&f.defaultValue.indexOf(this.prefix)>-1&&delete f.defaultValue,m};for(;s=this.nestingRegexp.exec(t);){let m=[];f={...l},f=f.replace&&!ye(f.replace)?f.replace:f,f.applyPostProcessor=!1,delete f.defaultValue;const p=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(p!==-1&&(m=s[1].slice(p).split(this.formatSeparator).map(v=>v.trim()).filter(Boolean),s[1]=s[1].slice(0,p)),u=a(h.call(this,s[1].trim(),f),f),u&&s[0]===t&&!ye(u))return u;ye(u)||(u=Rg(u)),u||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`),u=""),m.length&&(u=m.reduce((v,g)=>this.format(v,g,l.lng,{...l,interpolationkey:s[1].trim()}),u.trim())),t=t.replace(s[0],u),this.regexp.lastIndex=0}return t}}const W4=r=>{let t=r.toLowerCase().trim();const a={};if(r.indexOf("(")>-1){const l=r.split("(");t=l[0].toLowerCase().trim();const s=l[1].substring(0,l[1].length-1);t==="currency"&&s.indexOf(":")<0?a.currency||(a.currency=s.trim()):t==="relativetime"&&s.indexOf(":")<0?a.range||(a.range=s.trim()):s.split(";").forEach(f=>{if(f){const[h,...m]=f.split(":"),p=m.join(":").trim().replace(/^'+|'+$/g,""),v=h.trim();a[v]||(a[v]=p),p==="false"&&(a[v]=!1),p==="true"&&(a[v]=!0),isNaN(p)||(a[v]=parseInt(p,10))}})}return{formatName:t,formatOptions:a}},_g=r=>{const t={};return(a,l,s)=>{let u=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(u={...u,[s.interpolationkey]:void 0});const f=l+JSON.stringify(u);let h=t[f];return h||(h=r(Xl(l),s),t[f]=h),h(a)}},$4=r=>(t,a,l)=>r(Xl(a),l)(t);class eb{constructor(t={}){this.logger=Za.create("formatter"),this.options=t,this.init(t)}init(t,a={interpolation:{}}){this.formatSeparator=a.interpolation.formatSeparator||",";const l=a.cacheInBuiltFormats?_g:$4;this.formats={number:l((s,u)=>{const f=new Intl.NumberFormat(s,{...u});return h=>f.format(h)}),currency:l((s,u)=>{const f=new Intl.NumberFormat(s,{...u,style:"currency"});return h=>f.format(h)}),datetime:l((s,u)=>{const f=new Intl.DateTimeFormat(s,{...u});return h=>f.format(h)}),relativetime:l((s,u)=>{const f=new Intl.RelativeTimeFormat(s,{...u});return h=>f.format(h,u.range||"day")}),list:l((s,u)=>{const f=new Intl.ListFormat(s,{...u});return h=>f.format(h)})}}add(t,a){this.formats[t.toLowerCase().trim()]=a}addCached(t,a){this.formats[t.toLowerCase().trim()]=_g(a)}format(t,a,l,s={}){const u=a.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(h=>h.indexOf(")")>-1)){const h=u.findIndex(m=>m.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,h)].join(this.formatSeparator)}return u.reduce((h,m)=>{var g;const{formatName:p,formatOptions:v}=W4(m);if(this.formats[p]){let S=h;try{const x=((g=s==null?void 0:s.formatParams)==null?void 0:g[s.interpolationkey])||{},M=x.locale||x.lng||s.locale||s.lng||l;S=this.formats[p](h,M,{...v,...s,...x})}catch(x){this.logger.warn(x)}return S}else this.logger.warn(`there was no format function for ${p}`);return h},t)}}const nb=(r,t)=>{r.pending[t]!==void 0&&(delete r.pending[t],r.pendingCount--)};class ab extends Vs{constructor(t,a,l,s={}){var u,f;super(),this.backend=t,this.store=a,this.services=l,this.languageUtils=l.languageUtils,this.options=s,this.logger=Za.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(f=(u=this.backend)==null?void 0:u.init)==null||f.call(u,l,s.backend,s)}queueLoad(t,a,l,s){const u={},f={},h={},m={};return t.forEach(p=>{let v=!0;a.forEach(g=>{const S=`${p}|${g}`;!l.reload&&this.store.hasResourceBundle(p,g)?this.state[S]=2:this.state[S]<0||(this.state[S]===1?f[S]===void 0&&(f[S]=!0):(this.state[S]=1,v=!1,f[S]===void 0&&(f[S]=!0),u[S]===void 0&&(u[S]=!0),m[g]===void 0&&(m[g]=!0)))}),v||(h[p]=!0)}),(Object.keys(u).length||Object.keys(f).length)&&this.queue.push({pending:f,pendingCount:Object.keys(f).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(u),pending:Object.keys(f),toLoadLanguages:Object.keys(h),toLoadNamespaces:Object.keys(m)}}loaded(t,a,l){const s=t.split("|"),u=s[0],f=s[1];a&&this.emit("failedLoading",u,f,a),!a&&l&&this.store.addResourceBundle(u,f,l,void 0,void 0,{skipCopy:!0}),this.state[t]=a?-1:2,a&&l&&(this.state[t]=0);const h={};this.queue.forEach(m=>{_4(m.loaded,[u],f),nb(m,t),a&&m.errors.push(a),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(p=>{h[p]||(h[p]={});const v=m.loaded[p];v.length&&v.forEach(g=>{h[p][g]===void 0&&(h[p][g]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",h),this.queue=this.queue.filter(m=>!m.done)}read(t,a,l,s=0,u=this.retryTimeout,f){if(!t.length)return f(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:a,fcName:l,tried:s,wait:u,callback:f});return}this.readingCalls++;const h=(p,v)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(p&&v&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,t,a,l,s+1,u*2,f)},u);return}f(p,v)},m=this.backend[l].bind(this.backend);if(m.length===2){try{const p=m(t,a);p&&typeof p.then=="function"?p.then(v=>h(null,v)).catch(h):h(null,p)}catch(p){h(p)}return}return m(t,a,h)}prepareLoading(t,a,l={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();ye(t)&&(t=this.languageUtils.toResolveHierarchy(t)),ye(a)&&(a=[a]);const u=this.queueLoad(t,a,l,s);if(!u.toLoad.length)return u.pending.length||s(),null;u.toLoad.forEach(f=>{this.loadOne(f)})}load(t,a,l){this.prepareLoading(t,a,{},l)}reload(t,a,l){this.prepareLoading(t,a,{reload:!0},l)}loadOne(t,a=""){const l=t.split("|"),s=l[0],u=l[1];this.read(s,u,"read",void 0,void 0,(f,h)=>{f&&this.logger.warn(`${a}loading namespace ${u} for language ${s} failed`,f),!f&&h&&this.logger.log(`${a}loaded namespace ${u} for language ${s}`,h),this.loaded(t,f,h)})}saveMissing(t,a,l,s,u,f={},h=()=>{}){var m,p,v,g,S;if((p=(m=this.services)==null?void 0:m.utils)!=null&&p.hasLoadedNamespace&&!((g=(v=this.services)==null?void 0:v.utils)!=null&&g.hasLoadedNamespace(a))){this.logger.warn(`did not save key "${l}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if((S=this.backend)!=null&&S.create){const x={...f,isUpdate:u},M=this.backend.create.bind(this.backend);if(M.length<6)try{let E;M.length===5?E=M(t,a,l,s,x):E=M(t,a,l,s),E&&typeof E.then=="function"?E.then(w=>h(null,w)).catch(h):h(null,E)}catch(E){h(E)}else M(t,a,l,s,h,x)}!t||!t[0]||this.store.addResource(t[0],a,l,s)}}}const fd=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let t={};if(typeof r[1]=="object"&&(t=r[1]),ye(r[1])&&(t.defaultValue=r[1]),ye(r[2])&&(t.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const a=r[3]||r[2];Object.keys(a).forEach(l=>{t[l]=a[l]})}return t},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Vg=r=>{var t,a;return ye(r.ns)&&(r.ns=[r.ns]),ye(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),ye(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((a=(t=r.supportedLngs)==null?void 0:t.indexOf)==null?void 0:a.call(t,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},ms=()=>{},rb=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(a=>{typeof r[a]=="function"&&(r[a]=r[a].bind(r))})};let Ig=!1;const tb=r=>{var t,a,l,s,u,f,h,m,p;return!!(((l=(a=(t=r==null?void 0:r.modules)==null?void 0:t.backend)==null?void 0:a.name)==null?void 0:l.indexOf("Locize"))>0||((h=(f=(u=(s=r==null?void 0:r.modules)==null?void 0:s.backend)==null?void 0:u.constructor)==null?void 0:f.name)==null?void 0:h.indexOf("Locize"))>0||(p=(m=r==null?void 0:r.options)==null?void 0:m.backend)!=null&&p.backends&&r.options.backend.backends.some(v=>{var g,S,x;return((g=v==null?void 0:v.name)==null?void 0:g.indexOf("Locize"))>0||((x=(S=v==null?void 0:v.constructor)==null?void 0:S.name)==null?void 0:x.indexOf("Locize"))>0}))};class Ul extends Vs{constructor(t={},a){if(super(),this.options=Vg(t),this.services={},this.logger=Za,this.modules={external:[]},rb(this),a&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,a),this;setTimeout(()=>{this.init(t,a)},0)}}init(t={},a){this.isInitializing=!0,typeof t=="function"&&(a=t,t={}),t.defaultNS==null&&t.ns&&(ye(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const l=fd();this.options={...l,...this.options,...Vg(t)},this.options.interpolation={...l.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=l.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!tb(this)&&!Ig&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),Ig=!0);const s=p=>p?typeof p=="function"?new p:p:null;if(!this.options.isClone){this.modules.logger?Za.init(s(this.modules.logger),this.options):Za.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:p=eb;const v=new Fg(this.options);this.store=new Og(this.options.resources,this.options);const g=this.services;g.logger=Za,g.resourceStore=this.store,g.languageUtils=v,g.pluralResolver=new Q4(v,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==l.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),p&&(!this.options.interpolation.format||this.options.interpolation.format===l.interpolation.format)&&(g.formatter=s(p),g.formatter.init&&g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new Hg(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new ab(s(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",(x,...M)=>{this.emit(x,...M)}),this.modules.languageDetector&&(g.languageDetector=s(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=s(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new Ns(this.services,this.options),this.translator.on("*",(x,...M)=>{this.emit(x,...M)}),this.modules.external.forEach(x=>{x.init&&x.init(this)})}if(this.format=this.options.interpolation.format,a||(a=ms),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=(...v)=>this.store[p](...v)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=(...v)=>(this.store[p](...v),this)});const h=Ll(),m=()=>{const p=(v,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),h.resolve(g),a(v,g)};if(this.languages&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),h}loadResources(t,a=ms){var u,f;let l=a;const s=ye(t)?t:this.language;if(typeof t=="function"&&(l=t),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return l();const h=[],m=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(g=>{g!=="cimode"&&h.indexOf(g)<0&&h.push(g)})};s?m(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(v=>m(v)),(f=(u=this.options.preload)==null?void 0:u.forEach)==null||f.call(u,p=>m(p)),this.services.backendConnector.load(h,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),l(p)})}else l(null)}reloadResources(t,a,l){const s=Ll();return typeof t=="function"&&(l=t,t=void 0),typeof a=="function"&&(l=a,a=void 0),t||(t=this.languages),a||(a=this.options.ns),l||(l=ms),this.services.backendConnector.reload(t,a,u=>{s.resolve(),l(u)}),s}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&pp.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1)){for(let a=0;a<this.languages.length;a++){const l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}!this.resolvedLanguage&&this.languages.indexOf(t)<0&&this.store.hasLanguageSomeTranslations(t)&&(this.resolvedLanguage=t,this.languages.unshift(t))}}changeLanguage(t,a){this.isLanguageChangingTo=t;const l=Ll();this.emit("languageChanging",t);const s=h=>{this.language=h,this.languages=this.services.languageUtils.toResolveHierarchy(h),this.resolvedLanguage=void 0,this.setResolvedLanguage(h)},u=(h,m)=>{m?this.isLanguageChangingTo===t&&(s(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,l.resolve((...p)=>this.t(...p)),a&&a(h,(...p)=>this.t(...p))},f=h=>{var v,g;!t&&!h&&this.services.languageDetector&&(h=[]);const m=ye(h)?h:h&&h[0],p=this.store.hasLanguageSomeTranslations(m)?m:this.services.languageUtils.getBestMatchFromCodes(ye(h)?[h]:h);p&&(this.language||s(p),this.translator.language||this.translator.changeLanguage(p),(g=(v=this.services.languageDetector)==null?void 0:v.cacheUserLanguage)==null||g.call(v,p)),this.loadResources(p,S=>{u(S,p)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(t),l}getFixedT(t,a,l){const s=(u,f,...h)=>{let m;typeof f!="object"?m=this.options.overloadTranslationOptionHandler([u,f].concat(h)):m={...f},m.lng=m.lng||s.lng,m.lngs=m.lngs||s.lngs,m.ns=m.ns||s.ns,m.keyPrefix!==""&&(m.keyPrefix=m.keyPrefix||l||s.keyPrefix);const p=this.options.keySeparator||".";let v;return m.keyPrefix&&Array.isArray(u)?v=u.map(g=>(typeof g=="function"&&(g=jd(g,{...this.options,...f})),`${m.keyPrefix}${p}${g}`)):(typeof u=="function"&&(u=jd(u,{...this.options,...f})),v=m.keyPrefix?`${m.keyPrefix}${p}${u}`:u),this.t(v,m)};return ye(t)?s.lng=t:s.lngs=t,s.ns=a,s.keyPrefix=l,s}t(...t){var a;return(a=this.translator)==null?void 0:a.translate(...t)}exists(...t){var a;return(a=this.translator)==null?void 0:a.exists(...t)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t,a={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const l=a.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(l.toLowerCase()==="cimode")return!0;const f=(h,m)=>{const p=this.services.backendConnector.state[`${h}|${m}`];return p===-1||p===0||p===2};if(a.precheck){const h=a.precheck(this,f);if(h!==void 0)return h}return!!(this.hasResourceBundle(l,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||f(l,t)&&(!s||f(u,t)))}loadNamespaces(t,a){const l=Ll();return this.options.ns?(ye(t)&&(t=[t]),t.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{l.resolve(),a&&a(s)}),l):(a&&a(),Promise.resolve())}loadLanguages(t,a){const l=Ll();ye(t)&&(t=[t]);const s=this.options.preload||[],u=t.filter(f=>s.indexOf(f)<0&&this.services.languageUtils.isSupportedCode(f));return u.length?(this.options.preload=s.concat(u),this.loadResources(f=>{l.resolve(),a&&a(f)}),l):(a&&a(),Promise.resolve())}dir(t){var s,u;if(t||(t=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!t)return"rtl";try{const f=new Intl.Locale(t);if(f&&f.getTextInfo){const h=f.getTextInfo();if(h&&h.direction)return h.direction}}catch{}const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=((u=this.services)==null?void 0:u.languageUtils)||new Fg(fd());return t.toLowerCase().indexOf("-latn")>1?"ltr":a.indexOf(l.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(t={},a){const l=new Ul(t,a);return l.createInstance=Ul.createInstance,l}cloneInstance(t={},a=ms){const l=t.forkResourceStore;l&&delete t.forkResourceStore;const s={...this.options,...t,isClone:!0},u=new Ul(s);if((t.debug!==void 0||t.prefix!==void 0)&&(u.logger=u.logger.clone(t)),["store","services","language"].forEach(h=>{u[h]=this[h]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},l){const h=Object.keys(this.store.data).reduce((m,p)=>(m[p]={...this.store.data[p]},m[p]=Object.keys(m[p]).reduce((v,g)=>(v[g]={...m[p][g]},v),m[p]),m),{});u.store=new Og(h,s),u.services.resourceStore=u.store}if(t.interpolation){const m={...fd().interpolation,...this.options.interpolation,...t.interpolation},p={...s,interpolation:m};u.services.interpolator=new Hg(p)}return u.translator=new Ns(u.services,s),u.translator.on("*",(h,...m)=>{u.emit(h,...m)}),u.init(s,a),u.translator.options=s,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Un=Ul.createInstance();Un.createInstance;Un.dir;Un.init;Un.loadResources;Un.reloadResources;Un.use;Un.changeLanguage;Un.getFixedT;Un.t;Un.exists;Un.setDefaultNamespace;Un.hasLoadedNamespace;Un.loadNamespaces;Un.loadLanguages;const ib=(r,t,a,l)=>{var u,f,h,m;const s=[a,{code:t,...l||{}}];if((f=(u=r==null?void 0:r.services)==null?void 0:u.logger)!=null&&f.forward)return r.services.logger.forward(s,"warn","react-i18next::",!0);Ot(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),(m=(h=r==null?void 0:r.services)==null?void 0:h.logger)!=null&&m.warn?r.services.logger.warn(...s):console!=null&&console.warn&&console.warn(...s)},Jg={},bp=(r,t,a,l)=>{Ot(a)&&Jg[a]||(Ot(a)&&(Jg[a]=new Date),ib(r,t,a,l))},vp=(r,t)=>()=>{if(r.isInitialized)t();else{const a=()=>{setTimeout(()=>{r.off("initialized",a)},0),t()};r.on("initialized",a)}},Hd=(r,t,a)=>{r.loadNamespaces(t,vp(r,a))},qg=(r,t,a,l)=>{if(Ot(a)&&(a=[a]),r.options.preload&&r.options.preload.indexOf(t)>-1)return Hd(r,a,l);a.forEach(s=>{r.options.ns.indexOf(s)<0&&r.options.ns.push(s)}),r.loadLanguages(t,vp(r,l))},lb=(r,t,a={})=>!t.languages||!t.languages.length?(bp(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(r,{lng:a.lng,precheck:(l,s)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!s(l.isLanguageChangingTo,r))return!1}}),Ot=r=>typeof r=="string",ob=r=>typeof r=="object"&&r!==null,sb=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ub={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},cb=r=>ub[r],db=r=>r.replace(sb,cb);let _d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:db,transDefaultProps:void 0};const fb=(r={})=>{_d={..._d,...r}},hb=()=>_d;let Sp;const mb=r=>{Sp=r},gb=()=>Sp,pb={type:"3rdParty",init(r){fb(r.options.react),mb(r)}},yb=D.createContext();class bb{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var hd={exports:{}},md={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function vb(){if(Ug)return md;Ug=1;var r=lf();function t(g,S){return g===S&&(g!==0||1/g===1/S)||g!==g&&S!==S}var a=typeof Object.is=="function"?Object.is:t,l=r.useState,s=r.useEffect,u=r.useLayoutEffect,f=r.useDebugValue;function h(g,S){var x=S(),M=l({inst:{value:x,getSnapshot:S}}),E=M[0].inst,w=M[1];return u(function(){E.value=x,E.getSnapshot=S,m(E)&&w({inst:E})},[g,x,S]),s(function(){return m(E)&&w({inst:E}),g(function(){m(E)&&w({inst:E})})},[g]),f(x),x}function m(g){var S=g.getSnapshot;g=g.value;try{var x=S();return!a(g,x)}catch{return!0}}function p(g,S){return S()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:h;return md.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:v,md}var Kg;function Mp(){return Kg||(Kg=1,hd.exports=vb()),hd.exports}var Sb=Mp();const Mb=(r,t)=>Ot(t)?t:ob(t)&&Ot(t.defaultValue)?t.defaultValue:Array.isArray(r)?r[r.length-1]:r,Cb={t:Mb,ready:!1},xb=()=>()=>{},Ye=(r,t={})=>{var z,O,Q;const{i18n:a}=t,{i18n:l,defaultNS:s}=D.useContext(yb)||{},u=a||l||gb();u&&!u.reportNamespaces&&(u.reportNamespaces=new bb),u||bp(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const f=D.useMemo(()=>{var q;return{...hb(),...(q=u==null?void 0:u.options)==null?void 0:q.react,...t}},[u,t]),{useSuspense:h,keyPrefix:m}=f,p=r||s||((z=u==null?void 0:u.options)==null?void 0:z.defaultNS),v=Ot(p)?[p]:p||["translation"],g=D.useMemo(()=>v,v);(Q=(O=u==null?void 0:u.reportNamespaces)==null?void 0:O.addUsedNamespaces)==null||Q.call(O,g);const S=D.useRef(0),x=D.useCallback(q=>{if(!u)return xb;const{bindI18n:J,bindI18nStore:$}=f,ee=()=>{S.current+=1,q()};return J&&u.on(J,ee),$&&u.store.on($,ee),()=>{J&&J.split(" ").forEach(R=>u.off(R,ee)),$&&$.split(" ").forEach(R=>u.store.off(R,ee))}},[u,f]),M=D.useRef(),E=D.useCallback(()=>{if(!u)return Cb;const q=!!(u.isInitialized||u.initializedStoreOnce)&&g.every(W=>lb(W,u,f)),J=t.lng||u.language,$=S.current,ee=M.current;if(ee&&ee.ready===q&&ee.lng===J&&ee.keyPrefix===m&&ee.revision===$)return ee;const I={t:u.getFixedT(J,f.nsMode==="fallback"?g:g[0],m),ready:q,lng:J,keyPrefix:m,revision:$};return M.current=I,I},[u,g,m,f,t.lng]),[w,A]=D.useState(0),{t:L,ready:G}=Sb.useSyncExternalStore(x,E,E);D.useEffect(()=>{if(u&&!G&&!h){const q=()=>A(J=>J+1);t.lng?qg(u,t.lng,g,q):Hd(u,g,q)}},[u,t.lng,g,G,h,w]);const N=u||{},H=D.useRef(null),V=D.useRef(),U=q=>{const J=Object.getOwnPropertyDescriptors(q);J.__original&&delete J.__original;const $=Object.create(Object.getPrototypeOf(q),J);if(!Object.prototype.hasOwnProperty.call($,"__original"))try{Object.defineProperty($,"__original",{value:q,writable:!1,enumerable:!1,configurable:!1})}catch{}return $},X=D.useMemo(()=>{const q=N,J=q==null?void 0:q.language;let $=q;q&&(H.current&&H.current.__original===q?V.current!==J?($=U(q),H.current=$,V.current=J):$=H.current:($=U(q),H.current=$,V.current=J));const ee=[L,$,G];return ee.t=L,ee.i18n=$,ee.ready=G,ee},[L,N,G,N.resolvedLanguage,N.language,N.languages]);if(u&&h&&!G)throw new Promise(q=>{const J=()=>q();t.lng?qg(u,t.lng,g,J):Hd(u,g,J)});return X};function Cp(){return typeof navigator>"u"?"en":navigator.language.startsWith("fr")?"fr":"en"}const Yg={fr:{chooseLanguage:"Choisissez votre langue",title:"Accélérez votre prise en charge.",subtitle:"Notre admission en ligne vous permet de préparer votre venue à l'Hôpital de La Tour.",confidentiality:"Vos données sont traitées de façon confidentielle.",button:"Démarrer l'admission",badgeProtected:"Vos données sont protégées",badgeTime:"Seulement 5 minutes"},en:{chooseLanguage:"Choose your language",title:"Speed up your care.",subtitle:"Our online admission allows you to prepare your visit to La Tour Hospital.",confidentiality:"Your data is treated confidentially.",button:"Start online admission",badgeProtected:"Your data is protected",badgeTime:"Only 5 minutes"}},Zg={fr:{title:"Vérification de sécurité",subtitle:"Pour accéder à votre dossier, veuillez confirmer votre date de naissance",label:"Date de naissance",placeholder:"JJ.MM.YYYY",continue:"Continuer",back:"Retour",required:"La date de naissance est requise",invalid:"Date invalide",futureDate:"La date de naissance ne peut pas être dans le futur",verifying:"Vérification...",invalidBirthDate:"Date de naissance invalide",wrongDate:"La date de naissance ne correspond pas à celle enregistrée dans votre dossier",connectionError:"Erreur de connexion, veuillez réessayer"},en:{title:"Security Verification",subtitle:"To access your file, please confirm your date of birth",label:"Date of birth",placeholder:"DD.MM.YYYY",continue:"Continue",back:"Back",required:"Date of birth is required",invalid:"Invalid date",futureDate:"Date of birth cannot be in the future",verifying:"Verifying...",invalidBirthDate:"Invalid birth date",wrongDate:"The date of birth does not match the one in your file",connectionError:"Connection error, please try again"}},Xg={fr:{title:"Code de vérification",subtitle:"Un code à 6 chiffres vous a été envoyé par SMS au numéro se terminant par {{digits}}",label:"Code de vérification",placeholder:"000000",continue:"Vérifier",back:"Retour",required:"Le code est requis",invalid:"Code invalide (6 chiffres requis)",verifying:"Vérification...",resend:"Renvoyer le code",resendIn_one:"Renvoyer le code dans {{count}} seconde",resendIn_other:"Renvoyer le code dans {{count}} secondes",invalidCode:"Le code est incorrect",connectionError:"Erreur de connexion, veuillez réessayer"},en:{title:"Verification Code",subtitle:"A 6-digit code has been sent by SMS to the number ending in {{digits}}",label:"Verification code",placeholder:"000000",continue:"Verify",back:"Back",required:"Code is required",invalid:"Invalid code (6 digits required)",verifying:"Verifying...",resend:"Resend code",resendIn_one:"Resend code in {{count}} second",resendIn_other:"Resend code in {{count}} seconds",invalidCode:"The code is incorrect",connectionError:"Connection error, please try again"}},Qg={fr:{title:"Identification",subtitle:"Aidez-nous à mieux comprendre votre situation",reasonLabel:"Raison de la venue",illness:"Maladie",accident:"Accident",hasEmployerLabel:"J'ai un employeur",yes:"Oui",no:"Non",insuranceLabel:"Type d'assurance",swiss:"Assurance LAMal",international:"Autre assurance",auto:"Autopayeur",documentsLabel:"Documents requis",identityCard:"Carte d'identité ou passport",insuranceCard:"Carte d'assurance maladie (base)",uploadText:"Glisser-déposer ou cliquer",consentsLabel:"Consentements",consentNLPDPrefix:"J'accepte la ",consentNLPDLink:"Politique de confidentialité",privacyPolicyUrl:"https://www.la-tour.ch/fr/informations-generales/politique-de-confidentialite",consentMarketing:"J'aimerais être informé des services ou offres complémentaires de l'Hôpital de La Tour en lien avec mon parcours de soins et mes besoins.",continue:"Continuer",back:"Retour",reasonRequired:"Veuillez sélectionner une raison",insuranceRequired:"Veuillez sélectionner un type d'assurance",identityCardRequired:"La carte d'identité est obligatoire",insuranceCardRequired:"La carte d'assurance est obligatoire",consentNLPDRequired:"Le consentement nLPD est obligatoire",optional:"Optionnel",ocrFailed:"La lecture automatique a échoué. Veuillez remplir les champs manuellement.",fileTooLarge:"Le fichier est trop volumineux. Taille maximale: 10 MB",invalidFileFormat:"Format de fichier non valide. Formats acceptés: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",fileTooLargeAndInvalidFormat:"Le fichier est trop volumineux et le format n'est pas valide. Taille maximale: 10 MB. Formats acceptés: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",insuranceHelp:"En savoir plus",insuranceHelpTitle:"Choix du type d'assurance",insuranceHelpSwiss:"Assurance LAMal",insuranceHelpSwissDesc:"Concerne les personnes affiliées au système d'assurance maladie obligatoire suisse (LaMAL/KVG). C'est le cas pour la majorité des résidents en Suisse.",insuranceHelpInternational:"Autre assurance",insuranceHelpInternationalDesc:"Sélectionnez cette option si votre couverture ne relève pas de l'assurance de base LaMAL. Cela inclut principalement deux cas :",insuranceHelpInternationalItem1:"Assurances d'organisations internationales : Si vous êtes affilié(e) au régime d'assurance de votre employeur (ex: CERN, ONU, missions diplomatiques).",insuranceHelpInternationalItem2:"Assurances privées suisses (hors LaMAL) : Si vous disposez d'une assurance privée qui n'opère pas dans le cadre de la LaMAL (ex: certaines polices d'AXA, Zurich, etc.).",insuranceHelpAuto:"Autopayeur",insuranceHelpAutoDesc:"Sélectionnez cette option si vous prévoyez de régler vous-même l'intégralité des frais de votre visite, sans passer par une assurance. Un acompte pourra vous être demandé lors de votre admission."},en:{title:"Identification",subtitle:"Help us better understand your situation",reasonLabel:"Reason for visit",illness:"Illness",accident:"Accident",hasEmployerLabel:"I have an employer",yes:"Yes",no:"No",insuranceLabel:"Insurance type",swiss:"LAMal insurance",international:"Other insurance",auto:"Self-payer",documentsLabel:"Required documents",identityCard:"ID card or passport",insuranceCard:"Insurance card (Basic)",uploadText:"Drag & drop or click",consentsLabel:"Consents",consentNLPDPrefix:"I accept the ",consentNLPDLink:"Privacy policy",privacyPolicyUrl:"https://www.la-tour.ch/en/general-information/privacy-policy",consentMarketing:"I would like to be informed about any additional services or offerings at Hôpital de La Tour that relate to my care pathway and needs.",continue:"Continue",back:"Back",reasonRequired:"Please select a reason",insuranceRequired:"Please select an insurance type",identityCardRequired:"Identity card is required",insuranceCardRequired:"Insurance card is required",consentNLPDRequired:"Data protection consent is required",optional:"Optional",ocrFailed:"Automatic reading failed. Please fill in the fields manually.",fileTooLarge:"File is too large. Maximum size: 10 MB",invalidFileFormat:"Invalid file format. Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",fileTooLargeAndInvalidFormat:"File is too large and format is invalid. Maximum size: 10 MB. Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF",insuranceHelp:"Learn more",insuranceHelpTitle:"Insurance type selection",insuranceHelpSwiss:"Swiss insurance",insuranceHelpSwissDesc:"For individuals affiliated with the Swiss mandatory health insurance system (LAMal/KVG). This applies to the majority of residents in Switzerland.",insuranceHelpInternational:"Other insurance",insuranceHelpInternationalDesc:"Select this option if your coverage is not part of LAMal basic insurance. This primarily includes two cases:",insuranceHelpInternationalItem1:"International organization insurance: If you are affiliated with your employer's insurance scheme (e.g., CERN, UN, diplomatic missions).",insuranceHelpInternationalItem2:"Swiss private insurance (outside LAMal): If you have private insurance that does not operate within the LAMal framework (e.g., certain policies from AXA, Zurich, etc.).",insuranceHelpAuto:"Self-payer",insuranceHelpAutoDesc:"Select this option if you plan to pay for your visit in full yourself, without going through insurance. A deposit may be requested upon admission."}},Wg={fr:{title:"Informations administratives",subtitle:"Complétez vos informations personnelles",identity:"Identité",firstName:"Prénom",lastName:"Nom",birthDate:"Date de naissance",birthDatePlaceholder:"JJ.MM.YYYY",gender:"Genre",genderPlaceholder:"Sélectionner",male:"Homme",female:"Femme",other:"Non-binaire",nationality:"Nationalité",nationalityPlaceholder:"Sélectionner",contact:"Coordonnées",street:"Rue",npa:"NPA (Code Postal)",city:"Ville",country:"Pays",countryPlaceholder:"Sélectionnez",email:"Email",employer:"Employeur",profession:"Profession",employerName:"Nom de l'employeur",employerAddress:"Adresse de l'employeur",doctors:"Médecins",referringDoctor:"Médecin envoyeur",generalPractitioner:"Médecin de famille",accidentData:"Données Accident",accidentDate:"Date de l'accident",accidentDatePlaceholder:"JJ.MM.YYYY",accidentInsurance:"Nom de l'assurance accident",claimNumber:"N° de sinistre",insuranceData:"Assurance & Couverture Sociale",avsNumber:"Numéro AVS",basicInsurance:"Nom de l'assurance de base",cardNumber:"N° de carte d'assurance de base",policyNumber:"Assurance de base - N° de police",complementaryInsurance:"N° de carte d'assurance complémentaire",continue:"Soumettre",submitting:"Envoi en cours...",back:"Retour",required:"Ce champ est requis",invalidEmail:"Format email invalide (exemple: nom@domaine.com)",invalidNpa:"Code postal invalide (chiffres uniquement)",invalidDate:"Date invalide",invalidCardNumber:"Le numéro de carte doit contenir exactement 20 chiffres",invalidAvsNumber:"Le numéro AVS doit contenir exactement 13 chiffres",optional:"Optionnel",noResults:"Aucun résultat",selectPlaceholder:"",ocrInfoToast:"Vos données personnelles ont été pré-remplies à partir de vos documents. Veuillez vérifier et compléter les informations."},en:{title:"Administrative Information",subtitle:"Complete your personal information",identity:"Identity",firstName:"First name",lastName:"Last name",birthDate:"Date of birth",birthDatePlaceholder:"DD.MM.YYYY",gender:"Gender",genderPlaceholder:"Select",male:"Male",female:"Female",other:"Non-binary",nationality:"Nationality",nationalityPlaceholder:"Select",contact:"Contact",street:"Street",npa:"Postal code",city:"City",country:"Country",countryPlaceholder:"Select",email:"Email",employer:"Employer",profession:"Profession",employerName:"Employer name",employerAddress:"Employer address",doctors:"Doctors",referringDoctor:"Referring doctor",generalPractitioner:"General Practitioner",accidentData:"Accident Data",accidentDate:"Accident date",accidentDatePlaceholder:"DD.MM.YYYY",accidentInsurance:"Accident insurance name",claimNumber:"Claim No.",insuranceData:"Insurance & Social Coverage",avsNumber:"AHV Number",basicInsurance:"Basic insurance name",cardNumber:"Basic insurance card number",policyNumber:"Basic insurance - Policy number",complementaryInsurance:"Complementary insurance card number",continue:"Submit",submitting:"Submitting...",back:"Back",required:"This field is required",invalidEmail:"Invalid email format (example: name@domain.com)",invalidNpa:"Invalid postal code (digits only)",invalidDate:"Invalid date",invalidCardNumber:"Card number must contain exactly 20 digits",invalidAvsNumber:"AHV number must contain exactly 13 digits",optional:"Optional",noResults:"No results",selectPlaceholder:"",ocrInfoToast:"Your personal data has been pre-filled from your documents. Please review and complete the information."}},$g={fr:{title:"Admission en ligne envoyée avec succès",message:"Merci d'avoir soumis votre demande. Elle sera traitée afin de préparer votre arrivée.",button:"Comment se rendre à l'hôpital ?",link:"https://www.la-tour.ch/fr/hopital-de-la-tour/se-rendre-lhopital-de-la-tour"},en:{title:"Online admission submitted successfully",message:"Thank you for submitting your request. It will be processed to prepare your arrival.",button:"How to get to the hospital?",link:"https://www.la-tour.ch/en/hopital-de-la-tour/getting-hopital-de-la-tour"}},e0={fr:{title:"Lien invalide",message:"Ce lien de préadmission n'est plus valide ou a expiré.",contact:"Si vous pensez qu'il s'agit d'une erreur, veuillez contacter l'hôpital.",emailLabel:"Email",emailAddress:"digital@latour.ch",emailLink:"mailto:digital@latour.ch",selectLanguage:"Choisissez votre langue"},en:{title:"Invalid Link",message:"This pre-admission link is no longer valid or has expired.",contact:"If you believe this is an error, please contact the hospital.",emailLabel:"Email",emailAddress:"digital@latour.ch",emailLink:"mailto:digital@latour.ch",selectLanguage:"Choose your language"}},n0={fr:{short:"Chargement...",message:"Veuillez patienter, vos documents sont en cours de traitement",ocrTimeout:"La reconnaissance de vos documents n'a pas abouti. Veuillez vérifier et compléter les informations manuellement.",notCovered:"Cette carte ne couvre pas l'assurance de base obligatoire (LAMal). Veuillez télécharger une autre carte d'assurance."},en:{short:"Loading...",message:"Please wait, your documents are being processed",ocrTimeout:"Document recognition was not successful. Please verify and complete the information manually.",notCovered:"This card does not cover mandatory basic insurance (LAMal). Please upload another insurance card."}},a0={fr:{title:"Une erreur est survenue",reload:"Recharger"},en:{title:"Something went wrong",reload:"Reload"}},r0={fr:{qualification:"Identification",admin:"Informations",success:"Terminé"},en:{qualification:"Identification",admin:"Information",success:"Complete"}},t0={fr:{title:"Page introuvable",message:"La page que vous recherchez n'existe pas ou a été déplacée.",button:"Retour à l'accueil"},en:{title:"Page not found",message:"The page you are looking for does not exist or has been moved.",button:"Back to home"}},Ab={fr:{landing:Yg.fr,security:Zg.fr,otp:Xg.fr,qualification:Qg.fr,admin:Wg.fr,success:$g.fr,invalidLink:e0.fr,loading:n0.fr,errorFallback:a0.fr,progress:r0.fr,notFound:t0.fr},en:{landing:Yg.en,security:Zg.en,otp:Xg.en,qualification:Qg.en,admin:Wg.en,success:$g.en,invalidLink:e0.en,loading:n0.en,errorFallback:a0.en,progress:r0.en,notFound:t0.en}};Un.use(pb).init({resources:Ab,lng:Cp(),fallbackLng:"en",interpolation:{escapeValue:!1}});var gd={exports:{}},Tl={},pd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function Eb(){return i0||(i0=1,(function(r){function t(R,I){var W=R.length;R.push(I);e:for(;0<W;){var ie=W-1>>>1,se=R[ie];if(0<s(se,I))R[ie]=I,R[W]=se,W=ie;else break e}}function a(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var I=R[0],W=R.pop();if(W!==I){R[0]=W;e:for(var ie=0,se=R.length,re=se>>>1;ie<re;){var be=2*(ie+1)-1,ae=R[be],ce=be+1,ge=R[ce];if(0>s(ae,W))ce<se&&0>s(ge,ae)?(R[ie]=ge,R[ce]=W,ie=ce):(R[ie]=ae,R[be]=W,ie=be);else if(ce<se&&0>s(ge,W))R[ie]=ge,R[ce]=W,ie=ce;else break e}}return I}function s(R,I){var W=R.sortIndex-I.sortIndex;return W!==0?W:R.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,S=3,x=!1,M=!1,E=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function N(R){for(var I=a(p);I!==null;){if(I.callback===null)l(p);else if(I.startTime<=R)l(p),I.sortIndex=I.expirationTime,t(m,I);else break;I=a(p)}}function H(R){if(E=!1,N(R),!M)if(a(m)!==null)M=!0,V||(V=!0,q());else{var I=a(p);I!==null&&ee(H,I.startTime-R)}}var V=!1,U=-1,X=5,z=-1;function O(){return w?!0:!(r.unstable_now()-z<X)}function Q(){if(w=!1,V){var R=r.unstable_now();z=R;var I=!0;try{e:{M=!1,E&&(E=!1,L(U),U=-1),x=!0;var W=S;try{n:{for(N(R),g=a(m);g!==null&&!(g.expirationTime>R&&O());){var ie=g.callback;if(typeof ie=="function"){g.callback=null,S=g.priorityLevel;var se=ie(g.expirationTime<=R);if(R=r.unstable_now(),typeof se=="function"){g.callback=se,N(R),I=!0;break n}g===a(m)&&l(m),N(R)}else l(m);g=a(m)}if(g!==null)I=!0;else{var re=a(p);re!==null&&ee(H,re.startTime-R),I=!1}}break e}finally{g=null,S=W,x=!1}I=void 0}}finally{I?q():V=!1}}}var q;if(typeof G=="function")q=function(){G(Q)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,$=J.port2;J.port1.onmessage=Q,q=function(){$.postMessage(null)}}else q=function(){A(Q,0)};function ee(R,I){U=A(function(){R(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(R){switch(S){case 1:case 2:case 3:var I=3;break;default:I=S}var W=S;S=I;try{return R()}finally{S=W}},r.unstable_requestPaint=function(){w=!0},r.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=S;S=R;try{return I()}finally{S=W}},r.unstable_scheduleCallback=function(R,I,W){var ie=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ie+W:ie):W=ie,R){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=W+se,R={id:v++,callback:I,priorityLevel:R,startTime:W,expirationTime:se,sortIndex:-1},W>ie?(R.sortIndex=W,t(p,R),a(m)===null&&R===a(p)&&(E?(L(U),U=-1):E=!0,ee(H,W-ie))):(R.sortIndex=se,t(m,R),M||x||(M=!0,V||(V=!0,q()))),R},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(R){var I=S;return function(){var W=S;S=I;try{return R.apply(this,arguments)}finally{S=W}}}})(yd)),yd}var l0;function Db(){return l0||(l0=1,pd.exports=Eb()),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function wb(){if(o0)return Tl;o0=1;var r=Db(),t=lf(),a=e4();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(l(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(l(188));return n!==e?null:e}for(var i=e,o=n;;){var c=i.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){i=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===i)return m(c),e;if(d===o)return m(c),n;d=d.sibling}throw Error(l(188))}if(i.return!==o.return)i=c,o=d;else{for(var b=!1,C=c.child;C;){if(C===i){b=!0,i=c,o=d;break}if(C===o){b=!0,o=c,i=d;break}C=C.sibling}if(!b){for(C=d.child;C;){if(C===i){b=!0,i=d,o=c;break}if(C===o){b=!0,o=d,i=c;break}C=C.sibling}if(!b)throw Error(l(189))}}if(i.alternate!==o)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),G=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),Q=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=Q&&e[Q]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case A:return"Profiler";case w:return"StrictMode";case H:return"Suspense";case V:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case G:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:$(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return $(e(n))}catch{}}return null}var ee=Array.isArray,R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ie=[],se=-1;function re(e){return{current:e}}function be(e){0>se||(e.current=ie[se],ie[se]=null,se--)}function ae(e,n){se++,ie[se]=e.current,e.current=n}var ce=re(null),ge=re(null),Ie=re(null),$e=re(null);function Ae(e,n){switch(ae(Ie,n),ae(ge,e),ae(ce,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?X1(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=X1(n),e=Q1(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}be(ce),ae(ce,e)}function Cn(){be(ce),be(ge),be(Ie)}function jn(e){e.memoizedState!==null&&ae($e,e);var n=ce.current,i=Q1(n,e.type);n!==i&&(ae(ge,e),ae(ce,i))}function Hn(e){ge.current===e&&(be(ce),be(ge)),$e.current===e&&(be($e),wl._currentValue=W)}var Tn,Qa;function de(e){if(Tn===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Tn=n&&n[1]||"",Qa=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tn+e+Qa}var me=!1;function Ze(e,n){if(!e||me)return"";me=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(_){var j=_}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(_){j=_}e.call(Z.prototype)}}else{try{throw Error()}catch(_){j=_}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(_){if(_&&j&&typeof _.stack=="string")return[_.stack,j.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],C=d[1];if(b&&C){var B=b.split(`
`),k=C.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===k.length)for(o=B.length-1,c=k.length-1;1<=o&&0<=c&&B[o]!==k[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==k[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==k[c]){var K=`
`+B[o].replace(" at new "," at ");return e.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",e.displayName)),K}while(1<=o&&0<=c);break}}}finally{me=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?de(i):""}function Je(e,n){switch(e.tag){case 26:case 27:case 5:return de(e.type);case 16:return de("Lazy");case 13:return e.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return Ze(e.type,!1);case 11:return Ze(e.type.render,!1);case 1:return Ze(e.type,!0);case 31:return de("Activity");default:return""}}function tn(e){try{var n="",i=null;do n+=Je(e,i),i=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ve=Object.prototype.hasOwnProperty,fn=r.unstable_scheduleCallback,ya=r.unstable_cancelCallback,ze=r.unstable_shouldYield,wn=r.unstable_requestPaint,qe=r.unstable_now,Kn=r.unstable_getCurrentPriorityLevel,Me=r.unstable_ImmediatePriority,Ue=r.unstable_UserBlockingPriority,ln=r.unstable_NormalPriority,Ta=r.unstable_LowPriority,Pa=r.unstable_IdlePriority,Gt=r.log,ja=r.unstable_setDisableYieldValue,In=null,xn=null;function ia(e){if(typeof Gt=="function"&&ja(e),xn&&typeof xn.setStrictMode=="function")try{xn.setStrictMode(In,e)}catch{}}var _n=Math.clz32?Math.clz32:Ha,$s=Math.log,_i=Math.LN2;function Ha(e){return e>>>=0,e===0?32:31-($s(e)/_i|0)|0}var jt=256,Ht=262144,tt=4194304;function _a(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pe(e,n,i){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?c=_a(o):(b&=C,b!==0?c=_a(b):i||(i=C&~e,i!==0&&(c=_a(i))))):(C=o&~d,C!==0?c=_a(C):b!==0?c=_a(b):i||(i=o&~e,i!==0&&(c=_a(i)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,i=n&-n,d>=i||d===32&&(i&4194048)!==0)?n:c}function en(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Nn(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vn(){var e=tt;return tt<<=1,(tt&62914560)===0&&(tt=4194304),e}function Cr(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function an(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yn(e,n,i,o,c,d){var b=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var C=e.entanglements,B=e.expirationTimes,k=e.hiddenUpdates;for(i=b&~i;0<i;){var K=31-_n(i),Z=1<<K;C[K]=0,B[K]=-1;var j=k[K];if(j!==null)for(k[K]=null,K=0;K<j.length;K++){var _=j[K];_!==null&&(_.lane&=-536870913)}i&=~Z}o!==0&&it(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~n))}function it(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-_n(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|i&261930}function Zn(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var o=31-_n(i),c=1<<o;c&n|e[o]&n&&(e[o]|=n),i&=~c}}function Xn(e,n){var i=n&-n;return i=(i&42)!==0?1:_t(i),(i&(e.suspendedLanes|n))!==0?0:i}function _t(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eu(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Sg(e.type))}function Ff(e,n){var i=I.p;try{return I.p=e,n()}finally{I.p=i}}var xr=Math.random().toString(36).slice(2),Pn="__reactFiber$"+xr,Qn="__reactProps$"+xr,Vt="__reactContainer$"+xr,nu="__reactEvents$"+xr,_2="__reactListeners$"+xr,V2="__reactHandles$"+xr,kf="__reactResources$"+xr,Vi="__reactMarker$"+xr;function au(e){delete e[Pn],delete e[Qn],delete e[nu],delete e[_2],delete e[V2]}function It(e){var n=e[Pn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Vt]||i[Pn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=tg(e);e!==null;){if(i=e[Pn])return i;e=tg(e)}return n}e=i,i=e.parentNode}return null}function Jt(e){if(e=e[Pn]||e[Vt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ii(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function qt(e){var n=e[kf];return n||(n=e[kf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Bn(e){e[Vi]=!0}var Gf=new Set,jf={};function lt(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(jf[e]=n,e=0;e<n.length;e++)Gf.add(n[e])}var I2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hf={},_f={};function J2(e){return ve.call(_f,e)?!0:ve.call(Hf,e)?!1:I2.test(e)?_f[e]=!0:(Hf[e]=!0,!1)}function no(e,n,i){if(J2(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function ao(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function Wa(e,n,i,o){if(o===null)e.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+o)}}function ba(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function q2(e,n,i){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(b){i=""+b,d.call(this,b)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return i},setValue:function(b){i=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ru(e){if(!e._valueTracker){var n=Vf(e)?"checked":"value";e._valueTracker=q2(e,n,""+e[n])}}function If(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),o="";return e&&(o=Vf(e)?e.checked?"true":"false":e.value),e=o,e!==i?(n.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var U2=/[\n"\\]/g;function va(e){return e.replace(U2,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tu(e,n,i,o,c,d,b,C){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ba(n)):e.value!==""+ba(n)&&(e.value=""+ba(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?iu(e,b,ba(n)):i!=null?iu(e,b,ba(i)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ba(C):e.removeAttribute("name")}function Jf(e,n,i,o,c,d,b,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||i!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){ru(e);return}i=i!=null?""+ba(i):"",n=n!=null?""+ba(n):i,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),ru(e)}function iu(e,n,i){n==="number"&&ro(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Kt(e,n,i,o){if(e=e.options,n){n={};for(var c=0;c<i.length;c++)n["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=n.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&o&&(e[i].defaultSelected=!0)}else{for(i=""+ba(i),n=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function qf(e,n,i){if(n!=null&&(n=""+ba(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+ba(i):""}function Uf(e,n,i,o){if(n==null){if(o!=null){if(i!=null)throw Error(l(92));if(ee(o)){if(1<o.length)throw Error(l(93));o=o[0]}i=o}i==null&&(i=""),n=i}i=ba(n),e.defaultValue=i,o=e.textContent,o===i&&o!==""&&o!==null&&(e.value=o),ru(e)}function Yt(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var K2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kf(e,n,i){var o=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,i):typeof i!="number"||i===0||K2.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function Yf(e,n,i){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,i!=null){for(var o in i)!i.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&i[c]!==o&&Kf(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&Kf(e,d,n[d])}function lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Z2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function to(e){return Z2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $a(){}var ou=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zt=null,Xt=null;function Zf(e){var n=Jt(e);if(n&&(e=n.stateNode)){var i=e[Qn]||null;e:switch(e=n.stateNode,n.type){case"input":if(tu(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+va(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var o=i[n];if(o!==e&&o.form===e.form){var c=o[Qn]||null;if(!c)throw Error(l(90));tu(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<i.length;n++)o=i[n],o.form===e.form&&If(o)}break e;case"textarea":qf(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Kt(e,!!i.multiple,n,!1)}}}var uu=!1;function Xf(e,n,i){if(uu)return e(n,i);uu=!0;try{var o=e(n);return o}finally{if(uu=!1,(Zt!==null||Xt!==null)&&(Uo(),Zt&&(n=Zt,e=Xt,Xt=Zt=null,Zf(n),e)))for(n=0;n<e.length;n++)Zf(e[n])}}function Ji(e,n){var i=e.stateNode;if(i===null)return null;var o=i[Qn]||null;if(o===null)return null;i=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(l(231,n,typeof i));return i}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(er)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){cu=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{cu=!1}var Ar=null,du=null,io=null;function Qf(){if(io)return io;var e,n=du,i=n.length,o,c="value"in Ar?Ar.value:Ar.textContent,d=c.length;for(e=0;e<i&&n[e]===c[e];e++);var b=i-e;for(o=1;o<=b&&n[i-o]===c[d-o];o++);return io=c.slice(e,1<o?1-o:void 0)}function lo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function Wf(){return!1}function Wn(e){function n(i,o,c,d,b){this._reactName=i,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(i=e[C],this[C]=i?i(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?oo:Wf,this.isPropagationStopped=Wf,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=Wn(ot),Ui=g({},ot,{view:0,detail:0}),X2=Wn(Ui),fu,hu,Ki,uo=g({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ki&&(Ki&&e.type==="mousemove"?(fu=e.screenX-Ki.screenX,hu=e.screenY-Ki.screenY):hu=fu=0,Ki=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:hu}}),$f=Wn(uo),Q2=g({},uo,{dataTransfer:0}),W2=Wn(Q2),$2=g({},Ui,{relatedTarget:0}),mu=Wn($2),ey=g({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=Wn(ey),ay=g({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ry=Wn(ay),ty=g({},ot,{data:0}),eh=Wn(ty),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=oy[e])?!!n[e]:!1}function gu(){return sy}var uy=g({},Ui,{key:function(e){if(e.key){var n=iy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ly[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cy=Wn(uy),dy=g({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=Wn(dy),fy=g({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),hy=Wn(fy),my=g({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=Wn(my),py=g({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=Wn(py),by=g({},ot,{newState:0,oldState:0}),vy=Wn(by),Sy=[9,13,27,32],pu=er&&"CompositionEvent"in window,Yi=null;er&&"documentMode"in document&&(Yi=document.documentMode);var My=er&&"TextEvent"in window&&!Yi,ah=er&&(!pu||Yi&&8<Yi&&11>=Yi),rh=" ",th=!1;function ih(e,n){switch(e){case"keyup":return Sy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Cy(e,n){switch(e){case"compositionend":return lh(n);case"keypress":return n.which!==32?null:(th=!0,rh);case"textInput":return e=n.data,e===rh&&th?null:e;default:return null}}function xy(e,n){if(Qt)return e==="compositionend"||!pu&&ih(e,n)?(e=Qf(),io=du=Ar=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ah&&n.locale!=="ko"?null:n.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ay[e.type]:n==="textarea"}function sh(e,n,i,o){Zt?Xt?Xt.push(o):Xt=[o]:Zt=o,n=$o(n,"onChange"),0<n.length&&(i=new so("onChange","change",null,i,o),e.push({event:i,listeners:n}))}var Zi=null,Xi=null;function Ey(e){J1(e,0)}function co(e){var n=Ii(e);if(If(n))return e}function uh(e,n){if(e==="change")return n}var ch=!1;if(er){var yu;if(er){var bu="oninput"in document;if(!bu){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),bu=typeof dh.oninput=="function"}yu=bu}else yu=!1;ch=yu&&(!document.documentMode||9<document.documentMode)}function fh(){Zi&&(Zi.detachEvent("onpropertychange",hh),Xi=Zi=null)}function hh(e){if(e.propertyName==="value"&&co(Xi)){var n=[];sh(n,Xi,e,su(e)),Xf(Ey,n)}}function Dy(e,n,i){e==="focusin"?(fh(),Zi=n,Xi=i,Zi.attachEvent("onpropertychange",hh)):e==="focusout"&&fh()}function wy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(Xi)}function Ny(e,n){if(e==="click")return co(n)}function By(e,n){if(e==="input"||e==="change")return co(n)}function Ry(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var la=typeof Object.is=="function"?Object.is:Ry;function Qi(e,n){if(la(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),o=Object.keys(n);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var c=i[o];if(!ve.call(n,c)||!la(e[c],n[c]))return!1}return!0}function mh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gh(e,n){var i=mh(e);e=0;for(var o;i;){if(i.nodeType===3){if(o=e+i.textContent.length,e<=n&&o>=n)return{node:i,offset:n-e};e=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=mh(i)}}function ph(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ph(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ro(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=ro(e.document)}return n}function vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ly=er&&"documentMode"in document&&11>=document.documentMode,Wt=null,Su=null,Wi=null,Mu=!1;function bh(e,n,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Mu||Wt==null||Wt!==ro(o)||(o=Wt,"selectionStart"in o&&vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Wi&&Qi(Wi,o)||(Wi=o,o=$o(Su,"onSelect"),0<o.length&&(n=new so("onSelect","select",null,n,i),e.push({event:n,listeners:o}),n.target=Wt)))}function st(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var $t={animationend:st("Animation","AnimationEnd"),animationiteration:st("Animation","AnimationIteration"),animationstart:st("Animation","AnimationStart"),transitionrun:st("Transition","TransitionRun"),transitionstart:st("Transition","TransitionStart"),transitioncancel:st("Transition","TransitionCancel"),transitionend:st("Transition","TransitionEnd")},Cu={},vh={};er&&(vh=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function ut(e){if(Cu[e])return Cu[e];if(!$t[e])return e;var n=$t[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in vh)return Cu[e]=n[i];return e}var Sh=ut("animationend"),Mh=ut("animationiteration"),Ch=ut("animationstart"),Ty=ut("transitionrun"),Py=ut("transitionstart"),Oy=ut("transitioncancel"),xh=ut("transitionend"),Ah=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function za(e,n){Ah.set(e,n),lt(n,[e])}var fo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Sa=[],ei=0,Au=0;function ho(){for(var e=ei,n=Au=ei=0;n<e;){var i=Sa[n];Sa[n++]=null;var o=Sa[n];Sa[n++]=null;var c=Sa[n];Sa[n++]=null;var d=Sa[n];if(Sa[n++]=null,o!==null&&c!==null){var b=o.pending;b===null?c.next=c:(c.next=b.next,b.next=c),o.pending=c}d!==0&&Eh(i,c,d)}}function mo(e,n,i,o){Sa[ei++]=e,Sa[ei++]=n,Sa[ei++]=i,Sa[ei++]=o,Au|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Eu(e,n,i,o){return mo(e,n,i,o),go(e)}function ct(e,n){return mo(e,null,null,n),go(e)}function Eh(e,n,i){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i);for(var c=!1,d=e.return;d!==null;)d.childLanes|=i,o=d.alternate,o!==null&&(o.childLanes|=i),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-_n(i),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=i|536870912),d):null}function go(e){if(50<Sl)throw Sl=0,Oc=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ni={};function zy(e,n,i,o){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oa(e,n,i,o){return new zy(e,n,i,o)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nr(e,n){var i=e.alternate;return i===null?(i=oa(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Dh(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function po(e,n,i,o,c,d){var b=0;if(o=e,typeof e=="function")Du(e)&&(b=1);else if(typeof e=="string")b=H3(e,i,ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case z:return e=oa(31,i,n,c),e.elementType=z,e.lanes=d,e;case E:return dt(i.children,c,d,n);case w:b=8,c|=24;break;case A:return e=oa(12,i,n,c|2),e.elementType=A,e.lanes=d,e;case H:return e=oa(13,i,n,c),e.elementType=H,e.lanes=d,e;case V:return e=oa(19,i,n,c),e.elementType=V,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:b=10;break e;case L:b=9;break e;case N:b=11;break e;case U:b=14;break e;case X:b=16,o=null;break e}b=29,i=Error(l(130,e===null?"null":typeof e,"")),o=null}return n=oa(b,i,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function dt(e,n,i,o){return e=oa(7,e,o,n),e.lanes=i,e}function wu(e,n,i){return e=oa(6,e,null,n),e.lanes=i,e}function wh(e){var n=oa(18,null,null,0);return n.stateNode=e,n}function Nu(e,n,i){return n=oa(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nh=new WeakMap;function Ma(e,n){if(typeof e=="object"&&e!==null){var i=Nh.get(e);return i!==void 0?i:(n={value:e,source:n,stack:tn(n)},Nh.set(e,n),n)}return{value:e,source:n,stack:tn(n)}}var ai=[],ri=0,yo=null,$i=0,Ca=[],xa=0,Er=null,Va=1,Ia="";function ar(e,n){ai[ri++]=$i,ai[ri++]=yo,yo=e,$i=n}function Bh(e,n,i){Ca[xa++]=Va,Ca[xa++]=Ia,Ca[xa++]=Er,Er=e;var o=Va;e=Ia;var c=32-_n(o)-1;o&=~(1<<c),i+=1;var d=32-_n(n)+c;if(30<d){var b=c-c%5;d=(o&(1<<b)-1).toString(32),o>>=b,c-=b,Va=1<<32-_n(n)+c|i<<c|o,Ia=d+e}else Va=1<<d|i<<c|o,Ia=e}function Bu(e){e.return!==null&&(ar(e,1),Bh(e,1,0))}function Ru(e){for(;e===yo;)yo=ai[--ri],ai[ri]=null,$i=ai[--ri],ai[ri]=null;for(;e===Er;)Er=Ca[--xa],Ca[xa]=null,Ia=Ca[--xa],Ca[xa]=null,Va=Ca[--xa],Ca[xa]=null}function Rh(e,n){Ca[xa++]=Va,Ca[xa++]=Ia,Ca[xa++]=Er,Va=n.id,Ia=n.overflow,Er=e}var On=null,Xe=null,Re=!1,Dr=null,Aa=!1,Lu=Error(l(519));function wr(e){var n=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(Ma(n,e)),Lu}function Lh(e){var n=e.stateNode,i=e.type,o=e.memoizedProps;switch(n[Pn]=e,n[Qn]=o,i){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(i=0;i<Cl.length;i++)De(Cl[i],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),Jf(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),Uf(n,o.value,o.defaultValue,o.children)}i=o.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||o.suppressHydrationWarning===!0||Y1(n.textContent,i)?(o.popover!=null&&(De("beforetoggle",n),De("toggle",n)),o.onScroll!=null&&De("scroll",n),o.onScrollEnd!=null&&De("scrollend",n),o.onClick!=null&&(n.onclick=$a),n=!0):n=!1,n||wr(e,!0)}function Th(e){for(On=e.return;On;)switch(On.tag){case 5:case 31:case 13:Aa=!1;return;case 27:case 3:Aa=!0;return;default:On=On.return}}function ti(e){if(e!==On)return!1;if(!Re)return Th(e),Re=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Zc(e.type,e.memoizedProps)),i=!i),i&&Xe&&wr(e),Th(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Xe=rg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Xe=rg(e)}else n===27?(n=Xe,_r(e.type)?(e=ed,ed=null,Xe=e):Xe=n):Xe=On?Da(e.stateNode.nextSibling):null;return!0}function ft(){Xe=On=null,Re=!1}function Tu(){var e=Dr;return e!==null&&(aa===null?aa=e:aa.push.apply(aa,e),Dr=null),e}function el(e){Dr===null?Dr=[e]:Dr.push(e)}var Pu=re(null),ht=null,rr=null;function Nr(e,n,i){ae(Pu,n._currentValue),n._currentValue=i}function tr(e){e._currentValue=Pu.current,be(Pu)}function Ou(e,n,i){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===i)break;e=e.return}}function zu(e,n,i,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var b=c.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=c;for(var B=0;B<n.length;B++)if(C.context===n[B]){d.lanes|=i,C=d.alternate,C!==null&&(C.lanes|=i),Ou(d.return,i,e),o||(b=null);break e}d=C.next}}else if(c.tag===18){if(b=c.return,b===null)throw Error(l(341));b.lanes|=i,d=b.alternate,d!==null&&(d.lanes|=i),Ou(b,i,e),b=null}else b=c.child;if(b!==null)b.return=c;else for(b=c;b!==null;){if(b===e){b=null;break}if(c=b.sibling,c!==null){c.return=b.return,b=c;break}b=b.return}c=b}}function ii(e,n,i,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var b=c.alternate;if(b===null)throw Error(l(387));if(b=b.memoizedProps,b!==null){var C=c.type;la(c.pendingProps.value,b.value)||(e!==null?e.push(C):e=[C])}}else if(c===$e.current){if(b=c.alternate,b===null)throw Error(l(387));b.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}c=c.return}e!==null&&zu(n,e,i,o),n.flags|=262144}function bo(e){for(e=e.firstContext;e!==null;){if(!la(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mt(e){ht=e,rr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return Ph(ht,e)}function vo(e,n){return ht===null&&mt(e),Ph(e,n)}function Ph(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},rr===null){if(e===null)throw Error(l(308));rr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else rr=rr.next=n;return i}var Fy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},ky=r.unstable_scheduleCallback,Gy=r.unstable_NormalPriority,bn={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new Fy,data:new Map,refCount:0}}function nl(e){e.refCount--,e.refCount===0&&ky(Gy,function(){e.controller.abort()})}var al=null,ku=0,li=0,oi=null;function jy(e,n){if(al===null){var i=al=[];ku=0,li=Hc(),oi={status:"pending",value:void 0,then:function(o){i.push(o)}}}return ku++,n.then(Oh,Oh),n}function Oh(){if(--ku===0&&al!==null){oi!==null&&(oi.status="fulfilled");var e=al;al=null,li=0,oi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Hy(e,n){var i=[],o={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<i.length;c++)(0,i[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),o}var zh=R.S;R.S=function(e,n){b1=qe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jy(e,n),zh!==null&&zh(e,n)};var gt=re(null);function Gu(){var e=gt.current;return e!==null?e:Ke.pooledCache}function So(e,n){n===null?ae(gt,gt.current):ae(gt,n.pool)}function Fh(){var e=Gu();return e===null?null:{parent:bn._currentValue,pool:e}}var si=Error(l(460)),ju=Error(l(474)),Mo=Error(l(542)),Co={then:function(){}};function kh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gh(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then($a,$a),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hh(e),e;default:if(typeof n.status=="string")n.then($a,$a);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hh(e),e}throw yt=n,si}}function pt(e){try{var n=e._init;return n(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(yt=i,si):i}}var yt=null;function jh(){if(yt===null)throw Error(l(459));var e=yt;return yt=null,e}function Hh(e){if(e===si||e===Mo)throw Error(l(483))}var ui=null,rl=0;function xo(e){var n=rl;return rl+=1,ui===null&&(ui=[]),Gh(ui,e,n)}function tl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ao(e,n){throw n.$$typeof===S?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _h(e){function n(P,T){if(e){var F=P.deletions;F===null?(P.deletions=[T],P.flags|=16):F.push(T)}}function i(P,T){if(!e)return null;for(;T!==null;)n(P,T),T=T.sibling;return null}function o(P){for(var T=new Map;P!==null;)P.key!==null?T.set(P.key,P):T.set(P.index,P),P=P.sibling;return T}function c(P,T){return P=nr(P,T),P.index=0,P.sibling=null,P}function d(P,T,F){return P.index=F,e?(F=P.alternate,F!==null?(F=F.index,F<T?(P.flags|=67108866,T):F):(P.flags|=67108866,T)):(P.flags|=1048576,T)}function b(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function C(P,T,F,Y){return T===null||T.tag!==6?(T=wu(F,P.mode,Y),T.return=P,T):(T=c(T,F),T.return=P,T)}function B(P,T,F,Y){var fe=F.type;return fe===E?K(P,T,F.props.children,Y,F.key):T!==null&&(T.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===X&&pt(fe)===T.type)?(T=c(T,F.props),tl(T,F),T.return=P,T):(T=po(F.type,F.key,F.props,null,P.mode,Y),tl(T,F),T.return=P,T)}function k(P,T,F,Y){return T===null||T.tag!==4||T.stateNode.containerInfo!==F.containerInfo||T.stateNode.implementation!==F.implementation?(T=Nu(F,P.mode,Y),T.return=P,T):(T=c(T,F.children||[]),T.return=P,T)}function K(P,T,F,Y,fe){return T===null||T.tag!==7?(T=dt(F,P.mode,Y,fe),T.return=P,T):(T=c(T,F),T.return=P,T)}function Z(P,T,F){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=wu(""+T,P.mode,F),T.return=P,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case x:return F=po(T.type,T.key,T.props,null,P.mode,F),tl(F,T),F.return=P,F;case M:return T=Nu(T,P.mode,F),T.return=P,T;case X:return T=pt(T),Z(P,T,F)}if(ee(T)||q(T))return T=dt(T,P.mode,F,null),T.return=P,T;if(typeof T.then=="function")return Z(P,xo(T),F);if(T.$$typeof===G)return Z(P,vo(P,T),F);Ao(P,T)}return null}function j(P,T,F,Y){var fe=T!==null?T.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return fe!==null?null:C(P,T,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case x:return F.key===fe?B(P,T,F,Y):null;case M:return F.key===fe?k(P,T,F,Y):null;case X:return F=pt(F),j(P,T,F,Y)}if(ee(F)||q(F))return fe!==null?null:K(P,T,F,Y,null);if(typeof F.then=="function")return j(P,T,xo(F),Y);if(F.$$typeof===G)return j(P,T,vo(P,F),Y);Ao(P,F)}return null}function _(P,T,F,Y,fe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return P=P.get(F)||null,C(T,P,""+Y,fe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case x:return P=P.get(Y.key===null?F:Y.key)||null,B(T,P,Y,fe);case M:return P=P.get(Y.key===null?F:Y.key)||null,k(T,P,Y,fe);case X:return Y=pt(Y),_(P,T,F,Y,fe)}if(ee(Y)||q(Y))return P=P.get(F)||null,K(T,P,Y,fe,null);if(typeof Y.then=="function")return _(P,T,F,xo(Y),fe);if(Y.$$typeof===G)return _(P,T,F,vo(T,Y),fe);Ao(T,Y)}return null}function oe(P,T,F,Y){for(var fe=null,Le=null,ue=T,Ce=T=0,Be=null;ue!==null&&Ce<F.length;Ce++){ue.index>Ce?(Be=ue,ue=null):Be=ue.sibling;var Te=j(P,ue,F[Ce],Y);if(Te===null){ue===null&&(ue=Be);break}e&&ue&&Te.alternate===null&&n(P,ue),T=d(Te,T,Ce),Le===null?fe=Te:Le.sibling=Te,Le=Te,ue=Be}if(Ce===F.length)return i(P,ue),Re&&ar(P,Ce),fe;if(ue===null){for(;Ce<F.length;Ce++)ue=Z(P,F[Ce],Y),ue!==null&&(T=d(ue,T,Ce),Le===null?fe=ue:Le.sibling=ue,Le=ue);return Re&&ar(P,Ce),fe}for(ue=o(ue);Ce<F.length;Ce++)Be=_(ue,P,Ce,F[Ce],Y),Be!==null&&(e&&Be.alternate!==null&&ue.delete(Be.key===null?Ce:Be.key),T=d(Be,T,Ce),Le===null?fe=Be:Le.sibling=Be,Le=Be);return e&&ue.forEach(function(Ur){return n(P,Ur)}),Re&&ar(P,Ce),fe}function he(P,T,F,Y){if(F==null)throw Error(l(151));for(var fe=null,Le=null,ue=T,Ce=T=0,Be=null,Te=F.next();ue!==null&&!Te.done;Ce++,Te=F.next()){ue.index>Ce?(Be=ue,ue=null):Be=ue.sibling;var Ur=j(P,ue,Te.value,Y);if(Ur===null){ue===null&&(ue=Be);break}e&&ue&&Ur.alternate===null&&n(P,ue),T=d(Ur,T,Ce),Le===null?fe=Ur:Le.sibling=Ur,Le=Ur,ue=Be}if(Te.done)return i(P,ue),Re&&ar(P,Ce),fe;if(ue===null){for(;!Te.done;Ce++,Te=F.next())Te=Z(P,Te.value,Y),Te!==null&&(T=d(Te,T,Ce),Le===null?fe=Te:Le.sibling=Te,Le=Te);return Re&&ar(P,Ce),fe}for(ue=o(ue);!Te.done;Ce++,Te=F.next())Te=_(ue,P,Ce,Te.value,Y),Te!==null&&(e&&Te.alternate!==null&&ue.delete(Te.key===null?Ce:Te.key),T=d(Te,T,Ce),Le===null?fe=Te:Le.sibling=Te,Le=Te);return e&&ue.forEach(function(Q3){return n(P,Q3)}),Re&&ar(P,Ce),fe}function _e(P,T,F,Y){if(typeof F=="object"&&F!==null&&F.type===E&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case x:e:{for(var fe=F.key;T!==null;){if(T.key===fe){if(fe=F.type,fe===E){if(T.tag===7){i(P,T.sibling),Y=c(T,F.props.children),Y.return=P,P=Y;break e}}else if(T.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===X&&pt(fe)===T.type){i(P,T.sibling),Y=c(T,F.props),tl(Y,F),Y.return=P,P=Y;break e}i(P,T);break}else n(P,T);T=T.sibling}F.type===E?(Y=dt(F.props.children,P.mode,Y,F.key),Y.return=P,P=Y):(Y=po(F.type,F.key,F.props,null,P.mode,Y),tl(Y,F),Y.return=P,P=Y)}return b(P);case M:e:{for(fe=F.key;T!==null;){if(T.key===fe)if(T.tag===4&&T.stateNode.containerInfo===F.containerInfo&&T.stateNode.implementation===F.implementation){i(P,T.sibling),Y=c(T,F.children||[]),Y.return=P,P=Y;break e}else{i(P,T);break}else n(P,T);T=T.sibling}Y=Nu(F,P.mode,Y),Y.return=P,P=Y}return b(P);case X:return F=pt(F),_e(P,T,F,Y)}if(ee(F))return oe(P,T,F,Y);if(q(F)){if(fe=q(F),typeof fe!="function")throw Error(l(150));return F=fe.call(F),he(P,T,F,Y)}if(typeof F.then=="function")return _e(P,T,xo(F),Y);if(F.$$typeof===G)return _e(P,T,vo(P,F),Y);Ao(P,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,T!==null&&T.tag===6?(i(P,T.sibling),Y=c(T,F),Y.return=P,P=Y):(i(P,T),Y=wu(F,P.mode,Y),Y.return=P,P=Y),b(P)):i(P,T)}return function(P,T,F,Y){try{rl=0;var fe=_e(P,T,F,Y);return ui=null,fe}catch(ue){if(ue===si||ue===Mo)throw ue;var Le=oa(29,ue,null,P.mode);return Le.lanes=Y,Le.return=P,Le}finally{}}}var bt=_h(!0),Vh=_h(!1),Br=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(e,n,i){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=go(e),Eh(e,null,i),n}return mo(e,o,n,i),go(e)}function il(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,i|=o,n.lanes=i,Zn(e,i)}}function Vu(e,n){var i=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var c=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var b={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};d===null?c=d=b:d=d.next=b,i=i.next}while(i!==null);d===null?c=d=n:d=d.next=n}else c=d=n;i={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var Iu=!1;function ll(){if(Iu){var e=oi;if(e!==null)throw e}}function ol(e,n,i,o){Iu=!1;var c=e.updateQueue;Br=!1;var d=c.firstBaseUpdate,b=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var B=C,k=B.next;B.next=null,b===null?d=k:b.next=k,b=B;var K=e.alternate;K!==null&&(K=K.updateQueue,C=K.lastBaseUpdate,C!==b&&(C===null?K.firstBaseUpdate=k:C.next=k,K.lastBaseUpdate=B))}if(d!==null){var Z=c.baseState;b=0,K=k=B=null,C=d;do{var j=C.lane&-536870913,_=j!==C.lane;if(_?(Ne&j)===j:(o&j)===j){j!==0&&j===li&&(Iu=!0),K!==null&&(K=K.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var oe=e,he=C;j=n;var _e=i;switch(he.tag){case 1:if(oe=he.payload,typeof oe=="function"){Z=oe.call(_e,Z,j);break e}Z=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=he.payload,j=typeof oe=="function"?oe.call(_e,Z,j):oe,j==null)break e;Z=g({},Z,j);break e;case 2:Br=!0}}j=C.callback,j!==null&&(e.flags|=64,_&&(e.flags|=8192),_=c.callbacks,_===null?c.callbacks=[j]:_.push(j))}else _={lane:j,tag:C.tag,payload:C.payload,callback:C.callback,next:null},K===null?(k=K=_,B=Z):K=K.next=_,b|=j;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;_=C,C=_.next,_.next=null,c.lastBaseUpdate=_,c.shared.pending=null}}while(!0);K===null&&(B=Z),c.baseState=B,c.firstBaseUpdate=k,c.lastBaseUpdate=K,d===null&&(c.shared.lanes=0),Fr|=b,e.lanes=b,e.memoizedState=Z}}function Ih(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function Jh(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Ih(i[e],n)}var ci=re(null),Eo=re(0);function qh(e,n){e=hr,ae(Eo,e),ae(ci,n),hr=e|n.baseLanes}function Ju(){ae(Eo,hr),ae(ci,ci.current)}function qu(){hr=Eo.current,be(ci),be(Eo)}var sa=re(null),Ea=null;function Tr(e){var n=e.alternate;ae(hn,hn.current&1),ae(sa,e),Ea===null&&(n===null||ci.current!==null||n.memoizedState!==null)&&(Ea=e)}function Uu(e){ae(hn,hn.current),ae(sa,e),Ea===null&&(Ea=e)}function Uh(e){e.tag===22?(ae(hn,hn.current),ae(sa,e),Ea===null&&(Ea=e)):Pr()}function Pr(){ae(hn,hn.current),ae(sa,sa.current)}function ua(e){be(sa),Ea===e&&(Ea=null),be(hn)}var hn=re(0);function Do(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Wc(i)||$c(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ir=0,Se=null,je=null,vn=null,wo=!1,di=!1,vt=!1,No=0,sl=0,fi=null,_y=0;function on(){throw Error(l(321))}function Ku(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!la(e[i],n[i]))return!1;return!0}function Yu(e,n,i,o,c,d){return ir=d,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?Bm:uc,vt=!1,d=i(o,c),vt=!1,di&&(d=Yh(n,i,o,c)),Kh(e),d}function Kh(e){R.H=dl;var n=je!==null&&je.next!==null;if(ir=0,vn=je=Se=null,wo=!1,sl=0,fi=null,n)throw Error(l(300));e===null||Sn||(e=e.dependencies,e!==null&&bo(e)&&(Sn=!0))}function Yh(e,n,i,o){Se=e;var c=0;do{if(di&&(fi=null),sl=0,di=!1,25<=c)throw Error(l(301));if(c+=1,vn=je=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}R.H=Rm,d=n(i,o)}while(di);return d}function Vy(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?ul(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(Se.flags|=1024),n}function Zu(){var e=No!==0;return No=0,e}function Xu(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function Qu(e){if(wo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wo=!1}ir=0,vn=je=Se=null,di=!1,sl=No=0,fi=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Se.memoizedState=vn=e:vn=vn.next=e,vn}function mn(){if(je===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=vn===null?Se.memoizedState:vn.next;if(n!==null)vn=n,je=e;else{if(e===null)throw Se.alternate===null?Error(l(467)):Error(l(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},vn===null?Se.memoizedState=vn=e:vn=vn.next=e}return vn}function Bo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var n=sl;return sl+=1,fi===null&&(fi=[]),e=Gh(fi,e,n),n=Se,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?Bm:uc),e}function Ro(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===G)return zn(e)}throw Error(l(438,String(e)))}function Wu(e){var n=null,i=Se.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Bo(),Se.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),o=0;o<e;o++)i[o]=O;return n.index++,i}function lr(e,n){return typeof n=="function"?n(e):n}function Lo(e){var n=mn();return $u(n,je,e)}function $u(e,n,i){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=i;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var b=c.next;c.next=d.next,d.next=b}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var C=b=null,B=null,k=n,K=!1;do{var Z=k.lane&-536870913;if(Z!==k.lane?(Ne&Z)===Z:(ir&Z)===Z){var j=k.revertLane;if(j===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),Z===li&&(K=!0);else if((ir&j)===j){k=k.next,j===li&&(K=!0);continue}else Z={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},B===null?(C=B=Z,b=d):B=B.next=Z,Se.lanes|=j,Fr|=j;Z=k.action,vt&&i(d,Z),d=k.hasEagerState?k.eagerState:i(d,Z)}else j={lane:Z,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},B===null?(C=B=j,b=d):B=B.next=j,Se.lanes|=Z,Fr|=Z;k=k.next}while(k!==null&&k!==n);if(B===null?b=d:B.next=C,!la(d,e.memoizedState)&&(Sn=!0,K&&(i=oi,i!==null)))throw i;e.memoizedState=d,e.baseState=b,e.baseQueue=B,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ec(e){var n=mn(),i=n.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var o=i.dispatch,c=i.pending,d=n.memoizedState;if(c!==null){i.pending=null;var b=c=c.next;do d=e(d,b.action),b=b.next;while(b!==c);la(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),i.lastRenderedState=d}return[d,o]}function Zh(e,n,i){var o=Se,c=mn(),d=Re;if(d){if(i===void 0)throw Error(l(407));i=i()}else i=n();var b=!la((je||c).memoizedState,i);if(b&&(c.memoizedState=i,Sn=!0),c=c.queue,rc(Wh.bind(null,o,c,e),[e]),c.getSnapshot!==n||b||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,hi(9,{destroy:void 0},Qh.bind(null,o,c,i,n),null),Ke===null)throw Error(l(349));d||(ir&127)!==0||Xh(o,n,i)}return i}function Xh(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=Se.updateQueue,n===null?(n=Bo(),Se.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Qh(e,n,i,o){n.value=i,n.getSnapshot=o,$h(n)&&em(e)}function Wh(e,n,i){return i(function(){$h(n)&&em(e)})}function $h(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!la(e,i)}catch{return!0}}function em(e){var n=ct(e,2);n!==null&&ra(n,e,2)}function nc(e){var n=Jn();if(typeof e=="function"){var i=e;if(e=i(),vt){ia(!0);try{i()}finally{ia(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},n}function nm(e,n,i,o){return e.baseState=i,$u(e,je,typeof o=="function"?o:lr)}function Iy(e,n,i,o,c){if(Oo(e))throw Error(l(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};R.T!==null?i(!0):d.isTransition=!1,o(d),i=n.pending,i===null?(d.next=n.pending=d,am(n,d)):(d.next=i.next,n.pending=i.next=d)}}function am(e,n){var i=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=R.T,b={};R.T=b;try{var C=i(c,o),B=R.S;B!==null&&B(b,C),rm(e,n,C)}catch(k){ac(e,n,k)}finally{d!==null&&b.types!==null&&(d.types=b.types),R.T=d}}else try{d=i(c,o),rm(e,n,d)}catch(k){ac(e,n,k)}}function rm(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(o){tm(e,n,o)},function(o){return ac(e,n,o)}):tm(e,n,i)}function tm(e,n,i){n.status="fulfilled",n.value=i,im(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,am(e,i)))}function ac(e,n,i){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=i,im(n),n=n.next;while(n!==o)}e.action=null}function im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function om(e,n){if(Re){var i=Ke.formState;if(i!==null){e:{var o=Se;if(Re){if(Xe){n:{for(var c=Xe,d=Aa;c.nodeType!==8;){if(!d){c=null;break n}if(c=Da(c.nextSibling),c===null){c=null;break n}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Xe=Da(c.nextSibling),o=c.data==="F!";break e}}wr(o)}o=!1}o&&(n=i[0])}}return i=Jn(),i.memoizedState=i.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},i.queue=o,i=Dm.bind(null,Se,o),o.dispatch=i,o=nc(!1),d=sc.bind(null,Se,!1,o.queue),o=Jn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,i=Iy.bind(null,Se,c,d,i),c.dispatch=i,o.memoizedState=e,[n,i,!1]}function sm(e){var n=mn();return um(n,je,e)}function um(e,n,i){if(n=$u(e,n,lm)[0],e=Lo(lr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ul(n)}catch(b){throw b===si?Mo:b}else o=n;n=mn();var c=n.queue,d=c.dispatch;return i!==n.memoizedState&&(Se.flags|=2048,hi(9,{destroy:void 0},Jy.bind(null,c,i),null)),[o,d,e]}function Jy(e,n){e.action=n}function cm(e){var n=mn(),i=je;if(i!==null)return um(n,i,e);mn(),n=n.memoizedState,i=mn();var o=i.queue.dispatch;return i.memoizedState=e,[n,o,!1]}function hi(e,n,i,o){return e={tag:e,create:i,deps:o,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Bo(),Se.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(o=i.next,i.next=e,e.next=o,n.lastEffect=e),e}function dm(){return mn().memoizedState}function To(e,n,i,o){var c=Jn();Se.flags|=e,c.memoizedState=hi(1|n,{destroy:void 0},i,o===void 0?null:o)}function Po(e,n,i,o){var c=mn();o=o===void 0?null:o;var d=c.memoizedState.inst;je!==null&&o!==null&&Ku(o,je.memoizedState.deps)?c.memoizedState=hi(n,d,i,o):(Se.flags|=e,c.memoizedState=hi(1|n,d,i,o))}function fm(e,n){To(8390656,8,e,n)}function rc(e,n){Po(2048,8,e,n)}function qy(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Bo(),Se.updateQueue=n,n.events=[e];else{var i=n.events;i===null?n.events=[e]:i.push(e)}}function hm(e){var n=mn().memoizedState;return qy({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}function mm(e,n){return Po(4,2,e,n)}function gm(e,n){return Po(4,4,e,n)}function pm(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ym(e,n,i){i=i!=null?i.concat([e]):null,Po(4,4,pm.bind(null,n,e),i)}function tc(){}function bm(e,n){var i=mn();n=n===void 0?null:n;var o=i.memoizedState;return n!==null&&Ku(n,o[1])?o[0]:(i.memoizedState=[e,n],e)}function vm(e,n){var i=mn();n=n===void 0?null:n;var o=i.memoizedState;if(n!==null&&Ku(n,o[1]))return o[0];if(o=e(),vt){ia(!0);try{e()}finally{ia(!1)}}return i.memoizedState=[o,n],o}function ic(e,n,i){return i===void 0||(ir&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=n:(e.memoizedState=i,e=S1(),Se.lanes|=e,Fr|=e,i)}function Sm(e,n,i,o){return la(i,n)?i:ci.current!==null?(e=ic(e,i,o),la(e,n)||(Sn=!0),e):(ir&42)===0||(ir&1073741824)!==0&&(Ne&261930)===0?(Sn=!0,e.memoizedState=i):(e=S1(),Se.lanes|=e,Fr|=e,n)}function Mm(e,n,i,o,c){var d=I.p;I.p=d!==0&&8>d?d:8;var b=R.T,C={};R.T=C,sc(e,!1,n,i);try{var B=c(),k=R.S;if(k!==null&&k(C,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var K=Hy(B,o);cl(e,n,K,fa(e))}else cl(e,n,o,fa(e))}catch(Z){cl(e,n,{then:function(){},status:"rejected",reason:Z},fa())}finally{I.p=d,b!==null&&C.types!==null&&(b.types=C.types),R.T=b}}function Uy(){}function lc(e,n,i,o){if(e.tag!==5)throw Error(l(476));var c=Cm(e).queue;Mm(e,c,n,W,i===null?Uy:function(){return xm(e),i(o)})}function Cm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:W},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function xm(e){var n=Cm(e);n.next===null&&(n=e.alternate.memoizedState),cl(e,n.next.queue,{},fa())}function oc(){return zn(wl)}function Am(){return mn().memoizedState}function Em(){return mn().memoizedState}function Ky(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=fa();e=Rr(i);var o=Lr(n,e,i);o!==null&&(ra(o,n,i),il(o,n,i)),n={cache:Fu()},e.payload=n;return}n=n.return}}function Yy(e,n,i){var o=fa();i={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Oo(e)?wm(n,i):(i=Eu(e,n,i,o),i!==null&&(ra(i,e,o),Nm(i,n,o)))}function Dm(e,n,i){var o=fa();cl(e,n,i,o)}function cl(e,n,i,o){var c={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Oo(e))wm(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,C=d(b,i);if(c.hasEagerState=!0,c.eagerState=C,la(C,b))return mo(e,n,c,0),Ke===null&&ho(),!1}catch{}finally{}if(i=Eu(e,n,c,o),i!==null)return ra(i,e,o),Nm(i,n,o),!0}return!1}function sc(e,n,i,o){if(o={lane:2,revertLane:Hc(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Oo(e)){if(n)throw Error(l(479))}else n=Eu(e,i,o,2),n!==null&&ra(n,e,2)}function Oo(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function wm(e,n){di=wo=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Nm(e,n,i){if((i&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,i|=o,n.lanes=i,Zn(e,i)}}var dl={readContext:zn,use:Ro,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};dl.useEffectEvent=on;var Bm={readContext:zn,use:Ro,useCallback:function(e,n){return Jn().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:fm,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,To(4194308,4,pm.bind(null,n,e),i)},useLayoutEffect:function(e,n){return To(4194308,4,e,n)},useInsertionEffect:function(e,n){To(4,2,e,n)},useMemo:function(e,n){var i=Jn();n=n===void 0?null:n;var o=e();if(vt){ia(!0);try{e()}finally{ia(!1)}}return i.memoizedState=[o,n],o},useReducer:function(e,n,i){var o=Jn();if(i!==void 0){var c=i(n);if(vt){ia(!0);try{i(n)}finally{ia(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Yy.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var n=Jn();return e={current:e},n.memoizedState=e},useState:function(e){e=nc(e);var n=e.queue,i=Dm.bind(null,Se,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:tc,useDeferredValue:function(e,n){var i=Jn();return ic(i,e,n)},useTransition:function(){var e=nc(!1);return e=Mm.bind(null,Se,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var o=Se,c=Jn();if(Re){if(i===void 0)throw Error(l(407));i=i()}else{if(i=n(),Ke===null)throw Error(l(349));(Ne&127)!==0||Xh(o,n,i)}c.memoizedState=i;var d={value:i,getSnapshot:n};return c.queue=d,fm(Wh.bind(null,o,d,e),[e]),o.flags|=2048,hi(9,{destroy:void 0},Qh.bind(null,o,d,i,n),null),i},useId:function(){var e=Jn(),n=Ke.identifierPrefix;if(Re){var i=Ia,o=Va;i=(o&~(1<<32-_n(o)-1)).toString(32)+i,n="_"+n+"R_"+i,i=No++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=_y++,n="_"+n+"r_"+i.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:oc,useFormState:om,useActionState:om,useOptimistic:function(e){var n=Jn();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=sc.bind(null,Se,!0,i),i.dispatch=n,[e,n]},useMemoCache:Wu,useCacheRefresh:function(){return Jn().memoizedState=Ky.bind(null,Se)},useEffectEvent:function(e){var n=Jn(),i={impl:e};return n.memoizedState=i,function(){if((Pe&2)!==0)throw Error(l(440));return i.impl.apply(void 0,arguments)}}},uc={readContext:zn,use:Ro,useCallback:bm,useContext:zn,useEffect:rc,useImperativeHandle:ym,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:vm,useReducer:Lo,useRef:dm,useState:function(){return Lo(lr)},useDebugValue:tc,useDeferredValue:function(e,n){var i=mn();return Sm(i,je.memoizedState,e,n)},useTransition:function(){var e=Lo(lr)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:ul(e),n]},useSyncExternalStore:Zh,useId:Am,useHostTransitionStatus:oc,useFormState:sm,useActionState:sm,useOptimistic:function(e,n){var i=mn();return nm(i,je,e,n)},useMemoCache:Wu,useCacheRefresh:Em};uc.useEffectEvent=hm;var Rm={readContext:zn,use:Ro,useCallback:bm,useContext:zn,useEffect:rc,useImperativeHandle:ym,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:vm,useReducer:ec,useRef:dm,useState:function(){return ec(lr)},useDebugValue:tc,useDeferredValue:function(e,n){var i=mn();return je===null?ic(i,e,n):Sm(i,je.memoizedState,e,n)},useTransition:function(){var e=ec(lr)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:ul(e),n]},useSyncExternalStore:Zh,useId:Am,useHostTransitionStatus:oc,useFormState:cm,useActionState:cm,useOptimistic:function(e,n){var i=mn();return je!==null?nm(i,je,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:Em};Rm.useEffectEvent=hm;function cc(e,n,i,o){n=e.memoizedState,i=i(o,n),i=i==null?n:g({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var dc={enqueueSetState:function(e,n,i){e=e._reactInternals;var o=fa(),c=Rr(o);c.payload=n,i!=null&&(c.callback=i),n=Lr(e,c,o),n!==null&&(ra(n,e,o),il(n,e,o))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var o=fa(),c=Rr(o);c.tag=1,c.payload=n,i!=null&&(c.callback=i),n=Lr(e,c,o),n!==null&&(ra(n,e,o),il(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=fa(),o=Rr(i);o.tag=2,n!=null&&(o.callback=n),n=Lr(e,o,i),n!==null&&(ra(n,e,i),il(n,e,i))}};function Lm(e,n,i,o,c,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!Qi(i,o)||!Qi(c,d):!0}function Tm(e,n,i,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,o),n.state!==e&&dc.enqueueReplaceState(n,n.state,null)}function St(e,n){var i=n;if("ref"in n){i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}if(e=e.defaultProps){i===n&&(i=g({},i));for(var c in e)i[c]===void 0&&(i[c]=e[c])}return i}function Pm(e){fo(e)}function Om(e){console.error(e)}function zm(e){fo(e)}function zo(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Fm(e,n,i){try{var o=e.onCaughtError;o(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function fc(e,n,i){return i=Rr(i),i.tag=3,i.payload={element:null},i.callback=function(){zo(e,n)},i}function km(e){return e=Rr(e),e.tag=3,e}function Gm(e,n,i,o){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){Fm(n,i,o)}}var b=i.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Fm(n,i,o),typeof c!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Zy(e,n,i,o,c){if(i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=i.alternate,n!==null&&ii(n,i,c,!0),i=sa.current,i!==null){switch(i.tag){case 31:case 13:return Ea===null?Ko():i.alternate===null&&sn===0&&(sn=3),i.flags&=-257,i.flags|=65536,i.lanes=c,o===Co?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([o]):n.add(o),kc(e,o,c)),!1;case 22:return i.flags|=65536,o===Co?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([o]):i.add(o)),kc(e,o,c)),!1}throw Error(l(435,i.tag))}return kc(e,o,c),Ko(),!1}if(Re)return n=sa.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Lu&&(e=Error(l(422),{cause:o}),el(Ma(e,i)))):(o!==Lu&&(n=Error(l(423),{cause:o}),el(Ma(n,i))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Ma(o,i),c=fc(e.stateNode,o,c),Vu(e,c),sn!==4&&(sn=2)),!1;var d=Error(l(520),{cause:o});if(d=Ma(d,i),vl===null?vl=[d]:vl.push(d),sn!==4&&(sn=2),n===null)return!0;o=Ma(o,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=c&-c,i.lanes|=e,e=fc(i.stateNode,o,e),Vu(i,e),!1;case 1:if(n=i.type,d=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(kr===null||!kr.has(d))))return i.flags|=65536,c&=-c,i.lanes|=c,c=km(c),Gm(c,e,i,o),Vu(i,c),!1}i=i.return}while(i!==null);return!1}var hc=Error(l(461)),Sn=!1;function Fn(e,n,i,o){n.child=e===null?Vh(n,null,i,o):bt(n,e.child,i,o)}function jm(e,n,i,o,c){i=i.render;var d=n.ref;if("ref"in o){var b={};for(var C in o)C!=="ref"&&(b[C]=o[C])}else b=o;return mt(n),o=Yu(e,n,i,b,d,c),C=Zu(),e!==null&&!Sn?(Xu(e,n,c),or(e,n,c)):(Re&&C&&Bu(n),n.flags|=1,Fn(e,n,o,c),n.child)}function Hm(e,n,i,o,c){if(e===null){var d=i.type;return typeof d=="function"&&!Du(d)&&d.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=d,_m(e,n,d,o,c)):(e=po(i.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Mc(e,c)){var b=d.memoizedProps;if(i=i.compare,i=i!==null?i:Qi,i(b,o)&&e.ref===n.ref)return or(e,n,c)}return n.flags|=1,e=nr(d,o),e.ref=n.ref,e.return=n,n.child=e}function _m(e,n,i,o,c){if(e!==null){var d=e.memoizedProps;if(Qi(d,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,Mc(e,c))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,or(e,n,c)}return mc(e,n,i,o,c)}function Vm(e,n,i,o){var c=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|i:i,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return Im(e,n,d,i,o)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&So(n,d!==null?d.cachePool:null),d!==null?qh(n,d):Ju(),Uh(n);else return o=n.lanes=536870912,Im(e,n,d!==null?d.baseLanes|i:i,i,o)}else d!==null?(So(n,d.cachePool),qh(n,d),Pr(),n.memoizedState=null):(e!==null&&So(n,null),Ju(),Pr());return Fn(e,n,c,i),n.child}function fl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Im(e,n,i,o,c){var d=Gu();return d=d===null?null:{parent:bn._currentValue,pool:d},n.memoizedState={baseLanes:i,cachePool:d},e!==null&&So(n,null),Ju(),Uh(n),e!==null&&ii(e,n,o,!0),n.childLanes=c,null}function Fo(e,n){return n=Go({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Jm(e,n,i){return bt(n,e.child,null,i),e=Fo(n,n.pendingProps),e.flags|=2,ua(n),n.memoizedState=null,e}function Xy(e,n,i){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(o.mode==="hidden")return e=Fo(n,o),n.lanes=536870912,fl(null,e);if(Uu(n),(e=Xe)?(e=ag(e,Aa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Er!==null?{id:Va,overflow:Ia}:null,retryLane:536870912,hydrationErrors:null},i=wh(e),i.return=n,n.child=i,On=n,Xe=null)):e=null,e===null)throw wr(n);return n.lanes=536870912,null}return Fo(n,o)}var d=e.memoizedState;if(d!==null){var b=d.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Jm(e,n,i);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(l(558));else if(Sn||ii(e,n,i,!1),c=(i&e.childLanes)!==0,Sn||c){if(o=Ke,o!==null&&(b=Xn(o,i),b!==0&&b!==d.retryLane))throw d.retryLane=b,ct(e,b),ra(o,e,b),hc;Ko(),n=Jm(e,n,i)}else e=d.treeContext,Xe=Da(b.nextSibling),On=n,Re=!0,Dr=null,Aa=!1,e!==null&&Rh(n,e),n=Fo(n,o),n.flags|=4096;return n}return e=nr(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ko(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function mc(e,n,i,o,c){return mt(n),i=Yu(e,n,i,o,void 0,c),o=Zu(),e!==null&&!Sn?(Xu(e,n,c),or(e,n,c)):(Re&&o&&Bu(n),n.flags|=1,Fn(e,n,i,c),n.child)}function qm(e,n,i,o,c,d){return mt(n),n.updateQueue=null,i=Yh(n,o,i,c),Kh(e),o=Zu(),e!==null&&!Sn?(Xu(e,n,d),or(e,n,d)):(Re&&o&&Bu(n),n.flags|=1,Fn(e,n,i,d),n.child)}function Um(e,n,i,o,c){if(mt(n),n.stateNode===null){var d=ni,b=i.contextType;typeof b=="object"&&b!==null&&(d=zn(b)),d=new i(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=dc,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Hu(n),b=i.contextType,d.context=typeof b=="object"&&b!==null?zn(b):ni,d.state=n.memoizedState,b=i.getDerivedStateFromProps,typeof b=="function"&&(cc(n,i,b,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&dc.enqueueReplaceState(d,d.state,null),ol(n,o,d,c),ll(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var C=n.memoizedProps,B=St(i,C);d.props=B;var k=d.context,K=i.contextType;b=ni,typeof K=="object"&&K!==null&&(b=zn(K));var Z=i.getDerivedStateFromProps;K=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||k!==b)&&Tm(n,d,o,b),Br=!1;var j=n.memoizedState;d.state=j,ol(n,o,d,c),ll(),k=n.memoizedState,C||j!==k||Br?(typeof Z=="function"&&(cc(n,i,Z,o),k=n.memoizedState),(B=Br||Lm(n,i,B,o,j,k,b))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=k),d.props=o,d.state=k,d.context=b,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,_u(e,n),b=n.memoizedProps,K=St(i,b),d.props=K,Z=n.pendingProps,j=d.context,k=i.contextType,B=ni,typeof k=="object"&&k!==null&&(B=zn(k)),C=i.getDerivedStateFromProps,(k=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==Z||j!==B)&&Tm(n,d,o,B),Br=!1,j=n.memoizedState,d.state=j,ol(n,o,d,c),ll();var _=n.memoizedState;b!==Z||j!==_||Br||e!==null&&e.dependencies!==null&&bo(e.dependencies)?(typeof C=="function"&&(cc(n,i,C,o),_=n.memoizedState),(K=Br||Lm(n,i,K,o,j,_,B)||e!==null&&e.dependencies!==null&&bo(e.dependencies))?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,_,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,_,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_),d.props=o,d.state=_,d.context=B,o=K):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,ko(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,i=o&&typeof i.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=bt(n,e.child,null,c),n.child=bt(n,null,i,c)):Fn(e,n,i,c),n.memoizedState=d.state,e=n.child):e=or(e,n,c),e}function Km(e,n,i,o){return ft(),n.flags|=256,Fn(e,n,i,o),n.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:Fh()}}function yc(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=da),e}function Ym(e,n,i){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),b&&(c=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?Tr(n):Pr(),(e=Xe)?(e=ag(e,Aa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Er!==null?{id:Va,overflow:Ia}:null,retryLane:536870912,hydrationErrors:null},i=wh(e),i.return=n,n.child=i,On=n,Xe=null)):e=null,e===null)throw wr(n);return $c(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,c?(Pr(),c=n.mode,C=Go({mode:"hidden",children:C},c),o=dt(o,c,i,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=pc(i),o.childLanes=yc(e,b,i),n.memoizedState=gc,fl(null,o)):(Tr(n),bc(n,C))}var B=e.memoizedState;if(B!==null&&(C=B.dehydrated,C!==null)){if(d)n.flags&256?(Tr(n),n.flags&=-257,n=vc(e,n,i)):n.memoizedState!==null?(Pr(),n.child=e.child,n.flags|=128,n=null):(Pr(),C=o.fallback,c=n.mode,o=Go({mode:"visible",children:o.children},c),C=dt(C,c,i,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,bt(n,e.child,null,i),o=n.child,o.memoizedState=pc(i),o.childLanes=yc(e,b,i),n.memoizedState=gc,n=fl(null,o));else if(Tr(n),$c(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var k=b.dgst;b=k,o=Error(l(419)),o.stack="",o.digest=b,el({value:o,source:null,stack:null}),n=vc(e,n,i)}else if(Sn||ii(e,n,i,!1),b=(i&e.childLanes)!==0,Sn||b){if(b=Ke,b!==null&&(o=Xn(b,i),o!==0&&o!==B.retryLane))throw B.retryLane=o,ct(e,o),ra(b,e,o),hc;Wc(C)||Ko(),n=vc(e,n,i)}else Wc(C)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Xe=Da(C.nextSibling),On=n,Re=!0,Dr=null,Aa=!1,e!==null&&Rh(n,e),n=bc(n,o.children),n.flags|=4096);return n}return c?(Pr(),C=o.fallback,c=n.mode,B=e.child,k=B.sibling,o=nr(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,k!==null?C=nr(k,C):(C=dt(C,c,i,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,fl(null,o),o=n.child,C=e.child.memoizedState,C===null?C=pc(i):(c=C.cachePool,c!==null?(B=bn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Fh(),C={baseLanes:C.baseLanes|i,cachePool:c}),o.memoizedState=C,o.childLanes=yc(e,b,i),n.memoizedState=gc,fl(e.child,o)):(Tr(n),i=e.child,e=i.sibling,i=nr(i,{mode:"visible",children:o.children}),i.return=n,i.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=i,n.memoizedState=null,i)}function bc(e,n){return n=Go({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Go(e,n){return e=oa(22,e,null,n),e.lanes=0,e}function vc(e,n,i){return bt(n,e.child,null,i),e=bc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zm(e,n,i){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ou(e.return,n,i)}function Sc(e,n,i,o,c,d){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:c,treeForkCount:d}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=i,b.tailMode=c,b.treeForkCount=d)}function Xm(e,n,i){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var b=hn.current,C=(b&2)!==0;if(C?(b=b&1|2,n.flags|=128):b&=1,ae(hn,b),Fn(e,n,o,i),o=Re?$i:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zm(e,i,n);else if(e.tag===19)Zm(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(i=n.child,c=null;i!==null;)e=i.alternate,e!==null&&Do(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=n.child,n.child=null):(c=i.sibling,i.sibling=null),Sc(n,!1,c,i,d,o);break;case"backwards":case"unstable_legacy-backwards":for(i=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Do(e)===null){n.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Sc(n,!0,i,null,d,o);break;case"together":Sc(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function or(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Fr|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(ii(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,i=nr(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=nr(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Mc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bo(e)))}function Qy(e,n,i){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Nr(n,bn,e.memoizedState.cache),ft();break;case 27:case 5:jn(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Nr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Tr(n),n.flags|=128,null):(i&n.child.childLanes)!==0?Ym(e,n,i):(Tr(n),e=or(e,n,i),e!==null?e.sibling:null);Tr(n);break;case 19:var c=(e.flags&128)!==0;if(o=(i&n.childLanes)!==0,o||(ii(e,n,i,!1),o=(i&n.childLanes)!==0),c){if(o)return Xm(e,n,i);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ae(hn,hn.current),o)break;return null;case 22:return n.lanes=0,Vm(e,n,i,n.pendingProps);case 24:Nr(n,bn,e.memoizedState.cache)}return or(e,n,i)}function Qm(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Mc(e,i)&&(n.flags&128)===0)return Sn=!1,Qy(e,n,i);Sn=(e.flags&131072)!==0}else Sn=!1,Re&&(n.flags&1048576)!==0&&Bh(n,$i,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=pt(n.elementType),n.type=e,typeof e=="function")Du(e)?(o=St(e,o),n.tag=1,n=Um(null,n,e,o,i)):(n.tag=0,n=mc(null,n,e,o,i));else{if(e!=null){var c=e.$$typeof;if(c===N){n.tag=11,n=jm(null,n,e,o,i);break e}else if(c===U){n.tag=14,n=Hm(null,n,e,o,i);break e}}throw n=$(e)||e,Error(l(306,n,""))}}return n;case 0:return mc(e,n,n.type,n.pendingProps,i);case 1:return o=n.type,c=St(o,n.pendingProps),Um(e,n,o,c,i);case 3:e:{if(Ae(n,n.stateNode.containerInfo),e===null)throw Error(l(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,_u(e,n),ol(n,o,null,i);var b=n.memoizedState;if(o=b.cache,Nr(n,bn,o),o!==d.cache&&zu(n,[bn],i,!0),ll(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Km(e,n,o,i);break e}else if(o!==c){c=Ma(Error(l(424)),n),el(c),n=Km(e,n,o,i);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=Da(e.firstChild),On=n,Re=!0,Dr=null,Aa=!0,i=Vh(n,null,o,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(ft(),o===c){n=or(e,n,i);break e}Fn(e,n,o,i)}n=n.child}return n;case 26:return ko(e,n),e===null?(i=sg(n.type,null,n.pendingProps,null))?n.memoizedState=i:Re||(i=n.type,e=n.pendingProps,o=es(Ie.current).createElement(i),o[Pn]=n,o[Qn]=e,kn(o,i,e),Bn(o),n.stateNode=o):n.memoizedState=sg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jn(n),e===null&&Re&&(o=n.stateNode=ig(n.type,n.pendingProps,Ie.current),On=n,Aa=!0,c=Xe,_r(n.type)?(ed=c,Xe=Da(o.firstChild)):Xe=c),Fn(e,n,n.pendingProps.children,i),ko(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=o=Xe)&&(o=w3(o,n.type,n.pendingProps,Aa),o!==null?(n.stateNode=o,On=n,Xe=Da(o.firstChild),Aa=!1,c=!0):c=!1),c||wr(n)),jn(n),c=n.type,d=n.pendingProps,b=e!==null?e.memoizedProps:null,o=d.children,Zc(c,d)?o=null:b!==null&&Zc(c,b)&&(n.flags|=32),n.memoizedState!==null&&(c=Yu(e,n,Vy,null,null,i),wl._currentValue=c),ko(e,n),Fn(e,n,o,i),n.child;case 6:return e===null&&Re&&((e=i=Xe)&&(i=N3(i,n.pendingProps,Aa),i!==null?(n.stateNode=i,On=n,Xe=null,e=!0):e=!1),e||wr(n)),null;case 13:return Ym(e,n,i);case 4:return Ae(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=bt(n,null,o,i):Fn(e,n,o,i),n.child;case 11:return jm(e,n,n.type,n.pendingProps,i);case 7:return Fn(e,n,n.pendingProps,i),n.child;case 8:return Fn(e,n,n.pendingProps.children,i),n.child;case 12:return Fn(e,n,n.pendingProps.children,i),n.child;case 10:return o=n.pendingProps,Nr(n,n.type,o.value),Fn(e,n,o.children,i),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,mt(n),c=zn(c),o=o(c),n.flags|=1,Fn(e,n,o,i),n.child;case 14:return Hm(e,n,n.type,n.pendingProps,i);case 15:return _m(e,n,n.type,n.pendingProps,i);case 19:return Xm(e,n,i);case 31:return Xy(e,n,i);case 22:return Vm(e,n,i,n.pendingProps);case 24:return mt(n),o=zn(bn),e===null?(c=Gu(),c===null&&(c=Ke,d=Fu(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=i),c=d),n.memoizedState={parent:o,cache:c},Hu(n),Nr(n,bn,c)):((e.lanes&i)!==0&&(_u(e,n),ol(n,null,null,i),ll()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Nr(n,bn,o)):(o=d.cache,Nr(n,bn,o),o!==c.cache&&zu(n,[bn],i,!0))),Fn(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function sr(e){e.flags|=4}function Cc(e,n,i,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(A1())e.flags|=8192;else throw yt=Co,ju}else e.flags&=-16777217}function Wm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hg(n))if(A1())e.flags|=8192;else throw yt=Co,ju}function jo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Vn():536870912,e.lanes|=n,yi|=n)}function hl(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,o=0;if(n)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=i,n}function Wy(e,n,i){var o=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return i=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),tr(bn),Cn(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ti(n)?sr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),Qe(n),null;case 26:var c=n.type,d=n.memoizedState;return e===null?(sr(n),d!==null?(Qe(n),Wm(n,d)):(Qe(n),Cc(n,c,null,o,i))):d?d!==e.memoizedState?(sr(n),Qe(n),Wm(n,d)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&sr(n),Qe(n),Cc(n,c,e,o,i)),null;case 27:if(Hn(n),i=Ie.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sr(n);else{if(!o){if(n.stateNode===null)throw Error(l(166));return Qe(n),null}e=ce.current,ti(n)?Lh(n):(e=ig(c,o,i),n.stateNode=e,sr(n))}return Qe(n),null;case 5:if(Hn(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sr(n);else{if(!o){if(n.stateNode===null)throw Error(l(166));return Qe(n),null}if(d=ce.current,ti(n))Lh(n);else{var b=es(Ie.current);switch(d){case 1:d=b.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=b.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=b.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=b.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=b.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?b.createElement(c,{is:o.is}):b.createElement(c)}}d[Pn]=n,d[Qn]=o;e:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)d.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break e;for(;b.sibling===null;){if(b.return===null||b.return===n)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=d;e:switch(kn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sr(n)}}return Qe(n),Cc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,i),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&sr(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(l(166));if(e=Ie.current,ti(n)){if(e=n.stateNode,i=n.memoizedProps,o=null,c=On,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Pn]=n,e=!!(e.nodeValue===i||o!==null&&o.suppressHydrationWarning===!0||Y1(e.nodeValue,i)),e||wr(n,!0)}else e=es(e).createTextNode(o),e[Pn]=n,n.stateNode=e}return Qe(n),null;case 31:if(i=n.memoizedState,e===null||e.memoizedState!==null){if(o=ti(n),i!==null){if(e===null){if(!o)throw Error(l(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Pn]=n}else ft(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else i=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return n.flags&256?(ua(n),n):(ua(n),null);if((n.flags&128)!==0)throw Error(l(558))}return Qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ti(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[Pn]=n}else ft(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ua(n),n):(ua(n),null)}return ua(n),(n.flags&128)!==0?(n.lanes=i,n):(i=o!==null,e=e!==null&&e.memoizedState!==null,i&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),i!==e&&i&&(n.child.flags|=8192),jo(n,n.updateQueue),Qe(n),null);case 4:return Cn(),e===null&&Jc(n.stateNode.containerInfo),Qe(n),null;case 10:return tr(n.type),Qe(n),null;case 19:if(be(hn),o=n.memoizedState,o===null)return Qe(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)hl(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Do(e),d!==null){for(n.flags|=128,hl(o,!1),e=d.updateQueue,n.updateQueue=e,jo(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)Dh(i,e),i=i.sibling;return ae(hn,hn.current&1|2),Re&&ar(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&qe()>Jo&&(n.flags|=128,c=!0,hl(o,!1),n.lanes=4194304)}else{if(!c)if(e=Do(d),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,jo(n,e),hl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Re)return Qe(n),null}else 2*qe()-o.renderingStartTime>Jo&&i!==536870912&&(n.flags|=128,c=!0,hl(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=qe(),e.sibling=null,i=hn.current,ae(hn,c?i&1|2:i&1),Re&&ar(n,o.treeForkCount),e):(Qe(n),null);case 22:case 23:return ua(n),qu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(i&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),i=n.updateQueue,i!==null&&jo(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048),e!==null&&be(gt),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),tr(bn),Qe(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function $y(e,n){switch(Ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tr(bn),Cn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Hn(n),null;case 31:if(n.memoizedState!==null){if(ua(n),n.alternate===null)throw Error(l(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ua(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return be(hn),null;case 4:return Cn(),null;case 10:return tr(n.type),null;case 22:case 23:return ua(n),qu(),e!==null&&be(gt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return tr(bn),null;case 25:return null;default:return null}}function $m(e,n){switch(Ru(n),n.tag){case 3:tr(bn),Cn();break;case 26:case 27:case 5:Hn(n);break;case 4:Cn();break;case 31:n.memoizedState!==null&&ua(n);break;case 13:ua(n);break;case 19:be(hn);break;case 10:tr(n.type);break;case 22:case 23:ua(n),qu(),e!==null&&be(gt);break;case 24:tr(bn)}}function ml(e,n){try{var i=n.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var c=o.next;i=c;do{if((i.tag&e)===e){o=void 0;var d=i.create,b=i.inst;o=d(),b.destroy=o}i=i.next}while(i!==c)}}catch(C){ke(n,n.return,C)}}function Or(e,n,i){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var b=o.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,c=n;var B=i,k=C;try{k()}catch(K){ke(c,B,K)}}}o=o.next}while(o!==d)}}catch(K){ke(n,n.return,K)}}function e1(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{Jh(n,i)}catch(o){ke(e,e.return,o)}}}function n1(e,n,i){i.props=St(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(o){ke(e,n,o)}}function gl(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof i=="function"?e.refCleanup=i(o):i.current=o}}catch(c){ke(e,n,c)}}function Ja(e,n){var i=e.ref,o=e.refCleanup;if(i!==null)if(typeof o=="function")try{o()}catch(c){ke(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){ke(e,n,c)}else i.current=null}function a1(e){var n=e.type,i=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&o.focus();break e;case"img":i.src?o.src=i.src:i.srcSet&&(o.srcset=i.srcSet)}}catch(c){ke(e,e.return,c)}}function xc(e,n,i){try{var o=e.stateNode;M3(o,e.type,i,n),o[Qn]=n}catch(c){ke(e,e.return,c)}}function r1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_r(e.type)||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||r1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_r(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,n,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=$a));else if(o!==4&&(o===27&&_r(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(Ec(e,n,i),e=e.sibling;e!==null;)Ec(e,n,i),e=e.sibling}function Ho(e,n,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(o!==4&&(o===27&&_r(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Ho(e,n,i),e=e.sibling;e!==null;)Ho(e,n,i),e=e.sibling}function t1(e){var n=e.stateNode,i=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);kn(n,o,i),n[Pn]=e,n[Qn]=i}catch(d){ke(e,e.return,d)}}var ur=!1,Mn=!1,Dc=!1,i1=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function e3(e,n){if(e=e.containerInfo,Kc=os,e=yh(e),vu(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var b=0,C=-1,B=-1,k=0,K=0,Z=e,j=null;n:for(;;){for(var _;Z!==i||c!==0&&Z.nodeType!==3||(C=b+c),Z!==d||o!==0&&Z.nodeType!==3||(B=b+o),Z.nodeType===3&&(b+=Z.nodeValue.length),(_=Z.firstChild)!==null;)j=Z,Z=_;for(;;){if(Z===e)break n;if(j===i&&++k===c&&(C=b),j===d&&++K===o&&(B=b),(_=Z.nextSibling)!==null)break;Z=j,j=Z.parentNode}Z=_}i=C===-1||B===-1?null:{start:C,end:B}}else i=null}i=i||{start:0,end:0}}else i=null;for(Yc={focusedElem:e,selectionRange:i},os=!1,Rn=n;Rn!==null;)if(n=Rn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Rn=e;else for(;Rn!==null;){switch(n=Rn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)c=e[i],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,i=n,c=d.memoizedProps,d=d.memoizedState,o=i.stateNode;try{var oe=St(i.type,c);e=o.getSnapshotBeforeUpdate(oe,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(he){ke(i,i.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)Qc(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=n.sibling,e!==null){e.return=n.return,Rn=e;break}Rn=n.return}}function l1(e,n,i){var o=i.flags;switch(i.tag){case 0:case 11:case 15:dr(e,i),o&4&&ml(5,i);break;case 1:if(dr(e,i),o&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(b){ke(i,i.return,b)}else{var c=St(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){ke(i,i.return,b)}}o&64&&e1(i),o&512&&gl(i,i.return);break;case 3:if(dr(e,i),o&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Jh(e,n)}catch(b){ke(i,i.return,b)}}break;case 27:n===null&&o&4&&t1(i);case 26:case 5:dr(e,i),n===null&&o&4&&a1(i),o&512&&gl(i,i.return);break;case 12:dr(e,i);break;case 31:dr(e,i),o&4&&u1(e,i);break;case 13:dr(e,i),o&4&&c1(e,i),o&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=u3.bind(null,i),B3(e,i))));break;case 22:if(o=i.memoizedState!==null||ur,!o){n=n!==null&&n.memoizedState!==null||Mn,c=ur;var d=Mn;ur=o,(Mn=n)&&!d?fr(e,i,(i.subtreeFlags&8772)!==0):dr(e,i),ur=c,Mn=d}break;case 30:break;default:dr(e,i)}}function o1(e){var n=e.alternate;n!==null&&(e.alternate=null,o1(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&au(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,$n=!1;function cr(e,n,i){for(i=i.child;i!==null;)s1(e,n,i),i=i.sibling}function s1(e,n,i){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(In,i)}catch{}switch(i.tag){case 26:Mn||Ja(i,n),cr(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Mn||Ja(i,n);var o=nn,c=$n;_r(i.type)&&(nn=i.stateNode,$n=!1),cr(e,n,i),Al(i.stateNode),nn=o,$n=c;break;case 5:Mn||Ja(i,n);case 6:if(o=nn,c=$n,nn=null,cr(e,n,i),nn=o,$n=c,nn!==null)if($n)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(i.stateNode)}catch(d){ke(i,n,d)}else try{nn.removeChild(i.stateNode)}catch(d){ke(i,n,d)}break;case 18:nn!==null&&($n?(e=nn,eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Ei(e)):eg(nn,i.stateNode));break;case 4:o=nn,c=$n,nn=i.stateNode.containerInfo,$n=!0,cr(e,n,i),nn=o,$n=c;break;case 0:case 11:case 14:case 15:Or(2,i,n),Mn||Or(4,i,n),cr(e,n,i);break;case 1:Mn||(Ja(i,n),o=i.stateNode,typeof o.componentWillUnmount=="function"&&n1(i,n,o)),cr(e,n,i);break;case 21:cr(e,n,i);break;case 22:Mn=(o=Mn)||i.memoizedState!==null,cr(e,n,i),Mn=o;break;default:cr(e,n,i)}}function u1(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ei(e)}catch(i){ke(n,n.return,i)}}}function c1(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(i){ke(n,n.return,i)}}function n3(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new i1),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new i1),n;default:throw Error(l(435,e.tag))}}function _o(e,n){var i=n3(e);n.forEach(function(o){if(!i.has(o)){i.add(o);var c=c3.bind(null,e,o);o.then(c,c)}})}function ea(e,n){var i=n.deletions;if(i!==null)for(var o=0;o<i.length;o++){var c=i[o],d=e,b=n,C=b;e:for(;C!==null;){switch(C.tag){case 27:if(_r(C.type)){nn=C.stateNode,$n=!1;break e}break;case 5:nn=C.stateNode,$n=!1;break e;case 3:case 4:nn=C.stateNode.containerInfo,$n=!0;break e}C=C.return}if(nn===null)throw Error(l(160));s1(d,b,c),nn=null,$n=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d1(n,e),n=n.sibling}var Fa=null;function d1(e,n){var i=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ea(n,e),na(e),o&4&&(Or(3,e,e.return),ml(3,e),Or(5,e,e.return));break;case 1:ea(n,e),na(e),o&512&&(Mn||i===null||Ja(i,i.return)),o&64&&ur&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?o:i.concat(o))));break;case 26:var c=Fa;if(ea(n,e),na(e),o&512&&(Mn||i===null||Ja(i,i.return)),o&4){var d=i!==null?i.memoizedState:null;if(o=e.memoizedState,i===null)if(o===null)if(e.stateNode===null){e:{o=e.type,i=e.memoizedProps,c=c.ownerDocument||c;n:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Vi]||d[Pn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),kn(d,o,i),d[Pn]=e,Bn(d),o=d;break e;case"link":var b=dg("link","href",c).get(o+(i.href||""));if(b){for(var C=0;C<b.length;C++)if(d=b[C],d.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&d.getAttribute("rel")===(i.rel==null?null:i.rel)&&d.getAttribute("title")===(i.title==null?null:i.title)&&d.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){b.splice(C,1);break n}}d=c.createElement(o),kn(d,o,i),c.head.appendChild(d);break;case"meta":if(b=dg("meta","content",c).get(o+(i.content||""))){for(C=0;C<b.length;C++)if(d=b[C],d.getAttribute("content")===(i.content==null?null:""+i.content)&&d.getAttribute("name")===(i.name==null?null:i.name)&&d.getAttribute("property")===(i.property==null?null:i.property)&&d.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&d.getAttribute("charset")===(i.charSet==null?null:i.charSet)){b.splice(C,1);break n}}d=c.createElement(o),kn(d,o,i),c.head.appendChild(d);break;default:throw Error(l(468,o))}d[Pn]=e,Bn(d),o=d}e.stateNode=o}else fg(c,e.type,e.stateNode);else e.stateNode=cg(c,o,e.memoizedProps);else d!==o?(d===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):d.count--,o===null?fg(c,e.type,e.stateNode):cg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xc(e,e.memoizedProps,i.memoizedProps)}break;case 27:ea(n,e),na(e),o&512&&(Mn||i===null||Ja(i,i.return)),i!==null&&o&4&&xc(e,e.memoizedProps,i.memoizedProps);break;case 5:if(ea(n,e),na(e),o&512&&(Mn||i===null||Ja(i,i.return)),e.flags&32){c=e.stateNode;try{Yt(c,"")}catch(oe){ke(e,e.return,oe)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,xc(e,c,i!==null?i.memoizedProps:c)),o&1024&&(Dc=!0);break;case 6:if(ea(n,e),na(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,i=e.stateNode;try{i.nodeValue=o}catch(oe){ke(e,e.return,oe)}}break;case 3:if(rs=null,c=Fa,Fa=ns(n.containerInfo),ea(n,e),Fa=c,na(e),o&4&&i!==null&&i.memoizedState.isDehydrated)try{Ei(n.containerInfo)}catch(oe){ke(e,e.return,oe)}Dc&&(Dc=!1,f1(e));break;case 4:o=Fa,Fa=ns(e.stateNode.containerInfo),ea(n,e),na(e),Fa=o;break;case 12:ea(n,e),na(e);break;case 31:ea(n,e),na(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_o(e,o)));break;case 13:ea(n,e),na(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Io=qe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_o(e,o)));break;case 22:c=e.memoizedState!==null;var B=i!==null&&i.memoizedState!==null,k=ur,K=Mn;if(ur=k||c,Mn=K||B,ea(n,e),Mn=K,ur=k,na(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(i===null||B||ur||Mn||Mt(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){B=i=n;try{if(d=B.stateNode,c)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=B.stateNode;var Z=B.memoizedProps.style,j=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;C.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(oe){ke(B,B.return,oe)}}}else if(n.tag===6){if(i===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(oe){ke(B,B.return,oe)}}}else if(n.tag===18){if(i===null){B=n;try{var _=B.stateNode;c?ng(_,!0):ng(B.stateNode,!1)}catch(oe){ke(B,B.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(i=o.retryQueue,i!==null&&(o.retryQueue=null,_o(e,i))));break;case 19:ea(n,e),na(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_o(e,o)));break;case 30:break;case 21:break;default:ea(n,e),na(e)}}function na(e){var n=e.flags;if(n&2){try{for(var i,o=e.return;o!==null;){if(r1(o)){i=o;break}o=o.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var c=i.stateNode,d=Ac(e);Ho(e,d,c);break;case 5:var b=i.stateNode;i.flags&32&&(Yt(b,""),i.flags&=-33);var C=Ac(e);Ho(e,C,b);break;case 3:case 4:var B=i.stateNode.containerInfo,k=Ac(e);Ec(e,k,B);break;default:throw Error(l(161))}}catch(K){ke(e,e.return,K)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function f1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;f1(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function dr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l1(e,n.alternate,n),n=n.sibling}function Mt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Or(4,n,n.return),Mt(n);break;case 1:Ja(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&n1(n,n.return,i),Mt(n);break;case 27:Al(n.stateNode);case 26:case 5:Ja(n,n.return),Mt(n);break;case 22:n.memoizedState===null&&Mt(n);break;case 30:Mt(n);break;default:Mt(n)}e=e.sibling}}function fr(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:fr(c,d,i),ml(4,d);break;case 1:if(fr(c,d,i),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){ke(o,o.return,k)}if(o=d,c=o.updateQueue,c!==null){var C=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Ih(B[c],C)}catch(k){ke(o,o.return,k)}}i&&b&64&&e1(d),gl(d,d.return);break;case 27:t1(d);case 26:case 5:fr(c,d,i),i&&o===null&&b&4&&a1(d),gl(d,d.return);break;case 12:fr(c,d,i);break;case 31:fr(c,d,i),i&&b&4&&u1(c,d);break;case 13:fr(c,d,i),i&&b&4&&c1(c,d);break;case 22:d.memoizedState===null&&fr(c,d,i),gl(d,d.return);break;case 30:break;default:fr(c,d,i)}n=n.sibling}}function wc(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&nl(i))}function Nc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&nl(e))}function ka(e,n,i,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)h1(e,n,i,o),n=n.sibling}function h1(e,n,i,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ka(e,n,i,o),c&2048&&ml(9,n);break;case 1:ka(e,n,i,o);break;case 3:ka(e,n,i,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&nl(e)));break;case 12:if(c&2048){ka(e,n,i,o),e=n.stateNode;try{var d=n.memoizedProps,b=d.id,C=d.onPostCommit;typeof C=="function"&&C(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){ke(n,n.return,B)}}else ka(e,n,i,o);break;case 31:ka(e,n,i,o);break;case 13:ka(e,n,i,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?ka(e,n,i,o):pl(e,n):d._visibility&2?ka(e,n,i,o):(d._visibility|=2,mi(e,n,i,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&wc(b,n);break;case 24:ka(e,n,i,o),c&2048&&Nc(n.alternate,n);break;default:ka(e,n,i,o)}}function mi(e,n,i,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,b=n,C=i,B=o,k=b.flags;switch(b.tag){case 0:case 11:case 15:mi(d,b,C,B,c),ml(8,b);break;case 23:break;case 22:var K=b.stateNode;b.memoizedState!==null?K._visibility&2?mi(d,b,C,B,c):pl(d,b):(K._visibility|=2,mi(d,b,C,B,c)),c&&k&2048&&wc(b.alternate,b);break;case 24:mi(d,b,C,B,c),c&&k&2048&&Nc(b.alternate,b);break;default:mi(d,b,C,B,c)}n=n.sibling}}function pl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,o=n,c=o.flags;switch(o.tag){case 22:pl(i,o),c&2048&&wc(o.alternate,o);break;case 24:pl(i,o),c&2048&&Nc(o.alternate,o);break;default:pl(i,o)}n=n.sibling}}var yl=8192;function gi(e,n,i){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)m1(e,n,i),e=e.sibling}function m1(e,n,i){switch(e.tag){case 26:gi(e,n,i),e.flags&yl&&e.memoizedState!==null&&_3(i,Fa,e.memoizedState,e.memoizedProps);break;case 5:gi(e,n,i);break;case 3:case 4:var o=Fa;Fa=ns(e.stateNode.containerInfo),gi(e,n,i),Fa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=yl,yl=16777216,gi(e,n,i),yl=o):gi(e,n,i));break;default:gi(e,n,i)}}function g1(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];Rn=o,y1(o,e)}g1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)p1(e),e=e.sibling}function p1(e){switch(e.tag){case 0:case 11:case 15:bl(e),e.flags&2048&&Or(9,e,e.return);break;case 3:bl(e);break;case 12:bl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vo(e)):bl(e);break;default:bl(e)}}function Vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];Rn=o,y1(o,e)}g1(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Or(8,n,n.return),Vo(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Vo(n));break;default:Vo(n)}e=e.sibling}}function y1(e,n){for(;Rn!==null;){var i=Rn;switch(i.tag){case 0:case 11:case 15:Or(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var o=i.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:nl(i.memoizedState.cache)}if(o=i.child,o!==null)o.return=i,Rn=o;else e:for(i=e;Rn!==null;){o=Rn;var c=o.sibling,d=o.return;if(o1(o),o===i){Rn=null;break e}if(c!==null){c.return=d,Rn=c;break e}Rn=d}}}var a3={getCacheForType:function(e){var n=zn(bn),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i},cacheSignal:function(){return zn(bn).controller.signal}},r3=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ke=null,Ee=null,Ne=0,Fe=0,ca=null,zr=!1,pi=!1,Bc=!1,hr=0,sn=0,Fr=0,Ct=0,Rc=0,da=0,yi=0,vl=null,aa=null,Lc=!1,Io=0,b1=0,Jo=1/0,qo=null,kr=null,An=0,Gr=null,bi=null,mr=0,Tc=0,Pc=null,v1=null,Sl=0,Oc=null;function fa(){return(Pe&2)!==0&&Ne!==0?Ne&-Ne:R.T!==null?Hc():eu()}function S1(){if(da===0)if((Ne&536870912)===0||Re){var e=Ht;Ht<<=1,(Ht&3932160)===0&&(Ht=262144),da=e}else da=536870912;return e=sa.current,e!==null&&(e.flags|=32),da}function ra(e,n,i){(e===Ke&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(vi(e,0),jr(e,Ne,da,!1)),an(e,i),((Pe&2)===0||e!==Ke)&&(e===Ke&&((Pe&2)===0&&(Ct|=i),sn===4&&jr(e,Ne,da,!1)),qa(e))}function M1(e,n,i){if((Pe&6)!==0)throw Error(l(327));var o=!i&&(n&127)===0&&(n&e.expiredLanes)===0||en(e,n),c=o?l3(e,n):Fc(e,n,!0),d=o;do{if(c===0){pi&&!o&&jr(e,n,0,!1);break}else{if(i=e.current.alternate,d&&!t3(i)){c=Fc(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var C=e;c=vl;var B=C.current.memoizedState.isDehydrated;if(B&&(vi(C,b).flags|=256),b=Fc(C,b,!1),b!==2){if(Bc&&!B){C.errorRecoveryDisabledLanes|=d,Ct|=d,c=4;break e}d=aa,aa=c,d!==null&&(aa===null?aa=d:aa.push.apply(aa,d))}c=b}if(d=!1,c!==2)continue}}if(c===1){vi(e,0),jr(e,n,0,!0);break}e:{switch(o=e,d=c,d){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:jr(o,n,da,!zr);break e;case 2:aa=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(c=Io+300-qe(),10<c)){if(jr(o,n,da,!zr),pe(o,0,!0)!==0)break e;mr=n,o.timeoutHandle=W1(C1.bind(null,o,i,aa,qo,Lc,n,da,Ct,yi,zr,d,"Throttled",-0,0),c);break e}C1(o,i,aa,qo,Lc,n,da,Ct,yi,zr,d,null,-0,0)}}break}while(!0);qa(e)}function C1(e,n,i,o,c,d,b,C,B,k,K,Z,j,_){if(e.timeoutHandle=-1,Z=n.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$a},m1(n,d,Z);var oe=(d&62914560)===d?Io-qe():(d&4194048)===d?b1-qe():0;if(oe=V3(Z,oe),oe!==null){mr=d,e.cancelPendingCommit=oe(R1.bind(null,e,n,d,i,o,c,b,C,B,K,Z,null,j,_)),jr(e,d,b,!k);return}}R1(e,n,d,i,o,c,b,C,B)}function t3(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var o=0;o<i.length;o++){var c=i[o],d=c.getSnapshot;c=c.value;try{if(!la(d(),c))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function jr(e,n,i,o){n&=~Rc,n&=~Ct,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-_n(c),b=1<<d;o[d]=-1,c&=~b}i!==0&&it(e,i,n)}function Uo(){return(Pe&6)===0?(Ml(0),!1):!0}function zc(){if(Ee!==null){if(Fe===0)var e=Ee.return;else e=Ee,rr=ht=null,Qu(e),ui=null,rl=0,e=Ee;for(;e!==null;)$m(e.alternate,e),e=e.return;Ee=null}}function vi(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,A3(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),mr=0,zc(),Ke=e,Ee=i=nr(e.current,null),Ne=n,Fe=0,ca=null,zr=!1,pi=en(e,n),Bc=!1,yi=da=Rc=Ct=Fr=sn=0,aa=vl=null,Lc=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-_n(o),d=1<<c;n|=e[c],o&=~d}return hr=n,ho(),i}function x1(e,n){Se=null,R.H=dl,n===si||n===Mo?(n=jh(),Fe=3):n===ju?(n=jh(),Fe=4):Fe=n===hc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ca=n,Ee===null&&(sn=1,zo(e,Ma(n,e.current)))}function A1(){var e=sa.current;return e===null?!0:(Ne&4194048)===Ne?Ea===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Ea:!1}function E1(){var e=R.H;return R.H=dl,e===null?dl:e}function D1(){var e=R.A;return R.A=a3,e}function Ko(){sn=4,zr||(Ne&4194048)!==Ne&&sa.current!==null||(pi=!0),(Fr&134217727)===0&&(Ct&134217727)===0||Ke===null||jr(Ke,Ne,da,!1)}function Fc(e,n,i){var o=Pe;Pe|=2;var c=E1(),d=D1();(Ke!==e||Ne!==n)&&(qo=null,vi(e,n)),n=!1;var b=sn;e:do try{if(Fe!==0&&Ee!==null){var C=Ee,B=ca;switch(Fe){case 8:zc(),b=6;break e;case 3:case 2:case 9:case 6:sa.current===null&&(n=!0);var k=Fe;if(Fe=0,ca=null,Si(e,C,B,k),i&&pi){b=0;break e}break;default:k=Fe,Fe=0,ca=null,Si(e,C,B,k)}}i3(),b=sn;break}catch(K){x1(e,K)}while(!0);return n&&e.shellSuspendCounter++,rr=ht=null,Pe=o,R.H=c,R.A=d,Ee===null&&(Ke=null,Ne=0,ho()),b}function i3(){for(;Ee!==null;)w1(Ee)}function l3(e,n){var i=Pe;Pe|=2;var o=E1(),c=D1();Ke!==e||Ne!==n?(qo=null,Jo=qe()+500,vi(e,n)):pi=en(e,n);e:do try{if(Fe!==0&&Ee!==null){n=Ee;var d=ca;n:switch(Fe){case 1:Fe=0,ca=null,Si(e,n,d,1);break;case 2:case 9:if(kh(d)){Fe=0,ca=null,N1(n);break}n=function(){Fe!==2&&Fe!==9||Ke!==e||(Fe=7),qa(e)},d.then(n,n);break e;case 3:Fe=7;break e;case 4:Fe=5;break e;case 7:kh(d)?(Fe=0,ca=null,N1(n)):(Fe=0,ca=null,Si(e,n,d,7));break;case 5:var b=null;switch(Ee.tag){case 26:b=Ee.memoizedState;case 5:case 27:var C=Ee;if(b?hg(b):C.stateNode.complete){Fe=0,ca=null;var B=C.sibling;if(B!==null)Ee=B;else{var k=C.return;k!==null?(Ee=k,Yo(k)):Ee=null}break n}}Fe=0,ca=null,Si(e,n,d,5);break;case 6:Fe=0,ca=null,Si(e,n,d,6);break;case 8:zc(),sn=6;break e;default:throw Error(l(462))}}o3();break}catch(K){x1(e,K)}while(!0);return rr=ht=null,R.H=o,R.A=c,Pe=i,Ee!==null?0:(Ke=null,Ne=0,ho(),sn)}function o3(){for(;Ee!==null&&!ze();)w1(Ee)}function w1(e){var n=Qm(e.alternate,e,hr);e.memoizedProps=e.pendingProps,n===null?Yo(e):Ee=n}function N1(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=qm(i,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=qm(i,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:Qu(n);default:$m(i,n),n=Ee=Dh(n,hr),n=Qm(i,n,hr)}e.memoizedProps=e.pendingProps,n===null?Yo(e):Ee=n}function Si(e,n,i,o){rr=ht=null,Qu(n),ui=null,rl=0;var c=n.return;try{if(Zy(e,c,n,i,Ne)){sn=1,zo(e,Ma(i,e.current)),Ee=null;return}}catch(d){if(c!==null)throw Ee=c,d;sn=1,zo(e,Ma(i,e.current)),Ee=null;return}n.flags&32768?(Re||o===1?e=!0:pi||(Ne&536870912)!==0?e=!1:(zr=e=!0,(o===2||o===9||o===3||o===6)&&(o=sa.current,o!==null&&o.tag===13&&(o.flags|=16384))),B1(n,e)):Yo(n)}function Yo(e){var n=e;do{if((n.flags&32768)!==0){B1(n,zr);return}e=n.return;var i=Wy(n.alternate,n,hr);if(i!==null){Ee=i;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);sn===0&&(sn=5)}function B1(e,n){do{var i=$y(e.alternate,e);if(i!==null){i.flags&=32767,Ee=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=i}while(e!==null);sn=6,Ee=null}function R1(e,n,i,o,c,d,b,C,B){e.cancelPendingCommit=null;do Zo();while(An!==0);if((Pe&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));if(d=n.lanes|n.childLanes,d|=Au,Yn(e,i,d,b,C,B),e===Ke&&(Ee=Ke=null,Ne=0),bi=n,Gr=e,mr=i,Tc=d,Pc=c,v1=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,d3(ln,function(){return z1(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=R.T,R.T=null,c=I.p,I.p=2,b=Pe,Pe|=4;try{e3(e,n,i)}finally{Pe=b,I.p=c,R.T=o}}An=1,L1(),T1(),P1()}}function L1(){if(An===1){An=0;var e=Gr,n=bi,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var o=I.p;I.p=2;var c=Pe;Pe|=4;try{d1(n,e);var d=Yc,b=yh(e.containerInfo),C=d.focusedElem,B=d.selectionRange;if(b!==C&&C&&C.ownerDocument&&ph(C.ownerDocument.documentElement,C)){if(B!==null&&vu(C)){var k=B.start,K=B.end;if(K===void 0&&(K=k),"selectionStart"in C)C.selectionStart=k,C.selectionEnd=Math.min(K,C.value.length);else{var Z=C.ownerDocument||document,j=Z&&Z.defaultView||window;if(j.getSelection){var _=j.getSelection(),oe=C.textContent.length,he=Math.min(B.start,oe),_e=B.end===void 0?he:Math.min(B.end,oe);!_.extend&&he>_e&&(b=_e,_e=he,he=b);var P=gh(C,he),T=gh(C,_e);if(P&&T&&(_.rangeCount!==1||_.anchorNode!==P.node||_.anchorOffset!==P.offset||_.focusNode!==T.node||_.focusOffset!==T.offset)){var F=Z.createRange();F.setStart(P.node,P.offset),_.removeAllRanges(),he>_e?(_.addRange(F),_.extend(T.node,T.offset)):(F.setEnd(T.node,T.offset),_.addRange(F))}}}}for(Z=[],_=C;_=_.parentNode;)_.nodeType===1&&Z.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Z.length;C++){var Y=Z[C];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}os=!!Kc,Yc=Kc=null}finally{Pe=c,I.p=o,R.T=i}}e.current=n,An=2}}function T1(){if(An===2){An=0;var e=Gr,n=bi,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var o=I.p;I.p=2;var c=Pe;Pe|=4;try{l1(e,n.alternate,n)}finally{Pe=c,I.p=o,R.T=i}}An=3}}function P1(){if(An===4||An===3){An=0,wn();var e=Gr,n=bi,i=mr,o=v1;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,bi=Gr=null,O1(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(kr=null),Oa(i),n=n.stateNode,xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(In,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=R.T,c=I.p,I.p=2,R.T=null;try{for(var d=e.onRecoverableError,b=0;b<o.length;b++){var C=o[b];d(C.value,{componentStack:C.stack})}}finally{R.T=n,I.p=c}}(mr&3)!==0&&Zo(),qa(e),c=e.pendingLanes,(i&261930)!==0&&(c&42)!==0?e===Oc?Sl++:(Sl=0,Oc=e):Sl=0,Ml(0)}}function O1(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,nl(n)))}function Zo(){return L1(),T1(),P1(),z1()}function z1(){if(An!==5)return!1;var e=Gr,n=Tc;Tc=0;var i=Oa(mr),o=R.T,c=I.p;try{I.p=32>i?32:i,R.T=null,i=Pc,Pc=null;var d=Gr,b=mr;if(An=0,bi=Gr=null,mr=0,(Pe&6)!==0)throw Error(l(331));var C=Pe;if(Pe|=4,p1(d.current),h1(d,d.current,b,i),Pe=C,Ml(0,!1),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(In,d)}catch{}return!0}finally{I.p=c,R.T=o,O1(e,n)}}function F1(e,n,i){n=Ma(i,n),n=fc(e.stateNode,n,2),e=Lr(e,n,2),e!==null&&(an(e,2),qa(e))}function ke(e,n,i){if(e.tag===3)F1(e,e,i);else for(;n!==null;){if(n.tag===3){F1(n,e,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(kr===null||!kr.has(o))){e=Ma(i,e),i=km(2),o=Lr(n,i,2),o!==null&&(Gm(i,o,n,e),an(o,2),qa(o));break}}n=n.return}}function kc(e,n,i){var o=e.pingCache;if(o===null){o=e.pingCache=new r3;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(i)||(Bc=!0,c.add(i),e=s3.bind(null,e,n,i),n.then(e,e))}function s3(e,n,i){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ke===e&&(Ne&i)===i&&(sn===4||sn===3&&(Ne&62914560)===Ne&&300>qe()-Io?(Pe&2)===0&&vi(e,0):Rc|=i,yi===Ne&&(yi=0)),qa(e)}function k1(e,n){n===0&&(n=Vn()),e=ct(e,n),e!==null&&(an(e,n),qa(e))}function u3(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),k1(e,i)}function c3(e,n){var i=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(n),k1(e,i)}function d3(e,n){return fn(e,n)}var Xo=null,Mi=null,Gc=!1,Qo=!1,jc=!1,Hr=0;function qa(e){e!==Mi&&e.next===null&&(Mi===null?Xo=Mi=e:Mi=Mi.next=e),Qo=!0,Gc||(Gc=!0,h3())}function Ml(e,n){if(!jc&&Qo){jc=!0;do for(var i=!1,o=Xo;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var b=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-_n(42|e)+1)-1,d&=c&~(b&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(i=!0,_1(o,d))}else d=Ne,d=pe(o,o===Ke?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||en(o,d)||(i=!0,_1(o,d));o=o.next}while(i);jc=!1}}function f3(){G1()}function G1(){Qo=Gc=!1;var e=0;Hr!==0&&x3()&&(e=Hr);for(var n=qe(),i=null,o=Xo;o!==null;){var c=o.next,d=j1(o,n);d===0?(o.next=null,i===null?Xo=c:i.next=c,c===null&&(Mi=i)):(i=o,(e!==0||(d&3)!==0)&&(Qo=!0)),o=c}An!==0&&An!==5||Ml(e),Hr!==0&&(Hr=0)}function j1(e,n){for(var i=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-_n(d),C=1<<b,B=c[b];B===-1?((C&i)===0||(C&o)!==0)&&(c[b]=Nn(C,n)):B<=n&&(e.expiredLanes|=C),d&=~C}if(n=Ke,i=Ne,i=pe(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,i===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ya(o),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||en(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(o!==null&&ya(o),Oa(i)){case 2:case 8:i=Ue;break;case 32:i=ln;break;case 268435456:i=Pa;break;default:i=ln}return o=H1.bind(null,e),i=fn(i,o),e.callbackPriority=n,e.callbackNode=i,n}return o!==null&&o!==null&&ya(o),e.callbackPriority=2,e.callbackNode=null,2}function H1(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Zo()&&e.callbackNode!==i)return null;var o=Ne;return o=pe(e,e===Ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(M1(e,o,n),j1(e,qe()),e.callbackNode!=null&&e.callbackNode===i?H1.bind(null,e):null)}function _1(e,n){if(Zo())return null;M1(e,n,!0)}function h3(){E3(function(){(Pe&6)!==0?fn(Me,f3):G1()})}function Hc(){if(Hr===0){var e=li;e===0&&(e=jt,jt<<=1,(jt&261888)===0&&(jt=256)),Hr=e}return Hr}function V1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:to(""+e)}function I1(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function m3(e,n,i,o,c){if(n==="submit"&&i&&i.stateNode===c){var d=V1((c[Qn]||null).action),b=o.submitter;b&&(n=(n=b[Qn]||null)?V1(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var C=new so("action","action",null,o,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Hr!==0){var B=b?I1(c,b):new FormData(c);lc(i,{pending:!0,data:B,method:c.method,action:d},null,B)}}else typeof d=="function"&&(C.preventDefault(),B=b?I1(c,b):new FormData(c),lc(i,{pending:!0,data:B,method:c.method,action:d},d,B))},currentTarget:c}]})}}for(var _c=0;_c<xu.length;_c++){var Vc=xu[_c],g3=Vc.toLowerCase(),p3=Vc[0].toUpperCase()+Vc.slice(1);za(g3,"on"+p3)}za(Sh,"onAnimationEnd"),za(Mh,"onAnimationIteration"),za(Ch,"onAnimationStart"),za("dblclick","onDoubleClick"),za("focusin","onFocus"),za("focusout","onBlur"),za(Ty,"onTransitionRun"),za(Py,"onTransitionStart"),za(Oy,"onTransitionCancel"),za(xh,"onTransitionEnd"),Ut("onMouseEnter",["mouseout","mouseover"]),Ut("onMouseLeave",["mouseout","mouseover"]),Ut("onPointerEnter",["pointerout","pointerover"]),Ut("onPointerLeave",["pointerout","pointerover"]),lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function J1(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var o=e[i],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var C=o[b],B=C.instance,k=C.currentTarget;if(C=C.listener,B!==d&&c.isPropagationStopped())break e;d=C,c.currentTarget=k;try{d(c)}catch(K){fo(K)}c.currentTarget=null,d=B}else for(b=0;b<o.length;b++){if(C=o[b],B=C.instance,k=C.currentTarget,C=C.listener,B!==d&&c.isPropagationStopped())break e;d=C,c.currentTarget=k;try{d(c)}catch(K){fo(K)}c.currentTarget=null,d=B}}}}function De(e,n){var i=n[nu];i===void 0&&(i=n[nu]=new Set);var o=e+"__bubble";i.has(o)||(q1(n,e,2,!1),i.add(o))}function Ic(e,n,i){var o=0;n&&(o|=4),q1(i,e,o,n)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Jc(e){if(!e[Wo]){e[Wo]=!0,Gf.forEach(function(i){i!=="selectionchange"&&(y3.has(i)||Ic(i,!1,e),Ic(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wo]||(n[Wo]=!0,Ic("selectionchange",!1,n))}}function q1(e,n,i,o){switch(Sg(n)){case 2:var c=q3;break;case 8:c=U3;break;default:c=id}i=c.bind(null,n,i,e),c=void 0,!cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,i,{capture:!0,passive:c}):e.addEventListener(n,i,!0):c!==void 0?e.addEventListener(n,i,{passive:c}):e.addEventListener(n,i,!1)}function qc(e,n,i,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var C=o.stateNode.containerInfo;if(C===c)break;if(b===4)for(b=o.return;b!==null;){var B=b.tag;if((B===3||B===4)&&b.stateNode.containerInfo===c)return;b=b.return}for(;C!==null;){if(b=It(C),b===null)return;if(B=b.tag,B===5||B===6||B===26||B===27){o=d=b;continue e}C=C.parentNode}}o=o.return}Xf(function(){var k=d,K=su(i),Z=[];e:{var j=Ah.get(e);if(j!==void 0){var _=so,oe=e;switch(e){case"keypress":if(lo(i)===0)break e;case"keydown":case"keyup":_=cy;break;case"focusin":oe="focus",_=mu;break;case"focusout":oe="blur",_=mu;break;case"beforeblur":case"afterblur":_=mu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=W2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=hy;break;case Sh:case Mh:case Ch:_=ny;break;case xh:_=gy;break;case"scroll":case"scrollend":_=X2;break;case"wheel":_=yy;break;case"copy":case"cut":case"paste":_=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=nh;break;case"toggle":case"beforetoggle":_=vy}var he=(n&4)!==0,_e=!he&&(e==="scroll"||e==="scrollend"),P=he?j!==null?j+"Capture":null:j;he=[];for(var T=k,F;T!==null;){var Y=T;if(F=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||F===null||P===null||(Y=Ji(T,P),Y!=null&&he.push(xl(T,Y,F))),_e)break;T=T.return}0<he.length&&(j=new _(j,oe,null,i,K),Z.push({event:j,listeners:he}))}}if((n&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",j&&i!==ou&&(oe=i.relatedTarget||i.fromElement)&&(It(oe)||oe[Vt]))break e;if((_||j)&&(j=K.window===K?K:(j=K.ownerDocument)?j.defaultView||j.parentWindow:window,_?(oe=i.relatedTarget||i.toElement,_=k,oe=oe?It(oe):null,oe!==null&&(_e=u(oe),he=oe.tag,oe!==_e||he!==5&&he!==27&&he!==6)&&(oe=null)):(_=null,oe=k),_!==oe)){if(he=$f,Y="onMouseLeave",P="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(he=nh,Y="onPointerLeave",P="onPointerEnter",T="pointer"),_e=_==null?j:Ii(_),F=oe==null?j:Ii(oe),j=new he(Y,T+"leave",_,i,K),j.target=_e,j.relatedTarget=F,Y=null,It(K)===k&&(he=new he(P,T+"enter",oe,i,K),he.target=F,he.relatedTarget=_e,Y=he),_e=Y,_&&oe)n:{for(he=b3,P=_,T=oe,F=0,Y=P;Y;Y=he(Y))F++;Y=0;for(var fe=T;fe;fe=he(fe))Y++;for(;0<F-Y;)P=he(P),F--;for(;0<Y-F;)T=he(T),Y--;for(;F--;){if(P===T||T!==null&&P===T.alternate){he=P;break n}P=he(P),T=he(T)}he=null}else he=null;_!==null&&U1(Z,j,_,he,!1),oe!==null&&_e!==null&&U1(Z,_e,oe,he,!0)}}e:{if(j=k?Ii(k):window,_=j.nodeName&&j.nodeName.toLowerCase(),_==="select"||_==="input"&&j.type==="file")var Le=uh;else if(oh(j))if(ch)Le=By;else{Le=wy;var ue=Dy}else _=j.nodeName,!_||_.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?k&&lu(k.elementType)&&(Le=uh):Le=Ny;if(Le&&(Le=Le(e,k))){sh(Z,Le,i,K);break e}ue&&ue(e,j,k),e==="focusout"&&k&&j.type==="number"&&k.memoizedProps.value!=null&&iu(j,"number",j.value)}switch(ue=k?Ii(k):window,e){case"focusin":(oh(ue)||ue.contentEditable==="true")&&(Wt=ue,Su=k,Wi=null);break;case"focusout":Wi=Su=Wt=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,bh(Z,i,K);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":bh(Z,i,K)}var Ce;if(pu)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else Qt?ih(e,i)&&(Be="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Be="onCompositionStart");Be&&(ah&&i.locale!=="ko"&&(Qt||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&Qt&&(Ce=Qf()):(Ar=K,du="value"in Ar?Ar.value:Ar.textContent,Qt=!0)),ue=$o(k,Be),0<ue.length&&(Be=new eh(Be,e,null,i,K),Z.push({event:Be,listeners:ue}),Ce?Be.data=Ce:(Ce=lh(i),Ce!==null&&(Be.data=Ce)))),(Ce=My?Cy(e,i):xy(e,i))&&(Be=$o(k,"onBeforeInput"),0<Be.length&&(ue=new eh("onBeforeInput","beforeinput",null,i,K),Z.push({event:ue,listeners:Be}),ue.data=Ce)),m3(Z,e,k,i,K)}J1(Z,n)})}function xl(e,n,i){return{instance:e,listener:n,currentTarget:i}}function $o(e,n){for(var i=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ji(e,i),c!=null&&o.unshift(xl(e,c,d)),c=Ji(e,n),c!=null&&o.push(xl(e,c,d))),e.tag===3)return o;e=e.return}return[]}function b3(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U1(e,n,i,o,c){for(var d=n._reactName,b=[];i!==null&&i!==o;){var C=i,B=C.alternate,k=C.stateNode;if(C=C.tag,B!==null&&B===o)break;C!==5&&C!==26&&C!==27||k===null||(B=k,c?(k=Ji(i,d),k!=null&&b.unshift(xl(i,k,B))):c||(k=Ji(i,d),k!=null&&b.push(xl(i,k,B)))),i=i.return}b.length!==0&&e.push({event:n,listeners:b})}var v3=/\r\n?/g,S3=/\u0000|\uFFFD/g;function K1(e){return(typeof e=="string"?e:""+e).replace(v3,`
`).replace(S3,"")}function Y1(e,n){return n=K1(n),K1(e)===n}function He(e,n,i,o,c,d){switch(i){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yt(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yt(e,""+o);break;case"className":ao(e,"class",o);break;case"tabIndex":ao(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ao(e,i,o);break;case"style":Yf(e,o,d);break;case"data":if(n!=="object"){ao(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(i);break}o=to(""+o),e.setAttribute(i,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(i==="formAction"?(n!=="input"&&He(e,n,"name",c.name,c,null),He(e,n,"formEncType",c.formEncType,c,null),He(e,n,"formMethod",c.formMethod,c,null),He(e,n,"formTarget",c.formTarget,c,null)):(He(e,n,"encType",c.encType,c,null),He(e,n,"method",c.method,c,null),He(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(i);break}o=to(""+o),e.setAttribute(i,o);break;case"onClick":o!=null&&(e.onclick=$a);break;case"onScroll":o!=null&&De("scroll",e);break;case"onScrollEnd":o!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(i=o.__html,i!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}i=to(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(i,""+o):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":o===!0?e.setAttribute(i,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(i,o):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(i,o):e.removeAttribute(i);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(i):e.setAttribute(i,o);break;case"popover":De("beforetoggle",e),De("toggle",e),no(e,"popover",o);break;case"xlinkActuate":Wa(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wa(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wa(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wa(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wa(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":no(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Y2.get(i)||i,no(e,i,o))}}function Uc(e,n,i,o,c,d){switch(i){case"style":Yf(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(i=o.__html,i!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"children":typeof o=="string"?Yt(e,o):(typeof o=="number"||typeof o=="bigint")&&Yt(e,""+o);break;case"onScroll":o!=null&&De("scroll",e);break;case"onScrollEnd":o!=null&&De("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jf.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),n=i.slice(2,c?i.length-7:void 0),d=e[Qn]||null,d=d!=null?d[i]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,o,c);break e}i in e?e[i]=o:o===!0?e.setAttribute(i,""):no(e,i,o)}}}function kn(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var o=!1,c=!1,d;for(d in i)if(i.hasOwnProperty(d)){var b=i[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:He(e,n,d,b,i,null)}}c&&He(e,n,"srcSet",i.srcSet,i,null),o&&He(e,n,"src",i.src,i,null);return;case"input":De("invalid",e);var C=d=b=c=null,B=null,k=null;for(o in i)if(i.hasOwnProperty(o)){var K=i[o];if(K!=null)switch(o){case"name":c=K;break;case"type":b=K;break;case"checked":B=K;break;case"defaultChecked":k=K;break;case"value":d=K;break;case"defaultValue":C=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(l(137,n));break;default:He(e,n,o,K,i,null)}}Jf(e,d,C,B,k,b,c,!1);return;case"select":De("invalid",e),o=b=d=null;for(c in i)if(i.hasOwnProperty(c)&&(C=i[c],C!=null))switch(c){case"value":d=C;break;case"defaultValue":b=C;break;case"multiple":o=C;default:He(e,n,c,C,i,null)}n=d,i=b,e.multiple=!!o,n!=null?Kt(e,!!o,n,!1):i!=null&&Kt(e,!!o,i,!0);return;case"textarea":De("invalid",e),d=c=o=null;for(b in i)if(i.hasOwnProperty(b)&&(C=i[b],C!=null))switch(b){case"value":o=C;break;case"defaultValue":c=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(l(91));break;default:He(e,n,b,C,i,null)}Uf(e,o,c,d);return;case"option":for(B in i)if(i.hasOwnProperty(B)&&(o=i[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:He(e,n,B,o,i,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(o=0;o<Cl.length;o++)De(Cl[o],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in i)if(i.hasOwnProperty(k)&&(o=i[k],o!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:He(e,n,k,o,i,null)}return;default:if(lu(n)){for(K in i)i.hasOwnProperty(K)&&(o=i[K],o!==void 0&&Uc(e,n,K,o,i,void 0));return}}for(C in i)i.hasOwnProperty(C)&&(o=i[C],o!=null&&He(e,n,C,o,i,null))}function M3(e,n,i,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,b=null,C=null,B=null,k=null,K=null;for(_ in i){var Z=i[_];if(i.hasOwnProperty(_)&&Z!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":B=Z;default:o.hasOwnProperty(_)||He(e,n,_,null,o,Z)}}for(var j in o){var _=o[j];if(Z=i[j],o.hasOwnProperty(j)&&(_!=null||Z!=null))switch(j){case"type":d=_;break;case"name":c=_;break;case"checked":k=_;break;case"defaultChecked":K=_;break;case"value":b=_;break;case"defaultValue":C=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(137,n));break;default:_!==Z&&He(e,n,j,_,o,Z)}}tu(e,b,C,B,k,K,d,c);return;case"select":_=b=C=j=null;for(d in i)if(B=i[d],i.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":_=B;default:o.hasOwnProperty(d)||He(e,n,d,null,o,B)}for(c in o)if(d=o[c],B=i[c],o.hasOwnProperty(c)&&(d!=null||B!=null))switch(c){case"value":j=d;break;case"defaultValue":C=d;break;case"multiple":b=d;default:d!==B&&He(e,n,c,d,o,B)}n=C,i=b,o=_,j!=null?Kt(e,!!i,j,!1):!!o!=!!i&&(n!=null?Kt(e,!!i,n,!0):Kt(e,!!i,i?[]:"",!1));return;case"textarea":_=j=null;for(C in i)if(c=i[C],i.hasOwnProperty(C)&&c!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:He(e,n,C,null,o,c)}for(b in o)if(c=o[b],d=i[b],o.hasOwnProperty(b)&&(c!=null||d!=null))switch(b){case"value":j=c;break;case"defaultValue":_=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==d&&He(e,n,b,c,o,d)}qf(e,j,_);return;case"option":for(var oe in i)if(j=i[oe],i.hasOwnProperty(oe)&&j!=null&&!o.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:He(e,n,oe,null,o,j)}for(B in o)if(j=o[B],_=i[B],o.hasOwnProperty(B)&&j!==_&&(j!=null||_!=null))switch(B){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:He(e,n,B,j,o,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in i)j=i[he],i.hasOwnProperty(he)&&j!=null&&!o.hasOwnProperty(he)&&He(e,n,he,null,o,j);for(k in o)if(j=o[k],_=i[k],o.hasOwnProperty(k)&&j!==_&&(j!=null||_!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(137,n));break;default:He(e,n,k,j,o,_)}return;default:if(lu(n)){for(var _e in i)j=i[_e],i.hasOwnProperty(_e)&&j!==void 0&&!o.hasOwnProperty(_e)&&Uc(e,n,_e,void 0,o,j);for(K in o)j=o[K],_=i[K],!o.hasOwnProperty(K)||j===_||j===void 0&&_===void 0||Uc(e,n,K,j,o,_);return}}for(var P in i)j=i[P],i.hasOwnProperty(P)&&j!=null&&!o.hasOwnProperty(P)&&He(e,n,P,null,o,j);for(Z in o)j=o[Z],_=i[Z],!o.hasOwnProperty(Z)||j===_||j==null&&_==null||He(e,n,Z,j,o,_)}function Z1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function C3(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,i=performance.getEntriesByType("resource"),o=0;o<i.length;o++){var c=i[o],d=c.transferSize,b=c.initiatorType,C=c.duration;if(d&&C&&Z1(b)){for(b=0,C=c.responseEnd,o+=1;o<i.length;o++){var B=i[o],k=B.startTime;if(k>C)break;var K=B.transferSize,Z=B.initiatorType;K&&Z1(Z)&&(B=B.responseEnd,b+=K*(B<C?1:(C-k)/(B-k)))}if(--o,n+=8*(d+b)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Kc=null,Yc=null;function es(e){return e.nodeType===9?e:e.ownerDocument}function X1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q1(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Zc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xc=null;function x3(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var W1=typeof setTimeout=="function"?setTimeout:void 0,A3=typeof clearTimeout=="function"?clearTimeout:void 0,$1=typeof Promise=="function"?Promise:void 0,E3=typeof queueMicrotask=="function"?queueMicrotask:typeof $1<"u"?function(e){return $1.resolve(null).then(e).catch(D3)}:W1;function D3(e){setTimeout(function(){throw e})}function _r(e){return e==="head"}function eg(e,n){var i=n,o=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"||i==="/&"){if(o===0){e.removeChild(c),Ei(n);return}o--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")o++;else if(i==="html")Al(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Al(i);for(var d=i.firstChild;d;){var b=d.nextSibling,C=d.nodeName;d[Vi]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||i.removeChild(d),d=b}}else i==="body"&&Al(e.ownerDocument.body);i=c}while(i);Ei(n)}function ng(e,n){var i=e;e=0;do{var o=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=o}while(i)}function Qc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Qc(i),au(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function w3(e,n,i,o){for(;e.nodeType===1;){var c=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Vi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Da(e.nextSibling),e===null)break}return null}function N3(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Da(e.nextSibling),e===null))return null;return e}function ag(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Da(e.nextSibling),e===null))return null;return e}function Wc(e){return e.data==="$?"||e.data==="$~"}function $c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function B3(e,n){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||i.readyState!=="loading")n();else{var o=function(){n(),i.removeEventListener("DOMContentLoaded",o)};i.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Da(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ed=null;function rg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(n===0)return Da(e.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}e=e.nextSibling}return null}function tg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return e;n--}else i!=="/$"&&i!=="/&"||n++}e=e.previousSibling}return null}function ig(e,n,i){switch(n=es(i),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Al(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);au(e)}var wa=new Map,lg=new Set;function ns(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var gr=I.d;I.d={f:R3,r:L3,D:T3,C:P3,L:O3,m:z3,X:k3,S:F3,M:G3};function R3(){var e=gr.f(),n=Uo();return e||n}function L3(e){var n=Jt(e);n!==null&&n.tag===5&&n.type==="form"?xm(n):gr.r(e)}var Ci=typeof document>"u"?null:document;function og(e,n,i){var o=Ci;if(o&&typeof n=="string"&&n){var c=va(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),lg.has(c)||(lg.add(c),e={rel:e,crossOrigin:i,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),kn(n,"link",e),Bn(n),o.head.appendChild(n)))}}function T3(e){gr.D(e),og("dns-prefetch",e,null)}function P3(e,n){gr.C(e,n),og("preconnect",e,n)}function O3(e,n,i){gr.L(e,n,i);var o=Ci;if(o&&e&&n){var c='link[rel="preload"][as="'+va(n)+'"]';n==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+va(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+va(i.imageSizes)+'"]')):c+='[href="'+va(e)+'"]';var d=c;switch(n){case"style":d=xi(e);break;case"script":d=Ai(e)}wa.has(d)||(e=g({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),wa.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(El(d))||n==="script"&&o.querySelector(Dl(d))||(n=o.createElement("link"),kn(n,"link",e),Bn(n),o.head.appendChild(n)))}}function z3(e,n){gr.m(e,n);var i=Ci;if(i&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+va(o)+'"][href="'+va(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ai(e)}if(!wa.has(d)&&(e=g({rel:"modulepreload",href:e},n),wa.set(d,e),i.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Dl(d)))return}o=i.createElement("link"),kn(o,"link",e),Bn(o),i.head.appendChild(o)}}}function F3(e,n,i){gr.S(e,n,i);var o=Ci;if(o&&e){var c=qt(o).hoistableStyles,d=xi(e);n=n||"default";var b=c.get(d);if(!b){var C={loading:0,preload:null};if(b=o.querySelector(El(d)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},i),(i=wa.get(d))&&nd(e,i);var B=b=o.createElement("link");Bn(B),kn(B,"link",e),B._p=new Promise(function(k,K){B.onload=k,B.onerror=K}),B.addEventListener("load",function(){C.loading|=1}),B.addEventListener("error",function(){C.loading|=2}),C.loading|=4,as(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:C},c.set(d,b)}}}function k3(e,n){gr.X(e,n);var i=Ci;if(i&&e){var o=qt(i).hoistableScripts,c=Ai(e),d=o.get(c);d||(d=i.querySelector(Dl(c)),d||(e=g({src:e,async:!0},n),(n=wa.get(c))&&ad(e,n),d=i.createElement("script"),Bn(d),kn(d,"link",e),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function G3(e,n){gr.M(e,n);var i=Ci;if(i&&e){var o=qt(i).hoistableScripts,c=Ai(e),d=o.get(c);d||(d=i.querySelector(Dl(c)),d||(e=g({src:e,async:!0,type:"module"},n),(n=wa.get(c))&&ad(e,n),d=i.createElement("script"),Bn(d),kn(d,"link",e),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function sg(e,n,i,o){var c=(c=Ie.current)?ns(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=xi(i.href),i=qt(c).hoistableStyles,o=i.get(n),o||(o={type:"style",instance:null,count:0,state:null},i.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=xi(i.href);var d=qt(c).hoistableStyles,b=d.get(e);if(b||(c=c.ownerDocument||c,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=c.querySelector(El(e)))&&!d._p&&(b.instance=d,b.state.loading=5),wa.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},wa.set(e,i),d||j3(c,e,i,b.state))),n&&o===null)throw Error(l(528,""));return b}if(n&&o!==null)throw Error(l(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ai(i),i=qt(c).hoistableScripts,o=i.get(n),o||(o={type:"script",instance:null,count:0,state:null},i.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function xi(e){return'href="'+va(e)+'"'}function El(e){return'link[rel="stylesheet"]['+e+"]"}function ug(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function j3(e,n,i,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),kn(n,"link",i),Bn(n),e.head.appendChild(n))}function Ai(e){return'[src="'+va(e)+'"]'}function Dl(e){return"script[async]"+e}function cg(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+va(i.href)+'"]');if(o)return n.instance=o,Bn(o),o;var c=g({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Bn(o),kn(o,"style",c),as(o,i.precedence,e),n.instance=o;case"stylesheet":c=xi(i.href);var d=e.querySelector(El(c));if(d)return n.state.loading|=4,n.instance=d,Bn(d),d;o=ug(i),(c=wa.get(c))&&nd(o,c),d=(e.ownerDocument||e).createElement("link"),Bn(d);var b=d;return b._p=new Promise(function(C,B){b.onload=C,b.onerror=B}),kn(d,"link",o),n.state.loading|=4,as(d,i.precedence,e),n.instance=d;case"script":return d=Ai(i.src),(c=e.querySelector(Dl(d)))?(n.instance=c,Bn(c),c):(o=i,(c=wa.get(d))&&(o=g({},i),ad(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Bn(c),kn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,as(o,i.precedence,e));return n.instance}function as(e,n,i){for(var o=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,b=0;b<o.length;b++){var C=o[b];if(C.dataset.precedence===n)d=C;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ad(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rs=null;function dg(e,n,i){if(rs===null){var o=new Map,c=rs=new Map;c.set(i,o)}else c=rs,o=c.get(i),o||(o=new Map,c.set(i,o));if(o.has(e))return o;for(o.set(e,null),i=i.getElementsByTagName(e),c=0;c<i.length;c++){var d=i[c];if(!(d[Vi]||d[Pn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=e+b;var C=o.get(b);C?C.push(d):o.set(b,[d])}}return o}function fg(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function H3(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _3(e,n,i,o){if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=xi(o.href),d=n.querySelector(El(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ts.bind(e),n.then(e,e)),i.state.loading|=4,i.instance=d,Bn(d);return}d=n.ownerDocument||n,o=ug(o),(c=wa.get(c))&&nd(o,c),d=d.createElement("link"),Bn(d);var b=d;b._p=new Promise(function(C,B){b.onload=C,b.onerror=B}),kn(d,"link",o),i.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=ts.bind(e),n.addEventListener("load",i),n.addEventListener("error",i))}}var rd=0;function V3(e,n){return e.stylesheets&&e.count===0&&ls(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var o=setTimeout(function(){if(e.stylesheets&&ls(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&rd===0&&(rd=62500*C3());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ls(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>rd?50:800)+n);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function ts(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ls(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var is=null;function ls(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,is=new Map,n.forEach(I3,e),is=null,ts.call(e))}function I3(e,n){if(!(n.state.loading&4)){var i=is.get(e);if(i)var o=i.get(null);else{i=new Map,is.set(e,i);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var b=c[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(i.set(b.dataset.precedence,b),o=b)}o&&i.set(null,o)}c=n.instance,b=c.getAttribute("data-precedence"),d=i.get(b)||o,d===o&&i.set(null,c),i.set(b,c),this.count++,o=ts.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var wl={$$typeof:G,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function J3(e,n,i,o,c,d,b,C,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cr(0),this.hiddenUpdates=Cr(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function mg(e,n,i,o,c,d,b,C,B,k,K,Z){return e=new J3(e,n,i,b,B,k,K,Z,C),n=1,d===!0&&(n|=24),d=oa(3,null,null,n),e.current=d,d.stateNode=e,n=Fu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:i,cache:n},Hu(d),e}function gg(e){return e?(e=ni,e):ni}function pg(e,n,i,o,c,d){c=gg(c),o.context===null?o.context=c:o.pendingContext=c,o=Rr(n),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=Lr(e,o,n),i!==null&&(ra(i,e,n),il(i,e,n))}function yg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function td(e,n){yg(e,n),(e=e.alternate)&&yg(e,n)}function bg(e){if(e.tag===13||e.tag===31){var n=ct(e,67108864);n!==null&&ra(n,e,67108864),td(e,67108864)}}function vg(e){if(e.tag===13||e.tag===31){var n=fa();n=_t(n);var i=ct(e,n);i!==null&&ra(i,e,n),td(e,n)}}var os=!0;function q3(e,n,i,o){var c=R.T;R.T=null;var d=I.p;try{I.p=2,id(e,n,i,o)}finally{I.p=d,R.T=c}}function U3(e,n,i,o){var c=R.T;R.T=null;var d=I.p;try{I.p=8,id(e,n,i,o)}finally{I.p=d,R.T=c}}function id(e,n,i,o){if(os){var c=ld(o);if(c===null)qc(e,n,o,ss,i),Mg(e,o);else if(Y3(c,e,n,i,o))o.stopPropagation();else if(Mg(e,o),n&4&&-1<K3.indexOf(e)){for(;c!==null;){var d=Jt(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=_a(d.pendingLanes);if(b!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var B=1<<31-_n(b);C.entanglements[1]|=B,b&=~B}qa(d),(Pe&6)===0&&(Jo=qe()+500,Ml(0))}}break;case 31:case 13:C=ct(d,2),C!==null&&ra(C,d,2),Uo(),td(d,2)}if(d=ld(o),d===null&&qc(e,n,o,ss,i),d===c)break;c=d}c!==null&&o.stopPropagation()}else qc(e,n,o,null,i)}}function ld(e){return e=su(e),od(e)}var ss=null;function od(e){if(ss=null,e=It(e),e!==null){var n=u(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=f(n),e!==null)return e;e=null}else if(i===31){if(e=h(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ss=e,null}function Sg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kn()){case Me:return 2;case Ue:return 8;case ln:case Ta:return 32;case Pa:return 268435456;default:return 32}default:return 32}}var sd=!1,Vr=null,Ir=null,Jr=null,Nl=new Map,Bl=new Map,qr=[],K3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mg(e,n){switch(e){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(n.pointerId)}}function Rl(e,n,i,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:i,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Jt(n),n!==null&&bg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Y3(e,n,i,o,c){switch(n){case"focusin":return Vr=Rl(Vr,e,n,i,o,c),!0;case"dragenter":return Ir=Rl(Ir,e,n,i,o,c),!0;case"mouseover":return Jr=Rl(Jr,e,n,i,o,c),!0;case"pointerover":var d=c.pointerId;return Nl.set(d,Rl(Nl.get(d)||null,e,n,i,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Bl.set(d,Rl(Bl.get(d)||null,e,n,i,o,c)),!0}return!1}function Cg(e){var n=It(e.target);if(n!==null){var i=u(n);if(i!==null){if(n=i.tag,n===13){if(n=f(i),n!==null){e.blockedOn=n,Ff(e.priority,function(){vg(i)});return}}else if(n===31){if(n=h(i),n!==null){e.blockedOn=n,Ff(e.priority,function(){vg(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=ld(e.nativeEvent);if(i===null){i=e.nativeEvent;var o=new i.constructor(i.type,i);ou=o,i.target.dispatchEvent(o),ou=null}else return n=Jt(i),n!==null&&bg(n),e.blockedOn=i,!1;n.shift()}return!0}function xg(e,n,i){us(e)&&i.delete(n)}function Z3(){sd=!1,Vr!==null&&us(Vr)&&(Vr=null),Ir!==null&&us(Ir)&&(Ir=null),Jr!==null&&us(Jr)&&(Jr=null),Nl.forEach(xg),Bl.forEach(xg)}function cs(e,n){e.blockedOn===n&&(e.blockedOn=null,sd||(sd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Z3)))}var ds=null;function Ag(e){ds!==e&&(ds=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ds===e&&(ds=null);for(var n=0;n<e.length;n+=3){var i=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(od(o||i)===null)continue;break}var d=Jt(i);d!==null&&(e.splice(n,3),n-=3,lc(d,{pending:!0,data:c,method:i.method,action:o},o,c))}}))}function Ei(e){function n(B){return cs(B,e)}Vr!==null&&cs(Vr,e),Ir!==null&&cs(Ir,e),Jr!==null&&cs(Jr,e),Nl.forEach(n),Bl.forEach(n);for(var i=0;i<qr.length;i++){var o=qr[i];o.blockedOn===e&&(o.blockedOn=null)}for(;0<qr.length&&(i=qr[0],i.blockedOn===null);)Cg(i),i.blockedOn===null&&qr.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(o=0;o<i.length;o+=3){var c=i[o],d=i[o+1],b=c[Qn]||null;if(typeof d=="function")b||Ag(i);else if(b){var C=null;if(d&&d.hasAttribute("formAction")){if(c=d,b=d[Qn]||null)C=b.formAction;else if(od(c)!==null)continue}else C=b.action;typeof C=="function"?i[o+1]=C:(i.splice(o,3),o-=3),Ag(i)}}}function Eg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(b){return c=b})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(i,20)}function i(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ud(e){this._internalRoot=e}fs.prototype.render=ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var i=n.current,o=fa();pg(i,o,e,n,null,null)},fs.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pg(e.current,2,null,e,null,null),Uo(),n[Vt]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var n=eu();e={blockedOn:null,target:e,priority:n};for(var i=0;i<qr.length&&n!==0&&n<qr[i].priority;i++);qr.splice(i,0,e),i===0&&Cg(e)}};var Dg=t.version;if(Dg!=="19.2.4")throw Error(l(527,Dg,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var X3={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hs.isDisabled&&hs.supportsFiber)try{In=hs.inject(X3),xn=hs}catch{}}return Tl.createRoot=function(e,n){if(!s(e))throw Error(l(299));var i=!1,o="",c=Pm,d=Om,b=zm;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=mg(e,1,!1,null,null,i,o,null,c,d,b,Eg),e[Vt]=n.current,Jc(e),new ud(n)},Tl.hydrateRoot=function(e,n,i){if(!s(e))throw Error(l(299));var o=!1,c="",d=Pm,b=Om,C=zm,B=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(b=i.onCaughtError),i.onRecoverableError!==void 0&&(C=i.onRecoverableError),i.formState!==void 0&&(B=i.formState)),n=mg(e,1,!0,n,i??null,o,c,B,d,b,C,Eg),n.context=gg(null),i=n.current,o=fa(),o=_t(o),c=Rr(o),c.callback=null,Lr(i,c,o),i=o,n.current.lanes=i,an(n,i),qa(n),e[Vt]=n.current,Jc(e),new fs(n)},Tl.version="19.2.4",Tl}var s0;function Nb(){if(s0)return gd.exports;s0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gd.exports=wb(),gd.exports}var Bb=Nb();const Vd=new WeakMap,Rb=new WeakMap,Bs={current:[]};let bd=!1,Kl=0;const Jl=new Set,gs=new Map;function xp(r){for(const t of r){if(Bs.current.includes(t))continue;Bs.current.push(t),t.recompute();const a=Rb.get(t);if(a)for(const l of a){const s=Vd.get(l);s!=null&&s.length&&xp(s)}}}function Lb(r){const t={prevVal:r.prevState,currentVal:r.state};for(const a of r.listeners)a(t)}function Tb(r){const t={prevVal:r.prevState,currentVal:r.state};for(const a of r.listeners)a(t)}function Ap(r){if(Kl>0&&!gs.has(r)&&gs.set(r,r.prevState),Jl.add(r),!(Kl>0)&&!bd)try{for(bd=!0;Jl.size>0;){const t=Array.from(Jl);Jl.clear();for(const a of t){const l=gs.get(a)??a.prevState;a.prevState=l,Lb(a)}for(const a of t){const l=Vd.get(a);l&&(Bs.current.push(a),xp(l))}for(const a of t){const l=Vd.get(a);if(l)for(const s of l)Tb(s)}}}finally{bd=!1,Bs.current=[],gs.clear()}}function Pb(r){Kl++;try{r()}finally{if(Kl--,Kl===0){const t=Jl.values().next().value;t&&Ap(t)}}}function Ob(r){return typeof r=="function"}class zb{constructor(t,a){this.listeners=new Set,this.subscribe=l=>{var s,u;this.listeners.add(l);const f=(u=(s=this.options)==null?void 0:s.onSubscribe)==null?void 0:u.call(s,l,this);return()=>{this.listeners.delete(l),f==null||f()}},this.prevState=t,this.state=t,this.options=a}setState(t){var a,l,s;this.prevState=this.state,(a=this.options)!=null&&a.updateFn?this.state=this.options.updateFn(this.prevState)(t):Ob(t)?this.state=t(this.prevState):this.state=t,(s=(l=this.options)==null?void 0:l.onUpdate)==null||s.call(l),Ap(this)}}const $r="__TSR_index",u0="popstate",c0="beforeunload";function Fb(r){let t=r.getLocation();const a=new Set,l=f=>{t=r.getLocation(),a.forEach(h=>h({location:t,action:f}))},s=f=>{r.notifyOnIndexChange??!0?l(f):t=r.getLocation()},u=async({task:f,navigateOpts:h,...m})=>{var S,x;if((h==null?void 0:h.ignoreBlocker)??!1){f();return}const v=((S=r.getBlockers)==null?void 0:S.call(r))??[],g=m.type==="PUSH"||m.type==="REPLACE";if(typeof document<"u"&&v.length&&g)for(const M of v){const E=Rs(m.path,m.state);if(await M.blockerFn({currentLocation:t,nextLocation:E,action:m.type})){(x=r.onBlocked)==null||x.call(r);return}}f()};return{get location(){return t},get length(){return r.getLength()},subscribers:a,subscribe:f=>(a.add(f),()=>{a.delete(f)}),push:(f,h,m)=>{const p=t.state[$r];h=d0(p+1,h),u({task:()=>{r.pushState(f,h),l({type:"PUSH"})},navigateOpts:m,type:"PUSH",path:f,state:h})},replace:(f,h,m)=>{const p=t.state[$r];h=d0(p,h),u({task:()=>{r.replaceState(f,h),l({type:"REPLACE"})},navigateOpts:m,type:"REPLACE",path:f,state:h})},go:(f,h)=>{u({task:()=>{r.go(f),s({type:"GO",index:f})},navigateOpts:h,type:"GO"})},back:f=>{u({task:()=>{r.back((f==null?void 0:f.ignoreBlocker)??!1),s({type:"BACK"})},navigateOpts:f,type:"BACK"})},forward:f=>{u({task:()=>{r.forward((f==null?void 0:f.ignoreBlocker)??!1),s({type:"FORWARD"})},navigateOpts:f,type:"FORWARD"})},canGoBack:()=>t.state[$r]!==0,createHref:f=>r.createHref(f),block:f=>{var m;if(!r.setBlockers)return()=>{};const h=((m=r.getBlockers)==null?void 0:m.call(r))??[];return r.setBlockers([...h,f]),()=>{var v,g;const p=((v=r.getBlockers)==null?void 0:v.call(r))??[];(g=r.setBlockers)==null||g.call(r,p.filter(S=>S!==f))}},flush:()=>{var f;return(f=r.flush)==null?void 0:f.call(r)},destroy:()=>{var f;return(f=r.destroy)==null?void 0:f.call(r)},notify:l}}function d0(r,t){t||(t={});const a=of();return{...t,key:a,__TSR_key:a,[$r]:r}}function kb(r){var X,z;const t=typeof document<"u"?window:void 0,a=t.history.pushState,l=t.history.replaceState;let s=[];const u=()=>s,f=O=>s=O,h=(O=>O),m=(()=>Rs(`${t.location.pathname}${t.location.search}${t.location.hash}`,t.history.state));if(!((X=t.history.state)!=null&&X.__TSR_key)&&!((z=t.history.state)!=null&&z.key)){const O=of();t.history.replaceState({[$r]:0,key:O,__TSR_key:O},"")}let p=m(),v,g=!1,S=!1,x=!1,M=!1;const E=()=>p;let w,A;const L=()=>{w&&(U._ignoreSubscribers=!0,(w.isPush?t.history.pushState:t.history.replaceState)(w.state,"",w.href),U._ignoreSubscribers=!1,w=void 0,A=void 0,v=void 0)},G=(O,Q,q)=>{const J=h(Q);A||(v=p),p=Rs(Q,q),w={href:J,state:q,isPush:(w==null?void 0:w.isPush)||O==="push"},A||(A=Promise.resolve().then(()=>L()))},N=O=>{p=m(),U.notify({type:O})},H=async()=>{if(S){S=!1;return}const O=m(),Q=O.state[$r]-p.state[$r],q=Q===1,J=Q===-1,$=!q&&!J||g;g=!1;const ee=$?"GO":J?"BACK":"FORWARD",R=$?{type:"GO",index:Q}:{type:J?"BACK":"FORWARD"};if(x)x=!1;else{const I=u();if(typeof document<"u"&&I.length){for(const W of I)if(await W.blockerFn({currentLocation:p,nextLocation:O,action:ee})){S=!0,t.history.go(1),U.notify(R);return}}}p=m(),U.notify(R)},V=O=>{if(M){M=!1;return}let Q=!1;const q=u();if(typeof document<"u"&&q.length)for(const J of q){const $=J.enableBeforeUnload??!0;if($===!0){Q=!0;break}if(typeof $=="function"&&$()===!0){Q=!0;break}}if(Q)return O.preventDefault(),O.returnValue=""},U=Fb({getLocation:E,getLength:()=>t.history.length,pushState:(O,Q)=>G("push",O,Q),replaceState:(O,Q)=>G("replace",O,Q),back:O=>(O&&(x=!0),M=!0,t.history.back()),forward:O=>{O&&(x=!0),M=!0,t.history.forward()},go:O=>{g=!0,t.history.go(O)},createHref:O=>h(O),flush:L,destroy:()=>{t.history.pushState=a,t.history.replaceState=l,t.removeEventListener(c0,V,{capture:!0}),t.removeEventListener(u0,H)},onBlocked:()=>{v&&p!==v&&(p=v)},getBlockers:u,setBlockers:f,notifyOnIndexChange:!1});return t.addEventListener(c0,V,{capture:!0}),t.addEventListener(u0,H),t.history.pushState=function(...O){const Q=a.apply(t.history,O);return U._ignoreSubscribers||N("PUSH"),Q},t.history.replaceState=function(...O){const Q=l.apply(t.history,O);return U._ignoreSubscribers||N("REPLACE"),Q},U}function Gb(r){let t=r.replace(/[\x00-\x1f\x7f]/g,"");return t.startsWith("//")&&(t="/"+t.replace(/^\/+/,"")),t}function Rs(r,t){const a=Gb(r),l=a.indexOf("#"),s=a.indexOf("?"),u=of();return{href:a,pathname:a.substring(0,l>0?s>0?Math.min(l,s):l:s>0?s:a.length),hash:l>-1?a.substring(l):"",search:s>-1?a.slice(s,l===-1?void 0:l):"",state:t||{[$r]:0,key:u,__TSR_key:u}}}function of(){return(Math.random()+1).toString(36).substring(7)}const jb=!1;function Yl(r){let t;return Pb(()=>{t=r()}),t}function Ql(r){return r[r.length-1]}function Hb(r){return typeof r=="function"}function Qr(r,t){return Hb(r)?r(t):r}const _b=Object.prototype.hasOwnProperty,f0=Object.prototype.propertyIsEnumerable;function ha(r,t,a=0){if(r===t)return r;if(a>500)return t;const l=t,s=g0(r)&&g0(l);if(!s&&!(Ls(r)&&Ls(l)))return l;const u=s?r:h0(r);if(!u)return l;const f=s?l:h0(l);if(!f)return l;const h=u.length,m=f.length,p=s?new Array(m):{};let v=0;for(let g=0;g<m;g++){const S=s?g:f[g],x=r[S],M=l[S];if(x===M){p[S]=x,(s?g<h:_b.call(r,S))&&v++;continue}if(x===null||M===null||typeof x!="object"||typeof M!="object"){p[S]=M;continue}const E=ha(x,M,a+1);p[S]=E,E===x&&v++}return h===m&&v===h?r:p}function h0(r){const t=Object.getOwnPropertyNames(r);for(const s of t)if(!f0.call(r,s))return!1;const a=Object.getOwnPropertySymbols(r);if(a.length===0)return t;const l=t;for(const s of a){if(!f0.call(r,s))return!1;l.push(s)}return l}function Ls(r){if(!m0(r))return!1;const t=r.constructor;if(typeof t>"u")return!0;const a=t.prototype;return!(!m0(a)||!a.hasOwnProperty("isPrototypeOf"))}function m0(r){return Object.prototype.toString.call(r)==="[object Object]"}function g0(r){return Array.isArray(r)&&r.length===Object.keys(r).length}function Lt(r,t,a){if(r===t)return!0;if(typeof r!=typeof t)return!1;if(Array.isArray(r)&&Array.isArray(t)){if(r.length!==t.length)return!1;for(let l=0,s=r.length;l<s;l++)if(!Lt(r[l],t[l],a))return!1;return!0}if(Ls(r)&&Ls(t)){const l=(a==null?void 0:a.ignoreUndefined)??!0;if(a!=null&&a.partial){for(const f in t)if((!l||t[f]!==void 0)&&!Lt(r[f],t[f],a))return!1;return!0}let s=0;if(!l)s=Object.keys(r).length;else for(const f in r)r[f]!==void 0&&s++;let u=0;for(const f in t)if((!l||t[f]!==void 0)&&(u++,u>s||!Lt(r[f],t[f],a)))return!1;return s===u}return!1}function Pi(r){let t,a;const l=new Promise((s,u)=>{t=s,a=u});return l.status="pending",l.resolve=s=>{l.status="resolved",l.value=s,t(s),r==null||r(s)},l.reject=s=>{l.status="rejected",a(s)},l}function Ri(r){return!!(r&&typeof r=="object"&&typeof r.then=="function")}function Vb(r){return r.replace(/[\x00-\x1f\x7f]/g,"")}function p0(r){let t;try{t=decodeURI(r)}catch{t=r.replaceAll(/%[0-9A-F]{2}/gi,a=>{try{return decodeURI(a)}catch{return a}})}return Vb(t)}const Ep=["http:","https:","mailto:","tel:"];function Ts(r){if(!r)return!1;try{const t=new URL(r);return!Ep.includes(t.protocol)}catch{return!1}}function Pl(r){if(!r)return{path:r,handledProtocolRelativeURL:!1};if(!/[%\\\x00-\x1f\x7f]/.test(r)&&!r.startsWith("//"))return{path:r,handledProtocolRelativeURL:!1};const t=/%25|%5C/gi;let a=0,l="",s;for(;(s=t.exec(r))!==null;)l+=p0(r.slice(a,s.index))+s[0],a=t.lastIndex;l=l+p0(a?r.slice(a):r);let u=!1;return l.startsWith("//")&&(u=!0,l="/"+l.replace(/^\/+/,"")),{path:l,handledProtocolRelativeURL:u}}function Ib(r){return/\s|[^\u0000-\u007F]/.test(r)?r.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):r}var Jb="Invariant failed";function br(r,t){if(!r)throw new Error(Jb)}function Ps(r){const t=new Map;let a,l;const s=u=>{u.next&&(u.prev?(u.prev.next=u.next,u.next.prev=u.prev,u.next=void 0,l&&(l.next=u,u.prev=l)):(u.next.prev=void 0,a=u.next,u.next=void 0,l&&(u.prev=l,l.next=u)),l=u)};return{get(u){const f=t.get(u);if(f)return s(f),f.value},set(u,f){if(t.size>=r&&a){const m=a;t.delete(m.key),m.next&&(a=m.next,m.next.prev=void 0),m===l&&(l=void 0)}const h=t.get(u);if(h)h.value=f,s(h);else{const m={key:u,value:f,prev:l};l&&(l.next=m),l=m,a||(a=m),t.set(u,m)}},clear(){t.clear(),a=void 0,l=void 0}}}const Oi=0,zt=1,Ft=2,Wl=3,wt=4,Dp=5;function qb(r){const t=r.indexOf("{");if(t===-1)return null;const a=r.indexOf("}",t);return a===-1||t+1>=r.length?null:[t,a]}function sf(r,t,a=new Uint16Array(6)){const l=r.indexOf("/",t),s=l===-1?r.length:l,u=r.substring(t,s);if(!u||!u.includes("$"))return a[0]=Oi,a[1]=t,a[2]=t,a[3]=s,a[4]=s,a[5]=s,a;if(u==="$"){const h=r.length;return a[0]=Ft,a[1]=t,a[2]=t,a[3]=h,a[4]=h,a[5]=h,a}if(u.charCodeAt(0)===36)return a[0]=zt,a[1]=t,a[2]=t+1,a[3]=s,a[4]=s,a[5]=s,a;const f=qb(u);if(f){const[h,m]=f,p=u.charCodeAt(h+1);if(p===45){if(h+2<u.length&&u.charCodeAt(h+2)===36){const v=h+3,g=m;if(v<g)return a[0]=Wl,a[1]=t+h,a[2]=t+v,a[3]=t+g,a[4]=t+m+1,a[5]=s,a}}else if(p===36){const v=h+1,g=h+2;return g===m?(a[0]=Ft,a[1]=t+h,a[2]=t+v,a[3]=t+g,a[4]=t+m+1,a[5]=r.length,a):(a[0]=zt,a[1]=t+h,a[2]=t+g,a[3]=t+m,a[4]=t+m+1,a[5]=s,a)}}return a[0]=Oi,a[1]=t,a[2]=t,a[3]=s,a[4]=s,a[5]=s,a}function Is(r,t,a,l,s,u,f){var m,p,v,g,S,x,M,E,w,A,L,G,N;f==null||f(a);let h=l;{const H=a.fullPath??a.from,V=H.length,U=((m=a.options)==null?void 0:m.caseSensitive)??r,X=!!((v=(p=a.options)==null?void 0:p.params)!=null&&v.parse&&((S=(g=a.options)==null?void 0:g.skipRouteOnParseError)!=null&&S.params));for(;h<V;){const O=sf(H,h,t);let Q;const q=h,J=O[5];switch(h=J+1,u++,O[0]){case Oi:{const ee=H.substring(O[2],O[3]);if(U){const R=(x=s.static)==null?void 0:x.get(ee);if(R)Q=R;else{s.static??(s.static=new Map);const I=Nt(a.fullPath??a.from);I.parent=s,I.depth=u,Q=I,s.static.set(ee,I)}}else{const R=ee.toLowerCase(),I=(M=s.staticInsensitive)==null?void 0:M.get(R);if(I)Q=I;else{s.staticInsensitive??(s.staticInsensitive=new Map);const W=Nt(a.fullPath??a.from);W.parent=s,W.depth=u,Q=W,s.staticInsensitive.set(R,W)}}break}case zt:{const ee=H.substring(q,O[1]),R=H.substring(O[4],J),I=U&&!!(ee||R),W=ee?I?ee:ee.toLowerCase():void 0,ie=R?I?R:R.toLowerCase():void 0,se=!X&&((E=s.dynamic)==null?void 0:E.find(re=>!re.skipOnParamError&&re.caseSensitive===I&&re.prefix===W&&re.suffix===ie));if(se)Q=se;else{const re=Sd(zt,a.fullPath??a.from,I,W,ie);Q=re,re.depth=u,re.parent=s,s.dynamic??(s.dynamic=[]),s.dynamic.push(re)}break}case Wl:{const ee=H.substring(q,O[1]),R=H.substring(O[4],J),I=U&&!!(ee||R),W=ee?I?ee:ee.toLowerCase():void 0,ie=R?I?R:R.toLowerCase():void 0,se=!X&&((w=s.optional)==null?void 0:w.find(re=>!re.skipOnParamError&&re.caseSensitive===I&&re.prefix===W&&re.suffix===ie));if(se)Q=se;else{const re=Sd(Wl,a.fullPath??a.from,I,W,ie);Q=re,re.parent=s,re.depth=u,s.optional??(s.optional=[]),s.optional.push(re)}break}case Ft:{const ee=H.substring(q,O[1]),R=H.substring(O[4],J),I=U&&!!(ee||R),W=ee?I?ee:ee.toLowerCase():void 0,ie=R?I?R:R.toLowerCase():void 0,se=Sd(Ft,a.fullPath??a.from,I,W,ie);Q=se,se.parent=s,se.depth=u,s.wildcard??(s.wildcard=[]),s.wildcard.push(se)}}s=Q}if(X&&a.children&&!a.isRoot&&a.id&&a.id.charCodeAt(a.id.lastIndexOf("/")+1)===95){const O=Nt(a.fullPath??a.from);O.kind=Dp,O.parent=s,u++,O.depth=u,s.pathless??(s.pathless=[]),s.pathless.push(O),s=O}const z=(a.path||!a.children)&&!a.isRoot;if(z&&H.endsWith("/")){const O=Nt(a.fullPath??a.from);O.kind=wt,O.parent=s,u++,O.depth=u,s.index=O,s=O}s.parse=((L=(A=a.options)==null?void 0:A.params)==null?void 0:L.parse)??null,s.skipOnParamError=X,s.parsingPriority=((N=(G=a.options)==null?void 0:G.skipRouteOnParseError)==null?void 0:N.priority)??0,z&&!s.route&&(s.route=a,s.fullPath=a.fullPath??a.from)}if(a.children)for(const H of a.children)Is(r,t,H,h,s,u,f)}function vd(r,t){if(r.skipOnParamError&&!t.skipOnParamError)return-1;if(!r.skipOnParamError&&t.skipOnParamError)return 1;if(r.skipOnParamError&&t.skipOnParamError&&(r.parsingPriority||t.parsingPriority))return t.parsingPriority-r.parsingPriority;if(r.prefix&&t.prefix&&r.prefix!==t.prefix){if(r.prefix.startsWith(t.prefix))return-1;if(t.prefix.startsWith(r.prefix))return 1}if(r.suffix&&t.suffix&&r.suffix!==t.suffix){if(r.suffix.endsWith(t.suffix))return-1;if(t.suffix.endsWith(r.suffix))return 1}return r.prefix&&!t.prefix?-1:!r.prefix&&t.prefix?1:r.suffix&&!t.suffix?-1:!r.suffix&&t.suffix?1:r.caseSensitive&&!t.caseSensitive?-1:!r.caseSensitive&&t.caseSensitive?1:0}function Xr(r){var t,a,l;if(r.pathless)for(const s of r.pathless)Xr(s);if(r.static)for(const s of r.static.values())Xr(s);if(r.staticInsensitive)for(const s of r.staticInsensitive.values())Xr(s);if((t=r.dynamic)!=null&&t.length){r.dynamic.sort(vd);for(const s of r.dynamic)Xr(s)}if((a=r.optional)!=null&&a.length){r.optional.sort(vd);for(const s of r.optional)Xr(s)}if((l=r.wildcard)!=null&&l.length){r.wildcard.sort(vd);for(const s of r.wildcard)Xr(s)}}function Nt(r){return{kind:Oi,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:r,parent:null,parse:null,skipOnParamError:!1,parsingPriority:0}}function Sd(r,t,a,l,s){return{kind:r,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:t,parent:null,parse:null,skipOnParamError:!1,parsingPriority:0,caseSensitive:a,prefix:l,suffix:s}}function Ub(r,t){const a=Nt("/"),l=new Uint16Array(6);for(const s of r)Is(!1,l,s,1,a,0);Xr(a),t.masksTree=a,t.flatCache=Ps(1e3)}function Kb(r,t){r||(r="/");const a=t.flatCache.get(r);if(a)return a;const l=uf(r,t.masksTree);return t.flatCache.set(r,l),l}function Yb(r,t,a,l,s){r||(r="/"),l||(l="/");const u=t?`case\0${r}`:r;let f=s.singleCache.get(u);if(!f){f=Nt("/");const h=new Uint16Array(6);Is(t,h,{from:r},1,f,0),s.singleCache.set(u,f)}return uf(l,f,a)}function Zb(r,t,a=!1){const l=a?r:`nofuzz\0${r}`,s=t.matchCache.get(l);if(s!==void 0)return s;r||(r="/");let u;try{u=uf(r,t.segmentTree,a)}catch(f){if(f instanceof URIError)u=null;else throw f}return u&&(u.branch=Wb(u.route)),t.matchCache.set(l,u),u}function Xb(r){return r==="/"?r:r.replace(/\/{1,}$/,"")}function Qb(r,t=!1,a){const l=Nt(r.fullPath),s=new Uint16Array(6),u={},f={};let h=0;return Is(t,s,r,1,l,0,p=>{if(a==null||a(p,h),br(!(p.id in u),`Duplicate routes found with id: ${String(p.id)}`),u[p.id]=p,h!==0&&p.path){const v=Xb(p.fullPath);(!f[v]||p.fullPath.endsWith("/"))&&(f[v]=p)}h++}),Xr(l),{processedTree:{segmentTree:l,singleCache:Ps(1e3),matchCache:Ps(1e3),flatCache:null,masksTree:null},routesById:u,routesByPath:f}}function uf(r,t,a=!1){const l=r.split("/"),s=ev(r,l,t,a);if(!s)return null;const[u]=wp(r,l,s);return{route:s.node.route,rawParams:u,parsedParams:s.parsedParams}}function wp(r,t,a){var v,g,S,x,M,E,w,A,L,G;const l=$b(a.node);let s=null;const u={};let f=((v=a.extract)==null?void 0:v.part)??0,h=((g=a.extract)==null?void 0:g.node)??0,m=((S=a.extract)==null?void 0:S.path)??0,p=((x=a.extract)==null?void 0:x.segment)??0;for(;h<l.length;f++,h++,m++,p++){const N=l[h];if(N.kind===wt)break;if(N.kind===Dp){p--,f--,m--;continue}const H=t[f],V=m;if(H&&(m+=H.length),N.kind===zt){s??(s=a.node.fullPath.split("/"));const U=s[p],X=((M=N.prefix)==null?void 0:M.length)??0;if(U.charCodeAt(X)===123){const O=((E=N.suffix)==null?void 0:E.length)??0,Q=U.substring(X+2,U.length-O-1),q=H.substring(X,H.length-O);u[Q]=decodeURIComponent(q)}else{const O=U.substring(1);u[O]=decodeURIComponent(H)}}else if(N.kind===Wl){if(a.skipped&1<<h){f--,m=V-1;continue}s??(s=a.node.fullPath.split("/"));const U=s[p],X=((w=N.prefix)==null?void 0:w.length)??0,z=((A=N.suffix)==null?void 0:A.length)??0,O=U.substring(X+3,U.length-z-1),Q=N.suffix||N.prefix?H.substring(X,H.length-z):H;Q&&(u[O]=decodeURIComponent(Q))}else if(N.kind===Ft){const U=N,X=r.substring(V+(((L=U.prefix)==null?void 0:L.length)??0),r.length-(((G=U.suffix)==null?void 0:G.length)??0)),z=decodeURIComponent(X);u["*"]=z,u._splat=z;break}}return a.rawParams&&Object.assign(u,a.rawParams),[u,{part:f,node:h,path:m,segment:p}]}function Wb(r){const t=[r];for(;r.parentRoute;)r=r.parentRoute,t.push(r);return t.reverse(),t}function $b(r){const t=Array(r.depth+1);do t[r.depth]=r,r=r.parent;while(r);return t}function ev(r,t,a,l){if(r==="/"&&a.index)return{node:a.index,skipped:0};const s=!Ql(t),u=s&&r!=="/",f=t.length-(s?1:0),h=[{node:a,index:1,skipped:0,depth:1,statics:1,dynamics:0,optionals:0}];let m=null,p=null,v=null;for(;h.length;){const g=h.pop(),{node:S,index:x,skipped:M,depth:E,statics:w,dynamics:A,optionals:L}=g;let{extract:G,rawParams:N,parsedParams:H}=g;if(S.skipOnParamError){if(!Md(r,t,g))continue;N=g.rawParams,G=g.extract,H=g.parsedParams}l&&S.route&&S.kind!==wt&&Ol(p,g)&&(p=g);const V=x===f;if(V&&(S.route&&!u&&Ol(v,g)&&(v=g),!S.optional&&!S.wildcard&&!S.index&&!S.pathless))continue;const U=V?void 0:t[x];let X;if(V&&S.index){const z={node:S.index,index:x,skipped:M,depth:E+1,statics:w,dynamics:A,optionals:L,extract:G,rawParams:N,parsedParams:H};let O=!0;if(S.index.skipOnParamError&&(Md(r,t,z)||(O=!1)),O){if(w===f&&!A&&!L&&!M)return z;Ol(v,z)&&(v=z)}}if(S.wildcard&&Ol(m,g))for(const z of S.wildcard){const{prefix:O,suffix:Q}=z;if(O&&(V||!(z.caseSensitive?U:X??(X=U.toLowerCase())).startsWith(O)))continue;if(Q){if(V)continue;const J=t.slice(x).join("/").slice(-Q.length);if((z.caseSensitive?J:J.toLowerCase())!==Q)continue}const q={node:z,index:f,skipped:M,depth:E,statics:w,dynamics:A,optionals:L,extract:G,rawParams:N,parsedParams:H};if(!(z.skipOnParamError&&!Md(r,t,q))){m=q;break}}if(S.optional){const z=M|1<<E,O=E+1;for(let Q=S.optional.length-1;Q>=0;Q--){const q=S.optional[Q];h.push({node:q,index:x,skipped:z,depth:O,statics:w,dynamics:A,optionals:L,extract:G,rawParams:N,parsedParams:H})}if(!V)for(let Q=S.optional.length-1;Q>=0;Q--){const q=S.optional[Q],{prefix:J,suffix:$}=q;if(J||$){const ee=q.caseSensitive?U:X??(X=U.toLowerCase());if(J&&!ee.startsWith(J)||$&&!ee.endsWith($))continue}h.push({node:q,index:x+1,skipped:M,depth:O,statics:w,dynamics:A,optionals:L+1,extract:G,rawParams:N,parsedParams:H})}}if(!V&&S.dynamic&&U)for(let z=S.dynamic.length-1;z>=0;z--){const O=S.dynamic[z],{prefix:Q,suffix:q}=O;if(Q||q){const J=O.caseSensitive?U:X??(X=U.toLowerCase());if(Q&&!J.startsWith(Q)||q&&!J.endsWith(q))continue}h.push({node:O,index:x+1,skipped:M,depth:E+1,statics:w,dynamics:A+1,optionals:L,extract:G,rawParams:N,parsedParams:H})}if(!V&&S.staticInsensitive){const z=S.staticInsensitive.get(X??(X=U.toLowerCase()));z&&h.push({node:z,index:x+1,skipped:M,depth:E+1,statics:w+1,dynamics:A,optionals:L,extract:G,rawParams:N,parsedParams:H})}if(!V&&S.static){const z=S.static.get(U);z&&h.push({node:z,index:x+1,skipped:M,depth:E+1,statics:w+1,dynamics:A,optionals:L,extract:G,rawParams:N,parsedParams:H})}if(S.pathless){const z=E+1;for(let O=S.pathless.length-1;O>=0;O--){const Q=S.pathless[O];h.push({node:Q,index:x,skipped:M,depth:z,statics:w,dynamics:A,optionals:L,extract:G,rawParams:N,parsedParams:H})}}}if(v&&m)return Ol(m,v)?v:m;if(v)return v;if(m)return m;if(l&&p){let g=p.index;for(let x=0;x<p.index;x++)g+=t[x].length;const S=g===r.length?"/":r.slice(g);return p.rawParams??(p.rawParams={}),p.rawParams["**"]=decodeURIComponent(S),p}return null}function Md(r,t,a){try{const[l,s]=wp(r,t,a);a.rawParams=l,a.extract=s;const u=a.node.parse(l);return a.parsedParams=Object.assign({},a.parsedParams,u),!0}catch{return null}}function Ol(r,t){return r?t.statics>r.statics||t.statics===r.statics&&(t.dynamics>r.dynamics||t.dynamics===r.dynamics&&(t.optionals>r.optionals||t.optionals===r.optionals&&((t.node.kind===wt)>(r.node.kind===wt)||t.node.kind===wt==(r.node.kind===wt)&&t.depth>r.depth))):!0}function Cs(r){return cf(r.filter(t=>t!==void 0).join("/"))}function cf(r){return r.replace(/\/{2,}/g,"/")}function Np(r){return r==="/"?r:r.replace(/^\/{1,}/,"")}function yr(r){const t=r.length;return t>1&&r[t-1]==="/"?r.replace(/\/{1,}$/,""):r}function Bp(r){return yr(Np(r))}function Os(r,t){return r!=null&&r.endsWith("/")&&r!=="/"&&r!==`${t}/`?r.slice(0,-1):r}function nv(r,t,a){return Os(r,a)===Os(t,a)}function av({base:r,to:t,trailingSlash:a="never",cache:l}){const s=t.startsWith("/"),u=!s&&t===".";let f;if(l){f=s?t:u?r:r+"\0"+t;const g=l.get(f);if(g)return g}let h;if(u)h=r.split("/");else if(s)h=t.split("/");else{for(h=r.split("/");h.length>1&&Ql(h)==="";)h.pop();const g=t.split("/");for(let S=0,x=g.length;S<x;S++){const M=g[S];M===""?S?S===x-1&&h.push(M):h=[M]:M===".."?h.pop():M==="."||h.push(M)}}h.length>1&&(Ql(h)===""?a==="never"&&h.pop():a==="always"&&h.push(""));let m,p="";for(let g=0;g<h.length;g++){g>0&&(p+="/");const S=h[g];if(!S)continue;m=sf(S,0,m);const x=m[0];if(x===Oi){p+=S;continue}const M=m[5],E=S.substring(0,m[1]),w=S.substring(m[4],M),A=S.substring(m[2],m[3]);x===zt?p+=E||w?`${E}{$${A}}${w}`:`$${A}`:x===Ft?p+=E||w?`${E}{$}${w}`:"$":p+=`${E}{-$${A}}${w}`}p=cf(p);const v=p||"/";return f&&l&&l.set(f,v),v}function rv(r){const t=new Map(r.map(s=>[encodeURIComponent(s),s])),a=Array.from(t.keys()).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),l=new RegExp(a,"g");return s=>s.replace(l,u=>t.get(u)??u)}function Cd(r,t,a){const l=t[r];return typeof l!="string"?l:r==="_splat"?/^[a-zA-Z0-9\-._~!/]*$/.test(l)?l:l.split("/").map(s=>y0(s,a)).join("/"):y0(l,a)}function xd({path:r,params:t,decoder:a,...l}){let s=!1;const u={};if(!r||r==="/")return{interpolatedPath:"/",usedParams:u,isMissingParams:s};if(!r.includes("$"))return{interpolatedPath:r,usedParams:u,isMissingParams:s};const f=r.length;let h=0,m,p="";for(;h<f;){const g=h;m=sf(r,g,m);const S=m[5];if(h=S+1,g===S)continue;const x=m[0];if(x===Oi){p+="/"+r.substring(g,S);continue}if(x===Ft){const M=t._splat;u._splat=M,u["*"]=M;const E=r.substring(g,m[1]),w=r.substring(m[4],S);if(!M){s=!0,(E||w)&&(p+="/"+E+w);continue}const A=Cd("_splat",t,a);p+="/"+E+A+w;continue}if(x===zt){const M=r.substring(m[2],m[3]);!s&&!(M in t)&&(s=!0),u[M]=t[M];const E=r.substring(g,m[1]),w=r.substring(m[4],S),A=Cd(M,t,a)??"undefined";p+="/"+E+A+w;continue}if(x===Wl){const M=r.substring(m[2],m[3]),E=t[M];if(E==null)continue;u[M]=E;const w=r.substring(g,m[1]),A=r.substring(m[4],S),L=Cd(M,t,a)??"";p+="/"+w+L+A;continue}}return r.endsWith("/")&&(p+="/"),{usedParams:u,interpolatedPath:p||"/",isMissingParams:s}}function y0(r,t){const a=encodeURIComponent(r);return(t==null?void 0:t(a))??a}function ma(r){return!!(r!=null&&r.isNotFound)}function tv(){try{if(typeof window<"u"&&typeof window.sessionStorage=="object")return window.sessionStorage}catch{}}const Id="tsr-scroll-restoration-v1_3",iv=(r,t)=>{let a;return(...l)=>{a||(a=setTimeout(()=>{r(...l),a=null},t))}};function lv(){const r=tv();if(!r)return null;const t=r.getItem(Id);let a=t?JSON.parse(t):{};return{state:a,set:l=>{a=Qr(l,a)||a;try{r.setItem(Id,JSON.stringify(a))}catch{console.warn("[ts-router] Could not persist scroll restoration state to sessionStorage.")}}}}const ps=lv(),ov=r=>r.state.__TSR_key||r.href;function sv(r){const t=[];let a;for(;a=r.parentNode;)t.push(`${r.tagName}:nth-child(${Array.prototype.indexOf.call(a.children,r)+1})`),r=a;return`${t.reverse().join(" > ")}`.toLowerCase()}let zs=!1;function uv({storageKey:r,key:t,behavior:a,shouldScrollRestoration:l,scrollToTopSelectors:s,location:u}){var p,v;let f;try{f=JSON.parse(sessionStorage.getItem(r)||"{}")}catch(g){console.error(g);return}const h=t||((p=window.history.state)==null?void 0:p.__TSR_key),m=f[h];zs=!0;e:{if(l&&m&&Object.keys(m).length>0){for(const x in m){const M=m[x];if(x==="window")window.scrollTo({top:M.scrollY,left:M.scrollX,behavior:a});else if(x){const E=document.querySelector(x);E&&(E.scrollLeft=M.scrollX,E.scrollTop=M.scrollY)}}break e}const g=(u??window.location).hash.split("#",2)[1];if(g){const x=((v=window.history.state)==null?void 0:v.__hashScrollIntoViewOptions)??!0;if(x){const M=document.getElementById(g);M&&M.scrollIntoView(x)}break e}const S={top:0,left:0,behavior:a};if(window.scrollTo(S),s)for(const x of s){if(x==="window")continue;const M=typeof x=="function"?x():document.querySelector(x);M&&M.scrollTo(S)}}zs=!1}function cv(r,t){if(!ps||((r.options.scrollRestoration??!1)&&(r.isScrollRestoring=!0),r.isScrollRestorationSetup||!ps))return;r.isScrollRestorationSetup=!0,zs=!1;const l=r.options.getScrollRestorationKey||ov;window.history.scrollRestoration="manual";const s=u=>{if(zs||!r.isScrollRestoring)return;let f="";if(u.target===document||u.target===window)f="window";else{const m=u.target.getAttribute("data-scroll-restoration-id");m?f=`[data-scroll-restoration-id="${m}"]`:f=sv(u.target)}const h=l(r.state.location);ps.set(m=>{const p=m[h]||(m[h]={}),v=p[f]||(p[f]={});if(f==="window")v.scrollX=window.scrollX||0,v.scrollY=window.scrollY||0;else if(f){const g=document.querySelector(f);g&&(v.scrollX=g.scrollLeft||0,v.scrollY=g.scrollTop||0)}return m})};typeof document<"u"&&document.addEventListener("scroll",iv(s,100),!0),r.subscribe("onRendered",u=>{const f=l(u.toLocation);if(!r.resetNextScroll){r.resetNextScroll=!0;return}typeof r.options.scrollRestoration=="function"&&!r.options.scrollRestoration({location:r.latestLocation})||(uv({storageKey:Id,key:f,behavior:r.options.scrollRestorationBehavior,shouldScrollRestoration:r.isScrollRestoring,scrollToTopSelectors:r.options.scrollToTopSelectors,location:r.history.location}),r.isScrollRestoring&&ps.set(h=>(h[f]||(h[f]={}),h)))})}function dv(r){if(typeof document<"u"&&document.querySelector){const t=r.state.location.state.__hashScrollIntoViewOptions??!0;if(t&&r.state.location.hash!==""){const a=document.getElementById(r.state.location.hash);a&&a.scrollIntoView(t)}}}function fv(r,t=String){const a=new URLSearchParams;for(const l in r){const s=r[l];s!==void 0&&a.set(l,t(s))}return a.toString()}function Ad(r){return r?r==="false"?!1:r==="true"?!0:+r*0===0&&+r+""===r?+r:r:""}function hv(r){const t=new URLSearchParams(r),a={};for(const[l,s]of t.entries()){const u=a[l];u==null?a[l]=Ad(s):Array.isArray(u)?u.push(Ad(s)):a[l]=[u,Ad(s)]}return a}const mv=pv(JSON.parse),gv=yv(JSON.stringify,JSON.parse);function pv(r){return t=>{t[0]==="?"&&(t=t.substring(1));const a=hv(t);for(const l in a){const s=a[l];if(typeof s=="string")try{a[l]=r(s)}catch{}}return a}}function yv(r,t){const a=typeof t=="function";function l(s){if(typeof s=="object"&&s!==null)try{return r(s)}catch{}else if(a&&typeof s=="string")try{return t(s),r(s)}catch{}return s}return s=>{const u=fv(s,l);return u?`?${u}`:""}}const Na="__root__";function bv(r){if(r.statusCode=r.statusCode||r.code||307,!r._builtLocation&&typeof r.href=="string"&&Ts(r.href))throw new Error(`Redirect blocked: unsafe protocol in href "${r.href}". Only ${Ep.join(", ")} protocols are allowed.`);if(!r._builtLocation&&!r.reloadDocument&&typeof r.href=="string")try{new URL(r.href),r.reloadDocument=!0}catch{}const t=new Headers(r.headers);r.href&&t.get("Location")===null&&t.set("Location",r.href);const a=new Response(null,{status:r.statusCode,headers:t});if(a.options=r,r.throw)throw a;return a}function Ba(r){return r instanceof Response&&!!r.options}const xs=r=>{var t;if(!r.rendered)return r.rendered=!0,(t=r.onReady)==null?void 0:t.call(r)},Js=(r,t)=>!!(r.preload&&!r.router.state.matches.some(a=>a.id===t)),Li=(r,t,a=!0)=>{const l={...r.router.options.context??{}},s=a?t:t-1;for(let u=0;u<=s;u++){const f=r.matches[u];if(!f)continue;const h=r.router.getMatch(f.id);h&&Object.assign(l,h.__routeContext,h.__beforeLoadContext)}return l},Rp=(r,t)=>{var s;const a=r.router.routesById[t.routeId??""]??r.router.routeTree;!a.options.notFoundComponent&&((s=r.router.options)!=null&&s.defaultNotFoundComponent)&&(a.options.notFoundComponent=r.router.options.defaultNotFoundComponent),br(a.options.notFoundComponent);const l=r.matches.find(u=>u.routeId===a.id);br(l,"Could not find match for route: "+a.id),r.updateMatch(l.id,u=>({...u,status:"notFound",error:t,isFetching:!1})),t.routerCode==="BEFORE_LOAD"&&a.parentRoute&&(t.routeId=a.parentRoute.id,Rp(r,t))},Wr=(r,t,a)=>{var l,s,u;if(!(!Ba(a)&&!ma(a))){if(Ba(a)&&a.redirectHandled&&!a.options.reloadDocument)throw a;if(t){(l=t._nonReactive.beforeLoadPromise)==null||l.resolve(),(s=t._nonReactive.loaderPromise)==null||s.resolve(),t._nonReactive.beforeLoadPromise=void 0,t._nonReactive.loaderPromise=void 0;const f=Ba(a)?"redirected":"notFound";t._nonReactive.error=a,r.updateMatch(t.id,h=>({...h,status:f,context:Li(r,t.index),isFetching:!1,error:a})),ma(a)&&!a.routeId&&(a.routeId=t.routeId),(u=t._nonReactive.loadPromise)==null||u.resolve()}throw Ba(a)?(r.rendered=!0,a.options._fromLocation=r.location,a.redirectHandled=!0,a=r.router.resolveRedirect(a),a):(Rp(r,a),a)}},Lp=(r,t)=>!!r.router.getMatch(t)._nonReactive.dehydrated,zl=(r,t,a,l)=>{var h,m;const{id:s,routeId:u}=r.matches[t],f=r.router.looseRoutesById[u];if(a instanceof Promise)throw a;a.routerCode=l,r.firstBadMatchIndex??(r.firstBadMatchIndex=t),Wr(r,r.router.getMatch(s),a);try{(m=(h=f.options).onError)==null||m.call(h,a)}catch(p){a=p,Wr(r,r.router.getMatch(s),a)}r.updateMatch(s,p=>{var v,g;return(v=p._nonReactive.beforeLoadPromise)==null||v.resolve(),p._nonReactive.beforeLoadPromise=void 0,(g=p._nonReactive.loadPromise)==null||g.resolve(),{...p,error:a,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController}})},Tp=(r,t,a,l)=>{var f;if(l._nonReactive.pendingTimeout!==void 0)return;const s=a.options.pendingMs??r.router.options.defaultPendingMs;if(!!(r.onReady&&!Js(r,t)&&(a.options.loader||a.options.beforeLoad||zp(a))&&typeof s=="number"&&s!==1/0&&(a.options.pendingComponent??((f=r.router.options)==null?void 0:f.defaultPendingComponent)))){const h=setTimeout(()=>{xs(r)},s);l._nonReactive.pendingTimeout=h}},vv=(r,t,a)=>{const l=r.router.getMatch(t);if(!l._nonReactive.beforeLoadPromise&&!l._nonReactive.loaderPromise)return;Tp(r,t,a,l);const s=()=>{const u=r.router.getMatch(t);u.preload&&(u.status==="redirected"||u.status==="notFound")&&Wr(r,u,u.error)};return l._nonReactive.beforeLoadPromise?l._nonReactive.beforeLoadPromise.then(s):s()},Sv=(r,t,a,l)=>{const s=r.router.getMatch(t),u=s._nonReactive.loadPromise;s._nonReactive.loadPromise=Pi(()=>{u==null||u.resolve()});const{paramsError:f,searchError:h}=s;f&&zl(r,a,f,"PARSE_PARAMS"),h&&zl(r,a,h,"VALIDATE_SEARCH"),Tp(r,t,l,s);const m=new AbortController;let p=!1;const v=()=>{p||(p=!0,r.updateMatch(t,N=>({...N,isFetching:"beforeLoad",fetchCount:N.fetchCount+1,abortController:m})))},g=()=>{var N;(N=s._nonReactive.beforeLoadPromise)==null||N.resolve(),s._nonReactive.beforeLoadPromise=void 0,r.updateMatch(t,H=>({...H,isFetching:!1}))};if(!l.options.beforeLoad){Yl(()=>{v(),g()});return}s._nonReactive.beforeLoadPromise=Pi();const S={...Li(r,a,!1),...s.__routeContext},{search:x,params:M,cause:E}=s,w=Js(r,t),A={search:x,abortController:m,params:M,preload:w,context:S,location:r.location,navigate:N=>r.router.navigate({...N,_fromLocation:r.location}),buildLocation:r.router.buildLocation,cause:w?"preload":E,matches:r.matches,routeId:l.id,...r.router.options.additionalContext},L=N=>{if(N===void 0){Yl(()=>{v(),g()});return}(Ba(N)||ma(N))&&(v(),zl(r,a,N,"BEFORE_LOAD")),Yl(()=>{v(),r.updateMatch(t,H=>({...H,__beforeLoadContext:N})),g()})};let G;try{if(G=l.options.beforeLoad(A),Ri(G))return v(),G.catch(N=>{zl(r,a,N,"BEFORE_LOAD")}).then(L)}catch(N){v(),zl(r,a,N,"BEFORE_LOAD")}L(G)},Mv=(r,t)=>{const{id:a,routeId:l}=r.matches[t],s=r.router.looseRoutesById[l],u=()=>h(),f=()=>Sv(r,a,t,s),h=()=>{if(Lp(r,a))return;const m=vv(r,a,s);return Ri(m)?m.then(f):f()};return u()},Cv=(r,t,a)=>{var u,f,h,m,p,v;const l=r.router.getMatch(t);if(!l||!a.options.head&&!a.options.scripts&&!a.options.headers)return;const s={ssr:r.router.options.ssr,matches:r.matches,match:l,params:l.params,loaderData:l.loaderData};return Promise.all([(f=(u=a.options).head)==null?void 0:f.call(u,s),(m=(h=a.options).scripts)==null?void 0:m.call(h,s),(v=(p=a.options).headers)==null?void 0:v.call(p,s)]).then(([g,S,x])=>{const M=g==null?void 0:g.meta,E=g==null?void 0:g.links,w=g==null?void 0:g.scripts,A=g==null?void 0:g.styles;return{meta:M,links:E,headScripts:w,headers:x,scripts:S,styles:A}})},Pp=(r,t,a,l)=>{const s=r.matchPromises[a-1],{params:u,loaderDeps:f,abortController:h,cause:m}=r.router.getMatch(t),p=Li(r,a),v=Js(r,t);return{params:u,deps:f,preload:!!v,parentMatchPromise:s,abortController:h,context:p,location:r.location,navigate:g=>r.router.navigate({...g,_fromLocation:r.location}),cause:v?"preload":m,route:l,...r.router.options.additionalContext}},b0=async(r,t,a,l)=>{var s,u,f,h,m,p,v;try{const g=r.router.getMatch(t);try{(!(jb??r.router.isServer)||g.ssr===!0)&&Op(l);const S=(u=(s=l.options).loader)==null?void 0:u.call(s,Pp(r,t,a,l)),x=l.options.loader&&Ri(S);if(!!(x||l._lazyPromise||l._componentsPromise||l.options.head||l.options.scripts||l.options.headers||g._nonReactive.minPendingPromise)&&r.updateMatch(t,w=>({...w,isFetching:"loader"})),l.options.loader){const w=x?await S:S;Wr(r,r.router.getMatch(t),w),w!==void 0&&r.updateMatch(t,A=>({...A,loaderData:w}))}l._lazyPromise&&await l._lazyPromise;const E=g._nonReactive.minPendingPromise;E&&await E,l._componentsPromise&&await l._componentsPromise,r.updateMatch(t,w=>({...w,error:void 0,context:Li(r,a),status:"success",isFetching:!1,updatedAt:Date.now()}))}catch(S){let x=S;if((x==null?void 0:x.name)==="AbortError"){if(g.abortController.signal.aborted){(f=g._nonReactive.loaderPromise)==null||f.resolve(),g._nonReactive.loaderPromise=void 0;return}r.updateMatch(t,E=>({...E,status:E.status==="pending"?"success":E.status,isFetching:!1,context:Li(r,a)}));return}const M=g._nonReactive.minPendingPromise;M&&await M,ma(S)&&await((m=(h=l.options.notFoundComponent)==null?void 0:h.preload)==null?void 0:m.call(h)),Wr(r,r.router.getMatch(t),S);try{(v=(p=l.options).onError)==null||v.call(p,S)}catch(E){x=E,Wr(r,r.router.getMatch(t),E)}r.updateMatch(t,E=>({...E,error:x,context:Li(r,a),status:"error",isFetching:!1}))}}catch(g){const S=r.router.getMatch(t);S&&(S._nonReactive.loaderPromise=void 0),Wr(r,S,g)}},xv=async(r,t)=>{var v,g;async function a(S,x,M,E){const w=Date.now()-x.updatedAt,A=S?E.options.preloadStaleTime??r.router.options.defaultPreloadStaleTime??3e4:E.options.staleTime??r.router.options.defaultStaleTime??0,L=E.options.shouldReload,G=typeof L=="function"?L(Pp(r,l,t,E)):L,{status:N,invalid:H}=M;u=N==="success"&&(H||(G??w>A)),S&&E.options.preload===!1||(u&&!r.sync?(f=!0,(async()=>{var V,U;try{await b0(r,l,t,E);const X=r.router.getMatch(l);(V=X._nonReactive.loaderPromise)==null||V.resolve(),(U=X._nonReactive.loadPromise)==null||U.resolve(),X._nonReactive.loaderPromise=void 0}catch(X){Ba(X)&&await r.router.navigate(X.options)}})()):(N!=="success"||u&&r.sync)&&await b0(r,l,t,E))}const{id:l,routeId:s}=r.matches[t];let u=!1,f=!1;const h=r.router.looseRoutesById[s];if(!Lp(r,l)){const S=r.router.getMatch(l),x=Js(r,l);if(S._nonReactive.loaderPromise){if(S.status==="success"&&!r.sync&&!S.preload)return S;await S._nonReactive.loaderPromise;const M=r.router.getMatch(l),E=M._nonReactive.error||M.error;E&&Wr(r,M,E),M.status==="pending"&&await a(x,S,M,h)}else{const M=x&&!r.router.state.matches.some(w=>w.id===l),E=r.router.getMatch(l);E._nonReactive.loaderPromise=Pi(),M!==E.preload&&r.updateMatch(l,w=>({...w,preload:M})),await a(x,S,E,h)}}const m=r.router.getMatch(l);f||((v=m._nonReactive.loaderPromise)==null||v.resolve(),(g=m._nonReactive.loadPromise)==null||g.resolve()),clearTimeout(m._nonReactive.pendingTimeout),m._nonReactive.pendingTimeout=void 0,f||(m._nonReactive.loaderPromise=void 0),m._nonReactive.dehydrated=void 0;const p=f?m.isFetching:!1;return p!==m.isFetching||m.invalid!==!1?(r.updateMatch(l,S=>({...S,isFetching:p,invalid:!1})),r.router.getMatch(l)):m};async function v0(r){const t=Object.assign(r,{matchPromises:[]});t.router.state.matches.some(a=>a._forcePending)&&xs(t);try{for(let h=0;h<t.matches.length;h++){const m=Mv(t,h);Ri(m)&&await m}const a=t.firstBadMatchIndex??t.matches.length;for(let h=0;h<a;h++)t.matchPromises.push(xv(t,h));const s=(await Promise.allSettled(t.matchPromises)).filter(h=>h.status==="rejected").map(h=>h.reason);let u;for(const h of s){if(Ba(h))throw h;!u&&ma(h)&&(u=h)}for(const h of t.matches){const{id:m,routeId:p}=h,v=t.router.looseRoutesById[p];try{const g=Cv(t,m,v);if(g){const S=await g;t.updateMatch(m,x=>({...x,...S}))}}catch(g){console.error(`Error executing head for route ${p}:`,g)}}if(u)throw u;const f=xs(t);Ri(f)&&await f}catch(a){if(ma(a)&&!t.preload){const l=xs(t);throw Ri(l)&&await l,a}if(Ba(a))throw a}return t.matches}async function Op(r){if(!r._lazyLoaded&&r._lazyPromise===void 0&&(r.lazyFn?r._lazyPromise=r.lazyFn().then(t=>{const{id:a,...l}=t.options;Object.assign(r.options,l),r._lazyLoaded=!0,r._lazyPromise=void 0}):r._lazyLoaded=!0),!r._componentsLoaded&&r._componentsPromise===void 0){const t=()=>{var l;const a=[];for(const s of Fp){const u=(l=r.options[s])==null?void 0:l.preload;u&&a.push(u())}if(a.length)return Promise.all(a).then(()=>{r._componentsLoaded=!0,r._componentsPromise=void 0});r._componentsLoaded=!0,r._componentsPromise=void 0};r._componentsPromise=r._lazyPromise?r._lazyPromise.then(t):t()}return r._componentsPromise}function zp(r){var t;for(const a of Fp)if((t=r.options[a])!=null&&t.preload)return!0;return!1}const Fp=["component","errorComponent","pendingComponent","notFoundComponent"];function Av(r){return{input:({url:t})=>{for(const a of r)t=Jd(a,t);return t},output:({url:t})=>{for(let a=r.length-1;a>=0;a--)t=kp(r[a],t);return t}}}function Ev(r){const t=Bp(r.basepath),a=`/${t}`,l=`${a}/`,s=r.caseSensitive?a:a.toLowerCase(),u=r.caseSensitive?l:l.toLowerCase();return{input:({url:f})=>{const h=r.caseSensitive?f.pathname:f.pathname.toLowerCase();return h===s?f.pathname="/":h.startsWith(u)&&(f.pathname=f.pathname.slice(a.length)),f},output:({url:f})=>(f.pathname=Cs(["/",t,f.pathname]),f)}}function Jd(r,t){var l;const a=(l=r==null?void 0:r.input)==null?void 0:l.call(r,{url:t});if(a){if(typeof a=="string")return new URL(a);if(a instanceof URL)return a}return t}function kp(r,t){var l;const a=(l=r==null?void 0:r.output)==null?void 0:l.call(r,{url:t});if(a){if(typeof a=="string")return new URL(a);if(a instanceof URL)return a}return t}function Tt(r){const t=r.resolvedLocation,a=r.location,l=(t==null?void 0:t.pathname)!==a.pathname,s=(t==null?void 0:t.href)!==a.href,u=(t==null?void 0:t.hash)!==a.hash;return{fromLocation:t,toLocation:a,pathChanged:l,hrefChanged:s,hashChanged:u}}class Dv{constructor(t){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.startTransition=a=>a(),this.update=a=>{var S;a.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");const l=this.options,s=this.basepath??(l==null?void 0:l.basepath)??"/",u=this.basepath===void 0,f=l==null?void 0:l.rewrite;if(this.options={...l,...a},this.isServer=this.options.isServer??typeof document>"u",this.options.pathParamsAllowedCharacters&&(this.pathParamsDecoder=rv(this.options.pathParamsAllowedCharacters)),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.options.history?this.history=this.options.history:this.history=kb()),this.origin=this.options.origin,this.origin||(window!=null&&window.origin&&window.origin!=="null"?this.origin=window.origin:this.origin="http://localhost"),this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree){this.routeTree=this.options.routeTree;let x;this.resolvePathCache=Ps(1e3),x=this.buildRouteTree(),this.setRoutes(x)}!this.__store&&this.latestLocation&&(this.__store=new zb(Nv(this.latestLocation),{onUpdate:()=>{this.__store.state={...this.state,cachedMatches:this.state.cachedMatches.filter(x=>!["redirected"].includes(x.status))}}}),cv(this));let h=!1;const m=this.options.basepath??"/",p=this.options.rewrite;if(u||s!==m||f!==p){this.basepath=m;const x=[],M=Bp(m);M&&M!=="/"&&x.push(Ev({basepath:m})),p&&x.push(p),this.rewrite=x.length===0?void 0:x.length===1?x[0]:Av(x),this.history&&this.updateLatestLocation(),h=!0}h&&this.__store&&(this.__store.state={...this.state,location:this.latestLocation}),typeof window<"u"&&"CSS"in window&&typeof((S=window.CSS)==null?void 0:S.supports)=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a)"))},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{const a=Qb(this.routeTree,this.options.caseSensitive,(l,s)=>{l.init({originalIndex:s})});return this.options.routeMasks&&Ub(this.options.routeMasks,a.processedTree),a},this.subscribe=(a,l)=>{const s={eventType:a,fn:l};return this.subscribers.add(s),()=>{this.subscribers.delete(s)}},this.emit=a=>{this.subscribers.forEach(l=>{l.eventType===a.type&&l.fn(a)})},this.parseLocation=(a,l)=>{const s=({pathname:m,search:p,hash:v,href:g,state:S})=>{if(!this.rewrite&&!/[ \x00-\x1f\x7f\u0080-\uffff]/.test(m)){const L=this.options.parseSearch(p),G=this.options.stringifySearch(L);return{href:m+G+v,publicHref:g,pathname:Pl(m).path,external:!1,searchStr:G,search:ha(l==null?void 0:l.search,L),hash:Pl(v.slice(1)).path,state:ha(l==null?void 0:l.state,S)}}const x=new URL(g,this.origin),M=Jd(this.rewrite,x),E=this.options.parseSearch(M.search),w=this.options.stringifySearch(E);return M.search=w,{href:M.href.replace(M.origin,""),publicHref:g,pathname:Pl(M.pathname).path,external:!!this.rewrite&&M.origin!==this.origin,searchStr:w,search:ha(l==null?void 0:l.search,E),hash:Pl(M.hash.slice(1)).path,state:ha(l==null?void 0:l.state,S)}},u=s(a),{__tempLocation:f,__tempKey:h}=u.state;if(f&&(!h||h===this.tempLocationKey)){const m=s(f);return m.state.key=u.state.key,m.state.__TSR_key=u.state.__TSR_key,delete m.state.__tempLocation,{...m,maskedLocation:u}}return u},this.resolvePathWithBase=(a,l)=>av({base:a,to:cf(l),trailingSlash:this.options.trailingSlash,cache:this.resolvePathCache}),this.matchRoutes=(a,l,s)=>typeof a=="string"?this.matchRoutesInternal({pathname:a,search:l},s):this.matchRoutesInternal(a,l),this.getMatchedRoutes=a=>Bv({pathname:a,routesById:this.routesById,processedTree:this.processedTree}),this.cancelMatch=a=>{const l=this.getMatch(a);l&&(l.abortController.abort(),clearTimeout(l._nonReactive.pendingTimeout),l._nonReactive.pendingTimeout=void 0)},this.cancelMatches=()=>{const a=this.state.matches.filter(u=>u.status==="pending"),l=this.state.matches.filter(u=>u.isFetching==="loader");new Set([...this.state.pendingMatches??[],...a,...l]).forEach(u=>{this.cancelMatch(u.id)})},this.buildLocation=a=>{const l=(u={})=>{var J,$;const f=u._fromLocation||this.pendingBuiltLocation||this.latestLocation,h=this.matchRoutesLightweight(f);u.from;const m=u.unsafeRelative==="path"?f.pathname:u.from??h.fullPath,p=this.resolvePathWithBase(m,"."),v=h.search,g={...h.params},S=u.to?this.resolvePathWithBase(p,`${u.to}`):this.resolvePathWithBase(p,"."),x=u.params===!1||u.params===null?{}:(u.params??!0)===!0?g:Object.assign(g,Qr(u.params,g)),M=xd({path:S,params:x,decoder:this.pathParamsDecoder,server:this.isServer}).interpolatedPath,E=this.getMatchedRoutes(M);let w=E.matchedRoutes;(E.foundRoute?E.foundRoute.path!=="/"&&E.routeParams["**"]:yr(M))&&this.options.notFoundRoute&&(w=[...w,this.options.notFoundRoute]);let L=!1;if(Object.keys(x).length>0)for(const ee of w){const R=((J=ee.options.params)==null?void 0:J.stringify)??ee.options.stringifyParams;R&&(L=!0,Object.assign(x,R(x)))}const G=a.leaveParams?S:Pl(L?xd({path:S,params:x,decoder:this.pathParamsDecoder,server:this.isServer}).interpolatedPath:M).path;let N=v;if(a._includeValidateSearch&&(($=this.options.search)!=null&&$.strict)){const ee={};w.forEach(R=>{if(R.options.validateSearch)try{Object.assign(ee,As(R.options.validateSearch,{...ee,...N}))}catch{}}),N=ee}N=Rv({search:N,dest:u,destRoutes:w,_includeValidateSearch:a._includeValidateSearch}),N=ha(v,N);const H=this.options.stringifySearch(N),V=u.hash===!0?f.hash:u.hash?Qr(u.hash,f.hash):void 0,U=V?`#${V}`:"";let X=u.state===!0?f.state:u.state?Qr(u.state,f.state):{};X=ha(f.state,X);const z=`${G}${H}${U}`;let O,Q,q=!1;if(this.rewrite){const ee=new URL(z,this.origin),R=kp(this.rewrite,ee);O=ee.href.replace(ee.origin,""),R.origin!==this.origin?(Q=R.href,q=!0):Q=R.pathname+R.search+R.hash}else O=Ib(z),Q=O;return{publicHref:Q,href:O,pathname:G,search:N,searchStr:H,state:X,hash:V??"",external:q,unmaskOnReload:u.unmaskOnReload}},s=(u={},f)=>{const h=l(u);let m=f?l(f):void 0;if(!m){const p={};if(this.options.routeMasks){const v=Kb(h.pathname,this.processedTree);if(v){Object.assign(p,v.rawParams);const{from:g,params:S,...x}=v.route,M=S===!1||S===null?{}:(S??!0)===!0?p:Object.assign(p,Qr(S,p));f={from:a.from,...x,params:M},m=l(f)}}}return m&&(h.maskedLocation=m),h};return a.mask?s(a,{from:a.from,...a.mask}):s(a)},this.commitLocation=async({viewTransition:a,ignoreBlocker:l,...s})=>{const u=()=>{const m=["key","__TSR_key","__TSR_index","__hashScrollIntoViewOptions"];m.forEach(v=>{s.state[v]=this.latestLocation.state[v]});const p=Lt(s.state,this.latestLocation.state);return m.forEach(v=>{delete s.state[v]}),p},f=yr(this.latestLocation.href)===yr(s.href),h=this.commitLocationPromise;if(this.commitLocationPromise=Pi(()=>{h==null||h.resolve()}),f&&u())this.load();else{let{maskedLocation:m,hashScrollIntoView:p,...v}=s;m&&(v={...m,state:{...m.state,__tempKey:void 0,__tempLocation:{...v,search:v.searchStr,state:{...v.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(v.unmaskOnReload??this.options.unmaskOnReload??!1)&&(v.state.__tempKey=this.tempLocationKey)),v.state.__hashScrollIntoViewOptions=p??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=a,this.history[s.replace?"replace":"push"](v.publicHref,v.state,{ignoreBlocker:l})}return this.resetNextScroll=s.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:a,resetScroll:l,hashScrollIntoView:s,viewTransition:u,ignoreBlocker:f,href:h,...m}={})=>{if(h){const g=this.history.location.state.__TSR_index,S=Rs(h,{__TSR_index:a?g:g+1}),x=new URL(S.pathname,this.origin),M=Jd(this.rewrite,x);m.to=M.pathname,m.search=this.options.parseSearch(S.search),m.hash=S.hash.slice(1)}const p=this.buildLocation({...m,_includeValidateSearch:!0});this.pendingBuiltLocation=p;const v=this.commitLocation({...p,viewTransition:u,replace:a,resetScroll:l,hashScrollIntoView:s,ignoreBlocker:f});return Promise.resolve().then(()=>{this.pendingBuiltLocation===p&&(this.pendingBuiltLocation=void 0)}),v},this.navigate=async({to:a,reloadDocument:l,href:s,publicHref:u,...f})=>{var m;let h=!1;if(s)try{new URL(`${s}`),h=!0}catch{}if(h&&!l&&(l=!0),l){if(a!==void 0||!s){const v=this.buildLocation({to:a,...f});s=s??v.publicHref,u=u??v.publicHref}const p=!h&&u?u:s;if(Ts(p))return Promise.resolve();if(!f.ignoreBlocker){const v=this.history,g=((m=v.getBlockers)==null?void 0:m.call(v))??[];for(const S of g)if(S!=null&&S.blockerFn&&await S.blockerFn({currentLocation:this.latestLocation,nextLocation:this.latestLocation,action:"PUSH"}))return Promise.resolve()}return f.replace?window.location.replace(p):window.location.href=p,Promise.resolve()}return this.buildAndCommitLocation({...f,href:s,to:a,_isNavigate:!0})},this.beforeLoad=()=>{this.cancelMatches(),this.updateLatestLocation();const a=this.matchRoutes(this.latestLocation);this.__store.setState(l=>({...l,status:"pending",statusCode:200,isLoading:!0,location:this.latestLocation,pendingMatches:a,cachedMatches:l.cachedMatches.filter(s=>!a.some(u=>u.id===s.id))}))},this.load=async a=>{let l,s,u;for(u=new Promise(h=>{this.startTransition(async()=>{var m;try{this.beforeLoad();const p=this.latestLocation,v=this.state.resolvedLocation;this.state.redirect||this.emit({type:"onBeforeNavigate",...Tt({resolvedLocation:v,location:p})}),this.emit({type:"onBeforeLoad",...Tt({resolvedLocation:v,location:p})}),await v0({router:this,sync:a==null?void 0:a.sync,matches:this.state.pendingMatches,location:p,updateMatch:this.updateMatch,onReady:async()=>{this.startTransition(()=>{this.startViewTransition(async()=>{let g=[],S=[],x=[];Yl(()=>{this.__store.setState(M=>{const E=M.matches,w=M.pendingMatches||M.matches;return g=E.filter(A=>!w.some(L=>L.id===A.id)),S=w.filter(A=>!E.some(L=>L.id===A.id)),x=w.filter(A=>E.some(L=>L.id===A.id)),{...M,isLoading:!1,loadedAt:Date.now(),matches:w,pendingMatches:void 0,cachedMatches:[...M.cachedMatches,...g.filter(A=>A.status!=="error"&&A.status!=="notFound")]}}),this.clearExpiredCache()}),[[g,"onLeave"],[S,"onEnter"],[x,"onStay"]].forEach(([M,E])=>{M.forEach(w=>{var A,L;(L=(A=this.looseRoutesById[w.routeId].options)[E])==null||L.call(A,w)})})})})}})}catch(p){Ba(p)?(l=p,this.navigate({...l.options,replace:!0,ignoreBlocker:!0})):ma(p)&&(s=p),this.__store.setState(v=>({...v,statusCode:l?l.status:s?404:v.matches.some(g=>g.status==="error")?500:200,redirect:l}))}this.latestLoadPromise===u&&((m=this.commitLocationPromise)==null||m.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),h()})}),this.latestLoadPromise=u,await u;this.latestLoadPromise&&u!==this.latestLoadPromise;)await this.latestLoadPromise;let f;this.hasNotFoundMatch()?f=404:this.__store.state.matches.some(h=>h.status==="error")&&(f=500),f!==void 0&&this.__store.setState(h=>({...h,statusCode:f}))},this.startViewTransition=a=>{const l=this.shouldViewTransition??this.options.defaultViewTransition;if(this.shouldViewTransition=void 0,l&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let s;if(typeof l=="object"&&this.isViewTransitionTypesSupported){const u=this.latestLocation,f=this.state.resolvedLocation,h=typeof l.types=="function"?l.types(Tt({resolvedLocation:f,location:u})):l.types;if(h===!1){a();return}s={update:a,types:h}}else s=a;document.startViewTransition(s)}else a()},this.updateMatch=(a,l)=>{this.startTransition(()=>{var u;const s=(u=this.state.pendingMatches)!=null&&u.some(f=>f.id===a)?"pendingMatches":this.state.matches.some(f=>f.id===a)?"matches":this.state.cachedMatches.some(f=>f.id===a)?"cachedMatches":"";s&&this.__store.setState(f=>{var h;return{...f,[s]:(h=f[s])==null?void 0:h.map(m=>m.id===a?l(m):m)}})})},this.getMatch=a=>{var s;const l=u=>u.id===a;return this.state.cachedMatches.find(l)??((s=this.state.pendingMatches)==null?void 0:s.find(l))??this.state.matches.find(l)},this.invalidate=a=>{const l=s=>{var u;return((u=a==null?void 0:a.filter)==null?void 0:u.call(a,s))??!0?{...s,invalid:!0,...a!=null&&a.forcePending||s.status==="error"||s.status==="notFound"?{status:"pending",error:void 0}:void 0}:s};return this.__store.setState(s=>{var u;return{...s,matches:s.matches.map(l),cachedMatches:s.cachedMatches.map(l),pendingMatches:(u=s.pendingMatches)==null?void 0:u.map(l)}}),this.shouldViewTransition=!1,this.load({sync:a==null?void 0:a.sync})},this.getParsedLocationHref=a=>a.publicHref||"/",this.resolveRedirect=a=>{const l=a.headers.get("Location");if(!a.options.href||a.options._builtLocation){const s=a.options._builtLocation??this.buildLocation(a.options),u=this.getParsedLocationHref(s);a.options.href=u,a.headers.set("Location",u)}else if(l)try{const s=new URL(l);if(this.origin&&s.origin===this.origin){const u=s.pathname+s.search+s.hash;a.options.href=u,a.headers.set("Location",u)}}catch{}return a.headers.get("Location")||a.headers.set("Location",a.options.href),a},this.clearCache=a=>{const l=a==null?void 0:a.filter;l!==void 0?this.__store.setState(s=>({...s,cachedMatches:s.cachedMatches.filter(u=>!l(u))})):this.__store.setState(s=>({...s,cachedMatches:[]}))},this.clearExpiredCache=()=>{const a=l=>{const s=this.looseRoutesById[l.routeId];if(!s.options.loader)return!0;const u=(l.preload?s.options.preloadGcTime??this.options.defaultPreloadGcTime:s.options.gcTime??this.options.defaultGcTime)??300*1e3;return l.status==="error"?!0:Date.now()-l.updatedAt>=u};this.clearCache({filter:a})},this.loadRouteChunk=Op,this.preloadRoute=async a=>{const l=this.buildLocation(a);let s=this.matchRoutes(l,{throwOnError:!0,preload:!0,dest:a});const u=new Set([...this.state.matches,...this.state.pendingMatches??[]].map(h=>h.id)),f=new Set([...u,...this.state.cachedMatches.map(h=>h.id)]);Yl(()=>{s.forEach(h=>{f.has(h.id)||this.__store.setState(m=>({...m,cachedMatches:[...m.cachedMatches,h]}))})});try{return s=await v0({router:this,matches:s,location:l,preload:!0,updateMatch:(h,m)=>{u.has(h)?s=s.map(p=>p.id===h?m(p):p):this.updateMatch(h,m)}}),s}catch(h){if(Ba(h))return h.options.reloadDocument?void 0:await this.preloadRoute({...h.options,_fromLocation:l});ma(h)||console.error(h);return}},this.matchRoute=(a,l)=>{const s={...a,to:a.to?this.resolvePathWithBase(a.from||"",a.to):void 0,params:a.params||{},leaveParams:!0},u=this.buildLocation(s);if(l!=null&&l.pending&&this.state.status!=="pending")return!1;const h=((l==null?void 0:l.pending)===void 0?!this.state.isLoading:l.pending)?this.latestLocation:this.state.resolvedLocation||this.state.location,m=Yb(u.pathname,(l==null?void 0:l.caseSensitive)??!1,(l==null?void 0:l.fuzzy)??!1,h.pathname,this.processedTree);return!m||a.params&&!Lt(m.rawParams,a.params,{partial:!0})?!1:(l==null?void 0:l.includeSearch)??!0?Lt(h.search,u.search,{partial:!0})?m.rawParams:!1:m.rawParams},this.hasNotFoundMatch=()=>this.__store.state.matches.some(a=>a.status==="notFound"||a.globalNotFound),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...t,caseSensitive:t.caseSensitive??!1,notFoundMode:t.notFoundMode??"fuzzy",stringifySearch:t.stringifySearch??gv,parseSearch:t.parseSearch??mv}),typeof document<"u"&&(self.__TSR_ROUTER__=this)}isShell(){return!!this.options.isShell}isPrerendering(){return!!this.options.isPrerendering}get state(){return this.__store.state}setRoutes({routesById:t,routesByPath:a,processedTree:l}){this.routesById=t,this.routesByPath=a,this.processedTree=l;const s=this.options.notFoundRoute;s&&(s.init({originalIndex:99999999999}),this.routesById[s.id]=s)}get looseRoutesById(){return this.routesById}getParentContext(t){return(t==null?void 0:t.id)?t.context??this.options.context??void 0:this.options.context??void 0}matchRoutesInternal(t,a){var S,x;const l=this.getMatchedRoutes(t.pathname),{foundRoute:s,routeParams:u,parsedParams:f}=l;let{matchedRoutes:h}=l,m=!1;(s?s.path!=="/"&&u["**"]:yr(t.pathname))&&(this.options.notFoundRoute?h=[...h,this.options.notFoundRoute]:m=!0);const p=m?Tv(this.options.notFoundMode,h):void 0,v=new Array(h.length),g=new Map(this.state.matches.map(M=>[M.routeId,M]));for(let M=0;M<h.length;M++){const E=h[M],w=v[M-1];let A,L,G;{const R=(w==null?void 0:w.search)??t.search,I=(w==null?void 0:w._strictSearch)??void 0;try{const W=As(E.options.validateSearch,{...R})??void 0;A={...R,...W},L={...I,...W},G=void 0}catch(W){let ie=W;if(W instanceof Fs||(ie=new Fs(W.message,{cause:W})),a!=null&&a.throwOnError)throw ie;A=R,L={},G=ie}}const N=((x=(S=E.options).loaderDeps)==null?void 0:x.call(S,{search:A}))??"",H=N?JSON.stringify(N):"",{interpolatedPath:V,usedParams:U}=xd({path:E.fullPath,params:u,decoder:this.pathParamsDecoder,server:this.isServer}),X=E.id+V+H,z=this.getMatch(X),O=g.get(E.id),Q=(z==null?void 0:z._strictParams)??U;let q;if(!z)try{S0(E,U,f,Q)}catch(R){if(ma(R)||Ba(R)?q=R:q=new wv(R.message,{cause:R}),a!=null&&a.throwOnError)throw q}Object.assign(u,Q);const J=O?"stay":"enter";let $;if(z)$={...z,cause:J,params:(O==null?void 0:O.params)??u,_strictParams:Q,search:ha(O?O.search:z.search,A),_strictSearch:L};else{const R=E.options.loader||E.options.beforeLoad||E.lazyFn||zp(E)?"pending":"success";$={id:X,ssr:E.options.ssr,index:M,routeId:E.id,params:(O==null?void 0:O.params)??u,_strictParams:Q,pathname:V,updatedAt:Date.now(),search:O?ha(O.search,A):A,_strictSearch:L,searchError:void 0,status:R,isFetching:!1,error:void 0,paramsError:q,__routeContext:void 0,_nonReactive:{loadPromise:Pi()},__beforeLoadContext:void 0,context:{},abortController:new AbortController,fetchCount:0,cause:J,loaderDeps:O?ha(O.loaderDeps,N):N,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:E.options.staticData||{},fullPath:E.fullPath}}a!=null&&a.preload||($.globalNotFound=p===E.id),$.searchError=G;const ee=this.getParentContext(w);$.context={...ee,...$.__routeContext,...$.__beforeLoadContext},v[M]=$}for(let M=0;M<v.length;M++){const E=v[M],w=this.looseRoutesById[E.routeId],A=this.getMatch(E.id),L=g.get(E.routeId);if(E.params=L?ha(L.params,u):u,!A){const G=v[M-1],N=this.getParentContext(G);if(w.options.context){const H={deps:E.loaderDeps,params:E.params,context:N??{},location:t,navigate:V=>this.navigate({...V,_fromLocation:t}),buildLocation:this.buildLocation,cause:E.cause,abortController:E.abortController,preload:!!E.preload,matches:v,routeId:w.id};E.__routeContext=w.options.context(H)??void 0}E.context={...N,...E.__routeContext,...E.__beforeLoadContext}}}return v}matchRoutesLightweight(t){const{matchedRoutes:a,routeParams:l,parsedParams:s}=this.getMatchedRoutes(t.pathname),u=Ql(a),f={...t.search};for(const v of a)try{Object.assign(f,As(v.options.validateSearch,f))}catch{}const h=Ql(this.state.matches),m=h&&h.routeId===u.id&&t.pathname===this.state.location.pathname;let p;if(m)p=h.params;else{const v={...l};for(const g of a)try{S0(g,l,s??{},v)}catch{}p=v}return{matchedRoutes:a,fullPath:u.fullPath,search:f,params:p}}}class Fs extends Error{}class wv extends Error{}function Nv(r){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:r,matches:[],pendingMatches:[],cachedMatches:[],statusCode:200}}function As(r,t){if(r==null)return{};if("~standard"in r){const a=r["~standard"].validate(t);if(a instanceof Promise)throw new Fs("Async validation not supported");if(a.issues)throw new Fs(JSON.stringify(a.issues,void 0,2),{cause:a});return a.value}return"parse"in r?r.parse(t):typeof r=="function"?r(t):{}}function Bv({pathname:r,routesById:t,processedTree:a}){const l={},s=yr(r);let u,f;const h=Zb(s,a,!0);return h&&(u=h.route,Object.assign(l,h.rawParams),f=Object.assign({},h.parsedParams)),{matchedRoutes:(h==null?void 0:h.branch)||[t[Na]],routeParams:l,foundRoute:u,parsedParams:f}}function Rv({search:r,dest:t,destRoutes:a,_includeValidateSearch:l}){return Lv(a)(r,t,l??!1)}function Lv(r){var s;const t={dest:null,_includeValidateSearch:!1,middlewares:[]};for(const u of r){if("search"in u.options)(s=u.options.search)!=null&&s.middlewares&&t.middlewares.push(...u.options.search.middlewares);else if(u.options.preSearchFilters||u.options.postSearchFilters){const f=({search:h,next:m})=>{let p=h;"preSearchFilters"in u.options&&u.options.preSearchFilters&&(p=u.options.preSearchFilters.reduce((g,S)=>S(g),h));const v=m(p);return"postSearchFilters"in u.options&&u.options.postSearchFilters?u.options.postSearchFilters.reduce((g,S)=>S(g),v):v};t.middlewares.push(f)}if(u.options.validateSearch){const f=({search:h,next:m})=>{const p=m(h);if(!t._includeValidateSearch)return p;try{return{...p,...As(u.options.validateSearch,p)??void 0}}catch{return p}};t.middlewares.push(f)}}const a=({search:u})=>{const f=t.dest;return f.search?f.search===!0?u:Qr(f.search,u):{}};t.middlewares.push(a);const l=(u,f,h)=>{if(u>=h.length)return f;const m=h[u];return m({search:f,next:v=>l(u+1,v,h)})};return function(f,h,m){return t.dest=h,t._includeValidateSearch=m,l(0,f,t.middlewares)}}function Tv(r,t){if(r!=="root")for(let a=t.length-1;a>=0;a--){const l=t[a];if(l.children)return l.id}return Na}function S0(r,t,a,l){var u;const s=((u=r.options.params)==null?void 0:u.parse)??r.options.parseParams;if(s)if(r.options.skipRouteOnParseError)for(const f in t)f in a&&(l[f]=a[f]);else{const f=s(l);Object.assign(l,f)}}const Pv="Error preloading route! ☝️";class Gp{constructor(t){if(this.init=a=>{var p,v;this.originalIndex=a.originalIndex;const l=this.options,s=!(l!=null&&l.path)&&!(l!=null&&l.id);this.parentRoute=(v=(p=this.options).getParentRoute)==null?void 0:v.call(p),s?this._path=Na:this.parentRoute||br(!1);let u=s?Na:l==null?void 0:l.path;u&&u!=="/"&&(u=Np(u));const f=(l==null?void 0:l.id)||u;let h=s?Na:Cs([this.parentRoute.id===Na?"":this.parentRoute.id,f]);u===Na&&(u="/"),h!==Na&&(h=Cs(["/",h]));const m=h===Na?"/":Cs([this.parentRoute.fullPath,u]);this._path=u,this._id=h,this._fullPath=m,this._to=yr(m)},this.addChildren=a=>this._addFileChildren(a),this._addFileChildren=a=>(Array.isArray(a)&&(this.children=a),typeof a=="object"&&a!==null&&(this.children=Object.values(a)),this),this._addFileTypes=()=>this,this.updateLoader=a=>(Object.assign(this.options,a),this),this.update=a=>(Object.assign(this.options,a),this),this.lazy=a=>(this.lazyFn=a,this),this.redirect=a=>bv({from:this.fullPath,...a}),this.options=t||{},this.isRoot=!(t!=null&&t.getParentRoute),t!=null&&t.id&&(t!=null&&t.path))throw new Error("Route cannot have both an 'id' and a 'path' option.")}get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}}class Ov extends Gp{constructor(t){super(t)}}const ys=typeof window<"u"?D.useLayoutEffect:D.useEffect;function Ed(r){const t=D.useRef({value:r,prev:null}),a=t.current.value;return r!==a&&(t.current={value:r,prev:a}),t.current.prev}function zv(r,t,a={},l={}){D.useEffect(()=>{if(!r.current||l.disabled||typeof IntersectionObserver!="function")return;const s=new IntersectionObserver(([u])=>{t(u)},a);return s.observe(r.current),()=>{s.disconnect()}},[t,a,l.disabled,r])}function Fv(r){const t=D.useRef(null);return D.useImperativeHandle(r,()=>t.current,[]),t}function df(r){const t=r.errorComponent??ff;return y.jsx(kv,{getResetKey:r.getResetKey,onCatch:r.onCatch,children:({error:a,reset:l})=>a?D.createElement(t,{error:a,reset:l}):r.children})}class kv extends D.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromProps(t){return{resetKey:t.getResetKey()}}static getDerivedStateFromError(t){return{error:t}}reset(){this.setState({error:null})}componentDidUpdate(t,a){a.error&&a.resetKey!==this.state.resetKey&&this.reset()}componentDidCatch(t,a){this.props.onCatch&&this.props.onCatch(t,a)}render(){return this.props.children({error:this.state.resetKey!==this.props.getResetKey()?null:this.state.error,reset:()=>{this.reset()}})}}function ff({error:r}){const[t,a]=D.useState(!1);return y.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[y.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),y.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>a(l=>!l),children:t?"Hide Error":"Show Error"})]}),y.jsx("div",{style:{height:".25rem"}}),t?y.jsx("div",{children:y.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:r.message?y.jsx("code",{children:r.message}):null})}):null]})}function Gv({children:r,fallback:t=null}){return jp()?y.jsx(ne.Fragment,{children:r}):y.jsx(ne.Fragment,{children:t})}function jp(){return ne.useSyncExternalStore(jv,()=>!0,()=>!1)}function jv(){return()=>{}}var Dd={exports:{}},wd={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function Hv(){if(M0)return wd;M0=1;var r=lf(),t=Mp();function a(p,v){return p===v&&(p!==0||1/p===1/v)||p!==p&&v!==v}var l=typeof Object.is=="function"?Object.is:a,s=t.useSyncExternalStore,u=r.useRef,f=r.useEffect,h=r.useMemo,m=r.useDebugValue;return wd.useSyncExternalStoreWithSelector=function(p,v,g,S,x){var M=u(null);if(M.current===null){var E={hasValue:!1,value:null};M.current=E}else E=M.current;M=h(function(){function A(V){if(!L){if(L=!0,G=V,V=S(V),x!==void 0&&E.hasValue){var U=E.value;if(x(U,V))return N=U}return N=V}if(U=N,l(G,V))return U;var X=S(V);return x!==void 0&&x(U,X)?(G=V,U):(G=V,N=X)}var L=!1,G,N,H=g===void 0?null:g;return[function(){return A(v())},H===null?void 0:function(){return A(H())}]},[v,g,S,x]);var w=s(p,M[0],M[1]);return f(function(){E.hasValue=!0,E.value=w},[w]),m(w),w},wd}var C0;function _v(){return C0||(C0=1,Dd.exports=Hv()),Dd.exports}var Vv=_v();function Iv(r,t=l=>l,a={}){const l=a.equal??Jv;return Vv.useSyncExternalStoreWithSelector(r.subscribe,()=>r.state,()=>r.state,t,l)}function Jv(r,t){if(Object.is(r,t))return!0;if(typeof r!="object"||r===null||typeof t!="object"||t===null)return!1;if(r instanceof Map&&t instanceof Map){if(r.size!==t.size)return!1;for(const[l,s]of r)if(!t.has(l)||!Object.is(s,t.get(l)))return!1;return!0}if(r instanceof Set&&t instanceof Set){if(r.size!==t.size)return!1;for(const l of r)if(!t.has(l))return!1;return!0}if(r instanceof Date&&t instanceof Date)return r.getTime()===t.getTime();const a=x0(r);if(a.length!==x0(t).length)return!1;for(let l=0;l<a.length;l++)if(!Object.prototype.hasOwnProperty.call(t,a[l])||!Object.is(r[a[l]],t[a[l]]))return!1;return!0}function x0(r){return Object.keys(r).concat(Object.getOwnPropertySymbols(r))}const Nd=D.createContext(null);function Hp(){return typeof document>"u"?Nd:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=Nd,Nd)}function La(r){const t=D.useContext(Hp());return r==null||r.warn,t}function ga(r){const t=La({warn:(r==null?void 0:r.router)===void 0}),a=(r==null?void 0:r.router)||t,l=D.useRef(void 0);return Iv(a.__store,s=>{if(r!=null&&r.select){if(r.structuralSharing??a.options.defaultStructuralSharing){const u=ha(l.current,r.select(s));return l.current=u,u}return r.select(s)}return s})}const qs=D.createContext(void 0),qv=D.createContext(void 0);function Xa(r){const t=D.useContext(r.from?qv:qs);return ga({select:l=>{const s=l.matches.find(u=>r.from?r.from===u.routeId:u.id===t);if(br(!((r.shouldThrow??!0)&&!s),`Could not find ${r.from?`an active match from "${r.from}"`:"a nearest match!"}`),s!==void 0)return r.select?r.select(s):s},structuralSharing:r.structuralSharing})}function hf(r){return Xa({from:r.from,strict:r.strict,structuralSharing:r.structuralSharing,select:t=>r.select?r.select(t.loaderData):t.loaderData})}function mf(r){const{select:t,...a}=r;return Xa({...a,select:l=>t?t(l.loaderDeps):l.loaderDeps})}function gf(r){return Xa({from:r.from,shouldThrow:r.shouldThrow,structuralSharing:r.structuralSharing,strict:r.strict,select:t=>{const a=r.strict===!1?t.params:t._strictParams;return r.select?r.select(a):a}})}function pf(r){return Xa({from:r.from,strict:r.strict,shouldThrow:r.shouldThrow,structuralSharing:r.structuralSharing,select:t=>r.select?r.select(t.search):t.search})}function Ga(r){const t=La();return D.useCallback(a=>t.navigate({...a,from:a.from??(r==null?void 0:r.from)}),[r==null?void 0:r.from,t])}function Uv(r,t){const a=La(),l=Fv(t),{activeProps:s,inactiveProps:u,activeOptions:f,to:h,preload:m,preloadDelay:p,hashScrollIntoView:v,replace:g,startTransition:S,resetScroll:x,viewTransition:M,children:E,target:w,disabled:A,style:L,className:G,onClick:N,onFocus:H,onMouseEnter:V,onMouseLeave:U,onTouchStart:X,ignoreBlocker:z,params:O,search:Q,hash:q,state:J,mask:$,reloadDocument:ee,unsafeRelative:R,from:I,_fromLocation:W,...ie}=r,se=jp(),re=ga({select:Me=>Me.location.search,structuralSharing:!0}),be=r.from,ae=D.useMemo(()=>({...r,from:be}),[a,re,be,r._fromLocation,r.hash,r.to,r.search,r.params,r.state,r.mask,r.unsafeRelative]),ce=D.useMemo(()=>a.buildLocation({...ae}),[a,ae]),ge=ce.maskedLocation?ce.maskedLocation.publicHref:ce.publicHref,Ie=ce.maskedLocation?ce.maskedLocation.external:ce.external,$e=D.useMemo(()=>Wv(ge,Ie,a.history,A),[A,Ie,ge,a.history]),Ae=D.useMemo(()=>{if($e!=null&&$e.external)return Ts($e.href)?void 0:$e.href;if(!$v(h)&&!(typeof h!="string"||h.indexOf(":")===-1))try{return new URL(h),Ts(h)?void 0:h}catch{}},[h,$e]),Cn=ga({select:Me=>{if(Ae)return!1;if(f!=null&&f.exact){if(!nv(Me.location.pathname,ce.pathname,a.basepath))return!1}else{const Ue=Os(Me.location.pathname,a.basepath),ln=Os(ce.pathname,a.basepath);if(!(Ue.startsWith(ln)&&(Ue.length===ln.length||Ue[ln.length]==="/")))return!1}return((f==null?void 0:f.includeSearch)??!0)&&!Lt(Me.location.search,ce.search,{partial:!(f!=null&&f.exact),ignoreUndefined:!(f!=null&&f.explicitUndefined)})?!1:f!=null&&f.includeHash?se&&Me.location.hash===ce.hash:!0}}),jn=Cn?Qr(s,{})??Kv:Bd,Hn=Cn?Bd:Qr(u,{})??Bd,Tn=[G,jn.className,Hn.className].filter(Boolean).join(" "),Qa=(L||jn.style||Hn.style)&&{...L,...jn.style,...Hn.style},[de,me]=D.useState(!1),Ze=D.useRef(!1),Je=r.reloadDocument||Ae?!1:m??a.options.defaultPreload,tn=p??a.options.defaultPreloadDelay??0,ve=D.useCallback(()=>{a.preloadRoute({...ae}).catch(Me=>{console.warn(Me),console.warn(Pv)})},[a,ae]),fn=D.useCallback(Me=>{Me!=null&&Me.isIntersecting&&ve()},[ve]);zv(l,fn,Qv,{disabled:!!A||Je!=="viewport"}),D.useEffect(()=>{Ze.current||!A&&Je==="render"&&(ve(),Ze.current=!0)},[A,ve,Je]);const ya=Me=>{const Ue=Me.currentTarget.getAttribute("target"),ln=w!==void 0?w:Ue;if(!A&&!e5(Me)&&!Me.defaultPrevented&&(!ln||ln==="_self")&&Me.button===0){Me.preventDefault(),n4.flushSync(()=>{me(!0)});const Ta=a.subscribe("onResolved",()=>{Ta(),me(!1)});a.navigate({...ae,replace:g,resetScroll:x,hashScrollIntoView:v,startTransition:S,viewTransition:M,ignoreBlocker:z})}};if(Ae)return{...ie,ref:l,href:Ae,...E&&{children:E},...w&&{target:w},...A&&{disabled:A},...L&&{style:L},...G&&{className:G},...N&&{onClick:N},...H&&{onFocus:H},...V&&{onMouseEnter:V},...U&&{onMouseLeave:U},...X&&{onTouchStart:X}};const ze=Me=>{A||Je&&ve()},wn=ze,qe=Me=>{if(!(A||!Je))if(!tn)ve();else{const Ue=Me.target;if(Fl.has(Ue))return;const ln=setTimeout(()=>{Fl.delete(Ue),ve()},tn);Fl.set(Ue,ln)}},Kn=Me=>{if(A||!Je||!tn)return;const Ue=Me.target,ln=Fl.get(Ue);ln&&(clearTimeout(ln),Fl.delete(Ue))};return{...ie,...jn,...Hn,href:$e==null?void 0:$e.href,ref:l,onClick:kl([N,ya]),onFocus:kl([H,ze]),onMouseEnter:kl([V,qe]),onMouseLeave:kl([U,Kn]),onTouchStart:kl([X,wn]),disabled:!!A,target:w,...Qa&&{style:Qa},...Tn&&{className:Tn},...A&&Yv,...Cn&&Zv,...se&&de&&Xv}}const Bd={},Kv={className:"active"},Yv={role:"link","aria-disabled":!0},Zv={"data-status":"active","aria-current":"page"},Xv={"data-transitioning":"transitioning"},Fl=new WeakMap,Qv={rootMargin:"100px"},kl=r=>t=>{for(const a of r)if(a){if(t.defaultPrevented)return;a(t)}};function Wv(r,t,a,l){if(!l)return t?{href:r,external:!0}:{href:a.createHref(r)||"/",external:!1}}function $v(r){if(typeof r!="string")return!1;const t=r.charCodeAt(0);return t===47?r.charCodeAt(1)!==47:t===46}const _p=D.forwardRef((r,t)=>{const{_asChild:a,...l}=r,{type:s,...u}=Uv(l,t),f=typeof l.children=="function"?l.children({isActive:u["data-status"]==="active"}):l.children;if(!a){const{disabled:h,...m}=u;return D.createElement("a",m,f)}return D.createElement(a,u,f)});function e5(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}let n5=class extends Gp{constructor(t){super(t),this.useMatch=a=>Xa({select:a==null?void 0:a.select,from:this.id,structuralSharing:a==null?void 0:a.structuralSharing}),this.useRouteContext=a=>Xa({...a,from:this.id,select:l=>a!=null&&a.select?a.select(l.context):l.context}),this.useSearch=a=>pf({select:a==null?void 0:a.select,structuralSharing:a==null?void 0:a.structuralSharing,from:this.id}),this.useParams=a=>gf({select:a==null?void 0:a.select,structuralSharing:a==null?void 0:a.structuralSharing,from:this.id}),this.useLoaderDeps=a=>mf({...a,from:this.id}),this.useLoaderData=a=>hf({...a,from:this.id}),this.useNavigate=()=>Ga({from:this.fullPath}),this.Link=ne.forwardRef((a,l)=>y.jsx(_p,{ref:l,from:this.fullPath,...a})),this.$$typeof=Symbol.for("react.memo")}};function a5(r){return new n5(r)}class r5 extends Ov{constructor(t){super(t),this.useMatch=a=>Xa({select:a==null?void 0:a.select,from:this.id,structuralSharing:a==null?void 0:a.structuralSharing}),this.useRouteContext=a=>Xa({...a,from:this.id,select:l=>a!=null&&a.select?a.select(l.context):l.context}),this.useSearch=a=>pf({select:a==null?void 0:a.select,structuralSharing:a==null?void 0:a.structuralSharing,from:this.id}),this.useParams=a=>gf({select:a==null?void 0:a.select,structuralSharing:a==null?void 0:a.structuralSharing,from:this.id}),this.useLoaderDeps=a=>mf({...a,from:this.id}),this.useLoaderData=a=>hf({...a,from:this.id}),this.useNavigate=()=>Ga({from:this.fullPath}),this.Link=ne.forwardRef((a,l)=>y.jsx(_p,{ref:l,from:this.fullPath,...a})),this.$$typeof=Symbol.for("react.memo")}}function t5(r){return new r5(r)}function vr(r){return typeof r=="object"?new A0(r,{silent:!0}).createRoute(r):new A0(r,{silent:!0}).createRoute}class A0{constructor(t,a){this.path=t,this.createRoute=l=>{this.silent;const s=a5(l);return s.isRoot=!1,s},this.silent=a==null?void 0:a.silent}}class E0{constructor(t){this.useMatch=a=>Xa({select:a==null?void 0:a.select,from:this.options.id,structuralSharing:a==null?void 0:a.structuralSharing}),this.useRouteContext=a=>Xa({from:this.options.id,select:l=>a!=null&&a.select?a.select(l.context):l.context}),this.useSearch=a=>pf({select:a==null?void 0:a.select,structuralSharing:a==null?void 0:a.structuralSharing,from:this.options.id}),this.useParams=a=>gf({select:a==null?void 0:a.select,structuralSharing:a==null?void 0:a.structuralSharing,from:this.options.id}),this.useLoaderDeps=a=>mf({...a,from:this.options.id}),this.useLoaderData=a=>hf({...a,from:this.options.id}),this.useNavigate=()=>{const a=La();return Ga({from:a.routesById[this.options.id].fullPath})},this.options=t,this.$$typeof=Symbol.for("react.memo")}}function D0(r){return typeof r=="object"?new E0(r):t=>new E0({id:r,...t})}function i5(){const r=La(),t=D.useRef({router:r,mounted:!1}),[a,l]=D.useState(!1),{hasPendingMatches:s,isLoading:u}=ga({select:g=>({isLoading:g.isLoading,hasPendingMatches:g.matches.some(S=>S.status==="pending")}),structuralSharing:!0}),f=Ed(u),h=u||a||s,m=Ed(h),p=u||s,v=Ed(p);return r.startTransition=g=>{l(!0),D.startTransition(()=>{g(),l(!1)})},D.useEffect(()=>{const g=r.history.subscribe(r.load),S=r.buildLocation({to:r.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return yr(r.latestLocation.publicHref)!==yr(S.publicHref)&&r.commitLocation({...S,replace:!0}),()=>{g()}},[r,r.history]),ys(()=>{if(typeof window<"u"&&r.ssr||t.current.router===r&&t.current.mounted)return;t.current={router:r,mounted:!0},(async()=>{try{await r.load()}catch(S){console.error(S)}})()},[r]),ys(()=>{f&&!u&&r.emit({type:"onLoad",...Tt(r.state)})},[f,r,u]),ys(()=>{v&&!p&&r.emit({type:"onBeforeRouteMount",...Tt(r.state)})},[p,v,r]),ys(()=>{if(m&&!h){const g=Tt(r.state);r.emit({type:"onResolved",...g}),r.__store.setState(S=>({...S,status:"idle",resolvedLocation:S.location})),g.hrefChanged&&dv(r)}},[h,m,r]),null}function l5(r){const t=ga({select:a=>`not-found-${a.location.pathname}-${a.status}`});return y.jsx(df,{getResetKey:()=>t,onCatch:(a,l)=>{var s;if(ma(a))(s=r.onCatch)==null||s.call(r,a,l);else throw a},errorComponent:({error:a})=>{var l;if(ma(a))return(l=r.fallback)==null?void 0:l.call(r,a);throw a},children:r.children})}function o5(){return y.jsx("p",{children:"Not Found"})}function Bi(r){return y.jsx(y.Fragment,{children:r.children})}function Vp(r,t,a){return t.options.notFoundComponent?y.jsx(t.options.notFoundComponent,{...a}):r.options.defaultNotFoundComponent?y.jsx(r.options.defaultNotFoundComponent,{...a}):y.jsx(o5,{})}function s5(){return La().isScrollRestoring,null}const Ip=D.memo(function({matchId:t}){var E,w;const a=La(),l=ga({select:A=>{var N;const L=A.matches.findIndex(H=>H.id===t),G=A.matches[L];return br(G),{routeId:G.routeId,ssr:G.ssr,_displayPending:G._displayPending,resetKey:A.loadedAt,parentRouteId:(N=A.matches[L-1])==null?void 0:N.routeId}},structuralSharing:!0}),s=a.routesById[l.routeId],u=s.options.pendingComponent??a.options.defaultPendingComponent,f=u?y.jsx(u,{}):null,h=s.options.errorComponent??a.options.defaultErrorComponent,m=s.options.onCatch??a.options.defaultOnCatch,p=s.isRoot?s.options.notFoundComponent??((E=a.options.notFoundRoute)==null?void 0:E.options.component):s.options.notFoundComponent,v=l.ssr===!1||l.ssr==="data-only",g=(!s.isRoot||s.options.wrapInSuspense||v)&&(s.options.wrapInSuspense??u??(((w=s.options.errorComponent)==null?void 0:w.preload)||v))?D.Suspense:Bi,S=h?df:Bi,x=p?l5:Bi,M=s.isRoot?s.options.shellComponent??Bi:Bi;return y.jsxs(M,{children:[y.jsx(qs.Provider,{value:t,children:y.jsx(g,{fallback:f,children:y.jsx(S,{getResetKey:()=>l.resetKey,errorComponent:h||ff,onCatch:(A,L)=>{if(ma(A))throw A;m==null||m(A,L)},children:y.jsx(x,{fallback:A=>{if(!p||A.routeId&&A.routeId!==l.routeId||!A.routeId&&!s.isRoot)throw A;return D.createElement(p,A)},children:v||l._displayPending?y.jsx(Gv,{fallback:f,children:y.jsx(w0,{matchId:t})}):y.jsx(w0,{matchId:t})})})})}),l.parentRouteId===Na&&a.options.scrollRestoration?y.jsxs(y.Fragment,{children:[y.jsx(u5,{}),y.jsx(s5,{})]}):null]})});function u5(){const r=La(),t=D.useRef(void 0);return y.jsx("script",{suppressHydrationWarning:!0,ref:a=>{a&&(t.current===void 0||t.current.href!==r.latestLocation.href)&&(r.emit({type:"onRendered",...Tt(r.state)}),t.current=r.latestLocation)}},r.latestLocation.state.__TSR_key)}const w0=D.memo(function({matchId:t}){var m,p,v,g;const a=La(),{match:l,key:s,routeId:u}=ga({select:S=>{const x=S.matches.find(L=>L.id===t),M=x.routeId,E=a.routesById[M].options.remountDeps??a.options.defaultRemountDeps,w=E==null?void 0:E({routeId:M,loaderDeps:x.loaderDeps,params:x._strictParams,search:x._strictSearch});return{key:w?JSON.stringify(w):void 0,routeId:M,match:{id:x.id,status:x.status,error:x.error,invalid:x.invalid,_forcePending:x._forcePending,_displayPending:x._displayPending}}},structuralSharing:!0}),f=a.routesById[u],h=D.useMemo(()=>{const S=f.options.component??a.options.defaultComponent;return S?y.jsx(S,{},s):y.jsx(Jp,{})},[s,f.options.component,a.options.defaultComponent]);if(l._displayPending)throw(m=a.getMatch(l.id))==null?void 0:m._nonReactive.displayPendingPromise;if(l._forcePending)throw(p=a.getMatch(l.id))==null?void 0:p._nonReactive.minPendingPromise;if(l.status==="pending"){const S=f.options.pendingMinMs??a.options.defaultPendingMinMs;if(S){const x=a.getMatch(l.id);if(x&&!x._nonReactive.minPendingPromise){const M=Pi();x._nonReactive.minPendingPromise=M,setTimeout(()=>{M.resolve(),x._nonReactive.minPendingPromise=void 0},S)}}throw(v=a.getMatch(l.id))==null?void 0:v._nonReactive.loadPromise}if(l.status==="notFound")return br(ma(l.error)),Vp(a,f,l.error);if(l.status==="redirected")throw br(Ba(l.error)),(g=a.getMatch(l.id))==null?void 0:g._nonReactive.loadPromise;if(l.status==="error")throw l.error;return h}),Jp=D.memo(function(){const t=La(),a=D.useContext(qs),l=ga({select:p=>{var v;return(v=p.matches.find(g=>g.id===a))==null?void 0:v.routeId}}),s=t.routesById[l],u=ga({select:p=>{const g=p.matches.find(S=>S.id===a);return br(g),g.globalNotFound}}),f=ga({select:p=>{var S;const v=p.matches,g=v.findIndex(x=>x.id===a);return(S=v[g+1])==null?void 0:S.id}}),h=t.options.defaultPendingComponent?y.jsx(t.options.defaultPendingComponent,{}):null;if(u)return Vp(t,s,void 0);if(!f)return null;const m=y.jsx(Ip,{matchId:f});return l===Na?y.jsx(D.Suspense,{fallback:h,children:m}):m});function c5(){const r=La(),a=r.routesById[Na].options.pendingComponent??r.options.defaultPendingComponent,l=a?y.jsx(a,{}):null,s=typeof document<"u"&&r.ssr?Bi:D.Suspense,u=y.jsxs(s,{fallback:l,children:[y.jsx(i5,{}),y.jsx(d5,{})]});return r.options.InnerWrap?y.jsx(r.options.InnerWrap,{children:u}):u}function d5(){const r=La(),t=ga({select:s=>{var u;return(u=s.matches[0])==null?void 0:u.id}}),a=ga({select:s=>s.loadedAt}),l=t?y.jsx(Ip,{matchId:t}):null;return y.jsx(qs.Provider,{value:t,children:r.options.disableGlobalCatchBoundary?l:y.jsx(df,{getResetKey:()=>a,errorComponent:ff,onCatch:s=>{s.message||s.toString()},children:l})})}const f5=r=>new h5(r);class h5 extends Dv{constructor(t){super(t)}}typeof globalThis<"u"?(globalThis.createFileRoute=vr,globalThis.createLazyFileRoute=D0):typeof window<"u"&&(window.createFileRoute=vr,window.createLazyFileRoute=D0);function m5({router:r,children:t,...a}){Object.keys(a).length>0&&r.update({...r.options,...a,context:{...r.options.context,...a.context}});const l=Hp(),s=y.jsx(l.Provider,{value:r,children:t});return r.options.Wrap?y.jsx(r.options.Wrap,{children:s}):s}function g5({router:r,...t}){return y.jsx(m5,{router:r,...t,children:y.jsx(c5,{})})}function p5(r){return ga({select:t=>t.location})}const qp=D.createContext({});function yf(r){const t=D.useRef(null);return t.current===null&&(t.current=r()),t.current}const Up=typeof window<"u",Kp=Up?D.useLayoutEffect:D.useEffect,Us=D.createContext(null),bf=D.createContext({transformPagePoint:r=>r,isStatic:!1,reducedMotion:"never"});function N0(r,t){if(typeof r=="function")return r(t);r!=null&&(r.current=t)}function y5(...r){return t=>{let a=!1;const l=r.map(s=>{const u=N0(s,t);return!a&&typeof u=="function"&&(a=!0),u});if(a)return()=>{for(let s=0;s<l.length;s++){const u=l[s];typeof u=="function"?u():N0(r[s],null)}}}}function b5(...r){return D.useCallback(y5(...r),r)}class v5 extends D.Component{getSnapshotBeforeUpdate(t){const a=this.props.childRef.current;if(a&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=a.offsetParent,s=wg(l)&&l.offsetWidth||0,u=wg(l)&&l.offsetHeight||0,f=this.props.sizeRef.current;f.height=a.offsetHeight||0,f.width=a.offsetWidth||0,f.top=a.offsetTop,f.left=a.offsetLeft,f.right=s-f.width-f.left,f.bottom=u-f.height-f.top}return null}componentDidUpdate(){}render(){return this.props.children}}function S5({children:r,isPresent:t,anchorX:a,anchorY:l,root:s,pop:u}){var S;const f=D.useId(),h=D.useRef(null),m=D.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=D.useContext(bf),v=((S=r.props)==null?void 0:S.ref)??(r==null?void 0:r.ref),g=b5(h,v);return D.useInsertionEffect(()=>{const{width:x,height:M,top:E,left:w,right:A,bottom:L}=m.current;if(t||u===!1||!h.current||!x||!M)return;const G=a==="left"?`left: ${w}`:`right: ${A}`,N=l==="bottom"?`bottom: ${L}`:`top: ${E}`;h.current.dataset.motionPopId=f;const H=document.createElement("style");p&&(H.nonce=p);const V=s??document.head;return V.appendChild(H),H.sheet&&H.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${M}px !important;
            ${G}px !important;
            ${N}px !important;
          }
        `),()=>{V.contains(H)&&V.removeChild(H)}},[t]),y.jsx(v5,{isPresent:t,childRef:h,sizeRef:m,pop:u,children:u===!1?r:D.cloneElement(r,{ref:g})})}const M5=({children:r,initial:t,isPresent:a,onExitComplete:l,custom:s,presenceAffectsLayout:u,mode:f,anchorX:h,anchorY:m,root:p})=>{const v=yf(C5),g=D.useId();let S=!0,x=D.useMemo(()=>(S=!1,{id:g,initial:t,isPresent:a,custom:s,onExitComplete:M=>{v.set(M,!0);for(const E of v.values())if(!E)return;l&&l()},register:M=>(v.set(M,!1),()=>v.delete(M))}),[a,v,l]);return u&&S&&(x={...x}),D.useMemo(()=>{v.forEach((M,E)=>v.set(E,!1))},[a]),D.useEffect(()=>{!a&&!v.size&&l&&l()},[a]),r=y.jsx(S5,{pop:f==="popLayout",isPresent:a,anchorX:h,anchorY:m,root:p,children:r}),y.jsx(Us.Provider,{value:x,children:r})};function C5(){return new Map}function x5(r=!0){const t=D.useContext(Us);if(t===null)return[!0,null];const{isPresent:a,onExitComplete:l,register:s}=t,u=D.useId();D.useEffect(()=>{if(r)return s(u)},[r]);const f=D.useCallback(()=>r&&l&&l(u),[u,l,r]);return!a&&l?[!1,f]:[!0]}const bs=r=>r.key||"";function B0(r){const t=[];return D.Children.forEach(r,a=>{D.isValidElement(a)&&t.push(a)}),t}const Bt=({children:r,custom:t,initial:a=!0,onExitComplete:l,presenceAffectsLayout:s=!0,mode:u="sync",propagate:f=!1,anchorX:h="left",anchorY:m="top",root:p})=>{const[v,g]=x5(f),S=D.useMemo(()=>B0(r),[r]),x=f&&!v?[]:S.map(bs),M=D.useRef(!0),E=D.useRef(S),w=yf(()=>new Map),A=D.useRef(new Set),[L,G]=D.useState(S),[N,H]=D.useState(S);Kp(()=>{M.current=!1,E.current=S;for(let X=0;X<N.length;X++){const z=bs(N[X]);x.includes(z)?(w.delete(z),A.current.delete(z)):w.get(z)!==!0&&w.set(z,!1)}},[N,x.length,x.join("-")]);const V=[];if(S!==L){let X=[...S];for(let z=0;z<N.length;z++){const O=N[z],Q=bs(O);x.includes(Q)||(X.splice(z,0,O),V.push(O))}return u==="wait"&&V.length&&(X=V),H(B0(X)),G(S),null}const{forceRender:U}=D.useContext(qp);return y.jsx(y.Fragment,{children:N.map(X=>{const z=bs(X),O=f&&!v?!1:S===N||x.includes(z),Q=()=>{if(A.current.has(z))return;if(A.current.add(z),w.has(z))w.set(z,!0);else return;let q=!0;w.forEach(J=>{J||(q=!1)}),q&&(U==null||U(),H(E.current),f&&(g==null||g()),l&&l())};return y.jsx(M5,{isPresent:O,initial:!M.current||a?void 0:!1,custom:t,presenceAffectsLayout:s,mode:u,root:p,onExitComplete:O?void 0:Q,anchorX:h,anchorY:m,children:X},z)})})},vf=D.createContext({strict:!1}),R0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let L0=!1;function A5(){if(L0)return;const r={};for(const t in R0)r[t]={isEnabled:a=>R0[t].some(l=>!!a[l])};cp(r),L0=!0}function Yp(){return A5(),C4()}function qd(r){const t=Yp();for(const a in r)t[a]={...t[a],...r[a]};cp(t)}function E5({children:r,features:t,strict:a=!1}){const[,l]=D.useState(!Rd(t)),s=D.useRef(void 0);if(!Rd(t)){const{renderer:u,...f}=t;s.current=u,qd(f)}return D.useEffect(()=>{Rd(t)&&t().then(({renderer:u,...f})=>{qd(f),s.current=u,l(!0)})},[]),y.jsx(vf.Provider,{value:{renderer:s.current,strict:a},children:r})}function Rd(r){return typeof r=="function"}const D5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ks(r){return r.startsWith("while")||r.startsWith("drag")&&r!=="draggable"||r.startsWith("layout")||r.startsWith("onTap")||r.startsWith("onPan")||r.startsWith("onLayout")||D5.has(r)}let Zp=r=>!ks(r);function w5(r){typeof r=="function"&&(Zp=t=>t.startsWith("on")?!ks(t):r(t))}try{w5(require("@emotion/is-prop-valid").default)}catch{}function N5(r,t,a){const l={};for(const s in r)s==="values"&&typeof r.values=="object"||(Zp(s)||a===!0&&ks(s)||!t&&!ks(s)||r.draggable&&s.startsWith("onDrag"))&&(l[s]=r[s]);return l}const Ks=D.createContext({});function B5(r,t){if(dp(r)){const{initial:a,animate:l}=r;return{initial:a===!1||Ng(a)?a:void 0,animate:Ng(l)?l:void 0}}return r.inherit!==!1?t:{}}function R5(r){const{initial:t,animate:a}=B5(r,D.useContext(Ks));return D.useMemo(()=>({initial:t,animate:a}),[T0(t),T0(a)])}function T0(r){return Array.isArray(r)?r.join(" "):r}const Sf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Xp(r,t,a){for(const l in t)!fp(t[l])&&!x4(l,a)&&(r[l]=t[l])}function L5({transformTemplate:r},t){return D.useMemo(()=>{const a=Sf();return A4(a,t,r),Object.assign({},a.vars,a.style)},[t])}function T5(r,t){const a=r.style||{},l={};return Xp(l,a,r),Object.assign(l,L5(r,t)),l}function P5(r,t){const a={},l=T5(r,t);return r.drag&&r.dragListener!==!1&&(a.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=r.drag===!0?"none":`pan-${r.drag==="x"?"y":"x"}`),r.tabIndex===void 0&&(r.onTap||r.onTapStart||r.whileTap)&&(a.tabIndex=0),a.style=l,a}const Qp=()=>({...Sf(),attrs:{}});function O5(r,t,a,l){const s=D.useMemo(()=>{const u=Qp();return E4(u,t,D4(l),r.transformTemplate,r.style),{...u.attrs,style:{...u.style}}},[t]);if(r.style){const u={};Xp(u,r.style,r),s.style={...u,...s.style}}return s}const z5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Mf(r){return typeof r!="string"||r.includes("-")?!1:!!(z5.indexOf(r)>-1||/[A-Z]/u.test(r))}function F5(r,t,a,{latestValues:l},s,u=!1,f){const m=(f??Mf(r)?O5:P5)(t,l,s,r),p=N5(t,typeof r=="string",u),v=r!==D.Fragment?{...p,...m,ref:a}:{},{children:g}=t,S=D.useMemo(()=>fp(g)?g.get():g,[g]);return D.createElement(r,{...v,children:S})}function k5({scrapeMotionValuesFromProps:r,createRenderState:t},a,l,s){return{latestValues:G5(a,l,s,r),renderState:t()}}function G5(r,t,a,l){const s={},u=l(r,{});for(const S in u)s[S]=w4(u[S]);let{initial:f,animate:h}=r;const m=dp(r),p=N4(r);t&&p&&!m&&r.inherit!==!1&&(f===void 0&&(f=t.initial),h===void 0&&(h=t.animate));let v=a?a.initial===!1:!1;v=v||f===!1;const g=v?h:f;if(g&&typeof g!="boolean"&&!hp(g)){const S=Array.isArray(g)?g:[g];for(let x=0;x<S.length;x++){const M=B4(r,S[x]);if(M){const{transitionEnd:E,transition:w,...A}=M;for(const L in A){let G=A[L];if(Array.isArray(G)){const N=v?G.length-1:0;G=G[N]}G!==null&&(s[L]=G)}for(const L in E)s[L]=E[L]}}}return s}const Wp=r=>(t,a)=>{const l=D.useContext(Ks),s=D.useContext(Us),u=()=>k5(r,t,l,s);return a?u():yf(u)},j5=Wp({scrapeMotionValuesFromProps:R4,createRenderState:Sf}),H5=Wp({scrapeMotionValuesFromProps:L4,createRenderState:Qp}),_5=Symbol.for("motionComponentSymbol");function V5(r,t,a){const l=D.useRef(a);D.useInsertionEffect(()=>{l.current=a});const s=D.useRef(null);return D.useCallback(u=>{var h;u&&((h=r.onMount)==null||h.call(r,u)),t&&(u?t.mount(u):t.unmount());const f=l.current;if(typeof f=="function")if(u){const m=f(u);typeof m=="function"&&(s.current=m)}else s.current?(s.current(),s.current=null):f(u);else f&&(f.current=u)},[t])}const I5=D.createContext({});function J5(r){return r&&typeof r=="object"&&Object.prototype.hasOwnProperty.call(r,"current")}function q5(r,t,a,l,s,u){var G,N;const{visualElement:f}=D.useContext(Ks),h=D.useContext(vf),m=D.useContext(Us),p=D.useContext(bf),v=p.reducedMotion,g=p.skipAnimations,S=D.useRef(null),x=D.useRef(!1);l=l||h.renderer,!S.current&&l&&(S.current=l(r,{visualState:t,parent:f,props:a,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:v,skipAnimations:g,isSVG:u}),x.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const M=S.current,E=D.useContext(I5);M&&!M.projection&&s&&(M.type==="html"||M.type==="svg")&&U5(S.current,a,s,E);const w=D.useRef(!1);D.useInsertionEffect(()=>{M&&w.current&&M.update(a,m)});const A=a[T4],L=D.useRef(!!A&&!((G=window.MotionHandoffIsComplete)!=null&&G.call(window,A))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,A)));return Kp(()=>{x.current=!0,M&&(w.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),L.current&&M.animationState&&M.animationState.animateChanges())}),D.useEffect(()=>{M&&(!L.current&&M.animationState&&M.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{var H;(H=window.MotionHandoffMarkAsComplete)==null||H.call(window,A)}),L.current=!1),M.enteringChildren=void 0)}),M}function U5(r,t,a,l){const{layoutId:s,layout:u,drag:f,dragConstraints:h,layoutScroll:m,layoutRoot:p,layoutCrossfade:v}=t;r.projection=new a(r.latestValues,t["data-framer-portal-id"]?void 0:$p(r.parent)),r.projection.setOptions({layoutId:s,layout:u,alwaysMeasureLayout:!!f||h&&J5(h),visualElement:r,animationType:typeof u=="string"?u:"both",initialPromotionConfig:l,crossfade:v,layoutScroll:m,layoutRoot:p})}function $p(r){if(r)return r.options.allowProjection!==!1?r.projection:$p(r.parent)}function Ld(r,{forwardMotionProps:t=!1,type:a}={},l,s){l&&qd(l);const u=a?a==="svg":Mf(r),f=u?H5:j5;function h(p,v){let g;const S={...D.useContext(bf),...p,layoutId:K5(p)},{isStatic:x}=S,M=R5(p),E=f(p,x);if(!x&&Up){Y5();const w=Z5(S);g=w.MeasureLayout,M.visualElement=q5(r,E,S,s,w.ProjectionNode,u)}return y.jsxs(Ks.Provider,{value:M,children:[g&&M.visualElement?y.jsx(g,{visualElement:M.visualElement,...S}):null,F5(r,p,V5(E,M.visualElement,v),E,x,t,u)]})}h.displayName=`motion.${typeof r=="string"?r:`create(${r.displayName??r.name??""})`}`;const m=D.forwardRef(h);return m[_5]=r,m}function K5({layoutId:r}){const t=D.useContext(qp).id;return t&&r!==void 0?t+"-"+r:r}function Y5(r,t){D.useContext(vf).strict}function Z5(r){const t=Yp(),{drag:a,layout:l}=t;if(!a&&!l)return{};const s={...a,...l};return{MeasureLayout:a!=null&&a.isEnabled(r)||l!=null&&l.isEnabled(r)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function X5(r,t){if(typeof Proxy>"u")return Ld;const a=new Map,l=(u,f)=>Ld(u,f,r,t),s=(u,f)=>l(u,f);return new Proxy(s,{get:(u,f)=>f==="create"?l:(a.has(f)||a.set(f,Ld(f,void 0,r,t)),a.get(f))})}const qn=X5(),Q5=(r,t)=>t.isSVG??Mf(r)?new P4(t):new O4(t,{allowProjection:r!==D.Fragment});class W5 extends ki{constructor(t){super(t),t.animationState||(t.animationState=z4(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();hp(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:a}=this.node.prevProps||{};t!==a&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let $5=0;class eS extends ki{constructor(){super(...arguments),this.id=$5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:a}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===l)return;const s=this.node.animationState.setActive("exit",!t);a&&!t&&s.then(()=>{a(this.id)})}mount(){const{register:t,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const nS={animation:{Feature:W5},exit:{Feature:eS}};function e2(r){return{point:{x:r.pageX,y:r.pageY}}}function P0(r,t,a){const{props:l}=r;r.animationState&&l.whileHover&&r.animationState.setActive("whileHover",a==="Start");const s="onHover"+a,u=l[s];u&&mp.postRender(()=>u(t,e2(t)))}class aS extends ki{mount(){const{current:t}=this.node;t&&(this.unmount=F4(t,(a,l)=>(P0(this.node,l,"Start"),s=>P0(this.node,s,"End"))))}unmount(){}}class rS extends ki{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=k4(Bg(this.node.current,"focus",()=>this.onFocus()),Bg(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function O0(r,t,a){const{props:l}=r;if(r.current instanceof HTMLButtonElement&&r.current.disabled)return;r.animationState&&l.whileTap&&r.animationState.setActive("whileTap",a==="Start");const s="onTap"+(a==="End"?"":a),u=l[s];u&&mp.postRender(()=>u(t,e2(t)))}class tS extends ki{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:a,propagate:l}=this.node.props;this.unmount=G4(t,(s,u)=>(O0(this.node,u,"Start"),(f,{success:h})=>O0(this.node,f,h?"End":"Cancel")),{useGlobalTarget:a,stopPropagation:(l==null?void 0:l.tap)===!1})}unmount(){}}const Ud=new WeakMap,Td=new WeakMap,iS=r=>{const t=Ud.get(r.target);t&&t(r)},lS=r=>{r.forEach(iS)};function oS({root:r,...t}){const a=r||document;Td.has(a)||Td.set(a,{});const l=Td.get(a),s=JSON.stringify(t);return l[s]||(l[s]=new IntersectionObserver(lS,{root:r,...t})),l[s]}function sS(r,t,a){const l=oS(t);return Ud.set(r,a),l.observe(r),()=>{Ud.delete(r),l.unobserve(r)}}const uS={some:0,all:1};class cS extends ki{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:a,margin:l,amount:s="some",once:u}=t,f={root:a?a.current:void 0,rootMargin:l,threshold:typeof s=="number"?s:uS[s]},h=m=>{const{isIntersecting:p}=m;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),S=p?v:g;S&&S(m)};return sS(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:a}=this.node;["amount","margin","root"].some(dS(t,a))&&this.startObserver()}unmount(){}}function dS({viewport:r={}},{viewport:t={}}={}){return a=>r[a]!==t[a]}const fS={inView:{Feature:cS},tap:{Feature:tS},focus:{Feature:rS},hover:{Feature:aS}},hS={renderer:Q5,...nS,...fS};var mS=function(r,t){for(var a={};r.length;){var l=r[0],s=l.code,u=l.message,f=l.path.join(".");if(!a[f])if("unionErrors"in l){var h=l.unionErrors[0].errors[0];a[f]={message:h.message,type:h.code}}else a[f]={message:u,type:s};if("unionErrors"in l&&l.unionErrors.forEach(function(v){return v.errors.forEach(function(g){return r.push(g)})}),t){var m=a[f].types,p=m&&m[l.code];a[f]=v4(f,t,a,s,p?[].concat(p,l.message):l.message)}r.shift()}return a},gS=function(r,t,a){return a===void 0&&(a={}),function(l,s,u){try{return Promise.resolve((function(f,h){try{var m=Promise.resolve(r[a.mode==="sync"?"parse":"parseAsync"](l,t)).then(function(p){return u.shouldUseNativeValidation&&y4({},u),{errors:{},values:a.raw?l:p}})}catch(p){return h(p)}return m&&m.then?m.then(void 0,h):m})(0,function(f){if((function(h){return Array.isArray(h==null?void 0:h.errors)})(f))return{values:{},errors:b4(mS(f.errors,!u.shouldUseNativeValidation&&u.criteriaMode==="all"),u)};throw f}))}catch(f){return Promise.reject(f)}}};const n2=6048e5,pS=864e5,yS=6e4,bS=36e5,vS=1e3,z0=Symbol.for("constructDateFrom");function Ln(r,t){return typeof r=="function"?r(t):r&&typeof r=="object"&&z0 in r?r[z0](t):r instanceof Date?new r.constructor(t):new Date(t)}function yn(r,t){return Ln(t||r,r)}function a2(r,t,a){const l=yn(r,a==null?void 0:a.in);return isNaN(t)?Ln((a==null?void 0:a.in)||r,NaN):(t&&l.setDate(l.getDate()+t),l)}let SS={};function Gi(){return SS}function nt(r,t){var h,m,p,v;const a=Gi(),l=(t==null?void 0:t.weekStartsOn)??((m=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??a.weekStartsOn??((v=(p=a.locale)==null?void 0:p.options)==null?void 0:v.weekStartsOn)??0,s=yn(r,t==null?void 0:t.in),u=s.getDay(),f=(u<l?7:0)+u-l;return s.setDate(s.getDate()-f),s.setHours(0,0,0,0),s}function zi(r,t){return nt(r,{...t,weekStartsOn:1})}function r2(r,t){const a=yn(r,t==null?void 0:t.in),l=a.getFullYear(),s=Ln(a,0);s.setFullYear(l+1,0,4),s.setHours(0,0,0,0);const u=zi(s),f=Ln(a,0);f.setFullYear(l,0,4),f.setHours(0,0,0,0);const h=zi(f);return a.getTime()>=u.getTime()?l+1:a.getTime()>=h.getTime()?l:l-1}function Gs(r){const t=yn(r),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return a.setUTCFullYear(t.getFullYear()),+r-+a}function MS(r,...t){const a=Ln.bind(null,t.find(l=>typeof l=="object"));return t.map(a)}function Kd(r,t){const a=yn(r,t==null?void 0:t.in);return a.setHours(0,0,0,0),a}function CS(r,t,a){const[l,s]=MS(a==null?void 0:a.in,r,t),u=Kd(l),f=Kd(s),h=+u-Gs(u),m=+f-Gs(f);return Math.round((h-m)/pS)}function xS(r,t){const a=r2(r,t),l=Ln(r,0);return l.setFullYear(a,0,4),l.setHours(0,0,0,0),zi(l)}function AS(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function t2(r){return!(!AS(r)&&typeof r!="number"||isNaN(+yn(r)))}function ES(r,t){const a=yn(r,t==null?void 0:t.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}const DS={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},wS=(r,t,a)=>{let l;const s=DS[r];return typeof s=="string"?l=s:t===1?l=s.one:l=s.other.replace("{{count}}",t.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+l:l+" ago":l};function Pd(r){return(t={})=>{const a=t.width?String(t.width):r.defaultWidth;return r.formats[a]||r.formats[r.defaultWidth]}}const NS={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},BS={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},RS={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},LS={date:Pd({formats:NS,defaultWidth:"full"}),time:Pd({formats:BS,defaultWidth:"full"}),dateTime:Pd({formats:RS,defaultWidth:"full"})},TS={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},PS=(r,t,a,l)=>TS[r];function Gl(r){return(t,a)=>{const l=a!=null&&a.context?String(a.context):"standalone";let s;if(l==="formatting"&&r.formattingValues){const f=r.defaultFormattingWidth||r.defaultWidth,h=a!=null&&a.width?String(a.width):f;s=r.formattingValues[h]||r.formattingValues[f]}else{const f=r.defaultWidth,h=a!=null&&a.width?String(a.width):r.defaultWidth;s=r.values[h]||r.values[f]}const u=r.argumentCallback?r.argumentCallback(t):t;return s[u]}}const OS={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},zS={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},FS={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},kS={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},GS={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},jS={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},HS=(r,t)=>{const a=Number(r),l=a%100;if(l>20||l<10)switch(l%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},_S={ordinalNumber:HS,era:Gl({values:OS,defaultWidth:"wide"}),quarter:Gl({values:zS,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Gl({values:FS,defaultWidth:"wide"}),day:Gl({values:kS,defaultWidth:"wide"}),dayPeriod:Gl({values:GS,defaultWidth:"wide",formattingValues:jS,defaultFormattingWidth:"wide"})};function jl(r){return(t,a={})=>{const l=a.width,s=l&&r.matchPatterns[l]||r.matchPatterns[r.defaultMatchWidth],u=t.match(s);if(!u)return null;const f=u[0],h=l&&r.parsePatterns[l]||r.parsePatterns[r.defaultParseWidth],m=Array.isArray(h)?IS(h,g=>g.test(f)):VS(h,g=>g.test(f));let p;p=r.valueCallback?r.valueCallback(m):m,p=a.valueCallback?a.valueCallback(p):p;const v=t.slice(f.length);return{value:p,rest:v}}}function VS(r,t){for(const a in r)if(Object.prototype.hasOwnProperty.call(r,a)&&t(r[a]))return a}function IS(r,t){for(let a=0;a<r.length;a++)if(t(r[a]))return a}function JS(r){return(t,a={})=>{const l=t.match(r.matchPattern);if(!l)return null;const s=l[0],u=t.match(r.parsePattern);if(!u)return null;let f=r.valueCallback?r.valueCallback(u[0]):u[0];f=a.valueCallback?a.valueCallback(f):f;const h=t.slice(s.length);return{value:f,rest:h}}}const qS=/^(\d+)(th|st|nd|rd)?/i,US=/\d+/i,KS={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},YS={any:[/^b/i,/^(a|c)/i]},ZS={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},XS={any:[/1/i,/2/i,/3/i,/4/i]},QS={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},WS={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},$S={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},e6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},n6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},a6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},r6={ordinalNumber:JS({matchPattern:qS,parsePattern:US,valueCallback:r=>parseInt(r,10)}),era:jl({matchPatterns:KS,defaultMatchWidth:"wide",parsePatterns:YS,defaultParseWidth:"any"}),quarter:jl({matchPatterns:ZS,defaultMatchWidth:"wide",parsePatterns:XS,defaultParseWidth:"any",valueCallback:r=>r+1}),month:jl({matchPatterns:QS,defaultMatchWidth:"wide",parsePatterns:WS,defaultParseWidth:"any"}),day:jl({matchPatterns:$S,defaultMatchWidth:"wide",parsePatterns:e6,defaultParseWidth:"any"}),dayPeriod:jl({matchPatterns:n6,defaultMatchWidth:"any",parsePatterns:a6,defaultParseWidth:"any"})},i2={code:"en-US",formatDistance:wS,formatLong:LS,formatRelative:PS,localize:_S,match:r6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function t6(r,t){const a=yn(r,t==null?void 0:t.in);return CS(a,ES(a))+1}function l2(r,t){const a=yn(r,t==null?void 0:t.in),l=+zi(a)-+xS(a);return Math.round(l/n2)+1}function Cf(r,t){var v,g,S,x;const a=yn(r,t==null?void 0:t.in),l=a.getFullYear(),s=Gi(),u=(t==null?void 0:t.firstWeekContainsDate)??((g=(v=t==null?void 0:t.locale)==null?void 0:v.options)==null?void 0:g.firstWeekContainsDate)??s.firstWeekContainsDate??((x=(S=s.locale)==null?void 0:S.options)==null?void 0:x.firstWeekContainsDate)??1,f=Ln((t==null?void 0:t.in)||r,0);f.setFullYear(l+1,0,u),f.setHours(0,0,0,0);const h=nt(f,t),m=Ln((t==null?void 0:t.in)||r,0);m.setFullYear(l,0,u),m.setHours(0,0,0,0);const p=nt(m,t);return+a>=+h?l+1:+a>=+p?l:l-1}function i6(r,t){var h,m,p,v;const a=Gi(),l=(t==null?void 0:t.firstWeekContainsDate)??((m=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??a.firstWeekContainsDate??((v=(p=a.locale)==null?void 0:p.options)==null?void 0:v.firstWeekContainsDate)??1,s=Cf(r,t),u=Ln((t==null?void 0:t.in)||r,0);return u.setFullYear(s,0,l),u.setHours(0,0,0,0),nt(u,t)}function o2(r,t){const a=yn(r,t==null?void 0:t.in),l=+nt(a,t)-+i6(a,t);return Math.round(l/n2)+1}function Ge(r,t){const a=r<0?"-":"",l=Math.abs(r).toString().padStart(t,"0");return a+l}const Kr={y(r,t){const a=r.getFullYear(),l=a>0?a:1-a;return Ge(t==="yy"?l%100:l,t.length)},M(r,t){const a=r.getMonth();return t==="M"?String(a+1):Ge(a+1,2)},d(r,t){return Ge(r.getDate(),t.length)},a(r,t){const a=r.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(r,t){return Ge(r.getHours()%12||12,t.length)},H(r,t){return Ge(r.getHours(),t.length)},m(r,t){return Ge(r.getMinutes(),t.length)},s(r,t){return Ge(r.getSeconds(),t.length)},S(r,t){const a=t.length,l=r.getMilliseconds(),s=Math.trunc(l*Math.pow(10,a-3));return Ge(s,t.length)}},wi={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},F0={G:function(r,t,a){const l=r.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(l,{width:"abbreviated"});case"GGGGG":return a.era(l,{width:"narrow"});case"GGGG":default:return a.era(l,{width:"wide"})}},y:function(r,t,a){if(t==="yo"){const l=r.getFullYear(),s=l>0?l:1-l;return a.ordinalNumber(s,{unit:"year"})}return Kr.y(r,t)},Y:function(r,t,a,l){const s=Cf(r,l),u=s>0?s:1-s;if(t==="YY"){const f=u%100;return Ge(f,2)}return t==="Yo"?a.ordinalNumber(u,{unit:"year"}):Ge(u,t.length)},R:function(r,t){const a=r2(r);return Ge(a,t.length)},u:function(r,t){const a=r.getFullYear();return Ge(a,t.length)},Q:function(r,t,a){const l=Math.ceil((r.getMonth()+1)/3);switch(t){case"Q":return String(l);case"QQ":return Ge(l,2);case"Qo":return a.ordinalNumber(l,{unit:"quarter"});case"QQQ":return a.quarter(l,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(l,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(l,{width:"wide",context:"formatting"})}},q:function(r,t,a){const l=Math.ceil((r.getMonth()+1)/3);switch(t){case"q":return String(l);case"qq":return Ge(l,2);case"qo":return a.ordinalNumber(l,{unit:"quarter"});case"qqq":return a.quarter(l,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(l,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(l,{width:"wide",context:"standalone"})}},M:function(r,t,a){const l=r.getMonth();switch(t){case"M":case"MM":return Kr.M(r,t);case"Mo":return a.ordinalNumber(l+1,{unit:"month"});case"MMM":return a.month(l,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(l,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(l,{width:"wide",context:"formatting"})}},L:function(r,t,a){const l=r.getMonth();switch(t){case"L":return String(l+1);case"LL":return Ge(l+1,2);case"Lo":return a.ordinalNumber(l+1,{unit:"month"});case"LLL":return a.month(l,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(l,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(l,{width:"wide",context:"standalone"})}},w:function(r,t,a,l){const s=o2(r,l);return t==="wo"?a.ordinalNumber(s,{unit:"week"}):Ge(s,t.length)},I:function(r,t,a){const l=l2(r);return t==="Io"?a.ordinalNumber(l,{unit:"week"}):Ge(l,t.length)},d:function(r,t,a){return t==="do"?a.ordinalNumber(r.getDate(),{unit:"date"}):Kr.d(r,t)},D:function(r,t,a){const l=t6(r);return t==="Do"?a.ordinalNumber(l,{unit:"dayOfYear"}):Ge(l,t.length)},E:function(r,t,a){const l=r.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(l,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(l,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(l,{width:"short",context:"formatting"});case"EEEE":default:return a.day(l,{width:"wide",context:"formatting"})}},e:function(r,t,a,l){const s=r.getDay(),u=(s-l.weekStartsOn+8)%7||7;switch(t){case"e":return String(u);case"ee":return Ge(u,2);case"eo":return a.ordinalNumber(u,{unit:"day"});case"eee":return a.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(s,{width:"short",context:"formatting"});case"eeee":default:return a.day(s,{width:"wide",context:"formatting"})}},c:function(r,t,a,l){const s=r.getDay(),u=(s-l.weekStartsOn+8)%7||7;switch(t){case"c":return String(u);case"cc":return Ge(u,t.length);case"co":return a.ordinalNumber(u,{unit:"day"});case"ccc":return a.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(s,{width:"narrow",context:"standalone"});case"cccccc":return a.day(s,{width:"short",context:"standalone"});case"cccc":default:return a.day(s,{width:"wide",context:"standalone"})}},i:function(r,t,a){const l=r.getDay(),s=l===0?7:l;switch(t){case"i":return String(s);case"ii":return Ge(s,t.length);case"io":return a.ordinalNumber(s,{unit:"day"});case"iii":return a.day(l,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(l,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(l,{width:"short",context:"formatting"});case"iiii":default:return a.day(l,{width:"wide",context:"formatting"})}},a:function(r,t,a){const s=r.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,t,a){const l=r.getHours();let s;switch(l===12?s=wi.noon:l===0?s=wi.midnight:s=l/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,t,a){const l=r.getHours();let s;switch(l>=17?s=wi.evening:l>=12?s=wi.afternoon:l>=4?s=wi.morning:s=wi.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,t,a){if(t==="ho"){let l=r.getHours()%12;return l===0&&(l=12),a.ordinalNumber(l,{unit:"hour"})}return Kr.h(r,t)},H:function(r,t,a){return t==="Ho"?a.ordinalNumber(r.getHours(),{unit:"hour"}):Kr.H(r,t)},K:function(r,t,a){const l=r.getHours()%12;return t==="Ko"?a.ordinalNumber(l,{unit:"hour"}):Ge(l,t.length)},k:function(r,t,a){let l=r.getHours();return l===0&&(l=24),t==="ko"?a.ordinalNumber(l,{unit:"hour"}):Ge(l,t.length)},m:function(r,t,a){return t==="mo"?a.ordinalNumber(r.getMinutes(),{unit:"minute"}):Kr.m(r,t)},s:function(r,t,a){return t==="so"?a.ordinalNumber(r.getSeconds(),{unit:"second"}):Kr.s(r,t)},S:function(r,t){return Kr.S(r,t)},X:function(r,t,a){const l=r.getTimezoneOffset();if(l===0)return"Z";switch(t){case"X":return G0(l);case"XXXX":case"XX":return Et(l);case"XXXXX":case"XXX":default:return Et(l,":")}},x:function(r,t,a){const l=r.getTimezoneOffset();switch(t){case"x":return G0(l);case"xxxx":case"xx":return Et(l);case"xxxxx":case"xxx":default:return Et(l,":")}},O:function(r,t,a){const l=r.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+k0(l,":");case"OOOO":default:return"GMT"+Et(l,":")}},z:function(r,t,a){const l=r.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+k0(l,":");case"zzzz":default:return"GMT"+Et(l,":")}},t:function(r,t,a){const l=Math.trunc(+r/1e3);return Ge(l,t.length)},T:function(r,t,a){return Ge(+r,t.length)}};function k0(r,t=""){const a=r>0?"-":"+",l=Math.abs(r),s=Math.trunc(l/60),u=l%60;return u===0?a+String(s):a+String(s)+t+Ge(u,2)}function G0(r,t){return r%60===0?(r>0?"-":"+")+Ge(Math.abs(r)/60,2):Et(r,t)}function Et(r,t=""){const a=r>0?"-":"+",l=Math.abs(r),s=Ge(Math.trunc(l/60),2),u=Ge(l%60,2);return a+s+t+u}const j0=(r,t)=>{switch(r){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},s2=(r,t)=>{switch(r){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},l6=(r,t)=>{const a=r.match(/(P+)(p+)?/)||[],l=a[1],s=a[2];if(!s)return j0(r,t);let u;switch(l){case"P":u=t.dateTime({width:"short"});break;case"PP":u=t.dateTime({width:"medium"});break;case"PPP":u=t.dateTime({width:"long"});break;case"PPPP":default:u=t.dateTime({width:"full"});break}return u.replace("{{date}}",j0(l,t)).replace("{{time}}",s2(s,t))},Yd={p:s2,P:l6},o6=/^D+$/,s6=/^Y+$/,u6=["D","DD","YY","YYYY"];function u2(r){return o6.test(r)}function c2(r){return s6.test(r)}function Zd(r,t,a){const l=c6(r,t,a);if(console.warn(l),u6.includes(r))throw new RangeError(l)}function c6(r,t,a){const l=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${t}\`) for formatting ${l} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const d6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,f6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,h6=/^'([^]*?)'?$/,m6=/''/g,g6=/[a-zA-Z]/;function p6(r,t,a){var v,g,S,x;const l=Gi(),s=l.locale??i2,u=l.firstWeekContainsDate??((g=(v=l.locale)==null?void 0:v.options)==null?void 0:g.firstWeekContainsDate)??1,f=l.weekStartsOn??((x=(S=l.locale)==null?void 0:S.options)==null?void 0:x.weekStartsOn)??0,h=yn(r,a==null?void 0:a.in);if(!t2(h))throw new RangeError("Invalid time value");let m=t.match(f6).map(M=>{const E=M[0];if(E==="p"||E==="P"){const w=Yd[E];return w(M,s.formatLong)}return M}).join("").match(d6).map(M=>{if(M==="''")return{isToken:!1,value:"'"};const E=M[0];if(E==="'")return{isToken:!1,value:y6(M)};if(F0[E])return{isToken:!0,value:M};if(E.match(g6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:M}});s.localize.preprocessor&&(m=s.localize.preprocessor(h,m));const p={firstWeekContainsDate:u,weekStartsOn:f,locale:s};return m.map(M=>{if(!M.isToken)return M.value;const E=M.value;(c2(E)||u2(E))&&Zd(E,t,String(r));const w=F0[E[0]];return w(h,E,s.localize,p)}).join("")}function y6(r){const t=r.match(h6);return t?t[1].replace(m6,"'"):r}function b6(){return Object.assign({},Gi())}function v6(r,t){const a=yn(r,t==null?void 0:t.in).getDay();return a===0?7:a}function S6(r,t){return+yn(r)>+yn(t)}function M6(r,t){const a=C6(t)?new t(0):Ln(t,0);return a.setFullYear(r.getFullYear(),r.getMonth(),r.getDate()),a.setHours(r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()),a}function C6(r){var t;return typeof r=="function"&&((t=r.prototype)==null?void 0:t.constructor)===r}const x6=10;class d2{constructor(){te(this,"subPriority",0)}validate(t,a){return!0}}class A6 extends d2{constructor(t,a,l,s,u){super(),this.value=t,this.validateValue=a,this.setValue=l,this.priority=s,u&&(this.subPriority=u)}validate(t,a){return this.validateValue(t,this.value,a)}set(t,a,l){return this.setValue(t,a,this.value,l)}}class E6 extends d2{constructor(a,l){super();te(this,"priority",x6);te(this,"subPriority",-1);this.context=a||(s=>Ln(l,s))}set(a,l){return l.timestampIsSet?a:Ln(a,M6(a,this.context))}}class Oe{run(t,a,l,s){const u=this.parse(t,a,l,s);return u?{setter:new A6(u.value,this.validate,this.set,this.priority,this.subPriority),rest:u.rest}:null}validate(t,a,l){return!0}}class D6 extends Oe{constructor(){super(...arguments);te(this,"priority",140);te(this,"incompatibleTokens",["R","u","t","T"])}parse(a,l,s){switch(l){case"G":case"GG":case"GGG":return s.era(a,{width:"abbreviated"})||s.era(a,{width:"narrow"});case"GGGGG":return s.era(a,{width:"narrow"});case"GGGG":default:return s.era(a,{width:"wide"})||s.era(a,{width:"abbreviated"})||s.era(a,{width:"narrow"})}}set(a,l,s){return l.era=s,a.setFullYear(s,0,1),a.setHours(0,0,0,0),a}}const gn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ka={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function pn(r,t){return r&&{value:t(r.value),rest:r.rest}}function rn(r,t){const a=t.match(r);return a?{value:parseInt(a[0],10),rest:t.slice(a[0].length)}:null}function Ya(r,t){const a=t.match(r);if(!a)return null;if(a[0]==="Z")return{value:0,rest:t.slice(1)};const l=a[1]==="+"?1:-1,s=a[2]?parseInt(a[2],10):0,u=a[3]?parseInt(a[3],10):0,f=a[5]?parseInt(a[5],10):0;return{value:l*(s*bS+u*yS+f*vS),rest:t.slice(a[0].length)}}function f2(r){return rn(gn.anyDigitsSigned,r)}function cn(r,t){switch(r){case 1:return rn(gn.singleDigit,t);case 2:return rn(gn.twoDigits,t);case 3:return rn(gn.threeDigits,t);case 4:return rn(gn.fourDigits,t);default:return rn(new RegExp("^\\d{1,"+r+"}"),t)}}function js(r,t){switch(r){case 1:return rn(gn.singleDigitSigned,t);case 2:return rn(gn.twoDigitsSigned,t);case 3:return rn(gn.threeDigitsSigned,t);case 4:return rn(gn.fourDigitsSigned,t);default:return rn(new RegExp("^-?\\d{1,"+r+"}"),t)}}function xf(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function h2(r,t){const a=t>0,l=a?t:1-t;let s;if(l<=50)s=r||100;else{const u=l+50,f=Math.trunc(u/100)*100,h=r>=u%100;s=r+f-(h?100:0)}return a?s:1-s}function m2(r){return r%400===0||r%4===0&&r%100!==0}class w6 extends Oe{constructor(){super(...arguments);te(this,"priority",130);te(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(a,l,s){const u=f=>({year:f,isTwoDigitYear:l==="yy"});switch(l){case"y":return pn(cn(4,a),u);case"yo":return pn(s.ordinalNumber(a,{unit:"year"}),u);default:return pn(cn(l.length,a),u)}}validate(a,l){return l.isTwoDigitYear||l.year>0}set(a,l,s){const u=a.getFullYear();if(s.isTwoDigitYear){const h=h2(s.year,u);return a.setFullYear(h,0,1),a.setHours(0,0,0,0),a}const f=!("era"in l)||l.era===1?s.year:1-s.year;return a.setFullYear(f,0,1),a.setHours(0,0,0,0),a}}class N6 extends Oe{constructor(){super(...arguments);te(this,"priority",130);te(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(a,l,s){const u=f=>({year:f,isTwoDigitYear:l==="YY"});switch(l){case"Y":return pn(cn(4,a),u);case"Yo":return pn(s.ordinalNumber(a,{unit:"year"}),u);default:return pn(cn(l.length,a),u)}}validate(a,l){return l.isTwoDigitYear||l.year>0}set(a,l,s,u){const f=Cf(a,u);if(s.isTwoDigitYear){const m=h2(s.year,f);return a.setFullYear(m,0,u.firstWeekContainsDate),a.setHours(0,0,0,0),nt(a,u)}const h=!("era"in l)||l.era===1?s.year:1-s.year;return a.setFullYear(h,0,u.firstWeekContainsDate),a.setHours(0,0,0,0),nt(a,u)}}class B6 extends Oe{constructor(){super(...arguments);te(this,"priority",130);te(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(a,l){return js(l==="R"?4:l.length,a)}set(a,l,s){const u=Ln(a,0);return u.setFullYear(s,0,4),u.setHours(0,0,0,0),zi(u)}}class R6 extends Oe{constructor(){super(...arguments);te(this,"priority",130);te(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(a,l){return js(l==="u"?4:l.length,a)}set(a,l,s){return a.setFullYear(s,0,1),a.setHours(0,0,0,0),a}}class L6 extends Oe{constructor(){super(...arguments);te(this,"priority",120);te(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(a,l,s){switch(l){case"Q":case"QQ":return cn(l.length,a);case"Qo":return s.ordinalNumber(a,{unit:"quarter"});case"QQQ":return s.quarter(a,{width:"abbreviated",context:"formatting"})||s.quarter(a,{width:"narrow",context:"formatting"});case"QQQQQ":return s.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(a,{width:"wide",context:"formatting"})||s.quarter(a,{width:"abbreviated",context:"formatting"})||s.quarter(a,{width:"narrow",context:"formatting"})}}validate(a,l){return l>=1&&l<=4}set(a,l,s){return a.setMonth((s-1)*3,1),a.setHours(0,0,0,0),a}}class T6 extends Oe{constructor(){super(...arguments);te(this,"priority",120);te(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(a,l,s){switch(l){case"q":case"qq":return cn(l.length,a);case"qo":return s.ordinalNumber(a,{unit:"quarter"});case"qqq":return s.quarter(a,{width:"abbreviated",context:"standalone"})||s.quarter(a,{width:"narrow",context:"standalone"});case"qqqqq":return s.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(a,{width:"wide",context:"standalone"})||s.quarter(a,{width:"abbreviated",context:"standalone"})||s.quarter(a,{width:"narrow",context:"standalone"})}}validate(a,l){return l>=1&&l<=4}set(a,l,s){return a.setMonth((s-1)*3,1),a.setHours(0,0,0,0),a}}class P6 extends Oe{constructor(){super(...arguments);te(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);te(this,"priority",110)}parse(a,l,s){const u=f=>f-1;switch(l){case"M":return pn(rn(gn.month,a),u);case"MM":return pn(cn(2,a),u);case"Mo":return pn(s.ordinalNumber(a,{unit:"month"}),u);case"MMM":return s.month(a,{width:"abbreviated",context:"formatting"})||s.month(a,{width:"narrow",context:"formatting"});case"MMMMM":return s.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(a,{width:"wide",context:"formatting"})||s.month(a,{width:"abbreviated",context:"formatting"})||s.month(a,{width:"narrow",context:"formatting"})}}validate(a,l){return l>=0&&l<=11}set(a,l,s){return a.setMonth(s,1),a.setHours(0,0,0,0),a}}class O6 extends Oe{constructor(){super(...arguments);te(this,"priority",110);te(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(a,l,s){const u=f=>f-1;switch(l){case"L":return pn(rn(gn.month,a),u);case"LL":return pn(cn(2,a),u);case"Lo":return pn(s.ordinalNumber(a,{unit:"month"}),u);case"LLL":return s.month(a,{width:"abbreviated",context:"standalone"})||s.month(a,{width:"narrow",context:"standalone"});case"LLLLL":return s.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(a,{width:"wide",context:"standalone"})||s.month(a,{width:"abbreviated",context:"standalone"})||s.month(a,{width:"narrow",context:"standalone"})}}validate(a,l){return l>=0&&l<=11}set(a,l,s){return a.setMonth(s,1),a.setHours(0,0,0,0),a}}function z6(r,t,a){const l=yn(r,a==null?void 0:a.in),s=o2(l,a)-t;return l.setDate(l.getDate()-s*7),yn(l,a==null?void 0:a.in)}class F6 extends Oe{constructor(){super(...arguments);te(this,"priority",100);te(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(a,l,s){switch(l){case"w":return rn(gn.week,a);case"wo":return s.ordinalNumber(a,{unit:"week"});default:return cn(l.length,a)}}validate(a,l){return l>=1&&l<=53}set(a,l,s,u){return nt(z6(a,s,u),u)}}function k6(r,t,a){const l=yn(r,a==null?void 0:a.in),s=l2(l,a)-t;return l.setDate(l.getDate()-s*7),l}class G6 extends Oe{constructor(){super(...arguments);te(this,"priority",100);te(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(a,l,s){switch(l){case"I":return rn(gn.week,a);case"Io":return s.ordinalNumber(a,{unit:"week"});default:return cn(l.length,a)}}validate(a,l){return l>=1&&l<=53}set(a,l,s){return zi(k6(a,s))}}const j6=[31,28,31,30,31,30,31,31,30,31,30,31],H6=[31,29,31,30,31,30,31,31,30,31,30,31];class _6 extends Oe{constructor(){super(...arguments);te(this,"priority",90);te(this,"subPriority",1);te(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(a,l,s){switch(l){case"d":return rn(gn.date,a);case"do":return s.ordinalNumber(a,{unit:"date"});default:return cn(l.length,a)}}validate(a,l){const s=a.getFullYear(),u=m2(s),f=a.getMonth();return u?l>=1&&l<=H6[f]:l>=1&&l<=j6[f]}set(a,l,s){return a.setDate(s),a.setHours(0,0,0,0),a}}class V6 extends Oe{constructor(){super(...arguments);te(this,"priority",90);te(this,"subpriority",1);te(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(a,l,s){switch(l){case"D":case"DD":return rn(gn.dayOfYear,a);case"Do":return s.ordinalNumber(a,{unit:"date"});default:return cn(l.length,a)}}validate(a,l){const s=a.getFullYear();return m2(s)?l>=1&&l<=366:l>=1&&l<=365}set(a,l,s){return a.setMonth(0,s),a.setHours(0,0,0,0),a}}function Af(r,t,a){var g,S,x,M;const l=Gi(),s=(a==null?void 0:a.weekStartsOn)??((S=(g=a==null?void 0:a.locale)==null?void 0:g.options)==null?void 0:S.weekStartsOn)??l.weekStartsOn??((M=(x=l.locale)==null?void 0:x.options)==null?void 0:M.weekStartsOn)??0,u=yn(r,a==null?void 0:a.in),f=u.getDay(),m=(t%7+7)%7,p=7-s,v=t<0||t>6?t-(f+p)%7:(m+p)%7-(f+p)%7;return a2(u,v,a)}class I6 extends Oe{constructor(){super(...arguments);te(this,"priority",90);te(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(a,l,s){switch(l){case"E":case"EE":case"EEE":return s.day(a,{width:"abbreviated",context:"formatting"})||s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"});case"EEEEE":return s.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"});case"EEEE":default:return s.day(a,{width:"wide",context:"formatting"})||s.day(a,{width:"abbreviated",context:"formatting"})||s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"})}}validate(a,l){return l>=0&&l<=6}set(a,l,s,u){return a=Af(a,s,u),a.setHours(0,0,0,0),a}}class J6 extends Oe{constructor(){super(...arguments);te(this,"priority",90);te(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(a,l,s,u){const f=h=>{const m=Math.floor((h-1)/7)*7;return(h+u.weekStartsOn+6)%7+m};switch(l){case"e":case"ee":return pn(cn(l.length,a),f);case"eo":return pn(s.ordinalNumber(a,{unit:"day"}),f);case"eee":return s.day(a,{width:"abbreviated",context:"formatting"})||s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"});case"eeeee":return s.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"});case"eeee":default:return s.day(a,{width:"wide",context:"formatting"})||s.day(a,{width:"abbreviated",context:"formatting"})||s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"})}}validate(a,l){return l>=0&&l<=6}set(a,l,s,u){return a=Af(a,s,u),a.setHours(0,0,0,0),a}}class q6 extends Oe{constructor(){super(...arguments);te(this,"priority",90);te(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(a,l,s,u){const f=h=>{const m=Math.floor((h-1)/7)*7;return(h+u.weekStartsOn+6)%7+m};switch(l){case"c":case"cc":return pn(cn(l.length,a),f);case"co":return pn(s.ordinalNumber(a,{unit:"day"}),f);case"ccc":return s.day(a,{width:"abbreviated",context:"standalone"})||s.day(a,{width:"short",context:"standalone"})||s.day(a,{width:"narrow",context:"standalone"});case"ccccc":return s.day(a,{width:"narrow",context:"standalone"});case"cccccc":return s.day(a,{width:"short",context:"standalone"})||s.day(a,{width:"narrow",context:"standalone"});case"cccc":default:return s.day(a,{width:"wide",context:"standalone"})||s.day(a,{width:"abbreviated",context:"standalone"})||s.day(a,{width:"short",context:"standalone"})||s.day(a,{width:"narrow",context:"standalone"})}}validate(a,l){return l>=0&&l<=6}set(a,l,s,u){return a=Af(a,s,u),a.setHours(0,0,0,0),a}}function U6(r,t,a){const l=yn(r,a==null?void 0:a.in),s=v6(l,a),u=t-s;return a2(l,u,a)}class K6 extends Oe{constructor(){super(...arguments);te(this,"priority",90);te(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(a,l,s){const u=f=>f===0?7:f;switch(l){case"i":case"ii":return cn(l.length,a);case"io":return s.ordinalNumber(a,{unit:"day"});case"iii":return pn(s.day(a,{width:"abbreviated",context:"formatting"})||s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"}),u);case"iiiii":return pn(s.day(a,{width:"narrow",context:"formatting"}),u);case"iiiiii":return pn(s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"}),u);case"iiii":default:return pn(s.day(a,{width:"wide",context:"formatting"})||s.day(a,{width:"abbreviated",context:"formatting"})||s.day(a,{width:"short",context:"formatting"})||s.day(a,{width:"narrow",context:"formatting"}),u)}}validate(a,l){return l>=1&&l<=7}set(a,l,s){return a=U6(a,s),a.setHours(0,0,0,0),a}}class Y6 extends Oe{constructor(){super(...arguments);te(this,"priority",80);te(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(a,l,s){switch(l){case"a":case"aa":case"aaa":return s.dayPeriod(a,{width:"abbreviated",context:"formatting"})||s.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaaa":return s.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(a,{width:"wide",context:"formatting"})||s.dayPeriod(a,{width:"abbreviated",context:"formatting"})||s.dayPeriod(a,{width:"narrow",context:"formatting"})}}set(a,l,s){return a.setHours(xf(s),0,0,0),a}}class Z6 extends Oe{constructor(){super(...arguments);te(this,"priority",80);te(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(a,l,s){switch(l){case"b":case"bb":case"bbb":return s.dayPeriod(a,{width:"abbreviated",context:"formatting"})||s.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbbb":return s.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(a,{width:"wide",context:"formatting"})||s.dayPeriod(a,{width:"abbreviated",context:"formatting"})||s.dayPeriod(a,{width:"narrow",context:"formatting"})}}set(a,l,s){return a.setHours(xf(s),0,0,0),a}}class X6 extends Oe{constructor(){super(...arguments);te(this,"priority",80);te(this,"incompatibleTokens",["a","b","t","T"])}parse(a,l,s){switch(l){case"B":case"BB":case"BBB":return s.dayPeriod(a,{width:"abbreviated",context:"formatting"})||s.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBBB":return s.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(a,{width:"wide",context:"formatting"})||s.dayPeriod(a,{width:"abbreviated",context:"formatting"})||s.dayPeriod(a,{width:"narrow",context:"formatting"})}}set(a,l,s){return a.setHours(xf(s),0,0,0),a}}class Q6 extends Oe{constructor(){super(...arguments);te(this,"priority",70);te(this,"incompatibleTokens",["H","K","k","t","T"])}parse(a,l,s){switch(l){case"h":return rn(gn.hour12h,a);case"ho":return s.ordinalNumber(a,{unit:"hour"});default:return cn(l.length,a)}}validate(a,l){return l>=1&&l<=12}set(a,l,s){const u=a.getHours()>=12;return u&&s<12?a.setHours(s+12,0,0,0):!u&&s===12?a.setHours(0,0,0,0):a.setHours(s,0,0,0),a}}class W6 extends Oe{constructor(){super(...arguments);te(this,"priority",70);te(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(a,l,s){switch(l){case"H":return rn(gn.hour23h,a);case"Ho":return s.ordinalNumber(a,{unit:"hour"});default:return cn(l.length,a)}}validate(a,l){return l>=0&&l<=23}set(a,l,s){return a.setHours(s,0,0,0),a}}class $6 extends Oe{constructor(){super(...arguments);te(this,"priority",70);te(this,"incompatibleTokens",["h","H","k","t","T"])}parse(a,l,s){switch(l){case"K":return rn(gn.hour11h,a);case"Ko":return s.ordinalNumber(a,{unit:"hour"});default:return cn(l.length,a)}}validate(a,l){return l>=0&&l<=11}set(a,l,s){return a.getHours()>=12&&s<12?a.setHours(s+12,0,0,0):a.setHours(s,0,0,0),a}}class eM extends Oe{constructor(){super(...arguments);te(this,"priority",70);te(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(a,l,s){switch(l){case"k":return rn(gn.hour24h,a);case"ko":return s.ordinalNumber(a,{unit:"hour"});default:return cn(l.length,a)}}validate(a,l){return l>=1&&l<=24}set(a,l,s){const u=s<=24?s%24:s;return a.setHours(u,0,0,0),a}}class nM extends Oe{constructor(){super(...arguments);te(this,"priority",60);te(this,"incompatibleTokens",["t","T"])}parse(a,l,s){switch(l){case"m":return rn(gn.minute,a);case"mo":return s.ordinalNumber(a,{unit:"minute"});default:return cn(l.length,a)}}validate(a,l){return l>=0&&l<=59}set(a,l,s){return a.setMinutes(s,0,0),a}}class aM extends Oe{constructor(){super(...arguments);te(this,"priority",50);te(this,"incompatibleTokens",["t","T"])}parse(a,l,s){switch(l){case"s":return rn(gn.second,a);case"so":return s.ordinalNumber(a,{unit:"second"});default:return cn(l.length,a)}}validate(a,l){return l>=0&&l<=59}set(a,l,s){return a.setSeconds(s,0),a}}class rM extends Oe{constructor(){super(...arguments);te(this,"priority",30);te(this,"incompatibleTokens",["t","T"])}parse(a,l){const s=u=>Math.trunc(u*Math.pow(10,-l.length+3));return pn(cn(l.length,a),s)}set(a,l,s){return a.setMilliseconds(s),a}}class tM extends Oe{constructor(){super(...arguments);te(this,"priority",10);te(this,"incompatibleTokens",["t","T","x"])}parse(a,l){switch(l){case"X":return Ya(Ka.basicOptionalMinutes,a);case"XX":return Ya(Ka.basic,a);case"XXXX":return Ya(Ka.basicOptionalSeconds,a);case"XXXXX":return Ya(Ka.extendedOptionalSeconds,a);case"XXX":default:return Ya(Ka.extended,a)}}set(a,l,s){return l.timestampIsSet?a:Ln(a,a.getTime()-Gs(a)-s)}}class iM extends Oe{constructor(){super(...arguments);te(this,"priority",10);te(this,"incompatibleTokens",["t","T","X"])}parse(a,l){switch(l){case"x":return Ya(Ka.basicOptionalMinutes,a);case"xx":return Ya(Ka.basic,a);case"xxxx":return Ya(Ka.basicOptionalSeconds,a);case"xxxxx":return Ya(Ka.extendedOptionalSeconds,a);case"xxx":default:return Ya(Ka.extended,a)}}set(a,l,s){return l.timestampIsSet?a:Ln(a,a.getTime()-Gs(a)-s)}}class lM extends Oe{constructor(){super(...arguments);te(this,"priority",40);te(this,"incompatibleTokens","*")}parse(a){return f2(a)}set(a,l,s){return[Ln(a,s*1e3),{timestampIsSet:!0}]}}class oM extends Oe{constructor(){super(...arguments);te(this,"priority",20);te(this,"incompatibleTokens","*")}parse(a){return f2(a)}set(a,l,s){return[Ln(a,s),{timestampIsSet:!0}]}}const sM={G:new D6,y:new w6,Y:new N6,R:new B6,u:new R6,Q:new L6,q:new T6,M:new P6,L:new O6,w:new F6,I:new G6,d:new _6,D:new V6,E:new I6,e:new J6,c:new q6,i:new K6,a:new Y6,b:new Z6,B:new X6,h:new Q6,H:new W6,K:new $6,k:new eM,m:new nM,s:new aM,S:new rM,X:new tM,x:new iM,t:new lM,T:new oM},uM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cM=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dM=/^'([^]*?)'?$/,fM=/''/g,hM=/\S/,mM=/[a-zA-Z]/;function gM(r,t,a,l){var w,A,L,G;const s=()=>Ln(a,NaN),u=b6(),f=u.locale??i2,h=u.firstWeekContainsDate??((A=(w=u.locale)==null?void 0:w.options)==null?void 0:A.firstWeekContainsDate)??1,m=u.weekStartsOn??((G=(L=u.locale)==null?void 0:L.options)==null?void 0:G.weekStartsOn)??0,p={firstWeekContainsDate:h,weekStartsOn:m,locale:f},v=[new E6(l==null?void 0:l.in,a)],g=t.match(cM).map(N=>{const H=N[0];if(H in Yd){const V=Yd[H];return V(N,f.formatLong)}return N}).join("").match(uM),S=[];for(let N of g){c2(N)&&Zd(N,t,r),u2(N)&&Zd(N,t,r);const H=N[0],V=sM[H];if(V){const{incompatibleTokens:U}=V;if(Array.isArray(U)){const z=S.find(O=>U.includes(O.token)||O.token===H);if(z)throw new RangeError(`The format string mustn't contain \`${z.fullToken}\` and \`${N}\` at the same time`)}else if(V.incompatibleTokens==="*"&&S.length>0)throw new RangeError(`The format string mustn't contain \`${N}\` and any other token at the same time`);S.push({token:H,fullToken:N});const X=V.run(r,N,f.match,p);if(!X)return s();v.push(X.setter),r=X.rest}else{if(H.match(mM))throw new RangeError("Format string contains an unescaped latin alphabet character `"+H+"`");if(N==="''"?N="'":H==="'"&&(N=pM(N)),r.indexOf(N)===0)r=r.slice(N.length);else return s()}}if(r.length>0&&hM.test(r))return s();const x=v.map(N=>N.priority).sort((N,H)=>H-N).filter((N,H,V)=>V.indexOf(N)===H).map(N=>v.filter(H=>H.priority===N).sort((H,V)=>V.subPriority-H.subPriority)).map(N=>N[0]);let M=yn(a,l==null?void 0:l.in);if(isNaN(+M))return s();const E={};for(const N of x){if(!N.validate(M,p))return s();const H=N.set(M,E,p);Array.isArray(H)?(M=H[0],Object.assign(E,H[1])):M=H}return M}function pM(r){return r.match(dM)[1].replace(fM,"'")}function yM(r){return Kd(Date.now(),r)}function g2(r){const t=r.replace(/\D/g,"").slice(0,8);return t.length<=2?t:t.length<=4?`${t.slice(0,2)}.${t.slice(2)}`:`${t.slice(0,2)}.${t.slice(2,4)}.${t.slice(4)}`}function Xd(r,t){if(!r||r.length!==10)return null;const a=gM(r,"dd.MM.yyyy",new Date);return!t2(a)||!(t!=null&&t.allowFuture)&&S6(a,yM())?null:p6(a,"yyyy-MM-dd")}function p2(r){if(!r)return"";const[t,a,l]=r.split("-");return`${l}.${a}.${t}`}function y2(r){if(!r||r.length!==10)return!1;const[t,a,l]=r.split("-"),s=parseInt(t??"",10),u=parseInt(a??"",10),f=parseInt(l??"",10);if(isNaN(s)||isNaN(u)||isNaN(f))return!1;const h=new Date(s,u-1,f);return h.getFullYear()===s&&h.getMonth()===u-1&&h.getDate()===f}function bM(r,t,a,l){return Fi({firstName:le().min(1,l.required),lastName:le().min(1,l.required),gender:le().min(1,l.required),nationality:le().min(1,l.required),street:le().min(1,l.required),npa:le().min(1,l.required).regex(/^\d+$/,l.invalidNpa),city:le().min(1,l.required),country:le().min(1,l.required),email:le().min(1,l.required).regex(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,l.invalidEmail),profession:a?le().min(1,l.required):le().optional().default(""),employerName:a?le().min(1,l.required):le().optional().default(""),employerAddress:a?le().min(1,l.required):le().optional().default(""),referringDoctor:le().optional().default(""),generalPractitioner:le().optional().default(""),accidentDate:r==="accident"?le().min(1,l.required).refine(y2,l.invalidDate):le().optional().default(""),accidentInsurance:le().optional().default(""),claimNumber:le().optional().default(""),avsNumber:t==="swiss"?le().min(1,l.required).refine(s=>s.replace(/\D/g,"").length===13,l.invalidAvs):le().optional().default(""),basicInsurance:r==="accident"||t==="swiss"||t==="international"?le().min(1,l.required):le().optional().default(""),cardNumber:r==="accident"||t==="swiss"?le().min(1,l.required).refine(s=>s.replace(/\D/g,"").length===20,l.invalidCardNumber):le().optional().default(""),policyNumber:t==="international"?le().min(1,l.required):le().optional().default(""),complementaryInsurance:le().optional().default("")})}function vM(r){return Fi({otpCode:le().min(1,r.required).regex(/^\d{6}$/,r.invalid)})}function SM(r,t,a){return Fi({reason:kd(["illness","accident"],{required_error:a.reasonRequired}),insurance:kd(["swiss","international","auto"],{required_error:a.insuranceRequired}),hasEmployer:Dt(),consentNLPD:Dt().refine(l=>l===!0,a.consentRequired),consentMarketing:Dt(),identityCard:Es(File,{message:a.identityRequired}).nullable().refine(l=>l!==null,a.identityRequired),insuranceCard:Es(File).nullable().optional().refine(l=>r==="swiss"?l!=null:!0,a.insuranceCardRequired)})}function MM(r){return Fi({birthDate:le().min(1,r.required).refine(y2,r.invalid).refine(t=>new Date(t)<=new Date,r.futureDate)})}const CM=Fi({language:kd(["fr","en"]),preadmissionId:le(),birthDate:le(),otpCode:le(),reason:le(),insurance:le(),hasEmployer:Dt(),consentNLPD:Dt(),consentMarketing:Dt(),identityCard:Es(File).nullable(),insuranceCard:Es(File).nullable(),identityCardBase64:le(),identityCardMimeType:le(),insuranceCardBase64:le(),insuranceCardMimeType:le(),firstName:le(),lastName:le(),birthDatePersonal:le(),gender:le(),nationality:le(),avsNumber:le(),street:le(),npa:le(),city:le(),country:le(),email:le(),profession:le(),employerName:le(),employerAddress:le(),referringDoctor:le(),generalPractitioner:le(),accidentDate:le(),accidentInsurance:le(),claimNumber:le(),basicInsurance:le(),cardNumber:le(),policyNumber:le(),complementaryInsurance:le(),ocrTimedOut:Dt(),insuranceCardError:le()});/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b2=(...r)=>r.filter((t,a,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=D.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:s="",children:u,iconNode:f,...h},m)=>D.createElement("svg",{ref:m,...AM,width:t,height:t,stroke:r,strokeWidth:l?Number(a)*24/Number(t):a,className:b2("lucide",s),...h},[...f.map(([p,v])=>D.createElement(p,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(r,t)=>{const a=D.forwardRef(({className:l,...s},u)=>D.createElement(EM,{ref:u,iconNode:t,className:b2(`lucide-${xM(r)}`,l),...s}));return a.displayName=`${r}`,a};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=dn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=dn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=dn("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=dn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=dn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=dn("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=dn("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=dn("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=dn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=dn("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=dn("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=dn("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=dn("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=dn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=dn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=dn("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=dn("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=dn("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=dn("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=dn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=dn("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=dn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function S2(r){var t,a,l="";if(typeof r=="string"||typeof r=="number")l+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(t=0;t<s;t++)r[t]&&(a=S2(r[t]))&&(l&&(l+=" "),l+=a)}else for(a in r)r[a]&&(l&&(l+=" "),l+=a);return l}function M2(){for(var r,t,a=0,l="",s=arguments.length;a<s;a++)(r=arguments[a])&&(t=S2(r))&&(l&&(l+=" "),l+=t);return l}const Nf="-",jM=r=>{const t=_M(r),{conflictingClassGroups:a,conflictingClassGroupModifiers:l}=r;return{getClassGroupId:f=>{const h=f.split(Nf);return h[0]===""&&h.length!==1&&h.shift(),C2(h,t)||HM(f)},getConflictingClassGroupIds:(f,h)=>{const m=a[f]||[];return h&&l[f]?[...m,...l[f]]:m}}},C2=(r,t)=>{var f;if(r.length===0)return t.classGroupId;const a=r[0],l=t.nextPart.get(a),s=l?C2(r.slice(1),l):void 0;if(s)return s;if(t.validators.length===0)return;const u=r.join(Nf);return(f=t.validators.find(({validator:h})=>h(u)))==null?void 0:f.classGroupId},H0=/^\[(.+)\]$/,HM=r=>{if(H0.test(r)){const t=H0.exec(r)[1],a=t==null?void 0:t.substring(0,t.indexOf(":"));if(a)return"arbitrary.."+a}},_M=r=>{const{theme:t,prefix:a}=r,l={nextPart:new Map,validators:[]};return IM(Object.entries(r.classGroups),a).forEach(([u,f])=>{Qd(f,l,u,t)}),l},Qd=(r,t,a,l)=>{r.forEach(s=>{if(typeof s=="string"){const u=s===""?t:_0(t,s);u.classGroupId=a;return}if(typeof s=="function"){if(VM(s)){Qd(s(l),t,a,l);return}t.validators.push({validator:s,classGroupId:a});return}Object.entries(s).forEach(([u,f])=>{Qd(f,_0(t,u),a,l)})})},_0=(r,t)=>{let a=r;return t.split(Nf).forEach(l=>{a.nextPart.has(l)||a.nextPart.set(l,{nextPart:new Map,validators:[]}),a=a.nextPart.get(l)}),a},VM=r=>r.isThemeGetter,IM=(r,t)=>t?r.map(([a,l])=>{const s=l.map(u=>typeof u=="string"?t+u:typeof u=="object"?Object.fromEntries(Object.entries(u).map(([f,h])=>[t+f,h])):u);return[a,s]}):r,JM=r=>{if(r<1)return{get:()=>{},set:()=>{}};let t=0,a=new Map,l=new Map;const s=(u,f)=>{a.set(u,f),t++,t>r&&(t=0,l=a,a=new Map)};return{get(u){let f=a.get(u);if(f!==void 0)return f;if((f=l.get(u))!==void 0)return s(u,f),f},set(u,f){a.has(u)?a.set(u,f):s(u,f)}}},x2="!",qM=r=>{const{separator:t,experimentalParseClassName:a}=r,l=t.length===1,s=t[0],u=t.length,f=h=>{const m=[];let p=0,v=0,g;for(let w=0;w<h.length;w++){let A=h[w];if(p===0){if(A===s&&(l||h.slice(w,w+u)===t)){m.push(h.slice(v,w)),v=w+u;continue}if(A==="/"){g=w;continue}}A==="["?p++:A==="]"&&p--}const S=m.length===0?h:h.substring(v),x=S.startsWith(x2),M=x?S.substring(1):S,E=g&&g>v?g-v:void 0;return{modifiers:m,hasImportantModifier:x,baseClassName:M,maybePostfixModifierPosition:E}};return a?h=>a({className:h,parseClassName:f}):f},UM=r=>{if(r.length<=1)return r;const t=[];let a=[];return r.forEach(l=>{l[0]==="["?(t.push(...a.sort(),l),a=[]):a.push(l)}),t.push(...a.sort()),t},KM=r=>({cache:JM(r.cacheSize),parseClassName:qM(r),...jM(r)}),YM=/\s+/,ZM=(r,t)=>{const{parseClassName:a,getClassGroupId:l,getConflictingClassGroupIds:s}=t,u=[],f=r.trim().split(YM);let h="";for(let m=f.length-1;m>=0;m-=1){const p=f[m],{modifiers:v,hasImportantModifier:g,baseClassName:S,maybePostfixModifierPosition:x}=a(p);let M=!!x,E=l(M?S.substring(0,x):S);if(!E){if(!M){h=p+(h.length>0?" "+h:h);continue}if(E=l(S),!E){h=p+(h.length>0?" "+h:h);continue}M=!1}const w=UM(v).join(":"),A=g?w+x2:w,L=A+E;if(u.includes(L))continue;u.push(L);const G=s(E,M);for(let N=0;N<G.length;++N){const H=G[N];u.push(A+H)}h=p+(h.length>0?" "+h:h)}return h};function XM(){let r=0,t,a,l="";for(;r<arguments.length;)(t=arguments[r++])&&(a=A2(t))&&(l&&(l+=" "),l+=a);return l}const A2=r=>{if(typeof r=="string")return r;let t,a="";for(let l=0;l<r.length;l++)r[l]&&(t=A2(r[l]))&&(a&&(a+=" "),a+=t);return a};function QM(r,...t){let a,l,s,u=f;function f(m){const p=t.reduce((v,g)=>g(v),r());return a=KM(p),l=a.cache.get,s=a.cache.set,u=h,h(m)}function h(m){const p=l(m);if(p)return p;const v=ZM(m,a);return s(m,v),v}return function(){return u(XM.apply(null,arguments))}}const We=r=>{const t=a=>a[r]||[];return t.isThemeGetter=!0,t},E2=/^\[(?:([a-z-]+):)?(.+)\]$/i,WM=/^\d+\/\d+$/,$M=new Set(["px","full","screen"]),eC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,nC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,aC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,rC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,tC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,pr=r=>Ti(r)||$M.has(r)||WM.test(r),Yr=r=>ji(r,"length",fC),Ti=r=>!!r&&!Number.isNaN(Number(r)),Od=r=>ji(r,"number",Ti),Hl=r=>!!r&&Number.isInteger(Number(r)),iC=r=>r.endsWith("%")&&Ti(r.slice(0,-1)),xe=r=>E2.test(r),Zr=r=>eC.test(r),lC=new Set(["length","size","percentage"]),oC=r=>ji(r,lC,D2),sC=r=>ji(r,"position",D2),uC=new Set(["image","url"]),cC=r=>ji(r,uC,mC),dC=r=>ji(r,"",hC),_l=()=>!0,ji=(r,t,a)=>{const l=E2.exec(r);return l?l[1]?typeof t=="string"?l[1]===t:t.has(l[1]):a(l[2]):!1},fC=r=>nC.test(r)&&!aC.test(r),D2=()=>!1,hC=r=>rC.test(r),mC=r=>tC.test(r),gC=()=>{const r=We("colors"),t=We("spacing"),a=We("blur"),l=We("brightness"),s=We("borderColor"),u=We("borderRadius"),f=We("borderSpacing"),h=We("borderWidth"),m=We("contrast"),p=We("grayscale"),v=We("hueRotate"),g=We("invert"),S=We("gap"),x=We("gradientColorStops"),M=We("gradientColorStopPositions"),E=We("inset"),w=We("margin"),A=We("opacity"),L=We("padding"),G=We("saturate"),N=We("scale"),H=We("sepia"),V=We("skew"),U=We("space"),X=We("translate"),z=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],Q=()=>["auto",xe,t],q=()=>[xe,t],J=()=>["",pr,Yr],$=()=>["auto",Ti,xe],ee=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],R=()=>["solid","dashed","dotted","double","none"],I=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],ie=()=>["","0",xe],se=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[Ti,xe];return{cacheSize:500,separator:":",theme:{colors:[_l],spacing:[pr,Yr],blur:["none","",Zr,xe],brightness:re(),borderColor:[r],borderRadius:["none","","full",Zr,xe],borderSpacing:q(),borderWidth:J(),contrast:re(),grayscale:ie(),hueRotate:re(),invert:ie(),gap:q(),gradientColorStops:[r],gradientColorStopPositions:[iC,Yr],inset:Q(),margin:Q(),opacity:re(),padding:q(),saturate:re(),scale:re(),sepia:ie(),skew:re(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",xe]}],container:["container"],columns:[{columns:[Zr]}],"break-after":[{"break-after":se()}],"break-before":[{"break-before":se()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ee(),xe]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[E]}],"inset-x":[{"inset-x":[E]}],"inset-y":[{"inset-y":[E]}],start:[{start:[E]}],end:[{end:[E]}],top:[{top:[E]}],right:[{right:[E]}],bottom:[{bottom:[E]}],left:[{left:[E]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Hl,xe]}],basis:[{basis:Q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",xe]}],grow:[{grow:ie()}],shrink:[{shrink:ie()}],order:[{order:["first","last","none",Hl,xe]}],"grid-cols":[{"grid-cols":[_l]}],"col-start-end":[{col:["auto",{span:["full",Hl,xe]},xe]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[_l]}],"row-start-end":[{row:["auto",{span:[Hl,xe]},xe]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",xe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",xe]}],gap:[{gap:[S]}],"gap-x":[{"gap-x":[S]}],"gap-y":[{"gap-y":[S]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[L]}],px:[{px:[L]}],py:[{py:[L]}],ps:[{ps:[L]}],pe:[{pe:[L]}],pt:[{pt:[L]}],pr:[{pr:[L]}],pb:[{pb:[L]}],pl:[{pl:[L]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[U]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[U]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",xe,t]}],"min-w":[{"min-w":[xe,t,"min","max","fit"]}],"max-w":[{"max-w":[xe,t,"none","full","min","max","fit","prose",{screen:[Zr]},Zr]}],h:[{h:[xe,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[xe,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[xe,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[xe,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Zr,Yr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Od]}],"font-family":[{font:[_l]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",xe]}],"line-clamp":[{"line-clamp":["none",Ti,Od]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",pr,xe]}],"list-image":[{"list-image":["none",xe]}],"list-style-type":[{list:["none","disc","decimal",xe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...R(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",pr,Yr]}],"underline-offset":[{"underline-offset":["auto",pr,xe]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ee(),sC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",oC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},cC]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[...R(),"hidden"]}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:R()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...R()]}],"outline-offset":[{"outline-offset":[pr,xe]}],"outline-w":[{outline:[pr,Yr]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[pr,Yr]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",Zr,dC]}],"shadow-color":[{shadow:[_l]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":[...I(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":I()}],filter:[{filter:["","none"]}],blur:[{blur:[a]}],brightness:[{brightness:[l]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Zr,xe]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[g]}],saturate:[{saturate:[G]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[a]}],"backdrop-brightness":[{"backdrop-brightness":[l]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[G]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[f]}],"border-spacing-x":[{"border-spacing-x":[f]}],"border-spacing-y":[{"border-spacing-y":[f]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",xe]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",xe]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",xe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[Hl,xe]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[V]}],"skew-y":[{"skew-y":[V]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",xe]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",xe]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",xe]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[pr,Yr,Od]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},pC=QM(gC);function we(...r){return pC(M2(r))}function w2({id:r,value:t,onChange:a,countries:l,placeholder:s="",error:u,required:f=!1,label:h,noResultsText:m="Aucun résultat",withFlags:p=!1}){const[v,g]=D.useState(!1),[S,x]=D.useState(""),[M,E]=D.useState(-1),w=D.useRef(null),A=D.useRef(null),L=l.filter(z=>z.name.toLowerCase().includes(S.toLowerCase()));D.useEffect(()=>{const z=O=>{A.current&&!A.current.contains(O.target)&&w.current&&!w.current.contains(O.target)&&g(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]),D.useEffect(()=>{v||(x(""),E(-1))},[v]);const G=z=>{x(z.target.value),g(!0),E(-1)},N=()=>{g(!0)},H=z=>{a(z.code),x(""),g(!1)},V=z=>{if(!v){(z.key==="ArrowDown"||z.key==="ArrowUp"||z.key==="Enter")&&(z.preventDefault(),g(!0));return}switch(z.key){case"ArrowDown":z.preventDefault(),E(O=>O<L.length-1?O+1:O);break;case"ArrowUp":z.preventDefault(),E(O=>O>0?O-1:0);break;case"Enter":if(z.preventDefault(),M>=0&&M<L.length){const O=L[M];O&&H(O)}break;case"Escape":z.preventDefault(),g(!1);break}};D.useEffect(()=>{if(M>=0&&A.current){const z=A.current.children[M];z&&z.scrollIntoView({block:"nearest"})}},[M]);const U=l.find(z=>z.code===t),X=v?S:U?U.name:t;return y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{htmlFor:r,className:"text-sm font-medium text-[var(--brand-text)] leading-3",children:[h,f&&y.jsx("span",{className:"text-[var(--brand-error)] ml-0.5",children:"*"})]}),y.jsxs("div",{className:"relative",children:[y.jsxs("div",{className:we("flex items-center h-10 w-full rounded-md border border-[var(--input)] bg-[var(--background)] px-3 pr-10 text-sm","has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--ring)] has-[:focus-visible]:ring-offset-2",u&&"border-[var(--brand-error)] has-[:focus-visible]:ring-[var(--brand-error)]"),children:[p&&!v&&U&&y.jsx("span",{className:`fi fi-${U.code.toLowerCase()} mr-2 shrink-0 text-base`}),y.jsx("input",{ref:w,id:r,type:"text",value:X,onChange:G,onClick:N,onKeyDown:V,placeholder:s,autoComplete:"off",className:"w-full bg-transparent py-2 outline-none placeholder:text-slate-400"})]}),y.jsx(Xs,{className:we("absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none transition-transform",v&&"rotate-180")}),v&&y.jsx("div",{ref:A,className:"absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto",children:L.length>0?L.map((z,O)=>y.jsxs("div",{onClick:()=>H(z),className:we("px-4 py-2.5 cursor-pointer transition-colors flex items-center",O===M?"bg-[var(--brand-primary)] text-white":t===z.code?"bg-slate-100":"hover:bg-slate-50"),children:[p&&y.jsx("span",{className:`fi fi-${z.code.toLowerCase()} mr-2 shrink-0 text-base`}),z.name]},z.code)):y.jsx("div",{className:"px-4 py-2.5 text-slate-500 text-sm",children:m})})]}),u&&y.jsxs("div",{className:"form-error-inline-tight",children:[y.jsx(Sr,{className:"form-error-icon"}),y.jsx("span",{children:u})]})]})}const yC={MAX_SIZE_BYTES:10*1024*1024},bC=".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.tif,.tiff",Wd=D.forwardRef(({file:r,isProcessing:t,onFileSelect:a,onRemove:l,label:s,uploadText:u,uploadFormats:f,processingText:h,error:m,warning:p,required:v,optional:g},S)=>{const[x,M]=D.useState(!1),E=L=>{L.preventDefault(),L.stopPropagation(),t||M(!0)},w=L=>{L.preventDefault(),L.stopPropagation(),M(!1)},A=L=>{if(L.preventDefault(),L.stopPropagation(),M(!1),t)return;const G=L.dataTransfer.files[0];G&&a(G)};return y.jsxs("div",{ref:S,className:"space-y-2",children:[y.jsxs("label",{className:"text-sm font-medium text-[var(--brand-text)]",children:[s," ",v&&y.jsx("span",{className:"text-[var(--brand-error)]",children:"*"}),g&&y.jsxs("span",{className:"text-slate-500 text-xs ml-2",children:["(",g,")"]})]}),r?y.jsxs("div",{className:"h-36 rounded-lg border-2 border-[var(--brand-success)] bg-emerald-50 p-4 flex flex-col items-center justify-center relative shadow-sm",children:[y.jsx("button",{type:"button",onClick:l,className:"absolute top-2 right-2 hover:scale-110 transition-transform cursor-pointer","aria-label":"Supprimer le fichier",children:y.jsx(wf,{className:"w-4 h-4 text-slate-600 hover:text-[var(--brand-error)]"})}),y.jsx(Df,{className:"w-8 h-8 text-[var(--brand-success)] mb-2"}),y.jsx("p",{className:"text-xs text-[var(--brand-success)] font-semibold text-center px-2 truncate max-w-full",children:r.name})]}):y.jsxs("label",{onDragOver:E,onDragEnter:E,onDragLeave:w,onDrop:A,className:`h-36 flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-lg cursor-pointer transition-all hover:scale-[1.02] ${x?"border-[var(--brand-primary)] bg-sky-50":"border-slate-200 hover:border-[var(--brand-primary)] hover:bg-sky-50/50"}`,children:[t?y.jsx(at,{className:"w-8 h-8 text-[var(--brand-primary)] animate-spin"}):y.jsx(kM,{className:"w-8 h-8 text-slate-400"}),y.jsx("span",{className:"text-sm text-slate-600",children:t?h:u}),y.jsx("span",{className:"text-xs text-slate-400",children:f}),y.jsx("input",{type:"file",accept:bC,onChange:L=>{var N;const G=(N=L.target.files)==null?void 0:N[0];G&&a(G)},className:"hidden",disabled:t})]}),m&&y.jsxs("div",{className:"form-error-inline-tight",children:[y.jsx(Sr,{className:"form-error-icon"}),y.jsx("span",{children:m})]}),p&&!m&&y.jsxs("div",{className:"flex items-center gap-2 text-amber-600 text-sm",children:[y.jsx(Sr,{className:"w-4 h-4 shrink-0"}),y.jsx("span",{children:p})]})]})});Wd.displayName="FileUploadZone";const vC=`\uFEFFName;ID\r
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
`;function V0({id:r,value:t,onChange:a,label:l,placeholder:s="",noResultsText:u="Aucun résultat",optional:f}){const[h,m]=D.useState(!1),[p,v]=D.useState(""),[g,S]=D.useState(-1),x=D.useRef(null),M=D.useRef(null),E=D.useMemo(()=>vC.split(`
`).slice(1).map(U=>{var X;return((X=U.split(";")[0])==null?void 0:X.trim())??""}).filter(U=>U.length>0),[]),w=D.useMemo(()=>(p?E.filter(U=>U.toLowerCase().includes(p.toLowerCase())):E).slice(0,50),[p,E]);D.useEffect(()=>{const V=U=>{M.current&&!M.current.contains(U.target)&&x.current&&!x.current.contains(U.target)&&m(!1)};return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[]),D.useEffect(()=>{h||(v(""),S(-1))},[h]);const A=V=>{v(V.target.value),m(!0),S(-1)},L=()=>{m(!0)},G=V=>{a(V),v(""),m(!1)},N=V=>{if(!h){(V.key==="ArrowDown"||V.key==="ArrowUp"||V.key==="Enter")&&(V.preventDefault(),m(!0));return}switch(V.key){case"ArrowDown":V.preventDefault(),S(U=>U<w.length-1?U+1:U);break;case"ArrowUp":V.preventDefault(),S(U=>U>0?U-1:0);break;case"Enter":if(V.preventDefault(),g>=0&&g<w.length){const U=w[g];U&&G(U)}break;case"Escape":V.preventDefault(),m(!1);break}};D.useEffect(()=>{if(g>=0&&M.current){const V=M.current.children[g];V&&V.scrollIntoView({block:"nearest"})}},[g]);const H=h?p:t;return y.jsxs("div",{className:"space-y-2",children:[y.jsxs("label",{htmlFor:r,className:"text-sm font-medium text-[var(--brand-text)] leading-3",children:[l,f&&y.jsxs("span",{className:"text-slate-400 font-normal ml-1",children:["(",f,")"]})]}),y.jsxs("div",{className:"relative",children:[y.jsx("input",{ref:x,id:r,type:"text",value:H,onChange:A,onClick:L,onKeyDown:N,placeholder:s,autoComplete:"off",className:"flex h-10 w-full rounded-md border border-[var(--input)] bg-[var(--background)] px-3 pr-10 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"}),y.jsx(Xs,{className:we("absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none transition-transform",h&&"rotate-180")}),h&&y.jsx("div",{ref:M,className:"absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto",children:w.length>0?w.map((V,U)=>y.jsx("div",{onClick:()=>G(V),className:we("px-4 py-2.5 cursor-pointer transition-colors text-sm",U===g?"bg-[var(--brand-primary)] text-white":t===V?"bg-slate-100":"hover:bg-slate-50"),children:V},`${V}-${U}`)):y.jsx("div",{className:"px-4 py-2.5 text-slate-500 text-sm",children:u})})]})]})}const N2=D.forwardRef(({className:r,type:t,...a},l)=>y.jsx("input",{type:t,className:we("flex h-10 w-full rounded-md border border-[var(--input)] bg-[var(--background)] px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:l,...a}));N2.displayName="Input";const $l=D.forwardRef(({className:r,...t},a)=>y.jsx($0,{ref:a,className:we("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",r),...t}));$l.displayName=$0.displayName;const I0=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,J0=M2,SC=(r,t)=>a=>{var l;if((t==null?void 0:t.variants)==null)return J0(r,a==null?void 0:a.class,a==null?void 0:a.className);const{variants:s,defaultVariants:u}=t,f=Object.keys(s).map(p=>{const v=a==null?void 0:a[p],g=u==null?void 0:u[p];if(v===null)return null;const S=I0(v)||I0(g);return s[p][S]}),h=a&&Object.entries(a).reduce((p,v)=>{let[g,S]=v;return S===void 0||(p[g]=S),p},{}),m=t==null||(l=t.compoundVariants)===null||l===void 0?void 0:l.reduce((p,v)=>{let{class:g,className:S,...x}=v;return Object.entries(x).every(M=>{let[E,w]=M;return Array.isArray(w)?w.includes({...u,...h}[E]):{...u,...h}[E]===w})?[...p,g,S]:p},[]);return J0(r,f,m,a==null?void 0:a.class,a==null?void 0:a.className)},MC=SC("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",{variants:{variant:{default:"bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90",destructive:"bg-[var(--destructive)] text-white hover:opacity-90",outline:"border border-[var(--input)] bg-[var(--background)] hover:bg-slate-50",secondary:"bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:opacity-80",ghost:"hover:bg-slate-100",link:"text-[var(--primary)] underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),pa=D.forwardRef(({className:r,variant:t,size:a,asChild:l=!1,...s},u)=>{const f=l?a4:"button";return y.jsx(f,{className:we(MC({variant:t,size:a,className:r})),ref:u,...s})});pa.displayName="Button";function $d(r){return r?r.toLowerCase().split(/[-\s]/).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(r.includes("-")?"-":" "):""}function CC(r){return r?r.toLowerCase().split(/\s+/).map(t=>t.includes("-")?t.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join("-"):t.charAt(0).toUpperCase()+t.slice(1)).join(" "):""}function xC(r){const t=r.replace(/\D/g,"").slice(0,13);return t.length<=3?t:t.length<=7?`${t.slice(0,3)}.${t.slice(3)}`:t.length<=11?`${t.slice(0,3)}.${t.slice(3,7)}.${t.slice(7)}`:`${t.slice(0,3)}.${t.slice(3,7)}.${t.slice(7,11)}.${t.slice(11)}`}function q0(r){return r.replace(/\D/g,"").slice(0,20).replace(/(\d{5})(?=\d)/g,"$1 ")}function AC(r){return new Promise((t,a)=>{const l=new FileReader;l.onload=()=>{const u=l.result.split(",")[1]??"";t(u)},l.onerror=a,l.readAsDataURL(r)})}var un={};const EC=[["AF","AFG","004","ISO 3166-2:AF"],["AX","ALA","248","ISO 3166-2:AX"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BQ","BES","535","ISO 3166-2:BQ"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CW","CUW","531","ISO 3166-2:CW"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GG","GGY","831","ISO 3166-2:GG"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IM","IMN","833","ISO 3166-2:IM"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JE","JEY","832","ISO 3166-2:JE"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MK","MKD","807","ISO 3166-2:MK"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["ME","MNE","499","ISO 3166-2:ME"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["BL","BLM","652","ISO 3166-2:BL"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["MF","MAF","663","ISO 3166-2:MF"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["RS","SRB","688","ISO 3166-2:RS"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SX","SXM","534","ISO 3166-2:SX"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["SS","SSD","728","ISO 3166-2:SS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["XK","XKX","","ISO 3166-2:XK"]];var Vl={},U0;function DC(){if(U0)return Vl;U0=1,Vl.remove=u;for(var r=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],t={},a=0;a<r.length;a+=1)for(var l=r[a].chars,s=0;s<l.length;s+=1)t[l[s]]=r[a].base;function u(f){return f.replace(/[^\u0000-\u007e]/g,function(h){return t[h]||h})}return Vl.replacementList=r,Vl.diacriticsMap=t,Vl}var K0;function wC(){if(K0)return un;K0=1;var r=EC,t=DC().remove,a={},l={},s={},u={},f={};r.forEach(function(A){var L=A;l[L[0]]=L[1],s[L[1]]=L[0],u[L[2]]=L[0],f[L[0]]=L[2]});function h(A){return("000"+(A||"")).slice(-3)}function m(A){if(!A.locale)throw new TypeError("Missing localeData.locale");if(!A.nationalities)throw new TypeError("Missing localeData.nationalities");a[A.locale]=A.nationalities}un.registerLocale=m;function p(A){return s[A]}un.alpha3ToAlpha2=p;function v(A){return l[A]}un.alpha2ToAlpha3=v;function g(A){return f[p(A)]}un.alpha3ToNumeric=g;function S(A){return f[A]}un.alpha2ToNumeric=S;function x(A){var L=h(A);return v(u[L])}un.numericToAlpha3=x;function M(A){var L=h(A);return u[L]}un.numericToAlpha2=M;function E(A){if(typeof A=="string"){if(/^[0-9]*$/.test(A))return x(A);if(A.length===2)return v(A.toUpperCase());if(A.length===3)return A.toUpperCase()}if(typeof A=="number")return x(A)}un.toAlpha3=E;function w(A){if(typeof A=="string"){if(/^[0-9]*$/.test(A))return M(A);if(A.length===2)return A.toUpperCase();if(A.length===3)return p(A.toUpperCase())}if(typeof A=="number")return M(A)}return un.toAlpha2=w,un.getName=function(A,L){try{var G=a[L.toLowerCase()];return G[w(A)]}catch{return}},un.getNames=function(A){var L=a[A.toLowerCase()];return L===void 0?{}:L},un.getAlpha2Code=function(A,L){try{var G,N=a[L.toLowerCase()];for(G in N)if(N.hasOwnProperty(G)&&N[G].toLowerCase()===A.toLowerCase())return G;return}catch{return}},un.getSimpleAlpha2Code=function(A,L){try{var G,N=a[L.toLowerCase()];for(G in N)if(N.hasOwnProperty(G)&&t(N[G].toLowerCase())===t(A.toLowerCase()))return G;return}catch{return}},un.getAlpha2Codes=function(){return l},un.getAlpha3Code=function(A,L){var G=this.getAlpha2Code(A,L);if(G)return this.toAlpha3(G)},un.getSimpleAlpha3Code=function(A,L){var G=this.getSimpleAlpha2Code(A,L);if(G)return this.toAlpha3(G)},un.getAlpha3Codes=function(){return s},un.getNumericCodes=function(){return u},un.langs=function(){return Object.keys(a)},un.isValid=function(A){if(!A)return!1;var L=A.toString().toUpperCase();return s.hasOwnProperty(L)||l.hasOwnProperty(L)||u.hasOwnProperty(L)},un}var NC=wC();const Bf=g4(NC),BC="en",RC={AF:"Afghan",AL:"Albanian",DZ:"Algerian",AD:"Andorran",AO:"Angolan",AG:"Antiguans",AR:"Argentinean",AM:"Armenian",AU:"Australian",AT:"Austrian",AZ:"Azerbaijani",BS:"Bahamian",BH:"Bahraini",BD:"Bangladeshi",BB:"Barbadian",BY:"Belarusian",BE:"Belgian",BZ:"Belizean",BJ:"Beninese",BM:"Bermuda",BT:"Bhutanese",BO:"Bolivian",BA:"Bosnian - Herzegovinian",BW:"Batswana",BV:"Bouvet Island",BR:"Brazilian",IO:"British Indian Ocean Territory",BN:"Bruneian",BG:"Bulgarian",BF:"Burkinabe",BI:"Burundian",KH:"Cambodian",CM:"Cameroonian",CA:"Canadian",CV:"Cape Verdean",KY:"Cayman Islands",CF:"Central African",TD:"Chadian",CL:"Chilean",CN:"Chinese",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombian",KM:"Comoran",CG:"Congolese (Republic of the Congo)",CD:"Congolese (Democratic Republic of the Congo)",CK:"Cook Islands",CR:"Costa Rican",CI:"Ivorian",HR:"Croatian",CU:"Cuban",CY:"Cypriot",CZ:"Czech",DK:"Danish",DJ:"Djibouti",DM:"Dominican (Dominica)",DO:"Dominican (Dominican Republic)",EC:"Ecuadorean",EG:"Egyptian",SV:"Salvadoran",GQ:"Equatorial Guinean",ER:"Eritrean",EE:"Estonian",ET:"Ethiopian",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fijian",FI:"Finnish",FR:"French",GF:"French (French Guiana)",PF:"French (French Polynesia)",TF:"French (French Southern Territories)",GA:"Gabonese",GM:"Gambian",GE:"Georgian",DE:"German",GH:"Ghanaian",GI:"Gibraltar",GR:"Greek",GL:"Greenland",GD:"Grenadian",GP:"Guadeloupe",GU:"Guam",GT:"Guatemalan",GN:"Guinean",GW:"Guinea-Bissauan",GY:"Guyanese",HT:"Haitian",HM:"Heard Island and Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduran",HK:"Hong Kong",HU:"Hungarian",IS:"Icelandic",IN:"Indian",ID:"Indonesian",IR:"Iranian",IQ:"Iraqi",IE:"Irish",IL:"Israeli",IT:"Italian",JM:"Jamaican",JP:"Japanese",JO:"Jordanian",KZ:"Kazakhstani",KE:"Kenyan",KI:"I-Kiribati",KP:"North Korean",KR:"South Korean",KW:"Kuwaiti",KG:"Kyrgyz",LA:"Laotian",LV:"Latvian",LB:"Lebanese",LS:"Mosotho",LR:"Liberian",LY:"Libyan",LI:"Liechtensteiner",LT:"Lithuanian",LU:"Luxembourger",MO:"Macao",MG:"Malagasy",MW:"Malawian",MY:"Malaysian",MV:"Maldivan",ML:"Malian",MT:"Maltese",MH:"Marshallese",MQ:"Martinique",MR:"Mauritanian",MU:"Mauritian",YT:"Mayotte",MX:"Mexican",FM:"Micronesian",MD:"Moldovan",MC:"Monacan",MN:"Mongolian",MS:"Montserrat",MA:"Moroccan",MZ:"Mozambican",MM:"Burmese",NA:"Namibian",NR:"Nauruan",NP:"Nepalese",NL:"Dutch",NC:"New Caledonia",NZ:"New Zealander",NI:"Nicaraguan",NE:"Nigerien",NG:"Nigerian",NU:"Niue",NF:"Norfolk Island",MK:"Macedonian",MP:"Northern Mariana Islands",NO:"Norwegian",OM:"Omani",PK:"Pakistani",PW:"Palauan",PS:"Palestinian Territory, Occupied",PA:"Panamanian",PG:"Papua New Guinea",PY:"Paraguayan",PE:"Peruvian",PH:"Filipino",PN:"Pitcairn",PL:"Polish",PT:"Portuguese",PR:"Puerto Rico",QA:"Qatari",RE:"Reunion",RO:"Romanian",RU:"Russian",RW:"Rwandan",SH:"Saint Helena",KN:"Kittian and Nevisian",LC:"Saint Lucian",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoan",SM:"San Marinese",ST:"Sao Tomean",SA:"Saudi",SN:"Senegalese",SC:"Seychellois",SL:"Sierra Leonean",SG:"Singaporean",SK:"Slovakian",SI:"Slovenian",SB:"Solomon Islander",SO:"Somali",ZA:"South African",GS:"South Georgia and the South Sandwich Islands",ES:"Spanish",LK:"Sri Lankan",SD:"Sudanese",SR:"Surinamer",SJ:"Svalbard and Jan Mayen",SZ:"Swazi",SE:"Swedish",CH:"Swiss",SY:"Syrian",TW:"Taiwanese",TJ:"Tajik",TZ:"Tanzanian",TH:"Thai",TL:"East Timorese",TG:"Togolese",TK:"Tokelau",TO:"Tongan",TT:"Trinidadian or Tobagonian",TN:"Tunisian",TR:"Turkish",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvaluan",UG:"Ugandan",UA:"Ukrainian",AE:"Emirian",GB:"British",US:"American",UM:"United States Minor Outlying Islands",UY:"Uruguayan",UZ:"Uzbekistani",VU:"Vanuatu",VE:"Venezuelan",VN:"Vietnamese",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Welsh",EH:"Western Sahara",YE:"Yemenite",ZM:"Zambian",ZW:"Zimbabwean",AX:"Åland Islands",BQ:"Bonaire, Sint Eustatius and Saba",CW:"Curaçao",GG:"Guernsey",IM:"Manx",JE:"Jersey",ME:"Montenegrin",BL:"Saint Barthélemy",MF:"Saint Martin (French part)",RS:"Serbian",SX:"Sint Maarten (Dutch part)",SS:"South Sudan",XK:"Kosovo"},LC={locale:BC,nationalities:RC},TC="fr",PC={AF:"Afghan",AL:"Albanais",DZ:"Algérien",AD:"Andorran",AO:"Angolais",AG:"Antiguayen",AR:"Argentin",AM:"Arménien",AU:"Australien",AT:"Autrichien",AZ:"Azerbaïdjanais",BS:"Bahamien",BH:"Bahreïnien",BD:"Bangladais",BB:"Barbadien",BY:"Biélorusse",BE:"Belge",BZ:"Bélizien",BJ:"Béninois",BM:"Bermudien",BT:"Bhoutanais",BO:"Bolivien",BA:"Bosnien",BW:"Botswanais",BV:"Île Bouvet",BR:"Brésilien",IO:"Territoire britannique de l'océan Indien",BN:"Brunéien",BG:"Bulgare",BF:"Burkinabé",BI:"Burundais",KH:"Cambodgien",CM:"Camerounais",CA:"Canadien",CV:"Cap verdien",KY:"Caïmanien",CF:"Centrafricain",TD:"Tchadien",CL:"Chilien",CN:"Chinois",CX:"L'île Christmas",CC:"Îles Cocos",CO:"Colombien",KM:"Comorien",CG:"Congolais (République du Congo)",CD:"Congolais (République démocratique du Congo)",CK:"Îles Cook",CR:"Costaricain",CI:"Ivoirien",HR:"Croate",CU:"Cubain",CY:"Chypriote",CZ:"Tchèque",DK:"Danois",DJ:"Djiboutien",DM:"Dominicain (Dominique)",DO:"Dominicain (République dominicaine)",EC:"Équatorien",EG:"Égyptien",SV:"Salvadorien",GQ:"Équato-guinéen",ER:"Érythréen",EE:"Estonien",ET:"Éthiopien",FK:"Malouin",FO:"Féroïen",FJ:"Fidjien",FI:"Finlandais",FR:"Français",GF:"Français (Guyane)",PF:"Français (Polynésie française)",TF:"Français (TAAF)",GA:"Gabonais",GM:"Gambien",GE:"Géorgien",DE:"Allemand",GH:"Ghanéen",GI:"Gibraltariens",GR:"Grec",GL:"Groenlandais",GD:"Grenadien",GP:"Guadeloupéen",GU:"Guam",GT:"Guatémaltèque",GN:"Guinéen",GW:"Bissaoguinéen",GY:"Guyanais",HT:"Haïtien",HM:"Îles Heard-et-MacDonald",VA:"Saint-Siège (État de la cité du Vatican)",HN:"Hondurien",HK:"Hongkongais",HU:"Hongrois",IS:"Islandais",IN:"Indien",ID:"Indonésien",IR:"Iranien",IQ:"Irakien",IE:"Irlandais",IL:"Israélien",IT:"Italien",JM:"Jamaïquain",JP:"Japonais",JO:"Jordanien",KZ:"Kazakhstanais",KE:"Kényan",KI:"Kiribatiens",KP:"Nord coréen",KR:"Sud coréen",KW:"Koweïtien",KG:"Kirghiz",LA:"Laotien",LV:"Letton",LB:"Libanais",LS:"Mosotho",LR:"Liberian",LY:"Libyen",LI:"Liechtensteinois",LT:"Lituanien",LU:"Luxembourgeois",MO:"Macanéen",MG:"Malgache",MW:"Malawien",MY:"Malaisien",MV:"Maldivien",ML:"Malien",MT:"Maltais",MH:"Marshallais",MQ:"Martiniquais",MR:"Mauritanien",MU:"Mauricien",YT:"Mahorais",MX:"Mexicain",FM:"Micronésien",MD:"Moldave",MC:"Monégasque",MN:"Mongol",MS:"Montserratien",MA:"Marocain",MZ:"Mozambicain",MM:"Birman",NA:"Namibien",NR:"Nauruan",NP:"Népalais",NL:"Néerlandais",NC:"Néo-Calédonien",NZ:"Néo-Zélandais",NI:"Nicaraguayen",NE:"Nigérien",NG:"Nigérian",NU:"Niuéen",NF:"Norfolkais",MK:"Macédonien",MP:"Îles Mariannes du Nord",NO:"Norvégien",OM:"Omanais",PK:"Pakistanais",PW:"Palauan",PS:"Territoires Palestiniens, Occupés",PA:"Panaméen",PG:"Papouasien",PY:"Paraguayen",PE:"Péruvien",PH:"Philippin",PN:"Îles Pitcairn",PL:"Polonais",PT:"Portugais",PR:"Portoricain",QA:"Qatarien",RE:"Réunionnais",RO:"Roumain",RU:"Russe",RW:"Rwandais",SH:"Sainte Hélène",KN:"Afro-Kittitien et Afro-Nevisien",LC:"Saint-Lucien",PM:"Saint-Pierrais ou Miquelonais",VC:"Vincentais",WS:"Samoan",SM:"Saint-Marinais",ST:"Santoméen",SA:"Saoudien",SN:"Sénégalais",SC:"Seychellois",SL:"Sierra Léonais",SG:"Singapourien",SK:"Slovaque",SI:"Slovène",SB:"Salomonais",SO:"Somalien",ZA:"Sud Africain",GS:"Géorgie du Sud et les îles Sandwich du Sud",ES:"Espagnol",LK:"Sri Lankais",SD:"Soudanais",SR:"Surinamais",SJ:"Svalbard et Jan Mayen",SZ:"Swazi",SE:"Suédois",CH:"Suisse",SY:"Syrien",TW:"Taïwanais",TJ:"Tadjik",TZ:"Tanzanien",TH:"Thaïlandais",TL:"Est-Timorais",TG:"Togolais",TK:"Tokélaou",TO:"Tongien",TT:"Trinidadien ou Tobagonien",TN:"Tunisien",TR:"Turc",TM:"Turkmène",TC:"Îles Turques-et-Caïques",TV:"Tuvalais",UG:"Ougandais",UA:"Ukrainien",AE:"Émirien",GB:"Britannique",US:"Américain",UM:"Îles mineures éloignées des États-Unis",UY:"Uruguayen",UZ:"Ouzbek",VU:"Vanuatais",VE:"Vénézuélien",VN:"Vietnamien",VG:"Îles Vierges Britanniques",VI:"Îles Vierges Américaines",WF:"Gallois",EH:"Sahara Occidental",YE:"Yéménite",ZM:"Zambien",ZW:"Zimbabwéen",AX:"Îles Aland",BQ:"Pays-Bas Caribéens",CW:"Curacien",GG:"Guernesiais",IM:"Île de Man",JE:"Jersiais",ME:"Monténégrin",BL:"Saint-Barthélemy",MF:"Saint-Martinois (France)",RS:"Serbe",SX:"Saint-Martinois (Pays-Bas)",SS:"Sud-Soudanais",XK:"Kosovar"},OC={locale:TC,nationalities:PC};Bf.registerLocale(LC);Bf.registerLocale(OC);const ef=[{code:"CH",nameFr:"Suisse",nameEn:"Switzerland"},{code:"FR",nameFr:"France",nameEn:"France"},{code:"AF",nameFr:"Afghanistan",nameEn:"Afghanistan"},{code:"ZA",nameFr:"Afrique du Sud",nameEn:"South Africa"},{code:"AL",nameFr:"Albanie",nameEn:"Albania"},{code:"DZ",nameFr:"Algérie",nameEn:"Algeria"},{code:"DE",nameFr:"Allemagne",nameEn:"Germany"},{code:"AD",nameFr:"Andorre",nameEn:"Andorra"},{code:"AO",nameFr:"Angola",nameEn:"Angola"},{code:"SA",nameFr:"Arabie saoudite",nameEn:"Saudi Arabia"},{code:"AR",nameFr:"Argentine",nameEn:"Argentina"},{code:"AM",nameFr:"Arménie",nameEn:"Armenia"},{code:"AU",nameFr:"Australie",nameEn:"Australia"},{code:"AT",nameFr:"Autriche",nameEn:"Austria"},{code:"AZ",nameFr:"Azerbaïdjan",nameEn:"Azerbaijan"},{code:"BE",nameFr:"Belgique",nameEn:"Belgium"},{code:"BJ",nameFr:"Bénin",nameEn:"Benin"},{code:"BY",nameFr:"Biélorussie",nameEn:"Belarus"},{code:"BO",nameFr:"Bolivie",nameEn:"Bolivia"},{code:"BA",nameFr:"Bosnie-Herzégovine",nameEn:"Bosnia and Herzegovina"},{code:"BW",nameFr:"Botswana",nameEn:"Botswana"},{code:"BR",nameFr:"Brésil",nameEn:"Brazil"},{code:"BG",nameFr:"Bulgarie",nameEn:"Bulgaria"},{code:"BF",nameFr:"Burkina Faso",nameEn:"Burkina Faso"},{code:"BI",nameFr:"Burundi",nameEn:"Burundi"},{code:"KH",nameFr:"Cambodge",nameEn:"Cambodia"},{code:"CM",nameFr:"Cameroun",nameEn:"Cameroon"},{code:"CA",nameFr:"Canada",nameEn:"Canada"},{code:"CL",nameFr:"Chili",nameEn:"Chile"},{code:"CN",nameFr:"Chine",nameEn:"China"},{code:"CY",nameFr:"Chypre",nameEn:"Cyprus"},{code:"CO",nameFr:"Colombie",nameEn:"Colombia"},{code:"KR",nameFr:"Corée du Sud",nameEn:"South Korea"},{code:"CR",nameFr:"Costa Rica",nameEn:"Costa Rica"},{code:"CI",nameFr:"Côte d'Ivoire",nameEn:"Ivory Coast"},{code:"HR",nameFr:"Croatie",nameEn:"Croatia"},{code:"CU",nameFr:"Cuba",nameEn:"Cuba"},{code:"DK",nameFr:"Danemark",nameEn:"Denmark"},{code:"EG",nameFr:"Égypte",nameEn:"Egypt"},{code:"AE",nameFr:"Émirats arabes unis",nameEn:"United Arab Emirates"},{code:"EC",nameFr:"Équateur",nameEn:"Ecuador"},{code:"ES",nameFr:"Espagne",nameEn:"Spain"},{code:"EE",nameFr:"Estonie",nameEn:"Estonia"},{code:"US",nameFr:"États-Unis",nameEn:"United States"},{code:"ET",nameFr:"Éthiopie",nameEn:"Ethiopia"},{code:"FI",nameFr:"Finlande",nameEn:"Finland"},{code:"GA",nameFr:"Gabon",nameEn:"Gabon"},{code:"GE",nameFr:"Géorgie",nameEn:"Georgia"},{code:"GH",nameFr:"Ghana",nameEn:"Ghana"},{code:"GR",nameFr:"Grèce",nameEn:"Greece"},{code:"GT",nameFr:"Guatemala",nameEn:"Guatemala"},{code:"GN",nameFr:"Guinée",nameEn:"Guinea"},{code:"HT",nameFr:"Haïti",nameEn:"Haiti"},{code:"HN",nameFr:"Honduras",nameEn:"Honduras"},{code:"HU",nameFr:"Hongrie",nameEn:"Hungary"},{code:"IN",nameFr:"Inde",nameEn:"India"},{code:"ID",nameFr:"Indonésie",nameEn:"Indonesia"},{code:"IQ",nameFr:"Irak",nameEn:"Iraq"},{code:"IR",nameFr:"Iran",nameEn:"Iran"},{code:"IE",nameFr:"Irlande",nameEn:"Ireland"},{code:"IS",nameFr:"Islande",nameEn:"Iceland"},{code:"IL",nameFr:"Israël",nameEn:"Israel"},{code:"IT",nameFr:"Italie",nameEn:"Italy"},{code:"JM",nameFr:"Jamaïque",nameEn:"Jamaica"},{code:"JP",nameFr:"Japon",nameEn:"Japan"},{code:"JO",nameFr:"Jordanie",nameEn:"Jordan"},{code:"KZ",nameFr:"Kazakhstan",nameEn:"Kazakhstan"},{code:"KE",nameFr:"Kenya",nameEn:"Kenya"},{code:"XK",nameFr:"Kosovo",nameEn:"Kosovo"},{code:"KW",nameFr:"Koweït",nameEn:"Kuwait"},{code:"LV",nameFr:"Lettonie",nameEn:"Latvia"},{code:"LB",nameFr:"Liban",nameEn:"Lebanon"},{code:"LR",nameFr:"Liberia",nameEn:"Liberia"},{code:"LY",nameFr:"Libye",nameEn:"Libya"},{code:"LI",nameFr:"Liechtenstein",nameEn:"Liechtenstein"},{code:"LT",nameFr:"Lituanie",nameEn:"Lithuania"},{code:"LU",nameFr:"Luxembourg",nameEn:"Luxembourg"},{code:"MK",nameFr:"Macédoine du Nord",nameEn:"North Macedonia"},{code:"MG",nameFr:"Madagascar",nameEn:"Madagascar"},{code:"MY",nameFr:"Malaisie",nameEn:"Malaysia"},{code:"ML",nameFr:"Mali",nameEn:"Mali"},{code:"MT",nameFr:"Malte",nameEn:"Malta"},{code:"MA",nameFr:"Maroc",nameEn:"Morocco"},{code:"MX",nameFr:"Mexique",nameEn:"Mexico"},{code:"MD",nameFr:"Moldavie",nameEn:"Moldova"},{code:"MC",nameFr:"Monaco",nameEn:"Monaco"},{code:"MN",nameFr:"Mongolie",nameEn:"Mongolia"},{code:"ME",nameFr:"Monténégro",nameEn:"Montenegro"},{code:"MZ",nameFr:"Mozambique",nameEn:"Mozambique"},{code:"MM",nameFr:"Myanmar",nameEn:"Myanmar"},{code:"NA",nameFr:"Namibie",nameEn:"Namibia"},{code:"NP",nameFr:"Népal",nameEn:"Nepal"},{code:"NI",nameFr:"Nicaragua",nameEn:"Nicaragua"},{code:"NE",nameFr:"Niger",nameEn:"Niger"},{code:"NG",nameFr:"Nigeria",nameEn:"Nigeria"},{code:"NO",nameFr:"Norvège",nameEn:"Norway"},{code:"NZ",nameFr:"Nouvelle-Zélande",nameEn:"New Zealand"},{code:"OM",nameFr:"Oman",nameEn:"Oman"},{code:"UG",nameFr:"Ouganda",nameEn:"Uganda"},{code:"UZ",nameFr:"Ouzbékistan",nameEn:"Uzbekistan"},{code:"PK",nameFr:"Pakistan",nameEn:"Pakistan"},{code:"PA",nameFr:"Panama",nameEn:"Panama"},{code:"PY",nameFr:"Paraguay",nameEn:"Paraguay"},{code:"NL",nameFr:"Pays-Bas",nameEn:"Netherlands"},{code:"PE",nameFr:"Pérou",nameEn:"Peru"},{code:"PH",nameFr:"Philippines",nameEn:"Philippines"},{code:"PL",nameFr:"Pologne",nameEn:"Poland"},{code:"PT",nameFr:"Portugal",nameEn:"Portugal"},{code:"QA",nameFr:"Qatar",nameEn:"Qatar"},{code:"CZ",nameFr:"République tchèque",nameEn:"Czech Republic"},{code:"RO",nameFr:"Roumanie",nameEn:"Romania"},{code:"GB",nameFr:"Royaume-Uni",nameEn:"United Kingdom"},{code:"RU",nameFr:"Russie",nameEn:"Russia"},{code:"RW",nameFr:"Rwanda",nameEn:"Rwanda"},{code:"SN",nameFr:"Sénégal",nameEn:"Senegal"},{code:"RS",nameFr:"Serbie",nameEn:"Serbia"},{code:"SG",nameFr:"Singapour",nameEn:"Singapore"},{code:"SK",nameFr:"Slovaquie",nameEn:"Slovakia"},{code:"SI",nameFr:"Slovénie",nameEn:"Slovenia"},{code:"SO",nameFr:"Somalie",nameEn:"Somalia"},{code:"SD",nameFr:"Soudan",nameEn:"Sudan"},{code:"LK",nameFr:"Sri Lanka",nameEn:"Sri Lanka"},{code:"SE",nameFr:"Suède",nameEn:"Sweden"},{code:"SY",nameFr:"Syrie",nameEn:"Syria"},{code:"TZ",nameFr:"Tanzanie",nameEn:"Tanzania"},{code:"TD",nameFr:"Tchad",nameEn:"Chad"},{code:"TH",nameFr:"Thaïlande",nameEn:"Thailand"},{code:"TG",nameFr:"Togo",nameEn:"Togo"},{code:"TN",nameFr:"Tunisie",nameEn:"Tunisia"},{code:"TR",nameFr:"Turquie",nameEn:"Turkey"},{code:"UA",nameFr:"Ukraine",nameEn:"Ukraine"},{code:"UY",nameFr:"Uruguay",nameEn:"Uruguay"},{code:"VE",nameFr:"Venezuela",nameEn:"Venezuela"},{code:"VN",nameFr:"Viêt Nam",nameEn:"Vietnam"},{code:"YE",nameFr:"Yémen",nameEn:"Yemen"},{code:"ZM",nameFr:"Zambie",nameEn:"Zambia"},{code:"ZW",nameFr:"Zimbabwe",nameEn:"Zimbabwe"}];function zC(r){const t=["CH","FR"],a=ef.filter(f=>t.includes(f.code)),l=ef.filter(f=>!t.includes(f.code)),s=f=>r==="fr"?f.nameFr:f.nameEn,u=f=>({code:f.code,name:s(f)});return[...a.map(u),...l.map(u).sort((f,h)=>f.name.localeCompare(h.name))]}function FC(r){const t=r==="fr"?"fr":"en",a=["CH","FR"],s=ef.map(h=>h.code).map(h=>({code:h,name:Bf.getName(h,t)||h})),u=s.filter(h=>a.includes(h.code)),f=s.filter(h=>!a.includes(h.code)).sort((h,m)=>h.name.localeCompare(m.name));return[...u,...f]}function nf({selected:r,onClick:t,children:a,sm:l,className:s}){return y.jsxs("button",{type:"button",onClick:t,className:we("choice-btn flex-1 border",l&&"choice-btn--sm",r?"choice-btn--selected":"choice-btn--unselected",s),children:[r&&y.jsx(Df,{className:"w-4 h-4 absolute top-2 right-2"}),a]})}const af=D.forwardRef(({className:r,...t},a)=>y.jsx(ep,{ref:a,className:we("peer h-4 w-4 shrink-0 rounded-sm border border-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white cursor-pointer",r),...t,children:y.jsx(r4,{className:we("flex items-center justify-center text-current"),children:y.jsx(Ef,{className:"h-4 w-4"})})}));af.displayName=ep.displayName;const kC=l4,GC=t4,B2=D.forwardRef(({className:r,...t},a)=>y.jsx(np,{ref:a,className:we("fixed inset-0 z-50 bg-black/40",r),...t}));B2.displayName=np.displayName;const R2=D.forwardRef(({className:r,children:t,...a},l)=>y.jsxs(GC,{children:[y.jsx(B2,{}),y.jsxs(ap,{ref:l,className:we("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-white p-6 shadow-lg sm:rounded-lg font-[var(--font-sans-serif)]",r),...a,children:[t,y.jsxs(i4,{className:"absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 cursor-pointer",children:[y.jsx(wf,{className:"h-4 w-4"}),y.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));R2.displayName=ap.displayName;const jC=({className:r,...t})=>y.jsx("div",{className:we("flex flex-col space-y-1.5 text-center sm:text-left",r),...t}),L2=D.forwardRef(({className:r,...t},a)=>y.jsx(rp,{ref:a,className:we("text-lg font-semibold leading-none tracking-tight",r),...t}));L2.displayName=rp.displayName;const HC=D.forwardRef(({className:r,...t},a)=>y.jsx(tp,{ref:a,className:we("text-sm text-slate-500",r),...t}));HC.displayName=tp.displayName;var _C=Object.defineProperty,VC=Object.defineProperties,IC=Object.getOwnPropertyDescriptors,Hs=Object.getOwnPropertySymbols,T2=Object.prototype.hasOwnProperty,P2=Object.prototype.propertyIsEnumerable,Y0=(r,t,a)=>t in r?_C(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,JC=(r,t)=>{for(var a in t||(t={}))T2.call(t,a)&&Y0(r,a,t[a]);if(Hs)for(var a of Hs(t))P2.call(t,a)&&Y0(r,a,t[a]);return r},qC=(r,t)=>VC(r,IC(t)),UC=(r,t)=>{var a={};for(var l in r)T2.call(r,l)&&t.indexOf(l)<0&&(a[l]=r[l]);if(r!=null&&Hs)for(var l of Hs(r))t.indexOf(l)<0&&P2.call(r,l)&&(a[l]=r[l]);return a};function KC(r){let t=setTimeout(r,0),a=setTimeout(r,10),l=setTimeout(r,50);return[t,a,l]}function YC(r){let t=D.useRef();return D.useEffect(()=>{t.current=r}),t.current}var ZC=18,O2=40,XC=`${O2}px`,QC=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function WC({containerRef:r,inputRef:t,pushPasswordManagerStrategy:a,isFocused:l}){let[s,u]=D.useState(!1),[f,h]=D.useState(!1),[m,p]=D.useState(!1),v=D.useMemo(()=>a==="none"?!1:(a==="increase-width"||a==="experimental-no-flickering")&&s&&f,[s,f,a]),g=D.useCallback(()=>{let S=r.current,x=t.current;if(!S||!x||m||a==="none")return;let M=S,E=M.getBoundingClientRect().left+M.offsetWidth,w=M.getBoundingClientRect().top+M.offsetHeight/2,A=E-ZC,L=w;document.querySelectorAll(QC).length===0&&document.elementFromPoint(A,L)===S||(u(!0),p(!0))},[r,t,m,a]);return D.useEffect(()=>{let S=r.current;if(!S||a==="none")return;function x(){let E=window.innerWidth-S.getBoundingClientRect().right;h(E>=O2)}x();let M=setInterval(x,1e3);return()=>{clearInterval(M)}},[r,a]),D.useEffect(()=>{let S=l||document.activeElement===t.current;if(a==="none"||!S)return;let x=setTimeout(g,0),M=setTimeout(g,2e3),E=setTimeout(g,5e3),w=setTimeout(()=>{p(!0)},6e3);return()=>{clearTimeout(x),clearTimeout(M),clearTimeout(E),clearTimeout(w)}},[t,l,a,g]),{hasPWMBadge:s,willPushPWMBadge:v,PWM_BADGE_SPACE_WIDTH:XC}}var z2=D.createContext({}),F2=D.forwardRef((r,t)=>{var a=r,{value:l,onChange:s,maxLength:u,textAlign:f="left",pattern:h,placeholder:m,inputMode:p="numeric",onComplete:v,pushPasswordManagerStrategy:g="increase-width",pasteTransformer:S,containerClassName:x,noScriptCSSFallback:M=$C,render:E,children:w}=a,A=UC(a,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]),L,G,N,H,V;let[U,X]=D.useState(typeof A.defaultValue=="string"?A.defaultValue:""),z=l??U,O=YC(z),Q=D.useCallback(de=>{s==null||s(de),X(de)},[s]),q=D.useMemo(()=>h?typeof h=="string"?new RegExp(h):h:null,[h]),J=D.useRef(null),$=D.useRef(null),ee=D.useRef({value:z,onChange:Q,isIOS:typeof window<"u"&&((G=(L=window==null?void 0:window.CSS)==null?void 0:L.supports)==null?void 0:G.call(L,"-webkit-touch-callout","none"))}),R=D.useRef({prev:[(N=J.current)==null?void 0:N.selectionStart,(H=J.current)==null?void 0:H.selectionEnd,(V=J.current)==null?void 0:V.selectionDirection]});D.useImperativeHandle(t,()=>J.current,[]),D.useEffect(()=>{let de=J.current,me=$.current;if(!de||!me)return;ee.current.value!==de.value&&ee.current.onChange(de.value),R.current.prev=[de.selectionStart,de.selectionEnd,de.selectionDirection];function Ze(){if(document.activeElement!==de){be(null),ce(null);return}let ve=de.selectionStart,fn=de.selectionEnd,ya=de.selectionDirection,ze=de.maxLength,wn=de.value,qe=R.current.prev,Kn=-1,Me=-1,Ue;if(wn.length!==0&&ve!==null&&fn!==null){let Gt=ve===fn,ja=ve===wn.length&&wn.length<ze;if(Gt&&!ja){let In=ve;if(In===0)Kn=0,Me=1,Ue="forward";else if(In===ze)Kn=In-1,Me=In,Ue="backward";else if(ze>1&&wn.length>1){let xn=0;if(qe[0]!==null&&qe[1]!==null){Ue=In<qe[1]?"backward":"forward";let ia=qe[0]===qe[1]&&qe[0]<ze;Ue==="backward"&&!ia&&(xn=-1)}Kn=xn+In,Me=xn+In+1}}Kn!==-1&&Me!==-1&&Kn!==Me&&J.current.setSelectionRange(Kn,Me,Ue)}let ln=Kn!==-1?Kn:ve,Ta=Me!==-1?Me:fn,Pa=Ue??ya;be(ln),ce(Ta),R.current.prev=[ln,Ta,Pa]}if(document.addEventListener("selectionchange",Ze,{capture:!0}),Ze(),document.activeElement===de&&se(!0),!document.getElementById("input-otp-style")){let ve=document.createElement("style");if(ve.id="input-otp-style",document.head.appendChild(ve),ve.sheet){let fn="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";Il(ve.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),Il(ve.sheet,`[data-input-otp]:autofill { ${fn} }`),Il(ve.sheet,`[data-input-otp]:-webkit-autofill { ${fn} }`),Il(ve.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),Il(ve.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let Je=()=>{me&&me.style.setProperty("--root-height",`${de.clientHeight}px`)};Je();let tn=new ResizeObserver(Je);return tn.observe(de),()=>{document.removeEventListener("selectionchange",Ze,{capture:!0}),tn.disconnect()}},[]);let[I,W]=D.useState(!1),[ie,se]=D.useState(!1),[re,be]=D.useState(null),[ae,ce]=D.useState(null);D.useEffect(()=>{KC(()=>{var de,me,Ze,Je;(de=J.current)==null||de.dispatchEvent(new Event("input"));let tn=(me=J.current)==null?void 0:me.selectionStart,ve=(Ze=J.current)==null?void 0:Ze.selectionEnd,fn=(Je=J.current)==null?void 0:Je.selectionDirection;tn!==null&&ve!==null&&(be(tn),ce(ve),R.current.prev=[tn,ve,fn])})},[z,ie]),D.useEffect(()=>{O!==void 0&&z!==O&&O.length<u&&z.length===u&&(v==null||v(z))},[u,v,O,z]);let ge=WC({containerRef:$,inputRef:J,pushPasswordManagerStrategy:g,isFocused:ie}),Ie=D.useCallback(de=>{let me=de.currentTarget.value.slice(0,u);if(me.length>0&&q&&!q.test(me)){de.preventDefault();return}typeof O=="string"&&me.length<O.length&&document.dispatchEvent(new Event("selectionchange")),Q(me)},[u,Q,O,q]),$e=D.useCallback(()=>{var de;if(J.current){let me=Math.min(J.current.value.length,u-1),Ze=J.current.value.length;(de=J.current)==null||de.setSelectionRange(me,Ze),be(me),ce(Ze)}se(!0)},[u]),Ae=D.useCallback(de=>{var me,Ze;let Je=J.current;if(!S&&(!ee.current.isIOS||!de.clipboardData||!Je))return;let tn=de.clipboardData.getData("text/plain"),ve=S?S(tn):tn;de.preventDefault();let fn=(me=J.current)==null?void 0:me.selectionStart,ya=(Ze=J.current)==null?void 0:Ze.selectionEnd,ze=(fn!==ya?z.slice(0,fn)+ve+z.slice(ya):z.slice(0,fn)+ve+z.slice(fn)).slice(0,u);if(ze.length>0&&q&&!q.test(ze))return;Je.value=ze,Q(ze);let wn=Math.min(ze.length,u-1),qe=ze.length;Je.setSelectionRange(wn,qe),be(wn),ce(qe)},[u,Q,q,z]),Cn=D.useMemo(()=>({position:"relative",cursor:A.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[A.disabled]),jn=D.useMemo(()=>({position:"absolute",inset:0,width:ge.willPushPWMBadge?`calc(100% + ${ge.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:ge.willPushPWMBadge?`inset(0 ${ge.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:f,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[ge.PWM_BADGE_SPACE_WIDTH,ge.willPushPWMBadge,f]),Hn=D.useMemo(()=>D.createElement("input",qC(JC({autoComplete:A.autoComplete||"one-time-code"},A),{"data-input-otp":!0,"data-input-otp-placeholder-shown":z.length===0||void 0,"data-input-otp-mss":re,"data-input-otp-mse":ae,inputMode:p,pattern:q==null?void 0:q.source,"aria-placeholder":m,style:jn,maxLength:u,value:z,ref:J,onPaste:de=>{var me;Ae(de),(me=A.onPaste)==null||me.call(A,de)},onChange:Ie,onMouseOver:de=>{var me;W(!0),(me=A.onMouseOver)==null||me.call(A,de)},onMouseLeave:de=>{var me;W(!1),(me=A.onMouseLeave)==null||me.call(A,de)},onFocus:de=>{var me;$e(),(me=A.onFocus)==null||me.call(A,de)},onBlur:de=>{var me;se(!1),(me=A.onBlur)==null||me.call(A,de)}})),[Ie,$e,Ae,p,jn,u,ae,re,A,q==null?void 0:q.source,z]),Tn=D.useMemo(()=>({slots:Array.from({length:u}).map((de,me)=>{var Ze;let Je=ie&&re!==null&&ae!==null&&(re===ae&&me===re||me>=re&&me<ae),tn=z[me]!==void 0?z[me]:null,ve=z[0]!==void 0?null:(Ze=m==null?void 0:m[me])!=null?Ze:null;return{char:tn,placeholderChar:ve,isActive:Je,hasFakeCaret:Je&&tn===null}}),isFocused:ie,isHovering:!A.disabled&&I}),[ie,I,u,ae,re,A.disabled,z]),Qa=D.useMemo(()=>E?E(Tn):D.createElement(z2.Provider,{value:Tn},w),[w,Tn,E]);return D.createElement(D.Fragment,null,M!==null&&D.createElement("noscript",null,D.createElement("style",null,M)),D.createElement("div",{ref:$,"data-input-otp-container":!0,style:Cn,className:x},Qa,D.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Hn)))});F2.displayName="Input";function Il(r,t){try{r.insertRule(t)}catch{console.error("input-otp could not insert CSS rule:",t)}}var $C=`
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
}`;function ex({className:r,containerClassName:t,...a}){return y.jsx(F2,{"data-slot":"input-otp",containerClassName:we("flex items-center gap-2 has-disabled:opacity-50",t),className:we("disabled:cursor-not-allowed",r),...a})}function nx({className:r,...t}){return y.jsx("div",{"data-slot":"input-otp-group",className:we("flex items-center",r),...t})}function ax({index:r,className:t,...a}){const l=D.useContext(z2),{char:s,hasFakeCaret:u,isActive:f}=(l==null?void 0:l.slots[r])??{};return y.jsxs("div",{"data-slot":"input-otp-slot","data-active":f,className:we("border-input relative flex items-center justify-center border rounded-lg text-sm font-semibold transition-all outline-none data-[active=true]:border-[var(--brand-primary)] data-[active=true]:ring-2 data-[active=true]:ring-[var(--brand-primary)]/30 data-[active=true]:z-10",t),...a,children:[s,u&&y.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:y.jsx("div",{className:"animate-caret-blink bg-foreground h-4 w-px duration-1000"})})]})}const Rf=f4,Lf=h4,Qs=D.forwardRef(({className:r,children:t,...a},l)=>y.jsxs(ip,{ref:l,className:we("flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[var(--brand-primary)] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer [&>span]:line-clamp-1",r),...a,children:[t,y.jsx(o4,{asChild:!0,children:y.jsx(Xs,{className:"h-4 w-4 opacity-50"})})]}));Qs.displayName=ip.displayName;const k2=D.forwardRef(({className:r,...t},a)=>y.jsx(lp,{ref:a,className:we("flex cursor-default items-center justify-center py-1",r),...t,children:y.jsx(wM,{className:"h-4 w-4"})}));k2.displayName=lp.displayName;const G2=D.forwardRef(({className:r,...t},a)=>y.jsx(op,{ref:a,className:we("flex cursor-default items-center justify-center py-1",r),...t,children:y.jsx(Xs,{className:"h-4 w-4"})}));G2.displayName=op.displayName;const Ws=D.forwardRef(({className:r,children:t,position:a="popper",...l},s)=>y.jsx(s4,{children:y.jsxs(sp,{ref:s,className:we("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md bg-white shadow-md font-['Simplon_Norm',sans-serif]",a==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",r),position:a,...l,children:[y.jsx(k2,{}),y.jsx(u4,{className:we("p-1",a==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),y.jsx(G2,{})]})}));Ws.displayName=sp.displayName;const et=D.forwardRef(({className:r,children:t,...a},l)=>y.jsxs(up,{ref:l,className:we("relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-3 text-sm outline-none data-[highlighted]:bg-slate-50 data-[state=checked]:bg-sky-50 data-[state=checked]:text-[var(--brand-text)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...a,children:[y.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:y.jsx(c4,{children:y.jsx(Ef,{className:"h-4 w-4 text-[var(--brand-primary)]"})})}),y.jsx(d4,{children:t})]}));et.displayName=up.displayName;const Tf={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},rx={row:"flex-row",column:"flex-col"},Pf={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},En=D.forwardRef(({className:r,align:t="center",justify:a,gap:l,wrap:s,grow:u,...f},h)=>y.jsx("div",{ref:h,className:we("flex flex-row",Tf[t],a&&Pf[a],l!=null&&`gap-${l}`,s&&"flex-wrap",u&&"flex-1",r),...f}));En.displayName="HStack";const Ve=D.forwardRef(({className:r,align:t,justify:a,gap:l,wrap:s,grow:u,...f},h)=>y.jsx("div",{ref:h,className:we("flex flex-col",t&&Tf[t],a&&Pf[a],l!=null&&`gap-${l}`,s&&"flex-wrap",u&&"flex-1",r),...f}));Ve.displayName="VStack";const tx=D.forwardRef(({className:r,direction:t="column",align:a,justify:l,gap:s,wrap:u,grow:f,...h},m)=>y.jsx("div",{ref:m,className:we("flex",rx[t],a&&Tf[a],l&&Pf[l],s!=null&&`gap-${s}`,u&&"flex-wrap",f&&"flex-1",r),...h}));tx.displayName="Stack";const Hi={primary:"text-[var(--brand-text)]!",error:"text-[var(--brand-error)]!",success:"text-[var(--brand-success)]!",muted:"text-slate-600!","muted-light":"text-slate-500!",white:"text-white!"},j2={xs:"text-xs!",sm:"text-sm!",md:"text-base!",lg:"text-lg!"},Mr=D.forwardRef(({className:r,color:t,...a},l)=>y.jsx("h1",{ref:l,className:we("text-2xl! font-bold! tracking-tight!",t&&Hi[t],r),...a}));Mr.displayName="H1";const ix=D.forwardRef(({className:r,color:t,...a},l)=>y.jsx("h2",{ref:l,className:we("text-xl! font-semibold! tracking-tight!",t&&Hi[t],r),...a}));ix.displayName="H2";const kt=D.forwardRef(({className:r,color:t,...a},l)=>y.jsx("h3",{ref:l,className:we("text-lg! font-semibold! tracking-tight! form-section-title",t&&Hi[t],r),...a}));kt.displayName="H3";const lx=D.forwardRef(({className:r,color:t,...a},l)=>y.jsx("h4",{ref:l,className:we("text-base! font-semibold! tracking-tight!",t&&Hi[t],r),...a}));lx.displayName="H4";const Ra=D.forwardRef(({className:r,color:t,size:a,...l},s)=>y.jsx("p",{ref:s,className:we("text-sm! leading-normal! text-foreground!",a&&j2[a],t&&Hi[t],r),...l}));Ra.displayName="P";const ox=D.forwardRef(({className:r,color:t,size:a,...l},s)=>y.jsx("p",{ref:s,className:we("text-sm! text-muted-foreground!",a&&j2[a],t&&Hi[t],r),...l}));ox.displayName="Muted";const Dn=D.forwardRef(({label:r,error:t,optional:a,className:l,inputClassName:s,id:u,...f},h)=>{const m=u??r.toLowerCase().replace(/\s+/g,"-");return y.jsxs(Ve,{className:we("space-y-2",l),children:[y.jsxs($l,{htmlFor:m,className:"text-sm font-medium text-[var(--brand-text)] leading-3",children:[r,f.required&&y.jsx("span",{className:"text-[var(--brand-error)] ml-0.5",children:"*"}),a&&y.jsxs("span",{className:"text-slate-400 font-normal ml-1",children:["(",a,")"]})]}),y.jsx(N2,{ref:h,id:m,className:we("form-input",t&&"border-[var(--brand-error)] focus-visible:ring-[var(--brand-error)]",s),...f}),t&&y.jsxs("div",{className:"form-error-inline-tight",children:[y.jsx(Sr,{className:"form-error-icon"}),y.jsx("span",{children:t})]})]})});Dn.displayName="FormInput";const Of="/assets/images/logo-hlt-SDnMJMTh.png";function sx(){const{setValue:r,watch:t}=Gn(),a=t("language"),{t:l}=Ye("invalidLink");return y.jsx("div",{className:"step-card",children:y.jsxs(Ve,{className:"step-card-header",gap:"6",children:[y.jsx(En,{justify:"center",className:"mb-6",children:y.jsx("img",{src:Of,alt:"Hôpital de La Tour",className:"h-16"})}),y.jsxs(En,{justify:"between",className:"gap-2 mb-4",children:[y.jsxs(En,{gap:"1",children:[y.jsx(v2,{className:"w-4 h-4 text-[var(--brand-primary)]"}),y.jsx(Ra,{children:l("selectLanguage")})]}),y.jsxs(Rf,{value:a,onValueChange:s=>r("language",s),children:[y.jsx(Qs,{className:"w-[140px] text-sm py-1.5",children:y.jsx(Lf,{})}),y.jsxs(Ws,{children:[y.jsx(et,{value:"fr",children:"Français"}),y.jsx(et,{value:"en",children:"English"})]})]})]}),y.jsxs(Ve,{gap:"2",children:[y.jsxs(En,{gap:"2",align:"center",justify:"center",children:[y.jsx(BM,{className:"w-6 h-6 text-error flex-shrink-0"}),y.jsx(Mr,{children:l("title")})]}),y.jsxs(Ve,{gap:"1",children:[y.jsx(Ra,{color:"muted",className:"text-center text-base leading-relaxed",children:l("message")}),y.jsx(Ra,{color:"muted-light",className:"text-sm text-center",children:l("contact")})]})]}),y.jsx(pa,{variant:"outline",asChild:!0,className:"w-full h-14 gap-2",children:y.jsxs("a",{href:l("emailLink"),children:[y.jsx(LM,{className:"w-4 h-4"}),l("emailLabel"),": ",l("emailAddress")]})})]})})}function ux(){const{t:r}=Ye("loading");return y.jsxs("div",{className:"text-center",children:[y.jsx(at,{className:"w-12 h-12 text-[var(--brand-primary)] animate-spin mx-auto mb-4"}),y.jsx("p",{className:"text-slate-600",children:r("message")})]})}const zd=["qualification","admin","success"];function cx({currentStep:r}){const{t}=Ye("progress"),a=zd.indexOf(r);return y.jsx("div",{className:"w-full pt-6 pb-4 relative z-20 px-6 sm:px-8",children:y.jsx("div",{className:"max-w-2xl mx-auto",children:y.jsx("div",{className:"max-w-md mx-auto px-2",children:y.jsxs("div",{className:"flex items-start justify-between relative px-4",children:[y.jsx("div",{className:"absolute top-5 h-0.5 bg-slate-200",style:{left:"calc(16.67% + 4px)",right:"calc(16.67% + 4px)"},children:y.jsx("div",{className:"h-full transition-all duration-500 ease-out",style:{background:"linear-gradient(to right, var(--brand-primary), var(--brand-primary-hover))",width:`${a/(zd.length-1)*100}%`}})}),zd.map((l,s)=>{const u=s<a,f=s===a;return y.jsxs("div",{className:"flex flex-col items-center relative z-10 flex-1",children:[y.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${u?"text-white scale-100":f?"text-white scale-110":"bg-white border-2 border-slate-200 text-slate-400"}`,style:u?{backgroundColor:"var(--brand-success)"}:f?{backgroundColor:"var(--brand-primary)",boxShadow:"0 10px 15px -3px color-mix(in srgb, var(--brand-primary) 30%, transparent)"}:void 0,children:u?y.jsx(Ef,{className:"w-5 h-5",strokeWidth:3}):y.jsx("span",{className:"text-sm font-semibold",children:s+1})}),y.jsx("span",{className:`mt-3 text-xs sm:text-sm text-center transition-all leading-tight max-w-[90px] ${f?"font-bold":u?"font-medium":"text-slate-500 font-medium"}`,style:f?{color:"var(--brand-primary)"}:u?{color:"var(--brand-success)"}:void 0,children:t(l)})]},l)})]})})})})}function dx(){const r=Ga(),{t}=Ye("notFound");return y.jsx("div",{className:"step-card",children:y.jsxs(Ve,{className:"step-card-header",gap:"6",children:[y.jsx(En,{justify:"center",className:"mb-6",children:y.jsx("img",{src:Of,alt:"Hôpital de La Tour",className:"h-16",width:"122",height:"64"})}),y.jsxs(Ve,{gap:"2",children:[y.jsxs(En,{gap:"2",align:"center",justify:"center",children:[y.jsx(PM,{className:"w-6 h-6 text-slate-400 flex-shrink-0"}),y.jsx(Mr,{children:t("title")})]}),y.jsx(Ra,{color:"muted",className:"text-center text-base leading-relaxed",children:t("message")})]}),y.jsxs(pa,{onClick:()=>void r({to:"/"}),className:"w-full h-12 text-base active-scale hover:bg-[var(--brand-primary-hover)]",children:[y.jsx(Ys,{className:"w-4 h-4 mr-2"}),t("button")]})]})})}function fx(){const{t:r}=Ye("loading");return y.jsxs("div",{className:"text-center",children:[y.jsx(at,{className:"w-12 h-12 text-[var(--brand-primary)] animate-spin mx-auto mb-4"}),y.jsx("p",{className:"text-slate-600",children:r("short")})]})}const Pt={VALIDATE_LINK:"/_api/serverlogics/getpread",VERIFY_BIRTH:"/_api/serverlogics/getbirth",SET_STEP:"/_api/serverlogics/setstep",GET_PHONE:"/_api/serverlogics/getphone",GET_FLOWS:"/_api/serverlogics/getflows",CLOUD_FLOW:"/_api/cloudflow/v1.0/trigger",CSRF_TOKEN:"/_layout/tokenhtml"},hx={landing:100000001,security:100000002,otp:100000003,qualification:100000004,admin:100000005,success:100000006},xt=r=>new Promise(t=>setTimeout(t,r));function rf(r){try{return sessionStorage.getItem(`__test_${r}`)}catch{return null}}function mx(){if(rf("ocr_timeout")==="true")return 15e3;const r=rf("ocr_delay")??void 0;return r?Number(r):2e3}const gx={async validatePreadmissionLink(r){return await xt(800),{isValid:!!r&&r!=="invalid"}},async verifyBirthDate(r,t){return await xt(800),{isValid:t==="1989-06-12"}},async getPhoneLastDigits(r){return await xt(300),{lastDigits:"1234"}},async sendOtp(r,t){return await xt(500),{success:!0}},async verifyOTP(r,t){return await xt(800),{isValid:t==="123456"}},async extractDocumentData(r,t){return await xt(mx()),t==="identity"?{lastName:"Dupont",firstNames:"Jean Pierre",firstName:"Jean Pierre",gender:"male",nationality:"CH"}:{street:"Rue du Lac 15",city:"Geneve",zipCode:"1200",country:"CH",avsNumber:"756.1234.5678.90",kvgCardNumber:rf("ocr_not_covered")==="true"||!1?"not_covered":"80756012345678901234",kvgInsuranceName:"CSS Assurance",vvgCardNumber:"80756098765432109876"}},async submitPreadmission(r){return await xt(1500),{status:"success",confirmationNumber:`PREAD-MOCK-${Date.now()}`}}};let Fd=null,Ni=null;function zf(){const r=window.location.hostname;return r==="localhost"||r==="127.0.0.1"||r.startsWith("192.168.")||r.startsWith("10.")}async function H2(){if(Fd)return Fd;const t=await(await fetch(Pt.CSRF_TOKEN)).text(),s=new DOMParser().parseFromString(t,"text/html").querySelector('input[name="__RequestVerificationToken"]'),u=(s==null?void 0:s.getAttribute("value"))??"";return Fd=u,u}async function Zl(r,t,a){const l=await H2(),s={method:t,headers:{__RequestVerificationToken:l,"content-type":"application/json","x-requested-with":"XMLHttpRequest"}};a&&(s.body=JSON.stringify(a));const f=await(await fetch(r,s)).json();if(!f.success)throw new Error("API call failed");return JSON.parse(f.data)}async function vs(r,t){const a=await H2(),l=`${Pt.CLOUD_FLOW}/${r}`,s=`eventData=${encodeURIComponent(JSON.stringify(t))}`;let f=await(await fetch(l,{method:"POST",headers:{__RequestVerificationToken:a,"content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-requested-with":"XMLHttpRequest"},body:s})).json();return f&&typeof f=="object"&&"json"in f&&typeof f.json=="string"&&(f=JSON.parse(f.json)),f&&typeof f=="object"&&"data"in f&&"status"in f?f.data:f}async function Ss(){if(Ni)return Ni;if(zf())return Ni={identityDoc:"PROD_IDENTITY_TRIGGER_ID_A_CONFIGURER",insuranceDoc:"PROD_INSURANCE_TRIGGER_ID_A_CONFIGURER",submitflow:"",sendOtp:"",verifyOtp:""},Ni;const r=await Zl(Pt.GET_FLOWS,"GET");console.log("[getCloudFlowConfig] getflows response:",r);const t=r.data;return Ni={identityDoc:t.identityDoc??t.identitydoc??"",insuranceDoc:t.insuranceDoc??t.insurancedoc??"",submitflow:t.submitflow??t.submitFlow??"",sendOtp:t.sendOtp??t.sendotp??"",verifyOtp:t.verifyOtp??t.verifyotp??""},Ni}function px(r){const t=$d(r.last_name??""),a=CC(r.first_names??"");return{lastName:t,firstNames:a,firstName:a,gender:r.gender??"",nationality:r.nationality??""}}function yx(r){return{street:r.rue??"",city:$d(r.ville??""),zipCode:r.zip??"",country:r.country??"",avsNumber:r.avs??"",kvgCardNumber:r.kvg_carte_no??"",kvgInsuranceName:$d(r.kvg_insurance??""),vvgCardNumber:r.vvg_carte_no??""}}const bx={async validatePreadmissionLink(r){return Zl(`${Pt.VALIDATE_LINK}?preadmissionId=${r}`,"GET")},async verifyBirthDate(r,t){const[a,l,s]=t.split("-"),u=`${s}/${l}/${a}`;return Zl(`${Pt.VERIFY_BIRTH}?preadmissionId=${r}`,"POST",{birthdate:u})},async getPhoneLastDigits(r){return Zl(`${Pt.GET_PHONE}?preadmissionId=${r}`,"GET")},async sendOtp(r,t){const a=await Ss();return vs(a.sendOtp,{number:r,language:t??"fr"})},async verifyOTP(r,t){const a=await Ss(),l=await vs(a.verifyOtp,{number:r,code:t});return typeof l=="string"?{isValid:l==="True"}:l},async extractDocumentData(r,t){const a=await Ss(),l=t==="identity"?a.identityDoc:a.insuranceDoc,u=await vs(l,{doc:t==="identity"?"identityid":"insuranceid",base64:r});return t==="identity"?px(u):yx(u)},async submitPreadmission(r){const t=await Ss();return vs(t.submitflow,{json:JSON.stringify(r)})}};async function vx(r,t){const a=hx[t];a!==void 0&&(zf()||await Zl(`${Pt.SET_STEP}?preadmissionId=${r}`,"PUT",{Stage:a}))}function eo(){return{...zf()?gx:bx,setStep:vx}}const Sx={language:"fr",preadmissionId:"",birthDate:"",otpCode:"",reason:"illness",insurance:"swiss",hasEmployer:!1,consentNLPD:!1,consentMarketing:!1,identityCard:null,insuranceCard:null,identityCardBase64:"",identityCardMimeType:"",insuranceCardBase64:"",insuranceCardMimeType:"",firstName:"",lastName:"",birthDatePersonal:"",gender:"",nationality:"",avsNumber:"",street:"",npa:"",city:"",country:"",email:"",profession:"",employerName:"",employerAddress:"",referringDoctor:"",generalPractitioner:"",accidentDate:"",accidentInsurance:"",claimNumber:"",basicInsurance:"",cardNumber:"",policyNumber:"",complementaryInsurance:"",ocrTimedOut:!1,insuranceCardError:""};function Mx(r){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t.appendChild(a),a.styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r))}const Cx=r=>{switch(r){case"success":return Ex;case"info":return wx;case"warning":return Dx;case"error":return Nx;default:return null}},xx=Array(12).fill(0),Ax=({visible:r,className:t})=>ne.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":r},ne.createElement("div",{className:"sonner-spinner"},xx.map((a,l)=>ne.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${l}`})))),Ex=ne.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ne.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Dx=ne.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},ne.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),wx=ne.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ne.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Nx=ne.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ne.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Bx=ne.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},ne.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ne.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Rx=()=>{const[r,t]=ne.useState(document.hidden);return ne.useEffect(()=>{const a=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",a),()=>window.removeEventListener("visibilitychange",a)},[]),r};let tf=1;class Lx{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{const a=this.subscribers.indexOf(t);this.subscribers.splice(a,1)}),this.publish=t=>{this.subscribers.forEach(a=>a(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var a;const{message:l,...s}=t,u=typeof(t==null?void 0:t.id)=="number"||((a=t.id)==null?void 0:a.length)>0?t.id:tf++,f=this.toasts.find(m=>m.id===u),h=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(u)&&this.dismissedToasts.delete(u),f?this.toasts=this.toasts.map(m=>m.id===u?(this.publish({...m,...t,id:u,title:l}),{...m,...t,id:u,dismissible:h,title:l}):m):this.addToast({title:l,...s,dismissible:h,id:u}),u},this.dismiss=t=>(t?(this.dismissedToasts.add(t),requestAnimationFrame(()=>this.subscribers.forEach(a=>a({id:t,dismiss:!0})))):this.toasts.forEach(a=>{this.subscribers.forEach(l=>l({id:a.id,dismiss:!0}))}),t),this.message=(t,a)=>this.create({...a,message:t}),this.error=(t,a)=>this.create({...a,message:t,type:"error"}),this.success=(t,a)=>this.create({...a,type:"success",message:t}),this.info=(t,a)=>this.create({...a,type:"info",message:t}),this.warning=(t,a)=>this.create({...a,type:"warning",message:t}),this.loading=(t,a)=>this.create({...a,type:"loading",message:t}),this.promise=(t,a)=>{if(!a)return;let l;a.loading!==void 0&&(l=this.create({...a,promise:t,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));const s=Promise.resolve(t instanceof Function?t():t);let u=l!==void 0,f;const h=s.then(async p=>{if(f=["resolve",p],ne.isValidElement(p))u=!1,this.create({id:l,type:"default",message:p});else if(Px(p)&&!p.ok){u=!1;const g=typeof a.error=="function"?await a.error(`HTTP error! status: ${p.status}`):a.error,S=typeof a.description=="function"?await a.description(`HTTP error! status: ${p.status}`):a.description,M=typeof g=="object"&&!ne.isValidElement(g)?g:{message:g};this.create({id:l,type:"error",description:S,...M})}else if(p instanceof Error){u=!1;const g=typeof a.error=="function"?await a.error(p):a.error,S=typeof a.description=="function"?await a.description(p):a.description,M=typeof g=="object"&&!ne.isValidElement(g)?g:{message:g};this.create({id:l,type:"error",description:S,...M})}else if(a.success!==void 0){u=!1;const g=typeof a.success=="function"?await a.success(p):a.success,S=typeof a.description=="function"?await a.description(p):a.description,M=typeof g=="object"&&!ne.isValidElement(g)?g:{message:g};this.create({id:l,type:"success",description:S,...M})}}).catch(async p=>{if(f=["reject",p],a.error!==void 0){u=!1;const v=typeof a.error=="function"?await a.error(p):a.error,g=typeof a.description=="function"?await a.description(p):a.description,x=typeof v=="object"&&!ne.isValidElement(v)?v:{message:v};this.create({id:l,type:"error",description:g,...x})}}).finally(()=>{u&&(this.dismiss(l),l=void 0),a.finally==null||a.finally.call(a)}),m=()=>new Promise((p,v)=>h.then(()=>f[0]==="reject"?v(f[1]):p(f[1])).catch(v));return typeof l!="string"&&typeof l!="number"?{unwrap:m}:Object.assign(l,{unwrap:m})},this.custom=(t,a)=>{const l=(a==null?void 0:a.id)||tf++;return this.create({jsx:t(l),id:l,...a}),l},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const ta=new Lx,Tx=(r,t)=>{const a=(t==null?void 0:t.id)||tf++;return ta.addToast({title:r,...t,id:a}),a},Px=r=>r&&typeof r=="object"&&"ok"in r&&typeof r.ok=="boolean"&&"status"in r&&typeof r.status=="number",Ox=Tx,zx=()=>ta.toasts,Fx=()=>ta.getActiveToasts(),kx=Object.assign(Ox,{success:ta.success,info:ta.info,warning:ta.warning,error:ta.error,custom:ta.custom,message:ta.message,promise:ta.promise,dismiss:ta.dismiss,loading:ta.loading},{getHistory:zx,getToasts:Fx});Mx("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Ms(r){return r.label!==void 0}const Gx=3,jx="24px",Hx="16px",Z0=4e3,_x=356,Vx=14,Ix=45,Jx=200;function Ua(...r){return r.filter(Boolean).join(" ")}function qx(r){const[t,a]=r.split("-"),l=[];return t&&l.push(t),a&&l.push(a),l}const Ux=r=>{var t,a,l,s,u,f,h,m,p;const{invert:v,toast:g,unstyled:S,interacting:x,setHeights:M,visibleToasts:E,heights:w,index:A,toasts:L,expanded:G,removeToast:N,defaultRichColors:H,closeButton:V,style:U,cancelButtonStyle:X,actionButtonStyle:z,className:O="",descriptionClassName:Q="",duration:q,position:J,gap:$,expandByDefault:ee,classNames:R,icons:I,closeButtonAriaLabel:W="Close toast"}=r,[ie,se]=ne.useState(null),[re,be]=ne.useState(null),[ae,ce]=ne.useState(!1),[ge,Ie]=ne.useState(!1),[$e,Ae]=ne.useState(!1),[Cn,jn]=ne.useState(!1),[Hn,Tn]=ne.useState(!1),[Qa,de]=ne.useState(0),[me,Ze]=ne.useState(0),Je=ne.useRef(g.duration||q||Z0),tn=ne.useRef(null),ve=ne.useRef(null),fn=A===0,ya=A+1<=E,ze=g.type,wn=g.dismissible!==!1,qe=g.className||"",Kn=g.descriptionClassName||"",Me=ne.useMemo(()=>w.findIndex(pe=>pe.toastId===g.id)||0,[w,g.id]),Ue=ne.useMemo(()=>{var pe;return(pe=g.closeButton)!=null?pe:V},[g.closeButton,V]),ln=ne.useMemo(()=>g.duration||q||Z0,[g.duration,q]),Ta=ne.useRef(0),Pa=ne.useRef(0),Gt=ne.useRef(0),ja=ne.useRef(null),[In,xn]=J.split("-"),ia=ne.useMemo(()=>w.reduce((pe,en,Nn)=>Nn>=Me?pe:pe+en.height,0),[w,Me]),_n=Rx(),$s=g.invert||v,_i=ze==="loading";Pa.current=ne.useMemo(()=>Me*$+ia,[Me,ia]),ne.useEffect(()=>{Je.current=ln},[ln]),ne.useEffect(()=>{ce(!0)},[]),ne.useEffect(()=>{const pe=ve.current;if(pe){const en=pe.getBoundingClientRect().height;return Ze(en),M(Nn=>[{toastId:g.id,height:en,position:g.position},...Nn]),()=>M(Nn=>Nn.filter(Vn=>Vn.toastId!==g.id))}},[M,g.id]),ne.useLayoutEffect(()=>{if(!ae)return;const pe=ve.current,en=pe.style.height;pe.style.height="auto";const Nn=pe.getBoundingClientRect().height;pe.style.height=en,Ze(Nn),M(Vn=>Vn.find(an=>an.toastId===g.id)?Vn.map(an=>an.toastId===g.id?{...an,height:Nn}:an):[{toastId:g.id,height:Nn,position:g.position},...Vn])},[ae,g.title,g.description,M,g.id,g.jsx,g.action,g.cancel]);const Ha=ne.useCallback(()=>{Ie(!0),de(Pa.current),M(pe=>pe.filter(en=>en.toastId!==g.id)),setTimeout(()=>{N(g)},Jx)},[g,N,M,Pa]);ne.useEffect(()=>{if(g.promise&&ze==="loading"||g.duration===1/0||g.type==="loading")return;let pe;return G||x||_n?(()=>{if(Gt.current<Ta.current){const Vn=new Date().getTime()-Ta.current;Je.current=Je.current-Vn}Gt.current=new Date().getTime()})():(()=>{Je.current!==1/0&&(Ta.current=new Date().getTime(),pe=setTimeout(()=>{g.onAutoClose==null||g.onAutoClose.call(g,g),Ha()},Je.current))})(),()=>clearTimeout(pe)},[G,x,g,ze,_n,Ha]),ne.useEffect(()=>{g.delete&&(Ha(),g.onDismiss==null||g.onDismiss.call(g,g))},[Ha,g.delete]);function jt(){var pe;if(I!=null&&I.loading){var en;return ne.createElement("div",{className:Ua(R==null?void 0:R.loader,g==null||(en=g.classNames)==null?void 0:en.loader,"sonner-loader"),"data-visible":ze==="loading"},I.loading)}return ne.createElement(Ax,{className:Ua(R==null?void 0:R.loader,g==null||(pe=g.classNames)==null?void 0:pe.loader),visible:ze==="loading"})}const Ht=g.icon||(I==null?void 0:I[ze])||Cx(ze);var tt,_a;return ne.createElement("li",{tabIndex:0,ref:ve,className:Ua(O,qe,R==null?void 0:R.toast,g==null||(t=g.classNames)==null?void 0:t.toast,R==null?void 0:R.default,R==null?void 0:R[ze],g==null||(a=g.classNames)==null?void 0:a[ze]),"data-sonner-toast":"","data-rich-colors":(tt=g.richColors)!=null?tt:H,"data-styled":!(g.jsx||g.unstyled||S),"data-mounted":ae,"data-promise":!!g.promise,"data-swiped":Hn,"data-removed":ge,"data-visible":ya,"data-y-position":In,"data-x-position":xn,"data-index":A,"data-front":fn,"data-swiping":$e,"data-dismissible":wn,"data-type":ze,"data-invert":$s,"data-swipe-out":Cn,"data-swipe-direction":re,"data-expanded":!!(G||ee&&ae),"data-testid":g.testId,style:{"--index":A,"--toasts-before":A,"--z-index":L.length-A,"--offset":`${ge?Qa:Pa.current}px`,"--initial-height":ee?"auto":`${me}px`,...U,...g.style},onDragEnd:()=>{Ae(!1),se(null),ja.current=null},onPointerDown:pe=>{pe.button!==2&&(_i||!wn||(tn.current=new Date,de(Pa.current),pe.target.setPointerCapture(pe.pointerId),pe.target.tagName!=="BUTTON"&&(Ae(!0),ja.current={x:pe.clientX,y:pe.clientY})))},onPointerUp:()=>{var pe,en,Nn;if(Cn||!wn)return;ja.current=null;const Vn=Number(((pe=ve.current)==null?void 0:pe.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Cr=Number(((en=ve.current)==null?void 0:en.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),an=new Date().getTime()-((Nn=tn.current)==null?void 0:Nn.getTime()),Yn=ie==="x"?Vn:Cr,it=Math.abs(Yn)/an;if(Math.abs(Yn)>=Ix||it>.11){de(Pa.current),g.onDismiss==null||g.onDismiss.call(g,g),be(ie==="x"?Vn>0?"right":"left":Cr>0?"down":"up"),Ha(),jn(!0);return}else{var Zn,Xn;(Zn=ve.current)==null||Zn.style.setProperty("--swipe-amount-x","0px"),(Xn=ve.current)==null||Xn.style.setProperty("--swipe-amount-y","0px")}Tn(!1),Ae(!1),se(null)},onPointerMove:pe=>{var en,Nn,Vn;if(!ja.current||!wn||((en=window.getSelection())==null?void 0:en.toString().length)>0)return;const an=pe.clientY-ja.current.y,Yn=pe.clientX-ja.current.x;var it;const Zn=(it=r.swipeDirections)!=null?it:qx(J);!ie&&(Math.abs(Yn)>1||Math.abs(an)>1)&&se(Math.abs(Yn)>Math.abs(an)?"x":"y");let Xn={x:0,y:0};const _t=Oa=>1/(1.5+Math.abs(Oa)/20);if(ie==="y"){if(Zn.includes("top")||Zn.includes("bottom"))if(Zn.includes("top")&&an<0||Zn.includes("bottom")&&an>0)Xn.y=an;else{const Oa=an*_t(an);Xn.y=Math.abs(Oa)<Math.abs(an)?Oa:an}}else if(ie==="x"&&(Zn.includes("left")||Zn.includes("right")))if(Zn.includes("left")&&Yn<0||Zn.includes("right")&&Yn>0)Xn.x=Yn;else{const Oa=Yn*_t(Yn);Xn.x=Math.abs(Oa)<Math.abs(Yn)?Oa:Yn}(Math.abs(Xn.x)>0||Math.abs(Xn.y)>0)&&Tn(!0),(Nn=ve.current)==null||Nn.style.setProperty("--swipe-amount-x",`${Xn.x}px`),(Vn=ve.current)==null||Vn.style.setProperty("--swipe-amount-y",`${Xn.y}px`)}},Ue&&!g.jsx&&ze!=="loading"?ne.createElement("button",{"aria-label":W,"data-disabled":_i,"data-close-button":!0,onClick:_i||!wn?()=>{}:()=>{Ha(),g.onDismiss==null||g.onDismiss.call(g,g)},className:Ua(R==null?void 0:R.closeButton,g==null||(l=g.classNames)==null?void 0:l.closeButton)},(_a=I==null?void 0:I.close)!=null?_a:Bx):null,(ze||g.icon||g.promise)&&g.icon!==null&&((I==null?void 0:I[ze])!==null||g.icon)?ne.createElement("div",{"data-icon":"",className:Ua(R==null?void 0:R.icon,g==null||(s=g.classNames)==null?void 0:s.icon)},g.promise||g.type==="loading"&&!g.icon?g.icon||jt():null,g.type!=="loading"?Ht:null):null,ne.createElement("div",{"data-content":"",className:Ua(R==null?void 0:R.content,g==null||(u=g.classNames)==null?void 0:u.content)},ne.createElement("div",{"data-title":"",className:Ua(R==null?void 0:R.title,g==null||(f=g.classNames)==null?void 0:f.title)},g.jsx?g.jsx:typeof g.title=="function"?g.title():g.title),g.description?ne.createElement("div",{"data-description":"",className:Ua(Q,Kn,R==null?void 0:R.description,g==null||(h=g.classNames)==null?void 0:h.description)},typeof g.description=="function"?g.description():g.description):null),ne.isValidElement(g.cancel)?g.cancel:g.cancel&&Ms(g.cancel)?ne.createElement("button",{"data-button":!0,"data-cancel":!0,style:g.cancelButtonStyle||X,onClick:pe=>{Ms(g.cancel)&&wn&&(g.cancel.onClick==null||g.cancel.onClick.call(g.cancel,pe),Ha())},className:Ua(R==null?void 0:R.cancelButton,g==null||(m=g.classNames)==null?void 0:m.cancelButton)},g.cancel.label):null,ne.isValidElement(g.action)?g.action:g.action&&Ms(g.action)?ne.createElement("button",{"data-button":!0,"data-action":!0,style:g.actionButtonStyle||z,onClick:pe=>{Ms(g.action)&&(g.action.onClick==null||g.action.onClick.call(g.action,pe),!pe.defaultPrevented&&Ha())},className:Ua(R==null?void 0:R.actionButton,g==null||(p=g.classNames)==null?void 0:p.actionButton)},g.action.label):null)};function X0(){if(typeof window>"u"||typeof document>"u")return"ltr";const r=document.documentElement.getAttribute("dir");return r==="auto"||!r?window.getComputedStyle(document.documentElement).direction:r}function Kx(r,t){const a={};return[r,t].forEach((l,s)=>{const u=s===1,f=u?"--mobile-offset":"--offset",h=u?Hx:jx;function m(p){["top","right","bottom","left"].forEach(v=>{a[`${f}-${v}`]=typeof p=="number"?`${p}px`:p})}typeof l=="number"||typeof l=="string"?m(l):typeof l=="object"?["top","right","bottom","left"].forEach(p=>{l[p]===void 0?a[`${f}-${p}`]=h:a[`${f}-${p}`]=typeof l[p]=="number"?`${l[p]}px`:l[p]}):m(h)}),a}const Yx=ne.forwardRef(function(t,a){const{id:l,invert:s,position:u="bottom-right",hotkey:f=["altKey","KeyT"],expand:h,closeButton:m,className:p,offset:v,mobileOffset:g,theme:S="light",richColors:x,duration:M,style:E,visibleToasts:w=Gx,toastOptions:A,dir:L=X0(),gap:G=Vx,icons:N,containerAriaLabel:H="Notifications"}=t,[V,U]=ne.useState([]),X=ne.useMemo(()=>l?V.filter(ae=>ae.toasterId===l):V.filter(ae=>!ae.toasterId),[V,l]),z=ne.useMemo(()=>Array.from(new Set([u].concat(X.filter(ae=>ae.position).map(ae=>ae.position)))),[X,u]),[O,Q]=ne.useState([]),[q,J]=ne.useState(!1),[$,ee]=ne.useState(!1),[R,I]=ne.useState(S!=="system"?S:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),W=ne.useRef(null),ie=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),se=ne.useRef(null),re=ne.useRef(!1),be=ne.useCallback(ae=>{U(ce=>{var ge;return(ge=ce.find(Ie=>Ie.id===ae.id))!=null&&ge.delete||ta.dismiss(ae.id),ce.filter(({id:Ie})=>Ie!==ae.id)})},[]);return ne.useEffect(()=>ta.subscribe(ae=>{if(ae.dismiss){requestAnimationFrame(()=>{U(ce=>ce.map(ge=>ge.id===ae.id?{...ge,delete:!0}:ge))});return}setTimeout(()=>{m4.flushSync(()=>{U(ce=>{const ge=ce.findIndex(Ie=>Ie.id===ae.id);return ge!==-1?[...ce.slice(0,ge),{...ce[ge],...ae},...ce.slice(ge+1)]:[ae,...ce]})})})}),[V]),ne.useEffect(()=>{if(S!=="system"){I(S);return}if(S==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?I("dark"):I("light")),typeof window>"u")return;const ae=window.matchMedia("(prefers-color-scheme: dark)");try{ae.addEventListener("change",({matches:ce})=>{I(ce?"dark":"light")})}catch{ae.addListener(({matches:ge})=>{try{I(ge?"dark":"light")}catch(Ie){console.error(Ie)}})}},[S]),ne.useEffect(()=>{V.length<=1&&J(!1)},[V]),ne.useEffect(()=>{const ae=ce=>{var ge;if(f.every(Ae=>ce[Ae]||ce.code===Ae)){var $e;J(!0),($e=W.current)==null||$e.focus()}ce.code==="Escape"&&(document.activeElement===W.current||(ge=W.current)!=null&&ge.contains(document.activeElement))&&J(!1)};return document.addEventListener("keydown",ae),()=>document.removeEventListener("keydown",ae)},[f]),ne.useEffect(()=>{if(W.current)return()=>{se.current&&(se.current.focus({preventScroll:!0}),se.current=null,re.current=!1)}},[W.current]),ne.createElement("section",{ref:a,"aria-label":`${H} ${ie}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},z.map((ae,ce)=>{var ge;const[Ie,$e]=ae.split("-");return X.length?ne.createElement("ol",{key:ae,dir:L==="auto"?X0():L,tabIndex:-1,ref:W,className:p,"data-sonner-toaster":!0,"data-sonner-theme":R,"data-y-position":Ie,"data-x-position":$e,style:{"--front-toast-height":`${((ge=O[0])==null?void 0:ge.height)||0}px`,"--width":`${_x}px`,"--gap":`${G}px`,...E,...Kx(v,g)},onBlur:Ae=>{re.current&&!Ae.currentTarget.contains(Ae.relatedTarget)&&(re.current=!1,se.current&&(se.current.focus({preventScroll:!0}),se.current=null))},onFocus:Ae=>{Ae.target instanceof HTMLElement&&Ae.target.dataset.dismissible==="false"||re.current||(re.current=!0,se.current=Ae.relatedTarget)},onMouseEnter:()=>J(!0),onMouseMove:()=>J(!0),onMouseLeave:()=>{$||J(!1)},onDragEnd:()=>J(!1),onPointerDown:Ae=>{Ae.target instanceof HTMLElement&&Ae.target.dataset.dismissible==="false"||ee(!0)},onPointerUp:()=>ee(!1)},X.filter(Ae=>!Ae.position&&ce===0||Ae.position===ae).map((Ae,Cn)=>{var jn,Hn;return ne.createElement(Ux,{key:Ae.id,icons:N,index:Cn,toast:Ae,defaultRichColors:x,duration:(jn=A==null?void 0:A.duration)!=null?jn:M,className:A==null?void 0:A.className,descriptionClassName:A==null?void 0:A.descriptionClassName,invert:s,visibleToasts:w,closeButton:(Hn=A==null?void 0:A.closeButton)!=null?Hn:m,interacting:$,position:ae,style:A==null?void 0:A.style,unstyled:A==null?void 0:A.unstyled,classNames:A==null?void 0:A.classNames,cancelButtonStyle:A==null?void 0:A.cancelButtonStyle,actionButtonStyle:A==null?void 0:A.actionButtonStyle,closeButtonAriaLabel:A==null?void 0:A.closeButtonAriaLabel,removeToast:be,toasts:X.filter(Tn=>Tn.position==Ae.position),heights:O.filter(Tn=>Tn.position==Ae.position),setHeights:Q,expandByDefault:h,gap:G,expanded:q,swipeDirections:t.swipeDirections})})):null}))}),Zx=Fi({preadmissionId:le().optional().catch(void 0)}),Xx=["qualification","admin","success"],Q0="wizard-form-data";function Qx(){const t=new URLSearchParams(window.location.search).get("preadmissionId");if(t)return sessionStorage.setItem("preadmissionId",t),t;const l=new URLSearchParams(window.location.hash.replace("#","")).get("preadmissionId");if(l)return sessionStorage.setItem("preadmissionId",l),l;const s=window.location.href.match(/preadmissionId=([^&]+)/);return s!=null&&s[1]?(sessionStorage.setItem("preadmissionId",s[1]),s[1]):sessionStorage.getItem("preadmissionId")??""}const Wx={qualification:"form-scrollable",admin:"form-scrollable",success:"completion-centered"};function $x({children:r}){return y.jsx("div",{className:"step-page-centered","data-layout":"entry",children:y.jsx("div",{className:"step-container-sm mb-24",children:r})})}function e7({children:r}){return y.jsx("div",{className:"flex-1","data-layout":"form",children:r})}function n7({children:r}){return y.jsx(Ve,{grow:!0,align:"center",justify:"center",className:"p-4","data-layout":"completion",children:y.jsx("div",{className:"step-container-sm",children:r})})}const a7={"entry-centered":$x,"form-scrollable":e7,"completion-centered":n7};function r7(){const r=p5(),t=Ga(),a=eo(),[l,s]=D.useState("validating"),u=D.useRef(Qx()),f=D.useRef(void 0),h=(()=>{try{const w=sessionStorage.getItem(Q0);return w?{...JSON.parse(w),identityCard:null,insuranceCard:null}:null}catch{return null}})(),m=S4({resolver:gS(CM),defaultValues:{...Sx,...h,language:(h==null?void 0:h.language)??Cp(),preadmissionId:u.current},mode:"onSubmit"}),{i18n:p}=Ye(),v=m.watch("language"),g=r.pathname.replace("/","")||"landing",S=Xx.includes(g);D.useEffect(()=>{p.language!==v&&p.changeLanguage(v)},[v,p]),D.useEffect(()=>{const w=u.current;if(!w){s("invalid");return}const A=setTimeout(async()=>{try{const L=await a.validatePreadmissionLink(w);s(L.isValid?"valid":"invalid")}catch{s("invalid")}},2e3);return()=>clearTimeout(A)},[]),D.useEffect(()=>{const w=m.watch(A=>{f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{const L={...A,identityCard:null,insuranceCard:null};sessionStorage.setItem(Q0,JSON.stringify(L))},400)});return()=>w.unsubscribe()},[m]),D.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"});const w=g===""?"landing":g;w!=="loading"&&l==="valid"&&a.setStep(u.current,w).catch(()=>{})},[g,l]),D.useEffect(()=>{!u.current&&r.pathname!=="/"&&t({to:"/"})},[r.pathname,t]);const x=l==="valid"?Wx[g]??"entry-centered":"entry-centered",M=a7[x],E=l==="validating"?y.jsx(fx,{}):l==="invalid"?y.jsx(sx,{}):y.jsx(Jp,{});return y.jsx(E5,{features:hS,strict:!0,children:y.jsx(M4,{...m,children:y.jsxs("main",{id:"preadmission-app",className:"min-h-[100dvh] flex flex-col bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100",children:[S&&y.jsx(cx,{currentStep:g}),y.jsx(M,{children:E}),y.jsx(Yx,{position:"top-center",richColors:!0})]})})})}const rt=t5({validateSearch:Zx,component:r7,notFoundComponent:dx});function t7(){const{t:r}=Ye("success");return y.jsxs("div",{className:"step-card",children:[y.jsxs(Ve,{className:"step-card-header",align:"center",gap:"6",children:[y.jsx(Df,{className:"w-16 h-16 text-[var(--brand-success)]"}),y.jsxs(Ve,{gap:"1",align:"center",children:[y.jsx(Mr,{color:"primary",className:"text-center",children:r("title")}),y.jsx("p",{className:"step-subtitle",children:r("message")})]})]}),y.jsx(Ve,{className:"step-card-content",children:y.jsx(pa,{asChild:!0,className:"w-full h-12 text-base active-scale",children:y.jsxs("a",{href:r("link"),target:"_blank",rel:"noopener noreferrer",children:[y.jsxs(Ra,{color:"white",children:[" ",y.jsx(TM,{className:"w-4 h-4 mr-2"})," "]}),y.jsx(Ra,{color:"white",children:r("button")})]})})})]})}const i7=vr("/success")({component:t7});function l7(){const r=Ga(),{setValue:t,watch:a}=Gn(),l=a("preadmissionId"),s=a("birthDate"),{t:u}=Ye("security"),f=eo(),[h,m]=D.useState(()=>s?p2(s):""),[p,v]=D.useState(""),[g,S]=D.useState(!1),x=MM({required:u("required"),invalid:u("invalid"),futureDate:u("futureDate")});function M(w){const A=g2(w.target.value);if(m(A),v(""),A.length===10){const L=Xd(A);L&&t("birthDate",L)}}async function E(){var L;const w=Xd(h);if(!w){v(u("invalid"));return}const A=x.safeParse({birthDate:w});if(!A.success){v(((L=A.error.errors[0])==null?void 0:L.message)??u("invalid"));return}S(!0);try{(await f.verifyBirthDate(l,w)).isValid?(t("birthDate",w),r({to:"/otp"})):v(u("wrongDate"))}catch{v(u("connectionError"))}finally{S(!1)}}return y.jsxs(Ve,{className:"step-card",gap:"4",children:[y.jsxs(Ve,{className:"step-card-header",align:"center",children:[y.jsx("div",{className:"step-icon",children:y.jsx(DM,{className:"w-8 h-8 text-[var(--brand-primary)]"})}),y.jsx(Mr,{children:u("title")}),y.jsx("p",{className:"step-subtitle",children:u("subtitle")})]}),y.jsx(Ve,{className:"step-card-content",children:y.jsxs(Ve,{className:"gap-4",children:[y.jsx(Dn,{label:u("label"),value:h,onChange:M,placeholder:u("placeholder"),error:p,required:!0,inputClassName:"form-input-mono"}),y.jsxs(En,{className:"step-actions",children:[y.jsxs(pa,{type:"button",variant:"outline",onClick:()=>void r({to:"/"}),className:"flex-1 h-12 cursor-pointer",children:[y.jsx(Ys,{className:"w-4 h-4 mr-2"}),u("back")]}),y.jsx(pa,{type:"button",onClick:()=>void E(),disabled:g,className:"flex-2 h-12 cursor-pointer hover:bg-[var(--brand-primary-hover)]",children:g?y.jsxs(y.Fragment,{children:[y.jsx(at,{className:"w-4 h-4 mr-2 animate-spin"}),u("verifying")]}):y.jsxs(y.Fragment,{children:[u("continue"),y.jsx(Zs,{className:"w-4 h-4 ml-2"})]})})]})]})})]})}const o7=vr("/security")({component:l7}),Rt={hidden:{opacity:0,height:0,overflow:"hidden"},visible:{opacity:1,height:"auto",overflow:"hidden",transitionEnd:{overflow:"visible"},transition:{height:{duration:.25,ease:[0,0,.2,1]},opacity:{duration:.2,delay:.15}}},exit:{opacity:0,height:0,overflow:"hidden",transition:{opacity:{duration:.12},height:{duration:.2,delay:.05,ease:[.4,0,1,1]}}}};function s7({errors:r,setErrors:t,reasonRef:a}){const{setValue:l,watch:s}=Gn(),{t:u}=Ye("qualification"),f=s("reason"),h=s("hasEmployer");return y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{ref:a,className:"space-y-3",children:[y.jsxs("label",{className:"text-sm font-medium text-[var(--brand-text)]",children:[u("reasonLabel")," ",y.jsx("span",{className:"text-[var(--brand-error)]",children:"*"})]}),y.jsx("div",{className:"flex gap-3",children:["illness","accident"].map(m=>y.jsx(nf,{selected:f===m,onClick:()=>{l("reason",m),t(p=>{const v={...p};return delete v.reason,v})},children:u(m==="illness"?"illness":"accident")},m))}),r.reason&&y.jsxs("div",{className:"form-error-inline-tight",children:[y.jsx(Sr,{className:"form-error-icon"}),y.jsx("span",{children:r.reason})]})]}),y.jsx(Bt,{children:f==="accident"&&y.jsxs(qn.div,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",className:"space-y-3",children:[y.jsx("label",{className:"text-sm font-medium text-[var(--brand-text)]",children:u("hasEmployerLabel")}),y.jsx("div",{className:"flex gap-3",children:[!0,!1].map(m=>y.jsx(nf,{selected:h===m,onClick:()=>l("hasEmployer",m),sm:!0,children:u(m?"yes":"no")},String(m)))})]},"has-employer")})]})}function u7({errors:r,setErrors:t,insuranceRef:a,onShowHelp:l}){const{setValue:s,watch:u}=Gn(),{t:f}=Ye("qualification"),h=u("insurance");return y.jsxs("div",{ref:a,className:"space-y-3",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("label",{className:"text-sm font-medium text-[var(--brand-text)]",children:[f("insuranceLabel")," ",y.jsx("span",{className:"text-[var(--brand-error)]",children:"*"})]}),y.jsxs("button",{type:"button",onClick:l,className:"inline-flex items-center gap-0.5 text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] !text-[14px] cursor-pointer transition-colors",children:[f("insuranceHelp"),y.jsx(NM,{className:"w-3.5 h-3.5"})]})]}),y.jsx("div",{className:"flex flex-wrap gap-3",children:["swiss","international","auto"].map(m=>y.jsx(nf,{selected:h===m,onClick:()=>{s("insurance",m),t(p=>{const v={...p};return delete v.insurance,v})},sm:!0,className:"min-w-[120px]",children:f(m==="swiss"?"swiss":m==="international"?"international":"auto")},m))}),r.insurance&&y.jsxs("div",{className:"form-error-inline-tight",children:[y.jsx(Sr,{className:"form-error-icon"}),y.jsx("span",{children:r.insurance})]})]})}function c7({errors:r,setErrors:t,identityRef:a,insuranceCardRef:l,isProcessingId:s,setIsProcessingId:u,isProcessingInsurance:f,setIsProcessingInsurance:h}){const{setValue:m,watch:p}=Gn(),{t:v}=Ye("qualification"),{t:g}=Ye("loading"),S=p("insurance"),x=p("identityCard"),M=p("insuranceCard"),E=p("insuranceCardError");D.useEffect(()=>{E&&(t(A=>({...A,insuranceCard:g(E)})),m("insuranceCard",null),m("insuranceCardBase64",""),m("insuranceCardMimeType",""),m("insuranceCardError",""))},[E]);async function w(A,L){if(A.size>yC.MAX_SIZE_BYTES){t(N=>({...N,[L==="identity"?"identityCard":"insuranceCard"]:v("fileTooLarge")}));return}const G=L==="identity"?u:h;G(!0);try{const N=await AC(A);L==="identity"?(m("identityCard",A),m("identityCardBase64",N),m("identityCardMimeType",A.type)):(m("insuranceCard",A),m("insuranceCardBase64",N),m("insuranceCardMimeType",A.type)),t(H=>{const V={...H};return delete V[L==="identity"?"identityCard":"insuranceCard"],V})}finally{G(!1)}}return y.jsxs("div",{className:"space-y-4",children:[y.jsx(Wd,{ref:a,file:x,isProcessing:s,onFileSelect:A=>void w(A,"identity"),onRemove:()=>{m("identityCard",null),m("identityCardBase64",""),m("identityCardMimeType","")},label:v("identityCard"),uploadText:v("uploadText"),error:r.identityCard,required:!0}),y.jsx(Wd,{ref:l,file:M,isProcessing:f,onFileSelect:A=>void w(A,"insurance"),onRemove:()=>{m("insuranceCard",null),m("insuranceCardBase64",""),m("insuranceCardMimeType","")},label:v("insuranceCard"),uploadText:v("uploadText"),error:r.insuranceCard,required:S==="swiss",optional:S!=="swiss"?v("optional"):void 0})]})}function d7({errors:r,setErrors:t,consentRef:a}){const{setValue:l,watch:s}=Gn(),{t:u}=Ye("qualification"),f=s("consentNLPD"),h=s("consentMarketing");return y.jsxs("div",{ref:a,className:"space-y-3",children:[y.jsx("label",{className:"text-sm font-semibold text-[var(--brand-text)]",children:u("consentsLabel")}),y.jsxs("div",{className:"space-y-3",children:[y.jsxs("div",{className:"rounded-lg bg-[rgb(248_250_252)] p-4",children:[y.jsxs("div",{className:"flex items-start gap-3",children:[y.jsx(af,{id:"consentNLPD",checked:f,onCheckedChange:m=>{l("consentNLPD",m===!0),t(p=>{const v={...p};return delete v.consentNLPD,v})}}),y.jsxs($l,{htmlFor:"consentNLPD",className:"text-sm leading-5 cursor-pointer",children:[u("consentNLPDPrefix"),y.jsx("a",{href:u("privacyPolicyUrl"),target:"_blank",rel:"noopener noreferrer",className:"!text-[var(--brand-primary)] hover:!underline",onClick:m=>m.stopPropagation(),children:u("consentNLPDLink")}),y.jsx("span",{className:"text-[var(--brand-error)] ml-0.5",children:"*"})]})]}),r.consentNLPD&&y.jsxs("div",{className:"form-error-inline-tight mt-2",children:[y.jsx(Sr,{className:"form-error-icon"}),y.jsx("span",{children:r.consentNLPD})]})]}),y.jsx("div",{className:"rounded-lg bg-[rgb(248_250_252)] p-4",children:y.jsxs("div",{className:"flex items-start gap-3",children:[y.jsx(af,{id:"consentMarketing",checked:h,onCheckedChange:m=>l("consentMarketing",m===!0)}),y.jsx($l,{htmlFor:"consentMarketing",className:"text-sm leading-5 cursor-pointer flex-1",children:u("consentMarketing")}),y.jsxs("span",{className:"text-xs text-[var(--muted-foreground)] whitespace-nowrap self-center",children:["[",u("optional"),"]"]})]})})]})]})}function f7({open:r,onOpenChange:t}){const{t:a}=Ye("qualification");return y.jsx(kC,{open:r,onOpenChange:t,children:y.jsxs(R2,{className:"max-w-lg max-h-[80vh] overflow-y-auto",children:[y.jsx(jC,{children:y.jsx(L2,{className:"text-xl",children:a("insuranceHelpTitle")})}),y.jsxs("div",{className:"space-y-5 text-sm leading-relaxed text-[var(--brand-text)]",children:[y.jsxs("div",{children:[y.jsx("h4",{className:"font-bold text-[var(--brand-primary)] mb-1",children:a("insuranceHelpSwiss")}),y.jsx("p",{children:a("insuranceHelpSwissDesc")})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"font-bold text-[var(--brand-primary)] mb-1",children:a("insuranceHelpInternational")}),y.jsx("p",{className:"mb-2",children:a("insuranceHelpInternationalDesc")}),y.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[y.jsx("li",{children:a("insuranceHelpInternationalItem1")}),y.jsx("li",{children:a("insuranceHelpInternationalItem2")})]})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"font-bold text-[var(--brand-primary)] mb-1",children:a("insuranceHelpAuto")}),y.jsx("p",{children:a("insuranceHelpAutoDesc")})]})]})]})})}const h7={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.06,delayChildren:.03}}},At={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:"easeOut"}}};function m7(){const r=Ga(),{watch:t}=Gn(),a=t("reason"),l=t("insurance"),s=t("hasEmployer"),u=t("consentNLPD"),f=t("consentMarketing"),h=t("identityCard"),m=t("insuranceCard"),{t:p}=Ye("qualification"),[v,g]=D.useState({}),[S,x]=D.useState(!1),[M,E]=D.useState(!1),[w,A]=D.useState(!1),L=D.useRef(null),G=D.useRef(null),N=D.useRef(null),H=D.useRef(null),V=D.useRef(null),U={reason:L,insurance:G,identityCard:N,insuranceCard:H,consentNLPD:V};function X(){var Q;const O=SM(l,a,{reasonRequired:p("reasonRequired"),insuranceRequired:p("insuranceRequired"),consentRequired:p("consentNLPDRequired"),identityRequired:p("identityCardRequired"),insuranceCardRequired:p("insuranceCardRequired")}).safeParse({reason:a,insurance:l,hasEmployer:s,consentNLPD:u,consentMarketing:f,identityCard:h,insuranceCard:m});if(!O.success){const q={};for(const $ of O.error.errors){const ee=$.path[0];q[ee]=$.message}g(q);const J=Object.keys(q)[0];if(J){const $=U[J];(Q=$==null?void 0:$.current)==null||Q.scrollIntoView({behavior:"smooth",block:"center"})}return}g({}),r({to:"/loading"})}return y.jsx("div",{className:"step-page",children:y.jsxs(qn.div,{className:"step-container-lg",variants:h7,initial:"hidden",animate:"visible",children:[y.jsxs("div",{className:"step-card-compact",children:[y.jsx(qn.div,{variants:At,children:y.jsxs(Ve,{className:"step-card-header",align:"center",children:[y.jsx(qn.div,{className:"step-icon",variants:At,children:y.jsx(RM,{className:"w-8 h-8 text-[var(--brand-primary)]"})}),y.jsxs(Ve,{align:"center",gap:"1",children:[y.jsx(Mr,{children:p("title")}),y.jsx(Ra,{className:"step-subtitle",children:p("subtitle")})]})]})}),y.jsxs(Ve,{className:"step-card-content gap-6",children:[y.jsx(qn.div,{variants:At,children:y.jsx(s7,{errors:v,setErrors:g,reasonRef:L})}),y.jsx(qn.div,{variants:At,children:y.jsx(u7,{errors:v,setErrors:g,insuranceRef:G,onShowHelp:()=>A(!0)})}),y.jsx(qn.div,{variants:At,children:y.jsx(c7,{errors:v,setErrors:g,identityRef:N,insuranceCardRef:H,isProcessingId:S,setIsProcessingId:x,isProcessingInsurance:M,setIsProcessingInsurance:E})}),y.jsx(qn.div,{variants:At,children:y.jsx(d7,{errors:v,setErrors:g,consentRef:V})}),y.jsx(qn.div,{variants:At,children:y.jsx(En,{className:"step-actions",children:y.jsx(pa,{type:"button",onClick:X,disabled:S||M,className:"flex-1 h-12 active-scale cursor-pointer",children:S||M?y.jsxs(y.Fragment,{children:[y.jsx(at,{className:"w-4 h-4 animate-spin"}),p("continue")]}):y.jsxs(y.Fragment,{children:[p("continue"),y.jsx(Zs,{className:"w-4 h-4"})]})})})})]})]}),y.jsx(f7,{open:w,onOpenChange:A})]})})}const g7=vr("/qualification")({component:m7}),_s={OCR_TIMEOUT_MS:8e3,LOADING_MIN_DISPLAY_MS:2e3,PAGE_TRANSITION_MS:200,ERROR_ANIMATION_MS:150,DEBOUNCE_MS:400,OTP_COOLDOWN_S:30,POWER_PAGES_INIT_MS:2e3};function p7(){const r=Ga(),{setValue:t,watch:a}=Gn(),l=a("preadmissionId"),s=a("language"),{t:u}=Ye("otp"),f=eo(),[h,m]=D.useState(""),[p,v]=D.useState(""),[g,S]=D.useState(!1),[x,M]=D.useState(!1),[E,w]=D.useState(""),[A,L]=D.useState(0),G=D.useRef(!1),N=vM({required:u("required"),invalid:u("invalid")});D.useEffect(()=>{f.getPhoneLastDigits(l).then(X=>{w(X.lastDigits)}).catch(()=>{})},[l]),D.useEffect(()=>{G.current||sessionStorage.getItem("otp_sent")||(G.current=!0,sessionStorage.setItem("otp_sent","true"),f.sendOtp(l,s).catch(()=>{}),L(_s.OTP_COOLDOWN_S))},[l]),D.useEffect(()=>{if(A<=0)return;const X=setInterval(()=>{L(z=>z-1)},1e3);return()=>clearInterval(X)},[A]);const H=A>0;async function V(){if(!(H||x)){M(!0);try{await f.sendOtp(l,s),L(_s.OTP_COOLDOWN_S)}finally{M(!1)}}}async function U(){var z;const X=N.safeParse({otpCode:h});if(!X.success){v(((z=X.error.errors[0])==null?void 0:z.message)??u("invalid"));return}S(!0);try{(await f.verifyOTP(l,h)).isValid?(t("otpCode",h),r({to:"/qualification"})):v(u("invalidCode"))}catch{v(u("invalidCode"))}finally{S(!1)}}return y.jsxs("div",{className:"step-card",children:[y.jsxs(Ve,{className:"step-card-header",align:"center",children:[y.jsx("div",{className:"step-icon",children:y.jsx(zM,{className:"w-8 h-8 text-[var(--brand-primary)]"})}),y.jsxs(Ve,{gap:"1",align:"center",children:[y.jsx(Mr,{children:u("title")}),y.jsx(Ra,{className:"step-subtitle",children:u("subtitle",{digits:E||"****"})})]})]}),y.jsx(Ve,{className:"step-card-content",children:y.jsxs(Ve,{className:"gap-4",children:[y.jsx(En,{justify:"center",children:y.jsx(ex,{value:h,onChange:X=>{m(X),v("")},maxLength:6,children:y.jsx(nx,{className:"gap-1 sm:gap-2",children:Array.from({length:6}).map((X,z)=>y.jsx(ax,{index:z,className:"otp-slot"},z))})})}),p&&y.jsxs("div",{className:"form-error-inline justify-center",children:[y.jsx(Sr,{className:"form-error-icon"}),y.jsx("span",{children:p})]}),y.jsx(En,{justify:"center",children:y.jsx(pa,{type:"button",variant:"outline",onClick:()=>void V(),disabled:H||x,className:"text-sm text-[var(--brand-primary)] border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10",children:x?y.jsxs(y.Fragment,{children:[y.jsx(at,{className:"w-4 h-4 mr-2 animate-spin"}),u("resend")]}):H?u("resendIn",{count:A}):u("resend")})}),y.jsxs(En,{className:"step-actions",children:[y.jsxs(pa,{type:"button",variant:"outline",onClick:()=>void r({to:"/security"}),className:"flex-1 h-12 cursor-pointer",children:[y.jsx(Ys,{className:"w-4 h-4 mr-2"}),u("back")]}),y.jsx(pa,{type:"button",onClick:()=>void U(),disabled:g||h.length!==6,className:"flex-2 h-12 cursor-pointer",children:g?y.jsxs(y.Fragment,{children:[y.jsx(at,{className:"w-4 h-4 mr-2 animate-spin"}),u("verifying")]}):y.jsxs(y.Fragment,{children:[u("continue"),y.jsx(Zs,{className:"w-4 h-4 ml-2"})]})})]})]})})]})}const y7=vr("/otp")({component:p7});function b7(){const r=Ga(),{setValue:t,getValues:a}=Gn(),l=eo();return D.useEffect(()=>{let s=!1;const u=Date.now();let f=!1;const{identityCardBase64:h,insuranceCardBase64:m,insurance:p}=a(),v=[];h&&v.push(l.extractDocumentData(h,"identity").then(x=>({type:"identity",data:x}))),m&&v.push(l.extractDocumentData(m,"insurance").then(x=>({type:"insurance",data:x})));const g=new Promise(x=>{setTimeout(()=>{f=!0,x("timeout")},_s.OCR_TIMEOUT_MS)});async function S(){let x=[];if(v.length>0){const A=await Promise.race([Promise.allSettled(v).then(L=>({kind:"results",results:L})),g.then(()=>({kind:"timeout"}))]);A.kind==="results"&&(x=A.results)}if(s)return;let M=!1;for(const A of x){if(A.status!=="fulfilled")continue;const{type:L,data:G}=A.value;if(L==="identity"){const N=G;N.lastName&&t("lastName",N.lastName),N.firstName&&t("firstName",N.firstName),N.gender&&t("gender",N.gender),N.nationality&&t("nationality",N.nationality)}else{const N=G;if(N.kvgCardNumber==="not_covered"&&p==="swiss"){M=!0;continue}N.street&&t("street",N.street),N.city&&t("city",N.city),N.zipCode&&t("npa",N.zipCode),N.country&&t("country",N.country),N.avsNumber&&t("avsNumber",N.avsNumber),N.kvgCardNumber&&t("cardNumber",N.kvgCardNumber),N.kvgInsuranceName&&t("basicInsurance",N.kvgInsuranceName),N.vvgCardNumber&&t("complementaryInsurance",N.vvgCardNumber)}}const E=Date.now()-u,w=_s.LOADING_MIN_DISPLAY_MS-E;if(w>0&&await new Promise(A=>setTimeout(A,w)),!s){if(M){t("insuranceCard",null),t("insuranceCardBase64",""),t("insuranceCardMimeType",""),t("insuranceCardError","notCovered"),r({to:"/qualification"});return}f&&t("ocrTimedOut",!0),sessionStorage.setItem("ocr_completed","true"),r({to:"/admin"})}}return S(),()=>{s=!0}},[]),y.jsx(ux,{})}const v7=vr("/loading")({component:b7});function S7({errors:r,setErrors:t,setRef:a}){const{setValue:l,watch:s}=Gn(),{t:u}=Ye("admin"),f=s("language");return y.jsxs("div",{className:"space-y-4",children:[y.jsx("div",{className:"form-section-header",children:y.jsx(kt,{children:u("identity")})}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[y.jsx("div",{ref:a("firstName"),children:y.jsx(Dn,{label:u("firstName"),value:s("firstName"),onChange:h=>{l("firstName",h.target.value),t(m=>{const p={...m};return delete p.firstName,p})},error:r.firstName,required:!0})}),y.jsx("div",{ref:a("lastName"),children:y.jsx(Dn,{label:u("lastName"),value:s("lastName"),onChange:h=>{l("lastName",h.target.value),t(m=>{const p={...m};return delete p.lastName,p})},error:r.lastName,required:!0})}),y.jsxs("div",{ref:a("gender"),className:"space-y-2",children:[y.jsxs($l,{className:"text-sm font-medium text-[var(--brand-text)]",children:[u("gender")," ",y.jsx("span",{className:"text-[var(--brand-error)]",children:"*"})]}),y.jsxs(Rf,{value:s("gender"),onValueChange:h=>{l("gender",h),t(m=>{const p={...m};return delete p.gender,p})},children:[y.jsx(Qs,{className:"form-input",children:y.jsx(Lf,{placeholder:u("selectGender")})}),y.jsxs(Ws,{children:[y.jsx(et,{value:"male",children:u("male")}),y.jsx(et,{value:"female",children:u("female")}),y.jsx(et,{value:"other",children:u("other")})]})]}),r.gender&&y.jsxs("div",{className:"form-error-inline-tight",children:[y.jsx(Sr,{className:"form-error-icon"}),y.jsx("span",{children:r.gender})]})]}),y.jsx("div",{ref:a("nationality"),children:y.jsx(w2,{id:"nationality",label:u("nationality"),value:s("nationality"),onChange:h=>{l("nationality",h),t(m=>{const p={...m};return delete p.nationality,p})},countries:FC(f),placeholder:u("selectPlaceholder"),error:r.nationality,noResultsText:u("noResults"),withFlags:!0,required:!0})})]})]})}function M7({errors:r,setErrors:t,setRef:a}){const{setValue:l,watch:s}=Gn(),{t:u}=Ye("admin"),f=s("language");return y.jsxs("div",{className:"space-y-4",children:[y.jsx("div",{className:"form-section-header",children:y.jsx(kt,{children:u("contact")})}),y.jsx("div",{ref:a("street"),children:y.jsx(Dn,{label:u("street"),value:s("street"),onChange:h=>{l("street",h.target.value),t(m=>{const p={...m};return delete p.street,p})},error:r.street,required:!0})}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[y.jsx("div",{ref:a("npa"),children:y.jsx(Dn,{label:u("npa"),value:s("npa"),onChange:h=>{l("npa",h.target.value.replace(/\D/g,"").slice(0,10)),t(m=>{const p={...m};return delete p.npa,p})},error:r.npa,required:!0,maxLength:10})}),y.jsx("div",{ref:a("city"),children:y.jsx(Dn,{label:u("city"),value:s("city"),onChange:h=>{l("city",h.target.value.slice(0,50)),t(m=>{const p={...m};return delete p.city,p})},error:r.city,required:!0,maxLength:50})})]}),y.jsx("div",{ref:a("country"),children:y.jsx(w2,{id:"country",label:u("country"),value:s("country"),onChange:h=>{l("country",h),t(m=>{const p={...m};return delete p.country,p})},countries:zC(f),placeholder:u("selectPlaceholder"),error:r.country,noResultsText:u("noResults"),withFlags:!0,required:!0})}),y.jsx("div",{ref:a("email"),children:y.jsx(Dn,{label:u("email"),type:"email",value:s("email"),onChange:h=>{l("email",h.target.value),t(m=>{const p={...m};return delete p.email,p})},error:r.email,required:!0})})]})}function C7({errors:r,setErrors:t,setRef:a}){const{setValue:l,watch:s}=Gn(),{t:u}=Ye("admin");return y.jsxs("div",{className:"space-y-4",children:[y.jsx("div",{className:"form-section-header",children:y.jsx(kt,{children:u("employer")})}),y.jsx("div",{ref:a("profession"),children:y.jsx(Dn,{label:u("profession"),value:s("profession"),onChange:f=>{l("profession",f.target.value),t(h=>{const m={...h};return delete m.profession,m})},error:r.profession,required:!0})}),y.jsx("div",{ref:a("employerName"),children:y.jsx(Dn,{label:u("employerName"),value:s("employerName"),onChange:f=>{l("employerName",f.target.value),t(h=>{const m={...h};return delete m.employerName,m})},error:r.employerName,required:!0})}),y.jsx("div",{ref:a("employerAddress"),children:y.jsx(Dn,{label:u("employerAddress"),value:s("employerAddress"),onChange:f=>{l("employerAddress",f.target.value),t(h=>{const m={...h};return delete m.employerAddress,m})},error:r.employerAddress,required:!0})})]})}function x7(){const{setValue:r,watch:t}=Gn(),{t:a}=Ye("admin");return y.jsxs("div",{className:"space-y-4",children:[y.jsx("div",{className:"form-section-header",children:y.jsx(kt,{children:a("doctors")})}),y.jsx(V0,{id:"referringDoctor",label:a("referringDoctor"),value:t("referringDoctor"),onChange:l=>r("referringDoctor",l),placeholder:a(""),noResultsText:a("noResults"),optional:a("optional")}),y.jsx(V0,{id:"generalPractitioner",label:a("generalPractitioner"),value:t("generalPractitioner"),onChange:l=>r("generalPractitioner",l),placeholder:a(""),noResultsText:a("noResults"),optional:a("optional")})]})}function A7({errors:r,setErrors:t,setRef:a}){const{setValue:l,watch:s}=Gn(),{t:u,i18n:f}=Ye("admin"),[h,m]=D.useState(()=>{const p=s("accidentDate");return p?p2(p):""});return y.jsxs("div",{className:"space-y-4",children:[y.jsx("div",{className:"form-section-header",children:y.jsx(kt,{children:u("accidentData")})}),y.jsx("div",{ref:a("accidentDate"),children:y.jsx(Dn,{label:u("accidentDate"),value:h,onChange:p=>{const v=g2(p.target.value);if(m(v),t(g=>{const S={...g};return delete S.accidentDate,S}),v.length===10){const g=Xd(v,{allowFuture:!1});g&&l("accidentDate",g)}},placeholder:f.language==="fr"?"JJ.MM.AAAA":"DD.MM.YYYY",error:r.accidentDate,required:!0,inputClassName:"form-input-mono"})}),y.jsx(Dn,{label:u("accidentInsurance"),value:s("accidentInsurance"),onChange:p=>l("accidentInsurance",p.target.value),optional:u("optional")}),y.jsx(Dn,{label:u("claimNumber"),value:s("claimNumber"),onChange:p=>l("claimNumber",p.target.value),optional:u("optional")})]})}function E7({errors:r,setErrors:t,setRef:a,showAvs:l,showBasicInsurance:s,showCardNumber:u,showPolicyNumber:f}){const{setValue:h,watch:m}=Gn(),{t:p}=Ye("admin");return y.jsxs("div",{className:"space-y-4",children:[y.jsx("div",{className:"form-section-header",children:y.jsx(kt,{children:p("insuranceData")})}),y.jsx(Bt,{children:l&&y.jsx(qn.div,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",ref:a("avsNumber"),children:y.jsx(Dn,{label:p("avsNumber"),value:xC(m("avsNumber")),onChange:v=>{h("avsNumber",v.target.value.replace(/\D/g,"").slice(0,13)),t(g=>{const S={...g};return delete S.avsNumber,S})},error:r.avsNumber,required:!0,inputClassName:"form-input-mono",placeholder:"XXX.XXXX.XXXX.XX"})},"avs")}),y.jsx(Bt,{children:s&&y.jsx(qn.div,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",ref:a("basicInsurance"),children:y.jsx(Dn,{label:p("basicInsurance"),value:m("basicInsurance"),onChange:v=>{h("basicInsurance",v.target.value),t(g=>{const S={...g};return delete S.basicInsurance,S})},error:r.basicInsurance,required:!0})},"basic-insurance")}),y.jsx(Bt,{children:u&&y.jsx(qn.div,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",ref:a("cardNumber"),children:y.jsx(Dn,{label:p("cardNumber"),value:q0(m("cardNumber")),onChange:v=>{h("cardNumber",v.target.value.replace(/\D/g,"").slice(0,20)),t(g=>{const S={...g};return delete S.cardNumber,S})},error:r.cardNumber,required:!0,inputClassName:"form-input-mono",placeholder:"XXXXX XXXXX XXXXX XXXXX"})},"card-number")}),y.jsx(Bt,{children:f&&y.jsx(qn.div,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",ref:a("policyNumber"),children:y.jsx(Dn,{label:p("policyNumber"),value:m("policyNumber"),onChange:v=>{h("policyNumber",v.target.value),t(g=>{const S={...g};return delete S.policyNumber,S})},error:r.policyNumber,required:!0})},"policy-number")}),y.jsx(Dn,{label:p("complementaryInsurance"),value:q0(m("complementaryInsurance")),onChange:v=>h("complementaryInsurance",v.target.value.replace(/\D/g,"").slice(0,20)),optional:p("optional"),inputClassName:"form-input-mono",placeholder:"XXXXX XXXXX XXXXX XXXXX"})]})}function D7(){const r=Ga(),{watch:t,getValues:a,setValue:l}=Gn(),s=t("reason"),u=t("insurance"),f=t("hasEmployer"),h=t("ocrTimedOut"),{t:m}=Ye("admin"),{t:p}=Ye("loading"),v=eo(),[g,S]=D.useState({}),[x,M]=D.useState(!1),[E,w]=D.useState(!0);D.useEffect(()=>{sessionStorage.getItem("ocr_completed")==="true"&&(sessionStorage.removeItem("ocr_completed"),kx.info(m("ocrInfoToast"),{duration:3e3}))},[]);const A=D.useRef({}),L=q=>J=>{A.current[q]=J};function G(q){for(const J of q){const $=A.current[J];if($){$.scrollIntoView({behavior:"smooth",block:"center"});break}}}function N(){w(!1),l("ocrTimedOut",!1)}async function H(){const q=bM(s,u,f,{required:m("required"),invalidEmail:m("invalidEmail"),invalidNpa:m("invalidNpa"),invalidAvs:m("invalidAvs"),invalidCardNumber:m("invalidCardNumber"),invalidDate:m("invalidDate")}),J=a(),$=q.safeParse({firstName:J.firstName,lastName:J.lastName,gender:J.gender,nationality:J.nationality,street:J.street,npa:J.npa,city:J.city,country:J.country,email:J.email,profession:J.profession,employerName:J.employerName,employerAddress:J.employerAddress,referringDoctor:J.referringDoctor,generalPractitioner:J.generalPractitioner,accidentDate:J.accidentDate,accidentInsurance:J.accidentInsurance,claimNumber:J.claimNumber,avsNumber:J.avsNumber,basicInsurance:J.basicInsurance,cardNumber:J.cardNumber,policyNumber:J.policyNumber,complementaryInsurance:J.complementaryInsurance});if(!$.success){const ee={};for(const R of $.error.errors){const I=R.path[0];ee[I]||(ee[I]=R.message)}S(ee),G(Object.keys(ee));return}S({}),M(!0);try{const ee=a();await v.submitPreadmission(ee),sessionStorage.removeItem("wizard-form-data"),sessionStorage.removeItem("otp_sent"),r({to:"/success"})}catch{M(!1)}}const V=s==="accident"&&f,U=s==="accident",X=u==="swiss",z=s==="accident"||u==="swiss"||u==="international",O=s==="accident"||u==="swiss",Q=u==="international";return y.jsx("div",{className:"step-page",children:y.jsx("div",{className:"step-container-lg",children:y.jsxs("div",{className:"step-card-compact",children:[y.jsxs(Ve,{className:"step-card-header",align:"center",children:[y.jsx("div",{className:"step-icon",children:y.jsx(GM,{className:"w-8 h-8 text-[var(--brand-primary)]"})}),y.jsx(Mr,{children:m("title")}),y.jsx(Ra,{className:"step-subtitle",children:m("subtitle")})]}),y.jsxs(Ve,{className:"step-card-content gap-6",children:[h&&E&&y.jsxs("div",{className:"flex items-start gap-3 rounded-md border border-amber-300 bg-amber-50 p-3",children:[y.jsx(FM,{className:"w-5 h-5 text-amber-600 shrink-0 mt-0.5"}),y.jsx("p",{className:"text-sm text-amber-800 flex-1",children:p("ocrTimeout")}),y.jsx("button",{type:"button",onClick:N,className:"text-amber-600 hover:text-amber-800 shrink-0 cursor-pointer","aria-label":"Dismiss",children:y.jsx(wf,{className:"w-4 h-4"})})]}),y.jsx(S7,{errors:g,setErrors:S,setRef:L}),y.jsx(M7,{errors:g,setErrors:S,setRef:L}),y.jsx(Bt,{children:!!V&&y.jsx(qn.div,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",children:y.jsx(C7,{errors:g,setErrors:S,setRef:L})},"employer")}),y.jsx(x7,{}),y.jsx(Bt,{children:!!U&&y.jsx(qn.div,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",children:y.jsx(A7,{errors:g,setErrors:S,setRef:L})},"accident")}),y.jsx(E7,{errors:g,setErrors:S,setRef:L,showAvs:X,showBasicInsurance:z,showCardNumber:O,showPolicyNumber:Q}),y.jsxs(En,{className:"step-actions",children:[y.jsxs(pa,{type:"button",variant:"outline",onClick:()=>void r({to:"/qualification"}),className:"flex-1 h-12 cursor-pointer",children:[y.jsx(Ys,{className:"w-4 h-4 mr-2"}),m("back")]}),y.jsx(pa,{type:"button",onClick:()=>void H(),disabled:x,className:"flex-1 h-12 active-scale cursor-pointer",children:x?y.jsxs(y.Fragment,{children:[y.jsx(at,{className:"w-4 h-4 mr-2 animate-spin"}),m("submitting")]}):y.jsxs(y.Fragment,{children:[y.jsx(OM,{className:"w-4 h-4 mr-2"}),m("continue")]})})]})]})]})})})}const w7=vr("/admin")({component:D7});function N7(){const r=Ga(),{setValue:t,watch:a}=Gn(),l=a("language"),{t:s}=Ye("landing");return y.jsxs("div",{className:"step-card",children:[y.jsxs(Ve,{className:"step-card-header",children:[y.jsx(En,{justify:"center",className:"mb-8",children:y.jsx("img",{src:Of,alt:"Hôpital de La Tour",className:"h-16",width:"122",height:"64"})}),y.jsxs(En,{justify:"between",className:"mb-10",children:[y.jsxs(En,{className:"gap-2",children:[y.jsx(v2,{className:"w-4 h-4 text-[var(--brand-primary)]"}),y.jsx("span",{className:"text-sm text-slate-500 leading-none",children:s("chooseLanguage")})]}),y.jsxs(Rf,{value:l,onValueChange:u=>t("language",u),children:[y.jsx(Qs,{className:"w-[130px] h-9 text-sm","aria-label":s("chooseLanguage"),children:y.jsx(Lf,{})}),y.jsxs(Ws,{children:[y.jsx(et,{value:"fr",children:"Français"}),y.jsx(et,{value:"en",children:"English"})]})]})]}),y.jsxs(Ve,{align:"center",className:"text-center gap-3",children:[y.jsx(Mr,{children:s("title")}),y.jsxs(Ve,{className:"gap-1.5",children:[y.jsx("p",{className:"step-subtitle !text-base",children:s("subtitle")}),y.jsx("p",{className:"text-sm text-slate-500 text-center",children:s("confidentiality")})]})]})]}),y.jsxs(Ve,{className:"step-card-content",children:[y.jsxs(pa,{onClick:()=>void r({to:"/security"}),className:"w-full h-12 text-base active-scale hover:bg-[var(--brand-primary-hover)]",children:[s("button"),y.jsx(Zs,{className:"w-4 h-4 ml-2"})]}),y.jsxs(En,{justify:"between",className:"gap-8 mt-6 text-xs text-slate-500 mx-4",children:[y.jsxs(En,{className:"gap-1.5",children:[y.jsx("div",{className:"w-2 h-2 rounded-full bg-accent"}),y.jsx(Ra,{size:"xs",color:"muted",children:s("badgeProtected")})]}),y.jsxs(En,{className:"gap-1.5",children:[y.jsx("div",{className:"w-2 h-2 rounded-full bg-[var(--brand-primary)]"}),y.jsx(Ra,{size:"xs",color:"muted",children:s("badgeTime")})]})]})]})]})}const B7=vr("/")({component:N7}),R7=i7.update({id:"/success",path:"/success",getParentRoute:()=>rt}),L7=o7.update({id:"/security",path:"/security",getParentRoute:()=>rt}),T7=g7.update({id:"/qualification",path:"/qualification",getParentRoute:()=>rt}),P7=y7.update({id:"/otp",path:"/otp",getParentRoute:()=>rt}),O7=v7.update({id:"/loading",path:"/loading",getParentRoute:()=>rt}),z7=w7.update({id:"/admin",path:"/admin",getParentRoute:()=>rt}),F7=B7.update({id:"/",path:"/",getParentRoute:()=>rt}),k7={IndexRoute:F7,AdminRoute:z7,LoadingRoute:O7,OtpRoute:P7,QualificationRoute:T7,SecurityRoute:L7,SuccessRoute:R7},G7=rt._addFileChildren(k7)._addFileTypes(),j7=f5({routeTree:G7});function H7({error:r}){const{t}=Ye("errorFallback");return y.jsx("div",{className:"min-h-[100dvh] flex items-center justify-center p-4",children:y.jsxs("div",{className:"text-center space-y-4",children:[y.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:t("title")}),y.jsx("p",{className:"text-slate-600",children:r.message}),y.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-[var(--brand-primary)] text-white rounded-md cursor-pointer",children:t("reload")})]})})}const W0=document.getElementById("root");W0&&Bb.createRoot(W0).render(y.jsx(D.StrictMode,{children:y.jsx(p4,{FallbackComponent:H7,children:y.jsx(g5,{router:j7})})}));
