import{ad as m,aX as v,d,ae as $,an as E,o as t,c as r,H as o,w as S,aD as w,a as l,a$ as B,i as n,n as f,ai as c,ag as x,al as C,__tla as D}from"./index-06lJR0i3.js";let u,H=Promise.all([(()=>{try{return D}catch{}})()]).then(async()=>{const p=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:v}}),y={click:i=>i instanceof MouseEvent},g=["href","target"],k=d({name:"ElLink"});u=C(x(d({...k,props:p,emits:y,setup(i,{emit:_}){const e=i,s=$("link"),b=E(()=>[s.b(),s.m(e.type),s.is("disabled",e.disabled),s.is("underline",e.underline&&!e.disabled)]);function h(a){e.disabled||_("click",a)}return(a,L)=>(t(),r("a",{class:f(l(b)),href:a.disabled||!a.href?void 0:a.href,target:a.disabled||!a.href?void 0:a.target,onClick:h},[a.icon?(t(),o(l(B),{key:0},{default:S(()=>[(t(),o(w(a.icon)))]),_:1})):n("v-if",!0),a.$slots.default?(t(),r("span",{key:1,class:f(l(s).e("inner"))},[c(a.$slots,"default")],2)):n("v-if",!0),a.$slots.icon?c(a.$slots,"icon",{key:2}):n("v-if",!0)],10,g))}}),[["__file","link.vue"]]))});export{u as E,H as __tla};
