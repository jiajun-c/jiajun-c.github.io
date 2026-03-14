(function(){const O=document.createElement("link").relList;if(O&&O.supports&&O.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))s(T);new MutationObserver(T=>{for(const D of T)if(D.type==="childList")for(const j of D.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&s(j)}).observe(document,{childList:!0,subtree:!0});function g(T){const D={};return T.integrity&&(D.integrity=T.integrity),T.referrerPolicy&&(D.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?D.credentials="include":T.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function s(T){if(T.ep)return;T.ep=!0;const D=g(T);fetch(T.href,D)}})();var mf={exports:{}},Ma={};var xd;function s0(){if(xd)return Ma;xd=1;var b=Symbol.for("react.transitional.element"),O=Symbol.for("react.fragment");function g(s,T,D){var j=null;if(D!==void 0&&(j=""+D),T.key!==void 0&&(j=""+T.key),"key"in T){D={};for(var L in T)L!=="key"&&(D[L]=T[L])}else D=T;return T=D.ref,{$$typeof:b,type:s,key:j,ref:T!==void 0?T:null,props:D}}return Ma.Fragment=O,Ma.jsx=g,Ma.jsxs=g,Ma}var Md;function o0(){return Md||(Md=1,mf.exports=s0()),mf.exports}var B=o0(),hf={exports:{}},J={};var Ed;function r0(){if(Ed)return J;Ed=1;var b=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),j=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),k=Symbol.iterator;function Y(o){return o===null||typeof o!="object"?null:(o=k&&o[k]||o["@@iterator"],typeof o=="function"?o:null)}var At={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ft=Object.assign,Lt={};function Tt(o,v,E){this.props=o,this.context=v,this.refs=Lt,this.updater=E||At}Tt.prototype.isReactComponent={},Tt.prototype.setState=function(o,v){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,v,"setState")},Tt.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function ln(){}ln.prototype=Tt.prototype;function bt(o,v,E){this.props=o,this.context=v,this.refs=Lt,this.updater=E||At}var Bt=bt.prototype=new ln;Bt.constructor=bt,ft(Bt,Tt.prototype),Bt.isPureReactComponent=!0;var pn=Array.isArray;function qt(){}var I={H:null,A:null,T:null,S:null},Gt=Object.prototype.hasOwnProperty;function $t(o,v,E){var U=E.ref;return{$$typeof:b,type:o,key:v,ref:U!==void 0?U:null,props:E}}function ee(o,v){return $t(o.type,v,o.props)}function an(o){return typeof o=="object"&&o!==null&&o.$$typeof===b}function wt(o){var v={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(E){return v[E]})}var Hn=/\/+/g;function Rt(o,v){return typeof o=="object"&&o!==null&&o.key!=null?wt(""+o.key):v.toString(36)}function q(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(qt,qt):(o.status="pending",o.then(function(v){o.status==="pending"&&(o.status="fulfilled",o.value=v)},function(v){o.status==="pending"&&(o.status="rejected",o.reason=v)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function m(o,v,E,U,V){var W=typeof o;(W==="undefined"||W==="boolean")&&(o=null);var at=!1;if(o===null)at=!0;else switch(W){case"bigint":case"string":case"number":at=!0;break;case"object":switch(o.$$typeof){case b:case O:at=!0;break;case Z:return at=o._init,m(at(o._payload),v,E,U,V)}}if(at)return V=V(o),at=U===""?"."+Rt(o,0):U,pn(V)?(E="",at!=null&&(E=at.replace(Hn,"$&/")+"/"),m(V,v,E,"",function(gt){return gt})):V!=null&&(an(V)&&(V=ee(V,E+(V.key==null||o&&o.key===V.key?"":(""+V.key).replace(Hn,"$&/")+"/")+at)),v.push(V)),1;at=0;var _t=U===""?".":U+":";if(pn(o))for(var St=0;St<o.length;St++)U=o[St],W=_t+Rt(U,St),at+=m(U,v,E,W,V);else if(St=Y(o),typeof St=="function")for(o=St.call(o),St=0;!(U=o.next()).done;)U=U.value,W=_t+Rt(U,St++),at+=m(U,v,E,W,V);else if(W==="object"){if(typeof o.then=="function")return m(q(o),v,E,U,V);throw v=String(o),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return at}function z(o,v,E){if(o==null)return o;var U=[],V=0;return m(o,U,"","",function(W){return v.call(E,W,V++)}),U}function N(o){if(o._status===-1){var v=o._result;v=v(),v.then(function(E){(o._status===0||o._status===-1)&&(o._status=1,o._result=E)},function(E){(o._status===0||o._status===-1)&&(o._status=2,o._result=E)}),o._status===-1&&(o._status=0,o._result=v)}if(o._status===1)return o._result.default;throw o._result}var w=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},X={map:z,forEach:function(o,v,E){z(o,function(){v.apply(this,arguments)},E)},count:function(o){var v=0;return z(o,function(){v++}),v},toArray:function(o){return z(o,function(v){return v})||[]},only:function(o){if(!an(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return J.Activity=R,J.Children=X,J.Component=Tt,J.Fragment=g,J.Profiler=T,J.PureComponent=bt,J.StrictMode=s,J.Suspense=C,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,J.__COMPILER_RUNTIME={__proto__:null,c:function(o){return I.H.useMemoCache(o)}},J.cache=function(o){return function(){return o.apply(null,arguments)}},J.cacheSignal=function(){return null},J.cloneElement=function(o,v,E){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var U=ft({},o.props),V=o.key;if(v!=null)for(W in v.key!==void 0&&(V=""+v.key),v)!Gt.call(v,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&v.ref===void 0||(U[W]=v[W]);var W=arguments.length-2;if(W===1)U.children=E;else if(1<W){for(var at=Array(W),_t=0;_t<W;_t++)at[_t]=arguments[_t+2];U.children=at}return $t(o.type,V,U)},J.createContext=function(o){return o={$$typeof:j,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:D,_context:o},o},J.createElement=function(o,v,E){var U,V={},W=null;if(v!=null)for(U in v.key!==void 0&&(W=""+v.key),v)Gt.call(v,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(V[U]=v[U]);var at=arguments.length-2;if(at===1)V.children=E;else if(1<at){for(var _t=Array(at),St=0;St<at;St++)_t[St]=arguments[St+2];V.children=_t}if(o&&o.defaultProps)for(U in at=o.defaultProps,at)V[U]===void 0&&(V[U]=at[U]);return $t(o,W,V)},J.createRef=function(){return{current:null}},J.forwardRef=function(o){return{$$typeof:L,render:o}},J.isValidElement=an,J.lazy=function(o){return{$$typeof:Z,_payload:{_status:-1,_result:o},_init:N}},J.memo=function(o,v){return{$$typeof:A,type:o,compare:v===void 0?null:v}},J.startTransition=function(o){var v=I.T,E={};I.T=E;try{var U=o(),V=I.S;V!==null&&V(E,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(qt,w)}catch(W){w(W)}finally{v!==null&&E.types!==null&&(v.types=E.types),I.T=v}},J.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},J.use=function(o){return I.H.use(o)},J.useActionState=function(o,v,E){return I.H.useActionState(o,v,E)},J.useCallback=function(o,v){return I.H.useCallback(o,v)},J.useContext=function(o){return I.H.useContext(o)},J.useDebugValue=function(){},J.useDeferredValue=function(o,v){return I.H.useDeferredValue(o,v)},J.useEffect=function(o,v){return I.H.useEffect(o,v)},J.useEffectEvent=function(o){return I.H.useEffectEvent(o)},J.useId=function(){return I.H.useId()},J.useImperativeHandle=function(o,v,E){return I.H.useImperativeHandle(o,v,E)},J.useInsertionEffect=function(o,v){return I.H.useInsertionEffect(o,v)},J.useLayoutEffect=function(o,v){return I.H.useLayoutEffect(o,v)},J.useMemo=function(o,v){return I.H.useMemo(o,v)},J.useOptimistic=function(o,v){return I.H.useOptimistic(o,v)},J.useReducer=function(o,v,E){return I.H.useReducer(o,v,E)},J.useRef=function(o){return I.H.useRef(o)},J.useState=function(o){return I.H.useState(o)},J.useSyncExternalStore=function(o,v,E){return I.H.useSyncExternalStore(o,v,E)},J.useTransition=function(){return I.H.useTransition()},J.version="19.2.4",J}var Od;function bf(){return Od||(Od=1,hf.exports=r0()),hf.exports}var jt=bf(),_f={exports:{}},Ea={},yf={exports:{}},pf={};var Cd;function d0(){return Cd||(Cd=1,(function(b){function O(m,z){var N=m.length;m.push(z);t:for(;0<N;){var w=N-1>>>1,X=m[w];if(0<T(X,z))m[w]=z,m[N]=X,N=w;else break t}}function g(m){return m.length===0?null:m[0]}function s(m){if(m.length===0)return null;var z=m[0],N=m.pop();if(N!==z){m[0]=N;t:for(var w=0,X=m.length,o=X>>>1;w<o;){var v=2*(w+1)-1,E=m[v],U=v+1,V=m[U];if(0>T(E,N))U<X&&0>T(V,E)?(m[w]=V,m[U]=N,w=U):(m[w]=E,m[v]=N,w=v);else if(U<X&&0>T(V,N))m[w]=V,m[U]=N,w=U;else break t}}return z}function T(m,z){var N=m.sortIndex-z.sortIndex;return N!==0?N:m.id-z.id}if(b.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;b.unstable_now=function(){return D.now()}}else{var j=Date,L=j.now();b.unstable_now=function(){return j.now()-L}}var C=[],A=[],Z=1,R=null,k=3,Y=!1,At=!1,ft=!1,Lt=!1,Tt=typeof setTimeout=="function"?setTimeout:null,ln=typeof clearTimeout=="function"?clearTimeout:null,bt=typeof setImmediate<"u"?setImmediate:null;function Bt(m){for(var z=g(A);z!==null;){if(z.callback===null)s(A);else if(z.startTime<=m)s(A),z.sortIndex=z.expirationTime,O(C,z);else break;z=g(A)}}function pn(m){if(ft=!1,Bt(m),!At)if(g(C)!==null)At=!0,qt||(qt=!0,wt());else{var z=g(A);z!==null&&q(pn,z.startTime-m)}}var qt=!1,I=-1,Gt=5,$t=-1;function ee(){return Lt?!0:!(b.unstable_now()-$t<Gt)}function an(){if(Lt=!1,qt){var m=b.unstable_now();$t=m;var z=!0;try{t:{At=!1,ft&&(ft=!1,ln(I),I=-1),Y=!0;var N=k;try{n:{for(Bt(m),R=g(C);R!==null&&!(R.expirationTime>m&&ee());){var w=R.callback;if(typeof w=="function"){R.callback=null,k=R.priorityLevel;var X=w(R.expirationTime<=m);if(m=b.unstable_now(),typeof X=="function"){R.callback=X,Bt(m),z=!0;break n}R===g(C)&&s(C),Bt(m)}else s(C);R=g(C)}if(R!==null)z=!0;else{var o=g(A);o!==null&&q(pn,o.startTime-m),z=!1}}break t}finally{R=null,k=N,Y=!1}z=void 0}}finally{z?wt():qt=!1}}}var wt;if(typeof bt=="function")wt=function(){bt(an)};else if(typeof MessageChannel<"u"){var Hn=new MessageChannel,Rt=Hn.port2;Hn.port1.onmessage=an,wt=function(){Rt.postMessage(null)}}else wt=function(){Tt(an,0)};function q(m,z){I=Tt(function(){m(b.unstable_now())},z)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(m){m.callback=null},b.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gt=0<m?Math.floor(1e3/m):5},b.unstable_getCurrentPriorityLevel=function(){return k},b.unstable_next=function(m){switch(k){case 1:case 2:case 3:var z=3;break;default:z=k}var N=k;k=z;try{return m()}finally{k=N}},b.unstable_requestPaint=function(){Lt=!0},b.unstable_runWithPriority=function(m,z){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var N=k;k=m;try{return z()}finally{k=N}},b.unstable_scheduleCallback=function(m,z,N){var w=b.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?w+N:w):N=w,m){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,m={id:Z++,callback:z,priorityLevel:m,startTime:N,expirationTime:X,sortIndex:-1},N>w?(m.sortIndex=N,O(A,m),g(C)===null&&m===g(A)&&(ft?(ln(I),I=-1):ft=!0,q(pn,N-w))):(m.sortIndex=X,O(C,m),At||Y||(At=!0,qt||(qt=!0,wt()))),m},b.unstable_shouldYield=ee,b.unstable_wrapCallback=function(m){var z=k;return function(){var N=k;k=z;try{return m.apply(this,arguments)}finally{k=N}}}})(pf)),pf}var Dd;function m0(){return Dd||(Dd=1,yf.exports=d0()),yf.exports}var gf={exports:{}},Jt={};var Nd;function h0(){if(Nd)return Jt;Nd=1;var b=bf();function O(C){var A="https://react.dev/errors/"+C;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)A+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+C+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var s={d:{f:g,r:function(){throw Error(O(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},T=Symbol.for("react.portal");function D(C,A,Z){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:R==null?null:""+R,children:C,containerInfo:A,implementation:Z}}var j=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(C,A){if(C==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Jt.createPortal=function(C,A){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(O(299));return D(C,A,null,Z)},Jt.flushSync=function(C){var A=j.T,Z=s.p;try{if(j.T=null,s.p=2,C)return C()}finally{j.T=A,s.p=Z,s.d.f()}},Jt.preconnect=function(C,A){typeof C=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,s.d.C(C,A))},Jt.prefetchDNS=function(C){typeof C=="string"&&s.d.D(C)},Jt.preinit=function(C,A){if(typeof C=="string"&&A&&typeof A.as=="string"){var Z=A.as,R=L(Z,A.crossOrigin),k=typeof A.integrity=="string"?A.integrity:void 0,Y=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;Z==="style"?s.d.S(C,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:R,integrity:k,fetchPriority:Y}):Z==="script"&&s.d.X(C,{crossOrigin:R,integrity:k,fetchPriority:Y,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Jt.preinitModule=function(C,A){if(typeof C=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var Z=L(A.as,A.crossOrigin);s.d.M(C,{crossOrigin:Z,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&s.d.M(C)},Jt.preload=function(C,A){if(typeof C=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var Z=A.as,R=L(Z,A.crossOrigin);s.d.L(C,Z,{crossOrigin:R,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Jt.preloadModule=function(C,A){if(typeof C=="string")if(A){var Z=L(A.as,A.crossOrigin);s.d.m(C,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:Z,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else s.d.m(C)},Jt.requestFormReset=function(C){s.d.r(C)},Jt.unstable_batchedUpdates=function(C,A){return C(A)},Jt.useFormState=function(C,A,Z){return j.H.useFormState(C,A,Z)},Jt.useFormStatus=function(){return j.H.useHostTransitionStatus()},Jt.version="19.2.4",Jt}var Bd;function _0(){if(Bd)return gf.exports;Bd=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(O){console.error(O)}}return b(),gf.exports=h0(),gf.exports}var Ud;function y0(){if(Ud)return Ea;Ud=1;var b=m0(),O=bf(),g=_0();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function D(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function j(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function L(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function C(t){if(D(t)!==t)throw Error(s(188))}function A(t){var n=t.alternate;if(!n){if(n=D(t),n===null)throw Error(s(188));return n!==t?null:t}for(var e=t,l=n;;){var a=e.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){e=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===e)return C(a),t;if(u===l)return C(a),n;u=u.sibling}throw Error(s(188))}if(e.return!==l.return)e=a,l=u;else{for(var i=!1,c=a.child;c;){if(c===e){i=!0,e=a,l=u;break}if(c===l){i=!0,l=a,e=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===e){i=!0,e=u,l=a;break}if(c===l){i=!0,l=u,e=a;break}c=c.sibling}if(!i)throw Error(s(189))}}if(e.alternate!==l)throw Error(s(190))}if(e.tag!==3)throw Error(s(188));return e.stateNode.current===e?t:n}function Z(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=Z(t),n!==null)return n;t=t.sibling}return null}var R=Object.assign,k=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),At=Symbol.for("react.portal"),ft=Symbol.for("react.fragment"),Lt=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),ln=Symbol.for("react.consumer"),bt=Symbol.for("react.context"),Bt=Symbol.for("react.forward_ref"),pn=Symbol.for("react.suspense"),qt=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),$t=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),an=Symbol.iterator;function wt(t){return t===null||typeof t!="object"?null:(t=an&&t[an]||t["@@iterator"],typeof t=="function"?t:null)}var Hn=Symbol.for("react.client.reference");function Rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Hn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ft:return"Fragment";case Tt:return"Profiler";case Lt:return"StrictMode";case pn:return"Suspense";case qt:return"SuspenseList";case $t:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case At:return"Portal";case bt:return t.displayName||"Context";case ln:return(t._context.displayName||"Context")+".Consumer";case Bt:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:Rt(t.type)||"Memo";case Gt:n=t._payload,t=t._init;try{return Rt(t(n))}catch{}}return null}var q=Array.isArray,m=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},w=[],X=-1;function o(t){return{current:t}}function v(t){0>X||(t.current=w[X],w[X]=null,X--)}function E(t,n){X++,w[X]=t.current,t.current=n}var U=o(null),V=o(null),W=o(null),at=o(null);function _t(t,n){switch(E(W,n),E(V,t),E(U,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?kr(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=kr(n),t=$r(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}v(U),E(U,t)}function St(){v(U),v(V),v(W)}function gt(t){t.memoizedState!==null&&E(at,t);var n=U.current,e=$r(n,t.type);n!==e&&(E(V,t),E(U,e))}function gn(t){V.current===t&&(v(U),v(V)),at.current===t&&(v(at),Aa._currentValue=N)}var Bn,Tf;function Ce(t){if(Bn===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Bn=n&&n[1]||"",Tf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bn+t+Tf}var $u=!1;function Wu(t,n){if(!t||$u)return"";$u=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(p){var y=p}Reflect.construct(t,[],M)}else{try{M.call()}catch(p){y=p}t.call(M.prototype)}}else{try{throw Error()}catch(p){y=p}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(p){if(p&&y&&typeof p.stack=="string")return[p.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),_=c.split(`
`);for(a=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;a<_.length&&!_[a].includes("DetermineComponentFrameRoot");)a++;if(l===f.length||a===_.length)for(l=f.length-1,a=_.length-1;1<=l&&0<=a&&f[l]!==_[a];)a--;for(;1<=l&&0<=a;l--,a--)if(f[l]!==_[a]){if(l!==1||a!==1)do if(l--,a--,0>a||f[l]!==_[a]){var S=`
`+f[l].replace(" at new "," at ");return t.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",t.displayName)),S}while(1<=l&&0<=a);break}}}finally{$u=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ce(e):""}function Gd(t,n){switch(t.tag){case 26:case 27:case 5:return Ce(t.type);case 16:return Ce("Lazy");case 13:return t.child!==n&&n!==null?Ce("Suspense Fallback"):Ce("Suspense");case 19:return Ce("SuspenseList");case 0:case 15:return Wu(t.type,!1);case 11:return Wu(t.type.render,!1);case 1:return Wu(t.type,!0);case 31:return Ce("Activity");default:return""}}function zf(t){try{var n="",e=null;do n+=Gd(t,e),e=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fu=Object.prototype.hasOwnProperty,Iu=b.unstable_scheduleCallback,Pu=b.unstable_cancelCallback,Yd=b.unstable_shouldYield,Vd=b.unstable_requestPaint,un=b.unstable_now,Xd=b.unstable_getCurrentPriorityLevel,xf=b.unstable_ImmediatePriority,Mf=b.unstable_UserBlockingPriority,Oa=b.unstable_NormalPriority,Kd=b.unstable_LowPriority,Ef=b.unstable_IdlePriority,Zd=b.log,wd=b.unstable_setDisableYieldValue,jl=null,cn=null;function le(t){if(typeof Zd=="function"&&wd(t),cn&&typeof cn.setStrictMode=="function")try{cn.setStrictMode(jl,t)}catch{}}var fn=Math.clz32?Math.clz32:$d,Jd=Math.log,kd=Math.LN2;function $d(t){return t>>>=0,t===0?32:31-(Jd(t)/kd|0)|0}var Ca=256,Da=262144,Na=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ba(t,n,e){var l=t.pendingLanes;if(l===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~u,l!==0?a=De(l):(i&=c,i!==0?a=De(i):e||(e=c&~t,e!==0&&(a=De(e))))):(c=l&~u,c!==0?a=De(c):i!==0?a=De(i):e||(e=l&~t,e!==0&&(a=De(e)))),a===0?0:n!==0&&n!==a&&(n&u)===0&&(u=a&-a,e=n&-n,u>=e||u===32&&(e&4194048)!==0)?n:a}function ql(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Wd(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Of(){var t=Na;return Na<<=1,(Na&62914560)===0&&(Na=4194304),t}function ti(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function Rl(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fd(t,n,e,l,a,u){var i=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,_=t.hiddenUpdates;for(e=i&~e;0<e;){var S=31-fn(e),M=1<<S;c[S]=0,f[S]=-1;var y=_[S];if(y!==null)for(_[S]=null,S=0;S<y.length;S++){var p=y[S];p!==null&&(p.lane&=-536870913)}e&=~M}l!==0&&Cf(t,l,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~n))}function Cf(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-fn(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|e&261930}function Df(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var l=31-fn(e),a=1<<l;a&n|t[l]&n&&(t[l]|=n),e&=~a}}function Nf(t,n){var e=n&-n;return e=(e&42)!==0?1:ni(e),(e&(t.suspendedLanes|n))!==0?0:e}function ni(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ei(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bf(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:gd(t.type))}function Uf(t,n){var e=z.p;try{return z.p=t,n()}finally{z.p=e}}var ae=Math.random().toString(36).slice(2),Yt="__reactFiber$"+ae,Wt="__reactProps$"+ae,$e="__reactContainer$"+ae,li="__reactEvents$"+ae,Id="__reactListeners$"+ae,Pd="__reactHandles$"+ae,jf="__reactResources$"+ae,Hl="__reactMarker$"+ae;function ai(t){delete t[Yt],delete t[Wt],delete t[li],delete t[Id],delete t[Pd]}function We(t){var n=t[Yt];if(n)return n;for(var e=t.parentNode;e;){if(n=e[$e]||e[Yt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=ed(t);t!==null;){if(e=t[Yt])return e;t=ed(t)}return n}t=e,e=t.parentNode}return null}function Fe(t){if(t=t[Yt]||t[$e]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ql(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ie(t){var n=t[jf];return n||(n=t[jf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ht(t){t[Hl]=!0}var qf=new Set,Rf={};function Ne(t,n){Pe(t,n),Pe(t+"Capture",n)}function Pe(t,n){for(Rf[t]=n,t=0;t<n.length;t++)qf.add(n[t])}var tm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hf={},Qf={};function nm(t){return Fu.call(Qf,t)?!0:Fu.call(Hf,t)?!1:tm.test(t)?Qf[t]=!0:(Hf[t]=!0,!1)}function Ua(t,n,e){if(nm(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function ja(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function Qn(t,n,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+l)}}function vn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lf(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function em(t,n,e){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,u=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){e=""+i,u.call(this,i)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ui(t){if(!t._valueTracker){var n=Lf(t)?"checked":"value";t._valueTracker=em(t,n,""+t[n])}}function Gf(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),l="";return t&&(l=Lf(t)?t.checked?"true":"false":t.value),t=l,t!==e?(n.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var lm=/[\n"\\]/g;function bn(t){return t.replace(lm,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ii(t,n,e,l,a,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),n!=null?i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vn(n)):t.value!==""+vn(n)&&(t.value=""+vn(n)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),n!=null?ci(t,i,vn(n)):e!=null?ci(t,i,vn(e)):l!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+vn(c):t.removeAttribute("name")}function Yf(t,n,e,l,a,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||e!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){ui(t);return}e=e!=null?""+vn(e):"",n=n!=null?""+vn(n):e,c||n===t.value||(t.value=n),t.defaultValue=n}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),ui(t)}function ci(t,n,e){n==="number"&&qa(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function tl(t,n,e,l){if(t=t.options,n){n={};for(var a=0;a<e.length;a++)n["$"+e[a]]=!0;for(e=0;e<t.length;e++)a=n.hasOwnProperty("$"+t[e].value),t[e].selected!==a&&(t[e].selected=a),a&&l&&(t[e].defaultSelected=!0)}else{for(e=""+vn(e),n=null,a=0;a<t.length;a++){if(t[a].value===e){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}n!==null||t[a].disabled||(n=t[a])}n!==null&&(n.selected=!0)}}function Vf(t,n,e){if(n!=null&&(n=""+vn(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+vn(e):""}function Xf(t,n,e,l){if(n==null){if(l!=null){if(e!=null)throw Error(s(92));if(q(l)){if(1<l.length)throw Error(s(93));l=l[0]}e=l}e==null&&(e=""),n=e}e=vn(n),t.defaultValue=e,l=t.textContent,l===e&&l!==""&&l!==null&&(t.value=l),ui(t)}function nl(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var am=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kf(t,n,e){var l=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,e):typeof e!="number"||e===0||am.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function Zf(t,n,e){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in n)l=n[a],n.hasOwnProperty(a)&&e[a]!==l&&Kf(t,a,l)}else for(var u in n)n.hasOwnProperty(u)&&Kf(t,u,n[u])}function fi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var um=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(t){return im.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ln(){}var si=null;function oi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var el=null,ll=null;function wf(t){var n=Fe(t);if(n&&(t=n.stateNode)){var e=t[Wt]||null;t:switch(t=n.stateNode,n.type){case"input":if(ii(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+bn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var l=e[n];if(l!==t&&l.form===t.form){var a=l[Wt]||null;if(!a)throw Error(s(90));ii(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<e.length;n++)l=e[n],l.form===t.form&&Gf(l)}break t;case"textarea":Vf(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&tl(t,!!e.multiple,n,!1)}}}var ri=!1;function Jf(t,n,e){if(ri)return t(n,e);ri=!0;try{var l=t(n);return l}finally{if(ri=!1,(el!==null||ll!==null)&&(Tu(),el&&(n=el,t=ll,ll=el=null,wf(n),t)))for(n=0;n<t.length;n++)wf(t[n])}}function Ll(t,n){var e=t.stateNode;if(e===null)return null;var l=e[Wt]||null;if(l===null)return null;e=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(s(231,n,typeof e));return e}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=!1;if(Gn)try{var Gl={};Object.defineProperty(Gl,"passive",{get:function(){di=!0}}),window.addEventListener("test",Gl,Gl),window.removeEventListener("test",Gl,Gl)}catch{di=!1}var ue=null,mi=null,Ha=null;function kf(){if(Ha)return Ha;var t,n=mi,e=n.length,l,a="value"in ue?ue.value:ue.textContent,u=a.length;for(t=0;t<e&&n[t]===a[t];t++);var i=e-t;for(l=1;l<=i&&n[e-l]===a[u-l];l++);return Ha=a.slice(t,1<l?1-l:void 0)}function Qa(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function $f(){return!1}function Ft(t){function n(e,l,a,u,i){this._reactName=e,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?La:$f,this.isPropagationStopped=$f,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),n}var Be={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=Ft(Be),Yl=R({},Be,{view:0,detail:0}),cm=Ft(Yl),hi,_i,Vl,Ya=R({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vl&&(Vl&&t.type==="mousemove"?(hi=t.screenX-Vl.screenX,_i=t.screenY-Vl.screenY):_i=hi=0,Vl=t),hi)},movementY:function(t){return"movementY"in t?t.movementY:_i}}),Wf=Ft(Ya),fm=R({},Ya,{dataTransfer:0}),sm=Ft(fm),om=R({},Yl,{relatedTarget:0}),yi=Ft(om),rm=R({},Be,{animationName:0,elapsedTime:0,pseudoElement:0}),dm=Ft(rm),mm=R({},Be,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hm=Ft(mm),_m=R({},Be,{data:0}),Ff=Ft(_m),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gm[t])?!!n[t]:!1}function pi(){return vm}var bm=R({},Yl,{key:function(t){if(t.key){var n=ym[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pi,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sm=Ft(bm),Am=R({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Ft(Am),Tm=R({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pi}),zm=Ft(Tm),xm=R({},Be,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=Ft(xm),Em=R({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Ft(Em),Cm=R({},Be,{newState:0,oldState:0}),Dm=Ft(Cm),Nm=[9,13,27,32],gi=Gn&&"CompositionEvent"in window,Xl=null;Gn&&"documentMode"in document&&(Xl=document.documentMode);var Bm=Gn&&"TextEvent"in window&&!Xl,Pf=Gn&&(!gi||Xl&&8<Xl&&11>=Xl),ts=" ",ns=!1;function es(t,n){switch(t){case"keyup":return Nm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ls(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var al=!1;function Um(t,n){switch(t){case"compositionend":return ls(n);case"keypress":return n.which!==32?null:(ns=!0,ts);case"textInput":return t=n.data,t===ts&&ns?null:t;default:return null}}function jm(t,n){if(al)return t==="compositionend"||!gi&&es(t,n)?(t=kf(),Ha=mi=ue=null,al=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pf&&n.locale!=="ko"?null:n.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qm[t.type]:n==="textarea"}function us(t,n,e,l){el?ll?ll.push(l):ll=[l]:el=l,n=Du(n,"onChange"),0<n.length&&(e=new Ga("onChange","change",null,e,l),t.push({event:e,listeners:n}))}var Kl=null,Zl=null;function Rm(t){Vr(t,0)}function Va(t){var n=Ql(t);if(Gf(n))return t}function is(t,n){if(t==="change")return n}var cs=!1;if(Gn){var vi;if(Gn){var bi="oninput"in document;if(!bi){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),bi=typeof fs.oninput=="function"}vi=bi}else vi=!1;cs=vi&&(!document.documentMode||9<document.documentMode)}function ss(){Kl&&(Kl.detachEvent("onpropertychange",os),Zl=Kl=null)}function os(t){if(t.propertyName==="value"&&Va(Zl)){var n=[];us(n,Zl,t,oi(t)),Jf(Rm,n)}}function Hm(t,n,e){t==="focusin"?(ss(),Kl=n,Zl=e,Kl.attachEvent("onpropertychange",os)):t==="focusout"&&ss()}function Qm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Va(Zl)}function Lm(t,n){if(t==="click")return Va(n)}function Gm(t,n){if(t==="input"||t==="change")return Va(n)}function Ym(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var sn=typeof Object.is=="function"?Object.is:Ym;function wl(t,n){if(sn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),l=Object.keys(n);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var a=e[l];if(!Fu.call(n,a)||!sn(t[a],n[a]))return!1}return!0}function rs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ds(t,n){var e=rs(t);t=0;for(var l;e;){if(e.nodeType===3){if(l=t+e.textContent.length,t<=n&&l>=n)return{node:e,offset:n-t};t=l}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=rs(e)}}function ms(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ms(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function hs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qa(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=qa(t.document)}return n}function Si(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Vm=Gn&&"documentMode"in document&&11>=document.documentMode,ul=null,Ai=null,Jl=null,Ti=!1;function _s(t,n,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Ti||ul==null||ul!==qa(l)||(l=ul,"selectionStart"in l&&Si(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jl&&wl(Jl,l)||(Jl=l,l=Du(Ai,"onSelect"),0<l.length&&(n=new Ga("onSelect","select",null,n,e),t.push({event:n,listeners:l}),n.target=ul)))}function Ue(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var il={animationend:Ue("Animation","AnimationEnd"),animationiteration:Ue("Animation","AnimationIteration"),animationstart:Ue("Animation","AnimationStart"),transitionrun:Ue("Transition","TransitionRun"),transitionstart:Ue("Transition","TransitionStart"),transitioncancel:Ue("Transition","TransitionCancel"),transitionend:Ue("Transition","TransitionEnd")},zi={},ys={};Gn&&(ys=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function je(t){if(zi[t])return zi[t];if(!il[t])return t;var n=il[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in ys)return zi[t]=n[e];return t}var ps=je("animationend"),gs=je("animationiteration"),vs=je("animationstart"),Xm=je("transitionrun"),Km=je("transitionstart"),Zm=je("transitioncancel"),bs=je("transitionend"),Ss=new Map,xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xi.push("scrollEnd");function Cn(t,n){Ss.set(t,n),Ne(n,[t])}var Xa=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Sn=[],cl=0,Mi=0;function Ka(){for(var t=cl,n=Mi=cl=0;n<t;){var e=Sn[n];Sn[n++]=null;var l=Sn[n];Sn[n++]=null;var a=Sn[n];Sn[n++]=null;var u=Sn[n];if(Sn[n++]=null,l!==null&&a!==null){var i=l.pending;i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a}u!==0&&As(e,a,u)}}function Za(t,n,e,l){Sn[cl++]=t,Sn[cl++]=n,Sn[cl++]=e,Sn[cl++]=l,Mi|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ei(t,n,e,l){return Za(t,n,e,l),wa(t)}function qe(t,n){return Za(t,null,null,n),wa(t)}function As(t,n,e){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e);for(var a=!1,u=t.return;u!==null;)u.childLanes|=e,l=u.alternate,l!==null&&(l.childLanes|=e),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&n!==null&&(a=31-fn(e),t=u.hiddenUpdates,l=t[a],l===null?t[a]=[n]:l.push(n),n.lane=e|536870912),u):null}function wa(t){if(50<_a)throw _a=0,Rc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fl={};function wm(t,n,e,l){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,n,e,l){return new wm(t,n,e,l)}function Oi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yn(t,n){var e=t.alternate;return e===null?(e=on(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Ts(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ja(t,n,e,l,a,u){var i=0;if(l=t,typeof t=="function")Oi(t)&&(i=1);else if(typeof t=="string")i=Fh(t,e,U.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case $t:return t=on(31,e,n,a),t.elementType=$t,t.lanes=u,t;case ft:return Re(e.children,a,u,n);case Lt:i=8,a|=24;break;case Tt:return t=on(12,e,n,a|2),t.elementType=Tt,t.lanes=u,t;case pn:return t=on(13,e,n,a),t.elementType=pn,t.lanes=u,t;case qt:return t=on(19,e,n,a),t.elementType=qt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bt:i=10;break t;case ln:i=9;break t;case Bt:i=11;break t;case I:i=14;break t;case Gt:i=16,l=null;break t}i=29,e=Error(s(130,t===null?"null":typeof t,"")),l=null}return n=on(i,e,n,a),n.elementType=t,n.type=l,n.lanes=u,n}function Re(t,n,e,l){return t=on(7,t,l,n),t.lanes=e,t}function Ci(t,n,e){return t=on(6,t,null,n),t.lanes=e,t}function zs(t){var n=on(18,null,null,0);return n.stateNode=t,n}function Di(t,n,e){return n=on(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var xs=new WeakMap;function An(t,n){if(typeof t=="object"&&t!==null){var e=xs.get(t);return e!==void 0?e:(n={value:t,source:n,stack:zf(n)},xs.set(t,n),n)}return{value:t,source:n,stack:zf(n)}}var sl=[],ol=0,ka=null,kl=0,Tn=[],zn=0,ie=null,Un=1,jn="";function Vn(t,n){sl[ol++]=kl,sl[ol++]=ka,ka=t,kl=n}function Ms(t,n,e){Tn[zn++]=Un,Tn[zn++]=jn,Tn[zn++]=ie,ie=t;var l=Un;t=jn;var a=32-fn(l)-1;l&=~(1<<a),e+=1;var u=32-fn(n)+a;if(30<u){var i=a-a%5;u=(l&(1<<i)-1).toString(32),l>>=i,a-=i,Un=1<<32-fn(n)+a|e<<a|l,jn=u+t}else Un=1<<u|e<<a|l,jn=t}function Ni(t){t.return!==null&&(Vn(t,1),Ms(t,1,0))}function Bi(t){for(;t===ka;)ka=sl[--ol],sl[ol]=null,kl=sl[--ol],sl[ol]=null;for(;t===ie;)ie=Tn[--zn],Tn[zn]=null,jn=Tn[--zn],Tn[zn]=null,Un=Tn[--zn],Tn[zn]=null}function Es(t,n){Tn[zn++]=Un,Tn[zn++]=jn,Tn[zn++]=ie,Un=n.id,jn=n.overflow,ie=t}var Vt=null,yt=null,lt=!1,ce=null,xn=!1,Ui=Error(s(519));function fe(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $l(An(n,t)),Ui}function Os(t){var n=t.stateNode,e=t.type,l=t.memoizedProps;switch(n[Yt]=t,n[Wt]=l,e){case"dialog":tt("cancel",n),tt("close",n);break;case"iframe":case"object":case"embed":tt("load",n);break;case"video":case"audio":for(e=0;e<pa.length;e++)tt(pa[e],n);break;case"source":tt("error",n);break;case"img":case"image":case"link":tt("error",n),tt("load",n);break;case"details":tt("toggle",n);break;case"input":tt("invalid",n),Yf(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":tt("invalid",n);break;case"textarea":tt("invalid",n),Xf(n,l.value,l.defaultValue,l.children)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||l.suppressHydrationWarning===!0||wr(n.textContent,e)?(l.popover!=null&&(tt("beforetoggle",n),tt("toggle",n)),l.onScroll!=null&&tt("scroll",n),l.onScrollEnd!=null&&tt("scrollend",n),l.onClick!=null&&(n.onclick=Ln),n=!0):n=!1,n||fe(t,!0)}function Cs(t){for(Vt=t.return;Vt;)switch(Vt.tag){case 5:case 31:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:Vt=Vt.return}}function rl(t){if(t!==Vt)return!1;if(!lt)return Cs(t),lt=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Fc(t.type,t.memoizedProps)),e=!e),e&&yt&&fe(t),Cs(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));yt=nd(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));yt=nd(t)}else n===27?(n=yt,Ae(t.type)?(t=ef,ef=null,yt=t):yt=n):yt=Vt?En(t.stateNode.nextSibling):null;return!0}function He(){yt=Vt=null,lt=!1}function ji(){var t=ce;return t!==null&&(nn===null?nn=t:nn.push.apply(nn,t),ce=null),t}function $l(t){ce===null?ce=[t]:ce.push(t)}var qi=o(null),Qe=null,Xn=null;function se(t,n,e){E(qi,n._currentValue),n._currentValue=e}function Kn(t){t._currentValue=qi.current,v(qi)}function Ri(t,n,e){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===e)break;t=t.return}}function Hi(t,n,e,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=a;for(var f=0;f<n.length;f++)if(c.context===n[f]){u.lanes|=e,c=u.alternate,c!==null&&(c.lanes|=e),Ri(u.return,e,t),l||(i=null);break t}u=c.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(s(341));i.lanes|=e,u=i.alternate,u!==null&&(u.lanes|=e),Ri(i,e,t),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function dl(t,n,e,l){t=null;for(var a=n,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(s(387));if(i=i.memoizedProps,i!==null){var c=a.type;sn(a.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(a===at.current){if(i=a.alternate,i===null)throw Error(s(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Aa):t=[Aa])}a=a.return}t!==null&&Hi(n,t,e,l),n.flags|=262144}function $a(t){for(t=t.firstContext;t!==null;){if(!sn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Le(t){Qe=t,Xn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xt(t){return Ds(Qe,t)}function Wa(t,n){return Qe===null&&Le(t),Ds(t,n)}function Ds(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},Xn===null){if(t===null)throw Error(s(308));Xn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xn=Xn.next=n;return e}var Jm=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},km=b.unstable_scheduleCallback,$m=b.unstable_NormalPriority,Ot={$$typeof:bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qi(){return{controller:new Jm,data:new Map,refCount:0}}function Wl(t){t.refCount--,t.refCount===0&&km($m,function(){t.controller.abort()})}var Fl=null,Li=0,ml=0,hl=null;function Wm(t,n){if(Fl===null){var e=Fl=[];Li=0,ml=Vc(),hl={status:"pending",value:void 0,then:function(l){e.push(l)}}}return Li++,n.then(Ns,Ns),n}function Ns(){if(--Li===0&&Fl!==null){hl!==null&&(hl.status="fulfilled");var t=Fl;Fl=null,ml=0,hl=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fm(t,n){var e=[],l={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var a=0;a<e.length;a++)(0,e[a])(n)},function(a){for(l.status="rejected",l.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),l}var Bs=m.S;m.S=function(t,n){yr=un(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wm(t,n),Bs!==null&&Bs(t,n)};var Ge=o(null);function Gi(){var t=Ge.current;return t!==null?t:ht.pooledCache}function Fa(t,n){n===null?E(Ge,Ge.current):E(Ge,n.pool)}function Us(){var t=Gi();return t===null?null:{parent:Ot._currentValue,pool:t}}var _l=Error(s(460)),Yi=Error(s(474)),Ia=Error(s(542)),Pa={then:function(){}};function js(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qs(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(Ln,Ln),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hs(t),t;default:if(typeof n.status=="string")n.then(Ln,Ln);else{if(t=ht,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=l}},function(l){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hs(t),t}throw Ve=n,_l}}function Ye(t){try{var n=t._init;return n(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ve=e,_l):e}}var Ve=null;function Rs(){if(Ve===null)throw Error(s(459));var t=Ve;return Ve=null,t}function Hs(t){if(t===_l||t===Ia)throw Error(s(483))}var yl=null,Il=0;function tu(t){var n=Il;return Il+=1,yl===null&&(yl=[]),qs(yl,t,n)}function Pl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nu(t,n){throw n.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qs(t){function n(d,r){if(t){var h=d.deletions;h===null?(d.deletions=[r],d.flags|=16):h.push(r)}}function e(d,r){if(!t)return null;for(;r!==null;)n(d,r),r=r.sibling;return null}function l(d){for(var r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function a(d,r){return d=Yn(d,r),d.index=0,d.sibling=null,d}function u(d,r,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<r?(d.flags|=67108866,r):h):(d.flags|=67108866,r)):(d.flags|=1048576,r)}function i(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,r,h,x){return r===null||r.tag!==6?(r=Ci(h,d.mode,x),r.return=d,r):(r=a(r,h),r.return=d,r)}function f(d,r,h,x){var G=h.type;return G===ft?S(d,r,h.props.children,x,h.key):r!==null&&(r.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Gt&&Ye(G)===r.type)?(r=a(r,h.props),Pl(r,h),r.return=d,r):(r=Ja(h.type,h.key,h.props,null,d.mode,x),Pl(r,h),r.return=d,r)}function _(d,r,h,x){return r===null||r.tag!==4||r.stateNode.containerInfo!==h.containerInfo||r.stateNode.implementation!==h.implementation?(r=Di(h,d.mode,x),r.return=d,r):(r=a(r,h.children||[]),r.return=d,r)}function S(d,r,h,x,G){return r===null||r.tag!==7?(r=Re(h,d.mode,x,G),r.return=d,r):(r=a(r,h),r.return=d,r)}function M(d,r,h){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Ci(""+r,d.mode,h),r.return=d,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Y:return h=Ja(r.type,r.key,r.props,null,d.mode,h),Pl(h,r),h.return=d,h;case At:return r=Di(r,d.mode,h),r.return=d,r;case Gt:return r=Ye(r),M(d,r,h)}if(q(r)||wt(r))return r=Re(r,d.mode,h,null),r.return=d,r;if(typeof r.then=="function")return M(d,tu(r),h);if(r.$$typeof===bt)return M(d,Wa(d,r),h);nu(d,r)}return null}function y(d,r,h,x){var G=r!==null?r.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return G!==null?null:c(d,r,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Y:return h.key===G?f(d,r,h,x):null;case At:return h.key===G?_(d,r,h,x):null;case Gt:return h=Ye(h),y(d,r,h,x)}if(q(h)||wt(h))return G!==null?null:S(d,r,h,x,null);if(typeof h.then=="function")return y(d,r,tu(h),x);if(h.$$typeof===bt)return y(d,r,Wa(d,h),x);nu(d,h)}return null}function p(d,r,h,x,G){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(h)||null,c(r,d,""+x,G);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Y:return d=d.get(x.key===null?h:x.key)||null,f(r,d,x,G);case At:return d=d.get(x.key===null?h:x.key)||null,_(r,d,x,G);case Gt:return x=Ye(x),p(d,r,h,x,G)}if(q(x)||wt(x))return d=d.get(h)||null,S(r,d,x,G,null);if(typeof x.then=="function")return p(d,r,h,tu(x),G);if(x.$$typeof===bt)return p(d,r,h,Wa(r,x),G);nu(r,x)}return null}function H(d,r,h,x){for(var G=null,ut=null,Q=r,F=r=0,et=null;Q!==null&&F<h.length;F++){Q.index>F?(et=Q,Q=null):et=Q.sibling;var it=y(d,Q,h[F],x);if(it===null){Q===null&&(Q=et);break}t&&Q&&it.alternate===null&&n(d,Q),r=u(it,r,F),ut===null?G=it:ut.sibling=it,ut=it,Q=et}if(F===h.length)return e(d,Q),lt&&Vn(d,F),G;if(Q===null){for(;F<h.length;F++)Q=M(d,h[F],x),Q!==null&&(r=u(Q,r,F),ut===null?G=Q:ut.sibling=Q,ut=Q);return lt&&Vn(d,F),G}for(Q=l(Q);F<h.length;F++)et=p(Q,d,F,h[F],x),et!==null&&(t&&et.alternate!==null&&Q.delete(et.key===null?F:et.key),r=u(et,r,F),ut===null?G=et:ut.sibling=et,ut=et);return t&&Q.forEach(function(Ee){return n(d,Ee)}),lt&&Vn(d,F),G}function K(d,r,h,x){if(h==null)throw Error(s(151));for(var G=null,ut=null,Q=r,F=r=0,et=null,it=h.next();Q!==null&&!it.done;F++,it=h.next()){Q.index>F?(et=Q,Q=null):et=Q.sibling;var Ee=y(d,Q,it.value,x);if(Ee===null){Q===null&&(Q=et);break}t&&Q&&Ee.alternate===null&&n(d,Q),r=u(Ee,r,F),ut===null?G=Ee:ut.sibling=Ee,ut=Ee,Q=et}if(it.done)return e(d,Q),lt&&Vn(d,F),G;if(Q===null){for(;!it.done;F++,it=h.next())it=M(d,it.value,x),it!==null&&(r=u(it,r,F),ut===null?G=it:ut.sibling=it,ut=it);return lt&&Vn(d,F),G}for(Q=l(Q);!it.done;F++,it=h.next())it=p(Q,d,F,it.value,x),it!==null&&(t&&it.alternate!==null&&Q.delete(it.key===null?F:it.key),r=u(it,r,F),ut===null?G=it:ut.sibling=it,ut=it);return t&&Q.forEach(function(f0){return n(d,f0)}),lt&&Vn(d,F),G}function mt(d,r,h,x){if(typeof h=="object"&&h!==null&&h.type===ft&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Y:t:{for(var G=h.key;r!==null;){if(r.key===G){if(G=h.type,G===ft){if(r.tag===7){e(d,r.sibling),x=a(r,h.props.children),x.return=d,d=x;break t}}else if(r.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Gt&&Ye(G)===r.type){e(d,r.sibling),x=a(r,h.props),Pl(x,h),x.return=d,d=x;break t}e(d,r);break}else n(d,r);r=r.sibling}h.type===ft?(x=Re(h.props.children,d.mode,x,h.key),x.return=d,d=x):(x=Ja(h.type,h.key,h.props,null,d.mode,x),Pl(x,h),x.return=d,d=x)}return i(d);case At:t:{for(G=h.key;r!==null;){if(r.key===G)if(r.tag===4&&r.stateNode.containerInfo===h.containerInfo&&r.stateNode.implementation===h.implementation){e(d,r.sibling),x=a(r,h.children||[]),x.return=d,d=x;break t}else{e(d,r);break}else n(d,r);r=r.sibling}x=Di(h,d.mode,x),x.return=d,d=x}return i(d);case Gt:return h=Ye(h),mt(d,r,h,x)}if(q(h))return H(d,r,h,x);if(wt(h)){if(G=wt(h),typeof G!="function")throw Error(s(150));return h=G.call(h),K(d,r,h,x)}if(typeof h.then=="function")return mt(d,r,tu(h),x);if(h.$$typeof===bt)return mt(d,r,Wa(d,h),x);nu(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,r!==null&&r.tag===6?(e(d,r.sibling),x=a(r,h),x.return=d,d=x):(e(d,r),x=Ci(h,d.mode,x),x.return=d,d=x),i(d)):e(d,r)}return function(d,r,h,x){try{Il=0;var G=mt(d,r,h,x);return yl=null,G}catch(Q){if(Q===_l||Q===Ia)throw Q;var ut=on(29,Q,null,d.mode);return ut.lanes=x,ut.return=d,ut}}}var Xe=Qs(!0),Ls=Qs(!1),oe=!1;function Vi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xi(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function re(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function de(t,n,e){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ct&2)!==0){var a=l.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),l.pending=n,n=wa(t),As(t,null,e),n}return Za(t,l,n,e),wa(t)}function ta(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,e|=l,n.lanes=e,Df(t,e)}}function Ki(t,n){var e=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var a=null,u=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,e=e.next}while(e!==null);u===null?a=u=n:u=u.next=n}else a=u=n;e={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var Zi=!1;function na(){if(Zi){var t=hl;if(t!==null)throw t}}function ea(t,n,e,l){Zi=!1;var a=t.updateQueue;oe=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var f=c,_=f.next;f.next=null,i===null?u=_:i.next=_,i=f;var S=t.alternate;S!==null&&(S=S.updateQueue,c=S.lastBaseUpdate,c!==i&&(c===null?S.firstBaseUpdate=_:c.next=_,S.lastBaseUpdate=f))}if(u!==null){var M=a.baseState;i=0,S=_=f=null,c=u;do{var y=c.lane&-536870913,p=y!==c.lane;if(p?(nt&y)===y:(l&y)===y){y!==0&&y===ml&&(Zi=!0),S!==null&&(S=S.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var H=t,K=c;y=n;var mt=e;switch(K.tag){case 1:if(H=K.payload,typeof H=="function"){M=H.call(mt,M,y);break t}M=H;break t;case 3:H.flags=H.flags&-65537|128;case 0:if(H=K.payload,y=typeof H=="function"?H.call(mt,M,y):H,y==null)break t;M=R({},M,y);break t;case 2:oe=!0}}y=c.callback,y!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[y]:p.push(y))}else p={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},S===null?(_=S=p,f=M):S=S.next=p,i|=y;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;p=c,c=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);S===null&&(f=M),a.baseState=f,a.firstBaseUpdate=_,a.lastBaseUpdate=S,u===null&&(a.shared.lanes=0),pe|=i,t.lanes=i,t.memoizedState=M}}function Gs(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Ys(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Gs(e[t],n)}var pl=o(null),eu=o(0);function Vs(t,n){t=Pn,E(eu,t),E(pl,n),Pn=t|n.baseLanes}function wi(){E(eu,Pn),E(pl,pl.current)}function Ji(){Pn=eu.current,v(pl),v(eu)}var rn=o(null),Mn=null;function me(t){var n=t.alternate;E(Mt,Mt.current&1),E(rn,t),Mn===null&&(n===null||pl.current!==null||n.memoizedState!==null)&&(Mn=t)}function ki(t){E(Mt,Mt.current),E(rn,t),Mn===null&&(Mn=t)}function Xs(t){t.tag===22?(E(Mt,Mt.current),E(rn,t),Mn===null&&(Mn=t)):he()}function he(){E(Mt,Mt.current),E(rn,rn.current)}function dn(t){v(rn),Mn===t&&(Mn=null),v(Mt)}var Mt=o(0);function lu(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||tf(e)||nf(e)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zn=0,$=null,rt=null,Ct=null,au=!1,gl=!1,Ke=!1,uu=0,la=0,vl=null,Im=0;function zt(){throw Error(s(321))}function $i(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!sn(t[e],n[e]))return!1;return!0}function Wi(t,n,e,l,a,u){return Zn=u,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,m.H=t===null||t.memoizedState===null?Eo:rc,Ke=!1,u=e(l,a),Ke=!1,gl&&(u=Zs(n,e,l,a)),Ks(t),u}function Ks(t){m.H=ia;var n=rt!==null&&rt.next!==null;if(Zn=0,Ct=rt=$=null,au=!1,la=0,vl=null,n)throw Error(s(300));t===null||Dt||(t=t.dependencies,t!==null&&$a(t)&&(Dt=!0))}function Zs(t,n,e,l){$=t;var a=0;do{if(gl&&(vl=null),la=0,gl=!1,25<=a)throw Error(s(301));if(a+=1,Ct=rt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}m.H=Oo,u=n(e,l)}while(gl);return u}function Pm(){var t=m.H,n=t.useState()[0];return n=typeof n.then=="function"?aa(n):n,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&($.flags|=1024),n}function Fi(){var t=uu!==0;return uu=0,t}function Ii(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function Pi(t){if(au){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}au=!1}Zn=0,Ct=rt=$=null,gl=!1,la=uu=0,vl=null}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?$.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Et(){if(rt===null){var t=$.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var n=Ct===null?$.memoizedState:Ct.next;if(n!==null)Ct=n,rt=t;else{if(t===null)throw $.alternate===null?Error(s(467)):Error(s(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Ct===null?$.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function aa(t){var n=la;return la+=1,vl===null&&(vl=[]),t=qs(vl,t,n),n=$,(Ct===null?n.memoizedState:Ct.next)===null&&(n=n.alternate,m.H=n===null||n.memoizedState===null?Eo:rc),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return aa(t);if(t.$$typeof===bt)return Xt(t)}throw Error(s(438,String(t)))}function tc(t){var n=null,e=$.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var l=$.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=iu(),$.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),l=0;l<t;l++)e[l]=ee;return n.index++,e}function wn(t,n){return typeof n=="function"?n(t):n}function fu(t){var n=Et();return nc(n,rt,t)}function nc(t,n,e){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var a=t.baseQueue,u=l.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}n.baseQueue=a=u,l.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{n=a.next;var c=i=null,f=null,_=n,S=!1;do{var M=_.lane&-536870913;if(M!==_.lane?(nt&M)===M:(Zn&M)===M){var y=_.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),M===ml&&(S=!0);else if((Zn&y)===y){_=_.next,y===ml&&(S=!0);continue}else M={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},f===null?(c=f=M,i=u):f=f.next=M,$.lanes|=y,pe|=y;M=_.action,Ke&&e(u,M),u=_.hasEagerState?_.eagerState:e(u,M)}else y={lane:M,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},f===null?(c=f=y,i=u):f=f.next=y,$.lanes|=M,pe|=M;_=_.next}while(_!==null&&_!==n);if(f===null?i=u:f.next=c,!sn(u,t.memoizedState)&&(Dt=!0,S&&(e=hl,e!==null)))throw e;t.memoizedState=u,t.baseState=i,t.baseQueue=f,l.lastRenderedState=u}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function ec(t){var n=Et(),e=n.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=t;var l=e.dispatch,a=e.pending,u=n.memoizedState;if(a!==null){e.pending=null;var i=a=a.next;do u=t(u,i.action),i=i.next;while(i!==a);sn(u,n.memoizedState)||(Dt=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),e.lastRenderedState=u}return[u,l]}function ws(t,n,e){var l=$,a=Et(),u=lt;if(u){if(e===void 0)throw Error(s(407));e=e()}else e=n();var i=!sn((rt||a).memoizedState,e);if(i&&(a.memoizedState=e,Dt=!0),a=a.queue,uc($s.bind(null,l,a,t),[t]),a.getSnapshot!==n||i||Ct!==null&&Ct.memoizedState.tag&1){if(l.flags|=2048,bl(9,{destroy:void 0},ks.bind(null,l,a,e,n),null),ht===null)throw Error(s(349));u||(Zn&127)!==0||Js(l,n,e)}return e}function Js(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=$.updateQueue,n===null?(n=iu(),$.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function ks(t,n,e,l){n.value=e,n.getSnapshot=l,Ws(n)&&Fs(t)}function $s(t,n,e){return e(function(){Ws(n)&&Fs(t)})}function Ws(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!sn(t,e)}catch{return!0}}function Fs(t){var n=qe(t,2);n!==null&&en(n,t,2)}function lc(t){var n=kt();if(typeof t=="function"){var e=t;if(t=e(),Ke){le(!0);try{e()}finally{le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:t},n}function Is(t,n,e,l){return t.baseState=e,nc(t,rt,typeof l=="function"?l:wn)}function th(t,n,e,l,a){if(ru(t))throw Error(s(485));if(t=n.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};m.T!==null?e(!0):u.isTransition=!1,l(u),e=n.pending,e===null?(u.next=n.pending=u,Ps(n,u)):(u.next=e.next,n.pending=e.next=u)}}function Ps(t,n){var e=n.action,l=n.payload,a=t.state;if(n.isTransition){var u=m.T,i={};m.T=i;try{var c=e(a,l),f=m.S;f!==null&&f(i,c),to(t,n,c)}catch(_){ac(t,n,_)}finally{u!==null&&i.types!==null&&(u.types=i.types),m.T=u}}else try{u=e(a,l),to(t,n,u)}catch(_){ac(t,n,_)}}function to(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){no(t,n,l)},function(l){return ac(t,n,l)}):no(t,n,e)}function no(t,n,e){n.status="fulfilled",n.value=e,eo(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,Ps(t,e)))}function ac(t,n,e){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=e,eo(n),n=n.next;while(n!==l)}t.action=null}function eo(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function lo(t,n){return n}function ao(t,n){if(lt){var e=ht.formState;if(e!==null){t:{var l=$;if(lt){if(yt){n:{for(var a=yt,u=xn;a.nodeType!==8;){if(!u){a=null;break n}if(a=En(a.nextSibling),a===null){a=null;break n}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){yt=En(a.nextSibling),l=a.data==="F!";break t}}fe(l)}l=!1}l&&(n=e[0])}}return e=kt(),e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:n},e.queue=l,e=zo.bind(null,$,l),l.dispatch=e,l=lc(!1),u=oc.bind(null,$,!1,l.queue),l=kt(),a={state:n,dispatch:null,action:t,pending:null},l.queue=a,e=th.bind(null,$,a,u,e),a.dispatch=e,l.memoizedState=t,[n,e,!1]}function uo(t){var n=Et();return io(n,rt,t)}function io(t,n,e){if(n=nc(t,n,lo)[0],t=fu(wn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=aa(n)}catch(i){throw i===_l?Ia:i}else l=n;n=Et();var a=n.queue,u=a.dispatch;return e!==n.memoizedState&&($.flags|=2048,bl(9,{destroy:void 0},nh.bind(null,a,e),null)),[l,u,t]}function nh(t,n){t.action=n}function co(t){var n=Et(),e=rt;if(e!==null)return io(n,e,t);Et(),n=n.memoizedState,e=Et();var l=e.queue.dispatch;return e.memoizedState=t,[n,l,!1]}function bl(t,n,e,l){return t={tag:t,create:e,deps:l,inst:n,next:null},n=$.updateQueue,n===null&&(n=iu(),$.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(l=e.next,e.next=t,t.next=l,n.lastEffect=t),t}function fo(){return Et().memoizedState}function su(t,n,e,l){var a=kt();$.flags|=t,a.memoizedState=bl(1|n,{destroy:void 0},e,l===void 0?null:l)}function ou(t,n,e,l){var a=Et();l=l===void 0?null:l;var u=a.memoizedState.inst;rt!==null&&l!==null&&$i(l,rt.memoizedState.deps)?a.memoizedState=bl(n,u,e,l):($.flags|=t,a.memoizedState=bl(1|n,u,e,l))}function so(t,n){su(8390656,8,t,n)}function uc(t,n){ou(2048,8,t,n)}function eh(t){$.flags|=4;var n=$.updateQueue;if(n===null)n=iu(),$.updateQueue=n,n.events=[t];else{var e=n.events;e===null?n.events=[t]:e.push(t)}}function oo(t){var n=Et().memoizedState;return eh({ref:n,nextImpl:t}),function(){if((ct&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ro(t,n){return ou(4,2,t,n)}function mo(t,n){return ou(4,4,t,n)}function ho(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _o(t,n,e){e=e!=null?e.concat([t]):null,ou(4,4,ho.bind(null,n,t),e)}function ic(){}function yo(t,n){var e=Et();n=n===void 0?null:n;var l=e.memoizedState;return n!==null&&$i(n,l[1])?l[0]:(e.memoizedState=[t,n],t)}function po(t,n){var e=Et();n=n===void 0?null:n;var l=e.memoizedState;if(n!==null&&$i(n,l[1]))return l[0];if(l=t(),Ke){le(!0);try{t()}finally{le(!1)}}return e.memoizedState=[l,n],l}function cc(t,n,e){return e===void 0||(Zn&1073741824)!==0&&(nt&261930)===0?t.memoizedState=n:(t.memoizedState=e,t=gr(),$.lanes|=t,pe|=t,e)}function go(t,n,e,l){return sn(e,n)?e:pl.current!==null?(t=cc(t,e,l),sn(t,n)||(Dt=!0),t):(Zn&42)===0||(Zn&1073741824)!==0&&(nt&261930)===0?(Dt=!0,t.memoizedState=e):(t=gr(),$.lanes|=t,pe|=t,n)}function vo(t,n,e,l,a){var u=z.p;z.p=u!==0&&8>u?u:8;var i=m.T,c={};m.T=c,oc(t,!1,n,e);try{var f=a(),_=m.S;if(_!==null&&_(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var S=Fm(f,l);ua(t,n,S,_n(t))}else ua(t,n,l,_n(t))}catch(M){ua(t,n,{then:function(){},status:"rejected",reason:M},_n())}finally{z.p=u,i!==null&&c.types!==null&&(i.types=c.types),m.T=i}}function lh(){}function fc(t,n,e,l){if(t.tag!==5)throw Error(s(476));var a=bo(t).queue;vo(t,a,n,N,e===null?lh:function(){return So(t),e(l)})}function bo(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:N},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function So(t){var n=bo(t);n.next===null&&(n=t.alternate.memoizedState),ua(t,n.next.queue,{},_n())}function sc(){return Xt(Aa)}function Ao(){return Et().memoizedState}function To(){return Et().memoizedState}function ah(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=_n();t=re(e);var l=de(n,t,e);l!==null&&(en(l,n,e),ta(l,n,e)),n={cache:Qi()},t.payload=n;return}n=n.return}}function uh(t,n,e){var l=_n();e={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ru(t)?xo(n,e):(e=Ei(t,n,e,l),e!==null&&(en(e,t,l),Mo(e,n,l)))}function zo(t,n,e){var l=_n();ua(t,n,e,l)}function ua(t,n,e,l){var a={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(ru(t))xo(n,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var i=n.lastRenderedState,c=u(i,e);if(a.hasEagerState=!0,a.eagerState=c,sn(c,i))return Za(t,n,a,0),ht===null&&Ka(),!1}catch{}if(e=Ei(t,n,a,l),e!==null)return en(e,t,l),Mo(e,n,l),!0}return!1}function oc(t,n,e,l){if(l={lane:2,revertLane:Vc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ru(t)){if(n)throw Error(s(479))}else n=Ei(t,e,l,2),n!==null&&en(n,t,2)}function ru(t){var n=t.alternate;return t===$||n!==null&&n===$}function xo(t,n){gl=au=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function Mo(t,n,e){if((e&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,e|=l,n.lanes=e,Df(t,e)}}var ia={readContext:Xt,use:cu,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt};ia.useEffectEvent=zt;var Eo={readContext:Xt,use:cu,useCallback:function(t,n){return kt().memoizedState=[t,n===void 0?null:n],t},useContext:Xt,useEffect:so,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,su(4194308,4,ho.bind(null,n,t),e)},useLayoutEffect:function(t,n){return su(4194308,4,t,n)},useInsertionEffect:function(t,n){su(4,2,t,n)},useMemo:function(t,n){var e=kt();n=n===void 0?null:n;var l=t();if(Ke){le(!0);try{t()}finally{le(!1)}}return e.memoizedState=[l,n],l},useReducer:function(t,n,e){var l=kt();if(e!==void 0){var a=e(n);if(Ke){le(!0);try{e(n)}finally{le(!1)}}}else a=n;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=uh.bind(null,$,t),[l.memoizedState,t]},useRef:function(t){var n=kt();return t={current:t},n.memoizedState=t},useState:function(t){t=lc(t);var n=t.queue,e=zo.bind(null,$,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:ic,useDeferredValue:function(t,n){var e=kt();return cc(e,t,n)},useTransition:function(){var t=lc(!1);return t=vo.bind(null,$,t.queue,!0,!1),kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var l=$,a=kt();if(lt){if(e===void 0)throw Error(s(407));e=e()}else{if(e=n(),ht===null)throw Error(s(349));(nt&127)!==0||Js(l,n,e)}a.memoizedState=e;var u={value:e,getSnapshot:n};return a.queue=u,so($s.bind(null,l,u,t),[t]),l.flags|=2048,bl(9,{destroy:void 0},ks.bind(null,l,u,e,n),null),e},useId:function(){var t=kt(),n=ht.identifierPrefix;if(lt){var e=jn,l=Un;e=(l&~(1<<32-fn(l)-1)).toString(32)+e,n="_"+n+"R_"+e,e=uu++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=Im++,n="_"+n+"r_"+e.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sc,useFormState:ao,useActionState:ao,useOptimistic:function(t){var n=kt();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=oc.bind(null,$,!0,e),e.dispatch=n,[t,n]},useMemoCache:tc,useCacheRefresh:function(){return kt().memoizedState=ah.bind(null,$)},useEffectEvent:function(t){var n=kt(),e={impl:t};return n.memoizedState=e,function(){if((ct&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}},rc={readContext:Xt,use:cu,useCallback:yo,useContext:Xt,useEffect:uc,useImperativeHandle:_o,useInsertionEffect:ro,useLayoutEffect:mo,useMemo:po,useReducer:fu,useRef:fo,useState:function(){return fu(wn)},useDebugValue:ic,useDeferredValue:function(t,n){var e=Et();return go(e,rt.memoizedState,t,n)},useTransition:function(){var t=fu(wn)[0],n=Et().memoizedState;return[typeof t=="boolean"?t:aa(t),n]},useSyncExternalStore:ws,useId:Ao,useHostTransitionStatus:sc,useFormState:uo,useActionState:uo,useOptimistic:function(t,n){var e=Et();return Is(e,rt,t,n)},useMemoCache:tc,useCacheRefresh:To};rc.useEffectEvent=oo;var Oo={readContext:Xt,use:cu,useCallback:yo,useContext:Xt,useEffect:uc,useImperativeHandle:_o,useInsertionEffect:ro,useLayoutEffect:mo,useMemo:po,useReducer:ec,useRef:fo,useState:function(){return ec(wn)},useDebugValue:ic,useDeferredValue:function(t,n){var e=Et();return rt===null?cc(e,t,n):go(e,rt.memoizedState,t,n)},useTransition:function(){var t=ec(wn)[0],n=Et().memoizedState;return[typeof t=="boolean"?t:aa(t),n]},useSyncExternalStore:ws,useId:Ao,useHostTransitionStatus:sc,useFormState:co,useActionState:co,useOptimistic:function(t,n){var e=Et();return rt!==null?Is(e,rt,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:tc,useCacheRefresh:To};Oo.useEffectEvent=oo;function dc(t,n,e,l){n=t.memoizedState,e=e(l,n),e=e==null?n:R({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var mc={enqueueSetState:function(t,n,e){t=t._reactInternals;var l=_n(),a=re(l);a.payload=n,e!=null&&(a.callback=e),n=de(t,a,l),n!==null&&(en(n,t,l),ta(n,t,l))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var l=_n(),a=re(l);a.tag=1,a.payload=n,e!=null&&(a.callback=e),n=de(t,a,l),n!==null&&(en(n,t,l),ta(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=_n(),l=re(e);l.tag=2,n!=null&&(l.callback=n),n=de(t,l,e),n!==null&&(en(n,t,e),ta(n,t,e))}};function Co(t,n,e,l,a,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,u,i):n.prototype&&n.prototype.isPureReactComponent?!wl(e,l)||!wl(a,u):!0}function Do(t,n,e,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,l),n.state!==t&&mc.enqueueReplaceState(n,n.state,null)}function Ze(t,n){var e=n;if("ref"in n){e={};for(var l in n)l!=="ref"&&(e[l]=n[l])}if(t=t.defaultProps){e===n&&(e=R({},e));for(var a in t)e[a]===void 0&&(e[a]=t[a])}return e}function No(t){Xa(t)}function Bo(t){console.error(t)}function Uo(t){Xa(t)}function du(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function jo(t,n,e){try{var l=t.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function hc(t,n,e){return e=re(e),e.tag=3,e.payload={element:null},e.callback=function(){du(t,n)},e}function qo(t){return t=re(t),t.tag=3,t}function Ro(t,n,e,l){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;t.payload=function(){return a(u)},t.callback=function(){jo(n,e,l)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){jo(n,e,l),typeof a!="function"&&(ge===null?ge=new Set([this]):ge.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function ih(t,n,e,l,a){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=e.alternate,n!==null&&dl(n,e,a,!0),e=rn.current,e!==null){switch(e.tag){case 31:case 13:return Mn===null?zu():e.alternate===null&&xt===0&&(xt=3),e.flags&=-257,e.flags|=65536,e.lanes=a,l===Pa?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([l]):n.add(l),Lc(t,l,a)),!1;case 22:return e.flags|=65536,l===Pa?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([l]):e.add(l)),Lc(t,l,a)),!1}throw Error(s(435,e.tag))}return Lc(t,l,a),zu(),!1}if(lt)return n=rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,l!==Ui&&(t=Error(s(422),{cause:l}),$l(An(t,e)))):(l!==Ui&&(n=Error(s(423),{cause:l}),$l(An(n,e))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=An(l,e),a=hc(t.stateNode,l,a),Ki(t,a),xt!==4&&(xt=2)),!1;var u=Error(s(520),{cause:l});if(u=An(u,e),ha===null?ha=[u]:ha.push(u),xt!==4&&(xt=2),n===null)return!0;l=An(l,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=a&-a,e.lanes|=t,t=hc(e.stateNode,l,t),Ki(e,t),!1;case 1:if(n=e.type,u=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ge===null||!ge.has(u))))return e.flags|=65536,a&=-a,e.lanes|=a,a=qo(a),Ro(a,t,e,l),Ki(e,a),!1}e=e.return}while(e!==null);return!1}var _c=Error(s(461)),Dt=!1;function Kt(t,n,e,l){n.child=t===null?Ls(n,null,e,l):Xe(n,t.child,e,l)}function Ho(t,n,e,l,a){e=e.render;var u=n.ref;if("ref"in l){var i={};for(var c in l)c!=="ref"&&(i[c]=l[c])}else i=l;return Le(n),l=Wi(t,n,e,i,u,a),c=Fi(),t!==null&&!Dt?(Ii(t,n,a),Jn(t,n,a)):(lt&&c&&Ni(n),n.flags|=1,Kt(t,n,l,a),n.child)}function Qo(t,n,e,l,a){if(t===null){var u=e.type;return typeof u=="function"&&!Oi(u)&&u.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=u,Lo(t,n,u,l,a)):(t=Ja(e.type,null,l,n,n.mode,a),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!Tc(t,a)){var i=u.memoizedProps;if(e=e.compare,e=e!==null?e:wl,e(i,l)&&t.ref===n.ref)return Jn(t,n,a)}return n.flags|=1,t=Yn(u,l),t.ref=n.ref,t.return=n,n.child=t}function Lo(t,n,e,l,a){if(t!==null){var u=t.memoizedProps;if(wl(u,l)&&t.ref===n.ref)if(Dt=!1,n.pendingProps=l=u,Tc(t,a))(t.flags&131072)!==0&&(Dt=!0);else return n.lanes=t.lanes,Jn(t,n,a)}return yc(t,n,e,l,a)}function Go(t,n,e,l){var a=l.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|e:e,t!==null){for(l=n.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~u}else l=0,n.child=null;return Yo(t,n,u,e,l)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fa(n,u!==null?u.cachePool:null),u!==null?Vs(n,u):wi(),Xs(n);else return l=n.lanes=536870912,Yo(t,n,u!==null?u.baseLanes|e:e,e,l)}else u!==null?(Fa(n,u.cachePool),Vs(n,u),he(),n.memoizedState=null):(t!==null&&Fa(n,null),wi(),he());return Kt(t,n,a,e),n.child}function ca(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Yo(t,n,e,l,a){var u=Gi();return u=u===null?null:{parent:Ot._currentValue,pool:u},n.memoizedState={baseLanes:e,cachePool:u},t!==null&&Fa(n,null),wi(),Xs(n),t!==null&&dl(t,n,l,!0),n.childLanes=a,null}function mu(t,n){return n=_u({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vo(t,n,e){return Xe(n,t.child,null,e),t=mu(n,n.pendingProps),t.flags|=2,dn(n),n.memoizedState=null,t}function ch(t,n,e){var l=n.pendingProps,a=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(lt){if(l.mode==="hidden")return t=mu(n,l),n.lanes=536870912,ca(null,t);if(ki(n),(t=yt)?(t=td(t,xn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ie!==null?{id:Un,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},e=zs(t),e.return=n,n.child=e,Vt=n,yt=null)):t=null,t===null)throw fe(n);return n.lanes=536870912,null}return mu(n,l)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(ki(n),a)if(n.flags&256)n.flags&=-257,n=Vo(t,n,e);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Dt||dl(t,n,e,!1),a=(e&t.childLanes)!==0,Dt||a){if(l=ht,l!==null&&(i=Nf(l,e),i!==0&&i!==u.retryLane))throw u.retryLane=i,qe(t,i),en(l,t,i),_c;zu(),n=Vo(t,n,e)}else t=u.treeContext,yt=En(i.nextSibling),Vt=n,lt=!0,ce=null,xn=!1,t!==null&&Es(n,t),n=mu(n,l),n.flags|=4096;return n}return t=Yn(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function hu(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(s(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function yc(t,n,e,l,a){return Le(n),e=Wi(t,n,e,l,void 0,a),l=Fi(),t!==null&&!Dt?(Ii(t,n,a),Jn(t,n,a)):(lt&&l&&Ni(n),n.flags|=1,Kt(t,n,e,a),n.child)}function Xo(t,n,e,l,a,u){return Le(n),n.updateQueue=null,e=Zs(n,l,e,a),Ks(t),l=Fi(),t!==null&&!Dt?(Ii(t,n,u),Jn(t,n,u)):(lt&&l&&Ni(n),n.flags|=1,Kt(t,n,e,u),n.child)}function Ko(t,n,e,l,a){if(Le(n),n.stateNode===null){var u=fl,i=e.contextType;typeof i=="object"&&i!==null&&(u=Xt(i)),u=new e(l,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=mc,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=l,u.state=n.memoizedState,u.refs={},Vi(n),i=e.contextType,u.context=typeof i=="object"&&i!==null?Xt(i):fl,u.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(dc(n,e,i,l),u.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&mc.enqueueReplaceState(u,u.state,null),ea(n,l,u,a),na(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){u=n.stateNode;var c=n.memoizedProps,f=Ze(e,c);u.props=f;var _=u.context,S=e.contextType;i=fl,typeof S=="object"&&S!==null&&(i=Xt(S));var M=e.getDerivedStateFromProps;S=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,S||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||_!==i)&&Do(n,u,l,i),oe=!1;var y=n.memoizedState;u.state=y,ea(n,l,u,a),na(),_=n.memoizedState,c||y!==_||oe?(typeof M=="function"&&(dc(n,e,M,l),_=n.memoizedState),(f=oe||Co(n,e,f,l,y,_,i))?(S||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=_),u.props=l,u.state=_,u.context=i,l=f):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{u=n.stateNode,Xi(t,n),i=n.memoizedProps,S=Ze(e,i),u.props=S,M=n.pendingProps,y=u.context,_=e.contextType,f=fl,typeof _=="object"&&_!==null&&(f=Xt(_)),c=e.getDerivedStateFromProps,(_=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==M||y!==f)&&Do(n,u,l,f),oe=!1,y=n.memoizedState,u.state=y,ea(n,l,u,a),na();var p=n.memoizedState;i!==M||y!==p||oe||t!==null&&t.dependencies!==null&&$a(t.dependencies)?(typeof c=="function"&&(dc(n,e,c,l),p=n.memoizedState),(S=oe||Co(n,e,S,l,y,p,f)||t!==null&&t.dependencies!==null&&$a(t.dependencies))?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,p,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,p,f)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=p),u.props=l,u.state=p,u.context=f,l=S):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(n.flags|=1024),l=!1)}return u=l,hu(t,n),l=(n.flags&128)!==0,u||l?(u=n.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&l?(n.child=Xe(n,t.child,null,a),n.child=Xe(n,null,e,a)):Kt(t,n,e,a),n.memoizedState=u.state,t=n.child):t=Jn(t,n,a),t}function Zo(t,n,e,l){return He(),n.flags|=256,Kt(t,n,e,l),n.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(t){return{baseLanes:t,cachePool:Us()}}function vc(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=hn),t}function wo(t,n,e){var l=n.pendingProps,a=!1,u=(n.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Mt.current&2)!==0),i&&(a=!0,n.flags&=-129),i=(n.flags&32)!==0,n.flags&=-33,t===null){if(lt){if(a?me(n):he(),(t=yt)?(t=td(t,xn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ie!==null?{id:Un,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},e=zs(t),e.return=n,n.child=e,Vt=n,yt=null)):t=null,t===null)throw fe(n);return nf(t)?n.lanes=32:n.lanes=536870912,null}var c=l.children;return l=l.fallback,a?(he(),a=n.mode,c=_u({mode:"hidden",children:c},a),l=Re(l,a,e,null),c.return=n,l.return=n,c.sibling=l,n.child=c,l=n.child,l.memoizedState=gc(e),l.childLanes=vc(t,i,e),n.memoizedState=pc,ca(null,l)):(me(n),bc(n,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)n.flags&256?(me(n),n.flags&=-257,n=Sc(t,n,e)):n.memoizedState!==null?(he(),n.child=t.child,n.flags|=128,n=null):(he(),c=l.fallback,a=n.mode,l=_u({mode:"visible",children:l.children},a),c=Re(c,a,e,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Xe(n,t.child,null,e),l=n.child,l.memoizedState=gc(e),l.childLanes=vc(t,i,e),n.memoizedState=pc,n=ca(null,l));else if(me(n),nf(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var _=i.dgst;i=_,l=Error(s(419)),l.stack="",l.digest=i,$l({value:l,source:null,stack:null}),n=Sc(t,n,e)}else if(Dt||dl(t,n,e,!1),i=(e&t.childLanes)!==0,Dt||i){if(i=ht,i!==null&&(l=Nf(i,e),l!==0&&l!==f.retryLane))throw f.retryLane=l,qe(t,l),en(i,t,l),_c;tf(c)||zu(),n=Sc(t,n,e)}else tf(c)?(n.flags|=192,n.child=t.child,n=null):(t=f.treeContext,yt=En(c.nextSibling),Vt=n,lt=!0,ce=null,xn=!1,t!==null&&Es(n,t),n=bc(n,l.children),n.flags|=4096);return n}return a?(he(),c=l.fallback,a=n.mode,f=t.child,_=f.sibling,l=Yn(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,_!==null?c=Yn(_,c):(c=Re(c,a,e,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,ca(null,l),l=n.child,c=t.child.memoizedState,c===null?c=gc(e):(a=c.cachePool,a!==null?(f=Ot._currentValue,a=a.parent!==f?{parent:f,pool:f}:a):a=Us(),c={baseLanes:c.baseLanes|e,cachePool:a}),l.memoizedState=c,l.childLanes=vc(t,i,e),n.memoizedState=pc,ca(t.child,l)):(me(n),e=t.child,t=e.sibling,e=Yn(e,{mode:"visible",children:l.children}),e.return=n,e.sibling=null,t!==null&&(i=n.deletions,i===null?(n.deletions=[t],n.flags|=16):i.push(t)),n.child=e,n.memoizedState=null,e)}function bc(t,n){return n=_u({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _u(t,n){return t=on(22,t,null,n),t.lanes=0,t}function Sc(t,n,e){return Xe(n,t.child,null,e),t=bc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Jo(t,n,e){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Ri(t.return,n,e)}function Ac(t,n,e,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:a,treeForkCount:u}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=e,i.tailMode=a,i.treeForkCount=u)}function ko(t,n,e){var l=n.pendingProps,a=l.revealOrder,u=l.tail;l=l.children;var i=Mt.current,c=(i&2)!==0;if(c?(i=i&1|2,n.flags|=128):i&=1,E(Mt,i),Kt(t,n,l,e),l=lt?kl:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jo(t,e,n);else if(t.tag===19)Jo(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(e=n.child,a=null;e!==null;)t=e.alternate,t!==null&&lu(t)===null&&(a=e),e=e.sibling;e=a,e===null?(a=n.child,n.child=null):(a=e.sibling,e.sibling=null),Ac(n,!1,a,e,u,l);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=n.child,n.child=null;a!==null;){if(t=a.alternate,t!==null&&lu(t)===null){n.child=a;break}t=a.sibling,a.sibling=e,e=a,a=t}Ac(n,!0,e,null,u,l);break;case"together":Ac(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Jn(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),pe|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(dl(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,e=Yn(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=Yn(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function Tc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$a(t)))}function fh(t,n,e){switch(n.tag){case 3:_t(n,n.stateNode.containerInfo),se(n,Ot,t.memoizedState.cache),He();break;case 27:case 5:gt(n);break;case 4:_t(n,n.stateNode.containerInfo);break;case 10:se(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ki(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(me(n),n.flags|=128,null):(e&n.child.childLanes)!==0?wo(t,n,e):(me(n),t=Jn(t,n,e),t!==null?t.sibling:null);me(n);break;case 19:var a=(t.flags&128)!==0;if(l=(e&n.childLanes)!==0,l||(dl(t,n,e,!1),l=(e&n.childLanes)!==0),a){if(l)return ko(t,n,e);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),E(Mt,Mt.current),l)break;return null;case 22:return n.lanes=0,Go(t,n,e,n.pendingProps);case 24:se(n,Ot,t.memoizedState.cache)}return Jn(t,n,e)}function $o(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)Dt=!0;else{if(!Tc(t,e)&&(n.flags&128)===0)return Dt=!1,fh(t,n,e);Dt=(t.flags&131072)!==0}else Dt=!1,lt&&(n.flags&1048576)!==0&&Ms(n,kl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var l=n.pendingProps;if(t=Ye(n.elementType),n.type=t,typeof t=="function")Oi(t)?(l=Ze(t,l),n.tag=1,n=Ko(null,n,t,l,e)):(n.tag=0,n=yc(null,n,t,l,e));else{if(t!=null){var a=t.$$typeof;if(a===Bt){n.tag=11,n=Ho(null,n,t,l,e);break t}else if(a===I){n.tag=14,n=Qo(null,n,t,l,e);break t}}throw n=Rt(t)||t,Error(s(306,n,""))}}return n;case 0:return yc(t,n,n.type,n.pendingProps,e);case 1:return l=n.type,a=Ze(l,n.pendingProps),Ko(t,n,l,a,e);case 3:t:{if(_t(n,n.stateNode.containerInfo),t===null)throw Error(s(387));l=n.pendingProps;var u=n.memoizedState;a=u.element,Xi(t,n),ea(n,l,null,e);var i=n.memoizedState;if(l=i.cache,se(n,Ot,l),l!==u.cache&&Hi(n,[Ot],e,!0),na(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Zo(t,n,l,e);break t}else if(l!==a){a=An(Error(s(424)),n),$l(a),n=Zo(t,n,l,e);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,yt=En(t.firstChild),Vt=n,lt=!0,ce=null,xn=!0,e=Ls(n,null,l,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(He(),l===a){n=Jn(t,n,e);break t}Kt(t,n,l,e)}n=n.child}return n;case 26:return hu(t,n),t===null?(e=id(n.type,null,n.pendingProps,null))?n.memoizedState=e:lt||(e=n.type,t=n.pendingProps,l=Nu(W.current).createElement(e),l[Yt]=n,l[Wt]=t,Zt(l,e,t),Ht(l),n.stateNode=l):n.memoizedState=id(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return gt(n),t===null&&lt&&(l=n.stateNode=ld(n.type,n.pendingProps,W.current),Vt=n,xn=!0,a=yt,Ae(n.type)?(ef=a,yt=En(l.firstChild)):yt=a),Kt(t,n,n.pendingProps.children,e),hu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&lt&&((a=l=yt)&&(l=Qh(l,n.type,n.pendingProps,xn),l!==null?(n.stateNode=l,Vt=n,yt=En(l.firstChild),xn=!1,a=!0):a=!1),a||fe(n)),gt(n),a=n.type,u=n.pendingProps,i=t!==null?t.memoizedProps:null,l=u.children,Fc(a,u)?l=null:i!==null&&Fc(a,i)&&(n.flags|=32),n.memoizedState!==null&&(a=Wi(t,n,Pm,null,null,e),Aa._currentValue=a),hu(t,n),Kt(t,n,l,e),n.child;case 6:return t===null&&lt&&((t=e=yt)&&(e=Lh(e,n.pendingProps,xn),e!==null?(n.stateNode=e,Vt=n,yt=null,t=!0):t=!1),t||fe(n)),null;case 13:return wo(t,n,e);case 4:return _t(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Xe(n,null,l,e):Kt(t,n,l,e),n.child;case 11:return Ho(t,n,n.type,n.pendingProps,e);case 7:return Kt(t,n,n.pendingProps,e),n.child;case 8:return Kt(t,n,n.pendingProps.children,e),n.child;case 12:return Kt(t,n,n.pendingProps.children,e),n.child;case 10:return l=n.pendingProps,se(n,n.type,l.value),Kt(t,n,l.children,e),n.child;case 9:return a=n.type._context,l=n.pendingProps.children,Le(n),a=Xt(a),l=l(a),n.flags|=1,Kt(t,n,l,e),n.child;case 14:return Qo(t,n,n.type,n.pendingProps,e);case 15:return Lo(t,n,n.type,n.pendingProps,e);case 19:return ko(t,n,e);case 31:return ch(t,n,e);case 22:return Go(t,n,e,n.pendingProps);case 24:return Le(n),l=Xt(Ot),t===null?(a=Gi(),a===null&&(a=ht,u=Qi(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=e),a=u),n.memoizedState={parent:l,cache:a},Vi(n),se(n,Ot,a)):((t.lanes&e)!==0&&(Xi(t,n),ea(n,null,null,e),na()),a=t.memoizedState,u=n.memoizedState,a.parent!==l?(a={parent:l,cache:l},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),se(n,Ot,l)):(l=u.cache,se(n,Ot,l),l!==a.cache&&Hi(n,[Ot],e,!0))),Kt(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function kn(t){t.flags|=4}function zc(t,n,e,l,a){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Ar())t.flags|=8192;else throw Ve=Pa,Yi}else t.flags&=-16777217}function Wo(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rd(n))if(Ar())t.flags|=8192;else throw Ve=Pa,Yi}function yu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Of():536870912,t.lanes|=n,zl|=n)}function fa(t,n){if(!lt)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pt(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,l=0;if(n)for(var a=t.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=e,n}function sh(t,n,e){var l=n.pendingProps;switch(Bi(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(n),null;case 1:return pt(n),null;case 3:return e=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Kn(Ot),St(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(rl(n)?kn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ji())),pt(n),null;case 26:var a=n.type,u=n.memoizedState;return t===null?(kn(n),u!==null?(pt(n),Wo(n,u)):(pt(n),zc(n,a,null,l,e))):u?u!==t.memoizedState?(kn(n),pt(n),Wo(n,u)):(pt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&kn(n),pt(n),zc(n,a,t,l,e)),null;case 27:if(gn(n),e=W.current,a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&kn(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return pt(n),null}t=U.current,rl(n)?Os(n):(t=ld(a,l,e),n.stateNode=t,kn(n))}return pt(n),null;case 5:if(gn(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&kn(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return pt(n),null}if(u=U.current,rl(n))Os(n);else{var i=Nu(W.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}u[Yt]=n,u[Wt]=l;t:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=u;t:switch(Zt(u,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&kn(n)}}return pt(n),zc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,e),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&kn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(t=W.current,rl(n)){if(t=n.stateNode,e=n.memoizedProps,l=null,a=Vt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Yt]=n,t=!!(t.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||wr(t.nodeValue,e)),t||fe(n,!0)}else t=Nu(t).createTextNode(l),t[Yt]=n,n.stateNode=t}return pt(n),null;case 31:if(e=n.memoizedState,t===null||t.memoizedState!==null){if(l=rl(n),e!==null){if(t===null){if(!l)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Yt]=n}else He(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pt(n),t=!1}else e=ji(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return n.flags&256?(dn(n),n):(dn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return pt(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=rl(n),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(s(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[Yt]=n}else He(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pt(n),a=!1}else a=ji(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(dn(n),n):(dn(n),null)}return dn(n),(n.flags&128)!==0?(n.lanes=e,n):(e=l!==null,t=t!==null&&t.memoizedState!==null,e&&(l=n.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)),e!==t&&e&&(n.child.flags|=8192),yu(n,n.updateQueue),pt(n),null);case 4:return St(),t===null&&wc(n.stateNode.containerInfo),pt(n),null;case 10:return Kn(n.type),pt(n),null;case 19:if(v(Mt),l=n.memoizedState,l===null)return pt(n),null;if(a=(n.flags&128)!==0,u=l.rendering,u===null)if(a)fa(l,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=lu(t),u!==null){for(n.flags|=128,fa(l,!1),t=u.updateQueue,n.updateQueue=t,yu(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)Ts(e,t),e=e.sibling;return E(Mt,Mt.current&1|2),lt&&Vn(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&un()>Su&&(n.flags|=128,a=!0,fa(l,!1),n.lanes=4194304)}else{if(!a)if(t=lu(u),t!==null){if(n.flags|=128,a=!0,t=t.updateQueue,n.updateQueue=t,yu(n,t),fa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!lt)return pt(n),null}else 2*un()-l.renderingStartTime>Su&&e!==536870912&&(n.flags|=128,a=!0,fa(l,!1),n.lanes=4194304);l.isBackwards?(u.sibling=n.child,n.child=u):(t=l.last,t!==null?t.sibling=u:n.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=un(),t.sibling=null,e=Mt.current,E(Mt,a?e&1|2:e&1),lt&&Vn(n,l.treeForkCount),t):(pt(n),null);case 22:case 23:return dn(n),Ji(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(e&536870912)!==0&&(n.flags&128)===0&&(pt(n),n.subtreeFlags&6&&(n.flags|=8192)):pt(n),e=n.updateQueue,e!==null&&yu(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==e&&(n.flags|=2048),t!==null&&v(Ge),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),Kn(Ot),pt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function oh(t,n){switch(Bi(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Kn(Ot),St(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gn(n),null;case 31:if(n.memoizedState!==null){if(dn(n),n.alternate===null)throw Error(s(340));He()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(dn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));He()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return v(Mt),null;case 4:return St(),null;case 10:return Kn(n.type),null;case 22:case 23:return dn(n),Ji(),t!==null&&v(Ge),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Kn(Ot),null;case 25:return null;default:return null}}function Fo(t,n){switch(Bi(n),n.tag){case 3:Kn(Ot),St();break;case 26:case 27:case 5:gn(n);break;case 4:St();break;case 31:n.memoizedState!==null&&dn(n);break;case 13:dn(n);break;case 19:v(Mt);break;case 10:Kn(n.type);break;case 22:case 23:dn(n),Ji(),t!==null&&v(Ge);break;case 24:Kn(Ot)}}function sa(t,n){try{var e=n.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var a=l.next;e=a;do{if((e.tag&t)===t){l=void 0;var u=e.create,i=e.inst;l=u(),i.destroy=l}e=e.next}while(e!==a)}}catch(c){ot(n,n.return,c)}}function _e(t,n,e){try{var l=n.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){var i=l.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,a=n;var f=e,_=c;try{_()}catch(S){ot(a,f,S)}}}l=l.next}while(l!==u)}}catch(S){ot(n,n.return,S)}}function Io(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{Ys(n,e)}catch(l){ot(t,t.return,l)}}}function Po(t,n,e){e.props=Ze(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(l){ot(t,n,l)}}function oa(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(a){ot(t,n,a)}}function qn(t,n){var e=t.ref,l=t.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(a){ot(t,n,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){ot(t,n,a)}else e.current=null}function tr(t){var n=t.type,e=t.memoizedProps,l=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break t;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(a){ot(t,t.return,a)}}function xc(t,n,e){try{var l=t.stateNode;Bh(l,t.type,e,n),l[Wt]=n}catch(a){ot(t,t.return,a)}}function nr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ae(t.type)||t.tag===4}function Mc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ae(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ec(t,n,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=Ln));else if(l!==4&&(l===27&&Ae(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(Ec(t,n,e),t=t.sibling;t!==null;)Ec(t,n,e),t=t.sibling}function pu(t,n,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(l!==4&&(l===27&&Ae(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(pu(t,n,e),t=t.sibling;t!==null;)pu(t,n,e),t=t.sibling}function er(t){var n=t.stateNode,e=t.memoizedProps;try{for(var l=t.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Zt(n,l,e),n[Yt]=t,n[Wt]=e}catch(u){ot(t,t.return,u)}}var $n=!1,Nt=!1,Oc=!1,lr=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function rh(t,n){if(t=t.containerInfo,$c=Qu,t=hs(t),Si(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{e.nodeType,u.nodeType}catch{e=null;break t}var i=0,c=-1,f=-1,_=0,S=0,M=t,y=null;n:for(;;){for(var p;M!==e||a!==0&&M.nodeType!==3||(c=i+a),M!==u||l!==0&&M.nodeType!==3||(f=i+l),M.nodeType===3&&(i+=M.nodeValue.length),(p=M.firstChild)!==null;)y=M,M=p;for(;;){if(M===t)break n;if(y===e&&++_===a&&(c=i),y===u&&++S===l&&(f=i),(p=M.nextSibling)!==null)break;M=y,y=M.parentNode}M=p}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Wc={focusedElem:t,selectionRange:e},Qu=!1,Qt=n;Qt!==null;)if(n=Qt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Qt=t;else for(;Qt!==null;){switch(n=Qt,u=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)a=t[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,e=n,a=u.memoizedProps,u=u.memoizedState,l=e.stateNode;try{var H=Ze(e.type,a);t=l.getSnapshotBeforeUpdate(H,u),l.__reactInternalSnapshotBeforeUpdate=t}catch(K){ot(e,e.return,K)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)Pc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Qt=t;break}Qt=n.return}}function ar(t,n,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Fn(t,e),l&4&&sa(5,e);break;case 1:if(Fn(t,e),l&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(i){ot(e,e.return,i)}else{var a=Ze(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(a,n,t.__reactInternalSnapshotBeforeUpdate)}catch(i){ot(e,e.return,i)}}l&64&&Io(e),l&512&&oa(e,e.return);break;case 3:if(Fn(t,e),l&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{Ys(t,n)}catch(i){ot(e,e.return,i)}}break;case 27:n===null&&l&4&&er(e);case 26:case 5:Fn(t,e),n===null&&l&4&&tr(e),l&512&&oa(e,e.return);break;case 12:Fn(t,e);break;case 31:Fn(t,e),l&4&&cr(t,e);break;case 13:Fn(t,e),l&4&&fr(t,e),l&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=bh.bind(null,e),Gh(t,e))));break;case 22:if(l=e.memoizedState!==null||$n,!l){n=n!==null&&n.memoizedState!==null||Nt,a=$n;var u=Nt;$n=l,(Nt=n)&&!u?In(t,e,(e.subtreeFlags&8772)!==0):Fn(t,e),$n=a,Nt=u}break;case 30:break;default:Fn(t,e)}}function ur(t){var n=t.alternate;n!==null&&(t.alternate=null,ur(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ai(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,It=!1;function Wn(t,n,e){for(e=e.child;e!==null;)ir(t,n,e),e=e.sibling}function ir(t,n,e){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(jl,e)}catch{}switch(e.tag){case 26:Nt||qn(e,n),Wn(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Nt||qn(e,n);var l=vt,a=It;Ae(e.type)&&(vt=e.stateNode,It=!1),Wn(t,n,e),va(e.stateNode),vt=l,It=a;break;case 5:Nt||qn(e,n);case 6:if(l=vt,a=It,vt=null,Wn(t,n,e),vt=l,It=a,vt!==null)if(It)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(e.stateNode)}catch(u){ot(e,n,u)}else try{vt.removeChild(e.stateNode)}catch(u){ot(e,n,u)}break;case 18:vt!==null&&(It?(t=vt,Ir(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Bl(t)):Ir(vt,e.stateNode));break;case 4:l=vt,a=It,vt=e.stateNode.containerInfo,It=!0,Wn(t,n,e),vt=l,It=a;break;case 0:case 11:case 14:case 15:_e(2,e,n),Nt||_e(4,e,n),Wn(t,n,e);break;case 1:Nt||(qn(e,n),l=e.stateNode,typeof l.componentWillUnmount=="function"&&Po(e,n,l)),Wn(t,n,e);break;case 21:Wn(t,n,e);break;case 22:Nt=(l=Nt)||e.memoizedState!==null,Wn(t,n,e),Nt=l;break;default:Wn(t,n,e)}}function cr(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bl(t)}catch(e){ot(n,n.return,e)}}}function fr(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bl(t)}catch(e){ot(n,n.return,e)}}function dh(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new lr),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new lr),n;default:throw Error(s(435,t.tag))}}function gu(t,n){var e=dh(t);n.forEach(function(l){if(!e.has(l)){e.add(l);var a=Sh.bind(null,t,l);l.then(a,a)}})}function Pt(t,n){var e=n.deletions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l],u=t,i=n,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(Ae(c.type)){vt=c.stateNode,It=!1;break t}break;case 5:vt=c.stateNode,It=!1;break t;case 3:case 4:vt=c.stateNode.containerInfo,It=!0;break t}c=c.return}if(vt===null)throw Error(s(160));ir(u,i,a),vt=null,It=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sr(n,t),n=n.sibling}var Dn=null;function sr(t,n){var e=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pt(n,t),tn(t),l&4&&(_e(3,t,t.return),sa(3,t),_e(5,t,t.return));break;case 1:Pt(n,t),tn(t),l&512&&(Nt||e===null||qn(e,e.return)),l&64&&$n&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var a=Dn;if(Pt(n,t),tn(t),l&512&&(Nt||e===null||qn(e,e.return)),l&4){var u=e!==null?e.memoizedState:null;if(l=t.memoizedState,e===null)if(l===null)if(t.stateNode===null){t:{l=t.type,e=t.memoizedProps,a=a.ownerDocument||a;n:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[Hl]||u[Yt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),Zt(u,l,e),u[Yt]=t,Ht(u),l=u;break t;case"link":var i=sd("link","href",a).get(l+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&u.getAttribute("rel")===(e.rel==null?null:e.rel)&&u.getAttribute("title")===(e.title==null?null:e.title)&&u.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break n}}u=a.createElement(l),Zt(u,l,e),a.head.appendChild(u);break;case"meta":if(i=sd("meta","content",a).get(l+(e.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(e.content==null?null:""+e.content)&&u.getAttribute("name")===(e.name==null?null:e.name)&&u.getAttribute("property")===(e.property==null?null:e.property)&&u.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&u.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break n}}u=a.createElement(l),Zt(u,l,e),a.head.appendChild(u);break;default:throw Error(s(468,l))}u[Yt]=t,Ht(u),l=u}t.stateNode=l}else od(a,t.type,t.stateNode);else t.stateNode=fd(a,l,t.memoizedProps);else u!==l?(u===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):u.count--,l===null?od(a,t.type,t.stateNode):fd(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&xc(t,t.memoizedProps,e.memoizedProps)}break;case 27:Pt(n,t),tn(t),l&512&&(Nt||e===null||qn(e,e.return)),e!==null&&l&4&&xc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Pt(n,t),tn(t),l&512&&(Nt||e===null||qn(e,e.return)),t.flags&32){a=t.stateNode;try{nl(a,"")}catch(H){ot(t,t.return,H)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,xc(t,a,e!==null?e.memoizedProps:a)),l&1024&&(Oc=!0);break;case 6:if(Pt(n,t),tn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,e=t.stateNode;try{e.nodeValue=l}catch(H){ot(t,t.return,H)}}break;case 3:if(ju=null,a=Dn,Dn=Bu(n.containerInfo),Pt(n,t),Dn=a,tn(t),l&4&&e!==null&&e.memoizedState.isDehydrated)try{Bl(n.containerInfo)}catch(H){ot(t,t.return,H)}Oc&&(Oc=!1,or(t));break;case 4:l=Dn,Dn=Bu(t.stateNode.containerInfo),Pt(n,t),tn(t),Dn=l;break;case 12:Pt(n,t),tn(t);break;case 31:Pt(n,t),tn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gu(t,l)));break;case 13:Pt(n,t),tn(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(bu=un()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gu(t,l)));break;case 22:a=t.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,_=$n,S=Nt;if($n=_||a,Nt=S||f,Pt(n,t),Nt=S,$n=_,tn(t),l&8192)t:for(n=t.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(e===null||f||$n||Nt||we(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){f=e=n;try{if(u=f.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var M=f.memoizedProps.style,y=M!=null&&M.hasOwnProperty("display")?M.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(H){ot(f,f.return,H)}}}else if(n.tag===6){if(e===null){f=n;try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(H){ot(f,f.return,H)}}}else if(n.tag===18){if(e===null){f=n;try{var p=f.stateNode;a?Pr(p,!0):Pr(f.stateNode,!1)}catch(H){ot(f,f.return,H)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,gu(t,e))));break;case 19:Pt(n,t),tn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gu(t,l)));break;case 30:break;case 21:break;default:Pt(n,t),tn(t)}}function tn(t){var n=t.flags;if(n&2){try{for(var e,l=t.return;l!==null;){if(nr(l)){e=l;break}l=l.return}if(e==null)throw Error(s(160));switch(e.tag){case 27:var a=e.stateNode,u=Mc(t);pu(t,u,a);break;case 5:var i=e.stateNode;e.flags&32&&(nl(i,""),e.flags&=-33);var c=Mc(t);pu(t,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,_=Mc(t);Ec(t,_,f);break;default:throw Error(s(161))}}catch(S){ot(t,t.return,S)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function or(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;or(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Fn(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ar(t,n.alternate,n),n=n.sibling}function we(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_e(4,n,n.return),we(n);break;case 1:qn(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&Po(n,n.return,e),we(n);break;case 27:va(n.stateNode);case 26:case 5:qn(n,n.return),we(n);break;case 22:n.memoizedState===null&&we(n);break;case 30:we(n);break;default:we(n)}t=t.sibling}}function In(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,a=t,u=n,i=u.flags;switch(u.tag){case 0:case 11:case 15:In(a,u,e),sa(4,u);break;case 1:if(In(a,u,e),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(_){ot(l,l.return,_)}if(l=u,a=l.updateQueue,a!==null){var c=l.stateNode;try{var f=a.shared.hiddenCallbacks;if(f!==null)for(a.shared.hiddenCallbacks=null,a=0;a<f.length;a++)Gs(f[a],c)}catch(_){ot(l,l.return,_)}}e&&i&64&&Io(u),oa(u,u.return);break;case 27:er(u);case 26:case 5:In(a,u,e),e&&l===null&&i&4&&tr(u),oa(u,u.return);break;case 12:In(a,u,e);break;case 31:In(a,u,e),e&&i&4&&cr(a,u);break;case 13:In(a,u,e),e&&i&4&&fr(a,u);break;case 22:u.memoizedState===null&&In(a,u,e),oa(u,u.return);break;case 30:break;default:In(a,u,e)}n=n.sibling}}function Cc(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Wl(e))}function Dc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wl(t))}function Nn(t,n,e,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rr(t,n,e,l),n=n.sibling}function rr(t,n,e,l){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(t,n,e,l),a&2048&&sa(9,n);break;case 1:Nn(t,n,e,l);break;case 3:Nn(t,n,e,l),a&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wl(t)));break;case 12:if(a&2048){Nn(t,n,e,l),t=n.stateNode;try{var u=n.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){ot(n,n.return,f)}}else Nn(t,n,e,l);break;case 31:Nn(t,n,e,l);break;case 13:Nn(t,n,e,l);break;case 23:break;case 22:u=n.stateNode,i=n.alternate,n.memoizedState!==null?u._visibility&2?Nn(t,n,e,l):ra(t,n):u._visibility&2?Nn(t,n,e,l):(u._visibility|=2,Sl(t,n,e,l,(n.subtreeFlags&10256)!==0||!1)),a&2048&&Cc(i,n);break;case 24:Nn(t,n,e,l),a&2048&&Dc(n.alternate,n);break;default:Nn(t,n,e,l)}}function Sl(t,n,e,l,a){for(a=a&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,i=n,c=e,f=l,_=i.flags;switch(i.tag){case 0:case 11:case 15:Sl(u,i,c,f,a),sa(8,i);break;case 23:break;case 22:var S=i.stateNode;i.memoizedState!==null?S._visibility&2?Sl(u,i,c,f,a):ra(u,i):(S._visibility|=2,Sl(u,i,c,f,a)),a&&_&2048&&Cc(i.alternate,i);break;case 24:Sl(u,i,c,f,a),a&&_&2048&&Dc(i.alternate,i);break;default:Sl(u,i,c,f,a)}n=n.sibling}}function ra(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,l=n,a=l.flags;switch(l.tag){case 22:ra(e,l),a&2048&&Cc(l.alternate,l);break;case 24:ra(e,l),a&2048&&Dc(l.alternate,l);break;default:ra(e,l)}n=n.sibling}}var da=8192;function Al(t,n,e){if(t.subtreeFlags&da)for(t=t.child;t!==null;)dr(t,n,e),t=t.sibling}function dr(t,n,e){switch(t.tag){case 26:Al(t,n,e),t.flags&da&&t.memoizedState!==null&&Ih(e,Dn,t.memoizedState,t.memoizedProps);break;case 5:Al(t,n,e);break;case 3:case 4:var l=Dn;Dn=Bu(t.stateNode.containerInfo),Al(t,n,e),Dn=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=da,da=16777216,Al(t,n,e),da=l):Al(t,n,e));break;default:Al(t,n,e)}}function mr(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ma(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var l=n[e];Qt=l,_r(l,t)}mr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hr(t),t=t.sibling}function hr(t){switch(t.tag){case 0:case 11:case 15:ma(t),t.flags&2048&&_e(9,t,t.return);break;case 3:ma(t);break;case 12:ma(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,vu(t)):ma(t);break;default:ma(t)}}function vu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var l=n[e];Qt=l,_r(l,t)}mr(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_e(8,n,n.return),vu(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,vu(n));break;default:vu(n)}t=t.sibling}}function _r(t,n){for(;Qt!==null;){var e=Qt;switch(e.tag){case 0:case 11:case 15:_e(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wl(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,Qt=l;else t:for(e=t;Qt!==null;){l=Qt;var a=l.sibling,u=l.return;if(ur(l),l===e){Qt=null;break t}if(a!==null){a.return=u,Qt=a;break t}Qt=u}}}var mh={getCacheForType:function(t){var n=Xt(Ot),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e},cacheSignal:function(){return Xt(Ot).controller.signal}},hh=typeof WeakMap=="function"?WeakMap:Map,ct=0,ht=null,P=null,nt=0,st=0,mn=null,ye=!1,Tl=!1,Nc=!1,Pn=0,xt=0,pe=0,Je=0,Bc=0,hn=0,zl=0,ha=null,nn=null,Uc=!1,bu=0,yr=0,Su=1/0,Au=null,ge=null,Ut=0,ve=null,xl=null,te=0,jc=0,qc=null,pr=null,_a=0,Rc=null;function _n(){return(ct&2)!==0&&nt!==0?nt&-nt:m.T!==null?Vc():Bf()}function gr(){if(hn===0)if((nt&536870912)===0||lt){var t=Da;Da<<=1,(Da&3932160)===0&&(Da=262144),hn=t}else hn=536870912;return t=rn.current,t!==null&&(t.flags|=32),hn}function en(t,n,e){(t===ht&&(st===2||st===9)||t.cancelPendingCommit!==null)&&(Ml(t,0),be(t,nt,hn,!1)),Rl(t,e),((ct&2)===0||t!==ht)&&(t===ht&&((ct&2)===0&&(Je|=e),xt===4&&be(t,nt,hn,!1)),Rn(t))}function vr(t,n,e){if((ct&6)!==0)throw Error(s(327));var l=!e&&(n&127)===0&&(n&t.expiredLanes)===0||ql(t,n),a=l?ph(t,n):Qc(t,n,!0),u=l;do{if(a===0){Tl&&!l&&be(t,n,0,!1);break}else{if(e=t.current.alternate,u&&!_h(e)){a=Qc(t,n,!1),u=!1;continue}if(a===2){if(u=n,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){n=i;t:{var c=t;a=ha;var f=c.current.memoizedState.isDehydrated;if(f&&(Ml(c,i).flags|=256),i=Qc(c,i,!1),i!==2){if(Nc&&!f){c.errorRecoveryDisabledLanes|=u,Je|=u,a=4;break t}u=nn,nn=a,u!==null&&(nn===null?nn=u:nn.push.apply(nn,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){Ml(t,0),be(t,n,0,!0);break}t:{switch(l=t,u=a,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:be(l,n,hn,!ye);break t;case 2:nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(a=bu+300-un(),10<a)){if(be(l,n,hn,!ye),Ba(l,0,!0)!==0)break t;te=n,l.timeoutHandle=Wr(br.bind(null,l,e,nn,Au,Uc,n,hn,Je,zl,ye,u,"Throttled",-0,0),a);break t}br(l,e,nn,Au,Uc,n,hn,Je,zl,ye,u,null,-0,0)}}break}while(!0);Rn(t)}function br(t,n,e,l,a,u,i,c,f,_,S,M,y,p){if(t.timeoutHandle=-1,M=n.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ln},dr(n,u,M);var H=(u&62914560)===u?bu-un():(u&4194048)===u?yr-un():0;if(H=Ph(M,H),H!==null){te=u,t.cancelPendingCommit=H(Or.bind(null,t,n,u,e,l,a,i,c,f,S,M,null,y,p)),be(t,u,i,!_);return}}Or(t,n,u,e,l,a,i,c,f)}function _h(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var a=e[l],u=a.getSnapshot;a=a.value;try{if(!sn(u(),a))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function be(t,n,e,l){n&=~Bc,n&=~Je,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var a=n;0<a;){var u=31-fn(a),i=1<<u;l[u]=-1,a&=~i}e!==0&&Cf(t,e,n)}function Tu(){return(ct&6)===0?(ya(0),!1):!0}function Hc(){if(P!==null){if(st===0)var t=P.return;else t=P,Xn=Qe=null,Pi(t),yl=null,Il=0,t=P;for(;t!==null;)Fo(t.alternate,t),t=t.return;P=null}}function Ml(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,qh(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),te=0,Hc(),ht=t,P=e=Yn(t.current,null),nt=n,st=0,mn=null,ye=!1,Tl=ql(t,n),Nc=!1,zl=hn=Bc=Je=pe=xt=0,nn=ha=null,Uc=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var a=31-fn(l),u=1<<a;n|=t[a],l&=~u}return Pn=n,Ka(),e}function Sr(t,n){$=null,m.H=ia,n===_l||n===Ia?(n=Rs(),st=3):n===Yi?(n=Rs(),st=4):st=n===_c?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mn=n,P===null&&(xt=1,du(t,An(n,t.current)))}function Ar(){var t=rn.current;return t===null?!0:(nt&4194048)===nt?Mn===null:(nt&62914560)===nt||(nt&536870912)!==0?t===Mn:!1}function Tr(){var t=m.H;return m.H=ia,t===null?ia:t}function zr(){var t=m.A;return m.A=mh,t}function zu(){xt=4,ye||(nt&4194048)!==nt&&rn.current!==null||(Tl=!0),(pe&134217727)===0&&(Je&134217727)===0||ht===null||be(ht,nt,hn,!1)}function Qc(t,n,e){var l=ct;ct|=2;var a=Tr(),u=zr();(ht!==t||nt!==n)&&(Au=null,Ml(t,n)),n=!1;var i=xt;t:do try{if(st!==0&&P!==null){var c=P,f=mn;switch(st){case 8:Hc(),i=6;break t;case 3:case 2:case 9:case 6:rn.current===null&&(n=!0);var _=st;if(st=0,mn=null,El(t,c,f,_),e&&Tl){i=0;break t}break;default:_=st,st=0,mn=null,El(t,c,f,_)}}yh(),i=xt;break}catch(S){Sr(t,S)}while(!0);return n&&t.shellSuspendCounter++,Xn=Qe=null,ct=l,m.H=a,m.A=u,P===null&&(ht=null,nt=0,Ka()),i}function yh(){for(;P!==null;)xr(P)}function ph(t,n){var e=ct;ct|=2;var l=Tr(),a=zr();ht!==t||nt!==n?(Au=null,Su=un()+500,Ml(t,n)):Tl=ql(t,n);t:do try{if(st!==0&&P!==null){n=P;var u=mn;n:switch(st){case 1:st=0,mn=null,El(t,n,u,1);break;case 2:case 9:if(js(u)){st=0,mn=null,Mr(n);break}n=function(){st!==2&&st!==9||ht!==t||(st=7),Rn(t)},u.then(n,n);break t;case 3:st=7;break t;case 4:st=5;break t;case 7:js(u)?(st=0,mn=null,Mr(n)):(st=0,mn=null,El(t,n,u,7));break;case 5:var i=null;switch(P.tag){case 26:i=P.memoizedState;case 5:case 27:var c=P;if(i?rd(i):c.stateNode.complete){st=0,mn=null;var f=c.sibling;if(f!==null)P=f;else{var _=c.return;_!==null?(P=_,xu(_)):P=null}break n}}st=0,mn=null,El(t,n,u,5);break;case 6:st=0,mn=null,El(t,n,u,6);break;case 8:Hc(),xt=6;break t;default:throw Error(s(462))}}gh();break}catch(S){Sr(t,S)}while(!0);return Xn=Qe=null,m.H=l,m.A=a,ct=e,P!==null?0:(ht=null,nt=0,Ka(),xt)}function gh(){for(;P!==null&&!Yd();)xr(P)}function xr(t){var n=$o(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,n===null?xu(t):P=n}function Mr(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=Xo(e,n,n.pendingProps,n.type,void 0,nt);break;case 11:n=Xo(e,n,n.pendingProps,n.type.render,n.ref,nt);break;case 5:Pi(n);default:Fo(e,n),n=P=Ts(n,Pn),n=$o(e,n,Pn)}t.memoizedProps=t.pendingProps,n===null?xu(t):P=n}function El(t,n,e,l){Xn=Qe=null,Pi(n),yl=null,Il=0;var a=n.return;try{if(ih(t,a,n,e,nt)){xt=1,du(t,An(e,t.current)),P=null;return}}catch(u){if(a!==null)throw P=a,u;xt=1,du(t,An(e,t.current)),P=null;return}n.flags&32768?(lt||l===1?t=!0:Tl||(nt&536870912)!==0?t=!1:(ye=t=!0,(l===2||l===9||l===3||l===6)&&(l=rn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Er(n,t)):xu(n)}function xu(t){var n=t;do{if((n.flags&32768)!==0){Er(n,ye);return}t=n.return;var e=sh(n.alternate,n,Pn);if(e!==null){P=e;return}if(n=n.sibling,n!==null){P=n;return}P=n=t}while(n!==null);xt===0&&(xt=5)}function Er(t,n){do{var e=oh(t.alternate,t);if(e!==null){e.flags&=32767,P=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){P=t;return}P=t=e}while(t!==null);xt=6,P=null}function Or(t,n,e,l,a,u,i,c,f){t.cancelPendingCommit=null;do Mu();while(Ut!==0);if((ct&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(u=n.lanes|n.childLanes,u|=Mi,Fd(t,e,u,i,c,f),t===ht&&(P=ht=null,nt=0),xl=n,ve=t,te=e,jc=u,qc=a,pr=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ah(Oa,function(){return Ur(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=m.T,m.T=null,a=z.p,z.p=2,i=ct,ct|=4;try{rh(t,n,e)}finally{ct=i,z.p=a,m.T=l}}Ut=1,Cr(),Dr(),Nr()}}function Cr(){if(Ut===1){Ut=0;var t=ve,n=xl,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=m.T,m.T=null;var l=z.p;z.p=2;var a=ct;ct|=4;try{sr(n,t);var u=Wc,i=hs(t.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&ms(c.ownerDocument.documentElement,c)){if(f!==null&&Si(c)){var _=f.start,S=f.end;if(S===void 0&&(S=_),"selectionStart"in c)c.selectionStart=_,c.selectionEnd=Math.min(S,c.value.length);else{var M=c.ownerDocument||document,y=M&&M.defaultView||window;if(y.getSelection){var p=y.getSelection(),H=c.textContent.length,K=Math.min(f.start,H),mt=f.end===void 0?K:Math.min(f.end,H);!p.extend&&K>mt&&(i=mt,mt=K,K=i);var d=ds(c,K),r=ds(c,mt);if(d&&r&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==r.node||p.focusOffset!==r.offset)){var h=M.createRange();h.setStart(d.node,d.offset),p.removeAllRanges(),K>mt?(p.addRange(h),p.extend(r.node,r.offset)):(h.setEnd(r.node,r.offset),p.addRange(h))}}}}for(M=[],p=c;p=p.parentNode;)p.nodeType===1&&M.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var x=M[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Qu=!!$c,Wc=$c=null}finally{ct=a,z.p=l,m.T=e}}t.current=n,Ut=2}}function Dr(){if(Ut===2){Ut=0;var t=ve,n=xl,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=m.T,m.T=null;var l=z.p;z.p=2;var a=ct;ct|=4;try{ar(t,n.alternate,n)}finally{ct=a,z.p=l,m.T=e}}Ut=3}}function Nr(){if(Ut===4||Ut===3){Ut=0,Vd();var t=ve,n=xl,e=te,l=pr;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ut=5:(Ut=0,xl=ve=null,Br(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(ge=null),ei(e),n=n.stateNode,cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(jl,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=m.T,a=z.p,z.p=2,m.T=null;try{for(var u=t.onRecoverableError,i=0;i<l.length;i++){var c=l[i];u(c.value,{componentStack:c.stack})}}finally{m.T=n,z.p=a}}(te&3)!==0&&Mu(),Rn(t),a=t.pendingLanes,(e&261930)!==0&&(a&42)!==0?t===Rc?_a++:(_a=0,Rc=t):_a=0,ya(0)}}function Br(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Wl(n)))}function Mu(){return Cr(),Dr(),Nr(),Ur()}function Ur(){if(Ut!==5)return!1;var t=ve,n=jc;jc=0;var e=ei(te),l=m.T,a=z.p;try{z.p=32>e?32:e,m.T=null,e=qc,qc=null;var u=ve,i=te;if(Ut=0,xl=ve=null,te=0,(ct&6)!==0)throw Error(s(331));var c=ct;if(ct|=4,hr(u.current),rr(u,u.current,i,e),ct=c,ya(0,!1),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(jl,u)}catch{}return!0}finally{z.p=a,m.T=l,Br(t,n)}}function jr(t,n,e){n=An(e,n),n=hc(t.stateNode,n,2),t=de(t,n,2),t!==null&&(Rl(t,2),Rn(t))}function ot(t,n,e){if(t.tag===3)jr(t,t,e);else for(;n!==null;){if(n.tag===3){jr(n,t,e);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ge===null||!ge.has(l))){t=An(e,t),e=qo(2),l=de(n,e,2),l!==null&&(Ro(e,l,n,t),Rl(l,2),Rn(l));break}}n=n.return}}function Lc(t,n,e){var l=t.pingCache;if(l===null){l=t.pingCache=new hh;var a=new Set;l.set(n,a)}else a=l.get(n),a===void 0&&(a=new Set,l.set(n,a));a.has(e)||(Nc=!0,a.add(e),t=vh.bind(null,t,n,e),n.then(t,t))}function vh(t,n,e){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,ht===t&&(nt&e)===e&&(xt===4||xt===3&&(nt&62914560)===nt&&300>un()-bu?(ct&2)===0&&Ml(t,0):Bc|=e,zl===nt&&(zl=0)),Rn(t)}function qr(t,n){n===0&&(n=Of()),t=qe(t,n),t!==null&&(Rl(t,n),Rn(t))}function bh(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),qr(t,e)}function Sh(t,n){var e=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(e=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),qr(t,e)}function Ah(t,n){return Iu(t,n)}var Eu=null,Ol=null,Gc=!1,Ou=!1,Yc=!1,Se=0;function Rn(t){t!==Ol&&t.next===null&&(Ol===null?Eu=Ol=t:Ol=Ol.next=t),Ou=!0,Gc||(Gc=!0,zh())}function ya(t,n){if(!Yc&&Ou){Yc=!0;do for(var e=!1,l=Eu;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var i=l.suspendedLanes,c=l.pingedLanes;u=(1<<31-fn(42|t)+1)-1,u&=a&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(e=!0,Lr(l,u))}else u=nt,u=Ba(l,l===ht?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||ql(l,u)||(e=!0,Lr(l,u));l=l.next}while(e);Yc=!1}}function Th(){Rr()}function Rr(){Ou=Gc=!1;var t=0;Se!==0&&jh()&&(t=Se);for(var n=un(),e=null,l=Eu;l!==null;){var a=l.next,u=Hr(l,n);u===0?(l.next=null,e===null?Eu=a:e.next=a,a===null&&(Ol=e)):(e=l,(t!==0||(u&3)!==0)&&(Ou=!0)),l=a}Ut!==0&&Ut!==5||ya(t),Se!==0&&(Se=0)}function Hr(t,n){for(var e=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-fn(u),c=1<<i,f=a[i];f===-1?((c&e)===0||(c&l)!==0)&&(a[i]=Wd(c,n)):f<=n&&(t.expiredLanes|=c),u&=~c}if(n=ht,e=nt,e=Ba(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,e===0||t===n&&(st===2||st===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Pu(l),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||ql(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(l!==null&&Pu(l),ei(e)){case 2:case 8:e=Mf;break;case 32:e=Oa;break;case 268435456:e=Ef;break;default:e=Oa}return l=Qr.bind(null,t),e=Iu(e,l),t.callbackPriority=n,t.callbackNode=e,n}return l!==null&&l!==null&&Pu(l),t.callbackPriority=2,t.callbackNode=null,2}function Qr(t,n){if(Ut!==0&&Ut!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Mu()&&t.callbackNode!==e)return null;var l=nt;return l=Ba(t,t===ht?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(vr(t,l,n),Hr(t,un()),t.callbackNode!=null&&t.callbackNode===e?Qr.bind(null,t):null)}function Lr(t,n){if(Mu())return null;vr(t,n,!0)}function zh(){Rh(function(){(ct&6)!==0?Iu(xf,Th):Rr()})}function Vc(){if(Se===0){var t=ml;t===0&&(t=Ca,Ca<<=1,(Ca&261888)===0&&(Ca=256)),Se=t}return Se}function Gr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ra(""+t)}function Yr(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function xh(t,n,e,l,a){if(n==="submit"&&e&&e.stateNode===a){var u=Gr((a[Wt]||null).action),i=l.submitter;i&&(n=(n=i[Wt]||null)?Gr(n.formAction):i.getAttribute("formAction"),n!==null&&(u=n,i=null));var c=new Ga("action","action",null,l,a);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Se!==0){var f=i?Yr(a,i):new FormData(a);fc(e,{pending:!0,data:f,method:a.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Yr(a,i):new FormData(a),fc(e,{pending:!0,data:f,method:a.method,action:u},u,f))},currentTarget:a}]})}}for(var Xc=0;Xc<xi.length;Xc++){var Kc=xi[Xc],Mh=Kc.toLowerCase(),Eh=Kc[0].toUpperCase()+Kc.slice(1);Cn(Mh,"on"+Eh)}Cn(ps,"onAnimationEnd"),Cn(gs,"onAnimationIteration"),Cn(vs,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(Xm,"onTransitionRun"),Cn(Km,"onTransitionStart"),Cn(Zm,"onTransitionCancel"),Cn(bs,"onTransitionEnd"),Pe("onMouseEnter",["mouseout","mouseover"]),Pe("onMouseLeave",["mouseout","mouseover"]),Pe("onPointerEnter",["pointerout","pointerover"]),Pe("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pa));function Vr(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var l=t[e],a=l.event;l=l.listeners;t:{var u=void 0;if(n)for(var i=l.length-1;0<=i;i--){var c=l[i],f=c.instance,_=c.currentTarget;if(c=c.listener,f!==u&&a.isPropagationStopped())break t;u=c,a.currentTarget=_;try{u(a)}catch(S){Xa(S)}a.currentTarget=null,u=f}else for(i=0;i<l.length;i++){if(c=l[i],f=c.instance,_=c.currentTarget,c=c.listener,f!==u&&a.isPropagationStopped())break t;u=c,a.currentTarget=_;try{u(a)}catch(S){Xa(S)}a.currentTarget=null,u=f}}}}function tt(t,n){var e=n[li];e===void 0&&(e=n[li]=new Set);var l=t+"__bubble";e.has(l)||(Xr(n,t,2,!1),e.add(l))}function Zc(t,n,e){var l=0;n&&(l|=4),Xr(e,t,l,n)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function wc(t){if(!t[Cu]){t[Cu]=!0,qf.forEach(function(e){e!=="selectionchange"&&(Oh.has(e)||Zc(e,!1,t),Zc(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cu]||(n[Cu]=!0,Zc("selectionchange",!1,n))}}function Xr(t,n,e,l){switch(gd(n)){case 2:var a=e0;break;case 8:a=l0;break;default:a=ff}e=a.bind(null,n,e,t),a=void 0,!di||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(n,e,{capture:!0,passive:a}):t.addEventListener(n,e,!0):a!==void 0?t.addEventListener(n,e,{passive:a}):t.addEventListener(n,e,!1)}function Jc(t,n,e,l,a){var u=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var c=l.stateNode.containerInfo;if(c===a)break;if(i===4)for(i=l.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;c!==null;){if(i=We(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){l=u=i;continue t}c=c.parentNode}}l=l.return}Jf(function(){var _=u,S=oi(e),M=[];t:{var y=Ss.get(t);if(y!==void 0){var p=Ga,H=t;switch(t){case"keypress":if(Qa(e)===0)break t;case"keydown":case"keyup":p=Sm;break;case"focusin":H="focus",p=yi;break;case"focusout":H="blur",p=yi;break;case"beforeblur":case"afterblur":p=yi;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zm;break;case ps:case gs:case vs:p=dm;break;case bs:p=Mm;break;case"scroll":case"scrollend":p=cm;break;case"wheel":p=Om;break;case"copy":case"cut":case"paste":p=hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=If;break;case"toggle":case"beforetoggle":p=Dm}var K=(n&4)!==0,mt=!K&&(t==="scroll"||t==="scrollend"),d=K?y!==null?y+"Capture":null:y;K=[];for(var r=_,h;r!==null;){var x=r;if(h=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||h===null||d===null||(x=Ll(r,d),x!=null&&K.push(ga(r,x,h))),mt)break;r=r.return}0<K.length&&(y=new p(y,H,null,e,S),M.push({event:y,listeners:K}))}}if((n&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",y&&e!==si&&(H=e.relatedTarget||e.fromElement)&&(We(H)||H[$e]))break t;if((p||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,p?(H=e.relatedTarget||e.toElement,p=_,H=H?We(H):null,H!==null&&(mt=D(H),K=H.tag,H!==mt||K!==5&&K!==27&&K!==6)&&(H=null)):(p=null,H=_),p!==H)){if(K=Wf,x="onMouseLeave",d="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(K=If,x="onPointerLeave",d="onPointerEnter",r="pointer"),mt=p==null?y:Ql(p),h=H==null?y:Ql(H),y=new K(x,r+"leave",p,e,S),y.target=mt,y.relatedTarget=h,x=null,We(S)===_&&(K=new K(d,r+"enter",H,e,S),K.target=h,K.relatedTarget=mt,x=K),mt=x,p&&H)n:{for(K=Ch,d=p,r=H,h=0,x=d;x;x=K(x))h++;x=0;for(var G=r;G;G=K(G))x++;for(;0<h-x;)d=K(d),h--;for(;0<x-h;)r=K(r),x--;for(;h--;){if(d===r||r!==null&&d===r.alternate){K=d;break n}d=K(d),r=K(r)}K=null}else K=null;p!==null&&Kr(M,y,p,K,!1),H!==null&&mt!==null&&Kr(M,mt,H,K,!0)}}t:{if(y=_?Ql(_):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var ut=is;else if(as(y))if(cs)ut=Gm;else{ut=Qm;var Q=Hm}else p=y.nodeName,!p||p.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?_&&fi(_.elementType)&&(ut=is):ut=Lm;if(ut&&(ut=ut(t,_))){us(M,ut,e,S);break t}Q&&Q(t,y,_),t==="focusout"&&_&&y.type==="number"&&_.memoizedProps.value!=null&&ci(y,"number",y.value)}switch(Q=_?Ql(_):window,t){case"focusin":(as(Q)||Q.contentEditable==="true")&&(ul=Q,Ai=_,Jl=null);break;case"focusout":Jl=Ai=ul=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,_s(M,e,S);break;case"selectionchange":if(Vm)break;case"keydown":case"keyup":_s(M,e,S)}var F;if(gi)t:{switch(t){case"compositionstart":var et="onCompositionStart";break t;case"compositionend":et="onCompositionEnd";break t;case"compositionupdate":et="onCompositionUpdate";break t}et=void 0}else al?es(t,e)&&(et="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(et="onCompositionStart");et&&(Pf&&e.locale!=="ko"&&(al||et!=="onCompositionStart"?et==="onCompositionEnd"&&al&&(F=kf()):(ue=S,mi="value"in ue?ue.value:ue.textContent,al=!0)),Q=Du(_,et),0<Q.length&&(et=new Ff(et,t,null,e,S),M.push({event:et,listeners:Q}),F?et.data=F:(F=ls(e),F!==null&&(et.data=F)))),(F=Bm?Um(t,e):jm(t,e))&&(et=Du(_,"onBeforeInput"),0<et.length&&(Q=new Ff("onBeforeInput","beforeinput",null,e,S),M.push({event:Q,listeners:et}),Q.data=F)),xh(M,t,_,e,S)}Vr(M,n)})}function ga(t,n,e){return{instance:t,listener:n,currentTarget:e}}function Du(t,n){for(var e=n+"Capture",l=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Ll(t,e),a!=null&&l.unshift(ga(t,a,u)),a=Ll(t,n),a!=null&&l.push(ga(t,a,u))),t.tag===3)return l;t=t.return}return[]}function Ch(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Kr(t,n,e,l,a){for(var u=n._reactName,i=[];e!==null&&e!==l;){var c=e,f=c.alternate,_=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||_===null||(f=_,a?(_=Ll(e,u),_!=null&&i.unshift(ga(e,_,f))):a||(_=Ll(e,u),_!=null&&i.push(ga(e,_,f)))),e=e.return}i.length!==0&&t.push({event:n,listeners:i})}var Dh=/\r\n?/g,Nh=/\u0000|\uFFFD/g;function Zr(t){return(typeof t=="string"?t:""+t).replace(Dh,`
`).replace(Nh,"")}function wr(t,n){return n=Zr(n),Zr(t)===n}function dt(t,n,e,l,a,u){switch(e){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||nl(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&nl(t,""+l);break;case"className":ja(t,"class",l);break;case"tabIndex":ja(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ja(t,e,l);break;case"style":Zf(t,l,u);break;case"data":if(n!=="object"){ja(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=Ra(""+l),t.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(e==="formAction"?(n!=="input"&&dt(t,n,"name",a.name,a,null),dt(t,n,"formEncType",a.formEncType,a,null),dt(t,n,"formMethod",a.formMethod,a,null),dt(t,n,"formTarget",a.formTarget,a,null)):(dt(t,n,"encType",a.encType,a,null),dt(t,n,"method",a.method,a,null),dt(t,n,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=Ra(""+l),t.setAttribute(e,l);break;case"onClick":l!=null&&(t.onclick=Ln);break;case"onScroll":l!=null&&tt("scroll",t);break;case"onScrollEnd":l!=null&&tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=e}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}e=Ra(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""+l):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":l===!0?t.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,l):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(e,l):t.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(e):t.setAttribute(e,l);break;case"popover":tt("beforetoggle",t),tt("toggle",t),Ua(t,"popover",l);break;case"xlinkActuate":Qn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ua(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=um.get(e)||e,Ua(t,e,l))}}function kc(t,n,e,l,a,u){switch(e){case"style":Zf(t,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=e}}break;case"children":typeof l=="string"?nl(t,l):(typeof l=="number"||typeof l=="bigint")&&nl(t,""+l);break;case"onScroll":l!=null&&tt("scroll",t);break;case"onScrollEnd":l!=null&&tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ln);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rf.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),n=e.slice(2,a?e.length-7:void 0),u=t[Wt]||null,u=u!=null?u[e]:null,typeof u=="function"&&t.removeEventListener(n,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,l,a);break t}e in t?t[e]=l:l===!0?t.setAttribute(e,""):Ua(t,e,l)}}}function Zt(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tt("error",t),tt("load",t);var l=!1,a=!1,u;for(u in e)if(e.hasOwnProperty(u)){var i=e[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:dt(t,n,u,i,e,null)}}a&&dt(t,n,"srcSet",e.srcSet,e,null),l&&dt(t,n,"src",e.src,e,null);return;case"input":tt("invalid",t);var c=u=i=a=null,f=null,_=null;for(l in e)if(e.hasOwnProperty(l)){var S=e[l];if(S!=null)switch(l){case"name":a=S;break;case"type":i=S;break;case"checked":f=S;break;case"defaultChecked":_=S;break;case"value":u=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(137,n));break;default:dt(t,n,l,S,e,null)}}Yf(t,u,c,f,_,i,a,!1);return;case"select":tt("invalid",t),l=i=u=null;for(a in e)if(e.hasOwnProperty(a)&&(c=e[a],c!=null))switch(a){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":l=c;default:dt(t,n,a,c,e,null)}n=u,e=i,t.multiple=!!l,n!=null?tl(t,!!l,n,!1):e!=null&&tl(t,!!l,e,!0);return;case"textarea":tt("invalid",t),u=a=l=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":a=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:dt(t,n,i,c,e,null)}Xf(t,l,a,u);return;case"option":for(f in e)e.hasOwnProperty(f)&&(l=e[f],l!=null)&&(f==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":dt(t,n,f,l,e,null));return;case"dialog":tt("beforetoggle",t),tt("toggle",t),tt("cancel",t),tt("close",t);break;case"iframe":case"object":tt("load",t);break;case"video":case"audio":for(l=0;l<pa.length;l++)tt(pa[l],t);break;case"image":tt("error",t),tt("load",t);break;case"details":tt("toggle",t);break;case"embed":case"source":case"link":tt("error",t),tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in e)if(e.hasOwnProperty(_)&&(l=e[_],l!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:dt(t,n,_,l,e,null)}return;default:if(fi(n)){for(S in e)e.hasOwnProperty(S)&&(l=e[S],l!==void 0&&kc(t,n,S,l,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(l=e[c],l!=null&&dt(t,n,c,l,e,null))}function Bh(t,n,e,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,c=null,f=null,_=null,S=null;for(p in e){var M=e[p];if(e.hasOwnProperty(p)&&M!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":f=M;default:l.hasOwnProperty(p)||dt(t,n,p,null,l,M)}}for(var y in l){var p=l[y];if(M=e[y],l.hasOwnProperty(y)&&(p!=null||M!=null))switch(y){case"type":u=p;break;case"name":a=p;break;case"checked":_=p;break;case"defaultChecked":S=p;break;case"value":i=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(137,n));break;default:p!==M&&dt(t,n,y,p,l,M)}}ii(t,i,c,f,_,S,u,a);return;case"select":p=i=c=y=null;for(u in e)if(f=e[u],e.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":p=f;default:l.hasOwnProperty(u)||dt(t,n,u,null,l,f)}for(a in l)if(u=l[a],f=e[a],l.hasOwnProperty(a)&&(u!=null||f!=null))switch(a){case"value":y=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&dt(t,n,a,u,l,f)}n=c,e=i,l=p,y!=null?tl(t,!!e,y,!1):!!l!=!!e&&(n!=null?tl(t,!!e,n,!0):tl(t,!!e,e?[]:"",!1));return;case"textarea":p=y=null;for(c in e)if(a=e[c],e.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:dt(t,n,c,null,l,a)}for(i in l)if(a=l[i],u=e[i],l.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":y=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==u&&dt(t,n,i,a,l,u)}Vf(t,y,p);return;case"option":for(var H in e)y=e[H],e.hasOwnProperty(H)&&y!=null&&!l.hasOwnProperty(H)&&(H==="selected"?t.selected=!1:dt(t,n,H,null,l,y));for(f in l)y=l[f],p=e[f],l.hasOwnProperty(f)&&y!==p&&(y!=null||p!=null)&&(f==="selected"?t.selected=y&&typeof y!="function"&&typeof y!="symbol":dt(t,n,f,y,l,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in e)y=e[K],e.hasOwnProperty(K)&&y!=null&&!l.hasOwnProperty(K)&&dt(t,n,K,null,l,y);for(_ in l)if(y=l[_],p=e[_],l.hasOwnProperty(_)&&y!==p&&(y!=null||p!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(137,n));break;default:dt(t,n,_,y,l,p)}return;default:if(fi(n)){for(var mt in e)y=e[mt],e.hasOwnProperty(mt)&&y!==void 0&&!l.hasOwnProperty(mt)&&kc(t,n,mt,void 0,l,y);for(S in l)y=l[S],p=e[S],!l.hasOwnProperty(S)||y===p||y===void 0&&p===void 0||kc(t,n,S,y,l,p);return}}for(var d in e)y=e[d],e.hasOwnProperty(d)&&y!=null&&!l.hasOwnProperty(d)&&dt(t,n,d,null,l,y);for(M in l)y=l[M],p=e[M],!l.hasOwnProperty(M)||y===p||y==null&&p==null||dt(t,n,M,y,l,p)}function Jr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var a=e[l],u=a.transferSize,i=a.initiatorType,c=a.duration;if(u&&c&&Jr(i)){for(i=0,c=a.responseEnd,l+=1;l<e.length;l++){var f=e[l],_=f.startTime;if(_>c)break;var S=f.transferSize,M=f.initiatorType;S&&Jr(M)&&(f=f.responseEnd,i+=S*(f<c?1:(c-_)/(f-_)))}if(--l,n+=8*(u+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $c=null,Wc=null;function Nu(t){return t.nodeType===9?t:t.ownerDocument}function kr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $r(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Fc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ic=null;function jh(){var t=window.event;return t&&t.type==="popstate"?t===Ic?!1:(Ic=t,!0):(Ic=null,!1)}var Wr=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,Fr=typeof Promise=="function"?Promise:void 0,Rh=typeof queueMicrotask=="function"?queueMicrotask:typeof Fr<"u"?function(t){return Fr.resolve(null).then(t).catch(Hh)}:Wr;function Hh(t){setTimeout(function(){throw t})}function Ae(t){return t==="head"}function Ir(t,n){var e=n,l=0;do{var a=e.nextSibling;if(t.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(l===0){t.removeChild(a),Bl(n);return}l--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")l++;else if(e==="html")va(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,va(e);for(var u=e.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Hl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=i}}else e==="body"&&va(t.ownerDocument.body);e=a}while(e);Bl(n)}function Pr(t,n){var e=t;t=0;do{var l=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=l}while(e)}function Pc(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Pc(e),ai(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Qh(t,n,e,l){for(;t.nodeType===1;){var a=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Hl])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=En(t.nextSibling),t===null)break}return null}function Lh(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=En(t.nextSibling),t===null))return null;return t}function td(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=En(t.nextSibling),t===null))return null;return t}function tf(t){return t.data==="$?"||t.data==="$~"}function nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gh(t,n){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||e.readyState!=="loading")n();else{var l=function(){n(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function En(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ef=null;function nd(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(n===0)return En(t.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}t=t.nextSibling}return null}function ed(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return t;n--}else e!=="/$"&&e!=="/&"||n++}t=t.previousSibling}return null}function ld(t,n,e){switch(n=Nu(e),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function va(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ai(t)}var On=new Map,ad=new Set;function Bu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ne=z.d;z.d={f:Yh,r:Vh,D:Xh,C:Kh,L:Zh,m:wh,X:kh,S:Jh,M:$h};function Yh(){var t=ne.f(),n=Tu();return t||n}function Vh(t){var n=Fe(t);n!==null&&n.tag===5&&n.type==="form"?So(n):ne.r(t)}var Cl=typeof document>"u"?null:document;function ud(t,n,e){var l=Cl;if(l&&typeof n=="string"&&n){var a=bn(n);a='link[rel="'+t+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),ad.has(a)||(ad.add(a),t={rel:t,crossOrigin:e,href:n},l.querySelector(a)===null&&(n=l.createElement("link"),Zt(n,"link",t),Ht(n),l.head.appendChild(n)))}}function Xh(t){ne.D(t),ud("dns-prefetch",t,null)}function Kh(t,n){ne.C(t,n),ud("preconnect",t,n)}function Zh(t,n,e){ne.L(t,n,e);var l=Cl;if(l&&t&&n){var a='link[rel="preload"][as="'+bn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+bn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+bn(e.imageSizes)+'"]')):a+='[href="'+bn(t)+'"]';var u=a;switch(n){case"style":u=Dl(t);break;case"script":u=Nl(t)}On.has(u)||(t=R({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),On.set(u,t),l.querySelector(a)!==null||n==="style"&&l.querySelector(ba(u))||n==="script"&&l.querySelector(Sa(u))||(n=l.createElement("link"),Zt(n,"link",t),Ht(n),l.head.appendChild(n)))}}function wh(t,n){ne.m(t,n);var e=Cl;if(e&&t){var l=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+bn(l)+'"][href="'+bn(t)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Nl(t)}if(!On.has(u)&&(t=R({rel:"modulepreload",href:t},n),On.set(u,t),e.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Sa(u)))return}l=e.createElement("link"),Zt(l,"link",t),Ht(l),e.head.appendChild(l)}}}function Jh(t,n,e){ne.S(t,n,e);var l=Cl;if(l&&t){var a=Ie(l).hoistableStyles,u=Dl(t);n=n||"default";var i=a.get(u);if(!i){var c={loading:0,preload:null};if(i=l.querySelector(ba(u)))c.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":n},e),(e=On.get(u))&&lf(t,e);var f=i=l.createElement("link");Ht(f),Zt(f,"link",t),f._p=new Promise(function(_,S){f.onload=_,f.onerror=S}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Uu(i,n,l)}i={type:"stylesheet",instance:i,count:1,state:c},a.set(u,i)}}}function kh(t,n){ne.X(t,n);var e=Cl;if(e&&t){var l=Ie(e).hoistableScripts,a=Nl(t),u=l.get(a);u||(u=e.querySelector(Sa(a)),u||(t=R({src:t,async:!0},n),(n=On.get(a))&&af(t,n),u=e.createElement("script"),Ht(u),Zt(u,"link",t),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function $h(t,n){ne.M(t,n);var e=Cl;if(e&&t){var l=Ie(e).hoistableScripts,a=Nl(t),u=l.get(a);u||(u=e.querySelector(Sa(a)),u||(t=R({src:t,async:!0,type:"module"},n),(n=On.get(a))&&af(t,n),u=e.createElement("script"),Ht(u),Zt(u,"link",t),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function id(t,n,e,l){var a=(a=W.current)?Bu(a):null;if(!a)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Dl(e.href),e=Ie(a).hoistableStyles,l=e.get(n),l||(l={type:"style",instance:null,count:0,state:null},e.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Dl(e.href);var u=Ie(a).hoistableStyles,i=u.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=a.querySelector(ba(t)))&&!u._p&&(i.instance=u,i.state.loading=5),On.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},On.set(t,e),u||Wh(a,t,e,i.state))),n&&l===null)throw Error(s(528,""));return i}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nl(e),e=Ie(a).hoistableScripts,l=e.get(n),l||(l={type:"script",instance:null,count:0,state:null},e.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Dl(t){return'href="'+bn(t)+'"'}function ba(t){return'link[rel="stylesheet"]['+t+"]"}function cd(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function Wh(t,n,e,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Zt(n,"link",e),Ht(n),t.head.appendChild(n))}function Nl(t){return'[src="'+bn(t)+'"]'}function Sa(t){return"script[async]"+t}function fd(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+bn(e.href)+'"]');if(l)return n.instance=l,Ht(l),l;var a=R({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ht(l),Zt(l,"style",a),Uu(l,e.precedence,t),n.instance=l;case"stylesheet":a=Dl(e.href);var u=t.querySelector(ba(a));if(u)return n.state.loading|=4,n.instance=u,Ht(u),u;l=cd(e),(a=On.get(a))&&lf(l,a),u=(t.ownerDocument||t).createElement("link"),Ht(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Zt(u,"link",l),n.state.loading|=4,Uu(u,e.precedence,t),n.instance=u;case"script":return u=Nl(e.src),(a=t.querySelector(Sa(u)))?(n.instance=a,Ht(a),a):(l=e,(a=On.get(u))&&(l=R({},e),af(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),Ht(a),Zt(a,"link",l),t.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Uu(l,e.precedence,t));return n.instance}function Uu(t,n,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,i=0;i<l.length;i++){var c=l[i];if(c.dataset.precedence===n)u=c;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ju=null;function sd(t,n,e){if(ju===null){var l=new Map,a=ju=new Map;a.set(e,l)}else a=ju,l=a.get(e),l||(l=new Map,a.set(e,l));if(l.has(t))return l;for(l.set(t,null),e=e.getElementsByTagName(t),a=0;a<e.length;a++){var u=e[a];if(!(u[Hl]||u[Yt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(n)||"";i=t+i;var c=l.get(i);c?c.push(u):l.set(i,[u])}}return l}function od(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function Fh(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function rd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ih(t,n,e,l){if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Dl(l.href),u=n.querySelector(ba(a));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=qu.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=u,Ht(u);return}u=n.ownerDocument||n,l=cd(l),(a=On.get(a))&&lf(l,a),u=u.createElement("link"),Ht(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Zt(u,"link",l),e.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=qu.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}var uf=0;function Ph(t,n){return t.stylesheets&&t.count===0&&Hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var l=setTimeout(function(){if(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&uf===0&&(uf=62500*Uh());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>uf?50:800)+n);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function qu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ru=null;function Hu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ru=new Map,n.forEach(t0,t),Ru=null,qu.call(t))}function t0(t,n){if(!(n.state.loading&4)){var e=Ru.get(t);if(e)var l=e.get(null);else{e=new Map,Ru.set(t,e);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),l=i)}l&&e.set(null,l)}a=n.instance,i=a.getAttribute("data-precedence"),u=e.get(i)||l,u===l&&e.set(null,a),e.set(i,a),this.count++,l=qu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),n.state.loading|=4}}var Aa={$$typeof:bt,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function n0(t,n,e,l,a,u,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ti(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.hiddenUpdates=ti(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function dd(t,n,e,l,a,u,i,c,f,_,S,M){return t=new n0(t,n,e,i,f,_,S,M,c),n=1,u===!0&&(n|=24),u=on(3,null,null,n),t.current=u,u.stateNode=t,n=Qi(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:l,isDehydrated:e,cache:n},Vi(u),t}function md(t){return t?(t=fl,t):fl}function hd(t,n,e,l,a,u){a=md(a),l.context===null?l.context=a:l.pendingContext=a,l=re(n),l.payload={element:e},u=u===void 0?null:u,u!==null&&(l.callback=u),e=de(t,l,n),e!==null&&(en(e,t,n),ta(e,t,n))}function _d(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function cf(t,n){_d(t,n),(t=t.alternate)&&_d(t,n)}function yd(t){if(t.tag===13||t.tag===31){var n=qe(t,67108864);n!==null&&en(n,t,67108864),cf(t,67108864)}}function pd(t){if(t.tag===13||t.tag===31){var n=_n();n=ni(n);var e=qe(t,n);e!==null&&en(e,t,n),cf(t,n)}}var Qu=!0;function e0(t,n,e,l){var a=m.T;m.T=null;var u=z.p;try{z.p=2,ff(t,n,e,l)}finally{z.p=u,m.T=a}}function l0(t,n,e,l){var a=m.T;m.T=null;var u=z.p;try{z.p=8,ff(t,n,e,l)}finally{z.p=u,m.T=a}}function ff(t,n,e,l){if(Qu){var a=sf(l);if(a===null)Jc(t,n,l,Lu,e),vd(t,l);else if(u0(a,t,n,e,l))l.stopPropagation();else if(vd(t,l),n&4&&-1<a0.indexOf(t)){for(;a!==null;){var u=Fe(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=De(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-fn(i);c.entanglements[1]|=f,i&=~f}Rn(u),(ct&6)===0&&(Su=un()+500,ya(0))}}break;case 31:case 13:c=qe(u,2),c!==null&&en(c,u,2),Tu(),cf(u,2)}if(u=sf(l),u===null&&Jc(t,n,l,Lu,e),u===a)break;a=u}a!==null&&l.stopPropagation()}else Jc(t,n,l,null,e)}}function sf(t){return t=oi(t),of(t)}var Lu=null;function of(t){if(Lu=null,t=We(t),t!==null){var n=D(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=j(n),t!==null)return t;t=null}else if(e===31){if(t=L(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Lu=t,null}function gd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xd()){case xf:return 2;case Mf:return 8;case Oa:case Kd:return 32;case Ef:return 268435456;default:return 32}default:return 32}}var rf=!1,Te=null,ze=null,xe=null,Ta=new Map,za=new Map,Me=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vd(t,n){switch(t){case"focusin":case"focusout":Te=null;break;case"dragenter":case"dragleave":ze=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":Ta.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(n.pointerId)}}function xa(t,n,e,l,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:e,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},n!==null&&(n=Fe(n),n!==null&&yd(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),t)}function u0(t,n,e,l,a){switch(n){case"focusin":return Te=xa(Te,t,n,e,l,a),!0;case"dragenter":return ze=xa(ze,t,n,e,l,a),!0;case"mouseover":return xe=xa(xe,t,n,e,l,a),!0;case"pointerover":var u=a.pointerId;return Ta.set(u,xa(Ta.get(u)||null,t,n,e,l,a)),!0;case"gotpointercapture":return u=a.pointerId,za.set(u,xa(za.get(u)||null,t,n,e,l,a)),!0}return!1}function bd(t){var n=We(t.target);if(n!==null){var e=D(n);if(e!==null){if(n=e.tag,n===13){if(n=j(e),n!==null){t.blockedOn=n,Uf(t.priority,function(){pd(e)});return}}else if(n===31){if(n=L(e),n!==null){t.blockedOn=n,Uf(t.priority,function(){pd(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=sf(t.nativeEvent);if(e===null){e=t.nativeEvent;var l=new e.constructor(e.type,e);si=l,e.target.dispatchEvent(l),si=null}else return n=Fe(e),n!==null&&yd(n),t.blockedOn=e,!1;n.shift()}return!0}function Sd(t,n,e){Gu(t)&&e.delete(n)}function i0(){rf=!1,Te!==null&&Gu(Te)&&(Te=null),ze!==null&&Gu(ze)&&(ze=null),xe!==null&&Gu(xe)&&(xe=null),Ta.forEach(Sd),za.forEach(Sd)}function Yu(t,n){t.blockedOn===n&&(t.blockedOn=null,rf||(rf=!0,b.unstable_scheduleCallback(b.unstable_NormalPriority,i0)))}var Vu=null;function Ad(t){Vu!==t&&(Vu=t,b.unstable_scheduleCallback(b.unstable_NormalPriority,function(){Vu===t&&(Vu=null);for(var n=0;n<t.length;n+=3){var e=t[n],l=t[n+1],a=t[n+2];if(typeof l!="function"){if(of(l||e)===null)continue;break}var u=Fe(e);u!==null&&(t.splice(n,3),n-=3,fc(u,{pending:!0,data:a,method:e.method,action:l},l,a))}}))}function Bl(t){function n(f){return Yu(f,t)}Te!==null&&Yu(Te,t),ze!==null&&Yu(ze,t),xe!==null&&Yu(xe,t),Ta.forEach(n),za.forEach(n);for(var e=0;e<Me.length;e++){var l=Me[e];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Me.length&&(e=Me[0],e.blockedOn===null);)bd(e),e.blockedOn===null&&Me.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var a=e[l],u=e[l+1],i=a[Wt]||null;if(typeof u=="function")i||Ad(e);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[Wt]||null)c=i.formAction;else if(of(a)!==null)continue}else c=i.action;typeof c=="function"?e[l+1]=c:(e.splice(l,3),l-=3),Ad(e)}}}function Td(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function n(){a!==null&&(a(),a=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),a!==null&&(a(),a=null)}}}function df(t){this._internalRoot=t}Xu.prototype.render=df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var e=n.current,l=_n();hd(e,l,t,n,null,null)},Xu.prototype.unmount=df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;hd(t.current,2,null,t,null,null),Tu(),n[$e]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Bf();t={blockedOn:null,target:t,priority:n};for(var e=0;e<Me.length&&n!==0&&n<Me[e].priority;e++);Me.splice(e,0,t),e===0&&bd(t)}};var zd=O.version;if(zd!=="19.2.4")throw Error(s(527,zd,"19.2.4"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=A(n),t=t!==null?Z(t):null,t=t===null?null:t.stateNode,t};var c0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:m,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{jl=Ku.inject(c0),cn=Ku}catch{}}return Ea.createRoot=function(t,n){if(!T(t))throw Error(s(299));var e=!1,l="",a=No,u=Bo,i=Uo;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=dd(t,1,!1,null,null,e,l,null,a,u,i,Td),t[$e]=n.current,wc(t),new df(n)},Ea.hydrateRoot=function(t,n,e){if(!T(t))throw Error(s(299));var l=!1,a="",u=No,i=Bo,c=Uo,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),n=dd(t,1,!0,n,e??null,l,a,f,u,i,c,Td),n.context=md(null),e=n.current,l=_n(),l=ni(l),a=re(l),a.callback=null,de(e,a,l),e=l,n.current.lanes=e,Rl(n,e),Rn(n),t[$e]=n.current,wc(t),new Xu(n)},Ea.version="19.2.4",Ea}var jd;function p0(){if(jd)return _f.exports;jd=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(O){console.error(O)}}return b(),_f.exports=y0(),_f.exports}var g0=p0();const v0=["help","ls","cd","cat","pwd","clear","search","history","imgview","theme","neofetch","matrix","clock"],Sf=new Map;function yn(b,O){Sf.set(b,O)}function b0(b){return Sf.get(b)}function S0(b){return Sf.has(b)}const Rd=(b,O)=>{if(!O||O.length===0)return{type:"info",output:["  (no command history)"]};const g=[""];return O.forEach((s,T)=>{g.push(`  ${T+1}  ${s}`)}),g.push(""),{type:"success",output:g}};yn("history",b=>Rd());let Hd=[];function A0(b){Hd.push(b)}function Zu(b){A0(b);const O=b.trim().split(/\s+/),g=O[0],s=O.slice(1);if(!S0(g))return{type:"error",output:["",`Command not found: ${g}`,"Type 'help' for available commands",""]};const T=b0(g);if(!T)return{type:"error",output:[`Error: Command handler not found for ${g}`]};if(g==="history")return Rd(s,Hd.slice(0,-1));try{return T(s)}catch(D){return{type:"error",output:["",`Error executing command: ${D instanceof Error?D.message:String(D)}`,""]}}}const T0=`---
title: "2026 年生活总结"
date: 2026-02-25
category: life
tags: ["life", "reflection", "yearly"]
description: "回顾 2026 年的生活点滴和感悟"
draft: false
---

# 2026 年生活总结

## 前言

时间过得真快，转眼间 2026 年已经过去了两个月。是时候总结一下过去一年的生活了。

## 工作方面

这一年工作上取得了不少进展：

- 完成了两个重要项目的上线
- 学习了 Rust 和 Go 两门新语言
- 开始参与开源项目贡献

最大的收获是理解了**技术是为业务服务**的，不能为了技术而技术。

## 生活方面

### 健康
- 坚持每周跑步 3 次
- 学会了做几道拿手菜
- 戒掉了熬夜的习惯

### 阅读
今年读了 20 本书，印象最深的有：

1. 《原子习惯》- 小习惯带来大改变
2. 《深度工作》- 专注的力量
3. 《思考，快与慢》- 理解人类思维

### 旅行
去了三个城市：
- 🏔️ 成都 - 美食与熊猫
- 🌊 厦门 - 海岛与文艺
- 🏯 西安 - 历史与文化

## 感悟

> 生活不是等待暴风雨过去，而是学会在雨中跳舞。

这一年经历了很多挑战，但也收获了很多成长。最重要的是明白了：

1. **健康是第一位的**
2. **持续学习很重要**
3. **平衡工作与生活**

## 新年计划

- [ ] 学习一门新语言（可能是 Zig）
- [ ] 跑一次半程马拉松
- [ ] 读 30 本书
- [ ] 写一篇技术文章

---
*发布于 2026-02-25 | 分类：life | 标签：life, reflection, yearly*
`,z0=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),x0=`---
title: "2026 年生活总结"
date: 2026-02-25
category: life
tags: ["life", "reflection", "yearly"]
description: "回顾 2026 年的生活点滴和感悟"
draft: false
---

# 2026 年生活总结

## 前言

时间过得真快，转眼间 2026 年已经过去了两个月。是时候总结一下过去一年的生活了。

## 工作方面

这一年工作上取得了不少进展：

- 完成了两个重要项目的上线
- 学习了 Rust 和 Go 两门新语言
- 开始参与开源项目贡献

最大的收获是理解了**技术是为业务服务**的，不能为了技术而技术。

## 生活方面

### 健康
- 坚持每周跑步 3 次
- 学会了做几道拿手菜
- 戒掉了熬夜的习惯

### 阅读
今年读了 20 本书，印象最深的有：

1. 《原子习惯》- 小习惯带来大改变
2. 《深度工作》- 专注的力量
3. 《思考，快与慢》- 理解人类思维

### 旅行
去了三个城市：
- 🏔️ 成都 - 美食与熊猫
- 🌊 厦门 - 海岛与文艺
- 🏯 西安 - 历史与文化

## 感悟

> 生活不是等待暴风雨过去，而是学会在雨中跳舞。

这一年经历了很多挑战，但也收获了很多成长。最重要的是明白了：

1. **健康是第一位的**
2. **持续学习很重要**
3. **平衡工作与生活**

## 新年计划

- [ ] 学习一门新语言（可能是 Zig）
- [ ] 跑一次半程马拉松
- [ ] 读 30 本书
- [ ] 写一篇技术文章

---
*发布于 2026-02-25 | 分类：life | 标签：life, reflection, yearly*
`,M0=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),E0=`---
title: "About Me"
date: 2026-03-06
category: life
tags: ["about", "personal"]
description: "关于我 - 程家骏"
---

# 👋 About Me

## 程家骏 / Jiajun Cheng

🎓 **中国科学技术大学 (USTC)** 学生

---

## 📚 关于我

你好！我是程家骏，目前就读于中国科学技术大学。

我对技术充满热情，喜欢探索新的编程语言和构建有趣的工具。这个终端风格的博客系统就是我个人项目之一，它结合了复古的命令行美学和现代 Web 技术。

---

## 🛠️ 技术栈

- **编程语言**: Rust, TypeScript, Python
- **前端**: React, Vue, Tailwind CSS
- **后端**: Node.js, 后端开发
- **工具**: Git, Linux, Neovim

---

## 🚀 项目

### Terminal Blog
一个基于 React + TypeScript + Vite 的终端风格博客系统，提供沉浸式的命令行体验。

**特性**：
- 终端风格界面
- 文件系统导航（ls, cd, cat 等命令）
- 全文搜索
- 代码高亮
- 主题切换

---

## 📧 联系我

- **GitHub**: [@jiajun-c](https://github.com/jiajun-c)
- **Email**: [待定]

---

## 💡 兴趣爱好

- 🖥️ 系统编程与 Web 开发
- 📖 阅读技术博客和开源项目
- 🎮 偶尔玩游戏

---

> "Talk is cheap. Show me the code." — Linus Torvalds

---

*最后更新：2026-03-06*
`,O0=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),C0=`---
title: "我的项目展示"
date: 2026-03-05
category: projects
tags: ["projects", "portfolio"]
description: "展示我的一些个人项目"
draft: false
---

# 我的项目展示

## 终端博客

这个项目是一个终端风格的个人博客网站，使用 React 和 TypeScript 构建。

![终端界面截图](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop)

### 主要功能

- 终端风格的界面设计
- 支持分类和文章浏览
- 命令自动补全
- 交互式列表选择
- 图片查看器

## 技术栈

![代码编辑](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop)

### 核心技术

1. **前端框架**: React 18 + TypeScript
2. **构建工具**: Vite
3. **样式**: Tailwind CSS
4. **内容格式**: Markdown

## 项目截图

![项目预览](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop)

### 待办事项

- [ ] 添加更多主题
- [x] 实现列表选择功能
- [x] 支持图片查看
- [ ] 添加评论系统

---
*发布于 2026-03-05 | 分类：projects | 标签：projects, portfolio*
`,D0=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),N0=`---
title: "个人博客项目"
date: 2026-03-03
category: projects
tags: ["react", "typescript", "blog"]
description: "使用 React + TypeScript 开发的终端风格个人博客"
draft: false
---

# 个人博客项目

## 项目概述

这是一个具有终端/命令行风格的个人博客网站，用户通过输入类 Unix 命令的方式浏览、搜索和阅读博客文章。

## 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **部署**: Vercel / Netlify

## 功能特性

### 核心命令

| 命令 | 功能 |
|------|------|
| \`help\` | 显示可用命令列表 |
| \`ls\` | 列出分类或文章 |
| \`cat <article>\` | 阅读文章 |
| \`search <keyword>\` | 搜索文章 |
| \`cd <category>\` | 进入分类 |
| \`pwd\` | 显示当前位置 |
| \`clear\` | 清屏 |

### 增强功能

- 命令历史记录（上下箭头切换）
- 命令自动补全（Tab 键）
- 响应式设计
- 主题定制

## 项目结构

\`\`\`
src/
├── components/
│   └── Terminal/
├── commands/
├── content/
├── types/
└── utils/
\`\`\`

## 使用示例

\`\`\`bash
# 查看帮助
$ help

# 列出分类
$ ls

# 进入技术分类
$ cd tech

# 列出文章
$ ls

# 阅读文章
$ cat rust-intro
\`\`\`

## 源码地址

[GitHub Repository](https://github.com/your-username/terminal-blog)

---
*发布于 2026-03-03 | 分类：projects | 标签：react, typescript, blog*
`,B0=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),U0=`---
title: 注意力机制演进史 - 从 MHA 到 FlashAttention
date: 2026-03-14
category: tech
tags: ["Attention", "Transformer", "FlashAttention", "LLM"]
description: 全面梳理注意力机制的演进历程，从 MHA、MQA、GQA 到 FlashAttention，深入解析每种变体的原理和实现
---

# 注意力机制演进史 - 从 MHA 到 FlashAttention

Attention 机制是 Transformer 架构的核心。自 2017 年 Google 提出 Transformer 以来，Attention 机制经历了多次重要的演进和优化。本文将全面梳理这一演进历程。

## 一、Scaled Dot-Product Attention

### 1.1 基础公式

注意力机制最基础的形式是缩放点积注意力：

$$Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V$$

其中：
- $Q \\in \\mathbb{R}^{n \\times d_k}$: Query 矩阵
- $K \\in \\mathbb{R}^{n \\times d_k}$: Key 矩阵
- $V \\in \\mathbb{R}^{n \\times d_v}$: Value 矩阵
- $d_k$: 缩放因子，防止点积过大

### 1.2 PyTorch 实现

\`\`\`python
import torch
import torch.nn as nn
import math

class ScaledDotProductAttention(nn.Module):
    def __init__(self, dim):
        super().__init__()
        self.dim = dim
        # 将 Q, K, V 放到一个线性层中
        self.proj = nn.Linear(dim, dim * 3)
        self.att_drop = nn.Dropout(0.1)
        self.output_proj = nn.Linear(dim, dim)

    def forward(self, X, attention_mask=None):
        QKV = self.proj(X)
        # X shape: (batch, seq, dim)
        Q, K, V = torch.split(QKV, self.dim, dim=-1)

        # Q, K, V shape: (batch, seq, dim)
        att_weight = Q @ K.transpose(-1, -2) / math.sqrt(self.dim)
        # att_weight: (batch, seq, seq)

        if attention_mask is not None:
            att_weight = att_weight.masked_fill(attention_mask == 0, float('-inf'))

        att_weight = torch.softmax(att_weight, dim=-1)
        att_weight = self.att_drop(att_weight)

        output = att_weight @ V
        return self.output_proj(output)
\`\`\`

### 1.3 复杂度分析

| 操作 | 计算复杂度 | 内存复杂度 |
|------|-----------|-----------|
| QK^T 乘法 | O(n²·d) | O(n²) |
| Softmax | O(n²) | O(n²) |
| Attention×V | O(n²·d) | O(n²) |

**问题：** 序列长度增加时，内存消耗呈**平方级增长**！

## 二、Multi-Head Attention (MHA)

### 2.1 多头注意力公式

MHA 将上述操作并行执行 h 次：

$$MultiHead(Q, K, V) = Concat(head_1, ..., head_h)W^O$$

$$head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)$$

### 2.2 PyTorch 实现

\`\`\`python
class MultiHeadAttention(nn.Module):
    def __init__(self, hidden_dim, num_heads):
        super().__init__()
        self.num_heads = num_heads
        self.head_dim = hidden_dim // num_heads
        self.hidden_dim = hidden_dim

        self.q_proj = nn.Linear(hidden_dim, hidden_dim)
        self.k_proj = nn.Linear(hidden_dim, hidden_dim)
        self.v_proj = nn.Linear(hidden_dim, hidden_dim)
        self.o_proj = nn.Linear(hidden_dim, hidden_dim)

    def forward(self, X, attention_mask=None):
        batch_size, seq_len, _ = X.size()

        Q = self.q_proj(X)
        K = self.k_proj(X)
        V = self.v_proj(X)

        # 重塑为多头格式
        q_state = Q.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)
        k_state = K.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)
        v_state = V.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)

        # 计算 attention
        attention_weight = (q_state @ k_state.transpose(-1, -2)) / math.sqrt(self.head_dim)

        if attention_mask is not None:
            attention_weight = attention_weight.masked_fill(attention_mask == 0, float("-1e20"))

        attention_weight = torch.softmax(attention_weight, dim=-1)
        output_mid = attention_weight @ v_state

        output = output_mid.transpose(1, 2).contiguous()
        output = output.view(batch_size, seq_len, -1)
        return self.o_proj(output)
\`\`\`

### 2.3 MHA 的瓶颈

MHA 虽然提高了模型表达能力，但带来了显著的**显存和计算开销**：

以 LLaMA-7B 为例 (hidden_dim=4096, num_heads=32):
- 每个 token 的 KV Cache: $2 \\times 32 \\times 128 \\times 2bytes = 16KB$
- 序列长度 4096 时：$16KB \\times 4096 = 64MB$ (单 token)
- 总 KV Cache: $64MB \\times 32 \\text{层} = 2GB$

## 三、Multi-Query Attention (MQA)

### 3.1 MQA 的核心思想

MQA 通过**共享键和值头**来减少 KV Cache：

| 类型 | Q 头数 | K 头数 | V 头数 | KV Cache 大小 |
|------|--------|--------|--------|--------------|
| MHA  | N      | N      | N      | N × 2       |
| MQA  | N      | 1      | 1      | 2           |

**KV Cache 减少：N 倍！**

### 3.2 MQA 实现

\`\`\`python
class MultiQueryAttention(nn.Module):
    def __init__(self, hidden_dim, num_heads):
        super().__init__()
        assert hidden_dim % num_heads == 0

        self.hidden_dim = hidden_dim
        self.num_heads = num_heads
        self.head_dim = hidden_dim // num_heads

        # Q 保持多头，K, V 为单头
        self.q_proj = nn.Linear(hidden_dim, hidden_dim)
        self.k_proj = nn.Linear(hidden_dim, self.head_dim)
        self.v_proj = nn.Linear(hidden_dim, self.head_dim)
        self.o_proj = nn.Linear(hidden_dim, hidden_dim)

    def forward(self, X, attention_mask=None):
        batch_size, seq, _ = X.size()

        q = self.q_proj(X)
        k = self.k_proj(X)
        v = self.v_proj(X)

        # Q: (batch, seq, num_heads, head_dim)
        q = q.view(batch_size, seq, self.num_heads, self.head_dim).transpose(1, 2)
        # K, V: (batch, seq, 1, head_dim) -> (batch, 1, seq, head_dim)
        k = k.view(batch_size, seq, 1, self.head_dim).transpose(1, 2)
        v = v.view(batch_size, seq, 1, self.head_dim).transpose(1, 2)

        # K, V 通过广播与所有 Q 头计算 attention
        attention_score = (q @ k.transpose(2, 3)) / math.sqrt(self.head_dim)

        if attention_mask is not None:
            attention_score = attention_score.masked_fill(attention_mask == 0, float("-inf"))

        attention_weight = torch.softmax(attention_score, dim=-1)
        output = attention_weight @ v  # (batch, num_heads, seq, head_dim)

        output = output.transpose(1, 2).contiguous()
        output = output.view(batch_size, seq, -1)
        return self.o_proj(output)
\`\`\`

### 3.3 MQA 的优缺点

**优点：**
- KV Cache 大小显著减少
- 推理速度提升 2-3 倍
- 内存带宽需求降低

**缺点：**
- 模型质量略有下降 (约 1-2%)

## 四、Grouped-Query Attention (GQA)

### 4.1 GQA 的设计思路

GQA 是 MHA 和 MQA 的折中方案：

- 将 Q 头分成 G 组
- 每组共享一个 K 头和 V 头

| 类型 | Q 头数 | K 头数 | V 头数 | KV Cache 大小 |
|------|--------|--------|--------|--------------|
| MHA  | N      | N      | N      | N × 2       |
| GQA  | N      | G      | G      | G × 2       |
| MQA  | N      | 1      | 1      | 2           |

### 4.2 GQA 实现

\`\`\`python
class GroupedQueryAttention(nn.Module):
    def __init__(self, hidden_dim, num_heads, num_kv_heads):
        super().__init__()
        assert hidden_dim % num_heads == 0
        assert num_heads % num_kv_heads == 0

        self.hidden_dim = hidden_dim
        self.num_heads = num_heads
        self.num_kv_heads = num_kv_heads
        self.head_dim = hidden_dim // num_heads
        self.num_groups = num_heads // num_kv_heads

        self.q_proj = nn.Linear(hidden_dim, num_heads * self.head_dim)
        self.k_proj = nn.Linear(hidden_dim, num_kv_heads * self.head_dim)
        self.v_proj = nn.Linear(hidden_dim, num_kv_heads * self.head_dim)
        self.o_proj = nn.Linear(hidden_dim, hidden_dim)

    def forward(self, X, attention_mask=None):
        batch_size, seq, _ = X.size()

        q = self.q_proj(X)
        k = self.k_proj(X)
        v = self.v_proj(X)

        # 重塑形状
        q = q.view(batch_size, seq, self.num_heads, self.head_dim).transpose(1, 2)
        k = k.view(batch_size, seq, self.num_kv_heads, self.head_dim).transpose(1, 2)
        v = v.view(batch_size, seq, self.num_kv_heads, self.head_dim).transpose(1, 2)

        # K, V repeat_interleave 扩展到 num_heads
        k = k.repeat_interleave(self.num_groups, dim=1)
        v = v.repeat_interleave(self.num_groups, dim=1)

        attention_score = (q @ k.transpose(2, 3)) / math.sqrt(self.head_dim)
        attention_weight = torch.softmax(attention_score, dim=-1)
        output = attention_weight @ v

        output = output.transpose(1, 2).contiguous()
        return self.o_proj(output.view(batch_size, seq, -1))
\`\`\`

### 4.3 实际应用

LLaMA-2 70B 和 LLaMA-3 都采用了 GQA：

| 模型 | num_heads | num_kv_heads | G 值 |
|------|-----------|--------------|-----|
| LLaMA-2 70B | 64 | 8 | 8 |
| LLaMA-3 70B | 64 | 8 | 8 |

## 五、FlashAttention

### 5.1 FlashAttention 的动机

标准 Attention 的问题：
1. **内存瓶颈**: 需要 O(n²) 的中间存储
2. **IO 瓶颈**: 频繁访问 HBM (高带宽但高延迟)

FlashAttention 的核心思想：
- **分块计算**: 将矩阵分块，在 SRAM 中完成计算
- **Online Softmax**: 流式计算 softmax，避免存储完整注意力矩阵

### 5.2 FlashAttention V1 算法

\`\`\`python
import torch

def flash_attention_v1(Q, K, V, Br=4, Bc=4):
    """
    FlashAttention V1 简化实现
    Q, K, V: (N, d) 矩阵
    Br, Bc: 分块大小
    """
    N, d = Q.shape
    O = torch.zeros((N, d))
    l = torch.zeros((N, 1))  # 归一化因子
    m = torch.full((N, 1), -float('inf'))  # max 值

    # 外循环：遍历 K, V 的块
    for block_start_Bc in range(0, N, Bc):
        block_end_Bc = block_start_Bc + Bc
        Kj = K[block_start_Bc:block_end_Bc, :]
        Vj = V[block_start_Bc:block_end_Bc, :]

        # 内循环：遍历 Q 的块
        for block_start_Br in range(0, N, Br):
            block_end_Br = block_start_Br + Br
            mi = m[block_start_Br:block_end_Br, :]
            li = l[block_start_Br:block_end_Br, :]
            Oi = O[block_start_Br:block_end_Br, :]
            Qi = Q[block_start_Br:block_end_Br, :]

            # 计算注意力分数
            Sij = Qi @ Kj.T
            mij_hat = torch.max(Sij, dim=1).values[:, None]
            pij_hat = torch.exp(Sij - mij_hat)
            lij_hat = torch.sum(pij_hat, dim=1)[:, None]

            # Online Softmax 更新
            mi_new = torch.max(torch.column_stack([mi, mij_hat]), dim=1).values[:, None]
            li_new = torch.exp(mi - mi_new) * li + torch.exp(mij_hat - mi_new) * lij_hat
            Oi = (li * torch.exp(mi - mi_new) * Oi + torch.exp(mij_hat - mi_new) * pij_hat @ Vj) / li_new

            m[block_start_Br:block_end_Br, :] = mi_new
            l[block_start_Br:block_end_Br, :] = li_new
            O[block_start_Br:block_end_Br, :] = Oi

    return O
\`\`\`

### 5.3 FlashAttention V2 改进

V2 相比 V1 的改进：

1. **更好的并行度**: 每个 warp 计算多个 output tiles
2. **减少共享内存**: 优化了数据布局
3. **非均匀分块**: 动态调整块大小

### 5.4 性能对比

| 实现 | A100 FP16 | 内存节省 |
|------|-----------|---------|
| 标准 Attention | 基准 | 基准 |
| FlashAttention V1 | 2.3x 更快 | 20x |
| FlashAttention V2 | 3.0x 更快 | 25x |

## 六、其他 Attention 变体

### 6.1 Ring Attention

用于分布式训练的序列并行：
- 将序列切分到多个设备
- 通过 ring all-reduce 交换 KV
- 支持超长序列 (1M+ tokens)

### 6.2 Window Attention

局部注意力窗口：
- 每个 token 只关注局部窗口内的 token
- 复杂度从 O(n²) 降至 O(n·w)
- 用于 LLaMA、Mistral 等模型

### 6.3 Sparse Attention

稀疏注意力模式：
- Strided Attention: 每隔 k 个 token 关注一次
- Global Attention: 只关注特殊 token (如 CLS)

## 七、总结

注意力机制的演进历程：

\`\`\`
MHA (2017)
  ↓
MQA (2019) - 减少 KV Cache
  ↓
GQA (2023) - 平衡质量和效率
  ↓
FlashAttention (2022-) - IO 感知优化
\`\`\`

**核心要点：**
1. MHA 提高表达能力但增加开销
2. MQA/GQA 通过共享 KV 头减少显存
3. FlashAttention 通过分块和 online softmax 优化 IO
4. 选择合适的 Attention 类型需要权衡质量和效率

---

**参考资料:**
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [FlashAttention Paper](https://arxiv.org/abs/2205.14135)
- [GQA Paper](https://arxiv.org/abs/2305.13245)
`,j0=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),q0=`---
title: CUDA TensorCore 编程详解 - 从指令到优化
date: 2026-03-14
category: tech
tags: ["CUDA", "TensorCore", "GPU Programming", "Performance Optimization"]
description: 深入解析 NVIDIA TensorCore 编程模型，包括 mma 指令、数据布局、访存优化和实际算子实现
---

# CUDA TensorCore 编程详解 - 从指令到优化

TensorCore 是 NVIDIA GPU 中的专用矩阵运算单元，能够提供比传统 CUDA Core 高出一个数量级的矩阵乘法性能。本文将深入讲解 TensorCore 编程的核心技术。

## 一、TensorCore 架构演进

### 1.1 各代 TensorCore 特性对比

| 架构 | TensorCore 类型 | 支持的精度 | 每 SM TensorCore 数 |
|------|---------------|----------|-------------------|
| Volta (V100) | 第一代 | FP16 | 8 |
| Ampere (A100) | 第二代 | FP16/BF16/TF32/FP64 | 4 |
| Hopper (H100) | 第三代 | FP8/FP16/BF16/TF32 | 4 |
| Blackwell (B200) | 第四代 | FP4/FP8/FP16/BF16 | 8 |

### 1.2 TensorCore 性能优势

以 A100 为例：
- CUDA Core FP16 算力：~19.5 TFLOPS
- TensorCore FP16 算力：~312 TFLOPS
- **性能提升：约 16 倍**

## 二、MMA 指令基础

### 2.1 mma 指令语法

MMA (Matrix Multiply-Accumulate) 指令是 TensorCore 的底层编程接口：

\`\`\`
mma.sync.aligned.<m>n<k>.<layout>.<outType>.<inType1>.<inType2>.<accType>
    {d}, {a}, {b}, {c};
\`\`\`

参数说明：
- \`<m>n<k>\`: 矩阵尺寸 (M × N × K)
- \`<layout>\`: 数据布局 (row/col)
- \`<outType>\`: 输出数据类型
- \`<inType1/2>\`: 输入数据类型
- \`<accType>\`: 累加器数据类型

### 2.2 支持的矩阵形状

常用的 TensorCore 矩阵形状：

| 形状 | 说明 |
|------|------|
| m16n8k16 | Volta/Ampere 基本形状 |
| m16n8k32 | Ampere 扩展形状 |
| m32n8k16 | Ampere 扩展形状 |
| m64n128k16 | Hopper 大矩阵 |

### 2.3 最小可运行示例

以 m16n8k16 的 FP16 矩阵乘法为例：

\`\`\`cpp
__global__ void mma_fp16_acc_fp32(float *out) {
    float c[4] = {0., 0., 0., 0.};  // 累加器
    float d[4] = {0., 0., 0., 0.};  // 输出
    half a[8] = {1., 2., 1., 2., 1., 2., 1., 2.};  // 矩阵 A
    half b[4] = {1., 2., 3., 4.};   // 矩阵 B

    unsigned const *rA = reinterpret_cast<unsigned const *>(&a);
    unsigned const *rB = reinterpret_cast<unsigned const *>(&b);
    float const *rC = reinterpret_cast<float const *>(&c);
    float *rD = reinterpret_cast<float *>(&d);

    asm("mma.sync.aligned.m16n8k16.row.col.f32.f16.f16.f32 "
        "{%0,%1,%2,%3}, {%4,%5,%6,%7}, {%8,%9}, {%10,%11,%12,%13};\\n"
        : "=f"(rD[0]), "=f"(rD[1]), "=f"(rD[2]), "=f"(rD[3])
        : "r"(rA[0]), "r"(rA[1]), "r"(rA[2]), "r"(rA[3]),
          "r"(rB[0]), "r"(rB[1]),
          "f"(rC[0]), "f"(rC[1]), "f"(rC[2]), "f"(rC[3]));

    // 输出结果
    printf("%f\\n", rD[0]);
    memcpy(out + threadIdx.x * 2, rD, 8);
    memcpy(out + 8 * 8 + threadIdx.x * 2, rD + 2, 8);
}
\`\`\`

## 三、数据布局详解

### 3.1 Warp 级别的数据分布

mma 指令以**warp**(32 线程) 为执行单位。对于 m16n8k16 的矩阵乘法：

\`\`\`
矩阵 A (16×16):
- 每个线程负责 4 个元素
- 32 线程 × 4 元素 = 128 元素 = 16×16/2 (FP16)

矩阵 B (16×8):
- 每个线程负责 2 个元素
- 32 线程 × 2 元素 = 64 元素 = 16×8/2 (FP16)

矩阵 C/D (16×8):
- 每个线程负责 4 个元素
\`\`\`

### 3.2 数据加载模式

#### 矩阵 A 的加载

\`\`\`cpp
// 对于 m16n8k16，warp 中的线程 (row, col) 加载：
int row = threadIdx.x / 4;
int col = threadIdx.x % 4;
int warpID = row * 8 + col;

// A 矩阵：每个线程加载 4 个 register
unsigned rA[4];
rA[0] = load_A(warpID);
rA[1] = load_A(warpID + 64);
rA[2] = load_A(warpID + 4);
rA[3] = load_A(warpID + 68);
\`\`\`

#### 矩阵 B 的加载

\`\`\`cpp
// B 矩阵：每个线程加载 2 个 register (非连续元素)
half b[4];
b[0] = d_B[col*8*2+row];
b[1] = d_B[col*8*2+row + 8];
b[2] = d_B[64 + col*8*2+row];
b[3] = d_B[64 + col*8*2+row + 8];
\`\`\`

### 3.3 完整的 TensorCore GEMM 内核

\`\`\`cpp
__global__ void tensorCore_gemm(
    half* d_A,      // [M, K]
    half* d_B,      // [K, N]
    float* d_C,     // [M, N]
    int M, int N, int K
) {
    // 每个 block 计算一个 64x64 的 tile
    const int BM = 64, BN = 64, BK = 16;

    // 共享内存
    __shared__ half As[BM * BK];
    __shared__ half Bs[BK * BN];

    // 计算全局坐标
    int bx = blockIdx.x, by = blockIdx.y;
    int tx = threadIdx.x, ty = threadIdx.y;

    // 加载矩阵 A 到共享内存
    int aRow = by * BM + ty;
    int aCol = tx;
    if (aRow < M && aCol < K) {
        As[ty * BK + tx] = d_A[aRow * K + aCol];
    }

    // 加载矩阵 B 到共享内存
    int bRow = tx;
    int bCol = bx * BN + ty;
    if (bRow < K && bCol < N) {
        Bs[tx * BN + ty] = d_B[bRow * N + bCol];
    }

    __syncthreads();

    // TensorCore 计算
    float accum[4] = {0.f};

    for (int k = 0; k < K; k += BK) {
        // 从共享内存加载到 register
        half a_frag[8], b_frag[4];
        load_from_shared(As, Bs, tx, ty, a_frag, b_frag);

        // mma 指令
        asm volatile(
            "mma.sync.aligned.m16n8k16.row.col.f32.f16.f16.f32 "
            "{%0,%1,%2,%3}, {%4,%5,%6,%7}, {%8,%9}, {%10,%11,%12,%13};\\n"
            : "=f"(accum[0]), "=f"(accum[1]), "=f"(accum[2]), "=f"(accum[3])
            : "r"(*(unsigned*)&a_frag[0]), "r"(*(unsigned*)&a_frag[2]),
              "r"(*(unsigned*)&a_frag[4]), "r"(*(unsigned*)&a_frag[6]),
              "r"(*(unsigned*)&b_frag[0]), "r"(*(unsigned*)&b_frag[2]),
              "f"(accum[0]), "f"(accum[1]), "f"(accum[2]), "f"(accum[3]));

        __syncthreads();
    }

    // 存储结果
    store_result(d_C, accum, bx, by, tx, ty, M, N);
}
\`\`\`

## 四、访存优化

### 4.1 共享内存地址转换

\`__cvta_generic_to_shared\` 将普通地址转换为共享内存地址：

\`\`\`cpp
unsigned shared_addr = __cvta_generic_to_shared(&As[threadIdx.x]);
\`\`\`

### 4.2 LDMATRIX 指令

LDMATRIX 用于从共享内存高效加载数据到 register：

\`\`\`cpp
// 加载 1 个 8×8 矩阵
#define LDMATRIX_X1(R, addr) \\
    asm volatile("ldmatrix.sync.aligned.x1.m8n8.shared.b16 {%0}, [%1];\\n" \\
                 : "=r"(R) : "r"(addr))

// 加载 2 个 8×8 矩阵
#define LDMATRIX_X2(R0, R1, addr) \\
    asm volatile("ldmatrix.sync.aligned.x2.m8n8.shared.b16 {%0, %1}, [%2];\\n" \\
                 : "=r"(R0), "=r"(R1) : "r"(addr))

// 加载 4 个 8×8 矩阵
#define LDMATRIX_X4(R0, R1, R2, R3, addr) \\
    asm volatile("ldmatrix.sync.aligned.x4.m8n8.shared.b16 {%0, %1, %2, %3}, [%4];\\n" \\
                 : "=r"(R0), "=r"(R1), "=r"(R2), "=r"(R3) : "r"(addr))
\`\`\`

### 4.3 异步内存拷贝 (Hopper)

Hopper 架构引入了 TMA (Tensor Memory Accelerator) 和异步拷贝：

\`\`\`cpp
// 从全局内存异步拷贝到共享内存
#define CP_ASYNC_CA(dst, src, Bytes) \\
    asm volatile("cp.async.ca.shared.global.L2::128B [%0], [%1], %2;\\n" \\
                 ::"r"(dst), "l"(src), "n"(Bytes))

// 提交拷贝组
#define CP_ASYNC_COMMIT_GROUP() \\
    asm volatile("cp.async.commit_group;\\n" ::)

// 等待指定的组完成
#define CP_ASYNC_WAIT_GROUP(N) \\
    asm volatile("cp.async.wait_group %0;\\n" ::"n"(N))

// 等待所有拷贝完成
#define CP_ASYNC_WAIT_ALL() \\
    asm volatile("cp.async.wait_all;\\n" ::)
\`\`\`

### 4.4 完整的异步拷贝流程

\`\`\`cpp
__global__ void async_gemm(half* A, half* B, float* C, int M, int N, int K) {
    // 共享内存双缓冲
    __shared__ half As[2][BM * BK];
    __shared__ half Bs[2][BK * BN];

    int load_phase = 0;

    // 预取第一阶段数据
    cp_async(As[load_phase], A, BM * BK * sizeof(half));
    cp_async(Bs[load_phase], B, BK * BN * sizeof(half));
    CP_ASYNC_COMMIT_GROUP();

    for (int k = 0; k < K; k += BK) {
        // 等待当前阶段加载完成
        CP_ASYNC_WAIT_GROUP(0);
        __syncthreads();

        // TensorCore 计算
        tensorCore_mma(As[load_phase], Bs[load_phase], accum);

        // 切换到下一缓冲
        load_phase = 1 - load_phase;

        // 预取下一阶段数据 (与计算重叠)
        if (k + BK < K) {
            cp_async(As[load_phase], A + (k + BK), BM * BK * sizeof(half));
            cp_async(Bs[load_phase], B + (k + BK), BK * BN * sizeof(half));
            CP_ASYNC_COMMIT_GROUP();
        }
    }

    CP_ASYNC_WAIT_ALL();

    // 存储结果
    store(C, accum);
}
\`\`\`

## 五、性能优化最佳实践

### 5.1 优化策略总结

| 优化技术 | 效果 | 复杂度 |
|---------|------|--------|
| 共享内存缓存 | 2-5x | 低 |
| 双缓冲 | 1.5-2x | 中 |
| 指令级流水线 | 1.2-1.5x | 高 |
| TMA 异步拷贝 | 1.5-2x | 中 |

### 5.2 Bank 冲突避免

共享内存访问需要避免 bank 冲突：

\`\`\`cpp
// 坏的布局：会有 bank 冲突
__shared__ float shared[32][32];

// 好的布局：添加 padding
__shared__ float shared[32][33];  // padding 避免冲突
\`\`\`

### 5.3 Register 使用优化

\`\`\`cpp
// 合理使用 register，避免 spill
// 每个 SM 的 register 数量有限 (A100: 65536 个)

// 优化前：使用过多 register
float accum[16];  // 可能 spill 到本地内存

// 优化后：减少 register 使用
float accum[4];   // 适合 m16n8k16
\`\`\`

## 六、Hopper 架构新特性

### 6.1 WGMMA 指令

Hopper 引入了 Warp-Group MMA 指令，支持更大的矩阵：

\`\`\`
wgmma.mma_async.sync.aligned.m64n128k128.f32.f16.f16
\`\`\`

### 6.2 分布式共享内存 (DSMEM)

Hopper 的 DSMEM 允许跨 SM 访问共享内存：

\`\`\`cpp
// 从远程 SM 加载数据
uint64_t remote_addr = cluster::get_remote_shared_mem_addr(sm_id, offset);
float data = ldmatrix(remote_addr);
\`\`\`

## 七、总结

TensorCore 编程是 GPU 高性能计算的核心技能。

**核心要点：**
1. mma 指令以 warp 为执行单位，需要特定的数据布局
2. 使用 LDMATRIX 和异步拷贝优化访存
3. 双缓冲和流水线隐藏内存延迟
4. Hopper 架构引入 TMA 和 DSMEM 新特性

---

**参考资料:**
- [NVIDIA PTX 文档](https://docs.nvidia.com/cuda/parallel-thread-execution/)
- [CUDA Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)
`,R0=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),H0=`---
title: "技术博客演示"
date: 2026-03-05
category: tech
tags: ["demo", "test"]
description: "这是一篇测试图片显示的演示文章"
draft: false
---

# 技术博客演示

这是一篇测试图片显示功能的文章。

![技术博客封面](/images/tech-blog.jpg)

## 什么是终端风格博客？

终端风格博客是一种创意的网站设计，模仿命令行界面的外观和交互方式。

### 特点

- 黑色背景，绿色文字
- 等宽字体
- 命令行式的导航
- 独特的极客风格

## 另一张配图

![随机风景图](https://picsum.photos/seed/nature/800/400)

这张图片来自网络随机图片服务。

## 总结

终端风格的博客既实用又有个性，非常适合技术类内容的展示。

---
*发布于 2026-03-05 | 分类：tech | 标签：demo, test*
`,Q0=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),L0=`---
title: 大模型推理优化详解 - KV Cache 技术原理
date: 2026-03-14
category: tech
tags: ["LLM", "Inference", "KV Cache", "GPU 优化"]
description: 深入解析大语言模型推理中的 KV Cache 技术，包括其原理、显存开销计算和代码实现
---

# 大模型推理优化详解 - KV Cache 技术原理

在大规模语言模型的推理过程中，**KV Cache** 是最核心的优化技术之一。它通过缓存已经计算过的 Key 和 Value 状态，显著减少了重复计算，将推理的計算复杂度从 O(n²) 降低到 O(n)。

## 一、为什么需要 KV Cache？

### 1.1 自回归生成的特性

大模型的推理采用**自回归（Autoregressive）**方式，即根据已生成的 token 序列预测下一个 token。考虑一个简单的生成过程：

\`\`\`
输入："今天天气" → 输出："很好"
输入："今天天气很好" → 输出："，"
输入："今天天气很好，" → 输出："适合"
\`\`\`

在没有 KV Cache 的情况下，每次生成新 token 时，模型都需要**重新计算整个序列**的注意力。这意味着：
- 第 1 步：计算长度为 3 的序列注意力，计算量 = 3² × head_dim
- 第 2 步：计算长度为 4 的序列注意力，计算量 = 4² × head_dim
- 第 3 步：计算长度为 5 的序列注意力，计算量 = 5² × head_dim

**计算量随序列长度呈平方级增长！**

### 1.2 KV Cache 的核心思想

KV Cache 的关键洞察是：**Attention 计算中，历史 token 的 K 和 V 是可以复用的**。

对于第 t 步的生成：
- Query 必须是**当前时刻**的（无法复用）
- Key 和 Value 的历史部分**可以缓存**

这样，每步只需要计算**当前 token 的 K 和 V**，然后与缓存的历史 KV 拼接即可。

## 二、KV Cache 原理详解

### 2.1 Attention 计算回顾

标准的 Scaled Dot-Product Attention 公式：

$$Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V$$

在自回归推理中，对于第 t 个位置：
- $Q_t$ 只依赖于当前位置
- $K_t, V_t$ 可以复用历史计算结果

### 2.2 KV Cache 工作流程

\`\`\`
Step 1: Prefill 阶段（处理 prompt）
输入：[token1, token2, token3]
→ 计算完整的 K, V 并缓存
→ Cache: K=[k1,k2,k3], V=[v1,v2,v3]

Step 2: Decoding 阶段（生成新 token）
输入：[token4]
→ 只计算 k4, v4
→ 拼接：K=[k1,k2,k3,k4], V=[v1,v2,v3,v4]
→ 计算 Attention
→ 更新 Cache
\`\`\`

### 2.3 代码实现对比

#### 无 KV Cache 的实现

\`\`\`python
def demo_no_kv_cache():
    # 初始输入：[10, 20, 30]
    input_tokens = torch.tensor([[10, 20, 30]], device=device)
    generated = []
    current_input = input_tokens

    for step in range(3):
        seq_len = current_input.size(1)
        embedded = embedding(current_input)  # [1, seq_len, 32]

        # 每次都需要创建完整的 Causal Mask
        causal_mask = create_causal_mask(seq_len, seq_len, device)

        # 前向传播：use_cache=False
        output = layer(embedded, causal_mask=causal_mask, use_cache=False)

        # 预测下一个 token
        logits = lm_head(output)  # [1, seq_len, 100]
        next_token_logits = logits[:, -1, :]
        next_token = next_token_logits.argmax(dim=-1, keepdim=True)

        generated.append(next_token.item())
        current_input = torch.cat([current_input, next_token], dim=1)

        print(f"Step {step+1}: Input Len={seq_len} -> Generated token={next_token.item()}")
\`\`\`

#### 有 KV Cache 的实现

\`\`\`python
def demo_kv_cache():
    input_tokens = torch.tensor([[10, 20, 30]], device=device)
    past_kv = None
    current_input = input_tokens

    # Prefill 阶段：处理完整的 prompt
    embedded_prompt = embedding(current_input)
    _, past_kv = layer(embedded_prompt, use_cache=True)
    print(f"Cache length: {past_kv[0].shape[2]}")  # 3

    # Decoding 阶段：逐个生成 token
    for step in range(3):
        last_token_id = current_input[:, -1:]
        last_embed = embedding(last_token_id)  # [1, 1, 32]

        # 创建 mask：只需要考虑当前 1 个 token
        total_len = past_kv[0].shape[2] + 1
        causal_mask = create_causal_mask(1, total_len, device)

        # 前向传播：传入 past_key_value
        output_step, past_kv = layer(
            last_embed,
            causal_mask=causal_mask,
            past_key_value=past_kv,
            use_cache=True
        )

        next_token = lm_head(output_step).argmax(dim=-1)
        current_input = torch.cat([current_input, next_token], dim=1)

        print(f"Step {step+1}: generated token={next_token.item()}, cache length={past_kv[0].shape[2]}")
\`\`\`

## 三、KV Cache 显存开销分析

### 3.1 显存计算公式

KV Cache 的显存开销为：

$$Memory_{KV} = 2 \\times sizeof(type) \\times n_{layer} \\times d_{model} \\times seq_{len} \\times batch_{size}$$

以 LLaMA-7B 为例：
- 参数量：7B
- 层数 $n_{layer}$：32
- 隐藏层维度 $d_{model}$：4096
- 数据类型：FP16 (2 bytes)
- 序列长度：4096
- Batch size：1

$$Memory_{KV} = 2 \\times 2 \\times 32 \\times 4096 \\times 4096 \\times 1 \\approx 2GB$$

### 3.2 不同模型/序列长度的 KV Cache 大小

| 模型 | 序列长度 | Batch Size | KV Cache 大小 |
|------|---------|-----------|--------------|
| LLaMA-7B | 4096 | 1 | ~2 GB |
| LLaMA-7B | 4096 | 32 | ~64 GB |
| LLaMA-70B | 4096 | 1 | ~20 GB |
| LLaMA-70B | 32768 | 8 | ~640 GB |

可以看出，**长序列 + 大批量**场景下，KV Cache 可能成为显存瓶颈。

### 3.3 优化策略

1. **量化 KV Cache**: 使用 INT8/FP8 存储，减少 50-75% 显存
2. **PageAttention**: 类似操作系统虚拟内存，按需分配
3. **KV Cache Eviction**: 驱逐不重要的 KV 对
4. **Multi-Query Attention (MQA)**: 共享 K/V 头
5. **Grouped-Query Attention (GQA)**: 折中方案

## 四、为什么不需要 Q Cache？

一个常见的问题是：**为什么只缓存 K 和 V，不缓存 Q？**

答案在于自回归生成的本质：
- **Q（Query）**代表"当前要预测什么"
- 每一步的 Q 都是**全新的**，对应新生成的 token
- 历史的 Q 在推理中**永远不会被再次使用**

而 K 和 V 代表"历史信息"，每一步都需要与新的 Q 做 Attention，所以必须缓存。

## 五、总结

KV Cache 是大模型推理优化的**基石技术**，理解它对于深入掌握推理系统至关重要。

**核心要点：**
1. KV Cache 通过复用历史 K、V 状态，避免重复计算
2. 计算复杂度从 O(n²) 降至 O(n)
3. 显存开销与序列长度、batch size 成正比
4. 长序列场景需要考虑 KV Cache 优化策略

在后续文章中，我们会继续探讨 **PagedAttention**、**Continuous Batching** 等更先进的推理优化技术。

---

**参考资料：**
- [FlashAttention Paper](https://arxiv.org/abs/2205.14135)
- [vLLM: Easy, Fast, and Cheap LLM Serving](https://arxiv.org/abs/2309.06180)
`,G0=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),Y0=`---
title: 大模型量化技术详解 - 从基础量化到 AWQ
date: 2026-03-14
category: tech
tags: ["Quantization", "LLM", "Model Compression", "INT8"]
description: 深入解析大模型量化技术，包括对称/非对称量化、PTQ/QAT、AWQ、SmoothQuant 等主流方法
---

# 大模型量化技术详解 - 从基础量化到 AWQ

随着大模型规模的不断增长，量化技术成为降低部署成本的关键手段。本文将深入讲解大模型量化的核心原理和主流方法。

## 一、量化基础

### 1.1 为什么要量化？

| 好处 | 说明 |
|------|------|
| 显存减少 | FP16→INT8 减少 50% 显存 |
| 带宽降低 | 更少的数据传输量 |
| 速度提升 | INT8 TensorCore 吞吐量更高 |
| 能耗降低 | 低精度计算更高效 |

### 1.2 线性量化公式

**对称量化 (Symmetric Quantization):**

\`\`\`
scale = |x_max| / (2^(bits-1) - 1)
x_int = round(x_fp32 / scale)
x_fp32 = x_int * scale
\`\`\`

**非对称量化 (Asymmetric Quantization):**

\`\`\`
scale = (x_max - x_min) / (q_max - q_min)
zero_point = q_min - round(x_min / scale)
x_int = round(x_fp32 / scale + zero_point)
x_fp32 = (x_int - zero_point) * scale
\`\`\`

## 二、对称量化实现

### 2.1 Python 实现

\`\`\`python
import torch

def quantize_symmetric(x_fp32, bits=8):
    """
    对称量化 FP32 -> INT8
    """
    qmin = -(2 ** (bits - 1))      # -128
    qmax = 2 ** (bits - 1) - 1     # 127

    # 计算缩放系数 (使用绝对值最大值)
    scale = torch.max(torch.abs(x_fp32)) / qmax
    scale += 1e-7  # 数值稳定性

    # 量化
    x_int = x_fp32 / scale
    # 四舍五入
    x_int += 0.5 * torch.where(x_int >= 0, 1, -1)
    x_int = x_int.to(torch.int8).clamp(qmin, qmax)

    return x_int, scale

def dequantize_symmetric(x_int, scale):
    """
    反量化 INT8 -> FP32
    """
    return x_int.to(torch.float32) * scale

# 测试
input_data = torch.tensor([[1.2, 2.3, 3.4],
                           [4.5, 5.6, 6.7]])

x_int8, scale = quantize_symmetric(input_data)
x_fp32 = dequantize_symmetric(x_int8, scale)

print(f"原始数据：{input_data}")
print(f"量化后：{x_int8}")
print(f"反量化后：{x_fp32}")
print(f"量化误差：{torch.abs(input_data - x_fp32).max()}")
\`\`\`

**输出:**
\`\`\`
原始数据：tensor([[1.2000, 2.3000, 3.4000],
        [4.5000, 5.6000, 6.7000]])
量化后：tensor([[ 23,  44,  64],
        [ 85, 106, 127]], dtype=torch.int8)
反量化后：tensor([[1.2134, 2.3213, 3.3764],
        [4.4843, 5.5921, 6.7000]])
量化误差：0.0236
\`\`\`

## 三、非对称量化实现

### 3.1 Python 实现

\`\`\`python
def quantize_asymmetric(x_fp32, bits=8):
    """
    非对称量化 FP32 -> INT8
    """
    qmin = -(2 ** (bits - 1))      # -128
    qmax = 2 ** (bits - 1) - 1     # 127

    # 计算最小值和最大值
    min_val = torch.min(x_fp32).item()
    max_val = torch.max(x_fp32).item()

    # 计算缩放因子和零点
    scale = (max_val - min_val) / (qmax - qmin)
    zero_point = qmin - round(min_val / scale)

    # 量化
    x_int = torch.round(x_fp32 / scale + zero_point)
    x_int = x_int.clamp(qmin, qmax).to(torch.int8)

    return x_int, scale, zero_point

def dequantize_asymmetric(x_int, scale, zero_point):
    """
    反量化 INT8 -> FP32
    """
    return (x_int.to(torch.float32) - zero_point) * scale
\`\`\`

### 3.2 对称 vs 非对称对比

| 特性 | 对称量化 | 非对称量化 |
|------|---------|-----------|
| 零点 | 0 | 需要计算 |
| 适用场景 | 权重 (分布对称) | 激活值 (ReLU 后非对称) |
| 计算开销 | 低 | 稍高 |
| 精度损失 | 对称分布时低 | 非对称分布时低 |

## 四、量化方法分类

### 4.1 训练后量化 (PTQ)

无需重新训练，直接使用校准数据集确定量化参数：

\`\`\`python
def ptq_quantize_model(model, calib_loader, bits=8):
    """
    PTQ: 使用校准数据集确定 scale 和 zero_point
    """
    # 1. 收集激活值的统计信息
    activations = []
    model.eval()

    with torch.no_grad():
        for batch in calib_loader:
            output = model(batch)
            # 收集每个 Linear 层的激活值
            for name, module in model.named_modules():
                if isinstance(module, nn.Linear):
                    activations.append(module.output.abs().max())

    # 2. 计算每层的 quantization 参数
    scales = []
    for act in activations:
        scale = act.max() / (2**bits - 1)
        scales.append(scale)

    # 3. 应用量化参数
    apply_quantization_params(model, scales)

    return model
\`\`\`

### 4.2 量化感知训练 (QAT)

在训练中模拟量化效应：

\`\`\`python
class FakeQuantize(torch.autograd.Function):
    @staticmethod
    def forward(ctx, x, scale, zero_point, qmin, qmax):
        # 前向传播：模拟量化
        x_int = torch.round(x / scale + zero_point)
        x_int = x_int.clamp(qmin, qmax)
        return x_int * scale - zero_point * scale

    @staticmethod
    def backward(ctx, grad_output):
        # 反向传播：直通估计器 (STE)
        return grad_output, None, None, None, None

class QATLinear(nn.Module):
    def __init__(self, in_features, out_features, bits=8):
        super().__init__()
        self.linear = nn.Linear(in_features, out_features)
        self.bits = bits
        self.qmin = -(2 ** (bits - 1))
        self.qmax = 2 ** (bits - 1) - 1
        self.scale = nn.Parameter(torch.ones(1))
        self.zero_point = nn.Parameter(torch.zeros(1))

    def forward(self, x):
        weight_q = FakeQuantize.apply(
            self.linear.weight,
            self.scale,
            self.zero_point,
            self.qmin,
            self.qmax
        )
        return nn.functional.linear(x, weight_q, self.linear.bias)
\`\`\`

## 五、AWQ 量化

### 5.1 AWQ 的核心洞察

AWQ (Activation-aware Weight Quantization) 发现：
- **并非所有权重都同等重要**
- 激活值幅度大的权重对输出影响更大
- 保护 1% 的重要权重可以显著降低量化损失

### 5.2 AWQ 算法流程

\`\`\`python
def awq_quantize(W, X, bits=4):
    """
    AWQ 量化
    W: 权重矩阵 [out_features, in_features]
    X: 激活值 [batch, in_features]
    """
    # 1. 计算每个输出通道的重要性
    importance = (W.abs() * X.abs().mean(dim=0)).sum(dim=1)

    # 2. 选择最重要的 1% 通道
    k = int(0.01 * W.shape[0])
    top_indices = importance.topk(k).indices

    # 3. 对重要通道使用更高的精度
    scales = compute_scales(W, bits)
    zero_points = compute_zero_points(W, scales, bits)

    # 4. 量化权重
    W_q = quantize_weights(W, scales, zero_points, bits)

    return W_q, scales, zero_points, top_indices
\`\`\`

### 5.3 AWQ 的优势

| 模型 | 精度 | W4A16 | W4A4 |
|------|------|-------|------|
| LLaMA-7B | FP16 | 基准 | 基准 |
| LLaMA-7B | AWQ | -0.5% | -2.1% |
| LLaMA-7B | 标准 PTQ | -3.2% | -15.4% |

## 六、SmoothQuant

### 6.1 SmoothQuant 的动机

问题：激活值中存在**异常值 (outliers)**，导致量化困难

解决：将量化难度从激活值迁移到权重

### 6.2 SmoothQuant 变换

\`\`\`python
def smoothquant_transform(W, X, alpha=0.5):
    """
    SmoothQuant 变换
    alpha: 迁移因子 (0-1)

    核心思想:
    X' = X / s
    W' = W * diag(s)

    其中 s 是每个通道的迁移因子
    """
    # 计算每个通道的激活最大值
    x_max = X.abs().amax(dim=0)

    # 计算每个通道的权重最大值
    w_max = W.abs().amax(dim=1)

    # 计算迁移因子
    s = (x_max ** alpha) / (w_max ** (1 - alpha))

    # 变换激活值和权重
    X_smooth = X / s
    W_smooth = W * s.unsqueeze(0)

    return X_smooth, W_smooth, s
\`\`\`

### 6.3 SmoothQuant 的优势

- **激活值更平滑**: 异常值被抑制
- **权重吸收难度**: 权重可以逐通道量化
- **INT8 推理**: 激活值和权重都可以用 INT8

## 七、量化策略最佳实践

### 7.1 精度选择建议

| 场景 | 推荐精度 | 说明 |
|------|---------|------|
| 云端推理 | W8A8 | 精度高，速度提升明显 |
| 边缘设备 | W4A8 | 显存受限 |
| 极致压缩 | W4A4 + AWQ | 需要校准 |

### 7.2 逐层 vs 逐组量化

\`\`\`python
# 逐层量化 (per-layer)
scale = W.abs().max() / qmax  # 整个层一个 scale

# 逐通道量化 (per-channel)
scale = W.abs().max(dim=1).values / qmax  # 每个输出通道一个 scale

# 逐组量化 (per-group, AWQ 风格)
group_size = 128
W_groups = W.view(-1, group_size)
scale = W_groups.abs().max(dim=1).values / qmax
\`\`\`

### 7.3 量化配置示例

\`\`\`python
quant_config = {
    "bits": 4,
    "group_size": 128,
    "zero_point": True,
    "q Scheme": "symmetric",
    "activation_bits": 8,
    "llm_int8_skip_modules": ["lm_head"],  # 跳过输出层
}
\`\`\`

## 八、总结

**量化技术要点：**
1. 对称量化适合权重，非对称量化适合激活值
2. PTQ 无需训练，QAT 精度更高
3. AWQ 通过保护重要权重提升精度
4. SmoothQuant 迁移量化难度，实现 INT8 推理

**未来趋势：**
- FP8 量化 (NVIDIA H100 支持)
- 混合精度量化
- 动态量化

---

**参考资料:**
- [AWQ Paper](https://arxiv.org/abs/2306.00978)
- [SmoothQuant Paper](https://arxiv.org/abs/2211.10438)
`,V0=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),X0=`---
title: "Rust 入门指南"
date: 2026-03-01
category: tech
tags: ["rust", "programming", "tutorial"]
description: "一篇介绍 Rust 编程语言基础的入门文章"
draft: false
---

# Rust 入门指南

## 什么是 Rust？

Rust 是一门系统级编程语言，专注于安全、并发和性能。它由 Mozilla 开发，自 2010 年首次发布以来，已成为最受开发者喜爱的语言之一。

## 为什么选择 Rust？

### 内存安全
Rust 的所有权系统（Ownership System）在编译时保证内存安全，无需垃圾回收机制。

\`\`\`rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // 所有权转移
    // println!("{}", s1); // 编译错误：s1 已无效
    println!("{}", s2); // 正常输出
}
\`\`\`

### 零成本抽象
Rust 的高级特性不会带来运行时开销，性能与 C/C++ 相当。

### 并发安全
Rust 的类型系统确保数据竞争在编译时就被捕获。

## 安装 Rust

使用 rustup 安装：

\`\`\`bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
\`\`\`

## Hello World

\`\`\`rust
fn main() {
    println!("Hello, World!");
}
\`\`\`

保存为 \`main.rs\`，然后运行：

\`\`\`bash
rustc main.rs
./main
\`\`\`

## 核心概念

### 变量与可变性
\`\`\`rust
let x = 5;      // 不可变
let mut y = 10; // 可变
y = 15;         // OK
\`\`\`

### 函数
\`\`\`rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
\`\`\`

### 结构体
\`\`\`rust
struct User {
    username: String,
    email: String,
    active: bool,
}
\`\`\`

## 学习资源

- [Rust Book](https://doc.rust-lang.org/book/)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
- [Rustlings](https://github.com/rust-lang/rustlings)

---
*发布于 2026-03-01 | 分类：tech | 标签：rust, programming, tutorial*
`,K0=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),Z0=`---
title: 大模型并行训练技术详解 - 张量并行原理
date: 2026-03-14
category: tech
tags: ["LLM", "Distributed Training", "Tensor Parallelism", "Deep Learning"]
description: 深入解析大模型分布式训练中的张量并行技术，包括行并行、列并行、序列并行和 3D 并行策略
---

# 大模型并行训练技术详解 - 张量并行原理

随着大语言模型规模的不断增长，单卡训练已经变得不再可行。本文将深入讲解**张量并行 (Tensor Parallelism, TP)** 的原理和实现细节。

## 一、为什么需要张量并行？

### 1.1 模型规模的爆炸式增长

| 模型 | 参数量 | 训练所需显存 (FP16) |
|------|--------|-------------------|
| BERT | 340M | ~1.4 GB |
| GPT-3 | 175B | ~700 GB |
| LLaMA-2 70B | 70B | ~280 GB |
| LLaMA-3 405B | 405B | ~1.6 TB |

对于 70B 参数的模型，即使使用 FP16 精度，也需要约 280GB 显存来存储参数，这远超单张 GPU 的容量。

### 1.2 并行策略分类

大模型训练主要有三种并行策略：

1. **数据并行 (Data Parallelism, DP)**: 复制模型，分发数据
2. **张量并行 (Tensor Parallelism, TP)**: 切分单层参数
3. **流水线并行 (Pipeline Parallelism, PP)**: 切分网络层

## 二、张量并行基础

### 2.1 行并行与列并行

张量并行的核心思想是**在矩阵层面进行切分**，将单个大的矩阵运算分散到多个设备上。

#### 列并行 (Column-wise Parallelism)

列并行将权重矩阵按**列**切分：

\`\`\`
原始矩阵 W: [hidden_dim, hidden_dim]

在 2 个 GPU 上切分:
GPU0: W0 = [hidden_dim, hidden_dim/2]
GPU1: W1 = [hidden_dim, hidden_dim/2]

前向传播:
Y0 = X @ W0  -> shape: [batch, hidden_dim/2]
Y1 = X @ W1  -> shape: [batch, hidden_dim/2]

结果拼接：Y = concat(Y0, Y1)
\`\`\`

#### 行并行 (Row-wise Parallelism)

行并行将权重矩阵按**行**切分：

\`\`\`
原始矩阵 W: [hidden_dim, hidden_dim]

在 2 个 GPU 上切分:
GPU0: W0 = [hidden_dim/2, hidden_dim]
GPU1: W1 = [hidden_dim/2, hidden_dim]

前向传播需要先切分输入:
X0 = X[:, :hidden_dim/2]
X1 = X[:, hidden_dim/2:]

Y0 = X0 @ W0  -> shape: [batch, hidden_dim]
Y1 = X1 @ W1  -> shape: [batch, hidden_dim]

结果求和：Y = Y0 + Y1 (需要 AllReduce)
\`\`\`

### 2.2 PyTorch 实现示例

使用 PyTorch 的 \`torch.distributed.tensor.parallel\` API：

\`\`\`python
from torch.distributed.tensor.parallel import parallelize_module, ColwiseParallel, RowwiseParallel
from torch.distributed.device_mesh import init_device_mesh

# 创建 8 卡张量并行 mesh
tp_mesh = init_device_mesh("cuda", (8,))

# 对模型进行并行化
# w1 层使用列并行，w2 层使用行并行
model = parallelize_module(
    model,
    tp_mesh,
    {
        "w1": ColwiseParallel(),
        "w2": RowwiseParallel()
    }
)
\`\`\`

## 三、Transformer 中的张量并行

### 3.1 Attention 层的并行策略

对于标准的 Attention 层：

\`\`\`python
class Attention(nn.Module):
    def __init__(self, hidden_dim, num_heads):
        super().__init__()
        self.q_proj = nn.Linear(hidden_dim, hidden_dim)  # 列并行
        self.k_proj = nn.Linear(hidden_dim, hidden_dim)  # 列并行
        self.v_proj = nn.Linear(hidden_dim, hidden_dim)  # 列并行
        self.o_proj = nn.Linear(hidden_dim, hidden_dim)  # 行并行
\`\`\`

**并行策略：**
- \`q_proj\`, \`k_proj\`, \`v_proj\`: **列并行** (输出需要拼接)
- \`o_proj\`: **行并行** (输出需要 AllReduce 求和)

### 3.2 MLP 层的并行策略

对于 MLP 层：

\`\`\`python
class MLP(nn.Module):
    def __init__(self, hidden_dim, intermediate_dim):
        super().__init__()
        self.gate_proj = nn.Linear(hidden_dim, intermediate_dim)  # 列并行
        self.up_proj = nn.Linear(hidden_dim, intermediate_dim)    # 列并行
        self.down_proj = nn.Linear(intermediate_dim, hidden_dim)  # 行并行
\`\`\`

### 3.3 完整的前向传播

\`\`\`python
def forward_parallel(x):
    # ========== Attention 层 ==========
    # Q, K, V 投影 (列并行)
    q_local = q_proj(x)  # 每个 GPU 计算一部分
    k_local = k_proj(x)
    v_local = v_proj(x)

    # AllGather 收集完整的 Q, K, V
    q = all_gather(q_local, dim=-1)
    k = all_gather(k_local, dim=-1)
    v = all_gather(v_local, dim=-1)

    # 每个 GPU 都有完整的 Q, K, V，独立计算 Attention
    attn_out = scaled_dot_product_attention(q, k, v)

    # 切分 Attention 输出
    attn_out_local = split_tensor(attn_out, dim=-1, rank=rank)

    # O 投影 (行并行)
    o_local = o_proj(attn_out_local)

    # AllReduce 求和得到最终输出
    o = all_reduce(o_local, op='sum')

    # ========== MLP 层 ==========
    # 类似的列并行 -> 行并行模式
    gate_local = gate_proj(x)
    up_local = up_proj(x)

    gate = all_gather(gate_local, dim=-1)
    up = all_gather(up_local, dim=-1)

    intermediate = gate * up  # SiLU 激活
    intermediate_local = split_tensor(intermediate, dim=-1, rank=rank)

    mlp_out = down_proj(intermediate_local)
    mlp = all_reduce(mlp_out, op='sum')

    return o + mlp
\`\`\`

## 四、序列并行

### 4.1 序列并行的动机

标准的张量并行在每个设备上都需要**完整的序列**，这在长序列场景下会导致显存浪费。

**序列并行 (Sequence Parallelism)** 在序列维度上进行切分：

\`\`\`
原始序列：[batch, seq_len, hidden_dim]

在 4 个 GPU 上切分:
GPU0: [batch, seq_len/4, hidden_dim]
GPU1: [batch, seq_len/4, hidden_dim]
GPU2: [batch, seq_len/4, hidden_dim]
GPU3: [batch, seq_len/4, hidden_dim]
\`\`\`

### 4.2 LayerNorm 的序列并行

对于 \`nn.LayerNorm\` 和 \`nn.RMSNorm\`，序列维度的切分不影响计算结果：

\`\`\`python
class SequenceParallelRMSNorm(nn.Module):
    def __init__(self, hidden_dim, eps=1e-6):
        super().__init__()
        self.weight = nn.Parameter(torch.ones(hidden_dim))
        self.eps = eps

    def forward(self, x):
        # x shape: [batch, local_seq, hidden_dim]
        variance = x.pow(2).mean(dim=-1, keepdim=True)  # 本地计算
        # AllReduce 聚合全局方差
        variance = all_reduce(variance, op='sum') / get_tp_world_size()
        x = x * torch.rsqrt(variance + self.eps)
        return x * self.weight
\`\`\`

## 五、并行损失函数计算

### 5.1 Cross Entropy Loss 并行化

当词汇表被切分到不同的 GPU 上时，需要收集所有 GPU 上的 logits 来计算全局的 softmax 和 loss。

\`\`\`python
# Megatron-LM 风格的实现
vocab_start_index = rank * vocab_chunk_size
vocab_end_index = vocab_start_index + vocab_chunk_size

# 获取当前 GPU 的 vocab 范围
target_mask = (target >= vocab_start_index) & (target < vocab_end_index)
local_target = target - vocab_start_index

# 计算本地 loss，然后通过 all-reduce 聚合
local_loss = cross_entropy(local_logits, local_target)
global_loss = all_reduce(local_loss, op='sum')
\`\`\`

### 5.2 梯度聚合

在反向传播时，来自不同设备的梯度需要进行聚合：

\`\`\`python
for param in model.parameters():
    if param.is_tensor_parallel:
        all_reduce(param.grad, op='sum')
\`\`\`

## 六、3D 并行策略

### 6.1 3D 并行概述

将数据并行、张量并行和流水线并行结合起来：

\`\`\`
总 GPU 数 = DP × TP × PP
\`\`\`

以 64 卡集群训练 LLaMA-70B 为例：

\`\`\`
配置：DP=4, TP=4, PP=4

GPU 组织:
DP0: [TP0-TP3] -> PP0-PP3
DP1: [TP0-TP3] -> PP0-PP3
DP2: [TP0-TP3] -> PP0-PP3
DP3: [TP0-TP3] -> PP0-PP3
\`\`\`

### 6.2 通信模式对比

| 并行类型 | 通信频率 | 通信量 | 典型场景 |
|---------|---------|--------|---------|
| 数据并行 | 每步 1 次 | 全部梯度 | 小模型 |
| 张量并行 | 每层多次 | 隐藏层维度 | 中等模型 |
| 流水线并行 | 每 micro-batch 1 次 | 激活/梯度 | 超大模型 |
| 3D 并行 | 组合 | 按配置变化 | 工业级训练 |

## 七、实际部署建议

### 7.1 并行策略选择

| 模型规模 | 推荐配置 | 说明 |
|---------|---------|------|
| <7B | DP only | 单卡可放下 |
| 7B-13B | DP + TP=2 | 轻度张量并行 |
| 13B-70B | DP + TP=4/8 | 中度张量并行 |
| >70B | 3D 并行 | 需要流水线并行 |

### 7.2 性能优化技巧

1. **选择合适的 TP 大小**: TP 过大会增加通信开销
2. **使用 NCCL 优化通信**: 配置 \`NCCL_IB_DISABLE=0\` 启用 InfiniBand
3. **梯度累积**: 减少通信频率
4. **激活检查点**: 降低显存占用

## 八、总结

张量并行是大模型训练的核心技术，理解其原理对于设计和优化分布式训练系统至关重要。

**核心要点：**
1. 列并行输出需要拼接，行并行输出需要 AllReduce
2. Transformer 中 Q/K/V 投影用列并行，O 投影用行并行
3. 序列并行是张量并行的有效补充
4. 3D 并行结合三种策略，适合超大规模训练

---

**参考资料:**
- [Megatron-LM Paper](https://arxiv.org/abs/1909.08053)
- [PyTorch Distributed Documentation](https://pytorch.org/docs/stable/distributed.html)
`,w0=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),J0=`---
title: "TypeScript 高级技巧"
date: 2026-02-28
category: tech
tags: ["typescript", "javascript", "web"]
description: "探索 TypeScript 的高级类型特性和最佳实践"
draft: false
---

# TypeScript 高级技巧

## 泛型约束

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity("hello"); // ✅
loggingIdentity(3);       // ❌ number 没有 length 属性
\`\`\`

## 条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
\`\`\`

## 映射类型

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string; }
\`\`\`

## 工具类型

### Partial
\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

### Pick
\`\`\`typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
\`\`\`

### Omit
\`\`\`typescript
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
\`\`\`

## 类型守卫

\`\`\`typescript
function isString(x: unknown): x is string {
  return typeof x === "string";
}

function example(x: unknown) {
  if (isString(x)) {
    // x 被推断为 string
    return x.toUpperCase();
  }
}
\`\`\`

## 最佳实践

1. **使用严格模式**：在 tsconfig.json 中启用 \`strict: true\`
2. **避免 \`any\`**：使用 \`unknown\` 替代
3. **善用类型推断**：不必处处显式标注类型
4. **接口优先**：优先使用 \`interface\` 而非 \`type\`

---
*发布于 2026-02-28 | 分类：tech | 标签：typescript, javascript, web*
`,k0=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"}));let wu=null;function $0(b,O){const g=b.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!g)return null;const[,s,T]=g,D={};for(const Z of s.split(`
`)){const R=Z.match(/^(\w+):\s*(.+)$/);if(R){const[,k,Y]=R;Y.startsWith("[")?D[k]=Y.replace(/[["\]]/g,""):D[k]=Y.replace(/"/g,"")}}const j=O.split("/"),L=j[j.length-2]||"unknown";return{slug:j[j.length-1].replace(".md",""),title:D.title||"Untitled",date:D.date||"",category:D.category||L,tags:D.tags?.split(",").map(Z=>Z.trim())||[],description:D.description||"",content:T.trim(),draft:D.draft==="true"}}function ku(){return wu||(wu=Object.entries(Object.assign({"../content/life/2025.md":z0,"../content/life/2026-review.md":M0,"../content/life/aboutme.md":O0,"../content/projects/portfolio.md":D0,"../content/projects/terminal-blog.md":B0,"../content/tech/attention-mechanism-evolution.md":j0,"../content/tech/cuda-tensorcore-programming.md":R0,"../content/tech/demo-post.md":Q0,"../content/tech/llm-inference-kv-cache.md":G0,"../content/tech/llm-quantization-techniques.md":V0,"../content/tech/rust-intro.md":K0,"../content/tech/tensor-parallelism-deep-dive.md":w0,"../content/tech/typescript-tips.md":k0})).map(([O,g])=>{const s=typeof g=="string"?g:g.default;return $0(s,O)}).filter(O=>O!==null&&!O.draft),wu)}function Ul(){const b=ku(),O=new Set(b.map(g=>g.category));return Array.from(O)}function ke(b){return ku().filter(g=>g.category===b)}function W0(b){const O=ku(),g=b.toLowerCase();return O.filter(s=>s.title.toLowerCase().includes(g)||s.content.toLowerCase().includes(g)||s.tags.some(T=>T.toLowerCase().includes(g)))}function F0(b){const O=ku();if(b.includes("/")){const[g,s]=b.split("/");return O.find(T=>T.category===g&&T.slug===s)||null}return O.find(g=>g.slug===b)||null}const I0=b=>{const O=Af(),g=O.length>0?O[0]:null;if(b.length===0)if(g){const D=ke(g),j=D.map(L=>({value:L.slug,label:`${L.slug}.md`,type:"article"}));return{type:"success",output:["",...D.map(L=>`  ${L.slug}.md`),"","  ↑↓ to select, Enter to open, Esc to cancel",""],selectableItems:j,hint:"article"}}else{const D=Ul(),j=D.map(L=>({value:L,label:`${L}/`,type:"category"}));return{type:"success",output:["",...D.map(L=>`  ${L}/`),"","  ↑↓ to select, Enter to open, Esc to cancel",""],selectableItems:j,hint:"category"}}const[s]=b;if(s==="-l")return{type:"success",output:["",...Ul().map(j=>{const L=ke(j).length;return`  ${j}/  (${L} posts)`}),""]};const T=ke(s);if(T.length>0){const D=T.map(j=>({value:j.slug,label:`${j.slug}.md`,type:"article"}));return{type:"success",output:["",...T.map(j=>`  ${j.slug}.md`),"","  ↑↓ to select, Enter to open, Esc to cancel",""],selectableItems:D,hint:"article"}}return{type:"error",output:[`ls: cannot access '${s}': No such file or directory`]}};yn("ls",I0);let Oe=[];function Af(){return[...Oe]}function Ju(){return Oe.length===0?"~":"~/"+Oe.join("/")}const P0=b=>{if(b.length===0)return Oe=[],{type:"success",output:[]};const[O]=b;if(O==="~"||O==="/")return Oe=[],{type:"success",output:[]};if(O==="..")return Oe.pop(),{type:"success",output:[]};if(O===".")return{type:"success",output:[]};if(Ul().includes(O))return Oe=[O],{type:"success",output:[]};if(O.includes("/")){const s=O.split("/");let T=!0;const D=[];for(const j of s)if(j==="..")D.pop();else{if(j==="."||j==="")continue;{const L=Ul();if(D.length===0&&L.includes(j))D.push(j);else if(D.length>0)if(ke(D[0]).some(A=>A.slug===j))D.push(j);else{T=!1;break}else{T=!1;break}}}if(T)return Oe=D,{type:"success",output:[]}}return{type:"error",output:[`cd: no such file or directory: ${O}`]}};yn("cd",P0);let Qd=[];function t_(b){Qd=b}function n_(b){return Qd[b]||null}const e_=b=>{if(b.length===0)return{type:"error",output:["imgview: missing image index. Usage: imgview <index> (e.g., imgview 0)"]};const[O]=b,g=parseInt(O,10);if(isNaN(g))return{type:"error",output:[`imgview: invalid index: ${O}`]};const s=n_(g);return s?{type:"success",output:["",`  Opening image: ${s.alt}`,`  Source: ${s.src}`,""]}:{type:"error",output:[`imgview: image ${g} not found`]}};yn("imgview",e_);function Ld(b,O){const g={js:/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|this|typeof|instanceof)\b/g,ts:/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|this|typeof|instanceof|interface|type|extends|implements|public|private|protected|readonly)\b/g,py:/\b(def|class|return|if|elif|else|for|while|import|from|as|with|try|except|finally|raise|lambda|yield|global|nonlocal|pass|break|continue|and|or|not|in|is|None|True|False)\b/g,bash:/\b(if|then|else|fi|for|do|done|while|case|esac|function|return|exit|export|source|cd|pwd|ls|echo|cat|grep|find|rm|mv|cp|mkdir|chmod)\b/g,json:/\b(true|false|null)\b/g};let s=b.replace(/</g,"&lt;").replace(/>/g,"&gt;");s=s.replace(/(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g,'<span class="code-string">$&</span>'),s=s.replace(/(\/\/.*$|#.*$)/gm,'<span class="code-comment">$&</span>');const T=O?.toLowerCase()||"js";return g[T]&&(s=s.replace(g[T],'<span class="code-keyword">$&</span>')),s=s.replace(/\b(\d+)\b/g,'<span class="code-number">$&</span>'),s=s.replace(/\b([a-zA-Z_]\w*)(?=\()/g,'<span class="code-fn">$&</span>'),s}function l_(b){const O=b.split(`
`),g=[],s=[];let T=0,D=!1,j=[],L="";const C=/!\[([^\]]*)\]\(([^)]+)\)/,A=/`([^`]+)`/g,Z=/\*\*([^*]+)\*\*/g,R=/\*([^*]+)\*/g;for(let k=0;k<O.length;k++){let Y=O[k];if(Y.startsWith("```")){D?(D=!1,g.push(`__CODEBLOCK_START:${L}__`),j.forEach(ft=>{g.push(ft)}),g.push("__CODEBLOCK_END__")):(D=!0,L=Y.slice(3).trim(),j=[]);continue}if(D){j.push(Y);continue}const At=Y.match(C);if(At){const ft=At[1]||"image",Lt=At[2];if(Y.trim()===`![${ft}](${Lt})`){s.push({index:T,alt:ft,src:Lt,lineIndex:g.length}),T++,g.push(`__IMG:${Lt}:${ft}__`);continue}}if(Y=Y.replace(C,"[🖼️ "+(At&&At[1]||"image")+"]"),Y=Y.replace(Z,"__BOLD__$1__BOLDEND__"),Y=Y.replace(R,"__ITALIC__$1__ITALICEND__"),Y=Y.replace(A,"__CODE__$1__CODEEND__"),Y.startsWith("### "))g.push(""),g.push(""),g.push(`__H3__${Y.slice(3)}__H3END__`),g.push("");else if(Y.startsWith("## "))g.push(""),g.push(""),g.push(`__H2__${Y.slice(2)}__H2END__`),g.push("");else if(Y.startsWith("# "))g.push(""),g.push(""),g.push(`__H1__${Y.slice(1).toUpperCase()}__H1END__`),g.push("");else if(Y.startsWith("> "))g.push(""),g.push(`  ▌ __ITALIC__${Y.slice(2)}__ITALICEND__`),g.push("");else if(Y.startsWith("- ")||Y.startsWith("* "))g.push(`  • ${Y.slice(2)}`);else if(/^\d+\. /.test(Y))g.push(`  ${Y.replace(/^\d+\. /,"→ ")}`);else if(Y.startsWith("- [ ] ")||Y.startsWith("- [x] ")){const ft=Y.startsWith("- [x] ");g.push(`  ${ft?"✓":"☐"} ${Y.slice(6)}`)}else Y.trim()&&g.push(`  ${Y}`),g.push("")}return{lines:g,images:s}}const a_=b=>{if(b.length===0)return{type:"error",output:["cat: missing file operand"]};let[O]=b;O.endsWith(".md")&&(O=O.slice(0,-3));const g=Af();let s=null;if(g.length>0){const Z=g[0];s=ke(Z).find(k=>k.slug===O)}if(s||(s=F0(O)),!s)return{type:"error",output:[`cat: ${O}: No such file or directory`]};const T=["",""];T.push(""),T.push(`  ${s.title}`),T.push(""),T.push("  "+"─".repeat(50)),T.push(""),T.push(`  📅 Date:      ${s.date}`),T.push(`  📁 Category:  ${s.category}`),T.push(`  🏷️  Tags:      ${s.tags.join(", ")}`),T.push(""),T.push("  "+"─".repeat(50)),T.push("");const{lines:D,images:j}=l_(s.content);let L=!1,C="",A=[];for(const Z of D)if(Z.startsWith("__CODEBLOCK_START:"))L=!0,C=Z.replace("__CODEBLOCK_START:","").replace("__",""),A=[];else if(Z==="__CODEBLOCK_END__")L=!1,T.push(""),T.push("```"+C),Ld(A.join(`
`),C).split(`
`).forEach(k=>{T.push(k)}),T.push("```"),T.push("");else if(L)A.push(Z);else if(Z.startsWith("__IMG:")){const R=Z.match(/^__IMG:([^:]+):(.+)__$/);if(R){const k=R[1],Y=R[2];T.push(""),T.push(`__IMG:${k}:${Y}__`),T.push("")}}else T.push(Z);return T.push(""),{type:"success",output:T,images:j}};yn("cat",a_);const u_={default:{name:"Default",bg:"from-gray-900 via-gray-950 to-gray-950",primary:"text-green-400",secondary:"text-cyan-400",accent:"text-purple-400",promptSymbol:"text-purple-400",path:"text-cyan-400",arrow:"text-green-400",cursor:"bg-emerald-400",selection:"bg-green-700"},matrix:{name:"Matrix",bg:"from-black via-gray-900 to-black",primary:"text-green-500",secondary:"text-green-300",accent:"text-green-400",promptSymbol:"text-green-400",path:"text-green-300",arrow:"text-green-500",cursor:"bg-green-400",selection:"bg-green-700"},sunset:{name:"Sunset",bg:"from-purple-900 via-pink-900 to-orange-900",primary:"text-orange-400",secondary:"text-pink-400",accent:"text-purple-400",promptSymbol:"text-pink-400",path:"text-orange-400",arrow:"text-purple-400",cursor:"bg-orange-400",selection:"bg-pink-700"},ocean:{name:"Ocean",bg:"from-blue-900 via-cyan-900 to-teal-900",primary:"text-cyan-400",secondary:"text-blue-400",accent:"text-teal-400",promptSymbol:"text-cyan-400",path:"text-blue-400",arrow:"text-teal-400",cursor:"bg-cyan-400",selection:"bg-cyan-700"},fire:{name:"Fire",bg:"from-red-900 via-orange-900 to-yellow-900",primary:"text-red-400",secondary:"text-orange-400",accent:"text-yellow-400",promptSymbol:"text-orange-400",path:"text-red-400",arrow:"text-yellow-400",cursor:"bg-red-400",selection:"bg-red-700"},cyberpunk:{name:"Cyberpunk",bg:"from-gray-900 via-purple-900 to-pink-900",primary:"text-yellow-400",secondary:"text-pink-400",accent:"text-cyan-400",promptSymbol:"text-pink-400",path:"text-yellow-400",arrow:"text-cyan-400",cursor:"bg-yellow-400",selection:"bg-pink-700"},monochrome:{name:"Monochrome",bg:"from-gray-800 via-gray-900 to-black",primary:"text-gray-300",secondary:"text-gray-400",accent:"text-white",promptSymbol:"text-gray-400",path:"text-gray-300",arrow:"text-white",cursor:"bg-gray-400",selection:"bg-gray-600"}};function i_({username:b="guest",hostname:O="blog"}){const[g,s]=jt.useState("default"),T=u_[g],[D,j]=jt.useState([{type:"system",content:["",`  Welcome to ${b}@${O}`,"  Type 'help' for available commands",""]}]),[L,C]=jt.useState(""),[A,Z]=jt.useState([]),[R,k]=jt.useState(-1),[Y,At]=jt.useState(!0),[ft,Lt]=jt.useState(!1),[Tt,ln]=jt.useState([]),[bt,Bt]=jt.useState(0),[pn,qt]=jt.useState(-1),[I,Gt]=jt.useState(null),$t=jt.useRef(null),ee=jt.useRef(null),an=jt.useRef(null),wt=async(q,m)=>{try{await navigator.clipboard.writeText(q),Gt(m),setTimeout(()=>Gt(null),2e3)}catch(z){console.error("Failed to copy:",z)}};jt.useEffect(()=>{const q=setInterval(()=>{At(m=>!m)},530);return()=>clearInterval(q)},[]),jt.useEffect(()=>{an.current?.scrollIntoView({behavior:"smooth"})},[D]),jt.useEffect(()=>{const q=()=>{$t.current?.focus()};return document.addEventListener("click",q),()=>document.removeEventListener("click",q)},[]);const Hn=jt.useCallback(q=>{if(ft){if(q.key==="ArrowUp"){q.preventDefault(),Bt(m=>m>0?m-1:Tt.length-1);return}else if(q.key==="ArrowDown"){q.preventDefault(),Bt(m=>m<Tt.length-1?m+1:0);return}else if(q.key==="Enter"){q.preventDefault();const m=Tt[bt];if(m)if(m.type==="category"){Zu(`cd ${m.value}`),j(N=>[...N,{type:"input",content:`cd ${m.value}`,path:Rt()}]);const z=Zu("ls");j(N=>[...N,{type:z.type==="error"?"error":"output",content:z.output,selectableItems:z.selectableItems,hint:z.hint}])}else if(m.type==="article"||m.type==="file"){const z=Zu(`cat ${m.value}`);j(N=>[...N,{type:"input",content:`cat ${m.value}`,path:Rt()},{type:z.type==="error"?"error":"output",content:z.output}])}else m.type==="theme"&&(s(m.value),j(z=>[...z,{type:"input",content:`theme ${m.value}`,path:Rt()},{type:"info",content:["",`  Theme switched to: ${m.label}`,""]}]));Lt(!1),ln([]),qt(-1),Bt(0),C("");return}else if(q.key==="Escape"){q.preventDefault(),Lt(!1),ln([]),qt(-1),Bt(0),C("");return}}if(q.key==="ArrowUp"){const m=D[D.length-1];if(m?.selectableItems&&m.selectableItems.length>0){q.preventDefault(),Lt(!0),ln(m.selectableItems),qt(D.length-1),Bt(0);return}if(R<A.length-1){q.preventDefault();const z=R+1;k(z),C(A[A.length-1-z])}}else if(q.key==="ArrowDown"){if(ft){q.preventDefault(),Bt(m=>m<Tt.length-1?m+1:0);return}if(R>0){q.preventDefault();const m=R-1;k(m),C(A[A.length-1-m])}else k(-1),C("")}else if(q.key==="Tab"){q.preventDefault();const m=L.trim().split(" "),z=m[m.length-1];if(m.length===1){const N=v0.filter(w=>w.startsWith(z));if(N.length===1)C(N[0]);else if(N.length>1){const w=Rt();j(X=>[...X,{type:"input",content:L,path:w},{type:"info",content:["","Available commands: "+N.join(", "),""]}]),C("")}}else if(m.length===2){const N=m[0],w=Af(),X=w.length>0?w[0]:null;let o=[];if(N==="cd"||N==="ls"?o=Ul().filter(E=>E.startsWith(z)):N==="cat"&&(X?o=ke(X).map(E=>E.slug+".md").filter(E=>E.startsWith(z)):(Ul().forEach(E=>{ke(E).forEach(V=>{o.push(`${E}/${V.slug}.md`)})}),o=o.filter(E=>E.startsWith(z)))),o.length===1)C(`${N} ${o[0]}`);else if(o.length>1){const v=Rt();j(E=>[...E,{type:"input",content:L,path:v},{type:"info",content:["","Matches: "+o.slice(0,10).join(", ")+(o.length>10?` ... (${o.length} total)`:""),""]}]),C("")}}}else if(q.key==="Enter"){q.preventDefault();const m=L.trim();if(m){Z(w=>[...w,m]),k(-1);const z=Zu(m),N=Rt();j(w=>[...w,{type:"input",content:m,path:N}]),z.images&&z.images.length>0&&t_(z.images.map(w=>({alt:w.alt,src:w.src}))),z.output.some(w=>w==="__CLEAR__")?j([{type:"system",content:["",`  Welcome to ${b}@${O}`,"  Type 'help' for available commands",""]}]):j(w=>[...w,{type:z.type==="error"?"error":z.type==="info"?"info":"output",content:z.output.filter(X=>X!=="__CLEAR__"),selectableItems:z.selectableItems,hint:z.hint}])}else{const z=Rt();j(N=>[...N,{type:"input",content:"",path:z}])}C("")}else if(q.key==="c"&&q.ctrlKey){q.preventDefault();const m=Rt();j(z=>[...z,{type:"input",content:L+"^C",path:m}]),C("")}},[L,A,R,b,O,D,ft,Tt,bt]),Rt=()=>`❯ ${Ju()||"~"} │ ⟠`;return B.jsx("div",{ref:ee,className:`min-h-screen bg-gradient-to-b ${T.bg} text-${T.primary.split("-")[1]}-400 font-mono text-sm md:text-base p-4 md:p-6 transition-colors duration-500`,onClick:()=>$t.current?.focus(),children:B.jsxs("div",{className:"max-w-5xl mx-auto",children:[B.jsxs("div",{className:"flex items-center gap-2 mb-4 pb-3 border-b border-gray-700/50 bg-gray-800/30 rounded-t-lg px-4 py-3 backdrop-blur-sm",children:[B.jsxs("div",{className:"flex gap-2",children:[B.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-lg"}),B.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-lg"}),B.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-lg"})]}),B.jsxs("div",{className:"flex-1 text-center text-gray-400 text-xs md:text-sm font-medium",children:[B.jsxs("span",{className:"opacity-75",children:[b,"@",O]}),B.jsx("span",{className:"mx-2 opacity-50",children:"|"}),B.jsx("span",{className:"opacity-75",children:Ju()})]}),B.jsx("div",{className:"text-gray-500 text-xs",children:B.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})})]}),B.jsxs("div",{className:"bg-gray-950/80 rounded-b-lg rounded-tr-lg p-4 md:p-6 shadow-2xl border border-gray-800/50 transition-colors duration-500",children:[B.jsx("div",{className:"space-y-3",children:D.map((q,m)=>{if(q.type==="input")return B.jsxs("div",{className:"flex flex-wrap items-center",children:[B.jsx("span",{className:`${T.promptSymbol} font-bold mr-2`,children:"❯"}),B.jsx("span",{className:`${T.path} font-bold whitespace-nowrap mr-2`,children:typeof q.path=="string"?q.path.replace(/❯ /,"").replace(/ \| ⟠/,"")||"~":q.path}),B.jsx("span",{className:"text-gray-500 mr-2",children:"│"}),B.jsx("span",{className:`${T.arrow} font-bold mr-2`,children:"⟠"}),B.jsx("span",{className:T.primary,children:q.content})]},m);if(q.type==="system")return B.jsx("div",{className:T.secondary,children:Array.isArray(q.content)?q.content.map((z,N)=>B.jsx("div",{children:z},N)):q.content},m);if(q.type==="error")return B.jsx("div",{className:"text-red-400",children:Array.isArray(q.content)?q.content.map((z,N)=>B.jsx("div",{children:z},N)):q.content},m);if(q.type==="info")return B.jsx("div",{className:T.accent,children:Array.isArray(q.content)?q.content.map((z,N)=>B.jsx("div",{children:z},N)):q.content},m);if(Array.isArray(q.content)){let z=!1,N="";const w=[];return B.jsx("div",{className:"mb-3",children:q.content.map((X,o)=>{if(typeof X=="string"&&X.startsWith("```"))if(z){z=!1;const v=w.join(`
`),E=`${m}-${o}`,U=I===E;return B.jsxs("div",{className:"mt-2 mb-2 rounded-md overflow-hidden border border-gray-700",children:[B.jsxs("div",{className:"bg-gray-800/80 px-3 py-1.5 text-xs font-mono text-cyan-400 border-b border-gray-700 flex items-center justify-between",children:[B.jsx("span",{children:N||"code"}),B.jsx("button",{onClick:()=>wt(v,E),className:`flex items-center gap-1 px-2 py-0.5 rounded transition-all duration-200 ${U?"text-green-400 bg-green-400/10":"text-gray-400 hover:text-white hover:bg-gray-700/50"}`,title:U?"已复制":"复制代码",children:U?B.jsxs(B.Fragment,{children:[B.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),B.jsx("span",{className:"text-xs",children:"已复制"})]}):B.jsxs(B.Fragment,{children:[B.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),B.jsx("span",{className:"text-xs",children:"复制"})]})})]}),B.jsx("div",{className:"bg-gray-900 px-4 py-3 overflow-x-auto",children:B.jsx("pre",{className:`text-sm leading-relaxed ${T.primary}`,style:{fontFamily:"'IBM Plex Mono', 'BlexMono Nerd Font', 'JetBrains Mono', monospace",letterSpacing:"0.02em"},children:B.jsx("code",{dangerouslySetInnerHTML:{__html:Ld(v,N)}})})})]},o)}else return z=!0,N=X.slice(3).trim(),w.length=0,null;if(z)return w.push(X),null;if(typeof X=="string"&&X.startsWith("__IMG:")){const v=X.slice(6),E=v.lastIndexOf(":");if(E>0&&v.endsWith("__")){const U=v.slice(0,E),V=v.slice(E+1,-2);return B.jsx("div",{className:"my-4",children:B.jsxs("figure",{className:"my-2",children:[B.jsx("img",{src:U,alt:V,className:"max-w-full rounded-lg shadow-lg",style:{maxHeight:"400px",objectFit:"contain"},onError:()=>{console.error("Image load error:",U)}}),V&&B.jsx("figcaption",{className:"text-gray-500 text-xs mt-2 text-center",children:V})]})},o)}}if(typeof X=="string"&&/^[ ═─]+$/.test(X)&&X.length>5)return null;if(typeof X=="string"){let v=X,E="";if(ft&&q.selectableItems&&m===pn){const gt=X.trim().replace(/\/$/,"").replace(/\.md$/,""),gn=q.selectableItems.findIndex(Bn=>Bn.value===gt);gn!==-1&&(gn===bt?(E=`${T.selection} text-white `,v=`> ${X.trim()} `):v=`  ${X.trim()}`)}const U=v.split(/(__BOLD__|__BOLDEND__|__ITALIC__|__ITALICEND__|__CODE__|__CODEEND__|__H1__|__H1END__|__H2__|__H2END__|__H3__|__H3END__)/);let V=!1,W=!1,at=!1,_t=0;const St=U.map((gt,gn)=>{if(gt==="__BOLD__")return V=!0,null;if(gt==="__BOLDEND__")return V=!1,null;if(gt==="__ITALIC__")return W=!0,null;if(gt==="__ITALICEND__")return W=!1,null;if(gt==="__CODE__")return at=!0,null;if(gt==="__CODEEND__")return at=!1,null;if(gt==="__H1__")return _t=1,null;if(gt==="__H1END__")return _t=0,null;if(gt==="__H2__")return _t=2,null;if(gt==="__H2END__")return _t=0,null;if(gt==="__H3__")return _t=3,null;if(gt==="__H3END__")return _t=0,null;let Bn=E;return _t===1?Bn=`${E} text-white font-bold text-2xl`:_t===2?Bn=`${E} text-white font-bold text-xl`:_t===3&&(Bn=`${E} text-white font-bold text-lg`),V?B.jsx("strong",{className:`${E} text-white font-bold text-lg`,children:gt},gn):W?B.jsx("em",{className:`${E} text-cyan-300`,children:gt},gn):at?B.jsx("code",{className:`${E} bg-gray-800 px-1.5 py-0.5 rounded text-yellow-300 text-sm`,children:gt},gn):B.jsx("span",{className:Bn,children:gt},gn)});return B.jsx("div",{className:`whitespace-pre-wrap ${E}`,children:St},o)}return B.jsx("div",{className:"whitespace-pre-wrap",children:X},o)})},m)}return B.jsx("div",{className:"text-green-300 whitespace-pre-wrap",children:q.content},m)})}),B.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-gray-700/60",children:[B.jsxs("span",{className:"flex items-center gap-2",children:[B.jsx("span",{className:`${T.promptSymbol} font-bold`,children:"❯"}),B.jsx("span",{className:`${T.path} font-bold`,children:Ju()||"~"}),B.jsx("span",{className:"text-gray-500",children:"│"}),B.jsx("span",{className:`${T.arrow} font-bold`,children:"⟠"})]}),B.jsx("span",{className:`${T.primary} flex items-center bg-gray-900/70 px-3 py-1.5 rounded-md border border-gray-700/50 shadow-inner min-w-[200px]`,children:ft?B.jsx("span",{className:T.accent,children:bt>=0&&Tt[bt]?`${Tt[bt].value} (press Enter to open, Esc to cancel)`:"(press Esc to cancel)"}):B.jsxs(B.Fragment,{children:[L,B.jsx("span",{className:`inline-block w-3 h-5 ${T.cursor} ml-1 rounded-sm ${Y?"opacity-100":"opacity-0"}`,style:{boxShadow:`0 0 8px rgba(${g==="fire"?"248, 113, 113":g==="sunset"?"251, 113, 133":g==="cyberpunk"?"250, 204, 21":"52, 211, 153"}, 0.6)`}})]})})]}),B.jsx("input",{ref:$t,type:"text",value:L,onChange:q=>C(q.target.value),onKeyDown:Hn,className:"opacity-0 absolute pointer-events-none",autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"})]}),B.jsx("div",{ref:an})]})})}function c_(){return B.jsx(i_,{username:"kota",hostname:"blog"})}const f_=()=>({type:"success",output:["","Available commands:","","  File System:","    ls [path]         - List categories or articles","    cat <article>     - Read an article","    cd <category>     - Navigate to category","    pwd               - Show current path","","  Navigation:","    search <keyword>  - Search articles by keyword","    history           - Show command history","    imgview <index>   - View image by index","","  Cool Commands:","    neofetch          - Display system information","    matrix            - Show Matrix-style rain","    clock             - Display ASCII digital clock","    theme             - Change terminal theme","","  Utilities:","    help              - Show this help message","    clear             - Clear the screen","","Navigation tips:","  - Use ↑/↓ arrows to select items from ls output","  - Press Enter to open selected item","  - Press Esc to cancel selection","  - Tab for auto-completion",""]});yn("help",f_);const s_=()=>({type:"success",output:[Ju()]});yn("pwd",s_);const o_=()=>({type:"success",output:["__CLEAR__"]});yn("clear",o_);const r_=b=>{if(b.length===0)return{type:"error",output:["search: missing keyword. Usage: search <keyword> [--limit=N] [--category=cat]"]};let O="",g=10,s="";for(const C of b)C.startsWith("--limit=")?g=parseInt(C.slice(8),10)||10:C.startsWith("--category=")?s=C.slice(13):C.startsWith("-")||(O=C);if(!O)return{type:"error",output:["search: missing keyword"]};const T=W0(O);if(T.length===0)return{type:"info",output:["",`No articles found matching "${O}"`,"","Tip: Try different keywords or check spelling",""]};const D=s?T.filter(C=>C.category===s):T,j=D.slice(0,g),L=["",`Search results for "${O}" (${D.length} found):`,""];for(const C of j){const A=[];C.title.toLowerCase().includes(O.toLowerCase())&&A.push("title"),C.content.toLowerCase().includes(O.toLowerCase())&&A.push("content"),C.tags.some(Z=>Z.toLowerCase().includes(O.toLowerCase()))&&A.push("tags"),L.push(`  ${C.slug}.md`),L.push(`     Title: ${C.title}`),L.push(`     Category: ${C.category} | Date: ${C.date}`),L.push(`     Tags: ${C.tags.join(", ")}`),L.push(`     Match: ${A.join(", ")}`),L.push("")}return D.length>g&&(L.push(`  ... and ${D.length-g} more results`),L.push("")),{type:"success",output:L}};yn("search",r_);const vf=[{name:"default",displayName:"Default",primary:"█",secondary:"█",accent:"█",primaryColor:"text-green-400",secondaryColor:"text-cyan-400",accentColor:"text-purple-400",description:"Classic green terminal"},{name:"matrix",displayName:"Matrix",primary:"█",secondary:"█",accent:"█",primaryColor:"text-green-500",secondaryColor:"text-green-300",accentColor:"text-green-400",description:"Matrix green aesthetic"},{name:"sunset",displayName:"Sunset",primary:"█",secondary:"█",accent:"█",primaryColor:"text-orange-400",secondaryColor:"text-pink-400",accentColor:"text-purple-400",description:"Warm sunset colors"},{name:"ocean",displayName:"Ocean",primary:"█",secondary:"█",accent:"█",primaryColor:"text-cyan-400",secondaryColor:"text-blue-400",accentColor:"text-teal-400",description:"Cool ocean blues"},{name:"fire",displayName:"Fire",primary:"█",secondary:"█",accent:"█",primaryColor:"text-red-400",secondaryColor:"text-orange-400",accentColor:"text-yellow-400",description:"Hot fire colors"},{name:"cyberpunk",displayName:"Cyberpunk",primary:"█",secondary:"█",accent:"█",primaryColor:"text-yellow-400",secondaryColor:"text-pink-400",accentColor:"text-cyan-400",description:"Neon cyberpunk style"},{name:"monochrome",displayName:"Monochrome",primary:"█",secondary:"█",accent:"█",primaryColor:"text-gray-300",secondaryColor:"text-gray-400",accentColor:"text-white",description:"Clean grayscale"}],d_=b=>{if(b.length===0){const g=["","Available themes (use ↑/↓ to select, Enter to preview):",""],s=[];return vf.forEach(T=>{g.push(`  ${T.name.padEnd(12)} - ${T.displayName}`),s.push({type:"theme",value:T.name,label:T.displayName})}),g.push(""),g.push("Usage: theme <name>"),g.push(""),{type:"info",output:g,selectableItems:s}}const[O]=b;if(O){const g=vf.find(s=>s.name===O);if(g)return{type:"success",output:["",`Theme: ${g.displayName}`,"",`  ${g.description}`,"","  Color Preview:",`    Primary:   ${g.primaryColor.replace("text-","")}`,`    Secondary: ${g.secondaryColor.replace("text-","")}`,`    Accent:    ${g.accentColor.replace("text-","")}`,""]}}return{type:"error",output:["",`Unknown theme: ${O}`,"Available themes: "+vf.map(g=>g.name).join(", "),""]}};yn("theme",d_);const m_=()=>{const b=["       /\\","      /  \\","     / /\\ \\","    / ____ \\","   /_/    \\_\\","  TERMINAL BLOG"],O=["","----------------------------------------",""],g=["  OS:        Terminal Blog v1.0.0","  Shell:     React Terminal","  Theme:     Default (Green Matrix)","  Resolution: Client-side only","  User:      Guest",""],s=["  Colors:","  [0] Black   [4] Blue","  [1] Red     [5] Purple","  [2] Green   [6] Cyan","  [3] Yellow  [7] White",""];return{type:"success",output:["",...b,...O,...g,...s]}};yn("neofetch",m_);const h_=()=>{const b="01XYZ ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ",s=[""];for(let T=0;T<20;T++){let D="  ";for(let j=0;j<50;j++){const L=b[Math.floor(Math.random()*b.length)];D+=L}s.push(D)}return s.push(""),s.push("  Wake up, Neo..."),s.push("  The Matrix has you..."),s.push("  Follow the white rabbit."),s.push(""),{type:"success",output:s}};yn("matrix",h_);const qd={0:[" ██████ ","██    ██","██    ██","██    ██","██    ██","██    ██"," ██████ "],1:["   ██   "," █████  ","   ██   ","   ██   ","   ██   ","   ██   "," ███████"],2:[" ██████ ","██    ██","      ██"," ██████ ","██      ","██      ","████████"],3:[" ██████ ","██    ██","      ██"," ██████ ","      ██","██    ██"," ██████ "],4:["██    ██","██    ██","██    ██","████████","      ██","      ██","      ██"],5:["████████","██      ","██████  ","      ██","      ██","██    ██"," ██████ "],6:[" ██████ ","██      ","██      ","██████  ","██    ██","██    ██"," ██████ "],7:["████████","      ██","     ██ ","    ██  ","   ██   ","  ██    ","  ██    "],8:[" ██████ ","██    ██","██    ██"," ██████ ","██    ██","██    ██"," ██████ "],9:[" ██████ ","██    ██","██    ██"," ███████","      ██","      ██"," ██████ "],":":["        ","  ████  ","  ████  ","        ","  ████  ","  ████  ","        "]," ":["        ","        ","        ","        ","        ","        ","        "]};function __(b){const O=[];for(let g=0;g<7;g++){let s="";for(const T of b){const D=qd[T]||qd[" "];s+=(D[g]||"        ")+" "}O.push(s)}return O}const y_=()=>{const b=new Date,O=String(b.getHours()).padStart(2,"0"),g=String(b.getMinutes()).padStart(2,"0"),s=String(b.getSeconds()).padStart(2,"0"),T=`${O}:${g}:${s}`;return{type:"success",output:["",...__(T),"",`  ${b.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}`,""]}};yn("clock",y_);g0.createRoot(document.getElementById("root")).render(B.jsx(jt.StrictMode,{children:B.jsx(c_,{})}));
