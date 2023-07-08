/*! For license information please see 2678.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[2678],{9970:(t,e,a)=>{a.d(e,{w:()=>s});var i=a(2996);const s=(t,e,a)=>{(0,i.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},2075:(t,e,a)=>{a.d(e,{a:()=>o,p:()=>r});var i=a(8242),s=a(834),l=a(2996);const n=t=>{for((0,s.b)()&&((0,i.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,s.b)()&&console.log(t);return(0,s.b)()&&(0,i.d)("↑ Search form element finished."),t},o=(t={})=>{var e,a;const i=n(t.form);if(i instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===i.tagName)(0,l.f)(t,i),i.dispatchEvent(t);else if("KOL-FORM"===i.tagName){(0,l.f)(t,l.K.querySelector("form",i));const s=i;"function"==typeof(null===(e=s._on)||void 0===e?void 0:e.onReset)&&(null===(a=s._on)||void 0===a||a.onReset(t))}}},r=(t={})=>{var e,a;const i=n(t.form);if(i instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:i});if("FORM"===i.tagName)(0,l.f)(t,i),i.dispatchEvent(t);else if("KOL-FORM"===i.tagName){(0,l.f)(t,l.K.querySelector("form",i));const s=i;"function"==typeof(null===(e=s._on)||void 0===e?void 0:e.onSubmit)&&(null===(a=s._on)||void 0===a||a.onSubmit(t))}}}},4365:(t,e,a)=>{a.d(e,{a:()=>s,w:()=>l});var i=a(2996);const s=(t,e,a)=>{(0,i.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),a)},l=(t,e,a)=>{(0,i.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),a,{defaultValue:"normal"})}},5252:(t,e,a)=>{a.d(e,{a:()=>l,v:()=>s});var i=a(2996);const s=(t,e)=>{(0,i.b)(t,"_ariaExpanded",e)},l=(t,e)=>{(0,i.b)(t,"_disabled",e)}},3002:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(2996);const s=(t,e)=>{(0,i.b)(t,"_hideLabel",e)}},9545:(t,e,a)=>{a.d(e,{i:()=>o,v:()=>r,w:()=>d});var i=a(2996),s=a(1383);const l=(t,e,a)=>{(0,s.c)(a)?t[e]=a:(0,s.i)(a,1)&&(t[e]={icon:a})},n=t=>{var e,a,i,n,o,r,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(a=t.nextState)||void 0===a?void 0:a.get("_icon"),o=(null===(i=t.nextState)||void 0===i?void 0:i.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,e)=>{let a={};return(0,s.i)(t,1)?a="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(l(a,"top",t.top),l(a,"right",t.right),l(a,"bottom",t.bottom),l(a,"left",t.left)),a})(e,o))}else if(null===(o=t.nextState)||void 0===o?void 0:o.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},o=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,s.b)(t.style))&&(0,s.i)(t.icon,1),r=(t,e)=>{(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(t){}(0,i.a)(t,"_icon",(t=>null===t||(0,s.i)(t,1)||"object"==typeof t&&null!==t&&((0,s.i)(t.left,1)||o(t.left)||(0,s.i)(t.right,1)||o(t.right)||(0,s.i)(t.top,1)||o(t.top)||(0,s.i)(t.bottom,1)||o(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,a)=>{null===e&&a.set("_icon",{}),n(t)}},required:!0})}))},d=(t,e)=>{(0,i.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{n(t)}}})}},2678:(t,e,a)=>{a.r(e),a.d(e,{kol_button_wc:()=>p,kol_heading_wc:()=>g});var i=a(578),s=a(9970),l=a(5252),n=a(3002),o=a(9545),r=a(6e3),d=a(8242),h=a(834),c=a(2996),_=a(1383),v=a(4045),u=a(2075),b=a(4365),f=a(476);const p=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,h.n)(),this.catchRef=t=>{this.ref=t,(0,_.a)(this.host,this.ref)},this.onClick=t=>{var e,a;"submit"===this.state._type?(0,u.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,u.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)?(t.stopPropagation(),(0,c.f)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t,this.state._value)):(0,d.h)("There was no button click callback configured! (_on.onClick)")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:{},_label:!1,_on:{},_type:"button",_variant:"normal"}}render(){const t=!1===this.state._label;return(0,i.h)(i.H,null,(0,i.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,c.j)(this.state._ariaCurrent),"aria-expanded":(0,c.h)(this.state._ariaExpanded),"aria-labelledby":this.state._hideLabel?this.nonce:void 0,"aria-selected":(0,c.j)(this.state._ariaSelected),class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,i.h)("kol-span-wc",{_icon:this.state._icon,_hideLabel:this.state._hideLabel,_label:!t&&this.state._label},(0,i.h)("slot",{name:"expert",slot:"expert"}))),(0,i.h)("kol-tooltip",{"aria-hidden":"true",hidden:t||!this.state._hideLabel,_align:this.state._tooltipAlign,_id:this.nonce,_label:"string"==typeof this.state._label?this.state._label:""}))}validateAccessKey(t){(0,c.w)(this,"_accessKey",t)}validateAriaControls(t){(0,c.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,c.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,l.v)(this,t)}validateAriaLabel(t){this.validateLabel(t)}validateAriaSelected(t){(0,c.b)(this,"_ariaSelected",t)}validateCustomClass(t){(0,c.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,l.a)(this,t),!0===t&&(0,d.g)()}validateHideLabel(t){(0,n.v)(this,t)}validateIcon(t){(0,o.v)(this,t)}validateIconAlign(t){(0,o.w)(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateId(t){(0,c.w)(this,"_id",t)}validateLabel(t){(0,r.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,c.w)(this,"_role",t)}validateTabIndex(t){(0,v.v)(this,t)}validateTooltipAlign(t){(0,s.w)(this,"_tooltipAlign",t)}validateType(t){(0,b.a)(this,"_type",t)}validateValue(t){(0,c.s)(this,"_value",t)}validateVariant(t){(0,b.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateId(this._id),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},g=class{constructor(t){(0,i.r)(this,t),this.renderHeadline=(t,e)=>{switch(e){case 1:return(0,i.h)("h1",{class:"headline"},t,(0,i.h)("slot",null));case 2:return(0,i.h)("h2",{class:"headline"},t,(0,i.h)("slot",null));case 3:return(0,i.h)("h3",{class:"headline"},t,(0,i.h)("slot",null));case 4:return(0,i.h)("h4",{class:"headline"},t,(0,i.h)("slot",null));case 5:return(0,i.h)("h5",{class:"headline"},t,(0,i.h)("slot",null));case 6:return(0,i.h)("h6",{class:"headline"},t,(0,i.h)("slot",null));default:return(0,i.h)("strong",{class:"headline"},t,(0,i.h)("slot",null))}},this.renderSecondaryHeadline=(t,e)=>{switch(e){case 1:return(0,i.h)("span",{class:"secondary-headline"},t);case 2:return(0,i.h)("h2",{class:"secondary-headline"},t);case 3:return(0,i.h)("h3",{class:"secondary-headline"},t);case 4:return(0,i.h)("h4",{class:"secondary-headline"},t);case 5:return(0,i.h)("h5",{class:"secondary-headline"},t);case 6:return(0,i.h)("h6",{class:"secondary-headline"},t);default:return(0,i.h)("strong",{class:"secondary-headline"},t)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_label:!1,_level:1}}validateLabel(t){(0,r.a)(this,t)}validateLevel(t){(0,f.w)(this,t)}validateSecondaryHeadline(t){(0,c.w)(this,"_secondaryHeadline",t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return(0,i.h)(i.H,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,i.h)("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}}},6e3:(t,e,a)=>{a.d(e,{a:()=>v,c:()=>r,h:()=>o,v:()=>c});var i=a(8242),s=a(2996);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,n=/^\d+$/;function o(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return n.test(t)}function d(t){var e;return{hooks:{afterPatch:(e,a,s,l)=>{var n,d;"function"==typeof(null===(n=t.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,a,s,l)),"string"==typeof e&&!1===o(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const h=new Set(["string"]),c=(t,e,a={})=>{(0,s.a)(t,"_label",(t=>"string"==typeof t),h,e,d(a))},_=new Set(["string","false"]),v=(t,e,a={})=>{""!==e&&"false"!==e||(e=!1),(0,s.a)(t,"_label",(t=>!1===t||"string"==typeof t),_,e,d(a))}},4045:(t,e,a)=>{a.d(e,{v:()=>n});var i=a(8242),s=a(2996);const l={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(t,e)=>{(0,s.e)(t,"_tabIndex",e,l)}},476:(t,e,a)=>{a.d(e,{w:()=>s});var i=a(2996);const s=(t,e)=>{(0,i.a)(t,"_level",(t=>"number"==typeof t&&0<=t&&t<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);