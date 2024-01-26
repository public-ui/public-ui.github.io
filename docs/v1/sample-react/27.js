/*! For license information please see 27.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[27],{27:(t,e,a)=>{a.r(e),a.d(e,{kol_skip_nav:()=>s});var i=a(5509),n=a(6504),l=a(3087),o=a(2276);const s=class{constructor(t){(0,i.r)(this,t),this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return(0,i.h)("nav",{"aria-label":this.state._label},(0,i.h)("ul",null,this.state._links.map(((t,e)=>(0,i.h)("li",{key:e},(0,i.h)("kol-link-wc",Object.assign({},t)))))))}validateAriaLabel(t){this.validateLabel(t)}validateLabel(t,e,a=!1){a||(0,l.r)(this.state._label),(0,n.v)(this,t),(0,l.a)(this.state._label)}validateLinks(t){(0,o.w)("KolSkipNav",this,t)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){(0,l.r)(this.state._label)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};s.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}ul{display:grid;list-style:none;place-items:center}ul li{height:0}kol-link-wc a{left:-99999px;overflow:hidden;position:absolute;z-index:9999999;line-height:1em}kol-link-wc a:focus{background-color:#fff;left:unset;position:unset}"}},6504:(t,e,a)=>{a.d(e,{a:()=>d,c:()=>r,h:()=>s,v:()=>c});var i=a(2361),n=a(2343);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return o.test(t)}const h=new Set(["string"]),c=(t,e,a={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,a,n,l)=>{var o,h;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,a,n,l)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(a))},d=c},3087:(t,e,a)=>{a.d(e,{a:()=>n,r:()=>l});const i=new Set;function n(t){i.has(t)?console.error(`There already is a nav element with the label "${t}"`):i.add(t)}function l(t){i.delete(t)}},2276:(t,e,a)=>{a.d(e,{w:()=>l});var i=a(2361),n=a(2343);const l=(t,e,a)=>{(0,n.c)(e,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),a),(0,i.c)(t,e.state._links.length)}}}]);