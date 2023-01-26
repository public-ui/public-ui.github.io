"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7468],{"./src/components/icon-icofont/1-examples/autogen.wc.stories.tsx":(k,m,i)=>{i.r(m),i.d(m,{Colors:()=>a,Output:()=>d,Sizes:()=>c,Standard:()=>l,Text:()=>s,default:()=>C});var u=i("./node_modules/@public-ui/react/dist/index.mjs"),e=i("./node_modules/react/index.js"),g=i("./src/components/icon-icofont/1-examples/autogen.configuration.ts"),h=Object.defineProperty,_=Object.defineProperties,y=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,b=(o,t,r)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,n=(o,t)=>{for(var r in t||(t={}))I.call(t,r)&&b(o,r,t[r]);if(p)for(var r of p(t))w.call(t,r)&&b(o,r,t[r]);return o},S=(o,t)=>_(o,y(t)),x=null,A={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Text:{startLoc:{col:20,line:40},endLoc:{col:1,line:66},startBody:{col:20,line:40},endBody:{col:1,line:66}},Sizes:{startLoc:{col:21,line:77},endLoc:{col:1,line:106},startBody:{col:21,line:77},endBody:{col:1,line:106}},Colors:{startLoc:{col:22,line:117},endLoc:{col:1,line:149},startBody:{col:22,line:117},endBody:{col:1,line:149}},Output:{startLoc:{col:22,line:160},endLoc:{col:1,line:192},startBody:{col:22,line:160},endBody:{col:1,line:192}}};const C=S(n({},g.P),{title:"Web Components/IconIcofont/Beispiele",component:u.rW}),E=o=>React.createElement(MyComponent,n({},o),o.children),f={_icon:"icofont-home"},l=o=>e.createElement("div",null,e.createElement("kol-icon-icofont",S(n({},o),{style:{fontSize:o.size}})));l.args=n({},f);const s=o=>e.createElement("div",null,e.createElement("kol-icon-icofont",{"_aria-label":"",_icon:"icofont-home",style:{display:"inline-block",marginRight:"0.5rem",color:"#708090",fontSize:"200%"}}),"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum. Es folgt ein Icon im Flie\xDFtext:",e.createElement("kol-icon-icofont",{"_aria-label":"",_icon:"icofont-arrow-right",style:{display:"inline-block",margin:"0 0.5rem",color:"#708090",fontSize:"200%"}}),"dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.");s.args=n({},f),s.storyName="Icofont im Text";const c=o=>e.createElement("div",null,e.createElement("kol-icon-icofont",{"_aria-label":"",_icon:"icofont-home",style:{color:"#708090",fontSize:"100%"}}),e.createElement("br",null),e.createElement("kol-icon-icofont",{"_aria-label":"",_icon:"icofont-home",style:{color:"#708090",fontSize:"200%"}}),e.createElement("br",null),e.createElement("kol-icon-icofont",{"_aria-label":"",_icon:"icofont-home",style:{color:"#708090",fontSize:"400%"}}));c.args=n({},f),c.storyName="Gr\xF6\xDFen";const a=o=>e.createElement("div",null,e.createElement("kol-icon-icofont",{"_aria-label":"",_icon:"icofont-home",style:{color:"#DC143C",fontSize:"400%"}}),"in hexadezimaler Schreibweise (#DC143C)",e.createElement("br",null),e.createElement("kol-icon-icofont",{"_aria-label":"",_icon:"icofont-home",style:{color:"rgb(220, 20,60 )",fontSize:"400%"}}),"in RGB-Schreibweise rgb(220, 20,60)",e.createElement("br",null),e.createElement("kol-icon-icofont",{"_aria-label":"",_icon:"icofont-home",style:{color:"rgba(220, 20,60 ,0.5)",fontSize:"400%"}}),"in RGBA-Schreibweise mit Angabe des Alpha-Kanals rgba(220, 20,60,0.5)");a.args=n({},f),a.storyName="Farben";const d=o=>e.createElement("div",null,e.createElement("p",null,"Die generische Icon-Komponente implementiert die Unterst\xFCtzung einer Icon-Font. Hierbei ist die ",e.createElement("code",null,"KolIcon"),"-Komponente eine generische Komponente ",e.createElement("u",null,"ohne")," ",e.createElement("code",null,"Shadow-Dom"),". Die Barrierefreiheit wird durch diese Komponente sichergestellt."),e.createElement("p",null,"Zus\xE4tzlich zu der generischen Icon-Komponente gibt es die konkreten Icon-Komponenten",e.createElement("code",null,"KolIcon-font-awesome")," und",e.createElement("code",null,"KolIconIcofont"),". Diese Komponenten beinhalten keine Logik, sondern verwenden die der generischen Icon-Komponente wieder. Sie kapseln lediglich die jeweilige Icon-Font."),e.createElement("kol-details",{_summary:"Hinweise zur Barrierefreiheit"},"Die Icon-Komponente stellt sicher, dass die Grafik (Icon) immer mit einem Beschriftung (aria-label) beschrieben werden muss. Dabei wird automatisch die Rolle (img) gesetzt. Sollte eine Beschriftung nicht erforderlich sein, weil beispielsweise eine Beschriftung schon durch ein \xFCbergeordnetes Element erfolgt, dann kann das explizit durch die Angabe einer leeren Beschriftung gemacht werden. Wobei hier die Rolle in diesem Fall nicht gesetzt wird.",e.createElement("br",null),"Links:",e.createElement("br",null),e.createElement("kol-link",{_href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html"},"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html")),e.createElement("kol-icon-icofont",{_icon:"icofont-home","_aria-label":"Haus",style:{fontSize:"400%",color:"#5f5f5f"}}),e.createElement("kol-indented-text",null,"Mit Aria-Label"),e.createElement("kol-icon",{_icon:"icofont-home",style:{fontSize:"400%",color:"#00646b"}}),e.createElement("kol-indented-text",null,"Ohne Aria-Label"));d.storyName="Aria Labels",l.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-icon-icofont {...args} style={{ fontSize: args.size }}></kol-icon-icofont>
	</div>
)`}},l.parameters),s.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-icon-icofont
			_aria-label=""
			_icon="icofont-home"
			style={{
				display: 'inline-block',
				marginRight: '0.5rem',
				color: '#708090',
				fontSize: '200%',
			}}
		/>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum. Es folgt ein Icon im Flie\xDFtext:
		<kol-icon-icofont
			_aria-label=""
			_icon="icofont-arrow-right"
			style={{
				display: 'inline-block',
				margin: '0 0.5rem',
				color: '#708090',
				fontSize: '200%',
			}}
		/>
		dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
	</div>
)`}},s.parameters),c.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-icon-icofont
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '100%',
			}}
		/>
		<br />
		<kol-icon-icofont
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '200%',
			}}
		/>
		<br />
		<kol-icon-icofont
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '400%',
			}}
		/>
	</div>
)`}},c.parameters),a.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-icon-icofont
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: '#DC143C',
				fontSize: '400%',
			}}
		/>
		in hexadezimaler Schreibweise (#DC143C)
		<br />
		<kol-icon-icofont
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: 'rgb(220, 20,60 )',
				fontSize: '400%',
			}}
		/>
		in RGB-Schreibweise rgb(220, 20,60)
		<br />
		<kol-icon-icofont
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: 'rgba(220, 20,60 ,0.5)',
				fontSize: '400%',
			}}
		/>
		in RGBA-Schreibweise mit Angabe des Alpha-Kanals rgba(220, 20,60,0.5)
	</div>
)`}},a.parameters),d.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<p>
			Die generische Icon-Komponente implementiert die Unterst\xFCtzung einer Icon-Font. Hierbei ist die <code>KolIcon</code>
			-Komponente eine generische Komponente <u>ohne</u> <code>Shadow-Dom</code>. Die Barrierefreiheit wird durch diese Komponente sichergestellt.
		</p>
		<p>
			Zus\xE4tzlich zu der generischen Icon-Komponente gibt es die konkreten Icon-Komponenten
			<code>KolIcon-font-awesome</code> und
			<code>KolIconIcofont</code>. Diese Komponenten beinhalten keine Logik, sondern verwenden die der generischen Icon-Komponente wieder. Sie kapseln lediglich
			die jeweilige Icon-Font.
		</p>
		<kol-details _summary="Hinweise zur Barrierefreiheit">
			Die Icon-Komponente stellt sicher, dass die Grafik (Icon) immer mit einem Beschriftung (aria-label) beschrieben werden muss. Dabei wird automatisch die
			Rolle (img) gesetzt. Sollte eine Beschriftung nicht erforderlich sein, weil beispielsweise eine Beschriftung schon durch ein \xFCbergeordnetes Element
			erfolgt, dann kann das explizit durch die Angabe einer leeren Beschriftung gemacht werden. Wobei hier die Rolle in diesem Fall nicht gesetzt wird.
			<br />
			Links:
			<br />
			<kol-link _href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html">https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html</kol-link>
		</kol-details>
		<kol-icon-icofont _icon="icofont-home" _aria-label="Haus" style={{ fontSize: '400%', color: '#5f5f5f' }}></kol-icon-icofont>
		<kol-indented-text>Mit Aria-Label</kol-indented-text>
		<kol-icon
			_icon="icofont-home"
			style={{
				fontSize: '400%',
				color: '#00646b',
			}}
		></kol-icon>
		<kol-indented-text>Ohne Aria-Label</kol-indented-text>
	</div>
)`}},d.parameters);try{l.displayName="Standard",l.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:l.__docgenInfo,name:"Standard",path:"src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Standard"})}catch(o){}try{s.displayName="Text",s.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Text"]={docgenInfo:s.__docgenInfo,name:"Text",path:"src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Text"})}catch(o){}try{c.displayName="Sizes",c.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sizes",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Sizes"]={docgenInfo:c.__docgenInfo,name:"Sizes",path:"src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Sizes"})}catch(o){}try{a.displayName="Colors",a.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Colors",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Colors"]={docgenInfo:a.__docgenInfo,name:"Colors",path:"src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Colors"})}catch(o){}try{d.displayName="Output",d.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Output",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Output"]={docgenInfo:d.__docgenInfo,name:"Output",path:"src/components/icon-icofont/1-examples/autogen.wc.stories.tsx#Output"})}catch(o){}},"./src/components/icon-icofont/1-examples/autogen.configuration.ts":(k,m,i)=>{i.d(m,{P:()=>p});var u=i("./node_modules/@storybook/addon-jest/dist/esm/index.js"),e=i("./node_modules/@public-ui/components/jest-test-results.json"),g=i("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js"),h=i("./src/components/icon-icofont/icofont.ts");const _=[""].concat(Object.getOwnPropertyNames(h.I)),y={_icon:{name:"Icon",control:{type:"select"},options:_,defaultValue:"home"},size:{name:"Gr\xF6\xDFe",control:{type:"select"},options:["50%","100%","200%","400%"],defaultValue:"100%"}},p={decorators:[(0,u.x)({results:e})],parameters:{badges:[g.NZ.STABLE],jest:["icon-icofont.e2e.ts","icon-icofont.spec.ts","icon-icofont.spec.tsx"],status:{type:"bitv"}},argTypes:y}}}]);
