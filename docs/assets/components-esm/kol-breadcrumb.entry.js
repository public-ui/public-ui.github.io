/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,F as Fragment,H as Host}from"./index-5ab2ea42.js";import{v as validateLabel}from"./label-07fc28f5.js";import{b as a11yHintLabelingLandmarks}from"./a11y.tipps-d11c3322.js";import{w as watchNavLinks}from"./validation-647a55ea.js";import"./prop.validators-f76b82ff.js";import"./dev.utils-38b5f4df.js";import"./reuse-c2156413.js";import"./index-37b5cbcf.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}li,ul{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator):before{content:'\\f054';font-family:'Font Awesome 6 Free'}",KolBreadcrumb=class{constructor(a){registerInstance(this,a),this.renderLink=(a,i)=>{const t=this.state._links.length-1,e=a._iconOnly||a._hideLabel;return h("li",{key:i},0!==i&&h("kol-icon",{_label:"",_icon:"codicon codicon-chevron-right"}),i===t?h("span",null,e?h("kol-icon",{_label:a._label,_icon:"string"==typeof a._icon?a._icon:"codicon codicon-symbol-event"}):h(Fragment,null,a._label)):h("kol-link",Object.assign({},a)))},this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return h(Host,null,h("nav",{"aria-label":this.state._label},h("ul",null,0===this.state._links.length&&h("li",null,h("kol-icon",{_label:"",_icon:"codicon codicon-home"}),"…"),this.state._links.map(this.renderLink))))}validateAriaLabel(a){this.validateLabel(a)}validateLabel(a){validateLabel(this,a),a11yHintLabelingLandmarks(a)}validateLinks(a){watchNavLinks("KolBreadcrumb",this,a)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};KolBreadcrumb.style={default:defaultStyleCss};export{KolBreadcrumb as kol_breadcrumb};