"use strict";var Ne=Object.defineProperty,Re=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var X=(c,i,s)=>i in c?Ne(c,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[i]=s,G=(c,i)=>{for(var s in i||(i={}))$.call(i,s)&&X(c,s,i[s]);if(j)for(var s of j(i))q.call(i,s)&&X(c,s,i[s]);return c},Q=(c,i)=>Re(c,Oe(i));var ee=(c,i)=>{var s={};for(var r in c)$.call(c,r)&&i.indexOf(r)<0&&(s[r]=c[r]);if(c!=null&&j)for(var r of j(c))i.indexOf(r)<0&&q.call(c,r)&&(s[r]=c[r]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9065],{"./src/components/tabs/1-examples/react.stories.tsx":(c,i,s)=>{s.r(i),s.d(i,{Active:()=>k,Deactive:()=>S,Erweitert:()=>O,Icon:()=>g,Simple:()=>u,Standard:()=>E,TabsLeft:()=>y,TabsRight:()=>h,default:()=>Y});var r=s("./node_modules/@public-ui/react/dist/index.mjs"),e=s("./node_modules/react/index.js"),x=s("./src/components/tabs/1-examples/autogen.configuration.ts"),I=Object.defineProperty,A=Object.defineProperties,M=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,P=(o,_,v)=>_ in o?I(o,_,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[_]=v,d=(o,_)=>{for(var v in _||(_={}))U.call(_,v)&&P(o,v,_[v]);if(N)for(var v of N(_))R.call(_,v)&&P(o,v,_[v]);return o},z=(o,_)=>A(o,M(_)),a=null,Z={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Simple:{startLoc:{col:22,line:38},endLoc:{col:1,line:46},startBody:{col:22,line:38},endBody:{col:1,line:46}},Icon:{startLoc:{col:20,line:57},endLoc:{col:1,line:69},startBody:{col:20,line:57},endBody:{col:1,line:69}},Active:{startLoc:{col:22,line:80},endLoc:{col:1,line:88},startBody:{col:22,line:80},endBody:{col:1,line:88}},Deactive:{startLoc:{col:24,line:99},endLoc:{col:1,line:111},startBody:{col:24,line:99},endBody:{col:1,line:111}},TabsRight:{startLoc:{col:25,line:122},endLoc:{col:1,line:130},startBody:{col:25,line:122},endBody:{col:1,line:130}},TabsLeft:{startLoc:{col:24,line:141},endLoc:{col:1,line:149},startBody:{col:24,line:141},endBody:{col:1,line:149}},Erweitert:{startLoc:{col:25,line:155},endLoc:{col:1,line:287},startBody:{col:25,line:155},endBody:{col:1,line:287}}};const Y=z(d({},x.o),{title:"React/Tabs/Beispiele",component:r.UD}),m=o=>e.createElement(r.UD,d({},o),o.children),f={},E=o=>e.createElement("div",null,e.createElement(m,d({},o)));E.args=d({},f);const u=o=>e.createElement("div",null,e.createElement(m,{_ariaLabel:"Tabs",_selected:0,_tabs:"[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));u.args=d({},f),u.storyName="Einfache Tabs";const g=o=>e.createElement("div",null,e.createElement(m,{_ariaLabel:"Tabs",_selected:0,_tabs:"[{'_label':'Nicht ausgew\xE4hlt','_icon':'icofont-home'},{'_label':'Ausgew\xE4hlt'},{'_label':'Nicht ausgew\xE4hlt'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));g.args=d({},f),g.storyName="Tabs mit Icon";const k=o=>e.createElement("div",null,e.createElement(m,{_ariaLabel:"Tabs",_selected:1,_tabs:"[{'_label':'Nicht ausgew\xE4hlt'},{'_label':'Ausgew\xE4hlt'},{'_label':'Nicht ausgew\xE4hlt'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));k.args=d({},f),k.storyName="Tab ausw\xE4hlen";const S=o=>e.createElement("div",null,e.createElement(m,{_ariaLabel:"Tabs",_selected:1,_tabs:"[{'_label':'Nicht aktiv','_disabled':true},{'_label':'Aktiv gesetzt'},{'_label':'Nicht aktiv','_disabled':true}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));S.args=d({},f),S.storyName="Tab deaktivieren";const h=()=>e.createElement("div",null,e.createElement(m,{_ariaLabel:"Tabs",_selected:0,_tabsAlign:"right",_tabs:"[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));h.args=d({},f),h.storyName="Tabs rechts";const y=()=>e.createElement("div",null,e.createElement(m,{_ariaLabel:"Tabs",_selected:0,_tabsAlign:"left",_tabs:"[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));y.args=d({},f),y.storyName="Tabs links";const O=()=>{const o=_=>v=>{console.log(_,v)};return e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(r.K5,{_type:"info"},"Die Steuerung eines Tabs erfolgt durch klicken oder Pfeiltasten. Die Umsetzung ist nach W3C umgesetzt:",e.createElement("ul",null,e.createElement("li",null,e.createElement(r.Nv,{_href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html",_target:"w3c"},"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html")),e.createElement("li",null,e.createElement(r.Nv,{_href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html",_target:"w3c"},"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html")))),e.createElement(m,{_ariaLabel:"Tab-Navigation",_on:{onCreate:{label:"Neu Text anpassbar",callback:o("onCreate")},onSelect:o("onSelect")},_selected:0,_tabs:[{_label:"Tab 1",_icon:"icofont-home"},{_label:"Tab 2"},{_label:"Tab 3",_disabled:!0},{_label:"Tab 4",_on:{onClose:o("onClose")}},{_label:"Tab 5",_on:{onClose:!0}},{_label:"Tab 6"},{_label:"Tab 7"},{_label:"Tab 8"}],class:"hydrated"},e.createElement("div",null,"Tab 1 ",e.createElement("div",null,"Tab 1.1")),e.createElement("div",null,"Tab 2"),e.createElement("div",null,"Tab 3"),e.createElement("div",null,"Tab 4"),e.createElement("div",null,"Tab 5"),e.createElement("div",null,"Tab 6"),e.createElement("div",null,"Tab 7"),e.createElement("div",null,"Tab 8")),e.createElement(m,{_ariaLabel:"Tab-Navigation",_on:{onCreate:o("onCreate")},_selected:1,_tabs:[{_label:"Tab 1",_icon:"icofont-home",_disabled:!0},{_label:"Tab 2"},{_label:"Tab 3",_disabled:!0},{_label:"Tab 4"},{_label:"Tab 5"},{_label:"Tab 6"},{_label:"Tab 7"},{_label:"Tab 8"}],style:{fontSize:"80%"}},e.createElement("div",null,"Tab 1"),e.createElement("div",null,"Tab 2"),e.createElement("div",null,"Tab 3"),e.createElement("div",null,"Tab 4"),e.createElement("div",null,"Tab 5"),e.createElement("div",null,"Tab 6"),e.createElement("div",null,"Tab 7"),e.createElement("div",null,"Tab 8")),e.createElement(m,{_ariaLabel:"Tab-Navigation",_selected:6,_tabs:[{_label:"Tab 1",_icon:"icofont-home"},{_label:"Tab 2"},{_label:"Tab 3",_disabled:!0},{_label:"Tab 4"},{_label:"Tab 5"},{_label:"Tab 6"},{_label:"Tab 7"},{_label:"Tab 8",_disabled:!0}],style:{fontSize:"60%"}},e.createElement("div",null,"Tab 1"),e.createElement("div",null,"Tab 2"),e.createElement("div",null,"Tab 3"),e.createElement("div",null,"Tab 4"),e.createElement("div",null,"Tab 5"),e.createElement("div",null,"Tab 6"),e.createElement("div",null,"Tab 7"),e.createElement("div",null,"Tab 8")),e.createElement(m,{_ariaLabel:"Tab-Navigation",_selected:0,_tabs:[{_label:"Tab 1",_disabled:!0},{_label:"Tab 2",_disabled:!0},{_label:"Tab 3",_disabled:!0}]},e.createElement("div",null,"Tab 1"),e.createElement("div",null,"Tab 2"),e.createElement("div",null,"Tab 3")))};E.parameters=d({storySource:{source:`(args: any) => (
	<div>
		<KolTabs {...args}></KolTabs>
	</div>
)`}},E.parameters),u.parameters=d({storySource:{source:`(args: any) => (
	<div>
		<KolTabs _ariaLabel="Tabs" _selected={0} _tabs="[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]">
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</KolTabs>
	</div>
)`}},u.parameters),g.parameters=d({storySource:{source:`(args: any) => (
	<div>
		<KolTabs
			_ariaLabel="Tabs"
			_selected={0}
			_tabs="[{'_label':'Nicht ausgew\xE4hlt','_icon':'icofont-home'},{'_label':'Ausgew\xE4hlt'},{'_label':'Nicht ausgew\xE4hlt'}]"
		>
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</KolTabs>
	</div>
)`}},g.parameters),k.parameters=d({storySource:{source:`(args: any) => (
	<div>
		<KolTabs _ariaLabel="Tabs" _selected={1} _tabs="[{'_label':'Nicht ausgew\xE4hlt'},{'_label':'Ausgew\xE4hlt'},{'_label':'Nicht ausgew\xE4hlt'}]">
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</KolTabs>
	</div>
)`}},k.parameters),S.parameters=d({storySource:{source:`(args: any) => (
	<div>
		<KolTabs
			_ariaLabel="Tabs"
			_selected={1}
			_tabs="[{'_label':'Nicht aktiv','_disabled':true},{'_label':'Aktiv gesetzt'},{'_label':'Nicht aktiv','_disabled':true}]"
		>
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</KolTabs>
	</div>
)`}},S.parameters),h.parameters=d({storySource:{source:`() => (
	<div>
		<KolTabs _ariaLabel="Tabs" _selected={0} _tabsAlign="right" _tabs="[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]">
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</KolTabs>
	</div>
)`}},h.parameters),y.parameters=d({storySource:{source:`() => (
	<div>
		<KolTabs _ariaLabel="Tabs" _selected={0} _tabsAlign="left" _tabs="[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]">
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</KolTabs>
	</div>
)`}},y.parameters),O.parameters=d({storySource:{source:`() => {
	const callback = (name: string) => {
		return (value: string) => {
			console.log(name, value);
		};
	};
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolAlert _type="info">
				Die Steuerung eines Tabs erfolgt durch klicken oder Pfeiltasten. Die Umsetzung ist nach W3C umgesetzt:
				<ul>
					<li>
						<KolLink _href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html" _target="w3c">
							https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html
						</KolLink>
					</li>
					<li>
						<KolLink _href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html" _target="w3c">
							https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html
						</KolLink>
					</li>
				</ul>
			</KolAlert>
			<KolTabs
				_ariaLabel="Tab-Navigation"
				_on={{
					onCreate: {
						label: 'Neu Text anpassbar',
						callback: callback('onCreate'),
					},
					onSelect: callback('onSelect'),
				}}
				_selected={0}
				_tabs={[
					{ _label: 'Tab 1', _icon: 'icofont-home' },
					{ _label: 'Tab 2' },
					{ _label: 'Tab 3', _disabled: true },
					{
						_label: 'Tab 4',
						_on: {
							onClose: callback('onClose'),
						},
					},
					{
						_label: 'Tab 5',
						_on: {
							onClose: true,
						},
					},
					{ _label: 'Tab 6' },
					{ _label: 'Tab 7' },
					{ _label: 'Tab 8' },
				]}
				class="hydrated"
			>
				<div>
					Tab 1 <div>Tab 1.1</div>
				</div>
				<div>Tab 2</div>
				<div>Tab 3</div>
				<div>Tab 4</div>
				<div>Tab 5</div>
				<div>Tab 6</div>
				<div>Tab 7</div>
				<div>Tab 8</div>
			</KolTabs>
			<KolTabs
				_ariaLabel="Tab-Navigation"
				_on={{
					onCreate: callback('onCreate'),
				}}
				_selected={1}
				_tabs={[
					{ _label: 'Tab 1', _icon: 'icofont-home', _disabled: true },
					{ _label: 'Tab 2' },
					{ _label: 'Tab 3', _disabled: true },
					{ _label: 'Tab 4' },
					{ _label: 'Tab 5' },
					{ _label: 'Tab 6' },
					{ _label: 'Tab 7' },
					{ _label: 'Tab 8' },
				]}
				style={{ fontSize: '80%' }}
			>
				<div>Tab 1</div>
				<div>Tab 2</div>
				<div>Tab 3</div>
				<div>Tab 4</div>
				<div>Tab 5</div>
				<div>Tab 6</div>
				<div>Tab 7</div>
				<div>Tab 8</div>
			</KolTabs>
			<KolTabs
				_ariaLabel="Tab-Navigation"
				_selected={6}
				_tabs={[
					{ _label: 'Tab 1', _icon: 'icofont-home' },
					{ _label: 'Tab 2' },
					{ _label: 'Tab 3', _disabled: true },
					{ _label: 'Tab 4' },
					{ _label: 'Tab 5' },
					{ _label: 'Tab 6' },
					{ _label: 'Tab 7' },
					{ _label: 'Tab 8', _disabled: true },
				]}
				style={{ fontSize: '60%' }}
			>
				<div>Tab 1</div>
				<div>Tab 2</div>
				<div>Tab 3</div>
				<div>Tab 4</div>
				<div>Tab 5</div>
				<div>Tab 6</div>
				<div>Tab 7</div>
				<div>Tab 8</div>
			</KolTabs>
			<KolTabs
				_ariaLabel="Tab-Navigation"
				_selected={0}
				_tabs={[
					{ _label: 'Tab 1', _disabled: true },
					{ _label: 'Tab 2', _disabled: true },
					{ _label: 'Tab 3', _disabled: true },
				]}
			>
				<div>Tab 1</div>
				<div>Tab 2</div>
				<div>Tab 3</div>
			</KolTabs>
		</div>
	);
}`}},O.parameters);try{E.displayName="Standard",E.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/react.stories.tsx#Standard"]={docgenInfo:E.__docgenInfo,name:"Standard",path:"src/components/tabs/1-examples/react.stories.tsx#Standard"})}catch(o){}try{u.displayName="Simple",u.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Simple",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/react.stories.tsx#Simple"]={docgenInfo:u.__docgenInfo,name:"Simple",path:"src/components/tabs/1-examples/react.stories.tsx#Simple"})}catch(o){}try{g.displayName="Icon",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Icon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/react.stories.tsx#Icon"]={docgenInfo:g.__docgenInfo,name:"Icon",path:"src/components/tabs/1-examples/react.stories.tsx#Icon"})}catch(o){}try{k.displayName="Active",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Active",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/react.stories.tsx#Active"]={docgenInfo:k.__docgenInfo,name:"Active",path:"src/components/tabs/1-examples/react.stories.tsx#Active"})}catch(o){}try{S.displayName="Deactive",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Deactive",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/react.stories.tsx#Deactive"]={docgenInfo:S.__docgenInfo,name:"Deactive",path:"src/components/tabs/1-examples/react.stories.tsx#Deactive"})}catch(o){}try{h.displayName="TabsRight",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"TabsRight",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/react.stories.tsx#TabsRight"]={docgenInfo:h.__docgenInfo,name:"TabsRight",path:"src/components/tabs/1-examples/react.stories.tsx#TabsRight"})}catch(o){}try{y.displayName="TabsLeft",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"TabsLeft",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/react.stories.tsx#TabsLeft"]={docgenInfo:y.__docgenInfo,name:"TabsLeft",path:"src/components/tabs/1-examples/react.stories.tsx#TabsLeft"})}catch(o){}},"./src/components/tabs/1-examples/autogen.configuration.ts":(c,i,s)=>{s.d(i,{o:()=>A});var r=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),e=s("./node_modules/@public-ui/components/jest-test-results.json"),x=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const I={_ariaLabel:{name:"Eindeutige Beschriftung der Tab-Navigation",control:{type:"text"},defaultValue:"Tab-Navigation"},_selected:{name:"Ausgew\xE4hltes Tab",control:{type:"number"},defaultValue:0},_tabs:{name:"Schalter der Tab-Leiste",control:{type:"text"},defaultValue:"[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]"},_tabsAlign:{name:"Ausrichtung der Tab-Leiste",control:{type:"select",options:["top","right","bottom","left"]},defaultValue:"top"}},A={decorators:[(0,r.x)({results:e})],parameters:{badges:[x.NZ.STABLE],jest:["tabs.e2e.ts","tabs.spec.ts","tabs.spec.tsx"],status:{type:"bitv"}},argTypes:I}},"./node_modules/@public-ui/react/dist/index.mjs":(c,i,s)=>{s.d(i,{$o:()=>pe,CO:()=>Ie,CV:()=>te,CX:()=>ie,Er:()=>f,Gc:()=>h,HA:()=>o,Jl:()=>_,K5:()=>m,Lj:()=>ne,MA:()=>ge,Np:()=>oe,Nv:()=>ve,O:()=>se,P:()=>Ee,Q4:()=>he,QK:()=>me,Qs:()=>we,RZ:()=>Y,T5:()=>Z,TE:()=>le,TQ:()=>de,UD:()=>Ce,Ud:()=>ue,Vp:()=>Ke,Vs:()=>Te,WD:()=>_e,WR:()=>ye,Ze:()=>Le,c2:()=>re,cJ:()=>v,ic:()=>u,is:()=>Se,lo:()=>E,m5:()=>O,ox:()=>y,qq:()=>ke,r7:()=>fe,rW:()=>ae,sy:()=>ce,u_:()=>xe,uz:()=>g,z5:()=>be});var r=s("./node_modules/react/index.js"),e=s("./node_modules/react-dom/index.js");const x=l=>l.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),I=l=>l.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),A=(l,t,b={})=>{if(l instanceof Element){const T=M(l.classList,t,b);T!==""&&(l.className=T),Object.keys(t).forEach(n=>{if(!(n==="children"||n==="style"||n==="ref"||n==="class"||n==="className"||n==="forwardedRef"))if(n.indexOf("on")===0&&n[2]===n[2].toUpperCase()){const K=n.substring(2),p=K[0].toLowerCase()+K.substring(1);N(p)||U(l,p,t[n])}else l[n]=t[n],typeof t[n]==="string"&&l.setAttribute(I(n),t[n])})}},M=(l,t,b)=>{const T=t.className||t.class,n=b.className||b.class,K=R(l),p=R(T?T.split(" "):[]),D=R(n?n.split(" "):[]),L=[];return K.forEach(C=>{p.has(C)?(L.push(C),p.delete(C)):D.has(C)||L.push(C)}),p.forEach(C=>L.push(C)),L.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const N=l=>{if(typeof document=="undefined")return!0;{const t="on"+l;let b=t in document;if(!b){const T=document.createElement("div");T.setAttribute(t,"return;"),b=typeof T[t]=="function"}return b}},U=(l,t,b)=>{const T=l.__events||(l.__events={}),n=T[t];n&&l.removeEventListener(t,n),l.addEventListener(t,T[t]=function(p){b&&b.call(this,p)})},R=l=>{const t=new Map;return l.forEach(b=>t.set(b,b)),t},P=(l,t)=>{typeof l=="function"?l(t):l!=null&&(l.current=t)},d=(...l)=>t=>{l.forEach(b=>{P(b,t)})},z=(l,t)=>{const b=(T,n)=>r.createElement(l,Q(G({},T),{forwardedRef:n}));return b.displayName=t,r.forwardRef(b)},a=(l,t,b,T)=>{T!==void 0&&T();const n=x(l),K=class extends r.Component{constructor(p){super(p),this.setComponentElRef=D=>{this.componentEl=D}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(p){A(this.componentEl,this.props,p)}render(){const J=this.props,{children:p,forwardedRef:D,style:L,className:C,ref:je}=J,H=ee(J,["children","forwardedRef","style","className","ref"]);let W=Object.keys(H).reduce((V,w)=>{const F=H[w];if(w.indexOf("on")===0&&w[2]===w[2].toUpperCase()){const B=w.substring(2).toLowerCase();typeof document!="undefined"&&N(B)&&(V[w]=F)}else{const B=typeof F;(B==="string"||B==="boolean"||B==="number")&&(V[I(w)]=F)}return V},{});b&&(W=b(this.props,W));const Ae=Q(G({},W),{ref:d(D,this.setComponentElRef),style:L});return(0,r.createElement)(l,Ae,p)}static get displayName(){return n}};return t&&(K.contextType=t),z(K,n)},Z=a("kol-abbr"),Y=a("kol-accordion"),m=a("kol-alert"),f=a("kol-badge"),E=a("kol-breadcrumb"),u=a("kol-button"),g=a("kol-button-group"),k=null,S=null,h=a("kol-card"),y=a("kol-details"),O=a("kol-form"),o=a("kol-heading"),_=a("kol-icon"),v=a("kol-icon-font-awesome"),ae=a("kol-icon-icofont"),te=a("kol-indented-text"),De=null,le=a("kol-input-checkbox"),oe=a("kol-input-color"),se=a("kol-input-date"),ne=a("kol-input-email"),ie=a("kol-input-file"),re=a("kol-input-number"),be=a("kol-input-password"),ce=a("kol-input-radio"),de=a("kol-input-range"),_e=a("kol-input-text"),Te=a("kol-kolibri"),ve=a("kol-link"),Be=null,pe=a("kol-link-group"),me=a("kol-logo"),ue=a("kol-modal"),ge=a("kol-nav"),he=a("kol-pagination"),ye=a("kol-progress"),fe=a("kol-select"),Ee=a("kol-skip-nav"),Pe=null,ke=a("kol-spin"),Se=a("kol-symbol"),Ke=a("kol-table"),Ce=a("kol-tabs"),we=a("kol-textarea"),Ie=a("kol-toast"),Le=a("kol-tooltip"),xe=a("kol-version")}}]);
