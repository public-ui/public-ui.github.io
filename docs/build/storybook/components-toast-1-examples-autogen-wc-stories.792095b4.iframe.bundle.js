"use strict";var Lo=Object.defineProperty,jo=Object.defineProperties;var Do=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var G=(i,c,s)=>c in i?Lo(i,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[c]=s,P=(i,c)=>{for(var s in c||(c={}))Q.call(c,s)&&G(i,s,c[s]);if(D)for(var s of D(c))Z.call(c,s)&&G(i,s,c[s]);return i},U=(i,c)=>jo(i,Do(c));var J=(i,c)=>{var s={};for(var d in i)Q.call(i,d)&&c.indexOf(d)<0&&(s[d]=i[d]);if(i!=null&&D)for(var d of D(i))c.indexOf(d)<0&&Z.call(i,d)&&(s[d]=i[d]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7416],{"./src/components/toast/1-examples/autogen.wc.stories.tsx":(i,c,s)=>{s.r(c),s.d(c,{Error:()=>f,Info:()=>S,Standard:()=>k,Success:()=>y,Warning:()=>b,default:()=>q});var d=s("./node_modules/@public-ui/react/dist/index.mjs"),p=s("./node_modules/react/index.js"),K=s("./src/components/toast/1-examples/autogen.configuration.ts"),v=Object.defineProperty,O=Object.defineProperties,B=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,j=(n,r,m)=>r in n?v(n,r,{enumerable:!0,configurable:!0,writable:!0,value:m}):n[r]=m,u=(n,r)=>{for(var m in r||(r={}))M.call(r,m)&&j(n,m,r[m]);if(I)for(var m of I(r))R.call(r,m)&&j(n,m,r[m]);return n},C=(n,r)=>O(n,B(r)),o=null,Y={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Success:{startLoc:{col:23,line:38},endLoc:{col:1,line:55},startBody:{col:23,line:38},endBody:{col:1,line:55}},Error:{startLoc:{col:21,line:70},endLoc:{col:1,line:87},startBody:{col:21,line:70},endBody:{col:1,line:87}},Info:{startLoc:{col:20,line:101},endLoc:{col:1,line:118},startBody:{col:20,line:101},endBody:{col:1,line:118}},Warning:{startLoc:{col:23,line:132},endLoc:{col:1,line:149},startBody:{col:23,line:132},endBody:{col:1,line:149}}};const q=C(u({},K.H),{title:"Web Components/Toast/Beispiele",component:d.CO}),V=n=>React.createElement(MyComponent,u({},n),n.children),E={},k=n=>p.createElement("div",null,p.createElement("kol-toast",u({},n)));k.args=u({},E);const y=n=>(setTimeout(()=>{let r=document.querySelector("#showSuccess");r&&(r._on={onClick:m=>{document.querySelector("#success")._show=!0}})},500),p.createElement("div",null,p.createElement("kol-toast",u({id:"success"},n)),p.createElement("kol-button",{id:"showSuccess",_label:"Success-Toast-Message anzeigen",_cta:"secondary"})));y.args=C(u({},E),{_heading:"The quick brown fox jumps over the lazy dog.",_text:"The quick brown fox jumps over the lazy dog.",_type:"success",_show:!0}),y.storyName="Success-Toast";const f=n=>(setTimeout(()=>{let r=document.querySelector("#showError");r&&(r._on={onClick:m=>{document.querySelector("#error")._show=!0}})},500),p.createElement("div",null,p.createElement("kol-toast",u({id:"error"},n)),p.createElement("kol-button",{id:"showError",_label:"Error-Toast-Message anzeigen",_cta:"secondary"})));f.args=C(u({},E),{_heading:"The quick brown fox jumps over the lazy dog.",_text:"The quick brown fox jumps over the lazy dog.",_type:"error"}),f.storyName="Error-Toast";const S=n=>(setTimeout(()=>{let r=document.querySelector("#showInfo");r&&(r._on={onClick:m=>{document.querySelector("#info")._show=!0}})},500),p.createElement("div",null,p.createElement("kol-toast",u({id:"info"},n)),p.createElement("kol-button",{id:"showInfo",_label:"Info-Toast-Message anzeigen",_cta:"secondary"})));S.args=C(u({},E),{_heading:"The quick brown fox jumps over the lazy dog.",_text:"The quick brown fox jumps over the lazy dog.",_type:"info"}),S.storyName="Info-Toast";const b=n=>(setTimeout(()=>{let r=document.querySelector("#showWarning");r&&(r._on={onClick:m=>{document.querySelector("#warning")._show=!0}})},500),p.createElement("div",null,p.createElement("kol-toast",u({id:"warning"},n)),p.createElement("kol-button",{id:"showWarning",_label:"Warning-Toast-Message anzeigen",_cta:"secondary"})));b.args=C(u({},E),{_heading:"The quick brown fox jumps over the lazy dog.",_text:"The quick brown fox jumps over the lazy dog.",_type:"warning"}),b.storyName="Warning-Toast",k.parameters=u({storySource:{source:`(args: any) => (
	<div>
		<kol-toast {...args}></kol-toast>
	</div>
)`}},k.parameters),y.parameters=u({storySource:{source:`(args: any) => {
	setTimeout(() => {
		let buttonSuccess = document.querySelector('#showSuccess');
		if (buttonSuccess) {
			buttonSuccess._on = {
				onClick: (event) => {
					document.querySelector('#success')._show = true;
				},
			};
		}
	}, 500);
	return (
		<div>
			<kol-toast id="success" {...args}></kol-toast>
			<kol-button id="showSuccess" _label="Success-Toast-Message anzeigen" _cta="secondary"></kol-button>
		</div>
	);
}`}},y.parameters),f.parameters=u({storySource:{source:`(args: any) => {
	setTimeout(() => {
		let buttonSuccess = document.querySelector('#showError');
		if (buttonSuccess) {
			buttonSuccess._on = {
				onClick: (event) => {
					document.querySelector('#error')._show = true;
				},
			};
		}
	}, 500);
	return (
		<div>
			<kol-toast id="error" {...args}></kol-toast>
			<kol-button id="showError" _label="Error-Toast-Message anzeigen" _cta="secondary"></kol-button>
		</div>
	);
}`}},f.parameters),S.parameters=u({storySource:{source:`(args: any) => {
	setTimeout(() => {
		let buttonSuccess = document.querySelector('#showInfo');
		if (buttonSuccess) {
			buttonSuccess._on = {
				onClick: (event) => {
					document.querySelector('#info')._show = true;
				},
			};
		}
	}, 500);
	return (
		<div>
			<kol-toast id="info" {...args}></kol-toast>
			<kol-button id="showInfo" _label="Info-Toast-Message anzeigen" _cta="secondary"></kol-button>
		</div>
	);
}`}},S.parameters),b.parameters=u({storySource:{source:`(args: any) => {
	setTimeout(() => {
		let buttonSuccess = document.querySelector('#showWarning');
		if (buttonSuccess) {
			buttonSuccess._on = {
				onClick: (event) => {
					document.querySelector('#warning')._show = true;
				},
			};
		}
	}, 500);
	return (
		<div>
			<kol-toast id="warning" {...args}></kol-toast>
			<kol-button id="showWarning" _label="Warning-Toast-Message anzeigen" _cta="secondary"></kol-button>
		</div>
	);
}`}},b.parameters);try{k.displayName="Standard",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/toast/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:k.__docgenInfo,name:"Standard",path:"src/components/toast/1-examples/autogen.wc.stories.tsx#Standard"})}catch(n){}try{y.displayName="Success",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Success",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/toast/1-examples/autogen.wc.stories.tsx#Success"]={docgenInfo:y.__docgenInfo,name:"Success",path:"src/components/toast/1-examples/autogen.wc.stories.tsx#Success"})}catch(n){}try{f.displayName="Error",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Error",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/toast/1-examples/autogen.wc.stories.tsx#Error"]={docgenInfo:f.__docgenInfo,name:"Error",path:"src/components/toast/1-examples/autogen.wc.stories.tsx#Error"})}catch(n){}try{S.displayName="Info",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Info",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/toast/1-examples/autogen.wc.stories.tsx#Info"]={docgenInfo:S.__docgenInfo,name:"Info",path:"src/components/toast/1-examples/autogen.wc.stories.tsx#Info"})}catch(n){}try{b.displayName="Warning",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Warning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/toast/1-examples/autogen.wc.stories.tsx#Warning"]={docgenInfo:b.__docgenInfo,name:"Warning",path:"src/components/toast/1-examples/autogen.wc.stories.tsx#Warning"})}catch(n){}},"./src/components/toast/1-examples/autogen.configuration.ts":(i,c,s)=>{s.d(c,{H:()=>O});var d=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),p=s("./node_modules/@public-ui/components/jest-test-results.json"),K=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const v={_type:{name:"Typ",control:{type:"select"},options:["success","error","info","warning"],type:{required:!0},defaultValue:"success"},_level:{name:"Level",control:{type:"select"},options:[1,2,3,4,5,6],type:{required:!0},defaultValue:1},_heading:{name:"\xDCberschrift",control:{type:"text",required:!0},defaultValue:"\xDCberschrift"},_showDuration:{name:"Anzeigedauer",control:{type:"text",required:!0},defaultValue:"5000"},content:{name:"Text",control:{type:"text"},defaultValue:"Hier kann man einen beliebigen HTML-Inhalt einf\xFCgen."}},O={decorators:[(0,d.x)({results:p})],parameters:{badges:[K.NZ.STABLE],jest:["toast.e2e.ts","toast.spec.ts","toast.spec.tsx"],status:{type:"bitv"}},argTypes:v}},"./node_modules/@public-ui/react/dist/index.mjs":(i,c,s)=>{s.d(c,{$o:()=>yo,CO:()=>Oo,CV:()=>to,CX:()=>co,Er:()=>E,Gc:()=>n,HA:()=>X,Jl:()=>$,K5:()=>V,Lj:()=>ao,MA:()=>So,Np:()=>no,Nv:()=>go,O:()=>ro,P:()=>Co,Q4:()=>bo,QK:()=>fo,Qs:()=>Ko,RZ:()=>q,T5:()=>Y,TE:()=>so,TQ:()=>po,UD:()=>xo,Ud:()=>ko,Vp:()=>vo,Vs:()=>_o,WD:()=>mo,WR:()=>ho,Ze:()=>Io,c2:()=>lo,cJ:()=>oo,ic:()=>y,is:()=>wo,lo:()=>k,m5:()=>m,ox:()=>r,qq:()=>Eo,r7:()=>To,rW:()=>eo,sy:()=>uo,u_:()=>Ro,uz:()=>f,z5:()=>io});var d=s("./node_modules/react/index.js"),p=s("./node_modules/react-dom/index.js");const K=t=>t.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),v=t=>t.replace(/([A-Z])/g,e=>`-${e[0].toLowerCase()}`),O=(t,e,l={})=>{if(t instanceof Element){const _=B(t.classList,e,l);_!==""&&(t.className=_),Object.keys(e).forEach(a=>{if(!(a==="children"||a==="style"||a==="ref"||a==="class"||a==="className"||a==="forwardedRef"))if(a.indexOf("on")===0&&a[2]===a[2].toUpperCase()){const h=a.substring(2),g=h[0].toLowerCase()+h.substring(1);I(g)||M(t,g,e[a])}else t[a]=e[a],typeof e[a]==="string"&&t.setAttribute(v(a),e[a])})}},B=(t,e,l)=>{const _=e.className||e.class,a=l.className||l.class,h=R(t),g=R(_?_.split(" "):[]),A=R(a?a.split(" "):[]),x=[];return h.forEach(T=>{g.has(T)?(x.push(T),g.delete(T)):A.has(T)||x.push(T)}),g.forEach(T=>x.push(T)),x.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const I=t=>{if(typeof document=="undefined")return!0;{const e="on"+t;let l=e in document;if(!l){const _=document.createElement("div");_.setAttribute(e,"return;"),l=typeof _[e]=="function"}return l}},M=(t,e,l)=>{const _=t.__events||(t.__events={}),a=_[e];a&&t.removeEventListener(e,a),t.addEventListener(e,_[e]=function(g){l&&l.call(this,g)})},R=t=>{const e=new Map;return t.forEach(l=>e.set(l,l)),e},j=(t,e)=>{typeof t=="function"?t(e):t!=null&&(t.current=e)},u=(...t)=>e=>{t.forEach(l=>{j(l,e)})},C=(t,e)=>{const l=(_,a)=>d.createElement(t,U(P({},_),{forwardedRef:a}));return l.displayName=e,d.forwardRef(l)},o=(t,e,l,_)=>{_!==void 0&&_();const a=K(t),h=class extends d.Component{constructor(g){super(g),this.setComponentElRef=A=>{this.componentEl=A}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(g){O(this.componentEl,this.props,g)}render(){const F=this.props,{children:g,forwardedRef:A,style:x,className:T,ref:No}=F,H=J(F,["children","forwardedRef","style","className","ref"]);let N=Object.keys(H).reduce((W,w)=>{const z=H[w];if(w.indexOf("on")===0&&w[2]===w[2].toUpperCase()){const L=w.substring(2).toLowerCase();typeof document!="undefined"&&I(L)&&(W[w]=z)}else{const L=typeof z;(L==="string"||L==="boolean"||L==="number")&&(W[v(w)]=z)}return W},{});l&&(N=l(this.props,N));const Ao=U(P({},N),{ref:u(A,this.setComponentElRef),style:x});return(0,d.createElement)(t,Ao,g)}static get displayName(){return a}};return e&&(h.contextType=e),C(h,a)},Y=o("kol-abbr"),q=o("kol-accordion"),V=o("kol-alert"),E=o("kol-badge"),k=o("kol-breadcrumb"),y=o("kol-button"),f=o("kol-button-group"),S=null,b=null,n=o("kol-card"),r=o("kol-details"),m=o("kol-form"),X=o("kol-heading"),$=o("kol-icon"),oo=o("kol-icon-font-awesome"),eo=o("kol-icon-icofont"),to=o("kol-indented-text"),Bo=null,so=o("kol-input-checkbox"),no=o("kol-input-color"),ro=o("kol-input-date"),ao=o("kol-input-email"),co=o("kol-input-file"),lo=o("kol-input-number"),io=o("kol-input-password"),uo=o("kol-input-radio"),po=o("kol-input-range"),mo=o("kol-input-text"),_o=o("kol-kolibri"),go=o("kol-link"),Mo=null,yo=o("kol-link-group"),fo=o("kol-logo"),ko=o("kol-modal"),So=o("kol-nav"),bo=o("kol-pagination"),ho=o("kol-progress"),To=o("kol-select"),Co=o("kol-skip-nav"),qo=null,Eo=o("kol-spin"),wo=o("kol-symbol"),vo=o("kol-table"),xo=o("kol-tabs"),Ko=o("kol-textarea"),Oo=o("kol-toast"),Io=o("kol-tooltip"),Ro=o("kol-version")}}]);
