"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8253],{"./src/components/badge/1-examples/autogen.wc.stories.tsx":(x,p,r)=>{r.r(p),r.d(p,{AlsLabel:()=>d,Bright:()=>g,Dark:()=>m,Einfaerben:()=>i,IconPosition:()=>s,MitIcon:()=>b,Schriftschnitt:()=>_,Standard:()=>c,default:()=>O});var k=r("./node_modules/@public-ui/react/dist/index.mjs"),o=r("./node_modules/react/index.js"),y=r("./src/components/badge/1-examples/autogen.configuration.ts"),f=Object.defineProperty,h=Object.defineProperties,S=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,v=(e,n,l)=>n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,t=(e,n)=>{for(var l in n||(n={}))I.call(n,l)&&v(e,l,n[l]);if(u)for(var l of u(n))B.call(n,l)&&v(e,l,n[l]);return e},a=(e,n)=>h(e,S(n)),C=null,A={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Einfaerben:{startLoc:{col:26,line:40},endLoc:{col:1,line:48},startBody:{col:26,line:40},endBody:{col:1,line:48}},MitIcon:{startLoc:{col:23,line:59},endLoc:{col:1,line:67},startBody:{col:23,line:59},endBody:{col:1,line:67}},IconPosition:{startLoc:{col:28,line:74},endLoc:{col:1,line:79},startBody:{col:28,line:74},endBody:{col:1,line:79}},Schriftschnitt:{startLoc:{col:30,line:90},endLoc:{col:1,line:101},startBody:{col:30,line:90},endBody:{col:1,line:101}},AlsLabel:{startLoc:{col:24,line:108},endLoc:{col:1,line:117},startBody:{col:24,line:108},endBody:{col:1,line:117}},Bright:{startLoc:{col:22,line:129},endLoc:{col:1,line:141},startBody:{col:22,line:129},endBody:{col:1,line:141}},Dark:{startLoc:{col:20,line:149},endLoc:{col:1,line:161},startBody:{col:20,line:149},endBody:{col:1,line:161}}};const O=a(t({},y.n),{title:"Web Components/Badge/Beispiele",component:k.Er}),L=e=>React.createElement(MyComponent,t({},e),e.children),E={_label:"Label-Text"},c=e=>o.createElement("div",null,o.createElement("kol-badge",t({},e)));c.args=t({},E);const i=e=>o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement("kol-badge",t({},e)),o.createElement("kol-badge",a(t({},e),{_color:"#B22222"})),o.createElement("kol-badge",a(t({},e),{_color:"#4682B4"})),o.createElement("kol-badge",a(t({},e),{_color:"#228B22"})),o.createElement("kol-badge",a(t({},e),{_color:"#8B008B"})));i.args=t({},E),i.storyName="Einf\xE4rben";const b=e=>o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement("kol-badge",a(t({},e),{_label:"Standard ohne Icon"})),o.createElement("kol-badge",a(t({},e),{_label:"Icon Home",_icon:"icofont-home"})),o.createElement("kol-badge",a(t({},e),{_label:"Icon question-circle",_icon:"icofont-question-circle"})),o.createElement("kol-badge",a(t({},e),{_label:"Icon exclamation-circle",_icon:"icofont-exclamation-circle"})),o.createElement("kol-badge",a(t({},e),{_label:"Icon calendar",_icon:"icofont-calendar"}))),s=e=>o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement("kol-badge",a(t({},e),{"_icon-align":"left"})),o.createElement("kol-badge",a(t({},e),{"_icon-align":"right"})));s.args=a(t({},E),{_icon:"icofont-home"});const _=e=>o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement("kol-badge",a(t({},e),{_label:"Normale Schrift"})),o.createElement("kol-badge",a(t({},e),{_label:"Schrift fett",style:{fontWeight:"600"}}))),d=e=>o.createElement("div",null,o.createElement("kol-badge",t({},e)),o.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ."));d.args={_label:"23.08.2021",_icon:"icofont-calendar",_color:"#4682B4"};const g=e=>o.createElement("div",null,o.createElement("kol-details",{_summary:"Hinweise zur Barrierefreiheit"},"Die Komponente managed die Schriftfarbe in Abh\xE4ngigkeit zur Hintergrundfarbe automatisch."),o.createElement("kol-heading",{_level:2},"Heller Hintergrund"),o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement("kol-badge",{_label:"Ich bin ein Tag!",_icon:"icofont-ui-love",_color:"#c1ca31"}),o.createElement("kol-badge",{_label:"Ich auch!",_icon:"icofont-ui-rating","_icon-align":"right",_color:"#f7bb3d"}),o.createElement("kol-badge",{_label:"Und ich!",_color:"#80cdec"}),o.createElement("kol-badge",{_label:"",_icon:"icofont-ui-rate-blank","_icon-only":!0,_color:"#f9e03a"})));g.storyName="Heller Hintergrund";const m=e=>o.createElement("div",null,o.createElement("kol-details",{_summary:"Hinweise zur Barrierefreiheit"},"Die Komponente managed die Schriftfarbe in Abh\xE4ngigkeit zur Hintergrundfarbe automatisch."),o.createElement("kol-heading",{_level:2},"Dunkler Hintergrund"),o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement("kol-badge",{_label:"Ich bin ein Tag!",_icon:"icofont-ui-love",_color:"#000"}),o.createElement("kol-badge",{_label:"Ich auch!",_icon:"icofont-ui-rating","_icon-align":"right",_color:"#94083c"}),o.createElement("kol-badge",{_label:"Und ich!",_color:"#0c247d"}),o.createElement("kol-badge",{_label:"",_icon:"icofont-ui-rate-blank","_icon-only":!0,_color:"#030"})));m.storyName="Dunkler Hintergrund",c.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<kol-badge {...args}></kol-badge>
	</div>
)`}},c.parameters),i.parameters=t({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.25em' }}>
		<kol-badge {...args}></kol-badge>
		<kol-badge {...args} _color="#B22222"></kol-badge>
		<kol-badge {...args} _color="#4682B4"></kol-badge>
		<kol-badge {...args} _color="#228B22"></kol-badge>
		<kol-badge {...args} _color="#8B008B"></kol-badge>
	</div>
)`}},i.parameters),b.parameters=t({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.25em' }}>
		<kol-badge {...args} _label="Standard ohne Icon"></kol-badge>
		<kol-badge {...args} _label="Icon Home" _icon="icofont-home"></kol-badge>
		<kol-badge {...args} _label="Icon question-circle" _icon="icofont-question-circle"></kol-badge>
		<kol-badge {...args} _label="Icon exclamation-circle" _icon="icofont-exclamation-circle"></kol-badge>
		<kol-badge {...args} _label="Icon calendar" _icon="icofont-calendar"></kol-badge>
	</div>
)`}},b.parameters),s.parameters=t({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.25em' }}>
		<kol-badge {...args} _icon-align={'left'}></kol-badge>
		<kol-badge {...args} _icon-align={'right'}></kol-badge>
	</div>
)`}},s.parameters),_.parameters=t({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.25em' }}>
		<kol-badge {...args} _label="Normale Schrift"></kol-badge>
		<kol-badge
			{...args}
			_label="Schrift fett"
			style={{
				fontWeight: '600',
			}}
		></kol-badge>
	</div>
)`}},_.parameters),d.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<kol-badge {...args}></kol-badge>
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor .
		</p>
	</div>
)`}},d.parameters),g.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<kol-details _summary="Hinweise zur Barrierefreiheit">Die Komponente managed die Schriftfarbe in Abh\xE4ngigkeit zur Hintergrundfarbe automatisch.</kol-details>

		<kol-heading _level={2}>Heller Hintergrund</kol-heading>
		<div style={{ display: 'flex', gap: '0.25em' }}>
			<kol-badge _label="Ich bin ein Tag!" _icon="icofont-ui-love" _color="#c1ca31"></kol-badge>
			<kol-badge _label="Ich auch!" _icon="icofont-ui-rating" _icon-align="right" _color="#f7bb3d"></kol-badge>
			<kol-badge _label="Und ich!" _color="#80cdec"></kol-badge>
			<kol-badge _label="" _icon="icofont-ui-rate-blank" _icon-only _color="#f9e03a"></kol-badge>
		</div>
	</div>
)`}},g.parameters),m.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<kol-details _summary="Hinweise zur Barrierefreiheit">Die Komponente managed die Schriftfarbe in Abh\xE4ngigkeit zur Hintergrundfarbe automatisch.</kol-details>

		<kol-heading _level={2}>Dunkler Hintergrund</kol-heading>
		<div style={{ display: 'flex', gap: '0.25em' }}>
			<kol-badge _label="Ich bin ein Tag!" _icon="icofont-ui-love" _color="#000"></kol-badge>
			<kol-badge _label="Ich auch!" _icon="icofont-ui-rating" _icon-align="right" _color="#94083c"></kol-badge>
			<kol-badge _label="Und ich!" _color="#0c247d"></kol-badge>
			<kol-badge _label="" _icon="icofont-ui-rate-blank" _icon-only _color="#030"></kol-badge>
		</div>
	</div>
)`}},m.parameters);try{c.displayName="Standard",c.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:c.__docgenInfo,name:"Standard",path:"src/components/badge/1-examples/autogen.wc.stories.tsx#Standard"})}catch(e){}try{i.displayName="Einfaerben",i.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Einfaerben",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/autogen.wc.stories.tsx#Einfaerben"]={docgenInfo:i.__docgenInfo,name:"Einfaerben",path:"src/components/badge/1-examples/autogen.wc.stories.tsx#Einfaerben"})}catch(e){}try{b.displayName="MitIcon",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"MitIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/autogen.wc.stories.tsx#MitIcon"]={docgenInfo:b.__docgenInfo,name:"MitIcon",path:"src/components/badge/1-examples/autogen.wc.stories.tsx#MitIcon"})}catch(e){}try{s.displayName="IconPosition",s.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"IconPosition",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/autogen.wc.stories.tsx#IconPosition"]={docgenInfo:s.__docgenInfo,name:"IconPosition",path:"src/components/badge/1-examples/autogen.wc.stories.tsx#IconPosition"})}catch(e){}try{_.displayName="Schriftschnitt",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Schriftschnitt",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/autogen.wc.stories.tsx#Schriftschnitt"]={docgenInfo:_.__docgenInfo,name:"Schriftschnitt",path:"src/components/badge/1-examples/autogen.wc.stories.tsx#Schriftschnitt"})}catch(e){}try{d.displayName="AlsLabel",d.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"AlsLabel",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/autogen.wc.stories.tsx#AlsLabel"]={docgenInfo:d.__docgenInfo,name:"AlsLabel",path:"src/components/badge/1-examples/autogen.wc.stories.tsx#AlsLabel"})}catch(e){}try{g.displayName="Bright",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Bright",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/autogen.wc.stories.tsx#Bright"]={docgenInfo:g.__docgenInfo,name:"Bright",path:"src/components/badge/1-examples/autogen.wc.stories.tsx#Bright"})}catch(e){}try{m.displayName="Dark",m.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Dark",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/autogen.wc.stories.tsx#Dark"]={docgenInfo:m.__docgenInfo,name:"Dark",path:"src/components/badge/1-examples/autogen.wc.stories.tsx#Dark"})}catch(e){}},"./src/components/badge/1-examples/autogen.configuration.ts":(x,p,r)=>{r.d(p,{n:()=>u});var k=r("./node_modules/@storybook/addon-jest/dist/esm/index.js"),o=r("./node_modules/@public-ui/components/jest-test-results.json"),y=r("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js"),f=r("./src/components/icon-icofont/icofont.ts");const h=[""].concat(Object.getOwnPropertyNames(f.I)),S={_color:{name:"Farbe",control:{type:"color"}},_icon:{name:"Icon",control:{type:"select"},options:h},_iconAlign:{name:"Icon-Ausrichtung",control:{type:"select"},options:["left","right"]},_iconOnly:{name:"Nur Icon",control:{type:"boolean",default:!1}},_label:{name:"Label-Text",control:{type:"text"},type:{required:!0}}},u={decorators:[(0,k.x)({results:o})],parameters:{badges:[y.NZ.STABLE],jest:["badge.e2e.ts","badge.spec.ts","badge.spec.tsx"],status:{type:"bitv"}},argTypes:S}}}]);
