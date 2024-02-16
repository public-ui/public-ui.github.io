/*! For license information please see 9985.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9985],{9985:(e,t,l)=>{l.r(t),l.d(t,{kol_tree_wc:()=>s});var r=l(5063),i=l(473),n=(e,t,l)=>new Promise(((r,i)=>{var n=e=>{try{a(l.next(e))}catch(e){i(e)}},s=e=>{try{a(l.throw(e))}catch(e){i(e)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(n,s);a((l=l.apply(e,t)).next())}));const s=class{constructor(e){(0,r.r)(this,e),this.state={_label:""},this._label=void 0}validateLabel(e){(0,i.v)(this,e)}render(){return(0,r.h)(r.H,{onSlotchange:this.handleSlotchange.bind(this)},(0,r.h)("nav",{class:"tree","aria-label":this.state._label},(0,r.h)("ul",{class:"treeview-navigation",role:"tree","aria-label":this.state._label},(0,r.h)("slot",null))))}static isTreeItem(e){return(null==e?void 0:e.tagName)==="kol-tree-item".toUpperCase()}componentWillLoad(){this.validateLabel(this._label),this.handleTreeChange(),this.observeChildListMutations()}disconnectedCallback(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}observeChildListMutations(){this.observer=new MutationObserver(this.handleTreeChange.bind(this)),this.observeTopLevelItems()}handleSlotchange(){this.observeTopLevelItems(),this.handleTreeChange()}observeTopLevelItems(){this.getTopLevelTreeItems().forEach((e=>{var t;null===(t=this.observer)||void 0===t||t.observe(e,{childList:!0,subtree:!0})}))}getTopLevelTreeItems(){var e;return(null===(e=this.host.querySelector("slot"))||void 0===e?void 0:e.assignedNodes()).filter(s.isTreeItem)}handleTreeChange(){this.treeItemElements=this.getTreeItemElements(),this.ensureActiveItemVisibility()}getTreeItemElements(){return this.getTopLevelTreeItems().reduce(((e,t)=>{const l=t.querySelectorAll("kol-tree-item");return[...e,t,...l]}),[])}getOpenTreeItemElements(){return n(this,null,(function*(){if(!this.treeItemElements)return;const e=t=>n(this,null,(function*(){return!s.isTreeItem(t.parentElement)||(yield t.parentElement.isOpen())&&(yield e(t.parentElement))}));return(yield Promise.all(this.treeItemElements.map((t=>n(this,null,(function*(){return{value:t,include:yield e(t)}})))))).filter((e=>e.include)).map((e=>e.value))}))}handleKeyDown(e){return n(this,null,(function*(){var t,l,r,i;const n=yield this.getOpenTreeItemElements(),s=null===(t=document.activeElement)||void 0===t?void 0:t.closest("kol-tree-item");if(!n||!s)return;const a=null==n?void 0:n.findIndex((e=>e===s));switch(e.key){case"ArrowDown":yield null===(l=n[a+1])||void 0===l?void 0:l.focusLink(),e.preventDefault();break;case"ArrowUp":yield null===(r=n[a-1])||void 0===r?void 0:r.focusLink(),e.preventDefault();break;case"ArrowRight":yield s.expand(),e.preventDefault();break;case"ArrowLeft":yield s.collapse(),e.preventDefault();break;case"*":{const e=null===(i=s.parentElement)||void 0===i?void 0:i.querySelectorAll("kol-tree-item");null==e||e.forEach((e=>{e.expand()}));break}}}))}handleFocusOut(e){return n(this,null,(function*(){e.relatedTarget&&!e.relatedTarget.closest("kol-tree")&&(yield this.ensureActiveItemVisibility())}))}ensureActiveItemVisibility(){return n(this,null,(function*(){const e=t=>{s.isTreeItem(t.parentElement)&&(t.parentElement.expand(),e(t.parentElement))},t=(()=>{var e;const t=(null===(e=this.host.querySelector("slot"))||void 0===e?void 0:e.assignedNodes()).filter(s.isTreeItem);for(const e of t){if(e._active)return e;const t=e.querySelector('kol-tree-item[_active="true"]');if(t&&t._active)return t}})();t&&e(t)}))}get host(){return(0,r.g)(this)}static get watchers(){return{_label:["validateLabel"]}}}}}]);