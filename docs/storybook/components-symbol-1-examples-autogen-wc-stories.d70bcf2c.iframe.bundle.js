"use strict";var Be=Object.defineProperty,De=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var q=(c,l,s)=>l in c?Be(c,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[l]=s,W=(c,l)=>{for(var s in l||(l={}))z.call(l,s)&&q(c,s,l[s]);if(B)for(var s of B(l))G.call(l,s)&&q(c,s,l[s]);return c},Z=(c,l)=>De(c,Ie(l));var H=(c,l)=>{var s={};for(var n in c)z.call(c,n)&&l.indexOf(n)<0&&(s[n]=c[n]);if(c!=null&&B)for(var n of B(c))l.indexOf(n)<0&&G.call(c,n)&&(s[n]=c[n]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8918],{"./src/components/symbol/1-examples/autogen.wc.stories.tsx":(c,l,s)=>{s.r(l),s.d(l,{Bar:()=>g,Standard:()=>_,default:()=>N,sign:()=>b,signText:()=>k});var n=s("./node_modules/react/index.js"),A=s("./node_modules/@public-ui/react/dist/index.mjs"),E=s("./src/components/symbol/1-examples/autogen.configuration.ts"),v=Object.defineProperty,K=Object.defineProperties,D=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,R=(a,d,y)=>d in a?v(a,d,{enumerable:!0,configurable:!0,writable:!0,value:y}):a[d]=y,p=(a,d)=>{for(var y in d||(d={}))I.call(d,y)&&R(a,y,d[y]);if(x)for(var y of x(d))h.call(d,y)&&R(a,y,d[y]);return a},j=(a,d)=>K(a,D(d)),e=`import React from 'react';

import { KolSymbol as MyComponent } from '@public-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SymbolConfiguration } from './autogen.configuration';

export default {
	...SymbolConfiguration,
	title: 'Web Components/Symbol/Beispiele',
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
		<kol-symbol ariaLabel={args._ariaLabel} {...args}></kol-symbol>
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
		<kol-symbol ariaLabel={args._ariaLabel} {...args}></kol-symbol>
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
		<kol-symbol ariaLabel={args._ariaLabel} {...args}></kol-symbol>
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
			Kosten hierf\xFCr: 350 <kol-symbol ariaLabel={args._ariaLabel} {...args}></kol-symbol>
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
`,F={Standard:{startLoc:{col:24,line:25},endLoc:{col:1,line:29},startBody:{col:24,line:25},endBody:{col:1,line:29}},sign:{startLoc:{col:20,line:39},endLoc:{col:1,line:43},startBody:{col:20,line:39},endBody:{col:1,line:43}},Bar:{startLoc:{col:19,line:55},endLoc:{col:1,line:59},startBody:{col:19,line:55},endBody:{col:1,line:59}},signText:{startLoc:{col:24,line:72},endLoc:{col:1,line:87},startBody:{col:24,line:72},endBody:{col:1,line:87}}};const N=j(p({},E.H),{title:"Web Components/Symbol/Beispiele",component:A.is}),Y=a=>React.createElement(MyComponent,p({},a),a.children),P={},_=a=>n.createElement("div",null,n.createElement("kol-symbol",p({ariaLabel:a._ariaLabel},a)));_.args=p({},P);const b=a=>n.createElement("div",null,n.createElement("kol-symbol",p({ariaLabel:a._ariaLabel},a)));b.args={_ariaLabel:"Dollar-Zeichen",_symbol:"$"},b.storyName="Einzelnes Zeichen";const g=a=>n.createElement("div",null,n.createElement("kol-symbol",p({ariaLabel:a._ariaLabel},a)));g.args={_ariaLabel:"Ein langer Text",_symbol:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore	magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero	eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},g.storyName="Langer Text";const k=a=>n.createElement("div",null,n.createElement("p",null,"Lorem ipsum dolor sit amets, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",n.createElement("br",null),n.createElement("br",null),"Kosten hierf\xFCr: 350 ",n.createElement("kol-symbol",p({ariaLabel:a._ariaLabel},a)),n.createElement("br",null),n.createElement("br",null),"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));k.args={_ariaLabel:"Dollar-Zeichen",_symbol:"$"},k.storyName="Dollar-Zeichen in Flie\xDFtext",_.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<kol-symbol ariaLabel={args._ariaLabel} {...args}></kol-symbol>
	</div>
)`}},_.parameters),b.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<kol-symbol ariaLabel={args._ariaLabel} {...args}></kol-symbol>
	</div>
)`}},b.parameters),g.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<kol-symbol ariaLabel={args._ariaLabel} {...args}></kol-symbol>
	</div>
)`}},g.parameters),k.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<p>
			Lorem ipsum dolor sit amets, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua.
			<br />
			<br />
			Kosten hierf\xFCr: 350 <kol-symbol ariaLabel={args._ariaLabel} {...args}></kol-symbol>
			<br />
			<br />
			At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
			dolor sit amet, consetetur sadipscingelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
			et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
		</p>
	</div>
)`}},k.parameters);try{_.displayName="Standard",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/symbol/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:_.__docgenInfo,name:"Standard",path:"src/components/symbol/1-examples/autogen.wc.stories.tsx#Standard"})}catch(a){}try{b.displayName="sign",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"sign",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/symbol/1-examples/autogen.wc.stories.tsx#sign"]={docgenInfo:b.__docgenInfo,name:"sign",path:"src/components/symbol/1-examples/autogen.wc.stories.tsx#sign"})}catch(a){}try{g.displayName="Bar",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Bar",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/symbol/1-examples/autogen.wc.stories.tsx#Bar"]={docgenInfo:g.__docgenInfo,name:"Bar",path:"src/components/symbol/1-examples/autogen.wc.stories.tsx#Bar"})}catch(a){}try{k.displayName="signText",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"signText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/symbol/1-examples/autogen.wc.stories.tsx#signText"]={docgenInfo:k.__docgenInfo,name:"signText",path:"src/components/symbol/1-examples/autogen.wc.stories.tsx#signText"})}catch(a){}},"./src/components/symbol/1-examples/autogen.configuration.ts":(c,l,s)=>{s.d(l,{H:()=>K});var n=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),A=s("./node_modules/@public-ui/components/jest-test-results.json"),E=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const v={_ariaLabel:{name:"Aria-Label",control:{type:"text"},type:{required:!0},defaultValue:"Warnung"},_symbol:{name:"Symbol",control:{type:"text"},type:{required:!0},defaultValue:""}},K={decorators:[(0,n.x)({results:A})],parameters:{badges:[E.NZ.STABLE],jest:["symbol.e2e.ts","symbol.spec.ts","symbol.spec.tsx"],status:{type:"bitv"}},argTypes:v}},"./node_modules/@public-ui/react/dist/index.mjs":(c,l,s)=>{s.d(l,{$o:()=>be,CO:()=>Te,CV:()=>te,CX:()=>le,Er:()=>P,Gc:()=>d,HA:()=>J,Jl:()=>X,K5:()=>Y,Lj:()=>re,MA:()=>ke,Np:()=>se,Nv:()=>ye,O:()=>ae,P:()=>ve,Q4:()=>fe,QK:()=>ge,Qs:()=>he,RZ:()=>N,T5:()=>F,TE:()=>ne,TQ:()=>de,UD:()=>xe,Ud:()=>_e,Vp:()=>Ke,Vs:()=>pe,WD:()=>ue,WR:()=>Se,Ze:()=>Oe,c2:()=>ie,cJ:()=>ee,ic:()=>b,is:()=>Ee,lo:()=>_,m5:()=>Q,ox:()=>y,qq:()=>Ce,r7:()=>Le,rW:()=>oe,sy:()=>me,u_:()=>Ae,uz:()=>g,z5:()=>ce});var n=s("./node_modules/react/index.js"),A=s("./node_modules/react-dom/index.js");const E=t=>t.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),v=t=>t.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),K=(t,o,i={})=>{if(t instanceof Element){const m=D(t.classList,o,i);m!==""&&(t.className=m),Object.keys(o).forEach(r=>{if(!(r==="children"||r==="style"||r==="ref"||r==="class"||r==="className"||r==="forwardedRef"))if(r.indexOf("on")===0&&r[2]===r[2].toUpperCase()){const f=r.substring(2),u=f[0].toLowerCase()+f.substring(1);x(u)||I(t,u,o[r])}else t[r]=o[r],typeof o[r]==="string"&&t.setAttribute(v(r),o[r])})}},D=(t,o,i)=>{const m=o.className||o.class,r=i.className||i.class,f=h(t),u=h(m?m.split(" "):[]),T=h(r?r.split(" "):[]),C=[];return f.forEach(S=>{u.has(S)?(C.push(S),u.delete(S)):T.has(S)||C.push(S)}),u.forEach(S=>C.push(S)),C.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const x=t=>{if(typeof document=="undefined")return!0;{const o="on"+t;let i=o in document;if(!i){const m=document.createElement("div");m.setAttribute(o,"return;"),i=typeof m[o]=="function"}return i}},I=(t,o,i)=>{const m=t.__events||(t.__events={}),r=m[o];r&&t.removeEventListener(o,r),t.addEventListener(o,m[o]=function(u){i&&i.call(this,u)})},h=t=>{const o=new Map;return t.forEach(i=>o.set(i,i)),o},R=(t,o)=>{typeof t=="function"?t(o):t!=null&&(t.current=o)},p=(...t)=>o=>{t.forEach(i=>{R(i,o)})},j=(t,o)=>{const i=(m,r)=>n.createElement(t,Z(W({},m),{forwardedRef:r}));return i.displayName=o,n.forwardRef(i)},e=(t,o,i,m)=>{m!==void 0&&m();const r=E(t),f=class extends n.Component{constructor(u){super(u),this.setComponentElRef=T=>{this.componentEl=T}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(u){K(this.componentEl,this.props,u)}render(){const $=this.props,{children:u,forwardedRef:T,style:C,className:S,ref:we}=$,V=H($,["children","forwardedRef","style","className","ref"]);let w=Object.keys(V).reduce((M,L)=>{const U=V[L];if(L.indexOf("on")===0&&L[2]===L[2].toUpperCase()){const O=L.substring(2).toLowerCase();typeof document!="undefined"&&x(O)&&(M[L]=U)}else{const O=typeof U;(O==="string"||O==="boolean"||O==="number")&&(M[v(L)]=U)}return M},{});i&&(w=i(this.props,w));const Re=Z(W({},w),{ref:p(T,this.setComponentElRef),style:C});return(0,n.createElement)(t,Re,u)}static get displayName(){return r}};return o&&(f.contextType=o),j(f,r)},F=e("kol-abbr"),N=e("kol-accordion"),Y=e("kol-alert"),P=e("kol-badge"),_=e("kol-breadcrumb"),b=e("kol-button"),g=e("kol-button-group"),k=null,a=null,d=e("kol-card"),y=e("kol-details"),Q=e("kol-form"),J=e("kol-heading"),X=e("kol-icon"),ee=e("kol-icon-font-awesome"),oe=e("kol-icon-icofont"),te=e("kol-indented-text"),je=null,ne=e("kol-input-checkbox"),se=e("kol-input-color"),ae=e("kol-input-date"),re=e("kol-input-email"),le=e("kol-input-file"),ie=e("kol-input-number"),ce=e("kol-input-password"),me=e("kol-input-radio"),de=e("kol-input-range"),ue=e("kol-input-text"),pe=e("kol-kolibri"),ye=e("kol-link"),Ne=null,be=e("kol-link-group"),ge=e("kol-logo"),_e=e("kol-modal"),ke=e("kol-nav"),fe=e("kol-pagination"),Se=e("kol-progress"),Le=e("kol-select"),ve=e("kol-skip-nav"),Pe=null,Ce=e("kol-spin"),Ee=e("kol-symbol"),Ke=e("kol-table"),xe=e("kol-tabs"),he=e("kol-textarea"),Te=e("kol-toast"),Oe=e("kol-tooltip"),Ae=e("kol-version")}}]);
