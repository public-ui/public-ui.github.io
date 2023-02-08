/*! For license information please see 6035.232d2e6e.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6035],{6038:(t,e,n)=>{n.d(e,{a:()=>r,b:()=>g,c:()=>s,d:()=>c,e:()=>h,f:()=>d,u:()=>m});var o=n(333);const i=new Set,r=t=>{!1===i.has(t)&&(i.add(t),o.L.info(t,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,s=t=>{!1===l.has(t)&&(l.add(t),o.L.warn(t,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},a=new Set,c=t=>{!1===a.has(t)&&(a.add(t),o.L.debug(t,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,d=(t,e=!1)=>{!1===u.has(t)&&(u.add(t),t+=!0===e?" \u2705":"",o.L.debug(t,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,h=()=>{r('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=t=>{"string"==typeof t&&""!==t||r("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(t,e=8)=>{var n;e>7&&(n=`[${t}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===f.has(n)&&(f.add(n),o.L.debug(n,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"})))}},3035:(t,e,n)=>{n.d(e,{w:()=>i});var o=n(466);const i=(t,e,n)=>{(0,o.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),n,{defaultValue:"top"})}},742:(t,e,n)=>{n.d(e,{f:()=>c,s:()=>a});var o=1/12.92;function i(t){return Math.pow((t+.055)/1.055,2.4)}function r(t){var e=t[0]/255,n=t[1]/255,r=t[2]/255;return.2126*(e<=.03928?e*o:i(e))+.7152*(n<=.03928?n*o:i(n))+.0722*(r<=.03928?r*o:i(r))}function l(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var n=parseInt(t,16);return[n>>16,n>>8&255,255&n,e]}function s(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(r(t),r(e))}function a(t,e){return s(l(t),l(e))}function c(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}},6035:(t,e,n)=>{n.r(e),n.d(e,{kol_tooltip:()=>ct});var o=n(396),i=n(3035),r=n(333),l=n(466),s=n(3188);function a(t){return t.split("-")[1]}function c(t){return"y"===t?"height":"width"}function u(t){return t.split("-")[0]}function d(t){return["top","bottom"].includes(u(t))?"x":"y"}function f(t,e,n){let{reference:o,floating:i}=t;const r=o.x+o.width/2-i.width/2,l=o.y+o.height/2-i.height/2,s=d(e),f=c(s),h=o[f]/2-i[f]/2,g="x"===s;let m;switch(u(e)){case"top":m={x:r,y:o.y-i.height};break;case"bottom":m={x:r,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:l};break;case"left":m={x:o.x-i.width,y:l};break;default:m={x:o.x,y:o.y}}switch(a(e)){case"start":m[s]-=h*(n&&g?-1:1);break;case"end":m[s]+=h*(n&&g?-1:1)}return m}function h(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function g(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function m(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:s,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=e,p=h(m),y=s[f?"floating"===d?"reference":"floating":d],v=g(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:a})),b="floating"===d?{...l.floating,x:o,y:i}:l.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),x=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},L=g(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:w,strategy:a}):b);return{top:(v.top-L.top+p.top)/x.y,bottom:(L.bottom-v.bottom+p.bottom)/x.y,left:(v.left-L.left+p.left)/x.x,right:(L.right-v.right+p.right)/x.x}}const p=Math.min,y=Math.max;function v(t,e,n){return y(t,p(e,n))}const b={left:"right",right:"left",bottom:"top",top:"bottom"};function w(t){return t.replace(/left|right|bottom|top/g,(t=>b[t]))}function x(t,e,n){void 0===n&&(n=!1);const o=a(t),i=d(t),r=c(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=w(l)),{main:l,cross:w(l)}}const L={start:"end",end:"start"};function k(t){return t.replace(/start|end/g,(t=>L[t]))}function S(t){const e=w(t);return[k(t),e,k(e)]}function E(t,e,n,o){const i=a(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(u(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(k)))),r}async function T(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=u(n),s=a(n),c="x"===d(n),f=["left","top"].includes(l)?-1:1,h=r&&c?-1:1,g="function"==typeof e?e(t):e;let{mainAxis:m,crossAxis:p,alignmentAxis:y}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return s&&"number"==typeof y&&(p="end"===s?-1*y:y),c?{x:p*h,y:m*f}:{x:m*f,y:p*h}}const A=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=t,c={x:n,y:o},f=await m(e,a),h=d(u(i)),g=function(t){return"x"===t?"y":"x"}(h);let p=c[h],y=c[g];if(r){const t="y"===h?"bottom":"right";p=v(p+f["y"===h?"top":"left"],p,p-f[t])}if(l){const t="y"===g?"bottom":"right";y=v(y+f["y"===g?"top":"left"],y,y-f[t])}const b=s.fn({...e,[h]:p,[g]:y});return{...b,data:{x:b.x-n,y:b.y-o}}}}};function O(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function N(t){return O(t).getComputedStyle(t)}const C=Math.min,R=Math.max,H=Math.round;function M(t){const e=N(t);let n=parseFloat(e.width),o=parseFloat(e.height);const i=t.offsetWidth,r=t.offsetHeight,l=H(n)!==i||H(o)!==r;return l&&(n=i,o=r),{width:n,height:o,fallback:l}}function P(t){return W(t)?(t.nodeName||"").toLowerCase():""}let D;function F(){if(D)return D;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(D=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),D):navigator.userAgent}function _(t){return t instanceof O(t).HTMLElement}function B(t){return t instanceof O(t).Element}function W(t){return t instanceof O(t).Node}function j(t){return"undefined"!=typeof ShadowRoot&&(t instanceof O(t).ShadowRoot||t instanceof ShadowRoot)}function $(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function q(t){return["table","td","th"].includes(P(t))}function z(t){const e=/firefox/i.test(F()),n=N(t),o=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function I(){return!/^((?!chrome|android).)*safari/i.test(F())}function V(t){return["html","body","#document"].includes(P(t))}function J(t){return B(t)?t:t.contextElement}const K={x:1,y:1};function U(t){const e=J(t);if(!_(e))return K;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=M(e);let l=(r?H(n.width):n.width)/o,s=(r?H(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}function Y(t,e,n,o){var i,r;void 0===e&&(e=!1),void 0===n&&(n=!1);const l=t.getBoundingClientRect(),s=J(t);let a=K;e&&(o?B(o)&&(a=U(o)):a=U(t));const c=s?O(s):window,u=!I()&&n;let d=(l.left+(u&&(null==(i=c.visualViewport)?void 0:i.offsetLeft)||0))/a.x,f=(l.top+(u&&(null==(r=c.visualViewport)?void 0:r.offsetTop)||0))/a.y,h=l.width/a.x,g=l.height/a.y;if(s){const t=O(s),e=o&&B(o)?O(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=U(n),e=n.getBoundingClientRect(),o=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(o.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(o.paddingTop))*t.y,d*=t.x,f*=t.y,h*=t.x,g*=t.y,d+=e.x,f+=e.y,n=O(n).frameElement}}return{width:h,height:g,top:f,right:d+h,bottom:f+g,left:d,x:d,y:f}}function Z(t){return((W(t)?t.ownerDocument:t.document)||window.document).documentElement}function X(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){return Y(Z(t)).left+X(t).scrollLeft}function Q(t){if("html"===P(t))return t;const e=t.assignedSlot||t.parentNode||j(t)&&t.host||Z(t);return j(e)?e.host:e}function tt(t){const e=Q(t);return V(e)?e.ownerDocument.body:_(e)&&$(e)?e:tt(e)}function et(t,e){var n;void 0===e&&(e=[]);const o=tt(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=O(o);return i?e.concat(r,r.visualViewport||[],$(o)?o:[]):e.concat(o,et(o))}function nt(t,e,n){return"viewport"===e?g(function(t,e){const n=O(t),o=Z(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,s=0,a=0;if(i){r=i.width,l=i.height;const t=I();(t||!t&&"fixed"===e)&&(s=i.offsetLeft,a=i.offsetTop)}return{width:r,height:l,x:s,y:a}}(t,n)):B(e)?g(function(t,e){const n=Y(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=_(t)?U(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n)):g(function(t){const e=Z(t),n=X(t),o=t.ownerDocument.body,i=R(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=R(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+G(t);const s=-n.scrollTop;return"rtl"===N(o).direction&&(l+=R(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:s}}(Z(t)))}function ot(t,e){const n=e.get(t);if(n)return n;let o=et(t).filter((t=>B(t)&&"body"!==P(t))),i=null;const r="fixed"===N(t).position;let l=r?Q(t):t;for(;B(l)&&!V(l);){const t=N(l),e=z(l);(r?e||i:e||"static"!==t.position||!i||!["absolute","fixed"].includes(i.position))?i=t:o=o.filter((t=>t!==l)),l=Q(l)}return e.set(t,o),o}function it(t){return _(t)&&"fixed"!==N(t).position?t.offsetParent:null}function rt(t){const e=O(t);let n=it(t);for(;n&&q(n)&&"static"===N(n).position;)n=it(n);return n&&("html"===P(n)||"body"===P(n)&&"static"===N(n).position&&!z(n))?e:n||function(t){let e=Q(t);for(;_(e)&&!V(e);){if(z(e))return e;e=Q(e)}return null}(t)||e}function lt(t,e,n){const o=_(e),i=Z(e),r=Y(t,!0,"fixed"===n,e);let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==P(e)||$(i))&&(l=X(e)),_(e)){const t=Y(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=G(i));return{x:r.left+l.scrollLeft-s.x,y:r.top+l.scrollTop-s.y,width:r.width,height:r.height}}const st={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?ot(e,this._c):[].concat(n),o],l=r[0],s=r.reduce(((t,n)=>{const o=nt(e,n,i);return t.top=R(o.top,t.top),t.right=C(o.right,t.right),t.bottom=C(o.bottom,t.bottom),t.left=R(o.left,t.left),t}),nt(e,l,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=_(n),r=Z(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},s={x:1,y:1};const a={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==P(n)||$(r))&&(l=X(n)),_(n))){const t=Y(n);s=U(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-l.scrollLeft*s.x+a.x,y:e.y*s.y-l.scrollTop*s.y+a.y}},isElement:B,getDimensions:function(t){return _(t)?M(t):t.getBoundingClientRect()},getOffsetParent:rt,getDocumentElement:Z,getScale:U,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||rt,r=this.getDimensions;return{reference:lt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===N(t).direction},at=(t,e,n)=>{const o=new Map,i={platform:st,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,s=r.filter(Boolean),a=await(null==l.isRTL?void 0:l.isRTL(e));let c=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=f(c,o,a),h=o,g={},m=0;for(let p=0;p<s.length;p++){const{name:n,fn:r}=s[p],{x:y,y:v,data:b,reset:w}=await r({x:u,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:g,rects:c,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=v?v:d,g={...g,[n]:{...g[n],...b}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(h=w.placement),w.rects&&(c=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),({x:u,y:d}=f(c,h,a))),p=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:g}})(t,e,{...i,platform:r})},ct=class{constructor(t){(0,o.r)(this,t),this.alignTooltip=()=>{var t,e,n;if("test"!==s.p&&this.previousSibling){const o=this.previousSibling;if(this.tooltipElement){const i=this.tooltipElement,r=this.arrowElement,l=[(n=null!==(t=null==r?void 0:r.offsetHeight)&&void 0!==t?t:10,void 0===n&&(n=0),{name:"offset",options:n,async fn(t){const{x:e,y:o}=t,i=await T(t,n);return{x:e+i.x,y:o+i.y,data:i}}}),(void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:s,elements:a}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...y}=e,v=u(o),b=u(l)===l,L=await(null==s.isRTL?void 0:s.isRTL(a.floating)),k=f||(b||!p?[w(l)]:S(l));f||"none"===g||k.push(...E(l,p,g,L));const T=[l,...k],A=await m(t,y),O=[];let N=(null==(n=i.flip)?void 0:n.overflows)||[];if(c&&O.push(A[v]),d){const{main:t,cross:e}=x(o,r,L);O.push(A[t],A[e])}if(N=[...N,{placement:o,overflows:O}],!O.every((t=>t<=0))){var C,R;const t=((null==(C=i.flip)?void 0:C.index)||0)+1,e=T[t];if(e)return{data:{index:t,overflows:N},reset:{placement:e}};let n=null==(R=N.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:R.placement;if(!n)switch(h){case"bestFit":{var H;const t=null==(H=N.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:H[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}),A()];r&&l.push((t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:i,y:r,placement:l,rects:s,platform:u}=e;if(null==n)return{};const f=h(o),g={x:i,y:r},m=d(l),p=c(m),y=await u.getDimensions(n),b="y"===m?"top":"left",w="y"===m?"bottom":"right",x=s.reference[p]+s.reference[m]-g[m]-s.floating[p],L=g[m]-s.reference[m],k=await(null==u.getOffsetParent?void 0:u.getOffsetParent(n));let S=k?"y"===m?k.clientHeight||0:k.clientWidth||0:0;0===S&&(S=s.floating[p]);const E=x/2-L/2,T=f[b],A=S-y[p]-f[w],O=S/2-y[p]/2+E,N=v(T,O,A),C=null!=a(l)&&O!=N&&s.reference[p]/2-(O<T?f[b]:f[w])-y[p]/2<0;return{[m]:g[m]-(C?O<T?T-O:A-O:0),data:{[m]:N,centerOffset:O-N}}}}))({element:r})),at(o,i,{placement:this.state._align,middleware:l}).then((({x:t,y:e,middlewareData:n,placement:o})=>{var l,s;Object.assign(i.style,{left:`${t}px`,top:`${e}px`}),r&&((null===(l=n.arrow)||void 0===l?void 0:l.x)?Object.assign(r.style,{left:`${n.arrow.x}px`,top:"bottom"===o?-r.offsetHeight/2+"px":"",bottom:"top"===o?-r.offsetHeight/2+"px":""}):(null===(s=n.arrow)||void 0===s?void 0:s.y)&&Object.assign(r.style,{left:"right"===o?-r.offsetWidth/2+"px":"",right:"left"===o?-r.offsetWidth/2+"px":"",top:`${n.arrow.y}px`}))}))}}},this.showTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","block"),(0,r.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip(),this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.alignTooltip))},this.hideTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.alignTooltip))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,r.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,r.n)(),_label:""}}render(){return(0,s.s)((()=>{this.alignTooltip(),(0,s.s)(this.alignTooltip,750)}),250),(0,o.h)(o.H,{ref:this.catchHostElement},""!==this.state._label&&(0,o.h)("div",{id:"floating",ref:this.catchTooltipElement},(0,o.h)("div",{id:"arrow",ref:this.catchArrowElement}),(0,o.h)("kol-badge",{id:this.state._id,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label})))}validateAlign(t){(0,i.w)(this,"_align",t)}validateId(t){(0,l.w)(this,"_id",t)}validateLabel(t){(0,l.w)(this,"_label",t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement)}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};ct.style={default:":host #floating{display:none;position:absolute;animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;box-sizing:border-box;box-shadow:0 0 0.15rem rgba(255, 255, 255, 0.8)}:host #arrow{position:absolute;width:10px;height:10px;background:#333;transform:rotate(45deg);z-index:999}:host kol-badge{font-size:1rem;max-width:300px;z-index:1000;position:relative}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"}},466:(t,e,n)=>{n.d(e,{K:()=>Z,a:()=>T,b:()=>A,c:()=>C,d:()=>N,e:()=>S,f:()=>k,g:()=>B,h:()=>U,i:()=>W,j:()=>Y,k:()=>j,l:()=>V,m:()=>P,n:()=>$,o:()=>L,p:()=>_,q:()=>J,r:()=>u,s:()=>E,t:()=>D,w:()=>O});var o=n(6351),i=n(742),r=n(6038),l=n(333);const s=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},a=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const n=new Set;s(n,e.querySelectorAll(t));const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const i=o[e].shadowRoot;s(n,a(t,"object"==typeof i&&null!==i?i:o[e]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let n=e.querySelector(t);if(null===n){const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const i=o[e].shadowRoot;if(n=c(t,"object"==typeof i&&null!==i?i:o[e]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var u=p,d=p,f=function(t){var e=y(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},h=function(t){var e=y(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},g=function(t){3==(e=y(t)).length&&e.push(255);var e,n=255==e[3],o=v(e[0]),i=v(e[1]),r=v(e[2]),l=function(t,e,n,o){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(t)&&-1!=i.indexOf(e)&&-1!=i.indexOf(n)&&-1!=i.indexOf(o)}(o,i,r,e=v(Math.round(e[3])));return n?l?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0):"#"+o+i+r:l?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0)+e.charAt(0):"#"+o+i+r+e},m=function(t){var e=y(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function p(t){var e=y(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function y(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),n=e.length;if(3==n||4==n){var o=b(e[0]),i=b(e[1]),r=b(e[2]),l=3==n?255:b(e[3]);if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(l))return;return[o,i,r,l]}}(t)||function(t){var e=t.replace(/^#/,""),n=e.length;if(6==n||8==n){var o=b(e.slice(0,2)),i=b(e.slice(2,4)),r=b(e.slice(4,6)),l=6==n?255:b(e.slice(6,8));if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(l))return;return[o,i,r,l]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(e[0],!0),o=w(e[1],!0),i=w(e[2],!0);if(-1!=n&&-1!=o&&-1!=i)return[n,o,i,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(e[0],!0),o=w(e[1],!0),i=w(e[2],!0),r=w(255*e[3]);if(-1!=n&&-1!=o&&-1!=i&&-1!=r)return[n,o,i,r]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=w(null!=t.r?t.r:null!=t.red?t.red:0,!0),n=w(null!=t.g?t.g:null!=t.green?t.green:0,!0),o=w(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),i=w(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=n&&-1!=o&&-1!=i)return[e,n,o,i]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=w(t[0],!0),n=w(t[1],!0),o=w(t[2],!0),i=w(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=n&&-1!=o&&-1!=i)return[e,n,o,i]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function v(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function b(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function w(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}u.arr=d,u.obj=f,u.css=h,u.hex=g,u.num=m;const x=/\[object Object\]/,L=(t,e)=>{"string"==typeof t&&x.test(t)||e()},k=(t,e)=>{"string"==typeof t&&""===t||e()},S=(t,e)=>{(0,l.b)()&&(l.L.debug([t,e]),l.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},E=(t,e,n,o={})=>{var i,r;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==n&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof o.afterPatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(r=t.nextHooks.get(e))||void 0===r||r.set("beforePatch",o.beforePatch)),t.nextState.set(e,n),(t=>{var e,n,o;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,n)=>{var o;const i=e.get("beforePatch");"function"==typeof i&&i(null===(o=t.nextState)||void 0===o?void 0:o.get(n),t.nextState,t,n)})),(null===(n=t.nextState)||void 0===n?void 0:n.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(o=t.nextHooks)||void 0===o||o.forEach(((e,n)=>{const o=e.get("afterPatch");"function"==typeof o&&o(t.state[n],t.state,t,n)}))),delete t.nextHooks})(t))},T=(t,e,n,o,i,l={})=>{n(i)?E(t,e,i,null==l?void 0:l.hooks):void 0===i||null===i&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?E(t,e,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||o.add(null),((t,e,n,o)=>{(0,r.d)(`[${t.constructor.name}] Der Property-Wert (${n}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(t,e,i,o))},A=(t,e,n,o)=>{T(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),n,o)},O=(t,e,n,o={})=>{const i="number"==typeof o.minLength?null==o?void 0:o.minLength:0;T(t,e,(t=>"string"==typeof t&&t.length>=i),new Set([`String (Mindestl\xe4nge ${i})`]),n,o)},N=(t,e,n,o)=>{T(t,e,(t=>"number"==typeof t&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&t>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&t<=o.max)),new Set(["Number"]),n,o)},C=(t,e,n,o,i=(t=>t==t),r={})=>{k(o,(()=>{L(o,(()=>{void 0===o&&(o=[]);try{try{o=_(o)}catch(t){}if(Array.isArray(o)){const s=o.find((t=>!n(t)));void 0===s&&i(o)?E(t,e,o,r.hooks):L(s,(()=>{throw l.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else L(o,(()=>{throw l.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){l.L.debug(t)}}))}))},R=/^(true|false)$/,H=/^-?(0|[1-9]\d*)$/,M=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,P=t=>{const e=typeof t,n=`${t}`;if("string"==typeof t)if(R.test(t))t="true"===t;else if(H.test(t))t=parseInt(t);else if(M.test(t))t=parseFloat(t);else if(F.test(t))try{t=_(t)}catch(t){}return e!==typeof t&&(0,r.d)(`You have used a stringified property value (${n} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},D=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw l.L.warn(["stringifyJson",t]),l.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,_=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if(F.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){l.L.warn(["parseJson",t]),l.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},B=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,W=t=>"string"==typeof t?t:B(t),j=(t,e)=>c(t,e||(0,l.g)()),$=(t,e)=>a(t,e||(0,l.g)());let q=null;const z=()=>(q=q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,l.g)().body,level:"Fail",score:1},q),I=/(\d+, ){3}0\)/,V=(t,e=z())=>{const n=getComputedStyle(t),o=I.test(n.backgroundColor)?e.backgroundColor:u.hex(n.backgroundColor),r=I.test(n.color)?e.color:u.hex(n.color),s=(0,i.s)(o,r),a={backgroundColor:o,color:r,domNode:t,level:(0,i.f)(s),score:s};return s<4.5&&l.L.error(["Color-Contrast-Error",{backgroundColor:a.backgroundColor,color:a.color,level:a.level,score:a.score},a.domNode]),a},J=(t,e=z())=>{e.domNode instanceof HTMLElement&&(e=V(e.domNode,e));const n=e.domNode.querySelector(t);if(null===n){const n=e.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(e.domNode=n[o],null===(e=J(t,e)).domNode);o++);return e}return V(n,e)},K=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,l.a)().pageYOffset-50}),t.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},U=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${e}`;e=t,t=n}if("string"==typeof t){const n=j(t,e);n instanceof HTMLElement?K(n):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class Y{static queryHtmlElementColors(t,e,n=!1,o=!0){let i=null;if(!0===n||!1===Y.executionLock)if(!1===n&&(Y.cache.clear(),Y.cache.set(e.domNode,e),Y.executionLock=!0,!0===o&&l.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)i=e;else{const n=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)n.add(t[e])}const o=e.domNode;if("function"==typeof o.assignedNodes){const t=o.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&n.add(t[e])}const r=e.domNode.children;for(let t=0;t<r.length;t++)n.add(r[t]);const l=Array.from(n);for(let s=0;s<l.length;s++){let n=Y.cache.get(l[s]);void 0===n&&(n=V(l[s],e)),Y.cache.set(l[s],n);const o=Y.queryHtmlElementColors(t,n,!0,!1);if(null!==o){i=o;break}}}else l.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&l.L.debug(`[KoliBriUtils] Color contrast analysis finished (${Y.cache.size} DOM elements are analysed).`),Y.executionLock=!1,Y.cache.clear()),i}}Y.executionLock=!1,Y.cache=new Map;class Z{}Z.patchTheme=o.p,Z.patchThemeTag=o.a,Z.querySelector=j,Z.querySelectorAll=$,Z.scrollByHTMLElement=K,Z.scrollBySelector=U,Z.stringifyJson=D}}]);