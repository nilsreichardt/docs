"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=i,m=s["".concat(p,".").concat(b)]||s[b]||c[b]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5,title:"\ud83d\udd28 Build",description:"Learn how to generate release builds of your Flutter app."},a="Build your Shorebird App",l={unversionedId:"code_push/build",id:"code_push/build",title:"\ud83d\udd28 Build",description:"Learn how to generate release builds of your Flutter app.",source:"@site/docs/code_push/build.md",sourceDirName:"code_push",slug:"/code_push/build",permalink:"/code_push/build",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/code_push/build.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\ud83d\udd28 Build",description:"Learn how to generate release builds of your Flutter app."},sidebar:"tutorialSidebar",previous:{title:"\u2601\ufe0f Patch",permalink:"/code_push/patch"}},p={},d=[],u={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-your-shorebird-app"},"Build your Shorebird App"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is most common to use ",(0,i.kt)("inlineCode",{parentName:"p"},"shorebird release")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"shorebird patch")," to release\nyour app. ",(0,i.kt)("inlineCode",{parentName:"p"},"shorebird build")," is a lower level command.")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"shorebird build")," to build a release version of your app including\ncode push:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Build an AppBundle\nshorebird build appbundle\n\n# Build an APK\nshorebird build apk\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"shorebird build")," wraps ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter build")," and can take any argument\n",(0,i.kt)("inlineCode",{parentName:"p"},"flutter build")," can. To pass arguments to the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter build")," you\nneed to put ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter build")," arguments after a ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," separator. For example:\n",(0,i.kt)("inlineCode",{parentName:"p"},'shorebird build -- --dart-define="foo=bar"')," will define the ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo"')," environment\nvariable inside Dart as you might have done with ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter build")," directly.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"While building with ",(0,i.kt)("inlineCode",{parentName:"p"},"shorebird build")," will include Shorebird code push in your\napp, building with ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter build --release")," will not include Shorebird in your\napp. At any time you can simply drop back to ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter build")," and things will\nwork as they did before.")))}c.isMDXComponent=!0}}]);