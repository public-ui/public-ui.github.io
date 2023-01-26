"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2269],{"./src/components/badge/1-examples/react.stories.tsx":(v,f,l)=>{l.r(f),l.d(f,{AlsLabel:()=>m,Bright:()=>_,Dark:()=>p,Einfaerben:()=>s,IconPosition:()=>g,MitIcon:()=>y,Schriftschnitt:()=>u,Standard:()=>d,default:()=>O});var c=l("./node_modules/@public-ui/react/dist/index.mjs"),o=l("./node_modules/react/index.js"),B=l("./src/components/badge/1-examples/autogen.configuration.ts"),S=Object.defineProperty,h=Object.defineProperties,K=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,k=(e,r,i)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,t=(e,r)=>{for(var i in r||(r={}))x.call(r,i)&&k(e,i,r[i]);if(b)for(var i of b(r))I.call(r,i)&&k(e,i,r[i]);return e},n=(e,r)=>h(e,K(r)),A=null,C={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Einfaerben:{startLoc:{col:26,line:40},endLoc:{col:1,line:48},startBody:{col:26,line:40},endBody:{col:1,line:48}},MitIcon:{startLoc:{col:23,line:59},endLoc:{col:1,line:67},startBody:{col:23,line:59},endBody:{col:1,line:67}},IconPosition:{startLoc:{col:28,line:74},endLoc:{col:1,line:79},startBody:{col:28,line:74},endBody:{col:1,line:79}},Schriftschnitt:{startLoc:{col:30,line:90},endLoc:{col:1,line:101},startBody:{col:30,line:90},endBody:{col:1,line:101}},AlsLabel:{startLoc:{col:24,line:108},endLoc:{col:1,line:117},startBody:{col:24,line:108},endBody:{col:1,line:117}},Bright:{startLoc:{col:22,line:129},endLoc:{col:1,line:141},startBody:{col:22,line:129},endBody:{col:1,line:141}},Dark:{startLoc:{col:20,line:149},endLoc:{col:1,line:161},startBody:{col:20,line:149},endBody:{col:1,line:161}}};const O=n(t({},B.n),{title:"React/Badge/Beispiele",component:c.Er}),a=e=>o.createElement(c.Er,t({},e),e.children),E={_label:"Label-Text"},d=e=>o.createElement("div",null,o.createElement(a,t({},e)));d.args=t({},E);const s=e=>o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement(a,t({},e)),o.createElement(a,n(t({},e),{_color:"#B22222"})),o.createElement(a,n(t({},e),{_color:"#4682B4"})),o.createElement(a,n(t({},e),{_color:"#228B22"})),o.createElement(a,n(t({},e),{_color:"#8B008B"})));s.args=t({},E),s.storyName="Einf\xE4rben";const y=e=>o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement(a,n(t({},e),{_label:"Standard ohne Icon"})),o.createElement(a,n(t({},e),{_label:"Icon Home",_icon:"icofont-home"})),o.createElement(a,n(t({},e),{_label:"Icon question-circle",_icon:"icofont-question-circle"})),o.createElement(a,n(t({},e),{_label:"Icon exclamation-circle",_icon:"icofont-exclamation-circle"})),o.createElement(a,n(t({},e),{_label:"Icon calendar",_icon:"icofont-calendar"}))),g=e=>o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement(a,n(t({},e),{_iconAlign:"left"})),o.createElement(a,n(t({},e),{_iconAlign:"right"})));g.args=n(t({},E),{_icon:"icofont-home"});const u=e=>o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement(a,n(t({},e),{_label:"Normale Schrift"})),o.createElement(a,n(t({},e),{_label:"Schrift fett",style:{fontWeight:"600"}}))),m=e=>o.createElement("div",null,o.createElement(a,t({},e)),o.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ."));m.args={_label:"23.08.2021",_icon:"icofont-calendar",_color:"#4682B4"};const _=e=>o.createElement("div",null,o.createElement(c.ox,{_summary:"Hinweise zur Barrierefreiheit"},"Die Komponente managed die Schriftfarbe in Abh\xE4ngigkeit zur Hintergrundfarbe automatisch."),o.createElement(c.HA,{_level:2},"Heller Hintergrund"),o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement(a,{_label:"Ich bin ein Tag!",_icon:"icofont-ui-love",_color:"#c1ca31"}),o.createElement(a,{_label:"Ich auch!",_icon:"icofont-ui-rating","_icon-align":"right",_color:"#f7bb3d"}),o.createElement(a,{_label:"Und ich!",_color:"#80cdec"}),o.createElement(a,{_label:"",_icon:"icofont-ui-rate-blank","_icon-only":!0,_color:"#f9e03a"})));_.storyName="Heller Hintergrund";const p=e=>o.createElement("div",null,o.createElement(c.ox,{_summary:"Hinweise zur Barrierefreiheit"},"Die Komponente managed die Schriftfarbe in Abh\xE4ngigkeit zur Hintergrundfarbe automatisch."),o.createElement(c.HA,{_level:2},"Dunkler Hintergrund"),o.createElement("div",{style:{display:"flex",gap:"0.25em"}},o.createElement(a,{_label:"Ich bin ein Tag!",_icon:"icofont-ui-love",_color:"#000"}),o.createElement(a,{_label:"Ich auch!",_icon:"icofont-ui-rating","_icon-align":"right",_color:"#94083c"}),o.createElement(a,{_label:"Und ich!",_color:"#0c247d"}),o.createElement(a,{_label:"",_icon:"icofont-ui-rate-blank","_icon-only":!0,_color:"#030"})));p.storyName="Dunkler Hintergrund",d.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<KolBadge {...args}></KolBadge>
	</div>
)`}},d.parameters),s.parameters=t({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.25em' }}>
		<KolBadge {...args}></KolBadge>
		<KolBadge {...args} _color="#B22222"></KolBadge>
		<KolBadge {...args} _color="#4682B4"></KolBadge>
		<KolBadge {...args} _color="#228B22"></KolBadge>
		<KolBadge {...args} _color="#8B008B"></KolBadge>
	</div>
)`}},s.parameters),y.parameters=t({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.25em' }}>
		<KolBadge {...args} _label="Standard ohne Icon"></KolBadge>
		<KolBadge {...args} _label="Icon Home" _icon="icofont-home"></KolBadge>
		<KolBadge {...args} _label="Icon question-circle" _icon="icofont-question-circle"></KolBadge>
		<KolBadge {...args} _label="Icon exclamation-circle" _icon="icofont-exclamation-circle"></KolBadge>
		<KolBadge {...args} _label="Icon calendar" _icon="icofont-calendar"></KolBadge>
	</div>
)`}},y.parameters),g.parameters=t({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.25em' }}>
		<KolBadge {...args} _iconAlign={'left'}></KolBadge>
		<KolBadge {...args} _iconAlign={'right'}></KolBadge>
	</div>
)`}},g.parameters),u.parameters=t({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.25em' }}>
		<KolBadge {...args} _label="Normale Schrift"></KolBadge>
		<KolBadge
			{...args}
			_label="Schrift fett"
			style={{
				fontWeight: '600',
			}}
		></KolBadge>
	</div>
)`}},u.parameters),m.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<KolBadge {...args}></KolBadge>
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor .
		</p>
	</div>
)`}},m.parameters),_.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<KolDetails _summary="Hinweise zur Barrierefreiheit">Die Komponente managed die Schriftfarbe in Abh\xE4ngigkeit zur Hintergrundfarbe automatisch.</KolDetails>

		<KolHeading _level={2}>Heller Hintergrund</KolHeading>
		<div style={{ display: 'flex', gap: '0.25em' }}>
			<KolBadge _label="Ich bin ein Tag!" _icon="icofont-ui-love" _color="#c1ca31"></KolBadge>
			<KolBadge _label="Ich auch!" _icon="icofont-ui-rating" _icon-align="right" _color="#f7bb3d"></KolBadge>
			<KolBadge _label="Und ich!" _color="#80cdec"></KolBadge>
			<KolBadge _label="" _icon="icofont-ui-rate-blank" _icon-only _color="#f9e03a"></KolBadge>
		</div>
	</div>
)`}},_.parameters),p.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<KolDetails _summary="Hinweise zur Barrierefreiheit">Die Komponente managed die Schriftfarbe in Abh\xE4ngigkeit zur Hintergrundfarbe automatisch.</KolDetails>

		<KolHeading _level={2}>Dunkler Hintergrund</KolHeading>
		<div style={{ display: 'flex', gap: '0.25em' }}>
			<KolBadge _label="Ich bin ein Tag!" _icon="icofont-ui-love" _color="#000"></KolBadge>
			<KolBadge _label="Ich auch!" _icon="icofont-ui-rating" _icon-align="right" _color="#94083c"></KolBadge>
			<KolBadge _label="Und ich!" _color="#0c247d"></KolBadge>
			<KolBadge _label="" _icon="icofont-ui-rate-blank" _icon-only _color="#030"></KolBadge>
		</div>
	</div>
)`}},p.parameters);try{d.displayName="Standard",d.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/react.stories.tsx#Standard"]={docgenInfo:d.__docgenInfo,name:"Standard",path:"src/components/badge/1-examples/react.stories.tsx#Standard"})}catch(e){}try{s.displayName="Einfaerben",s.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Einfaerben",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/react.stories.tsx#Einfaerben"]={docgenInfo:s.__docgenInfo,name:"Einfaerben",path:"src/components/badge/1-examples/react.stories.tsx#Einfaerben"})}catch(e){}try{y.displayName="MitIcon",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"MitIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/react.stories.tsx#MitIcon"]={docgenInfo:y.__docgenInfo,name:"MitIcon",path:"src/components/badge/1-examples/react.stories.tsx#MitIcon"})}catch(e){}try{g.displayName="IconPosition",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"IconPosition",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/react.stories.tsx#IconPosition"]={docgenInfo:g.__docgenInfo,name:"IconPosition",path:"src/components/badge/1-examples/react.stories.tsx#IconPosition"})}catch(e){}try{u.displayName="Schriftschnitt",u.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Schriftschnitt",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/react.stories.tsx#Schriftschnitt"]={docgenInfo:u.__docgenInfo,name:"Schriftschnitt",path:"src/components/badge/1-examples/react.stories.tsx#Schriftschnitt"})}catch(e){}try{m.displayName="AlsLabel",m.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"AlsLabel",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/react.stories.tsx#AlsLabel"]={docgenInfo:m.__docgenInfo,name:"AlsLabel",path:"src/components/badge/1-examples/react.stories.tsx#AlsLabel"})}catch(e){}try{_.displayName="Bright",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Bright",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/react.stories.tsx#Bright"]={docgenInfo:_.__docgenInfo,name:"Bright",path:"src/components/badge/1-examples/react.stories.tsx#Bright"})}catch(e){}try{p.displayName="Dark",p.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Dark",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/badge/1-examples/react.stories.tsx#Dark"]={docgenInfo:p.__docgenInfo,name:"Dark",path:"src/components/badge/1-examples/react.stories.tsx#Dark"})}catch(e){}},"./src/components/badge/1-examples/autogen.configuration.ts":(v,f,l)=>{l.d(f,{n:()=>b});var c=l("./node_modules/@storybook/addon-jest/dist/esm/index.js"),o=l("./node_modules/@public-ui/components/jest-test-results.json"),B=l("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js"),S=l("./src/components/icon-icofont/icofont.ts");const h=[""].concat(Object.getOwnPropertyNames(S.I)),K={_color:{name:"Farbe",control:{type:"color"}},_icon:{name:"Icon",control:{type:"select"},options:h},_iconAlign:{name:"Icon-Ausrichtung",control:{type:"select"},options:["left","right"]},_iconOnly:{name:"Nur Icon",control:{type:"boolean",default:!1}},_label:{name:"Label-Text",control:{type:"text"},type:{required:!0}}},b={decorators:[(0,c.x)({results:o})],parameters:{badges:[B.NZ.STABLE],jest:["badge.e2e.ts","badge.spec.ts","badge.spec.tsx"],status:{type:"bitv"}},argTypes:K}}}]);
