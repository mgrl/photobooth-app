import{b as o,Q as u,a as n}from"./QItem-fsDWjnO7.js";import{Q as g}from"./QLinearProgress-DW6-tC99.js";import{Q as v}from"./QList-2-h9X_A0.js";import{_ as z,c as s,k as d,l as t,B as S,m as e,a9 as c,C as r,D as a,I as m,n as q,d as y,G as h,F as $,X as k,ae as w,ad as F,z as A,Y as I,p as D,K as V,L as N,r as L,af as P}from"./index-CShs4zwj.js";import{Q as j}from"./QSeparator-DY8ua0Bz.js";import{Q as G}from"./QPage-DdnQDtwQ.js";const R=D({name:"MainLayout",components:{QBtn:m},setup(){const l=N(),f=L(!1),B=L("");return{store:l,remoteProcedureCall:V,confirm_reset_counter:f,selected_field:B}},methods:{displayResetConfirm(l){this.selected_field=l,this.confirm_reset_counter=!0},confirmAction(){V("/api/admin/information/sttscntr/reset/"+this.selected_field),this.confirm_reset_counter=!1}}}),M={class:"row col-xs-12 col-sm-4 col-md-3 col-lg-3"},T={class:"q-ml-sm"};function Y(l,f,B,E,K,O){return s(),d(G,{id:"status-page",padding:""},{default:t(()=>[S("div",M,[e(k,{flat:"",class:"q-mr-md q-mb-md"},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{separator:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[r(a(l.$t("system information")),1)]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("data directory")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.data_directory),1)]),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(m,{flat:"",round:"",color:"primary",icon:"sym_o_folder_shared",to:"/admin/files"})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("app version")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.version),1)]),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(m,{flat:"",round:"",color:"primary",icon:"sym_o_upgrade",href:"https://pypi.org/project/photobooth-app/",target:"_blank"})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("cpu load")),1)]),_:1}),e(o,null,{default:t(()=>[e(g,{size:"lg",value:l.store.information.cpu1_5_15[0]/100},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("disk space")),1)]),_:1}),e(o,null,{default:t(()=>[e(g,{size:"lg",value:l.store.information.disk.used/l.store.information.disk.total},null,8,["value"])]),_:1}),e(o,null,{default:t(()=>[r(a((l.store.information.disk.free/1024**3).toFixed(1))+a(l.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("memory")),1)]),_:1}),e(o,null,{default:t(()=>[e(g,{size:"lg",value:l.store.information.memory.used/l.store.information.memory.total},null,8,["value"])]),_:1}),e(o,null,{default:t(()=>[r(a((l.store.information.memory.available/1024**3).toFixed(1))+a(l.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),l.store.information.battery_percent!==null?(s(),d(u,{key:0},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("Battery")),1)]),_:1}),e(o,null,{default:t(()=>[e(g,{size:"lg",value:l.store.information.battery_percent/100},null,8,["value"])]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.battery_percent.toFixed(0))+"% ",1)]),_:1})]),_:1})]),_:1})):q("",!0),Object.keys(l.store.information.temperatures).length>0?(s(),d(u,{key:1},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("System Temperatures")),1)]),_:1}),(s(!0),y($,null,h(l.store.information.temperatures,(i,_,p)=>(s(),d(u,{key:p},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(_),1)]),_:2},1024),e(o,null,{default:t(()=>[r(a(i),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):q("",!0)]),_:1})]),_:1})]),_:1}),e(k,{flat:"",class:"q-mr-md q-mb-md"},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{separator:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[r(a(l.$t("platform")),1)]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("hostname")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.platform_node),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("machine")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.$t("{platform_machine}, {cpu_count} cores",{platform_machine:l.store.information.platform_machine,cpu_count:l.store.information.platform_cpu_count})),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("platform system")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.platform_system)+" "+a(l.store.information.platform_release),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("computer model")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.model),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("python executable")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.python_executable),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("python version")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.platform_python_version),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),(s(!0),y($,null,h(l.store.information.backends,(i,_,p)=>(s(),d(k,{key:p,flat:"",class:"q-mr-md q-mb-md"},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{separator:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[r(a(l.$t("Backend Index: "))+a(p),1)]),_:2},1024),(s(!0),y($,null,h(i,(b,Q,C)=>(s(),d(u,{key:C},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(Q),1)]),_:2},1024),e(o,null,{default:t(()=>[r(a(b),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(k,{flat:"",class:"q-mr-md q-mb-md"},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{separator:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[r(a(l.$t("Stats counter")),1)]),_:1}),(s(!0),y($,null,h(l.store.information.stats_counter,(i,_,p)=>(s(),d(u,{key:p},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(_),1)]),_:2},1024),i&&typeof i=="object"?(s(),d(o,{key:0},{default:t(()=>[(s(!0),y($,null,h(i,(b,Q,C)=>(s(),d(o,{key:C},{default:t(()=>[r(a(Q)+": "+a(b),1)]),_:2},1024))),128))]),_:2},1024)):(s(),d(o,{key:1},{default:t(()=>[r(a(i),1)]),_:2},1024))]),_:2},1024),["last_reset"].includes(_)?q("",!0):(s(),d(n,{key:0,side:""},{default:t(()=>[e(m,{flat:"",color:"primary",icon:"sym_o_history",onClick:b=>l.displayResetConfirm(_)},null,8,["onClick"])]),_:2},1024))]),_:2},1024))),128))]),_:1})]),_:1}),e(j),e(w,{align:"right"},{default:t(()=>[e(m,{flat:"",color:"primary",icon:"sym_o_history",label:"reset",onClick:f[0]||(f[0]=i=>l.displayResetConfirm(""))})]),_:1})]),_:1})]),e(I,{modelValue:l.confirm_reset_counter,"onUpdate:modelValue":f[2]||(f[2]=i=>l.confirm_reset_counter=i)},{default:t(()=>[e(k,{class:"q-pa-sm"},{default:t(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:t(()=>[e(F,{icon:"sym_o_history",color:"primary","text-color":"white"}),S("span",T,a(l.$t("Are you sure to reset the counter?")),1)]),_:1}),e(w,{align:"right"},{default:t(()=>[A(e(m,{flat:"",label:"Cancel",color:"primary"},null,512),[[P]]),A(e(m,{label:"Yes, reset!",color:"primary",onClick:f[1]||(f[1]=i=>l.confirmAction())},null,512),[[P]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const x=z(R,[["render",Y],["__file","AdminStatusPage.vue"]]);export{x as default};