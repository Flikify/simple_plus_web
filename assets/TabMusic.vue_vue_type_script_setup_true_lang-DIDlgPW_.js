import{d as L,a2 as S,an as T,r as b,D as W,o as p,c as M,g as e,w as u,a,H as X,f as n,h as x,A as P,_ as E,v as F,L as G,a6 as J,q as K,cn as N,X as O,__tla as Q}from"./index-BFAKpZuq.js";import{W as R,__tla as Y}from"./main-CpLCBrtQ.js";import{u as Z,U as $,__tla as ee}from"./useUpload-fiW2oz88.js";import{u as ae,__tla as le}from"./useMessage-CXZcJfdD.js";let I,te=Promise.all([(()=>{try{return Q}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return le}catch{}})()]).then(async()=>{let _,y,f,h,V;_=["src"],y={class:"thumb-but"},f=n("div",{style:{margin:"20px 0"}},null,-1),h=n("div",{style:{margin:"20px 0"}},null,-1),V=n("div",{style:{margin:"20px 0"}},null,-1),I=L({__name:"TabMusic",props:{modelValue:{}},emits:["update:modelValue"],setup(j,{emit:k}){const q=j,w=ae(),z={Authorization:"Bearer "+S()},l=T({get:()=>q.modelValue,set:d=>k("update:modelValue",d)}),r=b(!1),g=b([]),m=W({accountId:l.value.accountId,type:"thumb",title:"",introduction:""}),A=d=>Z($.Image,2)(d),B=d=>{if(d.code!==0)return w.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+d.msg),!1;g.value=[],m.title="",m.introduction="",v(d.data)},v=d=>{r.value=!1,l.value.thumbMediaId=d.mediaId,l.value.thumbMediaUrl=d.url};return(d,t)=>{const C=E,s=F,U=G,D=J,c=K,H=N,o=O;return p(),M("div",null,[e(s,{align:"middle",justify:"center"},{default:u(()=>[e(c,{span:6},{default:u(()=>[e(s,{align:"middle",justify:"center",class:"thumb-div"},{default:u(()=>[e(c,{span:24},{default:u(()=>[e(s,{align:"middle",justify:"center"},{default:u(()=>[a(l).thumbMediaUrl?(p(),M("img",{key:0,style:{width:"100px"},src:a(l).thumbMediaUrl},null,8,_)):(p(),X(C,{key:1,icon:"ep:plus"}))]),_:1}),e(s,{align:"middle",justify:"center",style:{"margin-top":"2%"}},{default:u(()=>[n("div",y,[e(D,{action:"/admin-api/mp/material/upload-temporary",headers:z,multiple:"",limit:1,"file-list":a(g),data:a(m),"before-upload":A,"on-success":B},{trigger:u(()=>[e(U,{type:"primary",link:""},{default:u(()=>[x("\u672C\u5730\u4E0A\u4F20")]),_:1})]),default:u(()=>[e(U,{type:"primary",link:"",onClick:t[0]||(t[0]=i=>r.value=!0),style:{"margin-left":"5px"}},{default:u(()=>[x("\u7D20\u6750\u5E93\u9009\u62E9 ")]),_:1})]),_:1},8,["file-list","data"])])]),_:1})]),_:1})]),_:1}),e(H,{title:"\u9009\u62E9\u56FE\u7247",modelValue:a(r),"onUpdate:modelValue":t[1]||(t[1]=i=>P(r)?r.value=i:null),width:"80%","append-to-body":"","destroy-on-close":""},{default:u(()=>[e(a(R),{type:"image","account-id":a(l).accountId,onSelectMaterial:v},null,8,["account-id"])]),_:1},8,["modelValue"])]),_:1}),e(c,{span:18},{default:u(()=>[e(o,{modelValue:a(l).title,"onUpdate:modelValue":t[2]||(t[2]=i=>a(l).title=i),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"]),f,e(o,{modelValue:a(l).description,"onUpdate:modelValue":t[3]||(t[3]=i=>a(l).description=i),placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1}),h,e(o,{modelValue:a(l).musicUrl,"onUpdate:modelValue":t[4]||(t[4]=i=>a(l).musicUrl=i),placeholder:"\u8BF7\u8F93\u5165\u97F3\u4E50\u94FE\u63A5"},null,8,["modelValue"]),V,e(o,{modelValue:a(l).hqMusicUrl,"onUpdate:modelValue":t[5]||(t[5]=i=>a(l).hqMusicUrl=i),placeholder:"\u8BF7\u8F93\u5165\u9AD8\u8D28\u91CF\u97F3\u4E50\u94FE\u63A5"},null,8,["modelValue"])])}}})});export{I as _,te as __tla};