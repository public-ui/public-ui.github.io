"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3428],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:a,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33043:(e,t,n)=>{n.d(t,{_:()=>o});var r=n(72558),a=n(59496);const i=function(e,t,n,r,a){return void 0===a&&(a="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${a}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[l,o]=(0,a.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},u={onSelect:(e,t)=>{switch(t){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return a.createElement(r.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:u,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===l&&a.createElement(d,{url:i(s,t,n,m.react,"preview")})),a.createElement("div",null,"Angular"===l&&a.createElement(d,{url:i(s,t,n,m.angular)})),a.createElement("div",null,"React"===l&&a.createElement(d,{url:i(s,t,n,m.react)})),a.createElement("div",null,"Vue"===l&&a.createElement(d,{url:i(s,t,n,m.vue)})),a.createElement("div",null,"Web Component"===l&&a.createElement(d,{url:i(s,t,n,m.webcomponent)})))}},8364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(15882),a=(n(59496),n(49613));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Einfache Standard-Card",id:"einfache-standard-card",level:3},{value:"Titel der Card-Komponente",id:"titel-der-card-komponente",level:3},{value:"Gr\xf6\xdfe des Titels",id:"gr\xf6\xdfe-des-titels",level:3},{value:"Inhalt im Header-Bereich der Card-Komponente",id:"inhalt-im-header-bereich-der-card-komponente",level:3},{value:"Inhalt der Card-Komponente",id:"inhalt-der-card-komponente",level:3},{value:"Inhalt im Fu\xdf-Bereich der Card-Komponente",id:"inhalt-im-fu\xdf-bereich-der-card-komponente",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Einf\xfcgen weiterer KoliBri-Komponenten in die Card-Komponente",id:"einf\xfcgen-weiterer-kolibri-komponenten-in-die-card-komponente",level:4},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die ",(0,a.kt)("strong",{parentName:"p"},"Card"),"-Komponente an. Mit ihrer Hilfe k\xf6nnen Sie Ihre Inhalte sehr einfach strukturieren."),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Card"),"-Komponente besteht aus einem ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Titel-Bereich")),", einem ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Inhalts-Bereich"))," und einem ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Fu\xdf-Bereich")),"."),(0,a.kt)("p",null,"Der ",(0,a.kt)("strong",{parentName:"p"},"Titel-Bereich")," wird in einer gr\xf6\xdferen Schrift dargestellt. Der ",(0,a.kt)("strong",{parentName:"p"},"Inhalts-Bereich")," ist optisch durch eine horizontale Trennlinie unterhalb des Titel-Bereichs abgetrennt und wird in der Standardschrift ausgegeben.\nDer ",(0,a.kt)("strong",{parentName:"p"},"Fu\xdf-Bereich")," wird optional durch ein Attribut aktiviert und stellt dann Platz f\xfcr weitere Inhalte, z.B. eine ",(0,a.kt)("strong",{parentName:"p"},"Button"),"-Komponente bereit. Der Fu\xdf-Bereich ist optisch durch eine horizontale Trennlinie vom Inhalts-Bereich abgetrennt."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _heading="Testtitel" _has-footer _max-height="vh2">\n    <div slot="header">Text im Header-Bereich</div>\n    <div slot="content">\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos\n        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n    </div>\n    <div slot="footer">Weiterer Beispieltext im Fu\xdf-Bereich</div>\n</kol-card>\n')),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("kol-card",{_heading:"Testtitel","_has-footer":!0,"_max-height":"vh2"},(0,a.kt)("div",{slot:"header"},"Text im Header-Bereich"),(0,a.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,a.kt)("div",{slot:"footer"},"Weiterer Beispieltext im Fu\xdf-Bereich")),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("h3",{id:"einfache-standard-card"},"Einfache Standard-Card"),(0,a.kt)("p",null,"In der Standardansicht besteht eine ",(0,a.kt)("strong",{parentName:"p"},"Card")," aus einem Titel-Bereich, der ohne setzen des Attributs ",(0,a.kt)("strong",{parentName:"p"},"_","heading")," mit drei Punkten angezeigt wird, und einem leeren Inhalts-Bereich.\nDie horizontale Trennlinie zwischen beiden Bereichen setzt KoliBri automatisch."),(0,a.kt)("h3",{id:"titel-der-card-komponente"},"Titel der Card-Komponente"),(0,a.kt)("p",null,"Den Titel der Card bestimmen Sie durch Setzen des Attributs ",(0,a.kt)("strong",{parentName:"p"},"_",'heading="Ihr Titel"'),". Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nBeachten Sie, dass ",(0,a.kt)("strong",{parentName:"p"},"HTML-Code")," nicht erlaubt ist."),(0,a.kt)("h3",{id:"gr\xf6\xdfe-des-titels"},"Gr\xf6\xdfe des Titels"),(0,a.kt)("p",null,"Der ",(0,a.kt)("strong",{parentName:"p"},"Titel")," der Card kann als H1-H6 ausgegeben werden. Die Gr\xf6\xdfe wird \xfcber das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_level"),"\xfcbergeben. Erlaubt sind die Werte 1 - 6."),(0,a.kt)("h3",{id:"inhalt-im-header-bereich-der-card-komponente"},"Inhalt im Header-Bereich der Card-Komponente"),(0,a.kt)("p",null,"Den Inhalt im Header-Bereich der Card bestimmen Sie durch Einf\xfcgen eines ",(0,a.kt)("strong",{parentName:"p"},"Inhalts-Containers")," innerhalb des ",(0,a.kt)("inlineCode",{parentName:"p"},"<kol-card></kol-card>-Elements"),". Der Container muss als Attribut ",(0,a.kt)("strong",{parentName:"p"},'slot="header"')," enthalten. Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nAuch ",(0,a.kt)("strong",{parentName:"p"},"HTML-Code")," k\xf6nnen sie hier einf\xfcgen. Dieser wird ausgewertet und anschlie\xdfend als normaler Text ausgegeben. Sie k\xf6nnen im Fu\xdf-Bereich aber auch andere KoliBri-Komponenten einf\xfcgen, wie z.B. die ",(0,a.kt)("strong",{parentName:"p"},"Button"),"-Komponente."),(0,a.kt)("p",null,"Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xf6nnen, es aber empfohlen wird ein ",(0,a.kt)("inlineCode",{parentName:"p"},"<div></div>"),"-Tag zu verwenden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _heading="Beispiel" _level="1">\n    <div slot="header">Text im Header-Bereich</div>\n</kol-card>\n')),(0,a.kt)("h3",{id:"inhalt-der-card-komponente"},"Inhalt der Card-Komponente"),(0,a.kt)("p",null,"Den Inhalt der Card bestimmen Sie durch Einf\xfcgen eines ",(0,a.kt)("strong",{parentName:"p"},"Inhalts-Containers")," innerhalb des ",(0,a.kt)("inlineCode",{parentName:"p"},"<kol-card></kol-card>-Elements"),". Der Container muss als Attribut ",(0,a.kt)("strong",{parentName:"p"},'slot="content"')," enthalten. Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nAuch ",(0,a.kt)("strong",{parentName:"p"},"HTML-Code")," k\xf6nnen sie hier einf\xfcgen. Dieser wird ausgewertet und anschlie\xdfend als normaler Text ausgegeben."),(0,a.kt)("p",null,"Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xf6nnen, es aber empfohlen wird ein ",(0,a.kt)("inlineCode",{parentName:"p"},"<div></div>"),"-Tag zu verwenden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _heading="Beispiel" _level="1">\n    <div slot="content">Text im Inhalts-Bereich</div>\n</kol-card>\n')),(0,a.kt)("h3",{id:"inhalt-im-fu\xdf-bereich-der-card-komponente"},"Inhalt im Fu\xdf-Bereich der Card-Komponente"),(0,a.kt)("p",null,"Den Inhalt im Fu\xdf-Bereich der Card bestimmen Sie durch Einf\xfcgen eines ",(0,a.kt)("strong",{parentName:"p"},"Inhalts-Containers")," innerhalb des ",(0,a.kt)("inlineCode",{parentName:"p"},"<kol-card></kol-card>-Elements"),". Der Container muss als Attribut ",(0,a.kt)("strong",{parentName:"p"},'slot="footer"')," enthalten. Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nAuch ",(0,a.kt)("strong",{parentName:"p"},"HTML-Code")," k\xf6nnen sie hier einf\xfcgen. Dieser wird ausgewertet und anschlie\xdfend als normaler Text ausgegeben. Sie k\xf6nnen im Fu\xdf-Bereich aber auch andere KoliBri-Komponenten einf\xfcgen, wie z.B. die ",(0,a.kt)("strong",{parentName:"p"},"Button"),"-Komponente."),(0,a.kt)("p",null,"Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xf6nnen, es aber empfohlen wird ein ",(0,a.kt)("inlineCode",{parentName:"p"},"<div></div>"),"-Tag zu verwenden."),(0,a.kt)("p",null,"Wenn Sie den Fu\xdf-Bereich der Card-Komponente nutzen m\xf6chten, achten Sie darauf das Attribut ",(0,a.kt)("strong",{parentName:"p"},"_","has-footer")," im Element ",(0,a.kt)("inlineCode",{parentName:"p"},"<kol-card>")," zu setzen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _heading="Beispiel" _level="1" _has-footer>\n    <div slot="footer">Text im Fu\xdf-Bereich</div>\n</kol-card>\n')),(0,a.kt)("h3",{id:"best-practices"},"Best practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,a.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um in sich geschlossene Themenbereiche optisch zu kapseln."),(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,a.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um Ihre Inhalte semantisch zu strukturieren."),(0,a.kt)("li",{parentName:"ul"},"Vermeiden Sie, zu viele Cards auf einer Inhaltsseite zu verwenden."),(0,a.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Inhalte innerhalb der Card-Komponente zu platzieren, wenn sich die zugeh\xf6rigen Aktions-Elemente (Buttons, Links, etc.) nicht innerhalb der gleichen Card befinden.")),(0,a.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,a.kt)("p",null,"Hierzu sind unter ",(0,a.kt)("strong",{parentName:"p"},"*","Beispiele")," einige exemplarische Anwendungsf\xe4lle dargestellt.."),(0,a.kt)("h4",{id:"einf\xfcgen-weiterer-kolibri-komponenten-in-die-card-komponente"},"Einf\xfcgen weiterer KoliBri-Komponenten in die Card-Komponente"),(0,a.kt)("p",null,"Es ist auch m\xf6glich andere Komponenten der KoliBri-Bibliothek innerhalb der ",(0,a.kt)("strong",{parentName:"p"},"Card"),"-Komponente zu verwenden. Hierzu ist unter ",(0,a.kt)("strong",{parentName:"p"},"Beispiele")," ein exemplarisches"),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_hasFooter")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_has-footer")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Card einen Footer-Bereich hat."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_heading")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_heading")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die \xdcberschrift der Card an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_headline")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_headline")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"text-red-500"},(0,a.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Property _heading.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Gibt die \xdcberschrift der Card an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen H-Level von 1 bis 6 die \xdcberschrift hat."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0 \\| 1 \\| 2 \\| 3 \\| 4 \\| 5 \\| 6 \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"))))),(0,a.kt)("h2",{id:"slots"},"Slots"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Slot"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"content"')),(0,a.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich der Card.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"footer"')),(0,a.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Fu\xdfbereich der Card.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"header"')),(0,a.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Kopfbereich unterhalb der \xdcberschrift der Card.")))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"depends-on"},"Depends on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc"))),(0,a.kt)("h3",{id:"graph"},"Graph"),(0,a.kt)("mermaid",{value:"graph TD;\n  kol-card --\x3e kol-heading-wc\n  style kol-card fill:#f9f,stroke:#333,stroke-width:4px"}),(0,a.kt)("hr",null))}l.isMDXComponent=!0;var d=n(33043);const o={title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},s=void 0,p={unversionedId:"components/card",id:"components/card",title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",source:"@site/docs/30-components/card.mdx",sourceDirName:"30-components",slug:"/components/card",permalink:"/docs/components/card",draft:!1,tags:[{label:"Card",permalink:"/docs/tags/card"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/components/button"},next:{title:"Details",permalink:"/docs/components/details"}},m={},u=[{value:"Beispiele",id:"beispiele",level:2},{value:"Card",id:"card",level:3},{value:"Best\xe4tigingscard",id:"best\xe4tigingscard",level:3},{value:"Cards im Grid-Flu\xdf",id:"cards-im-grid-flu\xdf",level:3},{value:"Card als Artikelliste",id:"card-als-artikelliste",level:3}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)("h3",{id:"card"},"Card"),(0,a.kt)(d._,{component:"card",sample:"basic",mdxType:"Configurator"}),(0,a.kt)("h3",{id:"best\xe4tigingscard"},"Best\xe4tigingscard"),(0,a.kt)(d._,{component:"card",sample:"confirm",mdxType:"Configurator"}),(0,a.kt)("h3",{id:"cards-im-grid-flu\xdf"},"Cards im Grid-Flu\xdf"),(0,a.kt)(d._,{component:"card",sample:"flex",mdxType:"Configurator"}),(0,a.kt)("h3",{id:"card-als-artikelliste"},"Card als Artikelliste"),(0,a.kt)(d._,{component:"card",sample:"selection",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);