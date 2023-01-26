"use strict";var Io=Object.defineProperty,Lo=Object.defineProperties;var Do=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var G=(a,r,n)=>r in a?Io(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,w=(a,r)=>{for(var n in r||(r={}))Q.call(r,n)&&G(a,n,r[n]);if(P)for(var n of P(r))Z.call(r,n)&&G(a,n,r[n]);return a},U=(a,r)=>Lo(a,Do(r));var z=(a,r)=>{var n={};for(var c in a)Q.call(a,c)&&r.indexOf(c)<0&&(n[c]=a[c]);if(a!=null&&P)for(var c of P(a))r.indexOf(c)<0&&Z.call(a,c)&&(n[c]=a[c]);return n};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9317],{"./src/components/spin/1-examples/react.stories.tsx":(a,r,n)=>{n.r(r),n.d(r,{Standard:()=>f,default:()=>L});var c=n("./node_modules/@public-ui/react/dist/index.mjs"),g=n("./node_modules/react/index.js"),S=n("./src/components/spin/1-examples/autogen.configuration.ts"),b=Object.defineProperty,E=Object.defineProperties,x=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,T=(i,d,m)=>d in i?b(i,d,{enumerable:!0,configurable:!0,writable:!0,value:m}):i[d]=m,y=(i,d)=>{for(var m in d||(d={}))A.call(d,m)&&T(i,m,d[m]);if(v)for(var m of v(d))h.call(d,m)&&T(i,m,d[m]);return i},I=(i,d)=>E(i,x(d)),o=`import { KolSpin as MyComponent } from '@public-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SpinConfiguration } from './autogen.configuration';

export default {
	...SpinConfiguration,
	title: 'React/Spin/Beispiele',
	component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const KolSpin: ComponentStory<typeof MyComponent> = (args: any) => {
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
		<KolSpin {...args}></KolSpin>
	</div>
);
Standard.args = {
	...DefaultArgs,
};
`,W={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}}};const L=I(y({},S.v),{title:"React/Spin/Beispiele",component:c.qq}),D=i=>g.createElement(c.qq,y({},i),i.children),M={},f=i=>g.createElement("div",null,g.createElement(D,y({},i)));f.args=y({},M),f.parameters=y({storySource:{source:`(args: any) => (
	<div>
		<KolSpin {...args}></KolSpin>
	</div>
)`}},f.parameters);try{f.displayName="Standard",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/spin/1-examples/react.stories.tsx#Standard"]={docgenInfo:f.__docgenInfo,name:"Standard",path:"src/components/spin/1-examples/react.stories.tsx#Standard"})}catch(i){}},"./src/components/spin/1-examples/autogen.configuration.ts":(a,r,n)=>{n.d(r,{v:()=>E});var c=n("./node_modules/@storybook/addon-jest/dist/esm/index.js"),g=n("./node_modules/@public-ui/components/jest-test-results.json"),S=n("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const b={_show:{name:"Spin anzeigen",control:{type:"boolean"},defaultValue:!0,type:{required:!0}}},E={decorators:[(0,c.x)({results:g})],parameters:{badges:[S.NZ.STABLE],jest:["spin.e2e.ts","spin.spec.ts","spin.spec.tsx"],status:{type:"bitv"}},argTypes:b}},"./node_modules/@public-ui/react/dist/index.mjs":(a,r,n)=>{n.d(r,{$o:()=>_o,CO:()=>To,CV:()=>to,CX:()=>lo,Er:()=>M,Gc:()=>Y,HA:()=>X,Jl:()=>$,K5:()=>D,Lj:()=>ro,MA:()=>Ko,Np:()=>no,Nv:()=>fo,O:()=>so,P:()=>So,Q4:()=>go,QK:()=>ko,Qs:()=>Ro,RZ:()=>L,T5:()=>W,TE:()=>eo,TQ:()=>po,UD:()=>Oo,Ud:()=>yo,Vp:()=>ho,Vs:()=>mo,WD:()=>uo,WR:()=>bo,Ze:()=>Po,c2:()=>ao,cJ:()=>q,ic:()=>i,is:()=>vo,lo:()=>f,m5:()=>J,ox:()=>H,qq:()=>Eo,r7:()=>Co,rW:()=>oo,sy:()=>io,u_:()=>xo,uz:()=>d,z5:()=>co});var c=n("./node_modules/react/index.js"),g=n("./node_modules/react-dom/index.js");const S=e=>e.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),b=e=>e.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),E=(e,t,l={})=>{if(e instanceof Element){const p=x(e.classList,t,l);p!==""&&(e.className=p),Object.keys(t).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const _=s.substring(2),u=_[0].toLowerCase()+_.substring(1);v(u)||A(e,u,t[s])}else e[s]=t[s],typeof t[s]==="string"&&e.setAttribute(b(s),t[s])})}},x=(e,t,l)=>{const p=t.className||t.class,s=l.className||l.class,_=h(e),u=h(p?p.split(" "):[]),O=h(s?s.split(" "):[]),C=[];return _.forEach(k=>{u.has(k)?(C.push(k),u.delete(k)):O.has(k)||C.push(k)}),u.forEach(k=>C.push(k)),C.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const v=e=>{if(typeof document=="undefined")return!0;{const t="on"+e;let l=t in document;if(!l){const p=document.createElement("div");p.setAttribute(t,"return;"),l=typeof p[t]=="function"}return l}},A=(e,t,l)=>{const p=e.__events||(e.__events={}),s=p[t];s&&e.removeEventListener(t,s),e.addEventListener(t,p[t]=function(u){l&&l.call(this,u)})},h=e=>{const t=new Map;return e.forEach(l=>t.set(l,l)),t},T=(e,t)=>{typeof e=="function"?e(t):e!=null&&(e.current=t)},y=(...e)=>t=>{e.forEach(l=>{T(l,t)})},I=(e,t)=>{const l=(p,s)=>c.createElement(e,U(w({},p),{forwardedRef:s}));return l.displayName=t,c.forwardRef(l)},o=(e,t,l,p)=>{p!==void 0&&p();const s=S(e),_=class extends c.Component{constructor(u){super(u),this.setComponentElRef=O=>{this.componentEl=O}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(u){E(this.componentEl,this.props,u)}render(){const F=this.props,{children:u,forwardedRef:O,style:C,className:k,ref:wo}=F,V=z(F,["children","forwardedRef","style","className","ref"]);let j=Object.keys(V).reduce((B,K)=>{const N=V[K];if(K.indexOf("on")===0&&K[2]===K[2].toUpperCase()){const R=K.substring(2).toLowerCase();typeof document!="undefined"&&v(R)&&(B[K]=N)}else{const R=typeof N;(R==="string"||R==="boolean"||R==="number")&&(B[b(K)]=N)}return B},{});l&&(j=l(this.props,j));const Ao=U(w({},j),{ref:y(O,this.setComponentElRef),style:C});return(0,c.createElement)(e,Ao,u)}static get displayName(){return s}};return t&&(_.contextType=t),I(_,s)},W=o("kol-abbr"),L=o("kol-accordion"),D=o("kol-alert"),M=o("kol-badge"),f=o("kol-breadcrumb"),i=o("kol-button"),d=o("kol-button-group"),m=null,Mo=null,Y=o("kol-card"),H=o("kol-details"),J=o("kol-form"),X=o("kol-heading"),$=o("kol-icon"),q=o("kol-icon-font-awesome"),oo=o("kol-icon-icofont"),to=o("kol-indented-text"),jo=null,eo=o("kol-input-checkbox"),no=o("kol-input-color"),so=o("kol-input-date"),ro=o("kol-input-email"),lo=o("kol-input-file"),ao=o("kol-input-number"),co=o("kol-input-password"),io=o("kol-input-radio"),po=o("kol-input-range"),uo=o("kol-input-text"),mo=o("kol-kolibri"),fo=o("kol-link"),Bo=null,_o=o("kol-link-group"),ko=o("kol-logo"),yo=o("kol-modal"),Ko=o("kol-nav"),go=o("kol-pagination"),bo=o("kol-progress"),Co=o("kol-select"),So=o("kol-skip-nav"),No=null,Eo=o("kol-spin"),vo=o("kol-symbol"),ho=o("kol-table"),Oo=o("kol-tabs"),Ro=o("kol-textarea"),To=o("kol-toast"),Po=o("kol-tooltip"),xo=o("kol-version")}}]);
