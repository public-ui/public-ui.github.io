/*! For license information please see 7780.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7780],{22613:(e,a,r)=>{r.d(a,{c:()=>l});var t={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},o=function(e){var a,r,o=[],l=1;if("string"==typeof e)if(t[e])o=t[e].slice(),r="rgb";else if("transparent"===e)l=0,r="rgb",o=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var n=e.slice(1);l=1,(c=n.length)<=4?(o=[parseInt(n[0]+n[0],16),parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16)],4===c&&(l=parseInt(n[3]+n[3],16)/255)):(o=[parseInt(n[0]+n[1],16),parseInt(n[2]+n[3],16),parseInt(n[4]+n[5],16)],8===c&&(l=parseInt(n[6]+n[7],16)/255)),o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0),r="rgb"}else if(a=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=a[1],h="rgb"===s;r=n=s.replace(/a$/,"");var c="cmyk"===n?4:"gray"===n?1:3;o=a[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,a){if(/%$/.test(e))return a===c?parseFloat(e)/100:"rgb"===n?255*parseFloat(e)/100:parseFloat(e);if("h"===n[a]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==i[e])return i[e]}return parseFloat(e)})),s===n&&o.push(1),l=h||void 0===o[c]?1:o[c],o=o.slice(0,c)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(o=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),r=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(o=[e[0],e[1],e[2]],r="rgb",l=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(r="rgb",o=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(r="hsl",o=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),l=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(l/=100)):(r="rgb",o=[e>>>16,(65280&e)>>>8,255&e]);return{space:r,values:o,alpha:l}},i={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},l=function(e){var a;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var r=o(e);if(!r.space)return[];var t=[0,0,0],i="h"===r.space[0]?[360,100,100]:[255,255,255];return(a=Array(3))[0]=Math.min(Math.max(r.values[0],t[0]),i[0]),a[1]=Math.min(Math.max(r.values[1],t[1]),i[1]),a[2]=Math.min(Math.max(r.values[2],t[2]),i[2]),"h"===r.space[0]&&(a=function(e){var a,r,t,o,i,l=e[0]/360,n=e[1]/100,s=e[2]/100,h=0;if(0===n)return[i=255*s,i,i];for(a=2*s-(r=s<.5?s*(1+n):s+n-s*n),o=[0,0,0];h<3;)(t=l+1/3*-(h-1))<0?t++:t>1&&t--,i=6*t<1?a+6*(r-a)*t:2*t<1?r:3*t<2?a+(r-a)*(2/3-t)*6:a,o[h++]=255*i;return o}(a)),a.push(Math.min(Math.max(r.alpha,0),1)),a}},27780:(e,a,r)=>{r.r(a),r.d(a,{kol_badge:()=>b});var t=r(99459),o=r(9634),i=r(44594),l=r(54225),n=r(22613);const s=(e,a,r,t=1)=>{const o=[Math.max(Math.min(Math.round(a[0]+t*Math.max(1,a[0]/100)),255),0),Math.max(Math.min(Math.round(a[1]+t*Math.max(1,a[1]/100)),255),0),Math.max(Math.min(Math.round(a[2]+t*Math.max(1,a[2]/100)),255),0)],l=(0,i.c)(i.r.hex(`rgba(${e.join(",")},1)`),i.r.hex(`rgba(${o.join(",")},1)`)),n=o[0]+o[1]+o[2];return 0===n||765===n||l>r?{background:e,foreground:o,contrast:l}:s(e,o,r,t)},h=new Map,c=(e,a=7)=>{let r=[0,0,0,1],t=[255,255,255,1];"string"==typeof e?(r=(0,n.c)(e),t=r):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(r=(0,n.c)(e.background),t="string"==typeof e.foreground?(0,n.c)(e.foreground):r);const o=(299*r[0]+587*r[1]+114*r[2])/1e3>=128?-1:1,l=((e,a,r,t=1)=>{if(h.has(e))return h.get(e);const o=s(e,a,r,t);return h.set(e,o),o})([r[0],r[1],r[2]],[t[0],t[1],t[2]],a,o);return t=[...l.foreground,1],{background:i.r.hex(`rgba(${r.join(",")})`),foreground:i.r.hex(`rgba(${t.join(",")})`),contrast:l.contrast}};(0,o.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const d=/^([a-f0-9]{3}|[a-f0-9]{6})$/,b=class{constructor(e){(0,t.r)(this,e),this.bgColorStr="#000",this.colorStr="#fff",this.handleColorChange=e=>{let a,r=e;"string"==typeof r?(d.test(r)&&((0,o.d)("[KolBadge] Bitte verwenden Sie zukünftig nur noch das Standard-Farbformat für CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)."),r=`#${r}`),a=c(r)):a=c({background:r.backgroundColor,foreground:r.color}),a.contrast<7&&(0,o.a)(`[KolBadge] The contrast of ${a.contrast} (≥7, AAA) is too low, between the color pair ${a.background} and ${a.foreground}.`),this.bgColorStr=a.background,this.colorStr=a.foreground},this._color="#000",this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._smartButton=void 0,this.state={_color:"#000",_label:""}}render(){return(0,t.h)(t.H,null,(0,t.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,t.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label}),"object"==typeof this.state._smartButton&&null!==this.state._smartButton&&(0,t.h)("kol-button-wc",{_ariaLabel:this.state._smartButton._ariaLabel,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_icon:this.state._smartButton._icon,_iconOnly:!0,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant})))}validateColor(e){(0,i.a)(this,"_color",(e=>"string"==typeof e||"object"==typeof e&&null!==e&&"string"==typeof e.backgroundColor&&"string"==typeof e.color),new Set(["string","KoliBriColor"]),e,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateLabel(e){(0,l.v)(this,e,{hooks:{afterPatch:e=>{"string"==typeof e&&e.length>32&&(0,o.a)(`[KolBadge] The label is too long for a badge (${e.length} > 32).`)}}})}validateSmartButton(e){(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(e){}(0,i.s)(this,"_smartButton",e)}))}componentWillLoad(){this.validateColor(this._color),this.validateLabel(this._label),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_label:["validateLabel"],_smartButton:["validateSmartButton"]}}};b.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0;margin:0;min-height:44px;min-width:44px;padding:0}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}:host{display:inline-block}:host>span{border-radius:var(--kolibri-border-radius);display:flex;line-height:calc(1rem + var(--kolibri-spacing));place-items:center}:host>span kol-span-wc{padding:var(--kolibri-spacing) calc(2 * var(--kolibri-spacing))}:host>span>kol-span-wc{align-items:center;font-style:normal;gap:calc(2 * var(--kolibri-spacing))}:host>span.smart-button>kol-span-wc{border-right:1px solid rgba(0, 0, 0, 0.25)}:host>span>kol-span-wc>span{display:flex;gap:var(--kolibri-spacing)}:host>span>kol-button-wc button{border-radius:0 var(--kolibri-spacing) var(--kolibri-spacing) 0;color:inherit}"}},54225:(e,a,r)=>{r.d(a,{a:()=>d,b:()=>u,c:()=>h,h:()=>s,v:()=>b});var t=r(9634),o=r(44594),i=r(6715);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,n=/^\d+$/,s=(e,a=1)=>(e=>{var a;return"string"==typeof e&&(null===(a=e.match(l))||void 0===a?void 0:a.length)||0})(e)>=a,h=e=>n.test(e),c=(e,a,r,o)=>{const l=a.has("_ariaLabel")?a.get("_ariaLabel"):r.state._ariaLabel;if("string"==typeof l){const e=a.has("_label")?a.get("_label"):r.state._label;!1===(0,i.i)(e,l)&&("_ariaLabel"===o?a.set("_label",l):a.set("_ariaLabel",e),(0,t.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},d=(e,a)=>{((e,a,r={})=>{var i;(0,o.w)(e,"_ariaLabel",a,{hooks:{afterPatch:(e,a,o,i)=>{var l,n;"function"==typeof(null===(l=r.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(n=r.hooks)||void 0===n||n.afterPatch(e,a,o,i)),"string"==typeof e&&e.length>0&&!1===s(e,3)&&!1===h(e)&&(0,t.a)(`Ein abweichendes Aria-Label (${e}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(i=r.hooks)||void 0===i?void 0:i.beforePatch}})})(e,a,{hooks:{beforePatch:c}})},b=(e,a,r={})=>{var i;(0,o.w)(e,"_label",a,{hooks:{afterPatch:(e,a,o,i)=>{var l,n;"function"==typeof(null===(l=r.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(n=r.hooks)||void 0===n||n.afterPatch(e,a,o,i)),"string"==typeof e&&!1===s(e,3)&&!1===h(e)&&(0,t.a)(`Ein Label (${e}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(i=r.hooks)||void 0===i?void 0:i.beforePatch},required:!0})},u=(e,a)=>{b(e,a,{hooks:{beforePatch:c}})}}}]);