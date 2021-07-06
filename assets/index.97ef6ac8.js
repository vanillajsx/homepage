import{b as e,S as t,g as n,j as r,c as o,h as s,t as l,e as i,l as a,U as c,a as d}from"./editor.worker.12d76a04.js";const u=[["View the Source Code of This Page","https://github.com/bluejsx/bluejsx.github.io"],["Document","https://github.com/bluejsx/BlueJSX/tree/master/doc"],["GitHub Repository","https://github.com/bluejsx/BlueJSX"],["Join Discussions","https://github.com/bluejsx/BlueJSX/discussions"]],p=()=>{const n={},r=e.r("div",{class:"menu_list_container hidden"},e.r("div",{ref:[n,"toggleButton"],id:"h-menu-button"},e.r("span",null),e.r("span",null)),e.r("div",{class:"menu-list"},u.map((t=>{const n=e.r("p",null,t[0]);return n.onclick=()=>window.open(t[1]),n}))),e.r("div",{ref:[n,"backField"],id:"backfield"})),{toggleButton:o,backField:s}=n;return t(r,"open",!1),r.watch("open",(e=>{e?r.classList.remove("hidden"):r.classList.add("hidden")})),s.onclick=()=>r.open=!1,o.onclick=()=>r.open=!r.open,r};const h=()=>e.r("header",null,e.r("div",{class:"_title_1j2ch_12"},"BlueJSX"),e.r(p,null));let f;const m={},g=function(e,t){if(!t)return e();if(void 0===f){const e=document.createElement("link").relList;f=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in m)return;m[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":f,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};const _="_main_ul40b_1";var b="_code-options_ul40b_5";const v=()=>{const t={},n=e.r("svg",{viewBox:"0 0 256 256",width:"80%",height:"80%"},e.r("g",null,e.r("linearGradient",{id:"_lgradient_2",x1:"0.5",y1:"0",x2:"0.5",y2:"1",gradientTransform:"matrix(256,0,0,256,0,0)",gradientUnits:"userSpaceOnUse"},e.r("stop",{offset:"1.6666666666666667%","stop-opacity":"1","stop-color":"black"}),e.r("stop",{ref:[t,"stopColor"],offset:"100%","stop-opacity":"1","stop-color":"#0000f5"})),e.r("circle",{"vector-effect":"non-scaling-stroke",cx:"128",cy:"128",r:"128",fill:"url(#_lgradient_2)"}),e.r("line",{ref:[t,"line1"],x1:"128",y1:"223",x2:"25",y2:"71",stroke:"white","stroke-linecap":"round","stroke-width":"8","stroke-dasharray":"1 1",pathLength:"1"}),e.r("line",{ref:[t,"line2"],x1:"128",y1:"223",x2:"231",y2:"71",stroke:"white","stroke-linecap":"round","stroke-width":"8","stroke-dasharray":"1 1",pathLength:"1"}),e.r("line",{ref:[t,"line3"],x1:"192",y1:"222",x2:"64",y2:"33",stroke:"white","stroke-linecap":"round","stroke-width":"8","stroke-dasharray":"1 1",pathLength:"1"}),e.r("line",{ref:[t,"line4"],x1:"64",y1:"222",x2:"192",y2:"33",stroke:"white","stroke-linecap":"round","stroke-width":"8","stroke-dasharray":"1 1",pathLength:"1"}))),{stopColor:r,line1:o,line2:s,line3:l,line4:i}=t,a=1600,c=[{strokeDashoffset:[2,1,0,0],offset:[0,.1,.4,1]},{duration:a,easing:"ease-in-out"}],d=[{strokeDashoffset:[2,1,1,1,0],offset:[0,.1,.2,.4,.7],easing:["linear","step-end","ease-in-out"]},{duration:a,easing:"ease-in-out"}],u=[o.animate(...c),s.animate(...c),l.animate(...d),i.animate(...d),r.animate([{stopColor:"#0000f5"},{stopColor:"#000000",offset:.2},{stopColor:"#0000f5",offset:1}],{duration:a,easing:"ease-in-out"})];return Object.defineProperties(n,{play:{value:()=>{for(let e=u.length;e--;)u[e].play()}},pause:{value:()=>{for(let e=u.length;e--;)u[e].pause()}}}),n};globalThis.Blue=e,globalThis.useAttr=t,globalThis.AttrHolder=n,self.MonacoEnvironment={getWorker:(e,t)=>"json"===t?new r:"css"===t||"scss"===t||"less"===t?new o:"html"===t||"handlebars"===t||"razor"===t?new s:"typescript"===t||"javascript"===t?new l:new i},a.typescript.typescriptDefaults.setCompilerOptions({target:a.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0,moduleResolution:a.typescript.ModuleResolutionKind.NodeJs,module:a.typescript.ModuleKind.ESNext,noEmit:!1,jsx:a.typescript.JsxEmit.Preserve,jsxFactory:"Blue.r",lib:["dom","esnext"],allowJs:!0,typeRoots:["node_modules"]});const y=({code:t="",lang:n="jsx",children:r})=>{const o={},s=e.r("div",{class:"codespace preparing"},e.r("div",{class:"editor-options"},r),e.r("div",{ref:[o,"editorContainer"],class:"editor-container"}),e.r("button",{ref:[o,"runButton"],class:"run-button"},"Click to run ▶️"),e.r("div",{ref:[o,"resultSpace"],class:"editor-result"})),{editorContainer:l,resultSpace:i,runButton:u}=o,p=c.parse("file:///main."+n),h=d.create(l,{lineNumbers:"off",scrollBeyondLastLine:!1,theme:"vs-dark",automaticLayout:!0,minimap:{enabled:!1},tabSize:2,model:d.getModel(p)||d.createModel(t,"typescript",p)});return Object.defineProperties(s,{editor:{value:h},init:{value:function(){Promise.all([g((()=>import("./typescript.df64be61.js").then((function(e){return e.t}))),["./assets/typescript.df64be61.js","./assets/editor.worker.12d76a04.js","./assets/editor.worker.6e16fcef.css"]),g((()=>import("./index.d.9adcb947.js")),void 0)]).then((([{default:t},{default:n}])=>{s.classList.remove("preparing"),a.typescript.typescriptDefaults.addExtraLib(n,"file:///node_modules/bluejsx/index.d.ts");const r=()=>{i.innerHTML="",g((()=>{return import("data:text/javascript;charset=utf-8,"+encodeURIComponent((e=(e=h.getValue()).replace(/import +(Blue* *,? *)?({? *[\w, ]+ *}?) +from +['"]bluejsx(\/\w*)*['"]/g,""),t.transpile(e,{jsx:t.JsxEmit.React,jsxFactory:"Blue.r",jsxFragmentFactory:"Blue.Fragment",lib:["dom","esnext"],module:t.ModuleKind.ESNext,target:t.ScriptTarget.ES2018,removeComments:!0}))));var e}),void 0).then((t=>i.appendChild(e.r(t.default,null))))};u.onclick=r,r()}))}}}),s};var x="import { useAttr } from 'bluejsx'\n\n//takes in attributes as arguments (access to children elements via 'children' attribute)\nconst Example = ({ progValue = 0, children = null }) => {\n\n  //declare elements\n  const btn = <button>click</button>\n  const progress = <progress max={100} value={progValue} />\n  const progText = new Text()\n  const self = (\n    <div>\n      {btn}\n      {progress}\n      {progText}%\n      {children}\n    </div>\n  )\n\n  /*\n  below defines a property named 'progValue',\n  and when 'progValue' changes, \n  all registered listeners will be executed.\n  */\n  useAttr(self, 'progValue', progValue)\n\n  // functionalities\n  //when `self.progValue` changed, run the following listener\n  self.watch('progValue', v => {\n    progress.value = v\n    progText.data = v\n  })\n\n  btn.onclick = () => {\n    /*\n      below just looks assigning a value to a property,\n      however this is running getter/setter method,\n      which executes all registered listener functions via `watch` method.\n    */\n    if (self.progValue < 100) self.progValue += 10\n    else self.progValue = 0\n  }\n\n  // return self element\n  return self\n}\nexport default Example",k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const w=()=>e.r("div",{class:`container ${_}`},(async t=>{await g((()=>import("./article.26c810c6.js")),void 0).then((n=>n.default.split("<hr>").forEach((n=>t.appendChild(e.r("section",{innerHTML:n,class:"markdown-body"}))))));const n=t.querySelector("#logo_container").appendChild(e.r(v,null));n.pause(),n.onmouseenter=()=>n.play(),n.onclick=()=>n.play();const r={},o=t.querySelector("#example-codespace").appendChild(e.r(y,{code:x},e.r("label",{for:"code-options"}," Coding style: "),e.r("select",{id:"code-options",class:b,ref:[r,"codeSelector"]},e.r("option",{value:"0"},"JSX"),e.r("option",{value:"1"},"JSX with ref attribute"),e.r("option",{value:"2"},"TSX"),e.r("option",{value:"3"},"TSX with ref attribute"),e.r("option",{value:"4"},"TSX + SVG Animation")))),s=()=>{o.getBoundingClientRect().top<500&&(o.init(),t.removeEventListener("scroll",s))};t.addEventListener("scroll",s);const{codeSelector:l}=r,{editor:i}=o,a=c.parse("file:///main.jsx"),u=c.parse("file:///main.tsx"),p=d.getModel(a)||d.createModel(null,"typescript",a),h=d.getModel(u)||d.createModel(null,"typescript",u);l.onchange=async()=>{switch(l.value){case"0":g((()=>Promise.resolve().then((function(){return k}))),void 0).then((({default:e})=>{i.setModel(p),i.setValue(e)}));break;case"1":g((()=>import("./JSXWithRef.debc6c63.js")),["./assets/JSXWithRef.debc6c63.js","./assets/editor.worker.12d76a04.js","./assets/editor.worker.6e16fcef.css"]).then((({default:e})=>{i.setModel(p),i.setValue(e)}));break;case"2":g((()=>import("./TSXDeault.17d42936.js")),["./assets/TSXDeault.17d42936.js","./assets/editor.worker.12d76a04.js","./assets/editor.worker.6e16fcef.css"]).then((({default:e})=>{i.setModel(h),i.setValue(e)}));break;case"3":g((()=>import("./TSXWithRef.03578806.js")),["./assets/TSXWithRef.03578806.js","./assets/editor.worker.12d76a04.js","./assets/editor.worker.6e16fcef.css"]).then((({default:e})=>{i.setModel(h),i.setValue(e)}));break;case"4":g((()=>import("./TSX_SVG_Anim.2c57b7dc.js")),["./assets/TSX_SVG_Anim.2c57b7dc.js","./assets/editor.worker.12d76a04.js","./assets/editor.worker.6e16fcef.css"]).then((({default:e})=>{i.setModel(h),i.setValue(e)}))}}}));document.querySelector("#app").appendChild(e.r("div",null,e.r(h,null),e.r(w,null)));