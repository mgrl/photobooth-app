import{Q as r}from"./QImg-ixEkLkVk.js";import{d,f as s,g as i,n as t,s as a,m as o,$ as l,Q as c,X as u}from"./index-92zKjGEv.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const m={key:0,class:"full-height full-width"},p={key:1,class:"full-height"},h=["src"],x=d({__name:"MediaItemPreviewViewer",props:{item:{}},setup(n){return(e,b)=>e.item.media_type!="video"?(s(),i("div",m,[t(r,{draggable:!1,class:"full-height",fit:"contain",src:`/media/preview/${e.item.id}`},null,8,["src"])])):(s(),i("div",p,[a("video",{draggable:!1,src:`/media/preview/${e.item.id}`,class:"rounded-borders full-height",muted:"",autoplay:"",style:{"object-fit":"contain","max-width":"100%","max-height":"100%"},loop:"",playsinline:"",controls:"",controlslist:"nofullscreen nodownload noremoteplayback noplaybackrate",disablepictureinpicture:""},null,8,h)]))}}),_={},w={class:"window-height window-width row justify-center items-center flex flex-center"};function g(n,e){return s(),i("div",w,[t(u,{class:"q-pa-md no-shadow",bordered:""},{default:o(()=>[t(l,null,{default:o(()=>e[0]||(e[0]=[a("div",{class:"text-h5 text-weight-bold"},"🔎 oh no, item not found 🤷",-1)])),_:1}),t(l,null,{default:o(()=>e[1]||(e[1]=[a("p",null,"We have been looking everywhere but the item was not found. Maybe it was deleted?",-1)])),_:1}),t(l,null,{default:o(()=>[t(c,{rounded:"",color:"accent",label:"go back to home",class:"full-width",to:"/"})]),_:1}),t(l,null,{default:o(()=>e[2]||(e[2]=[a("p",null,"If this happens again, please report a bug.",-1)])),_:1})]),_:1})])}const Q=f(_,[["render",g]]);export{Q as I,x as _};