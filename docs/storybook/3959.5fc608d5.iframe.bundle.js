"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3959],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(C,L,u)=>{u.d(L,{a:()=>p,b:()=>m,c:()=>i,d:()=>b,e:()=>f,f:()=>l,u:()=>O});var h=u("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const S=new Set,f=d=>{S.has(d)===!1&&(S.add(d),h.L.info(d,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},c=new Set,m=d=>{c.has(d)===!1&&(c.add(d),h.L.warn(d,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},E=new Set,b=d=>{E.has(d)===!1&&(E.add(d),h.L.debug(d,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},g=new Set,l=(d,x=!1)=>{g.has(d)===!1&&(g.add(d),d+=x===!0?" \u2705":"",h.L.debug(d,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};b("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const v=new Set,N=d=>{v.has(d)===!1&&(v.add(d),Log.debug(d,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},i=()=>{f(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},p=d=>{typeof d=="string"&&d!==""||f(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},O=(d,x=8)=>{var A;x>7&&(A=`[${d}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,v.has(A)===!1&&(v.add(A),h.L.debug(A,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(C,L,u)=>{u.d(L,{f:()=>N,s:()=>v});/*!
 * KoliBri - The accessible HTML-Standard
 */var h=.2126,S=.7152,f=.0722,c=1/12.92;function m(i){return Math.pow((i+.055)/1.055,2.4)}function E(i){var p=i[0]/255,O=i[1]/255,d=i[2]/255,x=p<=.03928?p*c:m(p),A=O<=.03928?O*c:m(O),z=d<=.03928?d*c:m(d);return x*h+A*S+z*f}function b(i){var p=255;(i=i.replace(/^#/,"")).length===8&&(p=parseInt(i.slice(6,8),16),i=i.substring(0,6)),i.length===4&&(p=parseInt(i.slice(3,4).repeat(2),16),i=i.substring(0,3)),i.length===3&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);var O=parseInt(i,16);return[O>>16,O>>8&255,255&O,p]}function g(i,p){return(Math.max(i,p)+.05)/(Math.min(i,p)+.05)}function l(i,p){return g(E(i),E(p))}function v(i,p){return l(b(i),b(p))}function N(i){return i>=7?"AAA":i>=4.5?"AA":i>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/kol-link-group.entry.js":(C,L,u)=>{u.r(L),u.d(L,{kol_link_group:()=>g});var h=u("./node_modules/@public-ui/components/dist/esm/index-1a5ffdc0.js"),S=u("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),f=u("./node_modules/@public-ui/components/dist/esm/prop.validators-4fa47ba8.js"),c=u("./node_modules/@public-ui/components/dist/esm/validation-f79f1927.js"),m=u("./node_modules/@public-ui/components/dist/esm/validation-b778326a.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const E="@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}",b=l=>{const v=[];return l.links.map((N,i)=>{v.push((0,h.h)("li",{key:i,class:{ident:i>0&&l.orientation==="vertical","list-none":i===0&&l.orientation==="horizontal"},style:{listStyleType:l.listStyleType}},(0,h.h)("kol-link",Object.assign({},N))))}),v},g=class{constructor(l){(0,h.r)(this,l),this.isUl=!0,this._ariaLabel=void 0,this._listStyleType=void 0,this._heading=void 0,this._level=void 0,this._links=void 0,this._ordered=void 0,this._orientation="vertical",this.state={_ariaLabel:"\u2026",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){var l;return(0,h.h)("nav",{"aria-label":this.state._ariaLabel,class:{vertical:this.state._orientation==="vertical",horizontal:this.state._orientation==="horizontal"}},typeof this.state._heading=="string"&&((l=this.state._heading)===null||l===void 0?void 0:l.length)>0&&(0,h.h)("kol-heading-wc",{_level:this.state._level},this.state._heading),this.isUl===!1?(0,h.h)("ol",null,(0,h.h)(b,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,h.h)("ul",null,(0,h.h)(b,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateAriaLabel(l){(0,f.w)(this,"_ariaLabel",l,{required:!0}),(0,S.a)(l)}validateListStyleType(l){(0,f.a)(this,"_listStyleType",v=>{switch(v){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}},new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),l)}validateHeading(l){(0,f.w)(this,"_heading",l)}validateLevel(l){(0,c.w)(this,l)}validateLinks(l){(0,m.w)("KolLinkGroup",this,l)}validateOrdered(l){(0,f.b)(this,"_ordered",l)}validateOrientation(l){(0,f.a)(this,"_orientation",v=>v==="horizontal"||v==="vertical",new Set(["Orientation {horizontal, vertical}"]),l,{defaultValue:"vertical"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateListStyleType(this._listStyleType),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateLinks(this._links),this.validateOrientation(this._orientation)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_listStyleType:["validateListStyleType"],_heading:["validateHeading"],_level:["validateLevel"],_links:["validateLinks"],_ordered:["validateOrdered"],_orientation:["validateOrientation"]}}};g.style={default:E}},"./node_modules/@public-ui/components/dist/esm/prop.validators-4fa47ba8.js":(C,L,u)=>{u.d(L,{K:()=>T,a:()=>B,b:()=>ge,c:()=>ye,d:()=>_e,e:()=>fe,f:()=>K,g:()=>V,h:()=>ee,i:()=>Le,j:()=>w,k:()=>$,l:()=>W,m:()=>ke,n:()=>Z,o:()=>H,p:()=>U,q:()=>Y,r:()=>g,s:()=>R,t:()=>q,w:()=>ve});var h=u("./node_modules/@public-ui/components/dist/esm/index-fe68f44e.js"),S=u("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),f=u("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),c=u("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const m=(e,t)=>{t.forEach(o=>{e.has(o)===!1&&e.add(o)})},E=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;m(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let r=0;r<n.length;r++){const a=n[r].shadowRoot;m(o,E(e,typeof a=="object"&&a!==null?a:n[r]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},b=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(o===null){const n=t.querySelectorAll('[class*="hydrated"]');for(let r=0;r<n.length;r++){const a=n[r].shadowRoot;if(o=b(e,typeof a=="object"&&a!==null?a:n[r]),o!==null)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var g=O,l=O,v=d,N=x,i=A,p=z;function O(e){var t=D(e);return t.length==3?t.concat(255):(t[3]=Math.round(t[3]),t)}function d(e){var t=D(e);return{r:t[0],g:t[1],b:t[2],a:t.length==3?255:Math.round(t[3])}}function x(e){var t=D(e);return t.length==3&&t.push(255),t[3]==255?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":t[3]==0?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function A(e){(t=D(e)).length==3&&t.push(255);var t,o=t[3]==255,n=P(t[0]),r=P(t[1]),a=P(t[2]),s=oe(n,r,a,t=P(Math.round(t[3])));return o?s?"#"+n.charAt(0)+r.charAt(0)+a.charAt(0):"#"+n+r+a:s?"#"+n.charAt(0)+r.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+r+a+t}function z(e){var t=D(e);return t.length==3?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function D(e){return typeof e=="string"?re(e=e.toLowerCase())||ae(e)||ie(e)||ce(e)||ue(e)||[0,0,0,255]:se(e)||le(e)||de(e)||[0,0,0,255]}function P(e){var t=e.toString(16);return t.length==1?"0"+t:t}function oe(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return r.indexOf(e)!=-1&&r.indexOf(t)!=-1&&r.indexOf(o)!=-1&&r.indexOf(n)!=-1}function re(e){return e=="red"?[255,0,0]:e=="green"?[0,255,0]:e=="blue"?[0,0,255]:e=="black"?[0,0,0]:e=="white"?[255,255,255]:e=="cyan"?[0,255,255]:e=="gray"||e=="grey"?[128,128,128]:e=="magenta"||e=="pink"?[255,0,255]:e=="yellow"?[255,255,0]:void 0}function M(e){return e.length==1?parseInt(e+e,16):parseInt(e,16)}function ae(e){var t=e.replace(/^#/,""),o=t.length;if(o==3||o==4){var n=M(t[0]),r=M(t[1]),a=M(t[2]),s=o==3?255:M(t[3]);return isNaN(n)||isNaN(r)||isNaN(a)||isNaN(s)?void 0:[n,r,a,s]}}function ie(e){var t=e.replace(/^#/,""),o=t.length;if(o==6||o==8){var n=M(t.slice(0,2)),r=M(t.slice(2,4)),a=M(t.slice(4,6)),s=o==6?255:M(t.slice(6,8));return isNaN(n)||isNaN(r)||isNaN(a)||isNaN(s)?void 0:[n,r,a,s]}}function y(e,t){return typeof e!="number"||t===!0&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function se(e){if(Object.prototype.toString.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(e.r!=null?e.r:e.red!=null?e.red:0,!0),o=y(e.g!=null?e.g:e.green!=null?e.green:0,!0),n=y(e.b!=null?e.b:e.blue!=null?e.blue:0,!0),r=y(e.a!=null?e.a:e.alpha!=null?e.alpha:255,!0);if(t!=-1&&o!=-1&&n!=-1&&r!=-1)return[t,o,n,r]}}function le(e){if(Array.isArray(e)&&(e.length==3||e.length==4)){var t=y(e[0],!0),o=y(e[1],!0),n=y(e[2],!0),r=y(e[3]!=null?e[3]:255,!0);if(t!=-1&&o!=-1&&n!=-1&&r!=-1)return[t,o,n,r]}}function de(e){if(typeof e=="number"&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function ce(e){if(e.substr(0,4)=="rgb("){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0);if(o!=-1&&n!=-1&&r!=-1)return[o,n,r,255]}}function ue(e){if(e.substr(0,5)=="rgba("){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0),a=y(255*t[3]);if(o!=-1&&n!=-1&&r!=-1&&a!=-1)return[o,n,r,a]}}g.arr=l,g.obj=v,g.css=N,g.hex=i,g.num=p;const he=/\[object Object\]/,H=(e,t)=>{typeof e=="string"&&he.test(e)||t()},K=(e,t)=>{typeof e=="string"&&e===""||t()},fe=(e,t)=>{(0,c.b)()&&(console.log(e,t),(0,f.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},pe=e=>{var t,o,n;(t=e.nextHooks)===null||t===void 0||t.forEach((r,a)=>{var s;const j=r.get("beforePatch");typeof j=="function"&&j((s=e.nextState)===null||s===void 0?void 0:s.get(a),e.nextState,e,a)}),((o=e.nextState)===null||o===void 0?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,(n=e.nextHooks)===null||n===void 0||n.forEach((r,a)=>{const s=r.get("afterPatch");typeof s=="function"&&s(e.state[a],e.state,e,a)})),delete e.nextHooks},R=(e,t,o,n={})=>{var r,a;e.nextHooks===void 0&&(e.nextHooks=new Map),e.nextState===void 0&&(e.nextState=new Map),e.nextState.get(t)!==o&&(!(e.nextHooks.get(t)instanceof Map)&&e.nextHooks.set(t,new Map),typeof n.afterPatch=="function"&&((r=e.nextHooks.get(t))===null||r===void 0||r.set("afterPatch",n.afterPatch)),typeof n.beforePatch=="function"&&((a=e.nextHooks.get(t))===null||a===void 0||a.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),pe(e))},me=(e,t,o,n)=>{(0,f.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xFCr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)},B=(e,t,o,n,r,a={})=>{o(r)?R(e,t,r,a==null?void 0:a.hooks):r===void 0||r===null&&((a==null?void 0:a.required)===void 0||(a==null?void 0:a.required)===!1)?R(e,t,a==null?void 0:a.defaultValue,a==null?void 0:a.hooks):((a==null?void 0:a.required)!==void 0&&(a==null?void 0:a.required)!==!1||n.add(null),me(e,t,r,n))},ge=(e,t,o,n)=>{B(e,t,r=>typeof r=="boolean",new Set(["Boolean {true, false}"]),o,n)},ve=(e,t,o,n={})=>{const r=typeof n.minLength=="number"?n==null?void 0:n.minLength:0;B(e,t,a=>typeof a=="string"&&a.length>=r,new Set([`String (Mindestl\xE4nge ${r})`]),o,n)},_e=(e,t,o,n)=>{B(e,t,r=>typeof r=="number"&&((n==null?void 0:n.min)===void 0||typeof(n==null?void 0:n.min)=="number"&&r>=n.min)&&((n==null?void 0:n.max)===void 0||typeof(n==null?void 0:n.max)=="number"&&r<=n.max),new Set(["Number"]),o,n)},ye=(e,t,o,n,r=s=>s==s,a={})=>{K(n,()=>{H(n,()=>{n===void 0&&(n=[]);try{try{n=U(n)}catch(s){}if(Array.isArray(n)){const s=n.find(j=>!o(j));s===void 0&&r(n)?R(e,t,n,a.hooks):H(s,()=>{throw console.log(s),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else H(n,()=>{throw console.log(n),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(s){(0,f.d)("Known bug: Zeichenkettenliste (string[])")}})})},be=/^(true|false)$/,we=/^-?(0|[1-9]\d*)$/,Se=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,ke=e=>{const t=typeof e,o=`${e}`;if(typeof e=="string"){if(be.test(e))e=e==="true";else if(we.test(e))e=parseInt(e);else if(Se.test(e))e=parseFloat(e);else if(F.test(e))try{e=U(e)}catch(n){}}return t!==typeof e&&(0,f.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},q=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw c.L.warn(["stringifyJson",e]),c.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,U=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){if(F.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(o){c.L.warn(["parseJson",e]),c.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=e=>typeof e=="boolean"?e===!0?"true":"false":void 0,Le=e=>typeof e=="string"?e:V(e),$=(e,t)=>b(e,t||(0,c.g)()),Z=(e,t)=>E(e,t||(0,c.g)());let J=null;const G=()=>(J=J||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,c.g)().body,level:"Fail",score:1},J),Q=/(\d+, ){3}0\)/,W=(e,t=G())=>{const o=getComputedStyle(e),n=Q.test(o.backgroundColor)?t.backgroundColor:g.hex(o.backgroundColor),r=Q.test(o.color)?t.color:g.hex(o.color),a=(0,S.s)(n,r),s={backgroundColor:n,color:r,domNode:e,level:(0,S.f)(a),score:a};return a<4.5&&c.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},Y=(e,t=G())=>{t.domNode instanceof HTMLElement&&(t=W(t.domNode,t));const o=t.domNode.querySelector(e);if(o===null){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],(t=Y(e,t)).domNode===null);r++);return t}return W(o,t)},X=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,c.a)().pageYOffset-50}),e.focus()):(0,f.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&typeof t=="string"){(0,f.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if(typeof e=="string"){const o=$(e,t);o instanceof HTMLElement?X(o):(0,f.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,f.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class w{static queryHtmlElementColors(t,o,n=!1,r=!0){let a=null;if(n===!0||w.executionLock===!1)if(n===!1&&(w.cache.clear(),w.cache.set(o.domNode,o),w.executionLock=!0,r===!0&&c.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===o.domNode)a=o;else{const s=new Set;if(o.domNode.shadowRoot){const _=o.domNode.shadowRoot.children;for(let k=0;k<_.length;k++)s.add(_[k])}const j=o.domNode;if(typeof j.assignedNodes=="function"){const _=j.assignedNodes();for(let k=0;k<_.length;k++)_[k]instanceof HTMLElement&&s.add(_[k])}const te=o.domNode.children;for(let _=0;_<te.length;_++)s.add(te[_]);const I=Array.from(s);for(let _=0;_<I.length;_++){let k=w.cache.get(I[_]);k===void 0&&(k=W(I[_],o)),w.cache.set(I[_],k);const ne=w.queryHtmlElementColors(t,k,!0,!1);if(ne!==null){a=ne;break}}}else c.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return n===!1&&(r===!0&&c.L.debug(`[KoliBriUtils] Color contrast analysis finished (${w.cache.size} DOM elements are analysed).`),w.executionLock=!1,w.cache.clear()),a}}w.executionLock=!1,w.cache=new Map;class T{}T.patchTheme=h.p,T.patchThemeTag=h.a,T.querySelector=$,T.querySelectorAll=Z,T.scrollByHTMLElement=X,T.scrollBySelector=ee,T.stringifyJson=q},"./node_modules/@public-ui/components/dist/esm/validation-b778326a.js":(C,L,u)=>{u.d(L,{w:()=>f});var h=u("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),S=u("./node_modules/@public-ui/components/dist/esm/prop.validators-4fa47ba8.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const f=(c,m,E)=>{(0,S.c)(m,"_links",b=>typeof b=="object"&&typeof b._label=="string",E),(0,h.u)(c,m.state._links.length)}},"./node_modules/@public-ui/components/dist/esm/validation-f79f1927.js":(C,L,u)=>{u.d(L,{w:()=>S});var h=u("./node_modules/@public-ui/components/dist/esm/prop.validators-4fa47ba8.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const S=(f,c)=>{(0,h.a)(f,"_level",m=>typeof m=="number"&&1<=m&&m<=6,new Set(["Number {1, 2, 3, 4, 5, 6}"]),c,{defaultValue:1,required:!0})}}}]);
