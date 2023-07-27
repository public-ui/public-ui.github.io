/*! For license information please see 2333.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[2333],{2333:(e,t,a)=>{a.r(t),a.d(t,{kol_card:()=>s});var i=a(578),l=a(3767),n=a(2780),o=a(2929);const s=class{constructor(e){(0,i.r)(this,e),this._hasFooter=!1,this._heading=void 0,this._headline=void 0,this._label=void 0,this._level=1,this.state={_label:"…"}}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:"card"},(0,i.h)("div",{class:"header"},(0,i.h)("kol-heading-wc",{_label:this.state._label,_level:this.state._level}),(0,i.h)("slot",{name:"header"})),(0,i.h)("div",{class:"content"},(0,i.h)("slot",{name:"content"})," ",(0,i.h)("slot",null)),this.state._hasFooter&&(0,i.h)("div",{class:"footer"},(0,i.h)("slot",{name:"footer"}))))}validateHasFooter(e){((e,t)=>{(0,l.a)(e,"_hasFooter",t)})(this,e)}validateHeading(e){this.validateLabel(e)}validateHeadline(e){this.validateLabel(e)}validateLabel(e){(0,n.v)(this,e)}validateLevel(e){(0,o.w)(this,e)}componentWillLoad(){this.validateHasFooter(this._hasFooter),this.validateLabel(this._label||this._heading||this._headline),this.validateLevel(this._level)}static get watchers(){return{_hasFooter:["validateHasFooter"],_heading:["validateHeading"],_headline:["validateHeadline"],_label:["validateLabel"],_level:["validateLevel"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div.card{height:100%}"}},2780:(e,t,a)=>{a.d(t,{a:()=>u,c:()=>r,h:()=>s,v:()=>c});var i=a(9786),l=a(3767);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(n))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return o.test(e)}function h(e){var t;return{hooks:{afterPatch:(t,a,l,n)=>{var o,h;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(t,a,l,n)),"string"==typeof t&&!1===s(t,3)&&!1===r(t)&&(0,i.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const d=new Set(["string"]),c=(e,t,a={})=>{(0,l.w)(e,"_label",(e=>"string"==typeof e),d,t,h(a))},v=new Set(["string","false"]),u=(e,t,a={})=>{""!==t&&"false"!==t||(t=!1),(0,l.w)(e,"_label",(e=>!1===e||"string"==typeof e),v,t,h(a))}},2929:(e,t,a)=>{a.d(t,{w:()=>l});var i=a(3767);const l=(e,t)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);