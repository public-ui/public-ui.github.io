/*!
 * KoliBri - The accessible HTML-Standard
 */
import{w as watchValidator}from"./prop.validators-25add96a.js";const watchHeadingLevel=(a,e)=>{watchValidator(a,"_level",(a=>"number"==typeof a&&0<=a&&a<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})};export{watchHeadingLevel as w};