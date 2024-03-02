(self.webpackChunkroot=self.webpackChunkroot||[]).push([[60588],{65953:(e,t,n)=>{"use strict";n.d(t,{c:()=>E});var s=n(96651),c=n(2488);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:o.length>0?(0,c.jsx)(c.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var a=n(95880),r=n(27788),i=n(83112);const l={admonition:"admonition_hMqG",admonitionHeading:"admonitionHeading_olhK",admonitionIcon:"admonitionIcon_hkGp",admonitionContent:"admonitionContent_Jgf2"};function d(e){let{type:t,className:n,children:s}=e;return(0,c.jsx)("div",{className:(0,a.c)(i.W.common.admonition,i.W.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,c.jsxs)("div",{className:l.admonitionHeading,children:[(0,c.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,c.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:a}=e;return(0,c.jsxs)(d,{type:t,className:a,children:[(0,c.jsx)(u,{title:s,icon:n}),(0,c.jsx)(m,{children:o})]})}function f(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,c.jsx)(f,{}),title:(0,c.jsx)(r.c,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,c.jsx)(h,{...p,...e,className:(0,a.c)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,c.jsx)(x,{}),title:(0,c.jsx)(r.c,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,c.jsx)(h,{...j,...e,className:(0,a.c)("alert alert--success",e.className),children:e.children})}function v(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,c.jsx)(v,{}),title:(0,c.jsx)(r.c,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,c.jsx)(h,{...N,...e,className:(0,a.c)("alert alert--info",e.className),children:e.children})}function y(e){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const B={icon:(0,c.jsx)(y,{}),title:(0,c.jsx)(r.c,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,c.jsx)(C,{}),title:(0,c.jsx)(r.c,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const L={icon:(0,c.jsx)(y,{}),title:(0,c.jsx)(r.c,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:g,tip:b,info:k,warning:function(e){return(0,c.jsx)(h,{...B,...e,className:(0,a.c)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,c.jsx)(h,{...w,...e,className:(0,a.c)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,c.jsx)(g,{title:"secondary",...e}),important:e=>(0,c.jsx)(k,{title:"important",...e}),success:e=>(0,c.jsx)(b,{title:"success",...e}),caution:function(e){return(0,c.jsx)(h,{...L,...e,className:(0,a.c)("alert alert--warning",e.className),children:e.children})}}};function E(e){const t=o(e),n=(s=t.type,_[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),_.info));var s;return(0,c.jsx)(n,{...t})}},14420:(e,t,n)=>{"use strict";n.d(t,{c:()=>d});n(96651);var s=n(27788),c=n(83112),o=n(3080),a=n(95880);const r={iconEdit:"iconEdit_odMA"};var i=n(2488);function l(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.c)(r.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,i.jsxs)(o.c,{to:t,className:c.W.common.editThisPage,children:[(0,i.jsx)(l,{}),(0,i.jsx)(s.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},81447:(e,t,n)=>{"use strict";n.d(t,{c:()=>ge});var s=n(96651),c=n(16592),o=n(71936),a=n(42408),r=n(95880),i=n(33376),l=n(36736);function d(){const{prism:e}=(0,l.y)(),{colorMode:t}=(0,i.U)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(83112),m=n(54400),h=n.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},x={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},j=Object.keys(g);function b(e,t){const n=e.map((e=>{const{start:n,end:s}=x[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:c,metastring:o}=t;if(o&&p.test(o)){const e=o.match(p).groups.range;if(0===c.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=c[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);case"vb":case"vba":case"visual-basic":return b(["vb","rem"],t);case"vbnet":return b(["vbnet","rem"],t);case"batch":return b(["rem"],t);case"basic":return b(["rem","f90"],t);case"fsharp":return b(["js","ml"],t);case"ocaml":case"sml":return b(["ml"],t);case"fortran":return b(["f90"],t);case"cobol":return b(["cobol"],t);default:return b(j,t)}}(s,c),r=n.split("\n"),i=Object.fromEntries(c.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(c.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<r.length;){const e=r[h].match(a);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${h},`:d[t]?i[d[t]].start=h:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${h-1},`),r.splice(h,1)}n=r.join("\n");const m={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const N={codeBlockContainer:"codeBlockContainer_EBiL"};var k=n(2488);function y(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,c]=e;const o=t[s];o&&"string"==typeof c&&(n[o]=c)})),n}(d());return(0,k.jsx)(t,{...n,style:s,className:(0,r.c)(n.className,N.codeBlockContainer,u.W.common.codeBlock)})}const B={codeBlockContent:"codeBlockContent_yZJY",codeBlockTitle:"codeBlockTitle_GjwO",codeBlock:"codeBlock_Gwgi",codeBlockStandalone:"codeBlockStandalone_SNYB",codeBlockLines:"codeBlockLines_ang_",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_qYbo",buttonGroup:"buttonGroup_QU1C"};function C(e){let{children:t,className:n}=e;return(0,k.jsx)(y,{as:"pre",tabIndex:0,className:(0,r.c)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:B.codeBlockLines,children:t})})}var w=n(95760);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,c]=(0,s.useState)(),o=(0,s.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=L);const c=(0,w.yA)(t),o=(0,w.Mh)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,o),()=>t.disconnect()}),[e,c,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(86688);const T={codeLine:"codeLine_ktAF",codeLineNumber:"codeLineNumber_PhiH",codeLineContent:"codeLineContent_QvOt"};function A(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:c,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=c({line:t,className:(0,r.c)(n,s&&T.codeLine)}),i=t.map(((e,t)=>(0,k.jsx)("span",{...o({token:e,key:t})},t)));return(0,k.jsxs)("span",{...a,children:[s?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:T.codeLineNumber}),(0,k.jsx)("span",{className:T.codeLineContent,children:i})]}):i,(0,k.jsx)("br",{})]})}var M=n(27788);function I(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const z={copyButtonCopied:"copyButtonCopied__B4V",copyButtonIcons:"copyButtonIcons_CYe_",copyButtonIcon:"copyButtonIcon_iYTD",copyButtonSuccessIcon:"copyButtonSuccessIcon_Sbz4"};function R(e){let{code:t,className:n}=e;const[c,o]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),i=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),c=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),a=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}s.remove(),a&&(o.removeAllRanges(),o.addRange(a)),c&&c.focus()}(t),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":c?(0,M.G)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.G)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.G)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.c)("clean-btn",n,z.copyButton,c&&z.copyButtonCopied),onClick:i,children:(0,k.jsxs)("span",{className:z.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(I,{className:z.copyButtonIcon}),(0,k.jsx)(S,{className:z.copyButtonSuccessIcon})]})})}function H(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const W={wordWrapButtonIcon:"wordWrapButtonIcon_rT9k",wordWrapButtonEnabled:"wordWrapButtonEnabled_Z4L3"};function $(e){let{className:t,onClick:n,isEnabled:s}=e;const c=(0,M.G)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,r.c)("clean-btn",t,s&&W.wordWrapButtonEnabled),"aria-label":c,title:c,children:(0,k.jsx)(H,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function V(e){let{children:t,className:n="",metastring:c,title:o,showLineNumbers:a,language:i}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.y)(),h=function(e){return e?.toLowerCase()}(i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),p=d(),g=function(){const[e,t]=(0,s.useState)(!1),[n,c]=(0,s.useState)(!1),o=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");c(n)}),[o]);return _(o,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:a}}(),x=function(e){return e?.match(f)?.groups.title??""}(c)||o,{lineClassNames:j,code:b}=v(t,{metastring:c,language:h,magicComments:m}),N=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(c);return(0,k.jsxs)(y,{as:"div",className:(0,r.c)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[x&&(0,k.jsx)("div",{className:B.codeBlockTitle,children:x}),(0,k.jsxs)("div",{className:B.codeBlockContent,children:[(0,k.jsx)(E.gl,{theme:p,code:b,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:c,getTokenProps:o}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,r.c)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,k.jsx)("code",{className:(0,r.c)(B.codeBlockLines,N&&B.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,k.jsx)(A,{line:e,getLineProps:c,getTokenProps:o,classNames:j[t],showLineNumbers:N},t)))})})}}),(0,k.jsxs)("div",{className:B.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,k.jsx)($,{className:B.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,k.jsx)(R,{className:B.codeButton,code:b})]})]})]})}function O(e){let{children:t,...n}=e;const c=(0,a.c)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof o?V:C;return(0,k.jsx)(r,{...n,children:o},String(c))}function G(e){return(0,k.jsx)("code",{...e})}var P=n(3080);var q=n(4080),D=n(91e3);const F={details:"details_E8qL",isBrowser:"isBrowser_xb2I",collapsibleContent:"collapsibleContent_uVi0"};function U(e){return!!e&&("SUMMARY"===e.tagName||U(e.parentElement))}function Y(e,t){return!!e&&(e===t||Y(e.parentElement,t))}function Z(e){let{summary:t,children:n,...c}=e;(0,q.c)().collectAnchor(c.id);const o=(0,a.c)(),i=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,D.a)({initialState:!c.open}),[u,m]=(0,s.useState)(c.open),h=s.isValidElement(t)?t:(0,k.jsx)("summary",{children:t??"Details"});return(0,k.jsxs)("details",{...c,ref:i,open:u,"data-collapsed":l,className:(0,r.c)(F.details,o&&F.isBrowser,c.className),onMouseDown:e=>{U(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;U(t)&&Y(t,i.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,k.jsx)(D.U,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,k.jsx)("div",{className:F.collapsibleContent,children:n})})]})}const K={details:"details_IbTk"},J="alert alert--info";function Q(e){let{...t}=e;return(0,k.jsx)(Z,{...t,className:(0,r.c)(J,K.details,t.className)})}function X(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),c=(0,k.jsx)(k.Fragment,{children:t.filter((e=>e!==n))});return(0,k.jsx)(Q,{...e,summary:n,children:c})}var ee=n(23188);function te(e){return(0,k.jsx)(ee.c,{...e})}const ne={containsTaskList:"containsTaskList_AkV8"};function se(e){if(void 0!==e)return(0,r.c)(e,e?.includes("contains-task-list")&&ne.containsTaskList)}const ce={img:"img_jIZT"};var oe=n(65953),ae=n(6544),re=n(7528),ie=n(93926);const le="docusaurus-mermaid-container";function de(){const{colorMode:e}=(0,i.U)(),t=(0,l.y)().mermaid,n=t.theme[e],{options:c}=t;return(0,s.useMemo)((()=>({startOnLoad:!1,...c,theme:n})),[n,c])}function ue(e){let{text:t,config:n}=e;const[c,o]=(0,s.useState)(null),a=(0,s.useRef)(`mermaid-svg-${Math.round(1e7*Math.random())}`).current,r=de(),i=n??r;return(0,s.useEffect)((()=>{(async function(e){let{id:t,text:n,config:s}=e;ie.K.mermaidAPI.initialize(s);try{return await ie.K.render(t,n)}catch(c){throw document.querySelector(`#d${t}`)?.remove(),c}})({id:a,text:t,config:i}).then(o).catch((e=>{o((()=>{throw e}))}))}),[a,t,i]),c}const me={container:"container_OT1n"};function he(e){let{renderResult:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;t.bindFunctions?.(e)}),[t]),(0,k.jsx)("div",{ref:n,className:`${le} ${me.container}`,dangerouslySetInnerHTML:{__html:t.svg}})}function fe(e){let{value:t}=e;const n=ue({text:t});return null===n?null:(0,k.jsx)(he,{renderResult:n})}const pe={Head:o.c,details:X,Details:X,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,k.jsx)(G,{...e}):(0,k.jsx)(O,{...e})},a:function(e){return(0,k.jsx)(P.c,{...e})},pre:function(e){return(0,k.jsx)(k.Fragment,{children:e.children})},ul:function(e){return(0,k.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,q.c)().collectAnchor(e.id),(0,k.jsx)("li",{...e})},img:function(e){return(0,k.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,r.c)(t,ce.img))});var t},h1:e=>(0,k.jsx)(te,{as:"h1",...e}),h2:e=>(0,k.jsx)(te,{as:"h2",...e}),h3:e=>(0,k.jsx)(te,{as:"h3",...e}),h4:e=>(0,k.jsx)(te,{as:"h4",...e}),h5:e=>(0,k.jsx)(te,{as:"h5",...e}),h6:e=>(0,k.jsx)(te,{as:"h6",...e}),admonition:oe.c,mermaid:function(e){return(0,k.jsx)(ae.c,{fallback:e=>(0,k.jsx)(re.Ij,{...e}),children:(0,k.jsx)(fe,{...e})})}};function ge(e){let{children:t}=e;return(0,k.jsx)(c.I,{components:pe,children:t})}},97172:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});n(96651);var s=n(95880),c=n(3080),o=n(2488);function a(e){const{permalink:t,title:n,subLabel:a,isNext:r}=e;return(0,o.jsxs)(c.c,{className:(0,s.c)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}},86184:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});n(96651);var s=n(95880),c=n(3080);const o={tag:"tag_XZKp",tagRegular:"tagRegular_IA6z",tagWithCount:"tagWithCount_FyWu"};var a=n(2488);function r(e){let{permalink:t,label:n,count:r}=e;return(0,a.jsxs)(c.c,{href:t,className:(0,s.c)(o.tag,r?o.tagWithCount:o.tagRegular),children:[n,r&&(0,a.jsx)("span",{children:r})]})}},94096:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});n(96651);var s=n(95880),c=n(27788),o=n(86184);const a={tags:"tags_B9ge",tag:"tag_JMVp"};var r=n(2488);function i(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(c.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.c)(a.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,r.jsx)("li",{className:a.tag,children:(0,r.jsx)(o.c,{label:t,permalink:n})},n)}))})]})}},54400:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,c,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==c&&".."!==c&&"\u2025"!==c||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);