/*! For license information please see 252.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[252],{50252:(i,e,o)=>{o.r(e),o.d(e,{kol_accordion:()=>s});var n=o(99459),t=o(65815),a=o(13136),r=o(27289),l=o(70104);(0,t.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,t.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const s=class{constructor(i){(0,n.r)(this,i),this.nonce=(0,a.n)(),this.catchAriaExpanded=i=>{i instanceof HTMLButtonElement&&(this.buttonRef=i,this.triggerAriaExpanded(i))},this.triggerAriaExpanded=i=>{i.setAttribute("aria-expanded",this.state._open?"true":"false")},this.onClick=i=>{this._open=!1===this._open;const e=setTimeout((()=>{var o;clearTimeout(e),"function"==typeof(null===(o=this.state._on)||void 0===o?void 0:o.onClick)&&this.state._on.onClick(i,!0===this._open),this.buttonRef instanceof HTMLButtonElement&&this.triggerAriaExpanded(this.buttonRef)}))},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"⚠",_level:1}}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{part:"accordion "+(this.state._open?"open":"close")},(0,n.h)("kol-heading-wc",{_label:"",_level:this.state._level},(0,n.h)("button",{"aria-controls":this.nonce,ref:this.catchAriaExpanded,onClick:this.onClick},(0,n.h)("kol-icon",{_ariaLabel:"",_icon:this.state._open?"fa-solid fa-minus":"fa-solid fa-plus",_part:this.state._open?"close":"open"}),(0,n.h)("span",null,this.state._heading))),(0,n.h)("div",{part:"header"},(0,n.h)("slot",{name:"header"})),(0,n.h)("div",{id:this.nonce,part:"content",style:!1===this.state._open?{display:"none",height:"0",visibility:"hidden"}:void 0},(0,n.h)("slot",{name:"content"}))))}validateHeading(i){(0,r.w)(this,"_heading",i,{required:!0})}validateLevel(i){(0,l.w)(this,i)}validateOn(i){"object"==typeof i&&null!==i&&"function"==typeof i.onClick&&(0,r.s)(this,"_on",i)}validateOpen(i){(0,r.b)(this,"_open",i)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};s.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}"}},70104:(i,e,o)=>{o.d(e,{w:()=>t});var n=o(27289);const t=(i,e)=>{(0,n.a)(i,"_level",(i=>"number"==typeof i&&1<=i&&i<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);