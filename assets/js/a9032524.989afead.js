(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4347],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,f=m["".concat(c,".").concat(p)]||m[p]||s[p]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89159:function(e,n,t){"use strict";t.d(n,{n:function(){return o}});var r=t(2784),o=function(e){var n=function(e){var n=(0,r.useState)(null),o=n[0],a=n[1];return(0,r.useEffect)((function(){var n=!1;return t(29351)("./"+e+".json").then((function(e){n||(n=!0,a(e.default))})).catch(console.error),function(){n=!0}}),[e]),o}(e.name);return n?r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default Value"),r.createElement("th",null,"Required"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(n).map((function(e){var t;return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,r.createElement("code",null,null==(t=n[e].type)?void 0:t.name)),r.createElement("td",null,n[e].defaultValue&&r.createElement("code",null,n[e].defaultValue.value)),r.createElement("td",null,n[e].required?"Yes":"No"),r.createElement("td",null,n[e].description))})))):null}},49793:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=t(7560),o=t(98283),a=(t(2784),t(30876)),i=t(89159),l=["components"],c={sidebar_position:1},u="Uncontrolled Environment",d={unversionedId:"guides/uncontrolled-environment",id:"guides/uncontrolled-environment",isDocsHomePage:!1,title:"Uncontrolled Environment",description:"Using an uncontrolled environment to declare the state of your tree is mostly documented in",source:"@site/docs/guides/uncontrolled-environment.mdx",sourceDirName:"guides",slug:"/guides/uncontrolled-environment",permalink:"/docs/guides/uncontrolled-environment",editUrl:"https://github.com/lukasbach/react-complex-tree/edit/main/packages/docs/docs/guides/uncontrolled-environment.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/docs/getstarted"},next:{title:"Custom Data Provider",permalink:"/docs/guides/custom-data-provider"}},s=[{value:"Component Props",id:"component-props",children:[]}],m={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uncontrolled-environment"},"Uncontrolled Environment"),(0,a.kt)("p",null,"Using an uncontrolled environment to declare the state of your tree is mostly documented in\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/getstarted"},"Get Started")," document. You need to declare your data by implementing\na ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TreeDataProvider"},"TreeDataProvider")," that declares how tree items\ncan be loaded by React Complex Tree. Alternatively, you can just provide a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/StaticTreeDataProvider"},"StaticTreeDataProvider")," that contains a static\nreference to all available data."),(0,a.kt)("p",null,"You can read more about implementing a custom TreeDataProvider\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/custom-data-provider"},"implementing a custom TreeDataProvider here"),"."),(0,a.kt)("p",null,"An example using a StaticTreeDataProvider looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const items = {\n    root: {\n      index: 'root',\n      hasChildren: true,\n      children: ['child1', 'child2'],\n      data: 'Root item',\n    },\n    child1: {\n      index: 'child1',\n      children: [],\n      data: 'Child item 1',\n    },\n    child2: {\n      index: 'child2',\n      hasChildren: true,\n      children: ['child3'],\n      data: 'Child item 2',\n    },\n    child3: {\n      index: 'child3',\n      children: [],\n      data: 'Child item 3',\n    },\n  };\n\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{}}\n    >\n      <Tree treeId=\"tree-1\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,a.kt)("h2",{id:"component-props"},"Component Props"),(0,a.kt)("p",null,"The props for the ",(0,a.kt)("inlineCode",{parentName:"p"},"UncontrolledTreeEnvironment")," are as follows:"),(0,a.kt)(i.n,{name:"UncontrolledTreeEnvironment",mdxType:"PropTable"}))}p.isMDXComponent=!0},29351:function(e,n,t){var r={"./ControlledTreeEnvironment.json":[96435,6435],"./DragAndDropProvider.json":[49919,9919],"./DragBetweenLine.json":[82614,2614],"./EnvironmentActionsProvider.json":[69304,9304],"./InteractionManagerProvider.json":[6155,6155],"./LiveDescription.json":[26020,6020],"./SearchInput.json":[86393,6393],"./Tree.json":[7398,7398],"./TreeActionsProvider.json":[37093,7093],"./TreeItem.json":[9565,9565],"./TreeItemChildren.json":[22050,2050],"./TreeItemRenamingInput.json":[55861,5861],"./UncontrolledTreeEnvironment.json":[73159,3159],"./createDefaultRenderers.json":[45466,5466]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=29351,e.exports=o}}]);