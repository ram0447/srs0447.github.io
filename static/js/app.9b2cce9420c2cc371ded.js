webpackJsonp([1],{"4Hom":function(t,a,e){t.exports=e.p+"static/img/rschauha.bfc1c8e.png"},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i=e("kxiW"),r=e.n(i),n={name:"header",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){r.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=r.a.auth().currentUser.email)},methods:{logout:function(){var t=this;r.a.auth().signOut().then(function(){t.$router.go({path:t.$router.path})})}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-md bg-dark navbar-dark"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Ramcharan Chauhan")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsibleNavbar"}},[e("ul",{staticClass:"navbar-nav navbar-right"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/education"}},[t._v("Education")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/skill"}},[t._v("Skill")])],1),t._v(" "),t.isLoggedIn?e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1):t._e(),t._v(" "),t.isLoggedIn?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])]):t._e()])])],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("footer",{staticClass:"page-footer p-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-4 about-me"},[e("h5",[t._v("Ram Charan Chauhan")]),t._v(" "),e("p",[t._v('\n            "My name is Ram Charan Chauhan also my friends call me as R.S.Chauhan, I’m currently Pursuing the B.Tech in\n            Information Technology from Kamla Nehru Institute of Technology, Sultanpur.\n            And also completed Diploma in 2016 from Govt. Polyt. Mirzapur in Information Technology.\n            I\'m learning in field of web development and machine learning.\n            I like to hangout with friends, coding, watching news sometimes and learning new Technology."\n          ')])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4 contact"},[e("h5",[t._v("Contact")]),t._v(" "),e("p",[e("i",{staticClass:"material-icons left"},[t._v("email")]),t._v(" srs0447@gmail.com\n          ")]),t._v(" "),e("p",[e("i",{staticClass:"material-icons left"},[t._v("phone")]),t._v(" +91 9161060447\n          ")])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4 social-links"},[e("h5",[t._v("Social Contacts")]),t._v(" "),e("a",{attrs:{href:"https://www.facebook.com/R.S.ChauhanS",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook rs"})]),t._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/in/ramcharan-chauhan-70a062132/",target:"_blank"}},[e("i",{staticClass:"fab fa-linkedin rs"})]),t._v(" "),e("a",{attrs:{href:"https://github.com/srs0447",target:"_blank"}},[e("i",{staticClass:"fab fa-github rs"})]),t._v(" "),e("a",{attrs:{href:"https://twitter.com/RamcharanChau13",target:"_blank"}},[e("i",{staticClass:"fab fa-twitter rs"})])])])])]),t._v(" "),e("div",{staticClass:"rs-copy"},[e("div",{staticClass:"text-show"},[t._v("\n      Copyright © 2018\n      "),e("a",{staticClass:"grey-text text-lighten-4 right",attrs:{href:"http://rschauhan.in"}},[t._v("rschauhan.in")])])])])}]};var o={name:"App",components:{navbar:e("VU/8")(n,l,!1,function(t){e("drnk")},"data-v-64e42694",null).exports,Footer:e("VU/8")(null,c,!1,function(t){e("i6Kv")},"data-v-74cc45b2",null).exports}},d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),this._v(" "),a("router-view"),this._v(" "),a("Footer")],1)},staticRenderFns:[]},v=e("VU/8")(o,d,!1,null,null,null).exports,u=e("/ocq"),m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"container-section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"box"},[t._m(2),t._v(" "),e("h3",[t._v("Education")]),t._v(" "),e("p",[t._v("Education Details and description.")]),t._v(" "),e("div",{staticClass:"linkbtn"},[e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/education"}},[e("i",{staticClass:"fas fa-external-link-alt"})])],1)])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"box"},[t._m(3),t._v(" "),e("h3",[t._v("Project's")]),t._v(" "),e("p",[t._v("Project's details and description.")]),t._v(" "),e("div",{staticClass:"linkbtn"},[e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/project"}},[e("i",{staticClass:"fas fa-external-link-alt"})])],1)])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"box"},[t._m(4),t._v(" "),e("h3",[t._v("Skills")]),t._v(" "),e("p",[t._v("Skills deatils and description")]),t._v(" "),e("div",{staticClass:"linkbtn"},[e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/skill"}},[e("i",{staticClass:"fas fa-external-link-alt"})])],1)])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"slide header",attrs:{id:"title"}},[e("div",{staticClass:"text-show"},[e("h1",[t._v("Ram Charan Chauhan")]),t._v(" "),e("p",[t._v("Web Developer")]),t._v(" "),e("a",{attrs:{href:"https://www.facebook.com/R.S.ChauhanS",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook rs"})]),t._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/in/ramcharan-chauhan-70a062132/",target:"_blank"}},[e("i",{staticClass:"fab fa-linkedin rs"})]),t._v(" "),e("a",{attrs:{href:"https://github.com/srs0447",target:"_blank"}},[e("i",{staticClass:"fab fa-github rs"})]),t._v(" "),e("a",{attrs:{href:"https://twitter.com/RamcharanChau13",target:"_blank"}},[e("i",{staticClass:"fab fa-twitter rs"})])]),t._v(" "),e("div",{staticClass:"arrow bounce"},[e("a",{staticClass:"fa fa-arrow-down fa-2x",attrs:{href:"#about"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container",attrs:{id:"about"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-4"},[s("div",{staticClass:"profileImage"},[s("img",{staticClass:"img-fluid rounded-circle",attrs:{src:e("4Hom"),alt:"profile photo"}})])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-8"},[s("h3",[t._v("About me..")]),t._v(" "),s("p",[t._v('\n          "My name is Ram Charan Chauhan also my friends call me as R.S.Chauhan, I’m currently Pursuing the B.Tech in\n          Information Technology from Kamla Nehru Institute of Technology, Sultanpur.\n          And also completed Diploma in 2016 from Govt. Polyt. Mirzapur in Information Technology.\n          I\'m learning in field of web development and machine learning.\n          I like to hangout with friends, coding, watching news sometimes and learning new Technology."\n        ')]),t._v(" "),s("div",{staticClass:"status"},[s("h2",[s("span",{staticClass:"text-success"},[t._v("Status:")]),t._v(" "),s("span",{staticStyle:{"font-size":"25px"}},[t._v("Fresher")])]),t._v(" "),s("h2",[s("span",{staticClass:"text-success"},[t._v("Field:")]),t._v(" "),s("span",{staticStyle:{"font-size":"25px"}},[t._v("Web Development")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"logoInit"},[a("i",{staticClass:"fas fa-book-reader se-icon"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"logoInit"},[a("i",{staticClass:"fas fa-tasks se-icon"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"logoInit"},[a("i",{staticClass:"fas fa-cog se-icon"})])}]};var _=e("VU/8")({name:"about",data:function(){return{}}},m,!1,function(t){e("VmMN")},"data-v-0fcc2d34",null).exports,h=(e("881v"),r.a.initializeApp({apiKey:"AIzaSyBOpeKkvHNeQuWbts7ds4pbVWyVozxzU68",authDomain:"portfolio-f35c9.firebaseapp.com",databaseURL:"https://portfolio-f35c9.firebaseio.com",projectId:"portfolio-f35c9",storageBucket:"portfolio-f35c9.appspot.com",messagingSenderId:"935606698502"}).firestore()),p={name:"project",data:function(){return{projects:[]}},created:function(){var t=this;h.collection("projects").get().then(function(a){a.forEach(function(a){var e={id:a.id,project_id:a.data().project_id,name:a.data().title,description:a.data().description,role:a.data().role,skill:a.data().skill,team_size:a.data().team_size,duration:a.data().duration,link:a.data().address};t.projects.push(e)})})}},f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.projects,function(a){return e("div",{key:a.id,staticClass:"col-sm-12 col-md-6"},[e("div",{staticClass:"rsInit"},[e("div",{staticClass:"card mb-3"},[e("h5",{staticClass:"card-header"},[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[t._m(1,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.description))])]),t._v(" "),t._m(2,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.team_size))])]),t._v(" "),t._m(3,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.duration))])]),t._v(" "),t._m(4,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.role))])]),t._v(" "),t._m(5,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.skill))])]),t._v(" "),t._m(6,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[e("a",{staticClass:"btn btn-success",attrs:{href:a.link,target:"_black"}},[t._v("See Details")])])])])])])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"headTag"},[a("h2",[this._v("Projects details")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-titles"},[this._v("Description:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Team Size:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Duration:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Role:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Skill:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Address:")])])}]};var C=e("VU/8")(p,f,!1,function(t){e("n/5y")},"data-v-1f49935e",null).exports,g={name:"skill",data:function(){return{skills:[]}},created:function(){var t=this;h.collection("skills").get().then(function(a){a.forEach(function(a){var e={id:a.id,name:a.data().name,description:a.data().key_value};t.skills.push(e)})})}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.skills,function(a){return e("div",{key:a.id,staticClass:"col-sm-6 col-md-3"},[e("div",{staticClass:"card mb-3 mt-3"},[e("div",{staticClass:"card-header text-center shadow"},[t._v(t._s(a.name.toUpperCase()))])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"headTag"},[a("h2",[this._v("Skills details")])])}]};var k=e("VU/8")(g,b,!1,function(t){e("etws")},"data-v-aa2b7b94",null).exports,y={name:"education",data:function(){return{educations:[]}},created:function(){var t=this;h.collection("education").get().then(function(a){a.forEach(function(a){var e={id:a.id,level:a.data().level,name:a.data().collage_name,board:a.data().board,pass_year:a.data().year_pass,stream:a.data().stream,percentage:a.data().percentage};t.educations.push(e)})})}},E={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.educations,function(a){return e("div",{key:a.id,staticClass:"col-sm-12 col-md-6"},[e("div",{staticClass:"card rsInit"},[e("div",{staticClass:"card"},[e("h5",{staticClass:"card-header"},[t._v(t._s(a.level))]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[t._m(1,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.name))])]),t._v(" "),t._m(2,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.board))])]),t._v(" "),t._m(3,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.pass_year))])]),t._v(" "),t._m(4,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.stream))])]),t._v(" "),t._m(5,!0),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-8"},[e("p",{staticClass:"card-text"},[t._v(t._s(a.percentage))])])])])])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"headTag"},[a("h2",[this._v("Education details")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Collage:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Board Name:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Passing Year:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Stream:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-4"},[a("h5",{staticClass:"card-title"},[this._v("Percentage:")])])}]};var x=e("VU/8")(y,E,!1,function(t){e("cxuE")},"data-v-1afb962a",null).exports,w={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"card rsInit"},[e("div",{staticClass:"card-header"},[t._v("Projects")]),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Project details")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("Projects details and thier descriptions.")]),t._v(" "),e("router-link",{staticClass:"btn btn-success",attrs:{to:"/add_project"}},[t._v("Add Project")])],1)])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"card rsInit"},[e("div",{staticClass:"card-header"},[t._v("Education")]),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Education and training details")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("all Education details and their descriptions.")]),t._v(" "),e("router-link",{staticClass:"btn btn-success",attrs:{to:"/add_education"}},[t._v("Add Education")])],1)])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"card rsInit"},[e("div",{staticClass:"card-header"},[t._v("Skills")]),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Trainings and skills")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("All skills details")]),t._v(" "),e("router-link",{staticClass:"btn btn-success",attrs:{to:"/add_skill"}},[t._v("Add Skill")])],1)])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"headTag"},[a("h2",{staticClass:"text-center m-3 p-2 btn-success"},[this._v("Dashboard")])])}]};var $=e("VU/8")({name:"project",data:function(){return{}}},w,!1,function(t){e("OI5G")},"data-v-1848bbd8",null).exports,P={name:"add_skill",data:function(){return{name:null,key_value:null}},methods:{addSkill:function(){var t=this;h.collection("skills").add({name:this.name,key_value:this.key_value}).then(function(a){t.$router.push("./dashboard")})}}},j={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{on:{submit:function(a){return a.preventDefault(),t.addSkill(a)}}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h1",[t._v("Add Skill")]),t._v(" "),e("p",[t._v("Please Enter the skill details.")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",placeholder:"Enter Skill Name",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._v(" "),t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.key_value,expression:"key_value"}],attrs:{type:"text",id:"Key",placeholder:"Enter Skill Keys",required:""},domProps:{value:t.key_value},on:{input:function(a){a.target.composing||(t.key_value=a.target.value)}}}),t._v(" "),e("hr"),t._v(" "),e("button",{staticClass:"registerbtn",attrs:{type:"submit"}},[t._v("Add Skill")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"name"}},[a("b",[this._v("Name")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"Key"}},[a("b",[this._v("Key Value")])])}]};var S=e("VU/8")(P,j,!1,function(t){e("w8oy")},"data-v-18246126",null).exports,q={name:"add_education",data:function(){return{board:null,collage_name:null,level:null,percentage:null,stream:null,year_pass:null}},methods:{addEducation:function(){var t=this;h.collection("education").add({board:this.board,collage_name:this.collage_name,level:this.level,percentage:this.percentage,stream:this.stream,year_pass:this.year_pass}).then(function(a){t.$router.push("./dashboard")})}}},I={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{on:{submit:function(a){return a.preventDefault(),t.addEducation(a)}}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h1",[t._v("Add Education")]),t._v(" "),e("p",[t._v("Please Enter the Education details.")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.board,expression:"board"}],attrs:{type:"text",id:"board",placeholder:"Enter your board",required:""},domProps:{value:t.board},on:{input:function(a){a.target.composing||(t.board=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.collage_name,expression:"collage_name"}],attrs:{type:"text",id:"col",placeholder:"Enter Collage Name",required:""},domProps:{value:t.collage_name},on:{input:function(a){a.target.composing||(t.collage_name=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],attrs:{type:"text",id:"level",placeholder:"Enter Level ",required:""},domProps:{value:t.level},on:{input:function(a){a.target.composing||(t.level=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(3),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.stream,expression:"stream"}],attrs:{type:"text",id:"stream",placeholder:"Enter Stream",required:""},domProps:{value:t.stream},on:{input:function(a){a.target.composing||(t.stream=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.year_pass,expression:"year_pass"}],attrs:{type:"text",id:"year",placeholder:"Year Of Passing",required:""},domProps:{value:t.year_pass},on:{input:function(a){a.target.composing||(t.year_pass=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(5),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.percentage,expression:"percentage"}],attrs:{type:"text",id:"perc",placeholder:"Enter Percentage",required:""},domProps:{value:t.percentage},on:{input:function(a){a.target.composing||(t.percentage=a.target.value)}}})])]),t._v(" "),e("hr"),t._v(" "),e("button",{staticClass:"registerbtn",attrs:{type:"submit"}},[t._v("Add Education")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"board"}},[a("b",[this._v("Board")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"col"}},[a("b",[this._v("Collage Name")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"level"}},[a("b",[this._v("Level")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"stream"}},[a("b",[this._v("Stream")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"year"}},[a("b",[this._v("Year Of Passing")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"perc"}},[a("b",[this._v("Percentage")])])}]};var N=e("VU/8")(q,I,!1,function(t){e("jp8x")},"data-v-16b634ea",null).exports,A={name:"add_project",data:function(){return{title:null,desc:null,team:null,duration:null,role:null,skill:null,address:null}},methods:{addProject:function(){var t=this;h.collection("projects").add({title:this.title,description:this.desc,team_size:this.team,duration:this.duration,role:this.role,skill:this.skill,address:this.address}).then(function(a){t.$router.push("./dashboard")})}}},R={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{on:{submit:function(a){return a.preventDefault(),t.addProject(a)}}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h1",[t._v("Add Project")]),t._v(" "),e("p",[t._v("Please Enter the project details.")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",id:"title",placeholder:"Enter Project Title",required:""},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],attrs:{type:"text",id:"desc",placeholder:"Enter Project Description",required:""},domProps:{value:t.desc},on:{input:function(a){a.target.composing||(t.desc=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.team,expression:"team"}],attrs:{type:"text",id:"team",placeholder:"Enter Team Size",required:""},domProps:{value:t.team},on:{input:function(a){a.target.composing||(t.team=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(3),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],attrs:{type:"text",id:"dura",placeholder:"Enter Duration",required:""},domProps:{value:t.duration},on:{input:function(a){a.target.composing||(t.duration=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],attrs:{type:"text",id:"role",placeholder:"Enter your Role",required:""},domProps:{value:t.role},on:{input:function(a){a.target.composing||(t.role=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[t._m(5),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.skill,expression:"skill"}],attrs:{type:"text",id:"skill",placeholder:"Enter Projects Skills",required:""},domProps:{value:t.skill},on:{input:function(a){a.target.composing||(t.skill=a.target.value)}}})])]),t._v(" "),t._m(6),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",id:"address",placeholder:"Enter project Address",required:""},domProps:{value:t.address},on:{input:function(a){a.target.composing||(t.address=a.target.value)}}}),t._v(" "),e("hr"),t._v(" "),e("button",{staticClass:"registerbtn",attrs:{type:"submit"}},[t._v("Add Project")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"title"}},[a("b",[this._v("Title")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"desc"}},[a("b",[this._v("Description")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"team"}},[a("b",[this._v("Team Size")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"dura"}},[a("b",[this._v("Duration")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"role"}},[a("b",[this._v("Role")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"skill"}},[a("b",[this._v("Skill")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"address"}},[a("b",[this._v("Address")])])}]};var D=e("VU/8")(A,R,!1,function(t){e("q6le")},"data-v-4f041086",null).exports,T={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var a=this;r.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){a.$router.go({path:a.$router.path})},function(t){alert("Opps. "+t.message)})}}},U={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"card card-login mx-auto mt-5"},[e("div",{staticClass:"card-header"},[t._v("Login")]),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-label-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email address",required:"required",autofocus:"autofocus"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-label-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:"required"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})])]),t._v(" "),e("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",value:"Login"},on:{click:t.login}})])])])])},staticRenderFns:[]};var V=e("VU/8")(T,U,!1,function(t){e("ngBm")},"data-v-3f5ffce6",null).exports;s.a.use(u.a);var F=new u.a({routes:[{path:"/",name:"about",component:_},{path:"/project",name:"project",component:C},{path:"/education",name:"education",component:x},{path:"/skill",name:"skill",component:k},{path:"/dashboard",name:"dashoard",component:$,meta:{requiresAuth:!0}},{path:"/add_skill",name:"add_skill",component:S,meta:{requiresAuth:!0}},{path:"/add_project",name:"add_project",component:D,meta:{requiresAuth:!0}},{path:"/add_education",name:"add_education",component:N,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:V,meta:{requiresGuest:!0}}]});F.beforeEach(function(t,a,e){t.matched.some(function(t){return t.meta.requiresAuth})?r.a.auth().currentUser?e():e({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&r.a.auth().currentUser?e({path:"/dashboard",query:{redirect:t.fullPath}}):e()});var z,K=F;s.a.config.productionTip=!1,r.a.auth().onAuthStateChanged(function(t){z||(z=new s.a({el:"#app",router:K,template:"<App/>",components:{App:v}}))})},OI5G:function(t,a){},VmMN:function(t,a){},cxuE:function(t,a){},drnk:function(t,a){},etws:function(t,a){},i6Kv:function(t,a){},jp8x:function(t,a){},"n/5y":function(t,a){},ngBm:function(t,a){},q6le:function(t,a){},w8oy:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.9b2cce9420c2cc371ded.js.map