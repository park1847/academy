"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function u(e){let{summary:t,children:n,...u}=e;const p=(0,i.Z)(),m=(0,r.useRef)(null),{collapsed:k,setCollapsed:y}=(0,l.u)({initialState:!u.open}),[h,f]=(0,r.useState)(u.open),w=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,a.Z)({},u,{ref:m,open:h,"data-collapsed":k,className:(0,o.Z)(s.details,p&&s.isBrowser,u.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,m.current)&&(e.preventDefault(),k?(y(!1),f(!0)):y(!0))}}),w,r.createElement(l.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),f(!e)}},r.createElement("div",{className:s.collapsibleContent},n)))}const p={details:"details_b_Ee"},m="alert alert--info";function k(e){let{...t}=e;return r.createElement(u,(0,a.Z)({},t,{className:(0,o.Z)(m,p.details,t.className)}))}},37073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(34673),i=n(77693),l=n(39960);const s={sidebar_position:1},c="Beginning XPLA ACADEMY",d={unversionedId:"overview/intro",id:"overview/intro",title:"Beginning XPLA ACADEMY",description:"Step into the world of XPLA ACADEMY. YAY! Your first step into the world of XPLA blockchain development has begun! XPLA ACADEMY warmly welcomes beginners who are willing to embark on their web3.0 development journey.",source:"@site/docs/1-overview/1-intro.mdx",sourceDirName:"1-overview",slug:"/overview/intro",permalink:"/academy/docs/overview/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Let's get your Wallet ready!",permalink:"/academy/docs/category/lets-get-your-wallet-ready"}},u={},p=[],m={toc:p},k="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"beginning-xpla-academy"},"Beginning XPLA ACADEMY"),(0,r.kt)("p",null,"Step into the world of XPLA ACADEMY. YAY! Your first step into the world of XPLA blockchain development has begun! XPLA ACADEMY warmly welcomes beginners who are willing to embark on their web3.0 development journey. "),(0,r.kt)("p",null,"Our content has been meticulously curated just for you:"),(0,r.kt)(i.Z,{mdxType:"CodeBlock"},(0,r.kt)("p",null,"Overview\n","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/overview/intro",mdxType:"Link"},"Beginning XPLA ACADEMY"),"\n","\xa0","\xa0","\xa0","\xa0","Web3 Game Architecture (Coming Soon)     # Let's build a web3 game from scratch together"),(0,r.kt)("p",null,"Settings\n","\xa0","\xa0","\xa0","\xa0","Let's get your Wallet ready!\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/settings/create-wallet/create-wallet-with-vault",mdxType:"Link"},"Creating a Wallet (Vault)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/settings/create-wallet/create-wallet-with-js",mdxType:"Link"},"Creating a Wallet (Javascript)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/settings/create-wallet/get-testnet-xpla",mdxType:"Link"},"Getting Testnet XPLA Coins"),"\n","\xa0","\xa0","\xa0","\xa0","Time to Make Transactions!\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/settings/create-testnet-transaction/send-tx",mdxType:"Link"},"Creating XPLA transfer transactions"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/settings/create-testnet-transaction/check-tx-in-explorer",mdxType:"Link"},"Check Transactions (Explorer)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/settings/create-testnet-transaction/send-query",mdxType:"Link"},"Check Transactions (Javascript)")),(0,r.kt)("p",null,"Code Along Tutorial\n","\xa0","\xa0","\xa0","\xa0","Utilize Game Tokens (CW20)\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/make-cw20/make-cw20-with-vault",mdxType:"Link"},"Issue and send CW20 Tokens (Vault)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/make-cw20/make-cw20-with-js",mdxType:"Link"},"Issue and send CW20 Tokens (Javascript)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/make-cw20/query-cw20",mdxType:"Link"},"Working with CW20 Data"),"\n","\xa0","\xa0","\xa0","\xa0","Utilize NFT(CW721)\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/make-cw721/make-nft-vault",mdxType:"Link"},"Issue CW721 NFT (Vault)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/make-cw721/make-nft-js",mdxType:"Link"},"Issue CW721 NFTs (Javascript)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/make-cw721/query-cw721",mdxType:"Link"},"Working with CW721 Data"),"\n","\xa0","\xa0","\xa0","\xa0","Advenced - Dive deep into XPLA blockchain\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/deep-understand-xpla/local-network",mdxType:"Link"},"Run XPLA blockchain locally (Private)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/deep-understand-xpla/account-sequence",mdxType:"Link"},"Decode Account Numbers and Sequences in transactions"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/deep-understand-xpla/walletprovider",mdxType:"Link"},"Connect react with XPLA Vault wallet via wallet provider"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)(l.Z,{to:"/docs/tutorial/deep-understand-xpla/write-contract",mdxType:"Link"},"Write and build Cosmwasm contracts"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"All the code examples from XPLA ACADEMY are waiting for you on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xpladev/academy/tree/main/example"},"XPLA GitHub"),". Ready to walk into the world of web3.0 game development with us? Let's start by ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault"},"creating your own wallet on XPLA blockchain"),". Let's go! "),(0,r.kt)(o.Z,{summary:"What are the characteristics of the XPLA blockchain?",mdxType:"Details"},(0,r.kt)("p",null,"The XPLA blockchain is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xpladev/xpla"},"open-source")," and built on the ",(0,r.kt)("a",{parentName:"p",href:"https://tendermint.com/"},"Tendermint Tool-based")," Proof-of-Stake (PoS) consensus mechanism. It also utilizes the Cosmos SDK and offers ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"Ethereum Virtual Machine (EVM)")," compatibility. This means developers have the flexibility to write smart contracts in both Rust and Solidity languages. For more detailed information, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/learn/about-xpla-chain/"},"XPLA Docs"),"."),(0,r.kt)("p",null,"No worries if you don't fully understand everything above. You'll learn more about these concepts as you go through XPLA ACADEMY.")),(0,r.kt)(o.Z,{summary:"What are other documents on XPLA blockchain?",mdxType:"Details"},(0,r.kt)("p",null,'To find other documents about the XPLA blockchain, go to the bottom of the XPLA ACADEMY website and visit the "Dev Resources" section.')))}y.isMDXComponent=!0}}]);