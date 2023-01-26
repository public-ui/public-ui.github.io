"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[5355],{"./src/components/link/1-examples/autogen.wc.stories.tsx":(x,u,o)=>{o.r(u),o.d(u,{Darstellungsvariante:()=>S,Display:()=>s,Image:()=>k,Open:()=>p,Standard:()=>g,Stealth:()=>m,Text:()=>a,Underline:()=>d,WithIcon:()=>c,default:()=>O});var h=o("./node_modules/@public-ui/react/dist/index.mjs"),e=o("./node_modules/react/index.js"),f=o("./src/components/link/1-examples/autogen.configuration.ts"),y=Object.defineProperty,b=Object.defineProperties,w=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,E=(n,i,r)=>i in n?y(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r,t=(n,i)=>{for(var r in i||(i={}))I.call(i,r)&&E(n,r,i[r]);if(_)for(var r of _(i))L.call(i,r)&&E(n,r,i[r]);return n},v=(n,i)=>b(n,w(i)),C=null,D={Standard:{startLoc:{col:24,line:24},endLoc:{col:1,line:28},startBody:{col:24,line:24},endBody:{col:1,line:28}},Text:{startLoc:{col:20,line:38},endLoc:{col:1,line:50},startBody:{col:20,line:38},endBody:{col:1,line:50}},Display:{startLoc:{col:23,line:61},endLoc:{col:1,line:78},startBody:{col:23,line:61},endBody:{col:1,line:78}},WithIcon:{startLoc:{col:24,line:89},endLoc:{col:1,line:110},startBody:{col:24,line:89},endBody:{col:1,line:110}},Underline:{startLoc:{col:25,line:121},endLoc:{col:1,line:131},startBody:{col:25,line:121},endBody:{col:1,line:131}},Open:{startLoc:{col:20,line:142},endLoc:{col:1,line:154},startBody:{col:20,line:142},endBody:{col:1,line:154}},Stealth:{startLoc:{col:23,line:165},endLoc:{col:1,line:177},startBody:{col:23,line:165},endBody:{col:1,line:177}},Image:{startLoc:{col:21,line:188},endLoc:{col:1,line:200},startBody:{col:21,line:188},endBody:{col:1,line:200}},Darstellungsvariante:{startLoc:{col:36,line:206},endLoc:{col:1,line:224},startBody:{col:36,line:206},endBody:{col:1,line:224}}};const O=v(t({},f.m),{title:"Web Components/Link/Beispiele",component:h.Nv}),A=n=>React.createElement(MyComponent,t({},n),n.children),l={},g=n=>e.createElement("div",null,e.createElement("kol-link",t({},n),n.content));g.args=t({},l);const a=n=>e.createElement("div",null,e.createElement("p",null,"In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enth\xE4lt.",e.createElement("br",null),e.createElement("kol-link",null,"Hier steht ein Link")," Er wird standardm\xE4\xDFig als",e.createElement("i",{style:{padding:"0px 5px"}},e.createElement("b",null,"inline-Element")),"ausgegeben."));a.args=t({},l),a.storyName="Flie\xDFtext";const s=n=>e.createElement("div",null,e.createElement("p",null,"In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird.",e.createElement("kol-link",{style:{display:"inline-block",margin:"0px 5px"}},"Ich bin ein Link als ",e.createElement("b",null,"inline-block-Element")),". Damit kann man mir per CSS-Styles eine Breite, eine H\xF6he und andere Eigenschaften zuweisen.",e.createElement("br",null),e.createElement("br",null),"Danach folgt ein Link, der als block-Element ausgegeben wird.",e.createElement("kol-link",{style:{display:"block"}},"Ich bin ein Link als ",e.createElement("b",null,"block-Element"),","),"daher gehe ich \xFCber die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch."));s.args=t({},l),s.storyName="Positionierung";const c=n=>e.createElement("div",null,e.createElement("p",null,e.createElement("kol-link",{_icon:"icofont-home"},"Ich bin ein Link mit Icon links"),e.createElement("br",null),e.createElement("kol-link",{_icon:"icofont-home","_icon-align":"right"},"Ich bin ein Link mit Icon rechts"),e.createElement("br",null),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",e.createElement("kol-link",{_icon:"icofont-home",style:{paddingLeft:"5px"}},"Ich bin ein Link mit Icon links"),". Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi"," ",e.createElement("kol-link",{_icon:"icofont-home","_icon-align":"right",style:{paddingRight:"5px"}},"Ich bin ein Link mit Icon rechts"),"facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus."));c.args=t({},l),c.storyName="Mit Icon";const d=n=>e.createElement("div",null,e.createElement("p",null,e.createElement("kol-link",{_icon:"icofont-home"},"Ich bin ein Link in Standardausgabe mit Unterstrich"),e.createElement("br",null),e.createElement("kol-link",{_icon:"icofont-home",_underline:!1},"Ich bin ein Link in Standardausgabe ohne Unterstrich")));d.args=t({},l),d.storyName="Unterstrichen";const p=n=>e.createElement("div",null,e.createElement("p",null,e.createElement("kol-link",{_icon:"icofont-home",_target:"_self",_href:"https://www.w3.org"},"Ich \xF6ffne meinen Link im gleichen Browsertab"),e.createElement("br",null),e.createElement("kol-link",{_icon:"icofont-home",_target:"blank",_href:"https://www.w3.org"},"Ich \xF6ffne meinen Link in einem neuen Browsertab")));p.args=t({},l),p.storyName="\xD6ffnungsverhalten";const m=n=>e.createElement("div",null,e.createElement("p",null,e.createElement("kol-link",{_icon:"icofont-home",_href:"https://www.w3.org"},"Ich bin ein ver\xF6ffentlichter und damit sichtbarer Link"),e.createElement("br",null),e.createElement("kol-link",{_icon:"icofont-home",_stealth:!0,_href:"https://www.w3.org"},"Ich bin ein versteckter Link, werde aber vom Screenreader trotzdem gelesen")));m.args=t({},l),m.storyName="Versteckt";const k=n=>e.createElement("div",null,e.createElement("p",null,e.createElement("kol-link",{_icon:"icofont-home",_href:"https://www.w3.org","_use-case":"text"},"Ich bin ein Link, der als Text gerendert wird"),e.createElement("br",null),e.createElement("kol-link",{_icon:"icofont-home",_href:"https://www.w3.org","_use-case":"image"},"Ich bin ein Link, der als Image gerendert wird.")));k.args=t({},l),k.storyName="Ausgabeart";const S=()=>e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-link",{_href:"https://de.wikipedia.org",_target:"wikipedia"},"Wikipedia"),e.createElement("kol-link",{_icon:"icofont-paper-plane",_href:"https://de.wikipedia.org",_target:"wikipedia"},"Wikipedia"),e.createElement("p",null,"E-Mail:",e.createElement("kol-link",{_href:"mailto: info@wikipedia.org",_target:"mail-client","_target-description":"Link wird im E-Mail-Programm ge\xF6ffnet."})),e.createElement("kol-link",{"_use-case":"image","_aria-label":"Icon als Link",_icon:"icofont-paper-plane","_icon-only":!0,_href:"https://de.wikipedia.org",_target:"wikipedia"},"Wikipedia"));g.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<kol-link {...args}>{args.content}</kol-link>
	</div>
)`}},g.parameters),a.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enth\xE4lt.
			<br />
			<kol-link>Hier steht ein Link</kol-link> Er wird standardm\xE4\xDFig als
			<i style={{ padding: '0px 5px' }}>
				<b>inline-Element</b>
			</i>
			ausgegeben.
		</p>
	</div>
)`}},a.parameters),s.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird.
			<kol-link style={{ display: 'inline-block', margin: '0px 5px' }}>
				Ich bin ein Link als <b>inline-block-Element</b>
			</kol-link>
			. Damit kann man mir per CSS-Styles eine Breite, eine H\xF6he und andere Eigenschaften zuweisen.
			<br />
			<br />
			Danach folgt ein Link, der als block-Element ausgegeben wird.
			<kol-link style={{ display: 'block' }}>
				Ich bin ein Link als <b>block-Element</b>,
			</kol-link>
			daher gehe ich \xFCber die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch.
		</p>
	</div>
)`}},s.parameters),c.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<kol-link _icon="icofont-home">Ich bin ein Link mit Icon links</kol-link>
			<br />
			<kol-link _icon="icofont-home" _icon-align="right">
				Ich bin ein Link mit Icon rechts
			</kol-link>
			<br />
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet
			ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
			<kol-link _icon="icofont-home" style={{ paddingLeft: '5px' }}>
				Ich bin ein Link mit Icon links
			</kol-link>
			. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi{' '}
			<kol-link _icon="icofont-home" _icon-align="right" style={{ paddingRight: '5px' }}>
				Ich bin ein Link mit Icon rechts
			</kol-link>
			facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
		</p>
	</div>
)`}},c.parameters),d.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<kol-link _icon="icofont-home">Ich bin ein Link in Standardausgabe mit Unterstrich</kol-link>
			<br />
			<kol-link _icon="icofont-home" _underline={false}>
				Ich bin ein Link in Standardausgabe ohne Unterstrich
			</kol-link>
		</p>
	</div>
)`}},d.parameters),p.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<kol-link _icon="icofont-home" _target="_self" _href="https://www.w3.org">
				Ich \xF6ffne meinen Link im gleichen Browsertab
			</kol-link>
			<br />
			<kol-link _icon="icofont-home" _target="blank" _href="https://www.w3.org">
				Ich \xF6ffne meinen Link in einem neuen Browsertab
			</kol-link>
		</p>
	</div>
)`}},p.parameters),m.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<kol-link _icon="icofont-home" _href="https://www.w3.org">
				Ich bin ein ver\xF6ffentlichter und damit sichtbarer Link
			</kol-link>
			<br />
			<kol-link _icon="icofont-home" _stealth _href="https://www.w3.org">
				Ich bin ein versteckter Link, werde aber vom Screenreader trotzdem gelesen
			</kol-link>
		</p>
	</div>
)`}},m.parameters),k.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<p>
			<kol-link _icon="icofont-home" _href="https://www.w3.org" _use-case="text">
				Ich bin ein Link, der als Text gerendert wird
			</kol-link>
			<br />
			<kol-link _icon="icofont-home" _href="https://www.w3.org" _use-case="image">
				Ich bin ein Link, der als Image gerendert wird.
			</kol-link>
		</p>
	</div>
)`}},k.parameters),S.parameters=t({storySource:{source:`() => {
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-link _href="https://de.wikipedia.org" _target="wikipedia">
				Wikipedia
			</kol-link>
			<kol-link _icon="icofont-paper-plane" _href="https://de.wikipedia.org" _target="wikipedia">
				Wikipedia
			</kol-link>
			<p>
				E-Mail:
				<kol-link _href="mailto: info@wikipedia.org" _target="mail-client" _target-description="Link wird im E-Mail-Programm ge\xF6ffnet."></kol-link>
			</p>
			<kol-link _use-case="image" _aria-label="Icon als Link" _icon="icofont-paper-plane" _icon-only _href="https://de.wikipedia.org" _target="wikipedia">
				Wikipedia
			</kol-link>
		</div>
	);
}`}},S.parameters);try{g.displayName="Standard",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:g.__docgenInfo,name:"Standard",path:"src/components/link/1-examples/autogen.wc.stories.tsx#Standard"})}catch(n){}try{a.displayName="Text",a.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Text",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/autogen.wc.stories.tsx#Text"]={docgenInfo:a.__docgenInfo,name:"Text",path:"src/components/link/1-examples/autogen.wc.stories.tsx#Text"})}catch(n){}try{s.displayName="Display",s.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Display",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/autogen.wc.stories.tsx#Display"]={docgenInfo:s.__docgenInfo,name:"Display",path:"src/components/link/1-examples/autogen.wc.stories.tsx#Display"})}catch(n){}try{c.displayName="WithIcon",c.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/autogen.wc.stories.tsx#WithIcon"]={docgenInfo:c.__docgenInfo,name:"WithIcon",path:"src/components/link/1-examples/autogen.wc.stories.tsx#WithIcon"})}catch(n){}try{d.displayName="Underline",d.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Underline",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/autogen.wc.stories.tsx#Underline"]={docgenInfo:d.__docgenInfo,name:"Underline",path:"src/components/link/1-examples/autogen.wc.stories.tsx#Underline"})}catch(n){}try{p.displayName="Open",p.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Open",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/autogen.wc.stories.tsx#Open"]={docgenInfo:p.__docgenInfo,name:"Open",path:"src/components/link/1-examples/autogen.wc.stories.tsx#Open"})}catch(n){}try{m.displayName="Stealth",m.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Stealth",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/autogen.wc.stories.tsx#Stealth"]={docgenInfo:m.__docgenInfo,name:"Stealth",path:"src/components/link/1-examples/autogen.wc.stories.tsx#Stealth"})}catch(n){}try{k.displayName="Image",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Image",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/link/1-examples/autogen.wc.stories.tsx#Image"]={docgenInfo:k.__docgenInfo,name:"Image",path:"src/components/link/1-examples/autogen.wc.stories.tsx#Image"})}catch(n){}},"./src/components/link/1-examples/autogen.configuration.ts":(x,u,o)=>{o.d(u,{m:()=>_});var h=o("./node_modules/@storybook/addon-jest/dist/esm/index.js"),e=o("./node_modules/@public-ui/components/jest-test-results.json"),f=o("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js"),y=o("./src/components/icon-icofont/icofont.ts");const b=[""].concat(Object.getOwnPropertyNames(y.I)),w={_href:{name:"Link",control:{type:"text"},defaultValue:"https://www.w3.org"},_icon:{name:"Icon",control:{type:"select"},options:b,defaultValue:"home"},_iconAlign:{name:"Icon-Ausrichtung",control:{type:"select"},options:["left","right"],defaultValue:"left"},_iconOnly:{name:"Nur Icon",control:{type:"boolean"},defaultValue:!1},_target:{name:"\xD6ffnungsverhalten",control:{type:"select"},options:["_self","_blank"],defaultValue:"_self"},_fill:{name:"Volle Breite",control:{type:"boolean"},defaultValue:!1},_stealth:{name:"Nur bei Focus sichtbar",control:{type:"boolean"},defaultValue:!1},_underline:{name:"Unterstrich anzeigen",control:{type:"boolean"},defaultValue:!0},_useCase:{name:"Verwendung als",control:{type:"select"},options:["text","image"],defaultValue:"text"},_selector:{name:"Sprungmarke Ziel",control:{type:"text"},defaultValue:""},content:{name:"Linktext",control:{type:"text"},defaultValue:"Dies ist ein Link"}},_={decorators:[(0,h.x)({results:e})],parameters:{badges:[f.NZ.STABLE],jest:["link.e2e.ts","link.spec.ts","link.spec.tsx"],status:{type:"bitv"}},argTypes:w}}}]);
