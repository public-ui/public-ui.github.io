"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2071],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,g=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:a,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64717:(e,t,n)=>{n.d(t,{_:()=>o});var r=n(95982),a=n(50959);const i=function(e,t,n,r,a){return void 0===a&&(a="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${a}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[l,o]=(0,a.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},m={onSelect:(e,t)=>{switch(t){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return a.createElement(r.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===l&&a.createElement(d,{url:i(s,t,n,u.react,"preview")})),a.createElement("div",null,"Angular"===l&&a.createElement(d,{url:i(s,t,n,u.angular)})),a.createElement("div",null,"React"===l&&a.createElement(d,{url:i(s,t,n,u.react)})),a.createElement("div",null,"Vue"===l&&a.createElement(d,{url:i(s,t,n,u.vue)})),a.createElement("div",null,"Web Component"===l&&a.createElement(d,{url:i(s,t,n,u.webcomponent)})))}},58095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(15882),a=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiele",id:"beispiele",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Bilder in unterschiedlicher Aufl\xf6sung und/oder Seitenverh\xe4ltnis",id:"bilder-in-unterschiedlicher-aufl\xf6sung-undoder-seitenverh\xe4ltnis",level:3},{value:"Ladeverhalten",id:"ladeverhalten",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Alternativtext",id:"alternativtext",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2}]},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Image"),"-Komponente dient dazu, Bilder darzustellen."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("p",null,"Die Komponente ",(0,a.kt)("strong",{parentName:"p"},"Image")," wird \xfcber das HTML-Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<kol-image>")," erzeugt."),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-image _src="url-zum-bild.jpg" _alt="Beschreibung des Bildes"></kol-image>\n<kol-image _src="nur-dekoratives-bild.jpg" _alt=""></kol-image>\n<kol-image _src="hintergrundbild-der-hero-sektion.jpg" _alt="" _loading="eager"></kol-image>\n')),(0,a.kt)("h3",{id:"beispiele"},"Beispiele"),(0,a.kt)("p",null,(0,a.kt)("kol-image",{_src:"url-zum-bild.jpg",_alt:"Beschreibung des Bildes"}),"\n",(0,a.kt)("kol-image",{_src:"nur-dekoratives-bild.jpg",_alt:""}),"\n",(0,a.kt)("kol-image",{_src:"hintergrundbild-der-hero-sektion.jpg",_alt:"",_loading:"eager"})),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("h3",{id:"bilder-in-unterschiedlicher-aufl\xf6sung-undoder-seitenverh\xe4ltnis"},"Bilder in unterschiedlicher Aufl\xf6sung und/oder Seitenverh\xe4ltnis"),(0,a.kt)("p",null,"Mittels ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_srcset"))," (und ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_sizes")),") k\xf6nnen unterschiedliche Bilder f\xfcr unterschiedliche Aufl\xf6sungen und Pixeldichten (des Displays) hinterlegt werden, um auf gro\xdfen Bildschirmen scharfe Bilder zu liefern und auf kleinen Monitoren nicht unn\xf6tig Bandbreite zu verbrauchen.\nDes Weiteren k\xf6nnen mittels ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_srcset"))," auch verschiedene Dateiformate angegeben werden, um f\xfcr moderne Browser Bandbreite zu sparen, allerdings \xe4ltere Ger\xe4te weiterhin zu unterst\xfctzen.\nAuch bei Verwendung von ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_srcset"))," sollte ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_src"))," genutzt werden, da dies von den Browsern als letzte Option verwendet wird, sofern a) ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"srcset"))," nicht unterst\xfctzt wird, oder b) dort kein passendes Bild gefunden wurde.\n",(0,a.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset",_label:"MDN Artikel zu srcset"}),"\n",(0,a.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes",_label:"MDN Artikel zu sizes"}),"\nF\xfcr weitere Infos zu ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_srcset"))," siehe ",(0,a.kt)("a",{parentName:"p",href:"#links-und-referenzen"},"Links und Referenzen")),(0,a.kt)("h3",{id:"ladeverhalten"},"Ladeverhalten"),(0,a.kt)("p",null,"Das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_loading"))," ist optional. Gesetzt werden kann hier entweder ",(0,a.kt)("inlineCode",{parentName:"p"},"eager")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"lazy"),", sofern ungesetzt wird ",(0,a.kt)("inlineCode",{parentName:"p"},"lazy")," verwendet.\n",(0,a.kt)("inlineCode",{parentName:"p"},"eager")," sorgt f\xfcr ein Laden des Bildes direkt beim Betreten der Seite, bei ",(0,a.kt)("inlineCode",{parentName:"p"},"lazy")," l\xe4dt der Browser das Bild erst, kurz bevor es sichtbar wird. In der Regel muss ",(0,a.kt)("inlineCode",{parentName:"p"},"eager")," nicht gesetzt werden, setzen Sie es nur sofern Ladeverz\xf6gerungen auftreten, oder das Bild sich sicher im, bei Betreten der Seite, sichtbaren Bereich befindet. (z.B.: Logo im Header oder Hero)\n",(0,a.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading",_label:"MDN Artikel zu loading"})),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("h3",{id:"alternativtext"},"Alternativtext"),(0,a.kt)("p",null,"Das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_alt"))," ist verpflichtend, kann jedoch bei rein dekorativen Bildern leer (",(0,a.kt)("inlineCode",{parentName:"p"},'_alt=""'),") gelassen werden.\nDiese Beschreibung wird von Screenreadern vorgelesen und von Browsern angezeigt, wenn das Bild nicht geladen werden kann/soll."),(0,a.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,a.kt)("p",null,"Ausf\xfchrliche Erkl\xe4rung zu ",(0,a.kt)("inlineCode",{parentName:"p"},"_srcset")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"_sizes"),": ",(0,a.kt)("a",{parentName:"p",href:"https://www.mediaevent.de/html/srcset.html"},"https://www.mediaevent.de/html/srcset.html")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_alt")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_alt")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt den alternativen Text."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_loading")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_loading")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt den Lademodus."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"eager" \\| "lazy" \\| undefined')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'lazy'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_sizes")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_sizes")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt Gr\xf6\xdfen f\xfcr unterschiedliche Aufl\xf6sungen, unterst\xfctzend f\xfcr _srcset."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_src")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_src")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt die Quell-URL des Bildes."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_srcset")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_srcset")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt eine Liste von Quell-URLs mit Breiten der Bilder."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("hr",null))}d.isMDXComponent=!0;var o=n(64717);const s={title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",tags:["Image","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/image",id:"components/image",title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",source:"@site/docs/30-components/image.mdx",sourceDirName:"30-components",slug:"/components/image",permalink:"/docs/components/image",draft:!1,tags:[{label:"Image",permalink:"/docs/tags/image"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",tags:["Image","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Icon",permalink:"/docs/components/icon"},next:{title:"IndentedText",permalink:"/docs/components/indented-text"}},m={},c=[{value:"Beispiele",id:"beispiele",level:2}],g={toc:c},k="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(o._,{component:"image",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);