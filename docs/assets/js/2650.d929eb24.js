/*! For license information please see 2650.d929eb24.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2650],{6038:(e,i,n)=>{n.d(i,{a:()=>a,b:()=>b,c:()=>s,d:()=>d,e:()=>g,f:()=>u,u:()=>p});var r=n(333);const t=new Set,a=e=>{!1===t.has(e)&&(t.add(e),r.L.info(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},o=new Set,s=e=>{!1===o.has(e)&&(o.add(e),r.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,d=e=>{!1===l.has(e)&&(l.add(e),r.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,u=(e,i=!1)=>{!1===c.has(e)&&(c.add(e),e+=!0===i?" \u2705":"",r.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,g=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},b=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,i=8)=>{var n;i>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(n)&&(h.add(n),r.L.debug(n,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"})))}},2650:(e,i,n)=>{n.r(i),n.d(i,{kol_input_adapter_leanup:()=>a});var r=n(396),t=n(6038);const a=class{constructor(e){(0,r.r)(this,e)}componentWillLoad(){(0,t.c)("Die Komponente 'kol-input-adapter-leanup' ist umgezogen. Lesen Sie hier, wie Sie sie migrieren: https://public-ui.github.io/?path=/docs/backlog-und-changelog--page")}render(){return(0,r.h)(r.H,null,(0,r.h)("kol-alert",{_type:"warning"},"Die Komponente ",(0,r.h)("code",null,"kol-input-adapter-leanup")," ist umgezogen. Lesen Sie hier, wie Sie sie migrieren:"," ",(0,r.h)("kol-link",{_href:"https://public-ui.github.io/docs/changelog#118---07102022",_label:"https://public-ui.github.io/docs/changelog#118---07102022",_target:"documentation"})))}}}}]);