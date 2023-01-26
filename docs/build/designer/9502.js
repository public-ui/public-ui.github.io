/*! For license information please see 9502.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9502],{91257:(t,e,i)=>{i.d(e,{I:()=>u,g:()=>d});var o=i(26737),n=i(73681),a=i(67706),s=i(7e3),l=i(33810);const d=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDiscribedBy:o}},h=(0,l.b)();class c{constructor(t,e,i){var o,n,a,s,l;if(this.syncFormAssociatedName=()=>{var t;h&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;h&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,h){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(n=this.host)||void 0===n?void 0:n.children[e].tagName)&&(null===(a=this.host)||void 0===a||a.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(t){(0,n.b)(this.component,"_alert",t)}validateTouched(t){(0,n.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const r=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,a.a)(i.right,1)&&(i.right={icon:i.right}),(0,a.a)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class u extends c{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,n.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,n.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,n.b)(this.component,"_disabled",t),!0===t&&(0,o.c)()}validateError(t){(0,n.w)(this.component,"_error",t)}validateHideLabel(t){(0,n.b)(this.component,"_hideLabel",t)}validateHint(t){(0,n.w)(this.component,"_hint",t)}validateIcon(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.a)(t.left,1)||(0,s.i)(t.left)||(0,a.a)(t.right,1)||(0,s.i)(t.right))),new Set(["KoliBriInputIcon"]),t,{hooks:{beforePatch:r},required:!0})}))}validateId(t){(0,n.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,n.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,n.s)(this.component,"_on",t)}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,s.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}}},89502:(t,e,i)=>{i.r(e),i.d(e,{kol_input_file:()=>d});var o=i(46266),n=i(49750),a=i(91257),s=i(73681);class l extends a.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAccept(t){(0,s.w)(this.component,"_accept",t)}validateMultiple(t){(0,s.b)(this.component,"_multiple",t)}validateRequired(t){(0,s.b)(this.component,"_required",t)}validateValue(t){(0,s.w)(this.component,"_value",t),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateAccept(this.component._accept),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}const d=class{render(){const{ariaDiscribedBy:t}=(0,a.g)(this.state);return(0,o.h)(o.H,null,(0,o.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,o.h)("span",{slot:"label"},(0,o.h)("slot",null)),(0,o.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accept:this.state._accept,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,slot:"input",spellcheck:"false",type:"file",value:this.state._value},this.controller.onFacade,{onChange:this.onChange}))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.p)(this.host,this.ref)},this.onChange=t=>{var e;this.ref instanceof HTMLInputElement&&"file"===this.ref.type&&"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,this.ref.files)},this._accept=void 0,this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:"⚠"},this.controller=new l(this,"file",this.host)}validateAccept(t){this.controller.validateAccept(t)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accept:["validateAccept"],_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},49750:(t,e,i)=>{i.d(e,{p:()=>n});var o=i(67706);const n=(t,e)=>{(0,o.i)(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))}},7e3:(t,e,i)=>{i.d(e,{a:()=>h,i:()=>d,v:()=>u,w:()=>c});var o=i(26737),n=i(73681),a=i(67706);const s=(t,e,i)=>{(0,a.i)(i)?t[e]=i:(0,a.a)(i,1)&&(t[e]={icon:i})},l=t=>{var e,i,o,n,l,d,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,e)=>{let i={};return(0,a.a)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(s(i,"top",t.top),s(i,"right",t.right),s(i,"bottom",t.bottom),s(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(d=t.nextState)||void 0===d||d.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},d=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,a.b)(t.style))&&(0,a.a)(t.icon,1),h=(t,e)=>{(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(t){}(0,n.a)(t,"_icon",(t=>null===t||(0,a.a)(t,1)||"object"==typeof t&&null!==t&&((0,a.a)(t.left,1)||d(t.left)||(0,a.a)(t.right,1)||d(t.right)||(0,a.a)(t.top,1)||d(t.top)||(0,a.a)(t.bottom,1)||d(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),l(t)}},required:!0})}))},c=(t,e)=>{(0,o.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,n.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})},r={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.e)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},u=(t,e)=>{(0,n.d)(t,"_tabIndex",e,r)}},67706:(t,e,i)=>{i.d(e,{S:()=>l,a:()=>n,b:()=>a,c:()=>s,i:()=>o});const o=t=>"object"==typeof t&&null!==t,n=(t,e=0)=>"string"==typeof t&&t.length>=e,a=t=>{if("object"!=typeof t||null===t)return n(t,1);for(const e in t)if(!1===n(e,1))return!1;return!0},s=(t,e)=>0===e.length||((t,e)=>0===e.length&&new RegExp(`^${t}`).test(e))(t,e),l=new Event("StateChange")}}]);