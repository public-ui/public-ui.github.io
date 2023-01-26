"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[290],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(J,k,b)=>{b.d(k,{a:()=>h,b:()=>_,c:()=>i,d:()=>f,e:()=>u,f:()=>C,u:()=>L});var d=b("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const g=new Set,u=l=>{g.has(l)===!1&&(g.add(l),d.L.info(l,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},c=new Set,_=l=>{c.has(l)===!1&&(c.add(l),d.L.warn(l,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},y=new Set,f=l=>{y.has(l)===!1&&(y.add(l),d.L.debug(l,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},m=new Set,C=(l,N=!1)=>{m.has(l)===!1&&(m.add(l),l+=N===!0?" \u2705":"",d.L.debug(l,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};f("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const E=new Set,T=l=>{E.has(l)===!1&&(E.add(l),Log.debug(l,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},i=()=>{u(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},h=l=>{typeof l=="string"&&l!==""||u(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},L=(l,N=8)=>{var A;N>7&&(A=`[${l}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,E.has(A)===!1&&(E.add(A),d.L.debug(A,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/devtools-4c023c4a.js":(J,k,b)=>{b.r(k),b.d(k,{initialize:()=>_});var d=b("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),g=b("./node_modules/@public-ui/components/dist/esm/prop.validators-a4eb5bf9.js");/*!
 * KoliBri - The accessible HTML-Standard
 */function u(y,f){try{Object.defineProperty(d.K,y,{get:function(){return f}})}catch(m){d.L.debug(`KoliBri property ${y} is already bind.`)}}const c=(y,f)=>d.L.debug(`${y} ${f?"":"not "}activated`),_=()=>{if((0,d.i)(),(0,d.e)()){(0,d.r)(),u("a11yColorContrast",g.l),u("querySelector",g.k),u("querySelectorAll",g.n),u("querySelectorColors",g.q),u("utils",function(){return g.j}),u("parseJson",g.p),u("stringifyJson",g.t);const y=(0,d.g)().body,f=(0,d.g)().createElement("svg");if(f.setAttribute("aria-label","KoliBri-DevTools"),f.setAttribute("xmlns","http://www.w3.org/2000/svg"),f.setAttribute("role","toolbar"),f.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),f.innerHTML=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 600 600"
>
  <path d="M353 322L213 304V434L353 322Z" fill="#047" />
  <path d="M209 564V304L149 434L209 564Z" fill="#047" />
  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />
  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />
  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />
  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />
</svg>`,(0,d.g)().body.appendChild(f),c("Development mode",(0,d.e)()),c("Experimental mode",(0,d.b)()),c("Color contrast analysis",(0,d.f)()),(0,d.f)()){const m=setTimeout(()=>{clearTimeout(m),setInterval(()=>{g.j.queryHtmlElementColors((0,d.g)().createElement("div"),(0,g.l)(y),!1,!1)},1e4)},2500)}}}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(J,k,b)=>{b.d(k,{f:()=>T,s:()=>E});/*!
 * KoliBri - The accessible HTML-Standard
 */var d=.2126,g=.7152,u=.0722,c=1/12.92;function _(i){return Math.pow((i+.055)/1.055,2.4)}function y(i){var h=i[0]/255,L=i[1]/255,l=i[2]/255,N=h<=.03928?h*c:_(h),A=L<=.03928?L*c:_(L),q=l<=.03928?l*c:_(l);return N*d+A*g+q*u}function f(i){var h=255;(i=i.replace(/^#/,"")).length===8&&(h=parseInt(i.slice(6,8),16),i=i.substring(0,6)),i.length===4&&(h=parseInt(i.slice(3,4).repeat(2),16),i=i.substring(0,3)),i.length===3&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);var L=parseInt(i,16);return[L>>16,L>>8&255,255&L,h]}function m(i,h){return(Math.max(i,h)+.05)/(Math.min(i,h)+.05)}function C(i,h){return m(y(i),y(h))}function E(i,h){return C(f(i),f(h))}function T(i){return i>=7?"AAA":i>=4.5?"AA":i>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/prop.validators-a4eb5bf9.js":(J,k,b)=>{b.d(k,{K:()=>x,a:()=>R,b:()=>pe,c:()=>ve,d:()=>ye,e:()=>he,f:()=>Z,g:()=>U,h:()=>ee,i:()=>ke,j:()=>w,k:()=>W,l:()=>B,m:()=>_e,n:()=>V,o:()=>H,p:()=>I,q:()=>Y,r:()=>m,s:()=>P,t:()=>K,w:()=>be});var d=b("./node_modules/@public-ui/components/dist/esm/index-fe68f44e.js"),g=b("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),u=b("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),c=b("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const _=(e,t)=>{t.forEach(n=>{e.has(n)===!1&&e.add(n)})},y=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;_(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let o=0;o<r.length;o++){const a=r[o].shadowRoot;_(n,y(e,typeof a=="object"&&a!==null?a:r[o]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},f=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(n===null){const r=t.querySelectorAll('[class*="hydrated"]');for(let o=0;o<r.length;o++){const a=r[o].shadowRoot;if(n=f(e,typeof a=="object"&&a!==null?a:r[o]),n!==null)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var m=L,C=L,E=l,T=N,i=A,h=q;function L(e){var t=j(e);return t.length==3?t.concat(255):(t[3]=Math.round(t[3]),t)}function l(e){var t=j(e);return{r:t[0],g:t[1],b:t[2],a:t.length==3?255:Math.round(t[3])}}function N(e){var t=j(e);return t.length==3&&t.push(255),t[3]==255?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":t[3]==0?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function A(e){(t=j(e)).length==3&&t.push(255);var t,n=t[3]==255,r=D(t[0]),o=D(t[1]),a=D(t[2]),s=ne(r,o,a,t=D(Math.round(t[3])));return n?s?"#"+r.charAt(0)+o.charAt(0)+a.charAt(0):"#"+r+o+a:s?"#"+r.charAt(0)+o.charAt(0)+a.charAt(0)+t.charAt(0):"#"+r+o+a+t}function q(e){var t=j(e);return t.length==3?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function j(e){return typeof e=="string"?oe(e=e.toLowerCase())||ae(e)||ie(e)||de(e)||ue(e)||[0,0,0,255]:se(e)||le(e)||ce(e)||[0,0,0,255]}function D(e){var t=e.toString(16);return t.length==1?"0"+t:t}function ne(e,t,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return o.indexOf(e)!=-1&&o.indexOf(t)!=-1&&o.indexOf(n)!=-1&&o.indexOf(r)!=-1}function oe(e){return e=="red"?[255,0,0]:e=="green"?[0,255,0]:e=="blue"?[0,0,255]:e=="black"?[0,0,0]:e=="white"?[255,255,255]:e=="cyan"?[0,255,255]:e=="gray"||e=="grey"?[128,128,128]:e=="magenta"||e=="pink"?[255,0,255]:e=="yellow"?[255,255,0]:void 0}function M(e){return e.length==1?parseInt(e+e,16):parseInt(e,16)}function ae(e){var t=e.replace(/^#/,""),n=t.length;if(n==3||n==4){var r=M(t[0]),o=M(t[1]),a=M(t[2]),s=n==3?255:M(t[3]);return isNaN(r)||isNaN(o)||isNaN(a)||isNaN(s)?void 0:[r,o,a,s]}}function ie(e){var t=e.replace(/^#/,""),n=t.length;if(n==6||n==8){var r=M(t.slice(0,2)),o=M(t.slice(2,4)),a=M(t.slice(4,6)),s=n==6?255:M(t.slice(6,8));return isNaN(r)||isNaN(o)||isNaN(a)||isNaN(s)?void 0:[r,o,a,s]}}function v(e,t){return typeof e!="number"||t===!0&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function se(e){if(Object.prototype.toString.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(e.r!=null?e.r:e.red!=null?e.red:0,!0),n=v(e.g!=null?e.g:e.green!=null?e.green:0,!0),r=v(e.b!=null?e.b:e.blue!=null?e.blue:0,!0),o=v(e.a!=null?e.a:e.alpha!=null?e.alpha:255,!0);if(t!=-1&&n!=-1&&r!=-1&&o!=-1)return[t,n,r,o]}}function le(e){if(Array.isArray(e)&&(e.length==3||e.length==4)){var t=v(e[0],!0),n=v(e[1],!0),r=v(e[2],!0),o=v(e[3]!=null?e[3]:255,!0);if(t!=-1&&n!=-1&&r!=-1&&o!=-1)return[t,n,r,o]}}function ce(e){if(typeof e=="number"&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function de(e){if(e.substr(0,4)=="rgb("){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),r=v(t[1],!0),o=v(t[2],!0);if(n!=-1&&r!=-1&&o!=-1)return[n,r,o,255]}}function ue(e){if(e.substr(0,5)=="rgba("){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),r=v(t[1],!0),o=v(t[2],!0),a=v(255*t[3]);if(n!=-1&&r!=-1&&o!=-1&&a!=-1)return[n,r,o,a]}}m.arr=C,m.obj=E,m.css=T,m.hex=i,m.num=h;const fe=/\[object Object\]/,H=(e,t)=>{typeof e=="string"&&fe.test(e)||t()},Z=(e,t)=>{typeof e=="string"&&e===""||t()},he=(e,t)=>{(0,c.b)()&&(c.L.debug([e,t]),c.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},ge=e=>{var t,n,r;(t=e.nextHooks)===null||t===void 0||t.forEach((o,a)=>{var s;const O=o.get("beforePatch");typeof O=="function"&&O((s=e.nextState)===null||s===void 0?void 0:s.get(a),e.nextState,e,a)}),((n=e.nextState)===null||n===void 0?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,(r=e.nextHooks)===null||r===void 0||r.forEach((o,a)=>{const s=o.get("afterPatch");typeof s=="function"&&s(e.state[a],e.state,e,a)})),delete e.nextHooks},P=(e,t,n,r={})=>{var o,a;e.nextHooks===void 0&&(e.nextHooks=new Map),e.nextState===void 0&&(e.nextState=new Map),e.nextState.get(t)!==n&&(!(e.nextHooks.get(t)instanceof Map)&&e.nextHooks.set(t,new Map),typeof r.afterPatch=="function"&&((o=e.nextHooks.get(t))===null||o===void 0||o.set("afterPatch",r.afterPatch)),typeof r.beforePatch=="function"&&((a=e.nextHooks.get(t))===null||a===void 0||a.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),ge(e))},me=(e,t,n,r)=>{(0,u.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xFCr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)},R=(e,t,n,r,o,a={})=>{n(o)?P(e,t,o,a==null?void 0:a.hooks):o===void 0||o===null&&((a==null?void 0:a.required)===void 0||(a==null?void 0:a.required)===!1)?P(e,t,a==null?void 0:a.defaultValue,a==null?void 0:a.hooks):((a==null?void 0:a.required)!==void 0&&(a==null?void 0:a.required)!==!1||r.add(null),me(e,t,o,r))},pe=(e,t,n,r)=>{R(e,t,o=>typeof o=="boolean",new Set(["Boolean {true, false}"]),n,r)},be=(e,t,n,r={})=>{const o=typeof r.minLength=="number"?r==null?void 0:r.minLength:0;R(e,t,a=>typeof a=="string"&&a.length>=o,new Set([`String (Mindestl\xE4nge ${o})`]),n,r)},ye=(e,t,n,r)=>{R(e,t,o=>typeof o=="number"&&((r==null?void 0:r.min)===void 0||typeof(r==null?void 0:r.min)=="number"&&o>=r.min)&&((r==null?void 0:r.max)===void 0||typeof(r==null?void 0:r.max)=="number"&&o<=r.max),new Set(["Number"]),n,r)},ve=(e,t,n,r,o=s=>s==s,a={})=>{Z(r,()=>{H(r,()=>{r===void 0&&(r=[]);try{try{r=I(r)}catch(s){}if(Array.isArray(r)){const s=r.find(O=>!n(O));s===void 0&&o(r)?P(e,t,r,a.hooks):H(s,()=>{throw c.L.debug(s),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else H(r,()=>{throw c.L.debug(r),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(s){c.L.debug(s)}})})},we=/^(true|false)$/,Se=/^-?(0|[1-9]\d*)$/,Le=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,_e=e=>{const t=typeof e,n=`${e}`;if(typeof e=="string"){if(we.test(e))e=e==="true";else if(Se.test(e))e=parseInt(e);else if(Le.test(e))e=parseFloat(e);else if(F.test(e))try{e=I(e)}catch(r){}}return t!==typeof e&&(0,u.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},K=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw c.L.warn(["stringifyJson",e]),c.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,I=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){if(F.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(n){c.L.warn(["parseJson",e]),c.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>typeof e=="boolean"?e===!0?"true":"false":void 0,ke=e=>typeof e=="string"?e:U(e),W=(e,t)=>f(e,t||(0,c.g)()),V=(e,t)=>y(e,t||(0,c.g)());let z=null;const Q=()=>(z=z||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,c.g)().body,level:"Fail",score:1},z),G=/(\d+, ){3}0\)/,B=(e,t=Q())=>{const n=getComputedStyle(e),r=G.test(n.backgroundColor)?t.backgroundColor:m.hex(n.backgroundColor),o=G.test(n.color)?t.color:m.hex(n.color),a=(0,g.s)(r,o),s={backgroundColor:r,color:o,domNode:e,level:(0,g.f)(a),score:a};return a<4.5&&c.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},Y=(e,t=Q())=>{t.domNode instanceof HTMLElement&&(t=B(t.domNode,t));const n=t.domNode.querySelector(e);if(n===null){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],(t=Y(e,t)).domNode===null);o++);return t}return B(n,t)},X=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,c.a)().pageYOffset-50}),e.focus()):(0,u.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&typeof t=="string"){(0,u.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if(typeof e=="string"){const n=W(e,t);n instanceof HTMLElement?X(n):(0,u.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,u.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class w{static queryHtmlElementColors(t,n,r=!1,o=!0){let a=null;if(r===!0||w.executionLock===!1)if(r===!1&&(w.cache.clear(),w.cache.set(n.domNode,n),w.executionLock=!0,o===!0&&c.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===n.domNode)a=n;else{const s=new Set;if(n.domNode.shadowRoot){const p=n.domNode.shadowRoot.children;for(let S=0;S<p.length;S++)s.add(p[S])}const O=n.domNode;if(typeof O.assignedNodes=="function"){const p=O.assignedNodes();for(let S=0;S<p.length;S++)p[S]instanceof HTMLElement&&s.add(p[S])}const te=n.domNode.children;for(let p=0;p<te.length;p++)s.add(te[p]);const $=Array.from(s);for(let p=0;p<$.length;p++){let S=w.cache.get($[p]);S===void 0&&(S=B($[p],n)),w.cache.set($[p],S);const re=w.queryHtmlElementColors(t,S,!0,!1);if(re!==null){a=re;break}}}else c.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return r===!1&&(o===!0&&c.L.debug(`[KoliBriUtils] Color contrast analysis finished (${w.cache.size} DOM elements are analysed).`),w.executionLock=!1,w.cache.clear()),a}}w.executionLock=!1,w.cache=new Map;class x{}x.patchTheme=d.p,x.patchThemeTag=d.a,x.querySelector=W,x.querySelectorAll=V,x.scrollByHTMLElement=X,x.scrollBySelector=ee,x.stringifyJson=K}}]);
