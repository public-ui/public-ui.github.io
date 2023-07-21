/*! For license information please see 8971.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8971],{68971:(t,e,a)=>{a.r(e),a.d(e,{kol_modal:()=>h});var i=a(90578),n=a(10421),l=a(49691),o=a(9467),s=a(68575);const h=class{constructor(t){(0,i.r)(this,t),this.onKeyDown=t=>{t&&"Escape"===t.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._label=void 0,this._on=void 0,this._width="100%",this.state={_activeElement:null,_label:"…",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,o.d)().Modal.openModal(this.hostElement,this.state._activeElement):(0,o.d)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,o.d)().Modal.closeModal(this.hostElement)}render(){return(0,i.h)(i.H,{ref:t=>{this.hostElement=t}},this.state._activeElement&&(0,i.h)("div",{class:"overlay"},(0,i.h)("div",{class:"modal",style:{width:this.state._width},"aria-label":this.state._label,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:t=>{t&&(t.setAttribute("tabindex","0"),setTimeout((()=>t.focus()),250))}},(0,i.h)("slot",null))))}validateActiveElement(t){(0,s.a)(this,"_activeElement",(t=>"object"==typeof t||null===t),new Set(["HTMLElement","null"]),t,{defaultValue:null})}validateAriaLabel(t){this.validateLabel(t)}validateLabel(t){(0,n.v)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,l.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),(0,s.s)(this,"_on",e)}}validateWidth(t){(0,s.w)(this,"_width",t,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_on:["validateOn"],_width:["validateWidth"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.overlay{background-color:rgba(0, 0, 0, 0.33);display:flex;height:100%;inset:0;position:fixed;width:100%;z-index:100}.modal{margin:auto;max-height:100%;max-width:100%}"}},10421:(t,e,a)=>{a.d(e,{a:()=>v,c:()=>h,h:()=>s,v:()=>c});var i=a(49691),n=a(68575);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function h(t){return o.test(t)}function r(t){var e;return{hooks:{afterPatch:(e,a,n,l)=>{var o,r;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(r=t.hooks)||void 0===r||r.afterPatch(e,a,n,l)),"string"==typeof e&&!1===s(e,3)&&!1===h(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const d=new Set(["string"]),c=(t,e,a={})=>{(0,n.a)(t,"_label",(t=>"string"==typeof t),d,e,r(a))},u=new Set(["string","false"]),v=(t,e,a={})=>{""!==e&&"false"!==e||(e=!1),(0,n.a)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,r(a))}}}]);