"use strict";var Lo=Object.defineProperty,Io=Object.defineProperties;var Do=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var F=(l,a,e)=>a in l?Lo(l,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[a]=e,W=(l,a)=>{for(var e in a||(a={}))G.call(a,e)&&F(l,e,a[e]);if(L)for(var e of L(a))Z.call(a,e)&&F(l,e,a[e]);return l},Q=(l,a)=>Io(l,Do(a));var H=(l,a)=>{var e={};for(var r in l)G.call(l,r)&&a.indexOf(r)<0&&(e[r]=l[r]);if(l!=null&&L)for(var r of L(l))a.indexOf(r)<0&&Z.call(l,r)&&(e[r]=l[r]);return e};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9059],{"./src/components/pagination/1-examples/react.stories.tsx":(l,a,e)=>{e.r(a),e.d(a,{Boundary:()=>k,Sibling:()=>b,Standard:()=>f,Test:()=>y,default:()=>j});var r=e("./node_modules/@public-ui/react/dist/index.mjs"),m=e("./node_modules/react/index.js"),O=e("./src/components/pagination/1-examples/autogen.configuration.ts"),E=Object.defineProperty,T=Object.defineProperties,I=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,B=(c,d,g)=>d in c?E(c,d,{enumerable:!0,configurable:!0,writable:!0,value:g}):c[d]=g,_=(c,d)=>{for(var g in d||(d={}))D.call(d,g)&&B(c,g,d[g]);if(h)for(var g of h(d))P.call(d,g)&&B(c,g,d[g]);return c},N=(c,d)=>T(c,I(d)),o=`import { KolLogo as MyComponent, KolPagination } from '@public-ui/react';
import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { PaginationConfiguration } from './autogen.configuration';

export default {
	...PaginationConfiguration,
	title: 'React/Pagination/Beispiele',
	component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const DefaultArgs = {};

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Standard = (args: any) => (
	<div>
		<KolPagination {...args}></KolPagination>
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
export const Test = (args: any) => (
	<div>
		<KolPagination _count={10} _page={6} _sibling-count={0}></KolPagination>
	</div>
);
Test.args = {
	...DefaultArgs,
};
Test.storyName = 'Standardausgabe';

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Sibling = (args: any) => (
	<div>
		<KolPagination _count={10} _page={6} _sibling-count={2}></KolPagination>
	</div>
);

Sibling.storyName = 'Ausgabe mit Sibling';

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Boundary = (args: any) => (
	<div>
		<KolPagination _count={10} _page={6} _sibling-count={0} _boundary-count={2}></KolPagination>
	</div>
);

Boundary.storyName = 'Ausgabe mit Boundary';
`,V={Standard:{startLoc:{col:24,line:20},endLoc:{col:1,line:24},startBody:{col:24,line:20},endBody:{col:1,line:24}},Test:{startLoc:{col:20,line:34},endLoc:{col:1,line:38},startBody:{col:20,line:34},endBody:{col:1,line:38}},Sibling:{startLoc:{col:23,line:49},endLoc:{col:1,line:53},startBody:{col:23,line:49},endBody:{col:1,line:53}},Boundary:{startLoc:{col:24,line:62},endLoc:{col:1,line:66},startBody:{col:24,line:62},endBody:{col:1,line:66}}};const j=N(_({},O.y),{title:"React/Pagination/Beispiele",component:r.QK}),x={},f=c=>m.createElement("div",null,m.createElement(r.Q4,_({},c)));f.args=_({},x);const y=c=>m.createElement("div",null,m.createElement(r.Q4,{_count:10,_page:6,"_sibling-count":0}));y.args=_({},x),y.storyName="Standardausgabe";const b=c=>m.createElement("div",null,m.createElement(r.Q4,{_count:10,_page:6,"_sibling-count":2}));b.storyName="Ausgabe mit Sibling";const k=c=>m.createElement("div",null,m.createElement(r.Q4,{_count:10,_page:6,"_sibling-count":0,"_boundary-count":2}));k.storyName="Ausgabe mit Boundary",f.parameters=_({storySource:{source:`(args: any) => (
	<div>
		<KolPagination {...args}></KolPagination>
	</div>
)`}},f.parameters),y.parameters=_({storySource:{source:`(args: any) => (
	<div>
		<KolPagination _count={10} _page={6} _sibling-count={0}></KolPagination>
	</div>
)`}},y.parameters),b.parameters=_({storySource:{source:`(args: any) => (
	<div>
		<KolPagination _count={10} _page={6} _sibling-count={2}></KolPagination>
	</div>
)`}},b.parameters),k.parameters=_({storySource:{source:`(args: any) => (
	<div>
		<KolPagination _count={10} _page={6} _sibling-count={0} _boundary-count={2}></KolPagination>
	</div>
)`}},k.parameters);try{f.displayName="Standard",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/pagination/1-examples/react.stories.tsx#Standard"]={docgenInfo:f.__docgenInfo,name:"Standard",path:"src/components/pagination/1-examples/react.stories.tsx#Standard"})}catch(c){}try{y.displayName="Test",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Test",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/pagination/1-examples/react.stories.tsx#Test"]={docgenInfo:y.__docgenInfo,name:"Test",path:"src/components/pagination/1-examples/react.stories.tsx#Test"})}catch(c){}try{b.displayName="Sibling",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sibling",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/pagination/1-examples/react.stories.tsx#Sibling"]={docgenInfo:b.__docgenInfo,name:"Sibling",path:"src/components/pagination/1-examples/react.stories.tsx#Sibling"})}catch(c){}try{k.displayName="Boundary",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Boundary",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/pagination/1-examples/react.stories.tsx#Boundary"]={docgenInfo:k.__docgenInfo,name:"Boundary",path:"src/components/pagination/1-examples/react.stories.tsx#Boundary"})}catch(c){}},"./src/components/pagination/1-examples/autogen.configuration.ts":(l,a,e)=>{e.d(a,{y:()=>T});var r=e("./node_modules/@storybook/addon-jest/dist/esm/index.js"),m=e("./node_modules/@public-ui/components/jest-test-results.json"),O=e("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const E={_boundaryCount:{name:"Anzahl Elemente gruppieren",control:{type:"number"},type:{required:!0},defaultValue:0},_count:{name:"Anzahl Elemente",control:{type:"number"},type:{required:!0},defaultValue:10},_page:{name:"Aktive Seite",control:{type:"number"},type:{required:!0},defaultValue:6},_siblingCount:{name:"Sibling",control:{type:"number"},type:{required:!0},defaultValue:2}},T={decorators:[(0,r.x)({results:m})],parameters:{badges:[O.NZ.STABLE],jest:["pagination.e2e.ts","pagination.spec.ts","pagination.spec.tsx"],status:{type:"bitv"}},argTypes:E}},"./node_modules/@public-ui/react/dist/index.mjs":(l,a,e)=>{e.d(a,{$o:()=>yo,CO:()=>Ao,CV:()=>no,CX:()=>io,Er:()=>f,Gc:()=>g,HA:()=>$,Jl:()=>q,K5:()=>x,Lj:()=>ro,MA:()=>ko,Np:()=>so,Nv:()=>_o,O:()=>ao,P:()=>Eo,Q4:()=>So,QK:()=>fo,Qs:()=>Po,RZ:()=>j,T5:()=>V,TE:()=>eo,TQ:()=>uo,UD:()=>ho,Ud:()=>bo,Vp:()=>To,Vs:()=>mo,WD:()=>go,WR:()=>Ko,Ze:()=>Ro,c2:()=>lo,cJ:()=>oo,ic:()=>b,is:()=>Oo,lo:()=>y,m5:()=>X,ox:()=>J,qq:()=>vo,r7:()=>Co,rW:()=>to,sy:()=>po,u_:()=>Bo,uz:()=>k,z5:()=>co});var r=e("./node_modules/react/index.js"),m=e("./node_modules/react-dom/index.js");const O=n=>n.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),E=n=>n.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),T=(n,t,i={})=>{if(n instanceof Element){const p=I(n.classList,t,i);p!==""&&(n.className=p),Object.keys(t).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const S=s.substring(2),u=S[0].toLowerCase()+S.substring(1);h(u)||D(n,u,t[s])}else n[s]=t[s],typeof t[s]==="string"&&n.setAttribute(E(s),t[s])})}},I=(n,t,i)=>{const p=t.className||t.class,s=i.className||i.class,S=P(n),u=P(p?p.split(" "):[]),A=P(s?s.split(" "):[]),v=[];return S.forEach(K=>{u.has(K)?(v.push(K),u.delete(K)):A.has(K)||v.push(K)}),u.forEach(K=>v.push(K)),v.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const h=n=>{if(typeof document=="undefined")return!0;{const t="on"+n;let i=t in document;if(!i){const p=document.createElement("div");p.setAttribute(t,"return;"),i=typeof p[t]=="function"}return i}},D=(n,t,i)=>{const p=n.__events||(n.__events={}),s=p[t];s&&n.removeEventListener(t,s),n.addEventListener(t,p[t]=function(u){i&&i.call(this,u)})},P=n=>{const t=new Map;return n.forEach(i=>t.set(i,i)),t},B=(n,t)=>{typeof n=="function"?n(t):n!=null&&(n.current=t)},_=(...n)=>t=>{n.forEach(i=>{B(i,t)})},N=(n,t)=>{const i=(p,s)=>r.createElement(n,Q(W({},p),{forwardedRef:s}));return i.displayName=t,r.forwardRef(i)},o=(n,t,i,p)=>{p!==void 0&&p();const s=O(n),S=class extends r.Component{constructor(u){super(u),this.setComponentElRef=A=>{this.componentEl=A}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(u){T(this.componentEl,this.props,u)}render(){const z=this.props,{children:u,forwardedRef:A,style:v,className:K,ref:wo}=z,Y=H(z,["children","forwardedRef","style","className","ref"]);let M=Object.keys(Y).reduce((w,C)=>{const U=Y[C];if(C.indexOf("on")===0&&C[2]===C[2].toUpperCase()){const R=C.substring(2).toLowerCase();typeof document!="undefined"&&h(R)&&(w[C]=U)}else{const R=typeof U;(R==="string"||R==="boolean"||R==="number")&&(w[E(C)]=U)}return w},{});i&&(M=i(this.props,M));const xo=Q(W({},M),{ref:_(A,this.setComponentElRef),style:v});return(0,r.createElement)(n,xo,u)}static get displayName(){return s}};return t&&(S.contextType=t),N(S,s)},V=o("kol-abbr"),j=o("kol-accordion"),x=o("kol-alert"),f=o("kol-badge"),y=o("kol-breadcrumb"),b=o("kol-button"),k=o("kol-button-group"),c=null,d=null,g=o("kol-card"),J=o("kol-details"),X=o("kol-form"),$=o("kol-heading"),q=o("kol-icon"),oo=o("kol-icon-font-awesome"),to=o("kol-icon-icofont"),no=o("kol-indented-text"),No=null,eo=o("kol-input-checkbox"),so=o("kol-input-color"),ao=o("kol-input-date"),ro=o("kol-input-email"),io=o("kol-input-file"),lo=o("kol-input-number"),co=o("kol-input-password"),po=o("kol-input-radio"),uo=o("kol-input-range"),go=o("kol-input-text"),mo=o("kol-kolibri"),_o=o("kol-link"),jo=null,yo=o("kol-link-group"),fo=o("kol-logo"),bo=o("kol-modal"),ko=o("kol-nav"),So=o("kol-pagination"),Ko=o("kol-progress"),Co=o("kol-select"),Eo=o("kol-skip-nav"),Mo=null,vo=o("kol-spin"),Oo=o("kol-symbol"),To=o("kol-table"),ho=o("kol-tabs"),Po=o("kol-textarea"),Ao=o("kol-toast"),Ro=o("kol-tooltip"),Bo=o("kol-version")}}]);
