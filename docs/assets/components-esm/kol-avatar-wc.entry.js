/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{a as translate}from"./i18n-f8b0e840.js";import{v as validateImageSource}from"./image-source-ed1d1f7a.js";import{v as validateLabel}from"./label-07fc28f5.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";import"./a11y.tipps-d11c3322.js";import"./dev.utils-38b5f4df.js";import"./reuse-c2156413.js";import"./prop.validators-f76b82ff.js";const formatNameAsInitial=a=>0===a.length?"":a[0].toUpperCase(),formatLabelAsInitials=a=>{const t=a.split(/\s+/),s=t.at(0),e=t.at(-1);return t.length>=2&&s&&e?`${formatNameAsInitial(s)}${formatNameAsInitial(e)}`:formatNameAsInitial(a)},KolAvatarWc=class{constructor(a){registerInstance(this,a),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return h(Host,null,h("div",{"aria-label":translate("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?h("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):h("span",{"aria-hidden":"true",class:"initials"},formatLabelAsInitials(this.state._label))))}validateSrc(a){validateImageSource(this,a)}validateLabel(a){validateLabel(this,a)}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}};export{KolAvatarWc as kol_avatar_wc};