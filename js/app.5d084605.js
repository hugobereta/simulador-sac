(function(a){function t(t){for(var s,i,n=t[0],c=t[1],l=t[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(a[s]=c[s]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var a,t=0;t<o.length;t++){for(var e=o[t],s=!0,n=1;n<e.length;n++){var c=e[n];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),a=i(i.s=e[0]))}return a}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=a,i.c=s,i.d=function(a,t,e){i.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)i.d(e,s,function(t){return a[t]}.bind(null,s));return e},i.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(t,"a",t),t},i.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},i.p="/simulador-sac/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var d=c;o.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"152e":function(a,t,e){"use strict";e("d965")},"1b66":function(a,t,e){},4678:function(a,t,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(a){var t=o(a);return e(t)}function o(a){if(!e.o(s,a)){var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}return s[a]}r.keys=function(){return Object.keys(s)},r.resolve=o,a.exports=r,r.id="4678"},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=e("7496"),o=e("40dc"),i=e("8336"),n=e("62ad"),c=e("553a"),l=e("132d"),d=e("f6c4"),u=e("0fd9"),m=e("2a7f"),f=function(){var a=this,t=a._self._c;return t(r["a"],[t(o["a"],{staticClass:"d-print-none",attrs:{app:"",color:"#225198",dark:""}},[t(m["a"],[a._v(a._s(a.appTitle))])],1),t(d["a"],[t("transition",{attrs:{name:"fade",mode:"out-in"}},[a.isEditing?t("Dados"):a.isPrinting?t("Impressao"):t("Simulacao")],1)],1),t(c["a"],{attrs:{app:"",dark:"",padless:"",color:"#225198"}},[t(u["a"],{attrs:{align:"center",justify:"end"}},[t(n["a"],{staticClass:"text-center d-print-none",attrs:{cols:"12",sm:"6",md:"7"}},[a._v(" "+a._s((new Date).getFullYear())+" - "),t("strong",[a._v("Desenvolvido por "+a._s(a.authorName))])]),t(n["a"],{staticClass:"text-right d-print-none",attrs:{cols:"12",sm:"6",md:"3"}},a._l(a.links,(function(e){return t(i["a"],{key:e.icon,staticClass:"mx-4 white--text",attrs:{href:e.href,target:"_blank",icon:""}},[t(l["a"],{attrs:{size:"20px"}},[a._v(a._s(e.icon))])],1)})),1)],1)],1)],1)},p=[],b=e("5530"),g=e("b0af"),v=e("99d9"),j=e("a523"),_=e("2e4b"),y=e("ce7e"),h=e("4bd4"),x=e("e449"),k=e("2fa4"),C=e("8654"),P=e("71d9"),D=e("3a2f"),O=(e("0481"),e("4069"),function(){var a=this,t=a._self._c;return t(j["a"],{staticClass:"fill-height",attrs:{fluid:""}},[t(u["a"],{attrs:{align:"center",justify:"center"}},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"10",md:"8"}},[t(P["a"],{staticClass:"mb-1",attrs:{color:"#F8D117",elevation:"8",tile:!1}},[t("p",{staticClass:"title text-primary mt-4"},[a._v("Dados da Operação")]),t(k["a"]),t(D["a"],{attrs:{left:""},scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(i["a"],a._g({attrs:{icon:"",disabled:!a.validForm},on:{click:a.simularEmprestimo}},s),[t(l["a"],[a._v("mdi-calculator")])],1)]}}])},[t("span",[a._v("Simular")])]),t(D["a"],{attrs:{right:""},scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(i["a"],a._g({attrs:{icon:""},on:{click:a.limparCampos}},s),[t(l["a"],[a._v("mdi-trash-can-outline")])],1)]}}])},[t("span",[a._v("Limpar")])])],1),t(g["a"],{attrs:{elevation:"8"}},[t(v["b"],[t(h["a"],{ref:"formDados",model:{value:a.validForm,callback:function(t){a.validForm=t},expression:"validForm"}},[t(j["a"],{attrs:{fluid:""}},[t(u["a"],{attrs:{justify:"space-around"}},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}},[t(C["a"],{directives:[{name:"money",rawName:"v-money",value:a.moneyConfig,expression:"moneyConfig"}],ref:"inputValor",attrs:{label:"Valor",prefix:"R$","manual-clean":""},on:{keydown:a.keyHandler},model:{value:a.emprestimo.valor,callback:function(t){a.$set(a.emprestimo,"valor",t)},expression:"emprestimo.valor"}})],1),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}},[t(C["a"],{directives:[{name:"money",rawName:"v-money",value:a.emprestimo.tacPercent?a.percentConfigPrecision2:a.moneyConfig,expression:"emprestimo.tacPercent ? percentConfigPrecision2 : moneyConfig"}],ref:"inputTac",attrs:{label:"Tarifa",prefix:a.emprestimo.tacPercent?"":"R$","manual-clean":""},on:{keydown:a.keyHandler},model:{value:a.emprestimo.tac,callback:function(t){a.$set(a.emprestimo,"tac",t)},expression:"emprestimo.tac"}},[t(D["a"],{attrs:{slot:"append",bottom:""},slot:"append",scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(l["a"],a._g({attrs:{color:"grey darken-1"},on:{click:a.toggleTacPercent}},s),[a._v(" "+a._s(a.emprestimo.tacPercent?"mdi-currency-brl":"mdi-percent")+" ")])]}}])},[t("span",[a._v("Alterna entre valor em real e percentual")])])],1)],1),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}},[t(C["a"],{directives:[{name:"money",rawName:"v-money",value:a.emprestimo.flatPercent?a.percentConfigPrecision2:a.moneyConfig,expression:"emprestimo.flatPercent ? percentConfigPrecision2 : moneyConfig"}],ref:"inputFlat",attrs:{label:"Comissão Flat",prefix:a.emprestimo.flatPercent?"":"R$","manual-clean":""},on:{keydown:a.keyHandler},model:{value:a.emprestimo.flat,callback:function(t){a.$set(a.emprestimo,"flat",t)},expression:"emprestimo.flat"}},[t(D["a"],{attrs:{slot:"append",bottom:""},slot:"append",scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(l["a"],a._g({attrs:{color:"grey darken-1"},on:{click:a.toggleFlatPercent}},s),[a._v(" "+a._s(a.emprestimo.flatPercent?"mdi-currency-brl":"mdi-percent")+" ")])]}}])},[t("span",[a._v("Alterna entre valor em real e percentual")])])],1)],1)],1),t(u["a"],{attrs:{justify:"space-around"}},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}},[t(C["a"],{directives:[{name:"mask",rawName:"v-mask",value:"##",expression:"'##'"}],attrs:{label:"Dia base",rules:[a.rules.checkDiaBase]},model:{value:a.emprestimo.diaBase,callback:function(t){a.$set(a.emprestimo,"diaBase",a._n(t))},expression:"emprestimo.diaBase"}})],1),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}},[t(C["a"],{directives:[{name:"money",rawName:"v-money",value:a.percentConfigPrecision3,expression:"percentConfigPrecision3"}],ref:"inputTaxa",attrs:{label:"Taxa de Juros","manual-clean":""},on:{keydown:a.keyHandler},model:{value:a.emprestimo.taxa,callback:function(t){a.$set(a.emprestimo,"taxa",t)},expression:"emprestimo.taxa"}})],1),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}},[t(x["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(C["a"],a._g({attrs:{label:"Data da Liberação","append-icon":"mdi-calendar",readonly:"",value:a.dataLiberacaoFormatted},on:{"click:append":function(t){a.menuData=!0}}},s))]}}]),model:{value:a.menuData,callback:function(t){a.menuData=t},expression:"menuData"}},[t(_["a"],{attrs:{locale:"pt-br"},on:{input:function(t){a.menuData=!1}},model:{value:a.emprestimo.dataLiberacao,callback:function(t){a.$set(a.emprestimo,"dataLiberacao",t)},expression:"emprestimo.dataLiberacao"}})],1)],1)],1),t(u["a"],{attrs:{justify:"space-around"}},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}},[t(C["a"],{directives:[{name:"mask",rawName:"v-mask",value:"###",expression:"'###'"}],attrs:{label:"Qtde de Parcelas (Meses)",rules:[a.rules.positiveOnly]},model:{value:a.emprestimo.qtdeParcelas,callback:function(t){a.$set(a.emprestimo,"qtdeParcelas",a._n(t))},expression:"emprestimo.qtdeParcelas"}})],1),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}},[t(C["a"],{directives:[{name:"mask",rawName:"v-mask",value:"##",expression:"'##'"}],attrs:{label:"Carência (Meses)",rules:[a.rules.positiveAndZero]},model:{value:a.emprestimo.carencia,callback:function(t){a.$set(a.emprestimo,"carencia",a._n(t))},expression:"emprestimo.carencia"}})],1),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"3"}})],1),t(y["a"],{staticClass:"mb-4"}),t(u["a"],{staticClass:"d-print-none"},[t(n["a"],{staticClass:"d-flex justify-end"},[t(i["a"],{staticClass:"white--text",attrs:{color:"#23569C",large:"",elevation:"8",disabled:!a.validForm},on:{click:a.simularEmprestimo}},[t(l["a"],[a._v("mdi-calculator")]),t("span",{staticClass:"mx-2"},[a._v("Simular")])],1),t(i["a"],{staticClass:"ml-2",attrs:{color:"warning",large:"",elevation:"8"},on:{click:a.limparCampos}},[t(l["a"],[a._v("mdi-trash-can-outline")]),t("span",{staticClass:"mx-2"},[a._v("Limpar")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),T=[],F=(e("ac1f"),e("5319"),e("2f62")),I=e("3a60"),w=e("716b"),E=e("c1df"),S=e.n(E),L=(e("35b3"),e("a9e3"),{valor:"0",tac:"0",tacPercent:!0,flat:"0",flatPercent:!0,diaBase:1,taxa:"0",dataLiberacao:(new Date).toISOString().substring(0,10),qtdeParcelas:1,carencia:0}),A={tacMax:5e3,flatMin:100,flatPercentMax:5,aliquotaIOFAdicional:.0038,aliquotaIOFDiario:41e-6},z=function(a){var t=a;return"string"===typeof a?t=parseFloat(a.replace("%","").replace(/\./g,"").replace(",",".")):"number"!==typeof a&&(t=NaN),t},M=function(a){return Math.round(100*(a+Number.EPSILON))/100},R=function(a){return Math.floor(100*a)/100},q=function(a,t){return S()(a).diff(S()(t),"days")},B={name:"Dados",directives:{mask:I["mask"],money:w["VMoney"]},mounted:function(){this.$refs.inputValor.focus()},data:function(){return{menuData:!1,validForm:!1,rules:{positiveOnly:function(a){return+a>0||"Valor deve ser maior que zero."},positiveAndZero:function(a){return+a>=0||"Valor deve ser maior ou igual a zero."},checkDiaBase:function(a){return a>=1&&a<=28||"Dia base para prestação deve estar entre 1 e 28."},checkMaskedValue:function(a){var t=parseFloat(a.replace("%","").replace(/\./g,"").replace(",","."));return t>0||"Valor deve ser maior que zero."}},moneyConfig:{decimal:",",thousands:".",precision:2,masked:!1},percentConfigPrecision3:{decimal:",",thousands:".",prefix:"",suffix:"%",precision:3,masked:!1},percentConfigPrecision2:{decimal:",",thousands:".",prefix:"",suffix:"%",precision:2,masked:!1}}},methods:Object(b["a"])(Object(b["a"])({},Object(F["b"])(["setEmprestimo","resetEmprestimo","setResultado","setIsEditing","setIsPrinting"])),{},{keyHandler:function(a){"-"===a.key&&a.preventDefault()},toggleFlatPercent:function(){this.emprestimo.flatPercent=!this.emprestimo.flatPercent,this.$refs.inputFlat.focus()},toggleTacPercent:function(){this.emprestimo.tacPercent=!this.emprestimo.tacPercent,this.$refs.inputTac.focus()},limparCampos:function(){for(var a=document.querySelectorAll("[manual-clean]"),t=0;t<a.length;t++)a[t].value=0;this.resetEmprestimo(),this.$refs.inputValor.focus()},simularEmprestimo:function(){var a=z(this.emprestimo.valor),t=z(this.emprestimo.taxa);a&&t?(this.setEmprestimo(this.emprestimo),this.setIsEditing(!1),this.setIsPrinting(!1)):a?this.$refs.inputTaxa.focus():this.$refs.inputValor.focus()}}),computed:Object(b["a"])(Object(b["a"])({},Object(F["c"])({emprestimo:"getEmprestimo"})),{},{dataLiberacaoFormatted:function(){return this.emprestimo.dataLiberacao?S()(this.emprestimo.dataLiberacao).format("DD/MM/YYYY"):""}})},$=B,V=e("2877"),Y=Object(V["a"])($,O,T,!1,null,null,null),N=Y.exports,J=function(){var a=this,t=a._self._c;return t(j["a"],{staticClass:"fill-height d-print-block",attrs:{fluid:""}},[t(u["a"],{staticClass:"d-print-block",attrs:{align:"center",justify:"center"}},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"10",md:"8"}},[t(P["a"],{staticClass:"mb-1",attrs:{color:"#F8D117",elevation:"8",tile:!1}},[t("p",{staticClass:"title text-primary mt-4"},[a._v("Dados da Simulação")]),t(k["a"]),t(D["a"],{attrs:{left:""},scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(i["a"],a._g({staticClass:"d-print-none",attrs:{icon:""},on:{click:function(t){return a.setIsEditing(!0)}}},s),[t(l["a"],[a._v("mdi-lead-pencil")])],1)]}}])},[t("span",[a._v("Editar dados")])]),t(D["a"],{attrs:{right:""},scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(i["a"],a._g({staticClass:"d-print-none",attrs:{icon:""},on:{click:function(t){return a.setIsPrinting(!0)}}},s),[t(l["a"],[a._v("mdi-printer")])],1)]}}])},[t("span",[a._v("Preparar impressão")])])],1),t("Resultado",{scopedSlots:a._u([{key:"buttons",fn:function(){return[t(u["a"],{staticClass:"d-print-none"},[t(n["a"],{staticClass:"d-flex justify-end",attrs:{"offset-md":"8"}},[t(i["a"],{staticClass:"white--text",attrs:{color:"#23569C",large:"",elevation:"8"},on:{click:function(t){return a.setIsEditing(!0)}}},[t(l["a"],[a._v("mdi-lead-pencil")]),t("span",{staticClass:"mx-2"},[a._v("Editar Dados")])],1)],1),t(n["a"],{staticClass:"d-flex justify-end"},[t(i["a"],{staticClass:"white--text",attrs:{color:"green",large:"",elevation:"8"},on:{click:function(t){return a.setIsPrinting(!0)}}},[t(l["a"],[a._v("mdi-printer")]),t("span",{staticClass:"mx-2"},[a._v("Imprimir")])],1)],1)],1)]},proxy:!0}])})],1)],1)],1)},H=[],G=e("8fea"),U=e("169a"),Z=function(){var a=this,t=a._self._c;return t(g["a"],{attrs:{elevation:a.isPrinting?1:8}},[t(v["c"],{staticClass:"subtitle-1 grey--text"},[t("span",[a._v("Operação de Crédito")]),t(y["a"],{staticClass:"ml-2"})],1),t(v["b"],[t(j["a"],{attrs:{fluid:""}},[t(u["a"],{staticClass:"d-flex align-center"},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Valor: "),t("strong",{staticClass:"blue--text text--darken-2"},[a._v(a._s(a._f("currency")(a.resultado.valor)))])])]),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" TAC: "),t("strong",{staticClass:"red--text"},[a._v(a._s(a._f("currency")(a.resultado.tac)))])])]),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" FLAT: "),t("strong",{staticClass:"red--text"},[a._v(a._s(a._f("currency")(a.resultado.flat)))])])]),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" IOF: "),t("strong",{staticClass:"red--text"},[a._v(a._s(a._f("currency")(a.iofTotal)))])]),t(i["a"],{staticClass:"d-print-none",attrs:{icon:""},on:{click:function(t){a.iofDialog=!0}}},[t(l["a"],{staticClass:"mb-1"},[a._v("mdi-help-circle-outline")])],1),t(U["a"],{attrs:{"max-width":"300"},model:{value:a.iofDialog,callback:function(t){a.iofDialog=t},expression:"iofDialog"}},[t(g["a"],[t(v["c"],{staticClass:"headline"},[a._v("Detalhamento")]),t(v["b"],[t("p",[a._v("IOF: "+a._s(a._f("currency")(a.iofDiario)))]),t("p",[a._v("IOF Adicional: "+a._s(a._f("currency")(a.iofAdicional)))]),t(y["a"],{staticClass:"mb-4"}),t("p",{staticClass:"body-1 red--text"},[t("strong",[a._v("IOF Total: "+a._s(a._f("currency")(a.iofTotal)))])])],1),t(v["a"],[t(k["a"]),t(i["a"],{attrs:{color:"green darken-1",text:""},on:{click:function(t){a.iofDialog=!1}}},[a._v("Fechar")])],1)],1)],1)],1)],1),t(u["a"],{staticClass:"d-flex align-center"},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Data base: "),t("strong",[a._v(a._s(a._f("dataBase")(a.resultado.diaBase)))])])]),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Taxa de Juros(a.m.): "),t("strong",[a._v(a._s(a._f("percent")(a.resultado.taxa)))])])]),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Parcelas (Meses): "),t("strong",[a._v(a._s(a.resultado.qtdeParcelas))])])]),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Carência (Meses): "),t("strong",[a._v(a._s(a.resultado.carencia))])])])],1),t(u["a"],{staticClass:"d-flex align-center"},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Data da Liberação: "),t("strong",[a._v(a._s(a.dataLiberacao))])])]),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Custo Total: "),t("strong",{staticClass:"red--text"},[a._v(a._s(a._f("currency")(a.custoTotal)))])]),t(i["a"],{staticClass:"d-print-none",attrs:{icon:""},on:{click:function(t){a.jurosDialog=!0}}},[t(l["a"],{staticClass:"mb-1"},[a._v("mdi-help-circle-outline")])],1),t(U["a"],{attrs:{"max-width":"300"},model:{value:a.jurosDialog,callback:function(t){a.jurosDialog=t},expression:"jurosDialog"}},[t(g["a"],[t(v["c"],{staticClass:"headline"},[a._v("Resumo dos Custos")]),t(v["b"],[t("p",[a._v("Tarifas: "+a._s(a._f("currency")(a.tarifasTotais)))]),t(y["a"],{staticClass:"mb-4"}),t("p",[a._v("IOF Total: "+a._s(a._f("currency")(a.iofTotal)))]),t(y["a"],{staticClass:"mb-4"}),t("p",[a._v("Juros Totais: "+a._s(a._f("currency")(a.jurosTotais)))]),t(y["a"],{staticClass:"mb-4"}),t("p",{staticClass:"body-2 red--text"},[t("strong",[a._v("Despesas Totais: "+a._s(a._f("currency")(a.tarifasTotais+a.iofTotal+a.jurosTotais)))])])],1),t(v["a"],[t(k["a"]),t(i["a"],{attrs:{color:"green darken-1",text:""},on:{click:function(t){a.jurosDialog=!1}}},[a._v("Fechar")])],1)],1)],1)],1),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Venc. Final: "),t("strong",[a._v(" "+a._s(a.vencimentoFinal)+" "),t("span",{staticClass:"subtitle-2"},[a._v("("+a._s(a.prazoTotalDias)+" dias)")])])])]),t(n["a"],{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"3"}},[t("span",{staticClass:"body-1"},[a._v(" Crédito Líquido: "),t("strong",{staticClass:"blue--text text--darken-2"},[a._v(a._s(a._f("currency")(a.resultado.valor-a.custoTotal)))])])])],1),t(u["a"],[t(n["a"],{staticClass:"d-flex row align-center subtitle-1 grey--text ml-1",attrs:{cols:"12"}},[t("span",{},[a._v("Prestações simuladas")]),t(y["a"],{staticClass:"ml-2"})],1)],1),t(u["a"],{staticClass:"d-print-block"},[t(n["a"],{attrs:{cols:"12"}},[t(G["a"],{staticClass:"elevation-2",attrs:{headers:a.headers,items:a.prestacoes,"hide-default-footer":"","disable-pagination":""},scopedSlots:a._u([{key:"item.juros",fn:function(t){var e=t.item;return[a._v(a._s(a._f("decimal")(e.juros)))]}},{key:"item.principal",fn:function(t){var e=t.item;return[a._v(a._s(a._f("decimal")(e.principal)))]}},{key:"item.totalPagar",fn:function(t){var e=t.item;return[a._v(a._s(a._f("decimal")(e.totalPagar)))]}},{key:"item.devedor",fn:function(t){var e=t.item;return[a._v(a._s(a._f("decimal")(e.devedor)))]}}],null,!0)})],1)],1),t(y["a"],{staticClass:"my-1"}),t(u["a"],[t(n["a"],[t("p",{staticClass:"text-justify caption"},[a._v(" As condições apresentadas não valem como proposta de crédito e representam apenas uma simulação. Até a contratação da operação as condições da linha de crédito podem ser alteradas sem prévio aviso. As operações de crédito estão sujeitas à análise e aprovação cadastral do Banco. Na simulação do cálculo do IOF foi considerada a alíquota padrão para operações com pessoa jurídica. Em algumas operações poderão ser adotadas alíquotas reduzidas, conforme legislação vigente e informações cadastrais. Este simulador é uma produção independente, não tendo qualquer validação ou homologação por parte de Instituições Financeiras, criada apenas para fins de estimar valores para operações de crédito pré-fixadas, na metodologia SAC, sem quaisquer fins lucrativos ou promocionais. ")])])],1),a._t("buttons")],2)],1)],1)},Q=[],K={name:"Resultado",data:function(){return{headers:[{text:"#",sortable:!1,value:"numParcela"},{text:"DATA",align:"start",sortable:!1,value:"data"},{text:"JUROS",sortable:!1,value:"juros"},{text:"CAPITAL",sortable:!1,value:"principal"},{text:"PRESTAÇÃO",sortable:!1,value:"totalPagar"},{text:"SALDO DEVEDOR",sortable:!1,value:"devedor"}],iofDialog:!1,jurosDialog:!1}},computed:Object(b["a"])({},Object(F["c"])({resultado:"getResultado",iofDiario:"getIOFDiario",iofAdicional:"getIOFAdicional",iofTotal:"getIOFTotal",tarifasTotais:"getTarifasTotais",jurosTotais:"getJurosTotais",dataLiberacao:"getDataLiberacaoFormatted",custoTotal:"getCustoTotal",vencimentoFinal:"getVencimentoFinal",prestacoes:"getPrestacoes",prazoTotalDias:"getPrazoTotalDias",isPrinting:"getIsPrinting"})),filters:{currency:function(a){return a.toLocaleString("pt-BR",{style:"currency",currency:"BRL",useGrouping:!0,minimumFractionDigits:2})},decimal:function(a){return a.toLocaleString("pt-BR",{style:"decimal",useGrouping:!0,minimumFractionDigits:2,maximumFractionDigits:2})},dataBase:function(a){return a.toLocaleString("pt-BR",{minimumIntegerDigits:2})},percent:function(a){return a.toLocaleString("pt-BR",{style:"percent",minimumFractionDigits:2})}}},W=K,X=(e("da847"),Object(V["a"])(W,Z,Q,!1,null,null,null)),aa=X.exports,ta={name:"Simulacao",components:{Resultado:aa},methods:Object(b["a"])({},Object(F["b"])(["setIsEditing","setIsPrinting"]))},ea=ta,sa=(e("90d9"),Object(V["a"])(ea,J,H,!1,null,null,null)),ra=sa.exports,oa=function(){var a=this,t=a._self._c;return t(j["a"],{staticClass:"fill-height d-print-block",attrs:{fluid:""}},[t(u["a"],{staticClass:"d-print-block",attrs:{align:"center",justify:"center"}},[t(n["a"],{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t(P["a"],{staticClass:"mb-1",attrs:{elevation:"1",tile:!1}},[t("p",{staticClass:"title text-primary mt-4"},[a._v("Dados da Simulação")]),t(k["a"]),t(D["a"],{attrs:{left:""},scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(i["a"],a._g({staticClass:"d-print-none",attrs:{icon:""},on:{click:function(t){return a.setIsEditing(!0)}}},s),[t(l["a"],[a._v("mdi-lead-pencil")])],1)]}}])},[t("span",[a._v("Editar dados")])]),t(D["a"],{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t(i["a"],a._g({staticClass:"d-print-none",attrs:{icon:""},on:{click:function(t){return a.setIsPrinting(!1)}}},s),[t(l["a"],[a._v("mdi-arrow-left-bold-circle")])],1)]}}])},[t("span",[a._v("Retornar para simulação")])])],1),t("Resultado")],1)],1)],1)},ia=[],na={name:"Impressao",components:{Resultado:aa},data:function(){return{headers:[{text:"DATA",align:"start",sortable:!1,value:"data"},{text:"JUROS",sortable:!1,value:"juros"},{text:"CAPITAL",sortable:!1,value:"principal"},{text:"PRESTAÇÃO",sortable:!1,value:"totalPagar"},{text:"SALDO DEVEDOR",sortable:!1,value:"devedor"}]}},methods:Object(b["a"])({},Object(F["b"])(["setIsEditing","setIsPrinting"])),computed:Object(b["a"])({},Object(F["c"])({resultado:"getResultado",iofDiario:"getIOFDiario",iofAdicional:"getIOFAdicional",iofTotal:"getIOFTotal",tarifasTotais:"getTarifasTotais",jurosTotais:"getJurosTotais",dataLiberacao:"getDataLiberacaoFormatted",custoTotal:"getCustoTotal",vencimentoFinal:"getVencimentoFinal",prestacoes:"getPrestacoes",prazoTotalDias:"getPrazoTotalDias"})),filters:{currency:function(a){return a.toLocaleString("pt-BR",{style:"currency",currency:"BRL",useGrouping:!0,minimumFractionDigits:2})},decimal:function(a){return a.toLocaleString("pt-BR",{style:"decimal",useGrouping:!0,minimumFractionDigits:2,maximumFractionDigits:2})},dataBase:function(a){return a.toLocaleString("pt-BR",{minimumIntegerDigits:2})},percent:function(a){return a.toLocaleString("pt-BR",{style:"percent",minimumFractionDigits:2})}}},ca=na,la=Object(V["a"])(ca,oa,ia,!1,null,null,null),da=la.exports,ua={name:"App",components:{Dados:N,Simulacao:ra,Impressao:da},data:function(){return{appTitle:"Simulador de Operações - SAC",authorName:"Hugo Bereta",links:[{icon:"mdi-at",href:"mailto:hugo_bereta@yahoo.com.br"},{icon:"mdi-facebook",href:"https://facebook.com/hugobereta"},{icon:"mdi-instagram",href:"https://instagram.com/hugobereta"},{icon:"mdi-twitter",href:"https://twitter.com/hugobereta"},{icon:"mdi-linkedin",href:"https://www.linkedin.com/in/hugobereta/"}]}},computed:Object(b["a"])({},Object(F["c"])({isEditing:"getIsEditing",isPrinting:"getIsPrinting"}))},ma=ua,fa=(e("152e"),Object(V["a"])(ma,f,p,!1,null,null,null)),pa=fa.exports,ba={state:{isEditing:!0,isPrinting:!1},getters:{getIsEditing:function(a){return a.isEditing},getIsPrinting:function(a){return a.isPrinting}},mutations:{setIsEditing:function(a,t){a.isEditing=t},setIsPrinting:function(a,t){a.isPrinting=t}},actions:{setIsEditing:function(a,t){var e=a.commit;e("setIsEditing",t)},setIsPrinting:function(a,t){var e=a.commit;e("setIsPrinting",t)}}},ga={state:{emprestimo:Object(b["a"])({},L)},getters:{getEmprestimo:function(a){return a.emprestimo}},mutations:{setEmprestimo:function(a,t){a.emprestimo=Object(b["a"])({},t)},resetEmprestimo:function(a){a.emprestimo=Object(b["a"])({},L)}},actions:{setEmprestimo:function(a,t){var e=a.commit,s=a.dispatch;e("setEmprestimo",t),s("setResultado",t)},resetEmprestimo:function(a){var t=a.commit;t("resetEmprestimo")},setResultado:function(a,t){var e=a.commit,s=a.dispatch,r=t.valor,o=t.tac,i=t.tacPercent,n=t.flat,c=t.flatPercent,l=t.diaBase,d=t.taxa,u=t.dataLiberacao,m=t.qtdeParcelas,f=t.carencia;r=z(r),o=z(o),i&&(o*=r/100),o=o>A.tacMax?A.tacMax:o,n=z(n),c&&(n*=r/100),0!==n&&(n=n<A.flatMin?A.flatMin:n),n=n/r*100>A.flatPercentMax?r*A.flatPercentMax/100:n,d=z(d)/100;var p={valor:r,tac:o,flat:n,diaBase:l,taxa:d,dataLiberacao:u,qtdeParcelas:m,carencia:f};e("setResultado",p),s("setPrestacoes",p)}}},va=(e("d3b7"),e("159b"),e("14d9"),e("13d5"),e("d81d"),e("b680"),{state:{resultado:{valor:0,tac:0,flat:0,diaBase:0,taxa:0,dataLiberacao:"",qtdeParcelas:0,carencia:0},iofDiario:0,prestacoes:[]},getters:{getResultado:function(a){return a.resultado},getIOFDiario:function(a){return R(a.iofDiario)},getPrestacoes:function(a){var t=[],e={},s=0;return a.prestacoes.forEach((function(a){e={},e.numParcela=s++,e.data=S()(a.data).format("DD/MM/YYYY"),e.juros=M(a.juros),e.principal=M(a.principal),e.totalPagar=M(a.principal)+M(a.juros),e.devedor=a.devedor,t.push(e)})),t},getIOFAdicional:function(a){return a.resultado.valor*A.aliquotaIOFAdicional},getIOFTotal:function(a,t){return t.getIOFDiario+t.getIOFAdicional},getTarifasTotais:function(a){return a.resultado.tac+a.resultado.flat},getCustoTotal:function(a,t){return t.getIOFTotal+t.getTarifasTotais},getJurosTotais:function(a,t){var e=t.getPrestacoes;return e.map((function(a){return a.juros})).reduce((function(a,t){return a+t}))},getParcelaCapital:function(a){return a.resultado.valor/a.resultado.qtdeParcelas||0},getDataLiberacaoFormatted:function(a){return a.resultado.dataLiberacao?S()(a.resultado.dataLiberacao).format("DD/MM/YYYY"):""},getTaxaAno:function(a){var t=a.resultado.taxa;return Math.pow(1+t,12)-1},getPrazoTotalMeses:function(a){return a.resultado.qtdeParcelas+a.resultado.carencia},getVencimentoFinal:function(a){var t=a.prestacoes[a.prestacoes.length-1].data;return t?S()(t).format("DD/MM/YYYY"):""},getPrazoTotalDias:function(a){var t=a.prestacoes[a.prestacoes.length-1].data;return q(t,a.resultado.dataLiberacao)}},mutations:{setResultado:function(a,t){a.resultado=t},setPrestacoes:function(a,t){a.prestacoes=t},setIOFDiario:function(a,t){a.iofDiario=t}},actions:{setPrestacoes:function(a,t){var e=a.commit,s=a.getters,r=[],o=0,i=0,n=0,c=0,l=0,d=t.valor,u=t.diaBase,m=t.dataLiberacao,f=t.carencia;if(0===d)return[];var p={data:m,juros:0,principal:0,devedor:d};r.push(Object(b["a"])({},p)),l=s.getPrazoTotalMeses;for(var g=1;g<l;g++)S()(m).date()>=u?p.data=S()(m).add(1,"M").date(u):p.data=S()(m).date(u),o=q(p.data,m),i=Math.pow(1+s.getTaxaAno,o/360)-1,p.juros=+(i*p.devedor).toFixed(3),n+=o,n<=365?c+=A.aliquotaIOFDiario*p.devedor*o:n-o<=365&&(c+=A.aliquotaIOFDiario*p.devedor*(365-(n-o))),o<30&&1===g&&(f++,l++),g>f&&(p.principal=R(s.getParcelaCapital)),p.devedor=M(p.devedor-R(p.principal)),r.push(Object(b["a"])({},p)),m=p.data;S()(m).date()>=u?p.data=S()(m).add(1,"M").date(u):p.data=S()(m).date(u),o=q(p.data,m),i=Math.pow(1+s.getTaxaAno,o/360)-1,p.juros=+(i*p.devedor).toFixed(3),p.juros=+p.juros.toFixed(2),p.principal=M(p.devedor),p.devedor=0,r.push(Object(b["a"])({},p)),e("setIOFDiario",c),e("setPrestacoes",r)}}});s["a"].use(F["a"]);var ja=new F["a"].Store({modules:{app:ba,dados:ga,simulacao:va}}),_a=e("f309");s["a"].use(_a["a"]);var ya=new _a["a"]({});s["a"].config.productionTip=!0,new s["a"]({store:ja,vuetify:ya,render:function(a){return a(pa)}}).$mount("#app")},"7bc4":function(a,t,e){},"90d9":function(a,t,e){"use strict";e("7bc4")},d965:function(a,t,e){},da847:function(a,t,e){"use strict";e("1b66")}});
//# sourceMappingURL=app.5d084605.js.map