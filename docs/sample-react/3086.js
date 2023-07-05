/*! For license information please see 3086.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[3086],{3086:(e,t,i)=>{i.r(t),i.d(t,{kol_breadcrumb:()=>s});var a=i(578),n=i(8242),l=i(4026),o=i(618);const s=class{constructor(e){(0,a.r)(this,e),this.renderLink=(e,t)=>{const i=this.state._links.length-1,n=e._iconOnly||e._hideLabel;return(0,a.h)("li",{key:t},0!==t&&(0,a.h)("kol-icon",{_label:"",_icon:"codicon codicon-chevron-right"}),t===i?(0,a.h)("span",null,n?(0,a.h)("kol-icon",{_label:e._label,_icon:"string"==typeof e._icon?e._icon:"codicon codicon-symbol-event"}):(0,a.h)(a.F,null,e._label)):(0,a.h)("kol-link",Object.assign({},e,{_useCase:"nav"})))},this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return(0,a.h)(a.H,null,(0,a.h)("nav",{"aria-label":this.state._label},(0,a.h)("ul",null,0===this.state._links.length&&(0,a.h)("li",null,(0,a.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-home"}),"…"),this.state._links.map(this.renderLink))))}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e){(0,o.v)(this,e),(0,n.b)(e)}validateLinks(e){(0,l.w)("KolBreadcrumb",this,e)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}li,ul{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator):before{content:'\\f054';font-family:'Font Awesome 6 Free'}"}},618:(e,t,i)=>{i.d(t,{c:()=>r,h:()=>s,v:()=>h});var a=i(8242),n=i(2996);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return o.test(e)}const h=(e,t,i={})=>{var l;(0,n.w)(e,"_label",t,{hooks:{afterPatch:(e,t,n,l)=>{var o,h;"function"==typeof(null===(o=i.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=i.hooks)||void 0===h||h.afterPatch(e,t,n,l)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(l=i.hooks)||void 0===l?void 0:l.beforePatch},required:!0})}},4026:(e,t,i)=>{i.d(t,{w:()=>l});var a=i(8242),n=i(2996);const l=(e,t,i)=>{(0,n.d)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),i),(0,a.c)(e,t.state._links.length)}}}]);