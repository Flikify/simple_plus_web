import{d as S,bs as P,cH as sl,a_ as B,ae as F,G as W,b0 as N,cI as rl,ad as j,aY as nl,a,o as s,c as b,f as h,F as m,j as D,H as A,g as G,ag as J,bn as il,bE as ol,cm as cl,bP as dl,an as pl,n as w,ai as O,h as R,t as Y,i as ul,cJ as yl,al as bl,am as vl,__tla as hl}from"./index-06lJR0i3.js";let q,K,ml=Promise.all([(()=>{try{return hl}catch{}})()]).then(async()=>{const I=Symbol("elDescriptions");var _=S({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup:()=>({descriptions:P(I,{})}),render(){var k,o,t,$,r,c,E;const i=sl(this.cell),l=(((k=this.cell)==null?void 0:k.dirs)||[]).map(Z=>{const{dir:ll,arg:tl,modifiers:el,value:al}=Z;return[ll,al,tl,el]}),{border:p,direction:n}=this.descriptions,e=n==="vertical",g=(($=(t=(o=this.cell)==null?void 0:o.children)==null?void 0:t.label)==null?void 0:$.call(t))||i.label,u=(E=(c=(r=this.cell)==null?void 0:r.children)==null?void 0:c.default)==null?void 0:E.call(c),y=i.span,f=i.align?`is-${i.align}`:"",v=i.labelAlign?`is-${i.labelAlign}`:f,x=i.className,H=i.labelClassName,C={width:B(i.width),minWidth:B(i.minWidth)},d=F("descriptions");switch(this.type){case"label":return W(N(this.tag,{style:C,class:[d.e("cell"),d.e("label"),d.is("bordered-label",p),d.is("vertical-label",e),v,H],colSpan:e?y:1},g),l);case"content":return W(N(this.tag,{style:C,class:[d.e("cell"),d.e("content"),d.is("bordered-content",p),d.is("vertical-content",e),f,x],colSpan:e?y:2*y-1},u),l);default:return W(N("td",{style:C,class:[d.e("cell"),f],colSpan:y},[rl(g)?void 0:N("span",{class:[d.e("label"),H]},g),N("span",{class:[d.e("content"),x]},u)]),l)}}});const L=j({row:{type:nl(Array),default:()=>[]}}),M={key:1},Q=S({name:"ElDescriptionsRow"});var T=J(S({...Q,props:L,setup(k){const o=P(I,{});return(t,$)=>a(o).direction==="vertical"?(s(),b(m,{key:0},[h("tr",null,[(s(!0),b(m,null,D(t.row,(r,c)=>(s(),A(a(_),{key:`tr1-${c}`,cell:r,tag:"th",type:"label"},null,8,["cell"]))),128))]),h("tr",null,[(s(!0),b(m,null,D(t.row,(r,c)=>(s(),A(a(_),{key:`tr2-${c}`,cell:r,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(s(),b("tr",M,[(s(!0),b(m,null,D(t.row,(r,c)=>(s(),b(m,{key:`tr3-${c}`},[a(o).border?(s(),b(m,{key:0},[G(a(_),{cell:r,tag:"td",type:"label"},null,8,["cell"]),G(a(_),{cell:r,tag:"td",type:"content"},null,8,["cell"])],64)):(s(),A(a(_),{key:1,cell:r,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}}),[["__file","descriptions-row.vue"]]);const U=j({border:Boolean,column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:il,title:{type:String,default:""},extra:{type:String,default:""}}),V=S({name:"ElDescriptions"});var X=J(S({...V,props:U,setup(k){const o=k,t=F("descriptions"),$=ol(),r=cl();dl(I,o);const c=pl(()=>[t.b(),t.m($.value)]),E=(l,p,n,e=!1)=>(l.props||(l.props={}),p>n&&(l.props.span=n),e&&(l.props.span=p),l),i=()=>{if(!r.default)return[];const l=yl(r.default()).filter(u=>{var y;return((y=u==null?void 0:u.type)==null?void 0:y.name)==="ElDescriptionsItem"}),p=[];let n=[],e=o.column,g=0;return l.forEach((u,y)=>{var f;const v=((f=u.props)==null?void 0:f.span)||1;if(y<l.length-1&&(g+=v>e?e:v),y===l.length-1){const x=o.column-g%o.column;return n.push(E(u,x,e,!0)),void p.push(n)}v<e?(e-=v,n.push(u)):(n.push(E(u,v,e)),p.push(n),e=o.column,n=[])}),p};return(l,p)=>(s(),b("div",{class:w(a(c))},[l.title||l.extra||l.$slots.title||l.$slots.extra?(s(),b("div",{key:0,class:w(a(t).e("header"))},[h("div",{class:w(a(t).e("title"))},[O(l.$slots,"title",{},()=>[R(Y(l.title),1)])],2),h("div",{class:w(a(t).e("extra"))},[O(l.$slots,"extra",{},()=>[R(Y(l.extra),1)])],2)],2)):ul("v-if",!0),h("div",{class:w(a(t).e("body"))},[h("table",{class:w([a(t).e("table"),a(t).is("bordered",l.border)])},[h("tbody",null,[(s(!0),b(m,null,D(i(),(n,e)=>(s(),A(T,{key:e,row:n},null,8,["row"]))),128))])],2)],2)],2))}}),[["__file","description.vue"]]);let z;z=S({name:"ElDescriptionsItem",props:j({label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}})}),K=bl(X,{DescriptionsItem:z}),q=vl(z)});export{q as E,ml as __tla,K as a};