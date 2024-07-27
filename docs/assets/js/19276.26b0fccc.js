/*! For license information please see 19276.26b0fccc.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[19276],{40168:(t,e,n)=>{n.d(e,{a:()=>l,v:()=>r});var o=n(70728);const r=(t,e,n)=>{(0,o.w)(t,e,(t=>"string"==typeof t&&i.includes(t)),new Set(i),n,{defaultValue:"top"})},i=["left","right","top","bottom"],l=(t,e)=>{r(t,"_align",e)}},97808:(t,e,n)=>{n.d(e,{a:()=>ht,b:()=>at});var o=n(28968);const r=["top","right","bottom","left"],i=["start","end"],l=(r.reduce(((t,e)=>t.concat(e,e+"-"+i[0],e+"-"+i[1])),[]),Math.min),a=Math.max,c=Math.round,s=Math.floor,u=t=>({x:t,y:t}),f={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function h(t,e,n){return a(t,l(e,n))}function g(t,e){return"function"==typeof t?t(e):t}function p(t){return t.split("-")[0]}function m(t){return t.split("-")[1]}function y(t){return"x"===t?"y":"x"}function v(t){return"y"===t?"height":"width"}function b(t){return["top","bottom"].includes(p(t))?"y":"x"}function w(t){return y(b(t))}function x(t,e,n){void 0===n&&(n=!1);const o=m(t),r=w(t),i=v(r);let l="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[i]>e.floating[i]&&(l=L(l)),[l,L(l)]}function S(t){return t.replace(/start|end/g,(t=>d[t]))}function L(t){return t.replace(/left|right|bottom|top/g,(t=>f[t]))}function k(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function A(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function E(t,e,n){let{reference:o,floating:r}=t;const i=b(e),l=w(e),a=v(l),c=p(e),s="y"===i,u=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,d=o[a]/2-r[a]/2;let h;switch(c){case"top":h={x:u,y:o.y-r.height};break;case"bottom":h={x:u,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:f};break;case"left":h={x:o.x-r.width,y:f};break;default:h={x:o.x,y:o.y}}switch(m(e)){case"start":h[l]-=d*(n&&s?-1:1);break;case"end":h[l]+=d*(n&&s?-1:1)}return h}async function T(t,e){var n;void 0===e&&(e={});const{x:o,y:r,platform:i,rects:l,elements:a,strategy:c}=t,{boundary:s="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:h=0}=g(e,t),p=k(h),m=a[d?"floating"===f?"reference":"floating":f],y=A(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:s,rootBoundary:u,strategy:c})),v="floating"===f?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,b=await(null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),w=await(null==i.isElement?void 0:i.isElement(b))&&await(null==i.getScale?void 0:i.getScale(b))||{x:1,y:1},x=A(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:b,strategy:c}):v);return{top:(y.top-x.top+p.top)/w.y,bottom:(x.bottom-y.bottom+p.bottom)/w.y,left:(y.left-x.left+p.left)/w.x,right:(x.right-y.right+p.right)/w.x}}function N(t){return C(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function O(t){var e;return null==(e=(C(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function C(t){return t instanceof Node||t instanceof R(t).Node}function M(t){return t instanceof Element||t instanceof R(t).Element}function H(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function P(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof R(t).ShadowRoot)}function D(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function j(t){return["table","td","th"].includes(N(t))}function $(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function q(t){const e=F(),n=B(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function F(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function W(t){return["html","body","#document"].includes(N(t))}function B(t){return R(t).getComputedStyle(t)}function _(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function z(t){if("html"===N(t))return t;const e=t.assignedSlot||t.parentNode||P(t)&&t.host||O(t);return P(e)?e.host:e}function V(t){const e=z(t);return W(e)?t.ownerDocument?t.ownerDocument.body:t.body:H(e)&&D(e)?e:V(e)}function I(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const r=V(t),i=r===(null==(o=t.ownerDocument)?void 0:o.body),l=R(r);return i?e.concat(l,l.visualViewport||[],D(r)?r:[],l.frameElement&&n?I(l.frameElement):[]):e.concat(r,I(r,[],n))}function J(t){const e=B(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=H(t),i=r?t.offsetWidth:n,l=r?t.offsetHeight:o,a=c(n)!==i||c(o)!==l;return a&&(n=i,o=l),{width:n,height:o,$:a}}function K(t){return M(t)?t:t.contextElement}function U(t){const e=K(t);if(!H(e))return u(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=J(e);let l=(i?c(n.width):n.width)/o,a=(i?c(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}const Y=u(0);function X(t){const e=R(t);return F()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Y}function G(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),i=K(t);let l=u(1);e&&(o?M(o)&&(l=U(o)):l=U(t));const a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==R(t))&&e}(i,n,o)?X(i):u(0);let c=(r.left+a.x)/l.x,s=(r.top+a.y)/l.y,f=r.width/l.x,d=r.height/l.y;if(i){const t=R(i),e=o&&M(o)?R(o):o;let n=t,r=n.frameElement;for(;r&&o&&e!==n;){const t=U(r),e=r.getBoundingClientRect(),o=B(r),i=e.left+(r.clientLeft+parseFloat(o.paddingLeft))*t.x,l=e.top+(r.clientTop+parseFloat(o.paddingTop))*t.y;c*=t.x,s*=t.y,f*=t.x,d*=t.y,c+=i,s+=l,n=R(r),r=n.frameElement}}return A({width:f,height:d,x:c,y:s})}function Q(t){return G(O(t)).left+_(t).scrollLeft}function Z(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=R(t),o=O(t),r=n.visualViewport;let i=o.clientWidth,l=o.clientHeight,a=0,c=0;if(r){i=r.width,l=r.height;const t=F();(!t||t&&"fixed"===e)&&(a=r.offsetLeft,c=r.offsetTop)}return{width:i,height:l,x:a,y:c}}(t,n);else if("document"===e)o=function(t){const e=O(t),n=_(t),o=t.ownerDocument.body,r=a(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=a(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+Q(t);const c=-n.scrollTop;return"rtl"===B(o).direction&&(l+=a(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:l,y:c}}(O(t));else if(M(e))o=function(t,e){const n=G(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=H(t)?U(t):u(1);return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:r*i.x,y:o*i.y}}(e,n);else{const n=X(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return A(o)}function tt(t,e){const n=z(t);return!(n===e||!M(n)||W(n))&&("fixed"===B(n).position||tt(n,e))}function et(t,e){const n=e.get(t);if(n)return n;let o=I(t,[],!1).filter((t=>M(t)&&"body"!==N(t))),r=null;const i="fixed"===B(t).position;let l=i?z(t):t;for(;M(l)&&!W(l);){const e=B(l),n=q(l);n||"fixed"!==e.position||(r=null),(i?!n&&!r:!n&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||D(l)&&!n&&tt(t,l))?o=o.filter((t=>t!==l)):r=e,l=z(l)}return e.set(t,o),o}function nt(t,e,n){const o=H(e),r=O(e),i="fixed"===n,l=G(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const c=u(0);if(o||!o&&!i)if(("body"!==N(e)||D(r))&&(a=_(e)),o){const t=G(e,!0,i,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else r&&(c.x=Q(r));return{x:l.left+a.scrollLeft-c.x,y:l.top+a.scrollTop-c.y,width:l.width,height:l.height}}function ot(t){return"static"===B(t).position}function rt(t,e){return H(t)&&"fixed"!==B(t).position?e?e(t):t.offsetParent:null}function it(t,e){const n=R(t);if($(t))return n;if(!H(t)){let e=z(t);for(;e&&!W(e);){if(M(e)&&!ot(e))return e;e=z(e)}return n}let o=rt(t,e);for(;o&&j(o)&&ot(o);)o=rt(o,e);return o&&W(o)&&ot(o)&&!q(o)?n:o||function(t){let e=z(t);for(;H(e)&&!W(e);){if($(e))return null;if(q(e))return e;e=z(e)}return null}(t)||n}const lt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i="fixed"===r,l=O(o),a=!!e&&$(e.floating);if(o===l||a&&i)return n;let c={scrollLeft:0,scrollTop:0},s=u(1);const f=u(0),d=H(o);if((d||!d&&!i)&&(("body"!==N(o)||D(l))&&(c=_(o)),H(o))){const t=G(o);s=U(o),f.x=t.x+o.clientLeft,f.y=t.y+o.clientTop}return{width:n.width*s.x,height:n.height*s.y,x:n.x*s.x-c.scrollLeft*s.x+f.x,y:n.y*s.y-c.scrollTop*s.y+f.y}},getDocumentElement:O,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[..."clippingAncestors"===n?$(e)?[]:et(e,this._c):[].concat(n),o],c=i[0],s=i.reduce(((t,n)=>{const o=Z(e,n,r);return t.top=a(o.top,t.top),t.right=l(o.right,t.right),t.bottom=l(o.bottom,t.bottom),t.left=a(o.left,t.left),t}),Z(e,c,r));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:it,getElementRects:async function(t){const e=this.getOffsetParent||it,n=this.getDimensions,o=await n(t.floating);return{reference:nt(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=J(t);return{width:e,height:n}},getScale:U,isElement:M,isRTL:function(t){return"rtl"===B(t).direction}};function at(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:f=!1}=o,d=K(t),h=r||i?[...d?I(d):[],...I(e)]:[];h.forEach((t=>{r&&t.addEventListener("scroll",n,{passive:!0}),i&&t.addEventListener("resize",n)}));const g=d&&u?function(t,e){let n,o=null;const r=O(t);function i(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function c(u,f){void 0===u&&(u=!1),void 0===f&&(f=1),i();const{left:d,top:h,width:g,height:p}=t.getBoundingClientRect();if(u||e(),!g||!p)return;const m={rootMargin:-s(h)+"px "+-s(r.clientWidth-(d+g))+"px "+-s(r.clientHeight-(h+p))+"px "+-s(d)+"px",threshold:a(0,l(1,f))||1};let y=!0;function v(t){const e=t[0].intersectionRatio;if(e!==f){if(!y)return c();e?c(!1,e):n=setTimeout((()=>{c(!1,1e-7)}),1e3)}y=!1}try{o=new IntersectionObserver(v,{...m,root:r.ownerDocument})}catch(t){o=new IntersectionObserver(v,m)}o.observe(t)}(!0),i}(d,n):null;let p,m=-1,y=null;c&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===d&&y&&(y.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame((()=>{var t;null==(t=y)||t.observe(e)}))),n()})),d&&!f&&y.observe(d),y.observe(e));let v=f?G(t):null;return f&&function e(){const o=G(t);!v||o.x===v.x&&o.y===v.y&&o.width===v.width&&o.height===v.height||n(),v=o,p=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach((t=>{r&&t.removeEventListener("scroll",n),i&&t.removeEventListener("resize",n)})),null==g||g(),null==(t=y)||t.disconnect(),y=null,f&&cancelAnimationFrame(p)}}const ct=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:l,middlewareData:a}=e,c=await async function(t,e){const{placement:n,platform:o,elements:r}=t,i=await(null==o.isRTL?void 0:o.isRTL(r.floating)),l=p(n),a=m(n),c="y"===b(n),s=["left","top"].includes(l)?-1:1,u=i&&c?-1:1,f=g(e,t);let{mainAxis:d,crossAxis:h,alignmentAxis:y}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&"number"==typeof y&&(h="end"===a?-1*y:y),c?{x:h*u,y:d*s}:{x:d*s,y:h*u}}(e,t);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:r+c.x,y:i+c.y,data:{...c,placement:l}}}}},st=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=g(t,e),s={x:n,y:o},u=await T(e,c),f=b(p(r)),d=y(f);let m=s[d],v=s[f];if(i){const t="y"===d?"bottom":"right";m=h(m+u["y"===d?"top":"left"],m,m-u[t])}if(l){const t="y"===f?"bottom":"right";v=h(v+u["y"===f?"top":"left"],v,v-u[t])}const w=a.fn({...e,[d]:m,[f]:v});return{...w,data:{x:w.x-n,y:w.y-o}}}}},ut=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:l,initialPlacement:a,platform:c,elements:s}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:v=!0,...w}=g(t,e);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const k=p(r),A=b(a),E=p(a)===a,N=await(null==c.isRTL?void 0:c.isRTL(s.floating)),R=d||(E||!v?[L(a)]:function(t){const e=L(t);return[S(t),e,S(e)]}(a)),O="none"!==y;!d&&O&&R.push(...function(t,e,n,o){const r=m(t);let i=function(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:l;default:return[]}}(p(t),"start"===n,o);return r&&(i=i.map((t=>t+"-"+r)),e&&(i=i.concat(i.map(S)))),i}(a,v,y,N));const C=[a,...R],M=await T(e,w),H=[];let P=(null==(o=i.flip)?void 0:o.overflows)||[];if(u&&H.push(M[k]),f){const t=x(r,l,N);H.push(M[t[0]],M[t[1]])}if(P=[...P,{placement:r,overflows:H}],!H.every((t=>t<=0))){var D,j;const t=((null==(D=i.flip)?void 0:D.index)||0)+1,e=C[t];if(e)return{data:{index:t,overflows:P},reset:{placement:e}};let n=null==(j=P.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:j.placement;if(!n)switch(h){case"bestFit":{var $;const t=null==($=P.filter((t=>{if(O){const e=b(t.placement);return e===A||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:$[0];t&&(n=t);break}case"initialPlacement":n=a}if(r!==n)return{reset:{placement:n}}}return{}}}},ft=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:a,elements:c,middlewareData:s}=e,{element:u,padding:f=0}=g(t,e)||{};if(null==u)return{};const d=k(f),p={x:n,y:o},y=w(r),b=v(y),x=await a.getDimensions(u),S="y"===y,L=S?"top":"left",A=S?"bottom":"right",E=S?"clientHeight":"clientWidth",T=i.reference[b]+i.reference[y]-p[y]-i.floating[b],N=p[y]-i.reference[y],R=await(null==a.getOffsetParent?void 0:a.getOffsetParent(u));let O=R?R[E]:0;O&&await(null==a.isElement?void 0:a.isElement(R))||(O=c.floating[E]||i.floating[b]);const C=T/2-N/2,M=O/2-x[b]/2-1,H=l(d[L],M),P=l(d[A],M),D=H,j=O-x[b]-P,$=O/2-x[b]/2+C,q=h(D,$,j),F=!s.arrow&&null!=m(r)&&$!==q&&i.reference[b]/2-($<D?H:P)-x[b]/2<0,W=F?$<D?$-D:$-j:0;return{[y]:p[y]+W,data:{[y]:q,centerOffset:$-q-W,...F&&{alignmentOffset:W}},reset:F}}}),dt=(t,e,n)=>{const o=new Map,r={platform:lt,...n},i={...r.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let s=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:f}=E(s,o,c),d=o,h={},g=0;for(let p=0;p<a.length;p++){const{name:n,fn:i}=a[p],{x:m,y:y,data:v,reset:b}=await i({x:u,y:f,initialPlacement:o,placement:d,strategy:r,middlewareData:h,rects:s,platform:l,elements:{reference:t,floating:e}});u=null!=m?m:u,f=null!=y?y:f,h={...h,[n]:{...h[n],...v}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(s=!0===b.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):b.rects),({x:u,y:f}=E(s,d,c))),p=-1)}return{x:u,y:f,placement:d,strategy:r,middlewareData:h}})(t,e,{...r,platform:i})},ht=async({floatingElement:t,referenceElement:e,arrowElement:n,align:r="top"})=>{var i,l,a;if("test"!==o.p){const o=[ct(null!==(i=null==n?void 0:n.offsetHeight)&&void 0!==i?i:10),ut(),st()];n&&o.push(ft({element:n}));const{x:c,y:s,middlewareData:u,placement:f}=await dt(e,t,{placement:r,middleware:o,strategy:"fixed"});Object.assign(t.style,{left:`${c}px`,top:`${s}px`,visibility:"visible"}),n&&((null===(l=u.arrow)||void 0===l?void 0:l.x)?Object.assign(n.style,{left:`${u.arrow.x}px`,top:"bottom"===f?-n.offsetHeight/2+"px":"",bottom:"top"===f?-n.offsetHeight/2+"px":""}):(null===(a=u.arrow)||void 0===a?void 0:a.y)&&Object.assign(n.style,{left:"right"===f?-n.offsetWidth/2+"px":"",right:"left"===f?-n.offsetWidth/2+"px":"",top:`${u.arrow.y}px`}))}}},70728:(t,e,n)=>{n.d(e,{A:()=>ut,B:()=>lt,C:()=>ft,D:()=>tt,K:()=>ht,a:()=>l,b:()=>J,c:()=>m,d:()=>T,e:()=>y,f:()=>h,g:()=>Y,h:()=>v,i:()=>K,j:()=>u,k:()=>U,l:()=>f,m:()=>Z,n:()=>c,o:()=>W,p:()=>nt,q:()=>_,r:()=>D,s:()=>z,t:()=>B,u:()=>p,v:()=>it,w:()=>I,x:()=>ot,y:()=>rt,z:()=>dt});var o=n(44312),r=n(20444);const i=new Set,l=(t,e)=>{(!1===i.has(t)||(null==e?void 0:e.force))&&(i.add(t),r.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==e?void 0:e.force),overwriteStyle:"; background-color: #09f"}))},a=new Set,c=(t,e)=>{(!1===a.has(t)||(null==e?void 0:e.force))&&(a.add(t),r.L.warn([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==e?void 0:e.force),overwriteStyle:"; background-color: #f00"}))},s=new Set,u=(t,e)=>{(!1===s.has(t)||(null==e?void 0:e.force))&&(s.add(t),r.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==e?void 0:e.force),overwriteStyle:"; background-color: #f09"}))},f=(t,e)=>{(!1===s.has(t)||(null==e?void 0:e.force))&&(s.add(t),r.L.warn([t].concat((null==e?void 0:e.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==e?void 0:e.force),overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(t,e=!1,n)=>{(!1===d.has(t)||(null==n?void 0:n.force))&&(d.add(t),t+=!0===e?" \u2705":"",r.L.debug([t].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #309"}))};u("We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!");const g=new Set,p=(t,e)=>{(!1===g.has(t)||(null==e?void 0:e.force))&&(g.add(t),r.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==e?void 0:e.force),overwriteStyle:"; background-color: #060;"}))},m=()=>{l('"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},y=t=>{"string"==typeof t&&""!==t||l("Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},v=(t,e=8)=>{e>7&&p(`[${t}] Within navigation structures, it is recommended to use no more than 7 menu items.\n\nLink:\n- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`)};var b=.2126,w=.7152,x=.0722,S=1/12.92;function L(t){return Math.pow((t+.055)/1.055,2.4)}function k(t){var e=t[0]/255,n=t[1]/255,o=t[2]/255,r=e<=.03928?e*S:L(e),i=n<=.03928?n*S:L(n),l=o<=.03928?o*S:L(o);return r*b+i*w+l*x}function A(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var n=parseInt(t,16);return[n>>16,n>>8&255,255&n,e]}function E(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(k(t),k(e))}function T(t,e){return E(A(t),A(e))}function N(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}var R={exports:{}};function O(t){var e=C(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function C(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),n=e.length;if(3==n||4==n){var o=H(e[0]),r=H(e[1]),i=H(e[2]),l=3==n?255:H(e[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(l))return;return[o,r,i,l]}}(t)||function(t){var e=t.replace(/^#/,""),n=e.length;if(6==n||8==n){var o=H(e.slice(0,2)),r=H(e.slice(2,4)),i=H(e.slice(4,6)),l=6==n?255:H(e.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(l))return;return[o,r,i,l]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=P(e[0],!0),o=P(e[1],!0),r=P(e[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=P(e[0],!0),o=P(e[1],!0),r=P(e[2],!0),i=P(255*e[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=i)return[n,o,r,i]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=P(null!=t.r?t.r:null!=t.red?t.red:0,!0),n=P(null!=t.g?t.g:null!=t.green?t.green:0,!0),o=P(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),r=P(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=n&&-1!=o&&-1!=r)return[e,n,o,r]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=P(t[0],!0),n=P(t[1],!0),o=P(t[2],!0),r=P(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=n&&-1!=o&&-1!=r)return[e,n,o,r]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function M(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function H(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function P(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}R.exports=O,R.exports.arr=O,R.exports.obj=function(t){var e=C(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},R.exports.css=function(t){var e=C(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},R.exports.hex=function(t){3==(e=C(t)).length&&e.push(255);var e,n=255==e[3],o=M(e[0]),r=M(e[1]),i=M(e[2]),l=function(t,e,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(t)&&-1!=r.indexOf(e)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,i,e=M(Math.round(e[3])));return n?l?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:l?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+e.charAt(0):"#"+o+r+i+e},R.exports.num=function(t){var e=C(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};const D=R.exports,j=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},$=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const n=new Set;j(n,e.querySelectorAll(t));const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const r=o[e].shadowRoot;j(n,$(t,"object"==typeof r&&null!==r?r:o[e]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},q=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let n=e.querySelector(t);if(null===n){const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const r=o[e].shadowRoot;if(n=q(t,"object"==typeof r&&null!==r?r:o[e]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},F=/\[object Object\]/,W=(t,e)=>{"string"==typeof t&&F.test(t)||e()},B=(t,e)=>{"string"==typeof t&&""===t||e()},_=(t,e)=>{(0,r.a)()&&(r.L.debug([t,e]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},z=(t,e,n,o={})=>{var r,i;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof o.afterPatch&&(null===(r=t.nextHooks.get(e))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("beforePatch",o.beforePatch)),t.nextState.set(e,n),(t=>{var e,n,o;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,n)=>{var o;const r=e.get("beforePatch");"function"==typeof r&&r(null===(o=t.nextState)||void 0===o?void 0:o.get(n),t.nextState,t,n)})),(null===(n=t.nextState)||void 0===n?void 0:n.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(o=t.nextHooks)||void 0===o||o.forEach(((e,n)=>{const o=e.get("afterPatch");"function"==typeof o&&o(t.state[n],t.state,t,n)}))),delete t.nextHooks})(t)},V=(t,e,n,o)=>{u(`[${t.constructor.name}] The property value: (${n}) for '${e}' is not valid. Allowed values are: ${Array.from(o).join(", ")}`)};function I(t,e,n,o,r,i={}){n(r)?z(t,e,r,i.hooks):void 0===r&&!0!==i.required&&n(i.defaultValue)?z(t,e,i.defaultValue,i.hooks):(i.required||o.add(null),V(t,e,r,o))}const J=(t,e,n,o)=>{I(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),n,o)},K=(t,e,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;I(t,e,(t=>"string"==typeof t&&t.length>=r&&(void 0===(null==o?void 0:o.maxLength)||t.length<=o.maxLength)),new Set(["String"]),n,o)},U=(t,e,n,o)=>{I(t,e,(t=>"number"==typeof t&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&t>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&t<=o.max)),new Set(["Number"]),n,o)},Y=(t,e,n,o,i=(t=>t==t),l={})=>{B(o,(()=>{W(o,(()=>{void 0===o&&(o=[]);try{try{o=nt(o)}catch(t){}if(Array.isArray(o)){const a=o.find((t=>!n(t)));void 0===a&&i(o)?z(t,e,o,l.hooks):W(a,(()=>{throw r.L.debug(a),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}else W(o,(()=>{throw r.L.debug(o),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}catch(t){r.L.debug(t)}}))}))},X=/^(true|false)$/,G=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,Z=t=>{const e=typeof t,n=`${t}`;if("string"==typeof t)if(X.test(t))t="true"===t;else if(G.test(t))t=parseInt(t);else if(Q.test(t))t=parseFloat(t);else if(et.test(t))try{t=nt(t)}catch(t){}return e!==typeof t&&u(`You have used a stringified property value (${n} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},tt=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(x){throw r.L.warn(["stringifyJson",t]),r.L.error("\u2191 The JSON could not be converted to a string. A stringifiable JSON is expected."),new Error}},et=/^[{[]/,nt=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(x){if(et.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(x){r.L.warn(["parseJson",t]),r.L.error("\u2191 The JSON string could not be parsed. Make sure that single quotes in the text are escaped (&#8216;).")}}throw new Error},ot=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,rt=t=>"string"==typeof t?t:ot(t),it=(t,e)=>q(t,e||(0,r.g)()),lt=(t,e)=>$(t,e||(0,r.g)());let at=null;const ct=()=>(at=at||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},at),st=/(\d+, ){3}0\)/,ut=(t,e=ct())=>{const n=getComputedStyle(t),o=st.test(n.backgroundColor)?e.backgroundColor:D.hex(n.backgroundColor),i=st.test(n.color)?e.color:D.hex(n.color),l=T(o,i),a={backgroundColor:o,color:i,domNode:t,level:N(l),score:l};return l<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:a.backgroundColor,color:a.color,level:a.level,score:a.score},a.domNode]),a},ft=(t,e=ct())=>{e.domNode instanceof HTMLElement&&(e=ut(e.domNode,e));const n=e.domNode.querySelector(t);if(null===n){const n=e.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(e.domNode=n[o],null===(e=ft(t,e)).domNode);o++);return e}return ut(n,e)};class dt{static queryHtmlElementColors(t,e,n=!1,o=!0){let i=null;if(!0===n||!1===dt.executionLock)if(!1===n&&(dt.cache.clear(),dt.cache.set(e.domNode,e),dt.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)i=e;else{const n=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)n.add(t[e])}const o=e.domNode;if("function"==typeof o.assignedNodes){const t=o.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&n.add(t[e])}const r=e.domNode.children;for(let t=0;t<r.length;t++)n.add(r[t]);const l=Array.from(n);for(let a=0;a<l.length;a++){let n=dt.cache.get(l[a]);void 0===n&&(n=ut(l[a],e)),dt.cache.set(l[a],n);const o=dt.queryHtmlElementColors(t,n,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${dt.cache.size} DOM elements are analysed).`),dt.executionLock=!1,dt.cache.clear()),i}}dt.executionLock=!1,dt.cache=new Map;class ht{}ht.getCssStyle=o.p,ht.patchTheme=o.x,ht.patchThemeTag=o.z,ht.querySelector=it,ht.querySelectorAll=lt,ht.stringifyJson=tt},28968:(t,e,n)=>{n.d(e,{S:()=>l,a:()=>i,b:()=>o,c:()=>a,h:()=>s,i:()=>r,p:()=>c,s:()=>u});const o=t=>"object"==typeof t&&null!==t,r=(t,e=0)=>"string"==typeof t&&t.length>=e,i=t=>{if("object"!=typeof t||null===t)return r(t,1);for(const e in t)if(!1===r(e,1))return!1;return!0},l=new Event("StateChange"),a=(t,e)=>{o(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))};let c="development";try{c="production"}catch(f){c="production"}const s=(t,e,n)=>{if(t&&e&&"string"==typeof n){const o=t.querySelector(`[slot="${n}"]`);o&&e.appendChild(o)}},u=t=>""===t}}]);