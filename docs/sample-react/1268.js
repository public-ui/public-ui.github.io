/*! For license information please see 1268.js.LICENSE.txt */ "use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1268],{6232:(t,e,i)=>{i.d(e,{i:()=>s,v:()=>c,w:()=>r});var o=i(1540),n=i(4046);const a=(t,e,i)=>{(0,n.d)(i)?t[e]=i:(0,n.b)(i,1)&&(t[e]={icon:i})},l=t=>{var e,i,o,l,s,c,r;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),s=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(l=t.nextState)||void 0===l||l.set("_icon",((t,e)=>{let i={};return(0,n.b)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(a(i,"top",t.top),a(i,"right",t.right),a(i,"bottom",t.bottom),a(i,"left",t.left)),i})(e,s))}else if(null===(s=t.nextState)||void 0===s?void 0:s.has("_iconAlign")){const e=t.state._iconAlign;null===(c=t.nextState)||void 0===c||c.set("_icon",{[e]:void 0,[null===(r=t.nextState)||void 0===r?void 0:r.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.c)(t.style))&&(0,n.b)(t.icon,1),c=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.a)(t,"_icon",(t=>null===t||(0,n.b)(t,1)||"object"==typeof t&&null!==t&&((0,n.b)(t.left,1)||s(t.left)||(0,n.b)(t.right,1)||s(t.right)||(0,n.b)(t.top,1)||s(t.top)||(0,n.b)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),l(t)}},required:!0})}))},r=(t,e)=>{(0,o.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})}},1268:(t,e,i)=>{i.r(e),i.d(e,{kol_span_wc:()=>s});var o=i(454),n=i(1540),a=i(6232),l=i(6314);const s=class{constructor(t){(0,o.r)(this,t),this._icon=void 0,this._iconOnly=!1,this._label=void 0,this.state={_icon:{},_iconOnly:!1,_label:"…"}}render(){const t=this.state._label.length>0;return(0,o.h)(o.H,{class:{"icon-only":this.state._iconOnly}},this.state._icon.top&&(0,o.h)("kol-icon",{class:"icon top",style:this.state._icon.top.style,_ariaLabel:"",_icon:this.state._icon.top.icon}),(0,o.h)("span",null,this.state._icon.left&&(0,o.h)("kol-icon",{class:"icon left",style:this.state._icon.left.style,_ariaLabel:"",_icon:this.state._icon.left.icon}),!0!==this.state._iconOnly&&this.state._label.length>0?(0,o.h)("span",null,this.state._label):"",(0,o.h)("span",{"aria-hidden":t?"true":void 0,hidden:t},(0,o.h)("slot",{name:"expert"})),this.state._icon.right&&(0,o.h)("kol-icon",{class:"icon right",style:this.state._icon.right.style,_ariaLabel:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&(0,o.h)("kol-icon",{class:"icon bottom",style:this.state._icon.bottom.style,_ariaLabel:"",_icon:this.state._icon.bottom.icon}))}validateIcon(t){(0,a.v)(this,t)}validateIconOnly(t){(0,n.b)(this,"_iconOnly",t)}validateLabel(t){(0,l.b)(this,t)}componentWillLoad(){this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label)}static get watchers(){return{_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}}},6314:(t,e,i)=>{i.d(e,{a:()=>b,b:()=>d,c:()=>r,h:()=>c,v:()=>_});var o=i(3684),n=i(1540),a=i(4046);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function c(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const h=(t,e,i,n)=>{const l=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof l){const t=e.has("_label")?e.get("_label"):i.state._label;!1===(0,a.i)(t,l)&&("_ariaLabel"===n?e.set("_label",l):e.set("_ariaLabel",void 0),(0,o.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},b=(t,e)=>{((t,e,i={})=>{var a;(0,n.w)(t,"_ariaLabel",e,{hooks:{afterPatch:(t,e,n,a)=>{var l,s;"function"==typeof(null===(l=i.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(t,e,n,a)),"string"==typeof t&&t.length>0&&!1===c(t,3)&&!1===r(t)&&(0,o.a)(`Ein abweichendes Aria-Label (${t}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(a=i.hooks)||void 0===a?void 0:a.beforePatch}})})(t,e,{hooks:{beforePatch:h}})},_=(t,e,i={})=>{var a;(0,n.w)(t,"_label",e,{hooks:{afterPatch:(t,e,n,a)=>{var l,s;"function"==typeof(null===(l=i.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(t,e,n,a)),"string"==typeof t&&!1===c(t,3)&&!1===r(t)&&(0,o.a)(`Ein Label (${t}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(a=i.hooks)||void 0===a?void 0:a.beforePatch},required:!0})},d=(t,e)=>{_(t,e,{hooks:{beforePatch:h}})}}}]);