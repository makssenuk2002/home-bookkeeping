(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0e88a1bf":"fa88abb3","chunk-2d21a3d2":"014dc9f1","chunk-10b86dd9":"dbaa83e1","chunk-2d0d05dc":"1b6b0824","chunk-2d217a99":"114dc413","chunk-53c8ec65":"ffb737f9","chunk-5f4ad635":"958acfb0","chunk-804f4c26":"63416e16","chunk-c420df12":"3567dd3f"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-0e88a1bf":1,"chunk-804f4c26":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-0e88a1bf":"7e9c44f8","chunk-2d21a3d2":"31d6cfe0","chunk-10b86dd9":"31d6cfe0","chunk-2d0d05dc":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-53c8ec65":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-804f4c26":"5c08852e","chunk-c420df12":"31d6cfe0"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4360:function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("d3b7"),r("2b0e")),o=r("2f62"),i=(r("b0c0"),r("32be")),c={actions:{login:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,a=t.email,o=t.password,r.prev=2,r.next=5,i["a"].auth().signInWithEmailAndPassword(a,o);case 5:r.next=11;break;case 7:throw r.prev=7,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},register:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=t.email,c=t.password,s=t.name,r.prev=2,r.next=5,i["a"].auth().createUserWithEmailAndPassword(o,c);case 5:return r.next=7,n("getUid");case 7:return u=r.sent,r.next=10,i["a"].database().ref("/users/".concat(u,"/info")).set({bill:1e4,name:s});case 10:r.next=16;break;case 12:throw r.prev=12,r.t0=r["catch"](2),a("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},getUid:function(){var e=i["a"].auth().currentUser;return e?e.uid:null},logout:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,i["a"].auth().signOut();case 3:r("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},s=r("5530"),u={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={locale:e.info.locale}}},actions:{updateInfo:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=e.getters,r.prev=1,r.next=4,n("getUid");case 4:return c=r.sent,u=Object(s["a"])(Object(s["a"])({},o.info),t),r.next=8,i["a"].database().ref("/users/".concat(c,"/info")).update(u);case 8:a("setInfo",u),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},fetchInfo:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,i["a"].database().ref("/users/".concat(a,"/info")).once("value");case 7:o=t.sent.val(),n("setInfo",o),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},l=(r("d81d"),r("b64b"),{actions:{fetchCategories:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,i["a"].database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(s["a"])(Object(s["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchCategoryById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return o=r.sent,r.next=7,i["a"].database().ref("/users/".concat(o,"/categories")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return c=r.t0,r.abrupt("return",Object(s["a"])(Object(s["a"])({},c),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},updateCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.title,c=t.limit,s=t.id,r.prev=2,r.next=5,a("getUid");case 5:return u=r.sent,r.next=8,i["a"].database().ref("/users/".concat(u,"/categories")).child(s).update({title:o,limit:c});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},createCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.title,c=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return s=r.sent,r.next=8,i["a"].database().ref("/users/".concat(s,"/categories")).push({title:o,limit:c});case 8:return u=r.sent,r.abrupt("return",{title:o,limit:c,id:u.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()}}}),d={actions:{createRecord:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,i["a"].database().ref("/users/".concat(o,"/records")).push(t);case 7:return r.abrupt("return",r.sent);case 10:throw r.prev=10,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchRecords:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,i["a"].database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(s["a"])(Object(s["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchRecordById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,i["a"].database().ref("/users/".concat(o,"/records")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return c=r.t0,r.abrupt("return",Object(s["a"])(Object(s["a"])({},c),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),a("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}};a["a"].use(o["a"]);t["a"]=new o["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{fetchCurrency:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FIXER,e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()}},getters:{error:function(e){return e.error}},modules:{auth:c,info:u,category:l,record:d}})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4"),r("d3b7");var n=r("2b0e"),a=r("1dce"),o=r.n(a),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},c=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},u=[],l=r("b444"),d={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(l["a"][e.code]||"Что-то пошло не так")}}},f=d,p=r("2877"),m=Object(p["a"])(f,s,u,!1,null,null,null),h=m.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{key:e.locale,model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{key:e.locale+"1",staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"CreateNewRecord",expression:"'CreateNewRecord'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},v=[],b=r("1da1"),w=(r("96cf"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v(" "+e._s(e._f("localize")("ProfileTitle"))+" ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout.apply(null,arguments)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v(" "+e._s(e._f("localize")("Exit"))+" ")])])])])])])])}),y=[],C={data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?message=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}},k=C,_=Object(p["a"])(k,w,y,!1,null,null,null),x=_.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},O=[],R=r("e977"),j={props:["value"],data:function(){return{links:[{title:Object(R["a"])("Menu_History"),url:"/history"},{title:Object(R["a"])("Menu_Planning"),url:"/planning"},{title:Object(R["a"])("Menu_NewRecord"),url:"/record"},{title:Object(R["a"])("Menu_Categories"),url:"/categories"}]}}},N=j,U=Object(p["a"])(N,E,O,!1,null,null,null),T=U.exports,A={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.getters.info.bill&&e.$store.getters.info.name){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{Navbar:x,Sidebar:T},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale}},watch:{error:function(e){this.$error(l["a"][e.code]||"Что-то пошло не так")}}},I=A,P=Object(p["a"])(I,g,v,!1,null,null,null),B=P.exports,L={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:h,MainLayout:B}},S=L,q=(r("5c0b"),Object(p["a"])(S,i,c,!1,null,null,null)),D=q.exports,$=(r("3ca3"),r("ddb0"),r("8c4f")),F=r("32be");n["a"].use($["a"]);var H=new $["a"]({mode:"history",base:"",routes:[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}},{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return Promise.all([r.e("chunk-0e88a1bf"),r.e("chunk-2d21a3d2")]).then(r.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-10b86dd9").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-0e88a1bf").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d0d05dc").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-804f4c26").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-53c8ec65").then(r.bind(null,"43ef"))}}]});H.beforeEach((function(e,t,r){var n=F["a"].auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var W=H,z=r("4360");r("caad"),r("2532");function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");var n=z["a"].getters.info.locale||"ru-RU";return new Intl.DateTimeFormat(n,r).format(new Date(e))}r("99af");var V={install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[".concat(Object(R["a"])("Error"),"]: ").concat(e)})}}},K=r("9483");Object(K["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("6885");var Y,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},G=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],X={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},Q=X,ee=Object(p["a"])(Q,Z,G,!1,null,null,null),te=ee.exports,re=(r("ea7b"),r("66ce"),r("5bb3")),ne={bind:function(e,t){var r=t.value,n=t.modifiers;M.Tooltip.init(e,{html:n.noloc?r:Object(R["a"])(r)})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},ae=r("8832"),oe=r.n(ae);n["a"].config.productionTip=!1,n["a"].use(V),n["a"].use(o.a),n["a"].filter("date",J),n["a"].filter("localize",R["a"]),n["a"].filter("currency",re["a"]),n["a"].component("Loader",te),n["a"].component("Paginate",oe.a),n["a"].directive("tooltip",ne),F["a"].initializeApp({apiKey:"AIzaSyDehMcodFmrZZ6MbJ7HCkktsd1S7ArytmM",authDomain:"qqqqq-644df.firebaseapp.com",databaseURL:"https://qqqqq-644df-default-rtdb.firebaseio.com",projectId:"qqqqq-644df",storageBucket:"qqqqq-644df.appspot.com",messagingSenderId:"579766775991",appId:"1:579766775991:web:82bfcc0ca800b314561d32",measurementId:"G-2YJ68L2DMS"}),F["a"].auth().onAuthStateChanged((function(){Y||(Y=new n["a"]({router:W,store:z["a"],render:function(e){return e(D)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";r("9c0c")},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Message_EnterName":"Введите имя","Update":"Обновить","Create":"Создать","Bill":"Счет","Name":"Имя","Exit":"Выйти","Edit":"Редактировать","Menu_Bill":"Счет","Detail_Title":"Запись","Menu_History":"История","Menu_Planning":"Планирование","Menu_NewRecord":"Новая запись","Menu_Categories":"Категории","Выйти":"Выйти","Title":"Название","Limit":"Лимит","Message_EnterDescription":"Введите описание","Message_CategoryTitle":"Введите название категории","Message_MinLength":"Минимальная значение","Category_HasBeenCreated":"Категория была создана","Category_HasBeenUpdated":"Категория упешно обновлена","SelectCategory":"Выберите категорию","Amount":"Сумма","Date":"Дата","Description":"Описание","Category":"Категория","Categories":"Категории","NoCategories":"Категорий пока нет","Type":"Тип","Open":"Открыть","OpenRecord":"Посмотреть запись","BillInCurrency":"Счет в валюте","Currency":"Валюта","CurrencyType":"Курс","CurrencyAmountTitle":"Курс валют","Income":"Доход","Outcome":"Расход","Of":"из","History_Title":"История записей","NoRecords":"Записей пока нет","AddFirst":"Добавьте первую","Back":"Назад","Forward":"Вперед","CostsForCategories":"Расходы по категориям","MoreThan":"Превышение на","Stayed":"Осталось","RecordHasBeenCreated":"Запись успешно создана","NotEnoughMoney":"Недостаточно средств на счете","CRM_Title":"Домашняя бухгалтерия","Message_EmailRequired":"Поле Email не должно быть пустым","Message_EmailValid":"Введите корретный Email","Password":"Пароль","Message_EnterPassword":"Введите пароль","Login":"Войти","NoAccount":"Нет аккаунта?","HasAccount":"Уже есть аккаунт?","Register":"Зарегистрироваться","AcceptRules":"С правилами согласен","CreateNewRecord":"Создать новую запись","Logout":"Вы вышли из системы","FirstLogin":"Для начала войдите в систему","NoUserWithEmail":"Пользователя с таким email не существует","WrongPassword":"Неверный пароль","EmailInUse":"Email уже занят","Error":"Ошибка"}')},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Logout",login:"FirstLogin","auth/user-not-found":"NoUserWithEmail","auth/wrong-password":"WrongPassword","auth/email-already-in-use":"EmailInUse"}},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("4360"),a=r("7704"),o=r("edd4"),i={"ru-RU":a,"en-US":o};function c(e){var t=n["a"].getters.info.locale||"ru-RU";return i[t][e]||"[Localize error]: key ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Message_EnterName":"Enter name","Update":"Update","Create":"Create","Bill":"Bill","Name":"Name","Exit":"Exit","Edit":"Edit","Menu_Bill":"Bill","Detail_Title":"Detail","Menu_History":"History","Menu_Planning":"Planning","Menu_NewRecord":"New record","Menu_Categories":"Categories","Title":"Title","Limit":"Limit","Message_EnterDescription":"Enter description","Message_CategoryTitle":"Enter category name","Message_MinLength":"Mininum length is","Category_HasBeenCreated":"Category has been created","Category_HasBeenUpdated":"Category has been updated","SelectCategory":"Select category","Amount":"Amount","Date":"Date","Description":"Description","Category":"Category","Categories":"Categories","NoCategories":"No categories","Type":"Type","Open":"Open","OpenRecord":"Open record","BillInCurrency":"Bill in currencies","Currency":"Currency","CurrencyType":"Rate","CurrencyAmountTitle":"Currencies rates","Income":"Income","Outcome":"Outcome","Of":"of","History_Title":"Records history","NoRecords":"No records","AddFirst":"Add first","Back":"Back","Forward":"Forward","CostsForCategories":"Categories costs","MoreThan":"Excess on","Stayed":"Left","RecordHasBeenCreated":"Record has been created","NotEnoughMoney":"Not enough money","CRM_Title":"CRM by Vladilen","Message_EmailRequired":"Email field is required","Message_EmailValid":"Enter valid email","Password":"Password","Message_EnterPassword":"Enter password","Login":"Login","NoAccount":"Has no account?","HasAccount":"Has account?","Register":"Register","AcceptRules":"Agree with rules","CreateNewRecord":"Create new record","Logout":"You have logged out","FirstLogin":"First login","NoUserWithEmail":"No user with email","WrongPassword":"Invalid password","EmailInUse":"Email is already in use","Error":"Error"}')}});
//# sourceMappingURL=app.eb889291.js.map