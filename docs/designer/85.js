/*! For license information please see 85.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[85],{90085:(e,t,i)=>{i.r(t),i.d(t,{initialize:()=>s});var l=i(33810),r=i(51539);function n(e,t){try{Object.defineProperty(l.K,e,{get:function(){return t}})}catch(t){l.L.debug(`KoliBri property ${e} is already bind.`)}}const o=(e,t)=>l.L.debug(`${e} ${t?"":"not "}activated`),s=()=>{if((0,l.i)(),(0,l.e)()){(0,l.r)(),n("a11yColorContrast",r.l),n("querySelector",r.k),n("querySelectorAll",r.n),n("querySelectorColors",r.q),n("utils",(function(){return r.j})),n("parseJson",r.p),n("stringifyJson",r.t);const e=(0,l.g)().body,t=(0,l.g)().createElement("svg");if(t.setAttribute("aria-label","KoliBri-DevTools"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("role","toolbar"),t.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),t.innerHTML='<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="50"\n  height="50"\n  viewBox="0 0 600 600"\n>\n  <path d="M353 322L213 304V434L353 322Z" fill="#047" />\n  <path d="M209 564V304L149 434L209 564Z" fill="#047" />\n  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />\n  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />\n  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />\n  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />\n</svg>',(0,l.g)().body.appendChild(t),o("Development mode",(0,l.e)()),o("Experimental mode",(0,l.b)()),o("Color contrast analysis",(0,l.f)()),(0,l.f)()){const t=setTimeout((()=>{clearTimeout(t),setInterval((()=>{r.j.queryHtmlElementColors((0,l.g)().createElement("div"),(0,r.l)(e),!1,!1)}),1e4)}),2500)}}}}}]);