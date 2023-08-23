/*! For license information please see 1741.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1741],{1741:(t,e,a)=>{a.r(e),a.d(e,{kol_details:()=>s});var i=a(2108),o=a(7570),n=a(4580);const s=class{constructor(t){(0,i.r)(this,t),this.onClick=()=>{setTimeout((()=>{var t;this._open=null===(t=this.htmlDetailsElement)||void 0===t?void 0:t.open}),25)},this._label=void 0,this._open=!1,this._summary=void 0,this.state={_label:"…"}}render(){return(0,i.h)(i.H,null,(0,i.h)("details",{ref:t=>{this.htmlDetailsElement=t},open:this.state._open},(0,i.h)("summary",{onClick:this.onClick},this.state._open?(0,i.h)("kol-icon",{_label:"",_icon:"codicon codicon-chevron-down"}):(0,i.h)("kol-icon",{_label:"",_icon:"codicon codicon-chevron-right"}),(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{class:"content"},(0,i.h)("kol-indented-text",null,(0,i.h)("slot",null)))))}validateLabel(t){(0,o.v)(this,t)}validateOpen(t){(0,n.v)(this,t)}validateSummary(t){this.validateLabel(t)}componentWillLoad(){this.validateOpen(this._open),this.validateLabel(this._label||this._summary)}static get watchers(){return{_label:["validateLabel"],_open:["validateOpen"],_summary:["validateSummary"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}details{display:grid}details>summary{cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:grey;border-bottom-style:solid}details>summary:focus>span,details>summary:hover>span,details[open]>summary>span{border-bottom-color:#000}details>kol-indented-text{margin:0.25em 0 0 0.5em}@keyframes details-show{to{opacity:1;scale:1}}.content{opacity:0;scale:1 0;transform-origin:top}details[open]>.content{animation:250ms ease-in-out forwards details-show}"}},7570:(t,e,a)=>{a.d(e,{a:()=>u,c:()=>r,h:()=>l,v:()=>d});var i=a(2331),o=a(6615);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,a,o,n)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,a,o,n)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const c=new Set(["string"]),d=(t,e,a={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),c,e,h(a))},p=new Set(["string","false"]),u=(t,e,a={})=>{""!==e&&"false"!==e||(e=!1),(0,o.w)(t,"_label",(t=>!1===t||"string"==typeof t),p,e,h(a))}},4580:(t,e,a)=>{a.d(e,{v:()=>o});var i=a(6615);const o=(t,e,a)=>{(0,i.a)(t,"_open",e,a)}}}]);