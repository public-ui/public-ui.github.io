/*! For license information please see 5536.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5536],{97469:(t,e,i)=>{i.d(e,{v:()=>l});var n=i(53013);const a=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),l=(t,e,i)=>{(0,n.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),a,i,{defaultValue:"top"})}},25536:(t,e,i)=>{i.r(e),i.d(e,{kol_abbr:()=>s});var n=i(29315),a=i(81686),l=i(45097),o=i(8735);const s=class{constructor(t){(0,n.r)(this,t),this.nonce=(0,l.n)(),this._label=void 0,this._tooltipAlign="top",this._title=void 0,this.state={_label:"…",_tooltipAlign:"top"}}render(){return(0,n.h)(n.H,null,(0,n.h)("abbr",{"aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,n.h)("span",{title:""},(0,n.h)("slot",null))),(0,n.h)("kol-tooltip-wc",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(t){(0,a.v)(this,t)}validateTitle(t){this.validateLabel(t)}validateTooltipAlign(t){(0,o.v)(this,t)}componentWillLoad(){this.validateLabel(this._label||this._title),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_title:["validateTitle"],_tooltipAlign:["validateTooltipAlign"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>abbr{cursor:help}"}},81686:(t,e,i)=>{i.d(e,{a:()=>b,c:()=>r,h:()=>s,v:()=>d});var n=i(82974),a=i(53013);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return o.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,a,l)=>{var o,h;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,a,l)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,n.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const c=new Set(["string"]),d=(t,e,i={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),c,e,h(i))},p=new Set(["string","false"]),b=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,a.w)(t,"_label",(t=>!1===t||"string"==typeof t),p,e,h(i))}},8735:(t,e,i)=>{i.d(e,{v:()=>a});var n=i(97469);const a=(t,e)=>{(0,n.v)(t,"_align",e)}}}]);