(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(11),r=n.n(c),s=(n(16),n(5)),j=(n(17),n(2)),a=n(0),i=function(){return Object(a.jsx)("nav",{className:"tabs is-centered",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/",className:"navbar-item",children:"Home page"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/people",className:"navbar-item",children:"People page"})})]})})},l=function(){return Object(a.jsx)("h1",{children:"Home Page"})},b=n(10),o=n(7),h=n(4),d=n(6),u=n.n(d),O=n(1),x=function(e){var t=e.person;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.sex}),Object(a.jsx)("td",{children:t.born}),Object(a.jsx)("td",{children:t.died}),Object(a.jsx)("td",{children:null!==t.mother?Object(a.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(a.jsx)("li",{children:t.mother.name}),Object(a.jsx)("li",{children:"Born: ".concat(t.mother.born)}),Object(a.jsx)("li",{children:"Died: ".concat(t.mother.died)})]}):"Mother not found"}),Object(a.jsx)("td",{children:null!==t.father?Object(a.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(a.jsx)("li",{children:t.father.name}),Object(a.jsx)("li",{children:"Born: ".concat(t.father.born)}),Object(a.jsx)("li",{children:"Died: ".concat(t.father.died)})]}):"Father not found"})]})},p=function(e){var t=e.people;return Object(a.jsxs)("table",{className:"table is-bordered is-striped is-hoverable",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{className:"is-selected",children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Sex"}),Object(a.jsx)("th",{children:"Born"}),Object(a.jsx)("th",{children:"Died"}),Object(a.jsx)("th",{children:"Mother"}),Object(a.jsx)("th",{children:"Father"})]})}),Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsx)(x,{person:e},e.slug)}))})]})},f=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(O.useState)(!1),s=Object(h.a)(r,2),j=s[0],i=s[1],l=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,n=t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName}))||null,father:t.find((function(t){return t.name===e.fatherName}))||null})})),c(n),i(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){l()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"People Page"}),j?Object(a.jsx)(p,{people:n}):"Loading..."]})},v=function(){return Object(a.jsx)("h1",{children:"Page not found"})},y=function(){return Object(a.jsxs)("div",{className:"App content has-text-centered",children:[Object(a.jsx)(i,{}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/",element:Object(a.jsx)(l,{})}),Object(a.jsx)(j.b,{path:"/home",element:Object(a.jsx)(j.a,{to:"/",replace:!0})}),Object(a.jsx)(j.b,{path:"people",element:Object(a.jsx)(m,{})}),Object(a.jsx)(j.b,{path:"*",element:Object(a.jsx)(v,{})})]})]})};r.a.render(Object(a.jsx)(s.a,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.dc64092b.chunk.js.map