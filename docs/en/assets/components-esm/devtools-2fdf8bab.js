/*! For license information please see devtools-2fdf8bab.js.LICENSE.txt */ import{i as initKoliBri,r as renderDevAdvice}from"./dev.utils-500c6d3b.js";import{e as getDevMode,g as getDocument,L as Log,a as getExperimentalMode,f as getColorContrastAnalysis,d as getWindow}from"./dev.utils-1ca991a2.js";import{z as KoliBriUtils,A as koliBriA11yColorContrast,v as koliBriQuerySelector,B as koliBriQuerySelectorAll,C as koliBriQuerySelectorColors,p as parseJson,D as stringifyJson}from"./prop.validators-db70e3c4.js";import"./index-022cbbb8.js";import"./reuse-108ee8f5.js";import"./index-db4aa6e4.js";const getKoliBri=()=>{let e=getWindow().KoliBri;return void 0===e&&(e={},Object.defineProperty(getWindow(),"KoliBri",{value:e,writable:!1})),e};function prototypeKoliBri(e,t){try{Object.defineProperty(getKoliBri(),e,{get:function(){return t}})}catch(t){Log.debug(`KoliBri property ${e} is already bind.`)}}const metaModeLog=(e,t)=>Log.debug(`${e} ${t?"":"not "}activated`),initialize=()=>{if(initKoliBri(),getDevMode()){renderDevAdvice(),prototypeKoliBri("a11yColorContrast",koliBriA11yColorContrast),prototypeKoliBri("querySelector",koliBriQuerySelector),prototypeKoliBri("querySelectorAll",koliBriQuerySelectorAll),prototypeKoliBri("querySelectorColors",koliBriQuerySelectorColors),prototypeKoliBri("utils",(function(){return KoliBriUtils})),prototypeKoliBri("parseJson",parseJson),prototypeKoliBri("stringifyJson",stringifyJson);const e=getDocument().body,t=getDocument().createElement("svg");if(t.setAttribute("aria-label","KoliBri-DevTools"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("role","toolbar"),t.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),t.innerHTML='<svg \n xmlns="http://www.w3.org/2000/svg" \n width="50" \n height="50" \n viewBox="0 0 600 600" \n>\n <path d="M353 322L213 304V434L353 322Z" fill="#047"/>\n <path d="M209 564V304L149 434L209 564Z" fill="#047"/>\n <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047"/>\n <path d="M353 318L35 36L213 300L353 318Z" fill="#047"/>\n <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047"/>\n <path d="M391 286L565 272L421 252L391 286Z" fill="#047"/>\n</svg>',getDocument().body.appendChild(t),metaModeLog("Development mode",getDevMode()),metaModeLog("Experimental mode",getExperimentalMode()),metaModeLog("Color contrast analysis",getColorContrastAnalysis()),getColorContrastAnalysis()){const t=setTimeout((()=>{clearTimeout(t),setInterval((()=>{KoliBriUtils.queryHtmlElementColors(getDocument().createElement("div"),koliBriA11yColorContrast(e),!1,!1)}),1e4)}),2500)}}};export{initialize};