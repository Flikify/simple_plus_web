import{d as c,a1 as y,o as v,c as _,f as t,t as m,g as T,w as k,k as b,L as h,h as C,__tla as E}from"./index-DPXDMqGw.js";let p,w=Promise.all([(()=>{try{return E}catch{}})()]).then(async()=>{let a,o,l,n,i,u;a={class:"flex justify-center"},o={class:"text-center"},l=["src"],n={class:"text-14px text-[var(--el-color-info)]"},i={class:"mt-20px"},u=c({name:"Error"}),p=c({...u,props:{type:y.string.validate(e=>["404","500","403"].includes(e)).def("404")},emits:["errorClick"],setup(e,{emit:d}){const f=e,{t:r}=b(),s={404:{url:"/assets/404-B3JyPfEa.svg",message:r("error.pageError"),buttonText:r("error.returnToHome")},500:{url:"/assets/500-BGu8fdSB.svg",message:r("error.networkError"),buttonText:r("error.returnToHome")},403:{url:"/assets/403-RqeqO19C.svg",message:r("error.noPermission"),buttonText:r("error.returnToHome")}},g=()=>{d("errorClick",f.type)};return(B,H)=>{const x=h;return v(),_("div",a,[t("div",o,[t("img",{src:s[e.type].url,alt:"",width:"350"},null,8,l),t("div",n,m(s[e.type].message),1),t("div",i,[T(x,{type:"primary",onClick:g},{default:k(()=>[C(m(s[e.type].buttonText),1)]),_:1})])])])}}})});export{p as _,w as __tla};