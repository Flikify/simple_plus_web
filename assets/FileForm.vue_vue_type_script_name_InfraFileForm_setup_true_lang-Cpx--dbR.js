import{_ as H,__tla as I}from"./Dialog.vue_vue_type_style_index_0_lang-_y4YQ6P8.js";import{d as x,k as P,r as s,o as R,H as S,w as r,g as p,a as e,h as _,A as k,f as d,a2 as Y,bY as E,a6 as G,L as J,__tla as K}from"./index-06lJR0i3.js";import{u as M,__tla as N}from"./useMessage-CB2pR6zL.js";let F,O=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return N}catch{}})()]).then(async()=>{let m,f,v,h;m=d("i",{class:"el-icon-upload"},null,-1),f=d("div",{class:"el-upload__text"},[_(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),d("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1),v=d("div",{class:"el-upload__tip",style:{color:"red"}}," \u63D0\u793A\uFF1A\u4EC5\u5141\u8BB8\u5BFC\u5165 jpg\u3001png\u3001gif \u683C\u5F0F\u6587\u4EF6\uFF01 ",-1),h=x({name:"InfraFileForm"}),F=x({...h,emits:["success"],setup(Q,{expose:V,emit:j}){const{t:A}=P(),u=M(),l=s(!1),o=s(!1),g=s(),i=s([]),y=s({path:""}),c=s();V({open:async()=>{l.value=!0,w()}});const C=a=>{y.value.path=a.name},L=()=>{var a;i.value.length!=0?(g.value={Authorization:"Bearer "+Y(),"tenant-id":E()},(a=e(c))==null||a.submit()):u.error("\u8BF7\u4E0A\u4F20\u6587\u4EF6")},U=()=>{var a;l.value=!1,o.value=!1,(a=e(c))==null||a.clearFiles(),u.success(A("common.createSuccess")),j("success")},q=()=>{u.error("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u60A8\u91CD\u65B0\u4E0A\u4F20\uFF01"),o.value=!1},w=()=>{var a;o.value=!1,(a=c.value)==null||a.clearFiles()},z=()=>{u.error("\u6700\u591A\u53EA\u80FD\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\uFF01")};return(a,t)=>{const B=G,b=J,D=H;return R(),S(D,{modelValue:e(l),"onUpdate:modelValue":t[2]||(t[2]=n=>k(l)?l.value=n:null),title:"\u4E0A\u4F20\u6587\u4EF6"},{footer:r(()=>[p(b,{disabled:e(o),type:"primary",onClick:L},{default:r(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),p(b,{onClick:t[1]||(t[1]=n=>l.value=!1)},{default:r(()=>[_("\u53D6 \u6D88")]),_:1})]),default:r(()=>[p(B,{ref_key:"uploadRef",ref:c,"file-list":e(i),"onUpdate:fileList":t[0]||(t[0]=n=>k(i)?i.value=n:null),action:e("https://nq.92coco.cn:8443/admin-api/infra/file/upload"),"auto-upload":!1,data:e(y),disabled:e(o),headers:e(g),limit:1,"on-change":C,"on-error":q,"on-exceed":z,"on-success":U,accept:".jpg, .png, .gif",drag:""},{tip:r(()=>[v]),default:r(()=>[m,f]),_:1},8,["file-list","action","data","disabled","headers"])]),_:1},8,["modelValue"])}}})});export{F as _,O as __tla};