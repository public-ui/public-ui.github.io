"use strict";var Ne=Object.defineProperty,De=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var Q=(u,n,o)=>n in u?Ne(u,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[n]=o,W=(u,n)=>{for(var o in n||(n={}))$.call(n,o)&&Q(u,o,n[o]);if(H)for(var o of H(n))J.call(n,o)&&Q(u,o,n[o]);return u},V=(u,n)=>De(u,Be(n));var X=(u,n)=>{var o={};for(var t in u)$.call(u,t)&&n.indexOf(t)<0&&(o[t]=u[t]);if(u!=null&&H)for(var t of H(u))n.indexOf(t)<0&&J.call(u,t)&&(o[t]=u[t]);return o};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2019],{"./src/components/select/1-examples/autogen.wc.stories.tsx":(u,n,o)=>{o.r(n),o.d(n,{Disabled:()=>g,Formularbeispiel:()=>B,Height:()=>C,Number:()=>h,Standard:()=>k,default:()=>M,error:()=>f});var t=o("./node_modules/react/index.js"),b=o("./node_modules/@public-ui/react/dist/index.mjs"),y=o("./src/components/bik-bitv-test.tsx"),v=o("./src/components/select/1-examples/autogen.configuration.ts"),F=Object.defineProperty,R=Object.defineProperties,K=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,N=(s,d,m)=>d in s?F(s,d,{enumerable:!0,configurable:!0,writable:!0,value:m}):s[d]=m,i=(s,d)=>{for(var m in d||(d={}))T.call(d,m)&&N(s,m,d[m]);if(A)for(var m of A(d))E.call(d,m)&&N(s,m,d[m]);return s},e=(s,d)=>R(s,K(d)),z=null,Y={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Number:{startLoc:{col:22,line:40},endLoc:{col:1,line:49},startBody:{col:22,line:40},endBody:{col:1,line:49}},error:{startLoc:{col:21,line:60},endLoc:{col:1,line:70},startBody:{col:21,line:60},endBody:{col:1,line:70}},Disabled:{startLoc:{col:24,line:81},endLoc:{col:1,line:96},startBody:{col:24,line:81},endBody:{col:1,line:96}},Height:{startLoc:{col:22,line:107},endLoc:{col:1,line:116},startBody:{col:22,line:107},endBody:{col:1,line:116}},Formularbeispiel:{startLoc:{col:32,line:122},endLoc:{col:1,line:212},startBody:{col:32,line:122},endBody:{col:1,line:212}}};const M=e(i({},v.w),{title:"Web Components/Select/Beispiele",component:b.r7}),G=s=>React.createElement(MyComponent,i({},s),s.children),x={},k=s=>t.createElement("div",null,t.createElement("kol-select",i({},s),s.content));k.args=i({},x);const h=s=>t.createElement("div",null,t.createElement("kol-select",{_id:"mein_select",_name:"mein_select",_multiple:!0,_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}));h.args=i({},x),h.storyName="Multiselect";const f=s=>t.createElement("div",null,t.createElement("kol-select",{_id:"mein_select",_name:"mein_select",_error:"Fehlermeldung",_touched:!0,_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}));f.args=i({},x),f.storyName="Fehlermeldung";const g=s=>t.createElement("div",null,t.createElement("kol-select",{_id:"mein_select",_name:"mein_select",_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}),t.createElement("div",{className:"mt-2"}),t.createElement("kol-select",{_id:"mein_select",_name:"mein_select",_disabled:!0,_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}));g.args=i({},x),g.storyName="Aktiv / Nicht aktiv";const C=s=>t.createElement("div",null,t.createElement("kol-select",{_height:"85px",_id:"mein_select",_name:"mein_select",_list:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"}));g.args=i({},x),g.storyName="Individuelle H\xF6he";const B=()=>{const[s,d]=(0,t.useState)(!1),m=[{disabled:!0,value:null,label:"- keine Auswahl -"},{label:"Optgroup 1",options:[{value:"a1",label:"A1"},{disabled:!0,value:"b1",label:"B1"},{label:"Optgroup 2",options:[{value:"a2",label:"A2"},{value:"b2",label:"B2"}]},{value:"c1",label:"C1"}]},{value:"1",label:"Gute Laune"},{value:"2",label:"Geht so"},{value:"3",label:"Schlechte Laune"},{value:"4",label:"ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen"}];return t.createElement("div",{style:{display:"grid",gap:"0.25em"}},t.createElement("kol-select",e(i({},y.kM),{_touched:s,_list:m}),"Stimmung"),t.createElement("kol-select",e(i({id:"new-select-multi",_multiple:!0},y.kM),{_touched:s,_list:m}),"Stimmung (Mehrfachauswahl)"),t.createElement("kol-select",e(i({_disabled:!0},y.kM),{_touched:s,_list:m}),"Stimmung (Disabled)"),t.createElement("div",{style:{display:"flex",gap:"0.25em"}},t.createElement("kol-button",{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{d(!0)}}}),t.createElement("kol-button",{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{d(!1)}}})))};k.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-select {...args}>{args.content}</kol-select>
	</div>
)`}},k.parameters),h.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-select
			_id="mein_select"
			_name="mein_select"
			_multiple={true}
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></kol-select>
	</div>
)`}},h.parameters),f.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-select
			_id="mein_select"
			_name="mein_select"
			_error="Fehlermeldung"
			_touched
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></kol-select>
	</div>
)`}},f.parameters),g.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-select
			_id="mein_select"
			_name="mein_select"
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></kol-select>
		<div className="mt-2"></div>
		<kol-select
			_id="mein_select"
			_name="mein_select"
			_disabled
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></kol-select>
	</div>
)`}},g.parameters),C.parameters=i({storySource:{source:`(args: any) => (
	<div>
		<kol-select
			_height="85px"
			_id="mein_select"
			_name="mein_select"
			_list="[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'},{'label':'Firma','value':'Firma'}]"
		></kol-select>
	</div>
)`}},C.parameters),B.parameters=i({storySource:{source:`() => {
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
			<kol-select {...DEFAULT_INPUT_PROPS} _touched={touched} _list={STATUS_OPTIONS}>
				Stimmung
			</kol-select>
			<kol-select id="new-select-multi" _multiple {...DEFAULT_INPUT_PROPS} _touched={touched} _list={STATUS_OPTIONS}>
				Stimmung (Mehrfachauswahl)
			</kol-select>
			<kol-select _disabled {...DEFAULT_INPUT_PROPS} _touched={touched} _list={STATUS_OPTIONS}>
				Stimmung (Disabled)
			</kol-select>
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
}`}},B.parameters);try{k.displayName="Standard",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:k.__docgenInfo,name:"Standard",path:"src/components/select/1-examples/autogen.wc.stories.tsx#Standard"})}catch(s){}try{h.displayName="Number",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Number",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/autogen.wc.stories.tsx#Number"]={docgenInfo:h.__docgenInfo,name:"Number",path:"src/components/select/1-examples/autogen.wc.stories.tsx#Number"})}catch(s){}try{f.displayName="error",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"error",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/autogen.wc.stories.tsx#error"]={docgenInfo:f.__docgenInfo,name:"error",path:"src/components/select/1-examples/autogen.wc.stories.tsx#error"})}catch(s){}try{g.displayName="Disabled",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/autogen.wc.stories.tsx#Disabled"]={docgenInfo:g.__docgenInfo,name:"Disabled",path:"src/components/select/1-examples/autogen.wc.stories.tsx#Disabled"})}catch(s){}try{C.displayName="Height",C.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Height",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/select/1-examples/autogen.wc.stories.tsx#Height"]={docgenInfo:C.__docgenInfo,name:"Height",path:"src/components/select/1-examples/autogen.wc.stories.tsx#Height"})}catch(s){}},"./src/components/bik-bitv-test.tsx":(u,n,o)=>{o.d(n,{BS:()=>F,_F:()=>E,kM:()=>K});var t=o("./node_modules/react/index.js"),b=o("./node_modules/@public-ui/react/dist/index.mjs"),y=o("./node_modules/@leanup/form/esm/index.js");const v=new y.I2;v.validators.add(y.Fj);const F={parameters:{layout:"centered"}};new y.gs("input",{mandatory:!0}).setValidationHandler(v);const K={_error:"Ich bin ein Fehler"};let A="";const T=localStorage.getItem("kol-theme");typeof T=="string"&&(A=T);class E extends t.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:A}}renderModal(){return t.createElement(b.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},t.createElement(b.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},t.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),t.createElement("div",{slot:"footer"},t.createElement(b.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return t.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},t.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},t.createElement(b.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(i,e)=>{Array.isArray(e)&&e.length>0&&typeof e[0]=="string"&&(localStorage.setItem("kol-theme",e[0]),this.setState(()=>({theme:e[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),t.createElement(b.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:i=>{this.setState(()=>({activeElement:i.target}))}}}),this.renderModal()),t.createElement(b.HA,null,this.props._heading),this.props.children)}}try{E.displayName="BikBitvTest",E.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:E.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(N){}},"./src/components/select/1-examples/autogen.configuration.ts":(u,n,o)=>{o.d(n,{w:()=>F});var t=o("./node_modules/@storybook/addon-jest/dist/esm/index.js"),b=o("./node_modules/@public-ui/components/jest-test-results.json"),y=o("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const v={_accessKey:{name:"Tastenkombination Input",control:{type:"text"},type:{required:!1},defaultValue:""},_autoFocus:{name:"Input fokussierbar?",control:{type:"boolean"},type:{required:!1},defaultValue:0},_disabled:{name:"Deaktiviert",control:{type:"boolean"},type:{required:!1},defaultValue:0},_error:{name:"Fehlermeldung",control:{type:"text"},type:{required:!1},defaultValue:""},_height:{name:"H\xF6he",control:{type:"text"},type:{required:!1},defaultValue:""},_id:{name:"ID",control:{type:"text"},type:{required:!0},defaultValue:""},_list:{name:"Vorschlagsliste",control:{type:"text"},type:{required:!0},defaultValue:"[{'label':'Herr','value':'Herr'},{'label':'Frau','value':'Frau'}]"},_multiple:{name:"Mehrfachauswahl",control:{type:"boolean"},type:{required:!1},defaultValue:!1},_name:{name:"Name (technisch)",control:{type:"text"},type:{required:!0},defaultValue:""},_size:{name:"Anzahl Optionen",control:{type:"number"},type:{required:!1},defaultValue:8},_tabIndex:{name:"Tab-Index",control:{type:"text"},type:{required:!1},defaultValue:0},_touched:{name:"Besucht",control:{type:"boolean"},type:{required:!1},defaultValue:0},_value:{name:"Wert",control:{type:"text"},type:{required:!1},defaultValue:"Frau"}},F={decorators:[(0,t.x)({results:b})],parameters:{badges:[y.NZ.STABLE],jest:["select.e2e.ts","select.spec.ts","select.spec.tsx"],status:{type:"bitv"}},argTypes:v}},"./node_modules/@public-ui/react/dist/index.mjs":(u,n,o)=>{o.d(n,{$o:()=>be,CO:()=>Ae,CV:()=>le,CX:()=>ne,Er:()=>G,Gc:()=>C,HA:()=>d,Jl:()=>m,K5:()=>M,Lj:()=>re,MA:()=>he,Np:()=>ae,Nv:()=>pe,O:()=>se,P:()=>Se,Q4:()=>ve,QK:()=>ye,Qs:()=>Fe,RZ:()=>Y,T5:()=>z,TE:()=>oe,TQ:()=>de,UD:()=>Oe,Ud:()=>ge,Vp:()=>Ce,Vs:()=>_e,WD:()=>me,WR:()=>ke,Ze:()=>xe,c2:()=>ie,cJ:()=>ee,ic:()=>k,is:()=>Ee,lo:()=>x,m5:()=>s,ox:()=>B,qq:()=>Te,r7:()=>fe,rW:()=>te,sy:()=>ue,u_:()=>Ie,uz:()=>h,z5:()=>ce});var t=o("./node_modules/react/index.js"),b=o("./node_modules/react-dom/index.js");const y=a=>a.toLowerCase().split("-").map(l=>l.charAt(0).toUpperCase()+l.slice(1)).join(""),v=a=>a.replace(/([A-Z])/g,l=>`-${l[0].toLowerCase()}`),F=(a,l,c={})=>{if(a instanceof Element){const _=R(a.classList,l,c);_!==""&&(a.className=_),Object.keys(l).forEach(r=>{if(!(r==="children"||r==="style"||r==="ref"||r==="class"||r==="className"||r==="forwardedRef"))if(r.indexOf("on")===0&&r[2]===r[2].toUpperCase()){const S=r.substring(2),p=S[0].toLowerCase()+S.substring(1);K(p)||A(a,p,l[r])}else a[r]=l[r],typeof l[r]==="string"&&a.setAttribute(v(r),l[r])})}},R=(a,l,c)=>{const _=l.className||l.class,r=c.className||c.class,S=T(a),p=T(_?_.split(" "):[]),P=T(r?r.split(" "):[]),D=[];return S.forEach(O=>{p.has(O)?(D.push(O),p.delete(O)):P.has(O)||D.push(O)}),p.forEach(O=>D.push(O)),D.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const K=a=>{if(typeof document=="undefined")return!0;{const l="on"+a;let c=l in document;if(!c){const _=document.createElement("div");_.setAttribute(l,"return;"),c=typeof _[l]=="function"}return c}},A=(a,l,c)=>{const _=a.__events||(a.__events={}),r=_[l];r&&a.removeEventListener(l,r),a.addEventListener(l,_[l]=function(p){c&&c.call(this,p)})},T=a=>{const l=new Map;return a.forEach(c=>l.set(c,c)),l},E=(a,l)=>{typeof a=="function"?a(l):a!=null&&(a.current=l)},N=(...a)=>l=>{a.forEach(c=>{E(c,l)})},i=(a,l)=>{const c=(_,r)=>t.createElement(a,V(W({},_),{forwardedRef:r}));return c.displayName=l,t.forwardRef(c)},e=(a,l,c,_)=>{_!==void 0&&_();const r=y(a),S=class extends t.Component{constructor(p){super(p),this.setComponentElRef=P=>{this.componentEl=P}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(p){F(this.componentEl,this.props,p)}render(){const q=this.props,{children:p,forwardedRef:P,style:D,className:O,ref:He}=q,Z=X(q,["children","forwardedRef","style","className","ref"]);let w=Object.keys(Z).reduce((U,I)=>{const j=Z[I];if(I.indexOf("on")===0&&I[2]===I[2].toUpperCase()){const L=I.substring(2).toLowerCase();typeof document!="undefined"&&K(L)&&(U[I]=j)}else{const L=typeof j;(L==="string"||L==="boolean"||L==="number")&&(U[v(I)]=j)}return U},{});c&&(w=c(this.props,w));const Ke=V(W({},w),{ref:N(P,this.setComponentElRef),style:D});return(0,t.createElement)(a,Ke,p)}static get displayName(){return r}};return l&&(S.contextType=l),i(S,r)},z=e("kol-abbr"),Y=e("kol-accordion"),M=e("kol-alert"),G=e("kol-badge"),x=e("kol-breadcrumb"),k=e("kol-button"),h=e("kol-button-group"),f=null,g=null,C=e("kol-card"),B=e("kol-details"),s=e("kol-form"),d=e("kol-heading"),m=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),le=e("kol-indented-text"),Pe=null,oe=e("kol-input-checkbox"),ae=e("kol-input-color"),se=e("kol-input-date"),re=e("kol-input-email"),ne=e("kol-input-file"),ie=e("kol-input-number"),ce=e("kol-input-password"),ue=e("kol-input-radio"),de=e("kol-input-range"),me=e("kol-input-text"),_e=e("kol-kolibri"),pe=e("kol-link"),Le=null,be=e("kol-link-group"),ye=e("kol-logo"),ge=e("kol-modal"),he=e("kol-nav"),ve=e("kol-pagination"),ke=e("kol-progress"),fe=e("kol-select"),Se=e("kol-skip-nav"),Re=null,Te=e("kol-spin"),Ee=e("kol-symbol"),Ce=e("kol-table"),Oe=e("kol-tabs"),Fe=e("kol-textarea"),Ae=e("kol-toast"),xe=e("kol-tooltip"),Ie=e("kol-version")}}]);
