"use strict";(globalThis["webpackChunkphotobooth_app_frontend"]=globalThis["webpackChunkphotobooth_app_frontend"]||[]).push([[165],{14165:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Q});var o=n(59835),i=n(86970);const s={key:1,class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},r={key:2,class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},a=["innerHTML"],l={key:0},u={class:"row q-gutter-sm"},c=["innerHTML"],g=["innerHTML"],m=["innerHTML"],d=["innerHTML"],h={key:0},p={class:"q-gutter-sm"},_=["innerHTML"],w=["innerHTML"],S=(0,o._)("br",null,null,-1);function f(t,e,n,f,k,T){const y=(0,o.up)("q-spinner-grid"),v=(0,o.up)("countdown-timer"),A=(0,o.up)("q-icon"),L=(0,o.up)("q-btn"),M=(0,o.up)("q-page-sticky"),C=(0,o.up)("q-spinner-puff"),b=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(b,{class:"q-pa-none column full-height"},{default:(0,o.w5)((()=>[t.showPreview?((0,o.wg)(),(0,o.iD)("div",{key:0,id:"preview-stream",style:{"background-image":'url("/aquisition/stream.mjpg")'},class:(0,i.C_)(["full-width column justify-center content-center",{mirroreffect:t.livestreamMirror}])},null,2)):(0,o.kq)("",!0),t.showProcessing?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(y,{size:"20em"})])):(0,o.kq)("",!0),t.showCountdownCounting?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(v,{ref:"countdowntimer",duration:this.stateStore.duration,messageDuration:t.uiSettingsStore.uiSettings.TAKEPIC_MSG_TIME,messageText:t.uiSettingsStore.uiSettings.TAKEPIC_MSG_TEXT},null,8,["duration","messageDuration","messageText"])])):(0,o.kq)("",!0),t.showFrontpage?((0,o.wg)(),(0,o.iD)("div",{key:3,id:"frontpage_text",innerHTML:t.uiSettingsStore.uiSettings["FRONTPAGE_TEXT"]},null,8,a)):(0,o.kq)("",!0),(0,o.Wm)(M,{position:"bottom",offset:[0,25]},{default:(0,o.w5)((()=>[t.showFrontpage?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",u,[t.uiSettingsStore.uiSettings.show_takepic_on_frontpage?((0,o.wg)(),(0,o.j4)(L,{key:0,stack:"",color:"primary","no-caps":"",onClick:e[0]||(e[0]=e=>t.takePicture()),class:"action-button col-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"o_photo_camera"}),(0,o._)("div",{style:{"white-space":"nowrap"},class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TAKE_PHOTO")},null,8,c)])),_:1})):(0,o.kq)("",!0),t.uiSettingsStore.uiSettings.show_takecollage_on_frontpage?((0,o.wg)(),(0,o.j4)(L,{key:1,stack:"",color:"primary","no-caps":"",onClick:e[1]||(e[1]=e=>t.takeCollage()),class:"action-button col-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"o_auto_awesome_mosaic"}),(0,o._)("div",{style:{"white-space":"nowrap"},class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TAKE_COLLAGE")},null,8,g)])),_:1})):(0,o.kq)("",!0),t.uiSettingsStore.uiSettings.show_takeanimation_on_frontpage?((0,o.wg)(),(0,o.j4)(L,{key:2,stack:"",color:"primary","no-caps":"",onClick:e[2]||(e[2]=e=>t.takeAnimation()),class:"action-button col-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"o_gif_box"}),(0,o._)("div",{style:{"white-space":"nowrap"},class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TAKE_ANIMATION")},null,8,m)])),_:1})):(0,o.kq)("",!0),t.uiSettingsStore.uiSettings.show_takevideo_on_frontpage?((0,o.wg)(),(0,o.j4)(L,{key:3,stack:"",color:"primary","no-caps":"",onClick:e[3]||(e[3]=e=>t.takeVideo()),class:"action-button col-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"o_movie"}),(0,o._)("div",{style:{"white-space":"nowrap"},class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TAKE_VIDEO")},null,8,d)])),_:1})):(0,o.kq)("",!0)])])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(M,{position:"top-left",offset:[25,25]},{default:(0,o.w5)((()=>[t.showFrontpage?((0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",p,[t.uiSettingsStore.uiSettings.show_gallery_on_frontpage?((0,o.wg)(),(0,o.j4)(L,{key:0,color:"primary","no-caps":"",to:"/gallery",class:"action-button",id:"frontage-gallery-button",style:(0,i.j5)(t.uiSettingsStore.uiSettings.gallery_button_style)},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{left:"",name:"photo_library"}),(0,o._)("div",{class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TO_GALLERY")},null,8,_)])),_:1},8,["style"])):(0,o.kq)("",!0),t.uiSettingsStore.uiSettings.show_admin_on_frontpage?((0,o.wg)(),(0,o.j4)(L,{key:1,color:"secondary","no-caps":"",to:"/admin",class:"action-button"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{left:"",name:"admin_panel_settings"}),(0,o._)("div",{class:"gt-sm",innerHTML:t.$t("BTN_LABEL_MAINPAGE_TO_ADMIN")},null,8,w)])),_:1})):(0,o.kq)("",!0)])])):(0,o.kq)("",!0)])),_:1}),t.showRecording?((0,o.wg)(),(0,o.j4)(M,{key:4,position:"top",offset:[0,25],align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{color:"red",size:"7em"}),S,(0,o.Wm)(L,{flat:"",color:"red",label:"Stop recording (not yet implemented)"})])),_:1})):(0,o.kq)("",!0)])),_:1})}var k=n(91569),T=n(19302),y=n(67575),v=n(15639),A=n(96694),L=n(61957);const M={style:{width:"70vw",height:"70vh"}},C=["innerHTML"];function b(t,e,n,s,r,a){const l=(0,o.up)("q-circular-progress");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",M,[(0,o.wy)((0,o.Wm)(l,{"show-value":"",style:{width:"100%",height:"100%"},value:t.remainingSeconds,min:0,max:this.duration,reverse:"",size:"70vh",color:"primary",class:"text-secondary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(parseFloat(t.remainingSeconds.toFixed(0))),1)])),_:1},8,["value","max"]),[[L.F8,t.showCountdown]]),(0,o.wy)((0,o._)("div",{innerHTML:t.messageText},null,8,C),[[L.F8,t.showMessage]])],512)),[[L.F8,t.showBox]])}const P=(0,o.aZ)({name:"CountdownTimer",data(){return{intervalTimerId:null,remainingSeconds:0}},mounted(){this.startTimer()},beforeUnmount(){clearInterval(this.intervalTimerId)},computed:{showBox(){return this.remainingSeconds>0},showCountdown(){return+this.remainingSeconds>=this.messageDuration},showMessage(){return!this.showCountdown}},methods:{abortTimer(){clearInterval(this.intervalTimerId),this.remainingSeconds=0},startTimer(){console.log(`starting timer, duration=${this.duration}`),this.remainingSeconds=this.duration,this.intervalTimerId=setInterval((()=>{this.remainingSeconds-=.05,this.remainingSeconds<=0&&clearInterval(this.intervalTimerId)}),50)}},props:{duration:{type:Number,required:!0},messageDuration:{type:Number,default:.5},messageText:{type:String,default:"😃"}}});var q=n(11639),E=n(83302),I=n(69984),N=n.n(I);const H=(0,q.Z)(P,[["render",b]]),B=H;N()(P,"components",{QCircularProgress:E.Z});const j=(0,o.aZ)({components:{CountdownTimer:B},setup(){(0,T.Z)();const t=(0,y.h)(),e=(0,v.B)(),n=(0,A.R)();return{store:t,stateStore:e,uiSettingsStore:n,remoteProcedureCall:k.remoteProcedureCall}},methods:{takePicture(){(0,k.remoteProcedureCall)("/processing/chose/1pic")},takeCollage(){(0,k.remoteProcedureCall)("/processing/chose/collage")},takeAnimation(){(0,k.remoteProcedureCall)("/processing/chose/animation")},takeVideo(){(0,k.remoteProcedureCall)("/processing/chose/video")}},watch:{},computed:{showProcessing:{get(){const t="captures_completed"==this.stateStore.state,e="capture"==this.stateStore.state;return t||e}},showRecording:{get(){return"record"==this.stateStore.state}},livestreamMirror:{get(){return this.uiSettingsStore.uiSettings.livestream_mirror_effect}},showCountdownCounting:{get(){const t="counting"==this.stateStore.state;return this.stateStore.duration>0&&t}},showPreview:{get(){const t=!0,e="idle"==this.stateStore.state,n="record"==this.stateStore.state,o="counting"==this.stateStore.state;return t&&(e||o||n)}},showFrontpage:{get(){return"idle"==this.stateStore.state}}}});var D=n(69885),W=n(93040),x=n(30627),G=n(68879),Z=n(22857),F=n(5412);const O=(0,q.Z)(j,[["render",f]]),Q=O;N()(j,"components",{QPage:D.Z,QSpinnerGrid:W.Z,QPageSticky:x.Z,QBtn:G.Z,QIcon:Z.Z,QSpinnerPuff:F.Z})}}]);