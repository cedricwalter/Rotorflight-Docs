"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[649],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(o),u=i,g=p["".concat(s,".").concat(u)]||p[u]||h[u]||n;return o?r.createElement(g,l(l({ref:t},c),{},{components:o})):r.createElement(g,l({ref:t},c))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,l=new Array(n);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var d=2;d<n;d++)l[d]=o[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},84251:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var r=o(87462),i=(o(67294),o(3905));const n={sidebar_position:60},l="Modeling Cross Coupling",a={unversionedId:"Developers/Modeling-Cross-Coupling",id:"Developers/Modeling-Cross-Coupling",title:"Modeling Cross Coupling",description:"By Etocii",source:"@site/docs/Developers/Modeling-Cross-Coupling.md",sourceDirName:"Developers",slug:"/Developers/Modeling-Cross-Coupling",permalink:"/docs/Developers/Modeling-Cross-Coupling",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Developers/Modeling-Cross-Coupling.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"developSidebar",previous:{title:"What is Rotorflight?",permalink:"/docs/Developers/Developers-Information"},next:{title:"Editing the Website",permalink:"/docs/Developers/Editing-the-Website"}},s={},d=[{value:"The problem",id:"the-problem",level:2},{value:"To explain the coupling",id:"to-explain-the-coupling",level:2},{value:"Theory 1",id:"theory-1",level:3},{value:"Theory 2",id:"theory-2",level:3},{value:"Theory 3",id:"theory-3",level:3},{value:"To explain the different magnitudes",id:"to-explain-the-different-magnitudes",level:2},{value:"Theory 1",id:"theory-1-1",level:3},{value:"Theory 2",id:"theory-2-1",level:3},{value:"Proposed controller design",id:"proposed-controller-design",level:2},{value:"Theory 3",id:"theory-3-1",level:3}],c={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modeling-cross-coupling"},"Modeling Cross Coupling"),(0,i.kt)("p",null,"By Etocii"),(0,i.kt)("p",null,"An Initial Attempt in Theorizing Cross-Coupling Oscillation Between Roll and Pitch Axis on Miniature Radio Controlled Helicopters"),(0,i.kt)("h1",{id:"how-to-model-the-cross-coupling"},"How to model the Cross Coupling"),(0,i.kt)("h2",{id:"the-problem"},"The problem"),(0,i.kt)("p",null,"When the helicopter experience high disturbance in the pitch axis, it would wobble to the roll axis. Similarly, when the helicopter experience disturbance in the roll axis, it would transfer to the pitch axis, but to a lesser degree."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The Coupling Effect",src:o(55765).Z,width:"2028",height:"826"}),(0,i.kt)("br",{parentName:"p"}),"\n","(Thanks to Jonas for the picture)"),(0,i.kt)("h2",{id:"to-explain-the-coupling"},"To explain the coupling"),(0,i.kt)("h3",{id:"theory-1"},"Theory 1"),(0,i.kt)("p",null,"It might be due to the fact that the rotor and motors are spinning disks. Due to gyroscopic precession, there must be some coupling between pitch and roll axis. (Not true, perfect spinning disks does not have coupling)\nInstead, if theory 3 dominates, conventional motor would provide the same motion. However, direct drive motor would actually counter the tilting motion."),(0,i.kt)("h3",{id:"theory-2"},"Theory 2"),(0,i.kt)("p",null,"The transient coupling is likely due to the change of phase lag of the main rotor during sudden change of roll/pitch rate. At high acceleration, the blades flex and introduce a much smaller phase lag (<90 degrees). "),(0,i.kt)("h3",{id:"theory-3"},"Theory 3"),(0,i.kt)("p",null,'The rotor and body can be modeled as a rigid spinning disk and a body coupled by a spring and a damper. When commanded to pitch forward, the disk tilts forward first and the body stays the same attitude. Since there is a difference in angles, the spring loads up, giving the body a torque in positive pitch. However, by Newton\'s third law, the disk would "feel" a positive pitch force, which turns 90 degree and gives a torque on the roll axis. '),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Disk Body Model",src:o(93710).Z,width:"4000",height:"3000"})),(0,i.kt)("h2",{id:"to-explain-the-different-magnitudes"},"To explain the different magnitudes"),(0,i.kt)("h3",{id:"theory-1-1"},"Theory 1"),(0,i.kt)("p",null,"There is a large difference in inertia between pitch and roll axis."),(0,i.kt)("h3",{id:"theory-2-1"},"Theory 2"),(0,i.kt)("p",null,"Tennis Racket theorem. The pitch axis is the second principal axis which is unstable."),(0,i.kt)("h2",{id:"proposed-controller-design"},"Proposed controller design"),(0,i.kt)("h3",{id:"theory-3-1"},"Theory 3"),(0,i.kt)("p",null,"If theory 3 is the main contributor of the coupling effect, one simple idea is to make the disk rolling forward at all time. To know that the disk has a force on it, we need to take derivative of the gyro signal (i.e. D-term) and add that to the roll axis. There is no need for this on the Roll-to-pitch since there is not much coupling."))}h.isMDXComponent=!0},93710:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Disk_Body_Model-d98c499effdce8d30c99fbfcf36dce74.jpg"},55765:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/the-coupling-effect-02dbcc7a902cc4312e053c9d4bcd38ec.png"}}]);