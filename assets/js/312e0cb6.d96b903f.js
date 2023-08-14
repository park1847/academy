"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[4243],{34673:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),l=a(67294),r=a(86010),s=a(72389),o=a(86043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function p(e){let{summary:t,children:a,...p}=e;const u=(0,s.Z)(),m=(0,l.useRef)(null),{collapsed:w,setCollapsed:k}=(0,o.u)({initialState:!p.open}),[h,b]=(0,l.useState)(p.open),y=l.isValidElement(t)?t:l.createElement("summary",null,t??"Details");return l.createElement("details",(0,n.Z)({},p,{ref:m,open:h,"data-collapsed":w,className:(0,r.Z)(i.details,u&&i.isBrowser,p.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,m.current)&&(e.preventDefault(),w?(k(!1),b(!0)):k(!0))}}),y,l.createElement(o.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),b(!e)}},l.createElement("div",{className:i.collapsibleContent},a)))}const u={details:"details_b_Ee"},m="alert alert--info";function w(e){let{...t}=e;return l.createElement(p,(0,n.Z)({},t,{className:(0,r.Z)(m,u.details,t.className)}))}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(87462),l=a(67294),r=a(86010),s=a(12466),o=a(16550),i=a(91980),c=a(67392),d=a(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function u(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function w(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,c]=w({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=i??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var h=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==o&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},s,{className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},l.createElement(y,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function f(e){const t=(0,h.Z)();return l.createElement(g,(0,n.Z)({key:String(t)},e))}},51007:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function s(e){let{children:t,minHeight:a,url:s="http://localhost:3000",style:o,bodyStyle:i}=e;return n.createElement("div",{className:r.browserWindow,style:{...o,minHeight:a}},n.createElement("div",{className:r.browserWindowHeader},n.createElement("div",{className:r.buttons},n.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:r.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,l.Z)(r.browserWindowAddressBar,"text--truncate")},s),n.createElement("div",{className:r.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:r.bar}),n.createElement("span",{className:r.bar}),n.createElement("span",{className:r.bar})))),n.createElement("div",{className:r.browserWindowBody,style:i},t))}},61497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=e=>{let{imgSrc:t,style:a}=e;return n.createElement("img",{className:"max-w-sm",style:a,src:t,alt:""})}},56639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>f,frontMatter:()=>w,metadata:()=>h,toc:()=>y});var n=a(87462),l=a(67294),r=a(3905),s=a(18947);const o=()=>l.createElement(s.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { MnemonicKey, LCDClient } = require("@xpla/xpla.js");\n\nconst newKey = new MnemonicKey();\nconsole.log("mnemonic: " + newKey.mnemonic);\n\nconst lcd = new LCDClient({\n\tchainID : \'cube_47-5\', // xpla testnet network\uc758 \uc774\ub984\n\tURL : \'https://cube-lcd.xpla.dev\' // xpla testnet LCD URL\n});\nconsole.log("accAddress: " + lcd.wallet(newKey).key.accAddress);'},options:{layout:"console",showLineNumbers:!0}}),i=()=>l.createElement(s.oT,{files:{"/App.js":"import { LCDClient, MnemonicKey } from '@xpla/xpla.js';\n\nexport default function App() {\n    const newKey = new MnemonicKey();\n\n    const lcd = new LCDClient({\n      chainID : 'cube_47-5', // xpla testnet network\uc758 \uc774\ub984\n      URL : 'https://cube-lcd.xpla.dev' // xpla testnet LCD URL\n    });\n\n    return <>\n    <h3>mnemonic: {newKey.mnemonic}</h3>\n    <h3>accAddress: {lcd.wallet(newKey).key.accAddress}</h3>\n    </> \n}"},theme:"light",template:"react",customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"}}},l.createElement(s.sp,null,l.createElement(s.Lj,null),l.createElement(s._V,{closableTabs:!0,showTabs:!0}),l.createElement(s.Gj,null)));var c=a(61497),d=a(51007),p=a(34673),u=a(74866),m=a(85162);const w={sidebar_position:2},k="\uc9c0\uac11 \ub9cc\ub4e4\uae30 (Javascript)",h={unversionedId:"settings/create-wallet/create-wallet-with-js",id:"settings/create-wallet/create-wallet-with-js",title:"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (Javascript)",description:"\uc5ec\ub7ec\ubd84\uc774 \uac1c\ubc1c\uc790\ub77c\uba74, \ucf54\ub4dc\ub97c \ud1b5\ud574 \uc9c0\uac11\uc744 \uc0dd\uc131\ud558\uace0 \uc2f6\uc744 \uac83\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc790\uac00 \uc544\ub2c8\ub354\ub77c\ub3c4 \uc0c1\uad00\uc5c6\uc2b5\ub2c8\ub2e4. \uac1c\ubc1c \ud658\uacbd\ub9cc \uac16\ucd94\uba74 10\uc904\uc9dc\ub9ac \ucf54\ub4dc\ub85c \uc27d\uac8c \uc9c0\uac11\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/2-settings/1-create-wallet/2-create-wallet-with-js.mdx",sourceDirName:"2-settings/1-create-wallet",slug:"/settings/create-wallet/create-wallet-with-js",permalink:"/xpla-academy-dev/docs/settings/create-wallet/create-wallet-with-js",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (Vault)",permalink:"/xpla-academy-dev/docs/settings/create-wallet/create-wallet-with-vault"},next:{title:"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (CLI)",permalink:"/xpla-academy-dev/docs/settings/create-wallet/create-wallet-with-xplad"}},b={},y=[{value:"Preview",id:"preview",level:2},{value:"\ud658\uacbd\uc124\uc815",id:"setting",level:2},{value:"Node.js \uc124\uce58",id:"installnodejs",level:3},{value:"Visual Studio Code \uc124\uce58",id:"installvscode",level:3},{value:"Javascript \ucf54\ub4dc \uc2e4\ud589\ud558\uae30",id:"runjs",level:2},{value:"\uc2e4\ud589 \ud658\uacbd \uad6c\uc131",id:"requirements",level:3},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"runcode",level:3},{value:"\uc124\uba85",id:"explanation",level:2}],v={toc:y},g="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc9c0\uac11-\ub9cc\ub4e4\uae30-javascript"},"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (Javascript)"),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc774 \uac1c\ubc1c\uc790\ub77c\uba74, \ucf54\ub4dc\ub97c \ud1b5\ud574 \uc9c0\uac11\uc744 \uc0dd\uc131\ud558\uace0 \uc2f6\uc744 \uac83\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc790\uac00 \uc544\ub2c8\ub354\ub77c\ub3c4 \uc0c1\uad00\uc5c6\uc2b5\ub2c8\ub2e4. \uac1c\ubc1c \ud658\uacbd\ub9cc \uac16\ucd94\uba74 10\uc904\uc9dc\ub9ac \ucf54\ub4dc\ub85c \uc27d\uac8c \uc9c0\uac11\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"preview"},"Preview"),(0,r.kt)("p",null,"Javascript\ub85c \uc9c0\uac11\uc744 \ub9cc\ub4dc\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o,{mdxType:"Ex01"}),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@xpla/xpla.js"},"@xpla/xpla.js")," \ubaa8\ub4c8\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"new MnemonicKey()"),"\ub85c \uc0c8 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 LCDClient\ub97c \uc774\uc6a9\ud558\uc5ec \uc9c0\uac11\uc758 \uc8fc\uc18c\ub97c \ucd94\ucd9c\ud574\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,r.kt)("p",null,"Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#setting"},"\ud658\uacbd\uc124\uc815 \uc774\ud6c4 \ubd80\ubd84"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-xplad"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)(p.Z,{summary:"React\ub85c \uc9c0\uac11 \uc0dd\uc131\ud558\uae30",style:{backgroundColor:"white"},mdxType:"Details"},(0,r.kt)(i,{mdxType:"Ex01_react"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ucf54\ub4dc\ub85c \ub9cc\ub4e0 \ub2c8\ubaa8\ub2c9\uc73c\ub85c Vault\uc5d0\uc11c \uc9c0\uac11\uc744 \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. Vault\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a wallet")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"Recover wallet"),"\uc744 \ud1b5\ud574 \uc9c0\uac11\uc744 \uc5f0\uacb0\ud574\ubcf4\uc138\uc694."),(0,r.kt)(d.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,r.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17px",width:"100%",top:0,zIndex:0}}),(0,r.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"60px",width:"100%",top:17,zIndex:0}}),(0,r.kt)(c.Z,{style:{zIndex:1},imgSrc:"/xpla-academy-dev/img/2-settings/1-create-wallet/create-wallet-with-js/recover-wallet.png",mdxType:"VaultImgCard"}))),(0,r.kt)("p",{parentName:"admonition"},"Wallet name\uacfc Password\ub294 Vault\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc9c0\uac11 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4. Mnemonic\uc740 \uc608\uc81c\uc5d0\uc11c \uc5bb\uc740 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \ub123\uc73c\uc2dc\uba74 \ub429\ub2c8\ub2e4. Index\ub294 Vault\uc5d0\uc11c \uba87\ubc88\uc9f8 \uc21c\uc11c\ub85c \ud45c\uc2dc\ud560 \uc9c0\uac11\uc778\uc9c0 \uc815\ud569\ub2c8\ub2e4. ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\ucf54\ub4dc\ub85c \ub9cc\ub4e0 \uc9c0\uac11\uc744 XPLA \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc0ac\uc6a9\ud558\ub824\uba74, \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \uc798 \ubcf4\uad00\ud574\uc57c \ud569\ub2c8\ub2e4. \uc808\ub300 \ud0c0\uc778\uc5d0\uac8c \uc54c\ub824\uc8fc\uba74 \uc548\ub429\ub2c8\ub2e4.")),(0,r.kt)(p.Z,{summary:"LCDClient\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},"LCDClient\ub294 XPLA \ube14\ub85d\uccb4\uc778 \ub0b4 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 ",(0,r.kt)("a",{target:"_blank",href:"https://docs.xpla.io/docs/develop/guides/start-the-light-client-daemon/"},"Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.",(0,r.kt)("p",null,"\uc9c0\uae08 \uc774\uac83\uc5d0 \ub300\ud574 \uba85\ud655\ud558\uac8c \uc774\ud574\ud558\uc9c0 \uc54a\uc73c\uc154\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4. \ucf54\ub4dc\ub85c \uc9c0\uac11\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\ub9cc \uc54c\uc544\ub450\uc2dc\uba74 \ub429\ub2c8\ub2e4. ")),(0,r.kt)("h2",{id:"setting"},"\ud658\uacbd\uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#preview"},"Preview"),"\uc5d0\uc11c \ubcf4\uc5ec\ub4dc\ub9b0 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ud658\uacbd \uc124\uc815\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\uc2dc\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#installnodejs"},"Node.js \uc124\uce58"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#installvscode"},"Visual Studio Code \uc124\uce58")))),(0,r.kt)("h3",{id:"installnodejs"},"Node.js \uc124\uce58"),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc758 \uc6b4\uc601\uccb4\uc81c\uc5d0 \ub9de\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"),"\ub97c \uc124\uce58\ud558\uc138\uc694."),(0,r.kt)("p",null,"Node.js\uac00 \uc798 \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574, Terminal\uc744 \uc5f4\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"p"},"node -v"),"\ub97c \uc785\ub825\ud574\ubd05\uc2dc\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),(0,r.kt)("p",null,"\uc124\uce58\ud55c Node.js\uc758 \ubc84\uc804\uc774 \ucd9c\ub825\ub418\uba74 \uc124\uce58\uac00 \uc644\ub8cc\ub41c \uac83\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"p"},"v16.16.0"),"\uc774\ub77c\uace0 \ucd9c\ub825\ub418\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Terminal\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?"),"\ucef4\ud4e8\ud130 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc5b4\ud558\uae30 \uc704\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\uc73c\uc2e0 \ubd84\ub4e4\uc740 \uc5b4\ub5bb\uac8c \ud130\ubbf8\ub110\uc5d0 \uc811\uadfc\ud558\ub294\uc9c0 \ubaa8\ub974\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc6b4\uc601\uccb4\uc81c\uc5d0 \ub530\ub77c \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \ud130\ubbf8\ub110\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)(u.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"\uc708\ub3c4\uc6b0 \uc2e4\ud589\ucc3d (Win + R)\uc5d0\uc11c cmd\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,r.kt)(m.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,r.kt)("a",{href:"https://support.apple.com/ko-kr/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac",target:"_blank"},"Apple \uacf5\uc2dd \uc0ac\uc774\ud2b8"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694."))),(0,r.kt)("h3",{id:"installvscode"},"Visual Studio Code \uc124\uce58"),(0,r.kt)("p",null,"Code \ud30c\uc77c\uc744 \uc27d\uac8c \ud3b8\uc9d1\ud558\uae30 \uc704\ud574 Visual Studio Code\ub97c \uc774\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code"),"\ub97c \uc124\uce58\ud574\uc8fc\uc138\uc694."),(0,r.kt)("h2",{id:"runjs"},"Javascript \ucf54\ub4dc \uc2e4\ud589\ud558\uae30"),(0,r.kt)("p",null,"\uc774\uc81c Preview\uc5d0\uc11c \uc0b4\ud3b4\ubcf8 \ucf54\ub4dc\ub97c \uc9c1\uc811 \uc2e4\ud589\ud574\ubd05\uc2dc\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#requirements"},"\uc2e4\ud589 \ud658\uacbd \uad6c\uc131"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#runcode"},"\ucf54\ub4dc \uc2e4\ud589")))),(0,r.kt)("h3",{id:"requirements"},"\uc2e4\ud589 \ud658\uacbd \uad6c\uc131"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc608\uc81c \ucf54\ub4dc \ud30c\uc77c\uc744 \uc704\ud55c \ud3f4\ub354\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uc138\uc694. \ud3f4\ub354 \uc774\ub984\uc740 xpla-academy-example\uc73c\ub85c \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc124\uce58\ud55c Visual Studio Code\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visual Studio Code\uc5d0\uc11c File - Open Folder \ub97c \ud1b5\ud574 xpla-academy-example \ud3f4\ub354\ub97c \uc5f4\uc5b4\uc90d\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc67c\ucabd Explorer \ucc3d\uc5d0\uc11c \ud3f4\ub354 \uc774\ub984 \uc606 \uc544\uc774\ucf58(New file)\uc744 \ud074\ub9ad\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"example-1.js")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("img",{src:"/xpla-academy-dev/img/2-settings/1-create-wallet/vscode-newfile.png",width:"400",height:"200"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-1.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0, \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { MnemonicKey, LCDClient } = require("@xpla/xpla.js");\n\nconst newKey = new MnemonicKey();\nconsole.log("mnemonic: " + newKey.mnemonic);\n\nconst lcd = new LCDClient({\n  chainID : \'cube_47-5\', // xpla testnet network\uc758 \uc774\ub984\n  URL : \'https://cube-lcd.xpla.dev\' // xpla testnet LCD URL\n});\nconsole.log("accAddress: " + lcd.wallet(newKey).key.accAddress);\n')))),(0,r.kt)("h3",{id:"runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"VSCode \uc0c1\ub2e8 Terminal - New Terminal\ub97c \ud074\ub9ad\ud558\uc5ec Terminal\uc744 \uc5fd\ub2c8\ub2e4. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc544\ub798 \uba85\ub839\uc5b4\ub97c Terminal\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @xpla/xpla.js\nnode example-1.js\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uacfc \uc8fc\uc18c\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ub9cc\uc57d \uc5ec\ub7ec\ubd84\uc758 \uc6b4\uc601\uccb4\uc81c\uac00 Windows\ub77c\uba74 VS Code Terminal\uc744 Powershell\uc774 \uc544\ub2cc, Command Prompt\ub098 Git Bash\ub85c \uc2e4\ud589\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4. \ubb3c\ub860 \uc5ec\ub7ec\ubd84\uc774 \uc775\uc219\ud558\uc2e0 \ud658\uacbd\uc5d0\uc11c Terminal\uc744 \uc5f4\uc5b4\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},"VS Code Default Terminal\uc744 Command Prompt\ub85c \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Fragment,null),"1. `Ctrl + shift + P` \ub85c \uba85\ub839\uc5b4 \ud314\ub808\ud2b8(Command Palette)\ub97c \uc5fd\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)(l.Fragment,null),"2. Terminal: Select Default Profile\uc744 \uac80\uc0c9\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)(l.Fragment,null),"3. Command Prompt\ub97c \uc124\uc815\ud558\uace0, VS Code\ub97c \ub2e4\uc2dc \uc2e4\ud589\ud569\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"explanation"},"\uc124\uba85"),(0,r.kt)("p",null,"\ucd95\ud558\ub4dc\ub9bd\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \uc9c0\uac11\uc744 \ucf54\ub4dc\ub85c \ub9cc\ub4dc\uc168\uc2b5\ub2c8\ub2e4!"),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc740 \uc544\ub798 \ucf54\ub4dc \uc911 ",(0,r.kt)("inlineCode",{parentName:"p"},"MnemonicKey()")," \ud568\uc218\ub85c \uc784\uc758\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const newKey = new MnemonicKey();\nconsole.log("mnemonic: " + newKey.mnemonic);\n')),(0,r.kt)("p",null,"\ubc1b\uc740 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc9c0\uac11\uc758 \uc8fc\uc18c\ub97c LCDClient\ub97c \ud1b5\ud574 \uc54c\uc544\ub0c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const lcd = new LCDClient({\n  chainID : 'cube_47-5', // xpla testnet network\uc758 \uc774\ub984\n  URL : 'https://cube-lcd.xpla.dev' // xpla testnet LCD URL\n});\nconsole.log(\"accAddress: \" + lcd.wallet(newKey).key.accAddress);\n")),(0,r.kt)("p",null,"\uc55e\uc73c\ub85c \uc6b0\ub9ac\ub294 \uc9c0\uac11\uc744 \uc774\uc6a9\ud574\uc11c \ub354 \ub9ce\uc740 \uc77c\ub4e4\uc744 \uc9c4\ud589\ud560 \uac83\uc785\ub2c8\ub2e4. \ucf54\ub4dc\ub85c \ub9cc\ub4e0 \uc9c0\uac11\uc744 \uacc4\uc18d \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74, Vault Chrome Extension\uc5d0 \uc5f0\uacb0\ud558\uc2dc\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub9bd\ub2c8\ub2e4. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ucf54\ub4dc\ub85c \ub9cc\ub4e0 \ub2c8\ubaa8\ub2c9\uc73c\ub85c Vault\uc5d0\uc11c \uc9c0\uac11\uc744 \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. Vault\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a wallet")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"Recover wallet"),"\uc744 \ud1b5\ud574 \uc9c0\uac11\uc744 \uc5f0\uacb0\ud574\ubcf4\uc138\uc694."),(0,r.kt)(d.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,r.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17px",width:"100%",top:0,zIndex:0}}),(0,r.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"60px",width:"100%",top:17,zIndex:0}}),(0,r.kt)(c.Z,{style:{zIndex:1},imgSrc:"/xpla-academy-dev/img/2-settings/1-create-wallet/create-wallet-with-js/recover-wallet.png",mdxType:"VaultImgCard"}))),(0,r.kt)("p",{parentName:"admonition"},"Wallet name\uacfc Password\ub294 Vault\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc9c0\uac11 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4. Mnemonic\uc740 \uc608\uc81c\uc5d0\uc11c \uc5bb\uc740 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \ub123\uc73c\uc2dc\uba74 \ub429\ub2c8\ub2e4. Index\ub294 Vault\uc5d0\uc11c \uba87\ubc88\uc9f8 \uc21c\uc11c\ub85c \ud45c\uc2dc\ud560 \uc9c0\uac11\uc778\uc9c0 \uc815\ud569\ub2c8\ub2e4. ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\ucf54\ub4dc\ub85c \ub9cc\ub4e0 \uc9c0\uac11\uc744 XPLA \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc0ac\uc6a9\ud558\ub824\uba74, \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \uc798 \ubcf4\uad00\ud574\uc57c \ud569\ub2c8\ub2e4. \uc808\ub300 \ud0c0\uc778\uc5d0\uac8c \uc54c\ub824\uc8fc\uba74 \uc548\ub429\ub2c8\ub2e4.")),(0,r.kt)(p.Z,{summary:"LCDClient\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},"LCDClient\ub294 XPLA \ube14\ub85d\uccb4\uc778 \ub0b4 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 ",(0,r.kt)("a",{target:"_blank",href:"https://docs.xpla.io/docs/develop/guides/start-the-light-client-daemon/"},"Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.",(0,r.kt)("p",null,"\uc9c0\uae08 \uc774\uac83\uc5d0 \ub300\ud574 \uba85\ud655\ud558\uac8c \uc774\ud574\ud558\uc9c0 \uc54a\uc73c\uc154\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4. \ucf54\ub4dc\ub85c \uc9c0\uac11\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\ub9cc \uc54c\uc544\ub450\uc2dc\uba74 \ub429\ub2c8\ub2e4. ")))}f.isMDXComponent=!0}}]);