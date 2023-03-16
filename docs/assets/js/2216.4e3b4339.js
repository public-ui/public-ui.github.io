/*! For license information please see 2216.4e3b4339.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2216],{24965:(e,i,t)=>{t.d(i,{a:()=>c});var r=t(49976),o=t(97432);const a={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},n={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((i,t)=>(i[`kol-${t}`]=e[t],i)),{}),s=new Set([e=>e("en",l(n)),e=>e("de",l(a))]),c=(e,i)=>{const t=(0,r.g)();if(void 0===t)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=t.translate(e,i);return a===e&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,i)=>(t.addResourceBundle(e,i),e))))),a=t.translate(e,i)),a}},92216:(e,i,t)=>{t.r(i),t.d(i,{kol_kolibri:()=>c});var r=t(55891),o=t(63447),a=t(49452),n=t(24965);const l=/^#([a-f0-9]{3}|[a-f0-9]{6})$/;function s(e){return Math.round((Math.cos(function(e){return e*Math.PI/180}(e))+1)/2*225)}const c=class{constructor(e){(0,r.r)(this,e),this.handleColorChange=(e,i)=>{const t=(0,o.c)(e);i.set("_color",{red:t[0],green:t[1],blue:t[2]})},this._animate=void 0,this._color="#003c78",this._labeled=void 0,this.state={_animate:!1,_color:{red:0,green:60,blue:120},_labeled:!0}}render(){const e=!0===this.state._animate?`rgb(${s(this.state._color.red)},${s(this.state._color.green)},${s(this.state._color.blue)})`:`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return(0,r.h)(r.H,null,(0,r.h)("svg",{role:"img","aria-label":(0,n.a)("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:e},(0,r.h)("path",{d:"M353 322L213 304V434L353 322Z"}),(0,r.h)("path",{d:"M209 564V304L149 434L209 564Z"}),(0,r.h)("path",{d:"M357 316L417 250L361 210L275 244L357 316Z"}),(0,r.h)("path",{d:"M329 218L237 92L250 222L272 241L329 218Z"}),(0,r.h)("path",{d:"M353 318L35 36L213 300L353 318Z"}),(0,r.h)("path",{d:"M391 286L565 272L421 252L391 286Z"}),!0===this.state._labeled&&(0,r.h)("text",{x:"250",y:"525",fill:e},"KoliBri")))}validateAnimate(e){(0,a.b)(this,"_animate",e)}validateColor(e){(0,a.a)(this,"_color",(e=>"string"==typeof e&&l.test(e)),new Set(["Color Hex Color Codes"]),e,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(e){(0,a.b)(this,"_labeled",e)}componentWillLoad(){this.validateAnimate(this._animate),this.validateColor(this._color),this.validateLabeled(this._labeled)}componentDidRender(){clearInterval(this.interval),this.state._animate&&(this.interval=setInterval((()=>{this.state=Object.assign(Object.assign({},this.state),{_color:{red:(this.state._color.red+1)%360,green:(this.state._color.green+2)%360,blue:(this.state._color.blue+3)%360}})}),50))}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_animate:["validateAnimate"],_color:["validateColor"],_labeled:["validateLabeled"]}}};c.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size)}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}text{font-size:90px;letter-spacing:normal;word-spacing:normal}"}}}]);