(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9949],{48165:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(59496),o=n(23574),r=n(76648),l=n(15882),c=n(45924);const s="iconEdit_uHLs";function i(e){let{className:t,...n}=e;return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(i,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},76346:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(15882),o=n(59496),r=n(45924),l=n(23574),c=n(66440),s=n(67557);const i="anchorWithStickyNavbar_YYI8",m="anchorWithHideOnScrollNavbar_FPw8";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return o.createElement(t,(0,a.Z)({},u,{id:void 0}));const p=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return o.createElement(t,(0,a.Z)({},u,{className:(0,r.Z)("anchor",d?m:i,u.className),id:n}),u.children,o.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},27461:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ne});var a=n(59496),o=n(49613),r=n(15882),l=n(83546);var c=n(2533),s=n(45924),i=n(6270),m=n(66440);function u(){const{prism:e}=(0,m.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var d=n(76648),p=n(77226),h=n.n(p);const f=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function b(e,t){const n=e.map((e=>{const{start:n,end:a}=y[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:r}=t;if(r&&g.test(r)){const e=r.match(g).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);default:return b(Object.keys(y),t)}}(a,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:m[t]?s[m[t]].start=p:u[t]&&(s[u[t]].range+=`${s[u[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const d={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const E="codeBlockContainer_Q39K";function k(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,o]=e;const r=t[a];r&&"string"==typeof o&&(n[r]=o)})),n}(u());return a.createElement(t,(0,r.Z)({},n,{style:o,className:(0,s.Z)(n.className,E,d.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_ylE2",codeBlockTitle:"codeBlockTitle_meUi",codeBlock:"codeBlock_WZJc",codeBlockStandalone:"codeBlockStandalone_fU9e",codeBlockLines:"codeBlockLines_fFG6",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_I2oL",buttonGroup:"buttonGroup_owAD"};function C(e){let{children:t,className:n}=e;return a.createElement(k,{as:"pre",tabIndex:0,className:(0,s.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:N.codeBlockLines},t))}var Z=n(40734);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,t){const[n,o]=(0,a.useState)(),r=(0,a.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=B);const o=(0,Z.zX)(t),r=(0,Z.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,r),()=>t.disconnect()}),[e,o,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var w={Prism:n(20999).Z,theme:L};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}var j=/\r\n|\r|\n/,z=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=x({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=x({},n,{backgroundColor:null}),o};function M(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const A=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=x({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?x({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),_(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),_(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=x({},M(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?x({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),_(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],s=[c];l>-1;){for(;(r=a[l]++)<o[l];){var i=void 0,m=t[l],u=n[l][r];if("string"==typeof u?(m=l>0?m:["plain"],i=u):(m=S(m,u.type),u.alias&&(m=S(m,u.alias)),i=u.content),"string"==typeof i){var d=i.split(j),p=d.length;c.push({types:m,content:d[0]});for(var h=1;h<p;h++)z(c),s.push(c=[]),c.push({types:m,content:d[h]})}else l++,t.push(m),n.push(i),a.push(0),o.push(i.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return z(c),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),O="codeLine_t5Pc",P="codeLineNumber_yw3A",H="codeLineContent_LUXk";function D(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:l,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=l({line:t,className:(0,s.Z)(n,o&&O)}),m=t.map(((e,t)=>a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:P}),a.createElement("span",{className:H},m)):m,a.createElement("br",null))}var R=n(23574);const $={copyButtonCopied:"copyButtonCopied_eSS6",copyButtonIcons:"copyButtonIcons_F0OZ",copyButtonIcon:"copyButtonIcon_nTC7",copyButtonSuccessIcon:"copyButtonSuccessIcon_kbzb"};function V(e){let{code:t,className:n}=e;const[o,r]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),o&&o.focus()}(t),r(!0),l.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":o?(0,R.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,R.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,R.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,$.copyButton,o&&$.copyButtonCopied),onClick:c},a.createElement("span",{className:$.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:$.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:$.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const W="wordWrapButtonIcon_OESZ",F="wordWrapButtonEnabled_Dbtw";function U(e){let{className:t,onClick:n,isEnabled:o}=e;const r=(0,R.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&F),"aria-label":r,title:r},a.createElement("svg",{className:W,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function q(e){let{children:t,className:n="",metastring:o,title:l,showLineNumbers:c,language:i}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,m.L)(),h=i??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??d;const g=u(),y=function(){const[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),r=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");o(n)}),[r]);return T(r,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:l}}(),b=function(e){return e?.match(f)?.groups.title??""}(o)||l,{lineClassNames:E,code:C}=v(t,{metastring:o,language:h,magicComments:p}),Z=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return a.createElement(k,{as:"div",className:(0,s.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},b&&a.createElement("div",{className:N.codeBlockTitle},b),a.createElement("div",{className:N.codeBlockContent},a.createElement(A,(0,r.Z)({},w,{theme:g,code:C,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:r}=e;return a.createElement("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,s.Z)(t,N.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,s.Z)(N.codeBlockLines,Z&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(D,{key:t,line:e,getLineProps:o,getTokenProps:r,classNames:E[t],showLineNumbers:Z})))))})),a.createElement("div",{className:N.buttonGroup},(y.isEnabled||y.isCodeScrollable)&&a.createElement(U,{className:N.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),a.createElement(V,{className:N.codeButton,code:C}))))}function G(e){let{children:t,...n}=e;const o=(0,c.Z)(),l=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof l?q:C;return a.createElement(s,(0,r.Z)({key:String(o)},n),l)}var Y=n(67557);var Q=n(99080);const J="details_dPsh",K="isBrowser_BVxP",X="collapsibleContent_Nx24";function ee(e){return!!e&&("SUMMARY"===e.tagName||ee(e.parentElement))}function te(e,t){return!!e&&(e===t||te(e.parentElement,t))}function ne(e){let{summary:t,children:n,...o}=e;const l=(0,c.Z)(),i=(0,a.useRef)(null),{collapsed:m,setCollapsed:u}=(0,Q.u)({initialState:!o.open}),[d,p]=(0,a.useState)(o.open);return a.createElement("details",(0,r.Z)({},o,{ref:i,open:d,"data-collapsed":m,className:(0,s.Z)(J,l&&K,o.className),onMouseDown:e=>{ee(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ee(t)&&te(t,i.current)&&(e.preventDefault(),m?(u(!1),p(!0)):u(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(Q.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),p(!e)}},a.createElement("div",{className:X},n)))}const ae="details_Rf6z";function oe(e){let{...t}=e;return a.createElement(ne,(0,r.Z)({},t,{className:(0,s.Z)("alert alert--info",ae,t.className)}))}var re=n(76346);function le(e){return a.createElement(re.Z,e)}const ce="containsTaskList_Q0lU";const se="img_JkTH";const ie="admonition_qb2F",me="admonitionHeading_BILC",ue="admonitionIcon_si8W",de="admonitionContent_lMaz";const pe={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(R.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(R.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(R.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(R.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(R.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},he={secondary:"note",important:"info",success:"tip",warning:"danger"};function fe(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}var ge=n(25945),ye=n(88328);function be(){const{colorMode:e}=(0,i.I)(),t=(0,m.L)().mermaid,n=t.theme[e],{options:o}=t;return(0,a.useMemo)((()=>({startOnLoad:!1,...o,theme:n})),[n,o])}const ve="container_MklY";function Ee(e){let{value:t}=e;const n=function(e,t){const n=be(),o=t??n;return(0,a.useMemo)((()=>{ye.o.mermaidAPI.initialize(o);const t=`mermaid-svg-${Math.round(1e7*Math.random())}`;return ye.o.render(t,e)}),[e,o])}(t);return a.createElement("div",{className:`docusaurus-mermaid-container ${ve}`,dangerouslySetInnerHTML:{__html:n}})}const ke={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return a.createElement(e.props.originalType,o)}return e}(e):e));return a.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(G,e)},a:function(e){return a.createElement(Y.Z,e)},pre:function(e){return a.createElement(G,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(oe,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,s.Z)(t,t?.includes("contains-task-list")&&ce))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,se))}));var t},h1:e=>a.createElement(le,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(le,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(le,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(le,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(le,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(le,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:r}=fe(e),l=function(e){const t=he[e]??e,n=pe[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),pe.info)}(n),c=o??l.label,{iconComponent:i}=l,m=r??a.createElement(i,null);return a.createElement("div",{className:(0,s.Z)(d.k.common.admonition,d.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,ie)},a.createElement("div",{className:me},a.createElement("span",{className:ue},m),c),a.createElement("div",{className:de},t))},mermaid:function(e){return a.createElement(ge.Z,null,(()=>a.createElement(Ee,e)))}};function Ne(e){let{children:t}=e;return a.createElement(o.Zo,{components:ke},t)}},79780:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(59496),o=n(45924),r=n(67557);function l(e){const{permalink:t,title:n,subLabel:l,isNext:c}=e;return a.createElement(r.Z,{className:(0,o.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}},66356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(59496),o=n(45924),r=n(67557);const l="tag_jyzs",c="tagRegular_Se9o",s="tagWithCount_lHK1";function i(e){let{permalink:t,label:n,count:i}=e;return a.createElement(r.Z,{href:t,className:(0,o.Z)(l,i?s:c)},n,i&&a.createElement("span",null,i))}},19941:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(59496),o=n(45924),r=n(23574),l=n(66356);const c="tags_fWLU",s="tag_d7L_";function i(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,o.Z)(c,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:s},a.createElement(l.Z,{label:t,permalink:n}))}))))}},77226:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);