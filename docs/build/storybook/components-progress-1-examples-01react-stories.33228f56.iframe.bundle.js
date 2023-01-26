"use strict";var Re=Object.defineProperty,xe=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var G=(a,r,s)=>r in a?Re(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,W=(a,r)=>{for(var s in r||(r={}))H.call(r,s)&&G(a,s,r[s]);if(M)for(var s of M(r))Y.call(r,s)&&G(a,s,r[s]);return a},U=(a,r)=>xe(a,Me(r));var Z=(a,r)=>{var s={};for(var n in a)H.call(a,n)&&r.indexOf(n)<0&&(s[n]=a[n]);if(a!=null&&M)for(var n of M(a))r.indexOf(n)<0&&Y.call(a,n)&&(s[n]=a[n]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1469],{"./src/components/progress/1-examples/01react.stories.tsx":(a,r,s)=>{s.r(r),s.d(r,{Erweitert:()=>O,default:()=>D});var n=s("./node_modules/@public-ui/react/dist/index.mjs"),_=s("./node_modules/react/index.js"),h=s("./src/components/bik-bitv-test.tsx"),y=Object.defineProperty,P=Object.defineProperties,A=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(d,c,p)=>c in d?y(d,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[c]=p,C=(d,c)=>{for(var p in c||(c={}))E.call(c,p)&&f(d,p,c[p]);if(v)for(var p of v(c))k.call(c,p)&&f(d,p,c[p]);return d},S=(d,c)=>P(d,A(c)),e=null,j={Erweitert:{startLoc:{col:25,line:29},endLoc:{col:1,line:52},startBody:{col:25,line:29},endBody:{col:1,line:52}}};const D=S(C({},h.BS),{title:"React/Progress/Beispiele",component:n.WR}),R=d=>{const c=document.querySelectorAll('kol-button[_label="Simulation starten"]'),p=document.querySelectorAll("kol-progress");let x=0;c[d].setAttribute("_disabled","true");const F=setInterval(()=>{x<=100?(p[d].setAttribute("_value",x),x+=5):(clearInterval(F),c[d].removeAttribute("_disabled"))},500)},O=()=>_.createElement("div",{style:{display:"grid",gap:"0.25em"}},_.createElement(n.WR,null),_.createElement(n.ic,{_label:"Simulation starten",_on:{onClick:()=>{R(0)}}}),_.createElement(n.WR,{_unit:"Schnitzel",_value:"75",_type:"cycle"}),_.createElement(n.ic,{_label:"Simulation starten",_on:{onClick:()=>{R(1)}}}));O.parameters=C({storySource:{source:`() => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolProgress></KolProgress>
			<KolButton
				_label="Simulation starten"
				_on={{
					onClick: () => {
						runProcess(0);
					},
				}}
			></KolButton>
			<KolProgress _unit="Schnitzel" _value="75" _type="cycle"></KolProgress>
			<KolButton
				_label="Simulation starten"
				_on={{
					onClick: () => {
						runProcess(1);
					},
				}}
			></KolButton>
		</div>
	);
}`}},O.parameters)},"./src/components/bik-bitv-test.tsx":(a,r,s)=>{s.d(r,{BS:()=>P,_F:()=>f,kM:()=>v});var n=s("./node_modules/react/index.js"),_=s("./node_modules/@public-ui/react/dist/index.mjs"),h=s("./node_modules/@leanup/form/esm/index.js");const y=new h.I2;y.validators.add(h.Fj);const P={parameters:{layout:"centered"}};new h.gs("input",{mandatory:!0}).setValidationHandler(y);const v={_error:"Ich bin ein Fehler"};let E="";const k=localStorage.getItem("kol-theme");typeof k=="string"&&(E=k);class f extends n.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:E}}renderModal(){return n.createElement(_.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},n.createElement(_.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},n.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),n.createElement("div",{slot:"footer"},n.createElement(_.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return n.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},n.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},n.createElement(_.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(S,e)=>{Array.isArray(e)&&e.length>0&&typeof e[0]=="string"&&(localStorage.setItem("kol-theme",e[0]),this.setState(()=>({theme:e[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),n.createElement(_.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:S=>{this.setState(()=>({activeElement:S.target}))}}}),this.renderModal()),n.createElement(_.HA,null,this.props._heading),this.props.children)}}try{f.displayName="BikBitvTest",f.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:f.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(C){}},"./node_modules/@public-ui/react/dist/index.mjs":(a,r,s)=>{s.d(r,{$o:()=>fe,CO:()=>Oe,CV:()=>oe,CX:()=>ie,Er:()=>O,Gc:()=>Q,HA:()=>X,Jl:()=>q,K5:()=>R,Lj:()=>re,MA:()=>be,Np:()=>se,Nv:()=>_e,O:()=>le,P:()=>Ke,Q4:()=>he,QK:()=>ge,Qs:()=>Pe,RZ:()=>D,T5:()=>j,TE:()=>ne,TQ:()=>de,UD:()=>Be,Ud:()=>ke,Vp:()=>Se,Vs:()=>me,WD:()=>pe,WR:()=>ye,Ze:()=>Te,c2:()=>ae,cJ:()=>ee,ic:()=>c,is:()=>Ce,lo:()=>d,m5:()=>J,ox:()=>$,qq:()=>Ee,r7:()=>ve,rW:()=>te,sy:()=>ue,u_:()=>Ie,uz:()=>p,z5:()=>ce});var n=s("./node_modules/react/index.js"),_=s("./node_modules/react-dom/index.js");const h=o=>o.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),y=o=>o.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),P=(o,t,i={})=>{if(o instanceof Element){const u=A(o.classList,t,i);u!==""&&(o.className=u),Object.keys(t).forEach(l=>{if(!(l==="children"||l==="style"||l==="ref"||l==="class"||l==="className"||l==="forwardedRef"))if(l.indexOf("on")===0&&l[2]===l[2].toUpperCase()){const g=l.substring(2),m=g[0].toLowerCase()+g.substring(1);v(m)||E(o,m,t[l])}else o[l]=t[l],typeof t[l]==="string"&&o.setAttribute(y(l),t[l])})}},A=(o,t,i)=>{const u=t.className||t.class,l=i.className||i.class,g=k(o),m=k(u?u.split(" "):[]),T=k(l?l.split(" "):[]),B=[];return g.forEach(b=>{m.has(b)?(B.push(b),m.delete(b)):T.has(b)||B.push(b)}),m.forEach(b=>B.push(b)),B.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const v=o=>{if(typeof document=="undefined")return!0;{const t="on"+o;let i=t in document;if(!i){const u=document.createElement("div");u.setAttribute(t,"return;"),i=typeof u[t]=="function"}return i}},E=(o,t,i)=>{const u=o.__events||(o.__events={}),l=u[t];l&&o.removeEventListener(t,l),o.addEventListener(t,u[t]=function(m){i&&i.call(this,m)})},k=o=>{const t=new Map;return o.forEach(i=>t.set(i,i)),t},f=(o,t)=>{typeof o=="function"?o(t):o!=null&&(o.current=t)},C=(...o)=>t=>{o.forEach(i=>{f(i,t)})},S=(o,t)=>{const i=(u,l)=>n.createElement(o,U(W({},u),{forwardedRef:l}));return i.displayName=t,n.forwardRef(i)},e=(o,t,i,u)=>{u!==void 0&&u();const l=h(o),g=class extends n.Component{constructor(m){super(m),this.setComponentElRef=T=>{this.componentEl=T}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(m){P(this.componentEl,this.props,m)}render(){const V=this.props,{children:m,forwardedRef:T,style:B,className:b,ref:Ne}=V,z=Z(V,["children","forwardedRef","style","className","ref"]);let L=Object.keys(z).reduce((w,K)=>{const N=z[K];if(K.indexOf("on")===0&&K[2]===K[2].toUpperCase()){const I=K.substring(2).toLowerCase();typeof document!="undefined"&&v(I)&&(w[K]=N)}else{const I=typeof N;(I==="string"||I==="boolean"||I==="number")&&(w[y(K)]=N)}return w},{});i&&(L=i(this.props,L));const Ae=U(W({},L),{ref:C(T,this.setComponentElRef),style:B});return(0,n.createElement)(o,Ae,m)}static get displayName(){return l}};return t&&(g.contextType=t),S(g,l)},j=e("kol-abbr"),D=e("kol-accordion"),R=e("kol-alert"),O=e("kol-badge"),d=e("kol-breadcrumb"),c=e("kol-button"),p=e("kol-button-group"),x=null,F=null,Q=e("kol-card"),$=e("kol-details"),J=e("kol-form"),X=e("kol-heading"),q=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),oe=e("kol-indented-text"),De=null,ne=e("kol-input-checkbox"),se=e("kol-input-color"),le=e("kol-input-date"),re=e("kol-input-email"),ie=e("kol-input-file"),ae=e("kol-input-number"),ce=e("kol-input-password"),ue=e("kol-input-radio"),de=e("kol-input-range"),pe=e("kol-input-text"),me=e("kol-kolibri"),_e=e("kol-link"),Le=null,fe=e("kol-link-group"),ge=e("kol-logo"),ke=e("kol-modal"),be=e("kol-nav"),he=e("kol-pagination"),ye=e("kol-progress"),ve=e("kol-select"),Ke=e("kol-skip-nav"),we=null,Ee=e("kol-spin"),Ce=e("kol-symbol"),Se=e("kol-table"),Be=e("kol-tabs"),Pe=e("kol-textarea"),Oe=e("kol-toast"),Te=e("kol-tooltip"),Ie=e("kol-version")}}]);
