/*! For license information please see 27.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[27],{70027:(t,i,e)=>{e.r(i),e.d(i,{kol_skip_nav:()=>p});var a=e(99459),n=e(43306),l=e(8376),s=e(43931);const p=class{constructor(t){(0,a.r)(this,t),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"…",_links:[]}}render(){return(0,a.h)("nav",{"aria-label":this.state._ariaLabel},(0,a.h)("ul",null,this.state._links.map(((t,i)=>(0,a.h)("li",{key:i},(0,a.h)("kol-link",Object.assign({},t,{_stealth:!0})))))))}validateAriaLabel(t){(0,l.w)(this,"_ariaLabel",t,{required:!0}),(0,n.b)(t)}validateLinks(t){(0,s.w)("KolSkipNav",this,t)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};p.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{display:grid;list-style:none;place-items:center}ul li{height:0}"}},43931:(t,i,e)=>{e.d(i,{w:()=>l});var a=e(43306),n=e(8376);const l=(t,i,e)=>{(0,n.d)(i,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),e),(0,a.u)(t,i.state._links.length)}}}]);