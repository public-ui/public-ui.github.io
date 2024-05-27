/*! For license information please see 8691.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[8691],{5656:(e,n,t)=>{t.d(n,{c:()=>l,h:()=>f,v:()=>b});var r=t(5445),o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},a={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},i=function(e){var n,t,r=[],i=1;if("string"==typeof e)if(e=e.toLowerCase(),o[e])r=o[e].slice(),t="rgb";else if("transparent"===e)i=0,t="rgb",r=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var l=e.slice(1);i=1,(u=l.length)<=4?(r=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===u&&(i=parseInt(l[3]+l[3],16)/255)):(r=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===u&&(i=parseInt(l[6]+l[7],16)/255)),r[0]||(r[0]=0),r[1]||(r[1]=0),r[2]||(r[2]=0),t="rgb"}else if(n=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=n[1],d="rgb"===s;t=l=s.replace(/a$/,"");var u="cmyk"===l?4:"gray"===l?1:3;r=n[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,n){if(/%$/.test(e))return n===u?parseFloat(e)/100:"rgb"===l?255*parseFloat(e)/100:parseFloat(e);if("h"===l[n]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==a[e])return a[e]}return parseFloat(e)})),s===l&&r.push(1),i=d||void 0===r[u]?1:r[u],r=r.slice(0,u)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(r=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),t=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(r=[e[0],e[1],e[2]],t="rgb",i=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(t="rgb",r=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(t="hsl",r=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),i=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(i/=100)):(t="rgb",r=[e>>>16,(65280&e)>>>8,255&e]);return{space:t,values:r,alpha:i}};const l=function(e){var n;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var t=i(e);if(!t.space)return[];var r=[0,0,0],o="h"===t.space[0]?[360,100,100]:[255,255,255];return(n=Array(3))[0]=Math.min(Math.max(t.values[0],r[0]),o[0]),n[1]=Math.min(Math.max(t.values[1],r[1]),o[1]),n[2]=Math.min(Math.max(t.values[2],r[2]),o[2]),"h"===t.space[0]&&(n=function(e){var n,t,r,o,a,i=e[0]/360,l=e[1]/100,s=e[2]/100,d=0;if(0===l)return[a=255*s,a,a];for(n=2*s-(t=s<.5?s*(1+l):s+l-s*l),o=[0,0,0];d<3;)(r=i+1/3*-(d-1))<0?r++:r>1&&r--,a=6*r<1?n+6*(t-n)*r:2*r<1?t:3*r<2?n+(t-n)*(2/3-r)*6:n,o[d++]=255*a;return o}(n)),n.push(Math.min(Math.max(t.alpha,0),1)),n},s=(e,n,t,o=1)=>{const a=[Math.max(Math.min(Math.round(n[0]+o*Math.max(1,n[0]/100)),255),0),Math.max(Math.min(Math.round(n[1]+o*Math.max(1,n[1]/100)),255),0),Math.max(Math.min(Math.round(n[2]+o*Math.max(1,n[2]/100)),255),0)],i=(0,r.d)(r.r.hex(`rgba(${e.join(",")},1)`),r.r.hex(`rgba(${a.join(",")},1)`)),l=a[0]+a[1]+a[2];return 0===l||765===l||i>t?{background:e,foreground:a,contrast:i}:s(e,a,t,o)},d=new Map,u=(e,n=7)=>{let t=[0,0,0,1],o=[255,255,255,1];"string"==typeof e?(t=l(e),o=t):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(t=l(e.background),o="string"==typeof e.foreground?l(e.foreground):t);const a=(299*t[0]+587*t[1]+114*t[2])/1e3>=128?-1:1;const i=((e,n,t,r=1)=>{if(d.has(e))return d.get(e);const o=s(e,n,t,r);return d.set(e,o),o})([t[0],t[1],t[2]],[o[0],o[1],o[2]],n,a);return o=[...i.foreground,1],{background:r.r.hex(`rgba(${t.join(",")})`),foreground:r.r.hex(`rgba(${o.join(",")})`),contrast:i.contrast}},h=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function c(e){if(e)if("string"==typeof e){if(function(e){return h.test(e)}(e))return{type:"string",valid:!0,value:e};{const n=function(e){if(e.startsWith("{"))try{const n=JSON.parse(e);if(g(n))return{type:"ColorPair",value:n}}catch(e){return{type:null,value:null}}return{type:null,value:null}}(e);if(n.value)return{type:n.type,valid:!0,value:n.value}}}else{const n=e;if(g(n))return{type:"ColorPair",valid:!0,value:n}}return{type:null,valid:!1,value:""}}function g(e){return!("object"!=typeof e||!e||"string"!=typeof e.backgroundColor||!("string"==typeof e.foregroundColor||e.foregroundColor&&"string"==typeof e.foregroundColor.primary&&"string"==typeof e.foregroundColor.secondary&&"string"==typeof e.foregroundColor.neutral))}function p(e){const n=c(e);switch(n.type){case null:return!1;case"string":case"ColorPair":return n.valid}}const b=(e,n,t)=>{(0,r.w)(e,"_color",p,new Set(["rgb in hex","ColorPair"]),n,t)},f=e=>{var n;let t;const o=c(e);switch(o.type){case"string":t=u(o.value);break;case"ColorPair":{const e=o.value;let r="";"string"==typeof e.foregroundColor?r=e.foregroundColor:(null===(n=e.foregroundColor)||void 0===n?void 0:n.primary)&&(r=e.foregroundColor.primary),r&&"string"==typeof r||(r="#fff"),t=u({background:e.backgroundColor,foreground:r});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(e)})`),t=u({background:"#000",foreground:"#000"})}return t.contrast<7&&(0,r.a)(`[KolBadge] The contrast of ${t.contrast} (≥7, AAA) is to low, between the color pair ${t.background} and ${t.foreground}.`),{backgroundColor:t.background,foregroundColor:t.foreground}}},5605:(e,n,t)=>{t.d(n,{i:()=>i,n:()=>s,r:()=>l});var r=t(1973),o=t(5614);const a=()=>{let e=(0,r.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,r.d)(),"KoliBri",{value:e,writable:!1})),e},i=()=>{(()=>{const e=(0,r.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const n=e.getAttribute("content");"string"==typeof n&&((0,r.s)(n.includes("dev-mode=true")),(0,r.b)(n.includes("experimental-mode=true")),(0,r.c)(n.includes("color-contrast-analysis=true")))}})(),r.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.1.1\n\t",{forceLog:!0})},l=()=>{!0!==a().adviceShown&&(Object.defineProperty(a(),"adviceShown",{get:function(){return!0}}),r.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let s=()=>Math.floor(16777215*Math.random()).toString(16);"test"===o.p&&(s=()=>"nonce")},8691:(e,n,t)=>{t.r(n),t.d(n,{kol_badge:()=>s});var r=t(3185),o=t(5501),a=t(5605),i=t(5656),l=t(5445);(0,l.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const s=class{constructor(e){(0,r.r)(this,e),this.bgColorStr="#000",this.colorStr="#fff",this.id=(0,a.n)(),this.handleColorChange=e=>{const n=(0,i.h)(e);this.bgColorStr=n.backgroundColor,this.colorStr=n.foregroundColor},this._color="#000",this._icons=void 0,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"}}}renderSmartButton(e){return(0,r.h)(o.c,{_ariaControls:this.id,_customClass:e._customClass,_disabled:e._disabled,_hideLabel:!0,_icons:e._icons,_id:e._id,_label:e._label,_on:e._on,_tooltipAlign:e._tooltipAlign,_variant:e._variant})}render(){const e="object"==typeof this.state._smartButton&&null!==this.state._smartButton;return(0,r.h)(r.H,{key:"0b334746c26463bbc697f08077e165e56b34a97f",class:"kol-badge"},(0,r.h)("span",{key:"83210f467b224cb691d844a0311f4a31a1ad6e79",class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,r.h)(o.f,{key:"d5a3248d67baa494d9671e0da7de918511af084b",id:e?this.id:void 0,_allowMarkdown:!0,_icons:this._icons,_label:this._label}),e&&this.renderSmartButton(this.state._smartButton)))}validateColor(e){(0,i.v)(this,e,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateSmartButton(e){(0,l.o)(e,(()=>{try{e=(0,l.p)(e)}catch(e){}(0,l.s)(this,"_smartButton",e)}))}componentWillLoad(){this.validateColor(this._color),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_smartButton:["validateSmartButton"]}}};s.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  /* :host implicitly inherits font-size, e.g. for usage in headlines */\n  :host > span {\n    display: inline-flex;\n    place-items: center;\n    /* Visible with forced colors  */\n    outline: transparent solid 1px;\n  }\n  :host > span > .kol-button-wc button {\n    color: inherit;\n  }\n}"}}}]);