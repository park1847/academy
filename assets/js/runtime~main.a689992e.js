(()=>{"use strict";var e,a,f,c,d,t={},r={};function b(e){var a=r[e];if(void 0!==a)return a.exports;var f=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=t,b.c=r,b.amdD=function(){throw new Error("define cannot be used indirect")},b.amdO={},e=[],b.O=(a,f,c,d)=>{if(!f){var t=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var r=!0,o=0;o<f.length;o++)(!1&d||t>=d)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(r=!1,d<t&&(t=d));if(r){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);b.r(d);var t={};a=a||[null,f({}),f([]),f(f)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,b.d(d,t),d},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",473:"647fabee",513:"929c7ddd",578:"76f344c5",948:"8717b14a",1417:"085d40fe",1678:"470466af",1849:"f6d7eda3",1914:"d9f32620",2209:"9619e96e",2211:"e5928850",2362:"e273c56f",2535:"814f3328",2785:"e82bf895",2859:"18c41134",3085:"1f391b9e",3089:"a6aa9e1f",3237:"1df93b7f",3514:"73664a40",3608:"9e4087bc",3792:"dff1c289",3890:"1c1776ac",4013:"01a85c17",4070:"7e8f227d",4193:"f55d3e7a",4243:"312e0cb6",4607:"533a09ca",4692:"c163ec2f",4762:"dbdbe61c",4864:"f6716e59",5300:"6ff5a55a",5441:"e2996d74",5456:"3a4bf825",5589:"5c868d36",5961:"5e70bed1",6103:"ccc49370",6199:"7c62eccb",6504:"822bd8ab",6538:"c096d1f8",6755:"e44a2883",6784:"32cb871d",6872:"2dde2587",6896:"36c2f9cd",7175:"976fe244",7352:"9f7ad174",7414:"393be207",7437:"0607ae2d",7603:"140e423a",7645:"39843f11",7733:"52250854",7748:"47ec7214",7892:"edef8baf",7918:"17896441",8068:"09622cfa",8595:"e9ed502a",8610:"6875c492",8779:"bdd5c1a5",8818:"1e4232ab",8899:"c23b0b83",9003:"925b3f96",9277:"6c437a26",9514:"1be78505",9627:"2f525a8c",9642:"7661071f",9671:"0e384e19",9755:"213c8469",9785:"50fbb5fe",9793:"22c45da0",9817:"14eb3368"}[e]||e)+"."+{53:"be67e528",473:"45b1d991",513:"fe8dca15",578:"6ddc870c",614:"730790ce",948:"d89b5458",1417:"439308e9",1678:"1148c050",1849:"ae96112f",1914:"556564d9",2191:"5050c726",2209:"7a5f541b",2211:"c7937966",2362:"173828bb",2529:"e23b9948",2535:"368a7604",2621:"dd8cbbe9",2785:"9c47e608",2859:"3a369d6d",3085:"a84c51de",3089:"c770d5ff",3237:"32fb8a74",3514:"61071091",3608:"310b025c",3792:"c347bb03",3890:"496aafec",4013:"5fc836d2",4070:"b193ea57",4193:"3c72e54c",4243:"6c3470e2",4607:"649de2e3",4692:"df45c735",4762:"c4ed7a56",4864:"1aa2ae35",4965:"42392e0f",4972:"f0198c9a",5199:"7a5c5fd7",5300:"0a63802f",5441:"fe1cfbad",5456:"d4d5ab53",5589:"2a63c606",5692:"95880a51",5961:"cfb2a385",6103:"449e78a2",6199:"a2ea7f66",6316:"d739c12a",6504:"ee5a4356",6538:"570df091",6755:"193844dd",6784:"3b66b1f0",6872:"9308ec0a",6896:"e15e1da4",7175:"854ecf33",7192:"2029042a",7352:"1b73aef9",7414:"aabbb66d",7437:"d59414e0",7603:"026a4101",7645:"fc91ad47",7724:"55c9d2c6",7733:"7ba3664e",7748:"6f85a474",7892:"1ae1c96b",7918:"51b2b6f1",8068:"779f27d6",8453:"cb827f3b",8595:"7c946093",8610:"9debf67a",8779:"5f6e643f",8818:"77d23154",8899:"abd41ab3",9003:"81f31793",9277:"c9211bb2",9487:"33e884df",9514:"e08b3ace",9627:"976492a3",9642:"8fd05ec5",9671:"c243aea0",9755:"f468e5d3",9785:"4653c1c8",9793:"81ab60c6",9817:"b468c2ed"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="xpla-academy:",b.l=(e,a,f,t)=>{if(c[e])c[e].push(a);else{var r,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+f){r=l;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,b.nc&&r.setAttribute("nonce",b.nc),r.setAttribute("data-webpack",d+f),r.src=e),c[e]=[a];var u=(a,f)=>{r.onerror=r.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/xpla-academy-dev/",b.gca=function(e){return e={17896441:"7918",52250854:"7733","935f2afb":"53","647fabee":"473","929c7ddd":"513","76f344c5":"578","8717b14a":"948","085d40fe":"1417","470466af":"1678",f6d7eda3:"1849",d9f32620:"1914","9619e96e":"2209",e5928850:"2211",e273c56f:"2362","814f3328":"2535",e82bf895:"2785","18c41134":"2859","1f391b9e":"3085",a6aa9e1f:"3089","1df93b7f":"3237","73664a40":"3514","9e4087bc":"3608",dff1c289:"3792","1c1776ac":"3890","01a85c17":"4013","7e8f227d":"4070",f55d3e7a:"4193","312e0cb6":"4243","533a09ca":"4607",c163ec2f:"4692",dbdbe61c:"4762",f6716e59:"4864","6ff5a55a":"5300",e2996d74:"5441","3a4bf825":"5456","5c868d36":"5589","5e70bed1":"5961",ccc49370:"6103","7c62eccb":"6199","822bd8ab":"6504",c096d1f8:"6538",e44a2883:"6755","32cb871d":"6784","2dde2587":"6872","36c2f9cd":"6896","976fe244":"7175","9f7ad174":"7352","393be207":"7414","0607ae2d":"7437","140e423a":"7603","39843f11":"7645","47ec7214":"7748",edef8baf:"7892","09622cfa":"8068",e9ed502a:"8595","6875c492":"8610",bdd5c1a5:"8779","1e4232ab":"8818",c23b0b83:"8899","925b3f96":"9003","6c437a26":"9277","1be78505":"9514","2f525a8c":"9627","7661071f":"9642","0e384e19":"9671","213c8469":"9755","50fbb5fe":"9785","22c45da0":"9793","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var t=b.p+b.u(a),r=new Error;b.l(t,(f=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),t=f&&f.target&&f.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+t+")",r.name="ChunkLoadError",r.type=d,r.request=t,c[1](r)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,t=f[0],r=f[1],o=f[2],n=0;if(t.some((a=>0!==e[a]))){for(c in r)b.o(r,c)&&(b.m[c]=r[c]);if(o)var i=o(b)}for(a&&a(f);n<t.length;n++)d=t[n],b.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return b.O(i)},f=self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();