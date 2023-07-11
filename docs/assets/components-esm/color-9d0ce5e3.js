/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as rgbaConvert,c as s,a as watchValidator}from"./prop.validators-683bb1d0.js";import{a as a11yHint}from"./a11y.tipps-e607b8b3.js";var colorName={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},colorParse=parse,baseHues={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function parse(r){var e,a,o=[],t=1;if("string"==typeof r)if(colorName[r])o=colorName[r].slice(),a="rgb";else if("transparent"===r)t=0,a="rgb",o=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(r)){var l=r.slice(1);t=1,(s=l.length)<=4?(o=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===s&&(t=parseInt(l[3]+l[3],16)/255)):(o=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===s&&(t=parseInt(l[6]+l[7],16)/255)),o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0),a="rgb"}else if(e=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(r)){var n=e[1],i="rgb"===n;a=l=n.replace(/a$/,"");var s="cmyk"===l?4:"gray"===l?1:3;o=e[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(r,e){if(/%$/.test(r))return e===s?parseFloat(r)/100:"rgb"===l?255*parseFloat(r)/100:parseFloat(r);if("h"===l[e]){if(/deg$/.test(r))return parseFloat(r);if(void 0!==baseHues[r])return baseHues[r]}return parseFloat(r)})),n===l&&o.push(1),t=i||void 0===o[s]?1:o[s],o=o.slice(0,s)}else r.length>10&&/[0-9](?:\s|\/)/.test(r)&&(o=r.match(/([0-9]+)/g).map((function(r){return parseFloat(r)})),a=r.match(/([a-z])/gi).join("").toLowerCase());else isNaN(r)?Array.isArray(r)||r.length?(o=[r[0],r[1],r[2]],a="rgb",t=4===r.length?r[3]:1):r instanceof Object&&(null!=r.r||null!=r.red||null!=r.R?(a="rgb",o=[r.r||r.red||r.R||0,r.g||r.green||r.G||0,r.b||r.blue||r.B||0]):(a="hsl",o=[r.h||r.hue||r.H||0,r.s||r.saturation||r.S||0,r.l||r.lightness||r.L||r.b||r.brightness]),t=r.a||r.alpha||r.opacity||1,null!=r.opacity&&(t/=100)):(a="rgb",o=[r>>>16,(65280&r)>>>8,255&r]);return{space:a,values:o,alpha:t}}var colorRgba=function(r){var e;Array.isArray(r)&&r.raw&&(r=String.raw.apply(null,arguments));var a=colorParse(r);if(!a.space)return[];var o=[0,0,0],t="h"===a.space[0]?[360,100,100]:[255,255,255];return(e=Array(3))[0]=Math.min(Math.max(a.values[0],o[0]),t[0]),e[1]=Math.min(Math.max(a.values[1],o[1]),t[1]),e[2]=Math.min(Math.max(a.values[2],o[2]),t[2]),"h"===a.space[0]&&(e=hsl2rgb(e)),e.push(Math.min(Math.max(a.alpha,0),1)),e};function hsl2rgb(r){var e,a,o,t,l,n=r[0]/360,i=r[1]/100,s=r[2]/100,u=0;if(0===i)return[l=255*s,l,l];for(e=2*s-(a=s<.5?s*(1+i):s+i-s*i),t=[0,0,0];u<3;)(o=n+1/3*-(u-1))<0?o++:o>1&&o--,l=6*o<1?e+6*(a-e)*o:2*o<1?a:3*o<2?e+(a-e)*(2/3-o)*6:e,t[u++]=255*l;return t}const getContrastYIQ=(r,e,a)=>(299*r+587*e+114*a)/1e3>=128?-1:1,calcColorContrast=(r,e,a,o=1)=>{const t=[Math.max(Math.min(Math.round(e[0]+o*Math.max(1,e[0]/100)),255),0),Math.max(Math.min(Math.round(e[1]+o*Math.max(1,e[1]/100)),255),0),Math.max(Math.min(Math.round(e[2]+o*Math.max(1,e[2]/100)),255),0)],l=s(rgbaConvert.hex(`rgba(${r.join(",")},1)`),rgbaConvert.hex(`rgba(${t.join(",")},1)`)),n=t[0]+t[1]+t[2];return 0===n||765===n||l>a?{background:r,foreground:t,contrast:l}:calcColorContrast(r,t,a,o)},cache=new Map,getColorContrast=(r,e,a,o=1)=>{if(cache.has(r))return cache.get(r);const t=calcColorContrast(r,e,a,o);return cache.set(r,t),t},createContrastColorPair=(r,e=7)=>{let a=[0,0,0,1],o=[255,255,255,1];"string"==typeof r?(a=colorRgba(r),o=a):"object"==typeof r&&null!==r&&"string"==typeof r.background&&"string"==typeof r.foreground&&(a=colorRgba(r.background),o="string"==typeof r.foreground?colorRgba(r.foreground):a);const t=(l=a[0],n=a[1],i=a[2],(299*l+587*n+114*i)/1e3>=128?-1:1);var l,n,i;const s=getColorContrast([a[0],a[1],a[2]],[o[0],o[1],o[2]],e,t);return o=[...s.foreground,1],{background:rgbaConvert.hex(`rgba(${a.join(",")})`),foreground:rgbaConvert.hex(`rgba(${o.join(",")})`),contrast:s.contrast}},HEX_REGEX=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function isHexString(r){return HEX_REGEX.test(r)}function isColorObjectString(r){if(r.startsWith("{"))try{const e=JSON.parse(r);if(isValidColorPair(e))return{type:"ColorPair",value:e};if(isValidDeprecatedColorPair(e))return{type:"DeprecatedColorPair",value:e}}catch(r){return{type:null,value:null}}return{type:null,value:null}}function typeOfColor(r){if(r)if("string"==typeof r){if(isHexString(r))return{type:"string",valid:!0,value:r};{const e=isColorObjectString(r);if(e.value)return{type:e.type,valid:!0,value:e.value}}}else{const e=r;if(isValidColorPair(e))return{type:"ColorPair",valid:!0,value:e};const a=r;if(isValidDeprecatedColorPair(a))return{type:"DeprecatedColorPair",valid:!0,value:a}}return{type:null,valid:!1,value:""}}function isValidColorPair(r){return!("object"!=typeof r||!r||"string"!=typeof r.backgroundColor||!("string"==typeof r.foregroundColor||r.foregroundColor&&"string"==typeof r.foregroundColor.primary&&"string"==typeof r.foregroundColor.secondary&&"string"==typeof r.foregroundColor.neutral))}function isValidDeprecatedColorPair(r){return"object"==typeof r&&r&&"string"==typeof r.backgroundColor&&"string"==typeof r.color}function validatorFunction(r){const e=typeOfColor(r);switch(e.type){case null:return!1;case"string":case"ColorPair":case"DeprecatedColorPair":return e.valid}}const validateColor=(r,e,a)=>{watchValidator(r,"_color",validatorFunction,new Set(["rgb in hex","ColorPair"]),e,a)},handleColorChange=r=>{var e;let a;const o=typeOfColor(r);switch(o.type){case"string":a=createContrastColorPair(o.value);break;case"ColorPair":case"DeprecatedColorPair":{const r=o.value,t=o.value;let l="";t.color?l=t.color:"string"==typeof r.foregroundColor?l=r.foregroundColor:(null===(e=r.foregroundColor)||void 0===e?void 0:e.primary)&&(l=r.foregroundColor.primary),l&&"string"==typeof l||(l="#fff"),a=createContrastColorPair({background:r.backgroundColor,foreground:l});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(r)})`),a=createContrastColorPair({background:"#000",foreground:"#000"})}return a.contrast<7&&a11yHint(`[KolBadge] The contrast of ${a.contrast} (≥7, AAA) is to low, between the color pair ${a.background} and ${a.foreground}.`),{backgroundColor:a.background,foregroundColor:a.foreground}};export{colorRgba as c,handleColorChange as h,validateColor as v};