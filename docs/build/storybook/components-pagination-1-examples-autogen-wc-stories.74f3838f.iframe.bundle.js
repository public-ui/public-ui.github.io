"use strict";var Io=Object.defineProperty,Po=Object.defineProperties;var Do=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var F=(i,a,e)=>a in i?Io(i,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[a]=e,W=(i,a)=>{for(var e in a||(a={}))G.call(a,e)&&F(i,e,a[e]);if(I)for(var e of I(a))Z.call(a,e)&&F(i,e,a[e]);return i},V=(i,a)=>Po(i,Do(a));var H=(i,a)=>{var e={};for(var c in i)G.call(i,c)&&a.indexOf(c)<0&&(e[c]=i[c]);if(i!=null&&I)for(var c of I(i))a.indexOf(c)<0&&Z.call(i,c)&&(e[c]=i[c]);return e};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6936],{"./src/components/pagination/1-examples/autogen.wc.stories.tsx":(i,a,e)=>{e.r(a),e.d(a,{Boundary:()=>b,Sibling:()=>k,Standard:()=>f,Test:()=>y,default:()=>w});var c=e("./node_modules/@public-ui/react/dist/index.mjs"),m=e("./node_modules/react/index.js"),O=e("./src/components/pagination/1-examples/autogen.configuration.ts"),E=Object.defineProperty,T=Object.defineProperties,P=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,x=(l,d,g)=>d in l?E(l,d,{enumerable:!0,configurable:!0,writable:!0,value:g}):l[d]=g,_=(l,d)=>{for(var g in d||(d={}))D.call(d,g)&&x(l,g,d[g]);if(h)for(var g of h(d))A.call(d,g)&&x(l,g,d[g]);return l},N=(l,d)=>T(l,P(d)),o=`import { KolLogo as MyComponent, KolPagination } from '@public-ui/react';
import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { PaginationConfiguration } from './autogen.configuration';

export default {
	...PaginationConfiguration,
	title: 'Web Components/Pagination/Beispiele',
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
		<kol-pagination {...args}></kol-pagination>
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
		<kol-pagination _count={10} _page={6} _sibling-count={0}></kol-pagination>
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
		<kol-pagination _count={10} _page={6} _sibling-count={2}></kol-pagination>
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
		<kol-pagination _count={10} _page={6} _sibling-count={0} _boundary-count={2}></kol-pagination>
	</div>
);

Boundary.storyName = 'Ausgabe mit Boundary';
`,Y={Standard:{startLoc:{col:24,line:20},endLoc:{col:1,line:24},startBody:{col:24,line:20},endBody:{col:1,line:24}},Test:{startLoc:{col:20,line:34},endLoc:{col:1,line:38},startBody:{col:20,line:34},endBody:{col:1,line:38}},Sibling:{startLoc:{col:23,line:49},endLoc:{col:1,line:53},startBody:{col:23,line:49},endBody:{col:1,line:53}},Boundary:{startLoc:{col:24,line:62},endLoc:{col:1,line:66},startBody:{col:24,line:62},endBody:{col:1,line:66}}};const w=N(_({},O.y),{title:"Web Components/Pagination/Beispiele",component:c.QK}),L={},f=l=>m.createElement("div",null,m.createElement("kol-pagination",_({},l)));f.args=_({},L);const y=l=>m.createElement("div",null,m.createElement("kol-pagination",{_count:10,_page:6,"_sibling-count":0}));y.args=_({},L),y.storyName="Standardausgabe";const k=l=>m.createElement("div",null,m.createElement("kol-pagination",{_count:10,_page:6,"_sibling-count":2}));k.storyName="Ausgabe mit Sibling";const b=l=>m.createElement("div",null,m.createElement("kol-pagination",{_count:10,_page:6,"_sibling-count":0,"_boundary-count":2}));b.storyName="Ausgabe mit Boundary",f.parameters=_({storySource:{source:`(args: any) => (
	<div>
		<kol-pagination {...args}></kol-pagination>
	</div>
)`}},f.parameters),y.parameters=_({storySource:{source:`(args: any) => (
	<div>
		<kol-pagination _count={10} _page={6} _sibling-count={0}></kol-pagination>
	</div>
)`}},y.parameters),k.parameters=_({storySource:{source:`(args: any) => (
	<div>
		<kol-pagination _count={10} _page={6} _sibling-count={2}></kol-pagination>
	</div>
)`}},k.parameters),b.parameters=_({storySource:{source:`(args: any) => (
	<div>
		<kol-pagination _count={10} _page={6} _sibling-count={0} _boundary-count={2}></kol-pagination>
	</div>
)`}},b.parameters);try{f.displayName="Standard",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/pagination/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:f.__docgenInfo,name:"Standard",path:"src/components/pagination/1-examples/autogen.wc.stories.tsx#Standard"})}catch(l){}try{y.displayName="Test",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Test",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/pagination/1-examples/autogen.wc.stories.tsx#Test"]={docgenInfo:y.__docgenInfo,name:"Test",path:"src/components/pagination/1-examples/autogen.wc.stories.tsx#Test"})}catch(l){}try{k.displayName="Sibling",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sibling",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/pagination/1-examples/autogen.wc.stories.tsx#Sibling"]={docgenInfo:k.__docgenInfo,name:"Sibling",path:"src/components/pagination/1-examples/autogen.wc.stories.tsx#Sibling"})}catch(l){}try{b.displayName="Boundary",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Boundary",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/pagination/1-examples/autogen.wc.stories.tsx#Boundary"]={docgenInfo:b.__docgenInfo,name:"Boundary",path:"src/components/pagination/1-examples/autogen.wc.stories.tsx#Boundary"})}catch(l){}},"./src/components/pagination/1-examples/autogen.configuration.ts":(i,a,e)=>{e.d(a,{y:()=>T});var c=e("./node_modules/@storybook/addon-jest/dist/esm/index.js"),m=e("./node_modules/@public-ui/components/jest-test-results.json"),O=e("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const E={_boundaryCount:{name:"Anzahl Elemente gruppieren",control:{type:"number"},type:{required:!0},defaultValue:0},_count:{name:"Anzahl Elemente",control:{type:"number"},type:{required:!0},defaultValue:10},_page:{name:"Aktive Seite",control:{type:"number"},type:{required:!0},defaultValue:6},_siblingCount:{name:"Sibling",control:{type:"number"},type:{required:!0},defaultValue:2}},T={decorators:[(0,c.x)({results:m})],parameters:{badges:[O.NZ.STABLE],jest:["pagination.e2e.ts","pagination.spec.ts","pagination.spec.tsx"],status:{type:"bitv"}},argTypes:E}},"./node_modules/@public-ui/react/dist/index.mjs":(i,a,e)=>{e.d(a,{$o:()=>yo,CO:()=>Bo,CV:()=>no,CX:()=>io,Er:()=>f,Gc:()=>g,HA:()=>$,Jl:()=>q,K5:()=>L,Lj:()=>ro,MA:()=>bo,Np:()=>so,Nv:()=>_o,O:()=>ao,P:()=>Eo,Q4:()=>So,QK:()=>fo,Qs:()=>Ao,RZ:()=>w,T5:()=>Y,TE:()=>eo,TQ:()=>uo,UD:()=>ho,Ud:()=>ko,Vp:()=>To,Vs:()=>mo,WD:()=>go,WR:()=>Co,Ze:()=>Ro,c2:()=>lo,cJ:()=>oo,ic:()=>k,is:()=>Oo,lo:()=>y,m5:()=>X,ox:()=>J,qq:()=>vo,r7:()=>Ko,rW:()=>to,sy:()=>po,u_:()=>xo,uz:()=>b,z5:()=>co});var c=e("./node_modules/react/index.js"),m=e("./node_modules/react-dom/index.js");const O=n=>n.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),E=n=>n.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),T=(n,t,r={})=>{if(n instanceof Element){const p=P(n.classList,t,r);p!==""&&(n.className=p),Object.keys(t).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const S=s.substring(2),u=S[0].toLowerCase()+S.substring(1);h(u)||D(n,u,t[s])}else n[s]=t[s],typeof t[s]==="string"&&n.setAttribute(E(s),t[s])})}},P=(n,t,r)=>{const p=t.className||t.class,s=r.className||r.class,S=A(n),u=A(p?p.split(" "):[]),B=A(s?s.split(" "):[]),v=[];return S.forEach(C=>{u.has(C)?(v.push(C),u.delete(C)):B.has(C)||v.push(C)}),u.forEach(C=>v.push(C)),v.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const h=n=>{if(typeof document=="undefined")return!0;{const t="on"+n;let r=t in document;if(!r){const p=document.createElement("div");p.setAttribute(t,"return;"),r=typeof p[t]=="function"}return r}},D=(n,t,r)=>{const p=n.__events||(n.__events={}),s=p[t];s&&n.removeEventListener(t,s),n.addEventListener(t,p[t]=function(u){r&&r.call(this,u)})},A=n=>{const t=new Map;return n.forEach(r=>t.set(r,r)),t},x=(n,t)=>{typeof n=="function"?n(t):n!=null&&(n.current=t)},_=(...n)=>t=>{n.forEach(r=>{x(r,t)})},N=(n,t)=>{const r=(p,s)=>c.createElement(n,V(W({},p),{forwardedRef:s}));return r.displayName=t,c.forwardRef(r)},o=(n,t,r,p)=>{p!==void 0&&p();const s=O(n),S=class extends c.Component{constructor(u){super(u),this.setComponentElRef=B=>{this.componentEl=B}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(u){T(this.componentEl,this.props,u)}render(){const z=this.props,{children:u,forwardedRef:B,style:v,className:C,ref:Mo}=z,Q=H(z,["children","forwardedRef","style","className","ref"]);let j=Object.keys(Q).reduce((M,K)=>{const U=Q[K];if(K.indexOf("on")===0&&K[2]===K[2].toUpperCase()){const R=K.substring(2).toLowerCase();typeof document!="undefined"&&h(R)&&(M[K]=U)}else{const R=typeof U;(R==="string"||R==="boolean"||R==="number")&&(M[E(K)]=U)}return M},{});r&&(j=r(this.props,j));const Lo=V(W({},j),{ref:_(B,this.setComponentElRef),style:v});return(0,c.createElement)(n,Lo,u)}static get displayName(){return s}};return t&&(S.contextType=t),N(S,s)},Y=o("kol-abbr"),w=o("kol-accordion"),L=o("kol-alert"),f=o("kol-badge"),y=o("kol-breadcrumb"),k=o("kol-button"),b=o("kol-button-group"),l=null,d=null,g=o("kol-card"),J=o("kol-details"),X=o("kol-form"),$=o("kol-heading"),q=o("kol-icon"),oo=o("kol-icon-font-awesome"),to=o("kol-icon-icofont"),no=o("kol-indented-text"),No=null,eo=o("kol-input-checkbox"),so=o("kol-input-color"),ao=o("kol-input-date"),ro=o("kol-input-email"),io=o("kol-input-file"),lo=o("kol-input-number"),co=o("kol-input-password"),po=o("kol-input-radio"),uo=o("kol-input-range"),go=o("kol-input-text"),mo=o("kol-kolibri"),_o=o("kol-link"),wo=null,yo=o("kol-link-group"),fo=o("kol-logo"),ko=o("kol-modal"),bo=o("kol-nav"),So=o("kol-pagination"),Co=o("kol-progress"),Ko=o("kol-select"),Eo=o("kol-skip-nav"),jo=null,vo=o("kol-spin"),Oo=o("kol-symbol"),To=o("kol-table"),ho=o("kol-tabs"),Ao=o("kol-textarea"),Bo=o("kol-toast"),Ro=o("kol-tooltip"),xo=o("kol-version")}}]);
