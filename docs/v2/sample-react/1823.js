/*! For license information please see 1823.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1823],{1823:(t,e,n)=>{n.d(e,{a:()=>vt,b:()=>ht});var o=n(4818),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,a=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&a(t,n,e[n]);if(c)for(var n of c(e))f.call(e,n)&&a(t,n,e[n]);return t},d=(t,e)=>r(t,l(e)),p=(t,e)=>{var n={};for(var o in t)s.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&c)for(var o of c(t))e.indexOf(o)<0&&f.call(t,o)&&(n[o]=t[o]);return n},m=(t,e,n)=>new Promise(((o,i)=>{var r=t=>{try{c(n.next(t))}catch(t){i(t)}},l=t=>{try{c(n.throw(t))}catch(t){i(t)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(r,l);c((n=n.apply(t,e)).next())}));const h=["start","end"],y=(["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-"+h[0],e+"-"+h[1])),[]),Math.min),g=Math.max,x=Math.round,v=Math.floor,w=t=>({x:t,y:t}),b={left:"right",right:"left",bottom:"top",top:"bottom"},R={start:"end",end:"start"};function E(t,e,n){return g(t,y(e,n))}function O(t,e){return"function"==typeof t?t(e):t}function T(t){return t.split("-")[0]}function L(t){return t.split("-")[1]}function A(t){return"x"===t?"y":"x"}function P(t){return"y"===t?"height":"width"}function D(t){return["top","bottom"].includes(T(t))?"y":"x"}function S(t){return A(D(t))}function k(t){return t.replace(/start|end/g,(t=>R[t]))}function C(t){return t.replace(/left|right|bottom|top/g,(t=>b[t]))}function F(t){return"number"!=typeof t?function(t){return u({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function H(t){return d(u({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function W(t,e,n){let{reference:o,floating:i}=t;const r=D(e),l=S(e),c=P(l),s=T(e),f="y"===r,a=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,d=o[c]/2-i[c]/2;let p;switch(s){case"top":p={x:a,y:o.y-i.height};break;case"bottom":p={x:a,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-i.width,y:u};break;default:p={x:o.x,y:o.y}}switch(L(e)){case"start":p[l]-=d*(n&&f?-1:1);break;case"end":p[l]+=d*(n&&f?-1:1)}return p}function j(t,e){return m(this,null,(function*(){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:a="viewport",elementContext:p="floating",altBoundary:m=!1,padding:h=0}=O(e,t),y=F(h),g=c[m?"floating"===p?"reference":"floating":p],x=H(yield r.getClippingRect({element:null==(n=yield null==r.isElement?void 0:r.isElement(g))||n?g:g.contextElement||(yield null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:a,strategy:s})),v="floating"===p?d(u({},l.floating),{x:o,y:i}):l.reference,w=yield null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating),b=(yield null==r.isElement?void 0:r.isElement(w))&&(yield null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},R=H(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:s}):v);return{top:(x.top-R.top+y.top)/b.y,bottom:(R.bottom-x.bottom+y.bottom)/b.y,left:(x.left-R.left+y.left)/b.x,right:(R.right-x.right+y.right)/b.x}}))}const _=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn(e){return m(this,null,(function*(){var n,o;const{x:i,y:r,placement:l,middlewareData:c}=e,s=yield function(t,e){return m(this,null,(function*(){const{placement:n,platform:o,elements:i}=t,r=yield null==o.isRTL?void 0:o.isRTL(i.floating),l=T(n),c=L(n),s="y"===D(n),f=["left","top"].includes(l)?-1:1,a=r&&s?-1:1,d=O(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:u({mainAxis:0,crossAxis:0,alignmentAxis:null},d);return c&&"number"==typeof h&&(m="end"===c?-1*h:h),s?{x:m*a,y:p*f}:{x:p*f,y:m*a}}))}(e,t);return l===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+s.x,y:r+s.y,data:d(u({},s),{placement:l})}}))}}};function B(t){return z(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function M(t){var e;return null==(e=(z(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function z(t){return t instanceof Node||t instanceof V(t).Node}function N(t){return t instanceof Element||t instanceof V(t).Element}function $(t){return t instanceof HTMLElement||t instanceof V(t).HTMLElement}function I(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof V(t).ShadowRoot)}function q(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=K(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function X(t){return["table","td","th"].includes(B(t))}function Y(t){const e=G(),n=K(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function G(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(B(t))}function K(t){return V(t).getComputedStyle(t)}function Q(t){return N(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if("html"===B(t))return t;const e=t.assignedSlot||t.parentNode||I(t)&&t.host||M(t);return I(e)?e.host:e}function Z(t){const e=U(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:$(e)&&q(e)?e:Z(e)}function tt(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=Z(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=V(i);return r?e.concat(l,l.visualViewport||[],q(i)?i:[],l.frameElement&&n?tt(l.frameElement):[]):e.concat(i,tt(i,[],n))}function et(t){const e=K(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=$(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,c=x(n)!==r||x(o)!==l;return c&&(n=r,o=l),{width:n,height:o,$:c}}function nt(t){return N(t)?t:t.contextElement}function ot(t){const e=nt(t);if(!$(e))return w(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=et(e);let l=(r?x(n.width):n.width)/o,c=(r?x(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const it=w(0);function rt(t){const e=V(t);return G()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:it}function lt(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=nt(t);let l=w(1);e&&(o?N(o)&&(l=ot(o)):l=ot(t));const c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==V(t))&&e}(r,n,o)?rt(r):w(0);let s=(i.left+c.x)/l.x,f=(i.top+c.y)/l.y,a=i.width/l.x,u=i.height/l.y;if(r){const t=V(r),e=o&&N(o)?V(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=ot(n),e=n.getBoundingClientRect(),o=K(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;s*=t.x,f*=t.y,a*=t.x,u*=t.y,s+=i,f+=r,n=V(n).frameElement}}return H({width:a,height:u,x:s,y:f})}function ct(t){return lt(M(t)).left+Q(t).scrollLeft}function st(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=V(t),o=M(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=G();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n);else if("document"===e)o=function(t){const e=M(t),n=Q(t),o=t.ownerDocument.body,i=g(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=g(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+ct(t);const c=-n.scrollTop;return"rtl"===K(o).direction&&(l+=g(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:c}}(M(t));else if(N(e))o=function(t,e){const n=lt(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=$(t)?ot(t):w(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=rt(t);o=d(u({},e),{x:e.x-n.x,y:e.y-n.y})}return H(o)}function ft(t,e){const n=U(t);return!(n===e||!N(n)||J(n))&&("fixed"===K(n).position||ft(n,e))}function at(t,e){const n=e.get(t);if(n)return n;let o=tt(t,[],!1).filter((t=>N(t)&&"body"!==B(t))),i=null;const r="fixed"===K(t).position;let l=r?U(t):t;for(;N(l)&&!J(l);){const e=K(l),n=Y(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||q(l)&&!n&&ft(t,l))?o=o.filter((t=>t!==l)):i=e,l=U(l)}return e.set(t,o),o}function ut(t,e,n){const o=$(e),i=M(e),r="fixed"===n,l=lt(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const s=w(0);if(o||!o&&!r)if(("body"!==B(e)||q(i))&&(c=Q(e)),o){const t=lt(e,!0,r,e);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=ct(i));return{x:l.left+c.scrollLeft-s.x,y:l.top+c.scrollTop-s.y,width:l.width,height:l.height}}function dt(t,e){return $(t)&&"fixed"!==K(t).position?e?e(t):t.offsetParent:null}function pt(t,e){const n=V(t);if(!$(t))return n;let o=dt(t,e);for(;o&&X(o)&&"static"===K(o).position;)o=dt(o,e);return o&&("html"===B(o)||"body"===B(o)&&"static"===K(o).position&&!Y(o))?n:o||function(t){let e=U(t);for(;$(e)&&!J(e);){if(Y(e))return e;e=U(e)}return null}(t)||n}const mt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=$(n),r=M(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c=w(1);const s=w(0);if((i||!i&&"fixed"!==o)&&(("body"!==B(n)||q(r))&&(l=Q(n)),$(n))){const t=lt(n);c=ot(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+s.x,y:e.y*c.y-l.scrollTop*c.y+s.y}},getDocumentElement:M,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?at(e,this._c):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=st(e,n,i);return t.top=g(o.top,t.top),t.right=y(o.right,t.right),t.bottom=y(o.bottom,t.bottom),t.left=g(o.left,t.left),t}),st(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:pt,getElementRects:function(t){return m(this,null,(function*(){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||pt,r=this.getDimensions;return{reference:ut(e,yield i(n),o),floating:u({x:0,y:0},yield r(n))}}))},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=et(t);return{width:e,height:n}},getScale:ot,isElement:N,isRTL:function(t){return"rtl"===K(t).direction}};function ht(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,f=nt(t),a=i||r?[...f?tt(f):[],...tt(e)]:[];a.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const p=f&&c?function(t,e){let n,o=null;const i=M(t);function r(){clearTimeout(n),o&&o.disconnect(),o=null}return function l(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),r();const{left:f,top:a,width:p,height:m}=t.getBoundingClientRect();if(c||e(),!p||!m)return;const h={rootMargin:-v(a)+"px "+-v(i.clientWidth-(f+p))+"px "+-v(i.clientHeight-(a+m))+"px "+-v(f)+"px",threshold:g(0,y(1,s))||1};let x=!0;function w(t){const e=t[0].intersectionRatio;if(e!==s){if(!x)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}x=!1}try{o=new IntersectionObserver(w,d(u({},h),{root:i.ownerDocument}))}catch(t){o=new IntersectionObserver(w,h)}o.observe(t)}(!0),r}(f,n):null;let m,h=-1,x=null;l&&(x=new ResizeObserver((t=>{let[o]=t;o&&o.target===f&&x&&(x.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{x&&x.observe(e)}))),n()})),f&&!s&&x.observe(f),x.observe(e));let w=s?lt(t):null;return s&&function e(){const o=lt(t);!w||o.x===w.x&&o.y===w.y&&o.width===w.width&&o.height===w.height||n(),w=o,m=requestAnimationFrame(e)}(),n(),()=>{a.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),p&&p(),x&&x.disconnect(),x=null,s&&cancelAnimationFrame(m)}}const yt=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn(e){return m(this,null,(function*(){const{x:n,y:o,placement:i}=e,r=O(t,e),{mainAxis:l=!0,crossAxis:c=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}}}=r,f=p(r,["mainAxis","crossAxis","limiter"]),a={x:n,y:o},m=yield j(e,f),h=D(T(i)),y=A(h);let g=a[y],x=a[h];if(l){const t="y"===y?"bottom":"right";g=E(g+m["y"===y?"top":"left"],g,g-m[t])}if(c){const t="y"===h?"bottom":"right";x=E(x+m["y"===h?"top":"left"],x,x-m[t])}const v=s.fn(d(u({},e),{[y]:g,[h]:x}));return d(u({},v),{data:{x:v.x-n,y:v.y-o}})}))}}},gt=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn(e){return m(this,null,(function*(){var n,o;const{placement:i,middlewareData:r,rects:l,initialPlacement:c,platform:s,elements:f}=e,a=O(t,e),{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:g=!0}=a,x=p(a,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const v=T(i),w=T(c)===c,b=yield null==s.isRTL?void 0:s.isRTL(f.floating),R=m||(w||!g?[C(c)]:function(t){const e=C(t);return[k(t),e,k(e)]}(c));m||"none"===y||R.push(...function(t,e,n,o){const i=L(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(T(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(k)))),r}(c,g,y,b));const E=[c,...R],A=yield j(e,x),D=[];let F=(null==(o=r.flip)?void 0:o.overflows)||[];if(u&&D.push(A[v]),d){const t=function(t,e,n){void 0===n&&(n=!1);const o=L(t),i=S(t),r=P(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=C(l)),[l,C(l)]}(i,l,b);D.push(A[t[0]],A[t[1]])}if(F=[...F,{placement:i,overflows:D}],!D.every((t=>t<=0))){var H,W;const t=((null==(H=r.flip)?void 0:H.index)||0)+1,e=E[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(W=F.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:W.placement;if(!n)switch(h){case"bestFit":{var _;const t=null==(_=F.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:_[0];t&&(n=t);break}case"initialPlacement":n=c}if(i!==n)return{reset:{placement:n}}}return{}}))}}},xt=t=>({name:"arrow",options:t,fn(e){return m(this,null,(function*(){const{x:n,y:o,placement:i,rects:r,platform:l,elements:c,middlewareData:s}=e,{element:f,padding:a=0}=O(t,e)||{};if(null==f)return{};const d=F(a),p={x:n,y:o},m=S(i),h=P(m),g=yield l.getDimensions(f),x="y"===m,v=x?"top":"left",w=x?"bottom":"right",b=x?"clientHeight":"clientWidth",R=r.reference[h]+r.reference[m]-p[m]-r.floating[h],T=p[m]-r.reference[m],A=yield null==l.getOffsetParent?void 0:l.getOffsetParent(f);let D=A?A[b]:0;D&&(yield null==l.isElement?void 0:l.isElement(A))||(D=c.floating[b]||r.floating[h]);const k=R/2-T/2,C=D/2-g[h]/2-1,H=y(d[v],C),W=y(d[w],C),j=H,_=D-g[h]-W,B=D/2-g[h]/2+k,V=E(j,B,_),M=!s.arrow&&null!=L(i)&&B!=V&&r.reference[h]/2-(B<j?H:W)-g[h]/2<0,z=M?B<j?B-j:B-_:0;return{[m]:p[m]+z,data:u({[m]:V,centerOffset:B-V-z},M&&{alignmentOffset:z}),reset:M}}))}}),vt=t=>m(void 0,[t],(function*({floatingElement:t,referenceElement:e,arrowElement:n,align:i="top"}){var r,l,c;if("test"!==o.p){const o=[_(null!==(r=null==n?void 0:n.offsetHeight)&&void 0!==r?r:10),gt(),yt()];n&&o.push(xt({element:n}));const{x:s,y:f,middlewareData:a,placement:p}=yield((t,e,n)=>{const o=new Map,i=u({platform:mt},n),r=d(u({},i.platform),{_c:o});return((t,e,n)=>m(void 0,null,(function*(){const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=yield null==l.isRTL?void 0:l.isRTL(e);let f=yield l.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:p}=W(f,o,s),m=o,h={},y=0;for(let n=0;n<c.length;n++){const{name:r,fn:g}=c[n],{x,y:v,data:w,reset:b}=yield g({x:a,y:p,initialPlacement:o,placement:m,strategy:i,middlewareData:h,rects:f,platform:l,elements:{reference:t,floating:e}});a=null!=x?x:a,p=null!=v?v:p,h=d(u({},h),{[r]:u(u({},h[r]),w)}),b&&y<=50&&(y++,"object"==typeof b&&(b.placement&&(m=b.placement),b.rects&&(f=!0===b.rects?yield l.getElementRects({reference:t,floating:e,strategy:i}):b.rects),({x:a,y:p}=W(f,m,s))),n=-1)}return{x:a,y:p,placement:m,strategy:i,middlewareData:h}})))(t,e,d(u({},i),{platform:r}))})(e,t,{placement:i,middleware:o,strategy:"fixed"});Object.assign(t.style,{left:`${s}px`,top:`${f}px`,visibility:"visible"}),n&&((null===(l=a.arrow)||void 0===l?void 0:l.x)?Object.assign(n.style,{left:`${a.arrow.x}px`,top:"bottom"===p?-n.offsetHeight/2+"px":"",bottom:"top"===p?-n.offsetHeight/2+"px":""}):(null===(c=a.arrow)||void 0===c?void 0:c.y)&&Object.assign(n.style,{left:"right"===p?-n.offsetWidth/2+"px":"",right:"left"===p?-n.offsetWidth/2+"px":"",top:`${a.arrow.y}px`}))}}))}}]);