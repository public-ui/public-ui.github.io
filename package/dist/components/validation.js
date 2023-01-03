/*!
 * KoliBri - The accessible HTML-Standard
 */
import{o as watchJsonArrayString,x as uiUxHintMillerscheZahl}from"./prop.validators.js";const watchNavLinks=(t,a,s)=>{watchJsonArrayString(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),s),uiUxHintMillerscheZahl(t,a.state._links.length)};export{watchNavLinks as w};