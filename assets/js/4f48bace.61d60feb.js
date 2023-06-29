"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,h=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,title:"\ud83c\udfc3 Run",description:"Learn how to run a Flutter app with code push integrated."},i="Run a Shorebird App",p={unversionedId:"code_push/run",id:"code_push/run",title:"\ud83c\udfc3 Run",description:"Learn how to run a Flutter app with code push integrated.",source:"@site/docs/code_push/run.md",sourceDirName:"code_push",slug:"/code_push/run",permalink:"/code_push/run",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/code_push/run.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83c\udfc3 Run",description:"Learn how to run a Flutter app with code push integrated."},sidebar:"tutorialSidebar",previous:{title:"\u2728 Initialize",permalink:"/code_push/initialize"},next:{title:"\ud83d\udce6 Release",permalink:"/code_push/release"}},u={},c=[],l={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-a-shorebird-app"},"Run a Shorebird App"),(0,o.kt)("p",null,"Once you have ",(0,o.kt)("a",{parentName:"p",href:"/code_push/initialize"},"initialized Shorebird"),", you can run your\napp on an Android device or emulator using the ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird run")," command at the\nroot of a Flutter project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird run\n")),(0,o.kt)("p",null,"This is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter run --release"),", but uses with ",(0,o.kt)("a",{parentName:"p",href:"/faq#how-does-shorebird-relate-to-flutter"},"Shorebird's fork of\nthe Flutter engine")," that includes the\nShorebird updater."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"shorebird run")," wraps ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter run")," and can take any argument ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter run")," can.\nTo pass arguments to the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter run"),", use a ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," separator. For\nexample, ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird run -- -d my_device")," will run on a specific device.")))}d.isMDXComponent=!0}}]);