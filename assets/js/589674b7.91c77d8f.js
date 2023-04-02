"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[6377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(b,a(a({ref:t},p),{},{components:n})):o.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={title:"\ud83d\uddb1\ufe0f To-Do",excerpt:"On going migrations regarding the mobile app.",last_modified_at:new Date("2021-05-31T00:00:00.000Z"),category:5},a=void 0,l={unversionedId:"development/contribution/mobile/to-do",id:"development/contribution/mobile/to-do",title:"\ud83d\uddb1\ufe0f To-Do",description:"You can look into the issues here,",source:"@site/docs/development/contribution/mobile/to-do.md",sourceDirName:"development/contribution/mobile",slug:"/development/contribution/mobile/to-do",permalink:"/docs/development/contribution/mobile/to-do",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/development/contribution/mobile/to-do.md",tags:[],version:"current",frontMatter:{title:"\ud83d\uddb1\ufe0f To-Do",excerpt:"On going migrations regarding the mobile app.",last_modified_at:"2021-05-31T00:00:00.000Z",category:5},sidebar:"userguide",previous:{title:" \ud83d\udcc1 Upload",permalink:"/docs/development/contribution/mobile/upload"},next:{title:"\ud83d\udc77\u200d\u2642\ufe0f Installation",permalink:"/docs/development/dev-install"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can look into the issues ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LibrePhotos/librephotos/issues?q=is%3Aopen+is%3Aissue+label%3Amobile"},"here"),",\non what features are missing from the frontend."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Show local images everywhere")),(0,r.kt)("p",null,"The local images to not yet show up in all views. You can help out by adding them to the views by implementing new selectors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maintainability")),(0,r.kt)("p",null,"We currently are working on improving maintainability, by converting our code base to TypeScript. There are still alot of classes, which are written in plain JavaScript. You can help out by converting them to TypeScript!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Viewing images offline")),(0,r.kt)("p",null,"There are a couple of things to migrate first until we can try to view images offline."),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Migrate from Redux-Wrapper to redux-toolkit and redux-query in the mobile code base"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Migrate from Redux to redux-toolkit and redux-query in the frontend code base"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a new package for the state management and nd API calls for the frontend and the mobile app (Single Sourcing)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement step by step Asyc Storage for the stores (initial load, invalidating, partial fetching)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Documentation")),(0,r.kt)("p",null,"Write docs for classes and functions and explain what they do, why it's there."))}m.isMDXComponent=!0}}]);