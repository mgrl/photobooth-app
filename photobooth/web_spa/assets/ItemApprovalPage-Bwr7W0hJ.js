import{G as S,Q as b}from"./GalleryImageDetail-DG-6V-Dw.js";import{v as P,M as g,N as C,O as E,d as A,t as u,P as p,_ as h,J as O,R as k,l as L,k as I,K as d,f as M,n as T,p as o,q as a,I as _,Q as f,B as r,D as l}from"./index-EiYPTeVj.js";import{Q as y}from"./QPageSticky-ZBtmB5Kr.js";import{Q as G}from"./QPage-BaX-0KoS.js";import"./QHeader-BsMuEJuF.js";import"./QLayout-COzW_Aw2.js";import"./QLinearProgress-qpyGiK_j.js";import"./use-panel-BMCsgKW6.js";import"./selection-rSRnKrUp.js";import"./format-CJebrXOQ.js";import"./open-url-CKRJu5NA.js";const Q=P({name:"QBanner",props:{...g,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const{proxy:{$q:c}}=C(),n=E(e,c),v=A(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(n.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),s=A(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const i=[u("div",{class:"q-banner__avatar col-auto row items-center self-start"},p(t.avatar)),u("div",{class:"q-banner__content col text-body2"},p(t.default))],m=p(t.action);return m!==void 0&&i.push(u("div",{class:s.value},m)),u("div",{class:v.value+(e.inlineActions===!1&&m!==void 0?" q-banner--top-padding":""),role:"alert"},i)}}}),R={components:{},setup(){const e=O(),t=k(),c=L(),n=I();return{mainStore:e,mediacollectionStore:t,stateStore:n,configurationStore:c,GalleryImageDetail:S,remoteProcedureCall:d}},data(){return{}},computed:{imgToApproveSrc:{get(){return this.stateStore.last_captured_mediaitem&&this.stateStore.last_captured_mediaitem.preview}}},mounted(){},methods:{userConfirm(){d("/api/actions/confirm"),this.$router.push("/")},userReject(){d("/api/actions/reject"),this.$router.push("/")},userAbort(){d("/api/actions/abort"),this.$router.push("/")}}},$={class:"text-h5"},q={class:"text-subtitle2"};function B(e,t,c,n,v,s){return M(),T(G,{id:"itemapproval-page",class:"fullscreen flex flex-center"},{default:o(()=>[a(b,{src:s.imgToApproveSrc,fit:"contain",style:{height:"95%"}},null,8,["src"]),a(y,{position:"bottom",offset:[0,25]},{default:o(()=>[a(Q,{rounded:"","inline-actions":""},{action:o(()=>[a(_,{id:"item-approval-button-reject",color:"negative","no-caps":"",class:"",onClick:t[0]||(t[0]=i=>s.userReject())},{default:o(()=>[a(f,{left:"",size:"xl",name:"sym_o_thumb_down"}),r("div",null,l(e.$t("MSG_APPROVE_COLLAGE_ITEM_RETRY")),1)]),_:1}),a(_,{id:"item-approval-button-abort",flat:"",color:"grey","no-caps":"",class:"",onClick:t[1]||(t[1]=i=>s.userAbort())},{default:o(()=>[a(f,{left:"",size:"xl",name:"sym_o_cancel"}),r("div",null,l(e.$t("MSG_APPROVE_COLLAGE_ITEM_CANCEL_COLLAGE")),1)]),_:1}),a(_,{id:"item-approval-button-approve",color:"positive","no-caps":"",onClick:t[2]||(t[2]=i=>s.userConfirm())},{default:o(()=>[a(f,{left:"",size:"xl",name:"sym_o_thumb_up"}),r("div",null,[r("div",null,l(e.$t("MSG_APPROVE_COLLAGE_ITEM_APPROVE")),1)])]),_:1})]),default:o(()=>[r("div",null,[r("div",$,l(e.$t("TITLE_ITEM_APPROVAL")),1),r("div",q,l(e.$t("MSG_APPROVE_COLLAGE_ITEM_NO_OF_TOTAL",{no:n.stateStore.number_captures_taken,total:n.stateStore.total_captures_to_take})),1)])]),_:1})]),_:1})]),_:1})}const H=h(R,[["render",B],["__file","ItemApprovalPage.vue"]]);export{H as default};
