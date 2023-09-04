import {TagName} from "@site/src/components/LiveEditorCompact/types";

const demoValues: Partial<Record<TagName, Record<string, string>>> = {
	'tabs': {
		_tabs: `[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]`,
	},
	'breadcrumb': {
		_links: `[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]`,
	},
	'form': {
		'_required-text': 'Bitte alle Felder ausfüllen.',
	},
	'image': {
		_src: 'https://placehold.co/100x100/cc006e/white',
	},
	'link-group': {
		_links: `[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]`,
	},
	'nav': {
		_links: `[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]`,
	},
	'pagination': {
		_total: '100',
		_page: '6',
	},
	'quote': {
		_quote: 'Hello World',
	},
	'select': {
		_options: `[{'label':'Herr','value':0},{'label':'Frau','value':1}]`,
	},
	'skip-nav': {
		_links: `[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]`,
	},
	'table': {
		_headers: `{"horizontal":[[{"label":"Montag","key":"montag"}]]}`,
		_data: `[{"montag":"Zelle1"},{"montag":"Zelle2"}]`,
		_pagination:`{"page":2}`,
	}
}

export default demoValues;

