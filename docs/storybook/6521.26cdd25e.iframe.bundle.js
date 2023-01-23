"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6521],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(T,S,p)=>{p.d(S,{a:()=>u,b:()=>v,c:()=>n,d:()=>h,e:()=>l,f:()=>O,u:()=>s});var b=p("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const m=new Set,l=c=>{m.has(c)===!1&&(m.add(c),b.L.info(c,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},g=new Set,v=c=>{g.has(c)===!1&&(g.add(c),b.L.warn(c,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},_=new Set,h=c=>{_.has(c)===!1&&(_.add(c),b.L.debug(c,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,O=(c,x=!1)=>{d.has(c)===!1&&(d.add(c),c+=x===!0?" \u2705":"",b.L.debug(c,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};h("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const k=new Set,j=c=>{k.has(c)===!1&&(k.add(c),Log.debug(c,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},n=()=>{l(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},u=c=>{typeof c=="string"&&c!==""||l(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},s=(c,x=8)=>{var L;x>7&&(L=`[${c}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,k.has(L)===!1&&(k.add(L),b.L.debug(L,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/button-link-7b1c4be0.js":(T,S,p)=>{p.d(S,{w:()=>m});var b=p("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const m=(l,g,v)=>{(0,b.a)(l,g,_=>_==="top"||_==="right"||_==="bottom"||_==="left",new Set(["TooltipAlignment {top, right, buttom, left}"]),v,{defaultValue:"top"})}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(T,S,p)=>{p.d(S,{f:()=>j,s:()=>k});/*!
 * KoliBri - The accessible HTML-Standard
 */var b=.2126,m=.7152,l=.0722,g=1/12.92;function v(n){return Math.pow((n+.055)/1.055,2.4)}function _(n){var u=n[0]/255,s=n[1]/255,c=n[2]/255,x=u<=.03928?u*g:v(u),L=s<=.03928?s*g:v(s),C=c<=.03928?c*g:v(c);return x*b+L*m+C*l}function h(n){var u=255;(n=n.replace(/^#/,"")).length===8&&(u=parseInt(n.slice(6,8),16),n=n.substring(0,6)),n.length===4&&(u=parseInt(n.slice(3,4).repeat(2),16),n=n.substring(0,3)),n.length===3&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var s=parseInt(n,16);return[s>>16,s>>8&255,255&s,u]}function d(n,u){return(Math.max(n,u)+.05)/(Math.min(n,u)+.05)}function O(n,u){return d(_(n),_(u))}function k(n,u){return O(h(n),h(u))}function j(n){return n>=7?"AAA":n>=4.5?"AA":n>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/label-59d375aa.js":(T,S,p)=>{p.d(S,{a:()=>_,v:()=>v});var b=p("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),m=p("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js"),l=p("./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const g=(h,d,O,k)=>{const j=d.has("_ariaLabel")?d.get("_ariaLabel"):O.state._ariaLabel;if(typeof j=="string"){const n=d.has("_label")?d.get("_label"):O.state._label;(0,l.c)(n,j)===!1&&(k==="_ariaLabel"?d.set("_label",j):d.set("_ariaLabel",n),(0,b.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xFCndern der Barrierefreiheit f\xFCr die Sprachsteuerung mit dem Label-Text beginnen."))}},v=(h,d)=>{(0,m.w)(h,"_ariaLabel",d,{hooks:{beforePatch:g}})},_=(h,d)=>{(0,m.w)(h,"_label",d,{hooks:{beforePatch:g},required:!0})}},"./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js":(T,S,p)=>{p.d(S,{K:()=>D,a:()=>B,b:()=>ge,c:()=>ve,d:()=>_e,e:()=>he,f:()=>q,g:()=>V,h:()=>te,i:()=>Ae,j:()=>E,k:()=>U,l:()=>W,m:()=>Ee,n:()=>Z,o:()=>R,p:()=>z,q:()=>X,r:()=>d,s:()=>I,t:()=>F,w:()=>be});var b=p("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),m=p("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),l=p("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),g=p("./node_modules/@public-ui/components/dist/esm/index-d870d3e1.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const v=(e,t)=>{t.forEach(r=>{e.has(r)===!1&&e.add(r)})},_=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;v(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let a=0;a<o.length;a++){const i=o[a].shadowRoot;v(r,_(e,typeof i=="object"&&i!==null?i:o[a]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},h=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(r===null){const o=t.querySelectorAll('[class*="hydrated"]');for(let a=0;a<o.length;a++){const i=o[a].shadowRoot;if(r=h(e,typeof i=="object"&&i!==null?i:o[a]),r!==null)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=s,O=s,k=c,j=x,n=L,u=C;function s(e){var t=M(e);return t.length==3?t.concat(255):(t[3]=Math.round(t[3]),t)}function c(e){var t=M(e);return{r:t[0],g:t[1],b:t[2],a:t.length==3?255:Math.round(t[3])}}function x(e){var t=M(e);return t.length==3&&t.push(255),t[3]==255?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":t[3]==0?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function L(e){(t=M(e)).length==3&&t.push(255);var t,r=t[3]==255,o=P(t[0]),a=P(t[1]),i=P(t[2]),f=J(o,a,i,t=P(Math.round(t[3])));return r?f?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0):"#"+o+a+i:f?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+a+i+t}function C(e){var t=M(e);return t.length==3?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function M(e){return typeof e=="string"?re(e=e.toLowerCase())||ae(e)||ie(e)||de(e)||ue(e)||[0,0,0,255]:se(e)||le(e)||ce(e)||[0,0,0,255]}function P(e){var t=e.toString(16);return t.length==1?"0"+t:t}function J(e,t,r,o){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return a.indexOf(e)!=-1&&a.indexOf(t)!=-1&&a.indexOf(r)!=-1&&a.indexOf(o)!=-1}function re(e){return e=="red"?[255,0,0]:e=="green"?[0,255,0]:e=="blue"?[0,0,255]:e=="black"?[0,0,0]:e=="white"?[255,255,255]:e=="cyan"?[0,255,255]:e=="gray"||e=="grey"?[128,128,128]:e=="magenta"||e=="pink"?[255,0,255]:e=="yellow"?[255,255,0]:void 0}function N(e){return e.length==1?parseInt(e+e,16):parseInt(e,16)}function ae(e){var t=e.replace(/^#/,""),r=t.length;if(r==3||r==4){var o=N(t[0]),a=N(t[1]),i=N(t[2]),f=r==3?255:N(t[3]);return isNaN(o)||isNaN(a)||isNaN(i)||isNaN(f)?void 0:[o,a,i,f]}}function ie(e){var t=e.replace(/^#/,""),r=t.length;if(r==6||r==8){var o=N(t.slice(0,2)),a=N(t.slice(2,4)),i=N(t.slice(4,6)),f=r==6?255:N(t.slice(6,8));return isNaN(o)||isNaN(a)||isNaN(i)||isNaN(f)?void 0:[o,a,i,f]}}function w(e,t){return typeof e!="number"||t===!0&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function se(e){if(Object.prototype.toString.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(e.r!=null?e.r:e.red!=null?e.red:0,!0),r=w(e.g!=null?e.g:e.green!=null?e.green:0,!0),o=w(e.b!=null?e.b:e.blue!=null?e.blue:0,!0),a=w(e.a!=null?e.a:e.alpha!=null?e.alpha:255,!0);if(t!=-1&&r!=-1&&o!=-1&&a!=-1)return[t,r,o,a]}}function le(e){if(Array.isArray(e)&&(e.length==3||e.length==4)){var t=w(e[0],!0),r=w(e[1],!0),o=w(e[2],!0),a=w(e[3]!=null?e[3]:255,!0);if(t!=-1&&r!=-1&&o!=-1&&a!=-1)return[t,r,o,a]}}function ce(e){if(typeof e=="number"&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function de(e){if(e.substr(0,4)=="rgb("){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=w(t[0],!0),o=w(t[1],!0),a=w(t[2],!0);if(r!=-1&&o!=-1&&a!=-1)return[r,o,a,255]}}function ue(e){if(e.substr(0,5)=="rgba("){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=w(t[0],!0),o=w(t[1],!0),a=w(t[2],!0),i=w(255*t[3]);if(r!=-1&&o!=-1&&a!=-1&&i!=-1)return[r,o,a,i]}}d.arr=O,d.obj=k,d.css=j,d.hex=n,d.num=u;const fe=/\[object Object\]/,R=(e,t)=>{typeof e=="string"&&fe.test(e)||t()},q=(e,t)=>{typeof e=="string"&&e===""||t()},he=(e,t)=>{(0,l.b)()&&(console.log(e,t),(0,m.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},me=e=>{var t,r,o;(t=e.nextHooks)===null||t===void 0||t.forEach((a,i)=>{var f;const H=a.get("beforePatch");typeof H=="function"&&H((f=e.nextState)===null||f===void 0?void 0:f.get(i),e.nextState,e,i)}),((r=e.nextState)===null||r===void 0?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,(o=e.nextHooks)===null||o===void 0||o.forEach((a,i)=>{const f=a.get("afterPatch");typeof f=="function"&&f(e.state[i],e.state,e,i)})),delete e.nextHooks},I=(e,t,r,o={})=>{var a,i;e.nextHooks===void 0&&(e.nextHooks=new Map),e.nextState===void 0&&(e.nextState=new Map),e.nextState.get(t)!==r&&(!(e.nextHooks.get(t)instanceof Map)&&e.nextHooks.set(t,new Map),typeof o.afterPatch=="function"&&((a=e.nextHooks.get(t))===null||a===void 0||a.set("afterPatch",o.afterPatch)),typeof o.beforePatch=="function"&&((i=e.nextHooks.get(t))===null||i===void 0||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),me(e))},pe=(e,t,r,o)=>{(0,m.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xFCr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)},B=(e,t,r,o,a,i={})=>{r(a)?I(e,t,a,i==null?void 0:i.hooks):a===void 0||a===null&&((i==null?void 0:i.required)===void 0||(i==null?void 0:i.required)===!1)?I(e,t,i==null?void 0:i.defaultValue,i==null?void 0:i.hooks):((i==null?void 0:i.required)!==void 0&&(i==null?void 0:i.required)!==!1||o.add(null),pe(e,t,a,o))},ge=(e,t,r,o)=>{B(e,t,a=>typeof a=="boolean",new Set(["Boolean {true, false}"]),r,o)},be=(e,t,r,o={})=>{const a=typeof o.minLength=="number"?o==null?void 0:o.minLength:0;B(e,t,i=>typeof i=="string"&&i.length>=a,new Set([`String (Mindestl\xE4nge ${a})`]),r,o)},_e=(e,t,r,o)=>{B(e,t,a=>typeof a=="number"&&((o==null?void 0:o.min)===void 0||typeof(o==null?void 0:o.min)=="number"&&a>=o.min)&&((o==null?void 0:o.max)===void 0||typeof(o==null?void 0:o.max)=="number"&&a<=o.max),new Set(["Number"]),r,o)},ve=(e,t,r,o,a=f=>f==f,i={})=>{q(o,()=>{R(o,()=>{o===void 0&&(o=[]);try{try{o=z(o)}catch(f){}if(Array.isArray(o)){const f=o.find(H=>!r(H));f===void 0&&a(o)?I(e,t,o,i.hooks):R(f,()=>{throw console.log(f),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else R(o,()=>{throw console.log(o),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(f){(0,m.d)("Known bug: Zeichenkettenliste (string[])")}})})},ye=/^(true|false)$/,Se=/^-?(0|[1-9]\d*)$/,we=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,Ee=e=>{const t=typeof e,r=`${e}`;if(typeof e=="string"){if(ye.test(e))e=e==="true";else if(Se.test(e))e=parseInt(e);else if(we.test(e))e=parseFloat(e);else if(G.test(e))try{e=z(e)}catch(o){}}return t!==typeof e&&(0,m.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},F=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw l.L.warn(["stringifyJson",e]),l.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},G=/^[{[]/,z=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){if(G.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(r){l.L.warn(["parseJson",e]),l.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=e=>typeof e=="boolean"?e===!0?"true":"false":void 0,Ae=e=>typeof e=="string"?e:V(e),U=(e,t)=>h(e,t||(0,l.g)()),Z=(e,t)=>_(e,t||(0,l.g)());let K=null;const Q=()=>(K=K||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,l.g)().body,level:"Fail",score:1},K),Y=/(\d+, ){3}0\)/,W=(e,t=Q())=>{const r=getComputedStyle(e),o=Y.test(r.backgroundColor)?t.backgroundColor:d.hex(r.backgroundColor),a=Y.test(r.color)?t.color:d.hex(r.color),i=(0,b.s)(o,a),f={backgroundColor:o,color:a,domNode:e,level:(0,b.f)(i),score:i};return i<4.5&&l.L.error(["Color-Contrast-Error",{backgroundColor:f.backgroundColor,color:f.color,level:f.level,score:f.score},f.domNode]),f},X=(e,t=Q())=>{t.domNode instanceof HTMLElement&&(t=W(t.domNode,t));const r=t.domNode.querySelector(e);if(r===null){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<o.length&&(t.domNode=o[a],(t=X(e,t)).domNode===null);a++);return t}return W(r,t)},ee=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,l.a)().pageYOffset-50}),e.focus()):(0,m.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},te=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&typeof t=="string"){(0,m.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if(typeof e=="string"){const r=U(e,t);r instanceof HTMLElement?ee(r):(0,m.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,m.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class E{static queryHtmlElementColors(t,r,o=!1,a=!0){let i=null;if(o===!0||E.executionLock===!1)if(o===!1&&(E.cache.clear(),E.cache.set(r.domNode,r),E.executionLock=!0,a===!0&&l.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===r.domNode)i=r;else{const f=new Set;if(r.domNode.shadowRoot){const y=r.domNode.shadowRoot.children;for(let A=0;A<y.length;A++)f.add(y[A])}const H=r.domNode;if(typeof H.assignedNodes=="function"){const y=H.assignedNodes();for(let A=0;A<y.length;A++)y[A]instanceof HTMLElement&&f.add(y[A])}const oe=r.domNode.children;for(let y=0;y<oe.length;y++)f.add(oe[y]);const $=Array.from(f);for(let y=0;y<$.length;y++){let A=E.cache.get($[y]);A===void 0&&(A=W($[y],r)),E.cache.set($[y],A);const ne=E.queryHtmlElementColors(t,A,!0,!1);if(ne!==null){i=ne;break}}}else l.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return o===!1&&(a===!0&&l.L.debug(`[KoliBriUtils] Color contrast analysis finished (${E.cache.size} DOM elements are analysed).`),E.executionLock=!1,E.cache.clear()),i}}E.executionLock=!1,E.cache=new Map;class D{}D.patchTheme=g.p,D.patchThemeTag=g.a,D.querySelector=U,D.querySelectorAll=Z,D.scrollByHTMLElement=ee,D.scrollBySelector=te,D.stringifyJson=F},"./node_modules/@public-ui/components/dist/esm/reuse-f9be4952.js":(T,S,p)=>{p.d(S,{p:()=>m});var b=p("./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const m=(l,g)=>{(0,b.i)(l)&&l&&(l.focus=v=>g==null?void 0:g.focus(v))}},"./node_modules/@public-ui/components/dist/esm/tab-index-0b0ee76b.js":(T,S,p)=>{p.d(S,{a:()=>d,i:()=>h,v:()=>j,w:()=>O});var b=p("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),m=p("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js"),l=p("./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const g=(n,u,s)=>{(0,l.i)(s)?n[u]=s:(0,l.a)(s,1)&&(n[u]={icon:s})},v=(n,u)=>{let s={};return(0,l.a)(n,1)?u==="right"?s={right:{icon:n}}:s={left:{icon:n}}:typeof n=="object"&&n!==null&&(g(s,"top",n.top),g(s,"right",n.right),g(s,"bottom",n.bottom),g(s,"left",n.left)),s},_=n=>{var u,s,c,x,L,C,M;if(!((u=n.nextState)===null||u===void 0)&&u.has("_icon")){const P=(s=n.nextState)===null||s===void 0?void 0:s.get("_icon"),J=((c=n.nextState)===null||c===void 0?void 0:c.get("_iconAlign"))||n.state._iconAlign;(x=n.nextState)===null||x===void 0||x.set("_icon",v(P,J))}else if(!((L=n.nextState)===null||L===void 0)&&L.has("_iconAlign")){const P=n.state._iconAlign;(C=n.nextState)===null||C===void 0||C.set("_icon",{[P]:void 0,[(M=n.nextState)===null||M===void 0?void 0:M.get("_iconAlign")]:n.state._icon[P]})}},h=n=>typeof n=="object"&&n!==null&&(n.style===void 0||(0,l.b)(n.style))&&(0,l.a)(n.icon,1),d=(n,u)=>{(0,m.o)(u,()=>{try{u=(0,m.p)(u)}catch(s){}(0,m.a)(n,"_icon",s=>s===null||(0,l.a)(s,1)||typeof s=="object"&&s!==null&&((0,l.a)(s.left,1)||h(s.left)||(0,l.a)(s.right,1)||h(s.right)||(0,l.a)(s.top,1)||h(s.top)||(0,l.a)(s.bottom,1)||h(s.bottom)),new Set(["KoliBriIcon"]),u,{hooks:{beforePatch:(s,c)=>{s===null&&c.set("_icon",{}),_(n)}},required:!0})})},O=(n,u)=>{(0,b.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xFCber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,m.a)(n,"_iconAlign",s=>s==="left"||s==="right",new Set(["Alignment {left, right, top, bottom}"]),u,{hooks:{beforePatch:()=>{_(n)}}})},k={hooks:{afterPatch:n=>{n!==-1&&n!==0&&(0,b.e)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},j=(n,u)=>{(0,m.d)(n,"_tabIndex",u,k)}},"./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js":(T,S,p)=>{p.d(S,{S:()=>_,a:()=>m,b:()=>l,c:()=>v,i:()=>b});/*!
 * KoliBri - The accessible HTML-Standard
 */const b=h=>typeof h=="object"&&h!==null,m=(h,d=0)=>typeof h=="string"&&h.length>=d,l=h=>{if(typeof h!="object"||h===null)return m(h,1);for(const d in h)if(m(d,1)===!1)return!1;return!0},g=(h,d)=>d.length===0&&new RegExp(`^${h}`).test(d),v=(h,d)=>d.length===0||g(h,d),_=new Event("StateChange")}}]);
