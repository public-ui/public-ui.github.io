/*! For license information please see 3641.29fbe1fb.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3641],{1292:(e,t,a)=>{a.d(t,{a:()=>c});var i=a(3154),n=a(6038);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(r))]),c=(e,t)=>{const a=(0,i.g)();if(void 0===a)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=a.translate(e,t);return r===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(a.addResourceBundle(e,t),e))))),r=a.translate(e,t)),r}},3641:(e,t,a)=>{a.r(t),a.d(t,{kol_kolibri:()=>c});var i=a(396),n=a(8605),r=a(466),o=a(1292);const l=/^#([a-f0-9]{3}|[a-f0-9]{6})$/;function s(e){return Math.round((Math.cos(function(e){return e*Math.PI/180}(e))+1)/2*225)}const c=class{constructor(e){(0,i.r)(this,e),this.handleColorChange=(e,t)=>{const a=(0,n.c)(e);t.set("_color",{red:a[0],green:a[1],blue:a[2]})},this._animate=void 0,this._color="#003c78",this._labeled=void 0,this.state={_animate:!1,_color:{red:0,green:60,blue:120},_labeled:!0}}render(){const e=!0===this.state._animate?`rgb(${s(this.state._color.red)},${s(this.state._color.green)},${s(this.state._color.blue)})`:`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return(0,i.h)(i.H,null,(0,i.h)("svg",{role:"img","aria-label":(0,o.a)("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:e},(0,i.h)("path",{d:"M353 322L213 304V434L353 322Z"}),(0,i.h)("path",{d:"M209 564V304L149 434L209 564Z"}),(0,i.h)("path",{d:"M357 316L417 250L361 210L275 244L357 316Z"}),(0,i.h)("path",{d:"M329 218L237 92L250 222L272 241L329 218Z"}),(0,i.h)("path",{d:"M353 318L35 36L213 300L353 318Z"}),(0,i.h)("path",{d:"M391 286L565 272L421 252L391 286Z"}),!0===this.state._labeled&&(0,i.h)("text",{x:"250",y:"525",fill:e},"KoliBri")))}validateAnimate(e){(0,r.b)(this,"_animate",e)}validateColor(e){(0,r.a)(this,"_color",(e=>"string"==typeof e&&l.test(e)),new Set(["Color Hex Color Codes"]),e,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(e){(0,r.b)(this,"_labeled",e)}componentWillLoad(){this.validateAnimate(this._animate),this.validateColor(this._color),this.validateLabeled(this._labeled)}componentDidRender(){clearInterval(this.interval),this.state._animate&&(this.interval=setInterval((()=>{this.state=Object.assign(Object.assign({},this.state),{_color:{red:(this.state._color.red+1)%360,green:(this.state._color.green+2)%360,blue:(this.state._color.blue+3)%360}})}),50))}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_animate:["validateAnimate"],_color:["validateColor"],_labeled:["validateLabeled"]}}};c.style={default:"*{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:bold}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}text{font-size:90px;letter-spacing:normal !important;word-spacing:normal !important}"}}}]);