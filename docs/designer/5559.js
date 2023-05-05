/*! For license information please see 5559.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5559],{62114:(t,e,a)=>{a.d(e,{w:()=>s});var i=a(13320);const s=(t,e,a)=>{(0,i.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},18953:(t,e,a)=>{a.d(e,{a:()=>o,p:()=>r});var i=a(82120),s=a(99311),l=a(13320);const n=t=>{for((0,s.b)()&&((0,i.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,s.b)()&&console.log(t);return(0,s.b)()&&(0,i.d)("↑ Search form element finished."),t},o=(t={})=>{const e=n(t.form);if(e instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===e.tagName)(0,l.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,l.f)(t,l.K.querySelector("form",e));const a=e;"object"==typeof a._on&&null!==typeof a._on&&"function"==typeof a._on.onReset&&a._on.onReset(t)}}},r=(t={})=>{const e=n(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,l.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,l.f)(t,l.K.querySelector("form",e));const a=e;"object"==typeof a._on&&null!==typeof a._on&&"function"==typeof a._on.onSubmit&&a._on.onSubmit(t)}}}},79953:(t,e,a)=>{a.d(e,{a:()=>s,w:()=>l});var i=a(13320);const s=(t,e,a)=>{(0,i.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),a)},l=(t,e,a)=>{(0,i.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),a,{defaultValue:"normal"})}},43870:(t,e,a)=>{a.d(e,{a:()=>l,v:()=>s});var i=a(13320);const s=(t,e)=>{(0,i.b)(t,"_ariaExpanded",e)},l=(t,e)=>{(0,i.b)(t,"_disabled",e)}},23745:(t,e,a)=>{a.d(e,{i:()=>o,v:()=>r,w:()=>h});var i=a(13320),s=a(7269);const l=(t,e,a)=>{(0,s.d)(a)?t[e]=a:(0,s.b)(a,1)&&(t[e]={icon:a})},n=t=>{var e,a,i,n,o,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(a=t.nextState)||void 0===a?void 0:a.get("_icon"),o=(null===(i=t.nextState)||void 0===i?void 0:i.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,e)=>{let a={};return(0,s.b)(t,1)?a="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(l(a,"top",t.top),l(a,"right",t.right),l(a,"bottom",t.bottom),l(a,"left",t.left)),a})(e,o))}else if(null===(o=t.nextState)||void 0===o?void 0:o.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},o=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,s.c)(t.style))&&(0,s.b)(t.icon,1),r=(t,e)=>{(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(t){}(0,i.a)(t,"_icon",(t=>null===t||(0,s.b)(t,1)||"object"==typeof t&&null!==t&&((0,s.b)(t.left,1)||o(t.left)||(0,s.b)(t.right,1)||o(t.right)||(0,s.b)(t.top,1)||o(t.top)||(0,s.b)(t.bottom,1)||o(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,a)=>{null===e&&a.set("_icon",{}),n(t)}},required:!0})}))},h=(t,e)=>{(0,i.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{n(t)}}})}},65559:(t,e,a)=>{a.r(e),a.d(e,{kol_button_wc:()=>f,kol_heading_wc:()=>y,kol_span_wc:()=>p});var i=a(79258),s=a(62114),l=a(82120),n=a(99311),o=a(13320),r=a(7269),h=a(23745),c=a(55709),d=a(39676),_=a(18953),v=a(79953),b=a(43870),u=a(10141);const f=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,n.n)(),this.catchRef=t=>{this.ref=t,(0,r.a)(this.host,this.ref)},this.onClick=t=>{var e,a;"submit"===this.state._type?(0,_.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,_.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)?(t.stopPropagation(),(0,o.f)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t,this.state._value)):(0,l.g)("There was no button click callback configured! (_on.onClick)")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=!1,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:{},_label:"…",_on:{},_type:"button",_variant:"normal"}}render(){return(0,i.h)(i.H,null,(0,i.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,o.j)(this.state._ariaCurrent),"aria-expanded":(0,o.h)(this.state._ariaExpanded),"aria-label":!1===this.state._iconOnly?this.state._ariaLabel:void 0,"aria-labelledby":!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,o.j)(this.state._ariaSelected),class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._iconOnly},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,i.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label},(0,i.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._iconOnly&&(0,i.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAccessKey(t){(0,o.w)(this,"_accessKey",t)}validateAriaControls(t){(0,o.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,o.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,b.v)(this,t)}validateAriaLabel(t){(0,c.a)(this,t)}validateAriaSelected(t){(0,o.b)(this,"_ariaSelected",t)}validateCustomClass(t){(0,o.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,b.a)(this,t),!0===t&&(0,l.e)()}validateIcon(t){(0,h.v)(this,t)}validateIconAlign(t){(0,h.w)(this,t)}validateIconOnly(t){(0,o.b)(this,"_iconOnly",t,{defaultValue:!1})}validateId(t){(0,o.w)(this,"_id",t)}validateLabel(t){(0,c.b)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,o.w)(this,"_role",t)}validateTabIndex(t){(0,d.v)(this,t)}validateTooltipAlign(t){(0,s.w)(this,"_tooltipAlign",t)}validateType(t){(0,v.a)(this,"_type",t)}validateValue(t){(0,o.s)(this,"_value",t)}validateVariant(t){(0,v.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},y=class{constructor(t){(0,i.r)(this,t),this.renderHeadline=(t,e)=>{switch(e){case 1:return(0,i.h)("h1",{class:"headline"},t,(0,i.h)("slot",null));case 2:return(0,i.h)("h2",{class:"headline"},t,(0,i.h)("slot",null));case 3:return(0,i.h)("h3",{class:"headline"},t,(0,i.h)("slot",null));case 4:return(0,i.h)("h4",{class:"headline"},t,(0,i.h)("slot",null));case 5:return(0,i.h)("h5",{class:"headline"},t,(0,i.h)("slot",null));case 6:return(0,i.h)("h6",{class:"headline"},t,(0,i.h)("slot",null));default:return(0,i.h)("strong",{class:"headline"},t,(0,i.h)("slot",null))}},this.renderSecondaryHeadline=(t,e)=>{switch(e){case 1:return(0,i.h)("span",{class:"secondary-headline"},t);case 2:return(0,i.h)("h2",{class:"secondary-headline"},t);case 3:return(0,i.h)("h3",{class:"secondary-headline"},t);case 4:return(0,i.h)("h4",{class:"secondary-headline"},t);case 5:return(0,i.h)("h5",{class:"secondary-headline"},t);case 6:return(0,i.h)("h6",{class:"secondary-headline"},t);default:return(0,i.h)("strong",{class:"secondary-headline"},t)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_label:"…",_level:1}}validateLabel(t){(0,o.w)(this,"_label",t)}validateLevel(t){(0,u.w)(this,t)}validateSecondaryHeadline(t){(0,o.w)(this,"_secondaryHeadline",t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return(0,i.h)(i.H,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,i.h)("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}},p=class{constructor(t){(0,i.r)(this,t),this._icon=void 0,this._iconOnly=!1,this._label=void 0,this.state={_icon:{},_iconOnly:!1,_label:"…"}}render(){const t=this.state._label.length>0;return(0,i.h)(i.H,{class:{"icon-only":this.state._iconOnly}},this.state._icon.top&&(0,i.h)("kol-icon",{class:"icon top",style:this.state._icon.top.style,_ariaLabel:"",_icon:this.state._icon.top.icon}),(0,i.h)("span",null,this.state._icon.left&&(0,i.h)("kol-icon",{class:"icon left",style:this.state._icon.left.style,_ariaLabel:"",_icon:this.state._icon.left.icon}),!0!==this.state._iconOnly&&this.state._label.length>0?(0,i.h)("span",null,this.state._label):"",(0,i.h)("span",{"aria-hidden":t?"true":void 0,hidden:t},(0,i.h)("slot",{name:"expert"})),this.state._icon.right&&(0,i.h)("kol-icon",{class:"icon right",style:this.state._icon.right.style,_ariaLabel:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&(0,i.h)("kol-icon",{class:"icon bottom",style:this.state._icon.bottom.style,_ariaLabel:"",_icon:this.state._icon.bottom.icon}))}validateIcon(t){(0,h.v)(this,t)}validateIconOnly(t){(0,o.b)(this,"_iconOnly",t)}validateLabel(t){(0,c.b)(this,t)}componentWillLoad(){this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label)}static get watchers(){return{_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}}},55709:(t,e,a)=>{a.d(e,{a:()=>d,b:()=>v,c:()=>h,h:()=>r,v:()=>_});var i=a(82120),s=a(13320),l=a(7269);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function h(t){return o.test(t)}const c=(t,e,a,s)=>{const n=e.has("_ariaLabel")?e.get("_ariaLabel"):a.state._ariaLabel;if("string"==typeof n){const t=e.has("_label")?e.get("_label"):a.state._label;!1===(0,l.i)(t,n)&&("_ariaLabel"===s?e.set("_label",n):e.set("_ariaLabel",void 0),(0,i.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},d=(t,e)=>{((t,e,a={})=>{var l;(0,s.w)(t,"_ariaLabel",e,{hooks:{afterPatch:(t,e,s,l)=>{var n,o;"function"==typeof(null===(n=a.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(o=a.hooks)||void 0===o||o.afterPatch(t,e,s,l)),"string"==typeof t&&t.length>0&&!1===r(t,3)&&!1===h(t)&&(0,i.a)(`Ein abweichendes Aria-Label (${t}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(l=a.hooks)||void 0===l?void 0:l.beforePatch}})})(t,e,{hooks:{beforePatch:c}})},_=(t,e,a={})=>{var l;(0,s.w)(t,"_label",e,{hooks:{afterPatch:(t,e,s,l)=>{var n,o;"function"==typeof(null===(n=a.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(o=a.hooks)||void 0===o||o.afterPatch(t,e,s,l)),"string"==typeof t&&!1===r(t,3)&&!1===h(t)&&(0,i.a)(`Ein Label (${t}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(l=a.hooks)||void 0===l?void 0:l.beforePatch},required:!0})},v=(t,e)=>{_(t,e,{hooks:{beforePatch:c}})}},39676:(t,e,a)=>{a.d(e,{v:()=>n});var i=a(82120),s=a(13320);const l={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(t,e)=>{(0,s.e)(t,"_tabIndex",e,l)}},10141:(t,e,a)=>{a.d(e,{w:()=>s});var i=a(13320);const s=(t,e)=>{(0,i.a)(t,"_level",(t=>"number"==typeof t&&0<=t&&t<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);