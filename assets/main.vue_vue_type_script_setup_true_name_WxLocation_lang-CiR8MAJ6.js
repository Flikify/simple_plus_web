import{d as i,o as y,c as _,g as e,w as l,f as q,h as d,t as f,v as b,_ as h,q as g,__tla as k}from"./index-B2l-tRNr.js";import{E as K,__tla as X}from"./el-link-DMZgcarL.js";let s,Y=Promise.all([(()=>{try{return k}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{let o,r;o=["src"],r=i({name:"WxLocation"}),s=i({...r,props:{locationX:{required:!0,type:Number},locationY:{required:!0,type:Number},label:{required:!0,type:String},qqMapKey:{required:!1,type:String,default:"TVDBZ-TDILD-4ON4B-PFDZA-RNLKH-VVF6E"}},setup(t,{expose:p}){const a=t;return p({locationX:a.locationX,locationY:a.locationY,label:a.label,qqMapKey:a.qqMapKey}),(x,D)=>{const n=b,c=h,u=g,m=K;return y(),_("div",null,[e(m,{type:"primary",target:"_blank",href:"https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx="+t.locationY+"&pointy="+t.locationX+"&name="+t.label+"&ref=yudao"},{default:l(()=>[e(u,null,{default:l(()=>[e(n,null,{default:l(()=>[q("img",{src:"https://apis.map.qq.com/ws/staticmap/v2/?zoom=10&markers=color:blue|label:A|"+t.locationX+","+t.locationY+"&key="+t.qqMapKey+"&size=250*180"},null,8,o)]),_:1}),e(n,null,{default:l(()=>[e(c,{icon:"ep:location"}),d(" "+f(t.label),1)]),_:1})]),_:1})]),_:1},8,["href"])])}}})});export{s as _,Y as __tla};