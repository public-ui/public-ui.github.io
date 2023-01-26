"use strict";var Ie=Object.defineProperty,Re=Object.defineProperties;var Ke=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var X=(c,r,a)=>r in c?Ie(c,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[r]=a,Y=(c,r)=>{for(var a in r||(r={}))ee.call(r,a)&&X(c,a,r[a]);if(z)for(var a of z(r))te.call(r,a)&&X(c,a,r[a]);return c},H=(c,r)=>Re(c,Ke(r));var oe=(c,r)=>{var a={};for(var e in c)ee.call(c,e)&&r.indexOf(e)<0&&(a[e]=c[e]);if(c!=null&&z)for(var e of z(c))r.indexOf(e)<0&&te.call(c,e)&&(a[e]=c[e]);return a};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1311],{"./src/components/input-date/1-examples/autogen.wc.stories.tsx":(c,r,a)=>{a.r(r),a.d(r,{DateDefault:()=>A,DateMin:()=>I,Disabled:()=>b,Formularbeispiel:()=>B,Month:()=>T,Standard:()=>D,Time:()=>f,TimeLocal:()=>S,Week:()=>g,default:()=>W});var e=a("./node_modules/react/index.js"),k=a("./node_modules/@public-ui/react/dist/index.mjs"),p=a("./src/components/bik-bitv-test.tsx"),E=a("./src/components/input-date/1-examples/autogen.configuration.ts"),P=Object.defineProperty,F=Object.defineProperties,K=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,N=(o,u,y)=>u in o?P(o,u,{enumerable:!0,configurable:!0,writable:!0,value:y}):o[u]=y,i=(o,u)=>{for(var y in u||(u={}))C.call(u,y)&&N(o,y,u[y]);if(L)for(var y of L(u))O.call(u,y)&&N(o,y,u[y]);return o},t=(o,u)=>F(o,K(u)),q=null,G={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},DateDefault:{startLoc:{col:27,line:40},endLoc:{col:1,line:46},startBody:{col:27,line:40},endBody:{col:1,line:46}},DateMin:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}},Month:{startLoc:{col:21,line:74},endLoc:{col:1,line:80},startBody:{col:21,line:74},endBody:{col:1,line:80}},Week:{startLoc:{col:20,line:91},endLoc:{col:1,line:97},startBody:{col:20,line:91},endBody:{col:1,line:97}},Time:{startLoc:{col:20,line:108},endLoc:{col:1,line:114},startBody:{col:20,line:108},endBody:{col:1,line:114}},TimeLocal:{startLoc:{col:25,line:125},endLoc:{col:1,line:131},startBody:{col:25,line:125},endBody:{col:1,line:131}},Disabled:{startLoc:{col:24,line:142},endLoc:{col:1,line:152},startBody:{col:24,line:142},endBody:{col:1,line:152}},Formularbeispiel:{startLoc:{col:32,line:158},endLoc:{col:1,line:214},startBody:{col:32,line:158},endBody:{col:1,line:214}}};const W=t(i({},E.H),{title:"Web Components/InputDate/Beispiele",component:k.O}),Q=o=>React.createElement(MyComponent,i({},o),o.children),h={},D=o=>e.createElement("div",null,e.createElement("kol-input-date",i({},o),o._label));D.args=i({},h);const A=o=>e.createElement("div",null,e.createElement("kol-input-date",{_type:"date",_id:"mein_datum",_name:"mein_datum"},"Erstellungsdatum"));Date.args=i({},h),Date.storyName="Datum";const I=o=>e.createElement("div",null,e.createElement("kol-input-date",{_type:"date",_id:"mein_datum",_name:"mein_datum",_min:new Date},"F\xE4lligkeitsdatum"));Date.args=i({},h),Date.storyName="Datum";const T=o=>e.createElement("div",null,e.createElement("kol-input-date",{_type:"month",_id:"mein_monat",_name:"mein_monat"},"Monat"));T.args=i({},h),T.storyName="Monat";const g=o=>e.createElement("div",null,e.createElement("kol-input-date",{_type:"week",_id:"meine_woche",_name:"meine_woche"},"Woche"));g.args=i({},h),g.storyName="Woche";const f=o=>e.createElement("div",null,e.createElement("kol-input-date",{_type:"time",_id:"meine_zeit",_name:"meine_zeit"},"Zeit"));f.args=i({},h),f.storyName="Zeit";const S=o=>e.createElement("div",null,e.createElement("kol-input-date",{_type:"datetime-local",_id:"meine_zeit",_name:"meine_zeit"},"Datum & Zeit"));S.args=i({},h),S.storyName="Datum & Zeit";const b=o=>e.createElement("div",null,e.createElement("kol-input-date",{_type:"date",_id:"meine_zahl",_name:"meine_zahl"},"Anzahl"),e.createElement("div",{className:"mt-2"}),e.createElement("kol-input-date",{_type:"date",_id:"meine_zahl",_name:"meine_zahl",_disabled:!0},"Anzahl"));b.args=i({},h),b.storyName="Aktiv / Nicht aktiv";const B=()=>{const[o,u]=(0,e.useState)(!1);return e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-input-date",t(i({_max:10,_min:-10,_step:2,_type:"number"},p.kM),{_touched:o}),"Zahleneingabe (-10 bis 10 in 2er Schritten)"),e.createElement("kol-input-date",t(i({_type:"date"},p.kM),{_touched:o}),"Datum"),e.createElement("kol-input-date",t(i({_type:"datetime-local"},p.kM),{_touched:o}),"Local-Datetime (Standard)"),e.createElement("kol-input-date",t(i({_type:"datetime-local",_step:1},p.kM),{_touched:o}),"Local-Datetime (mit Sekunden)"),e.createElement("kol-input-date",t(i({_type:"month"},p.kM),{_touched:o}),"Monat"),e.createElement("kol-input-date",t(i({_type:"week"},p.kM),{_touched:o}),"Woche"),e.createElement("kol-input-date",t(i({_type:"time"},p.kM),{_touched:o}),"Zeit (Standard)"),e.createElement("kol-input-date",t(i({_type:"time",_step:1},p.kM),{_touched:o}),"Zeit (mit Sekunden)"),e.createElement("kol-input-date",t(i({_type:"number",_readOnly:!0},p.kM),{_touched:o}),"Zahleneingabe (Read only)"),e.createElement("kol-input-date",t(i({_type:"number",_disabled:!0},p.kM),{_touched:o}),"Zahleneingabe (Disabled)"),e.createElement("div",{style:{display:"flex",gap:"0.25em"}},e.createElement("kol-button",{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{u(!0)}}}),e.createElement("kol-button",{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{u(!1)}}})))};D.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-input-date {...args}>{args._label}</kol-input-date>
	</div>
)`}},D.parameters),A.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-input-date _type="date" _id="mein_datum" _name="mein_datum">
			Erstellungsdatum
		</kol-input-date>
	</div>
)`}},A.parameters),I.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-input-date _type="date" _id="mein_datum" _name="mein_datum" _min={new Date()}>
			F\xE4lligkeitsdatum
		</kol-input-date>
	</div>
)`}},I.parameters),T.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-input-date _type="month" _id="mein_monat" _name="mein_monat">
			Monat
		</kol-input-date>
	</div>
)`}},T.parameters),g.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-input-date _type="week" _id="meine_woche" _name="meine_woche">
			Woche
		</kol-input-date>
	</div>
)`}},g.parameters),f.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-input-date _type="time" _id="meine_zeit" _name="meine_zeit">
			Zeit
		</kol-input-date>
	</div>
)`}},f.parameters),S.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-input-date _type="datetime-local" _id="meine_zeit" _name="meine_zeit">
			Datum & Zeit
		</kol-input-date>
	</div>
)`}},S.parameters),b.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-input-date _type="date" _id="meine_zahl" _name="meine_zahl">
			Anzahl
		</kol-input-date>
		<div className="mt-2"></div>
		<kol-input-date _type="date" _id="meine_zahl" _name="meine_zahl" _disabled>
			Anzahl
		</kol-input-date>
	</div>
)`}},b.parameters),B.parameters=i({storySource:{source:`() => {
	const [touched, setTouched] = useState<boolean>(false);
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-input-date _max={10} _min={-10} _step={2} _type="number" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zahleneingabe (-10 bis 10 in 2er Schritten)
			</kol-input-date>
			<kol-input-date _type="date" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Datum
			</kol-input-date>
			<kol-input-date _type="datetime-local" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Local-Datetime (Standard)
			</kol-input-date>
			<kol-input-date _type="datetime-local" _step={1} {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Local-Datetime (mit Sekunden)
			</kol-input-date>
			<kol-input-date _type="month" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Monat
			</kol-input-date>
			<kol-input-date _type="week" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Woche
			</kol-input-date>
			<kol-input-date _type="time" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zeit (Standard)
			</kol-input-date>
			<kol-input-date _type="time" _step={1} {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zeit (mit Sekunden)
			</kol-input-date>
			<kol-input-date _type="number" _readOnly {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zahleneingabe (Read only)
			</kol-input-date>
			<kol-input-date _type="number" _disabled {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zahleneingabe (Disabled)
			</kol-input-date>
			<div style={{ display: 'flex', gap: '0.25em' }}>
				<kol-button
					_variant="primary"
					_label="Absenden"
					_on={{
						onClick: () => {
							setTouched(true);
						},
					}}
				></kol-button>
				<kol-button
					_variant="ghost"
					_label="Zur\xFCcksetzen"
					_on={{
						onClick: () => {
							setTouched(false);
						},
					}}
				></kol-button>
			</div>
		</div>
	);
}`}},B.parameters);try{D.displayName="Standard",D.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:D.__docgenInfo,name:"Standard",path:"src/components/input-date/1-examples/autogen.wc.stories.tsx#Standard"})}catch(o){}try{A.displayName="DateDefault",A.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"DateDefault",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/autogen.wc.stories.tsx#DateDefault"]={docgenInfo:A.__docgenInfo,name:"DateDefault",path:"src/components/input-date/1-examples/autogen.wc.stories.tsx#DateDefault"})}catch(o){}try{I.displayName="DateMin",I.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"DateMin",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/autogen.wc.stories.tsx#DateMin"]={docgenInfo:I.__docgenInfo,name:"DateMin",path:"src/components/input-date/1-examples/autogen.wc.stories.tsx#DateMin"})}catch(o){}try{T.displayName="Month",T.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Month",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/autogen.wc.stories.tsx#Month"]={docgenInfo:T.__docgenInfo,name:"Month",path:"src/components/input-date/1-examples/autogen.wc.stories.tsx#Month"})}catch(o){}try{g.displayName="Week",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Week",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/autogen.wc.stories.tsx#Week"]={docgenInfo:g.__docgenInfo,name:"Week",path:"src/components/input-date/1-examples/autogen.wc.stories.tsx#Week"})}catch(o){}try{f.displayName="Time",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Time",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/autogen.wc.stories.tsx#Time"]={docgenInfo:f.__docgenInfo,name:"Time",path:"src/components/input-date/1-examples/autogen.wc.stories.tsx#Time"})}catch(o){}try{S.displayName="TimeLocal",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"TimeLocal",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/autogen.wc.stories.tsx#TimeLocal"]={docgenInfo:S.__docgenInfo,name:"TimeLocal",path:"src/components/input-date/1-examples/autogen.wc.stories.tsx#TimeLocal"})}catch(o){}try{b.displayName="Disabled",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/autogen.wc.stories.tsx#Disabled"]={docgenInfo:b.__docgenInfo,name:"Disabled",path:"src/components/input-date/1-examples/autogen.wc.stories.tsx#Disabled"})}catch(o){}},"./src/components/bik-bitv-test.tsx":(c,r,a)=>{a.d(r,{BS:()=>P,_F:()=>O,kM:()=>K});var e=a("./node_modules/react/index.js"),k=a("./node_modules/@public-ui/react/dist/index.mjs"),p=a("./node_modules/@leanup/form/esm/index.js");const E=new p.I2;E.validators.add(p.Fj);const P={parameters:{layout:"centered"}};new p.gs("input",{mandatory:!0}).setValidationHandler(E);const K={_error:"Ich bin ein Fehler"};let L="";const C=localStorage.getItem("kol-theme");typeof C=="string"&&(L=C);class O extends e.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:L}}renderModal(){return e.createElement(k.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},e.createElement(k.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},e.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),e.createElement("div",{slot:"footer"},e.createElement(k.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return e.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},e.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},e.createElement(k.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(i,t)=>{Array.isArray(t)&&t.length>0&&typeof t[0]=="string"&&(localStorage.setItem("kol-theme",t[0]),this.setState(()=>({theme:t[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),e.createElement(k.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:i=>{this.setState(()=>({activeElement:i.target}))}}}),this.renderModal()),e.createElement(k.HA,null,this.props._heading),this.props.children)}}try{O.displayName="BikBitvTest",O.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:O.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(N){}},"./src/components/input-date/1-examples/autogen.configuration.ts":(c,r,a)=>{a.d(r,{H:()=>P});var e=a("./node_modules/@storybook/addon-jest/dist/esm/index.js"),k=a("./node_modules/@public-ui/components/jest-test-results.json"),p=a("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const E={_accessKey:{name:"Tastenkombination Input",control:{type:"text"},type:{required:!1},defaultValue:""},_autoComplete:{name:"Autocomplete",control:{type:"select"},options:["off","on"],type:{required:!1},defaultValue:"off"},_autoFocus:{name:"Input fokussierbar?",control:{type:"boolean"},type:{required:!1},defaultValue:0},_disabled:{name:"Deaktiviert",control:{type:"boolean"},type:{required:!1},defaultValue:0},_error:{name:"Fehlermeldung",control:{type:"text"},type:{required:!1},defaultValue:""},_id:{name:"ID",control:{type:"text"},type:{required:!0},defaultValue:""},_label:{name:"Label",control:{type:"text"},type:{required:!1},defaultValue:""},_list:{name:"Vorschlagsliste",control:{type:"date"},type:{required:!1},defaultValue:"['alpha@email.de','beta@email.de',gamma@email.de']"},_max:{name:"Max. Eingabewert",control:{type:"date"},type:{required:!1}},_min:{name:"Min. Eingabewert",control:{type:"date"},type:{required:!1}},_name:{name:"Name (technisch)",control:{type:"text"},type:{required:!0},defaultValue:""},_step:{name:"Schrittweite Eingabewert",control:{type:"number"},type:{required:!1}},_tabIndex:{name:"Tab-Index",control:{type:"text"},type:{required:!1},defaultValue:0},_touched:{name:"Besucht",control:{type:"boolean"},type:{required:!1},defaultValue:0},_type:{name:"Typ",control:{type:"select"},options:["date","datetime-local","month","time","week"],type:{required:!0},defaultValue:"date"},_value:{name:"Wert",control:{type:"date"},type:{required:!1},defaultValue:0}},P={decorators:[(0,e.x)({results:k})],parameters:{badges:[p.NZ.STABLE],jest:["input-date.e2e.ts","input-date.spec.ts","input-date.spec.tsx"],status:{type:"bitv"}},argTypes:E}},"./node_modules/@public-ui/react/dist/index.mjs":(c,r,a)=>{a.d(r,{$o:()=>ye,CO:()=>Ae,CV:()=>y,CX:()=>se,Er:()=>Q,Gc:()=>g,HA:()=>b,Jl:()=>B,K5:()=>W,Lj:()=>le,MA:()=>ge,Np:()=>ae,Nv:()=>_e,O:()=>ie,P:()=>Ee,Q4:()=>fe,QK:()=>ke,Qs:()=>Oe,RZ:()=>G,T5:()=>q,TE:()=>ne,TQ:()=>pe,UD:()=>Ce,Ud:()=>he,Vp:()=>ve,Vs:()=>me,WD:()=>ue,WR:()=>Se,Ze:()=>xe,c2:()=>re,cJ:()=>o,ic:()=>D,is:()=>Te,lo:()=>h,m5:()=>S,ox:()=>f,qq:()=>De,r7:()=>be,rW:()=>u,sy:()=>ce,u_:()=>Pe,uz:()=>A,z5:()=>de});var e=a("./node_modules/react/index.js"),k=a("./node_modules/react-dom/index.js");const p=l=>l.toLowerCase().split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""),E=l=>l.replace(/([A-Z])/g,n=>`-${n[0].toLowerCase()}`),P=(l,n,d={})=>{if(l instanceof Element){const m=F(l.classList,n,d);m!==""&&(l.className=m),Object.keys(n).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const v=s.substring(2),_=v[0].toLowerCase()+v.substring(1);K(_)||L(l,_,n[s])}else l[s]=n[s],typeof n[s]==="string"&&l.setAttribute(E(s),n[s])})}},F=(l,n,d)=>{const m=n.className||n.class,s=d.className||d.class,v=C(l),_=C(m?m.split(" "):[]),w=C(s?s.split(" "):[]),M=[];return v.forEach(x=>{_.has(x)?(M.push(x),_.delete(x)):w.has(x)||M.push(x)}),_.forEach(x=>M.push(x)),M.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const K=l=>{if(typeof document=="undefined")return!0;{const n="on"+l;let d=n in document;if(!d){const m=document.createElement("div");m.setAttribute(n,"return;"),d=typeof m[n]=="function"}return d}},L=(l,n,d)=>{const m=l.__events||(l.__events={}),s=m[n];s&&l.removeEventListener(n,s),l.addEventListener(n,m[n]=function(_){d&&d.call(this,_)})},C=l=>{const n=new Map;return l.forEach(d=>n.set(d,d)),n},O=(l,n)=>{typeof l=="function"?l(n):l!=null&&(l.current=n)},N=(...l)=>n=>{l.forEach(d=>{O(d,n)})},i=(l,n)=>{const d=(m,s)=>e.createElement(l,H(Y({},m),{forwardedRef:s}));return d.displayName=n,e.forwardRef(d)},t=(l,n,d,m)=>{m!==void 0&&m();const s=p(l),v=class extends e.Component{constructor(_){super(_),this.setComponentElRef=w=>{this.componentEl=w}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(_){P(this.componentEl,this.props,_)}render(){const J=this.props,{children:_,forwardedRef:w,style:M,className:x,ref:we}=J,$=oe(J,["children","forwardedRef","style","className","ref"]);let Z=Object.keys($).reduce((j,R)=>{const V=$[R];if(R.indexOf("on")===0&&R[2]===R[2].toUpperCase()){const U=R.substring(2).toLowerCase();typeof document!="undefined"&&K(U)&&(j[R]=V)}else{const U=typeof V;(U==="string"||U==="boolean"||U==="number")&&(j[E(R)]=V)}return j},{});d&&(Z=d(this.props,Z));const Le=H(Y({},Z),{ref:N(w,this.setComponentElRef),style:M});return(0,e.createElement)(l,Le,_)}static get displayName(){return s}};return n&&(v.contextType=n),i(v,s)},q=t("kol-abbr"),G=t("kol-accordion"),W=t("kol-alert"),Q=t("kol-badge"),h=t("kol-breadcrumb"),D=t("kol-button"),A=t("kol-button-group"),I=null,T=null,g=t("kol-card"),f=t("kol-details"),S=t("kol-form"),b=t("kol-heading"),B=t("kol-icon"),o=t("kol-icon-font-awesome"),u=t("kol-icon-icofont"),y=t("kol-indented-text"),Ne=null,ne=t("kol-input-checkbox"),ae=t("kol-input-color"),ie=t("kol-input-date"),le=t("kol-input-email"),se=t("kol-input-file"),re=t("kol-input-number"),de=t("kol-input-password"),ce=t("kol-input-radio"),pe=t("kol-input-range"),ue=t("kol-input-text"),me=t("kol-kolibri"),_e=t("kol-link"),Me=null,ye=t("kol-link-group"),ke=t("kol-logo"),he=t("kol-modal"),ge=t("kol-nav"),fe=t("kol-pagination"),Se=t("kol-progress"),be=t("kol-select"),Ee=t("kol-skip-nav"),Be=null,De=t("kol-spin"),Te=t("kol-symbol"),ve=t("kol-table"),Ce=t("kol-tabs"),Oe=t("kol-textarea"),Ae=t("kol-toast"),xe=t("kol-tooltip"),Pe=t("kol-version")}}]);
