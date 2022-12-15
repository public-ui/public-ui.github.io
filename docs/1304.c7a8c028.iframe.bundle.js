"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1304],{"./node_modules/@public-ui/components/dist/esm/devtools-15facbbc.js":(u,r,s)=>{s.r(r),s.d(r,{initialize:()=>d});var t=s("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),o=s("./node_modules/@public-ui/components/dist/esm/prop.validators-4d9cba3b.js");/*!
 * KoliBri - The accessible HTML-Standard
 */function i(l,e){try{Object.defineProperty(t.K,l,{get:function(){return e}})}catch(a){t.L.debug(`KoliBri property ${l} is already bind.`)}}const n=(l,e)=>t.L.debug(`${l} ${e?"":"not "}activated`),d=()=>{if((0,t.i)(),(0,t.e)()){(0,t.r)(),i("a11yColorContrast",o.l),i("querySelector",o.k),i("querySelectorAll",o.n),i("querySelectorColors",o.q),i("utils",function(){return o.j}),i("parseJson",o.p),i("stringifyJson",o.t);const l=(0,t.g)().body,e=(0,t.g)().createElement("svg");if(e.setAttribute("aria-label","KoliBri-DevTools"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("role","toolbar"),e.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),e.innerHTML=`<svg
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
</svg>`,(0,t.g)().body.appendChild(e),n("Development mode",(0,t.e)()),n("Experimental mode",(0,t.b)()),n("Color contrast analysis",(0,t.f)()),(0,t.f)()){const a=setTimeout(()=>{clearTimeout(a),setInterval(()=>{o.j.queryHtmlElementColors((0,t.g)().createElement("div"),(0,o.l)(l),!1,!1)},1e4)},2500)}}}}}]);
