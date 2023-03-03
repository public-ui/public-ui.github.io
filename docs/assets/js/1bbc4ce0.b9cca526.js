"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7301],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),m=a,c=k["".concat(d,".").concat(m)]||k[m]||s[m]||l;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70816:(e,t,n)=>{n.d(t,{_:()=>d});var r=n(56444),a=n(59496);const l=function(e,t,n,r,a){return void 0===a&&(a="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${a}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[i,d]=(0,a.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,k={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},s={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return a.createElement(r.UD,{_ariaLabel:"Code-Beispiel",_on:s,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===i&&a.createElement(o,{url:l(p,t,n,k.react,"preview")})),a.createElement("div",null,"Angular"===i&&a.createElement(o,{url:l(p,t,n,k.angular)})),a.createElement("div",null,"React"===i&&a.createElement(o,{url:l(p,t,n,k.react)})),a.createElement("div",null,"Vue"===i&&a.createElement(o,{url:l(p,t,n,k.vue)})),a.createElement("div",null,"Web Component"===i&&a.createElement(o,{url:l(p,t,n,k.webcomponent)})))}},4946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>c,frontMatter:()=>d,metadata:()=>u,toc:()=>s});var r=n(15882),a=(n(59496),n(49613));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Links",id:"links",level:3},{value:"\xdcberschrift",id:"\xfcberschrift",level:3},{value:"Ausrichtung",id:"ausrichtung",level:3},{value:"List-Style-Type",id:"list-style-type",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"LinkGroup innerhalb eines Flie\xdftextes",id:"linkgroup-innerhalb-eines-flie\xdftextes",level:4},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"CSS Custom Properties",id:"css-custom-properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"LinkGroup"),"-Komponente bildet einen umfassenden Container f\xfcr eine listenartige, vertikale oder horizontale Darstellung von Links. Sie rendert eine auf Barrierefreiheit optimierte Liste von Links, die als Text, als Icon oder auch in Kombination ausgegeben werden kann. M\xf6glich ist auch die Ausgabe von versteckten Links."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<kol-link-group\n    _aria-label=\"Einfache LinkGroup\"\n    _caption=\"\xdcberschrift der LinkGroup\"\n    _links=\"[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]\"\n    _list-style-type=\"disc\"\n    _orientation=\"'vertical\"\n></kol-link-group>\n")),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,(0,a.kt)("kol-link-group",{"_aria-label":"Einfache LinkGroup",_caption:"\xdcberschrift der LinkGroup",_links:"[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]","_list-style-type":"disc",_orientation:"'vertical"})),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("h3",{id:"links"},"Links"),(0,a.kt)("p",null,"Die auszugebenden Links werden als JSON-Objekt an das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_links")," \xfcbergeben."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"[ { _label: 'Link 1', _href: 'https://www.w3.org' }, { _label: 'Link 2', _href: 'https://www.w3.org' }, { _label: 'Link 3', _href: 'https://www.w3.org' }, ];\n")),(0,a.kt)("p",null,"Die Konstruktion der einzelnen ",(0,a.kt)("strong",{parentName:"p"},"Links"),", die innerhalb der JSON-Struktur \xfcber das Attribut ",(0,a.kt)("strong",{parentName:"p"},"_","links")," \xfcbergeben wird, ist im Abschnitt ",(0,a.kt)("strong",{parentName:"p"},"Links")," beschrieben."),(0,a.kt)("h3",{id:"\xfcberschrift"},"\xdcberschrift"),(0,a.kt)("p",null,"Die \xdcberschrift der LinkGroup wird \xfcber das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_caption")," \xfcbergeben."),(0,a.kt)("h3",{id:"ausrichtung"},"Ausrichtung"),(0,a.kt)("p",null,"\xdcber das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_orientation")," kann die Ausrichtung der LinkGroup bestimmt werden. Standardwert ist ",(0,a.kt)("inlineCode",{parentName:"p"},'_orientation="vertical"'),". F\xfcr eine horizontale Anzeige den Wert ",(0,a.kt)("inlineCode",{parentName:"p"},"horizontal")," verwenden."),(0,a.kt)("h3",{id:"list-style-type"},"List-Style-Type"),(0,a.kt)("p",null,"\xdcber das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_list-style-type")," kann bestimmt werden, mit welchem Symbol die einzelnen Zeilen der Group dargestellt werden sollen. Es stehen vier M\xf6glichkeiten zur Auswahl."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"circle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"square")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"none"))),(0,a.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,a.kt)("h4",{id:"linkgroup-innerhalb-eines-flie\xdftextes"},"LinkGroup innerhalb eines Flie\xdftextes"),(0,a.kt)("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",(0,a.kt)("p",null,(0,a.kt)("kol-link-group",{"_aria-label":"LinkGroup innerhalb eines Flie\xdftextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"})),(0,a.kt)("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis\nnemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.")),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Taste"),(0,a.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Tab")),(0,a.kt)("td",{parentName:"tr",align:null},"Fokussiert das erste Element der LinkGroup.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Enter")),(0,a.kt)("td",{parentName:"tr",align:null},"Ruft den hinterlegten Link auf.")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_heading")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_heading")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die optionale \xdcberschrift zur Link-Gruppe an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die geordnete Liste der Seitenhierarchie in Links an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0 \\| 1 \\| 2 \\| 3 \\| 4 \\| 5 \\| 6 \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_links")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_links")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die geordnete Liste der Seitenhierarchie in Links an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"NavLinkProps[] \\| string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_listStyleType")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_list-style-type")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt den List-Style-Typen f\xfcr ungeordnete Listen aus. Wird bei horizontalen LinkGroups als Trenner verwendet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"circle" \\| "decimal" \\| "decimal-leading-zero" \\| "disc" \\| "lower-alpha" \\| "lower-greek" \\| "lower-latin" \\| "lower-roman" \\| "none" \\| "square" \\| "upper-alpha" \\| "upper-latin" \\| "upper-roman" \\| undefined')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_ordered")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_ordered")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"text-red-500"},(0,a.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Wird mittels der Property _list-style-type automatisch gesteuert. Gibt an, ob eine Ordered- oder eine Unordered-List verwendet werden soll.",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die Ausrichtung der LinkList an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"horizontal" \\| "vertical" \\| undefined')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'vertical'"))))),(0,a.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-border-color")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the border.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-border-radius")),(0,a.kt)("td",{parentName:"tr",align:null},"Default radius of the border.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-border-width")),(0,a.kt)("td",{parentName:"tr",align:null},"Default width of the border.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-danger")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the danger.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-disabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the disabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-error")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the error.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-ghost")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the ghost.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-info")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the info.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-normal")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the normal.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-primary")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the primary.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-secondary")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the secondary.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-success")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the success.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-text")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-visited")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the visited.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-color-warning")),(0,a.kt)("td",{parentName:"tr",align:null},"Default color of the warning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-font-family")),(0,a.kt)("td",{parentName:"tr",align:null},"Default font family.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--kolibri-font-size")),(0,a.kt)("td",{parentName:"tr",align:null},"Default font size.")))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"depends-on"},"Depends on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./link"},"kol-link"))),(0,a.kt)("h3",{id:"graph"},"Graph"),(0,a.kt)("mermaid",{value:"graph TD;\n  kol-link-group --\x3e kol-heading-wc\n  kol-link-group --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  style kol-link-group fill:#f9f,stroke:#333,stroke-width:4px"}),(0,a.kt)("hr",null))}i.isMDXComponent=!0;var o=n(70816);const d={title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",tags:["LinkGroup","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/link-group",id:"components/link-group",title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",source:"@site/docs/30-components/link-group.mdx",sourceDirName:"30-components",slug:"/components/link-group",permalink:"/docs/components/link-group",draft:!1,tags:[{label:"LinkGroup",permalink:"/docs/tags/link-group"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",tags:["LinkGroup","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"LinkButton",permalink:"/docs/components/link-button"},next:{title:"Link",permalink:"/docs/components/link"}},k={},s=[{value:"Beispiele",id:"beispiele",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(o._,{component:"link-group",sample:"basic",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);