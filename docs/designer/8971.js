/*! For license information please see 8971.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8971],{68971:(t,e,i)=>{i.r(e),i.d(e,{kol_modal:()=>s});var a=i(99459),n=i(82120),l=i(99311),o=i(80161);const s=class{constructor(t){(0,a.r)(this,t),this.onKeyDown=t=>{t&&"Escape"===t.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._width="100%",this._on=void 0,this.state={_activeElement:null,_ariaLabel:"…",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,l.d)().Modal.openModal(this.hostElement,this.state._activeElement):(0,l.d)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,l.d)().Modal.closeModal(this.hostElement)}render(){return(0,a.h)(a.H,{ref:t=>{this.hostElement=t}},this.state._activeElement&&(0,a.h)("div",null,(0,a.h)("div",null,(0,a.h)("div",{style:{width:this.state._width},"aria-label":this.state._ariaLabel,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:t=>{t&&(t.setAttribute("tabindex","0"),setTimeout((()=>t.focus()),250))}},(0,a.h)("slot",null)))))}validateActiveElement(t){(0,o.a)(this,"_activeElement",(t=>"object"==typeof t||null===t),new Set(["HTMLElement","null"]),t,{defaultValue:null})}validateAriaLabel(t){(0,o.w)(this,"_ariaLabel",t,{required:!0})}validateOn(t){if("object"==typeof t&&null!==t){(0,n.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),(0,o.s)(this,"_on",e)}}validateWidth(t){(0,o.w)(this,"_width",t,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_width:["validateWidth"]}}};s.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div{width:100%;height:100%;z-index:100;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.33)}:host>div>div{height:100%;position:absolute;width:100%}:host>div>div>div{position:relative;max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto;left:50%;top:50%;transform:translate(-50%, -50%)}"}}}]);