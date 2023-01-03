/*!
 * KoliBri - The accessible HTML-Standard
 */
"use strict";const prop_validators=require("./prop.validators-8ddaf00e.js"),watchHeadingLevel=(e,a)=>{prop_validators.watchValidator(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};exports.watchHeadingLevel=watchHeadingLevel;