var e,t,s,i=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},r=(e,t,s)=>(i(e,t,"read from private field"),s?s.call(e):t.get(e)),a=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},n=(e,t,s,r)=>(i(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);import{V as l,u as o}from"./vendor.eb0f7533.js";const c=[["View the Source Code of This Page","https://github.com/vanillajsx/vanillajsx.github.io"],["Document","https://github.com/vanillajsx/VanillaJSX/tree/master/doc"],["GitHub Repository","https://github.com/vanillajsx/VanillaJSX"],["Join Discussions","https://github.com/vanillajsx/VanillaJSX/discussions"]],d=()=>{const e={},t=l.r("div",{class:"menu_list_container hidden"},l.r("div",{ref:[e,"toggleButton"],id:"h-menu-button"},l.r("span",null),l.r("span",null)),l.r("div",{class:"menu-list"},c.map((e=>{const t=l.r("p",null,e[0]);return t.onclick=()=>window.open(e[1]),t}))),l.r("div",{ref:[e,"backField"],id:"backfield"})),{toggleButton:s,backField:i}=e;return o(t,"open",!1),t.watch("open",(e=>{e?t.classList.remove("hidden"):t.classList.add("hidden")})),i.onclick=()=>t.open=!1,s.onclick=()=>t.open=!t.open,t};const u=()=>l.r("header",null,l.r("div",{class:"_title_69m70_12"},"Vanilla.JSX"),l.r(d,null));let h;const p={};const m="_main_8b2wh_1";class v extends HTMLElement{constructor(...i){super(...i),a(this,e,1),a(this,t,null),a(this,s,void 0),n(this,s,l.r("div",{part:"bar"}));this.attachShadow({mode:"closed"}).appendChild(r(this,s))}static get observedAttributes(){return["max","value"]}connectedCallback(){this.render()}attributeChangedCallback(s,i,a){switch(s){case"max":n(this,e,+a),this.render();break;case"value":n(this,t,Math.min(r(this,e),a)),this.render()}}render(){if(r(this,t)){this.classList.remove("indeterminate"),r(this,t)===r(this,e)&&this.classList.add("complete");const i=r(this,t)/r(this,e)*100;r(this,s).style.width=i+"%"}else r(this,s).style.width="",this.classList.remove("complete"),this.classList.add("indeterminate")}get value(){return r(this,t)}get max(){return r(this,e)}set value(e){this.setAttribute("value",e)}set max(e){this.setAttribute("max",e)}}e=new WeakMap,t=new WeakMap,s=new WeakMap,customElements.define("custom-progress",v);const b=({progValue:e=0,children:t=null})=>{const s=l.r(v,{max:"100",value:e}),i=l.r("button",null,"click"),r=l.r("div",{class:"t3"},i,s,((e,t)=>t.watch("progValue",(t=>e(t))))," %",t);return o(r,"progValue",e),r.watch("progValue",(e=>s.value=e)),i.onclick=()=>{r.progValue<100?r.progValue+=10:r.progValue=0},r},g=()=>l.r("div",{class:`container ${m}`},(async(e,t)=>{await function(e,t){if(!t)return e();if(void 0===h){const e=document.createElement("link").relList;h=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in p)return;p[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":h,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./article.7c1919e8.js")),void 0).then((e=>e.default.split("<hr>").forEach((e=>t.appendChild(l.r("section",{innerHTML:e,class:"markdown-body"})))))),t.querySelector("#example-result-space").appendChild(l.r(b,null))}));document.querySelector("#app").appendChild(l.r("div",null,l.r(u,null),l.r(g,null)));
