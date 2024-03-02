/*! * KoliBri - The accessible HTML-Standard */ import{B as watchBoolean,N as validateTouched,C as watchString,O as validateAdjustHeight,P as a11yHintDisabled,Q as validateHideError,R as validateHideLabel,T as a11yHint,h as devHint,U as validateLabelWithExpertSlot,m as setState,t as objectObjectHandler,u as parseJson,V as validateTabIndex}from"./index-de9d4ee0.js";import{s as stopPropagation,t as tryToDispatchKoliBriEvent}from"./events-29e84d75.js";import{A as AssociatedInputController}from"./associated.controller-3f6bde32.js";const getRenderStates=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDescribedBy:n}};class ControlledInputController extends AssociatedInputController{constructor(t,e,o){super(t,e,o),this.component=t}validateAlert(t){watchBoolean(this.component,"_alert",t)}validateTouched(t){validateTouched(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class InputController extends ControlledInputController{constructor(t,e,o){super(t,e,o),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){watchString(this.component,"_accessKey",t)}validateAdjustHeight(t){validateAdjustHeight(this.component,t)}validateDisabled(t){watchBoolean(this.component,"_disabled",t),!0===t&&a11yHintDisabled()}validateError(t){watchString(this.component,"_error",t)}validateHideError(t){validateHideError(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&a11yHint("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){validateHideLabel(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&a11yHint("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){watchString(this.component,"_hint",t)}validateId(t){watchString(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||devHint("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){validateLabelWithExpertSlot(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&setState(this.component,"_on",t)}validateSmartButton(t){objectObjectHandler(t,(()=>{try{t=parseJson(t)}catch(t){}setState(this.component,"_smartButton",t)}))}validateTabIndex(t){validateTabIndex(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,stopPropagation(t),tryToDispatchKoliBriEvent("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const o=t.target.value;tryToDispatchKoliBriEvent("change",this.host,o),this.setFormAssociatedValue(o),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,o),this.valueChangeListeners.forEach((t=>t(o)))}onClick(t){var e;stopPropagation(t),tryToDispatchKoliBriEvent("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,stopPropagation(t),tryToDispatchKoliBriEvent("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}export{InputController as I,getRenderStates as g};