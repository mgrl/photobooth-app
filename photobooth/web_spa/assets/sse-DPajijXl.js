import{b as Be}from"./index-CNzCL5vR.js";/*!
 * vue-sse v2.5.2
 * (c) 2022 James Churchard
 * @license MIT
 */var Ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ue(h){var n={exports:{}};return h(n,n.exports),n.exports}/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */var ce=Ue(function(h,n){(function(f){var p=f.setTimeout,T=f.clearTimeout,E=f.XMLHttpRequest,he=f.XDomainRequest,pe=f.ActiveXObject,V=f.EventSource,H=f.document,De=f.Promise,Z=f.fetch,ve=f.Response,Y=f.TextDecoder,ye=f.TextEncoder,ne=f.AbortController;if(typeof window<"u"&&!("readyState"in H)&&H.body==null&&(H.readyState="loading",window.addEventListener("load",function(e){H.readyState="complete"},!1)),E==null&&pe!=null&&(E=function(){return new pe("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),ne==null){var Fe=Z;Z=function(e,r){var i=r.signal;return Fe(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(t){var s=t.body.getReader();return i._reader=s,i._aborted&&i._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return s}}}})},ne=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function Ee(){this.bitsNeeded=0,this.codePoint=0}Ee.prototype.decode=function(e){function r(l,c,a){if(a===1)return l>=128>>c&&l<<c<=2047;if(a===2)return l>=2048>>c&&l<<c<=55295||l>=57344>>c&&l<<c<=65535;if(a===3)return l>=65536>>c&&l<<c<=1114111;throw new Error}function i(l,c){if(l===6*1)return c>>6>15?3:c>31?2:1;if(l===6*2)return c>15?3:2;if(l===6*3)return 3;throw new Error}for(var t=65533,s="",o=this.bitsNeeded,d=this.codePoint,v=0;v<e.length;v+=1){var u=e[v];o!==0&&(u<128||u>191||!r(d<<6|u&63,o-6,i(o,d)))&&(o=0,d=t,s+=String.fromCharCode(d)),o===0?(u>=0&&u<=127?(o=0,d=u):u>=192&&u<=223?(o=6*1,d=u&31):u>=224&&u<=239?(o=6*2,d=u&15):u>=240&&u<=247?(o=6*3,d=u&7):(o=0,d=t),o!==0&&!r(d,o,i(o,d))&&(o=0,d=t)):(o-=6,d=d<<6|u&63),o===0&&(d<=65535?s+=String.fromCharCode(d):(s+=String.fromCharCode(55296+(d-65535-1>>10)),s+=String.fromCharCode(56320+(d-65535-1&1023))))}return this.bitsNeeded=o,this.codePoint=d,s};var Ne=function(){try{return new Y().decode(new ye().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(Y==null||ye==null||!Ne())&&(Y=Ee);var R=function(){};function P(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=R,this.onload=R,this.onerror=R,this.onreadystatechange=R,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=R}P.prototype.open=function(e,r){this._abort(!0);var i=this,t=this._xhr,s=1,o=0;this._abort=function(a){i._sendTimeout!==0&&(T(i._sendTimeout),i._sendTimeout=0),(s===1||s===2||s===3)&&(s=4,t.onload=R,t.onerror=R,t.onabort=R,t.onprogress=R,t.onreadystatechange=R,t.abort(),o!==0&&(T(o),o=0),a||(i.readyState=4,i.onabort(null),i.onreadystatechange())),s=0};var d=function(){if(s===1){var a=0,y="",F=void 0;if("contentType"in t)a=200,y="OK",F=t.contentType;else try{a=t.status,y=t.statusText,F=t.getResponseHeader("Content-Type")}catch{a=0,y="",F=void 0}a!==0&&(s=2,i.readyState=2,i.status=a,i.statusText=y,i._contentType=F,i.onreadystatechange())}},v=function(){if(d(),s===2||s===3){s=3;var a="";try{a=t.responseText}catch{}i.readyState=3,i.responseText=a,i.onprogress()}},u=function(a,y){if((y==null||y.preventDefault==null)&&(y={preventDefault:R}),v(),s===1||s===2||s===3){if(s=4,o!==0&&(T(o),o=0),i.readyState=4,a==="load")i.onload(y);else if(a==="error")i.onerror(y);else if(a==="abort")i.onabort(y);else throw new TypeError;i.onreadystatechange()}},l=function(a){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&u(t.responseText===""?"error":"load",a):t.readyState===3?"onprogress"in t||v():t.readyState===2&&d())},c=function(){o=p(function(){c()},500),t.readyState===3&&v()};"onload"in t&&(t.onload=function(a){u("load",a)}),"onerror"in t&&(t.onerror=function(a){u("error",a)}),"onabort"in t&&(t.onabort=function(a){u("abort",a)}),"onprogress"in t&&(t.onprogress=v),"onreadystatechange"in t&&(t.onreadystatechange=function(a){l(a)}),("contentType"in t||!("ontimeout"in E.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,r,!0),"readyState"in t&&(o=p(function(){c()},0))},P.prototype.abort=function(){this._abort(!1)},P.prototype.getResponseHeader=function(e){return this._contentType},P.prototype.setRequestHeader=function(e,r){var i=this._xhr;"setRequestHeader"in i&&i.setRequestHeader(e,r)},P.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},P.prototype.send=function(){if((!("ontimeout"in E.prototype)||!("sendAsBinary"in E.prototype)&&!("mozAnon"in E.prototype))&&H!=null&&H.readyState!=null&&H.readyState!=="complete"){var e=this;e._sendTimeout=p(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(i){throw i}};function _e(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function we(e){for(var r=Object.create(null),i=e.split(`\r
`),t=0;t<i.length;t+=1){var s=i[t],o=s.split(": "),d=o.shift(),v=o.join(": ");r[_e(d)]=v}this._map=r}we.prototype.get=function(e){return this._map[_e(e)]},E!=null&&E.HEADERS_RECEIVED==null&&(E.HEADERS_RECEIVED=2);function me(){}me.prototype.open=function(e,r,i,t,s,o,d){e.open("GET",s);var v=0;e.onprogress=function(){var l=e.responseText,c=l.slice(v);v+=c.length,i(c)},e.onerror=function(l){l.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===E.HEADERS_RECEIVED){var l=e.status,c=e.statusText,a=e.getResponseHeader("Content-Type"),y=e.getAllResponseHeaders();r(l,c,a,new we(y))}},e.withCredentials=o;for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&e.setRequestHeader(u,d[u]);return e.send(),e};function ge(e){this._headers=e}ge.prototype.get=function(e){return this._headers.get(e)};function Ce(){}Ce.prototype.open=function(e,r,i,t,s,o,d){var v=null,u=new ne,l=u.signal,c=new Y;return Z(s,{headers:d,credentials:o?"include":"same-origin",signal:l,cache:"no-store"}).then(function(a){return v=a.body.getReader(),r(a.status,a.statusText,a.headers.get("Content-Type"),new ge(a.headers)),new De(function(y,F){var z=function(){v.read().then(function(A){if(A.done)y(void 0);else{var C=c.decode(A.value,{stream:!0});i(C),z()}}).catch(function(A){F(A)})};z()})}).catch(function(a){if(a.name!=="AbortError")return a}).then(function(a){t(a)}),{abort:function(){v?.cancel(),u.abort()}}};function U(){this._listeners=Object.create(null)}function Se(e){p(function(){throw e},0)}U.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var i=r.length,t=0;t<i;t+=1){var s=r[t];try{typeof s.handleEvent=="function"?s.handleEvent(e):s.call(this,e)}catch(o){Se(o)}}},U.prototype.addEventListener=function(e,r){e=String(e);var i=this._listeners,t=i[e];t==null&&(t=[],i[e]=t);for(var s=!1,o=0;o<t.length;o+=1)t[o]===r&&(s=!0);s||t.push(r)},U.prototype.removeEventListener=function(e,r){e=String(e);var i=this._listeners,t=i[e];if(t!=null){for(var s=[],o=0;o<t.length;o+=1)t[o]!==r&&s.push(t[o]);s.length===0?delete i[e]:i[e]=s}};function X(e){this.type=e,this.target=void 0}function be(e,r){X.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}be.prototype=Object.create(X.prototype);function ie(e,r){X.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}ie.prototype=Object.create(X.prototype);function Te(e,r){X.call(this,e),this.error=r.error}Te.prototype=Object.create(X.prototype);var oe=-1,$=0,q=1,W=2,ae=-1,I=0,se=1,Ae=2,$e=3,Ie=/^text\/event\-stream(;.*)?$/i,je=1e3,He=18e6,fe=function(e,r){var i=e==null?r:parseInt(e,10);return i!==i&&(i=r),de(i)},de=function(e){return Math.min(Math.max(e,je),He)},B=function(e,r,i){try{typeof r=="function"&&r.call(e,i)}catch(t){Se(t)}};function x(e,r){U.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,Me(this,e,r)}function Pe(){return E!=null&&"withCredentials"in E.prototype||he==null?new E:new he}var Le=Z!=null&&ve!=null&&"body"in ve.prototype;function Me(e,r,i){r=String(r);var t=!!i.withCredentials,s=i.lastEventIdQueryParameterName||"lastEventId",o=de(1e3),d=fe(i.heartbeatTimeout,45e3),v="",u=o,l=!1,c=0,a=i.headers||{},y=i.Transport,F=Le&&y==null?void 0:new P(y!=null?new y:Pe()),z=y!=null&&typeof y!="string"?new y:F==null?new Ce:new me,A=void 0,C=0,O=oe,G="",k="",N="",ee="",S=I,ue=0,L=0,Xe=function(_,w,D,b){if(O===$)if(_===200&&D!=null&&Ie.test(D)){O=q,l=Date.now(),u=o,e.readyState=q;var m=new ie("open",{status:_,statusText:w,headers:b});e.dispatchEvent(m),B(e,e.onopen,m)}else{var g="";_!==200?(w&&(w=w.replace(/\s+/g," ")),g="EventSource's response has a status "+_+" "+w+" that is not 200. Aborting the connection."):g="EventSource's response has a Content-Type specifying an unsupported type: "+(D==null?"-":D.replace(/\s+/g," "))+". Aborting the connection.",le();var m=new ie("error",{status:_,statusText:w,headers:b});e.dispatchEvent(m),B(e,e.onerror,m),console.error(g)}},qe=function(_){if(O===q){for(var w=-1,D=0;D<_.length;D+=1){var b=_.charCodeAt(D);(b===10||b===13)&&(w=D)}var m=(w!==-1?ee:"")+_.slice(0,w+1);ee=(w===-1?ee:"")+_.slice(w+1),_!==""&&(l=Date.now(),c+=_.length);for(var g=0;g<m.length;g+=1){var b=m.charCodeAt(g);if(S===ae&&b===10)S=I;else if(S===ae&&(S=I),b===13||b===10){if(S!==I){S===se&&(L=g+1);var M=m.slice(ue,L-1),Q=m.slice(L+(L<g&&m.charCodeAt(L)===32?1:0),g);M==="data"?(G+=`
`,G+=Q):M==="id"?k=Q:M==="event"?N=Q:M==="retry"?(o=fe(Q,o),u=o):M==="heartbeatTimeout"&&(d=fe(Q,d),C!==0&&(T(C),C=p(function(){J()},d)))}if(S===I){if(G!==""){v=k,N===""&&(N="message");var te=new be(N,{data:G.slice(1),lastEventId:k});if(e.dispatchEvent(te),N==="open"?B(e,e.onopen,te):N==="message"?B(e,e.onmessage,te):N==="error"&&B(e,e.onerror,te),O===W)return}G="",N=""}S=b===13?ae:I}else S===I&&(ue=g,S=se),S===se?b===58&&(L=g+1,S=Ae):S===Ae&&(S=$e)}}},xe=function(_){if(O===q||O===$){O=oe,C!==0&&(T(C),C=0),C=p(function(){J()},u),u=de(Math.min(o*16,u*2)),e.readyState=$;var w=new Te("error",{error:_});e.dispatchEvent(w),B(e,e.onerror,w),_!=null&&console.error(_)}},le=function(){O=W,A!=null&&(A.abort(),A=void 0),C!==0&&(T(C),C=0),e.readyState=W},J=function(){if(C=0,O!==oe){if(!l&&A!=null)xe(new Error("No activity within "+d+" milliseconds. "+(O===$?"No response received.":c+" chars received.")+" Reconnecting.")),A!=null&&(A.abort(),A=void 0);else{var _=Math.max((l||Date.now())+d-Date.now(),1);l=!1,C=p(function(){J()},_)}return}l=!1,c=0,C=p(function(){J()},d),O=$,G="",N="",k=v,ee="",ue=0,L=0,S=I;var w=r;r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&v!==""&&(w+=(r.indexOf("?")===-1?"?":"&")+s+"="+encodeURIComponent(v));var D=e.withCredentials,b={};b.Accept="text/event-stream";var m=e.headers;if(m!=null)for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&(b[g]=m[g]);try{A=z.open(F,Xe,qe,xe,w,D,b)}catch(M){throw le(),M}};e.url=r,e.readyState=$,e.withCredentials=t,e.headers=a,e._close=le,J()}x.prototype=Object.create(U.prototype),x.prototype.CONNECTING=$,x.prototype.OPEN=q,x.prototype.CLOSED=W,x.prototype.close=function(){this._close()},x.CONNECTING=$,x.OPEN=q,x.CLOSED=W,x.prototype.withCredentials=void 0;var Re=V;E!=null&&(V==null||!("withCredentials"in V.prototype))&&(Re=x),function(e){{var r=e(n);r!==void 0&&(h.exports=r)}}(function(e){e.EventSourcePolyfill=x,e.NativeEventSource=V,e.EventSource=Re})})(typeof globalThis>"u"?typeof window<"u"?window:typeof self<"u"?self:Ge:globalThis)}),We=Object.freeze(Object.assign(Object.create(null),ce,{default:ce})),K=function(h){return h.data},ze=function(h){return JSON.parse(h.data)},j=function(n){if(this._handlers={},this._listeners={},this._source=null,n.format?typeof n.format=="string"?n.format==="plain"?this._format=K:n.format==="json"?this._format=ze:this._format=K:typeof n.format=="function"?this._format=n.format:this._format=K:this._format=K,n.handlers)for(var f in n.handlers)this.on(f,n.handlers[f]);this.url=n.url,this.withCredentials=!!n.withCredentials,this.polyfillOptions=n.polyfillOptions||{},this.forcePolyfill=!!n.forcePolyfill},Oe={source:{configurable:!0}};Oe.source.get=function(){return this._source};j.prototype.connect=function(){var n=this;return this.forcePolyfill?this._source=new ce.EventSourcePolyfill(this.url,Object.assign({},this.polyfillOptions,{withCredentials:this.withCredentials})):this._source=new window.EventSource(this.url,{withCredentials:this.withCredentials}),new Promise(function(f,p){n._source.onopen=function(){for(var T in n._listeners)n._source.addEventListener(T,n._listeners[T]);n._source.onerror=null,f(n)},n._source.onerror=p})};j.prototype.disconnect=function(){this._source!==null&&(this._source.close(),this._source=null)};j.prototype.on=function(n,f){return n||(n="message"),this._listeners[n]||this._create(n),this._handlers[n].push(f),this};j.prototype.once=function(n,f){var p=this;return this.on(n,function(T){p.off(n,f),f(T)}),this};j.prototype.off=function(n,f){if(!this._handlers[n])return this;var p=this._handlers[n].indexOf(f);return p===-1?this:(this._handlers[n].splice(p,1),this._handlers[n].length===0&&(this._source.removeEventListener(n,this._listeners[n]),delete this._handlers[n],delete this._listeners[n]),this)};j.prototype._create=function(n){var f=this;this._handlers[n]=[],this._listeners[n]=function(p){var T;try{T=f._format(p)}catch(E){typeof f._source.onerror=="function"&&f._source.onerror(E);return}f._handlers[n].forEach(function(E){return E(T,p.lastEventId)})},this._source&&this._source.addEventListener(n,this._listeners[n])};Object.defineProperties(j.prototype,Oe);function Je(h,n){h.config&&h.config.globalProperties?h.config.globalProperties.$sse=new re(n):h.$sse=h.prototype.$sse=new re(n),n&&n.polyfill&&Promise.resolve().then(function(){return We}),h.mixin({beforeCreate:function(){this.$options.sse&&this.$options.sse.cleanup&&(this.$sse=new re,this.$sse.$clients=[])},beforeDestroy:function(){this.$sse.$clients!==null&&(this.$sse.$clients.forEach(function(p){return p.disconnect()}),this.$sse.$clients=[])}})}var re=function(n){this.$defaultConfig=Object.assign({format:K,sendCredentials:!1},n),this.$clients=null};re.prototype.create=function(n){var f;typeof n=="object"?f=n:typeof n=="string"?f={url:n}:f={};var p=new j(Object.assign({},this.$defaultConfig,f));return this.$clients!==null&&this.$clients.push(p),p};var Qe={install:Je};const Ke=Qe,Ze=Be(({app:h})=>{h.use(Ke)});export{Ze as default};
