/*! For license information please see 7610.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7610],{87610:(e,t,i)=>{i.r(t),i.d(t,{kol_tree_item_wc:()=>n});var s=i(16120),a=i(15587),l=(e,t,i)=>new Promise(((s,a)=>{var l=e=>{try{h(i.next(e))}catch(e){a(e)}},n=e=>{try{h(i.throw(e))}catch(e){a(e)}},h=e=>e.done?s(e.value):Promise.resolve(e.value).then(l,n);h((i=i.apply(e,t)).next())}));const n=class{constructor(e){(0,s.r)(this,e),this.state={_active:!1,_hasChildren:!1,_href:"",_label:"",_open:!1},this._active=void 0,this._label=void 0,this._open=void 0,this._href=void 0}render(){return(0,s.h)(s.H,{key:"79baf67cdfda8ab6569ef2457e2f22491e491545",onSlotchange:this.handleSlotchange.bind(this),class:"kol-tree-item-wc"},(0,s.h)("li",{key:"5212ac3fbcaec55122e9fe60d0a12c7253e949bd",class:"tree-item"},(0,s.h)("kol-link",{key:"1764c2398ee5c9d175b78eb2934cc5b1f5b3aa64",class:{"tree-link":!0,active:Boolean(this.state._active)},_label:"",_href:this.state._href,ref:e=>this.linkElement=e,_tabIndex:this.state._active?0:-1},(0,s.h)("span",{key:"bcf8abdcde70d98efb9e7af90a411375d5f96fe3",slot:"expert"},this.state._hasChildren&&(this.state._open?(0,s.h)("span",{class:"toggle-button",onClick:e=>{this.handleCollapseClick(e)}},"-"):(0,s.h)("span",{class:"toggle-button",onClick:e=>{this.handleExpandClick(e)}},"+"))," ",this.state._label)),(0,s.h)("ul",{key:"ae32253812ee9f7165c5812dff2dc4c7c8c0df60",hidden:!this.state._hasChildren||!this.state._open,role:"group"},(0,s.h)("slot",{key:"2b778851a20cb1e0a1c14d068b5f6f4235b7fe2c"}))))}validateActive(e){(0,a.at)(this,e||!1)}validateLabel(e){(0,a.v)(this,e)}validateOpen(e){(0,a.l)(this,e)}validateHref(e){(0,a.au)(this,e)}componentWillLoad(){this.validateActive(this._active),this.validateLabel(this._label),this.validateOpen(this._open),this.validateHref(this._href),this.checkForChildren()}handleSlotchange(){this.checkForChildren()}checkForChildren(){var e;this.state=Object.assign(Object.assign({},this.state),{_hasChildren:Boolean(null===(e=this.host.querySelector("slot"))||void 0===e?void 0:e.assignedElements().length)})}focusLink(){return l(this,null,(function*(){this.linkElement.focus()}))}handleExpandClick(e){return l(this,null,(function*(){e.preventDefault(),this.linkElement.focus(),yield this.expand()}))}expand(){return l(this,null,(function*(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!0}))}))}handleCollapseClick(e){return l(this,null,(function*(){e.preventDefault(),this.linkElement.focus(),yield this.collapse()}))}collapse(){return l(this,null,(function*(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!1}))}))}isOpen(){return l(this,null,(function*(){var e;return null!==(e=this.state._open)&&void 0!==e&&e}))}get host(){return(0,s.g)(this)}static get watchers(){return{_active:["validateActive"],_label:["validateLabel"],_open:["validateOpen"],_href:["validateHref"]}}}}}]);