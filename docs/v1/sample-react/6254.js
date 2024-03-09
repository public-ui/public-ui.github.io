/*! For license information please see 6254.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[6254],{8748:(e,t,a)=>{a.d(t,{v:()=>n});var i=a(251);const n=(e,t,a={})=>{(0,i.a)(e,"_hideLabel",t,a)}},6175:(e,t,a)=>{a.d(t,{t:()=>c});var i=a(1508),n=a(8125);const l={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},o=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),s=new Set([e=>e("en",o(r)),e=>e("de",o(l))]);let c=(e,t)=>{const a=(0,i.g)();let n=a.translate(e,t);return n===e&&(a.addTranslations(s),n=a.translate(e,t)),n};"test"===n.p&&(c=e=>e)},6254:(e,t,a)=>{a.r(t),a.d(t,{kol_nav:()=>d});var i=a(3887),n=a(6175),l=a(251),r=a(8748),o=a(1123),s=a(2870),c=a(3087),h=a(8575);const d=class{constructor(e){(0,i.r)(this,e),this.onClick=e=>{e._active=!e._active,this.state=Object.assign({},this.state)},this.hasActiveChild=e=>!!(Array.isArray(e._children)&&e._children.length>0)&&e._children.some(this.hasActiveChild),this.linkList=e=>(0,i.h)("ul",{class:"list "+(0===e.deep&&"horizontal"===e.orientation?" horizontal":" vertical"),"data-deep":e.deep},e.links.map(((t,a)=>this.li(e.collapsible,e.hideLabel,e.deep,a,t,e.orientation)))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!0,this._compact=!1,this._hasCompactButton=!1,this._hideLabel=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this._variant="primary",this.state={_ariaCurrentValue:!1,_collapsible:!0,_hasCompactButton:!1,_hideLabel:!1,_label:"…",_links:[],_orientation:"vertical",_variant:"primary"}}entry(e,t,a,n,l){return(0,i.h)("div",{class:{entry:!0,"hide-label":t}},(0,i.h)("kol-button-link-text-switch",{_link:Object.assign(Object.assign({},n),{_hideLabel:t})}),a?this.expandButton(e,n,l):"")}expandButton(e,t,a){return(0,i.h)("kol-button-wc",{class:"expand-button",_ariaExpanded:a,_disabled:!e,_icons:"codicon codicon-"+(a?"remove":"add"),_hideLabel:!0,_label:`Untermenü zu ${t._label} ${a?"schließen":"öffnen"}`,_on:{onClick:()=>this.onClick(t)}})}li(e,t,a,n,l,r){const o=!!l._active,s=Array.isArray(l._children)&&l._children.length>0,c=s&&o;return(0,i.h)("li",{class:{active:o,expanded:c,"has-children":s,selected:c},key:n},this.entry(e,t,s,l,o),c?(0,i.h)(this.linkList,{collapsible:e,hideLabel:t,deep:a+1,links:l._children||[],orientation:r}):"")}render(){let e=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,(0,s.h)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const t=!0===this.state._collapsible,a=!0===this.state._hideLabel,l=this.state._orientation;return(0,i.h)(i.H,{key:"b707571cc70813b51b8067170303d9ef0cfc3462",class:"kol-nav"},(0,i.h)("div",{key:"3c2f82ac1e90884fac4e160d9b522a66291de3ae",class:{[l]:!0,[this.state._variant]:!0}},(0,i.h)("nav",{key:"12c36e4ac509618773e8bad6480d2743bb3c6a96","aria-label":this.state._label,id:"nav"},(0,i.h)(this.linkList,{key:"ca6c29b66114e792b87c08ab76d6ed96f394e5db",collapsible:t,hideLabel:a,deep:0,links:this.state._links,orientation:l})),e&&(0,i.h)("div",{class:"compact"},(0,i.h)("kol-button",{_ariaControls:"nav",_ariaExpanded:!a,_icons:a?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:(0,n.t)(a?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_hideLabel:!1===this.state._hideLabel})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(e){(0,l.w)(this,"_ariaCurrentValue",(e=>!0===e||"date"===e||"location"===e||"page"===e||"step"===e||"time"===e),new Set(["boolean","String {data, location, page, step, time}"]),e)}validateAriaLabel(e){this.validateLabel(e)}validateCollapsible(e){((e,t)=>{(0,l.a)(e,"_collapsible",t)})(this,e)}validateCompact(e){this.validateHideLabel(e)}validateHasCompactButton(e){((e,t)=>{(0,l.a)(e,"_hasCompactButton",t)})(this,e)}validateHideLabel(e){(0,r.v)(this,e)}validateLabel(e,t,a=!1){a||(0,c.r)(this.state._label),(0,o.v)(this,e,{required:!0}),(0,s.b)(e),(0,c.a)(this.state._label)}validateLinks(e){(0,h.w)("KolNav",this,e),(0,s.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(e){(0,l.w)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateVariant(e){(0,l.w)(this,"_variant",(e=>"primary"===e||"secondary"===e),new Set(["KoliBriNavVariant {primary, secondary}"]),e,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateCollapsible(this._collapsible),this.validateHideLabel(this._hideLabel||this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLabel(this._label||this._ariaLabel,void 0,!0),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){(0,c.r)(this.state._label)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_hideLabel:["validateHideLabel"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};d.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host>div{display:grid;place-items:center}nav{width:100%}.list{display:flex;list-style:none;margin:0;padding:0}.list.vertical{flex-direction:column}.entry{display:flex}.entry .kol-button-wc:first-child,.entry .kol-link-wc,.entry .kol-span-wc{flex-grow:1}.entry .kol-span-wc{justify-items:start}"}},1123:(e,t,a)=>{a.d(t,{a:()=>d,c:()=>s,h:()=>o,v:()=>h});var i=a(2870),n=a(251);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,r=/^\d+$/;function o(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return r.test(e)}const c=new Set(["string"]),h=(e,t,a={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,a,n,l)=>{var r,c;"function"==typeof(null===(r=e.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,n,l)),"string"==typeof t&&!1===o(t,3)&&!1===s(t)&&(0,i.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(a))},d=h},3087:(e,t,a)=>{a.d(t,{a:()=>n,r:()=>l});const i=new Set;function n(e){i.has(e)?console.error(`There already is a nav element with the label "${e}"`):i.add(e)}function l(e){i.delete(e)}},8575:(e,t,a)=>{a.d(t,{w:()=>l});var i=a(2870),n=a(251);const l=(e,t,a)=>{(0,n.c)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),a),(0,i.c)(e,t.state._links.length)}}}]);