import{d as N,k as V,r as v,D as W,o as m,H as y,w as t,g as n,a as d,h as f,G as q,A,X as D,J as O,M as E,L as U,P as F,__tla as G}from"./index-BFAKpZuq.js";import{_ as H,__tla as J}from"./Dialog.vue_vue_type_style_index_0_lang-CVdMJmZW.js";import{b as L,u as M,__tla as X}from"./index-BIEDgooT.js";import{u as j,__tla as z}from"./useMessage-CXZcJfdD.js";let g,B=Promise.all([(()=>{try{return G}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return z}catch{}})()]).then(async()=>{g=N({__name:"StoreOrderRemark",emits:["success"],setup(K,{expose:I,emit:_}){const{t:u}=V(),P=j(),o=v(!1),c=v(""),a=v(!1),k=v(""),r=v({id:void 0,orderId:void 0,extendOrderId:void 0,uid:void 0,realName:void 0,userPhone:void 0,userAddress:void 0,cartId:void 0,freightPrice:void 0,totalNum:void 0,totalPrice:void 0,totalPostage:void 0,payPrice:void 0,payPostage:void 0,deductionPrice:void 0,couponId:void 0,couponPrice:void 0,paid:void 0,payTime:void 0,payType:void 0,status:void 0,refundStatus:void 0,refundReasonWapImg:void 0,refundReasonWapExplain:void 0,refundReasonTime:void 0,refundReasonWap:void 0,refundReason:void 0,refundPrice:void 0,deliverySn:void 0,deliveryName:void 0,deliveryType:void 0,deliveryId:void 0,gainIntegral:void 0,useIntegral:void 0,payIntegral:void 0,backIntegral:void 0,mark:void 0,unique:void 0,remark:void 0,merId:void 0,combinationId:void 0,pinkId:void 0,cost:void 0,seckillId:void 0,bargainId:void 0,verifyCode:void 0,storeId:void 0,shippingType:void 0,isChannel:void 0,isSystemDel:void 0}),h=W({totalPrice:[{required:!0,message:"\u8BA2\u5355\u603B\u4EF7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],payPrice:[{required:!0,message:"\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],gainIntegral:[{required:!0,message:"\u6D88\u8D39\u8D5A\u53D6\u79EF\u5206\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),l=v();I({open:async(i,e)=>{if(o.value=!0,c.value=u("action."+i),k.value=i,R(),e){a.value=!0;try{r.value=await L(e)}finally{a.value=!1}}}});const b=async()=>{if(l&&await l.value.validate()){a.value=!0;try{const i=r.value;await M(i),P.success(u("common.updateSuccess")),o.value=!1,_("success")}finally{a.value=!1}}},R=()=>{var i;r.value={id:void 0,orderId:void 0,extendOrderId:void 0,uid:void 0,realName:void 0,userPhone:void 0,userAddress:void 0,cartId:void 0,freightPrice:void 0,totalNum:void 0,totalPrice:void 0,totalPostage:void 0,payPrice:void 0,payPostage:void 0,deductionPrice:void 0,couponId:void 0,couponPrice:void 0,paid:void 0,payTime:void 0,payType:void 0,status:void 0,refundStatus:void 0,refundReasonWapImg:void 0,refundReasonWapExplain:void 0,refundReasonTime:void 0,refundReasonWap:void 0,refundReason:void 0,refundPrice:void 0,deliverySn:void 0,deliveryName:void 0,deliveryType:void 0,deliveryId:void 0,gainIntegral:void 0,useIntegral:void 0,payIntegral:void 0,backIntegral:void 0,mark:void 0,unique:void 0,remark:void 0,merId:void 0,combinationId:void 0,pinkId:void 0,cost:void 0,seckillId:void 0,bargainId:void 0,verifyCode:void 0,storeId:void 0,shippingType:void 0,isChannel:void 0,isSystemDel:void 0},(i=l.value)==null||i.resetFields()};return(i,e)=>{const T=D,x=O,S=E,p=U,w=H,C=F;return m(),y(w,{title:d(c),modelValue:d(o),"onUpdate:modelValue":e[2]||(e[2]=s=>A(o)?o.value=s:null)},{footer:t(()=>[n(p,{onClick:b,type:"primary",disabled:d(a)},{default:t(()=>[f("\u786E \u5B9A")]),_:1},8,["disabled"]),n(p,{onClick:e[1]||(e[1]=s=>o.value=!1)},{default:t(()=>[f("\u53D6 \u6D88")]),_:1})]),default:t(()=>[q((m(),y(S,{ref_key:"formRef",ref:l,model:d(r),rules:d(h),"label-width":"120px"},{default:t(()=>[n(x,{label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[n(T,{type:"textarea",rows:"5",modelValue:d(r).remark,"onUpdate:modelValue":e[0]||(e[0]=s=>d(r).remark=s),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[C,d(a)]])]),_:1},8,["title","modelValue"])}}})});export{g as _,B as __tla};