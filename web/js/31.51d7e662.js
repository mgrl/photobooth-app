"use strict";(globalThis["webpackChunkqPhotobooth"]=globalThis["webpackChunkqPhotobooth"]||[]).push([[31],{666:(e,t,i)=>{i.d(t,{Z:()=>W});var l=i(9835),a=i(6970);const r={class:"q-mr-sm"},o={class:"q-mr-sm"},n={class:"absolute-bottom-left text-subtitle2"},s={class:"q-gutter-sm"};function d(e,t,i,d,m,g){const c=(0,l.up)("q-btn"),u=(0,l.up)("q-space"),h=(0,l.up)("q-icon"),p=(0,l.up)("q-toolbar"),w=(0,l.up)("q-linear-progress"),y=(0,l.up)("q-header"),S=(0,l.up)("q-img"),I=(0,l.up)("q-drawer"),f=(0,l.up)("q-carousel-slide"),v=(0,l.up)("q-carousel"),b=(0,l.up)("vue-qrcode"),k=(0,l.up)("q-page-sticky"),q=(0,l.up)("q-page-container"),_=(0,l.up)("q-layout"),x=(0,l.Q2)("close-popup"),D=(0,l.Q2)("touch-swipe");return(0,l.wg)(),(0,l.j4)(_,{view:"hhh Lpr ffr",onClick:g.abortTimer},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{elevated:"",class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[x]]),(0,l.Wm)(u),d.uiSettingsStore.uiSettings.gallery_show_delete?(0,l.wy)(((0,l.wg)(),(0,l.j4)(c,{key:0,flat:"",class:"q-mr-sm",icon:"delete",label:"Delete",onClick:t[0]||(t[0]=e=>g.deleteImage(d.currentSlideId))},null,512)),[[x]]):(0,l.kq)("",!0),d.uiSettingsStore.uiSettings.gallery_show_download?((0,l.wg)(),(0,l.j4)(c,{key:1,flat:"",class:"q-mr-sm",icon:"download",label:"Download",onClick:t[1]||(t[1]=e=>{d.openURL(i.itemRepository[d.currentSlideIndex]["full"])})})):(0,l.kq)("",!0),d.uiSettingsStore.uiSettings.gallery_show_print?((0,l.wg)(),(0,l.j4)(c,{key:2,flat:"",class:"q-mr-sm",icon:"print",label:"Print"})):(0,l.kq)("",!0),d.uiSettingsStore.uiSettings.gallery_show_filter?((0,l.wg)(),(0,l.j4)(c,{key:3,flat:"",class:"q-mr-sm",icon:"filter",label:"Filter",onClick:d.toggleRightDrawer},null,8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(u),(0,l._)("div",r,[(0,l.Wm)(h,{name:"tag"}),(0,l._)("span",null,(0,a.zw)(d.currentSlideIndex+1)+" of "+(0,a.zw)(i.itemRepository.length)+" total",1)]),(0,l.Wm)(u),(0,l._)("div",o,[(0,l.Wm)(h,{name:"image"}),(0,l.Uk)(" "+(0,a.zw)(i.itemRepository[d.currentSlideIndex]["caption"]),1)])])),_:1}),m.displayLinearProgressBar&&m.remainingSeconds>0?((0,l.wg)(),(0,l.j4)(w,{key:0,value:m.remainingSecondsNormalized,"animation-speed":"200",color:"grey"},null,8,["value"])):(0,l.kq)("",!0)])),_:1}),d.uiSettingsStore.uiSettings.gallery_show_filter?((0,l.wg)(),(0,l.j4)(I,{key:0,modelValue:d.rightDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=e=>d.rightDrawerOpen=e),side:"right",elevated:"",overlay:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.availableFilter,(e=>((0,l.wg)(),(0,l.j4)(S,{src:`/mediaprocessing/preview/${d.currentSlideId}/${e}`,key:e,onClick:t=>g.applyFilter(d.currentSlideId,e)},{default:(0,l.w5)((()=>[(0,l._)("div",n,(0,a.zw)(e),1)])),_:2},1032,["src","onClick"])))),128))])),_:1},8,["modelValue"])):(0,l.kq)("",!0),(0,l.Wm)(q,{class:"q-pa-none galleryimagedetail full-height"},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(v,{class:"bg-image",style:{width:"100%",height:"100%"},"control-type":"flat","control-color":"primary",swipeable:"",animated:"",modelValue:d.currentSlideId,"onUpdate:modelValue":t[3]||(t[3]=e=>d.currentSlideId=e),thumbnails:"",autoplay:d.autoplay,draggable:"false",arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onTransition:t[4]||(t[4]=(e,t)=>{d.currentSlideIndex=i.itemRepository.findIndex((t=>t.id===e)),g.abortTimer()})},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.slicedImages,(e=>((0,l.wg)(),(0,l.j4)(f,{"img-src":e.preview,key:e.id,name:e.id},null,8,["img-src","name"])))),128))])),_:1},8,["modelValue","autoplay"])),[[D,d.handleSwipeDown,void 0,{mouse:!0,down:!0}]]),(0,l.Wm)(k,{position:"top-right",offset:[30,30]},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(b,{type:"image/png",tag:"svg",margin:2,width:200,"error-correction-level":"low",color:{dark:"#111111",light:"#EEEEEE"},value:g.getImageQrData()},null,8,["value"])])])),_:1})])),_:1})])),_:1},8,["onClick"])}i(9665);var m=i(528),g=i(499),c=i(6694),u=i(3752);const h={props:{indexSelected:{type:Number,required:!0},itemRepository:{type:Array,required:!0}},computed:{slicedImages(){this.itemRepository.length;var e=Math.max(0,this.currentSlideIndex-2),t=Math.max(0,this.currentSlideIndex+3);return this.itemRepository.slice(e,t)}},beforeCreate(){console.log(this.indexSelected),this.currentSlideIndex=this.indexSelected,this.currentSlideId=this.itemRepository[this.indexSelected].id},data(){return{intervalTimerId:null,remainingSeconds:0,remainingSecondsNormalized:0,displayLinearProgressBar:!0,availableFilter:["original","_1977","aden","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster","valencia","walden","willow","xpro2"]}},setup(){const e=(0,c.R)(),t=(0,g.iH)(!1);return{uiSettingsStore:e,openURL:u.Z,fabRight:(0,g.iH)(!1),currentSlideId:(0,g.iH)(""),currentSlideIndex:(0,g.iH)(0),autoplay:(0,g.iH)(!1),showFilterDialog:(0,g.iH)(!1),rightDrawerOpen:t,toggleRightDrawer(){t.value=!t.value},handleSwipeDown({evt:e}){console.log("TODO: add method to close dialog programmatically")}}},components:{VueQrcode:m.ZP},mounted(){this.startTimer()},beforeUnmount(){clearInterval(this.intervalTimerId)},methods:{async reloadImg(e){await fetch(e,{cache:"reload",mode:"no-cors"});const t=(new Date).getTime();document.body.querySelectorAll(`img[src*='${e}']`).forEach((i=>{i.src=e+"?"+t})),document.body.querySelectorAll(`div[style*="background-image"][style*="${e}"]`).forEach((i=>i.style.backgroundImage=`url(${e}?${t})`))},applyFilter(e,t){this.$api.get(`/mediaprocessing/applyfilter/${e}/${t}`).then((t=>{const i=this.itemRepository.findIndex((t=>t.id===e));this.reloadImg(this.itemRepository[i].full),this.reloadImg(this.itemRepository[i].preview),this.reloadImg(this.itemRepository[i].thumbnail)})).catch((e=>console.log(e)))},deleteImage(e){this.$api.get("/mediacollection/delete",{params:{image_id:e}}).then((e=>{console.log(e),this.itemRepository.splice(this.currentSlideIndex,1)})).catch((e=>console.log(e)))},getImageDetail(e,t="thumbnail"){return this.itemRepository[e][t]},getImageQrData(){const e=String(this.uiSettingsStore.uiSettings.EXT_DOWNLOAD_URL).replace("{filename}",this.itemRepository[this.currentSlideIndex]["filename"]);return e},abortTimer(){clearInterval(this.intervalTimerId),this.remainingSeconds=0,this.remainingSecondsNormalized=0},startTimer(){var e=this.uiSettingsStore.uiSettings["AUTOCLOSE_NEW_ITEM_ARRIVED"];console.log(`starting newitemarrived timer, duration=${e}`),this.remainingSeconds=e,this.intervalTimerId=setInterval((()=>{this.remainingSecondsNormalized=this.remainingSeconds/e,this.remainingSeconds-=.05,this.remainingSeconds<=0&&(clearInterval(this.intervalTimerId),this.$router.push({path:"/"}))}),50)}}};var p=i(1639),w=i(7605),y=i(6602),S=i(1663),I=i(8879),f=i(136),v=i(2857),b=i(8289),k=i(906),q=i(335),_=i(2133),x=i(7052),D=i(1694),Z=i(627),R=i(2146),Q=i(4871),T=i(9984),C=i.n(T);const j=(0,p.Z)(h,[["render",d],["__scopeId","data-v-41e04494"]]),W=j;C()(h,"components",{QLayout:w.Z,QHeader:y.Z,QToolbar:S.Z,QBtn:I.Z,QSpace:f.Z,QIcon:v.Z,QLinearProgress:b.Z,QDrawer:k.Z,QImg:q.Z,QPageContainer:_.Z,QCarousel:x.Z,QCarouselSlide:D.Z,QPageSticky:Z.Z}),C()(h,"directives",{ClosePopup:R.Z,TouchSwipe:Q.Z})},5031:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var l=i(9835),a=i(6970);const r={class:"row justify-center q-gutter-sm"},o={class:"absolute-bottom text-subtitle2"};function n(e,t,i,n,s,d){const m=(0,l.up)("q-img"),g=(0,l.up)("q-card"),c=(0,l.up)("q-intersection"),u=(0,l.up)("gallery-image-detail"),h=(0,l.up)("q-dialog"),p=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(p,{padding:""},{default:(0,l.w5)((()=>[(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.store.gallery.images,((e,t)=>((0,l.wg)(),(0,l.j4)(c,{key:e.id,once:"",class:"preview-item"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{class:"q-ma-sm",onClick:e=>d.openPic(t)},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{src:d.getImageDetail(t),loading:"eager","no-transition":"","no-spinner":"",ratio:1},{default:(0,l.w5)((()=>[(0,l._)("div",o,(0,a.zw)(this.store.gallery.images[t].caption),1)])),_:2},1032,["src"])])),_:2},1032,["onClick"])])),_:2},1024)))),128))]),(0,l.Wm)(h,{"transition-show":"jump-up","transition-hide":"jump-down",modelValue:n.showImageDetail,"onUpdate:modelValue":t[0]||(t[0]=e=>n.showImageDetail=e),maximized:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{itemRepository:this.store.gallery.images,indexSelected:n.indexSelected,class:"full-height"},null,8,["itemRepository","indexSelected"])])),_:1},8,["modelValue"])])),_:1})}var s=i(7575),d=i(499),m=i(666);const g={components:{GalleryImageDetail:m.Z},setup(){const e=(0,s.h)();return{store:e,GalleryImageDetail:m.Z,indexSelected:(0,d.iH)(null),showImageDetail:(0,d.iH)(!1)}},computed:{numberOfImages:{get(){return console.log(Object.keys(this.store.gallery["images"]).length),Object.keys(this.store.gallery["images"]).length}},itemId(){return this.$route.params.id}},mounted(){this.$api.get("/mediacollection/getitems").then((e=>{if(console.log(e),this.store.gallery.images=e.data,this.itemId){console.log(`initial id given, try loading image id: ${this.itemId}`);const e=this.store.gallery.images.findIndex((e=>e.id===this.itemId));-1!=e?(console.log(`found image at index no: ${e}`),this.openPic(e)):console.error(`initial id given not found: ${this.itemId}`)}})).catch((e=>console.log(e)))},methods:{getImageDetail(e,t="thumbnail"){return this.store.gallery.images[e][t]},openPic(e){console.log(e),this.indexSelected=e,this.showImageDetail=!0}}};var c=i(1639),u=i(9885),h=i(1517),p=i(4458),w=i(335),y=i(2074),S=i(9984),I=i.n(S);const f=(0,c.Z)(g,[["render",n],["__scopeId","data-v-11f3b215"]]),v=f;I()(g,"components",{QPage:u.Z,QIntersection:h.Z,QCard:p.Z,QImg:w.Z,QDialog:y.Z})}}]);