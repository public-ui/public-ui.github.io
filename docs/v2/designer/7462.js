/*! For license information please see 7462.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7462],{71315:(e,t,i)=>{i.d(t,{v:()=>a});var s=i(788);const a=(e,t,i={})=>{(0,s.i)(e,"_href",t,i)}},17462:(e,t,i)=>{i.r(t),i.d(t,{kol_tree_item_wc:()=>c});var s=i(15632),a=i(27756),n=i(788),l=i(72707),h=i(91478),o=i(71315),r=(e,t,i)=>new Promise(((s,a)=>{var n=e=>{try{h(i.next(e))}catch(e){a(e)}},l=e=>{try{h(i.throw(e))}catch(e){a(e)}},h=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,l);h((i=i.apply(e,t)).next())}));const c=class{constructor(e){(0,s.r)(this,e),this.state={_active:!1,_hasChildren:!1,_href:"",_label:"",_open:!1},this._active=void 0,this._label=void 0,this._open=void 0,this._href=void 0}render(){return(0,s.h)(s.H,{key:"922aae251164d4c84619633d0b031bb6019792a6",onSlotchange:this.handleSlotchange.bind(this),class:"kol-tree-item-wc"},(0,s.h)("li",{key:"412a8470bea6b4b738bd156b3b0c94b2207b7759",class:"tree-item"},(0,s.h)(a.h,{key:"849beb0ce827da5e662308ce704f7db6b7ffbe80",class:{"tree-link":!0,active:Boolean(this.state._active)},_label:"",_href:this.state._href,ref:e=>this.linkElement=e,_tabIndex:this.state._active?0:-1},(0,s.h)("span",{key:"1fe521b37ce81b3a681b7692ebe530d19928182d",slot:"expert"},this.state._hasChildren&&(this.state._open?(0,s.h)("span",{class:"toggle-button",onClick:e=>{this.handleCollapseClick(e)}},"-"):(0,s.h)("span",{class:"toggle-button",onClick:e=>{this.handleExpandClick(e)}},"+"))," ",this.state._label)),(0,s.h)("ul",{key:"0c81c08973ef493345311d8f7f4eb880c248b5d5",hidden:!this.state._hasChildren||!this.state._open,role:"group"},(0,s.h)("slot",{key:"94c3615e5b2a3892f7e72ce90290afbc965a1528"}))))}validateActive(e){((e,t,i)=>{(0,n.b)(e,"_active",t,void 0)})(this,e||!1)}validateLabel(e){(0,l.v)(this,e)}validateOpen(e){(0,h.v)(this,e)}validateHref(e){(0,o.v)(this,e)}componentWillLoad(){this.validateActive(this._active),this.validateLabel(this._label),this.validateOpen(this._open),this.validateHref(this._href),this.checkForChildren()}handleSlotchange(){this.checkForChildren()}checkForChildren(){var e;this.state=Object.assign(Object.assign({},this.state),{_hasChildren:Boolean(null===(e=this.host.querySelector("slot"))||void 0===e?void 0:e.assignedElements().length)})}focusLink(){return r(this,null,(function*(){this.linkElement.focus()}))}handleExpandClick(e){return r(this,null,(function*(){e.preventDefault(),this.linkElement.focus(),yield this.expand()}))}expand(){return r(this,null,(function*(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!0}))}))}handleCollapseClick(e){return r(this,null,(function*(){e.preventDefault(),this.linkElement.focus(),yield this.collapse()}))}collapse(){return r(this,null,(function*(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!1}))}))}isOpen(){return r(this,null,(function*(){var e;return null!==(e=this.state._open)&&void 0!==e&&e}))}get host(){return(0,s.g)(this)}static get watchers(){return{_active:["validateActive"],_label:["validateLabel"],_open:["validateOpen"],_href:["validateHref"]}}}},72707:(e,t,i)=>{i.d(t,{a:()=>d,b:()=>h,c:()=>o,h:()=>a,v:()=>c});var s=i(788);const a=[0,1,2,3,4,5,6],n=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function h(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(n))||void 0===t?void 0:t.length)||0}(e)>=t}function o(e){return l.test(e)}const r=new Set(["string"]),c=(e,t,i={})=>{(0,s.w)(e,"_label",(e=>"string"==typeof e),r,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,i,a,n)=>{var l,r;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(r=e.hooks)||void 0===r||r.afterPatch(t,i,a,n)),"string"==typeof t&&!1===h(t,3)&&!1===o(t)&&(0,s.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,s.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(i))},d=c},91478:(e,t,i)=>{i.d(t,{v:()=>a});var s=i(788);const a=(e,t,i)=>{(0,s.b)(e,"_open",t,i)}}}]);