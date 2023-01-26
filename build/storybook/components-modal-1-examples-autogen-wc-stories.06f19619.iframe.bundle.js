"use strict";var Rt=Object.defineProperty,It=Object.defineProperties;var Bt=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var Q=(i,a,n)=>a in i?Rt(i,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[a]=n,N=(i,a)=>{for(var n in a||(a={}))Z.call(a,n)&&Q(i,n,a[n]);if(T)for(var n of T(a))Y.call(a,n)&&Q(i,n,a[n]);return i},U=(i,a)=>It(i,Bt(a));var z=(i,a)=>{var n={};for(var s in i)Z.call(i,s)&&a.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&T)for(var s of T(i))a.indexOf(s)<0&&Y.call(i,s)&&(n[s]=i[s]);return n};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7059],{"./src/components/modal/1-examples/autogen.wc.stories.tsx":(i,a,n)=>{n.r(a),n.d(a,{Standard:()=>_,default:()=>B});var s=n("./node_modules/react/index.js"),M=n("./node_modules/@public-ui/react/dist/index.mjs"),E=n("./src/components/modal/1-examples/autogen.configuration.ts"),b=Object.defineProperty,K=Object.defineProperties,R=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,A=(c,d,p)=>d in c?b(c,d,{enumerable:!0,configurable:!0,writable:!0,value:p}):c[d]=p,g=(c,d)=>{for(var p in d||(d={}))I.call(d,p)&&A(c,p,d[p]);if(h)for(var p of h(d))C.call(d,p)&&A(c,p,d[p]);return c},L=(c,d)=>K(c,R(d)),t=null,W={Standard:{startLoc:{col:24,line:22},endLoc:{col:1,line:77},startBody:{col:24,line:22},endBody:{col:1,line:77}}};const B=L(g({},E.g),{title:"Web Components/Modal/Beispiele",component:M.Ud}),V=c=>React.createElement(StoryButton,g({},c),c.children),F=c=>React.createElement(StoryModal,g({},c),c.children),D={},_=c=>{const[d,p]=(0,s.useState)(null);return s.createElement("div",null,s.createElement("kol-modal",L(g({"_active-element":d},c),{_on:{onClose:()=>{p(null)}}}),s.createElement("div",{style:{backgroundColor:"tomato",height:"100px",width:"100%",alignItems:"center",display:"grid",gap:".5em"}},s.createElement("div",{style:{color:"white",textAlign:"center"}},c._ariaLabel),s.createElement("kol-button",{_label:"Schlie\xDFen",_on:{onClick:()=>{p(null)}},_variant:"danger",style:{margin:"auto"}}))),s.createElement("kol-button",{_label:"\xD6ffnen",_on:{onClick:O=>{p(O==null?void 0:O.target)}}}))};_.args=g({},D),_.parameters=g({storySource:{source:`(props: { _ariaLabel: string; _width: string }) => {
	const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
	return (
		<div>
			<kol-modal
				_active-element={activeElement}
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
					<kol-button
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
					></kol-button>
				</div>
			</kol-modal>
			<kol-button
				_label="\xD6ffnen"
				_on={{
					onClick: (event: Event) => {
						setActiveElement(event?.target as HTMLElement);
					},
				}}
			></kol-button>
		</div>
	);
}`}},_.parameters);try{_.displayName="Standard",_.__docgenInfo={description:"",displayName:"Standard",props:{_ariaLabel:{defaultValue:null,description:"",name:"_ariaLabel",required:!0,type:{name:"string"}},_width:{defaultValue:null,description:"",name:"_width",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/modal/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:_.__docgenInfo,name:"Standard",path:"src/components/modal/1-examples/autogen.wc.stories.tsx#Standard"})}catch(c){}},"./src/components/modal/1-examples/autogen.configuration.ts":(i,a,n)=>{n.d(a,{g:()=>K});var s=n("./node_modules/@storybook/addon-jest/dist/esm/index.js"),M=n("./node_modules/@public-ui/components/jest-test-results.json"),E=n("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const b={_ariaLabel:{name:"Modal-Beschriftung",control:{type:"text"},type:{required:!0},defaultValue:"Ich bin ein Modal."},_width:{name:"Modal-Breite",control:{type:"select"},options:["10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"],type:{required:!0},defaultValue:"80%"}},K={decorators:[(0,s.x)({results:M})],parameters:{badges:[E.NZ.STABLE],jest:["modal.e2e.ts","modal.spec.ts","modal.spec.tsx"],status:{type:"bitv"}},argTypes:b}},"./node_modules/@public-ui/react/dist/index.mjs":(i,a,n)=>{n.d(a,{$o:()=>ft,CO:()=>At,CV:()=>et,CX:()=>rt,Er:()=>F,Gc:()=>O,HA:()=>$,Jl:()=>q,K5:()=>V,Lj:()=>at,MA:()=>yt,Np:()=>lt,Nv:()=>_t,O:()=>st,P:()=>Kt,Q4:()=>bt,QK:()=>gt,Qs:()=>Mt,RZ:()=>B,T5:()=>W,TE:()=>nt,TQ:()=>ut,UD:()=>xt,Ud:()=>kt,Vp:()=>St,Vs:()=>mt,WD:()=>pt,WR:()=>vt,Ze:()=>Lt,c2:()=>ct,cJ:()=>tt,ic:()=>_,is:()=>Ct,lo:()=>D,m5:()=>X,ox:()=>J,qq:()=>ht,r7:()=>Et,rW:()=>ot,sy:()=>dt,u_:()=>Ot,uz:()=>c,z5:()=>it});var s=n("./node_modules/react/index.js"),M=n("./node_modules/react-dom/index.js");const E=e=>e.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),b=e=>e.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),K=(e,o,r={})=>{if(e instanceof Element){const u=R(e.classList,o,r);u!==""&&(e.className=u),Object.keys(o).forEach(l=>{if(!(l==="children"||l==="style"||l==="ref"||l==="class"||l==="className"||l==="forwardedRef"))if(l.indexOf("on")===0&&l[2]===l[2].toUpperCase()){const f=l.substring(2),m=f[0].toLowerCase()+f.substring(1);h(m)||I(e,m,o[l])}else e[l]=o[l],typeof o[l]==="string"&&e.setAttribute(b(l),o[l])})}},R=(e,o,r)=>{const u=o.className||o.class,l=r.className||r.class,f=C(e),m=C(u?u.split(" "):[]),S=C(l?l.split(" "):[]),v=[];return f.forEach(k=>{m.has(k)?(v.push(k),m.delete(k)):S.has(k)||v.push(k)}),m.forEach(k=>v.push(k)),v.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const h=e=>{if(typeof document=="undefined")return!0;{const o="on"+e;let r=o in document;if(!r){const u=document.createElement("div");u.setAttribute(o,"return;"),r=typeof u[o]=="function"}return r}},I=(e,o,r)=>{const u=e.__events||(e.__events={}),l=u[o];l&&e.removeEventListener(o,l),e.addEventListener(o,u[o]=function(m){r&&r.call(this,m)})},C=e=>{const o=new Map;return e.forEach(r=>o.set(r,r)),o},A=(e,o)=>{typeof e=="function"?e(o):e!=null&&(e.current=o)},g=(...e)=>o=>{e.forEach(r=>{A(r,o)})},L=(e,o)=>{const r=(u,l)=>s.createElement(e,U(N({},u),{forwardedRef:l}));return r.displayName=o,s.forwardRef(r)},t=(e,o,r,u)=>{u!==void 0&&u();const l=E(e),f=class extends s.Component{constructor(m){super(m),this.setComponentElRef=S=>{this.componentEl=S}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(m){K(this.componentEl,this.props,m)}render(){const G=this.props,{children:m,forwardedRef:S,style:v,className:k,ref:jt}=G,H=z(G,["children","forwardedRef","style","className","ref"]);let P=Object.keys(H).reduce((w,y)=>{const j=H[y];if(y.indexOf("on")===0&&y[2]===y[2].toUpperCase()){const x=y.substring(2).toLowerCase();typeof document!="undefined"&&h(x)&&(w[y]=j)}else{const x=typeof j;(x==="string"||x==="boolean"||x==="number")&&(w[b(y)]=j)}return w},{});r&&(P=r(this.props,P));const Tt=U(N({},P),{ref:g(S,this.setComponentElRef),style:v});return(0,s.createElement)(e,Tt,m)}static get displayName(){return l}};return o&&(f.contextType=o),L(f,l)},W=t("kol-abbr"),B=t("kol-accordion"),V=t("kol-alert"),F=t("kol-badge"),D=t("kol-breadcrumb"),_=t("kol-button"),c=t("kol-button-group"),d=null,p=null,O=t("kol-card"),J=t("kol-details"),X=t("kol-form"),$=t("kol-heading"),q=t("kol-icon"),tt=t("kol-icon-font-awesome"),ot=t("kol-icon-icofont"),et=t("kol-indented-text"),Dt=null,nt=t("kol-input-checkbox"),lt=t("kol-input-color"),st=t("kol-input-date"),at=t("kol-input-email"),rt=t("kol-input-file"),ct=t("kol-input-number"),it=t("kol-input-password"),dt=t("kol-input-radio"),ut=t("kol-input-range"),pt=t("kol-input-text"),mt=t("kol-kolibri"),_t=t("kol-link"),Pt=null,ft=t("kol-link-group"),gt=t("kol-logo"),kt=t("kol-modal"),yt=t("kol-nav"),bt=t("kol-pagination"),vt=t("kol-progress"),Et=t("kol-select"),Kt=t("kol-skip-nav"),wt=null,ht=t("kol-spin"),Ct=t("kol-symbol"),St=t("kol-table"),xt=t("kol-tabs"),Mt=t("kol-textarea"),At=t("kol-toast"),Lt=t("kol-tooltip"),Ot=t("kol-version")}}]);
