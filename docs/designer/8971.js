/*! For license information please see 8971.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8971],{68971:(i,e,t)=>{t.r(e),t.d(e,{kol_modal:()=>r});var o=t(99459),a=t(65815),l=t(13136),n=t(80019);const r=class{constructor(i){(0,o.r)(this,i),this.onKeyDown=i=>{i&&"Escape"===i.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._width="100%",this._on=void 0,this._show=!1,this.state={_activeElement:null,_ariaLabel:"…",_show:!1,_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,l.d)().Modal.openModal(this.hostElement,this.state._activeElement):(0,l.d)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,l.d)().Modal.closeModal(this.hostElement)}render(){return(0,o.h)(o.H,{ref:i=>{this.hostElement=i}},this.state._activeElement&&(0,o.h)("div",null,(0,o.h)("div",null,(0,o.h)("div",{style:{width:this.state._width},"aria-label":this.state._ariaLabel,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:i=>{i&&(i.setAttribute("tabindex","0"),setTimeout((()=>i.focus()),250))}},(0,o.h)("slot",null)))))}validateActiveElement(i){(0,n.a)(this,"_activeElement",(i=>"object"==typeof i||null===i),new Set(["HTMLElement","null"]),i,{defaultValue:null})}validateAriaLabel(i){(0,n.w)(this,"_ariaLabel",i,{required:!0})}validateOn(i){if("object"==typeof i&&null!==i){(0,a.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof i.onClose&&!0!==i.onClose||(e.onClose=i.onClose),(0,n.s)(this,"_on",e)}}validateShow(i){(0,n.b)(this,"_show",i,{defaultValue:!1,hooks:{afterPatch:()=>{!1===this.state._show&&(this._activeElement=null)}}})}validateWidth(i){(0,n.w)(this,"_width",i,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateShow(this._show),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_show:["validateShow"],_width:["validateWidth"]}}};r.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size)}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}:host>div{width:100%;height:100%;z-index:100;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.33)}:host>div>div{height:100%;padding:calc(4 * var(--kolibri-spacing));position:absolute;width:100%}:host>div>div>div{position:relative;max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto;left:50%;top:50%;transform:translate(-50%, -50%)}"}}}]);