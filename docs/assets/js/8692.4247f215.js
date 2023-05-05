/*! For license information please see 8692.4247f215.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8692],{38692:(e,t,n)=>{n.r(t),n.d(t,{kol_accordion:()=>h});var i=n(97533),o=n(79305),s=n(98079),a=n(96863),r=n(62043),l=n(8814);(0,o.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion ge\xf6ffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event pr\xfcft den _open-Status der Accordions\n- Logik \xd6ffnet und Schlie\xdft entsprechend"),(0,o.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const h=class{constructor(e){(0,i.r)(this,e),this.nonce=(0,s.n)(),this.contentElement=null,this.contentWrapperElement=null,this.contentObserver=null,this.transition=!1,this.catchContentElement=e=>{e&&(this.contentElement=e)},this.catchContentWrapperElement=e=>{e&&(this.contentWrapperElement=e)},this.onClick=e=>{this._open=!this._open,this.resizeWrapper(),setTimeout((()=>{var t;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"\u2026",_level:1}}resizeWrapper(e){const t=this.contentElement,n=this.contentWrapperElement,i=this.contentObserver;t&&n&&i&&(this._open?(n.style.display="block",setTimeout((()=>{var e;n.style.height=`${null!==(e=null==t?void 0:t.clientHeight)&&void 0!==e?e:0}px`})),e||i.observe(t)):(i.unobserve(t),n.style.height="0",n.addEventListener("transitionend",(()=>{n.style.display="none"}),{once:!0})))}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{accordion:!0,open:!0===this.state._open,close:!0!==this.state._open}},(0,i.h)("kol-heading-wc",{_label:"",_level:this.state._level},(0,i.h)("kol-button-wc",{_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icon:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._heading,_on:{onClick:this.onClick}})),(0,i.h)("div",{class:"header"},(0,i.h)("slot",{name:"header"})),(0,i.h)("div",{ref:this.catchContentWrapperElement,class:{wrapper:!0,transition:this.transition}},(0,i.h)("div",{ref:this.catchContentElement,"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},(0,i.h)("slot",{name:"content"})))))}validateHeading(e){(0,a.w)(this,"_heading",e,{required:!0})}validateLevel(e){(0,r.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,a.s)(this,"_on",e)}validateOpen(e){((e,t)=>{(0,a.b)(e,"_open",t)})(this,e)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open),"test"!==l.p&&(this.contentObserver=new ResizeObserver(this.resizeWrapper.bind(this))),setTimeout((()=>{this.contentObserver&&this.contentElement&&this.contentObserver.observe(this.contentElement)})),setTimeout((()=>{this.transition=!0}),200)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};h.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}.accordion kol-heading-wc kol-button-wc button kol-span-wc{justify-items:start}.wrapper{overflow:hidden;position:relative}.transition{transition:height 0.3s ease-in-out}.content{inset:0 0 auto 0;position:absolute;width:100%}"}},62043:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(96863);const o=(e,t)=>{(0,i.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);