"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3047],{"./src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx":(A,f,m)=>{m.r(f),m.d(f,{Colors:()=>s,Output:()=>c,Sizes:()=>a,Standard:()=>l,Text:()=>r,default:()=>x});var g=m("./node_modules/@public-ui/react/dist/index.mjs"),e=m("./node_modules/react/index.js"),h=m("./src/components/icon-font-awesome/1-examples/autogen.configuration.ts"),y=Object.defineProperty,b=Object.defineProperties,w=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,u=(o,t,i)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,n=(o,t)=>{for(var i in t||(t={}))S.call(t,i)&&u(o,i,t[i]);if(p)for(var i of p(t))k.call(t,i)&&u(o,i,t[i]);return o},_=(o,t)=>b(o,w(t)),C=null,I={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Text:{startLoc:{col:20,line:40},endLoc:{col:1,line:68},startBody:{col:20,line:40},endBody:{col:1,line:68}},Sizes:{startLoc:{col:21,line:79},endLoc:{col:1,line:111},startBody:{col:21,line:79},endBody:{col:1,line:111}},Colors:{startLoc:{col:22,line:122},endLoc:{col:1,line:157},startBody:{col:22,line:122},endBody:{col:1,line:157}},Output:{startLoc:{col:22,line:168},endLoc:{col:1,line:200},startBody:{col:22,line:168},endBody:{col:1,line:200}}};const x=_(n({},h.B),{title:"Web Components/IconFontAwesome/Beispiele",component:g.cJ}),E=o=>React.createElement(MyComponent,n({},o),o.children),d={_icon:"icofont-home"},l=o=>e.createElement("div",null,e.createElement("kol-icon-font-awesome",_(n({},o),{style:{fontSize:o.size}})));l.args=n({},d);const r=o=>e.createElement("div",{style:{fontFamily:"Arial"}},e.createElement("kol-icon-font-awesome",{"_aria-label":"",_prefix:"fas",_icon:"icofont-home",style:{display:"inline-block",marginRight:"0.5rem",color:"#708090",fontSize:"200%"}}),"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum. Es folgt ein Icon im Flie\xDFtext:",e.createElement("kol-icon-font-awesome",{_prefix:"fas","_aria-label":"",_icon:"icofont-home",style:{display:"inline-block",margin:"0 0.5rem",color:"#708090",fontSize:"200%"}}),"dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.");r.args=n({},d),r.storyName="IconFontAwesome im Text";const a=o=>e.createElement("div",null,e.createElement("kol-icon-font-awesome",{_prefix:"fas","_aria-label":"",_icon:"icofont-home",style:{color:"#708090",fontSize:"100%"}}),e.createElement("br",null),e.createElement("kol-icon-font-awesome",{_prefix:"fas","_aria-label":"",_icon:"icofont-home",style:{color:"#708090",fontSize:"200%"}}),e.createElement("br",null),e.createElement("kol-icon-font-awesome",{_prefix:"fas","_aria-label":"",_icon:"icofont-home",style:{color:"#708090",fontSize:"400%"}}));a.args=n({},d),a.storyName="Gr\xF6\xDFen";const s=o=>e.createElement("div",{style:{fontFamily:"Arial"}},e.createElement("kol-icon-font-awesome",{_prefix:"fas","_aria-label":"",_icon:"icofont-home",style:{color:"#DC143C",fontSize:"400%"}}),"in hexadezimaler Schreibweise (#DC143C)",e.createElement("br",null),e.createElement("kol-icon-font-awesome",{_prefix:"fas","_aria-label":"",_icon:"icofont-home",style:{color:"rgb(220, 20,60 )",fontSize:"400%"}}),"in RGB-Schreibweise rgb(220,20,60)",e.createElement("br",null),e.createElement("kol-icon-font-awesome",{_prefix:"fas","_aria-label":"",_icon:"icofont-home",style:{color:"rgba(220, 20,60 ,0.5)",fontSize:"400%"}}),"in RGBA-Schreibweise mit Angabe des Alpha-Kanals rgba(220,20,60,0.5)");s.args=n({},d),s.storyName="Farben";const c=o=>e.createElement("div",null,e.createElement("p",null,"Die generische Icon-Komponente implementiert die Unterst\xFCtzung einer Icon-Font. Hierbei ist die ",e.createElement("code",null,"KolIcon"),"-Komponente eine generische Komponente ",e.createElement("u",null,"ohne")," ",e.createElement("code",null,"Shadow-Dom"),". Die Barrierefreiheit wird durch diese Komponente sichergestellt."),e.createElement("p",null,"Zus\xE4tzlich zu der generischen Icon-Komponente gibt es die konkreten Icon-Komponenten",e.createElement("code",null,"KolIcon-font-awesome")," und",e.createElement("code",null,"KolIconFontAwesome"),". Diese Komponenten beinhalten keine Logik, sondern verwenden die der generischen Icon-Komponente wieder. Sie kapseln lediglich die jeweilige Icon-Font."),e.createElement("kol-details",{_summary:"Hinweise zur Barrierefreiheit"},"Die Icon-Komponente stellt sicher, dass die Grafik (Icon) immer mit einem Beschriftung (aria-label) beschrieben werden muss. Dabei wird automatisch die Rolle (img) gesetzt. Sollte eine Beschriftung nicht erforderlich sein, weil beispielsweise eine Beschriftung schon durch ein \xFCbergeordnetes Element erfolgt, dann kann das explizit durch die Angabe einer leeren Beschriftung gemacht werden. Wobei hier die Rolle in diesem Fall nicht gesetzt wird.",e.createElement("br",null),"Links:",e.createElement("br",null),e.createElement("kol-link",{_href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html"},"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html")),e.createElement("kol-icon-font-awesome",{_prefix:"fas",_icon:"icofont-home","_aria-label":"Haus",style:{fontSize:"400%",color:"#5f5f5f"}}),e.createElement("kol-indented-text",null,"Mit Aria-Label"),e.createElement("kol-icon",{_icon:"fas fa-home",style:{fontSize:"400%",color:"#00646b"}}),e.createElement("kol-indented-text",null,"Ohne Aria-Label"));c.storyName="Aria Labels",l.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-icon-font-awesome {...args} style={{ fontSize: args.size }}></kol-icon-font-awesome>
	</div>
)`}},l.parameters),r.parameters=n({storySource:{source:`(args: any) => (
	<div style={{ fontFamily: 'Arial' }}>
		<kol-icon-font-awesome
			_aria-label=""
			_prefix="fas"
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
		<kol-icon-font-awesome
			_prefix="fas"
			_aria-label=""
			_icon="icofont-home"
			style={{
				display: 'inline-block',
				margin: '0 0.5rem',
				color: '#708090',
				fontSize: '200%',
			}}
		/>
		dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
	</div>
)`}},r.parameters),a.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-icon-font-awesome
			_prefix="fas"
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '100%',
			}}
		/>
		<br />
		<kol-icon-font-awesome
			_prefix="fas"
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '200%',
			}}
		/>
		<br />
		<kol-icon-font-awesome
			_prefix="fas"
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '400%',
			}}
		/>
	</div>
)`}},a.parameters),s.parameters=n({storySource:{source:`(args: any) => (
	<div style={{ fontFamily: 'Arial' }}>
		<kol-icon-font-awesome
			_prefix="fas"
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: '#DC143C',
				fontSize: '400%',
			}}
		/>
		in hexadezimaler Schreibweise (#DC143C)
		<br />
		<kol-icon-font-awesome
			_prefix="fas"
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: 'rgb(220, 20,60 )',
				fontSize: '400%',
			}}
		/>
		in RGB-Schreibweise rgb(220,20,60)
		<br />
		<kol-icon-font-awesome
			_prefix="fas"
			_aria-label=""
			_icon="icofont-home"
			style={{
				color: 'rgba(220, 20,60 ,0.5)',
				fontSize: '400%',
			}}
		/>
		in RGBA-Schreibweise mit Angabe des Alpha-Kanals rgba(220,20,60,0.5)
	</div>
)`}},s.parameters),c.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<p>
			Die generische Icon-Komponente implementiert die Unterst\xFCtzung einer Icon-Font. Hierbei ist die <code>KolIcon</code>
			-Komponente eine generische Komponente <u>ohne</u> <code>Shadow-Dom</code>. Die Barrierefreiheit wird durch diese Komponente sichergestellt.
		</p>
		<p>
			Zus\xE4tzlich zu der generischen Icon-Komponente gibt es die konkreten Icon-Komponenten
			<code>KolIcon-font-awesome</code> und
			<code>KolIconFontAwesome</code>. Diese Komponenten beinhalten keine Logik, sondern verwenden die der generischen Icon-Komponente wieder. Sie kapseln
			lediglich die jeweilige Icon-Font.
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
		<kol-icon-font-awesome _prefix="fas" _icon="icofont-home" _aria-label="Haus" style={{ fontSize: '400%', color: '#5f5f5f' }}></kol-icon-font-awesome>
		<kol-indented-text>Mit Aria-Label</kol-indented-text>
		<kol-icon
			_icon="fas fa-home"
			style={{
				fontSize: '400%',
				color: '#00646b',
			}}
		></kol-icon>
		<kol-indented-text>Ohne Aria-Label</kol-indented-text>
	</div>
)`}},c.parameters);try{l.displayName="Standard",l.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:l.__docgenInfo,name:"Standard",path:"src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Standard"})}catch(o){}try{r.displayName="Text",r.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Text"]={docgenInfo:r.__docgenInfo,name:"Text",path:"src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Text"})}catch(o){}try{a.displayName="Sizes",a.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sizes",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Sizes"]={docgenInfo:a.__docgenInfo,name:"Sizes",path:"src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Sizes"})}catch(o){}try{s.displayName="Colors",s.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Colors",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Colors"]={docgenInfo:s.__docgenInfo,name:"Colors",path:"src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Colors"})}catch(o){}try{c.displayName="Output",c.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Output",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Output"]={docgenInfo:c.__docgenInfo,name:"Output",path:"src/components/icon-font-awesome/1-examples/autogen.wc.stories.tsx#Output"})}catch(o){}}}]);
