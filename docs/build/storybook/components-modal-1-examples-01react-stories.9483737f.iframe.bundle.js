"use strict";var De=Object.defineProperty,Fe=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var j=(s,r,l)=>r in s?De(s,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[r]=l,N=(s,r)=>{for(var l in r||(r={}))H.call(r,l)&&j(s,l,r[l]);if(O)for(var l of O(r))V.call(r,l)&&j(s,l,r[l]);return s},A=(s,r)=>Fe(s,Oe(r));var q=(s,r)=>{var l={};for(var t in s)H.call(s,t)&&r.indexOf(t)<0&&(l[t]=s[t]);if(s!=null&&O)for(var t of O(s))r.indexOf(t)<0&&V.call(s,t)&&(l[t]=s[t]);return l};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1885],{"./src/components/modal/1-examples/01react.stories.tsx":(s,r,l)=>{l.r(r),l.d(r,{Erweitert:()=>M,default:()=>T});var t=l("./node_modules/react/index.js"),d=l("./node_modules/@public-ui/react/dist/index.mjs"),k=l("./src/components/bik-bitv-test.tsx"),v=Object.defineProperty,S=Object.defineProperties,F=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(p,c,u)=>c in p?v(p,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):p[c]=u,x=(p,c)=>{for(var u in c||(c={}))K.call(c,u)&&h(p,u,c[u]);if(E)for(var u of E(c))g.call(c,u)&&h(p,u,c[u]);return p},C=(p,c)=>S(p,F(c)),e=null,W={Erweitert:{startLoc:{col:25,line:12},endLoc:{col:1,line:101},startBody:{col:25,line:12},endBody:{col:1,line:101}}};const T=C(x({},k.BS),{title:"React/Modal/Beispiele",component:d.Ud}),M=()=>(setTimeout(()=>{function p(u){return R=>{document.querySelector(u)._activeElement=R.target}}function c(u){return()=>{document.querySelector(u)._activeElement=null}}document.querySelector("#button-1")._on={onClick:p("#modal-1")},document.querySelector("#button-2")._on={onClick:p("#modal-2")},document.querySelector("#modal-1-cancel")._on={onClick:c("#modal-1")},document.querySelector("#modal-2-cancel")._on={onClick:c("#modal-2")}},0),t.createElement(k._F,{_heading:"Modal"},t.createElement("p",null,"Die Modal-Komponente implementiert die \xDCberlagerungsfunktion (Overlay's). Sie ist so realisiert, dass das Modal unabh\xE4ngig von dem \xDCberlagerungsinhalt ist. Es kann also nicht nur ein Dialog sondern auch jedes beliebige andere HTML als \xDCberlagerungsinhalt verwendet werden."),t.createElement(d.ox,{_summary:"Hinweise zur Barrierefreiheit"},t.createElement("p",null,"Beim \xD6ffnen eines Modals, muss der Entwickler:in das aktive Element \xFCbergeben, zu dem nach dem Schlie\xDFen des Modals automatisch der Fokus gesetzt werden soll."),t.createElement("p",null,"Des Weiteren gibt es immer nur maximal ein aktives Modal, welches alle selektierbaren Elemente deaktiviert au\xDFer die innerhalb des eigenen Modals. Hierbei ist zu beachten, dass KoliBri nur Elemente deaktiviert die sich im Browser-Seitenbereich befinden. Das Fokussieren den Browser-Men\xFC's ist weiterhin m\xF6glich."),t.createElement("p",null,"Zus\xE4tzlich stellt die Komponente sicher, dass die Darstellung beliebiger Inhalte bei beliebiger Zoomstufe barrierefrei bleibt. Hierzu wird ein vertikaler Scroll-Balken bei bedarf verwendet.")),t.createElement(d.ic,{id:"button-1",style:{display:"inline-block",marginTop:"1rem",marginRight:"1rem"},_label:"Modal mit Schlie\xDFen \xF6ffnen"}),t.createElement(d.ic,{id:"button-2",style:{display:"inline-block",marginTop:"1rem"},_label:"Modal ohne Schlie\xDFen \xF6ffnen"}),t.createElement(d.Ud,{id:"modal-1",_ariaLabel:"Willkommen bei KoliBri",_width:"80%"},t.createElement(d.Gc,{_headline:"Willkommen bei KoliBri","_has-footer":!0,style:{backgroundColor:"white",padding:".5rem",display:"block",borderRadius:"var(--kolibri-border-radius)"}},t.createElement("div",{slot:"content",className:"py-1"},'"Open Source ist gar nicht so offen wie alle meinen." - Bill Gates'),t.createElement("div",{slot:"footer",className:"py-1"},t.createElement(d.ic,{id:"modal-1-cancel",_label:"Schlie\xDFen"})))),t.createElement(d.Ud,{id:"modal-2",_ariaLabel:"Vorgang l\xF6schen",_width:"400px"},t.createElement(d.Gc,{_headline:"Vorgang l\xF6schen","_has-footer":!0,style:{backgroundColor:"white",padding:".5rem",display:"block",borderRadius:"var(--kolibri-border-radius)"}},t.createElement("div",{slot:"content",className:"py-1"},'"Wir denken, gerade weil Open Source Entwickler anhand ihrer Beitr\xE4ge bewertet werden k\xF6nnen, widmen sie der Qualit\xE4t viel mehr Aufmerksamkeit." - Peter Quinn'),t.createElement("div",{slot:"footer",className:"py-1"},t.createElement(d.ic,{id:"modal-2-cancel",_label:"Schlie\xDFen"}))))));M.parameters=x({storySource:{source:`() => {
	setTimeout(() => {
		function onOpenModal(modal: string) {
			return (event: Event) => {
				document.querySelector(modal)._activeElement = event.target;
			};
		}
		function onCloseModal(modal: string) {
			return () => {
				document.querySelector(modal)._activeElement = null;
			};
		}
		document.querySelector('#button-1')._on = {
			onClick: onOpenModal('#modal-1'),
		};
		document.querySelector('#button-2')._on = {
			onClick: onOpenModal('#modal-2'),
		};
		document.querySelector('#modal-1-cancel')._on = {
			onClick: onCloseModal('#modal-1'),
		};
		document.querySelector('#modal-2-cancel')._on = {
			onClick: onCloseModal('#modal-2'),
		};
	}, 0);
	return (
		<BikBitvTest _heading="Modal">
			<p>
				Die Modal-Komponente implementiert die \xDCberlagerungsfunktion (Overlay's). Sie ist so realisiert, dass das Modal unabh\xE4ngig von dem \xDCberlagerungsinhalt
				ist. Es kann also nicht nur ein Dialog sondern auch jedes beliebige andere HTML als \xDCberlagerungsinhalt verwendet werden.
			</p>
			<KolDetails _summary="Hinweise zur Barrierefreiheit">
				<p>
					Beim \xD6ffnen eines Modals, muss der Entwickler:in das aktive Element \xFCbergeben, zu dem nach dem Schlie\xDFen des Modals automatisch der Fokus gesetzt
					werden soll.
				</p>
				<p>
					Des Weiteren gibt es immer nur maximal ein aktives Modal, welches alle selektierbaren Elemente deaktiviert au\xDFer die innerhalb des eigenen Modals.
					Hierbei ist zu beachten, dass KoliBri nur Elemente deaktiviert die sich im Browser-Seitenbereich befinden. Das Fokussieren den Browser-Men\xFC's ist
					weiterhin m\xF6glich.
				</p>
				<p>
					Zus\xE4tzlich stellt die Komponente sicher, dass die Darstellung beliebiger Inhalte bei beliebiger Zoomstufe barrierefrei bleibt. Hierzu wird ein
					vertikaler Scroll-Balken bei bedarf verwendet.
				</p>
			</KolDetails>
			<KolButton id="button-1" style={{ display: 'inline-block', marginTop: '1rem', marginRight: '1rem' }} _label="Modal mit Schlie\xDFen \xF6ffnen"></KolButton>
			<KolButton id="button-2" style={{ display: 'inline-block', marginTop: '1rem' }} _label="Modal ohne Schlie\xDFen \xF6ffnen"></KolButton>
			<KolModal id="modal-1" _ariaLabel="Willkommen bei KoliBri" _width="80%">
				<KolCard
					_headline="Willkommen bei KoliBri"
					_has-footer
					style={{
						backgroundColor: 'white',
						padding: '.5rem',
						display: 'block',
						borderRadius: 'var(--kolibri-border-radius)',
					}}
				>
					<div slot="content" className="py-1">
						"Open Source ist gar nicht so offen wie alle meinen." - Bill Gates
					</div>
					<div slot="footer" className="py-1">
						<KolButton id="modal-1-cancel" _label="Schlie\xDFen"></KolButton>
					</div>
				</KolCard>
			</KolModal>
			<KolModal id="modal-2" _ariaLabel="Vorgang l\xF6schen" _width="400px">
				<KolCard
					_headline="Vorgang l\xF6schen"
					_has-footer
					style={{
						backgroundColor: 'white',
						padding: '.5rem',
						display: 'block',
						borderRadius: 'var(--kolibri-border-radius)',
					}}
				>
					<div slot="content" className="py-1">
						"Wir denken, gerade weil Open Source Entwickler anhand ihrer Beitr\xE4ge bewertet werden k\xF6nnen, widmen sie der Qualit\xE4t viel mehr Aufmerksamkeit." -
						Peter Quinn
					</div>
					<div slot="footer" className="py-1">
						<KolButton id="modal-2-cancel" _label="Schlie\xDFen"></KolButton>
					</div>
				</KolCard>
			</KolModal>
		</BikBitvTest>
	);
}`}},M.parameters)},"./src/components/bik-bitv-test.tsx":(s,r,l)=>{l.d(r,{BS:()=>S,_F:()=>h,kM:()=>E});var t=l("./node_modules/react/index.js"),d=l("./node_modules/@public-ui/react/dist/index.mjs"),k=l("./node_modules/@leanup/form/esm/index.js");const v=new k.I2;v.validators.add(k.Fj);const S={parameters:{layout:"centered"}};new k.gs("input",{mandatory:!0}).setValidationHandler(v);const E={_error:"Ich bin ein Fehler"};let K="";const g=localStorage.getItem("kol-theme");typeof g=="string"&&(K=g);class h extends t.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:K}}renderModal(){return t.createElement(d.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},t.createElement(d.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},t.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),t.createElement("div",{slot:"footer"},t.createElement(d.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return t.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},t.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},t.createElement(d.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(C,e)=>{Array.isArray(e)&&e.length>0&&typeof e[0]=="string"&&(localStorage.setItem("kol-theme",e[0]),this.setState(()=>({theme:e[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),t.createElement(d.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:C=>{this.setState(()=>({activeElement:C.target}))}}}),this.renderModal()),t.createElement(d.HA,null,this.props._heading),this.props.children)}}try{h.displayName="BikBitvTest",h.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:h.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(x){}},"./node_modules/@public-ui/react/dist/index.mjs":(s,r,l)=>{l.d(r,{$o:()=>pe,CO:()=>Be,CV:()=>ee,CX:()=>ie,Er:()=>p,Gc:()=>G,HA:()=>Y,Jl:()=>$,K5:()=>M,Lj:()=>le,MA:()=>_e,Np:()=>oe,Nv:()=>me,O:()=>ne,P:()=>ve,Q4:()=>ke,QK:()=>be,Qs:()=>Ce,RZ:()=>T,T5:()=>W,TE:()=>te,TQ:()=>de,UD:()=>xe,Ud:()=>he,Vp:()=>Ke,Vs:()=>ue,WD:()=>ce,WR:()=>ge,Ze:()=>Se,c2:()=>re,cJ:()=>J,ic:()=>u,is:()=>ye,lo:()=>c,m5:()=>Q,ox:()=>Z,qq:()=>Ee,r7:()=>fe,rW:()=>X,sy:()=>se,u_:()=>Me,uz:()=>R,z5:()=>ae});var t=l("./node_modules/react/index.js"),d=l("./node_modules/react-dom/index.js");const k=n=>n.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),v=n=>n.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),S=(n,o,a={})=>{if(n instanceof Element){const m=F(n.classList,o,a);m!==""&&(n.className=m),Object.keys(o).forEach(i=>{if(!(i==="children"||i==="style"||i==="ref"||i==="class"||i==="className"||i==="forwardedRef"))if(i.indexOf("on")===0&&i[2]===i[2].toUpperCase()){const _=i.substring(2),b=_[0].toLowerCase()+_.substring(1);E(b)||K(n,b,o[i])}else n[i]=o[i],typeof o[i]==="string"&&n.setAttribute(v(i),o[i])})}},F=(n,o,a)=>{const m=o.className||o.class,i=a.className||a.class,_=g(n),b=g(m?m.split(" "):[]),w=g(i?i.split(" "):[]),B=[];return _.forEach(f=>{b.has(f)?(B.push(f),b.delete(f)):w.has(f)||B.push(f)}),b.forEach(f=>B.push(f)),B.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const E=n=>{if(typeof document=="undefined")return!0;{const o="on"+n;let a=o in document;if(!a){const m=document.createElement("div");m.setAttribute(o,"return;"),a=typeof m[o]=="function"}return a}},K=(n,o,a)=>{const m=n.__events||(n.__events={}),i=m[o];i&&n.removeEventListener(o,i),n.addEventListener(o,m[o]=function(b){a&&a.call(this,b)})},g=n=>{const o=new Map;return n.forEach(a=>o.set(a,a)),o},h=(n,o)=>{typeof n=="function"?n(o):n!=null&&(n.current=o)},x=(...n)=>o=>{n.forEach(a=>{h(a,o)})},C=(n,o)=>{const a=(m,i)=>t.createElement(n,A(N({},m),{forwardedRef:i}));return a.displayName=o,t.forwardRef(a)},e=(n,o,a,m)=>{m!==void 0&&m();const i=k(n),_=class extends t.Component{constructor(b){super(b),this.setComponentElRef=w=>{this.componentEl=w}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(b){S(this.componentEl,this.props,b)}render(){const U=this.props,{children:b,forwardedRef:w,style:B,className:f,ref:Ne}=U,z=q(U,["children","forwardedRef","style","className","ref"]);let I=Object.keys(z).reduce((P,y)=>{const L=z[y];if(y.indexOf("on")===0&&y[2]===y[2].toUpperCase()){const D=y.substring(2).toLowerCase();typeof document!="undefined"&&E(D)&&(P[y]=L)}else{const D=typeof L;(D==="string"||D==="boolean"||D==="number")&&(P[v(y)]=L)}return P},{});a&&(I=a(this.props,I));const we=A(N({},I),{ref:x(w,this.setComponentElRef),style:B});return(0,t.createElement)(n,we,b)}static get displayName(){return i}};return o&&(_.contextType=o),C(_,i)},W=e("kol-abbr"),T=e("kol-accordion"),M=e("kol-alert"),p=e("kol-badge"),c=e("kol-breadcrumb"),u=e("kol-button"),R=e("kol-button-group"),Te=null,Re=null,G=e("kol-card"),Z=e("kol-details"),Q=e("kol-form"),Y=e("kol-heading"),$=e("kol-icon"),J=e("kol-icon-font-awesome"),X=e("kol-icon-icofont"),ee=e("kol-indented-text"),Ie=null,te=e("kol-input-checkbox"),oe=e("kol-input-color"),ne=e("kol-input-date"),le=e("kol-input-email"),ie=e("kol-input-file"),re=e("kol-input-number"),ae=e("kol-input-password"),se=e("kol-input-radio"),de=e("kol-input-range"),ce=e("kol-input-text"),ue=e("kol-kolibri"),me=e("kol-link"),Pe=null,pe=e("kol-link-group"),be=e("kol-logo"),he=e("kol-modal"),_e=e("kol-nav"),ke=e("kol-pagination"),ge=e("kol-progress"),fe=e("kol-select"),ve=e("kol-skip-nav"),Le=null,Ee=e("kol-spin"),ye=e("kol-symbol"),Ke=e("kol-table"),xe=e("kol-tabs"),Ce=e("kol-textarea"),Be=e("kol-toast"),Se=e("kol-tooltip"),Me=e("kol-version")}}]);
