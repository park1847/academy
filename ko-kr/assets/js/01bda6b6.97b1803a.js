"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[9151],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[m]="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1635:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:5},i="Cosmwasm Contract \uc791\uc131 \ubc0f \ube4c\ub4dc\ud558\uae30",c={unversionedId:"tutorial/add-func-to-game-2/write-contract",id:"tutorial/add-func-to-game-2/write-contract",title:"Cosmwasm Contract \uc791\uc131 \ubc0f \ube4c\ub4dc\ud558\uae30",description:"\uba3c\uc800 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c Cosmwasm \ucee8\ud2b8\ub799\ud2b8\uac00 \uc5b4\ub5bb\uac8c \uc0dd\uc131\ub418\ub294\uc9c0\ubd80\ud130 \uc0b4\ud3b4\ubd05\uc2dc\ub2e4.",source:"@site/docs/3-tutorial/3-add-func-to-game-2/5-write-contract.mdx",sourceDirName:"3-tutorial/3-add-func-to-game-2",slug:"/tutorial/add-func-to-game-2/write-contract",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/add-func-to-game-2/write-contract",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Convert \uae30\ub2a5 \uc801\uc6a9\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/add-func-to-game-2/convert"}},p={},l=[],s={toc:l},m="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosmwasm-contract-\uc791\uc131-\ubc0f-\ube4c\ub4dc\ud558\uae30"},"Cosmwasm Contract \uc791\uc131 \ubc0f \ube4c\ub4dc\ud558\uae30"),(0,a.kt)("p",null,"\uba3c\uc800 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c Cosmwasm \ucee8\ud2b8\ub799\ud2b8\uac00 \uc5b4\ub5bb\uac8c \uc0dd\uc131\ub418\ub294\uc9c0\ubd80\ud130 \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rust \uc5b8\uc5b4\ub85c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 CW20 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xpladev/cw-plus"},"\ud574\ub2f9 Github"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc791\uc131\ud55c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ube4c\ub4dc\ud558\uc5ec ",(0,a.kt)("strong",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc0dd\uc131\ud55c .wasm \ud30c\uc77c\uc744 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec\ud569\ub2c8\ub2e4. \ubc30\ud3ec\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreCode")," Method \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"https://vault.xpla.io/contract/store"},"Vault"),"\ub97c \uc774\uc6a9\ud558\uba74 \uc27d\uac8c ",(0,a.kt)("strong",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \ubc30\ud3ec\ud558\uba74 Code ID\uac00 \ubd80\uc5ec\ub429\ub2c8\ub2e4. \ud574\ub2f9 Code ID\ub97c \uc774\uc6a9\ud558\uc5ec ",(0,a.kt)("inlineCode",{parentName:"p"},"Instantiate")," Method \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac19\uc740 Code ID\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"Instantiate")," \ub41c \ucee8\ud2b8\ub799\ud2b8\ub4e4\uc740 \ubaa8\ub450 \uac19\uc740 \ucf54\ub4dc\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc5b4, \uae30\ub2a5\uc774 \ube44\uc2b7\ud569\ub2c8\ub2e4. \ub2e4\ub9cc ",(0,a.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ud560 \ub54c \uc785\ub825\ud55c \ucd08\uae30\uac12\uc5d0 \ub530\ub77c \uc138\ubd80\uc0ac\ud56d\uc774 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. "))),(0,a.kt)("p",null,"CW20 \ucee8\ud2b8\ub799\ud2b8\ub294 \ud45c\uc900 \ucee8\ud2b8\ub799\ud2b8\uc774\ubbc0\ub85c, \uc774\ubbf8 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec(StoreCode)\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774\ubbf8 \ubc30\ud3ec\ub418\uc5b4 \uc788\ub294 CW20 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ud558\uba74 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0dd\uc131\ub418\ub294 \uac83\uc785\ub2c8\ub2e4. Vault\uc5d0\uc11c CW20 \ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"Instantiate")," \ud574\ubd05\uc2dc\ub2e4."),(0,a.kt)("p",null,"Vault \uc6f9\uc5d0\uc11c Contract \ud56d\ubaa9\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."))}u.isMDXComponent=!0}}]);