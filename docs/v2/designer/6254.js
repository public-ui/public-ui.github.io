/*! For license information please see 6254.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6254],{30306:(e,n,t)=>{t.d(n,{t:()=>d});var i=t(15587),a=t(51508);const l={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},o=e=>Object.keys(e).reduce(((n,t)=>(n[`kol-${t}`]=e[t],n)),{}),r=new Set([e=>e("en",o(s)),e=>e("de",o(l))]);let d=(e,n)=>{const t=(0,a.g)();let i=t.translate(e,n);return i===e&&(t.addTranslations(r),i=t.translate(e,n)),i};"test"===i.p&&(d=e=>e)},86254:(e,n,t)=>{t.r(n),t.d(n,{kol_nav:()=>r});var i=t(16120),a=t(15587),l=t(30306),s=t(53087),o=t(56897);const r=class{constructor(e){(0,i.r)(this,e),this.handleToggleExpansionClick=e=>{e&&(this.state._expandedChildren.includes(e)?this.collapseChildren(e):this.expandChildren(e))},this.linkList=e=>(0,i.h)("ul",{class:"list "+(0===e.deep&&"horizontal"===e.orientation?" horizontal":" vertical"),"data-deep":e.deep},e.links.map(((n,t)=>this.li(e.collapsible,e.hideLabel,e.deep,t,n,e.orientation)))),this._collapsible=!0,this._hasCompactButton=!1,this._hasIconsWhenExpanded=!1,this._hideLabel=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_collapsible:!0,_hasCompactButton:!1,_hasIconsWhenExpanded:!1,_hideLabel:!1,_label:"",_links:[],_orientation:"vertical",_expandedChildren:[]}}expandChildren(e){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:[...this.state._expandedChildren,e]})}collapseChildren(e){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:this.state._expandedChildren.filter((n=>n!=e))})}entry(e,n,t,a,l){const s=this.state._hasIconsWhenExpanded||this.state._hideLabel?a._icons||(this.state._hideLabel?"codicon codicon-symbol-method":void 0):void 0;return(0,i.h)("div",{class:{entry:!0,"hide-label":n}},"_href"in a?(0,i.h)("kol-link-wc",Object.assign({class:"entry-item"},a,{_hideLabel:n,_icons:s})):(0,i.h)("kol-button-wc",{class:"entry-item",_label:a._label,_hideLabel:n,_icons:s,_on:{onClick:()=>this.handleToggleExpansionClick(a._children)}}),t?this.expandButton(e,a,l):"")}expandButton(e,n,t){return(0,i.h)("kol-button-wc",{class:"expand-button",_ariaExpanded:t,_disabled:!e,_icons:"codicon codicon-"+(t?"remove":"add"),_hideLabel:!0,_label:`Untermenü zu ${n._label} ${t?"schließen":"öffnen"}`,_on:{onClick:()=>this.handleToggleExpansionClick(n._children)}})}li(e,n,t,a,l,s){const o=!!l._active,r=Array.isArray(l._children)&&l._children.length>0,d=Boolean(l._children&&this.state._expandedChildren.includes(l._children));return(0,i.h)("li",{class:{active:o,expanded:d,"has-children":r},key:a},this.entry(e,n,r,l,d),d&&(0,i.h)(this.linkList,{collapsible:e,hideLabel:n,deep:t+1,links:l._children||[],orientation:s}))}initializeExpandedChildren(){const e=n=>{if(n._active)return n._children&&this.expandChildren(n._children),!0;if(n._children)for(const t of n._children)if(e(t))return this.expandChildren(n._children),!0;return!1};this.state._links.forEach(e)}render(){let e=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,(0,a.$)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const n=!0===this.state._collapsible,t=!0===this.state._hideLabel,s=this.state._orientation;return(0,i.h)(i.H,{key:"431b237b655ccee8b34ca35a5fe79b9335622519",class:"kol-nav"},(0,i.h)("div",{key:"b240ec9f9e5219aa57a599c85cb674c917aff8f2",class:{nav:!0,[s]:!0,"is-compact":this.state._hideLabel}},(0,i.h)("nav",{key:"1dc5602f413110870e810d6e30327801a9740eda","aria-label":this.state._label,id:"nav"},(0,i.h)(this.linkList,{key:"d1587c7add1882c85a0b2b10e04db26c0be51f09",collapsible:n,hideLabel:t,deep:0,links:this.state._links,orientation:s})),e&&(0,i.h)("div",{class:"compact"},(0,i.h)("kol-button",{_ariaControls:"nav",_ariaExpanded:!t,_icons:t?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:(0,l.t)(t?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_hideLabel:!1===this.state._hideLabel})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateCollapsible(e){(0,a.ad)(this,e)}validateHasCompactButton(e){(0,a.ae)(this,e)}validateHasIconsWhenExpanded(e){(0,a.af)(this,e)}validateHideLabel(e){(0,a.P)(this,e)}validateLabel(e,n,t=!1){t||(0,s.r)(this.state._label),(0,a.v)(this,e,{required:!0}),(0,a.t)(e),(0,s.a)(this.state._label)}validateLinks(e){(0,o.w)("KolNav",this,e),(0,a.R)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(e){(0,a.w)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}componentWillLoad(){this.validateCollapsible(this._collapsible),this.validateHideLabel(this._hideLabel),this.validateHasCompactButton(this._hasCompactButton),this.validateHasIconsWhenExpanded(this._hasIconsWhenExpanded),this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.initializeExpandedChildren()}disconnectedCallback(){(0,s.r)(this.state._label)}static get watchers(){return{_collapsible:["validateCollapsible"],_hasCompactButton:["validateHasCompactButton"],_hasIconsWhenExpanded:["validateHasIconsWhenExpanded"],_hideLabel:["validateHideLabel"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};r.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host > div {\n    display: grid;\n    place-items: center;\n  }\n  :not(.is-compact) nav {\n    width: 100%;\n  }\n  .list {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  .list.vertical {\n    flex-direction: column;\n  }\n  .entry {\n    display: flex;\n  }\n  .entry-item {\n    flex-grow: 1;\n  }\n}"}},53087:(e,n,t)=>{t.d(n,{a:()=>a,r:()=>l});const i=new Set;function a(e){i.has(e)?console.error(`There already is a nav element with the label "${e}"`):i.add(e)}function l(e){i.delete(e)}},56897:(e,n,t)=>{t.d(n,{w:()=>a});var i=t(15587);const a=(e,n,t)=>{(0,i.u)(n,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),t),(0,i.x)(e,n.state._links.length)}}}]);