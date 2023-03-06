/*! For license information please see 7103.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7103],{57103:(t,e,i)=>{i.r(e),i.d(e,{kol_tabs:()=>b});var o=i(99459),a=i(65815),l=i(27289),n=i(94981),s=i(13136);const r=new Set([...new Set(['"left", "right"']),...new Set(['"left", "right"'])]),b=class{constructor(t){(0,o.r)(this,t),this.onCreateLabel=`${(0,n.a)("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,i)=>{if(i>0){if(e+i<t.length)return t[e+i]._disabled?this.nextPossibleTabIndex(t,e,i+1):e+i}else if(i<0&&e+i>=0)return t[e+i]._disabled?this.nextPossibleTabIndex(t,e,i-1):e+i;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let i=null;switch(t.key){case"ArrowRight":i=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":i=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==i&&this.onSelect(t,i,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,i=!0,o)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===i){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,o||t);t=o||t,i=!1}if(!1===i){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,o||t);(0,a.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,i,o)=>{let a,l;a="_selected"===o?t:this.state._selected,l="_tabs"===o?t:this.state._tabs,l.length>0&&e.set("_selected",this.selectNextNotDisabledTab(a,l))},this.handleTabPanels=()=>{var t,e,i;if(this.tabPanelHost instanceof HTMLDivElement)for(let o=this.tabPanelHost.children.length;o<this.state._tabs.length;o++){const a=document.createElement("div");a.setAttribute("aria-labelledby",`tab-${o}`),a.setAttribute("id",`tabpanel-${o}`),a.setAttribute("role","tabpanel"),a.setAttribute("hidden","");const l=document.createElement("slot");l.setAttribute("name",`tabpanel-slot-${o}`),a.appendChild(l),this.tabPanelHost.appendChild(a),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[o])&&(null===(i=this.host)||void 0===i||i.children[o].setAttribute("slot",`tabpanel-slot-${o}`))}},this.onCreate=t=>{var e,i;t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(i=this.state._on)||void 0===i||i.onCreate(t))},this._ariaLabel=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_ariaLabel:"…",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return(0,o.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._ariaLabel,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,o.h)("kol-button-wc",{_disabled:t._disabled,_icon:t._icon,_iconOnly:t._iconOnly,_label:t._label&&t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,o.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,o.h)("div",{ref:this.catchTabPanelHost})))}validateAriaLabel(t){(0,l.w)(this,"_ariaLabel",t,{required:!0}),(0,a.b)(t)}validateOn(t){if("object"==typeof t&&null!==t){(0,a.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:s.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:s.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,l.s)(this,"_on",e)}}validateSelected(t){(0,l.e)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,l.d)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,a.u)("KolTabs",this.state._tabs.length)}validateTabsAlign(t){((t,e,i)=>{(0,l.a)(t,"_tabsAlign",(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),r,i)})(this,0,t)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,i=!1){var o,a;this._selected=e,"function"==typeof(null===(o=this._on)||void 0===o?void 0:o.onSelect)&&(null===(a=this._on)||void 0===a||a.onSelect(t,e)),!0===i&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=(0,l.k)(`button#tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return(0,o.g)(this)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};b.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}kol-button-group-wc{display:inline-flex;gap:calc(2 * var(--kolibri-spacing));flex-wrap:wrap}kol-button-group-wc button{border:0;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:var(--kolibri-spacing);display:block;min-height:44px;min-width:44px}kol-button-group-wc button[aria-selected='true'],kol-button-group-wc button:focus{border-bottom-color:var(--kolibri-color-accent)}.close-button{font-size:50%;height:fit-content;left:-3em;position:relative;top:0.25em}div[role='tabpanel']{height:100%}div.grid{height:100%}:host>.tabs-align-right{display:grid;grid-template-columns:1fr auto}:host>.tabs-align-right kol-button-group-wc{display:grid;order:2}:host>.tabs-align-left{display:grid;grid-template-columns:auto 1fr}:host>.tabs-align-left kol-button-group-wc{display:grid;order:0}:host>.tabs-align-bottom{display:grid;grid-template-rows:1fr auto}:host>.tabs-align-bottom kol-button-group-wc{order:2}:host>.tabs-align-bottom kol-button-group-wc>div{display:flex}:host>.tabs-align-bottom>kol-button-group-wc>div>div:first-child{margin:0px 1em 0px 0px}:host>.tabs-align-bottom>kol-button-group-wc>div>div{margin:0px 1em}:host>.tabs-align-top{display:grid;grid-template-rows:auto 1fr}:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-top kol-button-group-wc>div{display:flex}:host>.tabs-align-top>kol-button-group-wc>div>div:first-child{margin:0px 1em 0px 0px}:host>.tabs-align-top>kol-button-group-wc>div>div{margin:0px 1em}:host>div{display:grid}:host>div.tabs-align-left{grid-template-columns:auto 1fr}:host>div.tabs-align-right{grid-template-columns:1fr auto}:host>.tabs-align-left kol-button-group-wc,:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-bottom kol-button-group-wc,:host>.tabs-align-right kol-button-group-wc{order:1}:host>div.tabs-align-left kol-button-group-wc>div,:host>div.tabs-align-left kol-button-group-wc>div>div,:host>div.tabs-align-right kol-button-group-wc>div,:host>div.tabs-align-right kol-button-group-wc>div>div{display:grid}:host>div.tabs-align-left kol-button-group-wc>div>div kol-button-wc,:host>div.tabs-align-right kol-button-group-wc>div>div kol-button-wc{width:100%}:host>div.tabs-align-bottom kol-button-group-wc div,:host>div.tabs-align-top kol-button-group-wc div{display:flex;flex-wrap:wrap}"}}}]);