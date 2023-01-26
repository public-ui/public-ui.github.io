"use strict";var Fe=Object.defineProperty,Oe=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var J=(c,l,i)=>l in c?Fe(c,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[l]=i,V=(c,l)=>{for(var i in l||(l={}))X.call(l,i)&&J(c,i,l[i]);if(j)for(var i of j(l))$.call(l,i)&&J(c,i,l[i]);return c},z=(c,l)=>Oe(c,Te(l));var ee=(c,l)=>{var i={};for(var e in c)X.call(c,e)&&l.indexOf(e)<0&&(i[e]=c[e]);if(c!=null&&j)for(var e of j(c))l.indexOf(e)<0&&$.call(c,e)&&(i[e]=c[e]);return i};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4787],{"./src/components/card/1-examples/autogen.wc.stories.tsx":(c,l,i)=>{i.r(l),i.d(l,{Sizes:()=>h,Standard:()=>_,WithButton:()=>S,WithContent:()=>y,WithFooter:()=>C,WithHeader:()=>f,WithStyleChoose:()=>k,WithStyleContent:()=>v,default:()=>M});var e=i("./node_modules/react/index.js"),R=i("./node_modules/@public-ui/react/dist/index.mjs"),K=i("./src/components/card/1-examples/autogen.configuration.ts"),B=Object.defineProperty,w=Object.defineProperties,N=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,I=(o,u,g)=>u in o?B(o,u,{enumerable:!0,configurable:!0,writable:!0,value:g}):o[u]=g,n=(o,u)=>{for(var g in u||(u={}))H.call(u,g)&&I(o,g,u[g]);if(F)for(var g of F(u))O.call(u,g)&&I(o,g,u[g]);return o},E=(o,u)=>w(o,N(u)),t=null,Y={Standard:{startLoc:{col:24,line:27},endLoc:{col:1,line:35},startBody:{col:24,line:27},endBody:{col:1,line:35}},Sizes:{startLoc:{col:21,line:45},endLoc:{col:1,line:54},startBody:{col:21,line:45},endBody:{col:1,line:54}},WithContent:{startLoc:{col:27,line:65},endLoc:{col:1,line:76},startBody:{col:27,line:65},endBody:{col:1,line:76}},WithHeader:{startLoc:{col:26,line:89},endLoc:{col:1,line:101},startBody:{col:26,line:89},endBody:{col:1,line:101}},WithFooter:{startLoc:{col:26,line:113},endLoc:{col:1,line:125},startBody:{col:26,line:113},endBody:{col:1,line:125}},WithButton:{startLoc:{col:26,line:138},endLoc:{col:1,line:172},startBody:{col:26,line:138},endBody:{col:1,line:172}},WithStyleContent:{startLoc:{col:32,line:181},endLoc:{col:1,line:211},startBody:{col:32,line:181},endBody:{col:1,line:211}},WithStyleChoose:{startLoc:{col:31,line:223},endLoc:{col:1,line:280},startBody:{col:31,line:223},endBody:{col:1,line:280}}};const M=E(n({},K.e),{title:"Web Components/Card/Beispiele",component:R.Gc}),U=o=>React.createElement(MyComponent,n({},o),o.children),b={_headline:"Card-\xDCberschrift"},_=o=>e.createElement("div",null,e.createElement("kol-card",n({},o),e.createElement("div",{slot:"header"},o.header),e.createElement("div",{slot:"content"},o.content),e.createElement("div",{slot:"footer"},o.footer)));_.args=n({},b);const h=o=>e.createElement("div",{style:{display:"grid",gap:"0.25em"}},e.createElement("kol-card",{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 1",_level:1}),e.createElement("kol-card",{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 2",_level:2}),e.createElement("kol-card",{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 3",_level:3}),e.createElement("kol-card",{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 4",_level:4}),e.createElement("kol-card",{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 5",_level:5}),e.createElement("kol-card",{_headline:"Ein Beispieltitel in Gr\xF6\xDFe 6",_level:6}));h.args=n({},b),h.storyName="Card mit \xDCberschrift in verschiedenen Gr\xF6\xDFen";const y=o=>e.createElement("div",null,e.createElement("kol-card",n({},o),e.createElement("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")));y.args=E(n({},b),{_hasFooter:!1,_headline:"Card mit Inhalt"}),y.storyName="Card mit Inhalt";const f=o=>e.createElement("div",null,e.createElement("kol-card",n({},o),e.createElement("div",{slot:"header"},"Headerbereich der Card"),e.createElement("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")));f.args=E(n({},b),{_headline:"Card mit Headerbereich"}),f.storyName="Card mit Headerbereich";const C=o=>e.createElement("div",null,e.createElement("kol-card",n({},o),e.createElement("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"),e.createElement("div",{slot:"footer"},"Fu\xDFbereich der Card")));C.args=E(n({},b),{_hasFooter:!0,_headline:"Card mit Fu\xDFbereich"}),C.storyName="Card mit Fu\xDFbereich";const S=o=>e.createElement("div",null,e.createElement("kol-card",{_level:1,"_has-footer":!0,_headline:"Mit h1-\xDCberschrift und Footer"},e.createElement("div",{slot:"content"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur laudantium saepe ipsa atque officia cupiditate repudiandae harum earum aut doloribus autem libero exercitationem dolor ad, magni dignissimos ratione fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis qui animi nesciunt illo facere, doloribus sint cupiditate nihil dolorem voluptate ab esse! Ducimus ad est commodi molestias voluptas reiciendis."),e.createElement("div",{slot:"footer",className:"pt-1 pb-1"},e.createElement("kol-button",{_variant:"primary",_label:"Ok",_on:{onClick:()=>{alert('Hi, es wurde der Button "Ok" angeklickt')}},style:{marginRight:"5px"}}),e.createElement("kol-button",{_variant:"primary",_label:"Abbrechen",_on:{onClick:()=>{alert('Hi, es wurde der Button "Abbrechen" angeklickt')}}}))));S.storyName="Card mit Buttons";const v=o=>e.createElement("div",null,e.createElement("kol-card",n({},o),e.createElement("div",{slot:"header"},e.createElement("div",{style:{display:"flex",alignItems:"start",margin:"10px 0"}},e.createElement("div",{style:{width:"300px"}},e.createElement("kol-logo",{_org:"BReg"}," ")),e.createElement("p",null,"2-spaltige Anordnung im header-Slot. Das Layout kann mit HTML und CSS, aber auch mit allen KoliBri-Komponenten gestaltet werden.",e.createElement("br",null)))),e.createElement("div",{slot:"content",style:{margin:"-15px"}},e.createElement("div",{style:{padding:"15px"}},"Beispiel im content-Slot. Das layout kann auch hier mit HTML, CSS und KoliBri-Komponenten gestaltet werden. Auch Bilder, die \xFCber ganze Breite der Card gehen sollen, sind mit wenigen Anpassungen per CSS m\xF6glich."),e.createElement("div",null,e.createElement("img",{style:{backgroundColor:"#e1e1e1",width:"100%",height:"auto"},alt:"Beispielbild",src:"https://via.placeholder.com/200"})),e.createElement("div",{style:{padding:"15px"}},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))));v.args=E(n({},b),{_headline:"Headline - nicht frei gestaltbar"}),v.storyName="Card mit Inhalten";const k=o=>e.createElement("div",{style:{display:"flex",gap:"0.5em"}},e.createElement("kol-card",n({},o),e.createElement("div",{slot:"header"},"TeCorp Endplatte",e.createElement("br",null),"VZTA"),e.createElement("div",{slot:"content",style:{margin:"-15px"}},e.createElement("div",null,e.createElement("img",{style:{backgroundColor:"#e1e1e1",width:"100%",height:"auto"},alt:"Beispielbild",src:"https://via.placeholder.com/200"}))),e.createElement("div",{slot:"footer"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("kol-input-checkbox",null,"Ausw\xE4hlen"),e.createElement("kol-button",{_variant:"primary",_label:"\xD6ffnen"})))),e.createElement("kol-card",n({},o),e.createElement("div",{slot:"header"},"TeCorp Endplatte",e.createElement("br",null),"VZTA"),e.createElement("div",{slot:"content",style:{margin:"-15px"}},e.createElement("div",null,e.createElement("img",{style:{backgroundColor:"#e1e1e1",width:"100%",height:"auto"},alt:"Beispielbild",src:"https://via.placeholder.com/200"}))),e.createElement("div",{slot:"footer"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("kol-input-checkbox",null,"Ausw\xE4hlen"),e.createElement("kol-button",{_variant:"primary",_label:"\xD6ffnen"})))),e.createElement("kol-card",n({},o),e.createElement("div",{slot:"header"},"TeCorp Endplatte",e.createElement("br",null),"VZTA"),e.createElement("div",{slot:"content",style:{margin:"-15px"}},e.createElement("div",null,e.createElement("img",{style:{backgroundColor:"#e1e1e1",width:"100%",height:"auto"},alt:"Beispielbild",src:"https://via.placeholder.com/200"}))),e.createElement("div",{slot:"footer"},e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("kol-input-checkbox",null,"Ausw\xE4hlen"),e.createElement("kol-button",{_variant:"primary",_label:"\xD6ffnen"})))));k.args=E(n({},b),{_headline:"DEBTI-25437/17-1"}),k.storyName="Card als Auswahl",_.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-card {...args}>
			<div slot="header">{args.header}</div>
			<div slot="content">{args.content}</div>
			<div slot="footer">{args.footer}</div>
		</kol-card>
	</div>
)`}},_.parameters),h.parameters=n({storySource:{source:`(args: any) => (
	<div style={{ display: 'grid', gap: '0.25em' }}>
		<kol-card _headline="Ein Beispieltitel in Gr\xF6\xDFe 1" _level={1}></kol-card>
		<kol-card _headline="Ein Beispieltitel in Gr\xF6\xDFe 2" _level={2}></kol-card>
		<kol-card _headline="Ein Beispieltitel in Gr\xF6\xDFe 3" _level={3}></kol-card>
		<kol-card _headline="Ein Beispieltitel in Gr\xF6\xDFe 4" _level={4}></kol-card>
		<kol-card _headline="Ein Beispieltitel in Gr\xF6\xDFe 5" _level={5}></kol-card>
		<kol-card _headline="Ein Beispieltitel in Gr\xF6\xDFe 6" _level={6}></kol-card>
	</div>
)`}},h.parameters),y.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-card {...args}>
			<div slot="content">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
			</div>
		</kol-card>
	</div>
)`}},y.parameters),f.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-card {...args}>
			<div slot="header">Headerbereich der Card</div>
			<div slot="content">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
			</div>
		</kol-card>
	</div>
)`}},f.parameters),C.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-card {...args}>
			<div slot="content">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
			</div>
			<div slot="footer">Fu\xDFbereich der Card</div>
		</kol-card>
	</div>
)`}},C.parameters),S.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-card _level={1} _has-footer _headline="Mit h1-\xDCberschrift und Footer">
			<div slot="content">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur laudantium saepe ipsa atque officia cupiditate repudiandae harum earum aut
				doloribus autem libero exercitationem dolor ad, magni dignissimos ratione fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
				perferendis qui animi nesciunt illo facere, doloribus sint cupiditate nihil dolorem voluptate ab esse! Ducimus ad est commodi molestias voluptas
				reiciendis.
			</div>
			<div slot="footer" className="pt-1 pb-1">
				<kol-button
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
				></kol-button>
				<kol-button
					_variant="primary"
					_label="Abbrechen"
					_on={{
						onClick: () => {
							alert(\`Hi, es wurde der Button "Abbrechen" angeklickt\`);
						},
					}}
				></kol-button>
			</div>
		</kol-card>
	</div>
)`}},S.parameters),v.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-card {...args}>
			<div slot="header">
				<div style={{ display: 'flex', alignItems: 'start', margin: '10px 0' }}>
					<div style={{ width: '300px' }}>
						<kol-logo _org="BReg"> </kol-logo>
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
		</kol-card>
	</div>
)`}},v.parameters),k.parameters=n({storySource:{source:`(args: any) => (
	<div style={{ display: 'flex', gap: '0.5em' }}>
		<kol-card {...args}>
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
					<kol-input-checkbox>Ausw\xE4hlen</kol-input-checkbox>
					<kol-button _variant="primary" _label="\xD6ffnen"></kol-button>
				</div>
			</div>
		</kol-card>
		<kol-card {...args}>
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
					<kol-input-checkbox>Ausw\xE4hlen</kol-input-checkbox>
					<kol-button _variant="primary" _label="\xD6ffnen"></kol-button>
				</div>
			</div>
		</kol-card>
		<kol-card {...args}>
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
					<kol-input-checkbox>Ausw\xE4hlen</kol-input-checkbox>
					<kol-button _variant="primary" _label="\xD6ffnen"></kol-button>
				</div>
			</div>
		</kol-card>
	</div>
)`}},k.parameters);try{_.displayName="Standard",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:_.__docgenInfo,name:"Standard",path:"src/components/card/1-examples/autogen.wc.stories.tsx#Standard"})}catch(o){}try{h.displayName="Sizes",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Sizes",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/autogen.wc.stories.tsx#Sizes"]={docgenInfo:h.__docgenInfo,name:"Sizes",path:"src/components/card/1-examples/autogen.wc.stories.tsx#Sizes"})}catch(o){}try{y.displayName="WithContent",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/autogen.wc.stories.tsx#WithContent"]={docgenInfo:y.__docgenInfo,name:"WithContent",path:"src/components/card/1-examples/autogen.wc.stories.tsx#WithContent"})}catch(o){}try{f.displayName="WithHeader",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/autogen.wc.stories.tsx#WithHeader"]={docgenInfo:f.__docgenInfo,name:"WithHeader",path:"src/components/card/1-examples/autogen.wc.stories.tsx#WithHeader"})}catch(o){}try{C.displayName="WithFooter",C.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/autogen.wc.stories.tsx#WithFooter"]={docgenInfo:C.__docgenInfo,name:"WithFooter",path:"src/components/card/1-examples/autogen.wc.stories.tsx#WithFooter"})}catch(o){}try{S.displayName="WithButton",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithButton",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/autogen.wc.stories.tsx#WithButton"]={docgenInfo:S.__docgenInfo,name:"WithButton",path:"src/components/card/1-examples/autogen.wc.stories.tsx#WithButton"})}catch(o){}try{v.displayName="WithStyleContent",v.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithStyleContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/autogen.wc.stories.tsx#WithStyleContent"]={docgenInfo:v.__docgenInfo,name:"WithStyleContent",path:"src/components/card/1-examples/autogen.wc.stories.tsx#WithStyleContent"})}catch(o){}try{k.displayName="WithStyleChoose",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"WithStyleChoose",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/card/1-examples/autogen.wc.stories.tsx#WithStyleChoose"]={docgenInfo:k.__docgenInfo,name:"WithStyleChoose",path:"src/components/card/1-examples/autogen.wc.stories.tsx#WithStyleChoose"})}catch(o){}},"./src/components/card/1-examples/autogen.configuration.ts":(c,l,i)=>{i.d(l,{e:()=>w});var e=i("./node_modules/@storybook/addon-jest/dist/esm/index.js"),R=i("./node_modules/@public-ui/components/jest-test-results.json"),K=i("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const B={_headline:{name:"Titel",control:{type:"text"},type:{required:!0},defaultValue:"Ein Beispieltext"},_level:{name:"\xDCberschrift (h1 bis h6)",control:{type:"select"},options:[1,2,3,4,5,6],type:{required:!0},defaultValue:1},_hasFooter:{name:"Fu\xDFbereich anzeigen",control:{type:"boolean"},defaultValue:!0},content:{name:"Card-Inhalt",control:{type:"text"},defaultValue:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."},footer:{name:"Fu\xDFbereich-Inhalt",control:{type:"text"},defaultValue:"Beliebiger Inhalt im Fu\xDFbereich der Card."},header:{name:"Headerbereich-Inhalt",control:{type:"text"},defaultValue:"Beliebiger Inhalt im Headerbereich der Card."}},w={decorators:[(0,e.x)({results:R})],parameters:{badges:[K.NZ.STABLE],jest:["card.e2e.ts","card.spec.ts","card.spec.tsx"],status:{type:"bitv"}},argTypes:B}},"./node_modules/@public-ui/react/dist/index.mjs":(c,l,i)=>{i.d(l,{$o:()=>he,CO:()=>Be,CV:()=>oe,CX:()=>se,Er:()=>b,Gc:()=>S,HA:()=>o,Jl:()=>u,K5:()=>U,Lj:()=>ne,MA:()=>ke,Np:()=>re,Nv:()=>ge,O:()=>ie,P:()=>Ce,Q4:()=>be,QK:()=>ye,Qs:()=>Le,RZ:()=>M,T5:()=>Y,TE:()=>ae,TQ:()=>me,UD:()=>Ae,Ud:()=>ve,Vp:()=>Ee,Vs:()=>pe,WD:()=>ue,WR:()=>_e,Ze:()=>De,c2:()=>le,cJ:()=>g,ic:()=>h,is:()=>xe,lo:()=>_,m5:()=>k,ox:()=>v,qq:()=>Se,r7:()=>fe,rW:()=>te,sy:()=>ce,u_:()=>Ke,uz:()=>y,z5:()=>de});var e=i("./node_modules/react/index.js"),R=i("./node_modules/react-dom/index.js");const K=r=>r.toLowerCase().split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(""),B=r=>r.replace(/([A-Z])/g,a=>`-${a[0].toLowerCase()}`),w=(r,a,d={})=>{if(r instanceof Element){const m=N(r.classList,a,d);m!==""&&(r.className=m),Object.keys(a).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const x=s.substring(2),p=x[0].toLowerCase()+x.substring(1);F(p)||H(r,p,a[s])}else r[s]=a[s],typeof a[s]==="string"&&r.setAttribute(B(s),a[s])})}},N=(r,a,d)=>{const m=a.className||a.class,s=d.className||d.class,x=O(r),p=O(m?m.split(" "):[]),T=O(s?s.split(" "):[]),D=[];return x.forEach(A=>{p.has(A)?(D.push(A),p.delete(A)):T.has(A)||D.push(A)}),p.forEach(A=>D.push(A)),D.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const F=r=>{if(typeof document=="undefined")return!0;{const a="on"+r;let d=a in document;if(!d){const m=document.createElement("div");m.setAttribute(a,"return;"),d=typeof m[a]=="function"}return d}},H=(r,a,d)=>{const m=r.__events||(r.__events={}),s=m[a];s&&r.removeEventListener(a,s),r.addEventListener(a,m[a]=function(p){d&&d.call(this,p)})},O=r=>{const a=new Map;return r.forEach(d=>a.set(d,d)),a},I=(r,a)=>{typeof r=="function"?r(a):r!=null&&(r.current=a)},n=(...r)=>a=>{r.forEach(d=>{I(d,a)})},E=(r,a)=>{const d=(m,s)=>e.createElement(r,z(V({},m),{forwardedRef:s}));return d.displayName=a,e.forwardRef(d)},t=(r,a,d,m)=>{m!==void 0&&m();const s=K(r),x=class extends e.Component{constructor(p){super(p),this.setComponentElRef=T=>{this.componentEl=T}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(p){w(this.componentEl,this.props,p)}render(){const Q=this.props,{children:p,forwardedRef:T,style:D,className:A,ref:je}=Q,Z=ee(Q,["children","forwardedRef","style","className","ref"]);let P=Object.keys(Z).reduce((q,L)=>{const G=Z[L];if(L.indexOf("on")===0&&L[2]===L[2].toUpperCase()){const W=L.substring(2).toLowerCase();typeof document!="undefined"&&F(W)&&(q[L]=G)}else{const W=typeof G;(W==="string"||W==="boolean"||W==="number")&&(q[B(L)]=G)}return q},{});d&&(P=d(this.props,P));const we=z(V({},P),{ref:n(T,this.setComponentElRef),style:D});return(0,e.createElement)(r,we,p)}static get displayName(){return s}};return a&&(x.contextType=a),E(x,s)},Y=t("kol-abbr"),M=t("kol-accordion"),U=t("kol-alert"),b=t("kol-badge"),_=t("kol-breadcrumb"),h=t("kol-button"),y=t("kol-button-group"),f=null,C=null,S=t("kol-card"),v=t("kol-details"),k=t("kol-form"),o=t("kol-heading"),u=t("kol-icon"),g=t("kol-icon-font-awesome"),te=t("kol-icon-icofont"),oe=t("kol-indented-text"),We=null,ae=t("kol-input-checkbox"),re=t("kol-input-color"),ie=t("kol-input-date"),ne=t("kol-input-email"),se=t("kol-input-file"),le=t("kol-input-number"),de=t("kol-input-password"),ce=t("kol-input-radio"),me=t("kol-input-range"),ue=t("kol-input-text"),pe=t("kol-kolibri"),ge=t("kol-link"),Re=null,he=t("kol-link-group"),ye=t("kol-logo"),ve=t("kol-modal"),ke=t("kol-nav"),be=t("kol-pagination"),_e=t("kol-progress"),fe=t("kol-select"),Ce=t("kol-skip-nav"),Ie=null,Se=t("kol-spin"),xe=t("kol-symbol"),Ee=t("kol-table"),Ae=t("kol-tabs"),Le=t("kol-textarea"),Be=t("kol-toast"),De=t("kol-tooltip"),Ke=t("kol-version")}}]);
