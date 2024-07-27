/*! For license information please see kol-tree-item-wc.entry.js.LICENSE.txt */ import{r as registerInstance,h,H as Host,g as getElement}from"./index-022cbbb8.js";import{g as KolIconTag,n as KolLinkWcTag,z as KolTreeTag}from"./component-names-5dd1e02a.js";import{n as nonce}from"./dev.utils-500c6d3b.js";import{b as watchBoolean}from"./prop.validators-db70e3c4.js";import{v as validateLabel}from"./label-20475610.js";import{v as validateOpen}from"./open-5b527658.js";import{v as validateHref}from"./href-74f1c87f.js";import"./reuse-108ee8f5.js";import"./dev.utils-1ca991a2.js";import"./index-db4aa6e4.js";const validateActive=(e,t,a)=>{watchBoolean(e,"_active",t,a)},KolTreeItemWc=class{constructor(e){registerInstance(this,e),this.groupId=`tree-group-${nonce()}`,this.renderIcon=e=>h(KolIconTag,{class:"toggle-button-icon",_label:e.label,_icons:e.icon}),this.level=void 0,this.state={_active:!1,_hasChildren:!1,_href:"",_label:"",_open:!1},this._active=void 0,this._label=void 0,this._open=void 0,this._href=void 0}render(){const{_href:e,_active:t,_hasChildren:a,_open:i,_label:s}=this.state;return h(Host,{key:"b809b4ed4fdbff0238384909f6394c5c9aa13480",onSlotchange:this.handleSlotchange.bind(this),class:"kol-tree-item-wc"},h("li",{key:"db1b9a71d369f9fc0bcdfba6e22d0c2f6af7a414",class:"tree-item",style:{"--level":`${this.level}`}},h(KolLinkWcTag,{key:"c9a810511651e63203fb27d63259864445f59b29",class:{"tree-link":!0,"first-level":0===this.level,active:Boolean(t)},_href:e,_label:"",_role:"treeitem",_tabIndex:t?0:-1,_ariaExpanded:i,_ariaOwns:a?this.groupId:void 0,ref:e=>this.linkElement=e},h("span",{key:"fd5dcb0bf876292d5303420095cb437d9f757f37",slot:"expert"},a&&h("span",{key:"468187d12a690f7fc5ccc09570d7b2bebd6cee24",class:"toggle-button",onClick:e=>i?void this.handleCollapseClick(e):void this.handleExpandClick(e)},this.renderIcon({icon:"codicon codicon-"+(i?"chevron-down":"chevron-right"),label:i?"Vorschl\xe4ge \xf6ffnen":"Vorschl\xe4ge schlie\xdfen"}))," ",s)),h("ul",{key:"2b414e97ffa358b9332573194d450cf8c548a6d6",hidden:!a||!i,role:"group",id:this.groupId},h("slot",{key:"8ea7a3d44e0acb4626b23070dd044b17688313c5"}))))}validateActive(e){validateActive(this,e||!1)}validateLabel(e){validateLabel(this,e)}validateOpen(e){validateOpen(this,e)}validateHref(e){validateHref(this,e)}componentWillLoad(){this.validateActive(this._active),this.validateLabel(this._label),this.validateOpen(this._open),this.validateHref(this._href),this.checkForChildren(),this.determineTreeItemDepth()}determineTreeItemDepth(){let e=0,t=this.host.parentNode.host.parentNode;for(;null!==t&&t.tagName.toLowerCase()!==KolTreeTag&&t!==document.body;)t=t.parentElement,e+=1;this.level=e}handleSlotchange(){this.checkForChildren()}checkForChildren(){var e,t;this.state=Object.assign(Object.assign({},this.state),{_hasChildren:Boolean(null===(t=null===(e=this.host.querySelector("slot"))||void 0===e?void 0:e.assignedElements)||void 0===t?void 0:t.call(e).length)})}async focusLink(){await this.linkElement.kolFocus()}async handleExpandClick(e){e.preventDefault(),await this.linkElement.kolFocus(),await this.expand()}async expand(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!0}))}async handleCollapseClick(e){e.preventDefault(),this.linkElement.focus(),await this.collapse()}async collapse(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!1}))}async isOpen(){var e;return null!==(e=this.state._open)&&void 0!==e&&e}get host(){return getElement(this)}static get watchers(){return{_active:["validateActive"],_label:["validateLabel"],_open:["validateOpen"],_href:["validateHref"]}}};export{KolTreeItemWc as kol_tree_item_wc};