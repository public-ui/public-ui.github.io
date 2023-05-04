/*! For license information please see 2783.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[2783],{92783:(t,e,n)=>{n.d(e,{a:()=>L,c:()=>mt,f:()=>D,o:()=>C,s:()=>S});var o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&f(t,n,e[n]);if(l)for(var n of l(e))s.call(e,n)&&f(t,n,e[n]);return t},u=(t,e)=>i(t,r(e)),d=(t,e)=>{var n={};for(var o in t)c.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&l)for(var o of l(t))e.indexOf(o)<0&&s.call(t,o)&&(n[o]=t[o]);return n},p=(t,e,n)=>new Promise(((o,i)=>{var r=t=>{try{c(n.next(t))}catch(t){i(t)}},l=t=>{try{c(n.throw(t))}catch(t){i(t)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(r,l);c((n=n.apply(t,e)).next())}));function m(t){return t.split("-")[1]}function h(t){return"y"===t?"height":"width"}function y(t){return t.split("-")[0]}function g(t){return["top","bottom"].includes(y(t))?"x":"y"}function x(t,e,n){let{reference:o,floating:i}=t;const r=o.x+o.width/2-i.width/2,l=o.y+o.height/2-i.height/2,c=g(e),s=h(c),f=o[s]/2-i[s]/2,a="x"===c;let u;switch(y(e)){case"top":u={x:r,y:o.y-i.height};break;case"bottom":u={x:r,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:l};break;case"left":u={x:o.x-i.width,y:l};break;default:u={x:o.x,y:o.y}}switch(m(e)){case"start":u[c]-=f*(n&&a?-1:1);break;case"end":u[c]+=f*(n&&a?-1:1)}return u}function v(t){return"number"!=typeof t?function(t){return a({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function b(t){return u(a({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function w(t,e){return p(this,null,(function*(){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:m=!1,padding:h=0}=e,y=v(h),g=c[m?"floating"===p?"reference":"floating":p],x=b(yield r.getClippingRect({element:null==(n=yield null==r.isElement?void 0:r.isElement(g))||n?g:g.contextElement||(yield null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:s})),w="floating"===p?u(a({},l.floating),{x:o,y:i}):l.reference,R=yield null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating),A=(yield null==r.isElement?void 0:r.isElement(R))&&(yield null==r.getScale?void 0:r.getScale(R))||{x:1,y:1},T=b(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:R,strategy:s}):w);return{top:(x.top-T.top+y.top)/A.y,bottom:(T.bottom-x.bottom+y.bottom)/A.y,left:(x.left-T.left+y.left)/A.x,right:(T.right-x.right+y.right)/A.x}}))}const R=Math.min,A=Math.max;function T(t,e,n){return A(t,R(e,n))}const L=t=>({name:"arrow",options:t,fn(e){return p(this,null,(function*(){const{element:n,padding:o=0}=t||{},{x:i,y:r,placement:l,rects:c,platform:s,elements:f}=e;if(null==n)return{};const a=v(o),u={x:i,y:r},d=g(l),p=h(d),y=yield s.getDimensions(n),x="y"===d,b=x?"top":"left",w=x?"bottom":"right",R=x?"clientHeight":"clientWidth",A=c.reference[p]+c.reference[d]-u[d]-c.floating[p],L=u[d]-c.reference[d],P=yield null==s.getOffsetParent?void 0:s.getOffsetParent(n);let O=P?P[R]:0;O&&(yield null==s.isElement?void 0:s.isElement(P))||(O=f.floating[R]||c.floating[p]);const k=A/2-L/2,E=a[b],D=O-y[p]-a[w],C=O/2-y[p]/2+k,S=T(E,C,D),W=null!=m(l)&&C!=S&&c.reference[p]/2-(C<E?a[b]:a[w])-y[p]/2<0;return{[d]:u[d]-(W?C<E?E-C:D-C:0),data:{[d]:S,centerOffset:C-S}}}))}}),P={left:"right",right:"left",bottom:"top",top:"bottom"};function O(t){return t.replace(/left|right|bottom|top/g,(t=>P[t]))}const k={start:"end",end:"start"};function E(t){return t.replace(/start|end/g,(t=>k[t]))}const D=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn(e){return p(this,null,(function*(){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:c,elements:s}=e,f=t,{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:b=!0}=f,R=d(f,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),A=y(o),T=y(l)===l,L=yield null==c.isRTL?void 0:c.isRTL(s.floating),P=p||(T||!b?[O(l)]:function(t){const e=O(t);return[E(t),e,E(e)]}(l));p||"none"===v||P.push(...function(t,e,n,o){const i=m(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(y(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(E)))),r}(l,b,v,L));const k=[l,...P],D=yield w(e,R),C=[];let S=(null==(n=i.flip)?void 0:n.overflows)||[];if(a&&C.push(D[A]),u){const{main:t,cross:e}=function(t,e,n){void 0===n&&(n=!1);const o=m(t),i=g(t),r=h(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=O(l)),{main:l,cross:O(l)}}(o,r,L);C.push(D[t],D[e])}if(S=[...S,{placement:o,overflows:C}],!C.every((t=>t<=0))){var W,F;const t=((null==(W=i.flip)?void 0:W.index)||0)+1,e=k[t];if(e)return{data:{index:t,overflows:S},reset:{placement:e}};let n=null==(F=S.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:F.placement;if(!n)switch(x){case"bestFit":{var V;const t=null==(V=S.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:V[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}))}}},C=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn(e){return p(this,null,(function*(){const{x:n,y:o}=e,i=yield function(t,e){return p(this,null,(function*(){const{placement:n,platform:o,elements:i}=t,r=yield null==o.isRTL?void 0:o.isRTL(i.floating),l=y(n),c=m(n),s="x"===g(n),f=["left","top"].includes(l)?-1:1,u=r&&s?-1:1,d="function"==typeof e?e(t):e;let{mainAxis:p,crossAxis:h,alignmentAxis:x}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:a({mainAxis:0,crossAxis:0,alignmentAxis:null},d);return c&&"number"==typeof x&&(h="end"===c?-1*x:x),s?{x:h*u,y:p*f}:{x:p*f,y:h*u}}))}(e,t);return{x:n+i.x,y:o+i.y,data:i}}))}}},S=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn(e){return p(this,null,(function*(){const{x:n,y:o,placement:i}=e,r=t,{mainAxis:l=!0,crossAxis:c=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}}}=r,f=d(r,["mainAxis","crossAxis","limiter"]),p={x:n,y:o},m=yield w(e,f),h=g(y(i)),x=function(t){return"x"===t?"y":"x"}(h);let v=p[h],b=p[x];if(l){const t="y"===h?"bottom":"right";v=T(v+m["y"===h?"top":"left"],v,v-m[t])}if(c){const t="y"===x?"bottom":"right";b=T(b+m["y"===x?"top":"left"],b,b-m[t])}const R=s.fn(u(a({},e),{[h]:v,[x]:b}));return u(a({},R),{data:{x:R.x-n,y:R.y-o}})}))}}};function W(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function F(t){return W(t).getComputedStyle(t)}function V(t){return t instanceof W(t).Node}function B(t){return V(t)?(t.nodeName||"").toLowerCase():""}let H;function j(){if(H)return H;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(H=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),H):navigator.userAgent}function _(t){return t instanceof W(t).HTMLElement}function M(t){return t instanceof W(t).Element}function N(t){return"undefined"!=typeof ShadowRoot&&(t instanceof W(t).ShadowRoot||t instanceof ShadowRoot)}function X(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=F(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Y(t){return["table","td","th"].includes(B(t))}function I(t){const e=/firefox/i.test(j()),n=F(t),o=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function q(){return/^((?!chrome|android).)*safari/i.test(j())}function z(t){return["html","body","#document"].includes(B(t))}const G=Math.min,J=Math.max,K=Math.round;function Q(t){const e=F(t);let n=parseFloat(e.width),o=parseFloat(e.height);const i=_(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,c=K(n)!==r||K(o)!==l;return c&&(n=r,o=l),{width:n,height:o,fallback:c}}function U(t){return M(t)?t:t.contextElement}const Z={x:1,y:1};function $(t){const e=U(t);if(!_(e))return Z;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=Q(e);let l=(r?K(n.width):n.width)/o,c=(r?K(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}function tt(t,e,n,o){var i,r;void 0===e&&(e=!1),void 0===n&&(n=!1);const l=t.getBoundingClientRect(),c=U(t);let s=Z;e&&(o?M(o)&&(s=$(o)):s=$(t));const f=c?W(c):window,a=q()&&n;let u=(l.left+(a&&(null==(i=f.visualViewport)?void 0:i.offsetLeft)||0))/s.x,d=(l.top+(a&&(null==(r=f.visualViewport)?void 0:r.offsetTop)||0))/s.y,p=l.width/s.x,m=l.height/s.y;if(c){const t=W(c),e=o&&M(o)?W(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=$(n),e=n.getBoundingClientRect(),o=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(o.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(o.paddingTop))*t.y,u*=t.x,d*=t.y,p*=t.x,m*=t.y,u+=e.x,d+=e.y,n=W(n).frameElement}}return b({width:p,height:m,x:u,y:d})}function et(t){return((V(t)?t.ownerDocument:t.document)||window.document).documentElement}function nt(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ot(t){return tt(et(t)).left+nt(t).scrollLeft}function it(t){if("html"===B(t))return t;const e=t.assignedSlot||t.parentNode||N(t)&&t.host||et(t);return N(e)?e.host:e}function rt(t){const e=it(t);return z(e)?e.ownerDocument.body:_(e)&&X(e)?e:rt(e)}function lt(t,e){var n;void 0===e&&(e=[]);const o=rt(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=W(o);return i?e.concat(r,r.visualViewport||[],X(o)?o:[]):e.concat(o,lt(o))}function ct(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=W(t),o=et(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=q();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n);else if("document"===e)o=function(t){const e=et(t),n=nt(t),o=t.ownerDocument.body,i=J(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=J(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+ot(t);const c=-n.scrollTop;return"rtl"===F(o).direction&&(l+=J(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:c}}(et(t));else if(M(e))o=function(t,e){const n=tt(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=_(t)?$(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=a({},e);if(q()){var i,r;const e=W(t);n.x-=(null==(i=e.visualViewport)?void 0:i.offsetLeft)||0,n.y-=(null==(r=e.visualViewport)?void 0:r.offsetTop)||0}o=n}return b(o)}function st(t,e){const n=it(t);return!(n===e||!M(n)||z(n))&&("fixed"===F(n).position||st(n,e))}function ft(t,e){const n=e.get(t);if(n)return n;let o=lt(t).filter((t=>M(t)&&"body"!==B(t))),i=null;const r="fixed"===F(t).position;let l=r?it(t):t;for(;M(l)&&!z(l);){const e=F(l),n=I(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||X(l)&&!n&&st(t,l))?o=o.filter((t=>t!==l)):i=e,l=it(l)}return e.set(t,o),o}function at(t,e){return _(t)&&"fixed"!==F(t).position?e?e(t):t.offsetParent:null}function ut(t,e){const n=W(t);if(!_(t))return n;let o=at(t,e);for(;o&&Y(o)&&"static"===F(o).position;)o=at(o,e);return o&&("html"===B(o)||"body"===B(o)&&"static"===F(o).position&&!I(o))?n:o||function(t){let e=it(t);for(;_(e)&&!z(e);){if(I(e))return e;e=it(e)}return null}(t)||n}function dt(t,e,n){const o=_(e),i=et(e),r=tt(t,!0,"fixed"===n,e);let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==B(e)||X(i))&&(l=nt(e)),_(e)){const t=tt(e,!0);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=ot(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}const pt={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?ft(e,this._c):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=ct(e,n,i);return t.top=J(o.top,t.top),t.right=G(o.right,t.right),t.bottom=G(o.bottom,t.bottom),t.left=J(o.left,t.left),t}),ct(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=_(n),r=et(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c={x:1,y:1};const s={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==B(n)||X(r))&&(l=nt(n)),_(n))){const t=tt(n);c=$(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+s.x,y:e.y*c.y-l.scrollTop*c.y+s.y}},isElement:M,getDimensions:function(t){return Q(t)},getOffsetParent:ut,getDocumentElement:et,getScale:$,getElementRects(t){return p(this,null,(function*(){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||ut,r=this.getDimensions;return{reference:dt(e,yield i(n),o),floating:a({x:0,y:0},yield r(n))}}))},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===F(t).direction},mt=(t,e,n)=>{const o=new Map,i=a({platform:pt},n),r=u(a({},i.platform),{_c:o});return((t,e,n)=>p(void 0,null,(function*(){const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=yield null==l.isRTL?void 0:l.isRTL(e);let f=yield l.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:p}=x(f,o,s),m=o,h={},y=0;for(let n=0;n<c.length;n++){const{name:r,fn:g}=c[n],{x:v,y:b,data:w,reset:R}=yield g({x:d,y:p,initialPlacement:o,placement:m,strategy:i,middlewareData:h,rects:f,platform:l,elements:{reference:t,floating:e}});d=null!=v?v:d,p=null!=b?b:p,h=u(a({},h),{[r]:a(a({},h[r]),w)}),R&&y<=50&&(y++,"object"==typeof R&&(R.placement&&(m=R.placement),R.rects&&(f=!0===R.rects?yield l.getElementRects({reference:t,floating:e,strategy:i}):R.rects),({x:d,y:p}=x(f,m,s))),n=-1)}return{x:d,y:p,placement:m,strategy:i,middlewareData:h}})))(t,e,u(a({},i),{platform:r}))}}}]);