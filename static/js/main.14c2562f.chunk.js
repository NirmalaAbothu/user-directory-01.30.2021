(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{43:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(2),a=r(12),c=r.n(a),o={headerStyle:{background:"black",color:"white",textAlign:"center",marginTop:"30px"},headingStyle:{fontSize:100}};var l=function(){return Object(s.jsxs)("div",{style:o.headerStyle,className:"jumbotron",children:[Object(s.jsx)("h1",{style:o.headerStyle,children:"Employee Directory"}),Object(s.jsx)("p",{style:o.headerStyle,children:"Click on Name column to filter by firstName or use search box to narrow your result"})]})},i=r(16),h=r(13),d=r(14),u=r(18),j=r(17),b={headerStyle:{Width:"0",marginLeft:"500px",marginTop:"30px"}};var m=function(e){return Object(s.jsx)("form",{style:b.headerStyle,className:"form-inline my-2 my-lg-0",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"search"}),Object(s.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a user",id:"search"}),Object(s.jsx)("br",{})]})})},p=r(15),O=r.n(p),x=function(){return O.a.get("https://randomuser.me/api/?results=200")};var f=function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture,alt:e.firstName})}),Object(s.jsxs)("td",{children:[e.firstName,e.lastName]}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.dob})]})},y={headerStyle:{borderStyle:"ridge",marginTop:"30px"}},g=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(h.a)(this,r);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={users:[],result:{},search:"",sortOrder:""},e.handleInputChange=function(t){e.setState({search:t.target.value}),console.log(t.target.value),e.SearchEmployee(t.target.value)},e.SearchEmployee=function(t){var r=t.toLowerCase(),s=e.state.users.filter((function(e){return e.name.first.toLowerCase().includes(r)||e.name.last.toLowerCase().includes(r)}));console.log(s),e.setState({users:s}),console.log(e.state.users)},e.sortByName=function(){var t=e.state.users.sort((function(e,t){return 2*(e.name.first>t.name.first)-1}));console.log(t),"down"===e.state.sortOrder?(t.reverse(),console.log(t),e.setState({sortOrder:"up"})):e.setState({sortOrder:"down"}),e.setState({users:t})},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){return e.setState({users:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange.bind(this)})}),Object(s.jsx)("div",{style:y.headerStyle,children:Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{scope:"col",onClick:function(){e.sortByName()},children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Phone"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(s.jsx)("tbody",{children:Object(i.a)(this.state.users).map((function(e,t){return Object(s.jsx)(f,{picture:e.picture.medium,firstName:e.name.first,lastName:e.name.last,phone:e.cell,email:e.email,dob:new Date(Date.parse(e.dob.date)).toLocaleDateString()},t)}))})]})})]})}}]),r}(n.Component);var v=function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(l,{}),Object(s.jsx)(g,{})]})};r(42);c.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.14c2562f.chunk.js.map