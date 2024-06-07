import{d as S,aE as A,u as Q,r as g,an as T,D as V,ac as W,G as Y,as as Z,a as e,o as _,H as L,w as l,M as $,g as a,i as y,c as M,t as E,k as ee,aN as ae,aL as le,aM as te,aO as oe,aK as ne,J as ie,q as se,X as re,v as de,__tla as me}from"./index-BFAKpZuq.js";import{_ as pe,__tla as ue}from"./XButton-C-GwWfPK.js";import{u as b,__tla as ce}from"./useIcon-CJBlCsSg.js";import{u as ge,L as _e,_ as fe,a as he,__tla as ye}from"./LoginFormTitle.vue_vue_type_script_name_LoginFormTitle_setup_true_lang-BsYHr6Bc.js";import{u as be,__tla as xe}from"./useMessage-CXZcJfdD.js";import{r as x,__tla as Ne}from"./formRules-DApCz1a_.js";let I,ve=Promise.all([(()=>{try{return me}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ne}catch{}})()]).then(async()=>{let N,v;N={key:1,class:"getMobileCode",style:{cursor:"pointer"}},v=S({name:"MobileForm"}),I=S({...v,setup(ke){const{t:i}=ee(),P=be(),U=A(),{currentRoute:q,push:B}=Q(),k=g(),u=g(!1),O=b({icon:"ep:house"}),R=b({icon:"ep:cellphone"}),X=b({icon:"ep:circle-check"}),{validForm:j}=he(k),{handleBackLogin:z,getLoginState:D}=ge(),G=T(()=>e(D)===_e.MOBILE),H={tenantName:[x],mobileNumber:[x],code:[x]},t=V({codeImg:"",tenantEnable:"false",token:"",loading:{signIn:!1},loginForm:{uuid:"",tenantName:"yshop",mobileNumber:"",code:""}}),p=V({smsCode:{mobile:"",scene:21},loginSms:{mobile:"",code:""}}),s=g(0),c=g(""),J=async()=>{await F(),p.smsCode.mobile=t.loginForm.mobileNumber,await ae(p.smsCode).then(async()=>{P.success(i("login.SmsSendMsg")),s.value=60;let n=setInterval(()=>{s.value=s.value-1,s.value<=0&&clearInterval(n)},1e3)})};W(()=>q.value,n=>{var o;c.value=(o=n==null?void 0:n.query)==null?void 0:o.redirect},{immediate:!0});const F=async()=>{if(t.tenantEnable==="true"){const n=await le(t.loginForm.tenantName);te(n)}};return(n,o)=>{const m=ie,r=se,f=re,w=de,C=pe,K=$;return Y((_(),L(K,{ref_key:"formSmsLogin",ref:k,model:e(t).loginForm,rules:H,class:"login-form","label-position":"top","label-width":"120px",size:"large"},{default:l(()=>[a(w,{style:{"margin-left":"-10px","margin-right":"-10px"}},{default:l(()=>[a(r,{span:24,style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>[a(m,null,{default:l(()=>[a(fe,{style:{width:"100%"}})]),_:1})]),_:1}),a(r,{span:24,style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>[e(t).tenantEnable==="true"?(_(),L(m,{key:0,prop:"tenantName"},{default:l(()=>[a(f,{modelValue:e(t).loginForm.tenantName,"onUpdate:modelValue":o[0]||(o[0]=d=>e(t).loginForm.tenantName=d),placeholder:e(i)("login.tenantNamePlaceholder"),"prefix-icon":e(O),type:"primary",link:""},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})):y("",!0)]),_:1}),a(r,{span:24,style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>[a(m,{prop:"mobileNumber"},{default:l(()=>[a(f,{modelValue:e(t).loginForm.mobileNumber,"onUpdate:modelValue":o[1]||(o[1]=d=>e(t).loginForm.mobileNumber=d),placeholder:e(i)("login.mobileNumberPlaceholder"),"prefix-icon":e(R)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),a(r,{span:24,style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>[a(m,{prop:"code"},{default:l(()=>[a(w,{gutter:5,justify:"space-between",style:{width:"100%"}},{default:l(()=>[a(r,{span:24},{default:l(()=>[a(f,{modelValue:e(t).loginForm.code,"onUpdate:modelValue":o[2]||(o[2]=d=>e(t).loginForm.code=d),placeholder:e(i)("login.codePlaceholder"),"prefix-icon":e(X)},{append:l(()=>[e(s)<=0?(_(),M("span",{key:0,class:"getMobileCode",style:{cursor:"pointer"},onClick:J},E(e(i)("login.getSmsCode")),1)):y("",!0),e(s)>0?(_(),M("span",N,E(e(s))+"\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6 ",1)):y("",!0)]),_:1},8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{span:24,style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>[a(m,null,{default:l(()=>[a(C,{loading:e(u),title:e(i)("login.login"),class:"w-[100%]",type:"primary",onClick:o[3]||(o[3]=d=>(async()=>{await F(),await j()&&(u.value=!0,p.loginSms.mobile=t.loginForm.mobileNumber,p.loginSms.code=t.loginForm.code,await oe(p.loginSms).then(async h=>{ne(h==null?void 0:h.token),c.value||(c.value="/"),B({path:c.value||U.addRouters[0].path})}).catch(()=>{}).finally(()=>{u.value=!1}))})())},null,8,["loading","title"])]),_:1})]),_:1}),a(r,{span:24,style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>[a(m,null,{default:l(()=>[a(C,{loading:e(u),title:e(i)("login.backLogin"),class:"w-[100%]",onClick:o[4]||(o[4]=d=>e(z)())},null,8,["loading","title"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])),[[Z,e(G)]])}}})});export{I as _,ve as __tla};
