import{ai as $e,b1 as p,r as T,d as f,e as de,a1 as xe,b2 as ve,A as Me,a$ as De,z as b,a3 as ce,b3 as Ee,b4 as Qe,Q as H,al as We,R as be,T as Fe,v as he,b5 as ee,b6 as fe,w as O,Z as je,$ as Ke,a0 as Ve,P as ge}from"./index-DNM8q3_g.js";import{a as ze}from"./use-id-DybjSsBX.js";import{b as Oe}from"./QLayout-Cdt2TMfH.js";import{r as He}from"./rtl-DFPa-2ov.js";let Ne=0;const pe=["click","keydown"],et={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ne++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function tt(e,I,C,c){const o=$e(ve,p);if(o===p)return console.error("QTab/QRouteTab component needs to be child of QTabs"),p;const{proxy:N}=be(),M=T(null),Q=T(null),W=T(null),U=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),A=f(()=>o.currentModel.value===e.name),G=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(A.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),R=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=f(()=>e.disable===!0||o.hasFocus.value===!0||A.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function y(l,h){if(h!==!0&&M.value!==null&&M.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&ce(l);return}if(c===void 0){o.updateModel({name:e.name}),C("click",l);return}if(c.hasRouterLink.value===!0){const m=(d={})=>{let w;const q=d.to===void 0||Fe(d.to,e.to)===!0?o.avoidRouteWatcher=ze():null;return c.navigateToRouterLink(l,{...d,returnRouterError:!0}).catch(S=>{w=S}).then(S=>{if(q===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,w===void 0&&(S===void 0||S.message!==void 0&&S.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),d.returnRouterError===!0)return w!==void 0?Promise.reject(w):S})};C("click",l,m),l.defaultPrevented!==!0&&m();return}C("click",l)}function k(l){Ee(l,[13,32])?y(l,!0):Qe(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&o.onKbdNavigate(l.keyCode,N.$el)===!0&&ce(l),C("keydown",l)}function D(){const l=o.tabProps.value.narrowIndicator,h=[],m=b("div",{ref:W,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&h.push(b(H,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&h.push(b("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&h.push(e.alertIcon!==void 0?b(H,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):b("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&h.push(m);const d=[b("div",{class:"q-focus-helper",tabindex:-1,ref:M}),b("div",{class:R.value},We(I.default,h))];return l===!1&&d.push(m),d}const B={name:f(()=>e.name),rootRef:Q,tabIndicatorRef:W,routeData:c};de(()=>{o.unregisterTab(B)}),xe(()=>{o.registerTab(B)});function F(l,h){const m={ref:Q,class:G.value,tabindex:g.value,role:"tab","aria-selected":A.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:k,...h};return Me(b(l,m,D()),[[De,U.value]])}return{renderTab:F,$tabs:o}}function Ue(e,I,C){const c=C===!0?["left","right"]:["top","bottom"];return`absolute-${I===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const Ge=["left","center","right","justify"],nt=he({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ge.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:I,emit:C}){const{proxy:c}=be(),{$q:o}=c,{registerTick:N}=ee(),{registerTick:M}=ee(),{registerTick:Q}=ee(),{registerTimeout:W,removeTimeout:U}=fe(),{registerTimeout:A,removeTimeout:G}=fe(),R=T(null),g=T(null),y=T(e.modelValue),k=T(!1),D=T(!0),B=T(!1),F=T(!1),l=[],h=T(0),m=T(!1);let d=null,w=null,q;const S=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ue(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),me=f(()=>{const t=h.value,n=y.value;for(let a=0;a<t;a++)if(l[a].name.value===n)return!0;return!1}),Te=f(()=>`q-tabs__content--align-${k.value===!0?"left":F.value===!0?"justify":e.align}`),we=f(()=>`q-tabs row no-wrap items-center q-tabs--${k.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ce=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Te.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),j=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=f(()=>e.vertical!==!0&&o.lang.rtl===!0),X=f(()=>He===!1&&K.value===!0);O(K,x),O(()=>e.modelValue,t=>{Z({name:t,setCurrent:!0,skipEmit:!0})}),O(()=>e.outsideArrows,V);function Z({name:t,setCurrent:n,skipEmit:a}){y.value!==t&&(a!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(ye(y.value,t),y.value=t))}function V(){N(()=>{R.value&&te({width:R.value.offsetWidth,height:R.value.offsetHeight})})}function te(t){if(j.value===void 0||g.value===null)return;const n=t[j.value.container],a=Math.min(g.value[j.value.scroll],Array.prototype.reduce.call(g.value.children,(s,i)=>s+(i[j.value.content]||0),0)),u=n>0&&a>n;k.value=u,u===!0&&M(x),F.value=n<parseInt(e.breakpoint,10)}function ye(t,n){const a=t!=null&&t!==""?l.find(s=>s.name.value===t):null,u=n!=null&&n!==""?l.find(s=>s.name.value===n):null;if(z===!0)z=!1;else if(a&&u){const s=a.tabIndicatorRef.value,i=u.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),s.style.transition="none",s.style.transform="none",i.style.transition="none",i.style.transform="none";const r=s.getBoundingClientRect(),v=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${r.top-v.top}px,0) scale3d(1,${v.height?r.height/v.height:1},1)`:`translate3d(${r.left-v.left}px,0,0) scale3d(${v.width?r.width/v.width:1},1,1)`,Q(()=>{d=setTimeout(()=>{d=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}u&&k.value===!0&&$(u.rootRef.value)}function $(t){const{left:n,width:a,top:u,height:s}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let r=e.vertical===!0?i.top-u:i.left-n;if(r<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(r),x();return}r+=e.vertical===!0?i.height-s:i.width-a,r>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(r),x())}function x(){const t=g.value;if(t===null)return;const n=t.getBoundingClientRect(),a=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);K.value===!0?(D.value=Math.ceil(a+n.width)<t.scrollWidth-1,B.value=a>0):(D.value=a>0,B.value=e.vertical===!0?Math.ceil(a+n.height)<t.scrollHeight:Math.ceil(a+n.width)<t.scrollWidth)}function ne(t){w!==null&&clearInterval(w),w=setInterval(()=>{Re(t)===!0&&L()},5)}function ae(){ne(X.value===!0?Number.MAX_SAFE_INTEGER:0)}function le(){ne(X.value===!0?0:Number.MAX_SAFE_INTEGER)}function L(){w!==null&&(clearInterval(w),w=null)}function qe(t,n){const a=Array.prototype.filter.call(g.value.children,v=>v===n||v.matches&&v.matches(".q-tab.q-focusable")===!0),u=a.length;if(u===0)return;if(t===36)return $(a[0]),a[0].focus(),!0;if(t===35)return $(a[u-1]),a[u-1].focus(),!0;const s=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),r=s===!0?-1:i===!0?1:void 0;if(r!==void 0){const v=K.value===!0?-1:1,_=a.indexOf(n)+r*v;return _>=0&&_<u&&($(a[_]),a[_].focus({preventScroll:!0})),!0}}const _e=f(()=>X.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Re(t){const n=g.value,{get:a,set:u}=_e.value;let s=!1,i=a(n);const r=t<i?-1:1;return i+=r*5,i<0?(s=!0,i=0):(r===-1&&i<=t||r===1&&i>=t)&&(s=!0,i=t),u(n,i),x(),s}function re(t,n){for(const a in t)if(t[a]!==n[a])return!1;return!0}function ke(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const a=l.filter(r=>r.routeData!==void 0&&r.routeData.hasRouterLink.value===!0),{hash:u,query:s}=c.$route,i=Object.keys(s).length;for(const r of a){const v=r.routeData.exact.value===!0;if(r.routeData[v===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:_,query:J,matched:Ae,href:Be}=r.routeData.resolvedLink.value,Y=Object.keys(J).length;if(v===!0){if(_!==u||Y!==i||re(s,J)===!1)continue;t=r.name.value;break}if(_!==""&&_!==u||Y!==0&&re(J,s)===!1)continue;const P={matchedLen:Ae.length,queryDiff:i-Y,hrefLen:Be.length-_.length};if(P.matchedLen>n.matchedLen){t=r.name.value,n=P;continue}else if(P.matchedLen!==n.matchedLen)continue;if(P.queryDiff<n.queryDiff)t=r.name.value,n=P;else if(P.queryDiff!==n.queryDiff)continue;P.hrefLen>n.hrefLen&&(t=r.name.value,n=P)}if(t===null&&l.some(r=>r.routeData===void 0&&r.name.value===y.value)===!0){z=!1;return}Z({name:t,setCurrent:!0})}function Se(t){if(U(),m.value!==!0&&R.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&R.value.contains(n)===!0&&(m.value=!0,k.value===!0&&$(n))}}function Le(){W(()=>{m.value=!1},30)}function E(){ie.avoidRouteWatcher===!1?A(ke):G()}function oe(){if(q===void 0){const t=O(()=>c.$route.fullPath,E);q=()=>{t(),q=void 0}}}function Pe(t){l.push(t),h.value++,V(),t.routeData===void 0||c.$route===void 0?A(()=>{if(k.value===!0){const n=y.value,a=n!=null&&n!==""?l.find(u=>u.name.value===n):null;a&&$(a.rootRef.value)}}):(oe(),t.routeData.hasRouterLink.value===!0&&E())}function Ie(t){l.splice(l.indexOf(t),1),h.value--,V(),q!==void 0&&t.routeData!==void 0&&(l.every(n=>n.routeData===void 0)===!0&&q(),E())}const ie={currentModel:y,tabProps:S,hasFocus:m,hasActiveTab:me,registerTab:Pe,unregisterTab:Ie,verifyRouteModel:E,updateModel:Z,onKbdNavigate:qe,avoidRouteWatcher:!1};je(ve,ie);function ue(){d!==null&&clearTimeout(d),L(),q!==void 0&&q()}let se,z;return de(ue),Ke(()=>{se=q!==void 0,ue()}),Ve(()=>{se===!0&&(oe(),z=!0,E()),V()}),()=>b("div",{ref:R,class:we.value,role:"tablist",onFocusin:Se,onFocusout:Le},[b(Oe,{onResize:te}),b("div",{ref:g,class:Ce.value,onScroll:x},ge(I.default)),b(H,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L}),b(H,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(B.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:le,onTouchstartPassive:le,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L})])}}),at=he({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:I}){const C=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>b("div",{class:C.value},ge(I.default))}});export{nt as Q,pe as a,tt as b,at as c,et as u};
