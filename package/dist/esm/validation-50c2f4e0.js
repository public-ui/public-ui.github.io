/*!
 * KoliBri - The accessible HTML-Standard
 */
import{a as watchValidator}from"./prop.validators-82b345aa.js";const watchHeadingLevel=(a,e)=>{watchValidator(a,"_level",(a=>"number"==typeof a&&1<=a&&a<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})};export{watchHeadingLevel as w};