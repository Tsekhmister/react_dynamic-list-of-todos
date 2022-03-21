(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,s=n(5),r=n.n(s),l=n(2),i=n(1),o=(n(10),n(11),n(12),n(4)),a=n.n(o),d=n(0),u=function(e){var t=e.todos,n=e.userId,c=e.onUserSelect,s=e.handleChange,r=e.handleSelectChange,l=e.selectValue,i=e.query;return Object(d.jsxs)("div",{className:"TodoList",children:[Object(d.jsx)("h2",{children:"Todos:"}),Object(d.jsxs)("label",{htmlFor:"input",children:["Filter by Title:"," ",Object(d.jsx)("input",{type:"text",name:"input",id:"input",value:i,onChange:s}),Object(d.jsxs)("select",{name:"select",id:"select",value:l,onChange:r,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"not",children:"Not completed"})]})]}),t.length?Object(d.jsx)("div",{className:"TodoList__list-container",children:Object(d.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){return Object(d.jsxs)("li",{className:a()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(d.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(d.jsx)("input",{id:"".concat(e.id),type:"checkbox",readOnly:!0,checked:e.completed}),Object(d.jsx)("p",{children:e.title})]}),Object(d.jsx)("button",{className:a()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===n}),type:"button",onClick:function(){return c(e.userId)},children:"User: ".concat(e.userId)})]},e.id)}))})}):Object(d.jsx)("p",{children:"Please wait, loading..."})]})},j=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){return e.json()}))},b=(n(14),function(e){var t=e.userId,n=e.selectedUser,c=Object(i.useState)(null),s=Object(l.a)(c,2),r=s[0],o=s[1],a=Object(i.useState)(!1),u=Object(l.a)(a,2),b=u[0],h=u[1],O=Object(i.useState)(!1),p=Object(l.a)(O,2),m=p[0],f=p[1];return Object(i.useEffect)((function(){(function(e){return j("users/".concat(e))})(t).then((function(e){return o(e)})).then((function(){return h(!0)})).catch((function(){return f(!0)}))}),[t]),Object(d.jsxs)(d.Fragment,{children:[!b&&Object(d.jsx)("p",{children:"Loading..."}),b&&m&&Object(d.jsx)("p",{children:"Failed loading data"}),b&&!m&&Object(d.jsxs)("div",{className:"CurrentUser",children:[Object(d.jsx)("h2",{className:"CurrentUser__title",children:Object(d.jsxs)("span",{children:["Selected user:",null===r||void 0===r?void 0:r.id]})}),Object(d.jsx)("h3",{className:"CurrentUser__name",children:null===r||void 0===r?void 0:r.name}),Object(d.jsx)("p",{className:"CurrentUser__email",children:null===r||void 0===r?void 0:r.email}),Object(d.jsx)("p",{className:"CurrentUser__phone",children:null===r||void 0===r?void 0:r.phone}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(0)},children:"Clear"})]})]})});!function(e){e.Completed="completed",e.Not="not"}(c||(c={}));var h=function(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)([]),o=Object(l.a)(r,2),a=o[0],h=o[1],O=Object(i.useState)(""),p=Object(l.a)(O,2),m=p[0],f=p[1],x=Object(i.useState)("all"),v=Object(l.a)(x,2),_=v[0],C=v[1];Object(i.useEffect)((function(){j("todos").then((function(e){return h(e)}))}),[]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"App__sidebar",children:Object(d.jsx)(u,{handleChange:function(e){var t=e.target.value;f(t)},handleSelectChange:function(e){var t=e.target.value;C(t)},todos:function(){var e=m.toLowerCase(),t=a.filter((function(t){return t.title.toLowerCase().includes(e)}));switch(_){case c.Completed:return t.filter((function(e){return e.completed}));case c.Not:return t.filter((function(e){return!e.completed}));default:return t}}(),onUserSelect:s,userId:n,query:m,selectValue:_})}),Object(d.jsx)("div",{className:"App__content",children:Object(d.jsx)("div",{className:"App__content-container",children:n?Object(d.jsx)(b,{userId:n,selectedUser:s}):"No user selected"})})]})};r.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.e75a4ec8.chunk.js.map