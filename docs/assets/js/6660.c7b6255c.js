/*! For license information please see 6660.c7b6255c.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6660],{6906:(e,a,r)=>{r.d(a,{c:()=>t});var t={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},767:(e,a,r)=>{r.d(a,{c:()=>n});var t=r(6906),l=function(e){var a,r,l=[],n=1;if("string"==typeof e)if(t.c[e])l=t.c[e].slice(),r="rgb";else if("transparent"===e)n=0,r="rgb",l=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var o=e.slice(1);n=1,(d=o.length)<=4?(l=[parseInt(o[0]+o[0],16),parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16)],4===d&&(n=parseInt(o[3]+o[3],16)/255)):(l=[parseInt(o[0]+o[1],16),parseInt(o[2]+o[3],16),parseInt(o[4]+o[5],16)],8===d&&(n=parseInt(o[6]+o[7],16)/255)),l[0]||(l[0]=0),l[1]||(l[1]=0),l[2]||(l[2]=0),r="rgb"}else if(a=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=a[1],h="rgb"===s;r=o=s.replace(/a$/,"");var d="cmyk"===o?4:"gray"===o?1:3;l=a[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,a){if(/%$/.test(e))return a===d?parseFloat(e)/100:"rgb"===o?255*parseFloat(e)/100:parseFloat(e);if("h"===o[a]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==i[e])return i[e]}return parseFloat(e)})),s===o&&l.push(1),n=h||void 0===l[d]?1:l[d],l=l.slice(0,d)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(l=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),r=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(l=[e[0],e[1],e[2]],r="rgb",n=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(r="rgb",l=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(r="hsl",l=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),n=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(n/=100)):(r="rgb",l=[e>>>16,(65280&e)>>>8,255&e]);return{space:r,values:l,alpha:n}},i={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var n=function(e){var a;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var r=l(e);if(!r.space)return[];var t=[0,0,0],i="h"===r.space[0]?[360,100,100]:[255,255,255];return(a=Array(3))[0]=Math.min(Math.max(r.values[0],t[0]),i[0]),a[1]=Math.min(Math.max(r.values[1],t[1]),i[1]),a[2]=Math.min(Math.max(r.values[2],t[2]),i[2]),"h"===r.space[0]&&(a=o(a)),a.push(Math.min(Math.max(r.alpha,0),1)),a};function o(e){var a,r,t,l,i,n=e[0]/360,o=e[1]/100,s=e[2]/100,h=0;if(0===o)return[i=255*s,i,i];for(a=2*s-(r=s<.5?s*(1+o):s+o-s*o),l=[0,0,0];h<3;)(t=n+1/3*-(h-1))<0?t++:t>1&&t--,i=6*t<1?a+6*(r-a)*t:2*t<1?r:3*t<2?a+(r-a)*(2/3-t)*6:a,l[h++]=255*i;return l}},6660:(e,a,r)=>{r.r(a),r.d(a,{kol_kolibri:()=>h});var t=r(6310),l=r(767),i=r(6955),n=r(9509);const o=/^#([a-f0-9]{3}|[a-f0-9]{6})$/;function s(e){return Math.round((Math.cos(function(e){return e*Math.PI/180}(e))+1)/2*225)}const h=class{constructor(e){(0,t.r)(this,e),this.handleColorChange=(e,a)=>{const r=(0,l.c)(e);a.set("_color",{red:r[0],green:r[1],blue:r[2]})},this._animate=void 0,this._color="#003c78",this._labeled=void 0,this.state={_animate:!1,_color:{red:0,green:60,blue:120},_labeled:!0}}render(){const e=!0===this.state._animate?`rgb(${s(this.state._color.red)},${s(this.state._color.green)},${s(this.state._color.blue)})`:`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return(0,t.h)(t.H,null,(0,t.h)("svg",{role:"img","aria-label":(0,n.a)("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:e},(0,t.h)("path",{d:"M353 322L213 304V434L353 322Z"}),(0,t.h)("path",{d:"M209 564V304L149 434L209 564Z"}),(0,t.h)("path",{d:"M357 316L417 250L361 210L275 244L357 316Z"}),(0,t.h)("path",{d:"M329 218L237 92L250 222L272 241L329 218Z"}),(0,t.h)("path",{d:"M353 318L35 36L213 300L353 318Z"}),(0,t.h)("path",{d:"M391 286L565 272L421 252L391 286Z"}),!0===this.state._labeled&&(0,t.h)("text",{x:"250",y:"525",fill:e},"KoliBri")))}validateAnimate(e){(0,i.b)(this,"_animate",e)}validateColor(e){(0,i.a)(this,"_color",(e=>"string"==typeof e&&o.test(e)),new Set(["Color Hex Color Codes"]),e,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(e){(0,i.b)(this,"_labeled",e)}componentWillLoad(){this.validateAnimate(this._animate),this.validateColor(this._color),this.validateLabeled(this._labeled)}componentDidRender(){clearInterval(this.interval),this.state._animate&&(this.interval=setInterval((()=>{this.state=Object.assign(Object.assign({},this.state),{_color:{red:(this.state._color.red+1)%360,green:(this.state._color.green+2)%360,blue:(this.state._color.blue+3)%360}})}),50))}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_animate:["validateAnimate"],_color:["validateColor"],_labeled:["validateLabeled"]}}};h.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}}}]);