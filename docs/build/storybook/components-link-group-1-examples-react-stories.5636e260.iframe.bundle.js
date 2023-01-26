"use strict";var De=Object.defineProperty,Ie=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var Q=(c,l,i)=>l in c?De(c,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[l]=i,W=(c,l)=>{for(var i in l||(l={}))Z.call(l,i)&&Q(c,i,l[i]);if(B)for(var i of B(l))$.call(l,i)&&Q(c,i,l[i]);return c},U=(c,l)=>Ie(c,Re(l));var J=(c,l)=>{var i={};for(var u in c)Z.call(c,u)&&l.indexOf(u)<0&&(i[u]=c[u]);if(c!=null&&B)for(var u of B(c))l.indexOf(u)<0&&$.call(c,u)&&(i[u]=c[u]);return i};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2291],{"./src/components/link-group/1-examples/react.stories.tsx":(c,l,i)=>{i.r(l),i.d(l,{Darstellungsvarianten:()=>D,Icons:()=>b,ListStyleType:()=>L,OrientationH:()=>y,Standard:()=>f,Text:()=>k,default:()=>P});var u=i("./node_modules/@public-ui/react/dist/index.mjs"),s=i("./node_modules/react/index.js"),T=i("./src/components/link-group/1-examples/autogen.configuration.ts"),K=Object.defineProperty,w=Object.defineProperties,N=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,A=(r,_,g)=>_ in r?K(r,_,{enumerable:!0,configurable:!0,writable:!0,value:g}):r[_]=g,p=(r,_)=>{for(var g in _||(_={}))q.call(_,g)&&A(r,g,_[g]);if(O)for(var g of O(_))F.call(_,g)&&A(r,g,_[g]);return r},G=(r,_)=>w(r,N(_)),e=null,H={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Icons:{startLoc:{col:21,line:38},endLoc:{col:1,line:46},startBody:{col:21,line:38},endBody:{col:1,line:46}},Text:{startLoc:{col:20,line:58},endLoc:{col:1,line:69},startBody:{col:20,line:58},endBody:{col:1,line:69}},OrientationH:{startLoc:{col:28,line:80},endLoc:{col:1,line:95},startBody:{col:28,line:80},endBody:{col:1,line:95}},ListStyleType:{startLoc:{col:29,line:106},endLoc:{col:1,line:121},startBody:{col:29,line:106},endBody:{col:1,line:121}},Darstellungsvarianten:{startLoc:{col:37,line:127},endLoc:{col:1,line:174},startBody:{col:37,line:127},endBody:{col:1,line:174}}};const P=G(p({},T.S),{title:"React/LinkGroup/Beispiele",component:u.$o}),h=r=>s.createElement(u.$o,p({},r),r.children),E={},f=r=>s.createElement("div",null,s.createElement(h,p({},r)));f.args=p({},E);const b=r=>s.createElement("div",null,s.createElement(h,{_ariaLabel:"\xDCberschrift LinkGroup",_heading:"Eine \xDCberschrift",_links:"[{'_label':'Link nur Text','_href':'https://www.w3.org'},{'_label':'Link mit Icon','_href':'https://www.w3.org','_icon':'icofont-home'},{'_label':'Link nur Icon','_href':'https://www.w3.org','_icon':'icofont-home','_iconOnly':'true'},{'_label':'Link ohne Unterstrich','_href':'https://www.w3.org','_underline':'false'}]"}));b.args=G(p({},E),{_heading:"Eine \xDCberschrift"}),b.storyName="Icons";const k=r=>s.createElement("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",s.createElement("br",null),s.createElement("br",null),s.createElement(h,{_ariaLabel:"Linkliste innerhalb eines Flie\xDFtextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"}),s.createElement("br",null),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.");k.args=p({},E),k.storyName="Flie\xDFtext";const y=r=>s.createElement("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",s.createElement("br",null),s.createElement("br",null),s.createElement(h,{_ariaLabel:"Linkliste innerhalb eines Flie\xDFtextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]",_orientation:"horizontal"}),s.createElement("br",null),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.");y.args=p({},E),y.storyName="Horizontale Ausrichtung";const L=r=>s.createElement("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",s.createElement("br",null),s.createElement("br",null),s.createElement(h,{_ariaLabel:"Linkliste innerhalb eines Flie\xDFtextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]",_listStyleType:"square"}),s.createElement("br",null),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.");L.args=p({},E),L.storyName="List-Style-Type";const D=()=>s.createElement("div",{style:{display:"grid",gap:"0.25em"}},s.createElement(h,{_ariaLabel:"Fehlerliste",_links:[{_label:"Fehler 1 (#anschrift_anschrift_adresse_strasse)",_selector:"#anschrift_anschrift_adresse_strasse"},{_label:"Fehler 2 (#password) und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_selector:"#password"},{_label:"Fehler 3 - Sprungmarke (#gibt-es-nicht) und ich_bin_ein_echt_langes_Wort",_selector:"#gibt-es-nicht"}]}),s.createElement(h,{_ariaLabel:"Fehlerliste mit Rahmen",_heading:"Liste der Formularfehler (nummeriert)",_level:2,_ordered:!0,style:{border:"1px solid #000",borderRadius:"5px",padding:"0.25rem 0.5rem"},_links:[{_label:"Fehler 1 (#anschrift_anschrift_adresse_strasse)",_selector:"#anschrift_anschrift_adresse_strasse"},{_label:"Fehler 2 (#password) und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_selector:"#password"},{_label:"Fehler 3 - Sprungmarke (#gibt-es-nicht) und ich_bin_ein_echt_langes_Wort",_selector:"#gibt-es-nicht"}]}));f.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<KolLinkGroup {...args}></KolLinkGroup>
	</div>
)`}},f.parameters),b.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<KolLinkGroup
			_ariaLabel="\xDCberschrift LinkGroup"
			_heading="Eine \xDCberschrift"
			_links="[{'_label':'Link nur Text','_href':'https://www.w3.org'},{'_label':'Link mit Icon','_href':'https://www.w3.org','_icon':'icofont-home'},{'_label':'Link nur Icon','_href':'https://www.w3.org','_icon':'icofont-home','_iconOnly':'true'},{'_label':'Link ohne Unterstrich','_href':'https://www.w3.org','_underline':'false'}]"
		></KolLinkGroup>
	</div>
)`}},b.parameters),k.parameters=p({storySource:{source:`(args: any) => (
	<div>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
		<br />
		<br />
		<KolLinkGroup _ariaLabel="Linkliste innerhalb eines Flie\xDFtextes" _links="[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"></KolLinkGroup>
		<br />
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
	</div>
)`}},k.parameters),y.parameters=p({storySource:{source:`(args: any) => (
	<div>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
		<br />
		<br />
		<KolLinkGroup
			_ariaLabel="Linkliste innerhalb eines Flie\xDFtextes"
			_links="[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"
			_orientation="horizontal"
		></KolLinkGroup>
		<br />
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
	</div>
)`}},y.parameters),L.parameters=p({storySource:{source:`(args: any) => (
	<div>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
		<br />
		<br />
		<KolLinkGroup
			_ariaLabel="Linkliste innerhalb eines Flie\xDFtextes"
			_links="[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"
			_listStyleType="square"
		></KolLinkGroup>
		<br />
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
	</div>
)`}},L.parameters),D.parameters=p({storySource:{source:`() => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolLinkGroup
				_ariaLabel="Fehlerliste"
				_links={[
					{
						_label: 'Fehler 1 (#anschrift_anschrift_adresse_strasse)',
						_selector: '#anschrift_anschrift_adresse_strasse',
					},
					{
						_label: 'Fehler 2 (#password) und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen',
						_selector: '#password',
					},
					{
						_label: 'Fehler 3 - Sprungmarke (#gibt-es-nicht) und ich_bin_ein_echt_langes_Wort',
						_selector: '#gibt-es-nicht',
					},
				]}
			></KolLinkGroup>
			<KolLinkGroup
				_ariaLabel="Fehlerliste mit Rahmen"
				_heading="Liste der Formularfehler (nummeriert)"
				_level={2}
				_ordered
				style={{
					border: '1px solid #000',
					borderRadius: '5px',
					padding: '0.25rem 0.5rem',
				}}
				_links={[
					{
						_label: 'Fehler 1 (#anschrift_anschrift_adresse_strasse)',
						_selector: '#anschrift_anschrift_adresse_strasse',
					},
					{
						_label: 'Fehler 2 (#password) und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen',
						_selector: '#password',
					},
					{
						_label: 'Fehler 3 - Sprungmarke (#gibt-es-nicht) und ich_bin_ein_echt_langes_Wort',
						_selector: '#gibt-es-nicht',
					},
				]}
			></KolLinkGroup>
		</div>
	);
}`}},D.parameters);try{f.displayName="Standard",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/react.stories.tsx#Standard"]={docgenInfo:f.__docgenInfo,name:"Standard",path:"src/components/link-group/1-examples/react.stories.tsx#Standard"})}catch(r){}try{b.displayName="Icons",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Icons",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/react.stories.tsx#Icons"]={docgenInfo:b.__docgenInfo,name:"Icons",path:"src/components/link-group/1-examples/react.stories.tsx#Icons"})}catch(r){}try{k.displayName="Text",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/react.stories.tsx#Text"]={docgenInfo:k.__docgenInfo,name:"Text",path:"src/components/link-group/1-examples/react.stories.tsx#Text"})}catch(r){}try{y.displayName="OrientationH",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"OrientationH",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/react.stories.tsx#OrientationH"]={docgenInfo:y.__docgenInfo,name:"OrientationH",path:"src/components/link-group/1-examples/react.stories.tsx#OrientationH"})}catch(r){}try{L.displayName="ListStyleType",L.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ListStyleType",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/react.stories.tsx#ListStyleType"]={docgenInfo:L.__docgenInfo,name:"ListStyleType",path:"src/components/link-group/1-examples/react.stories.tsx#ListStyleType"})}catch(r){}},"./src/components/link-group/1-examples/autogen.configuration.ts":(c,l,i)=>{i.d(l,{S:()=>w});var u=i("./node_modules/@storybook/addon-jest/dist/esm/index.js"),s=i("./node_modules/@public-ui/components/jest-test-results.json"),T=i("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const K={_heading:{name:"\xDCberschrift",control:{type:"text"},defaultValue:"\xDCberschrift f\xFCr Linkliste"},_links:{name:"Links",control:{type:"text"},defaultValue:JSON.stringify([{_label:"Link nur Text",_href:"#/"},{_label:"Link nur Text",_href:"#/"},{_label:"Link nur Text",_href:"#/"}])},_orientation:{name:"Ausrichtung",control:{type:"select"},options:["vertical","horizontal"],type:{required:!0},defaultValue:"vertical"},_listStyleType:{name:"Listensymbol",control:{type:"select"},options:["disc","circle","square","none"],type:{required:!0},defaultValue:"disc"}},w={decorators:[(0,u.x)({results:s})],parameters:{badges:[T.NZ.STABLE],jest:["link-group.e2e.ts","link-group.spec.ts","link-group.spec.tsx"],status:{type:"bitv"}},argTypes:K}},"./node_modules/@public-ui/react/dist/index.mjs":(c,l,i)=>{i.d(l,{$o:()=>ge,CO:()=>Te,CV:()=>oe,CX:()=>le,Er:()=>E,Gc:()=>D,HA:()=>g,Jl:()=>X,K5:()=>h,Lj:()=>re,MA:()=>he,Np:()=>ne,Nv:()=>me,O:()=>se,P:()=>xe,Q4:()=>fe,QK:()=>be,Qs:()=>Ce,RZ:()=>P,T5:()=>H,TE:()=>ie,TQ:()=>pe,UD:()=>Ke,Ud:()=>ke,Vp:()=>ve,Vs:()=>_e,WD:()=>de,WR:()=>ye,Ze:()=>we,c2:()=>ae,cJ:()=>ee,ic:()=>b,is:()=>Ee,lo:()=>f,m5:()=>_,ox:()=>r,qq:()=>Se,r7:()=>Le,rW:()=>te,sy:()=>ue,u_:()=>Oe,uz:()=>k,z5:()=>ce});var u=i("./node_modules/react/index.js"),s=i("./node_modules/react-dom/index.js");const T=o=>o.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),K=o=>o.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),w=(o,t,a={})=>{if(o instanceof Element){const d=N(o.classList,t,a);d!==""&&(o.className=d),Object.keys(t).forEach(n=>{if(!(n==="children"||n==="style"||n==="ref"||n==="class"||n==="className"||n==="forwardedRef"))if(n.indexOf("on")===0&&n[2]===n[2].toUpperCase()){const x=n.substring(2),m=x[0].toLowerCase()+x.substring(1);O(m)||q(o,m,t[n])}else o[n]=t[n],typeof t[n]==="string"&&o.setAttribute(K(n),t[n])})}},N=(o,t,a)=>{const d=t.className||t.class,n=a.className||a.class,x=F(o),m=F(d?d.split(" "):[]),I=F(n?n.split(" "):[]),C=[];return x.forEach(S=>{m.has(S)?(C.push(S),m.delete(S)):I.has(S)||C.push(S)}),m.forEach(S=>C.push(S)),C.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const O=o=>{if(typeof document=="undefined")return!0;{const t="on"+o;let a=t in document;if(!a){const d=document.createElement("div");d.setAttribute(t,"return;"),a=typeof d[t]=="function"}return a}},q=(o,t,a)=>{const d=o.__events||(o.__events={}),n=d[t];n&&o.removeEventListener(t,n),o.addEventListener(t,d[t]=function(m){a&&a.call(this,m)})},F=o=>{const t=new Map;return o.forEach(a=>t.set(a,a)),t},A=(o,t)=>{typeof o=="function"?o(t):o!=null&&(o.current=t)},p=(...o)=>t=>{o.forEach(a=>{A(a,t)})},G=(o,t)=>{const a=(d,n)=>u.createElement(o,U(W({},d),{forwardedRef:n}));return a.displayName=t,u.forwardRef(a)},e=(o,t,a,d)=>{d!==void 0&&d();const n=T(o),x=class extends u.Component{constructor(m){super(m),this.setComponentElRef=I=>{this.componentEl=I}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(m){w(this.componentEl,this.props,m)}render(){const V=this.props,{children:m,forwardedRef:I,style:C,className:S,ref:Ne}=V,Y=J(V,["children","forwardedRef","style","className","ref"]);let j=Object.keys(Y).reduce((z,v)=>{const M=Y[v];if(v.indexOf("on")===0&&v[2]===v[2].toUpperCase()){const R=v.substring(2).toLowerCase();typeof document!="undefined"&&O(R)&&(z[v]=M)}else{const R=typeof M;(R==="string"||R==="boolean"||R==="number")&&(z[K(v)]=M)}return z},{});a&&(j=a(this.props,j));const Fe=U(W({},j),{ref:p(I,this.setComponentElRef),style:C});return(0,u.createElement)(o,Fe,m)}static get displayName(){return n}};return t&&(x.contextType=t),G(x,n)},H=e("kol-abbr"),P=e("kol-accordion"),h=e("kol-alert"),E=e("kol-badge"),f=e("kol-breadcrumb"),b=e("kol-button"),k=e("kol-button-group"),y=null,L=null,D=e("kol-card"),r=e("kol-details"),_=e("kol-form"),g=e("kol-heading"),X=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),oe=e("kol-indented-text"),Ae=null,ie=e("kol-input-checkbox"),ne=e("kol-input-color"),se=e("kol-input-date"),re=e("kol-input-email"),le=e("kol-input-file"),ae=e("kol-input-number"),ce=e("kol-input-password"),ue=e("kol-input-radio"),pe=e("kol-input-range"),de=e("kol-input-text"),_e=e("kol-kolibri"),me=e("kol-link"),Ge=null,ge=e("kol-link-group"),be=e("kol-logo"),ke=e("kol-modal"),he=e("kol-nav"),fe=e("kol-pagination"),ye=e("kol-progress"),Le=e("kol-select"),xe=e("kol-skip-nav"),Be=null,Se=e("kol-spin"),Ee=e("kol-symbol"),ve=e("kol-table"),Ke=e("kol-tabs"),Ce=e("kol-textarea"),Te=e("kol-toast"),we=e("kol-tooltip"),Oe=e("kol-version")}}]);
