(this["webpackJsonpjokes-generator"]=this["webpackJsonpjokes-generator"]||[]).push([[0],{14:function(e,t,a){e.exports={box:"JokeDisplay_box__A7p0i",text:"JokeDisplay_text__2Otit"}},15:function(e,t,a){e.exports={inputSelect:"Categories_inputSelect__2UZTo",inputSelectArea:"Categories_inputSelectArea__2Wa3O"}},33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),o=(a(38),a(29)),u=a.n(o),s=a(10),i=a(1),p=a(11),m=a(7),E=a.n(m);E.a.defaults.baseURL="https://api.chucknorris.io/jokes/random",E.a.interceptors.request.use(null,(function(e){return console.log("Error",e),Promise.reject(e)})),E.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log("Error",e),alert("An Unexpected Error Occured.......")),Promise.reject("Error")}));var d={get:E.a.get,post:E.a.post,put:E.a.put,delete:E.a.delete},f=a(13),v=a.n(f),g=a(30),h=a(32),b=a(14),k=a.n(b),j=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),l=a[0],c=a[1],o=function(){var t=Object(g.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get(e.apiurl?e.apiurl:"/");case 2:a=t.sent,c(a.data.value);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:k.a.box},r.a.createElement("h2",null,r.a.createElement(h.a,null)," Joke Generator"),r.a.createElement("div",{className:k.a.text},l||r.a.createElement("p",null,"select a category")),r.a.createElement("button",{onClick:o},"Get a JOKE"))},x=a(15),y=a.n(x),O=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(p.a)(c,2),u=o[0],s=o[1];return Object(n.useEffect)((function(){d.get("https://api.chucknorris.io/jokes/categories").then((function(e){console.log(e.data);var t=e.data;console.log(t);var a=t.map((function(e){return{value:e,display:e}}));l({cat:[{value:"",display:"Select"}].concat(a)})}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:y.a.inputSelectArea},r.a.createElement("span",null,"Category: "),r.a.createElement("select",{className:y.a.inputSelect,onChange:function(e){return s(e.target.value)},value:u},null!=a.cat?a.cat.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.display)})):null)),r.a.createElement("div",null,r.a.createElement(j,{apiurl:"https://api.chucknorris.io/jokes/random?category=".concat(u)})))};var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Random Joke")),r.a.createElement("li",null,r.a.createElement(s.b,{to:{pathname:"category"}},"Categories"))))),r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/category",exact:!0,component:O}),r.a.createElement(i.a,{exact:!0,path:"/",component:j}))),r.a.createElement("footer",null,u()(new Date).format("MMM, DD YYYY")))};a(63);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(_,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6e41bb44.chunk.js.map