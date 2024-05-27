/*! For license information please see 9814.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9814],{38773:(t,e,a)=>{a.d(e,{v:()=>o});var i=a(39240);const s=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),o=(t,e,a)=>{(0,i.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),s,a,{defaultValue:"top"})}},21149:(t,e,a)=>{a.d(e,{a:()=>n,b:()=>s,c:()=>r,v:()=>o});var i=a(39240);const s=(t,e)=>{(0,i.d)(t,"_role",e)},o=(t,e)=>{(0,i.d)(t,"_ariaControls",e)},l=(t,e,a)=>{(0,i.w)(t,e,(t=>"date"===t||"location"===t||"page"===t||"step"===t||"time"===t||!0===t||!1===t),new Set(["String {data, location, page, step, time}","boolean"]),a)},n=(t,e)=>{l(t,"_ariaCurrent",e)},r=(t,e)=>{l(t,"_listenAriaCurrent",e)}},5996:(t,e,a)=>{a.d(e,{A:()=>l});var i=a(39240),s=a(42179),o=a(36306);class l{constructor(t,e,a){var i,l,n,r;if(this.experimentalMode=(0,o.a)(),this.setFormAssociatedValue=t=>{var e;const a=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==a&&""!==a||(0,s.d)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(t);this.syncValue(t,i,this.formAssociated),this.syncValue(t,i,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(a),this.type=e,this.experimentalMode&&("KOL-BUTTON"===(r=null===(i=this.host)||void 0===i?void 0:i.tagName)||"KOL-INPUT-CHECKBOX"===r||"KOL-INPUT-COLOR"===r||"KOL-INPUT-DATE"===r||"KOL-INPUT-EMAIL"===r||"KOL-INPUT-FILE"===r||"KOL-INPUT-NUMBER"===r||"KOL-INPUT-PASSWORD"===r||"KOL-INPUT-RADIO"===r||"KOL-INPUT-RANGE"===r||"KOL-INPUT-TEXT"===r||"KOL-SELECT"===r||"KOL-TEXTAREA"===r)){switch(null===(l=this.host)||void 0===l||l.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(n=this.host)||void 0===n||n.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,a){if(this.experimentalMode)try{if("boolean"!=typeof(a="object"==typeof a&&null!==a?JSON.stringify(a):a)&&"number"!=typeof a&&"string"!=typeof a)throw new Error("Invalid value type: "+typeof a);null==e||e.setAttribute(t,`${a}`)}catch(a){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,s.h)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,a){if(a)switch(this.type){case"file":a.files=t;break;case"select":a.querySelectorAll("option").forEach((t=>{a.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),a.appendChild(t)}}));break;default:"string"==typeof e?(a.setAttribute("value",e),a.value=e):(a.removeAttribute("value"),a.value="")}}validateName(t){((t,e,a)=>{(0,i.d)(t,"_name",e,a)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,s.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},39581:(t,e,a)=>{a.d(e,{a:()=>n,p:()=>r});var i=a(42179),s=a(36306),o=a(39240);const l=t=>{for((0,s.a)()&&((0,i.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,s.a)()&&console.log(t);return(0,s.a)()&&(0,i.d)("↑ Search form element finished."),t},n=(t={})=>{var e,a;const i=l(t.form);if(i instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===i.tagName)(0,o.f)(t,i),i.dispatchEvent(t);else if("KOL-FORM"===i.tagName){(0,o.f)(t,o.K.querySelector("form",i));const s=i;"function"==typeof(null===(e=s._on)||void 0===e?void 0:e.onReset)&&(null===(a=s._on)||void 0===a||a.onReset(t))}}},r=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,s.a)()&&!1===e.noValidate&&(0,i.d)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof e.requestSubmit?e.requestSubmit():((0,o.f)(t,e),e.dispatchEvent(t))}));else if("KOL-FORM"===e.tagName){(0,o.f)(t,o.K.querySelector("form",e));const a=e;setTimeout((()=>{var e,i;"function"==typeof(null===(e=a._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=a._on)||void 0===i||i.onSubmit(t))}))}}}},19712:(t,e,a)=>{a.d(e,{a:()=>s,v:()=>o});var i=a(39240);const s=(t,e)=>{(0,i.w)(t,"_variant",(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),e,{defaultValue:"normal"})},o=(t,e)=>{(0,i.d)(t,"_customClass",e,{defaultValue:void 0})}},91394:(t,e,a)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function s(t,e,a){e&&function(t,e,a){const i=t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,a))}(e,t,a)}a.d(e,{s:()=>i,t:()=>s})},33753:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(39240);const s=(t,e,a={})=>{(0,i.a)(t,"_hideLabel",e,a)}},54099:(t,e,a)=>{a.d(e,{i:()=>n,v:()=>r,w:()=>d});var i=a(39240),s=a(82559);const o=(t,e,a)=>{(0,s.c)(a)?t[e]=a:(0,s.i)(a,1)&&(t[e]={icon:a})},l=t=>{var e,a,i;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(a=t.nextState)||void 0===a?void 0:a.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",(t=>{let e={};return(0,s.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(o(e,"top",t.top),o(e,"right",t.right),o(e,"bottom",t.bottom),o(e,"left",t.left)),e})(e))}},n=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,s.b)(t.style))&&(0,s.i)(t.icon,1),r=(t,e,a={})=>{(0,i.o)(e,(()=>{var o;try{e=(0,i.p)(e)}catch(t){}(0,i.w)(t,"_icons",(t=>null===t||(0,s.i)(t,1)||"object"==typeof t&&null!==t&&((0,s.i)(t.left,1)||n(t.left)||(0,s.i)(t.right,1)||n(t.right)||(0,s.i)(t.top,1)||n(t.top)||(0,s.i)(t.bottom,1)||n(t.bottom))),new Set(["KoliBriIcon"]),e,Object.assign(Object.assign({},a),{defaultValue:{},hooks:{afterPatch:null===(o=a.hooks)||void 0===o?void 0:o.afterPatch,beforePatch:(t,e,i,s)=>{var o,n;"function"==typeof(null===(o=a.hooks)||void 0===o?void 0:o.beforePatch)&&(null===(n=a.hooks)||void 0===n||n.beforePatch(t,e,i,s)),l(i)}}}))}))},d=(t,e)=>{(0,i.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})}},89814:(t,e,a)=>{a.r(e),a.d(e,{kol_button_wc:()=>p});var i=a(74643),s=a(21149),o=a(39240),l=a(19712),n=a(33753),r=a(54099),d=a(1697),h=a(86707),c=a(42179),u=a(91394),v=a(82559),b=a(26483),f=a(39581),_=a(5996),m=a(52296);const p=class{render(){const t=(0,v.s)(this.state._label);return(0,i.h)(i.H,{key:"2d4c72c5bd94430dcf932a509c61407fae22aff4",class:"kol-button-wc"},(0,i.h)("button",Object.assign({key:"ef912fbbe1ec9e0d78947b9f856e0b7868d4558e",ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,o.h)(this.state._ariaCurrent),"aria-expanded":(0,o.i)(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-selected":(0,o.h)(this.state._ariaSelected),class:{button:!0,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id,name:this.state._name},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,i.h)(m.g,{key:"bb10966beaeb7b582c9d0a4317aa0e6722b8f539",class:"button-inner",_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:t?"":this.state._label},(0,i.h)("slot",{key:"fa5ecae613aa864450d98615d497483a43f935b9",name:"expert",slot:"expert"}))),(0,i.h)(m.b,{key:"b7f90422b22541f689b5bae75f905a0d67bd5bf0","aria-hidden":"true",hidden:t||!this.state._hideLabel,_align:this.state._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,v.a)(this.host,this.ref)},this.onClick=t=>{var e,a;"submit"===this.state._type?(0,f.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,f.a)({form:this.host,ref:this.ref}):((0,u.s)(t),(0,u.t)("click",this.host,this.state._value),this.controller.setFormAssociatedValue(this.state._value),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&((0,o.f)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t,this.state._value)))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._icons=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icons:{},_label:"…",_on:{},_type:"button",_variant:"normal"},this.controller=new _.A(this,"button",this.host)}validateAccessKey(t){(0,o.d)(this,"_accessKey",t)}validateAriaControls(t){(0,s.v)(this,t)}validateAriaCurrent(t){(0,s.a)(this,t)}validateAriaExpanded(t){((t,e)=>{(0,o.a)(t,"_ariaExpanded",e)})(this,t)}validateAriaLabel(t){this.validateLabel(t)}validateAriaSelected(t){(0,o.a)(this,"_ariaSelected",t)}validateCustomClass(t){(0,l.v)(this,t)}validateDisabled(t){((t,e)=>{(0,o.a)(t,"_disabled",e)})(this,t),!0===t&&(0,c.g)()}validateHideLabel(t){(0,n.v)(this,t)}validateIcon(t){(0,r.v)(this,t)}validateIcons(t){(0,r.v)(this,t)}validateIconAlign(t){(0,r.w)(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateId(t){(0,o.d)(this,"_id",t)}validateLabel(t){(0,d.a)(this,t,{required:!0})}validateName(t){this.controller.validateName(t)}validateOn(t){((t,e)=>{(0,o.w)(t,"_on",(t=>"object"==typeof t&&null!==t),new Set(["ButtonCallbacksPropType {Events.onClick, Events.onMouseDown}"]),e)})(this,t)}validateRole(t){(0,s.b)(this,t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){(0,b.v)(this,t)}validateTooltipAlign(t){(0,h.v)(this,t)}validateType(t){((t,e)=>{(0,o.w)(t,"_type",(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),e)})(this,t)}validateValue(t){(0,o.s)(this,"_value",t),this.controller.setFormAssociatedValue(this.state._value)}validateVariant(t){(0,l.a)(this,t)}componentWillLoad(){var t;this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcons(this._icons||this._icon),this.validateIconAlign(this._iconAlign),this.validateId(this._id),this.validateLabel(null!==(t=this._label)&&void 0!==t?t:this._ariaLabel),this.validateName(this._name),this.validateOn(this._on),this.validateRole(this._role),this.validateSyncValueBySelector(this._syncValueBySelector),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_icons:["validateIcons"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_role:["validateRole"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}}},1697:(t,e,a)=>{a.d(e,{a:()=>c,c:()=>r,h:()=>n,v:()=>h});var i=a(42179),s=a(39240);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function n(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return l.test(t)}const d=new Set(["string"]),h=(t,e,a={})=>{(0,s.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,a,s,o)=>{var l,d;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,a,s,o)),"string"==typeof e&&!1===n(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(a))},c=h},26483:(t,e,a)=>{a.d(e,{v:()=>l});var i=a(42179),s=a(39240);const o={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},l=(t,e)=>{(0,s.e)(t,"_tabIndex",e,o)}},86707:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(38773);const s=(t,e)=>{(0,i.v)(t,"_tooltipAlign",e)}}}]);