/*! For license information please see 6254.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6254],{86254:(a,t,i)=>{i.r(t),i.d(t,{kol_nav:()=>h});var e=i(46266),l=i(26737),s=i(51539),n=i(77174),o=i(68854);const r=[],c=a=>{const t=r.indexOf(a);t>=0&&r.splice(t,1)},h=class{constructor(a){(0,e.r)(this,a),this.onClick=a=>{a._active=!1===a._active,this.state=Object.assign({},this.state)},this.hasActiveChild=a=>!!(Array.isArray(a._children)&&a._children.length>0)&&a._children.some(this.hasActiveChild),this.linkList=a=>(0,e.h)("ul",{class:{flex:0===a.deep&&"horizontal"===this.state._orientation},part:`nav ${this.state._orientation}`},a.links.map(((t,i)=>(0,e.h)("li",{key:i,part:`li ${0===a.deep?this.state._orientation:"vertical"}${t._active?" selected":""}${i<a.links.length-1?"":" last"}`},Array.isArray(t._children)&&t._children.length>0?(0,e.h)("div",{class:"h-full"},(0,e.h)("div",{class:{"h-full":!0}},(0,e.h)("kol-link-wc",{class:"block w-full h-full",exportparts:"icon,link,span"+(!0===t._active?",selected":""),_ariaLabel:!0===this.state._compact||!0===t._iconOnly?t._label:void 0,_ariaExpanded:!0===t._active,_disabled:t._disabled,_href:"javascript:void(0)",_icon:!0===this.state._collapsible?!0===t._active?"fa-solid fa-minus":"fa-solid fa-plus":"string"==typeof t._icon?t._icon:"fa-solid fa-link-slash",_iconOnly:!0===this.state._compact||!0===t._iconOnly,_label:t._label,onClick:()=>this.onClick(t)})),!0===t._active&&(0,e.h)("div",{class:{expanded:!0,active:!0===t._active,"active-child":this.hasActiveChild(t),"absolute ":0===a.deep&&"horizontal"===this.state._orientation}},(0,e.h)(this.linkList,{links:t._children,deep:a.deep+1}))):(0,e.h)("div",{class:{"h-full":!0,"text-center":!0===this.state._compact||!0===t._iconOnly}},(0,e.h)("kol-link-wc",{class:{"block w-full h-full":!0,active:!0===t._active},exportparts:"icon,link,span"+(!0===t._active?",selected":""),_ariaCurrent:!0===t._active&&this.state._ariaCurrentValue,_ariaLabel:!0===this.state._compact||!0===t._iconOnly?t._label:void 0,_href:t._href,_icon:"string"==typeof t._icon?t._icon:"fa-solid fa-link-slash","_icon-only":!0===this.state._compact||!0===t._iconOnly,_label:t._label,_on:t._on,_selector:t._selector,_tooltipAlign:t._tooltipAlign,_target:t._target})))))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!1,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"…",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}render(){let a=this.state._hasCompactButton;return"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(a=!1,(0,l.d)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden.")),(0,e.h)(e.H,null,(0,e.h)("div",{class:{[this.state._orientation]:!0,"inline-block":!0===this.state._compact,[this.state._variant]:!0}},(0,e.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav",part:"nav"},(0,e.h)(this.linkList,{links:this.state._links,deep:0})),a&&(0,e.h)("div",{class:"mt-2 w-full text-center"},(0,e.h)("kol-button",{exportparts:"button,ghost",_ariaControls:"nav",_ariaExpanded:!0===this.state._compact,_ariaLabel:(0,o.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_icon:this.state._compact?"fa-solid fa-angles-right":"fa-solid fa-angles-left",_iconOnly:!0,_label:(0,o.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(a){(0,s.a)(this,"_ariaCurrentValue",(a=>!0===a||"date"===a||"location"===a||"page"===a||"step"===a||"time"===a),new Set(["boolean","String {data, location, page, step, time}"]),a)}validateAriaLabel(a){(0,s.w)(this,"_ariaLabel",a,{hooks:{afterPatch:()=>{r.includes(this.state._ariaLabel)&&(0,l.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde für die Rolle Navigation mehrfach verwendet!`),r.push(this.state._ariaLabel)},beforePatch:()=>{c(this.state._ariaLabel)}},required:!0}),(0,l.a)(a)}validateCollapsible(a){(0,s.b)(this,"_collapsible",a)}validateCompact(a){(0,s.b)(this,"_compact",a)}validateHasCompactButton(a){(0,s.b)(this,"_hasCompactButton",a)}validateLinks(a){(0,n.w)("KolNav",this,a),(0,l.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(a){(0,s.a)(this,"_orientation",(a=>"horizontal"===a||"vertical"===a),new Set(["Orientation {horizontal, vertical}"]),a,{defaultValue:"vertical"})}validateVariant(a){(0,s.a)(this,"_variant",(a=>"primary"===a||"secondary"===a),new Set(["KoliBriNavVariant {primary, secondary}"]),a,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){c(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};h.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},77174:(a,t,i)=>{i.d(t,{w:()=>s});var e=i(26737),l=i(51539);const s=(a,t,i)=>{(0,l.c)(t,"_links",(a=>"object"==typeof a&&"string"==typeof a._label),i),(0,e.u)(a,t.state._links.length)}}}]);