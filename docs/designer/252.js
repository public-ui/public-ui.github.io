/*! For license information please see 252.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[252],{50252:(e,n,t)=>{t.r(n),t.d(n,{kol_accordion:()=>h});var i=t(99459),o=t(82120),a=t(99311),s=t(80161),l=t(23541),d=t(42227);(0,o.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,o.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const h=class{constructor(e){(0,i.r)(this,e),this.nonce=(0,a.n)(),this.onClick=e=>{this._open=!1===this._open,setTimeout((()=>{var n;"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"…",_level:1}}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{accordion:!0,open:!0===this.state._open,close:!0!==this.state._open}},(0,i.h)("kol-heading-wc",{_headline:"",_level:this.state._level},(0,i.h)("kol-button-wc",{_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icon:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._heading,_on:{onClick:this.onClick}})),(0,i.h)("div",{class:"header"},(0,i.h)("slot",{name:"header"})),(0,i.h)("div",{"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce,hidden:!1===this.state._open,style:!1===this.state._open?{display:"none",height:"0",visibility:"hidden"}:void 0},(0,i.h)("slot",{name:"content"}))))}validateHeading(e){(0,s.w)(this,"_heading",e,{required:!0})}validateLevel(e){(0,l.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,s.s)(this,"_on",e)}validateOpen(e){(0,d.v)(this,e)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};h.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']){min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}.accordion kol-heading-wc kol-button-wc button kol-span-wc{justify-items:start}"}},42227:(e,n,t)=>{t.d(n,{v:()=>o});var i=t(80161);const o=(e,n)=>{(0,i.b)(e,"_open",n)}},23541:(e,n,t)=>{t.d(n,{w:()=>o});var i=t(80161);const o=(e,n)=>{(0,i.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),n,{defaultValue:1,required:!0})}}}]);