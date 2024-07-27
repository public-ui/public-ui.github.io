/*! For license information please see kol-tree-item.entry.js.LICENSE.txt */ import{r as registerInstance,h}from"./index-022cbbb8.js";import{w as KolTreeItemWcTag}from"./component-names-5dd1e02a.js";const defaultStyleCss="@layer kol-component {\n :host {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n ul {\n margin: 0;\n padding: 0;\n list-style: none;\n }\n .tree-link.first-level > a {\n padding-left: calc(6rem / var(--kolibri-root-font-size, 16));\n }\n .tree-link > a {\n padding-right: calc(6rem / var(--kolibri-root-font-size, 16));\n padding-left: calc(1.4rem * var(--level));\n padding-top: calc(6.4rem / var(--kolibri-root-font-size, 16));\n padding-bottom: calc(6.4rem / var(--kolibri-root-font-size, 16));\n }\n a .kol-span-wc {\n display: block;\n }\n}",KolTreeItemDefaultStyle0=defaultStyleCss,KolTreeItem=class{constructor(e){registerInstance(this,e),this._active=void 0,this._label=void 0,this._open=void 0,this._href=void 0}async focusLink(){this.element&&await this.element.focusLink()}async expand(){this.element&&await this.element.expand()}async collapse(){this.element&&await this.element.collapse()}async isOpen(){var e,t;return null!==(t=await(null===(e=this.element)||void 0===e?void 0:e.isOpen()))&&void 0!==t&&t}render(){return h(KolTreeItemWcTag,{key:"fd5558fc8ed9c498766b0db58544dd8d730448ab",class:"kol-tree-item",_active:this._active,_label:this._label,_open:this._open,_href:this._href,ref:e=>this.element=e},h("slot",{key:"7adb4e2c137ce675c2608e58794ab52646153405"}))}};KolTreeItem.style={default:KolTreeItemDefaultStyle0};export{KolTreeItem as kol_tree_item};