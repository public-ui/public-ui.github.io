/*! * KoliBri - The accessible HTML-Standard */ import{h,H as Host,r as registerInstance,g as getElement}from"./index-0bc40dc4.js";import{n as nonce}from"./dev.utils-babc1742.js";import{s as stopPropagation,t as tryToDispatchKoliBriEvent}from"./events-2bb1065b.js";import{a as propagateFocus,s as showExpertSlot}from"./reuse-b3566e4c.js";import{g as getRenderStates}from"./controller-85e5be61.js";import{a as InputRadioController}from"./controller-b8518ebb.js";import{I as InternalUnderlinedAccessKey}from"./InternalUnderlinedAccessKey-8b996006.js";import"./prop.validators-445950f8.js";import"./a11y.tipps-1e89ea61.js";import"./hide-label-c9289ea1.js";import"./label-cdb96413.js";import"./tab-index-d2087b2a.js";import"./associated.controller-89ab9c94.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, label, option, select, textarea) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\t--border-width: 2px;\n\t\t--input-size: 1.5em;\n\t}\n\n\tkol-input .icons {\n\t\tdisplay: none;\n\t}\n\n\tlabel {\n\t\tcursor: pointer;\n\t}\n\n\tinput {\n\t\tappearance: none;\n\t\tborder-width: var(--border-width);\n\t\tborder-style: solid;\n\t\tborder-radius: 100%;\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\theight: var(--input-size);\n\t\tmargin: 0;\n\t\tmin-height: var(--input-size);\n\t\tmin-width: var(--input-size);\n\t\tpadding: 0;\n\t\twidth: var(--input-size);\n\t}\n\n\tinput:before {\n\t\tborder-radius: 100%;\n\t\tcontent: '';\n\t\tmargin: auto;\n\t\theight: calc(var(--input-size) / 2);\n\t\twidth: calc(var(--input-size) / 2);\n\t}\n\n\tinput:checked:before {\n\t\tbackground-color: #000;\n\t}\n\n\tfieldset {\n\t\tdisplay: flex;\n\t}\n\n\tfieldset.vertical {\n\t\tflex-direction: column;\n\t}\n\n\tfieldset .input-slot {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t}\n\n\t/* required star is on fieldset legend */\n\t.required label > span::after {\n\t\tcontent: '';\n\t}\n\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n",KolInputRadio=class{render(){const{ariaDescribedBy:t,hasError:e}=getRenderStates(this.state),n=showExpertSlot(this.state._label);return h(Host,null,h("fieldset",{class:{disabled:!0===this.state._disabled,error:!0===e,required:!0===this.state._required,"hidden-error":!0===this._hideError,[this.state._orientation]:!0}},h("legend",{class:"block w-full mb-1 leading-normal"},h("span",null,h("span",{slot:"label"},n?h("slot",{name:"expert"}):"string"==typeof this._accessKey?h(InternalUnderlinedAccessKey,{accessKey:this._accessKey,label:this._label}):this._label))),this.state._options.map(((e,n)=>{const i=`${this.state._id}-${n}`,a=`radio-${n}`;return h("kol-input",{class:"radio",key:i,_accessKey:this.state._accessKey,_disabled:this.state._disabled||e.disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:i,_label:e.label,_renderNoLabel:!0,_required:this.state._required,_slotName:a,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},h("div",{slot:a,class:"radio-input-wrapper"},h("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof e.label?e.label:void 0,type:"radio",id:i,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${n}`},this.controller.onFacade,{onChange:this.onChange,onClick:void 0})),h("label",{class:"radio-label",htmlFor:`${i}`,style:{height:this.state._hideLabel?"0":void 0,margin:this.state._hideLabel?"0":void 0,padding:this.state._hideLabel?"0":void 0,visibility:this.state._hideLabel?"hidden":void 0}},h("span",null,h("span",null,e.label)))))})),e&&h("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg","aria-hidden":this._hideError,class:"error"+(this._hideError?" hidden":"")},this.state._error)))}constructor(t){registerInstance(this,t),this.catchRef=t=>{propagateFocus(this.host,t)},this.onChange=t=>{var e;if(t.target instanceof HTMLInputElement){const n=this.controller.getOptionByKey(t.target.value);void 0!==n&&(stopPropagation(t),tryToDispatchKoliBriEvent("change",this.host,n.value),this.controller.setFormAssociatedValue(n.value),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,n.value),this.controller.setValue(t,n.value))}},this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._options=void 0,this._orientation="vertical",this._required=!1,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hideError:!1,_id:`id-${nonce()}`,_label:"",_options:[],_orientation:"vertical"},this.controller=new InputRadioController(this,"input-radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHideError(t){this.controller.validateHideError(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOptions(t){this.controller.validateOptions(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hideError:["validateHideError"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_orientation:["validateOrientation"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolInputRadio.style={default:defaultStyleCss};export{KolInputRadio as kol_input_radio};