"use strict";var Io=Object.defineProperty,Lo=Object.defineProperties;var Do=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var G=(a,r,e)=>r in a?Io(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e,N=(a,r)=>{for(var e in r||(r={}))Q.call(r,e)&&G(a,e,r[e]);if(P)for(var e of P(r))Z.call(r,e)&&G(a,e,r[e]);return a},w=(a,r)=>Lo(a,Do(r));var z=(a,r)=>{var e={};for(var c in a)Q.call(a,c)&&r.indexOf(c)<0&&(e[c]=a[c]);if(a!=null&&P)for(var c of P(a))r.indexOf(c)<0&&Z.call(a,c)&&(e[c]=a[c]);return e};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2668],{"./src/components/spin/1-examples/autogen.wc.stories.tsx":(a,r,e)=>{e.r(r),e.d(r,{Standard:()=>f,default:()=>L});var c=e("./node_modules/@public-ui/react/dist/index.mjs"),C=e("./node_modules/react/index.js"),E=e("./src/components/spin/1-examples/autogen.configuration.ts"),K=Object.defineProperty,S=Object.defineProperties,x=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,T=(i,d,m)=>d in i?K(i,d,{enumerable:!0,configurable:!0,writable:!0,value:m}):i[d]=m,y=(i,d)=>{for(var m in d||(d={}))A.call(d,m)&&T(i,m,d[m]);if(v)for(var m of v(d))h.call(d,m)&&T(i,m,d[m]);return i},I=(i,d)=>S(i,x(d)),o=`import { KolSpin as MyComponent } from '@public-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SpinConfiguration } from './autogen.configuration';

export default {
	...SpinConfiguration,
	title: 'Web Components/Spin/Beispiele',
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
		<kol-spin {...args}></kol-spin>
	</div>
);
Standard.args = {
	...DefaultArgs,
};
`,U={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}}};const L=I(y({},E.v),{title:"Web Components/Spin/Beispiele",component:c.qq}),W=i=>React.createElement(MyComponent,y({},i),i.children),D={},f=i=>C.createElement("div",null,C.createElement("kol-spin",y({},i)));f.args=y({},D),f.parameters=y({storySource:{source:`(args: any) => (
	<div>
		<kol-spin {...args}></kol-spin>
	</div>
)`}},f.parameters);try{f.displayName="Standard",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/spin/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:f.__docgenInfo,name:"Standard",path:"src/components/spin/1-examples/autogen.wc.stories.tsx#Standard"})}catch(i){}},"./src/components/spin/1-examples/autogen.configuration.ts":(a,r,e)=>{e.d(r,{v:()=>S});var c=e("./node_modules/@storybook/addon-jest/dist/esm/index.js"),C=e("./node_modules/@public-ui/components/jest-test-results.json"),E=e("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const K={_show:{name:"Spin anzeigen",control:{type:"boolean"},defaultValue:!0,type:{required:!0}}},S={decorators:[(0,c.x)({results:C})],parameters:{badges:[E.NZ.STABLE],jest:["spin.e2e.ts","spin.spec.ts","spin.spec.tsx"],status:{type:"bitv"}},argTypes:K}},"./node_modules/@public-ui/react/dist/index.mjs":(a,r,e)=>{e.d(r,{$o:()=>_o,CO:()=>To,CV:()=>to,CX:()=>lo,Er:()=>D,Gc:()=>Y,HA:()=>X,Jl:()=>$,K5:()=>W,Lj:()=>ro,MA:()=>go,Np:()=>eo,Nv:()=>fo,O:()=>so,P:()=>Eo,Q4:()=>Ko,QK:()=>ko,Qs:()=>Ro,RZ:()=>L,T5:()=>U,TE:()=>no,TQ:()=>po,UD:()=>Oo,Ud:()=>yo,Vp:()=>ho,Vs:()=>mo,WD:()=>uo,WR:()=>bo,Ze:()=>Po,c2:()=>ao,cJ:()=>q,ic:()=>i,is:()=>vo,lo:()=>f,m5:()=>J,ox:()=>H,qq:()=>So,r7:()=>Co,rW:()=>oo,sy:()=>io,u_:()=>xo,uz:()=>d,z5:()=>co});var c=e("./node_modules/react/index.js"),C=e("./node_modules/react-dom/index.js");const E=n=>n.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),K=n=>n.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),S=(n,t,l={})=>{if(n instanceof Element){const p=x(n.classList,t,l);p!==""&&(n.className=p),Object.keys(t).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const _=s.substring(2),u=_[0].toLowerCase()+_.substring(1);v(u)||A(n,u,t[s])}else n[s]=t[s],typeof t[s]==="string"&&n.setAttribute(K(s),t[s])})}},x=(n,t,l)=>{const p=t.className||t.class,s=l.className||l.class,_=h(n),u=h(p?p.split(" "):[]),O=h(s?s.split(" "):[]),b=[];return _.forEach(k=>{u.has(k)?(b.push(k),u.delete(k)):O.has(k)||b.push(k)}),u.forEach(k=>b.push(k)),b.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const v=n=>{if(typeof document=="undefined")return!0;{const t="on"+n;let l=t in document;if(!l){const p=document.createElement("div");p.setAttribute(t,"return;"),l=typeof p[t]=="function"}return l}},A=(n,t,l)=>{const p=n.__events||(n.__events={}),s=p[t];s&&n.removeEventListener(t,s),n.addEventListener(t,p[t]=function(u){l&&l.call(this,u)})},h=n=>{const t=new Map;return n.forEach(l=>t.set(l,l)),t},T=(n,t)=>{typeof n=="function"?n(t):n!=null&&(n.current=t)},y=(...n)=>t=>{n.forEach(l=>{T(l,t)})},I=(n,t)=>{const l=(p,s)=>c.createElement(n,w(N({},p),{forwardedRef:s}));return l.displayName=t,c.forwardRef(l)},o=(n,t,l,p)=>{p!==void 0&&p();const s=E(n),_=class extends c.Component{constructor(u){super(u),this.setComponentElRef=O=>{this.componentEl=O}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(u){S(this.componentEl,this.props,u)}render(){const F=this.props,{children:u,forwardedRef:O,style:b,className:k,ref:wo}=F,V=z(F,["children","forwardedRef","style","className","ref"]);let M=Object.keys(V).reduce((j,g)=>{const B=V[g];if(g.indexOf("on")===0&&g[2]===g[2].toUpperCase()){const R=g.substring(2).toLowerCase();typeof document!="undefined"&&v(R)&&(j[g]=B)}else{const R=typeof B;(R==="string"||R==="boolean"||R==="number")&&(j[K(g)]=B)}return j},{});l&&(M=l(this.props,M));const Ao=w(N({},M),{ref:y(O,this.setComponentElRef),style:b});return(0,c.createElement)(n,Ao,u)}static get displayName(){return s}};return t&&(_.contextType=t),I(_,s)},U=o("kol-abbr"),L=o("kol-accordion"),W=o("kol-alert"),D=o("kol-badge"),f=o("kol-breadcrumb"),i=o("kol-button"),d=o("kol-button-group"),m=null,Mo=null,Y=o("kol-card"),H=o("kol-details"),J=o("kol-form"),X=o("kol-heading"),$=o("kol-icon"),q=o("kol-icon-font-awesome"),oo=o("kol-icon-icofont"),to=o("kol-indented-text"),jo=null,no=o("kol-input-checkbox"),eo=o("kol-input-color"),so=o("kol-input-date"),ro=o("kol-input-email"),lo=o("kol-input-file"),ao=o("kol-input-number"),co=o("kol-input-password"),io=o("kol-input-radio"),po=o("kol-input-range"),uo=o("kol-input-text"),mo=o("kol-kolibri"),fo=o("kol-link"),Bo=null,_o=o("kol-link-group"),ko=o("kol-logo"),yo=o("kol-modal"),go=o("kol-nav"),Ko=o("kol-pagination"),bo=o("kol-progress"),Co=o("kol-select"),Eo=o("kol-skip-nav"),No=null,So=o("kol-spin"),vo=o("kol-symbol"),ho=o("kol-table"),Oo=o("kol-tabs"),Ro=o("kol-textarea"),To=o("kol-toast"),Po=o("kol-tooltip"),xo=o("kol-version")}}]);
