/*! For license information please see 8272.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[8272],{8272:(e,t,a)=>{a.r(t),a.d(t,{kol_version:()=>r});var n,i,o=a(578),l=a(2780);(i=n||(n={})).Violett="#5f316e",i.Dunkelrot="#780f2d",i.Rot="#c0003c",i.Orange="#cd5038",i.Hellorange="#f7bb3d",i.Gelb="#f9e03a",i["Hellgrün"]="#c1ca31",i.Oliv="#597c39",i["Dunkelgrün"]="#005c45",i["Grün"]="#00854a",i["Türkis"]="#00818b",i.Hellblau="#80cdec",i.Blau="#0077b6",i.Petrol="#007194",i.Dunkelblau="#004b76",i.Dunkelgrau="#576164",i.Hellgrau="#bec5c9";const r=class{constructor(e){(0,o.r)(this,e),this._label=void 0,this._version=void 0,this.state={_label:"0.0.0-alpha.0"}}render(){return(0,o.h)("kol-badge",{_color:n.Hellgrau,_icon:"codicon codicon-versions",_label:`v${this.state._label}`})}validateLabel(e){(0,l.v)(this,e)}validateVersion(e){this.validateLabel(e)}componentWillLoad(){this.validateLabel(this._label||this._version)}static get watchers(){return{_label:["validateLabel"],_version:["validateVersion"]}}};r.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}"}},2780:(e,t,a)=>{a.d(t,{a:()=>b,c:()=>s,h:()=>r,v:()=>u});var n=a(9786),i=a(3767);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(o))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return l.test(e)}function c(e){var t;return{hooks:{afterPatch:(t,a,i,o)=>{var l,c;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,i,o)),"string"==typeof t&&!1===r(t,3)&&!1===s(t)&&(0,n.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const h=new Set(["string"]),u=(e,t,a={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),h,t,c(a))},d=new Set(["string","false"]),b=(e,t,a={})=>{""!==t&&"false"!==t||(t=!1),(0,i.w)(e,"_label",(e=>!1===e||"string"==typeof e),d,t,c(a))}}}]);