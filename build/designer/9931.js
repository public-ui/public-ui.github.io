/*! For license information please see 9931.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9931],{69931:(t,e,i)=>{i.r(e),i.d(e,{kol_form:()=>l});var s=i(46266),n=i(73681),o=i(54439);const l=class{constructor(t){(0,s.r)(this,t),this.onSubmit=t=>{var e,i;t.preventDefault(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=this.state._on)||void 0===i||i.onSubmit(t))},this.onReset=t=>{var e,i;t.preventDefault(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onReset)&&(null===(i=this.state._on)||void 0===i||i.onReset(t))},this._on=void 0,this._requiredText=!0,this.state={}}render(){return(0,s.h)("form",{method:"post",onSubmit:this.onSubmit,onReset:this.onReset,autoComplete:"off",noValidate:!0},!0===this.state._requiredText?(0,s.h)("p",null,(0,s.h)("kol-indented-text",null,(0,o.a)("kol-form-description"))):"string"==typeof this.state._requiredText&&this.state._requiredText.length>0?(0,s.h)("p",null,(0,s.h)("kol-indented-text",null,this.state._requiredText)):null,(0,s.h)("slot",null))}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRequiredText(t){"boolean"==typeof t?(0,n.b)(this,"_requiredText",t):(0,n.w)(this,"_requiredText",t)}componentWillLoad(){this.validateOn(this._on),this.validateRequiredText(this._requiredText)}static get watchers(){return{_on:["validateOn"],_requiredText:["validateRequiredText"]}}}}}]);