/*! For license information please see 9095.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9095],{88476:(e,r,a)=>{a.d(r,{c:()=>l,h:()=>m,v:()=>f});var t=a(52343),n=a(52361),o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},i={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},l=function(e){var r;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var a=function(e){var r,a,t=[],n=1;if("string"==typeof e)if(e=e.toLowerCase(),o[e])t=o[e].slice(),a="rgb";else if("transparent"===e)n=0,a="rgb",t=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var l=e.slice(1);n=1,(c=l.length)<=4?(t=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===c&&(n=parseInt(l[3]+l[3],16)/255)):(t=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===c&&(n=parseInt(l[6]+l[7],16)/255)),t[0]||(t[0]=0),t[1]||(t[1]=0),t[2]||(t[2]=0),a="rgb"}else if(r=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=r[1],g="rgb"===s;a=l=s.replace(/a$/,"");var c="cmyk"===l?4:"gray"===l?1:3;t=r[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,r){if(/%$/.test(e))return r===c?parseFloat(e)/100:"rgb"===l?255*parseFloat(e)/100:parseFloat(e);if("h"===l[r]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==i[e])return i[e]}return parseFloat(e)})),s===l&&t.push(1),n=g||void 0===t[c]?1:t[c],t=t.slice(0,c)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(t=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),a=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(t=[e[0],e[1],e[2]],a="rgb",n=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(a="rgb",t=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(a="hsl",t=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),n=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(n/=100)):(a="rgb",t=[e>>>16,(65280&e)>>>8,255&e]);return{space:a,values:t,alpha:n}}(e);if(!a.space)return[];var t=[0,0,0],n="h"===a.space[0]?[360,100,100]:[255,255,255];return(r=Array(3))[0]=Math.min(Math.max(a.values[0],t[0]),n[0]),r[1]=Math.min(Math.max(a.values[1],t[1]),n[1]),r[2]=Math.min(Math.max(a.values[2],t[2]),n[2]),"h"===a.space[0]&&(r=function(e){var r,a,t,n,o,i=e[0]/360,l=e[1]/100,s=e[2]/100,g=0;if(0===l)return[o=255*s,o,o];for(r=2*s-(a=s<.5?s*(1+l):s+l-s*l),n=[0,0,0];g<3;)(t=i+1/3*-(g-1))<0?t++:t>1&&t--,o=6*t<1?r+6*(a-r)*t:2*t<1?a:3*t<2?r+(a-r)*(2/3-t)*6:r,n[g++]=255*o;return n}(r)),r.push(Math.min(Math.max(a.alpha,0),1)),r};const s=(e,r,a,n=1)=>{const o=[Math.max(Math.min(Math.round(r[0]+n*Math.max(1,r[0]/100)),255),0),Math.max(Math.min(Math.round(r[1]+n*Math.max(1,r[1]/100)),255),0),Math.max(Math.min(Math.round(r[2]+n*Math.max(1,r[2]/100)),255),0)],i=(0,t.b)(t.r.hex(`rgba(${e.join(",")},1)`),t.r.hex(`rgba(${o.join(",")},1)`)),l=o[0]+o[1]+o[2];return 0===l||765===l||i>a?{background:e,foreground:o,contrast:i}:s(e,o,a,n)},g=new Map,c=(e,r=7)=>{let a=[0,0,0,1],n=[255,255,255,1];"string"==typeof e?(a=l(e),n=a):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(a=l(e.background),n="string"==typeof e.foreground?l(e.foreground):a);const o=((e,r,a)=>(299*e+587*r+114*a)/1e3>=128?-1:1)(a[0],a[1],a[2]),i=((e,r,a,t=1)=>{if(g.has(e))return g.get(e);const n=s(e,r,a,t);return g.set(e,n),n})([a[0],a[1],a[2]],[n[0],n[1],n[2]],r,o);return n=[...i.foreground,1],{background:t.r.hex(`rgba(${a.join(",")})`),foreground:t.r.hex(`rgba(${n.join(",")})`),contrast:i.contrast}},d=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function u(e){if(e)if("string"==typeof e){if(function(e){return d.test(e)}(e))return{type:"string",valid:!0,value:e};{const r=function(e){if(e.startsWith("{"))try{const r=JSON.parse(e);if(h(r))return{type:"ColorPair",value:r};if(p(r))return{type:"DeprecatedColorPair",value:r}}catch(e){return{type:null,value:null}}return{type:null,value:null}}(e);if(r.value)return{type:r.type,valid:!0,value:r.value}}}else{const r=e;if(h(r))return{type:"ColorPair",valid:!0,value:r};const a=e;if(p(a))return{type:"DeprecatedColorPair",valid:!0,value:a}}return{type:null,valid:!1,value:""}}function h(e){return!("object"!=typeof e||!e||"string"!=typeof e.backgroundColor||!("string"==typeof e.foregroundColor||e.foregroundColor&&"string"==typeof e.foregroundColor.primary&&"string"==typeof e.foregroundColor.secondary&&"string"==typeof e.foregroundColor.neutral))}function p(e){return"object"==typeof e&&e&&"string"==typeof e.backgroundColor&&"string"==typeof e.color}function b(e){const r=u(e);switch(r.type){case null:return!1;case"string":case"ColorPair":case"DeprecatedColorPair":return r.valid}}const f=(e,r,a)=>{(0,t.w)(e,"_color",b,new Set(["rgb in hex","ColorPair"]),r,a)},m=e=>{var r;let a;const t=u(e);switch(t.type){case"string":a=c(t.value);break;case"ColorPair":case"DeprecatedColorPair":{const e=t.value,n=t.value;let o="";n.color?o=n.color:"string"==typeof e.foregroundColor?o=e.foregroundColor:(null===(r=e.foregroundColor)||void 0===r?void 0:r.primary)&&(o=e.foregroundColor.primary),o&&"string"==typeof o||(o="#fff"),a=c({background:e.backgroundColor,foreground:o});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(e)})`),a=c({background:"#000",foreground:"#000"})}return a.contrast<7&&(0,n.a)(`[KolBadge] The contrast of ${a.contrast} (≥7, AAA) is to low, between the color pair ${a.background} and ${a.foreground}.`),{backgroundColor:a.background,foregroundColor:a.foreground}}},75482:(e,r,a)=>{a.d(r,{a:()=>g});var t=a(43774),n=a(52361);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},i={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},l=e=>Object.keys(e).reduce(((r,a)=>(r[`kol-${a}`]=e[a],r)),{}),s=new Set([e=>e("en",l(i)),e=>e("de",l(o))]),g=(e,r)=>{const a=(0,t.g)();if(void 0===a)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=a.translate(e,r);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,r)=>(a.addResourceBundle(e,r),e))))),o=a.translate(e,r)),o}},29095:(e,r,a)=>{a.r(r),a.d(r,{kol_kolibri:()=>s});var t=a(45509),n=a(75482),o=a(88476),i=a(52361),l=a(52343);const s=class{constructor(e){(0,t.r)(this,e),this.handleColorChange=(e,r)=>{if("string"==typeof e){const a=(0,o.c)(e);r.set("_color",{red:a[0],green:a[1],blue:a[2]})}else(0,i.d)("[KolKolibri] You used the complex color schema. For the KoliBri we use need the color as hex string.")},this._color="#003c78",this._labeled=void 0,this.state={_color:{red:0,green:60,blue:120},_labeled:!0}}render(){const e=`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return(0,t.h)(t.H,null,(0,t.h)("svg",{role:"img","aria-label":(0,n.a)("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:e},(0,t.h)("path",{d:"M353 322L213 304V434L353 322Z"}),(0,t.h)("path",{d:"M209 564V304L149 434L209 564Z"}),(0,t.h)("path",{d:"M357 316L417 250L361 210L275 244L357 316Z"}),(0,t.h)("path",{d:"M329 218L237 92L250 222L272 241L329 218Z"}),(0,t.h)("path",{d:"M353 318L35 36L213 300L353 318Z"}),(0,t.h)("path",{d:"M391 286L565 272L421 252L391 286Z"}),!0===this.state._labeled&&(0,t.h)("text",{x:"250",y:"525",fill:e},"KoliBri")))}validateColor(e){(0,o.v)(this,e,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(e){(0,l.a)(this,"_labeled",e)}componentWillLoad(){this.validateColor(this._color),this.validateLabeled(this._labeled)}static get watchers(){return{_color:["validateColor"],_labeled:["validateLabeled"]}}};s.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}:host{display:inline-block}text{font-size:90px;letter-spacing:normal;word-spacing:normal}svg{max-height:100%}"}}}]);