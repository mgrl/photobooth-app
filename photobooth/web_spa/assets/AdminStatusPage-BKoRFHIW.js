import{b as l,Q as u,a as n}from"./QItem-D24EQj1N.js";import{Q as b}from"./QLinearProgress-Dy-JWe56.js";import{Q as $}from"./QList-D88q294s.js";import{_ as S,j as w,I as y,J as P,r as V,K as z,f as s,n as i,p as a,B as Q,q as e,a9 as p,C as r,D as o,s as v,h,G as k,F as g,Y as c,ae as q,ad as A,z as C,X as F,af as B}from"./index-C5mRVXAi.js";import{Q as L}from"./QSeparator-DbcCTPJC.js";import{Q as j}from"./QPage-CUPuFSKq.js";const D=w({name:"MainLayout",components:{QBtn:y},setup(){const t=P(),f=V(!1);return{store:t,remoteProcedureCall:z,confirm_reset_stats_counter:f}},methods:{}}),I={class:"row col-xs-12 col-sm-4 col-md-3 col-lg-3"},N={class:"q-ml-sm"};function G(t,f,M,O,T,Y){return s(),i(j,{id:"status-page",padding:""},{default:a(()=>[Q("div",I,[e(c,{flat:"",class:"q-mr-md q-mb-md"},{default:a(()=>[e(p,null,{default:a(()=>[e($,{separator:""},{default:a(()=>[e(l,{header:""},{default:a(()=>[r(o(t.$t("system information")),1)]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("data directory")),1)]),_:1}),e(l,null,{default:a(()=>[r(o(t.store.information.data_directory),1)]),_:1})]),_:1}),e(n,{side:""},{default:a(()=>[e(y,{flat:"",round:"",color:"primary",icon:"sym_o_folder_shared",to:"/admin/files"})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("app version")),1)]),_:1}),e(l,null,{default:a(()=>[r(o(t.store.information.version),1)]),_:1})]),_:1}),e(n,{side:""},{default:a(()=>[e(y,{flat:"",round:"",color:"primary",icon:"sym_o_upgrade",href:"https://pypi.org/project/photobooth-app/",target:"_blank"})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("cpu load")),1)]),_:1}),e(l,null,{default:a(()=>[e(b,{size:"lg",value:t.store.information.cpu1_5_15[0]/100},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("disk space")),1)]),_:1}),e(l,null,{default:a(()=>[e(b,{size:"lg",value:t.store.information.disk.used/t.store.information.disk.total},null,8,["value"])]),_:1}),e(l,null,{default:a(()=>[r(o((t.store.information.disk.free/1024**3).toFixed(1))+o(t.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("memory")),1)]),_:1}),e(l,null,{default:a(()=>[e(b,{size:"lg",value:t.store.information.memory.used/t.store.information.memory.total},null,8,["value"])]),_:1}),e(l,null,{default:a(()=>[r(o((t.store.information.memory.available/1024**3).toFixed(1))+o(t.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),t.store.information.battery_percent!==null?(s(),i(u,{key:0},{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("Battery")),1)]),_:1}),e(l,null,{default:a(()=>[e(b,{size:"lg",value:t.store.information.battery_percent/100},null,8,["value"])]),_:1}),e(l,null,{default:a(()=>[r(o(t.store.information.battery_percent.toFixed(0))+"% ",1)]),_:1})]),_:1})]),_:1})):v("",!0),Object.keys(t.store.information.temperatures).length>0?(s(),i(u,{key:1},{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("System Temperatures")),1)]),_:1}),(s(!0),h(g,null,k(t.store.information.temperatures,(d,m,_)=>(s(),i(u,{key:_},{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(m),1)]),_:2},1024),e(l,null,{default:a(()=>[r(o(d),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):v("",!0)]),_:1})]),_:1})]),_:1}),e(c,{flat:"",class:"q-mr-md q-mb-md"},{default:a(()=>[e(p,null,{default:a(()=>[e($,{separator:""},{default:a(()=>[e(l,{header:""},{default:a(()=>[r(o(t.$t("platform")),1)]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("hostname")),1)]),_:1}),e(l,null,{default:a(()=>[r(o(t.store.information.platform_node),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("machine")),1)]),_:1}),e(l,null,{default:a(()=>[r(o(t.$t("{platform_machine}, {cpu_count} cores",{platform_machine:t.store.information.platform_machine,cpu_count:t.store.information.platform_cpu_count})),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("platform system")),1)]),_:1}),e(l,null,{default:a(()=>[r(o(t.store.information.platform_system)+" "+o(t.store.information.platform_release),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("computer model")),1)]),_:1}),e(l,null,{default:a(()=>[r(o(t.store.information.model),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("python executable")),1)]),_:1}),e(l,null,{default:a(()=>[r(o(t.store.information.python_executable),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(t.$t("python version")),1)]),_:1}),e(l,null,{default:a(()=>[r(o(t.store.information.platform_python_version),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{flat:"",class:"q-mr-md q-mb-md"},{default:a(()=>[e(p,null,{default:a(()=>[e($,{separator:""},{default:a(()=>[e(l,{header:""},{default:a(()=>[r(o(t.$t("primary backend")),1)]),_:1}),(s(!0),h(g,null,k(t.store.information.backends.primary,(d,m,_)=>(s(),i(u,{key:_},{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(m),1)]),_:2},1024),e(l,null,{default:a(()=>[r(o(d),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),Object.keys(t.store.information.backends.secondary).length>0?(s(),i(c,{key:0,flat:"",class:"q-mr-md q-mb-md"},{default:a(()=>[e(p,null,{default:a(()=>[e($,{separator:""},{default:a(()=>[e(l,{header:""},{default:a(()=>[r(o(t.$t("secondary backend")),1)]),_:1}),(s(!0),h(g,null,k(t.store.information.backends.secondary,(d,m,_)=>(s(),i(u,{key:_},{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(m),1)]),_:2},1024),e(l,null,{default:a(()=>[r(o(d),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):v("",!0),e(c,{flat:"",class:"q-mr-md q-mb-md"},{default:a(()=>[e(p,null,{default:a(()=>[e($,{separator:""},{default:a(()=>[e(l,{header:""},{default:a(()=>[r(o(t.$t("Stats counter")),1)]),_:1}),(s(!0),h(g,null,k(t.store.information.stats_counter,(d,m,_)=>(s(),i(u,{key:_},{default:a(()=>[e(n,null,{default:a(()=>[e(l,{caption:""},{default:a(()=>[r(o(m),1)]),_:2},1024),e(l,null,{default:a(()=>[r(o(d),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(L),e(q,{align:"right"},{default:a(()=>[e(y,{flat:"",color:"primary",icon:"sym_o_history",label:"reset",onClick:f[0]||(f[0]=d=>t.confirm_reset_stats_counter=!0)})]),_:1})]),_:1})]),e(F,{modelValue:t.confirm_reset_stats_counter,"onUpdate:modelValue":f[2]||(f[2]=d=>t.confirm_reset_stats_counter=d)},{default:a(()=>[e(c,{class:"q-pa-sm"},{default:a(()=>[e(p,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[e(A,{icon:"sym_o_history",color:"primary","text-color":"white"}),Q("span",N,o(t.$t("Are you sure to reset stats counter?")),1)]),_:1}),e(q,{align:"right"},{default:a(()=>[C(e(y,{flat:"",label:"Cancel",color:"primary"},null,512),[[B]]),C(e(y,{label:"Yes, reset!",color:"primary",onClick:f[1]||(f[1]=d=>t.remoteProcedureCall("/api/admin/information/sttscntr/reset"))},null,512),[[B]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const R=S(D,[["render",G],["__file","AdminStatusPage.vue"]]);export{R as default};
