/*! For license information please see 7305.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7305],{7305:(e,t,i)=>{i.r(t),i.d(t,{kol_link_group:()=>h});var a=i(2786),l=i(26737),s=i(94220),n=i(54767),r=i(14147);const o=e=>{const t=[];return e.links.map(((i,l)=>{t.push((0,a.h)("li",{key:l,class:{ident:l>0&&"vertical"===e.orientation,"list-none":0===l&&"horizontal"===e.orientation},style:{listStyleType:e.listStyleType}},(0,a.h)("kol-link",Object.assign({},i))))})),t},h=class{constructor(e){(0,a.r)(this,e),this.isUl=!0,this._ariaLabel=void 0,this._listStyleType=void 0,this._heading=void 0,this._level=void 0,this._links=void 0,this._ordered=void 0,this._orientation="vertical",this.state={_ariaLabel:"…",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){var e;return(0,a.h)("nav",{"aria-label":this.state._ariaLabel,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},"string"==typeof this.state._heading&&(null===(e=this.state._heading)||void 0===e?void 0:e.length)>0&&(0,a.h)("kol-heading-wc",{_level:this.state._level},this.state._heading),!1===this.isUl?(0,a.h)("ol",null,(0,a.h)(o,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,a.h)("ul",null,(0,a.h)(o,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateAriaLabel(e){(0,s.w)(this,"_ariaLabel",e,{required:!0}),(0,l.a)(e)}validateListStyleType(e){(0,s.a)(this,"_listStyleType",(e=>{switch(e){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),e)}validateHeading(e){(0,s.w)(this,"_heading",e)}validateLevel(e){(0,n.w)(this,e)}validateLinks(e){(0,r.w)("KolLinkGroup",this,e)}validateOrdered(e){(0,s.b)(this,"_ordered",e)}validateOrientation(e){(0,s.a)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateListStyleType(this._listStyleType),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateLinks(this._links),this.validateOrientation(this._orientation)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_listStyleType:["validateListStyleType"],_heading:["validateHeading"],_level:["validateLevel"],_links:["validateLinks"],_ordered:["validateOrdered"],_orientation:["validateOrientation"]}}};h.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},54767:(e,t,i)=>{i.d(t,{w:()=>l});var a=i(94220);const l=(e,t)=>{(0,a.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}},14147:(e,t,i)=>{i.d(t,{w:()=>s});var a=i(26737),l=i(94220);const s=(e,t,i)=>{(0,l.c)(t,"_links",(e=>"object"==typeof e&&"string"==typeof e._label),i),(0,a.u)(e,t.state._links.length)}}}]);