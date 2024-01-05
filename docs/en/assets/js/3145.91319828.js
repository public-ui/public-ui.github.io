"use strict";
exports.id = 3145;
exports.ids = [3145];
exports.modules = {

/***/ 83254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a11yHint),
/* harmony export */   b: () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   c: () => (/* binding */ uiUxHintMillerscheZahl),
/* harmony export */   d: () => (/* binding */ devHint),
/* harmony export */   e: () => (/* binding */ a11yHintDisabled),
/* harmony export */   f: () => (/* binding */ featureHint),
/* harmony export */   g: () => (/* binding */ devWarning),
/* harmony export */   u: () => (/* binding */ uiUxHint)
/* harmony export */ });
/* harmony import */ var _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61789);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=(e,i)=>{(!1===a11yCache.has(e)||(null==i?void 0:i.force))&&(a11yCache.add(e),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},devCache=new Set,devHint=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},devWarning=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,i=!1,n)=>{(!1===featureCache.has(e)||(null==n?void 0:n.force))&&(featureCache.add(e),e+=!0===i?" ✅":"",_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,i)=>{(!1===uiUxCache.has(e)||(null==i?void 0:i.force))&&(uiUxCache.add(e),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,i=8)=>{i>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};

/***/ }),

/***/ 76770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ colorRgba),
/* harmony export */   h: () => (/* binding */ handleColorChange),
/* harmony export */   v: () => (/* binding */ validateColor)
/* harmony export */ });
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45366);
/* harmony import */ var _a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83254);
/*!
 * KoliBri - The accessible HTML-Standard
 */
var colorName={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},colorParse=parse,baseHues={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function parse(r){var e,a,o=[],t=1;if("string"==typeof r)if(r=r.toLowerCase(),colorName[r])o=colorName[r].slice(),a="rgb";else if("transparent"===r)t=0,a="rgb",o=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(r)){var n=r.slice(1);t=1,(s=n.length)<=4?(o=[parseInt(n[0]+n[0],16),parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16)],4===s&&(t=parseInt(n[3]+n[3],16)/255)):(o=[parseInt(n[0]+n[1],16),parseInt(n[2]+n[3],16),parseInt(n[4]+n[5],16)],8===s&&(t=parseInt(n[6]+n[7],16)/255)),o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0),a="rgb"}else if(e=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(r)){var l=e[1],i="rgb"===l;a=n=l.replace(/a$/,"");var s="cmyk"===n?4:"gray"===n?1:3;o=e[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(r,e){if(/%$/.test(r))return e===s?parseFloat(r)/100:"rgb"===n?255*parseFloat(r)/100:parseFloat(r);if("h"===n[e]){if(/deg$/.test(r))return parseFloat(r);if(void 0!==baseHues[r])return baseHues[r]}return parseFloat(r)})),l===n&&o.push(1),t=i||void 0===o[s]?1:o[s],o=o.slice(0,s)}else r.length>10&&/[0-9](?:\s|\/)/.test(r)&&(o=r.match(/([0-9]+)/g).map((function(r){return parseFloat(r)})),a=r.match(/([a-z])/gi).join("").toLowerCase());else isNaN(r)?Array.isArray(r)||r.length?(o=[r[0],r[1],r[2]],a="rgb",t=4===r.length?r[3]:1):r instanceof Object&&(null!=r.r||null!=r.red||null!=r.R?(a="rgb",o=[r.r||r.red||r.R||0,r.g||r.green||r.G||0,r.b||r.blue||r.B||0]):(a="hsl",o=[r.h||r.hue||r.H||0,r.s||r.saturation||r.S||0,r.l||r.lightness||r.L||r.b||r.brightness]),t=r.a||r.alpha||r.opacity||1,null!=r.opacity&&(t/=100)):(a="rgb",o=[r>>>16,(65280&r)>>>8,255&r]);return{space:a,values:o,alpha:t}}var colorRgba=function(r){var e;Array.isArray(r)&&r.raw&&(r=String.raw.apply(null,arguments));var a=colorParse(r);if(!a.space)return[];var o=[0,0,0],t="h"===a.space[0]?[360,100,100]:[255,255,255];return(e=Array(3))[0]=Math.min(Math.max(a.values[0],o[0]),t[0]),e[1]=Math.min(Math.max(a.values[1],o[1]),t[1]),e[2]=Math.min(Math.max(a.values[2],o[2]),t[2]),"h"===a.space[0]&&(e=hsl2rgb(e)),e.push(Math.min(Math.max(a.alpha,0),1)),e};function hsl2rgb(r){var e,a,o,t,n,l=r[0]/360,i=r[1]/100,s=r[2]/100,u=0;if(0===i)return[n=255*s,n,n];for(e=2*s-(a=s<.5?s*(1+i):s+i-s*i),t=[0,0,0];u<3;)(o=l+1/3*-(u-1))<0?o++:o>1&&o--,n=6*o<1?e+6*(a-e)*o:2*o<1?a:3*o<2?e+(a-e)*(2/3-o)*6:e,t[u++]=255*n;return t}const getContrastYIQ=(r,e,a)=>(299*r+587*e+114*a)/1e3>=128?-1:1,calcColorContrast=(r,e,a,o=1)=>{const t=[Math.max(Math.min(Math.round(e[0]+o*Math.max(1,e[0]/100)),255),0),Math.max(Math.min(Math.round(e[1]+o*Math.max(1,e[1]/100)),255),0),Math.max(Math.min(Math.round(e[2]+o*Math.max(1,e[2]/100)),255),0)],n=(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.b)(_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.r.hex(`rgba(${r.join(",")},1)`),_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.r.hex(`rgba(${t.join(",")},1)`)),l=t[0]+t[1]+t[2];return 0===l||765===l||n>a?{background:r,foreground:t,contrast:n}:calcColorContrast(r,t,a,o)},cache=new Map,getColorContrast=(r,e,a,o=1)=>{if(cache.has(r))return cache.get(r);const t=calcColorContrast(r,e,a,o);return cache.set(r,t),t},createContrastColorPair=(r,e=7)=>{let a=[0,0,0,1],o=[255,255,255,1];"string"==typeof r?(a=colorRgba(r),o=a):"object"==typeof r&&null!==r&&"string"==typeof r.background&&"string"==typeof r.foreground&&(a=colorRgba(r.background),o="string"==typeof r.foreground?colorRgba(r.foreground):a);const t=getContrastYIQ(a[0],a[1],a[2]),n=getColorContrast([a[0],a[1],a[2]],[o[0],o[1],o[2]],e,t);return o=[...n.foreground,1],{background:_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.r.hex(`rgba(${a.join(",")})`),foreground:_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.r.hex(`rgba(${o.join(",")})`),contrast:n.contrast}},HEX_REGEX=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function isHexString(r){return HEX_REGEX.test(r)}function isColorObjectString(r){if(r.startsWith("{"))try{const e=JSON.parse(r);if(isValidColorPair(e))return{type:"ColorPair",value:e}}catch(r){return{type:null,value:null}}return{type:null,value:null}}function typeOfColor(r){if(r)if("string"==typeof r){if(isHexString(r))return{type:"string",valid:!0,value:r};{const e=isColorObjectString(r);if(e.value)return{type:e.type,valid:!0,value:e.value}}}else{const e=r;if(isValidColorPair(e))return{type:"ColorPair",valid:!0,value:e}}return{type:null,valid:!1,value:""}}function isValidColorPair(r){return!("object"!=typeof r||!r||"string"!=typeof r.backgroundColor||!("string"==typeof r.foregroundColor||r.foregroundColor&&"string"==typeof r.foregroundColor.primary&&"string"==typeof r.foregroundColor.secondary&&"string"==typeof r.foregroundColor.neutral))}function validatorFunction(r){const e=typeOfColor(r);switch(e.type){case null:return!1;case"string":case"ColorPair":return e.valid}}const validateColor=(r,e,a)=>{(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.w)(r,"_color",validatorFunction,new Set(["rgb in hex","ColorPair"]),e,a)},handleColorChange=r=>{var e;let a;const o=typeOfColor(r);switch(o.type){case"string":a=createContrastColorPair(o.value);break;case"ColorPair":{const r=o.value;let t="";"string"==typeof r.foregroundColor?t=r.foregroundColor:(null===(e=r.foregroundColor)||void 0===e?void 0:e.primary)&&(t=r.foregroundColor.primary),t&&"string"==typeof t||(t="#fff"),a=createContrastColorPair({background:r.backgroundColor,foreground:t});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(r)})`),a=createContrastColorPair({background:"#000",foreground:"#000"})}return a.contrast<7&&(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__.a)(`[KolBadge] The contrast of ${a.contrast} (≥7, AAA) is to low, between the color pair ${a.background} and ${a.foreground}.`),{backgroundColor:a.background,foregroundColor:a.foreground}};

/***/ }),

/***/ 3145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_badge: () => (/* binding */ KolBadge)
/* harmony export */ });
/* harmony import */ var _index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73536);
/* harmony import */ var _color_2aa7218a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76770);
/* harmony import */ var _a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83254);
/* harmony import */ var _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61789);
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host > span {\n\t\tdisplay: inline-flex;\n\t\tplace-items: center;\n\t\toutline: transparent solid 1px; /* Visible with forced colors  */\n\t}\n\n\t:host > span > kol-button-wc button {\n\t\tcolor: inherit;\n\t}\n}\n";(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_0__.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const KolBadge=class{constructor(t){(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,t),this.bgColorStr="#000",this.colorStr="#fff",this.id=(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_2__.n)(),this.handleColorChange=t=>{const n=(0,_color_2aa7218a_js__WEBPACK_IMPORTED_MODULE_3__.h)(t);this.bgColorStr=n.backgroundColor,this.colorStr=n.foregroundColor},this._color="#000",this._icons=void 0,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"}}}renderSmartButton(t){return (0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-button-wc",{_ariaControls:this.id,_customClass:t._customClass,_disabled:t._disabled,_hideLabel:!0,_icons:t._icons,_id:t._id,_label:t._label,_on:t._on,_tooltipAlign:t._tooltipAlign,_variant:t._variant})}render(){const t="object"==typeof this.state._smartButton&&null!==this.state._smartButton;return (0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.H,null,(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-span-wc",{id:t?this.id:void 0,_allowMarkdown:!0,_icons:this._icons,_label:this._label}),t&&this.renderSmartButton(this.state._smartButton)))}validateColor(t){(0,_color_2aa7218a_js__WEBPACK_IMPORTED_MODULE_3__.v)(this,t,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateSmartButton(t){(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_4__.o)(t,(()=>{try{t=(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_4__.p)(t)}catch(t){}(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_4__.s)(this,"_smartButton",t)}))}componentWillLoad(){this.validateColor(this._color),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_smartButton:["validateSmartButton"]}}};KolBadge.style={default:defaultStyleCss};

/***/ }),

/***/ 45366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ KoliBriDevHelper),
/* harmony export */   a: () => (/* binding */ watchBoolean),
/* harmony export */   b: () => (/* binding */ s),
/* harmony export */   c: () => (/* binding */ watchJsonArrayString),
/* harmony export */   d: () => (/* binding */ watchString),
/* harmony export */   e: () => (/* binding */ watchNumber),
/* harmony export */   f: () => (/* binding */ setEventTarget),
/* harmony export */   g: () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   h: () => (/* binding */ mapBoolean2String),
/* harmony export */   i: () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   j: () => (/* binding */ KoliBriUtils),
/* harmony export */   k: () => (/* binding */ koliBriQuerySelector),
/* harmony export */   l: () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   m: () => (/* binding */ mapString2Unknown),
/* harmony export */   n: () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   o: () => (/* binding */ objectObjectHandler),
/* harmony export */   p: () => (/* binding */ parseJson),
/* harmony export */   q: () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   r: () => (/* binding */ rgbaConvert),
/* harmony export */   s: () => (/* binding */ setState),
/* harmony export */   t: () => (/* binding */ stringifyJson),
/* harmony export */   w: () => (/* binding */ watchValidator)
/* harmony export */ });
/* harmony import */ var _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61789);
/* harmony import */ var _a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83254);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=obj,css_1=css,hex_1=hex,num_1=num;function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),l=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),l=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),l=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,l=o[1]/255,i=o[2]/255,s=a<=.03928?a*e:u(a),c=l<=.03928?l*e:u(l),d=i<=.03928?i*e:u(i);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.d)()&&(_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;if(void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r){e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)}},logWarn=(e,t,r,o)=>{(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):null!=n||a.required?(a.required||o.add(null),logWarn(e,t,n,o)):setState(e,t,a.defaultValue,a.hooks)}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(l,(()=>{throw _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(l),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.a)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.a)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.a)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),a=s(o,n),l={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const l=Array.from(r);for(let r=0;r<l.length;r++){let o=KoliBriUtils.cache.get(l[r]);void 0===o&&(o=koliBriA11yColorContrast(l[r],t)),KoliBriUtils.cache.set(l[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.b,KoliBriDevHelper.patchThemeTag=_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.A,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ })

};
;