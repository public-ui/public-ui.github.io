/*! For license information please see 61908.dd07fddc.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[61908],{12356:(t,i,e)=>{e.d(i,{F:()=>a});var s=e(65224),o=e(63792);const a=({_alert:t,_msg:i,_hideError:e,_id:a})=>(0,s.h)(o.d,Object.assign({"aria-hidden":"true",id:`${a}-error`,_alert:t,_type:"error",class:{error:!0,"visually-hidden":!0===e}},i),(null==i?void 0:i._description)||void 0)},98852:(t,i,e)=>{e.d(i,{t:()=>a});var s=e(46892),o=e(28968);let a=(t,i)=>{var e;return(null!==(e=(0,s.g)())&&void 0!==e?e:(0,s.i)("de")).translate(t,i)};"test"===o.p&&(a=t=>t)},61908:(t,i,e)=>{e.r(i),e.d(i,{kol_input:()=>r});var s=e(65224),o=e(98852),a=e(12356),l=e(63792),n=e(28968);function d(t){var i,e,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t)if(Array.isArray(t)){var o=t.length;for(i=0;i<o;i++)t[i]&&(e=d(t[i]))&&(s&&(s+=" "),s+=e)}else for(e in t)t[e]&&(s&&(s+=" "),s+=e);return s}function h(){for(var t,i,e=0,s="",o=arguments.length;e<o;e++)(t=arguments[e])&&(i=d(t))&&(s&&(s+=" "),s+=i);return s}const r=class{constructor(t){(0,s.r)(this,t),this.slotName="input",this.catchInputSlot=t=>{(0,n.h)(this.host,t,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._msg=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(t){return t&&"object"==typeof t&&t.style?t.style:{}}render(){var t,i,e,d,r,_,c,u,b,f,g,p;const y=Boolean("error"===(null===(t=this._msg)||void 0===t?void 0:t._type)&&this._msg._description&&(null===(i=this._msg._description)||void 0===i?void 0:i.length)>0),v=!this._readOnly&&y&&!0===this._touched,m=Boolean(v||"error"!==(null===(e=this._msg)||void 0===e?void 0:e._type)&&(null===(d=this._msg)||void 0===d?void 0:d._description)),k=(0,n.s)(this._label),B="string"==typeof this._hint&&this._hint.length>0,C=!k&&this._hideLabel;return(0,s.h)(s.H,{key:"8f4ba7be771e2794dba0bbea4c93de58237f2b02",class:h("kol-input",this.getModifierClassNameByMsgType(),{disabled:!0===this._disabled,error:!0===v,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError})},(0,s.h)("label",{key:"c4397e40e8d492187c1bae3bbe4be1b6449bc9d9",class:"input-label",id:C?void 0:`${this._id}-label`,hidden:C,htmlFor:this._id},(0,s.h)("span",{key:"543c3749b69fdde2ebc88ae7a342143f352b4e01",class:"input-label-span"},(0,s.h)("slot",{key:"f1c24dabbbd1d75dbe37ee774b3ad52567bbefbf",name:"label"}))),B&&(0,s.h)("span",{key:"adb87f975d975a866e22a55838eafb409f362729",class:"hint",id:`${this._id}-hint`},this._hint),(0,s.h)("div",{key:"38f52cdf606c001800b0f93a9e48542b3c0d59e3",class:{input:!0,"icon-left":"object"==typeof(null===(r=this._icons)||void 0===r?void 0:r.left),"icon-right":"object"==typeof(null===(_=this._icons)||void 0===_?void 0:_.right)}},(null===(c=this._icons)||void 0===c?void 0:c.left)&&(0,s.h)(l.g,{key:"5af1b04137afa941269af05dd35a684c21384d46",_label:"",_icons:(null===(u=this._icons)||void 0===u?void 0:u.left).icon,style:this.getIconStyles(null===(b=this._icons)||void 0===b?void 0:b.left)}),(0,s.h)("div",{key:"a32419d39395a44a61ee9abd6d3b3f785345c6ab",ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,s.h)(l.c,{key:"f09aecd73a43a2452a83b31badc9a9d8a48e202a",_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(f=this._icons)||void 0===f?void 0:f.right)&&(0,s.h)(l.g,{key:"49140be539ede37df384be1dce9f3db2d4f774d9",_label:"",_icons:(null===(g=this._icons)||void 0===g?void 0:g.right).icon,style:this.getIconStyles(null===(p=this._icons)||void 0===p?void 0:p.right)})),C&&(0,s.h)(l.a,{key:"9192e8e543ade06f365baacc1c7e5012d48e6d94","aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),m&&(0,s.h)(a.F,{key:"cc846ab34c1aa368b16a135a40dd59ae03268a5d",_alert:this._alert,_hideError:this._hideError,_msg:this._msg,_id:this._id}),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,s.h)("datalist",{key:"015c7ff9403fc46bcbd3056e6ec757af46044418",id:`${this._id}-list`},this._suggestions.map((t=>(0,s.h)("option",{value:t})))),this._hasCounter&&(0,s.h)("span",{key:"b558e392516d0ed5fbb41a327b467f9e330a4980",class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,s.h)(s.F,null,(0,s.h)("span",{key:"9ea2c55e5a88a3ea87f295b76b88540fd004ebe0","aria-label":(0,o.t)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,s.h)("span",{key:"613f73ee31fb7fada22737c9a2172bb17d37264f"},(0,o.t)("kol-characters"))))}getModifierClassNameByMsgType(){var t,i;if(null===(t=this._msg)||void 0===t?void 0:t._type)return{default:"msg-type-default",info:"msg-type-info",success:"msg-type-success",warning:"msg-type-warning",error:"msg-type-error"}[null===(i=this._msg)||void 0===i?void 0:i._type]}get host(){return(0,s.g)(this)}}},28968:(t,i,e)=>{e.d(i,{S:()=>l,a:()=>a,b:()=>s,c:()=>n,h:()=>h,i:()=>o,p:()=>d,s:()=>r});const s=t=>"object"==typeof t&&null!==t,o=(t,i=0)=>"string"==typeof t&&t.length>=i,a=t=>{if("object"!=typeof t||null===t)return o(t,1);for(const i in t)if(!1===o(i,1))return!1;return!0},l=new Event("StateChange"),n=(t,i)=>{s(t)&&t&&(t.focus=t=>null==i?void 0:i.focus(t))};let d="development";try{d="production"}catch(_){d="production"}const h=(t,i,e)=>{if(t&&i&&"string"==typeof e){const s=t.querySelector(`[slot="${e}"]`);s&&i.appendChild(s)}},r=t=>""===t}}]);