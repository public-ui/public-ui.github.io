/*! For license information please see 1671.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1671],{11835:(t,e,i)=>{i.d(e,{w:()=>n});var o=i(27289);const n=(t,e,i)=>{(0,o.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},81671:(t,e,i)=>{i.r(e),i.d(e,{kol_tooltip:()=>gt});var o=i(99459),n=i(11835),r=i(13136),l=i(27289),s=i(52573),a=Object.defineProperty,c=Object.defineProperties,f=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(t,e,i)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,m=(t,e)=>{for(var i in e||(e={}))d.call(e,i)&&p(t,i,e[i]);if(u)for(var i of u(e))h.call(e,i)&&p(t,i,e[i]);return t},g=(t,e)=>c(t,f(e)),y=(t,e)=>{var i={};for(var o in t)d.call(t,o)&&e.indexOf(o)<0&&(i[o]=t[o]);if(null!=t&&u)for(var o of u(t))e.indexOf(o)<0&&h.call(t,o)&&(i[o]=t[o]);return i},b=(t,e,i)=>new Promise(((o,n)=>{var r=t=>{try{s(i.next(t))}catch(t){n(t)}},l=t=>{try{s(i.throw(t))}catch(t){n(t)}},s=t=>t.done?o(t.value):Promise.resolve(t.value).then(r,l);s((i=i.apply(t,e)).next())}));function v(t){return t.split("-")[1]}function x(t){return"y"===t?"height":"width"}function w(t){return t.split("-")[0]}function k(t){return["top","bottom"].includes(w(t))?"x":"y"}function E(t,e,i){let{reference:o,floating:n}=t;const r=o.x+o.width/2-n.width/2,l=o.y+o.height/2-n.height/2,s=k(e),a=x(s),c=o[a]/2-n[a]/2,f="x"===s;let u;switch(w(e)){case"top":u={x:r,y:o.y-n.height};break;case"bottom":u={x:r,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:l};break;case"left":u={x:o.x-n.width,y:l};break;default:u={x:o.x,y:o.y}}switch(v(e)){case"start":u[s]-=c*(i&&f?-1:1);break;case"end":u[s]+=c*(i&&f?-1:1)}return u}function T(t){return"number"!=typeof t?function(t){return m({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function L(t){return g(m({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function O(t,e){return b(this,null,(function*(){var i;void 0===e&&(e={});const{x:o,y:n,platform:r,rects:l,elements:s,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=!1,padding:h=0}=e,p=T(h),y=s[d?"floating"===u?"reference":"floating":u],b=L(yield r.getClippingRect({element:null==(i=yield null==r.isElement?void 0:r.isElement(y))||i?y:y.contextElement||(yield null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:f,strategy:a})),v="floating"===u?g(m({},l.floating),{x:o,y:n}):l.reference,x=yield null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating),w=(yield null==r.isElement?void 0:r.isElement(x))&&(yield null==r.getScale?void 0:r.getScale(x))||{x:1,y:1},k=L(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:x,strategy:a}):v);return{top:(b.top-k.top+p.top)/w.y,bottom:(k.bottom-b.bottom+p.bottom)/w.y,left:(b.left-k.left+p.left)/w.x,right:(k.right-b.right+p.right)/w.x}}))}const A=Math.min,R=Math.max;function C(t,e,i){return R(t,A(e,i))}const _=t=>({name:"arrow",options:t,fn(e){return b(this,null,(function*(){const{element:i,padding:o=0}=t||{},{x:n,y:r,placement:l,rects:s,platform:a,elements:c}=e;if(null==i)return{};const f=T(o),u={x:n,y:r},d=k(l),h=x(d),p=yield a.getDimensions(i),m="y"===d,g=m?"top":"left",y=m?"bottom":"right",b=m?"clientHeight":"clientWidth",w=s.reference[h]+s.reference[d]-u[d]-s.floating[h],E=u[d]-s.reference[d],L=yield null==a.getOffsetParent?void 0:a.getOffsetParent(i);let O=L?L[b]:0;O&&(yield null==a.isElement?void 0:a.isElement(L))||(O=c.floating[b]||s.floating[h]);const A=w/2-E/2,R=f[g],_=O-p[h]-f[y],P=O/2-p[h]/2+A,F=C(R,P,_),S=null!=v(l)&&P!=F&&s.reference[h]/2-(P<R?f[g]:f[y])-p[h]/2<0;return{[d]:u[d]-(S?P<R?R-P:_-P:0),data:{[d]:F,centerOffset:P-F}}}))}}),P={left:"right",right:"left",bottom:"top",top:"bottom"};function F(t){return t.replace(/left|right|bottom|top/g,(t=>P[t]))}const S={start:"end",end:"start"};function D(t){return t.replace(/start|end/g,(t=>S[t]))}const H=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn(e){return b(this,null,(function*(){const{x:i,y:o,placement:n}=e,r=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}}}=r,c=y(r,["mainAxis","crossAxis","limiter"]),f={x:i,y:o},u=yield O(e,c),d=k(w(n)),h=function(t){return"x"===t?"y":"x"}(d);let p=f[d],b=f[h];if(l){const t="y"===d?"bottom":"right";p=C(p+u["y"===d?"top":"left"],p,p-u[t])}if(s){const t="y"===h?"bottom":"right";b=C(b+u["y"===h?"top":"left"],b,b-u[t])}const v=a.fn(g(m({},e),{[d]:p,[h]:b}));return g(m({},v),{data:{x:v.x-i,y:v.y-o}})}))}}};function W(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function B(t){return W(t).getComputedStyle(t)}const V=Math.min,j=Math.max,z=Math.round;function M(t){const e=B(t);let i=parseFloat(e.width),o=parseFloat(e.height);const n=t.offsetWidth,r=t.offsetHeight,l=z(i)!==n||z(o)!==r;return l&&(i=n,o=r),{width:i,height:o,fallback:l}}function I(t){return q(t)?(t.nodeName||"").toLowerCase():""}let N;function $(){if(N)return N;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(N=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),N):navigator.userAgent}function X(t){return t instanceof W(t).HTMLElement}function Y(t){return t instanceof W(t).Element}function q(t){return t instanceof W(t).Node}function G(t){return"undefined"!=typeof ShadowRoot&&(t instanceof W(t).ShadowRoot||t instanceof ShadowRoot)}function J(t){const{overflow:e,overflowX:i,overflowY:o,display:n}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(n)}function K(t){return["table","td","th"].includes(I(t))}function Q(t){const e=/firefox/i.test($()),i=B(t),o=i.backdropFilter||i.WebkitBackdropFilter;return"none"!==i.transform||"none"!==i.perspective||!!o&&"none"!==o||e&&"filter"===i.willChange||e&&!!i.filter&&"none"!==i.filter||["transform","perspective"].some((t=>i.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=i.contain;return null!=e&&e.includes(t)}))}function U(){return/^((?!chrome|android).)*safari/i.test($())}function Z(t){return["html","body","#document"].includes(I(t))}function tt(t){return Y(t)?t:t.contextElement}const et={x:1,y:1};function it(t){const e=tt(t);if(!X(e))return et;const i=e.getBoundingClientRect(),{width:o,height:n,fallback:r}=M(e);let l=(r?z(i.width):i.width)/o,s=(r?z(i.height):i.height)/n;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}function ot(t,e,i,o){var n,r;void 0===e&&(e=!1),void 0===i&&(i=!1);const l=t.getBoundingClientRect(),s=tt(t);let a=et;e&&(o?Y(o)&&(a=it(o)):a=it(t));const c=s?W(s):window,f=U()&&i;let u=(l.left+(f&&(null==(n=c.visualViewport)?void 0:n.offsetLeft)||0))/a.x,d=(l.top+(f&&(null==(r=c.visualViewport)?void 0:r.offsetTop)||0))/a.y,h=l.width/a.x,p=l.height/a.y;if(s){const t=W(s),e=o&&Y(o)?W(o):o;let i=t.frameElement;for(;i&&o&&e!==t;){const t=it(i),e=i.getBoundingClientRect(),o=getComputedStyle(i);e.x+=(i.clientLeft+parseFloat(o.paddingLeft))*t.x,e.y+=(i.clientTop+parseFloat(o.paddingTop))*t.y,u*=t.x,d*=t.y,h*=t.x,p*=t.y,u+=e.x,d+=e.y,i=W(i).frameElement}}return L({width:h,height:p,x:u,y:d})}function nt(t){return((q(t)?t.ownerDocument:t.document)||window.document).documentElement}function rt(t){return Y(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function lt(t){return ot(nt(t)).left+rt(t).scrollLeft}function st(t){if("html"===I(t))return t;const e=t.assignedSlot||t.parentNode||G(t)&&t.host||nt(t);return G(e)?e.host:e}function at(t){const e=st(t);return Z(e)?e.ownerDocument.body:X(e)&&J(e)?e:at(e)}function ct(t,e){var i;void 0===e&&(e=[]);const o=at(t),n=o===(null==(i=t.ownerDocument)?void 0:i.body),r=W(o);return n?e.concat(r,r.visualViewport||[],J(o)?o:[]):e.concat(o,ct(o))}function ft(t,e,i){let o;if("viewport"===e)o=function(t,e){const i=W(t),o=nt(t),n=i.visualViewport;let r=o.clientWidth,l=o.clientHeight,s=0,a=0;if(n){r=n.width,l=n.height;const t=U();(!t||t&&"fixed"===e)&&(s=n.offsetLeft,a=n.offsetTop)}return{width:r,height:l,x:s,y:a}}(t,i);else if("document"===e)o=function(t){const e=nt(t),i=rt(t),o=t.ownerDocument.body,n=j(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=j(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-i.scrollLeft+lt(t);const s=-i.scrollTop;return"rtl"===B(o).direction&&(l+=j(e.clientWidth,o.clientWidth)-n),{width:n,height:r,x:l,y:s}}(nt(t));else if(Y(e))o=function(t,e){const i=ot(t,!0,"fixed"===e),o=i.top+t.clientTop,n=i.left+t.clientLeft,r=X(t)?it(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:n*r.x,y:o*r.y}}(e,i);else{const i=m({},e);if(U()){var n,r;const e=W(t);i.x-=(null==(n=e.visualViewport)?void 0:n.offsetLeft)||0,i.y-=(null==(r=e.visualViewport)?void 0:r.offsetTop)||0}o=i}return L(o)}function ut(t,e){const i=e.get(t);if(i)return i;let o=ct(t).filter((t=>Y(t)&&"body"!==I(t))),n=null;const r="fixed"===B(t).position;let l=r?st(t):t;for(;Y(l)&&!Z(l);){const t=B(l),e=Q(l);"fixed"===t.position?n=null:(r?e||n:e||"static"!==t.position||!n||!["absolute","fixed"].includes(n.position))?n=t:o=o.filter((t=>t!==l)),l=st(l)}return e.set(t,o),o}function dt(t,e){return X(t)&&"fixed"!==B(t).position?e?e(t):t.offsetParent:null}function ht(t,e){const i=W(t);if(!X(t))return i;let o=dt(t,e);for(;o&&K(o)&&"static"===B(o).position;)o=dt(o,e);return o&&("html"===I(o)||"body"===I(o)&&"static"===B(o).position&&!Q(o))?i:o||function(t){let e=st(t);for(;X(e)&&!Z(e);){if(Q(e))return e;e=st(e)}return null}(t)||i}function pt(t,e,i){const o=X(e),n=nt(e),r=ot(t,!0,"fixed"===i,e);let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&"fixed"!==i)if(("body"!==I(e)||J(n))&&(l=rt(e)),X(e)){const t=ot(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else n&&(s.x=lt(n));return{x:r.left+l.scrollLeft-s.x,y:r.top+l.scrollTop-s.y,width:r.width,height:r.height}}const mt={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:n}=t;const r=[..."clippingAncestors"===i?ut(e,this._c):[].concat(i),o],l=r[0],s=r.reduce(((t,i)=>{const o=ft(e,i,n);return t.top=j(o.top,t.top),t.right=V(o.right,t.right),t.bottom=V(o.bottom,t.bottom),t.left=j(o.left,t.left),t}),ft(e,l,n));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:o}=t;const n=X(i),r=nt(i);if(i===r)return e;let l={scrollLeft:0,scrollTop:0},s={x:1,y:1};const a={x:0,y:0};if((n||!n&&"fixed"!==o)&&(("body"!==I(i)||J(r))&&(l=rt(i)),X(i))){const t=ot(i);s=it(i),a.x=t.x+i.clientLeft,a.y=t.y+i.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-l.scrollLeft*s.x+a.x,y:e.y*s.y-l.scrollTop*s.y+a.y}},isElement:Y,getDimensions:function(t){return X(t)?M(t):t.getBoundingClientRect()},getOffsetParent:ht,getDocumentElement:nt,getScale:it,getElementRects(t){return b(this,null,(function*(){let{reference:e,floating:i,strategy:o}=t;const n=this.getOffsetParent||ht,r=this.getDimensions;return{reference:pt(e,yield n(i),o),floating:m({x:0,y:0},yield r(i))}}))},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===B(t).direction},gt=class{constructor(t){(0,o.r)(this,t),this.alignTooltip=t=>{var e,i,o;if("test"!==s.p&&this.previousSibling){const n=this.previousSibling;if(this.tooltipElement){const r=this.tooltipElement,l=this.arrowElement,s=[(o=null!==(e=null==l?void 0:l.offsetHeight)&&void 0!==e?e:10,void 0===o&&(o=0),{name:"offset",options:o,fn(t){return b(this,null,(function*(){const{x:e,y:i}=t,n=yield function(t,e){return b(this,null,(function*(){const{placement:i,platform:o,elements:n}=t,r=yield null==o.isRTL?void 0:o.isRTL(n.floating),l=w(i),s=v(i),a="x"===k(i),c=["left","top"].includes(l)?-1:1,f=r&&a?-1:1,u="function"==typeof e?e(t):e;let{mainAxis:d,crossAxis:h,alignmentAxis:p}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:m({mainAxis:0,crossAxis:0,alignmentAxis:null},u);return s&&"number"==typeof p&&(h="end"===s?-1*p:p),a?{x:h*f,y:d*c}:{x:d*c,y:h*f}}))}(t,o);return{x:e+n.x,y:i+n.y,data:n}}))}}),(void 0===i&&(i={}),{name:"flip",options:i,fn(t){return b(this,null,(function*(){var e;const{placement:o,middlewareData:n,rects:r,initialPlacement:l,platform:s,elements:a}=t,c=i,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0}=c,g=y(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),b=w(o),E=w(l)===l,T=yield null==s.isRTL?void 0:s.isRTL(a.floating),L=d||(E||!m?[F(l)]:function(t){const e=F(t);return[D(t),e,D(e)]}(l));d||"none"===p||L.push(...function(t,e,i,o){const n=v(t);let r=function(t,e,i){const o=["left","right"],n=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return i?e?n:o:e?o:n;case"left":case"right":return e?r:l;default:return[]}}(w(t),"start"===i,o);return n&&(r=r.map((t=>t+"-"+n)),e&&(r=r.concat(r.map(D)))),r}(l,m,p,T));const A=[l,...L],R=yield O(t,g),C=[];let _=(null==(e=n.flip)?void 0:e.overflows)||[];if(f&&C.push(R[b]),u){const{main:t,cross:e}=function(t,e,i){void 0===i&&(i=!1);const o=v(t),n=k(t),r=x(n);let l="x"===n?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=F(l)),{main:l,cross:F(l)}}(o,r,T);C.push(R[t],R[e])}if(_=[..._,{placement:o,overflows:C}],!C.every((t=>t<=0))){var P,S;const t=((null==(P=n.flip)?void 0:P.index)||0)+1,e=A[t];if(e)return{data:{index:t,overflows:_},reset:{placement:e}};let i=null==(S=_.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:S.placement;if(!i)switch(h){case"bestFit":{var H;const t=null==(H=_.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:H[0];t&&(i=t);break}case"initialPlacement":i=l}if(o!==i)return{reset:{placement:i}}}return{}}))}}),H()];l&&s.push(_({element:l})),((t,e,i)=>{const o=new Map,n=m({platform:mt},i),r=g(m({},n.platform),{_c:o});return((t,e,i)=>b(void 0,null,(function*(){const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:l}=i,s=r.filter(Boolean),a=yield null==l.isRTL?void 0:l.isRTL(e);let c=yield l.getElementRects({reference:t,floating:e,strategy:n}),{x:f,y:u}=E(c,o,a),d=o,h={},p=0;for(let i=0;i<s.length;i++){const{name:r,fn:y}=s[i],{x:b,y:v,data:x,reset:w}=yield y({x:f,y:u,initialPlacement:o,placement:d,strategy:n,middlewareData:h,rects:c,platform:l,elements:{reference:t,floating:e}});f=null!=b?b:f,u=null!=v?v:u,h=g(m({},h),{[r]:m(m({},h[r]),x)}),w&&p<=50&&(p++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(c=!0===w.rects?yield l.getElementRects({reference:t,floating:e,strategy:n}):w.rects),({x:f,y:u}=E(c,d,a))),i=-1)}return{x:f,y:u,placement:d,strategy:n,middlewareData:h}})))(t,e,g(m({},n),{platform:r}))})(n,r,{placement:this.state._align,middleware:s}).then((({x:e,y:i,middlewareData:o,placement:n})=>{var s,a;const c=r.style.left,f=r.style.top;Object.assign(r.style,{left:`${e}px`,top:`${i}px`}),l&&((null===(s=o.arrow)||void 0===s?void 0:s.x)?Object.assign(l.style,{left:`${o.arrow.x}px`,top:"bottom"===n?-l.offsetHeight/2+"px":"",bottom:"top"===n?-l.offsetHeight/2+"px":""}):(null===(a=o.arrow)||void 0===a?void 0:a.y)&&Object.assign(l.style,{left:"right"===n?-l.offsetWidth/2+"px":"",right:"left"===n?-l.offsetWidth/2+"px":"",top:`${o.arrow.y}px`})),c!==r.style.left||f!==r.style.top?this.alignTooltip(t):"function"==typeof t&&t()}))}}},this.showTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","block"),(0,r.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip((()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.showTooltip))})))},this.hideTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.showTooltip))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,r.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,r.n)(),_label:""}}render(){return(0,o.h)(o.H,{ref:this.catchHostElement},""!==this.state._label&&(0,o.h)("div",{id:"floating",ref:this.catchTooltipElement},(0,o.h)("div",{id:"arrow",ref:this.catchArrowElement}),(0,o.h)("kol-badge",{id:this.state._id,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label})))}validateAlign(t){(0,n.w)(this,"_align",t)}validateId(t){(0,l.w)(this,"_id",t)}validateLabel(t){(0,l.w)(this,"_label",t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement)}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};gt.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}kol-tooltip #floating{animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;box-sizing:border-box;display:none;position:absolute;visibility:hidden}kol-tooltip #arrow{background:#333;height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip kol-badge{border-radius:var(--kolibri-border-radius);font-size:calc(4 * var(--kolibri-spacing));max-width:300px;position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"}}}]);