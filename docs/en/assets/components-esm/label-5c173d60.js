/*! * KoliBri - The accessible HTML-Standard */ import{a as a11yHint,u as uiUxHint}from"./a11y.tipps-06cd7c77.js";import{w as watchValidator}from"./prop.validators-3d53ddab.js";const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var t;return"string"==typeof a&&(null===(t=a.match(READABLE_CHARS))||void 0===t?void 0:t.length)||0}function hasEnoughReadableChars(a,t=1){return countReadableChars(a)>=t}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}function getValidationOptions(a){var t;return{hooks:{afterPatch:(t,e,o,n)=>{var i,l;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(t,e,o,n)),"string"==typeof t&&!1===hasEnoughReadableChars(t,3)&&!1===containsOnlyNumbers(t)&&a11yHint(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&uiUxHint("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=a.hooks)||void 0===t?void 0:t.beforePatch}}}const LABEL_VALUES=new Set(["string"]),validateLabel=(a,t,e={})=>{watchValidator(a,"_label",(a=>"string"==typeof a),LABEL_VALUES,t,getValidationOptions(e))},validateLabelWithExpertSlot=validateLabel;export{validateLabelWithExpertSlot as a,containsOnlyNumbers as c,hasEnoughReadableChars as h,validateLabel as v};