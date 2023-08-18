"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34673:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),o=a(67294),i=a(86010),l=a(72389),r=a(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function c(e){let{summary:t,children:a,...c}=e;const u=(0,l.Z)(),m=(0,o.useRef)(null),{collapsed:h,setCollapsed:k}=(0,r.u)({initialState:!c.open}),[g,y]=(0,o.useState)(c.open),w=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,n.Z)({},c,{ref:m,open:g,"data-collapsed":h,className:(0,i.Z)(s.details,u&&s.isBrowser,c.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&p(t,m.current)&&(e.preventDefault(),h?(k(!1),y(!0)):k(!0))}}),w,o.createElement(r.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),y(!e)}},o.createElement("div",{className:s.collapsibleContent},a)))}const u={details:"details_b_Ee"},m="alert alert--info";function h(e){let{...t}=e;return o.createElement(c,(0,n.Z)({},t,{className:(0,i.Z)(m,u.details,t.className)}))}},51007:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:t,minHeight:a,url:l="http://localhost:3000",style:r,bodyStyle:s}=e;return n.createElement("div",{className:i.browserWindow,style:{...r,minHeight:a}},n.createElement("div",{className:i.browserWindowHeader},n.createElement("div",{className:i.buttons},n.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,o.Z)(i.browserWindowAddressBar,"text--truncate")},l),n.createElement("div",{className:i.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:i.bar}),n.createElement("span",{className:i.bar}),n.createElement("span",{className:i.bar})))),n.createElement("div",{className:i.browserWindowBody,style:s},t))}},61497:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=e=>{let{imgSrc:t,style:a}=e;return n.createElement("img",{className:"max-w-sm",style:a,src:t,alt:""})}},82231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),i=a(34673),l=a(61497),r=a(51007);const s={sidebar_position:2},d="Issue and send CW20 Tokens (Vault)",p={unversionedId:"tutorial/make-cw20/make-cw20-with-vault",id:"tutorial/make-cw20/make-cw20-with-vault",title:"Issue and send CW20 Tokens (Vault)",description:"You can easily connect the gaming ecosystem to the XPLA Chain using CW20! Let's issue tokens and transfer using XPLA Vault wallet. Refer to the previous stage for downloading and creating the wallet.",source:"@site/docs/3-tutorial/1-make-cw20/1-make-cw20-with-vault.mdx",sourceDirName:"3-tutorial/1-make-cw20",slug:"/tutorial/make-cw20/make-cw20-with-vault",permalink:"/docs/tutorial/make-cw20/make-cw20-with-vault",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Utilize Tokens (CW20)",permalink:"/docs/category/utilize-tokens-cw20"},next:{title:"Issue and send CW20 Tokens (Javascript)",permalink:"/docs/tutorial/make-cw20/make-cw20-with-js"}},c={},u=[{value:"Issuing CW20",id:"make-cw20",level:2},{value:"Access Vault",id:"make-accessvault",level:3},{value:"Create CW20 Contract",id:"instantiate",level:3},{value:"Confirm the Contract Creation",id:"make-confirm",level:3},{value:"Transfer CW20",id:"send-cw20",level:2}],m={toc:u},h="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"issue-and-send-cw20-tokens-vault"},"Issue and send CW20 Tokens (Vault)"),(0,o.kt)("p",null,"You can easily connect the gaming ecosystem to the XPLA Chain using CW20! Let's issue tokens and transfer using XPLA Vault wallet. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault"},"previous stage")," for downloading and creating the wallet."),(0,o.kt)(i.Z,{summary:"But I have zero idea what CW20 is!",mdxType:"Details"},(0,o.kt)("p",null,"The XPLA Chain utilizes a smart contract platform called ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),". Just like ERC20 on Ethereum, ",(0,o.kt)("strong",{parentName:"p"},"CW20")," is the standard for Fungible tokens in ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),". For more, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/crate/cw20/0.2.3"},"docs for Cosmwasm"),".")),(0,o.kt)("h2",{id:"make-cw20"},"Issuing CW20"),(0,o.kt)("p",null,"You can issue CW20 by following the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#make-accessvault"},"Access Vault"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#instantiate"},"Create CW20 Contract"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#make-confirm"}," Confirm the Contract Creation")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you're using wallet with the Vault Chrome Extension from the ",(0,o.kt)("a",{parentName:"p",href:"http://vault.xpla.io"},"Vault website"),", make sure to ",(0,o.kt)("strong",{parentName:"p"},"disable Chrome's pop-up blocker"),". Before using Vault Website, please ensure that you have ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/chrome/answer/95472"},"disabled the pop-up blocker in Chrome"),".")),(0,o.kt)("h3",{id:"make-accessvault"},"Access Vault"),(0,o.kt)("p",null,"First off, select a wallet for CW20 issuance in your Chrome Extension Vault, then set the network for ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet"),"."),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/select-testnet.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/vault-testnet.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Access the ",(0,o.kt)("a",{parentName:"p",href:"https://vault.xpla.io/"},"Vault page"),", and hit ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," on the top right."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"40px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:40,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/click-connect.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/web-vault-popup.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:59,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault-web-testnet.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"instantiate"},"Create CW20 Contract"),(0,o.kt)("p",null,"Click on the Contract menu on the Vault page."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:59,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault-web-click-contract.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate")),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:59,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault-web-click-instantiate.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," here is the owner wallet address of the contract. The wallet address used In the instance below is ",(0,o.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"),"."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17.5px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:17.5,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:58.5,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault-web-instantiate-admin.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID")," for CW contract is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", so type in ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)(i.Z,{summary:"Code ID?",mdxType:"Details"},(0,o.kt)("p",null,"Unlike EVM, the Code Deploy and Contract Creation do not go hand in hand in Cosmwasm. First, when you put your code onto the blockchain (StoreCode), you'll get a special number called a ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID")," for that code. Afterward, you can use this ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID")," to make a contract (InstantiateContract)."),(0,o.kt)("p",null,"All the contracts made with the same Code ID are based on the same original code. The only difference is that if you provide different starting values (init_msg) when making the contract, the specific details of the contract will be different. For more detailed information, you can take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/core-modules/wasm/#code-id"},"XPLA Docs"),".")),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17.5px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:17.5,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:58.5,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault-web-instantiate-codeid.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"You need to provide the initial values for the contract in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Init msg"),". These initial values contain information about the tokens you're issuing. You can see details like who the issuer is (minter), how many tokens will be initially issued to which wallet (initial_balances), and what's the unit of the token (symbol)."),(0,o.kt)("p",null,"For the example, please input in the following format. ",(0,o.kt)("strong",{parentName:"p"},"You should put your own wallet address in the minter and address fields.")," If you want to change the name, symbol, or amount, you can replace those values with different ones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "My CW20 Token",\n  "symbol": "MCT",\n  "decimals": 6,\n  "initial_balances": [\n    {\n      "address": "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",\n      "amount": "2000000000000000"\n    }\n  ],\n  "mint": {\n    "minter": "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n  }\n}\n')),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18.5px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18.5,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"33px",width:"100%",top:58.5,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault-web-instantiate-initmsg.png",mdxType:"VaultImgCard"}))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can freely set the ",(0,o.kt)("inlineCode",{parentName:"p"},"decimals")," value when issuing tokens. In the example initial values, we've set the ",(0,o.kt)("inlineCode",{parentName:"p"},"decimals")," field to ",(0,o.kt)("strong",{parentName:"p"},"6"),". Just to let you know, in the case of ",(0,o.kt)("strong",{parentName:"p"},"XPLA"),", the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"decimals")," value is ",(0,o.kt)("strong",{parentName:"p"},"18"),". This means that 10",(0,o.kt)("sup",null,"18")," ",(0,o.kt)("strong",{parentName:"p"},"aXPLA")," is equal to ",(0,o.kt)("strong",{parentName:"p"},"1 XPLA"),".")),(0,o.kt)("br",null),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Amount")," refers to the amount of XPLA you want to send to the contract when carrying out the contract ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiate"),". Since the CW20 contract doesn't need to hold XPLA coins, you can skip this part."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Label")," is a description of the contract's function. In the example, we will write ",(0,o.kt)("inlineCode",{parentName:"p"},"My CW20 Token"),' as the label. Then, please proceed by clicking the "Submit" button.'),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"16.5px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"38.5px",width:"100%",top:16.5,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"33.5px",width:"100%",top:55,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault-web-instantiate-label.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're unsure about what values to input for each field when you want to ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiate")," a contract, you can refer to contracts ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiated")," with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID"),". For instance, let's look at another CW20 contract with ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID")," 1 on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg"},"XPLA Explorer"),". By referring to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Init Msg")," value and adjusting the content according to your preferences, you can easily create a contract.")),(0,o.kt)("br",null),(0,o.kt)("p",null,'When you press the "Submit" button, a popup will appear in the Chrome Extension Vault app. At this point, if you enter your password, you\'ll be signing the ',(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate"),' Method transaction. Please input the password you set when creating the wallet and then click the "Post" button.'),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:"0px 0px 16px 0px"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center"},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/input-password.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Once the signing is complete, you'll need to wait until the transaction is recorded on the XPLA blockchain. After the transaction is generated, you can check the transaction details on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),". Try clicking on the Tx hash value to see more information."),(0,o.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,o.kt)(l.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/img/3-tutorial/1-make-cw20/success-tx-click-hash.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/E3D5F9E105E5E8729A357BB6B44E54372FF46B1C6D97C6542D8617694E2D2AD5",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(l.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/img/3-tutorial/1-make-cw20/explorer-tx.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"make-confirm"},"Confirm the Contract Creation"),(0,o.kt)("p",null,"If the transaction went smoothly, you should be able to find the contract address of the CW20 token you issued in the EventLogs section."),(0,o.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/E3D5F9E105E5E8729A357BB6B44E54372FF46B1C6D97C6542D8617694E2D2AD5#EventLogs",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(l.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault/eventlogs.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"When you entered the ",(0,o.kt)("inlineCode",{parentName:"p"},"Init msg")," value, you provided information in the ",(0,o.kt)("inlineCode",{parentName:"p"},"initial_balances")," field about how many CW20 tokens to issue to which wallet. Therefore, you would need to check if the tokens were successfully received in that wallet. You can easily do this using Vault in the Chrome Extension app."),(0,o.kt)("p",null,'Please click on "Add tokens" in the Chrome Extension app Vault.'),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/vault-addtokens.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Please enter your CW20 token contract address in the search bar."),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/vault-search.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/vault-search-token.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"In this way, you can confirm whether the MCT tokens have been successfully issued using Vault!"),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/vault-add-cw20.png",mdxType:"VaultImgCard"}))),(0,o.kt)(i.Z,{summary:"Even though the amount value is 2,000,000,000,000,000 in 'initial_balances,' why are there only 2,000,000,000 present?",mdxType:"Details"},(0,o.kt)("p",null,'When you\'re entering the amount value in "initial_balances", you need to think about the ',(0,o.kt)("inlineCode",{parentName:"p"},"decimals")," section. Because the MCT token has a decimals value set to ",(0,o.kt)("strong",{parentName:"p"},"6"),", we entered it as 2,000,000,000 * 10",(0,o.kt)("sup",null,"6"),". So, it's correct that 2,000,000,000 units were issued properly.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"send-cw20"},"Transfer CW20"),(0,o.kt)("p",null,"Let's try transferring the issued CW20 token to another wallet. In the Chrome Extension app Vault, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," button for the CW20 token you want to transfer."),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/vault-click-send.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,'Put the wallet address you want to send to in the "Recipient" field, and enter the amount you want to send in the "Amount" field. In the example, we\'re going to send 10 MCT to the wallet address ',(0,o.kt)("inlineCode",{parentName:"p"},"xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8"),"."),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/send-input-amount.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,'I skipped the Memo input, entered the password immediately and clicked the "Submit" button.'),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/send-submit.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"The transaction has been broadcasted. If you wait for the popup, you'll be able to see that the transaction has been successfully generated. At this point, if you click on the transaction hash value, you can check the CW20 transfer transaction on ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"."),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/send-click-txhash.png",mdxType:"VaultImgCard"}))),(0,o.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/573D9161AC25F1691E2ADADD15C68B747FC783F4C13DBAD8BBB26CEE4C8174A1",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(l.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/img/3-tutorial/1-make-cw20/vault/send-explorer.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Looking at your wallet again, you'll notice that the previous 2,000,000,000 MCT tokens have decreased by 10. The CW20 transfer has been successfully completed!"),(0,o.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,o.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,o.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,o.kt)(l.Z,{imgSrc:"/img/3-tutorial/1-make-cw20/vault/send-result.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"We've learned how to issue and transfer CW20 tokens using the Vault app. In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js"},"next steps"),", we'll explore how to directly issue and transfer CW20 tokens using JavaScript code."))}k.isMDXComponent=!0}}]);