"use strict";(globalThis["webpackChunkphotobooth_app_frontend"]=globalThis["webpackChunkphotobooth_app_frontend"]||[]).push([[138],{40018:(e,t,i)=>{i.d(t,{Z:()=>z});var r=i(59835),o=i(86970);const l={key:4,class:"q-mr-sm"},n={class:"q-mr-sm"},a={class:"absolute-bottom-left text-subtitle2"},s={key:0,class:"full-height"},d=["src"],c={key:1,class:"full-height"},m=["src"],u={class:"q-gutter-sm"};function p(e,t,i,p,g,h){const w=(0,r.up)("q-btn"),y=(0,r.up)("q-space"),S=(0,r.up)("q-icon"),f=(0,r.up)("q-toolbar"),v=(0,r.up)("q-linear-progress"),I=(0,r.up)("q-header"),_=(0,r.up)("q-img"),q=(0,r.up)("q-drawer"),b=(0,r.up)("q-card"),k=(0,r.up)("q-carousel-slide"),x=(0,r.up)("q-carousel"),C=(0,r.up)("vue-qrcode"),R=(0,r.up)("q-page-sticky"),Z=(0,r.up)("q-page-container"),T=(0,r.up)("q-layout"),D=(0,r.Q2)("touch-swipe");return(0,r.wg)(),(0,r.j4)(T,{view:"hhh Lpr ffr",onClick:h.abortTimer},{default:(0,r.w5)((()=>[(0,r.Wm)(I,{elevated:"",class:"bg-primary text-white"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{class:"toolbar"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,{dense:"",flat:"",icon:"close",size:"1.5rem",onClick:t[0]||(t[0]=t=>e.$emit("closeEvent"))}),(0,r.Wm)(y),p.uiSettingsStore.uiSettings.gallery_show_delete?((0,r.wg)(),(0,r.j4)(w,{key:0,flat:"",class:"q-mr-sm",icon:"delete",label:"Delete",onClick:t[1]||(t[1]=t=>{h.deleteItem(p.currentSlideId),e.$emit("closeEvent")})})):(0,r.kq)("",!0),p.uiSettingsStore.uiSettings.gallery_show_download?((0,r.wg)(),(0,r.j4)(w,{key:1,flat:"",class:"q-mr-sm",icon:"download",label:"Download",onClick:t[2]||(t[2]=e=>{p.openURL(i.itemRepository[p.currentSlideIndex]["full"])})})):(0,r.kq)("",!0),p.uiSettingsStore.uiSettings.gallery_show_print?((0,r.wg)(),(0,r.j4)(w,{key:2,flat:"",class:"q-mr-sm",icon:"print",label:"Print",onClick:t[3]||(t[3]=e=>h.printItem(p.currentSlideId))})):(0,r.kq)("",!0),p.uiSettingsStore.uiSettings.gallery_show_filter&&p.uiSettingsStore.uiSettings.gallery_filter_userselectable.length>0?((0,r.wg)(),(0,r.j4)(w,{key:3,flat:"",class:"q-mr-sm",icon:"filter",label:"Filter",onClick:p.toggleRightDrawer},null,8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(y),i.singleItemView?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(S,{name:"tag"}),(0,r._)("span",null,(0,o.zw)(p.currentSlideIndex+1)+" of "+(0,o.zw)(i.itemRepository.length)+" total",1)])),(0,r.Wm)(y),(0,r._)("div",n,[(0,r.Wm)(S,{name:"image"}),(0,r.Uk)(" "+(0,o.zw)(i.itemRepository[p.currentSlideIndex]["caption"]),1)])])),_:1}),g.displayLinearProgressBar&&g.remainingSeconds>0?((0,r.wg)(),(0,r.j4)(v,{key:0,class:"absolute",value:g.remainingSecondsNormalized,"animation-speed":"200",color:"grey"},null,8,["value"])):(0,r.kq)("",!0),p.displayLoadingSpinner?((0,r.wg)(),(0,r.j4)(v,{key:1,class:"absolute",indeterminate:"","animation-speed":"2100",color:"primary"})):(0,r.kq)("",!0)])),_:1}),p.uiSettingsStore.uiSettings.gallery_show_filter?((0,r.wg)(),(0,r.j4)(q,{key:0,modelValue:p.rightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=e=>p.rightDrawerOpen=e),side:"right",elevated:"",overlay:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(p.uiSettingsStore.uiSettings.gallery_filter_userselectable,(e=>((0,r.wg)(),(0,r.j4)(_,{src:`/mediaprocessing/preview/${p.currentSlideId}/${e}`,key:e,onClick:t=>h.applyFilter(p.currentSlideId,e)},{default:(0,r.w5)((()=>[(0,r._)("div",a,(0,o.zw)(e),1)])),_:2},1032,["src","onClick"])))),128))])),_:1},8,["modelValue"])):(0,r.kq)("",!0),(0,r.Wm)(Z,{class:"q-pa-none galleryimagedetail full-height"},{default:(0,r.w5)((()=>[i.singleItemView?((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(b,{class:"column no-wrap flex-center full-height q-pa-sm"},{default:(0,r.w5)((()=>[(0,r._)("img",{draggable:!1,class:"rounded-borders full-height",style:{"object-fit":"contain","max-width":"100%","max-height":"100%"},src:this.itemRepository[0].preview},null,8,d)])),_:1})])):((0,r.wg)(),(0,r.iD)("div",c,[(0,r.wy)(((0,r.wg)(),(0,r.j4)(x,{class:"",style:{width:"100%",height:"100%"},"control-type":"flat","control-color":"primary",swipeable:"",animated:"",modelValue:p.currentSlideId,"onUpdate:modelValue":t[5]||(t[5]=e=>p.currentSlideId=e),autoplay:p.autoplay,draggable:"false",arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onTransition:t[6]||(t[6]=(e,t)=>{p.currentSlideIndex=i.itemRepository.findIndex((t=>t.id===e)),h.abortTimer()})},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.slicedImages,(e=>((0,r.wg)(),(0,r.j4)(k,{key:e.id,name:e.id,class:"column no-wrap flex-center full-height q-pa-sm"},{default:(0,r.w5)((()=>[(0,r._)("img",{draggable:!1,class:"rounded-borders full-height",style:{"object-fit":"contain","max-width":"100%","max-height":"100%"},src:e.preview},null,8,m)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue","autoplay"])),[[D,p.handleSwipeDown,void 0,{mouse:!0,down:!0}]])])),(0,r.Wm)(R,{position:"top-right",offset:[30,30]},{default:(0,r.w5)((()=>[(0,r._)("div",u,[(0,r.Wm)(C,{type:"image/png",tag:"svg",margin:2,width:200,"error-correction-level":"low",color:{dark:"#111111",light:"#EEEEEE"},value:h.getImageQrData()},null,8,["value"])])])),_:1})])),_:1})])),_:1},8,["onClick"])}i(69665);var g=i(20226),h=i(60499),w=i(96694),y=i(33752),S=i(19302);const f={props:{indexSelected:{type:Number,required:!0},itemRepository:{required:!0},startTimerOnOpen:{type:Boolean,required:!1,default:!1},singleItemView:{type:Boolean,default:!1}},computed:{slicedImages(){console.log("changed");this.itemRepository.length;var e=Math.max(0,this.currentSlideIndex-2),t=Math.max(0,this.currentSlideIndex+3);return console.log(this.itemRepository.slice(e,t)),this.itemRepository.slice(e,t)}},beforeCreate(){console.log(this.indexSelected),this.currentSlideIndex=this.indexSelected,this.currentSlideId=this.itemRepository[this.indexSelected].id},data(){return{intervalTimerId:null,remainingSeconds:0,remainingSecondsNormalized:0,displayLinearProgressBar:!0}},setup(){const e=(0,w.R)(),t=(0,h.iH)(!1);(0,S.Z)();return{uiSettingsStore:e,openURL:y.Z,fabRight:(0,h.iH)(!1),currentSlideId:(0,h.iH)(""),currentSlideIndex:(0,h.iH)(0),autoplay:(0,h.iH)(!1),showFilterDialog:(0,h.iH)(!1),displayLoadingSpinner:(0,h.iH)(!1),rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value},handleSwipeDown({evt:e}){console.log("TODO: add method to close dialog programmatically")}}},components:{VueQrcode:g.ZP},mounted(){this.startTimerOnOpen&&this.startTimer()},beforeUnmount(){clearInterval(this.intervalTimerId)},methods:{async reloadImg(e){await fetch(e,{cache:"reload",mode:"no-cors"});const t=(new Date).getTime();document.body.querySelectorAll(`img[src*='${e}']`).forEach((i=>{i.src=e+"#"+t}))},applyFilter(e,t){this.displayLoadingSpinner=!0,this.$api.get(`/mediaprocessing/applyfilter/${e}/${t}`).then((t=>{const i=this.itemRepository.findIndex((t=>t.id===e));this.reloadImg(this.itemRepository[i].full),this.reloadImg(this.itemRepository[i].preview),this.reloadImg(this.itemRepository[i].thumbnail),this.displayLoadingSpinner=!1})).catch((e=>{console.log(e),this.displayLoadingSpinner=!1}))},deleteItem(e){this.$api.get("/mediacollection/delete",{params:{image_id:e}}).then((e=>{console.log(e),this.itemRepository.splice(this.currentSlideIndex,1)})).catch((e=>console.log(e)))},printItem(e){this.$api.get(`/print/item/${e}`).then((e=>{console.log(e),this.$q.notify({message:"Started printing...",type:"positive",spinner:!0})})).catch((e=>{e.response?(console.log(e.response),425==e.response.status?this.$q.notify({message:e.response.data["detail"],caption:"Print Service",type:"info"}):this.$q.notify({message:e.response.data["detail"],caption:"Print Service",type:"negative"})):e.request?console.error(e.request):console.error("Error",e.message)}))},getImageQrData(){return this.itemRepository[this.currentSlideIndex]["share_url"]},abortTimer(){clearInterval(this.intervalTimerId),this.remainingSeconds=0,this.remainingSecondsNormalized=0},startTimer(){var e=this.uiSettingsStore.uiSettings["AUTOCLOSE_NEW_ITEM_ARRIVED"];console.log(`starting newitemarrived timer, duration=${e}`),this.remainingSeconds=e,this.intervalTimerId=setInterval((()=>{this.remainingSecondsNormalized=this.remainingSeconds/e,this.remainingSeconds-=.05,this.remainingSeconds<=0&&(clearInterval(this.intervalTimerId),this.$router.push({path:"/"}))}),50)}}};var v=i(11639),I=i(77605),_=i(16602),q=i(51663),b=i(68879),k=i(90136),x=i(22857),C=i(8289),R=i(10906),Z=i(70335),T=i(12133),D=i(44458),Q=i(97052),$=i(41694),j=i(30627),W=i(64871),P=i(69984),E=i.n(P);const O=(0,v.Z)(f,[["render",p],["__scopeId","data-v-e4858eb2"]]),z=O;E()(f,"components",{QLayout:I.Z,QHeader:_.Z,QToolbar:q.Z,QBtn:b.Z,QSpace:k.Z,QIcon:x.Z,QLinearProgress:C.Z,QDrawer:R.Z,QImg:Z.Z,QPageContainer:T.Z,QCard:D.Z,QCarousel:Q.Z,QCarouselSlide:$.Z,QPageSticky:j.Z}),E()(f,"directives",{TouchSwipe:W.Z})},12138:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var r=i(59835),o=i(86970);const l={class:"q-gutter-sm"},n=(0,r._)("div",null,"Try again!",-1),a=(0,r._)("br",null,null,-1);function s(e,t,i,s,d,c){const m=(0,r.up)("gallery-image-detail"),u=(0,r.up)("q-icon"),p=(0,r.up)("q-btn"),g=(0,r.up)("q-page-sticky"),h=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(h,{class:"q-pa-none fullscreen"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{onCloseEvent:t[0]||(t[0]=e=>c.userCloseViewer()),itemRepository:this.mediacollectionStore.collection,indexSelected:0,singleItemView:!0,startTimerOnOpen:!c.approval,class:"full-height"},null,8,["itemRepository","startTimerOnOpen"]),c.approval?((0,r.wg)(),(0,r.j4)(g,{key:0,position:"bottom",offset:[0,25]},{default:(0,r.w5)((()=>[(0,r._)("div",l,[(0,r.Wm)(p,{color:"secondary","no-caps":"",onClick:t[1]||(t[1]=e=>c.userReject()),class:"q-mr-xl"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{left:"",size:"7em",name:"thumb_down"}),n])),_:1}),(0,r.Wm)(p,{color:"primary","no-caps":"",onClick:t[2]||(t[2]=e=>c.userConfirm())},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{left:"",size:"7em",name:"thumb_up"}),(0,r._)("div",null,[(0,r.Uk)("Awesome, next!"),a,(0,r.Uk)((0,o.zw)(this.mainStore.statemachine.current_capture_no)+" / "+(0,o.zw)(this.mainStore.statemachine.total_captures_no),1)])])),_:1})])])),_:1})):(0,r.kq)("",!0)])),_:1})}i(69665);var d=i(67575),c=i(33630),m=i(96694),u=i(40018),p=i(91569);const g={components:{GalleryImageDetail:u.Z},data(){return{intervalTimerId:null,remainingSeconds:0,remainingSecondsNormalized:0,displayLinearProgressBar:!0,showImageDetail:!0}},computed:{approval:{get(){return"true"===this.$route.query.approval}}},setup(){const e=(0,d.h)(),t=(0,c.r)(),i=(0,m.R)();return{mainStore:e,mediacollectionStore:t,uiSettingsStore:i,GalleryImageDetail:u.Z,remoteProcedureCall:p.remoteProcedureCall}},mounted(){},beforeUnmount(){},methods:{userConfirm(){(0,p.remoteProcedureCall)("/processing/cmd/confirm"),this.$router.push("/")},userReject(){(0,p.remoteProcedureCall)("/processing/cmd/reject"),this.$router.push("/")},userCloseViewer(){this.approval&&(0,p.remoteProcedureCall)("/processing/cmd/abort"),this.$router.push("/")}}};var h=i(11639),w=i(69885),y=i(30627),S=i(68879),f=i(22857),v=i(69984),I=i.n(v);const _=(0,h.Z)(g,[["render",s]]),q=_;I()(g,"components",{QPage:w.Z,QPageSticky:y.Z,QBtn:S.Z,QIcon:f.Z})}}]);