"use strict";var Ie=Object.defineProperty,Ne=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var Q=(u,n,o)=>n in u?Ie(u,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[n]=o,W=(u,n)=>{for(var o in n||(n={}))$.call(n,o)&&Q(u,o,n[o]);if(M)for(var o of M(n))J.call(n,o)&&Q(u,o,n[o]);return u},z=(u,n)=>Ne(u,De(n));var X=(u,n)=>{var o={};for(var t in u)$.call(u,t)&&n.indexOf(t)<0&&(o[t]=u[t]);if(u!=null&&M)for(var t of M(u))n.indexOf(t)<0&&J.call(u,t)&&(o[t]=u[t]);return o};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4780],{"./src/components/select/1-examples/react.stories.tsx":(u,n,o)=>{o.r(n),o.d(n,{Disabled:()=>g,Formularbeispiel:()=>P,Height:()=>O,Number:()=>h,Standard:()=>f,default:()=>U,error:()=>k});var t=o("./node_modules/react/index.js"),p=o("./node_modules/@public-ui/react/dist/index.mjs"),y=o("./src/components/bik-bitv-test.tsx"),v=o("./src/components/select/1-examples/autogen.configuration.ts"),F=Object.defineProperty,H=Object.defineProperties,I=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,N=(r,d,m)=>d in r?F(r,d,{enumerable:!0,configurable:!0,writable:!0,value:m}):r[d]=m,i=(r,d)=>{for(var m in d||(d={}))T.call(d,m)&&N(r,m,d[m]);if(A)for(var m of A(d))E.call(d,m)&&N(r,m,d[m]);return r},e=(r,d)=>H(r,I(d)),Y=null,G={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Number:{startLoc:{col:22,line:40},endLoc:{col:1,line:49},startBody:{col:22,line:40},endBody:{col:1,line:49}},error:{startLoc:{col:21,line:60},endLoc:{col:1,line:70},startBody:{col:21,line:60},endBody:{col:1,line:70}},Disabled:{startLoc:{col:24,line:81},endLoc:{col:1,line:96},startBody:{col:24,line:81},endBody:{col:1,line:96}},Height:{startLoc:{col:22,line:107},endLoc:{col:1,line:116},startBody:{col:22,line:107},endBody:{col:1,line:116}},Formularbeispiel:{startLoc:{col:32,line:122},endLoc:{col:1,line:212},startBody:{col:32,line:122},endBody:{col:1,line:212}}};const U=e(i({},v.w),{title:"React/Select/Beispiele",component:p.r7}),S=r=>t.createElement(p.r7,i({},r),r.children),x={},f=r=>t.createElement("div",null,t.createElement(S,i({},r),r.content));f.args=i({},x);const h=r=>t.createElement("div",null,t.createElement(S,{_id:"mein_select",_name:"mein_select",_multiple:!0,_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}));h.args=i({},x),h.storyName="Multiselect";const k=r=>t.createElement("div",null,t.createElement(S,{_id:"mein_select",_name:"mein_select",_error:"Fehlermeldung",_touched:!0,_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}));k.args=i({},x),k.storyName="Fehlermeldung";const g=r=>t.createElement("div",null,t.createElement(S,{_id:"mein_select",_name:"mein_select",_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}),t.createElement("div",{className:"mt-2"}),t.createElement(S,{_id:"mein_select",_name:"mein_select",_disabled:!0,_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}));g.args=i({},x),g.storyName="Aktiv / Nicht aktiv";const O=r=>t.createElement("div",null,t.createElement(S,{_height:"85px",_id:"mein_select",_name:"mein_select",_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}));g.args=i({},x),g.storyName="Individuelle H\xF6he";const P=()=>{const[r,d]=(0,t.useState)(!1),m=[{disabled:!0,value:null,label:"- keine Auswahl -"},{label:"Optgroup 1",options:[{value:"a1",label:"A1"},{disabled:!0,value:"b1",label:"B1"},{label:"Optgroup 2",options:[{value:"a2",label:"A2"},{value:"b2",label:"B2"}]},{value:"c1",label:"C1"}]},{value:"1",label:"Gute Laune"},{value:"2",label:"Geht so"},{value:"3",label:"Schlechte Laune"},{value:"4",label:"ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen"}];return t.createElement("div",{style:{display:"grid",gap:"0.25em"}},t.createElement(S,e(i({},y.kM),{_touched:r,_list:m}),"Stimmung"),t.createElement(S,e(i({id:"new-select-multi",_multiple:!0},y.kM),{_touched:r,_list:m}),"Stimmung (Mehrfachauswahl)"),t.createElement(S,e(i({_disabled:!0},y.kM),{_touched:r,_list:m}),"Stimmung (Disabled)"),t.createElement("div",{style:{display:"flex",gap:"0.25em"}},t.createElement(p.ic,{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{d(!0)}}}),t.createElement(p.ic,{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{d(!1)}}})))};f.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<KolSelect {...args}>{args.content}</KolSelect>
	</div>
)`}},f.parameters),h.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<KolSelect
			_id="mein_select"
			_name="mein_select"
			_multiple={true}
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></KolSelect>
	</div>
)`}},h.parameters),k.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<KolSelect
			_id="mein_select"
			_name="mein_select"
			_error="Fehlermeldung"
			_touched
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></KolSelect>
	</div>
)`}},k.parameters),g.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<KolSelect
			_id="mein_select"
			_name="mein_select"
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></KolSelect>
		<div className="mt-2"></div>
		<KolSelect
			_id="mein_select"
			_name="mein_select"
			_disabled
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></KolSelect>
	</div>
)`}},g.parameters),O.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<KolSelect
			_height="85px"
			_id="mein_select"
			_name="mein_select"
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></KolSelect>
	</div>
)`}},O.parameters),P.parameters=i({storySource:{source:`() => {
	const [touched, setTouched] = useState<boolean>(false);
	const STATUS_OPTIONS = [
		{
			disabled: true,
			value: null,
			label: '- keine Auswahl -',
		},
		{
			label: 'Optgroup 1',
			options: [
				{
					value: 'a1',
					label: 'A1',
				},
				{
					disabled: true,
					value: 'b1',
					label: 'B1',
				},
				{
					label: 'Optgroup 2',
					options: [
						{
							value: 'a2',
							label: 'A2',
						},
						{
							value: 'b2',
							label: 'B2',
						},
					],
				},
				{
					value: 'c1',
					label: 'C1',
				},
			],
		},
		{
			value: '1',
			label: 'Gute Laune',
		},
		{
			value: '2',
			label: 'Geht so',
		},
		{
			value: '3',
			label: 'Schlechte Laune',
		},
		{
			value: '4',
			label: 'ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen',
		},
	];

	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolSelect {...DEFAULT_INPUT_PROPS} _touched={touched} _list={STATUS_OPTIONS}>
				Stimmung
			</KolSelect>
			<KolSelect id="new-select-multi" _multiple {...DEFAULT_INPUT_PROPS} _touched={touched} _list={STATUS_OPTIONS}>
				Stimmung (Mehrfachauswahl)
			</KolSelect>
			<KolSelect _disabled {...DEFAULT_INPUT_PROPS} _touched={touched} _list={STATUS_OPTIONS}>
				Stimmung (Disabled)
			</KolSelect>
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
}`}},P.parameters);try{f.displayName="Standard",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/react.stories.tsx#Standard"]={docgenInfo:f.__docgenInfo,name:"Standard",path:"src/components/select/1-examples/react.stories.tsx#Standard"})}catch(r){}try{h.displayName="Number",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Number",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/react.stories.tsx#Number"]={docgenInfo:h.__docgenInfo,name:"Number",path:"src/components/select/1-examples/react.stories.tsx#Number"})}catch(r){}try{k.displayName="error",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"error",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/react.stories.tsx#error"]={docgenInfo:k.__docgenInfo,name:"error",path:"src/components/select/1-examples/react.stories.tsx#error"})}catch(r){}try{g.displayName="Disabled",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/react.stories.tsx#Disabled"]={docgenInfo:g.__docgenInfo,name:"Disabled",path:"src/components/select/1-examples/react.stories.tsx#Disabled"})}catch(r){}try{O.displayName="Height",O.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Height",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/react.stories.tsx#Height"]={docgenInfo:O.__docgenInfo,name:"Height",path:"src/components/select/1-examples/react.stories.tsx#Height"})}catch(r){}},"./src/components/bik-bitv-test.tsx":(u,n,o)=>{o.d(n,{BS:()=>F,_F:()=>E,kM:()=>I});var t=o("./node_modules/react/index.js"),p=o("./node_modules/@public-ui/react/dist/index.mjs"),y=o("./node_modules/@leanup/form/esm/index.js");const v=new y.I2;v.validators.add(y.Fj);const F={parameters:{layout:"centered"}};new y.gs("input",{mandatory:!0}).setValidationHandler(v);const I={_error:"Ich bin ein Fehler"};let A="";const T=localStorage.getItem("kol-theme");typeof T=="string"&&(A=T);class E extends t.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:A}}renderModal(){return t.createElement(p.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},t.createElement(p.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},t.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),t.createElement("div",{slot:"footer"},t.createElement(p.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return t.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},t.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},t.createElement(p.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(i,e)=>{Array.isArray(e)&&e.length>0&&typeof e[0]=="string"&&(localStorage.setItem("kol-theme",e[0]),this.setState(()=>({theme:e[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),t.createElement(p.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:i=>{this.setState(()=>({activeElement:i.target}))}}}),this.renderModal()),t.createElement(p.HA,null,this.props._heading),this.props.children)}}try{E.displayName="BikBitvTest",E.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:E.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(N){}},"./src/components/select/1-examples/autogen.configuration.ts":(u,n,o)=>{o.d(n,{w:()=>F});var t=o("./node_modules/@storybook/addon-jest/dist/esm/index.js"),p=o("./node_modules/@public-ui/components/jest-test-results.json"),y=o("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const v={_accessKey:{name:"Tastenkombination Input",control:{type:"text"},type:{required:!1},defaultValue:""},_autoFocus:{name:"Input fokussierbar?",control:{type:"boolean"},type:{required:!1},defaultValue:0},_disabled:{name:"Deaktiviert",control:{type:"boolean"},type:{required:!1},defaultValue:0},_error:{name:"Fehlermeldung",control:{type:"text"},type:{required:!1},defaultValue:""},_height:{name:"H\xF6he",control:{type:"text"},type:{required:!1},defaultValue:""},_id:{name:"ID",control:{type:"text"},type:{required:!0},defaultValue:""},_list:{name:"Vorschlagsliste",control:{type:"text"},type:{required:!0},defaultValue:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'}]"},_multiple:{name:"Mehrfachauswahl",control:{type:"boolean"},type:{required:!1},defaultValue:!1},_name:{name:"Name (technisch)",control:{type:"text"},type:{required:!0},defaultValue:""},_size:{name:"Anzahl Optionen",control:{type:"number"},type:{required:!1},defaultValue:8},_tabIndex:{name:"Tab-Index",control:{type:"text"},type:{required:!1},defaultValue:0},_touched:{name:"Besucht",control:{type:"boolean"},type:{required:!1},defaultValue:0},_value:{name:"Wert",control:{type:"text"},type:{required:!1},defaultValue:"Frau"}},F={decorators:[(0,t.x)({results:p})],parameters:{badges:[y.NZ.STABLE],jest:["select.e2e.ts","select.spec.ts","select.spec.tsx"],status:{type:"bitv"}},argTypes:v}},"./node_modules/@public-ui/react/dist/index.mjs":(u,n,o)=>{o.d(n,{$o:()=>be,CO:()=>Fe,CV:()=>le,CX:()=>ne,Er:()=>S,Gc:()=>O,HA:()=>d,Jl:()=>m,K5:()=>U,Lj:()=>se,MA:()=>ge,Np:()=>ae,Nv:()=>pe,O:()=>re,P:()=>ke,Q4:()=>he,QK:()=>ye,Qs:()=>Ce,RZ:()=>G,T5:()=>Y,TE:()=>oe,TQ:()=>de,UD:()=>Oe,Ud:()=>Se,Vp:()=>Ee,Vs:()=>_e,WD:()=>me,WR:()=>ve,Ze:()=>Ae,c2:()=>ie,cJ:()=>ee,ic:()=>f,is:()=>Te,lo:()=>x,m5:()=>r,ox:()=>P,qq:()=>Ke,r7:()=>fe,rW:()=>te,sy:()=>ue,u_:()=>xe,uz:()=>h,z5:()=>ce});var t=o("./node_modules/react/index.js"),p=o("./node_modules/react-dom/index.js");const y=a=>a.toLowerCase().split("-").map(l=>l.charAt(0).toUpperCase()+l.slice(1)).join(""),v=a=>a.replace(/([A-Z])/g,l=>`-${l[0].toLowerCase()}`),F=(a,l,c={})=>{if(a instanceof Element){const _=H(a.classList,l,c);_!==""&&(a.className=_),Object.keys(l).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const K=s.substring(2),b=K[0].toLowerCase()+K.substring(1);I(b)||A(a,b,l[s])}else a[s]=l[s],typeof l[s]==="string"&&a.setAttribute(v(s),l[s])})}},H=(a,l,c)=>{const _=l.className||l.class,s=c.className||c.class,K=T(a),b=T(_?_.split(" "):[]),L=T(s?s.split(" "):[]),D=[];return K.forEach(C=>{b.has(C)?(D.push(C),b.delete(C)):L.has(C)||D.push(C)}),b.forEach(C=>D.push(C)),D.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const I=a=>{if(typeof document=="undefined")return!0;{const l="on"+a;let c=l in document;if(!c){const _=document.createElement("div");_.setAttribute(l,"return;"),c=typeof _[l]=="function"}return c}},A=(a,l,c)=>{const _=a.__events||(a.__events={}),s=_[l];s&&a.removeEventListener(l,s),a.addEventListener(l,_[l]=function(b){c&&c.call(this,b)})},T=a=>{const l=new Map;return a.forEach(c=>l.set(c,c)),l},E=(a,l)=>{typeof a=="function"?a(l):a!=null&&(a.current=l)},N=(...a)=>l=>{a.forEach(c=>{E(c,l)})},i=(a,l)=>{const c=(_,s)=>t.createElement(a,z(W({},_),{forwardedRef:s}));return c.displayName=l,t.forwardRef(c)},e=(a,l,c,_)=>{_!==void 0&&_();const s=y(a),K=class extends t.Component{constructor(b){super(b),this.setComponentElRef=L=>{this.componentEl=L}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(b){F(this.componentEl,this.props,b)}render(){const q=this.props,{children:b,forwardedRef:L,style:D,className:C,ref:He}=q,Z=X(q,["children","forwardedRef","style","className","ref"]);let w=Object.keys(Z).reduce((j,B)=>{const V=Z[B];if(B.indexOf("on")===0&&B[2]===B[2].toUpperCase()){const R=B.substring(2).toLowerCase();typeof document!="undefined"&&I(R)&&(j[B]=V)}else{const R=typeof V;(R==="string"||R==="boolean"||R==="number")&&(j[v(B)]=V)}return j},{});c&&(w=c(this.props,w));const Be=z(W({},w),{ref:N(L,this.setComponentElRef),style:D});return(0,t.createElement)(a,Be,b)}static get displayName(){return s}};return l&&(K.contextType=l),i(K,s)},Y=e("kol-abbr"),G=e("kol-accordion"),U=e("kol-alert"),S=e("kol-badge"),x=e("kol-breadcrumb"),f=e("kol-button"),h=e("kol-button-group"),k=null,g=null,O=e("kol-card"),P=e("kol-details"),r=e("kol-form"),d=e("kol-heading"),m=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),le=e("kol-indented-text"),Pe=null,oe=e("kol-input-checkbox"),ae=e("kol-input-color"),re=e("kol-input-date"),se=e("kol-input-email"),ne=e("kol-input-file"),ie=e("kol-input-number"),ce=e("kol-input-password"),ue=e("kol-input-radio"),de=e("kol-input-range"),me=e("kol-input-text"),_e=e("kol-kolibri"),pe=e("kol-link"),Le=null,be=e("kol-link-group"),ye=e("kol-logo"),Se=e("kol-modal"),ge=e("kol-nav"),he=e("kol-pagination"),ve=e("kol-progress"),fe=e("kol-select"),ke=e("kol-skip-nav"),Re=null,Ke=e("kol-spin"),Te=e("kol-symbol"),Ee=e("kol-table"),Oe=e("kol-tabs"),Ce=e("kol-textarea"),Fe=e("kol-toast"),Ae=e("kol-tooltip"),xe=e("kol-version")}}]);
