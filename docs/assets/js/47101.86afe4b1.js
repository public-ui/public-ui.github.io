"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[47101],{16030:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(50959),r=a(45924),n=a(38939),o=a(55762),s=a(86621),i=a(81790);const m={sidebar:"sidebar_Oljh",sidebarItemTitle:"sidebarItemTitle_BuvV",sidebarItemList:"sidebarItemList_OntG",sidebarItem:"sidebarItem_O5P0",sidebarItemLink:"sidebarItemLink_QsW6",sidebarItemLinkActive:"sidebarItemLinkActive_KIkJ"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(53758);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return l.createElement(n.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},75122:(e,t,a)=>{a.d(t,{Z:()=>A});var l=a(50959),r=a(45924),n=a(78662),o=a(10026);function s(e){let{children:t,className:a}=e;const{frontMatter:r,assets:s,metadata:{description:i}}=(0,n.C)(),{withBaseUrl:m}=(0,o.C)(),c=s.image??r.image,u=r.keywords??[];return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&l.createElement("meta",{itemProp:"description",content:i}),c&&l.createElement("link",{itemProp:"image",href:m(c,{absolute:!0})}),u.length>0&&l.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}var i=a(86621);const m={title:"title_W23E"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,n.C)(),{permalink:s,title:c}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,r.Z)(m.title,t),itemProp:"headline"},o?c:l.createElement(i.Z,{itemProp:"url",to:s},c))}var u=a(81790),d=a(17501);const g={container:"container_L2SN"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:o,formattedDate:s,readingTime:i}=a;return l.createElement("div",{className:(0,r.Z)(g.container,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:s}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:i})))}function f(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:n,title:o,url:s,imageURL:i,email:m}=t,c=s||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},i&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:n,itemProp:"image"})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P={authorCol:"authorCol_EXuD",imageOnlyAuthorRow:"imageOnlyAuthorRow_W974",imageOnlyAuthorCol:"imageOnlyAuthorCol_BJuj"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function k(){return l.createElement("header",null,l.createElement(c,null),l.createElement(b,null),l.createElement(N,null))}var _=a(81451),Z=a(41820);function I(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,n.C)();return l.createElement("div",{id:o?_.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody"},l.createElement(Z.Z,null,t))}var C=a(22145),w=a(4270),y=a(52319);function T(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.Z,(0,y.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(T,null))}const L={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_SByD"};function B(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,m=!t&&i,c=a.length>0;return c||m||s?l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&L.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":m})},l.createElement(w.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(C.Z,{editUrl:s})),m&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":c})},l.createElement(F,{blogPostTitle:o,to:e.permalink}))):null}function A(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,r.Z)(o,a)},l.createElement(k,null),l.createElement(I,null,t),l.createElement(B,null))}},78662:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(50959),r=a(83312);const n=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return l.createElement(n.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(n);if(null===e)throw new r.i6("BlogPostProvider");return e}},17501:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(50959),r=a(68418);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);