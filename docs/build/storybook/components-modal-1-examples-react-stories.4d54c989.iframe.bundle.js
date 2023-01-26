"use strict";var Tt=Object.defineProperty,Rt=Object.defineProperties;var It=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var Q=(i,a,n)=>a in i?Tt(i,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[a]=n,W=(i,a)=>{for(var n in a||(a={}))Z.call(a,n)&&Q(i,n,a[n]);if(T)for(var n of T(a))Y.call(a,n)&&Q(i,n,a[n]);return i},V=(i,a)=>Rt(i,It(a));var z=(i,a)=>{var n={};for(var s in i)Z.call(i,s)&&a.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&T)for(var s of T(i))a.indexOf(s)<0&&Y.call(i,s)&&(n[s]=i[s]);return n};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4233],{"./src/components/modal/1-examples/react.stories.tsx":(i,a,n)=>{n.r(a),n.d(a,{Standard:()=>_,default:()=>D});var s=n("./node_modules/react/index.js"),K=n("./node_modules/@public-ui/react/dist/index.mjs"),b=n("./src/components/modal/1-examples/autogen.configuration.ts"),k=Object.defineProperty,h=Object.defineProperties,R=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,A=(c,d,p)=>d in c?k(c,d,{enumerable:!0,configurable:!0,writable:!0,value:p}):c[d]=p,g=(c,d)=>{for(var p in d||(d={}))I.call(d,p)&&A(c,p,d[p]);if(C)for(var p of C(d))S.call(d,p)&&A(c,p,d[p]);return c},L=(c,d)=>h(c,R(d)),t=null,F={Standard:{startLoc:{col:24,line:22},endLoc:{col:1,line:77},startBody:{col:24,line:22},endBody:{col:1,line:77}}};const D=L(g({},b.g),{title:"React/Modal/Beispiele",component:K.Ud}),O=c=>s.createElement(K.ic,g({},c),c.children),P=c=>s.createElement(K.Ud,g({},c),c.children),w={},_=c=>{const[d,p]=(0,s.useState)(null);return s.createElement("div",null,s.createElement(P,L(g({_activeElement:d},c),{_on:{onClose:()=>{p(null)}}}),s.createElement("div",{style:{backgroundColor:"tomato",height:"100px",width:"100%",alignItems:"center",display:"grid",gap:".5em"}},s.createElement("div",{style:{color:"white",textAlign:"center"}},c._ariaLabel),s.createElement(O,{_label:"Schlie\xDFen",_on:{onClick:()=>{p(null)}},_variant:"danger",style:{margin:"auto"}}))),s.createElement(O,{_label:"\xD6ffnen",_on:{onClick:B=>{p(B==null?void 0:B.target)}}}))};_.args=g({},w),_.parameters=g({storySource:{source:`(props: { _ariaLabel: string; _width: string }) => {
	const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
	return (
		<div>
			<KolModal
				_activeElement={activeElement}
				{...props}
				_on={{
					onClose: () => {
						setActiveElement(null);
					},
				}}
			>
				<div
					style={{
						backgroundColor: 'tomato',
						height: '100px',
						width: '100%',
						alignItems: 'center',
						display: 'grid',
						gap: '.5em',
					}}
				>
					<div
						style={{
							color: 'white',
							textAlign: 'center',
						}}
					>
						{props._ariaLabel}
					</div>
					<KolButton
						_label="Schlie\xDFen"
						_on={{
							onClick: () => {
								setActiveElement(null);
							},
						}}
						_variant="danger"
						style={{
							margin: 'auto',
						}}
					></KolButton>
				</div>
			</KolModal>
			<KolButton
				_label="\xD6ffnen"
				_on={{
					onClick: (event: Event) => {
						setActiveElement(event?.target as HTMLElement);
					},
				}}
			></KolButton>
		</div>
	);
}`}},_.parameters);try{_.displayName="Standard",_.__docgenInfo={description:"",displayName:"Standard",props:{_ariaLabel:{defaultValue:null,description:"",name:"_ariaLabel",required:!0,type:{name:"string"}},_width:{defaultValue:null,description:"",name:"_width",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/modal/1-examples/react.stories.tsx#Standard"]={docgenInfo:_.__docgenInfo,name:"Standard",path:"src/components/modal/1-examples/react.stories.tsx#Standard"})}catch(c){}},"./src/components/modal/1-examples/autogen.configuration.ts":(i,a,n)=>{n.d(a,{g:()=>h});var s=n("./node_modules/@storybook/addon-jest/dist/esm/index.js"),K=n("./node_modules/@public-ui/components/jest-test-results.json"),b=n("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const k={_ariaLabel:{name:"Modal-Beschriftung",control:{type:"text"},type:{required:!0},defaultValue:"Ich bin ein Modal."},_width:{name:"Modal-Breite",control:{type:"select"},options:["10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"],type:{required:!0},defaultValue:"80%"}},h={decorators:[(0,s.x)({results:K})],parameters:{badges:[b.NZ.STABLE],jest:["modal.e2e.ts","modal.spec.ts","modal.spec.tsx"],status:{type:"bitv"}},argTypes:k}},"./node_modules/@public-ui/react/dist/index.mjs":(i,a,n)=>{n.d(a,{$o:()=>ft,CO:()=>At,CV:()=>et,CX:()=>rt,Er:()=>P,Gc:()=>B,HA:()=>$,Jl:()=>q,K5:()=>O,Lj:()=>at,MA:()=>vt,Np:()=>lt,Nv:()=>_t,O:()=>st,P:()=>bt,Q4:()=>Kt,QK:()=>gt,Qs:()=>xt,RZ:()=>D,T5:()=>F,TE:()=>nt,TQ:()=>ut,UD:()=>Mt,Ud:()=>yt,Vp:()=>St,Vs:()=>mt,WD:()=>pt,WR:()=>kt,Ze:()=>Lt,c2:()=>ct,cJ:()=>tt,ic:()=>_,is:()=>Ct,lo:()=>w,m5:()=>X,ox:()=>J,qq:()=>ht,r7:()=>Et,rW:()=>ot,sy:()=>dt,u_:()=>Ot,uz:()=>c,z5:()=>it});var s=n("./node_modules/react/index.js"),K=n("./node_modules/react-dom/index.js");const b=e=>e.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),k=e=>e.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),h=(e,o,r={})=>{if(e instanceof Element){const u=R(e.classList,o,r);u!==""&&(e.className=u),Object.keys(o).forEach(l=>{if(!(l==="children"||l==="style"||l==="ref"||l==="class"||l==="className"||l==="forwardedRef"))if(l.indexOf("on")===0&&l[2]===l[2].toUpperCase()){const f=l.substring(2),m=f[0].toLowerCase()+f.substring(1);C(m)||I(e,m,o[l])}else e[l]=o[l],typeof o[l]==="string"&&e.setAttribute(k(l),o[l])})}},R=(e,o,r)=>{const u=o.className||o.class,l=r.className||r.class,f=S(e),m=S(u?u.split(" "):[]),M=S(l?l.split(" "):[]),E=[];return f.forEach(y=>{m.has(y)?(E.push(y),m.delete(y)):M.has(y)||E.push(y)}),m.forEach(y=>E.push(y)),E.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const C=e=>{if(typeof document=="undefined")return!0;{const o="on"+e;let r=o in document;if(!r){const u=document.createElement("div");u.setAttribute(o,"return;"),r=typeof u[o]=="function"}return r}},I=(e,o,r)=>{const u=e.__events||(e.__events={}),l=u[o];l&&e.removeEventListener(o,l),e.addEventListener(o,u[o]=function(m){r&&r.call(this,m)})},S=e=>{const o=new Map;return e.forEach(r=>o.set(r,r)),o},A=(e,o)=>{typeof e=="function"?e(o):e!=null&&(e.current=o)},g=(...e)=>o=>{e.forEach(r=>{A(r,o)})},L=(e,o)=>{const r=(u,l)=>s.createElement(e,V(W({},u),{forwardedRef:l}));return r.displayName=o,s.forwardRef(r)},t=(e,o,r,u)=>{u!==void 0&&u();const l=b(e),f=class extends s.Component{constructor(m){super(m),this.setComponentElRef=M=>{this.componentEl=M}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(m){h(this.componentEl,this.props,m)}render(){const G=this.props,{children:m,forwardedRef:M,style:E,className:y,ref:jt}=G,H=z(G,["children","forwardedRef","style","className","ref"]);let j=Object.keys(H).reduce((N,v)=>{const U=H[v];if(v.indexOf("on")===0&&v[2]===v[2].toUpperCase()){const x=v.substring(2).toLowerCase();typeof document!="undefined"&&C(x)&&(N[v]=U)}else{const x=typeof U;(x==="string"||x==="boolean"||x==="number")&&(N[k(v)]=U)}return N},{});r&&(j=r(this.props,j));const Bt=V(W({},j),{ref:g(M,this.setComponentElRef),style:E});return(0,s.createElement)(e,Bt,m)}static get displayName(){return l}};return o&&(f.contextType=o),L(f,l)},F=t("kol-abbr"),D=t("kol-accordion"),O=t("kol-alert"),P=t("kol-badge"),w=t("kol-breadcrumb"),_=t("kol-button"),c=t("kol-button-group"),d=null,p=null,B=t("kol-card"),J=t("kol-details"),X=t("kol-form"),$=t("kol-heading"),q=t("kol-icon"),tt=t("kol-icon-font-awesome"),ot=t("kol-icon-icofont"),et=t("kol-indented-text"),Dt=null,nt=t("kol-input-checkbox"),lt=t("kol-input-color"),st=t("kol-input-date"),at=t("kol-input-email"),rt=t("kol-input-file"),ct=t("kol-input-number"),it=t("kol-input-password"),dt=t("kol-input-radio"),ut=t("kol-input-range"),pt=t("kol-input-text"),mt=t("kol-kolibri"),_t=t("kol-link"),Pt=null,ft=t("kol-link-group"),gt=t("kol-logo"),yt=t("kol-modal"),vt=t("kol-nav"),Kt=t("kol-pagination"),kt=t("kol-progress"),Et=t("kol-select"),bt=t("kol-skip-nav"),wt=null,ht=t("kol-spin"),Ct=t("kol-symbol"),St=t("kol-table"),Mt=t("kol-tabs"),xt=t("kol-textarea"),At=t("kol-toast"),Lt=t("kol-tooltip"),Ot=t("kol-version")}}]);
