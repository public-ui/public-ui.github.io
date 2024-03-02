/*! * KoliBri - The accessible HTML-Standard */ import{w as watchValidator,ac as validateHasCounter,a7 as watchNumber,C as watchString,B as watchBoolean}from"./index-de9d4ee0.js";import{I as InputIconController}from"./controller-icon-03261e4e.js";class InputPasswordController extends InputIconController{constructor(t,e,o){super(t,e,o),this.component=t}validateAutoComplete(t){watchValidator(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHasCounter(t){validateHasCounter(this.component,t)}validateMaxLength(t){watchNumber(this.component,"_maxLength",t,{min:0})}validatePattern(t){watchString(this.component,"_pattern",t)}validatePlaceholder(t){watchString(this.component,"_placeholder",t)}validateReadOnly(t){watchBoolean(this.component,"_readOnly",t)}validateRequired(t){watchBoolean(this.component,"_required",t)}validateValue(t){watchString(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}export{InputPasswordController as I};