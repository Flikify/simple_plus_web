import{aQ as t,__tla as i}from"./index-DPXDMqGw.js";let e,r,s,l,w,d=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{e=async a=>await t.get({url:"/store/withdrawal/page",params:a}),l=async a=>await t.get({url:"/store/withdrawal/get?id="+a}),r=async a=>await t.post({url:"/store/withdrawal/create",data:a}),w=async a=>await t.put({url:"/store/withdrawal/update",data:a}),s=async a=>await t.delete({url:"/store/withdrawal/delete?id="+a})});export{d as __tla,e as a,r as c,s as d,l as g,w as u};