(this["webpackJsonpcreate-reactp-app-antd"]=this["webpackJsonpcreate-reactp-app-antd"]||[]).push([[0],{137:function(e,t,n){e.exports=n(322)},142:function(e,t,n){},158:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),o=(n(142),n(320),n(134)),i=(n(321),n(94)),l=(n(52),n(16)),u=n(72),m=(n(156),n(135)),d=(n(158),n(45)),f=n.n(d),E=m.a.TextArea;var p=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),m=Object(u.a)(s,2),d=m[0],p=m[1],v=Object(a.useState)([]),h=Object(u.a)(v,2),b=h[0],g=h[1];Object(a.useEffect)((function(){w()}),[1]);var w=function(){f()("CREATE TABLE students (key string, name string, score number, sex string)"),f()("insert into students values ('1', '\u5c0f\u660e', 90, 'male'), ('2', '\u5c0f\u7ea2', 91, 'female'), ('3', '\u5c0f\u767d', 92, 'male')"),f()("CREATE TABLE classes (key string, name string)"),f()("insert into classes values ('1', '\u4e00\u73ed'), ('2', ' \u4e8c\u73ed')")},k=function(e){var t,n=(t=e[0],Object.keys(t).map((function(e){return{title:e,dataIndex:e,key:"key"}})));p(n),g(e)},y=function(){try{var e=f()(n);e instanceof Object?k(e):alert("sql \u8bed\u6cd5\u6210\u529f")}catch(t){alert("sql\u8bed\u6cd5\u9519\u8bef(".concat(t,")"))}};return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,{title:"sql \u8f93\u5165\u6846",style:{width:600}},c.a.createElement(E,{rows:4,value:n,onChange:function(e){r(e.target.value)},onPressEnter:y}),c.a.createElement(l.a,{onClick:y},"\u6267\u884c\u8bed\u53e5")),c.a.createElement(i.a,{title:"\u8bed\u53e5\u7ed3\u679c",style:{width:600}},c.a.createElement(o.a,{columns:d,dataSource:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.de98869b.chunk.js.map