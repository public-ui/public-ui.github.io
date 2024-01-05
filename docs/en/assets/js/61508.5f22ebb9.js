/*! For license information please see 61508.5f22ebb9.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[61508],{61508:(e,a,t)=>{t.r(a),t.d(a,{kol_alert_wc:()=>b,kol_heading_wc:()=>y});var l=t(73536),i=t(55213),s=t(11736),n=t(61568),o=t(61789),r=t(45366),h=t(88544);const d=["default","info","success","warning","error"],c=["card","msg"],v=e=>(0,l.h)("kol-icon",{class:"heading-icon",_label:"string"==typeof e.label&&e.label.length>0?"":e.ariaLabel,_icons:e.icon}),_=e=>{switch(e.type){case"error":return(0,l.h)(v,{ariaLabel:(0,i.a)("kol-error"),icon:"codicon codicon-error",label:e.label});case"info":return(0,l.h)(v,{ariaLabel:(0,i.a)("kol-info"),icon:"codicon codicon-info",label:e.label});case"warning":return(0,l.h)(v,{ariaLabel:(0,i.a)("kol-warning"),icon:"codicon codicon-warning",label:e.label});case"success":return(0,l.h)(v,{ariaLabel:(0,i.a)("kol-success"),icon:"codicon codicon-pass",label:e.label});default:return(0,l.h)(v,{ariaLabel:(0,i.a)("kol-message"),icon:"codicon codicon-comment",label:e.label})}},b=class{constructor(e){(0,l.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._label=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{o.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){o.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,l.h)(l.H,{class:{alert:!0,[this.state._type]:!0,[this.state._variant]:!0,hasCloser:!!this.state._hasCloser},role:this.state._alert?"alert":void 0},(0,l.h)("div",{class:"heading"},(0,l.h)(_,{label:this.state._label,type:this.state._type}),(0,l.h)("div",{class:"heading-content"},"string"==typeof this.state._label&&(null===(e=this.state._label)||void 0===e?void 0:e.length)>0&&(0,l.h)("kol-heading-wc",{_label:this.state._label,_level:this.state._level}),"msg"===this._variant&&(0,l.h)("div",{class:"content"},(0,l.h)("slot",null))),this.state._hasCloser&&(0,l.h)("kol-button-wc",{class:"close",_hideLabel:!0,_icons:{left:{icon:"codicon codicon-close"}},_label:(0,i.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&(0,l.h)("div",{class:"content"},(0,l.h)("slot",null)))}validateAlert(e){(0,r.a)(this,"_alert",e)}validateHasCloser(e){(0,s.v)(this,e)}validateLabel(e){(0,n.v)(this,e)}validateLevel(e){(0,h.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,r.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,r.w)(this,"_type",(e=>"string"==typeof e&&d.includes(e)),new Set(`String {${d.join(", ")}`),e)}validateVariant(e){(0,r.w)(this,"_variant",(e=>"string"==typeof e&&c.includes(e)),new Set(`AlertVariant {${c.join(", ")}`),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}},u=["h1","h2","h3","h4","h5","h6","strong"],y=class{constructor(e){(0,l.r)(this,e),this.renderHeadline=(e,a)=>{const t="number"==typeof a&&a>0&&a<=6?`h${a}`:"strong",i=this._variant||t;return(0,l.h)(t,{class:{headline:!0,[`headline-${i}`]:!0}},e,(0,l.h)("slot",{name:"expert"}))},this.renderSecondaryHeadline=(e,a)=>{switch(a){case 1:return(0,l.h)("span",{class:"secondary-headline"},e);case 2:return(0,l.h)("h2",{class:"secondary-headline"},e);case 3:return(0,l.h)("h3",{class:"secondary-headline"},e);case 4:return(0,l.h)("h4",{class:"secondary-headline"},e);case 5:return(0,l.h)("h5",{class:"secondary-headline"},e);case 6:return(0,l.h)("h6",{class:"secondary-headline"},e);default:return(0,l.h)("strong",{class:"secondary-headline"},e)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this._variant=void 0,this.state={_label:"",_level:1}}validateLabel(e){(0,n.a)(this,e)}validateLevel(e){(0,h.w)(this,e)}validateSecondaryHeadline(e){(0,r.d)(this,"_secondaryHeadline",e)}validateVariant(e){((e,a)=>{(0,r.w)(e,"_variant",(e=>"string"==typeof e&&u.includes(e)),new Set([`KoliBriHeadingVariant {${u.join(", ")}`]),a)})(this,e)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline),this.validateVariant(this._variant)}render(){return(0,l.h)(l.H,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,l.h)("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"],_variant:["validateVariant"]}}}}}]);