(function(e){function t(t){for(var a,o,s=t[0],l=t[1],d=t[2],i=0,b=[];i<s.length;i++)o=s[i],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5dbb3ac9"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var d=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var i=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3712:function(e,t,n){},"3df8":function(e,t,n){"use strict";n("8751")},4425:function(e,t,n){"use strict";n("3712")},"458b":function(e,t,n){e.exports=n.p+"img/nena.0eea8811.png"},"462a":function(e,t,n){e.exports=n.p+"img/nen.4c8ce1ef.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ab8b");var a=n("7a23");function c(e,t){var n=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(n)])}n("4425");var r=n("6b0d"),o=n.n(r);const s={},l=o()(s,[["render",c]]);var d=l,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=function(e){return Object(a["pushScopeId"])("data-v-7cc05e38"),e=e(),Object(a["popScopeId"])(),e},b={class:"home"},m={key:0},p=u((function(){return Object(a["createElementVNode"])("img",{alt:"Vue logo",style:{height:"300px"},src:"https://assets.brauer.com.au/uploads/2022/08/Brauer-Baby-Hero-1-e1597737753105-1000x990.png"},null,-1)})),f={key:1},O={key:2};function j(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("GenderSelect"),l=Object(a["resolveComponent"])("MainComponent"),d=Object(a["resolveComponent"])("CompareLists");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",b,[e.$store.state.gender?r.compareLists?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[Object(a["createVNode"])(d,{onBothListsFilled:o.bothListsFilled},null,8,["onBothListsFilled"])])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",f,[Object(a["createVNode"])(l,{onBothListsFilled:o.bothListsFilled},null,8,["onBothListsFilled"])])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",m,[p,Object(a["createVNode"])(s)]))])}var h=n("462a"),g=n.n(h),v=n("458b"),N=n.n(v),k=function(e){return Object(a["pushScopeId"])("data-v-7f58c8df"),e=e(),Object(a["popScopeId"])(),e},V={class:"container text-center"},E=k((function(){return Object(a["createElementVNode"])("h1",null,"De quin gènere vols escollir els noms?",-1)})),y={class:"row align-items-start"},x={class:"col"},w=k((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),B={class:"col"},S=k((function(){return Object(a["createElementVNode"])("br",null,null,-1)}));function L(e,t,n,c,r,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",V,[E,Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("img",{onClick:t[0]||(t[0]=Object(a["withModifiers"])((function(t){return e.$store.dispatch("setGender","nen")}),["stop"])),class:"img",alt:"Vue logo",style:{height:"300px"},src:g.a}),w,Object(a["createElementVNode"])("button",{onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(t){return e.$store.dispatch("setGender","nen")}),["stop"])),type:"button",class:"m-2 btn btn-primary btn-block"}," Nen ")]),Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("img",{onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(t){return e.$store.dispatch("setGender","nena")}),["stop"])),class:"img",alt:"Vue logo",style:{height:"300px"},src:N.a}),S,Object(a["createElementVNode"])("button",{onClick:t[3]||(t[3]=Object(a["withModifiers"])((function(t){return e.$store.dispatch("setGender","nena")}),["stop"])),type:"button",class:"m-2 btn btn-danger btn-block"}," Nena ")])])])}var C={name:"Gender select"};n("ae4a");const _=o()(C,[["render",L],["__scopeId","data-v-7f58c8df"]]);var I=_,U=function(e){return Object(a["pushScopeId"])("data-v-65f42fda"),e=e(),Object(a["popScopeId"])(),e},D={class:"container text-center",id:"component"},M=U((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),T={class:""},$={key:0,style:{height:"100px"},src:g.a},G={key:1,style:{height:"100px"},src:N.a},P=Object(a["createStaticVNode"])('<div class="card" data-v-65f42fda><div class="card-body bg-white" data-v-65f42fda> Pots desplaçar el nom amb els botons de <span class="badge badge-intro" data-v-65f42fda>❤</span> <span class="badge badge-intro" data-v-65f42fda>✖</span> sota el nom o amb les fletxes del teclat <span class="badge badge-intro" data-v-65f42fda>🡸</span> <span class="badge badge-intro" data-v-65f42fda>🡺</span>. <br data-v-65f42fda> Dins d&#39;una mateixa llista pots arrossegar els noms amunt i avall per ordenar-los. <br data-v-65f42fda> Abans d&#39;avançar, posa els noms que més t&#39;agradin al principi de la llista verda. <br data-v-65f42fda> Si canvies d&#39;idea, també pots arrossegar els noms d&#39;una llista cap a una altra. </div></div><br data-v-65f42fda>',2),A={class:"row align-items-start"},F={class:"col"},R={class:"card"},q={class:"card-body text-white bg-success"},z={class:"card-title"},H=Object(a["createTextVNode"])("M'agraden "),J={class:"badge"},K=U((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),Q={class:"badge name mx-1"},W={class:"col"},X={class:"card"},Y={class:"card-body bg-warning"},Z={class:"card-title"},ee=Object(a["createTextVNode"])("Per classificar "),te={class:"badge"},ne=U((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),ae={key:0},ce={class:"card"},re={class:"card-body bg-white"},oe={key:0,class:"badge name mx-1"},se={key:1},le=Object(a["createTextVNode"])(" Guarda la llista i "),de={key:0},ie={key:1},ue={class:"col"},be={class:"card"},me={class:"card-body text-white bg-danger"},pe={class:"card-title"},fe=Object(a["createTextVNode"])("No m'agraden "),Oe={class:"badge"},je=U((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),he={class:"badge name mx-1"};function ge(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("draggable");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",D,[M,Object(a["createElementVNode"])("h1",T,[Object(a["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.$store.dispatch("setGender",null)}),type:"button",class:"m-2 btn btn-primary btn-block"},"⮌"),Object(a["createTextVNode"])(" Noms de "+Object(a["toDisplayString"])(r.gender)+" ",1),"nen"==r.gender?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",$)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",G))]),P,Object(a["createElementVNode"])("div",A,[Object(a["createElementVNode"])("div",F,[Object(a["createElementVNode"])("div",R,[Object(a["createElementVNode"])("div",q,[Object(a["createElementVNode"])("h5",z,[H,Object(a["createElementVNode"])("span",J,Object(a["toDisplayString"])(r.likedNames.length),1)]),K,Object(a["createVNode"])(s,{modelValue:r.likedNames,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.likedNames=e}),group:"people",onStart:t[2]||(t[2]=function(t){return e.drag=!0}),onEnd:t[3]||(t[3]=function(t){return e.drag=!1}),"item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element;return[Object(a["createElementVNode"])("div",Q,Object(a["toDisplayString"])(t),1)]})),_:1},8,["modelValue"])])])]),Object(a["createElementVNode"])("div",W,[Object(a["createElementVNode"])("div",X,[Object(a["createElementVNode"])("div",Y,[Object(a["createElementVNode"])("h5",Z,[ee,Object(a["createElementVNode"])("span",te,Object(a["toDisplayString"])(r.names.length),1)]),ne,r.names.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ae,[Object(a["createElementVNode"])("div",ce,[Object(a["createElementVNode"])("div",re,[Object(a["createElementVNode"])("h1",null,[Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])(r.names[0]),1)]),Object(a["createElementVNode"])("button",{onClick:t[4]||(t[4]=Object(a["withModifiers"])((function(e){return o.like()}),["stop"])),type:"button",class:"mx-1 btn btn-outline-success btn-sm btn-circle"}," ❤ "),Object(a["createElementVNode"])("button",{onClick:t[5]||(t[5]=Object(a["withModifiers"])((function(e){return o.dislike()}),["stop"])),type:"button",class:"mx-1 btn btn-outline-danger btn-sm btn-circle"}," ✖ ")])]),Object(a["createVNode"])(s,{modelValue:r.names,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.names=e}),group:"people",onStart:t[7]||(t[7]=function(t){return e.drag=!0}),onEnd:t[8]||(t[8]=function(t){return e.drag=!1}),class:"mt-4","item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element,n=e.index;return[0!=n?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",oe,Object(a["toDisplayString"])(t),1)):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["modelValue"])])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",se,[Object(a["createElementVNode"])("button",{onClick:t[9]||(t[9]=Object(a["withModifiers"])((function(e){return o.guardarLlista()}),["stop"])),type:"button",class:"mx-1 btn btn-outline-primary btn-sm btn-circle"},[le,e.$store.state.user1_list.length>0?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",de,"compara llistes")):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",ie,"cedeix el torn a la teva parella"))])]))])])]),Object(a["createElementVNode"])("div",ue,[Object(a["createElementVNode"])("div",be,[Object(a["createElementVNode"])("div",me,[Object(a["createElementVNode"])("h5",pe,[fe,Object(a["createElementVNode"])("span",Oe,Object(a["toDisplayString"])(r.dislikedNames.length),1)]),je,Object(a["createVNode"])(s,{modelValue:r.dislikedNames,"onUpdate:modelValue":t[10]||(t[10]=function(e){return r.dislikedNames=e}),group:"people",onStart:t[11]||(t[11]=function(t){return e.drag=!0}),onEnd:t[12]||(t[12]=function(t){return e.drag=!1}),"item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element;return[Object(a["createElementVNode"])("div",he,Object(a["toDisplayString"])(t),1)]})),_:1},8,["modelValue"])])])])])])}var ve=n("1da1"),Ne=(n("96cf"),n("159b"),n("caad"),n("2532"),n("a434"),n("cee4")),ke=n("b76a"),Ve=n.n(ke),Ee={name:"Name liker",components:{draggable:Ve.a},data:function(){return{currentItemIndex:0,totalItemsIndex:0,gender:this.$store.state.gender,allNames:[],names:[],likedNames:[],dislikedNames:[]}},methods:{fetch:function(e,t){var n=this;return Object(ve["a"])(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=e+""+t,a.next=3,Ne["a"].get(c).then((function(a){var c=a.data.feed;n.currentItemIndex=parseInt(c["opensearch:startIndex"]),0==t&&(n.totalItemsIndex=parseInt(c["opensearch:totalResults"]));var r=0;if(c.entry.forEach((function(e){("nena"==n.gender&&e.content.content.includes("dones")||"nen"==n.gender&&e.content.content.includes("homes"))&&(n.allNames.push(e.title),n.names.push(e.title),r+=1)})),n.currentItemIndex<20&&r>0){var o=t+25;n.fetch(e,o)}}));case 3:case"end":return a.stop()}}),a)})))()},like:function(){this.likedNames.push(this.names[0]),this.names.splice(0,1)},dislike:function(){this.dislikedNames.push(this.names[0]),this.names.splice(0,1)},guardarLlista:function(){this.$store.state.user1_list.length>0?(alert("Mmoment de veure els resultats... nervis!"),this.$emit("bothListsFilled")):alert("Torn de la teva parella"),this.$store.dispatch("setList",this.likedNames),this.names=this.allNames,this.likedNames=[],this.dislikedNames=[]}},watch:{names:{handler:function(e){0==e.length&&this.guardarLlista()},deep:!0}},mounted:function(){var e;"nena"==this.gender&&(e="https://api.idescat.cat/onomastica/v1/nadons.json?orderby=sex&desc=1&posicio="),"nen"==this.gender&&(e="https://api.idescat.cat/onomastica/v1/nadons.json?orderby=sex&desc=0&posicio=");var t=0;this.fetch(e,t);var n=this;window.addEventListener("keydown",(function(e){"ArrowLeft"==e.code&&n.like(),"ArrowRight"==e.code&&n.dislike()}))},beforeUnmount:function(){window.removeEventListener("keydown",(function(e){"ArrowLeft"==e.code&&this.like(),"ArrowRight"==e.code&&this.dislike()}))}};n("3df8");const ye=o()(Ee,[["render",ge],["__scopeId","data-v-65f42fda"]]);var xe=ye,we=(n("b0c0"),function(e){return Object(a["pushScopeId"])("data-v-60e97e42"),e=e(),Object(a["popScopeId"])(),e}),Be={class:"container text-center",id:"component"},Se=we((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),Le=we((function(){return Object(a["createElementVNode"])("h1",{class:"pt-5"},"Resultats",-1)})),Ce=we((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),_e={key:0,class:"row align-items-start"},Ie={class:"col"},Ue={class:"card"},De={class:"card-body text-white bg-info"},Me={class:"card-title"},Te=Object(a["createTextVNode"])("Agraden al primer "),$e={class:"badge"},Ge=we((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),Pe={class:"col"},Ae={key:0},Fe={class:"card"},Re={class:"card-body text-white bg-success"},qe=Object(a["createTextVNode"])(" La vostra nena s'hauria de dir: "),ze={key:0,class:"card"},He={class:"card-body text-white bg-success"},Je={class:"card-title"},Ke=Object(a["createTextVNode"])("Altres noms que agraden als dos "),Qe={class:"badge"},We=we((function(){return Object(a["createElementVNode"])("hr",null,null,-1)})),Xe={key:0,class:"badge name mx-1"},Ye={key:1},Ze=we((function(){return Object(a["createElementVNode"])("div",{class:"card"},[Object(a["createElementVNode"])("div",{class:"card-body text-white bg-danger"}," No coincidiu en cap nom :( ")],-1)})),et=[Ze],tt={class:"col"},nt={class:"card"},at={class:"card-body text-white bg-primary"},ct={class:"card-title"},rt=Object(a["createTextVNode"])("Agraden al segon "),ot={class:"badge"},st=we((function(){return Object(a["createElementVNode"])("hr",null,null,-1)}));function lt(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("draggable");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Be,[Se,Le,Ce,r.loaded?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",_e,[Object(a["createElementVNode"])("div",Ie,[Object(a["createElementVNode"])("div",Ue,[Object(a["createElementVNode"])("div",De,[Object(a["createElementVNode"])("h5",Me,[Te,Object(a["createElementVNode"])("span",$e,Object(a["toDisplayString"])(r.likedNamesUser1.length),1)]),Ge,Object(a["createVNode"])(s,{modelValue:o.likedNamesUser1Loaded,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.likedNamesUser1Loaded=e}),group:"people","item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element;return[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["mx-1 badge",{badgesuccess:o.shared(t),badgedanger:!o.shared(t)}])},Object(a["toDisplayString"])(t),3)]})),_:1},8,["modelValue"])])])]),Object(a["createElementVNode"])("div",Pe,[r.sharedNames.length>0?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",Ae,[Object(a["createElementVNode"])("div",Fe,[Object(a["createElementVNode"])("div",Re,[qe,Object(a["createElementVNode"])("h1",null,Object(a["toDisplayString"])(o.sharedNamesOrdered[0].name),1)])]),r.sharedNames.length>1?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ze,[Object(a["createElementVNode"])("div",He,[Object(a["createElementVNode"])("h5",Je,[Ke,Object(a["createElementVNode"])("span",Qe,Object(a["toDisplayString"])(r.sharedNames.length),1)]),We,Object(a["createVNode"])(s,{modelValue:o.sharedNamesOrdered,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.sharedNamesOrdered=e}),group:"people",onStart:t[2]||(t[2]=function(t){return e.drag=!0}),onEnd:t[3]||(t[3]=function(t){return e.drag=!1}),"item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element,n=e.index;return[0!=n?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Xe,Object(a["toDisplayString"])(t.name),1)):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["modelValue"])])])):Object(a["createCommentVNode"])("",!0)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",Ye,et))]),Object(a["createElementVNode"])("div",tt,[Object(a["createElementVNode"])("div",nt,[Object(a["createElementVNode"])("div",at,[Object(a["createElementVNode"])("h5",ct,[rt,Object(a["createElementVNode"])("span",ot,Object(a["toDisplayString"])(r.likedNamesUser2.length),1)]),st,Object(a["createVNode"])(s,{modelValue:o.likedNamesUser2Loaded,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.likedNamesUser2Loaded=e}),group:"people",onStart:t[5]||(t[5]=function(t){return e.drag=!0}),onEnd:t[6]||(t[6]=function(t){return e.drag=!1}),"item-key":"id"},{item:Object(a["withCtx"])((function(e){var t=e.element;return[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["badge mx-1",{badgesuccess:o.shared(t),badgedanger:!o.shared(t)}])},Object(a["toDisplayString"])(t),3)]})),_:1},8,["modelValue"])])])])])):Object(a["createCommentVNode"])("",!0)])}n("4e82");var dt={name:"Name liker",components:{draggable:Ve.a},data:function(){return{loaded:!1,likedNamesUser1:this.$store.state.user1_list,likedNamesUser2:this.$store.state.user2_list,sharedNames:[]}},computed:{sharedNamesOrdered:function(){var e=this.sharedNames;return e.sort((function(e,t){return e.value-t.value}))},likedNamesUser1Loaded:function(){return this.loaded?this.likedNamesUser1:[]},likedNamesUser2Loaded:function(){return this.loaded?this.likedNamesUser2:[]}},methods:{compara:function(){var e=this;this.likedNamesUser1.forEach((function(t,n){if(e.likedNamesUser2.includes(t)){var a=n+e.likedNamesUser2.indexOf(t);e.sharedNames.push({name:t,value:a})}})),this.loaded=!0},shared:function(e){return this.sharedNames.some((function(t){return t.name==e}))}},beforeMount:function(){this.compara()}};n("c677");const it=o()(dt,[["render",lt],["__scopeId","data-v-60e97e42"]]);var ut=it,bt={name:"Home",components:{GenderSelect:I,MainComponent:xe,CompareLists:ut},data:function(){return{compareLists:!1}},methods:{bothListsFilled:function(){this.compareLists=!0}}};n("9332");const mt=o()(bt,[["render",j],["__scopeId","data-v-7cc05e38"]]);var pt=mt,ft=[{path:"/",name:"Inici",component:pt},{path:"/sobre",name:"Sobre",component:function(){return n.e("about").then(n.bind(null,"d09e"))}}],Ot=Object(i["a"])({history:Object(i["b"])("/"),routes:ft}),jt=Ot,ht=n("5502"),gt=Object(ht["a"])({state:function(){return{gender:null,user1_list:[],user2_list:[]}},mutations:{setGender:function(e,t){e.gender=t},setListUser:function(e,t){0==e.user1_list.length?e.user1_list=t:e.user2_list=t}},actions:{setGender:function(e,t){e.commit("setGender",t)},setList:function(e,t){e.commit("setListUser",t)}},modules:{}});n("4989");Object(a["createApp"])(d).use(gt).use(jt).mount("#app")},"7a79":function(e,t,n){},"7e54":function(e,t,n){},8751:function(e,t,n){},9332:function(e,t,n){"use strict";n("7a79")},ae4a:function(e,t,n){"use strict";n("7e54")},c677:function(e,t,n){"use strict";n("da8e")},da8e:function(e,t,n){}});
//# sourceMappingURL=app.b279be46.js.map