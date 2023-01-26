"use strict";var je=Object.defineProperty,De=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var oe=(m,l,s)=>l in m?je(m,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[l]=s,Q=(m,l)=>{for(var s in l||(l={}))ae.call(l,s)&&oe(m,s,l[s]);if(U)for(var s of U(l))se.call(l,s)&&oe(m,s,l[s]);return m},$=(m,l)=>De(m,ze(l));var re=(m,l)=>{var s={};for(var e in m)ae.call(m,e)&&l.indexOf(e)<0&&(s[e]=m[e]);if(m!=null&&U)for(var e of U(m))l.indexOf(e)<0&&se.call(m,e)&&(s[e]=m[e]);return s};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1380],{"./src/components/textarea/1-examples/react.stories.tsx":(m,l,s)=>{s.r(l),s.d(l,{AdjustHeight:()=>L,Disabled:()=>R,Formularbeispiel:()=>F,Placeholder:()=>k,Readonly:()=>T,ResizeBoth:()=>h,ResizeHorizontal:()=>f,ResizeNone:()=>S,ResizeVertical:()=>x,Rows1:()=>K,Rows10:()=>C,Standard:()=>E,default:()=>Y});var e=s("./node_modules/react/index.js"),g=s("./node_modules/@public-ui/react/dist/index.mjs"),b=s("./src/components/bik-bitv-test.tsx"),A=s("./src/components/textarea/1-examples/autogen.configuration.ts"),z=Object.defineProperty,V=Object.defineProperties,P=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(o,u,v)=>u in o?z(o,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[u]=v,r=(o,u)=>{for(var v in u||(u={}))B.call(u,v)&&w(o,v,u[v]);if(N)for(var v of N(u))j.call(u,v)&&w(o,v,u[v]);return o},t=(o,u)=>V(o,P(u)),J=null,X={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Placeholder:{startLoc:{col:27,line:40},endLoc:{col:1,line:44},startBody:{col:27,line:40},endBody:{col:1,line:44}},Rows1:{startLoc:{col:21,line:56},endLoc:{col:1,line:71},startBody:{col:21,line:56},endBody:{col:1,line:71}},Rows10:{startLoc:{col:22,line:83},endLoc:{col:1,line:98},startBody:{col:22,line:83},endBody:{col:1,line:98}},ResizeNone:{startLoc:{col:26,line:110},endLoc:{col:1,line:125},startBody:{col:26,line:110},endBody:{col:1,line:125}},ResizeVertical:{startLoc:{col:30,line:137},endLoc:{col:1,line:152},startBody:{col:30,line:137},endBody:{col:1,line:152}},ResizeHorizontal:{startLoc:{col:32,line:164},endLoc:{col:1,line:179},startBody:{col:32,line:164},endBody:{col:1,line:179}},ResizeBoth:{startLoc:{col:26,line:191},endLoc:{col:1,line:206},startBody:{col:26,line:191},endBody:{col:1,line:206}},AdjustHeight:{startLoc:{col:28,line:218},endLoc:{col:1,line:230},startBody:{col:28,line:218},endBody:{col:1,line:230}},Readonly:{startLoc:{col:24,line:242},endLoc:{col:1,line:256},startBody:{col:24,line:242},endBody:{col:1,line:256}},Disabled:{startLoc:{col:24,line:268},endLoc:{col:1,line:282},startBody:{col:24,line:268},endBody:{col:1,line:282}},Formularbeispiel:{startLoc:{col:32,line:289},endLoc:{col:1,line:324},startBody:{col:32,line:289},endBody:{col:1,line:324}}};const Y=t(r({},A.k),{title:"React/Textarea/Beispiele",component:g.Qs}),c=o=>e.createElement(g.Qs,r({},o),o.children),y={},E=o=>e.createElement("div",null,e.createElement(c,r({_rows:o._rows},o)));E.args=r({},y);const k=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_value:"",_placeholder:"Hier steht ein Platzhaltertext"}));k.args=r({},y),k.storyName="Platzhaltertext";const K=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_rows:1,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_readOnly:!0}));K.args=r({},y),K.storyName="H\xF6he: 1 Zeile";const C=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_rows:10,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_readOnly:!0}));C.args=r({},y),C.storyName="H\xF6he: 10 Zeilen";const S=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_rows:4,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_resize:"none"}));S.args=r({},y),S.storyName="Keine Gr\xF6\xDFen\xE4nderung";const x=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_rows:4,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_resize:"vertical"}));x.args=r({},y),x.storyName="Vertikale Gr\xF6\xDFen\xE4nderung";const f=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_rows:4,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_resize:"horizontal"}));f.args=r({},y),f.storyName="Horizontale Gr\xF6\xDFen\xE4nderung";const h=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_rows:4,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_resize:"both"}));h.args=r({},y),h.storyName="Beidseitige Gr\xF6\xDFen\xE4nderung";const L=()=>e.createElement("div",null,e.createElement(c,{_adjustHeight:!0,_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`}));L.args=r({},y),L.storyName="Automatische H\xF6henanpassung";const T=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_readOnly:!0}));T.args=r({},y),T.storyName="Read only";const R=o=>e.createElement("div",null,e.createElement(c,{_id:"",_name:"",_value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.`,_disabled:!0}));R.args=r({},y),R.storyName="Nicht aktiv";const F=()=>{const[o,u]=(0,e.useState)(!1);return e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(c,t(r({},b.kM),{_touched:o}),"Beispieltext"),e.createElement(c,t(r({_readOnly:!0},b.kM),{_touched:o}),"Beispieltext (Read only)"),e.createElement(c,t(r({_disabled:!0},b.kM),{_touched:o}),"Beispieltext (disabled)"),e.createElement("div",{style:{display:"flex",gap:"0.25em"}},e.createElement(g.ic,{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{u(!0)}}}),e.createElement(g.ic,{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{u(!1)}}})))};E.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea _rows={args._rows} {...args}></KolTextarea>
	</div>
)`}},E.parameters),k.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea _id="" _name="" _value="" _placeholder="Hier steht ein Platzhaltertext"></KolTextarea>
	</div>
)`}},k.parameters),K.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea
			_id=""
			_name=""
			_rows={1}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_readOnly={true}
		></KolTextarea>
	</div>
)`}},K.parameters),C.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea
			_id=""
			_name=""
			_rows={10}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_readOnly={true}
		></KolTextarea>
	</div>
)`}},C.parameters),S.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea
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
		></KolTextarea>
	</div>
)`}},S.parameters),x.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea
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
		></KolTextarea>
	</div>
)`}},x.parameters),f.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea
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
		></KolTextarea>
	</div>
)`}},f.parameters),h.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea
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
		></KolTextarea>
	</div>
)`}},h.parameters),L.parameters=r({storySource:{source:`() => (
	<div>
		<KolTextarea
			_adjustHeight={true}
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
		></KolTextarea>
	</div>
)`}},L.parameters),T.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea
			_id=""
			_name=""
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_readOnly={true}
		></KolTextarea>
	</div>
)`}},T.parameters),R.parameters=r({storySource:{source:`(args: any) => (
	<div>
		<KolTextarea
			_id=""
			_name=""
			_value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
			_disabled={true}
		></KolTextarea>
	</div>
)`}},R.parameters),F.parameters=r({storySource:{source:`() => {
	const [touched, setTouched] = useState<boolean>(false);
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<KolTextarea {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Beispieltext
			</KolTextarea>
			<KolTextarea _readOnly {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Beispieltext (Read only)
			</KolTextarea>
			<KolTextarea _disabled {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Beispieltext (disabled)
			</KolTextarea>
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
}`}},F.parameters);try{E.displayName="Standard",E.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#Standard"]={docgenInfo:E.__docgenInfo,name:"Standard",path:"src/components/textarea/1-examples/react.stories.tsx#Standard"})}catch(o){}try{k.displayName="Placeholder",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Placeholder",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#Placeholder"]={docgenInfo:k.__docgenInfo,name:"Placeholder",path:"src/components/textarea/1-examples/react.stories.tsx#Placeholder"})}catch(o){}try{K.displayName="Rows1",K.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Rows1",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#Rows1"]={docgenInfo:K.__docgenInfo,name:"Rows1",path:"src/components/textarea/1-examples/react.stories.tsx#Rows1"})}catch(o){}try{C.displayName="Rows10",C.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Rows10",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#Rows10"]={docgenInfo:C.__docgenInfo,name:"Rows10",path:"src/components/textarea/1-examples/react.stories.tsx#Rows10"})}catch(o){}try{S.displayName="ResizeNone",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ResizeNone",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#ResizeNone"]={docgenInfo:S.__docgenInfo,name:"ResizeNone",path:"src/components/textarea/1-examples/react.stories.tsx#ResizeNone"})}catch(o){}try{x.displayName="ResizeVertical",x.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ResizeVertical",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#ResizeVertical"]={docgenInfo:x.__docgenInfo,name:"ResizeVertical",path:"src/components/textarea/1-examples/react.stories.tsx#ResizeVertical"})}catch(o){}try{f.displayName="ResizeHorizontal",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ResizeHorizontal",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#ResizeHorizontal"]={docgenInfo:f.__docgenInfo,name:"ResizeHorizontal",path:"src/components/textarea/1-examples/react.stories.tsx#ResizeHorizontal"})}catch(o){}try{h.displayName="ResizeBoth",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"ResizeBoth",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#ResizeBoth"]={docgenInfo:h.__docgenInfo,name:"ResizeBoth",path:"src/components/textarea/1-examples/react.stories.tsx#ResizeBoth"})}catch(o){}try{L.displayName="AdjustHeight",L.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"AdjustHeight",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#AdjustHeight"]={docgenInfo:L.__docgenInfo,name:"AdjustHeight",path:"src/components/textarea/1-examples/react.stories.tsx#AdjustHeight"})}catch(o){}try{T.displayName="Readonly",T.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Readonly",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#Readonly"]={docgenInfo:T.__docgenInfo,name:"Readonly",path:"src/components/textarea/1-examples/react.stories.tsx#Readonly"})}catch(o){}try{R.displayName="Disabled",R.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/textarea/1-examples/react.stories.tsx#Disabled"]={docgenInfo:R.__docgenInfo,name:"Disabled",path:"src/components/textarea/1-examples/react.stories.tsx#Disabled"})}catch(o){}},"./src/components/bik-bitv-test.tsx":(m,l,s)=>{s.d(l,{BS:()=>z,_F:()=>j,kM:()=>P});var e=s("./node_modules/react/index.js"),g=s("./node_modules/@public-ui/react/dist/index.mjs"),b=s("./node_modules/@leanup/form/esm/index.js");const A=new b.I2;A.validators.add(b.Fj);const z={parameters:{layout:"centered"}};new b.gs("input",{mandatory:!0}).setValidationHandler(A);const P={_error:"Ich bin ein Fehler"};let N="";const B=localStorage.getItem("kol-theme");typeof B=="string"&&(N=B);class j extends e.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:N}}renderModal(){return e.createElement(g.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},e.createElement(g.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},e.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),e.createElement("div",{slot:"footer"},e.createElement(g.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return e.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},e.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},e.createElement(g.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(r,t)=>{Array.isArray(t)&&t.length>0&&typeof t[0]=="string"&&(localStorage.setItem("kol-theme",t[0]),this.setState(()=>({theme:t[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),e.createElement(g.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:r=>{this.setState(()=>({activeElement:r.target}))}}}),this.renderModal()),e.createElement(g.HA,null,this.props._heading),this.props.children)}}try{j.displayName="BikBitvTest",j.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:j.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(w){}},"./src/components/textarea/1-examples/autogen.configuration.ts":(m,l,s)=>{s.d(l,{k:()=>z});var e=s("./node_modules/@storybook/addon-jest/dist/esm/index.js"),g=s("./node_modules/@public-ui/components/jest-test-results.json"),b=s("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const A={_accessKey:{name:"Tastenkombination Input",control:{type:"text"},type:{required:!1},defaultValue:""},_autoFocus:{name:"Input fokussierbar?",control:{type:"boolean"},type:{required:!1},defaultValue:0},_disabled:{name:"Deaktiviert",control:{type:"boolean"},type:{required:!1},defaultValue:0},_error:{name:"Fehlermeldung",control:{type:"text"},type:{required:!1},defaultValue:""},_id:{name:"ID",control:{type:"text"},type:{required:!0},defaultValue:""},_maxLength:{name:"L\xE4nge Inhalt",control:{type:"number"},type:{required:!1},defaultValue:255},_name:{name:"Name (technisch)",control:{type:"text"},type:{required:!0},defaultValue:""},_placeholder:{name:"Platzhaltertext",control:{type:"text"},type:{required:!1},defaultValue:""},_readOnly:{name:"Nur lesen",control:{type:"boolean"},type:{required:!1},defaultValue:!1},_resize:{name:"Gr\xF6\xDFen\xE4nderung",control:{type:"select"},options:["none","horizontal","vertical","both"],type:{required:!1},defaultValue:"none"},_rows:{name:"H\xF6he (Rows)",control:{type:"number"},type:{required:!1},defaultValue:1},_tabIndex:{name:"Tab-Index",control:{type:"text"},type:{required:!1},defaultValue:0},_touched:{name:"Besucht",control:{type:"boolean"},type:{required:!1},defaultValue:0},_value:{name:"Wert",control:{type:"text"},type:{required:!1},defaultValue:""}},z={decorators:[(0,e.x)({results:g})],parameters:{badges:[b.NZ.STABLE],jest:["textarea.e2e.ts","textarea.spec.ts","textarea.spec.tsx"],status:{type:"bitv"}},argTypes:A}},"./node_modules/@public-ui/react/dist/index.mjs":(m,l,s)=>{s.d(l,{$o:()=>ye,CO:()=>Ke,CV:()=>F,CX:()=>le,Er:()=>c,Gc:()=>S,HA:()=>h,Jl:()=>L,K5:()=>Y,Lj:()=>ie,MA:()=>ke,Np:()=>v,Nv:()=>_e,O:()=>ne,P:()=>he,Q4:()=>Se,QK:()=>ve,Qs:()=>Ee,RZ:()=>X,T5:()=>J,TE:()=>u,TQ:()=>ce,UD:()=>Ae,Ud:()=>be,Vp:()=>Re,Vs:()=>ge,WD:()=>pe,WR:()=>xe,Ze:()=>Ce,c2:()=>de,cJ:()=>T,ic:()=>E,is:()=>Te,lo:()=>y,m5:()=>f,ox:()=>x,qq:()=>Le,r7:()=>fe,rW:()=>R,sy:()=>ue,u_:()=>Oe,uz:()=>k,z5:()=>me});var e=s("./node_modules/react/index.js"),g=s("./node_modules/react-dom/index.js");const b=n=>n.toLowerCase().split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(""),A=n=>n.replace(/([A-Z])/g,a=>`-${a[0].toLowerCase()}`),z=(n,a,d={})=>{if(n instanceof Element){const p=V(n.classList,a,d);p!==""&&(n.className=p),Object.keys(a).forEach(i=>{if(!(i==="children"||i==="style"||i==="ref"||i==="class"||i==="className"||i==="forwardedRef"))if(i.indexOf("on")===0&&i[2]===i[2].toUpperCase()){const O=i.substring(2),_=O[0].toLowerCase()+O.substring(1);P(_)||N(n,_,a[i])}else n[i]=a[i],typeof a[i]==="string"&&n.setAttribute(A(i),a[i])})}},V=(n,a,d)=>{const p=a.className||a.class,i=d.className||d.class,O=B(n),_=B(p?p.split(" "):[]),H=B(i?i.split(" "):[]),q=[];return O.forEach(D=>{_.has(D)?(q.push(D),_.delete(D)):H.has(D)||q.push(D)}),_.forEach(D=>q.push(D)),q.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const P=n=>{if(typeof document=="undefined")return!0;{const a="on"+n;let d=a in document;if(!d){const p=document.createElement("div");p.setAttribute(a,"return;"),d=typeof p[a]=="function"}return d}},N=(n,a,d)=>{const p=n.__events||(n.__events={}),i=p[a];i&&n.removeEventListener(a,i),n.addEventListener(a,p[a]=function(_){d&&d.call(this,_)})},B=n=>{const a=new Map;return n.forEach(d=>a.set(d,d)),a},j=(n,a)=>{typeof n=="function"?n(a):n!=null&&(n.current=a)},w=(...n)=>a=>{n.forEach(d=>{j(d,a)})},r=(n,a)=>{const d=(p,i)=>e.createElement(n,$(Q({},p),{forwardedRef:i}));return d.displayName=a,e.forwardRef(d)},t=(n,a,d,p)=>{p!==void 0&&p();const i=b(n),O=class extends e.Component{constructor(_){super(_),this.setComponentElRef=H=>{this.componentEl=H}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(_){z(this.componentEl,this.props,_)}render(){const te=this.props,{children:_,forwardedRef:H,style:q,className:D,ref:Pe}=te,ee=re(te,["children","forwardedRef","style","className","ref"]);let W=Object.keys(ee).reduce((G,I)=>{const Z=ee[I];if(I.indexOf("on")===0&&I[2]===I[2].toUpperCase()){const M=I.substring(2).toLowerCase();typeof document!="undefined"&&P(M)&&(G[I]=Z)}else{const M=typeof Z;(M==="string"||M==="boolean"||M==="number")&&(G[A(I)]=Z)}return G},{});d&&(W=d(this.props,W));const Be=$(Q({},W),{ref:w(H,this.setComponentElRef),style:q});return(0,e.createElement)(n,Be,_)}static get displayName(){return i}};return a&&(O.contextType=a),r(O,i)},J=t("kol-abbr"),X=t("kol-accordion"),Y=t("kol-alert"),c=t("kol-badge"),y=t("kol-breadcrumb"),E=t("kol-button"),k=t("kol-button-group"),K=null,C=null,S=t("kol-card"),x=t("kol-details"),f=t("kol-form"),h=t("kol-heading"),L=t("kol-icon"),T=t("kol-icon-font-awesome"),R=t("kol-icon-icofont"),F=t("kol-indented-text"),o=null,u=t("kol-input-checkbox"),v=t("kol-input-color"),ne=t("kol-input-date"),ie=t("kol-input-email"),le=t("kol-input-file"),de=t("kol-input-number"),me=t("kol-input-password"),ue=t("kol-input-radio"),ce=t("kol-input-range"),pe=t("kol-input-text"),ge=t("kol-kolibri"),_e=t("kol-link"),Ne=null,ye=t("kol-link-group"),ve=t("kol-logo"),be=t("kol-modal"),ke=t("kol-nav"),Se=t("kol-pagination"),xe=t("kol-progress"),fe=t("kol-select"),he=t("kol-skip-nav"),Ie=null,Le=t("kol-spin"),Te=t("kol-symbol"),Re=t("kol-table"),Ae=t("kol-tabs"),Ee=t("kol-textarea"),Ke=t("kol-toast"),Ce=t("kol-tooltip"),Oe=t("kol-version")}}]);
