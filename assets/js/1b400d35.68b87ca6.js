(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7616],{30876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),g=i,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2801:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(7560),i=r(98283),a=(r(2784),r(30876)),o=["components"],p={id:"abstractdraggingposition",title:"Interface: AbstractDraggingPosition",sidebar_label:"AbstractDraggingPosition",sidebar_position:0,custom_edit_url:null},c=void 0,s={unversionedId:"api/interfaces/abstractdraggingposition",id:"api/interfaces/abstractdraggingposition",isDocsHomePage:!1,title:"Interface: AbstractDraggingPosition",description:"Hierarchy",source:"@site/docs/api/interfaces/abstractdraggingposition.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/abstractdraggingposition",permalink:"/docs/api/interfaces/abstractdraggingposition",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"abstractdraggingposition",title:"Interface: AbstractDraggingPosition",sidebar_label:"AbstractDraggingPosition",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"StaticTreeDataProvider",permalink:"/docs/api/classes/statictreedataprovider"},next:{title:"ControlledTreeEnvironmentProps",permalink:"/docs/api/interfaces/controlledtreeenvironmentprops"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"depth",id:"depth",children:[]},{value:"linearIndex",id:"linearindex",children:[]},{value:"parentItem",id:"parentitem",children:[]},{value:"targetType",id:"targettype",children:[]},{value:"treeId",id:"treeid",children:[]}]}],d={toc:l};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AbstractDraggingPosition")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/draggingpositionitem"},"DraggingPositionItem")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/draggingpositionbetweenitems"},"DraggingPositionBetweenItems")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"depth"},"depth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"depth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L283"},"types.ts:283")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"linearindex"},"linearIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"linearIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L282"},"types.ts:282")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"parentitem"},"parentItem"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"parentItem"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L281"},"types.ts:281")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"targettype"},"targetType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"targetType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"item"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"between-items"')),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L279"},"types.ts:279")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"treeid"},"treeId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"treeId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L280"},"types.ts:280")))}u.isMDXComponent=!0}}]);