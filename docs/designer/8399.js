/*! For license information please see 8399.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8399],{80208:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(75056);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},71298:(t,e,i)=>{i.d(e,{i:()=>r,v:()=>h,w:()=>d});var a=i(64847),s=i(75056),l=i(79212);const n=(t,e,i)=>{(0,l.c)(i)?t[e]=i:(0,l.i)(i,1)&&(t[e]={icon:i})},o=t=>{var e,i,a,s,o,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),o=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,l.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,o))}else if(null===(o=t.nextState)||void 0===o?void 0:o.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,l.b)(t.style))&&(0,l.i)(t.icon,1),h=(t,e)=>{(0,s.o)(e,(()=>{try{e=(0,s.p)(e)}catch(t){}(0,s.a)(t,"_icon",(t=>null===t||(0,l.i)(t,1)||"object"==typeof t&&null!==t&&((0,l.i)(t.left,1)||r(t.left)||(0,l.i)(t.right,1)||r(t.right)||(0,l.i)(t.top,1)||r(t.top)||(0,l.i)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),o(t)}},required:!0})}))},d=(t,e)=>{(0,s.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{o(t)},afterPatch:t=>{(0,a.c)(`Das Property _icon-align bzw. _iconAlign ist veraltet (value: ${t}). Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/docs/changelog#1110---11112022)`)}}})}},48399:(t,e,i)=>{i.r(e),i.d(e,{kol_link_wc:()=>v});var a=i(99459),s=i(12398),l=i(80208),n=i(64847),o=i(83129),r=i(75056),h=i(79212),d=i(71298),c=i(30934),_=i(59267);const v=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,o.n)(),this.catchRef=t=>{this.ref=t,(0,h.a)(this.host,this.ref)},this.onClick=t=>{var e,i;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&(t.preventDefault(),(0,r.f)(t,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(t,this.state._href))},this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{(0,r.i)(this.state._selector)},onKeyPress:()=>{(0,r.i)(this.state._selector)}});const e="string"==typeof this.state._target&&"_self"!==this.state._target,i={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:e?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,n.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{isExternal:e,tagAttrs:i,goToProps:t}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,s.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_ariaLabel:"",_href:"javascript:void(0)",_icon:{},_iconAlign:"left",_label:""}}render(){const{isExternal:t,tagAttrs:e,goToProps:i}=this.getRenderValues();return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},e,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,r.h)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,r.h)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly,"external-link":t}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},i,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"})),t&&(0,a.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"fa-solid fa-arrow-up-right-from-square"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,a.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(t){(0,r.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,r.a)(this,"_ariaCurrent",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,r.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,c.v)(this,t)}validateAriaSelected(t){(0,r.b)(this,"_ariaSelected",t)}validateDisabled(t){(0,r.b)(this,"_disabled",t),!0===t&&(0,n.e)()}validateHref(t){(0,r.w)(this,"_href",t)}validateIcon(t){(0,d.v)(this,t)}validateIconAlign(t){(0,d.w)(this,t)}validateIconOnly(t){(0,r.b)(this,"_iconOnly",t)}validateLabel(t){(0,c.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&Object.prototype.hasOwnProperty.call(t,"onClick")&&"function"==typeof t.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,r.w)(this,"_role",t)}validateSelector(t){(0,r.w)(this,"_selector",t)}validateStealth(t){(0,r.b)(this,"_stealth",t)}validateTabIndex(t){(0,_.v)(this,t)}validateTarget(t){(0,r.w)(this,"_target",t)}validateTargetDescription(t){(0,r.w)(this,"_targetDescription",t)}validateTooltipAlign(t){(0,l.w)(this,"_tooltipAlign",t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},30934:(t,e,i)=>{i.d(e,{a:()=>_,c:()=>h,h:()=>r,v:()=>c});var a=i(64847),s=i(75056),l=i(79212);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/,r=(t,e=1)=>(t=>{var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0})(t)>=e,h=t=>o.test(t),d=(t,e,i,s)=>{const n=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof n){const t=e.has("_label")?e.get("_label"):i.state._label;!1===(0,l.d)(t,n)&&("_ariaLabel"===s?e.set("_label",n):e.set("_ariaLabel",t),(0,a.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},c=(t,e)=>{(0,s.w)(t,"_ariaLabel",e,{hooks:{afterPatch:t=>{"string"==typeof t&&t.length>0&&!1===r(t,3)&&!1===h(t)&&(0,a.a)(`Ein abweichendes Aria-Label (${t}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:d}})},_=(t,e)=>{(0,s.w)(t,"_label",e,{hooks:{afterPatch:t=>{"string"==typeof t&&!1===r(t,3)&&!1===h(t)&&(0,a.a)(`Ein Label (${t}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:d},required:!0})}},59267:(t,e,i)=>{i.d(e,{v:()=>n});var a=i(64847),s=i(75056);const l={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(t,e)=>{(0,s.e)(t,"_tabIndex",e,l)}}}]);