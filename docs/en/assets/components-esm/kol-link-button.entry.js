/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host,g as getElement}from"./index-e27342ee.js";import{a as translate}from"./i18n-2d630bd4.js";import{a as propagateFocus}from"./reuse-3698e2f5.js";import"./index-42a84baa.js";import"./index-d49940eb.js";import"./a11y.tipps-32ec681c.js";import"./dev.utils-15468eab.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:inline-block}:is(a,button){display:inline-flex;place-items:center;text-align:center;text-decoration-line:none}:is(a,button)>kol-span-wc{margin:auto;width:100%}:is(button):disabled{cursor:not-allowed;opacity:0.5}",KolLinkButton=class{constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._download=!1,this._hideLabel=!1,this._href=void 0,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this._listenAriaCurrent=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=translate("kol-open-link-in-tab"),this._tooltipAlign="right",this._variant="normal"}render(){return h(Host,null,h("kol-link-wc",{ref:this.catchRef,class:{button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_download:this._download,_hideLabel:this._hideLabel,_href:this._href,_icon:this._icon,_label:this._label,_listenAriaCurrent:this._listenAriaCurrent,_on:this._on,_role:"button",_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},h("slot",{name:"expert",slot:"expert"})))}get host(){return getElement(this)}};KolLinkButton.style={default:defaultStyleCss};export{KolLinkButton as kol_link_button};