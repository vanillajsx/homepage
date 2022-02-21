import{_ as r}from"./preload-helper.de811724.js";import{C as l}from"./vendor.ef31fef8.js";var n=()=>l.r("div",null,l.r("h1",null,"Templates"),l.r("h2",null,"How to use templates to start new projects"),l.r("p",null,"Here is how you can create new BlueJSX project in commandline:"),l.r("pre",null,l.r("code",{class:"language-sh"},"npx degit bluejsx/templates/<template name> <your project name>",l.r("br"),l.r("span",{class:"hljs-built_in"},"cd")," <your project name>",l.r("br"),"npm i",l.r("br"))),l.r("ul",null,l.r("li",null,"replace ",l.r("code",null,"<your project name>")," with your desired project folder name."),l.r("li",null,"replace ",l.r("code",null,"<template name>")," with name of templates (",l.r("code",null,"vite-js"),", ",l.r("code",null,"vite-ts"),", ",l.r("code",null,"pages"),", ",l.r("code",null,"vite-mdx"),")")),l.r("h2",null,l.r("code",null,"vite-js")),l.r("p",null,"BlueJSX template in JS"),l.r("h2",null,l.r("code",null,"vite-ts")),l.r("p",null,"BlueJSX template in TS"),l.r("h2",null,l.r("code",null,"vite-mdx")),l.r("p",null,"BlueJSX template with MDX example."),l.r("p",null,"You can use your BlueJSX components inside ",l.r("code",null,".mdx")," file"),l.r("p",null,"(e.g. ",l.r("code",null,"<Component />"),")"),l.r("h2",null,l.r("code",null,"pages")),l.r("blockquote",null,l.r("p",null,"\u26A0\uFE0F This feature is experimental.")),l.r("p",null,"BlueJSX template for multiple page websites."),l.r("ul",null,l.r("li",null,"this supports BlueMDX")),l.r("p",null,"each files (either ",l.r("code",null,".js"),", ",l.r("code",null,".jsx"),", ",l.r("code",null,".tsx"),", ",l.r("code",null,".md"),", ",l.r("code",null,".mdx"),") in ",l.r("code",null,"pages")," directory corresponds to each HTML outputs."),l.r("p",null,"e.g."),l.r("ul",null,l.r("li",null,l.r("code",null,"pages/index.mdx")," -> ",l.r("code",null,"dist/index.html")),l.r("li",null,l.r("code",null,"pages/pageB.ts")," -> ",l.r("code",null,"dist/pageB.html")),l.r("li",null,l.r("code",null,"pages/sub/pageC.md")," -> ",l.r("code",null,"dist/sub/pageC.html"))),l.r("h2",null,"GitHub"),l.r("p",null,"The template codes can be found in ",l.r("a",{href:"https://github.com/bluejsx/templates"},"GitHub Repository"),"."));r(()=>import("./_app.a20aabdd.js"),["assets/_app.a20aabdd.js","assets/_app.fc525d68.css","assets/vendor.ef31fef8.js","assets/vendor.8780ad32.css"]).then(({default:e})=>document.querySelector("#app").appendChild(e({Component:n,pageProps:{}})));