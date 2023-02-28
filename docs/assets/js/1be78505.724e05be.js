"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9514,9794],{87573:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ce});var n=a(59496),l=a(45924),o=a(51533),r=a(76648),c=a(78702),i=a(95010),s=a(43527),d=a(51101),m=a(91421),u=a(23574),b=a(87615),p=a(72883);const h="backToTopButton_vl3f",E="backToTopButtonShow_iMP6";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(o.current?o.current=!1:n>=r?(c(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var g=a(83442),v=a(57361),k=a(66440),_=a(28125),C=a(15882);function S(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_f4dt",N="collapseSidebarButtonIcon_If2C";function Z(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},n.createElement(S,{className:N}))}var T=a(13046),y=a(40734);const x=Symbol("EmptyContext"),w=n.createContext(x);function A(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(w.Provider,{value:o},t)}var L=a(99080),H=a(69853),F=a(67557),M=a(2533);function P(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function B(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),f=function(e){const t=(0,M.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,o),v=(0,H.Mg)(h,o),{collapsed:_,setCollapsed:S}=(0,L.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,n.useContext)(w);if(e===x)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!_),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,y.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:g,collapsed:_,updateCollapsed:Z}),(0,n.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":_},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},n.createElement(F.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{a?.(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{a?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!_:void 0,href:b?f??"#":f},d),u),h&&b&&n.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),n.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},n.createElement(q,{items:m,tabIndex:_?-1:0,onItemClick:a,activePath:o,level:c+1})))}var R=a(59502),W=a(4541);const D="menuExternalLink_Aac8";function V(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,o),E=(0,R.Z)(m);return n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},n.createElement(F.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!E&&D,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(W.Z,null)))}const z="menuHtmlItem_wCZa";function U(e){let{item:t,level:a,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(a),i&&[z,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function O(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(B,(0,C.Z)({item:t},a));case"html":return n.createElement(U,(0,C.Z)({item:t},a));default:return n.createElement(V,(0,C.Z)({item:t},a))}}function Y(e){let{items:t,...a}=e;return n.createElement(A,null,t.map(((e,t)=>n.createElement(O,(0,C.Z)({key:t,item:e,index:t},a)))))}const q=(0,n.memo)(Y),J="menu_tFJU",K="menuWithAnnouncementBar_Czqu";function j(e){let{path:t,sidebar:a,className:o}=e;const c=function(){const{isActive:e}=(0,T.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",J,c&&K,o)},n.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(q,{items:a,activePath:t,level:1})))}const G="sidebar_PhkO",Q="sidebarWithHideableNavbar_jbiP",X="sidebarHidden_Fc2b",$="sidebarLogo_WA6h";function ee(e){let{path:t,sidebar:a,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,k.L)();return n.createElement("div",{className:(0,l.Z)(G,c&&Q,r&&X)},c&&n.createElement(_.Z,{tabIndex:-1,className:$}),n.createElement(j,{path:t,sidebar:a}),i&&n.createElement(Z,{onClick:o}))}const te=n.memo(ee);var ae=a(92337),ne=a(79093);const le=e=>{let{sidebar:t,path:a}=e;const o=(0,ne.e)();return n.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(q,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function oe(e){return n.createElement(ae.Zo,{component:le,props:e})}const re=n.memo(oe);function ce(e){const t=(0,v.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(te,e),l&&n.createElement(re,e))}const ie="expandButton_LJyH",se="expandButtonIcon_DHZQ";function de(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(S,{className:se}))}const me={docSidebarContainer:"docSidebarContainer_Ovw5",docSidebarContainerHidden:"docSidebarContainerHidden_e4Em",sidebarViewport:"sidebarViewport_v1aS"};function ue(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function be(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,g.TH)(),[i,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return n.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,me.docSidebarContainer,a&&me.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.docSidebarContainer)&&a&&s(!0)}},n.createElement(ue,null,n.createElement("div",{className:(0,l.Z)(me.sidebarViewport,i&&me.sidebarViewportHidden)},n.createElement(ce,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&n.createElement(de,{toggleSidebar:d}))))}const pe={docMainContainer:"docMainContainer_tK0p",docMainContainerEnhanced:"docMainContainerEnhanced_AH5Z",docItemWrapperEnhanced:"docItemWrapperEnhanced_SR29"};function he(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.V)();return n.createElement("main",{className:(0,l.Z)(pe.docMainContainer,(t||!o)&&pe.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},a))}const Ee="docPage_TnPc",fe="docsWrapper_dNmV";function ge(e){let{children:t}=e;const a=(0,d.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:fe},n.createElement(f,null),n.createElement("div",{className:Ee},a&&n.createElement(be,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(he,{hiddenSidebarContainer:l},t)))}var ve=a(89794),ke=a(49575);function _e(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(ke.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ce(e){const{versionMetadata:t}=e,a=(0,i.hI)(e);if(!a)return n.createElement(ve.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(_e,e),n.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(ge,null,c)))))}},89794:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(59496),l=a(23574),o=a(51533),r=a(91421);function c(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);