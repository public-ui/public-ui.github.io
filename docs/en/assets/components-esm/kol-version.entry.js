/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h}from"./index-2c046ff1.js";import{v as validateLabel}from"./label-e3523fd1.js";import"./a11y.tipps-5aaa4b49.js";import"./dev.utils-465c4239.js";import"./reuse-c2156413.js";import"./prop.validators-05d07b50.js";import"./index-37b5cbcf.js";var Farbspektrum;!function(e){e.Violett="#5f316e",e.Dunkelrot="#780f2d",e.Rot="#c0003c",e.Orange="#cd5038",e.Hellorange="#f7bb3d",e.Gelb="#f9e03a",e["Hellgrün"]="#c1ca31",e.Oliv="#597c39",e["Dunkelgrün"]="#005c45",e["Grün"]="#00854a",e["Türkis"]="#00818b",e.Hellblau="#80cdec",e.Blau="#0077b6",e.Petrol="#007194",e.Dunkelblau="#004b76",e.Dunkelgrau="#576164",e.Hellgrau="#bec5c9"}(Farbspektrum||(Farbspektrum={}));const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}",KolVersion=class{constructor(e){registerInstance(this,e),this._label=void 0,this._version=void 0,this.state={_label:"0.0.0-alpha.0"}}render(){return h("kol-badge",{_color:Farbspektrum.Hellgrau,_icon:"codicon codicon-versions",_label:`v${this.state._label}`})}validateLabel(e){validateLabel(this,e)}validateVersion(e){this.validateLabel(e)}componentWillLoad(){this.validateLabel(this._label||this._version)}static get watchers(){return{_label:["validateLabel"],_version:["validateVersion"]}}};KolVersion.style={default:defaultStyleCss};export{KolVersion as kol_version};