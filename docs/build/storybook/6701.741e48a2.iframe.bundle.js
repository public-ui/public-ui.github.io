"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6701],{"./node_modules/@storybook/preview-web/dist/esm/renderDocs.js":(C,p,c)=>{c.r(p),c.d(p,{renderDocs:()=>w,unmountDocs:()=>P});var S=c("./node_modules/regenerator-runtime/runtime.js"),A=c("./node_modules/core-js/modules/es.object.to-string.js"),I=c("./node_modules/core-js/modules/es.promise.js"),n=c("./node_modules/react/index.js"),f=c("./node_modules/react-dom/index.js"),b={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},k={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},E={textAlign:"center"},v=function(){return n.createElement("div",{style:b,className:"sb-nodocs sb-wrapper"},n.createElement("div",{style:k},n.createElement("h1",{style:E},"No Docs"),n.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's\xA0",n.createElement("code",null,"docs")," parameter. If you think this is an error:"),n.createElement("ul",null,n.createElement("li",null,"Please check the story definition."),n.createElement("li",null,"Please check the Storybook config."),n.createElement("li",null,"Try reloading the page.")),n.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};v.displayName="NoDocs";function y(t,o,a,l,i,u,r){try{var d=t[u](r),s=d.value}catch(m){a(m);return}d.done?o(s):Promise.resolve(s).then(l,i)}function D(t){return function(){var o=this,a=arguments;return new Promise(function(l,i){var u=t.apply(o,a);function r(s){y(u,l,i,r,d,"next",s)}function d(s){y(u,l,i,r,d,"throw",s)}r(void 0)})}}function w(t,o,a,l){return j(t,o,a).then(l)}function j(t,o,a){return g.apply(this,arguments)}function g(){return g=D(regeneratorRuntime.mark(function t(o,a,l){var i,u,r,d,s,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.parameters.docs,!((r!=null&&r.getPage||r!=null&&r.page)&&!(r!=null&&r.getContainer||r!=null&&r.container))){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=r.container,e.t1){e.next=8;break}return e.next=7,(i=r.getContainer)===null||i===void 0?void 0:i.call(r);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(h){var N=h.children;return n.createElement(n.Fragment,null,N)};case 11:if(d=e.t0,e.t3=r.page,e.t3){e.next=17;break}return e.next=16,(u=r.getPage)===null||u===void 0?void 0:u.call(r);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=v;case 20:return s=e.t2,m=n.createElement(d,{key:o.componentId,context:a},n.createElement(s,null)),e.next=24,new Promise(function(h){f.render(m,l,h)});case 24:case"end":return e.stop()}},t)})),g.apply(this,arguments)}function P(t){f.unmountComponentAtNode(t)}}}]);
