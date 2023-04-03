"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4174],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),g=i,m=p["".concat(d,".").concat(g)]||p[g]||c[g]||r;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},33043:(e,n,t)=>{t.d(n,{_:()=>d});var a=t(72558),i=t(59496);const r=function(e,n,t,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${n}%2F${t}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:n,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:n,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:n,sample:t}=e;const[l,d]=(0,i.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},c={onSelect:(e,n)=>{switch(n){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:c,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(o,{url:r(s,n,t,p.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(o,{url:r(s,n,t,p.angular)})),i.createElement("div",null,"React"===l&&i.createElement(o,{url:r(s,n,t,p.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(o,{url:r(s,n,t,p.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(o,{url:r(s,n,t,p.webcomponent)})))}},75641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var a=t(15882),i=(t(59496),t(49613));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Label im Badge",id:"label-im-badge",level:3},{value:"Hintergrundfarbe des Badge",id:"hintergrundfarbe-des-badge",level:3},{value:"Anzeige eines Icon im Badge",id:"anzeige-eines-icon-im-badge",level:3},{value:"Position des Icon",id:"position-des-icon",level:3},{value:"Nur Icon anzeigen",id:"nur-icon-anzeigen",level:3},{value:"Schriftschnitt",id:"schriftschnitt",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:2},{value:"Badge als Aufz\xe4hlungszeichen verwenden",id:"badge-als-aufz\xe4hlungszeichen-verwenden",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mit ",(0,i.kt)("strong",{parentName:"p"},"Badges")," k\xf6nnen Sie bestimmte Informationen auf Ihrer Webseite optisch hervorheben.\nKoliBri bietet neben der Angabe der Hintergrundfarbe und automatischer Berechnung der Textfarbe auch die M\xf6glichkeit, einem Badge ein Icon und/oder einen anderen Schriftschnitt mitzugeben."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<kol-badge _label="Beispieltext" _color="#000000" _icon="home" _icon-align="right" style={{ fontWeight: \'600\' }}></kol-badge>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-badge",{_label:"Beispieltext",_color:"#000000",_icon:"home","_icon-align":"right"})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"label-im-badge"},"Label im Badge"),(0,i.kt)("p",null,"Der Text, der im Badge angezeigt werden soll, wird \xfcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},"_","label")," \xfcbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten.\nDas Element ",(0,i.kt)("inlineCode",{parentName:"p"},"<kol-badge></kol-badge>")," beinhaltet selbst keinen Text."),(0,i.kt)("h3",{id:"hintergrundfarbe-des-badge"},"Hintergrundfarbe des Badge"),(0,i.kt)("p",null,"Ein Badge, ohne weitere Angaben zur Hintergrundfarbe, wird standardm\xe4\xdfig mit hellgrauer Schriftfarbe auf schwarzem Hintergrund angezeigt. \xdcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},"_","color")," k\xf6nnen andere Hintergrundfarben gew\xe4hlt werden."),(0,i.kt)("p",null,"Die Angabe der gew\xfcnschten Hintergrundfarbe erfolgt in hexadezimaler Schreibweise, z.B. ",(0,i.kt)("strong",{parentName:"p"},"_",'color="#000000"')," f\xfcr schwarz."),(0,i.kt)("p",null,"Die Textfarbe wird automatisch als Kontrastfarbe zur gew\xe4hlten Hintergrundfarbe errechnet."),(0,i.kt)("h3",{id:"anzeige-eines-icon-im-badge"},"Anzeige eines Icon im Badge"),(0,i.kt)("p",null,"KoliBri stellt die komplette Bibliothek von ",(0,i.kt)("strong",{parentName:"p"},"Icofont")," zur Verf\xfcgung. Sie k\xf6nnen daher optional im Badge ein Icon aus Icofont anzeigen lassen. Bestimmen Sie das Icon \xfcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},"_",'icon="',(0,i.kt)("em",{parentName:"strong"},"Name des Icon"),'"'),"."),(0,i.kt)("p",null,"Eine \xdcbersicht \xfcber die zur Verf\xfcgung stehenden Icons in KoliBri finden Sie ",(0,i.kt)("a",{parentName:"p",href:"https://icofont.com/icons"},"hier")),(0,i.kt)("h3",{id:"position-des-icon"},"Position des Icon"),(0,i.kt)("p",null,"Das Icon kann zus\xe4tzlich entweder links oder rechts vom Text angezeigt werden. Verwenden Sie f\xfcr die Angabe der Ausgabeposition das Attribut ",(0,i.kt)("strong",{parentName:"p"},"_",'icon-align=""'),".\nAls Wert k\xf6nnen Sie ",(0,i.kt)("inlineCode",{parentName:"p"},'_icon-align="left"')," oder ",(0,i.kt)("inlineCode",{parentName:"p"},'_icon-align="right"')," angeben."),(0,i.kt)("h3",{id:"nur-icon-anzeigen"},"Nur Icon anzeigen"),(0,i.kt)("p",null,"Mit dem Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_icon-only"))," kann festgelegt werden, dass nur das mit dem Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_icon"))," gew\xe4hlte Icon angezeigt wird. Der Wert im Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_label"))," wird in diesem Fall ignoriert."),(0,i.kt)("h3",{id:"schriftschnitt"},"Schriftschnitt"),(0,i.kt)("p",null,"\xdcber Stylinganweisungen im Attribut ",(0,i.kt)("strong",{parentName:"p"},"style")," k\xf6nnen Sie den Schriftschnitt im Badge festlegen. Das Attribut ",(0,i.kt)("strong",{parentName:"p"},"style")," erwartet als Wert ein Objekt.\n",(0,i.kt)("inlineCode",{parentName:"p"},"style={{ fontWeight: '600' }}")),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Badges, um wichtige Informationen in unmittelbarer N\xe4he des jeweiligen Elements anzuzeigen."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Badges, um auf ge\xe4nderte Werte oder einen ge\xe4nderten Status aufmerksam zu machen."),(0,i.kt)("li",{parentName:"ul"},"Ein Badge weist den Benutzer darauf hin, dass etwas neu erzeugt oder aktualisiert wurde, z. B. ein \u201eungelesener Bericht\u201c oder eine Aktivit\xe4tsbenachrichtigung."),(0,i.kt)("li",{parentName:"ul"},"Behalten Sie in gleichen Anwendungsf\xe4llen immer die gleiche Position des Badges bei, um ein einheitliches Erscheinungsbild zu gew\xe4hrleisten.")),(0,i.kt)("h2",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("h3",{id:"badge-als-aufz\xe4hlungszeichen-verwenden"},"Badge als Aufz\xe4hlungszeichen verwenden"),(0,i.kt)("ul",{class:"m-0 p-0"},(0,i.kt)("li",{class:"flex gap-2"},(0,i.kt)("kol-badge",{_label:"1",_color:"#0747a6"}),(0,i.kt)("kol-heading",{_level:"2"},"Auswahl Anliegen")),(0,i.kt)("li",{class:"flex gap-2"},(0,i.kt)("kol-badge",{_label:"2",_color:"#0747a6"}),(0,i.kt)("kol-heading",{_level:"2"},"Auswahl Amtsstelle")),(0,i.kt)("li",{class:"flex gap-2"},(0,i.kt)("kol-badge",{_label:"3",_color:"#0747a6"}),(0,i.kt)("kol-heading",{_level:"2"},"Terminauswahl"))),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"F\xfcr die Einhaltung der Regeln zur Barrierefreiheit, ist ein optimaler Kontrast zwischen der Hintergrundfarbe und Textfarbe des Badge zwingend erforderlich. KoliBri bietet daher eine automatische Berechnung der Textfarbe aus der gew\xe4hlten Hintergrundfarbe heraus. M\xf6glich sind die Textfarben ",(0,i.kt)("strong",{parentName:"p"},"schwarz")," und ",(0,i.kt)("strong",{parentName:"p"},"wei\xdf"),", die in Abh\xe4ngigkeit zur Hintergrundfarbe ausgegeben werden."),(0,i.kt)("p",null,"Die zus\xe4tzliche Ausgabe eines ",(0,i.kt)("strong",{parentName:"p"},"Icon")," gew\xe4hrleistet, dass der Nutzer auch hier\xfcber die Art der Information erfassen kann."),(0,i.kt)("p",null,(0,i.kt)("kol-alert",{_type:"info"},"Eine explizite Angabe der Textfarbe ist nicht m\xf6glich.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_color")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_color")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Farbe des Hintergrundes bzw. der Schrift an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { backgroundColor: string; color: string; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'#000'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt einen Identifier eines Icons aus den Icofont's an. (",(0,i.kt)("a",{parentName:"td",href:"https://icofont.com/"},"https://icofont.com/"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"KoliBriHorizontalIcon & KoliBriVerticalIcon \\| string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob nur das Icon angezeigt wird."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Label-Text des Badges an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_smart-button")),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht einen Schalter ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (nur Icon-Only)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { _label: string; } & { _ariaControls?: string \\| undefined; _ariaLabel?: string \\| undefined; _icon?: Stringified<KoliBriIconProp> \\| undefined; _iconAlign?: PropAlignment \\| undefined; _iconOnly?: boolean \\| undefined; _role?: AlternativButtonLinkRole \\| undefined; _tabIndex?: number \\| undefined; _tooltipAlign?: PropAlignment \\| undefined; _ariaCurrent?: AriaCurrent \\| undefined; _ariaExpanded?: boolean \\| undefined; _ariaSelected?: boolean \\| undefined; _disabled?: boolean \\| undefined; _accessKey?: string \\| undefined; _id?: string \\| undefined; _on?: KoliBriButtonCallbacks<unknown> \\| undefined; _type?: KoliBriButtonType \\| undefined; _value?: unknown; _variant?: KoliBriButtonVariant \\| undefined; _customClass?: string \\| undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tooltip"},"kol-tooltip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./version"},"kol-version"))),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-span-wc"),(0,i.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-span-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-tooltip --\x3e kol-badge\n  kol-version --\x3e kol-badge\n  style kol-badge fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}l.isMDXComponent=!0;var o=t(33043);const d={title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",tags:["Badge","Beschreibung","Spezifikation","Beispiele"]},s=void 0,u={unversionedId:"components/badge",id:"components/badge",title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",source:"@site/docs/30-components/badge.mdx",sourceDirName:"30-components",slug:"/components/badge",permalink:"/docs/components/badge",draft:!1,tags:[{label:"Badge",permalink:"/docs/tags/badge"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",tags:["Badge","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Alert",permalink:"/docs/components/alert"},next:{title:"Breadcrumb",permalink:"/docs/components/breadcrumb"}},p={},c=[{value:"Beispiele",id:"beispiele",level:2},{value:"Einfache Badges",id:"einfache-badges",level:3},{value:"Badges mit Schalter",id:"badges-mit-schalter",level:3}],g={toc:c};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("h3",{id:"einfache-badges"},"Einfache Badges"),(0,i.kt)(o._,{component:"badge",sample:"basic",mdxType:"Configurator"}),(0,i.kt)("h3",{id:"badges-mit-schalter"},"Badges mit Schalter"),(0,i.kt)(o._,{component:"badge",sample:"button",mdxType:"Configurator"}))}m.isMDXComponent=!0}}]);