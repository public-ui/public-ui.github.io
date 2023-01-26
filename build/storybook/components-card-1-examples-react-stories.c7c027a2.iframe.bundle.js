"use strict";var Fe=Object.defineProperty,Oe=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var J=(c,l,i)=>l in c?Fe(c,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[l]=i,z=(c,l)=>{for(var i in l||(l={}))X.call(l,i)&&J(c,i,l[i]);if(N)for(var i of N(l))$.call(l,i)&&J(c,i,l[i]);return c},Y=(c,l)=>Oe(c,Ie(l));var ee=(c,l)=>{var i={};for(var e in c)X.call(c,e)&&l.indexOf(e)<0&&(i[e]=c[e]);if(c!=null&&N)for(var e of N(c))l.indexOf(e)<0&&$.call(c,e)&&(i[e]=c[e]);return i};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8427],{"./src/components/card/1-examples/react.stories.tsx":(c,l,i)=>{i.r(l),i.d(l,{Sizes:()=>v,Standard:()=>k,WithButton:()=>K,WithContent:()=>C,WithFooter:()=>x,WithHeader:()=>S,WithStyleChoose:()=>_,WithStyleContent:()=>b,default:()=>P});var e=i("./node_modules/react/index.js"),g=i("./node_modules/@public-ui/react/dist/index.mjs"),F=i("./src/components/card/1-examples/autogen.configuration.ts"),D=Object.defineProperty,O=Object.defineProperties,H=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,j=(o,p,y)=>p in o?D(o,p,{enumerable:!0,configurable:!0,writable:!0,value:y}):o[p]=y,n=(o,p)=>{for(var y in p||(p={}))M.call(p,y)&&j(o,y,p[y]);if(I)for(var y of I(p))W.call(p,y)&&j(o,y,p[y]);return o},B=(o,p)=>O(o,H(p)),t=null,U={Standard:{startLoc:{col:24,line:27},endLoc:{col:1,line:35},startBody:{col:24,line:27},endBody:{col:1,line:35}},Sizes:{startLoc:{col:21,line:45},endLoc:{col:1,line:54},startBody:{col:21,line:45},endBody:{col:1,line:54}},WithContent:{startLoc:{col:27,line:65},endLoc:{col:1,line:76},startBody:{col:27,line:65},endBody:{col:1,line:76}},WithHeader:{startLoc:{col:26,line:89},endLoc:{col:1,line:101},startBody:{col:26,line:89},endBody:{col:1,line:101}},WithFooter:{startLoc:{col:26,line:113},endLoc:{col:1,line:125},startBody:{col:26,line:113},endBody:{col:1,line:125}},WithButton:{startLoc:{col:26,line:138},endLoc:{col:1,line:172},startBody:{col:26,line:138},endBody:{col:1,line:172}},WithStyleContent:{startLoc:{col:32,line:181},endLoc:{col:1,line:211},startBody:{col:32,line:181},endBody:{col:1,line:211}},WithStyleChoose:{startLoc:{col:31,line:223},endLoc:{col:1,line:280},startBody:{col:31,line:223},endBody:{col:1,line:280}}};const P=B(n({},F.e),{title:"React/Card/Beispiele",component:g.Gc}),m=o=>e.createElement(g.Gc,n({},o),o.children),f={_headline:"Card-\xDCberschrift"},k=o=>e.createElement("div",null,e.createElement(m,n({},o),e.createElement("div",{slot:"header"},o.header),e.createElement("div",{slot:"content"},o.content),e.createElement("div",{slot:"footer"},o.footer)));k.args=n({},f);const v=o=>e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement(m,{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 1",_level:1}),e.createElement(m,{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 2",_level:2}),e.createElement(m,{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 3",_level:3}),e.createElement(m,{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 4",_level:4}),e.createElement(m,{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 5",_level:5}),e.createElement(m,{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 6",_level:6}));v.args=n({},f),v.storyName="Card mit \xDCberschrift in verschiedenen Gr\xF6\xDFen";const C=o=>e.createElement("div",null,e.createElement(m,n({},o),e.createElement("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")));C.args=B(n({},f),{_hasFooter:!1,_headline:"Card mit Inhalt"}),C.storyName="Card mit Inhalt";const S=o=>e.createElement("div",null,e.createElement(m,n({},o),e.createElement("div",{slot:"header"},"Headerbereich der Card"),e.createElement("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")));S.args=B(n({},f),{_headline:"Card mit Headerbereich"}),S.storyName="Card mit Headerbereich";const x=o=>e.createElement("div",null,e.createElement(m,n({},o),e.createElement("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"),e.createElement("div",{slot:"footer"},"Fu\xDFbereich der Card")));x.args=B(n({},f),{_hasFooter:!0,_headline:"Card mit Fu\xDFbereich"}),x.storyName="Card mit Fu\xDFbereich";const K=o=>e.createElement("div",null,e.createElement(m,{_level:1,"_has-footer":!0,_headline:"Mit h1-\xDCberschrift und Footer"},e.createElement("div",{slot:"content"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur laudantium saepe ipsa atque officia cupiditate repudiandae harum earum aut doloribus autem libero exercitationem dolor ad, magni dignissimos ratione fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis qui animi nesciunt illo facere, doloribus sint cupiditate nihil dolorem voluptate ab esse! Ducimus ad est commodi molestias voluptas reiciendis."),e.createElement("div",{slot:"footer",className:"pt-1 pb-1"},e.createElement(g.ic,{_variant:"primary",_label:"Ok",_on:{onClick:()=>{alert('Hi, es wurde der Button "Ok" angeklickt')}},style:{marginRight:"5px"}}),e.createElement(g.ic,{_variant:"primary",_label:"Abbrechen",_on:{onClick:()=>{alert('Hi, es wurde der Button "Abbrechen" angeklickt')}}}))));K.storyName="Card mit Buttons";const b=o=>e.createElement("div",null,e.createElement(m,n({},o),e.createElement("div",{slot:"header"},e.createElement("div",{style:{display:"flex",alignItems:"start",margin:"10px 0"}},e.createElement("div",{style:{width:"300px"}},e.createElement(g.QK,{_org:"BReg"}," ")),e.createElement("p",null,"2-spaltige Anordnung im header-Slot. Das Layout kann mit HTML und CSS, aber auch mit allen KoliBri-Komponenten gestaltet werden.",e.createElement("br",null)))),e.createElement("div",{slot:"content",style:{margin:"-15px"}},e.createElement("div",{style:{padding:"15px"}},"Beispiel im content-Slot. Das layout kann auch hier mit HTML, CSS und KoliBri-Komponenten gestaltet werden. Auch Bilder, die \xFCber ganze Breite der Card gehen sollen, sind mit wenigen Anpassungen per CSS m\xF6glich."),e.createElement("div",null,e.createElement("img",{style:{backgroundColor:"#e1e1e1",width:"100%",height:"auto"},alt:"Beispielbild",src:"https://via.placeholder.com/200"})),e.createElement("div",{style:{padding:"15px"}},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))));b.args=B(n({},f),{_headline:"Headline - nicht frei gestaltbar"}),b.storyName="Card mit Inhalten";const _=o=>e.createElement("div",{style:{display:"flex",gap:"0.5em"}},e.createElement(m,n({},o),e.createElement("div",{slot:"header"},"TeCorp Endplatte",e.createElement("br",null),"VZTA"),e.createElement("div",{slot:"content",style:{margin:"-15px"}},e.createElement("div",null,e.createElement("img",{style:{backgroundColor:"#e1e1e1",width:"100%",height:"auto"},alt:"Beispielbild",src:"https://via.placeholder.com/200"}))),e.createElement("div",{slot:"footer"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement(g.TE,null,"Ausw\xE4hlen"),e.createElement(g.ic,{_variant:"primary",_label:"\xD6ffnen"})))),e.createElement(m,n({},o),e.createElement("div",{slot:"header"},"TeCorp Endplatte",e.createElement("br",null),"VZTA"),e.createElement("div",{slot:"content",style:{margin:"-15px"}},e.createElement("div",null,e.createElement("img",{style:{backgroundColor:"#e1e1e1",width:"100%",height:"auto"},alt:"Beispielbild",src:"https://via.placeholder.com/200"}))),e.createElement("div",{slot:"footer"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement(g.TE,null,"Ausw\xE4hlen"),e.createElement(g.ic,{_variant:"primary",_label:"\xD6ffnen"})))),e.createElement(m,n({},o),e.createElement("div",{slot:"header"},"TeCorp Endplatte",e.createElement("br",null),"VZTA"),e.createElement("div",{slot:"content",style:{margin:"-15px"}},e.createElement("div",null,e.createElement("img",{style:{backgroundColor:"#e1e1e1",width:"100%",height:"auto"},alt:"Beispielbild",src:"https://via.placeholder.com/200"}))),e.createElement("div",{slot:"footer"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement(g.TE,null,"Ausw\xE4hlen"),e.createElement(g.ic,{_variant:"primary",_label:"\xD6ffnen"})))));_.args=B(n({},f),{_headline:"DEBTI-25437/17-1"}),_.storyName="Card als Auswahl",k.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolCard {...args}>
			<div slot="header">{args.header}</div>
			<div slot="content">{args.content}</div>
			<div slot="footer">{args.footer}</div>
		</KolCard>
	</div>
)`}},k.parameters),v.parameters=n({storySource:{source:`(args: any) => (
	<div style={{ display: 'grid', gap: '0.25em' }}>
		<KolCard _headline="Ein Beispieltitel in Gr\xF6\xDFe 1" _level={1}></KolCard>
		<KolCard _headline="Ein Beispieltitel in Gr\xF6\xDFe 2" _level={2}></KolCard>
		<KolCard _headline="Ein Beispieltitel in Gr\xF6\xDFe 3" _level={3}></KolCard>
		<KolCard _headline="Ein Beispieltitel in Gr\xF6\xDFe 4" _level={4}></KolCard>
		<KolCard _headline="Ein Beispieltitel in Gr\xF6\xDFe 5" _level={5}></KolCard>
		<KolCard _headline="Ein Beispieltitel in Gr\xF6\xDFe 6" _level={6}></KolCard>
	</div>
)`}},v.parameters),C.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolCard {...args}>
			<div slot="content">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
			</div>
		</KolCard>
	</div>
)`}},C.parameters),S.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolCard {...args}>
			<div slot="header">Headerbereich der Card</div>
			<div slot="content">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
			</div>
		</KolCard>
	</div>
)`}},S.parameters),x.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolCard {...args}>
			<div slot="content">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
			</div>
			<div slot="footer">Fu\xDFbereich der Card</div>
		</KolCard>
	</div>
)`}},x.parameters),K.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolCard _level={1} _has-footer _headline="Mit h1-\xDCberschrift und Footer">
			<div slot="content">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur laudantium saepe ipsa atque officia cupiditate repudiandae harum earum aut
				doloribus autem libero exercitationem dolor ad, magni dignissimos ratione fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
				perferendis qui animi nesciunt illo facere, doloribus sint cupiditate nihil dolorem voluptate ab esse! Ducimus ad est commodi molestias voluptas
				reiciendis.
			</div>
			<div slot="footer" className="pt-1 pb-1">
				<KolButton
					_variant="primary"
					_label="Ok"
					_on={{
						onClick: () => {
							alert(\`Hi, es wurde der Button "Ok" angeklickt\`);
						},
					}}
					style={{
						marginRight: '5px',
					}}
				></KolButton>
				<KolButton
					_variant="primary"
					_label="Abbrechen"
					_on={{
						onClick: () => {
							alert(\`Hi, es wurde der Button "Abbrechen" angeklickt\`);
						},
					}}
				></KolButton>
			</div>
		</KolCard>
	</div>
)`}},K.parameters),b.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<KolCard {...args}>
			<div slot="header">
				<div style={{ display: 'flex', alignItems: 'start', margin: '10px 0' }}>
					<div style={{ width: '300px' }}>
						<KolLogo _org="BReg"> </KolLogo>
					</div>
					<p>
						2-spaltige Anordnung im header-Slot. Das Layout kann mit HTML und CSS, aber auch mit allen KoliBri-Komponenten gestaltet werden.<br></br>
					</p>
				</div>
			</div>
			<div slot="content" style={{ margin: '-15px' }}>
				<div style={{ padding: '15px' }}>
					Beispiel im content-Slot. Das layout kann auch hier mit HTML, CSS und KoliBri-Komponenten gestaltet werden. Auch Bilder, die \xFCber ganze Breite der
					Card gehen sollen, sind mit wenigen Anpassungen per CSS m\xF6glich.
				</div>
				<div>
					<img style={{ backgroundColor: '#e1e1e1', width: '100%', height: 'auto' }} alt="Beispielbild" src="https://via.placeholder.com/200" />
				</div>
				<div style={{ padding: '15px' }}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				</div>
			</div>
		</KolCard>
	</div>
)`}},b.parameters),_.parameters=n({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.5em' }}>
		<KolCard {...args}>
			<div slot="header">
				TeCorp Endplatte
				<br />
				VZTA
			</div>
			<div slot="content" style={{ margin: '-15px' }}>
				<div>
					<img style={{ backgroundColor: '#e1e1e1', width: '100%', height: 'auto' }} alt="Beispielbild" src="https://via.placeholder.com/200" />
				</div>
			</div>
			<div slot="footer">
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<KolInputCheckbox>Ausw\xE4hlen</KolInputCheckbox>
					<KolButton _variant="primary" _label="\xD6ffnen"></KolButton>
				</div>
			</div>
		</KolCard>
		<KolCard {...args}>
			<div slot="header">
				TeCorp Endplatte
				<br />
				VZTA
			</div>
			<div slot="content" style={{ margin: '-15px' }}>
				<div>
					<img style={{ backgroundColor: '#e1e1e1', width: '100%', height: 'auto' }} alt="Beispielbild" src="https://via.placeholder.com/200" />
				</div>
			</div>
			<div slot="footer">
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<KolInputCheckbox>Ausw\xE4hlen</KolInputCheckbox>
					<KolButton _variant="primary" _label="\xD6ffnen"></KolButton>
				</div>
			</div>
		</KolCard>
		<KolCard {...args}>
			<div slot="header">
				TeCorp Endplatte
				<br />
				VZTA
			</div>
			<div slot="content" style={{ margin: '-15px' }}>
				<div>
					<img style={{ backgroundColor: '#e1e1e1', width: '100%', height: 'auto' }} alt="Beispielbild" src="https://via.placeholder.com/200" />
				</div>
			</div>
			<div slot="footer">
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<KolInputCheckbox>Ausw\xE4hlen</KolInputCheckbox>
					<KolButton _variant="primary" _label="\xD6ffnen"></KolButton>
				</div>
			</div>
		</KolCard>
	</div>
)`}},_.parameters);try{k.displayName="Standard",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/react.stories.tsx#Standard"]={docgenInfo:k.__docgenInfo,name:"Standard",path:"src/components/card/1-examples/react.stories.tsx#Standard"})}catch(o){}try{v.displayName="Sizes",v.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sizes",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/react.stories.tsx#Sizes"]={docgenInfo:v.__docgenInfo,name:"Sizes",path:"src/components/card/1-examples/react.stories.tsx#Sizes"})}catch(o){}try{C.displayName="WithContent",C.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/react.stories.tsx#WithContent"]={docgenInfo:C.__docgenInfo,name:"WithContent",path:"src/components/card/1-examples/react.stories.tsx#WithContent"})}catch(o){}try{S.displayName="WithHeader",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/react.stories.tsx#WithHeader"]={docgenInfo:S.__docgenInfo,name:"WithHeader",path:"src/components/card/1-examples/react.stories.tsx#WithHeader"})}catch(o){}try{x.displayName="WithFooter",x.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/react.stories.tsx#WithFooter"]={docgenInfo:x.__docgenInfo,name:"WithFooter",path:"src/components/card/1-examples/react.stories.tsx#WithFooter"})}catch(o){}try{K.displayName="WithButton",K.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithButton",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/react.stories.tsx#WithButton"]={docgenInfo:K.__docgenInfo,name:"WithButton",path:"src/components/card/1-examples/react.stories.tsx#WithButton"})}catch(o){}try{b.displayName="WithStyleContent",b.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithStyleContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/react.stories.tsx#WithStyleContent"]={docgenInfo:b.__docgenInfo,name:"WithStyleContent",path:"src/components/card/1-examples/react.stories.tsx#WithStyleContent"})}catch(o){}try{_.displayName="WithStyleChoose",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithStyleChoose",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/react.stories.tsx#WithStyleChoose"]={docgenInfo:_.__docgenInfo,name:"WithStyleChoose",path:"src/components/card/1-examples/react.stories.tsx#WithStyleChoose"})}catch(o){}},"./src/components/card/1-examples/autogen.configuration.ts":(c,l,i)=>{i.d(l,{e:()=>O});var e=i("./node_modules/@storybook/addon-jest/dist/esm/index.js"),g=i("./node_modules/@public-ui/components/jest-test-results.json"),F=i("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const D={_headline:{name:"Titel",control:{type:"text"},type:{required:!0},defaultValue:"Ein Beispieltext"},_level:{name:"\xDCberschrift (h1 bis h6)",control:{type:"select"},options:[1,2,3,4,5,6],type:{required:!0},defaultValue:1},_hasFooter:{name:"Fu\xDFbereich anzeigen",control:{type:"boolean"},defaultValue:!0},content:{name:"Card-Inhalt",control:{type:"text"},defaultValue:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."},footer:{name:"Fu\xDFbereich-Inhalt",control:{type:"text"},defaultValue:"Beliebiger Inhalt im Fu\xDFbereich der Card."},header:{name:"Headerbereich-Inhalt",control:{type:"text"},defaultValue:"Beliebiger Inhalt im Headerbereich der Card."}},O={decorators:[(0,e.x)({results:g})],parameters:{badges:[F.NZ.STABLE],jest:["card.e2e.ts","card.spec.ts","card.spec.tsx"],status:{type:"bitv"}},argTypes:D}},"./node_modules/@public-ui/react/dist/index.mjs":(c,l,i)=>{i.d(l,{$o:()=>he,CO:()=>Le,CV:()=>oe,CX:()=>se,Er:()=>f,Gc:()=>K,HA:()=>o,Jl:()=>p,K5:()=>m,Lj:()=>ne,MA:()=>Ce,Np:()=>re,Nv:()=>ge,O:()=>ie,P:()=>ke,Q4:()=>be,QK:()=>ye,Qs:()=>Be,RZ:()=>P,T5:()=>U,TE:()=>ae,TQ:()=>me,UD:()=>Ee,Ud:()=>ve,Vp:()=>Ke,Vs:()=>pe,WD:()=>ue,WR:()=>_e,Ze:()=>Ae,c2:()=>le,cJ:()=>y,ic:()=>v,is:()=>xe,lo:()=>k,m5:()=>_,ox:()=>b,qq:()=>Se,r7:()=>fe,rW:()=>te,sy:()=>ce,u_:()=>De,uz:()=>C,z5:()=>de});var e=i("./node_modules/react/index.js"),g=i("./node_modules/react-dom/index.js");const F=r=>r.toLowerCase().split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(""),D=r=>r.replace(/([A-Z])/g,a=>`-${a[0].toLowerCase()}`),O=(r,a,d={})=>{if(r instanceof Element){const u=H(r.classList,a,d);u!==""&&(r.className=u),Object.keys(a).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const E=s.substring(2),h=E[0].toLowerCase()+E.substring(1);I(h)||M(r,h,a[s])}else r[s]=a[s],typeof a[s]==="string"&&r.setAttribute(D(s),a[s])})}},H=(r,a,d)=>{const u=a.className||a.class,s=d.className||d.class,E=W(r),h=W(u?u.split(" "):[]),w=W(s?s.split(" "):[]),T=[];return E.forEach(L=>{h.has(L)?(T.push(L),h.delete(L)):w.has(L)||T.push(L)}),h.forEach(L=>T.push(L)),T.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const I=r=>{if(typeof document=="undefined")return!0;{const a="on"+r;let d=a in document;if(!d){const u=document.createElement("div");u.setAttribute(a,"return;"),d=typeof u[a]=="function"}return d}},M=(r,a,d)=>{const u=r.__events||(r.__events={}),s=u[a];s&&r.removeEventListener(a,s),r.addEventListener(a,u[a]=function(h){d&&d.call(this,h)})},W=r=>{const a=new Map;return r.forEach(d=>a.set(d,d)),a},j=(r,a)=>{typeof r=="function"?r(a):r!=null&&(r.current=a)},n=(...r)=>a=>{r.forEach(d=>{j(d,a)})},B=(r,a)=>{const d=(u,s)=>e.createElement(r,Y(z({},u),{forwardedRef:s}));return d.displayName=a,e.forwardRef(d)},t=(r,a,d,u)=>{u!==void 0&&u();const s=F(r),E=class extends e.Component{constructor(h){super(h),this.setComponentElRef=w=>{this.componentEl=w}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(h){O(this.componentEl,this.props,h)}render(){const Q=this.props,{children:h,forwardedRef:w,style:T,className:L,ref:je}=Q,Z=ee(Q,["children","forwardedRef","style","className","ref"]);let q=Object.keys(Z).reduce((G,A)=>{const V=Z[A];if(A.indexOf("on")===0&&A[2]===A[2].toUpperCase()){const R=A.substring(2).toLowerCase();typeof document!="undefined"&&I(R)&&(G[A]=V)}else{const R=typeof V;(R==="string"||R==="boolean"||R==="number")&&(G[D(A)]=V)}return G},{});d&&(q=d(this.props,q));const Te=Y(z({},q),{ref:n(w,this.setComponentElRef),style:T});return(0,e.createElement)(r,Te,h)}static get displayName(){return s}};return a&&(E.contextType=a),B(E,s)},U=t("kol-abbr"),P=t("kol-accordion"),m=t("kol-alert"),f=t("kol-badge"),k=t("kol-breadcrumb"),v=t("kol-button"),C=t("kol-button-group"),S=null,x=null,K=t("kol-card"),b=t("kol-details"),_=t("kol-form"),o=t("kol-heading"),p=t("kol-icon"),y=t("kol-icon-font-awesome"),te=t("kol-icon-icofont"),oe=t("kol-indented-text"),We=null,ae=t("kol-input-checkbox"),re=t("kol-input-color"),ie=t("kol-input-date"),ne=t("kol-input-email"),se=t("kol-input-file"),le=t("kol-input-number"),de=t("kol-input-password"),ce=t("kol-input-radio"),me=t("kol-input-range"),ue=t("kol-input-text"),pe=t("kol-kolibri"),ge=t("kol-link"),we=null,he=t("kol-link-group"),ye=t("kol-logo"),ve=t("kol-modal"),Ce=t("kol-nav"),be=t("kol-pagination"),_e=t("kol-progress"),fe=t("kol-select"),ke=t("kol-skip-nav"),Re=null,Se=t("kol-spin"),xe=t("kol-symbol"),Ke=t("kol-table"),Ee=t("kol-tabs"),Be=t("kol-textarea"),Le=t("kol-toast"),Ae=t("kol-tooltip"),De=t("kol-version")}}]);
