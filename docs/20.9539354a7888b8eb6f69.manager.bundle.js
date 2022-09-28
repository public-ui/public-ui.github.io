/*! For license information please see 20.9539354a7888b8eb6f69.manager.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{842:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"kol_badge",(function(){return KolBadge}));var _index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(126),_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(905),_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(906),_index_m_df5ce03f_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(907),_index_c4d8198b_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(921),_color_20533e03_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(917);var colorParse=function parse(t){var a,e,r=[],o=1;if("string"==typeof t)if(_index_c4d8198b_js__WEBPACK_IMPORTED_MODULE_4__.a[t])r=_index_c4d8198b_js__WEBPACK_IMPORTED_MODULE_4__.a[t].slice(),e="rgb";else if("transparent"===t)o=0,e="rgb",r=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(t)){var i=t.slice(1);o=1,(s=i.length)<=4?(r=[parseInt(i[0]+i[0],16),parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16)],4===s&&(o=parseInt(i[3]+i[3],16)/255)):(r=[parseInt(i[0]+i[1],16),parseInt(i[2]+i[3],16),parseInt(i[4]+i[5],16)],8===s&&(o=parseInt(i[6]+i[7],16)/255)),r[0]||(r[0]=0),r[1]||(r[1]=0),r[2]||(r[2]=0),e="rgb"}else if(a=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(t)){var n=a[1],l="rgb"===n;e=i=n.replace(/a$/,"");var s="cmyk"===i?4:"gray"===i?1:3;r=a[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(t,a){if(/%$/.test(t))return a===s?parseFloat(t)/100:"rgb"===i?255*parseFloat(t)/100:parseFloat(t);if("h"===i[a]){if(/deg$/.test(t))return parseFloat(t);if(void 0!==baseHues[t])return baseHues[t]}return parseFloat(t)})),n===i&&r.push(1),o=l||void 0===r[s]?1:r[s],r=r.slice(0,s)}else t.length>10&&/[0-9](?:\s|\/)/.test(t)&&(r=t.match(/([0-9]+)/g).map((function(t){return parseFloat(t)})),e=t.match(/([a-z])/gi).join("").toLowerCase());else isNaN(t)?Array.isArray(t)||t.length?(r=[t[0],t[1],t[2]],e="rgb",o=4===t.length?t[3]:1):t instanceof Object&&(null!=t.r||null!=t.red||null!=t.R?(e="rgb",r=[t.r||t.red||t.R||0,t.g||t.green||t.G||0,t.b||t.blue||t.B||0]):(e="hsl",r=[t.h||t.hue||t.H||0,t.s||t.saturation||t.S||0,t.l||t.lightness||t.L||t.b||t.brightness]),o=t.a||t.alpha||t.opacity||1,null!=t.opacity&&(o/=100)):(e="rgb",r=[t>>>16,(65280&t)>>>8,255&t]);return{space:e,values:r,alpha:o}},baseHues={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var colorRgba=function(t){var a;Array.isArray(t)&&t.raw&&(t=String.raw.apply(null,arguments));var e=colorParse(t);if(!e.space)return[];var r=[0,0,0],o="h"===e.space[0]?[360,100,100]:[255,255,255];return(a=Array(3))[0]=Math.min(Math.max(e.values[0],r[0]),o[0]),a[1]=Math.min(Math.max(e.values[1],r[1]),o[1]),a[2]=Math.min(Math.max(e.values[2],r[2]),o[2]),"h"===e.space[0]&&(a=hsl2rgb(a)),a.push(Math.min(Math.max(e.alpha,0),1)),a};function hsl2rgb(t){var a,e,r,o,i,n=t[0]/360,l=t[1]/100,s=t[2]/100,c=0;if(0===l)return[i=255*s,i,i];for(a=2*s-(e=s<.5?s*(1+l):s+l-s*l),o=[0,0,0];c<3;)(r=n+1/3*-(c-1))<0?r++:r>1&&r--,i=6*r<1?a+6*(e-a)*r:2*r<1?e:3*r<2?a+(e-a)*(2/3-r)*6:a,o[c++]=255*i;return o}const calcContrastColor=(t,a,e,r=1)=>{const o=[Math.max(Math.min(Math.round(a[0]+r*Math.max(1,a[0]/100)),255),0),Math.max(Math.min(Math.round(a[1]+r*Math.max(1,a[1]/100)),255),0),Math.max(Math.min(Math.round(a[2]+r*Math.max(1,a[2]/100)),255),0)],i=Object(_index_m_df5ce03f_js__WEBPACK_IMPORTED_MODULE_3__.b)(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.r.hex(`rgba(${t.join(",")},1)`),_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.r.hex(`rgba(${o.join(",")},1)`)),n=o[0]+o[1]+o[2];return 0===n||765===n||i>e?o:calcContrastColor(t,o,e,r)},getContrastColor=(t,a,e,r=1)=>{if(cache.has(t))return cache.get(t);const o=calcContrastColor(t,a,e,r);return cache.set(t,o),o},cache=new Map,createContrastColorPair=(t,a=7)=>{let e=[0,0,0,1],r=[255,255,255,1];"string"==typeof t?(e=colorRgba(t),r=e):"object"==typeof t&&null!==t&&"string"==typeof t.baseColor&&(e=colorRgba(t.baseColor),r="string"==typeof t.contrastColor?colorRgba(t.contrastColor):e);const o=(299*e[0]+587*e[1]+114*e[2])/1e3>=128?-1:1;return r=[...getContrastColor([e[0],e[1],e[2]],[r[0],r[1],r[2]],a,o),1],{baseColor:_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.r.hex(`rgba(${e.join(",")})`),contrastColor:_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.r.hex(`rgba(${r.join(",")})`)}};Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_1__.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const HACK_REG_EX=/^([a-f0-9]{3}|[a-f0-9]{6})$/,KolBadge=class{constructor(t){Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.f)(this,t),this.bgColorStr="#000",this.colorStr="#fff",this._color=_color_20533e03_js__WEBPACK_IMPORTED_MODULE_5__.b.Schwarz,this._iconAlign="left",this._iconOnly=!1,this.state={_color:_color_20533e03_js__WEBPACK_IMPORTED_MODULE_5__.b.Schwarz,_label:""},this.handleColorChange=t=>{let a,e=t;"string"==typeof e?(HACK_REG_EX.test(e)&&(Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_1__.d)("[KolBadge] Bitte verwenden Sie zukünftig nur noch das Standard-Farbformat für CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)."),e=`#${e}`),a=createContrastColorPair(e)):a=createContrastColorPair({baseColor:e.backgroundColor,contrastColor:e.color}),this.bgColorStr=a.baseColor,this.colorStr=a.contrastColor}}render(){return Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("span",{style:{backgroundColor:this.bgColorStr,color:this.colorStr}},"string"==typeof this.state._icon&&"left"===this.state._iconAlign&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("kol-icon-icofont",{class:{"mr-1":!1===this.state._iconOnly},style:{color:this.colorStr},_ariaLabel:!0===this.state._iconOnly?this.state._label:"",_icon:this.state._icon}),!0!==this.state._iconOnly&&this.state._label,"string"==typeof this.state._icon&&"right"===this.state._iconAlign&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("kol-icon-icofont",{class:{"ml-1":!1===this.state._iconOnly},style:{color:this.colorStr},_ariaLabel:!0===this.state._iconOnly?this.state._label:"",_icon:this.state._icon}))}validateColor(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.a)(this,"_color",(t=>"string"==typeof t||"object"==typeof t&&null!==t),new Set(["string","KoliBriColor"]),t,{defaultValue:_color_20533e03_js__WEBPACK_IMPORTED_MODULE_5__.b.Schwarz,hooks:{beforePatch:this.handleColorChange}})}validateIcon(t){((t,a)=>{Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.a)(t,"_icon",(t=>"string"==typeof t),new Set(["Icofont"]),a,{required:!0})})(this,t)}validateIconAlign(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_iconAlign:t}))}validateIconOnly(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_iconOnly",t)}validateLabel(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.t)(this,"_label",t,{required:!0})}componentWillLoad(){this.validateColor(this._color),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label)}static get watchers(){return{_color:["validateColor"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}};KolBadge.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b{font-weight:bolder}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;top:-0.5em}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mr-1{margin-right:calc(1 * var(--kolibri-spacing))}.ml-1{margin-left:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.ml-6{margin-left:calc(6 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.relative{position:relative}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.no-underline{text-decoration:none}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}span{display:inline-block;border-radius:var(--kolibri-border-radius);padding-left:calc(2 * var(--kolibri-spacing));padding-right:calc(2 * var(--kolibri-spacing));padding-top:0.125rem;padding-bottom:0.125rem}'}},905:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return a11yHintLabelingLandmarks})),__webpack_require__.d(__webpack_exports__,"b",(function(){return a11yHintDisabled})),__webpack_require__.d(__webpack_exports__,"c",(function(){return a11yHint})),__webpack_require__.d(__webpack_exports__,"d",(function(){return devHint})),__webpack_require__.d(__webpack_exports__,"e",(function(){return deprecatedHint})),__webpack_require__.d(__webpack_exports__,"f",(function(){return featureHint})),__webpack_require__.d(__webpack_exports__,"g",(function(){return uiUxHintMillerscheZahl}));var _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61);const a11yCache=new Set,a11yHint=e=>{!1===a11yCache.has(e)&&(a11yCache.add(e),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.info(e,{classifier:"✋a11y",overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=e=>{!1===deprecatedCache.has(e)&&(deprecatedCache.add(e),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.warn(e,{classifier:"🔥deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=e=>{!1===devCache.has(e)&&(devCache.add(e),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(e,{classifier:"💻dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,a=!1)=>{!1===featureCache.has(e)&&(featureCache.add(e),e+=!0===a?" ✅":"",_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(e,{classifier:"🌟feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,a=8)=>{var i;a>7&&(i=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===uiUxCache.has(i)&&(uiUxCache.add(i),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(i,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"})))}},906:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return watchValidator})),__webpack_require__.d(__webpack_exports__,"b",(function(){return watchBoolean})),__webpack_require__.d(__webpack_exports__,"c",(function(){return watchJsonArrayString})),__webpack_require__.d(__webpack_exports__,"d",(function(){return watchNumber})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setEventTargetAndStopPropagation})),__webpack_require__.d(__webpack_exports__,"f",(function(){return emptyStringByArrayHandler})),__webpack_require__.d(__webpack_exports__,"g",(function(){return mapBoolean2String})),__webpack_require__.d(__webpack_exports__,"h",(function(){return scrollBySelector})),__webpack_require__.d(__webpack_exports__,"i",(function(){return KoliBriUtils})),__webpack_require__.d(__webpack_exports__,"j",(function(){return koliBriA11yColorContrast})),__webpack_require__.d(__webpack_exports__,"k",(function(){return koliBriQuerySelector})),__webpack_require__.d(__webpack_exports__,"l",(function(){return koliBriQuerySelectorAll})),__webpack_require__.d(__webpack_exports__,"m",(function(){return mapStringOrBoolean2String})),__webpack_require__.d(__webpack_exports__,"n",(function(){return koliBriQuerySelectorColors})),__webpack_require__.d(__webpack_exports__,"o",(function(){return objectObjectHandler})),__webpack_require__.d(__webpack_exports__,"p",(function(){return parseJson})),__webpack_require__.d(__webpack_exports__,"q",(function(){return stringifyJson})),__webpack_require__.d(__webpack_exports__,"r",(function(){return rgbaConvert})),__webpack_require__.d(__webpack_exports__,"s",(function(){return setState})),__webpack_require__.d(__webpack_exports__,"t",(function(){return watchString}));var _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61),_index_m_df5ce03f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(907),_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(905),_register_9f63b6c5_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(62);const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},css_1=function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},hex_1=function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),l=num2hex(t[2]),a=function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}(o,n,l,t=num2hex(Math.round(t[3])));return r?a?"#"+o.charAt(0)+n.charAt(0)+l.charAt(0):"#"+o+n+l:a?"#"+o.charAt(0)+n.charAt(0)+l.charAt(0)+t.charAt(0):"#"+o+n+l+t},num_1=function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function parse(e){return"string"==typeof e?function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),l=hex2num(t[2]),a=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(l)||isNaN(a))return;return[o,n,l,a]}}(e)||function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),l=hex2num(t.slice(4,6)),a=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(l)||isNaN(a))return;return[o,n,l,a]}}(e)||function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}(e)||function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),l=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=l)return[r,o,n,l]}}(e)||[0,0,0,255]:function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTargetAndStopPropagation=(e,t)=>{Object.defineProperty(e,"target",{value:t,writable:!1}),null==e||e.stopPropagation()},setState=(e,t,r,o={})=>{var n,l;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(l=e.nextHooks.get(t))||void 0===l||l.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},watchValidator=(e,t,r,o,n,l={})=>{!r(n)||void 0!==(null==l?void 0:l.allowNull)&&!1!==(null==l?void 0:l.allowNull)&&null!==n?void 0!==(null==l?void 0:l.defaultValue)||void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required)?setState(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(!0===l.allowNull&&o.add(null),!0!==l.required&&o.add(void 0),((e,t,r,o)=>{Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,n,o)):setState(e,t,n,null==l?void 0:l.hooks)},watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o)=>{watchValidator(e,t,(e=>"string"==typeof e&&e.length>=("number"==typeof(null==o?void 0:o.minLength)?null==o?void 0:o.minLength:1)),new Set(["String (nicht leer)"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),l={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{if("string"==typeof o&&(o=parseJson(o)),Array.isArray(o)){const a=o.find((e=>!r(e)));void 0===a&&n(o)?setState(e,t,o,l.hooks):objectObjectHandler(a,(()=>{throw console.log(a),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(e){throw new Error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet.")}},parseJson=e=>{try{return JSON.parse(e)}catch(t){try{return JSON.parse(e.replace(/'/g,'"'))}catch(e){throw new Error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),l=Object(_index_m_df5ce03f_js__WEBPACK_IMPORTED_MODULE_1__.b)(o,n),a={backgroundColor:o,color:n,domNode:e,level:Object(_index_m_df5ce03f_js__WEBPACK_IMPORTED_MODULE_1__.a)(l),score:l};return l<4.5&&_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.error(["Color-Contrast-Error",{backgroundColor:a.backgroundColor,color:a.color,level:a.level,score:a.score},a.domNode]),a},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)},scrollByHTMLElement=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.d)().pageYOffset-50}),e.focus()):Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},scrollBySelector=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=koliBriQuerySelector(e,t);r instanceof HTMLElement?scrollByHTMLElement(r):Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const l=t.domNode.children;for(let e=0;e<l.length;e++)r.add(l[e]);const a=Array.from(r);for(let r=0;r<a.length;r++){let o=KoliBriUtils.cache.get(a[r]);void 0===o&&(o=koliBriA11yColorContrast(a[r],t)),KoliBriUtils.cache.set(a[r],o);const l=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==l){n=l;break}}}else _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriKeyValueStore extends _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.a{constructor(){super(...arguments),this.store=new Map}register(e,t){return this.store.set(e,t),this}get(e){if(this.store.has(e))return this.store.get(e);throw new Error(`No value for key '${e}' in KoliBri-Store found.`)}}class KoliBriDevHelper{}KoliBriDevHelper.keyStore=new KoliBriKeyValueStore,KoliBriDevHelper.patchTheme=_register_9f63b6c5_js__WEBPACK_IMPORTED_MODULE_3__.d,KoliBriDevHelper.patchThemeTag=_register_9f63b6c5_js__WEBPACK_IMPORTED_MODULE_3__.b,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.scrollByHTMLElement=scrollByHTMLElement,KoliBriDevHelper.scrollBySelector=scrollBySelector,KoliBriDevHelper.stringifyJson=stringifyJson},907:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return f})),__webpack_require__.d(__webpack_exports__,"b",(function(){return s}));var e=1/12.92;function u(n){return Math.pow((n+.055)/1.055,2.4)}function a(a){var i=a[0]/255,c=a[1]/255,o=a[2]/255;return.2126*(i<=.03928?i*e:u(i))+.7152*(c<=.03928?c*e:u(c))+.0722*(o<=.03928?o*e:u(o))}function i(n){var r=255;8===(n=n.replace(/^#/,"")).length&&(r=parseInt(n.slice(6,8),16),n=n.substring(0,6)),4===n.length&&(r=parseInt(n.slice(3,4).repeat(2),16),n=n.substring(0,3)),3===n.length&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var t=parseInt(n,16);return[t>>16,t>>8&255,255&t,r]}function o(n,r){return function c(n,r){return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(a(n),a(r))}function s(n,r){return o(i(n),i(r))}function f(n){return n>=7?"AAA":n>=4.5?"AA":n>=3?"AA Large":"Fail"}},917:function(module,__webpack_exports__,__webpack_require__){"use strict";var Nationalfarben,Farbspektrum,a;__webpack_require__.d(__webpack_exports__,"a",(function(){return Farbspektrum})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Nationalfarben})),(a=Nationalfarben||(Nationalfarben={})).Schwarz="#000000",a.Rot="#ff0000",a.Gold="#ffc0c0",function(a){a.Violett="#5f316e",a.Dunkelrot="#780f2d",a.Rot="#c0003c",a.Orange="#cd5038",a.Hellorange="#f7bb3d",a.Gelb="#f9e03a",a["Hellgrün"]="#c1ca31",a.Oliv="#597c39",a["Dunkelgrün"]="#005c45",a["Grün"]="#00854a",a["Türkis"]="#00818b",a.Hellblau="#80cdec",a.Blau="#0077b6",a.Petrol="#007194",a.Dunkelblau="#004b76",a.Dunkelgrau="#576164",a.Hellgrau="#bec5c9"}(Farbspektrum||(Farbspektrum={}))},921:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return colorName}));var colorName={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}]);