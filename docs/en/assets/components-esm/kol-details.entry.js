/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{v as validateLabel}from"./label-07fc28f5.js";import{a as watchBoolean}from"./prop.validators-f76b82ff.js";import"./a11y.tipps-d11c3322.js";import"./dev.utils-38b5f4df.js";import"./reuse-c2156413.js";import"./index-37b5cbcf.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}details{display:grid}details>summary{cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:grey;border-bottom-style:solid}details>summary:focus>span,details>summary:hover>span,details[open]>summary>span{border-bottom-color:#000}details>kol-indented-text{margin:0.25em 0 0 0.5em}@keyframes details-show{to{opacity:1;scale:1}}.content{opacity:0;scale:1 0;transform-origin:top}details[open]>.content{animation:250ms ease-in-out forwards details-show}",KolDetails=class{constructor(t){registerInstance(this,t),this.onClick=()=>{setTimeout((()=>{var t;this._open=null===(t=this.htmlDetailsElement)||void 0===t?void 0:t.open}),25)},this._label=void 0,this._open=!1,this._summary=void 0,this.state={_label:"…"}}render(){return h(Host,null,h("details",{ref:t=>{this.htmlDetailsElement=t},open:this.state._open},h("summary",{onClick:this.onClick},this.state._open?h("kol-icon",{_label:"",_icon:"codicon codicon-chevron-down"}):h("kol-icon",{_label:"",_icon:"codicon codicon-chevron-right"}),h("span",null,this.state._label)),h("div",{class:"content"},h("kol-indented-text",null,h("slot",null)))))}validateLabel(t){validateLabel(this,t)}validateOpen(t){watchBoolean(this,"_open",t)}validateSummary(t){this.validateLabel(t)}componentWillLoad(){this.validateOpen(this._open),this.validateLabel(this._label||this._summary)}static get watchers(){return{_label:["validateLabel"],_open:["validateOpen"],_summary:["validateSummary"]}}};KolDetails.style={default:defaultStyleCss};export{KolDetails as kol_details};