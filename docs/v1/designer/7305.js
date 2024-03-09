/*! For license information please see 7305.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7305],{7305:(e,t,i)=>{i.r(t),i.d(t,{kol_link_group:()=>d});var a=i(33887),l=i(31123),n=i(20251),s=i(53087),r=i(4705),o=i(8575);const h=e=>{const t=[];return e.links.map(((i,l)=>{t.push((0,a.h)("li",{key:l,class:{ident:l>0&&"vertical"===e.orientation,"list-none":0===l&&"horizontal"===e.orientation},style:{listStyleType:e.listStyleType}},(0,a.h)("kol-link",Object.assign({},i))))})),t},d=class{constructor(e){(0,a.r)(this,e),this.isUl=!0,this._ariaLabel=void 0,this._listStyleType=void 0,this._heading=void 0,this._label=void 0,this._level=void 0,this._links=void 0,this._ordered=!1,this._orientation="vertical",this.state={_label:"…",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){var e;return(0,a.h)(a.H,{key:"c386715b9555b0d7d30e11c6d785dc3ccd5527ab",class:"kol-link-group"},(0,a.h)("nav",{key:"390458411bca98429cddf2377d536bba967c0d93","aria-label":this.state._label,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},"string"==typeof this.state._heading&&(null===(e=this.state._heading)||void 0===e?void 0:e.length)>0&&(0,a.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),!1===this.isUl?(0,a.h)("ol",null,(0,a.h)(h,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,a.h)("ul",null,(0,a.h)(h,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType}))))}validateAriaLabel(e){this.validateLabel(e)}validateHeading(e){(0,n.d)(this,"_heading",e)}validateLabel(e,t,i=!1){i||(0,s.r)(this.state._label),(0,l.v)(this,e,{required:!0}),(0,s.a)(this.state._label)}validateLevel(e){(0,r.w)(this,e)}validateListStyleType(e){(0,n.w)(this,"_listStyleType",(e=>{switch(e){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),e)}validateLinks(e){(0,o.w)("KolLinkGroup",this,e)}validateOrdered(e){(0,n.a)(this,"_ordered",e)}validateOrientation(e){(0,n.w)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}componentWillLoad(){this.validateHeading(this._heading),this.validateLabel(this._label||this._ariaLabel,void 0,!0),this.validateLevel(this._level),this.validateListStyleType(this._listStyleType),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){(0,s.r)(this.state._label)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_heading:["validateHeading"],_label:["validateLabel"],_level:["validateLevel"],_listStyleType:["validateListStyleType"],_links:["validateLinks"],_ordered:["validateOrdered"],_orientation:["validateOrientation"]}}};d.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}ul{list-style:none;margin:0;padding:0}nav.horizontal ul{display:flex;flex-wrap:wrap}nav.horizontal li{margin-left:1.25rem;margin-right:0.25rem}nav.horizontal li:first-child{margin-left:0}nav.horizontal li:last-child{margin-right:0}nav.vertical li{margin-left:1.75rem;margin-right:0.5rem}li.list-none{list-style-type:none !important;margin-left:0}"}},31123:(e,t,i)=>{i.d(t,{a:()=>c,c:()=>o,h:()=>r,v:()=>d});var a=i(92870),l=i(20251);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(n))||void 0===t?void 0:t.length)||0}(e)>=t}function o(e){return s.test(e)}const h=new Set(["string"]),d=(e,t,i={})=>{(0,l.w)(e,"_label",(e=>"string"==typeof e),h,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,i,l,n)=>{var s,h;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(t,i,l,n)),"string"==typeof t&&!1===r(t,3)&&!1===o(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(i))},c=d},53087:(e,t,i)=>{i.d(t,{a:()=>l,r:()=>n});const a=new Set;function l(e){a.has(e)?console.error(`There already is a nav element with the label "${e}"`):a.add(e)}function n(e){a.delete(e)}},8575:(e,t,i)=>{i.d(t,{w:()=>n});var a=i(92870),l=i(20251);const n=(e,t,i)=>{(0,l.c)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),i),(0,a.c)(e,t.state._links.length)}},4705:(e,t,i)=>{i.d(t,{w:()=>l});var a=i(20251);const l=(e,t)=>{(0,a.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);