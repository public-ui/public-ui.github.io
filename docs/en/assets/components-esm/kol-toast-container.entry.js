/*! For license information please see kol-toast-container.entry.js.LICENSE.txt */ import{h,r as registerInstance,H as Host}from"./index-022cbbb8.js";import{t as translate}from"./i18n-59fb5a46.js";import{n as nonce}from"./dev.utils-500c6d3b.js";import{u as KolAlertTag,o as KolButtonTag}from"./component-names-5dd1e02a.js";import"./i18n-3dcfca85.js";import"./reuse-108ee8f5.js";import"./dev.utils-1ca991a2.js";const InternalToast=({key:t,onClose:s,onRef:e,toastState:a})=>h("div",{class:`toast ${a.status}`,key:t},h(KolAlertTag,{class:"alert",_alert:!0,_label:a.toast.label,_level:0,_hasCloser:!0,_type:a.toast.type,_variant:a.toast.alertVariant||"card",_on:{onClose:s}},h("div",{ref:e},"string"==typeof a.toast.description?a.toast.description:null))),defaultStyleCss="@layer kol-component {\n :host {\n display: flex;\n flex-direction: column;\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n position: fixed;\n z-index: 200;\n }\n .close-all {\n align-self: flex-end;\n }\n}",KolToastContainerDefaultStyle0=defaultStyleCss,TRANSITION_TIMEOUT=300,KolToastContainer=class{constructor(t){registerInstance(this,t),this.knownRenderFunctions=new Set,this.state={_toastStates:[]}}async enqueue(t){const s={toast:t,status:"adding",id:`toast-${nonce()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[s,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>t.id===s.id&&"removing"!==t.status?Object.assign(Object.assign({},t),{status:"settled"}):t))})}),300),()=>{this.handleClose(s)}}handleClose(t){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((s=>(s.id===t.id&&(s.status="removing"),s)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((s=>s.id!==t.id))})}),300)}async closeAll(t=!1){if(t)this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]});else{const t=[...this.state._toastStates];this.state=Object.assign(Object.assign({},this.state),{_toastStates:t.map((t=>Object.assign(Object.assign({},t),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((s=>t.every((t=>t.id!==s.id))))})}),300)}}handleToastRef(t,s){s&&"function"==typeof t.toast.render&&!this.knownRenderFunctions.has(t.toast.render)&&(this.knownRenderFunctions.add(t.toast.render),t.toast.render(s,{close:()=>this.handleClose(t)}))}render(){return h(Host,{key:"4d7752f9c0213f4f307f79934a7c36ed0dc62087",class:"kol-toast-container"},this.state._toastStates.length>1&&h(KolButtonTag,{key:"8837aeb34d2d0185e7c69997da07eeb95119177a",_label:translate("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((t=>h(InternalToast,{key:t.id,onClose:()=>this.handleClose(t),onRef:s=>this.handleToastRef(t,s),toastState:t}))))}};KolToastContainer.style={default:KolToastContainerDefaultStyle0};export{KolToastContainer as kol_toast_container};