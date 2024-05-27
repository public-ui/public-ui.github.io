/*! For license information please see 4185.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[4185],{5605:(t,e,s)=>{s.d(e,{i:()=>o,n:()=>r,r:()=>l});var a=s(1973),n=s(5614);const i=()=>{let t=(0,a.d)().KoliBri;return void 0===t&&(t={},Object.defineProperty((0,a.d)(),"KoliBri",{value:t,writable:!1})),t},o=()=>{(()=>{const t=(0,a.g)().querySelector('meta[name="kolibri"]');if(t&&t.hasAttribute("content")){const e=t.getAttribute("content");"string"==typeof e&&((0,a.s)(e.includes("dev-mode=true")),(0,a.b)(e.includes("experimental-mode=true")),(0,a.c)(e.includes("color-contrast-analysis=true")))}})(),a.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.1.1\n\t",{forceLog:!0})},l=()=>{!0!==i().adviceShown&&(Object.defineProperty(i(),"adviceShown",{get:function(){return!0}}),a.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let r=()=>Math.floor(16777215*Math.random()).toString(16);"test"===n.p&&(r=()=>"nonce")},282:(t,e,s)=>{s.d(e,{t:()=>i});var a=s(1999),n=s(5614);let i=(t,e)=>{var s;return(null!==(s=(0,a.g)())&&void 0!==s?s:(0,a.i)("de")).translate(t,e)};"test"===n.p&&(i=t=>t)},4185:(t,e,s)=>{s.r(e),s.d(e,{kol_toast_container:()=>c});var a=s(3185),n=s(282),i=s(5605),o=s(5501),l=(t,e,s)=>new Promise(((a,n)=>{var i=t=>{try{l(s.next(t))}catch(t){n(t)}},o=t=>{try{l(s.throw(t))}catch(t){n(t)}},l=t=>t.done?a(t.value):Promise.resolve(t.value).then(i,o);l((s=s.apply(t,e)).next())}));const r=({key:t,onClose:e,onRef:s,toastState:n})=>(0,a.h)("div",{class:`toast ${n.status}`,key:t},(0,a.h)(o.k,{class:"alert",_alert:!0,_label:n.toast.label,_level:0,_hasCloser:!0,_type:n.toast.type,_variant:n.toast.alertVariant||"card",_on:{onClose:e}},(0,a.h)("div",{ref:s},"string"==typeof n.toast.description?n.toast.description:null))),c=class{constructor(t){(0,a.r)(this,t),this.knownRenderFunctions=new Set,this.state={_toastStates:[]}}enqueue(t){return l(this,null,(function*(){const e={toast:t,status:"adding",id:`toast-${(0,i.n)()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[e,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>t.id===e.id?Object.assign(Object.assign({},t),{status:"settled"}):t))})}),300),()=>{this.handleClose(e)}}))}handleClose(t){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((e=>(e.id===t.id&&(e.status="removing"),e)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((e=>e.id!==t.id))})}),300)}closeAll(){return l(this,null,(function*(){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>Object.assign(Object.assign({},t),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]})}),300)}))}handleToastRef(t,e){e&&"function"==typeof t.toast.render&&!this.knownRenderFunctions.has(t.toast.render)&&(this.knownRenderFunctions.add(t.toast.render),t.toast.render(e,{close:()=>this.handleClose(t)}))}render(){return(0,a.h)(a.H,{key:"6358ada11de2e453c06980870ca8c143694479bb",class:"kol-toast-container"},this.state._toastStates.length>1&&(0,a.h)(o.n,{key:"78887c7956b35766b9199cb0bee9b0807312e6d6",_label:(0,n.t)("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((t=>(0,a.h)(r,{key:t.id,onClose:()=>this.handleClose(t),onRef:e=>this.handleToastRef(t,e),toastState:t}))))}};c.style={default:"@layer kol-component {\n  :host {\n    display: flex;\n    flex-direction: column;\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n    position: fixed;\n    z-index: 200;\n  }\n  .close-all {\n    align-self: flex-end;\n  }\n}"}}}]);