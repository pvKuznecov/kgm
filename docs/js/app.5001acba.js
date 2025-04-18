(function(){"use strict";var e={3986:function(e,t){const n=1,o="MDB";class r{constructor(){this.version=n}starter(){let e,t=indexedDB.open(o,n);return console.log("openRequest:::",t),t.onupgradeneeded=function(e){console.log("openRequest.onupgradeneeded"),console.log("event",e);let n=t.result;n.objectStoreNames.contains("counters")||n.createObjectStore("counters",{keyPath:"id"}),n.objectStoreNames.contains("tablets")||n.createObjectStore("tablets",{keyPath:"id"})},t.onerror=function(){console.error("Error",t.error)},t.onsuccess=function(){console.log("openRequest.onsuccess");let n=t.result;e=n},e}addElem_counter(){let e=indexedDB.open(o,n);e.onsuccess=function(){let t=e.result,n=t.transaction("counters","readwrite"),o=n.objectStore("counters"),r={id:"1",name:"All"},u=o.add(r);u.onsuccess=function(){console.log("Добавлено",u.result)},u.onerror=function(){console.log("Ошибка",u.error)}}}getDB(){let e=[],t=indexedDB.open(o,n);t.onsuccess=function(){let n=t.result;console.log("db",n);let o=n.transaction("counters","readonly");try{let t=o.objectStore("counters");console.log("counters",t);let n=t.get(1);return console.log("getR",n),e=n,e}catch(r){console.log("ERROR!!!",r.message)}}}delDB(){let e=indexedDB.deleteDatabase(o);console.log("delRequest"),e.onerror=function(){console.log("delRequest.onerror")},e.onsuccess=function(){console.log("delRequest.onsuccess")}}}let u=new r;t.A=u},4100:function(e,t,n){var o=n(5130),r=n(6768);function u(e,t){const n=(0,r.g2)("router-link"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[(0,r.bF)(n,{class:"navitem_m",to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Home")]))),_:1}),(0,r.bF)(n,{class:"navitem_m",to:"/test"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Test")]))),_:1}),(0,r.bF)(n,{class:"navitem_m",to:"/about"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("About")]))),_:1})]),(0,r.bF)(o)],64)}var c=n(1241);const i={},l=(0,c.A)(i,[["render",u]]);var a=l,s=n(1387),f=n(4232);const d={class:"container homearea"},m={class:"row"};function p(e,t){const n=(0,r.g2)("router-link");return(0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.areaData,(e=>((0,r.uX)(),(0,r.CE)("div",d,[(0,r.Lk)("div",m,[(0,r.Lk)("h2",null,(0,f.v_)(e.title),1),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.elements,(e=>((0,r.uX)(),(0,r.Wv)(n,{class:"col areaelem",to:e.rlink},{default:(0,r.k6)((()=>[(0,r.Lk)("div",null,[(0,r.Lk)("h3",null,(0,f.v_)(e.title),1)])])),_:2},1032,["to"])))),256))])])))),256)}var v={name:"HomeView",data(){return{areaData:[{title:"Helpers",elements:[{title:"Counters",rlink:"/counters"},{title:"Tablets",rlink:"/tablets"}]},{title:"GBase",elements:[]},{title:"Rules",elements:[{title:"Rules",rlink:"/rules"}]}]}}};const h=(0,c.A)(v,[["render",p]]);var g=h;const b=[{path:"/",name:"home",component:g},{path:"/test",name:"test",component:()=>n.e(781).then(n.bind(n,1781))},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,603))},{path:"/counters",name:"counters",component:()=>n.e(745).then(n.bind(n,745))},{path:"/rules",name:"rules",component:()=>n.e(115).then(n.bind(n,1115))}],k=(0,s.aE)({history:(0,s.Bt)(),routes:b});var y=k;n(5707),n(3986);(0,o.Ef)(a).use(y).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return e[o].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,u){if(!o){var c=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],u=e[s][2];for(var i=!0,l=0;l<o.length;l++)(!1&u||c>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,u<c&&(c=u));if(i){e.splice(s--,1);var a=r();void 0!==a&&(t=a)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{115:"10f5573b",594:"337aec39",745:"aef2e201",781:"98229922"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{115:"b804c8f8",745:"d18fb2f7",781:"e324062f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="kgm:";n.l=function(o,r,u,c){if(e[o])e[o].push(r);else{var i,l;if(void 0!==u)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var f=a[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+u){i=f;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=o),e[o]=[r];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/kgm/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,u){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",n.nc&&(c.nonce=n.nc);var i=function(n){if(c.onerror=c.onload=null,"load"===n.type)r();else{var o=n&&n.type,i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,c.parentNode&&c.parentNode.removeChild(c),u(l)}};return c.onerror=c.onload=i,c.href=t,o?o.parentNode.insertBefore(c,o.nextSibling):document.head.appendChild(c),c},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===e||u===t))return r}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){r=c[o],u=r.getAttribute("data-href");if(u===e||u===t)return r}},o=function(o){return new Promise((function(r,u){var c=n.miniCssF(o),i=n.p+c;if(t(c,i))return r();e(o,i,null,r,u)}))},r={524:0};n.f.miniCss=function(e,t){var n={115:1,745:1,781:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=u);var c=n.p+n.u(t),i=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+c+")",i.name="ChunkLoadError",i.type=u,i.request=c,r[1](i)}};n.l(c,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,u,c=o[0],i=o[1],l=o[2],a=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var s=l(n)}for(t&&t(o);a<c.length;a++)u=c[a],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},o=self["webpackChunkkgm"]=self["webpackChunkkgm"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(4100)}));o=n.O(o)})();
//# sourceMappingURL=app.5001acba.js.map