"use strict";var Pe=Object.defineProperty,Le=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var X=(d,i,a)=>i in d?Pe(d,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[i]=a,H=(d,i)=>{for(var a in i||(i={}))ee.call(i,a)&&X(d,a,i[a]);if(W)for(var a of W(i))te.call(i,a)&&X(d,a,i[a]);return d},q=(d,i)=>Le(d,Re(i));var oe=(d,i)=>{var a={};for(var e in d)ee.call(d,e)&&i.indexOf(e)<0&&(a[e]=d[e]);if(d!=null&&W)for(var e of W(d))i.indexOf(e)<0&&te.call(d,e)&&(a[e]=d[e]);return a};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1816],{"./src/components/input-date/1-examples/react.stories.tsx":(d,i,a)=>{a.r(i),a.d(i,{DateDefault:()=>O,DateMin:()=>L,Disabled:()=>b,Formularbeispiel:()=>U,Month:()=>K,Standard:()=>E,Time:()=>S,TimeLocal:()=>k,Week:()=>g,default:()=>Z});var e=a("./node_modules/react/index.js"),y=a("./node_modules/@public-ui/react/dist/index.mjs"),u=a("./src/components/bik-bitv-test.tsx"),I=a("./src/components/input-date/1-examples/autogen.configuration.ts"),x=Object.defineProperty,z=Object.defineProperties,B=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,N=(o,m,D)=>m in o?x(o,m,{enumerable:!0,configurable:!0,writable:!0,value:D}):o[m]=D,s=(o,m)=>{for(var D in m||(m={}))v.call(m,D)&&N(o,D,m[D]);if(P)for(var D of P(m))C.call(m,D)&&N(o,D,m[D]);return o},t=(o,m)=>z(o,B(m)),G=null,Q={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},DateDefault:{startLoc:{col:27,line:40},endLoc:{col:1,line:46},startBody:{col:27,line:40},endBody:{col:1,line:46}},DateMin:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}},Month:{startLoc:{col:21,line:74},endLoc:{col:1,line:80},startBody:{col:21,line:74},endBody:{col:1,line:80}},Week:{startLoc:{col:20,line:91},endLoc:{col:1,line:97},startBody:{col:20,line:91},endBody:{col:1,line:97}},Time:{startLoc:{col:20,line:108},endLoc:{col:1,line:114},startBody:{col:20,line:108},endBody:{col:1,line:114}},TimeLocal:{startLoc:{col:25,line:125},endLoc:{col:1,line:131},startBody:{col:25,line:125},endBody:{col:1,line:131}},Disabled:{startLoc:{col:24,line:142},endLoc:{col:1,line:152},startBody:{col:24,line:142},endBody:{col:1,line:152}},Formularbeispiel:{startLoc:{col:32,line:158},endLoc:{col:1,line:214},startBody:{col:32,line:158},endBody:{col:1,line:214}}};const Z=t(s({},I.H),{title:"React/InputDate/Beispiele",component:y.O}),p=o=>e.createElement(y.O,s({},o),o.children),f={},E=o=>e.createElement("div",null,e.createElement(p,s({},o),o._label));E.args=s({},f);const O=o=>e.createElement("div",null,e.createElement(p,{_type:"date",_id:"mein_datum",_name:"mein_datum"},"Erstellungsdatum"));Date.args=s({},f),Date.storyName="Datum";const L=o=>e.createElement("div",null,e.createElement(p,{_type:"date",_id:"mein_datum",_name:"mein_datum",_min:new Date},"F\xE4lligkeitsdatum"));Date.args=s({},f),Date.storyName="Datum";const K=o=>e.createElement("div",null,e.createElement(p,{_type:"month",_id:"mein_monat",_name:"mein_monat"},"Monat"));K.args=s({},f),K.storyName="Monat";const g=o=>e.createElement("div",null,e.createElement(p,{_type:"week",_id:"meine_woche",_name:"meine_woche"},"Woche"));g.args=s({},f),g.storyName="Woche";const S=o=>e.createElement("div",null,e.createElement(p,{_type:"time",_id:"meine_zeit",_name:"meine_zeit"},"Zeit"));S.args=s({},f),S.storyName="Zeit";const k=o=>e.createElement("div",null,e.createElement(p,{_type:"datetime-local",_id:"meine_zeit",_name:"meine_zeit"},"Datum & Zeit"));k.args=s({},f),k.storyName="Datum & Zeit";const b=o=>e.createElement("div",null,e.createElement(p,{_type:"date",_id:"meine_zahl",_name:"meine_zahl"},"Anzahl"),e.createElement("div",{className:"mt-2"}),e.createElement(p,{_type:"date",_id:"meine_zahl",_name:"meine_zahl",_disabled:!0},"Anzahl"));b.args=s({},f),b.storyName="Aktiv / Nicht aktiv";const U=()=>{const[o,m]=(0,e.useState)(!1);return e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(p,t(s({_max:10,_min:-10,_step:2,_type:"number"},u.kM),{_touched:o}),"Zahleneingabe (-10 bis 10 in 2er Schritten)"),e.createElement(p,t(s({_type:"date"},u.kM),{_touched:o}),"Datum"),e.createElement(p,t(s({_type:"datetime-local"},u.kM),{_touched:o}),"Local-Datetime (Standard)"),e.createElement(p,t(s({_type:"datetime-local",_step:1},u.kM),{_touched:o}),"Local-Datetime (mit Sekunden)"),e.createElement(p,t(s({_type:"month"},u.kM),{_touched:o}),"Monat"),e.createElement(p,t(s({_type:"week"},u.kM),{_touched:o}),"Woche"),e.createElement(p,t(s({_type:"time"},u.kM),{_touched:o}),"Zeit (Standard)"),e.createElement(p,t(s({_type:"time",_step:1},u.kM),{_touched:o}),"Zeit (mit Sekunden)"),e.createElement(p,t(s({_type:"number",_readOnly:!0},u.kM),{_touched:o}),"Zahleneingabe (Read only)"),e.createElement(p,t(s({_type:"number",_disabled:!0},u.kM),{_touched:o}),"Zahleneingabe (Disabled)"),e.createElement("div",{style:{display:"flex",gap:"0.25em"}},e.createElement(y.ic,{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{m(!0)}}}),e.createElement(y.ic,{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{m(!1)}}})))};E.parameters=s({storySource:{source:`(args: any) => (
	<div>
		<KolInputDate {...args}>{args._label}</KolInputDate>
	</div>
)`}},E.parameters),O.parameters=s({storySource:{source:`(args: any) => (
	<div>
		<KolInputDate _type="date" _id="mein_datum" _name="mein_datum">
			Erstellungsdatum
		</KolInputDate>
	</div>
)`}},O.parameters),L.parameters=s({storySource:{source:`(args: any) => (
	<div>
		<KolInputDate _type="date" _id="mein_datum" _name="mein_datum" _min={new Date()}>
			F\xE4lligkeitsdatum
		</KolInputDate>
	</div>
)`}},L.parameters),K.parameters=s({storySource:{source:`(args: any) => (
	<div>
		<KolInputDate _type="month" _id="mein_monat" _name="mein_monat">
			Monat
		</KolInputDate>
	</div>
)`}},K.parameters),g.parameters=s({storySource:{source:`(args: any) => (
	<div>
		<KolInputDate _type="week" _id="meine_woche" _name="meine_woche">
			Woche
		</KolInputDate>
	</div>
)`}},g.parameters),S.parameters=s({storySource:{source:`(args: any) => (
	<div>
		<KolInputDate _type="time" _id="meine_zeit" _name="meine_zeit">
			Zeit
		</KolInputDate>
	</div>
)`}},S.parameters),k.parameters=s({storySource:{source:`(args: any) => (
	<div>
		<KolInputDate _type="datetime-local" _id="meine_zeit" _name="meine_zeit">
			Datum & Zeit
		</KolInputDate>
	</div>
)`}},k.parameters),b.parameters=s({storySource:{source:`(args: any) => (
	<div>
		<KolInputDate _type="date" _id="meine_zahl" _name="meine_zahl">
			Anzahl
		</KolInputDate>
		<div className="mt-2"></div>
		<KolInputDate _type="date" _id="meine_zahl" _name="meine_zahl" _disabled>
			Anzahl
		</KolInputDate>
	</div>
)`}},b.parameters),U.parameters=s({storySource:{source:`() => {
	const [touched, setTouched] = useState<boolean>(false);
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolInputDate _max={10} _min={-10} _step={2} _type="number" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zahleneingabe (-10 bis 10 in 2er Schritten)
			</KolInputDate>
			<KolInputDate _type="date" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Datum
			</KolInputDate>
			<KolInputDate _type="datetime-local" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Local-Datetime (Standard)
			</KolInputDate>
			<KolInputDate _type="datetime-local" _step={1} {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Local-Datetime (mit Sekunden)
			</KolInputDate>
			<KolInputDate _type="month" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Monat
			</KolInputDate>
			<KolInputDate _type="week" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Woche
			</KolInputDate>
			<KolInputDate _type="time" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zeit (Standard)
			</KolInputDate>
			<KolInputDate _type="time" _step={1} {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zeit (mit Sekunden)
			</KolInputDate>
			<KolInputDate _type="number" _readOnly {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zahleneingabe (Read only)
			</KolInputDate>
			<KolInputDate _type="number" _disabled {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Zahleneingabe (Disabled)
			</KolInputDate>
			<div style={{ display: 'flex', gap: '0.25em' }}>
				<KolButton
					_variant="primary"
					_label="Absenden"
					_on={{
						onClick: () => {
							setTouched(true);
						},
					}}
				></KolButton>
				<KolButton
					_variant="ghost"
					_label="Zur\xFCcksetzen"
					_on={{
						onClick: () => {
							setTouched(false);
						},
					}}
				></KolButton>
			</div>
		</div>
	);
}`}},U.parameters);try{E.displayName="Standard",E.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/react.stories.tsx#Standard"]={docgenInfo:E.__docgenInfo,name:"Standard",path:"src/components/input-date/1-examples/react.stories.tsx#Standard"})}catch(o){}try{O.displayName="DateDefault",O.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"DateDefault",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/react.stories.tsx#DateDefault"]={docgenInfo:O.__docgenInfo,name:"DateDefault",path:"src/components/input-date/1-examples/react.stories.tsx#DateDefault"})}catch(o){}try{L.displayName="DateMin",L.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"DateMin",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/react.stories.tsx#DateMin"]={docgenInfo:L.__docgenInfo,name:"DateMin",path:"src/components/input-date/1-examples/react.stories.tsx#DateMin"})}catch(o){}try{K.displayName="Month",K.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Month",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/react.stories.tsx#Month"]={docgenInfo:K.__docgenInfo,name:"Month",path:"src/components/input-date/1-examples/react.stories.tsx#Month"})}catch(o){}try{g.displayName="Week",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Week",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/react.stories.tsx#Week"]={docgenInfo:g.__docgenInfo,name:"Week",path:"src/components/input-date/1-examples/react.stories.tsx#Week"})}catch(o){}try{S.displayName="Time",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Time",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/react.stories.tsx#Time"]={docgenInfo:S.__docgenInfo,name:"Time",path:"src/components/input-date/1-examples/react.stories.tsx#Time"})}catch(o){}try{k.displayName="TimeLocal",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"TimeLocal",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/react.stories.tsx#TimeLocal"]={docgenInfo:k.__docgenInfo,name:"TimeLocal",path:"src/components/input-date/1-examples/react.stories.tsx#TimeLocal"})}catch(o){}try{b.displayName="Disabled",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-date/1-examples/react.stories.tsx#Disabled"]={docgenInfo:b.__docgenInfo,name:"Disabled",path:"src/components/input-date/1-examples/react.stories.tsx#Disabled"})}catch(o){}},"./src/components/bik-bitv-test.tsx":(d,i,a)=>{a.d(i,{BS:()=>x,_F:()=>C,kM:()=>B});var e=a("./node_modules/react/index.js"),y=a("./node_modules/@public-ui/react/dist/index.mjs"),u=a("./node_modules/@leanup/form/esm/index.js");const I=new u.I2;I.validators.add(u.Fj);const x={parameters:{layout:"centered"}};new u.gs("input",{mandatory:!0}).setValidationHandler(I);const B={_error:"Ich bin ein Fehler"};let P="";const v=localStorage.getItem("kol-theme");typeof v=="string"&&(P=v);class C extends e.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:P}}renderModal(){return e.createElement(y.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},e.createElement(y.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},e.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),e.createElement("div",{slot:"footer"},e.createElement(y.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return e.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},e.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},e.createElement(y.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(s,t)=>{Array.isArray(t)&&t.length>0&&typeof t[0]=="string"&&(localStorage.setItem("kol-theme",t[0]),this.setState(()=>({theme:t[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),e.createElement(y.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:s=>{this.setState(()=>({activeElement:s.target}))}}}),this.renderModal()),e.createElement(y.HA,null,this.props._heading),this.props.children)}}try{C.displayName="BikBitvTest",C.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:C.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(N){}},"./src/components/input-date/1-examples/autogen.configuration.ts":(d,i,a)=>{a.d(i,{H:()=>x});var e=a("./node_modules/@storybook/addon-jest/dist/esm/index.js"),y=a("./node_modules/@public-ui/components/jest-test-results.json"),u=a("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const I={_accessKey:{name:"Tastenkombination Input",control:{type:"text"},type:{required:!1},defaultValue:""},_autoComplete:{name:"Autocomplete",control:{type:"select"},options:["off","on"],type:{required:!1},defaultValue:"off"},_autoFocus:{name:"Input fokussierbar?",control:{type:"boolean"},type:{required:!1},defaultValue:0},_disabled:{name:"Deaktiviert",control:{type:"boolean"},type:{required:!1},defaultValue:0},_error:{name:"Fehlermeldung",control:{type:"text"},type:{required:!1},defaultValue:""},_id:{name:"ID",control:{type:"text"},type:{required:!0},defaultValue:""},_label:{name:"Label",control:{type:"text"},type:{required:!1},defaultValue:""},_list:{name:"Vorschlagsliste",control:{type:"date"},type:{required:!1},defaultValue:"['alpha@email.de','beta@email.de',gamma@email.de']"},_max:{name:"Max. Eingabewert",control:{type:"date"},type:{required:!1}},_min:{name:"Min. Eingabewert",control:{type:"date"},type:{required:!1}},_name:{name:"Name (technisch)",control:{type:"text"},type:{required:!0},defaultValue:""},_step:{name:"Schrittweite Eingabewert",control:{type:"number"},type:{required:!1}},_tabIndex:{name:"Tab-Index",control:{type:"text"},type:{required:!1},defaultValue:0},_touched:{name:"Besucht",control:{type:"boolean"},type:{required:!1},defaultValue:0},_type:{name:"Typ",control:{type:"select"},options:["date","datetime-local","month","time","week"],type:{required:!0},defaultValue:"date"},_value:{name:"Wert",control:{type:"date"},type:{required:!1},defaultValue:0}},x={decorators:[(0,e.x)({results:y})],parameters:{badges:[u.NZ.STABLE],jest:["input-date.e2e.ts","input-date.spec.ts","input-date.spec.tsx"],status:{type:"bitv"}},argTypes:I}},"./node_modules/@public-ui/react/dist/index.mjs":(d,i,a)=>{a.d(i,{$o:()=>ye,CO:()=>Ce,CV:()=>D,CX:()=>re,Er:()=>p,Gc:()=>g,HA:()=>b,Jl:()=>U,K5:()=>Z,Lj:()=>le,MA:()=>fe,Np:()=>ae,Nv:()=>_e,O:()=>se,P:()=>be,Q4:()=>ge,QK:()=>he,Qs:()=>ve,RZ:()=>Q,T5:()=>G,TE:()=>ne,TQ:()=>pe,UD:()=>Te,Ud:()=>De,Vp:()=>Ke,Vs:()=>me,WD:()=>ue,WR:()=>Se,Ze:()=>Oe,c2:()=>ie,cJ:()=>o,ic:()=>E,is:()=>Ee,lo:()=>f,m5:()=>k,ox:()=>S,qq:()=>Ie,r7:()=>ke,rW:()=>m,sy:()=>de,u_:()=>Ae,uz:()=>O,z5:()=>ce});var e=a("./node_modules/react/index.js"),y=a("./node_modules/react-dom/index.js");const u=l=>l.toLowerCase().split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""),I=l=>l.replace(/([A-Z])/g,n=>`-${n[0].toLowerCase()}`),x=(l,n,c={})=>{if(l instanceof Element){const _=z(l.classList,n,c);_!==""&&(l.className=_),Object.keys(n).forEach(r=>{if(!(r==="children"||r==="style"||r==="ref"||r==="class"||r==="className"||r==="forwardedRef"))if(r.indexOf("on")===0&&r[2]===r[2].toUpperCase()){const T=r.substring(2),h=T[0].toLowerCase()+T.substring(1);B(h)||P(l,h,n[r])}else l[r]=n[r],typeof n[r]==="string"&&l.setAttribute(I(r),n[r])})}},z=(l,n,c)=>{const _=n.className||n.class,r=c.className||c.class,T=v(l),h=v(_?_.split(" "):[]),F=v(r?r.split(" "):[]),M=[];return T.forEach(A=>{h.has(A)?(M.push(A),h.delete(A)):F.has(A)||M.push(A)}),h.forEach(A=>M.push(A)),M.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const B=l=>{if(typeof document=="undefined")return!0;{const n="on"+l;let c=n in document;if(!c){const _=document.createElement("div");_.setAttribute(n,"return;"),c=typeof _[n]=="function"}return c}},P=(l,n,c)=>{const _=l.__events||(l.__events={}),r=_[n];r&&l.removeEventListener(n,r),l.addEventListener(n,_[n]=function(h){c&&c.call(this,h)})},v=l=>{const n=new Map;return l.forEach(c=>n.set(c,c)),n},C=(l,n)=>{typeof l=="function"?l(n):l!=null&&(l.current=n)},N=(...l)=>n=>{l.forEach(c=>{C(c,n)})},s=(l,n)=>{const c=(_,r)=>e.createElement(l,q(H({},_),{forwardedRef:r}));return c.displayName=n,e.forwardRef(c)},t=(l,n,c,_)=>{_!==void 0&&_();const r=u(l),T=class extends e.Component{constructor(h){super(h),this.setComponentElRef=F=>{this.componentEl=F}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(h){x(this.componentEl,this.props,h)}render(){const J=this.props,{children:h,forwardedRef:F,style:M,className:A,ref:Ue}=J,$=oe(J,["children","forwardedRef","style","className","ref"]);let j=Object.keys($).reduce((V,R)=>{const Y=$[R];if(R.indexOf("on")===0&&R[2]===R[2].toUpperCase()){const w=R.substring(2).toLowerCase();typeof document!="undefined"&&B(w)&&(V[R]=Y)}else{const w=typeof Y;(w==="string"||w==="boolean"||w==="number")&&(V[I(R)]=Y)}return V},{});c&&(j=c(this.props,j));const xe=q(H({},j),{ref:N(F,this.setComponentElRef),style:M});return(0,e.createElement)(l,xe,h)}static get displayName(){return r}};return n&&(T.contextType=n),s(T,r)},G=t("kol-abbr"),Q=t("kol-accordion"),Z=t("kol-alert"),p=t("kol-badge"),f=t("kol-breadcrumb"),E=t("kol-button"),O=t("kol-button-group"),L=null,K=null,g=t("kol-card"),S=t("kol-details"),k=t("kol-form"),b=t("kol-heading"),U=t("kol-icon"),o=t("kol-icon-font-awesome"),m=t("kol-icon-icofont"),D=t("kol-indented-text"),Be=null,ne=t("kol-input-checkbox"),ae=t("kol-input-color"),se=t("kol-input-date"),le=t("kol-input-email"),re=t("kol-input-file"),ie=t("kol-input-number"),ce=t("kol-input-password"),de=t("kol-input-radio"),pe=t("kol-input-range"),ue=t("kol-input-text"),me=t("kol-kolibri"),_e=t("kol-link"),Ne=null,ye=t("kol-link-group"),he=t("kol-logo"),De=t("kol-modal"),fe=t("kol-nav"),ge=t("kol-pagination"),Se=t("kol-progress"),ke=t("kol-select"),be=t("kol-skip-nav"),Me=null,Ie=t("kol-spin"),Ee=t("kol-symbol"),Ke=t("kol-table"),Te=t("kol-tabs"),ve=t("kol-textarea"),Ce=t("kol-toast"),Oe=t("kol-tooltip"),Ae=t("kol-version")}}]);
