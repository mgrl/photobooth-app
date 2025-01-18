import{e as r,x as H,B as s,aW as T,U as M,C as P,A as a,V as A,P as E,aD as F,w as O,ad as h,R as W}from"./index-x-yFzLoN.js";const x={ratio:[String,Number]};function U(e,o){return r(()=>{const u=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const V=1.7778,J=H({name:"QImg",props:{...x,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:V},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:u}){const y=s(e.initialRatio),_=U(e,y),f=W(),{registerTimeout:C,removeTimeout:m}=T(),{registerTimeout:z,removeTimeout:b}=T(),v=r(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),L=r(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),i=[s(null),s(v.value)],n=s(0),c=s(!1),g=s(!1),N=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),R=r(()=>({width:e.width,height:e.height})),k=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),I=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function B(){if(b(),e.loadingShowDelay===0){c.value=!0;return}z(()=>{c.value=!0},e.loadingShowDelay)}function S(){b(),c.value=!1}function D({target:t}){h(f)===!1&&(m(),y.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,w(t,1))}function w(t,l){l===1e3||h(f)===!0||(t.complete===!0?j(t):C(()=>{w(t,l+1)},50))}function j(t){h(f)!==!0&&(n.value=n.value^1,i[n.value].value=null,S(),t.getAttribute("__qerror")!=="true"&&(g.value=!1),u("load",t.currentSrc||t.src))}function Q(t){m(),S(),g.value=!0,i[n.value].value=L.value,i[n.value^1].value=v.value,u("error",t)}function q(t){const l=i[t].value,d={key:"img_"+t,class:k.value,style:I.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return n.value===t?Object.assign(d,{class:d.class+"current",onLoad:D,onError:Q}):d.class+="loaded",a("div",{class:"q-img__container absolute-full",key:"img"+t},a("img",d))}function $(){return c.value===!1?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},E(o[g.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[a(F,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){O(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,l=>{m(),g.value=!1,l===null?(S(),i[n.value^1].value=v.value):B(),i[n.value].value=l},{immediate:!0})};M.value===!0?P(t):t()}return()=>{const t=[];return _.value!==null&&t.push(a("div",{key:"filler",style:_.value})),i[0].value!==null&&t.push(q(0)),i[1].value!==null&&t.push(q(1)),t.push(a(A,{name:"q-transition--fade"},$)),a("div",{key:"main",class:N.value,style:R.value,role:"img","aria-label":e.alt},t)}}});export{J as Q};