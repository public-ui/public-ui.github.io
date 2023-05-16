"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[761],{60761:(e,t,r)=>{r.d(t,{diagram:()=>v});var a=r(1467),o=r(63321),n=r(75866),l=r(24197),i=r(57524),s=r(7243);r(42569),r(95805),r(74637),r(85804);const d=new s;let c={};const h={};let p={};const u=(e,t,r)=>{const a={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return a.TD=a.TB,l.l.info("abc88",r,t,e),a[r][t][e]},b=(e,t,r)=>{if(l.l.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!c[e])switch(r){case"TB":case"TD":c[e]={inPosition:"north",outPosition:"south"};break;case"BT":c[e]={inPosition:"south",outPosition:"north"};break;case"RL":c[e]={inPosition:"east",outPosition:"west"};break;case"LR":c[e]={inPosition:"west",outPosition:"east"}}const a="in"===t?c[e].inPosition:c[e].outPosition;return"in"===t?c[e].inPosition=u(c[e].inPosition,t,r):c[e].outPosition=u(c[e].outPosition,t,r),a},g=function(e,t,r,a){l.l.info("abc78 edges = ",e);const s=a.insert("g").attr("class","edgeLabels");let d,c,u={},g=t.db.getDirection();if(void 0!==e.defaultStyle){const t=(0,i.n)(e.defaultStyle);d=t.style,c=t.labelStyle}return e.forEach((function(t){var a="L-"+t.start+"-"+t.end;void 0===u[a]?(u[a]=0,l.l.info("abc78 new entry",a,u[a])):(u[a]++,l.l.info("abc78 new entry",a,u[a]));let y=a+"-"+u[a];l.l.info("abc78 new link id to be used is",a,y,u[a]);var w="LS-"+t.start,k="LE-"+t.end;const f={style:"",labelStyle:""};switch(f.minlen=t.length||1,"arrow_open"===t.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let x="",m="";switch(t.stroke){case"normal":x="fill:none;",void 0!==d&&(x=d),void 0!==c&&(m=c),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){const e=(0,i.n)(t.style);x=e.style,m=e.labelStyle}f.style=f.style+=x,f.labelStyle=f.labelStyle+=m,void 0!==t.interpolate?f.curve=(0,i.o)(t.interpolate,o.c_6):void 0!==e.defaultInterpolate?f.curve=(0,i.o)(e.defaultInterpolate,o.c_6):f.curve=(0,i.o)(h.curve,o.c_6),void 0===t.text?void 0!==t.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=t.labelType,f.label=t.text.replace(l.e.lineBreakRegex,"\n"),void 0===t.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=y,f.classes="flowchart-link "+w+" "+k;const v=(0,n.f)(s,f),{source:T,target:_,sourceId:E,targetId:S}=((e,t)=>{let r=e.start,a=e.end;const o=r,n=a,l=p[r],i=p[a];return l&&i?("diamond"===l.type&&(r=`${r}-${b(r,"out",t)}`),"diamond"===i.type&&(a=`${a}-${b(a,"in",t)}`),{source:r,target:a,sourceId:o,targetId:n}):{source:r,target:a}})(t,g);l.l.debug("abc78 source and target",T,_),r.edges.push({id:"e"+t.start+t.end,sources:[T],targets:[_],sourceId:E,targetId:S,labelEl:v,labels:[{width:f.width,height:f.height,orgWidth:f.width,orgHeight:f.height,text:f.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:f})})),r},y=function(e,t,r){const a=((e,t,r)=>{const{parentById:a}=r,o=new Set;let n=e;for(;n;){if(o.add(n),n===t)return n;n=a[n]}for(n=t;n;){if(o.has(n))return n;n=a[n]}return"root"})(e,t,r);if(void 0===a||"root"===a)return{x:0,y:0};const o=p[a].offset;return{x:o.posX,y:o.posY}},w=function(e,t,r,a,n){const l=y(t.sourceId,t.targetId,n),i=t.sections[0].startPoint,s=t.sections[0].endPoint,d=(t.sections[0].bendPoints?t.sections[0].bendPoints:[]).map((e=>[e.x+l.x,e.y+l.y])),c=[[i.x+l.x,i.y+l.y],...d,[s.x+l.x,s.y+l.y]],h=(0,o.jvg)().curve(o.c_6),p=e.insert("path").attr("d",h(c)).attr("class","path").attr("fill","none"),u=e.insert("g").attr("class","edgeLabel"),b=(0,o.Ys)(u.node().appendChild(t.labelEl)),g=b.node().firstChild.getBoundingClientRect();b.attr("width",g.width),b.attr("height",g.height),u.attr("transform",`translate(${t.labels[0].x+l.x}, ${t.labels[0].y+l.y})`),function(e,t,r,a){let o="";switch(a&&(o=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,o=o.replace(/\(/g,"\\("),o=o.replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+o+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+o+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+o+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+o+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+o+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+o+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+o+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+o+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+o+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+o+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+o+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+o+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+o+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+o+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+o+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+o+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+o+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+o+"#"+r+"-lollipopEnd)")}}(p,r,a.type,a.arrowMarkerAbsolute)},k=(e,t)=>{e.forEach((e=>{e.children||(e.children=[]);const r=t.childrenById[e.id];r&&r.forEach((t=>{e.children.push(p[t])})),k(e.children,t)}))},f=(e,t,r,a,o,n,i)=>{r.forEach((function(r){if(r)if(p[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:i,width:r.width,height:r.height},"group"===r.type){const a=o.insert("g").attr("class","subgraph");a.insert("rect").attr("class","subgraph subgraph-lvl-"+i%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);const n=a.insert("g").attr("class","label"),s=(0,l.g)().flowchart.htmlLabels?r.labelData.width/2:0;n.attr("transform",`translate(${r.labels[0].x+e+r.x+s}, ${r.labels[0].y+t+r.y+3})`),n.node().appendChild(r.labelData.labelNode),l.l.info("Id (UGH)= ",r.type,r.labels)}else l.l.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)})),r.forEach((function(r){r&&"group"===r.type&&f(e+r.x,t+r.y,r.children,a,o,n,i+1)}))},x={getClasses:function(e,t){l.l.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(r){return{}}},draw:async function(e,t,r,a){var s;a.db.clear(),p={},c={},a.db.setGen("gen-2"),a.parser.parse(e);const h=(0,o.Ys)("body").append("div").attr("style","height:400px").attr("id","cy");let u={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(l.l.info("Drawing flowchart using v3 renderer",d),a.db.getDirection()){case"BT":u.layoutOptions["elk.direction"]="UP";break;case"TB":u.layoutOptions["elk.direction"]="DOWN";break;case"LR":u.layoutOptions["elk.direction"]="RIGHT";break;case"RL":u.layoutOptions["elk.direction"]="LEFT"}const{securityLevel:b,flowchart:y}=(0,l.g)();let x;"sandbox"===b&&(x=(0,o.Ys)("#i"+t));const m="sandbox"===b?(0,o.Ys)(x.nodes()[0].contentDocument.body):(0,o.Ys)("body"),v="sandbox"===b?x.nodes()[0].contentDocument:document,T=m.select(`[id="${t}"]`);(0,n.a)(T,["point","circle","cross"],a.type,a.arrowMarkerAbsolute);const _=a.db.getVertices();let E;const S=a.db.getSubGraphs();l.l.info("Subgraphs - ",S);for(let o=S.length-1;o>=0;o--)E=S[o],a.db.addVertex(E.id,{text:E.title,type:E.labelType},"group",void 0,E.classes,E.dir);const $=T.insert("g").attr("class","subgraphs"),I=function(e){const t={parentById:{},childrenById:{}},r=e.getSubGraphs();return l.l.info("Subgraphs - ",r),r.forEach((function(e){e.nodes.forEach((function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)}))})),r.forEach((function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]})),t}(a.db);u=function(e,t,r,a,o,s,d){const c=r.select(`[id="${t}"]`).insert("g").attr("class","nodes");return Object.keys(e).forEach((function(t){const r=e[t];let d="default";r.classes.length>0&&(d=r.classes.join(" ")),d+=" flowchart-label";const h=(0,i.n)(r.styles);let u=void 0!==r.text?r.text:r.id;const b={width:0,height:0},g=[{id:r.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:r.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:r.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:r.id+"-north",layoutOptions:{"port.side":"NORTH"}}];let y=0,w="",k={};switch(r.type){case"round":y=5,w="rect";break;case"square":case"group":default:w="rect";break;case"diamond":w="question",k={portConstraints:"FIXED_SIDE"};break;case"hexagon":w="hexagon";break;case"odd":case"odd_right":w="rect_left_inv_arrow";break;case"lean_right":w="lean_right";break;case"lean_left":w="lean_left";break;case"trapezoid":w="trapezoid";break;case"inv_trapezoid":w="inv_trapezoid";break;case"circle":w="circle";break;case"ellipse":w="ellipse";break;case"stadium":w="stadium";break;case"subroutine":w="subroutine";break;case"cylinder":w="cylinder";break;case"doublecircle":w="doublecircle"}const f={labelStyle:h.labelStyle,shape:w,labelText:u,labelType:r.labelType,rx:y,ry:y,class:d,style:h.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:o.db.getTooltip(r.id)||"",domId:o.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,l.g)().flowchart.padding};let x,m;if("group"!==f.type)m=(0,n.e)(c,f,r.dir),x=m.node().getBBox();else{a.createElementNS("http://www.w3.org/2000/svg","text");const{shapeSvg:e,bbox:t}=(0,n.l)(c,f,void 0,!0);b.width=t.width,b.wrappingWidth=(0,l.g)().flowchart.wrappingWidth,b.height=t.height,b.labelNode=e.node(),f.labelData=b}const v={id:r.id,ports:"diamond"===r.type?g:[],layoutOptions:k,labelText:u,labelData:b,domId:o.db.lookUpDomId(r.id),width:null==x?void 0:x.width,height:null==x?void 0:x.height,type:r.type,el:m,parent:s.parentById[r.id]};p[f.id]=v})),d}(_,t,m,v,a,I,u);const B=T.insert("g").attr("class","edges edgePath"),C=a.db.getEdges();u=g(C,a,u,T);Object.keys(p).forEach((e=>{const t=p[e];t.parent||u.children.push(t),void 0!==I.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)})),k(u.children,I),l.l.info("after layout",JSON.stringify(u,null,2));const D=await d.layout(u);f(0,0,D.children,T,$,a,0),l.l.info("after layout",D),null==(s=D.edges)||s.map((e=>{w(B,e,e.edgeData,a,I)})),(0,i.s)({},T,y.diagramPadding,y.useMaxWidth),h.remove()}},m=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span {\n    color: ${e.titleColor};\n  }\n\n  .label text,span {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.85;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n  .subgraph {\n    stroke-width:2;\n    rx:3;\n  }\n  // .subgraph-lvl-1 {\n  //   fill:#ccc;\n  //   // stroke:black;\n  // }\n\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n\n  ${(e=>{let t="";for(let r=0;r<5;r++)t+=`\n      .subgraph-lvl-${r} {\n        fill: ${e[`surface${r}`]};\n        stroke: ${e[`surfacePeer${r}`]};\n      }\n    `;return t})(e)}\n`,v={db:a.d,renderer:x,parser:a.p,styles:m}}}]);