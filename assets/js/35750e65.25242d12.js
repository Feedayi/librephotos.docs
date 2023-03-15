"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,b=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?o.createElement(b,l(l({ref:t},c),{},{components:n})):o.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={title:"\ud83d\udcf1 Mobile",excerpt:"What data does Libre Photos collect.",last_modified_at:new Date("2022-03-09T00:00:00.000Z"),category:5},l=void 0,a={unversionedId:"development/contribution/mobile",id:"development/contribution/mobile",title:"\ud83d\udcf1 Mobile",description:"Open-Source Android and iOS Mobile Application for the LibrePhotos Project",source:"@site/docs/development/contribution/mobile.md",sourceDirName:"development/contribution",slug:"/development/contribution/mobile",permalink:"/docs/development/contribution/mobile",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/development/contribution/mobile.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf1 Mobile",excerpt:"What data does Libre Photos collect.",last_modified_at:"2022-03-09T00:00:00.000Z",category:5},sidebar:"userguide",previous:{title:"\ud83d\udc68\u200d\ud83d\udcbb Frontend",permalink:"/docs/development/contribution/frontend"},next:{title:"\ud83d\udc77\u200d\u2642\ufe0f Installation",permalink:"/docs/development/dev-install"}},p={},d=[{value:"\ud83d\ude80 Get Started",id:"-get-started",level:2},{value:"\ud83d\udcf1 Android",id:"-android",level:3},{value:"\ud83c\udf4e iOS",id:"-ios",level:3},{value:"\ud83d\udd28 Build from Source",id:"-build-from-source",level:3},{value:"\ud83d\udc1b Debugging",id:"-debugging",level:2},{value:"Enable File Logging",id:"enable-file-logging",level:3}],c={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Open-Source Android and iOS Mobile Application for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LibrePhotos/librephotos"},"LibrePhotos")," Project"),(0,r.kt)("h2",{id:"-get-started"},"\ud83d\ude80 Get Started"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compatibility")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android 5.0+"),(0,r.kt)("li",{parentName:"ul"},"iOS 9.0+ (Stability on iOS is not tested yet.)")),(0,r.kt)("h3",{id:"-android"},"\ud83d\udcf1 Android"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the Latest Build from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos-mobile/releases"},"releases"),"."),(0,r.kt)("li",{parentName:"ol"},"Install the APK")),(0,r.kt)("h3",{id:"-ios"},"\ud83c\udf4e iOS"),(0,r.kt)("p",null,"Currently, there are no automated builds for IOS. You will need to build the app from source. Follow the instructions in the next section."),(0,r.kt)("h3",{id:"-build-from-source"},"\ud83d\udd28 Build from Source"),(0,r.kt)("p",null,"You also need to install the dependencies required by React Native: ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"Environment Setup")),(0,r.kt)("p",null,"Once the dependencies are set up, you can run the project as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm install -g yarn")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn install")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn <platform>")," # Replace platform with ",(0,r.kt)("inlineCode",{parentName:"li"},"android")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ios"))),(0,r.kt)("h2",{id:"-debugging"},"\ud83d\udc1b Debugging"),(0,r.kt)("p",null,"For debugging, we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron/"},"reactotron")),(0,r.kt)("h3",{id:"enable-file-logging"},"Enable File Logging"),(0,r.kt)("p",null,"Logging to the phone's local file system can be enabled/disabled from the Settings page.\nLogs are stored in the cache directory of the phone.\nFor Android: ",(0,r.kt)("inlineCode",{parentName:"p"},"/storage/emulated/0/Android/data/com.librephotosmobile/cache/logs/")),(0,r.kt)("p",null,"You can also quickly send a bug report to the developer by shaking your phone."))}u.isMDXComponent=!0}}]);