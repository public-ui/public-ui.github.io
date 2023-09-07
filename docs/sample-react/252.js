/*! For license information please see 252.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[252],{252:(e,t,n)=>{n.r(t),n.d(t,{kol_accordion:()=>d});var i=n(9315),o=n(1686),s=n(2807),a=n(2974),l=n(5097),r=n(3013),h=n(7108),c=n(5792);(0,a.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,a.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const d=class{constructor(e){(0,i.r)(this,e),this.nonce=(0,l.n)(),this.contentElement=null,this.contentWrapperElement=null,this.contentObserver=null,this.transition=!1,this.catchContentElement=e=>{e&&(this.contentElement=e)},this.catchContentWrapperElement=e=>{e&&(this.contentWrapperElement=e)},this.onClick=e=>{this._open=!this._open,setTimeout((()=>{var t;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._heading=void 0,this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"…",_level:1}}resizeWrapper(e){const t=this.contentElement,n=this.contentWrapperElement,i=this.contentObserver;t&&n&&i&&(this._open?(n.style.display="block",setTimeout((()=>{var e;n.style.height=`${null!==(e=null==t?void 0:t.clientHeight)&&void 0!==e?e:0}px`})),e||i.observe(t),n.addEventListener("transitionend",(()=>{n.style.overflow=""}),{once:!0})):(n.style.overflow="hidden",i.unobserve(t),n.style.height="0",this.transition?n.addEventListener("transitionend",(()=>{n.style.display="none"}),{once:!0}):n.style.display="none"))}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{accordion:!0,open:!0===this.state._open,close:!0!==this.state._open}},(0,i.h)("kol-heading-wc",{_label:"",_level:this.state._level},(0,i.h)("kol-button-wc",{_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icon:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),(0,i.h)("div",{class:"header"},(0,i.h)("slot",{name:"header"})),(0,i.h)("div",{ref:this.catchContentWrapperElement,class:{wrapper:!0,transition:this.transition}},(0,i.h)("div",{ref:this.catchContentElement,"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},(0,i.h)("slot",{name:"content"})," ",(0,i.h)("slot",null)))))}validateHeading(e){this.validateLabel(e)}validateLabel(e){(0,o.v)(this,e)}validateLevel(e){(0,c.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,r.s)(this,"_on",e)}validateOpen(e){(0,s.v)(this,e,{hooks:{afterPatch:()=>{this.resizeWrapper()}}})}componentWillLoad(){this.validateLabel(this._label||this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open),"test"!==h.p&&(this.contentObserver=new ResizeObserver(this.resizeWrapper.bind(this))),setTimeout((()=>{this.contentObserver&&this.contentElement&&this.contentObserver.observe(this.contentElement)})),setTimeout((()=>{this.transition=!0}),200)}static get watchers(){return{_heading:["validateHeading"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};d.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}.accordion kol-heading-wc kol-button-wc button kol-span-wc{justify-items:start}.content{inset:0 0 auto 0;width:100%}.transition{transition:height 0.3s ease-in-out}@media (prefers-reduced-motion){.transition{transition-duration:0s}}"}},1686:(e,t,n)=>{n.d(t,{a:()=>u,c:()=>r,h:()=>l,v:()=>d});var i=n(2974),o=n(3013);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,a=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(s))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return a.test(e)}function h(e){var t;return{hooks:{afterPatch:(t,n,o,s)=>{var a,h;"function"==typeof(null===(a=e.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(t,n,o,s)),"string"==typeof t&&!1===l(t,3)&&!1===r(t)&&(0,i.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const c=new Set(["string"]),d=(e,t,n={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,t,h(n))},p=new Set(["string","false"]),u=(e,t,n={})=>{""!==t&&"false"!==t||(t=!1),(0,o.w)(e,"_label",(e=>!1===e||"string"==typeof e),p,t,h(n))}},2807:(e,t,n)=>{n.d(t,{v:()=>o});var i=n(3013);const o=(e,t,n)=>{(0,i.a)(e,"_open",t,n)}},5792:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(3013);const o=(e,t)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);