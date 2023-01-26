"use strict";var Re=Object.defineProperty,je=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var V=(d,a,n)=>a in d?Re(d,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[a]=n,q=(d,a)=>{for(var n in a||(a={}))Z.call(a,n)&&V(d,n,a[n]);if(j)for(var n of j(a))Q.call(a,n)&&V(d,n,a[n]);return d},W=(d,a)=>je(d,De(a));var H=(d,a)=>{var n={};for(var m in d)Z.call(d,m)&&a.indexOf(m)<0&&(n[m]=d[m]);if(d!=null&&j)for(var m of j(d))a.indexOf(m)<0&&Q.call(d,m)&&(n[m]=d[m]);return n};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7255],{"./src/components/indented-text/1-examples/autogen.wc.stories.tsx":(d,a,n)=>{n.r(a),n.d(a,{Cite:()=>f,Single:()=>k,Standard:()=>v,Text:()=>b,default:()=>P});var m=n("./node_modules/@public-ui/react/dist/index.mjs"),l=n("./node_modules/react/index.js"),K=n("./src/components/indented-text/1-examples/autogen.configuration.ts"),L=Object.defineProperty,T=Object.defineProperties,D=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,R=(r,c,y)=>c in r?L(r,c,{enumerable:!0,configurable:!0,writable:!0,value:y}):r[c]=y,g=(r,c)=>{for(var y in c||(c={}))B.call(c,y)&&R(r,y,c[y]);if(A)for(var y of A(c))h.call(c,y)&&R(r,y,c[y]);return r},N=(r,c)=>T(r,D(c)),e=`import { KolIndentedText as MyComponent } from '@public-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { IndentedTextConfiguration } from './autogen.configuration';

export default {
	...IndentedTextConfiguration,
	title: 'Web Components/IndentedText/Beispiele',
	component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const KolIndentedText: ComponentStory<typeof MyComponent> = (args: any) => {
	return <MyComponent {...args}>{args.children}</MyComponent>;
};

const DefaultArgs = {};

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Standard = (args: any) => (
	<div>
		<kol-indented-text {...args}>{args.content}</kol-indented-text>
	</div>
);
Standard.args = {
	...DefaultArgs,
};

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Single = (args: any) => (
	<div>
		<kol-indented-text>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</kol-indented-text>
	</div>
);
Single.args = {
	...DefaultArgs,
};
Single.storyName = 'Einzelnes Element';

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Text = (args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
		<kol-indented-text>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</kol-indented-text>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
	</div>
);
Text.args = {
	...DefaultArgs,
};
Text.storyName = 'Im Text';

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Cite = (args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
		<kol-indented-text>
			<cite>\u201EDer Computer wurde zur L\xF6sung von Problemen erfunden, die es fr\xFCher nicht gab.\u201C</cite>
			<br />
			<small>Bill Gates</small>
		</kol-indented-text>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
	</div>
);
Cite.args = {
	...DefaultArgs,
};
Cite.storyName = 'Zitat';
`,F={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Single:{startLoc:{col:22,line:38},endLoc:{col:1,line:46},startBody:{col:22,line:38},endBody:{col:1,line:46}},Text:{startLoc:{col:20,line:57},endLoc:{col:1,line:76},startBody:{col:20,line:57},endBody:{col:1,line:76}},Cite:{startLoc:{col:20,line:87},endLoc:{col:1,line:106},startBody:{col:20,line:87},endBody:{col:1,line:106}}};const P=N(g({},K.i),{title:"Web Components/IndentedText/Beispiele",component:m.CV}),Y=r=>React.createElement(MyComponent,g({},r),r.children),C={},v=r=>l.createElement("div",null,l.createElement("kol-indented-text",g({},r),r.content));v.args=g({},C);const k=r=>l.createElement("div",null,l.createElement("kol-indented-text",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."));k.args=g({},C),k.storyName="Einzelnes Element";const b=r=>l.createElement("div",null,l.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),l.createElement("kol-indented-text",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),l.createElement("br",null),l.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."));b.args=g({},C),b.storyName="Im Text";const f=r=>l.createElement("div",null,l.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),l.createElement("kol-indented-text",null,l.createElement("cite",null,"\u201EDer Computer wurde zur L\xF6sung von Problemen erfunden, die es fr\xFCher nicht gab.\u201C"),l.createElement("br",null),l.createElement("small",null,"Bill Gates")),l.createElement("br",null),l.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."));f.args=g({},C),f.storyName="Zitat",v.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<kol-indented-text {...args}>{args.content}</kol-indented-text>
	</div>
)`}},v.parameters),k.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<kol-indented-text>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</kol-indented-text>
	</div>
)`}},k.parameters),b.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
		<kol-indented-text>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</kol-indented-text>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
	</div>
)`}},b.parameters),f.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
		<kol-indented-text>
			<cite>\u201EDer Computer wurde zur L\xF6sung von Problemen erfunden, die es fr\xFCher nicht gab.\u201C</cite>
			<br />
			<small>Bill Gates</small>
		</kol-indented-text>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
	</div>
)`}},f.parameters);try{v.displayName="Standard",v.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/indented-text/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:v.__docgenInfo,name:"Standard",path:"src/components/indented-text/1-examples/autogen.wc.stories.tsx#Standard"})}catch(r){}try{k.displayName="Single",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Single",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/indented-text/1-examples/autogen.wc.stories.tsx#Single"]={docgenInfo:k.__docgenInfo,name:"Single",path:"src/components/indented-text/1-examples/autogen.wc.stories.tsx#Single"})}catch(r){}try{b.displayName="Text",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/indented-text/1-examples/autogen.wc.stories.tsx#Text"]={docgenInfo:b.__docgenInfo,name:"Text",path:"src/components/indented-text/1-examples/autogen.wc.stories.tsx#Text"})}catch(r){}try{f.displayName="Cite",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Cite",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/indented-text/1-examples/autogen.wc.stories.tsx#Cite"]={docgenInfo:f.__docgenInfo,name:"Cite",path:"src/components/indented-text/1-examples/autogen.wc.stories.tsx#Cite"})}catch(r){}},"./src/components/indented-text/1-examples/autogen.configuration.ts":(d,a,n)=>{n.d(a,{i:()=>T});var m=n("./node_modules/@storybook/addon-jest/dist/esm/index.js"),l=n("./node_modules/@public-ui/components/jest-test-results.json"),K=n("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const L={content:{name:"Body-Inhalt",control:{type:"text"},defaultValue:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."}},T={decorators:[(0,m.x)({results:l})],parameters:{badges:[K.NZ.STABLE],jest:["indented-text.e2e.ts","indented-text.spec.ts","indented-text.spec.tsx"],status:{type:"bitv"}},argTypes:L}},"./node_modules/@public-ui/react/dist/index.mjs":(d,a,n)=>{n.d(a,{$o:()=>ye,CO:()=>Ae,CV:()=>oe,CX:()=>ie,Er:()=>C,Gc:()=>c,HA:()=>X,Jl:()=>$,K5:()=>Y,Lj:()=>ae,MA:()=>ve,Np:()=>se,Nv:()=>ge,O:()=>re,P:()=>Se,Q4:()=>fe,QK:()=>ke,Qs:()=>Te,RZ:()=>P,T5:()=>F,TE:()=>ne,TQ:()=>ue,UD:()=>Ke,Ud:()=>be,Vp:()=>Ee,Vs:()=>pe,WD:()=>ce,WR:()=>_e,Ze:()=>he,c2:()=>de,cJ:()=>ee,ic:()=>k,is:()=>Ce,lo:()=>v,m5:()=>J,ox:()=>y,qq:()=>Le,r7:()=>xe,rW:()=>te,sy:()=>me,u_:()=>Oe,uz:()=>b,z5:()=>le});var m=n("./node_modules/react/index.js"),l=n("./node_modules/react-dom/index.js");const K=o=>o.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),L=o=>o.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),T=(o,t,i={})=>{if(o instanceof Element){const u=D(o.classList,t,i);u!==""&&(o.className=u),Object.keys(t).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const _=s.substring(2),p=_[0].toLowerCase()+_.substring(1);A(p)||B(o,p,t[s])}else o[s]=t[s],typeof t[s]==="string"&&o.setAttribute(L(s),t[s])})}},D=(o,t,i)=>{const u=t.className||t.class,s=i.className||i.class,_=h(o),p=h(u?u.split(" "):[]),O=h(s?s.split(" "):[]),E=[];return _.forEach(x=>{p.has(x)?(E.push(x),p.delete(x)):O.has(x)||E.push(x)}),p.forEach(x=>E.push(x)),E.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const A=o=>{if(typeof document=="undefined")return!0;{const t="on"+o;let i=t in document;if(!i){const u=document.createElement("div");u.setAttribute(t,"return;"),i=typeof u[t]=="function"}return i}},B=(o,t,i)=>{const u=o.__events||(o.__events={}),s=u[t];s&&o.removeEventListener(t,s),o.addEventListener(t,u[t]=function(p){i&&i.call(this,p)})},h=o=>{const t=new Map;return o.forEach(i=>t.set(i,i)),t},R=(o,t)=>{typeof o=="function"?o(t):o!=null&&(o.current=t)},g=(...o)=>t=>{o.forEach(i=>{R(i,t)})},N=(o,t)=>{const i=(u,s)=>m.createElement(o,W(q({},u),{forwardedRef:s}));return i.displayName=t,m.forwardRef(i)},e=(o,t,i,u)=>{u!==void 0&&u();const s=K(o),_=class extends m.Component{constructor(p){super(p),this.setComponentElRef=O=>{this.componentEl=O}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(p){T(this.componentEl,this.props,p)}render(){const G=this.props,{children:p,forwardedRef:O,style:E,className:x,ref:we}=G,z=H(G,["children","forwardedRef","style","className","ref"]);let w=Object.keys(z).reduce((M,S)=>{const U=z[S];if(S.indexOf("on")===0&&S[2]===S[2].toUpperCase()){const I=S.substring(2).toLowerCase();typeof document!="undefined"&&A(I)&&(M[S]=U)}else{const I=typeof U;(I==="string"||I==="boolean"||I==="number")&&(M[L(S)]=U)}return M},{});i&&(w=i(this.props,w));const Ie=W(q({},w),{ref:g(O,this.setComponentElRef),style:E});return(0,m.createElement)(o,Ie,p)}static get displayName(){return s}};return t&&(_.contextType=t),N(_,s)},F=e("kol-abbr"),P=e("kol-accordion"),Y=e("kol-alert"),C=e("kol-badge"),v=e("kol-breadcrumb"),k=e("kol-button"),b=e("kol-button-group"),f=null,r=null,c=e("kol-card"),y=e("kol-details"),J=e("kol-form"),X=e("kol-heading"),$=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),oe=e("kol-indented-text"),Be=null,ne=e("kol-input-checkbox"),se=e("kol-input-color"),re=e("kol-input-date"),ae=e("kol-input-email"),ie=e("kol-input-file"),de=e("kol-input-number"),le=e("kol-input-password"),me=e("kol-input-radio"),ue=e("kol-input-range"),ce=e("kol-input-text"),pe=e("kol-kolibri"),ge=e("kol-link"),Ne=null,ye=e("kol-link-group"),ke=e("kol-logo"),be=e("kol-modal"),ve=e("kol-nav"),fe=e("kol-pagination"),_e=e("kol-progress"),xe=e("kol-select"),Se=e("kol-skip-nav"),Pe=null,Le=e("kol-spin"),Ce=e("kol-symbol"),Ee=e("kol-table"),Ke=e("kol-tabs"),Te=e("kol-textarea"),Ae=e("kol-toast"),he=e("kol-tooltip"),Oe=e("kol-version")}}]);
