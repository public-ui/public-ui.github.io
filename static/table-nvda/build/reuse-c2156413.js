/*!
 * KoliBri - The accessible HTML-Standard
 */
const t=t=>typeof t==="object"&&t!==null;const e=(t,e=0)=>typeof t==="string"&&t.length>=e;const n=t=>{if(typeof t==="object"&&t!==null){for(const n in t){if(e(n,1)===false){return false}}}else{return e(t,1)}return true};const o=new Event("StateChange");const s=(e,n)=>{if(t(e)&&e){e.focus=t=>n===null||n===void 0?void 0:n.focus(t)}};let c="development";try{c="production"}catch(t){c="production"}export{o as S,s as a,n as b,t as c,e as i,c as p};
//# sourceMappingURL=reuse-c2156413.js.map