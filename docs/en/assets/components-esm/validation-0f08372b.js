/*!
 * KoliBri - The accessible HTML-Standard
 */
import{w as watchValidator}from"./prop.validators-464644b7.js";const watchHeadingLevel=(e,a)=>{watchValidator(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};export{watchHeadingLevel as w};