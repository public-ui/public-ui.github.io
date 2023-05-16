(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6103],{11393:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var s=n(50959),a=n(45924),r=n(89185),l=n(31782),o=n(27487),i=n(3388),c=n(84913),m=n(15882),j=n(41818),u=n(37011);function d(e){const{nextItem:t,prevItem:n}=e;return s.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,j.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&s.createElement(u.Z,(0,m.Z)({},n,{subLabel:s.createElement(j.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&s.createElement(u.Z,(0,m.Z)({},t,{subLabel:s.createElement(j.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,o.C)(),{title:n,description:a,date:l,tags:i,authors:c,frontMatter:m}=t,{keywords:j}=m,u=e.image??m.image;return s.createElement(r.d,{title:n,description:a,keywords:j,image:u},s.createElement("meta",{property:"og:type",content:"article"}),s.createElement("meta",{property:"article:published_time",content:l}),c.some((e=>e.url))&&s.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&s.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var g=n(36706);function h(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:r}=(0,o.C)(),{nextItem:l,prevItem:m,frontMatter:j}=a,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:h}=j;return s.createElement(i.Z,{sidebar:t,toc:!u&&r.length>0?s.createElement(g.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:h}):void 0},s.createElement(c.Z,null,n),(l||m)&&s.createElement(d,{nextItem:l,prevItem:m}))}function v(e){const t=e.content;return s.createElement(o.n,{content:e.content,isBlogPostPage:!0},s.createElement(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},s.createElement(f,null),s.createElement(h,{sidebar:e.sidebar},s.createElement(t,null))))}},36706:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var s=n(15882),a=n(50959),r=n(45924),l=n(22298);const o={tableOfContents:"tableOfContents_Md2f",docItemContainer:"docItemContainer_jjLn"},i="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(o.tableOfContents,"thin-scrollbar",t)},a.createElement(l.Z,(0,s.Z)({},n,{linkClassName:i,linkActiveClassName:c})))}},22298:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var s=n(15882),a=n(50959),r=n(88196);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>i(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function j(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),i=c(o,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:s,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:s}))))):null}const d=a.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const g=(0,r.L)(),h=m??g.tableOfContents.minHeadingLevel,v=u??g.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return j((0,a.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:v}}),[i,c,h,v])),a.createElement(d,(0,s.Z)({toc:b,className:n,linkClassName:i},f))}},38660:(e,t,n)=>{var s={"./af":28163,"./af.js":28163,"./ar":70096,"./ar-dz":50005,"./ar-dz.js":50005,"./ar-kw":16042,"./ar-kw.js":16042,"./ar-ly":43183,"./ar-ly.js":43183,"./ar-ma":35656,"./ar-ma.js":35656,"./ar-sa":32343,"./ar-sa.js":32343,"./ar-tn":23815,"./ar-tn.js":23815,"./ar.js":70096,"./az":62320,"./az.js":62320,"./be":32204,"./be.js":32204,"./bg":94994,"./bg.js":94994,"./bm":93556,"./bm.js":93556,"./bn":85853,"./bn-bd":48735,"./bn-bd.js":48735,"./bn.js":85853,"./bo":44547,"./bo.js":44547,"./br":29491,"./br.js":29491,"./bs":33046,"./bs.js":33046,"./ca":20568,"./ca.js":20568,"./cs":46889,"./cs.js":46889,"./cv":7267,"./cv.js":7267,"./cy":24362,"./cy.js":24362,"./da":34133,"./da.js":34133,"./de":44268,"./de-at":28288,"./de-at.js":28288,"./de-ch":42916,"./de-ch.js":42916,"./de.js":44268,"./dv":39938,"./dv.js":39938,"./el":51336,"./el.js":51336,"./en-au":62902,"./en-au.js":62902,"./en-ca":70270,"./en-ca.js":70270,"./en-gb":48554,"./en-gb.js":48554,"./en-ie":95733,"./en-ie.js":95733,"./en-il":71910,"./en-il.js":71910,"./en-in":1697,"./en-in.js":1697,"./en-nz":48158,"./en-nz.js":48158,"./en-sg":88683,"./en-sg.js":88683,"./eo":61190,"./eo.js":61190,"./es":19327,"./es-do":46495,"./es-do.js":46495,"./es-mx":97130,"./es-mx.js":97130,"./es-us":63738,"./es-us.js":63738,"./es.js":19327,"./et":19477,"./et.js":19477,"./eu":1817,"./eu.js":1817,"./fa":77570,"./fa.js":77570,"./fi":51753,"./fi.js":51753,"./fil":39975,"./fil.js":39975,"./fo":10756,"./fo.js":10756,"./fr":79876,"./fr-ca":32951,"./fr-ca.js":32951,"./fr-ch":43803,"./fr-ch.js":43803,"./fr.js":79876,"./fy":53470,"./fy.js":53470,"./ga":31347,"./ga.js":31347,"./gd":72624,"./gd.js":72624,"./gl":93758,"./gl.js":93758,"./gom-deva":22327,"./gom-deva.js":22327,"./gom-latn":97089,"./gom-latn.js":97089,"./gu":60929,"./gu.js":60929,"./he":4438,"./he.js":4438,"./hi":57746,"./hi.js":57746,"./hr":85893,"./hr.js":85893,"./hu":55169,"./hu.js":55169,"./hy-am":60394,"./hy-am.js":60394,"./id":34171,"./id.js":34171,"./is":28435,"./is.js":28435,"./it":22412,"./it-ch":33640,"./it-ch.js":33640,"./it.js":22412,"./ja":76261,"./ja.js":76261,"./jv":2826,"./jv.js":2826,"./ka":9887,"./ka.js":9887,"./kk":16262,"./kk.js":16262,"./km":95730,"./km.js":95730,"./kn":55773,"./kn.js":55773,"./ko":91206,"./ko.js":91206,"./ku":20571,"./ku.js":20571,"./ky":67971,"./ky.js":67971,"./lb":75817,"./lb.js":75817,"./lo":93863,"./lo.js":93863,"./lt":20610,"./lt.js":20610,"./lv":55147,"./lv.js":55147,"./me":53827,"./me.js":53827,"./mi":90358,"./mi.js":90358,"./mk":88489,"./mk.js":88489,"./ml":72930,"./ml.js":72930,"./mn":97248,"./mn.js":97248,"./mr":98619,"./mr.js":98619,"./ms":98583,"./ms-my":30810,"./ms-my.js":30810,"./ms.js":98583,"./mt":53425,"./mt.js":53425,"./my":72319,"./my.js":72319,"./nb":37866,"./nb.js":37866,"./ne":57630,"./ne.js":57630,"./nl":96940,"./nl-be":34037,"./nl-be.js":34037,"./nl.js":96940,"./nn":34411,"./nn.js":34411,"./oc-lnc":21584,"./oc-lnc.js":21584,"./pa-in":24633,"./pa-in.js":24633,"./pl":54390,"./pl.js":54390,"./pt":95040,"./pt-br":54013,"./pt-br.js":54013,"./pt.js":95040,"./ro":12338,"./ro.js":12338,"./ru":9874,"./ru.js":9874,"./sd":34992,"./sd.js":34992,"./se":28076,"./se.js":28076,"./si":22737,"./si.js":22737,"./sk":83699,"./sk.js":83699,"./sl":44565,"./sl.js":44565,"./sq":35255,"./sq.js":35255,"./sr":95098,"./sr-cyrl":3830,"./sr-cyrl.js":3830,"./sr.js":95098,"./ss":19587,"./ss.js":19587,"./sv":34285,"./sv.js":34285,"./sw":13065,"./sw.js":13065,"./ta":52703,"./ta.js":52703,"./te":90618,"./te.js":90618,"./tet":19035,"./tet.js":19035,"./tg":45334,"./tg.js":45334,"./th":41853,"./th.js":41853,"./tk":37250,"./tk.js":37250,"./tl-ph":50704,"./tl-ph.js":50704,"./tlh":1866,"./tlh.js":1866,"./tr":81299,"./tr.js":81299,"./tzl":35885,"./tzl.js":35885,"./tzm":21370,"./tzm-latn":11878,"./tzm-latn.js":11878,"./tzm.js":21370,"./ug-cn":95521,"./ug-cn.js":95521,"./uk":63646,"./uk.js":63646,"./ur":16237,"./ur.js":16237,"./uz":90519,"./uz-latn":23225,"./uz-latn.js":23225,"./uz.js":90519,"./vi":31153,"./vi.js":31153,"./x-pseudo":77210,"./x-pseudo.js":77210,"./yo":13086,"./yo.js":13086,"./zh-cn":53933,"./zh-cn.js":53933,"./zh-hk":45749,"./zh-hk.js":45749,"./zh-mo":51044,"./zh-mo.js":51044,"./zh-tw":13759,"./zh-tw.js":13759};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=38660}}]);