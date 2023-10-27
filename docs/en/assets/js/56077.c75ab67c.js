/*! For license information please see 56077.c75ab67c.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[56077],{45771:(t,e,n)=>{n.d(e,{v:()=>i});var o=n(92061);const i=(t,e)=>{(0,o.v)(t,"_align",e)}},92061:(t,e,n)=>{n.d(e,{v:()=>l});var o=n(32890);const i=new Set(['"left", "right"']),r=new Set(['"bottom", "top"']),s=new Set([...i,...r]),l=(t,e,n)=>{(0,o.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),s,n,{defaultValue:"top"})}},12221:(t,e,n)=>{n.d(e,{a:()=>T,b:()=>rt,c:()=>st,f:()=>L,o:()=>R,s:()=>P});const o=Math.min,i=Math.max,r=Math.round,s=Math.floor,l=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},c={start:"end",end:"start"};function f(t,e,n){return i(t,o(e,n))}function h(t,e){return"function"==typeof t?t(e):t}function u(t){return t.split("-")[0]}function d(t){return t.split("-")[1]}function p(t){return"x"===t?"y":"x"}function m(t){return"y"===t?"height":"width"}function g(t){return["top","bottom"].includes(u(t))?"y":"x"}function y(t){return p(g(t))}function v(t){return t.replace(/start|end/g,(t=>c[t]))}function w(t){return t.replace(/left|right|bottom|top/g,(t=>a[t]))}function x(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function b(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function E(t,e,n){let{reference:o,floating:i}=t;const r=g(e),s=y(e),l=m(s),a=u(e),c="y"===r,f=o.x+o.width/2-i.width/2,h=o.y+o.height/2-i.height/2,p=o[l]/2-i[l]/2;let v;switch(a){case"top":v={x:f,y:o.y-i.height};break;case"bottom":v={x:f,y:o.y+o.height};break;case"right":v={x:o.x+o.width,y:h};break;case"left":v={x:o.x-i.width,y:h};break;default:v={x:o.x,y:o.y}}switch(d(e)){case"start":v[s]-=p*(n&&c?-1:1);break;case"end":v[s]+=p*(n&&c?-1:1)}return v}async function k(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=!1,padding:p=0}=h(e,t),m=x(p),g=l[d?"floating"===u?"reference":"floating":u],y=b(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:f,strategy:a})),v="floating"===u?{...s.floating,x:o,y:i}:s.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),E=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},k=b(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:a}):v);return{top:(y.top-k.top+m.top)/E.y,bottom:(k.bottom-y.bottom+m.bottom)/E.y,left:(y.left-k.left+m.left)/E.x,right:(k.right-y.right+m.right)/E.x}}const T=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:l,elements:a,middlewareData:c}=e,{element:u,padding:p=0}=h(t,e)||{};if(null==u)return{};const g=x(p),v={x:n,y:i},w=y(r),b=m(w),E=await l.getDimensions(u),k="y"===w,T=k?"top":"left",L=k?"bottom":"right",R=k?"clientHeight":"clientWidth",P=s.reference[b]+s.reference[w]-v[w]-s.floating[b],A=v[w]-s.reference[w],S=await(null==l.getOffsetParent?void 0:l.getOffsetParent(u));let O=S?S[R]:0;O&&await(null==l.isElement?void 0:l.isElement(S))||(O=a.floating[R]||s.floating[b]);const z=P/2-A/2,C=O/2-E[b]/2-1,_=o(g[T],C),B=o(g[L],C),D=_,H=O-E[b]-B,F=O/2-E[b]/2+z,W=f(D,F,H),V=!c.arrow&&null!=d(r)&&F!=W&&s.reference[b]/2-(F<D?_:B)-E[b]/2<0,M=V?F<D?D-F:H-F:0;return{[w]:v[w]-M,data:{[w]:W,centerOffset:F-W+M},reset:V}}}),L=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:s,platform:l,elements:a}=e,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:b=!0,...E}=h(t,e),T=u(o),L=u(s)===s,R=await(null==l.isRTL?void 0:l.isRTL(a.floating)),P=p||(L||!b?[w(s)]:function(t){const e=w(t);return[v(t),e,v(e)]}(s));p||"none"===x||P.push(...function(t,e,n,o){const i=d(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}(u(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(v)))),r}(s,b,x,R));const A=[s,...P],S=await k(e,E),O=[];let z=(null==(n=i.flip)?void 0:n.overflows)||[];if(c&&O.push(S[T]),f){const t=function(t,e,n){void 0===n&&(n=!1);const o=d(t),i=y(t),r=m(i);let s="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=w(s)),[s,w(s)]}(o,r,R);O.push(S[t[0]],S[t[1]])}if(z=[...z,{placement:o,overflows:O}],!O.every((t=>t<=0))){var C,_;const t=((null==(C=i.flip)?void 0:C.index)||0)+1,e=A[t];if(e)return{data:{index:t,overflows:z},reset:{placement:e}};let n=null==(_=z.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:_.placement;if(!n)switch(g){case"bestFit":{var B;const t=null==(B=z.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:B[0];t&&(n=t);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}};const R=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),s=u(n),l=d(n),a="y"===g(n),c=["left","top"].includes(s)?-1:1,f=r&&a?-1:1,p=h(e,t);let{mainAxis:m,crossAxis:y,alignmentAxis:v}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof v&&(y="end"===l?-1*v:v),a?{x:y*f,y:m*c}:{x:m*c,y:y*f}}(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},P=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=h(t,e),c={x:n,y:o},d=await k(e,a),m=g(u(i)),y=p(m);let v=c[y],w=c[m];if(r){const t="y"===y?"bottom":"right";v=f(v+d["y"===y?"top":"left"],v,v-d[t])}if(s){const t="y"===m?"bottom":"right";w=f(w+d["y"===m?"top":"left"],w,w-d[t])}const x=l.fn({...e,[y]:v,[m]:w});return{...x,data:{x:x.x-n,y:x.y-o}}}}};function A(t){return z(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function O(t){var e;return null==(e=(z(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function z(t){return t instanceof Node||t instanceof S(t).Node}function C(t){return t instanceof Element||t instanceof S(t).Element}function _(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function B(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof S(t).ShadowRoot)}function D(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function H(t){return["table","td","th"].includes(A(t))}function F(t){const e=W(),n=M(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function W(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(A(t))}function M(t){return S(t).getComputedStyle(t)}function $(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function N(t){if("html"===A(t))return t;const e=t.assignedSlot||t.parentNode||B(t)&&t.host||O(t);return B(e)?e.host:e}function j(t){const e=N(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&D(e)?e:j(e)}function I(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=j(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),s=S(i);return r?e.concat(s,s.visualViewport||[],D(i)?i:[],s.frameElement&&n?I(s.frameElement):[]):e.concat(i,I(i))}function q(t){const e=M(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=_(t),s=i?t.offsetWidth:n,l=i?t.offsetHeight:o,a=r(n)!==s||r(o)!==l;return a&&(n=s,o=l),{width:n,height:o,$:a}}function K(t){return C(t)?t:t.contextElement}function X(t){const e=K(t);if(!_(e))return l(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=q(e);let a=(s?r(n.width):n.width)/o,c=(s?r(n.height):n.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}const Y=l(0);function G(t){const e=S(t);return W()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Y}function J(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=K(t);let s=l(1);e&&(o?C(o)&&(s=X(o)):s=X(t));const a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==S(t))&&e}(r,n,o)?G(r):l(0);let c=(i.left+a.x)/s.x,f=(i.top+a.y)/s.y,h=i.width/s.x,u=i.height/s.y;if(r){const t=S(r),e=o&&C(o)?S(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=X(n),e=n.getBoundingClientRect(),o=M(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;c*=t.x,f*=t.y,h*=t.x,u*=t.y,c+=i,f+=r,n=S(n).frameElement}}return b({width:h,height:u,x:c,y:f})}function Q(t){return J(O(t)).left+$(t).scrollLeft}function U(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=S(t),o=O(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const t=W();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}(t,n);else if("document"===e)o=function(t){const e=O(t),n=$(t),o=t.ownerDocument.body,r=i(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=i(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+Q(t);const a=-n.scrollTop;return"rtl"===M(o).direction&&(l+=i(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:l,y:a}}(O(t));else if(C(e))o=function(t,e){const n=J(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=_(t)?X(t):l(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=G(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return b(o)}function Z(t,e){const n=N(t);return!(n===e||!C(n)||V(n))&&("fixed"===M(n).position||Z(n,e))}function tt(t,e){const n=e.get(t);if(n)return n;let o=I(t,[],!1).filter((t=>C(t)&&"body"!==A(t))),i=null;const r="fixed"===M(t).position;let s=r?N(t):t;for(;C(s)&&!V(s);){const e=M(s),n=F(s);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||D(s)&&!n&&Z(t,s))?o=o.filter((t=>t!==s)):i=e,s=N(s)}return e.set(t,o),o}function et(t,e,n){const o=_(e),i=O(e),r="fixed"===n,s=J(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const c=l(0);if(o||!o&&!r)if(("body"!==A(e)||D(i))&&(a=$(e)),o){const t=J(e,!0,r,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=Q(i));return{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function nt(t,e){return _(t)&&"fixed"!==M(t).position?e?e(t):t.offsetParent:null}function ot(t,e){const n=S(t);if(!_(t))return n;let o=nt(t,e);for(;o&&H(o)&&"static"===M(o).position;)o=nt(o,e);return o&&("html"===A(o)||"body"===A(o)&&"static"===M(o).position&&!F(o))?n:o||function(t){let e=N(t);for(;_(e)&&!V(e);){if(F(e))return e;e=N(e)}return null}(t)||n}const it={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=_(n),r=O(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},a=l(1);const c=l(0);if((i||!i&&"fixed"!==o)&&(("body"!==A(n)||D(r))&&(s=$(n)),_(n))){const t=J(n);a=X(n),c.x=t.x+n.clientLeft,c.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-s.scrollLeft*a.x+c.x,y:e.y*a.y-s.scrollTop*a.y+c.y}},getDocumentElement:O,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:s}=t;const l=[..."clippingAncestors"===n?tt(e,this._c):[].concat(n),r],a=l[0],c=l.reduce(((t,n)=>{const r=U(e,n,s);return t.top=i(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),U(e,a,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:ot,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||ot,r=this.getDimensions;return{reference:et(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return q(t)},getScale:X,isElement:C,isRTL:function(t){return"rtl"===M(t).direction}};function rt(t,e,n,r){void 0===r&&(r={});const{ancestorScroll:l=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:h=!1}=r,u=K(t),d=l||a?[...u?I(u):[],...I(e)]:[];d.forEach((t=>{l&&t.addEventListener("scroll",n,{passive:!0}),a&&t.addEventListener("resize",n)}));const p=u&&f?function(t,e){let n,r=null;const l=O(t);function a(){clearTimeout(n),r&&r.disconnect(),r=null}return function c(f,h){void 0===f&&(f=!1),void 0===h&&(h=1),a();const{left:u,top:d,width:p,height:m}=t.getBoundingClientRect();if(f||e(),!p||!m)return;const g={rootMargin:-s(d)+"px "+-s(l.clientWidth-(u+p))+"px "+-s(l.clientHeight-(d+m))+"px "+-s(u)+"px",threshold:i(0,o(1,h))||1};let y=!0;function v(t){const e=t[0].intersectionRatio;if(e!==h){if(!y)return c();e?c(!1,e):n=setTimeout((()=>{c(!1,1e-7)}),100)}y=!1}try{r=new IntersectionObserver(v,{...g,root:l.ownerDocument})}catch(t){r=new IntersectionObserver(v,g)}r.observe(t)}(!0),a}(u,n):null;let m,g=-1,y=null;c&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===u&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{y&&y.observe(e)}))),n()})),u&&!h&&y.observe(u),y.observe(e));let v=h?J(t):null;return h&&function e(){const o=J(t);!v||o.x===v.x&&o.y===v.y&&o.width===v.width&&o.height===v.height||n(),v=o,m=requestAnimationFrame(e)}(),n(),()=>{d.forEach((t=>{l&&t.removeEventListener("scroll",n),a&&t.removeEventListener("resize",n)})),p&&p(),y&&y.disconnect(),y=null,h&&cancelAnimationFrame(m)}}const st=(t,e,n)=>{const o=new Map,i={platform:it,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:h}=E(c,o,a),u=o,d={},p=0;for(let m=0;m<l.length;m++){const{name:n,fn:r}=l[m],{x:g,y:y,data:v,reset:w}=await r({x:f,y:h,initialPlacement:o,placement:u,strategy:i,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});f=null!=g?g:f,h=null!=y?y:h,d={...d,[n]:{...d[n],...v}},w&&p<=50&&(p++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(c=!0===w.rects?await s.getElementRects({reference:t,floating:e,strategy:i}):w.rects),({x:f,y:h}=E(c,u,a))),m=-1)}return{x:f,y:h,placement:u,strategy:i,middlewareData:d}})(t,e,{...i,platform:r})}},56077:(t,e,n)=>{n.r(e),n.d(e,{kol_popover:()=>c});var o=n(62822),i=n(12221),r=n(45771),s=n(27083),l=n(42865),a=n(30375);const c=class{constructor(t){(0,o.r)(this,t),this.alignPopover=t=>{setTimeout((()=>{var e;if("test"!==a.p&&this.triggerElement&&this.popoverElement){const n=this.triggerElement,o=this.popoverElement,r=this.arrowElement,s=[(0,i.o)(null!==(e=null==r?void 0:r.offsetHeight)&&void 0!==e?e:10),(0,i.f)(),(0,i.s)()];r&&s.push((0,i.a)({element:r})),(0,i.c)(n,o,{placement:this.state._align,middleware:s}).then((({x:e,y:n,middlewareData:o,placement:i})=>{this.setPosition(e,n,o,i,t)}))}}))},this.showPopover=()=>{this.addListenersToBody(),this.alignPopover((()=>{this.state=Object.assign(Object.assign({},this.state),{_visible:!0})}))},this.hidePopoverByEscape=t=>{"Escape"===t.key&&this.hidePopover()},this.hidePopoverByClickOutside=t=>{this.host&&!this.host.contains(t.target)&&this.hidePopover()},this.catchHostAndTriggerElement=t=>{t&&(this.host=t,this.triggerElement=t.previousElementSibling)},this.catchPopoverElement=t=>{this.popoverElement=t},this.catchArrowElement=t=>{this.arrowElement=t},this._align="top",this._show=!1,this.state={_align:"top",_show:!1,_visible:!1}}setPosition(t,e,n,o,i){if(this.popoverElement){const r={left:this.popoverElement.style.left,top:this.popoverElement.style.top};if(Object.assign(this.popoverElement.style,{left:`${t}px`,top:`${e}px`}),this.arrowElement&&n.arrow)switch(o){case"top":this.arrowElement.style.inset=`100% auto auto ${n.arrow.x||0}px`,this.arrowElement.style.translate="0 -50%";break;case"right":this.arrowElement.style.inset=`${n.arrow.y||0}px 100% auto auto`,this.arrowElement.style.translate="50% 0";break;case"bottom":this.arrowElement.style.inset=`auto auto 100% ${n.arrow.x||0}px`,this.arrowElement.style.translate="0 50%";break;case"left":this.arrowElement.style.inset=`${n.arrow.y||0}px auto auto 100%`,this.arrowElement.style.translate="-50% 0"}r.left!==this.popoverElement.style.left||r.top!==this.popoverElement.style.top?this.alignPopover(i):"function"==typeof i&&i()}}hidePopover(){var t;this.state=Object.assign(Object.assign({},this.state),{_visible:!1}),this._show=!1,null===(t=this.triggerElement)||void 0===t||t.focus(),this.removeListenersToBody()}addListenersToBody(){var t;const e=(0,l.b)().body;e.addEventListener("keyup",this.hidePopoverByEscape),e.addEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.addEventListener("scroll",this.showPopover,{passive:!0})}removeListenersToBody(){var t;const e=(0,l.b)().body;e.removeEventListener("keyup",this.hidePopoverByEscape),e.removeEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.removeEventListener("scroll",this.showPopover)}render(){return(0,o.h)(o.H,{ref:this.catchHostAndTriggerElement},(0,o.h)("div",{class:{popover:!0,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},(0,o.h)("div",{class:`arrow ${this.state._align}`,ref:this.catchArrowElement}),(0,o.h)("slot",null)))}validateAlign(t){(0,r.v)(this,t)}validateShow(t){(0,s.v)(this,t),t&&this.showPopover()}componentWillLoad(){this.validateAlign(this._align),this.validateShow(this._show)}static get watchers(){return{_align:["validateAlign"],_show:["validateShow"]}}};c.style="@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tkol-popover {\n\t\theight: 0;\n\t\tposition: absolute;\n\t}\n\n\tkol-popover .popover {\n\t\tbackground-color: #fff;\n\t\tmin-height: max-content;\n\t\tmin-width: max-content;\n\t\topacity: 0;\n\t\tposition: absolute;\n\t}\n\n\tkol-popover .hidden {\n\t\tdisplay: none;\n\t}\n\n\tkol-popover .show {\n\t\tanimation: 0.3s ease-in forwards fadeInOpacity;\n\t}\n\n\tkol-popover .disappear {\n\t\tanimation: 0.3s ease-in backwards fadeInOpacity;\n\t}\n\n\tkol-popover .arrow {\n\t\tbackground-color: inherit;\n\t\theight: var(--font-size);\n\t\tposition: absolute;\n\t\trotate: 0.125turn;\n\t\twidth: var(--font-size);\n\t\tz-index: -1;\n\t}\n\n\t@keyframes fadeInOpacity {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n"},27083:(t,e,n)=>{n.d(e,{v:()=>i});var o=n(32890);const i=(t,e,n)=>{(0,o.a)(t,"_show",e,n)}}}]);