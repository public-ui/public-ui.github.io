"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[57776],{10316:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>h,toc:()=>b});var l=i(76776),t=i(108);function r(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Mit ",(0,l.jsx)(n.strong,{children:"Badges"})," k\xf6nnen Sie bestimmte Informationen auf Ihrer Webseite optisch hervorheben.\nKoliBri bietet neben der Angabe der Hintergrundfarbe und automatischer Berechnung der Textfarbe auch die M\xf6glichkeit, einem Badge ein Icon und/oder einen anderen Schriftschnitt mitzugeben."]}),"\n",(0,l.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,l.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<kol-badge _label="Beispieltext" _color="#b7e4b4" _icons="codicon codicon-home"></kol-badge>\n<kol-badge _label="Beispieltext" _color="#0c8703" _icons="codicon codicon-home"></kol-badge>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,l.jsx)("kol-badge",{_label:"Beispieltext",_color:"#b7e4b4",_icons:"codicon codicon-home"}),"\n",(0,l.jsx)("kol-badge",{_label:"Beispieltext",_color:"#0c8703",_icons:"codicon codicon-home"}),"\n",(0,l.jsx)(n.h2,{id:"kontext-f\xfcr-badges",children:"Kontext f\xfcr Badges"}),"\n",(0,l.jsx)(n.p,{children:"Um die Benutzerfreundlichkeit und die Zug\xe4nglichkeit zu verbessern, sollten Badges\nimmer im Kontext einer aussagekr\xe4ftigen \xdcberschrift verwendet werden."}),"\n",(0,l.jsx)(n.p,{children:"Stellen Sie sicher, dass jede Gruppe von Badges durch eine \xdcberschrift erg\xe4nzt wird, die den gemeinsamen Kontext oder das Thema beschreibt. Vermeiden Sie es, Badges ohne solche beschreibenden \xdcberschriften zu pr\xe4sentieren."}),"\n",(0,l.jsx)(n.h3,{id:"beispiel-1",children:"Beispiel"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<kol-heading _label="Beispiel\xfcberschrift" _level="2"></kol-heading>\n<div>\n\t<kol-badge _label="Beispieltext" _color="#b7e4b4" _icons="codicon codicon-home"></kol-badge>\n\t<kol-badge _label="Beispieltext" _color="#0c8703" _icons="codicon codicon-home"></kol-badge>\n</div>\n'})}),"\n",(0,l.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,l.jsx)(n.h3,{id:"label-im-badge",children:"Label im Badge"}),"\n",(0,l.jsxs)(n.p,{children:["Der Text, der im Badge angezeigt werden soll, wird \xfcber das Attribut ** _label** \xfcbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten.\nDas Element ",(0,l.jsx)(n.code,{children:"<kol-badge></kol-badge>"})," beinhaltet selbst keinen Text."]}),"\n",(0,l.jsx)(n.h3,{id:"hintergrundfarbe-des-badge",children:"Hintergrundfarbe des Badge"}),"\n",(0,l.jsx)(n.p,{children:"Ein Badge, ohne weitere Angaben zur Hintergrundfarbe, wird standardm\xe4\xdfig mit hellgrauer Schriftfarbe auf schwarzem Hintergrund angezeigt. \xdcber das Attribut ** _color** k\xf6nnen andere Hintergrundfarben gew\xe4hlt werden."}),"\n",(0,l.jsx)(n.p,{children:'Die Angabe der gew\xfcnschten Hintergrundfarbe erfolgt in hexadezimaler Schreibweise, z.B. ** _color="#000000"** f\xfcr schwarz.'}),"\n",(0,l.jsx)(n.p,{children:"Die Textfarbe wird automatisch als Kontrastfarbe zur gew\xe4hlten Hintergrundfarbe errechnet."}),"\n",(0,l.jsx)(n.h3,{id:"icons",children:"Icons"}),"\n",(0,l.jsxs)(n.p,{children:["Ein Icon (",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_icon"})}),") kann entweder als String angegeben werden, oder als Objekt.\nAls String \xfcbergeben Sie die Iconklasse (z.B.: ",(0,l.jsx)(n.code,{children:'_icons="codicon codicon-home'}),"), das Icon wird links vom Text angezeigt.\nDas Objekt ist vom Typ ",(0,l.jsx)(n.code,{children:"KoliBriAllIcon"}),", kann also einen oder mehrere der Schl\xfcssel ",(0,l.jsx)(n.code,{children:"top"}),", ",(0,l.jsx)(n.code,{children:"right"}),", ",(0,l.jsx)(n.code,{children:"bottom"})," und ",(0,l.jsx)(n.code,{children:"left"})," besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ ",(0,l.jsx)(n.code,{children:"KoliBriCustomIcon"}),", welches aus ",(0,l.jsx)(n.code,{children:"icon"})," (String, siehe oben) und ",(0,l.jsx)(n.code,{children:"style"})," (optional, Styleobjekt) besteht."]}),"\n",(0,l.jsx)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"\xdcbersicht Codicons"}),"\n",(0,l.jsx)(n.h3,{id:"schriftschnitt",children:"Schriftschnitt"}),"\n",(0,l.jsx)(n.p,{children:"Der Schriftschnitt wird vom Host \xfcbernommen, kann also via CSS von au\xdfen gesetzt werden."}),"\n",(0,l.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Verwenden Sie Badges, um wichtige Informationen in unmittelbarer N\xe4he des jeweiligen Elements anzuzeigen."}),"\n",(0,l.jsx)(n.li,{children:"Verwenden Sie Badges, um auf ge\xe4nderte Werte oder einen ge\xe4nderten Status aufmerksam zu machen."}),"\n",(0,l.jsx)(n.li,{children:"Ein Badge weist den Benutzer darauf hin, dass etwas neu erzeugt oder aktualisiert wurde, z. B. ein \u201eungelesener Bericht\u201c oder eine Aktivit\xe4tsbenachrichtigung."}),"\n",(0,l.jsx)(n.li,{children:"Behalten Sie in gleichen Anwendungsf\xe4llen immer die gleiche Position des Badges bei, um ein einheitliches Erscheinungsbild zu gew\xe4hrleisten."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,l.jsx)(n.h3,{id:"badge-als-aufz\xe4hlungszeichen-verwenden",children:"Badge als Aufz\xe4hlungszeichen verwenden"}),"\n",(0,l.jsxs)("ul",{className:"m-0 p-0",children:[(0,l.jsxs)("li",{className:"flex gap-2",children:[(0,l.jsx)("kol-badge",{_label:"1",_color:"#0747a6"}),(0,l.jsx)("kol-heading",{_level:"2",_label:"Auswahl Anliegen"})]}),(0,l.jsxs)("li",{className:"flex gap-2",children:[(0,l.jsx)("kol-badge",{_label:"2",_color:"#0747a6"}),(0,l.jsx)("kol-heading",{_level:"2",_label:"Auswahl Amtsstelle"})]}),(0,l.jsxs)("li",{className:"flex gap-2",children:[(0,l.jsx)("kol-badge",{_label:"3",_color:"#0747a6"}),(0,l.jsx)("kol-heading",{_level:"2",_label:"Terminauswahl"})]})]}),"\n",(0,l.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,l.jsxs)(n.p,{children:["F\xfcr die Einhaltung der Regeln zur Barrierefreiheit, ist ein optimaler Kontrast zwischen der Hintergrundfarbe und Textfarbe des Badge zwingend erforderlich. KoliBri bietet daher eine automatische Berechnung der Textfarbe aus der gew\xe4hlten Hintergrundfarbe heraus. M\xf6glich sind die Textfarben ",(0,l.jsx)(n.strong,{children:"schwarz"})," und ",(0,l.jsx)(n.strong,{children:"wei\xdf"}),", die in Abh\xe4ngigkeit zur Hintergrundfarbe ausgegeben werden."]}),"\n",(0,l.jsxs)(n.p,{children:["Die zus\xe4tzliche Ausgabe eines ",(0,l.jsx)(n.strong,{children:"Icon"})," gew\xe4hrleistet, dass der Nutzer auch hier\xfcber die Art der Information erfassen kann."]}),"\n",(0,l.jsx)("kol-alert",{_type:"info",children:"Eine explizite Angabe der Textfarbe ist nicht m\xf6glich."}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_color"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_color"})}),(0,l.jsx)(n.td,{children:"Defines the backgroundColor and foregroundColor."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})," | ",(0,l.jsx)(n.code,{children:"{ backgroundColor: string; foregroundColor: Stringified<CharacteristicColors>; }"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'#000'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_icons"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_icons"})}),(0,l.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,l.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"KoliBriHorizontalIcons & KoliBriVerticalIcons"})," | ",(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_label"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_smartButton"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_smart-button"})}),(0,l.jsx)(n.td,{children:"Allows to add a button with an arbitrary action within the element (_hide-label only)."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})," | ",(0,l.jsx)(n.code,{children:"{ _label: string; } & { _tabIndex?: number"})," | ",(0,l.jsx)(n.code,{children:"undefined; _value?: Stringified<StencilUnknown>; _ariaExpanded?: boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined; _role?: AlternativeButtonLinkRolePropType"})," | ",(0,l.jsx)(n.code,{children:"undefined; _ariaControls?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; _ariaSelected?: boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined; _on?: ButtonCallbacksPropType<StencilUnknown>"})," | ",(0,l.jsx)(n.code,{children:'undefined; _type?: "button"'})," | ",(0,l.jsx)(n.code,{children:'"reset"'})," | ",(0,l.jsx)(n.code,{children:'"submit"'})," | ",(0,l.jsx)(n.code,{children:'undefined; _variant?: "primary"'})," | ",(0,l.jsx)(n.code,{children:'"secondary"'})," | ",(0,l.jsx)(n.code,{children:'"normal"'})," | ",(0,l.jsx)(n.code,{children:'"tertiary"'})," | ",(0,l.jsx)(n.code,{children:'"danger"'})," | ",(0,l.jsx)(n.code,{children:'"ghost"'})," | ",(0,l.jsx)(n.code,{children:'"custom"'})," | ",(0,l.jsx)(n.code,{children:"undefined; _customClass?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; _disabled?: boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined; _hideLabel?: boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined; _icons?: IconsPropType"})," | ",(0,l.jsx)(n.code,{children:"undefined; _id?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; _name?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; _syncValueBySelector?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; _tooltipAlign?: AlignPropType"})," | ",(0,l.jsx)(n.code,{children:"undefined; _accessKey?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; }"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,l.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}var a=i(37704),d=i(54592);const o={title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",tags:["Badge","Beschreibung","Spezifikation","Beispiele"]},c=void 0,h={id:"components/badge",title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",source:"@site/docs/30-components/badge.mdx",sourceDirName:"30-components",slug:"/components/badge",permalink:"/en/docs/next/components/badge",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Badge",permalink:"/en/docs/next/tags/badge"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/next/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/next/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",tags:["Badge","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Avatar",permalink:"/en/docs/next/components/avatar"},next:{title:"Breadcrumb",permalink:"/en/docs/next/components/breadcrumb"}},u={},b=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Kontext f\xfcr Badges",id:"kontext-f\xfcr-badges",level:2},{value:"Beispiel",id:"beispiel-1",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Label im Badge",id:"label-im-badge",level:3},{value:"Hintergrundfarbe des Badge",id:"hintergrundfarbe-des-badge",level:3},{value:"Icons",id:"icons",level:3},{value:"Schriftschnitt",id:"schriftschnitt",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:2},{value:"Badge als Aufz\xe4hlungszeichen verwenden",id:"badge-als-aufz\xe4hlungszeichen-verwenden",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Einfache Badges",id:"einfache-badges",level:3},{value:"Badges mit Schalter",id:"badges-mit-schalter",level:3}];function g(e){const n={h2:"h2",h3:"h3",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{}),"\n",(0,l.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(d.o,{component:"badge"}),"\n",(0,l.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,l.jsx)(n.h3,{id:"einfache-badges",children:"Einfache Badges"}),"\n",(0,l.jsx)(a.Q,{component:"badge",sample:"basic"}),"\n",(0,l.jsx)(n.h3,{id:"badges-mit-schalter",children:"Badges mit Schalter"}),"\n",(0,l.jsx)(a.Q,{component:"badge",sample:"button"})]})}function x(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>o});var l=i(64992),t=i(80924),r=i(76776);const s=function(e,n,i,l,t){return void 0===t&&(t="editor"),`${e}&module=${l}&initialpath=%23%2F${n}%2F${i}&view=${t}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(l.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,c]=(0,t.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,b={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},g=`/sample-react/#/${n}/${i}?hideMenus`,x={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(l._,{className:"w-full",_label:"Code-Beispiel",_on:x,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===o&&(0,r.jsx)("iframe",{src:g,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===o&&(0,r.jsx)(d,{url:s(h,n,i,b.angular)})}),(0,r.jsx)("div",{children:"React"===o&&(0,r.jsx)(d,{url:s(h,n,i,b.react)})}),(0,r.jsx)("div",{children:"Vue"===o&&(0,r.jsx)(d,{url:s(h,n,i,b.vue)})}),(0,r.jsx)("div",{children:"Web Component"===o&&(0,r.jsx)(d,{url:s(h,n,i,b.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>v});var l=i(592),t=i(64992),r=i(80924),s=i(73700),a=i(76776);function d(e){const{label:n,name:i,update:l,value:s}=e;return(0,r.useEffect)((()=>{s||l(i,"#000000")}),[]),(0,a.jsx)(t.eK,{_label:"",_on:{onInput:(e,n)=>l(i,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:l}=e,[s,d]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[b,g]=(0,r.useState)("");let x=!1,p=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(x=!0,p=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(x=!0,p=!0)),(0,r.useEffect)((()=>{if(!s||o||h||b){const e={};s&&(e.left=`codicon codicon-${s}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),b&&(e.bottom=`codicon codicon-${b}`),Object.keys(e).length&&l(n.name,JSON.stringify(e))}else l(n.name,`codicon codicon-${s}`)}),[s,o,h,b]);const j=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,x?(0,a.jsx)(t.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",p?(0,a.jsx)(t.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",m?(0,a.jsx)(t.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,a.jsx)(t.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>g(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:l,update:r,value:s}=e,d=[];function o(e){return{label:e,value:e}}return l.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...l.filter((e=>"undefined"!==e)).map(o))):d.push(...l.filter((e=>"undefined"!==e)).map(o)),(0,a.jsx)(t.qy,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onInput:(e,i)=>r(n,i[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:l}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(t.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(d,{name:n.name,label:r,update:i,value:l});case"_icons":return(0,a.jsx)(o,{attribute:n,label:r,update:i,value:l});default:switch(s){case"string":return(0,a.jsx)(t.Uh,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(t.QL,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(t.Q7,{className:"my-2",_checked:!0===l,_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:n.name,types:e,update:i,value:l}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,l]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(63136),b=i(28256),g=i(39452),x=i.n(g);function p(e){const{tag:n,params:i}=e,l=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let t="";const s=(0,r.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],l=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${l}"`+i.substring(n)}else e+=`<div slot="${l}">${i}</div>`})),e}),[i]),d=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,a]of d)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}t+=e}const o=`<kol-${n}${t}>${s}</kol-${n}>`;let c;try{c=(0,b.format)(o,{plugins:[x()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),l={abbr:t.s1,accordion:t.IP,alert:t.mW,avatar:t.aq,badge:t.cX,breadcrumb:t.If,button:t.qC,"button-group":t.Os,"button-link":t.u_,card:t.Yh,details:t.Si,form:t.OO,heading:t.ch,icon:t.SA,image:t.iu,"indented-text":t.MV,"input-checkbox":t.Q7,"input-color":t.eK,"input-date":t.QZ,"input-email":t.kN,"input-file":t.Ex,"input-number":t.QL,"input-password":t.EH,"input-radio":t.wJ,"input-range":t.Ef,"input-text":t.Uh,kolibri:t.aY,link:t.GQ,"link-button":t._k,"link-group":t.O_,logo:t.ae,modal:t.cT,nav:t.Y4,pagination:t.kj,progress:t.O0,quote:t.SY,select:t.qy,"skip-nav":t.Ig,spin:t.kP,"split-button":t.a,symbol:t.OM,table:t.Y9,tabs:t._,textarea:t.DG,version:t.k1}[e.tag];return l?(0,a.jsx)(l,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:l,value:t}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:t})]})}const j=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(l.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const l=`slot-${n.name||"default"}`,t=_[i]?.[l];t&&(e[i][l]=t)}))})),e}()),[d,o]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!l.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!n[d]?._label&&u("_label","Label-Text");!!l.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!n[d]?._heading&&u("_heading","Heading-Text")}),[d]);const c=(0,r.useMemo)((()=>n[d]||{}),[n,d]);function u(e,n){i((i=>{const l={...i[d],[e]:n,defaultValues:i[d].defaultValues.filter((n=>n!==e))};return{...i,[d]:l}}))}const b=Object.values(l.Q).find((e=>e.name===`kol-${d}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(t._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(m,{tag:d,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(p,{params:c,tag:d})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(t.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[b&&b.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!j.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),b&&0===b.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(t.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[b&&b.slots.map((e=>(0,a.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),b&&0===b.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);