/*! For license information please see 8971.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8971],{68971:(e,t,i)=>{i.r(t),i.d(t,{kol_modal:()=>s});var a=i(99459),n=i(82120),l=i(99311),o=i(80161);const s=class{constructor(e){(0,a.r)(this,e),this.onKeyDown=e=>{e&&"Escape"===e.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._width="100%",this._on=void 0,this.state={_activeElement:null,_ariaLabel:"…",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,l.d)().Modal.openModal(this.hostElement,this.state._activeElement):(0,l.d)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,l.d)().Modal.closeModal(this.hostElement)}render(){return(0,a.h)(a.H,{ref:e=>{this.hostElement=e}},this.state._activeElement&&(0,a.h)("div",{class:"overlay"},(0,a.h)("div",{class:"modal",style:{width:this.state._width},"aria-label":this.state._ariaLabel,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:e=>{e&&(e.setAttribute("tabindex","0"),setTimeout((()=>e.focus()),250))}},(0,a.h)("slot",null))))}validateActiveElement(e){(0,o.a)(this,"_activeElement",(e=>"object"==typeof e||null===e),new Set(["HTMLElement","null"]),e,{defaultValue:null})}validateAriaLabel(e){(0,o.w)(this,"_ariaLabel",e,{required:!0})}validateOn(e){if("object"==typeof e&&null!==e){(0,n.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const t={};"function"!=typeof e.onClose&&!0!==e.onClose||(t.onClose=e.onClose),(0,o.s)(this,"_on",t)}}validateWidth(e){(0,o.w)(this,"_width",e,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_width:["validateWidth"]}}};s.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']){min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.overlay{background-color:rgba(0, 0, 0, 0.33);display:grid;height:100%;inset:0;place-content:center;position:fixed;width:100%;z-index:100}.modal{max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}"}}}]);