"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6259],{"./src/components/icon-icofont/1-examples/react.stories.tsx":(K,f,i)=>{i.r(f),i.d(f,{Colors:()=>d,Output:()=>p,Sizes:()=>l,Standard:()=>m,Text:()=>c,default:()=>w});var a=i("./node_modules/@public-ui/react/dist/index.mjs"),e=i("./node_modules/react/index.js"),h=i("./src/components/icon-icofont/1-examples/autogen.configuration.ts"),_=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,I=(o,t,s)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,n=(o,t)=>{for(var s in t||(t={}))C.call(t,s)&&I(o,s,t[s]);if(u)for(var s of u(t))x.call(t,s)&&I(o,s,t[s]);return o},S=(o,t)=>y(o,b(t)),A=null,L={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Text:{startLoc:{col:20,line:40},endLoc:{col:1,line:66},startBody:{col:20,line:40},endBody:{col:1,line:66}},Sizes:{startLoc:{col:21,line:77},endLoc:{col:1,line:106},startBody:{col:21,line:77},endBody:{col:1,line:106}},Colors:{startLoc:{col:22,line:117},endLoc:{col:1,line:149},startBody:{col:22,line:117},endBody:{col:1,line:149}},Output:{startLoc:{col:22,line:160},endLoc:{col:1,line:192},startBody:{col:22,line:160},endBody:{col:1,line:192}}};const w=S(n({},h.P),{title:"React/IconIcofont/Beispiele",component:a.rW}),r=o=>e.createElement(a.rW,n({},o),o.children),g={_icon:"icofont-home"},m=o=>e.createElement("div",null,e.createElement(r,S(n({},o),{style:{fontSize:o.size}})));m.args=n({},g);const c=o=>e.createElement("div",null,e.createElement(r,{_ariaLabel:"",_icon:"icofont-home",style:{display:"inline-block",marginRight:"0.5rem",color:"#708090",fontSize:"200%"}}),"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum. Es folgt ein Icon im Flie\xDFtext:",e.createElement(r,{_ariaLabel:"",_icon:"icofont-arrow-right",style:{display:"inline-block",margin:"0 0.5rem",color:"#708090",fontSize:"200%"}}),"dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.");c.args=n({},g),c.storyName="Icofont im Text";const l=o=>e.createElement("div",null,e.createElement(r,{_ariaLabel:"",_icon:"icofont-home",style:{color:"#708090",fontSize:"100%"}}),e.createElement("br",null),e.createElement(r,{_ariaLabel:"",_icon:"icofont-home",style:{color:"#708090",fontSize:"200%"}}),e.createElement("br",null),e.createElement(r,{_ariaLabel:"",_icon:"icofont-home",style:{color:"#708090",fontSize:"400%"}}));l.args=n({},g),l.storyName="Gr\xF6\xDFen";const d=o=>e.createElement("div",null,e.createElement(r,{_ariaLabel:"",_icon:"icofont-home",style:{color:"#DC143C",fontSize:"400%"}}),"in hexadezimaler Schreibweise (#DC143C)",e.createElement("br",null),e.createElement(r,{_ariaLabel:"",_icon:"icofont-home",style:{color:"rgb(220, 20,60 )",fontSize:"400%"}}),"in RGB-Schreibweise rgb(220, 20,60)",e.createElement("br",null),e.createElement(r,{_ariaLabel:"",_icon:"icofont-home",style:{color:"rgba(220, 20,60 ,0.5)",fontSize:"400%"}}),"in RGBA-Schreibweise mit Angabe des Alpha-Kanals rgba(220, 20,60,0.5)");d.args=n({},g),d.storyName="Farben";const p=o=>e.createElement("div",null,e.createElement("p",null,"Die generische Icon-Komponente implementiert die Unterst\xFCtzung einer Icon-Font. Hierbei ist die ",e.createElement("code",null,"KolIcon"),"-Komponente eine generische Komponente ",e.createElement("u",null,"ohne")," ",e.createElement("code",null,"Shadow-Dom"),". Die Barrierefreiheit wird durch diese Komponente sichergestellt."),e.createElement("p",null,"Zus\xE4tzlich zu der generischen Icon-Komponente gibt es die konkreten Icon-Komponenten",e.createElement("code",null,"KolIcon-font-awesome")," und",e.createElement("code",null,"KolIconIcofont"),". Diese Komponenten beinhalten keine Logik, sondern verwenden die der generischen Icon-Komponente wieder. Sie kapseln lediglich die jeweilige Icon-Font."),e.createElement(a.ox,{_summary:"Hinweise zur Barrierefreiheit"},"Die Icon-Komponente stellt sicher, dass die Grafik (Icon) immer mit einem Beschriftung (aria-label) beschrieben werden muss. Dabei wird automatisch die Rolle (img) gesetzt. Sollte eine Beschriftung nicht erforderlich sein, weil beispielsweise eine Beschriftung schon durch ein \xFCbergeordnetes Element erfolgt, dann kann das explizit durch die Angabe einer leeren Beschriftung gemacht werden. Wobei hier die Rolle in diesem Fall nicht gesetzt wird.",e.createElement("br",null),"Links:",e.createElement("br",null),e.createElement(a.Nv,{_href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html"},"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html")),e.createElement(r,{_icon:"icofont-home",_ariaLabel:"Haus",style:{fontSize:"400%",color:"#5f5f5f"}}),e.createElement(a.CV,null,"Mit Aria-Label"),e.createElement(a.Jl,{_icon:"icofont-home",style:{fontSize:"400%",color:"#00646b"}}),e.createElement(a.CV,null,"Ohne Aria-Label"));p.storyName="Aria Labels",m.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolIconIcofont {...args} style={{ fontSize: args.size }}></KolIconIcofont>
	</div>
)`}},m.parameters),c.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolIconIcofont
			_ariaLabel=""
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
		<KolIconIcofont
			_ariaLabel=""
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
)`}},c.parameters),l.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolIconIcofont
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '100%',
			}}
		/>
		<br />
		<KolIconIcofont
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '200%',
			}}
		/>
		<br />
		<KolIconIcofont
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '400%',
			}}
		/>
	</div>
)`}},l.parameters),d.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolIconIcofont
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: '#DC143C',
				fontSize: '400%',
			}}
		/>
		in hexadezimaler Schreibweise (#DC143C)
		<br />
		<KolIconIcofont
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: 'rgb(220, 20,60 )',
				fontSize: '400%',
			}}
		/>
		in RGB-Schreibweise rgb(220, 20,60)
		<br />
		<KolIconIcofont
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: 'rgba(220, 20,60 ,0.5)',
				fontSize: '400%',
			}}
		/>
		in RGBA-Schreibweise mit Angabe des Alpha-Kanals rgba(220, 20,60,0.5)
	</div>
)`}},d.parameters),p.parameters=n({storySource:{source:`(args: any) => (
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
		<KolDetails _summary="Hinweise zur Barrierefreiheit">
			Die Icon-Komponente stellt sicher, dass die Grafik (Icon) immer mit einem Beschriftung (aria-label) beschrieben werden muss. Dabei wird automatisch die
			Rolle (img) gesetzt. Sollte eine Beschriftung nicht erforderlich sein, weil beispielsweise eine Beschriftung schon durch ein \xFCbergeordnetes Element
			erfolgt, dann kann das explizit durch die Angabe einer leeren Beschriftung gemacht werden. Wobei hier die Rolle in diesem Fall nicht gesetzt wird.
			<br />
			Links:
			<br />
			<KolLink _href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html">https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html</KolLink>
		</KolDetails>
		<KolIconIcofont _icon="icofont-home" _ariaLabel="Haus" style={{ fontSize: '400%', color: '#5f5f5f' }}></KolIconIcofont>
		<KolIndentedText>Mit Aria-Label</KolIndentedText>
		<KolIcon
			_icon="icofont-home"
			style={{
				fontSize: '400%',
				color: '#00646b',
			}}
		></KolIcon>
		<KolIndentedText>Ohne Aria-Label</KolIndentedText>
	</div>
)`}},p.parameters);try{m.displayName="Standard",m.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/react.stories.tsx#Standard"]={docgenInfo:m.__docgenInfo,name:"Standard",path:"src/components/icon-icofont/1-examples/react.stories.tsx#Standard"})}catch(o){}try{c.displayName="Text",c.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/react.stories.tsx#Text"]={docgenInfo:c.__docgenInfo,name:"Text",path:"src/components/icon-icofont/1-examples/react.stories.tsx#Text"})}catch(o){}try{l.displayName="Sizes",l.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sizes",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/react.stories.tsx#Sizes"]={docgenInfo:l.__docgenInfo,name:"Sizes",path:"src/components/icon-icofont/1-examples/react.stories.tsx#Sizes"})}catch(o){}try{d.displayName="Colors",d.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Colors",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/react.stories.tsx#Colors"]={docgenInfo:d.__docgenInfo,name:"Colors",path:"src/components/icon-icofont/1-examples/react.stories.tsx#Colors"})}catch(o){}try{p.displayName="Output",p.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Output",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-icofont/1-examples/react.stories.tsx#Output"]={docgenInfo:p.__docgenInfo,name:"Output",path:"src/components/icon-icofont/1-examples/react.stories.tsx#Output"})}catch(o){}},"./src/components/icon-icofont/1-examples/autogen.configuration.ts":(K,f,i)=>{i.d(f,{P:()=>u});var a=i("./node_modules/@storybook/addon-jest/dist/esm/index.js"),e=i("./node_modules/@public-ui/components/jest-test-results.json"),h=i("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js"),_=i("./src/components/icon-icofont/icofont.ts");const y=[""].concat(Object.getOwnPropertyNames(_.I)),b={_icon:{name:"Icon",control:{type:"select"},options:y,defaultValue:"home"},size:{name:"Gr\xF6\xDFe",control:{type:"select"},options:["50%","100%","200%","400%"],defaultValue:"100%"}},u={decorators:[(0,a.x)({results:e})],parameters:{badges:[h.NZ.STABLE],jest:["icon-icofont.e2e.ts","icon-icofont.spec.ts","icon-icofont.spec.tsx"],status:{type:"bitv"}},argTypes:b}}}]);
