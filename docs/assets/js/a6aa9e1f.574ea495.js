(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3089],{55404:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d});var n=t(50959),a=t(45924),j=t(61084),r=t(89185),l=t(31782),i=t(3388),o=t(77885),m=t(18870),c=t(24605);function u(e){const{metadata:s}=e,{siteConfig:{title:t}}=(0,j.Z)(),{blogDescription:a,blogTitle:l,permalink:i}=s,o="/"===i?t:l;return n.createElement(n.Fragment,null,n.createElement(r.d,{title:o,description:a}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:s,items:t,sidebar:a}=e;return n.createElement(i.Z,{sidebar:a},n.createElement(c.Z,{items:t}),n.createElement(o.Z,{metadata:s}))}function d(e){return n.createElement(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogListPage)},n.createElement(u,e),n.createElement(g,e))}},77885:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var n=t(50959),a=t(41818),j=t(37011);function r(e){const{metadata:s}=e,{previousPage:t,nextPage:r}=s;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},t&&n.createElement(j.Z,{permalink:t,title:n.createElement(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&n.createElement(j.Z,{permalink:r,title:n.createElement(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},24605:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var n=t(50959),a=t(27487),j=t(84913);function r(e){let{items:s,component:t=j.Z}=e;return n.createElement(n.Fragment,null,s.map((e=>{let{content:s}=e;return n.createElement(a.n,{key:s.metadata.permalink,content:s},n.createElement(t,null,n.createElement(s,null)))})))}},38660:(e,s,t)=>{var n={"./af":28163,"./af.js":28163,"./ar":70096,"./ar-dz":50005,"./ar-dz.js":50005,"./ar-kw":16042,"./ar-kw.js":16042,"./ar-ly":43183,"./ar-ly.js":43183,"./ar-ma":35656,"./ar-ma.js":35656,"./ar-sa":32343,"./ar-sa.js":32343,"./ar-tn":23815,"./ar-tn.js":23815,"./ar.js":70096,"./az":62320,"./az.js":62320,"./be":32204,"./be.js":32204,"./bg":94994,"./bg.js":94994,"./bm":93556,"./bm.js":93556,"./bn":85853,"./bn-bd":48735,"./bn-bd.js":48735,"./bn.js":85853,"./bo":44547,"./bo.js":44547,"./br":29491,"./br.js":29491,"./bs":33046,"./bs.js":33046,"./ca":20568,"./ca.js":20568,"./cs":46889,"./cs.js":46889,"./cv":7267,"./cv.js":7267,"./cy":24362,"./cy.js":24362,"./da":34133,"./da.js":34133,"./de":44268,"./de-at":28288,"./de-at.js":28288,"./de-ch":42916,"./de-ch.js":42916,"./de.js":44268,"./dv":39938,"./dv.js":39938,"./el":51336,"./el.js":51336,"./en-au":62902,"./en-au.js":62902,"./en-ca":70270,"./en-ca.js":70270,"./en-gb":48554,"./en-gb.js":48554,"./en-ie":95733,"./en-ie.js":95733,"./en-il":71910,"./en-il.js":71910,"./en-in":1697,"./en-in.js":1697,"./en-nz":48158,"./en-nz.js":48158,"./en-sg":88683,"./en-sg.js":88683,"./eo":61190,"./eo.js":61190,"./es":19327,"./es-do":46495,"./es-do.js":46495,"./es-mx":97130,"./es-mx.js":97130,"./es-us":63738,"./es-us.js":63738,"./es.js":19327,"./et":19477,"./et.js":19477,"./eu":1817,"./eu.js":1817,"./fa":77570,"./fa.js":77570,"./fi":51753,"./fi.js":51753,"./fil":39975,"./fil.js":39975,"./fo":10756,"./fo.js":10756,"./fr":79876,"./fr-ca":32951,"./fr-ca.js":32951,"./fr-ch":43803,"./fr-ch.js":43803,"./fr.js":79876,"./fy":53470,"./fy.js":53470,"./ga":31347,"./ga.js":31347,"./gd":72624,"./gd.js":72624,"./gl":93758,"./gl.js":93758,"./gom-deva":22327,"./gom-deva.js":22327,"./gom-latn":97089,"./gom-latn.js":97089,"./gu":60929,"./gu.js":60929,"./he":4438,"./he.js":4438,"./hi":57746,"./hi.js":57746,"./hr":85893,"./hr.js":85893,"./hu":55169,"./hu.js":55169,"./hy-am":60394,"./hy-am.js":60394,"./id":34171,"./id.js":34171,"./is":28435,"./is.js":28435,"./it":22412,"./it-ch":33640,"./it-ch.js":33640,"./it.js":22412,"./ja":76261,"./ja.js":76261,"./jv":2826,"./jv.js":2826,"./ka":9887,"./ka.js":9887,"./kk":16262,"./kk.js":16262,"./km":95730,"./km.js":95730,"./kn":55773,"./kn.js":55773,"./ko":91206,"./ko.js":91206,"./ku":20571,"./ku.js":20571,"./ky":67971,"./ky.js":67971,"./lb":75817,"./lb.js":75817,"./lo":93863,"./lo.js":93863,"./lt":20610,"./lt.js":20610,"./lv":55147,"./lv.js":55147,"./me":53827,"./me.js":53827,"./mi":90358,"./mi.js":90358,"./mk":88489,"./mk.js":88489,"./ml":72930,"./ml.js":72930,"./mn":97248,"./mn.js":97248,"./mr":98619,"./mr.js":98619,"./ms":98583,"./ms-my":30810,"./ms-my.js":30810,"./ms.js":98583,"./mt":53425,"./mt.js":53425,"./my":72319,"./my.js":72319,"./nb":37866,"./nb.js":37866,"./ne":57630,"./ne.js":57630,"./nl":96940,"./nl-be":34037,"./nl-be.js":34037,"./nl.js":96940,"./nn":34411,"./nn.js":34411,"./oc-lnc":21584,"./oc-lnc.js":21584,"./pa-in":24633,"./pa-in.js":24633,"./pl":54390,"./pl.js":54390,"./pt":95040,"./pt-br":54013,"./pt-br.js":54013,"./pt.js":95040,"./ro":12338,"./ro.js":12338,"./ru":9874,"./ru.js":9874,"./sd":34992,"./sd.js":34992,"./se":28076,"./se.js":28076,"./si":22737,"./si.js":22737,"./sk":83699,"./sk.js":83699,"./sl":44565,"./sl.js":44565,"./sq":35255,"./sq.js":35255,"./sr":95098,"./sr-cyrl":3830,"./sr-cyrl.js":3830,"./sr.js":95098,"./ss":19587,"./ss.js":19587,"./sv":34285,"./sv.js":34285,"./sw":13065,"./sw.js":13065,"./ta":52703,"./ta.js":52703,"./te":90618,"./te.js":90618,"./tet":19035,"./tet.js":19035,"./tg":45334,"./tg.js":45334,"./th":41853,"./th.js":41853,"./tk":37250,"./tk.js":37250,"./tl-ph":50704,"./tl-ph.js":50704,"./tlh":1866,"./tlh.js":1866,"./tr":81299,"./tr.js":81299,"./tzl":35885,"./tzl.js":35885,"./tzm":21370,"./tzm-latn":11878,"./tzm-latn.js":11878,"./tzm.js":21370,"./ug-cn":95521,"./ug-cn.js":95521,"./uk":63646,"./uk.js":63646,"./ur":16237,"./ur.js":16237,"./uz":90519,"./uz-latn":23225,"./uz-latn.js":23225,"./uz.js":90519,"./vi":31153,"./vi.js":31153,"./x-pseudo":77210,"./x-pseudo.js":77210,"./yo":13086,"./yo.js":13086,"./zh-cn":53933,"./zh-cn.js":53933,"./zh-hk":45749,"./zh-hk.js":45749,"./zh-mo":51044,"./zh-mo.js":51044,"./zh-tw":13759,"./zh-tw.js":13759};function a(e){var s=j(e);return t(s)}function j(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=j,e.exports=a,a.id=38660}}]);