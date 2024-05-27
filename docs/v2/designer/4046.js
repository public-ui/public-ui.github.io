/*! For license information please see 4046.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[4046],{70141:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(788);const s=(t,e)=>{(0,i.i)(t,"_accessKey",e)}},432:(t,e,a)=>{a.d(e,{a:()=>o,v:()=>s});var i=a(788);const s=(t,e,a)=>{(0,i.w)(t,e,(t=>"string"==typeof t&&l.includes(t)),new Set(l),a,{defaultValue:"top"})},l=["left","right","top","bottom"],o=(t,e)=>{s(t,"_align",e)}},68191:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(788);const s=(t,e)=>{(0,i.i)(t,"_role",e)}},91660:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(788);const s=(t,e)=>{(0,i.b)(t,"_disabled",e,{hooks:{afterPatch:t=>{!0===t&&(0,i.c)()}}})}},23602:(t,e,a)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function s(t,e,a){e&&function(t,e,a){const i=t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,a))}(e,t,a)}function l(t){t.preventDefault(),i(t)}a.d(e,{p:()=>l,s:()=>i,t:()=>s})},45271:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(788);const s=(t,e,a={})=>{(0,i.b)(t,"_hideLabel",e,a)}},71315:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(788);const s=(t,e,a={})=>{(0,i.i)(t,"_href",e,a)}},68157:(t,e,a)=>{a.d(e,{t:()=>l});var i=a(96308),s=a(61375);let l=(t,e)=>{var a;return(null!==(a=(0,i.g)())&&void 0!==a?a:(0,i.i)("de")).translate(t,e)};"test"===s.p&&(l=t=>t)},44184:(t,e,a)=>{a.d(e,{i:()=>o,v:()=>n});var i=a(788),s=a(61375);const l=(t,e,a)=>{(0,s.c)(a)?t[e]=a:(0,s.i)(a,1)&&(t[e]={icon:a})},o=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,s.b)(t.style))&&(void 0===t.label||(0,s.i)(t.label))&&(0,s.i)(t.icon,1),n=(t,e,a={})=>{(0,i.o)(e,(()=>{var n;try{e=(0,i.p)(e)}catch(t){}(0,i.w)(t,"_icons",(t=>{const e="object"==typeof t&&null!==t&&0===Object.keys(t).length;return null===t||e||(0,s.i)(t,1)||"object"==typeof t&&null!==t&&((0,s.i)(t.left,1)||o(t.left)||(0,s.i)(t.right,1)||o(t.right)||(0,s.i)(t.top,1)||o(t.top)||(0,s.i)(t.bottom,1)||o(t.bottom))}),new Set(["KoliBriIcon"]),e,Object.assign(Object.assign({},a),{defaultValue:{},hooks:{afterPatch:null===(n=a.hooks)||void 0===n?void 0:n.afterPatch,beforePatch:(t,e,i,o)=>{var n,d;"function"==typeof(null===(n=a.hooks)||void 0===n?void 0:n.beforePatch)&&(null===(d=a.hooks)||void 0===d||d.beforePatch(t,e,i,o)),(t=>{var e,a,i;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(a=t.nextState)||void 0===a?void 0:a.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",(t=>{let e={};return(0,s.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(l(e,"top",t.top),l(e,"right",t.right),l(e,"bottom",t.bottom),l(e,"left",t.left)),e})(e))}})(i)}}}))}))}},54046:(t,e,a)=>{a.r(e),a.d(e,{kol_link_wc:()=>k});var i=a(15632),s=a(68157);const l=[];var o=a(23602),n=a(27756),d=a(788),r=a(71315),h=a(61375),c=a(70141),b=a(91660),v=a(45271),_=a(44184),f=a(72707),u=a(68191),g=a(84750),p=a(63688);const y=["date","location","page","step","time","true","false"],k=class{constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,h.a)(this.host,this.ref)},this.onClick=t=>{var e,a;!0===this.state._disabled?(0,o.p)(t):"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&(t.preventDefault(),t.stopPropagation(),(0,d.q)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t,this.state._href))},this.getRenderValues=()=>{const t="string"==typeof this.state._target&&"_self"!==this.state._target,e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,d.j)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn _hide-label gesetzt ist."),{isExternal:t,tagAttrs:e}},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._disabled=!1,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._tooltipAlign="right",this.state={_ariaCurrentValue:"page",_href:"",_icons:{}}}render(){const{isExternal:t,tagAttrs:e}=this.getRenderValues(),a=(0,h.s)(this.state._label);return(0,i.h)(i.H,{key:"82f9f5d0f689c25163bd6136ca5c34dcb1fd692b",class:"kol-link-wc"},(0,i.h)("a",Object.assign({key:"b7db13f7744362450d778d707e5540558d997ecb",ref:this.catchRef},e,{accessKey:this.state._accessKey,"aria-current":this.state._ariaCurrent,"aria-disabled":this.state._disabled?"true":void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?`${this.state._label}${t?` (${(0,s.t)("kol-open-link-in-tab")})`:""}`:void 0,class:{disabled:!0===this.state._disabled,"external-link":t,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._disabled?-1:this.state._tabIndex}),(0,i.h)(n.f,{key:"74e96d85bcef160e5cb9c0d5676981b32e5abaaf",_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:a?"":this.state._label||this.state._href},(0,i.h)("slot",{key:"e6f537ca1733bf45673369cb51f9cd0a5ed8d349",name:"expert",slot:"expert"})),t&&(0,i.h)(n.g,{key:"b41fee1ddbffadab9c2371ff336fadb3ce7abe74",class:"external-link-icon",_label:this.state._hideLabel?"":(0,s.t)("kol-open-link-in-tab"),_icons:"codicon codicon-link-external","aria-hidden":this.state._hideLabel})),(0,i.h)(n.a,{key:"c6e48539bc159d804fd5cff1983a1a652f16a312","aria-hidden":"true",hidden:a||!this.state._hideLabel,_accessKey:this.state._accessKey,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAccessKey(t){(0,c.v)(this,t)}validateAriaCurrentValue(t){((t,e)=>{(0,d.w)(t,"_ariaCurrentValue",(t=>"string"==typeof t&&y.includes(t)),new Set([`AriaCurrentValue {${y.join(", ")}`]),e,{defaultValue:"page"})})(this,t)}validateDisabled(t){(0,b.v)(this,t)}validateDownload(t){((t,e)=>{(0,d.i)(t,"_download",e)})(this,t)}validateHideLabel(t){(0,v.v)(this,t)}validateHref(t){(0,r.v)(this,t,{required:!0})}validateIcons(t){(0,_.v)(this,t)}validateLabel(t){(0,f.a)(this,t)}validateOn(t){((t,e)=>{"object"==typeof e&&"function"==typeof(null==e?void 0:e.onClick)&&(t.state=Object.assign(Object.assign({},t.state),{_on:e}))})(this,t)}validateRole(t){(0,u.v)(this,t)}validateTabIndex(t){(0,g.v)(this,t)}validateTarget(t){((t,e)=>{(0,d.i)(t,"_target",e)})(this,t)}validateTooltipAlign(t){(0,p.v)(this,t)}componentWillLoad(){var t;this.validateAccessKey(this._accessKey),this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTooltipAlign(this._tooltipAlign),this.unsubscribeOnLocationChange=(t=t=>{this.state._ariaCurrent=t===this.state._href?this.state._ariaCurrentValue:void 0},l.push(t),()=>{const e=l.indexOf(t);e>=0&&l.splice(e,1)})}disconnectedCallback(){this.unsubscribeOnLocationChange&&this.unsubscribeOnLocationChange()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaCurrentValue:["validateAriaCurrentValue"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_tooltipAlign:["validateTooltipAlign"]}}}},72707:(t,e,a)=>{a.d(e,{a:()=>c,b:()=>n,c:()=>d,h:()=>s,v:()=>h});var i=a(788);const s=[0,1,2,3,4,5,6],l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function n(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function d(t){return o.test(t)}const r=new Set(["string"]),h=(t,e,a={})=>{(0,i.w)(t,"_label",(t=>"string"==typeof t),r,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,a,s,l)=>{var o,r;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(r=t.hooks)||void 0===r||r.afterPatch(e,a,s,l)),"string"==typeof e&&!1===n(e,3)&&!1===d(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(a))},c=h},84750:(t,e,a)=>{a.d(e,{v:()=>l});var i=a(788);const s={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don't Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},l=(t,e)=>{(0,i.k)(t,"_tabIndex",e,s)}},63688:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(432);const s=(t,e)=>{(0,i.v)(t,"_tooltipAlign",e)}}}]);