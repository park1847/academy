"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[8439],{34673:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(87462),l=t(67294),s=t(86010),i=t(72389),r=t(86043);const o={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function m(e,n){return!!e&&(e===n||m(e.parentElement,n))}function c(e){let{summary:n,children:t,...c}=e;const d=(0,i.Z)(),u=(0,l.useRef)(null),{collapsed:k,setCollapsed:N}=(0,r.u)({initialState:!c.open}),[g,y]=(0,l.useState)(c.open),x=l.isValidElement(n)?n:l.createElement("summary",null,n??"Details");return l.createElement("details",(0,a.Z)({},c,{ref:u,open:g,"data-collapsed":k,className:(0,s.Z)(o.details,d&&o.isBrowser,c.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;p(n)&&m(n,u.current)&&(e.preventDefault(),k?(N(!1),y(!0)):N(!0))}}),x,l.createElement(r.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{N(e),y(!e)}},l.createElement("div",{className:o.collapsibleContent},t)))}const d={details:"details_b_Ee"},u="alert alert--info";function k(e){let{...n}=e;return l.createElement(c,(0,a.Z)({},n,{className:(0,s.Z)(u,d.details,n.className)}))}},77727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>m,metadata:()=>d,toc:()=>k});var a=t(87462),l=t(67294),s=t(3905),i=t(34673),r=t(18947);const o=()=>l.createElement(r.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient, MnemonicKey, MsgInstantiateContract } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n  const mk = new MnemonicKey({\n    mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\' // \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \ubc14\uafd4\uc8fc\uc138\uc694.\n  })\n\n  const wallet = lcd.wallet(mk);\n  const myWalletAddress = wallet.key.accAddress;\n\n  const init_msg = {\n    "name": "YourNFTName",\n    "symbol": "YNN",\n    "minter": myWalletAddress\n  }\n\n  const instantiate = new MsgInstantiateContract(\n    myWalletAddress, // sender\n    myWalletAddress, // admin\n    3, // MAINNET, TESTNET CW721 code id\n    init_msg,\n    {}, // \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud560 XPLA \ud1a0\ud070 \uc218\ub7c9, \ud604\uc7ac\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\ub2c8 \ube44\uc6cc\ub461\ub2c8\ub2e4.\n    \'Input your label\', // \uc791\uc131\ud558\uace0 \uc2f6\uc740 \ub77c\ubca8\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.\n  );\n\n  const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n    msgs: [instantiate]\n  });\n\n  const txResult = await lcd.tx.broadcastSync(signedTx);\n  console.log(txResult.txhash);\n}\nmain()\n          '},options:{layout:"console",showLineNumbers:!0,editorHeight:600}}),p=()=>l.createElement(r.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":"const { LCDClient, MnemonicKey, MsgExecuteContract } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n  chainID: 'cube_47-5',\n  URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n  const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \ubc14\uafd4\uc8fc\uc138\uc694.\n  })\n\n  const wallet = lcd.wallet(mk);\n  const myWalletAddress = wallet.key.accAddress;\n  const myContractAddress = \"xpla10r58td65tgvpaqngg7802rtpg5l6as8my2unnlnpa8en894qqstshxq0u0\"; // Input your Contract Address\n\n  const time = new Date();\n  const mintJSON = {\n    mint: {\n      owner: myWalletAddress,\n      token_id: `token_id_${time.getTime()}`,\n      // token_uri: \"https://your.token.uri.address\", // input your token_uri\n      extension: {\n        name : \"My Test XPLA NFT\",\n        // image: \"https://your.image.url\", // input your nft image url\n        attributes: [\n          {\n            value: 'Alice',\n            trait_type: 'CharacterName',\n          },\n          {\n            value: '100',\n            trait_type: 'CP',\n          },\n          {\n            value: '10',\n            trait_type: 'HP',\n          },\n        ],\n        description : \"This is my First NFT in XPLA Blockchain!\",\n      },\n    },\n  };\n  const mint = new MsgExecuteContract(\n    myWalletAddress,\n    myContractAddress,\n    mintJSON\n  );\n\n  const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n    msgs: [mint]\n  });\n\n  const txResult = await lcd.tx.broadcastSync(signedTx);\n  console.log(txResult.txhash);\n}\nmain()\n          "},options:{layout:"console",showLineNumbers:!0,editorHeight:600}}),m={sidebar_position:2},c="Javascript\ub85c NFT(CW721) \ubc1c\ud589\ud558\uae30",d={unversionedId:"tutorial/add-func-to-game-1/make-nft-js",id:"tutorial/add-func-to-game-1/make-nft-js",title:"Javascript\ub85c NFT(CW721) \ubc1c\ud589\ud558\uae30",description:"CW721\uc744 \uc774\uc6a9\ud558\uba74 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc27d\uac8c NFT\ub97c \ubc1c\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 Javascript\ub85c NFT\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uace0, \uac8c\uc784\uc5d0 \uc801\uc6a9\ud574\ubd05\uc2dc\ub2e4.",source:"@site/docs/3-tutorial/2-add-func-to-game-1/3-make-nft-js.mdx",sourceDirName:"3-tutorial/2-add-func-to-game-1",slug:"/tutorial/add-func-to-game-1/make-nft-js",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/add-func-to-game-1/make-nft-js",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Vault\ub85c NFT(CW721) \ubc1c\ud589\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/add-func-to-game-1/make-nft-vault"},next:{title:"CW721 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/add-func-to-game-1/query-cw721"}},u={},k=[{value:"Preview",id:"preview",level:2},{value:"Javascript\ub85c CW721 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\ud558\uae30",id:"instantiate-runjs",level:2},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"instantiate-runcode",level:3},{value:"\uc124\uba85",id:"instantiate-explaination",level:3},{value:"\uc0dd\uc131\ud55c CW721 \ucee8\ud2b8\ub799\ud2b8\ub85c NFT \ubc1c\ud589\ud558\uae30",id:"makenft-runjs",level:2},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"makenft-runcode",level:3},{value:"\uc124\uba85",id:"makenft-explaination",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],N={toc:k},g="wrapper";function y(e){let{components:n,...t}=e;return(0,s.kt)(g,(0,a.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"javascript\ub85c-nftcw721-\ubc1c\ud589\ud558\uae30"},"Javascript\ub85c NFT(CW721) \ubc1c\ud589\ud558\uae30"),(0,s.kt)("p",null,"CW721\uc744 \uc774\uc6a9\ud558\uba74 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc27d\uac8c NFT\ub97c \ubc1c\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 Javascript\ub85c NFT\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uace0, \uac8c\uc784\uc5d0 \uc801\uc6a9\ud574\ubd05\uc2dc\ub2e4."),(0,s.kt)(i.Z,{summary:"NFT\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,s.kt)("p",null,"NFT\ub780 ",(0,s.kt)("inlineCode",{parentName:"p"},"Non-Fungible Token"),"\uc758 \uc57d\uc790\ub85c, \ub300\uccb4 \ubd88\uac00\ub2a5\ud55c \ud1a0\ud070\uc774\ub780 \ub73b\uc785\ub2c8\ub2e4. ",(0,s.kt)("inlineCode",{parentName:"p"},"\ub300\uccb4 \ubd88\uac00\ub2a5"),"\uc774\ub77c\ub294 \uac74 \ubb34\uc2a8 \ub73b\uc77c\uae4c\uc694?"),(0,s.kt)("p",null,"1\ub2ec\ub7ec\uc9dc\ub9ac \uc9c0\ud3d0 \ub450 \uc7a5\uc758 \uac00\uce58\ub294 \uc11c\ub85c \uac19\uc2b5\ub2c8\ub2e4. \ub458 \ub2e4 1\ub2ec\ub7ec\uc758 \uac00\uce58\ub97c \uc9c0\ub2c8\ubbc0\ub85c, \ud558\ub098\uac00 \ub2e4\ub978 \ud558\ub098\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 Alice\uac00 \uadf8\ub9b0 \ubaa8\ub098\uc9c0\ub77c \uadf8\ub9bc\uacfc \ub8e8\ube0c\ub974 \ubc15\ubb3c\uad00\uc5d0 \uc788\ub294 \ubaa8\ub098\ub9ac\uc790\uc758 \uac00\uce58\ub294 \uc5b4\ub5a8\uae4c\uc694? Alice\uac00 \ubaa8\ub098\ub9ac\uc790 \uadf8\ub9bc\uc758 \ubaa8\ub4e0 \ubd80\ubd84\uc744 \ub611\uac19\uc774 \ubb18\uc0ac\ud574\ub3c4, \uc9c4\uc9dc \ubaa8\ub098\ub9ac\uc790\ub97c \ub300\uccb4\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ucc98\ub7fc \uc11c\ub85c \ub300\uccb4\ud560 \uc218 \uc5c6\ub294 \uace0\uc720\ud55c \ud1a0\ud070\uc744 \ub450\uace0 NFT\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. "),(0,s.kt)("p",null,"NFT\ub85c \ubb34\uc5c7\uc744 \ud560 \uc218 \uc788\uc744\uae4c\uc694? Alice\ub294 \uadf8\ub9bc\uc744 \ud558\ub098 \uadf8\ub824 \ud504\ub85c\ud544 \uc0ac\uc9c4\uc73c\ub85c \uc0ac\uc6a9\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \ub204\uad70\uac00\uac00 Alice\uc758 \uadf8\ub9bc\uc744 \ubcf5\uc0ac\ud558\uc5ec \uc0ac\uc6a9\ud558\uace0, \uc790\uc2e0\uc774 \uadf8\ub9b0 \uadf8\ub9bc\uc774\ub77c\uace0 \uc8fc\uc7a5\ud558\uba74 \uc5b4\ub5a1\ud560\uae4c\uc694? Alice\uac00 \uadf8\ub9bc\uc758 \uc8fc\uc694 \uc815\ubcf4\ub97c NFT\uc5d0 \ub2f4\ub294\ub2e4\uba74 \uadf8\ub9bc\uc758 \uc18c\uc720\uad8c\uc744 \uc99d\uba85\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4.")),(0,s.kt)(i.Z,{summary:"CW721\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,s.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud50c\ub7ab\ud3fc\uc778 ",(0,s.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub354\ub9ac\uc6c0\uc758 ERC721\ucc98\ub7fc, ",(0,s.kt)("strong",{parentName:"p"},"CW721"),"\uc740 ",(0,s.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc5d0\uc11c \ub300\uccb4 \ubd88\uac00\ub2a5\ud55c \ud1a0\ud070(Non-Fungible Tokens)\uc5d0 \ub300\ud55c \ud45c\uc900\uc785\ub2c8\ub2e4. ERC721\uacfc \uc774\ub984\uc740 \ube44\uc2b7\ud560\uc9c0 \ubab0\ub77c\ub3c4, \uae30\ub2a5\uc740 \ub9ce\uc774 \ub2e4\ub985\ub2c8\ub2e4. \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/xpladev/cw-nfts"},"\uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,s.kt)("h2",{id:"preview"},"Preview"),(0,s.kt)("p",null,"\uba3c\uc800 Javascript\ub85c CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \ub123\uc5b4 \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uace0 \uc2e4\ud589\ud574\ubcf4\uc138\uc694. \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(o,{mdxType:"Ex06CW721"}),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8\ub97c \uc798 \uc0dd\uc131\ud558\uc168\ub098\uc694? \uc774\uc81c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec NFT\ub97c \ubc1c\ud589\ud574\ubd05\uc2dc\ub2e4. \uc544\ub798 \ucf54\ub4dc\uc5d0\uc11c \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \ub123\uc5b4\uc8fc\uc138\uc694. \uc774\ud6c4 \uc704\uc5d0\uc11c \ub9cc\ub4e0 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"myContractAddress")," \ubcc0\uc218\uc5d0 \ub300\uc785\ud574\uc8fc\uc138\uc694. \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74 \uc7a0\uc2dc \ud6c4 NFT \ubc1c\ud589 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,s.kt)(i.Z,{summary:"\uc0dd\uc131\ud55c \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc18c\ub294 \uc5b4\ub514\uc11c \ud655\uc778\ud558\ub098\uc694?",mdxType:"Details"},(0,s.kt)("p",null,"\uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\ub97c \uc774\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc2e4\ud589 \uacb0\uacfc\ub85c \ub098\uc628 \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \uac80\uc0c9\ud574\ubd05\uc2dc\ub2e4. \uc774\ud6c4 Transaction Details \ud654\uba74\uc5d0\uc11c ",(0,s.kt)("inlineCode",{parentName:"p"},"Event Logs")," \ud0ed\uc5d0 \ub4e4\uc5b4\uac00\uc2dc\uba74, \uc0dd\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc18c\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\uc81c \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.dev/testnet/tx/CA0CDADB8F1A1AF807D76FD24A75E8468E884DA5ACEB9BE2FE33F802E5531C07#EventLogs"},"\uc774\uacf3"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,s.kt)(p,{mdxType:"Ex07MintNFT"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/add-func-to-game-1/make-nft-js#instantiate-runjs"},"\uc544\ub798 \ub0b4\uc6a9"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/add-func-to-game-2/overview"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"instantiate-runjs"},"Javascript\ub85c CW721 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,s.kt)("p",null,"CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud574\ubd05\uc2dc\ub2e4. CW721 \ucee8\ud2b8\ub799\ud2b8\uc758 Code ID\ub294 \uba54\uc778\ub137\uacfc \ud14c\uc2a4\ud2b8\ub137 \ubaa8\ub450 ",(0,s.kt)("inlineCode",{parentName:"p"},"3"),"\uc785\ub2c8\ub2e4."),(0,s.kt)(i.Z,{summary:"Code ID\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,s.kt)("p",null,"EVM\uacfc \ub2ec\ub9ac, Cosmwasm\uc5d0\uc11c\ub294 \ucf54\ub4dc \ubc30\ud3ec(Code Deploy)\uc640 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc774 \ud55c\ubc88\uc5d0 \uc774\ub904\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \ucf54\ub4dc\ub97c \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec(StoreCode)\ud558\uba74 \ud574\ub2f9 \ucf54\ub4dc\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \ubc1c\uae09 \ubc1b\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 ",(0,s.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \uae30\ubc18\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131(InstantiateContract)\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ub611\uac19\uc740 Code ID\ub85c \uc0dd\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\ub4e4\uc740 \ubaa8\ub450 \uac19\uc740 \ucf54\ub4dc \uae30\ubc18\uc785\ub2c8\ub2e4. \ub2e4\ub9cc \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c \uc785\ub825\ud558\ub294 \ucd08\uae43\uac12(init_msg)\uc774 \ub2e4\ub974\uba74, \ucee8\ud2b8\ub799\ud2b8\uc758 \uc138\ubd80 \uc0ac\ud56d\ub3c4 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \ub354 \uc790\uc138\ud55c \uc0ac\ud56d\uc740 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/core-modules/wasm/#code-id"},"XPLA Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"instantiate-runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"example-6.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-6.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient, MnemonicKey, MsgInstantiateContract } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\' // \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \ubc14\uafd4\uc8fc\uc138\uc694.\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n\n    const init_msg = {\n        "name": "YourNFTName",\n        "symbol": "YNN",\n        "minter": myWalletAddress\n    }\n\n    const instantiate = new MsgInstantiateContract(\n        myWalletAddress, // sender\n        myWalletAddress, // admin\n        3, // MAINNET, TESTNET CW721 code id\n        init_msg,\n        {}, // \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud560 XPLA \ud1a0\ud070 \uc218\ub7c9, \ud604\uc7ac\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\ub2c8 \ube44\uc6cc\ub461\ub2c8\ub2e4.\n        \'Input your label\', // \uc791\uc131\ud558\uace0 \uc2f6\uc740 \ub77c\ubca8\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n        msgs: [instantiate]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"10\ubc88\uc9f8 \uc904\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc218\uc815\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node example-6.js\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. CW721 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0dd\uc131\ub418\uace0, \uc0dd\uc131 \ud2b8\ub79c\uc7ad\uc158\uc758 \ud574\uc2dc\uac12\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"instantiate-explaination"},"\uc124\uba85"),(0,s.kt)("p",null,"\uc6b0\ub9ac\ub294 CW721\uc5d0 \uad00\ud55c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ucf54\ub4dc\ub294 \uc774\ubbf8 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec\ub418\uc5c8\uace0, \ub2e8\uc9c0 \ubc30\ud3ec\ub41c \ucf54\ub4dc\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud588\uc744 \ubfd0\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uba3c\uc800 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc9c0\uac11\uc744 \ubd88\ub7ec\uc654\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 \ub2e4\ub978 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uc9c0\uac11\uc744 \ubd88\ub7ec\uc624\uc168\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n})\n\nconst wallet = lcd.wallet(mk);\nconst myWalletAddress = wallet.key.accAddress;\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"CW721 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc744 \uc704\ud574 \ucd08\uae30\uac12\uc744 \ubbf8\ub9ac \uc9c0\uc815\ud574\uc92c\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uac12\ub4e4\uc740 \uc5ec\ub7ec\ubd84\uc774 \uc6d0\ud558\ub294\ub300\ub85c \uc218\uc815\ud558\uc154\uc11c, \uc5ec\ub7ec\ubd84\ub9cc\uc758 NFT\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uc2dc\ub294 \uac83\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const init_msg = {\n    "name": "YourNFTName",\n    "symbol": "YNN",\n    "minter": myWalletAddress\n}\n')),(0,s.kt)("br",null),(0,s.kt)("p",null,"\ub204\uac00 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud558\ub294\uc9c0(sender), \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc778\uc740 \ub204\uad6c\uc778\uc9c0(admin), Code ID, \ucd08\uae43\uac12, \ub77c\ubca8 \ub4f1\uc744 \uc785\ub825\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc744 \uc900\ube44\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const instantiate = new MsgInstantiateContract(\n    myWalletAddress, // sender\n    myWalletAddress, // admin\n    3, // MAINNET, TESTNET CW721 code id\n    init_msg,\n    {}, // \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud560 XPLA \ud1a0\ud070 \uc218\ub7c9, \ud604\uc7ac\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\ub2c8 \ube44\uc6cc\ub461\ub2c8\ub2e4.\n    'Input your label', // \uc791\uc131\ud558\uace0 \uc2f6\uc740 \ub77c\ubca8\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.\n);\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, \uc11c\uba85\uae4c\uc9c0 \uc9c4\ud589\ud569\ub2c8\ub2e4. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n    msgs: [instantiate]\n});\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"broadcastSync")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc744 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc1a1\uc2e0\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uc798 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74, \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \uacb0\uacfc\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const txResult = await lcd.tx.broadcastSync(signedTx);\nconsole.log(txResult.txhash);\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"\uc0dd\uc131\ud55c \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \ud655\uc778\ud574\ubd05\uc2dc\ub2e4. \uc2e4\ud589 \uacb0\uacfc\ub85c \ub098\uc628 \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \uac80\uc0c9\ud569\ub2c8\ub2e4. \uc774\ud6c4 Transaction Details \ud654\uba74\uc5d0\uc11c ",(0,s.kt)("inlineCode",{parentName:"p"},"Event Logs")," \ud0ed\uc5d0 \ub4e4\uc5b4\uac00\uc2dc\uba74, \uc0dd\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc18c\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\uc81c \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.dev/testnet/tx/CA0CDADB8F1A1AF807D76FD24A75E8468E884DA5ACEB9BE2FE33F802E5531C07#EventLogs"},"\uc774\uacf3"),"\uc5d0\uc11c ",(0,s.kt)("inlineCode",{parentName:"p"},"\nxpla10r58td65tgvpaqngg7802rtpg5l6as8my2unnlnpa8en894qqstshxq0u"),"\uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"makenft-runjs"},"\uc0dd\uc131\ud55c CW721 \ucee8\ud2b8\ub799\ud2b8\ub85c NFT \ubc1c\ud589\ud558\uae30"),(0,s.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 \uc6b0\ub9ac\ub294 CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4. \uc774\uc81c\ubd80\ud130 \uc0dd\uc131\ud55c \ucee8\ud2b8\ub799\ud2b8\ub85c NFT\ub97c \ubc1c\ud589(Mint)\ud574\ubd05\uc2dc\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"makenft-runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"example-7.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-7.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { LCDClient, MnemonicKey, MsgExecuteContract } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \ubc14\uafd4\uc8fc\uc138\uc694.\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n    const myContractAddress = \"xpla10r58td65tgvpaqngg7802rtpg5l6as8my2unnlnpa8en894qqstshxq0u0\"; // Input your Contract Address\n\n    const time = new Date();\n    const mintJSON = {\n        mint: {\n            owner: myWalletAddress,\n            token_id: `token_id_${time.getTime()}`,\n            // token_uri: \"https://your.token.uri.address\", // input your token_uri\n            extension: {\n                name : \"My Test XPLA NFT\",\n                // image: \"https://your.image.url\", // input your nft image url\n                attributes: [\n                    {\n                        value: 'Alice',\n                        trait_type: 'CharacterName',\n                    },\n                    {\n                        value: '100',\n                        trait_type: 'CP',\n                    },\n                    {\n                        value: '10',\n                        trait_type: 'HP',\n                    },\n                ],\n                description : \"This is my First NFT in XPLA Blockchain!\",\n            },\n        },\n    };\n    const mint = new MsgExecuteContract(\n        myWalletAddress,\n        myContractAddress,\n        mintJSON\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n        msgs: [mint]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"10\ubc88\uc9f8 \uc904\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc218\uc815\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc55e\uc11c \ub9cc\ub4e0 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c 15\ubc88\uc9f8 \uc904\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"myContractAddress")," \ubcc0\uc218\uc5d0 \ub300\uc785\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node example-7.js\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 NFT\uac00 \ubc1c\ud589\ub418\uc5c8\uc744 \uac83\uc785\ub2c8\ub2e4."))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"makenft-explaination"},"\uc124\uba85"),(0,s.kt)("p",null,"\uc9c0\uac11\uc744 \ubd88\ub7ec\uc624\ub294 \ubd80\ubd84\uae4c\uc9c0\ub294 \uc774\uc804\uacfc \ub3d9\uc77c\ud558\ubbc0\ub85c \uc0dd\ub7b5\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uba3c\uc800 \uc5b4\ub5a4 \uc8fc\uc694 \uc815\ubcf4(metadata)\ub97c \uac00\uc9c4 NFT\ub97c \ubc1c\ud589\ud560 \uac83\uc778\uc9c0 \uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 Alice\ub77c\ub294 \uc774\ub984\uc758 \uce90\ub9ad\ud130 NFT\ub97c \ub9cc\ub4dc\ub294 \uac83\uc73c\ub85c \uac00\uc815\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc774 NFT \uce90\ub9ad\ud130\ub294 CP\uac00 100\uc774\uace0, HP\uac00 10\uc774\uaca0\uad70\uc694."),(0,s.kt)("p",null,"\uc544\ub798 \uac12\ub4e4\uc744 \ubcc0\uacbd\ud558\uc5ec \uc790\uc2e0\ub9cc\uc758 NFT\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const time = new Date();\nconst mintJSON = {\n    mint: {\n        owner: myWalletAddress,\n        token_id: `token_id_${time.getTime()}`,\n        // token_uri: \"https://your.token.uri.address\", // input your token_uri\n        extension: {\n            name : \"My Test XPLA NFT\",\n            // image: \"https://your.image.url\", // input your nft image url\n            attributes: [\n                {\n                    value: 'Alice',\n                    trait_type: 'CharacterName',\n                },\n                {\n                    value: '100',\n                    trait_type: 'CP',\n                },\n                {\n                    value: '10',\n                    trait_type: 'HP',\n                },\n            ],\n            description : \"This is my First NFT in XPLA Blockchain!\",\n        },\n    },\n};\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"\uc791\uc131\ud55c \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc774\uc6a9\ud558\uc5ec \uc55e\uc11c \uc0dd\uc131\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"Execute"),"\ud569\ub2c8\ub2e4. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const mint = new MsgExecuteContract(\n    myWalletAddress,\n    myContractAddress,\n    mintJSON\n);\n")),(0,s.kt)("p",null,"\uc774\ud6c4 \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131, \uc11c\uba85, \ub124\ud2b8\uc6cc\ud06c \uc1a1\uc2e0 \ub4f1 \uc791\uc5c5\uc744 \uac70\uce69\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 \ube14\ub85d\uccb4\uc778\uc5d0 \uc798 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74, NFT \ubc1c\ud589(Mint)\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc9c4\ud589\ub41c \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,s.kt)("p",null,"\uc774\ub807\uac8c CW721 \ucee8\ud2b8\ub799\ud2b8\ub85c NFT\ub97c \ubc1c\ud589\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. NFT\ub3c4 \ud1a0\ud070\uc774\uae30 \ub54c\ubb38\uc5d0, \ucee8\ud2b8\ub799\ud2b8\ub85c \ubc1c\ud589\ud558\ub294 \uac83\uc784\uc744 \uae30\uc5b5\ud574\uc8fc\uc138\uc694. \ub2e8\uc9c0 \ud1a0\ud070\ub9c8\ub2e4 \uace0\uc720\ud55c \uba54\ud0c0\ub370\uc774\ud130\uac00 \uc788\uae30 \ub54c\ubb38\uc5d0, \uac19\uc740 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ub2e4\ub978 \ud1a0\ud070\ub4e4\uacfc \ub300\uccb4\ud560 \uc218 \uc5c6\ub2e4\ub294 \uac83\uc774 \ud070 \ud2b9\uc9d5\uc785\ub2c8\ub2e4."))}y.isMDXComponent=!0}}]);