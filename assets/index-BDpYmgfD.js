import{aQ as t,__tla as n}from"./index-DPXDMqGw.js";let s,a,l,m,u,r,d=Promise.all([(()=>{try{return n}catch{}})()]).then(async()=>{u=()=>t.get({url:"/system/menu/list-all-simple"}),a=e=>t.get({url:"/system/menu/list",params:e}),s=e=>t.get({url:"/system/menu/get?id="+e}),l=e=>t.post({url:"/system/menu/create",data:e}),r=e=>t.put({url:"/system/menu/update",data:e}),m=e=>t.delete({url:"/system/menu/delete?id="+e})});export{d as __tla,s as a,a as b,l as c,m as d,u as g,r as u};