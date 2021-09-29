(this["webpackJsonpassignment-commutatus"]=this["webpackJsonpassignment-commutatus"]||[]).push([[0],{145:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(53),l=a.n(r),s=(a(145),a(146),a(18)),i=a(11),d=a(176),j=a(170),m=a(175),o=a(173),b=a(15),u=function(e){if(e){var t=localStorage.getItem(e.toLowerCase());try{t?t=JSON.parse(t):h(e,t=[])}catch(a){console.log(a)}finally{return t}}},h=function(e,t){e&&localStorage.setItem(e.toLowerCase(),JSON.stringify(t))},O=function(e){return u("departments").some((function(t){return t.name===e.toLowerCase()}))},p=function(e){var t=e.email;return u("employees").filter((function(e){return t&&t.toLowerCase()===e.email.toLowerCase()})).length},x=function(e,t){return e.find((function(e){return e.id===+t}))},f=function(e,t,a){return e.filter((function(e){return!e.departmentId&&!e.teamId||e.teamId===t&&e.departmentId===a||!e.departmentId})).map((function(e){var t=e.id;return{key:t,text:e.name,value:t}}))},C=a(2),y=Object(n.createContext)(),v=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(b.a)(a,2),r=c[0],l=c[1],s=Object(n.useState)([]),i=Object(b.a)(s,2),d=i[0],j=i[1];return Object(n.useEffect)((function(){l(u("departments")),j(u("employees"))}),[]),Object(C.jsx)(y.Provider,{value:{departments:r,setDepartments:l,employees:d,setEmployees:j},children:t})},g=a(37),I=a(172),w=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=u("employees");c(e),console.log(e)}),[]),Object(C.jsx)("div",{children:Object(C.jsxs)(m.a,{children:[Object(C.jsxs)(m.a.Column,{floated:"left",width:6,children:[Object(C.jsx)(d.a,{as:"h3",children:"Employee Details"}),Object(C.jsx)("p",{children:"Emplyee details and some more actions"})]}),Object(C.jsx)(m.a.Column,{floated:"right",width:6,children:Object(C.jsxs)(s.b,{to:"/updateEmployee",className:"ui primary button",children:[Object(C.jsx)(g.a,{name:"plus"})," New"]})}),Object(C.jsx)(m.a.Column,{width:12,children:Object(C.jsxs)(I.a,{color:"blue",children:[Object(C.jsx)(I.a.Header,{children:Object(C.jsxs)(I.a.Row,{children:[Object(C.jsx)(I.a.HeaderCell,{children:"ID"}),Object(C.jsx)(I.a.HeaderCell,{children:"Name"}),Object(C.jsx)(I.a.HeaderCell,{children:"Email"}),Object(C.jsx)(I.a.HeaderCell,{children:"Phone Number"}),Object(C.jsx)(I.a.HeaderCell,{children:"Position"}),Object(C.jsx)(I.a.HeaderCell,{children:"Action"})]})}),Object(C.jsx)(I.a.Body,{children:a&&a.map((function(e){var t=e.id,a=e.name,n=e.email,c=e.phoneNumber,r=e.position;return Object(C.jsxs)(I.a.Row,{children:[Object(C.jsx)(I.a.Cell,{children:t}),Object(C.jsx)(I.a.Cell,{children:a}),Object(C.jsx)(I.a.Cell,{children:n}),Object(C.jsx)(I.a.Cell,{children:c}),Object(C.jsx)(I.a.Cell,{children:r}),Object(C.jsx)(I.a.Cell,{children:Object(C.jsxs)(s.b,{to:"/updateEmployee/".concat(t),className:"ui primary button",children:[Object(C.jsx)(g.a,{name:"edit"})," Edit"]})})]},t)}))})]},"employeesTable")})]})})},E=a(128),D=a(167),N=a(171),L=a(168),S=function(){var e=Object(i.f)(),t=Object(n.useContext)(y),a=t.employees,c=t.setEmployees,r=Object(n.useState)({}),l=Object(b.a)(r,2),s=l[0],j=l[1],o=Object(n.useState)(!1),O=Object(b.a)(o,2),f=O[0],v=O[1],g=Object(i.g)().id;Object(n.useEffect)((function(){var e=x(a,+g);e&&e.email&&(j(Object(E.a)({},e)),v(!0))}),[g,a]);var I=function(e){var t=s;t[e.target.name]=e.target.value,j(t),console.log(g)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(D.a,{children:[Object(C.jsxs)(d.a,{as:"h3",children:[g?"Update":"Add"," Employee Details "]}),Object(C.jsx)(m.a,{children:Object(C.jsx)(m.a.Column,{width:8,children:Object(C.jsxs)(N.a,{children:[Object(C.jsx)(N.a.Field,{id:"full-name",control:L.a,label:"Name",name:"name",defaultValue:f&&s&&s.name||"",placeholder:"joe schmoe",onChange:I}),Object(C.jsx)(N.a.Field,{id:"phone-number",control:L.a,label:"Phone Number",name:"phoneNumber",defaultValue:f&&s&&s.phoneNumber||"",onChange:I}),Object(C.jsx)(N.a.Field,{id:"email",control:L.a,label:"Email",name:"email",defaultValue:f&&s&&s.email||"",placeholder:"joe@schmoe.com",onChange:I}),Object(C.jsx)("button",{className:"ui primary button",onClick:function(){var t=s,a={};a=f?function(e){var t=u("employees");if(t.length)return t.forEach((function(t){e.id===t.id&&(t.name=e.name,t.email=e.email,t.phoneNumber=e.phoneNumber)})),h("employees",t),{collection:t}}(t):function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"employees",t=arguments.length>1?arguments[1]:void 0;if(p(t))return{error:"Employee already exist."};var a=u(e);return a.length?t.id=a[a.length-1].id+1:t.id=1,a.push(t),h("employees",a),{collection:a}}("employees",t),a.error||c(a.collection),e.push("/employee")},children:"Save"})]})})})]})})},H=function(){var e=Object(n.useContext)(y),t=e.departments,a=e.employees;return Object(C.jsx)("div",{children:Object(C.jsxs)(m.a,{children:[Object(C.jsxs)(m.a.Column,{floated:"left",width:6,children:[Object(C.jsx)(d.a,{as:"h3",children:"Departments Details"}),Object(C.jsx)("p",{children:"Departments details and some more actions"})]}),Object(C.jsx)(m.a.Column,{floated:"right",width:6,children:Object(C.jsxs)(s.b,{to:"/AddDepartment",className:"ui primary button mini",children:[Object(C.jsx)(g.a,{name:"plus"})," New"]})}),Object(C.jsx)(m.a.Column,{width:12,children:Object(C.jsxs)(I.a,{color:"blue",children:[Object(C.jsx)(I.a.Header,{children:Object(C.jsx)(I.a.Row,{children:["ID","Department Name","Head","Action"].map((function(e){return Object(C.jsx)(I.a.HeaderCell,{children:e},e)}))})}),Object(C.jsx)(I.a.Body,{children:t&&t.map((function(e){var t=e.name,n=e.id,c=(e.teams,e.head);return Object(C.jsxs)(I.a.Row,{children:[Object(C.jsx)(I.a.Cell,{children:n}),Object(C.jsx)(I.a.Cell,{children:t}),Object(C.jsx)(I.a.Cell,{children:x(a,c).name}),Object(C.jsx)(I.a.Cell,{children:Object(C.jsxs)(s.b,{to:"/departmentDetails/".concat(n),className:"ui primary button mini",children:[Object(C.jsx)(g.a,{name:"eye"})," View"]})})]},n)}))})]},"departmentsTable")})]})})},T=a(169),F=a(174),M=function(){var e=Object(i.f)(),t=Object(n.useContext)(y),a=t.employees,c=t.setDepartments,r=t.setEmployees,l=Object(n.useState)({}),s=Object(b.a)(l,2),j=s[0],o=s[1],p=Object(n.useState)([]),x=Object(b.a)(p,2),v=x[0],g=x[1],I=Object(n.useState)(null),w=Object(b.a)(I,2),E=w[0],S=w[1];Object(n.useEffect)((function(){var e=f(a);g(e)}),[a]);var H=function(e,t){var a=t.name,n=t.value,c=j;j[a]=n,o(c)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(D.a,{children:[Object(C.jsx)(d.a,{as:"h3",children:"Add Department Details"}),Object(C.jsx)(m.a,{children:Object(C.jsx)(m.a.Column,{width:8,children:Object(C.jsxs)(N.a,{children:[Object(C.jsx)(N.a.Field,{id:"full-name",control:L.a,label:"Department Name",name:"departmentName",onChange:H}),Object(C.jsx)(N.a.Field,{control:T.a,label:"Department Head",placeholder:"Department Head",name:"departmentHead",options:v,search:!0,selection:!0,onChange:H}),E&&Object(C.jsx)(F.a,{info:!0,header:"Department already exists.",content:""}),Object(C.jsx)("button",{className:"ui primary button",onClick:function(t){if(j){var a=function(e){var t=e.departmentName,a=e.departmentHead;if(O(t))return{error:"Department already exist."};var n={name:t.toLowerCase(),head:a,teams:[]},c=u("departments"),r=u("employees");c.length?n.id=c[c.length-1].id+1:n.id=1,c.push(n);var l=r.find((function(e){return e.id===a}));return l.departmentId=n.id,l.position="head",h("employees",r),h("departments",c),{employees:r,departments:c}}(j);a.error?S(!0):(r(a.employees),c(a.departments),e.push("/departments"))}},children:"Save"})]})})})]})})},A=function(){var e=Object(n.useContext)(y),t=e.departments,a=e.employees,c=Object(i.g)().id,r=Object(n.useState)(x(t,c)),l=Object(b.a)(r,1)[0];return Object(C.jsx)("div",{children:Object(C.jsxs)(m.a,{children:[Object(C.jsxs)(m.a.Column,{floated:"left",width:6,children:[Object(C.jsx)(d.a,{as:"h3",children:l&&l.name}),Object(C.jsx)("p",{children:"Below are the team details present under this department"})]}),Object(C.jsx)(m.a.Column,{floated:"right",width:6,children:Object(C.jsxs)(s.b,{to:"/addTeam/".concat(c),className:"ui primary button mini",children:[Object(C.jsx)(g.a,{name:"plus"})," New"]})}),Object(C.jsx)(m.a.Column,{width:12,children:Object(C.jsxs)(I.a,{color:"blue",children:[Object(C.jsx)(I.a.Header,{children:Object(C.jsx)(I.a.Row,{children:["ID","Team Name","Team Leader","Team Members","Action"].map((function(e){return Object(C.jsx)(I.a.HeaderCell,{children:e},e)}))})}),Object(C.jsx)(I.a.Body,{children:l&&l.teams.map((function(e){var t=e.name,n=e.id,r=e.teamLeader,l=e.teamMembers;return Object(C.jsxs)(I.a.Row,{children:[Object(C.jsx)(I.a.Cell,{children:n}),Object(C.jsx)(I.a.Cell,{children:t}),Object(C.jsx)(I.a.Cell,{children:x(a,r).name}),Object(C.jsx)(I.a.Cell,{children:Object(C.jsx)(o.a,{items:l.map((function(e){return x(a,e).name}))},n)}),Object(C.jsx)(I.a.Cell,{children:Object(C.jsxs)(s.b,{to:"/updateTeam/".concat(c,"/").concat(n),className:"ui primary button mini",children:[Object(C.jsx)(g.a,{name:"edit"})," Edit"]})})]},n)}))})]},"departmentsTable")})]})})},k=function(){var e=Object(i.f)(),t=Object(i.g)(),a=t.departmentId,c=t.teamId,r=Object(n.useContext)(y),l=r.departments,s=r.setDepartments,j=r.employees,O=r.setEmployees,p=Object(n.useState)({departmentId:+a}),v=Object(b.a)(p,2),g=v[0],I=v[1],w=Object(n.useState)([]),E=Object(b.a)(w,2),S=E[0],H=E[1],F=Object(n.useState)([]),M=Object(b.a)(F,2),A=M[0],k=M[1],B=Object(n.useState)(!1),P=Object(b.a)(B,2),R=P[0],V=P[1];Object(n.useEffect)((function(){var e=f(j,c,a);H(e),k(e)}),[j,a,c,l]),Object(n.useEffect)((function(){var e=function(e,t,a){var n=x(a,+e);if(n){return x(n.teams,+t)||{}}return{}}(a,c,l);e.id&&(I(e),V(!0),console.log(g))}),[j,a,c,l,g]);var J=function(e,t){var n=t.name,r=t.value,l=g;if(l[n]=r,I(l),console.log(g),"teamLeader"===n){var s=f(j,c,a).filter((function(e){return e.value!==r}));H(s)}};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(D.a,{children:[Object(C.jsxs)(d.a,{as:"h3",children:[c&&a?"Update":"Add"," Team Details"]}),Object(C.jsx)(m.a,{children:Object(C.jsx)(m.a.Column,{width:8,children:Object(C.jsxs)(N.a,{children:[Object(C.jsx)(N.a.Field,{id:"full-name",control:L.a,label:"Team Name",name:"name",defaultValue:R&&g.name||"",onChange:J}),R&&g&&g.teamLeader&&Object(C.jsxs)("p",{children:["Old team leader : ",x(j,g.teamLeader).name]}),Object(C.jsx)(N.a.Field,{control:T.a,label:"Team Leader",name:"teamLeader",options:A,placeholder:"Team Leader",search:!0,onChange:J}),R&&g&&g.teamMembers.length&&Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(o.a.Item,{as:"li",value:"*",children:["Old team members",Object(C.jsx)(o.a.Item,{as:"ol",children:g.teamMembers.map((function(e){return Object(C.jsx)(o.a.Item,{as:"li",value:"-",children:x(j,e).name},e.id)}))})]})}),Object(C.jsx)(N.a.Dropdown,{control:T.a,label:"Team Members",placeholder:"Team Memebers",name:"teamMembers",options:S,search:!0,multiple:!0,selection:!0,onChange:J}),Object(C.jsx)("button",{className:"ui primary button",onClick:function(t){var n;n=R?function(e){var t=u("departments"),a=u("employees"),n=t.find((function(t){return t.id===e.departmentId})).teams.find((function(t){return t.id===e.id})),c=a.find((function(e){return e.id===n.teamLeader}));return c.position=null,c.teamId=null,c.departmentId=null,a.filter((function(e){return n.teamMembers.includes(e.id)})).forEach((function(e){c.position=null,c.teamId=null,c.departmentId=null})),a.filter((function(t){var a=t.id;return e.teamMembers.includes(a)||a===e.teamLeader})).forEach((function(t){e.teamLeader===t.id?t.position="team leader":t.position="team member",t.departmentId=e.departmentId,t.teamId=e.id})),n.name=e.name,n.teamLeader=e.teamLeader,n.teamMembers=e.teamMembers,h("employees",a),h("departments",t),{updatedEmployees:a,updatedDepartments:t}}(g):function(e){var t,a=u("departments"),n=a.find((function(t){return t.id===e.departmentId})),c=u("employees");if(t=e.name,!n.teams.some((function(e){return e.name===t.toLowerCase()}))){var r=n.teams;r.length?e.id=r[r.length-1].id+1:e.id=1,n.teams.push(e),c.filter((function(t){var a=t.id;return e.teamMembers.includes(a)||a===e.teamLeader})).forEach((function(t){e.teamLeader===t.id?t.position="team leader":t.position="team member",t.departmentId=e.departmentId,t.teamId=e.id}))}return h("employees",c),h("departments",a),{updatedEmployees:c,updatedDepartments:a}}(g),O(n.updatedEmployees),s(n.updatedDepartments),e.push("/departmentDetails/".concat(a))},children:"Save"})]})})})]})})};var B=function(){return Object(C.jsxs)(o.a,{children:[Object(C.jsxs)(o.a.Item,{children:[Object(C.jsx)(o.a.Icon,{name:"users"}),Object(C.jsx)(o.a.Content,{children:Object(C.jsx)(s.b,{to:"/employee",children:Object(C.jsx)(o.a.Header,{children:"Employee Details"})})})]}),Object(C.jsxs)(o.a.Item,{children:[Object(C.jsx)(o.a.Icon,{name:"user"}),Object(C.jsxs)(o.a.Content,{children:[Object(C.jsx)(s.b,{to:"/departments",children:Object(C.jsx)(o.a.Header,{children:"CEO"})}),Object(C.jsx)(o.a.List,{children:Object(C.jsxs)(o.a.Item,{children:[Object(C.jsx)(o.a.Icon,{name:"building"}),Object(C.jsx)(o.a.Content,{children:Object(C.jsx)(s.b,{to:"/department/1",children:Object(C.jsx)(o.a.Header,{children:"Head of Engineering"})})})]})})]})]})]})},P=function(){return Object(C.jsx)(v,{children:Object(C.jsxs)("div",{style:{padding:"1rem"},children:[Object(C.jsx)(d.a,{as:"h2",children:"Employee Management"}),Object(C.jsx)(j.a,{}),Object(C.jsx)(s.a,{children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)(m.a.Column,{width:4,children:Object(C.jsx)(B,{})}),Object(C.jsx)(m.a.Column,{width:12,children:Object(C.jsxs)(i.c,{children:[Object(C.jsx)(i.a,{path:"/employee",children:Object(C.jsx)(w,{})}),Object(C.jsx)(i.a,{path:"/updateEmployee/:id",children:Object(C.jsx)(S,{})}),Object(C.jsx)(i.a,{path:"/updateEmployee",children:Object(C.jsx)(S,{})}),Object(C.jsx)(i.a,{path:"/departmentDetails/:id",children:Object(C.jsx)(A,{})}),Object(C.jsx)(i.a,{path:"/addDepartment",children:Object(C.jsx)(M,{})}),Object(C.jsx)(i.a,{path:"/departments",children:Object(C.jsx)(H,{})}),Object(C.jsx)(i.a,{path:"/addTeam/:departmentId",children:Object(C.jsx)(k,{})}),Object(C.jsx)(i.a,{path:"/updateTeam/:departmentId/:teamId",children:Object(C.jsx)(k,{})})]})})]})})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,178)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};l.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(P,{})}),document.getElementById("root")),R()}},[[154,1,2]]]);
//# sourceMappingURL=main.296a85c3.chunk.js.map