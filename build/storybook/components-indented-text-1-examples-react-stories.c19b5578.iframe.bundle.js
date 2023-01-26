"use strict";var Re=Object.defineProperty,je=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var G=(l,a,n)=>a in l?Re(l,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[a]=n,F=(l,a)=>{for(var n in a||(a={}))Z.call(a,n)&&G(l,n,a[n]);if(D)for(var n of D(a))Q.call(a,n)&&G(l,n,a[n]);return l},W=(l,a)=>je(l,De(a));var H=(l,a)=>{var n={};for(var m in l)Z.call(l,m)&&a.indexOf(m)<0&&(n[m]=l[m]);if(l!=null&&D)for(var m of D(l))a.indexOf(m)<0&&Q.call(l,m)&&(n[m]=l[m]);return n};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4409],{"./src/components/indented-text/1-examples/react.stories.tsx":(l,a,n)=>{n.r(a),n.d(a,{Cite:()=>f,Single:()=>b,Standard:()=>k,Text:()=>v,default:()=>M});var m=n("./node_modules/@public-ui/react/dist/index.mjs"),d=n("./node_modules/react/index.js"),E=n("./src/components/indented-text/1-examples/autogen.configuration.ts"),L=Object.defineProperty,I=Object.defineProperties,B=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,j=(r,c,y)=>c in r?L(r,c,{enumerable:!0,configurable:!0,writable:!0,value:y}):r[c]=y,g=(r,c)=>{for(var y in c||(c={}))N.call(c,y)&&j(r,y,c[y]);if(A)for(var y of A(c))h.call(c,y)&&j(r,y,c[y]);return r},P=(r,c)=>I(r,B(c)),e=`import { KolIndentedText as MyComponent } from '@public-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { IndentedTextConfiguration } from './autogen.configuration';

export default {
	...IndentedTextConfiguration,
	title: 'React/IndentedText/Beispiele',
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
		<KolIndentedText {...args}>{args.content}</KolIndentedText>
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
		<KolIndentedText>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</KolIndentedText>
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
		<KolIndentedText>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</KolIndentedText>
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
		<KolIndentedText>
			<cite>\u201EDer Computer wurde zur L\xF6sung von Problemen erfunden, die es fr\xFCher nicht gab.\u201C</cite>
			<br />
			<small>Bill Gates</small>
		</KolIndentedText>
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
`,Y={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Single:{startLoc:{col:22,line:38},endLoc:{col:1,line:46},startBody:{col:22,line:38},endBody:{col:1,line:46}},Text:{startLoc:{col:20,line:57},endLoc:{col:1,line:76},startBody:{col:20,line:57},endBody:{col:1,line:76}},Cite:{startLoc:{col:20,line:87},endLoc:{col:1,line:106},startBody:{col:20,line:87},endBody:{col:1,line:106}}};const M=P(g({},E.i),{title:"React/IndentedText/Beispiele",component:m.CV}),C=r=>d.createElement(m.CV,g({},r),r.children),K={},k=r=>d.createElement("div",null,d.createElement(C,g({},r),r.content));k.args=g({},K);const b=r=>d.createElement("div",null,d.createElement(C,null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."));b.args=g({},K),b.storyName="Einzelnes Element";const v=r=>d.createElement("div",null,d.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),d.createElement(C,null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),d.createElement("br",null),d.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."));v.args=g({},K),v.storyName="Im Text";const f=r=>d.createElement("div",null,d.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),d.createElement(C,null,d.createElement("cite",null,"\u201EDer Computer wurde zur L\xF6sung von Problemen erfunden, die es fr\xFCher nicht gab.\u201C"),d.createElement("br",null),d.createElement("small",null,"Bill Gates")),d.createElement("br",null),d.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."));f.args=g({},K),f.storyName="Zitat",k.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<KolIndentedText {...args}>{args.content}</KolIndentedText>
	</div>
)`}},k.parameters),b.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<KolIndentedText>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</KolIndentedText>
	</div>
)`}},b.parameters),v.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
		<KolIndentedText>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</KolIndentedText>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
	</div>
)`}},v.parameters),f.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
		<KolIndentedText>
			<cite>\u201EDer Computer wurde zur L\xF6sung von Problemen erfunden, die es fr\xFCher nicht gab.\u201C</cite>
			<br />
			<small>Bill Gates</small>
		</KolIndentedText>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
		</p>
	</div>
)`}},f.parameters);try{k.displayName="Standard",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/indented-text/1-examples/react.stories.tsx#Standard"]={docgenInfo:k.__docgenInfo,name:"Standard",path:"src/components/indented-text/1-examples/react.stories.tsx#Standard"})}catch(r){}try{b.displayName="Single",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Single",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/indented-text/1-examples/react.stories.tsx#Single"]={docgenInfo:b.__docgenInfo,name:"Single",path:"src/components/indented-text/1-examples/react.stories.tsx#Single"})}catch(r){}try{v.displayName="Text",v.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/indented-text/1-examples/react.stories.tsx#Text"]={docgenInfo:v.__docgenInfo,name:"Text",path:"src/components/indented-text/1-examples/react.stories.tsx#Text"})}catch(r){}try{f.displayName="Cite",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Cite",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/indented-text/1-examples/react.stories.tsx#Cite"]={docgenInfo:f.__docgenInfo,name:"Cite",path:"src/components/indented-text/1-examples/react.stories.tsx#Cite"})}catch(r){}},"./src/components/indented-text/1-examples/autogen.configuration.ts":(l,a,n)=>{n.d(a,{i:()=>I});var m=n("./node_modules/@storybook/addon-jest/dist/esm/index.js"),d=n("./node_modules/@public-ui/components/jest-test-results.json"),E=n("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const L={content:{name:"Body-Inhalt",control:{type:"text"},defaultValue:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."}},I={decorators:[(0,m.x)({results:d})],parameters:{badges:[E.NZ.STABLE],jest:["indented-text.e2e.ts","indented-text.spec.ts","indented-text.spec.tsx"],status:{type:"bitv"}},argTypes:L}},"./node_modules/@public-ui/react/dist/index.mjs":(l,a,n)=>{n.d(a,{$o:()=>ye,CO:()=>Ie,CV:()=>oe,CX:()=>ie,Er:()=>K,Gc:()=>c,HA:()=>X,Jl:()=>$,K5:()=>C,Lj:()=>ae,MA:()=>ke,Np:()=>se,Nv:()=>ge,O:()=>re,P:()=>xe,Q4:()=>fe,QK:()=>be,Qs:()=>Ee,RZ:()=>M,T5:()=>Y,TE:()=>ne,TQ:()=>ue,UD:()=>Te,Ud:()=>ve,Vp:()=>Ke,Vs:()=>pe,WD:()=>ce,WR:()=>_e,Ze:()=>Ae,c2:()=>de,cJ:()=>ee,ic:()=>b,is:()=>Ce,lo:()=>k,m5:()=>J,ox:()=>y,qq:()=>Le,r7:()=>Se,rW:()=>te,sy:()=>me,u_:()=>he,uz:()=>v,z5:()=>le});var m=n("./node_modules/react/index.js"),d=n("./node_modules/react-dom/index.js");const E=o=>o.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),L=o=>o.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),I=(o,t,i={})=>{if(o instanceof Element){const u=B(o.classList,t,i);u!==""&&(o.className=u),Object.keys(t).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const _=s.substring(2),p=_[0].toLowerCase()+_.substring(1);A(p)||N(o,p,t[s])}else o[s]=t[s],typeof t[s]==="string"&&o.setAttribute(L(s),t[s])})}},B=(o,t,i)=>{const u=t.className||t.class,s=i.className||i.class,_=h(o),p=h(u?u.split(" "):[]),O=h(s?s.split(" "):[]),T=[];return _.forEach(S=>{p.has(S)?(T.push(S),p.delete(S)):O.has(S)||T.push(S)}),p.forEach(S=>T.push(S)),T.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const A=o=>{if(typeof document=="undefined")return!0;{const t="on"+o;let i=t in document;if(!i){const u=document.createElement("div");u.setAttribute(t,"return;"),i=typeof u[t]=="function"}return i}},N=(o,t,i)=>{const u=o.__events||(o.__events={}),s=u[t];s&&o.removeEventListener(t,s),o.addEventListener(t,u[t]=function(p){i&&i.call(this,p)})},h=o=>{const t=new Map;return o.forEach(i=>t.set(i,i)),t},j=(o,t)=>{typeof o=="function"?o(t):o!=null&&(o.current=t)},g=(...o)=>t=>{o.forEach(i=>{j(i,t)})},P=(o,t)=>{const i=(u,s)=>m.createElement(o,W(F({},u),{forwardedRef:s}));return i.displayName=t,m.forwardRef(i)},e=(o,t,i,u)=>{u!==void 0&&u();const s=E(o),_=class extends m.Component{constructor(p){super(p),this.setComponentElRef=O=>{this.componentEl=O}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(p){I(this.componentEl,this.props,p)}render(){const z=this.props,{children:p,forwardedRef:O,style:T,className:S,ref:Me}=z,V=H(z,["children","forwardedRef","style","className","ref"]);let w=Object.keys(V).reduce((U,x)=>{const q=V[x];if(x.indexOf("on")===0&&x[2]===x[2].toUpperCase()){const R=x.substring(2).toLowerCase();typeof document!="undefined"&&A(R)&&(U[x]=q)}else{const R=typeof q;(R==="string"||R==="boolean"||R==="number")&&(U[L(x)]=q)}return U},{});i&&(w=i(this.props,w));const Oe=W(F({},w),{ref:g(O,this.setComponentElRef),style:T});return(0,m.createElement)(o,Oe,p)}static get displayName(){return s}};return t&&(_.contextType=t),P(_,s)},Y=e("kol-abbr"),M=e("kol-accordion"),C=e("kol-alert"),K=e("kol-badge"),k=e("kol-breadcrumb"),b=e("kol-button"),v=e("kol-button-group"),f=null,r=null,c=e("kol-card"),y=e("kol-details"),J=e("kol-form"),X=e("kol-heading"),$=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),oe=e("kol-indented-text"),Be=null,ne=e("kol-input-checkbox"),se=e("kol-input-color"),re=e("kol-input-date"),ae=e("kol-input-email"),ie=e("kol-input-file"),de=e("kol-input-number"),le=e("kol-input-password"),me=e("kol-input-radio"),ue=e("kol-input-range"),ce=e("kol-input-text"),pe=e("kol-kolibri"),ge=e("kol-link"),Ne=null,ye=e("kol-link-group"),be=e("kol-logo"),ve=e("kol-modal"),ke=e("kol-nav"),fe=e("kol-pagination"),_e=e("kol-progress"),Se=e("kol-select"),xe=e("kol-skip-nav"),Pe=null,Le=e("kol-spin"),Ce=e("kol-symbol"),Ke=e("kol-table"),Te=e("kol-tabs"),Ee=e("kol-textarea"),Ie=e("kol-toast"),Ae=e("kol-tooltip"),he=e("kol-version")}}]);
