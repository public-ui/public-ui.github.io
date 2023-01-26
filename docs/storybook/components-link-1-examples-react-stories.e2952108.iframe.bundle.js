"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6808],{"./src/components/link/1-examples/react.stories.tsx":(x,_,r)=>{r.r(_),r.d(_,{Darstellungsvariante:()=>w,Display:()=>c,Image:()=>k,Open:()=>m,Standard:()=>u,Stealth:()=>g,Text:()=>l,Underline:()=>p,WithIcon:()=>d,default:()=>O});var h=r("./node_modules/@public-ui/react/dist/index.mjs"),e=r("./node_modules/react/index.js"),y=r("./src/components/link/1-examples/autogen.configuration.ts"),b=Object.defineProperty,L=Object.defineProperties,S=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,E=(n,o,a)=>o in n?b(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,t=(n,o)=>{for(var a in o||(o={}))I.call(o,a)&&E(n,a,o[a]);if(f)for(var a of f(o))K.call(o,a)&&E(n,a,o[a]);return n},v=(n,o)=>L(n,S(o)),C=null,A={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Text:{startLoc:{col:20,line:38},endLoc:{col:1,line:50},startBody:{col:20,line:38},endBody:{col:1,line:50}},Display:{startLoc:{col:23,line:61},endLoc:{col:1,line:78},startBody:{col:23,line:61},endBody:{col:1,line:78}},WithIcon:{startLoc:{col:24,line:89},endLoc:{col:1,line:110},startBody:{col:24,line:89},endBody:{col:1,line:110}},Underline:{startLoc:{col:25,line:121},endLoc:{col:1,line:131},startBody:{col:25,line:121},endBody:{col:1,line:131}},Open:{startLoc:{col:20,line:142},endLoc:{col:1,line:154},startBody:{col:20,line:142},endBody:{col:1,line:154}},Stealth:{startLoc:{col:23,line:165},endLoc:{col:1,line:177},startBody:{col:23,line:165},endBody:{col:1,line:177}},Image:{startLoc:{col:21,line:188},endLoc:{col:1,line:200},startBody:{col:21,line:188},endBody:{col:1,line:200}},Darstellungsvariante:{startLoc:{col:36,line:206},endLoc:{col:1,line:224},startBody:{col:36,line:206},endBody:{col:1,line:224}}};const O=v(t({},y.m),{title:"React/Link/Beispiele",component:h.Nv}),i=n=>e.createElement(h.Nv,t({},n),n.children),s={},u=n=>e.createElement("div",null,e.createElement(i,t({},n),n.content));u.args=t({},s);const l=n=>e.createElement("div",null,e.createElement("p",null,"In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enth\xE4lt.",e.createElement("br",null),e.createElement(i,null,"Hier steht ein Link")," Er wird standardm\xE4\xDFig als",e.createElement("i",{style:{padding:"0px 5px"}},e.createElement("b",null,"inline-Element")),"ausgegeben."));l.args=t({},s),l.storyName="Flie\xDFtext";const c=n=>e.createElement("div",null,e.createElement("p",null,"In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird.",e.createElement(i,{style:{display:"inline-block",margin:"0px 5px"}},"Ich bin ein Link als ",e.createElement("b",null,"inline-block-Element")),". Damit kann man mir per CSS-Styles eine Breite, eine H\xF6he und andere Eigenschaften zuweisen.",e.createElement("br",null),e.createElement("br",null),"Danach folgt ein Link, der als block-Element ausgegeben wird.",e.createElement(i,{style:{display:"block"}},"Ich bin ein Link als ",e.createElement("b",null,"block-Element"),","),"daher gehe ich \xFCber die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch."));c.args=t({},s),c.storyName="Positionierung";const d=n=>e.createElement("div",null,e.createElement("p",null,e.createElement(i,{_icon:"icofont-home"},"Ich bin ein Link mit Icon links"),e.createElement("br",null),e.createElement(i,{_icon:"icofont-home",_iconAlign:"right"},"Ich bin ein Link mit Icon rechts"),e.createElement("br",null),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",e.createElement(i,{_icon:"icofont-home",style:{paddingLeft:"5px"}},"Ich bin ein Link mit Icon links"),". Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi"," ",e.createElement(i,{_icon:"icofont-home",_iconAlign:"right",style:{paddingRight:"5px"}},"Ich bin ein Link mit Icon rechts"),"facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus."));d.args=t({},s),d.storyName="Mit Icon";const p=n=>e.createElement("div",null,e.createElement("p",null,e.createElement(i,{_icon:"icofont-home"},"Ich bin ein Link in Standardausgabe mit Unterstrich"),e.createElement("br",null),e.createElement(i,{_icon:"icofont-home",_underline:!1},"Ich bin ein Link in Standardausgabe ohne Unterstrich")));p.args=t({},s),p.storyName="Unterstrichen";const m=n=>e.createElement("div",null,e.createElement("p",null,e.createElement(i,{_icon:"icofont-home",_target:"_self",_href:"https://www.w3.org"},"Ich \xF6ffne meinen Link im gleichen Browsertab"),e.createElement("br",null),e.createElement(i,{_icon:"icofont-home",_target:"blank",_href:"https://www.w3.org"},"Ich \xF6ffne meinen Link in einem neuen Browsertab")));m.args=t({},s),m.storyName="\xD6ffnungsverhalten";const g=n=>e.createElement("div",null,e.createElement("p",null,e.createElement(i,{_icon:"icofont-home",_href:"https://www.w3.org"},"Ich bin ein ver\xF6ffentlichter und damit sichtbarer Link"),e.createElement("br",null),e.createElement(i,{_icon:"icofont-home",_stealth:!0,_href:"https://www.w3.org"},"Ich bin ein versteckter Link, werde aber vom Screenreader trotzdem gelesen")));g.args=t({},s),g.storyName="Versteckt";const k=n=>e.createElement("div",null,e.createElement("p",null,e.createElement(i,{_icon:"icofont-home",_href:"https://www.w3.org",_useCase:"text"},"Ich bin ein Link, der als Text gerendert wird"),e.createElement("br",null),e.createElement(i,{_icon:"icofont-home",_href:"https://www.w3.org",_useCase:"image"},"Ich bin ein Link, der als Image gerendert wird.")));k.args=t({},s),k.storyName="Ausgabeart";const w=()=>e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(i,{_href:"https://de.wikipedia.org",_target:"wikipedia"},"Wikipedia"),e.createElement(i,{_icon:"icofont-paper-plane",_href:"https://de.wikipedia.org",_target:"wikipedia"},"Wikipedia"),e.createElement("p",null,"E-Mail:",e.createElement(i,{_href:"mailto: info@wikipedia.org",_target:"mail-client","_target-description":"Link wird im E-Mail-Programm ge\xF6ffnet."})),e.createElement(i,{"_use-case":"image","_aria-label":"Icon als Link",_icon:"icofont-paper-plane","_icon-only":!0,_href:"https://de.wikipedia.org",_target:"wikipedia"},"Wikipedia"));u.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<KolLink {...args}>{args.content}</KolLink>
	</div>
)`}},u.parameters),l.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enth\xE4lt.
			<br />
			<KolLink>Hier steht ein Link</KolLink> Er wird standardm\xE4\xDFig als
			<i style={{ padding: '0px 5px' }}>
				<b>inline-Element</b>
			</i>
			ausgegeben.
		</p>
	</div>
)`}},l.parameters),c.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird.
			<KolLink style={{ display: 'inline-block', margin: '0px 5px' }}>
				Ich bin ein Link als <b>inline-block-Element</b>
			</KolLink>
			. Damit kann man mir per CSS-Styles eine Breite, eine H\xF6he und andere Eigenschaften zuweisen.
			<br />
			<br />
			Danach folgt ein Link, der als block-Element ausgegeben wird.
			<KolLink style={{ display: 'block' }}>
				Ich bin ein Link als <b>block-Element</b>,
			</KolLink>
			daher gehe ich \xFCber die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch.
		</p>
	</div>
)`}},c.parameters),d.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<KolLink _icon="icofont-home">Ich bin ein Link mit Icon links</KolLink>
			<br />
			<KolLink _icon="icofont-home" _iconAlign="right">
				Ich bin ein Link mit Icon rechts
			</KolLink>
			<br />
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
			ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
			<KolLink _icon="icofont-home" style={{ paddingLeft: '5px' }}>
				Ich bin ein Link mit Icon links
			</KolLink>
			. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi{' '}
			<KolLink _icon="icofont-home" _iconAlign="right" style={{ paddingRight: '5px' }}>
				Ich bin ein Link mit Icon rechts
			</KolLink>
			facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
		</p>
	</div>
)`}},d.parameters),p.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<KolLink _icon="icofont-home">Ich bin ein Link in Standardausgabe mit Unterstrich</KolLink>
			<br />
			<KolLink _icon="icofont-home" _underline={false}>
				Ich bin ein Link in Standardausgabe ohne Unterstrich
			</KolLink>
		</p>
	</div>
)`}},p.parameters),m.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<KolLink _icon="icofont-home" _target="_self" _href="https://www.w3.org">
				Ich \xF6ffne meinen Link im gleichen Browsertab
			</KolLink>
			<br />
			<KolLink _icon="icofont-home" _target="blank" _href="https://www.w3.org">
				Ich \xF6ffne meinen Link in einem neuen Browsertab
			</KolLink>
		</p>
	</div>
)`}},m.parameters),g.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<KolLink _icon="icofont-home" _href="https://www.w3.org">
				Ich bin ein ver\xF6ffentlichter und damit sichtbarer Link
			</KolLink>
			<br />
			<KolLink _icon="icofont-home" _stealth _href="https://www.w3.org">
				Ich bin ein versteckter Link, werde aber vom Screenreader trotzdem gelesen
			</KolLink>
		</p>
	</div>
)`}},g.parameters),k.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<KolLink _icon="icofont-home" _href="https://www.w3.org" _useCase="text">
				Ich bin ein Link, der als Text gerendert wird
			</KolLink>
			<br />
			<KolLink _icon="icofont-home" _href="https://www.w3.org" _useCase="image">
				Ich bin ein Link, der als Image gerendert wird.
			</KolLink>
		</p>
	</div>
)`}},k.parameters),w.parameters=t({storySource:{source:`() => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolLink _href="https://de.wikipedia.org" _target="wikipedia">
				Wikipedia
			</KolLink>
			<KolLink _icon="icofont-paper-plane" _href="https://de.wikipedia.org" _target="wikipedia">
				Wikipedia
			</KolLink>
			<p>
				E-Mail:
				<KolLink _href="mailto: info@wikipedia.org" _target="mail-client" _target-description="Link wird im E-Mail-Programm ge\xF6ffnet."></KolLink>
			</p>
			<KolLink _use-case="image" _aria-label="Icon als Link" _icon="icofont-paper-plane" _icon-only _href="https://de.wikipedia.org" _target="wikipedia">
				Wikipedia
			</KolLink>
		</div>
	);
}`}},w.parameters);try{u.displayName="Standard",u.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/react.stories.tsx#Standard"]={docgenInfo:u.__docgenInfo,name:"Standard",path:"src/components/link/1-examples/react.stories.tsx#Standard"})}catch(n){}try{l.displayName="Text",l.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/react.stories.tsx#Text"]={docgenInfo:l.__docgenInfo,name:"Text",path:"src/components/link/1-examples/react.stories.tsx#Text"})}catch(n){}try{c.displayName="Display",c.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Display",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/react.stories.tsx#Display"]={docgenInfo:c.__docgenInfo,name:"Display",path:"src/components/link/1-examples/react.stories.tsx#Display"})}catch(n){}try{d.displayName="WithIcon",d.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/react.stories.tsx#WithIcon"]={docgenInfo:d.__docgenInfo,name:"WithIcon",path:"src/components/link/1-examples/react.stories.tsx#WithIcon"})}catch(n){}try{p.displayName="Underline",p.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Underline",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/react.stories.tsx#Underline"]={docgenInfo:p.__docgenInfo,name:"Underline",path:"src/components/link/1-examples/react.stories.tsx#Underline"})}catch(n){}try{m.displayName="Open",m.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Open",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/react.stories.tsx#Open"]={docgenInfo:m.__docgenInfo,name:"Open",path:"src/components/link/1-examples/react.stories.tsx#Open"})}catch(n){}try{g.displayName="Stealth",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Stealth",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/react.stories.tsx#Stealth"]={docgenInfo:g.__docgenInfo,name:"Stealth",path:"src/components/link/1-examples/react.stories.tsx#Stealth"})}catch(n){}try{k.displayName="Image",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Image",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/react.stories.tsx#Image"]={docgenInfo:k.__docgenInfo,name:"Image",path:"src/components/link/1-examples/react.stories.tsx#Image"})}catch(n){}},"./src/components/link/1-examples/autogen.configuration.ts":(x,_,r)=>{r.d(_,{m:()=>f});var h=r("./node_modules/@storybook/addon-jest/dist/esm/index.js"),e=r("./node_modules/@public-ui/components/jest-test-results.json"),y=r("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js"),b=r("./src/components/icon-icofont/icofont.ts");const L=[""].concat(Object.getOwnPropertyNames(b.I)),S={_href:{name:"Link",control:{type:"text"},defaultValue:"https://www.w3.org"},_icon:{name:"Icon",control:{type:"select"},options:L,defaultValue:"home"},_iconAlign:{name:"Icon-Ausrichtung",control:{type:"select"},options:["left","right"],defaultValue:"left"},_iconOnly:{name:"Nur Icon",control:{type:"boolean"},defaultValue:!1},_target:{name:"\xD6ffnungsverhalten",control:{type:"select"},options:["_self","_blank"],defaultValue:"_self"},_fill:{name:"Volle Breite",control:{type:"boolean"},defaultValue:!1},_stealth:{name:"Nur bei Focus sichtbar",control:{type:"boolean"},defaultValue:!1},_underline:{name:"Unterstrich anzeigen",control:{type:"boolean"},defaultValue:!0},_useCase:{name:"Verwendung als",control:{type:"select"},options:["text","image"],defaultValue:"text"},_selector:{name:"Sprungmarke Ziel",control:{type:"text"},defaultValue:""},content:{name:"Linktext",control:{type:"text"},defaultValue:"Dies ist ein Link"}},f={decorators:[(0,h.x)({results:e})],parameters:{badges:[y.NZ.STABLE],jest:["link.e2e.ts","link.spec.ts","link.spec.tsx"],status:{type:"bitv"}},argTypes:S}}}]);
