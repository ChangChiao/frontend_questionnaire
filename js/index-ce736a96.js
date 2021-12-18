var I=Object.defineProperty;var B=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var k=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&k(e,r,t[r]);if(B)for(var r of B(t))$.call(t,r)&&k(e,r,t[r]);return e};import{g as J,r as a,j as o,P as O,C as q,B as G,a as g,D as H,c as j,b as M,l as W,n as K,d as T,R as U,e as Q,f as X,h as Y}from"./vendor-ea55fd28.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}};Z();const V=({chartValue:e})=>{const t=J("canvas"),[r,f]=a.exports.useState([]);return a.exports.useEffect(()=>{let l=[];for(let y in e){const h={type:y,value:e[y]};l.push(h)}f(l)},[e]),o(O,D({},{appendPadding:10,data:r,angleField:"value",colorField:"type",radius:.75,legend:!1,label:{type:"spider",labelHeight:40,formatter:(l,y)=>{const h=new t.Group({});return h.addShape({type:"circle",attrs:{x:0,y:0,width:40,height:50,r:5,fill:y.color}}),h.addShape({type:"text",attrs:{x:10,y:8,text:`${l.type}`,fill:y.color}}),h.addShape({type:"text",attrs:{x:0,y:25,text:`${l.value}\u4F4D ${(l.percent*100).toFixed(0)}%`,fill:"#ccc",fontWeight:700}}),h}},interactions:[{type:"element-selected"},{type:"element-active"}]}))},E=({chartValue:e})=>{const[t,r]=a.exports.useState([]);return a.exports.useEffect(()=>{let s=[];for(let n in e){const l={type:n,value:e[n]};s.push(l)}r(s)},[e]),o(q,D({},{data:t,xField:"type",yField:"value",label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},yAxis:{label:{style:{fill:"#ddd"}}},xAxis:{label:{style:{fill:"#ddd"}}},color:({type:s})=>s==="26~30 \u6B72"?"#FAAD14":"#5B8FF9",legend:!1}))},z=({chartValue:e})=>{const[t,r]=a.exports.useState([]);return a.exports.useEffect(()=>{let s=[];for(let n in e){const l={type:n,value:e[n]};s.push(l)}console.log("34343",s),r(s)},[e]),o(G,D({},{data:t,xField:"value",yField:"type",seriesField:"type",xAxis:{label:{style:{fill:"#ddd"}}},yAxis:{label:{style:{fill:"#ddd"}}},color:({type:s})=>s==="26~30 \u6B72"?"#FAAD14":"#5B8FF9",legend:!1}))},L=a.exports.createContext({});function ee(){const{data:e}=a.exports.useContext(L),[t,r]=a.exports.useState({}),[f,s]=a.exports.useState({}),[n,l]=a.exports.useState({}),[y,h]=a.exports.useState({}),[v,F]=a.exports.useState({});a.exports.useEffect(()=>{console.log("context----",e),e.length>0&&m()},[e]);const w=(i,c)=>{c in i?i[c]++:i[c]=1},A=(i,c=6)=>{var p=[];for(var x in i)p.push([x,i[x]]);p.sort((u,b)=>b[1]-u[1]);const d={};for(let u=0;u<c;u++){const b=p[u];d[b[0]]=b[1]}return d},m=()=>{const i={\u7537:0,\u5973:0},c={},p={},x={},d={};e.forEach(u=>{const{gender:b,age:N,major:S,company:C,works:ue,education:P}=u,{area:R,industry:fe,salary:pe}=C;b==="\u7537\u6027"?i.\u7537++:i.\u5973++,w(c,N),w(p,S),w(x,R),w(d,P)}),r(i),s(c),l(A(p)),h(A(x)),F(d),console.log("genderList",i),console.log("ageList",c)};return g("div",{children:[g("div",{className:"row mt-10",children:[g("div",{className:"block p-6 w-full mr-0 md:w-1/2 md:mr-4",children:[o("h3",{className:"title",children:"\u5730\u5340"}),o(E,{chartValue:y})]}),g("div",{className:"block p-6 w-full mr-0 md:w-1/2",children:[o("h3",{className:"title",children:"\u5E74\u9F61"}),o(E,{chartValue:f})]})]}),g("div",{className:"row mt-10",children:[g("div",{className:"block p-6 w-full mr-0 md:w-1/2 md:mr-4",children:[o("h3",{className:"title",children:"\u6027\u5225\u6BD4\u4F8B"}),o(V,{chartValue:t})]}),g("div",{className:"block p-6 w-full mr-0 md:w-1/2",children:[o("h3",{className:"title",children:"\u6559\u80B2\u7A0B\u5EA6"}),o(z,{chartValue:v})]})]}),g("div",{className:"block p-6 mt-10",children:[o("h3",{className:"title",children:"\u79D1\u7CFB"}),o(z,{chartValue:n})]})]})}const te=({chartValue:e})=>{const[t,r]=a.exports.useState([]);return a.exports.useEffect(()=>{let s=[];for(let n in e){const l={type:n,\u4EBA\u6578:e[n],count:e[n]};s.push(l)}r(s)},[e]),o(H,D({},{data:[t,t],xField:"type",yField:["\u4EBA\u6578","count"],color:"#fff",legend:{itemName:{style:{fill:"#ddd"}}},yAxis:{label:{style:{fill:"#ddd"}}},xAxis:{label:{style:{fill:"#ddd"}}},geometryOptions:[{geometry:"column"},{geometry:"line",lineStyle:{lineWidth:2}}]}))},se=({chartValue:e})=>{const[t,r]=a.exports.useState([]);return a.exports.useEffect(()=>{let s=[];for(let n in e){const l={type:n,value:e[n]};s.push(l)}r(s)},[e]),o(O,D({},{appendPadding:10,data:t,angleField:"value",colorField:"type",radius:1,innerRadius:.6,legend:{itemName:{style:{fill:"#ddd"}}},label:{type:"inner",offset:"-50%",content:"{value}",style:{textAlign:"center",fontSize:14}},interactions:[{type:"element-selected"},{type:"element-active"}],statistic:{title:!1,content:{style:{whiteSpace:"pre-wrap",overflow:"hidden",textOverflow:"ellipsis",color:"#ddd"},content:"\u7522\u696D"}}}))};function re(){const{data:e}=a.exports.useContext(L),[t,r]=a.exports.useState({}),[f,s]=a.exports.useState({}),[n,l]=a.exports.useState({}),[y,h]=a.exports.useState({});a.exports.useState({}),a.exports.useEffect(()=>{console.log("context----",e),e.length>0&&A()},[e]);const v=(m,i)=>{i in m?m[i]++:m[i]=1},F=(m,i=6)=>{var c=[];for(var p in m)c.push([p,m[p]]);c.sort((d,u)=>u[1]-d[1]);const x={};for(let d=0;d<i;d++){const u=c[d];x[u[0]]=u[1]}return x},w=(m,i="desc")=>{var c=[];for(var p in m)c.push([p,m[p]]);c.sort((d,u)=>i==="desc"?u[1]-d[1]:d[1]-u[1]);const x={};for(let d=0;d<c.length;d++){const u=c[d];x[u[0]]=u[1]}return x},A=()=>{const m={},i={},c={},p={};e.forEach(x=>{const{company:d,works:u}=x,{job_tenure:b,salary:N,industry:S,salary_score:C}=d;v(m,b),v(i,N),v(c,S),v(p,C)}),r(m),s(w(i)),l(F(c,12)),h(p)};return g("div",{children:[g("div",{className:"block p-6 mt-10",children:[o("h3",{className:"title",children:"\u5E74\u8CC7"}),o(E,{chartValue:t})]}),g("div",{className:"block p-6 mt-10",children:[o("h3",{className:"title",children:"\u5E74\u85AA"}),o(te,{chartValue:f})]}),g("div",{className:"block p-6 mt-10",children:[o("h3",{className:"title",children:"\u7522\u696D\u5206\u4F48"}),o(se,{chartValue:n})]}),o("div",{className:"block p-6 mt-10",children:o("h3",{className:"title",children:"\u7522\u696D\u85AA\u8CC7\u8207\u6EFF\u610F\u5EA6"})})]})}function oe(){const[e,t]=a.exports.useState(0);return a.exports.useEffect(()=>{},[]),g("div",{className:"p-10",children:[o("h1",{className:"text-center font-bold text-2xl text-primary-100",children:"2021\u524D\u7AEF\u85AA\u8CC7\u8ABF\u67E5"}),g("ul",{className:"m-auto mt-6 w-72 p-1 h-10 flex items-center justify-between border border-gray-200 rounded-sm cursor-pointer",children:[o("li",{className:j("w-1/2","text-lg","text-gray-200","text-center",e===0&&"bg-gray-400"),onClick:()=>{t(0)},children:"\u57FA\u672C\u8CC7\u6599"}),o("li",{className:j("w-1/2","text-lg","text-gray-200","text-center",e===1&&"bg-gray-400"),onClick:()=>{t(1)},children:"\u85AA\u8CC7\u8207\u7522\u696D"})]}),e===0&&o("div",{children:o(ee,{})}),e===1&&o("div",{children:o(re,{})})]})}const ae="https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json",ne=()=>({"Content-Type":"application/x-www-form-urlencoded"}),le=M.create({headers:ne()}),ie=e=>{let t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach(r=>{(t[r]===""||t[r]===null||t[r]===void 0)&&delete t[r]}),t},ce=(e=ae,t={})=>{let r=JSON.parse(JSON.stringify(t));return r=W.stringify(ie(r)),le.get(e,r).then(f=>(console.log("response",f.data),f.data)).catch(f=>{console.log("error",f)})};K.div`
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
`;function de(){const[e,t]=a.exports.useState([]),{Provider:r}=L;return a.exports.useEffect(()=>{(async()=>{try{const s=await ce();t(s)}catch(s){console.log("error",s)}})()},[]),a.exports.useEffect(()=>{console.log("data",e)},[e]),o(r,{value:{data:e},children:o(T,{basename:window.location.pathname||"",children:o(U,{children:o(Q,{exact:!0,path:"/",element:o(oe,{})})})})})}X.render(o(Y,{children:o(de,{})}),document.getElementById("root"));
