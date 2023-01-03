/*!
 * KoliBri - The accessible HTML-Standard
 */
"use strict";const prop_validators=require("./prop.validators-8ddaf00e.js"),watchTooltipAlignment=(t,o,i)=>{prop_validators.watchValidator(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["TooltipAlignment {top, right, buttom, left}"]),i,{defaultValue:"top"})};exports.watchTooltipAlignment=watchTooltipAlignment;