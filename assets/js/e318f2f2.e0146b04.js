(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9254],{30876:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return c}});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),k=m(a),c=n,u=k["".concat(l,".").concat(c)]||k[c]||s[c]||i;return a?r.createElement(u,p(p({ref:t},o),{},{components:a})):r.createElement(u,p({ref:t},o))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=k;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,p[1]=d;for(var m=2;m<i;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88634:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return o},default:function(){return k}});var r=a(7560),n=a(98283),i=(a(2784),a(30876)),p=["components"],d={id:"treedataprovider",title:"Interface: TreeDataProvider<T>",sidebar_label:"TreeDataProvider",sidebar_position:0,custom_edit_url:null},l=void 0,m={unversionedId:"api/interfaces/treedataprovider",id:"api/interfaces/treedataprovider",isDocsHomePage:!1,title:"Interface: TreeDataProvider<T>",description:"Type parameters",source:"@site/docs/api/interfaces/treedataprovider.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/treedataprovider",permalink:"/docs/api/interfaces/treedataprovider",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"treedataprovider",title:"Interface: TreeDataProvider<T>",sidebar_label:"TreeDataProvider",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TreeContextProps",permalink:"/docs/api/interfaces/treecontextprops"},next:{title:"TreeEnvironmentChangeActions",permalink:"/docs/api/interfaces/treeenvironmentchangeactions"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Properties",id:"properties",children:[{value:"getTreeItem",id:"gettreeitem",children:[]},{value:"getTreeItems",id:"gettreeitems",children:[]},{value:"onChangeItemChildren",id:"onchangeitemchildren",children:[]},{value:"onDidChangeTreeData",id:"ondidchangetreedata",children:[]},{value:"onRenameItem",id:"onrenameitem",children:[]}]}],s={toc:o};function k(e){var t=e.components,a=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")," = ",(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/classes/statictreedataprovider"},"StaticTreeDataProvider"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"gettreeitem"},"getTreeItem"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getTreeItem"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"itemId"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeitem"},"TreeItem"),"<T",">",">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"itemId"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeitem"},"TreeItem"),"<T",">",">"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"itemId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeitem"},"TreeItem"),"<T",">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L363"},"types.ts:363")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettreeitems"},"getTreeItems"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"getTreeItems"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"itemIds"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeitem"},"TreeItem"),"<any",">","[]",">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"itemIds"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeitem"},"TreeItem"),"<any",">","[]",">"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"itemIds")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"),"[]")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeitem"},"TreeItem"),"<any",">","[]",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L364"},"types.ts:364")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onchangeitemchildren"},"onChangeItemChildren"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onChangeItemChildren"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"itemId"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"newChildren"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"itemId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"newChildren"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"itemId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newChildren")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"),"[]")))),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L366"},"types.ts:366")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ondidchangetreedata"},"onDidChangeTreeData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onDidChangeTreeData"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"listener"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"changedItemIds"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),") => ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#disposable"},"Disposable")),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#disposable"},"Disposable")),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"listener")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"changedItemIds"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules#treeitemindex"},"TreeItemIndex"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#disposable"},"Disposable")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L362"},"types.ts:362")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onrenameitem"},"onRenameItem"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onRenameItem"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"item"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treeitem"},"TreeItem"),"<T",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"item"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h5",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"item")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/treeitem"},"TreeItem"),"<T",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h5",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/c0abd65/packages/core/src/types.ts#L365"},"types.ts:365")))}k.isMDXComponent=!0}}]);