"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9813],{"./src/components/input-text/1-examples/react.stories.tsx":(D,f,l)=>{l.r(f),l.d(f,{Disabled:()=>h,Error:()=>p,Formularbeispiel:()=>T,IconLeftRight:()=>x,Phone:()=>u,Search:()=>d,Standard:()=>_,Url:()=>m,default:()=>U});var e=l("./node_modules/react/index.js"),g=l("./node_modules/@public-ui/react/dist/index.mjs"),s=l("./src/components/bik-bitv-test.tsx"),v=l("./src/constants/names.ts"),b=l("./src/components/input-text/1-examples/autogen.configuration.ts"),K=Object.defineProperty,E=Object.defineProperties,S=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,I=(n,r,a)=>r in n?K(n,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[r]=a,t=(n,r)=>{for(var a in r||(r={}))P.call(r,a)&&I(n,a,r[a]);if(y)for(var a of y(r))L.call(r,a)&&I(n,a,r[a]);return n},i=(n,r)=>E(n,S(r)),O=null,A={Standard:{startLoc:{col:24,line:27},endLoc:{col:1,line:31},startBody:{col:24,line:27},endBody:{col:1,line:31}},Search:{startLoc:{col:22,line:36},endLoc:{col:1,line:49},startBody:{col:22,line:36},endBody:{col:1,line:49}},Url:{startLoc:{col:19,line:55},endLoc:{col:1,line:59},startBody:{col:19,line:55},endBody:{col:1,line:59}},Phone:{startLoc:{col:21,line:65},endLoc:{col:1,line:71},startBody:{col:21,line:65},endBody:{col:1,line:71}},Error:{startLoc:{col:21,line:77},endLoc:{col:1,line:83},startBody:{col:21,line:77},endBody:{col:1,line:83}},IconLeftRight:{startLoc:{col:29,line:89},endLoc:{col:1,line:103},startBody:{col:29,line:89},endBody:{col:1,line:103}},Disabled:{startLoc:{col:24,line:109},endLoc:{col:1,line:119},startBody:{col:24,line:109},endBody:{col:1,line:119}},Formularbeispiel:{startLoc:{col:32,line:125},endLoc:{col:1,line:169},startBody:{col:32,line:125},endBody:{col:1,line:169}}};const U=i(t({},b.A),{title:"React/InputText/Beispiele",component:g.WD}),o=n=>e.createElement(g.WD,t({},n),n.children),c={},_=n=>e.createElement("div",null,e.createElement(o,t({},n),n.label));_.args=t({},c);const d=()=>e.createElement("div",null,e.createElement(o,{_id:"mein_text",_name:"mein_text",_hideLabel:!0,_icon:"icofont-{'left': {'icon':'icofont-arrow-up'}}",_type:"search",_placeholder:"Geben Sie einen Suchbegriff ein"},"Suchbegriff"));d.args=t({},c),d.storyName="Suchfeld";const m=()=>e.createElement("div",null,e.createElement(o,{_id:"mein_text",_name:"mein_text",_type:"url",_placeholder:"Geben Sie eine URL ein"}));m.args=t({},c),m.storyName="URL-Feld";const u=()=>e.createElement("div",null,e.createElement(o,{_id:"mein_text",_name:"mein_text",_type:"tel",_placeholder:"Geben Sie eine Telefonnummer ein"},"URL"));u.args=t({},c),u.storyName="Telefonnummer";const p=()=>e.createElement("div",null,e.createElement(o,{_id:"mein_text",_name:"mein_text",_type:"text",_error:"Fehlermeldung",_touched:!0},"Telefonnummer"));p.args=t({},c),p.storyName="Fehlermeldung";const x=()=>e.createElement("div",null,e.createElement(o,{_id:"meine_range",_name:"meine_range",_icon:"icofont-{'left':{'icon':'icofont-arrow-left'}}"},"Icon links"),e.createElement("div",{className:"mt-2"}),e.createElement(o,{_id:"meine_range",_name:"meine_range",_icon:"icofont-{'right':{'icon':'icofont-arrow-right'}}"},"Icon rechts"),e.createElement("div",{className:"mt-2"}),e.createElement(o,{_id:"meine_range",_name:"meine_range",_hideLabel:!0,_icon:"icofont-{'right':{'icon':'icofont-arrow-right'}}"},"Icon rechts, label ausgeblendet"));x.args=t({},c),x.storyName="Icon links / rechts / ohne Label";const h=()=>e.createElement("div",null,e.createElement(o,{_id:"meine_range",_name:"meine_range"},"Vorname"),e.createElement("div",{className:"mt-2"}),e.createElement(o,{_id:"meine_range",_name:"meine_range",_disabled:!0},"Vorname (disabled)"));h.args=t({},c),h.storyName="Aktiv / Nicht aktiv";const T=()=>{const[n,r]=(0,e.useState)(!1);return e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(o,i(t({_list:v.H,_type:"text"},s.kM),{_touched:n}),"Vorname (Auto-Vervollst\xE4ndigung)"),e.createElement(o,i(t({_type:"search"},s.kM),{_touched:n}),"Suchbegriff"),e.createElement(o,i(t({_type:"url"},s.kM),{_touched:n}),"Url"),e.createElement(o,i(t({_type:"tel"},s.kM),{_touched:n}),"Telefonnummer"),e.createElement(o,i(t({_readOnly:!0,_type:"text"},s.kM),{_touched:n}),"Vorname (Read only)"),e.createElement(o,i(t({_disabled:!0,_type:"text"},s.kM),{_touched:n}),"Vorname (Disabled)"),e.createElement("div",{style:{display:"flex",gap:"0.25em"}},e.createElement(g.ic,{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{r(!0)}}}),e.createElement(g.ic,{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{r(!1)}}})))};_.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<KolInputText {...args}>{args.label}</KolInputText>
	</div>
)`}},_.parameters),d.parameters=t({storySource:{source:`() => (
	<div>
		<KolInputText
			_id="mein_text"
			_name="mein_text"
			_hideLabel
			_icon="icofont-{'left': {'icon':'icofont-arrow-up'}}"
			_type="search"
			_placeholder="Geben Sie einen Suchbegriff ein"
		>
			Suchbegriff
		</KolInputText>
	</div>
)`}},d.parameters),m.parameters=t({storySource:{source:`() => (
	<div>
		<KolInputText _id="mein_text" _name="mein_text" _type="url" _placeholder="Geben Sie eine URL ein"></KolInputText>
	</div>
)`}},m.parameters),u.parameters=t({storySource:{source:`() => (
	<div>
		<KolInputText _id="mein_text" _name="mein_text" _type="tel" _placeholder="Geben Sie eine Telefonnummer ein">
			URL
		</KolInputText>
	</div>
)`}},u.parameters),p.parameters=t({storySource:{source:`() => (
	<div>
		<KolInputText _id="mein_text" _name="mein_text" _type="text" _error="Fehlermeldung" _touched>
			Telefonnummer
		</KolInputText>
	</div>
)`}},p.parameters),x.parameters=t({storySource:{source:`() => (
	<div>
		<KolInputText _id="meine_range" _name="meine_range" _icon="icofont-{'left':{'icon':'icofont-arrow-left'}}">
			Icon links
		</KolInputText>
		<div className="mt-2"></div>
		<KolInputText _id="meine_range" _name="meine_range" _icon="icofont-{'right':{'icon':'icofont-arrow-right'}}">
			Icon rechts
		</KolInputText>
		<div className="mt-2"></div>
		<KolInputText _id="meine_range" _name="meine_range" _hideLabel _icon="icofont-{'right':{'icon':'icofont-arrow-right'}}">
			Icon rechts, label ausgeblendet
		</KolInputText>
	</div>
)`}},x.parameters),h.parameters=t({storySource:{source:`() => (
	<div>
		<KolInputText _id="meine_range" _name="meine_range">
			Vorname
		</KolInputText>
		<div className="mt-2"></div>
		<KolInputText _id="meine_range" _name="meine_range" _disabled>
			Vorname (disabled)
		</KolInputText>
	</div>
)`}},h.parameters),T.parameters=t({storySource:{source:`() => {
	const [touched, setTouched] = useState<boolean>(false);
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolInputText _list={NAMEN} _type="text" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Vorname (Auto-Vervollst\xE4ndigung)
			</KolInputText>
			<KolInputText _type="search" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Suchbegriff
			</KolInputText>
			<KolInputText _type="url" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Url
			</KolInputText>
			<KolInputText _type="tel" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Telefonnummer
			</KolInputText>
			<KolInputText _readOnly _type="text" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Vorname (Read only)
			</KolInputText>
			<KolInputText _disabled _type="text" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Vorname (Disabled)
			</KolInputText>
			<div style={{ display: 'flex', gap: '0.25em' }}>
				<KolButton
					_variant="primary"
					_label="Absenden"
					_on={{
						onClick: () => {
							setTouched(true);
						},
					}}
				></KolButton>
				<KolButton
					_variant="ghost"
					_label="Zur\xFCcksetzen"
					_on={{
						onClick: () => {
							setTouched(false);
						},
					}}
				></KolButton>
			</div>
		</div>
	);
}`}},T.parameters);try{_.displayName="Standard",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-text/1-examples/react.stories.tsx#Standard"]={docgenInfo:_.__docgenInfo,name:"Standard",path:"src/components/input-text/1-examples/react.stories.tsx#Standard"})}catch(n){}}}]);
