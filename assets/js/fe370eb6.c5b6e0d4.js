"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[952],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),h=n,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3957:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={title:"\ud83d\udc68\u200d\ud83d\udcbb Frontend",excerpt:"Development Information regarding LibrePhotos Frontend.",last_modified_at:new Date("2021-05-31T00:00:00.000Z"),category:5},i=void 0,l={unversionedId:"development/contribution/frontend/index",id:"development/contribution/frontend/index",title:"\ud83d\udc68\u200d\ud83d\udcbb Frontend",description:"We developed our frontend with the following technologies:",source:"@site/docs/development/contribution/frontend/index.md",sourceDirName:"development/contribution/frontend",slug:"/development/contribution/frontend/",permalink:"/docs/development/contribution/frontend/",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/development/contribution/frontend/index.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udc68\u200d\ud83d\udcbb Frontend",excerpt:"Development Information regarding LibrePhotos Frontend.",last_modified_at:"2021-05-31T00:00:00.000Z",category:5},sidebar:"userguide",previous:{title:"\ud83d\udc0b Docker",permalink:"/docs/development/contribution/docker"},next:{title:" \ud83d\udcc1 Upload",permalink:"/docs/development/contribution/frontend/upload"}},d={},s=[{value:"\u2728 Code Standards",id:"-code-standards",level:2},{value:"\ud83d\udc1b Debugging",id:"-debugging",level:2},{value:"React Debug Tool",id:"react-debug-tool",level:3},{value:"Redux Debug Tool",id:"redux-debug-tool",level:3},{value:"WDYR",id:"wdyr",level:3},{value:"REST API",id:"rest-api",level:3},{value:"\ud83c\udfd9\ufe0f Structure",id:"\ufe0f-structure",level:2},{value:"To-Do",id:"to-do",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We developed our frontend with the following technologies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React"),(0,n.kt)("li",{parentName:"ul"},"Mantine"),(0,n.kt)("li",{parentName:"ul"},"Redux / Redux Toolkit"),(0,n.kt)("li",{parentName:"ul"},"Axios")),(0,n.kt)("h2",{id:"-code-standards"},"\u2728 Code Standards"),(0,n.kt)("p",null,"We also have here some git hooks. Please do a npm prepare and then the formatter and the linter are good to go. We use eslint and prettier to keep our code tidy"),(0,n.kt)("h2",{id:"-debugging"},"\ud83d\udc1b Debugging"),(0,n.kt)("h3",{id:"react-debug-tool"},"React Debug Tool"),(0,n.kt)("p",null,"React provides a debug tool, which you can download ",(0,n.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=de"},"here")),(0,n.kt)("h3",{id:"redux-debug-tool"},"Redux Debug Tool"),(0,n.kt)("p",null,"Redux also provides a debug tool, to debug the actions and states ",(0,n.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=de"},"here")),(0,n.kt)("h3",{id:"wdyr"},"WDYR"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/welldone-software/why-did-you-render"},"WDYR")," explains to you why a component re-rendered. To activate it, add WDYR=True to your development .env. For more detail, look up the docs."),(0,n.kt)("h3",{id:"rest-api"},"REST API"),(0,n.kt)("p",null,"Our Rest API is documented with ",(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," and ",(0,n.kt)("a",{parentName:"p",href:"https://redocly.github.io/redoc/"},"ReDoc"),". After you\nstart up LibrePhotos, you can find them under:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"localhost:3000/api/swagger\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"localhost:3000/api/redoc\n")),(0,n.kt)("p",null,"Some APIs are not yet well documented, as the generation of the swagger API throws error ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LibrePhotos/librephotos/issues/485"},"Link")),(0,n.kt)("h2",{id:"\ufe0f-structure"},"\ud83c\udfd9\ufe0f Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can find all the routes in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos-frontend/blob/dev/src/App.js"},"App.js"),"."),(0,n.kt)("li",{parentName:"ul"},"The pages are in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos-frontend/tree/dev/src/layouts"},"layouts")),(0,n.kt)("li",{parentName:"ul"},"Pages should be split up into React Components, which you can find in\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos-frontend/tree/dev/src/components"},"components")),(0,n.kt)("li",{parentName:"ul"},"The API calls are made into split into actions, which you can find in\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos-frontend/tree/dev/src/actions"},"actions")),(0,n.kt)("li",{parentName:"ul"},"To handle the state for the whole page, we use Redux. You can find the states and reducers in\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos-frontend/tree/dev/src/reducers"},"reducers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos-frontend/tree/dev/src/api_client"},"api_client")," is just a simple Axios\nclient"),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos-frontend/tree/dev/src/util"},"util")," you can find miscellaneous functions.")),(0,n.kt)("h2",{id:"to-do"},"To-Do"),(0,n.kt)("p",null,"You can look into the issues ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LibrePhotos/librephotos/issues?q=is%3Aopen+is%3Aissue+label%3Afrontend"},"here"),",\non what features are missing from the frontend."),(0,n.kt)("p",null,"We currently are working on improving maintainability, by converting our code base to TypeScript."),(0,n.kt)("p",null,"While a lot of classes are already converted to TypeScript, there are still a lot of any's in the codebase. You can help out by replacing them with types!"),(0,n.kt)("p",null,"We are in the process of migrating from Redux to redux-toolkit and redux-query."),(0,n.kt)("p",null,"It would also be great if we could introduce some\n",(0,n.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/running-tests/"},"test coverage and automated testing"),"."))}c.isMDXComponent=!0}}]);