/*! For license information please see 1741.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1741],{91741:(e,t,i)=>{i.r(t),i.d(t,{kol_details:()=>s});var a=i(46266),n=i(73681);const s=class{constructor(e){(0,a.r)(this,e),this.onClick=()=>{setTimeout((()=>{var e;this._open=null===(e=this.htmlDetailsElement)||void 0===e?void 0:e.open}),25)},this._open=!1,this._summary=void 0,this.state={_summary:"…"}}render(){return(0,a.h)(a.H,null,(0,a.h)("details",{ref:e=>{this.htmlDetailsElement=e},open:this.state._open},(0,a.h)("summary",{onClick:this.onClick},this.state._open?(0,a.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-angle-down"}):(0,a.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-angle-right"}),(0,a.h)("span",null,this.state._summary)),(0,a.h)("kol-indented-text",null,(0,a.h)("slot",null))))}validateOpen(e){(0,n.b)(this,"_open",e)}validateSummary(e){(0,n.w)(this,"_summary",e,{required:!0})}componentWillLoad(){this.validateOpen(this._open),this.validateSummary(this._summary)}static get watchers(){return{_open:["validateOpen"],_summary:["validateSummary"]}}};s.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}:host details{display:grid;width:100%}:host details>kol-indented-text{margin:0.25rem 0 0 0.25rem}:host summary{cursor:pointer;display:flow-root;margin:0;padding:0}:host summary span{margin-left:0.25rem;text-decoration:underline}:host summary:hover{text-decoration-thickness:0.25rem}"}}}]);