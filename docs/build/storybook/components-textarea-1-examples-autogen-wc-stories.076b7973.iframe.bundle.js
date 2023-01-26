"use strict";var we=Object.defineProperty,De=Object.defineProperties;var Ke=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var oe=(m,l,s)=>l in m?we(m,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[l]=s,Z=(m,l)=>{for(var s in l||(l={}))ae.call(l,s)&&oe(m,s,l[s]);if(V)for(var s of V(l))se.call(l,s)&&oe(m,s,l[s]);return m},Q=(m,l)=>De(m,Ke(l));var re=(m,l)=>{var s={};for(var e in m)ae.call(m,e)&&l.indexOf(e)<0&&(s[e]=m[e]);if(m!=null&&V)for(var e of V(m))l.indexOf(e)<0&&se.call(m,e)&&(s[e]=m[e]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9068],{"./src/components/textarea/1-examples/autogen.wc.stories.tsx":(m,l,s)=>{s.r(l),s.d(l,{AdjustHeight:()=>f,Disabled:()=>R,Formularbeispiel:()=>q,Placeholder:()=>v,Readonly:()=>L,ResizeBoth:()=>h,ResizeHorizontal:()=>S,ResizeNone:()=>b,ResizeVertical:()=>x,Rows1:()=>C,Rows10:()=>O,Standard:()=>E,default:()=>U});var e=s("./node_modules/react/index.js"),y=s("./node_modules/@public-ui/react/dist/index.mjs"),k=s("./src/components/bik-bitv-test.tsx"),A=s("./src/components/textarea/1-examples/autogen.configuration.ts"),D=Object.defineProperty,H=Object.defineProperties,N=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,I=(o,u,_)=>u in o?D(o,u,{enumerable:!0,configurable:!0,writable:!0,value:_}):o[u]=_,r=(o,u)=>{for(var _ in u||(u={}))B.call(u,_)&&I(o,_,u[_]);if(K)for(var _ of K(u))j.call(u,_)&&I(o,_,u[_]);return o},t=(o,u)=>H(o,N(u)),$=null,J={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Placeholder:{startLoc:{col:27,line:40},endLoc:{col:1,line:44},startBody:{col:27,line:40},endBody:{col:1,line:44}},Rows1:{startLoc:{col:21,line:56},endLoc:{col:1,line:71},startBody:{col:21,line:56},endBody:{col:1,line:71}},Rows10:{startLoc:{col:22,line:83},endLoc:{col:1,line:98},startBody:{col:22,line:83},endBody:{col:1,line:98}},ResizeNone:{startLoc:{col:26,line:110},endLoc:{col:1,line:125},startBody:{col:26,line:110},endBody:{col:1,line:125}},ResizeVertical:{startLoc:{col:30,line:137},endLoc:{col:1,line:152},startBody:{col:30,line:137},endBody:{col:1,line:152}},ResizeHorizontal:{startLoc:{col:32,line:164},endLoc:{col:1,line:179},startBody:{col:32,line:164},endBody:{col:1,line:179}},ResizeBoth:{startLoc:{col:26,line:191},endLoc:{col:1,line:206},startBody:{col:26,line:191},endBody:{col:1,line:206}},AdjustHeight:{startLoc:{col:28,line:218},endLoc:{col:1,line:230},startBody:{col:28,line:218},endBody:{col:1,line:230}},Readonly:{startLoc:{col:24,line:242},endLoc:{col:1,line:256},startBody:{col:24,line:242},endBody:{col:1,line:256}},Disabled:{startLoc:{col:24,line:268},endLoc:{col:1,line:282},startBody:{col:24,line:268},endBody:{col:1,line:282}},Formularbeispiel:{startLoc:{col:32,line:289},endLoc:{col:1,line:324},startBody:{col:32,line:289},endBody:{col:1,line:324}}};const U=t(r({},A.k),{title:"Web Components/Textarea/Beispiele",component:y.Qs}),X=o=>React.createElement(MyComponent,r({},o),o.children),g={},E=o=>e.createElement("div",null,e.createElement("kol-textarea",r({_rows:o._rows},o)));E.args=r({},g);const v=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_value:"",_placeholder:"Hier steht ein Platzhaltertext"}));v.args=r({},g),v.storyName="Platzhaltertext";const C=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_rows:1,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,"_read-only":!0}));C.args=r({},g),C.storyName="H\xF6he: 1 Zeile";const O=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_rows:10,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,"_read-only":!0}));O.args=r({},g),O.storyName="H\xF6he: 10 Zeilen";const b=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_rows:4,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_resize:"none"}));b.args=r({},g),b.storyName="Keine Gr\xF6\xDFen\xE4nderung";const x=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_rows:4,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_resize:"vertical"}));x.args=r({},g),x.storyName="Vertikale Gr\xF6\xDFen\xE4nderung";const S=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_rows:4,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_resize:"horizontal"}));S.args=r({},g),S.storyName="Horizontale Gr\xF6\xDFen\xE4nderung";const h=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_rows:4,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_resize:"both"}));h.args=r({},g),h.storyName="Beidseitige Gr\xF6\xDFen\xE4nderung";const f=()=>e.createElement("div",null,e.createElement("kol-textarea",{"_adjust-height":!0,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`}));f.args=r({},g),f.storyName="Automatische H\xF6henanpassung";const L=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,"_read-only":!0}));L.args=r({},g),L.storyName="Read only";const R=o=>e.createElement("div",null,e.createElement("kol-textarea",{_id:"",_name:"",_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_disabled:!0}));R.args=r({},g),R.storyName="Nicht aktiv";const q=()=>{const[o,u]=(0,e.useState)(!1);return e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-textarea",t(r({},k.kM),{_touched:o}),"Beispieltext"),e.createElement("kol-textarea",t(r({_readOnly:!0},k.kM),{_touched:o}),"Beispieltext (Read only)"),e.createElement("kol-textarea",t(r({_disabled:!0},k.kM),{_touched:o}),"Beispieltext (disabled)"),e.createElement("div",{style:{display:"flex",gap:"0.25em"}},e.createElement("kol-button",{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{u(!0)}}}),e.createElement("kol-button",{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{u(!1)}}})))};E.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea _rows={args._rows} {...args}></kol-textarea>
	</div>
)`}},E.parameters),v.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea _id="" _name="" _value="" _placeholder="Hier steht ein Platzhaltertext"></kol-textarea>
	</div>
)`}},v.parameters),C.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea
			_id=""
			_name=""
			_rows={1}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_read-only={true}
		></kol-textarea>
	</div>
)`}},C.parameters),O.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea
			_id=""
			_name=""
			_rows={10}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_read-only={true}
		></kol-textarea>
	</div>
)`}},O.parameters),b.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea
			_id=""
			_name=""
			_rows={4}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_resize="none"
		></kol-textarea>
	</div>
)`}},b.parameters),x.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea
			_id=""
			_name=""
			_rows={4}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_resize="vertical"
		></kol-textarea>
	</div>
)`}},x.parameters),S.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea
			_id=""
			_name=""
			_rows={4}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_resize="horizontal"
		></kol-textarea>
	</div>
)`}},S.parameters),h.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea
			_id=""
			_name=""
			_rows={4}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_resize="both"
		></kol-textarea>
	</div>
)`}},h.parameters),f.parameters=r({storySource:{source:`() => (
	<div>
		<kol-textarea
			_adjust-height={true}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
		></kol-textarea>
	</div>
)`}},f.parameters),L.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea
			_id=""
			_name=""
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_read-only={true}
		></kol-textarea>
	</div>
)`}},L.parameters),R.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<kol-textarea
			_id=""
			_name=""
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_disabled={true}
		></kol-textarea>
	</div>
)`}},R.parameters),q.parameters=r({storySource:{source:`() => {
	const [touched, setTouched] = useState<boolean>(false);
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-textarea {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Beispieltext
			</kol-textarea>
			<kol-textarea _readOnly {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Beispieltext (Read only)
			</kol-textarea>
			<kol-textarea _disabled {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Beispieltext (disabled)
			</kol-textarea>
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
}`}},q.parameters);try{E.displayName="Standard",E.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:E.__docgenInfo,name:"Standard",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#Standard"})}catch(o){}try{v.displayName="Placeholder",v.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Placeholder",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#Placeholder"]={docgenInfo:v.__docgenInfo,name:"Placeholder",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#Placeholder"})}catch(o){}try{C.displayName="Rows1",C.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Rows1",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#Rows1"]={docgenInfo:C.__docgenInfo,name:"Rows1",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#Rows1"})}catch(o){}try{O.displayName="Rows10",O.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Rows10",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#Rows10"]={docgenInfo:O.__docgenInfo,name:"Rows10",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#Rows10"})}catch(o){}try{b.displayName="ResizeNone",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ResizeNone",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#ResizeNone"]={docgenInfo:b.__docgenInfo,name:"ResizeNone",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#ResizeNone"})}catch(o){}try{x.displayName="ResizeVertical",x.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ResizeVertical",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#ResizeVertical"]={docgenInfo:x.__docgenInfo,name:"ResizeVertical",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#ResizeVertical"})}catch(o){}try{S.displayName="ResizeHorizontal",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ResizeHorizontal",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#ResizeHorizontal"]={docgenInfo:S.__docgenInfo,name:"ResizeHorizontal",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#ResizeHorizontal"})}catch(o){}try{h.displayName="ResizeBoth",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ResizeBoth",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#ResizeBoth"]={docgenInfo:h.__docgenInfo,name:"ResizeBoth",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#ResizeBoth"})}catch(o){}try{f.displayName="AdjustHeight",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"AdjustHeight",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#AdjustHeight"]={docgenInfo:f.__docgenInfo,name:"AdjustHeight",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#AdjustHeight"})}catch(o){}try{L.displayName="Readonly",L.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Readonly",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#Readonly"]={docgenInfo:L.__docgenInfo,name:"Readonly",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#Readonly"})}catch(o){}try{R.displayName="Disabled",R.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/autogen.wc.stories.tsx#Disabled"]={docgenInfo:R.__docgenInfo,name:"Disabled",path:"src/components/textarea/1-examples/autogen.wc.stories.tsx#Disabled"})}catch(o){}},"./src/components/bik-bitv-test.tsx":(m,l,s)=>{s.d(l,{BS:()=>D,_F:()=>j,kM:()=>N});var e=s("./node_modules/react/index.js"),y=s("./node_modules/@public-ui/react/dist/index.mjs"),k=s("./node_modules/@leanup/form/esm/index.js");const A=new k.I2;A.validators.add(k.Fj);const D={parameters:{layout:"centered"}};new k.gs("input",{mandatory:!0}).setValidationHandler(A);const N={_error:"Ich bin ein Fehler"};let K="";const B=localStorage.getItem("kol-theme");typeof B=="string"&&(K=B);class j extends e.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:K}}renderModal(){return e.createElement(y.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},e.createElement(y.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},e.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),e.createElement("div",{slot:"footer"},e.createElement(y.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return e.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},e.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},e.createElement(y.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(r,t)=>{Array.isArray(t)&&t.length>0&&typeof t[0]=="string"&&(localStorage.setItem("kol-theme",t[0]),this.setState(()=>({theme:t[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),e.createElement(y.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:r=>{this.setState(()=>({activeElement:r.target}))}}}),this.renderModal()),e.createElement(y.HA,null,this.props._heading),this.props.children)}}try{j.displayName="BikBitvTest",j.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:j.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(I){}},"./src/components/textarea/1-examples/autogen.configuration.ts":(m,l,s)=>{s.d(l,{k:()=>D});var e=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),y=s("./node_modules/@public-ui/components/jest-test-results.json"),k=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const A={_accessKey:{name:"Tastenkombination Input",control:{type:"text"},type:{required:!1},defaultValue:""},_autoFocus:{name:"Input fokussierbar?",control:{type:"boolean"},type:{required:!1},defaultValue:0},_disabled:{name:"Deaktiviert",control:{type:"boolean"},type:{required:!1},defaultValue:0},_error:{name:"Fehlermeldung",control:{type:"text"},type:{required:!1},defaultValue:""},_id:{name:"ID",control:{type:"text"},type:{required:!0},defaultValue:""},_maxLength:{name:"L\xE4nge Inhalt",control:{type:"number"},type:{required:!1},defaultValue:255},_name:{name:"Name (technisch)",control:{type:"text"},type:{required:!0},defaultValue:""},_placeholder:{name:"Platzhaltertext",control:{type:"text"},type:{required:!1},defaultValue:""},_readOnly:{name:"Nur lesen",control:{type:"boolean"},type:{required:!1},defaultValue:!1},_resize:{name:"Gr\xF6\xDFen\xE4nderung",control:{type:"select"},options:["none","horizontal","vertical","both"],type:{required:!1},defaultValue:"none"},_rows:{name:"H\xF6he (Rows)",control:{type:"number"},type:{required:!1},defaultValue:1},_tabIndex:{name:"Tab-Index",control:{type:"text"},type:{required:!1},defaultValue:0},_touched:{name:"Besucht",control:{type:"boolean"},type:{required:!1},defaultValue:0},_value:{name:"Wert",control:{type:"text"},type:{required:!1},defaultValue:""}},D={decorators:[(0,e.x)({results:y})],parameters:{badges:[k.NZ.STABLE],jest:["textarea.e2e.ts","textarea.spec.ts","textarea.spec.tsx"],status:{type:"bitv"}},argTypes:A}},"./node_modules/@public-ui/react/dist/index.mjs":(m,l,s)=>{s.d(l,{$o:()=>ye,CO:()=>Oe,CV:()=>q,CX:()=>le,Er:()=>X,Gc:()=>b,HA:()=>h,Jl:()=>f,K5:()=>U,Lj:()=>ie,MA:()=>be,Np:()=>_,Nv:()=>_e,O:()=>ne,P:()=>fe,Q4:()=>xe,QK:()=>ke,Qs:()=>Ce,RZ:()=>J,T5:()=>$,TE:()=>u,TQ:()=>ce,UD:()=>Ee,Ud:()=>ve,Vp:()=>Ae,Vs:()=>ge,WD:()=>pe,WR:()=>Se,Ze:()=>Te,c2:()=>de,cJ:()=>L,ic:()=>E,is:()=>Re,lo:()=>g,m5:()=>S,ox:()=>x,qq:()=>Le,r7:()=>he,rW:()=>R,sy:()=>ue,u_:()=>Be,uz:()=>v,z5:()=>me});var e=s("./node_modules/react/index.js"),y=s("./node_modules/react-dom/index.js");const k=n=>n.toLowerCase().split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(""),A=n=>n.replace(/([A-Z])/g,a=>`-${a[0].toLowerCase()}`),D=(n,a,d={})=>{if(n instanceof Element){const c=H(n.classList,a,d);c!==""&&(n.className=c),Object.keys(a).forEach(i=>{if(!(i==="children"||i==="style"||i==="ref"||i==="class"||i==="className"||i==="forwardedRef"))if(i.indexOf("on")===0&&i[2]===i[2].toUpperCase()){const T=i.substring(2),p=T[0].toLowerCase()+T.substring(1);N(p)||K(n,p,a[i])}else n[i]=a[i],typeof a[i]==="string"&&n.setAttribute(A(i),a[i])})}},H=(n,a,d)=>{const c=a.className||a.class,i=d.className||d.class,T=B(n),p=B(c?c.split(" "):[]),F=B(i?i.split(" "):[]),P=[];return T.forEach(w=>{p.has(w)?(P.push(w),p.delete(w)):F.has(w)||P.push(w)}),p.forEach(w=>P.push(w)),P.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const N=n=>{if(typeof document=="undefined")return!0;{const a="on"+n;let d=a in document;if(!d){const c=document.createElement("div");c.setAttribute(a,"return;"),d=typeof c[a]=="function"}return d}},K=(n,a,d)=>{const c=n.__events||(n.__events={}),i=c[a];i&&n.removeEventListener(a,i),n.addEventListener(a,c[a]=function(p){d&&d.call(this,p)})},B=n=>{const a=new Map;return n.forEach(d=>a.set(d,d)),a},j=(n,a)=>{typeof n=="function"?n(a):n!=null&&(n.current=a)},I=(...n)=>a=>{n.forEach(d=>{j(d,a)})},r=(n,a)=>{const d=(c,i)=>e.createElement(n,Q(Z({},c),{forwardedRef:i}));return d.displayName=a,e.forwardRef(d)},t=(n,a,d,c)=>{c!==void 0&&c();const i=k(n),T=class extends e.Component{constructor(p){super(p),this.setComponentElRef=F=>{this.componentEl=F}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(p){D(this.componentEl,this.props,p)}render(){const te=this.props,{children:p,forwardedRef:F,style:P,className:w,ref:Ie}=te,ee=re(te,["children","forwardedRef","style","className","ref"]);let Y=Object.keys(ee).reduce((W,z)=>{const G=ee[z];if(z.indexOf("on")===0&&z[2]===z[2].toUpperCase()){const M=z.substring(2).toLowerCase();typeof document!="undefined"&&N(M)&&(W[z]=G)}else{const M=typeof G;(M==="string"||M==="boolean"||M==="number")&&(W[A(z)]=G)}return W},{});d&&(Y=d(this.props,Y));const je=Q(Z({},Y),{ref:I(F,this.setComponentElRef),style:P});return(0,e.createElement)(n,je,p)}static get displayName(){return i}};return a&&(T.contextType=a),r(T,i)},$=t("kol-abbr"),J=t("kol-accordion"),U=t("kol-alert"),X=t("kol-badge"),g=t("kol-breadcrumb"),E=t("kol-button"),v=t("kol-button-group"),C=null,O=null,b=t("kol-card"),x=t("kol-details"),S=t("kol-form"),h=t("kol-heading"),f=t("kol-icon"),L=t("kol-icon-font-awesome"),R=t("kol-icon-icofont"),q=t("kol-indented-text"),o=null,u=t("kol-input-checkbox"),_=t("kol-input-color"),ne=t("kol-input-date"),ie=t("kol-input-email"),le=t("kol-input-file"),de=t("kol-input-number"),me=t("kol-input-password"),ue=t("kol-input-radio"),ce=t("kol-input-range"),pe=t("kol-input-text"),ge=t("kol-kolibri"),_e=t("kol-link"),ze=null,ye=t("kol-link-group"),ke=t("kol-logo"),ve=t("kol-modal"),be=t("kol-nav"),xe=t("kol-pagination"),Se=t("kol-progress"),he=t("kol-select"),fe=t("kol-skip-nav"),Ne=null,Le=t("kol-spin"),Re=t("kol-symbol"),Ae=t("kol-table"),Ee=t("kol-tabs"),Ce=t("kol-textarea"),Oe=t("kol-toast"),Te=t("kol-tooltip"),Be=t("kol-version")}}]);
