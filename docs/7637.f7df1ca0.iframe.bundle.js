"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7637],{"./node_modules/@public-ui/components/dist/esm/devtools-ee3136ac.js":(d,n,l)=>{l.r(n),l.d(n,{initialize:()=>a});var t=l("./node_modules/@public-ui/components/dist/esm/dev.utils-d28700ca.js"),e=l("./node_modules/@public-ui/components/dist/esm/prop.validators-5a755a6e.js");/*!
 * KoliBri - The accessible HTML-Standard
 */function i(s,o){try{Object.defineProperty(t.K,s,{get:function(){return o}})}catch(r){t.L.debug(`KoliBri property ${s} is already bind.`)}}const a=()=>{if((0,t.i)(),(0,t.d)()){(0,t.r)(),i("a11yColorContrast",e.j),i("querySelector",e.k),i("querySelectorAll",e.l),i("querySelectorColors",e.n),i("utils",function(){return e.i}),i("parseJson",e.p),i("stringifyJson",e.q);const s=(0,t.g)().body,o=(0,t.g)().createElement("svg");if(o.setAttribute("aria-label","KoliBri-DevTools"),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("role","toolbar"),o.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),o.innerHTML=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 600 600"
>
  <path d="M353 322L213 304V434L353 322Z" fill="#047" />
  <path d="M209 564V304L149 434L209 564Z" fill="#047" />
  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />
  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />
  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />
  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />
</svg>`,(0,t.g)().body.appendChild(o),(0,t.e)()){t.L.debug("Color-Contrast-Analysis activated");const r=setTimeout(()=>{clearTimeout(r),setInterval(()=>{e.i.queryHtmlElementColors((0,t.g)().createElement("div"),(0,e.j)(s),!1,!1)},1e4)},2500)}else t.L.debug("Color-Contrast-Analysis not activated")}}}}]);
