/*! For license information please see 8971.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8971],{68971:(t,e,i)=>{i.r(e),i.d(e,{kol_modal:()=>h});var a=i(45509),n=i(76504),l=i(52361),o=i(49340),s=i(52343);const h=class{constructor(t){(0,a.r)(this,t),this.onKeyDown=t=>{t&&"Escape"===t.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._label=void 0,this._on=void 0,this._width="100%",this.state={_activeElement:null,_label:"…",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,o.g)().Modal.openModal(this.hostElement,this.state._activeElement):(0,o.g)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,o.g)().Modal.closeModal(this.hostElement)}render(){return(0,a.h)(a.H,{ref:t=>{this.hostElement=t}},this.state._activeElement&&(0,a.h)("div",{class:"overlay"},(0,a.h)("div",{class:"modal",style:{width:this.state._width},"aria-label":this.state._label,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:t=>{t&&(t.setAttribute("tabindex","0"),setTimeout((()=>t.focus()),250))}},(0,a.h)("slot",null))))}validateActiveElement(t){(0,s.w)(this,"_activeElement",(t=>"object"==typeof t||null===t),new Set(["HTMLElement","null"]),t,{defaultValue:null,hooks:{afterPatch:()=>{var t;null===this._activeElement&&(null===(t=this.state._on)||void 0===t?void 0:t.onClose)&&this.state._on.onClose()}}})}validateAriaLabel(t){this.validateLabel(t)}validateLabel(t){(0,n.v)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,l.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),(0,s.s)(this,"_on",e)}}validateWidth(t){(0,s.d)(this,"_width",t,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_on:["validateOn"],_width:["validateWidth"]}}};h.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}.overlay{background-color:rgba(0, 0, 0, 0.33);display:flex;height:100%;inset:0;position:fixed;width:100%;z-index:100}.modal{margin:auto;max-height:100%;max-width:100%}"}},76504:(t,e,i)=>{i.d(e,{a:()=>c,c:()=>h,h:()=>s,v:()=>d});var a=i(52361),n=i(52343);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function h(t){return o.test(t)}const r=new Set(["string"]),d=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),r,e,function(t){var e;return{hooks:{afterPatch:(e,i,n,l)=>{var o,r;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(r=t.hooks)||void 0===r||r.afterPatch(e,i,n,l)),"string"==typeof e&&!1===s(e,3)&&!1===h(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(i))},c=d}}]);