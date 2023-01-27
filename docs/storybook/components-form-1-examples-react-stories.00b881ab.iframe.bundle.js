"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7017],{"./src/components/form/1-examples/react.stories.tsx":(c,o,n)=>{n.r(o),n.d(o,{Form:()=>i,default:()=>g});var e=n("./node_modules/react/index.js"),_=n("./node_modules/@public-ui/components/dist/esm/prop.validators-ceeab1fe.js"),t=n("./node_modules/@public-ui/react/dist/index.mjs"),d=n("./src/components/form/1-examples/autogen.configuration.ts"),s=Object.defineProperty,h=Object.defineProperties,K=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,p=(a,r,l)=>r in a?s(a,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[r]=l,u=(a,r)=>{for(var l in r||(r={}))x.call(r,l)&&p(a,l,r[l]);if(m)for(var l of m(r))I.call(r,l)&&p(a,l,r[l]);return a},b=(a,r)=>h(a,K(r)),E=null,f={Form:{startLoc:{col:20,line:32},endLoc:{col:1,line:131},startBody:{col:20,line:32},endBody:{col:1,line:131}}};const g=b(u({},d.E),{title:"React/Form/Beispiele",component:t.m5}),v={},i=()=>e.createElement(t.m5,null,e.createElement("div",null,e.createElement(t.RZ,{_heading:"Kontakdaten",_level:1},e.createElement("div",{slot:"content"},e.createElement(t.sy,{_value:"Frau",_required:!0,_name:"ansprache",_id:"ansprache",_list:'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"},{"label":"Firma","value":"Firma"}]'},"Ansprache"),e.createElement(t.WD,{_required:!0,_name:"vorname",_id:"vorname",_placeholder:"Ihr Vorname",_type:"text"},"Vorname"),e.createElement(t.WD,{_required:!0,_name:"nachname",_id:"nachname",_placeholder:"Ihr Nachname",_type:"text"},"Nachname"),e.createElement(t.WD,{_required:!0,_name:"adresse",_id:"adresse",_placeholder:"Ihr Adresse",_type:"text"},"Adresse"),e.createElement(t.WD,{_required:!0,_name:"postleitzahl",_id:"postleitzahl",_placeholder:"Postleitzahl",_type:"text"},"Postleitzahl"),e.createElement(t.WD,{_required:!0,_name:"ort",_id:"ort",_placeholder:"Ihr Ort",_type:"text"},"Ort"),e.createElement(t.WD,{_required:!0,_name:"telefon",_id:"telefon",_placeholder:"Ihre Telefonnummer",_type:"text"},"Telefon"),e.createElement(t.Lj,{_required:!0,_name:"email",_id:"email",_placeholder:"Ihr E-Mail-Adresse"},"E-Mail"))),e.createElement(t.RZ,{_heading:"Zahlungsdaten",_level:2},e.createElement("div",{slot:"content"},e.createElement(t.r7,{_value:"Rechnung",_required:!0,_name:"zahlart",_id:"zahlart",_list:_.K.stringifyJson([{value:"Bar",label:"Bar"},{value:"Rechnung",label:"Rechnung"},{value:"Lastschrift",label:"Lastschrift"}])},"Zahlunsgmittel"),e.createElement(t.ox,{_summary:"Hinweis",_open:!0},"Bitte beachten Sie, das wir bargeldlose Zahlungsmittel bevorzugen."),e.createElement(t.WD,{_required:!0,_name:"inhaber",_id:"inhaber",_placeholder:"Kontoinhaber",_type:"text"},"Kontoinhaber"),e.createElement(t.WD,{_required:!0,_name:"iban",_id:"iban",_placeholder:"IBAN",_type:"text"},"IBAN"),e.createElement(t.WD,{_required:!0,_name:"bic",_id:"bic",_placeholder:"BIC",_type:"text"},"BIC"),e.createElement(t.WD,{_required:!0,_name:"bank",_id:"bank",_placeholder:"Name der Bank",_type:"text"},"Bank"))),e.createElement(t.RZ,{_heading:"Kundenkonto",_level:2},e.createElement("div",{slot:"content"},e.createElement(t.WD,{_value:"",_required:!0,_name:"username",_id:"username",_placeholder:"Benutzername",_type:"text"},"Benutzername"),e.createElement(t.CV,null,"Der Benutzername ist f\xFCr die Anmeldung erforderlich"),e.createElement(t.WD,{_required:!0,_name:"password",_id:"password",_placeholder:"Passwort",_type:"text"},"Passwort"),e.createElement(t.CV,null,"W\xE4hlen Sie ein sicheres Passwort. Mindestl\xE4nge: 12 Zeichen, mit Gro\xDF- und Kleinschreibung, Zahlen und Sonderzeichen wie #!?_"))),e.createElement(t.RZ,{_heading:"Zusammenfassung",_level:2},e.createElement("div",{slot:"content"},e.createElement(t.TE,{_value:"",_required:!0,_name:"acceptds",_id:"acceptds",_type:"checkbox"},"Ich habe die ",e.createElement(t.Nv,{_href:"#"},"Datenschutzerkl\xE4rung")," gelesen und zur Kenntnis genommen"),e.createElement(t.TE,{_value:"",_required:!0,_name:"acceptag",_id:"acceptag",_type:"checkbox"},"Ich habe die ",e.createElement(t.Nv,{_href:"#"},"Allgemeinen Gesch\xE4ftsbedingungen")," gelesen und zur Kenntnis genommen"),e.createElement(t.TE,{_value:"",_name:"newsletter",_id:"newsletter","_as-switch":!0,_type:"checkbox"},"Ich m\xF6chte den Newsletter abonnieren"),e.createElement(t.ic,{_label:"Absenden",_icon:"icofont-envelope"})))));i.args=u({},v),i.storyName="Formular",i.parameters=u({storySource:{source:`() => (
	<KolForm>
		<div>
			<KolAccordion _heading="Kontakdaten" _level={1}>
				<div slot="content">
					<KolInputRadio
						_value="Frau"
						_required
						_name="ansprache"
						_id="ansprache"
						_list='[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"},{"label":"Firma","value":"Firma"}]'
					>
						Ansprache
					</KolInputRadio>
					<KolInputText _required _name="vorname" _id="vorname" _placeholder="Ihr Vorname" _type="text">
						Vorname
					</KolInputText>
					<KolInputText _required _name="nachname" _id="nachname" _placeholder="Ihr Nachname" _type="text">
						Nachname
					</KolInputText>
					<KolInputText _required _name="adresse" _id="adresse" _placeholder="Ihr Adresse" _type="text">
						Adresse
					</KolInputText>
					<KolInputText _required _name="postleitzahl" _id="postleitzahl" _placeholder="Postleitzahl" _type="text">
						Postleitzahl
					</KolInputText>
					<KolInputText _required _name="ort" _id="ort" _placeholder="Ihr Ort" _type="text">
						Ort
					</KolInputText>
					<KolInputText _required _name="telefon" _id="telefon" _placeholder="Ihre Telefonnummer" _type="text">
						Telefon
					</KolInputText>
					<KolInputEmail _required _name="email" _id="email" _placeholder="Ihr E-Mail-Adresse">
						E-Mail
					</KolInputEmail>
				</div>
			</KolAccordion>
			<KolAccordion _heading="Zahlungsdaten" _level={2}>
				<div slot="content">
					<KolSelect
						_value="Rechnung"
						_required
						_name="zahlart"
						_id="zahlart"
						_list={KoliBriDevHelper.stringifyJson([
							{ value: 'Bar', label: 'Bar' },
							{ value: 'Rechnung', label: 'Rechnung' },
							{ value: 'Lastschrift', label: 'Lastschrift' },
						])}
					>
						Zahlunsgmittel
					</KolSelect>
					<KolDetails _summary="Hinweis" _open>
						Bitte beachten Sie, das wir bargeldlose Zahlungsmittel bevorzugen.
					</KolDetails>
					<KolInputText _required _name="inhaber" _id="inhaber" _placeholder="Kontoinhaber" _type="text">
						Kontoinhaber
					</KolInputText>
					<KolInputText _required _name="iban" _id="iban" _placeholder="IBAN" _type="text">
						IBAN
					</KolInputText>
					<KolInputText _required _name="bic" _id="bic" _placeholder="BIC" _type="text">
						BIC
					</KolInputText>
					<KolInputText _required _name="bank" _id="bank" _placeholder="Name der Bank" _type="text">
						Bank
					</KolInputText>
				</div>
			</KolAccordion>
			<KolAccordion _heading="Kundenkonto" _level={2}>
				<div slot="content">
					<KolInputText _value="" _required _name="username" _id="username" _placeholder="Benutzername" _type="text">
						Benutzername
					</KolInputText>
					<KolIndentedText>Der Benutzername ist f\xFCr die Anmeldung erforderlich</KolIndentedText>
					<KolInputText _required _name="password" _id="password" _placeholder="Passwort" _type="text">
						Passwort
					</KolInputText>
					<KolIndentedText>
						W\xE4hlen Sie ein sicheres Passwort. Mindestl\xE4nge: 12 Zeichen, mit Gro\xDF- und Kleinschreibung, Zahlen und Sonderzeichen wie #!?_
					</KolIndentedText>
				</div>
			</KolAccordion>
			<KolAccordion _heading="Zusammenfassung" _level={2}>
				<div slot="content">
					<KolInputCheckbox _value="" _required _name="acceptds" _id="acceptds" _type="checkbox">
						Ich habe die <KolLink _href="#">Datenschutzerkl\xE4rung</KolLink> gelesen und zur Kenntnis genommen
					</KolInputCheckbox>
					<KolInputCheckbox _value="" _required _name="acceptag" _id="acceptag" _type="checkbox">
						Ich habe die <KolLink _href="#">Allgemeinen Gesch\xE4ftsbedingungen</KolLink> gelesen und zur Kenntnis genommen
					</KolInputCheckbox>
					<KolInputCheckbox _value="" _name="newsletter" _id="newsletter" _as-switch _type="checkbox">
						Ich m\xF6chte den Newsletter abonnieren
					</KolInputCheckbox>
					<KolButton _label="Absenden" _icon="icofont-envelope" />
				</div>
			</KolAccordion>
		</div>
	</KolForm>
)`}},i.parameters)},"./src/components/form/1-examples/arg-types.ts":(c,o,n)=>{n.d(o,{P:()=>e});const e={}},"./src/components/form/1-examples/autogen.configuration.ts":(c,o,n)=>{n.d(o,{E:()=>s});var e=n("./node_modules/@storybook/addon-jest/dist/esm/index.js"),_=n("./node_modules/@public-ui/components/jest-test-results.json"),t=n("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js"),d=n("./src/components/form/1-examples/arg-types.ts");const s={decorators:[(0,e.x)({results:_})],parameters:{badges:[t.NZ.STABLE],jest:["form.e2e.ts","form.spec.ts","form.spec.tsx"],status:{type:"bitv"}},argTypes:d.P}}}]);
