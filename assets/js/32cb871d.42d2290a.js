"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[6784],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,l=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),m=d(a),u=o,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=a.length,i=new Array(l);i[0]=u;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[m]="string"==typeof t?t:o,i[1]=r;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34673:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),o=a(67294),l=a(86010),i=a(72389),r=a(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function d(t){return!!t&&("SUMMARY"===t.tagName||d(t.parentElement))}function p(t,e){return!!t&&(t===e||p(t.parentElement,e))}function m(t){let{summary:e,children:a,...m}=t;const c=(0,i.Z)(),u=(0,o.useRef)(null),{collapsed:k,setCollapsed:y}=(0,r.u)({initialState:!m.open}),[g,x]=(0,o.useState)(m.open),h=o.isValidElement(e)?e:o.createElement("summary",null,e??"Details");return o.createElement("details",(0,n.Z)({},m,{ref:u,open:g,"data-collapsed":k,className:(0,l.Z)(s.details,c&&s.isBrowser,m.className),onMouseDown:t=>{d(t.target)&&t.detail>1&&t.preventDefault()},onClick:t=>{t.stopPropagation();const e=t.target;d(e)&&p(e,u.current)&&(t.preventDefault(),k?(y(!1),x(!0)):y(!0))}}),h,o.createElement(r.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:t=>{y(t),x(!t)}},o.createElement("div",{className:s.collapsibleContent},a)))}const c={details:"details_b_Ee"},u="alert alert--info";function k(t){let{...e}=t;return o.createElement(m,(0,n.Z)({},e,{className:(0,l.Z)(u,c.details,e.className)}))}},51007:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),o=a(86010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(t){let{children:e,minHeight:a,url:i="http://localhost:3000",style:r,bodyStyle:s}=t;return n.createElement("div",{className:l.browserWindow,style:{...r,minHeight:a}},n.createElement("div",{className:l.browserWindowHeader},n.createElement("div",{className:l.buttons},n.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,o.Z)(l.browserWindowAddressBar,"text--truncate")},i),n.createElement("div",{className:l.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:l.bar}),n.createElement("span",{className:l.bar}),n.createElement("span",{className:l.bar})))),n.createElement("div",{className:l.browserWindowBody,style:s},e))}},61497:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294);const o=t=>{let{imgSrc:e,style:a}=t;return n.createElement("img",{className:"max-w-sm",style:a,src:e,alt:""})}},95880:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),o=(a(67294),a(3905)),l=a(34673),i=a(61497),r=a(51007);const s={sidebar_position:2},d="NFT(CW721) \ubc1c\ud589\ud558\uae30 (Vault)",p={unversionedId:"tutorial/make-cw721/make-nft-vault",id:"tutorial/make-cw721/make-nft-vault",title:"NFT(CW721) \ubc1c\ud589\ud558\uae30 (Vault)",description:"CW721\uc744 \uc774\uc6a9\ud558\uba74 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc27d\uac8c NFT\ub97c \ubc1c\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 Vault\ub85c NFT\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uace0, \uac8c\uc784\uc5d0 \uc801\uc6a9\ud574\ubd05\uc2dc\ub2e4.",source:"@site/docs/3-tutorial/2-make-cw721/1-make-nft-vault.mdx",sourceDirName:"3-tutorial/2-make-cw721",slug:"/tutorial/make-cw721/make-nft-vault",permalink:"/academy/docs/tutorial/make-cw721/make-nft-vault",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Utilize NFT(CW721)",permalink:"/academy/docs/category/utilize-nftcw721"},next:{title:"NFT(CW721) \ubc1c\ud589\ud558\uae30 (Javascript)",permalink:"/academy/docs/tutorial/make-cw721/make-nft-js"}},m={},c=[{value:"CW721\ubc1c\ud589\ud558\uae30",id:"make-cw721",level:2},{value:"Vault \uc811\uc18d",id:"accessvault",level:3},{value:"CW721 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131",id:"instantiate",level:3},{value:"NFT \ubbfc\ud305\ud558\uae30",id:"mint-nft",level:3}],u={toc:c},k="wrapper";function y(t){let{components:e,...a}=t;return(0,o.kt)(k,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nftcw721-\ubc1c\ud589\ud558\uae30-vault"},"NFT(CW721) \ubc1c\ud589\ud558\uae30 (Vault)"),(0,o.kt)("p",null,"CW721\uc744 \uc774\uc6a9\ud558\uba74 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc27d\uac8c NFT\ub97c \ubc1c\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 Vault\ub85c NFT\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uace0, \uac8c\uc784\uc5d0 \uc801\uc6a9\ud574\ubd05\uc2dc\ub2e4."),(0,o.kt)(l.Z,{summary:"NFT\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,o.kt)("p",null,"NFT\ub780 ",(0,o.kt)("inlineCode",{parentName:"p"},"Non-Fungible Token"),"\uc758 \uc57d\uc790\ub85c, \ub300\uccb4 \ubd88\uac00\ub2a5\ud55c \ud1a0\ud070\uc774\ub780 \ub73b\uc785\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"\ub300\uccb4 \ubd88\uac00\ub2a5"),"\uc774\ub77c\ub294 \uac74 \ubb34\uc2a8 \ub73b\uc77c\uae4c\uc694?"),(0,o.kt)("p",null,"1\ub2ec\ub7ec\uc9dc\ub9ac \uc9c0\ud3d0 \ub450 \uc7a5\uc758 \uac00\uce58\ub294 \uc11c\ub85c \uac19\uc2b5\ub2c8\ub2e4. \ub458 \ub2e4 1\ub2ec\ub7ec\uc758 \uac00\uce58\ub97c \uc9c0\ub2c8\ubbc0\ub85c, \ud558\ub098\uac00 \ub2e4\ub978 \ud558\ub098\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 Alice\uac00 \uadf8\ub9b0 \ubaa8\ub098\uc9c0\ub77c \uadf8\ub9bc\uacfc \ub8e8\ube0c\ub974 \ubc15\ubb3c\uad00\uc5d0 \uc788\ub294 \ubaa8\ub098\ub9ac\uc790\uc758 \uac00\uce58\ub294 \uc5b4\ub5a8\uae4c\uc694? Alice\uac00 \ubaa8\ub098\ub9ac\uc790 \uadf8\ub9bc\uc758 \ubaa8\ub4e0 \ubd80\ubd84\uc744 \ub611\uac19\uc774 \ubb18\uc0ac\ud574\ub3c4, \uc9c4\uc9dc \ubaa8\ub098\ub9ac\uc790\ub97c \ub300\uccb4\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ucc98\ub7fc \uc11c\ub85c \ub300\uccb4\ud560 \uc218 \uc5c6\ub294 \uace0\uc720\ud55c \ud1a0\ud070\uc744 \ub450\uace0 NFT\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. "),(0,o.kt)("p",null,"NFT\ub85c \ubb34\uc5c7\uc744 \ud560 \uc218 \uc788\uc744\uae4c\uc694? Alice\ub294 \uadf8\ub9bc\uc744 \ud558\ub098 \uadf8\ub824 \ud504\ub85c\ud544 \uc0ac\uc9c4\uc73c\ub85c \uc0ac\uc6a9\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \ub204\uad70\uac00\uac00 Alice\uc758 \uadf8\ub9bc\uc744 \ubcf5\uc0ac\ud558\uc5ec \uc0ac\uc6a9\ud558\uace0, \uc790\uc2e0\uc774 \uadf8\ub9b0 \uadf8\ub9bc\uc774\ub77c\uace0 \uc8fc\uc7a5\ud558\uba74 \uc5b4\ub5a1\ud560\uae4c\uc694? Alice\uac00 \uadf8\ub9bc\uc758 \uc8fc\uc694 \uc815\ubcf4\ub97c NFT\uc5d0 \ub2f4\ub294\ub2e4\uba74 \uadf8\ub9bc\uc758 \uc18c\uc720\uad8c\uc744 \uc99d\uba85\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4.")),(0,o.kt)(l.Z,{summary:"CW721\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,o.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud50c\ub7ab\ud3fc\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub354\ub9ac\uc6c0\uc758 ERC721\ucc98\ub7fc, ",(0,o.kt)("strong",{parentName:"p"},"CW721"),"\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc5d0\uc11c \ub300\uccb4 \ubd88\uac00\ub2a5\ud55c \ud1a0\ud070(Non-Fungible Tokens)\uc5d0 \ub300\ud55c \ud45c\uc900\uc785\ub2c8\ub2e4. ERC721\uacfc \uc774\ub984\uc740 \ube44\uc2b7\ud560\uc9c0 \ubab0\ub77c\ub3c4, \uae30\ub2a5\uc740 \ub9ce\uc774 \ub2e4\ub985\ub2c8\ub2e4. \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xpladev/cw-nfts"},"\uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,o.kt)("h2",{id:"make-cw721"},"CW721\ubc1c\ud589\ud558\uae30"),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc808\ucc28\ub85c Vault\ub97c \ud1b5\ud574 CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud558\uace0, NFT\ub97c \ubbfc\ud305\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/make-nft-vault#accessvault"},"Vault \uc811\uc18d"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/make-nft-vault#instantiate"},"CW721 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/make-nft-vault#mint-nft"},"NFT \ubbfc\ud305\ud558\uae30")))),(0,o.kt)("h3",{id:"accessvault"},"Vault \uc811\uc18d"),(0,o.kt)("p",null,"\uba3c\uc800 Chrome Extension \uc571\uc778 Vault\uc5d0\uc11c CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uace0, \ub124\ud2b8\uc6cc\ud06c\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet"),"\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(i.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/select-testnet.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(i.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/vault-testnet.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vault.xpla.io/"},"Vault \uc6f9\uc0ac\uc774\ud2b8"),"\uc5d0 \uc811\uc18d\ud558\uace0, \uc6b0\uce21 \uc0c1\ub2e8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc9c0\uac11\uc744 \uc5f0\uacb0\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"40px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:40,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/click-connect.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/web-vault-popup.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:59,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-testnet.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"instantiate"},"CW721 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131"),(0,o.kt)("p",null,"Vault \uc6f9\uc5d0\uc11c Contract \ud56d\ubaa9\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:59,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-click-contract.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:59,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-click-instantiate.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Admin"),"\uc774\ub780 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc778\uc774 \ub420 \uc9c0\uac11 \uc8fc\uc18c\uc785\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," \uc9c0\uac11 \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17.5px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:17.5,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:58.5,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-instantiate-admin.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"CW721 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),"\uc774\ubbc0\ub85c, ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID"),"\uc5d0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),"\uc744 \uc785\ub825\ud574\uc90d\ub2c8\ub2e4. "),(0,o.kt)(l.Z,{summary:"Code ID\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,o.kt)("p",null,"EVM\uacfc \ub2ec\ub9ac, Cosmwasm\uc5d0\uc11c\ub294 \ucf54\ub4dc \ubc30\ud3ec(Code Deploy)\uc640 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc774 \ud55c\ubc88\uc5d0 \uc774\ub904\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \ucf54\ub4dc\ub97c \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec(StoreCode)\ud558\uba74 \ud574\ub2f9 \ucf54\ub4dc\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \ubc1c\uae09 \ubc1b\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \uae30\ubc18\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131(InstantiateContract)\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub611\uac19\uc740 Code ID\ub85c \uc0dd\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\ub4e4\uc740 \ubaa8\ub450 \uac19\uc740 \ucf54\ub4dc \uae30\ubc18\uc785\ub2c8\ub2e4. \ub2e4\ub9cc \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c \uc785\ub825\ud558\ub294 \ucd08\uae43\uac12(init_msg)\uc774 \ub2e4\ub974\uba74, \ucee8\ud2b8\ub799\ud2b8\uc758 \uc138\ubd80 \uc0ac\ud56d\ub3c4 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \ub354 \uc790\uc138\ud55c \uc0ac\ud56d\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/core-modules/wasm/#code-id"},"XPLA Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"19.1px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"50px",width:"100%",top:19.1,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"25px",width:"100%",top:69,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/code_id.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Init msg"),"\uc5d0\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucd08\uae43\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ucd08\uae43\uac12\uc740 \ubc1c\ud589\ud560 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\uc785\ub2c8\ub2e4. \ubc1c\ud589\uc790\uac00 \ub204\uad6c\uc778\uc9c0(minter), NFT Collection\uc758 \uc774\ub984(name) \ub4f1\uc744 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc608\uc81c\uc5d0\uc11c\ub294 \uc544\ub798 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 minter \ud56d\ubaa9\uc5d0 \ubcf8\uc778 \uc9c0\uac11 \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. name, symbol \uac12\ub3c4 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 \ub2e4\ub978 \uac12\uc73c\ub85c \ub123\uc5b4\uc8fc\uc138\uc694."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "YourNFTName",\n    "symbol": "YNN",\n    "minter": "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n}\n')),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"16px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"40px",width:"100%",top:16,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:56,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/init_msg.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Amount"),"\ub294 \ucee8\ud2b8\ub799\ud2b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ub97c \uc9c4\ud589\ud560 \ub54c, \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud558\uace0 \uc2f6\uc740 XPLA \uc218\ub7c9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. CW721 \ucee8\ud2b8\ub799\ud2b8\ub294 XPLA \ucf54\uc778\uc744 \ubcf4\uc720\ud560 \uc774\uc720\uac00 \uc5c6\uc73c\ubbc0\ub85c, \uc774 \ubd80\ubd84\uc740 \uc0dd\ub7b5\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Label"),"\uc740 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ub2a5\uc744 \ub098\ud0c0\ub0b4\ub3c4\ub85d \uc791\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"My NFT"),"\ub85c \uae30\uc785\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 Submit \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"40px",width:"100%",top:18,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"35px",width:"100%",top:58,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/label.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ud558\uace0 \uc2f6\uc740\ub370, \uac01 \ud56d\ubaa9\uc5d0 \uc5b4\ub5a4 \uac12\uc744 \uc785\ub825\ud574\uc57c \ud560 \uc9c0 \ubaa8\ub97c \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f4 \ub54c\ub294 \uac19\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucc38\uace0\ud558\uba74 \ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID"),"\uac00 3\uc778 \ub2e4\ub978 CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1cr3jrzjpagedzdxfx32hju0jr0g9prut3r3m3pg27zsdrecfwt7q3cfmkw#InitMsg"},"XPLA Explorer"),"\uc5d0\uc11c \uc0b4\ud3b4\ubd05\uc2dc\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"Init Msg")," \uac12\uc744 \ucc38\uace0\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uae30\ud638\ub300\ub85c \ub0b4\uc6a9\uc744 \uc218\uc815\ud558\uba74, \uc27d\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  ")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Submit \ubc84\ud2bc\uc744 \ub204\ub974\uba74 Chrome Extension Vault \uc571\uc5d0\uc11c \ud31d\uc5c5\uc774 \ud558\ub098 \ub728\uac8c \ub429\ub2c8\ub2e4. \uc774\ub54c Password\ub97c \uc785\ub825\ud558\uba74, ",(0,o.kt)("inlineCode",{parentName:"p"},"Instantatie")," Method \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\uac8c \ub418\ub294 \uac83\uc785\ub2c8\ub2e4. \uc9c0\uac11\uc744 \ub9cc\ub4e4\uc5c8\uc744 \ub54c \uc124\uc815\ud588\ub358 Password\ub97c \uc785\ub825\ud558\uace0, Post \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:"0px 0px 16px 0px"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center"},(0,o.kt)(i.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/input-password.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"\uc11c\uba85\uc774 \uc644\ub8cc\ub418\uba74 \ud2b8\ub79c\uc7ad\uc158\uc774 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub824\uc57c \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Tx hash \uac12\uc744 \ud074\ub9ad\ud574\ubcf4\uc138\uc694."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/success.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/4B4656EBDCF401AEBC672C63ABAE5E510234C46EFB395C97764445C3A1B2B130",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(i.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/success-explorer.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"EventLogs\uc5d0\uc11c \uc5ec\ub7ec\ubd84\uc774 \ubc1c\ud589\ud55c CW721 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,o.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/4B4656EBDCF401AEBC672C63ABAE5E510234C46EFB395C97764445C3A1B2B130#EventLogs",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(i.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/eventlogs.png",mdxType:"VaultImgCard"}))),(0,o.kt)("p",null,"\uc608\uc81c\uc5d0\uc11c \ub9cc\ub4e0 CW721 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc18c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn")," \uc785\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"mint-nft"},"NFT \ubbfc\ud305\ud558\uae30"),(0,o.kt)("p",null,"\uc774\uc81c \uc0dd\uc131\ud55c CW721 \ucee8\ud2b8\ub799\ud2b8\ub85c NFT\ub97c \ubbfc\ud305\ud574\ubd05\uc2dc\ub2e4. \ub2e4\uc2dc Vault \uc6f9\uc5d0\uc11c ",(0,o.kt)("a",{parentName:"p",href:"https://vault.xpla.io/contract"},"Contract \ud0ed"),"\uc5d0 \uc811\uc18d\ud574\uc8fc\uc138\uc694."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17.5px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:17.5,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:58.5,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-contract.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"\uac80\uc0c9 \ud56d\ubaa9\uc5d0 \uc9c1\uc811 \ub9cc\ub4e0 CW721 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \ub123\uace0, Execute \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"19px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:19,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"35.5px",width:"100%",top:60,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/contract-mynft.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," \ud56d\ubaa9\uc5d0\ub294 \ubc1c\ud589\ud560 NFT\uc758 \uc8fc\uc694 \uc815\ubcf4(metadata)\ub97c \uc801\uc5b4\uc90d\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 \uc544\ub798\uc640 \uac19\uc774 \uc791\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," \ud56d\ubaa9\uc740 NFT\uc758 \uace0\uc720\ud55c \ubc88\ud638\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uac19\uc740 CW721 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ubc1c\ud589\ud558\ub294 NFT\ub294 \ubaa8\ub450 ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id"),"\uac00 \ub2ec\ub77c\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"attributes")," \ud56d\ubaa9\uc5d0\ub294 NFT\uc758 \ud2b9\uc131\uc785\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 \uccb4\ub825(HP) 10, \uc804\ud22c\ub2a5\ub825(CP) 100\uc778 Alice\ub77c\ub294 \uc774\ub984\uc758 \uce90\ub9ad\ud130 NFT\ub97c \ub9cc\ub4e0\ub2e4\uace0 \uac00\uc815\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mint": {\n    "owner": "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",\n    "token_id": "token_id_myExampleNFT1",\n    "extension": {\n      "name": "My Test XPLA NFT",\n      "attributes": [\n        {\n          "value": "Alice",\n          "trait_type": "CharacterName"\n        },\n        {\n          "value": "100",\n          "trait_type": "CP"\n        },\n        {\n          "value": "10",\n          "trait_type": "HP"\n        }\n      ],\n      "description": "This is my First NFT in XPLA Blockchain!"\n    }\n  }\n}\n')),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"19px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:19,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"37px",width:"100%",top:60,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/vault-execute.png",mdxType:"VaultImgCard"}))),(0,o.kt)(l.Z,{summary:"\uc8fc\uc694 \uc815\ubcf4(metadata)\uc5d0\ub294 \uc5b4\ub5a4 \uac12\ub4e4\uc774 \ub4e4\uc5b4\uac00\uc57c \ud558\ub098\uc694?",mdxType:"Details"},(0,o.kt)("p",null,"\uc8fc\uc694 \uc815\ubcf4(metadata)\uc5d0 \ub4e4\uc5b4\uac08 \uc218 \uc788\ub294 \ud56d\ubaa9\ub4e4\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    mint: {\n        owner: "NFT Owner\uc758 \uc8fc\uc18c\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.",\n        token_id: "\uac1c\ubcc4 NFT \uace0\uc720 \uc2dd\ubcc4\uc790\ub85c \uc0ac\uc6a9\ub418\ub294 Token ID\uc785\ub2c8\ub2e4.",\n        token_uri: "\uc544\ub798 extension \uc815\ubcf4\ub97c JSON \ud615\uc2dd\uc73c\ub85c \uc81c\uacf5\ud558\ub294 URI\uc785\ub2c8\ub2e4. OpenSea\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud615\uc2dd\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4.",\n        extension: { \n            name : "NFT \uc774\ub984\uc785\ub2c8\ub2e4.",\n            description : "NFT\uc5d0 \ub300\ud55c \uc124\uba85\uc785\ub2c8\ub2e4.",\n            image : "NFT \uc774\ubbf8\uc9c0\ub97c \uc81c\uacf5\ud558\ub294 URL\uc785\ub2c8\ub2e4. \uc6a9\ub7c9\uc740 40MB\ub97c \uad8c\uc7a5\ud558\uba70, \ucd5c\ub300 100MB\uae4c\uc9c0 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.", \n            animation_url : "NFT \uc601\uc0c1\uc744 \uc81c\uacf5\ud558\ub294 URL \uc785\ub2c8\ub2e4. \uc6a9\ub7c9\uc740 40MB\ub97c \uad8c\uc7a5\ud558\uba70, \ucd5c\ub300 100MB\uae4c\uc9c0 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.",\n            youtube_url : "Youtube \uc601\uc0c1\uc758 URL \ub85c, \ud604\uc7ac\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."\n            attributes: [    // NFT\uc758 \ud2b9\uc9d5\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.\n                {\n                    category : "NFT \uc544\uc774\ud15c \uce74\ud14c\uace0\ub9ac\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.",\n                    collection : "NFT Collection\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.",\n                    creator : "NFT \ucc3d\uc791\uc790 \ud639\uc740 \uc800\uc791\uad8c\uc790\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.",\n                    provider : "NFT \ud310\ub9e4 \ud639\uc740 \ubc30\ud3ec \uad8c\ub9ac\ub97c \uac00\uc9c4 \uc0ac\ub78c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.",\n                    thumbnail_url : "NFT\uc758 \uc378\ub124\uc77c \uc774\ubbf8\uc9c0\ub97c \uc81c\uacf5\ud558\ub294 URL \uc785\ub2c8\ub2e4.",\n                    extension_url : "NFT extension \uc815\ubcf4\ub97c JSON \ud615\uc2dd\uc73c\ub85c \uc81c\uacf5\ud558\ub294 URL \uc785\ub2c8\ub2e4.",\n                    \n                    // \uc544\ub798\uc640 \uac19\uc774 NFT\uc758 \ud2b9\uc9d5\uc744 \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n                    trait_type: "CharacterName",\n                    value: "Alice", \n                },\n            ],\n        },\n    },\n};\n')),(0,o.kt)("p",null,"\ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xpladev/cw-nfts/tree/main/contracts/cw721-metadata-onchain"},"CW721 Github"),"\uc744 \uc0b4\ud3b4\ubcf4\uc2dc\uac70\ub098, ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \ub2e4\ub978 NFT\ub97c \ucc38\uace0\ud574\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.opensea.io/docs/metadata-standards"},"OpenSea Metadata \uae30\uc900"),"\uc744 \uc77d\uc5b4\ubcf4\uc2dc\ub294 \uac83\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"\uc774\ud6c4 \ub2e8\uacc4\ub294 \uc774\uc804\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4. Submit \ubc84\ud2bc\uc744 \ub204\ub974\uace0, Password\ub97c \uc785\ub825\ud558\uba74 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,o.kt)(i.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/execute-success.png",mdxType:"VaultImgCard"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/048BCC8C53CA9F2ABC17E9706886D5E6F3AB15FD2EEDFC00790F4D7331D7FDC7#Messages"},"XPLA Explorer Messages \ud0ed"),"\uc5d0\uc11c \ubc1c\ud589\ud55c NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc790\uc138\ud788 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/4B4656EBDCF401AEBC672C63ABAE5E510234C46EFB395C97764445C3A1B2B130",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(i.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/nft-explorer.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/4B4656EBDCF401AEBC672C63ABAE5E510234C46EFB395C97764445C3A1B2B130#Messages",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(i.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/nft-messages.png",mdxType:"VaultImgCard"}))),(0,o.kt)("p",null,"\uc774\ub807\uac8c CW721 \ucee8\ud2b8\ub799\ud2b8\ub85c NFT\ub97c \ubc1c\ud589\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. NFT\ub3c4 \ud1a0\ud070\uc774\uae30 \ub54c\ubb38\uc5d0, \ucee8\ud2b8\ub799\ud2b8\ub85c \ubc1c\ud589\ud558\ub294 \uac83\uc784\uc744 \uae30\uc5b5\ud574\uc8fc\uc138\uc694. \ub2e8\uc9c0 \ud1a0\ud070\ub9c8\ub2e4 \uace0\uc720\ud55c \uba54\ud0c0\ub370\uc774\ud130\uac00 \uc788\uae30 \ub54c\ubb38\uc5d0, \uac19\uc740 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ub2e4\ub978 \ud1a0\ud070\ub4e4\uacfc \ub300\uccb4\ud560 \uc218 \uc5c6\ub2e4\ub294 \uac83\uc774 \ud070 \ud2b9\uc9d5\uc785\ub2c8\ub2e4."))}y.isMDXComponent=!0}}]);