"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8646],{"./node_modules/@public-ui/components/dist/esm/index-1b8b837d.js":(y,c,d)=>{d.d(c,{c:()=>o});/*!
 * KoliBri - The accessible HTML-Standard
 */var o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},"./node_modules/@public-ui/components/dist/esm/index-e722bdb7.js":(y,c,d)=>{d.d(c,{c:()=>m});var o=d("./node_modules/@public-ui/components/dist/esm/index-1b8b837d.js");/*!
 * KoliBri - The accessible HTML-Standard
 */var g=p,b={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function p(e){var s,i,a=[],l=1;if(typeof e=="string")if(o.c[e])a=o.c[e].slice(),i="rgb";else if(e==="transparent")l=0,i="rgb",a=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var t=e.slice(1);l=1,(r=t.length)<=4?(a=[parseInt(t[0]+t[0],16),parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16)],r===4&&(l=parseInt(t[3]+t[3],16)/255)):(a=[parseInt(t[0]+t[1],16),parseInt(t[2]+t[3],16),parseInt(t[4]+t[5],16)],r===8&&(l=parseInt(t[6]+t[7],16)/255)),a[0]||(a[0]=0),a[1]||(a[1]=0),a[2]||(a[2]=0),i="rgb"}else if(s=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var h=s[1],u=h==="rgb";i=t=h.replace(/a$/,"");var r=t==="cmyk"?4:t==="gray"?1:3;a=s[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(n,v){if(/%$/.test(n))return v===r?parseFloat(n)/100:t==="rgb"?255*parseFloat(n)/100:parseFloat(n);if(t[v]==="h"){if(/deg$/.test(n))return parseFloat(n);if(b[n]!==void 0)return b[n]}return parseFloat(n)}),h===t&&a.push(1),l=u||a[r]===void 0?1:a[r],a=a.slice(0,r)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(a=e.match(/([0-9]+)/g).map(function(n){return parseFloat(n)}),i=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(a=[e[0],e[1],e[2]],i="rgb",l=e.length===4?e[3]:1):e instanceof Object&&(e.r!=null||e.red!=null||e.R!=null?(i="rgb",a=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(i="hsl",a=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),l=e.a||e.alpha||e.opacity||1,e.opacity!=null&&(l/=100)):(i="rgb",a=[e>>>16,(65280&e)>>>8,255&e]);return{space:i,values:a,alpha:l}}var m=function(e){var s;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var i=g(e);if(!i.space)return[];var a=[0,0,0],l=i.space[0]==="h"?[360,100,100]:[255,255,255];return(s=Array(3))[0]=Math.min(Math.max(i.values[0],a[0]),l[0]),s[1]=Math.min(Math.max(i.values[1],a[1]),l[1]),s[2]=Math.min(Math.max(i.values[2],a[2]),l[2]),i.space[0]==="h"&&(s=_(s)),s.push(Math.min(Math.max(i.alpha,0),1)),s};function _(e){var s,i,a,l,t,h=e[0]/360,u=e[1]/100,r=e[2]/100,n=0;if(u===0)return[t=255*r,t,t];for(s=2*r-(i=r<.5?r*(1+u):r+u-r*u),l=[0,0,0];n<3;)(a=h+1/3*-(n-1))<0?a++:a>1&&a--,t=6*a<1?s+6*(i-s)*a:2*a<1?i:3*a<2?s+(i-s)*(2/3-a)*6:s,l[n++]=255*t;return l}},"./node_modules/@public-ui/components/dist/esm/kol-kolibri.entry.js":(y,c,d)=>{d.r(c),d.d(c,{kol_kolibri:()=>a});var o=d("./node_modules/@public-ui/components/dist/esm/index-1a5ffdc0.js"),g=d("./node_modules/@public-ui/components/dist/esm/index-e722bdb7.js"),b=d("./node_modules/@public-ui/components/dist/esm/prop.validators-4fa47ba8.js"),p=d("./node_modules/@public-ui/components/dist/esm/i18n-0f680f1b.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const m="@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}",_=/^#([a-f0-9]{3}|[a-f0-9]{6})$/,e=360;function s(l){return l*Math.PI/180}function i(l){return Math.round((Math.cos(s(l))+1)/2*225)}const a=class{constructor(l){(0,o.r)(this,l),this.handleColorChange=(t,h)=>{const u=(0,g.c)(t);h.set("_color",{red:u[0],green:u[1],blue:u[2]})},this._animate=void 0,this._color="#003c78",this._labeled=void 0,this.state={_animate:!1,_color:{red:0,green:60,blue:120},_labeled:!0}}render(){const l=this.state._animate===!0?`rgb(${i(this.state._color.red)},${i(this.state._color.green)},${i(this.state._color.blue)})`:`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return(0,o.h)(o.H,null,(0,o.h)("svg",{role:"img","aria-label":(0,p.a)("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:l},(0,o.h)("path",{d:"M353 322L213 304V434L353 322Z"}),(0,o.h)("path",{d:"M209 564V304L149 434L209 564Z"}),(0,o.h)("path",{d:"M357 316L417 250L361 210L275 244L357 316Z"}),(0,o.h)("path",{d:"M329 218L237 92L250 222L272 241L329 218Z"}),(0,o.h)("path",{d:"M353 318L35 36L213 300L353 318Z"}),(0,o.h)("path",{d:"M391 286L565 272L421 252L391 286Z"}),this.state._labeled===!0&&(0,o.h)("text",{x:"250",y:"525",fill:l},"KoliBri")))}validateAnimate(l){(0,b.b)(this,"_animate",l)}validateColor(l){(0,b.a)(this,"_color",t=>typeof t=="string"&&_.test(t),new Set(["Color Hex Color Codes"]),l,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(l){(0,b.b)(this,"_labeled",l)}componentWillLoad(){this.validateAnimate(this._animate),this.validateColor(this._color),this.validateLabeled(this._labeled)}componentDidRender(){clearInterval(this.interval),this.state._animate&&(this.interval=setInterval(()=>{this.state=Object.assign(Object.assign({},this.state),{_color:{red:(this.state._color.red+1)%360,green:(this.state._color.green+2)%360,blue:(this.state._color.blue+3)%360}})},50))}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_animate:["validateAnimate"],_color:["validateColor"],_labeled:["validateLabeled"]}}};a.style={default:m}}}]);
