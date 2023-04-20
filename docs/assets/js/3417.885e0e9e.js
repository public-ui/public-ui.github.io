"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3417],{83417:(e,t,r)=>{r.d(t,{diagram:()=>m});var o=r(23886),n=r(63321),a=r(79182),l=r(7243),s=r.n(l);r(98777),r(85804),r(33582),r(37103),r(39564),r(19830),r(91403);const i=new(s()),d={},c={};let h={};const p=(e,t,r)=>{const n={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return n.TD=n.TB,o.l.info("abc88",r,t,e),n[r][t][e]},u=(e,t,r)=>{if(o.l.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!d[e])switch(r){case"TB":case"TD":d[e]={inPosition:"north",outPosition:"south"};break;case"BT":d[e]={inPosition:"south",outPosition:"north"};break;case"RL":d[e]={inPosition:"east",outPosition:"west"};break;case"LR":d[e]={inPosition:"west",outPosition:"east"}}const n="in"===t?d[e].inPosition:d[e].outPosition;return"in"===t?d[e].inPosition=p(d[e].inPosition,t,r):d[e].outPosition=p(d[e].outPosition,t,r),n},b=function(e,t,r,a){o.l.info("abc78 edges = ",e);const l=a.insert("g").attr("class","edgeLabels");let s,i,d={},p=t.db.getDirection();if(void 0!==e.defaultStyle){const t=(0,o.a)(e.defaultStyle);s=t.style,i=t.labelStyle}return e.forEach((function(t){var a="L-"+t.start+"-"+t.end;void 0===d[a]?(d[a]=0,o.l.info("abc78 new entry",a,d[a])):(d[a]++,o.l.info("abc78 new entry",a,d[a]));let b=a+"-"+d[a];o.l.info("abc78 new link id to be used is",a,b,d[a]);var g="LS-"+t.start,y="LE-"+t.end;const w={style:"",labelStyle:""};switch(w.minlen=t.length||1,"arrow_open"===t.type?w.arrowhead="none":w.arrowhead="normal",w.arrowTypeStart="arrow_open",w.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":w.arrowTypeStart="arrow_cross";case"arrow_cross":w.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":w.arrowTypeStart="arrow_point";case"arrow_point":w.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":w.arrowTypeStart="arrow_circle";case"arrow_circle":w.arrowTypeEnd="arrow_circle"}let k="",f="";switch(t.stroke){case"normal":k="fill:none;",void 0!==s&&(k=s),void 0!==i&&(f=i),w.thickness="normal",w.pattern="solid";break;case"dotted":w.thickness="normal",w.pattern="dotted",w.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":w.thickness="thick",w.pattern="solid",w.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){const e=(0,o.a)(t.style);k=e.style,f=e.labelStyle}w.style=w.style+=k,w.labelStyle=w.labelStyle+=f,void 0!==t.interpolate?w.curve=(0,o.d)(t.interpolate,n.c_6):void 0!==e.defaultInterpolate?w.curve=(0,o.d)(e.defaultInterpolate,n.c_6):w.curve=(0,o.d)(c.curve,n.c_6),void 0===t.text?void 0!==t.style&&(w.arrowheadStyle="fill: #333"):(w.arrowheadStyle="fill: #333",w.labelpos="c"),w.labelType="text",w.label=t.text.replace(o.c.lineBreakRegex,"\n"),void 0===t.style&&(w.style=w.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),w.labelStyle=w.labelStyle.replace("color:","fill:"),w.id=b,w.classes="flowchart-link "+g+" "+y;const x=(0,o.f)(l,w),{source:m,target:v}=((e,t)=>{let r=e.start,o=e.end;const n=h[r],a=h[o];return n&&a?("diamond"===n.type&&(r=`${r}-${u(r,"out",t)}`),"diamond"===a.type&&(o=`${o}-${u(o,"in",t)}`),{source:r,target:o}):{source:r,target:o}})(t,p);o.l.debug("abc78 source and target",m,v),r.edges.push({id:"e"+t.start+t.end,sources:[m],targets:[v],labelEl:x,labels:[{width:w.width,height:w.height,orgWidth:w.width,orgHeight:w.height,text:w.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:w})})),r},g=function(e,t,r){const o=((e,t,r)=>{const{parentById:o}=r,n=new Set;let a=e;for(;a;){if(n.add(a),a===t)return a;a=o[a]}for(a=t;a;){if(n.has(a))return a;a=o[a]}return"root"})(e,t,r);if(void 0===o||"root"===o)return{x:0,y:0};const n=h[o].offset;return{x:n.posX,y:n.posY}},y=function(e,t,r,o,a){const l=g(t.sources[0],t.targets[0],a),s=t.sections[0].startPoint,i=t.sections[0].endPoint,d=(t.sections[0].bendPoints?t.sections[0].bendPoints:[]).map((e=>[e.x+l.x,e.y+l.y])),c=[[s.x+l.x,s.y+l.y],...d,[i.x+l.x,i.y+l.y]],h=(0,n.jvg)().curve(n.c_6),p=e.insert("path").attr("d",h(c)).attr("class","path").attr("fill","none"),u=e.insert("g").attr("class","edgeLabel"),b=(0,n.Ys)(u.node().appendChild(t.labelEl)),y=b.node().firstChild.getBoundingClientRect();b.attr("width",y.width),b.attr("height",y.height),u.attr("transform",`translate(${t.labels[0].x+l.x}, ${t.labels[0].y+l.y})`),function(e,t,r,o){let n="";switch(o&&(n=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,n=n.replace(/\(/g,"\\("),n=n.replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+n+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+n+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+n+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+n+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+n+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+n+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+n+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+n+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+n+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+n+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+n+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+n+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+n+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+n+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+n+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+n+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+n+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+n+"#"+r+"-lollipopEnd)")}}(p,r,o.type,o.arrowMarkerAbsolute)},w=(e,t)=>{e.forEach((e=>{e.children||(e.children=[]);const r=t.childrenById[e.id];r&&r.forEach((t=>{e.children.push(h[t])})),w(e.children,t)}))},k=(e,t,r,n,a,l,s)=>{r.forEach((function(r){if(r)if(h[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:s,width:r.width,height:r.height},"group"===r.type){const n=a.insert("g").attr("class","subgraph");n.insert("rect").attr("class","subgraph subgraph-lvl-"+s%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);const l=n.insert("g").attr("class","label");l.attr("transform",`translate(${r.labels[0].x+e+r.x}, ${r.labels[0].y+t+r.y})`),l.node().appendChild(r.labelData.labelNode),o.l.info("Id (UGH)= ",r.type,r.labels)}else o.l.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)})),r.forEach((function(r){r&&"group"===r.type&&k(e+r.x,t+r.y,r.children,n,a,l,s+1)}))},f={getClasses:function(e,t){o.l.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(r){return{}}},draw:async function(e,t,r,l){var s;l.db.clear(),h={},l.db.setGen("gen-2"),l.parser.parse(e);const d=(0,n.Ys)("body").append("div").attr("style","height:400px").attr("id","cy");let c={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(o.l.info("Drawing flowchart using v3 renderer",i),l.db.getDirection()){case"BT":c.layoutOptions["elk.direction"]="UP";break;case"TB":c.layoutOptions["elk.direction"]="DOWN";break;case"LR":c.layoutOptions["elk.direction"]="RIGHT";break;case"RL":c.layoutOptions["elk.direction"]="LEFT"}const{securityLevel:p,flowchart:u}=(0,o.g)();let g;"sandbox"===p&&(g=(0,n.Ys)("#i"+t));const f="sandbox"===p?(0,n.Ys)(g.nodes()[0].contentDocument.body):(0,n.Ys)("body"),x="sandbox"===p?g.nodes()[0].contentDocument:document,m=f.select(`[id="${t}"]`);(0,o.i)(m,["point","circle","cross"],l.type,l.arrowMarkerAbsolute);const v=l.db.getVertices();let _;const E=l.db.getSubGraphs();o.l.info("Subgraphs - ",E);for(let o=E.length-1;o>=0;o--)_=E[o],l.db.addVertex(_.id,_.title,"group",void 0,_.classes,_.dir);const S=m.insert("g").attr("class","subgraphs"),$=function(e){const t={parentById:{},childrenById:{}},r=e.getSubGraphs();return o.l.info("Subgraphs - ",r),r.forEach((function(e){e.nodes.forEach((function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)}))})),r.forEach((function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]})),t}(l.db);c=function(e,t,r,n,l,s,i){const d=r.select(`[id="${t}"]`),c=d.insert("g").attr("class","nodes");return Object.keys(e).forEach((function(t){const r=e[t];let i="default";r.classes.length>0&&(i=r.classes.join(" "));const p=(0,o.a)(r.styles);let u,b=void 0!==r.text?r.text:r.id;const g={width:0,height:0};if((0,o.e)((0,o.g)().flowchart.htmlLabels)){const e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};u=(0,a.a)(d,e).node();const t=u.getBBox();g.width=t.width,g.height=t.height,g.labelNode=u,u.parentNode.removeChild(u)}else{const e=n.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));const t=b.split(o.c.lineBreakRegex);for(const o of t){const t=n.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=o,e.appendChild(t)}u=e;const r=u.getBBox();g.width=r.width,g.height=r.height,g.labelNode=u}const y=[{id:r.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:r.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:r.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:r.id+"-north",layoutOptions:{"port.side":"NORTH"}}];let w=0,k="",f={};switch(r.type){case"round":w=5,k="rect";break;case"square":case"group":default:k="rect";break;case"diamond":k="question",f={portConstraints:"FIXED_SIDE"};break;case"hexagon":k="hexagon";break;case"odd":case"odd_right":k="rect_left_inv_arrow";break;case"lean_right":k="lean_right";break;case"lean_left":k="lean_left";break;case"trapezoid":k="trapezoid";break;case"inv_trapezoid":k="inv_trapezoid";break;case"circle":k="circle";break;case"ellipse":k="ellipse";break;case"stadium":k="stadium";break;case"subroutine":k="subroutine";break;case"cylinder":k="cylinder";break;case"doublecircle":k="doublecircle"}const x={labelStyle:p.labelStyle,shape:k,labelText:b,rx:w,ry:w,class:i,style:p.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:l.db.getTooltip(r.id)||"",domId:l.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,o.g)().flowchart.padding};let m,v;"group"!==x.type&&(v=(0,o.b)(c,x,r.dir),m=v.node().getBBox());const _={id:r.id,ports:"diamond"===r.type?y:[],layoutOptions:f,labelText:b,labelData:g,domId:l.db.lookUpDomId(r.id),width:null==m?void 0:m.width,height:null==m?void 0:m.height,type:r.type,el:v,parent:s.parentById[r.id]};h[x.id]=_})),i}(v,t,f,x,l,$,c);const T=m.insert("g").attr("class","edges edgePath"),B=l.db.getEdges();c=b(B,l,c,m);Object.keys(h).forEach((e=>{const t=h[e];t.parent||c.children.push(t),void 0!==$.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)})),w(c.children,$),o.l.info("after layout",JSON.stringify(c,null,2));const C=await i.layout(c);k(0,0,C.children,m,S,l,0),o.l.info("after layout",C),null==(s=C.edges)||s.map((e=>{y(T,e,e.edgeData,l,$)})),(0,o.s)({},m,u.diagramPadding,u.useMaxWidth),d.remove()}},x=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span {\n    color: ${e.titleColor};\n  }\n\n  .label text,span {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n  .subgraph {\n    stroke-width:2;\n    rx:3;\n  }\n  // .subgraph-lvl-1 {\n  //   fill:#ccc;\n  //   // stroke:black;\n  // }\n  ${(e=>{let t="";for(let r=0;r<5;r++)t+=`\n      .subgraph-lvl-${r} {\n        fill: ${e[`surface${r}`]};\n        stroke: ${e[`surfacePeer${r}`]};\n      }\n    `;return t})(e)}\n`,m={db:o.h,renderer:f,parser:o.p,styles:x}}}]);