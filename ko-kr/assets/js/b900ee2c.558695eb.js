"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[8733],{34673:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(87462),l=t(67294),r=t(86010),s=t(72389),c=t(86043);const o={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function i(e,n){return!!e&&(e===n||i(e.parentElement,n))}function p(e){let{summary:n,children:t,...p}=e;const d=(0,s.Z)(),m=(0,l.useRef)(null),{collapsed:k,setCollapsed:q}=(0,c.u)({initialState:!p.open}),[x,b]=(0,l.useState)(p.open),h=l.isValidElement(n)?n:l.createElement("summary",null,n??"Details");return l.createElement("details",(0,a.Z)({},p,{ref:m,open:x,"data-collapsed":k,className:(0,r.Z)(o.details,d&&o.isBrowser,p.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;u(n)&&i(n,m.current)&&(e.preventDefault(),k?(q(!1),b(!0)):q(!0))}}),h,l.createElement(c.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{q(e),b(!e)}},l.createElement("div",{className:o.collapsibleContent},t)))}const d={details:"details_b_Ee"},m="alert alert--info";function k(e){let{...n}=e;return l.createElement(p,(0,a.Z)({},n,{className:(0,r.Z)(m,d.details,n.className)}))}},94615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>q,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(87462),l=t(67294),r=t(3905),s=(t(34673),t(18947));const c=()=>l.createElement(s.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient, MnemonicKey, MsgSend } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n  const mk = new MnemonicKey({\n    mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n  });\n\n  const distributor = lcd.wallet(mk);\n\n  const distributorInfo = await lcd.auth.accountInfo(distributor.key.accAddress);\n  const accountNumber = distributorInfo.account_number;\n  const sequence = distributorInfo.sequence;\n\n  const receivers = [\n    "xpla13hpy8pq6799d66qlnfql6jr7vfudq8rhqt66ma",\n    "xpla15msreuqde07m5070qsxvflqq3xy5tx2p4anhqu",\n    "xpla1lgx8hzlpytrvz0g9s24gspzfl6zh68srj7gwu8",\n    "xpla1uh30ekv9ll3e05nzl75euuy7qkjrlcreh5zmju",\n    "xpla1znpv2y0mm2wce79wvpces0yakmep42nj4xhpky",\n  ]\n\n  for (let i = 0; i < receivers.length; i++) {\n    try {\n      const send = new MsgSend(\n        distributor.key.accAddress,\n        receivers[i],\n        { axpla: 1 }\n      );\n    \n      const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd\n        msgs: [send],\n        memo: \'Air Drop Test\',\n        accountNumber,\n        sequence\n        // sequence : sequence + i\n      });\n    \n      const result = await lcd.tx.broadcastSync(signedTx);\n      console.log(result);\n\n    } catch (error) {\n      console.log(error.response.data.message);\n    }\n  }\n}\n\nmain();\n          '},options:{layout:"console",showLineNumbers:!0,editorHeight:600}}),o={sidebar_position:3},u="\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c AccountNumber\uc640 Sequence \ud56d\ubaa9 \uc774\ud574\ud558\uae30",i={unversionedId:"tutorial/deep-understand-xpla/account-sequence",id:"tutorial/deep-understand-xpla/account-sequence",title:"\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c AccountNumber\uc640 Sequence \ud56d\ubaa9 \uc774\ud574\ud558\uae30",description:"\ud1a0\ud070(CW20) \ubc1c\ud589 \ub2e8\uacc4\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \uc11c\uba85\uc744 \uc9c4\ud589\ud560 \ub54c \uc544\ub798\ucc98\ub7fc accountNumber\uc640 sequence \uc815\ubcf4\ub97c \uae30\uc785\ud588\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko-kr/docusaurus-plugin-content-docs/current/3-tutorial/3-deep-understand-xpla/2-account-sequence.mdx",sourceDirName:"3-tutorial/3-deep-understand-xpla",slug:"/tutorial/deep-understand-xpla/account-sequence",permalink:"/academy/ko-kr/docs/tutorial/deep-understand-xpla/account-sequence",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"XPLA \ube14\ub85d\uccb4\uc778\uc744 Local(Private) Network\uc5d0\uc11c \uc2e4\ud589\ud558\uae30",permalink:"/academy/ko-kr/docs/tutorial/deep-understand-xpla/local-network"},next:{title:"Wallet Provider\ub85c React\uc640 XPLA Vault \uc9c0\uac11 \uc5f0\uacb0\ud558\uae30",permalink:"/academy/ko-kr/docs/tutorial/deep-understand-xpla/walletprovider"}},p={},d=[{value:"\uc815\uc758",id:"definition",level:2},{value:"Account Number",id:"accountnumber",level:3},{value:"Sequence",id:"sequence",level:3},{value:"\ucf54\ub4dc\ub85c \uc774\ud574\ud558\uae30",id:"understandwithcode",level:2},{value:"Preview",id:"preview",level:3},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"runcode",level:3},{value:"\uc124\uba85",id:"explaination",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"conclusion",level:2}],m={toc:d},k="wrapper";function q(e){let{components:n,...t}=e;return(0,r.kt)(k,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c-accountnumber\uc640-sequence-\ud56d\ubaa9-\uc774\ud574\ud558\uae30"},"\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c AccountNumber\uc640 Sequence \ud56d\ubaa9 \uc774\ud574\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js"},"\ud1a0\ud070(CW20) \ubc1c\ud589 \ub2e8\uacc4"),"\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \uc11c\uba85\uc744 \uc9c4\ud589\ud560 \ub54c \uc544\ub798\ucc98\ub7fc ",(0,r.kt)("strong",{parentName:"p"},"accountNumber"),"\uc640 ",(0,r.kt)("strong",{parentName:"p"},"sequence")," \uc815\ubcf4\ub97c \uae30\uc785\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const userSignOption = { // \uc11c\uba85 \uc815\ubcf4 \n    chainID: 'cube_47-5',\n    accountNumber: acc.account_number,\n    sequence: acc.sequence,\n    signMode: SignMode.SIGN_MODE_DIRECT\n}\n")),(0,r.kt)("p",null,"\uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c\ub294 ",(0,r.kt)("strong",{parentName:"p"},"accountNumber"),"\uc640 ",(0,r.kt)("strong",{parentName:"p"},"sequence"),"\uac00 \uac01\uac01 \ubb34\uc5c7\uc774\uace0, \uc5b4\ub5a4 \uc5ed\ud560\uc744 \ud558\ub294\uc9c0 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"definition"},"\uc815\uc758"),(0,r.kt)("h3",{id:"accountnumber"},"Account Number"),(0,r.kt)("p",null,"\uac01 \uc9c0\uac11\uc740 XPLA \ube14\ub85d\uccb4\uc778\uacfc \ucc98\uc74c \uc0c1\ud638\uc791\uc6a9\ud560 \ub54c accountNumber\ub97c \ubd80\uc5ec\ubc1b\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/send-query"},"\ucf54\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \ub2e8\uacc4"),"\uc5d0\uc11c \uc0ac\uc6a9\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," \uc8fc\uc18c\ub294 \ud14c\uc2a4\ud2b8\ub137\uc5d0\uc11c accountNumber\uac00 ",(0,r.kt)("a",{parentName:"p",href:"https://cube-lcd.xpla.dev/cosmos/auth/v1beta1/accounts/xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"},"28367"),"\uc774\ubbc0\ub85c 28368\ubc88\uc9f8\ub85c XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uc811\uadfc\ud55c \uac83\uc785\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8\ub137 \ube14\ub85d\uccb4\uc778\uc5d0 \uac00\uc7a5 \uba3c\uc800 \uc811\uadfc\ud55c \uc9c0\uac11 \uc8fc\uc18c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1psv57747avcnkwfx9z6q2l396z22uqafu8gewg"),"\uc73c\ub85c, accoutNumber\uac00 ",(0,r.kt)("a",{parentName:"p",href:"https://cube-lcd.xpla.dev/cosmos/auth/v1beta1/accounts/xpla1psv57747avcnkwfx9z6q2l396z22uqafu8gewg"},"0"),"\uc784\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e8\uc21c\ud788 \uc9c0\uac11\uc744 \uc0dd\uc131\ud55c \uac83\uc73c\ub85c\ub294 accountNumber\ub97c \ubd80\uc5ec\ubc1b\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ud1a0\ud070\uc744 \uc804\uc1a1 \ubc1b\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ud1b5\ud574, XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uc9c0\uac11 \uc8fc\uc18c \uc815\ubcf4\ub97c \uae30\ub85d\ud574\uc57c accountNumber\ub97c \uac00\uc9c8 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"sequence"},"Sequence"),(0,r.kt)("p",null,"Sequence\ub780 \uac01 \uc9c0\uac11\uc774 \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc758 \ubc88\ud638\uc785\ub2c8\ub2e4. \uc9c0\uac11\uc774 \ucc98\uc74c\uc73c\ub85c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud588\ub2e4\uba74 sequence \uac12\uc740 0\uc774 \ub418\uace0, \uc774\ud6c4\uc5d0 \ub9cc\ub4e0 \uac01 \ud2b8\ub79c\uc7ad\uc158\uc758 sequence \uac12\uc740 1\uc529 \uc99d\uac00\ud558\uac8c \ub429\ub2c8\ub2e4. Ethereum \ube14\ub85d\uccb4\uc778\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Nonce")," \uac1c\ub150\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/send-query"},"\ucf54\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \ub2e8\uacc4"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," \uc8fc\uc18c\uac00 \ub9cc\ub4e0 \ud574\uc2dc\uac12\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"),"\uc778 \ud2b8\ub79c\uc7ad\uc158\uc740 sequence \uac12\uc774 ",(0,r.kt)("a",{parentName:"p",href:"https://cube-lcd.xpla.dev/cosmos/tx/v1beta1/txs/ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"},"0"),"\uc785\ub2c8\ub2e4. \uc989, \ud574\ub2f9 \uc8fc\uc18c\uac00 \ucc98\uc74c \ub9cc\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc774\ub77c\ub294 \ub73b\uc774\uc8e0."),(0,r.kt)("p",null,"\ud55c\ubc88\ub9cc \ub354 \uc0b4\ud3b4\ubd05\uc2dc\ub2e4. \ud574\uc2dc\uac12\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"FBD6E043781992215A53B285403628D3D4734AF4FC0003875775AB673F2D2737"),"\uc778 \ud2b8\ub79c\uc7ad\uc158\uc740 sequence \uac12\uc774 ",(0,r.kt)("a",{parentName:"p",href:"https://cube-lcd.xpla.dev/cosmos/tx/v1beta1/txs/FBD6E043781992215A53B285403628D3D4734AF4FC0003875775AB673F2D2737"},"466"),"\uc774\ubbc0\ub85c, ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," \uc8fc\uc18c\uac00 467\ubc88\uc9f8\ub85c \ub9cc\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc784\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Sequence \ud56d\ubaa9\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \uac01 \ud2b8\ub79c\uc7ad\uc158\uc740 \uace0\uc720\uc131\uc744 \uc9c0\ub2d9\ub2c8\ub2e4. \uc989, \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf5\uc81c\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b9\uc815 \uc9c0\uac11\uc774 \uc0dd\uc131\ud55c \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc740 \uac01\uac01 \ub2e4\ub978 sequence\ub97c \uac00\uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"Alice\uac00 Bob\uc5d0\uac8c 1 XPLA\ub97c \uc804\uc1a1\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4. Sequence \ud56d\ubaa9\uc774 \uc5c6\ub2e4\uba74, Alice\uac00 \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc744 Bob\uc774 \ubcf5\uc81c\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc804\ud30c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. Bob\uc740 Alice \uc9c0\uac11 \uc794\uc561\uc774 \uc5c6\uc5b4\uc9c8 \ub54c\uae4c\uc9c0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uacc4\uc18d \ub9cc\ub4e4 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub7ec\ud55c \ud589\uc704\ub294 Sequence \ud56d\ubaa9 \ub54c\ubb38\uc5d0 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. \uac19\uc740 \uac12\uc758 Sequence\ub97c \uac00\uc9c4 \ub450 \ud2b8\ub79c\uc7ad\uc158\uc740 \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub420 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc774\uc8e0. \uc774\ubbf8 \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub41c \ud2b8\ub79c\uc7ad\uc158\uacfc \ub611\uac19\uc740 Sequence\ub85c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\ub824\uace0 \ud55c\ub2e4\uba74, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/32ef6361db3b4ed6f10cc4421341eeb37e18d4f4/x/auth/ante/sigverify.go#L292"},(0,r.kt)("inlineCode",{parentName:"a"},"Account Sequence Mismatch")," Error"),"\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc0c8 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\ub824\uba74 sequence \uac12\uc744 \ubcc0\uacbd\ud574\uc8fc\uc5b4\uc57c \ud558\uace0, \uc11c\uba85\ub3c4 \ub2e4\uc2dc \uc9c4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \ub204\uad6c\ub098 \uc0dd\uc131\ub41c \ud2b8\ub79c\uc7ad\uc158 \ub0b4\uc6a9\uc740 \ubcfc \uc218 \uc788\uc9c0\ub9cc, \uc11c\uba85\uc740 \uc624\uc9c1 \uc9c0\uac11 private key\ub97c \uc54c\uc544\uc57c \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \uacc4\uc18d \uc7ac\uc2e4\ud589\ud558\ub294 \uacf5\uaca9\uc744 \ub9c9\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"understandwithcode"},"\ucf54\ub4dc\ub85c \uc774\ud574\ud558\uae30"),(0,r.kt)("p",null,"\uc608\uc81c \ucf54\ub4dc\ub97c \ud1b5\ud574 Sequence\uac00 \uc5b4\ub5a4 \uc5ed\ud560\uc744 \ud558\ub294\uc9c0 \uc774\ud574\ud574\ubd05\uc2dc\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 \uc5ec\ub7ec \uc9c0\uac11\ub4e4\uc5d0\uac8c 1 axpla\ub97c \ud55c \ubc88\uc5d0 \uc804\uc1a1\ud558\ub294 \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"preview"},"Preview"),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \ub123\uc5b4 \ucf54\ub4dc\ub97c \uc218\uc815\ud574\uc8fc\uc138\uc694. \uc6d0\ud558\uc2e0\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"receivers")," \ubcc0\uc218\uc5d0 \ub2e4\ub978 \uc9c0\uac11 \uc8fc\uc18c\ub4e4\uc744 \ub300\uc785\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4. \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c,{mdxType:"Ex08"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uacb0\uacfc\ub97c \ubcf4\uc2dc\uba74 \uccab \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158\ub9cc \ud574\uc2dc\uac12\uc774 \uc798 \ucd9c\ub825\ub418\uace0, \ub098\uba38\uc9c0\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud604\uc7ac \uc608\uc81c \ucf54\ub4dc\uc5d0\ub294 \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc758 sequence \uac12\uc774 \ub3d9\uc77c\ud558\uac8c \uc785\ub825\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uac83\uc785\ub2c8\ub2e4. 39\ubc88\uc9f8 \uc904\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," \ub300\uc2e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence : sequence + i"),"\ub85c \uc218\uc815\ud558\uace0 \ub2e4\uc2dc \uc2e4\ud589\ud574\ubcf4\uc138\uc694. \uc5d0\ub7ec \uc5c6\uc774 5\uac1c\uc758 \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc798 \uc0dd\uc131\ub420 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/account-sequence#runcode"},"\uc544\ub798 \ub0b4\uc6a9"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/walletprovider"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"example-8.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-8.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient, MnemonicKey, MsgSend } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n    });\n\n    const distributor = lcd.wallet(mk);\n\n    const distributorInfo = await lcd.auth.accountInfo(distributor.key.accAddress);\n    const accountNumber = distributorInfo.account_number;\n    const sequence = distributorInfo.sequence;\n\n    const receivers = [\n        "xpla13hpy8pq6799d66qlnfql6jr7vfudq8rhqt66ma",\n        "xpla15msreuqde07m5070qsxvflqq3xy5tx2p4anhqu",\n        "xpla1lgx8hzlpytrvz0g9s24gspzfl6zh68srj7gwu8",\n        "xpla1uh30ekv9ll3e05nzl75euuy7qkjrlcreh5zmju",\n        "xpla1znpv2y0mm2wce79wvpces0yakmep42nj4xhpky",\n    ]\n\n    for (let i = 0; i < receivers.length; i++) {\n        try {\n            const send = new MsgSend(\n                distributor.key.accAddress,\n                receivers[i],\n                { axpla: 1 }\n            );\n        \n            const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd\n                msgs: [send],\n                memo: \'Air Drop Test\',\n                accountNumber,\n                sequence\n                // sequence : sequence + i\n            });\n        \n            const result = await lcd.tx.broadcastSync(signedTx);\n            console.log(result);\n\n        } catch (error) {\n            console.log(error.response.data.message);\n        }\n    }\n}\n\nmain();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"10\ubc88\uc9f8 \uc904\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc218\uc815\ud574\uc8fc\uc138\uc694. \ub610, \uc6d0\ud558\uc2e0\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"receivers")," \ubcc0\uc218\uc5d0 \ub2e4\ub978 \uc9c0\uac11 \uc8fc\uc18c\ub4e4\uc744 \ub300\uc785\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node example-8.js\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \uccab\ubc88\uc9f8 \ud2b8\ub79c\uc7ad\uc158\ub9cc \ud574\uc2dc\uac12\uc774 \ucd9c\ub825\ub418\uace0, \ub098\uba38\uc9c0\ub294 \uc5d0\ub7ec\uac00 \ucd9c\ub825\ub420 \uac83\uc785\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"explaination"},"\uc124\uba85"),(0,r.kt)("p",null,"\uba3c\uc800 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc9c0\uac11\uc744 \ubd88\ub7ec\uc654\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 \ub2e4\ub978 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uc9c0\uac11\uc744 \ubd88\ub7ec\uc624\uc168\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle'\n});\n\nconst distributor = lcd.wallet(mk);\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\ud604\uc7ac XPLA\ub97c \uc804\uc1a1\ud560 \uc9c0\uac11\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"accountNumber")," \uac12\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," \uac12\uc744 LCD api\ub97c \ud1b5\ud574 \ubc1b\uc544\uc635\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const distributorInfo = await lcd.auth.accountInfo(distributor.key.accAddress);\nconst accountNumber = distributorInfo.account_number;\nconst sequence = distributorInfo.sequence;\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"XPLA\ub97c \ubc1b\uc744 \uc9c0\uac11\ub4e4\uc758 \uc8fc\uc18c\ub97c \uae30\uc785\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const receivers = [\n    "xpla13hpy8pq6799d66qlnfql6jr7vfudq8rhqt66ma",\n    "xpla15msreuqde07m5070qsxvflqq3xy5tx2p4anhqu",\n    "xpla1lgx8hzlpytrvz0g9s24gspzfl6zh68srj7gwu8",\n    "xpla1uh30ekv9ll3e05nzl75euuy7qkjrlcreh5zmju",\n    "xpla1znpv2y0mm2wce79wvpces0yakmep42nj4xhpky",\n]\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uac01 \uc9c0\uac11\uc5d0\uac8c 1 axpla\uc529 \uc804\uc1a1\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub9cc\ub4e4\uc5b4 \uc804\ud30c\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < receivers.length; i++) {\n    try {\n        const send = new MsgSend(\n            distributor.key.accAddress,\n            receivers[i],\n            { axpla: 1 }\n        );\n    \n        const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd\n            msgs: [send],\n            memo: 'Air Drop Test',\n            accountNumber,\n            sequence\n            // sequence : sequence + i\n        });\n    \n        const result = await lcd.tx.broadcastSync(signedTx);\n        console.log(result);\n\n    } catch (error) {\n        console.log(error.response.data.message);\n    }\n}\n")),(0,r.kt)("p",null,"\uc774\ub54c \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\ub294 \ubd80\ubd84\uc740 39\ubc88\uc9f8 \uc904\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," \ubd80\ubd84\uc785\ub2c8\ub2e4. \uc704 \ucf54\ub4dc\ub300\ub85c\ub77c\uba74, \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uc131\ub420 \ub54c \ub611\uac19\uc740 sequence \uac12\uc744 \uc785\ub825\ud558\uac8c \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uccab\ubc88\uc9f8 \ud2b8\ub79c\uc7ad\uc158\ub9cc \uc798 \uc0dd\uc131\ub418\ub294 \uac83\uc774\uace0, \uc774\ud6c4 \ud2b8\ub79c\uc7ad\uc158\uc740 \uccab\ubc88\uc9f8 \ud2b8\ub79c\uc7ad\uc158\uacfc sequence\uac12\uc774 \ub3d9\uc77c\ud558\ubbc0\ub85c \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub418\uc9c0 \uc54a\ub294 \uac83\uc785\ub2c8\ub2e4. "),(0,r.kt)("p",null,"\ub9cc\uc57d \uc5d0\ub7ec \uc5c6\uc774 \ud2b8\ub79c\uc7ad\uc158 \ubaa8\ub450 \uc798 \uc0dd\uc131\ud558\uace0 \uc2f6\ub2e4\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," \ucf54\ub4dc \ub300\uc2e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence : sequence + i")," \ucf54\ub4dc\ub97c \uc785\ub825\ud558\uace0 \uc2e4\ud589\ud574\ubcf4\uc138\uc694. \uc774\ub807\uac8c \uac01 \ud2b8\ub79c\uc7ad\uc158\ub9c8\ub2e4 sequence \uac12\uc744 \ub2e4\ub974\uac8c \ud55c\ub2e4\uba74, \ud2b8\ub79c\uc7ad\uc158\uc774 \uc798 \uc0dd\uc131\ub420 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc774 \ubaa8\ub450 \uc798 \ub098\uc654\ub098\uc694? ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694."),(0,r.kt)("h2",{id:"conclusion"},"\ub9c8\ubb34\ub9ac"),(0,r.kt)("p",null,"\uc774\ub807\uac8c Account Number\uc640 Sequence \uac1c\ub150\uc744 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc774\uc81c ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/walletprovider"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00 Web3 \uae30\ub2a5\uc744 \ub354 \uc790\uc138\ud558\uac8c \uc54c\uc544\ubd05\uc2dc\ub2e4."))}q.isMDXComponent=!0}}]);