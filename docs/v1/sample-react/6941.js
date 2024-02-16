/*! For license information please see 6941.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[6941],{2805:(e,i,t)=>{t.d(i,{a:()=>o,b:()=>p,c:()=>f,d:()=>l,e:()=>a,f:()=>h,g:()=>v,h:()=>u,u:()=>b});var n=t(8037);const r=new Set,o=(e,i)=>{(!1===r.has(e)||(null==i?void 0:i.force))&&(r.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},d=new Set,a=(e,i)=>{(!1===d.has(e)||(null==i?void 0:i.force))&&(d.add(e),n.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"🔥 deprecated",overwriteStyle:"; background-color: #f00"}))},s=new Set,l=(e,i)=>{(!1===s.has(e)||(null==i?void 0:i.force))&&(s.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},u=(e,i)=>{(!1===s.has(e)||(null==i?void 0:i.force))&&(s.add(e),n.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,h=(e,i=!1,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),e+=!0===i?" ✅":"",n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};l("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const _=new Set,b=(e,i)=>{(!1===_.has(e)||(null==i?void 0:i.force))&&(_.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},v=()=>{o('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||o("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},f=(e,i=8)=>{i>7&&b(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},6941:(e,i,t)=>{t.r(i),t.d(i,{kol_input_radio_group:()=>o});var n=t(5262),r=t(2805);const o=class{constructor(e){(0,n.r)(this,e),this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=!1,this._tabIndex=void 0,this._touched=!1,this._value=void 0}render(){return(0,r.e)("[KolInputRadioGroup] Die Komponenten Input-Radio-Group und Input-Radio werden zur Komponente Input-Radio zusammengeführt. Wir empfehlen den Tag <kol-input-radio> statt <kol-input-radio-group> zu verwenden.\n\nMit der Version 1.1 wird die Komponente KolInputRadioGroup aus der Bibliothek entfernt."),(0,n.h)("kol-input-radio",{_accessKey:this._accessKey,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_id:this._id,_label:this._label,_list:this._list,_name:this._name,_on:this._on,_orientation:this._orientation,_required:this._required,_tabIndex:this._tabIndex,_touched:this._touched,_value:this._value},(0,n.h)("slot",null))}}}}]);