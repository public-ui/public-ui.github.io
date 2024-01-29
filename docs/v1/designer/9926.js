/*! For license information please see 9926.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9926],{76465:(e,t,a)=>{a.d(t,{v:()=>l});var i=a(67248);const s=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),l=(e,t,a)=>{(0,i.w)(e,t,(e=>"bottom"===e||"left"===e||"right"===e||"top"===e),s,a,{defaultValue:"top"})}},20008:(e,t,a)=>{a.d(t,{a:()=>o,b:()=>r,c:()=>s,v:()=>l});var i=a(67248);const s=(e,t)=>{(0,i.d)(e,"_role",t)},l=(e,t)=>{(0,i.d)(e,"_ariaControls",t)},n=(e,t,a)=>{(0,i.w)(e,t,(e=>"date"===e||"location"===e||"page"===e||"step"===e||"time"===e||!0===e||!1===e),new Set(["String {data, location, page, step, time}","boolean"]),a)},o=(e,t)=>{n(e,"_ariaCurrent",t)},r=(e,t)=>{n(e,"_listenAriaCurrent",t)}},56222:(e,t,a)=>{a.d(t,{A:()=>n});var i=a(67248),s=a(88089);const l=(0,a(49461).d)();class n{constructor(e,t,a){var i,n;if(this.setFormAssociatedValue=e=>{var t;const a=null===(t=this.formAssociated)||void 0===t?void 0:t.getAttribute("name");null!==a&&""!==a||(0,s.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(e);this.syncValue(e,i,this.formAssociated),this.syncValue(e,i,this.syncToOwnInput)},this.component=e,this.host=this.findHostWithShadowRoot(a),this.name=t,l){switch(null===(i=this.host)||void 0===i||i.querySelectorAll("input,select,textarea").forEach((e=>{var t;null===(t=this.host)||void 0===t||t.removeChild(e)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(n=this.host)||void 0===n||n.appendChild(this.formAssociated)}}findHostWithShadowRoot(e){for(;null===(null==e?void 0:e.shadowRoot)&&e!==document.body;)(e=null==e?void 0:e.parentNode).host&&(e=e.host);return e}setAttribute(e,t,a){if(l)try{if("boolean"!=typeof(a="object"==typeof a&&null!==a?JSON.stringify(a):a)&&"number"!=typeof a&&"string"!=typeof a)throw new Error("Invalid value type: "+typeof a);null==t||t.setAttribute(e,`${a}`)}catch(a){null==t||t.removeAttribute(e)}}tryToStringifyValue(e){try{return"object"==typeof e&&null!==e?JSON.stringify(e).toString():null==e?null:e.toString()}catch(e){return(0,s.h)(`The form field raw value is not able to stringify! ${e}`),""}}syncValue(e,t,a){a&&("select"===this.name?(a.querySelectorAll("option").forEach((e=>{a.removeChild(e)})),Array.isArray(e)&&e.forEach((e=>{const t=this.tryToStringifyValue(e);if("string"==typeof t){const e=document.createElement("option");e.setAttribute("value",t),e.setAttribute("selected",""),a.appendChild(e)}}))):"string"==typeof t?(a.setAttribute("value",t),a.value=t):(a.removeAttribute("value"),a.value=""))}validateName(e){((e,t,a)=>{(0,i.d)(e,"_name",t,a)})(this.component,e,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===e&&(0,s.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(e){if(l&&"string"==typeof e){const t=document.querySelector(e);t&&(this.syncToOwnInput=t)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},57192:(e,t,a)=>{a.d(t,{a:()=>o,p:()=>r});var i=a(88089),s=a(49461),l=a(67248);const n=e=>{for((0,s.d)()&&((0,i.d)("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;)e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null,(0,s.d)()&&console.log(e);return(0,s.d)()&&(0,i.d)("↑ Search form element finished."),e},o=(e={})=>{var t,a;const i=n(e.form);if(i instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===i.tagName)(0,l.f)(e,i),i.dispatchEvent(e);else if("KOL-FORM"===i.tagName){(0,l.f)(e,l.K.querySelector("form",i));const s=i;"function"==typeof(null===(t=s._on)||void 0===t?void 0:t.onReset)&&(null===(a=s._on)||void 0===a||a.onReset(e))}}},r=(e={})=>{var t,a;const i=n(e.form);if(i instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:i});if("FORM"===i.tagName)(0,l.f)(e,i),i.dispatchEvent(e);else if("KOL-FORM"===i.tagName){(0,l.f)(e,l.K.querySelector("form",i));const s=i;"function"==typeof(null===(t=s._on)||void 0===t?void 0:t.onSubmit)&&(null===(a=s._on)||void 0===a||a.onSubmit(e))}}}},17438:(e,t,a)=>{a.d(t,{a:()=>s,v:()=>l});var i=a(67248);const s=(e,t)=>{(0,i.w)(e,"_variant",(e=>"primary"===e||"secondary"===e||"normal"===e||"danger"===e||"ghost"===e||"custom"===e),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),t,{defaultValue:"normal"})},l=(e,t)=>{(0,i.d)(e,"_customClass",t,{defaultValue:void 0})}},43985:(e,t,a)=>{function i(e){e.stopImmediatePropagation(),e.stopPropagation()}function s(e,t,a){t&&function(e,t,a){e.dispatchEvent(function(e,t){return new CustomEvent(`kol-${e}`,{bubbles:!0,cancelable:!0,composed:!0,detail:t})}(t,a))}(t,e,a)}a.d(t,{s:()=>i,t:()=>s})},18264:(e,t,a)=>{a.d(t,{v:()=>s});var i=a(67248);const s=(e,t)=>{(0,i.a)(e,"_hasCloser",t)}},30297:(e,t,a)=>{a.d(t,{v:()=>s});var i=a(67248);const s=(e,t,a={})=>{(0,i.a)(e,"_hideLabel",t,a)}},85490:(e,t,a)=>{a.d(t,{a:()=>d});var i=a(98995),s=a(88089);const l={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer"},n={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number"},o=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),r=new Set([e=>e("en",o(n)),e=>e("de",o(l))]),d=(e,t)=>{const a=(0,i.g)();if(void 0===a)return(0,s.d)("[I18n] I18nService not available! Please call the global register function."),e;let l=a.translate(e,t);return l===e&&((0,s.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((e=>e(((e,t)=>(a.addResourceBundle(e,t),e))))),l=a.translate(e,t)),l}},98927:(e,t,a)=>{a.d(t,{i:()=>o,v:()=>r,w:()=>d});var i=a(67248),s=a(48125);const l=(e,t,a)=>{(0,s.c)(a)?e[t]=a:(0,s.i)(a,1)&&(e[t]={icon:a})},n=e=>{var t,a,i;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icons")){const t=null===(a=e.nextState)||void 0===a?void 0:a.get("_icons");null===(i=e.nextState)||void 0===i||i.set("_icons",(e=>{let t={};return(0,s.i)(e,1)?t={left:{icon:e}}:"object"==typeof e&&null!==e&&(l(t,"top",e.top),l(t,"right",e.right),l(t,"bottom",e.bottom),l(t,"left",e.left)),t})(t))}},o=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,s.b)(e.style))&&(0,s.i)(e.icon,1),r=(e,t,a={})=>{(0,i.o)(t,(()=>{var l;try{t=(0,i.p)(t)}catch(e){}(0,i.w)(e,"_icons",(e=>null===e||(0,s.i)(e,1)||"object"==typeof e&&null!==e&&((0,s.i)(e.left,1)||o(e.left)||(0,s.i)(e.right,1)||o(e.right)||(0,s.i)(e.top,1)||o(e.top)||(0,s.i)(e.bottom,1)||o(e.bottom))),new Set(["KoliBriIcon"]),t,Object.assign(Object.assign({},a),{defaultValue:{},hooks:{afterPatch:null===(l=a.hooks)||void 0===l?void 0:l.afterPatch,beforePatch:(e,t,i,s)=>{var l,o;"function"==typeof(null===(l=a.hooks)||void 0===l?void 0:l.beforePatch)&&(null===(o=a.hooks)||void 0===o||o.beforePatch(e,t,i,s)),n(i)}}}))}))},d=(e,t)=>{(0,i.w)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{n(e)}}})}},9926:(e,t,a)=>{a.r(t),a.d(t,{kol_alert_wc:()=>w,kol_button_wc:()=>C,kol_heading_wc:()=>L});var i=a(25262),s=a(85490),l=a(18264),n=a(94972),o=a(49461),r=a(67248),d=a(32839),h=a(20008),c=a(17438),v=a(30297),u=a(98927),_=a(67932),b=a(88089),g=a(43985),f=a(48125),p=a(6236),m=a(57192),y=a(56222);const A=e=>(0,i.h)("kol-icon",{class:"heading-icon",_ariaLabel:"string"==typeof e.label&&e.label.length>0?"":e.ariaLabel,_icons:e.icon}),S=e=>{switch(e.type){case"error":return(0,i.h)(A,{ariaLabel:(0,s.a)("kol-error"),icon:"codicon codicon-error",label:e.label});case"info":return(0,i.h)(A,{ariaLabel:(0,s.a)("kol-info"),icon:"codicon codicon-info",label:e.label});case"warning":return(0,i.h)(A,{ariaLabel:(0,s.a)("kol-warning"),icon:"codicon codicon-warning",label:e.label});case"success":return(0,i.h)(A,{ariaLabel:(0,s.a)("kol-success"),icon:"codicon codicon-pass",label:e.label});default:return(0,i.h)(A,{ariaLabel:(0,s.a)("kol-message"),icon:"codicon codicon-comment",label:e.label})}},w=class{constructor(e){(0,i.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._label=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{o.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){o.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,i.h)(i.H,{class:{[this.state._type]:!0,[this.state._variant]:!0,hasCloser:!!this.state._hasCloser},role:this.state._alert?"alert":void 0},(0,i.h)("div",{class:"heading"},(0,i.h)(S,{label:this.state._label,type:this.state._type}),(0,i.h)("div",null,"string"==typeof this.state._label&&(null===(e=this.state._label)||void 0===e?void 0:e.length)>0&&(0,i.h)("kol-heading-wc",{_label:this.state._label,_level:this.state._level}),"msg"===this.state._variant&&(0,i.h)("div",{class:"content"},(0,i.h)("slot",null))),this.state._hasCloser&&(0,i.h)("kol-button-wc",{class:"close",_hideLabel:!0,_icons:{left:{icon:"codicon codicon-close"}},_label:(0,s.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this.state._variant&&(0,i.h)("div",{class:"content"},(0,i.h)("slot",null)))}validateAlert(e){(0,r.a)(this,"_alert",e)}validateHasCloser(e){(0,l.v)(this,e)}validateLabel(e){(0,n.v)(this,e)}validateLevel(e){(0,d.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,r.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,r.w)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}validateVariant(e){(0,r.w)(this,"_variant",(e=>"card"===e||"msg"===e),new Set("AlertVariant {card, msg}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}},C=class{render(){const e=(0,f.s)(this.state._label);return(0,i.h)(i.H,null,(0,i.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,r.l)(this.state._ariaCurrent),"aria-expanded":(0,r.i)(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-selected":(0,r.l)(this.state._ariaSelected),class:{button:!0,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id,name:this.state._name},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,i.h)("kol-span-wc",{class:"button-inner",_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:e?"":this.state._label},(0,i.h)("slot",{name:"expert",slot:"expert"}))),(0,i.h)("kol-tooltip-wc",{"aria-hidden":"true",hidden:e||!this.state._hideLabel,_align:this.state._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))}constructor(e){(0,i.r)(this,e),this.catchRef=e=>{this.ref=e,(0,f.a)(this.host,this.ref)},this.onClick=e=>{var t,a;"submit"===this.state._type?(0,m.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,m.a)({form:this.host,ref:this.ref}):((0,g.s)(e),(0,g.t)("click",this.host,this.state._value),this.controller.setFormAssociatedValue(this.state._value),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&((0,r.f)(e,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(e,this.state._value)))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._icons=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icons:{},_label:"…",_on:{},_type:"button",_variant:"normal"},this.controller=new y.A(this,"button",this.host)}validateAccessKey(e){(0,r.d)(this,"_accessKey",e)}validateAriaControls(e){(0,h.v)(this,e)}validateAriaCurrent(e){(0,h.a)(this,e)}validateAriaExpanded(e){((e,t)=>{(0,r.a)(e,"_ariaExpanded",t)})(this,e)}validateAriaLabel(e){this.validateLabel(e)}validateAriaSelected(e){(0,r.a)(this,"_ariaSelected",e)}validateCustomClass(e){(0,c.v)(this,e)}validateDisabled(e){((e,t)=>{(0,r.a)(e,"_disabled",t)})(this,e),!0===e&&(0,b.g)()}validateHideLabel(e){(0,v.v)(this,e)}validateIcon(e){(0,u.v)(this,e)}validateIcons(e){(0,u.v)(this,e)}validateIconAlign(e){(0,u.w)(this,e)}validateIconOnly(e){this.validateHideLabel(e)}validateId(e){(0,r.d)(this,"_id",e)}validateLabel(e){(0,n.a)(this,e,{required:!0})}validateName(e){this.controller.validateName(e)}validateOn(e){((e,t)=>{(0,r.w)(e,"_on",(e=>"object"==typeof e&&null!==e),new Set(["ButtonCallbacksPropType {Events.onClick, Events.onMouseDown}"]),t)})(this,e)}validateRole(e){(0,h.c)(this,e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){(0,p.v)(this,e)}validateTooltipAlign(e){(0,_.v)(this,e)}validateType(e){((e,t)=>{(0,r.w)(e,"_type",(e=>"button"===e||"reset"===e||"submit"===e),new Set(["KoliBriButtonType {button, reset, submit}"]),t)})(this,e)}validateValue(e){(0,r.s)(this,"_value",e),this.controller.setFormAssociatedValue(this.state._value)}validateVariant(e){(0,c.a)(this,e)}componentWillLoad(){var e;this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcons(this._icons||this._icon),this.validateIconAlign(this._iconAlign),this.validateId(this._id),this.validateLabel(null!==(e=this._label)&&void 0!==e?e:this._ariaLabel),this.validateName(this._name),this.validateOn(this._on),this.validateRole(this._role),this.validateSyncValueBySelector(this._syncValueBySelector),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_icons:["validateIcons"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_role:["validateRole"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},L=class{constructor(e){(0,i.r)(this,e),this.renderHeadline=(e,t)=>{switch(t){case 1:return(0,i.h)("h1",{class:"headline"},e,(0,i.h)("slot",null));case 2:return(0,i.h)("h2",{class:"headline"},e,(0,i.h)("slot",null));case 3:return(0,i.h)("h3",{class:"headline"},e,(0,i.h)("slot",null));case 4:return(0,i.h)("h4",{class:"headline"},e,(0,i.h)("slot",null));case 5:return(0,i.h)("h5",{class:"headline"},e,(0,i.h)("slot",null));case 6:return(0,i.h)("h6",{class:"headline"},e,(0,i.h)("slot",null));default:return(0,i.h)("strong",{class:"headline"},e,(0,i.h)("slot",null))}},this.renderSecondaryHeadline=(e,t)=>{switch(t){case 1:return(0,i.h)("span",{class:"secondary-headline"},e);case 2:return(0,i.h)("h2",{class:"secondary-headline"},e);case 3:return(0,i.h)("h3",{class:"secondary-headline"},e);case 4:return(0,i.h)("h4",{class:"secondary-headline"},e);case 5:return(0,i.h)("h5",{class:"secondary-headline"},e);case 6:return(0,i.h)("h6",{class:"secondary-headline"},e);default:return(0,i.h)("strong",{class:"secondary-headline"},e)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_label:"…",_level:1}}validateLabel(e){(0,n.a)(this,e,{defaultValue:"…"})}validateLevel(e){(0,d.w)(this,e)}validateSecondaryHeadline(e){(0,r.d)(this,"_secondaryHeadline",e)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return(0,i.h)(i.H,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,i.h)("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}}},94972:(e,t,a)=>{a.d(t,{a:()=>c,c:()=>r,h:()=>o,v:()=>h});var i=a(88089),s=a(67248);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,n=/^\d+$/;function o(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return n.test(e)}const d=new Set(["string"]),h=(e,t,a={})=>{(0,s.w)(e,"_label",(e=>"string"==typeof e),d,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,a,s,l)=>{var n,d;"function"==typeof(null===(n=e.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(t,a,s,l)),"string"==typeof t&&!1===o(t,3)&&!1===r(t)&&(0,i.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(a))},c=h},6236:(e,t,a)=>{a.d(t,{v:()=>n});var i=a(88089),s=a(67248);const l={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(e,t)=>{(0,s.e)(e,"_tabIndex",t,l)}},67932:(e,t,a)=>{a.d(t,{v:()=>s});var i=a(76465);const s=(e,t)=>{(0,i.v)(e,"_tooltipAlign",t)}},32839:(e,t,a)=>{a.d(t,{w:()=>s});var i=a(67248);const s=(e,t)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);