/*! * KoliBri - The accessible HTML-Standard */ import{w as watchValidator}from"./prop.validators-e8e7611e.js";const AVAILABLE_HORIZONTAL_ALIGNMENT_VALUES=new Set(['"left", "right"']),AVAILABLE_VERTICAL_ALIGNMENT_VALUES=new Set(['"bottom", "top"']),AVAILABLE_ALIGNMENT_VALUES=new Set([...AVAILABLE_HORIZONTAL_ALIGNMENT_VALUES,...AVAILABLE_VERTICAL_ALIGNMENT_VALUES]),validateAlignment=(A,L,t)=>{watchValidator(A,L,(A=>"bottom"===A||"left"===A||"right"===A||"top"===A),AVAILABLE_ALIGNMENT_VALUES,t,{defaultValue:"top"})};export{validateAlignment as v};