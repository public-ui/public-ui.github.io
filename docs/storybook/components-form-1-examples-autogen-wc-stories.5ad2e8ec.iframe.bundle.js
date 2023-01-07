"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6602],{"./src/components/form/1-examples/autogen.wc.stories.tsx":(s,r,t)=>{t.r(r),t.d(r,{Form:()=>a,default:()=>v});var e=t("./node_modules/react/index.js"),i=t("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js"),_=t("./node_modules/@public-ui/react/dist/index.mjs"),d=t("./src/components/form/1-examples/autogen.configuration.ts"),c=Object.defineProperty,h=Object.defineProperties,k=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(o,n,l)=>n in o?c(o,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[n]=l,u=(o,n)=>{for(var l in n||(n={}))x.call(n,l)&&m(o,l,n[l]);if(p)for(var l of p(n))b.call(n,l)&&m(o,l,n[l]);return o},g=(o,n)=>h(o,k(n)),E=null,y={Form:{startLoc:{col:20,line:32},endLoc:{col:1,line:131},startBody:{col:20,line:32},endBody:{col:1,line:131}}};const v=g(u({},d.E),{title:"Web Components/Form/Beispiele",component:_.m5}),f={},a=()=>e.createElement("kol-form",null,e.createElement("div",null,e.createElement("kol-accordion",{_heading:"Kontakdaten",_level:1},e.createElement("div",{slot:"content"},e.createElement("kol-input-radio",{_value:"Frau",_required:!0,_name:"ansprache",_id:"ansprache",_list:'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"},{"label":"Firma","value":"Firma"}]'},"Ansprache"),e.createElement("kol-input-text",{_required:!0,_name:"vorname",_id:"vorname",_placeholder:"Ihr Vorname",_type:"text"},"Vorname"),e.createElement("kol-input-text",{_required:!0,_name:"nachname",_id:"nachname",_placeholder:"Ihr Nachname",_type:"text"},"Nachname"),e.createElement("kol-input-text",{_required:!0,_name:"adresse",_id:"adresse",_placeholder:"Ihr Adresse",_type:"text"},"Adresse"),e.createElement("kol-input-text",{_required:!0,_name:"postleitzahl",_id:"postleitzahl",_placeholder:"Postleitzahl",_type:"text"},"Postleitzahl"),e.createElement("kol-input-text",{_required:!0,_name:"ort",_id:"ort",_placeholder:"Ihr Ort",_type:"text"},"Ort"),e.createElement("kol-input-text",{_required:!0,_name:"telefon",_id:"telefon",_placeholder:"Ihre Telefonnummer",_type:"text"},"Telefon"),e.createElement("kol-input-email",{_required:!0,_name:"email",_id:"email",_placeholder:"Ihr E-Mail-Adresse"},"E-Mail"))),e.createElement("kol-accordion",{_heading:"Zahlungsdaten",_level:2},e.createElement("div",{slot:"content"},e.createElement("kol-select",{_value:"Rechnung",_required:!0,_name:"zahlart",_id:"zahlart",_list:i.K.stringifyJson([{value:"Bar",label:"Bar"},{value:"Rechnung",label:"Rechnung"},{value:"Lastschrift",label:"Lastschrift"}])},"Zahlunsgmittel"),e.createElement("kol-details",{_summary:"Hinweis",_open:!0},"Bitte beachten Sie, das wir bargeldlose Zahlungsmittel bevorzugen."),e.createElement("kol-input-text",{_required:!0,_name:"inhaber",_id:"inhaber",_placeholder:"Kontoinhaber",_type:"text"},"Kontoinhaber"),e.createElement("kol-input-text",{_required:!0,_name:"iban",_id:"iban",_placeholder:"IBAN",_type:"text"},"IBAN"),e.createElement("kol-input-text",{_required:!0,_name:"bic",_id:"bic",_placeholder:"BIC",_type:"text"},"BIC"),e.createElement("kol-input-text",{_required:!0,_name:"bank",_id:"bank",_placeholder:"Name der Bank",_type:"text"},"Bank"))),e.createElement("kol-accordion",{_heading:"Kundenkonto",_level:2},e.createElement("div",{slot:"content"},e.createElement("kol-input-text",{_value:"",_required:!0,_name:"username",_id:"username",_placeholder:"Benutzername",_type:"text"},"Benutzername"),e.createElement("kol-indented-text",null,"Der Benutzername ist f\xFCr die Anmeldung erforderlich"),e.createElement("kol-input-text",{_required:!0,_name:"password",_id:"password",_placeholder:"Passwort",_type:"text"},"Passwort"),e.createElement("kol-indented-text",null,"W\xE4hlen Sie ein sicheres Passwort. Mindestl\xE4nge: 12 Zeichen, mit Gro\xDF- und Kleinschreibung, Zahlen und Sonderzeichen wie #!?_"))),e.createElement("kol-accordion",{_heading:"Zusammenfassung",_level:2},e.createElement("div",{slot:"content"},e.createElement("kol-input-checkbox",{_value:"",_required:!0,_name:"acceptds",_id:"acceptds",_type:"checkbox"},"Ich habe die ",e.createElement("kol-link",{_href:"#"},"Datenschutzerkl\xE4rung")," gelesen und zur Kenntnis genommen"),e.createElement("kol-input-checkbox",{_value:"",_required:!0,_name:"acceptag",_id:"acceptag",_type:"checkbox"},"Ich habe die ",e.createElement("kol-link",{_href:"#"},"Allgemeinen Gesch\xE4ftsbedingungen")," gelesen und zur Kenntnis genommen"),e.createElement("kol-input-checkbox",{_value:"",_name:"newsletter",_id:"newsletter","_as-switch":!0,_type:"checkbox"},"Ich m\xF6chte den Newsletter abonnieren"),e.createElement("kol-button",{_label:"Absenden",_icon:"icofont-envelope"})))));a.args=u({},f),a.storyName="Formular",a.parameters=u({storySource:{source:`() => (
	<kol-form>
		<div>
			<kol-accordion _heading="Kontakdaten" _level={1}>
				<div slot="content">
					<kol-input-radio
						_value="Frau"
						_required
						_name="ansprache"
						_id="ansprache"
						_list='[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"},{"label":"Firma","value":"Firma"}]'
					>
						Ansprache
					</kol-input-radio>
					<kol-input-text _required _name="vorname" _id="vorname" _placeholder="Ihr Vorname" _type="text">
						Vorname
					</kol-input-text>
					<kol-input-text _required _name="nachname" _id="nachname" _placeholder="Ihr Nachname" _type="text">
						Nachname
					</kol-input-text>
					<kol-input-text _required _name="adresse" _id="adresse" _placeholder="Ihr Adresse" _type="text">
						Adresse
					</kol-input-text>
					<kol-input-text _required _name="postleitzahl" _id="postleitzahl" _placeholder="Postleitzahl" _type="text">
						Postleitzahl
					</kol-input-text>
					<kol-input-text _required _name="ort" _id="ort" _placeholder="Ihr Ort" _type="text">
						Ort
					</kol-input-text>
					<kol-input-text _required _name="telefon" _id="telefon" _placeholder="Ihre Telefonnummer" _type="text">
						Telefon
					</kol-input-text>
					<kol-input-email _required _name="email" _id="email" _placeholder="Ihr E-Mail-Adresse">
						E-Mail
					</kol-input-email>
				</div>
			</kol-accordion>
			<kol-accordion _heading="Zahlungsdaten" _level={2}>
				<div slot="content">
					<kol-select
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
					</kol-select>
					<kol-details _summary="Hinweis" _open>
						Bitte beachten Sie, das wir bargeldlose Zahlungsmittel bevorzugen.
					</kol-details>
					<kol-input-text _required _name="inhaber" _id="inhaber" _placeholder="Kontoinhaber" _type="text">
						Kontoinhaber
					</kol-input-text>
					<kol-input-text _required _name="iban" _id="iban" _placeholder="IBAN" _type="text">
						IBAN
					</kol-input-text>
					<kol-input-text _required _name="bic" _id="bic" _placeholder="BIC" _type="text">
						BIC
					</kol-input-text>
					<kol-input-text _required _name="bank" _id="bank" _placeholder="Name der Bank" _type="text">
						Bank
					</kol-input-text>
				</div>
			</kol-accordion>
			<kol-accordion _heading="Kundenkonto" _level={2}>
				<div slot="content">
					<kol-input-text _value="" _required _name="username" _id="username" _placeholder="Benutzername" _type="text">
						Benutzername
					</kol-input-text>
					<kol-indented-text>Der Benutzername ist f\xFCr die Anmeldung erforderlich</kol-indented-text>
					<kol-input-text _required _name="password" _id="password" _placeholder="Passwort" _type="text">
						Passwort
					</kol-input-text>
					<kol-indented-text>
						W\xE4hlen Sie ein sicheres Passwort. Mindestl\xE4nge: 12 Zeichen, mit Gro\xDF- und Kleinschreibung, Zahlen und Sonderzeichen wie #!?_
					</kol-indented-text>
				</div>
			</kol-accordion>
			<kol-accordion _heading="Zusammenfassung" _level={2}>
				<div slot="content">
					<kol-input-checkbox _value="" _required _name="acceptds" _id="acceptds" _type="checkbox">
						Ich habe die <kol-link _href="#">Datenschutzerkl\xE4rung</kol-link> gelesen und zur Kenntnis genommen
					</kol-input-checkbox>
					<kol-input-checkbox _value="" _required _name="acceptag" _id="acceptag" _type="checkbox">
						Ich habe die <kol-link _href="#">Allgemeinen Gesch\xE4ftsbedingungen</kol-link> gelesen und zur Kenntnis genommen
					</kol-input-checkbox>
					<kol-input-checkbox _value="" _name="newsletter" _id="newsletter" _as-switch _type="checkbox">
						Ich m\xF6chte den Newsletter abonnieren
					</kol-input-checkbox>
					<kol-button _label="Absenden" _icon="icofont-envelope" />
				</div>
			</kol-accordion>
		</div>
	</kol-form>
)`}},a.parameters)},"./src/components/form/1-examples/arg-types.ts":(s,r,t)=>{t.d(r,{P:()=>e});const e={}},"./src/components/form/1-examples/autogen.configuration.ts":(s,r,t)=>{t.d(r,{E:()=>c});var e=t("./node_modules/@storybook/addon-jest/dist/esm/index.js"),i=t("./node_modules/@public-ui/components/jest-test-results.json"),_=t("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js"),d=t("./src/components/form/1-examples/arg-types.ts");const c={decorators:[(0,e.x)({results:i})],parameters:{badges:[_.NZ.STABLE],jest:["form.e2e.ts","form.spec.ts","form.spec.tsx"],status:{type:"bitv"}},argTypes:d.P}}}]);
