"use strict";var Me=Object.defineProperty,Be=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var ee=(s,a,i)=>a in s?Me(s,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[a]=i,Y=(s,a)=>{for(var i in a||(a={}))oe.call(a,i)&&ee(s,i,a[i]);if(R)for(var i of R(a))te.call(a,i)&&ee(s,i,a[i]);return s},W=(s,a)=>Be(s,Oe(a));var ne=(s,a)=>{var i={};for(var e in s)oe.call(s,e)&&a.indexOf(e)<0&&(i[e]=s[e]);if(s!=null&&R)for(var e of R(s))a.indexOf(e)<0&&te.call(s,e)&&(i[e]=s[e]);return i};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7444],{"./src/components/accordion/1-examples/autogen.wc.stories.tsx":(s,a,i)=>{i.r(a),i.d(a,{Alert:()=>_,Einzeln:()=>E,Geoeffnet:()=>k,Mehrere:()=>h,MitButton:()=>y,MitHeader:()=>v,Ueberschriften:()=>b,default:()=>H});var e=i("./node_modules/react/index.js"),M=i("./node_modules/@public-ui/react/dist/index.mjs"),T=i("./src/components/accordion/1-examples/autogen.configuration.ts"),A=Object.defineProperty,I=Object.defineProperties,z=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,B=(n,d,m)=>d in n?A(n,d,{enumerable:!0,configurable:!0,writable:!0,value:m}):n[d]=m,g=(n,d)=>{for(var m in d||(d={}))N.call(d,m)&&B(n,m,d[m]);if(D)for(var m of D(d))L.call(d,m)&&B(n,m,d[m]);return n},P=(n,d)=>I(n,z(d)),o=null,Q={Einzeln:{startLoc:{col:53,line:24},endLoc:{col:1,line:32},startBody:{col:53,line:24},endBody:{col:1,line:32}},Mehrere:{startLoc:{col:23,line:46},endLoc:{col:1,line:60},startBody:{col:23,line:46},endBody:{col:1,line:60}},Ueberschriften:{startLoc:{col:30,line:70},endLoc:{col:1,line:93},startBody:{col:30,line:70},endBody:{col:1,line:93}},Geoeffnet:{startLoc:{col:25,line:101},endLoc:{col:1,line:113},startBody:{col:25,line:101},endBody:{col:1,line:113}},MitHeader:{startLoc:{col:25,line:121},endLoc:{col:1,line:134},startBody:{col:25,line:121},endBody:{col:1,line:134}},MitButton:{startLoc:{col:25,line:140},endLoc:{col:1,line:202},startBody:{col:25,line:140},endBody:{col:1,line:202}},Alert:{startLoc:{col:21,line:208},endLoc:{col:1,line:232},startBody:{col:21,line:208},endBody:{col:1,line:232}}};const H=P(g({},T.$),{title:"Web Components/Accordion/Beispiele",component:M.RZ}),j=n=>({_heading:n._heading,_level:n._level,_open:n._open}),V=n=>React.createElement(MyComponent,g({},n),n.children),E=(n=>{const d=j(n);return e.createElement("kol-accordion",g({},d),e.createElement("div",{slot:"header"},n.header),e.createElement("div",{slot:"content"},n.content))}).bind({});E.args={_heading:"\xDCberschrift",content:"Inhalt des Accordions"};const h=n=>e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-accordion",{_heading:"\xDCberschrift Accordion Tab 1",_level:1},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 1")),e.createElement("kol-accordion",{_heading:"\xDCberschrift Accordion Tab 2",_level:1},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 2")),e.createElement("kol-accordion",{_heading:"\xDCberschrift Accordion Tab 3",_level:1},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 3")));h.args={header:"asdfdsf"};const b=n=>e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-accordion",{_heading:"\xDCberschrift Level 1",_level:1},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 1")),e.createElement("kol-accordion",{_heading:"\xDCberschrift Level 2",_level:2},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 2")),e.createElement("kol-accordion",{_heading:"\xDCberschrift Level 3",_level:3},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 3")),e.createElement("kol-accordion",{_heading:"\xDCberschrift Level 4",_level:4},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 4")),e.createElement("kol-accordion",{_heading:"\xDCberschrift Level 5",_level:5},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 5")),e.createElement("kol-accordion",{_heading:"\xDCberschrift Level 6",_level:6},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 6")));b.storyName="\xDCberschriften";const k=n=>e.createElement("div",null,e.createElement("kol-accordion",{_heading:"Accordion ge\xF6ffnet anzeigen",_level:1,_open:!0},e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.")));k.storyName="Ge\xF6ffnet";const v=n=>e.createElement("div",null,e.createElement("kol-accordion",{_heading:"Accordion ge\xF6ffnet anzeigen",_level:1,_open:!0},e.createElement("div",{slot:"header"},"Hier kann noch was in den Header"),e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt."))),y=n=>(setTimeout(()=>{document.querySelectorAll("kol-button").forEach(m=>{m._on={onClick:$=>{let q=m.id,O=document.querySelector("kol-accordion#acc"+q);O._open===!1?O._open=!0:O._open=!1}}})},1e3),e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-accordion",{id:"accbtn0",_heading:"Accordion 1",_level:1},e.createElement("div",{slot:"header"},e.createElement("kol-button",{id:"btn0",_label:"Bearbeiten",_variant:"ghost",style:{float:"right",fontSize:"70%",marginTop:"-2.3rem",marginRight:"0.5rem"}})),e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.")),e.createElement("kol-accordion",{id:"accbtn1",_heading:"Accordion 2",_level:1},e.createElement("div",{slot:"header"},e.createElement("kol-button",{id:"btn1",_label:"Bearbeiten",_variant:"ghost",style:{float:"right",fontSize:"70%",marginTop:"-2.3rem",marginRight:"0.5rem"}})),e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.")),e.createElement("kol-accordion",{id:"accbtn2",_heading:"Accordion 3",_level:1},e.createElement("div",{slot:"header"},e.createElement("kol-button",{id:"btn2",_label:"Bearbeiten",_variant:"ghost",style:{float:"right",fontSize:"70%",marginTop:"-2.3rem",marginRight:"0.5rem"}})),e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.")))),_=n=>e.createElement("div",null,e.createElement("kol-accordion",{_heading:"Accordion mit Alert-Button",_level:1},e.createElement("div",{className:"p-1",slot:"header"},"In den Accordion-Header kann auch nach was komplexeres eingef\xFCgt werden.",e.createElement("kol-button",{_icon:"icofont-ui-add",_label:"Hinzuf\xFCgen",_on:{onClick:()=>{alert("Hi, es wurde der Button Hinzuf\xFCgen angeklickt")}}})),e.createElement("p",{slot:"content"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, odit, accusamus id a officia neque omnis facere, corporis amet alias maiores! Laboriosam placeat omnis illo maxime laborum fugiat deserunt mollitia! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aperiam rem, doloremque cum, explicabo qui reiciendis minima sequi quidem et harum dolorum consequatur tempore id tempora provident quae consequuntur ab!")));_.storyName="Mit Alert-Button",E.parameters=g({storySource:{source:`(args: any) => {
	const props = clearProps(args);
	return (
		<kol-accordion {...props}>
			<div slot="header">{args.header}</div>
			<div slot="content">{args.content}</div>
		</kol-accordion>
	);
}`}},E.parameters),h.parameters=g({storySource:{source:`(args: any) => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-accordion _heading="\xDCberschrift Accordion Tab 1" _level={1}>
				<div slot="content">Inhalt Accordion Tab 1</div>
			</kol-accordion>
			<kol-accordion _heading="\xDCberschrift Accordion Tab 2" _level={1}>
				<div slot="content">Inhalt Accordion Tab 2</div>
			</kol-accordion>
			<kol-accordion _heading="\xDCberschrift Accordion Tab 3" _level={1}>
				<div slot="content">Inhalt Accordion Tab 3</div>
			</kol-accordion>
		</div>
	);
}`}},h.parameters),b.parameters=g({storySource:{source:`(args: any) => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-accordion _heading="\xDCberschrift Level 1" _level={1}>
				<div slot="content">Inhalt Accordion Tab 1</div>
			</kol-accordion>
			<kol-accordion _heading="\xDCberschrift Level 2" _level={2}>
				<div slot="content">Inhalt Accordion Tab 2</div>
			</kol-accordion>
			<kol-accordion _heading="\xDCberschrift Level 3" _level={3}>
				<div slot="content">Inhalt Accordion Tab 3</div>
			</kol-accordion>
			<kol-accordion _heading="\xDCberschrift Level 4" _level={4}>
				<div slot="content">Inhalt Accordion Tab 4</div>
			</kol-accordion>
			<kol-accordion _heading="\xDCberschrift Level 5" _level={5}>
				<div slot="content">Inhalt Accordion Tab 5</div>
			</kol-accordion>
			<kol-accordion _heading="\xDCberschrift Level 6" _level={6}>
				<div slot="content">Inhalt Accordion Tab 6</div>
			</kol-accordion>
		</div>
	);
}`}},b.parameters),k.parameters=g({storySource:{source:`(args: any) => {
	return (
		<div>
			<kol-accordion _heading="Accordion ge\xF6ffnet anzeigen" _level={1} _open>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</kol-accordion>
		</div>
	);
}`}},k.parameters),v.parameters=g({storySource:{source:`(args: any) => {
	return (
		<div>
			<kol-accordion _heading="Accordion ge\xF6ffnet anzeigen" _level={1} _open>
				<div slot="header">Hier kann noch was in den Header</div>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</kol-accordion>
		</div>
	);
}`}},v.parameters),y.parameters=g({storySource:{source:`(args: any) => {
	setTimeout(() => {
		let buttons = document.querySelectorAll('kol-button');
		buttons.forEach((button) => {
			button._on = {
				onClick: (event) => {
					let id = button.id;
					let acc = document.querySelector('kol-accordion#acc' + id) as HTMLElement;
					acc._open === false ? (acc._open = true) : (acc._open = false);
				},
			};
		});
	}, 1000);
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-accordion id="accbtn0" _heading="Accordion 1" _level={1}>
				<div slot="header">
					<kol-button
						id="btn0"
						_label="Bearbeiten"
						_variant="ghost"
						style={{ float: 'right', fontSize: '70%', marginTop: '-2.3rem', marginRight: '0.5rem' }}
					></kol-button>
				</div>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</kol-accordion>
			<kol-accordion id="accbtn1" _heading="Accordion 2" _level={1}>
				<div slot="header">
					<kol-button
						id="btn1"
						_label="Bearbeiten"
						_variant="ghost"
						style={{ float: 'right', fontSize: '70%', marginTop: '-2.3rem', marginRight: '0.5rem' }}
					></kol-button>
				</div>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</kol-accordion>
			<kol-accordion id="accbtn2" _heading="Accordion 3" _level={1}>
				<div slot="header">
					<kol-button
						id="btn2"
						_label="Bearbeiten"
						_variant="ghost"
						style={{ float: 'right', fontSize: '70%', marginTop: '-2.3rem', marginRight: '0.5rem' }}
					></kol-button>
				</div>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</kol-accordion>
		</div>
	);
}`}},y.parameters),_.parameters=g({storySource:{source:`(args: any) => {
	return (
		<div>
			<kol-accordion _heading="Accordion mit Alert-Button" _level={1}>
				<div className="p-1" slot="header">
					In den Accordion-Header kann auch nach was komplexeres eingef\xFCgt werden.
					<kol-button
						_icon="icofont-ui-add"
						_label="Hinzuf\xFCgen"
						_on={{
							onClick: () => {
								alert(\`Hi, es wurde der Button Hinzuf\xFCgen angeklickt\`);
							},
						}}
					></kol-button>
				</div>
				<p slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, odit, accusamus id a officia neque omnis facere, corporis amet alias maiores!
					Laboriosam placeat omnis illo maxime laborum fugiat deserunt mollitia! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aperiam rem,
					doloremque cum, explicabo qui reiciendis minima sequi quidem et harum dolorum consequatur tempore id tempora provident quae consequuntur ab!
				</p>
			</kol-accordion>
		</div>
	);
}`}},_.parameters);try{h.displayName="Mehrere",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Mehrere",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/autogen.wc.stories.tsx#Mehrere"]={docgenInfo:h.__docgenInfo,name:"Mehrere",path:"src/components/accordion/1-examples/autogen.wc.stories.tsx#Mehrere"})}catch(n){}try{b.displayName="Ueberschriften",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Ueberschriften",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/autogen.wc.stories.tsx#Ueberschriften"]={docgenInfo:b.__docgenInfo,name:"Ueberschriften",path:"src/components/accordion/1-examples/autogen.wc.stories.tsx#Ueberschriften"})}catch(n){}try{k.displayName="Geoeffnet",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Geoeffnet",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/autogen.wc.stories.tsx#Geoeffnet"]={docgenInfo:k.__docgenInfo,name:"Geoeffnet",path:"src/components/accordion/1-examples/autogen.wc.stories.tsx#Geoeffnet"})}catch(n){}try{v.displayName="MitHeader",v.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"MitHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/autogen.wc.stories.tsx#MitHeader"]={docgenInfo:v.__docgenInfo,name:"MitHeader",path:"src/components/accordion/1-examples/autogen.wc.stories.tsx#MitHeader"})}catch(n){}try{y.displayName="MitButton",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"MitButton",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/autogen.wc.stories.tsx#MitButton"]={docgenInfo:y.__docgenInfo,name:"MitButton",path:"src/components/accordion/1-examples/autogen.wc.stories.tsx#MitButton"})}catch(n){}try{_.displayName="Alert",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Alert",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/autogen.wc.stories.tsx#Alert"]={docgenInfo:_.__docgenInfo,name:"Alert",path:"src/components/accordion/1-examples/autogen.wc.stories.tsx#Alert"})}catch(n){}},"./src/components/accordion/1-examples/autogen.configuration.ts":(s,a,i)=>{i.d(a,{$:()=>I});var e=i("./node_modules/@storybook/addon-jest/dist/esm/index.js"),M=i("./node_modules/@public-ui/components/jest-test-results.json"),T=i("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const A={_heading:{name:"\xDCberschrift",control:{type:"text"},type:{required:!0}},_level:{name:"\xDCberschrift (h1 bis h6)",control:{type:"select"},options:[1,2,3,4,5,6],type:{required:!0}},_open:{name:"Aufgeklappt",control:{type:"boolean"}},header:{name:"Head-Inhalt",control:{type:"text"}},content:{name:"Body-Inhalt",control:{type:"text"}}},I={decorators:[(0,e.x)({results:M})],parameters:{badges:[T.NZ.STABLE],jest:["accordion.e2e.ts","accordion.spec.ts","accordion.spec.tsx"],status:{type:"bitv"}},argTypes:A}},"./node_modules/@public-ui/react/dist/index.mjs":(s,a,i)=>{i.d(a,{$o:()=>_e,CO:()=>De,CV:()=>q,CX:()=>le,Er:()=>V,Gc:()=>v,HA:()=>n,Jl:()=>d,K5:()=>j,Lj:()=>ae,MA:()=>ke,Np:()=>ie,Nv:()=>he,O:()=>ce,P:()=>xe,Q4:()=>ve,QK:()=>fe,Qs:()=>Ie,RZ:()=>H,T5:()=>Q,TE:()=>re,TQ:()=>me,UD:()=>Te,Ud:()=>be,Vp:()=>Se,Vs:()=>ge,WD:()=>ue,WR:()=>ye,Ze:()=>Le,c2:()=>se,cJ:()=>m,ic:()=>E,is:()=>Ee,lo:()=>Z,m5:()=>_,ox:()=>y,qq:()=>Ae,r7:()=>Ce,rW:()=>$,sy:()=>pe,u_:()=>Ke,uz:()=>h,z5:()=>de});var e=i("./node_modules/react/index.js"),M=i("./node_modules/react-dom/index.js");const T=r=>r.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),A=r=>r.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),I=(r,t,l={})=>{if(r instanceof Element){const p=z(r.classList,t,l);p!==""&&(r.className=p),Object.keys(t).forEach(c=>{if(!(c==="children"||c==="style"||c==="ref"||c==="class"||c==="className"||c==="forwardedRef"))if(c.indexOf("on")===0&&c[2]===c[2].toUpperCase()){const f=c.substring(2),u=f[0].toLowerCase()+f.substring(1);D(u)||N(r,u,t[c])}else r[c]=t[c],typeof t[c]==="string"&&r.setAttribute(A(c),t[c])})}},z=(r,t,l)=>{const p=t.className||t.class,c=l.className||l.class,f=L(r),u=L(p?p.split(" "):[]),K=L(c?c.split(" "):[]),S=[];return f.forEach(C=>{u.has(C)?(S.push(C),u.delete(C)):K.has(C)||S.push(C)}),u.forEach(C=>S.push(C)),S.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const D=r=>{if(typeof document=="undefined")return!0;{const t="on"+r;let l=t in document;if(!l){const p=document.createElement("div");p.setAttribute(t,"return;"),l=typeof p[t]=="function"}return l}},N=(r,t,l)=>{const p=r.__events||(r.__events={}),c=p[t];c&&r.removeEventListener(t,c),r.addEventListener(t,p[t]=function(u){l&&l.call(this,u)})},L=r=>{const t=new Map;return r.forEach(l=>t.set(l,l)),t},B=(r,t)=>{typeof r=="function"?r(t):r!=null&&(r.current=t)},g=(...r)=>t=>{r.forEach(l=>{B(l,t)})},P=(r,t)=>{const l=(p,c)=>e.createElement(r,W(Y({},p),{forwardedRef:c}));return l.displayName=t,e.forwardRef(l)},o=(r,t,l,p)=>{p!==void 0&&p();const c=T(r),f=class extends e.Component{constructor(u){super(u),this.setComponentElRef=K=>{this.componentEl=K}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(u){I(this.componentEl,this.props,u)}render(){const X=this.props,{children:u,forwardedRef:K,style:S,className:C,ref:Ne}=X,J=ne(X,["children","forwardedRef","style","className","ref"]);let U=Object.keys(J).reduce((F,x)=>{const G=J[x];if(x.indexOf("on")===0&&x[2]===x[2].toUpperCase()){const w=x.substring(2).toLowerCase();typeof document!="undefined"&&D(w)&&(F[x]=G)}else{const w=typeof G;(w==="string"||w==="boolean"||w==="number")&&(F[A(x)]=G)}return F},{});l&&(U=l(this.props,U));const we=W(Y({},U),{ref:g(K,this.setComponentElRef),style:S});return(0,e.createElement)(r,we,u)}static get displayName(){return c}};return t&&(f.contextType=t),P(f,c)},Q=o("kol-abbr"),H=o("kol-accordion"),j=o("kol-alert"),V=o("kol-badge"),Z=o("kol-breadcrumb"),E=o("kol-button"),h=o("kol-button-group"),b=null,k=null,v=o("kol-card"),y=o("kol-details"),_=o("kol-form"),n=o("kol-heading"),d=o("kol-icon"),m=o("kol-icon-font-awesome"),$=o("kol-icon-icofont"),q=o("kol-indented-text"),O=null,re=o("kol-input-checkbox"),ie=o("kol-input-color"),ce=o("kol-input-date"),ae=o("kol-input-email"),le=o("kol-input-file"),se=o("kol-input-number"),de=o("kol-input-password"),pe=o("kol-input-radio"),me=o("kol-input-range"),ue=o("kol-input-text"),ge=o("kol-kolibri"),he=o("kol-link"),Re=null,_e=o("kol-link-group"),fe=o("kol-logo"),be=o("kol-modal"),ke=o("kol-nav"),ve=o("kol-pagination"),ye=o("kol-progress"),Ce=o("kol-select"),xe=o("kol-skip-nav"),ze=null,Ae=o("kol-spin"),Ee=o("kol-symbol"),Se=o("kol-table"),Te=o("kol-tabs"),Ie=o("kol-textarea"),De=o("kol-toast"),Le=o("kol-tooltip"),Ke=o("kol-version")}}]);
