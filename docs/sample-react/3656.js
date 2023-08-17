/*! For license information please see 3656.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[3656],{93:(t,e,o)=>{o.d(e,{A:()=>c,s:()=>a,t:()=>s});var n=o(6255),i=o(9285);function a(t){t.stopImmediatePropagation(),t.stopPropagation()}function s(t,e,o){e&&function(t,e,o){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,o))}(e,t,o)}const l=(0,o(3721).b)();class c{constructor(t,e,o){var n,a;if(this.setFormAssociatedValue=t=>{var e;const o=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==o&&""!==o||(0,i.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const n=this.tryToStringifyValue(t);this.syncValue(t,n,this.formAssociated),this.syncValue(t,n,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(o),this.name=e,l){switch(null===(n=this.host)||void 0===n||n.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,o){if(l)try{if("boolean"!=typeof(o="object"==typeof o&&null!==o?JSON.stringify(o):o)&&"number"!=typeof o&&"string"!=typeof o)throw new Error("Invalid value type: "+typeof o);null==e||e.setAttribute(t,`${o}`)}catch(o){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,i.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,o){o&&("select"===this.name?(o.querySelectorAll("option").forEach((t=>{o.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),o.appendChild(t)}}))):"string"==typeof e?(o.setAttribute("value",e),o.value=e):(o.removeAttribute("value"),o.value=""))}validateName(t){((t,e,o)=>{(0,n.d)(t,"_name",e,o)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,i.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(l&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},106:(t,e,o)=>{o.d(e,{I:()=>l,v:()=>s});var n=o(6255),i=o(9285),a=o(183);const s=(t,e)=>{(0,n.a)(t,"_hasCounter",e)};class l extends a.I{constructor(t,e,o){super(t,e,o),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,i.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=t}validateAutoComplete(t){(0,n.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHasCounter(t){s(this.component,t)}validateHideLabel(t){(0,n.a)(this.component,"_hideLabel",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(t){(0,n.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,n.d)(this.component,"_pattern",t)}validatePlaceholder(t){(0,n.d)(this.component,"_placeholder",t)}validateReadOnly(t){(0,n.a)(this.component,"_readOnly",t)}validateRequired(t){(0,n.a)(this.component,"_required",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(t){(0,n.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,n.d)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},281:(t,e,o)=>{o.d(e,{a:()=>l,p:()=>c});var n=o(9285),i=o(3721),a=o(6255);const s=t=>{for((0,i.b)()&&((0,n.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,i.b)()&&console.log(t);return(0,i.b)()&&(0,n.d)("↑ Search form element finished."),t},l=(t={})=>{var e,o;const n=s(t.form);if(n instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===n.tagName)(0,a.f)(t,n),n.dispatchEvent(t);else if("KOL-FORM"===n.tagName){(0,a.f)(t,a.K.querySelector("form",n));const i=n;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onReset)&&(null===(o=i._on)||void 0===o||o.onReset(t))}}},c=(t={})=>{var e,o;const n=s(t.form);if(n instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:n});if("FORM"===n.tagName)(0,a.f)(t,n),n.dispatchEvent(t);else if("KOL-FORM"===n.tagName){(0,a.f)(t,a.K.querySelector("form",n));const i=n;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onSubmit)&&(null===(o=i._on)||void 0===o||o.onSubmit(t))}}}},1518:(t,e,o)=>{o.d(e,{I:()=>h,g:()=>c});var n=o(6255),i=o(2241),a=o(9285),s=o(93),l=o(8143);const c=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDescribedBy:n}};class r extends s.A{constructor(t,e,o){super(t,e,o),this.component=t}validateAlert(t){(0,n.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,n.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class h extends r{constructor(t,e,o){super(t,e,o),this.hideLabel=!1,this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,n.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,n.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,n.a)(this.component,"_disabled",t),!0===t&&(0,a.h)()}validateError(t){(0,n.d)(this.component,"_error",t)}validateHideLabel(t){(0,n.a)(this.component,"_hideLabel",t)}validateHint(t){(0,n.d)(this.component,"_hint",t)}validateId(t){(0,n.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,i.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,n.s)(this.component,"_on",t)}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,s.s)(t),(0,s.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const o=t.target.value;(0,s.s)(t),(0,s.t)("change",this.host,o),this.setFormAssociatedValue(o),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,o),this.valueChangeListeners.forEach((t=>t(o)))}onClick(t){var e;(0,s.s)(t),(0,s.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,s.s)(t),(0,s.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var o;this.setFormAssociatedValue(e),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},183:(t,e,o)=>{o.d(e,{I:()=>c});var n=o(5040),i=o(6255),a=o(1383),s=o(1518);const l=(t,e)=>{const o=t;"object"==typeof o&&null!==o&&((0,a.i)(o.right,1)&&(o.right={icon:o.right}),(0,a.i)(o.left,1)&&(o.left={icon:o.left}),e.set("_icon",o))};class c extends s.I{constructor(t,e,o){super(t,e,o),this.component=t}validateIcon(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.w)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||(0,n.i)(t.left)||(0,a.i)(t.right,1)||(0,n.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},5040:(t,e,o)=>{o.d(e,{i:()=>l,v:()=>c,w:()=>r});var n=o(6255),i=o(1383);const a=(t,e,o)=>{(0,i.c)(o)?t[e]=o:(0,i.i)(o,1)&&(t[e]={icon:o})},s=t=>{var e,o,n,s,l,c,r;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(o=t.nextState)||void 0===o?void 0:o.get("_icon"),l=(null===(n=t.nextState)||void 0===n?void 0:n.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let o={};return(0,i.i)(t,1)?o="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(a(o,"top",t.top),a(o,"right",t.right),a(o,"bottom",t.bottom),a(o,"left",t.left)),o})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(c=t.nextState)||void 0===c||c.set("_icon",{[e]:void 0,[null===(r=t.nextState)||void 0===r?void 0:r.get("_iconAlign")]:t.state._icon[e]})}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,i.b)(t.style))&&(0,i.i)(t.icon,1),c=(t,e)=>{(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(t){}(0,n.w)(t,"_icon",(t=>null===t||(0,i.i)(t,1)||"object"==typeof t&&null!==t&&((0,i.i)(t.left,1)||l(t.left)||(0,i.i)(t.right,1)||l(t.right)||(0,i.i)(t.top,1)||l(t.top)||(0,i.i)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,o)=>{null===e&&o.set("_icon",{}),s(t)}},required:!0})}))},r=(t,e)=>{(0,n.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{s(t)}}})}},2241:(t,e,o)=>{o.d(e,{a:()=>m,c:()=>c,h:()=>l,v:()=>d});var n=o(9285),i=o(6255);const a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function c(t){return s.test(t)}function r(t){var e;return{hooks:{afterPatch:(e,o,i,a)=>{var s,r;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(r=t.hooks)||void 0===r||r.afterPatch(e,o,i,a)),"string"==typeof e&&!1===l(e,3)&&!1===c(e)&&(0,n.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const h=new Set(["string"]),d=(t,e,o={})=>{(0,i.w)(t,"_label",(t=>"string"==typeof t),h,e,r(o))},u=new Set(["string","false"]),m=(t,e,o={})=>{""!==e&&"false"!==e||(e=!1),(0,i.w)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,r(o))}},8143:(t,e,o)=>{o.d(e,{v:()=>s});var n=o(9285),i=o(6255);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,n.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,i.e)(t,"_tabIndex",e,a)}}}]);