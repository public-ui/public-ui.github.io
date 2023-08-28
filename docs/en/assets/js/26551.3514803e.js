/*! For license information please see 26551.3514803e.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[26551],{26551:(t,e,o)=>{o.r(e),o.d(e,{kol_details:()=>s});var a=o(51705),n=o(41259),i=o(71029);const s=class{constructor(t){(0,a.r)(this,t),this.onClick=()=>{setTimeout((()=>{var t;this._open=null===(t=this.htmlDetailsElement)||void 0===t?void 0:t.open}),25)},this._label=void 0,this._open=!1,this._summary=void 0,this.state={_label:"\u2026"}}render(){return(0,a.h)(a.H,null,(0,a.h)("details",{ref:t=>{this.htmlDetailsElement=t},open:this.state._open},(0,a.h)("summary",{onClick:this.onClick},this.state._open?(0,a.h)("kol-icon",{_label:"",_icon:"codicon codicon-chevron-down"}):(0,a.h)("kol-icon",{_label:"",_icon:"codicon codicon-chevron-right"}),(0,a.h)("span",null,this.state._label)),(0,a.h)("div",{class:"content"},(0,a.h)("kol-indented-text",null,(0,a.h)("slot",null)))))}validateLabel(t){(0,n.v)(this,t)}validateOpen(t){(0,i.v)(this,t)}validateSummary(t){this.validateLabel(t)}componentWillLoad(){this.validateOpen(this._open),this.validateLabel(this._label||this._summary)}static get watchers(){return{_label:["validateLabel"],_open:["validateOpen"],_summary:["validateSummary"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}details{display:grid}details>summary{cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:grey;border-bottom-style:solid}details>summary:focus>span,details>summary:hover>span,details[open]>summary>span{border-bottom-color:#000}details>kol-indented-text{margin:0.25em 0 0 0.5em}@keyframes details-show{to{opacity:1;scale:1}}.content{opacity:0;scale:1 0;transform-origin:top}details[open]>.content{animation:250ms ease-in-out forwards details-show}"}},41259:(t,e,o)=>{o.d(e,{a:()=>u,c:()=>r,h:()=>l,v:()=>d});var a=o(27697),n=o(40642);const i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(i))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,o,n,i)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,o,n,i)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const c=new Set(["string"]),d=(t,e,o={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),c,e,h(o))},p=new Set(["string","false"]),u=(t,e,o={})=>{""!==e&&"false"!==e||(e=!1),(0,n.w)(t,"_label",(t=>!1===t||"string"==typeof t),p,e,h(o))}},71029:(t,e,o)=>{o.d(e,{v:()=>n});var a=o(40642);const n=(t,e,o)=>{(0,a.a)(t,"_open",e,o)}}}]);