/*! For license information please see 1741.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1741],{91741:(i,r,o)=>{o.r(r),o.d(r,{kol_details:()=>l});var a=o(99459),e=o(44594);const l=class{constructor(i){(0,a.r)(this,i),this.onClick=()=>{setTimeout((()=>{var i;this._open=null===(i=this.htmlDetailsElement)||void 0===i?void 0:i.open}),25)},this._open=!1,this._summary=void 0,this.state={_summary:"…"}}render(){return(0,a.h)(a.H,null,(0,a.h)("details",{ref:i=>{this.htmlDetailsElement=i},open:this.state._open},(0,a.h)("summary",{onClick:this.onClick},(0,a.h)("span",null,this.state._open?(0,a.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-angle-down"}):(0,a.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-angle-right"})),(0,a.h)("span",null,this.state._summary)),(0,a.h)("kol-indented-text",null,(0,a.h)("slot",null))))}validateOpen(i){(0,e.b)(this,"_open",i)}validateSummary(i){(0,e.w)(this,"_summary",i,{required:!0})}componentWillLoad(){this.validateOpen(this._open),this.validateSummary(this._summary)}static get watchers(){return{_open:["validateOpen"],_summary:["validateSummary"]}}};l.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{font-family:inherit;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0;margin:0;min-height:44px;min-width:44px;padding:0}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}details{display:grid;width:100%}details>summary{border-radius:var(--kolibri-spacing);cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:var(--kolibri-border-color);border-bottom-style:solid;border-bottom-width:calc(var(--kolibri-spacing) / 2);padding:0 var(--kolibri-spacing)}details>summary>span:first-child{padding-right:var(--kolibri-spacing);text-align:center;width:1rem}details>summary>span:last-child{padding-left:var(--kolibri-spacing)}details[open]>summary>span,details:focus>summary>span,details:hover>summary>span{border-bottom-color:black}details>kol-indented-text{margin:var(--kolibri-spacing) 0 0 calc(2 * var(--kolibri-spacing))}"}}}]);