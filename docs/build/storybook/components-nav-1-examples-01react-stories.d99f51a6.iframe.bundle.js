"use strict";var Se=Object.defineProperty,ze=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var Y=(s,l,o)=>l in s?Se(s,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[l]=o,U=(s,l)=>{for(var o in l||(l={}))Z.call(l,o)&&Y(s,o,l[o]);if(S)for(var o of S(l))Q.call(l,o)&&Y(s,o,l[o]);return s},j=(s,l)=>ze(s,Ie(l));var $=(s,l)=>{var o={};for(var t in s)Z.call(s,t)&&l.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&S)for(var t of S(s))l.indexOf(t)<0&&Q.call(s,t)&&(o[t]=s[t]);return o};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7546],{"./src/components/nav/1-examples/01react.stories.tsx":(s,l,o)=>{o.r(l),o.d(l,{Erweitert:()=>x,default:()=>z});var t=o("./node_modules/react/index.js"),u=o("./node_modules/@public-ui/react/dist/index.mjs"),v=o("./src/components/bik-bitv-test.tsx"),m=Object.defineProperty,B=Object.defineProperties,C=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(d,r,b)=>r in d?m(d,r,{enumerable:!0,configurable:!0,writable:!0,value:b}):d[r]=b,w=(d,r)=>{for(var b in r||(r={}))E.call(r,b)&&h(d,b,r[b]);if(N)for(var b of N(r))f.call(r,b)&&h(d,b,r[b]);return d},K=(d,r)=>B(d,C(r)),e=null,V={Erweitert:{startLoc:{col:25,line:259},endLoc:{col:1,line:267},startBody:{col:25,line:259},endBody:{col:1,line:267}}};const z=K(w({},v.BS),{title:"React/Nav/Beispiele",component:u.MA}),I=()=>t.createElement(u.MA,{_ariaLabel:"Navigation mit sinnvoller Breite",_links:[{_label:"1 Navigationspunkt mit sehr langem Link-Test",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_label:"2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_href:"#abc",_icon:"icofont-woodpecker"},{_active:!0,_label:"3 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_children:[{_label:"3.1 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker"},{_label:"3.2 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_active:!0,_label:"3.3 Navigationspunkt",_href:"#abc",_children:[{_active:!0,_label:"3.3.1 Navigationspunkt (aktiv)",_href:"#abc"},{_label:"3.3.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.4 Navigationspunkt",_href:"#abc",_children:[{_label:"3.4.1 Navigationspunkt",_href:"#abc"},{_label:"3.4.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.5 Navigationspunkt",_href:"#abc"}]},{_label:"4 Navigationspunkt",_href:"#abc"}],_orientation:"horizontal"}),R=()=>t.createElement(u.MA,{_ariaLabel:"Navigation mit sinnvoller Breite",_links:[{_label:"1 Navigationspunkt mit sehr langem Link-Test",_href:"#abc",_icon:"icofont-woodpecker",_iconOnly:!0,_target:"asdasd"},{_label:"2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_href:"#abc",_icon:"icofont-woodpecker",_iconOnly:!0},{_active:!0,_label:"3 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_iconOnly:!0,_children:[{_label:"3.1 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker"},{_label:"3.2 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_active:!0,_label:"3.3 Navigationspunkt",_href:"#abc",_children:[{_active:!0,_label:"3.3.1 Navigationspunkt (aktiv)",_href:"#abc"},{_label:"3.3.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.4 Navigationspunkt",_href:"#abc",_children:[{_label:"3.4.1 Navigationspunkt",_href:"#abc"},{_label:"3.4.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.5 Navigationspunkt",_href:"#abc"}]},{_label:"4 Navigationspunkt",_href:"#abc",_iconOnly:!0}],_orientation:"horizontal",style:{display:"inline-flex"}}),A=()=>t.createElement(u.MA,{style:{maxWidth:"20em"},_ariaLabel:"Navigation mit sinnvoller Breite",_links:[{_label:"1 Navigationspunkt mit sehr langem Link-Test",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_label:"2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_href:"#abc",_icon:"icofont-woodpecker"},{_active:!0,_label:"3 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_children:[{_label:"3.1 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker"},{_label:"3.2 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_active:!0,_label:"3.3 Navigationspunkt",_href:"#abc",_children:[{_active:!0,_label:"3.3.1 Navigationspunkt (aktiv)",_href:"#abc"},{_label:"3.3.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.4 Navigationspunkt",_href:"#abc",_children:[{_label:"3.4.1 Navigationspunkt",_href:"#abc"},{_label:"3.4.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.5 Navigationspunkt",_href:"#abc"}]},{_label:"4 Navigationspunkt",_href:"#abc"}]}),P=()=>t.createElement(u.MA,{style:{fontSize:"80%",maxWidth:"20em"},_ariaLabel:"Navigation in der Breite beschr\xE4nkt","_has-compact-button":"",_links:[{_label:"1 Navigationspunkt mit sehr langem Link-Test",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_label:"2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_href:"#abc",_icon:"icofont-woodpecker"},{_active:!0,_label:"3 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_children:[{_label:"3.1 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker"},{_label:"3.2 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_active:!0,_label:"3.3 Navigationspunkt",_href:"#abc",_children:[{_active:!0,_label:"3.3.1 Navigationspunkt (aktiv)",_href:"#abc"},{_label:"3.3.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.4 Navigationspunkt",_href:"#abc",_children:[{_label:"3.4.1 Navigationspunkt",_href:"#abc"},{_label:"3.4.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.5 Navigationspunkt",_href:"#abc"}]},{_label:"4 Navigationspunkt",_href:"#abc"}]}),M=()=>t.createElement(u.MA,{style:{fontSize:"60%",maxWidth:"20em"},_ariaLabel:"Navigation initial eingeklappt",_compact:!0,_links:[{_label:"1 Navigationspunkt mit sehr langem Link-Test",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_label:"2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen",_href:"#abc",_icon:"icofont-woodpecker"},{_active:!0,_label:"3 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_children:[{_label:"3.1 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker"},{_label:"3.2 Navigationspunkt",_href:"#abc",_icon:"icofont-woodpecker",_target:"asdasd"},{_active:!0,_label:"3.3 Navigationspunkt",_href:"#abc",_children:[{_active:!0,_label:"3.3.1 Navigationspunkt (aktiv)",_href:"#abc"},{_label:"3.3.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.4 Navigationspunkt",_href:"#abc",_children:[{_label:"3.4.1 Navigationspunkt",_href:"#abc"},{_label:"3.4.2 Navigationspunkt",_href:"#abc"}]},{_label:"3.5 Navigationspunkt",_href:"#abc"}]},{_label:"4 Navigationspunkt",_href:"#abc"}]}),x=()=>t.createElement(v._F,{_heading:"Nav"},t.createElement(I,null),t.createElement(R,null),t.createElement(A,null),t.createElement(P,null),t.createElement(M,null));x.parameters=w({storySource:{source:`() => (
	<BikBitvTest _heading="Nav">
		<Nav1 />
		<Nav2 />
		<Nav3 />
		<Nav4 />
		<Nav5 />
	</BikBitvTest>
)`}},x.parameters)},"./src/components/bik-bitv-test.tsx":(s,l,o)=>{o.d(l,{BS:()=>B,_F:()=>h,kM:()=>N});var t=o("./node_modules/react/index.js"),u=o("./node_modules/@public-ui/react/dist/index.mjs"),v=o("./node_modules/@leanup/form/esm/index.js");const m=new v.I2;m.validators.add(v.Fj);const B={parameters:{layout:"centered"}};new v.gs("input",{mandatory:!0}).setValidationHandler(m);const N={_error:"Ich bin ein Fehler"};let E="";const f=localStorage.getItem("kol-theme");typeof f=="string"&&(E=f);class h extends t.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:E}}renderModal(){return t.createElement(u.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},t.createElement(u.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},t.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),t.createElement("div",{slot:"footer"},t.createElement(u.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return t.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},t.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},t.createElement(u.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(K,e)=>{Array.isArray(e)&&e.length>0&&typeof e[0]=="string"&&(localStorage.setItem("kol-theme",e[0]),this.setState(()=>({theme:e[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),t.createElement(u.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:K=>{this.setState(()=>({activeElement:K.target}))}}}),this.renderModal()),t.createElement(u.HA,null,this.props._heading),this.props.children)}}try{h.displayName="BikBitvTest",h.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:h.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(w){}},"./node_modules/@public-ui/react/dist/index.mjs":(s,l,o)=>{o.d(l,{$o:()=>he,CO:()=>Le,CV:()=>ae,CX:()=>ce,Er:()=>R,Gc:()=>r,HA:()=>X,Jl:()=>q,K5:()=>I,Lj:()=>le,MA:()=>fe,Np:()=>oe,Nv:()=>de,O:()=>ie,P:()=>ye,Q4:()=>ge,QK:()=>ke,Qs:()=>Be,RZ:()=>z,T5:()=>V,TE:()=>ne,TQ:()=>ue,UD:()=>Te,Ud:()=>ve,Vp:()=>Ke,Vs:()=>be,WD:()=>pe,WR:()=>me,Ze:()=>Oe,c2:()=>se,cJ:()=>ee,ic:()=>P,is:()=>we,lo:()=>A,m5:()=>J,ox:()=>b,qq:()=>Ee,r7:()=>Ne,rW:()=>te,sy:()=>re,u_:()=>Ce,uz:()=>M,z5:()=>_e});var t=o("./node_modules/react/index.js"),u=o("./node_modules/react-dom/index.js");const v=n=>n.toLowerCase().split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(""),m=n=>n.replace(/([A-Z])/g,a=>`-${a[0].toLowerCase()}`),B=(n,a,c={})=>{if(n instanceof Element){const _=C(n.classList,a,c);_!==""&&(n.className=_),Object.keys(a).forEach(i=>{if(!(i==="children"||i==="style"||i==="ref"||i==="class"||i==="className"||i==="forwardedRef"))if(i.indexOf("on")===0&&i[2]===i[2].toUpperCase()){const k=i.substring(2),p=k[0].toLowerCase()+k.substring(1);N(p)||E(n,p,a[i])}else n[i]=a[i],typeof a[i]==="string"&&n.setAttribute(m(i),a[i])})}},C=(n,a,c)=>{const _=a.className||a.class,i=c.className||c.class,k=f(n),p=f(_?_.split(" "):[]),L=f(i?i.split(" "):[]),T=[];return k.forEach(g=>{p.has(g)?(T.push(g),p.delete(g)):L.has(g)||T.push(g)}),p.forEach(g=>T.push(g)),T.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const N=n=>{if(typeof document=="undefined")return!0;{const a="on"+n;let c=a in document;if(!c){const _=document.createElement("div");_.setAttribute(a,"return;"),c=typeof _[a]=="function"}return c}},E=(n,a,c)=>{const _=n.__events||(n.__events={}),i=_[a];i&&n.removeEventListener(a,i),n.addEventListener(a,_[a]=function(p){c&&c.call(this,p)})},f=n=>{const a=new Map;return n.forEach(c=>a.set(c,c)),a},h=(n,a)=>{typeof n=="function"?n(a):n!=null&&(n.current=a)},w=(...n)=>a=>{n.forEach(c=>{h(c,a)})},K=(n,a)=>{const c=(_,i)=>t.createElement(n,j(U({},_),{forwardedRef:i}));return c.displayName=a,t.forwardRef(c)},e=(n,a,c,_)=>{_!==void 0&&_();const i=v(n),k=class extends t.Component{constructor(p){super(p),this.setComponentElRef=L=>{this.componentEl=L}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(p){B(this.componentEl,this.props,p)}render(){const H=this.props,{children:p,forwardedRef:L,style:T,className:g,ref:Me}=H,G=$(H,["children","forwardedRef","style","className","ref"]);let W=Object.keys(G).reduce((D,y)=>{const F=G[y];if(y.indexOf("on")===0&&y[2]===y[2].toUpperCase()){const O=y.substring(2).toLowerCase();typeof document!="undefined"&&N(O)&&(D[y]=F)}else{const O=typeof F;(O==="string"||O==="boolean"||O==="number")&&(D[m(y)]=F)}return D},{});c&&(W=c(this.props,W));const xe=j(U({},W),{ref:w(L,this.setComponentElRef),style:T});return(0,t.createElement)(n,xe,p)}static get displayName(){return i}};return a&&(k.contextType=a),K(k,i)},V=e("kol-abbr"),z=e("kol-accordion"),I=e("kol-alert"),R=e("kol-badge"),A=e("kol-breadcrumb"),P=e("kol-button"),M=e("kol-button-group"),x=null,d=null,r=e("kol-card"),b=e("kol-details"),J=e("kol-form"),X=e("kol-heading"),q=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),ae=e("kol-indented-text"),Re=null,ne=e("kol-input-checkbox"),oe=e("kol-input-color"),ie=e("kol-input-date"),le=e("kol-input-email"),ce=e("kol-input-file"),se=e("kol-input-number"),_e=e("kol-input-password"),re=e("kol-input-radio"),ue=e("kol-input-range"),pe=e("kol-input-text"),be=e("kol-kolibri"),de=e("kol-link"),Ae=null,he=e("kol-link-group"),ke=e("kol-logo"),ve=e("kol-modal"),fe=e("kol-nav"),ge=e("kol-pagination"),me=e("kol-progress"),Ne=e("kol-select"),ye=e("kol-skip-nav"),Pe=null,Ee=e("kol-spin"),we=e("kol-symbol"),Ke=e("kol-table"),Te=e("kol-tabs"),Be=e("kol-textarea"),Le=e("kol-toast"),Oe=e("kol-tooltip"),Ce=e("kol-version")}}]);
