(function(t){function e(e){for(var a,r,c=e[0],l=e[1],s=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-0738ebcc":"0db08bf4","chunk-62e4c078":"c972d68a","chunk-64854e27":"284f3bf4","chunk-9b61a992":"f703f87d","chunk-a354a59c":"7d453e01","chunk-d21e2c9a":"fd76f269","chunk-eaadee24":"1da17f90"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-0738ebcc":1,"chunk-62e4c078":1,"chunk-9b61a992":1,"chunk-eaadee24":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0738ebcc":"9c0d0a4d","chunk-62e4c078":"2085efd0","chunk-64854e27":"31d6cfe0","chunk-9b61a992":"a218f208","chunk-a354a59c":"31d6cfe0","chunk-d21e2c9a":"31d6cfe0","chunk-eaadee24":"a218f208"}[t]+".css",o=l.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===a||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var d=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("1dce"),o=n.n(r),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grey darken-1 empty-layout"},[n("router-view")],1)},s=[],u=n("2877"),d={},p=Object(u["a"])(d,l,s,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-main-layout"},[n("Navbar",{on:{click:function(e){t.isOpen=!t.isOpen}}}),n("Sidebar",{model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}}),n("main",{staticClass:"app-content",class:{full:!t.isOpen}},[n("div",{staticClass:"app-page"},[n("router-view")],1)]),t.isLogin?n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[n("i",{staticClass:"large material-icons"},[t._v("add")])])],1):t._e()],1)},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar orange lighten-1"},[n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"navbar-left"},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[n("i",{staticClass:"material-icons black-text"},[t._v("dehaze")])]),n("span",{staticClass:"black-text"},[t._v(t._s(t._f("date")(t.date,"datetime")))])]),n("ul",{staticClass:"right hide-on-small-and-down"},[n("li",[n("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[t._v(" USER NAME "),n("i",{staticClass:"material-icons right"},[t._v("arrow_drop_down")])]),n("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[t.isLogin?n("li",[n("router-link",{staticClass:"black-text",attrs:{to:"/myposts"}},[n("i",{staticClass:"material-icons"},[t._v("account_circle")]),t._v("Мои посты ")])],1):t._e(),t.isLogin?n("li",[n("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[n("i",{staticClass:"material-icons"},[t._v("assignment_return")]),t._v("Выйти ")])]):t._e(),t.isLogin?t._e():n("li",[n("router-link",{staticClass:"black-text",attrs:{to:"/login"}},[n("i",{staticClass:"material-icons"},[t._v("account_circle")]),t._v("Войти ")])],1)])])])])])},g=[],b=(n("96cf"),n("1da1")),y={data:function(){return{date:new Date,interval:null,dropdown:null,isLogin:!!localStorage.token}},methods:{logout:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token},e.next=3,t.axios.post("http://imager.flcd.ru/api/logout","1",{headers:n}).then((function(){t.$router.push("/login?message=logout"),localStorage.token=""})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.interval=setInterval((function(){t.date=new Date}),1e3),this.dropdown=window.M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}},k=y,w=Object(u["a"])(k,v,g,!1,null,null,null),_=w.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sidenav app-sidenav",class:{open:t.value}},t._l(t.links,(function(e){return n("li",{key:e.url},[t.isLogin||"/allposts"==e.url||"/"==e.url?n("router-link",{staticClass:"waves-effect waves-orange pointer",attrs:{"active-class":"active",to:e.url,exact:e.exact}},[t._v(" "+t._s(e.title)+" ")]):t._e()],1)})),0)},x=[],O={props:["value"],data:function(){return{isLogin:!!localStorage.token,links:[{title:"Главная",url:"/",exact:!0},{title:"Все посты",url:"/allposts"},{title:"Мои посты",url:"/myposts"},{title:"Новый пост",url:"/record"}]}}},j=O,S=Object(u["a"])(j,C,x,!1,null,null,null),E=S.exports,L={name:"main-layout",data:function(){return{isLogin:!!localStorage.token,isOpen:!0}},components:{Navbar:_,Sidebar:E}},$=L,D=Object(u["a"])($,h,m,!1,null,null,null),M=D.exports,P={computed:{layout:function(){return(this.$route.meta.layout||"main")+"-layout"}},components:{EmptyLayout:f,MainLayout:M}},T=P,A=(n("5c0b"),Object(u["a"])(T,i,c,!1,null,null,null)),N=A.exports,B=n("bc3a"),I=n.n(B),R=n("a7fe"),q=n.n(R),z=(n("d3b7"),n("8c4f"));a["a"].use(z["a"]);var F=[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-a354a59c").then(n.bind(null,"a55b"))}},{path:"/",name:"Home",meta:{layout:"main"},component:function(){return n.e("chunk-d21e2c9a").then(n.bind(null,"bb51"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return n.e("chunk-64854e27").then(n.bind(null,"73cf"))}},{path:"/record",name:"record",meta:{layout:"main"},component:function(){return n.e("chunk-eaadee24").then(n.bind(null,"43ef"))}},{path:"/allposts",name:"All",meta:{layout:"main"},component:function(){return n.e("chunk-62e4c078").then(n.bind(null,"cf5b"))}},{path:"/myposts",name:"My",meta:{layout:"main"},component:function(){return n.e("chunk-0738ebcc").then(n.bind(null,"339d"))}},{path:"/changepost",name:"Changepost",meta:{layout:"main"},component:function(){return n.e("chunk-9b61a992").then(n.bind(null,"f6f9"))}}],H=new z["a"]({mode:"history",base:"/",routes:F}),J=H,U=n("2f62");a["a"].use(U["a"]);var K=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("caad"),n("2532");function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n={};return e.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),e.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit"),new Intl.DateTimeFormat("ru-Ru",n).format(new Date(t))}var G={install:function(t){t.prototype.$message=function(t){window.M.toast({html:t})},t.prototype.$error=function(t){window.M.toast({html:"[Ошибка]: ".concat(t)})}}};n("6885");a["a"].config.productionTip=!1,a["a"].use(o.a),a["a"].use(q.a,I.a),a["a"].filter("date",W),a["a"].use(G),a["a"].prototype.$axios=I.a,new a["a"]({router:J,store:K,render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.1612e36a.js.map