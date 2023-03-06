/*! For license information please see 3678.f30a655a.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3678],{6713:(t,e,o)=>{o.d(e,{w:()=>i});var n=o(72613);const i=(t,e,o)=>{(0,n.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),o,{defaultValue:"top"})}},53678:(t,e,o)=>{o.r(e),o.d(e,{kol_tooltip:()=>ct});var n=o(83547),i=o(6713),r=o(27612),l=o(72613),s=o(17033);function a(t){return t.split("-")[1]}function c(t){return"y"===t?"height":"width"}function u(t){return t.split("-")[0]}function f(t){return["top","bottom"].includes(u(t))?"x":"y"}function d(t,e,o){let{reference:n,floating:i}=t;const r=n.x+n.width/2-i.width/2,l=n.y+n.height/2-i.height/2,s=f(e),d=c(s),h=n[d]/2-i[d]/2,p="x"===s;let m;switch(u(e)){case"top":m={x:r,y:n.y-i.height};break;case"bottom":m={x:r,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:l};break;case"left":m={x:n.x-i.width,y:l};break;default:m={x:n.x,y:n.y}}switch(a(e)){case"start":m[s]-=h*(o&&p?-1:1);break;case"end":m[s]+=h*(o&&p?-1:1)}return m}function h(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function p(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function m(t,e){var o;void 0===e&&(e={});const{x:n,y:i,platform:r,rects:l,elements:s,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:m=0}=e,g=h(m),y=s[d?"floating"===f?"reference":"floating":f],b=p(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(y)))||o?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:a})),v="floating"===f?{...l.floating,x:n,y:i}:l.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),x=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},k=p(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:a}):v);return{top:(b.top-k.top+g.top)/x.y,bottom:(k.bottom-b.bottom+g.bottom)/x.y,left:(b.left-k.left+g.left)/x.x,right:(k.right-b.right+g.right)/x.x}}const g=Math.min,y=Math.max;function b(t,e,o){return y(t,g(e,o))}const v={left:"right",right:"left",bottom:"top",top:"bottom"};function w(t){return t.replace(/left|right|bottom|top/g,(t=>v[t]))}function x(t,e,o){void 0===o&&(o=!1);const n=a(t),i=f(t),r=c(i);let l="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=w(l)),{main:l,cross:w(l)}}const k={start:"end",end:"start"};function E(t){return t.replace(/start|end/g,(t=>k[t]))}function L(t){const e=w(t);return[E(t),e,E(e)]}function T(t,e,o,n){const i=a(t);let r=function(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:l;default:return[]}}(u(t),"start"===o,n);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(E)))),r}async function S(t,e){const{placement:o,platform:n,elements:i}=t,r=await(null==n.isRTL?void 0:n.isRTL(i.floating)),l=u(o),s=a(o),c="x"===f(o),d=["left","top"].includes(l)?-1:1,h=r&&c?-1:1,p="function"==typeof e?e(t):e;let{mainAxis:m,crossAxis:g,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return s&&"number"==typeof y&&(g="end"===s?-1*y:y),c?{x:g*h,y:m*d}:{x:m*d,y:g*h}}const A=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:s={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...a}=t,c={x:o,y:n},d=await m(e,a),h=f(u(i)),p=function(t){return"x"===t?"y":"x"}(h);let g=c[h],y=c[p];if(r){const t="y"===h?"bottom":"right";g=b(g+d["y"===h?"top":"left"],g,g-d[t])}if(l){const t="y"===p?"bottom":"right";y=b(y+d["y"===p?"top":"left"],y,y-d[t])}const v=s.fn({...e,[h]:g,[p]:y});return{...v,data:{x:v.x-o,y:v.y-n}}}}};function O(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function C(t){return O(t).getComputedStyle(t)}const N=Math.min,R=Math.max,H=Math.round;function P(t){const e=C(t);let o=parseFloat(e.width),n=parseFloat(e.height);const i=t.offsetWidth,r=t.offsetHeight,l=H(o)!==i||H(n)!==r;return l&&(o=i,n=r),{width:o,height:n,fallback:l}}function M(t){return B(t)?(t.nodeName||"").toLowerCase():""}let D;function F(){if(D)return D;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(D=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),D):navigator.userAgent}function _(t){return t instanceof O(t).HTMLElement}function j(t){return t instanceof O(t).Element}function B(t){return t instanceof O(t).Node}function W(t){return"undefined"!=typeof ShadowRoot&&(t instanceof O(t).ShadowRoot||t instanceof ShadowRoot)}function $(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function q(t){return["table","td","th"].includes(M(t))}function z(t){const e=/firefox/i.test(F()),o=C(t),n=o.backdropFilter||o.WebkitBackdropFilter;return"none"!==o.transform||"none"!==o.perspective||!!n&&"none"!==n||e&&"filter"===o.willChange||e&&!!o.filter&&"none"!==o.filter||["transform","perspective"].some((t=>o.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=o.contain;return null!=e&&e.includes(t)}))}function V(){return/^((?!chrome|android).)*safari/i.test(F())}function I(t){return["html","body","#document"].includes(M(t))}function J(t){return j(t)?t:t.contextElement}const K={x:1,y:1};function Y(t){const e=J(t);if(!_(e))return K;const o=e.getBoundingClientRect(),{width:n,height:i,fallback:r}=P(e);let l=(r?H(o.width):o.width)/n,s=(r?H(o.height):o.height)/i;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}function U(t,e,o,n){var i,r;void 0===e&&(e=!1),void 0===o&&(o=!1);const l=t.getBoundingClientRect(),s=J(t);let a=K;e&&(n?j(n)&&(a=Y(n)):a=Y(t));const c=s?O(s):window,u=V()&&o;let f=(l.left+(u&&(null==(i=c.visualViewport)?void 0:i.offsetLeft)||0))/a.x,d=(l.top+(u&&(null==(r=c.visualViewport)?void 0:r.offsetTop)||0))/a.y,h=l.width/a.x,m=l.height/a.y;if(s){const t=O(s),e=n&&j(n)?O(n):n;let o=t.frameElement;for(;o&&n&&e!==t;){const t=Y(o),e=o.getBoundingClientRect(),n=getComputedStyle(o);e.x+=(o.clientLeft+parseFloat(n.paddingLeft))*t.x,e.y+=(o.clientTop+parseFloat(n.paddingTop))*t.y,f*=t.x,d*=t.y,h*=t.x,m*=t.y,f+=e.x,d+=e.y,o=O(o).frameElement}}return p({width:h,height:m,x:f,y:d})}function X(t){return((B(t)?t.ownerDocument:t.document)||window.document).documentElement}function G(t){return j(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Q(t){return U(X(t)).left+G(t).scrollLeft}function Z(t){if("html"===M(t))return t;const e=t.assignedSlot||t.parentNode||W(t)&&t.host||X(t);return W(e)?e.host:e}function tt(t){const e=Z(t);return I(e)?e.ownerDocument.body:_(e)&&$(e)?e:tt(e)}function et(t,e){var o;void 0===e&&(e=[]);const n=tt(t),i=n===(null==(o=t.ownerDocument)?void 0:o.body),r=O(n);return i?e.concat(r,r.visualViewport||[],$(n)?n:[]):e.concat(n,et(n))}function ot(t,e,o){let n;if("viewport"===e)n=function(t,e){const o=O(t),n=X(t),i=o.visualViewport;let r=n.clientWidth,l=n.clientHeight,s=0,a=0;if(i){r=i.width,l=i.height;const t=V();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,a=i.offsetTop)}return{width:r,height:l,x:s,y:a}}(t,o);else if("document"===e)n=function(t){const e=X(t),o=G(t),n=t.ownerDocument.body,i=R(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=R(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let l=-o.scrollLeft+Q(t);const s=-o.scrollTop;return"rtl"===C(n).direction&&(l+=R(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:l,y:s}}(X(t));else if(j(e))n=function(t,e){const o=U(t,!0,"fixed"===e),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=_(t)?Y(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:n*r.y}}(e,o);else{const o={...e};if(V()){var i,r;const e=O(t);o.x-=(null==(i=e.visualViewport)?void 0:i.offsetLeft)||0,o.y-=(null==(r=e.visualViewport)?void 0:r.offsetTop)||0}n=o}return p(n)}function nt(t,e){const o=e.get(t);if(o)return o;let n=et(t).filter((t=>j(t)&&"body"!==M(t))),i=null;const r="fixed"===C(t).position;let l=r?Z(t):t;for(;j(l)&&!I(l);){const t=C(l),e=z(l);"fixed"===t.position?i=null:(r?e||i:e||"static"!==t.position||!i||!["absolute","fixed"].includes(i.position))?i=t:n=n.filter((t=>t!==l)),l=Z(l)}return e.set(t,n),n}function it(t,e){return _(t)&&"fixed"!==C(t).position?e?e(t):t.offsetParent:null}function rt(t,e){const o=O(t);if(!_(t))return o;let n=it(t,e);for(;n&&q(n)&&"static"===C(n).position;)n=it(n,e);return n&&("html"===M(n)||"body"===M(n)&&"static"===C(n).position&&!z(n))?o:n||function(t){let e=Z(t);for(;_(e)&&!I(e);){if(z(e))return e;e=Z(e)}return null}(t)||o}function lt(t,e,o){const n=_(e),i=X(e),r=U(t,!0,"fixed"===o,e);let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(n||!n&&"fixed"!==o)if(("body"!==M(e)||$(i))&&(l=G(e)),_(e)){const t=U(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=Q(i));return{x:r.left+l.scrollLeft-s.x,y:r.top+l.scrollTop-s.y,width:r.width,height:r.height}}const st={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[..."clippingAncestors"===o?nt(e,this._c):[].concat(o),n],l=r[0],s=r.reduce(((t,o)=>{const n=ot(e,o,i);return t.top=R(n.top,t.top),t.right=N(n.right,t.right),t.bottom=N(n.bottom,t.bottom),t.left=R(n.left,t.left),t}),ot(e,l,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:n}=t;const i=_(o),r=X(o);if(o===r)return e;let l={scrollLeft:0,scrollTop:0},s={x:1,y:1};const a={x:0,y:0};if((i||!i&&"fixed"!==n)&&(("body"!==M(o)||$(r))&&(l=G(o)),_(o))){const t=U(o);s=Y(o),a.x=t.x+o.clientLeft,a.y=t.y+o.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-l.scrollLeft*s.x+a.x,y:e.y*s.y-l.scrollTop*s.y+a.y}},isElement:j,getDimensions:function(t){return _(t)?P(t):t.getBoundingClientRect()},getOffsetParent:rt,getDocumentElement:X,getScale:Y,async getElementRects(t){let{reference:e,floating:o,strategy:n}=t;const i=this.getOffsetParent||rt,r=this.getDimensions;return{reference:lt(e,await i(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===C(t).direction},at=(t,e,o)=>{const n=new Map,i={platform:st,...o},r={...i.platform,_c:n};return(async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:l}=o,s=r.filter(Boolean),a=await(null==l.isRTL?void 0:l.isRTL(e));let c=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:f}=d(c,n,a),h=n,p={},m=0;for(let g=0;g<s.length;g++){const{name:o,fn:r}=s[g],{x:y,y:b,data:v,reset:w}=await r({x:u,y:f,initialPlacement:n,placement:h,strategy:i,middlewareData:p,rects:c,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,f=null!=b?b:f,p={...p,[o]:{...p[o],...v}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(h=w.placement),w.rects&&(c=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),({x:u,y:f}=d(c,h,a))),g=-1)}return{x:u,y:f,placement:h,strategy:i,middlewareData:p}})(t,e,{...i,platform:r})},ct=class{constructor(t){(0,n.r)(this,t),this.alignTooltip=t=>{var e,o,n;if("test"!==s.p&&this.previousSibling){const i=this.previousSibling;if(this.tooltipElement){const r=this.tooltipElement,l=this.arrowElement,s=[(n=null!==(e=null==l?void 0:l.offsetHeight)&&void 0!==e?e:10,void 0===n&&(n=0),{name:"offset",options:n,async fn(t){const{x:e,y:o}=t,i=await S(t,n);return{x:e+i.x,y:o+i.y,data:i}}}),(void 0===o&&(o={}),{name:"flip",options:o,async fn(t){var e;const{placement:n,middlewareData:i,rects:r,initialPlacement:l,platform:s,elements:a}=t,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=o,b=u(n),v=u(l)===l,k=await(null==s.isRTL?void 0:s.isRTL(a.floating)),E=d||(v||!g?[w(l)]:L(l));d||"none"===p||E.push(...T(l,g,p,k));const S=[l,...E],A=await m(t,y),O=[];let C=(null==(e=i.flip)?void 0:e.overflows)||[];if(c&&O.push(A[b]),f){const{main:t,cross:e}=x(n,r,k);O.push(A[t],A[e])}if(C=[...C,{placement:n,overflows:O}],!O.every((t=>t<=0))){var N,R;const t=((null==(N=i.flip)?void 0:N.index)||0)+1,e=S[t];if(e)return{data:{index:t,overflows:C},reset:{placement:e}};let o=null==(R=C.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:R.placement;if(!o)switch(h){case"bestFit":{var H;const t=null==(H=C.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:H[0];t&&(o=t);break}case"initialPlacement":o=l}if(n!==o)return{reset:{placement:o}}}return{}}}),A()];l&&s.push((t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:n=0}=t||{},{x:i,y:r,placement:l,rects:s,platform:u,elements:d}=e;if(null==o)return{};const p=h(n),m={x:i,y:r},g=f(l),y=c(g),v=await u.getDimensions(o),w="y"===g,x=w?"top":"left",k=w?"bottom":"right",E=w?"clientHeight":"clientWidth",L=s.reference[y]+s.reference[g]-m[g]-s.floating[y],T=m[g]-s.reference[g],S=await(null==u.getOffsetParent?void 0:u.getOffsetParent(o));let A=S?S[E]:0;A&&await(null==u.isElement?void 0:u.isElement(S))||(A=d.floating[E]||s.floating[y]);const O=L/2-T/2,C=p[x],N=A-v[y]-p[k],R=A/2-v[y]/2+O,H=b(C,R,N),P=null!=a(l)&&R!=H&&s.reference[y]/2-(R<C?p[x]:p[k])-v[y]/2<0;return{[g]:m[g]-(P?R<C?C-R:N-R:0),data:{[g]:H,centerOffset:R-H}}}}))({element:l})),at(i,r,{placement:this.state._align,middleware:s}).then((({x:e,y:o,middlewareData:n,placement:i})=>{var s,a;const c=r.style.left,u=r.style.top;Object.assign(r.style,{left:`${e}px`,top:`${o}px`}),l&&((null===(s=n.arrow)||void 0===s?void 0:s.x)?Object.assign(l.style,{left:`${n.arrow.x}px`,top:"bottom"===i?-l.offsetHeight/2+"px":"",bottom:"top"===i?-l.offsetHeight/2+"px":""}):(null===(a=n.arrow)||void 0===a?void 0:a.y)&&Object.assign(l.style,{left:"right"===i?-l.offsetWidth/2+"px":"",right:"left"===i?-l.offsetWidth/2+"px":"",top:`${n.arrow.y}px`})),c!==r.style.left||u!==r.style.top?this.alignTooltip(t):"function"==typeof t&&t()}))}}},this.showTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","block"),(0,r.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip((()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.showTooltip))})))},this.hideTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.showTooltip))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,r.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,r.n)(),_label:""}}render(){return(0,n.h)(n.H,{ref:this.catchHostElement},""!==this.state._label&&(0,n.h)("div",{id:"floating",ref:this.catchTooltipElement},(0,n.h)("div",{id:"arrow",ref:this.catchArrowElement}),(0,n.h)("kol-badge",{id:this.state._id,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label})))}validateAlign(t){(0,i.w)(this,"_align",t)}validateId(t){(0,l.w)(this,"_id",t)}validateLabel(t){(0,l.w)(this,"_label",t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement)}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};ct.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}kol-tooltip #floating{animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;box-sizing:border-box;display:none;position:absolute;visibility:hidden}kol-tooltip #arrow{background:#333;height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip kol-badge{border-radius:var(--kolibri-border-radius);font-size:calc(4 * var(--kolibri-spacing));max-width:300px;position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"}},72613:(t,e,o)=>{o.d(e,{K:()=>ot,a:()=>H,b:()=>P,c:()=>T,d:()=>F,e:()=>D,f:()=>N,g:()=>C,h:()=>V,i:()=>tt,j:()=>I,k:()=>J,l:()=>et,m:()=>W,n:()=>G,o:()=>O,p:()=>z,q:()=>K,r:()=>c,s:()=>R,t:()=>Q,u:()=>$,w:()=>M});var n=o(26235),i=o(13986),r=o(27612);const l=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},s=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const o=new Set;l(o,e.querySelectorAll(t));const n=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<n.length;e++){const i=n[e].shadowRoot;l(o,s(t,"object"==typeof i&&null!==i?i:n[e]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},a=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let o=e.querySelector(t);if(null===o){const n=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<n.length;e++){const i=n[e].shadowRoot;if(o=a(t,"object"==typeof i&&null!==i?i:n[e]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=m,u=m,f=function(t){var e=g(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},d=function(t){var e=g(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},h=function(t){3==(e=g(t)).length&&e.push(255);var e,o=255==e[3],n=y(e[0]),i=y(e[1]),r=y(e[2]),l=function(t,e,o,n){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(t)&&-1!=i.indexOf(e)&&-1!=i.indexOf(o)&&-1!=i.indexOf(n)}(n,i,r,e=y(Math.round(e[3])));return o?l?"#"+n.charAt(0)+i.charAt(0)+r.charAt(0):"#"+n+i+r:l?"#"+n.charAt(0)+i.charAt(0)+r.charAt(0)+e.charAt(0):"#"+n+i+r+e},p=function(t){var e=g(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function m(t){var e=g(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function g(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),o=e.length;if(3==o||4==o){var n=b(e[0]),i=b(e[1]),r=b(e[2]),l=3==o?255:b(e[3]);if(isNaN(n)||isNaN(i)||isNaN(r)||isNaN(l))return;return[n,i,r,l]}}(t)||function(t){var e=t.replace(/^#/,""),o=e.length;if(6==o||8==o){var n=b(e.slice(0,2)),i=b(e.slice(2,4)),r=b(e.slice(4,6)),l=6==o?255:b(e.slice(6,8));if(isNaN(n)||isNaN(i)||isNaN(r)||isNaN(l))return;return[n,i,r,l]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=v(e[0],!0),n=v(e[1],!0),i=v(e[2],!0);if(-1!=o&&-1!=n&&-1!=i)return[o,n,i,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=v(e[0],!0),n=v(e[1],!0),i=v(e[2],!0),r=v(255*e[3]);if(-1!=o&&-1!=n&&-1!=i&&-1!=r)return[o,n,i,r]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=v(null!=t.r?t.r:null!=t.red?t.red:0,!0),o=v(null!=t.g?t.g:null!=t.green?t.green:0,!0),n=v(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),i=v(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=o&&-1!=n&&-1!=i)return[e,o,n,i]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=v(t[0],!0),o=v(t[1],!0),n=v(t[2],!0),i=v(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=o&&-1!=n&&-1!=i)return[e,o,n,i]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function y(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function b(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function v(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}c.arr=u,c.obj=f,c.css=d,c.hex=h,c.num=p;var w=1/12.92;function x(t){return Math.pow((t+.055)/1.055,2.4)}function k(t){var e=t[0]/255,o=t[1]/255,n=t[2]/255;return.2126*(e<=.03928?e*w:x(e))+.7152*(o<=.03928?o*w:x(o))+.0722*(n<=.03928?n*w:x(n))}function E(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var o=parseInt(t,16);return[o>>16,o>>8&255,255&o,e]}function L(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(k(t),k(e))}function T(t,e){return L(E(t),E(e))}function S(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const A=/\[object Object\]/,O=(t,e)=>{"string"==typeof t&&A.test(t)||e()},C=(t,e)=>{"string"==typeof t&&""===t||e()},N=(t,e)=>{(0,r.b)()&&(r.L.debug([t,e]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},R=(t,e,o,n={})=>{var i,r;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==o&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof n.afterPatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(r=t.nextHooks.get(e))||void 0===r||r.set("beforePatch",n.beforePatch)),t.nextState.set(e,o),(t=>{var e,o,n;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,o)=>{var n;const i=e.get("beforePatch");"function"==typeof i&&i(null===(n=t.nextState)||void 0===n?void 0:n.get(o),t.nextState,t,o)})),(null===(o=t.nextState)||void 0===o?void 0:o.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(n=t.nextHooks)||void 0===n||n.forEach(((e,o)=>{const n=e.get("afterPatch");"function"==typeof n&&n(t.state[o],t.state,t,o)}))),delete t.nextHooks})(t))},H=(t,e,o,n,r,l={})=>{o(r)?R(t,e,r,null==l?void 0:l.hooks):void 0===r||null===r&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?R(t,e,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||n.add(null),((t,e,o,n)=>{(0,i.d)(`[${t.constructor.name}] Der Property-Wert (${o}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(t,e,r,n))},P=(t,e,o,n)=>{H(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),o,n)},M=(t,e,o,n={})=>{const i="number"==typeof n.minLength?null==n?void 0:n.minLength:0;H(t,e,(t=>"string"==typeof t&&t.length>=i&&(void 0===(null==n?void 0:n.maxLength)||t.length<=n.maxLength)),new Set(["String"]),o,n)},D=(t,e,o,n)=>{H(t,e,(t=>"number"==typeof t&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&t>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&t<=n.max)),new Set(["Number"]),o,n)},F=(t,e,o,n,i=(t=>t==t),l={})=>{C(n,(()=>{O(n,(()=>{void 0===n&&(n=[]);try{try{n=z(n)}catch(t){}if(Array.isArray(n)){const s=n.find((t=>!o(t)));void 0===s&&i(n)?R(t,e,n,l.hooks):O(s,(()=>{throw r.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(n,(()=>{throw r.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){r.L.debug(t)}}))}))},_=/^(true|false)$/,j=/^-?(0|[1-9]\d*)$/,B=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=t=>{const e=typeof t,o=`${t}`;if("string"==typeof t)if(_.test(t))t="true"===t;else if(j.test(t))t=parseInt(t);else if(B.test(t))t=parseFloat(t);else if(q.test(t))try{t=z(t)}catch(t){}return e!==typeof t&&(0,i.d)(`You have used a stringified property value (${o} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},$=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw r.L.warn(["stringifyJson",t]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},q=/^[{[]/,z=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if(q.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){r.L.warn(["parseJson",t]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,I=t=>"string"==typeof t?t:V(t),J=(t,e)=>a(t,e||(0,r.g)()),K=(t,e)=>s(t,e||(0,r.g)());let Y=null;const U=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},Y),X=/(\d+, ){3}0\)/,G=(t,e=U())=>{const o=getComputedStyle(t),n=X.test(o.backgroundColor)?e.backgroundColor:c.hex(o.backgroundColor),i=X.test(o.color)?e.color:c.hex(o.color),l=T(n,i),s={backgroundColor:n,color:i,domNode:t,level:S(l),score:l};return l<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},Q=(t,e=U())=>{e.domNode instanceof HTMLElement&&(e=G(e.domNode,e));const o=e.domNode.querySelector(t);if(null===o){const o=e.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(e.domNode=o[n],null===(e=Q(t,e)).domNode);n++);return e}return G(o,e)},Z=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,r.a)().pageYOffset-50}),t.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${e}`;e=t,t=o}if("string"==typeof t){const o=J(t,e);o instanceof HTMLElement?Z(o):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class et{static queryHtmlElementColors(t,e,o=!1,n=!0){let i=null;if(!0===o||!1===et.executionLock)if(!1===o&&(et.cache.clear(),et.cache.set(e.domNode,e),et.executionLock=!0,!0===n&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)i=e;else{const o=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)o.add(t[e])}const n=e.domNode;if("function"==typeof n.assignedNodes){const t=n.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&o.add(t[e])}const r=e.domNode.children;for(let t=0;t<r.length;t++)o.add(r[t]);const l=Array.from(o);for(let s=0;s<l.length;s++){let o=et.cache.get(l[s]);void 0===o&&(o=G(l[s],e)),et.cache.set(l[s],o);const n=et.queryHtmlElementColors(t,o,!0,!1);if(null!==n){i=n;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${et.cache.size} DOM elements are analysed).`),et.executionLock=!1,et.cache.clear()),i}}et.executionLock=!1,et.cache=new Map;class ot{}ot.patchTheme=n.p,ot.patchThemeTag=n.a,ot.querySelector=J,ot.querySelectorAll=K,ot.scrollByHTMLElement=Z,ot.scrollBySelector=tt,ot.stringifyJson=$}}]);