"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4452],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>g});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=h(i),f=n,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return i?r.createElement(g,a(a({ref:t},u),{},{components:i})):r.createElement(g,a({ref:t},u))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var h=2;h<o;h++)a[h]=i[h];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},87783:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=i(87462),n=(i(67294),i(3905));const o={sidebar_position:10},a="First Flight & Filter Tuning",l={unversionedId:"Tuning/First-Flight-Filter-Tuning",id:"Tuning/First-Flight-Filter-Tuning",title:"First Flight & Filter Tuning",description:'It is crucial to tune the filters based on your helicopter to gain the maximum performance while keeping noise out of the control loop. A good filter tuning should be just strong enough to suppress the peaks in the gyro readouts. A filter too weak may have peaks leaked inside the loop, and a filter too strong, while making the gyro signal clean, may lower the maximum gains later which cause a "sloppy" and delayed feel.',source:"@site/docs/Tuning/First-Flight-Filter-Tuning.md",sourceDirName:"Tuning",slug:"/Tuning/First-Flight-Filter-Tuning",permalink:"/docs/Tuning/First-Flight-Filter-Tuning",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tuning/First-Flight-Filter-Tuning.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tuningSidebar",next:{title:"Tuning Guide for 0602 version controller (Gyro D)",permalink:"/docs/Tuning/Tuning-description"}},s={},h=[{value:"Example: A Relatively Well Tuned Filter During 3D Maneuvers",id:"example-a-relatively-well-tuned-filter-during-3d-maneuvers",level:2},{value:"RAW Gyro:",id:"raw-gyro",level:3},{value:"Filtered Gyro:",id:"filtered-gyro",level:3}],u={toc:h},d="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"first-flight--filter-tuning"},"First Flight & Filter Tuning"),(0,n.kt)("p",null,'It is crucial to tune the filters based on your helicopter to gain the maximum performance while keeping noise out of the control loop. A good filter tuning should be just strong enough to suppress the peaks in the gyro readouts. A filter too weak may have peaks leaked inside the loop, and a filter too strong, while making the gyro signal clean, may lower the maximum gains later which cause a "sloppy" and delayed feel.'),(0,n.kt)("p",null,"It is highly recommended to use the RPM filter on RF. A good starting point is to use a single with Q = 2.5 on the fundamental and a double with Q = 2.5 on the second harmonic for the main rotor. For tail rotor, a single with Q = 2.5 on fundamental and second harmonic will most likely do the job. Motor filter should be turned on as well for non-direct drive machines. A first-order Gyro low pass filter with cutoff frequency of 100hz should be turned on. Notice: a low Q value makes the filter wide and strong, a high Q value makes the filter narrow and weak. It is always preferred to have highest Q value possible without leaking too much vibrations. "),(0,n.kt)("h1",{id:"first-flight"},"First Flight"),(0,n.kt)("p",null,"(Assume the default setting was discussed and set to be reasonable. Right now the roll/yaw gains are a bit too high)\nThe default setting would more than likely ensure a controllable hover. Take off with rpm set to the highest you want to use and hover for a minute or two. If you notice any fast vibrations, land immediately. "),(0,n.kt)("h1",{id:"filter-tuning"},"Filter Tuning"),(0,n.kt)("p",null,"Open log and click on filtered gyro. Click Gyro","[roll/pitch/yaw]"," legends on the right to show a FFT (frequency response) of the filtered gyro. Ideally, you should see very high magnitude at the very left, and low values at other range. If you see a peak, look for the frequency of the peak and try to divide it with its fundamental frequency. For example, 2800rpm/60 = 46.7hz. If you see a sharp peak at 186hz, which is 4 times, turn on the notch filter on the 4th harmonic of the main blades with Q = 4.0. "),(0,n.kt)("p",null,"If theres a peak that is not divisible by main or tail blade fundamental and persist at different rpm, it might be due to some other sources of vibration, e.g. skids, tail fin, tail belt. etc. Check your helicopter first, but if you could not resolve it, use a notch filter centered at the exact frequency of the vibration and set the cutoff close to the left end of the peak. "),(0,n.kt)("p",null,'If there is a "bump" at the fundamental & second harmonic, consider lowering the Q values or use double filter on the fundamental. However, it is not advised to lower the Q value below 2.0 as it might significantly affect performance. Two of the main reasons that cause high vibration at those frequencies are blade tracking and blade imbalance. Check them first if you want to achieve a higher performance.'),(0,n.kt)("p",null,'For the low pass filter, it is not advised to lower it below 60hz, which might start to affect performance significantly. When there is no peak existing but there is high "grass" at around 60-80hz especailly when doing maneuvers, try lower it. Remember, its better if this cutoff is high so lower it (especially below 80hz) if absolutely necessary.'),(0,n.kt)("p",null,"A well-tuned filter should have no sharp peaks and might have small bumps at 40-80hz. "),(0,n.kt)("h1",{id:"further-tuning"},"Further Tuning"),(0,n.kt)("p",null,'The noise is usually much higher during 3D flight especially on the second harmonic of the main blades. If peaks appears after 3D flights, consider lower Q value on the second harmonics. Tall "grass" is usually fine.'),(0,n.kt)("h2",{id:"example-a-relatively-well-tuned-filter-during-3d-maneuvers"},"Example: A Relatively Well Tuned Filter During 3D Maneuvers"),(0,n.kt)("h3",{id:"raw-gyro"},"RAW Gyro:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"First Flight",src:i(45578).Z,width:"2600",height:"1476"})),(0,n.kt)("h3",{id:"filtered-gyro"},"Filtered Gyro:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"First Flight",src:i(7128).Z,width:"2600",height:"1510"})))}c.isMDXComponent=!0},45578:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/First_flight_1-d7a7d1836a019f7c54dcafd2fca3175d.png"},7128:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/First_flight_2-89976d0d2d76b0976e8879195eb99590.png"}}]);