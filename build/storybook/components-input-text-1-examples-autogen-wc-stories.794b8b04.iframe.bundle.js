"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4260],{"./src/components/input-text/1-examples/autogen.wc.stories.tsx":(I,g,i)=>{i.r(g),i.d(g,{Disabled:()=>x,Error:()=>m,Formularbeispiel:()=>h,IconLeftRight:()=>p,Phone:()=>u,Search:()=>s,Standard:()=>c,Url:()=>d,default:()=>U});var e=i("./node_modules/react/index.js"),y=i("./node_modules/@public-ui/react/dist/index.mjs"),_=i("./src/components/bik-bitv-test.tsx"),b=i("./src/constants/names.ts"),v=i("./src/components/input-text/1-examples/autogen.configuration.ts"),E=Object.defineProperty,S=Object.defineProperties,P=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,k=(n,o,r)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,t=(n,o)=>{for(var r in o||(o={}))T.call(o,r)&&k(n,r,o[r]);if(f)for(var r of f(o))L.call(o,r)&&k(n,r,o[r]);return n},l=(n,o)=>S(n,P(o)),O=null,A={Standard:{startLoc:{col:24,line:27},endLoc:{col:1,line:31},startBody:{col:24,line:27},endBody:{col:1,line:31}},Search:{startLoc:{col:22,line:36},endLoc:{col:1,line:49},startBody:{col:22,line:36},endBody:{col:1,line:49}},Url:{startLoc:{col:19,line:55},endLoc:{col:1,line:59},startBody:{col:19,line:55},endBody:{col:1,line:59}},Phone:{startLoc:{col:21,line:65},endLoc:{col:1,line:71},startBody:{col:21,line:65},endBody:{col:1,line:71}},Error:{startLoc:{col:21,line:77},endLoc:{col:1,line:83},startBody:{col:21,line:77},endBody:{col:1,line:83}},IconLeftRight:{startLoc:{col:29,line:89},endLoc:{col:1,line:103},startBody:{col:29,line:89},endBody:{col:1,line:103}},Disabled:{startLoc:{col:24,line:109},endLoc:{col:1,line:119},startBody:{col:24,line:109},endBody:{col:1,line:119}},Formularbeispiel:{startLoc:{col:32,line:125},endLoc:{col:1,line:169},startBody:{col:32,line:125},endBody:{col:1,line:169}}};const U=l(t({},v.A),{title:"Web Components/InputText/Beispiele",component:y.WD}),D=n=>React.createElement(MyComponent,t({},n),n.children),a={},c=n=>e.createElement("div",null,e.createElement("kol-input-text",t({},n),n.label));c.args=t({},a);const s=()=>e.createElement("div",null,e.createElement("kol-input-text",{_id:"mein_text",_name:"mein_text",_hideLabel:!0,_icon:"icofont-{'left': {'icon':'icofont-arrow-up'}}",_type:"search",_placeholder:"Geben Sie einen Suchbegriff ein"},"Suchbegriff"));s.args=t({},a),s.storyName="Suchfeld";const d=()=>e.createElement("div",null,e.createElement("kol-input-text",{_id:"mein_text",_name:"mein_text",_type:"url",_placeholder:"Geben Sie eine URL ein"}));d.args=t({},a),d.storyName="URL-Feld";const u=()=>e.createElement("div",null,e.createElement("kol-input-text",{_id:"mein_text",_name:"mein_text",_type:"tel",_placeholder:"Geben Sie eine Telefonnummer ein"},"URL"));u.args=t({},a),u.storyName="Telefonnummer";const m=()=>e.createElement("div",null,e.createElement("kol-input-text",{_id:"mein_text",_name:"mein_text",_type:"text",_error:"Fehlermeldung",_touched:!0},"Telefonnummer"));m.args=t({},a),m.storyName="Fehlermeldung";const p=()=>e.createElement("div",null,e.createElement("kol-input-text",{_id:"meine_range",_name:"meine_range",_icon:"icofont-{'left':{'icon':'icofont-arrow-left'}}"},"Icon links"),e.createElement("div",{className:"mt-2"}),e.createElement("kol-input-text",{_id:"meine_range",_name:"meine_range",_icon:"icofont-{'right':{'icon':'icofont-arrow-right'}}"},"Icon rechts"),e.createElement("div",{className:"mt-2"}),e.createElement("kol-input-text",{_id:"meine_range",_name:"meine_range",_hideLabel:!0,_icon:"icofont-{'right':{'icon':'icofont-arrow-right'}}"},"Icon rechts, label ausgeblendet"));p.args=t({},a),p.storyName="Icon links / rechts / ohne Label";const x=()=>e.createElement("div",null,e.createElement("kol-input-text",{_id:"meine_range",_name:"meine_range"},"Vorname"),e.createElement("div",{className:"mt-2"}),e.createElement("kol-input-text",{_id:"meine_range",_name:"meine_range",_disabled:!0},"Vorname (disabled)"));x.args=t({},a),x.storyName="Aktiv / Nicht aktiv";const h=()=>{const[n,o]=(0,e.useState)(!1);return e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-input-text",l(t({_list:b.H,_type:"text"},_.kM),{_touched:n}),"Vorname (Auto-Vervollst\xE4ndigung)"),e.createElement("kol-input-text",l(t({_type:"search"},_.kM),{_touched:n}),"Suchbegriff"),e.createElement("kol-input-text",l(t({_type:"url"},_.kM),{_touched:n}),"Url"),e.createElement("kol-input-text",l(t({_type:"tel"},_.kM),{_touched:n}),"Telefonnummer"),e.createElement("kol-input-text",l(t({_readOnly:!0,_type:"text"},_.kM),{_touched:n}),"Vorname (Read only)"),e.createElement("kol-input-text",l(t({_disabled:!0,_type:"text"},_.kM),{_touched:n}),"Vorname (Disabled)"),e.createElement("div",{style:{display:"flex",gap:"0.25em"}},e.createElement("kol-button",{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{o(!0)}}}),e.createElement("kol-button",{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{o(!1)}}})))};c.parameters=t({storySource:{source:`(args: any) => (
	<div>
		<kol-input-text {...args}>{args.label}</kol-input-text>
	</div>
)`}},c.parameters),s.parameters=t({storySource:{source:`() => (
	<div>
		<kol-input-text
			_id="mein_text"
			_name="mein_text"
			_hideLabel
			_icon="icofont-{'left': {'icon':'icofont-arrow-up'}}"
			_type="search"
			_placeholder="Geben Sie einen Suchbegriff ein"
		>
			Suchbegriff
		</kol-input-text>
	</div>
)`}},s.parameters),d.parameters=t({storySource:{source:`() => (
	<div>
		<kol-input-text _id="mein_text" _name="mein_text" _type="url" _placeholder="Geben Sie eine URL ein"></kol-input-text>
	</div>
)`}},d.parameters),u.parameters=t({storySource:{source:`() => (
	<div>
		<kol-input-text _id="mein_text" _name="mein_text" _type="tel" _placeholder="Geben Sie eine Telefonnummer ein">
			URL
		</kol-input-text>
	</div>
)`}},u.parameters),m.parameters=t({storySource:{source:`() => (
	<div>
		<kol-input-text _id="mein_text" _name="mein_text" _type="text" _error="Fehlermeldung" _touched>
			Telefonnummer
		</kol-input-text>
	</div>
)`}},m.parameters),p.parameters=t({storySource:{source:`() => (
	<div>
		<kol-input-text _id="meine_range" _name="meine_range" _icon="icofont-{'left':{'icon':'icofont-arrow-left'}}">
			Icon links
		</kol-input-text>
		<div className="mt-2"></div>
		<kol-input-text _id="meine_range" _name="meine_range" _icon="icofont-{'right':{'icon':'icofont-arrow-right'}}">
			Icon rechts
		</kol-input-text>
		<div className="mt-2"></div>
		<kol-input-text _id="meine_range" _name="meine_range" _hideLabel _icon="icofont-{'right':{'icon':'icofont-arrow-right'}}">
			Icon rechts, label ausgeblendet
		</kol-input-text>
	</div>
)`}},p.parameters),x.parameters=t({storySource:{source:`() => (
	<div>
		<kol-input-text _id="meine_range" _name="meine_range">
			Vorname
		</kol-input-text>
		<div className="mt-2"></div>
		<kol-input-text _id="meine_range" _name="meine_range" _disabled>
			Vorname (disabled)
		</kol-input-text>
	</div>
)`}},x.parameters),h.parameters=t({storySource:{source:`() => {
	const [touched, setTouched] = useState<boolean>(false);
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-input-text _list={NAMEN} _type="text" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Vorname (Auto-Vervollst\xE4ndigung)
			</kol-input-text>
			<kol-input-text _type="search" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Suchbegriff
			</kol-input-text>
			<kol-input-text _type="url" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Url
			</kol-input-text>
			<kol-input-text _type="tel" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Telefonnummer
			</kol-input-text>
			<kol-input-text _readOnly _type="text" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Vorname (Read only)
			</kol-input-text>
			<kol-input-text _disabled _type="text" {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Vorname (Disabled)
			</kol-input-text>
			<div style={{ display: 'flex', gap: '0.25em' }}>
				<kol-button
					_variant="primary"
					_label="Absenden"
					_on={{
						onClick: () => {
							setTouched(true);
						},
					}}
				></kol-button>
				<kol-button
					_variant="ghost"
					_label="Zur\xFCcksetzen"
					_on={{
						onClick: () => {
							setTouched(false);
						},
					}}
				></kol-button>
			</div>
		</div>
	);
}`}},h.parameters);try{c.displayName="Standard",c.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-text/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:c.__docgenInfo,name:"Standard",path:"src/components/input-text/1-examples/autogen.wc.stories.tsx#Standard"})}catch(n){}}}]);
