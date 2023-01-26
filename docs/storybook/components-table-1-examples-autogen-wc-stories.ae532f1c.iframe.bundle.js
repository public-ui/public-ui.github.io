"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6825],{"./src/components/table/1-examples/autogen.wc.stories.tsx":(H,h,l)=>{l.r(h),l.d(h,{Simple:()=>s,Standard:()=>o,default:()=>E,pagination:()=>y,rowspan:()=>d,schedules:()=>g,sortRender:()=>b,tableFilter:()=>p,verticalSortRender:()=>u});var i=l("./node_modules/react/index.js"),A=l("./node_modules/@public-ui/react/dist/index.mjs"),_=l("./src/components/table/1-examples/autogen.configuration.ts"),r=l("./src/components/table/1-examples/data.ts"),v=Object.defineProperty,k=Object.defineProperties,S=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,w=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&w(e,a,t[a]);if(f)for(var a of f(t))x.call(t,a)&&w(e,a,t[a]);return e},M=(e,t)=>k(e,S(t)),K=null,T={Standard:{startLoc:{col:24,line:36},endLoc:{col:1,line:40},startBody:{col:24,line:36},endBody:{col:1,line:40}},Simple:{startLoc:{col:22,line:45},endLoc:{col:1,line:66},startBody:{col:22,line:45},endBody:{col:1,line:66}},schedules:{startLoc:{col:25,line:73},endLoc:{col:1,line:158},startBody:{col:25,line:73},endBody:{col:1,line:158}},rowspan:{startLoc:{col:23,line:165},endLoc:{col:1,line:174},startBody:{col:23,line:165},endBody:{col:1,line:174}},sortRender:{startLoc:{col:26,line:181},endLoc:{col:1,line:232},startBody:{col:26,line:181},endBody:{col:1,line:232}},verticalSortRender:{startLoc:{col:34,line:236},endLoc:{col:1,line:310},startBody:{col:34,line:236},endBody:{col:1,line:310}},tableFilter:{startLoc:{col:27,line:314},endLoc:{col:1,line:374},startBody:{col:27,line:314},endBody:{col:1,line:374}},pagination:{startLoc:{col:26,line:378},endLoc:{col:1,line:390},startBody:{col:26,line:378},endBody:{col:1,line:390}}};const E=M(n({},_.r),{title:"Web Components/Table/Beispiele",component:A.Vp}),F=e=>React.createElement(MyComponent,n({},e),e.children),m={},o=e=>i.createElement("div",null,i.createElement("kol-table",n({},e)));o.args=n({},m);const s=()=>i.createElement("div",null,i.createElement("kol-table",{_caption:"Beispieltabelle",_headers:{horizontal:[[{label:"Spalte 1",key:"spalte1"},{label:"Spalte 2",key:"spalte2"},{label:"Spalte 3",key:"spalte3"}]]},_data:[{spalte1:"Zelle 1",spalte2:"Zelle 2",spalte3:"Zelle 3"},{spalte1:"Zelle 1",spalte2:"Zelle 2",spalte3:"Zelle 3"},{spalte1:"Zelle 1",spalte2:"Zelle 2",spalte3:"Zelle 3"}],class:"hydrated"}));s.args=n({},m),s.storyName="Einfache Tabelle";const g=()=>i.createElement("div",null,i.createElement("kol-table",{_caption:"\xD6ffnungszeiten",_data:[{stadtteil:"Brackel",montag:"08:00 - 12:00<br/>14:00 - 16:00",dienstag:"08:00 - 12:00<br/>14:00 - 15:00",mittwoch:"08:00 - 12:00<br/>14:00 - 15:00",donnerstag:"08:00 - 12:00<br/>14:00 - 18:00",freitag:"08:00 - 12:00"},{stadtteil:"Dorstfeld",montag:"09:00 - 12:00<br/>14:00 - 16:00",dienstag:"09:00 - 12:00<br/>14:00 - 15:00",mittwoch:"09:00 - 12:00<br/>14:00 - 15:00",donnerstag:"09:00 - 12:00<br/>14:00 - 18:00",freitag:"09:00 - 12:00"},{stadtteil:"Aplerbeck",montag:"08:00 - 12:00<br/>14:00 - 16:00",dienstag:"08:00 - 12:00<br/>14:00 - 15:00",mittwoch:"08:00 - 12:00<br/>14:00 - 15:00",donnerstag:"08:00 - 12:00<br/>14:00 - 18:00",freitag:"08:00 - 12:00"},{stadtteil:"Innenstadt Ost",montag:"07:00 - 12:00<br/>14:00 - 16:00",dienstag:"07:00 - 12:00<br/>14:00 - 15:00",mittwoch:"07:00 - 12:00<br/>14:00 - 15:00",donnerstag:"07:00 - 12:00<br/>14:00 - 18:00",freitag:"07:00 - 12:00<br/>13:00 - 16:00"},{stadtteil:"Innenstadt West",montag:"07:00 - 12:00<br/>14:00 - 16:00",dienstag:"07:00 - 12:00<br/>14:00 - 15:00",mittwoch:"07:00 - 12:00<br/>14:00 - 15:00",donnerstag:"07:00 - 12:00<br/>14:00 - 18:00",freitag:"07:00 - 12:00<br/>13:00 - 16:00"}],_headers:{horizontal:[[{label:"",asTd:!0},{label:"Tag",colSpan:5}],[{label:"Stadtteil",key:"stadtteil",textAlign:"left",sort:e=>e.sort((t,a)=>t.stadtteil<a.stadtteil?-1:t.stadtteil>a.stadtteil?1:0)},{label:"Montag",key:"montag",textAlign:"center"},{label:"Dienstag",key:"dienstag",textAlign:"center"},{label:"Mittwoch",key:"mittwoch",textAlign:"center"},{label:"Donnerstag",key:"donnerstag",textAlign:"center"},{label:"Freitag",key:"freitag",textAlign:"center"}]]},class:"hydrated"}));g.args=n({},m),g.storyName="Tabelle mit Sortierung einer Spalte";const d=()=>i.createElement("div",null,i.createElement("kol-table",{_caption:`2 Horizontal Header mit Span, 2 Vertikal Header mit Span, Daten Horizontal (Row- und
              Col-Span)`,_headers:"{'horizontal':[[{'label':'','colSpan':2,'rowSpan':2,'asTd':true},{'label':'Q2','colSpan':2},{'label':'Juni','key':'juni','rowSpan':2},{'label':'Q3','colSpan':3}],[{'label':'April','key':'april'},{'label':'Mai','key':'mai'},{'label':'Juli','key':'juli'},{'label':'August','key':'august'},{'label':'September','key':'september'}]],'vertical':[[{'label':'Bayern','rowSpan':2},{'label':'Berlin','key':'berlin','colSpan':2},{'label':'Nordrhein-Westfalen','rowSpan':3}],[{'label':'M\xFCnchen','key':'m\xFCnchen'},{'label':'N\xFCrnberg','key':'n\xFCrnberg'},{'label':'Bonn','key':'bonn'},{'label':'D\xFCsseldorf','key':'d\xFCsseldorf'},{'label':'K\xF6ln','key':'k\xF6ln'}]]}",_data:"[{'april':'97','mai':'99','juni':'100','juli':'101','august':'102','september':'105'},{'april':'11','mai':'13','juni':'13','juli':'13','august':'12','september':'12'},{'april':'86','mai':'85','juni':'87','juli':'88','august':'87','september':'90'},{'april':'11','mai':'12','juni':'12','juli':'11','august':'12','september':'12'},{'april':'42','mai':'41','juni':'42','juli':'43','august':'39','september':'42'},{'april':'100','mai':'99','juni':'98','juli':'99','august':'102','september':'109'}]"}));d.args=n({},m),d.storyName="Tabelle mit Rowspan/Colspan";const b=()=>(setTimeout(()=>{const e=[{montag:"Alex",dienstag:"Hong",mittwoch:"Kevin",donnerstag:"Fabian",freitag:"Alex",samstag:"Kevin",sonntag:"Hong"},{montag:"Helena",dienstag:"Fabian",mittwoch:"Marie",donnerstag:"Ben",freitag:"Marcus",samstag:"Alex",sonntag:"Marcus"},{montag:"Fabian",dienstag:"Helena",mittwoch:"Fabian",donnerstag:"Maya",freitag:"Ben",samstag:"Alex",sonntag:"Helena"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"}];document.querySelector("kol-table#table-1")._headers=r.H,document.querySelector("kol-table#table-1")._data=e},1e3),i.createElement("kol-table",{id:"table-1",_caption:"2 Header, Daten Horizontal, Sort and Render",_data:"[{'montag': 'Alex', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}, {'montag': 'Helena', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Marcus'}, {'montag': 'Fabian', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}, {'montag': 'Hong', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}]",class:"hydrated"}));b.storyName="Horizontal Sortieren/Rendern";const u=()=>(setTimeout(()=>{const e=[{montag:"Alex",dienstag:"Hong",mittwoch:"Kevin",donnerstag:"Fabian",freitag:"Alex",samstag:"Kevin",sonntag:"Hong"},{montag:"Helena",dienstag:"Fabian",mittwoch:"Marie",donnerstag:"Ben",freitag:"Marcus",samstag:"Alex",sonntag:"Marcus"},{montag:"Fabian",dienstag:"Helena",mittwoch:"Fabian",donnerstag:"Maya",freitag:"Ben",samstag:"Alex",sonntag:"Helena"},{montag:"Hong",dienstag:"Alex",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Fabian",samstag:"Helena",sonntag:"Alex"}];document.querySelector("kol-table#table-2")._headers={horizontal:[[{asTd:!0,colSpan:2}].concat(r.H.vertical[0])],vertical:[[M(n({},r.H.horizontal[0][1]),{rowSpan:r.H.horizontal[0][1].colSpan,colSpan:void 0}),M(n({},r.H.horizontal[0][2]),{rowSpan:r.H.horizontal[0][2].colSpan,colSpan:void 0})]].concat([r.H.horizontal[1]])},document.querySelector("kol-table#table-2")._data=e},1e3),i.createElement("kol-table",{id:"table-2",_caption:"2 Header, Daten Vertikal, Sort and Render",_data:"[{'montag': 'Alex', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}, {'montag': 'Helena', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Marcus'}, {'montag': 'Fabian', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}, {'montag': 'Hong', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}]"}));u.storyName="Vertical Sortieren/Rendern";const p=()=>(setTimeout(()=>{const e=[{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Alex",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Helena",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Marcus"},{montag:"Fabian",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"},{montag:"Hong",dienstag:"Marie",mittwoch:"Kevin",donnerstag:"Maya",freitag:"Ben"}];document.querySelector("#filter-table")._data=e,document.querySelector("#filter-input")._on={onChange:t=>{document.querySelector("#filter-table")._data=e.filter(a=>{const c=new RegExp(t.target.value,"i");return c.test(a.montag)||c.test(a.dienstag)||c.test(a.mittwoch)||c.test(a.donnerstag)||c.test(a.freitag)})}}},1e3),i.createElement("div",null,i.createElement("kol-input-text",{id:"filter-input",_type:"search"},"Filtern"),i.createElement("kol-table",{id:"filter-table",_caption:"Tabelle + Filter",_headers:"{'horizontal':[[{'label':'Montag','key':'montag'},{'label':'Dienstag','key':'dienstag'},{'label':'Mittwoch','key':'mittwoch'},{'label':'Donnerstag','key':'donnerstag'},{'label':'Freitag','key':'freitag'}]]}"})));p.storyName="Tabelle mit Filter";const y=()=>(setTimeout(()=>{document.querySelector("kol-table#table-3")._data=r.u},1e3),i.createElement("kol-table",{id:"table-3",_caption:"Nur Horizontal Header, Daten Horizontal, Pagination",_headers:"{'horizontal':[[{'label':'Montag','key':'montag','width':'10em'},{'label':'Dienstag','key':'dienstag','width':'15em'},{'label':'Mittwoch','key':'mittwoch'},{'label':'Donnerstag','key':'donnerstag'},{'label':'Freitag','key':'freitag'}]]}",_pagination:!0}));y.storyName="Tabelle mit Paginierung",o.parameters=n({storySource:{source:`(args: any) => (
	<div>
		<kol-table {...args}></kol-table>
	</div>
)`}},o.parameters),s.parameters=n({storySource:{source:`() => (
	<div>
		<kol-table
			_caption="Beispieltabelle"
			_headers={{
				horizontal: [
					[
						{ label: 'Spalte 1', key: 'spalte1' },
						{ label: 'Spalte 2', key: 'spalte2' },
						{ label: 'Spalte 3', key: 'spalte3' },
					],
				],
			}}
			_data={[
				{ spalte1: 'Zelle 1', spalte2: 'Zelle 2', spalte3: 'Zelle 3' },
				{ spalte1: 'Zelle 1', spalte2: 'Zelle 2', spalte3: 'Zelle 3' },
				{ spalte1: 'Zelle 1', spalte2: 'Zelle 2', spalte3: 'Zelle 3' },
			]}
			class="hydrated"
		></kol-table>
	</div>
)`}},s.parameters),g.parameters=n({storySource:{source:`() => (
	<div>
		<kol-table
			_caption="\xD6ffnungszeiten"
			_data={
				[
					{
						stadtteil: 'Brackel',
						montag: '08:00 - 12:00<br/>14:00 - 16:00',
						dienstag: '08:00 - 12:00<br/>14:00 - 15:00',
						mittwoch: '08:00 - 12:00<br/>14:00 - 15:00',
						donnerstag: '08:00 - 12:00<br/>14:00 - 18:00',
						freitag: '08:00 - 12:00',
					},
					{
						stadtteil: 'Dorstfeld',
						montag: '09:00 - 12:00<br/>14:00 - 16:00',
						dienstag: '09:00 - 12:00<br/>14:00 - 15:00',
						mittwoch: '09:00 - 12:00<br/>14:00 - 15:00',
						donnerstag: '09:00 - 12:00<br/>14:00 - 18:00',
						freitag: '09:00 - 12:00',
					},
					{
						stadtteil: 'Aplerbeck',
						montag: '08:00 - 12:00<br/>14:00 - 16:00',
						dienstag: '08:00 - 12:00<br/>14:00 - 15:00',
						mittwoch: '08:00 - 12:00<br/>14:00 - 15:00',
						donnerstag: '08:00 - 12:00<br/>14:00 - 18:00',
						freitag: '08:00 - 12:00',
					},
					{
						stadtteil: 'Innenstadt Ost',
						montag: '07:00 - 12:00<br/>14:00 - 16:00',
						dienstag: '07:00 - 12:00<br/>14:00 - 15:00',
						mittwoch: '07:00 - 12:00<br/>14:00 - 15:00',
						donnerstag: '07:00 - 12:00<br/>14:00 - 18:00',
						freitag: '07:00 - 12:00<br/>13:00 - 16:00',
					},
					{
						stadtteil: 'Innenstadt West',
						montag: '07:00 - 12:00<br/>14:00 - 16:00',
						dienstag: '07:00 - 12:00<br/>14:00 - 15:00',
						mittwoch: '07:00 - 12:00<br/>14:00 - 15:00',
						donnerstag: '07:00 - 12:00<br/>14:00 - 18:00',
						freitag: '07:00 - 12:00<br/>13:00 - 16:00',
						/*render: (el, data) => {
			   el.innerHTML = \`<kol-badge _color="#ff0000" _label="NIX"></kol-badge>\`;
			 },*/
					},
				] as Zeiten[]
			}
			_headers={{
				horizontal: [
					[
						{ label: '', asTd: true },
						{ label: 'Tag', colSpan: 5 },
					],
					[
						{
							label: 'Stadtteil',
							key: 'stadtteil',
							textAlign: 'left',
							sort: (data: Zeiten[]) => {
								return data.sort((first, second) => {
									if (first.stadtteil < second.stadtteil) {
										return -1;
									}
									if (first.stadtteil > second.stadtteil) {
										return 1;
									}
									return 0;
								});
							},
						},
						{ label: 'Montag', key: 'montag', textAlign: 'center' },
						{ label: 'Dienstag', key: 'dienstag', textAlign: 'center' },
						{ label: 'Mittwoch', key: 'mittwoch', textAlign: 'center' },
						{ label: 'Donnerstag', key: 'donnerstag', textAlign: 'center' },
						{ label: 'Freitag', key: 'freitag', textAlign: 'center' },
					],
				],
			}}
			class="hydrated"
		></kol-table>
	</div>
)`}},g.parameters),d.parameters=n({storySource:{source:`() => (
	<div>
		<kol-table
			_caption="2 Horizontal Header mit Span, 2 Vertikal Header mit Span, Daten Horizontal (Row- und
              Col-Span)"
			_headers="{'horizontal':[[{'label':'','colSpan':2,'rowSpan':2,'asTd':true},{'label':'Q2','colSpan':2},{'label':'Juni','key':'juni','rowSpan':2},{'label':'Q3','colSpan':3}],[{'label':'April','key':'april'},{'label':'Mai','key':'mai'},{'label':'Juli','key':'juli'},{'label':'August','key':'august'},{'label':'September','key':'september'}]],'vertical':[[{'label':'Bayern','rowSpan':2},{'label':'Berlin','key':'berlin','colSpan':2},{'label':'Nordrhein-Westfalen','rowSpan':3}],[{'label':'M\xFCnchen','key':'m\xFCnchen'},{'label':'N\xFCrnberg','key':'n\xFCrnberg'},{'label':'Bonn','key':'bonn'},{'label':'D\xFCsseldorf','key':'d\xFCsseldorf'},{'label':'K\xF6ln','key':'k\xF6ln'}]]}"
			_data="[{'april':'97','mai':'99','juni':'100','juli':'101','august':'102','september':'105'},{'april':'11','mai':'13','juni':'13','juli':'13','august':'12','september':'12'},{'april':'86','mai':'85','juni':'87','juli':'88','august':'87','september':'90'},{'april':'11','mai':'12','juni':'12','juli':'11','august':'12','september':'12'},{'april':'42','mai':'41','juni':'42','juli':'43','august':'39','september':'42'},{'april':'100','mai':'99','juni':'98','juli':'99','august':'102','september':'109'}]"
		></kol-table>
	</div>
)`}},d.parameters),b.parameters=n({storySource:{source:`() => {
	setTimeout(() => {
		const TABLE_DATA = [
			{
				montag: 'Alex',
				dienstag: 'Hong',
				mittwoch: 'Kevin',
				donnerstag: 'Fabian',
				freitag: 'Alex',
				samstag: 'Kevin',
				sonntag: 'Hong',
			},
			{
				montag: 'Helena',
				dienstag: 'Fabian',
				mittwoch: 'Marie',
				donnerstag: 'Ben',
				freitag: 'Marcus',
				samstag: 'Alex',
				sonntag: 'Marcus',
			},
			{
				montag: 'Fabian',
				dienstag: 'Helena',
				mittwoch: 'Fabian',
				donnerstag: 'Maya',
				freitag: 'Ben',
				samstag: 'Alex',
				sonntag: 'Helena',
			},
			{
				montag: 'Hong',
				dienstag: 'Alex',
				mittwoch: 'Kevin',
				donnerstag: 'Maya',
				freitag: 'Fabian',
				samstag: 'Helena',
				sonntag: 'Alex',
			},
		];
		document.querySelector('kol-table#table-1')._headers = TABLE_NEW_HEADERS;
		document.querySelector('kol-table#table-1')._data = TABLE_DATA;
	}, 1000);
	return (
		<kol-table
			id="table-1"
			_caption="2 Header, Daten Horizontal, Sort and Render"
			_data="[{'montag': 'Alex', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}, {'montag': 'Helena', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Marcus'}, {'montag': 'Fabian', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}, {'montag': 'Hong', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}]"
			class="hydrated"
		></kol-table>
	);
}`}},b.parameters),u.parameters=n({storySource:{source:`() => {
	setTimeout(() => {
		const TABLE_DATA = [
			{
				montag: 'Alex',
				dienstag: 'Hong',
				mittwoch: 'Kevin',
				donnerstag: 'Fabian',
				freitag: 'Alex',
				samstag: 'Kevin',
				sonntag: 'Hong',
			},
			{
				montag: 'Helena',
				dienstag: 'Fabian',
				mittwoch: 'Marie',
				donnerstag: 'Ben',
				freitag: 'Marcus',
				samstag: 'Alex',
				sonntag: 'Marcus',
			},
			{
				montag: 'Fabian',
				dienstag: 'Helena',
				mittwoch: 'Fabian',
				donnerstag: 'Maya',
				freitag: 'Ben',
				samstag: 'Alex',
				sonntag: 'Helena',
			},
			{
				montag: 'Hong',
				dienstag: 'Alex',
				mittwoch: 'Kevin',
				donnerstag: 'Maya',
				freitag: 'Fabian',
				samstag: 'Helena',
				sonntag: 'Alex',
			},
		];
		document.querySelector('kol-table#table-2')._headers = {
			horizontal: [
				[
					{
						asTd: true,
						colSpan: 2,
					},
				].concat(TABLE_NEW_HEADERS.vertical[0]),
				// cols: [TABLE_NEW_HEADERS.horizontal[0].cols[0]].concat(TABLE_NEW_HEADERS.vertical[0].rows),
			],
			vertical: [
				[
					{
						...TABLE_NEW_HEADERS.horizontal[0][1],
						rowSpan: TABLE_NEW_HEADERS.horizontal[0][1].colSpan,
						colSpan: undefined,
					},
					{
						...TABLE_NEW_HEADERS.horizontal[0][2],
						rowSpan: TABLE_NEW_HEADERS.horizontal[0][2].colSpan,
						colSpan: undefined,
					},
				],
			].concat([TABLE_NEW_HEADERS.horizontal[1]]),
		};
		document.querySelector('kol-table#table-2')._data = TABLE_DATA;
	}, 1000);
	return (
		<kol-table
			id="table-2"
			_caption="2 Header, Daten Vertikal, Sort and Render"
			_data="[{'montag': 'Alex', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}, {'montag': 'Helena', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Marcus'}, {'montag': 'Fabian', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}, {'montag': 'Hong', 'dienstag': 'Marie', 'mittwoch': 'Kevin', 'donnerstag': 'Maya', 'freitag': 'Ben'}]"
		></kol-table>
	);
}`}},u.parameters),p.parameters=n({storySource:{source:`() => {
	setTimeout(() => {
		const DATA = [
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Alex', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Helena', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Marcus' },
			{ montag: 'Fabian', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
			{ montag: 'Hong', dienstag: 'Marie', mittwoch: 'Kevin', donnerstag: 'Maya', freitag: 'Ben' },
		];
		document.querySelector('#filter-table')._data = DATA;
		document.querySelector('#filter-input')._on = {
			onChange: (event) => {
				document.querySelector('#filter-table')._data = DATA.filter((tupel) => {
					const regExp = new RegExp(event.target.value, 'i');
					return (
						regExp.test(tupel.montag) ||
						regExp.test(tupel.dienstag) ||
						regExp.test(tupel.mittwoch) ||
						regExp.test(tupel.donnerstag) ||
						regExp.test(tupel.freitag)
					);
				});
			},
		};
	}, 1000);
	return (
		<div>
			<kol-input-text id="filter-input" _type="search">
				Filtern
			</kol-input-text>
			<kol-table
				id="filter-table"
				_caption="Tabelle + Filter"
				_headers="{'horizontal':[[{'label':'Montag','key':'montag'},{'label':'Dienstag','key':'dienstag'},{'label':'Mittwoch','key':'mittwoch'},{'label':'Donnerstag','key':'donnerstag'},{'label':'Freitag','key':'freitag'}]]}"
			></kol-table>
		</div>
	);
}`}},p.parameters),y.parameters=n({storySource:{source:`() => {
	setTimeout(() => {
		document.querySelector('kol-table#table-3')._data = TABLE_PAGED_DATA;
	}, 1000);
	return (
		<kol-table
			id="table-3"
			_caption="Nur Horizontal Header, Daten Horizontal, Pagination"
			_headers="{'horizontal':[[{'label':'Montag','key':'montag','width':'10em'},{'label':'Dienstag','key':'dienstag','width':'15em'},{'label':'Mittwoch','key':'mittwoch'},{'label':'Donnerstag','key':'donnerstag'},{'label':'Freitag','key':'freitag'}]]}"
			_pagination
		></kol-table>
	);
}`}},y.parameters);try{o.displayName="Standard",o.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/table/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:o.__docgenInfo,name:"Standard",path:"src/components/table/1-examples/autogen.wc.stories.tsx#Standard"})}catch(e){}}}]);
