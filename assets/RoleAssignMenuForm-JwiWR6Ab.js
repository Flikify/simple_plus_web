import{d as V,k as G,r as o,D as J,o as b,H as g,w as l,g as t,a as u,h as i,G as L,t as w,A as y,E as X,J as q,c1 as z,de as B,M as O,L as Q,P as T,__tla as W}from"./index-BFAKpZuq.js";import{_ as Y,__tla as Z}from"./Dialog.vue_vue_type_style_index_0_lang-CVdMJmZW.js";import{E as $,__tla as ee}from"./el-card-BsKqeqbW.js";import{d as ae,h as le}from"./tree-CxUbcu7T.js";import{g as te,__tla as se}from"./index-CJCrSVTr.js";import{g as ue,a as de,__tla as oe}from"./index-BmKWNYYw.js";import{u as re,__tla as ne}from"./useMessage-CXZcJfdD.js";import{_ as ce}from"./_plugin-vue_export-helper-BCo6x5W8.js";let I,me=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ne}catch{}})()]).then(async()=>{let k;k=V({name:"SystemRoleAssignMenuForm"}),I=ce(V({...k,emits:["success"],setup(ie,{expose:E,emit:H}){const{t:M}=G(),R=re(),r=o(!1),n=o(!1),s=J({id:0,name:"",code:"",menuIds:[]}),v=o(),p=o([]),c=o(!1),d=o(),_=o(!1);E({open:async a=>{r.value=!0,A(),p.value=le(await te()),s.id=a.id,s.name=a.name,s.code=a.code,n.value=!0;try{s.value.menuIds=await ue(a.id),s.value.menuIds.forEach(e=>{d.value.setChecked(e,!0,!1)})}finally{n.value=!1}}});const U=async()=>{if(v&&await v.value.validate()){n.value=!0;try{const a={roleId:s.id,menuIds:[...d.value.getCheckedKeys(!1),...d.value.getHalfCheckedKeys()]};await de(a),R.success(M("common.updateSuccess")),r.value=!1,H("success")}finally{n.value=!1}}},A=()=>{var a,e;_.value=!1,c.value=!1,s.value={id:0,name:"",code:"",menuIds:[]},(a=d.value)==null||a.setCheckedNodes([]),(e=v.value)==null||e.resetFields()},F=()=>{d.value.setCheckedNodes(_.value?p.value:[])},K=()=>{var e;const a=(e=d.value)==null?void 0:e.store.nodesMap;for(let f in a)a[f].expanded!==c.value&&(a[f].expanded=c.value)};return(a,e)=>{const f=X,h=q,x=z,N=B,P=$,S=O,C=Q,j=Y,D=T;return b(),g(j,{modelValue:u(r),"onUpdate:modelValue":e[3]||(e[3]=m=>y(r)?r.value=m:null),title:"\u83DC\u5355\u6743\u9650"},{footer:l(()=>[t(C,{disabled:u(n),type:"primary",onClick:U},{default:l(()=>[i("\u786E \u5B9A")]),_:1},8,["disabled"]),t(C,{onClick:e[2]||(e[2]=m=>r.value=!1)},{default:l(()=>[i("\u53D6 \u6D88")]),_:1})]),default:l(()=>[L((b(),g(S,{ref_key:"formRef",ref:v,model:u(s),"label-width":"80px"},{default:l(()=>[t(h,{label:"\u89D2\u8272\u540D\u79F0"},{default:l(()=>[t(f,null,{default:l(()=>[i(w(u(s).name),1)]),_:1})]),_:1}),t(h,{label:"\u89D2\u8272\u6807\u8BC6"},{default:l(()=>[t(f,null,{default:l(()=>[i(w(u(s).code),1)]),_:1})]),_:1}),t(h,{label:"\u83DC\u5355\u6743\u9650"},{default:l(()=>[t(P,{class:"cardHeight"},{header:l(()=>[i(" \u5168\u9009/\u5168\u4E0D\u9009: "),t(x,{modelValue:u(_),"onUpdate:modelValue":e[0]||(e[0]=m=>y(_)?_.value=m:null),"active-text":"\u662F","inactive-text":"\u5426","inline-prompt":"",onChange:F},null,8,["modelValue"]),i(" \u5168\u90E8\u5C55\u5F00/\u6298\u53E0: "),t(x,{modelValue:u(c),"onUpdate:modelValue":e[1]||(e[1]=m=>y(c)?c.value=m:null),"active-text":"\u5C55\u5F00","inactive-text":"\u6298\u53E0","inline-prompt":"",onChange:K},null,8,["modelValue"])]),default:l(()=>[t(N,{ref_key:"treeRef",ref:d,data:u(p),props:u(ae),"empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019","node-key":"id","show-checkbox":""},null,8,["data","props"])]),_:1})]),_:1})]),_:1},8,["model"])),[[D,u(n)]])]),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-a445cbb4"]])});export{me as __tla,I as default};