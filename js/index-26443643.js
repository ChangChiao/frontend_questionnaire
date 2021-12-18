var R=Object.defineProperty;var F=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var A=(e,t,o)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,w=(e,t)=>{for(var o in t||(t={}))I.call(t,o)&&A(e,o,t[o]);if(F)for(var o of F(t))$.call(t,o)&&A(e,o,t[o]);return e};import{g as J,r as n,j as a,P as _,C as q,B as G,a as d,c as N,b as H,l as M,n as K,d as T,R as U,e as W,f as Q,h as V}from"./vendor-f9a1e5f3.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};X();const Y=({chartValue:e})=>{const t=J("canvas"),[o,i]=n.exports.useState([]);return n.exports.useEffect(()=>{let l=[];for(let p in e){const f={type:p,value:e[p]};l.push(f)}i(l)},[e]),a(_,w({},{appendPadding:10,data:o,angleField:"value",colorField:"type",radius:.75,legend:!1,label:{type:"spider",labelHeight:40,formatter:(l,p)=>{const f=new t.Group({});return f.addShape({type:"circle",attrs:{x:0,y:0,width:40,height:50,r:5,fill:p.color}}),f.addShape({type:"text",attrs:{x:10,y:8,text:`${l.type}`,fill:p.color}}),f.addShape({type:"text",attrs:{x:0,y:25,text:`${l.value}\u4F4D ${(l.percent*100).toFixed(0)}%`,fill:"#ccc",fontWeight:700}}),f}},interactions:[{type:"element-selected"},{type:"element-active"}]}))},D=({chartValue:e})=>{const[t,o]=n.exports.useState([]);return n.exports.useEffect(()=>{let r=[];for(let s in e){const l={type:s,value:e[s]};r.push(l)}o(r)},[e]),a(q,w({},{data:t,xField:"type",yField:"value",label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},yAxis:{label:{style:{fill:"#ddd"}}},xAxis:{label:{style:{fill:"#ddd"}}},color:({type:r})=>r==="26~30 \u6B72"?"#FAAD14":"#5B8FF9",legend:!1}))},S=({chartValue:e})=>{const[t,o]=n.exports.useState([]);return n.exports.useEffect(()=>{let r=[];for(let s in e){const l={type:s,value:e[s]};r.push(l)}console.log("34343",r),o(r)},[e]),a(G,w({},{data:t,xField:"value",yField:"type",seriesField:"type",xAxis:{label:{style:{fill:"#ddd"}}},yAxis:{label:{style:{fill:"#ddd"}}},color:({type:r})=>r==="26~30 \u6B72"?"#FAAD14":"#5B8FF9",legend:!1}))},C=n.exports.createContext({});function Z(){const{data:e}=n.exports.useContext(C),[t,o]=n.exports.useState({}),[i,r]=n.exports.useState({}),[s,l]=n.exports.useState({}),[p,f]=n.exports.useState({}),[B,E]=n.exports.useState({});n.exports.useEffect(()=>{console.log("context----",e),e.length>0&&k()},[e]);const b=(c,u)=>{u in c?c[u]++:c[u]=1},v=(c,u=6)=>{var g=[];for(var h in c)g.push([h,c[h]]);g.sort((m,x)=>x[1]-m[1]);const y={};for(let m=0;m<u;m++){const x=g[m];y[x[0]]=x[1]}return y},k=()=>{const c={\u7537:0,\u5973:0},u={},g={},h={},y={};e.forEach(m=>{const{gender:x,age:L,major:j,company:O,works:ie,education:z}=m,{area:P,industry:ce,salary:de}=O;x==="\u7537\u6027"?c.\u7537++:c.\u5973++,b(u,L),b(g,j),b(h,P),b(y,z)}),o(c),r(u),l(v(g)),f(v(h)),E(y),console.log("genderList",c),console.log("ageList",u)};return d("div",{children:[d("div",{className:"row mt-10",children:[d("div",{className:"block p-6 w-full mr-0 md:w-1/2 md:mr-4",children:[a("h3",{className:"title",children:"\u5730\u5340"}),a(D,{chartValue:p})]}),d("div",{className:"block p-6 w-full mr-0 md:w-1/2",children:[a("h3",{className:"title",children:"\u5E74\u9F61"}),a(D,{chartValue:i})]})]}),d("div",{className:"row mt-10",children:[d("div",{className:"block p-6 w-full mr-0 md:w-1/2 md:mr-4",children:[a("h3",{className:"title",children:"\u6027\u5225\u6BD4\u4F8B"}),a(Y,{chartValue:t})]}),d("div",{className:"block p-6 w-full mr-0 md:w-1/2",children:[a("h3",{className:"title",children:"\u6559\u80B2\u7A0B\u5EA6"}),a(S,{chartValue:B})]})]}),d("div",{className:"block p-6 mt-10",children:[a("h3",{className:"title",children:"\u79D1\u7CFB"}),a(S,{chartValue:s})]})]})}function ee(){return a("div",{children:"123"})}function te(){const[e,t]=n.exports.useState(0);return n.exports.useEffect(()=>{},[]),d("div",{className:"p-10",children:[a("h1",{className:"text-center font-bold text-2xl text-primary-100",children:"2021\u524D\u7AEF\u85AA\u8CC7\u8ABF\u67E5"}),d("ul",{className:"m-auto mt-6 w-72 p-1 h-10 flex items-center justify-between border border-gray-200 rounded-sm cursor-pointer",children:[a("li",{className:N("w-1/2","text-lg","text-gray-200","text-center",e===0&&"bg-gray-400"),onClick:()=>{t(0)},children:"\u57FA\u672C\u8CC7\u6599"}),a("li",{className:N("w-1/2","text-lg","text-gray-200","text-center",e===1&&"bg-gray-400"),onClick:()=>{t(1)},children:"\u85AA\u8CC7\u8207\u7522\u696D"})]}),e===0&&a("div",{children:a(Z,{})}),e===1&&a("div",{children:a(ee,{})})]})}const re="https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json",oe=()=>({"Content-Type":"application/x-www-form-urlencoded"}),ae=H.create({headers:oe()}),se=e=>{let t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach(o=>{(t[o]===""||t[o]===null||t[o]===void 0)&&delete t[o]}),t},ne=(e=re,t={})=>{let o=JSON.parse(JSON.stringify(t));return o=M.stringify(se(o)),ae.get(e,o).then(i=>(console.log("response",i.data),i.data)).catch(i=>{console.log("error",i)})};K.div`
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
`;function le(){const[e,t]=n.exports.useState([]),{Provider:o}=C;return n.exports.useEffect(()=>{(async()=>{try{const r=await ne();t(r)}catch(r){console.log("error",r)}})()},[]),n.exports.useEffect(()=>{console.log("data",e)},[e]),a(o,{value:{data:e},children:a(T,{basename:window.location.pathname||"",children:a(U,{children:a(W,{exact:!0,path:"/",element:a(te,{})})})})})}Q.render(a(V,{children:a(le,{})}),document.getElementById("root"));
