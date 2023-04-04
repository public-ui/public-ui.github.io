/*! For license information please see 5773.ed7d17ab.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5773],{45773:(e,t,n)=>{n.r(t),n.d(t,{kol_accordion:()=>d});var i=n(21156),o=n(62091),a=n(52707),s=n(15248),l=n(3683);(0,o.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion ge\xf6ffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event pr\xfcft den _open-Status der Accordions\n- Logik \xd6ffnet und Schlie\xdft entsprechend"),(0,o.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const d=class{constructor(e){(0,i.r)(this,e),this.nonce=(0,a.n)(),this.onClick=e=>{this._open=!1===this._open,setTimeout((()=>{var t;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"\u2026",_level:1}}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{accordion:!0,open:!0===this.state._open,close:!0!==this.state._open}},(0,i.h)("kol-heading-wc",{_headline:"",_level:this.state._level},(0,i.h)("kol-button-wc",{_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icon:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._heading,_on:{onClick:this.onClick}})),(0,i.h)("div",{class:"header"},(0,i.h)("slot",{name:"header"})),(0,i.h)("div",{"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce,hidden:!1===this.state._open,style:!1===this.state._open?{display:"none",height:"0",visibility:"hidden"}:void 0},(0,i.h)("slot",{name:"content"}))))}validateHeading(e){(0,s.w)(this,"_heading",e,{required:!0})}validateLevel(e){(0,l.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,s.s)(this,"_on",e)}validateOpen(e){((e,t)=>{(0,s.b)(e,"_open",t)})(this,e)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};d.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}.accordion kol-heading-wc kol-button-wc button kol-span-wc{justify-items:start}"}},3683:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(15248);const o=(e,t)=>{(0,i.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);