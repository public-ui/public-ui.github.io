/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h}from"./index-9c30809b.js";import{v as validateLabel}from"./label-5c173d60.js";import{w as watchValidator}from"./prop.validators-3d53ddab.js";import{r as removeNavLabel,a as addNavLabel}from"./unique-nav-labels-c6750f60.js";import{w as watchNavLinks}from"./validation-68e14b6f.js";import"./a11y.tipps-06cd7c77.js";import"./dev.utils-075f4e7b.js";import"./reuse-b3566e4c.js";const defaultStyleCss="@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tul {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\tnav.horizontal ul {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\n\tnav.horizontal li {\n\t\tmargin-left: 1.25rem;\n\t\tmargin-right: 0.25rem;\n\t}\n\n\tnav.horizontal li:first-child {\n\t\tmargin-left: 0;\n\t}\n\n\tnav.horizontal li:last-child {\n\t\tmargin-right: 0;\n\t}\n\n\tnav.vertical li {\n\t\tmargin-left: 1.75rem;\n\t\tmargin-right: 0.5rem;\n\t}\n\n\tli.list-none {\n\t\tlist-style-type: none !important;\n\t\tmargin-left: 0;\n\t}\n}\n",ListItem=t=>{const n=[];return t.links.map(((e,i)=>{n.push(h("li",{key:i,class:{ident:i>0&&"vertical"===t.orientation,"list-none":0===i&&"horizontal"===t.orientation},style:{listStyleType:t.listStyleType}},h("kol-link",Object.assign({},e))))})),n},KolLinkGroup=class{constructor(t){registerInstance(this,t),this.isUl=!0,this._listStyleType=void 0,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_label:"…",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){return h("nav",{"aria-label":this.state._label,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},!1===this.isUl?h("ol",null,h(ListItem,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):h("ul",null,h(ListItem,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateLabel(t,n,e=!1){e||removeNavLabel(this.state._label),validateLabel(this,t),addNavLabel(this.state._label)}validateListStyleType(t){watchValidator(this,"_listStyleType",(t=>{switch(t){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),t)}validateLinks(t){watchNavLinks("KolLinkGroup",this,t)}validateOrientation(t){watchValidator(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateListStyleType(this._listStyleType),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){removeNavLabel(this.state._label)}static get watchers(){return{_label:["validateLabel"],_listStyleType:["validateListStyleType"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};KolLinkGroup.style={default:defaultStyleCss};export{KolLinkGroup as kol_link_group};