/*! * KoliBri - The accessible HTML-Standard */ import{h,H as Host,r as registerInstance,g as getElement}from"./index-0bc40dc4.js";import{v as validateAlternativeButtonLinkRole}from"./alternative-button-link-role-1c319b0c.js";import{d as watchString,a as watchBoolean,w as watchValidator,i as mapBoolean2String,j as mapStringOrBoolean2String,f as setEventTarget,s as setState}from"./prop.validators-445950f8.js";import{v as validateCustomClass}from"./custom-class-768ff923.js";import{v as validateHideLabel}from"./hide-label-c9289ea1.js";import{v as validateIcons}from"./icons-97af6e5f.js";import{a as validateLabelWithExpertSlot,v as validateLabel}from"./label-cdb96413.js";import{v as validateTooltipAlign}from"./tooltip-align-04e6e467.js";import{e as a11yHintDisabled}from"./a11y.tipps-1e89ea61.js";import{s as stopPropagation,t as tryToDispatchKoliBriEvent}from"./events-2bb1065b.js";import{a as propagateFocus,s as showExpertSlot}from"./reuse-b3566e4c.js";import{v as validateTabIndex}from"./tab-index-d2087b2a.js";import{p as propagateSubmitEventToForm,a as propagateResetEventToForm}from"./controller-88531ae3.js";import{A as AssociatedInputController}from"./associated.controller-89ab9c94.js";import{v as validateAccessKey}from"./access-key-3f233e98.js";import{b as autoUpdate,a as alignFloatingElements}from"./align-floating-elements-ebf0712d.js";import{a as validateAlign}from"./alignment-32a9ec52.js";import{b as getDocument,n as nonce}from"./dev.utils-babc1742.js";const validateAriaControls=(t,e)=>{watchString(t,"_ariaControls",e)},validateAriaExpanded=(t,e)=>{watchBoolean(t,"_ariaExpanded",e)},validateButtonCallbacks=(t,e)=>{watchValidator(t,"_on",(t=>"object"==typeof t&&null!==t),new Set(["ButtonCallbacksPropType {Events.onClick, Events.onMouseDown}"]),e)},buttonTypePropTypeOptions=["button","reset","submit"],validateButtonType=(t,e)=>{watchValidator(t,"_type",(t=>"string"==typeof t&&buttonTypePropTypeOptions.includes(t)),new Set([`KoliBriButtonType {${buttonTypePropTypeOptions.join(", ")}`]),e)},buttonVariantPropTypeOptions=["primary","secondary","normal","tertiary","danger","ghost","custom"],validateButtonVariant=(t,e)=>{watchValidator(t,"_variant",(t=>"string"==typeof t&&buttonVariantPropTypeOptions.includes(t)),new Set([`KoliBriButtonVariant {${buttonVariantPropTypeOptions.join(", ")}`]),e,{defaultValue:"normal"})},validateDisabled=(t,e)=>{watchBoolean(t,"_disabled",e)},validateAriaSelected=(t,e)=>{watchBoolean(t,"_ariaSelected",e)},KolButtonWc=class{render(){const t=showExpertSlot(this.state._label);return h(Host,null,h("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey||void 0,"aria-controls":this.state._ariaControls,"aria-expanded":mapBoolean2String(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-selected":mapStringOrBoolean2String(this.state._ariaSelected),class:{button:!0,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id,name:this.state._name},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),h("kol-span-wc",{class:"button-inner",_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:t?"":this.state._label},h("slot",{name:"expert",slot:"expert"}))),h("kol-tooltip-wc",{"aria-hidden":"true",hidden:t||!this.state._hideLabel,_accessKey:this._accessKey,_align:this.state._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))}constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onClick=t=>{var e,i;"submit"===this.state._type?propagateSubmitEventToForm({form:this.host,ref:this.ref}):"reset"===this.state._type?propagateResetEventToForm({form:this.host,ref:this.ref}):(stopPropagation(t),tryToDispatchKoliBriEvent("click",this.host,this.state._value),this.controller.setFormAssociatedValue(this.state._value),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&(setEventTarget(t,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(t,this.state._value)))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icons:{},_label:"",_on:{},_type:"button",_variant:"normal"},this.controller=new AssociatedInputController(this,"button",this.host)}validateAccessKey(t){validateAccessKey(this,t)}validateAriaControls(t){validateAriaControls(this,t)}validateAriaExpanded(t){validateAriaExpanded(this,t)}validateAriaSelected(t){validateAriaSelected(this,t)}validateCustomClass(t){validateCustomClass(this,t)}validateDisabled(t){validateDisabled(this,t),!0===t&&a11yHintDisabled()}validateHideLabel(t){validateHideLabel(this,t)}validateIcons(t){validateIcons(this,t)}validateId(t){watchString(this,"_id",t)}validateLabel(t){validateLabelWithExpertSlot(this,t)}validateName(t){this.controller.validateName(t)}validateOn(t){validateButtonCallbacks(this,t)}validateRole(t){validateAlternativeButtonLinkRole(this,t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){validateTabIndex(this,t)}validateTooltipAlign(t){validateTooltipAlign(this,t)}validateType(t){validateButtonType(this,t)}validateValue(t){setState(this,"_value",t),this.controller.setFormAssociatedValue(this.state._value)}validateVariant(t){validateButtonVariant(this,t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel),this.validateIcons(this._icons),this.validateId(this._id),this.validateLabel(this._label),this.validateName(this._name),this.validateOn(this._on),this.validateRole(this._role),this.validateSyncValueBySelector(this._syncValueBySelector),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaExpanded:["validateAriaExpanded"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_role:["validateRole"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},validateId=(t,e)=>{watchString(t,"_id",e)},VISIBLE_OVERLAYS=new Set;function showOverlay(t){VISIBLE_OVERLAYS.forEach((t=>{t.style.setProperty("z-index","999")})),VISIBLE_OVERLAYS.add(t),t.style.setProperty("z-index","1000")}function hideOverlay(t){if(VISIBLE_OVERLAYS.delete(t),VISIBLE_OVERLAYS.size>0){const t=Array.from(VISIBLE_OVERLAYS).pop();t&&t.style.setProperty("z-index","1000")}}const styleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tkol-tooltip-wc .tooltip-floating {\n\t\tanimation-duration: 0.5s;\n\t\tanimation-iteration-count: 1;\n\t\tanimation-name: fadeInOpacity;\n\t\tanimation-timing-function: ease-in;\n\t\tbox-sizing: border-box;\n\t\tdisplay: none;\n\t\tposition: absolute;\n\t\tvisibility: hidden;\n\t\t/* Avoid layout interference - see https://floating-ui.com/docs/computePosition */\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tmax-width: 90vw;\n\t\tmax-height: 90vh;\n\t}\n\n\t/* Shared between content and arrow */\n\tkol-tooltip-wc .tooltip-area {\n\t\tbackground-color: #fff;\n\t\tcolor: #000;\n\t}\n\n\tkol-tooltip-wc .tooltip-arrow {\n\t\theight: 10px;\n\t\tposition: absolute;\n\t\ttransform: rotate(45deg);\n\t\twidth: 10px;\n\t\tz-index: 999;\n\t}\n\n\tkol-tooltip-wc .tooltip-content {\n\t\tposition: relative;\n\t\tz-index: 1000;\n\t}\n\n\t@keyframes fadeInOpacity {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n",KolTooltip=class{constructor(t){registerInstance(this,t),this.showTooltip=()=>{if(this.previousSibling&&this.tooltipElement){showOverlay(this.tooltipElement),this.tooltipElement.style.setProperty("display","block"),getDocument().body.addEventListener("keyup",this.hideTooltipByEscape);const t=this.previousSibling,e=this.tooltipElement;this.cleanupAutoPositioning=autoUpdate(t,e,(()=>{this.alignTooltip()}))}},this.hideTooltip=()=>{this.tooltipElement&&(hideOverlay(this.tooltipElement),this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),this.cleanupAutoPositioning&&(this.cleanupAutoPositioning(),this.cleanupAutoPositioning=void 0))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&(getDocument().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("focusin",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount),t.addEventListener("focusout",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("focusin",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount),t.addEventListener("focusout",this.decrementOverFocusCount)},this.resyncListeners=(t,e,i=!1)=>{t&&this.removeListeners(t),e&&(i&&(this.previousSibling=e),this.addListeners(e))},this.catchTooltipElement=t=>{this.tooltipElement=t},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._accessKey=void 0,this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:nonce(),_label:"…"}}async alignTooltip(){this.tooltipElement&&this.previousSibling&&await alignFloatingElements({align:this._align,referenceElement:this.previousSibling,arrowElement:this.arrowElement,floatingElement:this.tooltipElement})}render(){return h(Host,null,""!==this.state._label&&h("div",{class:"tooltip-floating",ref:this.catchTooltipElement},h("div",{class:"tooltip-area tooltip-arrow",ref:this.catchArrowElement}),h("kol-span-wc",{class:"tooltip-area tooltip-content",id:this.state._id,_accessKey:this._accessKey,_label:this.state._label})))}validateAccessKey(t){validateAccessKey(this,t)}validateAlign(t){validateAlign(this,t)}validateId(t){validateId(this,t)}validateLabel(t){validateLabel(this,t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}handleEventListeners(){var t;this.resyncListeners(this.previousSibling,null===(t=this.host)||void 0===t?void 0:t.previousElementSibling,!0),this.resyncListeners(this.tooltipElement,this.tooltipElement)}connectedCallback(){var t;this.previousSibling=null===(t=this.host)||void 0===t?void 0:t.previousElementSibling,this.handleEventListeners()}componentDidRender(){this.handleEventListeners()}disconnectedCallback(){this.previousSibling&&(this.removeListeners(this.previousSibling),this.previousSibling=void 0),this.tooltipElement&&this.removeListeners(this.tooltipElement),this.cleanupAutoPositioning&&this.cleanupAutoPositioning()}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};KolTooltip.style=styleCss;export{KolButtonWc as kol_button_wc,KolTooltip as kol_tooltip_wc};