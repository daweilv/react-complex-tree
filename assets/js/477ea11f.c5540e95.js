(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3028],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12285:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(7560),a=n(2784),i=n(18873),o=function(e){var t=e.storyName,n=e.iframeProps;return a.createElement(i.Z,(0,r.Z)({src:"/storybook/iframe.html?id="+t+"&args=&viewMode=story",frameBorder:0,allowtransparency:"true",style:n.width||n.minWidth||n.maxWidth?{}:{width:"1px",minWidth:"100%"}},null!=n?n:{}))}},67171:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var r=n(7560),a=n(98283),i=(n(2784),n(30876)),o=n(12285),l=["components"],s={sidebar_position:6},c="Search Functionality",d={unversionedId:"guides/search",id:"guides/search",isDocsHomePage:!1,title:"Search Functionality",description:"Searching for items is natively supported. It looks through all items that are curretly visible in the",source:"@site/docs/guides/search.mdx",sourceDirName:"guides",slug:"/guides/search",permalink:"/docs/guides/search",editUrl:"https://github.com/lukasbach/react-complex-tree/edit/main/packages/docs/docs/guides/search.mdx",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Drag and Drop Customizability",permalink:"/docs/guides/drag-and-drop"},next:{title:"Renaming Functionality",permalink:"/docs/guides/renaming"}},m=[{value:"Example",id:"example",children:[]},{value:"Configurability",id:"configurability",children:[]},{value:"Programmatic interaction",id:"programmatic-interaction",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"search-functionality"},"Search Functionality"),(0,i.kt)("p",null,"Searching for items is natively supported. It looks through all items that are curretly visible in the\ntree, similar to how other tree implementations do it such as the tree view in IntelliJ or VsCode. Search\nis automatically started if the tree is focused and the user starts typing."),(0,i.kt)("p",null,"This also implements the accessibility feature where entering a single character while focusing the tree\nshould move the focus to the first item that matches the character. See the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/treeview/treeview-2/treeview-2a.html#kbd_label"},"W3C spec for keyboard bindings"),"\nfor more details."),(0,i.kt)(o.i,{storyName:"auto-demo-autodemo-component--search-demo",iframeProps:{width:600},mdxType:"StoryEmbed"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All props that can be provided to the tree environment to control search capabilities are documented\nin the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/treecapabilities"},"TreeCapabilities interface"),"."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"(TODO) Apparently the search currently does not work properly in the docs pages, where the search input\nis not properly shown. This is an issue with our documentation tooling, not the framework.\nWorking examples are available in the storybook."))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Try focusing the tree (i.e. by clicking on it) and start typing to search."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-1': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n    >\n      <Tree treeId=\"tree-1\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,i.kt)("h2",{id:"configurability"},"Configurability"),(0,i.kt)("p",null,"The prop ",(0,i.kt)("inlineCode",{parentName:"p"},"canSearchByStartingTyping")," manages whether the search can be initiated by just starting to type\nwhile focusing the tree. In the following example, the hotkey ",(0,i.kt)("inlineCode",{parentName:"p"},"F1")," needs to be pressed to start search."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-2': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n      canSearchByStartingTyping={false}\n      keyboardBindings={{\n        startSearch: ['f1'],\n      }}\n    >\n      <Tree treeId=\"tree-2\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,i.kt)("p",null,"Search can also be disabled completely by setting the prop ",(0,i.kt)("inlineCode",{parentName:"p"},"canSearch")," to false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-3': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n      canSearch={false}\n    >\n      <Tree treeId=\"tree-3\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,i.kt)("h2",{id:"programmatic-interaction"},"Programmatic interaction"),(0,i.kt)("p",null,"This feature can programmatically be controlled by pulling a React Ref either from the tree environment\nor the tree itself, and acting on the Ref object. ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/refs"},"Read the documentation on externally interacting\nwith the tree via Refs")," to find out more."))}u.isMDXComponent=!0}}]);