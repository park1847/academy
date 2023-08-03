"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[6199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34673:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(87462),r=a(67294),l=a(86010),s=a(72389),o=a(86043);const p={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function i(e){return!!e&&("SUMMARY"===e.tagName||i(e.parentElement))}function c(e,t){return!!e&&(e===t||c(e.parentElement,t))}function d(e){let{summary:t,children:a,...d}=e;const u=(0,s.Z)(),m=(0,r.useRef)(null),{collapsed:f,setCollapsed:k}=(0,o.u)({initialState:!d.open}),[x,g]=(0,r.useState)(d.open),y=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,n.Z)({},d,{ref:m,open:x,"data-collapsed":f,className:(0,l.Z)(p.details,u&&p.isBrowser,d.className),onMouseDown:e=>{i(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;i(t)&&c(t,m.current)&&(e.preventDefault(),f?(k(!1),g(!0)):k(!0))}}),y,r.createElement(o.z,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),g(!e)}},r.createElement("div",{className:p.collapsibleContent},a)))}const u={details:"details_b_Ee"},m="alert alert--info";function f(e){let{...t}=e;return r.createElement(d,(0,n.Z)({},t,{className:(0,l.Z)(m,u.details,t.className)}))}},50998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(34673);const s={sidebar_position:4},o="\uc2ec\ud654 - xplad\ub85c \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",p={unversionedId:"settings/create-testnet-transaction/use-xplad",id:"settings/create-testnet-transaction/use-xplad",title:"\uc2ec\ud654 - xplad\ub85c \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",description:"xplad\ub85c cli\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, query\ub97c \ubcf4\ub0bc \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c xplad\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc73c\uc168\ub2e4\uba74, \ub2e4\uc74c \ub2e8\uacc4\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4.",source:"@site/docs/2-settings/2-create-testnet-transaction/4-use-xplad.mdx",sourceDirName:"2-settings/2-create-testnet-transaction",slug:"/settings/create-testnet-transaction/use-xplad",permalink:"/xpla-academy-dev/ko-kr/docs/settings/create-testnet-transaction/use-xplad",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ucf54\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/settings/create-testnet-transaction/send-query"},next:{title:"\uac8c\uc784 \ud1a0\ud070(CW20) \ub2e4\ub8e8\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/category/\uac8c\uc784-\ud1a0\ud070cw20-\ub2e4\ub8e8\uae30"}},i={},c=[{value:"xplad\ub85c \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\ud558\uae30",id:"maketx",level:2},{value:"xplad\ub85c query \ubcf4\ub0b4\uae30",id:"sendquery",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc2ec\ud654---xplad\ub85c-\ud2b8\ub79c\uc7ad\uc158-\uc0dd\uc131-\ubc0f-\ub370\uc774\ud130-\uac00\uc838\uc624\uae30"},"\uc2ec\ud654 - xplad\ub85c \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \ub370\uc774\ud130 \uac00\uc838\uc624\uae30"),(0,r.kt)("p",null,"xplad\ub85c cli\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, query\ub97c \ubcf4\ub0bc \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-xplad"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c xplad\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc73c\uc168\ub2e4\uba74, ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/make-web3-game/download-code"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4. "),(0,r.kt)("h2",{id:"maketx"},"xplad\ub85c \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-xplad"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c xplad\ub97c \uc124\uce58\ud558\uc168\uace0, \uc9c0\uac11\ub3c4 \uc798 \uc0dd\uc131\ud558\uc168\ub2e4\uba74 \uc544\ub798 \ub2e8\uacc4\ub97c \uc9c4\ud589\ud574\ubd05\uc2dc\ub2e4. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\ub824\uba74 \uc9c0\uac11\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/get-testnet-xpla"},"\ud14c\uc2a4\ud2b8\ub137 XPLA"),"\uac00 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.xpla.io/"},"Faucet"),"\uc5d0\uc11c \uc9c0\uac11 \uc8fc\uc18c\ub97c \uae30\uc785\ud558\uace0, \ud14c\uc2a4\ud2b8\ub137 XPLA\ub97c \ubc1b\uc74d\uc2dc\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc544\ub798 \uba85\ub839\uc5b4\ub85c XPLA\ub97c \uc804\uc1a1\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xplad tx bank send <from-key-or-address> <to-address> <coins> --chain-id=<chain-id> --fees=<fee> --node tcp://34.64.250.213:26657\n")),(0,r.kt)("p",null,"\uc608\uc81c\uc5d0\uc11c \uc9c0\uac11 \uc774\ub984\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"test1"),"\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Faucet \uc8fc\uc18c ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv"),"\uc5d0 1axpla\ub97c \uc804\uc1a1\ud558\ub294 \uba85\ub839\uc5b4\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xplad tx bank send test1 xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv 1axpla --chain-id=cube_47-5 --fees=170000000000000000axpla --node tcp://34.64.250.213:26657\n")),(0,r.kt)(l.Z,{summary:"34.64.250.213:26657 \uc8fc\uc18c\ub294 \uc5b4\ub5a4 \uc8fc\uc18c\uc778\uac00\uc694?",mdxType:"Details"},(0,r.kt)("p",null,"\ud574\ub2f9 \uc8fc\uc18c\ub294 \ud14c\uc2a4\ud2b8\ub137 rpc \uc8fc\uc18c\uc785\ub2c8\ub2e4. \uc704 \uc8fc\uc18c\ub97c \ud1b5\ud574 XPLA \ube14\ub85d\uccb4\uc778 \ud14c\uc2a4\ud2b8\ub137\uacfc \ud1b5\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba54\uc778\ub137\uc5d0 \uc5f0\uacb0\ud560 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--node tcp://104.197.217.143:26657"),"\ub85c \uc785\ub825\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"2\ubc88\uc5d0\uc11c \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uba74, \uc544\ub798\uc640 \uac19\uc774 passphrase\ub97c \uc785\ub825\ud560 \uc218 \uc788\uac8c cli\uc5d0 \ucd9c\ub825\ub429\ub2c8\ub2e4. \uc9c0\uac11\uc744 \uc0dd\uc131\ud560 \ub54c \uc815\ud588\ub358 passphrase\ub97c \uc785\ub825\ud569\uc2dc\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Enter keyring passphrase:\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\uc544\ub798\uc640 \uac19\uc774 \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\uac00 cli\uc5d0 \ucd9c\ub825\ub418\uba74 ",(0,r.kt)("inlineCode",{parentName:"li"},"y"),"\ub97c \uc785\ub825\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\uc744 \ud655\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"xpla1z92x0yghmyz4k755d8f3vcm478se5rl5zl7sqr","to_address":"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv","amount":[{"denom":"axpla","amount":"1"}]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[{"denom":"axpla","amount":"170000000000000000"}],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}\n\nconfirm transaction before signing and broadcasting [y/N]:\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\uc0dd\uc131\ub41c \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'code: 0\ncodespace: ""\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: A8FA5E9E6B54DF2E52C088CF860B6F9BA82D0497AEE1790DE5564CAFA2FD9373\n')),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc774 \uc798 \ub098\uc654\ub098\uc694? ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694."),(0,r.kt)("h2",{id:"sendquery"},"xplad\ub85c query \ubcf4\ub0b4\uae30"),(0,r.kt)("p",null,"xplad\ub85c query\ub97c \ubcf4\ub0b4\uc11c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ubc29\ubc95\uc740 \uac04\ub2e8\ud569\ub2c8\ub2e4. \uc544\ub798 \uba85\ub839\uc5b4\ub9cc \uc785\ub825\ud558\uba74 \ub05d\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xplad query tx <txhash> --node tcp://34.64.250.213:26657\n")),(0,r.kt)("p",null,"\uc608\uc81c\uc5d0\uc11c \ub9cc\ub4e0 \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"A8FA5E9E6B54DF2E52C088CF860B6F9BA82D0497AEE1790DE5564CAFA2FD9373"),"\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc608\uc81c\uc5d0\uc120 \uc544\ub798\uc640 \uac19\uc740 \uba85\ub839\uc5b4\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xplad query tx A8FA5E9E6B54DF2E52C088CF860B6F9BA82D0497AEE1790DE5564CAFA2FD9373 --node tcp://34.64.250.213:26657\n")),(0,r.kt)("p",null,"\uc774\ub807\uac8c xplad\ub97c \ud65c\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud574\ubcf4\uace0, \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub3c4 \uad6c\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. xplad\uc5d0 \uad00\ud574 \ub354 \uc790\uc138\ud558\uac8c \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/tools/xplad/about-xplad/"},"Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694."))}m.isMDXComponent=!0}}]);