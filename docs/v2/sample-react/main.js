/*! For license information please see main.js.LICENSE.txt */
(()=>{var e,t,n,r,o={9520:(e,t,n)=>{var r={"./kol-abbr.entry.js":[5536,495,5536],"./kol-accordion.entry.js":[252,495,252],"./kol-alert-wc_2.entry.js":[7814,495,7814],"./kol-alert.entry.js":[8525,8525],"./kol-avatar-wc.entry.js":[1117,495,1117],"./kol-avatar.entry.js":[5709,5709],"./kol-badge.entry.js":[7780,495,7780],"./kol-breadcrumb.entry.js":[3086,495,3086],"./kol-button-group-wc.entry.js":[98,98],"./kol-button-group.entry.js":[2394,2394],"./kol-button-link-text-switch.entry.js":[7448,7448],"./kol-button-link.entry.js":[9379,9379],"./kol-button-wc_2.entry.js":[2678,495,7493,2678],"./kol-button.entry.js":[2351,2351],"./kol-card.entry.js":[2333,495,2333],"./kol-details.entry.js":[1741,495,1741],"./kol-form.entry.js":[9931,495,9931],"./kol-heading.entry.js":[7724,7724],"./kol-icon.entry.js":[91,495,91],"./kol-image.entry.js":[1401,495,1401],"./kol-indented-text.entry.js":[2385,2385],"./kol-input-checkbox.entry.js":[3700,495,3700],"./kol-input-color.entry.js":[4157,495,4157],"./kol-input-date.entry.js":[4826,495,4826],"./kol-input-email.entry.js":[9783,495,6765,9783],"./kol-input-file.entry.js":[9502,495,9502],"./kol-input-number.entry.js":[6682,495,6682],"./kol-input-password.entry.js":[3578,495,6765,3578],"./kol-input-radio.entry.js":[5184,495,5184],"./kol-input-range.entry.js":[5664,495,5664],"./kol-input-text.entry.js":[4574,495,6765,4574],"./kol-input.entry.js":[1288,1288],"./kol-kolibri.entry.js":[9095,495,9095],"./kol-link-button.entry.js":[6422,6422],"./kol-link-group.entry.js":[7305,495,7305],"./kol-link-wc.entry.js":[8399,495,8399],"./kol-link.entry.js":[5768,5768],"./kol-logo.entry.js":[1480,495,1480],"./kol-modal.entry.js":[8971,495,8971],"./kol-nav.entry.js":[6254,495,6254],"./kol-pagination.entry.js":[5387,495,5387],"./kol-popover-wc.entry.js":[1457,495,7493,1457],"./kol-progress.entry.js":[1260,495,1260],"./kol-quote.entry.js":[6143,495,6143],"./kol-select.entry.js":[5001,495,5001],"./kol-skip-nav.entry.js":[27,495,27],"./kol-span-wc.entry.js":[5295,495,5295],"./kol-span.entry.js":[6622,6622],"./kol-spin.entry.js":[4840,495,4840],"./kol-split-button.entry.js":[8519,8519],"./kol-symbol.entry.js":[9028,495,9028],"./kol-table.entry.js":[9933,495,9933],"./kol-tabs.entry.js":[7103,495,7103],"./kol-textarea.entry.js":[5054,495,5054],"./kol-toast-container.entry.js":[4468,4468],"./kol-version.entry.js":[8272,495,8272]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=9520,e.exports=o},476:(e,t,n)=>{"use strict";let r;n.d(t,{o:()=>l,s:()=>a});const o=[],a=e=>{r=e,o.forEach((t=>{t(e)}))},l=(e,t=!0)=>(t&&"string"==typeof r&&e(r),o.push(e),()=>{const t=o.indexOf(e);t>=0&&o.splice(t,1)})},2913:(e,t,n)=>{"use strict";var r,o,a,l;n.d(t,{B:()=>r,b:()=>a,d:()=>l,f:()=>i}),(o=r||(r={}))["Die Bundesregierung"]="BReg",o["Bundesministerium der Finanzen"]="BMF",o["Bundesministerium des Innern, für Bau und Heimat"]="BMI",o["Auswärtiges Amt"]="AA",o["Bundesministerium für Wirtschaft und Energie"]="BMWi",o["Bundesministerium der Justiz und für Verbraucherschutz"]="BMJV",o["Bundesministerium für Arbeit und Soziales"]="BMAS",o["Bundesministerium der Verteidigung"]="BMVg",o["Bundesministerium für Ernährung und Landwirtschaft"]="BMEL",o["Bundesministerium für Familie, Senioren, Frauen und Jugend"]="BMFSFJ",o["Bundesministerium für Gesundheit"]="BMG",o["Bundesministerium für Verkehr und digitale Infrastruktur"]="BMVI",o["Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit"]="BMU",o["Bundesministerium für Bildung und Forschung"]="BMBF",o["Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung"]="BMZ",Object.getOwnPropertyNames(r),function(e){e["Beschaffungsamt des Bundesministeriums des Innern"]="BeschA",e["Bundesamt für Ausrüstung, Informationstechnik und Nutzung der Bundeswehr"]="BAAINBw",e["Bundesamt für äußere Restitutionen"]="BAR",e["Bundesamt für Bauwesen und Raumordnung"]="BBR",e["Bundesamt für Bevölkerungsschutz und Katastrophenhilfe"]="BBK",e["Bundesamt für Familie und zivilgesellschaftliche Aufgaben"]="BAFzA",e["Bundesamt für Güterverkehr"]="BAG",e["Bundesamt für Justiz"]="BfJ",e["Bundesamt für Kartographie und Geodäsie"]="BKG",e["Bundesamt für kerntechnische Entsorgungssicherheit"]="BASE",e["Bundesamt für Migration und Flüchtlinge"]="BAMF",e["Bundesamt für Sicherheit in der Informationstechnik"]="BSI",e["Bundesamt für Verbraucherschutz und Lebensmittelsicherheit"]="BVL",e["Bundesamt für Verfassungsschutz"]="BfV",e["Bundesamt für Wirtschaft und Ausfuhrkontrolle"]="BAFA",e["Bundesamt für zentrale Dienste und offene Vermögensfragen"]="BADV",e["Bundesanstalt für Verwaltungsdienstleistungen"]="BAV",e.Bundesarchiv="BArch",e["Bundesaufsichtsamt für Flugsicherung"]="BAF",e.Bundesausgleichsamt="BAA",e.Bundeskartellamt="BKartA",e.Bundeskriminalamt="BKA",e.Bundesnachrichtendienst="BND",e["Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen"]="BNetzA",e["Bundespolizeipräsidium"]="BPOLP",e["Bundesprüfstelle für jugendgefährdende Medien"]="BPjM",e.Bundessortenamt="BSA",e.Bundessprachenamt="BSprA",e["Bundesamt für Soziale Sicherung"]="BAS",e.Bundesverwaltungsamt="BVA",e["Bundeszentralamt für Steuern"]="BZSt",e["Deutsches Patent- und Markenamt"]="DPMA",e["Eisenbahn-Bundesamt"]="EBA",e.Generalzolldirektion="GZD",e["Militärischer Abschirmdienst"]="MAD",e["Zentrale Stelle für Informationstechnik im Sicherheitsbereich"]="ZITiS"}(a||(a={})),Object.getOwnPropertyNames(a),function(e){e["Informationstechnikzentrum Bund"]="ITZBund",e["Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben"]="BDBOS",e["Bundesanstalt für Landwirtschaft und Ernährung"]="BLE",e["Bundesanstalt Technisches Hilfswerk"]="THW",e["Bundesinstitut für Arzneimittel und Medizinprodukte"]="BfArM",e["Bundesinstitut für Bevölkerungsforschung"]="BiB",e["Bundesinstitut für Sportwissenschaft"]="BISp"}(l||(l={})),Object.getOwnPropertyNames(l);const i=new Map;i.set(r["Die Bundesregierung"],["Die","Bundesregierung"]),i.set(r["Bundesministerium der Finanzen"],["Bundesministerium","der Finanzen"]),i.set(r["Bundesministerium des Innern, für Bau und Heimat"],["Bundesministerium","des Inneren, für Bau","und Heimat"]),i.set(r["Auswärtiges Amt"],["Auswärtiges Amt"]),i.set(r["Bundesministerium für Wirtschaft und Energie"],["Bundesministerium","für Wirtschaft","und Energie"]),i.set(r["Bundesministerium der Justiz und für Verbraucherschutz"],["Bundesministerium","der Justiz und","für Verbraucherschutz"]),i.set(r["Bundesministerium für Arbeit und Soziales"],["Bundesministerium","für Arbeit und Soziales"]),i.set(r["Bundesministerium der Verteidigung"],["Bundesministerium","der Verteidigung"]),i.set(r["Bundesministerium für Bildung und Forschung"],["Bundesministerium","für Bildung","und Forschung"]),i.set(r["Bundesministerium für Ernährung und Landwirtschaft"],["Bundesministerium","für Ernährung","und Landwirtschaft"]),i.set(r["Bundesministerium für Familie, Senioren, Frauen und Jugend"],["Bundesministerium","für Familie, Senioren, Frauen","und Jugend"]),i.set(r["Bundesministerium für Gesundheit"],["Bundesministerium","für Gesundheit"]),i.set(r["Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit"],["Bundesministerium","für Umwelt, Naturschutz","und nukleare Sicherheit"]),i.set(r["Bundesministerium für Verkehr und digitale Infrastruktur"],["Bundesministerium","für Verkehr und","digitale Infrastruktur"]),i.set(r["Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung"],["Bundesministerium","für wirtschaftliche Zusammenarbeit","und Entwicklung"]),i.set(a["Beschaffungsamt des Bundesministeriums des Innern"],["Beschaffungsamt","des Bundesministeriums","des Innern"]),i.set(a["Bundesamt für Ausrüstung, Informationstechnik und Nutzung der Bundeswehr"],[]),i.set(a["Bundesamt für äußere Restitutionen"],[]),i.set(a["Bundesamt für Bauwesen und Raumordnung"],[]),i.set(a["Bundesamt für Bevölkerungsschutz und Katastrophenhilfe"],["Bundesamt","für Bevölkerungsschutz","und Katastrophenhilfe"]),i.set(a["Bundesamt für Familie und zivilgesellschaftliche Aufgaben"],["Bundesamt","für Familie und","zivilgesellschaftliche Aufgaben"]),i.set(a["Bundesamt für Güterverkehr"],["Bundesamt","für Güterverkehr"]),i.set(a["Bundesamt für Justiz"],["Bundesamt für","Justiz"]),i.set(a["Bundesamt für Kartographie und Geodäsie"],["Bundesamt für","Kartographie und Geodäsie"]),i.set(a["Bundesamt für kerntechnische Entsorgungssicherheit"],["Bundesamt für","kerntechnische","Entsorgungssicherheit"]),i.set(a["Bundesamt für Migration und Flüchtlinge"],["Bundesamt","für Migration","und Flüchtlinge"]),i.set(a["Bundesamt für Sicherheit in der Informationstechnik"],["Bundesamt","für Sicherheit in der","Informationstechnik"]),i.set(a["Bundesamt für Verbraucherschutz und Lebensmittelsicherheit"],["Bundesamt für","Verbraucherschutz und","Lebensmittelsicherheit"]),i.set(a["Bundesamt für Verfassungsschutz"],["Bundesamt für","Verfassungsschutz"]),i.set(a["Bundesamt für Wirtschaft und Ausfuhrkontrolle"],["Bundesamt","für Wirtschaft","Ausfuhrkontrolle"]),i.set(a["Bundesamt für zentrale Dienste und offene Vermögensfragen"],["Bundesamt","für zentrale Dienste und","offene Vermögensfragen"]),i.set(a["Bundesanstalt für Verwaltungsdienstleistungen"],["Bundesanstalt","für Verwaltungsdienstleistungen"]),i.set(a.Bundesarchiv,["Das","Bundesarchiv"]),i.set(a["Bundesaufsichtsamt für Flugsicherung"],["Bundesaufsichtsamt","für Flugsicherung"]),i.set(a.Bundesausgleichsamt,["Bundesausgleichsamt"]),i.set(a.Bundeskartellamt,["Bundeskartellamt"]),i.set(a.Bundeskriminalamt,["Bundeskriminalamt"]),i.set(a.Bundesnachrichtendienst,["Bundesnachrichtendienst"]),i.set(a["Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen"],["Bundesnetzagentur"]),i.set(a["Bundespolizeipräsidium"],["Bundespolizeipräsidium"]),i.set(a["Bundesprüfstelle für jugendgefährdende Medien"],["Bundesprüfstelle","für jugendgefährdende","Medien"]),i.set(a.Bundessortenamt,["Bundessortenamt"]),i.set(a.Bundessprachenamt,["Bundessprachenamt"]),i.set(a["Bundesamt für Soziale Sicherung"],["Bundesamt","für Soziale Sicherung"]),i.set(a.Bundesverwaltungsamt,["Bundesverwaltungsamt"]),i.set(a["Bundeszentralamt für Steuern"],["Bundeszentralamt","für Steuern"]),i.set(a["Deutsches Patent- und Markenamt"],["Deutsches","Patent- und Markenamt"]),i.set(a["Eisenbahn-Bundesamt"],["Eisenbahn-Bundesamt"]),i.set(a.Generalzolldirektion,["Generalzolldirektion"]),i.set(a["Militärischer Abschirmdienst"],["Bundesamt für den","Militärischen Abschirmdienst"]),i.set(a["Zentrale Stelle für Informationstechnik im Sicherheitsbereich"],["Zentrale Stelle","für Informationstechnik","im Sicherheitsbereich"]),i.set(l["Informationstechnikzentrum Bund"],["Informations","Technik","Zentrum Bund"]),i.set(l["Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben"],["Bundesanstalt","für den Digitalfunk der Behörden und","Organisationen mit Sicherheitsaufgaben"]),i.set(l["Bundesanstalt für Landwirtschaft und Ernährung"],["Bundesanstalt für","Landwirtschaft und Ernährung"]),i.set(l["Bundesanstalt Technisches Hilfswerk"],["Bundesanstalt","Technisches Hilfswerk"]),i.set(l["Bundesinstitut für Arzneimittel und Medizinprodukte"],["Bundesinstitut","für Arzneimittel","und Medizinprodukte"]),i.set(l["Bundesinstitut für Bevölkerungsforschung"],["Bundesinstitut","für Bevölkerungsforschung"]),i.set(l["Bundesinstitut für Sportwissenschaft"],["Bundesinstitut","für Sportwissenschaft"])},8164:(e,t,n)=>{"use strict";n.d(t,{A:()=>u,L:()=>q,S:()=>g,_:()=>y,a:()=>F,b:()=>p,d:()=>H,e:()=>j,f:()=>a,g:()=>Z,h:()=>K,i:()=>W,j:()=>V,n:()=>Y,r:()=>G});var r=n(8125),o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function a(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var l=a((function(e){var t,n;t=o,n=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"];function o(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(t,n){for(var o=0;o<r.length;o++){var a=r[o];this[a]=o<t?e:this.methodFactory(a,t,n)}this.log=this.debug}function i(e,n,r){return function(){typeof console!==t&&(l.call(this,n,r),this[e].apply(this,arguments))}}function c(r,l,c){return"debug"===(s=r)&&(s="log"),typeof console!==t&&("trace"===s&&n?a:void 0!==console[s]?o(console,s):void 0!==console.log?o(console,"log"):e)||i.apply(this,arguments);var s}function s(e,n,o){var a,i=this;n=null==n?"WARN":n;var s="loglevel";function f(){var e;if(typeof window!==t&&s){try{e=window.localStorage[s]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=n.indexOf(encodeURIComponent(s)+"=");-1!==r&&(e=/^([^;]+)/.exec(n.slice(r))[1])}catch(e){}return void 0===i.levels[e]&&(e=void 0),e}}"string"==typeof e?s+=":"+e:"symbol"==typeof e&&(s=void 0),i.name=e,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=o||c,i.getLevel=function(){return a},i.setLevel=function(n,o){if("string"==typeof n&&void 0!==i.levels[n.toUpperCase()]&&(n=i.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(a=n,!1!==o&&function(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&s){try{return void(window.localStorage[s]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"="+n+";"}catch(e){}}}(n),l.call(i,n,e),typeof console===t&&n<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(e){n=e,f()||i.setLevel(e,!1)},i.resetLevel=function(){i.setLevel(n,!1),function(){if(typeof window!==t&&s){try{return void window.localStorage.removeItem(s)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var d=f();null==d&&(d=n),i.setLevel(d,!1)}var f=new s,d={};f.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new s(e,f.getLevel(),f.methodFactory)),t};var u=typeof window!==t?window.log:void 0;return f.noConflict=function(){return typeof window!==t&&window.log===f&&(window.log=u),f},f.getLoggers=function(){return d},f.default=f,f},e.exports?e.exports=n():t.log=n()}));const i="object"==typeof window?window:"object"==typeof n.g?n.g:"object"==typeof self?self:{};let c=!0,s=!1;const f=/^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/,d=e=>{if(!1===(e=>"string"==typeof e&&f.test(e))(e))throw new Error(`[Theming] The theme identifier "${"string"==typeof e?e:""}" (Type: ${typeof e}) is not valid. Please use only follow this pattern: /^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/`)},u=(e,t,n,r)=>{var o;(r=null!=r?r:{}).append=null!=(o=r.append)&&o,d(e),!0===c&&!1===s&&(s=!0,l.warn(`[Theming] The theme process is locked. This means that the theme "${e}" should not be patched.\n\n\timport { register } from 'adopted-style-sheets';\n\timport { defineCustomElements } from '...';\n\timport { THEME } from '...';\n\n\tregister(THEME, defineCustomElements)\n\t.then(() => {\n\t\t// run your app or website\n\t})\n\t.catch(console.warn);`)),("object"!=typeof i.A11yUi||null===i.A11yUi)&&(i.A11yUi={}),"object"==typeof i.A11yUi&&null!==i.A11yUi&&("object"!=typeof i.A11yUi.Themes||null===i.A11yUi.Themes)&&(i.A11yUi.Themes={}),"object"==typeof i.A11yUi&&null!==i.A11yUi&&"object"==typeof i.A11yUi.Themes&&null!==i.A11yUi.Themes&&("object"!=typeof i.A11yUi.Themes[e]||null===i.A11yUi.Themes[e])&&(i.A11yUi.Themes[e]={}),"object"==typeof i.A11yUi&&null!==i.A11yUi&&"object"==typeof i.A11yUi.Themes&&null!==i.A11yUi.Themes&&"object"==typeof i.A11yUi.Themes[e]&&null!==i.A11yUi.Themes[e]&&(r.append&&"string"==typeof i.A11yUi.Themes[e][t]?i.A11yUi.Themes[e][t]+=n:i.A11yUi.Themes[e][t]=n)},p=(e,t,n)=>(d(e),"object"==typeof t&&null!==t&&Object.getOwnPropertyNames(t).forEach((r=>{const o=t[r];"string"==typeof o&&o.length>0&&u(e,r,o,n)})),e),b=e=>{if(e instanceof HTMLElement){if("string"==typeof e.dataset.theme)return e;{let t=e.parentNode;for(;t instanceof ShadowRoot;)t=t.host;return b(t)}}return null},h=(e={})=>"false"!==e.themeEncroachCss&&"true"!==e.themeReset&&{mode:"after"===e.themeEncroachCssMode||"before"===e.themeEncroachCssMode?e.themeEncroachCssMode:"before"},m=()=>"object"==typeof i.A11yUi&&null!==i.A11yUi&&"object"==typeof i.A11yUi.Theme&&null!==i.A11yUi.Theme&&"boolean"==typeof i.A11yUi.Theme.cache&&"object"==typeof i.A11yUi.Theme.encroachCss&&null!==i.A11yUi.Theme.encroachCss&&"string"==typeof i.A11yUi.Theme.encroachCss.mode&&"string"==typeof i.A11yUi.Theme.name,g=e=>{if(m())return i.A11yUi.Theme;{const t={cache:!0,encroachCss:h(),loglevel:"silent",name:null},n=b(e);return n instanceof HTMLElement&&(t.cache="false"!==n.dataset.themeCache,t.encroachCss=h(n.dataset),t.loglevel="debug"===n.dataset.themeLoglevel?n.dataset.themeLoglevel:"silent",t.name=n.dataset.theme||null),t}};let v=!1;const y=(e,t,n={})=>{!1===v&&(v=!0,c=!1),"function"==typeof e?e=new Set([e]):Array.isArray(e)&&(e=new Set(e)),e instanceof Set&&e.forEach((e=>{var t,r,o,a;"function"==typeof e&&1===e.length?((e,t)=>{!1===m()&&("object"!=typeof i.A11yUi||null===i.A11yUi||"object"!=typeof i.A11yUi.Theme||null===i.A11yUi.Theme||"default"!==i.A11yUi.Theme.name)&&"object"==typeof t&&null!==t&&("fixed"===(t=((e,t)=>({cache:!1!==t.cache,detect:"auto"===t.detect?"auto":"fixed",encroachCss:!1!==t.encroachCss&&("object"!=typeof t.encroachCss||null==t.encroachCss||"after"!==t.encroachCss.mode&&"before"!==t.encroachCss.mode?{mode:"before"}:t.encroachCss),loglevel:"debug"===t.loglevel?t.loglevel:"silent",name:"string"==typeof t.name?t.name:e}))(e,t)).detect?(null===t.name&&"string"==typeof e&&(t.name=e),e===t.name&&(("object"!=typeof i.A11yUi||null===i.A11yUi)&&(i.A11yUi={}),i.A11yUi.Theme=t,l.info(`[Theming] Theme "${e}" was set as default theme.`))):l.warn("[Theming] The presetting of theme options is only relevant by using 'fixed' detection mode."))})(e(p),{cache:null==(t=n.theme)?void 0:t.cache,detect:null==(r=n.theme)?void 0:r.detect,encroachCss:null==(o=n.theme)?void 0:o.encroachCss,name:null==(a=n.theme)?void 0:a.name}):l.error("[Theming] Es wurde versucht eine nicht kompatibles Theme zu laden.")})),c=!0,"function"==typeof t?t=new Set([t]):Array.isArray(t)&&(t=new Set(t));const r=[];return t.forEach((e=>{const t=e();t instanceof Promise&&r.push(t)})),Promise.all(r)},w=new Map,k=[],_=new Set,x=new Map,E=/--[^;]+/g,S=/:/;("object"!=typeof i.A11yUi||null===i.A11yUi)&&(i.A11yUi={CSS_STYLE_CACHE:x,HYDRATED_HISTORY:k,STYLING_TASK_QUEUE:w});const O=(e,t)=>"object"==typeof i.A11yUi&&null!==i.A11yUi&&"object"==typeof i.A11yUi.Themes&&null!==i.A11yUi.Themes&&"object"==typeof i.A11yUi.Themes[e]&&null!==i.A11yUi.Themes[e]&&"string"==typeof i.A11yUi.Themes[e][t]?i.A11yUi.Themes[e][t].replace(/\r?\n/g,""):"",T=(e,t,n)=>{var r,o,a;const l=t.name||"default";let i;try{if(null===e.shadowRoot)throw new Error("ShadowRoot is null");i=e.shadowRoot}catch(t){i=e}if(null==(r=x.get(l))?void 0:r.has(e.tagName))L(e,i,null==(o=x.get(l))?void 0:o.get(e.tagName),n);else{const r=O(l,"PROPERTIES"),o=O(l,"GLOBAL"),c=O(l,e.tagName);!1===_.has(l)&&((e,t)=>{var n;let r=t.match(E);if(Array.isArray(r)){r=r.filter((e=>S.test(e)));const t=document.createElement("style");t.innerHTML=`.${e} {${r.join(";")}}`,null==(n=document.querySelector("head"))||n.appendChild(t)}_.add(e)})(l,o);const s=[r,o,c];((e,t,n)=>{if(!1!==n){const r=[...Array.from(e.childNodes).filter((e=>e instanceof HTMLStyleElement&&"STYLE"===e.tagName))];let o;try{o=[...Array.from(e.adoptedStyleSheets)]}catch(e){o=[]}"before"===(null==n?void 0:n.mode)?(r.reverse().forEach((e=>t.unshift(e.innerHTML))),o.reverse().forEach((e=>t.unshift(Array.from(e.cssRules).map((e=>e.cssText)).join(""))))):"after"===(null==n?void 0:n.mode)&&(r.forEach((e=>t.push(e.innerHTML))),o.forEach((e=>t.push(Array.from(e.cssRules).map((e=>e.cssText)).join("")))))}})(i,s,t.encroachCss),"debug"===t.loglevel&&console.log(e.tagName,s),!0===t.cache&&(!1===x.has(l)&&x.set(l,new Map),null==(a=x.get(l))||a.set(e.tagName,s)),L(e,i,s,n)}},L=(e,t,n,r)=>{(e=>{for(const t of Array.from(e.childNodes)){if(!(t instanceof HTMLStyleElement&&"STYLE"===t.tagName))break;e.removeChild(t)}})(t),((e,t)=>{try{const n=[];t.forEach((e=>{const t=new CSSStyleSheet;t.replaceSync(e),n.push(t)})),e.adoptedStyleSheets=n}catch(n){t.reverse().forEach((t=>{const n=document.createElement("style");n.innerHTML=t,e.insertBefore(n,e.firstChild)}))}})(t,n),e.style.display=r},A=e=>{"debug"===e.loglevel&&k.push({timestamp:Date.now(),numberOfTasks:w.size})},$=(e,t)=>{(e=>{w.delete(e)})(e),A(t)},N=e=>{const t=setTimeout((()=>{if(clearTimeout(t),w.has(e)&&e.classList.contains("hydrated")){const{styleDisplay:t,themeDetails:n}=w.get(e);T(e,n,t),$(e,n)}else N(e)}),25)},C=e=>{for(const t of e)if(w.has(t.target)&&t.target.classList.contains("hydrated")){const{styleDisplay:e,themeDetails:n}=w.get(t.target);T(t.target,n,e),$(t.target,n)}},z={attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1};let P;try{P=new MutationObserver(C)}catch(e){P=null}const j=(e,t)=>{((e,t)=>{((e,t)=>{w.set(e,{styleDisplay:e.style.display?`${e.style.display}`:null,themeDetails:t})})(e,t),A(t)})(e,t),P?P.observe(e,z):N(e),e.style.display="none"};class I{constructor(){this.lockedElements=new Map,this.modalStack=new Map}lockElement(e){const t=e.getAttribute("tabindex");(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||"string"==typeof t||void 0!==e.dataset.kolModal)&&("string"==typeof t?this.lockedElements.set(e,{tabIndex:t}):this.lockedElements.set(e,{}),e.setAttribute("tabindex","-1"),e.setAttribute("aria-hidden","true"),e.style.userSelect="none")}unlockElement(e,t){"string"==typeof e.tabIndex?t.setAttribute("tabindex",e.tabIndex):t.removeAttribute("tabindex"),t.removeAttribute("aria-hidden"),t.style.userSelect="unset",this.lockedElements.delete(t)}unlockLockedElements(e){e.forEach(this.unlockElement.bind(this))}lockFocus(e,t){try{if(e!==t&&(e instanceof HTMLElement||e instanceof ShadowRoot)){e instanceof HTMLElement&&(this.lockElement(e),this.lockFocus(e.shadowRoot,t));for(let n=0;n<e.children.length;n++)this.lockFocus(e.children[n],t)}}catch(e){}}renderModalIfExists(e){if(e instanceof HTMLElement){this.lockedElements.has(e)&&this.unlockElement(this.lockedElements.get(e),e);const t=setTimeout((()=>{clearTimeout(t),e.focus()}),500)}if(this.unlockLockedElements(this.lockedElements),this.modalStack.size>0){const e=Array.from(this.modalStack.keys()),t=e[e.length-1];this.modalStack.forEach(((e,n)=>{n.style.display=t===n?"inline":"none"})),F().body.style.maxHeight="100vh",F().body.style.overflow="hidden",this.lockFocus(F().body,t)}else F().body.style.maxHeight="unset",F().body.style.overflow="unset"}openModal(e,t){e instanceof HTMLElement==0?q.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide."):(this.modalStack.set(e,{activeElement:t}),this.renderModalIfExists())}closeModal(e){var t;if(e instanceof HTMLElement==0)q.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide.");else{const n=null===(t=this.modalStack.get(e))||void 0===t?void 0:t.activeElement;this.modalStack.delete(e),this.renderModalIfExists(n)}}}const R=()=>"undefined"==typeof window?null:window,F=()=>void 0===R().document?null:R().document;let B=null,D=null,M=null,U=null;const K=()=>!0===D,H=()=>!0===M,V=()=>!0===U;class q{static mapToArray(e){return Array.isArray(e)?e:[e]}static handleClassifier(e){return"string"==typeof e&&e.length>0?`${q.shield.label} | ${e}`:q.shield.label}static getShield(e){return[q.handleClassifier(null==e?void 0:e.classifier),`${q.shield.style};${(null==e?void 0:e.overwriteStyle)||""}`]}static debug(e,t){(D||!0===(null==t?void 0:t.forceLog))&&console.debug(...q.getShield(t),...q.mapToArray(e))}static info(e,t){(D||!0===(null==t?void 0:t.forceLog))&&console.info(...q.getShield(t),...q.mapToArray(e))}static trace(e,t){(D||!0===(null==t?void 0:t.forceLog))&&console.trace(...q.getShield(t),...q.mapToArray(e))}static warn(e,t){(D||!0===(null==t?void 0:t.forceLog))&&console.warn(...q.getShield(t),...q.mapToArray(e))}static error(e,t){(D||!0===(null==t?void 0:t.forceLog))&&console.error(...q.getShield(t),...q.mapToArray(e))}static throw(e,t){if(D||!0===(null==t?void 0:t.forceLog))throw new Error(...q.getShield(t),...q.mapToArray(e))}}q.shield={label:"%cKoliBri",style:"color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000"};const Z=()=>{let e=R().KoliBri;return void 0===e&&(e={},Object.defineProperty(R(),"KoliBri",{value:e,writable:!1})),e},W=()=>{if(void 0===Z().Modal){const e=new I;Object.defineProperty(Z(),"Modal",{get:function(){return e}}),(()=>{if(null===D&&null===M&&null===U){const e=F().querySelector('meta[name="kolibri"]');e&&e.hasAttribute("content")&&(B=e.getAttribute("content"),"string"==typeof B&&(D=B.includes("dev-mode=true"),M=B.includes("experimental-mode=true"),U=B.includes("color-contrast-analysis=true")))}else console.warn("You can only initialize DEV_MODE and COLOR_CONTRAST_ANALYSIS once.")})(),q.debug("\n\t,--. ,--.         ,--. ,--. ,-----.           ,--.\n\t|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n\t|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n\t|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\t`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n\t🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.0.3\n\t\t",{forceLog:!0})}else console.warn("You can only initialize KoliBri once.")},G=()=>{!0!==Z().adviceShown&&(Object.defineProperty(Z(),"adviceShown",{get:function(){return!0}}),q.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let Y=()=>Math.floor(16777215*Math.random()).toString(16);"test"===r.p&&(Y=()=>"nonce")},5509:(e,t,n)=>{"use strict";n.d(t,{F:()=>pe,H:()=>v,a:()=>E,b:()=>ue,g:()=>S,h:()=>m,r:()=>me});var r=(e,t,n)=>new Promise(((r,o)=>{var a=e=>{try{i(n.next(e))}catch(e){o(e)}},l=e=>{try{i(n.throw(e))}catch(e){o(e)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,l);i((n=n.apply(e,t)).next())}));let o,a,l,i=!1,c=!1,s=!1,f=!1;const d="slot-fb{display:contents}slot-fb[hidden]{display:none}",u="http://www.w3.org/1999/xlink",p={},b=e=>"object"==(e=typeof e)||"function"===e;function h(e){var t,n,r;return null!==(r=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==r?r:void 0}const m=(e,t,...n)=>{let r=null,o=null,a=null,l=!1,i=!1;const c=[],s=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?s(r):null!=r&&"boolean"!=typeof r&&((l="function"!=typeof e&&!b(r))&&(r=String(r)),l&&i?c[c.length-1].$text$+=r:c.push(l?g(null,r):r),i=l)};if(s(n),t){t.key&&(o=t.key),t.name&&(a=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,y);const f=g(e,null);return f.$attrs$=t,c.length>0&&(f.$children$=c),f.$key$=o,f.$name$=a,f},g=(e,t)=>({$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}),v={},y={forEach:(e,t)=>e.map(w).forEach(t),map:(e,t)=>e.map(w).map(t).map(k)},w=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),k=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),m(e.vtag,t,...e.vchildren||[])}const t=g(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},_=(e,t,n,r,o,a,l)=>{let i,c,s,f;if(1===a.nodeType){for(i=a.getAttribute("c-id"),i&&(c=i.split("."),c[0]!==l&&"0"!==c[0]||(s={$flags$:0,$hostId$:c[0],$nodeId$:c[1],$depth$:c[2],$index$:c[3],$tag$:a.tagName.toLowerCase(),$elm$:a,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(s),a.removeAttribute("c-id"),e.$children$||(e.$children$=[]),e.$children$[s.$index$]=s,e=s,r&&"0"===s.$depth$&&(r[s.$index$]=s.$elm$))),f=a.childNodes.length-1;f>=0;f--)_(e,t,n,r,o,a.childNodes[f],l);if(a.shadowRoot)for(f=a.shadowRoot.childNodes.length-1;f>=0;f--)_(e,t,n,r,o,a.shadowRoot.childNodes[f],l)}else if(8===a.nodeType)c=a.nodeValue.split("."),c[1]!==l&&"0"!==c[1]||(i=c[0],s={$flags$:0,$hostId$:c[1],$nodeId$:c[2],$depth$:c[3],$index$:c[4],$elm$:a,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===i?(s.$elm$=a.nextSibling,s.$elm$&&3===s.$elm$.nodeType&&(s.$text$=s.$elm$.textContent,t.push(s),a.remove(),e.$children$||(e.$children$=[]),e.$children$[s.$index$]=s,r&&"0"===s.$depth$&&(r[s.$index$]=s.$elm$))):s.$hostId$===l&&("s"===i?(s.$tag$="slot",c[5]?a["s-sn"]=s.$name$=c[5]:a["s-sn"]="",a["s-sr"]=!0,r&&(s.$elm$=Se.createElement(s.$tag$),s.$name$&&s.$elm$.setAttribute("name",s.$name$),a.parentNode.insertBefore(s.$elm$,a),a.remove(),"0"===s.$depth$&&(r[s.$index$]=s.$elm$)),n.push(s),e.$children$||(e.$children$=[]),e.$children$[s.$index$]=s):"r"===i&&(r?a.remove():(o["s-cr"]=a,a["s-cn"]=!0))));else if(e&&"style"===e.$tag$){const t=g(null,a.textContent);t.$elm$=a,t.$index$="0",e.$children$=[t]}},x=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)x(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)x(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},E=e=>xe.push(e),S=e=>he(e).$hostElement$,O=new WeakMap,T=(e,t,n)=>{let r=_e.get(e);Le&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,_e.set(e,r)},L=(e,t,n)=>{var r;const o=A(t,n),a=_e.get(o);if(e=11===e.nodeType?e:Se,a)if("string"==typeof a){e=e.head||e;let n,l=O.get(e);if(l||O.set(e,l=new Set),!l.has(o)){if(e.host&&(n=e.querySelector(`[sty-id="${o}"]`)))n.innerHTML=a;else{n=Se.createElement("style"),n.innerHTML=a;const t=null!==(r=Oe.$nonce$)&&void 0!==r?r:h(Se);null!=t&&n.setAttribute("nonce",t),e.insertBefore(n,e.querySelector("link"))}4&t.$flags$&&(n.innerHTML+=d),l&&l.add(o)}}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]);return o},A=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),$=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),N=(e,t,n,r,o,a)=>{if(n!==r){let l=ve(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=z(n),a=z(r);t.remove(...o.filter((e=>e&&!a.includes(e)))),t.add(...a.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in r)n&&r[t]===n[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("key"===t);else if("ref"===t)r&&r(e);else if(l||"o"!==t[0]||"n"!==t[1]){const c=b(r);if((l||c&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{const o=null==r?"":r;"list"===t?l=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let s=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,s=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(s?e.removeAttributeNS(u,t):e.removeAttribute(t)):(!l||4&a||o)&&!c&&(r=!0===r?"":r,s?e.setAttributeNS(u,t,r):e.setAttribute(t,r))}else if(t="-"===t[2]?t.slice(3):ve(Ee,i)?i.slice(2):i[2]+t.slice(3),n||r){const o=t.endsWith(P);t=t.replace(j,""),n&&Oe.rel(e,t,n,o),r&&Oe.ael(e,t,r,o)}}},C=/\s/,z=e=>e?e.split(C):[],P="Capture",j=new RegExp(P+"$"),I=(e,t,n,r)=>{const o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||p,l=t.$attrs$||p;for(r in a)r in l||N(o,r,a[r],void 0,n,t.$flags$);for(r in l)N(o,r,a[r],l[r],n,t.$flags$)},R=(e,t,n,r)=>{var c;const d=t.$children$[n];let u,p,b,h=0;if(i||(s=!0,"slot"===d.$tag$&&(o&&r.classList.add(o+"-s"),d.$flags$|=d.$children$?2:1)),null!==d.$text$)u=d.$elm$=Se.createTextNode(d.$text$);else if(1&d.$flags$)u=d.$elm$=Se.createTextNode("");else{if(f||(f="svg"===d.$tag$),u=d.$elm$=Se.createElementNS(f?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&d.$flags$?"slot-fb":d.$tag$),f&&"foreignObject"===d.$tag$&&(f=!1),I(null,d,f),(e=>null!=e)(o)&&u["s-si"]!==o&&u.classList.add(u["s-si"]=o),d.$children$)for(h=0;h<d.$children$.length;++h)p=R(e,d,h,u),p&&u.appendChild(p);"svg"===d.$tag$?f=!1:"foreignObject"===u.tagName&&(f=!0)}return u["s-hn"]=l,3&d.$flags$&&(u["s-sr"]=!0,u["s-fs"]=null===(c=d.$attrs$)||void 0===c?void 0:c.slot,u["s-cr"]=a,u["s-sn"]=d.$name$||"",b=e&&e.$children$&&e.$children$[n],b&&b.$tag$===d.$tag$&&e.$elm$&&F(e.$elm$,!1)),u},F=(e,t)=>{var n;Oe.$flags$|=1;const r=e.childNodes;for(let e=r.length-1;e>=0;e--){const o=r[e];o["s-hn"]!==l&&o["s-ol"]&&(K(o).insertBefore(o,U(o)),o["s-ol"].remove(),o["s-ol"]=void 0,o["s-sh"]=void 0,1===o.nodeType&&o.setAttribute("slot",null!==(n=o["s-sn"])&&void 0!==n?n:""),s=!0),t&&F(o,t)}Oe.$flags$&=-2},B=(e,t,n,r,o,a)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=a;++o)r[o]&&(i=R(null,n,o,e),i&&(r[o].$elm$=i,c.insertBefore(i,U(t))))},D=(e,t,n)=>{for(let r=t;r<=n;++r){const t=e[r];if(t){const e=t.$elm$;G(t),e&&(c=!0,e["s-ol"]?e["s-ol"].remove():F(e,!0),e.remove())}}},M=(e,t,n=!1)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:!!n||e.$key$===t.$key$),U=e=>e&&e["s-ol"]||e,K=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,H=(e,t,n=!1)=>{const r=t.$elm$=e.$elm$,o=e.$children$,a=t.$children$,l=t.$tag$,i=t.$text$;let c;null===i?(f="svg"===l||"foreignObject"!==l&&f,"slot"===l||I(e,t,f),null!==o&&null!==a?((e,t,n,r,o=!1)=>{let a,l,i=0,c=0,s=0,f=0,d=t.length-1,u=t[0],p=t[d],b=r.length-1,h=r[0],m=r[b];for(;i<=d&&c<=b;)if(null==u)u=t[++i];else if(null==p)p=t[--d];else if(null==h)h=r[++c];else if(null==m)m=r[--b];else if(M(u,h,o))H(u,h,o),u=t[++i],h=r[++c];else if(M(p,m,o))H(p,m,o),p=t[--d],m=r[--b];else if(M(u,m,o))"slot"!==u.$tag$&&"slot"!==m.$tag$||F(u.$elm$.parentNode,!1),H(u,m,o),e.insertBefore(u.$elm$,p.$elm$.nextSibling),u=t[++i],m=r[--b];else if(M(p,h,o))"slot"!==u.$tag$&&"slot"!==m.$tag$||F(p.$elm$.parentNode,!1),H(p,h,o),e.insertBefore(p.$elm$,u.$elm$),p=t[--d],h=r[++c];else{for(s=-1,f=i;f<=d;++f)if(t[f]&&null!==t[f].$key$&&t[f].$key$===h.$key$){s=f;break}s>=0?(l=t[s],l.$tag$!==h.$tag$?a=R(t&&t[c],n,s,e):(H(l,h,o),t[s]=void 0,a=l.$elm$),h=r[++c]):(a=R(t&&t[c],n,c,e),h=r[++c]),a&&K(u.$elm$).insertBefore(a,U(u.$elm$))}i>d?B(e,null==r[b+1]?null:r[b+1].$elm$,n,r,c,b):c>b&&D(t,i,d)})(r,o,t,a,n):null!==a?(null!==e.$text$&&(r.textContent=""),B(r,null,t,a,0,a.length-1)):null!==o&&D(o,0,o.length-1),f&&"svg"===l&&(f=!1)):(c=r["s-cr"])?c.parentNode.textContent=i:e.$text$!==i&&(r.data=i)},V=e=>{const t=e.childNodes;for(const e of t)if(1===e.nodeType){if(e["s-sr"]){const n=e["s-sn"];e.hidden=!1;for(const r of t)if(r!==e)if(r["s-hn"]!==e["s-hn"]||""!==n){if(1===r.nodeType&&(n===r.getAttribute("slot")||n===r["s-sn"])){e.hidden=!0;break}}else if(1===r.nodeType||3===r.nodeType&&""!==r.textContent.trim()){e.hidden=!0;break}}V(e)}},q=[],Z=e=>{let t,n,r;for(const o of e.childNodes){if(o["s-sr"]&&(t=o["s-cr"])&&t.parentNode){n=t.parentNode.childNodes;const e=o["s-sn"];for(r=n.length-1;r>=0;r--)if(t=n[r],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==o["s-hn"])if(W(t,e)){let n=q.find((e=>e.$nodeToRelocate$===t));c=!0,t["s-sn"]=t["s-sn"]||e,n?(n.$nodeToRelocate$["s-sh"]=o["s-hn"],n.$slotRefNode$=o):(t["s-sh"]=o["s-hn"],q.push({$slotRefNode$:o,$nodeToRelocate$:t})),t["s-sr"]&&q.map((e=>{W(e.$nodeToRelocate$,t["s-sn"])&&(n=q.find((e=>e.$nodeToRelocate$===t)),n&&!e.$slotRefNode$&&(e.$slotRefNode$=n.$slotRefNode$))}))}else q.some((e=>e.$nodeToRelocate$===t))||q.push({$nodeToRelocate$:t})}1===o.nodeType&&Z(o)}},W=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,G=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(G)},Y=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},Q=(e,t)=>{if(!(4&e.$flags$))return Y(e,e.$ancestorComponent$),J(e,t);e.$flags$|=512},J=(e,t)=>{const n=(e.$cmpMeta$.$tagName$,()=>{}),r=e.$lazyInstance$;let o;return t&&(o=ae(r,"componentWillLoad")),o=X(o,(()=>ae(r,"componentWillRender"))),n(),X(o,(()=>te(e,r,t)))},X=(e,t)=>ee(e)?e.then(t):t(),ee=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,te=(e,t,n)=>r(void 0,null,(function*(){var r;const o=e.$hostElement$,a=(e.$cmpMeta$.$tagName$,()=>{}),l=o["s-rc"];n&&(e=>{const t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,()=>{}),a=L(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h")),o()})(e);const i=(e.$cmpMeta$.$tagName$,()=>{});ne(e,t,o,n),l&&(l.map((e=>e())),o["s-rc"]=void 0),i(),a();{const t=null!==(r=o["s-p"])&&void 0!==r?r:[],n=()=>re(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}})),ne=(e,t,n,r)=>{try{t=t.render(),e.$flags$|=2,((e,t,n=!1)=>{var r,f,d,u;const p=e.$hostElement$,b=e.$cmpMeta$,h=e.$vnode$||g(null,null),y=(e=>e&&e.$tag$===v)(t)?t:m(null,null,t);if(l=p.tagName,b.$attrsToReflect$&&(y.$attrs$=y.$attrs$||{},b.$attrsToReflect$.map((([e,t])=>y.$attrs$[t]=p[e]))),n&&y.$attrs$)for(const e of Object.keys(y.$attrs$))p.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&(y.$attrs$[e]=p[e]);if(y.$tag$=null,y.$flags$|=4,e.$vnode$=y,y.$elm$=h.$elm$=p.shadowRoot||p,o=p["s-sc"],a=p["s-cr"],i=0!=(1&b.$flags$),c=!1,H(h,y,n),Oe.$flags$|=1,s){Z(y.$elm$);for(const e of q){const t=e.$nodeToRelocate$;if(!t["s-ol"]){const e=Se.createTextNode("");e["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of q){const t=e.$nodeToRelocate$,o=e.$slotRefNode$;if(o){const e=o.parentNode;let n=o.nextSibling;{let o=null===(r=t["s-ol"])||void 0===r?void 0:r.previousSibling;for(;o;){let r=null!==(f=o["s-nr"])&&void 0!==f?f:null;if(r&&r["s-sn"]===t["s-sn"]&&e===r.parentNode&&(r=r.nextSibling,!r||!r["s-nr"])){n=r;break}o=o.previousSibling}}(!n&&e!==t.parentNode||t.nextSibling!==n)&&t!==n&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),e.insertBefore(t,n),1===t.nodeType&&(t.hidden=null!==(d=t["s-ih"])&&void 0!==d&&d))}else 1===t.nodeType&&(n&&(t["s-ih"]=null!==(u=t.hidden)&&void 0!==u&&u),t.hidden=!0)}}c&&V(y.$elm$),Oe.$flags$&=-2,q.length=0})(e,t,r)}catch(t){ye(t,e.$hostElement$)}return null},re=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,n=e.$lazyInstance$,r=e.$ancestorComponent$;ae(n,"componentDidRender"),64&e.$flags$||(e.$flags$|=64,le(t),ae(n,"componentDidLoad"),e.$onReadyResolve$(t),r||oe()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ae((()=>Q(e,!1))),e.$flags$&=-517},oe=e=>{le(Se.documentElement),Ae((()=>((e,t,n)=>{const r=Oe.ce("appload",{detail:{namespace:"kolibri"}});return e.dispatchEvent(r),r})(Ee)))},ae=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){ye(e)}},le=e=>e.classList.add("hydrated"),ie=(e,t,n)=>{var r;const o=e.prototype;if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const a=Object.entries(t.$members$);if(a.map((([e,[r]])=>{31&r||2&n&&32&r?Object.defineProperty(o,e,{get(){return((e,t)=>he(this).$instanceValues$.get(t))(0,e)},set(n){((e,t,n,r)=>{const o=he(e),a=o.$hostElement$,l=o.$instanceValues$.get(t),i=o.$flags$,c=o.$lazyInstance$;n=((e,t)=>null==e||b(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,r.$members$[t][0]);const s=Number.isNaN(l)&&Number.isNaN(n);if((!(8&i)||void 0===l)&&n!==l&&!s&&(o.$instanceValues$.set(t,n),c)){if(r.$watchers$&&128&i){const e=r.$watchers$[t];e&&e.map((e=>{try{c[e](n,l,t)}catch(e){ye(e,a)}}))}2==(18&i)&&Q(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&r&&Object.defineProperty(o,e,{value(...t){var n;const r=he(this);return null===(n=null==r?void 0:r.$onInstancePromise$)||void 0===n?void 0:n.then((()=>{var n;return null===(n=r.$lazyInstance$)||void 0===n?void 0:n[e](...t)}))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,r,a){Oe.jmp((()=>{var l;const i=n.get(e);if(this.hasOwnProperty(i))a=this[i],delete this[i];else{if(o.hasOwnProperty(i)&&"number"==typeof this[i]&&this[i]==a)return;if(null==i){const n=he(this),o=null==n?void 0:n.$flags$;if(o&&!(8&o)&&128&o&&a!==r){const o=n.$lazyInstance$,i=null===(l=t.$watchers$)||void 0===l?void 0:l[e];null==i||i.forEach((t=>{null!=o[t]&&o[t].call(o,a,r,e)}))}return}}this[i]=(null!==a||"boolean"!=typeof this[i])&&a}))},e.observedAttributes=Array.from(new Set([...Object.keys(null!==(r=t.$watchers$)&&void 0!==r?r:{}),...a.filter((([e,t])=>15&t[0])).map((([e,r])=>{var o;const a=r[1]||e;return n.set(a,e),512&r[0]&&(null===(o=t.$attrsToReflect$)||void 0===o||o.push([e,a])),a}))]))}}return e},ce=e=>{ae(e,"connectedCallback")},se=e=>{if(0==(1&Oe.$flags$)){const t=he(e),n=t.$cmpMeta$,o=(n.$tagName$,()=>{});if(1&t.$flags$)(null==t?void 0:t.$lazyInstance$)?ce(t.$lazyInstance$):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then((()=>ce(t.$lazyInstance$)));else{let o;if(t.$flags$|=1,o=e.getAttribute("s-id"),o){if(1&n.$flags$){const t=L(e.shadowRoot,n,e.getAttribute("s-mode"));e.classList.remove(t+"-h",t+"-s")}((e,t,n,r)=>{const o=e.shadowRoot,a=[],l=o?[]:null,i=r.$vnode$=g(t,null);Oe.$orgLocNodes$||x(Se.body,Oe.$orgLocNodes$=new Map),e["s-id"]=n,e.removeAttribute("s-id"),_(i,a,[],l,e,e,n),a.map((e=>{const n=e.$hostId$+"."+e.$nodeId$,r=Oe.$orgLocNodes$.get(n),a=e.$elm$;r&&Te&&""===r["s-en"]&&r.parentNode.insertBefore(a,r.nextSibling),o||(a["s-hn"]=t,r&&(a["s-ol"]=r,a["s-ol"]["s-nr"]=a)),Oe.$orgLocNodes$.delete(n)})),o&&l.map((e=>{e&&o.appendChild(e)}))})(e,n.$tagName$,o,t)}o||12&n.$flags$&&fe(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){Y(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),((e,t,n,o)=>{r(void 0,null,(function*(){let r;if(0==(32&t.$flags$)){t.$flags$|=32;{if(r=ke(n),r.then){const e=()=>{};r=yield r,e()}r.isProxied||(n.$watchers$=r.watchers,ie(r,n,2),r.isProxied=!0);const e=(n.$tagName$,()=>{});t.$flags$|=8;try{new r(t)}catch(e){ye(e)}t.$flags$&=-9,t.$flags$|=128,e(),ce(t.$lazyInstance$)}if(r.style){let o=r.style;"string"!=typeof o&&(o=o[t.$modeName$=(e=>xe.map((t=>t(e))).find((e=>!!e)))(e)]);const a=A(n,t.$modeName$);if(!_e.has(a)){const e=(n.$tagName$,()=>{});T(a,o,!!(1&n.$flags$)),e()}}}const o=t.$ancestorComponent$,a=()=>Q(t,!0);o&&o["s-rc"]?o["s-rc"].push(a):a()}))})(e,t,n)}o()}},fe=e=>{const t=e["s-cr"]=Se.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},de=e=>{ae(e,"disconnectedCallback")},ue=(e,t={})=>{var n;const o=[],a=t.exclude||[],l=Ee.customElements,i=Se.head,c=i.querySelector("meta[charset]"),s=Se.createElement("style"),f=[],u=Se.querySelectorAll("[sty-id]");let p,b=!0,m=0;for(Object.assign(Oe,t),Oe.$resourcesUrl$=new URL(t.resourcesUrl||"./",Se.baseURI).href,Oe.$flags$|=2;m<u.length;m++)T(u[m].getAttribute("sty-id"),$(u[m].innerHTML),!0);let g=!1;if(e.map((e=>{e[1].map((t=>{var n;const i={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};4&i.$flags$&&(g=!0),i.$members$=t[2],i.$attrsToReflect$=[],i.$watchers$=null!==(n=t[4])&&void 0!==n?n:{};const c=i.$tagName$,s=class extends HTMLElement{constructor(e){super(e),ge(e=this,i),1&i.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),b?f.push(this):Oe.jmp((()=>se(this)))}disconnectedCallback(){Oe.jmp((()=>(e=>r(void 0,null,(function*(){if(0==(1&Oe.$flags$)){const t=he(e);(null==t?void 0:t.$lazyInstance$)?de(t.$lazyInstance$):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then((()=>de(t.$lazyInstance$)))}})))(this)))}componentOnReady(){return he(this).$onReadyPromise$}};i.$lazyBundleId$=e[0],a.includes(c)||l.get(c)||(o.push(c),l.define(c,ie(s,i,1)))}))})),g&&(s.innerHTML+=d),s.innerHTML+=o+"{visibility:hidden}.hydrated{visibility:inherit}",s.innerHTML.length){s.setAttribute("data-styles","");const e=null!==(n=Oe.$nonce$)&&void 0!==n?n:h(Se);null!=e&&s.setAttribute("nonce",e),i.insertBefore(s,c?c.nextSibling:i.firstChild)}b=!1,f.length?f.map((e=>e.connectedCallback())):Oe.jmp((()=>p=setTimeout(oe,30)))},pe=(e,t)=>t,be=new WeakMap,he=e=>be.get(e),me=(e,t)=>be.set(t.$lazyInstance$=e,t),ge=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e)),n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],be.set(e,n)},ve=(e,t)=>t in e,ye=(e,t)=>(0,console.error)(e,t),we=new Map,ke=(e,t,r)=>{const o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,l=we.get(a);if(l)return l[o];{const e=e=>(we.set(a,e),e[o]);switch(a){case"kol-abbr":return Promise.all([n.e(495),n.e(5536)]).then(n.bind(n,5536)).then(e,ye);case"kol-accordion":return Promise.all([n.e(495),n.e(252)]).then(n.bind(n,252)).then(e,ye);case"kol-alert":return n.e(8525).then(n.bind(n,8525)).then(e,ye);case"kol-avatar":return n.e(5709).then(n.bind(n,5709)).then(e,ye);case"kol-badge":return Promise.all([n.e(495),n.e(7780)]).then(n.bind(n,7780)).then(e,ye);case"kol-breadcrumb":return Promise.all([n.e(495),n.e(3086)]).then(n.bind(n,3086)).then(e,ye);case"kol-button":return n.e(2351).then(n.bind(n,2351)).then(e,ye);case"kol-button-group":return n.e(2394).then(n.bind(n,2394)).then(e,ye);case"kol-button-link":return n.e(9379).then(n.bind(n,9379)).then(e,ye);case"kol-card":return Promise.all([n.e(495),n.e(2333)]).then(n.bind(n,2333)).then(e,ye);case"kol-details":return Promise.all([n.e(495),n.e(1741)]).then(n.bind(n,1741)).then(e,ye);case"kol-form":return Promise.all([n.e(495),n.e(9931)]).then(n.bind(n,9931)).then(e,ye);case"kol-heading":return n.e(7724).then(n.bind(n,7724)).then(e,ye);case"kol-icon":return Promise.all([n.e(495),n.e(91)]).then(n.bind(n,91)).then(e,ye);case"kol-image":return Promise.all([n.e(495),n.e(1401)]).then(n.bind(n,1401)).then(e,ye);case"kol-indented-text":return n.e(2385).then(n.bind(n,2385)).then(e,ye);case"kol-input-checkbox":return Promise.all([n.e(495),n.e(3700)]).then(n.bind(n,3700)).then(e,ye);case"kol-input-color":return Promise.all([n.e(495),n.e(4157)]).then(n.bind(n,4157)).then(e,ye);case"kol-input-date":return Promise.all([n.e(495),n.e(4826)]).then(n.bind(n,4826)).then(e,ye);case"kol-input-email":return Promise.all([n.e(495),n.e(6765),n.e(9783)]).then(n.bind(n,9783)).then(e,ye);case"kol-input-file":return Promise.all([n.e(495),n.e(9502)]).then(n.bind(n,9502)).then(e,ye);case"kol-input-number":return Promise.all([n.e(495),n.e(6682)]).then(n.bind(n,6682)).then(e,ye);case"kol-input-password":return Promise.all([n.e(495),n.e(6765),n.e(3578)]).then(n.bind(n,3578)).then(e,ye);case"kol-input-radio":return Promise.all([n.e(495),n.e(5184)]).then(n.bind(n,5184)).then(e,ye);case"kol-input-text":return Promise.all([n.e(495),n.e(6765),n.e(4574)]).then(n.bind(n,4574)).then(e,ye);case"kol-kolibri":return Promise.all([n.e(495),n.e(9095)]).then(n.bind(n,9095)).then(e,ye);case"kol-link":return n.e(5768).then(n.bind(n,5768)).then(e,ye);case"kol-link-button":return n.e(6422).then(n.bind(n,6422)).then(e,ye);case"kol-link-group":return Promise.all([n.e(495),n.e(7305)]).then(n.bind(n,7305)).then(e,ye);case"kol-logo":return Promise.all([n.e(495),n.e(1480)]).then(n.bind(n,1480)).then(e,ye);case"kol-modal":return Promise.all([n.e(495),n.e(8971)]).then(n.bind(n,8971)).then(e,ye);case"kol-nav":return Promise.all([n.e(495),n.e(6254)]).then(n.bind(n,6254)).then(e,ye);case"kol-pagination":return Promise.all([n.e(495),n.e(5387)]).then(n.bind(n,5387)).then(e,ye);case"kol-progress":return Promise.all([n.e(495),n.e(1260)]).then(n.bind(n,1260)).then(e,ye);case"kol-quote":return Promise.all([n.e(495),n.e(6143)]).then(n.bind(n,6143)).then(e,ye);case"kol-select":return Promise.all([n.e(495),n.e(5001)]).then(n.bind(n,5001)).then(e,ye);case"kol-skip-nav":return Promise.all([n.e(495),n.e(27)]).then(n.bind(n,27)).then(e,ye);case"kol-span":return n.e(6622).then(n.bind(n,6622)).then(e,ye);case"kol-spin":return Promise.all([n.e(495),n.e(4840)]).then(n.bind(n,4840)).then(e,ye);case"kol-split-button":return n.e(8519).then(n.bind(n,8519)).then(e,ye);case"kol-symbol":return Promise.all([n.e(495),n.e(9028)]).then(n.bind(n,9028)).then(e,ye);case"kol-table":return Promise.all([n.e(495),n.e(9933)]).then(n.bind(n,9933)).then(e,ye);case"kol-tabs":return Promise.all([n.e(495),n.e(7103)]).then(n.bind(n,7103)).then(e,ye);case"kol-textarea":return Promise.all([n.e(495),n.e(5054)]).then(n.bind(n,5054)).then(e,ye);case"kol-toast-container":return n.e(4468).then(n.bind(n,4468)).then(e,ye);case"kol-version":return Promise.all([n.e(495),n.e(8272)]).then(n.bind(n,8272)).then(e,ye);case"kol-input-range":return Promise.all([n.e(495),n.e(5664)]).then(n.bind(n,5664)).then(e,ye);case"kol-popover-wc":return Promise.all([n.e(495),n.e(7493),n.e(1457)]).then(n.bind(n,1457)).then(e,ye);case"kol-avatar-wc":return Promise.all([n.e(495),n.e(1117)]).then(n.bind(n,1117)).then(e,ye);case"kol-button-link-text-switch":return n.e(7448).then(n.bind(n,7448)).then(e,ye);case"kol-button-group-wc":return n.e(98).then(n.bind(n,98)).then(e,ye);case"kol-link-wc":return Promise.all([n.e(495),n.e(8399)]).then(n.bind(n,8399)).then(e,ye);case"kol-input":return n.e(1288).then(n.bind(n,1288)).then(e,ye);case"kol-alert-wc_2":return Promise.all([n.e(495),n.e(7814)]).then(n.bind(n,7814)).then(e,ye);case"kol-button-wc_2":return Promise.all([n.e(495),n.e(7493),n.e(2678)]).then(n.bind(n,2678)).then(e,ye);case"kol-span-wc":return Promise.all([n.e(495),n.e(5295)]).then(n.bind(n,5295)).then(e,ye)}}return n(9520)(`./${a}.entry.js`).then((e=>(we.set(a,e),e[o])),ye)},_e=new Map,xe=[],Ee="undefined"!=typeof window?window:{},Se=Ee.document||{head:{}},Oe={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},Te=!0,Le=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),Ae=e=>Promise.resolve(void 0).then(e)},4750:(e,t,n)=>{"use strict";n.d(t,{g:()=>ee,r:()=>X});var r=n(8164),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&f(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&f(e,n,t[n]);return e},u=(e,t)=>a(e,l(t)),p=(e,t,n)=>new Promise(((r,o)=>{var a=e=>{try{i(n.next(e))}catch(e){o(e)}},l=e=>{try{i(n.throw(e))}catch(e){o(e)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,l);i((n=n.apply(e,t)).next())}));const b={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class h{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||b,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,r){return r&&!this.debug?null:("string"==typeof e[0]&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new h(this.logger,d({prefix:`${this.prefix}:${e}:`},this.options))}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new h(this.logger,e)}}var m=new h;class g{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach((e=>{this.observers[e]=this.observers[e]||[],this.observers[e].push(t)})),this}off(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((e=>e!==t)):delete this.observers[e])}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.observers[e]&&[].concat(this.observers[e]).forEach((e=>{e(...n)})),this.observers["*"]&&[].concat(this.observers["*"]).forEach((t=>{t.apply(t,[e,...n])}))}}function v(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r}));return n.resolve=e,n.reject=t,n}function y(e){return null==e?"":""+e}function w(e,t,n){function r(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function o(){return!e||"string"==typeof e}const a="string"!=typeof t?[].concat(t):t.split(".");for(;a.length>1;){if(o())return{};const t=r(a.shift());!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{}}return o()?{}:{obj:e,k:r(a.shift())}}function k(e,t,n){const{obj:r,k:o}=w(e,t,Object);r[o]=n}function _(e,t){const{obj:n,k:r}=w(e,t);if(n)return n[r]}function x(e,t,n){for(const r in t)"__proto__"!==r&&"constructor"!==r&&(r in e?"string"==typeof e[r]||e[r]instanceof String||"string"==typeof t[r]||t[r]instanceof String?n&&(e[r]=t[r]):x(e[r],t[r],n):e[r]=t[r]);return e}function E(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function O(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(e=>S[e])):e}const T=[" ",",","?","!",";"];function L(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let o=e;for(let e=0;e<r.length;++e){if(!o)return;if("string"==typeof o[r[e]]&&e+1<r.length)return;if(void 0===o[r[e]]){let a=2,l=r.slice(e,e+a).join(n),i=o[l];for(;void 0===i&&r.length>e+a;)a++,l=r.slice(e,e+a).join(n),i=o[l];if(void 0===i)return;if(null===i)return null;if(t.endsWith(l)){if("string"==typeof i)return i;if(l&&"string"==typeof i[l])return i[l]}const c=r.slice(e+a).join(n);return c?L(i,c,n):void 0}o=o[r[e]]}return o}function A(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class $ extends g{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,a=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let l=[e,t];n&&"string"!=typeof n&&(l=l.concat(n)),n&&"string"==typeof n&&(l=l.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(l=e.split("."));const i=_(this.data,l);return i||!a||"string"!=typeof n?i:L(this.data&&this.data[e]&&this.data[e][t],n,o)}addResource(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const a=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator;let l=[e,t];n&&(l=l.concat(a?n.split(a):n)),e.indexOf(".")>-1&&(l=e.split("."),r=t,t=l[1]),this.addNamespaces(t),k(this.data,l,r),o.silent||this.emit("added",e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const r in n)"string"!=typeof n[r]&&"[object Array]"!==Object.prototype.toString.apply(n[r])||this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,r,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},l=[e,t];e.indexOf(".")>-1&&(l=e.split("."),r=n,n=t,t=l[1]),this.addNamespaces(t);let i=_(this.data,l)||{};r?x(i,n,o):i=d(d({},i),n),k(this.data,l,i),a.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?d({},this.getResource(e,t)):this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((e=>t[e]&&Object.keys(t[e]).length>0))}toJSON(){return this.data}}var N={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach((e=>{this.processors[e]&&(t=this.processors[e].process(t,n,r,o))})),t}};const C={};class z extends g{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),function(e,t,n){["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach((e=>{t[e]&&(n[e]=t[e])}))}(0,e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=m.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;const n=this.resolve(e,t);return n&&void 0!==n.res}extractFromKey(e,t){let n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");const r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const a=n&&e.indexOf(n)>-1,l=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||function(e,t,n){t=t||"",n=n||"";const r=T.filter((e=>t.indexOf(e)<0&&n.indexOf(e)<0));if(0===r.length)return!0;const o=new RegExp(`(${r.map((e=>"?"===e?"\\?":e)).join("|")})`);let a=!o.test(e);if(!a){const t=e.indexOf(n);t>0&&!o.test(e.substring(0,t))&&(a=!0)}return a}(e,n,r));if(a&&!l){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:o};const a=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(a[0])>-1)&&(o=a.shift()),e=a.join(r)}return"string"==typeof o&&(o=[o]),{key:e,namespaces:o}}translate(e,t,n){if("object"!=typeof t&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof t&&(t=d({},t)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);const r=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,o=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],t),i=l[l.length-1],c=t.lng||this.language,s=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(s){const e=t.nsSeparator||this.options.nsSeparator;return r?{res:`${i}${e}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:i,usedParams:this.getUsedParamsDetails(t)}:`${i}${e}${a}`}return r?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:i,usedParams:this.getUsedParamsDetails(t)}:a}const f=this.resolve(e,t);let p=f&&f.res;const b=f&&f.usedKey||a,h=f&&f.exactUsedKey||a,m=Object.prototype.toString.apply(p),g=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject;if(v&&p&&"string"!=typeof p&&"boolean"!=typeof p&&"number"!=typeof p&&["[object Number]","[object Function]","[object RegExp]"].indexOf(m)<0&&("string"!=typeof g||"[object Array]"!==m)){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,p,u(d({},t),{ns:l})):`key '${a} (${this.language})' returned an object instead of string.`;return r?(f.res=e,f.usedParams=this.getUsedParamsDetails(t),f):e}if(o){const e="[object Array]"===m,n=e?[]:{},r=e?h:b;for(const e in p)if(Object.prototype.hasOwnProperty.call(p,e)){const a=`${r}${o}${e}`;n[e]=this.translate(a,u(d({},t),{joinArrays:!1,ns:l})),n[e]===a&&(n[e]=p[e])}p=n}}else if(v&&"string"==typeof g&&"[object Array]"===m)p=p.join(g),p&&(p=this.extendTranslation(p,e,t,n));else{let r=!1,l=!1;const s=void 0!==t.count&&"string"!=typeof t.count,b=z.hasDefaultValue(t),h=s?this.pluralResolver.getSuffix(c,t.count,t):"",m=t.ordinal&&s?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",g=t[`defaultValue${h}`]||t[`defaultValue${m}`]||t.defaultValue;!this.isValidLookup(p)&&b&&(r=!0,p=g),this.isValidLookup(p)||(l=!0,p=a);const v=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&l?void 0:p,y=b&&g!==p&&this.options.updateMissing;if(l||r||y){if(this.logger.log(y?"updateKey":"missingKey",c,i,a,y?g:p),o){const e=this.resolve(a,u(d({},t),{keySeparator:!1}));e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const n=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&n&&n[0])for(let t=0;t<n.length;t++)e.push(n[t]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(t.lng||this.language):e.push(t.lng||this.language);const r=(e,n,r)=>{const o=b&&r!==p?r:v;this.options.missingKeyHandler?this.options.missingKeyHandler(e,i,n,o,y,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,i,n,o,y,t),this.emit("missingKey",e,i,n,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&s?e.forEach((e=>{this.pluralResolver.getSuffixes(e,t).forEach((n=>{r([e],a+n,t[`defaultValue${n}`]||g)}))})):r(e,a,g))}p=this.extendTranslation(p,e,t,f,n),l&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${i}:${a}`),(l||r)&&this.options.parseMissingKeyHandler&&(p="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${i}:${a}`:a,r?p:void 0):this.options.parseMissingKeyHandler(p))}return r?(f.res=p,f.usedParams=this.getUsedParamsDetails(t),f):p}extendTranslation(e,t,n,r,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,d(d({},this.options.interpolation.defaultVariables),n),n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(u(d({},n),{interpolation:d(d({},this.options.interpolation),n.interpolation)}));const l="string"==typeof e&&(n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let i;if(l){const t=e.match(this.interpolator.nestingRegexp);i=t&&t.length}let c=n.replace&&"string"!=typeof n.replace?n.replace:n;if(this.options.interpolation.defaultVariables&&(c=d(d({},this.options.interpolation.defaultVariables),c)),e=this.interpolator.interpolate(e,c,n.lng||this.language,n),l){const t=e.match(this.interpolator.nestingRegexp);i<(t&&t.length)&&(n.nest=!1)}!n.lng&&"v1"!==this.options.compatibilityAPI&&r&&r.res&&(n.lng=r.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,r=new Array(e),l=0;l<e;l++)r[l]=arguments[l];return o&&o[0]===r[0]&&!n.context?(a.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`),null):a.translate(...r,t)}),n)),n.interpolation&&this.interpolator.reset()}const l=n.postProcess||this.options.postProcess,i="string"==typeof l?[l]:l;return null!=e&&i&&i.length&&!1!==n.applyPostProcessor&&(e=N.handle(i,e,t,this.options&&this.options.postProcessPassResolved?d({i18nResolved:u(d({},r),{usedParams:this.getUsedParamsDetails(n)})},n):n,this)),e}resolve(e){let t,n,r,o,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((e=>{if(this.isValidLookup(t))return;const i=this.extractFromKey(e,l),c=i.key;n=c;let s=i.namespaces;this.options.fallbackNS&&(s=s.concat(this.options.fallbackNS));const f=void 0!==l.count&&"string"!=typeof l.count,d=f&&!l.ordinal&&0===l.count&&this.pluralResolver.shouldUseIntlApi(),u=void 0!==l.context&&("string"==typeof l.context||"number"==typeof l.context)&&""!==l.context,p=l.lngs?l.lngs:this.languageUtils.toResolveHierarchy(l.lng||this.language,l.fallbackLng);s.forEach((e=>{this.isValidLookup(t)||(a=e,!C[`${p[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(C[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((n=>{if(this.isValidLookup(t))return;o=n;const a=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(a,c,n,e,l);else{let e;f&&(e=this.pluralResolver.getSuffix(n,l.count,l));const t=`${this.options.pluralSeparator}zero`,r=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(a.push(c+e),l.ordinal&&0===e.indexOf(r)&&a.push(c+e.replace(r,this.options.pluralSeparator)),d&&a.push(c+t)),u){const n=`${c}${this.options.contextSeparator}${l.context}`;a.push(n),f&&(a.push(n+e),l.ordinal&&0===e.indexOf(r)&&a.push(n+e.replace(r,this.options.pluralSeparator)),d&&a.push(n+t))}}let i;for(;i=a.pop();)this.isValidLookup(t)||(r=i,t=this.getResource(n,e,i,l))})))}))})),{res:t,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&"string"!=typeof e.replace;let r=n?e.replace:e;if(n&&void 0!==e.count&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r=d(d({},this.options.interpolation.defaultVariables),r)),!n){r=d({},r);for(const e of t)delete r[e]}return r}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&"defaultValue"===t.substring(0,12)&&void 0!==e[t])return!0;return!1}}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}class j{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=m.create("languageUtils")}getScriptPartFromCode(e){if(!(e=A(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=A(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if("string"==typeof e&&e.indexOf("-")>-1){const t=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map((e=>e.toLowerCase())):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=P(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=P(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=P(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach((e=>{if(t)return;const n=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(n)||(t=n)})),!t&&this.options.supportedLngs&&e.forEach((e=>{if(t)return;const n=this.getLanguagePartFromCode(e);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find((e=>e===n?e:e.indexOf("-")<0&&n.indexOf("-")<0?void 0:0===e.indexOf(n)?e:void 0))})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],o=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return"string"==typeof e&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(e))):"string"==typeof e&&o(this.formatLanguageCode(e)),n.forEach((e=>{r.indexOf(e)<0&&o(this.formatLanguageCode(e))})),r}}let I=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],R={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}};const F=["v1","v2","v3"],B=["v4"],D={zero:0,one:1,two:2,few:3,many:4,other:5};class M{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=m.create("pluralResolver"),this.options.compatibilityJSON&&!B.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=function(){const e={};return I.forEach((t=>{t.lngs.forEach((n=>{e[n]={numbers:t.nr,plurals:R[t.fc]}}))})),e}()}addRule(e,t){this.rules[e]=t}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(A(e),{type:t.ordinal?"ordinal":"cardinal"})}catch(e){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map((e=>`${t}${e}`))}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort(((e,t)=>D[e]-D[t])).map((e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):n.numbers.map((n=>this.getSuffix(e,n,t))):[]}getSuffix(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:this.getSuffixRetroCompatible(r,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let r=e.numbers[n];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===r?r="plural":1===r&&(r=""));const o=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return"v1"===this.options.compatibilityJSON?1===r?"":"number"==typeof r?`_plural_${r.toString()}`:o():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?o():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!F.includes(this.options.compatibilityJSON)}}function U(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=function(e,t,n){const r=_(e,n);return void 0!==r?r:_(t,n)}(e,t,n);return!a&&o&&"string"==typeof n&&(a=L(e,n,r),void 0===a&&(a=L(t,n,r))),a}class K{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=m.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const t=e.interpolation;this.escape=void 0!==t.escape?t.escape:O,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?E(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?E(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?E(t.nestingPrefix):t.nestingPrefixEscaped||E("$t("),this.nestingSuffix=t.nestingSuffix?E(t.nestingSuffix):t.nestingSuffixEscaped||E(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(e,"g");const t=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(t,"g");const n=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(n,"g")}interpolate(e,t,n,r){let o,a,l;const i=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(e){return e.replace(/\$/g,"$$$$")}const s=e=>{if(e.indexOf(this.formatSeparator)<0){const o=U(t,i,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(o,void 0,n,u(d(d({},r),t),{interpolationkey:e})):o}const o=e.split(this.formatSeparator),a=o.shift().trim(),l=o.join(this.formatSeparator).trim();return this.format(U(t,i,a,this.options.keySeparator,this.options.ignoreJSONStructure),l,n,u(d(d({},r),t),{interpolationkey:a}))};this.resetRegExp();const f=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,p=r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>c(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?c(this.escape(e)):c(e)}].forEach((t=>{for(l=0;o=t.regex.exec(e);){const n=o[1].trim();if(a=s(n),void 0===a)if("function"==typeof f){const t=f(e,o,r);a="string"==typeof t?t:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a="";else{if(p){a=o[0];continue}this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=""}else"string"==typeof a||this.useRawValueToEscape||(a=y(a));const i=t.safeValue(a);if(e=e.replace(o[0],i),p?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=o[0].length):t.regex.lastIndex=0,l++,l>=this.maxReplaces)break}})),e}nest(e,t){let n,r,o,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function l(e,t){const n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;const r=e.split(new RegExp(`${n}[ ]*{`));let a=`{${r[1]}`;e=r[0],a=this.interpolate(a,o);const l=a.match(/'/g),i=a.match(/"/g);(l&&l.length%2==0&&!i||i.length%2!=0)&&(a=a.replace(/'/g,'"'));try{o=JSON.parse(a),t&&(o=d(d({},t),o))}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${a}`}return delete o.defaultValue,e}for(;n=this.nestingRegexp.exec(e);){let i=[];o=d({},a),o=o.replace&&"string"!=typeof o.replace?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(-1!==n[0].indexOf(this.formatSeparator)&&!/{.*}/.test(n[1])){const e=n[1].split(this.formatSeparator).map((e=>e.trim()));n[1]=e.shift(),i=e,c=!0}if(r=t(l.call(this,n[1].trim(),o),o),r&&n[0]===e&&"string"!=typeof r)return r;"string"!=typeof r&&(r=y(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),c&&(r=i.reduce(((e,t)=>this.format(e,t,a.lng,u(d({},a),{interpolationkey:n[1].trim()}))),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}function H(e){const t={};return function(n,r,o){const a=r+JSON.stringify(o);let l=t[a];return l||(l=e(A(r),o),t[a]=l),l(n)}}class V{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=m.create("formatter"),this.options=e,this.formats={number:H(((e,t)=>{const n=new Intl.NumberFormat(e,d({},t));return e=>n.format(e)})),currency:H(((e,t)=>{const n=new Intl.NumberFormat(e,u(d({},t),{style:"currency"}));return e=>n.format(e)})),datetime:H(((e,t)=>{const n=new Intl.DateTimeFormat(e,d({},t));return e=>n.format(e)})),relativetime:H(((e,t)=>{const n=new Intl.RelativeTimeFormat(e,d({},t));return e=>n.format(e,t.range||"day")})),list:H(((e,t)=>{const n=new Intl.ListFormat(e,d({},t));return e=>n.format(e)}))},this.init(e)}init(e){const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=H(t)}format(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.split(this.formatSeparator).reduce(((e,t)=>{const{formatName:o,formatOptions:a}=function(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);"currency"===t&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):"relativetime"===t&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach((e=>{if(!e)return;const[t,...r]=e.split(":"),o=r.join(":").trim().replace(/^'+|'+$/g,"");n[t.trim()]||(n[t.trim()]=o),"false"===o&&(n[t.trim()]=!1),"true"===o&&(n[t.trim()]=!0),isNaN(o)||(n[t.trim()]=parseInt(o,10))}))}return{formatName:t,formatOptions:n}}(t);if(this.formats[o]){let t=e;try{const l=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},i=l.locale||l.lng||r.locale||r.lng||n;t=this.formats[o](e,i,d(d(d({},a),r),l))}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${o}`),e}),e)}}class q extends g{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=m.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,r.backend,r)}queueLoad(e,t,n,r){const o={},a={},l={},i={};return e.forEach((e=>{let r=!0;t.forEach((t=>{const l=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[l]=2:this.state[l]<0||(1===this.state[l]?void 0===a[l]&&(a[l]=!0):(this.state[l]=1,r=!1,void 0===a[l]&&(a[l]=!0),void 0===o[l]&&(o[l]=!0),void 0===i[t]&&(i[t]=!0)))})),r||(l[e]=!0)})),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(i)}}loaded(e,t,n){const r=e.split("|"),o=r[0],a=r[1];t&&this.emit("failedLoading",o,a,t),n&&this.store.addResourceBundle(o,a,n),this.state[e]=t?-1:2;const l={};this.queue.forEach((n=>{(function(e,t,n,r){const{obj:o,k:a}=w(e,t,Object);o[a]=o[a]||[],o[a].push(n)})(n.loaded,[o],a),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach((e=>{l[e]||(l[e]={});const t=n.loaded[e];t.length&&t.forEach((t=>{void 0===l[e][t]&&(l[e][t]=!0)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",l),this.queue=this.queue.filter((e=>!e.done))}read(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:o,callback:a});this.readingCalls++;const l=(l,i)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}l&&i&&r<this.maxRetries?setTimeout((()=>{this.read.call(this,e,t,n,r+1,2*o,a)}),o):a(l,i)},i=this.backend[n].bind(this.backend);if(2!==i.length)return i(e,t,l);try{const n=i(e,t);n&&"function"==typeof n.then?n.then((e=>l(null,e))).catch(l):l(null,n)}catch(e){l(e)}}prepareLoading(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);const o=this.queueLoad(e,t,n,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.split("|"),r=n[0],o=n[1];this.read(r,o,"read",void 0,void 0,((n,a)=>{n&&this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${o} for language ${r}`,a),this.loaded(e,n,a)}))}saveMissing(e,t,n,r,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=n&&""!==n){if(this.backend&&this.backend.create){const i=u(d({},a),{isUpdate:o}),c=this.backend.create.bind(this.backend);if(c.length<6)try{let o;o=5===c.length?c(e,t,n,r,i):c(e,t,n,r),o&&"function"==typeof o.then?o.then((e=>l(null,e))).catch(l):l(null,o)}catch(e){l(e)}else c(e,t,n,r,l,i)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}}function Z(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let t={};if("object"==typeof e[1]&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const n=e[3]||e[2];Object.keys(n).forEach((e=>{t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function W(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function G(){}class Y extends g{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=W(e),this.services={},this.logger=m,this.modules={external:[]},function(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t=>{"function"==typeof e[t]&&(e[t]=e[t].bind(e))}))}(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout((()=>{this.init(e,t)}),0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;"function"==typeof t&&(n=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"==typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=Z();function o(e){return e?"function"==typeof e?new e:e:null}if(this.options=d(d(d({},r),this.options),W(t)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=d(d({},r.interpolation),this.options.interpolation)),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){let t;this.modules.logger?m.init(o(this.modules.logger),this.options):m.init(null,this.options),this.modules.formatter?t=this.modules.formatter:"undefined"!=typeof Intl&&(t=V);const n=new j(this.options);this.store=new $(this.options.resources,this.options);const a=this.services;a.logger=m,a.resourceStore=this.store,a.languageUtils=n,a.pluralResolver=new M(n,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!t||this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format||(a.formatter=o(t),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new K(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new q(o(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)})),this.modules.languageDetector&&(a.languageDetector=o(this.modules.languageDetector),a.languageDetector.init&&a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=o(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new z(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,n||(n=G),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((t=>{this[t]=function(){return e.store[t](...arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((t=>{this[t]=function(){return e.store[t](...arguments),e}}));const a=v(),l=()=>{const e=(e,t)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(t),n(e,t)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),a}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;const n="string"==typeof e?e:this.language;if("function"==typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&"cimode"===n.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],r=t=>{t&&"cimode"!==t&&this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)}))};n?r(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>r(e))),this.options.preload&&this.options.preload.forEach((e=>r(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)}))}else t(null)}reloadResources(e,t,n){const r=v();return e||(e=this.languages),t||(t=this.options.ns),n||(n=G),this.services.backendConnector.reload(e,t,(e=>{r.resolve(),n(e)})),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&N.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!(["cimode","dev"].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const r=v();this.emit("languageChanging",e);const o=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},a=(e,a)=>{a?(o(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit("languageChanged",a),this.logger.log("languageChanged",a)):this.isLanguageChangingTo=void 0,r.resolve((function(){return n.t(...arguments)})),t&&t(e,(function(){return n.t(...arguments)}))},l=t=>{e||t||!this.services.languageDetector||(t=[]);const n="string"==typeof t?t:this.services.languageUtils.getBestMatchFromCodes(t);n&&(this.language||o(n),this.translator.language||this.translator.changeLanguage(n),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(n)),this.loadResources(n,(e=>{a(e,n)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(e):l(this.services.languageDetector.detect()),r}getFixedT(e,t,n){var r=this;const o=function(e,t){let a;if("object"!=typeof t){for(var l=arguments.length,i=new Array(l>2?l-2:0),c=2;c<l;c++)i[c-2]=arguments[c];a=r.options.overloadTranslationOptionHandler([e,t].concat(i))}else a=d({},t);a.lng=a.lng||o.lng,a.lngs=a.lngs||o.lngs,a.ns=a.ns||o.ns,a.keyPrefix=a.keyPrefix||n||o.keyPrefix;const s=r.options.keySeparator||".";let f;return f=a.keyPrefix&&Array.isArray(e)?e.map((e=>`${a.keyPrefix}${s}${e}`)):a.keyPrefix?`${a.keyPrefix}${s}${e}`:e,r.t(f,a)};return"string"==typeof e?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=n,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;const a=(e,t)=>{const n=this.services.backendConnector.state[`${e}|${t}`];return-1===n||2===n};if(t.precheck){const e=t.precheck(this,a);if(void 0!==e)return e}return!(!this.hasResourceBundle(n,e)&&this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages)&&(!a(n,e)||r&&!a(o,e)))}loadNamespaces(e,t){const n=v();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)})),this.loadResources((e=>{n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=v();"string"==typeof e&&(e=[e]);const r=this.options.preload||[],o=e.filter((e=>r.indexOf(e)<0));return o.length?(this.options.preload=r.concat(o),this.loadResources((e=>{n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=this.services&&this.services.languageUtils||new j(Z());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new Y(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r=u(d(d({},this.options),e),{isClone:!0}),o=new Y(r);return void 0===e.debug&&void 0===e.prefix||(o.logger=o.logger.clone(e)),["store","services","language"].forEach((e=>{o[e]=this[e]})),o.services=d({},this.services),o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},n&&(o.store=new $(this.store.data,r),o.services.resourceStore=o.store),o.translator=new z(o.services,r),o.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];o.emit(e,...n)})),o.init(r,t),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Q=Y.createInstance();Q.createInstance=Y.createInstance;class J{constructor(){}static createInstance(e,t){return p(this,null,(function*(){return Array.isArray(t)?t=new Set(t):"function"==typeof t&&(t=new Set([t])),J.instance=new J,Q.isInitialized?yield Q.loadNamespaces(J.namespace):yield Q.init({ns:[J.namespace],lng:e}),void 0!==t&&t.forEach((e=>e(((e,t)=>(J.instance.addResourceBundle(e,t),e))))),this.instance}))}static addResourceBundle(e,t){Q.addResourceBundle(e,J.namespace,t,!0)}addResourceBundle(e,t){J.addResourceBundle(e,t)}translate(e,t){return Q.t(e,Object.assign({ns:J.namespace,count:null==t?void 0:t.count},null==t?void 0:t.placeholders))}}J.namespace="KoliBri";const X=(e,t,n)=>p(void 0,null,(function*(){var o,a;return void 0===(0,r.g)().I18n&&Object.defineProperty((0,r.g)(),"I18n",{value:yield J.createInstance(null!==(a=null===(o=null==n?void 0:n.translation)||void 0===o?void 0:o.name)&&void 0!==a?a:"de",null==n?void 0:n.translations),writable:!1}),yield(0,r._)(e,t,n)})),ee=()=>(0,r.g)().I18n},8125:(e,t,n)=>{"use strict";n.d(t,{S:()=>l,a:()=>i,b:()=>a,c:()=>r,h:()=>s,i:()=>o,p:()=>c,s:()=>f});const r=e=>"object"==typeof e&&null!==e,o=(e,t=0)=>"string"==typeof e&&e.length>=t,a=e=>{if("object"!=typeof e||null===e)return o(e,1);for(const t in e)if(!1===o(t,1))return!1;return!0},l=new Event("StateChange"),i=(e,t)=>{r(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))};let c="development";try{c="production"}catch(e){c="production"}const s=(e,t,n)=>{if(e&&t&&"string"==typeof n){const r=e.querySelector(`[slot="${n}"]`);r&&t.appendChild(r)}},f=e=>""===e},5050:(e,t,n)=>{"use strict";n.d(t,{T:()=>r});class r{constructor(e,t){this.document=e,this.options=t,this.toastContainerElement=this.document.createElement("kol-toast-container"),this.document.body.prepend(this.toastContainerElement)}static getInstance(e,t){let n=this.instances.get(e);return n||(n=new r(e,t),this.instances.set(e,n)),n}dispose(){const e=this.toastContainerElement;e?(this.toastContainerElement=void 0,e.remove()):console.warn("Toaster service is already disposed.")}enqueue(e){var t,n;if(this.toastContainerElement&&"function"==typeof this.toastContainerElement.enqueue)return!e.alertVariant&&(null===(t=this.options)||void 0===t?void 0:t.defaultAlertVariant)&&(e.alertVariant=null===(n=this.options)||void 0===n?void 0:n.defaultAlertVariant),this.toastContainerElement.enqueue(e)}closeAll(){this.toastContainerElement&&"function"==typeof this.toastContainerElement.closeAll&&this.toastContainerElement.closeAll()}}r.instances=new Map},2228:(e,t,n)=>{"use strict";var r=n(1209),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return r.isMemo(e)?l:i[e.$$typeof]||o}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=l;var s=Object.defineProperty,f=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(b){var o=p(n);o&&o!==b&&e(t,o,r)}var l=f(n);d&&(l=l.concat(d(n)));for(var i=c(t),h=c(n),m=0;m<l.length;++m){var g=l[m];if(!(a[g]||r&&r[g]||h&&h[g]||i&&i[g])){var v=u(n,g);try{s(t,g,v)}catch(e){}}}}return t}},6071:e=>{"use strict";function t(e){this._maxSize=e,this.clear()}t.prototype.clear=function(){this._size=0,this._values=Object.create(null)},t.prototype.get=function(e){return this._values[e]},t.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var n=/[^.^\]^[]+|(?=\[\]|\.\.)/g,r=/^\d+$/,o=/^\d/,a=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,l=/^\s*(['"]?)(.*?)(\1)\s*$/,i=new t(512),c=new t(512),s=new t(512);function f(e){return i.get(e)||i.set(e,d(e).map((function(e){return e.replace(l,"$2")})))}function d(e){return e.match(n)||[""]}function u(e){return"string"==typeof e&&e&&-1!==["'",'"'].indexOf(e.charAt(0))}function p(e){return!u(e)&&(function(e){return e.match(o)&&!e.match(r)}(e)||function(e){return a.test(e)}(e))}e.exports={Cache:t,split:d,normalizePath:f,setter:function(e){var t=f(e);return c.get(e)||c.set(e,(function(e,n){for(var r=0,o=t.length,a=e;r<o-1;){var l=t[r];if("__proto__"===l||"constructor"===l||"prototype"===l)return e;a=a[t[r++]]}a[t[r]]=n}))},getter:function(e,t){var n=f(e);return s.get(e)||s.set(e,(function(e){for(var r=0,o=n.length;r<o;){if(null==e&&t)return;e=e[n[r++]]}return e}))},join:function(e){return e.reduce((function(e,t){return e+(u(t)||r.test(t)?"["+t+"]":(e?".":"")+t)}),"")},forEach:function(e,t,n){!function(e,t,n){var r,o,a,l,i=e.length;for(o=0;o<i;o++)(r=e[o])&&(p(r)&&(r='"'+r+'"'),a=!(l=u(r))&&/^\d+$/.test(r),t.call(n,r,l,a,o,e))}(Array.isArray(e)?e:d(e),t,n)}}},6266:(e,t,n)=>{"use strict";var r=n(6761),o=n(2761);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,i={};function c(e,t){s(e,t),s(e+"Capture",t)}function s(e,t){for(i[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),d=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},b={};function h(e,t,n,r,o,a,l){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var g=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var o=m.hasOwnProperty(t)?m[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(b,e)||!d.call(p,e)&&(u.test(e)?b[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(g,v);m[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(g,v);m[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(g,v);m[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),_=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),T=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var P=Symbol.iterator;function j(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=P&&e[P]||e["@@iterator"])?e:null}var I,R=Object.assign;function F(e){if(void 0===I)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var B=!1;function D(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var o=t.stack.split("\n"),a=r.stack.split("\n"),l=o.length-1,i=a.length-1;1<=l&&0<=i&&o[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(o[l]!==a[i]){if(1!==l||1!==i)do{if(l--,0>--i||o[l]!==a[i]){var c="\n"+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=l&&0<=i);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function M(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return D(e.type,!1);case 11:return D(e.type.render,!1);case 1:return D(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case x:return"Fragment";case _:return"Portal";case S:return"Profiler";case E:return"StrictMode";case A:return"Suspense";case $:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case O:return(e._context.displayName||"Context")+".Provider";case L:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return U(e(t))}catch(e){}}return null}function K(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Z(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function W(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function X(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&W(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ae(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function le(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ie(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ce(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ie(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var se,fe,de=(fe=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((se=se||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=se.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return fe(e,t)}))}:fe);function ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach((function(e){be.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ge=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ge[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,xe=null,Ee=null;function Se(e){if(e=wo(e)){if("function"!=typeof _e)throw Error(a(280));var t=e.stateNode;t&&(t=_o(t),_e(e.stateNode,e.type,t))}}function Oe(e){xe?Ee?Ee.push(e):Ee=[e]:xe=e}function Te(){if(xe){var e=xe,t=Ee;if(Ee=xe=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}function Le(e,t){return e(t)}function Ae(){}var $e=!1;function Ne(e,t,n){if($e)return e(t,n);$e=!0;try{return Le(e,t,n)}finally{$e=!1,(null!==xe||null!==Ee)&&(Ae(),Te())}}function Ce(e,t){var n=e.stateNode;if(null===n)return null;var r=_o(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(a(231,t,typeof n));return n}var ze=!1;if(f)try{var Pe={};Object.defineProperty(Pe,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Pe,Pe),window.removeEventListener("test",Pe,Pe)}catch(fe){ze=!1}function je(e,t,n,r,o,a,l,i,c){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){this.onError(e)}}var Ie=!1,Re=null,Fe=!1,Be=null,De={onError:function(e){Ie=!0,Re=e}};function Me(e,t,n,r,o,a,l,i,c){Ie=!1,Re=null,je.apply(De,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ke(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function He(e){if(Ue(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var l=o.alternate;if(null===l){if(null!==(r=o.return)){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return He(o),e;if(l===r)return He(o),t;l=l.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,c=o.child;c;){if(c===n){i=!0,n=o,r=l;break}if(c===r){i=!0,r=o,n=l;break}c=c.sibling}if(!i){for(c=l.child;c;){if(c===n){i=!0,n=l,r=o;break}if(c===r){i=!0,r=l,n=o;break}c=c.sibling}if(!i)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ze=o.unstable_scheduleCallback,We=o.unstable_cancelCallback,Ge=o.unstable_shouldYield,Ye=o.unstable_requestPaint,Qe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Xe=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,at=null,lt=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(it(e)/ct|0)|0},it=Math.log,ct=Math.LN2,st=64,ft=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ut(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,l=268435455&n;if(0!==l){var i=l&~o;0!==i?r=dt(i):0!=(a&=l)&&(r=dt(a))}else 0!=(l=n&~o)?r=dt(l):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!=(4194240&a)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-lt(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function bt(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=st;return 0==(4194240&(st<<=1))&&(st=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-lt(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var yt=0;function wt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var kt,_t,xt,Et,St,Ot=!1,Tt=[],Lt=null,At=null,$t=null,Nt=new Map,Ct=new Map,zt=[],Pt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jt(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(t.pointerId)}}function It(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&null!==(t=wo(t))&&_t(t),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Rt(e){var t=yo(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ke(n)))return e.blockedOn=t,void St(e.priority,(function(){xt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=wo(n))&&_t(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function Bt(e,t,n){Ft(e)&&n.delete(t)}function Dt(){Ot=!1,null!==Lt&&Ft(Lt)&&(Lt=null),null!==At&&Ft(At)&&(At=null),null!==$t&&Ft($t)&&($t=null),Nt.forEach(Bt),Ct.forEach(Bt)}function Mt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ot||(Ot=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Dt)))}function Ut(e){function t(t){return Mt(t,e)}if(0<Tt.length){Mt(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Lt&&Mt(Lt,e),null!==At&&Mt(At,e),null!==$t&&Mt($t,e),Nt.forEach(t),Ct.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Rt(n),null===n.blockedOn&&zt.shift()}var Kt=w.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var o=yt,a=Kt.transition;Kt.transition=null;try{yt=1,Zt(e,t,n,r)}finally{yt=o,Kt.transition=a}}function qt(e,t,n,r){var o=yt,a=Kt.transition;Kt.transition=null;try{yt=4,Zt(e,t,n,r)}finally{yt=o,Kt.transition=a}}function Zt(e,t,n,r){if(Ht){var o=Gt(e,t,n,r);if(null===o)Hr(e,t,r,Wt,n),jt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Lt=It(Lt,e,t,n,r,o),!0;case"dragenter":return At=It(At,e,t,n,r,o),!0;case"mouseover":return $t=It($t,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Nt.set(a,It(Nt.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Ct.set(a,It(Ct.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(jt(e,r),4&t&&-1<Pt.indexOf(e)){for(;null!==o;){var a=wo(o);if(null!==a&&kt(a),null===(a=Gt(e,t,n,r))&&Hr(e,t,r,Wt,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Wt=null;function Gt(e,t,n,r){if(Wt=null,null!==(e=yo(e=ke(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ke(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Xe:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Xt=null;function en(){if(Xt)return Xt;var e,t,n=Jt,r=n.length,o="value"in Qt?Qt.value:Qt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===o[a-t];t++);return Xt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,a){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,cn,sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fn=on(sn),dn=R({},sn,{view:0,detail:0}),un=on(dn),pn=R({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cn&&(cn&&"mousemove"===e.type?(an=e.screenX-cn.screenX,ln=e.screenY-cn.screenY):ln=an=0,cn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),bn=on(pn),hn=on(R({},pn,{dataTransfer:0})),mn=on(R({},dn,{relatedTarget:0})),gn=on(R({},sn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=R({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(vn),wn=on(R({},sn,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_n={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=xn[e])&&!!t[e]}function Sn(){return En}var On=R({},dn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?_n[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tn=on(On),Ln=on(R({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),An=on(R({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn})),$n=on(R({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=R({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cn=on(Nn),zn=[9,13,27,32],Pn=f&&"CompositionEvent"in window,jn=null;f&&"documentMode"in document&&(jn=document.documentMode);var In=f&&"TextEvent"in window&&!jn,Rn=f&&(!Pn||jn&&8<jn&&11>=jn),Fn=String.fromCharCode(32),Bn=!1;function Dn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1,Kn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Kn[e.type]:"textarea"===t}function Vn(e,t,n,r){Oe(r),0<(t=qr(t,"onChange")).length&&(n=new fn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Zn=null;function Wn(e){Fr(e,0)}function Gn(e){if(Z(ko(e)))return e}function Yn(e,t){if("change"===e)return t}var Qn=!1;if(f){var Jn;if(f){var Xn="oninput"in document;if(!Xn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Xn="function"==typeof er.oninput}Jn=Xn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Zn=qn=null)}function nr(e){if("value"===e.propertyName&&Gn(Zn)){var t=[];Vn(t,Zn,e,ke(e)),Ne(Wn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Zn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Zn)}function ar(e,t){if("click"===e)return Gn(t)}function lr(e,t){if("input"===e||"change"===e)return Gn(t)}var ir="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function cr(e,t){if(ir(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!ir(e[o],t[o]))return!1}return!0}function sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fr(e,t){var n,r=sr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=sr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ur(){for(var e=window,t=W();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=W((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function br(e){var t=ur(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=fr(n,a);var l=fr(n,r);o&&l&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=f&&"documentMode"in document&&11>=document.documentMode,mr=null,gr=null,vr=null,yr=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==mr||mr!==W(r)||(r="selectionStart"in(r=mr)&&pr(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&cr(vr,r)||(vr=r,0<(r=qr(gr,"onSelect")).length&&(t=new fn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},xr={},Er={};function Sr(e){if(xr[e])return xr[e];if(!_r[e])return e;var t,n=_r[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return xr[e]=n[t];return e}f&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);var Or=Sr("animationend"),Tr=Sr("animationiteration"),Lr=Sr("animationstart"),Ar=Sr("transitionend"),$r=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){$r.set(e,t),c(t,[e])}for(var zr=0;zr<Nr.length;zr++){var Pr=Nr[zr];Cr(Pr.toLowerCase(),"on"+(Pr[0].toUpperCase()+Pr.slice(1)))}Cr(Or,"onAnimationEnd"),Cr(Tr,"onAnimationIteration"),Cr(Lr,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(Ar,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function Rr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,l,i,c,s){if(Me.apply(this,arguments),Ie){if(!Ie)throw Error(a(198));var f=Re;Ie=!1,Re=null,Fe||(Fe=!0,Be=f)}}(r,t,void 0,e),e.currentTarget=null}function Fr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],c=i.instance,s=i.currentTarget;if(i=i.listener,c!==a&&o.isPropagationStopped())break e;Rr(o,i,s),a=c}else for(l=0;l<r.length;l++){if(c=(i=r[l]).instance,s=i.currentTarget,i=i.listener,c!==a&&o.isPropagationStopped())break e;Rr(o,i,s),a=c}}}if(Fe)throw e=Be,Fe=!1,Be=null,e}function Br(e,t){var n=t[mo];void 0===n&&(n=t[mo]=new Set);var r=e+"__bubble";n.has(r)||(Kr(t,e,2,!1),n.add(r))}function Dr(e,t,n){var r=0;t&&(r|=4),Kr(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Mr]){e[Mr]=!0,l.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||Dr(t,!1,e),Dr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Mr]||(t[Mr]=!0,Dr("selectionchange",!1,t))}}function Kr(e,t,n,r){switch(Yt(t)){case 1:var o=Vt;break;case 4:o=qt;break;default:o=Zt}n=o.bind(null,t,n,e),o=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,o){var a=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var l=r.tag;if(3===l||4===l){var i=r.stateNode.containerInfo;if(i===o||8===i.nodeType&&i.parentNode===o)break;if(4===l)for(l=r.return;null!==l;){var c=l.tag;if((3===c||4===c)&&((c=l.stateNode.containerInfo)===o||8===c.nodeType&&c.parentNode===o))return;l=l.return}for(;null!==i;){if(null===(l=yo(i)))return;if(5===(c=l.tag)||6===c){r=a=l;continue e}i=i.parentNode}}r=r.return}Ne((function(){var r=a,o=ke(n),l=[];e:{var i=$r.get(e);if(void 0!==i){var c=fn,s=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":c=Tn;break;case"focusin":s="focus",c=mn;break;case"focusout":s="blur",c=mn;break;case"beforeblur":case"afterblur":c=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=An;break;case Or:case Tr:case Lr:c=gn;break;case Ar:c=$n;break;case"scroll":c=un;break;case"wheel":c=Cn;break;case"copy":case"cut":case"paste":c=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Ln}var f=0!=(4&t),d=!f&&"scroll"===e,u=f?null!==i?i+"Capture":null:i;f=[];for(var p,b=r;null!==b;){var h=(p=b).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==u&&null!=(h=Ce(b,u))&&f.push(Vr(b,h,p))),d)break;b=b.return}0<f.length&&(i=new c(i,s,null,n,o),l.push({event:i,listeners:f}))}}if(0==(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===we||!(s=n.relatedTarget||n.fromElement)||!yo(s)&&!s[ho])&&(c||i)&&(i=o.window===o?o:(i=o.ownerDocument)?i.defaultView||i.parentWindow:window,c?(c=r,null!==(s=(s=n.relatedTarget||n.toElement)?yo(s):null)&&(s!==(d=Ue(s))||5!==s.tag&&6!==s.tag)&&(s=null)):(c=null,s=r),c!==s)){if(f=bn,h="onMouseLeave",u="onMouseEnter",b="mouse","pointerout"!==e&&"pointerover"!==e||(f=Ln,h="onPointerLeave",u="onPointerEnter",b="pointer"),d=null==c?i:ko(c),p=null==s?i:ko(s),(i=new f(h,b+"leave",c,n,o)).target=d,i.relatedTarget=p,h=null,yo(o)===r&&((f=new f(u,b+"enter",s,n,o)).target=p,f.relatedTarget=d,h=f),d=h,c&&s)e:{for(u=s,b=0,p=f=c;p;p=Zr(p))b++;for(p=0,h=u;h;h=Zr(h))p++;for(;0<b-p;)f=Zr(f),b--;for(;0<p-b;)u=Zr(u),p--;for(;b--;){if(f===u||null!==u&&f===u.alternate)break e;f=Zr(f),u=Zr(u)}f=null}else f=null;null!==c&&Wr(l,i,c,f,!1),null!==s&&null!==d&&Wr(l,d,s,f,!0)}if("select"===(c=(i=r?ko(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===c&&"file"===i.type)var m=Yn;else if(Hn(i))if(Qn)m=lr;else{m=or;var g=rr}else(c=i.nodeName)&&"input"===c.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(m=ar);switch(m&&(m=m(e,r))?Vn(l,m,n,o):(g&&g(e,i,r),"focusout"===e&&(g=i._wrapperState)&&g.controlled&&"number"===i.type&&ee(i,"number",i.value)),g=r?ko(r):window,e){case"focusin":(Hn(g)||"true"===g.contentEditable)&&(mr=g,gr=r,vr=null);break;case"focusout":vr=gr=mr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,wr(l,n,o);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":wr(l,n,o)}var v;if(Pn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Dn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Rn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(v=en()):(Jt="value"in(Qt=o)?Qt.value:Qt.textContent,Un=!0)),0<(g=qr(r,y)).length&&(y=new wn(y,e,null,n,o),l.push({event:y,listeners:g}),(v||null!==(v=Mn(n)))&&(y.data=v))),(v=In?function(e,t){switch(e){case"compositionend":return Mn(t);case"keypress":return 32!==t.which?null:(Bn=!0,Fn);case"textInput":return(e=t.data)===Fn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Pn&&Dn(e,t)?(e=en(),Xt=Jt=Qt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rn&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=qr(r,"onBeforeInput")).length&&(o=new wn("onBeforeInput","beforeinput",null,n,o),l.push({event:o,listeners:r}),o.data=v)}Fr(l,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ce(e,n))&&r.unshift(Vr(e,a,o)),null!=(a=Ce(e,t))&&r.push(Vr(e,a,o))),e=e.return}return r}function Zr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Wr(e,t,n,r,o){for(var a=t._reactName,l=[];null!==n&&n!==r;){var i=n,c=i.alternate,s=i.stateNode;if(null!==c&&c===r)break;5===i.tag&&null!==s&&(i=s,o?null!=(c=Ce(n,a))&&l.unshift(Vr(n,c,i)):o||null!=(c=Ce(n,a))&&l.push(Vr(n,c,i))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var Gr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Qr(e){return("string"==typeof e?e:""+e).replace(Gr,"\n").replace(Yr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(a(425))}function Xr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"==typeof setTimeout?setTimeout:void 0,oo="function"==typeof clearTimeout?clearTimeout:void 0,ao="function"==typeof Promise?Promise:void 0,lo="function"==typeof queueMicrotask?queueMicrotask:void 0!==ao?function(e){return ao.resolve(null).then(e).catch(io)}:ro;function io(e){setTimeout((function(){throw e}))}function co(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ut(t)}function so(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function fo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var uo=Math.random().toString(36).slice(2),po="__reactFiber$"+uo,bo="__reactProps$"+uo,ho="__reactContainer$"+uo,mo="__reactEvents$"+uo,go="__reactListeners$"+uo,vo="__reactHandles$"+uo;function yo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ho]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=fo(e);null!==e;){if(n=e[po])return n;e=fo(e)}return t}n=(e=n).parentNode}return null}function wo(e){return!(e=e[po]||e[ho])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ko(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function _o(e){return e[bo]||null}var xo=[],Eo=-1;function So(e){return{current:e}}function Oo(e){0>Eo||(e.current=xo[Eo],xo[Eo]=null,Eo--)}function To(e,t){Eo++,xo[Eo]=e.current,e.current=t}var Lo={},Ao=So(Lo),$o=So(!1),No=Lo;function Co(e,t){var n=e.type.contextTypes;if(!n)return Lo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zo(e){return null!=e.childContextTypes}function Po(){Oo($o),Oo(Ao)}function jo(e,t,n){if(Ao.current!==Lo)throw Error(a(168));To(Ao,t),To($o,n)}function Io(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(a(108,K(e)||"Unknown",o));return R({},n,r)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lo,No=Ao.current,To(Ao,e),To($o,$o.current),!0}function Fo(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Io(e,t,No),r.__reactInternalMemoizedMergedChildContext=e,Oo($o),Oo(Ao),To(Ao,e)):Oo($o),To($o,n)}var Bo=null,Do=!1,Mo=!1;function Uo(e){null===Bo?Bo=[e]:Bo.push(e)}function Ko(){if(!Mo&&null!==Bo){Mo=!0;var e=0,t=yt;try{var n=Bo;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Bo=null,Do=!1}catch(t){throw null!==Bo&&(Bo=Bo.slice(e+1)),Ze(Xe,Ko),t}finally{yt=t,Mo=!1}}return null}var Ho=[],Vo=0,qo=null,Zo=0,Wo=[],Go=0,Yo=null,Qo=1,Jo="";function Xo(e,t){Ho[Vo++]=Zo,Ho[Vo++]=qo,qo=e,Zo=t}function ea(e,t,n){Wo[Go++]=Qo,Wo[Go++]=Jo,Wo[Go++]=Yo,Yo=e;var r=Qo;e=Jo;var o=32-lt(r)-1;r&=~(1<<o),n+=1;var a=32-lt(t)+o;if(30<a){var l=o-o%5;a=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Qo=1<<32-lt(t)+o|n<<o|r,Jo=a+e}else Qo=1<<a|n<<o|r,Jo=e}function ta(e){null!==e.return&&(Xo(e,1),ea(e,1,0))}function na(e){for(;e===qo;)qo=Ho[--Vo],Ho[Vo]=null,Zo=Ho[--Vo],Ho[Vo]=null;for(;e===Yo;)Yo=Wo[--Go],Wo[Go]=null,Jo=Wo[--Go],Wo[Go]=null,Qo=Wo[--Go],Wo[Go]=null}var ra=null,oa=null,aa=!1,la=null;function ia(e,t){var n=Cs(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ca(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,oa=so(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yo?{id:Qo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Cs(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,oa=null,!0);default:return!1}}function sa(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function fa(e){if(aa){var t=oa;if(t){var n=t;if(!ca(e,t)){if(sa(e))throw Error(a(418));t=so(n.nextSibling);var r=ra;t&&ca(e,t)?ia(r,n):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(sa(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function ua(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oa)){if(sa(e))throw pa(),Error(a(418));for(;t;)ia(e,t),t=so(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oa=so(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oa=null}}else oa=ra?so(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=oa;e;)e=so(e.nextSibling)}function ba(){oa=ra=null,aa=!1}function ha(e){null===la?la=[e]:la.push(e)}var ma=w.ReactCurrentBatchConfig;function ga(e,t){if(e&&e.defaultProps){for(var n in t=R({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var va=So(null),ya=null,wa=null,ka=null;function _a(){ka=wa=ya=null}function xa(e){var t=va.current;Oo(va),e._currentValue=t}function Ea(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sa(e,t){ya=e,ka=wa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(wi=!0),e.firstContext=null)}function Oa(e){var t=e._currentValue;if(ka!==e)if(e={context:e,memoizedValue:t,next:null},null===wa){if(null===ya)throw Error(a(308));wa=e,ya.dependencies={lanes:0,firstContext:e}}else wa=wa.next=e;return t}var Ta=null;function La(e){null===Ta?Ta=[e]:Ta.push(e)}function Aa(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,La(t)):(n.next=o.next,o.next=n),t.interleaved=n,$a(e,r)}function $a(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Na=!1;function Ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function za(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ja(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Ac)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$a(e,n)}return null===(o=r.interleaved)?(t.next=t,La(r)):(t.next=o.next,o.next=t),r.interleaved=t,$a(e,n)}function Ia(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ra(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=l:a=a.next=l,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fa(e,t,n,r){var o=e.updateQueue;Na=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,i=o.shared.pending;if(null!==i){o.shared.pending=null;var c=i,s=c.next;c.next=null,null===l?a=s:l.next=s,l=c;var f=e.alternate;null!==f&&(i=(f=f.updateQueue).lastBaseUpdate)!==l&&(null===i?f.firstBaseUpdate=s:i.next=s,f.lastBaseUpdate=c)}if(null!==a){var d=o.baseState;for(l=0,f=s=c=null,i=a;;){var u=i.lane,p=i.eventTime;if((r&u)===u){null!==f&&(f=f.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,h=i;switch(u=t,p=n,h.tag){case 1:if("function"==typeof(b=h.payload)){d=b.call(p,d,u);break e}d=b;break e;case 3:b.flags=-65537&b.flags|128;case 0:if(null==(u="function"==typeof(b=h.payload)?b.call(p,d,u):b))break e;d=R({},d,u);break e;case 2:Na=!0}}null!==i.callback&&0!==i.lane&&(e.flags|=64,null===(u=o.effects)?o.effects=[i]:u.push(i))}else p={eventTime:p,lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===f?(s=f=p,c=d):f=f.next=p,l|=u;if(null===(i=i.next)){if(null===(i=o.shared.pending))break;i=(u=i).next,u.next=null,o.lastBaseUpdate=u,o.shared.pending=null}}if(null===f&&(c=d),o.baseState=c,o.firstBaseUpdate=s,o.lastBaseUpdate=f,null!==(t=o.shared.interleaved)){o=t;do{l|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);Rc|=l,e.lanes=l,e.memoizedState=d}}function Ba(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!=typeof o)throw Error(a(191,o));o.call(r)}}}var Da=(new r.Component).refs;function Ma(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:R({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Ua={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ts(),o=ns(e),a=Pa(r,o);a.payload=t,null!=n&&(a.callback=n),null!==(t=ja(e,a,o))&&(rs(t,e,o,r),Ia(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ts(),o=ns(e),a=Pa(r,o);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=ja(e,a,o))&&(rs(t,e,o,r),Ia(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ts(),r=ns(e),o=Pa(n,r);o.tag=2,null!=t&&(o.callback=t),null!==(t=ja(e,o,r))&&(rs(t,e,r,n),Ia(t,e,r))}};function Ka(e,t,n,r,o,a,l){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,l):!(t.prototype&&t.prototype.isPureReactComponent&&cr(n,r)&&cr(o,a))}function Ha(e,t,n){var r=!1,o=Lo,a=t.contextType;return"object"==typeof a&&null!==a?a=Oa(a):(o=zo(t)?No:Ao.current,a=(r=null!=(r=t.contextTypes))?Co(e,o):Lo),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Ua,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Va(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ua.enqueueReplaceState(t,t.state,null)}function qa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Da,Ca(e);var a=t.contextType;"object"==typeof a&&null!==a?o.context=Oa(a):(a=zo(t)?No:Ao.current,o.context=Co(e,a)),o.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(Ma(e,t,a,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&Ua.enqueueReplaceState(o,o.state,null),Fa(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4194308)}function Za(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,l=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===l?t.ref:((t=function(e){var t=o.refs;t===Da&&(t=o.refs={}),null===e?delete t[l]:t[l]=e})._stringRef=l,t)}if("string"!=typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Wa(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ga(e){return(0,e._init)(e._payload)}function Ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Ps(e,t)).index=0,e.sibling=null,e}function l(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function c(e,t,n,r){return null===t||6!==t.tag?((t=Fs(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function s(e,t,n,r){var a=n.type;return a===x?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===C&&Ga(a)===t.type)?((r=o(t,n.props)).ref=Za(e,t,n),r.return=e,r):((r=js(n.type,n.key,n.props,null,e.mode,r)).ref=Za(e,t,n),r.return=e,r)}function f(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Bs(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Is(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Fs(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case k:return(n=js(t.type,t.key,t.props,null,e.mode,n)).ref=Za(e,null,t),n.return=e,n;case _:return(t=Bs(t,e.mode,n)).return=e,t;case C:return u(e,(0,t._init)(t._payload),n)}if(te(t)||j(t))return(t=Is(t,e.mode,n,null)).return=e,t;Wa(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==o?null:c(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===o?s(e,t,n,r):null;case _:return n.key===o?f(e,t,n,r):null;case C:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||j(n))return null!==o?null:d(e,t,n,r,null);Wa(e,n)}return null}function b(e,t,n,r,o){if("string"==typeof r&&""!==r||"number"==typeof r)return c(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case k:return s(t,e=e.get(null===r.key?n:r.key)||null,r,o);case _:return f(t,e=e.get(null===r.key?n:r.key)||null,r,o);case C:return b(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||j(r))return d(t,e=e.get(n)||null,r,o,null);Wa(t,r)}return null}return function c(s,f,d,h){if("object"==typeof d&&null!==d&&d.type===x&&null===d.key&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case k:e:{for(var m=d.key,g=f;null!==g;){if(g.key===m){if((m=d.type)===x){if(7===g.tag){n(s,g.sibling),(f=o(g,d.props.children)).return=s,s=f;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===C&&Ga(m)===g.type){n(s,g.sibling),(f=o(g,d.props)).ref=Za(s,g,d),f.return=s,s=f;break e}n(s,g);break}t(s,g),g=g.sibling}d.type===x?((f=Is(d.props.children,s.mode,h,d.key)).return=s,s=f):((h=js(d.type,d.key,d.props,null,s.mode,h)).ref=Za(s,f,d),h.return=s,s=h)}return i(s);case _:e:{for(g=d.key;null!==f;){if(f.key===g){if(4===f.tag&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){n(s,f.sibling),(f=o(f,d.children||[])).return=s,s=f;break e}n(s,f);break}t(s,f),f=f.sibling}(f=Bs(d,s.mode,h)).return=s,s=f}return i(s);case C:return c(s,f,(g=d._init)(d._payload),h)}if(te(d))return function(o,a,i,c){for(var s=null,f=null,d=a,h=a=0,m=null;null!==d&&h<i.length;h++){d.index>h?(m=d,d=null):m=d.sibling;var g=p(o,d,i[h],c);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(o,d),a=l(g,a,h),null===f?s=g:f.sibling=g,f=g,d=m}if(h===i.length)return n(o,d),aa&&Xo(o,h),s;if(null===d){for(;h<i.length;h++)null!==(d=u(o,i[h],c))&&(a=l(d,a,h),null===f?s=d:f.sibling=d,f=d);return aa&&Xo(o,h),s}for(d=r(o,d);h<i.length;h++)null!==(m=b(d,o,h,i[h],c))&&(e&&null!==m.alternate&&d.delete(null===m.key?h:m.key),a=l(m,a,h),null===f?s=m:f.sibling=m,f=m);return e&&d.forEach((function(e){return t(o,e)})),aa&&Xo(o,h),s}(s,f,d,h);if(j(d))return function(o,i,c,s){var f=j(c);if("function"!=typeof f)throw Error(a(150));if(null==(c=f.call(c)))throw Error(a(151));for(var d=f=null,h=i,m=i=0,g=null,v=c.next();null!==h&&!v.done;m++,v=c.next()){h.index>m?(g=h,h=null):g=h.sibling;var y=p(o,h,v.value,s);if(null===y){null===h&&(h=g);break}e&&h&&null===y.alternate&&t(o,h),i=l(y,i,m),null===d?f=y:d.sibling=y,d=y,h=g}if(v.done)return n(o,h),aa&&Xo(o,m),f;if(null===h){for(;!v.done;m++,v=c.next())null!==(v=u(o,v.value,s))&&(i=l(v,i,m),null===d?f=v:d.sibling=v,d=v);return aa&&Xo(o,m),f}for(h=r(o,h);!v.done;m++,v=c.next())null!==(v=b(h,o,m,v.value,s))&&(e&&null!==v.alternate&&h.delete(null===v.key?m:v.key),i=l(v,i,m),null===d?f=v:d.sibling=v,d=v);return e&&h.forEach((function(e){return t(o,e)})),aa&&Xo(o,m),f}(s,f,d,h);Wa(s,d)}return"string"==typeof d&&""!==d||"number"==typeof d?(d=""+d,null!==f&&6===f.tag?(n(s,f.sibling),(f=o(f,d)).return=s,s=f):(n(s,f),(f=Fs(d,s.mode,h)).return=s,s=f),i(s)):n(s,f)}}var Qa=Ya(!0),Ja=Ya(!1),Xa={},el=So(Xa),tl=So(Xa),nl=So(Xa);function rl(e){if(e===Xa)throw Error(a(174));return e}function ol(e,t){switch(To(nl,t),To(tl,e),To(el,Xa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ce(null,"");break;default:t=ce(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Oo(el),To(el,t)}function al(){Oo(el),Oo(tl),Oo(nl)}function ll(e){rl(nl.current);var t=rl(el.current),n=ce(t,e.type);t!==n&&(To(tl,e),To(el,n))}function il(e){tl.current===e&&(Oo(el),Oo(tl))}var cl=So(0);function sl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fl=[];function dl(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var ul=w.ReactCurrentDispatcher,pl=w.ReactCurrentBatchConfig,bl=0,hl=null,ml=null,gl=null,vl=!1,yl=!1,wl=0,kl=0;function _l(){throw Error(a(321))}function xl(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ir(e[n],t[n]))return!1;return!0}function El(e,t,n,r,o,l){if(bl=l,hl=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ul.current=null===e||null===e.memoizedState?ii:ci,e=n(r,o),yl){l=0;do{if(yl=!1,wl=0,25<=l)throw Error(a(301));l+=1,gl=ml=null,t.updateQueue=null,ul.current=si,e=n(r,o)}while(yl)}if(ul.current=li,t=null!==ml&&null!==ml.next,bl=0,gl=ml=hl=null,vl=!1,t)throw Error(a(300));return e}function Sl(){var e=0!==wl;return wl=0,e}function Ol(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===gl?hl.memoizedState=gl=e:gl=gl.next=e,gl}function Tl(){if(null===ml){var e=hl.alternate;e=null!==e?e.memoizedState:null}else e=ml.next;var t=null===gl?hl.memoizedState:gl.next;if(null!==t)gl=t,ml=e;else{if(null===e)throw Error(a(310));e={memoizedState:(ml=e).memoizedState,baseState:ml.baseState,baseQueue:ml.baseQueue,queue:ml.queue,next:null},null===gl?hl.memoizedState=gl=e:gl=gl.next=e}return gl}function Ll(e,t){return"function"==typeof t?t(e):t}function Al(e){var t=Tl(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=ml,o=r.baseQueue,l=n.pending;if(null!==l){if(null!==o){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(null!==o){l=o.next,r=r.baseState;var c=i=null,s=null,f=l;do{var d=f.lane;if((bl&d)===d)null!==s&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var u={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};null===s?(c=s=u,i=r):s=s.next=u,hl.lanes|=d,Rc|=d}f=f.next}while(null!==f&&f!==l);null===s?i=r:s.next=c,ir(r,t.memoizedState)||(wi=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{l=o.lane,hl.lanes|=l,Rc|=l,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=Tl(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(null!==o){n.pending=null;var i=o=o.next;do{l=e(l,i.action),i=i.next}while(i!==o);ir(l,t.memoizedState)||(wi=!0),t.memoizedState=l,null===t.baseQueue&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Nl(){}function Cl(e,t){var n=hl,r=Tl(),o=t(),l=!ir(r.memoizedState,o);if(l&&(r.memoizedState=o,wi=!0),r=r.queue,Hl(jl.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||null!==gl&&1&gl.memoizedState.tag){if(n.flags|=2048,Bl(9,Pl.bind(null,n,r,o,t),void 0,null),null===$c)throw Error(a(349));0!=(30&bl)||zl(n,t,o)}return o}function zl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=hl.updateQueue)?(t={lastEffect:null,stores:null},hl.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Pl(e,t,n,r){t.value=n,t.getSnapshot=r,Il(t)&&Rl(e)}function jl(e,t,n){return n((function(){Il(t)&&Rl(e)}))}function Il(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ir(e,n)}catch(e){return!0}}function Rl(e){var t=$a(e,1);null!==t&&rs(t,e,1,-1)}function Fl(e){var t=Ol();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:e},t.queue=e,e=e.dispatch=ni.bind(null,hl,e),[t.memoizedState,e]}function Bl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=hl.updateQueue)?(t={lastEffect:null,stores:null},hl.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Dl(){return Tl().memoizedState}function Ml(e,t,n,r){var o=Ol();hl.flags|=e,o.memoizedState=Bl(1|t,n,void 0,void 0===r?null:r)}function Ul(e,t,n,r){var o=Tl();r=void 0===r?null:r;var a=void 0;if(null!==ml){var l=ml.memoizedState;if(a=l.destroy,null!==r&&xl(r,l.deps))return void(o.memoizedState=Bl(t,n,a,r))}hl.flags|=e,o.memoizedState=Bl(1|t,n,a,r)}function Kl(e,t){return Ml(8390656,8,e,t)}function Hl(e,t){return Ul(2048,8,e,t)}function Vl(e,t){return Ul(4,2,e,t)}function ql(e,t){return Ul(4,4,e,t)}function Zl(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Wl(e,t,n){return n=null!=n?n.concat([e]):null,Ul(4,4,Zl.bind(null,t,e),n)}function Gl(){}function Yl(e,t){var n=Tl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&xl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ql(e,t){var n=Tl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&xl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jl(e,t,n){return 0==(21&bl)?(e.baseState&&(e.baseState=!1,wi=!0),e.memoizedState=n):(ir(n,t)||(n=ht(),hl.lanes|=n,Rc|=n,e.baseState=!0),t)}function Xl(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{yt=n,pl.transition=r}}function ei(){return Tl().memoizedState}function ti(e,t,n){var r=ns(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ri(e)?oi(t,n):null!==(n=Aa(e,t,n,r))&&(rs(n,e,r,ts()),ai(n,t,r))}function ni(e,t,n){var r=ns(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ri(e))oi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=a(l,n);if(o.hasEagerState=!0,o.eagerState=i,ir(i,l)){var c=t.interleaved;return null===c?(o.next=o,La(t)):(o.next=c.next,c.next=o),void(t.interleaved=o)}}catch(e){}null!==(n=Aa(e,t,o,r))&&(rs(n,e,r,o=ts()),ai(n,t,r))}}function ri(e){var t=e.alternate;return e===hl||null!==t&&t===hl}function oi(e,t){yl=vl=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ai(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var li={readContext:Oa,useCallback:_l,useContext:_l,useEffect:_l,useImperativeHandle:_l,useInsertionEffect:_l,useLayoutEffect:_l,useMemo:_l,useReducer:_l,useRef:_l,useState:_l,useDebugValue:_l,useDeferredValue:_l,useTransition:_l,useMutableSource:_l,useSyncExternalStore:_l,useId:_l,unstable_isNewReconciler:!1},ii={readContext:Oa,useCallback:function(e,t){return Ol().memoizedState=[e,void 0===t?null:t],e},useContext:Oa,useEffect:Kl,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ml(4194308,4,Zl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ml(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ml(4,2,e,t)},useMemo:function(e,t){var n=Ol();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ol();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ti.bind(null,hl,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ol().memoizedState=e},useState:Fl,useDebugValue:Gl,useDeferredValue:function(e){return Ol().memoizedState=e},useTransition:function(){var e=Fl(!1),t=e[0];return e=Xl.bind(null,e[1]),Ol().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=hl,o=Ol();if(aa){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===$c)throw Error(a(349));0!=(30&bl)||zl(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Kl(jl.bind(null,r,l,e),[e]),r.flags|=2048,Bl(9,Pl.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ol(),t=$c.identifierPrefix;if(aa){var n=Jo;t=":"+t+"R"+(n=(Qo&~(1<<32-lt(Qo)-1)).toString(32)+n),0<(n=wl++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=kl++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ci={readContext:Oa,useCallback:Yl,useContext:Oa,useEffect:Hl,useImperativeHandle:Wl,useInsertionEffect:Vl,useLayoutEffect:ql,useMemo:Ql,useReducer:Al,useRef:Dl,useState:function(){return Al(Ll)},useDebugValue:Gl,useDeferredValue:function(e){return Jl(Tl(),ml.memoizedState,e)},useTransition:function(){return[Al(Ll)[0],Tl().memoizedState]},useMutableSource:Nl,useSyncExternalStore:Cl,useId:ei,unstable_isNewReconciler:!1},si={readContext:Oa,useCallback:Yl,useContext:Oa,useEffect:Hl,useImperativeHandle:Wl,useInsertionEffect:Vl,useLayoutEffect:ql,useMemo:Ql,useReducer:$l,useRef:Dl,useState:function(){return $l(Ll)},useDebugValue:Gl,useDeferredValue:function(e){var t=Tl();return null===ml?t.memoizedState=e:Jl(t,ml.memoizedState,e)},useTransition:function(){return[$l(Ll)[0],Tl().memoizedState]},useMutableSource:Nl,useSyncExternalStore:Cl,useId:ei,unstable_isNewReconciler:!1};function fi(e,t){try{var n="",r=t;do{n+=M(r),r=r.return}while(r);var o=n}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o,digest:null}}function di(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ui(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var pi="function"==typeof WeakMap?WeakMap:Map;function bi(e,t,n){(n=Pa(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vc||(Vc=!0,qc=r),ui(0,t)},n}function hi(e,t,n){(n=Pa(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ui(0,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){ui(0,t),"function"!=typeof r&&(null===Zc?Zc=new Set([this]):Zc.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function mi(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pi;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Os.bind(null,e,t,n),t.then(e,e))}function gi(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vi(e,t,n,r,o){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Pa(-1,1)).tag=2,ja(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var yi=w.ReactCurrentOwner,wi=!1;function ki(e,t,n,r){t.child=null===e?Ja(t,null,n,r):Qa(t,e.child,n,r)}function _i(e,t,n,r,o){n=n.render;var a=t.ref;return Sa(t,o),r=El(e,t,n,r,a,o),n=Sl(),null===e||wi?(aa&&n&&ta(t),t.flags|=1,ki(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vi(e,t,o))}function xi(e,t,n,r,o){if(null===e){var a=n.type;return"function"!=typeof a||zs(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=js(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ei(e,t,a,r,o))}if(a=e.child,0==(e.lanes&o)){var l=a.memoizedProps;if((n=null!==(n=n.compare)?n:cr)(l,r)&&e.ref===t.ref)return Vi(e,t,o)}return t.flags|=1,(e=Ps(a,r)).ref=t.ref,e.return=t,t.child=e}function Ei(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(cr(a,r)&&e.ref===t.ref){if(wi=!1,t.pendingProps=r=a,0==(e.lanes&o))return t.lanes=e.lanes,Vi(e,t,o);0!=(131072&e.flags)&&(wi=!0)}}return Ti(e,t,n,r,o)}function Si(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},To(Pc,zc),zc|=n;else{if(0==(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,To(Pc,zc),zc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,To(Pc,zc),zc|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,To(Pc,zc),zc|=r;return ki(e,t,o,n),t.child}function Oi(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,o){var a=zo(n)?No:Ao.current;return a=Co(t,a),Sa(t,o),n=El(e,t,n,r,a,o),r=Sl(),null===e||wi?(aa&&r&&ta(t),t.flags|=1,ki(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vi(e,t,o))}function Li(e,t,n,r,o){if(zo(n)){var a=!0;Ro(t)}else a=!1;if(Sa(t,o),null===t.stateNode)Hi(e,t),Ha(t,n,r),qa(t,n,r,o),r=!0;else if(null===e){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,s=n.contextType;s="object"==typeof s&&null!==s?Oa(s):Co(t,s=zo(n)?No:Ao.current);var f=n.getDerivedStateFromProps,d="function"==typeof f||"function"==typeof l.getSnapshotBeforeUpdate;d||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(i!==r||c!==s)&&Va(t,l,r,s),Na=!1;var u=t.memoizedState;l.state=u,Fa(t,r,l,o),c=t.memoizedState,i!==r||u!==c||$o.current||Na?("function"==typeof f&&(Ma(t,n,f,r),c=t.memoizedState),(i=Na||Ka(t,n,i,r,u,c,s))?(d||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||("function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"==typeof l.componentDidMount&&(t.flags|=4194308)):("function"==typeof l.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=s,r=i):("function"==typeof l.componentDidMount&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,za(e,t),i=t.memoizedProps,s=t.type===t.elementType?i:ga(t.type,i),l.props=s,d=t.pendingProps,u=l.context,c="object"==typeof(c=n.contextType)&&null!==c?Oa(c):Co(t,c=zo(n)?No:Ao.current);var p=n.getDerivedStateFromProps;(f="function"==typeof p||"function"==typeof l.getSnapshotBeforeUpdate)||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(i!==d||u!==c)&&Va(t,l,r,c),Na=!1,u=t.memoizedState,l.state=u,Fa(t,r,l,o);var b=t.memoizedState;i!==d||u!==b||$o.current||Na?("function"==typeof p&&(Ma(t,n,p,r),b=t.memoizedState),(s=Na||Ka(t,n,s,r,u,b,c)||!1)?(f||"function"!=typeof l.UNSAFE_componentWillUpdate&&"function"!=typeof l.componentWillUpdate||("function"==typeof l.componentWillUpdate&&l.componentWillUpdate(r,b,c),"function"==typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(r,b,c)),"function"==typeof l.componentDidUpdate&&(t.flags|=4),"function"==typeof l.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof l.componentDidUpdate||i===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),"function"!=typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=s):("function"!=typeof l.componentDidUpdate||i===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),"function"!=typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),r=!1)}return Ai(e,t,n,r,a,o)}function Ai(e,t,n,r,o,a){Oi(e,t);var l=0!=(128&t.flags);if(!r&&!l)return o&&Fo(t,n,!1),Vi(e,t,a);r=t.stateNode,yi.current=t;var i=l&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&l?(t.child=Qa(t,e.child,null,a),t.child=Qa(t,null,i,a)):ki(e,t,i,a),t.memoizedState=r.state,o&&Fo(t,n,!0),t.child}function $i(e){var t=e.stateNode;t.pendingContext?jo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&jo(0,t.context,!1),ol(e,t.containerInfo)}function Ni(e,t,n,r,o){return ba(),ha(o),t.flags|=256,ki(e,t,n,r),t.child}var Ci,zi,Pi,ji,Ii={dehydrated:null,treeContext:null,retryLane:0};function Ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fi(e,t,n){var r,o=t.pendingProps,l=cl.current,i=!1,c=0!=(128&t.flags);if((r=c)||(r=(null===e||null!==e.memoizedState)&&0!=(2&l)),r?(i=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(l|=1),To(cl,1&l),null===e)return fa(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(c=o.children,e=o.fallback,i?(o=t.mode,i=t.child,c={mode:"hidden",children:c},0==(1&o)&&null!==i?(i.childLanes=0,i.pendingProps=c):i=Rs(c,o,0,null),e=Is(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ri(n),t.memoizedState=Ii,e):Bi(t,c));if(null!==(l=e.memoizedState)&&null!==(r=l.dehydrated))return function(e,t,n,r,o,l,i){if(n)return 256&t.flags?(t.flags&=-257,Di(e,t,i,r=di(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Rs({mode:"visible",children:r.children},o,0,null),(l=Is(l,o,i,null)).flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,0!=(1&t.mode)&&Qa(t,e.child,null,i),t.child.memoizedState=Ri(i),t.memoizedState=Ii,l);if(0==(1&t.mode))return Di(e,t,i,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var c=r.dgst;return r=c,Di(e,t,i,r=di(l=Error(a(419)),r,void 0))}if(c=0!=(i&e.childLanes),wi||c){if(null!==(r=$c)){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!=(o&(r.suspendedLanes|i))?0:o)&&o!==l.retryLane&&(l.retryLane=o,$a(e,o),rs(r,e,o,-1))}return ms(),Di(e,t,i,r=di(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Ls.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,oa=so(o.nextSibling),ra=t,aa=!0,la=null,null!==e&&(Wo[Go++]=Qo,Wo[Go++]=Jo,Wo[Go++]=Yo,Qo=e.id,Jo=e.overflow,Yo=t),(t=Bi(t,r.children)).flags|=4096,t)}(e,t,c,o,r,l,n);if(i){i=o.fallback,c=t.mode,r=(l=e.child).sibling;var s={mode:"hidden",children:o.children};return 0==(1&c)&&t.child!==l?((o=t.child).childLanes=0,o.pendingProps=s,t.deletions=null):(o=Ps(l,s)).subtreeFlags=14680064&l.subtreeFlags,null!==r?i=Ps(r,i):(i=Is(i,c,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,c=null===(c=e.child.memoizedState)?Ri(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},i.memoizedState=c,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,o}return e=(i=e.child).sibling,o=Ps(i,{mode:"visible",children:o.children}),0==(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Bi(e,t){return(t=Rs({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Di(e,t,n,r){return null!==r&&ha(r),Qa(t,e.child,null,n),(e=Bi(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Mi(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ea(e.return,t,n)}function Ui(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Ki(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(ki(e,t,r.children,n),0!=(2&(r=cl.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Mi(e,n,t);else if(19===e.tag)Mi(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(To(cl,r),0==(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===sl(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ui(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===sl(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ui(t,!0,n,null,a);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vi(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Rc|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ps(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ps(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function qi(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Zi(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wi(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zi(t),null;case 1:case 17:return zo(t.type)&&Po(),Zi(t),null;case 3:return r=t.stateNode,al(),Oo($o),Oo(Ao),dl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==la&&(is(la),la=null))),zi(e,t),Zi(t),null;case 5:il(t);var o=rl(nl.current);if(n=t.type,null!==e&&null!=t.stateNode)Pi(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Zi(t),null}if(e=rl(el.current),ua(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[po]=t,r[bo]=l,e=0!=(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(o=0;o<jr.length;o++)Br(jr[o],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":Y(r,l),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Br("invalid",r);break;case"textarea":oe(r,l),Br("invalid",r)}for(var c in ve(n,l),o=null,l)if(l.hasOwnProperty(c)){var s=l[c];"children"===c?"string"==typeof s?r.textContent!==s&&(!0!==l.suppressHydrationWarning&&Jr(r.textContent,s,e),o=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(!0!==l.suppressHydrationWarning&&Jr(r.textContent,s,e),o=["children",""+s]):i.hasOwnProperty(c)&&null!=s&&"onScroll"===c&&Br("scroll",r)}switch(n){case"input":q(r),X(r,l,!0);break;case"textarea":q(r),le(r);break;case"select":case"option":break;default:"function"==typeof l.onClick&&(r.onclick=Xr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ie(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[po]=t,e[bo]=r,Ci(e,t,!1,!1),t.stateNode=e;e:{switch(c=ye(n,r),n){case"dialog":Br("cancel",e),Br("close",e),o=r;break;case"iframe":case"object":case"embed":Br("load",e),o=r;break;case"video":case"audio":for(o=0;o<jr.length;o++)Br(jr[o],e);o=r;break;case"source":Br("error",e),o=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),o=r;break;case"details":Br("toggle",e),o=r;break;case"input":Y(e,r),o=G(e,r),Br("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=R({},r,{value:void 0}),Br("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Br("invalid",e)}for(l in ve(n,o),s=o)if(s.hasOwnProperty(l)){var f=s[l];"style"===l?me(e,f):"dangerouslySetInnerHTML"===l?null!=(f=f?f.__html:void 0)&&de(e,f):"children"===l?"string"==typeof f?("textarea"!==n||""!==f)&&ue(e,f):"number"==typeof f&&ue(e,""+f):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(i.hasOwnProperty(l)?null!=f&&"onScroll"===l&&Br("scroll",e):null!=f&&y(e,l,f,c))}switch(n){case"input":q(e),X(e,r,!1);break;case"textarea":q(e),le(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(l=r.value)?ne(e,!!r.multiple,l,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof o.onClick&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Zi(t),null;case 6:if(e&&null!=t.stateNode)ji(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(a(166));if(n=rl(nl.current),rl(el.current),ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(l=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Jr(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!=(1&e.mode))}l&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Zi(t),null;case 13:if(Oo(cl),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!=(1&t.mode)&&0==(128&t.flags))pa(),ba(),t.flags|=98560,l=!1;else if(l=ua(t),null!==r&&null!==r.dehydrated){if(null===e){if(!l)throw Error(a(318));if(!(l=null!==(l=t.memoizedState)?l.dehydrated:null))throw Error(a(317));l[po]=t}else ba(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Zi(t),l=!1}else null!==la&&(is(la),la=null),l=!0;if(!l)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&cl.current)?0===jc&&(jc=3):ms())),null!==t.updateQueue&&(t.flags|=4),Zi(t),null);case 4:return al(),zi(e,t),null===e&&Ur(t.stateNode.containerInfo),Zi(t),null;case 10:return xa(t.type._context),Zi(t),null;case 19:if(Oo(cl),null===(l=t.memoizedState))return Zi(t),null;if(r=0!=(128&t.flags),null===(c=l.rendering))if(r)qi(l,!1);else{if(0!==jc||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=sl(e))){for(t.flags|=128,qi(l,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(l=n).flags&=14680066,null===(c=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return To(cl,1&cl.current|2),t.child}e=e.sibling}null!==l.tail&&Qe()>Kc&&(t.flags|=128,r=!0,qi(l,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=sl(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),qi(l,!0),null===l.tail&&"hidden"===l.tailMode&&!c.alternate&&!aa)return Zi(t),null}else 2*Qe()-l.renderingStartTime>Kc&&1073741824!==n&&(t.flags|=128,r=!0,qi(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=l.last)?n.sibling=c:t.child=c,l.last=c)}return null!==l.tail?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Qe(),t.sibling=null,n=cl.current,To(cl,r?1&n|2:1&n),t):(Zi(t),null);case 22:case 23:return us(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&zc)&&(Zi(t),6&t.subtreeFlags&&(t.flags|=8192)):Zi(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Gi(e,t){switch(na(t),t.tag){case 1:return zo(t.type)&&Po(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return al(),Oo($o),Oo(Ao),dl(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return il(t),null;case 13:if(Oo(cl),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ba()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Oo(cl),null;case 4:return al(),null;case 10:return xa(t.type._context),null;case 22:case 23:return us(),null;default:return null}}Ci=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zi=function(){},Pi=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rl(el.current);var a,l=null;switch(n){case"input":o=G(e,o),r=G(e,r),l=[];break;case"select":o=R({},o,{value:void 0}),r=R({},r,{value:void 0}),l=[];break;case"textarea":o=re(e,o),r=re(e,r),l=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(e.onclick=Xr)}for(f in ve(n,r),n=null,o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&null!=o[f])if("style"===f){var c=o[f];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==f&&"children"!==f&&"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(i.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var s=r[f];if(c=null!=o?o[f]:void 0,r.hasOwnProperty(f)&&s!==c&&(null!=s||null!=c))if("style"===f)if(c){for(a in c)!c.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&c[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(l||(l=[]),l.push(f,n)),n=s;else"dangerouslySetInnerHTML"===f?(s=s?s.__html:void 0,c=c?c.__html:void 0,null!=s&&c!==s&&(l=l||[]).push(f,s)):"children"===f?"string"!=typeof s&&"number"!=typeof s||(l=l||[]).push(f,""+s):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&(i.hasOwnProperty(f)?(null!=s&&"onScroll"===f&&Br("scroll",e),l||c===s||(l=[])):(l=l||[]).push(f,s))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}},ji=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yi=!1,Qi=!1,Ji="function"==typeof WeakSet?WeakSet:Set,Xi=null;function ec(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Ss(e,t,n)}else n.current=null}function tc(e,t,n){try{n()}catch(n){Ss(e,t,n)}}var nc=!1;function rc(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&tc(t,n,a)}o=o.next}while(o!==r)}}function oc(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ac(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function lc(e){var t=e.alternate;null!==t&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&(delete t[po],delete t[bo],delete t[mo],delete t[go],delete t[vo]),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ic(e){return 5===e.tag||3===e.tag||4===e.tag}function cc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function sc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Xr));else if(4!==r&&null!==(e=e.child))for(sc(e,t,n),e=e.sibling;null!==e;)sc(e,t,n),e=e.sibling}function fc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(fc(e,t,n),e=e.sibling;null!==e;)fc(e,t,n),e=e.sibling}var dc=null,uc=!1;function pc(e,t,n){for(n=n.child;null!==n;)bc(e,t,n),n=n.sibling}function bc(e,t,n){if(at&&"function"==typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,n)}catch(e){}switch(n.tag){case 5:Qi||ec(n,t);case 6:var r=dc,o=uc;dc=null,pc(e,t,n),uc=o,null!==(dc=r)&&(uc?(e=dc,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dc.removeChild(n.stateNode));break;case 18:null!==dc&&(uc?(e=dc,n=n.stateNode,8===e.nodeType?co(e.parentNode,n):1===e.nodeType&&co(e,n),Ut(e)):co(dc,n.stateNode));break;case 4:r=dc,o=uc,dc=n.stateNode.containerInfo,uc=!0,pc(e,t,n),dc=r,uc=o;break;case 0:case 11:case 14:case 15:if(!Qi&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){o=r=r.next;do{var a=o,l=a.destroy;a=a.tag,void 0!==l&&(0!=(2&a)||0!=(4&a))&&tc(n,t,l),o=o.next}while(o!==r)}pc(e,t,n);break;case 1:if(!Qi&&(ec(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Ss(n,t,e)}pc(e,t,n);break;case 21:pc(e,t,n);break;case 22:1&n.mode?(Qi=(r=Qi)||null!==n.memoizedState,pc(e,t,n),Qi=r):pc(e,t,n);break;default:pc(e,t,n)}}function hc(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ji),t.forEach((function(t){var r=As.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function mc(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,c=i;e:for(;null!==c;){switch(c.tag){case 5:dc=c.stateNode,uc=!1;break e;case 3:case 4:dc=c.stateNode.containerInfo,uc=!0;break e}c=c.return}if(null===dc)throw Error(a(160));bc(l,i,o),dc=null,uc=!1;var s=o.alternate;null!==s&&(s.return=null),o.return=null}catch(e){Ss(o,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gc(t,e),t=t.sibling}function gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mc(t,e),vc(e),4&r){try{rc(3,e,e.return),oc(3,e)}catch(t){Ss(e,e.return,t)}try{rc(5,e,e.return)}catch(t){Ss(e,e.return,t)}}break;case 1:mc(t,e),vc(e),512&r&&null!==n&&ec(n,n.return);break;case 5:if(mc(t,e),vc(e),512&r&&null!==n&&ec(n,n.return),32&e.flags){var o=e.stateNode;try{ue(o,"")}catch(t){Ss(e,e.return,t)}}if(4&r&&null!=(o=e.stateNode)){var l=e.memoizedProps,i=null!==n?n.memoizedProps:l,c=e.type,s=e.updateQueue;if(e.updateQueue=null,null!==s)try{"input"===c&&"radio"===l.type&&null!=l.name&&Q(o,l),ye(c,i);var f=ye(c,l);for(i=0;i<s.length;i+=2){var d=s[i],u=s[i+1];"style"===d?me(o,u):"dangerouslySetInnerHTML"===d?de(o,u):"children"===d?ue(o,u):y(o,d,u,f)}switch(c){case"input":J(o,l);break;case"textarea":ae(o,l);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var b=l.value;null!=b?ne(o,!!l.multiple,b,!1):p!==!!l.multiple&&(null!=l.defaultValue?ne(o,!!l.multiple,l.defaultValue,!0):ne(o,!!l.multiple,l.multiple?[]:"",!1))}o[bo]=l}catch(t){Ss(e,e.return,t)}}break;case 6:if(mc(t,e),vc(e),4&r){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(t){Ss(e,e.return,t)}}break;case 3:if(mc(t,e),vc(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(t){Ss(e,e.return,t)}break;case 4:default:mc(t,e),vc(e);break;case 13:mc(t,e),vc(e),8192&(o=e.child).flags&&(l=null!==o.memoizedState,o.stateNode.isHidden=l,!l||null!==o.alternate&&null!==o.alternate.memoizedState||(Uc=Qe())),4&r&&hc(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Qi=(f=Qi)||d,mc(t,e),Qi=f):mc(t,e),vc(e),8192&r){if(f=null!==e.memoizedState,(e.stateNode.isHidden=f)&&!d&&0!=(1&e.mode))for(Xi=e,d=e.child;null!==d;){for(u=Xi=d;null!==Xi;){switch(b=(p=Xi).child,p.tag){case 0:case 11:case 14:case 15:rc(4,p,p.return);break;case 1:ec(p,p.return);var h=p.stateNode;if("function"==typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Ss(r,n,e)}}break;case 5:ec(p,p.return);break;case 22:if(null!==p.memoizedState){_c(u);continue}}null!==b?(b.return=p,Xi=b):_c(u)}d=d.sibling}e:for(d=null,u=e;;){if(5===u.tag){if(null===d){d=u;try{o=u.stateNode,f?"function"==typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none":(c=u.stateNode,i=null!=(s=u.memoizedProps.style)&&s.hasOwnProperty("display")?s.display:null,c.style.display=he("display",i))}catch(t){Ss(e,e.return,t)}}}else if(6===u.tag){if(null===d)try{u.stateNode.nodeValue=f?"":u.memoizedProps}catch(t){Ss(e,e.return,t)}}else if((22!==u.tag&&23!==u.tag||null===u.memoizedState||u===e)&&null!==u.child){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;null===u.sibling;){if(null===u.return||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:mc(t,e),vc(e),4&r&&hc(e);case 21:}}function vc(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ic(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(ue(o,""),r.flags&=-33),fc(e,cc(e),o);break;case 3:case 4:var l=r.stateNode.containerInfo;sc(e,cc(e),l);break;default:throw Error(a(161))}}catch(t){Ss(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yc(e,t,n){Xi=e,wc(e,t,n)}function wc(e,t,n){for(var r=0!=(1&e.mode);null!==Xi;){var o=Xi,a=o.child;if(22===o.tag&&r){var l=null!==o.memoizedState||Yi;if(!l){var i=o.alternate,c=null!==i&&null!==i.memoizedState||Qi;i=Yi;var s=Qi;if(Yi=l,(Qi=c)&&!s)for(Xi=o;null!==Xi;)c=(l=Xi).child,22===l.tag&&null!==l.memoizedState?xc(o):null!==c?(c.return=l,Xi=c):xc(o);for(;null!==a;)Xi=a,wc(a,t,n),a=a.sibling;Xi=o,Yi=i,Qi=s}kc(e)}else 0!=(8772&o.subtreeFlags)&&null!==a?(a.return=o,Xi=a):kc(e)}}function kc(e){for(;null!==Xi;){var t=Xi;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qi||oc(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qi)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ga(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;null!==l&&Ba(t,l,r);break;case 3:var i=t.updateQueue;if(null!==i){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ba(t,i,n)}break;case 5:var c=t.stateNode;if(null===n&&4&t.flags){n=c;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var f=t.alternate;if(null!==f){var d=f.memoizedState;if(null!==d){var u=d.dehydrated;null!==u&&Ut(u)}}}break;default:throw Error(a(163))}Qi||512&t.flags&&ac(t)}catch(e){Ss(t,t.return,e)}}if(t===e){Xi=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xi=n;break}Xi=t.return}}function _c(e){for(;null!==Xi;){var t=Xi;if(t===e){Xi=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xi=n;break}Xi=t.return}}function xc(e){for(;null!==Xi;){var t=Xi;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oc(4,t)}catch(e){Ss(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(e){Ss(t,o,e)}}var a=t.return;try{ac(t)}catch(e){Ss(t,a,e)}break;case 5:var l=t.return;try{ac(t)}catch(e){Ss(t,l,e)}}}catch(e){Ss(t,t.return,e)}if(t===e){Xi=null;break}var i=t.sibling;if(null!==i){i.return=t.return,Xi=i;break}Xi=t.return}}var Ec,Sc=Math.ceil,Oc=w.ReactCurrentDispatcher,Tc=w.ReactCurrentOwner,Lc=w.ReactCurrentBatchConfig,Ac=0,$c=null,Nc=null,Cc=0,zc=0,Pc=So(0),jc=0,Ic=null,Rc=0,Fc=0,Bc=0,Dc=null,Mc=null,Uc=0,Kc=1/0,Hc=null,Vc=!1,qc=null,Zc=null,Wc=!1,Gc=null,Yc=0,Qc=0,Jc=null,Xc=-1,es=0;function ts(){return 0!=(6&Ac)?Qe():-1!==Xc?Xc:Xc=Qe()}function ns(e){return 0==(1&e.mode)?1:0!=(2&Ac)&&0!==Cc?Cc&-Cc:null!==ma.transition?(0===es&&(es=ht()),es):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Yt(e.type)}function rs(e,t,n,r){if(50<Qc)throw Qc=0,Jc=null,Error(a(185));gt(e,n,r),0!=(2&Ac)&&e===$c||(e===$c&&(0==(2&Ac)&&(Fc|=n),4===jc&&cs(e,Cc)),os(e,r),1===n&&0===Ac&&0==(1&t.mode)&&(Kc=Qe()+500,Do&&Ko()))}function os(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-lt(a),i=1<<l,c=o[l];-1===c?0!=(i&n)&&0==(i&r)||(o[l]=pt(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}(e,t);var r=ut(e,e===$c?Cc:0);if(0===r)null!==n&&We(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&We(n),1===t)0===e.tag?function(e){Do=!0,Uo(e)}(ss.bind(null,e)):Uo(ss.bind(null,e)),lo((function(){0==(6&Ac)&&Ko()})),n=null;else{switch(wt(r)){case 1:n=Xe;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=$s(n,as.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function as(e,t){if(Xc=-1,es=0,0!=(6&Ac))throw Error(a(327));var n=e.callbackNode;if(xs()&&e.callbackNode!==n)return null;var r=ut(e,e===$c?Cc:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=gs(e,r);else{t=r;var o=Ac;Ac|=2;var l=hs();for($c===e&&Cc===t||(Hc=null,Kc=Qe()+500,ps(e,t));;)try{ys();break}catch(t){bs(e,t)}_a(),Oc.current=l,Ac=o,null!==Nc?t=0:($c=null,Cc=0,t=jc)}if(0!==t){if(2===t&&0!==(o=bt(e))&&(r=o,t=ls(e,o)),1===t)throw n=Ic,ps(e,0),cs(e,r),os(e,Qe()),n;if(6===t)cs(e,r);else{if(o=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!ir(a(),o))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gs(e,r))&&0!==(l=bt(e))&&(r=l,t=ls(e,l)),1===t))throw n=Ic,ps(e,0),cs(e,r),os(e,Qe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:_s(e,Mc,Hc);break;case 3:if(cs(e,r),(130023424&r)===r&&10<(t=Uc+500-Qe())){if(0!==ut(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ts(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(_s.bind(null,e,Mc,Hc),t);break}_s(e,Mc,Hc);break;case 4:if(cs(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-lt(r);l=1<<i,(i=t[i])>o&&(o=i),r&=~l}if(r=o,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sc(r/1960))-r)){e.timeoutHandle=ro(_s.bind(null,e,Mc,Hc),r);break}_s(e,Mc,Hc);break;default:throw Error(a(329))}}}return os(e,Qe()),e.callbackNode===n?as.bind(null,e):null}function ls(e,t){var n=Dc;return e.current.memoizedState.isDehydrated&&(ps(e,t).flags|=256),2!==(e=gs(e,t))&&(t=Mc,Mc=n,null!==t&&is(t)),e}function is(e){null===Mc?Mc=e:Mc.push.apply(Mc,e)}function cs(e,t){for(t&=~Bc,t&=~Fc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function ss(e){if(0!=(6&Ac))throw Error(a(327));xs();var t=ut(e,0);if(0==(1&t))return os(e,Qe()),null;var n=gs(e,t);if(0!==e.tag&&2===n){var r=bt(e);0!==r&&(t=r,n=ls(e,r))}if(1===n)throw n=Ic,ps(e,0),cs(e,t),os(e,Qe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_s(e,Mc,Hc),os(e,Qe()),null}function fs(e,t){var n=Ac;Ac|=1;try{return e(t)}finally{0===(Ac=n)&&(Kc=Qe()+500,Do&&Ko())}}function ds(e){null!==Gc&&0===Gc.tag&&0==(6&Ac)&&xs();var t=Ac;Ac|=1;var n=Lc.transition,r=yt;try{if(Lc.transition=null,yt=1,e)return e()}finally{yt=r,Lc.transition=n,0==(6&(Ac=t))&&Ko()}}function us(){zc=Pc.current,Oo(Pc)}function ps(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Nc)for(n=Nc.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Po();break;case 3:al(),Oo($o),Oo(Ao),dl();break;case 5:il(r);break;case 4:al();break;case 13:case 19:Oo(cl);break;case 10:xa(r.type._context);break;case 22:case 23:us()}n=n.return}if($c=e,Nc=e=Ps(e.current,null),Cc=zc=t,jc=0,Ic=null,Bc=Fc=Rc=0,Mc=Dc=null,null!==Ta){for(t=0;t<Ta.length;t++)if(null!==(r=(n=Ta[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var l=a.next;a.next=o,r.next=l}n.pending=r}Ta=null}return e}function bs(e,t){for(;;){var n=Nc;try{if(_a(),ul.current=li,vl){for(var r=hl.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}vl=!1}if(bl=0,gl=ml=hl=null,yl=!1,wl=0,Tc.current=null,null===n||null===n.return){jc=1,Ic=t,Nc=null;break}e:{var l=e,i=n.return,c=n,s=t;if(t=Cc,c.flags|=32768,null!==s&&"object"==typeof s&&"function"==typeof s.then){var f=s,d=c,u=d.tag;if(0==(1&d.mode)&&(0===u||11===u||15===u)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=gi(i);if(null!==b){b.flags&=-257,vi(b,i,c,0,t),1&b.mode&&mi(l,f,t),s=f;var h=(t=b).updateQueue;if(null===h){var m=new Set;m.add(s),t.updateQueue=m}else h.add(s);break e}if(0==(1&t)){mi(l,f,t),ms();break e}s=Error(a(426))}else if(aa&&1&c.mode){var g=gi(i);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),vi(g,i,c,0,t),ha(fi(s,c));break e}}l=s=fi(s,c),4!==jc&&(jc=2),null===Dc?Dc=[l]:Dc.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t,Ra(l,bi(0,s,t));break e;case 1:c=s;var v=l.type,y=l.stateNode;if(0==(128&l.flags)&&("function"==typeof v.getDerivedStateFromError||null!==y&&"function"==typeof y.componentDidCatch&&(null===Zc||!Zc.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t,Ra(l,hi(l,c,t));break e}}l=l.return}while(null!==l)}ks(n)}catch(e){t=e,Nc===n&&null!==n&&(Nc=n=n.return);continue}break}}function hs(){var e=Oc.current;return Oc.current=li,null===e?li:e}function ms(){0!==jc&&3!==jc&&2!==jc||(jc=4),null===$c||0==(268435455&Rc)&&0==(268435455&Fc)||cs($c,Cc)}function gs(e,t){var n=Ac;Ac|=2;var r=hs();for($c===e&&Cc===t||(Hc=null,ps(e,t));;)try{vs();break}catch(t){bs(e,t)}if(_a(),Ac=n,Oc.current=r,null!==Nc)throw Error(a(261));return $c=null,Cc=0,jc}function vs(){for(;null!==Nc;)ws(Nc)}function ys(){for(;null!==Nc&&!Ge();)ws(Nc)}function ws(e){var t=Ec(e.alternate,e,zc);e.memoizedProps=e.pendingProps,null===t?ks(e):Nc=t,Tc.current=null}function ks(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=Wi(n,t,zc)))return void(Nc=n)}else{if(null!==(n=Gi(n,t)))return n.flags&=32767,void(Nc=n);if(null===e)return jc=6,void(Nc=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Nc=t);Nc=t=e}while(null!==t);0===jc&&(jc=5)}function _s(e,t,n){var r=yt,o=Lc.transition;try{Lc.transition=null,yt=1,function(e,t,n,r){do{xs()}while(null!==Gc);if(0!=(6&Ac))throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-lt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,l),e===$c&&(Nc=$c=null,Cc=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||Wc||(Wc=!0,$s(tt,(function(){return xs(),null}))),l=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||l){l=Lc.transition,Lc.transition=null;var i=yt;yt=1;var c=Ac;Ac|=4,Tc.current=null,function(e,t){if(eo=Ht,pr(e=ur())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch(e){n=null;break e}var i=0,c=-1,s=-1,f=0,d=0,u=e,p=null;t:for(;;){for(var b;u!==n||0!==o&&3!==u.nodeType||(c=i+o),u!==l||0!==r&&3!==u.nodeType||(s=i+r),3===u.nodeType&&(i+=u.nodeValue.length),null!==(b=u.firstChild);)p=u,u=b;for(;;){if(u===e)break t;if(p===n&&++f===o&&(c=i),p===l&&++d===r&&(s=i),null!==(b=u.nextSibling))break;p=(u=p).parentNode}u=b}n=-1===c||-1===s?null:{start:c,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Ht=!1,Xi=t;null!==Xi;)if(e=(t=Xi).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,Xi=e;else for(;null!==Xi;){t=Xi;try{var h=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var m=h.memoizedProps,g=h.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:ga(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(a(163))}}catch(e){Ss(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,Xi=e;break}Xi=t.return}h=nc,nc=!1}(e,n),gc(n,e),br(to),Ht=!!eo,to=eo=null,e.current=n,yc(n,e,o),Ye(),Ac=c,yt=i,Lc.transition=l}else e.current=n;if(Wc&&(Wc=!1,Gc=e,Yc=o),0===(l=e.pendingLanes)&&(Zc=null),function(e){if(at&&"function"==typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),os(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((o=t[n]).value,{componentStack:o.stack,digest:o.digest});if(Vc)throw Vc=!1,e=qc,qc=null,e;0!=(1&Yc)&&0!==e.tag&&xs(),0!=(1&(l=e.pendingLanes))?e===Jc?Qc++:(Qc=0,Jc=e):Qc=0,Ko()}(e,t,n,r)}finally{Lc.transition=o,yt=r}return null}function xs(){if(null!==Gc){var e=wt(Yc),t=Lc.transition,n=yt;try{if(Lc.transition=null,yt=16>e?16:e,null===Gc)var r=!1;else{if(e=Gc,Gc=null,Yc=0,0!=(6&Ac))throw Error(a(331));var o=Ac;for(Ac|=4,Xi=e.current;null!==Xi;){var l=Xi,i=l.child;if(0!=(16&Xi.flags)){var c=l.deletions;if(null!==c){for(var s=0;s<c.length;s++){var f=c[s];for(Xi=f;null!==Xi;){var d=Xi;switch(d.tag){case 0:case 11:case 15:rc(8,d,l)}var u=d.child;if(null!==u)u.return=d,Xi=u;else for(;null!==Xi;){var p=(d=Xi).sibling,b=d.return;if(lc(d),d===f){Xi=null;break}if(null!==p){p.return=b,Xi=p;break}Xi=b}}}var h=l.alternate;if(null!==h){var m=h.child;if(null!==m){h.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Xi=l}}if(0!=(2064&l.subtreeFlags)&&null!==i)i.return=l,Xi=i;else e:for(;null!==Xi;){if(0!=(2048&(l=Xi).flags))switch(l.tag){case 0:case 11:case 15:rc(9,l,l.return)}var v=l.sibling;if(null!==v){v.return=l.return,Xi=v;break e}Xi=l.return}}var y=e.current;for(Xi=y;null!==Xi;){var w=(i=Xi).child;if(0!=(2064&i.subtreeFlags)&&null!==w)w.return=i,Xi=w;else e:for(i=y;null!==Xi;){if(0!=(2048&(c=Xi).flags))try{switch(c.tag){case 0:case 11:case 15:oc(9,c)}}catch(e){Ss(c,c.return,e)}if(c===i){Xi=null;break e}var k=c.sibling;if(null!==k){k.return=c.return,Xi=k;break e}Xi=c.return}}if(Ac=o,Ko(),at&&"function"==typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(e){}r=!0}return r}finally{yt=n,Lc.transition=t}}return!1}function Es(e,t,n){e=ja(e,t=bi(0,t=fi(n,t),1),1),t=ts(),null!==e&&(gt(e,1,t),os(e,t))}function Ss(e,t,n){if(3===e.tag)Es(e,e,n);else for(;null!==t;){if(3===t.tag){Es(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Zc||!Zc.has(r))){t=ja(t,e=hi(t,e=fi(n,e),1),1),e=ts(),null!==t&&(gt(t,1,e),os(t,e));break}}t=t.return}}function Os(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ts(),e.pingedLanes|=e.suspendedLanes&n,$c===e&&(Cc&n)===n&&(4===jc||3===jc&&(130023424&Cc)===Cc&&500>Qe()-Uc?ps(e,0):Bc|=n),os(e,t)}function Ts(e,t){0===t&&(0==(1&e.mode)?t=1:(t=ft,0==(130023424&(ft<<=1))&&(ft=4194304)));var n=ts();null!==(e=$a(e,t))&&(gt(e,t,n),os(e,n))}function Ls(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ts(e,n)}function As(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Ts(e,n)}function $s(e,t){return Ze(e,t)}function Ns(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cs(e,t,n,r){return new Ns(e,t,n,r)}function zs(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ps(e,t){var n=e.alternate;return null===n?((n=Cs(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function js(e,t,n,r,o,l){var i=2;if(r=e,"function"==typeof e)zs(e)&&(i=1);else if("string"==typeof e)i=5;else e:switch(e){case x:return Is(n.children,o,l,t);case E:i=8,o|=8;break;case S:return(e=Cs(12,n,t,2|o)).elementType=S,e.lanes=l,e;case A:return(e=Cs(13,n,t,o)).elementType=A,e.lanes=l,e;case $:return(e=Cs(19,n,t,o)).elementType=$,e.lanes=l,e;case z:return Rs(n,o,l,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case O:i=10;break e;case T:i=9;break e;case L:i=11;break e;case N:i=14;break e;case C:i=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Cs(i,n,t,o)).elementType=e,t.type=r,t.lanes=l,t}function Is(e,t,n,r){return(e=Cs(7,e,r,t)).lanes=n,e}function Rs(e,t,n,r){return(e=Cs(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Fs(e,t,n){return(e=Cs(6,e,null,t)).lanes=n,e}function Bs(e,t,n){return(t=Cs(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ds(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ms(e,t,n,r,o,a,l,i,c){return e=new Ds(e,t,n,i,c),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Cs(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(a),e}function Us(e){if(!e)return Lo;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(zo(n))return Io(e,n,t)}return t}function Ks(e,t,n,r,o,a,l,i,c){return(e=Ms(n,r,!0,e,0,a,0,i,c)).context=Us(null),n=e.current,(a=Pa(r=ts(),o=ns(n))).callback=null!=t?t:null,ja(n,a,o),e.current.lanes=o,gt(e,o,r),os(e,r),e}function Hs(e,t,n,r){var o=t.current,a=ts(),l=ns(o);return n=Us(n),null===t.context?t.context=n:t.pendingContext=n,(t=Pa(a,l)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=ja(o,t,l))&&(rs(e,o,l,a),Ia(e,o,l)),l}function Vs(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function qs(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Zs(e,t){qs(e,t),(e=e.alternate)&&qs(e,t)}Ec=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||$o.current)wi=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return wi=!1,function(e,t,n){switch(t.tag){case 3:$i(t),ba();break;case 5:ll(t);break;case 1:zo(t.type)&&Ro(t);break;case 4:ol(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;To(va,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(To(cl,1&cl.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Fi(e,t,n):(To(cl,1&cl.current),null!==(e=Vi(e,t,n))?e.sibling:null);To(cl,1&cl.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return Ki(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),To(cl,cl.current),r)break;return null;case 22:case 23:return t.lanes=0,Si(e,t,n)}return Vi(e,t,n)}(e,t,n);wi=0!=(131072&e.flags)}else wi=!1,aa&&0!=(1048576&t.flags)&&ea(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hi(e,t),e=t.pendingProps;var o=Co(t,Ao.current);Sa(t,n),o=El(null,t,r,e,o,n);var l=Sl();return t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zo(r)?(l=!0,Ro(t)):l=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Ca(t),o.updater=Ua,t.stateNode=o,o._reactInternals=t,qa(t,r,e,n),t=Ai(null,t,r,!0,l,n)):(t.tag=0,aa&&l&&ta(t),ki(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"==typeof e)return zs(e)?1:0;if(null!=e){if((e=e.$$typeof)===L)return 11;if(e===N)return 14}return 2}(r),e=ga(r,e),o){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=Li(null,t,r,e,n);break e;case 11:t=_i(null,t,r,e,n);break e;case 14:t=xi(null,t,r,ga(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Ti(e,t,r,o=t.elementType===r?o:ga(r,o),n);case 1:return r=t.type,o=t.pendingProps,Li(e,t,r,o=t.elementType===r?o:ga(r,o),n);case 3:e:{if($i(t),null===e)throw Error(a(387));r=t.pendingProps,o=(l=t.memoizedState).element,za(e,t),Fa(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated){if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,256&t.flags){t=Ni(e,t,r,n,o=fi(Error(a(423)),t));break e}if(r!==o){t=Ni(e,t,r,n,o=fi(Error(a(424)),t));break e}for(oa=so(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,la=null,n=Ja(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ba(),r===o){t=Vi(e,t,n);break e}ki(e,t,r,n)}t=t.child}return t;case 5:return ll(t),null===e&&fa(t),r=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,i=o.children,no(r,o)?i=null:null!==l&&no(r,l)&&(t.flags|=32),Oi(e,t),ki(e,t,i,n),t.child;case 6:return null===e&&fa(t),null;case 13:return Fi(e,t,n);case 4:return ol(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Qa(t,null,r,n):ki(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,_i(e,t,r,o=t.elementType===r?o:ga(r,o),n);case 7:return ki(e,t,t.pendingProps,n),t.child;case 8:case 12:return ki(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,To(va,r._currentValue),r._currentValue=i,null!==l)if(ir(l.value,i)){if(l.children===o.children&&!$o.current){t=Vi(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var c=l.dependencies;if(null!==c){i=l.child;for(var s=c.firstContext;null!==s;){if(s.context===r){if(1===l.tag){(s=Pa(-1,n&-n)).tag=2;var f=l.updateQueue;if(null!==f){var d=(f=f.shared).pending;null===d?s.next=s:(s.next=d.next,d.next=s),f.pending=s}}l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Ea(l.return,n,t),c.lanes|=n;break}s=s.next}}else if(10===l.tag)i=l.type===t.type?null:l.child;else if(18===l.tag){if(null===(i=l.return))throw Error(a(341));i.lanes|=n,null!==(c=i.alternate)&&(c.lanes|=n),Ea(i,n,t),i=l.sibling}else i=l.child;if(null!==i)i.return=l;else for(i=l;null!==i;){if(i===t){i=null;break}if(null!==(l=i.sibling)){l.return=i.return,i=l;break}i=i.return}l=i}ki(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Sa(t,n),r=r(o=Oa(o)),t.flags|=1,ki(e,t,r,n),t.child;case 14:return o=ga(r=t.type,t.pendingProps),xi(e,t,r,o=ga(r.type,o),n);case 15:return Ei(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ga(r,o),Hi(e,t),t.tag=1,zo(r)?(e=!0,Ro(t)):e=!1,Sa(t,n),Ha(t,r,o),qa(t,r,o,n),Ai(null,t,r,!0,e,n);case 19:return Ki(e,t,n);case 22:return Si(e,t,n)}throw Error(a(156,t.tag))};var Ws="function"==typeof reportError?reportError:function(e){console.error(e)};function Gs(e){this._internalRoot=e}function Ys(e){this._internalRoot=e}function Qs(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Js(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xs(){}function ef(e,t,n,r,o){var a=n._reactRootContainer;if(a){var l=a;if("function"==typeof o){var i=o;o=function(){var e=Vs(l);i.call(e)}}Hs(t,l,e,o)}else l=function(e,t,n,r,o){if(o){if("function"==typeof r){var a=r;r=function(){var e=Vs(l);a.call(e)}}var l=Ks(t,r,e,0,null,!1,0,"",Xs);return e._reactRootContainer=l,e[ho]=l.current,Ur(8===e.nodeType?e.parentNode:e),ds(),l}for(;o=e.lastChild;)e.removeChild(o);if("function"==typeof r){var i=r;r=function(){var e=Vs(c);i.call(e)}}var c=Ms(e,0,!1,null,0,!1,0,"",Xs);return e._reactRootContainer=c,e[ho]=c.current,Ur(8===e.nodeType?e.parentNode:e),ds((function(){Hs(t,c,n,r)})),c}(n,t,e,o,r);return Vs(l)}Ys.prototype.render=Gs.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hs(e,t,null,null)},Ys.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;ds((function(){Hs(null,e,null,null)})),t[ho]=null}},Ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Rt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),os(t,Qe()),0==(6&Ac)&&(Kc=Qe()+500,Ko()))}break;case 13:ds((function(){var t=$a(e,1);if(null!==t){var n=ts();rs(t,e,1,n)}})),Zs(e,1)}},_t=function(e){if(13===e.tag){var t=$a(e,134217728);null!==t&&rs(t,e,134217728,ts()),Zs(e,134217728)}},xt=function(e){if(13===e.tag){var t=ns(e),n=$a(e,t);null!==n&&rs(n,e,t,ts()),Zs(e,t)}},Et=function(){return yt},St=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},_e=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_o(r);if(!o)throw Error(a(90));Z(r),J(r,o)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Le=fs,Ae=ds;var tf={usingClientEntryPoint:!1,Events:[wo,ko,_o,Oe,Te,fs]},nf={findFiberByHostInstance:yo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rf={bundleType:nf.bundleType,version:nf.version,rendererPackageName:nf.rendererPackageName,rendererConfig:nf.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:nf.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var of=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!of.isDisabled&&of.supportsFiber)try{ot=of.inject(rf),at=of}catch(fe){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qs(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:_,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qs(e))throw Error(a(299));var n=!1,r="",o=Ws;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Ms(e,1,!1,null,0,n,0,r,o),e[ho]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Gs(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return ds(e)},t.hydrate=function(e,t,n){if(!Js(t))throw Error(a(200));return ef(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qs(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,o=!1,l="",i=Ws;if(null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(l=n.identifierPrefix),void 0!==n.onRecoverableError&&(i=n.onRecoverableError)),t=Ks(t,null,e,1,null!=n?n:null,o,0,l,i),e[ho]=t.current,Ur(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ys(t)},t.render=function(e,t,n){if(!Js(t))throw Error(a(200));return ef(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Js(e))throw Error(a(40));return!!e._reactRootContainer&&(ds((function(){ef(null,null,e,!1,(function(){e._reactRootContainer=null,e[ho]=null}))})),!0)},t.unstable_batchedUpdates=fs,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Js(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return ef(e,t,n,!1,r)},t.version="18.2.0-next-9e3b772b8-20220608"},3832:(e,t,n)=>{"use strict";var r=n(6909);t.s=r.createRoot,r.hydrateRoot},6909:(e,t,n)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(6266)},2302:e=>{"use strict";var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;function a(e,l){if(e===l)return!0;if(e&&l&&"object"==typeof e&&"object"==typeof l){var i,c,s,f=t(e),d=t(l);if(f&&d){if((c=e.length)!=l.length)return!1;for(i=c;0!=i--;)if(!a(e[i],l[i]))return!1;return!0}if(f!=d)return!1;var u=e instanceof Date,p=l instanceof Date;if(u!=p)return!1;if(u&&p)return e.getTime()==l.getTime();var b=e instanceof RegExp,h=l instanceof RegExp;if(b!=h)return!1;if(b&&h)return e.toString()==l.toString();var m=n(e);if((c=m.length)!==n(l).length)return!1;for(i=c;0!=i--;)if(!r.call(l,m[i]))return!1;if(o&&e instanceof Element&&l instanceof Element)return e===l;for(i=c;0!=i--;)if(!("_owner"===(s=m[i])&&e.$$typeof||a(e[s],l[s])))return!1;return!0}return e!=e&&l!=l}e.exports=function(e,t){try{return a(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},1877:(e,t)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case d:case a:case i:case l:case p:return e;default:switch(e=e&&e.$$typeof){case s:case u:case m:case h:case c:return e;default:return t}}case o:return t}}}function _(e){return k(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=s,t.ContextProvider=c,t.Element=r,t.ForwardRef=u,t.Fragment=a,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=i,t.StrictMode=l,t.Suspense=p,t.isAsyncMode=function(e){return _(e)||k(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return k(e)===s},t.isContextProvider=function(e){return k(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===u},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===m},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===o},t.isProfiler=function(e){return k(e)===i},t.isStrictMode=function(e){return k(e)===l},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===i||e===l||e===p||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===c||e.$$typeof===s||e.$$typeof===u||e.$$typeof===v||e.$$typeof===y||e.$$typeof===w||e.$$typeof===g)},t.typeOf=k},1209:(e,t,n)=>{"use strict";e.exports=n(1877)},6177:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=y.prototype=new v;w.constructor=y,h(w,g.prototype),w.isPureReactComponent=!0;var k=Array.isArray,_=Object.prototype.hasOwnProperty,x={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},l=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)_.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var s=Array(c),f=0;f<c;f++)s[f]=arguments[f+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:l,ref:i,props:a,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,o,a,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return l=l(c=e),e=""===a?"."+L(c,0):a,k(l)?(o="",null!=e&&(o=e.replace(T,"$&/")+"/"),A(l,t,o,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(T,"$&/")+"/")+e)),t.push(l)),1;if(c=0,a=""===a?".":a+":",k(e))for(var s=0;s<e.length;s++){var f=a+L(i=e[s],s);c+=A(i,t,o,f,l)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(i=e.next()).done;)c+=A(i=i.value,t,o,f=a+L(i,s++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var r=[],o=0;return A(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},z={transition:null},P={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:z,ReactCurrentOwner:x};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=l,t.PureComponent=y,t.StrictMode=a,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)_.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:l,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,n){return C.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,n){return C.current.useReducer(e,t,n)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},6761:(e,t,n)=>{"use strict";e.exports=n(6177)},7446:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,l=o>>>1;r<l;){var i=2*(r+1)-1,c=e[i],s=i+1,f=e[s];if(0>a(c,n))s<o&&0>a(f,c)?(e[r]=f,e[s]=n,r=s):(e[r]=c,e[i]=n,r=i);else{if(!(s<o&&0>a(f,n)))break e;e[r]=f,e[s]=n,r=s}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var i=Date,c=i.now();t.unstable_now=function(){return i.now()-c}}var s=[],f=[],d=1,u=null,p=3,b=!1,h=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var t=r(f);null!==t;){if(null===t.callback)o(f);else{if(!(t.startTime<=e))break;o(f),t.sortIndex=t.expirationTime,n(s,t)}t=r(f)}}function k(e){if(m=!1,w(e),!h)if(null!==r(s))h=!0,z(_);else{var t=r(f);null!==t&&P(k,t.startTime-e)}}function _(e,n){h=!1,m&&(m=!1,v(O),O=-1),b=!0;var a=p;try{for(w(n),u=r(s);null!==u&&(!(u.expirationTime>n)||e&&!A());){var l=u.callback;if("function"==typeof l){u.callback=null,p=u.priorityLevel;var i=l(u.expirationTime<=n);n=t.unstable_now(),"function"==typeof i?u.callback=i:u===r(s)&&o(s),w(n)}else o(s);u=r(s)}if(null!==u)var c=!0;else{var d=r(f);null!==d&&P(k,d.startTime-n),c=!1}return c}finally{u=null,p=a,b=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var x,E=!1,S=null,O=-1,T=5,L=-1;function A(){return!(t.unstable_now()-L<T)}function $(){if(null!==S){var e=t.unstable_now();L=e;var n=!0;try{n=S(!0,e)}finally{n?x():(E=!1,S=null)}}else E=!1}if("function"==typeof y)x=function(){y($)};else if("undefined"!=typeof MessageChannel){var N=new MessageChannel,C=N.port2;N.port1.onmessage=$,x=function(){C.postMessage(null)}}else x=function(){g($,0)};function z(e){S=e,E||(E=!0,x())}function P(e,n){O=g((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||b||(h=!0,z(_))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(s)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,a){var l=t.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?l+a:l,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:i=a+i,sortIndex:-1},a>l?(e.sortIndex=a,n(f,e),null===r(s)&&e===r(f)&&(m?(v(O),O=-1):m=!0,P(k,a-l))):(e.sortIndex=i,n(s,e),h||b||(h=!0,z(_))),e},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},2761:(e,t,n)=>{"use strict";e.exports=n(7446)},1144:e=>{"use strict";const t=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,n=e=>e.match(t)||[],r=e=>e[0].toUpperCase()+e.slice(1),o=(e,t)=>n(e).join(t).toLowerCase(),a=e=>n(e).reduce(((e,t)=>`${e}${e?t[0].toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()}`),"");e.exports={words:n,upperFirst:r,camelCase:a,pascalCase:e=>r(a(e)),snakeCase:e=>o(e,"_"),kebabCase:e=>o(e,"-"),sentenceCase:e=>r(o(e," ")),titleCase:e=>n(e).map(r).join(" ")}},3442:e=>{"use strict";function t(e,t){var n=e.length,r=new Array(n),o={},a=n,l=function(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}(t),i=function(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}(e);for(t.forEach((function(e){if(!i.has(e[0])||!i.has(e[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")}));a--;)o[a]||c(e[a],a,new Set);return r;function c(e,t,a){if(a.has(e)){var s;try{s=", node was:"+JSON.stringify(e)}catch(e){s=""}throw new Error("Cyclic dependency"+s)}if(!i.has(e))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(e));if(!o[t]){o[t]=!0;var f=l.get(e)||new Set;if(t=(f=Array.from(f)).length){a.add(e);do{var d=f[--t];c(d,i.get(d),a)}while(t);a.delete(e)}r[--n]=e}}}e.exports=function(e){return t(function(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}(e),e)},e.exports.array=t}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,l),n.exports}l.m=o,l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);l.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,l.d(o,a),o},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>e+".js",l.miniCssF=e=>{},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="@public-ui/sample-react:",l.l=(e,t,o,a)=>{if(n[e])n[e].push(t);else{var i,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){i=d;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",r+o),i.src=e),n[e]=[t];var u=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,n)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var a=l.p+l.u(t),i=new Error;l.l(a,(n=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[a,i,c]=n,s=0;if(a.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);c&&c(l)}for(t&&t(n);s<a.length;s++)o=a[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";var e,t,n=l(6761),r=l.t(n,2),o=l(3832),a=l(6909),i=l.t(a,2);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}(t=e||(e={})).Pop="POP",t.Push="PUSH",t.Replace="REPLACE";const s="popstate";function f(e,t){if(!1===e||null==e)throw new Error(t)}function d(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),c({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function b(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var m,g;function v(e,t,n){void 0===n&&(n="/");let r=C(("string"==typeof t?h(t):t).pathname||"/",n);if(null==r)return null;let o=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=A(o[e],N(r));return a}function y(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let l={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};l.relativePath.startsWith("/")&&(f(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(r.length));let i=I([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(f(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+i+'".'),y(e.children,t,c,i)),(null!=e.path||e.index)&&t.push({path:i,score:L(i,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of w(e.path))o(e,t,n);else o(e,t)})),t}function w(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let l=w(r.join("/")),i=[];return i.push(...l.map((e=>""===e?a:[a,e].join("/")))),o&&i.push(...l),i.map((t=>e.startsWith("/")&&""===t?"/":t))}(g=m||(m={})).data="data",g.deferred="deferred",g.redirect="redirect",g.error="error";const k=/^:\w+$/,_=3,x=2,E=1,S=10,O=-2,T=e=>"*"===e;function L(e,t){let n=e.split("/"),r=n.length;return n.some(T)&&(r+=O),t&&(r+=x),n.filter((e=>!T(e))).reduce(((e,t)=>e+(k.test(t)?_:""===t?E:S)),r)}function A(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let e=0;e<n.length;++e){let l=n[e],i=e===n.length-1,c="/"===o?t:t.slice(o.length)||"/",s=$({path:l.relativePath,caseSensitive:l.caseSensitive,end:i},c);if(!s)return null;Object.assign(r,s.params);let f=l.route;a.push({params:r,pathname:I([o,s.pathname]),pathnameBase:R(I([o,s.pathnameBase])),route:f}),"/"!==s.pathnameBase&&(o=I([o,s.pathnameBase]))}return a}function $(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],l=a.replace(/(.)\/+$/,"$1"),i=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=i[n]||"";l=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const c=i[n];return e[r]=o&&!c?void 0:function(e,t){try{return decodeURIComponent(e)}catch(n){return d(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(c||"",r),e}),{}),pathname:a,pathnameBase:l,pattern:e}}function N(e){try{return decodeURI(e)}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function C(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function P(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)):n.map((e=>e.pathnameBase))}function j(e,t,n,r){let o;void 0===r&&(r=!1),"string"==typeof e?o=h(e):(o=c({},e),f(!o.pathname||!o.pathname.includes("?"),z("?","pathname","search",o)),f(!o.pathname||!o.pathname.includes("#"),z("#","pathname","hash",o)),f(!o.search||!o.search.includes("#"),z("#","search","hash",o)));let a,l=""===e||""===o.pathname,i=l?"/":o.pathname;if(null==i)a=n;else{let e=t.length-1;if(!r&&i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?h(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:F(r),hash:B(o)}}(o,a),d=i&&"/"!==i&&i.endsWith("/"),u=(l||"."===i)&&n.endsWith("/");return s.pathname.endsWith("/")||!d&&!u||(s.pathname+="/"),s}const I=e=>e.join("/").replace(/\/\/+/g,"/"),R=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;const D=["post","put","patch","delete"],M=(new Set(D),["get",...D]);function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}new Set(M),Symbol("deferred");const K=n.createContext(null),H=n.createContext(null),V=n.createContext(null),q=n.createContext(null),Z=n.createContext({outlet:null,matches:[],isDataRoute:!1}),W=n.createContext(null);function G(){return null!=n.useContext(q)}function Y(){return G()||f(!1),n.useContext(q).location}function Q(e){n.useContext(V).static||n.useLayoutEffect(e)}function J(){let{isDataRoute:e}=n.useContext(Z);return e?function(){let{router:e}=function(e){let t=n.useContext(K);return t||f(!1),t}(oe.UseNavigateStable),t=le(ae.UseNavigateStable),r=n.useRef(!1);Q((()=>{r.current=!0}));let o=n.useCallback((function(n,o){void 0===o&&(o={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,U({fromRouteId:t},o)))}),[e,t]);return o}():function(){G()||f(!1);let e=n.useContext(K),{basename:t,future:r,navigator:o}=n.useContext(V),{matches:a}=n.useContext(Z),{pathname:l}=Y(),i=JSON.stringify(P(a,r.v7_relativeSplatPath)),c=n.useRef(!1);Q((()=>{c.current=!0}));let s=n.useCallback((function(n,r){if(void 0===r&&(r={}),!c.current)return;if("number"==typeof n)return void o.go(n);let a=j(n,JSON.parse(i),l,"path"===r.relative);null==e&&"/"!==t&&(a.pathname="/"===a.pathname?t:I([t,a.pathname])),(r.replace?o.replace:o.push)(a,r.state,r)}),[t,o,i,l,e]);return s}()}function X(t,r,o,a){G()||f(!1);let{navigator:l}=n.useContext(V),{matches:i}=n.useContext(Z),c=i[i.length-1],s=c?c.params:{},d=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let u,p=Y();if(r){var b;let e="string"==typeof r?h(r):r;"/"===d||(null==(b=e.pathname)?void 0:b.startsWith(d))||f(!1),u=e}else u=p;let m=u.pathname||"/",g=v(t,{pathname:"/"===d?m:m.slice(d.length)||"/"}),y=function(e,t,r,o){var a;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var l;if(null==(l=r)||!l.errors)return null;e=r.matches}let i=e,c=null==(a=r)?void 0:a.errors;if(null!=c){let e=i.findIndex((e=>e.route.id&&(null==c?void 0:c[e.route.id])));e>=0||f(!1),i=i.slice(0,Math.min(i.length,e+1))}let s=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){s=!0,i=d>=0?i.slice(0,d+1):[i[0]];break}}}return i.reduceRight(((e,o,a)=>{let l,f=!1,u=null,p=null;var b;r&&(l=c&&o.route.id?c[o.route.id]:void 0,u=o.route.errorElement||te,s&&(d<0&&0===a?(ie[b="route-fallback"]||(ie[b]=!0),f=!0,p=null):d===a&&(f=!0,p=o.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,a+1)),m=()=>{let t;return t=l?u:f?p:o.route.Component?n.createElement(o.route.Component,null):o.route.element?o.route.element:e,n.createElement(re,{match:o,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:t})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?n.createElement(ne,{location:r.location,revalidation:r.revalidation,component:u,error:l,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}(g&&g.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:I([d,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:I([d,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,o,a);return r&&y?n.createElement(q.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:e.Pop}},y):y}function ee(){let e=function(){var e;let t=n.useContext(W),r=function(e){let t=n.useContext(H);return t||f(!1),t}(ae.UseRouteError),o=le(ae.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[o]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:o},r):null,null)}const te=n.createElement(ee,null);class ne extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(Z.Provider,{value:this.props.routeContext},n.createElement(W.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function re(e){let{routeContext:t,match:r,children:o}=e,a=n.useContext(K);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(Z.Provider,{value:t},o)}var oe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(oe||{}),ae=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ae||{});function le(e){let t=function(e){let t=n.useContext(Z);return t||f(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||f(!1),r.route.id}const ie={};function ce(e){let{to:t,replace:r,state:o,relative:a}=e;G()||f(!1);let{future:l,static:i}=n.useContext(V),{matches:c}=n.useContext(Z),{pathname:s}=Y(),d=J(),u=j(t,P(c,l.v7_relativeSplatPath),s,"path"===a),p=JSON.stringify(u);return n.useEffect((()=>d(JSON.parse(p),{replace:r,state:o,relative:a})),[d,p,a,r,o]),null}function se(e){f(!1)}function fe(t){let{basename:r="/",children:o=null,location:a,navigationType:l=e.Pop,navigator:i,static:c=!1,future:s}=t;G()&&f(!1);let d=r.replace(/^\/*/,"/"),u=n.useMemo((()=>({basename:d,navigator:i,static:c,future:U({v7_relativeSplatPath:!1},s)})),[d,s,i,c]);"string"==typeof a&&(a=h(a));let{pathname:p="/",search:b="",hash:m="",state:g=null,key:v="default"}=a,y=n.useMemo((()=>{let e=C(p,d);return null==e?null:{location:{pathname:e,search:b,hash:m,state:g,key:v},navigationType:l}}),[d,p,b,m,g,v,l]);return null==y?null:n.createElement(V.Provider,{value:u},n.createElement(q.Provider,{children:o,value:y}))}function de(e){let{children:t,location:n}=e;return X(ue(t),n)}function ue(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,o)=>{if(!n.isValidElement(e))return;let a=[...t,o];if(e.type===n.Fragment)return void r.push.apply(r,ue(e.props.children,a));e.type!==se&&f(!1),e.props.index&&e.props.children&&f(!1);let l={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=ue(e.props.children,a)),r.push(l)})),r}function pe(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}r.startTransition,new Promise((()=>{})),n.Component;const be=r.startTransition;function he(t){let{basename:r,children:o,future:a,window:l}=t,i=n.useRef();null==i.current&&(i.current=function(t){return void 0===t&&(t={}),function(t,n,r,o){void 0===o&&(o={});let{window:a=document.defaultView,v5Compat:l=!1}=o,i=a.history,d=e.Pop,h=null,m=g();function g(){return(i.state||{idx:null}).idx}function v(){d=e.Pop;let t=g(),n=null==t?null:t-m;m=t,h&&h({action:d,location:w.location,delta:n})}function y(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:b(e);return f(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,i.replaceState(c({},i.state,{idx:m}),""));let w={get action(){return d},get location(){return t(a,i)},listen(e){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(s,v),h=e,()=>{a.removeEventListener(s,v),h=null}},createHref:e=>n(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){d=e.Push;let o=p(w.location,t,n);r&&r(o,t),m=g()+1;let c=u(o,m),s=w.createHref(o);try{i.pushState(c,"",s)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;a.location.assign(s)}l&&h&&h({action:d,location:w.location,delta:1})},replace:function(t,n){d=e.Replace;let o=p(w.location,t,n);r&&r(o,t),m=g();let a=u(o,m),c=w.createHref(o);i.replaceState(a,"",c),l&&h&&h({action:d,location:w.location,delta:0})},go:e=>i.go(e)};return w}((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=h(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),p("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:b(t))}),(function(e,t){d("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),t)}({window:l,v5Compat:!0}));let m=i.current,[g,v]=n.useState({action:m.action,location:m.location}),{v7_startTransition:y}=a||{},w=n.useCallback((e=>{y&&be?be((()=>v(e))):v(e)}),[v,y]);return n.useLayoutEffect((()=>m.listen(w)),[m,w]),n.createElement(fe,{basename:r,children:o,location:g.location,navigationType:g.action,navigator:m,future:a})}var me,ge,ve,ye;i.flushSync,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(ge=me||(me={})).UseScrollRestoration="useScrollRestoration",ge.UseSubmit="useSubmit",ge.UseSubmitFetcher="useSubmitFetcher",ge.UseFetcher="useFetcher",ge.useViewTransitionState="useViewTransitionState",(ye=ve||(ve={})).UseFetcher="useFetcher",ye.UseFetchers="useFetchers",ye.UseScrollRestoration="useScrollRestoration";var we=l(5509),ke=l(8164),_e=l(4750),xe=l(8125);const Ee=(e,t)=>{if("undefined"!=typeof window)return(()=>{return e=function*(){(0,we.a)((e=>{try{e.shadowRoot instanceof ShadowRoot&&(0,ke.e)(e,(0,ke.S)(e))}catch(e){}return"default"})),yield(0,_e.r)([],[]),Promise.all([l.e(495),l.e(1476)]).then(l.bind(l,1476)).then((e=>{"object"==typeof e&&null!==e&&"function"==typeof e.initialize&&e.initialize()})).catch((e=>{ke.L.error(e)})),xe.p&&l.e(2432).then(l.t.bind(l,2432,23))},new Promise(((t,n)=>{var r=t=>{try{a(e.next(t))}catch(e){n(e)}},o=t=>{try{a(e.throw(t))}catch(e){n(e)}},a=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,o);a((e=e.apply(void 0,null)).next())}));var e})(),(0,we.b)(JSON.parse('[["kol-icon",[[33,"kol-icon",{"_icons":[1],"_label":[1],"state":[32]},null,{"_icons":["validateIcons"],"_label":["validateLabel"]}]]],["kol-span-wc",[[4,"kol-span-wc",{"_accessKey":[1,"_access-key"],"_allowMarkdown":[4,"_allow-markdown"],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_allowMarkdown":["validateAllowMarkdown"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_label":["validateLabel"]}]]],["kol-button-wc_2",[[4,"kol-button-wc",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_ariaControls":["validateAriaControls"],"_ariaExpanded":["validateAriaExpanded"],"_ariaSelected":["validateAriaSelected"],"_customClass":["validateCustomClass"],"_disabled":["validateDisabled"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_role":["validateRole"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_tooltipAlign":["validateTooltipAlign"],"_type":["validateType"],"_value":["validateValue"],"_variant":["validateVariant"]}],[0,"kol-tooltip-wc",{"_accessKey":[1,"_access-key"],"_align":[1],"_id":[1],"_label":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_align":["validateAlign"],"_id":["validateId"],"_label":["validateLabel"]}]]],["kol-table",[[33,"kol-table",{"_allowMultiSort":[4,"_allow-multi-sort"],"_data":[1],"_dataFoot":[1,"_data-foot"],"_headers":[1],"_label":[1],"_minWidth":[1,"_min-width"],"_pagination":[8],"state":[32]},null,{"_allowMultiSort":["validateAllowMultiSort"],"_data":["validateData"],"_dataFoot":["validateDataFoot"],"_headers":["validateHeaders"],"_label":["validateLabel"],"_minWidth":["validateMinWidth"],"_pagination":["validatePagination"]}]]],["kol-form",[[1,"kol-form",{"_on":[16],"_requiredText":[8,"_required-text"],"_errorList":[16],"state":[32]},null,{"_on":["validateOn"],"_requiredText":["validateRequiredText"],"_errorList":["validateErrorList"]}]]],["kol-input-checkbox",[[33,"kol-input-checkbox",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_checked":[1540],"_hideError":[1540,"_hide-error"],"_disabled":[4],"_error":[1],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_indeterminate":[1540],"_label":[1],"_name":[1],"_on":[16],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"_variant":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_checked":["validateChecked"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_indeterminate":["validateIndeterminate"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-input-color",[[33,"kol-input-color",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-date",[[33,"kol-input-date",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[1],"_min":[1],"_name":[1],"_on":[16],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_step":[2],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1025],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-input-email",[[33,"kol-input-email",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_multiple":[4],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-file",[[33,"kol-input-file",{"_accept":[1],"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_multiple":[4],"_name":[1],"_on":[16],"_required":[4],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accept":["validateAccept"],"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-number",[[33,"kol-input-number",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[8],"_min":[8],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_step":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1032],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-password",[[33,"kol-input-password",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-radio",[[33,"kol-input-radio",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_options":[1],"_orientation":[1],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideLabel":["validateHideLabel"],"_hideError":["validateHideError"],"_hint":["validateHint"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_orientation":["validateOrientation"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-range",[[33,"kol-input-range",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[2],"_min":[2],"_name":[1],"_on":[16],"_step":[2],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[2],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_step":["validateStep"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-text",[[33,"kol-input-text",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1025],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-textarea",[[33,"kol-textarea",{"_accessKey":[1,"_access-key"],"_adjustHeight":[4,"_adjust-height"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_resize":[1],"_required":[4],"_rows":[1026],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_adjustHeight":["validateAdjustHeight"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_resize":["validateResize"],"_required":["validateRequired"],"_rows":["validateRows"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-toast-container",[[33,"kol-toast-container",{"state":[32],"enqueue":[64],"closeAll":[64]}]]],["kol-nav",[[33,"kol-nav",{"_collapsible":[4],"_hasCompactButton":[4,"_has-compact-button"],"_hideLabel":[4,"_hide-label"],"_label":[1],"_links":[1],"_orientation":[1],"state":[32]},null,{"_collapsible":["validateCollapsible"],"_hasCompactButton":["validateHasCompactButton"],"_hideLabel":["validateHideLabel"],"_label":["validateLabel"],"_links":["validateLinks"],"_orientation":["validateOrientation"]}]]],["kol-accordion",[[33,"kol-accordion",{"_label":[1],"_level":[2],"_on":[16],"_open":[1540],"state":[32]},null,{"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-breadcrumb",[[33,"kol-breadcrumb",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-card",[[33,"kol-card",{"_on":[16],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"state":[32]},null,{"_on":["validateOn"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"]}]]],["kol-link-wc",[[4,"kol-link-wc",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_ariaCurrentValue":["validateAriaCurrentValue"],"_download":["validateDownload"],"_hideLabel":["validateHideLabel"],"_href":["validateHref"],"_icons":["validateIcons"],"_label":["validateLabel"],"_on":["validateOn"],"_role":["validateRole"],"_tabIndex":["validateTabIndex"],"_target":["validateTarget"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-link-group",[[33,"kol-link-group",{"_listStyleType":[1,"_list-style-type"],"_label":[1],"_links":[1],"_orientation":[1],"state":[32]},null,{"_label":["validateLabel"],"_listStyleType":["validateListStyleType"],"_links":["validateLinks"],"_orientation":["validateOrientation"]}]]],["kol-quote",[[33,"kol-quote",{"_label":[1],"_href":[1],"_quote":[1],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_href":["validateHref"],"_quote":["validateQuote"],"_variant":["validateVariant"]}]]],["kol-tabs",[[33,"kol-tabs",{"_align":[1],"_label":[1],"_on":[16],"_selected":[1538],"_tabs":[1],"state":[32]},null,{"_align":["validateAlign"],"_label":["validateLabel"],"_on":["validateOn"],"_selected":["validateSelected"],"_tabs":["validateTabs"]}]]],["kol-version",[[33,"kol-version",{"_label":[1],"state":[32]},null,{"_label":["validateLabel"]}]]],["kol-button-link",[[33,"kol-button-link",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"getValue":[64]}]]],["kol-link-button",[[33,"kol-link-button",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_customClass":[1,"_custom-class"],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"],"_variant":[1]}]]],["kol-skip-nav",[[33,"kol-skip-nav",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-split-button",[[33,"kol-split-button",{"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32]}]]],["kol-abbr",[[33,"kol-abbr",{"_label":[1],"_tooltipAlign":[1,"_tooltip-align"],"state":[32]},null,{"_label":["validateLabel"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-span",[[33,"kol-span",{"_accessKey":[1,"_access-key"],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1]}]]],["kol-indented-text",[[33,"kol-indented-text",{"state":[32]}]]],["kol-details",[[33,"kol-details",{"_label":[1],"_on":[16],"_open":[1540],"state":[32]},null,{"_label":["validateLabel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-avatar",[[33,"kol-avatar",{"_src":[1],"_label":[1]}]]],["kol-button-group",[[33,"kol-button-group"]]],["kol-heading",[[33,"kol-heading",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"],"_variant":[1]}]]],["kol-image",[[33,"kol-image",{"_alt":[1],"_loading":[1],"_sizes":[1],"_src":[1],"_srcset":[1],"state":[32]},null,{"_alt":["validateAlt"],"_loading":["validateLoading"],"_sizes":["validateSizes"],"_src":["validateSrc"],"_srcset":["validateSrcset"]}]]],["kol-kolibri",[[33,"kol-kolibri",{"_color":[1],"_labeled":[4],"state":[32]},null,{"_color":["validateColor"],"_labeled":["validateLabeled"]}]]],["kol-logo",[[33,"kol-logo",{"_org":[1],"state":[32]},null,{"_org":["validateOrg"]}]]],["kol-modal",[[33,"kol-modal",{"_activeElement":[1040],"_label":[1],"_on":[16],"_width":[1],"state":[32]},null,{"_activeElement":["validateActiveElement"],"_label":["validateLabel"],"_on":["validateOn"],"_width":["validateWidth"]}]]],["kol-popover-wc",[[4,"kol-popover-wc",{"_align":[1],"_show":[1540],"state":[32]},null,{"_align":["validateAlign"],"_show":["validateShow"]}]]],["kol-progress",[[33,"kol-progress",{"_label":[1],"_max":[2],"_unit":[1],"_value":[2],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_max":["validateMax"],"_unit":["validateUnit"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-spin",[[33,"kol-spin",{"_show":[1540],"_variant":[1],"state":[32]},null,{"_show":["validateShow"],"_variant":["validateVariant"]}]]],["kol-symbol",[[0,"kol-symbol",{"_label":[1],"_symbol":[1],"state":[32]},null,{"_label":["validateLabel"],"_symbol":["validateSymbol"]}]]],["kol-pagination",[[33,"kol-pagination",{"_boundaryCount":[2,"_boundary-count"],"_customClass":[1,"_custom-class"],"_label":[1],"_hasButtons":[8,"_has-buttons"],"_page":[2],"_pageSize":[1026,"_page-size"],"_pageSizeOptions":[1,"_page-size-options"],"_on":[16],"_siblingCount":[2,"_sibling-count"],"_tooltipAlign":[1,"_tooltip-align"],"_max":[2],"state":[32]},null,{"_boundaryCount":["validateBoundaryCount"],"_customClass":["validateCustomClass"],"_label":["validateLabel"],"_hasButtons":["validateHasButtons"],"_on":["validateOn"],"_page":["validatePage"],"_pageSize":["validatePageSize"],"_pageSizeOptions":["validatePageSizeOptions"],"_siblingCount":["validateSiblingCount"],"_max":["validateMax"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-button-link-text-switch",[[0,"kol-button-link-text-switch",{"_link":[16]}]]],["kol-badge",[[33,"kol-badge",{"_color":[1],"_icons":[1],"_label":[1],"_smartButton":[1,"_smart-button"],"state":[32]},null,{"_color":["validateColor"],"_smartButton":["validateSmartButton"]}]]],["kol-avatar-wc",[[0,"kol-avatar-wc",{"_src":[1],"_label":[1],"state":[32]},null,{"_src":["validateSrc"],"_label":["validateLabel"]}]]],["kol-alert-wc_2",[[4,"kol-alert-wc",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]},null,{"_alert":["validateAlert"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_type":["validateType"],"_variant":["validateVariant"]}],[4,"kol-heading-wc",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_level":["validateLevel"],"_secondaryHeadline":["validateSecondaryHeadline"],"_variant":["validateVariant"]}]]],["kol-select",[[33,"kol-select",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_multiple":[4],"_name":[1],"_on":[16],"_options":[1],"_required":[4],"_rows":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1025],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_required":["validateRequired"],"_rows":["validateRows"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-button-group-wc",[[4,"kol-button-group-wc",{"state":[32]}]]],["kol-button",[[33,"kol-button",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"getValue":[64]}]]],["kol-link",[[33,"kol-link",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"]}]]],["kol-alert",[[33,"kol-alert",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]}]]],["kol-input",[[4,"kol-input",{"_accessKey":[1,"_access-key"],"_alert":[4],"_currentLength":[2,"_current-length"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[4,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[16],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_readOnly":[4,"_read-only"],"_renderNoLabel":[4,"_render-no-label"],"_required":[4],"_slotName":[1,"_slot-name"],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[4]}]]]]'),t)};!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var Se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(e){var t,n;t=Se,n=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"];function o(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(t,n){for(var o=0;o<r.length;o++){var a=r[o];this[a]=o<t?e:this.methodFactory(a,t,n)}this.log=this.debug}function i(e,n,r){return function(){typeof console!==t&&(l.call(this,n,r),this[e].apply(this,arguments))}}function c(r,l,c){return function(r){return"debug"===r&&(r="log"),typeof console!==t&&("trace"===r&&n?a:void 0!==console[r]?o(console,r):void 0!==console.log?o(console,"log"):e)}(r)||i.apply(this,arguments)}function s(e,n,o){var a,i=this;n=null==n?"WARN":n;var s="loglevel";function f(){var e;if(typeof window!==t&&s){try{e=window.localStorage[s]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=n.indexOf(encodeURIComponent(s)+"=");-1!==r&&(e=/^([^;]+)/.exec(n.slice(r))[1])}catch(e){}return void 0===i.levels[e]&&(e=void 0),e}}"string"==typeof e?s+=":"+e:"symbol"==typeof e&&(s=void 0),i.name=e,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=o||c,i.getLevel=function(){return a},i.setLevel=function(n,o){if("string"==typeof n&&void 0!==i.levels[n.toUpperCase()]&&(n=i.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(a=n,!1!==o&&function(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&s){try{return void(window.localStorage[s]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"="+n+";"}catch(e){}}}(n),l.call(i,n,e),typeof console===t&&n<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(e){n=e,f()||i.setLevel(e,!1)},i.resetLevel=function(){i.setLevel(n,!1),function(){if(typeof window!==t&&s){try{return void window.localStorage.removeItem(s)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var d=f();null==d&&(d=n),i.setLevel(d,!1)}var f=new s,d={};f.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new s(e,f.getLevel(),f.methodFactory)),t};var u=typeof window!==t?window.log:void 0;return f.noConflict=function(){return typeof window!==t&&window.log===f&&(window.log=u),f},f.getLoggers=function(){return d},f.default=f,f},e.exports?e.exports=n():t.log=n()}({exports:{}});const Oe="object"==typeof window?window:"object"==typeof global?global:"object"==typeof self?self:{},Te=new Map,Le=[],Ae=new Set,$e=new Map,Ne=/--[^;]+/g,Ce=/:/;("object"!=typeof Oe.A11yUi||null===Oe.A11yUi)&&(Oe.A11yUi={CSS_STYLE_CACHE:$e,HYDRATED_HISTORY:Le,STYLING_TASK_QUEUE:Te});const ze=(e,t)=>"object"==typeof Oe.A11yUi&&null!==Oe.A11yUi&&"object"==typeof Oe.A11yUi.Themes&&null!==Oe.A11yUi.Themes&&"object"==typeof Oe.A11yUi.Themes[e]&&null!==Oe.A11yUi.Themes[e]&&"string"==typeof Oe.A11yUi.Themes[e][t]?Oe.A11yUi.Themes[e][t].replace(/\r?\n/g,""):"",Pe=(e,t,n)=>{const r=t.name||"default";let o;try{if(null===e.shadowRoot)throw new Error("ShadowRoot is null");o=e.shadowRoot}catch{o=e}if($e.get(r)?.has(e.tagName))je(e,o,$e.get(r)?.get(e.tagName),n);else{const a=ze(r,"PROPERTIES"),l=ze(r,"GLOBAL"),i=ze(r,e.tagName);!1===Ae.has(r)&&((e,t)=>{let n=t.match(Ne);if(Array.isArray(n)){n=n.filter((e=>Ce.test(e)));const t=document.createElement("style");t.innerHTML=`.${e} {${n.join(";")}}`,document.querySelector("head")?.appendChild(t)}Ae.add(e)})(r,l);const c=[a,l,i];((e,t,n)=>{if(!1!==n){const r=[...Array.from(e.childNodes).filter((e=>e instanceof HTMLStyleElement&&"STYLE"===e.tagName))];let o;try{o=[...Array.from(e.adoptedStyleSheets)]}catch{o=[]}"before"===n?.mode?(r.reverse().forEach((e=>t.unshift(e.innerHTML))),o.reverse().forEach((e=>t.unshift(Array.from(e.cssRules).map((e=>e.cssText)).join(""))))):"after"===n?.mode&&(r.forEach((e=>t.push(e.innerHTML))),o.forEach((e=>t.push(Array.from(e.cssRules).map((e=>e.cssText)).join("")))))}})(o,c,t.encroachCss),"debug"===t.loglevel&&console.log(e.tagName,c),!0===t.cache&&(!1===$e.has(r)&&$e.set(r,new Map),$e.get(r)?.set(e.tagName,c)),je(e,o,c,n)}},je=(e,t,n,r)=>{(e=>{for(const t of Array.from(e.childNodes)){if(!(t instanceof HTMLStyleElement&&"STYLE"===t.tagName))break;e.removeChild(t)}})(t),((e,t)=>{try{const n=[];t.forEach((e=>{const t=new CSSStyleSheet;t.replaceSync(e),n.push(t)})),e.adoptedStyleSheets=n}catch{t.reverse().forEach((t=>{const n=document.createElement("style");n.innerHTML=t,e.insertBefore(n,e.firstChild)}))}})(t,n),e.style.display=r},Ie=(e,t)=>{(e=>{Te.delete(e)})(e),(e=>{"debug"===e.loglevel&&Le.push({timestamp:Date.now(),numberOfTasks:Te.size})})(t)},Re=e=>{for(const t of e)if(Te.has(t.target)&&t.target.classList.contains("hydrated")){const{styleDisplay:e,themeDetails:n}=Te.get(t.target);Pe(t.target,n,e),Ie(t.target,n)}};let Fe;try{Fe=new MutationObserver(Re)}catch{Fe=null}var Be=(e=>(e[e.error=0]="error",e[e.warning=1]="warning",e[e.info=2]="info",e[e.success=3]="success",e[e.message=4]="message",e[e.close=5]="close",e[e["form-description"]=6]="form-description",e[e.of=7]="of",e[e.characters=8]="characters",e[e.new=9]="new",e[e["no-entries"]=10]="no-entries",e[e["change-order"]=11]="change-order",e[e["action-running"]=12]="action-running",e[e["action-done"]=13]="action-done",e[e["page-first"]=14]="page-first",e[e["page-back"]=15]="page-back",e[e["page-next"]=16]="page-next",e[e["page-last"]=17]="page-last",e[e["entries-per-site"]=18]="entries-per-site",e[e["page-current"]=19]="page-current",e[e["page-selected"]=20]="page-selected",e[e["page-per-site"]=21]="page-per-site",e[e["logo-description"]=22]="logo-description",e[e["open-link-in-tab"]=23]="open-link-in-tab",e[e["kolibri-logo"]=24]="kolibri-logo",e))(Be||{}),De=(e=>(e[e.abbr=0]="abbr",e[e.accordion=1]="accordion",e[e["accordion-group"]=2]="accordion-group",e[e.alert=3]="alert",e[e.avatar=4]="avatar",e[e.badge=5]="badge",e[e.breadcrumb=6]="breadcrumb",e[e.button=7]="button",e[e["button-group"]=8]="button-group",e[e["button-link"]=9]="button-link",e[e.card=10]="card",e[e.details=11]="details",e[e.form=12]="form",e[e.heading=13]="heading",e[e.icon=14]="icon",e[e.image=15]="image",e[e["indented-text"]=16]="indented-text",e[e["input-checkbox"]=17]="input-checkbox",e[e["input-color"]=18]="input-color",e[e["input-date"]=19]="input-date",e[e["input-email"]=20]="input-email",e[e["input-file"]=21]="input-file",e[e["input-number"]=22]="input-number",e[e["input-password"]=23]="input-password",e[e["input-radio"]=24]="input-radio",e[e["input-range"]=25]="input-range",e[e["input-text"]=26]="input-text",e[e.link=27]="link",e[e["link-button"]=28]="link-button",e[e["link-group"]=29]="link-group",e[e.modal=30]="modal",e[e.nav=31]="nav",e[e.pagination=32]="pagination",e[e.progress=33]="progress",e[e.select=34]="select",e[e.separator=35]="separator",e[e["skip-nav"]=36]="skip-nav",e[e.spin=37]="spin",e[e["split-button"]=38]="split-button",e[e.symbol=39]="symbol",e[e.table=40]="table",e[e.tabs=41]="tabs",e[e.textarea=42]="textarea",e[e["toast-container"]=43]="toast-container",e[e.toolbar=44]="toolbar",e[e.tooltip=45]="tooltip",e))(De||{});const Me=new class{constructor(e,t,n){this.createTheme=(e,t)=>((e,t)=>n=>n(e,t,{append:!1}))(e,t),this.createTranslation=(e,t)=>((e,t)=>n=>n(e,t))(e,t),this.Prefix=e,this.Key=Object.getOwnPropertyNames(t),this.Tag=Object.getOwnPropertyNames(n)}}("kol",Be,De),Ue=e=>e.join(""),Ke=Me.createTheme("bmf",{GLOBAL:Ue`
		/* Design Tokens */
		:host {
			--border-radius: 5px;
			--color-midnight: #004b76;
			--color-ocean: #0077b6;
			--color-sky: #99c9e2;
			--color-ice: #cce4f0;
			--color-crystal: #f0f7fb;
			--color-crimson: #780f2d;
			--color-red: #c0003c;
			--color-pink: #f2ccd8;
			--color-blossom: #fbf0f3;
			--color-olive: #004d38;
			--color-green: #005c45;
			--color-jungle: #00854a;
			--color-lime: #c1ca31;
			--color-mint: #ccdeda;
			--color-haze: #f0f5f4;
			--color-fire: #7a2e1f;
			--color-orange: #c44931;
			--color-coral: #f5dcd7;
			--color-peach: #fdf6f5;
			--color-bronze: #6a4a06;
			--color-yellow: #f9e03a;
			--color-ivory: #fdf3b0;
			--color-wine: #3f1d4a;
			--color-purple: #6b4479;
			--color-lavender: #dfd6de;
			--color-black: #202020;
			--color-metal: #454d4f;
			--color-grey: #576164;
			--color-granite: #bec5c9;
			--color-silver: #e5e8e9;
			--color-smoke: #f2f3f4;
			--color-cloud: #f6f7f7;
			--color-white: #ffffff;
			--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;
			--font-size: 16px;
			--spacing: 0.25em;
		}
		:host {
			font-family: var(--font-family); /* font-size: var(--font-size); */
			background-color: transparent; /* Reset global background-color defined by components */
		}
		* {
			box-sizing: border-box;
		}
		*:not(i) {
			font-family: var(--font-family);
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: var(--font-family);
			font-size: var(--font-size);
			margin: 0;
			padding: 0;
		}
		*[tabindex]:focus,
		kol-input:not(.checkbox, .radio) .input:focus-within,
		kol-input:is(.checkbox, .radio) input:focus,
		summary:focus {
			cursor: pointer;
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		kol-heading-wc {
			font-weight: 700;
		}
		kol-tooltip-wc .tooltip-floating {
			border: 1px solid var(--color-metal);
			border-radius: var(--border-radius);
		}
		kol-tooltip-wc .tooltip-arrow {
			border: 1px solid var(--color-metal);
		}
		kol-tooltip-wc .tooltip-area {
			background-color: var(--color-white);
			color: var(--color-black);
		}
		kol-tooltip-wc .tooltip-content {
			border-radius: var(--border-radius);
			line-height: 1.5em;
			padding: 0.5rem 0.75rem;
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
	`,"KOL-BUTTON":Ue`
		:is(a, button) {
			font-size: 1.125em;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		:is(a, button):disabled > kol-span-wc {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
			color: var(--color-white);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-midnight);
			color: var(--color-midnight);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.success :is(a, button) > kol-span-wc,
		.success :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-green);
			border-color: var(--color-green);
			color: var(--color-white);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-white);
			background-color: var(--color-white);
			box-shadow: none;
			color: var(--color-midnight);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.success :is(a, button):active > kol-span-wc,
		.success :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-crimson);
			border-color: var(--color-crimson);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.success :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-white);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** button with inline focus */
		:is(a, button).focus-inline:focus > kol-span-wc {
			outline-offset: -2px;
		}
		/** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
		/** CUSTOM_CLASS */
		:is(a, button).icon-only > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).icon-only > kol-span-wc > span > span {
			display: block;
		}
	`,"KOL-INPUT-TEXT":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
		}
	`,"KOL-INPUT-PASSWORD":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(button, input, label, option, select, textarea) {
			opacity: 1;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-INPUT-NUMBER":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-INPUT-DATE":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-INPUT-EMAIL":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-INPUT-FILE":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		input {
			border: none;
		}
		input[type='file'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(button, input, label, option, select, textarea) {
			opacity: 1;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-TEXTAREA":Ue`
		kol-input {
			gap: 0.25em;
			display: grid;
			grid-template-areas: 'error error' 'label counter' 'input input' 'hint hint';
			grid-template-columns: 1fr 115px;
		}
		kol-input .error {
			order: 1;
			grid-area: error;
		}
		kol-input label {
			order: 2;
			grid-area: label;
		}
		kol-input .counter {
			order: 2;
			grid-area: counter;
			justify-self: end;
		}
		kol-input .input {
			order: 3;
			grid-area: input;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
			grid-area: hint;
		}
		textarea {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		textarea:read-only,
		textarea:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		.disabled {
			opacity: 0.33;
		}
		select[multiple],
		textarea {
			overflow: auto;
		}
		textarea {
			display: block;
		}
		.input {
			position: relative;
		}
		.input textarea ~ span {
			position: absolute;
			top: -1.5rem;
			right: 0;
			color: var(--color-grey);
		}
	`,"KOL-ALERT":Ue`
		.msg,
		.msg {
			border-width: 0;
		}
		kol-alert-wc {
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			display: flex;
			width: 100%;
			overflow: unset;
			border-color: transparent;
			background-color: white;
		}
		kol-alert-wc > .heading {
			display: flex;
			gap: 0.5em;
			place-items: center;
		}
		kol-alert-wc > .heading > div {
			display: grid;
			gap: var(--kolibri-spacing);
		}
		.msg {
			background-color: transparent;
		}
		.msg > .heading {
			place-items: flex-start;
		}
		.msg > .heading > kol-icon {
			place-self: baseline;
		}
		kol-alert-wc > .heading > div {
			display: grid;
			gap: var(--spacing);
		}
		kol-alert-wc > .heading > kol-button-wc.close {
			place-self: center;
		}
		.msg {
			align-items: start;
		}
		.default {
			border-color: var(--color-grey);
		}
		.default.msg .heading-icon {
			color: var(--color-grey);
		}
		.error {
			border-color: var(--color-red);
		}
		.error.msg .heading-icon {
			color: var(--color-red);
		}
		.info {
			border-color: var(--color-midnight);
		}
		.info.msg .heading-icon {
			color: var(--color-midnight);
		}
		.success {
			border-color: var(--color-green);
		}
		.success.msg .heading-icon {
			color: var(--color-green);
		}
		.warning {
			border-color: var(--color-orange);
		}
		.warning.msg .heading-icon {
			color: var(--color-orange);
		}
		.heading-icon {
			color: white;
		}
		kol-alert-wc .heading .heading-icon {
			padding: 0;
		}
		.msg > .heading > .heading-icon {
			padding-top: 0;
			place-items: baseline;
		}
		.msg > .heading > .heading-icon::part(icon) {
			line-height: 1.375rem;
		}
		.msg > .heading > div > kol-heading-wc {
			line-height: 20px;
			padding-top: 0.125rem;
		}
		.msg.default .heading > div > kol-heading-wc {
			color: var(--color-grey);
		}
		.msg.error .heading > div > kol-heading-wc {
			color: var(--color-red);
		}
		.msg.info .heading > div > kol-heading-wc {
			color: var(--color-midnight);
		}
		.msg.success .heading > div > kol-heading-wc {
			color: var(--color-green);
		}
		.msg.warning .heading > div > kol-heading-wc {
			color: var(--color-orange);
		} /*.msg > .heading > div {display: grid;grid-template-columns: 1fr auto;}.msg > .heading > div > .content {grid-row: 2;grid-column: 1;}.msg > div > .close {display: flex;}*/
		.msg.default .close .icon {
			color: var(--color-grey);
		}
		.msg.error .close .icon {
			color: var(--color-red);
		}
		.msg.info .close .icon {
			color: var(--color-midnight);
		}
		.msg.success .close .icon {
			color: var(--color-green);
		}
		.msg.warning .close .icon {
			color: var(--color-orange);
		}
		.card {
			border-width: 2px;
			border-style: solid;
			filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));
			flex-direction: column;
		}
		.card > .heading {
			padding: 0.5rem 1rem;
		}
		.card.hasCloser > .heading {
			padding-top: 0;
			padding-bottom: 0;
			padding-right: 0;
		}
		.card > .heading > div {
			width: 100%;
			min-height: 1.25rem;
		}
		.card > .heading .heading-icon {
			justify-self: right;
			margin-top: -4px;
		}
		.card > .heading kol-heading-wc {
			width: 100%;
			color: white;
			display: flex;
			font-size: 1.25rem;
			line-height: 1.25rem;
		}
		.card > .heading kol-heading-wc > * {
			margin: auto 0;
		}
		.card > .heading kol-button-wc button:focus {
			outline-color: var(--color-white);
			outline-offset: -3px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline 0.1s linear;
		}
		.card > .heading kol-button-wc button:hover {
			background-color: rgba(32, 32, 32, 0.2);
		}
		.card > .heading kol-button-wc button:active {
			background-color: rgba(32, 32, 32, 0.4);
		}
		.card > .heading kol-button-wc button:hover:focus {
			background-color: rgba(32, 32, 32, 0.1);
		}
		.card > .content {
			padding: 1rem;
			max-height: 9.5rem;
			overflow-y: auto;
		}
		.card.default > .heading {
			background-color: var(--color-grey);
			border-bottom: 2px solid var(--color-grey);
		}
		.card.error > .heading {
			background-color: var(--color-red);
			border-bottom: 2px solid var(--color-red);
		}
		.card.info > .heading {
			background-color: var(--color-midnight);
			border-bottom: 2px solid var(--color-midnight);
		}
		.card.success > .heading {
			background-color: var(--color-green);
			border-bottom: 2px solid var(--color-green);
		}
		.card.warning > .heading {
			background-color: var(--color-orange);
			border-bottom: 2px solid var(--color-orange);
		}
		:is(.error, .info, .success, .warning) .heading-icon::part(icon) {
			font-family: 'Font Awesome 6 Free' !important;
			font-weight: 900;
			height: 1.25rem;
			width: 1.25rem;
		}
		:is(.error, .info, .success, .warning) .heading-icon {
			font-size: 1.25rem !important;
		}
		.error .heading-icon::part(icon)::before {
			content: '\\f06a';
		}
		.info .heading-icon::part(icon)::before {
			content: '\\f05a';
		}
		.success .heading-icon::part(icon)::before {
			content: '\\f058';
		}
		.warning .heading-icon::part(icon)::before {
			content: '\\f071';
		}
		.card > div > .content {
			grid-row: 2;
			grid-column: 1 / span 2;
		}
		.card.default .close {
			background-color: var(--color-grey);
		}
		.card.error .close {
			background-color: var(--color-red);
		}
		.card.info .close {
			background-color: var(--color-midnight);
		}
		.card.success .close {
			background-color: var(--color-green);
		}
		.card.warning .close {
			background-color: var(--color-orange);
		}
		.close > button {
			min-width: 44px;
			color: var(--color-white);
			min-height: 44px;
			display: grid;
			gap: 0.25em;
			line-height: 1.5rem;
			font-family: var(--font-family);
			font-weight: 700;
			cursor: pointer;
			border-radius: 1.5em;
			border-style: solid;
			border-width: 2px;
			font-size: 1rem;
			align-items: center;
			padding: 8px 14px;
			justify-content: center;
			font-style: normal;
			text-align: center;
			width: inherit;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			background-color: rgba(0, 0, 0, 0);
			border-color: rgba(0, 0, 0, 0);
		}
		.close > button {
			padding: 8px;
		}
		.close > button kol-icon {
			display: flex;
			width: 1em;
			height: 1em;
			font-size: 1rem;
		}
		.close > button kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		.close > button kol-icon::part(icon)::before {
			content: '\\f00d';
		}
		.close > button:active {
			box-shadow: none;
			outline: none;
		}
	`,"KOL-HEADING":Ue`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			color: inherit;
			font-style: normal;
			margin: 0;
			padding: 0;
		}
		.headline-h1,
		.headline-h2,
		.headline-h3 {
			font-weight: 700;
		}
		.headline-h1 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h2 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		.headline-h3 {
			font-size: 1.125rem;
			line-height: 1.5rem;
		}
	`,"KOL-BADGE":Ue`
		:host {
			display: inline-block;
		}
		:host > span {
			border-radius: 0.3125rem;
			display: inline-flex;
			font-style: normal;
		}
		:host > span.smart-button {
			align-items: center;
		}
		:host > span kol-button-wc:hover > button {
			background-color: var(--color-ocean);
			color: var(--color-white);
		}
		:host > span kol-button-wc > button {
			color: inherit;
			font-size: 1rem;
			border-top-right-radius: 0.3125rem;
			border-bottom-right-radius: 0.3125rem;
			padding: 2px;
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.75rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
	`,"KOL-BUTTON-GROUP":Ue`
		:host > kol-button-group-wc {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5em;
		}
	`,"KOL-INDENTED-TEXT":Ue`
		:host > div {
			background-color: var(--color-white);
			border-left: none;
			box-shadow: -2px 0px 0px var(--color-ocean);
			padding: 0 0.5em;
			width: 100%;
		}
	`,"KOL-LINK":Ue`
		:is(a, button) {
			color: var(--color-midnight);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: 2px solid;
		}
		:is(a, button):hover {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
			line-height: 1em;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-DETAILS":Ue`
		details > summary {
			border-radius: var(--border-radius);
		}
		details kol-indented-text {
			margin: 0.25em 0px 0px 0.65em;
		}
		kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
			margin-right: 0.5rem;
		}
		details kol-icon::part(icon):before {
			content: '\\f054';
		}
	`,"KOL-SPIN":Ue`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: #fc0;
			}
		}
	`,"KOL-PROGRESS":Ue`
		.bar > div {
			flex-direction: column;
			gap: 0.5rem !important;
			width: 100px;
		}
		.bar > div text {
			color: var(--color-black);
			align-self: flex-end;
		}
		.bar svg {
			height: 1rem;
		}
		.bar .background {
			fill: var(--color-ice);
			stroke: var(--color-ice);
			stroke-width: 1px;
		}
		.bar .progress {
			fill: var(--color-midnight);
			stroke: var(--color-midnight);
		}
		.bar .border {
			display: none;
		}
		.cycle {
			overflow: visible;
		}
		.cycle .whitespace,
		.cycle .border {
			stroke: transparent;
		}
		.cycle .background {
			stroke: var(--color-ice);
			stroke-width: 1rem;
		}
		.cycle .progress {
			stroke: var(--color-midnight);
			stroke-width: 1rem;
		}
		.cycle text:first-of-type {
			color: var(--color-grey);
			line-height: 1.25rem;
			alignment-baseline: after-edge;
		}
		.cycle text:last-of-type {
			color: var(--color-black);
			font-size: 1.75rem;
			font-weight: 700;
			line-height: 1.5rem;
			alignment-baseline: central;
		}
	`,"KOL-SELECT":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		select {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input.icon-left kol-icon:first-child {
			margin-right: 0.5em;
		}
		.input.icon-right kol-icon:last-child {
			margin-left: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		select:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(select, label, option) {
			opacity: 1;
		}
		kol-input.disabled :is(select, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
		}
		select[multiple] {
			overflow: auto;
		}
		select option {
			margin: 1px 0;
			border-radius: 0.25em;
			cursor: pointer;
		}
		select:not([multiple]) option {
			padding: 0.5em;
		}
		select option:disabled {
			cursor: not-allowed;
		}
		option:active:not(:disabled),
		option:checked:not(:disabled),
		option:focus:not(:disabled),
		option:hover:not(:disabled) {
			background: var(--color-ocean);
			color: white;
		}
	`,"KOL-INPUT-COLOR":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input[type='color'] {
			border: none;
			min-height: 40px !important;
		}
		input[type='color'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:not([type='color']):read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-ACCORDION":Ue`
		kol-span-wc > span {
			display: flex;
			place-items: baseline center;
			text-align: left;
		}
		:host > div > kol-heading-wc button {
			border-radius: var(--border-radius);
			min-height: 22px;
			padding: 12px 8px;
		}
		:host > div > kol-heading-wc button kol-span-wc {
			font-weight: 700;
			font-size: 1.125rem;
			line-height: 20px;
			gap: 0.5rem;
		}
		:host > div > kol-heading-wc button kol-span-wc > span {
			gap: 0.5em;
		}
		:host > div > kol-heading-wc button kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
			color: var(--color-midnight);
		}
		:host > div.open > kol-heading-wc button kol-icon::part(icon)::before {
			content: '\\f078';
		}
		:host > div:not(.open) > kol-heading-wc button kol-icon::part(icon)::before {
			content: '\\f054';
		}
		:host > div {
			width: 100%;
			height: 100%;
			display: grid;
		}
		:host > div div[class='header'],
		:host > div[class*='open'] div[class='content'] {
			margin: 0;
		}
		:host > div div[class='content'] {
			padding-left: 2.25em;
			padding-bottom: 12px;
			padding-right: 8px;
		}
		button:focus {
			outline: none;
		}
		:host > .accordion:focus-within {
			border-radius: var(--border-radius);
			cursor: pointer;
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
	`,"KOL-TABLE":Ue`
		:host * {
			hyphens: var(--kolibri-hyphens);
			font-family: var(--kolibri-font-family);
			line-height: var(--kolibri-line-height);
			word-break: break-word;
		}
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		caption {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		tbody tr:last-child th,
		tr:last-child td {
			border-bottom-width: 0;
		}
		th {
			padding: 0.75em 0;
			font-weight: 700;
			color: var(--color-black);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5em;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		th,
		td {
			border-bottom: 1px solid var(--color-granite);
			height: 1.25rem;
		}
		tbody th {
			text-align: left;
		}
		tbody th,
		td {
			padding: 1em 0;
			vertical-align: top;
		}
		th kol-button,
		td kol-button {
			margin-top: -0.75rem;
			margin-bottom: -0.75rem;
		}
		.table-sort-button .button {
			font-weight: 700;
		}
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			display: grid;
			align-items: center;
			justify-items: center;
			gap: 1em;
		}
		.pagination {
			align-items: center;
			justify-content: start;
			grid-template-columns: auto 1fr;
		}
		@media (min-width: 1024px) {
			:host > div:last-child,
			:host > div:last-child > div:last-child {
				grid-auto-flow: column;
			}
			:host > div:last-child kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,"KOL-NAV":Ue`
		* {
			margin: 0;
			padding: 0;
		}
		nav {
			font-family: var(--font-family);
			font-size: var(--font-size);
			width: 100%;
		}
		ul {
			list-style: none;
		}
		kol-link-wc,
		a {
			height: 100%;
			min-height: 44px;
			display: flex;
			place-items: center;
		}
		.entry > kol-button-link-text-switch {
			width: 100%;
		}
		.entry > kol-button-link-text-switch > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			background-color: var(--color-white);
			text-decoration: none;
			color: var(--color-midnight);
			width: 100%;
			display: flex;
			align-items: center;
			font-style: normal;
			line-height: 1.5rem;
			min-height: 44px;
			min-width: 44px;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			letter-spacing: 0.175px;
		}
		.entry > kol-button-link-text-switch > :is(kol-link-wc, kol-button-wc):first-child:is(a, button) {
			color: var(--color-midnight);
			text-decoration: none;
		}
		.entry > kol-button-link-text-switch > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {
			border-left-color: var(--color-ocean);
			background-color: var(--color-ocean);
			letter-spacing: unset;
		}
		.entry > kol-button-link-text-switch > :is(kol-link-wc, kol-button-wc, kol-span-wc):first-child:hover > :is(a, button, span) {
			color: var(--color-white);
			background-color: var(--color-ocean);
			font-weight: 700;
			letter-spacing: unset;
		}
		:is(.active, .selected).list.entry > kol-button-link-text-switch > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			background-color: var(--color-smoke);
		}
		:is(.active, .selected) > .entry > kol-button-link-text-switch > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			background-color: var(--color-ice);
			color: var(--color-midnight);
			font-weight: 700;
		}
		:is(.active, .selected) > .entry > kol-button-link-text-switch > :is(kol-link-wc, kol-button-wc, kol-span-wc):first-child > :is(a, button, span) {
			font-weight: 700;
		}
		:is(.active, .selected) > .entry > kol-button-link-text-switch > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {
			color: var(--color-white);
			letter-spacing: unset;
		}
		.entry > kol-button-link-text-switch > kol-span-wc > span,
		.entry :is(a, button) {
			border-left-color: transparent;
			border-left-style: solid;
			border-left-width: 0.5rem;
			padding: 0.75rem 0.5rem 0.75rem 0.25rem;
		}
		:is(.active, .selected) kol-button-link-text-switch :is(a, button),
		[exportparts*='selected'] a {
			border-left-color: var(--color-midnight);
		}
		:is(kol-button-wc button, kol-link-wc a) {
			color: var(--color-midnight);
		}
		kol-link-wc a {
			text-decoration: none;
		}
		kol-link-wc kol-icon {
			display: none;
		}
		/** Compact mode */
		.entry.hide-label :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			place-items: center;
		}
		.entry.hide-label :is(a, button) {
			padding: 0;
			border-left: 0;
		}
	`,"KOL-CARD":Ue`
		/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: white;
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 0.25rem var(--color-grey);
			border-radius: 0.25rem;
		}
		:host kol-heading-wc {
			line-height: 1.75rem;
		}
		:host div.header {
			padding: 1rem 1rem 0.5rem 1rem;
		}
		:host div.content {
			padding: 0.5rem 1rem 1rem;
			overflow: hidden;
		}
		:host div.footer {
			padding: 0.5rem 1rem;
		}
		:host > div > div.content + div.footer {
			border-top: 2px solid var(--color-ice);
		}
	`,"KOL-INPUT-CHECKBOX":Ue`
		/* INPUT */
		:host kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
			min-height: 44px;
		}
		:host kol-input.default:not(.hide-label) {
			grid-template-columns: 1.5rem auto;
			gap: 0.4em;
		}
		:host kol-input.switch:not(.hide-label) {
			grid-template-columns: 3.5rem auto;
			gap: 0.4em;
		}
		:host kol-input > div.input {
			display: inherit;
			min-height: 44px;
			order: 2;
		}
		:host kol-input > div.input input {
			margin: 0px;
		}
		:host kol-input:not(.disabled) :is(.input, label) {
			cursor: pointer;
		}
		:host kol-input.disabled :is(.input, label) {
			cursor: not-allowed;
		}
		:host kol-input > label {
			order: 3;
		}
		:host kol-input > kol-alert.error {
			order: 1;
			padding-top: 0.25em;
			grid-column: span 2 / auto;
		}
		:host kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		:host kol-input.error input:focus,
		kol-input.error select:focus,
		kol-input.error textarea:focus {
			outline-color: var(--color-red) !important;
		}
		:host kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		:host input {
			order: 1;
			width: 100%;
			border-color: var(--color-grey);
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			line-height: 24px;
			font-size: 1rem;
		}
		:host input:hover {
			border-color: var(--color-midnight);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		:host input:focus:hover {
			box-shadow: none;
		}
		:host input:active {
			box-shadow: none;
		}
		:host kol-alert {
			display: block;
			width: 100%;
		} /* CHECKBOX */
		:host kol-input label span {
			margin-top: 0.125rem;
		}
		:host .required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		:host kol-input input[type='checkbox'] {
			appearance: none;
			background-color: white;
			transition: 0.5s;
		}
		:host kol-input input[type='checkbox']:before {
			content: '';
		}
		:host kol-input input[type='checkbox']:checked {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
		}
		:host kol-input.default .checkbox-container {
			justify-content: flex-start;
		}
		:host kol-input.default input[type='checkbox']:indeterminate {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
		}
		:host kol-input.default .icon {
			color: var(--color-white);
			margin: -0.125rem 0 0 0.25rem; /* visually align */
		}
		:host kol-input.default input[type='checkbox'] {
			border-radius: var(--border-radius);
			height: calc(6 * var(--spacing));
			min-width: calc(6 * var(--spacing));
			width: calc(6 * var(--spacing));
		}
		.default {
			.icon::part(icon) {
				font-family: 'Font Awesome 6 Free';
				font-weight: 900;
			}

			&.checked .icon::part(icon)::before {
				content: '\\f00c';
			}

			&.indeterminate .icon::part(icon)::before {
				content: '\\f068';
			}
		}
		:host kol-input.switch input[type='checkbox'] {
			min-width: 3.5em;
			width: 3.5em;
			background-color: var(--color-grey);
			border-width: 0;
			height: 1.5em;
			border-radius: 1.25em;
			position: relative;
		}
		:host kol-input.switch input[type='checkbox']:before {
			transition: 0.5;
			width: 1.25em;
			height: 1.25em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			border-radius: 1.25em;
			background-color: white;
			position: absolute;
		}
		:host kol-input.switch input[type='checkbox']:checked {
			background-color: var(--color-midnight);
		}
		:host kol-input.switch input[type='checkbox']:checked:before {
			transform: translateX(2em);
			--tw-bg-opacity: 1;
		}
		:host kol-input.switch input[type='checkbox']:indeterminate {
			--tw-bg-opacity: 1;
		}
		:host kol-input.switch input[type='checkbox']:indeterminate:before {
			transform: translateX(1em);
		}
		.switch {
			& .checkbox-input-element {
				display: block;
			}
			& .icon {
				width: 1.25em;
				height: 1.25em;
				left: 2px;
				color: #000;
				&::part(icon) {
					font-family: 'Font Awesome 6 Free';
					font-weight: 900;
				}
				&::part(icon)::before {
					content: '\\2b';
				}
			}
			&.checked .icon {
				transform: translate(2em, -50%);
				&::part(icon)::before {
					content: '\\f00c';
				}
			}
			&.indeterminate .icon {
				transform: translate(1em, -50%);
				&::part(icon)::before {
					content: '\\f068';
				}
			}
		}
		:host .disabled {
			opacity: 0.33;
		}
		:host kol-input.button {
			row-gap: 0.5rem;
		}
		:host kol-input.button.checked > .input,
		:host kol-input.button.checked > label {
			background-color: var(--color-ice);
		}
		:host kol-input.button > label {
			background-color: var(--color-silver);
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
			min-height: 32px;
			align-items: center;
			display: flex;
			padding-right: 12px;
			width: 100%;
		}
		:host kol-input.button > .input {
			background-color: var(--color-silver);
			border-top-left-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);
			min-height: 32px;
			min-width: 32px;
			place-content: center;
		}
		:host kol-input.button.hide-label > .input {
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
		}
		:host kol-input.button > .input > div {
			display: flex;
		}
		:host kol-input.button .icon {
			height: auto;
		}
		.button:focus-within {
			border-radius: var(--a11y-min-size);
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
		}
	`,"KOL-INPUT-RADIO":Ue`
		/* INPUT */
		kol-input {
			display: grid;
			gap: 0.4em;
		}
		label {
			cursor: pointer;
			display: grid;
			line-height: 20px;
			gap: 8px;
			width: 100%;
		}
		input {
			cursor: pointer;
			width: 100%;
			border-color: var(--color-grey);
			border-width: 2px;
			border-style: solid;
			border-radius: 5px; /* padding: 10px 14px; */
			line-height: 24px;
			font-size: 16px;
		}
		input:hover {
			border-color: var(--color-midnight);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		input:focus:hover {
			box-shadow: none;
		}
		input:hover {
			border-color: var(--color-midnight);
		}
		kol-alert {
			display: block;
			width: 100%;
		}
		.required legend > span::after {
			content: '*';
			padding-left: 0.125em;
		} /* RADIO */
		fieldset {
			border: 0px;
			margin: 0px;
			padding: 0px;
			display: grid;
			gap: 0.25em;
		}
		.radio-input-wrapper {
			cursor: pointer;
			display: flex;
			flex-direction: row;
			align-items: center;
			position: relative;
			min-height: 44px;
			margin: 0;
			gap: 0.5rem;
		}
		.radio-input-wrapper label {
			cursor: pointer;
			display: flex;
			padding-left: 0.25em;
			width: 100%;
		}
		.radio-input-wrapper label span {
			margin-top: 0.125em;
		}
		.radio-input-wrapper input[type='radio'] {
			appearance: none;
			transition: 0.5s;
			border-radius: 100%;
			height: calc(6 * var(--spacing));
			min-width: calc(6 * var(--spacing));
			width: calc(6 * var(--spacing));
		}
		.radio-input-wrapper input[type='radio']:before {
			content: '';
			cursor: pointer;
			border-radius: 100%;
			display: block;
		}
		.radio-input-wrapper input[type='radio']:checked:before {
			background-color: var(--color-midnight);
		}
		.radio-input-wrapper input[type='radio']:disabled {
			cursor: not-allowed;
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		kol-alert.error {
			order: 1;
		}
		fieldset legend {
			order: 2;
			display: contents;
		}
		fieldset kol-input {
			order: 3;
		}
		fieldset.error {
			border-left: 3px solid var(--color-red);
			color: var(--color-red);
			font-weight: 700;
			padding-left: 1em;
		}
		fieldset.error input:focus,
		fieldset.error select:focus,
		fieldset.error textarea:focus {
			outline-color: var(--color-red) !important;
		}
		fieldset.error kol-alert.error {
			margin-left: -0.25em;
			color: var(--color-red);
			font-weight: 700;
		}
		.disabled {
			opacity: 0.33;
		}
		fieldset.horizontal {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem 1rem;
		}
		fieldset.horizontal legend {
			display: inline-block;
			margin-bottom: 0.25em;
		}
		fieldset .input-slot {
			gap: 0.5rem;
		}
		.radio-input-wrapper label {
			padding-left: 0;
		}
	`,"KOL-TOAST-CONTAINER":Ue`
		:host {
			top: 1rem;
			right: 1rem;
			width: 440px;
			max-width: 100%;
		}
		.toast {
			margin-top: 1rem;
		}
	`,"KOL-TABS":Ue`
		button:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
		:host kol-button-group-wc {
			display: inline-flex;
			gap: 2rem;
			flex-wrap: wrap;
		}
		button {
			box-sizing: border-box;
			background-color: transparent;
			border: 0;
			border-radius: 0.25rem;
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			min-height: 44px;
			min-width: 44px;
			color: var(--color-grey);
			padding: 0;
		}
		button:hover {
			color: var(--color-midnight);
		}
		button.primary,
		button.selected {
			/* border-bottom: 0.025rem solid var(--color-midnight); */
			color: var(--color-midnight);
		}
		button kol-span-wc > span {
			border-bottom: 0.25em solid;
		}
		button kol-span-wc > span {
			gap: 0.5rem;
		}
		:host > div > div {
			padding: 0.25em 0;
		}
		.close-button {
			display: none;
			font-size: 25%;
			height: fit-content;
			width: 0;
		}
		.close-button button {
			width: 1rem;
			position: relative;
			height: 1rem;
			left: -4.25em;
			top: 0.25em;
		}
		div[role='tabpanel'] {
			height: 100%;
		}
		div.grid {
			height: 100%;
		}
		:host > .tabs-align-right {
			display: grid;
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-right kol-button-group-wc {
			display: grid;
			order: 2;
		}
		:host > .tabs-align-left {
			display: grid;
			grid-template-columns: auto 1fr;
		}
		:host > .tabs-align-left kol-button-group-wc {
			display: grid;
			order: 0;
		}
		:host > .tabs-align-bottom {
			display: grid;
			grid-template-rows: 1fr auto;
		}
		:host > .tabs-align-bottom kol-button-group-wc {
			order: 2;
		}
		:host > .tabs-align-bottom kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {
			margin: 0px 1em 0px 0px;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div {
			margin: 0px 1em;
		}
		:host > .tabs-align-top {
			display: grid;
			grid-template-rows: auto 1fr;
		}
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-top kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {
			margin: 0px 1em 0px 0px;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div {
			margin: 0px 1em;
		}
		:host > div {
			display: grid;
		}
		:host > div.tabs-align-left {
			grid-template-columns: auto 1fr;
		}
		:host > div.tabs-align-right {
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-bottom kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			order: 1;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			gap: inherit;
		}
		:host > div.tabs-align-left kol-button-group-wc > div,
		:host > div.tabs-align-left kol-button-group-wc > div > div,
		:host > div.tabs-align-right kol-button-group-wc > div,
		:host > div.tabs-align-right kol-button-group-wc > div > div {
			display: grid;
		}
		:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
		:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
			width: 100%;
		}
		:host > div.tabs-align-bottom kol-button-group-wc div,
		:host > div.tabs-align-top kol-button-group-wc div {
			display: flex;
			flex-wrap: wrap;
		}
		:host kol-button-group-wc button {
			border: none;
		}
	`,"KOL-PAGINATION":Ue`
		.icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		.first .icon::part(icon)::before {
			content: '\\f100';
		}
		.previous .icon::part(icon)::before {
			content: '\\f104';
		}
		.next .icon::part(icon)::before {
			content: '\\f105';
		}
		.last .icon::part(icon)::before {
			content: '\\f101';
		}
		.button:focus {
			outline: none;
		}
		.button-inner {
			background-color: var(--color-white);
			border-radius: var(--a11y-min-size);
			border: 2px solid var(--color-midnight);
			color: var(--color-midnight);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		.button:focus .button-inner {
			outline-offset: 2px;
			outline: 3px solid var(--color-ocean);
			transition: outline-offset 0.2s linear;
		}
		.button:is(:active, :hover):not(:disabled) .button-inner {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.button:active .button-inner {
			border-color: var(--color-white);
			outline: none;
		}
		.button:disabled .button-inner {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.selected .button-inner {
			background-color: var(--color-ice);
			border-color: var(--color-ice);
			opacity: 1 !important;
			font-weight: 700;
		}
	`,"KOL-INPUT-RANGE":Ue`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		.inputs-wrapper {
			gap: 1em;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 1em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input.icon-left > kol-icon:first-child {
			margin-right: 0.5em;
		}
		.input.icon-right > kol-icon:last-child {
			margin-left: 0.5em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(.input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-LINK-BUTTON":Ue`
		:is(a, button) {
			font-size: 1.125em;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		:is(a, button):disabled > kol-span-wc {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
			color: var(--color-white);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-midnight);
			color: var(--color-midnight);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-white);
			background-color: var(--color-white);
			box-shadow: none;
			color: var(--color-midnight);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-crimson);
			border-color: var(--color-crimson);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-white);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** small ghost button */
		.ghost :is(a, button).small > kol-span-wc {
			border: none;
			background-color: transparent;
			box-shadow: none;
		}
		.ghost :is(a, button).small > kol-span-wc > span {
			border-radius: 1.5em;
			border-style: solid;
			border-width: 2px;
			border-color: var(--color-white);
			background-color: var(--color-white);
		}
		.ghost :is(a, button).small:active > kol-span-wc > span,
		.ghost :is(a, button).small:hover > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:active > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:hover > kol-span-wc > span {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		} /** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).small.transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
	`,"KOL-BUTTON-LINK":Ue`
		:is(a, button) {
			color: var(--color-midnight);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
			font-size: inherit;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: 2px solid;
		}
		:is(a, button):hover {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-ABBR":Ue`
		abbr {
			border-bottom: dashed var(--color-black) 1px;
			text-decoration: none !important;
		}
	`,"KOL-BREADCRUMB":Ue`
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon {
			font-size: 0.75rem;
		}
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
			color: var(--color-grey);
		}
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon::part(icon)::before {
			content: '\\f054';
		}
		kol-link::part(icon) {
			font-size: 1.25rem;
		}
		ul li > :is(span, kol-link) {
			line-height: 1.25rem;
			height: 20px;
		}
		ul li:last-child > span {
			color: var(--color-grey);
		}
	`,"KOL-MODAL":Ue`
		:host .overlay .modal {
			max-height: calc(100% - 32px);
		}
	`,"KOL-ICON":Ue`
		:host {
			width: 1em;
			height: 1em;
		}
		:host > i {
			width: 1em;
			height: 1em;
		}
		@font-face {
			font-family: 'Material Icons';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons.woff2') format('woff2'),
				url('./material-icons.woff') format('woff');
		}
		.material-icons {
			font-family: 'Material Icons';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Icons Outlined';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons-outlined.woff2') format('woff2'),
				url('./material-icons-outlined.woff') format('woff');
		}
		.material-icons-outlined {
			font-family: 'Material Icons Outlined';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Icons Round';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons-round.woff2') format('woff2'),
				url('./material-icons-round.woff') format('woff');
		}
		.material-icons-round {
			font-family: 'Material Icons Round';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Icons Sharp';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons-sharp.woff2') format('woff2'),
				url('./material-icons-sharp.woff') format('woff');
		}
		.material-icons-sharp {
			font-family: 'Material Icons Sharp';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Icons Two Tone';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons-two-tone.woff2') format('woff2'),
				url('./material-icons-two-tone.woff') format('woff');
		}
		.material-icons-two-tone {
			font-family: 'Material Icons Two Tone';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Symbols Outlined';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-outlined.woff2') format('woff2');
		}
		.material-symbols-outlined {
			font-family: 'Material Symbols Outlined';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Symbols Rounded';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-rounded.woff2') format('woff2');
		}
		.material-symbols-rounded {
			font-family: 'Material Symbols Rounded';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Symbols Sharp';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-sharp.woff2') format('woff2');
		}
		.material-symbols-sharp {
			font-family: 'Material Symbols Sharp';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		[class*='material-icons'].home:after {
			content: 'home';
		}
		[class*='material-icons'].east:after {
			content: 'east';
		}
		[class*='material-symbols'].home:after {
			content: 'home';
		}
		[class*='material-symbols'].arrow_right_alt:after {
			content: 'arrow_right_alt';
		} /*! * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) * Copyright 2022 Fonticons, Inc. */
		.fa {
			font-family: var(--fa-style-family, 'Font Awesome 6 Free');
			font-weight: var(--fa-style, 900);
		}
		.fa,
		.fa-brands,
		.fa-duotone,
		.fa-light,
		.fa-regular,
		.fa-solid,
		.fa-thin,
		.fab,
		.fad,
		.fal,
		.far,
		.fas,
		.fat {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			display: var(--fa-display, inline-block);
			font-style: normal;
			font-variant: normal;
			line-height: 1;
			text-rendering: auto;
		}
		.fa-1x {
			font-size: 1em;
		}
		.fa-2x {
			font-size: 2em;
		}
		.fa-3x {
			font-size: 3em;
		}
		.fa-4x {
			font-size: 4em;
		}
		.fa-5x {
			font-size: 5em;
		}
		.fa-6x {
			font-size: 6em;
		}
		.fa-7x {
			font-size: 7em;
		}
		.fa-8x {
			font-size: 8em;
		}
		.fa-9x {
			font-size: 9em;
		}
		.fa-10x {
			font-size: 10em;
		}
		.fa-2xs {
			font-size: 0.625em;
			line-height: 0.1em;
			vertical-align: 0.225em;
		}
		.fa-xs {
			font-size: 0.75em;
			line-height: 0.08333em;
			vertical-align: 0.125em;
		}
		.fa-sm {
			font-size: 0.875em;
			line-height: 0.07143em;
			vertical-align: 0.05357em;
		}
		.fa-lg {
			font-size: 1.25em;
			line-height: 0.05em;
			vertical-align: -0.075em;
		}
		.fa-xl {
			font-size: 1.5em;
			line-height: 0.04167em;
			vertical-align: -0.125em;
		}
		.fa-2xl {
			font-size: 2em;
			line-height: 0.03125em;
			vertical-align: -0.1875em;
		}
		.fa-fw {
			text-align: center;
			width: 1.25em;
		}
		.fa-ul {
			list-style-type: none;
			margin-left: var(--fa-li-margin, 2.5em);
			padding-left: 0;
		}
		.fa-ul > li {
			position: relative;
		}
		.fa-li {
			left: calc(var(--fa-li-width, 2em) * -1);
			position: absolute;
			text-align: center;
			width: var(--fa-li-width, 2em);
			line-height: inherit;
		}
		.fa-border {
			border-radius: var(--fa-border-radius, 0.1em);
			border: var(--fa-border-width, 0.08em) var(--fa-border-style, solid) var(--fa-border-color, #eee);
			padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
		}
		.fa-pull-left {
			float: left;
			margin-right: var(--fa-pull-margin, 0.3em);
		}
		.fa-pull-right {
			float: right;
			margin-left: var(--fa-pull-margin, 0.3em);
		}
		.fa-beat {
			-webkit-animation-name: fa-beat;
			animation-name: fa-beat;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
			animation-timing-function: var(--fa-animation-timing, ease-in-out);
		}
		.fa-bounce {
			-webkit-animation-name: fa-bounce;
			animation-name: fa-bounce;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
		}
		.fa-fade {
			-webkit-animation-name: fa-fade;
			animation-name: fa-fade;
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
		}
		.fa-beat-fade,
		.fa-fade {
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
		}
		.fa-beat-fade {
			-webkit-animation-name: fa-beat-fade;
			animation-name: fa-beat-fade;
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
		}
		.fa-flip {
			-webkit-animation-name: fa-flip;
			animation-name: fa-flip;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
			animation-timing-function: var(--fa-animation-timing, ease-in-out);
		}
		.fa-shake {
			-webkit-animation-name: fa-shake;
			animation-name: fa-shake;
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, linear);
			animation-timing-function: var(--fa-animation-timing, linear);
		}
		.fa-shake,
		.fa-spin {
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
		}
		.fa-spin {
			-webkit-animation-name: fa-spin;
			animation-name: fa-spin;
			-webkit-animation-duration: var(--fa-animation-duration, 2s);
			animation-duration: var(--fa-animation-duration, 2s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, linear);
			animation-timing-function: var(--fa-animation-timing, linear);
		}
		.fa-spin-reverse {
			--fa-animation-direction: reverse;
		}
		.fa-pulse,
		.fa-spin-pulse {
			-webkit-animation-name: fa-spin;
			animation-name: fa-spin;
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
			animation-timing-function: var(--fa-animation-timing, steps(8));
		}
		@media (prefers-reduced-motion: reduce) {
			.fa-beat,
			.fa-beat-fade,
			.fa-bounce,
			.fa-fade,
			.fa-flip,
			.fa-pulse,
			.fa-shake,
			.fa-spin,
			.fa-spin-pulse {
				-webkit-animation-delay: -1ms;
				animation-delay: -1ms;
				-webkit-animation-duration: 1ms;
				animation-duration: 1ms;
				-webkit-animation-iteration-count: 1;
				animation-iteration-count: 1;
				transition-delay: 0s;
				transition-duration: 0s;
			}
		}
		@-webkit-keyframes fa-beat {
			0%,
			90% {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			45% {
				-webkit-transform: scale(var(--fa-beat-scale, 1.25));
				transform: scale(var(--fa-beat-scale, 1.25));
			}
		}
		@keyframes fa-beat {
			0%,
			90% {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			45% {
				-webkit-transform: scale(var(--fa-beat-scale, 1.25));
				transform: scale(var(--fa-beat-scale, 1.25));
			}
		}
		@-webkit-keyframes fa-bounce {
			0% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			10% {
				-webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
				transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
			}
			30% {
				-webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
				transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
			}
			50% {
				-webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
				transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
			}
			57% {
				-webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
				transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
			}
			64% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			to {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
		}
		@keyframes fa-bounce {
			0% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			10% {
				-webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
				transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
			}
			30% {
				-webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
				transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
			}
			50% {
				-webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
				transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
			}
			57% {
				-webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
				transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
			}
			64% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			to {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
		}
		@-webkit-keyframes fa-fade {
			50% {
				opacity: var(--fa-fade-opacity, 0.4);
			}
		}
		@keyframes fa-fade {
			50% {
				opacity: var(--fa-fade-opacity, 0.4);
			}
		}
		@-webkit-keyframes fa-beat-fade {
			0%,
			to {
				opacity: var(--fa-beat-fade-opacity, 0.4);
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			50% {
				opacity: 1;
				-webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
				transform: scale(var(--fa-beat-fade-scale, 1.125));
			}
		}
		@keyframes fa-beat-fade {
			0%,
			to {
				opacity: var(--fa-beat-fade-opacity, 0.4);
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			50% {
				opacity: 1;
				-webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
				transform: scale(var(--fa-beat-fade-scale, 1.125));
			}
		}
		@-webkit-keyframes fa-flip {
			50% {
				-webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
				transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
			}
		}
		@keyframes fa-flip {
			50% {
				-webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
				transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
			}
		}
		@-webkit-keyframes fa-shake {
			0% {
				-webkit-transform: rotate(-15deg);
				transform: rotate(-15deg);
			}
			4% {
				-webkit-transform: rotate(15deg);
				transform: rotate(15deg);
			}
			8%,
			24% {
				-webkit-transform: rotate(-18deg);
				transform: rotate(-18deg);
			}
			12%,
			28% {
				-webkit-transform: rotate(18deg);
				transform: rotate(18deg);
			}
			16% {
				-webkit-transform: rotate(-22deg);
				transform: rotate(-22deg);
			}
			20% {
				-webkit-transform: rotate(22deg);
				transform: rotate(22deg);
			}
			32% {
				-webkit-transform: rotate(-12deg);
				transform: rotate(-12deg);
			}
			36% {
				-webkit-transform: rotate(12deg);
				transform: rotate(12deg);
			}
			40%,
			to {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		}
		@keyframes fa-shake {
			0% {
				-webkit-transform: rotate(-15deg);
				transform: rotate(-15deg);
			}
			4% {
				-webkit-transform: rotate(15deg);
				transform: rotate(15deg);
			}
			8%,
			24% {
				-webkit-transform: rotate(-18deg);
				transform: rotate(-18deg);
			}
			12%,
			28% {
				-webkit-transform: rotate(18deg);
				transform: rotate(18deg);
			}
			16% {
				-webkit-transform: rotate(-22deg);
				transform: rotate(-22deg);
			}
			20% {
				-webkit-transform: rotate(22deg);
				transform: rotate(22deg);
			}
			32% {
				-webkit-transform: rotate(-12deg);
				transform: rotate(-12deg);
			}
			36% {
				-webkit-transform: rotate(12deg);
				transform: rotate(12deg);
			}
			40%,
			to {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		}
		@-webkit-keyframes fa-spin {
			0% {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(1turn);
				transform: rotate(1turn);
			}
		}
		@keyframes fa-spin {
			0% {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(1turn);
				transform: rotate(1turn);
			}
		}
		.fa-rotate-90 {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}
		.fa-rotate-180 {
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
		}
		.fa-rotate-270 {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
		.fa-flip-horizontal {
			-webkit-transform: scaleX(-1);
			transform: scaleX(-1);
		}
		.fa-flip-vertical {
			-webkit-transform: scaleY(-1);
			transform: scaleY(-1);
		}
		.fa-flip-both,
		.fa-flip-horizontal.fa-flip-vertical {
			-webkit-transform: scale(-1);
			transform: scale(-1);
		}
		.fa-rotate-by {
			-webkit-transform: rotate(var(--fa-rotate-angle, none));
			transform: rotate(var(--fa-rotate-angle, none));
		}
		.fa-stack {
			display: inline-block;
			height: 2em;
			line-height: 2em;
			position: relative;
			vertical-align: middle;
			width: 2.5em;
		}
		.fa-stack-1x,
		.fa-stack-2x {
			left: 0;
			position: absolute;
			text-align: center;
			width: 100%;
			z-index: var(--fa-stack-z-index, auto);
		}
		.fa-stack-1x {
			line-height: inherit;
		}
		.fa-stack-2x {
			font-size: 2em;
		}
		.fa-inverse {
			color: var(--fa-inverse, #fff);
		}
		.fa-0:before {
			content: '\\30';
		}
		.fa-1:before {
			content: '\\31';
		}
		.fa-2:before {
			content: '\\32';
		}
		.fa-3:before {
			content: '\\33';
		}
		.fa-4:before {
			content: '\\34';
		}
		.fa-5:before {
			content: '\\35';
		}
		.fa-6:before {
			content: '\\36';
		}
		.fa-7:before {
			content: '\\37';
		}
		.fa-8:before {
			content: '\\38';
		}
		.fa-9:before {
			content: '\\39';
		}
		.fa-a:before {
			content: '\\41';
		}
		.fa-address-book:before,
		.fa-contact-book:before {
			content: '\\f2b9';
		}
		.fa-address-card:before,
		.fa-contact-card:before,
		.fa-vcard:before {
			content: '\\f2bb';
		}
		.fa-align-center:before {
			content: '\\f037';
		}
		.fa-align-justify:before {
			content: '\\f039';
		}
		.fa-align-left:before {
			content: '\\f036';
		}
		.fa-align-right:before {
			content: '\\f038';
		}
		.fa-anchor:before {
			content: '\\f13d';
		}
		.fa-anchor-circle-check:before {
			content: '\\e4aa';
		}
		.fa-anchor-circle-exclamation:before {
			content: '\\e4ab';
		}
		.fa-anchor-circle-xmark:before {
			content: '\\e4ac';
		}
		.fa-anchor-lock:before {
			content: '\\e4ad';
		}
		.fa-angle-down:before {
			content: '\\f107';
		}
		.fa-angle-left:before {
			content: '\\f104';
		}
		.fa-angle-right:before {
			content: '\\f105';
		}
		.fa-angle-up:before {
			content: '\\f106';
		}
		.fa-angle-double-down:before,
		.fa-angles-down:before {
			content: '\\f103';
		}
		.fa-angle-double-left:before,
		.fa-angles-left:before {
			content: '\\f100';
		}
		.fa-angle-double-right:before,
		.fa-angles-right:before {
			content: '\\f101';
		}
		.fa-angle-double-up:before,
		.fa-angles-up:before {
			content: '\\f102';
		}
		.fa-ankh:before {
			content: '\\f644';
		}
		.fa-apple-alt:before,
		.fa-apple-whole:before {
			content: '\\f5d1';
		}
		.fa-archway:before {
			content: '\\f557';
		}
		.fa-arrow-down:before {
			content: '\\f063';
		}
		.fa-arrow-down-1-9:before,
		.fa-sort-numeric-asc:before,
		.fa-sort-numeric-down:before {
			content: '\\f162';
		}
		.fa-arrow-down-9-1:before,
		.fa-sort-numeric-desc:before,
		.fa-sort-numeric-down-alt:before {
			content: '\\f886';
		}
		.fa-arrow-down-a-z:before,
		.fa-sort-alpha-asc:before,
		.fa-sort-alpha-down:before {
			content: '\\f15d';
		}
		.fa-arrow-down-long:before,
		.fa-long-arrow-down:before {
			content: '\\f175';
		}
		.fa-arrow-down-short-wide:before,
		.fa-sort-amount-desc:before,
		.fa-sort-amount-down-alt:before {
			content: '\\f884';
		}
		.fa-arrow-down-up-across-line:before {
			content: '\\e4af';
		}
		.fa-arrow-down-up-lock:before {
			content: '\\e4b0';
		}
		.fa-arrow-down-wide-short:before,
		.fa-sort-amount-asc:before,
		.fa-sort-amount-down:before {
			content: '\\f160';
		}
		.fa-arrow-down-z-a:before,
		.fa-sort-alpha-desc:before,
		.fa-sort-alpha-down-alt:before {
			content: '\\f881';
		}
		.fa-arrow-left:before {
			content: '\\f060';
		}
		.fa-arrow-left-long:before,
		.fa-long-arrow-left:before {
			content: '\\f177';
		}
		.fa-arrow-pointer:before,
		.fa-mouse-pointer:before {
			content: '\\f245';
		}
		.fa-arrow-right:before {
			content: '\\f061';
		}
		.fa-arrow-right-arrow-left:before,
		.fa-exchange:before {
			content: '\\f0ec';
		}
		.fa-arrow-right-from-bracket:before,
		.fa-sign-out:before {
			content: '\\f08b';
		}
		.fa-arrow-right-long:before,
		.fa-long-arrow-right:before {
			content: '\\f178';
		}
		.fa-arrow-right-to-bracket:before,
		.fa-sign-in:before {
			content: '\\f090';
		}
		.fa-arrow-right-to-city:before {
			content: '\\e4b3';
		}
		.fa-arrow-left-rotate:before,
		.fa-arrow-rotate-back:before,
		.fa-arrow-rotate-backward:before,
		.fa-arrow-rotate-left:before,
		.fa-undo:before {
			content: '\\f0e2';
		}
		.fa-arrow-right-rotate:before,
		.fa-arrow-rotate-forward:before,
		.fa-arrow-rotate-right:before,
		.fa-redo:before {
			content: '\\f01e';
		}
		.fa-arrow-trend-down:before {
			content: '\\e097';
		}
		.fa-arrow-trend-up:before {
			content: '\\e098';
		}
		.fa-arrow-turn-down:before,
		.fa-level-down:before {
			content: '\\f149';
		}
		.fa-arrow-turn-up:before,
		.fa-level-up:before {
			content: '\\f148';
		}
		.fa-arrow-up:before {
			content: '\\f062';
		}
		.fa-arrow-up-1-9:before,
		.fa-sort-numeric-up:before {
			content: '\\f163';
		}
		.fa-arrow-up-9-1:before,
		.fa-sort-numeric-up-alt:before {
			content: '\\f887';
		}
		.fa-arrow-up-a-z:before,
		.fa-sort-alpha-up:before {
			content: '\\f15e';
		}
		.fa-arrow-up-from-bracket:before {
			content: '\\e09a';
		}
		.fa-arrow-up-from-ground-water:before {
			content: '\\e4b5';
		}
		.fa-arrow-up-from-water-pump:before {
			content: '\\e4b6';
		}
		.fa-arrow-up-long:before,
		.fa-long-arrow-up:before {
			content: '\\f176';
		}
		.fa-arrow-up-right-dots:before {
			content: '\\e4b7';
		}
		.fa-arrow-up-right-from-square:before,
		.fa-external-link:before {
			content: '\\f08e';
		}
		.fa-arrow-up-short-wide:before,
		.fa-sort-amount-up-alt:before {
			content: '\\f885';
		}
		.fa-arrow-up-wide-short:before,
		.fa-sort-amount-up:before {
			content: '\\f161';
		}
		.fa-arrow-up-z-a:before,
		.fa-sort-alpha-up-alt:before {
			content: '\\f882';
		}
		.fa-arrows-down-to-line:before {
			content: '\\e4b8';
		}
		.fa-arrows-down-to-people:before {
			content: '\\e4b9';
		}
		.fa-arrows-h:before,
		.fa-arrows-left-right:before {
			content: '\\f07e';
		}
		.fa-arrows-left-right-to-line:before {
			content: '\\e4ba';
		}
		.fa-arrows-rotate:before,
		.fa-refresh:before,
		.fa-sync:before {
			content: '\\f021';
		}
		.fa-arrows-spin:before {
			content: '\\e4bb';
		}
		.fa-arrows-split-up-and-left:before {
			content: '\\e4bc';
		}
		.fa-arrows-to-circle:before {
			content: '\\e4bd';
		}
		.fa-arrows-to-dot:before {
			content: '\\e4be';
		}
		.fa-arrows-to-eye:before {
			content: '\\e4bf';
		}
		.fa-arrows-turn-right:before {
			content: '\\e4c0';
		}
		.fa-arrows-turn-to-dots:before {
			content: '\\e4c1';
		}
		.fa-arrows-up-down:before,
		.fa-arrows-v:before {
			content: '\\f07d';
		}
		.fa-arrows-up-down-left-right:before,
		.fa-arrows:before {
			content: '\\f047';
		}
		.fa-arrows-up-to-line:before {
			content: '\\e4c2';
		}
		.fa-asterisk:before {
			content: '\\2a';
		}
		.fa-at:before {
			content: '\\40';
		}
		.fa-atom:before {
			content: '\\f5d2';
		}
		.fa-audio-description:before {
			content: '\\f29e';
		}
		.fa-austral-sign:before {
			content: '\\e0a9';
		}
		.fa-award:before {
			content: '\\f559';
		}
		.fa-b:before {
			content: '\\42';
		}
		.fa-baby:before {
			content: '\\f77c';
		}
		.fa-baby-carriage:before,
		.fa-carriage-baby:before {
			content: '\\f77d';
		}
		.fa-backward:before {
			content: '\\f04a';
		}
		.fa-backward-fast:before,
		.fa-fast-backward:before {
			content: '\\f049';
		}
		.fa-backward-step:before,
		.fa-step-backward:before {
			content: '\\f048';
		}
		.fa-bacon:before {
			content: '\\f7e5';
		}
		.fa-bacteria:before {
			content: '\\e059';
		}
		.fa-bacterium:before {
			content: '\\e05a';
		}
		.fa-bag-shopping:before,
		.fa-shopping-bag:before {
			content: '\\f290';
		}
		.fa-bahai:before {
			content: '\\f666';
		}
		.fa-baht-sign:before {
			content: '\\e0ac';
		}
		.fa-ban:before,
		.fa-cancel:before {
			content: '\\f05e';
		}
		.fa-ban-smoking:before,
		.fa-smoking-ban:before {
			content: '\\f54d';
		}
		.fa-band-aid:before,
		.fa-bandage:before {
			content: '\\f462';
		}
		.fa-barcode:before {
			content: '\\f02a';
		}
		.fa-bars:before,
		.fa-navicon:before {
			content: '\\f0c9';
		}
		.fa-bars-progress:before,
		.fa-tasks-alt:before {
			content: '\\f828';
		}
		.fa-bars-staggered:before,
		.fa-reorder:before,
		.fa-stream:before {
			content: '\\f550';
		}
		.fa-baseball-ball:before,
		.fa-baseball:before {
			content: '\\f433';
		}
		.fa-baseball-bat-ball:before {
			content: '\\f432';
		}
		.fa-basket-shopping:before,
		.fa-shopping-basket:before {
			content: '\\f291';
		}
		.fa-basketball-ball:before,
		.fa-basketball:before {
			content: '\\f434';
		}
		.fa-bath:before,
		.fa-bathtub:before {
			content: '\\f2cd';
		}
		.fa-battery-0:before,
		.fa-battery-empty:before {
			content: '\\f244';
		}
		.fa-battery-5:before,
		.fa-battery-full:before,
		.fa-battery:before {
			content: '\\f240';
		}
		.fa-battery-3:before,
		.fa-battery-half:before {
			content: '\\f242';
		}
		.fa-battery-2:before,
		.fa-battery-quarter:before {
			content: '\\f243';
		}
		.fa-battery-4:before,
		.fa-battery-three-quarters:before {
			content: '\\f241';
		}
		.fa-bed:before {
			content: '\\f236';
		}
		.fa-bed-pulse:before,
		.fa-procedures:before {
			content: '\\f487';
		}
		.fa-beer-mug-empty:before,
		.fa-beer:before {
			content: '\\f0fc';
		}
		.fa-bell:before {
			content: '\\f0f3';
		}
		.fa-bell-concierge:before,
		.fa-concierge-bell:before {
			content: '\\f562';
		}
		.fa-bell-slash:before {
			content: '\\f1f6';
		}
		.fa-bezier-curve:before {
			content: '\\f55b';
		}
		.fa-bicycle:before {
			content: '\\f206';
		}
		.fa-binoculars:before {
			content: '\\f1e5';
		}
		.fa-biohazard:before {
			content: '\\f780';
		}
		.fa-bitcoin-sign:before {
			content: '\\e0b4';
		}
		.fa-blender:before {
			content: '\\f517';
		}
		.fa-blender-phone:before {
			content: '\\f6b6';
		}
		.fa-blog:before {
			content: '\\f781';
		}
		.fa-bold:before {
			content: '\\f032';
		}
		.fa-bolt:before,
		.fa-zap:before {
			content: '\\f0e7';
		}
		.fa-bolt-lightning:before {
			content: '\\e0b7';
		}
		.fa-bomb:before {
			content: '\\f1e2';
		}
		.fa-bone:before {
			content: '\\f5d7';
		}
		.fa-bong:before {
			content: '\\f55c';
		}
		.fa-book:before {
			content: '\\f02d';
		}
		.fa-atlas:before,
		.fa-book-atlas:before {
			content: '\\f558';
		}
		.fa-bible:before,
		.fa-book-bible:before {
			content: '\\f647';
		}
		.fa-book-bookmark:before {
			content: '\\e0bb';
		}
		.fa-book-journal-whills:before,
		.fa-journal-whills:before {
			content: '\\f66a';
		}
		.fa-book-medical:before {
			content: '\\f7e6';
		}
		.fa-book-open:before {
			content: '\\f518';
		}
		.fa-book-open-reader:before,
		.fa-book-reader:before {
			content: '\\f5da';
		}
		.fa-book-quran:before,
		.fa-quran:before {
			content: '\\f687';
		}
		.fa-book-dead:before,
		.fa-book-skull:before {
			content: '\\f6b7';
		}
		.fa-bookmark:before {
			content: '\\f02e';
		}
		.fa-border-all:before {
			content: '\\f84c';
		}
		.fa-border-none:before {
			content: '\\f850';
		}
		.fa-border-style:before,
		.fa-border-top-left:before {
			content: '\\f853';
		}
		.fa-bore-hole:before {
			content: '\\e4c3';
		}
		.fa-bottle-droplet:before {
			content: '\\e4c4';
		}
		.fa-bottle-water:before {
			content: '\\e4c5';
		}
		.fa-bowl-food:before {
			content: '\\e4c6';
		}
		.fa-bowl-rice:before {
			content: '\\e2eb';
		}
		.fa-bowling-ball:before {
			content: '\\f436';
		}
		.fa-box:before {
			content: '\\f466';
		}
		.fa-archive:before,
		.fa-box-archive:before {
			content: '\\f187';
		}
		.fa-box-open:before {
			content: '\\f49e';
		}
		.fa-box-tissue:before {
			content: '\\e05b';
		}
		.fa-boxes-packing:before {
			content: '\\e4c7';
		}
		.fa-boxes-alt:before,
		.fa-boxes-stacked:before,
		.fa-boxes:before {
			content: '\\f468';
		}
		.fa-braille:before {
			content: '\\f2a1';
		}
		.fa-brain:before {
			content: '\\f5dc';
		}
		.fa-brazilian-real-sign:before {
			content: '\\e46c';
		}
		.fa-bread-slice:before {
			content: '\\f7ec';
		}
		.fa-bridge:before {
			content: '\\e4c8';
		}
		.fa-bridge-circle-check:before {
			content: '\\e4c9';
		}
		.fa-bridge-circle-exclamation:before {
			content: '\\e4ca';
		}
		.fa-bridge-circle-xmark:before {
			content: '\\e4cb';
		}
		.fa-bridge-lock:before {
			content: '\\e4cc';
		}
		.fa-bridge-water:before {
			content: '\\e4ce';
		}
		.fa-briefcase:before {
			content: '\\f0b1';
		}
		.fa-briefcase-medical:before {
			content: '\\f469';
		}
		.fa-broom:before {
			content: '\\f51a';
		}
		.fa-broom-ball:before,
		.fa-quidditch-broom-ball:before,
		.fa-quidditch:before {
			content: '\\f458';
		}
		.fa-brush:before {
			content: '\\f55d';
		}
		.fa-bucket:before {
			content: '\\e4cf';
		}
		.fa-bug:before {
			content: '\\f188';
		}
		.fa-bug-slash:before {
			content: '\\e490';
		}
		.fa-bugs:before {
			content: '\\e4d0';
		}
		.fa-building:before {
			content: '\\f1ad';
		}
		.fa-building-circle-arrow-right:before {
			content: '\\e4d1';
		}
		.fa-building-circle-check:before {
			content: '\\e4d2';
		}
		.fa-building-circle-exclamation:before {
			content: '\\e4d3';
		}
		.fa-building-circle-xmark:before {
			content: '\\e4d4';
		}
		.fa-bank:before,
		.fa-building-columns:before,
		.fa-institution:before,
		.fa-museum:before,
		.fa-university:before {
			content: '\\f19c';
		}
		.fa-building-flag:before {
			content: '\\e4d5';
		}
		.fa-building-lock:before {
			content: '\\e4d6';
		}
		.fa-building-ngo:before {
			content: '\\e4d7';
		}
		.fa-building-shield:before {
			content: '\\e4d8';
		}
		.fa-building-un:before {
			content: '\\e4d9';
		}
		.fa-building-user:before {
			content: '\\e4da';
		}
		.fa-building-wheat:before {
			content: '\\e4db';
		}
		.fa-bullhorn:before {
			content: '\\f0a1';
		}
		.fa-bullseye:before {
			content: '\\f140';
		}
		.fa-burger:before,
		.fa-hamburger:before {
			content: '\\f805';
		}
		.fa-burst:before {
			content: '\\e4dc';
		}
		.fa-bus:before {
			content: '\\f207';
		}
		.fa-bus-alt:before,
		.fa-bus-simple:before {
			content: '\\f55e';
		}
		.fa-briefcase-clock:before,
		.fa-business-time:before {
			content: '\\f64a';
		}
		.fa-c:before {
			content: '\\43';
		}
		.fa-birthday-cake:before,
		.fa-cake-candles:before,
		.fa-cake:before {
			content: '\\f1fd';
		}
		.fa-calculator:before {
			content: '\\f1ec';
		}
		.fa-calendar:before {
			content: '\\f133';
		}
		.fa-calendar-check:before {
			content: '\\f274';
		}
		.fa-calendar-day:before {
			content: '\\f783';
		}
		.fa-calendar-alt:before,
		.fa-calendar-days:before {
			content: '\\f073';
		}
		.fa-calendar-minus:before {
			content: '\\f272';
		}
		.fa-calendar-plus:before {
			content: '\\f271';
		}
		.fa-calendar-week:before {
			content: '\\f784';
		}
		.fa-calendar-times:before,
		.fa-calendar-xmark:before {
			content: '\\f273';
		}
		.fa-camera-alt:before,
		.fa-camera:before {
			content: '\\f030';
		}
		.fa-camera-retro:before {
			content: '\\f083';
		}
		.fa-camera-rotate:before {
			content: '\\e0d8';
		}
		.fa-campground:before {
			content: '\\f6bb';
		}
		.fa-candy-cane:before {
			content: '\\f786';
		}
		.fa-cannabis:before {
			content: '\\f55f';
		}
		.fa-capsules:before {
			content: '\\f46b';
		}
		.fa-automobile:before,
		.fa-car:before {
			content: '\\f1b9';
		}
		.fa-battery-car:before,
		.fa-car-battery:before {
			content: '\\f5df';
		}
		.fa-car-burst:before,
		.fa-car-crash:before {
			content: '\\f5e1';
		}
		.fa-car-on:before {
			content: '\\e4dd';
		}
		.fa-car-alt:before,
		.fa-car-rear:before {
			content: '\\f5de';
		}
		.fa-car-side:before {
			content: '\\f5e4';
		}
		.fa-car-tunnel:before {
			content: '\\e4de';
		}
		.fa-caravan:before {
			content: '\\f8ff';
		}
		.fa-caret-down:before {
			content: '\\f0d7';
		}
		.fa-caret-left:before {
			content: '\\f0d9';
		}
		.fa-caret-right:before {
			content: '\\f0da';
		}
		.fa-caret-up:before {
			content: '\\f0d8';
		}
		.fa-carrot:before {
			content: '\\f787';
		}
		.fa-cart-arrow-down:before {
			content: '\\f218';
		}
		.fa-cart-flatbed:before,
		.fa-dolly-flatbed:before {
			content: '\\f474';
		}
		.fa-cart-flatbed-suitcase:before,
		.fa-luggage-cart:before {
			content: '\\f59d';
		}
		.fa-cart-plus:before {
			content: '\\f217';
		}
		.fa-cart-shopping:before,
		.fa-shopping-cart:before {
			content: '\\f07a';
		}
		.fa-cash-register:before {
			content: '\\f788';
		}
		.fa-cat:before {
			content: '\\f6be';
		}
		.fa-cedi-sign:before {
			content: '\\e0df';
		}
		.fa-cent-sign:before {
			content: '\\e3f5';
		}
		.fa-certificate:before {
			content: '\\f0a3';
		}
		.fa-chair:before {
			content: '\\f6c0';
		}
		.fa-blackboard:before,
		.fa-chalkboard:before {
			content: '\\f51b';
		}
		.fa-chalkboard-teacher:before,
		.fa-chalkboard-user:before {
			content: '\\f51c';
		}
		.fa-champagne-glasses:before,
		.fa-glass-cheers:before {
			content: '\\f79f';
		}
		.fa-charging-station:before {
			content: '\\f5e7';
		}
		.fa-area-chart:before,
		.fa-chart-area:before {
			content: '\\f1fe';
		}
		.fa-bar-chart:before,
		.fa-chart-bar:before {
			content: '\\f080';
		}
		.fa-chart-column:before {
			content: '\\e0e3';
		}
		.fa-chart-gantt:before {
			content: '\\e0e4';
		}
		.fa-chart-line:before,
		.fa-line-chart:before {
			content: '\\f201';
		}
		.fa-chart-pie:before,
		.fa-pie-chart:before {
			content: '\\f200';
		}
		.fa-chart-simple:before {
			content: '\\e473';
		}
		.fa-check:before {
			content: '\\f00c';
		}
		.fa-check-double:before {
			content: '\\f560';
		}
		.fa-check-to-slot:before,
		.fa-vote-yea:before {
			content: '\\f772';
		}
		.fa-cheese:before {
			content: '\\f7ef';
		}
		.fa-chess:before {
			content: '\\f439';
		}
		.fa-chess-bishop:before {
			content: '\\f43a';
		}
		.fa-chess-board:before {
			content: '\\f43c';
		}
		.fa-chess-king:before {
			content: '\\f43f';
		}
		.fa-chess-knight:before {
			content: '\\f441';
		}
		.fa-chess-pawn:before {
			content: '\\f443';
		}
		.fa-chess-queen:before {
			content: '\\f445';
		}
		.fa-chess-rook:before {
			content: '\\f447';
		}
		.fa-chevron-down:before {
			content: '\\f078';
		}
		.fa-chevron-left:before {
			content: '\\f053';
		}
		.fa-chevron-right:before {
			content: '\\f054';
		}
		.fa-chevron-up:before {
			content: '\\f077';
		}
		.fa-child:before {
			content: '\\f1ae';
		}
		.fa-child-dress:before {
			content: '\\e59c';
		}
		.fa-child-reaching:before {
			content: '\\e59d';
		}
		.fa-child-rifle:before {
			content: '\\e4e0';
		}
		.fa-children:before {
			content: '\\e4e1';
		}
		.fa-church:before {
			content: '\\f51d';
		}
		.fa-circle:before {
			content: '\\f111';
		}
		.fa-arrow-circle-down:before,
		.fa-circle-arrow-down:before {
			content: '\\f0ab';
		}
		.fa-arrow-circle-left:before,
		.fa-circle-arrow-left:before {
			content: '\\f0a8';
		}
		.fa-arrow-circle-right:before,
		.fa-circle-arrow-right:before {
			content: '\\f0a9';
		}
		.fa-arrow-circle-up:before,
		.fa-circle-arrow-up:before {
			content: '\\f0aa';
		}
		.fa-check-circle:before,
		.fa-circle-check:before {
			content: '\\f058';
		}
		.fa-chevron-circle-down:before,
		.fa-circle-chevron-down:before {
			content: '\\f13a';
		}
		.fa-chevron-circle-left:before,
		.fa-circle-chevron-left:before {
			content: '\\f137';
		}
		.fa-chevron-circle-right:before,
		.fa-circle-chevron-right:before {
			content: '\\f138';
		}
		.fa-chevron-circle-up:before,
		.fa-circle-chevron-up:before {
			content: '\\f139';
		}
		.fa-circle-dollar-to-slot:before,
		.fa-donate:before {
			content: '\\f4b9';
		}
		.fa-circle-dot:before,
		.fa-dot-circle:before {
			content: '\\f192';
		}
		.fa-arrow-alt-circle-down:before,
		.fa-circle-down:before {
			content: '\\f358';
		}
		.fa-circle-exclamation:before,
		.fa-exclamation-circle:before {
			content: '\\f06a';
		}
		.fa-circle-h:before,
		.fa-hospital-symbol:before {
			content: '\\f47e';
		}
		.fa-adjust:before,
		.fa-circle-half-stroke:before {
			content: '\\f042';
		}
		.fa-circle-info:before,
		.fa-info-circle:before {
			content: '\\f05a';
		}
		.fa-arrow-alt-circle-left:before,
		.fa-circle-left:before {
			content: '\\f359';
		}
		.fa-circle-minus:before,
		.fa-minus-circle:before {
			content: '\\f056';
		}
		.fa-circle-nodes:before {
			content: '\\e4e2';
		}
		.fa-circle-notch:before {
			content: '\\f1ce';
		}
		.fa-circle-pause:before,
		.fa-pause-circle:before {
			content: '\\f28b';
		}
		.fa-circle-play:before,
		.fa-play-circle:before {
			content: '\\f144';
		}
		.fa-circle-plus:before,
		.fa-plus-circle:before {
			content: '\\f055';
		}
		.fa-circle-question:before,
		.fa-question-circle:before {
			content: '\\f059';
		}
		.fa-circle-radiation:before,
		.fa-radiation-alt:before {
			content: '\\f7ba';
		}
		.fa-arrow-alt-circle-right:before,
		.fa-circle-right:before {
			content: '\\f35a';
		}
		.fa-circle-stop:before,
		.fa-stop-circle:before {
			content: '\\f28d';
		}
		.fa-arrow-alt-circle-up:before,
		.fa-circle-up:before {
			content: '\\f35b';
		}
		.fa-circle-user:before,
		.fa-user-circle:before {
			content: '\\f2bd';
		}
		.fa-circle-xmark:before,
		.fa-times-circle:before,
		.fa-xmark-circle:before {
			content: '\\f057';
		}
		.fa-city:before {
			content: '\\f64f';
		}
		.fa-clapperboard:before {
			content: '\\e131';
		}
		.fa-clipboard:before {
			content: '\\f328';
		}
		.fa-clipboard-check:before {
			content: '\\f46c';
		}
		.fa-clipboard-list:before {
			content: '\\f46d';
		}
		.fa-clipboard-question:before {
			content: '\\e4e3';
		}
		.fa-clipboard-user:before {
			content: '\\f7f3';
		}
		.fa-clock-four:before,
		.fa-clock:before {
			content: '\\f017';
		}
		.fa-clock-rotate-left:before,
		.fa-history:before {
			content: '\\f1da';
		}
		.fa-clone:before {
			content: '\\f24d';
		}
		.fa-closed-captioning:before {
			content: '\\f20a';
		}
		.fa-cloud:before {
			content: '\\f0c2';
		}
		.fa-cloud-arrow-down:before,
		.fa-cloud-download-alt:before,
		.fa-cloud-download:before {
			content: '\\f0ed';
		}
		.fa-cloud-arrow-up:before,
		.fa-cloud-upload-alt:before,
		.fa-cloud-upload:before {
			content: '\\f0ee';
		}
		.fa-cloud-bolt:before,
		.fa-thunderstorm:before {
			content: '\\f76c';
		}
		.fa-cloud-meatball:before {
			content: '\\f73b';
		}
		.fa-cloud-moon:before {
			content: '\\f6c3';
		}
		.fa-cloud-moon-rain:before {
			content: '\\f73c';
		}
		.fa-cloud-rain:before {
			content: '\\f73d';
		}
		.fa-cloud-showers-heavy:before {
			content: '\\f740';
		}
		.fa-cloud-showers-water:before {
			content: '\\e4e4';
		}
		.fa-cloud-sun:before {
			content: '\\f6c4';
		}
		.fa-cloud-sun-rain:before {
			content: '\\f743';
		}
		.fa-clover:before {
			content: '\\e139';
		}
		.fa-code:before {
			content: '\\f121';
		}
		.fa-code-branch:before {
			content: '\\f126';
		}
		.fa-code-commit:before {
			content: '\\f386';
		}
		.fa-code-compare:before {
			content: '\\e13a';
		}
		.fa-code-fork:before {
			content: '\\e13b';
		}
		.fa-code-merge:before {
			content: '\\f387';
		}
		.fa-code-pull-request:before {
			content: '\\e13c';
		}
		.fa-coins:before {
			content: '\\f51e';
		}
		.fa-colon-sign:before {
			content: '\\e140';
		}
		.fa-comment:before {
			content: '\\f075';
		}
		.fa-comment-dollar:before {
			content: '\\f651';
		}
		.fa-comment-dots:before,
		.fa-commenting:before {
			content: '\\f4ad';
		}
		.fa-comment-medical:before {
			content: '\\f7f5';
		}
		.fa-comment-slash:before {
			content: '\\f4b3';
		}
		.fa-comment-sms:before,
		.fa-sms:before {
			content: '\\f7cd';
		}
		.fa-comments:before {
			content: '\\f086';
		}
		.fa-comments-dollar:before {
			content: '\\f653';
		}
		.fa-compact-disc:before {
			content: '\\f51f';
		}
		.fa-compass:before {
			content: '\\f14e';
		}
		.fa-compass-drafting:before,
		.fa-drafting-compass:before {
			content: '\\f568';
		}
		.fa-compress:before {
			content: '\\f066';
		}
		.fa-computer:before {
			content: '\\e4e5';
		}
		.fa-computer-mouse:before,
		.fa-mouse:before {
			content: '\\f8cc';
		}
		.fa-cookie:before {
			content: '\\f563';
		}
		.fa-cookie-bite:before {
			content: '\\f564';
		}
		.fa-copy:before {
			content: '\\f0c5';
		}
		.fa-copyright:before {
			content: '\\f1f9';
		}
		.fa-couch:before {
			content: '\\f4b8';
		}
		.fa-cow:before {
			content: '\\f6c8';
		}
		.fa-credit-card-alt:before,
		.fa-credit-card:before {
			content: '\\f09d';
		}
		.fa-crop:before {
			content: '\\f125';
		}
		.fa-crop-alt:before,
		.fa-crop-simple:before {
			content: '\\f565';
		}
		.fa-cross:before {
			content: '\\f654';
		}
		.fa-crosshairs:before {
			content: '\\f05b';
		}
		.fa-crow:before {
			content: '\\f520';
		}
		.fa-crown:before {
			content: '\\f521';
		}
		.fa-crutch:before {
			content: '\\f7f7';
		}
		.fa-cruzeiro-sign:before {
			content: '\\e152';
		}
		.fa-cube:before {
			content: '\\f1b2';
		}
		.fa-cubes:before {
			content: '\\f1b3';
		}
		.fa-cubes-stacked:before {
			content: '\\e4e6';
		}
		.fa-d:before {
			content: '\\44';
		}
		.fa-database:before {
			content: '\\f1c0';
		}
		.fa-backspace:before,
		.fa-delete-left:before {
			content: '\\f55a';
		}
		.fa-democrat:before {
			content: '\\f747';
		}
		.fa-desktop-alt:before,
		.fa-desktop:before {
			content: '\\f390';
		}
		.fa-dharmachakra:before {
			content: '\\f655';
		}
		.fa-diagram-next:before {
			content: '\\e476';
		}
		.fa-diagram-predecessor:before {
			content: '\\e477';
		}
		.fa-diagram-project:before,
		.fa-project-diagram:before {
			content: '\\f542';
		}
		.fa-diagram-successor:before {
			content: '\\e47a';
		}
		.fa-diamond:before {
			content: '\\f219';
		}
		.fa-diamond-turn-right:before,
		.fa-directions:before {
			content: '\\f5eb';
		}
		.fa-dice:before {
			content: '\\f522';
		}
		.fa-dice-d20:before {
			content: '\\f6cf';
		}
		.fa-dice-d6:before {
			content: '\\f6d1';
		}
		.fa-dice-five:before {
			content: '\\f523';
		}
		.fa-dice-four:before {
			content: '\\f524';
		}
		.fa-dice-one:before {
			content: '\\f525';
		}
		.fa-dice-six:before {
			content: '\\f526';
		}
		.fa-dice-three:before {
			content: '\\f527';
		}
		.fa-dice-two:before {
			content: '\\f528';
		}
		.fa-disease:before {
			content: '\\f7fa';
		}
		.fa-display:before {
			content: '\\e163';
		}
		.fa-divide:before {
			content: '\\f529';
		}
		.fa-dna:before {
			content: '\\f471';
		}
		.fa-dog:before {
			content: '\\f6d3';
		}
		.fa-dollar-sign:before,
		.fa-dollar:before,
		.fa-usd:before {
			content: '\\24';
		}
		.fa-dolly-box:before,
		.fa-dolly:before {
			content: '\\f472';
		}
		.fa-dong-sign:before {
			content: '\\e169';
		}
		.fa-door-closed:before {
			content: '\\f52a';
		}
		.fa-door-open:before {
			content: '\\f52b';
		}
		.fa-dove:before {
			content: '\\f4ba';
		}
		.fa-compress-alt:before,
		.fa-down-left-and-up-right-to-center:before {
			content: '\\f422';
		}
		.fa-down-long:before,
		.fa-long-arrow-alt-down:before {
			content: '\\f309';
		}
		.fa-download:before {
			content: '\\f019';
		}
		.fa-dragon:before {
			content: '\\f6d5';
		}
		.fa-draw-polygon:before {
			content: '\\f5ee';
		}
		.fa-droplet:before,
		.fa-tint:before {
			content: '\\f043';
		}
		.fa-droplet-slash:before,
		.fa-tint-slash:before {
			content: '\\f5c7';
		}
		.fa-drum:before {
			content: '\\f569';
		}
		.fa-drum-steelpan:before {
			content: '\\f56a';
		}
		.fa-drumstick-bite:before {
			content: '\\f6d7';
		}
		.fa-dumbbell:before {
			content: '\\f44b';
		}
		.fa-dumpster:before {
			content: '\\f793';
		}
		.fa-dumpster-fire:before {
			content: '\\f794';
		}
		.fa-dungeon:before {
			content: '\\f6d9';
		}
		.fa-e:before {
			content: '\\45';
		}
		.fa-deaf:before,
		.fa-deafness:before,
		.fa-ear-deaf:before,
		.fa-hard-of-hearing:before {
			content: '\\f2a4';
		}
		.fa-assistive-listening-systems:before,
		.fa-ear-listen:before {
			content: '\\f2a2';
		}
		.fa-earth-africa:before,
		.fa-globe-africa:before {
			content: '\\f57c';
		}
		.fa-earth-america:before,
		.fa-earth-americas:before,
		.fa-earth:before,
		.fa-globe-americas:before {
			content: '\\f57d';
		}
		.fa-earth-asia:before,
		.fa-globe-asia:before {
			content: '\\f57e';
		}
		.fa-earth-europe:before,
		.fa-globe-europe:before {
			content: '\\f7a2';
		}
		.fa-earth-oceania:before,
		.fa-globe-oceania:before {
			content: '\\e47b';
		}
		.fa-egg:before {
			content: '\\f7fb';
		}
		.fa-eject:before {
			content: '\\f052';
		}
		.fa-elevator:before {
			content: '\\e16d';
		}
		.fa-ellipsis-h:before,
		.fa-ellipsis:before {
			content: '\\f141';
		}
		.fa-ellipsis-v:before,
		.fa-ellipsis-vertical:before {
			content: '\\f142';
		}
		.fa-envelope:before {
			content: '\\f0e0';
		}
		.fa-envelope-circle-check:before {
			content: '\\e4e8';
		}
		.fa-envelope-open:before {
			content: '\\f2b6';
		}
		.fa-envelope-open-text:before {
			content: '\\f658';
		}
		.fa-envelopes-bulk:before,
		.fa-mail-bulk:before {
			content: '\\f674';
		}
		.fa-equals:before {
			content: '\\3d';
		}
		.fa-eraser:before {
			content: '\\f12d';
		}
		.fa-ethernet:before {
			content: '\\f796';
		}
		.fa-eur:before,
		.fa-euro-sign:before,
		.fa-euro:before {
			content: '\\f153';
		}
		.fa-exclamation:before {
			content: '\\21';
		}
		.fa-expand:before {
			content: '\\f065';
		}
		.fa-explosion:before {
			content: '\\e4e9';
		}
		.fa-eye:before {
			content: '\\f06e';
		}
		.fa-eye-dropper-empty:before,
		.fa-eye-dropper:before,
		.fa-eyedropper:before {
			content: '\\f1fb';
		}
		.fa-eye-low-vision:before,
		.fa-low-vision:before {
			content: '\\f2a8';
		}
		.fa-eye-slash:before {
			content: '\\f070';
		}
		.fa-f:before {
			content: '\\46';
		}
		.fa-angry:before,
		.fa-face-angry:before {
			content: '\\f556';
		}
		.fa-dizzy:before,
		.fa-face-dizzy:before {
			content: '\\f567';
		}
		.fa-face-flushed:before,
		.fa-flushed:before {
			content: '\\f579';
		}
		.fa-face-frown:before,
		.fa-frown:before {
			content: '\\f119';
		}
		.fa-face-frown-open:before,
		.fa-frown-open:before {
			content: '\\f57a';
		}
		.fa-face-grimace:before,
		.fa-grimace:before {
			content: '\\f57f';
		}
		.fa-face-grin:before,
		.fa-grin:before {
			content: '\\f580';
		}
		.fa-face-grin-beam:before,
		.fa-grin-beam:before {
			content: '\\f582';
		}
		.fa-face-grin-beam-sweat:before,
		.fa-grin-beam-sweat:before {
			content: '\\f583';
		}
		.fa-face-grin-hearts:before,
		.fa-grin-hearts:before {
			content: '\\f584';
		}
		.fa-face-grin-squint:before,
		.fa-grin-squint:before {
			content: '\\f585';
		}
		.fa-face-grin-squint-tears:before,
		.fa-grin-squint-tears:before {
			content: '\\f586';
		}
		.fa-face-grin-stars:before,
		.fa-grin-stars:before {
			content: '\\f587';
		}
		.fa-face-grin-tears:before,
		.fa-grin-tears:before {
			content: '\\f588';
		}
		.fa-face-grin-tongue:before,
		.fa-grin-tongue:before {
			content: '\\f589';
		}
		.fa-face-grin-tongue-squint:before,
		.fa-grin-tongue-squint:before {
			content: '\\f58a';
		}
		.fa-face-grin-tongue-wink:before,
		.fa-grin-tongue-wink:before {
			content: '\\f58b';
		}
		.fa-face-grin-wide:before,
		.fa-grin-alt:before {
			content: '\\f581';
		}
		.fa-face-grin-wink:before,
		.fa-grin-wink:before {
			content: '\\f58c';
		}
		.fa-face-kiss:before,
		.fa-kiss:before {
			content: '\\f596';
		}
		.fa-face-kiss-beam:before,
		.fa-kiss-beam:before {
			content: '\\f597';
		}
		.fa-face-kiss-wink-heart:before,
		.fa-kiss-wink-heart:before {
			content: '\\f598';
		}
		.fa-face-laugh:before,
		.fa-laugh:before {
			content: '\\f599';
		}
		.fa-face-laugh-beam:before,
		.fa-laugh-beam:before {
			content: '\\f59a';
		}
		.fa-face-laugh-squint:before,
		.fa-laugh-squint:before {
			content: '\\f59b';
		}
		.fa-face-laugh-wink:before,
		.fa-laugh-wink:before {
			content: '\\f59c';
		}
		.fa-face-meh:before,
		.fa-meh:before {
			content: '\\f11a';
		}
		.fa-face-meh-blank:before,
		.fa-meh-blank:before {
			content: '\\f5a4';
		}
		.fa-face-rolling-eyes:before,
		.fa-meh-rolling-eyes:before {
			content: '\\f5a5';
		}
		.fa-face-sad-cry:before,
		.fa-sad-cry:before {
			content: '\\f5b3';
		}
		.fa-face-sad-tear:before,
		.fa-sad-tear:before {
			content: '\\f5b4';
		}
		.fa-face-smile:before,
		.fa-smile:before {
			content: '\\f118';
		}
		.fa-face-smile-beam:before,
		.fa-smile-beam:before {
			content: '\\f5b8';
		}
		.fa-face-smile-wink:before,
		.fa-smile-wink:before {
			content: '\\f4da';
		}
		.fa-face-surprise:before,
		.fa-surprise:before {
			content: '\\f5c2';
		}
		.fa-face-tired:before,
		.fa-tired:before {
			content: '\\f5c8';
		}
		.fa-fan:before {
			content: '\\f863';
		}
		.fa-faucet:before {
			content: '\\e005';
		}
		.fa-faucet-drip:before {
			content: '\\e006';
		}
		.fa-fax:before {
			content: '\\f1ac';
		}
		.fa-feather:before {
			content: '\\f52d';
		}
		.fa-feather-alt:before,
		.fa-feather-pointed:before {
			content: '\\f56b';
		}
		.fa-ferry:before {
			content: '\\e4ea';
		}
		.fa-file:before {
			content: '\\f15b';
		}
		.fa-file-arrow-down:before,
		.fa-file-download:before {
			content: '\\f56d';
		}
		.fa-file-arrow-up:before,
		.fa-file-upload:before {
			content: '\\f574';
		}
		.fa-file-audio:before {
			content: '\\f1c7';
		}
		.fa-file-circle-check:before {
			content: '\\e493';
		}
		.fa-file-circle-exclamation:before {
			content: '\\e4eb';
		}
		.fa-file-circle-minus:before {
			content: '\\e4ed';
		}
		.fa-file-circle-plus:before {
			content: '\\e4ee';
		}
		.fa-file-circle-question:before {
			content: '\\e4ef';
		}
		.fa-file-circle-xmark:before {
			content: '\\e494';
		}
		.fa-file-code:before {
			content: '\\f1c9';
		}
		.fa-file-contract:before {
			content: '\\f56c';
		}
		.fa-file-csv:before {
			content: '\\f6dd';
		}
		.fa-file-excel:before {
			content: '\\f1c3';
		}
		.fa-arrow-right-from-file:before,
		.fa-file-export:before {
			content: '\\f56e';
		}
		.fa-file-image:before {
			content: '\\f1c5';
		}
		.fa-arrow-right-to-file:before,
		.fa-file-import:before {
			content: '\\f56f';
		}
		.fa-file-invoice:before {
			content: '\\f570';
		}
		.fa-file-invoice-dollar:before {
			content: '\\f571';
		}
		.fa-file-alt:before,
		.fa-file-lines:before,
		.fa-file-text:before {
			content: '\\f15c';
		}
		.fa-file-medical:before {
			content: '\\f477';
		}
		.fa-file-pdf:before {
			content: '\\f1c1';
		}
		.fa-file-edit:before,
		.fa-file-pen:before {
			content: '\\f31c';
		}
		.fa-file-powerpoint:before {
			content: '\\f1c4';
		}
		.fa-file-prescription:before {
			content: '\\f572';
		}
		.fa-file-shield:before {
			content: '\\e4f0';
		}
		.fa-file-signature:before {
			content: '\\f573';
		}
		.fa-file-video:before {
			content: '\\f1c8';
		}
		.fa-file-medical-alt:before,
		.fa-file-waveform:before {
			content: '\\f478';
		}
		.fa-file-word:before {
			content: '\\f1c2';
		}
		.fa-file-archive:before,
		.fa-file-zipper:before {
			content: '\\f1c6';
		}
		.fa-fill:before {
			content: '\\f575';
		}
		.fa-fill-drip:before {
			content: '\\f576';
		}
		.fa-film:before {
			content: '\\f008';
		}
		.fa-filter:before {
			content: '\\f0b0';
		}
		.fa-filter-circle-dollar:before,
		.fa-funnel-dollar:before {
			content: '\\f662';
		}
		.fa-filter-circle-xmark:before {
			content: '\\e17b';
		}
		.fa-fingerprint:before {
			content: '\\f577';
		}
		.fa-fire:before {
			content: '\\f06d';
		}
		.fa-fire-burner:before {
			content: '\\e4f1';
		}
		.fa-fire-extinguisher:before {
			content: '\\f134';
		}
		.fa-fire-alt:before,
		.fa-fire-flame-curved:before {
			content: '\\f7e4';
		}
		.fa-burn:before,
		.fa-fire-flame-simple:before {
			content: '\\f46a';
		}
		.fa-fish:before {
			content: '\\f578';
		}
		.fa-fish-fins:before {
			content: '\\e4f2';
		}
		.fa-flag:before {
			content: '\\f024';
		}
		.fa-flag-checkered:before {
			content: '\\f11e';
		}
		.fa-flag-usa:before {
			content: '\\f74d';
		}
		.fa-flask:before {
			content: '\\f0c3';
		}
		.fa-flask-vial:before {
			content: '\\e4f3';
		}
		.fa-floppy-disk:before,
		.fa-save:before {
			content: '\\f0c7';
		}
		.fa-florin-sign:before {
			content: '\\e184';
		}
		.fa-folder-blank:before,
		.fa-folder:before {
			content: '\\f07b';
		}
		.fa-folder-closed:before {
			content: '\\e185';
		}
		.fa-folder-minus:before {
			content: '\\f65d';
		}
		.fa-folder-open:before {
			content: '\\f07c';
		}
		.fa-folder-plus:before {
			content: '\\f65e';
		}
		.fa-folder-tree:before {
			content: '\\f802';
		}
		.fa-font:before {
			content: '\\f031';
		}
		.fa-football-ball:before,
		.fa-football:before {
			content: '\\f44e';
		}
		.fa-forward:before {
			content: '\\f04e';
		}
		.fa-fast-forward:before,
		.fa-forward-fast:before {
			content: '\\f050';
		}
		.fa-forward-step:before,
		.fa-step-forward:before {
			content: '\\f051';
		}
		.fa-franc-sign:before {
			content: '\\e18f';
		}
		.fa-frog:before {
			content: '\\f52e';
		}
		.fa-futbol-ball:before,
		.fa-futbol:before,
		.fa-soccer-ball:before {
			content: '\\f1e3';
		}
		.fa-g:before {
			content: '\\47';
		}
		.fa-gamepad:before {
			content: '\\f11b';
		}
		.fa-gas-pump:before {
			content: '\\f52f';
		}
		.fa-dashboard:before,
		.fa-gauge-med:before,
		.fa-gauge:before,
		.fa-tachometer-alt-average:before {
			content: '\\f624';
		}
		.fa-gauge-high:before,
		.fa-tachometer-alt-fast:before,
		.fa-tachometer-alt:before {
			content: '\\f625';
		}
		.fa-gauge-simple-med:before,
		.fa-gauge-simple:before,
		.fa-tachometer-average:before {
			content: '\\f629';
		}
		.fa-gauge-simple-high:before,
		.fa-tachometer-fast:before,
		.fa-tachometer:before {
			content: '\\f62a';
		}
		.fa-gavel:before,
		.fa-legal:before {
			content: '\\f0e3';
		}
		.fa-cog:before,
		.fa-gear:before {
			content: '\\f013';
		}
		.fa-cogs:before,
		.fa-gears:before {
			content: '\\f085';
		}
		.fa-gem:before {
			content: '\\f3a5';
		}
		.fa-genderless:before {
			content: '\\f22d';
		}
		.fa-ghost:before {
			content: '\\f6e2';
		}
		.fa-gift:before {
			content: '\\f06b';
		}
		.fa-gifts:before {
			content: '\\f79c';
		}
		.fa-glass-water:before {
			content: '\\e4f4';
		}
		.fa-glass-water-droplet:before {
			content: '\\e4f5';
		}
		.fa-glasses:before {
			content: '\\f530';
		}
		.fa-globe:before {
			content: '\\f0ac';
		}
		.fa-golf-ball-tee:before,
		.fa-golf-ball:before {
			content: '\\f450';
		}
		.fa-gopuram:before {
			content: '\\f664';
		}
		.fa-graduation-cap:before,
		.fa-mortar-board:before {
			content: '\\f19d';
		}
		.fa-greater-than:before {
			content: '\\3e';
		}
		.fa-greater-than-equal:before {
			content: '\\f532';
		}
		.fa-grip-horizontal:before,
		.fa-grip:before {
			content: '\\f58d';
		}
		.fa-grip-lines:before {
			content: '\\f7a4';
		}
		.fa-grip-lines-vertical:before {
			content: '\\f7a5';
		}
		.fa-grip-vertical:before {
			content: '\\f58e';
		}
		.fa-group-arrows-rotate:before {
			content: '\\e4f6';
		}
		.fa-guarani-sign:before {
			content: '\\e19a';
		}
		.fa-guitar:before {
			content: '\\f7a6';
		}
		.fa-gun:before {
			content: '\\e19b';
		}
		.fa-h:before {
			content: '\\48';
		}
		.fa-hammer:before {
			content: '\\f6e3';
		}
		.fa-hamsa:before {
			content: '\\f665';
		}
		.fa-hand-paper:before,
		.fa-hand:before {
			content: '\\f256';
		}
		.fa-hand-back-fist:before,
		.fa-hand-rock:before {
			content: '\\f255';
		}
		.fa-allergies:before,
		.fa-hand-dots:before {
			content: '\\f461';
		}
		.fa-fist-raised:before,
		.fa-hand-fist:before {
			content: '\\f6de';
		}
		.fa-hand-holding:before {
			content: '\\f4bd';
		}
		.fa-hand-holding-dollar:before,
		.fa-hand-holding-usd:before {
			content: '\\f4c0';
		}
		.fa-hand-holding-droplet:before,
		.fa-hand-holding-water:before {
			content: '\\f4c1';
		}
		.fa-hand-holding-hand:before {
			content: '\\e4f7';
		}
		.fa-hand-holding-heart:before {
			content: '\\f4be';
		}
		.fa-hand-holding-medical:before {
			content: '\\e05c';
		}
		.fa-hand-lizard:before {
			content: '\\f258';
		}
		.fa-hand-middle-finger:before {
			content: '\\f806';
		}
		.fa-hand-peace:before {
			content: '\\f25b';
		}
		.fa-hand-point-down:before {
			content: '\\f0a7';
		}
		.fa-hand-point-left:before {
			content: '\\f0a5';
		}
		.fa-hand-point-right:before {
			content: '\\f0a4';
		}
		.fa-hand-point-up:before {
			content: '\\f0a6';
		}
		.fa-hand-pointer:before {
			content: '\\f25a';
		}
		.fa-hand-scissors:before {
			content: '\\f257';
		}
		.fa-hand-sparkles:before {
			content: '\\e05d';
		}
		.fa-hand-spock:before {
			content: '\\f259';
		}
		.fa-handcuffs:before {
			content: '\\e4f8';
		}
		.fa-hands:before,
		.fa-sign-language:before,
		.fa-signing:before {
			content: '\\f2a7';
		}
		.fa-american-sign-language-interpreting:before,
		.fa-asl-interpreting:before,
		.fa-hands-american-sign-language-interpreting:before,
		.fa-hands-asl-interpreting:before {
			content: '\\f2a3';
		}
		.fa-hands-bound:before {
			content: '\\e4f9';
		}
		.fa-hands-bubbles:before,
		.fa-hands-wash:before {
			content: '\\e05e';
		}
		.fa-hands-clapping:before {
			content: '\\e1a8';
		}
		.fa-hands-holding:before {
			content: '\\f4c2';
		}
		.fa-hands-holding-child:before {
			content: '\\e4fa';
		}
		.fa-hands-holding-circle:before {
			content: '\\e4fb';
		}
		.fa-hands-praying:before,
		.fa-praying-hands:before {
			content: '\\f684';
		}
		.fa-handshake:before {
			content: '\\f2b5';
		}
		.fa-hands-helping:before,
		.fa-handshake-angle:before {
			content: '\\f4c4';
		}
		.fa-handshake-alt:before,
		.fa-handshake-simple:before {
			content: '\\f4c6';
		}
		.fa-handshake-alt-slash:before,
		.fa-handshake-simple-slash:before {
			content: '\\e05f';
		}
		.fa-handshake-slash:before {
			content: '\\e060';
		}
		.fa-hanukiah:before {
			content: '\\f6e6';
		}
		.fa-hard-drive:before,
		.fa-hdd:before {
			content: '\\f0a0';
		}
		.fa-hashtag:before {
			content: '\\23';
		}
		.fa-hat-cowboy:before {
			content: '\\f8c0';
		}
		.fa-hat-cowboy-side:before {
			content: '\\f8c1';
		}
		.fa-hat-wizard:before {
			content: '\\f6e8';
		}
		.fa-head-side-cough:before {
			content: '\\e061';
		}
		.fa-head-side-cough-slash:before {
			content: '\\e062';
		}
		.fa-head-side-mask:before {
			content: '\\e063';
		}
		.fa-head-side-virus:before {
			content: '\\e064';
		}
		.fa-header:before,
		.fa-heading:before {
			content: '\\f1dc';
		}
		.fa-headphones:before {
			content: '\\f025';
		}
		.fa-headphones-alt:before,
		.fa-headphones-simple:before {
			content: '\\f58f';
		}
		.fa-headset:before {
			content: '\\f590';
		}
		.fa-heart:before {
			content: '\\f004';
		}
		.fa-heart-circle-bolt:before {
			content: '\\e4fc';
		}
		.fa-heart-circle-check:before {
			content: '\\e4fd';
		}
		.fa-heart-circle-exclamation:before {
			content: '\\e4fe';
		}
		.fa-heart-circle-minus:before {
			content: '\\e4ff';
		}
		.fa-heart-circle-plus:before {
			content: '\\e500';
		}
		.fa-heart-circle-xmark:before {
			content: '\\e501';
		}
		.fa-heart-broken:before,
		.fa-heart-crack:before {
			content: '\\f7a9';
		}
		.fa-heart-pulse:before,
		.fa-heartbeat:before {
			content: '\\f21e';
		}
		.fa-helicopter:before {
			content: '\\f533';
		}
		.fa-helicopter-symbol:before {
			content: '\\e502';
		}
		.fa-hard-hat:before,
		.fa-hat-hard:before,
		.fa-helmet-safety:before {
			content: '\\f807';
		}
		.fa-helmet-un:before {
			content: '\\e503';
		}
		.fa-highlighter:before {
			content: '\\f591';
		}
		.fa-hill-avalanche:before {
			content: '\\e507';
		}
		.fa-hill-rockslide:before {
			content: '\\e508';
		}
		.fa-hippo:before {
			content: '\\f6ed';
		}
		.fa-hockey-puck:before {
			content: '\\f453';
		}
		.fa-holly-berry:before {
			content: '\\f7aa';
		}
		.fa-horse:before {
			content: '\\f6f0';
		}
		.fa-horse-head:before {
			content: '\\f7ab';
		}
		.fa-hospital-alt:before,
		.fa-hospital-wide:before,
		.fa-hospital:before {
			content: '\\f0f8';
		}
		.fa-hospital-user:before {
			content: '\\f80d';
		}
		.fa-hot-tub-person:before,
		.fa-hot-tub:before {
			content: '\\f593';
		}
		.fa-hotdog:before {
			content: '\\f80f';
		}
		.fa-hotel:before {
			content: '\\f594';
		}
		.fa-hourglass-2:before,
		.fa-hourglass-half:before,
		.fa-hourglass:before {
			content: '\\f254';
		}
		.fa-hourglass-empty:before {
			content: '\\f252';
		}
		.fa-hourglass-3:before,
		.fa-hourglass-end:before {
			content: '\\f253';
		}
		.fa-hourglass-1:before,
		.fa-hourglass-start:before {
			content: '\\f251';
		}
		.fa-home-alt:before,
		.fa-home-lg-alt:before,
		.fa-home:before,
		.fa-house:before {
			content: '\\f015';
		}
		.fa-home-lg:before,
		.fa-house-chimney:before {
			content: '\\e3af';
		}
		.fa-house-chimney-crack:before,
		.fa-house-damage:before {
			content: '\\f6f1';
		}
		.fa-clinic-medical:before,
		.fa-house-chimney-medical:before {
			content: '\\f7f2';
		}
		.fa-house-chimney-user:before {
			content: '\\e065';
		}
		.fa-house-chimney-window:before {
			content: '\\e00d';
		}
		.fa-house-circle-check:before {
			content: '\\e509';
		}
		.fa-house-circle-exclamation:before {
			content: '\\e50a';
		}
		.fa-house-circle-xmark:before {
			content: '\\e50b';
		}
		.fa-house-crack:before {
			content: '\\e3b1';
		}
		.fa-house-fire:before {
			content: '\\e50c';
		}
		.fa-house-flag:before {
			content: '\\e50d';
		}
		.fa-house-flood-water:before {
			content: '\\e50e';
		}
		.fa-house-flood-water-circle-arrow-right:before {
			content: '\\e50f';
		}
		.fa-house-laptop:before,
		.fa-laptop-house:before {
			content: '\\e066';
		}
		.fa-house-lock:before {
			content: '\\e510';
		}
		.fa-house-medical:before {
			content: '\\e3b2';
		}
		.fa-house-medical-circle-check:before {
			content: '\\e511';
		}
		.fa-house-medical-circle-exclamation:before {
			content: '\\e512';
		}
		.fa-house-medical-circle-xmark:before {
			content: '\\e513';
		}
		.fa-house-medical-flag:before {
			content: '\\e514';
		}
		.fa-house-signal:before {
			content: '\\e012';
		}
		.fa-house-tsunami:before {
			content: '\\e515';
		}
		.fa-home-user:before,
		.fa-house-user:before {
			content: '\\e1b0';
		}
		.fa-hryvnia-sign:before,
		.fa-hryvnia:before {
			content: '\\f6f2';
		}
		.fa-hurricane:before {
			content: '\\f751';
		}
		.fa-i:before {
			content: '\\49';
		}
		.fa-i-cursor:before {
			content: '\\f246';
		}
		.fa-ice-cream:before {
			content: '\\f810';
		}
		.fa-icicles:before {
			content: '\\f7ad';
		}
		.fa-heart-music-camera-bolt:before,
		.fa-icons:before {
			content: '\\f86d';
		}
		.fa-id-badge:before {
			content: '\\f2c1';
		}
		.fa-drivers-license:before,
		.fa-id-card:before {
			content: '\\f2c2';
		}
		.fa-id-card-alt:before,
		.fa-id-card-clip:before {
			content: '\\f47f';
		}
		.fa-igloo:before {
			content: '\\f7ae';
		}
		.fa-image:before {
			content: '\\f03e';
		}
		.fa-image-portrait:before,
		.fa-portrait:before {
			content: '\\f3e0';
		}
		.fa-images:before {
			content: '\\f302';
		}
		.fa-inbox:before {
			content: '\\f01c';
		}
		.fa-indent:before {
			content: '\\f03c';
		}
		.fa-indian-rupee-sign:before,
		.fa-indian-rupee:before,
		.fa-inr:before {
			content: '\\e1bc';
		}
		.fa-industry:before {
			content: '\\f275';
		}
		.fa-infinity:before {
			content: '\\f534';
		}
		.fa-info:before {
			content: '\\f129';
		}
		.fa-italic:before {
			content: '\\f033';
		}
		.fa-j:before {
			content: '\\4a';
		}
		.fa-jar:before {
			content: '\\e516';
		}
		.fa-jar-wheat:before {
			content: '\\e517';
		}
		.fa-jedi:before {
			content: '\\f669';
		}
		.fa-fighter-jet:before,
		.fa-jet-fighter:before {
			content: '\\f0fb';
		}
		.fa-jet-fighter-up:before {
			content: '\\e518';
		}
		.fa-joint:before {
			content: '\\f595';
		}
		.fa-jug-detergent:before {
			content: '\\e519';
		}
		.fa-k:before {
			content: '\\4b';
		}
		.fa-kaaba:before {
			content: '\\f66b';
		}
		.fa-key:before {
			content: '\\f084';
		}
		.fa-keyboard:before {
			content: '\\f11c';
		}
		.fa-khanda:before {
			content: '\\f66d';
		}
		.fa-kip-sign:before {
			content: '\\e1c4';
		}
		.fa-first-aid:before,
		.fa-kit-medical:before {
			content: '\\f479';
		}
		.fa-kitchen-set:before {
			content: '\\e51a';
		}
		.fa-kiwi-bird:before {
			content: '\\f535';
		}
		.fa-l:before {
			content: '\\4c';
		}
		.fa-land-mine-on:before {
			content: '\\e51b';
		}
		.fa-landmark:before {
			content: '\\f66f';
		}
		.fa-landmark-alt:before,
		.fa-landmark-dome:before {
			content: '\\f752';
		}
		.fa-landmark-flag:before {
			content: '\\e51c';
		}
		.fa-language:before {
			content: '\\f1ab';
		}
		.fa-laptop:before {
			content: '\\f109';
		}
		.fa-laptop-code:before {
			content: '\\f5fc';
		}
		.fa-laptop-file:before {
			content: '\\e51d';
		}
		.fa-laptop-medical:before {
			content: '\\f812';
		}
		.fa-lari-sign:before {
			content: '\\e1c8';
		}
		.fa-layer-group:before {
			content: '\\f5fd';
		}
		.fa-leaf:before {
			content: '\\f06c';
		}
		.fa-left-long:before,
		.fa-long-arrow-alt-left:before {
			content: '\\f30a';
		}
		.fa-arrows-alt-h:before,
		.fa-left-right:before {
			content: '\\f337';
		}
		.fa-lemon:before {
			content: '\\f094';
		}
		.fa-less-than:before {
			content: '\\3c';
		}
		.fa-less-than-equal:before {
			content: '\\f537';
		}
		.fa-life-ring:before {
			content: '\\f1cd';
		}
		.fa-lightbulb:before {
			content: '\\f0eb';
		}
		.fa-lines-leaning:before {
			content: '\\e51e';
		}
		.fa-chain:before,
		.fa-link:before {
			content: '\\f0c1';
		}
		.fa-chain-broken:before,
		.fa-chain-slash:before,
		.fa-link-slash:before,
		.fa-unlink:before {
			content: '\\f127';
		}
		.fa-lira-sign:before {
			content: '\\f195';
		}
		.fa-list-squares:before,
		.fa-list:before {
			content: '\\f03a';
		}
		.fa-list-check:before,
		.fa-tasks:before {
			content: '\\f0ae';
		}
		.fa-list-1-2:before,
		.fa-list-numeric:before,
		.fa-list-ol:before {
			content: '\\f0cb';
		}
		.fa-list-dots:before,
		.fa-list-ul:before {
			content: '\\f0ca';
		}
		.fa-litecoin-sign:before {
			content: '\\e1d3';
		}
		.fa-location-arrow:before {
			content: '\\f124';
		}
		.fa-location-crosshairs:before,
		.fa-location:before {
			content: '\\f601';
		}
		.fa-location-dot:before,
		.fa-map-marker-alt:before {
			content: '\\f3c5';
		}
		.fa-location-pin:before,
		.fa-map-marker:before {
			content: '\\f041';
		}
		.fa-location-pin-lock:before {
			content: '\\e51f';
		}
		.fa-lock:before {
			content: '\\f023';
		}
		.fa-lock-open:before {
			content: '\\f3c1';
		}
		.fa-locust:before {
			content: '\\e520';
		}
		.fa-lungs:before {
			content: '\\f604';
		}
		.fa-lungs-virus:before {
			content: '\\e067';
		}
		.fa-m:before {
			content: '\\4d';
		}
		.fa-magnet:before {
			content: '\\f076';
		}
		.fa-magnifying-glass:before,
		.fa-search:before {
			content: '\\f002';
		}
		.fa-magnifying-glass-arrow-right:before {
			content: '\\e521';
		}
		.fa-magnifying-glass-chart:before {
			content: '\\e522';
		}
		.fa-magnifying-glass-dollar:before,
		.fa-search-dollar:before {
			content: '\\f688';
		}
		.fa-magnifying-glass-location:before,
		.fa-search-location:before {
			content: '\\f689';
		}
		.fa-magnifying-glass-minus:before,
		.fa-search-minus:before {
			content: '\\f010';
		}
		.fa-magnifying-glass-plus:before,
		.fa-search-plus:before {
			content: '\\f00e';
		}
		.fa-manat-sign:before {
			content: '\\e1d5';
		}
		.fa-map:before {
			content: '\\f279';
		}
		.fa-map-location:before,
		.fa-map-marked:before {
			content: '\\f59f';
		}
		.fa-map-location-dot:before,
		.fa-map-marked-alt:before {
			content: '\\f5a0';
		}
		.fa-map-pin:before {
			content: '\\f276';
		}
		.fa-marker:before {
			content: '\\f5a1';
		}
		.fa-mars:before {
			content: '\\f222';
		}
		.fa-mars-and-venus:before {
			content: '\\f224';
		}
		.fa-mars-and-venus-burst:before {
			content: '\\e523';
		}
		.fa-mars-double:before {
			content: '\\f227';
		}
		.fa-mars-stroke:before {
			content: '\\f229';
		}
		.fa-mars-stroke-h:before,
		.fa-mars-stroke-right:before {
			content: '\\f22b';
		}
		.fa-mars-stroke-up:before,
		.fa-mars-stroke-v:before {
			content: '\\f22a';
		}
		.fa-glass-martini-alt:before,
		.fa-martini-glass:before {
			content: '\\f57b';
		}
		.fa-cocktail:before,
		.fa-martini-glass-citrus:before {
			content: '\\f561';
		}
		.fa-glass-martini:before,
		.fa-martini-glass-empty:before {
			content: '\\f000';
		}
		.fa-mask:before {
			content: '\\f6fa';
		}
		.fa-mask-face:before {
			content: '\\e1d7';
		}
		.fa-mask-ventilator:before {
			content: '\\e524';
		}
		.fa-masks-theater:before,
		.fa-theater-masks:before {
			content: '\\f630';
		}
		.fa-mattress-pillow:before {
			content: '\\e525';
		}
		.fa-expand-arrows-alt:before,
		.fa-maximize:before {
			content: '\\f31e';
		}
		.fa-medal:before {
			content: '\\f5a2';
		}
		.fa-memory:before {
			content: '\\f538';
		}
		.fa-menorah:before {
			content: '\\f676';
		}
		.fa-mercury:before {
			content: '\\f223';
		}
		.fa-comment-alt:before,
		.fa-message:before {
			content: '\\f27a';
		}
		.fa-meteor:before {
			content: '\\f753';
		}
		.fa-microchip:before {
			content: '\\f2db';
		}
		.fa-microphone:before {
			content: '\\f130';
		}
		.fa-microphone-alt:before,
		.fa-microphone-lines:before {
			content: '\\f3c9';
		}
		.fa-microphone-alt-slash:before,
		.fa-microphone-lines-slash:before {
			content: '\\f539';
		}
		.fa-microphone-slash:before {
			content: '\\f131';
		}
		.fa-microscope:before {
			content: '\\f610';
		}
		.fa-mill-sign:before {
			content: '\\e1ed';
		}
		.fa-compress-arrows-alt:before,
		.fa-minimize:before {
			content: '\\f78c';
		}
		.fa-minus:before,
		.fa-subtract:before {
			content: '\\f068';
		}
		.fa-mitten:before {
			content: '\\f7b5';
		}
		.fa-mobile-android:before,
		.fa-mobile-phone:before,
		.fa-mobile:before {
			content: '\\f3ce';
		}
		.fa-mobile-button:before {
			content: '\\f10b';
		}
		.fa-mobile-retro:before {
			content: '\\e527';
		}
		.fa-mobile-android-alt:before,
		.fa-mobile-screen:before {
			content: '\\f3cf';
		}
		.fa-mobile-alt:before,
		.fa-mobile-screen-button:before {
			content: '\\f3cd';
		}
		.fa-money-bill:before {
			content: '\\f0d6';
		}
		.fa-money-bill-1:before,
		.fa-money-bill-alt:before {
			content: '\\f3d1';
		}
		.fa-money-bill-1-wave:before,
		.fa-money-bill-wave-alt:before {
			content: '\\f53b';
		}
		.fa-money-bill-transfer:before {
			content: '\\e528';
		}
		.fa-money-bill-trend-up:before {
			content: '\\e529';
		}
		.fa-money-bill-wave:before {
			content: '\\f53a';
		}
		.fa-money-bill-wheat:before {
			content: '\\e52a';
		}
		.fa-money-bills:before {
			content: '\\e1f3';
		}
		.fa-money-check:before {
			content: '\\f53c';
		}
		.fa-money-check-alt:before,
		.fa-money-check-dollar:before {
			content: '\\f53d';
		}
		.fa-monument:before {
			content: '\\f5a6';
		}
		.fa-moon:before {
			content: '\\f186';
		}
		.fa-mortar-pestle:before {
			content: '\\f5a7';
		}
		.fa-mosque:before {
			content: '\\f678';
		}
		.fa-mosquito:before {
			content: '\\e52b';
		}
		.fa-mosquito-net:before {
			content: '\\e52c';
		}
		.fa-motorcycle:before {
			content: '\\f21c';
		}
		.fa-mound:before {
			content: '\\e52d';
		}
		.fa-mountain:before {
			content: '\\f6fc';
		}
		.fa-mountain-city:before {
			content: '\\e52e';
		}
		.fa-mountain-sun:before {
			content: '\\e52f';
		}
		.fa-mug-hot:before {
			content: '\\f7b6';
		}
		.fa-coffee:before,
		.fa-mug-saucer:before {
			content: '\\f0f4';
		}
		.fa-music:before {
			content: '\\f001';
		}
		.fa-n:before {
			content: '\\4e';
		}
		.fa-naira-sign:before {
			content: '\\e1f6';
		}
		.fa-network-wired:before {
			content: '\\f6ff';
		}
		.fa-neuter:before {
			content: '\\f22c';
		}
		.fa-newspaper:before {
			content: '\\f1ea';
		}
		.fa-not-equal:before {
			content: '\\f53e';
		}
		.fa-note-sticky:before,
		.fa-sticky-note:before {
			content: '\\f249';
		}
		.fa-notes-medical:before {
			content: '\\f481';
		}
		.fa-o:before {
			content: '\\4f';
		}
		.fa-object-group:before {
			content: '\\f247';
		}
		.fa-object-ungroup:before {
			content: '\\f248';
		}
		.fa-oil-can:before {
			content: '\\f613';
		}
		.fa-oil-well:before {
			content: '\\e532';
		}
		.fa-om:before {
			content: '\\f679';
		}
		.fa-otter:before {
			content: '\\f700';
		}
		.fa-dedent:before,
		.fa-outdent:before {
			content: '\\f03b';
		}
		.fa-p:before {
			content: '\\50';
		}
		.fa-pager:before {
			content: '\\f815';
		}
		.fa-paint-roller:before {
			content: '\\f5aa';
		}
		.fa-paint-brush:before,
		.fa-paintbrush:before {
			content: '\\f1fc';
		}
		.fa-palette:before {
			content: '\\f53f';
		}
		.fa-pallet:before {
			content: '\\f482';
		}
		.fa-panorama:before {
			content: '\\e209';
		}
		.fa-paper-plane:before {
			content: '\\f1d8';
		}
		.fa-paperclip:before {
			content: '\\f0c6';
		}
		.fa-parachute-box:before {
			content: '\\f4cd';
		}
		.fa-paragraph:before {
			content: '\\f1dd';
		}
		.fa-passport:before {
			content: '\\f5ab';
		}
		.fa-file-clipboard:before,
		.fa-paste:before {
			content: '\\f0ea';
		}
		.fa-pause:before {
			content: '\\f04c';
		}
		.fa-paw:before {
			content: '\\f1b0';
		}
		.fa-peace:before {
			content: '\\f67c';
		}
		.fa-pen:before {
			content: '\\f304';
		}
		.fa-pen-alt:before,
		.fa-pen-clip:before {
			content: '\\f305';
		}
		.fa-pen-fancy:before {
			content: '\\f5ac';
		}
		.fa-pen-nib:before {
			content: '\\f5ad';
		}
		.fa-pen-ruler:before,
		.fa-pencil-ruler:before {
			content: '\\f5ae';
		}
		.fa-edit:before,
		.fa-pen-to-square:before {
			content: '\\f044';
		}
		.fa-pencil-alt:before,
		.fa-pencil:before {
			content: '\\f303';
		}
		.fa-people-arrows-left-right:before,
		.fa-people-arrows:before {
			content: '\\e068';
		}
		.fa-people-carry-box:before,
		.fa-people-carry:before {
			content: '\\f4ce';
		}
		.fa-people-group:before {
			content: '\\e533';
		}
		.fa-people-line:before {
			content: '\\e534';
		}
		.fa-people-pulling:before {
			content: '\\e535';
		}
		.fa-people-robbery:before {
			content: '\\e536';
		}
		.fa-people-roof:before {
			content: '\\e537';
		}
		.fa-pepper-hot:before {
			content: '\\f816';
		}
		.fa-percent:before,
		.fa-percentage:before {
			content: '\\25';
		}
		.fa-male:before,
		.fa-person:before {
			content: '\\f183';
		}
		.fa-person-arrow-down-to-line:before {
			content: '\\e538';
		}
		.fa-person-arrow-up-from-line:before {
			content: '\\e539';
		}
		.fa-biking:before,
		.fa-person-biking:before {
			content: '\\f84a';
		}
		.fa-person-booth:before {
			content: '\\f756';
		}
		.fa-person-breastfeeding:before {
			content: '\\e53a';
		}
		.fa-person-burst:before {
			content: '\\e53b';
		}
		.fa-person-cane:before {
			content: '\\e53c';
		}
		.fa-person-chalkboard:before {
			content: '\\e53d';
		}
		.fa-person-circle-check:before {
			content: '\\e53e';
		}
		.fa-person-circle-exclamation:before {
			content: '\\e53f';
		}
		.fa-person-circle-minus:before {
			content: '\\e540';
		}
		.fa-person-circle-plus:before {
			content: '\\e541';
		}
		.fa-person-circle-question:before {
			content: '\\e542';
		}
		.fa-person-circle-xmark:before {
			content: '\\e543';
		}
		.fa-digging:before,
		.fa-person-digging:before {
			content: '\\f85e';
		}
		.fa-diagnoses:before,
		.fa-person-dots-from-line:before {
			content: '\\f470';
		}
		.fa-female:before,
		.fa-person-dress:before {
			content: '\\f182';
		}
		.fa-person-dress-burst:before {
			content: '\\e544';
		}
		.fa-person-drowning:before {
			content: '\\e545';
		}
		.fa-person-falling:before {
			content: '\\e546';
		}
		.fa-person-falling-burst:before {
			content: '\\e547';
		}
		.fa-person-half-dress:before {
			content: '\\e548';
		}
		.fa-person-harassing:before {
			content: '\\e549';
		}
		.fa-hiking:before,
		.fa-person-hiking:before {
			content: '\\f6ec';
		}
		.fa-person-military-pointing:before {
			content: '\\e54a';
		}
		.fa-person-military-rifle:before {
			content: '\\e54b';
		}
		.fa-person-military-to-person:before {
			content: '\\e54c';
		}
		.fa-person-praying:before,
		.fa-pray:before {
			content: '\\f683';
		}
		.fa-person-pregnant:before {
			content: '\\e31e';
		}
		.fa-person-rays:before {
			content: '\\e54d';
		}
		.fa-person-rifle:before {
			content: '\\e54e';
		}
		.fa-person-running:before,
		.fa-running:before {
			content: '\\f70c';
		}
		.fa-person-shelter:before {
			content: '\\e54f';
		}
		.fa-person-skating:before,
		.fa-skating:before {
			content: '\\f7c5';
		}
		.fa-person-skiing:before,
		.fa-skiing:before {
			content: '\\f7c9';
		}
		.fa-person-skiing-nordic:before,
		.fa-skiing-nordic:before {
			content: '\\f7ca';
		}
		.fa-person-snowboarding:before,
		.fa-snowboarding:before {
			content: '\\f7ce';
		}
		.fa-person-swimming:before,
		.fa-swimmer:before {
			content: '\\f5c4';
		}
		.fa-person-through-window:before {
			content: '\\e433';
		}
		.fa-person-walking:before,
		.fa-walking:before {
			content: '\\f554';
		}
		.fa-person-walking-arrow-loop-left:before {
			content: '\\e551';
		}
		.fa-person-walking-arrow-right:before {
			content: '\\e552';
		}
		.fa-person-walking-dashed-line-arrow-right:before {
			content: '\\e553';
		}
		.fa-person-walking-luggage:before {
			content: '\\e554';
		}
		.fa-blind:before,
		.fa-person-walking-with-cane:before {
			content: '\\f29d';
		}
		.fa-peseta-sign:before {
			content: '\\e221';
		}
		.fa-peso-sign:before {
			content: '\\e222';
		}
		.fa-phone:before {
			content: '\\f095';
		}
		.fa-phone-alt:before,
		.fa-phone-flip:before {
			content: '\\f879';
		}
		.fa-phone-slash:before {
			content: '\\f3dd';
		}
		.fa-phone-volume:before,
		.fa-volume-control-phone:before {
			content: '\\f2a0';
		}
		.fa-photo-film:before,
		.fa-photo-video:before {
			content: '\\f87c';
		}
		.fa-piggy-bank:before {
			content: '\\f4d3';
		}
		.fa-pills:before {
			content: '\\f484';
		}
		.fa-pizza-slice:before {
			content: '\\f818';
		}
		.fa-place-of-worship:before {
			content: '\\f67f';
		}
		.fa-plane:before {
			content: '\\f072';
		}
		.fa-plane-arrival:before {
			content: '\\f5af';
		}
		.fa-plane-circle-check:before {
			content: '\\e555';
		}
		.fa-plane-circle-exclamation:before {
			content: '\\e556';
		}
		.fa-plane-circle-xmark:before {
			content: '\\e557';
		}
		.fa-plane-departure:before {
			content: '\\f5b0';
		}
		.fa-plane-lock:before {
			content: '\\e558';
		}
		.fa-plane-slash:before {
			content: '\\e069';
		}
		.fa-plane-up:before {
			content: '\\e22d';
		}
		.fa-plant-wilt:before {
			content: '\\e43b';
		}
		.fa-plate-wheat:before {
			content: '\\e55a';
		}
		.fa-play:before {
			content: '\\f04b';
		}
		.fa-plug:before {
			content: '\\f1e6';
		}
		.fa-plug-circle-bolt:before {
			content: '\\e55b';
		}
		.fa-plug-circle-check:before {
			content: '\\e55c';
		}
		.fa-plug-circle-exclamation:before {
			content: '\\e55d';
		}
		.fa-plug-circle-minus:before {
			content: '\\e55e';
		}
		.fa-plug-circle-plus:before {
			content: '\\e55f';
		}
		.fa-plug-circle-xmark:before {
			content: '\\e560';
		}
		.fa-add:before,
		.fa-plus:before {
			content: '\\2b';
		}
		.fa-plus-minus:before {
			content: '\\e43c';
		}
		.fa-podcast:before {
			content: '\\f2ce';
		}
		.fa-poo:before {
			content: '\\f2fe';
		}
		.fa-poo-bolt:before,
		.fa-poo-storm:before {
			content: '\\f75a';
		}
		.fa-poop:before {
			content: '\\f619';
		}
		.fa-power-off:before {
			content: '\\f011';
		}
		.fa-prescription:before {
			content: '\\f5b1';
		}
		.fa-prescription-bottle:before {
			content: '\\f485';
		}
		.fa-prescription-bottle-alt:before,
		.fa-prescription-bottle-medical:before {
			content: '\\f486';
		}
		.fa-print:before {
			content: '\\f02f';
		}
		.fa-pump-medical:before {
			content: '\\e06a';
		}
		.fa-pump-soap:before {
			content: '\\e06b';
		}
		.fa-puzzle-piece:before {
			content: '\\f12e';
		}
		.fa-q:before {
			content: '\\51';
		}
		.fa-qrcode:before {
			content: '\\f029';
		}
		.fa-question:before {
			content: '\\3f';
		}
		.fa-quote-left-alt:before,
		.fa-quote-left:before {
			content: '\\f10d';
		}
		.fa-quote-right-alt:before,
		.fa-quote-right:before {
			content: '\\f10e';
		}
		.fa-r:before {
			content: '\\52';
		}
		.fa-radiation:before {
			content: '\\f7b9';
		}
		.fa-radio:before {
			content: '\\f8d7';
		}
		.fa-rainbow:before {
			content: '\\f75b';
		}
		.fa-ranking-star:before {
			content: '\\e561';
		}
		.fa-receipt:before {
			content: '\\f543';
		}
		.fa-record-vinyl:before {
			content: '\\f8d9';
		}
		.fa-ad:before,
		.fa-rectangle-ad:before {
			content: '\\f641';
		}
		.fa-list-alt:before,
		.fa-rectangle-list:before {
			content: '\\f022';
		}
		.fa-rectangle-times:before,
		.fa-rectangle-xmark:before,
		.fa-times-rectangle:before,
		.fa-window-close:before {
			content: '\\f410';
		}
		.fa-recycle:before {
			content: '\\f1b8';
		}
		.fa-registered:before {
			content: '\\f25d';
		}
		.fa-repeat:before {
			content: '\\f363';
		}
		.fa-mail-reply:before,
		.fa-reply:before {
			content: '\\f3e5';
		}
		.fa-mail-reply-all:before,
		.fa-reply-all:before {
			content: '\\f122';
		}
		.fa-republican:before {
			content: '\\f75e';
		}
		.fa-restroom:before {
			content: '\\f7bd';
		}
		.fa-retweet:before {
			content: '\\f079';
		}
		.fa-ribbon:before {
			content: '\\f4d6';
		}
		.fa-right-from-bracket:before,
		.fa-sign-out-alt:before {
			content: '\\f2f5';
		}
		.fa-exchange-alt:before,
		.fa-right-left:before {
			content: '\\f362';
		}
		.fa-long-arrow-alt-right:before,
		.fa-right-long:before {
			content: '\\f30b';
		}
		.fa-right-to-bracket:before,
		.fa-sign-in-alt:before {
			content: '\\f2f6';
		}
		.fa-ring:before {
			content: '\\f70b';
		}
		.fa-road:before {
			content: '\\f018';
		}
		.fa-road-barrier:before {
			content: '\\e562';
		}
		.fa-road-bridge:before {
			content: '\\e563';
		}
		.fa-road-circle-check:before {
			content: '\\e564';
		}
		.fa-road-circle-exclamation:before {
			content: '\\e565';
		}
		.fa-road-circle-xmark:before {
			content: '\\e566';
		}
		.fa-road-lock:before {
			content: '\\e567';
		}
		.fa-road-spikes:before {
			content: '\\e568';
		}
		.fa-robot:before {
			content: '\\f544';
		}
		.fa-rocket:before {
			content: '\\f135';
		}
		.fa-rotate:before,
		.fa-sync-alt:before {
			content: '\\f2f1';
		}
		.fa-rotate-back:before,
		.fa-rotate-backward:before,
		.fa-rotate-left:before,
		.fa-undo-alt:before {
			content: '\\f2ea';
		}
		.fa-redo-alt:before,
		.fa-rotate-forward:before,
		.fa-rotate-right:before {
			content: '\\f2f9';
		}
		.fa-route:before {
			content: '\\f4d7';
		}
		.fa-feed:before,
		.fa-rss:before {
			content: '\\f09e';
		}
		.fa-rouble:before,
		.fa-rub:before,
		.fa-ruble-sign:before,
		.fa-ruble:before {
			content: '\\f158';
		}
		.fa-rug:before {
			content: '\\e569';
		}
		.fa-ruler:before {
			content: '\\f545';
		}
		.fa-ruler-combined:before {
			content: '\\f546';
		}
		.fa-ruler-horizontal:before {
			content: '\\f547';
		}
		.fa-ruler-vertical:before {
			content: '\\f548';
		}
		.fa-rupee-sign:before,
		.fa-rupee:before {
			content: '\\f156';
		}
		.fa-rupiah-sign:before {
			content: '\\e23d';
		}
		.fa-s:before {
			content: '\\53';
		}
		.fa-sack-dollar:before {
			content: '\\f81d';
		}
		.fa-sack-xmark:before {
			content: '\\e56a';
		}
		.fa-sailboat:before {
			content: '\\e445';
		}
		.fa-satellite:before {
			content: '\\f7bf';
		}
		.fa-satellite-dish:before {
			content: '\\f7c0';
		}
		.fa-balance-scale:before,
		.fa-scale-balanced:before {
			content: '\\f24e';
		}
		.fa-balance-scale-left:before,
		.fa-scale-unbalanced:before {
			content: '\\f515';
		}
		.fa-balance-scale-right:before,
		.fa-scale-unbalanced-flip:before {
			content: '\\f516';
		}
		.fa-school:before {
			content: '\\f549';
		}
		.fa-school-circle-check:before {
			content: '\\e56b';
		}
		.fa-school-circle-exclamation:before {
			content: '\\e56c';
		}
		.fa-school-circle-xmark:before {
			content: '\\e56d';
		}
		.fa-school-flag:before {
			content: '\\e56e';
		}
		.fa-school-lock:before {
			content: '\\e56f';
		}
		.fa-cut:before,
		.fa-scissors:before {
			content: '\\f0c4';
		}
		.fa-screwdriver:before {
			content: '\\f54a';
		}
		.fa-screwdriver-wrench:before,
		.fa-tools:before {
			content: '\\f7d9';
		}
		.fa-scroll:before {
			content: '\\f70e';
		}
		.fa-scroll-torah:before,
		.fa-torah:before {
			content: '\\f6a0';
		}
		.fa-sd-card:before {
			content: '\\f7c2';
		}
		.fa-section:before {
			content: '\\e447';
		}
		.fa-seedling:before,
		.fa-sprout:before {
			content: '\\f4d8';
		}
		.fa-server:before {
			content: '\\f233';
		}
		.fa-shapes:before,
		.fa-triangle-circle-square:before {
			content: '\\f61f';
		}
		.fa-arrow-turn-right:before,
		.fa-mail-forward:before,
		.fa-share:before {
			content: '\\f064';
		}
		.fa-share-from-square:before,
		.fa-share-square:before {
			content: '\\f14d';
		}
		.fa-share-alt:before,
		.fa-share-nodes:before {
			content: '\\f1e0';
		}
		.fa-sheet-plastic:before {
			content: '\\e571';
		}
		.fa-ils:before,
		.fa-shekel-sign:before,
		.fa-shekel:before,
		.fa-sheqel-sign:before,
		.fa-sheqel:before {
			content: '\\f20b';
		}
		.fa-shield-blank:before,
		.fa-shield:before {
			content: '\\f132';
		}
		.fa-shield-cat:before {
			content: '\\e572';
		}
		.fa-shield-dog:before {
			content: '\\e573';
		}
		.fa-shield-alt:before,
		.fa-shield-halved:before {
			content: '\\f3ed';
		}
		.fa-shield-heart:before {
			content: '\\e574';
		}
		.fa-shield-virus:before {
			content: '\\e06c';
		}
		.fa-ship:before {
			content: '\\f21a';
		}
		.fa-shirt:before,
		.fa-t-shirt:before,
		.fa-tshirt:before {
			content: '\\f553';
		}
		.fa-shoe-prints:before {
			content: '\\f54b';
		}
		.fa-shop:before,
		.fa-store-alt:before {
			content: '\\f54f';
		}
		.fa-shop-lock:before {
			content: '\\e4a5';
		}
		.fa-shop-slash:before,
		.fa-store-alt-slash:before {
			content: '\\e070';
		}
		.fa-shower:before {
			content: '\\f2cc';
		}
		.fa-shrimp:before {
			content: '\\e448';
		}
		.fa-random:before,
		.fa-shuffle:before {
			content: '\\f074';
		}
		.fa-shuttle-space:before,
		.fa-space-shuttle:before {
			content: '\\f197';
		}
		.fa-sign-hanging:before,
		.fa-sign:before {
			content: '\\f4d9';
		}
		.fa-signal-5:before,
		.fa-signal-perfect:before,
		.fa-signal:before {
			content: '\\f012';
		}
		.fa-signature:before {
			content: '\\f5b7';
		}
		.fa-map-signs:before,
		.fa-signs-post:before {
			content: '\\f277';
		}
		.fa-sim-card:before {
			content: '\\f7c4';
		}
		.fa-sink:before {
			content: '\\e06d';
		}
		.fa-sitemap:before {
			content: '\\f0e8';
		}
		.fa-skull:before {
			content: '\\f54c';
		}
		.fa-skull-crossbones:before {
			content: '\\f714';
		}
		.fa-slash:before {
			content: '\\f715';
		}
		.fa-sleigh:before {
			content: '\\f7cc';
		}
		.fa-sliders-h:before,
		.fa-sliders:before {
			content: '\\f1de';
		}
		.fa-smog:before {
			content: '\\f75f';
		}
		.fa-smoking:before {
			content: '\\f48d';
		}
		.fa-snowflake:before {
			content: '\\f2dc';
		}
		.fa-snowman:before {
			content: '\\f7d0';
		}
		.fa-snowplow:before {
			content: '\\f7d2';
		}
		.fa-soap:before {
			content: '\\e06e';
		}
		.fa-socks:before {
			content: '\\f696';
		}
		.fa-solar-panel:before {
			content: '\\f5ba';
		}
		.fa-sort:before,
		.fa-unsorted:before {
			content: '\\f0dc';
		}
		.fa-sort-desc:before,
		.fa-sort-down:before {
			content: '\\f0dd';
		}
		.fa-sort-asc:before,
		.fa-sort-up:before {
			content: '\\f0de';
		}
		.fa-spa:before {
			content: '\\f5bb';
		}
		.fa-pastafarianism:before,
		.fa-spaghetti-monster-flying:before {
			content: '\\f67b';
		}
		.fa-spell-check:before {
			content: '\\f891';
		}
		.fa-spider:before {
			content: '\\f717';
		}
		.fa-spinner:before {
			content: '\\f110';
		}
		.fa-splotch:before {
			content: '\\f5bc';
		}
		.fa-spoon:before,
		.fa-utensil-spoon:before {
			content: '\\f2e5';
		}
		.fa-spray-can:before {
			content: '\\f5bd';
		}
		.fa-air-freshener:before,
		.fa-spray-can-sparkles:before {
			content: '\\f5d0';
		}
		.fa-square:before {
			content: '\\f0c8';
		}
		.fa-external-link-square:before,
		.fa-square-arrow-up-right:before {
			content: '\\f14c';
		}
		.fa-caret-square-down:before,
		.fa-square-caret-down:before {
			content: '\\f150';
		}
		.fa-caret-square-left:before,
		.fa-square-caret-left:before {
			content: '\\f191';
		}
		.fa-caret-square-right:before,
		.fa-square-caret-right:before {
			content: '\\f152';
		}
		.fa-caret-square-up:before,
		.fa-square-caret-up:before {
			content: '\\f151';
		}
		.fa-check-square:before,
		.fa-square-check:before {
			content: '\\f14a';
		}
		.fa-envelope-square:before,
		.fa-square-envelope:before {
			content: '\\f199';
		}
		.fa-square-full:before {
			content: '\\f45c';
		}
		.fa-h-square:before,
		.fa-square-h:before {
			content: '\\f0fd';
		}
		.fa-minus-square:before,
		.fa-square-minus:before {
			content: '\\f146';
		}
		.fa-square-nfi:before {
			content: '\\e576';
		}
		.fa-parking:before,
		.fa-square-parking:before {
			content: '\\f540';
		}
		.fa-pen-square:before,
		.fa-pencil-square:before,
		.fa-square-pen:before {
			content: '\\f14b';
		}
		.fa-square-person-confined:before {
			content: '\\e577';
		}
		.fa-phone-square:before,
		.fa-square-phone:before {
			content: '\\f098';
		}
		.fa-phone-square-alt:before,
		.fa-square-phone-flip:before {
			content: '\\f87b';
		}
		.fa-plus-square:before,
		.fa-square-plus:before {
			content: '\\f0fe';
		}
		.fa-poll-h:before,
		.fa-square-poll-horizontal:before {
			content: '\\f682';
		}
		.fa-poll:before,
		.fa-square-poll-vertical:before {
			content: '\\f681';
		}
		.fa-square-root-alt:before,
		.fa-square-root-variable:before {
			content: '\\f698';
		}
		.fa-rss-square:before,
		.fa-square-rss:before {
			content: '\\f143';
		}
		.fa-share-alt-square:before,
		.fa-square-share-nodes:before {
			content: '\\f1e1';
		}
		.fa-external-link-square-alt:before,
		.fa-square-up-right:before {
			content: '\\f360';
		}
		.fa-square-virus:before {
			content: '\\e578';
		}
		.fa-square-xmark:before,
		.fa-times-square:before,
		.fa-xmark-square:before {
			content: '\\f2d3';
		}
		.fa-rod-asclepius:before,
		.fa-rod-snake:before,
		.fa-staff-aesculapius:before,
		.fa-staff-snake:before {
			content: '\\e579';
		}
		.fa-stairs:before {
			content: '\\e289';
		}
		.fa-stamp:before {
			content: '\\f5bf';
		}
		.fa-star:before {
			content: '\\f005';
		}
		.fa-star-and-crescent:before {
			content: '\\f699';
		}
		.fa-star-half:before {
			content: '\\f089';
		}
		.fa-star-half-alt:before,
		.fa-star-half-stroke:before {
			content: '\\f5c0';
		}
		.fa-star-of-david:before {
			content: '\\f69a';
		}
		.fa-star-of-life:before {
			content: '\\f621';
		}
		.fa-gbp:before,
		.fa-pound-sign:before,
		.fa-sterling-sign:before {
			content: '\\f154';
		}
		.fa-stethoscope:before {
			content: '\\f0f1';
		}
		.fa-stop:before {
			content: '\\f04d';
		}
		.fa-stopwatch:before {
			content: '\\f2f2';
		}
		.fa-stopwatch-20:before {
			content: '\\e06f';
		}
		.fa-store:before {
			content: '\\f54e';
		}
		.fa-store-slash:before {
			content: '\\e071';
		}
		.fa-street-view:before {
			content: '\\f21d';
		}
		.fa-strikethrough:before {
			content: '\\f0cc';
		}
		.fa-stroopwafel:before {
			content: '\\f551';
		}
		.fa-subscript:before {
			content: '\\f12c';
		}
		.fa-suitcase:before {
			content: '\\f0f2';
		}
		.fa-medkit:before,
		.fa-suitcase-medical:before {
			content: '\\f0fa';
		}
		.fa-suitcase-rolling:before {
			content: '\\f5c1';
		}
		.fa-sun:before {
			content: '\\f185';
		}
		.fa-sun-plant-wilt:before {
			content: '\\e57a';
		}
		.fa-superscript:before {
			content: '\\f12b';
		}
		.fa-swatchbook:before {
			content: '\\f5c3';
		}
		.fa-synagogue:before {
			content: '\\f69b';
		}
		.fa-syringe:before {
			content: '\\f48e';
		}
		.fa-t:before {
			content: '\\54';
		}
		.fa-table:before {
			content: '\\f0ce';
		}
		.fa-table-cells:before,
		.fa-th:before {
			content: '\\f00a';
		}
		.fa-table-cells-large:before,
		.fa-th-large:before {
			content: '\\f009';
		}
		.fa-columns:before,
		.fa-table-columns:before {
			content: '\\f0db';
		}
		.fa-table-list:before,
		.fa-th-list:before {
			content: '\\f00b';
		}
		.fa-ping-pong-paddle-ball:before,
		.fa-table-tennis-paddle-ball:before,
		.fa-table-tennis:before {
			content: '\\f45d';
		}
		.fa-tablet-android:before,
		.fa-tablet:before {
			content: '\\f3fb';
		}
		.fa-tablet-button:before {
			content: '\\f10a';
		}
		.fa-tablet-alt:before,
		.fa-tablet-screen-button:before {
			content: '\\f3fa';
		}
		.fa-tablets:before {
			content: '\\f490';
		}
		.fa-digital-tachograph:before,
		.fa-tachograph-digital:before {
			content: '\\f566';
		}
		.fa-tag:before {
			content: '\\f02b';
		}
		.fa-tags:before {
			content: '\\f02c';
		}
		.fa-tape:before {
			content: '\\f4db';
		}
		.fa-tarp:before {
			content: '\\e57b';
		}
		.fa-tarp-droplet:before {
			content: '\\e57c';
		}
		.fa-cab:before,
		.fa-taxi:before {
			content: '\\f1ba';
		}
		.fa-teeth:before {
			content: '\\f62e';
		}
		.fa-teeth-open:before {
			content: '\\f62f';
		}
		.fa-temperature-arrow-down:before,
		.fa-temperature-down:before {
			content: '\\e03f';
		}
		.fa-temperature-arrow-up:before,
		.fa-temperature-up:before {
			content: '\\e040';
		}
		.fa-temperature-0:before,
		.fa-temperature-empty:before,
		.fa-thermometer-0:before,
		.fa-thermometer-empty:before {
			content: '\\f2cb';
		}
		.fa-temperature-4:before,
		.fa-temperature-full:before,
		.fa-thermometer-4:before,
		.fa-thermometer-full:before {
			content: '\\f2c7';
		}
		.fa-temperature-2:before,
		.fa-temperature-half:before,
		.fa-thermometer-2:before,
		.fa-thermometer-half:before {
			content: '\\f2c9';
		}
		.fa-temperature-high:before {
			content: '\\f769';
		}
		.fa-temperature-low:before {
			content: '\\f76b';
		}
		.fa-temperature-1:before,
		.fa-temperature-quarter:before,
		.fa-thermometer-1:before,
		.fa-thermometer-quarter:before {
			content: '\\f2ca';
		}
		.fa-temperature-3:before,
		.fa-temperature-three-quarters:before,
		.fa-thermometer-3:before,
		.fa-thermometer-three-quarters:before {
			content: '\\f2c8';
		}
		.fa-tenge-sign:before,
		.fa-tenge:before {
			content: '\\f7d7';
		}
		.fa-tent:before {
			content: '\\e57d';
		}
		.fa-tent-arrow-down-to-line:before {
			content: '\\e57e';
		}
		.fa-tent-arrow-left-right:before {
			content: '\\e57f';
		}
		.fa-tent-arrow-turn-left:before {
			content: '\\e580';
		}
		.fa-tent-arrows-down:before {
			content: '\\e581';
		}
		.fa-tents:before {
			content: '\\e582';
		}
		.fa-terminal:before {
			content: '\\f120';
		}
		.fa-text-height:before {
			content: '\\f034';
		}
		.fa-remove-format:before,
		.fa-text-slash:before {
			content: '\\f87d';
		}
		.fa-text-width:before {
			content: '\\f035';
		}
		.fa-thermometer:before {
			content: '\\f491';
		}
		.fa-thumbs-down:before {
			content: '\\f165';
		}
		.fa-thumbs-up:before {
			content: '\\f164';
		}
		.fa-thumb-tack:before,
		.fa-thumbtack:before {
			content: '\\f08d';
		}
		.fa-ticket:before {
			content: '\\f145';
		}
		.fa-ticket-alt:before,
		.fa-ticket-simple:before {
			content: '\\f3ff';
		}
		.fa-timeline:before {
			content: '\\e29c';
		}
		.fa-toggle-off:before {
			content: '\\f204';
		}
		.fa-toggle-on:before {
			content: '\\f205';
		}
		.fa-toilet:before {
			content: '\\f7d8';
		}
		.fa-toilet-paper:before {
			content: '\\f71e';
		}
		.fa-toilet-paper-slash:before {
			content: '\\e072';
		}
		.fa-toilet-portable:before {
			content: '\\e583';
		}
		.fa-toilets-portable:before {
			content: '\\e584';
		}
		.fa-toolbox:before {
			content: '\\f552';
		}
		.fa-tooth:before {
			content: '\\f5c9';
		}
		.fa-torii-gate:before {
			content: '\\f6a1';
		}
		.fa-tornado:before {
			content: '\\f76f';
		}
		.fa-broadcast-tower:before,
		.fa-tower-broadcast:before {
			content: '\\f519';
		}
		.fa-tower-cell:before {
			content: '\\e585';
		}
		.fa-tower-observation:before {
			content: '\\e586';
		}
		.fa-tractor:before {
			content: '\\f722';
		}
		.fa-trademark:before {
			content: '\\f25c';
		}
		.fa-traffic-light:before {
			content: '\\f637';
		}
		.fa-trailer:before {
			content: '\\e041';
		}
		.fa-train:before {
			content: '\\f238';
		}
		.fa-subway:before,
		.fa-train-subway:before {
			content: '\\f239';
		}
		.fa-train-tram:before,
		.fa-tram:before {
			content: '\\f7da';
		}
		.fa-transgender-alt:before,
		.fa-transgender:before {
			content: '\\f225';
		}
		.fa-trash:before {
			content: '\\f1f8';
		}
		.fa-trash-arrow-up:before,
		.fa-trash-restore:before {
			content: '\\f829';
		}
		.fa-trash-alt:before,
		.fa-trash-can:before {
			content: '\\f2ed';
		}
		.fa-trash-can-arrow-up:before,
		.fa-trash-restore-alt:before {
			content: '\\f82a';
		}
		.fa-tree:before {
			content: '\\f1bb';
		}
		.fa-tree-city:before {
			content: '\\e587';
		}
		.fa-exclamation-triangle:before,
		.fa-triangle-exclamation:before,
		.fa-warning:before {
			content: '\\f071';
		}
		.fa-trophy:before {
			content: '\\f091';
		}
		.fa-trowel:before {
			content: '\\e589';
		}
		.fa-trowel-bricks:before {
			content: '\\e58a';
		}
		.fa-truck:before {
			content: '\\f0d1';
		}
		.fa-truck-arrow-right:before {
			content: '\\e58b';
		}
		.fa-truck-droplet:before {
			content: '\\e58c';
		}
		.fa-shipping-fast:before,
		.fa-truck-fast:before {
			content: '\\f48b';
		}
		.fa-truck-field:before {
			content: '\\e58d';
		}
		.fa-truck-field-un:before {
			content: '\\e58e';
		}
		.fa-truck-front:before {
			content: '\\e2b7';
		}
		.fa-ambulance:before,
		.fa-truck-medical:before {
			content: '\\f0f9';
		}
		.fa-truck-monster:before {
			content: '\\f63b';
		}
		.fa-truck-moving:before {
			content: '\\f4df';
		}
		.fa-truck-pickup:before {
			content: '\\f63c';
		}
		.fa-truck-plane:before {
			content: '\\e58f';
		}
		.fa-truck-loading:before,
		.fa-truck-ramp-box:before {
			content: '\\f4de';
		}
		.fa-teletype:before,
		.fa-tty:before {
			content: '\\f1e4';
		}
		.fa-try:before,
		.fa-turkish-lira-sign:before,
		.fa-turkish-lira:before {
			content: '\\e2bb';
		}
		.fa-level-down-alt:before,
		.fa-turn-down:before {
			content: '\\f3be';
		}
		.fa-level-up-alt:before,
		.fa-turn-up:before {
			content: '\\f3bf';
		}
		.fa-television:before,
		.fa-tv-alt:before,
		.fa-tv:before {
			content: '\\f26c';
		}
		.fa-u:before {
			content: '\\55';
		}
		.fa-umbrella:before {
			content: '\\f0e9';
		}
		.fa-umbrella-beach:before {
			content: '\\f5ca';
		}
		.fa-underline:before {
			content: '\\f0cd';
		}
		.fa-universal-access:before {
			content: '\\f29a';
		}
		.fa-unlock:before {
			content: '\\f09c';
		}
		.fa-unlock-alt:before,
		.fa-unlock-keyhole:before {
			content: '\\f13e';
		}
		.fa-arrows-alt-v:before,
		.fa-up-down:before {
			content: '\\f338';
		}
		.fa-arrows-alt:before,
		.fa-up-down-left-right:before {
			content: '\\f0b2';
		}
		.fa-long-arrow-alt-up:before,
		.fa-up-long:before {
			content: '\\f30c';
		}
		.fa-expand-alt:before,
		.fa-up-right-and-down-left-from-center:before {
			content: '\\f424';
		}
		.fa-external-link-alt:before,
		.fa-up-right-from-square:before {
			content: '\\f35d';
		}
		.fa-upload:before {
			content: '\\f093';
		}
		.fa-user:before {
			content: '\\f007';
		}
		.fa-user-astronaut:before {
			content: '\\f4fb';
		}
		.fa-user-check:before {
			content: '\\f4fc';
		}
		.fa-user-clock:before {
			content: '\\f4fd';
		}
		.fa-user-doctor:before,
		.fa-user-md:before {
			content: '\\f0f0';
		}
		.fa-user-cog:before,
		.fa-user-gear:before {
			content: '\\f4fe';
		}
		.fa-user-graduate:before {
			content: '\\f501';
		}
		.fa-user-friends:before,
		.fa-user-group:before {
			content: '\\f500';
		}
		.fa-user-injured:before {
			content: '\\f728';
		}
		.fa-user-alt:before,
		.fa-user-large:before {
			content: '\\f406';
		}
		.fa-user-alt-slash:before,
		.fa-user-large-slash:before {
			content: '\\f4fa';
		}
		.fa-user-lock:before {
			content: '\\f502';
		}
		.fa-user-minus:before {
			content: '\\f503';
		}
		.fa-user-ninja:before {
			content: '\\f504';
		}
		.fa-user-nurse:before {
			content: '\\f82f';
		}
		.fa-user-edit:before,
		.fa-user-pen:before {
			content: '\\f4ff';
		}
		.fa-user-plus:before {
			content: '\\f234';
		}
		.fa-user-secret:before {
			content: '\\f21b';
		}
		.fa-user-shield:before {
			content: '\\f505';
		}
		.fa-user-slash:before {
			content: '\\f506';
		}
		.fa-user-tag:before {
			content: '\\f507';
		}
		.fa-user-tie:before {
			content: '\\f508';
		}
		.fa-user-times:before,
		.fa-user-xmark:before {
			content: '\\f235';
		}
		.fa-users:before {
			content: '\\f0c0';
		}
		.fa-users-between-lines:before {
			content: '\\e591';
		}
		.fa-users-cog:before,
		.fa-users-gear:before {
			content: '\\f509';
		}
		.fa-users-line:before {
			content: '\\e592';
		}
		.fa-users-rays:before {
			content: '\\e593';
		}
		.fa-users-rectangle:before {
			content: '\\e594';
		}
		.fa-users-slash:before {
			content: '\\e073';
		}
		.fa-users-viewfinder:before {
			content: '\\e595';
		}
		.fa-cutlery:before,
		.fa-utensils:before {
			content: '\\f2e7';
		}
		.fa-v:before {
			content: '\\56';
		}
		.fa-shuttle-van:before,
		.fa-van-shuttle:before {
			content: '\\f5b6';
		}
		.fa-vault:before {
			content: '\\e2c5';
		}
		.fa-vector-square:before {
			content: '\\f5cb';
		}
		.fa-venus:before {
			content: '\\f221';
		}
		.fa-venus-double:before {
			content: '\\f226';
		}
		.fa-venus-mars:before {
			content: '\\f228';
		}
		.fa-vest:before {
			content: '\\e085';
		}
		.fa-vest-patches:before {
			content: '\\e086';
		}
		.fa-vial:before {
			content: '\\f492';
		}
		.fa-vial-circle-check:before {
			content: '\\e596';
		}
		.fa-vial-virus:before {
			content: '\\e597';
		}
		.fa-vials:before {
			content: '\\f493';
		}
		.fa-video-camera:before,
		.fa-video:before {
			content: '\\f03d';
		}
		.fa-video-slash:before {
			content: '\\f4e2';
		}
		.fa-vihara:before {
			content: '\\f6a7';
		}
		.fa-virus:before {
			content: '\\e074';
		}
		.fa-virus-covid:before {
			content: '\\e4a8';
		}
		.fa-virus-covid-slash:before {
			content: '\\e4a9';
		}
		.fa-virus-slash:before {
			content: '\\e075';
		}
		.fa-viruses:before {
			content: '\\e076';
		}
		.fa-voicemail:before {
			content: '\\f897';
		}
		.fa-volcano:before {
			content: '\\f770';
		}
		.fa-volleyball-ball:before,
		.fa-volleyball:before {
			content: '\\f45f';
		}
		.fa-volume-high:before,
		.fa-volume-up:before {
			content: '\\f028';
		}
		.fa-volume-down:before,
		.fa-volume-low:before {
			content: '\\f027';
		}
		.fa-volume-off:before {
			content: '\\f026';
		}
		.fa-volume-mute:before,
		.fa-volume-times:before,
		.fa-volume-xmark:before {
			content: '\\f6a9';
		}
		.fa-vr-cardboard:before {
			content: '\\f729';
		}
		.fa-w:before {
			content: '\\57';
		}
		.fa-walkie-talkie:before {
			content: '\\f8ef';
		}
		.fa-wallet:before {
			content: '\\f555';
		}
		.fa-magic:before,
		.fa-wand-magic:before {
			content: '\\f0d0';
		}
		.fa-magic-wand-sparkles:before,
		.fa-wand-magic-sparkles:before {
			content: '\\e2ca';
		}
		.fa-wand-sparkles:before {
			content: '\\f72b';
		}
		.fa-warehouse:before {
			content: '\\f494';
		}
		.fa-water:before {
			content: '\\f773';
		}
		.fa-ladder-water:before,
		.fa-swimming-pool:before,
		.fa-water-ladder:before {
			content: '\\f5c5';
		}
		.fa-wave-square:before {
			content: '\\f83e';
		}
		.fa-weight-hanging:before {
			content: '\\f5cd';
		}
		.fa-weight-scale:before,
		.fa-weight:before {
			content: '\\f496';
		}
		.fa-wheat-alt:before,
		.fa-wheat-awn:before {
			content: '\\e2cd';
		}
		.fa-wheat-awn-circle-exclamation:before {
			content: '\\e598';
		}
		.fa-wheelchair:before {
			content: '\\f193';
		}
		.fa-wheelchair-alt:before,
		.fa-wheelchair-move:before {
			content: '\\e2ce';
		}
		.fa-glass-whiskey:before,
		.fa-whiskey-glass:before {
			content: '\\f7a0';
		}
		.fa-wifi-3:before,
		.fa-wifi-strong:before,
		.fa-wifi:before {
			content: '\\f1eb';
		}
		.fa-wind:before {
			content: '\\f72e';
		}
		.fa-window-maximize:before {
			content: '\\f2d0';
		}
		.fa-window-minimize:before {
			content: '\\f2d1';
		}
		.fa-window-restore:before {
			content: '\\f2d2';
		}
		.fa-wine-bottle:before {
			content: '\\f72f';
		}
		.fa-wine-glass:before {
			content: '\\f4e3';
		}
		.fa-wine-glass-alt:before,
		.fa-wine-glass-empty:before {
			content: '\\f5ce';
		}
		.fa-krw:before,
		.fa-won-sign:before,
		.fa-won:before {
			content: '\\f159';
		}
		.fa-worm:before {
			content: '\\e599';
		}
		.fa-wrench:before {
			content: '\\f0ad';
		}
		.fa-x:before {
			content: '\\58';
		}
		.fa-x-ray:before {
			content: '\\f497';
		}
		.fa-close:before,
		.fa-multiply:before,
		.fa-remove:before,
		.fa-times:before,
		.fa-xmark:before {
			content: '\\f00d';
		}
		.fa-xmarks-lines:before {
			content: '\\e59a';
		}
		.fa-y:before {
			content: '\\59';
		}
		.fa-cny:before,
		.fa-jpy:before,
		.fa-rmb:before,
		.fa-yen-sign:before,
		.fa-yen:before {
			content: '\\f157';
		}
		.fa-yin-yang:before {
			content: '\\f6ad';
		}
		.fa-z:before {
			content: '\\5a';
		}
		.fa-sr-only,
		.fa-sr-only-focusable:not(:focus),
		.sr-only,
		.sr-only-focusable:not(:focus) {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
		:host,
		:root {
			--fa-font-brands: normal 400 1em/1 'Font Awesome 6 Brands';
		}
		@font-face {
			font-family: 'Font Awesome 6 Brands';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		.fa-brands,
		.fab {
			font-family: 'Font Awesome 6 Brands';
			font-weight: 400;
		}
		.fa-42-group:before,
		.fa-innosoft:before {
			content: '\\e080';
		}
		.fa-500px:before {
			content: '\\f26e';
		}
		.fa-accessible-icon:before {
			content: '\\f368';
		}
		.fa-accusoft:before {
			content: '\\f369';
		}
		.fa-adn:before {
			content: '\\f170';
		}
		.fa-adversal:before {
			content: '\\f36a';
		}
		.fa-affiliatetheme:before {
			content: '\\f36b';
		}
		.fa-airbnb:before {
			content: '\\f834';
		}
		.fa-algolia:before {
			content: '\\f36c';
		}
		.fa-alipay:before {
			content: '\\f642';
		}
		.fa-amazon:before {
			content: '\\f270';
		}
		.fa-amazon-pay:before {
			content: '\\f42c';
		}
		.fa-amilia:before {
			content: '\\f36d';
		}
		.fa-android:before {
			content: '\\f17b';
		}
		.fa-angellist:before {
			content: '\\f209';
		}
		.fa-angrycreative:before {
			content: '\\f36e';
		}
		.fa-angular:before {
			content: '\\f420';
		}
		.fa-app-store:before {
			content: '\\f36f';
		}
		.fa-app-store-ios:before {
			content: '\\f370';
		}
		.fa-apper:before {
			content: '\\f371';
		}
		.fa-apple:before {
			content: '\\f179';
		}
		.fa-apple-pay:before {
			content: '\\f415';
		}
		.fa-artstation:before {
			content: '\\f77a';
		}
		.fa-asymmetrik:before {
			content: '\\f372';
		}
		.fa-atlassian:before {
			content: '\\f77b';
		}
		.fa-audible:before {
			content: '\\f373';
		}
		.fa-autoprefixer:before {
			content: '\\f41c';
		}
		.fa-avianex:before {
			content: '\\f374';
		}
		.fa-aviato:before {
			content: '\\f421';
		}
		.fa-aws:before {
			content: '\\f375';
		}
		.fa-bandcamp:before {
			content: '\\f2d5';
		}
		.fa-battle-net:before {
			content: '\\f835';
		}
		.fa-behance:before {
			content: '\\f1b4';
		}
		.fa-behance-square:before {
			content: '\\f1b5';
		}
		.fa-bilibili:before {
			content: '\\e3d9';
		}
		.fa-bimobject:before {
			content: '\\f378';
		}
		.fa-bitbucket:before {
			content: '\\f171';
		}
		.fa-bitcoin:before {
			content: '\\f379';
		}
		.fa-bity:before {
			content: '\\f37a';
		}
		.fa-black-tie:before {
			content: '\\f27e';
		}
		.fa-blackberry:before {
			content: '\\f37b';
		}
		.fa-blogger:before {
			content: '\\f37c';
		}
		.fa-blogger-b:before {
			content: '\\f37d';
		}
		.fa-bluetooth:before {
			content: '\\f293';
		}
		.fa-bluetooth-b:before {
			content: '\\f294';
		}
		.fa-bootstrap:before {
			content: '\\f836';
		}
		.fa-bots:before {
			content: '\\e340';
		}
		.fa-btc:before {
			content: '\\f15a';
		}
		.fa-buffer:before {
			content: '\\f837';
		}
		.fa-buromobelexperte:before {
			content: '\\f37f';
		}
		.fa-buy-n-large:before {
			content: '\\f8a6';
		}
		.fa-buysellads:before {
			content: '\\f20d';
		}
		.fa-canadian-maple-leaf:before {
			content: '\\f785';
		}
		.fa-cc-amazon-pay:before {
			content: '\\f42d';
		}
		.fa-cc-amex:before {
			content: '\\f1f3';
		}
		.fa-cc-apple-pay:before {
			content: '\\f416';
		}
		.fa-cc-diners-club:before {
			content: '\\f24c';
		}
		.fa-cc-discover:before {
			content: '\\f1f2';
		}
		.fa-cc-jcb:before {
			content: '\\f24b';
		}
		.fa-cc-mastercard:before {
			content: '\\f1f1';
		}
		.fa-cc-paypal:before {
			content: '\\f1f4';
		}
		.fa-cc-stripe:before {
			content: '\\f1f5';
		}
		.fa-cc-visa:before {
			content: '\\f1f0';
		}
		.fa-centercode:before {
			content: '\\f380';
		}
		.fa-centos:before {
			content: '\\f789';
		}
		.fa-chrome:before {
			content: '\\f268';
		}
		.fa-chromecast:before {
			content: '\\f838';
		}
		.fa-cloudflare:before {
			content: '\\e07d';
		}
		.fa-cloudscale:before {
			content: '\\f383';
		}
		.fa-cloudsmith:before {
			content: '\\f384';
		}
		.fa-cloudversify:before {
			content: '\\f385';
		}
		.fa-cmplid:before {
			content: '\\e360';
		}
		.fa-codepen:before {
			content: '\\f1cb';
		}
		.fa-codiepie:before {
			content: '\\f284';
		}
		.fa-confluence:before {
			content: '\\f78d';
		}
		.fa-connectdevelop:before {
			content: '\\f20e';
		}
		.fa-contao:before {
			content: '\\f26d';
		}
		.fa-cotton-bureau:before {
			content: '\\f89e';
		}
		.fa-cpanel:before {
			content: '\\f388';
		}
		.fa-creative-commons:before {
			content: '\\f25e';
		}
		.fa-creative-commons-by:before {
			content: '\\f4e7';
		}
		.fa-creative-commons-nc:before {
			content: '\\f4e8';
		}
		.fa-creative-commons-nc-eu:before {
			content: '\\f4e9';
		}
		.fa-creative-commons-nc-jp:before {
			content: '\\f4ea';
		}
		.fa-creative-commons-nd:before {
			content: '\\f4eb';
		}
		.fa-creative-commons-pd:before {
			content: '\\f4ec';
		}
		.fa-creative-commons-pd-alt:before {
			content: '\\f4ed';
		}
		.fa-creative-commons-remix:before {
			content: '\\f4ee';
		}
		.fa-creative-commons-sa:before {
			content: '\\f4ef';
		}
		.fa-creative-commons-sampling:before {
			content: '\\f4f0';
		}
		.fa-creative-commons-sampling-plus:before {
			content: '\\f4f1';
		}
		.fa-creative-commons-share:before {
			content: '\\f4f2';
		}
		.fa-creative-commons-zero:before {
			content: '\\f4f3';
		}
		.fa-critical-role:before {
			content: '\\f6c9';
		}
		.fa-css3:before {
			content: '\\f13c';
		}
		.fa-css3-alt:before {
			content: '\\f38b';
		}
		.fa-cuttlefish:before {
			content: '\\f38c';
		}
		.fa-d-and-d:before {
			content: '\\f38d';
		}
		.fa-d-and-d-beyond:before {
			content: '\\f6ca';
		}
		.fa-dailymotion:before {
			content: '\\e052';
		}
		.fa-dashcube:before {
			content: '\\f210';
		}
		.fa-deezer:before {
			content: '\\e077';
		}
		.fa-delicious:before {
			content: '\\f1a5';
		}
		.fa-deploydog:before {
			content: '\\f38e';
		}
		.fa-deskpro:before {
			content: '\\f38f';
		}
		.fa-dev:before {
			content: '\\f6cc';
		}
		.fa-deviantart:before {
			content: '\\f1bd';
		}
		.fa-dhl:before {
			content: '\\f790';
		}
		.fa-diaspora:before {
			content: '\\f791';
		}
		.fa-digg:before {
			content: '\\f1a6';
		}
		.fa-digital-ocean:before {
			content: '\\f391';
		}
		.fa-discord:before {
			content: '\\f392';
		}
		.fa-discourse:before {
			content: '\\f393';
		}
		.fa-dochub:before {
			content: '\\f394';
		}
		.fa-docker:before {
			content: '\\f395';
		}
		.fa-draft2digital:before {
			content: '\\f396';
		}
		.fa-dribbble:before {
			content: '\\f17d';
		}
		.fa-dribbble-square:before {
			content: '\\f397';
		}
		.fa-dropbox:before {
			content: '\\f16b';
		}
		.fa-drupal:before {
			content: '\\f1a9';
		}
		.fa-dyalog:before {
			content: '\\f399';
		}
		.fa-earlybirds:before {
			content: '\\f39a';
		}
		.fa-ebay:before {
			content: '\\f4f4';
		}
		.fa-edge:before {
			content: '\\f282';
		}
		.fa-edge-legacy:before {
			content: '\\e078';
		}
		.fa-elementor:before {
			content: '\\f430';
		}
		.fa-ello:before {
			content: '\\f5f1';
		}
		.fa-ember:before {
			content: '\\f423';
		}
		.fa-empire:before {
			content: '\\f1d1';
		}
		.fa-envira:before {
			content: '\\f299';
		}
		.fa-erlang:before {
			content: '\\f39d';
		}
		.fa-ethereum:before {
			content: '\\f42e';
		}
		.fa-etsy:before {
			content: '\\f2d7';
		}
		.fa-evernote:before {
			content: '\\f839';
		}
		.fa-expeditedssl:before {
			content: '\\f23e';
		}
		.fa-facebook:before {
			content: '\\f09a';
		}
		.fa-facebook-f:before {
			content: '\\f39e';
		}
		.fa-facebook-messenger:before {
			content: '\\f39f';
		}
		.fa-facebook-square:before {
			content: '\\f082';
		}
		.fa-fantasy-flight-games:before {
			content: '\\f6dc';
		}
		.fa-fedex:before {
			content: '\\f797';
		}
		.fa-fedora:before {
			content: '\\f798';
		}
		.fa-figma:before {
			content: '\\f799';
		}
		.fa-firefox:before {
			content: '\\f269';
		}
		.fa-firefox-browser:before {
			content: '\\e007';
		}
		.fa-first-order:before {
			content: '\\f2b0';
		}
		.fa-first-order-alt:before {
			content: '\\f50a';
		}
		.fa-firstdraft:before {
			content: '\\f3a1';
		}
		.fa-flickr:before {
			content: '\\f16e';
		}
		.fa-flipboard:before {
			content: '\\f44d';
		}
		.fa-fly:before {
			content: '\\f417';
		}
		.fa-font-awesome-flag:before,
		.fa-font-awesome-logo-full:before,
		.fa-font-awesome:before {
			content: '\\f2b4';
		}
		.fa-fonticons:before {
			content: '\\f280';
		}
		.fa-fonticons-fi:before {
			content: '\\f3a2';
		}
		.fa-fort-awesome:before {
			content: '\\f286';
		}
		.fa-fort-awesome-alt:before {
			content: '\\f3a3';
		}
		.fa-forumbee:before {
			content: '\\f211';
		}
		.fa-foursquare:before {
			content: '\\f180';
		}
		.fa-free-code-camp:before {
			content: '\\f2c5';
		}
		.fa-freebsd:before {
			content: '\\f3a4';
		}
		.fa-fulcrum:before {
			content: '\\f50b';
		}
		.fa-galactic-republic:before {
			content: '\\f50c';
		}
		.fa-galactic-senate:before {
			content: '\\f50d';
		}
		.fa-get-pocket:before {
			content: '\\f265';
		}
		.fa-gg:before {
			content: '\\f260';
		}
		.fa-gg-circle:before {
			content: '\\f261';
		}
		.fa-git:before {
			content: '\\f1d3';
		}
		.fa-git-alt:before {
			content: '\\f841';
		}
		.fa-git-square:before {
			content: '\\f1d2';
		}
		.fa-github:before {
			content: '\\f09b';
		}
		.fa-github-alt:before {
			content: '\\f113';
		}
		.fa-github-square:before {
			content: '\\f092';
		}
		.fa-gitkraken:before {
			content: '\\f3a6';
		}
		.fa-gitlab:before {
			content: '\\f296';
		}
		.fa-gitter:before {
			content: '\\f426';
		}
		.fa-glide:before {
			content: '\\f2a5';
		}
		.fa-glide-g:before {
			content: '\\f2a6';
		}
		.fa-gofore:before {
			content: '\\f3a7';
		}
		.fa-golang:before {
			content: '\\e40f';
		}
		.fa-goodreads:before {
			content: '\\f3a8';
		}
		.fa-goodreads-g:before {
			content: '\\f3a9';
		}
		.fa-google:before {
			content: '\\f1a0';
		}
		.fa-google-drive:before {
			content: '\\f3aa';
		}
		.fa-google-pay:before {
			content: '\\e079';
		}
		.fa-google-play:before {
			content: '\\f3ab';
		}
		.fa-google-plus:before {
			content: '\\f2b3';
		}
		.fa-google-plus-g:before {
			content: '\\f0d5';
		}
		.fa-google-plus-square:before {
			content: '\\f0d4';
		}
		.fa-google-wallet:before {
			content: '\\f1ee';
		}
		.fa-gratipay:before {
			content: '\\f184';
		}
		.fa-grav:before {
			content: '\\f2d6';
		}
		.fa-gripfire:before {
			content: '\\f3ac';
		}
		.fa-grunt:before {
			content: '\\f3ad';
		}
		.fa-guilded:before {
			content: '\\e07e';
		}
		.fa-gulp:before {
			content: '\\f3ae';
		}
		.fa-hacker-news:before {
			content: '\\f1d4';
		}
		.fa-hacker-news-square:before {
			content: '\\f3af';
		}
		.fa-hackerrank:before {
			content: '\\f5f7';
		}
		.fa-hashnode:before {
			content: '\\e499';
		}
		.fa-hips:before {
			content: '\\f452';
		}
		.fa-hire-a-helper:before {
			content: '\\f3b0';
		}
		.fa-hive:before {
			content: '\\e07f';
		}
		.fa-hooli:before {
			content: '\\f427';
		}
		.fa-hornbill:before {
			content: '\\f592';
		}
		.fa-hotjar:before {
			content: '\\f3b1';
		}
		.fa-houzz:before {
			content: '\\f27c';
		}
		.fa-html5:before {
			content: '\\f13b';
		}
		.fa-hubspot:before {
			content: '\\f3b2';
		}
		.fa-ideal:before {
			content: '\\e013';
		}
		.fa-imdb:before {
			content: '\\f2d8';
		}
		.fa-instagram:before {
			content: '\\f16d';
		}
		.fa-instagram-square:before {
			content: '\\e055';
		}
		.fa-instalod:before {
			content: '\\e081';
		}
		.fa-intercom:before {
			content: '\\f7af';
		}
		.fa-internet-explorer:before {
			content: '\\f26b';
		}
		.fa-invision:before {
			content: '\\f7b0';
		}
		.fa-ioxhost:before {
			content: '\\f208';
		}
		.fa-itch-io:before {
			content: '\\f83a';
		}
		.fa-itunes:before {
			content: '\\f3b4';
		}
		.fa-itunes-note:before {
			content: '\\f3b5';
		}
		.fa-java:before {
			content: '\\f4e4';
		}
		.fa-jedi-order:before {
			content: '\\f50e';
		}
		.fa-jenkins:before {
			content: '\\f3b6';
		}
		.fa-jira:before {
			content: '\\f7b1';
		}
		.fa-joget:before {
			content: '\\f3b7';
		}
		.fa-joomla:before {
			content: '\\f1aa';
		}
		.fa-js:before {
			content: '\\f3b8';
		}
		.fa-js-square:before {
			content: '\\f3b9';
		}
		.fa-jsfiddle:before {
			content: '\\f1cc';
		}
		.fa-kaggle:before {
			content: '\\f5fa';
		}
		.fa-keybase:before {
			content: '\\f4f5';
		}
		.fa-keycdn:before {
			content: '\\f3ba';
		}
		.fa-kickstarter:before {
			content: '\\f3bb';
		}
		.fa-kickstarter-k:before {
			content: '\\f3bc';
		}
		.fa-korvue:before {
			content: '\\f42f';
		}
		.fa-laravel:before {
			content: '\\f3bd';
		}
		.fa-lastfm:before {
			content: '\\f202';
		}
		.fa-lastfm-square:before {
			content: '\\f203';
		}
		.fa-leanpub:before {
			content: '\\f212';
		}
		.fa-less:before {
			content: '\\f41d';
		}
		.fa-line:before {
			content: '\\f3c0';
		}
		.fa-linkedin:before {
			content: '\\f08c';
		}
		.fa-linkedin-in:before {
			content: '\\f0e1';
		}
		.fa-linode:before {
			content: '\\f2b8';
		}
		.fa-linux:before {
			content: '\\f17c';
		}
		.fa-lyft:before {
			content: '\\f3c3';
		}
		.fa-magento:before {
			content: '\\f3c4';
		}
		.fa-mailchimp:before {
			content: '\\f59e';
		}
		.fa-mandalorian:before {
			content: '\\f50f';
		}
		.fa-markdown:before {
			content: '\\f60f';
		}
		.fa-mastodon:before {
			content: '\\f4f6';
		}
		.fa-maxcdn:before {
			content: '\\f136';
		}
		.fa-mdb:before {
			content: '\\f8ca';
		}
		.fa-medapps:before {
			content: '\\f3c6';
		}
		.fa-medium-m:before,
		.fa-medium:before {
			content: '\\f23a';
		}
		.fa-medrt:before {
			content: '\\f3c8';
		}
		.fa-meetup:before {
			content: '\\f2e0';
		}
		.fa-megaport:before {
			content: '\\f5a3';
		}
		.fa-mendeley:before {
			content: '\\f7b3';
		}
		.fa-microblog:before {
			content: '\\e01a';
		}
		.fa-microsoft:before {
			content: '\\f3ca';
		}
		.fa-mix:before {
			content: '\\f3cb';
		}
		.fa-mixcloud:before {
			content: '\\f289';
		}
		.fa-mixer:before {
			content: '\\e056';
		}
		.fa-mizuni:before {
			content: '\\f3cc';
		}
		.fa-modx:before {
			content: '\\f285';
		}
		.fa-monero:before {
			content: '\\f3d0';
		}
		.fa-napster:before {
			content: '\\f3d2';
		}
		.fa-neos:before {
			content: '\\f612';
		}
		.fa-nfc-directional:before {
			content: '\\e530';
		}
		.fa-nfc-symbol:before {
			content: '\\e531';
		}
		.fa-nimblr:before {
			content: '\\f5a8';
		}
		.fa-node:before {
			content: '\\f419';
		}
		.fa-node-js:before {
			content: '\\f3d3';
		}
		.fa-npm:before {
			content: '\\f3d4';
		}
		.fa-ns8:before {
			content: '\\f3d5';
		}
		.fa-nutritionix:before {
			content: '\\f3d6';
		}
		.fa-octopus-deploy:before {
			content: '\\e082';
		}
		.fa-odnoklassniki:before {
			content: '\\f263';
		}
		.fa-odnoklassniki-square:before {
			content: '\\f264';
		}
		.fa-old-republic:before {
			content: '\\f510';
		}
		.fa-opencart:before {
			content: '\\f23d';
		}
		.fa-openid:before {
			content: '\\f19b';
		}
		.fa-opera:before {
			content: '\\f26a';
		}
		.fa-optin-monster:before {
			content: '\\f23c';
		}
		.fa-orcid:before {
			content: '\\f8d2';
		}
		.fa-osi:before {
			content: '\\f41a';
		}
		.fa-padlet:before {
			content: '\\e4a0';
		}
		.fa-page4:before {
			content: '\\f3d7';
		}
		.fa-pagelines:before {
			content: '\\f18c';
		}
		.fa-palfed:before {
			content: '\\f3d8';
		}
		.fa-patreon:before {
			content: '\\f3d9';
		}
		.fa-paypal:before {
			content: '\\f1ed';
		}
		.fa-perbyte:before {
			content: '\\e083';
		}
		.fa-periscope:before {
			content: '\\f3da';
		}
		.fa-phabricator:before {
			content: '\\f3db';
		}
		.fa-phoenix-framework:before {
			content: '\\f3dc';
		}
		.fa-phoenix-squadron:before {
			content: '\\f511';
		}
		.fa-php:before {
			content: '\\f457';
		}
		.fa-pied-piper:before {
			content: '\\f2ae';
		}
		.fa-pied-piper-alt:before {
			content: '\\f1a8';
		}
		.fa-pied-piper-hat:before {
			content: '\\f4e5';
		}
		.fa-pied-piper-pp:before {
			content: '\\f1a7';
		}
		.fa-pied-piper-square:before {
			content: '\\e01e';
		}
		.fa-pinterest:before {
			content: '\\f0d2';
		}
		.fa-pinterest-p:before {
			content: '\\f231';
		}
		.fa-pinterest-square:before {
			content: '\\f0d3';
		}
		.fa-pix:before {
			content: '\\e43a';
		}
		.fa-playstation:before {
			content: '\\f3df';
		}
		.fa-product-hunt:before {
			content: '\\f288';
		}
		.fa-pushed:before {
			content: '\\f3e1';
		}
		.fa-python:before {
			content: '\\f3e2';
		}
		.fa-qq:before {
			content: '\\f1d6';
		}
		.fa-quinscape:before {
			content: '\\f459';
		}
		.fa-quora:before {
			content: '\\f2c4';
		}
		.fa-r-project:before {
			content: '\\f4f7';
		}
		.fa-raspberry-pi:before {
			content: '\\f7bb';
		}
		.fa-ravelry:before {
			content: '\\f2d9';
		}
		.fa-react:before {
			content: '\\f41b';
		}
		.fa-reacteurope:before {
			content: '\\f75d';
		}
		.fa-readme:before {
			content: '\\f4d5';
		}
		.fa-rebel:before {
			content: '\\f1d0';
		}
		.fa-red-river:before {
			content: '\\f3e3';
		}
		.fa-reddit:before {
			content: '\\f1a1';
		}
		.fa-reddit-alien:before {
			content: '\\f281';
		}
		.fa-reddit-square:before {
			content: '\\f1a2';
		}
		.fa-redhat:before {
			content: '\\f7bc';
		}
		.fa-renren:before {
			content: '\\f18b';
		}
		.fa-replyd:before {
			content: '\\f3e6';
		}
		.fa-researchgate:before {
			content: '\\f4f8';
		}
		.fa-resolving:before {
			content: '\\f3e7';
		}
		.fa-rev:before {
			content: '\\f5b2';
		}
		.fa-rocketchat:before {
			content: '\\f3e8';
		}
		.fa-rockrms:before {
			content: '\\f3e9';
		}
		.fa-rust:before {
			content: '\\e07a';
		}
		.fa-safari:before {
			content: '\\f267';
		}
		.fa-salesforce:before {
			content: '\\f83b';
		}
		.fa-sass:before {
			content: '\\f41e';
		}
		.fa-schlix:before {
			content: '\\f3ea';
		}
		.fa-screenpal:before {
			content: '\\e570';
		}
		.fa-scribd:before {
			content: '\\f28a';
		}
		.fa-searchengin:before {
			content: '\\f3eb';
		}
		.fa-sellcast:before {
			content: '\\f2da';
		}
		.fa-sellsy:before {
			content: '\\f213';
		}
		.fa-servicestack:before {
			content: '\\f3ec';
		}
		.fa-shirtsinbulk:before {
			content: '\\f214';
		}
		.fa-shopify:before {
			content: '\\e057';
		}
		.fa-shopware:before {
			content: '\\f5b5';
		}
		.fa-simplybuilt:before {
			content: '\\f215';
		}
		.fa-sistrix:before {
			content: '\\f3ee';
		}
		.fa-sith:before {
			content: '\\f512';
		}
		.fa-sitrox:before {
			content: '\\e44a';
		}
		.fa-sketch:before {
			content: '\\f7c6';
		}
		.fa-skyatlas:before {
			content: '\\f216';
		}
		.fa-skype:before {
			content: '\\f17e';
		}
		.fa-slack-hash:before,
		.fa-slack:before {
			content: '\\f198';
		}
		.fa-slideshare:before {
			content: '\\f1e7';
		}
		.fa-snapchat-ghost:before,
		.fa-snapchat:before {
			content: '\\f2ab';
		}
		.fa-snapchat-square:before {
			content: '\\f2ad';
		}
		.fa-soundcloud:before {
			content: '\\f1be';
		}
		.fa-sourcetree:before {
			content: '\\f7d3';
		}
		.fa-speakap:before {
			content: '\\f3f3';
		}
		.fa-speaker-deck:before {
			content: '\\f83c';
		}
		.fa-spotify:before {
			content: '\\f1bc';
		}
		.fa-square-font-awesome:before {
			content: '\\f425';
		}
		.fa-font-awesome-alt:before,
		.fa-square-font-awesome-stroke:before {
			content: '\\f35c';
		}
		.fa-squarespace:before {
			content: '\\f5be';
		}
		.fa-stack-exchange:before {
			content: '\\f18d';
		}
		.fa-stack-overflow:before {
			content: '\\f16c';
		}
		.fa-stackpath:before {
			content: '\\f842';
		}
		.fa-staylinked:before {
			content: '\\f3f5';
		}
		.fa-steam:before {
			content: '\\f1b6';
		}
		.fa-steam-square:before {
			content: '\\f1b7';
		}
		.fa-steam-symbol:before {
			content: '\\f3f6';
		}
		.fa-sticker-mule:before {
			content: '\\f3f7';
		}
		.fa-strava:before {
			content: '\\f428';
		}
		.fa-stripe:before {
			content: '\\f429';
		}
		.fa-stripe-s:before {
			content: '\\f42a';
		}
		.fa-studiovinari:before {
			content: '\\f3f8';
		}
		.fa-stumbleupon:before {
			content: '\\f1a4';
		}
		.fa-stumbleupon-circle:before {
			content: '\\f1a3';
		}
		.fa-superpowers:before {
			content: '\\f2dd';
		}
		.fa-supple:before {
			content: '\\f3f9';
		}
		.fa-suse:before {
			content: '\\f7d6';
		}
		.fa-swift:before {
			content: '\\f8e1';
		}
		.fa-symfony:before {
			content: '\\f83d';
		}
		.fa-teamspeak:before {
			content: '\\f4f9';
		}
		.fa-telegram-plane:before,
		.fa-telegram:before {
			content: '\\f2c6';
		}
		.fa-tencent-weibo:before {
			content: '\\f1d5';
		}
		.fa-the-red-yeti:before {
			content: '\\f69d';
		}
		.fa-themeco:before {
			content: '\\f5c6';
		}
		.fa-themeisle:before {
			content: '\\f2b2';
		}
		.fa-think-peaks:before {
			content: '\\f731';
		}
		.fa-tiktok:before {
			content: '\\e07b';
		}
		.fa-trade-federation:before {
			content: '\\f513';
		}
		.fa-trello:before {
			content: '\\f181';
		}
		.fa-tumblr:before {
			content: '\\f173';
		}
		.fa-tumblr-square:before {
			content: '\\f174';
		}
		.fa-twitch:before {
			content: '\\f1e8';
		}
		.fa-twitter:before {
			content: '\\f099';
		}
		.fa-twitter-square:before {
			content: '\\f081';
		}
		.fa-typo3:before {
			content: '\\f42b';
		}
		.fa-uber:before {
			content: '\\f402';
		}
		.fa-ubuntu:before {
			content: '\\f7df';
		}
		.fa-uikit:before {
			content: '\\f403';
		}
		.fa-umbraco:before {
			content: '\\f8e8';
		}
		.fa-uncharted:before {
			content: '\\e084';
		}
		.fa-uniregistry:before {
			content: '\\f404';
		}
		.fa-unity:before {
			content: '\\e049';
		}
		.fa-unsplash:before {
			content: '\\e07c';
		}
		.fa-untappd:before {
			content: '\\f405';
		}
		.fa-ups:before {
			content: '\\f7e0';
		}
		.fa-usb:before {
			content: '\\f287';
		}
		.fa-usps:before {
			content: '\\f7e1';
		}
		.fa-ussunnah:before {
			content: '\\f407';
		}
		.fa-vaadin:before {
			content: '\\f408';
		}
		.fa-viacoin:before {
			content: '\\f237';
		}
		.fa-viadeo:before {
			content: '\\f2a9';
		}
		.fa-viadeo-square:before {
			content: '\\f2aa';
		}
		.fa-viber:before {
			content: '\\f409';
		}
		.fa-vimeo:before {
			content: '\\f40a';
		}
		.fa-vimeo-square:before {
			content: '\\f194';
		}
		.fa-vimeo-v:before {
			content: '\\f27d';
		}
		.fa-vine:before {
			content: '\\f1ca';
		}
		.fa-vk:before {
			content: '\\f189';
		}
		.fa-vnv:before {
			content: '\\f40b';
		}
		.fa-vuejs:before {
			content: '\\f41f';
		}
		.fa-watchman-monitoring:before {
			content: '\\e087';
		}
		.fa-waze:before {
			content: '\\f83f';
		}
		.fa-weebly:before {
			content: '\\f5cc';
		}
		.fa-weibo:before {
			content: '\\f18a';
		}
		.fa-weixin:before {
			content: '\\f1d7';
		}
		.fa-whatsapp:before {
			content: '\\f232';
		}
		.fa-whatsapp-square:before {
			content: '\\f40c';
		}
		.fa-whmcs:before {
			content: '\\f40d';
		}
		.fa-wikipedia-w:before {
			content: '\\f266';
		}
		.fa-windows:before {
			content: '\\f17a';
		}
		.fa-wirsindhandwerk:before,
		.fa-wsh:before {
			content: '\\e2d0';
		}
		.fa-wix:before {
			content: '\\f5cf';
		}
		.fa-wizards-of-the-coast:before {
			content: '\\f730';
		}
		.fa-wodu:before {
			content: '\\e088';
		}
		.fa-wolf-pack-battalion:before {
			content: '\\f514';
		}
		.fa-wordpress:before {
			content: '\\f19a';
		}
		.fa-wordpress-simple:before {
			content: '\\f411';
		}
		.fa-wpbeginner:before {
			content: '\\f297';
		}
		.fa-wpexplorer:before {
			content: '\\f2de';
		}
		.fa-wpforms:before {
			content: '\\f298';
		}
		.fa-wpressr:before {
			content: '\\f3e4';
		}
		.fa-xbox:before {
			content: '\\f412';
		}
		.fa-xing:before {
			content: '\\f168';
		}
		.fa-xing-square:before {
			content: '\\f169';
		}
		.fa-y-combinator:before {
			content: '\\f23b';
		}
		.fa-yahoo:before {
			content: '\\f19e';
		}
		.fa-yammer:before {
			content: '\\f840';
		}
		.fa-yandex:before {
			content: '\\f413';
		}
		.fa-yandex-international:before {
			content: '\\f414';
		}
		.fa-yarn:before {
			content: '\\f7e3';
		}
		.fa-yelp:before {
			content: '\\f1e9';
		}
		.fa-yoast:before {
			content: '\\f2b1';
		}
		.fa-youtube:before {
			content: '\\f167';
		}
		.fa-youtube-square:before {
			content: '\\f431';
		}
		.fa-zhihu:before {
			content: '\\f63f';
		}
		:host,
		:root {
			--fa-font-regular: normal 400 1em/1 'Font Awesome 6 Free';
		}
		@font-face {
			font-family: 'Font Awesome 6 Free';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
		}
		.fa-regular,
		.far {
			font-family: 'Font Awesome 6 Free';
			font-weight: 400;
		}
		:host,
		:root {
			--fa-font-solid: normal 900 1em/1 'Font Awesome 6 Free';
		}
		@font-face {
			font-family: 'Font Awesome 6 Free';
			font-style: normal;
			font-weight: 900;
			font-display: block;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		.fa-solid,
		.fas {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		@font-face {
			font-family: 'Font Awesome 5 Brands';
			font-display: block;
			font-weight: 400;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'Font Awesome 5 Free';
			font-display: block;
			font-weight: 900;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		@font-face {
			font-family: 'Font Awesome 5 Free';
			font-display: block;
			font-weight: 400;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
			unicode-range: u+f003, u+f006, u+f014, u+f016-f017, u+f01a-f01b, u+f01d, u+f022, u+f03e, u+f044, u+f046, u+f05c-f05d, u+f06e, u+f070, u+f087-f088, u+f08a,
				u+f094, u+f096-f097, u+f09d, u+f0a0, u+f0a2, u+f0a4-f0a7, u+f0c5, u+f0c7, u+f0e5-f0e6, u+f0eb, u+f0f6-f0f8, u+f10c, u+f114-f115, u+f118-f11a,
				u+f11c-f11d, u+f133, u+f147, u+f14e, u+f150-f152, u+f185-f186, u+f18e, u+f190-f192, u+f196, u+f1c1-f1c9, u+f1d9, u+f1db, u+f1e3, u+f1ea, u+f1f7, u+f1f9,
				u+f20a, u+f247-f248, u+f24a, u+f24d, u+f255-f25b, u+f25d, u+f271-f274, u+f278, u+f27b, u+f28c, u+f28e, u+f29c, u+f2b5, u+f2b7, u+f2ba, u+f2bc, u+f2be,
				u+f2c0-f2c1, u+f2c3, u+f2d0, u+f2d2, u+f2d4, u+f2dc;
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-v4compatibility.woff2) format('woff2'),
				url(../webfonts/fa-v4compatibility.ttf) format('truetype');
			unicode-range: u+f041, u+f047, u+f065-f066, u+f07d-f07e, u+f080, u+f08b, u+f08e, u+f090, u+f09a, u+f0ac, u+f0ae, u+f0b2, u+f0d0, u+f0d6, u+f0e4, u+f0ec,
				u+f10a-f10b, u+f123, u+f13e, u+f148-f149, u+f14c, u+f156, u+f15e, u+f160-f161, u+f163, u+f175-f178, u+f195, u+f1f8, u+f219, u+f250, u+f252, u+f27a;
		}
	`,"KOL-SKIP-NAV":Ue`
		kol-link-wc > a > kol-span-wc {
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			gap: 0.5rem;
			line-height: 1rem;
			padding: 8px 14px;
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			color: var(--color-white);
			cursor: pointer;
		}
	`,"KOL-SPLIT-BUTTON":Ue`
		.popover {
			background: #fff;
		}
	`}),He=e=>t=>`@layer ${e} { ${t.join("")} }`,Ve=e=>He("kol-theme-component")(e),qe=Me.createTheme("default",{GLOBAL:He("kol-theme-global")`
		:host {
			--border-radius: var(--kolibri-border-radius, 5px);
			--font-family: var(--kolibri-font-family, BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif);
			--font-size: var(--kolibri-font-size, 16px);
			--spacing: var(--kolibri-spacing, 0.25rem);
			--border-width: var(--kolibri-border-width, 1px);
			--color-primary: var(--kolibri-color-primary, #004b76);
			--color-primary-variant: var(--kolibri-color-primary-variant, #0077b6);
			--color-danger: var(--kolibri-color-danger, #c0003c);
			--color-warning: var(--kolibri-color-warning, #c44931);
			--color-success: var(--kolibri-color-success, #005c45);
			--color-subtle: var(--kolibri-color-subtle, #576164);
			--color-light: var(--kolibri-color-light, #ffffff);
			--color-text: var(--kolibri-color-text, #202020);
			--color-mute: var(--kolibri-color-mute, #f2f3f4);
			--color-mute-variant: var(--kolibri-color-mute-variant, #bec5c9);
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			font-family: var(--font-family);
			font-size: var(--font-size);
		}
		* {
			box-sizing: border-box;
		}
		*:not(i) {
			font-family: var(--font-family);
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
			padding: 0;
		}
		*[tabindex]:focus,
		kol-input:not(.checkbox, .radio) .input:focus-within,
		kol-input:is(.checkbox, .radio) input:focus,
		summary:focus {
			cursor: pointer;
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		kol-heading-wc {
			font-weight: 700;
		}
		kol-tooltip-wc .tooltip-floating {
			border: var(--border-width) solid var(--color-subtle);
			border-radius: var(--border-radius);
		}
		kol-tooltip-wc .tooltip-arrow {
			border: var(--border-width) solid var(--color-subtle);
		}
		kol-tooltip-wc .tooltip-area {
			background-color: var(--color-light);
		}
		kol-tooltip-wc .tooltip-content {
			border-radius: var(--border-radius);
			line-height: 1.5;
			padding: 0.5rem 0.75rem;
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5rem;
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	`,"KOL-BUTTON":Ve`
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: calc(var(--border-width) * 2);
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: var(--border-width);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		:is(a, button):disabled > kol-span-wc {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-primary);
			border-color: var(--color-primary);
			color: var(--color-light);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-light);
			border-color: var(--color-primary);
			color: var(--color-primary);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
			color: var(--color-light);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-light);
			background-color: var(--color-light);
			box-shadow: none;
			color: var(--color-primary);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-light);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 0.8rem;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** small ghost button */
		.ghost :is(a, button).small > kol-span-wc {
			border: none;
			background-color: transparent;
			box-shadow: none;
		}
		.ghost :is(a, button).small > kol-span-wc > span {
			border-radius: 1.5em;
			border-style: solid;
			border-width: var(--border-width);
			border-color: var(--color-light);
			background-color: var(--color-light);
		}
		.ghost :is(a, button).small:active > kol-span-wc > span,
		.ghost :is(a, button).small:hover > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:active > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:hover > kol-span-wc > span {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		} /** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).small.transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
		.access-key-hint {
			background: var(--color-mute-variant);
			border-radius: 3px;
			color: var(--color-text);
			padding: 0 0.3em;
		}
	`,"KOL-INPUT-TEXT":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
		}
	`,"KOL-INPUT-PASSWORD":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(button, input, label, option, select, textarea) {
			opacity: 1;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-INPUT-NUMBER":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-INPUT-DATE":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-INPUT-EMAIL":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-INPUT-FILE":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		input {
			border: none;
		}
		input[type='file'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(button, input, label, option, select, textarea) {
			opacity: 1;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-TEXTAREA":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .counter {
			order: 4;
		}
		kol-input .hint {
			order: 5;
			font-size: 0.9rem;
			font-style: italic;
		}
		textarea {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		textarea:read-only,
		textarea:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		.disabled {
			opacity: 0.33;
		}
		select[multiple],
		textarea {
			overflow: auto;
		}
		textarea {
			display: block;
		}
		.input {
			position: relative;
		}
	`,"KOL-ALERT":Ve`
		.msg {
			border-width: 0;
		}
		kol-alert-wc {
			border-width: var(--border-width);
			border-style: solid;
			border-radius: var(--border-radius);
			display: flex;
			width: 100%;
			overflow: unset;
			border-color: transparent;
			background-color: var(--color-light);
		}
		kol-alert-wc > .heading {
			display: flex;
			gap: 0.5em;
			place-items: center;
		}
		kol-alert-wc > .heading > div {
			display: grid;
			gap: 0.25rem;
		}
		.msg > .heading > kol-icon {
			place-self: baseline;
		}
		kol-alert-wc > .heading > kol-button-wc.close {
			place-self: center;
		}
		.msg {
			align-items: start;
		}
		.default {
			border-color: var(--color-subtle);
		}
		.default.msg .heading-icon {
			color: var(--color-subtle);
		}
		.error {
			border-color: var(--color-danger);
		}
		.error.msg .heading-icon {
			color: var(--color-danger);
		}
		.info {
			border-color: var(--color-primary);
		}
		.info.msg .heading-icon {
			color: var(--color-primary);
		}
		.success {
			border-color: var(--color-success);
		}
		.success.msg .heading-icon {
			color: var(--color-success);
		}
		.warning {
			border-color: var(--color-warning);
		}
		.warning.msg .heading-icon {
			color: var(--color-warning);
		}
		.heading-icon {
			color: var(--color-light);
		}
		kol-alert-wc .heading .heading-icon {
			padding: 0;
		}
		.msg > .heading > .heading-icon {
			padding-top: 0;
			place-items: baseline;
		}
		.msg > .heading > div > kol-heading-wc {
			padding-top: calc(--var-spacing / 2);
		}
		.msg.default .heading > div > kol-heading-wc {
			color: var(--color-subtle);
		}
		.msg.error .heading > div > kol-heading-wc {
			color: var(--color-danger);
		}
		.msg.info .heading > div > kol-heading-wc {
			color: var(--color-primary);
		}
		.msg.success .heading > div > kol-heading-wc {
			color: var(--color-success);
		}
		.msg.warning .heading > div > kol-heading-wc {
			color: var(--color-warning);
		}
		.msg.default .close .icon {
			color: var(--color-subtle);
		}
		.msg.error .close .icon {
			color: var(--color-danger);
		}
		.msg.info .close .icon {
			color: var(--color-primary);
		}
		.msg.success .close .icon {
			color: var(--color-success);
		}
		.msg.warning .close .icon {
			color: var(--color-warning);
		}
		.card {
			border-width: var(--border-width);
			border-style: solid;
			filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));
			flex-direction: column;
		}
		.card > .heading {
			padding: 0.5rem 1rem;
		}
		.card[_has-closer] > .heading {
			padding-top: 0;
			padding-bottom: 0;
			padding-right: 0;
		}
		.card > .heading > div {
			width: 100%;
			min-height: 1.25rem;
		}
		.card > .heading .heading-icon {
			justify-self: right;
			margin-top: -4px;
		}
		.card > .heading kol-heading-wc {
			width: 100%;
			color: var(--color-light);
			display: flex;
			font-size: 1.25rem;
			line-height: 1.25rem;
		}
		.card > .heading kol-heading-wc > * {
			margin: auto 0;
		}
		.card > .content {
			padding: 1rem;
		}
		.card.default > .heading {
			background-color: var(--color-subtle);
		}
		.card.error > .heading {
			background-color: var(--color-danger);
		}
		.card.info > .heading {
			background-color: var(--color-primary);
		}
		.card.success > .heading {
			background-color: var(--color-success);
		}
		.card.warning > .heading {
			background-color: var(--color-warning);
		}
		:is(.error, .info, .success, .warning) .heading-icon {
			font-size: 1.25rem;
		}
		.card > div > .content {
			grid-row: 2;
			grid-column: 1 / span 2;
		}
		.card.default .close {
			background-color: var(--color-subtle);
		}
		.card.error .close {
			background-color: var(--color-danger);
		}
		.card.info .close {
			background-color: var(--color-primary);
		}
		.card.success .close {
			background-color: var(--color-success);
		}
		.card.warning .close {
			background-color: var(--color-warning);
		}
		.close > button {
			border-radius: 50%; /* visible on focus */
			color: var(--color-light);
			cursor: pointer;
			height: var(--a11y-min-size);
			width: var(--a11y-min-size);
		}
		.close > button.hide-label kol-icon {
			display: flex;
			width: 1em;
			height: 1em;
			font-size: 1.2rem;
		}
		.close > button:active {
			box-shadow: none;
			outline: none;
		}
	`,"KOL-HEADING":Ve`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			color: inherit;
			font-style: normal;
		}
		.headline-h1,
		.headline-h2,
		.headline-h3 {
			font-weight: 700;
		}
		.headline-h1 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h2 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		.headline-h3 {
			font-size: 1.125rem;
			line-height: 1.5rem;
		}
	`,"KOL-BADGE":Ve`
		:host {
			display: inline-block;
			font-size: inherit;
		}
		:host > span {
			border-radius: var(--border-radius);
			display: inline-flex;
			font-style: normal;
		}
		:host > span.smart-button {
			align-items: center;
		}
		:host > span kol-button-wc:hover > button {
			background-color: var(--color-primary-variant);
			color: var(--color-light);
		}
		:host > span kol-button-wc > button {
			color: inherit;
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
			padding: 0.2rem;
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.75rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
	`,"KOL-BUTTON-GROUP":Ve`
		:host > kol-button-group-wc {
			display: flex;
			flex-wrap: wrap;
			gap: var(--spacing);
		}
	`,"KOL-INDENTED-TEXT":Ve`
		:host > div {
			background-color: var(--color-light);
			border-left: none;
			box-shadow: -2px 0px 0px var(--color-primary-variant);
			padding: 0 0.5rem;
			width: 100%;
		}
	`,"KOL-LINK":Ve`
		:is(a, button) {
			color: var(--color-primary);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: var(--border-width) solid;
		}
		:is(a, button):hover {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
			line-height: 1em;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-DETAILS":Ve`
		details > summary {
			border-radius: var(--border-radius);
		}
		details kol-indented-text {
			margin: 0.25rem 0 0 0.65rem;
		}
		kol-icon {
			font-size: 1.2rem;
		}
	`,"KOL-PROGRESS":Ve`
		:host progress,
		:host span {
			display: block;
			height: 0px;
			overflow: hidden;
			width: 0px;
		}
		:host svg line:first-child,
		:host svg circle:first-child {
			fill: transparent;
			stroke: var(--color-mute-variant);
		}
		:host svg line:last-child,
		:host svg circle:last-child {
			fill: transparent;
			stroke: var(--color-primary);
		}

		.cycle .progress {
			stroke: var(--color-primary-variant);
		}
	`,"KOL-SELECT":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		select {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 2rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		select:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(select, label, option) {
			opacity: 1;
		}
		kol-input.disabled :is(select, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
		}
		select[multiple] {
			overflow: auto;
		}
		select option {
			margin: 1px 0;
			border-radius: var(--border-radius);
			cursor: pointer;
		}
		select option:disabled {
			cursor: not-allowed;
		}
		select:not([multiple]) option {
			padding: 0.5em;
		}
		option:active:not(:disabled),
		option:checked:not(:disabled),
		option:focus:not(:disabled),
		option:hover:not(:disabled) {
			background: var(--color-primary-variant);
			color: var(--color-light);
		}
	`,"KOL-INPUT-COLOR":Ve`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input[type='color'] {
			border: none;
			min-height: 40px !important;
		}
		input[type='color'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-ACCORDION":Ve`
		kol-span-wc > span {
			display: flex;
			place-items: baseline center;
			text-align: left;
		}
		:host > div > kol-heading-wc button {
			border-radius: var(--border-radius);
			min-height: 2.2rem;
			padding: 12px 8px;
		}
		:host > div > kol-heading-wc button kol-span-wc {
			font-weight: 700;
			font-size: 1.125rem;
			line-height: 20px;
			gap: 0.5rem;
		}
		:host > div > kol-heading-wc button kol-span-wc > span {
			gap: 0.5em;
		}
		:host > div > kol-heading-wc button kol-icon {
			color: var(--color-primary);
		}
		:host > div {
			width: 100%;
			height: 100%;
			display: grid;
		}
		:host > div div[class='header'],
		:host > div[class*='open'] div[class='content'] {
			margin: 0;
		}
		:host > div div[class='content'] {
			padding-left: 2.25em;
			padding-bottom: 12px;
			padding-right: 8px;
		}
		button:focus {
			outline: none;
		}
		:host > .accordion:focus-within {
			border-radius: var(--border-radius);
			cursor: pointer;
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
	`,"KOL-TABLE":Ve`
		:host * {
			hyphens: var(--hyphens);
			font-family: var(--font-family);
			line-height: var(--line-height);
			word-break: break-word;
		}
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		caption {
			padding: 0.5rem;
		}
		th {
			font-weight: normal;
			color: var(--color-primary);
		}
		:host table thead tr:first-child th,
		:host table thead tr:first-child td {
			border-width: 0;
			border-top-width: calc(var(--border-width) * 2);
			border-style: solid;
			border-color: var(--color-primary-variant);
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		table,
		:host table thead tr:last-child th,
		:host table thead tr:last-child td {
			border-width: 0;
			border-bottom-width: calc(var(--border-width) * 2);
			border-style: solid;
			border-color: var(--color-primary-variant);
		}
		th {
			background-color: var(--color-light);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5rem;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		tr:nth-child(even) {
			background-color: var(--color-mute);
		}
		th,
		td {
			padding: 0.5rem;
		}
		th[aria-sort='ascending'],
		th[aria-sort='descending'] {
			font-weight: 700;
		}
		:host > div:last-child {
			padding: 0.5rem;
		}
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			display: grid;
			align-items: center;
			justify-items: center;
			gap: 1rem;
		}

		@media (min-width: 1024px) {
			div.pagination kol-pagination {
				display: flex;
				align-items: center;
			}
		}
	`,"KOL-NAV":Ve`
		* {
			margin: 0;
			padding: 0;
		}
		nav {
			font-family: var(--font-family);
			font-size: var(--font-size);
			background-color: var(--color-mute);
			width: 100%;
		}
		ul {
			list-style: none;
		}
		kol-link-wc,
		a {
			height: 100%;
			min-height: var(--a11y-min-size);
			display: flex;
			place-items: center;
		}
		.entry > kol-span-wc > span {
			width: 100%;
		}
		.entry > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			background-color: var(--color-light);
			text-decoration: none;
			color: var(--color-primary);
			width: 100%;
			display: flex;
			align-items: center;
			font-style: normal;
			line-height: 1.5rem;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			letter-spacing: 0.175px;
		}
		.entry > :is(kol-link-wc, kol-button-wc):first-child :is(a, button) {
			color: var(--color-primary);
			text-decoration: none;
		}
		.entry > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {
			border-left-color: var(--color-primary-variant);
			background-color: var(--color-primary-variant);
		}
		.entry > :is(kol-link-wc, kol-button-wc, kol-span-wc):first-child:hover > :is(a, button, span) {
			color: var(--color-primary-variant);
			font-weight: 700;
			letter-spacing: unset;
		}
		.selected > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			background-color: var(--color-primary-variant);
			color: var(--color-primary);
			font-weight: 700;
		}
		.selected > :is(kol-link-wc, kol-button-wc, kol-span-wc):first-child > :is(a, button, span) {
			font-weight: 700;
		}
		.selected :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {
			color: var(--color-primary-variant);
			letter-spacing: unset;
		}
		.entry > kol-span-wc > span,
		.entry :is(a, button) {
			border-left-color: transparent;
			border-left-style: solid;
			border-left-width: 0.5rem;
			padding: 0.75rem 0.5rem 0.75rem 0.25rem;
		}
		.selected :is(a, button),
		[exportparts*='selected'] a {
			border-left-color: var(--color-primary);
		} /** Compact mode */
		.entry.compact :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			place-items: center;
		}
		.entry.compact > kol-span-wc > span {
			flex-direction: column;
		}
		.entry.compact > kol-span-wc > span,
		.entry.compact :is(a, button) {
			padding-left: 0;
		}
	`,"KOL-CARD":Ve`
		/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: var(--color-light);
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 0.25rem var(--color-subtle);
			border-radius: var(--border-radius);
		}
		:host kol-heading-wc {
			line-height: 1.75rem;
		}
		:host div.header {
			padding: 1rem 1rem 0.5rem 1rem;
		}
		:host div.content {
			padding: 0.5rem 1rem 1rem;
			overflow: hidden;
		}
		:host div.footer {
			padding: 0.5rem 1rem;
		}
	`,"KOL-INPUT-CHECKBOX":Ve`
		:host kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
			min-height: var(--a11y-min-size);
			gap: 0.4rem;
		}
		:host kol-input.default {
			grid-template-columns: 1.5rem auto;
		}
		:host kol-input.switch {
			grid-template-columns: 3.5rem auto;
		}
		:host kol-input.button {
			gap: 0.4rem 0;
		}
		.checkbox-container {
			justify-content: flex-start;
		}
		:host kol-input > div.input {
			display: inherit;
			min-height: var(--a11y-min-size);
			order: 2;
		}
		:host kol-input > div.input input {
			margin: 0px;
		}
		:host kol-input > label {
			cursor: pointer;
			order: 3;
		}
		:host kol-input > kol-alert.error {
			order: 1;
			padding-top: calc(var(--spacing) / 2);
			grid-column: span 2 / auto;
		}
		:host kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		:host kol-input.error input:focus,
		kol-input.error select:focus,
		kol-input.error textarea:focus {
			outline-color: var(--color-danger) !important;
		}
		:host kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		:host input {
			cursor: pointer;
			order: 1;
			width: 100%;
			border-color: var(--color-subtle);
			border-width: 2px;
			border-style: solid;
			border-radius: var(--border-radius);
			line-height: 24px;
			font-size: 1rem;
		}
		:host input:hover {
			border-color: var(--color-primary);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		:host input:focus:hover {
			box-shadow: none;
		}
		:host input:active {
			box-shadow: none;
		}
		:host kol-alert {
			display: block;
			width: 100%;
		} /* CHECKBOX */
		:host kol-input label span {
			margin-top: 0.125rem;
		}
		:host .required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		:host kol-input input[type='checkbox'] {
			appearance: none;
			background-color: white;
			cursor: pointer;
			transition: 0.5s;
		}
		:host kol-input input[type='checkbox']:checked {
			background-color: var(--color-primary);
			border-color: var(--color-primary);
		}
		:host kol-input.default input[type='checkbox'] {
			border-radius: var(--border-radius);
			height: calc(6 * 0.25rem);
			min-width: calc(6 * 0.25rem);
			width: calc(6 * 0.25rem);
		}
		:host kol-input.default input[type='checkbox']:indeterminate {
			background-color: var(--color-primary);
		}
		:host kol-input.default .icon {
			color: var(--color-light);
			margin-left: 0.25rem;
		}

		:host kol-input.switch input[type='checkbox'] {
			background-color: var(--color-subtle);
			border-radius: 1.25em;
			border-width: 0;
			display: block;
			height: 1.5em;
			min-width: 3.5em;
			position: relative;
			width: 3.5em;
		}
		:host kol-input.switch input[type='checkbox']:before {
			width: 1.25em;
			height: 1.25em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			border-radius: 1.25em;
			background-color: white;
			position: absolute;
		}
		:host kol-input.switch input[type='checkbox']:checked {
			background-color: var(--color-primary);
		}
		:host kol-input.switch input[type='checkbox']:checked:before {
			transform: translateX(2em);
		}
		:host kol-input.switch input[type='checkbox']:indeterminate:before {
			transform: translateX(1em);
		}
		.switch {
			& .icon {
				width: 1.25em;
				height: 1.25em;
				left: 2px;
			}

			&.checked .icon {
				transform: translate(2em, -50%);
			}

			&.indeterminate .icon {
				transform: translate(1em, -50%);
			}
		}
		:host .disabled {
			opacity: 0.33;
		}
		.button:focus-within {
			border-radius: var(--border-radius);
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: calc(var(--border-width) * 2);
		}
	`,"KOL-INPUT-RADIO":Ve`
		label {
			cursor: pointer;
			display: grid;
			line-height: 20px;
			gap: calc(var(--spacing) * 2);
			width: 100%;
		}
		input {
			cursor: pointer;
			width: 100%;
			border-color: var(--color-subtle);
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			line-height: 24px;
		}
		input:hover {
			border-color: var(--color-primary);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		input:focus:hover {
			box-shadow: none;
		}
		input:hover {
			border-color: var(--color-primary);
		}
		kol-alert {
			display: block;
			width: 100%;
		}
		.required legend > span::after {
			content: '*';
			padding-left: 0.125em;
		} /* RADIO */
		fieldset {
			border: 0px;
			margin: 0px;
			padding: 0px;
			display: grid;
			gap: 0.25em;
		}
		.radio-input-wrapper {
			align-items: center;
			cursor: pointer;
			display: flex;
			flex-direction: row;
			gap: 0.5rem;
			margin: 0;
			min-height: var(--a11y-min-size);
			position: relative;
		}
		.radio-input-wrapper label {
			cursor: pointer;
			display: flex;
			padding-left: calc(var(--spacing) / 2);
			width: 100%;
		}
		.radio-input-wrapper label span {
			margin-top: 0.125em;
		}
		.radio-input-wrapper input[type='radio'] {
			appearance: none;
			transition: 0.5s;
			border-radius: 100%;
			height: calc(6 * 0.25rem);
			min-width: calc(6 * 0.25rem);
			width: calc(6 * 0.25rem);
		}
		.radio-input-wrapper input[type='radio']:before {
			content: '';
			cursor: pointer;
			border-radius: 100%;
			display: block;
		}
		.radio-input-wrapper input[type='radio']:checked:before {
			background-color: var(--color-primary);
		}
		.radio-input-wrapper input[type='radio']:disabled {
			cursor: not-allowed;
			background-color: var(--color-mute-variant);
		}
		kol-alert.error {
			order: 1;
		}
		fieldset legend {
			order: 2;
			display: contents;
		}
		fieldset kol-input {
			order: 3;
		}
		fieldset.error {
			border-left: 3px solid var(--color-danger);
			color: var(--color-danger);
			font-weight: 700;
			padding-left: 1rem;
		}
		fieldset.error input:focus,
		fieldset.error select:focus,
		fieldset.error textarea:focus {
			outline-color: var(--color-danger) !important;
		}
		fieldset.error kol-alert.error {
			margin-left: -0.25em;
			color: var(--color-danger);
			font-weight: 700;
		}
		.disabled {
			opacity: 0.33;
		}
		fieldset.horizontal {
			display: flex;
			flex-wrap: wrap;
			gap: var(--spacing) calc(var(--spacing) * 2);
		}
		fieldset.horizontal legend {
			display: inline-block;
			margin-bottom: calc(var(--spacing) / 2);
		}
		fieldset .input-slot {
			gap: var(--spacing);
		}
		.radio-input-wrapper label {
			padding-left: 0;
		}
	`,"KOL-TOAST-CONTAINER":Ve`
		:host {
			top: 1rem;
			right: 1rem;
			width: 440px;
			max-width: 100%;
		}
		.toast {
			margin-top: 1rem;
		}
	`,"KOL-TABS":Ve`
		button:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
		:host kol-button-group-wc {
			display: inline-flex;
			gap: 2rem;
			flex-wrap: wrap;
		}
		button {
			box-sizing: border-box;
			background-color: transparent;
			border: 0;
			border-radius: var(--border-radius);
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			color: var(--color-subtle);
			padding: 0;
		}
		button:hover {
			color: var(--color-primary);
		}
		button.primary,
		button.selected {
			color: var(--color-primary);
		}
		button kol-span-wc > span {
			border-bottom: 0.25em solid;
		}
		button kol-span-wc > span {
			gap: 0.5rem;
		}
		:host > div > div {
			padding: 0.25em 0;
		}
		div[role='tabpanel'] {
			height: 100%;
		}
		div.grid {
			height: 100%;
		}
		:host > .tabs-align-right {
			display: grid;
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-right kol-button-group-wc {
			display: grid;
			order: 2;
		}
		:host > .tabs-align-left {
			display: grid;
			grid-template-columns: auto 1fr;
		}
		:host > .tabs-align-left kol-button-group-wc {
			display: grid;
			order: 0;
		}
		:host > .tabs-align-bottom {
			display: grid;
			grid-template-rows: 1fr auto;
		}
		:host > .tabs-align-bottom kol-button-group-wc {
			order: 2;
		}
		:host > .tabs-align-bottom kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {
			margin: 0px 1rem 0px 0px;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div {
			margin: 0px 1rem;
		}
		:host > .tabs-align-top {
			display: grid;
			grid-template-rows: auto 1fr;
		}
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-top kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {
			margin: 0px 1rem 0px 0px;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div {
			margin: 0px 1rem;
		}
		:host > div {
			display: grid;
		}
		:host > div.tabs-align-left {
			grid-template-columns: auto 1fr;
		}
		:host > div.tabs-align-right {
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-bottom kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			order: 1;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			gap: inherit;
		}
		:host > div.tabs-align-left kol-button-group-wc > div,
		:host > div.tabs-align-left kol-button-group-wc > div > div,
		:host > div.tabs-align-right kol-button-group-wc > div,
		:host > div.tabs-align-right kol-button-group-wc > div > div {
			display: grid;
		}
		:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
		:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
			width: 100%;
		}
		:host > div.tabs-align-bottom kol-button-group-wc div,
		:host > div.tabs-align-top kol-button-group-wc div {
			display: flex;
			flex-wrap: wrap;
		}
		:host kol-button-group-wc button {
			border: none;
		}
	`,"KOL-PAGINATION":Ve`
		.button:focus {
			outline: none;
		}
		.button-inner {
			background-color: var(--color-light);
			border-radius: var(--border-radius);
			border: 1px solid var(--color-primary);
			color: var(--color-primary);
			font-weight: 700;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		.button:focus .button-inner {
			outline-offset: 2px;
			outline: 2px solid var(--color-primary-variant);
			transition: outline-offset 0.2s linear;
		}
		.button:is(:active, :hover):not(:disabled) .button-inner {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		}
		.button:active .button-inner {
			color: var(--color-light);
			outline: none;
		}
		.button:disabled .button-inner {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.selected .button-inner {
			background-color: var(--color-mute-variant);
			border-radius: var(--a11y-min-size);
			border: 0;
			opacity: 1 !important;
		}
	`,"KOL-INPUT-RANGE":Ve`
		.inputs-wrapper {
			gap: 1rem;
		}
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input.icon-left > kol-icon:first-child {
			margin-right: 0.5rem;
		}
		.input.icon-right > kol-icon:last-child {
			margin-left: 0.5rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(.input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-LINK-BUTTON":Ve`
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: calc(var(--border-width) * 2);
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--a11y-min-size);
			border-style: solid;
			outline-width: calc(var(--border-width) * 2);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		:is(a, button):disabled > kol-span-wc {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-primary);
			border-color: var(--color-primary);
			color: var(--color-light);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-light);
			border-color: var(--color-primary);
			color: var(--color-primary);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
			color: var(--color-light);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-light);
			background-color: var(--color-light);
			box-shadow: none;
			color: var(--color-primary);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-light);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 0.8rem;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** small ghost button */
		.ghost :is(a, button).small > kol-span-wc {
			border: none;
			background-color: transparent;
			box-shadow: none;
		}
		.ghost :is(a, button).small > kol-span-wc > span {
			border-radius: 1.5em;
			border-style: solid;
			border-width: var(--border-width);
			border-color: var(--color-light);
			background-color: var(--color-light);
		}
		.ghost :is(a, button).small:active > kol-span-wc > span,
		.ghost :is(a, button).small:hover > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:active > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:hover > kol-span-wc > span {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		} /** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).small.transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
	`,"KOL-BUTTON-LINK":Ve`
		:is(a, button) {
			color: var(--color-primary);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
			font-size: inherit;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: calc(var(--border-width) * 2) solid;
		}
		:is(a, button):hover {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
		.access-key-hint {
			background: var(--color-mute-variant);
			border-radius: 3px;
			color: var(--color-text);
			padding: 0 0.3em;
		}
	`,"KOL-ABBR":Ve`
		abbr {
			border-bottom: dashed var(--color-text) 1px;
			text-decoration: none !important;
		}
	`,"KOL-BREADCRUMB":Ve`
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon {
			font-size: 0.75rem;
			color: var(--color-subtle);
		}
		kol-link::part(icon) {
			font-size: 1.25rem;
		}
		ul li > :is(span, kol-link) {
			line-height: 1.25rem;
			height: 20px;
		}
		ul li:last-child > span {
			color: var(--color-subtle);
		}
	`,"KOL-MODAL":Ve`
		:host .overlay .modal {
			max-height: calc(100% - 32px);
		}
	`,"KOL-ICON":Ve`
		:host {
			width: 1em;
			height: 1em;
		}
		:host > i {
			width: 1em;
			height: 1em;
		}
	`,"KOL-SKIP-NAV":Ve`
		kol-link-wc > a > kol-span-wc {
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: var(--border-width);
			gap: calc(var(--spacing) * 2);
			line-height: 1rem;
			padding: 8px 14px;
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			color: var(--color-light);
			cursor: pointer;
		}
	`,"KOL-SPLIT-BUTTON":Ve`
		.popover {
			background: #fff;
		}
	`}),Ze=e=>e.join(""),We=Me.createTheme("ecl-ec",{GLOBAL:Ze`
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
		:host {
			--color-blue: #004494;
			--color-yellow: #ffd617;
			--color-grey: #404040;
			--color-blue-130: #002f67;
			--color-blue-120: #003776;
			--color-blue-110: #003d84;
			--color-blue-100: var(--color-blue);
			--color-blue-75: #4073af;
			--color-blue-50: #bfd0e4;
			--color-blue-25: #bfd0e4;
			--color-blue-5: #f2f5f9;
			--color-yellow-120: #f8ae21;
			--color-yellow-110: #fbc11d;
			--color-yellow-100: var(--color-yellow);
			--color-yellow-75: #ffde39;
			--color-yellow-50: #ffe879;
			--color-yellow-25: #fff4bb;
			--color-grey-100: var(--color-grey);
			--color-grey-75: #707070;
			--color-grey-50: #9f9f9f;
			--color-grey-25: #cfcfcf;
			--color-grey-20: #d9d9d9;
			--color-grey-15: #e3e3e3;
			--color-grey-10: #ebebeb;
			--color-grey-5: #f5f5f5;
			--color-grey-3: #f9f9f9;
			--color-blue-n: #006fb4;
			--color-orange: #f29527;
			--color-green: #467a39;
			--color-red: #da2131;
			--color-red-1xx: #981722;
			--color-black: #000;
			--color-white: #fff;
			--font-family: Arial, sans-serif;
			--font-size: 16px;
			--font-weight: 400;
			--font-weight-bold: 600;
			--line-height: 1.5em;
			--line-height-heading: 1.2em; /* ?! */
			--spacing-4xl: 64px;
			--spacing-3xl: 48px;
			--spacing-2xl: 40px;
			--spacing-xl: 32px;
			--spacing-l: 24px;
			--spacing-m: 16px;
			--spacing-s: 12px;
			--spacing-xs: 8px;
			--spacing-2xs: 4px; /* ?! */
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			display: inline-block;
			font-family: var(--font-family);
		}
		a,
		button {
			font-size: var(--font-size);
			outline: none;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: var(--font-weight-bold);
			line-height: var(--line-height-heading);
			margin: 0;
			padding: 0;
		}
		p {
			font-weight: var(--font-weight);
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
		.required label span::after,
		.required legend span::after {
			color: var(--color-red);
			padding-left: 0.25em;
		}
	`,"KOL-HEADING":Ze`
		.headline-h1 {
			font-size: 2rem;
			line-height: 2.5rem;
		}
		.headline-h2 {
			font-size: 1.75rem;
			line-height: 2rem;
		}
		.headline-h3 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h4 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		.headline-h5 {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		.headline-h6 {
			color: rgb(234, 0, 255);
		}
	`,"KOL-ACCORDION":Ze`
		:host > div {
			background-color: var(--color-grey-5);
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
		}
		:host > div .headline button {
			text-align: left;
			width: 100%;
			padding: 0 var(--spacing-m);
			display: flex;
			place-items: center;
		}
		:host > div .headline button kol-icon {
			margin-bottom: 0.75rem;
			margin-inline-end: 1rem;
			margin-inline-start: 0;
			margin-top: 0.75rem;
		}
		:host > div .headline button span {
			color: var(--color-grey);
			font-weight: var(--font-weight-bold);
			padding: 0.75rem 0;
			width: 100%;
		}
		:host > div[part*='open'] .headline button span {
			border-bottom: 1px solid var(--color-grey);
		}
		:host > div .headline button:focus,
		:host > div .headline button:hover {
			background-color: var(--color-grey-25);
		}
		:host > div .headline button:focus {
			outline: 2px solid var(--color-blue);
			outline-offset: -2px;
		}
		.content {
			padding: var(--spacing-s) var(--spacing-m);
		}
	`,"KOL-INDENTED-TEXT":Ze`
		:host > div {
			border-end-start-radius: 0;
			border-inline-start: 10px solid var(--color-yellow);
			border-start-start-radius: 0;
			padding-bottom: 1rem;
			padding-inline-start: 1.5rem;
			padding-top: 1rem;
			margin: 0;
		}
	`,"KOL-BUTTON":Ze`
		a,
		button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		a kol-span-wc,
		button kol-span-wc {
			border-radius: 0;
			border-style: solid;
			border-width: 2px;
			font-weight: var(--font-weight-bold);
			margin: 0;
			min-height: 44px;
			min-width: 44px;
			padding: 0.25em 0.75em;
		}
		a:focus kol-span-wc,
		button:focus kol-span-wc {
			outline-offset: -4px;
			outline-width: 2px;
			outline-style: solid;
		}
		button.ghost:focus kol-span-wc {
			outline-offset: -2px;
		}
		.primary a kol-span-wc,
		.primary button kol-span-wc {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
		}
		.primary a:focus kol-span-wc,
		.primary button:focus kol-span-wc {
			outline-color: var(--color-white);
		}
		.primary a:hover kol-span-wc,
		.primary button:hover kol-span-wc {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.secondary a kol-span-wc,
		.secondary button kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-blue);
			color: var(--color-blue);
		}
		.secondary a:focus kol-span-wc,
		.secondary button:focus kol-span-wc {
			outline-color: var(--color-blue);
			outline-offset: -6px;
		}
		.secondary a:hover kol-span-wc,
		.secondary button:hover kol-span-wc {
			border-color: var(--color-blue-130);
			color: var(--color-blue-130);
		}
		.normal a kol-span-wc, /* CTA */.normal button kol-span-wc {
			background-color: var(--color-yellow);
			border-color: var(--color-yellow);
			color: var(--color-black);
		}
		.normal a:hover kol-span-wc, /* CTA */.normal button:hover kol-span-wc {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a kol-span-wc,
		.ghost button kol-span-wc {
			background-color: transparent;
			border-color: transparent;
			color: var(--color-blue);
		}
		.ghost a:focus kol-span-wc,
		.ghost button:focus kol-span-wc {
			outline-color: var(--color-blue);
		}
		.ghost a:hover kol-span-wc,
		.ghost button:hover kol-span-wc {
			color: var(--color-blue-130);
		}
	`,"KOL-LINK-BUTTON":Ze`
		a,
		button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		a kol-span-wc,
		button kol-span-wc {
			appearance: none;
			background: none;
			border-radius: 0;
			border-style: solid;
			border-width: 2px;
			font-weight: var(--font-weight-bold);
			margin: 0;
			min-height: 44px;
			min-width: 44px;
			padding: 0.25em 0.75em;
		}
		a:focus kol-span-wc,
		button:focus kol-span-wc {
			outline-offset: -4px;
			outline-width: 2px;
			outline-style: solid;
		}
		button.ghost:focus kol-span-wc {
			outline-offset: -2px;
		}
		.primary a kol-span-wc,
		.primary button kol-span-wc {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
		}
		.primary a:focus kol-span-wc,
		.primary button:focus kol-span-wc {
			outline-color: var(--color-white);
		}
		.primary a:hover kol-span-wc,
		.primary button:hover kol-span-wc {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.secondary a kol-span-wc,
		.secondary button kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-blue);
			color: var(--color-blue);
		}
		.secondary a:focus kol-span-wc,
		.secondary button:focus kol-span-wc {
			outline-color: var(--color-blue);
			outline-offset: -6px;
		}
		.secondary a:hover kol-span-wc,
		.secondary button:hover kol-span-wc {
			border-color: var(--color-blue-130);
			color: var(--color-blue-130);
		}
		.normal a kol-span-wc, /* CTA */.normal button kol-span-wc {
			background-color: var(--color-yellow);
			border-color: var(--color-yellow);
			color: var(--color-black);
		}
		.normal a:hover kol-span-wc, /* CTA */.normal button:hover kol-span-wc {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a kol-span-wc,
		.ghost button kol-span-wc {
			background-color: transparent;
			border-color: transparent;
			color: var(--color-blue);
		}
		.ghost a:focus kol-span-wc,
		.ghost button:focus kol-span-wc {
			outline-color: var(--color-blue);
		}
		.ghost a:hover kol-span-wc,
		.ghost button:hover kol-span-wc {
			color: var(--color-blue-130);
		}
	`,"KOL-BADGE":Ze`
		:host > span {
			font: normal normal var(--font-weight) 1em var(--font-family);
			padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
			text-transform: uppercase;
		}
	`,"KOL-ALERT":Ze`
		:host > div {
			background-color: var(--color-white);
		}
		:host > div.card {
			border-style: solid;
			border-width: 2px;
		}
		:host > div.msg {
			border: none;
		}
		:host .msg .heading kol-icon {
			font-size: 1.5em;
			margin: var(--spacing-2xs);
		}
		:host .msg .heading > div {
			padding: var(--spacing-2xs);
		}
		:host .card {
			padding-bottom: 1.5rem;
			padding-inline-end: 0.5rem;
			padding-inline-start: 1.5rem;
			padding-top: 1.5rem;
		}
		:host .card .heading {
			gap: 0.5rem;
		}
		:host .card .content {
			margin-left: 2.5rem;
		}
		:host .card .heading kol-icon {
			font-size: 2rem;
		}
		:host .default {
			border-color: var(--color-grey);
		}
		:host .default .heading kol-icon {
			color: var(--color-grey);
		}
		:host .error {
			border-color: var(--color-red);
		}
		:host .error .heading kol-icon {
			color: var(--color-red);
		}
		:host .info {
			border-color: var(--color-blue);
		}
		:host .info .heading kol-icon {
			color: var(--color-blue);
		}
		:host .success {
			border-color: var(--color-green);
		}
		:host .success .heading kol-icon {
			color: var(--color-green);
		}
		:host .warning {
			border-color: var(--color-orange);
		}
		:host .warning .heading kol-icon {
			color: var(--color-orange);
		}
	`,"KOL-TABS":Ze`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		kol-button-group-wc {
			border-bottom: 1px solid var(--color-grey-25);
			margin-bottom: -1px;
		}
		kol-button-group-wc button {
			border: none;
			margin-bottom: -1px;
		}
		kol-button-group-wc button kol-span-wc {
			padding: 0.5rem;
			min-height: 44px;
			min-width: 44px;
		}
		kol-button-group-wc button.selected kol-span-wc {
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
			border-bottom-color: white;
			border-top-color: var(--color-blue);
			box-shadow: 0 -3px var(--color-blue);
			font-weight: var(--font-weight-bold);
			color: var(--color-blue);
		}
		kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
			color: var(--color-blue-130);
		}
		kol-button-group-wc button:focus kol-span-wc {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,"KOL-LINK":Ze`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,"KOL-BUTTON-LINK":Ze`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,"KOL-BREADCRUMB":Ze`
		:host {
			font:
				normal normal 400 0.875rem/1rem arial,
				sans-serif;
			font-weight: var(--font-weight-bold);
		}
		kol-icon::part(icon separator)::before {
			color: var(--color-blue);
		}
		li:last-child {
			color: var(--color-grey-75);
		}
		kol-icon[exportparts*='separator'] {
			margin-inline-end: 0.5rem;
			margin-inline-start: 0.5rem;
			padding: 0;
		}
	`,"KOL-DETAILS":Ze`
		details > kol-indented-text {
			margin: 0.175rem;
			padding: 0;
		}
	`,"KOL-PROGRESS":Ze`
		:host progress,
		:host span {
			display: block;
			height: 0px;
			overflow: hidden;
			width: 0px;
		}
		svg line:first-child,
		svg circle:first-child {
			fill: transparent;
			stroke: var(--color-grey-25);
		}
		svg line:last-child,
		svg circle:last-child {
			stroke: var(--color-blue-130);
			fill: transparent;
		}
		progress {
			display: none;
		}
	`,"KOL-SPIN":Ze`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: var(--color-blue-75);
			}
		}
	`,"KOL-PAGINATION":Ze`
		:host {
			display: grid;
		}
		.button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		.button-inner {
			background-color: var(--color-yellow);
			border: 2px solid var(--color-yellow);
			color: var(--color-black);
			font-weight: var(--font-weight-bold);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 0.25em 0.75em;
		}
		.button:not(:disabled):hover .button-inner {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.button:focus .button-inner {
			outline-offset: -4px;
			outline: 2px solid var(--color-black);
		}
		.button:disabled .button-inner {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.selected .button-inner {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
			opacity: 1 !important;
			text-decoration: underline;
		}
	`,"KOL-INPUT-CHECKBOX":Ze`
		.checkbox-container {
			justify-content: flex-start;
		}
		input[type='checkbox'] {
			background-color: var(--color-white);
			border-width: 2px;
			border-style: solid;
			color: var(--color-grey);
			line-height: 1.5em;
			font-size: 1rem;
		}
		input[type='checkbox']:focus {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		input[type='checkbox'] {
			border-color: var(--color-grey-75);
		}
		input[type='checkbox']:checked {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
		}
		input[type='checkbox']:hover {
			border-color: var(--color-blue);
		}
		input[type='checkbox']:checked:hover {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.error input[type='checkbox'] {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:hover {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked:hover {
			background-color: var(--color-red-1xx);
			border-color: var(--color-red-1xx);
		}
		.error.required label > span::after {
			color: var(--color-red);
		}

		.default .icon {
			margin-left: 0.2rem;
		}
		.default.checked .icon {
			color: var(--color-white);
		}

		.switch input[type='checkbox'] {
			display: block;
		}
		.switch input[type='checkbox']::before,
		.switch input[type='checkbox']:indeterminate::before {
			background-color: var(--color-grey-75);
		}
		.switch input[type='checkbox']:hover::before,
		.switch input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-blue);
		}
		.switch input[type='checkbox']:checked::before,
		.switch input[type='checkbox']:checked:hover::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']::before {
			background-color: var(--color-red);
		}
		.switch.error input[type='checkbox']:checked::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-red-1xx);
		}
		kol-input {
			gap: var(--spacing-xs);
		}
		.button {
			gap: var(--spacing-xs) 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
		}
		.hint {
			font-size: 0.875rem;
		}
		.button:focus-within {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
	`,"KOL-INPUT-COLOR":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-CARD":":host > div {\n\t\tdisplay: grid;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: white;\n\t\tgrid-template-rows: min-content 2fr min-content;\n\t\tbox-shadow: 0 0 calc(var(--spacing-2xs) / 2) var(--color-black);\n\t}\n\t:host kol-heading-wc {\n\t\tdisplay: inline-flex;\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 1.25em;\n\t\tline-height: 1.75em;\n\t}\n\t:host div.header {\n\t\tpadding: var(--spacing-m) var(--spacing-m) var(--spacing-xs) var(--spacing-m);\n\t}\n\t:host div.content {\n\t\tpadding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);\n\t\toverflow: hidden;\n\t}\n\t:host div.footer {\n\t\tpadding: var(--spacing-xs) var(--spacing-m);\n\t}\n\t:host > div > div.content + div.footer {\n\t\tborder-top: 2px solid var(--color-blue);\n\t}","KOL-BUTTON-GROUP":":host > kol-button-group-wc {\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t\tgap: var(--spacing-2xs);\n\t}","KOL-INPUT-RADIO":'fieldset {\n\t\tborder: 0;\n\t\tgap: 0.5rem;\n\t\tflex-wrap: wrap;\n\t}\n\t.input-slot {\n\t\tgap: 0.25rem;\n\t}\n\tfieldset kol-alert {\n\t\torder: 1;\n\t}\n\tfieldset .hint {\n\t\torder: 2;\n\t}\n\tfieldset kol-alert {\n\t\torder: 3;\n\t}\n\tfieldset kol-input {\n\t\torder: 4;\n\t}\n\t.radio-input-wrapper {\n    display: flex;\n\t\talign-items: center;\n\t}\n\t.radio-label {\n\t\tpadding-left: 0.5rem;\n\t}\n\tinput[type="radio"] {\n\t\tborder: 2px solid var(--color-grey-75);\n\t}\n\tinput[type="radio"]:before {\n\t\tdisplay: none;\n\t}\n\tinput[type="radio"]:checked {\n\t\tborder-color: var(--color-blue);\n\t\tborder-width: 7px;\n\t}\n\tinput[type="radio"]:focus {\n\t\toutline: 2px solid var(--color-blue);\n\t\toutline-offset: 2px;\n\t}\n\tinput[type="radio"]:not(:disabled):hover {\n\t\tborder-color: var(--color-blue);\n\t}\n\tlabel,\n\tlegend {\n\t\tcolor: var(--color-grey);\n\t}\n\tlegend {\n\t\tfont-weight: var(--font-weight-bold);\n\t}\n\t.error input[type="radio"] {\n\t\tborder: 2px solid var(--color-red);\n\t}\n\t.error input[type="radio"]:before {\n\t\tdisplay: none;\n\t}\n\t.error input[type="radio"]:checked {\n\t\tborder-color: var(--color-red);\n\t\tborder-width: 7px;\n\t}\n\t.error input[type="radio"]:not(:disabled):hover {\n\t\tborder-color: var(--color-red-1xx);\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-xs));\n\t\torder: 1;\n\t\twidth: 100%;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 4;\n\t}',"KOL-INPUT-RANGE":'kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\tinput:not([type="range"]):focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-top: 1px solid var(--color-blue);\n\t\tborder-bottom: 1px solid var(--color-blue);\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}',"KOL-INPUT-TEXT":'kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\tinput:not([type="range"]):focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-top: 1px solid var(--color-blue);\n\t\tborder-bottom: 1px solid var(--color-blue);\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t\tpadding: 1px;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}',"KOL-INPUT-PASSWORD":"kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 40px !important;\n\t\tmin-height: 40px !important;\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tmin-height: 44px !important;\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t\tpadding: 1px 0.5em;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}","KOL-INPUT-NUMBER":"kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 40px !important;\n\t\tmin-height: 40px !important;\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tmin-height: 44px !important;\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t\tpadding: 1px 0.5em;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}","KOL-INPUT-DATE":"kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 40px !important;\n\t\tmin-height: 40px !important;\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tmin-height: 44px !important;\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t\tpadding: 1px 0.5em;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}","KOL-INPUT-EMAIL":"kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 40px !important;\n\t\tmin-height: 40px !important;\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tmin-height: 44px !important;\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t\tpadding: 1px 0.5em;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}","KOL-INPUT-FILE":"kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\tmargin: 1px;\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 44px !important;\n\t\tmin-height: 44px !important;\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tmin-height: 44px !important;\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}","KOL-SELECT":"kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 40px !important;\n\t\tmin-height: 40px !important;\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tmin-height: 44px !important;\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t\tpadding: 1px 0.5em;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}","KOL-TEXTAREA":"kol-input {\n\t\tcolor: var(--color-grey);\n\t\tgap: var(--spacing-xs);\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 40px !important;\n\t\tmin-height: 40px !important;\n\t}\n\tlabel {\n\t\tfont-weight: var(--font-weight-bold);\n\t\torder: 1;\n\t}\n\t.hint {\n\t\tfont-size: 0.875rem;\n\t\torder: 2;\n\t}\n\tkol-alert {\n\t\tcolor: var(--color-red);\n\t\tfont-size: 0.875em;\n\t\tmargin-left: calc(-1 * var(--spacing-2xs));\n\t\torder: 3;\n\t}\n\t.input {\n\t\tmin-height: 44px !important;\n\t\tborder: 1px solid var(--color-grey-75);\n\t\tcolor: var(--color-grey);\n\t\torder: 4;\n\t\talign-items: center;\n\t\tpadding: 1px 0.5em;\n\t}\n\t.counter {\n\t\torder: 5;\n\t}\n\tinput::placeholder,\n\ttextarea::placeholder {\n\t\tcolor: var(--color-grey-50);\n\t}\n\t.input:focus-within {\n\t\tbox-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);\n\t\toutline: none;\n\t}\n\t.input:focus-within,\n\t.input:hover {\n\t\tborder-color: var(--color-blue) !important;\n\t}\n\t.error .input {\n\t\tborder-color: var(--color-red);\n\t}","KOL-ICON":":host,\n\t:host > i {\n\t\theight: 1em;\n\t\twidth: 1em;\n\t}","KOL-TABLE":':host > div {\n\t\toverflow-x: auto;\n\t\toverflow-y: hidden;\n\t}\n\tcaption {\n\t\tpadding: 0.5em;\n\t}\n\tth {\n\t\tfont-weight: normal;\n\t\tcolor: var(--color-midnight);\n\t}\n\t:host table thead tr:first-child th,\n\t:host table thead tr:first-child td {\n\t\tborder-width: 0;\n\t\tborder-top-width: 2px;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-ice);\n\t}\n\ttable {\n\t\twidth: 100%;\n\t\tborder-spacing: 0;\n\t}\n\ttable,\n\t:host table thead tr:last-child th,\n\t:host table thead tr:last-child td {\n\t\tborder-width: 0;\n\t\tborder-bottom-width: 2px;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-ice);\n\t}\n\tth {\n\t\tbackground-color: var(--color-white);\n\t}\n\tth div {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tgrid-template-columns: 1fr auto;\n\t\talign-items: center;\n\t}\n\ttbody tr:nth-child(odd) {\n\t\tbackground-color: var(--color-grey-10);\n\t}\n\tth,\n\ttd {\n\t\tpadding: 0.5em;\n\t}\n\tth[aria-sort="ascending"],\n\tth[aria-sort="descending"] {\n\t\tfont-weight: 700;\n\t}\n\t:host > div:last-child {\n\t\tpadding: 0.5em;\n\t}\n\t:host > div:last-child,\n\t:host > div:last-child > div:last-child {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: center;\n\t\tgap: 1em;\n\t}\n\t@media (min-width: 1024px) {\n\t\t:host > div:last-child,\n\t\t:host > div:last-child > div:last-child {\n\t\t\tgrid-auto-flow: column;\n\t\t}\n\t\t:host > div:last-child kol-pagination {\n\t\t\tdisplay: flex;\n\t\t\tgap: 1rem;\n\t\t}\n\t}',"KOL-NAV":'.list {\n\t\tdisplay: flex;\n\t\tlist-style: none;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t}\n\t.list.vertical {\n\t\tflex-direction: column;\n\t}\n\t.entry {\n\t\tdisplay: flex;\n\t}\n\t.entry kol-button-wc:first-child,\n\t.entry kol-link-wc,\n\t.entry kol-span-wc {\n\t\tflex-grow: 1;\n\t} /* custom. */\n\tnav {\n\t\tbackground-color: var(--color-blue);\n\t}\n\tul {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t.expand-button button {\n\t\tbackground-color: var(--color-blue-130);\n\t\tmargin: auto;\n\t\theight: 100%;\n\t}\n\tkol-span-wc {\n\t\tborder-color: transparent;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tcolor: var(--color-white);\n\t\tfont-size: 18px;\n\t\tjustify-items: start;\n\t\tpadding: 1rem;\n\t\theight: 100%;\n\t}\n\tli > ul,\n\tli + li {\n\t\tborder-color: var(--color-blue-75);\n\t\tborder-style: solid;\n\t\tborder-width: 0;\n\t\tborder-top-width: 2px;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t}\n\t:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {\n\t\tborder-color: var(--color-white);\n\t}\n\t:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,\n\t:is(kol-button-wc, kol-link-wc):hover kol-span-wc {\n\t\ttext-decoration: underline;\n\t}\n\tdiv > .expand-button kol-icon::part(icon)::before {\n\t\tcontent: "\\eab6";\n\t}\n\t.expanded > div > .expand-button kol-icon::part(icon)::before {\n\t\tcontent: "\\eab4";\n\t}',"KOL-SKIP-NAV":"kol-link-wc > a > kol-span-wc {\n\t\tborder-radius: 0;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tfont-weight: var(--font-weight-bold);\n\t\tgap: 0.5rem;\n\t\tline-height: 1rem;\n\t\tpadding: 0.25em 0.75em;\n\t\tbackground-color: var(--color-blue);\n\t\tborder-color: var(--color-blue);\n\t\tcolor: var(--color-white);\n\t\tcursor: pointer;\n\t}","KOL-SPLIT-BUTTON":".popover {\n\t\tbackground: #fff;\n\t}","KOL-TOAST-CONTAINER":":host {\n\t\ttop: 1rem;\n\t\tright: 1rem;\n\t\twidth: 440px;\n\t\tmax-width: 100%;\n\t}\n\t.toast {\n\t\tdisplay: block;\n\t\tbackground: #fff;\n\t\tmargin-top: 1rem;\n\t}\n\t.alert {\n\t\tdisplay: block;\n\t}"}),Ge=Me.createTheme("ecl-eu",{GLOBAL:Ze`
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
		:host {
			--color-blue: #0e47cb;
			--color-blue-140: #082b7a;
			--color-blue-130: #082b7a;
			--color-blue-120: #0b39a2;
			--color-blue-110: #0d40b7;
			--color-blue-100: #0e47cb;
			--color-blue-80: #3e6cd5;
			--color-blue-60: #6e91e0;
			--color-blue-40: #9fb5ea;
			--color-blue-20: #cfdaf5;
			--color-blue-10: #e7edfa;
			--color-blue-5: #f3f6fc;
			--color-yellow: #ffcc00;
			--color-yellow-140: #997a00;
			--color-yellow-130: #b38f00;
			--color-yellow-120: #cca300;
			--color-yellow-110: #e6b800;
			--color-yellow-100: #ffcc00;
			--color-yellow-80: #ffd633;
			--color-yellow-60: #ffe066;
			--color-yellow-40: #ffeb99;
			--color-yellow-20: #fff5cc;
			--color-yellow-10: #fffae6;
			--color-yellow-5: #fffcf2;
			--color-grey: #262b38;
			--color-grey-140: #171a22;
			--color-grey-130: #1b1e27;
			--color-grey-120: #1e222d;
			--color-grey-110: #222732;
			--color-grey-100: #262b38;
			--color-grey-80: #515560;
			--color-grey-75: #515560;
			--color-grey-60: #7d8088;
			--color-grey-40: #a8aaaf;
			--color-grey-20: #d4d5d7;
			--color-grey-10: #e9eaeb;
			--color-grey-5: #f4f5f5;
			--color-grey-3: #f9f9f9;
			--color-orange: #ff6200;
			--color-orange-140: #993b00;
			--color-orange-130: #b34500;
			--color-orange-120: #cc4e00;
			--color-orange-110: #e65800;
			--color-orange-100: #e65800;
			--color-orange-80: #ff8133;
			--color-orange-60: #ff914d;
			--color-orange-40: #ffb180;
			--color-orange-20: #ffd0b3;
			--color-orange-10: #ffefe6;
			--color-orange-5: #fff7f2;
			--color-green: #00c991;
			--color-green-140: #007957;
			--color-green-130: #008d66;
			--color-green-120: #008d66;
			--color-green-110: #00b583;
			--color-green-100: #00c991;
			--color-green-80: #00c991;
			--color-green-60: #66dfbd;
			--color-green-40: #99e9d3;
			--color-green-20: #ccf4e9;
			--color-green-10: #e6faf4;
			--color-green-5: #f2fcf9;
			--color-red: #ef0044;
			--color-red-140: #8f0029;
			--color-red-130: #a70030;
			--color-red-120: #bf0036;
			--color-red-110: #d7003d;
			--color-red-100: #ef0044;
			--color-red-80: #f23369;
			--color-red-60: #f5668f;
			--color-red-40: #f999b4;
			--color-red-20: #fcccda;
			--color-red-10: #fde6ec;
			--color-red-5: #fef2f5;
			--color-accent-blue-100: #00e9ff;
			--color-accent-blue-30: #b3f8ff;
			--color-purple: #510dcd;
			--color-purple-140: #31087b;
			--color-purple-130: #390990;
			--color-purple-120: #410aa4;
			--color-purple-110: #490cb9;
			--color-purple-100: #510dcd;
			--color-purple-80: #743dd7;
			--color-purple-60: #976ee1;
			--color-purple-40: #bf9af1;
			--color-purple-20: #dccff5;
			--color-purple-10: #eee7fa;
			--color-purple-5: #eee7fa;
			--color-white: #fff;
			--color-black: #000;
			--font-family: Arial, sans-serif;
			--font-size: 16px;
			--font-weight-regular: 400;
			--font-weight-bold: 700;
			--line-height-regular: 1.5em;
			--line-height-heading: 1.2em;
			--spacing-4xl: 64px;
			--spacing-3xl: 48px;
			--spacing-2xl: 40px;
			--spacing-xl: 32px;
			--spacing-l: 24px;
			--spacing-m: 16px;
			--spacing-s: 12px;
			--spacing-xs: 8px;
			--spacing-2xs: 4px; /* ?! */
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			display: inline-block;
			font-family: var(--font-family);
		}
		a,
		button {
			font-size: var(--font-size);
			outline: none;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: var(--font-weight-bold);
			line-height: var(--line-height-heading);
			margin: 0;
			padding: 0;
		}
		p {
			font-weight: var(--font-weight);
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
		.required label span::after,
		.required legend span::after {
			color: var(--color-red);
			padding-left: 0.25em;
		}
		p.l,
		p.lead {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		p,
		p.m,
		p.medium {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		p.s,
		p.small {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
		p.xs,
		p.extra-small {
			font-size: 0.75rem;
			line-height: 1.25rem;
		}
	`,"KOL-HEADING":Ze`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			font-weight: var(--font-weight-bold);
		}
		.headline-h1 {
			font-size: 2.625rem;
			line-height: 3.25rem;
		}
		.headline-h2 {
			font-size: 2.25rem;
			line-height: 2.75rem;
		}
		.headline-h3 {
			font-size: 2rem;
			line-height: 2.5rem;
		}
		.headline-h4 {
			font-size: 1.75rem;
			line-height: 2rem;
		}
		.headline-h5 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h6 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
	`,"KOL-ACCORDION":Ze`
		.accordion,
		div[part*='accordion'] {
			border-radius: 8px;
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
			margin: 0;
			overflow: hidden;
		}
		.headline {
			font-size: 2em;
		}
		div[part*='close'] .headline button {
			border-radius: 8px;
		}
		div[part*='open'] .headline button {
			border-start-end-radius: 8px;
			border-start-start-radius: 8px;
		}
		.headline button {
			outline-offset: -1px;
			border: 0;
			border-bottom-color: #cfdaf5;
			border-bottom-style: solid;
			border-bottom-width: 2px;
			color: #171a22;
			position: relative;
			display: block;
			font:
				normal normal 400 1.125rem/1.75rem arial,
				sans-serif;
			padding: 1.5rem;
			text-align: start;
			width: 100%;
		}
		.headline button::before {
			background-color: #fc0;
			border-end-end-radius: 2px;
			border-end-start-radius: 2px;
			content: '';
			height: 4px;
			position: absolute;
			left: 1.5rem;
			top: 0;
			width: 32px;
		}
		.headline button kol-icon {
			margin-right: 0.75rem;
		}
		.headline button kol-icon::part(icon)::before {
			color: #0e47cb;
			font-weight: 900;
			font-family: 'Font Awesome 6 Free';
		}
		.open .headline button kol-icon::part(icon)::before {
			content: '\\f077';
		}
		:not(.open) .headline button kol-icon::part(icon)::before {
			content: '\\f078';
		}
		.content,
		div[part='content'] {
			-webkit-border-start: 4px solid #0e47cb;
			-webkit-margin-start: 0;
			border-bottom: 2px solid #cfdaf5;
			border-inline-start: 4px solid #0e47cb;
			color: #515560;
			font:
				normal normal 400 1rem/1.5rem arial,
				sans-serif;
			margin-inline-start: 0;
			padding: 1.5rem;
		}
		kol-span-wc > span {
			align-items: baseline;
		}
	`,"KOL-INDENTED-TEXT":Ze`
		:host > div {
			-webkit-border-start: 8px solid #0e47cb;
			-webkit-padding-start: 1.5rem;
			border-end-start-radius: 4px;
			border-inline-start: 8px solid #0e47cb;
			border-start-start-radius: 4px;
			display: inline-block;
			padding-bottom: 1rem;
			padding-inline-start: 1.5rem;
			padding-top: 1rem;
		}
	`,"KOL-BUTTON":Ze`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		a,
		button {
			appearance: none;
			border-radius: 4px;
			text-decoration: none;
		}
		a:focus,
		button:focus {
			outline: none;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			min-height: 44px;
			min-width: 44px;
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem arial,
				sans-serif;
			font-weight: 400;
			margin: 0;
			padding: 0.75rem;
		}
		a:focus-visible > kol-span-wc,
		button:focus-visible > kol-span-wc {
			outline-offset: -4px;
			outline-style: solid;
			outline-width: 2px;
		}
		a:active > kol-span-wc,
		button:active > kol-span-wc,
		a:hover > kol-span-wc,
		button:hover > kol-span-wc {
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.primary a > kol-span-wc,
		.primary button > kol-span-wc {
			background-color: #0e47cb;
			color: #fff;
		}
		.primary a:focus-visible > kol-span-wc,
		.primary button:focus-visible > kol-span-wc {
			outline-color: #fff;
		}
		.primary a:hover > kol-span-wc,
		.primary button:hover > kol-span-wc {
			background-color: #3e6cd5;
		}
		.secondary a > kol-span-wc,
		.secondary button > kol-span-wc {
			background-color: #fff;
			border: 2px solid #0e47cb;
			color: #0e47cb;
			padding: calc(0.75rem - 2px) calc(1rem - 2px);
		}
		.secondary a:focus-visible > kol-span-wc,
		.secondary button:focus-visible > kol-span-wc {
			box-shadow: inset 0 0 0 4px #0e47cb;
			outline-color: #fff;
		}
		.secondary a:hover > kol-span-wc,
		.secondary button:hover > kol-span-wc {
			border-color: #0e47cb;
			color: #0e47cb;
		}
		.normal a > kol-span-wc,
		.normal button > kol-span-wc {
			background-color: #fc0;
			color: #171a22;
		}
		.normal a:focus-visible > kol-span-wc,
		.normal button:focus-visible > kol-span-wc {
			outline-color: #000;
		}
		.normal a:hover > kol-span-wc,
		.normal button:hover > kol-span-wc {
			background-color: #fc0;
			border-color: #fc0;
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a > kol-span-wc,
		.ghost button > kol-span-wc {
			color: #0e47cb;
		}
		.ghost a:focus-visible > kol-span-wc,
		.ghost button:focus-visible > kol-span-wc {
			outline-color: #0e47cb;
		}
		.ghost a:hover > kol-span-wc,
		.ghost button:hover > kol-span-wc {
			color: #0e47cb;
		}
	`,"KOL-LINK-BUTTON":Ze`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		a,
		button {
			appearance: none;
			border-radius: 4px;
			text-decoration: none;
		}
		a:focus,
		button:focus {
			outline: none;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			min-height: 44px;
			min-width: 44px;
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem arial,
				sans-serif;
			font-weight: 400;
			margin: 0;
			padding: 0.75rem;
		}
		a:focus-visible > kol-span-wc,
		button:focus-visible > kol-span-wc {
			outline-offset: -4px;
			outline-style: solid;
			outline-width: 2px;
		}
		a:active > kol-span-wc,
		button:active > kol-span-wc,
		a:hover > kol-span-wc,
		button:hover > kol-span-wc {
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.primary a > kol-span-wc,
		.primary button > kol-span-wc {
			background-color: #0e47cb;
			color: #fff;
		}
		.primary a:focus-visible > kol-span-wc,
		.primary button:focus-visible > kol-span-wc {
			outline-color: #fff;
		}
		.primary a:hover > kol-span-wc,
		.primary button:hover > kol-span-wc {
			background-color: #3e6cd5;
		}
		.secondary a > kol-span-wc,
		.secondary button > kol-span-wc {
			background-color: #fff;
			border: 2px solid #0e47cb;
			color: #0e47cb;
			padding: calc(0.75rem - 2px) calc(1rem - 2px);
		}
		.secondary a:focus-visible > kol-span-wc,
		.secondary button:focus-visible > kol-span-wc {
			box-shadow: inset 0 0 0 4px #0e47cb;
			outline-color: #fff;
		}
		.secondary a:hover > kol-span-wc,
		.secondary button:hover > kol-span-wc {
			border-color: #0e47cb;
			color: #0e47cb;
		}
		.normal a > kol-span-wc,
		.normal button > kol-span-wc {
			background-color: #fc0;
			color: #171a22;
		}
		.normal a:focus-visible > kol-span-wc,
		.normal button:focus-visible > kol-span-wc {
			outline-color: #000;
		}
		.normal a:hover > kol-span-wc,
		.normal button:hover > kol-span-wc {
			background-color: #fc0;
			border-color: #fc0;
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a > kol-span-wc,
		.ghost button > kol-span-wc {
			color: #0e47cb;
		}
		.ghost a:focus-visible > kol-span-wc,
		.ghost button:focus-visible > kol-span-wc {
			outline-color: #0e47cb;
		}
		.ghost a:hover > kol-span-wc,
		.ghost button:hover > kol-span-wc {
			color: #0e47cb;
		}
	`,"KOL-BUTTON-GROUP":Ze`
		:host > kol-button-group-wc {
			gap: var(--spacing-2xs);
		}
	`,"KOL-PAGINATION":Ze`
		:host {
			display: grid;
		}
		.button {
			--kolibri-spacing: 0.25rem;
			border-radius: 4px;
			&:focus {
				outline: none;
			}
		}
		.button-inner {
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem Arial,
				sans-serif;
			padding: 0.75rem;
			background-color: #fc0;
			color: #171a22;
		}
		.button:focus-visible .button-inner {
			outline-offset: -4px;
			outline: 2px solid var(--color-black);
		}
		button:not(:disabled):active .button-inner,
		button:not(:disabled):hover .button-inner {
			background-color: #fc0;
			border-color: #fc0;
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.button:disabled .button-inner {
			opacity: 0.5;
			cursor: not-allowed;
		}
		.selected .button-inner {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
			font-weight: bold;
			text-decoration: underline;
			opacity: 1 !important;
		}
	`,"KOL-NAV":Ze`
		.list {
			display: flex;
			list-style: none;
			margin: 0px;
			padding: 0px;
		}
		.list.vertical {
			flex-direction: column;
		}
		.entry {
			display: flex;
		}
		.entry kol-button-wc:first-child,
		.entry kol-link-wc,
		.entry kol-span-wc {
			flex-grow: 1;
		} /* custom. */
		nav {
			background-color: var(--color-blue);
		}
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		.expand-button button {
			background-color: var(--color-blue-130);
			margin: auto;
			height: 100%;
		}
		kol-span-wc {
			border-color: transparent;
			border-style: solid;
			border-width: 2px;
			color: var(--color-white);
			font-size: 18px;
			justify-items: start;
			padding: 1rem;
			height: 100%;
		}
		li > ul,
		li + li {
			border-color: var(--color-blue-75);
			border-style: solid;
			border-width: 0;
			border-top-width: 2px;
		}
		a {
			text-decoration: none;
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
			border-color: var(--color-white);
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
		:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
			text-decoration: underline;
		}
		div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab6';
		}
		.expanded > div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab4';
		}
	`,"KOL-BADGE":Ze`
		:host > span {
			font: normal normal var(--font-weight) 0.875rem/1em var(--font-family);
			padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
			text-transform: uppercase;
		}
	`,"KOL-ALERT":Ze`
		:host > div {
			background-color: var(--color-white);
		}
		:host > div.card {
			border-style: solid;
			border-width: 2px;
		}
		:host > div.msg {
			border: none;
		}
		:host .msg .heading kol-icon {
			font-size: 1.5em;
			margin: var(--spacing-2xs);
		}
		:host .msg .heading > div {
			padding: var(--spacing-2xs);
		}
		:host .card {
			padding-bottom: 1.5rem;
			padding-inline-end: 0.5rem;
			padding-inline-start: 1.5rem;
			padding-top: 1.5rem;
		}
		:host .card .heading {
			gap: 0.5rem;
		}
		:host .card .content {
			margin-left: 2.5rem;
		}
		:host .card .heading kol-icon {
			font-size: 2rem;
		}
		:host .default {
			border-color: var(--color-grey);
		}
		:host .default .heading kol-icon {
			color: var(--color-grey);
		}
		:host .error {
			border-color: var(--color-red);
		}
		:host .error .heading kol-icon {
			color: var(--color-red);
		}
		:host .info {
			border-color: var(--color-blue);
		}
		:host .info .heading kol-icon {
			color: var(--color-blue);
		}
		:host .success {
			border-color: var(--color-green);
		}
		:host .success .heading kol-icon {
			color: var(--color-green);
		}
		:host .warning {
			border-color: var(--color-orange);
		}
		:host .warning .heading kol-icon {
			color: var(--color-orange);
		}
	`,"KOL-CARD":Ze`
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: white;
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 calc(var(--spacing-2xs) / 2) var(--color-black);
		}
		:host kol-heading-wc {
			display: inline-flex;
			font-style: normal;
			font-weight: 700;
			font-size: 1.25em;
			line-height: 1.75em;
		}
		:host div.header {
			padding: var(--spacing-m) var(--spacing-m) var(--spacing-xs) var(--spacing-m);
		}
		:host div.content {
			padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
			overflow: hidden;
		}
		:host div.footer {
			padding: var(--spacing-xs) var(--spacing-m);
		}
		:host > div > div.content + div.footer {
			border-top: 2px solid var(--color-blue);
		}
	`,"KOL-INPUT-CHECKBOX":Ze`
		.checkbox-container {
			justify-content: flex-start;
		}
		input[type='checkbox'] {
			background-color: var(--color-white);
			border-width: 2px;
			border-style: solid;
			color: var(--color-grey);
			line-height: 1.5em;
			font-size: 1rem;
		}
		input[type='checkbox']:focus {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		input[type='checkbox'] {
			border-color: var(--color-grey-75);
		}
		input[type='checkbox']:checked {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
		}
		input[type='checkbox']:hover {
			border-color: var(--color-blue);
		}
		input[type='checkbox']:checked:hover {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.error input[type='checkbox'] {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:hover {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked:hover {
			background-color: var(--color-red-1xx);
			border-color: var(--color-red-1xx);
		}
		.error.required label > span::after {
			color: var(--color-red);
		}
		.default .icon {
			margin-left: 0.2rem;
		}
		.default.checked .icon {
			color: var(--color-white);
		}

		.switch input[type='checkbox'] {
			display: block;
		}
		.switch input[type='checkbox']::before,
		.switch input[type='checkbox']:indeterminate::before {
			background-color: var(--color-grey-75);
		}
		.switch input[type='checkbox']:hover::before,
		.switch input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-blue);
		}
		.switch input[type='checkbox']:checked::before,
		.switch input[type='checkbox']:checked:hover::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']::before {
			background-color: var(--color-red);
		}
		.switch.error input[type='checkbox']:checked::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-red-1xx);
		}
		kol-input {
			gap: var(--spacing-xs);
		}
		.button {
			gap: var(--spacing-xs) 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
		}
		.hint {
			font-size: 0.875rem;
		}
		.button:focus-within {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,"KOL-INPUT-COLOR":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-FILE":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			margin: 1px;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-EMAIL":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-NUMBER":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-DATE":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-PASSWORD":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-TEXT":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-SELECT":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-TEXTAREA":Ze`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		kol-input .counter {
			order: 5;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-TABLE":Ze`
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		caption {
			padding: 0.5em;
		}
		th {
			font-weight: normal;
			color: var(--color-midnight);
		}
		:host table thead tr:first-child th,
		:host table thead tr:first-child td {
			border-width: 0;
			border-top-width: 2px;
			border-style: solid;
			border-color: var(--color-ice);
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		table,
		:host table thead tr:last-child th,
		:host table thead tr:last-child td {
			border-width: 0;
			border-bottom-width: 2px;
			border-style: solid;
			border-color: var(--color-ice);
		}
		th {
			background-color: var(--color-white);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5em;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		tbody tr:nth-child(odd) {
			background-color: var(--color-grey-10);
		}
		th,
		td {
			padding: 0.5em;
		}
		th[aria-sort='ascending'],
		th[aria-sort='descending'] {
			font-weight: 700;
		}
		:host > div:last-child {
			padding: 0.5em;
		}
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			display: grid;
			align-items: center;
			justify-items: center;
			gap: 1em;
		}
		@media (min-width: 1024px) {
			:host > div:last-child,
			:host > div:last-child > div:last-child {
				grid-auto-flow: column;
			}
			:host > div:last-child kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,"KOL-TABS":Ze`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		kol-button-group-wc {
			border-bottom: 1px solid var(--color-grey-25);
			margin-bottom: -1px;
		}
		kol-button-group-wc button {
			border: none;
			margin-bottom: -1px;
		}
		kol-button-group-wc button kol-span-wc {
			padding: 0.5rem;
			min-height: 44px;
			min-width: 44px;
		}
		kol-button-group-wc button.selected kol-span-wc {
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
			border-bottom-color: white;
			border-top-color: var(--color-blue);
			box-shadow: 0 -3px var(--color-blue);
			font-weight: var(--font-weight-bold);
			color: var(--color-blue);
		}
		kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
			color: var(--color-blue-130);
		}
		kol-button-group-wc button:focus kol-span-wc {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,"KOL-LINK":Ze`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,"KOL-BUTTON-LINK":Ze`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,"KOL-SPIN":Ze`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: var(--color-blue-80);
			}
		}
	`,"KOL-INPUT-RADIO":Ze`
		fieldset {
			border: 0;
			gap: 0.5rem;
			flex-wrap: wrap;
		}
		fieldset kol-alert {
			order: 1;
		}
		fieldset .hint {
			order: 2;
		}
		fieldset kol-alert {
			order: 3;
		}
		fieldset kol-input {
			order: 4;
		}
		.radio-input-wrapper {
			display: flex;
			align-items: center;
		}
		.radio-label {
			padding-left: 0.5rem;
		}
		input[type='radio'] {
			outline: 2px solid var(--color-grey-75);
			outline-offset: 2px;
		}
		input[type='radio']:before {
			display: none;
		}
		input[type='radio']:checked {
			border-color: var(--color-blue);
			border-width: 7px;
		}
		input[type='radio']:focus {
			outline-color: var(--color-blue);
		}
		input[type='radio']:not(:disabled):hover {
			border-color: var(--color-blue);
		}
		label,
		legend {
			color: var(--color-grey);
		}
		legend {
			font-weight: var(--font-weight-bold);
		}
		.error input[type='radio'] {
			border: 2px solid var(--color-red);
		}
		.error input[type='radio']:before {
			display: none;
		}
		.error input[type='radio']:checked {
			border-color: var(--color-red);
			border-width: 7px;
		}
		.error input[type='radio']:not(:disabled):hover {
			border-color: var(--color-red-1xx);
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-xs));
			order: 1;
			width: 100%;
		}
		.hint {
			font-size: 0.875rem;
			order: 4;
		}
	`,"KOL-INPUT-RANGE":Ze`
		.inputs-wrapper {
			gap: 1rem;
		}
	`,"KOL-SKIP-NAV":Ze`
		kol-link-wc > a > kol-span-wc {
			border-radius: 4px;
			gap: 0.5rem;
			line-height: 1rem;
			padding: 0.75rem;
			background-color: #0e47cb;
			color: #fff;
			cursor: pointer;
		}
	`,"KOL-SPLIT-BUTTON":Ze`
		.popover {
			background: #fff;
		}
	`,"KOL-TOAST-CONTAINER":Ze`
		:host {
			top: 1rem;
			right: 1rem;
			width: 440px;
			max-width: 100%;
		}
		.toast {
			display: block;
			background: #fff;
			margin-top: 1rem;
		}
		.alert {
			display: block;
		}
	`}),Ye=e=>e.join(""),Qe=Me.createTheme("itzbund",{GLOBAL:Ye`
		:host {
			--border-color: var(--color-anthrazit);
			--border-radius: 0.125rem;
			--color-anthrazit: #333;
			--color-jade: #f3f7fb;
			--color-weiss: #fff;
			--color-petrol: #007a89;
			--color-achat: #0b4d59;
			--color-teal: #056773;
			--color-fluorit: #66ddec;
			--color-rotton: rgba(188, 0, 0, 1);
			--color-rotton-20: rgba(188, 0, 0, 0.2);
			--color-gras: #138510;
			--color-warn: #f0541e;
			--color-blut: var(--color-rotton);
			--color-input-bg-default: #e8edf2;
			--gradient-petrol-achat: linear-gradient(67deg, var(--color-petrol), var(--color-achat));
			--color-citrin: #d4c912;
			--color-umber: #494500;
			--color-gelb: #fff443;
			--color-lichtgelb: #eeff6c;
			--gradient-gelb-citrin: linear-gradient(67deg, var(--color-gelb), var(--color-citrin));
			--font-family-sans: BundesSans Web;
			--font-family-serif: BundesSerif Web;
			--font-size: 16px;
			--spacing: 0.125em;
			--kolibri-spacing: calc(2 * var(--spacing));
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			font-family: var(--font-family); /* font-size: var(--font-size); */
		}
		* {
			box-sizing: border-box;
		}
		*:not(i) {
			font-family: var(--font-family);
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: var(--font-family);
			font-size: var(--font-size);
			margin: 0;
			padding: 0;
		}
		*[tabindex]:focus,
		a:focus,
		button:focus,
		input:focus,
		select:focus,
		summary:focus,
		textarea:focus {
			cursor: pointer;
			outline-color: var(--color-petrol);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.25em;
		}
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
	`,"KOL-BUTTON":Ye`
		button {
			background-color: transparent;
		}
		a,
		button {
			border-radius: 2rem !important;
			font-family: var(--font-family-sans);
			/* text-transform: uppercase; */
		}
		a > kol-span-wc,
		button > kol-span-wc {
			border-radius: 2rem;
			border-style: solid;
			min-width: 44px;
			min-height: 44px;
			border-width: var(--spacing);
			font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
			padding: 0 1rem;
		}
		.button a.hide-label > kol-span-wc,
		.button button.hide-label > kol-span-wc {
			padding: 0 0.5rem;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		kol-link-wc.primary > a > kol-span-wc,
		kol-link-wc.primary > a:disabled:hover > kol-span-wc,
		button.primary > kol-span-wc,
		button.primary:disabled:hover > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.primary > a:hover > kol-span-wc,
		kol-link-wc.primary > a:focus > kol-span-wc,
		button.primary:hover > kol-span-wc,
		button.primary:focus > kol-span-wc {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
		}
		kol-link-wc.secondary > a > kol-span-wc,
		kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
		button.secondary > kol-span-wc,
		button.secondary:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-petrol);
			color: var(--color-petrol);
		}
		kol-link-wc.secondary > a:hover > kol-span-wc,
		kol-link-wc.secondary > a:focus > kol-span-wc,
		button.secondary:hover > kol-span-wc,
		button.secondary:focus > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.normal > a > kol-span-wc,
		kol-link-wc.normal > a:disabled:hover > kol-span-wc,
		button.normal > kol-span-wc,
		button.normal:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-anthrazit);
			color: var(--color-anthrazit);
		}
		kol-link-wc.normal > a:hover > kol-span-wc,
		kol-link-wc.normal > a:focus > kol-span-wc,
		button.normal:hover > kol-span-wc,
		button.normal:focus > kol-span-wc {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		kol-link-wc.danger > a > kol-span-wc,
		kol-link-wc.danger > a:disabled:hover > kol-span-wc,
		button.danger > kol-span-wc,
		button.danger:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-blut);
			color: var(--color-blut);
		}
		kol-link-wc.danger > a:hover > kol-span-wc,
		kol-link-wc.danger > a:focus > kol-span-wc,
		button.danger:hover > kol-span-wc,
		button.danger:focus > kol-span-wc {
			background-color: var(--color-blut);
			border-color: var(--color-blut);
			color: var(--color-weiss);
		}
		kol-link-wc.ghost > a > kol-span-wc,
		kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
		button.ghost > kol-span-wc,
		button.ghost:disabled:hover > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: transparent;
			color: var(--color-anthrazit);
		}
		kol-link-wc.ghost > a:hover > kol-span-wc,
		kol-link-wc.ghost > a:focus > kol-span-wc,
		button.ghost:hover > kol-span-wc,
		button.ghost:focus > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: var(--color-ghost);
			color: var(--color-anthrazit);
		}
	`,"KOL-BUTTON-GROUP":Ye`
		:host > kol-button-group-wc {
			display: inline-flex;
			flex-wrap: wrap;
			gap: 0.25rem;
		}
	`,"KOL-LINK-BUTTON":Ye`
		a,
		button {
			border-radius: 2rem !important;
			font-family: var(--font-family-sans);
			/* text-transform: uppercase; */
		}
		a > kol-span-wc,
		button > kol-span-wc {
			border-radius: 2rem;
			border-style: solid;
			min-width: 44px;
			min-height: 44px;
			border-width: var(--spacing);
			font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
			padding: 0 1rem;
		}
		.button a.hide-label > kol-span-wc,
		.button button.hide-label > kol-span-wc {
			padding: 0 0.5rem;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		kol-link-wc.primary > a > kol-span-wc,
		kol-link-wc.primary > a:disabled:hover > kol-span-wc,
		button.primary > kol-span-wc,
		button.primary:disabled:hover > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.primary > a:hover > kol-span-wc,
		kol-link-wc.primary > a:focus > kol-span-wc,
		button.primary:hover > kol-span-wc,
		button.primary:focus > kol-span-wc {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
		}
		kol-link-wc.secondary > a > kol-span-wc,
		kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
		button.secondary > kol-span-wc,
		button.secondary:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-petrol);
			color: var(--color-petrol);
		}
		kol-link-wc.secondary > a:hover > kol-span-wc,
		kol-link-wc.secondary > a:focus > kol-span-wc,
		button.secondary:hover > kol-span-wc,
		button.secondary:focus > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.normal > a > kol-span-wc,
		kol-link-wc.normal > a:disabled:hover > kol-span-wc,
		button.normal > kol-span-wc,
		button.normal:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-anthrazit);
			color: var(--color-anthrazit);
		}
		kol-link-wc.normal > a:hover > kol-span-wc,
		kol-link-wc.normal > a:focus > kol-span-wc,
		button.normal:hover > kol-span-wc,
		button.normal:focus > kol-span-wc {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		kol-link-wc.danger > a > kol-span-wc,
		kol-link-wc.danger > a:disabled:hover > kol-span-wc,
		button.danger > kol-span-wc,
		button.danger:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-blut);
			color: var(--color-blut);
		}
		kol-link-wc.danger > a:hover > kol-span-wc,
		kol-link-wc.danger > a:focus > kol-span-wc,
		button.danger:hover > kol-span-wc,
		button.danger:focus > kol-span-wc {
			background-color: var(--color-blut);
			border-color: var(--color-blut);
			color: var(--color-weiss);
		}
		kol-link-wc.ghost > a > kol-span-wc,
		kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
		button.ghost > kol-span-wc,
		button.ghost:disabled:hover > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: transparent;
			color: var(--color-anthrazit);
		}
		kol-link-wc.ghost > a:hover > kol-span-wc,
		kol-link-wc.ghost > a:focus > kol-span-wc,
		button.ghost:hover > kol-span-wc,
		button.ghost:focus > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: var(--color-ghost);
			color: var(--color-anthrazit);
		}
	`,"KOL-PAGINATION":Ye`
		.button {
			border-radius: 2rem;
			font-family: var(--font-family-sans);
		}
		.button-inner {
			background-color: var(--color-weiss);
			border-radius: 2rem;
			border: var(--spacing) solid var(--color-anthrazit);
			color: var(--color-anthrazit);
			font-size: inherit;
			gap: 0.25em;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 0 1rem;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
			transition-timing-function: ease-in-out;
		}
		.hide-label .button-inner {
			padding: 0 0.5rem;
		}
		.button:not(:disabled):hover .button-inner,
		.button:focus .button-inner {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		.button:disabled .button-inner {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.selected .button-inner {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
			color: var(--color-weiss);
			font-weight: bold;
			opacity: 1 !important;
			text-decoration: underline;
		}
	`,"KOL-BUTTON-LINK":Ye`
		kol-link-wc a,
		kol-button-wc button {
			text-decoration-line: none;
		}
		a,
		button {
			background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
			background-repeat: no-repeat;
			background-position: left 0 bottom 0;
			background-size: 25% 0.25ex;
			border-radius: var(--spacing);
			color: var(--color-petrol);
			font-family: var(--font-family-sans);
			font-size: inherit;
			/* text-transform: uppercase; */
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		a:focus,
		a:hover,
		button:focus,
		button:hover {
			background-size: 100% 0.25ex;
			color: var(--color-achat);
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		a.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		a.skip:focus {
			background-color: white;
			box-shadow: 0 0 0.5rem 0.5rem white;
			left: unset;
			position: unset;
		}
	`,"KOL-INPUT-TEXT":Ye`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-PASSWORD":Ye`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-NUMBER":Ye`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-DATE":Ye`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-EMAIL":Ye`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-FILE":Ye`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-TEXTAREA":Ye`
		textarea:hover,
		textarea:focus {
			border-color: var(--default-border-hover);
			outline-color: var(--primary) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--default-letter);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		textarea.error {
			background-color: var(--danger-light) !important;
			border-color: var(--danger);
		}
		textarea {
			width: 100%;
			color: var(--default-letter);
			border-width: 1px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
			border-color: var(--kolibri-color-normal);
			border-radius: 0;
			background-color: #e8edf2 !important;
		}
		textarea::placeholder {
			color: var(--default-border);
		}
		textarea:read-only,
		textarea:disabled {
			cursor: not-allowed;
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		.kol-required span::after {
			content: '*';
		}
		kol-alert {
			margin-top: var(--spacing);
			display: block;
		}
	`,"KOL-ALERT":Ye`
		:host {
			--kolibri-border-width: 1px;
		}
		:host .default {
			border-color: var(--color-anthrazit);
		}
		.heading {
			gap: 0.5rem;
		}
		.default .heading-icon {
			background-color: var(--color-anthrazit);
		}
		:host .error {
			border-color: var(--color-rotton);
		}
		.error .heading-icon {
			background-color: var(--color-rotton);
		}
		:host .info {
			border-color: var(--color-petrol);
		}
		.info .heading-icon {
			background-color: var(--color-petrol);
		}
		:host .success {
			border-color: var(--color-gras);
		}
		:host .success .heading-icon {
			background-color: var(--color-gras);
		}
		:host .warning {
			border-color: var(--color-warn);
		}
		.warning .heading-icon {
			background-color: var(--color-warn);
		}
	`,"KOL-HEADING":Ye`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			line-height: 1em;
			margin: 0;
			padding: 0;
		}
		.headline-h1 {
			font-family: var(--font-family-serif);
			font-size: 54px;
			font-weight: bold;
		}
		.headline-h2 {
			font-family: var(--font-family-serif);
			font-size: 32px;
			font-weight: bold;
		}
		.headline-h3 {
			font-family: var(--font-family-serif);
			font-size: 26px;
			font-weight: bold;
		}
		.headline-h4 {
			font-family: var(--font-family-serif);
			font-size: 20px;
			font-weight: normal;
		}
		.headline-h5 {
			font-family: var(--font-family-serif);
			font-size: 17px;
			font-weight: bold;
		}
		.headline-h6 {
			font-family: var(--font-family-sans);
			font-size: 17px;
			font-weight: normal;
		}
	`,"KOL-BADGE":Ye`
		:host {
			display: inline-block;
		}
		:host > span {
			border-radius: 0.3125rem;
			display: inline-flex;
		}
		:host > span kol-button-wc {
			border-left: 1px solid rgba(0, 0, 0, 0.25);
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.5rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
		:host button {
			border-radius: 0 var(--spacing) var(--spacing) 0;
		}
	`,"KOL-INDENTED-TEXT":Ye`
		:host > div {
			background: var(--color-white);
			border-left: none;
			box-shadow: -4px 0px 0px var(--color-petrol);
			padding: 0.25em 0.5em;
			width: 100%;
		}
	`,"KOL-LINK":Ye`
		kol-link-wc a,
		kol-button-wc button {
			text-decoration-line: none;
		}
		a,
		button {
			background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
			background-repeat: no-repeat;
			background-position: left 0 bottom 0;
			background-size: 25% 0.25ex;
			border-radius: var(--spacing);
			color: var(--color-petrol);
			font-family: var(--font-family-sans);
			font-size: inherit;
			/* text-transform: uppercase; */
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		a:focus,
		a:hover,
		button:focus,
		button:hover {
			background-size: 100% 0.25ex;
			color: var(--color-achat);
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		a.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		a.skip:focus {
			background-color: white;
			box-shadow: 0 0 0.5rem 0.5rem white;
			left: unset;
			position: unset;
		}
	`,"KOL-BREADCRUMB":Ye`
		li > span {
			font-weight: bold;
			/* text-transform: uppercase; */
		}
	`,"KOL-SPIN":Ye`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: #fc0;
			}
		}
	`,"KOL-PROGRESS":Ye`
		:host progress,
		:host span {
			display: block;
			height: 0px;
			overflow: hidden;
			width: 0px;
		}
		svg line:first-child,
		svg circle:first-child {
			fill: transparent;
			stroke: var(--color-fluorit);
		}
		svg line:last-child,
		svg circle:last-child {
			stroke: var(--color-achat);
			fill: transparent;
		}
		progress {
			display: none;
		}
	`,"KOL-SELECT":Ye`
		select:hover,
		select:focus {
			border-color: var(--default-border-hover);
			outline-color: var(--primary) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--default-letter);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		select.error {
			background-color: var(--danger-light) !important;
			border-color: var(--danger);
		}
		select {
			width: 100%;
			color: var(--default-letter);
			border-width: 1px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
			border-color: var(--kolibri-color-normal);
			border-radius: 0;
			background-color: #e8edf2 !important;
		}
		select:disabled {
			cursor: not-allowed;
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		option {
			height: 2em;
		}
		select:not([multiple]) option {
			padding: 0.5em;
		}
		kol-alert {
			margin-top: var(--spacing);
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
	`,"KOL-INPUT-COLOR":Ye`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-ACCORDION":Ye`
		:host > div {
			font-family: var(--font-family);
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			display: grid;
			border-color: var(--kolibri-border-color);
			border-width: 1px;
			border-style: solid;
			border-radius: 0.25rem;
		}
		:host > div > kol-heading-wc {
			font-weight: 700;
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		:host > div > kol-heading-wc button {
			cursor: pointer;
			width: 100%;
			margin: 0;
			display: flex;
			gap: 0.5em;
			border: 0;
			align-items: center;
			overflow: hidden;
			font-size: inherit;
			line-height: 1.75em;
			background-color: transparent;
			padding: 0.5rem;
		}
		:host > div[part*='open'] > kol-heading-wc button {
			padding-bottom: 0;
		}
		:host > div[part*='open'] > kol-heading-wc button kol-icon {
			width: 1em;
		}
		:host > div div[part='header'],
		:host > div[part*='open'] div[part='content'] {
			margin: 0;
		}
		:host > div div[part='header'] {
			padding-left: 2rem;
		}
		:host > div[part*='open'] div[part='content'] {
			margin: 0;
			padding: 0 1rem 1rem 2.25rem;
		}
		:host > div > kol-heading-wc button kol-icon::part(icon) {
			color: var(--color-midnight);
		}
		button {
			cursor: pointer;
			font-weight: inherit;
			font-size: inherit;
			line-height: inherit;
		}
		.content {
			padding: 0.5rem;
		}
		:host > div > kol-heading-wc button kol-icon::part(close)::before {
			font-family: 'Font Awesome 6 Free';
			content: '\\f077';
		}
		:host > div > kol-heading-wc button kol-icon::part(open)::before {
			font-family: 'Font Awesome 6 Free';
			content: '\\f078';
		}
	`,"KOL-TABLE":Ye`
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		:host > div:last-child {
			border-style: solid;
			border-width: 1px;
			border-color: var(--border-color);
		}
		table {
			width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
		}
		table,
		tr,
		th,
		td {
			border: 0 solid var(--border-color);
		}
		tr {
			border-top-width: 1px;
		}
		tr:nth-child(even) {
			background-color: #f2f2f2;
		}
		th,
		td {
			border-right-width: 1px;
			padding: 0.25em 0.5em;
		}
		th {
			background-color: #eee;
		}
		.table-sort-button .button {
			font-weight: bold;
		}
		:host > div.pagination {
			padding: 0.5em;
		}
		:host > div.pagination,
		:host > div.pagination > div:last-child {
			display: grid;
			align-items: center;
			justify-items: center;
			gap: 0.5em;
		}
		@media (min-width: 1024px) {
			:host > div.pagination,
			:host > div.pagination > div:last-child {
				grid-auto-flow: column;
			}
			:host > div.pagination kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,"KOL-NAV":Ye`
		:host .hidden {
			display: none;
		}
		:host > div > nav ul {
			list-style: none;
			margin: 0px;
			padding: 0px;
			border-radius: var(--border-radius);
			background-color: var(--color-petrol);
		}
		:host > div > nav ul > li {
			border-radius: var(--border-radius);
			overflow: hidden;
			padding: 0.125em;
		}
		:host > div > nav ul > li[part*='vertical'] + li {
			border-radius: 0;
			border-top: 0.1em dotted white;
		}
		:host > div > nav ul > li[part*='vertical selected'] {
			border-right: 0.375em solid var(--color-citrin);
		}
		:host > div > nav ul > li[part*='horizontal'] + li {
			border-radius: 0;
			border-left: 0.1em dotted white;
		}
		:host > div > nav ul > li[part*='horizontal selected'] {
			border-bottom: 0.375em solid var(--color-citrin);
		}
		:host > div > nav ul > li > div {
			height: 100%;
		}
		:host > div > nav kol-link-wc {
			width: 100%; /*height: 100%;font-weight: 600;*/
			display: block;
		}
		:host > div > nav kol-link-wc a {
			border-radius: var(--border-radius);
			background-color: var(--color-petrol);
			border: 1px solid transparent;
			grid: flex;
			line-height: 2em;
			padding: 0.5em;
			color: white;
			height: 100%;
			-webkit-box-align: center;
			align-items: center;
			display: flex;
			cursor: pointer;
			text-decoration: inherit;
		}
		:host > div > nav kol-link-wc[exportparts*='selected'] a {
			background-color: var(--color-achat);
			font-weight: 700;
		}
		:host > div > nav kol-link-wc a kol-icon.mr-2 {
			margin-right: calc(2 * 2 * var(--spacing));
		}
		:host > div > nav kol-link-wc a kol-icon.ml-2 {
			margin-left: calc(2 * 2 * var(--spacing));
		}
		:host > div > nav kol-link-wc a:focus,
		:host > div > nav kol-link-wc a:hover {
			border: 1px solid white;
			background-color: var(--color-fluorit);
			color: var(--color-anthrazit);
		} /* compact button */
		:host > div > div:last-child {
			margin-top: 0.5em;
			width: 100%;
			text-align: center;
		}
		:host > div > nav kol-link-wc a.text-center {
			display: grid;
			align-items: center;
			justify-items: center;
		} /* horizontal */
		ul.flex {
			display: flex;
		}
		li > div > div.absolute {
			position: absolute;
		}
		kol-span-wc {
			justify-items: baseline;
		}
	`,"KOL-CARD":Ye`
		:host > div {
			background-color: white;
			border-color: var(--border-color);
			border-style: solid;
			border-width: 1px;
			border-radius: calc(2 * var(--border-radius));
			width: 100%;
			height: 100%;
		}
		kol-heading {
			padding: 0.5rem;
			display: block;
			border-bottom-style: solid;
			border-bottom-color: var(--border-color);
			border-bottom-width: 1px;
		}
		:host > div > div {
			display: block;
			padding: 0.5rem;
		}
		:host > div > div:last-child {
			display: block;
			padding: 0.5rem;
			border-top-style: solid;
			border-top-color: var(--color-achat);
			border-top-width: 1px;
		}
	`,"KOL-INPUT-CHECKBOX":Ye`
		.checkbox-container {
			justify-content: flex-start;
		}
		input {
			color: var(--default-letter);
			border-color: var(--default-border);
			border-width: 2px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		input:hover {
			border-color: var(--color-petrol);
		} /* NEU */
		kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
		}
		kol-input.default {
			grid-template-columns: calc(6 * 2 * var(--spacing)) auto;
		}
		.switch {
			grid-template-columns: calc(13 * 2 * var(--spacing)) auto;
		}
		.button {
			gap: 0.5rem 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-input > div.input {
			display: inline-flex;
			order: 1;
		}
		kol-input > div.input input {
			margin: 0px;
		}
		kol-input > label {
			order: 2;
			padding-left: calc(2 * 2 * var(--spacing));
		}
		kol-input > kol-alert.error {
			order: 3;
			padding-top: 0.25em;
			grid-column: span 2 / auto;
		} /* CHECKBOX */
		input[type='checkbox'] {
			appearance: none;
			background-color: white;
			cursor: pointer;
			transition: 0.5s;
		}
		input[type='checkbox']:checked {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
		}
		.default input[type='checkbox'] {
			height: calc(6 * 2 * var(--spacing));
			min-width: calc(6 * 2 * var(--spacing));
			width: calc(6 * 2 * var(--spacing));
		}

		.default .icon {
			margin-left: 0.25rem;
		}
		.default.checked .icon {
			color: var(--color-weiss);
		}

		.switch input[type='checkbox'] {
			display: block;
			min-width: 3.2em;
			width: 3.2em;
			height: 1.7em;
			position: relative;
		}
		.switch input[type='checkbox']:before {
			/* border-radius: 0.25em; */
			-webkit-transition: 0.5s;
			-moz-transition: 0.5s;
			-ms-transition: 0.5s;
			transition: 0.5;
			width: 1.2em;
			height: 1.2em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			background-color: black;
			position: absolute;
		}
		.switch input[type='checkbox']:checked:before {
			transform: translateX(1.5em);
			background-color: white;
		}
		.switch input[type='checkbox']:indeterminate:before {
			transform: translateX(0.75em);
			background-color: var(--color-petrol);
		}
		.switch:is(:not(.checked), .indeterminate) .icon {
			color: #fff;
		}
		.disabled {
			opacity: 0.33;
		}
		kol-input span.hint {
			grid-column: span 2;
			font-style: italic;
			color: gray;
			display: block;
			order: 3;
			padding: 0 var(--spacing);
		}
		.button:focus-within {
			border-radius: 2rem;
			outline-color: var(--color-achat) !important;
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
		}
	`,"KOL-INPUT-RADIO":'/* INPUT */\n\t:host input:focus {\n\t\toutline-color: var(--color-achat) !important;\n\t\toutline-offset: 2px;\n\t\toutline-style: solid;\n\t\toutline-width: 3px;\n\t}\n\tlabel {\n\t\tcolor: var(--color-anthrazit);\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n\t\tgap: 8px;\n\t\twidth: 100%;\n\t}\n\tinput {\n\t\twidth: 100%;\n\t\tcolor: var(--color-anthrazit);\n\t\tborder-color: var(--default-border);\n\t\tborder-width: 2px;\n\t\tborder-style: solid;\n\t\tborder-radius: 5px; /* padding: 10px 14px; */\n\t\tline-height: 24px;\n\t\tfont-size: 16px;\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-achat);\n\t}\n\tkol-alert {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t}\n\t.kol-required span::after {\n\t\tcontent: "*";\n\t} /* RADIO */\n\tfieldset {\n\t\tborder: 0px;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tflex-wrap: wrap;\n\t}\n\tfieldset.horizontal {\n\t\tgap: 1rem;\n\t}\n\tfieldset legend {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tline-height: 1.5em;\n\t}\n\t.radio-input-wrapper, .input {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tgap: 0.5em;\n\t\tmargin-top: 0.25em;\n\t\tmargin-bottom: 0.25em;\n\t\talign-items: center;\n\t\tposition: relative;\n\t}\n\t.radio-label {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\t.radio-label span {\n\t\tmargin-top: 0.125em;\n\t}\n\t.radio-input-wrapper input[type="radio"] {\n\t\tappearance: none;\n\t\ttransition: 0.5s;\n\t\tborder-radius: 100%;\n\t\theight: calc(6 * 2 * var(--spacing));\n\t\tmin-width: calc(6 * 2 * var(--spacing));\n\t\twidth: calc(6 * 2 * var(--spacing));\n\t}\n\t.radio-input-wrapper input[type="radio"]:checked:before {\n\t\tbox-shadow: 0 0 0.1rem black;\n\t\tbackground-color: var(--color-petrol);\n\t}\n\t.radio-input-wrapper input[type="radio"]:disabled {\n\t\tbackground-color: var(--color-input-bg-default);\n\t\tborder-color: #999;\n\t\tcursor: not-allowed;\n\t}\n\tkol-alert {\n\t\twidth: 100%:\n\t}',"KOL-TOAST-CONTAINER":":host {\n\t\ttop: 1rem;\n\t\twidth: 750px;\n\t\tmax-width: 100%;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t}\n\t.toast {\n\t\tbackground: #fff;\n\t\tmargin-top: 1rem;\n\t}","KOL-TABS":':host > div {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t}\n\t:host kol-button-group-wc {\n\t\tdisplay: flex;\n\t\tbackground-color: var(--color-petrol);\n\t}\n\t:host kol-button-group-wc > div {\n\t\tdisplay: inline-flex;\n\t}\n\t:host kol-button-group-wc > div + div {\n\t\tmargin-left: 0.25em;\n\t}\n\t:host > div > div {\n\t\tpadding: 0.25em;\n\t\tborder: 1px solid var(--border-color);\n\t}\n\tbutton {\n\t\tbox-sizing: border-box;\n\t\tfont-size: inherit;\n\t\tline-height: 1.25em;\n\t\tcursor: pointer;\n\t\tborder-width: 2px;\n\t\tbox-shadow: 0 0 0.25em gray;\n\t\twidth: inherit;\n\t\toverflow: hidden;\n\t\tborder-style: solid;\n\t\tpadding: calc(4 * var(--spacing));\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\ttext-align: center;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t}\n\tkol-button-wc button.selected,\n\tkol-button-wc[aria-selected="true"] button {\n\t\tbackground-color: white;\n\t\tborder-bottom-width: 0.25em !important;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-color: var(--color-citrin) !important;\n\t}\n\tbutton > kol-span-wc span {\n\t\tdisplay: flex;\n\t\tgap: 0.25em;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\tbutton:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n\tbutton.primary,\n\tbutton.primary:disabled:hover {\n\t\tbackground-color: var(--kolibri-color-primary);\n\t\tborder-color: var(--kolibri-color-primary);\n\t\tcolor: white;\n\t}\n\tbutton.primary:hover,\n\tbutton.primary:focus {\n\t\tcolor: var(--kolibri-color-primary);\n\t}\n\tbutton.secondary,\n\tbutton.secondary:disabled:hover {\n\t\tbackground-color: var(--kolibri-color-secondary);\n\t\tborder-color: var(--kolibri-color-secondary);\n\t\tcolor: white;\n\t}\n\tbutton.secondary:hover,\n\tbutton.secondary:focus {\n\t\tcolor: var(--kolibri-color-secondary);\n\t}\n\tbutton.normal,\n\tbutton.normal:disabled:hover {\n\t\tbackground-color: var(--color-petrol);\n\t\tborder-color: var(--color-petrol);\n\t\tcolor: white;\n\t}\n\tbutton.normal:hover,\n\tbutton.normal:focus {\n\t\tcolor: var(--color-petrol);\n\t}\n\tbutton.danger,\n\tbutton.danger:disabled:hover {\n\t\tbackground-color: var(--kolibri-color-danger);\n\t\tborder-color: var(--kolibri-color-danger);\n\t\tcolor: white;\n\t}\n\tbutton.danger:hover,\n\tbutton.danger:focus {\n\t\tcolor: var(--kolibri-color-danger);\n\t}\n\tbutton.ghost,\n\tbutton.ghost:disabled:hover {\n\t\tbackground-color: white;\n\t\tborder-color: var(--kolibri-color-ghost);\n\t\tcolor: var(--kolibri-color-ghost);\n\t}\n\tbutton.ghost:hover,\n\tbutton.ghost:focus {\n\t\tbackground-color: var(--kolibri-color-ghost);\n\t\tcolor: white;\n\t}\n\tbutton:hover,\n\tbutton:focus {\n\t\tbackground-color: white;\n\t\tbox-shadow: 0 0 0.25em black;\n\t}\n\tbutton:active {\n\t\toutline: 0 !important;\n\t\tbox-shadow: none !important;\n\t}\n\t.close-button {\n\t\tfont-size: 25%;\n\t\theight: fit-content;\n\t\twidth: 0;\n\t}\n\t.close-button button {\n\t\twidth: 1rem;\n\t\tposition: relative;\n\t\theight: 1rem;\n\t\tleft: -4.25em;\n\t\ttop: 0.25em;\n\t}\n\t:host > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left {\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t:host > div.tabs-align-right {\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc,\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc,\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\torder: 1;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div,\n\t:host > div.tabs-align-left kol-button-group-wc > div > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n\t\twidth: 100%;\n\t}\n\t:host > div.tabs-align-bottom kol-button-group-wc div,\n\t:host > div.tabs-align-top kol-button-group-wc div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}',"KOL-SKIP-NAV":"kol-link-wc > a > kol-span-wc {\n\t\tborder-radius: 2rem;\n  \tborder-style: solid;\n\t\tgap: 0.5rem;\n\t\tline-height: 1rem;\n\t  padding: 0 1rem;\n\t\tbackground-color: var(--color-petrol);\n\t\tborder-color: var(--color-petrol);\n\t\tcolor: var(--color-weiss);\n\t\tcursor: pointer;\n\t}","KOL-SPLIT-BUTTON":".popover {\n\t\tbackground: #fff;\n\t}"}),Je=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),Xe=e=>{if("undefined"==typeof document)return!0;{const t="on"+(e=>"doubleclick"===e?"dblclick":e)(e);let n=t in document;if(!n){const e=document.createElement("div");e.setAttribute(t,"return;"),n="function"==typeof e[t]}return n}},et=(e,t,n)=>{const r=e.__events||(e.__events={}),o=r[t];o&&e.removeEventListener(t,o),e.addEventListener(t,r[t]=function(e){n&&n.call(this,e)})},tt=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},nt=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))},rt=(e,t,r,o)=>{void 0!==o&&o();const a=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(""),l=class extends n.Component{constructor(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(e){((e,t,n={})=>{if(e instanceof Element){const r=((e,t,n)=>{const r=t.className||t.class,o=n.className||n.class,a=tt(e),l=tt(r?r.split(" "):[]),i=tt(o?o.split(" "):[]),c=[];return a.forEach((e=>{l.has(e)?(c.push(e),l.delete(e)):i.has(e)||c.push(e)})),l.forEach((e=>c.push(e))),c.join(" ")})(e.classList,t,n);""!==r&&(e.className=r),Object.keys(t).forEach((n=>{if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n)if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const r=n.substring(2),o=r[0].toLowerCase()+r.substring(1);Xe(o)||et(e,o,t[n])}else e[n]=t[n],"string"==typeof t[n]&&e.setAttribute(Je(n),t[n])}))}})(this.componentEl,this.props,e)}render(){const{children:t,forwardedRef:o,style:a,className:l,ref:i,...c}=this.props;let s=Object.keys(c).reduce(((e,t)=>{const n=c[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const r=t.substring(2).toLowerCase();"undefined"!=typeof document&&Xe(r)&&(e[t]=n)}else{const r=typeof n;"string"!==r&&"boolean"!==r&&"number"!==r||(e[Je(t)]=n)}return e}),{});r&&(s=r(this.props,s));const f={...s,ref:nt(o,this.setComponentElRef),style:a};return(0,n.createElement)(e,f,t)}static get displayName(){return a}};return t&&(l.contextType=t),((e,t)=>{const r=(t,r)=>n.createElement(e,{...t,forwardedRef:r});return r.displayName=t,n.forwardRef(r)})(l,a)},ot=rt("kol-abbr"),at=rt("kol-accordion"),lt=rt("kol-alert"),it=rt("kol-avatar"),ct=rt("kol-badge"),st=rt("kol-breadcrumb"),ft=rt("kol-button"),dt=rt("kol-button-group"),ut=rt("kol-button-link"),pt=rt("kol-card"),bt=rt("kol-details"),ht=rt("kol-form"),mt=rt("kol-heading"),gt=rt("kol-icon"),vt=rt("kol-image"),yt=rt("kol-indented-text"),wt=rt("kol-input-checkbox"),kt=rt("kol-input-color"),_t=rt("kol-input-date"),xt=rt("kol-input-email"),Et=rt("kol-input-file"),St=rt("kol-input-number"),Ot=rt("kol-input-password"),Tt=rt("kol-input-radio"),Lt=rt("kol-input-range"),At=rt("kol-input-text"),$t=rt("kol-kolibri"),Nt=rt("kol-link"),Ct=rt("kol-link-button"),zt=rt("kol-link-group"),Pt=rt("kol-logo"),jt=rt("kol-modal"),It=rt("kol-nav"),Rt=rt("kol-pagination"),Ft=rt("kol-progress"),Bt=rt("kol-quote"),Dt=rt("kol-select"),Mt=rt("kol-skip-nav"),Ut=rt("kol-spin"),Kt=rt("kol-split-button"),Ht=rt("kol-table"),Vt=rt("kol-tabs"),qt=rt("kol-textarea"),Zt=rt("kol-version"),Wt={abbr:{basic:()=>n.createElement(n.Fragment,null,n.createElement("p",null,"Ich bin ",n.createElement(ot,{_label:"Abkürzung"},"z.B.")," eine Abkürzung."),n.createElement("p",null,"Ich bin"," ",n.createElement(ot,{_label:"Abkürzung",_tooltipAlign:"right"},"z.B.")," ","eine Abkürzung (rechts)."),n.createElement("p",null,"Ich bin"," ",n.createElement(ot,{_label:"Abkürzung",_tooltipAlign:"bottom"},"z.B.")," ","eine Abkürzung (unten)."),n.createElement("p",null,"Ich bin"," ",n.createElement(ot,{_label:"Abkürzung",_tooltipAlign:"left"},"z.B.")," ","eine Abkürzung (links)."),n.createElement("p",null,"Ich bin"," ",n.createElement(ot,{_label:"Abkürzung",_tooltipAlign:"top"},"z.B.")," ","eine Abkürzung (oben)."))}},Gt=[{heading:"Überschrift Accordion Tab 1",content:"Inhalt Accordion Tab 1"},{heading:"Überschrift Accordion Tab 2",content:"Inhalt Accordion Tab 2"},{heading:"Überschrift Accordion Tab 3",content:"Inhalt Accordion Tab 3"}],Yt={accordion:{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(at,{_label:"Überschrift Accordion Tab 1",_level:1},n.createElement("div",{slot:""},"Inhalt Accordion Tab 1")),n.createElement(at,{_label:"Überschrift Accordion Tab 2",_level:1,_open:!0},n.createElement("div",{slot:""},"Inhalt Accordion Tab 2")),n.createElement(at,{_label:"Überschrift Accordion Tab 3",_level:1},n.createElement("div",{slot:""},"Inhalt Accordion Tab 3"))),headlines:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(at,{_label:"Überschrift Level 1",_level:1},n.createElement("div",{slot:""},"Inhalt Accordion Tab 1")),n.createElement(at,{_label:"Überschrift Level 2",_level:2},n.createElement("div",{slot:""},"Inhalt Accordion Tab 2")),n.createElement(at,{_label:"Überschrift Level 3",_level:3},n.createElement("div",{slot:""},"Inhalt Accordion Tab 3")),n.createElement(at,{_label:"Überschrift Level 4",_level:4},n.createElement("div",{slot:""},"Inhalt Accordion Tab 4")),n.createElement(at,{_label:"Überschrift Level 5",_level:5},n.createElement("div",{slot:""},"Inhalt Accordion Tab 5")),n.createElement(at,{_label:"Überschrift Level 6",_level:6},n.createElement("div",{slot:""},"Inhalt Accordion Tab 6"))),list:()=>n.createElement("div",{className:"grid gap-4"},Gt.map((({heading:e,content:t},r)=>n.createElement(at,{_label:e,_level:1,_open:1===r,key:r},n.createElement("p",null,t)))))}},Qt=({level:e,type:t,variant:r})=>n.createElement(n.Fragment,null,n.createElement(lt,{_label:"Das ist die Überschrift des Alert.",_level:e,_type:t,_variant:r},"Das ist der Text des Alert."),n.createElement(lt,{_type:t,_variant:r},"In diesem Alert wird nur der Text ohne Überschrift verwendet."),n.createElement(lt,{_label:"Das ist die Überschrift des Alert.",_level:e,_type:t,_variant:r,_hasCloser:!0},"Das ist der Text des Alert. Mit Schließen-Button."),n.createElement(lt,{_type:t,_variant:r,_hasCloser:!0},"In diesem Alert wird nur der Text ohne Überschrift verwendet. Mit Schließen-Button.")),Jt=({variant:e})=>n.createElement("div",{className:"grid gap-4"},n.createElement(Qt,{level:1,type:"default",variant:e}),n.createElement(Qt,{level:2,type:"error",variant:e}),n.createElement(Qt,{level:3,type:"info",variant:e}),n.createElement(Qt,{level:4,type:"success",variant:e}),n.createElement(Qt,{level:5,type:"warning",variant:e})),Xt={alert:{basic:Jt,"card-msg":()=>n.createElement("div",{className:"grid"},n.createElement(Jt,{variant:"card"})),html:()=>n.createElement("div",null,n.createElement(lt,{_label:"Ausgabe von HTML-Code im Alert",_type:"info"},n.createElement("h2",{className:"mt-2 mb-3"},"Hier wird eine H2-Überschrift ausgegeben"),n.createElement("div",{className:"grid gap-4 sm:grid-cols-2"},n.createElement("div",null,n.createElement("h4",null,"Text in einer linken Spalte"),n.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sed fugiat dolorum ratione et, ullam officia nobis nihil debitis, consectetur dicta accusantium. Vitae debitis, quibusdam vel recusandae deleniti placeat dolorem?")),n.createElement("div",null,n.createElement("h4",null,"Text in einer rechten Spalte"),n.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod beatae officiis, velit nam dicta quae repellat perspiciatis explicabo illo. Possimus, molestiae deleniti! Exercitationem blanditiis ducimus similique tempora ratione consequuntur eaque!")))))}},en={avatar:{basic:()=>n.createElement("div",{className:"flex flex-wrap gap-4"},n.createElement(it,{_src:"https://www.w3schools.com/howto/img_avatar.png",_label:"Elke Mustermann"}),n.createElement(it,{_label:"Elke Mustermann "}),n.createElement(it,{_label:"Marianne"}))}};var tn=Object.defineProperty,nn=Object.getOwnPropertySymbols,rn=Object.prototype.hasOwnProperty,on=Object.prototype.propertyIsEnumerable,an=(e,t,n)=>t in e?tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ln=(e,t)=>{for(var n in t||(t={}))rn.call(t,n)&&an(e,n,t[n]);if(nn)for(var n of nn(t))on.call(t,n)&&an(e,n,t[n]);return e};const cn=e=>({_smartButton:{_icons:"codicon codicon-close",_label:`Entfernen von ${e}`,_on:{onClick:()=>alert("clicked")}}}),sn={badge:{basic:()=>n.createElement("div",{className:"flex gap-2"},n.createElement(ct,{_label:"schwarz"}),n.createElement(ct,{_color:"#86ffc6",_label:"türkis"}),n.createElement(ct,{_color:"#06539e",_label:"blau"}),n.createElement(ct,{_color:"#ae0000",_label:"rot"}),n.createElement(ct,{_color:"#8b008b",_label:"lila"})),button:()=>n.createElement(n.Fragment,null,n.createElement("div",{className:"mb-4"},n.createElement(mt,{_label:"Badge",_level:2})),n.createElement("div",{className:"flex gap-2"},n.createElement(ct,ln({_label:"schwarz"},cn("schwarz"))),n.createElement(ct,ln({_label:"türkis",_color:"#86ffc6"},cn("türkis"))),n.createElement(ct,ln({_label:"blau",_color:"#06539e"},cn("blau"))),n.createElement(ct,ln({_label:"rot",_color:"#ae0000"},cn("rot"))),n.createElement(ct,ln({_label:"lila",_color:"#8b008b"},cn("lila")))))}},fn={breadcrumb:{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(st,{_label:"Breadcrumb aus Text-Links",_links:[{_label:"Startseite",_href:"#/"},{_label:"Unterseite der Startseite",_href:"#/unterseite"},{_label:"Unterseite der Unterseite",_href:"#/unterseite/unterseite"}]}),n.createElement(st,{_label:"Breadcrumb aus Icons- oder Text-Links",_links:[{_label:"Startseite",_icons:"codicon codicon-home",_hideLabel:!0,_href:"#/"},{_label:"Unterseite der Startseite mit sehr langem Link-Test",_href:"#/unterseite"},{_label:"Unterseite der Unterseite",_href:"#/unterseite/unterseite"}]}),n.createElement(st,{_label:"Breadcrumb aus Icons- und Text-Links",_links:[{_label:"Startseite",_icons:"codicon codicon-home",_href:"#/"},{_label:"Unterseite der Startseite und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_href:"#/unterseite"},{_label:"Unterseite der Unterseite",_href:"#/unterseite/unterseite"}]}))}},dn={"button-group":{basic:()=>n.createElement(dt,null,n.createElement(ft,{_label:"Active",_variant:"primary"}),n.createElement(ft,{_label:"Not active",_disabled:!0}),n.createElement(ft,{_label:"Active",_icons:"codicon codicon-home",_variant:"danger"}),n.createElement(ft,{_label:"Active",_icons:"codicon codicon-trash",_hideLabel:!0,_variant:"ghost"}))}},un={"button-link":{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement("p",null,"In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enthält. ",n.createElement(ut,{_label:"Simple Link"})," Er wird standardmäßig als"," ",n.createElement("strong",null,"inline-Element")," ausgegeben."),n.createElement("p",null,"In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird."," ",n.createElement(ut,{style:{display:"inline-block",margin:"1rem",border:"1px dotted"},_label:"Simple Link"}),". Damit kann man mir per CSS-Styles eine Breite, eine Höhe und andere Eigenschaften zuweisen.",n.createElement("br",null),n.createElement("br",null),"Danach folgt ein Link, der als block-Element ausgegeben wird.",n.createElement(ut,{style:{display:"block"},_label:"Simple Link"}),"Daher gehe ich über die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch."),n.createElement("p",null,n.createElement(ut,{_label:"Disabled ButtonLink",_disabled:!0}))),icons:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(ut,{_icons:"codicon codicon-home",_label:"Ich bin ein Link mit Icon links"}),n.createElement(ut,{_icons:{right:"codicon codicon-home"},_label:"Ich bin ein Link mit Icon rechts"}),n.createElement(ut,{_icons:{top:"codicon codicon-home"},_label:"Ich bin ein Link mit Icon oben"}),n.createElement(ut,{_icons:{bottom:"codicon codicon-home"},_label:"Ich bin ein Link mit Icon unten"}),n.createElement(ut,{_icons:{top:"codicon codicon-home",right:"codicon codicon-home",bottom:"codicon codicon-home",left:"codicon codicon-home"},_label:"Ich bin ein Link mit allen Icons"})),image:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(ut,{_label:"Ich bin ein Link, der als Text gerendert wird"}),n.createElement("br",null),n.createElement(ut,{_label:""},n.createElement("img",{alt:"Darstellung des KoliBri-Theming",slot:"expert",src:"abgrenzung.jpg",width:"300"})))}};var pn=Object.defineProperty,bn=Object.getOwnPropertySymbols,hn=Object.prototype.hasOwnProperty,mn=Object.prototype.propertyIsEnumerable,gn=(e,t,n)=>t in e?pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const vn=e=>{const t=(0,n.useRef)(null);return n.createElement(e.RefComponent,((e,t)=>{for(var n in t||(t={}))hn.call(t,n)&&gn(e,n,t[n]);if(bn)for(var n of bn(t))mn.call(t,n)&&gn(e,n,t[n]);return e})({ref:t},e))};var yn=Object.defineProperty,wn=Object.defineProperties,kn=Object.getOwnPropertyDescriptors,_n=Object.getOwnPropertySymbols,xn=Object.prototype.hasOwnProperty,En=Object.prototype.propertyIsEnumerable,Sn=(e,t,n)=>t in e?yn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,On=(e,t)=>{for(var n in t||(t={}))xn.call(t,n)&&Sn(e,n,t[n]);if(_n)for(var n of _n(t))En.call(t,n)&&Sn(e,n,t[n]);return e},Tn=(e,t)=>wn(e,kn(t));const Ln=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"flex flex-wrap gap-4"},n.createElement(ft,Tn(On({},e),{_icons:"codicon codicon-home",_label:"Primary",_variant:"primary"})),n.createElement(ft,Tn(On({},e),{_icons:"codicon codicon-heart",_label:"Secondary",_variant:"secondary"})),n.createElement(ft,Tn(On({},e),{_icons:"codicon codicon-hubot",_label:"Normal",_variant:"normal"})),n.createElement(ft,Tn(On({},e),{_icons:"codicon codicon-hubot",_label:"Tertiary",_variant:"tertiary"})),n.createElement(ft,Tn(On({},e),{_icons:"codicon codicon-trash",_label:"Danger",_variant:"danger"})),n.createElement(ft,Tn(On({ref:t},e),{_icons:"codicon codicon-reactions",_label:"Ghost",_variant:"ghost"})))}));var An=Object.defineProperty,$n=Object.defineProperties,Nn=Object.getOwnPropertyDescriptors,Cn=Object.getOwnPropertySymbols,zn=Object.prototype.hasOwnProperty,Pn=Object.prototype.propertyIsEnumerable,jn=(e,t,n)=>t in e?An(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,In=(e,t)=>{for(var n in t||(t={}))zn.call(t,n)&&jn(e,n,t[n]);if(Cn)for(var n of Cn(t))Pn.call(t,n)&&jn(e,n,t[n]);return e},Rn=(e,t)=>$n(e,Nn(t));const Fn=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement("h1",null,"Button"),n.createElement("section",null,n.createElement("h2",null,"Button"),n.createElement(Ln,In({},e))),n.createElement("section",null,n.createElement("h2",null,"Button (disabled)"),n.createElement(Ln,Rn(In({},e),{_disabled:!0}))),n.createElement("section",null,n.createElement("h2",null,"Button (hideLabel)"),n.createElement(Ln,Rn(In({ref:t},e),{_hideLabel:!0}))),n.createElement("section",null,n.createElement("h2",null,"Button (disabled, hideLabel)"),n.createElement(Ln,Rn(In({},e),{_disabled:!0,_hideLabel:!0}))))}));var Bn=Object.defineProperty,Dn=Object.getOwnPropertySymbols,Mn=Object.prototype.hasOwnProperty,Un=Object.prototype.propertyIsEnumerable,Kn=(e,t,n)=>t in e?Bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hn=(e,t)=>{for(var n in t||(t={}))Mn.call(t,n)&&Kn(e,n,t[n]);if(Dn)for(var n of Dn(t))Un.call(t,n)&&Kn(e,n,t[n]);return e};const Vn={_icons:"codicon codicon-home",_hideLabel:!0,_on:{onClick:()=>alert("Klick!")}};var qn=Object.defineProperty,Zn=Object.getOwnPropertySymbols,Wn=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable,Yn=(e,t,n)=>t in e?qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qn=(e,t)=>{for(var n in t||(t={}))Wn.call(t,n)&&Yn(e,n,t[n]);if(Zn)for(var n of Zn(t))Gn.call(t,n)&&Yn(e,n,t[n]);return e};const Jn={className:"w-8rem",_on:{onClick:()=>alert("Klick!")}},Xn={button:{basic:()=>n.createElement(vn,{RefComponent:Fn}),"hide-label":()=>n.createElement("div",{className:"grid gap-14"},n.createElement("div",{className:"flex flex-wrap gap-14"},n.createElement(ft,Hn({_label:"Primary",_variant:"primary",_tooltipAlign:"top"},Vn)),n.createElement(ft,Hn({_label:"Secondary",_variant:"secondary",_tooltipAlign:"right"},Vn)),n.createElement(ft,Hn({_label:"Normal",_variant:"normal",_tooltipAlign:"bottom"},Vn)),n.createElement(ft,Hn({_label:"Danger",_variant:"danger",_tooltipAlign:"left"},Vn)),n.createElement(ft,Hn({_label:"Ghost",_variant:"ghost"},Vn))),n.createElement("div",{className:"flex flex-wrap gap-14"},n.createElement(ft,Hn({_disabled:!0,_label:"Primary",_variant:"primary"},Vn)),n.createElement(ft,Hn({_disabled:!0,_label:"Secondary",_variant:"secondary"},Vn)),n.createElement(ft,Hn({_disabled:!0,_label:"Normal",_variant:"normal"},Vn)),n.createElement(ft,Hn({_disabled:!0,_label:"Danger",_variant:"danger"},Vn)),n.createElement(ft,Hn({_disabled:!0,_label:"Ghost",_variant:"ghost"},Vn)))),icons:()=>n.createElement(ft,{_icons:{bottom:"codicon codicon-arrow-down",left:{icon:"codicon codicon-arrow-left"},top:{style:{"font-size":"200%",transform:"rotate(45deg)"},icon:"codicon codicon-arrow-up"},right:"codicon codicon-arrow-right"},_label:"Label",_on:{onClick:(e,t)=>alert("Klick!")}}),width:()=>n.createElement("div",{className:"grid gap-14"},n.createElement("div",{className:"flex flex-wrap gap-14"},n.createElement(ft,Qn({_label:"Primary",_variant:"primary"},Jn)),n.createElement(ft,Qn({_label:"Secondary",_variant:"secondary"},Jn)),n.createElement(ft,Qn({_label:"Normal",_variant:"normal"},Jn)),n.createElement(ft,Qn({_label:"Danger",_variant:"danger"},Jn)),n.createElement(ft,Qn({_label:"Ghost",_variant:"ghost"},Jn))),n.createElement("div",{className:"flex flex-wrap gap-14"},n.createElement(ft,Qn({_disabled:!0,_label:"Primary",_variant:"primary"},Jn)),n.createElement(ft,Qn({_disabled:!0,_label:"Secondary",_variant:"secondary"},Jn)),n.createElement(ft,Qn({_disabled:!0,_label:"Normal",_variant:"normal"},Jn)),n.createElement(ft,Qn({_disabled:!0,_label:"Danger",_variant:"danger"},Jn)),n.createElement(ft,Qn({_disabled:!0,_label:"Ghost",_variant:"ghost"},Jn)))),"access-key":()=>n.createElement("div",{className:"flex flex-wrap gap-4"},n.createElement(ft,{_label:"Mit S access key",_accessKey:"S"}),n.createElement(ft,{_label:"Sehr kleines s",_accessKey:"s"}),n.createElement(ft,{_label:"Access key kommt nicht in label vor",_accessKey:"x"}),n.createElement(ft,{_label:"access key ohne label",_hideLabel:!0,_accessKey:"s",_icons:"codicon codicon-dashboard"}),n.createElement(ft,{_label:"mit inline icons",_icons:{left:"codicon codicon-dashboard",right:"codicon codicon-dashboard"},_accessKey:"s"})),baselined:()=>n.createElement("div",{className:"inline-block"},n.createElement(ft,{_label:"Label-Text"}),n.createElement(ft,{_label:"Label-Text"}),n.createElement(ft,{_label:"Label-Text"}),n.createElement(ft,{_icons:"codicon codicon-reactions",_label:"Label-Text with Icon"}))}},er={display:"flex",justifyContent:"space-between",alignItems:"center",gap:".5rem"},tr={card:{basic:()=>n.createElement(pt,{_label:"Titel"},n.createElement("div",{slot:""},"Inhalt")),confirm:()=>n.createElement(pt,{"_has-footer":!0,_label:"Überschrift"},n.createElement("div",null,n.createElement("p",{className:"p-2"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur laudantium saepe ipsa atque officia cupiditate repudiandae harum earum aut doloribus autem libero exercitationem dolor ad, magni dignissimos ratione fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis qui animi nesciunt illo facere, doloribus sint cupiditate nihil dolorem voluptate ab esse! Ducimus ad est commodi molestias voluptas reiciendis."),n.createElement("div",{className:"flex gap-2 flex-justify-end"},n.createElement(ft,{className:"w-12rem",_variant:"primary",_label:"Speichern"}),n.createElement(ft,{className:"w-12rem",_variant:"secondary",_label:"Abbrechen"})))),flex:()=>n.createElement("div",{className:"grid grid-cols-2 gap-4"},n.createElement(pt,{_label:"Titel"},n.createElement("div",null,"Inhalt")),n.createElement(pt,{_label:"Titel",_hasCloser:!0},n.createElement("div",null,"Inhalt",n.createElement("br",null),"Inhalt")),n.createElement(pt,{_label:"Titel"},n.createElement("div",null,"Inhalt",n.createElement("br",null),"Inhalt",n.createElement("br",null),"Inhalt")),n.createElement(pt,{_label:"Titel"},n.createElement("div",null,"Inhalt")),n.createElement(pt,{_label:"Titel"},n.createElement("div",null,"Inhalt"))),selection:()=>n.createElement("div",{className:"flex flex-wrap gap-2"},n.createElement(pt,{_label:"DEBTI-25437/17-1",className:"lg:w-[calc(33.33%-16px)] md:w-[calc(50%-16px)] sm:w-full"},n.createElement("div",null,n.createElement("div",null,"TeCorp Endplatte",n.createElement("br",null),"VZTA"),n.createElement("div",null,n.createElement("div",null,n.createElement("img",{alt:"Darstellung des KoliBri-Theming",src:"abgrenzung.jpg",width:"100%"}))),n.createElement("div",null,n.createElement("div",{style:er},n.createElement(wt,{_label:"Auswählen"}),n.createElement(ft,{_variant:"primary",_label:"Öffnen"}))))),n.createElement(pt,{_label:"DEBTI-25437/17-1",className:"lg:w-[calc(33.33%-16px)] md:w-[calc(50%-16px)] sm:w-full"},n.createElement("div",null,n.createElement("div",null,"TeCorp Endplatte",n.createElement("br",null),"VZTA"),n.createElement("div",null,n.createElement("div",null,n.createElement("img",{alt:"Darstellung des KoliBri-Theming",src:"abgrenzung.jpg",width:"100%"}))),n.createElement("div",null,n.createElement("div",{style:er},n.createElement(wt,{_label:"Auswählen"}),n.createElement(ft,{_variant:"primary",_label:"Öffnen"}))))),n.createElement(pt,{_label:"DEBTI-25437/17-1",className:"lg:w-[calc(33.33%-16px)] md:w-[calc(50%-16px)] sm:w-full"},n.createElement("div",null,n.createElement("div",null,"TeCorp Endplatte",n.createElement("br",null),"VZTA"),n.createElement("div",null,n.createElement("div",null,n.createElement("img",{alt:"Darstellung des KoliBri-Theming",src:"abgrenzung.jpg",width:"100%"}))),n.createElement("div",null,n.createElement("div",{style:er},n.createElement(wt,{_label:"Auswählen"}),n.createElement(ft,{_variant:"primary",_label:"Öffnen"}))))))}},nr={details:{basic:()=>n.createElement("p",{className:"grid gap-4"},n.createElement(bt,{_label:"Nach Laden der Seite geschlossen"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),n.createElement(bt,{_label:"Nach Laden der Seite geöffnet",_open:!0},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."))}};var rr=l(2913);const or=["ecl-ec","ecl-eu","itzbund"],ar=e=>"string"==typeof e&&("bmf"===e||"default"===e||"ecl-ec"===e||"ecl-eu"===e||"itzbund"===e||"unstyled"===e),lr=[{label:"Unstyled (Uncolored)",value:"unstyled"},{label:"Bundesministerium der Finanzen (Tested)",value:"bmf"},{label:"Default (Tested)",value:"default"},{label:"European Commission (Draft)",value:"ecl-ec"},{label:"European Union (Draft)",value:"ecl-eu"},{label:"Informationstechnikzentrum Bund (Draft)",value:"itzbund"}],ir="2.0.3";var cr=Object.defineProperty;const sr=`public-ui.v${ir}`,fr={darkMode:!1,theme:"default"};let dr;function ur(e){dr=e;const t=dr.getItem(sr);try{const e=JSON.parse(t);"object"==typeof e&&null!==e&&(fr.darkMode=!0===e.darkMode,ar(e.theme)&&(fr.theme=e.theme))}catch(e){}}ur(new class{constructor(){var e;((e,t,n)=>{t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(this,"symbol"!=typeof(e="store")?e+"":e,new Map)}setItem(e,t){this.store.set(e,t)}getItem(e){return this.store.get(e)||null}});const pr=()=>`${fr.theme}`,br=e=>{var t;if(ar(e))return null==(t=lr.find((t=>t.value===e)))?void 0:t.label;throw new Error(`The theme identifier "${e}" is not valid or an available option.`)},hr={horizontal:[[{label:"",rowSpan:2,asTd:!0},{label:"Werktage",colSpan:5},{label:"Wochenende",colSpan:2}],[{key:"montag",label:"Montag",render:(e,t)=>{const n=document.createElement("kol-button");n.setAttribute("_label",t.label),n.setAttribute("data-theme","default"),n.setAttribute("style","font-size: 75%"),n.setAttribute("exportparts","button,normal"),n._on={onClick:console.log},e.innerHTML="",e.appendChild(n)},sort:e=>e.sort(((e,t)=>e.montag<t.montag?-1:e.montag>t.montag?1:0)),sortDirection:"ASC",textAlign:"right"},{key:"dienstag",label:"Dienstag",render:(e,t)=>{e.innerHTML=`<kol-badge _color="#060" _label="${t.label}"></kol-badge>`},sort:e=>e.sort(((e,t)=>e.dienstag<t.dienstag?-1:e.dienstag>t.dienstag?1:0)),sortDirection:"DESC"},{key:"mittwoch",label:"Mittwoch",render:(e,t)=>{e.innerHTML=`<kol-badge _color="#006" _label="${t.label}"></kol-badge>`}},{key:"donnerstag",label:"Donnerstag",render:(e,t)=>{e.innerHTML=`<kol-badge _color="#600" _label="${t.label}"></kol-badge>`}},{key:"freitag",label:"Freitag",render:(e,t)=>{e.innerHTML=`<kol-badge _color="#303" _label="${t.label}"></kol-badge>`}},{key:"samstag",label:"Samstag",render:(e,t)=>{e.innerHTML=`<kol-badge _color="#330" _label="${t.label}"></kol-badge>`}},{key:"sonntag",label:"Sonntag",render:(e,t)=>{e.innerHTML=`<kol-badge _color="#033" _label="${t.label}"></kol-badge>`}}]],vertical:[[{label:"Früh"},{label:"Mittag"},{label:"Abend"},{label:"Nacht"}]]},mr=[{montag:"Alex",dienstag:"Anna",mittwoch:"Amalia",donnerstag:"Arthur",freitag:"Alex",samstag:"Andrea",sonntag:"Arnold"},{montag:"Helena",dienstag:"Fabian",mittwoch:"Marie",donnerstag:"Ben",freitag:"Marcus",samstag:"Alex",sonntag:"Marcus"},{montag:"Fabian",dienstag:"Helena",mittwoch:"Fabian",donnerstag:"Maya",freitag:"Ben",samstag:"Alex",sonntag:"Helena"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Finn",dienstag:"Roger",mittwoch:"Christian",donnerstag:"Caspar",freitag:"David",samstag:"Bernard",sonntag:"Anna"},{montag:"Alex",dienstag:"Anna",mittwoch:"Amalia",donnerstag:"Arthur",freitag:"Alex",samstag:"Andrea",sonntag:"Arnold"},{montag:"Helena",dienstag:"Fabian",mittwoch:"Marie",donnerstag:"Ben",freitag:"Marcus",samstag:"Alex",sonntag:"Marcus"},{montag:"Fabian",dienstag:"Helena",mittwoch:"Fabian",donnerstag:"Maya",freitag:"Ben",samstag:"Alex",sonntag:"Helena"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Finn",dienstag:"Roger",mittwoch:"Christian",donnerstag:"Caspar",freitag:"David",samstag:"Bernard",sonntag:"Anna"},{montag:"Alex",dienstag:"Anna",mittwoch:"Amalia",donnerstag:"Arthur",freitag:"Alex",samstag:"Andrea",sonntag:"Arnold"},{montag:"Helena",dienstag:"Fabian",mittwoch:"Marie",donnerstag:"Ben",freitag:"Marcus",samstag:"Alex",sonntag:"Marcus"},{montag:"Fabian",dienstag:"Helena",mittwoch:"Fabian",donnerstag:"Maya",freitag:"Ben",samstag:"Alex",sonntag:"Helena"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Finn",dienstag:"Roger",mittwoch:"Christian",donnerstag:"Caspar",freitag:"David",samstag:"Bernard",sonntag:"Anna"},{montag:"Alex",dienstag:"Anna",mittwoch:"Amalia",donnerstag:"Arthur",freitag:"Alex",samstag:"Andrea",sonntag:"Arnold"},{montag:"Helena",dienstag:"Fabian",mittwoch:"Marie",donnerstag:"Ben",freitag:"Marcus",samstag:"Alex",sonntag:"Marcus"},{montag:"Fabian",dienstag:"Helena",mittwoch:"Fabian",donnerstag:"Maya",freitag:"Ben",samstag:"Alex",sonntag:"Helena"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Finn",dienstag:"Roger",mittwoch:"Christian",donnerstag:"Caspar",freitag:"David",samstag:"Bernard",sonntag:"Anna"},{montag:"Alex",dienstag:"Anna",mittwoch:"Amalia",donnerstag:"Arthur",freitag:"Alex",samstag:"Andrea",sonntag:"Arnold"},{montag:"Helena",dienstag:"Fabian",mittwoch:"Marie",donnerstag:"Ben",freitag:"Marcus",samstag:"Alex",sonntag:"Marcus"},{montag:"Fabian",dienstag:"Helena",mittwoch:"Fabian",donnerstag:"Maya",freitag:"Ben",samstag:"Alex",sonntag:"Helena"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Samuel",dienstag:"Selena",mittwoch:"Sandra",donnerstag:"Salim",freitag:"Robert",samstag:"Richard",sonntag:"Pamela"},{montag:"Finn",dienstag:"Roger",mittwoch:"Christian",donnerstag:"Caspar",freitag:"David",samstag:"Bernard",sonntag:"Anna"}],gr={handout:{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement("div",{className:"grid gap-4 grid-cols-[auto_1fr_1fr] items-center"},n.createElement($t,{className:"block w-75px",_labeled:!1}),n.createElement(mt,{_label:"",_level:1},n.createElement("span",{slot:"expert"},"Kolibri-Handout ",n.createElement("small",null,"for ",br(pr())))),n.createElement(bt,{_label:"Abstract",_open:!0},"The handout shows a selection of KoliBri components in the style of ",n.createElement("strong",null,br(pr())),". Since KoliBri offers self-contained, accessible web components that can be customized to your own corporate design using theming, you don't have to develop these components yourself. For more information read our documentation and follow us (",n.createElement(Nt,{_label:"https://github.com/public-ui/kolibri",_href:"https://github.com/public-ui/kolibri",_target:"_blank"}),").")),n.createElement("div",{className:"grid gap-4 grid-cols-12"},n.createElement(pt,{className:"col-span-2",_label:"Heading",_level:2},n.createElement("div",{slot:"",className:"grid gap-2 p-2"},n.createElement(mt,{_label:"Überschrift Stufe 1",_level:1}),n.createElement(mt,{_label:"Überschrift Stufe 2",_level:2}),n.createElement(mt,{_label:"Überschrift Stufe 3",_level:3}),n.createElement(mt,{_label:"Überschrift Stufe 4",_level:4}),n.createElement(mt,{_label:"Überschrift Stufe 5",_level:5}),n.createElement(mt,{_label:"Überschrift Stufe 6",_level:6}),n.createElement(mt,{_label:"Überschrift Stufe 6",_secondaryHeadline:"Unterüberricht",_level:6}))),n.createElement(pt,{className:"col-span-2",_label:"Abbreviation and Progress",_level:2},n.createElement("div",{slot:"",className:"grid gap-2 p-2"},n.createElement("p",null,"Ich bin eine"," ",n.createElement(ot,{_label:"Ausführliche Beschreibung",_tooltipAlign:"top"},"ABB")," ","mit Tooltip oben"),n.createElement("p",null,"Ich bin eine"," ",n.createElement(ot,{_label:"Ausführliche Beschreibung",_tooltipAlign:"right"},"ABB")," ","mit Tooltip rechts"),n.createElement("p",null,"Ich bin eine"," ",n.createElement(ot,{_label:"Ausführliche Beschreibung",_tooltipAlign:"bottom"},"ABB")," ","mit Tooltip unten"),n.createElement("p",null,"Ich bin eine"," ",n.createElement(ot,{_label:"Ausführliche Beschreibung",_tooltipAlign:"left"},"ABB")," ","mit Tooltip links"),n.createElement("div",{className:"grid grid-cols-2 items-center"},n.createElement(Ft,{_variant:"bar",_max:100,_value:33,_label:"Progress"}),n.createElement(Ft,{_variant:"cycle",_max:100,_value:66,_label:"Progress"})))),n.createElement(pt,{className:"col-span-3",_label:"Button, LinkButton and Tab",_level:2},n.createElement("div",{slot:"",className:"grid gap-2 p-2"},n.createElement(Vt,{_label:"",_selected:0,_tabs:[{_label:"Button"},{_label:"LinkButton"},{_label:"Disabled Tab",_disabled:!0}]},n.createElement("div",{className:"grid gap-2 py-2"},n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(ft,{_icons:{left:"codicon codicon-arrow-left"},_label:"primary",_variant:"primary"}),n.createElement(ft,{_disabled:!0,_icons:{left:"codicon codicon-arrow-left"},_label:"primary",_variant:"primary"}),n.createElement(ft,{_hideLabel:!0,_icons:"codicon codicon-arrow-left",_label:"primary",_variant:"primary"})),n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(ft,{_icons:{right:"codicon codicon-arrow-right"},_label:"secondary",_variant:"secondary"}),n.createElement(ft,{_disabled:!0,_icons:{right:"codicon codicon-arrow-right"},_label:"secondary",_variant:"secondary"}),n.createElement(ft,{_hideLabel:!0,_icons:"codicon codicon-arrow-right",_label:"secondary",_variant:"secondary"})),n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(ft,{_icons:{top:"codicon codicon-arrow-up"},_label:"danger",_variant:"danger"}),n.createElement(ft,{_disabled:!0,_icons:{top:"codicon codicon-arrow-up"},_label:"danger",_variant:"danger"}),n.createElement(ft,{_hideLabel:!0,_icons:"codicon codicon-arrow-up",_label:"danger",_variant:"danger"})),n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(ft,{_icons:{bottom:"codicon codicon-arrow-down"},_label:"normal",_variant:"normal"}),n.createElement(ft,{_disabled:!0,_icons:{bottom:"codicon codicon-arrow-down"},_label:"normal",_variant:"normal"}),n.createElement(ft,{_hideLabel:!0,_icons:"codicon codicon-arrow-down",_label:"normal",_variant:"normal"})),n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(ft,{_label:"ghost",_variant:"ghost"}),n.createElement(ft,{_disabled:!0,_label:"ghost",_variant:"ghost"}),n.createElement(ft,{_icons:"codicon codicon-home",_hideLabel:!0,_label:"ghost",_variant:"ghost"}))),n.createElement("div",{className:"grid gap-2 py-2"},n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(Ct,{_href:"#",_icons:{left:"codicon codicon-arrow-left"},_label:"primary",_variant:"primary"}),n.createElement(Ct,{_href:"#",_icons:{left:"codicon codicon-arrow-left"},_label:"primary",_variant:"primary"}),n.createElement(Ct,{_href:"#",_hideLabel:!0,_icons:"codicon codicon-arrow-left",_label:"primary",_variant:"primary"})),n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(Ct,{_href:"#",_icons:{right:"codicon codicon-arrow-right"},_label:"secondary",_variant:"secondary"}),n.createElement(Ct,{_href:"#",_icons:{right:"codicon codicon-arrow-right"},_label:"secondary",_variant:"secondary"}),n.createElement(Ct,{_href:"#",_hideLabel:!0,_icons:"codicon codicon-arrow-right",_label:"secondary",_variant:"secondary"})),n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(Ct,{_href:"#",_icons:{top:"codicon codicon-arrow-up"},_label:"danger",_variant:"danger"}),n.createElement(Ct,{_href:"#",_icons:{top:"codicon codicon-arrow-up"},_label:"danger",_variant:"danger"}),n.createElement(Ct,{_href:"#",_hideLabel:!0,_icons:"codicon codicon-arrow-up",_label:"danger",_variant:"danger"})),n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(Ct,{_href:"#",_icons:{bottom:"codicon codicon-arrow-down"},_label:"normal",_variant:"normal"}),n.createElement(Ct,{_href:"#",_icons:{bottom:"codicon codicon-arrow-down"},_label:"normal",_variant:"normal"}),n.createElement(Ct,{_href:"#",_hideLabel:!0,_icons:"codicon codicon-arrow-down",_label:"normal",_variant:"normal"})),n.createElement("div",{className:"grid gap-2 grid-cols-[4fr_4fr_1fr] justify-items-center"},n.createElement(Ct,{_href:"#",_label:"ghost",_variant:"ghost"}),n.createElement(Ct,{_href:"#",_label:"ghost",_variant:"ghost"}),n.createElement(Ct,{_href:"#",_icons:"codicon codicon-home",_hideLabel:!0,_label:"ghost",_variant:"ghost"})))))),n.createElement(pt,{className:"col-span-2",_label:"Accordion, Link and ButtonLink",_level:2},n.createElement("div",{slot:"",className:"grid gap-2 p-2"},n.createElement(at,{_label:"Links",_level:3,_open:!0},n.createElement("div",{className:"grid gap-2",slot:""},n.createElement(Nt,{_href:"#",_label:"Linktext"}),n.createElement(Nt,{_href:"#",_icons:"codicon codicon-home",_label:"Linktext mit Icon"}),n.createElement(Nt,{_href:"#",_icons:"codicon codicon-home",_hideLabel:!0,_label:"Linktext nur mit Icon"}),n.createElement(Nt,{_href:"/",_label:"Besuchter Link"}),n.createElement("p",null,"Ich bin ein ",n.createElement(Nt,{_href:"#",_label:"externer Link",_target:"w3c"})," im Fließtext."),n.createElement(Nt,{_href:"#",_label:""},n.createElement(Pt,{slot:"expert",class:"inline-flex w-50",_org:rr.d["Informationstechnikzentrum Bund"]})))),n.createElement(at,{_label:"ButtonLinks",_level:3},n.createElement("div",{className:"grid gap-2",slot:""},n.createElement(ut,{_label:"Linktext"}),n.createElement(ut,{_icons:"codicon codicon-home",_label:"Linktext mit Icon"}),n.createElement(ut,{_icons:"codicon codicon-home",_hideLabel:!0,_label:"Linktext nur mit Icon"}),n.createElement("p",null,"Ich bin ein ",n.createElement(ut,{_label:"Link"})," im Fließtext."),n.createElement(ut,{_label:""},n.createElement(Pt,{slot:"expert",class:"inline-flex w-50",_org:rr.d["Informationstechnikzentrum Bund"]})),n.createElement(ut,{_icons:{left:"codicon codicon-arrow-left",right:"codicon codicon-arrow-right",top:"codicon codicon-arrow-up",bottom:"codicon codicon-arrow-down"},_label:"Icons"}))))),n.createElement(pt,{className:"col-span-3",_label:"Alert",_level:2},n.createElement("div",{slot:"",className:"grid gap-2 p-2"},n.createElement(lt,{_label:"Default message",_type:"default"},"This is the text of the alert."),n.createElement(lt,{_type:"success"},"Success message text"),n.createElement(lt,{_type:"error",_hasCloser:!0},"This is a error message text."),n.createElement(lt,{_label:"Info card",_type:"info",_variant:"card"},"This is the text of the alert."),n.createElement(lt,{_label:"Warning card",_type:"warning",_hasCloser:!0,_variant:"card"},"This is the text of the alert."))),n.createElement(pt,{className:"col-span-2",_label:"Nav and Breadcrumb",_level:2},n.createElement("div",{slot:"",className:"grid gap-2 p-2"},n.createElement("div",null,n.createElement(It,{_label:"Main navigation",_links:[{_label:"Homepage",_icons:"codicon codicon-home",_href:"#/"},{_label:"2 Navigation point",_icons:"codicon codicon-home",_href:"#/untermenu"},{_active:!0,_label:"3 Navigation point",_href:"#abc",_icons:"codicon codicon-home",_children:[{_label:"3.1 Navigation point",_icons:"codicon codicon-home",_href:"#/"},{_label:"3.2 External navigation point",_icons:"codicon codicon-home",_href:"#abc",_target:"_blank"},{_label:"3.3 Navigation point",_href:"#abc",_icons:"codicon codicon-home",_children:[{_active:!0,_label:"3.3.1 Navigation point (active)",_icons:"codicon codicon-home",_href:"#abc"},{_label:"3.3.2 Navigation point",_icons:"codicon codicon-home",_href:"#abc"}]}]},{_label:"3 Navigation point",_icons:"codicon codicon-home",_href:"#abc"}],_hasCompactButton:!0})),n.createElement("div",null,n.createElement(st,{_label:"Breadcrumb aus Text-Links",_links:[{_label:"Startseite",_href:"#/"},{_label:"Unterseite der Startseite",_href:"#/unterseite"},{_label:"Unterseite der Unterseite",_href:"#/unterseite/unterseite"}]})))),n.createElement(pt,{className:"col-span-5",_label:"Input",_level:2},n.createElement(ht,{slot:""},n.createElement("div",{className:"grid gap-4 grid-cols-3 p-2"},n.createElement(kt,{_label:"Farbe"}),n.createElement(Et,{_label:"Datei hochladen"}),n.createElement(St,{_label:"Zahleneingabe"}),n.createElement(_t,{_type:"date",_label:"Datum"}),n.createElement(xt,{_icons:"{'left': 'codicon codicon-home'}",_error:"Test einer Fehlermeldung",_touched:!0,_label:"E-Mail-Adresse"}),n.createElement(At,{_hint:"Ich bin ein Hinweis.",_label:"Vorname"}),n.createElement(Ot,{_label:"Passwort"}),n.createElement(Dt,{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]",_label:"Stimmung"}),n.createElement(Lt,{_min:0,_max:50,_value:25,_label:"Schieberegler"}),n.createElement(Tt,{className:"herr-frau",_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]",_value:"1",_label:"Anrede"}),n.createElement("div",{className:"grid gap-4"},n.createElement(Tt,{_orientation:"horizontal",_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]",_value:"0",_label:"Anrede"}),n.createElement(wt,{_label:""},"Ich akzeptiere die ",n.createElement(ot,{_label:"Allgemeine Geschäftsbedingungen"},"AGB"),".")),n.createElement(qt,{_rows:4,_label:"Textarea"})))),n.createElement(pt,{className:"col-span-5",_label:"Table with Pagination",_level:2},n.createElement("div",{slot:"",className:"grid gap-2 p-2"},n.createElement(Ht,{_label:"Tabelle",_headers:hr,_data:mr,_pagination:!0})))),n.createElement(Zt,{_label:"5.0.2-test.2"}))}},vr={heading:{badge:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(mt,{_label:"",_level:1},n.createElement("span",{slot:"expert"},"Eine Überschrift mit einem ",n.createElement(ct,{_label:"Label"}))),n.createElement(mt,{_label:"",_level:2},n.createElement("span",{slot:"expert"},"Eine Überschrift mit einem ",n.createElement(ct,{_color:"#86ffc6",_label:"Label"}))),n.createElement(mt,{_label:"",_level:3},n.createElement("span",{slot:"expert"},"Eine Überschrift mit einem ",n.createElement(ct,{_color:"#06539e",_label:"Label"}))),n.createElement(mt,{_label:"",_level:4},n.createElement("span",{slot:"expert"},"Eine Überschrift mit einem ",n.createElement(ct,{_color:"#ae0000",_label:"Label"}))),n.createElement(mt,{_label:"",_level:5},n.createElement("span",{slot:"expert"},"Eine Überschrift mit einem ",n.createElement(ct,{_color:"#8b008b",_label:"Label"}))),n.createElement(mt,{_label:"",_level:6},n.createElement("span",{slot:"expert"},"Eine Überschrift mit einem ",n.createElement(ct,{_color:"#ffc0cb",_label:"Label"})))),basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(mt,{_label:"Ich bin eine H1-Überschrift",_level:1}),n.createElement(mt,{_label:"Ich bin eine H2-Überschrift",_level:2}),n.createElement(mt,{_label:"Ich bin eine H3-Überschrift",_level:3}),n.createElement(mt,{_label:"Ich bin eine H4-Überschrift",_level:4}),n.createElement(mt,{_label:"Ich bin eine H5-Überschrift",_level:5}),n.createElement(mt,{_label:"Ich bin eine H6-Überschrift",_level:6})),paragraph:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(mt,{_label:"Ich bin eine H1-Überschrift",_level:1}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."),n.createElement(mt,{_label:"Ich bin eine H2-Überschrift",_level:2}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."),n.createElement(mt,{_label:"Ich bin eine H3-Überschrift",_level:3}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."),n.createElement(mt,{_label:"Ich bin eine H4-Überschrift",_level:4}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."),n.createElement(mt,{_label:"Ich bin eine H5-Überschrift",_level:5}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."),n.createElement(mt,{_label:"Ich bin eine H6-Überschrift",_level:6}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."))}},yr={icon:{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(gt,{_label:"",_icons:"codicon codicon-home"}),n.createElement(gt,{style:{color:"red"},_label:"",_icons:"codicon codicon-home"}))}},wr={image:{basic:()=>n.createElement(vt,{className:"w-80%",_src:"abgrenzung.jpg",_alt:"Darstellung des KoliBri-Theming"})}},kr={"indented-text":{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),n.createElement(yt,null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),n.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."))}};var _r=Object.defineProperty,xr=Object.getOwnPropertySymbols,Er=Object.prototype.hasOwnProperty,Sr=Object.prototype.propertyIsEnumerable,Or=(e,t,n)=>t in e?_r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Tr=e=>n.createElement(ht,null,n.createElement("div",{className:"grid gap-4"},n.createElement(vn,((e,t)=>{for(var n in t||(t={}))Er.call(t,n)&&Or(e,n,t[n]);if(xr)for(var n of xr(t))Sr.call(t,n)&&Or(e,n,t[n]);return e})({},e)),n.createElement("div",{className:"flex gap-4"},n.createElement(ft,{_label:"Submit",_icons:"codicon codicon-arrow-right",_type:"submit",_variant:"primary"}),n.createElement(ft,{_label:"Bunte Icons",_icons:{left:{icon:"codicon codicon-heart-filled",style:{color:"#cc006e"}},right:{icon:"codicon codicon-squirrel",style:{color:"#b41b1b"}}},_type:"submit",_variant:"secondary"}),n.createElement(ft,{_label:"Reset",_type:"reset",_variant:"tertiary"}),n.createElement(ft,{_label:"Help",_type:"button",_variant:"ghost"})))),Lr="Ich bin eine Fehlermeldung!";var Ar=Object.defineProperty,$r=Object.defineProperties,Nr=Object.getOwnPropertyDescriptors,Cr=Object.getOwnPropertySymbols,zr=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable,jr=(e,t,n)=>t in e?Ar(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ir=(e,t)=>{for(var n in t||(t={}))zr.call(t,n)&&jr(e,n,t[n]);if(Cr)for(var n of Cr(t))Pr.call(t,n)&&jr(e,n,t[n]);return e},Rr=(e,t)=>$r(e,Nr(t));const Fr=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(wt,Rr(Ir({},e),{_icons:{unchecked:"codicon codicon-close"},_label:"Nicht ausgewählt",_value:!1,_required:!0})),n.createElement(wt,Rr(Ir({},e),{_icons:{unchecked:"codicon codicon-close"},_label:"Unbestimmt (Indeterminate)",_value:null,_indeterminate:!0})),n.createElement(wt,Rr(Ir({},e),{ref:t,_accessKey:"A",_checked:!0,_icons:{unchecked:"codicon codicon-close"},_label:"Ausgewählt",_tooltipAlign:"right",_value:!0})),n.createElement(wt,Rr(Ir({},e),{_disabled:!0,_icons:{unchecked:"codicon codicon-close"},_label:"Disabled",_value:!0,_hint:"Hint text"})),n.createElement(wt,Rr(Ir({},e),{_checked:!0,_disabled:!0,_label:"Checked and disabled"})),n.createElement(wt,Rr(Ir({},e),{_indeterminate:!0,_disabled:!0,_label:"Indeterminate and disabled"})),n.createElement(wt,Rr(Ir({},e),{_error:Lr,_icons:{unchecked:"codicon codicon-close"},_label:"Mit Fehler",_touched:!0,_value:!0,_hint:"Hint text"})))}));var Br=Object.defineProperty,Dr=Object.defineProperties,Mr=Object.getOwnPropertyDescriptors,Ur=Object.getOwnPropertySymbols,Kr=Object.prototype.hasOwnProperty,Hr=Object.prototype.propertyIsEnumerable,Vr=(e,t,n)=>t in e?Br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qr=(e,t)=>{for(var n in t||(t={}))Kr.call(t,n)&&Vr(e,n,t[n]);if(Ur)for(var n of Ur(t))Hr.call(t,n)&&Vr(e,n,t[n]);return e};const Zr=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Checkbox"),n.createElement(Fr,qr({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Checkbox (hideLabel)"),n.createElement(Fr,(r=qr({ref:t},e),Dr(r,Mr({_hideLabel:!0}))))));var r})),Wr={"input-checkbox":{basic:()=>n.createElement(Tr,{RefComponent:Zr}),switch:()=>n.createElement(Tr,{RefComponent:Zr,_variant:"switch"}),button:()=>n.createElement(Tr,{RefComponent:Zr,_variant:"button"})}};var Gr=Object.defineProperty,Yr=Object.defineProperties,Qr=Object.getOwnPropertyDescriptors,Jr=Object.getOwnPropertySymbols,Xr=Object.prototype.hasOwnProperty,eo=Object.prototype.propertyIsEnumerable,to=(e,t,n)=>t in e?Gr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,no=(e,t)=>{for(var n in t||(t={}))Xr.call(t,n)&&to(e,n,t[n]);if(Jr)for(var n of Jr(t))eo.call(t,n)&&to(e,n,t[n]);return e},ro=(e,t)=>Yr(e,Qr(t));const oo=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(kt,ro(no({},e),{_error:Lr,_icons:{left:"codicon codicon-symbol-color"},_label:"Color",_value:"#f08080"})),n.createElement(kt,ro(no({},e),{_error:Lr,_label:"Color with error",_suggestions:"['#000000','#f08080', '#0000ff','#00ff00']",_touched:!0})),n.createElement(kt,ro(no({},e),{ref:t,_accessKey:"C",_hint:"Hint text",_label:"Color with hint",_value:"#f08080"})),n.createElement(kt,ro(no({},e),{_disabled:!0,_label:"Color (Disabled)",_value:"#f08080"})))}));var ao=Object.defineProperty,lo=Object.defineProperties,io=Object.getOwnPropertyDescriptors,co=Object.getOwnPropertySymbols,so=Object.prototype.hasOwnProperty,fo=Object.prototype.propertyIsEnumerable,uo=(e,t,n)=>t in e?ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,po=(e,t)=>{for(var n in t||(t={}))so.call(t,n)&&uo(e,n,t[n]);if(co)for(var n of co(t))fo.call(t,n)&&uo(e,n,t[n]);return e};const bo=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Color"),n.createElement(oo,po({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Color (hideLabel)"),n.createElement(oo,(r=po({ref:t},e),lo(r,io({_hideLabel:!0}))))));var r})),ho={"input-color":{basic:()=>n.createElement(Tr,{RefComponent:bo})}};var mo=Object.defineProperty,go=Object.defineProperties,vo=Object.getOwnPropertyDescriptors,yo=Object.getOwnPropertySymbols,wo=Object.prototype.hasOwnProperty,ko=Object.prototype.propertyIsEnumerable,_o=(e,t,n)=>t in e?mo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xo=(e,t)=>{for(var n in t||(t={}))wo.call(t,n)&&_o(e,n,t[n]);if(yo)for(var n of yo(t))ko.call(t,n)&&_o(e,n,t[n]);return e},Eo=(e,t)=>go(e,vo(t));const So=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(_t,Eo(xo({},e),{_type:"date",_label:"Datumseingabe",_required:!0})),n.createElement(_t,Eo(xo({},e),{_type:"datetime-local",_label:"Local-Datetime (Standard)",_required:!0})),n.createElement(_t,Eo(xo({},e),{_step:1,_type:"datetime-local",_error:Lr,_label:"Local-Datetime (mit Sekunden)",_required:!0,_touched:!0})),n.createElement(_t,Eo(xo({},e),{_type:"month",_label:"Monat",_required:!0})),n.createElement(_t,Eo(xo({},e),{ref:t,_accessKey:"W",_type:"week",_label:"Woche",_required:!0})),n.createElement(_t,Eo(xo({},e),{_type:"time",_label:"Zeit (Standard)",_required:!0})),n.createElement(_t,Eo(xo({},e),{_step:1,_type:"time",_label:"Zeit (mit Sekunden)",_required:!0})),n.createElement(_t,Eo(xo({},e),{_readOnly:!0,_label:"Datumseingabe (Readonly)",_required:!0})),n.createElement(_t,Eo(xo({},e),{_disabled:!0,_label:"Datumseingabe (Disabled)",_required:!0})))}));var Oo=Object.defineProperty,To=Object.defineProperties,Lo=Object.getOwnPropertyDescriptors,Ao=Object.getOwnPropertySymbols,$o=Object.prototype.hasOwnProperty,No=Object.prototype.propertyIsEnumerable,Co=(e,t,n)=>t in e?Oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zo=(e,t)=>{for(var n in t||(t={}))$o.call(t,n)&&Co(e,n,t[n]);if(Ao)for(var n of Ao(t))No.call(t,n)&&Co(e,n,t[n]);return e};const Po=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Date"),n.createElement(So,zo({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Date (hideLabel)"),n.createElement(So,(r=zo({ref:t},e),To(r,Lo({_hideLabel:!0}))))));var r})),jo={"input-date":{basic:()=>n.createElement(Tr,{RefComponent:Po})}};var Io=Object.defineProperty,Ro=Object.defineProperties,Fo=Object.getOwnPropertyDescriptors,Bo=Object.getOwnPropertySymbols,Do=Object.prototype.hasOwnProperty,Mo=Object.prototype.propertyIsEnumerable,Uo=(e,t,n)=>t in e?Io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ko=(e,t)=>{for(var n in t||(t={}))Do.call(t,n)&&Uo(e,n,t[n]);if(Bo)for(var n of Bo(t))Mo.call(t,n)&&Uo(e,n,t[n]);return e},Ho=(e,t)=>Ro(e,Fo(t));const Vo=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(xt,Ho(Ko({},e),{_required:!0,_value:"test@mail.de",_error:Lr,_label:"E-Mail"})),n.createElement(xt,Ho(Ko({},e),{ref:t,_accessKey:"M",_placeholder:"elke@mustermann.de",_suggestions:"['test1@mail.de', 'test2@mail.de', 'test3@mail.de']",_label:"E-Mail (Liste)",_error:Lr,_touched:!0,_icons:{left:{icon:"codicon codicon-arrow-left"},right:{icon:"codicon codicon-arrow-right"}}})),n.createElement(xt,Ho(Ko({},e),{_disabled:!0,_value:"test@mail.de",_label:"E-Mail (Disabled)"})),n.createElement(xt,Ho(Ko({},e),{_readOnly:!0,_value:"test@mail.de",_label:"E-Mail (Readonly)"})))}));var qo=Object.defineProperty,Zo=Object.defineProperties,Wo=Object.getOwnPropertyDescriptors,Go=Object.getOwnPropertySymbols,Yo=Object.prototype.hasOwnProperty,Qo=Object.prototype.propertyIsEnumerable,Jo=(e,t,n)=>t in e?qo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xo=(e,t)=>{for(var n in t||(t={}))Yo.call(t,n)&&Jo(e,n,t[n]);if(Go)for(var n of Go(t))Qo.call(t,n)&&Jo(e,n,t[n]);return e};const ea=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Email"),n.createElement(Vo,Xo({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Email (hideLabel)"),n.createElement(Vo,(r=Xo({ref:t},e),Zo(r,Wo({_hideLabel:!0}))))));var r})),ta={"input-email":{basic:()=>n.createElement(Tr,{RefComponent:ea})}};var na=Object.defineProperty,ra=Object.defineProperties,oa=Object.getOwnPropertyDescriptors,aa=Object.getOwnPropertySymbols,la=Object.prototype.hasOwnProperty,ia=Object.prototype.propertyIsEnumerable,ca=(e,t,n)=>t in e?na(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sa=(e,t)=>{for(var n in t||(t={}))la.call(t,n)&&ca(e,n,t[n]);if(aa)for(var n of aa(t))ia.call(t,n)&&ca(e,n,t[n]);return e},fa=(e,t)=>ra(e,oa(t));const da=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(Et,fa(sa({},e),{_required:!0,_error:Lr,_label:"Datei hochladen",_icons:{left:{icon:"codicon codicon-save"}},_touched:!0})),n.createElement(Et,fa(sa({},e),{ref:t,_accessKey:"h",_multiple:!0,_error:Lr,_label:"Datei hochladen (Multiple)"})),n.createElement(Et,fa(sa({},e),{_disabled:!0,_label:"Datei hochladen (Disabled)"})))}));var ua=Object.defineProperty,pa=Object.defineProperties,ba=Object.getOwnPropertyDescriptors,ha=Object.getOwnPropertySymbols,ma=Object.prototype.hasOwnProperty,ga=Object.prototype.propertyIsEnumerable,va=(e,t,n)=>t in e?ua(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ya=(e,t)=>{for(var n in t||(t={}))ma.call(t,n)&&va(e,n,t[n]);if(ha)for(var n of ha(t))ga.call(t,n)&&va(e,n,t[n]);return e};const wa=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"File"),n.createElement(da,ya({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"File (hideLabel)"),n.createElement(da,(r=ya({ref:t},e),pa(r,ba({_hideLabel:!0}))))));var r})),ka={"input-file":{basic:()=>n.createElement(Tr,{RefComponent:wa})}};var _a=Object.defineProperty,xa=Object.defineProperties,Ea=Object.getOwnPropertyDescriptors,Sa=Object.getOwnPropertySymbols,Oa=Object.prototype.hasOwnProperty,Ta=Object.prototype.propertyIsEnumerable,La=(e,t,n)=>t in e?_a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Aa=(e,t)=>{for(var n in t||(t={}))Oa.call(t,n)&&La(e,n,t[n]);if(Sa)for(var n of Sa(t))Ta.call(t,n)&&La(e,n,t[n]);return e},$a=(e,t)=>xa(e,Ea(t));const Na=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(St,$a(Aa({},e),{_required:!0,_error:Lr,_touched:!0,_placeholder:"Mit Icons",_label:"Zahleneingabe",_icons:{left:{icon:"codicon codicon-arrow-left"},right:{icon:"codicon codicon-arrow-right"}}})),n.createElement(St,$a(Aa({},e),{ref:t,_accessKey:"Z",_max:10,_min:-10,_step:2,_label:"Zahleneingabe (-10 bis 10 in 2er Schritten)"})),n.createElement(St,$a(Aa({},e),{_readOnly:!0,_label:"Zahleneingabe (Readonly)"})),n.createElement(St,$a(Aa({},e),{_disabled:!0,_label:"Zahleneingabe (Disabled)"})))}));var Ca=Object.defineProperty,za=Object.defineProperties,Pa=Object.getOwnPropertyDescriptors,ja=Object.getOwnPropertySymbols,Ia=Object.prototype.hasOwnProperty,Ra=Object.prototype.propertyIsEnumerable,Fa=(e,t,n)=>t in e?Ca(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ba=(e,t)=>{for(var n in t||(t={}))Ia.call(t,n)&&Fa(e,n,t[n]);if(ja)for(var n of ja(t))Ra.call(t,n)&&Fa(e,n,t[n]);return e};const Da=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Number"),n.createElement(Na,Ba({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Number (hideLabel)"),n.createElement(Na,(r=Ba({ref:t},e),za(r,Pa({_hideLabel:!0}))))));var r})),Ma={"input-number":{basic:()=>n.createElement(Tr,{RefComponent:Da})}};var Ua=Object.defineProperty,Ka=Object.defineProperties,Ha=Object.getOwnPropertyDescriptors,Va=Object.getOwnPropertySymbols,qa=Object.prototype.hasOwnProperty,Za=Object.prototype.propertyIsEnumerable,Wa=(e,t,n)=>t in e?Ua(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ga=(e,t)=>{for(var n in t||(t={}))qa.call(t,n)&&Wa(e,n,t[n]);if(Va)for(var n of Va(t))Za.call(t,n)&&Wa(e,n,t[n]);return e},Ya=(e,t)=>Ka(e,Ha(t));const Qa=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(Ot,Ya(Ga({},e),{_disabled:!0,_error:Lr,_label:"Passwort (Disabled)",_touched:!0})),n.createElement(Ot,Ya(Ga({},e),{_readOnly:!0,_label:"Passwort (Readonly)"})),n.createElement(Ot,Ya(Ga({},e),{ref:t,_accessKey:"P",_required:!0,_error:Lr,_placeholder:"Mit Icons",_label:"Passwort",_icons:{left:{icon:"codicon codicon-arrow-left"},right:{icon:"codicon codicon-arrow-right"}},_touched:!0})))}));var Ja=Object.defineProperty,Xa=Object.defineProperties,el=Object.getOwnPropertyDescriptors,tl=Object.getOwnPropertySymbols,nl=Object.prototype.hasOwnProperty,rl=Object.prototype.propertyIsEnumerable,ol=(e,t,n)=>t in e?Ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,al=(e,t)=>{for(var n in t||(t={}))nl.call(t,n)&&ol(e,n,t[n]);if(tl)for(var n of tl(t))rl.call(t,n)&&ol(e,n,t[n]);return e};const ll=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Password"),n.createElement(Qa,al({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Password (hideLabel)"),n.createElement(Qa,(r=al({ref:t},e),Xa(r,el({_hideLabel:!0}))))));var r})),il={"input-password":{basic:()=>n.createElement(Tr,{RefComponent:ll}),"show-password":()=>{const[e,t]=(0,n.useState)(!1),r=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var t,n;const o=null==(n=null==(t=r.current)?void 0:t.shadowRoot)?void 0:n.querySelector("input");o&&(o.type=e?"text":"password")}),[e]),n.createElement(ht,null,n.createElement(Ot,{_placeholder:"Mit 'Passwort anzeigen' Button",_label:"Passwort",ref:r,_smartButton:{_icons:{left:{icon:"codicon codicon-eye"}},_hideLabel:!0,_label:"Passwort "+(e?"ausblenden":"einblenden"),_on:{onClick:()=>{t(!e)}}},className:"block"}))}}};var cl=Object.defineProperty,sl=Object.defineProperties,fl=Object.getOwnPropertyDescriptors,dl=Object.getOwnPropertySymbols,ul=Object.prototype.hasOwnProperty,pl=Object.prototype.propertyIsEnumerable,bl=(e,t,n)=>t in e?cl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hl=(e,t)=>{for(var n in t||(t={}))ul.call(t,n)&&bl(e,n,t[n]);if(dl)for(var n of dl(t))pl.call(t,n)&&bl(e,n,t[n]);return e},ml=(e,t)=>sl(e,fl(t));const gl=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(Tt,ml(hl({},e),{_options:"[{'disabled':true,'label':'Frau (disabled)','value':'Frau'},{'label':'Herr'},{'label':'Firma','value':'Firma'}]",_label:"Anrede"})),n.createElement(Tt,ml(hl({},e),{_required:!0,_error:Lr,_touched:!0,_value:"Firma",_options:"[{'label':'Frau','value':'Frau'},{'disabled':true,'label':'Herr (disabled)','value':'Herr'},{'label':'Firma','value':'Firma'}]",_label:"Anrede (mit Fehler)"})),n.createElement(Tt,ml(hl({},e),{ref:t,_accessKey:"A",_orientation:"horizontal",_required:!0,_value:"Firma",_options:"[{'label':'Frau','value':'Frau'},{'disabled':true,'label':'Herr (disabled)'},{'label':'Firma','value':'Firma'}]",_label:"Anrede (horizontal)"})),n.createElement(Tt,ml(hl({},e),{_disabled:!0,_orientation:"horizontal",_required:!0,_error:Lr,_touched:!0,_value:"Firma",_options:"[{'label':'Frau','value':'Frau'},{'disabled':true,'label':'Herr (disabled)'},{'label':'Firma','value':'Firma'}]",_label:"Anrede (horizontal mit Fehler)"})),n.createElement(Tt,ml(hl({},e),{_disabled:!0,_value:"Firma",_options:"[{'label':'Frau','value':'Frau'},{'disabled':true,'label':'Herr (disabled)'},{'label':'Firma','value':'Firma'}]",_label:"Anrede",_touched:!0})))}));var vl=Object.defineProperty,yl=Object.defineProperties,wl=Object.getOwnPropertyDescriptors,kl=Object.getOwnPropertySymbols,_l=Object.prototype.hasOwnProperty,xl=Object.prototype.propertyIsEnumerable,El=(e,t,n)=>t in e?vl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sl=(e,t)=>{for(var n in t||(t={}))_l.call(t,n)&&El(e,n,t[n]);if(kl)for(var n of kl(t))xl.call(t,n)&&El(e,n,t[n]);return e};const Ol=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Radio"),n.createElement(gl,Sl({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Radio (hideLabel)"),n.createElement(gl,(r=Sl({ref:t},e),yl(r,wl({_hideLabel:!0}))))));var r})),Tl=(0,n.createContext)(null),Ll=e=>(0,n.useContext)(Tl)?null:n.createElement("div",{className:"flex mb-sm"},n.createElement(yt,null,e.children),n.createElement(Nt,{_hideLabel:!0,_href:`${location.href}?hideMenus`,_label:"Beispiel in neuem Tab öffnen",_target:"_blank",className:"mla flex-self-center"})),Al=[{label:"Frau",value:"Frau"},{disabled:!0,label:"Herr (disabled)",value:"Herr"},{label:"Firma",value:"Firma"}],$l={"input-radio":{basic:()=>n.createElement(Tr,{RefComponent:Ol}),horizontal:()=>{const[e,t]=(0,n.useState)(!0),[r,o]=(0,n.useState)("horizontal"),a=[{label:"Field 1",value:1},{label:"Field 2",value:2}];return n.createElement("div",{className:"grid gap-4"},n.createElement(Ll,null,n.createElement("p",null,"This sample simulates the ",n.createElement("code",null,"horizontal")," and ",n.createElement("code",null,"vertical")," orientation of the ",n.createElement("code",null,"kol-input-radio"),", if we rerender the component.")),n.createElement("div",{className:"flex gap-4"},n.createElement(ft,{_label:"Click me a few times",_on:{onClick:()=>{t((e=>!e))}}}),n.createElement(wt,{_label:"Switch orientation (horizontal/vertical)",_on:{onChange:()=>{o((e=>"horizontal"===e?"vertical":"horizontal"))}},_variant:"switch"})),e&&n.createElement(ht,null,n.createElement("div",{className:"container my-4 d-grid gap-4"},n.createElement(Tt,{_label:`Test (${r})`,_options:a,_orientation:r,_required:!0}),n.createElement(Tt,{_hideLabel:!0,_label:`Test (${r})`,_options:a,_orientation:r,_required:!0}))))},select:()=>n.createElement(ht,{className:"grid gap-4"},n.createElement(Tt,{_error:Lr,_options:Al,_label:"Anrede"}))}};var Nl=Object.defineProperty,Cl=Object.defineProperties,zl=Object.getOwnPropertyDescriptors,Pl=Object.getOwnPropertySymbols,jl=Object.prototype.hasOwnProperty,Il=Object.prototype.propertyIsEnumerable,Rl=(e,t,n)=>t in e?Nl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fl=(e,t)=>{for(var n in t||(t={}))jl.call(t,n)&&Rl(e,n,t[n]);if(Pl)for(var n of Pl(t))Il.call(t,n)&&Rl(e,n,t[n]);return e},Bl=(e,t)=>Cl(e,zl(t));const Dl=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(Lt,Bl(Fl({},e),{_min:0,_max:50,_error:Lr,_label:"Schieberegler",_icons:{left:{icon:"codicon codicon-arrow-left"},right:{icon:"codicon codicon-arrow-right"}},_touched:!0})),n.createElement(Lt,Bl(Fl({},e),{ref:t,_accessKey:"F",_min:0,_max:50,_step:10,_error:Lr,_label:"Schieberegler mit Fehler",_touched:!0})),n.createElement(Lt,Bl(Fl({},e),{_disabled:!0,_min:0,_max:50,_label:"Schieberegler (disabled)"})))}));var Ml=Object.defineProperty,Ul=Object.defineProperties,Kl=Object.getOwnPropertyDescriptors,Hl=Object.getOwnPropertySymbols,Vl=Object.prototype.hasOwnProperty,ql=Object.prototype.propertyIsEnumerable,Zl=(e,t,n)=>t in e?Ml(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wl=(e,t)=>{for(var n in t||(t={}))Vl.call(t,n)&&Zl(e,n,t[n]);if(Hl)for(var n of Hl(t))ql.call(t,n)&&Zl(e,n,t[n]);return e};const Gl=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Range"),n.createElement(Dl,Wl({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Range (hideLabel)"),n.createElement(Dl,(r=Wl({ref:t},e),Ul(r,Kl({_hideLabel:!0}))))));var r})),Yl={"input-range":{basic:()=>n.createElement(Tr,{RefComponent:Gl})}};var Ql=Object.defineProperty,Jl=Object.defineProperties,Xl=Object.getOwnPropertyDescriptors,ei=Object.getOwnPropertySymbols,ti=Object.prototype.hasOwnProperty,ni=Object.prototype.propertyIsEnumerable,ri=(e,t,n)=>t in e?Ql(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oi=(e,t)=>{for(var n in t||(t={}))ti.call(t,n)&&ri(e,n,t[n]);if(ei)for(var n of ei(t))ni.call(t,n)&&ri(e,n,t[n]);return e},ai=(e,t)=>Jl(e,Xl(t));const li=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(At,ai(oi({},e),{_hint:"Ich bin ein Hinweis.",_error:Lr,_placeholder:"Mit Icons",_icons:{left:"codicon codicon-arrow-left",right:{icon:"codicon codicon-arrow-right",style:{"font-size":"200%"}}},_on:{onBlur:console.log,onChange:console.log,onClick:console.log,onFocus:console.log},_hideLabel:!0,_required:!0,_type:"search",_touched:!0,_label:"Suche"})),n.createElement(At,ai(oi({},e),{ref:t,_accessKey:"V",_placeholder:"Placeholder",_label:"Vorname (text)",_required:!0})),n.createElement(At,ai(oi({},e),{_placeholder:"Placeholder",_label:"Suche (search)",_type:"search"})),n.createElement(At,ai(oi({},e),{_placeholder:"Placeholder",_error:Lr,_touched:!0,_type:"url",_label:"URL (url)"})),n.createElement(At,ai(oi({},e),{_placeholder:"Placeholder",_type:"tel",_label:"Telefon (tel)"})),n.createElement(At,ai(oi({},e),{_placeholder:"Placeholder",_readOnly:!0,_label:"Vorname (text, readonly)"})),n.createElement(At,ai(oi({},e),{_value:"Value",_readOnly:!0,_label:"Vorname (text, readonly)"})),n.createElement(At,ai(oi({},e),{_placeholder:"Placeholder",_disabled:!0,_label:"Vorname (text, disabled)"})),n.createElement(At,ai(oi({},e),{_value:"Value",_disabled:!0,_label:"Vorname (text, disabled)"})))}));var ii=Object.defineProperty,ci=Object.defineProperties,si=Object.getOwnPropertyDescriptors,fi=Object.getOwnPropertySymbols,di=Object.prototype.hasOwnProperty,ui=Object.prototype.propertyIsEnumerable,pi=(e,t,n)=>t in e?ii(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bi=(e,t)=>{for(var n in t||(t={}))di.call(t,n)&&pi(e,n,t[n]);if(fi)for(var n of fi(t))ui.call(t,n)&&pi(e,n,t[n]);return e};const hi=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Text"),n.createElement(li,bi({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Text (hideLabel)"),n.createElement(li,(r=bi({ref:t},e),ci(r,si({_hideLabel:!0}))))));var r})),mi={"input-text":{basic:()=>n.createElement(Tr,{RefComponent:hi}),blur:()=>n.createElement(ht,null,n.createElement(At,{_on:{onBlur:console.log},_type:"search",_label:"Suche"})),focus:()=>{const e=(0,n.useRef)(null);return(0,n.useLayoutEffect)((()=>{setTimeout((()=>{var t;null==(t=e.current)||t.focus()}),500)}),[e]),n.createElement(ht,null,n.createElement("div",{className:"grid gap-4"},n.createElement(At,{ref:e,_label:"Vorname"}),n.createElement(At,{_label:"Nachname"}),n.createElement("div",null,n.createElement(ft,{_label:"Submit"}))))}}},gi={kolibri:{basic:()=>n.createElement(n.Fragment,null,n.createElement(Ll,null,n.createElement("p",null,"Das KoliBri-Logo in verschiedenen Varianten")),n.createElement(mt,{class:"block",_level:3,_label:"Regular"}),n.createElement($t,{class:"block",style:{width:300}}),n.createElement(mt,{class:"block",_level:3,_label:"Ohne Label"}),n.createElement($t,{class:"block",style:{width:300},_labeled:!1}),n.createElement(mt,{class:"block",_level:3,_label:"Individuelle Farbe"}),n.createElement($t,{class:"block",style:{width:300},_color:"#cc006e"}))}};var vi=Object.defineProperty,yi=Object.getOwnPropertySymbols,wi=Object.prototype.hasOwnProperty,ki=Object.prototype.propertyIsEnumerable,_i=(e,t,n)=>t in e?vi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xi=(e,t)=>{for(var n in t||(t={}))wi.call(t,n)&&_i(e,n,t[n]);if(yi)for(var n of yi(t))ki.call(t,n)&&_i(e,n,t[n]);return e};const Ei={_on:{onClick:(e,t)=>alert("Klick!")}},Si={"link-button":{basic:()=>n.createElement("div",{className:"grid gap-14"},n.createElement("div",{className:"flex flex-wrap gap-14"},n.createElement(Ct,xi({_label:"Primary",_variant:"primary"},Ei)),n.createElement(Ct,xi({_label:"Secondary",_variant:"secondary"},Ei)),n.createElement(Ct,xi({_label:"Normal",_variant:"normal"},Ei)),n.createElement(Ct,xi({_label:"Danger",_variant:"danger"},Ei)),n.createElement(Ct,xi({_label:"Ghost",_variant:"ghost"},Ei))))}},Oi=[{_label:"Link 1",_href:"https://www.w3.org"},{_label:"Link 2",_href:"https://www.w3.org"},{_label:"Link 3",_href:"https://www.w3.org"}],Ti=[{_label:"Link 1",_href:"https://www.w3.org"},{_label:"Link 2",_href:"https://www.w3.org"},{_label:"Link 3",_href:"https://www.w3.org"}],Li={"link-group":{basic:()=>n.createElement(zt,{_links:Oi,_label:""}),horizontal:()=>n.createElement(zt,{_links:Ti,_orientation:"horizontal",_label:""})}},Ai={link:{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(Nt,{_href:"#",_label:"Simple Link"}),n.createElement("p",null,"In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enthält. ",n.createElement(Nt,{_href:"#",_label:"Simple Link"})," Er wird standardmäßig als"," ",n.createElement("strong",null,"inline-Element")," ausgegeben."),n.createElement("p",null,"In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird."," ",n.createElement(Nt,{class:"d-inline-block",_accessKey:"S",_href:"#",_label:"Simple Link"}),". Damit kann man mir per CSS-Styles eine Breite, eine Höhe und andere Eigenschaften zuweisen.",n.createElement("br",null),n.createElement("br",null),"Danach folgt ein Link, der als block-Element ausgegeben wird.",n.createElement(Nt,{class:"d-block",_href:"#",_label:"Simple Link"}),", daher gehe ich über die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch.")),icons:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(Nt,{_icons:"codicon codicon-home",_label:"Ich bin ein Link mit Icon links"}),n.createElement(Nt,{_icons:{right:"codicon codicon-home"},_label:"Ich bin ein Link mit Icon rechts"}),n.createElement(Nt,{_icons:{top:"codicon codicon-home"},_label:"Ich bin ein Link mit Icon oben"}),n.createElement(Nt,{_icons:{bottom:"codicon codicon-home"},_label:"Ich bin ein Link mit Icon unten"}),n.createElement(Nt,{_icons:{top:"codicon codicon-home",right:"codicon codicon-home",bottom:"codicon codicon-home",left:"codicon codicon-home"},_label:"Ich bin ein Link mit allen Icons"})),image:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(Nt,{_href:"#",_label:"Ich bin ein Link, der als Text gerendert wird"}),n.createElement("br",null),n.createElement(Nt,{_href:"#",_label:""},n.createElement("img",{alt:"Darstellung des KoliBri-Theming",slot:"expert",src:"abgrenzung.jpg",width:"300"}),n.createElement($t,{style:{width:"300px"}})),n.createElement("br",null),n.createElement(Nt,{_href:"#",_label:""},n.createElement("img",{alt:"Darstellung des KoliBri-Theming",slot:"expert",src:"abgrenzung.jpg",width:"300"}))),target:()=>n.createElement("div",{className:"d-flex gap-4"},n.createElement(Nt,{_href:"#",_label:"Ich bin ein Link ohne Target"})," ",n.createElement(Nt,{_href:"#",_label:"Ich bin ein Link mit Target (_self)",_target:"_self"})," ",n.createElement(Nt,{_href:"#",_label:"Ich bin ein Link mit Target (_blank)",_target:"_blank"})," ",n.createElement(Nt,{_href:"#",_icons:"codicon codicon-home",_hideLabel:!0,_label:"Ich bin ein Link ohne Target"})," ",n.createElement(Nt,{_href:"#",_icons:"codicon codicon-home",_hideLabel:!0,_label:"Ich bin ein Link mit Target (_self)",_target:"_self"})," ",n.createElement(Nt,{_href:"#",_icons:"codicon codicon-home",_hideLabel:!0,_label:"Ich bin ein Link mit Target (_blank)",_target:"_blank"}))}},$i={logo:{basic:()=>n.createElement(Pt,{className:"w-50%",_org:rr.B["Die Bundesregierung"]})}},Ni={modal:{basic:()=>{const e=(0,n.useRef)(null);return n.createElement("div",null,n.createElement(jt,{_label:"",_width:"80%",ref:e,_on:{onClose:()=>console.log("Modal closed")}},n.createElement(pt,{_label:"Ich bin ein Modal",style:{width:"100%"}},n.createElement("div",null,n.createElement(ft,{_label:"Schließen",_on:{onClick:()=>{(null==e?void 0:e.current)&&(e.current._activeElement=null)}}})))),n.createElement(ft,{_label:"Modal öffnen",_on:{onClick:t=>{(null==e?void 0:e.current)&&(e.current._activeElement=t.target)}}}))}}},Ci={nav:{basic:()=>n.createElement(It,{class:"block w-sm",_label:"Main navigation",_links:[{_label:"Homepage",_icons:"codicon codicon-home",_href:"#/"},{_label:"2 Navigation point",_href:"#/untermenu"},{_label:"3 Navigation point",_href:"#abc",_children:[{_label:"3.1 Navigation point",_href:"#/"},{_label:"3.2 Navigation point",_href:"#abc",_target:"asdasd"},{_label:"3.3 Navigation point",_href:"#abc",_icons:"fa-solid fa-cat",_children:[{_label:"3.3.1 Navigation point (active)",_href:"#abc"},{_label:"3.3.2 Navigation point",_href:"#abc"}]},{_label:"3.4 Navigation point",_href:"#abc",_children:[{_label:"3.4.1 Navigation point",_href:"#abc"},{_label:"3.4.2 Navigation point",_href:"#abc"}]},{_label:"3.5 Navigation point",_href:"#abc"}]},{_label:"4 Navigation point",_href:"#abc"}],_hasCompactButton:!0}),"aria-current":()=>n.createElement(n.Fragment,null,n.createElement(Ll,null,n.createElement("p",null,"Dieses Beispiel zeigt eine Navigation, bei welcher der zweite Link auf die aktuelle Seite verweist. Dadurch wird ihm automatisch das Attribut"," ",n.createElement("code",null,'aria-current="page"')," zugewiesen.")),n.createElement(It,{class:"block w-sm",_label:"Main navigation",_links:[{_label:"Homepage",_href:"#/"},{_label:"Nav - aria-current (Aktuelle Seite)",_href:"#/nav/aria-current",_active:!0}]})),horizontal:()=>n.createElement(It,{_label:"Main navigation",_links:[{_label:"Homepage",_href:"#/nav/horizontal"},{_label:"2 Navigation point",_href:"#/nav/horizontal"},{_label:"3 Navigation point",_href:"#/nav/horizontal",_children:[{_label:"3.1 Navigation point"},{_label:"3.2 Navigation point",_href:"#/nav/horizontal",_target:"asdasd"},{_label:"3.3 Navigation point",_href:"#/nav/horizontal",_children:[{_label:"3.3.1 Navigation point (active)",_href:"#abc"},{_label:"3.3.2 Navigation point",_href:"#abc"}]},{_label:"3.4 Navigation point",_href:"#/nav/horizontal",_children:[{_label:"3.4.1 Navigation point",_href:"#abc"},{_label:"3.4.2 Navigation point",_href:"#abc"}]},{_label:"3.5 Navigation point",_href:"#abc"}]},{_label:"4 Navigation point",_href:"#abc"}],_orientation:"horizontal"})}},zi={pagination:{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(Rt,{_max:10,_page:6,_siblingCount:0,_label:"Test Paginierung 1",_on:{}}),n.createElement(Rt,{_max:6,_page:6,_siblingCount:0,_boundaryCount:2,_label:"Test Paginierung 2",_on:{}}),n.createElement(Rt,{_max:4,_page:1,_siblingCount:0,_boundaryCount:2,_label:"Test Paginierung 3",_on:{}}),n.createElement(Rt,{_max:4,_page:6,_siblingCount:0,_boundaryCount:2,_hasButtons:!1,_label:"Test Paginierung 4",_on:{}}),n.createElement(Rt,{_max:4,_page:6,_siblingCount:0,_boundaryCount:2,_hasButtons:!1,_label:"Test Paginierung 4",_on:{},_pageSizeOptions:[10,100]}))}},Pi={progress:{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(Ft,{_variant:"bar",_max:100,_value:33}),n.createElement(Ft,{_variant:"cycle",_max:100,_value:33}))}},ji={quote:{basic:()=>n.createElement(Bt,{_href:"https://datatracker.ietf.org/doc/html/rfc1149",_quote:"Avian carriers can provide high delay.",_variant:"inline"}),block:()=>n.createElement(Bt,{_label:"RFC 1149",_href:"https://datatracker.ietf.org/doc/html/rfc1149",_quote:"Avian carriers can provide high delay, low throughput, and low altitude\n\t\t\t\t\t\t\t\tservice. The connection topology is limited to a single point-to-point path\n\t\t\t\t\t\t\t\tfor each carrier, used with standard carriers, but many carriers can be used\n\t\t\t\t\t\t\t\twithout significant interference with each other, outside early spring.\n\t\t\t\t\t\t\t\tThis is because of the 3D ether space available to the carriers, in contrast\n\t\t\t\t\t\t\t\tto the 1D ether used by IEEE802.3. The carriers have an intrinsic collision\n\t\t\t\t\t\t\t\tavoidance system, which increases availability.",_variant:"block"})}},Ii=JSON.parse('[{"id":4,"alpha2":"af","alpha3":"afg","name":"Afghanistan"},{"id":818,"alpha2":"eg","alpha3":"egy","name":"Ägypten"},{"id":8,"alpha2":"al","alpha3":"alb","name":"Albanien"},{"id":12,"alpha2":"dz","alpha3":"dza","name":"Algerien"},{"id":20,"alpha2":"ad","alpha3":"and","name":"Andorra"},{"id":24,"alpha2":"ao","alpha3":"ago","name":"Angola"},{"id":28,"alpha2":"ag","alpha3":"atg","name":"Antigua und Barbuda"},{"id":226,"alpha2":"gq","alpha3":"gnq","name":"Äquatorialguinea"},{"id":32,"alpha2":"ar","alpha3":"arg","name":"Argentinien"},{"id":51,"alpha2":"am","alpha3":"arm","name":"Armenien"},{"id":31,"alpha2":"az","alpha3":"aze","name":"Aserbaidschan"},{"id":231,"alpha2":"et","alpha3":"eth","name":"Äthiopien"},{"id":36,"alpha2":"au","alpha3":"aus","name":"Australien"},{"id":44,"alpha2":"bs","alpha3":"bhs","name":"Bahamas"},{"id":48,"alpha2":"bh","alpha3":"bhr","name":"Bahrain"},{"id":50,"alpha2":"bd","alpha3":"bgd","name":"Bangladesch"},{"id":52,"alpha2":"bb","alpha3":"brb","name":"Barbados"},{"id":112,"alpha2":"by","alpha3":"blr","name":"Belarus"},{"id":56,"alpha2":"be","alpha3":"bel","name":"Belgien"},{"id":84,"alpha2":"bz","alpha3":"blz","name":"Belize"},{"id":204,"alpha2":"bj","alpha3":"ben","name":"Benin"},{"id":64,"alpha2":"bt","alpha3":"btn","name":"Bhutan"},{"id":68,"alpha2":"bo","alpha3":"bol","name":"Bolivien"},{"id":70,"alpha2":"ba","alpha3":"bih","name":"Bosnien und Herzegowina"},{"id":72,"alpha2":"bw","alpha3":"bwa","name":"Botswana"},{"id":76,"alpha2":"br","alpha3":"bra","name":"Brasilien"},{"id":96,"alpha2":"bn","alpha3":"brn","name":"Brunei"},{"id":100,"alpha2":"bg","alpha3":"bgr","name":"Bulgarien"},{"id":854,"alpha2":"bf","alpha3":"bfa","name":"Burkina Faso"},{"id":108,"alpha2":"bi","alpha3":"bdi","name":"Burundi"},{"id":152,"alpha2":"cl","alpha3":"chl","name":"Chile"},{"id":156,"alpha2":"cn","alpha3":"chn","name":"China, Volksrepublik"},{"id":188,"alpha2":"cr","alpha3":"cri","name":"Costa Rica"},{"id":208,"alpha2":"dk","alpha3":"dnk","name":"Dänemark"},{"id":276,"alpha2":"de","alpha3":"deu","name":"Deutschland"},{"id":212,"alpha2":"dm","alpha3":"dma","name":"Dominica"},{"id":214,"alpha2":"do","alpha3":"dom","name":"Dominikanische Republik"},{"id":262,"alpha2":"dj","alpha3":"dji","name":"Dschibuti"},{"id":218,"alpha2":"ec","alpha3":"ecu","name":"Ecuador"},{"id":384,"alpha2":"ci","alpha3":"civ","name":"Elfenbeinküste"},{"id":222,"alpha2":"sv","alpha3":"slv","name":"El Salvador"},{"id":232,"alpha2":"er","alpha3":"eri","name":"Eritrea"},{"id":233,"alpha2":"ee","alpha3":"est","name":"Estland"},{"id":748,"alpha2":"sz","alpha3":"swz","name":"Eswatini"},{"id":242,"alpha2":"fj","alpha3":"fji","name":"Fidschi"},{"id":246,"alpha2":"fi","alpha3":"fin","name":"Finnland"},{"id":250,"alpha2":"fr","alpha3":"fra","name":"Frankreich"},{"id":266,"alpha2":"ga","alpha3":"gab","name":"Gabun"},{"id":270,"alpha2":"gm","alpha3":"gmb","name":"Gambia"},{"id":268,"alpha2":"ge","alpha3":"geo","name":"Georgien"},{"id":288,"alpha2":"gh","alpha3":"gha","name":"Ghana"},{"id":308,"alpha2":"gd","alpha3":"grd","name":"Grenada"},{"id":300,"alpha2":"gr","alpha3":"grc","name":"Griechenland"},{"id":320,"alpha2":"gt","alpha3":"gtm","name":"Guatemala"},{"id":324,"alpha2":"gn","alpha3":"gin","name":"Guinea"},{"id":624,"alpha2":"gw","alpha3":"gnb","name":"Guinea-Bissau"},{"id":328,"alpha2":"gy","alpha3":"guy","name":"Guyana"},{"id":332,"alpha2":"ht","alpha3":"hti","name":"Haiti"},{"id":340,"alpha2":"hn","alpha3":"hnd","name":"Honduras"},{"id":356,"alpha2":"in","alpha3":"ind","name":"Indien"},{"id":360,"alpha2":"id","alpha3":"idn","name":"Indonesien"},{"id":368,"alpha2":"iq","alpha3":"irq","name":"Irak"},{"id":364,"alpha2":"ir","alpha3":"irn","name":"Iran"},{"id":372,"alpha2":"ie","alpha3":"irl","name":"Irland"},{"id":352,"alpha2":"is","alpha3":"isl","name":"Island"},{"id":376,"alpha2":"il","alpha3":"isr","name":"Israel"},{"id":380,"alpha2":"it","alpha3":"ita","name":"Italien"},{"id":388,"alpha2":"jm","alpha3":"jam","name":"Jamaika"},{"id":392,"alpha2":"jp","alpha3":"jpn","name":"Japan"},{"id":887,"alpha2":"ye","alpha3":"yem","name":"Jemen"},{"id":400,"alpha2":"jo","alpha3":"jor","name":"Jordanien"},{"id":116,"alpha2":"kh","alpha3":"khm","name":"Kambodscha"},{"id":120,"alpha2":"cm","alpha3":"cmr","name":"Kamerun"},{"id":124,"alpha2":"ca","alpha3":"can","name":"Kanada"},{"id":132,"alpha2":"cv","alpha3":"cpv","name":"Kap Verde"},{"id":398,"alpha2":"kz","alpha3":"kaz","name":"Kasachstan"},{"id":634,"alpha2":"qa","alpha3":"qat","name":"Katar"},{"id":404,"alpha2":"ke","alpha3":"ken","name":"Kenia"},{"id":417,"alpha2":"kg","alpha3":"kgz","name":"Kirgisistan"},{"id":296,"alpha2":"ki","alpha3":"kir","name":"Kiribati"},{"id":170,"alpha2":"co","alpha3":"col","name":"Kolumbien"},{"id":174,"alpha2":"km","alpha3":"com","name":"Komoren"},{"id":180,"alpha2":"cd","alpha3":"cod","name":"Kongo, Demokratische Republik"},{"id":178,"alpha2":"cg","alpha3":"cog","name":"Kongo, Republik"},{"id":408,"alpha2":"kp","alpha3":"prk","name":"Korea, Nord (Nordkorea)"},{"id":410,"alpha2":"kr","alpha3":"kor","name":"Korea, Süd (Südkorea)"},{"id":191,"alpha2":"hr","alpha3":"hrv","name":"Kroatien"},{"id":192,"alpha2":"cu","alpha3":"cub","name":"Kuba"},{"id":414,"alpha2":"kw","alpha3":"kwt","name":"Kuwait"},{"id":418,"alpha2":"la","alpha3":"lao","name":"Laos"},{"id":426,"alpha2":"ls","alpha3":"lso","name":"Lesotho"},{"id":428,"alpha2":"lv","alpha3":"lva","name":"Lettland"},{"id":422,"alpha2":"lb","alpha3":"lbn","name":"Libanon"},{"id":430,"alpha2":"lr","alpha3":"lbr","name":"Liberia"},{"id":434,"alpha2":"ly","alpha3":"lby","name":"Libyen"},{"id":438,"alpha2":"li","alpha3":"lie","name":"Liechtenstein"},{"id":440,"alpha2":"lt","alpha3":"ltu","name":"Litauen"},{"id":442,"alpha2":"lu","alpha3":"lux","name":"Luxemburg"},{"id":450,"alpha2":"mg","alpha3":"mdg","name":"Madagaskar"},{"id":454,"alpha2":"mw","alpha3":"mwi","name":"Malawi"},{"id":458,"alpha2":"my","alpha3":"mys","name":"Malaysia"},{"id":462,"alpha2":"mv","alpha3":"mdv","name":"Malediven"},{"id":466,"alpha2":"ml","alpha3":"mli","name":"Mali"},{"id":470,"alpha2":"mt","alpha3":"mlt","name":"Malta"},{"id":504,"alpha2":"ma","alpha3":"mar","name":"Marokko"},{"id":584,"alpha2":"mh","alpha3":"mhl","name":"Marshallinseln"},{"id":478,"alpha2":"mr","alpha3":"mrt","name":"Mauretanien"},{"id":480,"alpha2":"mu","alpha3":"mus","name":"Mauritius"},{"id":484,"alpha2":"mx","alpha3":"mex","name":"Mexiko"},{"id":583,"alpha2":"fm","alpha3":"fsm","name":"Mikronesien"},{"id":498,"alpha2":"md","alpha3":"mda","name":"Moldau"},{"id":492,"alpha2":"mc","alpha3":"mco","name":"Monaco"},{"id":496,"alpha2":"mn","alpha3":"mng","name":"Mongolei"},{"id":499,"alpha2":"me","alpha3":"mne","name":"Montenegro"},{"id":508,"alpha2":"mz","alpha3":"moz","name":"Mosambik"},{"id":104,"alpha2":"mm","alpha3":"mmr","name":"Myanmar"},{"id":516,"alpha2":"na","alpha3":"nam","name":"Namibia"},{"id":520,"alpha2":"nr","alpha3":"nru","name":"Nauru"},{"id":524,"alpha2":"np","alpha3":"npl","name":"Nepal"},{"id":554,"alpha2":"nz","alpha3":"nzl","name":"Neuseeland"},{"id":558,"alpha2":"ni","alpha3":"nic","name":"Nicaragua"},{"id":528,"alpha2":"nl","alpha3":"nld","name":"Niederlande"},{"id":562,"alpha2":"ne","alpha3":"ner","name":"Niger"},{"id":566,"alpha2":"ng","alpha3":"nga","name":"Nigeria"},{"id":807,"alpha2":"mk","alpha3":"mkd","name":"Nordmazedonien"},{"id":578,"alpha2":"no","alpha3":"nor","name":"Norwegen"},{"id":512,"alpha2":"om","alpha3":"omn","name":"Oman"},{"id":40,"alpha2":"at","alpha3":"aut","name":"Österreich"},{"id":626,"alpha2":"tl","alpha3":"tls","name":"Osttimor"},{"id":586,"alpha2":"pk","alpha3":"pak","name":"Pakistan"},{"id":585,"alpha2":"pw","alpha3":"plw","name":"Palau"},{"id":591,"alpha2":"pa","alpha3":"pan","name":"Panama"},{"id":598,"alpha2":"pg","alpha3":"png","name":"Papua-Neuguinea"},{"id":600,"alpha2":"py","alpha3":"pry","name":"Paraguay"},{"id":604,"alpha2":"pe","alpha3":"per","name":"Peru"},{"id":608,"alpha2":"ph","alpha3":"phl","name":"Philippinen"},{"id":616,"alpha2":"pl","alpha3":"pol","name":"Polen"},{"id":620,"alpha2":"pt","alpha3":"prt","name":"Portugal"},{"id":646,"alpha2":"rw","alpha3":"rwa","name":"Ruanda"},{"id":642,"alpha2":"ro","alpha3":"rou","name":"Rumänien"},{"id":643,"alpha2":"ru","alpha3":"rus","name":"Russland"},{"id":90,"alpha2":"sb","alpha3":"slb","name":"Salomonen"},{"id":894,"alpha2":"zm","alpha3":"zmb","name":"Sambia"},{"id":882,"alpha2":"ws","alpha3":"wsm","name":"Samoa"},{"id":674,"alpha2":"sm","alpha3":"smr","name":"San Marino"},{"id":678,"alpha2":"st","alpha3":"stp","name":"São Tomé und Príncipe"},{"id":682,"alpha2":"sa","alpha3":"sau","name":"Saudi-Arabien"},{"id":752,"alpha2":"se","alpha3":"swe","name":"Schweden"},{"id":756,"alpha2":"ch","alpha3":"che","name":"Schweiz"},{"id":686,"alpha2":"sn","alpha3":"sen","name":"Senegal"},{"id":688,"alpha2":"rs","alpha3":"srb","name":"Serbien"},{"id":690,"alpha2":"sc","alpha3":"syc","name":"Seychellen"},{"id":694,"alpha2":"sl","alpha3":"sle","name":"Sierra Leone"},{"id":716,"alpha2":"zw","alpha3":"zwe","name":"Simbabwe"},{"id":702,"alpha2":"sg","alpha3":"sgp","name":"Singapur"},{"id":703,"alpha2":"sk","alpha3":"svk","name":"Slowakei"},{"id":705,"alpha2":"si","alpha3":"svn","name":"Slowenien"},{"id":706,"alpha2":"so","alpha3":"som","name":"Somalia"},{"id":724,"alpha2":"es","alpha3":"esp","name":"Spanien"},{"id":144,"alpha2":"lk","alpha3":"lka","name":"Sri Lanka"},{"id":659,"alpha2":"kn","alpha3":"kna","name":"St. Kitts und Nevis"},{"id":662,"alpha2":"lc","alpha3":"lca","name":"St. Lucia"},{"id":670,"alpha2":"vc","alpha3":"vct","name":"St. Vincent und die Grenadinen"},{"id":710,"alpha2":"za","alpha3":"zaf","name":"Südafrika"},{"id":729,"alpha2":"sd","alpha3":"sdn","name":"Sudan"},{"id":728,"alpha2":"ss","alpha3":"ssd","name":"Südsudan"},{"id":740,"alpha2":"sr","alpha3":"sur","name":"Suriname"},{"id":760,"alpha2":"sy","alpha3":"syr","name":"Syrien"},{"id":762,"alpha2":"tj","alpha3":"tjk","name":"Tadschikistan"},{"id":834,"alpha2":"tz","alpha3":"tza","name":"Tansania"},{"id":764,"alpha2":"th","alpha3":"tha","name":"Thailand"},{"id":768,"alpha2":"tg","alpha3":"tgo","name":"Togo"},{"id":776,"alpha2":"to","alpha3":"ton","name":"Tonga"},{"id":780,"alpha2":"tt","alpha3":"tto","name":"Trinidad und Tobago"},{"id":148,"alpha2":"td","alpha3":"tcd","name":"Tschad"},{"id":203,"alpha2":"cz","alpha3":"cze","name":"Tschechien"},{"id":788,"alpha2":"tn","alpha3":"tun","name":"Tunesien"},{"id":792,"alpha2":"tr","alpha3":"tur","name":"Türkei"},{"id":795,"alpha2":"tm","alpha3":"tkm","name":"Turkmenistan"},{"id":798,"alpha2":"tv","alpha3":"tuv","name":"Tuvalu"},{"id":800,"alpha2":"ug","alpha3":"uga","name":"Uganda"},{"id":804,"alpha2":"ua","alpha3":"ukr","name":"Ukraine"},{"id":348,"alpha2":"hu","alpha3":"hun","name":"Ungarn"},{"id":858,"alpha2":"uy","alpha3":"ury","name":"Uruguay"},{"id":860,"alpha2":"uz","alpha3":"uzb","name":"Usbekistan"},{"id":548,"alpha2":"vu","alpha3":"vut","name":"Vanuatu"},{"id":862,"alpha2":"ve","alpha3":"ven","name":"Venezuela"},{"id":784,"alpha2":"ae","alpha3":"are","name":"Vereinigte Arabische Emirate"},{"id":840,"alpha2":"us","alpha3":"usa","name":"Vereinigte Staaten"},{"id":826,"alpha2":"gb","alpha3":"gbr","name":"Vereinigtes Königreich"},{"id":704,"alpha2":"vn","alpha3":"vnm","name":"Vietnam"},{"id":140,"alpha2":"cf","alpha3":"caf","name":"Zentralafrikanische Republik"},{"id":196,"alpha2":"cy","alpha3":"cyp","name":"Zypern"}]');var Ri=Object.defineProperty,Fi=Object.defineProperties,Bi=Object.getOwnPropertyDescriptors,Di=Object.getOwnPropertySymbols,Mi=Object.prototype.hasOwnProperty,Ui=Object.prototype.propertyIsEnumerable,Ki=(e,t,n)=>t in e?Ri(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hi=(e,t)=>{for(var n in t||(t={}))Mi.call(t,n)&&Ki(e,n,t[n]);if(Di)for(var n of Di(t))Ui.call(t,n)&&Ki(e,n,t[n]);return e},Vi=(e,t)=>Fi(e,Bi(t));const qi=[{label:"Keine Auswahl",value:"",disabled:!0},{label:"Frau",value:"Frau"},{label:"Herr",value:"Herr"},{label:"Divers",value:"Divers"}],Zi=[...Ii.map((e=>({label:e.name,value:e.alpha2})))],Wi=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(Dt,Vi(Hi({},e),{ref:t,_accessKey:"a",_options:qi,_label:"Anrede",_icons:{left:{icon:"codicon codicon-arrow-left"},right:{icon:"codicon codicon-arrow-right"}}})),n.createElement(Dt,Vi(Hi({},e),{_options:qi,_label:"Disabled",_disabled:!0})),n.createElement(Dt,Vi(Hi({},e),{_options:qi,_label:"Anrede mit Fehler",_error:Lr,_touched:!0})),n.createElement(Dt,Vi(Hi({},e),{_options:Zi,_label:"Mehrfachauswahl",_multiple:!0})),n.createElement(Dt,Vi(Hi({},e),{_options:Zi,_label:"Mehrfachauswahl mit Fehler",_multiple:!0,_required:!0,_error:Lr,_touched:!0})))}));var Gi=Object.defineProperty,Yi=Object.defineProperties,Qi=Object.getOwnPropertyDescriptors,Ji=Object.getOwnPropertySymbols,Xi=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,tc=(e,t,n)=>t in e?Gi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nc=(e,t)=>{for(var n in t||(t={}))Xi.call(t,n)&&tc(e,n,t[n]);if(Ji)for(var n of Ji(t))ec.call(t,n)&&tc(e,n,t[n]);return e};const rc=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Text"),n.createElement(Wi,nc({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Text (hideLabel)"),n.createElement(Wi,(r=nc({ref:t},e),Yi(r,Qi({_hideLabel:!0}))))));var r})),oc={select:{basic:()=>n.createElement(Tr,{RefComponent:rc})}},ac={"skip-nav":{basic:()=>n.createElement("div",{className:"grid gap-4"},n.createElement(Ll,null,n.createElement("p",null,n.createElement("b",null,"Links sind unsichtbar geschaltet"),n.createElement("br",null),"Um die Links zu sehen, am besten einmal in diesen Bereich klicken und Tab-Taste drücken.")),n.createElement(Mt,{_label:"Versteckte Navigation",_links:[{_label:"Zum Anfang",_selector:"header"},{_label:"Zum Formular",_selector:"#form"},{_label:"Zum Ende",_selector:"footer"}]}))}},lc={spin:{basic:()=>n.createElement(Ut,{_show:!0}),cycle:()=>n.createElement(Ut,{_show:!0,_variant:"cycle"}),custom:()=>n.createElement(Ut,{_show:!0,_variant:"none"},n.createElement("span",{slot:"expert",className:"loader"}))}};var ic=l(5050);const cc=ic.T.getInstance(document),sc={"split-button":{basic:()=>n.createElement("div",{className:"flex gap-4"},n.createElement(Kt,{_label:"Nur der Pfeil öffnet",_on:{onClick:()=>{cc.enqueue({description:"The Button has been clicked.",label:"Button Clicked",type:"info"})}}},"Dropdown-Inhalt"),n.createElement(Kt,{_label:"Schalter ohne sichtbares Label",_hideLabel:!0,_icons:"codicon codicon-git-pull-request"},"Dropdown-Inhalt"))}},fc=new WeakMap,dc=e=>(!1===fc.has(e)&&fc.set(e,(0,o.s)(e)),fc.get(e)),uc=[{order:0,date:new Date("1981-05-26T21:33:43.612Z")},{order:1,date:new Date("1971-04-25T19:44:17.014Z")},{order:2,date:new Date("1986-07-10T11:39:29.539Z")},{order:3,date:new Date("1976-02-02T10:00:36.346Z")},{order:4,date:new Date("1998-07-07T12:50:36.016Z")},{order:5,date:new Date("1994-09-05T05:10:44.078Z")},{order:6,date:new Date("1986-05-23T13:05:01.874Z")},{order:7,date:new Date("1975-06-29T21:51:29.359Z")},{order:8,date:new Date("1974-05-15T23:47:02.499Z")},{order:9,date:new Date("1990-05-27T10:13:19.641Z")},{order:10,date:new Date("1993-10-20T03:54:08.739Z")},{order:11,date:new Date("2000-02-25T11:55:43.705Z")},{order:12,date:new Date("1988-08-27T09:59:12.251Z")},{order:13,date:new Date("1980-10-24T10:41:24.897Z")},{order:14,date:new Date("1995-01-25T12:31:27.983Z")},{order:15,date:new Date("1995-04-15T02:00:39.048Z")},{order:16,date:new Date("1994-03-15T19:13:04.564Z")},{order:17,date:new Date("1999-03-02T16:53:04.418Z")},{order:18,date:new Date("1982-08-23T18:37:38.014Z")},{order:19,date:new Date("1995-06-19T12:39:56.321Z")},{order:20,date:new Date("1994-09-23T15:03:35.746Z")},{order:21,date:new Date("1990-04-15T23:38:02.147Z")},{order:22,date:new Date("1983-08-01T10:36:44.006Z")},{order:23,date:new Date("1986-06-28T21:27:04.588Z")},{order:24,date:new Date("1986-08-14T19:34:40.904Z")},{order:25,date:new Date("1998-07-14T15:52:29.010Z")},{order:26,date:new Date("1985-02-15T18:56:32.344Z")},{order:27,date:new Date("1989-09-06T10:49:30.896Z")},{order:28,date:new Date("1994-09-05T14:21:37.211Z")},{order:29,date:new Date("1995-12-15T23:12:14.411Z")},{order:30,date:new Date("1986-08-14T19:34:40.904Z")},{order:31,date:new Date("1985-02-15T18:56:32.344Z")},{order:32,date:new Date("1989-09-06T10:49:30.896Z")},{order:33,date:new Date("1994-09-05T14:21:37.211Z")},{order:34,date:new Date("1995-12-15T23:12:14.411Z")},{order:35,date:new Date("1986-08-14T19:34:40.904Z")},{order:36,date:new Date("1985-02-15T18:56:32.344Z")},{order:37,date:new Date("1989-09-06T10:49:30.896Z")},{order:38,date:new Date("1994-09-05T14:21:37.211Z")},{order:39,date:new Date("1995-12-15T23:12:14.411Z")},{order:40,date:new Date("1986-08-14T19:34:40.904Z")},{order:41,date:new Date("1985-02-15T18:56:32.344Z")},{order:42,date:new Date("1989-09-06T10:49:30.896Z")},{order:43,date:new Date("1994-09-05T14:21:37.211Z")},{order:44,date:new Date("1995-12-15T23:12:14.411Z")},{order:45,date:new Date("1986-08-14T19:34:40.904Z")},{order:46,date:new Date("1985-02-15T18:56:32.344Z")},{order:47,date:new Date("1989-09-06T10:49:30.896Z")},{order:48,date:new Date("1994-09-05T14:21:37.211Z")},{order:49,date:new Date("1995-12-15T23:12:14.411Z")},{order:50,date:new Date("1986-08-14T19:34:40.904Z")},{order:51,date:new Date("1985-02-15T18:56:32.344Z")},{order:52,date:new Date("1989-09-06T10:49:30.896Z")},{order:53,date:new Date("1994-09-05T14:21:37.211Z")},{order:54,date:new Date("1995-12-15T23:12:14.411Z")},{order:55,date:new Date("1986-08-14T19:34:40.904Z")},{order:56,date:new Date("1985-02-15T18:56:32.344Z")},{order:57,date:new Date("1989-09-06T10:49:30.896Z")},{order:58,date:new Date("1994-09-05T14:21:37.211Z")},{order:59,date:new Date("1995-12-15T23:12:14.411Z")},{order:60,date:new Date("1986-08-14T19:34:40.904Z")},{order:61,date:new Date("1985-02-15T18:56:32.344Z")},{order:62,date:new Date("1989-09-06T10:49:30.896Z")},{order:63,date:new Date("1994-09-05T14:21:37.211Z")},{order:64,date:new Date("1995-12-15T23:12:14.411Z")},{order:65,date:new Date("1986-08-14T19:34:40.904Z")},{order:66,date:new Date("1985-02-15T18:56:32.344Z")},{order:67,date:new Date("1989-09-06T10:49:30.896Z")},{order:68,date:new Date("1994-09-05T14:21:37.211Z")},{order:69,date:new Date("1995-12-15T23:12:14.411Z")},{order:70,date:new Date("1986-08-14T19:34:40.904Z")},{order:71,date:new Date("1985-02-15T18:56:32.344Z")},{order:72,date:new Date("1989-09-06T10:49:30.896Z")},{order:73,date:new Date("1994-09-05T14:21:37.211Z")},{order:74,date:new Date("1995-12-15T23:12:14.411Z")},{order:75,date:new Date("1986-08-14T19:34:40.904Z")},{order:76,date:new Date("1985-02-15T18:56:32.344Z")},{order:77,date:new Date("1989-09-06T10:49:30.896Z")},{order:78,date:new Date("1994-09-05T14:21:37.211Z")},{order:79,date:new Date("1995-12-15T23:12:14.411Z")},{order:80,date:new Date("1986-08-14T19:34:40.904Z")},{order:81,date:new Date("1985-02-15T18:56:32.344Z")},{order:82,date:new Date("1989-09-06T10:49:30.896Z")},{order:83,date:new Date("1994-09-05T14:21:37.211Z")},{order:84,date:new Date("1995-12-15T23:12:14.411Z")},{order:85,date:new Date("1986-08-14T19:34:40.904Z")},{order:86,date:new Date("1985-02-15T18:56:32.344Z")},{order:87,date:new Date("1989-09-06T10:49:30.896Z")},{order:88,date:new Date("1994-09-05T14:21:37.211Z")},{order:89,date:new Date("1995-12-15T23:12:14.411Z")},{order:90,date:new Date("1986-08-14T19:34:40.904Z")},{order:91,date:new Date("1985-02-15T18:56:32.344Z")},{order:92,date:new Date("1989-09-06T10:49:30.896Z")},{order:93,date:new Date("1994-09-05T14:21:37.211Z")},{order:94,date:new Date("1995-12-15T23:12:14.411Z")},{order:95,date:new Date("1986-08-14T19:34:40.904Z")},{order:96,date:new Date("1985-02-15T18:56:32.344Z")},{order:97,date:new Date("1989-09-06T10:49:30.896Z")},{order:98,date:new Date("1994-09-05T14:21:37.211Z")},{order:99,date:new Date("1995-12-15T23:12:14.411Z")}],pc=Intl.DateTimeFormat("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"}),bc={horizontal:[[{label:"order",key:"order",textAlign:"center",width:"10em"},{label:"date",key:"date",textAlign:"center",width:"20em",render:(e,t,n)=>pc.format(n.date),sort:e=>e.sort(((e,t)=>e.date<t.date?-1:t.date<e.date?1:0))},{label:"Aktion",key:"order",render:(e,t,r)=>{dc(e).render(n.createElement(ct,{style:{backgroundColor:"red",width:"80%"},_icons:"codicon codicon-location",_label:"Speichern"}))}}]]},hc=[{left:"Left Example",center:"Center Example",right:"Right Example"}],mc=e=>e,gc=Intl.DateTimeFormat("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"}),vc={horizontal:[[{label:"#",key:"order",textAlign:"center",width:"10em"},{label:"Datum (string)",key:"date",width:"20em",textAlign:"center",render:(e,t)=>{dc(e).render(n.createElement("strong",null,gc.format(t.label)))},sort:e=>e.sort(((e,t)=>e.date<t.date?-1:t.date<e.date?1:0))},{label:"Aktion (react)",key:"order",render:e=>{e.setAttribute("role","presentation"),dc(e).render(n.createElement(n.Fragment,null,n.createElement(ft,{_label:"Speichern"}),n.createElement(At,{_label:"Eingabe"})))}}]]},yc=Intl.DateTimeFormat("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"}),wc={horizontal:[[{label:"order",key:"order",textAlign:"center"},{label:"date",key:"date",textAlign:"center",render:(e,t,n)=>yc.format(n.date),sort:e=>e.sort(((e,t)=>e.date<t.date?-1:t.date<e.date?1:0))}]]},kc={horizontal:[[{label:"Order",key:"order"},{label:"Date",key:"date",render:(e,t,n)=>gc.format(n.date)}]]},_c={_page:2},xc={table:{"badge-size":()=>n.createElement(Ht,{_label:"Sort a date column",_data:uc,_headers:bc,className:"block min-w-75em"}),"column-alignment":()=>n.createElement(n.Fragment,null,n.createElement(Ll,null,"Table with columns headers and data in different text alignments."),n.createElement(mt,{_label:"Simple table",_level:3}),n.createElement(Ht,{_label:"Table for demonstration purposes with different text align properties",_headers:{horizontal:[[{label:"left",key:"left",textAlign:"left"},{label:"center",key:"center",textAlign:"center"},{label:"right",key:"right",textAlign:"right"}]]},_data:hc,className:"block",style:{maxWidth:"600px"}}),n.createElement(mt,{_label:"Table with sortable columns",_level:3,className:"block mt-6"}),n.createElement(Ht,{_label:"Table for demonstration purposes with sortable columns",_headers:{horizontal:[[{label:"left",key:"left",textAlign:"left",sort:mc},{label:"center",key:"center",textAlign:"center",sort:mc},{label:"right",key:"right",textAlign:"right",sort:mc}]]},_data:hc,className:"block",style:{maxWidth:"600px"}}),n.createElement(mt,{_label:"Table some sortable columns",_level:3,className:"block mt-6"}),n.createElement(Ht,{_label:"Table for demonstration purposes with some but not all columns sortable",_headers:{horizontal:[[{label:"left",key:"left",textAlign:"left",sort:mc},{label:"center",key:"center",textAlign:"center",sort:mc},{label:"right",key:"right",textAlign:"right"}]]},_data:hc,className:"block",style:{maxWidth:"600px"}}),n.createElement(mt,{_label:"Table with vertical heading",_level:3,className:"block mt-6"}),n.createElement(Ht,{_label:"Table for demonstration purposes with vertical heading",_headers:{horizontal:[[{label:"",asTd:!0},{label:"left",key:"left",textAlign:"left"},{label:"center",key:"center",textAlign:"center"},{label:"right",key:"right",textAlign:"right"}]],vertical:[[{label:"Vertical"}]]},_data:hc,className:"block",style:{maxWidth:"600px"}})),"render-cell":()=>n.createElement(n.Fragment,null,n.createElement(Ll,null,n.createElement("p",null,"This sample simulates the usage of React render functions for the table column contents.")),n.createElement(Ht,{_label:"Sort a date column",_data:uc,_headers:vc,className:"block min-w-75em"})),"sort-data":()=>n.createElement(Ht,{_label:"Sort a date column",_data:uc,_headers:wc,className:"block"}),"with-pagination":()=>n.createElement("div",null,n.createElement(Ht,{_label:"Tabellenbeschreibung",_data:uc,_headers:kc,_pagination:_c}))}};var Ec=Object.defineProperty,Sc=Object.defineProperties,Oc=Object.getOwnPropertyDescriptors,Tc=Object.getOwnPropertySymbols,Lc=Object.prototype.hasOwnProperty,Ac=Object.prototype.propertyIsEnumerable,$c=(e,t,n)=>t in e?Ec(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Nc=[{_icons:"codicon codicon-pie-chart",_label:"Erster Tab"},{_icons:"codicon codicon-calendar",_label:"Zweites Tab"},{_disabled:!0,_icons:"codicon codicon-briefcase",_label:"Deaktiviertes Tab"},{_icons:"codicon codicon-telescope",_label:"Letzter Tab"}],Cc=Nc.map((e=>{return t=((e,t)=>{for(var n in t||(t={}))Lc.call(t,n)&&$c(e,n,t[n]);if(Tc)for(var n of Tc(t))Ac.call(t,n)&&$c(e,n,t[n]);return e})({},e),Sc(t,Oc({_icons:void 0}));var t})),zc=[{_icons:"codicon codicon-pie-chart",_label:"Erster Tab",_hideLabel:!0},{_icons:"codicon codicon-calendar",_label:"Zweites Tab",_hideLabel:!0},{_disabled:!0,_icons:"codicon codicon-briefcase",_label:"Deaktiviertes Tab",_hideLabel:!0},{_icons:"codicon codicon-telescope",_label:"Letzter Tab",_hideLabel:!0}],Pc={tabs:{basic:()=>n.createElement(n.Fragment,null,n.createElement(Vt,{_tabs:Cc,_label:"Regular tabs"},n.createElement("div",{slot:"tab-0"},"Inhalte von Tab 1"),n.createElement("div",{slot:"tab-1"},"Inhalte von Tab 2"),n.createElement("div",{slot:"tab-2"},"Inhalte von Tab 3"),n.createElement("div",{slot:"tab-3"},"Inhalte von Tab 4")),n.createElement(Vt,{_tabs:Nc,className:"mt-4",_label:"Tabs with icons"},n.createElement("div",{slot:"tab-0"},"Inhalte von Tab 1"),n.createElement("div",{slot:"tab-1"},"Inhalte von Tab 2"),n.createElement("div",{slot:"tab-2"},"Inhalte von Tab 3"),n.createElement("div",{slot:"tab-3"},"Inhalte von Tab 4"))),"icons-only":()=>n.createElement(Vt,{_tabs:zc},n.createElement("div",{slot:"tab-0"},"Inhalte von Tab 1"),n.createElement("div",{slot:"tab-1"},"Inhalte von Tab 2"),n.createElement("div",{slot:"tab-2"},"Inhalte von Tab 3"),n.createElement("div",{slot:"tab-3"},"Inhalte von Tab 4"))}};var jc=Object.defineProperty,Ic=Object.defineProperties,Rc=Object.getOwnPropertyDescriptors,Fc=Object.getOwnPropertySymbols,Bc=Object.prototype.hasOwnProperty,Dc=Object.prototype.propertyIsEnumerable,Mc=(e,t,n)=>t in e?jc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Uc=(e,t)=>{for(var n in t||(t={}))Bc.call(t,n)&&Mc(e,n,t[n]);if(Fc)for(var n of Fc(t))Dc.call(t,n)&&Mc(e,n,t[n]);return e},Kc=(e,t)=>Ic(e,Rc(t));const Hc=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid gap-4"},n.createElement(qt,Kc(Uc({},e),{_error:Lr,_label:"Text",_touched:!0})),n.createElement(qt,Kc(Uc({},e),{ref:t,_accessKey:"T",_label:"Text (3 rows)",_rows:3})))}));var Vc=Object.defineProperty,qc=Object.defineProperties,Zc=Object.getOwnPropertyDescriptors,Wc=Object.getOwnPropertySymbols,Gc=Object.prototype.hasOwnProperty,Yc=Object.prototype.propertyIsEnumerable,Qc=(e,t,n)=>t in e?Vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t)=>{for(var n in t||(t={}))Gc.call(t,n)&&Qc(e,n,t[n]);if(Wc)for(var n of Wc(t))Yc.call(t,n)&&Qc(e,n,t[n]);return e};const Xc=(0,n.forwardRef)((function(e,t){return n.createElement("div",{className:"grid md:grid-cols-2 gap-4"},n.createElement("fieldset",null,n.createElement("legend",null,"Text"),n.createElement(Hc,Jc({},e))),n.createElement("fieldset",null,n.createElement("legend",null,"Text (hideLabel)"),n.createElement(Hc,(r=Jc({ref:t},e),qc(r,Zc({_hideLabel:!0}))))));var r})),es="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore\nmagna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\ngubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing\nelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos\net accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\nsit amet.",ts={textarea:{basic:()=>n.createElement(Tr,{RefComponent:Xc}),"adjust-height":()=>n.createElement(ht,{className:"row"},n.createElement("div",{className:"col-sm-6"},n.createElement(qt,{_adjustHeight:!0,_resize:"vertical",_value:es,_label:"Texteingabe (horizontal)"})),n.createElement("div",{className:"col-sm-6"},n.createElement(qt,{_adjustHeight:!0,_resize:"none",_value:es,_label:"Texteingabe (none)"}))),disabled:()=>n.createElement(ht,null,n.createElement(qt,{_disabled:!0,_error:"Es ist ein Fehler aufgetreten.",_value:"Kleiner Text im Eingabefeld ...",_label:"Texteingabe"})),placeholder:()=>n.createElement(ht,null,n.createElement(qt,{_placeholder:"Hier steht ein Platzhaltertext",_label:"Texteingabe"})),readonly:()=>n.createElement(ht,null,n.createElement(qt,{_error:"Es ist ein Fehler aufgetreten.",_readOnly:!0,_value:"Kleiner Text im Eingabefeld ...",_label:"Texteingabe"})),resize:()=>n.createElement(ht,{className:"grid gap-4"},n.createElement(qt,{_resize:"both",_label:"Texteingabe (both)"}),n.createElement(qt,{_resize:"vertical",_label:"Texteingabe (vertical)"}),n.createElement(qt,{_resize:"horizontal",_label:"Texteingabe (horizontal)"}),n.createElement(qt,{_resize:"none",_label:"Texteingabe (none)"})),rows:()=>n.createElement(ht,null,n.createElement(qt,{_rows:10,_label:"Texteingabe"})),"with-counter":()=>n.createElement(qt,{_hasCounter:!0,_label:"Textara mit Counter und Hint und Fehler",_error:"oh no",_hint:"Hinweis",_touched:!0})}},ns=ic.T.getInstance(document),rs={toast:{basic:()=>n.createElement("div",null,n.createElement(ft,{_label:"Show simple toast",_on:{onClick:()=>{ns.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"})}}})," ",n.createElement(ft,{_label:"Show toast with alert variant 'msg'",_on:{onClick:()=>{ns.enqueue({description:"Toasty",label:"Toast with variant 'msg'",type:"warning",alertVariant:"msg"})}}})," ",n.createElement(ft,{_label:"Show complex toast",_on:{onClick:()=>{ns.enqueue({render:(e,{close:t})=>{dc(e).render(n.createElement(n.Fragment,null,n.createElement(ft,{_label:"Hello World from Toast!",_on:{onClick:()=>{console.log("Toast Button clicked!"),t()}}})))},label:"Initial Toast",type:"warning"})}}}),n.createElement("br",null),n.createElement("br",null),n.createElement(ft,{_label:"Show toast and close after 2 seconds",_on:{onClick:()=>{(()=>{return e=function*(){const e=yield ns.enqueue({description:"I will disappear in two seconds...",label:"Good Bye",type:"warning"});e&&setTimeout(e,2e3)},new Promise(((t,n)=>{var r=t=>{try{a(e.next(t))}catch(e){n(e)}},o=t=>{try{a(e.throw(t))}catch(e){n(e)}},a=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,o);a((e=e.apply(void 0,null)).next())}));var e})()}}}),n.createElement("br",null),n.createElement("br",null),n.createElement(ft,{_label:"Close all toasts",_on:{onClick:()=>{ns.closeAll()}}}))}},os={version:{basic:()=>n.createElement(Zt,{_label:"1.1.1"}),context:()=>n.createElement("p",null,n.createElement(Zt,{_label:"1.0.0"})," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.")}},as=e=>n.createElement(n.Fragment,null,!0===e.submitted&&n.createElement(zt,{tabIndex:0,class:"fehlerliste","data-removed-_label":"Fehlerliste",_label:"Fehlerliste",_level:3,_links:[]}),n.createElement(ht,{className:"block mb-2",_on:{onSubmit:e.onSubmit}},e.children)),ls=e=>n.createElement(as,{submitted:!0,onSubmit:()=>{}},n.createElement("div",{className:"grid grid-cols-2 gap-4"},n.createElement(Tt,{_id:"anrede",_list:[{label:"Herr",value:"Herr"},{label:"Frau",value:"Frau"}],_touched:!0}),n.createElement(At,{_id:"termin_kopfdaten_vorname",_type:"text",_autoComplete:"on",_touched:!0}),n.createElement(At,{_id:"termin_kopfdaten_nachname",_type:"text",_autoComplete:"on",_touched:!0}),n.createElement(At,{_id:"termin_kopfdaten_strasse",_type:"text",_autoComplete:"on",_touched:!0}),n.createElement("div",{className:"grid grid-cols-6 gap-4"},n.createElement(At,{_id:"termin_kopfdaten_plz",_type:"text",_autoComplete:"on",_touched:!0},n.createElement(ot,{_title:"Postleitzahl",_tooltipAlign:"right"},"PLZ")),n.createElement(At,{_id:"termin_kopfdaten_ort",_type:"text",_autoComplete:"on",_touched:!0})),n.createElement(At,{_id:"termin_kopfdaten_telefon",_icon:"icofont-phone",_list:["01234 / 567890"],_type:"tel",_autoComplete:"on",_touched:!0}),n.createElement(xt,{_id:"termin_kopfdaten_email",_icon:"icofont-email",_list:["elke.mustermann@test.de","max.mustermann@test.de"],_touched:!0,_autoComplete:"on"}),n.createElement("div",null,n.createElement(ft,{className:"inline-block my-1",_icon:"icofont-paper-plane",_type:"submit",_label:"Terminanfrage absenden"}),n.createElement(Ut,{_show:!0,className:"ml-4"})))),is=[{value:"Aplerbeck",label:"Aplerbeck"},{value:"Brackel",label:"Brackel"},{value:"Dorstfeld",label:"Dorstfeld"},{value:"Innenstadt Ost",label:"Innenstadt Ost"},{value:"Innenstadt West",label:"Innenstadt West"}],cs=()=>n.createElement(as,{submitted:!0,onSubmit:()=>{}},n.createElement("div",{className:"grid sm:grid-cols-1 xl:grid-cols-2 gap-2 my-2"},n.createElement(Dt,{_id:"termin-location-location",_list:is,_touched:!0})),n.createElement(ft,{className:"inline-block my-1",_icon:"icofont-arrow-right",_iconAlign:"right",_label:"Zur Terminauswahl",_type:"submit"}),n.createElement(Ut,{_show:!0,className:"ml-4"})),ss=e=>n.createElement(as,{submitted:!0,onSubmit:()=>{}},n.createElement("div",{className:"grid sm:grid-cols-1 xl:grid-cols-2 gap-2 my-2"},n.createElement(_t,{_id:"termin-schedule-schedule",_type:"date",_touched:!0}),n.createElement(_t,{_id:"termin-schedule-time",_type:"time",_touched:!0})),n.createElement(ft,{className:"inline-block my-1",_icon:"icofont-arrow-right",_iconAlign:"right",_label:"Zu den Kontaktdaten",_type:"submit"}),n.createElement(Ut,{_show:!0,className:"ml-4"}));var fs=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===ds}(e)}(e)},ds="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function us(e,t){return!1!==t.clone&&t.isMergeableObject(e)?bs((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function ps(e,t,n){return e.concat(t).map((function(e){return us(e,n)}))}function bs(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||ps,n.isMergeableObject=n.isMergeableObject||fs;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):function(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=us(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=bs(e[o],t[o],n):r[o]=us(t[o],n)})),r}(e,t,n):us(t,n)}bs.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return bs(e,n,t)}),{})};const hs=bs,ms="object"==typeof global&&global&&global.Object===Object&&global;var gs="object"==typeof self&&self&&self.Object===Object&&self;const vs=ms||gs||Function("return this")(),ys=vs.Symbol;var ws=Object.prototype,ks=ws.hasOwnProperty,_s=ws.toString,xs=ys?ys.toStringTag:void 0;var Es=Object.prototype.toString;var Ss=ys?ys.toStringTag:void 0;const Os=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ss&&Ss in Object(e)?function(e){var t=ks.call(e,xs),n=e[xs];try{e[xs]=void 0;var r=!0}catch(e){}var o=_s.call(e);return r&&(t?e[xs]=n:delete e[xs]),o}(e):function(e){return Es.call(e)}(e)},Ts=function(e,t){return function(n){return e(t(n))}},Ls=Ts(Object.getPrototypeOf,Object),As=function(e){return null!=e&&"object"==typeof e};var $s=Function.prototype,Ns=Object.prototype,Cs=$s.toString,zs=Ns.hasOwnProperty,Ps=Cs.call(Object);const js=function(e){if(!As(e)||"[object Object]"!=Os(e))return!1;var t=Ls(e);if(null===t)return!0;var n=zs.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Cs.call(n)==Ps};var Is=l(2302),Rs=l.n(Is);const Fs=function(e,t){},Bs=function(e,t){return e===t||e!=e&&t!=t},Ds=function(e,t){for(var n=e.length;n--;)if(Bs(e[n][0],t))return n;return-1};var Ms=Array.prototype.splice;function Us(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Us.prototype.clear=function(){this.__data__=[],this.size=0},Us.prototype.delete=function(e){var t=this.__data__,n=Ds(t,e);return!(n<0||(n==t.length-1?t.pop():Ms.call(t,n,1),--this.size,0))},Us.prototype.get=function(e){var t=this.__data__,n=Ds(t,e);return n<0?void 0:t[n][1]},Us.prototype.has=function(e){return Ds(this.__data__,e)>-1},Us.prototype.set=function(e,t){var n=this.__data__,r=Ds(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};const Ks=Us,Hs=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Vs=function(e){if(!Hs(e))return!1;var t=Os(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},qs=vs["__core-js_shared__"];var Zs,Ws=(Zs=/[^.]+$/.exec(qs&&qs.keys&&qs.keys.IE_PROTO||""))?"Symbol(src)_1."+Zs:"";var Gs=Function.prototype.toString;const Ys=function(e){if(null!=e){try{return Gs.call(e)}catch(e){}try{return e+""}catch(e){}}return""};var Qs=/^\[object .+?Constructor\]$/,Js=Function.prototype,Xs=Object.prototype,ef=Js.toString,tf=Xs.hasOwnProperty,nf=RegExp("^"+ef.call(tf).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const rf=function(e){return!(!Hs(e)||(t=e,Ws&&Ws in t))&&(Vs(e)?nf:Qs).test(Ys(e));var t},of=function(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return rf(n)?n:void 0},af=of(vs,"Map"),lf=of(Object,"create");var cf=Object.prototype.hasOwnProperty;var sf=Object.prototype.hasOwnProperty;function ff(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ff.prototype.clear=function(){this.__data__=lf?lf(null):{},this.size=0},ff.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ff.prototype.get=function(e){var t=this.__data__;if(lf){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return cf.call(t,e)?t[e]:void 0},ff.prototype.has=function(e){var t=this.__data__;return lf?void 0!==t[e]:sf.call(t,e)},ff.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=lf&&void 0===t?"__lodash_hash_undefined__":t,this};const df=ff,uf=function(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map};function pf(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pf.prototype.clear=function(){this.size=0,this.__data__={hash:new df,map:new(af||Ks),string:new df}},pf.prototype.delete=function(e){var t=uf(this,e).delete(e);return this.size-=t?1:0,t},pf.prototype.get=function(e){return uf(this,e).get(e)},pf.prototype.has=function(e){return uf(this,e).has(e)},pf.prototype.set=function(e,t){var n=uf(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};const bf=pf;function hf(e){var t=this.__data__=new Ks(e);this.size=t.size}hf.prototype.clear=function(){this.__data__=new Ks,this.size=0},hf.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},hf.prototype.get=function(e){return this.__data__.get(e)},hf.prototype.has=function(e){return this.__data__.has(e)},hf.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Ks){var r=n.__data__;if(!af||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new bf(r)}return n.set(e,t),this.size=n.size,this};const mf=hf,gf=function(){try{var e=of(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),vf=function(e,t,n){"__proto__"==t&&gf?gf(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n};var yf=Object.prototype.hasOwnProperty;const wf=function(e,t,n){var r=e[t];yf.call(e,t)&&Bs(r,n)&&(void 0!==n||t in e)||vf(e,t,n)},kf=function(e,t,n,r){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var i=t[a],c=r?r(n[i],e[i],i,n,e):void 0;void 0===c&&(c=e[i]),o?vf(n,i,c):wf(n,i,c)}return n},_f=function(e){return As(e)&&"[object Arguments]"==Os(e)};var xf=Object.prototype,Ef=xf.hasOwnProperty,Sf=xf.propertyIsEnumerable;const Of=_f(function(){return arguments}())?_f:function(e){return As(e)&&Ef.call(e,"callee")&&!Sf.call(e,"callee")},Tf=Array.isArray;var Lf="object"==typeof exports&&exports&&!exports.nodeType&&exports,Af=Lf&&"object"==typeof module&&module&&!module.nodeType&&module,$f=Af&&Af.exports===Lf?vs.Buffer:void 0;const Nf=($f?$f.isBuffer:void 0)||function(){return!1};var Cf=/^(?:0|[1-9]\d*)$/;const zf=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Cf.test(e))&&e>-1&&e%1==0&&e<t},Pf=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var jf={};jf["[object Float32Array]"]=jf["[object Float64Array]"]=jf["[object Int8Array]"]=jf["[object Int16Array]"]=jf["[object Int32Array]"]=jf["[object Uint8Array]"]=jf["[object Uint8ClampedArray]"]=jf["[object Uint16Array]"]=jf["[object Uint32Array]"]=!0,jf["[object Arguments]"]=jf["[object Array]"]=jf["[object ArrayBuffer]"]=jf["[object Boolean]"]=jf["[object DataView]"]=jf["[object Date]"]=jf["[object Error]"]=jf["[object Function]"]=jf["[object Map]"]=jf["[object Number]"]=jf["[object Object]"]=jf["[object RegExp]"]=jf["[object Set]"]=jf["[object String]"]=jf["[object WeakMap]"]=!1;const If=function(e){return function(t){return e(t)}};var Rf="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ff=Rf&&"object"==typeof module&&module&&!module.nodeType&&module,Bf=Ff&&Ff.exports===Rf&&ms.process;const Df=function(){try{return Ff&&Ff.require&&Ff.require("util").types||Bf&&Bf.binding&&Bf.binding("util")}catch(e){}}();var Mf=Df&&Df.isTypedArray;const Uf=Mf?If(Mf):function(e){return As(e)&&Pf(e.length)&&!!jf[Os(e)]};var Kf=Object.prototype.hasOwnProperty;const Hf=function(e,t){var n=Tf(e),r=!n&&Of(e),o=!n&&!r&&Nf(e),a=!n&&!r&&!o&&Uf(e),l=n||r||o||a,i=l?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],c=i.length;for(var s in e)!t&&!Kf.call(e,s)||l&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||zf(s,c))||i.push(s);return i};var Vf=Object.prototype;const qf=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Vf)},Zf=Ts(Object.keys,Object);var Wf=Object.prototype.hasOwnProperty;const Gf=function(e){return null!=e&&Pf(e.length)&&!Vs(e)},Yf=function(e){return Gf(e)?Hf(e):function(e){if(!qf(e))return Zf(e);var t=[];for(var n in Object(e))Wf.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)};var Qf=Object.prototype.hasOwnProperty;const Jf=function(e){if(!Hs(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=qf(e),n=[];for(var r in e)("constructor"!=r||!t&&Qf.call(e,r))&&n.push(r);return n},Xf=function(e){return Gf(e)?Hf(e,!0):Jf(e)};var ed="object"==typeof exports&&exports&&!exports.nodeType&&exports,td=ed&&"object"==typeof module&&module&&!module.nodeType&&module,nd=td&&td.exports===ed?vs.Buffer:void 0,rd=nd?nd.allocUnsafe:void 0;const od=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},ad=function(){return[]};var ld=Object.prototype.propertyIsEnumerable,id=Object.getOwnPropertySymbols,cd=id?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}(id(e),(function(t){return ld.call(e,t)})))}:ad;const sd=cd,fd=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e};var dd=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)fd(t,sd(e)),e=Ls(e);return t}:ad;const ud=dd,pd=function(e,t,n){var r=t(e);return Tf(e)?r:fd(r,n(e))},bd=function(e){return pd(e,Yf,sd)},hd=function(e){return pd(e,Xf,ud)},md=of(vs,"DataView"),gd=of(vs,"Promise"),vd=of(vs,"Set"),yd=of(vs,"WeakMap");var wd="[object Map]",kd="[object Promise]",_d="[object Set]",xd="[object WeakMap]",Ed="[object DataView]",Sd=Ys(md),Od=Ys(af),Td=Ys(gd),Ld=Ys(vd),Ad=Ys(yd),$d=Os;(md&&$d(new md(new ArrayBuffer(1)))!=Ed||af&&$d(new af)!=wd||gd&&$d(gd.resolve())!=kd||vd&&$d(new vd)!=_d||yd&&$d(new yd)!=xd)&&($d=function(e){var t=Os(e),n="[object Object]"==t?e.constructor:void 0,r=n?Ys(n):"";if(r)switch(r){case Sd:return Ed;case Od:return wd;case Td:return kd;case Ld:return _d;case Ad:return xd}return t});const Nd=$d;var Cd=Object.prototype.hasOwnProperty;const zd=vs.Uint8Array,Pd=function(e){var t=new e.constructor(e.byteLength);return new zd(t).set(new zd(e)),t};var jd=/\w*$/;var Id=ys?ys.prototype:void 0,Rd=Id?Id.valueOf:void 0;const Fd=function(e,t,n){var r,o,a,l=e.constructor;switch(t){case"[object ArrayBuffer]":return Pd(e);case"[object Boolean]":case"[object Date]":return new l(+e);case"[object DataView]":return function(e,t){var n=t?Pd(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var n=t?Pd(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}(e,n);case"[object Map]":case"[object Set]":return new l;case"[object Number]":case"[object String]":return new l(e);case"[object RegExp]":return(a=new(o=e).constructor(o.source,jd.exec(o))).lastIndex=o.lastIndex,a;case"[object Symbol]":return r=e,Rd?Object(Rd.call(r)):{}}};var Bd=Object.create,Dd=function(){function e(){}return function(t){if(!Hs(t))return{};if(Bd)return Bd(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const Md=Dd;var Ud=Df&&Df.isMap;const Kd=Ud?If(Ud):function(e){return As(e)&&"[object Map]"==Nd(e)};var Hd=Df&&Df.isSet;const Vd=Hd?If(Hd):function(e){return As(e)&&"[object Set]"==Nd(e)};var qd="[object Arguments]",Zd="[object Function]",Wd="[object Object]",Gd={};Gd[qd]=Gd["[object Array]"]=Gd["[object ArrayBuffer]"]=Gd["[object DataView]"]=Gd["[object Boolean]"]=Gd["[object Date]"]=Gd["[object Float32Array]"]=Gd["[object Float64Array]"]=Gd["[object Int8Array]"]=Gd["[object Int16Array]"]=Gd["[object Int32Array]"]=Gd["[object Map]"]=Gd["[object Number]"]=Gd[Wd]=Gd["[object RegExp]"]=Gd["[object Set]"]=Gd["[object String]"]=Gd["[object Symbol]"]=Gd["[object Uint8Array]"]=Gd["[object Uint8ClampedArray]"]=Gd["[object Uint16Array]"]=Gd["[object Uint32Array]"]=!0,Gd["[object Error]"]=Gd[Zd]=Gd["[object WeakMap]"]=!1;const Yd=function e(t,n,r,o,a,l){var i,c=1&n,s=2&n,f=4&n;if(r&&(i=a?r(t,o,a,l):r(t)),void 0!==i)return i;if(!Hs(t))return t;var d=Tf(t);if(d){if(i=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Cd.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(t),!c)return od(t,i)}else{var u=Nd(t),p=u==Zd||"[object GeneratorFunction]"==u;if(Nf(t))return function(e,t){if(t)return e.slice();var n=e.length,r=rd?rd(n):new e.constructor(n);return e.copy(r),r}(t,c);if(u==Wd||u==qd||p&&!a){if(i=s||p?{}:function(e){return"function"!=typeof e.constructor||qf(e)?{}:Md(Ls(e))}(t),!c)return s?function(e,t){return kf(e,ud(e),t)}(t,function(e,t){return e&&kf(t,Xf(t),e)}(i,t)):function(e,t){return kf(e,sd(e),t)}(t,function(e,t){return e&&kf(t,Yf(t),e)}(i,t))}else{if(!Gd[u])return a?t:{};i=Fd(t,u,c)}}l||(l=new mf);var b=l.get(t);if(b)return b;l.set(t,i),Vd(t)?t.forEach((function(o){i.add(e(o,n,r,o,t,l))})):Kd(t)&&t.forEach((function(o,a){i.set(a,e(o,n,r,a,t,l))}));var h=d?void 0:(f?s?hd:bd:s?Xf:Yf)(t);return function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););}(h||t,(function(o,a){h&&(o=t[a=o]),wf(i,a,e(o,n,r,a,t,l))})),i},Qd=function(e){return Yd(e,4)},Jd=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Xd=function(e){return"symbol"==typeof e||As(e)&&"[object Symbol]"==Os(e)};function eu(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,r);return n.cache=a.set(o,l)||a,l};return n.cache=new(eu.Cache||bf),n}eu.Cache=bf;var tu,nu,ru=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ou=/\\(\\)?/g,au=(tu=eu((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ru,(function(e,n,r,o){t.push(r?o.replace(ou,"$1"):n||e)})),t}),(function(e){return 500===nu.size&&nu.clear(),e})),nu=tu.cache,tu);const lu=au,iu=function(e){if("string"==typeof e||Xd(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var cu=ys?ys.prototype:void 0,su=cu?cu.toString:void 0;const fu=function e(t){if("string"==typeof t)return t;if(Tf(t))return Jd(t,e)+"";if(Xd(t))return su?su.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},du=function(e){return null==e?"":fu(e)},uu=function(e){return Tf(e)?Jd(e,iu):Xd(e)?[e]:od(lu(du(e)))};l(2228);const pu=function(e){return Yd(e,5)};function bu(){return bu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bu.apply(this,arguments)}function hu(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function mu(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var gu=(0,n.createContext)(void 0);gu.displayName="FormikContext";var vu=gu.Provider;function yu(){var e=(0,n.useContext)(gu);return e||Fs(!1),e}gu.Consumer;var wu=function(e){return Array.isArray(e)&&0===e.length},ku=function(e){return"function"==typeof e},_u=function(e){return null!==e&&"object"==typeof e},xu=function(e){return String(Math.floor(Number(e)))===e},Eu=function(e){return"[object String]"===Object.prototype.toString.call(e)},Su=function(e){return 0===n.Children.count(e)},Ou=function(e){return _u(e)&&ku(e.then)};function Tu(e,t,n,r){void 0===r&&(r=0);for(var o=uu(t);e&&r<o.length;)e=e[o[r++]];return r===o.length||e?void 0===e?n:e:n}function Lu(e,t,n){for(var r=Qd(e),o=r,a=0,l=uu(t);a<l.length-1;a++){var i=l[a],c=Tu(e,l.slice(0,a+1));if(c&&(_u(c)||Array.isArray(c)))o=o[i]=Qd(c);else{var s=l[a+1];o=o[i]=xu(s)&&Number(s)>=0?[]:{}}}return(0===a?e:o)[l[a]]===n?e:(void 0===n?delete o[l[a]]:o[l[a]]=n,0===a&&void 0===n&&delete r[l[a]],r)}function Au(e,t,n,r){void 0===n&&(n=new WeakMap),void 0===r&&(r={});for(var o=0,a=Object.keys(e);o<a.length;o++){var l=a[o],i=e[l];_u(i)?n.get(i)||(n.set(i,!0),r[l]=Array.isArray(i)?[]:{},Au(i,t,n,r[l])):r[l]=t}return r}var $u={},Nu={};function Cu(e){var t=e.validateOnChange,r=void 0===t||t,o=e.validateOnBlur,a=void 0===o||o,l=e.validateOnMount,i=void 0!==l&&l,c=e.isInitialValid,s=e.enableReinitialize,f=void 0!==s&&s,d=e.onSubmit,u=hu(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=bu({validateOnChange:r,validateOnBlur:a,validateOnMount:i,onSubmit:d},u),b=(0,n.useRef)(p.initialValues),h=(0,n.useRef)(p.initialErrors||$u),m=(0,n.useRef)(p.initialTouched||Nu),g=(0,n.useRef)(p.initialStatus),v=(0,n.useRef)(!1),y=(0,n.useRef)({});(0,n.useEffect)((function(){return v.current=!0,function(){v.current=!1}}),[]);var w=(0,n.useState)(0)[1],k=(0,n.useRef)({values:p.initialValues,errors:p.initialErrors||$u,touched:p.initialTouched||Nu,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),_=k.current,x=(0,n.useCallback)((function(e){var t=k.current;k.current=function(e,t){switch(t.type){case"SET_VALUES":return bu({},e,{values:t.payload});case"SET_TOUCHED":return bu({},e,{touched:t.payload});case"SET_ERRORS":return Rs()(e.errors,t.payload)?e:bu({},e,{errors:t.payload});case"SET_STATUS":return bu({},e,{status:t.payload});case"SET_ISSUBMITTING":return bu({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return bu({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return bu({},e,{values:Lu(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return bu({},e,{touched:Lu(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return bu({},e,{errors:Lu(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return bu({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return bu({},e,{touched:Au(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return bu({},e,{isSubmitting:!1});default:return e}}(t,e),t!==k.current&&w((function(e){return e+1}))}),[]),E=(0,n.useCallback)((function(e,t){return new Promise((function(n,r){var o=p.validate(e,t);null==o?n($u):Ou(o)?o.then((function(e){n(e||$u)}),(function(e){r(e)})):n(o)}))}),[p.validate]),S=(0,n.useCallback)((function(e,t){var n=p.validationSchema,r=ku(n)?n(t):n,o=t&&r.validateAt?r.validateAt(t,e):function(e,t,n,r){void 0===n&&(n=!1);var o=Pu(e);return t[n?"validateSync":"validate"](o,{abortEarly:!1,context:o})}(e,r);return new Promise((function(e,t){o.then((function(){e($u)}),(function(n){"ValidationError"===n.name?e(function(e){var t={};if(e.inner){if(0===e.inner.length)return Lu(t,e.path,e.message);var n=e.inner,r=Array.isArray(n),o=0;for(n=r?n:n[Symbol.iterator]();;){var a;if(r){if(o>=n.length)break;a=n[o++]}else{if((o=n.next()).done)break;a=o.value}var l=a;Tu(t,l.path)||(t=Lu(t,l.path,l.message))}}return t}(n)):t(n)}))}))}),[p.validationSchema]),O=(0,n.useCallback)((function(e,t){return new Promise((function(n){return n(y.current[e].validate(t))}))}),[]),T=(0,n.useCallback)((function(e){var t=Object.keys(y.current).filter((function(e){return ku(y.current[e].validate)})),n=t.length>0?t.map((function(t){return O(t,Tu(e,t))})):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(n).then((function(e){return e.reduce((function(e,n,r){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===n||n&&(e=Lu(e,t[r],n)),e}),{})}))}),[O]),L=(0,n.useCallback)((function(e){return Promise.all([T(e),p.validationSchema?S(e):{},p.validate?E(e):{}]).then((function(e){var t=e[0],n=e[1],r=e[2];return hs.all([t,n,r],{arrayMerge:ju})}))}),[p.validate,p.validationSchema,T,E,S]),A=Ru((function(e){return void 0===e&&(e=_.values),x({type:"SET_ISVALIDATING",payload:!0}),L(e).then((function(e){return v.current&&(x({type:"SET_ISVALIDATING",payload:!1}),x({type:"SET_ERRORS",payload:e})),e}))}));(0,n.useEffect)((function(){i&&!0===v.current&&Rs()(b.current,p.initialValues)&&A(b.current)}),[i,A]);var $=(0,n.useCallback)((function(e){var t=e&&e.values?e.values:b.current,n=e&&e.errors?e.errors:h.current?h.current:p.initialErrors||{},r=e&&e.touched?e.touched:m.current?m.current:p.initialTouched||{},o=e&&e.status?e.status:g.current?g.current:p.initialStatus;b.current=t,h.current=n,m.current=r,g.current=o;var a=function(){x({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:o,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"==typeof e.submitCount?e.submitCount:0}})};if(p.onReset){var l=p.onReset(_.values,G);Ou(l)?l.then(a):a()}else a()}),[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]);(0,n.useEffect)((function(){!0!==v.current||Rs()(b.current,p.initialValues)||f&&(b.current=p.initialValues,$(),i&&A(b.current))}),[f,p.initialValues,$,i,A]),(0,n.useEffect)((function(){f&&!0===v.current&&!Rs()(h.current,p.initialErrors)&&(h.current=p.initialErrors||$u,x({type:"SET_ERRORS",payload:p.initialErrors||$u}))}),[f,p.initialErrors]),(0,n.useEffect)((function(){f&&!0===v.current&&!Rs()(m.current,p.initialTouched)&&(m.current=p.initialTouched||Nu,x({type:"SET_TOUCHED",payload:p.initialTouched||Nu}))}),[f,p.initialTouched]),(0,n.useEffect)((function(){f&&!0===v.current&&!Rs()(g.current,p.initialStatus)&&(g.current=p.initialStatus,x({type:"SET_STATUS",payload:p.initialStatus}))}),[f,p.initialStatus,p.initialTouched]);var N=Ru((function(e){if(y.current[e]&&ku(y.current[e].validate)){var t=Tu(_.values,e),n=y.current[e].validate(t);return Ou(n)?(x({type:"SET_ISVALIDATING",payload:!0}),n.then((function(e){return e})).then((function(t){x({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),x({type:"SET_ISVALIDATING",payload:!1})}))):(x({type:"SET_FIELD_ERROR",payload:{field:e,value:n}}),Promise.resolve(n))}return p.validationSchema?(x({type:"SET_ISVALIDATING",payload:!0}),S(_.values,e).then((function(e){return e})).then((function(t){x({type:"SET_FIELD_ERROR",payload:{field:e,value:Tu(t,e)}}),x({type:"SET_ISVALIDATING",payload:!1})}))):Promise.resolve()})),C=(0,n.useCallback)((function(e,t){var n=t.validate;y.current[e]={validate:n}}),[]),z=(0,n.useCallback)((function(e){delete y.current[e]}),[]),P=Ru((function(e,t){return x({type:"SET_TOUCHED",payload:e}),(void 0===t?a:t)?A(_.values):Promise.resolve()})),j=(0,n.useCallback)((function(e){x({type:"SET_ERRORS",payload:e})}),[]),I=Ru((function(e,t){var n=ku(e)?e(_.values):e;return x({type:"SET_VALUES",payload:n}),(void 0===t?r:t)?A(n):Promise.resolve()})),R=(0,n.useCallback)((function(e,t){x({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})}),[]),F=Ru((function(e,t,n){return x({type:"SET_FIELD_VALUE",payload:{field:e,value:t}}),(void 0===n?r:n)?A(Lu(_.values,e,t)):Promise.resolve()})),B=(0,n.useCallback)((function(e,t){var n,r=t,o=e;if(!Eu(e)){e.persist&&e.persist();var a=e.target?e.target:e.currentTarget,l=a.type,i=a.name,c=a.id,s=a.value,f=a.checked,d=(a.outerHTML,a.options),u=a.multiple;r=t||i||c,o=/number|range/.test(l)?(n=parseFloat(s),isNaN(n)?"":n):/checkbox/.test(l)?function(e,t,n){if("boolean"==typeof e)return Boolean(t);var r=[],o=!1,a=-1;if(Array.isArray(e))r=e,o=(a=e.indexOf(n))>=0;else if(!n||"true"==n||"false"==n)return Boolean(t);return t&&n&&!o?r.concat(n):o?r.slice(0,a).concat(r.slice(a+1)):r}(Tu(_.values,r),f,s):d&&u?function(e){return Array.from(e).filter((function(e){return e.selected})).map((function(e){return e.value}))}(d):s}r&&F(r,o)}),[F,_.values]),D=Ru((function(e){if(Eu(e))return function(t){return B(t,e)};B(e)})),M=Ru((function(e,t,n){return void 0===t&&(t=!0),x({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===n?a:n)?A(_.values):Promise.resolve()})),U=(0,n.useCallback)((function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,o=n.id,a=(n.outerHTML,t||r||o);M(a,!0)}),[M]),K=Ru((function(e){if(Eu(e))return function(t){return U(t,e)};U(e)})),H=(0,n.useCallback)((function(e){ku(e)?x({type:"SET_FORMIK_STATE",payload:e}):x({type:"SET_FORMIK_STATE",payload:function(){return e}})}),[]),V=(0,n.useCallback)((function(e){x({type:"SET_STATUS",payload:e})}),[]),q=(0,n.useCallback)((function(e){x({type:"SET_ISSUBMITTING",payload:e})}),[]),Z=Ru((function(){return x({type:"SUBMIT_ATTEMPT"}),A().then((function(e){var t=e instanceof Error;if(!t&&0===Object.keys(e).length){var n;try{if(void 0===(n=Y()))return}catch(e){throw e}return Promise.resolve(n).then((function(e){return v.current&&x({type:"SUBMIT_SUCCESS"}),e})).catch((function(e){if(v.current)throw x({type:"SUBMIT_FAILURE"}),e}))}if(v.current&&(x({type:"SUBMIT_FAILURE"}),t))throw e}))})),W=Ru((function(e){e&&e.preventDefault&&ku(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&ku(e.stopPropagation)&&e.stopPropagation(),Z().catch((function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)}))})),G={resetForm:$,validateForm:A,validateField:N,setErrors:j,setFieldError:R,setFieldTouched:M,setFieldValue:F,setStatus:V,setSubmitting:q,setTouched:P,setValues:I,setFormikState:H,submitForm:Z},Y=Ru((function(){return d(_.values,G)})),Q=Ru((function(e){e&&e.preventDefault&&ku(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&ku(e.stopPropagation)&&e.stopPropagation(),$()})),J=(0,n.useCallback)((function(e){return{value:Tu(_.values,e),error:Tu(_.errors,e),touched:!!Tu(_.touched,e),initialValue:Tu(b.current,e),initialTouched:!!Tu(m.current,e),initialError:Tu(h.current,e)}}),[_.errors,_.touched,_.values]),X=(0,n.useCallback)((function(e){return{setValue:function(t,n){return F(e,t,n)},setTouched:function(t,n){return M(e,t,n)},setError:function(t){return R(e,t)}}}),[F,M,R]),ee=(0,n.useCallback)((function(e){var t=_u(e),n=t?e.name:e,r=Tu(_.values,n),o={name:n,value:r,onChange:D,onBlur:K};if(t){var a=e.type,l=e.value,i=e.as,c=e.multiple;"checkbox"===a?void 0===l?o.checked=!!r:(o.checked=!(!Array.isArray(r)||!~r.indexOf(l)),o.value=l):"radio"===a?(o.checked=r===l,o.value=l):"select"===i&&c&&(o.value=o.value||[],o.multiple=!0)}return o}),[K,D,_.values]),te=(0,n.useMemo)((function(){return!Rs()(b.current,_.values)}),[b.current,_.values]),ne=(0,n.useMemo)((function(){return void 0!==c?te?_.errors&&0===Object.keys(_.errors).length:!1!==c&&ku(c)?c(p):c:_.errors&&0===Object.keys(_.errors).length}),[c,te,_.errors,p]);return bu({},_,{initialValues:b.current,initialErrors:h.current,initialTouched:m.current,initialStatus:g.current,handleBlur:K,handleChange:D,handleReset:Q,handleSubmit:W,resetForm:$,setErrors:j,setFormikState:H,setFieldTouched:M,setFieldValue:F,setFieldError:R,setStatus:V,setSubmitting:q,setTouched:P,setValues:I,submitForm:Z,validateForm:A,validateField:N,isValid:ne,dirty:te,unregisterField:z,registerField:C,getFieldProps:ee,getFieldMeta:J,getFieldHelpers:X,validateOnBlur:a,validateOnChange:r,validateOnMount:i})}function zu(e){var t=Cu(e),r=e.component,o=e.children,a=e.render,l=e.innerRef;return(0,n.useImperativeHandle)(l,(function(){return t})),(0,n.createElement)(vu,{value:t},r?(0,n.createElement)(r,t):a?a(t):o?ku(o)?o(t):Su(o)?null:n.Children.only(o):null)}function Pu(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);!0===Array.isArray(e[r])?t[r]=e[r].map((function(e){return!0===Array.isArray(e)||js(e)?Pu(e):""!==e?e:void 0})):js(e[r])?t[r]=Pu(e[r]):t[r]=""!==e[r]?e[r]:void 0}return t}function ju(e,t,n){var r=e.slice();return t.forEach((function(t,o){if(void 0===r[o]){var a=!1!==n.clone&&n.isMergeableObject(t);r[o]=a?hs(Array.isArray(t)?[]:{},t,n):t}else n.isMergeableObject(t)?r[o]=hs(e[o],t,n):-1===e.indexOf(t)&&r.push(t)})),r}var Iu="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;function Ru(e){var t=(0,n.useRef)(e);return Iu((function(){t.current=e})),(0,n.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)}),[])}function Fu(e){var t=e.validate,r=e.name,o=e.render,a=e.children,l=e.as,i=e.component,c=e.className,s=hu(e,["validate","name","render","children","as","component","className"]),f=hu(yu(),["validate","validationSchema"]),d=f.registerField,u=f.unregisterField;(0,n.useEffect)((function(){return d(r,{validate:t}),function(){u(r)}}),[d,u,r,t]);var p=f.getFieldProps(bu({name:r},s)),b=f.getFieldMeta(r),h={field:p,form:f};if(o)return o(bu({},h,{meta:b}));if(ku(a))return a(bu({},h,{meta:b}));if(i){if("string"==typeof i){var m=s.innerRef,g=hu(s,["innerRef"]);return(0,n.createElement)(i,bu({ref:m},p,g,{className:c}),a)}return(0,n.createElement)(i,bu({field:p,form:f},s,{className:c}),a)}var v=l||"input";if("string"==typeof v){var y=s.innerRef,w=hu(s,["innerRef"]);return(0,n.createElement)(v,bu({ref:y},p,w,{className:c}),a)}return(0,n.createElement)(v,bu({},p,s,{className:c}),a)}(0,n.forwardRef)((function(e,t){var r=e.action,o=hu(e,["action"]),a=null!=r?r:"#",l=yu(),i=l.handleReset,c=l.handleSubmit;return(0,n.createElement)("form",bu({onSubmit:c,ref:t,onReset:i,action:a},o))})).displayName="Form";var Bu=function(e,t,n){var r=Du(e);return r.splice(t,0,n),r},Du=function(e){if(e){if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map((function(e){return parseInt(e)})).reduce((function(e,t){return t>e?t:e}),0);return Array.from(bu({},e,{length:t+1}))}return[]},Mu=function(e,t){var n="function"==typeof e?e:t;return function(e){if(Array.isArray(e)||_u(e)){var t=Du(e);return n(t)}return e}},Uu=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateArrayField=function(e,t,r){var o=n.props,a=o.name;(0,o.formik.setFormikState)((function(n){var o=Mu(r,e),l=Mu(t,e),i=Lu(n.values,a,e(Tu(n.values,a))),c=r?o(Tu(n.errors,a)):void 0,s=t?l(Tu(n.touched,a)):void 0;return wu(c)&&(c=void 0),wu(s)&&(s=void 0),bu({},n,{values:i,errors:r?Lu(n.errors,a,c):n.errors,touched:t?Lu(n.touched,a,s):n.touched})}))},n.push=function(e){return n.updateArrayField((function(t){return[].concat(Du(t),[pu(e)])}),!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField((function(n){return function(e,t,n){var r=Du(e),o=r[t];return r[t]=r[n],r[n]=o,r}(n,e,t)}),!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField((function(n){return function(e,t,n){var r=Du(e),o=r[t];return r.splice(t,1),r.splice(n,0,o),r}(n,e,t)}),!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField((function(n){return Bu(n,e,t)}),(function(t){return Bu(t,e,null)}),(function(t){return Bu(t,e,null)}))},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField((function(n){return function(e,t,n){var r=Du(e);return r[t]=n,r}(n,e,t)}),!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField((function(n){var r=n?[e].concat(n):[e];return t=r.length,r}),(function(e){return e?[null].concat(e):[null]}),(function(e){return e?[null].concat(e):[null]})),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(mu(n)),n.pop=n.pop.bind(mu(n)),n}var r,o;o=e,(r=t).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var a=t.prototype;return a.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Rs()(Tu(e.formik.values,e.name),Tu(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},a.remove=function(e){var t;return this.updateArrayField((function(n){var r=n?Du(n):[];return t||(t=r[e]),ku(r.splice)&&r.splice(e,1),ku(r.every)&&r.every((function(e){return void 0===e}))?[]:r}),!0,!0),t},a.pop=function(){var e;return this.updateArrayField((function(t){var n=t.slice();return e||(e=n&&n.pop&&n.pop()),n}),!0,!0),e},a.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,r=t.component,o=t.render,a=t.children,l=t.name,i=bu({},e,{form:hu(t.formik,["validate","validationSchema"]),name:l});return r?(0,n.createElement)(r,i):o?o(i):a?"function"==typeof a?a(i):Su(a)?null:n.Children.only(a):null},t}(n.Component);Uu.defaultProps={validateOnChange:!0};const Ku=[{value:"Aplerbeck",label:"Aplerbeck"},{value:"Brackel",label:"Brackel"},{value:"Dorstfeld",label:"Dorstfeld"},{value:"Innenstadt Ost",label:"Innenstadt Ost"},{value:"Innenstadt West",label:"Innenstadt West"}];function Hu(){const e=yu(),t=(r=e.errors,Object.keys(r).map((e=>({message:r[e],selector:`#field-${e}`}))));var r;return n.createElement("div",{className:"p-2"},n.createElement(mt,{_level:2,_label:"Wählen Sie einen Stadtteil aus"}),n.createElement(ht,{_errorList:t,_on:{onSubmit:()=>{e.submitForm()}}},n.createElement(Fu,{name:"district"},(({field:t})=>n.createElement(Dt,{id:"field-district",_label:"Stadtteil",_options:[{label:"Bitte wählen…",value:""},...Ku],_value:[t.value],_error:e.errors.district||"",_touched:e.touched.district,_required:!0,_on:{onChange:(t,n)=>{if(t.target){const[t]=n;e.setFieldTouched("district",!0),e.setFieldValue("district",t,!0)}}}}))),n.createElement(ft,{_label:"Weiter",_type:"submit",className:"mt-2"})))}const Vu=()=>n.createElement("i",null,"Nicht angegeben"),qu=({value:e})=>e||n.createElement(Vu,null);function Zu(){const{values:e}=yu();return n.createElement(n.Fragment,null,n.createElement(mt,{_level:2,_label:"Zusammenfassung"}),n.createElement("dl",null,n.createElement("dt",null,"Stadtteil"),n.createElement("dd",null,n.createElement(qu,{value:e.district})),n.createElement("dt",null,"Termin"),n.createElement("dd",null,e.date&&e.time?`${e.date} ${e.time} Uhr`:n.createElement(Vu,null)),"Firma"===e.salutation?n.createElement(n.Fragment,null,n.createElement("dt",null,"Firma"),n.createElement("dd",null,n.createElement(qu,{value:e.company}))):n.createElement(n.Fragment,null,n.createElement("dt",null,"Anrede"),n.createElement("dd",null,n.createElement(qu,{value:e.salutation}))),n.createElement("dt",null,"Name"),n.createElement("dd",null,n.createElement(qu,{value:e.name})),n.createElement("dt",null,"E-Mail"),n.createElement("dd",null,n.createElement(qu,{value:e.email})),n.createElement("dt",null,"Telefon"),n.createElement("dd",null,n.createElement(qu,{value:e.phone}))))}const Wu=[{value:"Firma",label:"Firma"},{value:"Frau",label:"Frau"},{value:"Herr",label:"Herr"},{value:"Hallo",label:"Hallo"}];function Gu(){const e=yu(),[t,r]=(0,n.useState)(!1);return n.createElement("div",{className:"p-2"},n.createElement(mt,{_level:2,_label:"Geben Sie Ihre Kontaktdaten ein"}),n.createElement("ul",null,t&&Object.entries(e.errors).map((([e,t])=>n.createElement("li",{key:e},t)))),n.createElement(ht,{_on:{onSubmit:()=>{e.submitForm(),r(!0)}}},n.createElement(Fu,{name:"salutation"},(({field:t})=>n.createElement(Dt,{_label:"Anrede",_value:[t.value],_error:e.errors.salutation||"",_touched:e.touched.salutation,_options:[{label:"Bitte wählen…",value:""},...Wu],_required:!0,_on:{onChange:(t,n)=>{if(t.target){const[t]=n;e.setFieldTouched("salutation",!0),e.setFieldValue("salutation",t,!0)}}}}))),"Firma"===e.values.salutation&&n.createElement(Fu,{name:"company"},(({field:t})=>n.createElement("div",{className:"block mt-2"},n.createElement(At,{_label:"Firma",_value:t.value,_error:e.errors.company||"",_touched:e.touched.company,_required:!0,_on:{onChange:(t,n)=>{t.target&&(e.setFieldTouched("company",!0),e.setFieldValue("company",n,!0))}}})))),n.createElement(Fu,{name:"name"},(({field:t})=>n.createElement("div",{className:"block mt-2"},n.createElement(At,{_label:"Vor- und Zuname",_value:t.value,_error:e.errors.name||"",_touched:e.touched.name,_required:!0,_on:{onChange:(t,n)=>{t.target&&(e.setFieldTouched("name",!0),e.setFieldValue("name",n,!0))}}})))),n.createElement(Fu,{name:"email"},(({field:t})=>n.createElement("div",{className:"block mt-2"},n.createElement(xt,{_label:"E-Mail",_value:t.value,_error:e.errors.email||"",_touched:e.touched.email,_required:!0,_on:{onChange:(t,n)=>{t.target&&(e.setFieldTouched("email",!0),e.setFieldValue("email",n,!0))}}})))),n.createElement(Fu,{name:"phone"},(({field:t})=>n.createElement("div",{className:"block mt-2"},n.createElement(At,{_type:"tel",_label:"Telefonnumer",_value:t.value,_error:e.errors.phone||"",_touched:e.touched.phone,_on:{onChange:(t,n)=>{t.target&&(e.setFieldTouched("phone",!0),e.setFieldValue("phone",n,!0))}}})))),n.createElement(ft,{_label:"Weiter",_type:"submit",className:"mt-2"})))}var Yu=l(6071),Qu=l(1144),Ju=l(3442),Xu=l.n(Ju);const ep=Object.prototype.toString,tp=Error.prototype.toString,np=RegExp.prototype.toString,rp="undefined"!=typeof Symbol?Symbol.prototype.toString:()=>"",op=/^Symbol\((.*)\)(.*)$/;function ap(e,t=!1){if(null==e||!0===e||!1===e)return""+e;const n=typeof e;if("number"===n)return function(e){return e!=+e?"NaN":0===e&&1/e<0?"-0":""+e}(e);if("string"===n)return t?`"${e}"`:e;if("function"===n)return"[Function "+(e.name||"anonymous")+"]";if("symbol"===n)return rp.call(e).replace(op,"Symbol($1)");const r=ep.call(e).slice(8,-1);return"Date"===r?isNaN(e.getTime())?""+e:e.toISOString(e):"Error"===r||e instanceof Error?"["+tp.call(e)+"]":"RegExp"===r?np.call(e):null}function lp(e,t){let n=ap(e,t);return null!==n?n:JSON.stringify(e,(function(e,n){let r=ap(this[e],t);return null!==r?r:n}),2)}function ip(e){return null==e?[]:[].concat(e)}let cp,sp=/\$\{\s*(\w+)\s*\}/g;cp=Symbol.toStringTag;class fp extends Error{static formatError(e,t){const n=t.label||t.path||"this";return n!==t.path&&(t=Object.assign({},t,{path:n})),"string"==typeof e?e.replace(sp,((e,n)=>lp(t[n]))):"function"==typeof e?e(t):e}static isError(e){return e&&"ValidationError"===e.name}constructor(e,t,n,r,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[cp]="Error",this.name="ValidationError",this.value=t,this.path=n,this.type=r,this.errors=[],this.inner=[],ip(e).forEach((e=>{if(fp.isError(e)){this.errors.push(...e.errors);const t=e.inner.length?e.inner:[e];this.inner.push(...t)}else this.errors.push(e)})),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,fp)}}let dp={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=null!=r&&r!==n?` (cast from the value \`${lp(r,!0)}\`).`:".";return"mixed"!==t?`${e} must be a \`${t}\` type, but the final value was: \`${lp(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${lp(n,!0)}\``+o}},up={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},pp={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},bp={noUnknown:"${path} field has unspecified keys: ${unknown}"},hp={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${lp(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${lp(n,!0)}\``}return fp.formatError(dp.notType,e)}};Object.assign(Object.create(null),{mixed:dp,string:up,number:{min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},date:pp,object:bp,array:{min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},boolean:{isValue:"${path} field must be ${value}"},tuple:hp});const mp=e=>e&&e.__isYupSchema__;class gp{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:r,otherwise:o}=t,a="function"==typeof n?n:(...e)=>e.every((e=>e===n));return new gp(e,((e,t)=>{var n;let l=a(...e)?r:o;return null!=(n=null==l?void 0:l(t))?n:t}))}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let n=this.refs.map((e=>e.getValue(null==t?void 0:t.value,null==t?void 0:t.parent,null==t?void 0:t.context))),r=this.fn(n,e,t);if(void 0===r||r===e)return e;if(!mp(r))throw new TypeError("conditions must return a schema object");return r.resolve(t)}}class vp{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,"string"!=typeof e)throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),""===e)throw new TypeError("ref must be a non-empty string");this.isContext="$"===this.key[0],this.isValue="."===this.key[0],this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?"$":this.isValue?".":"";this.path=this.key.slice(n.length),this.getter=this.path&&(0,Yu.getter)(this.path,!0),this.map=t.map}getValue(e,t,n){let r=this.isContext?n:this.isValue?e:t;return this.getter&&(r=this.getter(r||{})),this.map&&(r=this.map(r)),r}cast(e,t){return this.getValue(e,null==t?void 0:t.parent,null==t?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}vp.prototype.__isYupRef=!0;const yp=e=>null==e;function wp(e){function t({value:t,path:n="",options:r,originalValue:o,schema:a},l,i){const{name:c,test:s,params:f,message:d,skipAbsent:u}=e;let{parent:p,context:b,abortEarly:h=a.spec.abortEarly,disableStackTrace:m=a.spec.disableStackTrace}=r;function g(e){return vp.isRef(e)?e.getValue(t,p,b):e}function v(e={}){var r;const l=Object.assign({value:t,originalValue:o,label:a.spec.label,path:e.path||n,spec:a.spec},f,e.params);for(const e of Object.keys(l))l[e]=g(l[e]);const i=new fp(fp.formatError(e.message||d,l),t,l.path,e.type||c,null!=(r=e.disableStackTrace)?r:m);return i.params=l,i}const y=h?l:i;let w={path:n,parent:p,type:c,from:r.from,createError:v,resolve:g,options:r,originalValue:o,schema:a};const k=e=>{fp.isError(e)?y(e):e?i(null):y(v())},_=e=>{fp.isError(e)?y(e):l(e)};if(u&&yp(t))return k(!0);let x;try{var E;if(x=s.call(w,t,w),"function"==typeof(null==(E=x)?void 0:E.then)){if(r.sync)throw new Error(`Validation test of type: "${w.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(x).then(k,_)}}catch(e){return void _(e)}k(x)}return t.OPTIONS=e,t}function kp(e,t,n,r=n){let o,a,l;return t?((0,Yu.forEach)(t,((i,c,s)=>{let f=c?i.slice(1,i.length-1):i,d="tuple"===(e=e.resolve({context:r,parent:o,value:n})).type,u=s?parseInt(f,10):0;if(e.innerType||d){if(d&&!s)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${l}" must contain an index to the tuple element, e.g. "${l}[0]"`);if(n&&u>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${i}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[u],e=d?e.spec.types[u]:e.innerType}if(!s){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${l} which is a type: "${e.type}")`);o=n,n=n&&n[f],e=e.fields[f]}a=f,l=c?"["+i+"]":"."+i})),{schema:e,parent:o,parentPath:a}):{parent:o,parentPath:t,schema:e}}class _p extends Set{describe(){const e=[];for(const t of this.values())e.push(vp.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const n of this.values())t.push(e(n));return t}clone(){return new _p(this.values())}merge(e,t){const n=this.clone();return e.forEach((e=>n.add(e))),t.forEach((e=>n.delete(e))),n}}function xp(e,t=new Map){if(mp(e)||!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=xp(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,xp(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(xp(r,t))}else{if(!(e instanceof Object))throw Error(`Unable to clone ${e}`);n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=xp(o,t)}return n}class Ep{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new _p,this._blacklist=new _p,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation((()=>{this.typeError(dp.notType)})),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},null==e?void 0:e.spec),this.withMutation((e=>{e.nonNullable()}))}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=xp(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(0===e.length)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let n=e(this);return this._mutate=t,n}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&"mixed"!==this.type)throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,n=e.clone();const r=Object.assign({},t.spec,n.spec);return n.spec=r,n.internalTests=Object.assign({},t.internalTests,n.internalTests),n._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),n._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),n.tests=t.tests,n.exclusiveTests=t.exclusiveTests,n.withMutation((t=>{e.tests.forEach((e=>{t.test(e.OPTIONS)}))})),n.transforms=[...t.transforms,...n.transforms],n}isType(e){return null==e?!(!this.spec.nullable||null!==e)||!(!this.spec.optional||void 0!==e):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let n=t.conditions;t=t.clone(),t.conditions=[],t=n.reduce(((t,n)=>n.resolve(t,e)),t),t=t.resolve(e)}return t}resolveOptions(e){var t,n,r,o;return Object.assign({},e,{from:e.from||[],strict:null!=(t=e.strict)?t:this.spec.strict,abortEarly:null!=(n=e.abortEarly)?n:this.spec.abortEarly,recursive:null!=(r=e.recursive)?r:this.spec.recursive,disableStackTrace:null!=(o=e.disableStackTrace)?o:this.spec.disableStackTrace})}cast(e,t={}){let n=this.resolve(Object.assign({value:e},t)),r="ignore-optionality"===t.assert,o=n._cast(e,t);if(!1!==t.assert&&!n.isType(o)){if(r&&yp(o))return o;let a=lp(e),l=lp(o);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". \n\nattempted value: ${a} \n`+(l!==a?`result of cast: ${l}`:""))}return o}_cast(e,t){let n=void 0===e?e:this.transforms.reduce(((t,n)=>n.call(this,t,e,this)),e);return void 0===n&&(n=this.getDefault(t)),n}_validate(e,t={},n,r){let{path:o,originalValue:a=e,strict:l=this.spec.strict}=t,i=e;l||(i=this._cast(i,Object.assign({assert:!1},t)));let c=[];for(let e of Object.values(this.internalTests))e&&c.push(e);this.runTests({path:o,value:i,originalValue:a,options:t,tests:c},n,(e=>{if(e.length)return r(e,i);this.runTests({path:o,value:i,originalValue:a,options:t,tests:this.tests},n,r)}))}runTests(e,t,n){let r=!1,{tests:o,value:a,originalValue:l,path:i,options:c}=e,s=e=>{r||(r=!0,t(e,a))},f=e=>{r||(r=!0,n(e,a))},d=o.length,u=[];if(!d)return f([]);let p={value:a,originalValue:l,path:i,options:c,schema:this};for(let e=0;e<o.length;e++)(0,o[e])(p,s,(function(e){e&&(Array.isArray(e)?u.push(...e):u.push(e)),--d<=0&&f(u)}))}asNestedTest({key:e,index:t,parent:n,parentPath:r,originalParent:o,options:a}){const l=null!=e?e:t;if(null==l)throw TypeError("Must include `key` or `index` for nested validations");const i="number"==typeof l;let c=n[l];const s=Object.assign({},a,{strict:!0,parent:n,value:c,originalValue:o[l],key:void 0,[i?"index":"key"]:l,path:i||l.includes(".")?`${r||""}[${c?l:`"${l}"`}]`:(r?`${r}.`:"")+e});return(e,t,n)=>this.resolve(s)._validate(c,s,t,n)}validate(e,t){var n;let r=this.resolve(Object.assign({},t,{value:e})),o=null!=(n=null==t?void 0:t.disableStackTrace)?n:r.spec.disableStackTrace;return new Promise(((n,a)=>r._validate(e,t,((e,t)=>{fp.isError(e)&&(e.value=t),a(e)}),((e,t)=>{e.length?a(new fp(e,t,void 0,void 0,o)):n(t)}))))}validateSync(e,t){var n;let r,o=this.resolve(Object.assign({},t,{value:e})),a=null!=(n=null==t?void 0:t.disableStackTrace)?n:o.spec.disableStackTrace;return o._validate(e,Object.assign({},t,{sync:!0}),((e,t)=>{throw fp.isError(e)&&(e.value=t),e}),((t,n)=>{if(t.length)throw new fp(t,e,void 0,void 0,a);r=n})),r}isValid(e,t){return this.validate(e,t).then((()=>!0),(e=>{if(fp.isError(e))return!1;throw e}))}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(e){if(fp.isError(e))return!1;throw e}}_getDefault(e){let t=this.spec.default;return null==t?t:"function"==typeof t?t.call(this,e):xp(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return 0===arguments.length?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const n=this.clone({nullable:e});return n.internalTests.nullable=wp({message:t,name:"nullable",test(e){return null!==e||this.schema.spec.nullable}}),n}optionality(e,t){const n=this.clone({optional:e});return n.internalTests.optionality=wp({message:t,name:"optionality",test(e){return void 0!==e||this.schema.spec.optional}}),n}optional(){return this.optionality(!0)}defined(e=dp.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=dp.notNull){return this.nullability(!1,e)}required(e=dp.required){return this.clone().withMutation((t=>t.nonNullable(e).defined(e)))}notRequired(){return this.clone().withMutation((e=>e.nullable().optional()))}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(t=1===e.length?"function"==typeof e[0]?{test:e[0]}:e[0]:2===e.length?{name:e[0],test:e[1]}:{name:e[0],message:e[1],test:e[2]},void 0===t.message&&(t.message=dp.default),"function"!=typeof t.test)throw new TypeError("`test` is a required parameters");let n=this.clone(),r=wp(t),o=t.exclusive||t.name&&!0===n.exclusiveTests[t.name];if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(n.exclusiveTests[t.name]=!!t.exclusive),n.tests=n.tests.filter((e=>{if(e.OPTIONS.name===t.name){if(o)return!1;if(e.OPTIONS.test===r.OPTIONS.test)return!1}return!0})),n.tests.push(r),n}when(e,t){Array.isArray(e)||"string"==typeof e||(t=e,e=".");let n=this.clone(),r=ip(e).map((e=>new vp(e)));return r.forEach((e=>{e.isSibling&&n.deps.push(e.key)})),n.conditions.push("function"==typeof t?new gp(r,t):gp.fromOptions(r,t)),n}typeError(e){let t=this.clone();return t.internalTests.typeError=wp({message:e,name:"typeError",skipAbsent:!0,test(e){return!!this.schema._typeCheck(e)||this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=dp.oneOf){let n=this.clone();return e.forEach((e=>{n._whitelist.add(e),n._blacklist.delete(e)})),n.internalTests.whiteList=wp({message:t,name:"oneOf",skipAbsent:!0,test(e){let t=this.schema._whitelist,n=t.resolveAll(this.resolve);return!!n.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:n}})}}),n}notOneOf(e,t=dp.notOneOf){let n=this.clone();return e.forEach((e=>{n._blacklist.add(e),n._whitelist.delete(e)})),n.internalTests.blacklist=wp({message:t,name:"notOneOf",test(e){let t=this.schema._blacklist,n=t.resolveAll(this.resolve);return!n.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:n}})}}),n}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:n,meta:r,optional:o,nullable:a}=t.spec,l={meta:r,label:n,optional:o,nullable:a,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map((e=>({name:e.OPTIONS.name,params:e.OPTIONS.params}))).filter(((e,t,n)=>n.findIndex((t=>t.name===e.name))===t))};return l}}Ep.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Ep.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:a,schema:l}=kp(this,t,n,r.context);return l[e](o&&o[a],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])Ep.prototype[e]=Ep.prototype.oneOf;for(const e of["not","nope"])Ep.prototype[e]=Ep.prototype.notOneOf;let Sp=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Op=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Tp=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Lp=e=>yp(e)||e===e.trim(),Ap={}.toString();function $p(){return new Np}class Np extends Ep{constructor(){super({type:"string",check:e=>(e instanceof String&&(e=e.valueOf()),"string"==typeof e)}),this.withMutation((()=>{this.transform(((e,t,n)=>{if(!n.spec.coerce||n.isType(e))return e;if(Array.isArray(e))return e;const r=null!=e&&e.toString?e.toString():e;return r===Ap?e:r}))}))}required(e){return super.required(e).withMutation((t=>t.test({message:e||dp.required,name:"required",skipAbsent:!0,test:e=>!!e.length})))}notRequired(){return super.notRequired().withMutation((e=>(e.tests=e.tests.filter((e=>"required"!==e.OPTIONS.name)),e)))}length(e,t=up.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(t){return t.length===this.resolve(e)}})}min(e,t=up.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(t){return t.length>=this.resolve(e)}})}max(e,t=up.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(t){return t.length<=this.resolve(e)}})}matches(e,t){let n,r,o=!1;return t&&("object"==typeof t?({excludeEmptyString:o=!1,message:n,name:r}=t):n=t),this.test({name:r||"matches",message:n||up.matches,params:{regex:e},skipAbsent:!0,test:t=>""===t&&o||-1!==t.search(e)})}email(e=up.email){return this.matches(Sp,{name:"email",message:e,excludeEmptyString:!0})}url(e=up.url){return this.matches(Op,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=up.uuid){return this.matches(Tp,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform((e=>null===e?"":e))}trim(e=up.trim){return this.transform((e=>null!=e?e.trim():e)).test({message:e,name:"trim",test:Lp})}lowercase(e=up.lowercase){return this.transform((e=>yp(e)?e:e.toLowerCase())).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>yp(e)||e===e.toLowerCase()})}uppercase(e=up.uppercase){return this.transform((e=>yp(e)?e:e.toUpperCase())).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>yp(e)||e===e.toUpperCase()})}}$p.prototype=Np.prototype;const Cp=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function zp(e,t=0){return Number(e)||t}let Pp=new Date("");function jp(){return new Ip}class Ip extends Ep{constructor(){super({type:"date",check(e){return t=e,"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(e.getTime());var t}}),this.withMutation((()=>{this.transform(((e,t,n)=>!n.spec.coerce||n.isType(e)||null===e?e:(e=function(e){const t=Cp.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:zp(t[1]),month:zp(t[2],1)-1,day:zp(t[3],1),hour:zp(t[4]),minute:zp(t[5]),second:zp(t[6]),millisecond:t[7]?zp(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:zp(t[10]),minuteOffset:zp(t[11])};if(void 0===n.z&&void 0===n.plusMinus)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return"Z"!==n.z&&void 0!==n.plusMinus&&(r=60*n.hourOffset+n.minuteOffset,"+"===n.plusMinus&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}(e),isNaN(e)?Ip.INVALID_DATE:new Date(e))))}))}prepareParam(e,t){let n;if(vp.isRef(e))n=e;else{let r=this.cast(e);if(!this._typeCheck(r))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);n=r}return n}min(e,t=pp.min){let n=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(e){return e>=this.resolve(n)}})}max(e,t=pp.max){let n=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(e){return e<=this.resolve(n)}})}}function Rp(e,t){let n=1/0;return e.some(((e,r)=>{var o;if(null!=(o=t.path)&&o.includes(e))return n=r,!0})),n}function Fp(e){return(t,n)=>Rp(e,t)-Rp(e,n)}Ip.INVALID_DATE=Pp,jp.prototype=Ip.prototype,jp.INVALID_DATE=Pp;const Bp=(e,t,n)=>{if("string"!=typeof e)return e;let r=e;try{r=JSON.parse(e)}catch(e){}return n.isType(r)?r:e};function Dp(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Dp(r);return e.setFields(t)}if("array"===e.type){const t=e.optional();return t.innerType&&(t.innerType=Dp(t.innerType)),t}return"tuple"===e.type?e.optional().clone({types:e.spec.types.map(Dp)}):"optional"in e?e.optional():e}let Mp=e=>"[object Object]"===Object.prototype.toString.call(e);const Up=Fp([]);function Kp(e){return new Hp(e)}class Hp extends Ep{constructor(e){super({type:"object",check:e=>Mp(e)||"function"==typeof e}),this.fields=Object.create(null),this._sortErrors=Up,this._nodes=[],this._excludedEdges=[],this.withMutation((()=>{e&&this.shape(e)}))}_cast(e,t={}){var n;let r=super._cast(e,t);if(void 0===r)return this.getDefault(t);if(!this._typeCheck(r))return r;let o=this.fields,a=null!=(n=t.stripUnknown)?n:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(r).filter((e=>!this._nodes.includes(e)))),i={},c=Object.assign({},t,{parent:i,__validating:t.__validating||!1}),s=!1;for(const e of l){let n=o[e],l=e in r;if(n){let o,a=r[e];c.path=(t.path?`${t.path}.`:"")+e,n=n.resolve({value:a,context:t.context,parent:i});let l=n instanceof Ep?n.spec:void 0,f=null==l?void 0:l.strict;if(null!=l&&l.strip){s=s||e in r;continue}o=t.__validating&&f?r[e]:n.cast(r[e],c),void 0!==o&&(i[e]=o)}else l&&!a&&(i[e]=r[e]);l===e in i&&i[e]===r[e]||(s=!0)}return s?i:r}_validate(e,t={},n,r){let{from:o=[],originalValue:a=e,recursive:l=this.spec.recursive}=t;t.from=[{schema:this,value:a},...o],t.__validating=!0,t.originalValue=a,super._validate(e,t,n,((e,o)=>{if(!l||!Mp(o))return void r(e,o);a=a||o;let i=[];for(let e of this._nodes){let n=this.fields[e];n&&!vp.isRef(n)&&i.push(n.asNestedTest({options:t,key:e,parent:o,parentPath:t.path,originalParent:a}))}this.runTests({tests:i,value:o,originalValue:a,options:t},n,(t=>{r(t.sort(this._sortErrors).concat(e),o)}))}))}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),n=t.fields;for(let[e,t]of Object.entries(this.fields)){const r=n[e];n[e]=void 0===r?t:r}return t.withMutation((t=>t.setFields(n,[...this._excludedEdges,...e._excludedEdges])))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach((n=>{var r;const o=this.fields[n];let a=e;null!=(r=a)&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),t[n]=o&&"getDefault"in o?o.getDefault(a):void 0})),t}setFields(e,t){let n=this.clone();return n.fields=e,n._nodes=function(e,t=[]){let n=[],r=new Set,o=new Set(t.map((([e,t])=>`${e}-${t}`)));function a(e,t){let a=(0,Yu.split)(e)[0];r.add(a),o.has(`${t}-${a}`)||n.push([t,a])}for(const t of Object.keys(e)){let n=e[t];r.add(t),vp.isRef(n)&&n.isSibling?a(n.path,t):mp(n)&&"deps"in n&&n.deps.forEach((e=>a(e,t)))}return Xu().array(Array.from(r),n).reverse()}(e,t),n._sortErrors=Fp(Object.keys(e)),t&&(n._excludedEdges=t),n}shape(e,t=[]){return this.clone().withMutation((n=>{let r=n._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),r=[...n._excludedEdges,...t]),n.setFields(Object.assign(n.fields,e),r)}))}partial(){const e={};for(const[t,n]of Object.entries(this.fields))e[t]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(e)}deepPartial(){return Dp(this)}pick(e){const t={};for(const n of e)this.fields[n]&&(t[n]=this.fields[n]);return this.setFields(t,this._excludedEdges.filter((([t,n])=>e.includes(t)&&e.includes(n))))}omit(e){const t=[];for(const n of Object.keys(this.fields))e.includes(n)||t.push(n);return this.pick(t)}from(e,t,n){let r=(0,Yu.getter)(e,!0);return this.transform((o=>{if(!o)return o;let a=o;return((e,t)=>{const n=[...(0,Yu.normalizePath)(t)];if(1===n.length)return n[0]in e;let r=n.pop(),o=(0,Yu.getter)((0,Yu.join)(n),!0)(e);return!(!o||!(r in o))})(o,e)&&(a=Object.assign({},o),n||delete a[e],a[t]=r(o)),a}))}json(){return this.transform(Bp)}noUnknown(e=!0,t=bp.noUnknown){"boolean"!=typeof e&&(t=e,e=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:t,test(t){if(null==t)return!0;const n=function(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter((e=>-1===n.indexOf(e)))}(this.schema,t);return!e||0===n.length||this.createError({params:{unknown:n.join(", ")}})}});return n.spec.noUnknown=e,n}unknown(e=!0,t=bp.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform((t=>{if(!t)return t;const n={};for(const r of Object.keys(t))n[e(r)]=t[r];return n}))}camelCase(){return this.transformKeys(Qu.camelCase)}snakeCase(){return this.transformKeys(Qu.snakeCase)}constantCase(){return this.transformKeys((e=>(0,Qu.snakeCase)(e).toUpperCase()))}describe(e){const t=(e?this.resolve(e):this).clone(),n=super.describe(e);n.fields={};for(const[o,a]of Object.entries(t.fields)){var r;let t=e;null!=(r=t)&&r.value&&(t=Object.assign({},t,{parent:t.value,value:t.value[o]})),n.fields[o]=a.describe(t)}return n}}function Vp({errors:e}){const t=e=>{var t;const n=null==(t=e.target)?void 0:t.href;if(n){const e=new URL(n),t=document.querySelector(e.hash);t&&"function"==typeof t.focus&&t.focus()}};return n.createElement(lt,{_type:"error"},"Bitte korrigieren Sie folgende Fehler:",n.createElement("nav",{"aria-label":"Fehlerliste"},n.createElement("ul",null,Object.entries(e).map((([e,r])=>n.createElement("li",{key:e},n.createElement(Nt,{_href:`#field-${e}`,_label:r,_on:{onClick:t}})))))))}Kp.prototype=Hp.prototype;var qp=(e,t,n)=>new Promise(((r,o)=>{var a=e=>{try{i(n.next(e))}catch(e){o(e)}},l=e=>{try{i(n.throw(e))}catch(e){o(e)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,l);i((n=n.apply(e,t)).next())}));const Zp=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),Wp=e=>`${e<10?"0":""}${e}`,Gp=e=>new Promise((t=>setTimeout(t,e))),Yp=e=>qp(void 0,null,(function*(){var t;return yield Gp(500),null!=(t=null==e?void 0:e.endsWith(":30"))&&t}));function Qp(){const e=yu(),[t,r]=(0,n.useState)(!1),[o,a]=(0,n.useState)(null);return(0,n.useEffect)((()=>{let t=!1;return a(null),e.values.date&&qp(void 0,null,(function*(){return yield Gp(1e3),(()=>{const e=Zp(2,9),t=new Set;for(;t.size!==e;)t.add(Zp(8,17));return[...t].sort(((e,t)=>e-t)).flatMap((e=>[`${Wp(e)}:00`,`${Wp(e)}:30`]))})().map((e=>({label:e,value:e})))})).then((n=>{t||(a(n),e.setFieldValue("time",n[0].value),e.setFieldTouched("time"))}),(()=>{})),()=>{t=!0}}),[e.values.date]),n.createElement("div",{className:"p-2"},n.createElement(mt,{_level:2,_label:"Wählen Sie einen Termin aus"}),t&&Object.keys(e.errors).length?n.createElement("div",{className:"mt-2"},n.createElement(Vp,{errors:e.errors})):null,n.createElement(ht,{_on:{onSubmit:()=>{e.submitForm(),r(!0)}}},n.createElement(Fu,{name:"date"},(({field:t})=>n.createElement(_t,{id:"field-date",_label:"Datum",_value:t.value,_error:e.errors.date||"",_touched:e.touched.date,_required:!0,_on:{onChange:(t,n)=>{t.target&&e.setFieldValue("date",n,!0)},onBlur:()=>{e.setFieldTouched("date",!0)}}}))),e.values.date&&n.createElement("div",{className:"grid gap-4 mt-4"},o?n.createElement(n.Fragment,null,n.createElement(Fu,{name:"time"},(({field:t})=>n.createElement(Tt,{id:"field-date",_label:"Zeit",_orientation:"horizontal",_options:o,_value:t.value,_error:e.errors.time||"",_touched:e.touched.time,_required:!0,_on:{onChange:(t,n)=>{t.target&&(e.setFieldTouched("time",!0),e.setFieldValue("time",n,!0))}}}))),n.createElement("p",null,n.createElement("em",null,"Aus Testzwecken sind nur die Termine zu jeder halben Stunde verfügbar."))):n.createElement(Ut,{_show:!0,className:"block","aria-label":"Termine werden geladen.",_variant:"cycle"})),n.createElement(ft,{_label:"Weiter",_type:"submit",className:"mt-2",_disabled:e.isValidating}),e.values.date&&e.isValidating?n.createElement(Ut,{_show:!0,"aria-label":"Termin wird geprüft."}):""))}var Jp=Object.defineProperty,Xp=Object.getOwnPropertySymbols,eb=Object.prototype.hasOwnProperty,tb=Object.prototype.propertyIsEnumerable,nb=(e,t,n)=>t in e?Jp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rb=(e,t)=>{for(var n in t||(t={}))eb.call(t,n)&&nb(e,n,t[n]);if(Xp)for(var n of Xp(t))tb.call(t,n)&&nb(e,n,t[n]);return e};const ob=[0,1,2,3],ab={district:"",date:"",time:"",salutation:"",name:"",company:"",email:"",phone:""},lb={district:$p().required("Bitte Stadtteil wählen.")},ib={salutation:$p().required("Bitte Anrede auswählen."),name:$p().required("Bitte Name eingeben."),company:$p().when("salutation",{is:e=>"Firma"===e,then:e=>e.required("Bitte Firmenname angeben.")}),email:$p().required("Bitte E-Mail-Adresse eingeben.")},cb={date:$p().required("Bitte Datum eingeben."),time:$p().when("date",{is:e=>Boolean(e),then:e=>e.test("checkTimeAvailability","Termin leider nicht mehr verfügbar.",Yp)})};var sb=Object.defineProperty,fb=Object.getOwnPropertySymbols,db=Object.prototype.hasOwnProperty,ub=Object.prototype.propertyIsEnumerable,pb=(e,t,n)=>t in e?sb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const bb=(0,n.createContext)(void 0),hb=e=>{const t=(0,n.useRef)(),[r,o]=(0,n.useState)(void 0),a=e.formatter||JSON.stringify,l=(0,n.useContext)(bb),i=()=>{return void 0,null,e=function*(){var e;o(yield null==(e=t.current)?void 0:e.getValue())},new Promise(((t,n)=>{var r=t=>{try{a(e.next(t))}catch(e){n(e)}},o=t=>{try{a(e.throw(t))}catch(e){n(e)}},a=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,o);a((e=e.apply(undefined,null)).next())}));var e};return(0,n.useEffect)((()=>{const e=()=>{i()};return null==l||l.addEventListener("runAll",e),()=>{null==l||l.removeEventListener("runAll",e)}}),[l]),n.createElement("div",{className:"grid grid-cols-3 items-end gap-4"},n.createElement(e.InputComponent,((e,t)=>{for(var n in t||(t={}))db.call(t,n)&&pb(e,n,t[n]);if(fb)for(var n of fb(t))ub.call(t,n)&&pb(e,n,t[n]);return e})({ref:t},e.inputProps)),n.createElement(ft,{_label:"getValue()",_on:{onClick:()=>{i()}}}),n.createElement("pre",null,a(r)))},mb={scenarios:{"complex-form":()=>n.createElement(n.Fragment,null,n.createElement("div",{className:"grid sm:grid-cols-1 gap-2 my-3"},n.createElement(mt,{_label:"Terminreservierung"}),n.createElement(mt,{_label:"Termine für Einwohnermelde- (incl. Pass- und Ausweisangelegenheiten) und Kraftfahrzeugangelegenheiten",_level:2}),n.createElement("div",{style:{fontFamily:"Arial"}},n.createElement("p",{className:"py-2"},"Derzeit kann generell nur mit vorheriger Terminvereinbarung bei den Bürgerdiensten vorgesprochen werden."),n.createElement("p",{className:"py-2"},"Die Termine für Einwohnermelde- und Kraftfahrzeugangelegenheiten werden täglich ab 07:00 Uhr für den gleichen Tag, für den gleichen Tag 7 Tage und für den gleichen Tag 14 Tage später freigegeben. So können Sie jeden Tag spontan Termine für den gleichen Tag und planbar Termine für eine Woche oder zwei Wochen später erhalten."),n.createElement("p",{className:"py-2"},"Sofern online keine Termine innerhalb der nächsten 14 Tage mehr verfügbar sind, führt auch eine darüber hinaus gehende telefonische Kontaktaufnahme leider zu keinem anderen Ergebnis. In diesem Fall versuchen Sie es bitte am nächsten Morgen erneut."),n.createElement("p",{className:"py-2"},"Bitte achten Sie darauf, den richtigen Kalender für Ihr Anliegen auszuwählen. Hinweis: Bitte geben Sie bei Ihrer Terminvereinbarung zur lückenlosen Kontaktverfolgung immer Ihre korrekte Telefonnummer und E-Mail Adresse an. Wir behalten uns vor, gebuchte Termine mit falschen Angaben zu löschen."))),n.createElement("div",{className:"grid sm:grid-cols-1 gap-2"},n.createElement(Ht,{_label:"Öffnungszeiten",_data:[{stadtteil:"Brackel",montag:"08:00 - 12:00, 14:00 - 16:00",dienstag:"08:00 - 12:00, 14:00 - 15:00",mittwoch:"08:00 - 12:00, 14:00 - 15:00",donnerstag:"08:00 - 12:00, 14:00 - 18:00",freitag:"08:00 - 12:00"},{stadtteil:"Dorstfeld",montag:"09:00 - 12:00, 14:00 - 16:00",dienstag:"09:00 - 12:00, 14:00 - 15:00",mittwoch:"09:00 - 12:00, 14:00 - 15:00",donnerstag:"09:00 - 12:00, 14:00 - 18:00",freitag:"09:00 - 12:00"},{stadtteil:"Aplerbeck",montag:"08:00 - 12:00, 14:00 - 16:00",dienstag:"08:00 - 12:00, 14:00 - 15:00",mittwoch:"08:00 - 12:00, 14:00 - 15:00",donnerstag:"08:00 - 12:00, 14:00 - 18:00",freitag:"08:00 - 12:00"},{stadtteil:"Innenstadt Ost",montag:"07:00 - 12:00, 14:00 - 16:00",dienstag:"07:00 - 12:00, 14:00 - 15:00",mittwoch:"07:00 - 12:00, 14:00 - 15:00",donnerstag:"07:00 - 12:00, 14:00 - 18:00",freitag:"07:00 - 12:00, 13:00 - 16:00"},{stadtteil:"Innenstadt West",montag:"07:00 - 12:00, 14:00 - 16:00",dienstag:"07:00 - 12:00, 14:00 - 15:00",mittwoch:"07:00 - 12:00, 14:00 - 15:00",donnerstag:"07:00 - 12:00, 14:00 - 18:00",freitag:"07:00 - 12:00, 13:00 - 16:00"}],_headers:{horizontal:[[{label:"",asTd:!0},{label:"Tag",colSpan:5}],[{label:"Stadtteil",key:"stadtteil",textAlign:"left",sort:e=>e.sort(((e,t)=>e.stadtteil<t.stadtteil?-1:e.stadtteil>t.stadtteil?1:0))},{label:"Montag",key:"montag",textAlign:"center"},{label:"Dienstag",key:"dienstag",textAlign:"center"},{label:"Mittwoch",key:"mittwoch",textAlign:"center"},{label:"Donnerstag",key:"donnerstag",textAlign:"center"},{label:"Freitag",key:"freitag",textAlign:"center"}]]},_minWidth:"50em",style:{display:"inline-grid",width:"100%"}}),n.createElement(Vt,{className:"block mt-4",_ariaLabel:"Registerkarten",_tabs:[{_label:"1. Einwohnermeldeämter"},{_label:"2. Freie Termine"},{_label:"3. Persönliche Daten"}]},n.createElement("div",null,n.createElement(mt,{_level:2,_label:"Wählen Sie einen Stadtteil aus"}),n.createElement(cs,{onSubmitted:()=>{}})),n.createElement("div",null,n.createElement(mt,{_level:2,_label:"Wählen Sie einen Termin aus"}),n.createElement(ss,{onSubmitted:()=>{}})),n.createElement("div",null,n.createElement(mt,{_level:2,_label:"Geben Sie Ihre Kontaktdaten ein"}),n.createElement(ls,{onSubmitted:()=>{}})))),n.createElement("div",{className:"grid sm:grid-cols-1 gap-2"},n.createElement("div",{className:"border-top"}),n.createElement(mt,{_level:3,_label:"Fortschritt"}),n.createElement(Ft,{_value:0,_max:100,_unit:"Prozent des Formulars"}))),"appointment-form":function(){const[e,t]=(0,n.useState)(0),[r,o]=(0,n.useState)(e),a=Kp().shape(rb(rb(rb({},0===e?lb:{}),1===e?cb:{}),2===e?ib:{}));return(0,n.useEffect)((()=>{o(e)}),[e]),n.createElement(zu,{initialValues:ab,validationSchema:a,onSubmit:(n,r)=>{return o=this,null,a=function*(){console.log(n,r);const o=ob.indexOf(e),a=ob[o+1];void 0!==a&&(yield r.setTouched({}),setTimeout((()=>t(a)),1e3))},new Promise(((e,t)=>{var n=e=>{try{l(a.next(e))}catch(e){t(e)}},r=e=>{try{l(a.throw(e))}catch(e){t(e)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,r);l((a=a.apply(o,null)).next())}));var o,a}},n.createElement(Vt,{_tabs:[{_label:"1. Einwohnermeldeamt wählen"},{_label:"2. Freie Termine",_disabled:e<1},{_label:"3. Persönliche Daten",_disabled:e<2},{_label:"Zusammenfassung",_disabled:e<3}],_label:"Formular-Navigation",_selected:r,_on:{onSelect:(e,n)=>t(n)}},n.createElement("div",null,n.createElement(Hu,null)),n.createElement("div",null,n.createElement(Qp,null)),n.createElement("div",null,n.createElement(Gu,null)),n.createElement("div",null,n.createElement(Zu,null))))},"inputs-get-value":()=>{const e=(0,n.useMemo)((()=>new EventTarget),[]);return n.createElement(n.Fragment,null,n.createElement(bb.Provider,{value:e},n.createElement(Ll,null,n.createElement("p",null,"This sample show how the input components ",n.createElement("code",null,"getValue()"),' method works. It\'s called when clicking the "getValue()" button and prints the current value right next to itself.')),n.createElement("div",{className:"grid gap-4"},n.createElement(hb,{InputComponent:At,inputProps:{_label:"InputText"}}),n.createElement(hb,{InputComponent:wt,inputProps:{_label:"KolInputCheckbox"}}),n.createElement(hb,{InputComponent:kt,inputProps:{_label:"KolInputColor"}}),n.createElement(hb,{InputComponent:_t,inputProps:{_label:"KolInputDate"}}),n.createElement(hb,{InputComponent:xt,inputProps:{_label:"KolInputEmail"}}),n.createElement(hb,{InputComponent:Et,inputProps:{_label:"KolInputFile"},formatter:e=>e instanceof FileList?`FileList{${Array.from(e).map((e=>e.name)).join(", ")}}`:JSON.stringify(e)}),n.createElement(hb,{InputComponent:St,inputProps:{_label:"KolInputNumber"}}),n.createElement(hb,{InputComponent:Ot,inputProps:{_label:"KolInputPassword"}}),n.createElement(hb,{InputComponent:Lt,inputProps:{_label:"KolInputRange"}}),n.createElement(hb,{InputComponent:Tt,inputProps:{_label:"KolInputRadio",_orientation:"horizontal",_options:[{label:"New York",value:"New York"},{label:"Rio de Janeiro",value:"Rio de Janeiro"},{label:"Rosenheim",value:"Rosenheim"}],_value:"New York"}}),n.createElement(hb,{InputComponent:Dt,inputProps:{_label:"KolSelect",_options:[{label:"New York",value:"New York"},{label:"Rio de Janeiro",value:"Rio de Janeiro"},{label:"Rosenheim",value:"Rosenheim"}]}}),n.createElement(hb,{InputComponent:qt,inputProps:{_label:"KolTextarea"}}),n.createElement(hb,{InputComponent:ft,inputProps:{_label:"KolButton",_variant:"ghost",_value:"KolButton value"}}),n.createElement(hb,{InputComponent:ut,inputProps:{_label:"KolButtonLink",_value:"KolButtonLink value"}}),n.createElement("div",{className:"grid grid-cols-3 gap-4"},n.createElement("div",null),n.createElement(ft,{_label:"Run all",_variant:"primary",_on:{onClick:()=>{e.dispatchEvent(new Event("runAll"))}}})))))},"custom-tooltip-width":()=>n.createElement(ft,{_label:"Tooltip mit fixer Breite",_hideLabel:!0,style:{"--kol-tooltip-width":"400px"},_icons:"codicon codicon-reactions"})}};var gb=Object.defineProperty,vb=Object.getOwnPropertySymbols,yb=Object.prototype.hasOwnProperty,wb=Object.prototype.propertyIsEnumerable,kb=(e,t,n)=>t in e?gb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_b=(e,t)=>{for(var n in t||(t={}))yb.call(t,n)&&kb(e,n,t[n]);if(vb)for(var n of vb(t))wb.call(t,n)&&kb(e,n,t[n]);return e};const xb=_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b(_b({},gr),Wt),Yt),Xt),en),sn),fn),dn),un),Xn),tr),nr),{form:{}}),vr),yr),wr),kr),Wr),ho),jo),ta),ka),Ma),il),$l),Yl),mi),gi),Si),Li),Ai),$i),Ni),Ci),zi),Pi),ji),oc),oc),ac),lc),sc),xc),Pc),ts),rs),os),mb),Eb=({children:e,isMobile:t})=>t?n.createElement(at,{_label:"Alle Komponenten",class:"mt"},e):n.createElement("div",{className:"mt"},e),Sb=({version:e,theme:t,routes:r,routeList:o,sample:a,onThemeChange:l})=>{const[i,c]=(0,n.useState)(!0),s=function(){const e=matchMedia("(max-width: 1023px)"),[t,r]=(0,n.useState)(e.matches),o=()=>{r(e.matches)};return(0,n.useEffect)((()=>(o(),e.addEventListener("change",o),()=>{e.removeEventListener("change",o)})),[e]),t}(),f=()=>o.indexOf(a),d=e=>{var t;location.replace(e.target.href),null==(t=document.querySelector("#route-container"))||t.scrollIntoView({behavior:"smooth"})};return n.createElement("aside",{className:"app-sidebar p-4"},n.createElement("div",{className:"flex flex-justify-between flex-items-center"},n.createElement(mt,{_label:"KoliBri React"}),n.createElement(Zt,{_label:e})),n.createElement(Dt,{_label:"Theme wählen",_options:lr,_on:{onChange:(e,t)=>{i?c(!1):l(t[0])}},_value:[t],class:"mt"}),n.createElement(mt,{_label:"Komponenten",_level:2,className:"block mt"}),n.createElement("div",{className:"flex flex-justify-between flex-items-center mt"},n.createElement(ft,{_icons:"codicon codicon-arrow-left",_hideLabel:!0,_label:"Vorherige Komponente auswählen",_on:{onClick:()=>{const e=f(),t=0===e?o.length-1:e-1;location.replace(`#${o[t]}`)}}}),n.createElement("span",{className:"text-center"},a.replace(/\//g," ")," (",f()+1,"/",o.length,")"),n.createElement(ft,{_icons:"codicon codicon-arrow-right",_hideLabel:!0,_label:"Nächste Komponente auswählen",_on:{onClick:()=>{const e=f(),t=e===o.length-1?0:e+1;location.replace(`#${o[t]}`)}}})),n.createElement(Eb,{isMobile:s},n.createElement("nav",null,n.createElement("ul",{className:"m0 p0 list-inside"},Object.entries(r).map((([e,t])=>n.createElement("li",{key:e,className:"mt-2"},e,n.createElement("ul",{className:"list-inside ml p0"},Object.keys(t).map((t=>n.createElement("li",{key:`${e}/${t}`},n.createElement(Nt,{_label:t,_href:`#/${e}/${t}`,_on:{onClick:d}}))))))))))))};var Ob=l(476);ur(localStorage);const Tb=(e,t="/")=>{let n=[];for(const r in e)if(e[r]){const o=e[r],a=`${t}${r}`;"function"==typeof o?n.push(a):"object"==typeof o&&null!==o&&(n=n.concat(Tb(o,`${a}/`)))}return n},Lb=e=>{const t=[];for(const r in e)if(e[r]){const o=e[r],a=`/${r}`;if("function"==typeof o)t.push(n.createElement(se,{key:a,path:a,element:n.createElement(o,null)})),t.push(n.createElement(se,{key:`${a}/all`,path:`${a}/all`,element:n.createElement("div",{className:"d-grid gap-4"},lr.filter((e=>["bmf","default","ecl-ec","ecl-eu","itzbund"].indexOf(e.value)>=0)).map((e=>n.createElement("div",{className:"d-grid gap-2",key:e.value,"data-theme":e.value},n.createElement("div",{className:"mt-4"},n.createElement("strong",null,e.label)),n.createElement("div",{className:"my-2"},n.createElement(o,null)),n.createElement("hr",{"aria-hidden":"true"})))))}));else if("object"==typeof o&&null!==o){const e=Object.keys(o);e.length>0&&t.push(n.createElement(se,{key:a,path:`${a}/*`,element:n.createElement(de,null,n.createElement(se,{path:"/",element:n.createElement(ce,{to:e[0]})}),Lb(o))}))}}return t},Ab=Tb(xb),$b=Lb(xb);console.log("ROUTE_LIST",Ab);const Nb=new Map;Ab.forEach((e=>{const t=e.split("/");Nb.has(t[1])||Nb.set(t[1],{label:t[1],value:e})}));const Cb=()=>{var e;const t=Y(),[r,o]=function(e){let t=n.useRef(pe(e)),r=n.useRef(!1),o=Y(),a=n.useMemo((()=>function(e,t){let n=pe(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(o.search,r.current?null:t.current)),[o.search]),l=J(),i=n.useCallback(((e,t)=>{const n=pe("function"==typeof e?e(a):e);r.current=!0,l("?"+n,t)}),[l,a]);return[a,i]}(),a=null!=(e=r.get("theme"))?e:pr(),l=r.has("hideMenus");return(e=>{if(!ar(e))throw new Error(`The theme identifier "${e}" is not valid or an available option.`);fr.theme=e,dr.setItem(sr,JSON.stringify(fr))})(a),(()=>{const e=Y();(0,Ob.s)("#"+e.pathname)})(),document.title=`KoliBri-Handout - ${br(pr())} | v${ir}`,document.body.setAttribute("class",a),document.body.dataset.theme=a,n.createElement(Tl.Provider,{value:l},n.createElement("div",{className:l?"":"app-container","data-theme":a},!l&&n.createElement(Sb,{version:ir,theme:a,sample:t.pathname,routes:xb,routeList:Ab,onThemeChange:e=>{o({theme:e}),window.location.reload()}}),n.createElement("div",{className:"p-4",id:"route-container"},!l&&(e=>or.includes(e))(a)&&n.createElement(ct,{className:"mb-3",_label:"DRAFT",_color:"#db5461"}),n.createElement(de,null,$b,n.createElement(se,{path:"*",element:n.createElement(lt,{_type:"info"},"This code example has not been migrated yet - it's coming soon!")})))))};var zb;zb=function*(){try{yield(0,_e.r)([Ke,qe,We,Ge,Qe],Ee,{theme:{detect:"auto"}})}catch(e){console.warn("Theme registration failed:",e)}const e=document.querySelector("div#app");e instanceof HTMLDivElement&&(0,o.s)(e).render(n.createElement(n.StrictMode,null,n.createElement(he,null,n.createElement(Cb,null))))},new Promise(((e,t)=>{var n=e=>{try{o(zb.next(e))}catch(e){t(e)}},r=e=>{try{o(zb.throw(e))}catch(e){t(e)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,r);o((zb=zb.apply(undefined,null)).next())}))})()})();