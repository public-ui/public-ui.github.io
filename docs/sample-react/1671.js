/*! For license information please see 1671.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1671],{2114:(t,e,i)=>{i.d(e,{w:()=>s});var o=i(3320);const s=(t,e,i)=>{(0,o.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},1671:(t,e,i)=>{i.r(e),i.d(e,{kol_tooltip:()=>p});var o=i(9258),s=i(1035),n=i(2114),l=i(9311),r=i(3320),a=i(7269);const h=new Set,p=class{constructor(t){(0,o.r)(this,t),this.alignTooltip=t=>{var e;if("test"!==a.p&&this.previousSibling&&this.tooltipElement){const i=this.previousSibling,o=this.tooltipElement,n=this.arrowElement,l=[(0,s.o)(null!==(e=null==n?void 0:n.offsetHeight)&&void 0!==e?e:10),(0,s.f)(),(0,s.s)()];n&&l.push((0,s.a)({element:n})),(0,s.c)(i,o,{placement:this.state._align,middleware:l}).then((({x:e,y:i,middlewareData:s,placement:l})=>{var r,a;const h=o.style.left,p=o.style.top;Object.assign(o.style,{left:`${e}px`,top:`${i}px`}),n&&((null===(r=s.arrow)||void 0===r?void 0:r.x)?Object.assign(n.style,{left:`${s.arrow.x}px`,top:"bottom"===l?-n.offsetHeight/2+"px":"",bottom:"top"===l?-n.offsetHeight/2+"px":""}):(null===(a=s.arrow)||void 0===a?void 0:a.y)&&Object.assign(n.style,{left:"right"===l?-n.offsetWidth/2+"px":"",right:"left"===l?-n.offsetWidth/2+"px":"",top:`${s.arrow.y}px`})),h!==o.style.left||p!==o.style.top?this.alignTooltip(t):"function"==typeof t&&t()}))}},this.showTooltip=()=>{this.tooltipElement&&(function(t){h.forEach((t=>{t.style.setProperty("z-index","999")})),h.add(t),t.style.setProperty("z-index","1000")}(this.tooltipElement),this.tooltipElement.style.setProperty("display","block"),(0,l.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip((()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.showTooltip))})))},this.hideTooltip=()=>{this.tooltipElement&&(function(t){if(h.delete(t),h.size>0){const t=Array.from(h).pop();t&&t.style.setProperty("z-index","1000")}}(this.tooltipElement),this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.showTooltip))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,l.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,l.n)(),_label:"…"}}render(){return(0,o.h)(o.H,{ref:this.catchHostElement},""!==this.state._label&&(0,o.h)("div",{id:"floating",ref:this.catchTooltipElement},(0,o.h)("div",{class:"area",id:"arrow",ref:this.catchArrowElement}),(0,o.h)("kol-span-wc",{class:"area",id:this.state._id,_label:this.state._label})))}validateAlign(t){(0,n.w)(this,"_align",t)}validateId(t){(0,r.w)(this,"_id",t)}validateLabel(t){(0,r.w)(this,"_label",t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement)}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};p.style=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip #floating{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeInOpacity;animation-timing-function:ease-in;box-sizing:border-box;display:none;position:absolute;visibility:hidden}kol-tooltip #arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip .area{background-color:#fff;color:#000}kol-tooltip kol-span-wc{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"}}]);