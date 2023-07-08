/*! For license information please see 6077.2b5a2bf0.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6077],{19716:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>p,c:()=>m,d:()=>c,e:()=>l,f:()=>u,g:()=>f,h:()=>d,u:()=>g});var o=n(71832);const a=new Set,i=e=>{!1===a.has(e)&&(a.add(e),o.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,l=e=>{!1===r.has(e)&&(r.add(e),o.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),o.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===s.has(e)&&(s.add(e),o.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,u=(e,t=!1)=>{!1===h.has(e)&&(h.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const b=new Set,g=e=>{!1===b.has(e)&&(b.add(e),o.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},41492:(e,t,n)=>{n.d(t,{a:()=>c});var o=n(18667),a=n(19716);const i={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),s=new Set([e=>e("en",l(r)),e=>e("de",l(i))]),c=(e,t)=>{const n=(0,o.g)();if(void 0===n)return(0,a.d)("[I18n] I18nService not available! Please call the global register function."),e;let i=n.translate(e,t);return i===e&&((0,a.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),i=n.translate(e,t)),i}},96077:(e,t,n)=>{n.r(t),n.d(t,{kol_tabs:()=>u});var o=n(21886),a=n(41492),i=n(98856),r=n(19716),l=n(71832),s=n(41679);const c=new Set(['"left", "right"']),d=new Set(['"bottom", "top"']),h=new Set([...c,...d]),u=class{constructor(e){(0,o.r)(this,e),this.onCreateLabel=`${(0,a.a)("kol-new")} \u2026`,this.showCreateTab=!1,this.nextPossibleTabIndex=(e,t,n)=>{if(n>0){if(t+n<e.length)return e[t+n]._disabled?this.nextPossibleTabIndex(e,t,n+1):t+n}else if(n<0&&t+n>=0)return e[t+n]._disabled?this.nextPossibleTabIndex(e,t,n-1):t+n;return t},this.onKeyDown=e=>{const t=setTimeout((()=>{clearTimeout(t);let n=null;switch(e.key){case"ArrowRight":n=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":n=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==n&&this.onSelect(e,n,!0)}),250)},this.onClickSelect=(e,t)=>{this.onSelect(e,t,!0)},this.onMouseDown=e=>{e.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=e=>{this.tabPanelHost=e},this.selectNextNotDisabledTab=(e,t,n=!0,o)=>{if(e>t.length-1&&(e=t.length-1),e<0&&(e=0),Array.isArray(t)&&t[e]&&t[e]._disabled){if(!0===n){if(e<t.length-1)return this.selectNextNotDisabledTab(e+1,t,!0,o||e);e=o||e,n=!1}if(!1===n){if(e>0)return this.selectNextNotDisabledTab(e-1,t,!1,o||e);(0,r.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return e},this.syncSelectedAndTabs=(e,t,n,o)=>{let a,i;a="_selected"===o?e:this.state._selected,i="_tabs"===o?e:this.state._tabs,i.length>0&&t.set("_selected",this.selectNextNotDisabledTab(a,i))},this.handleTabPanels=()=>{var e,t,n;if(this.tabPanelHost instanceof HTMLDivElement)for(let o=this.tabPanelHost.children.length;o<this.state._tabs.length;o++){const a=document.createElement("div");a.setAttribute("aria-labelledby",`tab-${o}`),a.setAttribute("id",`tabpanel-${o}`),a.setAttribute("role","tabpanel"),a.setAttribute("hidden","");const i=document.createElement("slot");i.setAttribute("name",`tabpanel-slot-${o}`),a.appendChild(i),this.tabPanelHost.appendChild(a),(null===(e=this.host)||void 0===e?void 0:e.children)instanceof HTMLCollection&&(null===(t=this.host)||void 0===t?void 0:t.children[o])&&(null===(n=this.host)||void 0===n||n.children[o].setAttribute("slot",`tabpanel-slot-${o}`))}},this.onCreate=e=>{var t,n;e.stopPropagation(),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onCreate)&&(null===(n=this.state._on)||void 0===n||n.onCreate(e))},this._ariaLabel=void 0,this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_label:"\u2026",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return(0,o.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown},this.state._tabs.map(((e,t)=>(0,o.h)("kol-button-wc",{_disabled:e._disabled,_icon:e._icon,_hideLabel:e._hideLabel||e._iconOnly,_label:e._label,_on:this.callbacks,_tabIndex:this.state._selected===t?0:-1,_tooltipAlign:e._tooltipAlign,_variant:this.state._selected===t?"custom":void 0,_customClass:this.state._selected===t?"selected":void 0,_ariaControls:`tabpanel-${t}`,_ariaSelected:this.state._selected===t,_id:`tab-${t}`,_role:"tab",_value:t}))),this.showCreateTab&&(0,o.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{ref:e=>{this.tabPanelsElement=e},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,o.h)("div",{ref:this.catchTabPanelHost})))}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e){(0,i.v)(this,e)}validateOn(e){if("object"==typeof e&&null!==e){(0,r.f)("[KolTabs] Pr\xfcfen, wie man auch einen EventCallback einzeln \xe4ndern kann.");const t={};"function"!=typeof e.onCreate&&"object"!=typeof e.onCreate||("object"==typeof e.onCreate?("string"==typeof e.onCreate.label&&e.onCreate.label.length>0?this.onCreateLabel=e.onCreate.label:l.L.debug("[KolTabs] Der Label-Text f\xfcr Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof e.onCreate.callback?t.onCreate=e.onCreate.callback:l.L.debug("[KolTabs] Die onCreate-Callback-Funktion f\xfcr Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):t.onCreate=e.onCreate,this.showCreateTab="function"==typeof t.onCreate),"function"==typeof e.onSelect&&(t.onSelect=e.onSelect),(0,s.s)(this,"_on",t)}}validateSelected(e){(0,s.e)(this,"_selected",e,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(e){(0,s.d)(this,"_tabs",(e=>"object"==typeof e&&null!==e&&"string"==typeof e._label&&e._label.length>0),e,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,r.c)("KolTabs",this.state._tabs.length)}validateTabsAlign(e){((e,t,n)=>{(0,s.a)(e,t,(e=>"bottom"===e||"left"===e||"right"===e||"top"===e),h,n)})(this,"_tabsAlign",e)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let e=0;e<this.tabPanelHost.children.length;e++)e!==this.state._selected?this.tabPanelHost.children[e].setAttribute("hidden",""):this.tabPanelHost.children[e].removeAttribute("hidden")}onSelect(e,t,n=!1){var o,a;this._selected=t,"function"==typeof(null===(o=this._on)||void 0===o?void 0:o.onSelect)&&(null===(a=this._on)||void 0===a||a.onSelect(e,t)),!0===n&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const e=(0,s.k)(`button#tab-${t}`,this.tabPanelsElement);null==e||e.focus()}}),250))}get host(){return(0,o.g)(this)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};u.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}kol-button-group-wc{display:inline-flex;flex-wrap:wrap}kol-button-group-wc button{border-bottom-color:transparent;border-bottom-style:solid;display:block}div.grid,div[role='tabpanel']{height:100%}:host>.tabs-align-right{display:grid;grid-template-columns:1fr auto}:host>.tabs-align-right kol-button-group-wc{display:grid;order:2}:host>.tabs-align-left{display:grid;grid-template-columns:auto 1fr}:host>.tabs-align-left kol-button-group-wc{display:grid;order:0}:host>.tabs-align-bottom{display:grid;grid-template-rows:1fr auto}:host>.tabs-align-bottom kol-button-group-wc{order:2}:host>.tabs-align-bottom kol-button-group-wc>div{display:flex}:host>.tabs-align-bottom>kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-bottom>kol-button-group-wc>div>div{margin:0 1em}:host>.tabs-align-top{display:grid;grid-template-rows:auto 1fr}:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-top kol-button-group-wc>div{display:flex}:host>.tabs-align-top>kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-top>kol-button-group-wc>div>div{margin:0 1em}:host>div{display:grid}:host>.tabs-align-left kol-button-group-wc,:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-bottom kol-button-group-wc,:host>.tabs-align-right kol-button-group-wc{order:1}:host>div.tabs-align-left kol-button-group-wc>div,:host>div.tabs-align-left kol-button-group-wc>div>div,:host>div.tabs-align-right kol-button-group-wc>div,:host>div.tabs-align-right kol-button-group-wc>div>div{display:grid}:host>div.tabs-align-left kol-button-group-wc>div>div kol-button-wc,:host>div.tabs-align-right kol-button-group-wc>div>div kol-button-wc{width:100%}:host>div.tabs-align-bottom kol-button-group-wc div,:host>div.tabs-align-top kol-button-group-wc div{display:flex;flex-wrap:wrap}"}},98856:(e,t,n)=>{n.d(t,{a:()=>b,c:()=>s,h:()=>l,v:()=>h});var o=n(19716),a=n(41679);const i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,r=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(i))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return r.test(e)}function c(e){var t;return{hooks:{afterPatch:(t,n,a,i)=>{var r,c;"function"==typeof(null===(r=e.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,n,a,i)),"string"==typeof t&&!1===l(t,3)&&!1===s(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const d=new Set(["string"]),h=(e,t,n={})=>{(0,a.a)(e,"_label",(e=>"string"==typeof e),d,t,c(n))},u=new Set(["string","false"]),b=(e,t,n={})=>{""!==t&&"false"!==t||(t=!1),(0,a.a)(e,"_label",(e=>!1===e||"string"==typeof e),u,t,c(n))}},41679:(e,t,n)=>{n.d(t,{K:()=>re,a:()=>O,b:()=>$,c:()=>N,d:()=>q,e:()=>I,f:()=>D,g:()=>M,h:()=>U,i:()=>ae,j:()=>G,k:()=>V,l:()=>ie,m:()=>F,n:()=>te,o:()=>E,p:()=>Z,q:()=>Y,r:()=>c,s:()=>z,t:()=>ne,u:()=>W,w:()=>j});var o=n(19716),a=n(71832),i=n(13079);const r=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;r(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const a=o[t].shadowRoot;r(n,l(e,"object"==typeof a&&null!==a?a:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const a=o[t].shadowRoot;if(n=s(e,"object"==typeof a&&null!==a?a:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=f,d=f,h=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},b=function(e){3==(t=p(e)).length&&t.push(255);var t,n=255==t[3],o=m(t[0]),a=m(t[1]),i=m(t[2]),r=function(e,t,n,o){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=a.indexOf(e)&&-1!=a.indexOf(t)&&-1!=a.indexOf(n)&&-1!=a.indexOf(o)}(o,a,i,t=m(Math.round(t[3])));return n?r?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0):"#"+o+a+i:r?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+a+i+t},g=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function f(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=v(t[0]),a=v(t[1]),i=v(t[2]),r=3==n?255:v(t[3]);if(isNaN(o)||isNaN(a)||isNaN(i)||isNaN(r))return;return[o,a,i,r]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=v(t.slice(0,2)),a=v(t.slice(2,4)),i=v(t.slice(4,6)),r=6==n?255:v(t.slice(6,8));if(isNaN(o)||isNaN(a)||isNaN(i)||isNaN(r))return;return[o,a,i,r]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),o=w(t[1],!0),a=w(t[2],!0);if(-1!=n&&-1!=o&&-1!=a)return[n,o,a,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),o=w(t[1],!0),a=w(t[2],!0),i=w(255*t[3]);if(-1!=n&&-1!=o&&-1!=a&&-1!=i)return[n,o,a,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),a=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=a)return[t,n,o,a]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),n=w(e[1],!0),o=w(e[2],!0),a=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=a)return[t,n,o,a]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=b,c.num=g;var y=.2126,k=.7152,S=.0722,_=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,a=t<=.03928?t*_:L(t),i=n<=.03928?n*_:L(n),r=o<=.03928?o*_:L(o);return a*y+i*k+r*S}function A(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function T(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function N(e,t){return T(A(e),A(t))}function C(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const P=/\[object Object\]/,E=(e,t)=>{"string"==typeof e&&P.test(e)||t()},M=(e,t)=>{"string"==typeof e&&""===e||t()},D=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},z=(e,t,n,o={})=>{var a,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const a=t.get("beforePatch");"function"==typeof a&&a(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},H=(e,t,n,a)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(a).join(", ")}`)};function O(e,t,n,o,a,i={}){n(a)?z(e,t,a,i.hooks):null!=a||i.required?(i.required||o.add(null),H(e,t,a,o)):z(e,t,i.defaultValue,i.hooks)}const $=(e,t,n,o)=>{O(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},j=(e,t,n,o={})=>{const a="number"==typeof o.minLength?null==o?void 0:o.minLength:0;O(e,t,(e=>"string"==typeof e&&e.length>=a&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},I=(e,t,n,o)=>{O(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},q=(e,t,n,o,i=(e=>e==e),r={})=>{M(o,(()=>{E(o,(()=>{void 0===o&&(o=[]);try{try{o=Z(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!n(e)));void 0===l&&i(o)?z(e,t,o,r.hooks):E(l,(()=>{throw a.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(o,(()=>{throw a.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},B=/^(true|false)$/,K=/^-?(0|[1-9]\d*)$/,R=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,F=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(B.test(e))e="true"===e;else if(K.test(e))e=parseInt(e);else if(R.test(e))e=parseFloat(e);else if(J.test(e))try{e=Z(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},W=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},J=/^[{[]/,Z=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(J.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,G=e=>"string"==typeof e?e:U(e),V=(e,t)=>s(e,t||(0,a.g)()),Y=(e,t)=>l(e,t||(0,a.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const n=getComputedStyle(e),o=ee.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),i=ee.test(n.color)?t.color:c.hex(n.color),r=N(o,i),l={backgroundColor:o,color:i,domNode:e,level:C(r),score:r};return r<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ne=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=ne(e,t)).domNode);o++);return t}return te(n,t)},oe=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ae=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=V(e,t);n instanceof HTMLElement?oe(n):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ie{static queryHtmlElementColors(e,t,n=!1,o=!0){let i=null;if(!0===n||!1===ie.executionLock)if(!1===n&&(ie.cache.clear(),ie.cache.set(t.domNode,t),ie.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)n.add(a[e]);const r=Array.from(n);for(let l=0;l<r.length;l++){let n=ie.cache.get(r[l]);void 0===n&&(n=te(r[l],t)),ie.cache.set(r[l],n);const o=ie.queryHtmlElementColors(e,n,!0,!1);if(null!==o){i=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ie.cache.size} DOM elements are analysed).`),ie.executionLock=!1,ie.cache.clear()),i}}ie.executionLock=!1,ie.cache=new Map;class re{}re.patchTheme=i.p,re.patchThemeTag=i.a,re.querySelector=V,re.querySelectorAll=Y,re.scrollByHTMLElement=oe,re.scrollBySelector=ae,re.stringifyJson=W}}]);