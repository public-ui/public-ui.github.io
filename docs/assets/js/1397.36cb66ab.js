/*! For license information please see 1397.36cb66ab.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1397],{1397:(t,e,i)=>{i.r(e),i.d(e,{kol_input_radio:()=>d});var a=i(6310),l=i(4877),s=i(580),r=i(2631);const d=class{render(){const{ariaDiscribedBy:t,hasError:e}=(0,s.g)(this.state);return(0,a.h)(a.H,null,(0,a.h)("fieldset",{class:{error:!0===e,disabled:!0===this.state._disabled,required:!0===this.state._required,[this.state._orientation]:!0}},(0,a.h)("legend",{class:"block w-full mb-1 leading-normal"},(0,a.h)("span",null,(0,a.h)("slot",null))),this.state._list.map(((e,i)=>{const l=`${this.state._id}-${i}`;return(0,a.h)("kol-input",{key:l,_disabled:this.state._disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:l,_renderNoLabel:!0,_required:this.state._required,_touched:this.state._touched},(0,a.h)("div",{slot:"input"},(0,a.h)("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${l}-label`,part:"input",title:"",type:"radio",id:l,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${i}`},this.controller.onFacade,{onChange:this.onChange})),(0,a.h)("label",{htmlFor:`${l}`,id:`${l}-label`,style:{height:this.state._hideLabel&&!0!==this.state._required?"0":void 0,margin:this.state._hideLabel&&!0!==this.state._required?"0":void 0,padding:this.state._hideLabel&&!0!==this.state._required?"0":void 0,visibility:this.state._hideLabel&&!0!==this.state._required?"hidden":void 0}},(0,a.h)("span",null,(0,a.h)("span",null,e.label)))))})),e&&(0,a.h)("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg"},this.state._error)))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,l.p)(this.host,this.ref)},this.onChange=t=>{if(t.target instanceof HTMLInputElement){const e=this.controller.getOptionByKey(t.target.value);void 0!==e&&this.controller.setValue(t,e.value)}},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:"\u26a0",_list:[],_orientation:"vertical"},this.controller=new r.a(this,"radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_orientation:["validateOrientation"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}}}]);