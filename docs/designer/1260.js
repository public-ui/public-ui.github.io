/*! For license information please see 1260.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1260],{1260:(t,e,r)=>{r.r(e),r.d(e,{kol_progress:()=>s});var a=r(6419),i=r(4300);const s=class{constructor(t){(0,a.r)(this,t),this._label=void 0,this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this._variant=void 0,this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return(0,a.h)(a.H,null,"cycle"===(t=this.state)._variant?(0,a.h)("svg",{class:"cycle",width:"100",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("circle",{class:"background",cx:"60",cy:"60",r:"54.5",fill:"currentColor",stroke:"currentColor","stroke-width":"8"}),(0,a.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"3"}),(0,a.h)("circle",{class:"border",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,a.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"51",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,a.h)("circle",{class:"border",cx:"60",cy:"60",r:"50",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,a.h)("circle",{class:"progress",fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-dasharray":`${Math.round(t._value/t._max*342)}px 342px`,"stroke-width":"6",cx:"60",cy:"60",r:"54.5"}),(0,a.h)("text",{"aria-hidden":"true",x:"50%",y:"50%","text-anchor":"middle",fill:"currentColor"},t._label&&(0,a.h)("tspan",null,t._label),(0,a.h)("tspan",null,t._value,t._unit))):(0,a.h)("div",{class:"bar"},t._label&&(0,a.h)("div",null,t._label),(0,a.h)("div",{style:{display:"flex",gap:"0.3em"}},(0,a.h)("svg",{width:"100",viewBox:"0 0 102 8",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("rect",{class:"background",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100"}),(0,a.h)("rect",{class:"progress",x:"2.5",y:"2.5",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:t._value/t._max*95}),(0,a.h)("rect",{class:"border",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100"})),(0,a.h)("text",{"aria-hidden":"true","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},t._value,t._unit))),(0,a.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,a.h)("span",{"aria-live":"polite","aria-relevant":"removals text",hidden:!0},this.state._liveValue," von ",this.state._max," ",this.state._unit));var t}validateLabel(t){(0,i.w)(this,"_label",t)}validateMax(t){"number"!=typeof t&&(t=100),(0,i.e)(this,"_max",t,{required:!0})}validateType(t){this.validateVariant(t)}validateUnit(t){(0,i.w)(this,"_unit",t)}validateValue(t){"number"!=typeof t&&(t=0),(0,i.e)(this,"_value",t,{required:!0})}validateVariant(t){!t&&this._type&&(t=this._type),"cycle"!==t&&(t="bar"),this.state=Object.assign(Object.assign({},this.state),{_variant:t})}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateUnit(this._unit),this.validateValue(this._value),this.validateVariant(this._variant||this._type),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}progress{display:block;height:0;overflow:hidden;width:0}.bar .border{fill:transparent;stroke:black}.bar .background{fill:lightgray;stroke:white}.bar .progress{fill:#0075ff;stroke:transparent;transition:250ms ease-in-out 50ms}.cycle .background{fill:transparent;stroke:lightgray}.cycle .border{fill:transparent;stroke:black}.cycle .whitespace{fill:transparent;stroke:white}.cycle .progress{fill:transparent;stroke:#0075ff;transform-origin:50% 50%;transform:rotate(-90deg);transition:250ms ease-in-out 50ms}@media (prefers-reduced-motion){.progress{transition-duration:0s;transition-delay:0s}}"}}}]);