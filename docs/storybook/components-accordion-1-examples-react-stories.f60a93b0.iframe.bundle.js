"use strict";var Me=Object.defineProperty,Oe=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var ee=(s,a,i)=>a in s?Me(s,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[a]=i,W=(s,a)=>{for(var i in a||(a={}))te.call(a,i)&&ee(s,i,a[i]);if(z)for(var i of z(a))oe.call(a,i)&&ee(s,i,a[i]);return s},Q=(s,a)=>Oe(s,Re(a));var ne=(s,a)=>{var i={};for(var e in s)te.call(s,e)&&a.indexOf(e)<0&&(i[e]=s[e]);if(s!=null&&z)for(var e of z(s))a.indexOf(e)<0&&oe.call(s,e)&&(i[e]=s[e]);return i};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8022],{"./src/components/accordion/1-examples/react.stories.tsx":(s,a,i)=>{i.r(a),i.d(a,{Alert:()=>v,Einzeln:()=>S,Geoeffnet:()=>A,Mehrere:()=>f,MitButton:()=>K,MitHeader:()=>k,Ueberschriften:()=>y,default:()=>j});var e=i("./node_modules/react/index.js"),g=i("./node_modules/@public-ui/react/dist/index.mjs"),I=i("./src/components/accordion/1-examples/autogen.configuration.ts"),E=Object.defineProperty,D=Object.defineProperties,N=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,R=(n,p,u)=>p in n?E(n,p,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[p]=u,_=(n,p)=>{for(var u in p||(p={}))P.call(p,u)&&R(n,u,p[u]);if(L)for(var u of L(p))B.call(p,u)&&R(n,u,p[u]);return n},H=(n,p)=>D(n,N(p)),t=null,Z={Einzeln:{startLoc:{col:53,line:24},endLoc:{col:1,line:32},startBody:{col:53,line:24},endBody:{col:1,line:32}},Mehrere:{startLoc:{col:23,line:46},endLoc:{col:1,line:60},startBody:{col:23,line:46},endBody:{col:1,line:60}},Ueberschriften:{startLoc:{col:30,line:70},endLoc:{col:1,line:93},startBody:{col:30,line:70},endBody:{col:1,line:93}},Geoeffnet:{startLoc:{col:25,line:101},endLoc:{col:1,line:113},startBody:{col:25,line:101},endBody:{col:1,line:113}},MitHeader:{startLoc:{col:25,line:121},endLoc:{col:1,line:134},startBody:{col:25,line:121},endBody:{col:1,line:134}},MitButton:{startLoc:{col:25,line:140},endLoc:{col:1,line:202},startBody:{col:25,line:140},endBody:{col:1,line:202}},Alert:{startLoc:{col:21,line:208},endLoc:{col:1,line:232},startBody:{col:21,line:208},endBody:{col:1,line:232}}};const j=H(_({},I.$),{title:"React/Accordion/Beispiele",component:g.RZ}),q=n=>({_heading:n._heading,_level:n._level,_open:n._open}),d=n=>e.createElement(g.RZ,_({},n),n.children),S=(n=>{const p=q(n);return e.createElement(d,_({},p),e.createElement("div",{slot:"header"},n.header),e.createElement("div",{slot:"content"},n.content))}).bind({});S.args={_heading:"\xDCberschrift",content:"Inhalt des Accordions"};const f=n=>e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(d,{_heading:"\xDCberschrift Accordion Tab 1",_level:1},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 1")),e.createElement(d,{_heading:"\xDCberschrift Accordion Tab 2",_level:1},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 2")),e.createElement(d,{_heading:"\xDCberschrift Accordion Tab 3",_level:1},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 3")));f.args={header:"asdfdsf"};const y=n=>e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(d,{_heading:"\xDCberschrift Level 1",_level:1},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 1")),e.createElement(d,{_heading:"\xDCberschrift Level 2",_level:2},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 2")),e.createElement(d,{_heading:"\xDCberschrift Level 3",_level:3},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 3")),e.createElement(d,{_heading:"\xDCberschrift Level 4",_level:4},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 4")),e.createElement(d,{_heading:"\xDCberschrift Level 5",_level:5},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 5")),e.createElement(d,{_heading:"\xDCberschrift Level 6",_level:6},e.createElement("div",{slot:"content"},"Inhalt Accordion Tab 6")));y.storyName="\xDCberschriften";const A=n=>e.createElement("div",null,e.createElement(d,{_heading:"Accordion ge\xF6ffnet anzeigen",_level:1,_open:!0},e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.")));A.storyName="Ge\xF6ffnet";const k=n=>e.createElement("div",null,e.createElement(d,{_heading:"Accordion ge\xF6ffnet anzeigen",_level:1,_open:!0},e.createElement("div",{slot:"header"},"Hier kann noch was in den Header"),e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt."))),K=n=>(setTimeout(()=>{document.querySelectorAll("kol-button").forEach(u=>{u._on={onClick:$=>{let U=u.id,w=document.querySelector("kol-accordion#acc"+U);w._open===!1?w._open=!0:w._open=!1}}})},1e3),e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(d,{id:"accbtn0",_heading:"Accordion 1",_level:1},e.createElement("div",{slot:"header"},e.createElement(g.ic,{id:"btn0",_label:"Bearbeiten",_variant:"ghost",style:{float:"right",fontSize:"70%",marginTop:"-2.3rem",marginRight:"0.5rem"}})),e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.")),e.createElement(d,{id:"accbtn1",_heading:"Accordion 2",_level:1},e.createElement("div",{slot:"header"},e.createElement(g.ic,{id:"btn1",_label:"Bearbeiten",_variant:"ghost",style:{float:"right",fontSize:"70%",marginTop:"-2.3rem",marginRight:"0.5rem"}})),e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.")),e.createElement(d,{id:"accbtn2",_heading:"Accordion 3",_level:1},e.createElement("div",{slot:"header"},e.createElement(g.ic,{id:"btn2",_label:"Bearbeiten",_variant:"ghost",style:{float:"right",fontSize:"70%",marginTop:"-2.3rem",marginRight:"0.5rem"}})),e.createElement("div",{slot:"content"},"Dieser Inhalt wird direkt beim Laden der Seite angezeigt.",e.createElement("br",null),"Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.")))),v=n=>e.createElement("div",null,e.createElement(d,{_heading:"Accordion mit Alert-Button",_level:1},e.createElement("div",{className:"p-1",slot:"header"},"In den Accordion-Header kann auch nach was komplexeres eingef\xFCgt werden.",e.createElement(g.ic,{_icon:"icofont-ui-add",_label:"Hinzuf\xFCgen",_on:{onClick:()=>{alert("Hi, es wurde der Button Hinzuf\xFCgen angeklickt")}}})),e.createElement("p",{slot:"content"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, odit, accusamus id a officia neque omnis facere, corporis amet alias maiores! Laboriosam placeat omnis illo maxime laborum fugiat deserunt mollitia! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aperiam rem, doloremque cum, explicabo qui reiciendis minima sequi quidem et harum dolorum consequatur tempore id tempora provident quae consequuntur ab!")));v.storyName="Mit Alert-Button",S.parameters=_({storySource:{source:`(args: any) => {
	const props = clearProps(args);
	return (
		<KolAccordion {...props}>
			<div slot="header">{args.header}</div>
			<div slot="content">{args.content}</div>
		</KolAccordion>
	);
}`}},S.parameters),f.parameters=_({storySource:{source:`(args: any) => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolAccordion _heading="\xDCberschrift Accordion Tab 1" _level={1}>
				<div slot="content">Inhalt Accordion Tab 1</div>
			</KolAccordion>
			<KolAccordion _heading="\xDCberschrift Accordion Tab 2" _level={1}>
				<div slot="content">Inhalt Accordion Tab 2</div>
			</KolAccordion>
			<KolAccordion _heading="\xDCberschrift Accordion Tab 3" _level={1}>
				<div slot="content">Inhalt Accordion Tab 3</div>
			</KolAccordion>
		</div>
	);
}`}},f.parameters),y.parameters=_({storySource:{source:`(args: any) => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolAccordion _heading="\xDCberschrift Level 1" _level={1}>
				<div slot="content">Inhalt Accordion Tab 1</div>
			</KolAccordion>
			<KolAccordion _heading="\xDCberschrift Level 2" _level={2}>
				<div slot="content">Inhalt Accordion Tab 2</div>
			</KolAccordion>
			<KolAccordion _heading="\xDCberschrift Level 3" _level={3}>
				<div slot="content">Inhalt Accordion Tab 3</div>
			</KolAccordion>
			<KolAccordion _heading="\xDCberschrift Level 4" _level={4}>
				<div slot="content">Inhalt Accordion Tab 4</div>
			</KolAccordion>
			<KolAccordion _heading="\xDCberschrift Level 5" _level={5}>
				<div slot="content">Inhalt Accordion Tab 5</div>
			</KolAccordion>
			<KolAccordion _heading="\xDCberschrift Level 6" _level={6}>
				<div slot="content">Inhalt Accordion Tab 6</div>
			</KolAccordion>
		</div>
	);
}`}},y.parameters),A.parameters=_({storySource:{source:`(args: any) => {
	return (
		<div>
			<KolAccordion _heading="Accordion ge\xF6ffnet anzeigen" _level={1} _open>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</KolAccordion>
		</div>
	);
}`}},A.parameters),k.parameters=_({storySource:{source:`(args: any) => {
	return (
		<div>
			<KolAccordion _heading="Accordion ge\xF6ffnet anzeigen" _level={1} _open>
				<div slot="header">Hier kann noch was in den Header</div>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</KolAccordion>
		</div>
	);
}`}},k.parameters),K.parameters=_({storySource:{source:`(args: any) => {
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
			<KolAccordion id="accbtn0" _heading="Accordion 1" _level={1}>
				<div slot="header">
					<KolButton
						id="btn0"
						_label="Bearbeiten"
						_variant="ghost"
						style={{ float: 'right', fontSize: '70%', marginTop: '-2.3rem', marginRight: '0.5rem' }}
					></KolButton>
				</div>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</KolAccordion>
			<KolAccordion id="accbtn1" _heading="Accordion 2" _level={1}>
				<div slot="header">
					<KolButton
						id="btn1"
						_label="Bearbeiten"
						_variant="ghost"
						style={{ float: 'right', fontSize: '70%', marginTop: '-2.3rem', marginRight: '0.5rem' }}
					></KolButton>
				</div>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</KolAccordion>
			<KolAccordion id="accbtn2" _heading="Accordion 3" _level={1}>
				<div slot="header">
					<KolButton
						id="btn2"
						_label="Bearbeiten"
						_variant="ghost"
						style={{ float: 'right', fontSize: '70%', marginTop: '-2.3rem', marginRight: '0.5rem' }}
					></KolButton>
				</div>
				<div slot="content">
					Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
					<br />
					Mit Klick auf die \xDCberschrift wird der Inhalt versteckt.
				</div>
			</KolAccordion>
		</div>
	);
}`}},K.parameters),v.parameters=_({storySource:{source:`(args: any) => {
	return (
		<div>
			<KolAccordion _heading="Accordion mit Alert-Button" _level={1}>
				<div className="p-1" slot="header">
					In den Accordion-Header kann auch nach was komplexeres eingef\xFCgt werden.
					<KolButton
						_icon="icofont-ui-add"
						_label="Hinzuf\xFCgen"
						_on={{
							onClick: () => {
								alert(\`Hi, es wurde der Button Hinzuf\xFCgen angeklickt\`);
							},
						}}
					></KolButton>
				</div>
				<p slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, odit, accusamus id a officia neque omnis facere, corporis amet alias maiores!
					Laboriosam placeat omnis illo maxime laborum fugiat deserunt mollitia! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aperiam rem,
					doloremque cum, explicabo qui reiciendis minima sequi quidem et harum dolorum consequatur tempore id tempora provident quae consequuntur ab!
				</p>
			</KolAccordion>
		</div>
	);
}`}},v.parameters);try{f.displayName="Mehrere",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Mehrere",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/react.stories.tsx#Mehrere"]={docgenInfo:f.__docgenInfo,name:"Mehrere",path:"src/components/accordion/1-examples/react.stories.tsx#Mehrere"})}catch(n){}try{y.displayName="Ueberschriften",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Ueberschriften",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/react.stories.tsx#Ueberschriften"]={docgenInfo:y.__docgenInfo,name:"Ueberschriften",path:"src/components/accordion/1-examples/react.stories.tsx#Ueberschriften"})}catch(n){}try{A.displayName="Geoeffnet",A.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Geoeffnet",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/react.stories.tsx#Geoeffnet"]={docgenInfo:A.__docgenInfo,name:"Geoeffnet",path:"src/components/accordion/1-examples/react.stories.tsx#Geoeffnet"})}catch(n){}try{k.displayName="MitHeader",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"MitHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/react.stories.tsx#MitHeader"]={docgenInfo:k.__docgenInfo,name:"MitHeader",path:"src/components/accordion/1-examples/react.stories.tsx#MitHeader"})}catch(n){}try{K.displayName="MitButton",K.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"MitButton",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/react.stories.tsx#MitButton"]={docgenInfo:K.__docgenInfo,name:"MitButton",path:"src/components/accordion/1-examples/react.stories.tsx#MitButton"})}catch(n){}try{v.displayName="Alert",v.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Alert",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/1-examples/react.stories.tsx#Alert"]={docgenInfo:v.__docgenInfo,name:"Alert",path:"src/components/accordion/1-examples/react.stories.tsx#Alert"})}catch(n){}},"./src/components/accordion/1-examples/autogen.configuration.ts":(s,a,i)=>{i.d(a,{$:()=>D});var e=i("./node_modules/@storybook/addon-jest/dist/esm/index.js"),g=i("./node_modules/@public-ui/components/jest-test-results.json"),I=i("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const E={_heading:{name:"\xDCberschrift",control:{type:"text"},type:{required:!0}},_level:{name:"\xDCberschrift (h1 bis h6)",control:{type:"select"},options:[1,2,3,4,5,6],type:{required:!0}},_open:{name:"Aufgeklappt",control:{type:"boolean"}},header:{name:"Head-Inhalt",control:{type:"text"}},content:{name:"Body-Inhalt",control:{type:"text"}}},D={decorators:[(0,e.x)({results:g})],parameters:{badges:[I.NZ.STABLE],jest:["accordion.e2e.ts","accordion.spec.ts","accordion.spec.tsx"],status:{type:"bitv"}},argTypes:E}},"./node_modules/@public-ui/react/dist/index.mjs":(s,a,i)=>{i.d(a,{$o:()=>ge,CO:()=>Ie,CV:()=>U,CX:()=>le,Er:()=>d,Gc:()=>k,HA:()=>n,Jl:()=>p,K5:()=>q,Lj:()=>ae,MA:()=>be,Np:()=>ie,Nv:()=>_e,O:()=>ce,P:()=>Ke,Q4:()=>ye,QK:()=>fe,Qs:()=>Te,RZ:()=>j,T5:()=>Z,TE:()=>re,TQ:()=>me,UD:()=>Se,Ud:()=>ve,Vp:()=>Ee,Vs:()=>he,WD:()=>ue,WR:()=>Ae,Ze:()=>De,c2:()=>se,cJ:()=>u,ic:()=>S,is:()=>xe,lo:()=>V,m5:()=>v,ox:()=>K,qq:()=>Ce,r7:()=>ke,rW:()=>$,sy:()=>pe,u_:()=>Le,uz:()=>f,z5:()=>de});var e=i("./node_modules/react/index.js"),g=i("./node_modules/react-dom/index.js");const I=r=>r.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),E=r=>r.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),D=(r,o,l={})=>{if(r instanceof Element){const m=N(r.classList,o,l);m!==""&&(r.className=m),Object.keys(o).forEach(c=>{if(!(c==="children"||c==="style"||c==="ref"||c==="class"||c==="className"||c==="forwardedRef"))if(c.indexOf("on")===0&&c[2]===c[2].toUpperCase()){const b=c.substring(2),h=b[0].toLowerCase()+b.substring(1);L(h)||P(r,h,o[c])}else r[c]=o[c],typeof o[c]==="string"&&r.setAttribute(E(c),o[c])})}},N=(r,o,l)=>{const m=o.className||o.class,c=l.className||l.class,b=B(r),h=B(m?m.split(" "):[]),M=B(c?c.split(" "):[]),T=[];return b.forEach(C=>{h.has(C)?(T.push(C),h.delete(C)):M.has(C)||T.push(C)}),h.forEach(C=>T.push(C)),T.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const L=r=>{if(typeof document=="undefined")return!0;{const o="on"+r;let l=o in document;if(!l){const m=document.createElement("div");m.setAttribute(o,"return;"),l=typeof m[o]=="function"}return l}},P=(r,o,l)=>{const m=r.__events||(r.__events={}),c=m[o];c&&r.removeEventListener(o,c),r.addEventListener(o,m[o]=function(h){l&&l.call(this,h)})},B=r=>{const o=new Map;return r.forEach(l=>o.set(l,l)),o},R=(r,o)=>{typeof r=="function"?r(o):r!=null&&(r.current=o)},_=(...r)=>o=>{r.forEach(l=>{R(l,o)})},H=(r,o)=>{const l=(m,c)=>e.createElement(r,Q(W({},m),{forwardedRef:c}));return l.displayName=o,e.forwardRef(l)},t=(r,o,l,m)=>{m!==void 0&&m();const c=I(r),b=class extends e.Component{constructor(h){super(h),this.setComponentElRef=M=>{this.componentEl=M}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(h){D(this.componentEl,this.props,h)}render(){const X=this.props,{children:h,forwardedRef:M,style:T,className:C,ref:Ne}=X,J=ne(X,["children","forwardedRef","style","className","ref"]);let F=Object.keys(J).reduce((G,x)=>{const Y=J[x];if(x.indexOf("on")===0&&x[2]===x[2].toUpperCase()){const O=x.substring(2).toLowerCase();typeof document!="undefined"&&L(O)&&(G[x]=Y)}else{const O=typeof Y;(O==="string"||O==="boolean"||O==="number")&&(G[E(x)]=Y)}return G},{});l&&(F=l(this.props,F));const Be=Q(W({},F),{ref:_(M,this.setComponentElRef),style:T});return(0,e.createElement)(r,Be,h)}static get displayName(){return c}};return o&&(b.contextType=o),H(b,c)},Z=t("kol-abbr"),j=t("kol-accordion"),q=t("kol-alert"),d=t("kol-badge"),V=t("kol-breadcrumb"),S=t("kol-button"),f=t("kol-button-group"),y=null,A=null,k=t("kol-card"),K=t("kol-details"),v=t("kol-form"),n=t("kol-heading"),p=t("kol-icon"),u=t("kol-icon-font-awesome"),$=t("kol-icon-icofont"),U=t("kol-indented-text"),w=null,re=t("kol-input-checkbox"),ie=t("kol-input-color"),ce=t("kol-input-date"),ae=t("kol-input-email"),le=t("kol-input-file"),se=t("kol-input-number"),de=t("kol-input-password"),pe=t("kol-input-radio"),me=t("kol-input-range"),ue=t("kol-input-text"),he=t("kol-kolibri"),_e=t("kol-link"),we=null,ge=t("kol-link-group"),fe=t("kol-logo"),ve=t("kol-modal"),be=t("kol-nav"),ye=t("kol-pagination"),Ae=t("kol-progress"),ke=t("kol-select"),Ke=t("kol-skip-nav"),ze=null,Ce=t("kol-spin"),xe=t("kol-symbol"),Ee=t("kol-table"),Se=t("kol-tabs"),Te=t("kol-textarea"),Ie=t("kol-toast"),De=t("kol-tooltip"),Le=t("kol-version")}}]);
