/*! * KoliBri - The accessible HTML-Standard */ import{w as watchValidator}from"./prop.validators-c9100bb0.js";const headingLevelOptions=[0,1,2,3,4,5,6],watchHeadingLevel=(e,a)=>{watchValidator(e,"_level",(e=>"number"==typeof e&&headingLevelOptions.includes(e)),new Set([`Number {${headingLevelOptions.join(", ")}`]),a,{defaultValue:1,required:!0})};export{watchHeadingLevel as w};