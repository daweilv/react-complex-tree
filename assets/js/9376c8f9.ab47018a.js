(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8879],{30876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16905:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(7560),a=r(98283),i=(r(2784),r(30876)),o=["components"],l={id:"treeinformation",title:"Interface: TreeInformation",sidebar_label:"TreeInformation",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/treeinformation",id:"api/interfaces/treeinformation",isDocsHomePage:!1,title:"Interface: TreeInformation",description:"Hierarchy",source:"@site/docs/api/interfaces/treeinformation.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/treeinformation",permalink:"/docs/api/interfaces/treeinformation",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"treeinformation",title:"Interface: TreeInformation",sidebar_label:"TreeInformation",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TreeEnvironmentRef",permalink:"/docs/api/interfaces/treeenvironmentref"},next:{title:"TreeItem",permalink:"/docs/api/interfaces/treeitem"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"areItemsSelected",id:"areitemsselected",children:[]},{value:"isFocused",id:"isfocused",children:[]},{value:"isProgrammaticallyDragging",id:"isprogrammaticallydragging",children:[]},{value:"isRenaming",id:"isrenaming",children:[]},{value:"isSearching",id:"issearching",children:[]},{value:"rootItem",id:"rootitem",children:[]},{value:"search",id:"search",children:[]},{value:"treeId",id:"treeid",children:[]},{value:"treeLabel",id:"treelabel",children:[]},{value:"treeLabelledBy",id:"treelabelledby",children:[]}]}],d={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration"},"TreeConfiguration")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"TreeInformation")),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeref"},"TreeRef")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"areitemsselected"},"areItemsSelected"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"areItemsSelected"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L59"},"types.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isfocused"},"isFocused"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isFocused"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L61"},"types.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isprogrammaticallydragging"},"isProgrammaticallyDragging"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isProgrammaticallyDragging"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L64"},"types.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isrenaming"},"isRenaming"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isRenaming"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L60"},"types.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"issearching"},"isSearching"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isSearching"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L62"},"types.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rootitem"},"rootItem"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rootItem"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration"},"TreeConfiguration"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration#rootitem"},"rootItem")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L315"},"types.ts:315")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"search"},"search"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"search"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L63"},"types.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"treeid"},"treeId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"treeId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration"},"TreeConfiguration"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration#treeid"},"treeId")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L314"},"types.ts:314")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"treelabel"},"treeLabel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"treeLabel"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration"},"TreeConfiguration"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration#treelabel"},"treeLabel")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L316"},"types.ts:316")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"treelabelledby"},"treeLabelledBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"treeLabelledBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration"},"TreeConfiguration"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeconfiguration#treelabelledby"},"treeLabelledBy")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L317"},"types.ts:317")))}u.isMDXComponent=!0}}]);