/*! For license information please see 4357.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[4357],{4357:(e,t,a)=>{a.r(t),a.d(t,{kol_progress:()=>c});var r,i,l=a(4566),s=a(88),o=a(3409);(i=r||(r={})).bar="bar",i.cycle="cycle",i["cycle-value-label"]="cycle-value-label",i["cycle-label-value"]="cycle-label-value";const n=Object.keys(r),c=class{constructor(e){(0,l.r)(this,e),this._label=void 0,this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this._variant=void 0,this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return(0,l.h)(l.H,{key:"47defb5309eea70ff5fde3e6f6ecf9d99644ec63",class:"kol-progress"},(e=>{let t="43%",a=e._label?"57%":"50%";switch(e._variant){case"cycle-value-label":e._label&&(t="57%",a="43%");case"cycle":case"cycle-label-value":return(0,l.h)("svg",{class:"cycle",width:"100",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},(0,l.h)("circle",{class:"background",cx:"60",cy:"60",r:"54.5",fill:"currentColor",stroke:"currentColor","stroke-width":"8"}),(0,l.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"3"}),(0,l.h)("circle",{class:"border",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,l.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"51",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,l.h)("circle",{class:"border",cx:"60",cy:"60",r:"50",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,l.h)("circle",{class:"progress",fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-dasharray":`${Math.round(e._value/e._max*342)}px 342px`,"stroke-width":"6",cx:"60",cy:"60",r:"54.5"}),e._label&&(0,l.h)("text",{"aria-hidden":"true",x:"50%",y:t,"text-anchor":"middle",fill:"currentColor"},e._label),(0,l.h)("text",{"aria-hidden":"true",x:"50%",y:a,"text-anchor":"middle",fill:"currentColor"},e._value,e._unit));default:return(0,l.h)("div",{class:"bar"},e._label&&(0,l.h)("div",null,e._label),(0,l.h)("div",{style:{display:"flex",gap:"0.3em"}},(0,l.h)("svg",{width:"100",viewBox:"0 0 102 8",xmlns:"http://www.w3.org/2000/svg"},(0,l.h)("rect",{class:"background",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100"}),(0,l.h)("rect",{class:"progress",x:"2.5",y:"2.5",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:e._value/e._max*95}),(0,l.h)("rect",{class:"border",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100"})),(0,l.h)("text",{"aria-hidden":"true","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},e._value,e._unit)))}})(this.state),(0,l.h)("progress",{key:"c1afdb59cf40fbe18763637cae057c57153002d9","aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,l.h)("span",{key:"3f51bc1fd04b896a9d785e6547d43a39a8170b50","aria-live":"polite","aria-relevant":"removals text",hidden:!0},this.state._liveValue," von ",this.state._max," ",this.state._unit))}validateLabel(e){(0,s.v)(this,e)}validateMax(e){"number"!=typeof e&&(e=100),(0,o.e)(this,"_max",e,{required:!0})}validateType(e){this.validateVariant(e)}validateUnit(e){(0,o.d)(this,"_unit",e)}validateValue(e){"number"!=typeof e&&(e=0),(0,o.e)(this,"_value",e,{required:!0})}validateVariant(e){(0,o.w)(this,"_variant",(e=>"string"==typeof e&&n.includes(e)),new Set(n),e)}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateUnit(this._unit),this.validateValue(this._value),this.validateVariant(this._variant||this._type),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};c.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}progress{display:block;height:0;overflow:hidden;width:0}.bar .border{fill:transparent;stroke:black}.bar .background{fill:lightgray;stroke:white}.bar .progress{fill:#0075ff;stroke:transparent;transition:250ms ease-in-out 50ms}.cycle .background{fill:transparent;stroke:lightgray}.cycle .border{fill:transparent;stroke:black}.cycle .whitespace{fill:transparent;stroke:white}.cycle .progress{fill:transparent;stroke:#0075ff;transform-origin:50% 50%;transform:rotate(-90deg);transition:250ms ease-in-out 50ms}@media (prefers-reduced-motion){.progress{transition-duration:0s;transition-delay:0s}}"}},88:(e,t,a)=>{a.d(t,{a:()=>d,c:()=>n,h:()=>o,v:()=>h});var r=a(216),i=a(3409);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function o(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function n(e){return s.test(e)}const c=new Set(["string"]),h=(e,t,a={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,a,i,l)=>{var s,c;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,i,l)),"string"==typeof t&&!1===o(t,3)&&!1===n(t)&&(0,r.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,r.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(a))},d=h}}]);