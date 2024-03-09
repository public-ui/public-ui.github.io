/*! For license information please see 6143.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[6143],{6143:(t,e,i)=>{i.r(e),i.d(e,{kol_quote:()=>l});var a=i(3887),n=i(1123),o=i(251),s=i(8125);const l=class{constructor(t){(0,a.r)(this,t),this._caption=void 0,this._label=void 0,this._href=void 0,this._quote=void 0,this._variant="inline",this.state={_href:"",_quote:"",_variant:"inline"}}validateCaption(t){this.validateLabel(t)}validateLabel(t){(0,n.v)(this,t)}validateHref(t){(0,o.d)(this,"_href",t,{required:!0})}validateQuote(t){(0,o.d)(this,"_quote",t,{required:!0})}validateVariant(t){(0,o.w)(this,"_variant",(t=>"block"===t||"inline"===t),new Set(["block","inline"]),t)}componentWillLoad(){this.validateHref(this._href),this.validateLabel(this._label||this._caption),this.validateQuote(this._quote),this.validateVariant(this._variant)}render(){const t=(0,s.s)(this.state._quote);return(0,a.h)(a.H,{key:"781c30f18ca147280d80474812e10f75cf14f85a",class:"kol-quote"},(0,a.h)("figure",{key:"d1e89eece8a89cf83eb35fb1b3eabdf24209070a",class:{[this.state._variant]:!0}},"block"===this.state._variant?(0,a.h)("blockquote",{cite:this.state._href},this.state._quote,(0,a.h)("span",{"aria-hidden":t?void 0:"true",hidden:!t},(0,a.h)("slot",{name:"expert"}))):(0,a.h)("q",{cite:this.state._href},this.state._quote,(0,a.h)("span",{"aria-hidden":t?void 0:"true",hidden:!t},(0,a.h)("slot",{name:"expert"}))),"string"==typeof this.state._label&&this.state._label.length>0&&(0,a.h)("figcaption",null,(0,a.h)("cite",null,(0,a.h)("kol-link",{_href:this.state._href,_label:this.state._label,_target:"_blank",class:"kol-link"})))))}static get watchers(){return{_caption:["validateCaption"],_label:["validateLabel"],_href:["validateHref"],_quote:["validateQuote"],_variant:["validateVariant"]}}};l.style={default:'@charset "UTF-8";:host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}cite,figure,q+figcaption{display:inline;margin:0;padding:0}blockquote:before{content:open-quote}blockquote::after{content:close-quote}cite:before{content:"—"}.block cite:before{padding-right:0.5em}.inline cite:before{padding:0.5em}'}},1123:(t,e,i)=>{i.d(e,{a:()=>d,c:()=>r,h:()=>l,v:()=>c});var a=i(2870),n=i(251);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const h=new Set(["string"]),c=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,i,n,o)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,o)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(i))},d=c}}]);