"use strict";var De=Object.defineProperty,Ie=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var Q=(c,l,i)=>l in c?De(c,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[l]=i,W=(c,l)=>{for(var i in l||(l={}))Z.call(l,i)&&Q(c,i,l[i]);if(B)for(var i of B(l))J.call(l,i)&&Q(c,i,l[i]);return c},U=(c,l)=>Ie(c,Re(l));var $=(c,l)=>{var i={};for(var u in c)Z.call(c,u)&&l.indexOf(u)<0&&(i[u]=c[u]);if(c!=null&&B)for(var u of B(c))l.indexOf(u)<0&&J.call(c,u)&&(i[u]=c[u]);return i};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8955],{"./src/components/link-group/1-examples/autogen.wc.stories.tsx":(c,l,i)=>{i.r(l),i.d(l,{Darstellungsvarianten:()=>K,Icons:()=>k,ListStyleType:()=>y,OrientationH:()=>f,Standard:()=>h,Text:()=>b,default:()=>P});var u=i("./node_modules/@public-ui/react/dist/index.mjs"),s=i("./node_modules/react/index.js"),w=i("./src/components/link-group/1-examples/autogen.configuration.ts"),v=Object.defineProperty,T=Object.defineProperties,N=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,R=(r,_,g)=>_ in r?v(r,_,{enumerable:!0,configurable:!0,writable:!0,value:g}):r[_]=g,p=(r,_)=>{for(var g in _||(_={}))q.call(_,g)&&R(r,g,_[g]);if(O)for(var g of O(_))F.call(_,g)&&R(r,g,_[g]);return r},A=(r,_)=>T(r,N(_)),e=null,G={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Icons:{startLoc:{col:21,line:38},endLoc:{col:1,line:46},startBody:{col:21,line:38},endBody:{col:1,line:46}},Text:{startLoc:{col:20,line:58},endLoc:{col:1,line:69},startBody:{col:20,line:58},endBody:{col:1,line:69}},OrientationH:{startLoc:{col:28,line:80},endLoc:{col:1,line:95},startBody:{col:28,line:80},endBody:{col:1,line:95}},ListStyleType:{startLoc:{col:29,line:106},endLoc:{col:1,line:121},startBody:{col:29,line:106},endBody:{col:1,line:121}},Darstellungsvarianten:{startLoc:{col:37,line:127},endLoc:{col:1,line:174},startBody:{col:37,line:127},endBody:{col:1,line:174}}};const P=A(p({},w.S),{title:"Web Components/LinkGroup/Beispiele",component:u.$o}),H=r=>React.createElement(MyComponent,p({},r),r.children),S={},h=r=>s.createElement("div",null,s.createElement("kol-link-group",p({},r)));h.args=p({},S);const k=r=>s.createElement("div",null,s.createElement("kol-link-group",{"_aria-label":"\xDCberschrift LinkGroup",_heading:"Eine \xDCberschrift",_links:"[{'_label':'Link nur Text','_href':'https://www.w3.org'},{'_label':'Link mit Icon','_href':'https://www.w3.org','_icon':'icofont-home'},{'_label':'Link nur Icon','_href':'https://www.w3.org','_icon':'icofont-home','_iconOnly':'true'},{'_label':'Link ohne Unterstrich','_href':'https://www.w3.org','_underline':'false'}]"}));k.args=A(p({},S),{_heading:"Eine \xDCberschrift"}),k.storyName="Icons";const b=r=>s.createElement("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",s.createElement("br",null),s.createElement("br",null),s.createElement("kol-link-group",{"_aria-label":"Linkliste innerhalb eines Flie\xDFtextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"}),s.createElement("br",null),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.");b.args=p({},S),b.storyName="Flie\xDFtext";const f=r=>s.createElement("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",s.createElement("br",null),s.createElement("br",null),s.createElement("kol-link-group",{"_aria-label":"Linkliste innerhalb eines Flie\xDFtextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]",_orientation:"horizontal"}),s.createElement("br",null),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.");f.args=p({},S),f.storyName="Horizontale Ausrichtung";const y=r=>s.createElement("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",s.createElement("br",null),s.createElement("br",null),s.createElement("kol-link-group",{"_aria-label":"Linkliste innerhalb eines Flie\xDFtextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]","_list-style-type":"square"}),s.createElement("br",null),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.");y.args=p({},S),y.storyName="List-Style-Type";const K=()=>s.createElement("div",{style:{display:"grid",gap:"0.25em"}},s.createElement("kol-link-group",{"_aria-label":"Fehlerliste",_links:[{_label:"Fehler 1 (#anschrift_anschrift_adresse_strasse)",_selector:"#anschrift_anschrift_adresse_strasse"},{_label:"Fehler 2 (#password) und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_selector:"#password"},{_label:"Fehler 3 - Sprungmarke (#gibt-es-nicht) und ich_bin_ein_echt_langes_Wort",_selector:"#gibt-es-nicht"}]}),s.createElement("kol-link-group",{"_aria-label":"Fehlerliste mit Rahmen",_heading:"Liste der Formularfehler (nummeriert)",_level:2,_ordered:!0,style:{border:"1px solid #000",borderRadius:"5px",padding:"0.25rem 0.5rem"},_links:[{_label:"Fehler 1 (#anschrift_anschrift_adresse_strasse)",_selector:"#anschrift_anschrift_adresse_strasse"},{_label:"Fehler 2 (#password) und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_selector:"#password"},{_label:"Fehler 3 - Sprungmarke (#gibt-es-nicht) und ich_bin_ein_echt_langes_Wort",_selector:"#gibt-es-nicht"}]}));h.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<kol-link-group {...args}></kol-link-group>
	</div>
)`}},h.parameters),k.parameters=p({storySource:{source:`(args: any) => (
	<div>
		<kol-link-group
			_aria-label="\xDCberschrift LinkGroup"
			_heading="Eine \xDCberschrift"
			_links="[{'_label':'Link nur Text','_href':'https://www.w3.org'},{'_label':'Link mit Icon','_href':'https://www.w3.org','_icon':'icofont-home'},{'_label':'Link nur Icon','_href':'https://www.w3.org','_icon':'icofont-home','_iconOnly':'true'},{'_label':'Link ohne Unterstrich','_href':'https://www.w3.org','_underline':'false'}]"
		></kol-link-group>
	</div>
)`}},k.parameters),b.parameters=p({storySource:{source:`(args: any) => (
	<div>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
		<br />
		<br />
		<kol-link-group _aria-label="Linkliste innerhalb eines Flie\xDFtextes" _links="[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"></kol-link-group>
		<br />
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
	</div>
)`}},b.parameters),f.parameters=p({storySource:{source:`(args: any) => (
	<div>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
		<br />
		<br />
		<kol-link-group
			_aria-label="Linkliste innerhalb eines Flie\xDFtextes"
			_links="[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"
			_orientation="horizontal"
		></kol-link-group>
		<br />
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
	</div>
)`}},f.parameters),y.parameters=p({storySource:{source:`(args: any) => (
	<div>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
		<br />
		<br />
		<kol-link-group
			_aria-label="Linkliste innerhalb eines Flie\xDFtextes"
			_links="[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"
			_list-style-type="square"
		></kol-link-group>
		<br />
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
		ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
	</div>
)`}},y.parameters),K.parameters=p({storySource:{source:`() => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-link-group
				_aria-label="Fehlerliste"
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
			></kol-link-group>
			<kol-link-group
				_aria-label="Fehlerliste mit Rahmen"
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
			></kol-link-group>
		</div>
	);
}`}},K.parameters);try{h.displayName="Standard",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:h.__docgenInfo,name:"Standard",path:"src/components/link-group/1-examples/autogen.wc.stories.tsx#Standard"})}catch(r){}try{k.displayName="Icons",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Icons",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/autogen.wc.stories.tsx#Icons"]={docgenInfo:k.__docgenInfo,name:"Icons",path:"src/components/link-group/1-examples/autogen.wc.stories.tsx#Icons"})}catch(r){}try{b.displayName="Text",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/autogen.wc.stories.tsx#Text"]={docgenInfo:b.__docgenInfo,name:"Text",path:"src/components/link-group/1-examples/autogen.wc.stories.tsx#Text"})}catch(r){}try{f.displayName="OrientationH",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"OrientationH",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/autogen.wc.stories.tsx#OrientationH"]={docgenInfo:f.__docgenInfo,name:"OrientationH",path:"src/components/link-group/1-examples/autogen.wc.stories.tsx#OrientationH"})}catch(r){}try{y.displayName="ListStyleType",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ListStyleType",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link-group/1-examples/autogen.wc.stories.tsx#ListStyleType"]={docgenInfo:y.__docgenInfo,name:"ListStyleType",path:"src/components/link-group/1-examples/autogen.wc.stories.tsx#ListStyleType"})}catch(r){}},"./src/components/link-group/1-examples/autogen.configuration.ts":(c,l,i)=>{i.d(l,{S:()=>T});var u=i("./node_modules/@storybook/addon-jest/dist/esm/index.js"),s=i("./node_modules/@public-ui/components/jest-test-results.json"),w=i("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const v={_heading:{name:"\xDCberschrift",control:{type:"text"},defaultValue:"\xDCberschrift f\xFCr Linkliste"},_links:{name:"Links",control:{type:"text"},defaultValue:JSON.stringify([{_label:"Link nur Text",_href:"#/"},{_label:"Link nur Text",_href:"#/"},{_label:"Link nur Text",_href:"#/"}])},_orientation:{name:"Ausrichtung",control:{type:"select"},options:["vertical","horizontal"],type:{required:!0},defaultValue:"vertical"},_listStyleType:{name:"Listensymbol",control:{type:"select"},options:["disc","circle","square","none"],type:{required:!0},defaultValue:"disc"}},T={decorators:[(0,u.x)({results:s})],parameters:{badges:[w.NZ.STABLE],jest:["link-group.e2e.ts","link-group.spec.ts","link-group.spec.tsx"],status:{type:"bitv"}},argTypes:v}},"./node_modules/@public-ui/react/dist/index.mjs":(c,l,i)=>{i.d(l,{$o:()=>ge,CO:()=>Te,CV:()=>oe,CX:()=>le,Er:()=>S,Gc:()=>K,HA:()=>g,Jl:()=>X,K5:()=>H,Lj:()=>re,MA:()=>he,Np:()=>ne,Nv:()=>me,O:()=>se,P:()=>xe,Q4:()=>fe,QK:()=>ke,Qs:()=>we,RZ:()=>P,T5:()=>G,TE:()=>ie,TQ:()=>pe,UD:()=>Ce,Ud:()=>be,Vp:()=>ve,Vs:()=>_e,WD:()=>de,WR:()=>ye,Ze:()=>Oe,c2:()=>ae,cJ:()=>ee,ic:()=>k,is:()=>Ee,lo:()=>h,m5:()=>_,ox:()=>r,qq:()=>Se,r7:()=>Le,rW:()=>te,sy:()=>ue,u_:()=>Fe,uz:()=>b,z5:()=>ce});var u=i("./node_modules/react/index.js"),s=i("./node_modules/react-dom/index.js");const w=o=>o.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),v=o=>o.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),T=(o,t,a={})=>{if(o instanceof Element){const d=N(o.classList,t,a);d!==""&&(o.className=d),Object.keys(t).forEach(n=>{if(!(n==="children"||n==="style"||n==="ref"||n==="class"||n==="className"||n==="forwardedRef"))if(n.indexOf("on")===0&&n[2]===n[2].toUpperCase()){const L=n.substring(2),m=L[0].toLowerCase()+L.substring(1);O(m)||q(o,m,t[n])}else o[n]=t[n],typeof t[n]==="string"&&o.setAttribute(v(n),t[n])})}},N=(o,t,a)=>{const d=t.className||t.class,n=a.className||a.class,L=F(o),m=F(d?d.split(" "):[]),D=F(n?n.split(" "):[]),C=[];return L.forEach(x=>{m.has(x)?(C.push(x),m.delete(x)):D.has(x)||C.push(x)}),m.forEach(x=>C.push(x)),C.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const O=o=>{if(typeof document=="undefined")return!0;{const t="on"+o;let a=t in document;if(!a){const d=document.createElement("div");d.setAttribute(t,"return;"),a=typeof d[t]=="function"}return a}},q=(o,t,a)=>{const d=o.__events||(o.__events={}),n=d[t];n&&o.removeEventListener(t,n),o.addEventListener(t,d[t]=function(m){a&&a.call(this,m)})},F=o=>{const t=new Map;return o.forEach(a=>t.set(a,a)),t},R=(o,t)=>{typeof o=="function"?o(t):o!=null&&(o.current=t)},p=(...o)=>t=>{o.forEach(a=>{R(a,t)})},A=(o,t)=>{const a=(d,n)=>u.createElement(o,U(W({},d),{forwardedRef:n}));return a.displayName=t,u.forwardRef(a)},e=(o,t,a,d)=>{d!==void 0&&d();const n=w(o),L=class extends u.Component{constructor(m){super(m),this.setComponentElRef=D=>{this.componentEl=D}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(m){T(this.componentEl,this.props,m)}render(){const V=this.props,{children:m,forwardedRef:D,style:C,className:x,ref:qe}=V,Y=$(V,["children","forwardedRef","style","className","ref"]);let j=Object.keys(Y).reduce((z,E)=>{const M=Y[E];if(E.indexOf("on")===0&&E[2]===E[2].toUpperCase()){const I=E.substring(2).toLowerCase();typeof document!="undefined"&&O(I)&&(z[E]=M)}else{const I=typeof M;(I==="string"||I==="boolean"||I==="number")&&(z[v(E)]=M)}return z},{});a&&(j=a(this.props,j));const Ke=U(W({},j),{ref:p(D,this.setComponentElRef),style:C});return(0,u.createElement)(o,Ke,m)}static get displayName(){return n}};return t&&(L.contextType=t),A(L,n)},G=e("kol-abbr"),P=e("kol-accordion"),H=e("kol-alert"),S=e("kol-badge"),h=e("kol-breadcrumb"),k=e("kol-button"),b=e("kol-button-group"),f=null,y=null,K=e("kol-card"),r=e("kol-details"),_=e("kol-form"),g=e("kol-heading"),X=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),oe=e("kol-indented-text"),Ae=null,ie=e("kol-input-checkbox"),ne=e("kol-input-color"),se=e("kol-input-date"),re=e("kol-input-email"),le=e("kol-input-file"),ae=e("kol-input-number"),ce=e("kol-input-password"),ue=e("kol-input-radio"),pe=e("kol-input-range"),de=e("kol-input-text"),_e=e("kol-kolibri"),me=e("kol-link"),Be=null,ge=e("kol-link-group"),ke=e("kol-logo"),be=e("kol-modal"),he=e("kol-nav"),fe=e("kol-pagination"),ye=e("kol-progress"),Le=e("kol-select"),xe=e("kol-skip-nav"),Ne=null,Se=e("kol-spin"),Ee=e("kol-symbol"),ve=e("kol-table"),Ce=e("kol-tabs"),we=e("kol-textarea"),Te=e("kol-toast"),Oe=e("kol-tooltip"),Fe=e("kol-version")}}]);
