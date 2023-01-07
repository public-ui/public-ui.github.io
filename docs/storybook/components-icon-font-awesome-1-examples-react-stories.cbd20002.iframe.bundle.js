"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4257],{"./src/components/icon-font-awesome/1-examples/react.stories.tsx":(K,u,p)=>{p.r(u),p.d(u,{Colors:()=>l,Output:()=>d,Sizes:()=>a,Standard:()=>m,Text:()=>s,default:()=>x});var c=p("./node_modules/@public-ui/react/dist/index.mjs"),e=p("./node_modules/react/index.js"),y=p("./src/components/icon-font-awesome/1-examples/autogen.configuration.ts"),b=Object.defineProperty,S=Object.defineProperties,w=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,g=(o,t,r)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,n=(o,t)=>{for(var r in t||(t={}))A.call(t,r)&&g(o,r,t[r]);if(_)for(var r of _(t))I.call(t,r)&&g(o,r,t[r]);return o},h=(o,t)=>S(o,w(t)),C=null,L={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Text:{startLoc:{col:20,line:40},endLoc:{col:1,line:68},startBody:{col:20,line:40},endBody:{col:1,line:68}},Sizes:{startLoc:{col:21,line:79},endLoc:{col:1,line:111},startBody:{col:21,line:79},endBody:{col:1,line:111}},Colors:{startLoc:{col:22,line:122},endLoc:{col:1,line:157},startBody:{col:22,line:122},endBody:{col:1,line:157}},Output:{startLoc:{col:22,line:168},endLoc:{col:1,line:200},startBody:{col:22,line:168},endBody:{col:1,line:200}}};const x=h(n({},y.B),{title:"React/IconFontAwesome/Beispiele",component:c.cJ}),i=o=>e.createElement(c.cJ,n({},o),o.children),f={_icon:"icofont-home"},m=o=>e.createElement("div",null,e.createElement(i,h(n({},o),{style:{fontSize:o.size}})));m.args=n({},f);const s=o=>e.createElement("div",{style:{fontFamily:"Arial"}},e.createElement(i,{_ariaLabel:"",_prefix:"fas",_icon:"icofont-home",style:{display:"inline-block",marginRight:"0.5rem",color:"#708090",fontSize:"200%"}}),"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum. Es folgt ein Icon im Flie\xDFtext:",e.createElement(i,{_prefix:"fas",_ariaLabel:"",_icon:"icofont-home",style:{display:"inline-block",margin:"0 0.5rem",color:"#708090",fontSize:"200%"}}),"dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.");s.args=n({},f),s.storyName="IconFontAwesome im Text";const a=o=>e.createElement("div",null,e.createElement(i,{_prefix:"fas",_ariaLabel:"",_icon:"icofont-home",style:{color:"#708090",fontSize:"100%"}}),e.createElement("br",null),e.createElement(i,{_prefix:"fas",_ariaLabel:"",_icon:"icofont-home",style:{color:"#708090",fontSize:"200%"}}),e.createElement("br",null),e.createElement(i,{_prefix:"fas",_ariaLabel:"",_icon:"icofont-home",style:{color:"#708090",fontSize:"400%"}}));a.args=n({},f),a.storyName="Gr\xF6\xDFen";const l=o=>e.createElement("div",{style:{fontFamily:"Arial"}},e.createElement(i,{_prefix:"fas",_ariaLabel:"",_icon:"icofont-home",style:{color:"#DC143C",fontSize:"400%"}}),"in hexadezimaler Schreibweise (#DC143C)",e.createElement("br",null),e.createElement(i,{_prefix:"fas",_ariaLabel:"",_icon:"icofont-home",style:{color:"rgb(220, 20,60 )",fontSize:"400%"}}),"in RGB-Schreibweise rgb(220,20,60)",e.createElement("br",null),e.createElement(i,{_prefix:"fas",_ariaLabel:"",_icon:"icofont-home",style:{color:"rgba(220, 20,60 ,0.5)",fontSize:"400%"}}),"in RGBA-Schreibweise mit Angabe des Alpha-Kanals rgba(220,20,60,0.5)");l.args=n({},f),l.storyName="Farben";const d=o=>e.createElement("div",null,e.createElement("p",null,"Die generische Icon-Komponente implementiert die Unterst\xFCtzung einer Icon-Font. Hierbei ist die ",e.createElement("code",null,"KolIcon"),"-Komponente eine generische Komponente ",e.createElement("u",null,"ohne")," ",e.createElement("code",null,"Shadow-Dom"),". Die Barrierefreiheit wird durch diese Komponente sichergestellt."),e.createElement("p",null,"Zus\xE4tzlich zu der generischen Icon-Komponente gibt es die konkreten Icon-Komponenten",e.createElement("code",null,"KolIcon-font-awesome")," und",e.createElement("code",null,"KolIconFontAwesome"),". Diese Komponenten beinhalten keine Logik, sondern verwenden die der generischen Icon-Komponente wieder. Sie kapseln lediglich die jeweilige Icon-Font."),e.createElement(c.ox,{_summary:"Hinweise zur Barrierefreiheit"},"Die Icon-Komponente stellt sicher, dass die Grafik (Icon) immer mit einem Beschriftung (aria-label) beschrieben werden muss. Dabei wird automatisch die Rolle (img) gesetzt. Sollte eine Beschriftung nicht erforderlich sein, weil beispielsweise eine Beschriftung schon durch ein \xFCbergeordnetes Element erfolgt, dann kann das explizit durch die Angabe einer leeren Beschriftung gemacht werden. Wobei hier die Rolle in diesem Fall nicht gesetzt wird.",e.createElement("br",null),"Links:",e.createElement("br",null),e.createElement(c.Nv,{_href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html"},"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html")),e.createElement(i,{_prefix:"fas",_icon:"icofont-home",_ariaLabel:"Haus",style:{fontSize:"400%",color:"#5f5f5f"}}),e.createElement(c.CV,null,"Mit Aria-Label"),e.createElement(c.Jl,{_icon:"fas fa-home",style:{fontSize:"400%",color:"#00646b"}}),e.createElement(c.CV,null,"Ohne Aria-Label"));d.storyName="Aria Labels",m.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolIconFontAwesome {...args} style={{ fontSize: args.size }}></KolIconFontAwesome>
	</div>
)`}},m.parameters),s.parameters=n({storySource:{source:`(args: any) => (
	<div style={{ fontFamily: 'Arial' }}>
		<KolIconFontAwesome
			_ariaLabel=""
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
		<KolIconFontAwesome
			_prefix="fas"
			_ariaLabel=""
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
)`}},s.parameters),a.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolIconFontAwesome
			_prefix="fas"
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '100%',
			}}
		/>
		<br />
		<KolIconFontAwesome
			_prefix="fas"
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '200%',
			}}
		/>
		<br />
		<KolIconFontAwesome
			_prefix="fas"
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: '#708090',
				fontSize: '400%',
			}}
		/>
	</div>
)`}},a.parameters),l.parameters=n({storySource:{source:`(args: any) => (
	<div style={{ fontFamily: 'Arial' }}>
		<KolIconFontAwesome
			_prefix="fas"
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: '#DC143C',
				fontSize: '400%',
			}}
		/>
		in hexadezimaler Schreibweise (#DC143C)
		<br />
		<KolIconFontAwesome
			_prefix="fas"
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: 'rgb(220, 20,60 )',
				fontSize: '400%',
			}}
		/>
		in RGB-Schreibweise rgb(220,20,60)
		<br />
		<KolIconFontAwesome
			_prefix="fas"
			_ariaLabel=""
			_icon="icofont-home"
			style={{
				color: 'rgba(220, 20,60 ,0.5)',
				fontSize: '400%',
			}}
		/>
		in RGBA-Schreibweise mit Angabe des Alpha-Kanals rgba(220,20,60,0.5)
	</div>
)`}},l.parameters),d.parameters=n({storySource:{source:`(args: any) => (
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
		<KolDetails _summary="Hinweise zur Barrierefreiheit">
			Die Icon-Komponente stellt sicher, dass die Grafik (Icon) immer mit einem Beschriftung (aria-label) beschrieben werden muss. Dabei wird automatisch die
			Rolle (img) gesetzt. Sollte eine Beschriftung nicht erforderlich sein, weil beispielsweise eine Beschriftung schon durch ein \xFCbergeordnetes Element
			erfolgt, dann kann das explizit durch die Angabe einer leeren Beschriftung gemacht werden. Wobei hier die Rolle in diesem Fall nicht gesetzt wird.
			<br />
			Links:
			<br />
			<KolLink _href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html">https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html</KolLink>
		</KolDetails>
		<KolIconFontAwesome _prefix="fas" _icon="icofont-home" _ariaLabel="Haus" style={{ fontSize: '400%', color: '#5f5f5f' }}></KolIconFontAwesome>
		<KolIndentedText>Mit Aria-Label</KolIndentedText>
		<KolIcon
			_icon="fas fa-home"
			style={{
				fontSize: '400%',
				color: '#00646b',
			}}
		></KolIcon>
		<KolIndentedText>Ohne Aria-Label</KolIndentedText>
	</div>
)`}},d.parameters);try{m.displayName="Standard",m.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/react.stories.tsx#Standard"]={docgenInfo:m.__docgenInfo,name:"Standard",path:"src/components/icon-font-awesome/1-examples/react.stories.tsx#Standard"})}catch(o){}try{s.displayName="Text",s.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/react.stories.tsx#Text"]={docgenInfo:s.__docgenInfo,name:"Text",path:"src/components/icon-font-awesome/1-examples/react.stories.tsx#Text"})}catch(o){}try{a.displayName="Sizes",a.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sizes",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/react.stories.tsx#Sizes"]={docgenInfo:a.__docgenInfo,name:"Sizes",path:"src/components/icon-font-awesome/1-examples/react.stories.tsx#Sizes"})}catch(o){}try{l.displayName="Colors",l.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Colors",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/react.stories.tsx#Colors"]={docgenInfo:l.__docgenInfo,name:"Colors",path:"src/components/icon-font-awesome/1-examples/react.stories.tsx#Colors"})}catch(o){}try{d.displayName="Output",d.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Output",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/icon-font-awesome/1-examples/react.stories.tsx#Output"]={docgenInfo:d.__docgenInfo,name:"Output",path:"src/components/icon-font-awesome/1-examples/react.stories.tsx#Output"})}catch(o){}}}]);
