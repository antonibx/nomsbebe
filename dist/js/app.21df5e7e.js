(function(e){function t(t){for(var a,o,s=t[0],l=t[1],d=t[2],u=0,b=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);i&&i(t);while(b.length)b.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==c[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var i=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3df8":function(e,t,n){"use strict";n("8751")},"458b":function(e,t,n){e.exports=n.p+"dist/img/nena.0eea8811.png"},"462a":function(e,t,n){e.exports=n.p+"dist/img/nen.4c8ce1ef.png"},"4a19":function(e,t,n){"use strict";n("7081")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ab8b");var a=n("7a23");function c(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("Inici");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(s)])}var r=function(e){return Object(a["pushScopeId"])("data-v-7cc05e38"),e=e(),Object(a["popScopeId"])(),e},o={class:"home"},s={key:0},l=r((function(){return Object(a["createElementVNode"])("img",{alt:"Vue logo",style:{height:"300px"},src:"https://assets.brauer.com.au/uploads/2022/08/Brauer-Baby-Hero-1-e1597737753105-1000x990.png"},null,-1)})),d={key:1},i={key:2};function u(e,t,n,c,r,u){var b=Object(a["resolveComponent"])("GenderSelect"),m=Object(a["resolveComponent"])("MainComponent"),p=Object(a["resolveComponent"])("CompareLists");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[e.$store.state.gender?r.compareLists?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[Object(a["createVNode"])(p,{onBothListsFilled:u.bothListsFilled},null,8,["onBothListsFilled"])])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",d,[Object(a["createVNode"])(m,{onBothListsFilled:u.bothListsFilled},null,8,["onBothListsFilled"])])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[l,Object(a["createVNode"])(b)]))])}var b=n("462a"),m=n.n(b),p=n("458b"),O=n.n(p),j=function(e){return Object(a["pushScopeId"])("data-v-7f58c8df"),e=e(),Object(a["popScopeId"])(),e},f={class:"container text-center"},h=j((function(){return Object(a["createElementVNode"])("h1",null,"De quin gènere vols escollir els noms?",-1)})),g={class:"row align-items-start"},N={class:"col"},v=j((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),k={class:"col"},V=j((function(){return Object(a["createElementVNode"])("br",null,null,-1)}));function E(e,t,n,c,r,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",f,[h,Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("img",{onClick:t[0]||(t[0]=Object(a["withModifiers"])((function(t){return e.$store.dispatch("setGender","nen")}),["stop"])),class:"img",alt:"Vue logo",style:{height:"300px"},src:m.a}),v,Object(a["createElementVNode"])("button",{onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(t){return e.$store.dispatch("setGender","nen")}),["stop"])),type:"button",class:"m-2 btn btn-primary btn-block"}," Nen ")]),Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("img",{onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(t){return e.$store.dispatch("setGender","nena")}),["stop"])),class:"img",alt:"Vue logo",style:{height:"300px"},src:O.a}),V,Object(a["createElementVNode"])("button",{onClick:t[3]||(t[3]=Object(a["withModifiers"])((function(t){return e.$store.dispatch("setGender","nena")}),["stop"])),type:"button",class:"m-2 btn btn-danger btn-block"}," Nena ")])])])}var y={name:"Gender select"},x=(n("ae4a"),n("6b0d")),w=n.n(x);const B=w()(y,[["render",E],["__scopeId","data-v-7f58c8df"]]);var S=B,L=function(e){return Object(a["pushScopeId"])("data-v-65f42fda"),e=e(),Object(a["popScopeId"])(),e},C={class:"container text-center",id:"component"},_=L((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),I={class:""},U={key:0,style:{height:"100px"},src:m.a},D={key:1,style:{height:"100px"},src:O.a},M=Object(a["createStaticVNode"])('<div class="card" data-v-65f42fda><div class="card-body bg-white" data-v-65f42fda> Pots desplaçar el nom amb els botons de <span class="badge badge-intro" data-v-65f42fda>❤</span> <span class="badge badge-intro" data-v-65f42fda>✖</span> sota el nom o amb les fletxes del teclat <span class="badge badge-intro" data-v-65f42fda>🡸</span> <span class="badge badge-intro" data-v-65f42fda>🡺</span>. <br data-v-65f42fda> Dins d&#39;una mateixa llista pots arrossegar els noms amunt i avall per ordenar-los. <br data-v-65f42fda> Abans d&#39;avançar, posa els noms que més t&#39;agradin al principi de la llista verda. <br data-v-65f42fda> Si canvies d&#39;idea, també pots arrossegar els noms d&#39;una llista cap a una altra. </div></div><br data-v-65f42fda>',2),$={class:"row align-items-start"},G={class:"col"},T={class:"card"},A={class:"card-body text-white bg-success"},P={class:"card-title"},F=Object(a["createTextVNode"])("M'agraden "),R={class:"badge"},q=L((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),H={class:"badge name mx-1"},z={class:"col"},J={class:"card"},K={class:"card-body bg-warning"},Q={class:"card-title"},W=Object(a["createTextVNode"])("Per classificar "),X={class:"badge"},Y=L((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),Z={key:0},ee={class:"card"},te={class:"card-body bg-white"},ne={key:0,class:"badge name mx-1"},ae={key:1},ce=Object(a["createTextVNode"])(" Guarda la llista i "),re={key:0},oe={key:1},se={class:"col"},le={class:"card"},de={class:"card-body text-white bg-danger"},ie={class:"card-title"},ue=Object(a["createTextVNode"])("No m'agraden "),be={class:"badge"},me=L((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),pe={class:"badge name mx-1"};function Oe(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("draggable");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",C,[_,Object(a["createElementVNode"])("h1",I,[Object(a["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.$store.dispatch("setGender",null)}),type:"button",class:"m-2 btn btn-primary btn-block"},"⮌"),Object(a["createTextVNode"])(" Noms de "+Object(a["toDisplayString"])(r.gender)+" ",1),"nen"==r.gender?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",U)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",D))]),M,Object(a["createElementVNode"])("div",$,[Object(a["createElementVNode"])("div",G,[Object(a["createElementVNode"])("div",T,[Object(a["createElementVNode"])("div",A,[Object(a["createElementVNode"])("h5",P,[F,Object(a["createElementVNode"])("span",R,Object(a["toDisplayString"])(r.likedNames.length),1)]),q,Object(a["createVNode"])(s,{modelValue:r.likedNames,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.likedNames=e}),group:"people",onStart:t[2]||(t[2]=function(t){return e.drag=!0}),onEnd:t[3]||(t[3]=function(t){return e.drag=!1}),"item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element;return[Object(a["createElementVNode"])("div",H,Object(a["toDisplayString"])(t),1)]})),_:1},8,["modelValue"])])])]),Object(a["createElementVNode"])("div",z,[Object(a["createElementVNode"])("div",J,[Object(a["createElementVNode"])("div",K,[Object(a["createElementVNode"])("h5",Q,[W,Object(a["createElementVNode"])("span",X,Object(a["toDisplayString"])(r.names.length),1)]),Y,r.names.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Z,[Object(a["createElementVNode"])("div",ee,[Object(a["createElementVNode"])("div",te,[Object(a["createElementVNode"])("h1",null,[Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])(r.names[0]),1)]),Object(a["createElementVNode"])("button",{onClick:t[4]||(t[4]=Object(a["withModifiers"])((function(e){return o.like()}),["stop"])),type:"button",class:"mx-1 btn btn-outline-success btn-sm btn-circle"}," ❤ "),Object(a["createElementVNode"])("button",{onClick:t[5]||(t[5]=Object(a["withModifiers"])((function(e){return o.dislike()}),["stop"])),type:"button",class:"mx-1 btn btn-outline-danger btn-sm btn-circle"}," ✖ ")])]),Object(a["createVNode"])(s,{modelValue:r.names,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.names=e}),group:"people",onStart:t[7]||(t[7]=function(t){return e.drag=!0}),onEnd:t[8]||(t[8]=function(t){return e.drag=!1}),class:"mt-4","item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element,n=e.index;return[0!=n?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ne,Object(a["toDisplayString"])(t),1)):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["modelValue"])])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ae,[Object(a["createElementVNode"])("button",{onClick:t[9]||(t[9]=Object(a["withModifiers"])((function(e){return o.guardarLlista()}),["stop"])),type:"button",class:"mx-1 btn btn-outline-primary btn-sm btn-circle"},[ce,e.$store.state.user1_list.length>0?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",re,"compara llistes")):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",oe,"cedeix el torn a la teva parella"))])]))])])]),Object(a["createElementVNode"])("div",se,[Object(a["createElementVNode"])("div",le,[Object(a["createElementVNode"])("div",de,[Object(a["createElementVNode"])("h5",ie,[ue,Object(a["createElementVNode"])("span",be,Object(a["toDisplayString"])(r.dislikedNames.length),1)]),me,Object(a["createVNode"])(s,{modelValue:r.dislikedNames,"onUpdate:modelValue":t[10]||(t[10]=function(e){return r.dislikedNames=e}),group:"people",onStart:t[11]||(t[11]=function(t){return e.drag=!0}),onEnd:t[12]||(t[12]=function(t){return e.drag=!1}),"item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element;return[Object(a["createElementVNode"])("div",pe,Object(a["toDisplayString"])(t),1)]})),_:1},8,["modelValue"])])])])])])}var je=n("1da1"),fe=(n("96cf"),n("d3b7"),n("159b"),n("caad"),n("2532"),n("a434"),n("cee4")),he=n("b76a"),ge=n.n(he),Ne={name:"Name liker",components:{draggable:ge.a},data:function(){return{currentItemIndex:0,totalItemsIndex:0,gender:this.$store.state.gender,allNames:[],names:[],likedNames:[],dislikedNames:[]}},methods:{fetch:function(e,t){var n=this;return Object(je["a"])(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=e+""+t,a.next=3,fe["a"].get(c).then((function(a){var c=a.data.feed;n.currentItemIndex=parseInt(c["opensearch:startIndex"]),0==t&&(n.totalItemsIndex=parseInt(c["opensearch:totalResults"]));var r=0;if(c.entry.forEach((function(e){("nena"==n.gender&&e.content.content.includes("dones")||"nen"==n.gender&&e.content.content.includes("homes"))&&(n.allNames.push(e.title),n.names.push(e.title),r+=1)})),n.currentItemIndex<20&&r>0){var o=t+25;n.fetch(e,o)}}));case 3:case"end":return a.stop()}}),a)})))()},like:function(){this.likedNames.push(this.names[0]),this.names.splice(0,1)},dislike:function(){this.dislikedNames.push(this.names[0]),this.names.splice(0,1)},guardarLlista:function(){this.$store.state.user1_list.length>0?(alert("Mmoment de veure els resultats... nervis!"),this.$emit("bothListsFilled")):alert("Torn de la teva parella"),this.$store.dispatch("setList",this.likedNames),this.names=this.allNames,this.likedNames=[],this.dislikedNames=[]}},watch:{names:{handler:function(e){0==e.length&&this.guardarLlista()},deep:!0}},mounted:function(){var e;"nena"==this.gender&&(e="https://api.idescat.cat/onomastica/v1/nadons.json?orderby=sex&desc=1&posicio="),"nen"==this.gender&&(e="https://api.idescat.cat/onomastica/v1/nadons.json?orderby=sex&desc=0&posicio=");var t=0;this.fetch(e,t);var n=this;window.addEventListener("keydown",(function(e){"ArrowLeft"==e.code&&n.like(),"ArrowRight"==e.code&&n.dislike()}))},beforeUnmount:function(){window.removeEventListener("keydown",(function(e){"ArrowLeft"==e.code&&this.like(),"ArrowRight"==e.code&&this.dislike()}))}};n("3df8");const ve=w()(Ne,[["render",Oe],["__scopeId","data-v-65f42fda"]]);var ke=ve,Ve=(n("b0c0"),function(e){return Object(a["pushScopeId"])("data-v-60e97e42"),e=e(),Object(a["popScopeId"])(),e}),Ee={class:"container text-center",id:"component"},ye=Ve((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),xe=Ve((function(){return Object(a["createElementVNode"])("h1",{class:"pt-5"},"Resultats",-1)})),we=Ve((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),Be={key:0,class:"row align-items-start"},Se={class:"col"},Le={class:"card"},Ce={class:"card-body text-white bg-info"},_e={class:"card-title"},Ie=Object(a["createTextVNode"])("Agraden al primer "),Ue={class:"badge"},De=Ve((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),Me={class:"col"},$e={key:0},Ge={class:"card"},Te={class:"card-body text-white bg-success"},Ae=Object(a["createTextVNode"])(" La vostra nena s'hauria de dir: "),Pe={key:0,class:"card"},Fe={class:"card-body text-white bg-success"},Re={class:"card-title"},qe=Object(a["createTextVNode"])("Altres noms que agraden als dos "),He={class:"badge"},ze=Ve((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),Je={key:0,class:"badge name mx-1"},Ke={key:1},Qe=Ve((function(){return Object(a["createElementVNode"])("div",{class:"card"},[Object(a["createElementVNode"])("div",{class:"card-body text-white bg-danger"}," No coincidiu en cap nom :( ")],-1)})),We=[Qe],Xe={class:"col"},Ye={class:"card"},Ze={class:"card-body text-white bg-primary"},et={class:"card-title"},tt=Object(a["createTextVNode"])("Agraden al segon "),nt={class:"badge"},at=Ve((function(){return Object(a["createElementVNode"])("hr",null,null,-1)}));function ct(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("draggable");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Ee,[ye,xe,we,r.loaded?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Be,[Object(a["createElementVNode"])("div",Se,[Object(a["createElementVNode"])("div",Le,[Object(a["createElementVNode"])("div",Ce,[Object(a["createElementVNode"])("h5",_e,[Ie,Object(a["createElementVNode"])("span",Ue,Object(a["toDisplayString"])(r.likedNamesUser1.length),1)]),De,Object(a["createVNode"])(s,{modelValue:o.likedNamesUser1Loaded,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.likedNamesUser1Loaded=e}),group:"people","item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element;return[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["mx-1 badge",{badgesuccess:o.shared(t),badgedanger:!o.shared(t)}])},Object(a["toDisplayString"])(t),3)]})),_:1},8,["modelValue"])])])]),Object(a["createElementVNode"])("div",Me,[r.sharedNames.length>0?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",$e,[Object(a["createElementVNode"])("div",Ge,[Object(a["createElementVNode"])("div",Te,[Ae,Object(a["createElementVNode"])("h1",null,Object(a["toDisplayString"])(o.sharedNamesOrdered[0].name),1)])]),r.sharedNames.length>1?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Pe,[Object(a["createElementVNode"])("div",Fe,[Object(a["createElementVNode"])("h5",Re,[qe,Object(a["createElementVNode"])("span",He,Object(a["toDisplayString"])(r.sharedNames.length),1)]),ze,Object(a["createVNode"])(s,{modelValue:o.sharedNamesOrdered,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.sharedNamesOrdered=e}),group:"people",onStart:t[2]||(t[2]=function(t){return e.drag=!0}),onEnd:t[3]||(t[3]=function(t){return e.drag=!1}),"item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element,n=e.index;return[0!=n?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Je,Object(a["toDisplayString"])(t.name),1)):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["modelValue"])])])):Object(a["createCommentVNode"])("",!0)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",Ke,We))]),Object(a["createElementVNode"])("div",Xe,[Object(a["createElementVNode"])("div",Ye,[Object(a["createElementVNode"])("div",Ze,[Object(a["createElementVNode"])("h5",et,[tt,Object(a["createElementVNode"])("span",nt,Object(a["toDisplayString"])(r.likedNamesUser2.length),1)]),at,Object(a["createVNode"])(s,{modelValue:o.likedNamesUser2Loaded,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.likedNamesUser2Loaded=e}),group:"people",onStart:t[5]||(t[5]=function(t){return e.drag=!0}),onEnd:t[6]||(t[6]=function(t){return e.drag=!1}),"item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element;return[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["badge mx-1",{badgesuccess:o.shared(t),badgedanger:!o.shared(t)}])},Object(a["toDisplayString"])(t),3)]})),_:1},8,["modelValue"])])])])])):Object(a["createCommentVNode"])("",!0)])}n("4e82");var rt={name:"Name liker",components:{draggable:ge.a},data:function(){return{loaded:!1,likedNamesUser1:this.$store.state.user1_list,likedNamesUser2:this.$store.state.user2_list,sharedNames:[]}},computed:{sharedNamesOrdered:function(){var e=this.sharedNames;return e.sort((function(e,t){return e.value-t.value}))},likedNamesUser1Loaded:function(){return this.loaded?this.likedNamesUser1:[]},likedNamesUser2Loaded:function(){return this.loaded?this.likedNamesUser2:[]}},methods:{compara:function(){var e=this;this.likedNamesUser1.forEach((function(t,n){if(e.likedNamesUser2.includes(t)){var a=n+e.likedNamesUser2.indexOf(t);e.sharedNames.push({name:t,value:a})}})),this.loaded=!0},shared:function(e){return this.sharedNames.some((function(t){return t.name==e}))}},beforeMount:function(){this.compara()}};n("c677");const ot=w()(rt,[["render",ct],["__scopeId","data-v-60e97e42"]]);var st=ot,lt={name:"Home",components:{GenderSelect:S,MainComponent:ke,CompareLists:st},data:function(){return{compareLists:!1}},methods:{bothListsFilled:function(){this.compareLists=!0}}};n("9332");const dt=w()(lt,[["render",u],["__scopeId","data-v-7cc05e38"]]);var it=dt,ut={name:"Home",components:{Inici:it}};n("4a19");const bt=w()(ut,[["render",c]]);var mt=bt,pt=n("5502"),Ot=Object(pt["a"])({state:function(){return{gender:null,user1_list:[],user2_list:[]}},mutations:{setGender:function(e,t){e.gender=t},setListUser:function(e,t){0==e.user1_list.length?e.user1_list=t:e.user2_list=t}},actions:{setGender:function(e,t){e.commit("setGender",t)},setList:function(e,t){e.commit("setListUser",t)}},modules:{}});n("4989");Object(a["createApp"])(mt).use(Ot).mount("#app")},7081:function(e,t,n){},"7a79":function(e,t,n){},"7e54":function(e,t,n){},8751:function(e,t,n){},9332:function(e,t,n){"use strict";n("7a79")},ae4a:function(e,t,n){"use strict";n("7e54")},c677:function(e,t,n){"use strict";n("da8e")},da8e:function(e,t,n){}});
//# sourceMappingURL=app.21df5e7e.js.map