import{d as k,k as R,r as m,D as B,o as i,H as _,w as u,g as r,a,h as b,G as H,c as h,F as S,j as A,t as j,A as G,X,J,Q,I as Y,aT as z,aU as W,M as Z,L as $,P as ee,__tla as ae}from"./index-BFAKpZuq.js";import{_ as le,__tla as te}from"./Dialog.vue_vue_type_style_index_0_lang-CVdMJmZW.js";import{c as re,D as P,a as ue,__tla as se}from"./dict-GZFn5X1r.js";import{g as oe,c as de,u as ce,__tla as me}from"./index-BDdbfyt2.js";import{C as w}from"./constants-BjZq39Lm.js";import{u as ie,__tla as pe}from"./useMessage-CXZcJfdD.js";let C,ne=Promise.all([(()=>{try{return ae}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return pe}catch{}})()]).then(async()=>{let v;v=k({name:"SystemSmsChannelForm"}),C=k({...v,emits:["success"],setup(_e,{expose:E,emit:I}){const{t:f}=R(),y=ie(),d=m(!1),V=m(""),c=m(!1),g=m(""),t=m({id:void 0,signature:"",code:"",status:w.ENABLE,remark:"",apiKey:"",apiSecret:"",callbackUrl:""}),K=B({signature:[{required:!0,message:"\u77ED\u4FE1\u7B7E\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u6E20\u9053\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u542F\u7528\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],apiKey:[{required:!0,message:"\u77ED\u4FE1 API \u7684\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),n=m();E({open:async(s,l)=>{if(d.value=!0,V.value=f("action."+s),g.value=s,M(),l){c.value=!0;try{t.value=await oe(l)}finally{c.value=!1}}}});const L=async()=>{if(n&&await n.value.validate()){c.value=!0;try{const s=t.value;g.value==="create"?(await de(s),y.success(f("common.createSuccess"))):(await ce(s),y.success(f("common.updateSuccess"))),d.value=!1,I("success")}finally{c.value=!1}}},M=()=>{var s;t.value={id:void 0,signature:"",code:"",status:w.ENABLE,remark:"",apiKey:"",apiSecret:"",callbackUrl:""},(s=n.value)==null||s.resetFields()};return(s,l)=>{const p=X,o=J,N=Q,q=Y,x=z,T=W,D=Z,U=$,F=le,O=ee;return i(),_(F,{modelValue:a(d),"onUpdate:modelValue":l[8]||(l[8]=e=>G(d)?d.value=e:null),title:a(V)},{footer:u(()=>[r(U,{disabled:a(c),type:"primary",onClick:L},{default:u(()=>[b("\u786E \u5B9A")]),_:1},8,["disabled"]),r(U,{onClick:l[7]||(l[7]=e=>d.value=!1)},{default:u(()=>[b("\u53D6 \u6D88")]),_:1})]),default:u(()=>[H((i(),_(D,{ref_key:"formRef",ref:n,model:a(t),rules:a(K),"label-width":"130px"},{default:u(()=>[r(o,{label:"\u77ED\u4FE1\u7B7E\u540D",prop:"signature"},{default:u(()=>[r(p,{modelValue:a(t).signature,"onUpdate:modelValue":l[0]||(l[0]=e=>a(t).signature=e),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u7B7E\u540D"},null,8,["modelValue"])]),_:1}),r(o,{label:"\u6E20\u9053\u7F16\u7801",prop:"code"},{default:u(()=>[r(q,{modelValue:a(t).code,"onUpdate:modelValue":l[1]||(l[1]=e=>a(t).code=e),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6E20\u9053\u7F16\u7801"},{default:u(()=>[(i(!0),h(S,null,A(a(re)(a(P).SYSTEM_SMS_CHANNEL_CODE),e=>(i(),_(N,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(o,{label:"\u542F\u7528\u72B6\u6001"},{default:u(()=>[r(T,{modelValue:a(t).status,"onUpdate:modelValue":l[2]||(l[2]=e=>a(t).status=e)},{default:u(()=>[(i(!0),h(S,null,A(a(ue)(a(P).COMMON_STATUS),e=>(i(),_(x,{key:e.value,label:e.value},{default:u(()=>[b(j(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(o,{label:"\u5907\u6CE8",prop:"remark"},{default:u(()=>[r(p,{modelValue:a(t).remark,"onUpdate:modelValue":l[3]||(l[3]=e=>a(t).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),r(o,{label:"\u77ED\u4FE1 API \u7684\u8D26\u53F7",prop:"apiKey"},{default:u(()=>[r(p,{modelValue:a(t).apiKey,"onUpdate:modelValue":l[4]||(l[4]=e=>a(t).apiKey=e),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1 API \u7684\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),r(o,{label:"\u77ED\u4FE1 API \u7684\u5BC6\u94A5",prop:"apiSecret"},{default:u(()=>[r(p,{modelValue:a(t).apiSecret,"onUpdate:modelValue":l[5]||(l[5]=e=>a(t).apiSecret=e),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1 API \u7684\u5BC6\u94A5"},null,8,["modelValue"])]),_:1}),r(o,{label:"\u77ED\u4FE1\u53D1\u9001\u56DE\u8C03 URL",prop:"callbackUrl"},{default:u(()=>[r(p,{modelValue:a(t).callbackUrl,"onUpdate:modelValue":l[6]||(l[6]=e=>a(t).callbackUrl=e),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u53D1\u9001\u56DE\u8C03 URL"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[O,a(c)]])]),_:1},8,["modelValue","title"])}}})});export{C as _,ne as __tla};
