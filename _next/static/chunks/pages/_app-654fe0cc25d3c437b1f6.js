(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{98859:function(c,e,r){"use strict";r.d(e,{q:function(){return t},a:function(){return n}});var t="2.1.1",n="1578"},92167:function(c,e,r){"use strict";var t=r(63038),n=r(20862);e.default=void 0;var a=n(r(67294)),o=r(29414),s=r(34651),l=r(7426),i={};function f(c,e,r,t){if(c&&(0,o.isLocalURL)(e)){c.prefetch(e,r,t).catch((function(c){0}));var n=t&&"undefined"!==typeof t.locale?t.locale:c&&c.locale;i[e+"%"+r+(n?"%"+n:"")]=!0}}var u=function(c){var e,r=!1!==c.prefetch,n=(0,s.useRouter)(),u=a.default.useMemo((function(){var e=(0,o.resolveHref)(n,c.href,!0),r=t(e,2),a=r[0],s=r[1];return{href:a,as:c.as?(0,o.resolveHref)(n,c.as):s||a}}),[n,c.href,c.as]),d=u.href,h=u.as,p=c.children,v=c.replace,x=c.shallow,_=c.scroll,g=c.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var j=(e=a.Children.only(p))&&"object"===typeof e&&e.ref,m=(0,l.useIntersection)({rootMargin:"200px"}),b=t(m,2),C=b[0],k=b[1],M=a.default.useCallback((function(c){C(c),j&&("function"===typeof j?j(c):"object"===typeof j&&(j.current=c))}),[j,C]);(0,a.useEffect)((function(){var c=k&&r&&(0,o.isLocalURL)(d),e="undefined"!==typeof g?g:n&&n.locale,t=i[d+"%"+h+(e?"%"+e:"")];c&&!t&&f(n,d,h,{locale:e})}),[h,d,k,g,r,n]);var N={ref:M,onClick:function(c){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(c),c.defaultPrevented||function(c,e,r,t,n,a,s,l){("A"!==c.currentTarget.nodeName||!function(c){var e=c.currentTarget.target;return e&&"_self"!==e||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.nativeEvent&&2===c.nativeEvent.which}(c)&&(0,o.isLocalURL)(r))&&(c.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),e[n?"replace":"push"](r,t,{shallow:a,locale:l,scroll:s}))}(c,n,d,h,v,x,_,g)},onMouseEnter:function(c){(0,o.isLocalURL)(d)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(c),f(n,d,h,{priority:!0}))}};if(c.passHref||"a"===e.type&&!("href"in e.props)){var y="undefined"!==typeof g?g:n&&n.locale,z=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(h,y,n&&n.locales,n&&n.domainLocales);N.href=z||(0,o.addBasePath)((0,o.addLocale)(h,y,n&&n.defaultLocale))}return a.default.cloneElement(e,N)};e.default=u},7426:function(c,e,r){"use strict";var t=r(63038);e.__esModule=!0,e.useIntersection=function(c){var e=c.rootMargin,r=c.disabled||!o,l=(0,n.useRef)(),i=(0,n.useState)(!1),f=t(i,2),u=f[0],d=f[1],h=(0,n.useCallback)((function(c){l.current&&(l.current(),l.current=void 0),r||u||c&&c.tagName&&(l.current=function(c,e,r){var t=function(c){var e=c.rootMargin||"",r=s.get(e);if(r)return r;var t=new Map,n=new IntersectionObserver((function(c){c.forEach((function(c){var e=t.get(c.target),r=c.isIntersecting||c.intersectionRatio>0;e&&r&&e(r)}))}),c);return s.set(e,r={id:e,observer:n,elements:t}),r}(r),n=t.id,a=t.observer,o=t.elements;return o.set(c,e),a.observe(c),function(){o.delete(c),a.unobserve(c),0===o.size&&(a.disconnect(),s.delete(n))}}(c,(function(c){return c&&d(c)}),{rootMargin:e}))}),[r,e,u]);return(0,n.useEffect)((function(){if(!o&&!u){var c=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(c)}}}),[u]),[h,u]};var n=r(67294),a=r(73447),o="undefined"!==typeof IntersectionObserver;var s=new Map},15782:function(c,e,r){"use strict";function t(c,e,r){return e in c?Object.defineProperty(c,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[e]=r,c}r.r(e),r.d(e,{default:function(){return j}});var n=r(85893),a=(r(37424),r(29039)),o=r.n(a),s=r(41664),l=r(37616),i=r.n(l),f=r(98859);function u(c){var e=c.dark;return(0,n.jsx)("div",{className:e?i().nav_button+" "+i().dark:i().nav_button,children:(0,n.jsxs)("a",{rel:"noreferrer",href:"http://gum.co/boxicons",target:"_blank",children:["Download v",f.q]})})}var d=function(c){var e=c.dark,r=c.toggleDark;return(0,n.jsx)("header",{className:e?o().header+" "+o().dark:o().header,children:(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("div",{className:o().logo,children:(0,n.jsx)(s.default,{href:"/",children:(0,n.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 397.2 86",children:[(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{className:o().logo_text,fill:"#0D0C22",d:"M141.8,45.9c1.6,2,2.4,4.3,2.4,7c0,3.9-1.3,6.9-3.9,9.1c-2.6,2.2-6.3,3.3-11.1,3.3H108V19.9h20.6\r c4.6,0,8.2,1,10.7,3c2.5,2,3.8,4.9,3.8,8.6c0,2.7-0.7,5-2.2,6.8c-1.5,1.8-3.4,3-5.7,3.6C138,42.5,140.2,43.9,141.8,45.9z M119,38.4\r h7.2c3.8,0,5.7-1.6,5.7-4.9c0-3.3-1.9-4.9-5.8-4.9H119L119,38.4L119,38.4z M132.9,51.3c0-1.6-0.5-2.9-1.6-3.8\r c-1.1-0.9-2.6-1.4-4.6-1.4H119v10.2h7.8C130.9,56.3,132.9,54.7,132.9,51.3z"}),(0,n.jsx)("path",{className:o().logo_text,fill:"#0D0C22",d:"M175.6,31.2c2.8,1.5,5,3.6,6.6,6.4c1.6,2.8,2.4,6,2.4,9.8c0,3.7-0.8,7-2.4,9.8s-3.8,4.9-6.6,6.4\r c-2.8,1.5-6,2.2-9.5,2.2s-6.7-0.7-9.6-2.2c-2.8-1.5-5-3.6-6.6-6.4c-1.6-2.8-2.4-6-2.4-9.8c0-3.7,0.8-7,2.4-9.8\r c1.6-2.8,3.8-4.9,6.6-6.4c2.8-1.5,6-2.2,9.6-2.2S172.8,29.7,175.6,31.2z M160.8,40.8c-1.4,1.5-2.2,3.7-2.2,6.6\r c0,2.9,0.7,5.1,2.2,6.5c1.4,1.5,3.2,2.2,5.3,2.2s3.9-0.7,5.3-2.2c1.4-1.5,2.1-3.7,2.1-6.5c0-2.9-0.7-5.1-2.1-6.6\r c-1.4-1.5-3.2-2.3-5.3-2.3C164,38.5,162.2,39.2,160.8,40.8z"}),(0,n.jsx)("path",{className:o().logo_text,fill:"#0D0C22",d:"M212.1,65.3L204.8,55l-6,10.2h-12.1l11.9-18.7l-12.3-17.1h12.3l7.3,10.1l6-10.1h12.1l-12.1,18.2l12.6,17.6\r L212.1,65.3L212.1,65.3z"}),(0,n.jsx)("path",{className:o().logo_text,fill:"#0D0C22",d:"M228.7,15.2c1.2-1.1,2.8-1.6,4.8-1.6s3.6,0.5,4.8,1.6s1.8,2.5,1.8,4.1c0,1.6-0.6,3-1.8,4.1\r c-1.2,1.1-2.8,1.6-4.8,1.6s-3.6-0.5-4.8-1.6c-1.2-1.1-1.8-2.4-1.8-4.1C226.9,17.7,227.5,16.3,228.7,15.2z M238.9,29.4v35.8h-11\r V29.4H238.9z"}),(0,n.jsx)("path",{className:o().logo_text,fill:"#0D0C22",d:"M273.6,32.8c3.1,2.5,5.1,6,5.9,10.5h-11.6c-0.3-1.5-1.1-2.7-2.1-3.6c-1.1-0.9-2.4-1.3-4-1.3\r c-1.9,0-3.5,0.8-4.8,2.3c-1.2,1.5-1.9,3.7-1.9,6.6s0.6,5.1,1.9,6.6c1.2,1.5,2.8,2.3,4.8,2.3c1.6,0,3-0.4,4-1.3\r c1.1-0.9,1.8-2.1,2.1-3.6h11.6c-0.8,4.5-2.8,8-5.9,10.5c-3.1,2.5-7,3.8-11.6,3.8c-3.5,0-6.6-0.7-9.3-2.2c-2.7-1.5-4.8-3.6-6.4-6.4\r c-1.5-2.8-2.3-6-2.3-9.8c0-3.8,0.8-7,2.3-9.8c1.5-2.8,3.6-4.9,6.4-6.4c2.7-1.5,5.9-2.2,9.4-2.2C266.6,29,270.5,30.3,273.6,32.8z"}),(0,n.jsx)("path",{className:o().logo_text,fill:"#0D0C22",d:"M310.9,31.2c2.8,1.5,5,3.6,6.6,6.4c1.6,2.8,2.4,6,2.4,9.8c0,3.7-0.8,7-2.4,9.8c-1.6,2.8-3.8,4.9-6.6,6.4\r s-6,2.2-9.5,2.2s-6.7-0.7-9.6-2.2c-2.8-1.5-5-3.6-6.6-6.4c-1.6-2.8-2.4-6-2.4-9.8c0-3.7,0.8-7,2.4-9.8c1.6-2.8,3.8-4.9,6.6-6.4\r c2.8-1.5,6-2.2,9.6-2.2C304.9,29,308.1,29.7,310.9,31.2z M296,40.8c-1.4,1.5-2.1,3.7-2.1,6.6c0,2.9,0.7,5.1,2.1,6.5\r s3.2,2.2,5.3,2.2c2.1,0,3.9-0.7,5.3-2.2s2.1-3.7,2.1-6.5c0-2.9-0.7-5.1-2.1-6.6c-1.4-1.5-3.2-2.3-5.3-2.3\r C299.2,38.5,297.5,39.2,296,40.8z"}),(0,n.jsx)("path",{className:o().logo_text,fill:"#0D0C22",d:"M357.5,33.2c2.4,2.7,3.6,6.5,3.6,11.3v20.8h-11V45.7c0-2.4-0.6-4.3-1.9-5.6c-1.3-1.3-2.9-2-5-2\r c-2.2,0-4,0.7-5.3,2.1c-1.3,1.4-2,3.4-2,6v19h-11V29.4h11V36c1-2.1,2.6-3.8,4.6-5.1c2-1.2,4.4-1.9,7.2-1.9\r C351.8,29,355.1,30.4,357.5,33.2z"}),(0,n.jsx)("path",{className:o().logo_text,fill:"#0D0C22",d:"M391.6,32.4c2.7,2.3,4.4,5.3,5.1,9h-10.3c-0.3-1.5-1-2.6-2-3.4c-1-0.8-2.4-1.3-3.9-1.3c-1.2,0-2.2,0.3-2.8,0.8\r c-0.6,0.5-1,1.3-1,2.3c0,1.1,0.6,1.9,1.8,2.5c1.2,0.6,3,1.1,5.6,1.7c2.7,0.6,5,1.3,6.7,2c1.8,0.7,3.3,1.7,4.6,3.2\r c1.3,1.5,1.9,3.5,1.9,6c0,2.1-0.6,3.9-1.7,5.5c-1.1,1.6-2.7,2.8-4.8,3.7c-2.1,0.9-4.6,1.3-7.4,1.3c-4.8,0-8.7-1.1-11.6-3.2\r c-2.9-2.1-4.7-5.2-5.3-9.2H377c0.2,1.5,0.8,2.7,2,3.5c1.1,0.8,2.6,1.2,4.4,1.2c1.2,0,2.2-0.3,2.8-0.9s1-1.3,1-2.3\r c0-1.2-0.6-2.1-1.8-2.7c-1.2-0.5-3.1-1.1-5.7-1.7c-2.7-0.6-4.8-1.2-6.5-1.8c-1.7-0.6-3.2-1.7-4.4-3.1c-1.2-1.4-1.9-3.4-1.9-5.9\r c0-3.2,1.2-5.8,3.7-7.8s5.9-3,10.3-3C385.3,29,388.9,30.1,391.6,32.4z"})]}),(0,n.jsx)("path",{className:o().logo_primary,fill:"#595EEF",d:"M4.7,21.2c-0.9,1.4-1.4,3-1.4,4.6l0,34.8c0,2.4,1.3,4.7,3.4,5.9l31.5,17.9c2.6,1.5,5.8-0.4,5.8-3.4V43.7l0,0\r L4.7,21.2z"}),(0,n.jsx)("path",{className:o().logo_secondary,fill:"#6DEAE7",d:"M44,43.7l34.2-17.2c2.8-1.4,2.9-5.3,0.2-6.8L47.1,1.8c-2-1.1-4.4-1.2-6.4-0.2L8.1,18.1\r c-1.4,0.7-2.6,1.8-3.5,3.1L44,43.7z"})]})})}),(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:o().nav_link,children:(0,n.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/atisawd/boxicons",children:"Github"})}),(0,n.jsx)("li",{className:o().nav_link,children:(0,n.jsx)(s.default,{href:"/usage",children:"Usage"})}),(0,n.jsx)("li",{children:(0,n.jsx)(u,{dark:e})})]})}),(0,n.jsx)("div",{className:o().dark_button,onClick:r,children:e?(0,n.jsx)("i",{className:"bx bxs-sun"}):(0,n.jsx)("i",{className:"bx bxs-moon"})})]})})},h=r(67294),p=r(31024),v=r.n(p);var x=function(c){var e=c.dark;return(0,n.jsx)("footer",{className:e?v().footer+" "+v().dark:v().footer,children:(0,n.jsxs)("div",{className:v().footer_in,children:[(0,n.jsxs)("div",{className:v().footer_links,children:[(0,n.jsx)(s.default,{href:"/cheatsheet/",children:"Cheatsheet"}),(0,n.jsx)("a",{href:"https://github.com/atisawd/boxicons/issues/new?labels=icon%20request,",target:"blank",children:"Request Icons"}),(0,n.jsx)(s.default,{href:"/usage/#license",children:"License"})]}),(0,n.jsx)("div",{className:v().footer_logo,children:(0,n.jsx)("a",{href:"https://atisa.gumroad.com",rel:"noopener noreferrer",target:"_blank",children:(0,n.jsxs)("svg",{version:"1.1",x:"0px",y:"0px",width:"1825.596px",height:"238.593px",viewBox:"0 0 1825.596 238.593",children:[(0,n.jsx)("path",{fill:"#6e6d7a",d:"M49.282,228.111"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("polyline",{opacity:"0.6",fill:"#6e6d7a",points:"241.149,77.679 241.149,226.777 286.708,226.777 \r 286.708,226.777 329.893,226.777 329.893,226.777 375.448,226.777 375.448,57.378 375.448,11.819 375.448,11.817 329.893,11.817 \r 329.893,11.819 286.708,11.819 286.704,11.819 286.708,11.817 241.149,11.817  "}),(0,n.jsx)("polyline",{fill:"#6e6d7a",points:"282.99,11.819 282.985,11.819 282.99,11.817 237.43,11.817 237.43,11.817 194.245,11.819 \r 194.245,11.819 148.686,11.819 -0.001,226.777 45.563,226.777 45.563,226.777 88.743,226.777 133.082,226.777 134.303,226.777 \r 237.43,77.679   "})]}),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:"#6e6d7a",d:"M749.099,238.593l-21.69-50.389h-97.772l-21.69,50.389h-55.394L653.328,5.34h50.388l100.776,233.253\r H749.099z M678.688,74.748l-29.364,67.742h58.396L678.688,74.748z"}),(0,n.jsx)("path",{fill:"#6e6d7a",d:"M980.018,50.389v188.205h-52.059V50.389h-66.071V5.34h184.201v45.049H980.018z"}),(0,n.jsx)("path",{fill:"#6e6d7a",d:"M1150.867,5.34h52.057v233.253h-52.057V5.34z"}),(0,n.jsx)("path",{fill:"#6e6d7a",d:"M1381.615,51.891c-5.007,4.119-7.509,9.568-7.509,16.351c0,6.789,3.056,12.181,9.177,16.187\r c6.114,4.004,20.239,8.732,42.379,14.182c22.134,5.453,39.317,13.629,51.557,24.525c12.232,10.902,18.354,26.813,18.354,47.721\r c0,20.912-7.842,37.873-23.525,50.889c-15.684,13.014-36.32,19.52-61.9,19.52c-36.932,0-70.189-13.68-99.773-41.043l31.032-38.041\r c25.136,22.023,48.386,33.035,69.742,33.035c9.563,0,17.069-2.055,22.524-6.174c5.447-4.113,8.176-9.676,8.176-16.686\r c0-7.008-2.895-12.564-8.678-16.686c-5.786-4.113-17.24-8.285-34.368-12.514c-27.146-6.449-47-14.85-59.565-25.193\r c-12.57-10.345-18.854-26.582-18.854-48.72c0-22.134,7.951-39.21,23.859-51.223C1360.145,6.008,1380,0,1403.807,0\r c15.568,0,31.143,2.67,46.718,8.008c15.568,5.34,29.142,12.906,40.71,22.692l-26.361,38.042\r c-20.244-15.352-41.16-23.025-62.734-23.025C1393.459,45.717,1386.619,47.776,1381.615,51.891z"}),(0,n.jsx)("path",{fill:"#6e6d7a",d:"M1770.201,238.593l-21.689-50.389h-97.773l-21.689,50.389h-55.395L1674.432,5.34h50.387l100.777,233.253\r H1770.201z M1699.789,74.748l-29.364,67.742h58.397L1699.789,74.748z"})]})]})})})]})})};function _(c,e){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable}))),r.push.apply(r,t)}return r}function g(c){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){t(c,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))}))}return c}var j=function(c){var e=c.Component,r=c.pageProps,t=(0,h.useState)(!1),a=t[0],o=t[1],s=(0,h.useState)(!0),l=s[0],i=s[1];return(0,h.useEffect)((function(){var c=localStorage.getItem("atom");localStorage.getItem("dark")&&o(JSON.parse(localStorage.getItem("dark"))),c&&i(JSON.parse(localStorage.getItem("atom")))}),[]),(0,h.useEffect)((function(){localStorage.setItem("atom",l)}),[l]),(0,h.useEffect)((function(){localStorage.setItem("dark",a)}),[a]),(0,n.jsxs)(h.Fragment,{children:[l&&(0,n.jsxs)("div",{className:"atomicons",children:[(0,n.jsx)("div",{className:"atomicons-close",onClick:function(){return i(!1)},children:(0,n.jsx)("i",{className:"bx bx-x"})}),"Check out 250 Free, beautiful & highly customizable new line icons at",(0,n.jsxs)("a",{href:"https://atomicons.com",rel:"noreferrer",target:"_blank",children:["  ",(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 52 10",children:[(0,n.jsx)("g",{children:(0,n.jsx)("path",{fill:"#ffff",d:"M3.3666992,9.4510899c-0.7202148,0-1.3549805-0.2216797-1.8193359-0.6855469 C0.2338867,7.4520664,0.8588867,4.768961,2.9702148,2.6576331c2.1113281-2.1108398,4.793457-2.7358398,6.1074219-1.4228517 c1.3134766,1.3134767,0.6884766,3.9960938-1.4228516,6.1079102l0,0C6.2895508,8.7079258,4.6850586,9.4510899,3.3666992,9.4510899z M7.2607422,1.54484c-1.0385742,0-2.4301758,0.666504-3.5834961,1.8198243 C2.0195312,5.0223789,1.3681641,7.171793,2.2543945,8.0585117c0.8852539,0.8867188,3.0351562,0.234375,4.6933594-1.4228516 c1.6577148-1.6582031,2.309082-3.8076169,1.4228516-4.6938477C8.1010742,1.6722814,7.7143555,1.54484,7.2607422,1.54484z"})}),(0,n.jsx)("g",{children:(0,n.jsx)("path",{fill:"#fff",d:"M7.2583008,9.4517393c-1.3183594,0-2.9228516-0.7431641-4.2880859-2.1083984 C0.8588867,5.2315245,0.2338867,2.5489073,1.5473633,1.2354307C2.859375-0.0804872,5.543457,0.5474424,7.6547852,2.6582823 c2.1113281,2.1113281,2.7363281,4.7944336,1.4228516,6.1079102C8.6137695,9.2300596,7.9785156,9.4517393,7.2583008,9.4517393z M3.3642578,1.5454893c-0.4536133,0-0.840332,0.1274414-1.1098633,0.3969727 C1.3681641,2.8286924,2.0195312,4.9781065,3.6772461,6.6363096C5.3354492,8.2935362,7.484375,8.9458799,8.3706055,8.0591612 s0.2348633-3.0361328-1.4228516-4.6938477C5.7944336,2.2119932,4.402832,1.5454893,3.3642578,1.5454893z"})}),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"M12.9442577,4.6970019c0.1668091-0.3244772,0.3939428-0.5740047,0.6809454-0.7490399 c0.2870026-0.174578,0.6078243-0.2618668,0.9624643-0.2618668c0.3093958,0,0.5804033,0.0626104,0.8121071,0.1869171 c0.2321615,0.125221,0.4181652,0.2824323,0.5580101,0.4720919V3.7532756h1.0556946v4.148283h-1.0556946V7.2951059 c-0.1348181,0.1946864-0.3208218,0.3555541-0.5580101,0.4830604c-0.2367315,0.1270485-0.5100231,0.1905732-0.8198767,0.1905732 c-0.3491554,0-0.6676922-0.0895743-0.9546947-0.2691793c-0.2870026-0.1800618-0.5141363-0.4332457-0.6809454-0.7600083 c-0.1677227-0.327219-0.2508984-0.7028818-0.2508984-1.1269875C12.6933594,5.3930287,12.776535,5.0214796,12.9442577,4.6970019z M15.8078852,5.1722927c-0.0996284-0.1823468-0.2344465-0.3217349-0.4039974-0.4190784 c-0.1700077-0.097343-0.3518982-0.1462431-0.5465841-0.1462431c-0.1946869,0-0.3747482,0.0475287-0.5392723,0.1421299 c-0.1645241,0.0950584-0.2984276,0.2335324-0.4007978,0.4158797c-0.1023703,0.18189-0.1530991,0.398056-0.1530991,0.6475835 c0,0.2495279,0.0507288,0.4679785,0.1530991,0.6548958c0.1023703,0.1873746,0.2371883,0.3308759,0.4044542,0.4309611 c0.1672659,0.099628,0.345499,0.1494422,0.5356159,0.1494422c0.1946859,0,0.3765764-0.0484433,0.5465841-0.1457863 c0.1695509-0.0973434,0.304369-0.2371883,0.4039974-0.4195356c0.1000853-0.18189,0.1498995-0.400341,0.1498995-0.6548958 S15.9079704,5.35464,15.8078852,5.1722927z"}),(0,n.jsx)("path",{d:"M19.1097851,4.6142831V6.621016c0,0.1398449,0.0338192,0.2408442,0.1009998,0.3034549 c0.0676365,0.0626101,0.180975,0.0936871,0.340929,0.0936871h0.4867153v0.8834009h-0.659008 c-0.8834019,0-1.3253307-0.4291329-1.3253307-1.2878551V4.6142831h-0.4940281V3.7532756h0.4940281V2.7277443h1.0556946v1.0255313 h0.9286442v0.8610075H19.1097851z"}),(0,n.jsx)("path",{d:"M21.4090042,7.7032166c-0.3194504-0.17732-0.5703487-0.4282188-0.752697-0.7526965 c-0.1823463-0.3244772-0.2732906-0.6987686-0.2732906-1.1228743c0-0.4245625,0.0936871-0.7988544,0.2806034-1.1233315 c0.1873741-0.3244772,0.4433002-0.575376,0.7677784-0.752696c0.3244762-0.176863,0.6864281-0.265523,1.0853996-0.265523 c0.3994255,0,0.7613792,0.08866,1.0858555,0.265523c0.3244781,0.17732,0.5804043,0.4282188,0.7677784,0.752696 c0.1869164,0.3244772,0.2806034,0.6987691,0.2806034,1.1233315c0,0.4241056-0.0959721,0.7983971-0.2883739,1.1228743 c-0.1919441,0.3244777-0.4519825,0.5753765-0.7787457,0.7526965c-0.3267612,0.17732-0.6923695,0.265523-1.0968246,0.265523 C22.0876656,7.9687395,21.7284546,7.8805366,21.4090042,7.7032166z M23.0222511,6.9171586 c0.1672649-0.0923162,0.3007126-0.2312474,0.4007969-0.4158797c0.0996284-0.1846318,0.1499004-0.4090242,0.1499004-0.6736331 c0-0.3944001-0.1037407-0.697855-0.3107681-0.9099078c-0.2074814-0.2120528-0.4606647-0.318079-0.7600079-0.318079 c-0.299799,0-0.5502396,0.1060262-0.7526951,0.318079c-0.2019997,0.2120528-0.3029976,0.5155077-0.3029976,0.9099078 s0.0982571,0.6973977,0.2956848,0.9094505c0.1969719,0.2125101,0.4455853,0.3185363,0.7449265,0.3185363 C22.6767502,7.0556326,22.8549843,7.0094748,23.0222511,6.9171586z"}),(0,n.jsx)("path",{d:"M31.6556339,4.161386c0.3116817,0.3121381,0.4679775,0.7476687,0.4679775,1.3065925v2.4335804h-1.0483799v-2.29145 c0-0.3240204-0.082262-0.5726342-0.2467861-0.7449269c-0.1654377-0.1722927-0.3893738-0.2582107-0.6745472-0.2582107 c-0.2842617,0-0.510025,0.0859179-0.67729,0.2582107s-0.2504425,0.4209065-0.2504425,0.7449269v2.29145H28.177784v-2.29145 c0-0.3240204-0.0822601-0.5726342-0.2476978-0.7449269c-0.1645241-0.1722927-0.3893738-0.2582107-0.6736336-0.2582107 c-0.2897453,0-0.5182495,0.0859179-0.6846027,0.2582107c-0.1681786,0.1722927-0.2513542,0.4209065-0.2513542,0.7449269v2.29145 h-1.0483818v-4.148283h1.0483818v0.5017974c0.1343594-0.1745777,0.3080235-0.3121381,0.5200768-0.4117663 c0.2129669-0.0996282,0.446043-0.1498995,0.70014-0.1498995c0.3244781,0,0.6142216,0.0685515,0.8692341,0.2061117 c0.254097,0.1371031,0.4515266,0.3331604,0.5913715,0.5877156c0.1343613-0.2394738,0.3308754-0.4318752,0.5877151-0.5767474 c0.2568398-0.1444151,0.5356159-0.2170799,0.8345013-0.2170799C30.9326439,3.6934073,31.3439522,3.849705,31.6556339,4.161386z"}),(0,n.jsx)("path",{d:"M33.0412903,3.0832984c-0.1224785-0.1174517-0.1837196-0.263238-0.1837196-0.438273 c0-0.174578,0.0612411-0.3203642,0.1837196-0.4378159s0.2760315-0.1759489,0.4606667-0.1759489 c0.1846313,0,0.3381882,0.0584972,0.4606667,0.1759489c0.121563,0.1174517,0.1828041,0.263238,0.1828041,0.4378159 c0,0.175035-0.0612411,0.3208213-0.1828041,0.438273c-0.1224785,0.1174517-0.2760353,0.1759491-0.4606667,0.1759491 C33.3173218,3.2592475,33.1637688,3.2007501,33.0412903,3.0832984z M34.0183792,3.7532756v4.148283h-1.0483818v-4.148283 H34.0183792z"}),(0,n.jsx)("path",{d:"M34.8940086,4.7006583c0.1745796-0.3221922,0.4167938-0.5717201,0.7266464-0.7490401 c0.3089409-0.176863,0.663578-0.265523,1.0630074-0.265523c0.5136795,0,0.9396133,0.1284199,1.276886,0.3857169 c0.3363609,0.2568398,0.5621223,0.6174207,0.6772881,1.0817432h-1.1306419 c-0.0594101-0.179605-0.1608658-0.3208213-0.3034554-0.4231915c-0.141674-0.1019135-0.3180771-0.1530986-0.5273895-0.1530986 c-0.2997971,0-0.5365295,0.1083117-0.7111092,0.3253913c-0.1754913,0.2170801-0.2623215,0.5255623-0.2623215,0.9249892 c0,0.3944001,0.0868301,0.70014,0.2623215,0.9172196c0.1745796,0.2170801,0.4113121,0.3253918,0.7111092,0.3253918 c0.4241066,0,0.7010536-0.1896596,0.8308449-0.5689783h1.1306419c-0.1151657,0.4492412-0.3418427,0.8061666-0.6809425,1.0707755 c-0.3400154,0.2646089-0.764122,0.3966851-1.2732315,0.3966851c-0.3994293,0-0.7540665-0.088203-1.0630074-0.265523 c-0.3098526-0.17732-0.5520668-0.4268479-0.7266464-0.7490401c-0.1745758-0.3217354-0.2623215-0.6973977-0.2623215-1.1265306 C34.6316872,5.398056,34.7194328,5.0223937,34.8940086,4.7006583z"}),(0,n.jsx)("path",{d:"M40.0225792,7.7032166c-0.3199081-0.17732-0.5703468-0.4282188-0.7522392-0.7526965 c-0.1828041-0.3244772-0.2732925-0.6987686-0.2732925-1.1228743c0-0.4245625,0.0932312-0.7988544,0.2806053-1.1233315 s0.4423866-0.575376,0.7668648-0.752696c0.3244743-0.176863,0.6864281-0.265523,1.0858536-0.265523 c0.3994293,0,0.7613792,0.08866,1.0858574,0.265523c0.3244781,0.17732,0.5804024,0.4282188,0.7677803,0.752696 c0.1873741,0.3244772,0.2806015,0.6987691,0.2806015,1.1233315c0,0.4241056-0.0959702,0.7983971-0.2879143,1.1228743 c-0.1928596,0.3244777-0.4524422,0.5753765-0.7787476,0.7526965c-0.3272171,0.17732-0.6928253,0.265523-1.0977402,0.265523 C40.7007828,7.9687395,40.3415718,7.8805366,40.0225792,7.7032166z M41.6358261,6.9171586 c0.1672668-0.0923162,0.3007126-0.2312474,0.400341-0.4158797c0.100544-0.1846318,0.1498985-0.4090242,0.1498985-0.6736331 c0-0.3944001-0.1032829-0.697855-0.3107643-0.9099078c-0.2065697-0.2120528-0.4597549-0.318079-0.759552-0.318079 c-0.2998009,0-0.5502396,0.1060262-0.7522392,0.318079c-0.2029152,0.2120528-0.3034554,0.5155077-0.3034554,0.9099078 s0.0987129,0.6973977,0.2952271,0.9094505c0.1974297,0.2125101,0.4460449,0.3185363,0.7449265,0.3185363 C41.2903252,7.0556326,41.4685593,7.0094748,41.6358261,6.9171586z"}),(0,n.jsx)("path",{d:"M47.3822746,4.161386c0.3043709,0.3121381,0.4570122,0.7476687,0.4570122,1.3065925v2.4335804H46.790905v-2.29145 c0-0.3290477-0.0822639-0.5826883-0.2476997-0.759551c-0.1645241-0.17732-0.3893738-0.2659802-0.6736336-0.2659802 c-0.2897453,0-0.5182495,0.0886602-0.6846046,0.2659802c-0.167263,0.1768627-0.2513542,0.4305034-0.2513542,0.759551v2.29145 H43.885231v-4.148283h1.0483818v0.5168788c0.1398468-0.179605,0.3180809-0.3208213,0.5356178-0.4231915 c0.2166214-0.1023705,0.4551811-0.1535556,0.7147636-0.1535556C46.6784782,3.6934073,47.0779076,3.849705,47.3822746,4.161386z"}),(0,n.jsx)("path",{d:"M49.3593025,7.7854781c-0.2696381-0.1220217-0.4835167-0.2883735-0.640728-0.497684 c-0.1572113-0.2097678-0.2431297-0.4419293-0.2586708-0.6964841h1.0566101 c0.0191956,0.1594968,0.0978012,0.2920299,0.235817,0.3966851c0.137104,0.1051126,0.3080254,0.1572118,0.512764,0.1572118 c0.1992569,0,0.3555565-0.0397601,0.4679794-0.1197371c0.1124268-0.0799766,0.1681786-0.1823468,0.1681786-0.3071108 c0-0.1348181-0.0685501-0.2358174-0.2056541-0.3029981c-0.1371002-0.0676374-0.3555527-0.1412158-0.6553497-0.2211928 c-0.3098564-0.0744925-0.5630379-0.1521845-0.759552-0.2317042c-0.1974297-0.079977-0.3674393-0.2024555-0.510025-0.3669791 c-0.141674-0.1649809-0.2129669-0.3870878-0.2129669-0.6663213c0-0.2298765,0.0658112-0.439187,0.1983414-0.6293035 c0.132534-0.1896591,0.3217354-0.3391016,0.5694351-0.4492412c0.246788-0.1096823,0.5374451-0.1645236,0.8719788-0.1645236 c0.4944839,0,0.8884277,0.1233928,1.1827431,0.3706355c0.2952271,0.2467856,0.4570084,0.5804029,0.4871712,0.9994817H50.863781 c-0.0146255-0.1645241-0.0831757-0.2956858-0.2056541-0.3930292c-0.1224823-0.097343-0.2860909-0.1462431-0.4908295-0.1462431 c-0.1892052,0-0.3354454,0.0351896-0.4378166,0.1051121c-0.1023712,0.0699229-0.1535568,0.1672659-0.1535568,0.2920299 c0,0.1398454,0.0703812,0.2458715,0.2093124,0.318079c0.139843,0.0726647,0.3573799,0.1462436,0.6516953,0.220736 c0.2998009,0.0749497,0.5465851,0.1526418,0.741272,0.2321615c0.1946869,0.0799766,0.3628654,0.2038264,0.5054512,0.3706355 C51.8262444,6.22296,51.8993645,6.4441528,51.90485,6.718359c0,0.2399306-0.0667229,0.4542685-0.1983414,0.6439276 c-0.132534,0.1901164-0.3226509,0.3381877-0.5694351,0.4455853c-0.246788,0.1073976-0.5356178,0.1608677-0.864666,0.1608677 C49.9323921,7.9687395,49.6280251,7.9079571,49.3593025,7.7854781z"})]})]})]})]}),(0,n.jsx)(d,{dark:a,toggleDark:function(){o(!a)}}),(0,n.jsx)(e,g({dark:a},r)),(0,n.jsx)(x,{dark:a})]})}},81780:function(c,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(15782)}])},37616:function(c){c.exports={nav_button:"Buttons_nav_button__DGPPn",dark:"Buttons_dark__3DPEW"}},31024:function(c){c.exports={footer:"Footer_footer__1NykH",footer_in:"Footer_footer_in__3u_c4",footer_logo:"Footer_footer_logo__gYK8V",footer_links:"Footer_footer_links__kB3GB",dark:"Footer_dark__wJtLO"}},29039:function(c){c.exports={header:"Navigation_header__1ldTi",container:"Navigation_container__31mrY",dark_button:"Navigation_dark_button__1JOlD",nav_link:"Navigation_nav_link__2_3uJ",logo:"Navigation_logo__2jNs_",logo_text:"Navigation_logo_text__1q5fi",logo_primary:"Navigation_logo_primary__18r65",logo_secondary:"Navigation_logo_secondary__3d9qJ",dark:"Navigation_dark__3SfxC"}},37424:function(){},41664:function(c,e,r){c.exports=r(92167)}},function(c){var e=function(e){return c(c.s=e)};c.O(0,[774,179],(function(){return e(81780),e(34651)}));var r=c.O();_N_E=r}]);