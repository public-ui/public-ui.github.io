/*! For license information please see 6329.c21c88b0.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6329],{46329:(e,t,o)=>{o.r(t),o.d(t,{kol_tabs:()=>h});var n=o(43206),r=o(80731),a=o(21591),i=o(78477),l=o(42562);const s=new Set(['"left", "right"']),c=new Set(['"left", "right"']),d=new Set([...s,...c]),h=class{constructor(e){(0,n.r)(this,e),this.onCreateLabel=`${(0,l.a)("kol-new")} \u2026`,this.showCreateTab=!1,this.nextPossibleTabIndex=(e,t,o)=>{if(o>0){if(t+o<e.length)return e[t+o]._disabled?this.nextPossibleTabIndex(e,t,o+1):t+o}else if(o<0&&t+o>=0)return e[t+o]._disabled?this.nextPossibleTabIndex(e,t,o-1):t+o;return t},this.onKeyDown=e=>{const t=setTimeout((()=>{clearTimeout(t);let o=null;switch(e.key){case"ArrowRight":o=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":o=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==o&&this.onSelect(e,o,!0)}),250)},this.onClickSelect=(e,t)=>{this.onSelect(e,t,!0)},this.onMouseDown=e=>{e.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=e=>{this.tabPanelHost=e},this.selectNextNotDisabledTab=(e,t,o=!0,n)=>{if(e>t.length-1&&(e=t.length-1),e<0&&(e=0),Array.isArray(t)&&t[e]&&t[e]._disabled){if(!0===o){if(e<t.length-1)return this.selectNextNotDisabledTab(e+1,t,!0,n||e);e=n||e,o=!1}if(!1===o){if(e>0)return this.selectNextNotDisabledTab(e-1,t,!1,n||e);(0,r.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return e},this.syncSelectedAndTabs=(e,t,o,n)=>{let r,a;r="_selected"===n?e:this.state._selected,a="_tabs"===n?e:this.state._tabs,a.length>0&&t.set("_selected",this.selectNextNotDisabledTab(r,a))},this.handleTabPanels=()=>{var e,t,o;if(this.tabPanelHost instanceof HTMLDivElement)for(let n=this.tabPanelHost.children.length;n<this.state._tabs.length;n++){const r=document.createElement("div");r.setAttribute("aria-labelledby",`tab-${n}`),r.setAttribute("id",`tabpanel-${n}`),r.setAttribute("role","tabpanel"),r.setAttribute("hidden","");const a=document.createElement("slot");a.setAttribute("name",`tabpanel-slot-${n}`),r.appendChild(a),this.tabPanelHost.appendChild(r),(null===(e=this.host)||void 0===e?void 0:e.children)instanceof HTMLCollection&&(null===(t=this.host)||void 0===t?void 0:t.children[n])&&(null===(o=this.host)||void 0===o||o.children[n].setAttribute("slot",`tabpanel-slot-${n}`))}},this.onCreate=e=>{var t,o;e.stopPropagation(),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onCreate)&&(null===(o=this.state._on)||void 0===o||o.onCreate(e))},this._ariaLabel=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_ariaLabel:"\u2026",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return(0,n.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._ariaLabel,onKeyDown:this.onKeyDown},this.state._tabs.map(((e,t)=>(0,n.h)("div",{class:"inline-flex"},(0,n.h)("kol-button-wc",{class:"h-full",_disabled:e._disabled,_icon:e._icon,_iconOnly:e._iconOnly,_label:e._label&&e._label,_on:this.callbacks,_tabIndex:this.state._selected===t?0:-1,_tooltipAlign:e._tooltipAlign,_variant:this.state._selected===t?"custom":void 0,_customClass:this.state._selected===t?"selected":void 0,_ariaControls:`tabpanel-${t}`,_ariaSelected:this.state._selected===t,_id:`tab-${t}`,_role:"tab",_value:t})))),this.showCreateTab&&(0,n.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{ref:e=>{this.tabPanelsElement=e},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,n.h)("div",{ref:this.catchTabPanelHost})))}validateAriaLabel(e){(0,i.w)(this,"_ariaLabel",e,{required:!0}),(0,r.b)(e)}validateOn(e){if("object"==typeof e&&null!==e){(0,r.f)("[KolTabs] Pr\xfcfen, wie man auch einen EventCallback einzeln \xe4ndern kann.");const t={};"function"!=typeof e.onCreate&&"object"!=typeof e.onCreate||("object"==typeof e.onCreate?("string"==typeof e.onCreate.label&&e.onCreate.label.length>0?this.onCreateLabel=e.onCreate.label:a.L.debug("[KolTabs] Der Label-Text f\xfcr Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof e.onCreate.callback?t.onCreate=e.onCreate.callback:a.L.debug("[KolTabs] Die onCreate-Callback-Funktion f\xfcr Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):t.onCreate=e.onCreate,this.showCreateTab="function"==typeof t.onCreate),"function"==typeof e.onSelect&&(t.onSelect=e.onSelect),(0,i.s)(this,"_on",t)}}validateSelected(e){(0,i.e)(this,"_selected",e,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(e){(0,i.d)(this,"_tabs",(e=>"object"==typeof e&&null!==e&&"string"==typeof e._label&&e._label.length>0),e,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,r.u)("KolTabs",this.state._tabs.length)}validateTabsAlign(e){((e,t,o)=>{(0,i.a)(e,t,(e=>"bottom"===e||"left"===e||"right"===e||"top"===e),d,o)})(this,"_tabsAlign",e)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let e=0;e<this.tabPanelHost.children.length;e++)e!==this.state._selected?this.tabPanelHost.children[e].setAttribute("hidden",""):this.tabPanelHost.children[e].removeAttribute("hidden")}onSelect(e,t,o=!1){var n,r;this._selected=t,"function"==typeof(null===(n=this._on)||void 0===n?void 0:n.onSelect)&&(null===(r=this._on)||void 0===r||r.onSelect(e,t)),!0===o&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const e=(0,i.k)(`button#tab-${t}`,this.tabPanelsElement);null==e||e.focus()}}),250))}get host(){return(0,n.g)(this)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};h.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}:host button[aria-selected='true'],:host button:focus{border-bottom-color:var(--kolibri-color-accent) !important;border-bottom-width:6px !important}:host .close-button{font-size:50%;height:fit-content;left:-3em;position:relative;top:0.25em}"}},78477:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>E,b:()=>M,c:()=>x,d:()=>$,e:()=>O,f:()=>P,g:()=>N,h:()=>J,i:()=>ee,j:()=>F,k:()=>W,l:()=>te,m:()=>I,n:()=>Q,o:()=>L,p:()=>B,q:()=>U,r:()=>c,s:()=>H,t:()=>X,u:()=>K,w:()=>D});var n=o(58272),r=o(80731),a=o(21591);const i=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;i(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;i(o,l(e,"object"==typeof r&&null!==r?r:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;if(o=s(e,"object"==typeof r&&null!==r?r:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=g,d=g,h=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},b=function(e){3==(t=p(e)).length&&t.push(255);var t,o=255==t[3],n=m(t[0]),r=m(t[1]),a=m(t[2]),i=function(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(n,r,a,t=m(Math.round(t[3])));return o?i?"#"+n.charAt(0)+r.charAt(0)+a.charAt(0):"#"+n+r+a:i?"#"+n.charAt(0)+r.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+r+a+t},f=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function g(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=v(t[0]),r=v(t[1]),a=v(t[2]),i=3==o?255:v(t[3]);if(isNaN(n)||isNaN(r)||isNaN(a)||isNaN(i))return;return[n,r,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=v(t.slice(0,2)),r=v(t.slice(2,4)),a=v(t.slice(4,6)),i=6==o?255:v(t.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(a)||isNaN(i))return;return[n,r,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0),a=y(255*t[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=a)return[o,n,r,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),o=y(e[1],!0),n=y(e[2],!0),r=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=b,c.num=f;var k=1/12.92;function w(e){return Math.pow((e+.055)/1.055,2.4)}function _(e){var t=e[0]/255,o=e[1]/255,n=e[2]/255;return.2126*(t<=.03928?t*k:w(t))+.7152*(o<=.03928?o*k:w(o))+.0722*(n<=.03928?n*k:w(n))}function S(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function T(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(_(e),_(t))}function x(e,t){return T(S(e),S(t))}function A(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const C=/\[object Object\]/,L=(e,t)=>{"string"==typeof e&&C.test(e)||t()},N=(e,t)=>{"string"==typeof e&&""===e||t()},P=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},H=(e,t,o,n={})=>{var r,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const r=t.get("beforePatch");"function"==typeof r&&r(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},E=(e,t,o,n,a,i={})=>{o(a)?H(e,t,a,null==i?void 0:i.hooks):void 0===a||null===a&&(void 0===(null==i?void 0:i.required)||!1===(null==i?void 0:i.required))?H(e,t,null==i?void 0:i.defaultValue,null==i?void 0:i.hooks):(void 0!==(null==i?void 0:i.required)&&!1!==(null==i?void 0:i.required)||n.add(null),((e,t,o,n)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,a,n))},M=(e,t,o,n)=>{E(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},D=(e,t,o,n={})=>{const r="number"==typeof n.minLength?null==n?void 0:n.minLength:0;E(e,t,(e=>"string"==typeof e&&e.length>=r),new Set([`String (Mindestl\xe4nge ${r})`]),o,n)},O=(e,t,o,n)=>{E(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)},$=(e,t,o,n,r=(e=>e==e),i={})=>{N(n,(()=>{L(n,(()=>{void 0===n&&(n=[]);try{try{n=B(n)}catch(e){}if(Array.isArray(n)){const l=n.find((e=>!o(e)));void 0===l&&r(n)?H(e,t,n,i.hooks):L(l,(()=>{throw a.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else L(n,(()=>{throw a.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},j=/^(true|false)$/,q=/^-?(0|[1-9]\d*)$/,z=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,I=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(j.test(e))e="true"===e;else if(q.test(e))e=parseInt(e);else if(z.test(e))e=parseFloat(e);else if(R.test(e))try{e=B(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},K=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},R=/^[{[]/,B=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(R.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},J=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,F=e=>"string"==typeof e?e:J(e),W=(e,t)=>s(e,t||(0,a.g)()),U=(e,t)=>l(e,t||(0,a.g)());let G=null;const V=()=>(G=G||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},G),Y=/(\d+, ){3}0\)/,Q=(e,t=V())=>{const o=getComputedStyle(e),n=Y.test(o.backgroundColor)?t.backgroundColor:c.hex(o.backgroundColor),r=Y.test(o.color)?t.color:c.hex(o.color),i=x(n,r),l={backgroundColor:n,color:r,domNode:e,level:A(i),score:i};return i<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},X=(e,t=V())=>{t.domNode instanceof HTMLElement&&(t=Q(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=X(e,t)).domNode);n++);return t}return Q(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=W(e,t);o instanceof HTMLElement?Z(o):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,n=!0){let r=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===n&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)o.add(a[e]);const i=Array.from(o);for(let l=0;l<i.length;l++){let o=te.cache.get(i[l]);void 0===o&&(o=Q(i[l],t)),te.cache.set(i[l],o);const n=te.queryHtmlElementColors(e,o,!0,!1);if(null!==n){r=n;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),r}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=n.p,oe.patchThemeTag=n.a,oe.querySelector=W,oe.querySelectorAll=U,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=K}}]);