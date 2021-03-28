(this["webpackJsonpcomcon-client"]=this["webpackJsonpcomcon-client"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(27),i=n.n(c),r=n(10),o=n(55),l=n(14),d=n(56),u=n(37),m=n(57),j=n.n(m),b=n(2),h="DATA_REQUESTED",f="DATA_FAILURE",p="UPDATE_CURRENT_DATA",O="LOGIN",x="REGISTER",v="LOGOUT",y={isLoading:!1,user:{_id:"",firstName:"",lastName:"",username:"",email:"",createdAt:"",updatedAt:""},token:null,error:{}},g=Object(l.c)({userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(b.a)({},y),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(b.a)(Object(b.a)({},e),{},{token:t.payload.token});case O:return Object(b.a)(Object(b.a)({},e),t.payload);case v:return y;case h:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});case p:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,user:Object(b.a)({},t.payload)});case f:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}}}),w={key:"root",storage:j.a},N=Object(u.a)(w,g),D=Object(l.d)(N,Object(l.a)(d.a)),k=Object(u.b)(D),T=n(5),E=n(6),C=n(12),L=n(11),S=n(59),A=n(4),F=n(0),I=function(){return Object(F.jsx)("div",{className:"center-absolute",children:Object(F.jsxs)("div",{className:"d-flex flex-direction-column text-a-center",children:[Object(F.jsx)("h1",{children:"Welcome to Comcon!"}),Object(F.jsx)("h3",{className:"m-bottom-10",children:"Talk with your friends or meet more people!"}),Object(F.jsxs)("div",{className:"d-flex",children:[Object(F.jsx)("a",{className:"welcome-option",href:"/login",children:"Login"}),Object(F.jsx)("a",{className:"welcome-option",href:"/register",children:"Sign up"})]})]})})},P=function(e){Object(C.a)(n,e);var t=Object(L.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(F.jsx)(I,{})}}]),n}(a.Component),_=function(){function e(t){Object(T.a)(this,e),this.field=t.trim(),this.result={correct:!1,message:""}}return Object(E.a)(e,[{key:"isEmail",value:function(){return/^(([^<>()\[\]\\.,;:\s@\u201d]+(\.[^<>()\[\]\\.,;:\s@\u201d]+)*)|(\u201c.+\u201d))@((\[[0\u20139]{1,3}\.[0\u20139]{1,3}\.[0\u20139]{1,3}\.[0\u20139]{1,3}])|(([a-zA-Z\-0\u20139]+\.)+[a-zA-Z]{2,}))$/.test(this.field)?Object(b.a)(Object(b.a)({},this.result),{},{correct:!0}):Object(b.a)(Object(b.a)({},this.result),{},{message:"Email is incorrect, please write it again."})}},{key:"isLength",value:function(e){var t=e.min,n=void 0===t?null:t,a=e.max,s=void 0===a?null:a;return null!==n?this.field.length<n?Object(b.a)(Object(b.a)({},this.result),{},{message:"The content of the field is very short, please complete it correctly."}):Object(b.a)(Object(b.a)({},this.result),{},{correct:!0}):null!==s?this.field.length>s?Object(b.a)(Object(b.a)({},this.result),{},{message:"The content of the field is long, please complete it correctly."}):Object(b.a)(Object(b.a)({},this.result),{},{correct:!0}):void 0}},{key:"isEmpty",value:function(){return 0===this.field.length?Object(b.a)(Object(b.a)({},this.result),{},{message:"Field empty, fill it."}):Object(b.a)(Object(b.a)({},this.result),{},{correct:!0})}}]),e}(),W=function(e,t){var n=[];return t.forEach((function(t){var a=function(e,t){switch(t.condition){case"isEmail":return new _(e[t.field]).isEmail();case"isLength":return new _(e[t.field]).isLength(t.length);case"isEmpty":return new _(e[t.field]).isEmpty();default:return}}(e,t);a.correct||n.push({id:t.id||"",field:t.field,error:a})})),n},M=function(e){var t={};return e.forEach((function(e,n){return t[n]=e})),t},U=function(e){var t=e.submit;return Object(F.jsx)("div",{className:"center-absolute",children:Object(F.jsxs)("div",{className:"card form-width",children:[Object(F.jsx)("div",{className:"card-header",children:Object(F.jsx)("h1",{children:"Welcome back!!"})}),Object(F.jsxs)("form",{className:"card-body d-flex flex-direction-column",encType:"multipart/form-data",onSubmit:t,children:[Object(F.jsxs)("div",{className:"field m-bottom-20",children:[Object(F.jsx)("label",{htmlFor:"username",children:"Username"}),Object(F.jsx)("input",{id:"username",type:"text",name:"username",placeholder:"some.username"})]}),Object(F.jsxs)("div",{className:"field m-bottom-20",children:[Object(F.jsx)("label",{htmlFor:"password",children:"Password"}),Object(F.jsx)("input",{id:"password",type:"password",name:"password",placeholder:"***************"})]}),Object(F.jsx)("button",{children:"Login"})]})]})})},R=function(){return{type:h,payload:{}}},G=function(e){return{type:f,payload:e}},H=function(e,t){return{type:e,payload:t}},Y="https://comcon-server.herokuapp.com",z=function(e){var t=e.id,n=void 0===t?void 0:t,a=e.type,s=e.classList,c=void 0===s?[]:s,i=e.innerText,r=void 0===i?void 0:i,o=document.createElement(a);return void 0!==n&&(o.id=n),void 0!==r&&(o.innerText=r),c.length&&c.forEach((function(e){return o.classList.add(e)})),o},B=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];n.forEach((function(t){return e.appendChild(t)}))},J=3500,Z=null,q=!0,Q=!0,V="fas fa-exclamation",$="Toast alert.",K="success",X={success:{className:"success",color:"#27ae60"},warn:{className:"warn",color:"#ecb605"},danger:{className:"danger",color:"#d32f13"}},ee=function(e){var t=function(e){return"number"!==typeof e.duration&&(e.duration=J),"function"!==typeof e.onClick&&(e.onClick=Z),"boolean"!==typeof e.closeOnClick&&(e.closeOnClick=q),"string"!==typeof e.icon&&(e.icon=V),"string"!==typeof e.text&&(e.text=$),"string"===typeof e.theme&&X[e.theme]||(e.theme=K),"boolean"!==typeof e.displayIcon&&(e.displayIcon=Q),e}(e),n=function(){var e=document.getElementById("notification-container");return e||(e=z({id:"notification-container",type:"div",classList:["notification-container"]})),e}(),a=z({type:"div",classList:["notification"]}),s=function(e,t){var n=z({type:"div",classList:["progress-bar",t.className]});return setTimeout((function(){n.animate([{boxShadow:"inset 0px 0 2px 0 ".concat(t.color)},{boxShadow:"inset ".concat(n.clientWidth,"px 0 2px 0 ").concat(t.color)}],{duration:e})}),150),n}(t.duration,X[t.theme]),c=z({type:"div",classList:["notification-row"]});if(t.displayIcon){var i=function(e,t){var n=z({type:"div",classList:["notification-icon"]}),a=z({type:"i"});return a.className=e,a.style.color=t.color,B(n,a),n}(t.icon,X[t.theme]);B(c,i)}t.closeOnClick&&(a.onclick=function(){return function(e){e.animate([{transform:"translate(0%, 0%)",opacity:1},{transform:"translate(-50%, 50%)",opacity:0}],{duration:150}),setTimeout((function(){e.remove()}),150)}(a)});var r=function(e){var t=z({type:"div",classList:["notification-body"]}),n=z({type:"p",innerText:e});return B(t,n),t}(t.text);B(c,r),B(a,s,c),B(n,a),B(document.body,n),a.animate([{transform:"translateY(50%)",opacity:0},{transform:"translateY(-15%)",opacity:1},{transform:"translateY(15%)",opacity:1},{transform:"translateY(0%)",opacity:1}],{duration:150}),setTimeout((function(){a.animate([{transform:"translate(0%, 0%)",opacity:1},{transform:"translate(-50%, 50%)",opacity:0}],{duration:100})}),t.duration),setTimeout((function(){a.remove()}),t.duration+100)},te=function(e){Object(C.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).submit=function(t){t.preventDefault();var n=new FormData(t.target),a=[{field:"username",condition:"isEmpty"},{field:"password",condition:"isEmpty"}],s=W(M(n),a);s.length?s.length===a.length?ee({text:"Please, complete the form.",showDuration:6e3,theme:"danger"}):ee({text:{username:"Complete username field.",password:"Complete password field."}[s[0].field],showDuration:6e3,theme:"warn"}):e.props.login(n,(function(e){ee({text:e.message,theme:200===e.status?"success":"warn"}),200===e.status&&(window.location.href="/home")}))},e}return Object(E.a)(n,[{key:"render",value:function(){return Object(F.jsx)(U,{submit:this.submit})}}]),n}(a.Component),ne=Object(r.b)(null,{login:function(e,t){return function(n){n(R()),fetch("".concat(Y,"/user/auth"),{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){200===e.status&&n(H(O,e.data)),t(e)})).catch((function(e){return n(G(e))}))}}})(te),ae=function(e){var t=e.submit;return Object(F.jsx)("div",{className:"center-absolute",children:Object(F.jsxs)("div",{className:"card form-width",children:[Object(F.jsx)("div",{className:"card-header",children:Object(F.jsx)("h1",{children:"Go, register you!"})}),Object(F.jsxs)("form",{id:"register-form",className:"card-body d-flex flex-direction-column",encType:"multipart/form-data",onSubmit:t,children:[Object(F.jsxs)("div",{className:"row m-bottom-20",children:[Object(F.jsxs)("div",{className:"field m-right-20",children:[Object(F.jsx)("label",{htmlFor:"first-name",children:"First name"}),Object(F.jsx)("input",{id:"first-name",type:"text",name:"firstName",placeholder:"Juan"})]}),Object(F.jsxs)("div",{className:"field",children:[Object(F.jsx)("label",{htmlFor:"last-name",children:"Last name"}),Object(F.jsx)("input",{id:"last-name",type:"text",name:"lastName",placeholder:"Sanchez"})]})]}),Object(F.jsxs)("div",{className:"field m-bottom-20",children:[Object(F.jsx)("label",{htmlFor:"username",children:"Username"}),Object(F.jsx)("input",{id:"username",type:"text",name:"username",placeholder:"some.username"})]}),Object(F.jsxs)("div",{className:"field m-bottom-20",children:[Object(F.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(F.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"my_email@domain.com"})]}),Object(F.jsxs)("div",{className:"row m-bottom-20",children:[Object(F.jsxs)("div",{className:"field m-right-20",children:[Object(F.jsx)("label",{htmlFor:"password",children:"Password"}),Object(F.jsx)("input",{id:"password",type:"password",name:"password",placeholder:"***************"})]}),Object(F.jsxs)("div",{className:"field",children:[Object(F.jsx)("label",{htmlFor:"confirm-password",children:"Confirm"}),Object(F.jsx)("input",{id:"confirm-password",type:"password",name:"confirmPassword",placeholder:"***************"})]})]}),Object(F.jsx)("button",{children:"Sign up"}),Object(F.jsx)("div",{id:"socket-response"})]})]})})},se=function(e){Object(C.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).submit=function(e){e.preventDefault();var t=new FormData(e.target),n=M(t),a=W(n,[{field:"firstName",condition:"isEmpty"},{field:"lastName",condition:"isEmpty"},{field:"username",condition:"isEmpty"},{field:"email",condition:"isEmail"},{field:"password",condition:"isLength",length:{min:5}},{field:"confirmPassword",condition:"isLength",length:{min:5}}]);n.password===n.confirmPassword&&0===a.length?fetch("".concat(Y,"/user"),{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){ee({text:e.message,duration:5e3,theme:200===e.status?"success":"warn"})})):n.password!==n.confirmPassword?ee({text:"Passwords don't match.",duration:7e3,theme:"warn"}):(console.log(a),ee({text:{firstName:"Write your name.",lastName:"Write your last name.",username:"Write your username.",email:"Write your email.",password:"Write your password.",confirmPassword:"Please confirm your password."}[a[0].field],duration:7e3,theme:"warn"}))},e}return Object(E.a)(n,[{key:"render",value:function(){return Object(F.jsx)(ae,{submit:this.submit})}}]),n}(a.Component),ce=Object(r.b)()((function(e){return Object(F.jsx)("nav",{className:"navbar",children:Object(F.jsxs)("ul",{className:"nav",children:[Object(F.jsxs)("li",{className:"nav-item",children:[Object(F.jsx)("i",{className:"fas fa-home"}),Object(F.jsx)("a",{href:"/home",children:"Home"})]}),Object(F.jsxs)("li",{className:"nav-item",children:[Object(F.jsx)("i",{className:"fas fa-plus"}),Object(F.jsx)("a",{children:"Create room"})]}),Object(F.jsxs)("li",{className:"nav-item",children:[Object(F.jsx)("i",{className:"fas fa-compass"}),Object(F.jsx)("a",{children:"Explore"})]}),Object(F.jsxs)("li",{className:"nav-item",children:[Object(F.jsx)("i",{className:"fas fa-user-friends"}),Object(F.jsx)("a",{children:"Friends"})]}),Object(F.jsxs)("li",{className:"nav-item",children:[Object(F.jsx)("i",{className:"fas fa-cogs"}),Object(F.jsx)("a",{children:"Settings"})]}),Object(F.jsxs)("li",{className:"nav-item",onClick:function(){e.dispatch({type:v,playload:{}}),window.location.href="/login"},children:[Object(F.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(F.jsx)("a",{children:"Sign out"})]})]})})})),ie=n(60),re=function(e){var t=e.buttonDisabled,n=e.onChangeInput,a=e.submit,s=e.slideToggle,c=e.list,i=e.Activities;return Object(F.jsxs)("div",{className:"aside",children:[Object(F.jsx)("div",{className:"card-header",children:Object(F.jsxs)("a",{className:"d-block green-color font-",onClick:function(){return s("#post-form")},children:[Object(F.jsx)("i",{className:"fas fa-edit"})," POST ACTIVITY"]})}),Object(F.jsxs)("div",{className:"card-body",children:[Object(F.jsxs)("form",{id:"post-form",className:"d-flex flex-direction-column m-bottom-10 toggle-container",onSubmit:a,children:[Object(F.jsx)("textarea",{className:"m-bottom-10",name:"text",placeholder:"Write something...",rows:"4",cols:"50",onChange:n}),Object(F.jsx)("div",{className:"d-flex flex-direction-column m-bottom-10",children:Object(F.jsxs)("div",{id:"advanced-options",className:"d-flex flex-direction-column",children:[Object(F.jsxs)("div",{className:"d-flex align-items-center justify-content-space-between m-bottom-10",style:{gap:"5px"},children:[Object(F.jsx)("p",{children:"Share"}),Object(F.jsxs)("label",{className:"toggle-switch",children:[Object(F.jsx)("input",{type:"checkbox",name:"allowShare",defaultChecked:!0}),Object(F.jsx)("span",{className:"slide"})]})]}),Object(F.jsxs)("div",{className:"d-flex align-items-center justify-content-space-between",style:{gap:"5px"},children:[Object(F.jsx)("p",{children:"Only friends"}),Object(F.jsxs)("label",{className:"toggle-switch",children:[Object(F.jsx)("input",{type:"checkbox",name:"allowFavs",defaultChecked:!1}),Object(F.jsx)("span",{className:"slide"})]})]})]})}),Object(F.jsx)("button",{disabled:t,children:"Post"})]}),Object(F.jsx)("div",{className:"d-flex flex-direction-column",children:Object(F.jsx)(i,{list:c,sort:{by:"createdAt",order:"DESC"}})})]})]})},oe={year:{unit:{single:"year",plural:"years"},seconds:31536e3},month:{unit:{single:"month",plural:"months"},seconds:2592e3},day:{unit:{single:"day",plural:"days"},seconds:86400},hour:{unit:{single:"hour",plural:"hours"},seconds:3600},minute:{unit:{single:"minute",plural:"minutes"},seconds:60},second:{unit:{single:"second",plural:"seconds"},seconds:1}},le=function(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(e)?new Date(e).getTime():e},de=function(e,t,n){return e.sort((function(e,a){return function(e,t,n){return"DESC"===n?le(e)<le(t)?1:le(e)>le(t)?-1:0:le(e)>le(t)?1:le(e)<le(t)?-1:0}(e[n],a[n],t)}))},ue=function(e){var t=Math.round(Date.now()/1e3)-Math.round(new Date(e).getTime()/1e3);if(t<=5)return"A few seconds ago.";for(var n in oe){var a=t/oe[n].seconds;if(a>=1){var s=Math.round(a);return"".concat(s," ").concat(s>1?oe[n].unit.plural:oe[n].unit.single," ago")}}},me=function(e){var t=e.list,n=void 0===t?[]:t,a=e.sort,s=void 0===a?{order:"ASC",by:""}:a,c=de(n,s.order,s.by);return Object(F.jsx)("div",{children:c.map((function(e){return setInterval((function(){document.getElementById("time-"+e._id).innerHTML=ue(e.createdAt)}),5e3),Object(F.jsxs)("div",{className:"d-flex flex-direction-column py-5",children:[Object(F.jsxs)("div",{className:"d-flex justify-content-space-between align-items-center",children:[Object(F.jsxs)("a",{href:"#".concat(e.user.username),className:"green-color m-bottom-7",children:["@",e.user.username]}),Object(F.jsx)("span",{id:"time-".concat(e._id),className:"date",children:ue(e.createdAt)})]}),Object(F.jsx)("p",{className:"m-bottom-7",children:e.text})]},e._id)}))})},je=n(58),be=n.n(je),he=function(e){Object(C.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={buttonDisabled:!0,activities:[]},e.onChangeInput=function(t){t.target.value.trim().length>0?e.setState(Object(b.a)(Object(b.a)({},e.state),{},{buttonDisabled:!1})):e.setState(Object(b.a)(Object(b.a)({},e.state),{},{buttonDisabled:!0}))},e.getActivities=function(){fetch("".concat(Y,"/activity/friend-activities/").concat(e.props.userData.user._id,"/").concat(e.props.userData.token)).then((function(e){return e.json()})).then((function(t){200===t.status&&e.setState(Object(b.a)(Object(b.a)({},e.state),{},{activities:t.activities}))}))},e.submit=function(t){t.preventDefault();var n=new FormData(t.target);n.append("user",e.props.userData.user._id),M(n).text.length&&fetch("".concat(Y,"/activity/").concat(e.props.userData.token),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(n){ee({text:n.message}),200===n.status&&(e.setState(Object(b.a)(Object(b.a)({},e.state),{},{buttonDisabled:!0})),t.target.reset())}))},e.slideToggle=function(e){var t=document.querySelector(e);if(t.classList.contains("active"))t.style.height="0px",t.addEventListener("transitionend",(function(){t.classList.remove("active")}),{once:!0});else{t.classList.add("active"),t.style.height="auto";var n="".concat(t.clientHeight,"px");t.style.height="0px",setTimeout((function(){t.style.height="".concat(n)}),0)}},e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=be()(Y,{transports:["websocket"]});t.emit("join-global-activities"),t.on("new-activity",(function(t){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{activities:[].concat(Object(ie.a)(e.state.activities),[t])}))})),this.getActivities()}},{key:"render",value:function(){return Object(F.jsx)(re,{buttonDisabled:this.state.buttonDisabled,onChangeInput:this.onChangeInput,submit:this.submit,slideToggle:this.slideToggle,list:this.state.activities,Activities:me})}}]),n}(a.Component),fe=Object(r.b)((function(e){return{userData:e.userData}}))(he),pe=function(e){var t=e.userData;return Object(F.jsx)("div",{className:"d-flex height-100vh",children:Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)(ce,{}),Object(F.jsx)("div",{className:"content",children:Object(F.jsx)("div",{className:"card-body",children:Object(F.jsxs)("h3",{children:["Hello, ",t.username,"."]})})}),Object(F.jsx)(fe,{})]})})},Oe=function(e){Object(C.a)(n,e);var t=Object(L.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"componentDidMount",value:function(){document.title="Home",this.props.updateCurrentData(this.props.userData.token)}},{key:"render",value:function(){return Object(F.jsx)(pe,{userData:this.props.userData.user})}}]),n}(a.Component),xe=Object(r.b)((function(e){return{userData:e.userData}}),{updateCurrentData:function(e){return function(t){t(R()),fetch("".concat(Y,"/user/get-data/").concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){200===e.status&&t(H(p,e.data))})).catch((function(e){return t(G(e))}))}}})(Oe),ve=function(e){Object(C.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).userData=e.props.userData,e}return Object(E.a)(n,[{key:"render",value:function(){return Object(F.jsx)(S.a,{children:Object(F.jsxs)(A.d,{children:[Object(F.jsx)(A.b,{path:"/login",exact:!0,children:null===this.userData.token?Object(F.jsx)(ne,{}):Object(F.jsx)(A.a,{to:"/home"})}),Object(F.jsx)(A.b,{path:"/register",exact:!0,children:null===this.userData.token?Object(F.jsx)(se,{}):Object(F.jsx)(A.a,{to:"/home"})}),Object(F.jsx)(A.b,{path:"/home",exact:!0,children:null===this.userData.token?Object(F.jsx)(A.a,{to:"/login"}):Object(F.jsx)(xe,{})}),Object(F.jsx)(A.b,{path:"/",children:null===this.userData.token?Object(F.jsx)(P,{}):Object(F.jsx)(A.a,{to:"/home"})})]})})}}]),n}(a.Component),ye=Object(r.b)((function(e){return{userData:e.userData}}))(ve),ge=function(){return Object(F.jsx)(r.a,{store:D,children:Object(F.jsx)(o.a,{loading:null,persistor:k,children:Object(F.jsx)(ye,{})})})};i.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(ge,{})}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.a8a2f535.chunk.js.map