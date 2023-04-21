/*! For license information please see 1260.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1260],{1260:(t,e,a)=>{a.r(e),a.d(e,{kol_progress:()=>n});var i=a(99459),s=a(80161);const n=class{constructor(t){(0,i.r)(this,t),this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this.state={_max:100,_type:"bar",_unit:"%",_value:0,_liveValue:0}}render(){return(0,i.h)(i.H,null,"cycle"===(t=this.state)._type?(0,i.h)("svg",{width:"100",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("circle",{fill:"none",stroke:"#efefef",cx:"6px",cy:"6px",r:"5px"}),(0,i.h)("circle",{class:"cycle","stroke-linecap":"round","stroke-dasharray":`${Math.round(t._value/t._max*32)}px 32px`,fill:"none",stroke:"#0075ff",cx:"6px",cy:"6px",r:"5px"})):(0,i.h)("svg",{width:"100",viewBox:"0 0 24 2",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("line",{"stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:"23",y2:"1",fill:"#efefef",stroke:"#efefef"}),(0,i.h)("line",{class:"bar","stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:`${1+Math.round(t._value/t._max*22)}`,y2:"1",fill:"#0075ff",stroke:"#0075ff"})),(0,i.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,i.h)("span",{"aria-live":"polite","aria-relevant":"removals text"},this.state._liveValue," von ",this.state._max," ",this.state._unit));var t}validateMax(t){"number"!=typeof t&&(t=100),(0,s.e)(this,"_max",t,{required:!0})}validateType(t){"cycle"===t||(t="bar"),this.state=Object.assign(Object.assign({},this.state),{_type:t})}validateUnit(t){(0,s.w)(this,"_unit",t)}validateValue(t){"number"!=typeof t&&(t=0),(0,s.e)(this,"_value",t,{required:!0})}componentWillLoad(){this.validateMax(this._max),this.validateType(this._type),this.validateUnit(this._unit),this.validateValue(this._value),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"]}}};n.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}progress,span{display:block;height:0;overflow:hidden;width:0}.bar,.cycle{transition:0.5s ease-in-out 0.25s}.cycle{transform-origin:50% 50%;transform:rotate(-90deg)}"}}}]);