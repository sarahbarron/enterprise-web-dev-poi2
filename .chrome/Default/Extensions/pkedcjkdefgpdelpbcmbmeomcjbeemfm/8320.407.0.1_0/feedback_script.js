'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var sg=function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||Ia,e=d.document,f=a.nonce||La(d);f&&!a.nonce&&(a.nonce=f);if("help"==a.flow){var g=Na("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var h=JSON.stringify(b);(g=1200>=h.length)&&(a.psdJson=h)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);
else{d=c+"/load.js?";for(var l in a)b=a[l],null==b||Ua(b)||(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=gg(e);a=mg(a.g,"SCRIPT");f&&a.setAttribute("nonce",f);ue(a,new hd(fd,d));e.body.appendChild(a)}};x("userfeedback.api.startFeedback",sg);var tg=function(){this.j=this.h=this.u=this.modelName=this.l=this.g=this.Yd="";this.o=this.m=this.w=!1};var ug=chrome.i18n.getMessage("4163185390680253103"),vg=chrome.i18n.getMessage("492097680647953484"),wg=chrome.i18n.getMessage("2575016469622936324"),xg=chrome.i18n.getMessage("128276876460319075"),yg=chrome.i18n.getMessage("3326722026796849289"),zg=chrome.i18n.getMessage("1018984561488520517"),Ag=chrome.i18n.getMessage("8205999658352447129"),Bg=chrome.i18n.getMessage("5723583529370342957"),Cg=chrome.i18n.getMessage("1550904064710828958"),Dg=chrome.i18n.getMessage("5014364904504073524"),Eg=chrome.i18n.getMessage("2194670894476780934"),
Fg=chrome.i18n.getMessage("6614468912728530636"),Gg=chrome.i18n.getMessage("5910595154486533449"),Hg=chrome.i18n.getMessage("5363086287710390513"),Ig=chrome.i18n.getMessage("244647017322945605"),Jg=chrome.i18n.getMessage("5375576275991472719"),Kg=chrome.i18n.getMessage("4592127349908255218"),Lg=chrome.i18n.getMessage("843316808366399491"),Mg=chrome.i18n.getMessage("5699813974548050528"),Ng=chrome.i18n.getMessage("8515148417333877999"),Og=chrome.i18n.getMessage("1636686747687494376"),Pg=chrome.i18n.getMessage("4148300086676792937"),
Qg=chrome.i18n.getMessage("3219866268410307919"),Rg=chrome.i18n.getMessage("9211708838274008657"),Sg=chrome.i18n.getMessage("8706273405040403641"),Tg=chrome.i18n.getMessage("4756056595565370923"),Ug=chrome.i18n.getMessage("7876724262035435114"),Vg=chrome.i18n.getMessage("5485620192329479690"),Wg=chrome.i18n.getMessage("6963873398546068901"),Xg=chrome.i18n.getMessage("3567591856726172993"),Yg=chrome.i18n.getMessage("3239956785410157548");var Zg={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,
"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,
"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},$g={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,"* CLASS":!0,"* ID":!0,"* STYLE":!0};var ah={};
function bh(a){if(Je&&!cf(9))return[0,0,0,0];var b=ah.hasOwnProperty(a)?ah[a]:null;if(b)return b;65536<Object.keys(ah).length&&(ah={});var c=[0,0,0,0];b=ch(a,/\\[0-9A-Fa-f]{6}\s?/g);b=ch(b,/\\[0-9A-Fa-f]{1,5}\s/g);b=ch(b,/\\./g);b=b.replace(/:not\(([^\)]*)\)/g,"     $1 ");b=b.replace(/{[^]*/gm,"");b=dh(b,c,/(\[[^\]]+\])/g,2);b=dh(b,c,/(#[^\#\s\+>~\.\[:]+)/g,1);b=dh(b,c,/(\.[^\s\+>~\.\[:]+)/g,2);b=dh(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=dh(b,c,/(:[\w-]+\([^\)]*\))/gi,2);
b=dh(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");dh(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return ah[a]=b}function dh(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}function ch(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})};var eh={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},fh=/[\n\f\r"'()*<>]/g,gh={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function hh(a){return gh[a]}
var ih=function(a,b,c){b=rd(b);if(""==b)return null;if(0==sd("url(",b.substr(0,4))){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:{b=b.substring(4,b.length-1);for(var d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=Gd(a)?'url("'+Gd(a).replace(fh,hh)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;for(a=/([\-\w]+)\(/g;c=
a.exec(b);)if(!(c[1].toLowerCase()in eh))return null}return b};function jh(a,b){a=Ia[a];return a&&a.prototype?(b=Object.getOwnPropertyDescriptor(a.prototype,b))&&b.get||null:null}function kh(a,b){return(a=Ia[a])&&a.prototype&&a.prototype[b]||null}
var lh=jh("Element","attributes")||jh("Node","attributes"),mh=kh("Element","hasAttribute"),nh=kh("Element","getAttribute"),oh=kh("Element","setAttribute"),ph=kh("Element","removeAttribute"),qh=kh("Element","getElementsByTagName"),rh=kh("Element","matches")||kh("Element","msMatchesSelector"),sh=jh("Node","nodeName"),th=jh("Node","nodeType"),uh=jh("Node","parentNode"),vh=jh("HTMLElement","style")||jh("Element","style"),wh=jh("HTMLStyleElement","sheet"),xh=kh("CSSStyleDeclaration","getPropertyValue"),
yh=kh("CSSStyleDeclaration","setProperty");function zh(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}function Ah(a,b,c,d){if(a)return a.apply(b,d);if(Je&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}function Bh(a){return zh(lh,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Ch(a,b,c){try{Ah(oh,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}function Dh(a){Eh(a);return zh(vh,a,"style",function(b){return b instanceof CSSStyleDeclaration})}function Eh(a){if(!(a instanceof HTMLElement))throw Error("Not an HTMLElement");}function Fh(a){Eh(a);return zh(wh,a,"sheet",function(b){return b instanceof CSSStyleSheet})}function Gh(a){return zh(sh,a,"nodeName",function(b){return"string"==typeof b})}
function Hh(a){return zh(th,a,"nodeType",function(b){return"number"==typeof b})}function Ih(a){return zh(uh,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}function Jh(a,b){return Ah(xh,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}function Kh(a,b,c){Ah(yh,a,a.setProperty?"setProperty":"setAttribute",[b,c])};var Lh=Je&&10>document.documentMode?null:/\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,Mh={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0},Ph=function(a,b,c){var d=[];a=Nh(C(a.cssRules));Mb(a,function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&Je&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(Lh,"#"+b+" $1"):e.selectorText;d.push($d(f,Oh(e.style,c)))}});
return be(d)},Nh=function(a){return Ob(a,function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})},Rh=function(a,b,c){a=Qh("<style>"+a+"</style>");return null==a||null==a.sheet?ce:Ph(a.sheet,void 0!=b?b:null,c)},Qh=function(a){if(Je&&!cf(10)||"function"!=typeof Ia.DOMParser)return null;a=me("<html><head></head><body>"+a+"</body></html>",null);return(new DOMParser).parseFromString(le(a),"text/html").body.children[0]},Oh=function(a,b){if(!a)return Nd;var c=document.createElement("div").style,
d=Sh(a);Mb(d,function(e){var f=Me&&e in Mh?e:e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");od(f,"--")||od(f,"var")||(e=Jh(a,e),e=ih(f,e,b),null!=e&&Kh(c,f,e))});return Md(c.cssText||"")},Uh=function(a){var b=Array.from(Ah(qh,a,"getElementsByTagName",["STYLE"])),c=tc(b,function(e){return C(Fh(e).cssRules)});c=Nh(c);c.sort(function(e,f){e=bh(e.selectorText);a:{f=bh(f.selectorText);for(var g=kc,h=Math.min(e.length,f.length),l=0;l<h;l++){var p=g(e[l],f[l]);if(0!=p){e=
p;break a}}e=kc(e.length,f.length)}return-e});a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var d;d=a.nextNode();)Mb(c,function(e){Ah(rh,d,d.matches?"matches":"msMatchesSelector",[e.selectorText])&&e.style&&Th(d,e.style)});Mb(b,pg)},Th=function(a,b){var c=Sh(a.style),d=Sh(b);Mb(d,function(e){if(!(0<=c.indexOf(e))){var f=Jh(b,e);Kh(a.style,e,f)}})},Sh=function(a){Sa(a)?a=C(a):(a=Oc(a),bc(a,"cssText"));return a};var Vh="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),Wh=0,Xh=function(){this.j=[];this.h=[];this.g="data-elementweakmap-index-"+Wh++};Xh.prototype.set=function(a,b){if(Ah(mh,a,"hasAttribute",[this.g])){var c=parseInt(Ah(nh,a,"getAttribute",[this.g])||null,10);this.h[c]=b}else c=this.h.push(b)-1,Ch(a,this.g,c.toString()),this.j.push(a);return this};
Xh.prototype.get=function(a){if(Ah(mh,a,"hasAttribute",[this.g]))return a=parseInt(Ah(nh,a,"getAttribute",[this.g])||null,10),this.h[a]};Xh.prototype.clear=function(){this.j.forEach(function(a){Ah(ph,a,"removeAttribute",[this.g])},this);this.j=[];this.h=[]};var Yh=Yf("goog.html.sanitizer.SafeDomTreeProcessor"),Zh=!Je||10<=Number(ff),$h=!Je||null==document.documentMode,ai=function(){};var bi={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var ci={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var di={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0},hi=function(a){a=a||new ei;fi(a);this.g=Sc(a.g);this.w=Sc(a.F);this.j=Sc(a.J);this.u=a.D;Mb(a.o,function(b){if(!od(b,"data-"))throw new Ib('Only "data-" attributes allowed, got: %s.',[b]);if(od(b,"data-sanitizer-"))throw new Ib('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.g["* "+b.toUpperCase()]=gi},
this);Mb(a.m,function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||di[b])throw new Ib("Only valid custom element tag names allowed, got: %s.",[b]);this.j[b]=!0},this);this.o=a.j;this.l=a.C;this.h=null;this.m=a.u};y(hi,ai);
var ii=function(a){return function(b,c){return(b=a(rd(b),c))&&"about:invalid#zClosurez"!=Gd(b)?Gd(b):null}},ei=function(){this.g={};Mb([Zg,$g],function(a){Mb(Oc(a),function(b){this.g[b]=gi},this)},this);this.h={};this.o=[];this.m=[];this.F=Sc(bi);this.J=Sc(ci);this.D=!1;this.L=Id;this.H=this.w=this.G=this.j=xc;this.C=null;this.l=this.u=!1},ji=function(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}},ki=function(a,b,c,d){a[c]&&!b[c]&&(a[c]=ji(a[c],d))};ei.prototype.ha=function(){return new hi(this)};
var fi=function(a){if(a.l)throw Error("HtmlSanitizer.Builder.build() can only be used once.");ki(a.g,a.h,"* USEMAP",li);var b=ii(a.L);Mb(["* ACTION","* CITE","* HREF"],function(d){ki(this.g,this.h,d,b)},a);var c=ii(a.j);Mb(["* LONGDESC","* SRC","LINK HREF"],function(d){ki(this.g,this.h,d,c)},a);Mb(["* FOR","* HEADERS","* NAME"],function(d){ki(this.g,this.h,d,bb(mi,this.G))},a);ki(a.g,a.h,"A TARGET",bb(ni,["_blank","_self"]));ki(a.g,a.h,"* CLASS",bb(oi,a.w));ki(a.g,a.h,"* ID",bb(pi,a.w));ki(a.g,a.h,
"* STYLE",bb(a.H,c));a.l=!0},qi=function(a,b){a||(a="*");return(a+" "+b).toUpperCase()},gi=function(a){return rd(a)},ni=function(a,b){b=rd(b);return Wb(a,b.toLowerCase())?b:null},li=function(a){return(a=rd(a))&&"#"==a.charAt(0)?a:null},mi=function(a,b,c){return a(rd(b),c)},oi=function(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")},pi=function(a,b,c){return a(rd(b),c)},ri=function(a,b){var c=b.data;(b=Ih(b))&&"style"==
Gh(b).toLowerCase()&&!("STYLE"in a.w)&&"STYLE"in a.j&&(c=ae(Rh(c,a.h,v(function(d,e){return this.o(d,{CJ:e})},a))));return document.createTextNode(c)},si=function(a){var b=(new ei).ha();var c=!("STYLE"in b.w)&&"STYLE"in b.j;c="*"==b.l&&c?"sanitizer-"+Ae():b.l;b.h=c;if(Zh){c=a;if(Zh){a=mg(document,"SPAN");b.h&&"*"==b.l&&(a.id=b.h);b.m&&(c=Qh("<div>"+c+"</div>"),Uh(c),c=c.innerHTML);c=me(c,null);var d=document.createElement("template");if($h&&"content"in d)re(d,c),d=d.content;else{var e=document.implementation.createHTMLDocument("x");
d=e.body;re(e.body,c)}c=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(d=Vh?new WeakMap:new Xh;e=c.nextNode();){c:{var f=b;var g=e;var h=Hh(g);switch(h){case 3:g=ri(f,g);break c;case 1:h=g;1==Hh(h)||Jb("Expected Node of type Element but got Node of type %s",Hh(h));g=f;f=h;if("TEMPLATE"==Gh(f).toUpperCase())g=null;else{h=Gh(f).toUpperCase();if(h in g.w)var l=null;else g.j[h]?l=document.createElement(h):(l=mg(document,"SPAN"),g.u&&Ch(l,"data-sanitizer-original-tag",
h.toLowerCase()));if(l){var p=l,r=Bh(f);if(null!=r)for(var t=0;h=r[t];t++)if(h.specified){var z=g;var A=f,G=h,P=G.name;if(od(P,"data-sanitizer-"))z=null;else{var wa=Gh(A);G=G.value;var Ya={tagName:rd(wa).toLowerCase(),attributeName:rd(P).toLowerCase()},nd={Yq:void 0};"style"==Ya.attributeName&&(nd.Yq=Dh(A));A=qi(wa,P);A in z.g?(z=z.g[A],z=z(G,Ya,nd)):(P=qi(null,P),P in z.g?(z=z.g[P],z=z(G,Ya,nd)):z=null)}null!==z&&Ch(p,h.name,z)}g=l}else g=null}break c;default:D(Yh,"Dropping unknown node type: "+
h),g=null}}if(g){if(1==Hh(g)&&d.set(e,g),e=Ih(e),f=!1,e)h=Hh(e),l=Gh(e).toLowerCase(),p=Ih(e),11!=h||p?"body"==l&&p&&(h=Ih(p))&&!Ih(h)&&(f=!0):f=!0,h=null,f||!e?h=a:1==Hh(e)&&(h=d.get(e)),h.content&&(h=h.content),h.appendChild(g)}else og(e)}d.clear&&d.clear();b=a}else b=mg(document,"SPAN");0<Bh(b).length&&(a=mg(document,"SPAN"),a.appendChild(b),b=a);b=(new XMLSerializer).serializeToString(b);b=b.slice(b.indexOf(">")+1,b.lastIndexOf("</"))}else b="";return me(b,null)};if("undefined"!=typeof angular){var ti=angular.module("chrome_18n",[]);chrome.runtime&&chrome.runtime.getManifest&&chrome.runtime.getManifest().default_locale&&ti.directive("angularMessage",function(){return{restrict:"E",replace:!0,controller:["$scope",function(a){var b=this;this.Fi=this.mf=null;a.dirForText=function(c){b.mf||(b.mf=chrome.i18n.getMessage("@@bidi_dir")||"ltr");b.Fi||(b.Fi=new rg("rtl"==b.mf));var d=b.Fi,e,f=e=0,g=!1;c=(c||"").split(Gc);for(var h=0;h<c.length;h++){var l=c[h];Ec.test(l)?
(e++,f++):Fc.test(l)?g=!0:Dc.test(l)?f++:Hc.test(l)&&(g=!0)}e=0==f?g?1:0:.4<e/f?-1:1;return-1==(0==e?d.g:e)?"rtl":"ltr"}}],compile:function(a,b){b=b.key;var c=null,d=document.createElement("amr");b&&!b.match(/^\d+$/)&&(b=chrome.i18n.getMessage(b),null==b&&d.setAttribute("id","missing"));if(b){var e=chrome.i18n.getMessage(b+"_ph");c=[];if(null!=e)for(c=e.split("\ue000"),e=0;e<c.length;++e)c[e]=c[e].replace(/^{{(.*)}}$/,'<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');c=chrome.i18n.getMessage(b,c)}else d.setAttribute("r",
"nokey");c?se(d,si(c)):(d.setAttribute("tl","false"),se(d,si(a.html())));a.replaceWith(d)}}})};var vi=function(a,b){var c=this;this.m=b;this.g=a;this.g.top=a;this.o=[];this.l=!1;this.h=new tg;this.g.videoSmoothnessRatings=this.Nk(Eg,zg,Ag,Bg,Cg,Dg);this.g.videoQualityRatings=this.Nk(Eg,Fg,Gg,Hg,Ig,Jg);this.g.audioQualityRatings=this.Nk(Eg,Kg,Lg,Mg,Ng,Og);this.o=[{value:"Bug",desc:ug},{value:"FeatureRequest",desc:vg},{value:"MirroringQuality",desc:wg},{value:"Discovery",desc:xg},{value:"Other",desc:yg}];this.g.feedbackTypes=this.o;this.g.includeFineLogs=!0;this.g.feedbackType="Bug";this.g.sendFeedback=
this.Su.bind(this);this.g.cancel=this.Qq.bind(this);this.g.attachLogsClick=this.w.bind(this);this.g.viewLogs=this.C.bind(this);this.g.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "),this.Tq.bind(this));this.g.sufficientFeedback=!1;this.g.$watch("attachLogs",this.w.bind(this));this.g.attachLogs=!0;this.u=Ae();this.g.userEmail="";chrome.identity.getProfileUserInfo(function(d){c.g.userEmail=d.email;ui(c)});this.g.yourAnswerText=Yg;this.g.language=
chrome.i18n&&chrome.i18n.getUILanguage?chrome.i18n.getUILanguage():chrome.runtime.getManifest().default_locale;this.g.requestLogsInProgress=!1;this.g.mrVersion=chrome.runtime.getManifest().version};k=vi.prototype;k.Nk=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(new wi(c,arguments[c]));b.push(new wi(0,arguments[0]));return b};k.Qq=function(){this.g.feedbackDescription&&!confirm(Pg)||window.close()};
k.Tq=function(){var a=this.g.feedbackType;this.g.sufficientFeedback="MirroringQuality"==a?this.g.videoSmoothness||this.g.videoQuality||this.g.audioQuality||this.g.comments:"Discovery"==a?this.g.visibleInSetup||this.g.comments:!!this.g.feedbackDescription};
k.Su=function(){if(this.g.sufficientFeedback){var a=this.g.feedbackType,b="";"MirroringQuality"==a?(this.g.videoSmoothness&&(b+="\nVideo Smoothness: "+this.g.videoSmoothness),this.g.videoQuality&&(b+="\nVideo Quality: "+this.g.videoQuality),this.g.audioQuality&&(b+="\nAudio: "+this.g.audioQuality),this.g.projectedContentUrl&&(b+="\nProjected Content/URL: "+this.g.projectedContentUrl),this.g.comments&&(b+="\nComments: "+this.g.comments)):"Discovery"==a?(this.g.visibleInSetup&&(b+="\nChromecast Visible in Setup: "+
this.g.visibleInSetup),this.g.hasNetworkSoftware&&(b+="\nUsing VPN/proxy/firewall/NAS Software: "+this.g.hasNetworkSoftware),this.g.networkDescription&&(b+="\nNetwork Description: "+this.g.networkDescription),this.g.comments&&(b+="\nComments: "+this.g.comments)):b=this.g.feedbackDescription;a="Type: "+a+"\n\n"+b;this.g.sendDialogText=Qg;this.g.okButton=Xg;this.g.feedbackSent=!1;this.m.show({locals:{GJ:this.g.feedbackSent,gK:this.g.sendDialogText,rt:this.g.okButton},scope:this.g,preserveScope:!0,bindToController:!0,
template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',controller:this.j});this.Xn(a,Date.now())}};k.Xn=function(a,b){var c=Date.now();!this.g.requestLogsInProgress||5E3<c-b?xi(this,a):setTimeout(this.Xn.bind(this),1E3,a,b)};
var xi=function(a,b){var c=0,d=function(f,g,h){h?f(!0):(a.g.sendDialogText=Tg,ui(a),g(Error("Failed to send")))},e=chrome.declarativeWebRequest?"MrTeamfood":"MRStable";(new of(function(){c++;return new Promise(function(f,g){var h=a.g.userEmail,l=a.h;f=d.bind(null,f,g);g=chrome.runtime.getManifest();sg({productId:85561,bucket:e,flow:"submit",serverUri:"https://www.google.com/tools/feedback",allowNonLoggedInFeedback:!0,locale:g.default_locale,enableAnonymousFeedback:!h,report:{description:b},callback:f},
{version:g.version,description:g.description,user_email:h||"NA",logs:l.Yd||"NA",external_logs:l.g||"NA",device_model:l.modelName||"NA",receiver_version:l.u||"NA",dash_report_url:l.l||"NA",cast_device_counts:l.h,dial_device_counts:l.j,mirroring_service_enabled:l.w,native_cast_mrp_enabled:l.m,native_dial_mrp_enabled:l.o})})},1E4,4)).start().then(function(){zb("MediaRouter.Ui.Action.Feedback");a.g.sendDialogText=Sg;a.g.feedbackSent=!0;ui(a)},function(){a.g.sendDialogText=Rg;a.g.feedbackSent=!0;ui(a)})};
vi.prototype.w=function(){var a=this;this.h=new tg;this.g.attachLogs&&(this.g.requestLogsInProgress=!0,chrome.runtime.sendMessage(new zf(this.u,"retrieve_log_data"),function(b){a.g.requestLogsInProgress=!1;a.h.Yd=b.logs||"no extension";a.h.Yd+="\n";a.h.Yd+=b.mediaSinkServiceStatus||"no media sink service status from browser";b.castStreamingLogs&&(a.h.l=b.castStreamingLogs);b.castDeviceCounts&&(a.h.h=b.castDeviceCounts);b.dialDeviceCounts&&(a.h.j=b.dialDeviceCounts);a.h.w=!!b.mirroringServiceEnabled;
a.h.m=!!b.nativeCastMrpEnabled;a.h.o=!!b.nativeDialMrpEnabled;if(b=b.device)if(b.model&&(a.h.modelName=b.model),b.version&&(a.h.u=b.version),!a.l){var c=Ae();a.l=!0;a.h.g=vf(b.ip,c,a.D.bind(a))}}))};
vi.prototype.C=function(){this.g.logs=this.h.Yd;this.g.logsHeader=Ug;this.g.sendLogs=Vg;this.g.fineLogsWarning=Wg;this.g.okButton=Xg;this.m.show({locals:{yJ:this.g.attachLogs,Yd:this.g.logs,LJ:this.g.includeFineLogs,VJ:this.g.logsHeader,hK:this.g.sendLogs,HJ:this.g.fineLogsWarning,rt:this.g.okButton},scope:this.g,preserveScope:!0,bindToController:!0,clickOutsideToClose:!0,template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',
controller:this.j})};vi.prototype.D=function(a,b){this.l=!1;this.h.g="error"==a?"":b;this.g.attachLogs||(this.h.g="");ui(this)};var ui=function(a){a.g.$$phase||a.g.$apply()};vi.prototype.j=function(a,b){a.closeWindow=function(){window.close()};a.closeDialog=function(){b.hide()}};vi.prototype.j.$inject=["$scope","$mdDialog"];var wi=function(a,b){this.id=a;this.desc=b;this.text=0==a?b:a+" ("+b+")"};
angular.module("feedbackApp","chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl",["$scope","$mdDialog",vi]);x("ng.safehtml.googSceHelper.isGoogHtmlType",function(a){return a&&a.dd?!0:!1});x("ng.safehtml.googSceHelper.isCOMPILED",function(){return!0});x("ng.safehtml.googSceHelper.unwrapAny",function(a){if(a instanceof hd)return id(a).toString();if(a instanceof ke)return le(a).toString();if(a instanceof Fd)return Gd(a);if(a instanceof Kd)return Ld(a);if(a instanceof dd)return ed(a).toString();throw Error();});
x("ng.safehtml.googSceHelper.unwrapGivenContext",function(a,b){if("html"==a)return le(b).toString();if("resourceUrl"==a||"templateUrl"==a)return id(b).toString();if("url"==a)return b instanceof hd?id(b).toString():Gd(b);if("css"==a)return Ld(b);if("js"==a)return ed(b).toString();throw Error();});
