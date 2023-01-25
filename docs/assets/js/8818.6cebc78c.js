/*! For license information please see 8818.6cebc78c.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[8818],{8818:(t,a,i)=>{i.r(a),i.d(a,{kol_nav:()=>h});var e=i(7509),l=i(5149),s=i(8286),n=i(5928),o=i(2842);const r=[],c=t=>{const a=r.indexOf(t);a>=0&&r.splice(a,1)},h=class{constructor(t){(0,e.r)(this,t),this.onClick=t=>{t._active=!1===t._active,this.state=Object.assign({},this.state)},this.hasActiveChild=t=>!!(Array.isArray(t._children)&&t._children.length>0)&&t._children.some(this.hasActiveChild),this.linkList=t=>(0,e.h)("ul",{class:{flex:0===t.deep&&"horizontal"===this.state._orientation},part:`nav ${this.state._orientation}`},t.links.map(((a,i)=>(0,e.h)("li",{key:i,part:`li ${0===t.deep?this.state._orientation:"vertical"}${a._active?" selected":""}${i<t.links.length-1?"":" last"}`},Array.isArray(a._children)&&a._children.length>0?(0,e.h)("div",{class:"h-full"},(0,e.h)("div",{class:{"h-full":!0}},(0,e.h)("kol-link-wc",{class:"block w-full h-full",exportparts:"icon,link,span"+(!0===a._active?",selected":""),_ariaLabel:!0===this.state._compact||!0===a._iconOnly?a._label:void 0,_ariaExpanded:!0===a._active,_disabled:a._disabled,_href:"javascript:void(0)",_icon:!0===this.state._collapsible?!0===a._active?"fa-solid fa-minus":"fa-solid fa-plus":"string"==typeof a._icon?a._icon:"fa-solid fa-link-slash",_iconOnly:!0===this.state._compact||!0===a._iconOnly,_label:a._label,onClick:()=>this.onClick(a)})),!0===a._active&&(0,e.h)("div",{class:{expanded:!0,active:!0===a._active,"active-child":this.hasActiveChild(a),"absolute ":0===t.deep&&"horizontal"===this.state._orientation}},(0,e.h)(this.linkList,{links:a._children,deep:t.deep+1}))):(0,e.h)("div",{class:{"h-full":!0,"text-center":!0===this.state._compact||!0===a._iconOnly}},(0,e.h)("kol-link-wc",{class:{"block w-full h-full":!0,active:!0===a._active},exportparts:"icon,link,span"+(!0===a._active?",selected":""),_ariaCurrent:!0===a._active&&this.state._ariaCurrentValue,_ariaLabel:!0===this.state._compact||!0===a._iconOnly?a._label:void 0,_href:a._href,_icon:"string"==typeof a._icon?a._icon:"fa-solid fa-link-slash","_icon-only":!0===this.state._compact||!0===a._iconOnly,_label:a._label,_on:a._on,_selector:a._selector,_tooltipAlign:a._tooltipAlign,_target:a._target})))))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!1,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"\u2026",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}render(){let t=this.state._hasCompactButton;return"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(t=!1,(0,l.d)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden.")),(0,e.h)(e.H,null,(0,e.h)("div",{class:{[this.state._orientation]:!0,"inline-block":!0===this.state._compact,[this.state._variant]:!0}},(0,e.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav",part:"nav"},(0,e.h)(this.linkList,{links:this.state._links,deep:0})),t&&(0,e.h)("div",{class:"mt-2 w-full text-center"},(0,e.h)("kol-button",{exportparts:"button,ghost",_ariaControls:"nav",_ariaExpanded:!0===this.state._compact,_ariaLabel:(0,o.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_icon:this.state._compact?"fa-solid fa-angles-right":"fa-solid fa-angles-left",_iconOnly:!0,_label:(0,o.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(t){(0,s.a)(this,"_ariaCurrentValue",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaLabel(t){(0,s.w)(this,"_ariaLabel",t,{hooks:{afterPatch:()=>{r.includes(this.state._ariaLabel)&&(0,l.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde f\xfcr die Rolle Navigation mehrfach verwendet!`),r.push(this.state._ariaLabel)},beforePatch:()=>{c(this.state._ariaLabel)}},required:!0}),(0,l.a)(t)}validateCollapsible(t){(0,s.b)(this,"_collapsible",t)}validateCompact(t){(0,s.b)(this,"_compact",t)}validateHasCompactButton(t){(0,s.b)(this,"_hasCompactButton",t)}validateLinks(t){(0,n.w)("KolNav",this,t),(0,l.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(t){(0,s.a)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateVariant(t){(0,s.a)(this,"_variant",(t=>"primary"===t||"secondary"===t),new Set(["KoliBriNavVariant {primary, secondary}"]),t,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){c(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};h.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},5928:(t,a,i)=>{i.d(a,{w:()=>s});var e=i(5149),l=i(8286);const s=(t,a,i)=>{(0,l.c)(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),i),(0,e.u)(t,a.state._links.length)}}}]);