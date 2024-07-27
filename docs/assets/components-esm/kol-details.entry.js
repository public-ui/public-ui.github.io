/*! For license information please see kol-details.entry.js.LICENSE.txt */ import{r as registerInstance,h,H as Host,g as getElement}from"./index-022cbbb8.js";import{p as preventDefaultAndStopPropagation,t as tryToDispatchKoliBriEvent}from"./events-29e84d75.js";import{g as KolIconTag,j as KolIndentedTextTag}from"./component-names-5dd1e02a.js";import{v as validateDisabled}from"./disabled-ecc9abfc.js";import{v as validateLabel}from"./label-20475610.js";import{s as setState}from"./prop.validators-db70e3c4.js";import{v as validateOpen}from"./open-5b527658.js";import"./index-db4aa6e4.js";import"./dev.utils-1ca991a2.js";class DetailsAnimationController{constructor(e,n,t){this.detailsElement=e,this.summaryElement=n,this.contentElement=t,this.isClosing=!1,this.isExpanding=!1,this.summaryElement.addEventListener("click",this.handleSummaryClick.bind(this))}handleSummaryClick(e){e.preventDefault(),this.isClosing||!this.detailsElement.open?this.open():(this.isExpanding||this.detailsElement.open)&&this.collapse()}open(){this.detailsElement.open=!0,window.requestAnimationFrame(this.expand.bind(this))}expand(){this.isExpanding=!0,this.animateContentHeight("expand")}collapse(){this.isClosing=!0,this.animateContentHeight("collapse")}animateContentHeight(e){let n="expand"===e?0:this.contentElement.offsetHeight,t="expand"===e?this.contentElement.offsetHeight:0;this.animation&&(n=this.contentElement.offsetHeight,this.animation.cancel(),"expand"===e&&(t=this.contentElement.offsetHeight)),this.animation=this.contentElement.animate({height:[`${n}px`,`${t}px`]},{duration:matchMedia("(prefers-reduced-motion)").matches?0:250,easing:"ease-out"}),this.animation.addEventListener("finish",(()=>{this.onAnimationFinish()}),{once:!0}),this.animation.addEventListener("cancel",(()=>{"expand"===e?this.isExpanding=!1:this.isClosing=!1}),{once:!0})}onAnimationFinish(){this.detailsElement.open=this.isExpanding,this.animation=void 0,this.isClosing=!1,this.isExpanding=!1}}const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n :host {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n details {\n display: grid;\n }\n details > summary {\n cursor: pointer;\n display: flex;\n place-items: center;\n }\n details > summary > span {\n border-bottom-color: grey;\n border-bottom-style: solid;\n }\n details > summary:focus > span,\n details > summary:hover > span,\n details[open] > summary > span {\n border-bottom-color: #000;\n }\n .content {\n overflow: hidden;\n }\n details > .kol-indented-text {\n margin: 0.25em 0 0 0.5em;\n }\n .icon.is-open::part(icon) {\n transform: rotate(90deg);\n }\n}",KolDetailsDefaultStyle0=defaultStyleCss,KolDetails=class{constructor(e){registerInstance(this,e),this.catchDetails=e=>{this.detailsElement=e},this.catchSummary=e=>{this.summaryElement=e},this.preventToggleIfDisabled=e=>{!0===this.state._disabled&&preventDefaultAndStopPropagation(e)},this.handleToggle=e=>{clearTimeout(this.toggleTimeout),this.toggleTimeout=setTimeout((()=>{var n,t,i,a;Boolean(null===(n=this.detailsElement)||void 0===n?void 0:n.open)!==this.state._open&&(this._open=Boolean(null===(t=this.detailsElement)||void 0===t?void 0:t.open),tryToDispatchKoliBriEvent("toggle",this.host,this._open),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onToggle)&&(null===(a=this.state._on)||void 0===a||a.onToggle(e,this._open)))}),25)},this._disabled=!1,this._label=void 0,this._on=void 0,this._open=!1,this.state={_label:"",_on:{}}}async focus(){await this.kolFocus()}async kolFocus(){var e;null===(e=this.summaryElement)||void 0===e||e.focus()}render(){return h(Host,{key:"c81f22ea30774221c48f71dba31670c1a227ff05",class:"kol-details"},h("details",{key:"1f638cd9c47d989195b15708096a9c2652a3b97a",ref:this.catchDetails,class:{disabled:!0===this.state._disabled,open:!0===this.state._open},onToggle:this.handleToggle},h("summary",{key:"b78004a89667175bf308f0a239780c15b39d313c",ref:this.catchSummary,"aria-disabled":this.state._disabled?"true":void 0,onClick:this.preventToggleIfDisabled,onKeyPress:this.preventToggleIfDisabled,tabIndex:this.state._disabled?-1:void 0},h(KolIconTag,{key:"69310b844d6f1b5feba60fc77aec6b4b3ba3ed3f",_label:"",_icons:"codicon codicon-chevron-right",class:"icon "+(this.state._open?"is-open":"")}),h("span",{key:"b2cfadced810939b201c79a31051a854a276375a"},this.state._label)),h("div",{key:"3f237b2a06e1f72f11879d3d96c3557efb14810c","aria-hidden":!1===this.state._open?"true":void 0,class:"content",ref:e=>this.contentElement=e},h(KolIndentedTextTag,{key:"85386e4ed2bd9566df2c2cbea897fc67985b0d3f"},h("slot",{key:"06ae87dccb0fcc5833d28d56887a7f5eefb82211"})))))}validateDisabled(e){validateDisabled(this,e)}validateLabel(e){validateLabel(this,e,{required:!0})}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onToggle&&setState(this,"_on",e)}validateOpen(e){validateOpen(this,e)}componentWillLoad(){this.validateDisabled(this._disabled),this.validateLabel(this._label),this.validateOn(this._on),this.validateOpen(this._open)}componentDidLoad(){if(this.detailsElement&&this.summaryElement&&this.contentElement){const e=new DetailsAnimationController(this.detailsElement,this.summaryElement,this.contentElement);this.state._open&&e.open()}}get host(){return getElement(this)}static get watchers(){return{_disabled:["validateDisabled"],_label:["validateLabel"],_on:["validateOn"],_open:["validateOpen"]}}};KolDetails.style={default:KolDetailsDefaultStyle0};export{KolDetails as kol_details};