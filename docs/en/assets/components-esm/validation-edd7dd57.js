/*! * KoliBri - The accessible HTML-Standard */ import{c as uiUxHintMillerscheZahl}from"./a11y.tipps-32ec681c.js";import{c as watchJsonArrayString}from"./prop.validators-e8e7611e.js";const watchNavLinks=(t,s,a)=>{watchJsonArrayString(s,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),a),uiUxHintMillerscheZahl(t,s.state._links.length)};export{watchNavLinks as w};