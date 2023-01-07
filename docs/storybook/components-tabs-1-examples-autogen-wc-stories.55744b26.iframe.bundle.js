"use strict";var Ke=Object.defineProperty,Oe=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var X=(r,i,s)=>i in r?Ke(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,F=(r,i)=>{for(var s in i||(i={}))$.call(i,s)&&X(r,s,i[s]);if(P)for(var s of P(i))q.call(i,s)&&X(r,s,i[s]);return r},G=(r,i)=>Oe(r,Le(i));var ee=(r,i)=>{var s={};for(var d in r)$.call(r,d)&&i.indexOf(d)<0&&(s[d]=r[d]);if(r!=null&&P)for(var d of P(r))i.indexOf(d)<0&&q.call(r,d)&&(s[d]=r[d]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[512],{"./src/components/tabs/1-examples/autogen.wc.stories.tsx":(r,i,s)=>{s.r(i),s.d(i,{Active:()=>f,Deactive:()=>E,Erweitert:()=>O,Icon:()=>u,Simple:()=>m,Standard:()=>y,TabsLeft:()=>h,TabsRight:()=>g,default:()=>U});var d=s("./node_modules/@public-ui/react/dist/index.mjs"),e=s("./node_modules/react/index.js"),A=s("./src/components/tabs/1-examples/autogen.configuration.ts"),I=Object.defineProperty,R=Object.defineProperties,j=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,B=(o,_,T)=>_ in o?I(o,_,{enumerable:!0,configurable:!0,writable:!0,value:T}):o[_]=T,c=(o,_)=>{for(var T in _||(_={}))M.call(_,T)&&B(o,T,_[T]);if(N)for(var T of N(_))K.call(_,T)&&B(o,T,_[T]);return o},z=(o,_)=>R(o,j(_)),t=null,Q={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Simple:{startLoc:{col:22,line:38},endLoc:{col:1,line:46},startBody:{col:22,line:38},endBody:{col:1,line:46}},Icon:{startLoc:{col:20,line:57},endLoc:{col:1,line:69},startBody:{col:20,line:57},endBody:{col:1,line:69}},Active:{startLoc:{col:22,line:80},endLoc:{col:1,line:88},startBody:{col:22,line:80},endBody:{col:1,line:88}},Deactive:{startLoc:{col:24,line:99},endLoc:{col:1,line:111},startBody:{col:24,line:99},endBody:{col:1,line:111}},TabsRight:{startLoc:{col:25,line:122},endLoc:{col:1,line:130},startBody:{col:25,line:122},endBody:{col:1,line:130}},TabsLeft:{startLoc:{col:24,line:141},endLoc:{col:1,line:149},startBody:{col:24,line:141},endBody:{col:1,line:149}},Erweitert:{startLoc:{col:25,line:155},endLoc:{col:1,line:287},startBody:{col:25,line:155},endBody:{col:1,line:287}}};const U=z(c({},A.o),{title:"Web Components/Tabs/Beispiele",component:d.UD}),Z=o=>React.createElement(MyComponent,c({},o),o.children),k={},y=o=>e.createElement("div",null,e.createElement("kol-tabs",c({},o)));y.args=c({},k);const m=o=>e.createElement("div",null,e.createElement("kol-tabs",{"_aria-label":"Tabs",_selected:0,_tabs:"[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));m.args=c({},k),m.storyName="Einfache Tabs";const u=o=>e.createElement("div",null,e.createElement("kol-tabs",{"_aria-label":"Tabs",_selected:0,_tabs:"[{'_label':'Nicht ausgew\xE4hlt','_icon':'icofont-home'},{'_label':'Ausgew\xE4hlt'},{'_label':'Nicht ausgew\xE4hlt'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));u.args=c({},k),u.storyName="Tabs mit Icon";const f=o=>e.createElement("div",null,e.createElement("kol-tabs",{"_aria-label":"Tabs",_selected:1,_tabs:"[{'_label':'Nicht ausgew\xE4hlt'},{'_label':'Ausgew\xE4hlt'},{'_label':'Nicht ausgew\xE4hlt'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));f.args=c({},k),f.storyName="Tab ausw\xE4hlen";const E=o=>e.createElement("div",null,e.createElement("kol-tabs",{"_aria-label":"Tabs",_selected:1,_tabs:"[{'_label':'Nicht aktiv','_disabled':true},{'_label':'Aktiv gesetzt'},{'_label':'Nicht aktiv','_disabled':true}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));E.args=c({},k),E.storyName="Tab deaktivieren";const g=()=>e.createElement("div",null,e.createElement("kol-tabs",{"_aria-label":"Tabs",_selected:0,"_tabs-align":"right",_tabs:"[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));g.args=c({},k),g.storyName="Tabs rechts";const h=()=>e.createElement("div",null,e.createElement("kol-tabs",{"_aria-label":"Tabs",_selected:0,"_tabs-align":"left",_tabs:"[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]"},e.createElement("div",{slot:"tab-0"},"Inhalt von Tab 1"),e.createElement("div",{slot:"tab-1"},"Inhalt von Tab 2"),e.createElement("div",{slot:"tab-2"},"Inhalt von Tab 3")));h.args=c({},k),h.storyName="Tabs links";const O=()=>{const o=_=>T=>{console.log(_,T)};return e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-alert",{_type:"info"},"Die Steuerung eines Tabs erfolgt durch klicken oder Pfeiltasten. Die Umsetzung ist nach W3C umgesetzt:",e.createElement("ul",null,e.createElement("li",null,e.createElement("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html",_target:"w3c"},"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html")),e.createElement("li",null,e.createElement("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html",_target:"w3c"},"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html")))),e.createElement("kol-tabs",{"_aria-label":"Tab-Navigation",_on:{onCreate:{label:"Neu Text anpassbar",callback:o("onCreate")},onSelect:o("onSelect")},_selected:0,_tabs:[{_label:"Tab 1",_icon:"icofont-home"},{_label:"Tab 2"},{_label:"Tab 3",_disabled:!0},{_label:"Tab 4",_on:{onClose:o("onClose")}},{_label:"Tab 5",_on:{onClose:!0}},{_label:"Tab 6"},{_label:"Tab 7"},{_label:"Tab 8"}],class:"hydrated"},e.createElement("div",null,"Tab 1 ",e.createElement("div",null,"Tab 1.1")),e.createElement("div",null,"Tab 2"),e.createElement("div",null,"Tab 3"),e.createElement("div",null,"Tab 4"),e.createElement("div",null,"Tab 5"),e.createElement("div",null,"Tab 6"),e.createElement("div",null,"Tab 7"),e.createElement("div",null,"Tab 8")),e.createElement("kol-tabs",{"_aria-label":"Tab-Navigation",_on:{onCreate:o("onCreate")},_selected:1,_tabs:[{_label:"Tab 1",_icon:"icofont-home",_disabled:!0},{_label:"Tab 2"},{_label:"Tab 3",_disabled:!0},{_label:"Tab 4"},{_label:"Tab 5"},{_label:"Tab 6"},{_label:"Tab 7"},{_label:"Tab 8"}],style:{fontSize:"80%"}},e.createElement("div",null,"Tab 1"),e.createElement("div",null,"Tab 2"),e.createElement("div",null,"Tab 3"),e.createElement("div",null,"Tab 4"),e.createElement("div",null,"Tab 5"),e.createElement("div",null,"Tab 6"),e.createElement("div",null,"Tab 7"),e.createElement("div",null,"Tab 8")),e.createElement("kol-tabs",{"_aria-label":"Tab-Navigation",_selected:6,_tabs:[{_label:"Tab 1",_icon:"icofont-home"},{_label:"Tab 2"},{_label:"Tab 3",_disabled:!0},{_label:"Tab 4"},{_label:"Tab 5"},{_label:"Tab 6"},{_label:"Tab 7"},{_label:"Tab 8",_disabled:!0}],style:{fontSize:"60%"}},e.createElement("div",null,"Tab 1"),e.createElement("div",null,"Tab 2"),e.createElement("div",null,"Tab 3"),e.createElement("div",null,"Tab 4"),e.createElement("div",null,"Tab 5"),e.createElement("div",null,"Tab 6"),e.createElement("div",null,"Tab 7"),e.createElement("div",null,"Tab 8")),e.createElement("kol-tabs",{"_aria-label":"Tab-Navigation",_selected:0,_tabs:[{_label:"Tab 1",_disabled:!0},{_label:"Tab 2",_disabled:!0},{_label:"Tab 3",_disabled:!0}]},e.createElement("div",null,"Tab 1"),e.createElement("div",null,"Tab 2"),e.createElement("div",null,"Tab 3")))};y.parameters=c({storySource:{source:`(args: any) => (
	<div>
		<kol-tabs {...args}></kol-tabs>
	</div>
)`}},y.parameters),m.parameters=c({storySource:{source:`(args: any) => (
	<div>
		<kol-tabs _aria-label="Tabs" _selected={0} _tabs="[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]">
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</kol-tabs>
	</div>
)`}},m.parameters),u.parameters=c({storySource:{source:`(args: any) => (
	<div>
		<kol-tabs
			_aria-label="Tabs"
			_selected={0}
			_tabs="[{'_label':'Nicht ausgew\xE4hlt','_icon':'icofont-home'},{'_label':'Ausgew\xE4hlt'},{'_label':'Nicht ausgew\xE4hlt'}]"
		>
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</kol-tabs>
	</div>
)`}},u.parameters),f.parameters=c({storySource:{source:`(args: any) => (
	<div>
		<kol-tabs _aria-label="Tabs" _selected={1} _tabs="[{'_label':'Nicht ausgew\xE4hlt'},{'_label':'Ausgew\xE4hlt'},{'_label':'Nicht ausgew\xE4hlt'}]">
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</kol-tabs>
	</div>
)`}},f.parameters),E.parameters=c({storySource:{source:`(args: any) => (
	<div>
		<kol-tabs
			_aria-label="Tabs"
			_selected={1}
			_tabs="[{'_label':'Nicht aktiv','_disabled':true},{'_label':'Aktiv gesetzt'},{'_label':'Nicht aktiv','_disabled':true}]"
		>
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</kol-tabs>
	</div>
)`}},E.parameters),g.parameters=c({storySource:{source:`() => (
	<div>
		<kol-tabs _aria-label="Tabs" _selected={0} _tabs-align="right" _tabs="[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]">
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</kol-tabs>
	</div>
)`}},g.parameters),h.parameters=c({storySource:{source:`() => (
	<div>
		<kol-tabs _aria-label="Tabs" _selected={0} _tabs-align="left" _tabs="[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]">
			<div slot="tab-0">Inhalt von Tab 1</div>
			<div slot="tab-1">Inhalt von Tab 2</div>
			<div slot="tab-2">Inhalt von Tab 3</div>
		</kol-tabs>
	</div>
)`}},h.parameters),O.parameters=c({storySource:{source:`() => {
	const callback = (name: string) => {
		return (value: string) => {
			console.log(name, value);
		};
	};
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-alert _type="info">
				Die Steuerung eines Tabs erfolgt durch klicken oder Pfeiltasten. Die Umsetzung ist nach W3C umgesetzt:
				<ul>
					<li>
						<kol-link _href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html" _target="w3c">
							https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html
						</kol-link>
					</li>
					<li>
						<kol-link _href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html" _target="w3c">
							https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html
						</kol-link>
					</li>
				</ul>
			</kol-alert>
			<kol-tabs
				_aria-label="Tab-Navigation"
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
			</kol-tabs>
			<kol-tabs
				_aria-label="Tab-Navigation"
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
			</kol-tabs>
			<kol-tabs
				_aria-label="Tab-Navigation"
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
			</kol-tabs>
			<kol-tabs
				_aria-label="Tab-Navigation"
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
			</kol-tabs>
		</div>
	);
}`}},O.parameters);try{y.displayName="Standard",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:y.__docgenInfo,name:"Standard",path:"src/components/tabs/1-examples/autogen.wc.stories.tsx#Standard"})}catch(o){}try{m.displayName="Simple",m.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Simple",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/autogen.wc.stories.tsx#Simple"]={docgenInfo:m.__docgenInfo,name:"Simple",path:"src/components/tabs/1-examples/autogen.wc.stories.tsx#Simple"})}catch(o){}try{u.displayName="Icon",u.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Icon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/autogen.wc.stories.tsx#Icon"]={docgenInfo:u.__docgenInfo,name:"Icon",path:"src/components/tabs/1-examples/autogen.wc.stories.tsx#Icon"})}catch(o){}try{f.displayName="Active",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Active",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/autogen.wc.stories.tsx#Active"]={docgenInfo:f.__docgenInfo,name:"Active",path:"src/components/tabs/1-examples/autogen.wc.stories.tsx#Active"})}catch(o){}try{E.displayName="Deactive",E.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Deactive",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/autogen.wc.stories.tsx#Deactive"]={docgenInfo:E.__docgenInfo,name:"Deactive",path:"src/components/tabs/1-examples/autogen.wc.stories.tsx#Deactive"})}catch(o){}try{g.displayName="TabsRight",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"TabsRight",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/autogen.wc.stories.tsx#TabsRight"]={docgenInfo:g.__docgenInfo,name:"TabsRight",path:"src/components/tabs/1-examples/autogen.wc.stories.tsx#TabsRight"})}catch(o){}try{h.displayName="TabsLeft",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"TabsLeft",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/tabs/1-examples/autogen.wc.stories.tsx#TabsLeft"]={docgenInfo:h.__docgenInfo,name:"TabsLeft",path:"src/components/tabs/1-examples/autogen.wc.stories.tsx#TabsLeft"})}catch(o){}},"./src/components/tabs/1-examples/autogen.configuration.ts":(r,i,s)=>{s.d(i,{o:()=>R});var d=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),e=s("./node_modules/@public-ui/components/jest-test-results.json"),A=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const I={_ariaLabel:{name:"Eindeutige Beschriftung der Tab-Navigation",control:{type:"text"},defaultValue:"Tab-Navigation"},_selected:{name:"Ausgew\xE4hltes Tab",control:{type:"number"},defaultValue:0},_tabs:{name:"Schalter der Tab-Leiste",control:{type:"text"},defaultValue:"[{'_label':'Tab 1'},{'_label':'Tab 2'},{'_label':'Tab 3'}]"},_tabsAlign:{name:"Ausrichtung der Tab-Leiste",control:{type:"select",options:["top","right","bottom","left"]},defaultValue:"top"}},R={decorators:[(0,d.x)({results:e})],parameters:{badges:[A.NZ.STABLE],jest:["tabs.e2e.ts","tabs.spec.ts","tabs.spec.tsx"],status:{type:"bitv"}},argTypes:I}},"./node_modules/@public-ui/react/dist/index.mjs":(r,i,s)=>{s.d(i,{$o:()=>pe,CO:()=>xe,CV:()=>ae,CX:()=>ie,Er:()=>k,Gc:()=>g,HA:()=>o,Jl:()=>_,K5:()=>Z,Lj:()=>ne,MA:()=>ge,Np:()=>oe,Nv:()=>Te,O:()=>se,P:()=>fe,Q4:()=>he,QK:()=>me,Qs:()=>Ie,RZ:()=>U,T5:()=>Q,TE:()=>le,TQ:()=>de,UD:()=>Ce,Ud:()=>ue,Vp:()=>we,Vs:()=>ve,WD:()=>_e,WR:()=>ke,Ze:()=>Ae,c2:()=>be,cJ:()=>T,ic:()=>m,is:()=>Se,lo:()=>y,m5:()=>O,ox:()=>h,qq:()=>Ee,r7:()=>ye,rW:()=>te,sy:()=>ce,u_:()=>Re,uz:()=>u,z5:()=>re});var d=s("./node_modules/react/index.js"),e=s("./node_modules/react-dom/index.js");const A=l=>l.toLowerCase().split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(""),I=l=>l.replace(/([A-Z])/g,a=>`-${a[0].toLowerCase()}`),R=(l,a,b={})=>{if(l instanceof Element){const v=j(l.classList,a,b);v!==""&&(l.className=v),Object.keys(a).forEach(n=>{if(!(n==="children"||n==="style"||n==="ref"||n==="class"||n==="className"||n==="forwardedRef"))if(n.indexOf("on")===0&&n[2]===n[2].toUpperCase()){const S=n.substring(2),p=S[0].toLowerCase()+S.substring(1);N(p)||M(l,p,a[n])}else l[n]=a[n],typeof a[n]==="string"&&l.setAttribute(I(n),a[n])})}},j=(l,a,b)=>{const v=a.className||a.class,n=b.className||b.class,S=K(l),p=K(v?v.split(" "):[]),L=K(n?n.split(" "):[]),x=[];return S.forEach(w=>{p.has(w)?(x.push(w),p.delete(w)):L.has(w)||x.push(w)}),p.forEach(w=>x.push(w)),x.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const N=l=>{if(typeof document=="undefined")return!0;{const a="on"+l;let b=a in document;if(!b){const v=document.createElement("div");v.setAttribute(a,"return;"),b=typeof v[a]=="function"}return b}},M=(l,a,b)=>{const v=l.__events||(l.__events={}),n=v[a];n&&l.removeEventListener(a,n),l.addEventListener(a,v[a]=function(p){b&&b.call(this,p)})},K=l=>{const a=new Map;return l.forEach(b=>a.set(b,b)),a},B=(l,a)=>{typeof l=="function"?l(a):l!=null&&(l.current=a)},c=(...l)=>a=>{l.forEach(b=>{B(b,a)})},z=(l,a)=>{const b=(v,n)=>d.createElement(l,G(F({},v),{forwardedRef:n}));return b.displayName=a,d.forwardRef(b)},t=(l,a,b,v)=>{v!==void 0&&v();const n=A(l),S=class extends d.Component{constructor(p){super(p),this.setComponentElRef=L=>{this.componentEl=L}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(p){R(this.componentEl,this.props,p)}render(){const J=this.props,{children:p,forwardedRef:L,style:x,className:w,ref:je}=J,H=ee(J,["children","forwardedRef","style","className","ref"]);let W=Object.keys(H).reduce((Y,C)=>{const V=H[C];if(C.indexOf("on")===0&&C[2]===C[2].toUpperCase()){const D=C.substring(2).toLowerCase();typeof document!="undefined"&&N(D)&&(Y[C]=V)}else{const D=typeof V;(D==="string"||D==="boolean"||D==="number")&&(Y[I(C)]=V)}return Y},{});b&&(W=b(this.props,W));const Ne=G(F({},W),{ref:c(L,this.setComponentElRef),style:x});return(0,d.createElement)(l,Ne,p)}static get displayName(){return n}};return a&&(S.contextType=a),z(S,n)},Q=t("kol-abbr"),U=t("kol-accordion"),Z=t("kol-alert"),k=t("kol-badge"),y=t("kol-breadcrumb"),m=t("kol-button"),u=t("kol-button-group"),f=null,E=null,g=t("kol-card"),h=t("kol-details"),O=t("kol-form"),o=t("kol-heading"),_=t("kol-icon"),T=t("kol-icon-font-awesome"),te=t("kol-icon-icofont"),ae=t("kol-indented-text"),De=null,le=t("kol-input-checkbox"),oe=t("kol-input-color"),se=t("kol-input-date"),ne=t("kol-input-email"),ie=t("kol-input-file"),be=t("kol-input-number"),re=t("kol-input-password"),ce=t("kol-input-radio"),de=t("kol-input-range"),_e=t("kol-input-text"),ve=t("kol-kolibri"),Te=t("kol-link"),Be=null,pe=t("kol-link-group"),me=t("kol-logo"),ue=t("kol-modal"),ge=t("kol-nav"),he=t("kol-pagination"),ke=t("kol-progress"),ye=t("kol-select"),fe=t("kol-skip-nav"),Pe=null,Ee=t("kol-spin"),Se=t("kol-symbol"),we=t("kol-table"),Ce=t("kol-tabs"),Ie=t("kol-textarea"),xe=t("kol-toast"),Ae=t("kol-tooltip"),Re=t("kol-version")}}]);
