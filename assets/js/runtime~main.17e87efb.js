(()=>{"use strict";var e,a,f,c,d,t={},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var f=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}o.m=t,o.c=r,e=[],o.O=(a,f,c,d)=>{if(!f){var t=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var r=!0,b=0;b<f.length;b++)(!1&d||t>=d)&&Object.keys(o.O).every((e=>o.O[e](f[b])))?f.splice(b--,1):(r=!1,d<t&&(t=d));if(r){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);o.r(d);var t={};a=a||[null,f({}),f([]),f(f)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,o.d(d,t),d},o.d=(e,a)=>{for(var f in a)o.o(a,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,f)=>(o.f[f](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",778:"3c4f33fe",948:"8717b14a",1289:"c48cee14",1499:"5d3756d6",1678:"470466af",1914:"d9f32620",2267:"59362658",2354:"d49991a0",2362:"e273c56f",2535:"814f3328",2859:"18c41134",3085:"1f391b9e",3089:"a6aa9e1f",3237:"1df93b7f",3514:"73664a40",3608:"9e4087bc",3792:"dff1c289",3874:"a6a208cd",3890:"1c1776ac",4013:"01a85c17",4070:"7e8f227d",4193:"f55d3e7a",4197:"28cd1ae8",4607:"533a09ca",4864:"f6716e59",5300:"6ff5a55a",5306:"88f14ccb",5456:"3a4bf825",5589:"5c868d36",6103:"ccc49370",6299:"664ba271",6504:"822bd8ab",6755:"e44a2883",6872:"2dde2587",6896:"36c2f9cd",7175:"976fe244",7414:"393be207",7645:"39843f11",7694:"fd7dffc1",7918:"17896441",8245:"819ad3a8",8610:"6875c492",8636:"f4f34a3a",8818:"1e4232ab",9003:"925b3f96",9277:"f6d7eda3",9419:"5a823916",9514:"1be78505",9627:"2f525a8c",9642:"7661071f",9671:"0e384e19",9755:"213c8469",9817:"14eb3368"}[e]||e)+"."+{53:"dbce0275",778:"c312f467",948:"8ca5cb33",1289:"f1d15712",1499:"dee9df2f",1678:"d30aa3af",1914:"927e1e11",2191:"f7e8f4ac",2267:"5a55953a",2354:"52d61699",2362:"db286240",2529:"039da8a3",2535:"210088ec",2859:"c6c64fca",3085:"c707b1c1",3089:"b0aed653",3237:"0aff52df",3514:"6a7dd850",3608:"008ab0a5",3792:"216f4414",3874:"091c2da1",3890:"a00422b1",3946:"789abe4f",4013:"61c84b88",4070:"36144092",4193:"13fa92d9",4197:"7ebee48c",4607:"5baeadb6",4864:"e08a48ab",4965:"c0e17632",4972:"b3e1ae47",5199:"cf2fc1e9",5300:"068315ac",5306:"4bb6ebbe",5456:"71588c1c",5589:"c640bb4c",6103:"376d88f4",6299:"87119d6c",6504:"428cfd1d",6755:"7414f76f",6872:"8f55d31b",6896:"e15e1da4",7175:"ee54c2ce",7192:"55e83e59",7414:"db3db268",7645:"7a2a62f5",7694:"828ad667",7918:"4ba3bf78",8245:"263a8222",8610:"2e9b39ec",8636:"4e2c3ca5",8818:"0dcb501e",9003:"70d84b9b",9277:"25b47e7d",9419:"d00d0e21",9514:"4b471a83",9627:"cd205e3a",9642:"86e5d70c",9671:"e5373e04",9755:"ac4f2f91",9817:"c7bb7047"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="xpla-academy:",o.l=(e,a,f,t)=>{if(c[e])c[e].push(a);else{var r,b;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+f){r=l;break}}r||(b=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",d+f),r.src=e),c[e]=[a];var u=(a,f)=>{r.onerror=r.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),b&&document.head.appendChild(r)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/xpla-academy-dev/",o.gca=function(e){return e={17896441:"7918",59362658:"2267","935f2afb":"53","3c4f33fe":"778","8717b14a":"948",c48cee14:"1289","5d3756d6":"1499","470466af":"1678",d9f32620:"1914",d49991a0:"2354",e273c56f:"2362","814f3328":"2535","18c41134":"2859","1f391b9e":"3085",a6aa9e1f:"3089","1df93b7f":"3237","73664a40":"3514","9e4087bc":"3608",dff1c289:"3792",a6a208cd:"3874","1c1776ac":"3890","01a85c17":"4013","7e8f227d":"4070",f55d3e7a:"4193","28cd1ae8":"4197","533a09ca":"4607",f6716e59:"4864","6ff5a55a":"5300","88f14ccb":"5306","3a4bf825":"5456","5c868d36":"5589",ccc49370:"6103","664ba271":"6299","822bd8ab":"6504",e44a2883:"6755","2dde2587":"6872","36c2f9cd":"6896","976fe244":"7175","393be207":"7414","39843f11":"7645",fd7dffc1:"7694","819ad3a8":"8245","6875c492":"8610",f4f34a3a:"8636","1e4232ab":"8818","925b3f96":"9003",f6d7eda3:"9277","5a823916":"9419","1be78505":"9514","2f525a8c":"9627","7661071f":"9642","0e384e19":"9671","213c8469":"9755","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,f)=>{var c=o.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var t=o.p+o.u(a),r=new Error;o.l(t,(f=>{if(o.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),t=f&&f.target&&f.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+t+")",r.name="ChunkLoadError",r.type=d,r.request=t,c[1](r)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,t=f[0],r=f[1],b=f[2],n=0;if(t.some((a=>0!==e[a]))){for(c in r)o.o(r,c)&&(o.m[c]=r[c]);if(b)var i=b(o)}for(a&&a(f);n<t.length;n++)d=t[n],o.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return o.O(i)},f=self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();