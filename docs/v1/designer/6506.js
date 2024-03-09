/*! For license information please see 6506.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6506],{1698:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(20251);const s=(t,e)=>{(0,a.a)(t,"_hasCloser",e)}},86506:(t,e,i)=>{i.r(e),i.d(e,{kol_toast:()=>r});var a=i(33887),s=i(1698),o=i(31123),l=i(65174),n=i(20251),h=i(4705);const r=class{constructor(t){(0,a.r)(this,t),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{this.close()}),this.state._showDuration))},this.close=()=>{var t;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._label=void 0,this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(t){(0,n.a)(this,"_alert",t)}validateHasCloser(t){(0,s.v)(this,t)}validateHeading(t){this.validateLabel(t)}validateLabel(t){(0,o.v)(this,t)}validateLevel(t){(0,h.w)(this,t)}validateOn(t){"object"!=typeof t||"function"!=typeof(null==t?void 0:t.onClose)&&!0!==t.onClose||(0,n.s)(this,"_on",{onClose:t.onClose})}validateShow(t){(0,l.v)(this,t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(t){(0,n.e)(this,"_showDuration",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(t){(0,n.w)(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateLabel(this._label||this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return(0,a.h)(a.H,{key:"2c432e544f8bbd17e0da9cfd86e2ee3ac4590496",class:"kol-toast"},this.state._show&&(0,a.h)("div",null,(0,a.h)("kol-alert",{_alert:this.state._alert,_label:this.state._label,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on,class:"kol-alert"},(0,a.h)("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};r.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host{display:block}:host>div{background-color:#fff;height:0;left:0;position:fixed;top:0;width:100%;z-index:200}:host>div>.kol-alert{display:block;margin:auto;max-width:750px}:host>div>.kol-button-wc{display:block;margin:auto;position:relative;top:0;width:1em}"}},31123:(t,e,i)=>{i.d(e,{a:()=>c,c:()=>h,h:()=>n,v:()=>d});var a=i(92870),s=i(20251);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function n(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function h(t){return l.test(t)}const r=new Set(["string"]),d=(t,e,i={})=>{(0,s.w)(t,"_label",(t=>"string"==typeof t),r,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,i,s,o)=>{var l,r;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(r=t.hooks)||void 0===r||r.afterPatch(e,i,s,o)),"string"==typeof e&&!1===n(e,3)&&!1===h(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(i))},c=d},65174:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(20251);const s=(t,e,i)=>{(0,a.a)(t,"_show",e,i)}},4705:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(20251);const s=(t,e)=>{(0,a.w)(t,"_level",(t=>"number"==typeof t&&0<=t&&t<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);