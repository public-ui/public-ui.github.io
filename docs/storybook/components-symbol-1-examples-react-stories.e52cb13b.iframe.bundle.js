"use strict";var Be=Object.defineProperty,De=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var q=(c,l,s)=>l in c?Be(c,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[l]=s,F=(c,l)=>{for(var s in l||(l={}))z.call(l,s)&&q(c,s,l[s]);if(D)for(var s of D(l))G.call(l,s)&&q(c,s,l[s]);return c},W=(c,l)=>De(c,Ie(l));var H=(c,l)=>{var s={};for(var n in c)z.call(c,n)&&l.indexOf(n)<0&&(s[n]=c[n]);if(c!=null&&D)for(var n of D(c))l.indexOf(n)<0&&G.call(c,n)&&(s[n]=c[n]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8036],{"./src/components/symbol/1-examples/react.stories.tsx":(c,l,s)=>{s.r(l),s.d(l,{Bar:()=>g,Standard:()=>_,default:()=>P,sign:()=>b,signText:()=>f});var n=s("./node_modules/react/index.js"),E=s("./node_modules/@public-ui/react/dist/index.mjs"),x=s("./src/components/symbol/1-examples/autogen.configuration.ts"),v=Object.defineProperty,h=Object.defineProperties,I=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,B=(a,m,y)=>m in a?v(a,m,{enumerable:!0,configurable:!0,writable:!0,value:y}):a[m]=y,p=(a,m)=>{for(var y in m||(m={}))j.call(m,y)&&B(a,y,m[y]);if(T)for(var y of T(m))O.call(m,y)&&B(a,y,m[y]);return a},N=(a,m)=>h(a,I(m)),e=`import React from 'react';

import { KolSymbol as MyComponent } from '@public-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SymbolConfiguration } from './autogen.configuration';

export default {
	...SymbolConfiguration,
	title: 'React/Symbol/Beispiele',
	component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const KolSymbol: ComponentStory<typeof MyComponent> = (args: any) => {
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
		<KolSymbol ariaLabel={args._ariaLabel} {...args}></KolSymbol>
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
export const sign = (args: any) => (
	<div>
		<KolSymbol ariaLabel={args._ariaLabel} {...args}></KolSymbol>
	</div>
);
sign.args = {
	_ariaLabel: 'Dollar-Zeichen',
	_symbol: '$',
};
sign.storyName = 'Einzelnes Zeichen';

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Bar = (args: any) => (
	<div>
		<KolSymbol ariaLabel={args._ariaLabel} {...args}></KolSymbol>
	</div>
);
Bar.args = {
	_ariaLabel: 'Ein langer Text',
	_symbol:
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore	magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero	eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
};
Bar.storyName = 'Langer Text';

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const signText = (args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amets, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua.
			<br />
			<br />
			Kosten hierf\xFCr: 350 <KolSymbol ariaLabel={args._ariaLabel} {...args}></KolSymbol>
			<br />
			<br />
			At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
			dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
			et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
		</p>
	</div>
);
signText.args = {
	_ariaLabel: 'Dollar-Zeichen',
	_symbol: '$',
};
signText.storyName = 'Dollar-Zeichen in Flie\xDFtext';
`,Y={Standard:{startLoc:{col:24,line:25},endLoc:{col:1,line:29},startBody:{col:24,line:25},endBody:{col:1,line:29}},sign:{startLoc:{col:20,line:39},endLoc:{col:1,line:43},startBody:{col:20,line:39},endBody:{col:1,line:43}},Bar:{startLoc:{col:19,line:55},endLoc:{col:1,line:59},startBody:{col:19,line:55},endBody:{col:1,line:59}},signText:{startLoc:{col:24,line:72},endLoc:{col:1,line:87},startBody:{col:24,line:72},endBody:{col:1,line:87}}};const P=N(p({},x.H),{title:"React/Symbol/Beispiele",component:E.is}),K=a=>n.createElement(E.is,p({},a),a.children),M={},_=a=>n.createElement("div",null,n.createElement(K,p({ariaLabel:a._ariaLabel},a)));_.args=p({},M);const b=a=>n.createElement("div",null,n.createElement(K,p({ariaLabel:a._ariaLabel},a)));b.args={_ariaLabel:"Dollar-Zeichen",_symbol:"$"},b.storyName="Einzelnes Zeichen";const g=a=>n.createElement("div",null,n.createElement(K,p({ariaLabel:a._ariaLabel},a)));g.args={_ariaLabel:"Ein langer Text",_symbol:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore	magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero	eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},g.storyName="Langer Text";const f=a=>n.createElement("div",null,n.createElement("p",null,"Lorem ipsum dolor sit amets, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",n.createElement("br",null),n.createElement("br",null),"Kosten hierf\xFCr: 350 ",n.createElement(K,p({ariaLabel:a._ariaLabel},a)),n.createElement("br",null),n.createElement("br",null),"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));f.args={_ariaLabel:"Dollar-Zeichen",_symbol:"$"},f.storyName="Dollar-Zeichen in Flie\xDFtext",_.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<KolSymbol ariaLabel={args._ariaLabel} {...args}></KolSymbol>
	</div>
)`}},_.parameters),b.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<KolSymbol ariaLabel={args._ariaLabel} {...args}></KolSymbol>
	</div>
)`}},b.parameters),g.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<KolSymbol ariaLabel={args._ariaLabel} {...args}></KolSymbol>
	</div>
)`}},g.parameters),f.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amets, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua.
			<br />
			<br />
			Kosten hierf\xFCr: 350 <KolSymbol ariaLabel={args._ariaLabel} {...args}></KolSymbol>
			<br />
			<br />
			At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
			dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
			et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
		</p>
	</div>
)`}},f.parameters);try{_.displayName="Standard",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/symbol/1-examples/react.stories.tsx#Standard"]={docgenInfo:_.__docgenInfo,name:"Standard",path:"src/components/symbol/1-examples/react.stories.tsx#Standard"})}catch(a){}try{b.displayName="sign",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"sign",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/symbol/1-examples/react.stories.tsx#sign"]={docgenInfo:b.__docgenInfo,name:"sign",path:"src/components/symbol/1-examples/react.stories.tsx#sign"})}catch(a){}try{g.displayName="Bar",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Bar",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/symbol/1-examples/react.stories.tsx#Bar"]={docgenInfo:g.__docgenInfo,name:"Bar",path:"src/components/symbol/1-examples/react.stories.tsx#Bar"})}catch(a){}try{f.displayName="signText",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"signText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/symbol/1-examples/react.stories.tsx#signText"]={docgenInfo:f.__docgenInfo,name:"signText",path:"src/components/symbol/1-examples/react.stories.tsx#signText"})}catch(a){}},"./src/components/symbol/1-examples/autogen.configuration.ts":(c,l,s)=>{s.d(l,{H:()=>h});var n=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),E=s("./node_modules/@public-ui/components/jest-test-results.json"),x=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const v={_ariaLabel:{name:"Aria-Label",control:{type:"text"},type:{required:!0},defaultValue:"Warnung"},_symbol:{name:"Symbol",control:{type:"text"},type:{required:!0},defaultValue:""}},h={decorators:[(0,n.x)({results:E})],parameters:{badges:[x.NZ.STABLE],jest:["symbol.e2e.ts","symbol.spec.ts","symbol.spec.tsx"],status:{type:"bitv"}},argTypes:v}},"./node_modules/@public-ui/react/dist/index.mjs":(c,l,s)=>{s.d(l,{$o:()=>be,CO:()=>Te,CV:()=>te,CX:()=>le,Er:()=>M,Gc:()=>m,HA:()=>J,Jl:()=>X,K5:()=>K,Lj:()=>re,MA:()=>fe,Np:()=>se,Nv:()=>ye,O:()=>ae,P:()=>ve,Q4:()=>ke,QK:()=>ge,Qs:()=>he,RZ:()=>P,T5:()=>Y,TE:()=>ne,TQ:()=>me,UD:()=>xe,Ud:()=>_e,Vp:()=>Ee,Vs:()=>pe,WD:()=>ue,WR:()=>Se,Ze:()=>Oe,c2:()=>ie,cJ:()=>ee,ic:()=>b,is:()=>Ce,lo:()=>_,m5:()=>Q,ox:()=>y,qq:()=>Ke,r7:()=>Le,rW:()=>oe,sy:()=>de,u_:()=>Ae,uz:()=>g,z5:()=>ce});var n=s("./node_modules/react/index.js"),E=s("./node_modules/react-dom/index.js");const x=t=>t.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),v=t=>t.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),h=(t,o,i={})=>{if(t instanceof Element){const d=I(t.classList,o,i);d!==""&&(t.className=d),Object.keys(o).forEach(r=>{if(!(r==="children"||r==="style"||r==="ref"||r==="class"||r==="className"||r==="forwardedRef"))if(r.indexOf("on")===0&&r[2]===r[2].toUpperCase()){const k=r.substring(2),u=k[0].toLowerCase()+k.substring(1);T(u)||j(t,u,o[r])}else t[r]=o[r],typeof o[r]==="string"&&t.setAttribute(v(r),o[r])})}},I=(t,o,i)=>{const d=o.className||o.class,r=i.className||i.class,k=O(t),u=O(d?d.split(" "):[]),A=O(r?r.split(" "):[]),C=[];return k.forEach(S=>{u.has(S)?(C.push(S),u.delete(S)):A.has(S)||C.push(S)}),u.forEach(S=>C.push(S)),C.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const T=t=>{if(typeof document=="undefined")return!0;{const o="on"+t;let i=o in document;if(!i){const d=document.createElement("div");d.setAttribute(o,"return;"),i=typeof d[o]=="function"}return i}},j=(t,o,i)=>{const d=t.__events||(t.__events={}),r=d[o];r&&t.removeEventListener(o,r),t.addEventListener(o,d[o]=function(u){i&&i.call(this,u)})},O=t=>{const o=new Map;return t.forEach(i=>o.set(i,i)),o},B=(t,o)=>{typeof t=="function"?t(o):t!=null&&(t.current=o)},p=(...t)=>o=>{t.forEach(i=>{B(i,o)})},N=(t,o)=>{const i=(d,r)=>n.createElement(t,W(F({},d),{forwardedRef:r}));return i.displayName=o,n.forwardRef(i)},e=(t,o,i,d)=>{d!==void 0&&d();const r=x(t),k=class extends n.Component{constructor(u){super(u),this.setComponentElRef=A=>{this.componentEl=A}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(u){h(this.componentEl,this.props,u)}render(){const $=this.props,{children:u,forwardedRef:A,style:C,className:S,ref:Me}=$,V=H($,["children","forwardedRef","style","className","ref"]);let w=Object.keys(V).reduce((U,L)=>{const Z=V[L];if(L.indexOf("on")===0&&L[2]===L[2].toUpperCase()){const R=L.substring(2).toLowerCase();typeof document!="undefined"&&T(R)&&(U[L]=Z)}else{const R=typeof Z;(R==="string"||R==="boolean"||R==="number")&&(U[v(L)]=Z)}return U},{});i&&(w=i(this.props,w));const Re=W(F({},w),{ref:p(A,this.setComponentElRef),style:C});return(0,n.createElement)(t,Re,u)}static get displayName(){return r}};return o&&(k.contextType=o),N(k,r)},Y=e("kol-abbr"),P=e("kol-accordion"),K=e("kol-alert"),M=e("kol-badge"),_=e("kol-breadcrumb"),b=e("kol-button"),g=e("kol-button-group"),f=null,a=null,m=e("kol-card"),y=e("kol-details"),Q=e("kol-form"),J=e("kol-heading"),X=e("kol-icon"),ee=e("kol-icon-font-awesome"),oe=e("kol-icon-icofont"),te=e("kol-indented-text"),je=null,ne=e("kol-input-checkbox"),se=e("kol-input-color"),ae=e("kol-input-date"),re=e("kol-input-email"),le=e("kol-input-file"),ie=e("kol-input-number"),ce=e("kol-input-password"),de=e("kol-input-radio"),me=e("kol-input-range"),ue=e("kol-input-text"),pe=e("kol-kolibri"),ye=e("kol-link"),Ne=null,be=e("kol-link-group"),ge=e("kol-logo"),_e=e("kol-modal"),fe=e("kol-nav"),ke=e("kol-pagination"),Se=e("kol-progress"),Le=e("kol-select"),ve=e("kol-skip-nav"),Pe=null,Ke=e("kol-spin"),Ce=e("kol-symbol"),Ee=e("kol-table"),xe=e("kol-tabs"),he=e("kol-textarea"),Te=e("kol-toast"),Oe=e("kol-tooltip"),Ae=e("kol-version")}}]);
