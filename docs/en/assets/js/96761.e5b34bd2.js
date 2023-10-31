"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[96761],{62157:(t,e,n)=>{n.d(e,{c:()=>s,h:()=>b,v:()=>m});var r=n(81682),o=n(76772),a={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},l=function(t){var e,n,r=[],o=1;if("string"==typeof t)if(t=t.toLowerCase(),a[t])r=a[t].slice(),n="rgb";else if("transparent"===t)o=0,n="rgb",r=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(t)){var l=t.slice(1);o=1,(d=l.length)<=4?(r=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===d&&(o=parseInt(l[3]+l[3],16)/255)):(r=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===d&&(o=parseInt(l[6]+l[7],16)/255)),r[0]||(r[0]=0),r[1]||(r[1]=0),r[2]||(r[2]=0),n="rgb"}else if(e=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(t)){var s=e[1],u="rgb"===s;n=l=s.replace(/a$/,"");var d="cmyk"===l?4:"gray"===l?1:3;r=e[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(t,e){if(/%$/.test(t))return e===d?parseFloat(t)/100:"rgb"===l?255*parseFloat(t)/100:parseFloat(t);if("h"===l[e]){if(/deg$/.test(t))return parseFloat(t);if(void 0!==i[t])return i[t]}return parseFloat(t)})),s===l&&r.push(1),o=u||void 0===r[d]?1:r[d],r=r.slice(0,d)}else t.length>10&&/[0-9](?:\s|\/)/.test(t)&&(r=t.match(/([0-9]+)/g).map((function(t){return parseFloat(t)})),n=t.match(/([a-z])/gi).join("").toLowerCase());else isNaN(t)?Array.isArray(t)||t.length?(r=[t[0],t[1],t[2]],n="rgb",o=4===t.length?t[3]:1):t instanceof Object&&(null!=t.r||null!=t.red||null!=t.R?(n="rgb",r=[t.r||t.red||t.R||0,t.g||t.green||t.G||0,t.b||t.blue||t.B||0]):(n="hsl",r=[t.h||t.hue||t.H||0,t.s||t.saturation||t.S||0,t.l||t.lightness||t.L||t.b||t.brightness]),o=t.a||t.alpha||t.opacity||1,null!=t.opacity&&(o/=100)):(n="rgb",r=[t>>>16,(65280&t)>>>8,255&t]);return{space:n,values:r,alpha:o}},i={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var s=function(t){var e;Array.isArray(t)&&t.raw&&(t=String.raw.apply(null,arguments));var n=l(t);if(!n.space)return[];var r=[0,0,0],o="h"===n.space[0]?[360,100,100]:[255,255,255];return(e=Array(3))[0]=Math.min(Math.max(n.values[0],r[0]),o[0]),e[1]=Math.min(Math.max(n.values[1],r[1]),o[1]),e[2]=Math.min(Math.max(n.values[2],r[2]),o[2]),"h"===n.space[0]&&(e=function(t){var e,n,r,o,a,l=t[0]/360,i=t[1]/100,s=t[2]/100,u=0;if(0===i)return[a=255*s,a,a];for(e=2*s-(n=s<.5?s*(1+i):s+i-s*i),o=[0,0,0];u<3;)(r=l+1/3*-(u-1))<0?r++:r>1&&r--,a=6*r<1?e+6*(n-e)*r:2*r<1?n:3*r<2?e+(n-e)*(2/3-r)*6:e,o[u++]=255*a;return o}(e)),e.push(Math.min(Math.max(n.alpha,0),1)),e};const u=(t,e,n,o=1)=>{const a=[Math.max(Math.min(Math.round(e[0]+o*Math.max(1,e[0]/100)),255),0),Math.max(Math.min(Math.round(e[1]+o*Math.max(1,e[1]/100)),255),0),Math.max(Math.min(Math.round(e[2]+o*Math.max(1,e[2]/100)),255),0)],l=(0,r.b)(r.r.hex(`rgba(${t.join(",")},1)`),r.r.hex(`rgba(${a.join(",")},1)`)),i=a[0]+a[1]+a[2];return 0===i||765===i||l>n?{background:t,foreground:a,contrast:l}:u(t,a,n,o)},d=new Map,h=(t,e=7)=>{let n=[0,0,0,1],o=[255,255,255,1];"string"==typeof t?(n=s(t),o=n):"object"==typeof t&&null!==t&&"string"==typeof t.background&&"string"==typeof t.foreground&&(n=s(t.background),o="string"==typeof t.foreground?s(t.foreground):n);const a=((t,e,n)=>(299*t+587*e+114*n)/1e3>=128?-1:1)(n[0],n[1],n[2]),l=((t,e,n,r=1)=>{if(d.has(t))return d.get(t);const o=u(t,e,n,r);return d.set(t,o),o})([n[0],n[1],n[2]],[o[0],o[1],o[2]],e,a);return o=[...l.foreground,1],{background:r.r.hex(`rgba(${n.join(",")})`),foreground:r.r.hex(`rgba(${o.join(",")})`),contrast:l.contrast}},g=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function c(t){if(t)if("string"==typeof t){if(function(t){return g.test(t)}(t))return{type:"string",valid:!0,value:t};{const e=function(t){if(t.startsWith("{"))try{const e=JSON.parse(t);if(p(e))return{type:"ColorPair",value:e}}catch(t){return{type:null,value:null}}return{type:null,value:null}}(t);if(e.value)return{type:e.type,valid:!0,value:e.value}}}else{const e=t;if(p(e))return{type:"ColorPair",valid:!0,value:e}}return{type:null,valid:!1,value:""}}function p(t){return!("object"!=typeof t||!t||"string"!=typeof t.backgroundColor||!("string"==typeof t.foregroundColor||t.foregroundColor&&"string"==typeof t.foregroundColor.primary&&"string"==typeof t.foregroundColor.secondary&&"string"==typeof t.foregroundColor.neutral))}function f(t){const e=c(t);switch(e.type){case null:return!1;case"string":case"ColorPair":return e.valid}}const m=(t,e,n)=>{(0,r.w)(t,"_color",f,new Set(["rgb in hex","ColorPair"]),e,n)},b=t=>{var e;let n;const r=c(t);switch(r.type){case"string":n=h(r.value);break;case"ColorPair":{const t=r.value;let o="";"string"==typeof t.foregroundColor?o=t.foregroundColor:(null===(e=t.foregroundColor)||void 0===e?void 0:e.primary)&&(o=t.foregroundColor.primary),o&&"string"==typeof o||(o="#fff"),n=h({background:t.backgroundColor,foreground:o});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(t)})`),n=h({background:"#000",foreground:"#000"})}return n.contrast<7&&(0,o.a)(`[KolBadge] The contrast of ${n.contrast} (\u22657, AAA) is to low, between the color pair ${n.background} and ${n.foreground}.`),{backgroundColor:n.background,foregroundColor:n.foreground}}},96761:(t,e,n)=>{n.r(e),n.d(e,{kol_badge:()=>s});var r=n(97814),o=n(62157),a=n(76772),l=n(37287),i=n(81682);(0,a.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const s=class{constructor(t){(0,r.r)(this,t),this.bgColorStr="#000",this.colorStr="#fff",this.id=(0,l.n)(),this.handleColorChange=t=>{const e=(0,o.h)(t);this.bgColorStr=e.backgroundColor,this.colorStr=e.foregroundColor},this._color="#000",this._icons=void 0,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"}}}renderSmartButton(t){return(0,r.h)("kol-button-wc",{_ariaControls:this.id,_customClass:t._customClass,_disabled:t._disabled,_hideLabel:!0,_icons:t._icons,_id:t._id,_label:t._label,_on:t._on,_tooltipAlign:t._tooltipAlign,_variant:t._variant})}render(){const t="object"==typeof this.state._smartButton&&null!==this.state._smartButton;return(0,r.h)(r.H,null,(0,r.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,r.h)("kol-span-wc",{id:t?this.id:void 0,_allowMarkdown:!0,_icons:this._icons,_label:this._label}),t&&this.renderSmartButton(this.state._smartButton)))}validateColor(t){(0,o.v)(this,t,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.s)(this,"_smartButton",t)}))}componentWillLoad(){this.validateColor(this._color),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_smartButton:["validateSmartButton"]}}};s.style={default:"@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host > span {\n\t\tdisplay: inline-flex;\n\t\tplace-items: center;\n\t}\n\n\t:host > span > kol-button-wc button {\n\t\tcolor: inherit;\n\t}\n}\n"}}}]);