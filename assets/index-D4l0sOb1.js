import{u as F,_ as T,a as U,__tla as j}from"./useTable-BtGlbW3q.js";import{_ as A,__tla as G}from"./ContentWrap.vue_vue_type_script_name_ContentWrap_setup_true_lang-B_WAHDHQ.js";import{d as v,r as w,e as H,S as O,o as s,c as q,g as e,w as _,a as t,G as m,H as n,h as p,F as B,_ as D,L as E,__tla as I}from"./index-BFAKpZuq.js";import{_ as J,__tla as K}from"./index-BEFBUQ_4.js";import{a as L,_ as N,__tla as Q}from"./MailTemplateForm.vue_vue_type_script_name_SystemMailTemplateForm_setup_true_lang-CgLCmb41.js";import{a as V,d as W,__tla as X}from"./index-DDx0wTyB.js";import{_ as Y,__tla as Z}from"./MailTemplateSendForm.vue_vue_type_script_name_SystemMailTemplateSendForm_setup_true_lang-OpfJ19dU.js";import{__tla as $}from"./Form-D1gpGGZr.js";import{__tla as tt}from"./el-virtual-list-D3QqqDEH.js";import{__tla as at}from"./el-tree-select-D2Yfd2St.js";import{__tla as rt}from"./InputPassword-4r1HDwa8.js";import"./_plugin-vue_export-helper-BCo6x5W8.js";import{__tla as et}from"./style.css_vue_type_style_index_0_src_true_lang-7NNkebYS.js";import{__tla as _t}from"./UploadImg-B1e7hDoh.js";import{__tla as lt}from"./el-image-viewer-CHbhbv9Z.js";import{__tla as ot}from"./useMessage-CXZcJfdD.js";import{__tla as st}from"./useForm-T-DExbFI.js";import"./download--D_IyRio.js";import{__tla as ct}from"./el-card-BsKqeqbW.js";import{__tla as it}from"./Dialog.vue_vue_type_style_index_0_lang-CVdMJmZW.js";import{__tla as mt}from"./formatTime-h5z-4YuG.js";import{__tla as nt}from"./useCrudSchemas-DgIC2RvR.js";import"./tree-CxUbcu7T.js";import{__tla as pt}from"./dict-GZFn5X1r.js";import{__tla as ut}from"./DictTag.vue_vue_type_script_lang-Dyh9FoSP.js";import"./color-DXkOL5Tu.js";import{__tla as yt}from"./formRules-DApCz1a_.js";let b,ft=Promise.all([(()=>{try{return j}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return I}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return yt}catch{}})()]).then(async()=>{let u;u=v({name:"SystemMailTemplate"}),b=v({...u,setup(ht){const{tableObject:l,tableMethods:y}=F({getListApi:V,delListApi:W}),{getList:f,setSearchParams:h}=y,d=w(),g=(S,a)=>{d.value.open(S,a)},k=w();return H(()=>{f()}),(S,a)=>{const z=J,R=D,c=E,x=T,C=A,M=U,i=O("hasPermi");return s(),q(B,null,[e(z,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://www.yixiang.co/mail"}),e(C,null,{default:_(()=>[e(x,{schema:t(L).searchSchema,onSearch:t(h),onReset:t(h)},{actionMore:_(()=>[m((s(),n(c,{type:"primary",plain:"",onClick:a[0]||(a[0]=r=>g("create"))},{default:_(()=>[e(R,{icon:"ep:plus",class:"mr-5px"}),p(" \u65B0\u589E ")]),_:1})),[[i,["system:mail-account:create"]]])]),_:1},8,["schema","onSearch","onReset"])]),_:1}),e(C,null,{default:_(()=>[e(M,{columns:t(L).tableColumns,data:t(l).tableList,loading:t(l).loading,pagination:{total:t(l).total},pageSize:t(l).pageSize,"onUpdate:pageSize":a[1]||(a[1]=r=>t(l).pageSize=r),currentPage:t(l).currentPage,"onUpdate:currentPage":a[2]||(a[2]=r=>t(l).currentPage=r)},{action:_(({row:r})=>[m((s(),n(c,{link:"",type:"primary",onClick:P=>{return o=r.id,void k.value.open(o);var o}},{default:_(()=>[p(" \u6D4B\u8BD5 ")]),_:2},1032,["onClick"])),[[i,["system:mail-template:send-mail"]]]),m((s(),n(c,{link:"",type:"primary",onClick:P=>g("update",r.id)},{default:_(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[i,["system:mail-template:update"]]]),m((s(),n(c,{link:"",type:"danger",onClick:P=>{return o=r.id,void y.delList(o,!1);var o}},{default:_(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[i,["system:mail-template:delete"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),e(N,{ref_key:"formRef",ref:d,onSuccess:t(f)},null,8,["onSuccess"]),e(Y,{ref_key:"sendFormRef",ref:k},null,512)],64)}}})});export{ft as __tla,b as default};