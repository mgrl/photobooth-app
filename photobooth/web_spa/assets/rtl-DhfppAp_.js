import{N as ft,r as C,b1 as Ht,b9 as J,aC as St,bd as tt,w as H,a4 as ht,e as _,be as kt,az as K,bf as et,al as Mt,bg as Wt,v as Pt,aP as Bt,M as qt,a3 as Lt,au as At,aQ as Rt,d as T,O as $t,b3 as zt,b4 as Ft,bh as Ot,aR as jt,bi as Dt,bj as Kt,aU as It,bk as Qt,bl as nt,ay as _t,t as ot,P as Ut,V as Nt,bm as Vt,b5 as Xt,bn as Yt,bo as Zt,ak as Gt,U as Jt}from"./index-DitXDkC3.js";import{c as te}from"./selection-B3-iGLLl.js";let j,q=0;const v=new Array(256);for(let t=0;t<256;t++)v[t]=(t+256).toString(16).substring(1);const ee=(()=>{const t=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const o=new Uint8Array(e);return t.getRandomValues(o),o}}return e=>{const o=[];for(let n=e;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),lt=4096;function I(){(j===void 0||q+16>lt)&&(q=0,j=ee(lt));const t=Array.prototype.slice.call(j,q,q+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,v[t[0]]+v[t[1]]+v[t[2]]+v[t[3]]+"-"+v[t[4]]+v[t[5]]+"-"+v[t[6]]+v[t[7]]+"-"+v[t[8]]+v[t[9]]+"-"+v[t[10]]+v[t[11]]+v[t[12]]+v[t[13]]+v[t[14]]+v[t[15]]}const ne={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},oe={...ne,contextMenu:Boolean};function le({showing:t,avoidEmit:e,configureAnchorEl:o}){const{props:n,proxy:l,emit:c}=ft(),i=C(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Ht(a,13)===!0&&s.toggle(a)},contextClick(a){l.hide(a),J(a),St(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:J,mobileTouch(a){if(s.mobileCleanup(a),h(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const r=a.target;tt(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),t.value===!0&&a!==void 0&&te()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let r;a===!0?l.$q.platform.is.mobile===!0?r=[[i.value,"touchstart","mobileTouch","passive"]]:r=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:r=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],tt(s,"anchor",r)});function d(){kt(s,"anchor")}function x(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function b(){if(n.target===!1||n.target===""||l.$el.parentNode===null)i.value=null;else if(n.target===!0)x(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return H(()=>n.contextMenu,a=>{i.value!==null&&(d(),o(a))}),H(()=>n.target,()=>{i.value!==null&&d(),b()}),H(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),ht(()=>{b(),e!==!0&&n.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),_(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:s}}function ie(t,e){const o=C(null);let n;function l(f,h){const s=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:n;f!==window&&f[s]("scroll",d,K.passive),window[s]("scroll",d,K.passive),n=h}function c(){o.value!==null&&(l(o.value),o.value=null)}const i=H(()=>t.noParentEvent,()=>{o.value!==null&&(c(),e())});return _(i),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:L}=K,S=[];function A(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let o=et.length-1;for(;o>=0;){const n=et[o].$;if(n.type.name==="QTooltip"){o--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=S.length-1;n>=0;n--){const l=S[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(e)===!1)&&(e===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(e)===!1))t.qClickOutside=!0,l.onClickOutside(t);else return}}function ae(t){S.push(t),S.length===1&&(document.addEventListener("mousedown",A,L),document.addEventListener("touchstart",A,L))}function it(t){const e=S.findIndex(o=>o===t);e!==-1&&(S.splice(e,1),S.length===0&&(document.removeEventListener("mousedown",A,L),document.removeEventListener("touchstart",A,L)))}let at,ut;function rt(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ue(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const Q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{Q[`${t}#ltr`]=t,Q[`${t}#rtl`]=t});function st(t,e){const o=t.split(" ");return{vertical:o[0],horizontal:Q[`${o[1]}#${e===!0?"rtl":"ltr"}`]}}function re(t,e){let{top:o,left:n,right:l,bottom:c,width:i,height:f}=t.getBoundingClientRect();return e!==void 0&&(o-=e[1],n-=e[0],c+=e[1],l+=e[0],i+=e[0],f+=e[1]),{top:o,bottom:c,height:f,left:n,right:l,width:i,middle:n+(l-n)/2,center:o+(c-o)/2}}function se(t,e,o){let{top:n,left:l}=t.getBoundingClientRect();return n+=e.top,l+=e.left,o!==void 0&&(n+=o[1],l+=o[0]),{top:n,bottom:n+1,height:1,left:l,right:l+1,width:1,middle:l,center:n}}function ce(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function ct(t,e,o,n){return{top:t[o.vertical]-e[n.vertical],left:t[o.horizontal]-e[n.horizontal]}}function mt(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{mt(t,e+1)},10);return}const{targetEl:o,offset:n,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:s,maxHeight:d,maxWidth:x}=t;if(Mt.is.ios===!0&&window.visualViewport!==void 0){const k=document.body.style,{offsetLeft:y,offsetTop:p}=window.visualViewport;y!==at&&(k.setProperty("--q-pe-left",y+"px"),at=y),p!==ut&&(k.setProperty("--q-pe-top",p+"px"),ut=p)}const{scrollLeft:b,scrollTop:a}=o,r=f===void 0?re(l,s===!0?[0,0]:n):se(l,f,n);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:x||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:P,offsetHeight:M}=o,{elWidth:B,elHeight:R}=h===!0||s===!0?{elWidth:Math.max(r.width,P),elHeight:s===!0?Math.max(r.height,M):M}:{elWidth:P,elHeight:M};let g={maxWidth:x,maxHeight:d};(h===!0||s===!0)&&(g.minWidth=r.width+"px",s===!0&&(g.minHeight=r.height+"px")),Object.assign(o.style,g);const w=ce(B,R);let m=ct(r,w,c,i);if(f===void 0||n===void 0)D(m,r,w,c,i);else{const{top:k,left:y}=m;D(m,r,w,c,i);let p=!1;if(m.top!==k){p=!0;const E=2*n[1];r.center=r.top-=E,r.bottom-=E+2}if(m.left!==y){p=!0;const E=2*n[0];r.middle=r.left-=E,r.right-=E+2}p===!0&&(m=ct(r,w,c,i),D(m,r,w,c,i))}g={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(g.maxHeight=m.maxHeight+"px",r.height>m.maxHeight&&(g.minHeight=g.maxHeight)),m.maxWidth!==void 0&&(g.maxWidth=m.maxWidth+"px",r.width>m.maxWidth&&(g.minWidth=g.maxWidth)),Object.assign(o.style,g),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==b&&(o.scrollLeft=b)}function D(t,e,o,n,l){const c=o.bottom,i=o.right,f=Wt(),h=window.innerHeight-f,s=document.body.clientWidth;if(t.top<0||t.top+c>h)if(l.vertical==="center")t.top=e[n.vertical]>h/2?Math.max(0,h-c):0,t.maxHeight=Math.min(c,h);else if(e[n.vertical]>h/2){const d=Math.min(h,n.vertical==="center"?e.center:n.vertical===l.vertical?e.bottom:e.top);t.maxHeight=Math.min(c,d),t.top=Math.max(0,d-c)}else t.top=Math.max(0,n.vertical==="center"?e.center:n.vertical===l.vertical?e.top:e.bottom),t.maxHeight=Math.min(c,h-t.top);if(t.left<0||t.left+i>s)if(t.maxWidth=Math.min(i,s),l.horizontal==="middle")t.left=e[n.horizontal]>s/2?Math.max(0,s-i):0;else if(e[n.horizontal]>s/2){const d=Math.min(s,n.horizontal==="middle"?e.middle:n.horizontal===l.horizontal?e.right:e.left);t.maxWidth=Math.min(i,d),t.left=Math.max(0,d-t.maxWidth)}else t.left=Math.max(0,n.horizontal==="middle"?e.middle:n.horizontal===l.horizontal?e.left:e.right),t.maxWidth=Math.min(i,s-t.left)}const ve=Pt({name:"QMenu",inheritAttrs:!1,props:{...oe,...Bt,...qt,...Lt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:rt},self:{type:String,validator:rt},offset:{type:Array,validator:ue},scrollTarget:At,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Rt,"click","escapeKey"],setup(t,{slots:e,emit:o,attrs:n}){let l=null,c,i,f;const h=ft(),{proxy:s}=h,{$q:d}=s,x=C(null),b=C(!1),a=T(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),r=$t(t,d),{registerTick:P,removeTick:M}=zt(),{registerTimeout:B}=Ft(),{transitionProps:R,transitionStyle:g}=Ot(t),{localScrollTarget:w,changeScrollEvent:m,unconfigureScrollTarget:k}=ie(t,Z),{anchorEl:y,canShow:p}=le({showing:b}),{hide:E}=jt({showing:b,canShow:p,handleShow:yt,handleHide:pt,hideOnRouteChange:a,processOnMount:!0}),{showPortal:U,hidePortal:N,renderPortal:vt}=Dt(h,x,Et,"menu"),$={anchorEl:y,innerRef:x,onClickOutside(u){if(t.persistent!==!0&&b.value===!0)return E(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Gt(u),!0}},V=T(()=>st(t.anchor||(t.cover===!0?"center middle":"bottom start"),d.lang.rtl)),gt=T(()=>t.cover===!0?V.value:st(t.self||"top start",d.lang.rtl)),xt=T(()=>(t.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),bt=T(()=>t.autoClose===!0?{onClick:wt}:{}),X=T(()=>b.value===!0&&t.persistent!==!0);H(X,u=>{u===!0?(Vt(F),ae($)):(nt(F),it($))});function z(){Xt(()=>{let u=x.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function yt(u){if(l=t.noRefocus===!1?document.activeElement:null,Kt(G),U(),Z(),c=void 0,u!==void 0&&(t.touchPosition||t.contextMenu)){const O=It(u);if(O.left!==void 0){const{top:Tt,left:Ct}=y.value.getBoundingClientRect();c={left:O.left-Ct,top:O.top-Tt}}}i===void 0&&(i=H(()=>d.screen.width+"|"+d.screen.height+"|"+t.self+"|"+t.anchor+"|"+d.lang.rtl,W)),t.noFocus!==!0&&document.activeElement.blur(),P(()=>{W(),t.noFocus!==!0&&z()}),B(()=>{d.platform.is.ios===!0&&(f=t.autoClose,x.value.click()),W(),U(!0),o("show",u)},t.transitionDuration)}function pt(u){M(),N(),Y(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),B(()=>{N(!0),o("hide",u)},t.transitionDuration)}function Y(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||b.value===!0)&&(Qt(G),k(),it($),nt(F)),u!==!0&&(l=null)}function Z(){(y.value!==null||t.scrollTarget!==void 0)&&(w.value=_t(y.value,t.scrollTarget),m(w.value,W))}function wt(u){f!==!0?(Yt(s,u),o("click",u)):f=!1}function G(u){X.value===!0&&t.noFocus!==!0&&Zt(x.value,u.target)!==!0&&z()}function F(u){o("escapeKey"),E(u)}function W(){mt({targetEl:x.value,offset:t.offset,anchorEl:y.value,anchorOrigin:V.value,selfOrigin:gt.value,absoluteOffset:c,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function Et(){return ot(Nt,R.value,()=>b.value===!0?ot("div",{role:"menu",...n,ref:x,tabindex:-1,class:["q-menu q-position-engine scroll"+xt.value,n.class],style:[n.style,g.value],...bt.value},Ut(e.default)):null)}return _(Y),Object.assign(s,{focus:z,updatePosition:W}),vt}});function de(t){return t??null}function dt(t,e){return t??(e===!0?`f_${I()}`:null)}function ge({getValue:t,required:e=!0}={}){if(Jt.value===!0){const o=t!==void 0?C(de(t())):C(null);return e===!0&&o.value===null&&ht(()=>{o.value=`f_${I()}`}),t!==void 0&&H(t,n=>{o.value=dt(n,e)}),o}return t!==void 0?T(()=>dt(t(),e)):C(`f_${I()}`)}let fe=!1;{const t=document.createElement("div");t.setAttribute("dir","rtl"),Object.assign(t.style,{width:"1px",height:"1px",overflow:"auto"});const e=document.createElement("div");Object.assign(e.style,{width:"1000px",height:"1px"}),document.body.appendChild(t),t.appendChild(e),t.scrollLeft=-1e3,fe=t.scrollLeft>=0,t.remove()}export{ve as Q,I as a,fe as r,ge as u};