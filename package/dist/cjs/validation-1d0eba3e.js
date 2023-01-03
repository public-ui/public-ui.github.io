/*!
 * KoliBri - The accessible HTML-Standard
 */
"use strict";const a11y_tipps=require("./a11y.tipps-e1770acf.js"),prop_validators=require("./prop.validators-8ddaf00e.js"),watchNavLinks=(t,a,s)=>{prop_validators.watchJsonArrayString(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),s),a11y_tipps.uiUxHintMillerscheZahl(t,a.state._links.length)};exports.watchNavLinks=watchNavLinks;