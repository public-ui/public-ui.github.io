/*! For license information please see 8971.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8971],{68971:(t,i,e)=>{e.r(i),e.d(i,{kol_modal:()=>n});var o=e(99459),a=e(9634),l=e(9694),s=e(44594);const n=class{constructor(t){(0,o.r)(this,t),this.onKeyDown=t=>{t&&"Escape"===t.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._width="100%",this._on=void 0,this._show=!1,this.state={_activeElement:null,_ariaLabel:"…",_show:!1,_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,l.d)().Modal.openModal(this.hostElement,this.state._activeElement):(0,l.d)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,l.d)().Modal.closeModal(this.hostElement)}render(){return(0,o.h)(o.H,{ref:t=>{this.hostElement=t}},this.state._activeElement&&(0,o.h)("div",null,(0,o.h)("div",null,(0,o.h)("div",{style:{width:this.state._width},"aria-label":this.state._ariaLabel,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:t=>{t&&(t.setAttribute("tabindex","0"),setTimeout((()=>t.focus()),250))}},(0,o.h)("slot",null)))))}validateActiveElement(t){(0,s.a)(this,"_activeElement",(t=>"object"==typeof t||null===t),new Set(["HTMLElement","null"]),t,{defaultValue:null})}validateAriaLabel(t){(0,s.w)(this,"_ariaLabel",t,{required:!0})}validateOn(t){if("object"==typeof t&&null!==t){(0,a.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const i={};"function"!=typeof t.onClose&&!0!==t.onClose||(i.onClose=t.onClose),(0,s.s)(this,"_on",i)}}validateShow(t){(0,s.b)(this,"_show",t,{defaultValue:!1,hooks:{afterPatch:()=>{!1===this.state._show&&(this._activeElement=null)}}})}validateWidth(t){(0,s.w)(this,"_width",t,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateShow(this._show),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_show:["validateShow"],_width:["validateWidth"]}}};n.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{font-family:inherit;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}:host *{box-sizing:border-box}:host kol-icon{color:inherit}:host kol-span-wc{display:grid;place-items:center;width:100%}:host kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}:host button{margin:0;min-height:44px;min-width:44px;padding:0}:host a,:host button,:host input,:host select,:host textarea{cursor:pointer}:host a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}:host a{display:inline-flex;place-items:baseline}:host button{background-color:transparent;border-width:0}:host>div{width:100%;height:100%;z-index:100;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.33)}:host>div>div{height:100%;padding:calc(4 * var(--kolibri-spacing));position:absolute;width:100%}:host>div>div>div{position:relative;max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto;left:50%;top:50%;transform:translate(-50%, -50%)}"}}}]);