var _=Object.defineProperty;var z=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,w=(e,t)=>{for(var o in t||(t={}))$.call(t,o)&&P(e,o,t[o]);if(z)for(var o of z(t))J.call(t,o)&&P(e,o,t[o]);return e};import{g as q,r as n,j as r,P as I,C as G,B as H,a as h,D as W,L as K,c as M,b as T,l as U,n as Q,d as X,R as Y,e as Z,f as V,h as ee}from"./vendor-ef7297ef.js";const te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};te();const se=({chartValue:e})=>{const t=q("canvas"),[o,p]=n.exports.useState([]);return n.exports.useEffect(()=>{let d=[];for(let v in e){const b={type:v,value:e[v]};d.push(b)}p(d)},[e]),r(I,w({},{appendPadding:10,data:o,angleField:"value",colorField:"type",radius:.75,legend:!1,label:{type:"spider",labelHeight:40,formatter:(d,v)=>{const b=new t.Group({});return b.addShape({type:"circle",attrs:{x:0,y:0,width:40,height:50,r:5,fill:v.color}}),b.addShape({type:"text",attrs:{x:10,y:8,text:`${d.type}`,fill:v.color}}),b.addShape({type:"text",attrs:{x:0,y:25,text:`${d.value}\u4F4D ${(d.percent*100).toFixed(0)}%`,fill:"#ccc",fontWeight:700}}),b}},interactions:[{type:"element-selected"},{type:"element-active"}]}))},L=({chartValue:e})=>{const[t,o]=n.exports.useState([]);return n.exports.useEffect(()=>{let s=[];for(let a in e){const d={type:a,value:e[a]};s.push(d)}o(s)},[e]),r(G,w({},{data:t,xField:"type",yField:"value",label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},yAxis:{label:{style:{fill:"#ddd"}}},xAxis:{label:{style:{fill:"#ddd"}}},color:({type:s})=>s==="26~30 \u6B72"?"#FAAD14":"#5B8FF9",legend:!1}))},R=({chartValue:e})=>{const[t,o]=n.exports.useState([]);return n.exports.useEffect(()=>{let s=[];for(let a in e){const d={type:a,value:e[a]};s.push(d)}console.log("34343",s),o(s)},[e]),r(H,w({},{data:t,xField:"value",yField:"type",seriesField:"type",xAxis:{label:{style:{fill:"#ddd"}}},yAxis:{label:{style:{fill:"#ddd"}}},color:({type:s})=>s==="26~30 \u6B72"?"#FAAD14":"#5B8FF9",legend:!1}))},j=n.exports.createContext({});function oe(){const{data:e}=n.exports.useContext(j),[t,o]=n.exports.useState({}),[p,s]=n.exports.useState({}),[a,d]=n.exports.useState({}),[v,b]=n.exports.useState({}),[D,E]=n.exports.useState({});n.exports.useEffect(()=>{console.log("context----",e),e.length>0&&k()},[e]);const A=(x,y)=>{y in x?x[y]++:x[y]=1},N=(x,y=6)=>{var l=[];for(var i in x)l.push([i,x[i]]);l.sort((f,u)=>u[1]-f[1]);const c={};for(let f=0;f<y;f++){const u=l[f];c[u[0]]=u[1]}return c},k=()=>{const x={\u7537:0,\u5973:0},y={},l={},i={},c={};e.forEach(f=>{const{gender:u,age:m,major:g,company:F,works:S,education:B}=f,{area:C,industry:O,salary:ge}=F;u==="\u7537\u6027"?x.\u7537++:x.\u5973++,A(y,m),A(l,g),A(i,C),A(c,B)}),o(x),s(y),d(N(l)),b(N(i)),E(c),console.log("genderList",x),console.log("ageList",y)};return h("div",{children:[h("div",{className:"row mt-10",children:[h("div",{className:"block p-6 w-full mr-0 md:w-1/2 md:mr-4",children:[r("h3",{className:"title",children:"\u5730\u5340"}),r(L,{chartValue:v})]}),h("div",{className:"block p-6 w-full mr-0 md:w-1/2",children:[r("h3",{className:"title",children:"\u5E74\u9F61"}),r(L,{chartValue:p})]})]}),h("div",{className:"row mt-10",children:[h("div",{className:"block p-6 w-full mr-0 md:w-1/2 md:mr-4",children:[r("h3",{className:"title",children:"\u6027\u5225\u6BD4\u4F8B"}),r(se,{chartValue:t})]}),h("div",{className:"block p-6 w-full mr-0 md:w-1/2",children:[r("h3",{className:"title",children:"\u6559\u80B2\u7A0B\u5EA6"}),r(R,{chartValue:D})]})]}),h("div",{className:"block p-6 mt-10",children:[r("h3",{className:"title",children:"\u79D1\u7CFB"}),r(R,{chartValue:a})]})]})}const re=({chartValue:e})=>{const[t,o]=n.exports.useState([]);return n.exports.useEffect(()=>{let s=[];for(let a in e){const d={type:a,\u4EBA\u6578:e[a],count:e[a]};s.push(d)}o(s)},[e]),r(W,w({},{data:[t,t],xField:"type",yField:["\u4EBA\u6578","count"],color:"#fff",legend:{itemName:{style:{fill:"#ddd"}}},yAxis:{label:{style:{fill:"#ddd"}}},xAxis:{label:{style:{fill:"#ddd"}}},geometryOptions:[{geometry:"column"},{geometry:"line",lineStyle:{lineWidth:2}}]}))},ae=({chartValue:e})=>{const[t,o]=n.exports.useState([]);return n.exports.useEffect(()=>{let s=[];for(let a in e){const d={type:a,value:e[a]};s.push(d)}o(s)},[e]),r(I,w({},{appendPadding:10,data:t,angleField:"value",colorField:"type",radius:1,innerRadius:.6,legend:{itemName:{style:{fill:"#ddd"}}},label:{type:"inner",offset:"-50%",content:"{value}",style:{textAlign:"center",fontSize:14}},interactions:[{type:"element-selected"},{type:"element-active"}],statistic:{title:!1,content:{style:{whiteSpace:"pre-wrap",overflow:"hidden",textOverflow:"ellipsis",color:"#ddd"},content:"\u7522\u696D"}}}))},ne=({chartValue:e})=>{const[t,o]=n.exports.useState([]);return n.exports.useEffect(()=>{let s=[];for(let a in e){const d={type:a,value:e[a]};s.push(d)}o(s),console.log("result====",e)},[e]),r(K,w({},{data:t,xField:"type",yField:"value",label:{style:{fill:"#ccc"}},point:{size:5,shape:"diamond",style:{fill:"white",stroke:"#5B8FF9",lineWidth:4}},tooltip:{showMarkers:!1},yAxis:{label:{style:{fill:"#ddd"}}},xAxis:{label:{style:{fill:"#ddd"}}},state:{active:{style:{shadowBlur:4,stroke:"#000",fill:"red"}}},interactions:[{type:"marker-active"}]}))};function le(){const{data:e}=n.exports.useContext(j),[t,o]=n.exports.useState({}),[p,s]=n.exports.useState({}),[a,d]=n.exports.useState({}),[v,b]=n.exports.useState({});n.exports.useEffect(()=>{console.log("context----",e),e.length>0&&N()},[e]);const D=(l,i)=>{i in l?l[i]++:l[i]=1},E=(l,i=6)=>{var c=[];for(var f in l)c.push([f,l[f]]);c.sort((m,g)=>g[1]-m[1]);const u={};for(let m=0;m<i;m++){const g=c[m];u[g[0]]=g[1]}return u},A=(l,i="desc")=>{var c=[];for(var f in l)c.push([f,l[f]]);c.sort((m,g)=>i==="desc"?g[1]-m[1]:m[1]-g[1]);const u={};for(let m=0;m<c.length;m++){const g=c[m];u[g[0]]=g[1]}return u},N=()=>{const l={},i={},c={},f={};e.forEach(g=>{const{company:F}=g,{job_tenure:S,salary:B,industry:C,salary_score:O}=F;D(l,S),D(i,B),D(c,C),k(f,C,O)}),o(l),s(A(i));const u=E(c,12);d(u);const m=y(f,u);b(m)},k=(l,i,c)=>{l[i]?l[i].push(c):l[i]=[]},x=(l,i)=>Math.round(Math.round(l*Math.pow(10,(i||0)+1))/10)/Math.pow(10,i||0),y=(l,i)=>{console.log("satisfactionList",l,i);const c={};for(let u in i)c[u]=l[u];console.log("new@@@",c);const f={};return Object.keys(c).forEach(u=>{const g=c[u].reduce((F,S)=>Number(F)+Number(S),0)/c[u].length;console.log("avg",g),f[u]=x(g,2)}),console.log("?????----",f),f};return h("div",{children:[h("div",{className:"block p-6 mt-10",children:[r("h3",{className:"title",children:"\u5E74\u8CC7"}),r(L,{chartValue:t})]}),h("div",{className:"block p-6 mt-10",children:[r("h3",{className:"title",children:"\u5E74\u85AA"}),r(re,{chartValue:p})]}),h("div",{className:"block p-6 mt-10",children:[r("h3",{className:"title",children:"\u7522\u696D\u5206\u4F48"}),r(ae,{chartValue:a})]}),h("div",{className:"block p-6 mt-10",children:[r("h3",{className:"title",children:"\u7522\u696D\u85AA\u8CC7\u6EFF\u610F\u5EA6"}),r(ne,{chartValue:v})]})]})}function ie(){const[e,t]=n.exports.useState(0);return n.exports.useEffect(()=>{},[]),h("div",{className:"p-10",children:[r("h1",{className:"text-center font-bold text-2xl text-primary-100",children:"2021\u524D\u7AEF\u85AA\u8CC7\u8ABF\u67E5"}),h("ul",{className:"m-auto mt-6 w-72 p-1 h-10 flex items-center justify-between border border-gray-200 rounded-sm cursor-pointer",children:[r("li",{className:M("w-1/2","text-lg","text-gray-200","text-center",e===0&&"bg-gray-500"),onClick:()=>{t(0)},children:"\u57FA\u672C\u8CC7\u6599"}),r("li",{className:M("w-1/2","text-lg","text-gray-200","text-center",e===1&&"bg-gray-500"),onClick:()=>{t(1)},children:"\u85AA\u8CC7\u8207\u7522\u696D"})]}),e===0&&r("div",{children:r(oe,{})}),e===1&&r("div",{children:r(le,{})})]})}const ce="https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json",de=()=>({"Content-Type":"application/x-www-form-urlencoded"}),ue=T.create({headers:de()}),fe=e=>{let t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach(o=>{(t[o]===""||t[o]===null||t[o]===void 0)&&delete t[o]}),t},pe=(e=ce,t={})=>{let o=JSON.parse(JSON.stringify(t));return o=U.stringify(fe(o)),ue.get(e,o).then(p=>(console.log("response",p.data),p.data)).catch(p=>{console.log("error",p)})};Q.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 36px;
  position: fixed;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9999;
  top: 0px;
  right: 0;
  .loading-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 200px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  .context {
    z-index: 999999;
    padding: 0 13% 0px 13%;
  }
  p {
    font-size: 13px;
    z-index: 999999;
    line-height: 22px;
  }
  .context:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
  .context:not(:required) {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }
  .context:not(:required):after {
    content: "";
    display: block;
    font-size: 10px;
    width: 0.5em;
    height: 0.5em;
    animation: spinner 1500ms infinite linear;
    border-radius: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.75) 1em 0 0 0,
      rgba(0, 0, 0, 0.75) 0.7em 0.7em 0 0, rgba(0, 0, 0, 0.75) 0 1em 0 0,
      rgba(0, 0, 0, 0.75) -0.7em 0.7em 0 0, rgba(0, 0, 0, 0.5) -1em 0 0 0,
      rgba(0, 0, 0, 0.5) -0.7em -0.7em 0 0, rgba(0, 0, 0, 0.75) 0 -1em 0 0,
      rgba(0, 0, 0, 0.75) 0.7em -0.7em 0 0;
  }
  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;function me(){const[e,t]=n.exports.useState([]),{Provider:o}=j;return n.exports.useEffect(()=>{(async()=>{try{const s=await pe();t(s)}catch(s){console.log("error",s)}})()},[]),n.exports.useEffect(()=>{console.log("data",e)},[e]),r(o,{value:{data:e},children:r(X,{basename:window.location.pathname||"",children:r(Y,{children:r(Z,{exact:!0,path:"/",element:r(ie,{})})})})})}V.render(r(ee,{children:r(me,{})}),document.getElementById("root"));
