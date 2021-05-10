(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var r=o(3),a=o(7),n=(o(0),o(126)),s={sidebar_position:4},i={unversionedId:"tutorial-basics/faqs",id:"tutorial-basics/faqs",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"(page under construction)",source:"@site/docs/tutorial-basics/faqs.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/faqs",permalink:"/dash_doodler/docs/tutorial-basics/faqs",editUrl:"https://github.com/dbuscombe-usgs/dash_doodler/edit/master/website/docs/tutorial-basics/faqs.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Doodle well",permalink:"/dash_doodler/docs/tutorial-basics/how-to-doodle"},next:{title:"Getting help",permalink:"/dash_doodler/docs/tutorial-basics/getting-help"}},l=[{value:"Why is it taking so long?",id:"why-is-it-taking-so-long",children:[]},{value:"Why are my results poor?",id:"why-are-my-results-poor",children:[]},{value:"What is the maximum number of classes?",id:"what-is-the-maximum-number-of-classes",children:[]},{value:"How should I choose classes?",id:"how-should-i-choose-classes",children:[]},{value:"Okay, I can use Doodler to make label images. Now what?",id:"okay-i-can-use-doodler-to-make-label-images-now-what",children:[]}],c={toc:l};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"(page under construction)"),Object(n.b)("p",null,"Please read this page before submitting your Issue on Github"),Object(n.b)("h3",{id:"why-is-it-taking-so-long"},"Why is it taking so long?"),Object(n.b)("p",null,"In typical order of importance:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Use smaller images"),Object(n.b)("li",{parentName:"ol"},"Make fewer doodles"),Object(n.b)("li",{parentName:"ol"},"Use a larger RF downsample factor"),Object(n.b)("li",{parentName:"ol"},"Use a larger CRF downsample factor"),Object(n.b)("li",{parentName:"ol"},"If possible, use fewer classes"),Object(n.b)("li",{parentName:"ol"},"If possible, use more and faster CPU cores")),Object(n.b)("h3",{id:"why-are-my-results-poor"},"Why are my results poor?"),Object(n.b)("h3",{id:"what-is-the-maximum-number-of-classes"},"What is the maximum number of classes?"),Object(n.b)("h3",{id:"how-should-i-choose-classes"},"How should I choose classes?"),Object(n.b)("p",null,"See ",Object(n.b)("a",{parentName:"p",href:"how-to-doodle#how-to-decide-on-classes"},"this")),Object(n.b)("h3",{id:"okay-i-can-use-doodler-to-make-label-images-now-what"},"Okay, I can use Doodler to make label images. Now what?"),Object(n.b)("p",null,"The primary purpose of Doodler is to create enough label images that Deep Learning image segmentation workflows become viable. To get started, you may follow this self-guided course made by Dr Daniel Buscombe, called ",Object(n.b)("a",{parentName:"p",href:"https://dbuscombe-usgs.github.io/MLMONDAYS/docs/doc1#week-3-supervised-image-segmentation"},'"ML Mondays"'),"."))}u.isMDXComponent=!0},126:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),p=r,m=d["".concat(s,".").concat(p)]||d[p]||b[p]||n;return o?a.a.createElement(m,i(i({ref:t},c),{},{components:o})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);