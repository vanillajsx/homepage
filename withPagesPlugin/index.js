var g=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(o,t)=>(typeof require!="undefined"?require:o)[t]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});import w from"directory-tree";import{resolve as i,relative as c}from"path";import{createServer as y}from"vite";import S from"vite-with-bluejsx";import l from"fs";import v from"deepmerge";import{URL as P}from"url";function $(e){var d;S(e);let o={},t=i(new P(import.meta.url).pathname,"../../");console.log(g.main,t);let r=i(t,"./pages"),p=i(t,"./.bluepages");l.mkdirSync(p,{recursive:!0});let D=w(r,{extensions:/\.(md|mdx|js|jsx|ts|tsx)$/,normalizePath:!0},({name:m},s)=>{let n=m.replace(/.[\w]+$/,"");if(n.indexOf("_")===0)return null;let u=c(t+"/pages",s),a=i(p+"/"+u,"../");l.mkdirSync(a,{recursive:!0});let f=i(a,`./${n}.html`);l.writeFileSync(i(a,`./${n}.js`),`import Component from '${c(a,s)}';import('${c(a,r)}/_app').then(({default: Page})=>document.querySelector('#app').appendChild(Page({Component,pageProps:{}})))`);let h=l.readFileSync(`${r}/_template.html`,"utf-8").replace("</body",`<script type="module" src="./${n}.js"><\/script></body`);l.writeFileSync(f,h),o[u.replace(/\//,"_").replace(/.[\w]+$/,"")]=f});return(d=e.plugins)!=null||(e.plugins=[]),e.plugins.push({name:"with-pages-listen-dir",async configureServer(m){let{watcher:s}=m;s.add(r),s.on("add",(n,u)=>{n.includes(r)&&b(m)})}}),v(e,{build:{rollupOptions:{input:o},emptyOutDir:!0,outDir:c(p,i(t,"./dist"))},root:p,publicDir:t+"/public"})}async function b(e){global.__vite_start_time=Date.now();let{port:o}=e.config.server;await e.close();let t=null;try{t=await y(e.config.inlineConfig)}catch(r){e.config.logger.error(r.message,{timestamp:!0});return}for(let r in t)r!=="app"&&(e[r]=t[r]);e.config.server.middlewareMode?e.config.logger.info("server restarted.",{timestamp:!0}):await e.listen(o,!0)}export{$ as default};
