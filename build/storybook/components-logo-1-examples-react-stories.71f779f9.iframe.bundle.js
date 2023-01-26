"use strict";var Mo=Object.defineProperty,To=Object.defineProperties;var wo=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var Q=(d,a,s)=>a in d?Mo(d,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[a]=s,U=(d,a)=>{for(var s in a||(a={}))J.call(a,s)&&Q(d,s,a[s]);if(w)for(var s of w(a))$.call(a,s)&&Q(d,s,a[s]);return d},Z=(d,a)=>To(d,wo(a));var H=(d,a)=>{var s={};for(var c in d)J.call(d,c)&&a.indexOf(c)<0&&(s[c]=d[c]);if(d!=null&&w)for(var c of w(d))a.indexOf(c)<0&&$.call(d,c)&&(s[c]=d[c]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2818],{"./src/components/logo/1-examples/react.stories.tsx":(d,a,s)=>{s.r(a),s.d(a,{Block:()=>k,Darstellungsvariante:()=>T,Inline:()=>f,Sizes:()=>b,Standard:()=>K,default:()=>P});var c=s("./node_modules/@public-ui/react/dist/index.mjs"),r=s("./node_modules/react/index.js"),C=s("./src/components/logo/1-examples/autogen.configuration.ts"),x=Object.defineProperty,E=Object.defineProperties,D=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,M=(l,u,_)=>u in l?x(l,u,{enumerable:!0,configurable:!0,writable:!0,value:_}):l[u]=_,m=(l,u)=>{for(var _ in u||(u={}))N.call(u,_)&&M(l,_,u[_]);if(I)for(var _ of I(u))R.call(u,_)&&M(l,_,u[_]);return l},j=(l,u)=>E(l,D(u)),o=null,W={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Block:{startLoc:{col:21,line:38},endLoc:{col:1,line:50},startBody:{col:21,line:38},endBody:{col:1,line:50}},Inline:{startLoc:{col:22,line:61},endLoc:{col:1,line:73},startBody:{col:22,line:61},endBody:{col:1,line:73}},Sizes:{startLoc:{col:21,line:84},endLoc:{col:1,line:108},startBody:{col:21,line:84},endBody:{col:1,line:108}},Darstellungsvariante:{startLoc:{col:36,line:114},endLoc:{col:1,line:129},startBody:{col:36,line:114},endBody:{col:1,line:129}}};const P=j(m({},C.$),{title:"React/Logo/Beispiele",component:c.QK}),y=l=>r.createElement(c.QK,m({},l),l.children),h={},K=l=>r.createElement("div",null,r.createElement(y,m({},l)));K.args=m({},h);const k=l=>r.createElement("div",null,r.createElement(y,{_org:"BMG",style:{display:"block",width:"200px"}}),"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.");k.args=m({},h),k.storyName="Block-Ausgabe";const f=l=>r.createElement("div",null,r.createElement(y,{_org:"BMG",style:{display:"inline",width:"200px"}}),"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.");f.args=m({},h),f.storyName="Inline-Ausgabe";const b=l=>r.createElement("div",null,r.createElement(y,{_org:"BReg",style:{display:"inline-block",width:"100px"}}),r.createElement(y,{_org:"BReg",style:{display:"inline-block",width:"200px"}}),r.createElement(y,{_org:"BReg",style:{display:"inline-block",width:"400px"}}));b.args=m({},h),b.storyName="Gr\xF6\xDFen";const T=()=>r.createElement("div",{style:{display:"grid",gap:"0.25em"}},r.createElement(y,{_org:"BReg",style:{width:"300px"}}),r.createElement(y,{_org:"BMF",style:{width:"300px"}}),r.createElement(y,{_org:"BMG",style:{width:"300px"}}),r.createElement("p",null,r.createElement(c.CV,null,'Im Folgenden wird ein "Zur\xFCck zur Startseite"-Link dargestellt:'),r.createElement("br",null),r.createElement(c.Nv,{_href:"https://itzbund.de","_use-case":"image","_aria-label":"Zur\xFCck zur Startseite des ITZBund"},r.createElement(y,{_org:"BMF",style:{display:"inline-block",width:"300px"}}))));K.parameters=m({storySource:{source:`(args: any) => (
	<div>
		<KolLogo {...args}></KolLogo>
	</div>
)`}},K.parameters),k.parameters=m({storySource:{source:`(args: any) => (
	<div>
		<KolLogo
			_org="BMG"
			style={{
				display: 'block',
				width: '200px',
			}}
		></KolLogo>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.
	</div>
)`}},k.parameters),f.parameters=m({storySource:{source:`(args: any) => (
	<div>
		<KolLogo
			_org="BMG"
			style={{
				display: 'inline',
				width: '200px',
			}}
		></KolLogo>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.
	</div>
)`}},f.parameters),b.parameters=m({storySource:{source:`(args: any) => (
	<div>
		<KolLogo
			_org="BReg"
			style={{
				display: 'inline-block',
				width: '100px',
			}}
		></KolLogo>
		<KolLogo
			_org="BReg"
			style={{
				display: 'inline-block',
				width: '200px',
			}}
		></KolLogo>
		<KolLogo
			_org="BReg"
			style={{
				display: 'inline-block',
				width: '400px',
			}}
		></KolLogo>
	</div>
)`}},b.parameters),T.parameters=m({storySource:{source:`() => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolLogo _org="BReg" style={{ width: '300px' }}></KolLogo>
			<KolLogo _org="BMF" style={{ width: '300px' }}></KolLogo>
			<KolLogo _org="BMG" style={{ width: '300px' }}></KolLogo>
			<p>
				<KolIndentedText>Im Folgenden wird ein "Zur\xFCck zur Startseite"-Link dargestellt:</KolIndentedText>
				<br />
				<KolLink _href="https://itzbund.de" _use-case="image" _aria-label="Zur\xFCck zur Startseite des ITZBund">
					<KolLogo _org="BMF" style={{ display: 'inline-block', width: '300px' }}></KolLogo>
				</KolLink>
			</p>
		</div>
	);
}`}},T.parameters);try{K.displayName="Standard",K.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/logo/1-examples/react.stories.tsx#Standard"]={docgenInfo:K.__docgenInfo,name:"Standard",path:"src/components/logo/1-examples/react.stories.tsx#Standard"})}catch(l){}try{k.displayName="Block",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Block",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/logo/1-examples/react.stories.tsx#Block"]={docgenInfo:k.__docgenInfo,name:"Block",path:"src/components/logo/1-examples/react.stories.tsx#Block"})}catch(l){}try{f.displayName="Inline",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Inline",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/logo/1-examples/react.stories.tsx#Inline"]={docgenInfo:f.__docgenInfo,name:"Inline",path:"src/components/logo/1-examples/react.stories.tsx#Inline"})}catch(l){}try{b.displayName="Sizes",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sizes",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/logo/1-examples/react.stories.tsx#Sizes"]={docgenInfo:b.__docgenInfo,name:"Sizes",path:"src/components/logo/1-examples/react.stories.tsx#Sizes"})}catch(l){}},"./src/components/logo/1-examples/autogen.configuration.ts":(d,a,s)=>{s.d(a,{$:()=>E});var c=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),r=s("./node_modules/@public-ui/components/jest-test-results.json"),C=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const x={_org:{name:"Abk\xFCrzung des Ministeriums",control:{type:"select"},options:["BReg","BMF","BMI","AA","BMWi","BMJV","BMAS","BMVg","BMEL","BMFSFJ","BMG","BMVI","BMU","BMBF","BMZ"],type:{required:!0},defaultValue:"BReg"}},E={decorators:[(0,c.x)({results:r})],parameters:{badges:[C.NZ.STABLE],jest:["logo.e2e.ts","logo.spec.ts","logo.spec.tsx"],status:{type:"bitv"}},argTypes:x}},"./node_modules/@public-ui/react/dist/index.mjs":(d,a,s)=>{s.d(a,{$o:()=>_o,CO:()=>Io,CV:()=>to,CX:()=>ao,Er:()=>h,Gc:()=>l,HA:()=>X,Jl:()=>q,K5:()=>y,Lj:()=>lo,MA:()=>Ko,Np:()=>no,Nv:()=>yo,O:()=>ro,P:()=>Bo,Q4:()=>bo,QK:()=>ko,Qs:()=>Eo,RZ:()=>P,T5:()=>W,TE:()=>so,TQ:()=>uo,UD:()=>Co,Ud:()=>fo,Vp:()=>vo,Vs:()=>go,WD:()=>mo,WR:()=>Lo,Ze:()=>Ro,c2:()=>io,cJ:()=>oo,ic:()=>k,is:()=>ho,lo:()=>K,m5:()=>_,ox:()=>u,qq:()=>xo,r7:()=>So,rW:()=>eo,sy:()=>po,u_:()=>Ao,uz:()=>f,z5:()=>co});var c=s("./node_modules/react/index.js"),r=s("./node_modules/react-dom/index.js");const C=t=>t.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),x=t=>t.replace(/([A-Z])/g,e=>`-${e[0].toLowerCase()}`),E=(t,e,i={})=>{if(t instanceof Element){const p=D(t.classList,e,i);p!==""&&(t.className=p),Object.keys(e).forEach(n=>{if(!(n==="children"||n==="style"||n==="ref"||n==="class"||n==="className"||n==="forwardedRef"))if(n.indexOf("on")===0&&n[2]===n[2].toUpperCase()){const L=n.substring(2),g=L[0].toLowerCase()+L.substring(1);I(g)||N(t,g,e[n])}else t[n]=e[n],typeof e[n]==="string"&&t.setAttribute(x(n),e[n])})}},D=(t,e,i)=>{const p=e.className||e.class,n=i.className||i.class,L=R(t),g=R(p?p.split(" "):[]),A=R(n?n.split(" "):[]),v=[];return L.forEach(S=>{g.has(S)?(v.push(S),g.delete(S)):A.has(S)||v.push(S)}),g.forEach(S=>v.push(S)),v.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const I=t=>{if(typeof document=="undefined")return!0;{const e="on"+t;let i=e in document;if(!i){const p=document.createElement("div");p.setAttribute(e,"return;"),i=typeof p[e]=="function"}return i}},N=(t,e,i)=>{const p=t.__events||(t.__events={}),n=p[e];n&&t.removeEventListener(e,n),t.addEventListener(e,p[e]=function(g){i&&i.call(this,g)})},R=t=>{const e=new Map;return t.forEach(i=>e.set(i,i)),e},M=(t,e)=>{typeof t=="function"?t(e):t!=null&&(t.current=e)},m=(...t)=>e=>{t.forEach(i=>{M(i,e)})},j=(t,e)=>{const i=(p,n)=>c.createElement(t,Z(U({},p),{forwardedRef:n}));return i.displayName=e,c.forwardRef(i)},o=(t,e,i,p)=>{p!==void 0&&p();const n=C(t),L=class extends c.Component{constructor(g){super(g),this.setComponentElRef=A=>{this.componentEl=A}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(g){E(this.componentEl,this.props,g)}render(){const Y=this.props,{children:g,forwardedRef:A,style:v,className:S,ref:Po}=Y,V=H(Y,["children","forwardedRef","style","className","ref"]);let F=Object.keys(V).reduce((z,B)=>{const G=V[B];if(B.indexOf("on")===0&&B[2]===B[2].toUpperCase()){const O=B.substring(2).toLowerCase();typeof document!="undefined"&&I(O)&&(z[B]=G)}else{const O=typeof G;(O==="string"||O==="boolean"||O==="number")&&(z[x(B)]=G)}return z},{});i&&(F=i(this.props,F));const Oo=Z(U({},F),{ref:m(A,this.setComponentElRef),style:v});return(0,c.createElement)(t,Oo,g)}static get displayName(){return n}};return e&&(L.contextType=e),j(L,n)},W=o("kol-abbr"),P=o("kol-accordion"),y=o("kol-alert"),h=o("kol-badge"),K=o("kol-breadcrumb"),k=o("kol-button"),f=o("kol-button-group"),b=null,T=null,l=o("kol-card"),u=o("kol-details"),_=o("kol-form"),X=o("kol-heading"),q=o("kol-icon"),oo=o("kol-icon-font-awesome"),eo=o("kol-icon-icofont"),to=o("kol-indented-text"),Do=null,so=o("kol-input-checkbox"),no=o("kol-input-color"),ro=o("kol-input-date"),lo=o("kol-input-email"),ao=o("kol-input-file"),io=o("kol-input-number"),co=o("kol-input-password"),po=o("kol-input-radio"),uo=o("kol-input-range"),mo=o("kol-input-text"),go=o("kol-kolibri"),yo=o("kol-link"),No=null,_o=o("kol-link-group"),ko=o("kol-logo"),fo=o("kol-modal"),Ko=o("kol-nav"),bo=o("kol-pagination"),Lo=o("kol-progress"),So=o("kol-select"),Bo=o("kol-skip-nav"),jo=null,xo=o("kol-spin"),ho=o("kol-symbol"),vo=o("kol-table"),Co=o("kol-tabs"),Eo=o("kol-textarea"),Io=o("kol-toast"),Ro=o("kol-tooltip"),Ao=o("kol-version")}}]);
