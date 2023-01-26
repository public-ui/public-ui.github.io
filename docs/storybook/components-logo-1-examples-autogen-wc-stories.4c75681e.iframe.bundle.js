"use strict";var Oo=Object.defineProperty,Mo=Object.defineProperties;var To=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var Q=(c,r,s)=>r in c?Oo(c,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[r]=s,G=(c,r)=>{for(var s in r||(r={}))J.call(r,s)&&Q(c,s,r[s]);if(M)for(var s of M(r))$.call(r,s)&&Q(c,s,r[s]);return c},U=(c,r)=>Mo(c,To(r));var H=(c,r)=>{var s={};for(var d in c)J.call(c,d)&&r.indexOf(d)<0&&(s[d]=c[d]);if(c!=null&&M)for(var d of M(c))r.indexOf(d)<0&&$.call(c,d)&&(s[d]=c[d]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4386],{"./src/components/logo/1-examples/autogen.wc.stories.tsx":(c,r,s)=>{s.r(r),s.d(r,{Block:()=>y,Darstellungsvariante:()=>O,Inline:()=>_,Sizes:()=>b,Standard:()=>f,default:()=>j});var d=s("./node_modules/@public-ui/react/dist/index.mjs"),a=s("./node_modules/react/index.js"),E=s("./src/components/logo/1-examples/autogen.configuration.ts"),h=Object.defineProperty,K=Object.defineProperties,T=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,A=(l,u,k)=>u in l?h(l,u,{enumerable:!0,configurable:!0,writable:!0,value:k}):l[u]=k,g=(l,u)=>{for(var k in u||(u={}))D.call(u,k)&&A(l,k,u[k]);if(L)for(var k of L(u))R.call(u,k)&&A(l,k,u[k]);return l},N=(l,u)=>K(l,T(u)),o=null,Z={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Block:{startLoc:{col:21,line:38},endLoc:{col:1,line:50},startBody:{col:21,line:38},endBody:{col:1,line:50}},Inline:{startLoc:{col:22,line:61},endLoc:{col:1,line:73},startBody:{col:22,line:61},endBody:{col:1,line:73}},Sizes:{startLoc:{col:21,line:84},endLoc:{col:1,line:108},startBody:{col:21,line:84},endBody:{col:1,line:108}},Darstellungsvariante:{startLoc:{col:36,line:114},endLoc:{col:1,line:129},startBody:{col:36,line:114},endBody:{col:1,line:129}}};const j=N(g({},E.$),{title:"Web Components/Logo/Beispiele",component:d.QK}),W=l=>React.createElement(MyComponent,g({},l),l.children),v={},f=l=>a.createElement("div",null,a.createElement("kol-logo",g({},l)));f.args=g({},v);const y=l=>a.createElement("div",null,a.createElement("kol-logo",{_org:"BMG",style:{display:"block",width:"200px"}}),"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.");y.args=g({},v),y.storyName="Block-Ausgabe";const _=l=>a.createElement("div",null,a.createElement("kol-logo",{_org:"BMG",style:{display:"inline",width:"200px"}}),"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.");_.args=g({},v),_.storyName="Inline-Ausgabe";const b=l=>a.createElement("div",null,a.createElement("kol-logo",{_org:"BReg",style:{display:"inline-block",width:"100px"}}),a.createElement("kol-logo",{_org:"BReg",style:{display:"inline-block",width:"200px"}}),a.createElement("kol-logo",{_org:"BReg",style:{display:"inline-block",width:"400px"}}));b.args=g({},v),b.storyName="Gr\xF6\xDFen";const O=()=>a.createElement("div",{style:{display:"grid",gap:"0.25em"}},a.createElement("kol-logo",{_org:"BReg",style:{width:"300px"}}),a.createElement("kol-logo",{_org:"BMF",style:{width:"300px"}}),a.createElement("kol-logo",{_org:"BMG",style:{width:"300px"}}),a.createElement("p",null,a.createElement("kol-indented-text",null,'Im Folgenden wird ein "Zur\xFCck zur Startseite"-Link dargestellt:'),a.createElement("br",null),a.createElement("kol-link",{_href:"https://itzbund.de","_use-case":"image","_aria-label":"Zur\xFCck zur Startseite des ITZBund"},a.createElement("kol-logo",{_org:"BMF",style:{display:"inline-block",width:"300px"}}))));f.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<kol-logo {...args}></kol-logo>
	</div>
)`}},f.parameters),y.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<kol-logo
			_org="BMG"
			style={{
				display: 'block',
				width: '200px',
			}}
		></kol-logo>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.
	</div>
)`}},y.parameters),_.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<kol-logo
			_org="BMG"
			style={{
				display: 'inline',
				width: '200px',
			}}
		></kol-logo>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.
	</div>
)`}},_.parameters),b.parameters=g({storySource:{source:`(args: any) => (
	<div>
		<kol-logo
			_org="BReg"
			style={{
				display: 'inline-block',
				width: '100px',
			}}
		></kol-logo>
		<kol-logo
			_org="BReg"
			style={{
				display: 'inline-block',
				width: '200px',
			}}
		></kol-logo>
		<kol-logo
			_org="BReg"
			style={{
				display: 'inline-block',
				width: '400px',
			}}
		></kol-logo>
	</div>
)`}},b.parameters),O.parameters=g({storySource:{source:`() => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-logo _org="BReg" style={{ width: '300px' }}></kol-logo>
			<kol-logo _org="BMF" style={{ width: '300px' }}></kol-logo>
			<kol-logo _org="BMG" style={{ width: '300px' }}></kol-logo>
			<p>
				<kol-indented-text>Im Folgenden wird ein "Zur\xFCck zur Startseite"-Link dargestellt:</kol-indented-text>
				<br />
				<kol-link _href="https://itzbund.de" _use-case="image" _aria-label="Zur\xFCck zur Startseite des ITZBund">
					<kol-logo _org="BMF" style={{ display: 'inline-block', width: '300px' }}></kol-logo>
				</kol-link>
			</p>
		</div>
	);
}`}},O.parameters);try{f.displayName="Standard",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/logo/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:f.__docgenInfo,name:"Standard",path:"src/components/logo/1-examples/autogen.wc.stories.tsx#Standard"})}catch(l){}try{y.displayName="Block",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Block",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/logo/1-examples/autogen.wc.stories.tsx#Block"]={docgenInfo:y.__docgenInfo,name:"Block",path:"src/components/logo/1-examples/autogen.wc.stories.tsx#Block"})}catch(l){}try{_.displayName="Inline",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Inline",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/logo/1-examples/autogen.wc.stories.tsx#Inline"]={docgenInfo:_.__docgenInfo,name:"Inline",path:"src/components/logo/1-examples/autogen.wc.stories.tsx#Inline"})}catch(l){}try{b.displayName="Sizes",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sizes",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/logo/1-examples/autogen.wc.stories.tsx#Sizes"]={docgenInfo:b.__docgenInfo,name:"Sizes",path:"src/components/logo/1-examples/autogen.wc.stories.tsx#Sizes"})}catch(l){}},"./src/components/logo/1-examples/autogen.configuration.ts":(c,r,s)=>{s.d(r,{$:()=>K});var d=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),a=s("./node_modules/@public-ui/components/jest-test-results.json"),E=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const h={_org:{name:"Abk\xFCrzung des Ministeriums",control:{type:"select"},options:["BReg","BMF","BMI","AA","BMWi","BMJV","BMAS","BMVg","BMEL","BMFSFJ","BMG","BMVI","BMU","BMBF","BMZ"],type:{required:!0},defaultValue:"BReg"}},K={decorators:[(0,d.x)({results:a})],parameters:{badges:[E.NZ.STABLE],jest:["logo.e2e.ts","logo.spec.ts","logo.spec.tsx"],status:{type:"bitv"}},argTypes:h}},"./node_modules/@public-ui/react/dist/index.mjs":(c,r,s)=>{s.d(r,{$o:()=>yo,CO:()=>Ro,CV:()=>to,CX:()=>ao,Er:()=>v,Gc:()=>l,HA:()=>X,Jl:()=>q,K5:()=>W,Lj:()=>ro,MA:()=>bo,Np:()=>no,Nv:()=>ko,O:()=>lo,P:()=>ho,Q4:()=>So,QK:()=>_o,Qs:()=>Lo,RZ:()=>j,T5:()=>Z,TE:()=>so,TQ:()=>uo,UD:()=>Ko,Ud:()=>fo,Vp:()=>Eo,Vs:()=>mo,WD:()=>go,WR:()=>Bo,Ze:()=>Io,c2:()=>io,cJ:()=>oo,ic:()=>y,is:()=>Co,lo:()=>f,m5:()=>k,ox:()=>u,qq:()=>vo,r7:()=>xo,rW:()=>eo,sy:()=>po,u_:()=>wo,uz:()=>_,z5:()=>co});var d=s("./node_modules/react/index.js"),a=s("./node_modules/react-dom/index.js");const E=t=>t.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),h=t=>t.replace(/([A-Z])/g,e=>`-${e[0].toLowerCase()}`),K=(t,e,i={})=>{if(t instanceof Element){const p=T(t.classList,e,i);p!==""&&(t.className=p),Object.keys(e).forEach(n=>{if(!(n==="children"||n==="style"||n==="ref"||n==="class"||n==="className"||n==="forwardedRef"))if(n.indexOf("on")===0&&n[2]===n[2].toUpperCase()){const S=n.substring(2),m=S[0].toLowerCase()+S.substring(1);L(m)||D(t,m,e[n])}else t[n]=e[n],typeof e[n]==="string"&&t.setAttribute(h(n),e[n])})}},T=(t,e,i)=>{const p=e.className||e.class,n=i.className||i.class,S=R(t),m=R(p?p.split(" "):[]),I=R(n?n.split(" "):[]),C=[];return S.forEach(B=>{m.has(B)?(C.push(B),m.delete(B)):I.has(B)||C.push(B)}),m.forEach(B=>C.push(B)),C.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const L=t=>{if(typeof document=="undefined")return!0;{const e="on"+t;let i=e in document;if(!i){const p=document.createElement("div");p.setAttribute(e,"return;"),i=typeof p[e]=="function"}return i}},D=(t,e,i)=>{const p=t.__events||(t.__events={}),n=p[e];n&&t.removeEventListener(e,n),t.addEventListener(e,p[e]=function(m){i&&i.call(this,m)})},R=t=>{const e=new Map;return t.forEach(i=>e.set(i,i)),e},A=(t,e)=>{typeof t=="function"?t(e):t!=null&&(t.current=e)},g=(...t)=>e=>{t.forEach(i=>{A(i,e)})},N=(t,e)=>{const i=(p,n)=>d.createElement(t,U(G({},p),{forwardedRef:n}));return i.displayName=e,d.forwardRef(i)},o=(t,e,i,p)=>{p!==void 0&&p();const n=E(t),S=class extends d.Component{constructor(m){super(m),this.setComponentElRef=I=>{this.componentEl=I}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(m){K(this.componentEl,this.props,m)}render(){const Y=this.props,{children:m,forwardedRef:I,style:C,className:B,ref:Po}=Y,V=H(Y,["children","forwardedRef","style","className","ref"]);let P=Object.keys(V).reduce((F,x)=>{const z=V[x];if(x.indexOf("on")===0&&x[2]===x[2].toUpperCase()){const w=x.substring(2).toLowerCase();typeof document!="undefined"&&L(w)&&(F[x]=z)}else{const w=typeof z;(w==="string"||w==="boolean"||w==="number")&&(F[h(x)]=z)}return F},{});i&&(P=i(this.props,P));const Ao=U(G({},P),{ref:g(I,this.setComponentElRef),style:C});return(0,d.createElement)(t,Ao,m)}static get displayName(){return n}};return e&&(S.contextType=e),N(S,n)},Z=o("kol-abbr"),j=o("kol-accordion"),W=o("kol-alert"),v=o("kol-badge"),f=o("kol-breadcrumb"),y=o("kol-button"),_=o("kol-button-group"),b=null,O=null,l=o("kol-card"),u=o("kol-details"),k=o("kol-form"),X=o("kol-heading"),q=o("kol-icon"),oo=o("kol-icon-font-awesome"),eo=o("kol-icon-icofont"),to=o("kol-indented-text"),Do=null,so=o("kol-input-checkbox"),no=o("kol-input-color"),lo=o("kol-input-date"),ro=o("kol-input-email"),ao=o("kol-input-file"),io=o("kol-input-number"),co=o("kol-input-password"),po=o("kol-input-radio"),uo=o("kol-input-range"),go=o("kol-input-text"),mo=o("kol-kolibri"),ko=o("kol-link"),No=null,yo=o("kol-link-group"),_o=o("kol-logo"),fo=o("kol-modal"),bo=o("kol-nav"),So=o("kol-pagination"),Bo=o("kol-progress"),xo=o("kol-select"),ho=o("kol-skip-nav"),jo=null,vo=o("kol-spin"),Co=o("kol-symbol"),Eo=o("kol-table"),Ko=o("kol-tabs"),Lo=o("kol-textarea"),Ro=o("kol-toast"),Io=o("kol-tooltip"),wo=o("kol-version")}}]);
