(this["webpackJsonpassignment-commutatus"]=this["webpackJsonpassignment-commutatus"]||[]).push([[0],{127:function(e){e.exports=JSON.parse('{"departments":[{"name":"head of engineering","head":1,"teams":[{"departmentId":1,"name":"Team 1","teamLeader":4,"teamMembers":[5,6,7],"id":1}],"id":1},{"name":"head of staff/hr","head":2,"teams":[{"departmentId":2,"name":"Team HR 1","teamLeader":8,"teamMembers":[9,10,11,12],"id":1}],"id":2},{"name":" head of design","head":3,"teams":[{"departmentId":3,"name":"Design 1","teamLeader":13,"teamMembers":[14,15,16],"id":1}],"id":3}]}')},128:function(e){e.exports=JSON.parse('{"employees":[{"id":1,"name":"Jaime Bernard","email":"jaimebernard@boink.com","phoneNumber":"+1 (993) 442-2118","departmentId":1,"position":"head"},{"id":2,"name":"Janis Middleton","email":"janismiddleton@boink.com","phoneNumber":"+1 (907) 528-2508","departmentId":2,"position":"head"},{"id":3,"name":"Valarie Gonzalez","email":"valariegonzalez@boink.com","phoneNumber":"+1 (806) 455-2812","departmentId":3,"position":"head"},{"id":4,"name":"Huber Rivas","email":"huberrivas@boink.com","phoneNumber":"+1 (843) 484-2869","position":"team leader","departmentId":1,"teamId":1},{"id":5,"name":"Cora Morris","email":"coramorris@boink.com","phoneNumber":"+1 (851) 409-2633","position":"team member","departmentId":1,"teamId":1},{"id":6,"name":"Cole Stout","email":"colestout@podunk.com","phoneNumber":"+1 (944) 448-3083","position":"team member","departmentId":1,"teamId":1},{"id":7,"name":"Dorothy Parks","email":"dorothyparks@podunk.com","phoneNumber":"+1 (866) 405-2564","position":"team member","departmentId":1,"teamId":1},{"id":8,"name":"Alissa Pickett","email":"alissapickett@podunk.com","phoneNumber":"+1 (824) 419-2959","position":"team leader","departmentId":2,"teamId":1},{"id":9,"name":"Mara Bishop","email":"marabishop@podunk.com","phoneNumber":"+1 (864) 526-3469","position":"team member","departmentId":2,"teamId":1},{"id":10,"name":"Mcpherson Carlson","email":"mcphersoncarlson@podunk.com","phoneNumber":"+1 (872) 512-3657","position":"team member","departmentId":2,"teamId":1},{"id":11,"name":"Liliana Strong","email":"lilianastrong@podunk.com","phoneNumber":"+1 (863) 583-2051","position":"team member","departmentId":2,"teamId":1},{"id":12,"name":"Juliette Callahan","email":"juliettecallahan@podunk.com","phoneNumber":"+1 (888) 522-3881","position":"team member","departmentId":2,"teamId":1},{"id":13,"name":"Alison Galloway","email":"alisongalloway@podunk.com","phoneNumber":"+1 (897) 421-3559","position":"team leader","departmentId":3,"teamId":1},{"id":14,"name":"Rowe Crawford","email":"rowecrawford@podunk.com","phoneNumber":"+1 (936) 498-3288","position":"team member","departmentId":3,"teamId":1},{"id":15,"name":"Nielsen Norris","email":"nielsennorris@podunk.com","phoneNumber":"+1 (868) 463-3333","position":"team member","departmentId":3,"teamId":1},{"id":16,"name":"Stacy Suarez","email":"stacysuarez@podunk.com","phoneNumber":"+1 (952) 556-2280","position":"team member","departmentId":3,"teamId":1},{"id":17,"name":"Guthrie Parrish","email":"guthrieparrish@podunk.com","phoneNumber":"+1 (965) 402-3884"},{"id":18,"name":"Rose Kerr","email":"rosekerr@podunk.com","phoneNumber":"+1 (905) 486-2774"},{"id":19,"name":"Vance Bean","email":"vancebean@podunk.com","phoneNumber":"+1 (970) 581-3100"},{"id":20,"name":"Hunt Burgess","email":"huntburgess@podunk.com","phoneNumber":"+1 (882) 447-2711"},{"id":21,"name":"Pamela Odonnell","email":"pamelaodonnell@podunk.com","phoneNumber":"+1 (913) 459-3125"}]}')},150:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(54),d=a.n(c),i=(a(150),a(151),a(12)),m=a(13),s=a(173),l=a(181),o=a(183),j=a(180),u=a(10),b=a(119),p=a(127),h=a(128),O=function(e){if(e){var t=localStorage.getItem(e.toLowerCase());try{t?t=JSON.parse(t):f(e,t=[])}catch(a){console.log(a)}finally{return t}}},f=function(e,t){e&&localStorage.setItem(e.toLowerCase(),JSON.stringify(t))},x=function(e){return O("departments").some((function(t){return t.name===e.toLowerCase()}))},v=function(e){var t=e.email;return O("employees").filter((function(e){return t&&t.toLowerCase()===e.email.toLowerCase()})).length},y=function(e,t){return e.find((function(e){return e.id===+t}))},I=function(e,t,a){return e.filter((function(e){return!e.departmentId&&!e.teamId||e.teamId===+t&&e.departmentId===+a})).map((function(e){var t=e.id;return{key:t,text:e.name,value:t}}))},C=a(1),g=Object(n.createContext)(),N=function(e){var t=e.children,a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],d=r[1],i=Object(n.useState)([]),m=Object(u.a)(i,2),s=m[0],l=m[1];return Object(n.useEffect)((function(){var e=O("departments"),t=O("employees");e.length||(e=function(){var e=p;return f("departments",e.departments),e.departments}()),t.length||(t=function(){var e=h;return f("employees",e.employees),e.employees}()),d(e),l(t)}),[]),Object(C.jsx)(g.Provider,{value:{departments:c,setDepartments:d,employees:s,setEmployees:l},children:t})},w=a(38),D=a(177),S=a(172),E=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),d=Object(u.a)(c,2),m=d[0],s=d[1];Object(n.useEffect)((function(){var e=O("employees");r(e),s(e),console.log(e)}),[]);return Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{children:[Object(C.jsxs)(j.a.Column,{floated:"left",width:13,children:[Object(C.jsx)(l.a,{as:"h3",children:"Employee Details"}),Object(C.jsx)("p",{children:"Emplyee details and some more actions"})]}),Object(C.jsx)(j.a.Column,{floated:"right",width:3,children:Object(C.jsxs)(i.b,{to:"/updateEmployee",className:"ui primary right floated button mini",children:[Object(C.jsx)(w.a,{name:"plus"})," New"]})}),Object(C.jsx)(j.a.Column,{width:16,children:Object(C.jsxs)(D.a,{celled:!0,children:[Object(C.jsxs)(D.a.Header,{children:[Object(C.jsxs)(D.a.Row,{children:[Object(C.jsx)(D.a.HeaderCell,{colSpan:5,children:Object(C.jsx)("p",{children:"Please enter any employee details to search."})}),Object(C.jsx)(D.a.HeaderCell,{children:Object(C.jsx)(S.a,{icon:"search",placeholder:"Search...",className:"mini",onChange:function(e,t){var n=t.value;if(n){var r=a.filter((function(e){return Object.values(e).join(" ").toLowerCase().includes(n.toLowerCase())}));s(r)}else s(a)}})})]}),Object(C.jsxs)(D.a.Row,{children:[Object(C.jsx)(D.a.HeaderCell,{children:"ID"}),Object(C.jsx)(D.a.HeaderCell,{children:"Name"}),Object(C.jsx)(D.a.HeaderCell,{children:"Email"}),Object(C.jsx)(D.a.HeaderCell,{children:"Phone Number"}),Object(C.jsx)(D.a.HeaderCell,{children:"Position"}),Object(C.jsx)(D.a.HeaderCell,{children:"Action"})]})]}),Object(C.jsx)(D.a.Body,{children:m&&m.map((function(e){var t=e.id,a=e.name,n=e.email,r=e.phoneNumber,c=e.position,d=e.departmentId,m=e.teamId;return Object(C.jsxs)(D.a.Row,{children:[Object(C.jsx)(D.a.Cell,{children:t}),Object(C.jsx)(D.a.Cell,{children:a}),Object(C.jsx)(D.a.Cell,{children:n}),Object(C.jsx)(D.a.Cell,{children:r}),Object(C.jsx)(D.a.Cell,{children:c}),Object(C.jsxs)(D.a.Cell,{width:2,children:[Object(C.jsxs)(i.b,{to:"/updateEmployee/".concat(t),className:"ui primary center floated button mini",children:[Object(C.jsx)(w.a,{name:"edit"})," Edit"]}),d&&m&&t&&"team member"===c&&Object(C.jsx)(i.b,{to:"/changeTeam/".concat(d,"/").concat(m,"/").concat(t),className:"ui secondary center floated button mini",children:"Change Team"})]})]},t)}))})]},"employeesTable")})]})})},k=a(133),L=a(176),T=a(179),M=function(){var e=Object(m.f)(),t=Object(n.useContext)(g),a=t.employees,r=t.setEmployees,c=Object(n.useState)({}),d=Object(u.a)(c,2),i=d[0],o=d[1],b=Object(n.useState)(!1),p=Object(u.a)(b,2),h=p[0],x=p[1],I=Object(n.useState)(null),N=Object(u.a)(I,2),w=N[0],D=N[1],E=Object(m.g)().id;Object(n.useEffect)((function(){var e=y(a,+E);e&&e.email&&(o(Object(k.a)({},e)),x(!0))}),[E,a]);var M=function(e){var t=i;t[e.target.name]=e.target.value,o(t),console.log(E)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(s.a,{children:[Object(C.jsxs)(l.a,{as:"h3",children:[E?"Update":"Add"," Employee Details "]}),Object(C.jsx)(j.a,{children:Object(C.jsx)(j.a.Column,{width:8,children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(L.a.Field,{id:"full-name",control:S.a,label:"Name",name:"name",defaultValue:h&&i&&i.name||"",placeholder:"joe schmoe",onChange:M}),Object(C.jsx)(L.a.Field,{id:"phone-number",control:S.a,label:"Phone Number",name:"phoneNumber",defaultValue:h&&i&&i.phoneNumber||"",onChange:M}),Object(C.jsx)(L.a.Field,{id:"email",control:S.a,label:"Email",name:"email",defaultValue:h&&i&&i.email||"",placeholder:"joe@schmoe.com",onChange:M}),w&&Object(C.jsx)(T.a,{info:!0,header:w,content:""}),Object(C.jsx)("button",{className:"ui primary button",onClick:function(){var t=i,a={};a=h?function(e){var t=O("employees");if(t.length)return t.forEach((function(t){e.id===t.id&&(t.name=e.name,t.email=e.email,t.phoneNumber=e.phoneNumber)})),f("employees",t),{collection:t}}(t):function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"employees",t=arguments.length>1?arguments[1]:void 0;if(v(t))return{error:"Employee already exist."};var a=O(e);return a.length?t.id=a[a.length-1].id+1:t.id=1,a.push(t),f("employees",a),{collection:a}}("employees",t),a.error?D(a.error):(r(a.collection),e.push("/employee"))},children:"Save"})]})})})]})})},H=function(){var e=Object(n.useContext)(g),t=e.departments,a=e.employees;return Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{children:[Object(C.jsxs)(j.a.Column,{floated:"left",width:13,children:[Object(C.jsx)(l.a,{as:"h3",children:"Departments Details"}),Object(C.jsx)("p",{children:"Departments details and some more actions"})]}),Object(C.jsx)(j.a.Column,{floated:"right",width:3,children:Object(C.jsxs)(i.b,{to:"/AddDepartment",className:"ui primary right floated button mini",children:[Object(C.jsx)(w.a,{name:"plus"})," New"]})}),Object(C.jsx)(j.a.Column,{width:16,children:Object(C.jsxs)(D.a,{color:"blue",children:[Object(C.jsx)(D.a.Header,{children:Object(C.jsx)(D.a.Row,{children:["ID","Department Name","Head","Action"].map((function(e){return Object(C.jsx)(D.a.HeaderCell,{children:e},e)}))})}),Object(C.jsx)(D.a.Body,{children:t&&t.map((function(e){var t=e.name,n=e.id,r=(e.teams,e.head);return Object(C.jsxs)(D.a.Row,{children:[Object(C.jsx)(D.a.Cell,{children:n}),Object(C.jsx)(D.a.Cell,{children:t}),Object(C.jsx)(D.a.Cell,{children:y(a,r).name}),Object(C.jsx)(D.a.Cell,{children:Object(C.jsxs)(i.b,{to:"/departmentDetails/".concat(n),className:"ui primary button mini",children:[Object(C.jsx)(w.a,{name:"eye"})," View"]})})]},n)}))})]},"departmentsTable")})]})})},F=a(174),B=function(){var e=Object(m.f)(),t=Object(n.useContext)(g),a=t.employees,r=t.setDepartments,c=t.setEmployees,d=Object(n.useState)({}),i=Object(u.a)(d,2),o=i[0],b=i[1],p=Object(n.useState)([]),h=Object(u.a)(p,2),v=h[0],y=h[1],N=Object(n.useState)(null),w=Object(u.a)(N,2),D=w[0],E=w[1];Object(n.useEffect)((function(){var e=I(a);y(e)}),[a]);var k=function(e,t){var a=t.name,n=t.value,r=o;o[a]=n,b(r)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(s.a,{children:[Object(C.jsx)(l.a,{as:"h3",children:"Add Department Details"}),Object(C.jsx)(j.a,{children:Object(C.jsx)(j.a.Column,{width:8,children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(L.a.Field,{id:"full-name",control:S.a,label:"Department Name",name:"departmentName",onChange:k}),Object(C.jsx)(L.a.Field,{control:F.a,label:"Department Head",placeholder:"Department Head",name:"departmentHead",options:v,search:!0,selection:!0,onChange:k,selectOnBlur:!1}),D&&Object(C.jsx)(T.a,{info:!0,header:"Department already exists.",content:""}),Object(C.jsx)("button",{className:"ui primary button",onClick:function(t){if(o){var a=function(e){var t=e.departmentName,a=e.departmentHead;if(x(t))return{error:"Department already exist."};var n={name:t.toLowerCase(),head:a,teams:[]},r=O("departments"),c=O("employees");r.length?n.id=r[r.length-1].id+1:n.id=1,r.push(n);var d=c.find((function(e){return e.id===a}));return d.departmentId=n.id,d.position="head",f("employees",c),f("departments",r),{employees:c,departments:r}}(o);a.error?E(!0):(c(a.employees),r(a.departments),e.push("/departments"))}},children:"Save"})]})})})]})})},R=a(178),A=function(){var e=Object(n.useContext)(g),t=e.departments,a=e.employees,r=Object(m.g)().id,c=Object(n.useState)(),d=Object(u.a)(c,2),s=d[0],o=d[1];return Object(n.useEffect)((function(){o(y(t,+r))}),[t,r]),Object(C.jsx)(C.Fragment,{children:s&&Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{children:[Object(C.jsxs)(j.a.Column,{floated:"left",width:13,children:[Object(C.jsx)(l.a,{as:"h3",children:s&&s.name}),Object(C.jsx)("p",{children:"Below are the team details of selected present under this department"})]}),Object(C.jsx)(j.a.Column,{floated:"right",width:3,children:Object(C.jsxs)(i.b,{to:"/addTeam/".concat(r),className:"ui primary right floated button mini",children:[Object(C.jsx)(w.a,{name:"plus"})," New"]})}),Object(C.jsx)(j.a.Column,{width:16,children:Object(C.jsxs)(D.a,{color:"blue",children:[Object(C.jsx)(D.a.Header,{children:Object(C.jsx)(D.a.Row,{children:["ID","Team Name","Team Leader","Team Members","Action"].map((function(e){return Object(C.jsx)(D.a.HeaderCell,{children:e},e)}))})}),Object(C.jsx)(D.a.Body,{children:s&&s.teams.map((function(e){var t=e.name,n=e.id,c=e.teamLeader,d=e.teamMembers;return Object(C.jsxs)(D.a.Row,{children:[Object(C.jsx)(D.a.Cell,{children:n}),Object(C.jsx)(D.a.Cell,{children:t}),Object(C.jsx)(D.a.Cell,{children:y(a,c).name}),Object(C.jsx)(D.a.Cell,{children:Object(C.jsx)(R.a,{items:d&&d.map((function(e){return y(a,e).name}))},n)}),Object(C.jsxs)(D.a.Cell,{children:[Object(C.jsx)(i.b,{to:"/updateTeam/".concat(r,"/").concat(n),className:"ui primary button mini",children:"Edit"}),Object(C.jsx)(i.b,{to:"/updateMembers/add/".concat(r,"/").concat(n),className:"ui orange button mini",children:"Add member"}),Object(C.jsx)(i.b,{to:"/updateMembers/remove/".concat(r,"/").concat(n),className:"ui red button mini",color:"red",children:"Remove member"})]})]},n)}))})]},"departmentsTable")})]})})})},P=function(){var e=Object(m.f)(),t=Object(m.g)(),a=t.departmentId,r=t.teamId,c=Object(n.useContext)(g),d=c.departments,i=c.setDepartments,o=c.employees,b=c.setEmployees,p=Object(n.useState)({departmentId:+a}),h=Object(u.a)(p,2),x=h[0],v=h[1],N=Object(n.useState)({}),w=Object(u.a)(N,2),D=w[0],E=w[1],k=Object(n.useState)([]),T=Object(u.a)(k,2),M=T[0],H=T[1],B=Object(n.useState)([]),A=Object(u.a)(B,2),P=A[0],J=A[1],V=Object(n.useState)("add"),z=Object(u.a)(V,2),G=z[0],U=z[1];Object(n.useEffect)((function(){var e=I(o,r,a);H(e),J(e)}),[o,a,r,d]),Object(n.useEffect)((function(){var e=function(e,t,a){var n=y(a,+e);if(n){return y(n.teams,+t)||{}}return{}}(a,r,d);if(e.id){E(e),U("update");var t=x;t.id=e.id,t.name=e.name}}),[o,a,r,d,x]);var K=function(e,t){var n=t.name,c=t.value,d=x;if(d[n]=c,v(d),console.log(x),"teamLeader"===n){var i=I(o,r,a).filter((function(e){return e.value!==c}));H(i)}};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(s.a,{children:[Object(C.jsxs)(l.a,{as:"h3",children:[r&&a?"Update":"Add"," Team Details"]}),Object(C.jsx)(j.a,{children:Object(C.jsx)(j.a.Column,{width:8,children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(L.a.Field,{id:"full-name",control:S.a,label:"Team Name",name:"name",defaultValue:G&&D.name||"",onChange:K}),"update"===G&&D&&D.teamLeader&&Object(C.jsxs)("p",{children:["Old team leader : ",y(o,D.teamLeader).name]}),Object(C.jsx)(L.a.Field,{control:F.a,label:"Team Leader",name:"teamLeader",options:P,placeholder:"Team Leader",search:!0,onChange:K,selectOnBlur:!1}),"update"===G&&D&&D.teamMembers.length&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("p",{children:"Old team members"}),Object(C.jsx)(R.a.Item,{as:"ol",children:D.teamMembers.map((function(e){return Object(C.jsx)(R.a.Item,{as:"li",value:"-",children:y(o,e).name},e)}))},D.id)]}),"add"===G&&Object(C.jsx)(L.a.Dropdown,{control:F.a,label:"Team Members",placeholder:"Team Memebers",name:"teamMembers",options:M,search:!0,multiple:!0,selection:!0,onChange:K,selectOnBlur:!1}),Object(C.jsx)("button",{className:"ui primary button",onClick:function(t){var n;"update"===G?n=function(e){var t=O("departments"),a=O("employees"),n=t.find((function(t){return t.id===e.departmentId})).teams.find((function(t){return t.id===e.id})),r=a.find((function(e){return e.id===n.teamLeader}));r.position=null,r.teamId=null,r.departmentId=null;var c=a.find((function(t){return t.id===e.teamLeader}));return c&&(c.position="team leader",c.departmentId=e.departmentId,c.teamId=e.id),n.name=e.name,e.teamLeader&&(n.teamLeader=e.teamLeader),f("employees",a),f("departments",t),{updatedEmployees:a,updatedDepartments:t}}(x):"add"===G&&(n=function(e){var t,a=O("departments"),n=a.find((function(t){return t.id===e.departmentId})),r=O("employees");if(t=e.name,!n.teams.some((function(e){return e.name===t.toLowerCase()}))){var c=n.teams;c.length?e.id=c[c.length-1].id+1:e.id=1,n.teams.push(e),r.filter((function(t){var a=t.id;return e.teamMembers.includes(a)||a===e.teamLeader})).forEach((function(t){e.teamLeader===t.id?t.position="team leader":t.position="team member",t.departmentId=e.departmentId,t.teamId=e.id}))}return f("employees",r),f("departments",a),{updatedEmployees:r,updatedDepartments:a}}(x)),b(n.updatedEmployees),i(n.updatedDepartments),e.push("/departmentDetails/".concat(a))},children:"Save"})]})})})]})})},J=function(){var e=Object(m.f)(),t=Object(m.g)(),a=t.action,r=t.departmentId,c=t.teamId,d=Object(n.useContext)(g),i=d.employees,o=d.setDepartments,p=d.setEmployees,h=Object(n.useState)([]),x=Object(u.a)(h,2),v=x[0],N=x[1],w=Object(n.useState)([]),D=Object(u.a)(w,2),S=D[0],E=D[1],k=Object(n.useState)(null),M=Object(u.a)(k,2),H=M[0],B=M[1];Object(n.useEffect)((function(){if("add"===a){var e=I(i);N(e)}else if("remove"===a){var t=function(e,t){if(!e&&!t)return[];var a=O("departments"),n=O("employees"),r=y(a,e);if(r){var c=y(r.teams,t);if(c)return n.filter((function(e){return c.teamMembers.includes(e.id)})).map((function(e){var t=e.id;return{key:t,text:e.name,value:t}}))}return{error:"Department & Team info not found."}}(r,c);t.error?B(t.error):N(t)}}),[i,r,c,a]);return Object(C.jsx)(s.a,{children:H?Object(C.jsx)(T.a,{info:!0,header:H,content:""}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(l.a,{as:"h3",children:["add"===a?"Add new":"Remove"," team members"]}),Object(C.jsxs)("p",{children:["You can ","add"===a?"add":"remove"," multiple team members in the existing team."]}),Object(C.jsxs)("p",{children:["Below field is showing all the employees which are","add"===a?" not assigned into any teams.":" present in the team."]}),Object(C.jsx)(j.a,{children:Object(C.jsx)(j.a.Column,{width:8,children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(L.a.Select,{control:F.a,label:"Team Members",placeholder:"Team Memebers",name:"teamMembers",options:v,search:!0,multiple:!0,onChange:function(e,t){t.name;var a=t.value;E(a),console.log(S)},selectOnBlur:!1}),Object(C.jsx)("button",{className:"ui primary button",onClick:function(t){var n=function(e,t,a,n){var r=O("departments"),c=O("employees"),d=r.find((function(e){return e.id===+t})).teams.find((function(e){return e.id===+a})),i=c.filter((function(t){return e.includes(t.id)}));return"add"===n?(i.forEach((function(e){e.departmentId=+t,e.teamId=+a,e.position="team member"})),d.teamMembers=[].concat(Object(b.a)(d.teamMembers),Object(b.a)(e))):"remove"===n&&(i.forEach((function(e){e.departmentId=null,e.teamId=null,e.position=null})),d.teamMembers=d.teamMembers.filter((function(t){return!e.includes(t)}))),f("employees",c),f("departments",r),{updatedEmployees:c,updatedDepartments:r}}(S,r,c,a),d=n.updatedEmployees,i=n.updatedDepartments;o(i),p(d),e.push("/departmentDetails/".concat(r))},children:"Save"})]})})})]})})},V=function(){var e=Object(m.f)(),t=Object(m.g)(),a=t.departmentId,r=t.teamId,c=t.employeeId,d=Object(n.useContext)(g),i=d.departments,o=d.setEmployees,b=d.setDepartments,p=Object(n.useState)({}),h=Object(u.a)(p,2),x=h[0],v=h[1],y=Object(n.useState)({oldDep:+a,oldTeam:+r}),I=Object(u.a)(y,1)[0],N=Object(n.useState)([]),w=Object(u.a)(N,2),D=w[0],S=w[1],E=Object(n.useState)([]),k=Object(u.a)(E,2),M=k[0],H=k[1],B=Object(n.useState)(null),R=Object(u.a)(B,2),A=R[0],P=R[1],J=Object(n.useState)(!0),V=Object(u.a)(J,2),z=V[0],G=V[1];Object(n.useEffect)((function(){S(i.map((function(e){var t=e.id;return{key:t,text:e.name,value:t}})))}),[a,r,i,c]);var U=function(e,t){var n=t.name,r=t.value,c=x;if(c[n]=r,"departmentId"===n){if(2===+a&&3===+r)P("Any employee from HR can't be moved to the design Team.");else{P(null);var d=i.find((function(e){return e.id===r}));d&&H(d.teams.map((function(e){var t=e.id;return{key:t,text:e.name,value:t}}))),c.teamId=null}v(c)}c.departmentId&&c.teamId&&G(!1)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(s.a,{children:[Object(C.jsx)(l.a,{as:"h3",children:"Change Team Details"}),Object(C.jsx)(j.a,{children:Object(C.jsx)(j.a.Column,{width:8,children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(L.a.Dropdown,{control:F.a,label:"Departments",name:"departmentId",placeholder:"Department",options:D,onChange:U,selectOnBlur:!1}),Object(C.jsx)(L.a.Field,{control:F.a,label:"Teams",name:"teamId",placeholder:"Team",search:!0,options:M,onChange:U,selectOnBlur:!1}),A&&Object(C.jsx)(T.a,{info:!0,header:A}),Object(C.jsx)("button",{className:"ui primary button",onClick:function(t){var a=function(e,t,a){var n=e.oldDep,r=e.oldTeam,c=t.departmentId,d=t.teamId;if(!c||!d)return{error:"Please select information properly."};if(c&&d&&n===c&&r===d)return{error:"Please update valid department and team."};var i=O("departments"),m=O("employees"),s=i.find((function(e){return e.id===n})).teams.find((function(e){return e.id===r}));s.teamMembers=s.teamMembers.filter((function(e){return e!==+a})),i.find((function(e){return e.id===c})).teams.find((function(e){return e.id===d})).teamMembers.push(+a);var l=m.find((function(e){return e.id===+a}));return l.departmentId=c,l.teamId=d,f("employees",m),f("departments",i),{updatedEmployees:m,updatedDepartments:i}}(I,x,c);a.error?P(a.error):(b(a.updatedDepartments),o(a.updatedEmployees),e.push("/employee"))},disabled:z,children:"Save"})]})})})]})})},z=a(175),G=function(e){var t=e.id,a=e.icon,n=e.route,r=e.label;return Object(C.jsxs)(R.a.Item,{children:[Object(C.jsx)(R.a.Icon,{name:a}),Object(C.jsx)(R.a.Content,{children:Object(C.jsx)(i.b,{to:n,children:Object(C.jsx)(R.a.Header,{children:r})})})]},t)},U=function(){var e=Object(n.useContext)(g).departments;return Object(C.jsxs)(R.a,{children:[Object(C.jsx)(G,{icon:"users",label:"Employee Details",route:"/employee",id:"usersList"}),Object(C.jsx)(z.a,{}),Object(C.jsxs)(R.a.Item,{children:[Object(C.jsx)(R.a.Icon,{name:"user"}),Object(C.jsxs)(R.a.Content,{children:[Object(C.jsx)(i.b,{to:"/departments",children:Object(C.jsx)(R.a.Header,{children:"CEO"})}),Object(C.jsx)(R.a.List,{children:e&&e.map((function(e){return Object(C.jsx)(G,{id:e.id,label:e.name,icon:"building",route:"/departmentDetails/".concat(e.id)})}))},"departments")]})]},"deps&teams")]})};var K=function(){return Object(C.jsx)(N,{children:Object(C.jsxs)(s.a,{style:{padding:"1rem"},children:[Object(C.jsx)(l.a,{as:"h2",attached:"top",children:"React Assignment"}),Object(C.jsx)(o.a,{attached:!0,children:Object(C.jsx)(i.a,{children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(j.a.Column,{mobile:16,tablet:4,computer:4,children:Object(C.jsx)(U,{})}),Object(C.jsx)(j.a.Column,{mobile:16,tablet:12,computer:12,children:Object(C.jsxs)(m.c,{children:[Object(C.jsx)(m.a,{path:"/employee",children:Object(C.jsx)(E,{})}),Object(C.jsx)(m.a,{path:"/updateEmployee/:id",children:Object(C.jsx)(M,{})}),Object(C.jsx)(m.a,{path:"/updateEmployee",children:Object(C.jsx)(M,{})}),Object(C.jsx)(m.a,{path:"/departmentDetails/:id",children:Object(C.jsx)(A,{})}),Object(C.jsx)(m.a,{path:"/addDepartment",children:Object(C.jsx)(B,{})}),Object(C.jsx)(m.a,{path:"/departments",children:Object(C.jsx)(H,{})}),Object(C.jsx)(m.a,{path:"/addTeam/:departmentId",children:Object(C.jsx)(P,{})}),Object(C.jsx)(m.a,{path:"/updateTeam/:departmentId/:teamId",children:Object(C.jsx)(P,{})}),Object(C.jsx)(m.a,{path:"/updateMembers/:action/:departmentId/:teamId",children:Object(C.jsx)(J,{})}),Object(C.jsx)(m.a,{path:"/changeTeam/:departmentId/:teamId/:employeeId",children:Object(C.jsx)(V,{})})]})})]})})})]})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,d=t.getTTFB;a(e),n(e),r(e),c(e),d(e)}))};d.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(K,{})}),document.getElementById("root")),Y()}},[[159,1,2]]]);
//# sourceMappingURL=main.992d6757.chunk.js.map