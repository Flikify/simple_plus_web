import{d as D,k as J,r as u,D as K,o as v,H as h,w as d,g as s,a,h as r,G as L,t as U,c as Q,F as Y,j as q,A as S,i as B,E as X,J as $,Q as W,I as Z,M as ee,c1 as ae,de as le,L as te,P as oe,__tla as de}from"./index-BFAKpZuq.js";import{_ as se,__tla as ue}from"./Dialog.vue_vue_type_style_index_0_lang-CVdMJmZW.js";import{E as ce,__tla as re}from"./el-card-BsKqeqbW.js";import{a as ne,D as _e,__tla as pe}from"./dict-GZFn5X1r.js";import{d as me,h as ie}from"./tree-CxUbcu7T.js";import{c as w}from"./constants-BjZq39Lm.js";import{a as ve,__tla as fe}from"./index-Cd3fRuzI.js";import{b as ye,__tla as he}from"./index-BmKWNYYw.js";import{u as Se,__tla as ke}from"./useMessage-CXZcJfdD.js";let E,xe=Promise.all([(()=>{try{return de}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let V;V=D({name:"SystemRoleDataPermissionForm"}),E=D({...V,emits:["success"],setup(Ve,{expose:P,emit:I}){const{t:M}=J(),T=Se(),n=u(!1),f=u(!1),o=K({id:0,name:"",code:"",dataScope:void 0,dataScopeDeptIds:[]}),b=u(),k=u([]),_=u(!1),p=u(),m=u(!1),i=u(!0);P({open:async l=>{var e;n.value=!0,A(),k.value=ie(await ve()),o.id=l.id,o.name=l.name,o.code=l.code,o.dataScope=l.dataScope,(e=l.dataScopeDeptIds)==null||e.forEach(c=>{p.value.setChecked(c,!0,!1)})}});const g=async()=>{f.value=!0;try{const l={roleId:o.id,dataScope:o.dataScope,dataScopeDeptIds:o.dataScope!==w.DEPT_CUSTOM?[]:p.value.getCheckedKeys(!1)};await ye(l),T.success(M("common.updateSuccess")),n.value=!1,I("success")}finally{f.value=!1}},A=()=>{var l,e;m.value=!1,_.value=!1,i.value=!0,o.value={id:0,name:"",code:"",dataScope:void 0,dataScopeDeptIds:[]},(l=p.value)==null||l.setCheckedNodes([]),(e=b.value)==null||e.resetFields()},F=()=>{var e;const l=(e=p.value)==null?void 0:e.store.nodesMap;for(let c in l)l[c].expanded!==_.value&&(l[c].expanded=_.value)};return(l,e)=>{const c=X,y=$,O=W,R=Z,G=ee,x=ae,N=le,j=ce,C=te,z=se,H=oe;return v(),h(z,{modelValue:a(n),"onUpdate:modelValue":e[6]||(e[6]=t=>S(n)?n.value=t:null),title:"\u83DC\u5355\u6743\u9650",width:"800"},{footer:d(()=>[s(C,{disabled:a(f),type:"primary",onClick:g},{default:d(()=>[r("\u786E \u5B9A")]),_:1},8,["disabled"]),s(C,{onClick:e[5]||(e[5]=t=>n.value=!1)},{default:d(()=>[r("\u53D6 \u6D88")]),_:1})]),default:d(()=>[L((v(),h(G,{ref_key:"formRef",ref:b,model:a(o),"label-width":"80px"},{default:d(()=>[s(y,{label:"\u89D2\u8272\u540D\u79F0"},{default:d(()=>[s(c,null,{default:d(()=>[r(U(a(o).name),1)]),_:1})]),_:1}),s(y,{label:"\u89D2\u8272\u6807\u8BC6"},{default:d(()=>[s(c,null,{default:d(()=>[r(U(a(o).code),1)]),_:1})]),_:1}),s(y,{label:"\u6743\u9650\u8303\u56F4"},{default:d(()=>[s(R,{modelValue:a(o).dataScope,"onUpdate:modelValue":e[0]||(e[0]=t=>a(o).dataScope=t)},{default:d(()=>[(v(!0),Q(Y,null,q(a(ne)(a(_e).SYSTEM_DATA_SCOPE),t=>(v(),h(O,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[H,a(f)]]),a(o).dataScope===a(w).DEPT_CUSTOM?(v(),h(y,{key:0,label:"\u6743\u9650\u8303\u56F4",style:{display:"flex"}},{default:d(()=>[s(j,{class:"card",shadow:"never"},{header:d(()=>[r(" \u5168\u9009/\u5168\u4E0D\u9009: "),s(x,{modelValue:a(m),"onUpdate:modelValue":e[1]||(e[1]=t=>S(m)?m.value=t:null),"active-text":"\u662F","inactive-text":"\u5426","inline-prompt":"",onChange:e[2]||(e[2]=t=>{p.value.setCheckedNodes(m.value?k.value:[])})},null,8,["modelValue"]),r(" \u5168\u90E8\u5C55\u5F00/\u6298\u53E0: "),s(x,{modelValue:a(_),"onUpdate:modelValue":e[3]||(e[3]=t=>S(_)?_.value=t:null),"active-text":"\u5C55\u5F00","inactive-text":"\u6298\u53E0","inline-prompt":"",onChange:F},null,8,["modelValue"]),r(" \u7236\u5B50\u8054\u52A8(\u9009\u4E2D\u7236\u8282\u70B9\uFF0C\u81EA\u52A8\u9009\u62E9\u5B50\u8282\u70B9): "),s(x,{modelValue:a(i),"onUpdate:modelValue":e[4]||(e[4]=t=>S(i)?i.value=t:null),"active-text":"\u662F","inactive-text":"\u5426","inline-prompt":""},null,8,["modelValue"])]),default:d(()=>[s(N,{ref_key:"treeRef",ref:p,"check-strictly":!a(i),data:a(k),props:a(me),"default-expand-all":"","empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E","node-key":"id","show-checkbox":""},null,8,["check-strictly","data","props"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["modelValue"])}}})});export{E as _,xe as __tla};