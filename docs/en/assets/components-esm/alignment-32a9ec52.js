/*! * KoliBri - The accessible HTML-Standard */ import{w as watchValidator}from"./prop.validators-445950f8.js";const horizontalAlignOptions=["left","right"],verticalAlignOptions=["top","bottom"],alignPropTypeOptions=[...horizontalAlignOptions,...verticalAlignOptions],validateAlign=(t,i)=>{validateAlignment(t,"_align",i)},validateAlignment=(t,i,a)=>{watchValidator(t,i,(t=>"string"==typeof t&&alignPropTypeOptions.includes(t)),new Set(alignPropTypeOptions),a,{defaultValue:"top"})};export{validateAlign as a,validateAlignment as v};