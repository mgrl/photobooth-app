import{Q as n}from"./QPage-bO4Jyp9b.js";import{_ as l,E as m,J as p,l as c,k as u,F as d,m as _,f,n as S,p as g,q as h}from"./index-DVgiKa8q.js";import{G as s}from"./GalleryImageDetail-DohGbeG1.js";import"./QSpace-BFpe6e4K.js";import"./QHeader-BG5cTNnj.js";import"./QLayout-k8QLW-q2.js";import"./open-url-BWUHGkdV.js";import"./use-panel-ClAqZh2X.js";import"./selection-BriQh9AH.js";import"./format-JHXGmCbL.js";import"./QPageSticky-DDyb30vQ.js";const C={components:{GalleryImageDetail:s},data(){return{}},computed:{},setup(){const t=m(),e=p(),o=c(),r=u();return{mainStore:t,mediacollectionStore:e,stateStore:r,uiSettingsStore:o,GalleryImageDetail:s,remoteProcedureCall:d}},methods:{userCloseViewer(){this.$router.push("/")}}};function P(t,e,o,r,x,a){const i=_("gallery-image-detail");return f(),S(n,{class:"q-pa-none fullscreen"},{default:g(()=>[h(i,{onCloseEvent:e[0]||(e[0]=y=>a.userCloseViewer()),itemRepository:[this.stateStore.last_captured_mediaitem],indexSelected:0,singleItemView:!0,startTimerOnOpen:!0,class:"full-height"},null,8,["itemRepository"])]),_:1})}const O=l(C,[["render",P],["__file","ItemPresenterPage.vue"]]);export{O as default};