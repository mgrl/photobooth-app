"use strict";(globalThis["webpackChunkphotobooth_app_frontend"]=globalThis["webpackChunkphotobooth_app_frontend"]||[]).push([[64],{68800:(e,t,i)=>{i.d(t,{Z:()=>F});var r=i(59835),l=i(86970);const a={key:4,class:"q-mr-sm"},o={class:"q-mr-sm"},s={class:"text-subtitle2"},n={key:0,class:"full-height"},d={key:0,class:"full-height"},c=["src"],g={key:1,class:"full-height"},m=["src"],u={key:1,class:"full-height"},p={key:0,class:"full-height"},h=["src"],y={key:1,class:"full-height"},w=["src"];function S(e,t,i,S,f,v){const b=(0,r.up)("q-btn"),_=(0,r.up)("q-space"),q=(0,r.up)("q-icon"),I=(0,r.up)("q-toolbar"),k=(0,r.up)("q-linear-progress"),x=(0,r.up)("q-header"),R=(0,r.up)("q-img"),D=(0,r.up)("q-card-section"),T=(0,r.up)("q-card"),Z=(0,r.up)("q-drawer"),C=(0,r.up)("q-carousel-slide"),Q=(0,r.up)("q-carousel"),j=(0,r.up)("vue-qrcode"),$=(0,r.up)("q-page-sticky"),E=(0,r.up)("q-page-container"),W=(0,r.up)("q-layout"),L=(0,r.Q2)("touch-swipe");return v.emptyRepository?((0,r.wg)(),(0,r.j4)(W,{key:1,view:"hhh Lpr ffr"},{default:(0,r.w5)((()=>[(0,r.Uk)("EMPTY")])),_:1})):((0,r.wg)(),(0,r.j4)(W,{key:0,view:"hhh Lpr ffr",onClick:v.abortTimer},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{elevated:"",class:"bg-primary text-white"},{default:(0,r.w5)((()=>[(0,r.Wm)(I,{class:"toolbar"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{dense:"",flat:"",icon:"close",size:"1.5rem",onClick:t[0]||(t[0]=t=>e.$emit("closeEvent"))}),(0,r.Wm)(_),S.uiSettingsStore.uiSettings.gallery_show_delete?((0,r.wg)(),(0,r.j4)(b,{key:0,flat:"",class:"q-mr-sm",icon:"delete",label:"Delete",onClick:t[1]||(t[1]=t=>{v.deleteItem(S.currentSlideId),e.$emit("closeEvent")})})):(0,r.kq)("",!0),S.uiSettingsStore.uiSettings.gallery_show_download?((0,r.wg)(),(0,r.j4)(b,{key:1,flat:"",class:"q-mr-sm",icon:"download",label:"Download",onClick:t[2]||(t[2]=e=>{S.openURL(i.itemRepository[S.currentSlideIndex]["full"])})})):(0,r.kq)("",!0),S.uiSettingsStore.uiSettings.gallery_show_print?((0,r.wg)(),(0,r.j4)(b,{key:2,flat:"",class:"q-mr-sm",icon:"print",label:"Print",onClick:t[3]||(t[3]=e=>v.printItem(S.currentSlideId))})):(0,r.kq)("",!0),S.uiSettingsStore.uiSettings.gallery_show_filter&&S.uiSettingsStore.uiSettings.gallery_filter_userselectable.length>0?((0,r.wg)(),(0,r.j4)(b,{key:3,flat:"",class:"q-mr-sm",icon:"filter",label:"Filter",disabled:!v.getFilterAvailable(i.itemRepository[S.currentSlideIndex]["media_type"]),onClick:S.toggleRightDrawer},null,8,["disabled","onClick"])):(0,r.kq)("",!0),(0,r.Wm)(_),i.singleItemView?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(q,{name:"tag"}),(0,r._)("span",null,(0,l.zw)(S.currentSlideIndex+1)+" of "+(0,l.zw)(i.itemRepository.length)+" total",1)])),(0,r.Wm)(_),(0,r._)("div",o,[(0,r.Wm)(q,{name:"image"}),(0,r.Uk)(" "+(0,l.zw)(i.itemRepository[S.currentSlideIndex]["caption"]),1)])])),_:1}),f.displayLinearProgressBar&&f.remainingSeconds>0?((0,r.wg)(),(0,r.j4)(k,{key:0,class:"absolute",value:f.remainingSecondsNormalized,"animation-speed":"200",color:"grey"},null,8,["value"])):(0,r.kq)("",!0),S.displayLoadingSpinner?((0,r.wg)(),(0,r.j4)(k,{key:1,class:"absolute",indeterminate:"","animation-speed":"2100",color:"primary"})):(0,r.kq)("",!0)])),_:1}),S.uiSettingsStore.uiSettings.gallery_show_filter&&v.getFilterAvailable(i.itemRepository[S.currentSlideIndex]["media_type"])?((0,r.wg)(),(0,r.j4)(Z,{key:0,class:"q-pa-sm",modelValue:S.rightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=e=>S.rightDrawerOpen=e),side:"right",overlay:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(S.uiSettingsStore.uiSettings.gallery_filter_userselectable,(e=>((0,r.wg)(),(0,r.j4)(T,{class:"q-mb-sm",key:e},{default:(0,r.w5)((()=>[(0,r.Wm)(D,{class:"q-pa-sm"},{default:(0,r.w5)((()=>[(0,r.Wm)(R,{class:"rounded-borders",loading:"lazy",onClick:t=>v.applyFilter(S.currentSlideId,e),src:`/mediaprocessing/preview/${S.currentSlideId}/${e}`},null,8,["onClick","src"])])),_:2},1024),(0,r.Wm)(D,{class:"q-pa-none q-pb-sm",align:"center"},{default:(0,r.w5)((()=>[(0,r._)("div",s,(0,l.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["modelValue"])):(0,r.kq)("",!0),(0,r.Wm)(E,{class:"q-pa-none galleryimagedetail full-height"},{default:(0,r.w5)((()=>[i.singleItemView?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(T,{class:"column no-wrap flex-center full-height q-pa-sm"},{default:(0,r.w5)((()=>["video"!=this.itemRepository[0].media_type?((0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("img",{draggable:!1,class:"rounded-borders full-height",style:{"object-fit":"contain","max-width":"100%","max-height":"100%"},src:this.itemRepository[0].preview},null,8,c)])):((0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("video",{draggable:!1,src:this.itemRepository[0].preview,class:"rounded-borders full-height",muted:"",autoplay:"",style:{"object-fit":"contain","max-width":"100%","max-height":"100%"},controls:"controls"},null,8,m)]))])),_:1})])):((0,r.wg)(),(0,r.iD)("div",u,[(0,r.wy)(((0,r.wg)(),(0,r.j4)(Q,{class:"",style:{width:"100%",height:"100%"},"control-type":"flat","control-color":"primary",swipeable:"",animated:"",modelValue:S.currentSlideId,"onUpdate:modelValue":t[5]||(t[5]=e=>S.currentSlideId=e),autoplay:S.autoplay,draggable:"false",arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onTransition:t[6]||(t[6]=(e,t)=>{S.currentSlideIndex=i.itemRepository.findIndex((t=>t.id===e)),v.abortTimer()})},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.slicedImages,(e=>((0,r.wg)(),(0,r.j4)(C,{key:e.id,name:e.id,class:"column no-wrap flex-center full-height q-pa-sm"},{default:(0,r.w5)((()=>["video"!=e.media_type?((0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("img",{draggable:!1,class:"rounded-borders full-height",style:{"object-fit":"contain","max-width":"100%","max-height":"100%"},src:e.preview},null,8,h)])):((0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("video",{draggable:!1,src:e.preview,class:"rounded-borders full-height",style:{"object-fit":"contain","max-width":"100%","max-height":"100%"},controls:"controls"},null,8,w)]))])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue","autoplay"])),[[L,S.handleSwipeDown,void 0,{mouse:!0,down:!0}]])])),S.uiSettingsStore.uiSettings.gallery_show_qrcode?((0,r.wg)(),(0,r.j4)($,{key:2,position:"top-right",offset:[30,30]},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(j,{type:"image/png",tag:"svg",margin:2,width:200,"error-correction-level":"low",color:{dark:"#111111",light:"#EEEEEE"},value:v.getImageQrData()},null,8,["value"])])])),_:1})):(0,r.kq)("",!0)])),_:1})])),_:1},8,["onClick"]))}i(69665);var f=i(20226),v=i(60499),b=i(96694),_=i(33752),q=i(19302);const I={props:{indexSelected:{type:Number,required:!0},itemRepository:{type:Array,required:!0},startTimerOnOpen:{type:Boolean,required:!1,default:!1},singleItemView:{type:Boolean,default:!1}},computed:{emptyRepository(){return!this.itemRepository||0==this.itemRepository.length},slicedImages(){console.log("changed");this.itemRepository.length;var e=Math.max(0,this.currentSlideIndex-2),t=Math.max(0,this.currentSlideIndex+3);return console.log(this.itemRepository.slice(e,t)),this.itemRepository.slice(e,t)}},beforeCreate(){console.log(this.indexSelected),this.currentSlideIndex=this.indexSelected,this.currentSlideId=this.itemRepository[this.indexSelected].id},data(){return{intervalTimerId:null,remainingSeconds:0,remainingSecondsNormalized:0,displayLinearProgressBar:!0}},setup(){const e=(0,b.R)(),t=(0,v.iH)(!1);(0,q.Z)();return{uiSettingsStore:e,openURL:_.Z,fabRight:(0,v.iH)(!1),currentSlideId:(0,v.iH)(""),currentSlideIndex:(0,v.iH)(0),autoplay:(0,v.iH)(!1),showFilterDialog:(0,v.iH)(!1),displayLoadingSpinner:(0,v.iH)(!1),rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value},handleSwipeDown({evt:e}){console.log("TODO: add method to close dialog programmatically")}}},components:{VueQrcode:f.ZP},mounted(){this.startTimerOnOpen&&this.startTimer()},beforeUnmount(){clearInterval(this.intervalTimerId)},methods:{async reloadImg(e){await fetch(e,{cache:"reload",mode:"no-cors"});const t=(new Date).getTime();document.body.querySelectorAll(`img[src*='${e}']`).forEach((i=>{i.src=e+"#"+t}))},applyFilter(e,t){this.displayLoadingSpinner=!0,this.$api.get(`/mediaprocessing/applyfilter/${e}/${t}`).then((t=>{const i=this.itemRepository.findIndex((t=>t.id===e));this.reloadImg(this.itemRepository[i].full),this.reloadImg(this.itemRepository[i].preview),this.reloadImg(this.itemRepository[i].thumbnail),this.displayLoadingSpinner=!1})).catch((e=>{console.log(e),this.displayLoadingSpinner=!1}))},deleteItem(e){this.$api.get("/mediacollection/delete",{params:{image_id:e}}).then((e=>{console.log(e)})).catch((e=>console.log(e)))},printItem(e){this.$api.get(`/print/item/${e}`).then((e=>{console.log(e),this.$q.notify({message:"Started printing...",type:"positive",spinner:!0})})).catch((e=>{e.response?(console.log(e.response),425==e.response.status?this.$q.notify({message:e.response.data["detail"],caption:"Print Service",type:"info"}):this.$q.notify({message:e.response.data["detail"],caption:"Print Service",type:"negative"})):e.request?console.error(e.request):console.error("Error",e.message)}))},getFilterAvailable(e){return["image","collageimage","animationimage"].includes(e)},getImageQrData(){return this.itemRepository[this.currentSlideIndex]["share_url"]},abortTimer(){clearInterval(this.intervalTimerId),this.remainingSeconds=0,this.remainingSecondsNormalized=0},startTimer(){var e=this.uiSettingsStore.uiSettings["AUTOCLOSE_NEW_ITEM_ARRIVED"];console.log(`starting newitemarrived timer, duration=${e}`),this.remainingSeconds=e,this.intervalTimerId=setInterval((()=>{this.remainingSecondsNormalized=this.remainingSeconds/e,this.remainingSeconds-=.05,this.remainingSeconds<=0&&(clearInterval(this.intervalTimerId),this.$router.push({path:"/"}))}),50)}}};var k=i(11639),x=i(20249),R=i(16602),D=i(51663),T=i(68879),Z=i(90136),C=i(22857),Q=i(8289),j=i(10906),$=i(44458),E=i(63190),W=i(70335),L=i(12133),O=i(97052),V=i(41694),z=i(30627),H=i(64871),P=i(69984),U=i.n(P);const A=(0,k.Z)(I,[["render",S]]),F=A;U()(I,"components",{QLayout:x.Z,QHeader:R.Z,QToolbar:D.Z,QBtn:T.Z,QSpace:Z.Z,QIcon:C.Z,QLinearProgress:Q.Z,QDrawer:j.Z,QCard:$.Z,QCardSection:E.Z,QImg:W.Z,QPageContainer:L.Z,QCarousel:O.Z,QCarouselSlide:V.Z,QPageSticky:z.Z}),U()(I,"directives",{TouchSwipe:H.Z})}}]);