(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[8],{445:function(e,t,n){},450:function(e,t,n){"use strict";var r=n(13),s=n(34),a=n(12),o=n(120),c=n(1),i=n(2),l=n.n(i),u=n(490),j=n(491),d=n(81),p=n(6),f=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],m=Object(c.forwardRef)((function(e,t){var n,i=e.label,m=e.hideIcon,h=e.showIcon,b=e.visible,g=e.className,x=e.htmlFor,O=e.placeholder,k=e.iconSize,v=e.inputClassName,y=e.invalid,w=Object(o.a)(e,f),N=Object(c.useState)(b),T=Object(a.a)(N,2),S=T[0],C=T[1];return Object(p.jsxs)(c.Fragment,{children:[i?Object(p.jsx)(d.s,{className:"form-label",for:x,children:i}):null,Object(p.jsxs)(d.q,{className:l()((n={},Object(s.a)(n,g,g),Object(s.a)(n,"is-invalid",y),n)),children:[Object(p.jsx)(d.p,Object(r.a)(Object(r.a)({ref:t,invalid:y,type:!1===S?"password":"text",placeholder:O||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(s.a)({},v,v))},i&&x?{id:x}:{}),w)),Object(p.jsx)(d.r,{className:"cursor-pointer",onClick:function(){return C(!S)},children:function(){var e=k||14;return!1===S?m||Object(p.jsx)(u.a,{size:e}):h||Object(p.jsx)(j.a,{size:e})}()})]})]})}));t.a=m,m.defaultProps={visible:!1}},451:function(e,t){e.exports={base_url:"https://api.pasporumkm.com/"}},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(82),s=n(442),a=n(441),o=n(45),c=n.n(o),i=n(451),l=n.n(i),u=Object(s.a)((function e(){Object(a.a)(this,e)}));u.set=function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){var s,a,o,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(r)),o={method:n,headers:{"Content-Type":"application/json",Authorization:a?"bearer ".concat(a):null,Accept:"application/json"},body:JSON.stringify(r)},e.next=5,fetch(l.a.base_url+t,o);case 5:if(!(i=e.sent).ok){e.next=8;break}return e.abrupt("return",i.json());case 8:return e.next=10,i.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(s=u.error_message)||void 0===s?void 0:s.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){var s,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=sessionStorage.token||localStorage.token,e.next=3,fetch(l.a.base_url+t,{method:n,headers:{Authorization:s?"bearer ".concat(s):null,"Access-Control-Allow-Origin":"*"},body:r});case 3:if(!(a=e.sent).ok){e.next=9;break}return console.log(a),e.abrupt("return",a.json());case 9:return e.next=11,a.json();case 11:throw o=e.sent,console.log(o),o;case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();var j=Object(s.a)((function e(){Object(a.a)(this,e),this.getAll=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/users","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteUser=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateUser=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"PUT",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"POST",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/register","POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));j.login=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/login","POST",{email:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},619:function(e,n,r){"use strict";r.r(n);var s=r(13),a=r(82),o=r(12),c=r(45),i=r.n(c),l=r(443),u=r(5),j=r(117),d=r(613),p=r(594),f=r(601),m=r(450),h=r(81),b=(r(445),r(118)),g=r(121),x=r(1),O=r(461),k=r(198),v=(r(444),r(441)),y=r(442),w=r(44),N=r.n(w),T={loginEndpoint:"/jwt/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/jwt/refresh-token",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken"},S=function(){function e(t){var n=this;Object(v.a)(this,e),this.jwtConfig=Object(s.a)({},T),this.isAlreadyFetchingAccessToken=!1,this.subscribers=[],this.jwtConfig=Object(s.a)(Object(s.a)({},this.jwtConfig),t),N.a.interceptors.request.use((function(e){var t=n.getToken();return t&&(e.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t)),e}),(function(e){return Promise.reject(e)})),N.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,r=e.response,s=t;return r&&401===r.status?(n.isAlreadyFetchingAccessToken||(n.isAlreadyFetchingAccessToken=!0,n.refreshToken().then((function(e){n.isAlreadyFetchingAccessToken=!1,n.setToken(e.data.accessToken),n.setRefreshToken(e.data.refreshToken),n.onAccessTokenFetched(e.data.accessToken)}))),new Promise((function(e){n.addSubscriber((function(t){s.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t),e(n.axios(s))}))}))):Promise.reject(e)}))}return Object(y.a)(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return N.a.post.apply(N.a,[this.jwtConfig.loginEndpoint].concat(t))}},{key:"register",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return N.a.post.apply(N.a,[this.jwtConfig.registerEndpoint].concat(t))}},{key:"refreshToken",value:function(){return N.a.post(this.jwtConfig.refreshEndpoint,{refreshToken:this.getRefreshToken()})}}]),e}();var C={jwt:new S({})}.jwt,E=r(492),A=r(29),F=C.jwtConfig,P=Object(A.c)({name:"authentication",initialState:{userData:function(){var e=window.localStorage.getItem("userData");return e?JSON.parse(e):{}}()},reducers:{handleLogin:function(e,t){e.userData=t.payload,e[F.storageTokenKeyName]=t.payload[F.storageTokenKeyName],e[F.storageRefreshTokenKeyName]=t.payload[F.storageRefreshTokenKeyName],localStorage.setItem("userData",JSON.stringify(t.payload)),localStorage.setItem(F.storageTokenKeyName,JSON.stringify(t.payload.accessToken)),localStorage.setItem(F.storageRefreshTokenKeyName,JSON.stringify(t.payload.refreshToken))},handleLogout:function(e){e.userData={},e[F.storageTokenKeyName]=null,e[F.storageRefreshTokenKeyName]=null,localStorage.removeItem("userData"),localStorage.removeItem(F.storageTokenKeyName),localStorage.removeItem(F.storageRefreshTokenKeyName)}}}),I=P.actions,R=(I.handleLogin,I.handleLogout,P.reducer,r(455)),L=r(592),K=r(6),D={password:"admin",loginEmail:"admin@demo.com"},_=function(e){var t=e.t,n=e.name,r=e.role;return Object(K.jsxs)("div",{className:"d-flex",children:[Object(K.jsx)("div",{className:"me-1",children:Object(K.jsx)(O.a,{size:"sm",color:"success",icon:Object(K.jsx)(d.a,{size:12})})}),Object(K.jsxs)("div",{className:"d-flex flex-column",children:[Object(K.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(K.jsx)("h6",{children:n}),Object(K.jsx)(p.a,{size:12,className:"cursor-pointer",onClick:function(){return k.b.dismiss(t.id)}})]}),Object(K.jsxs)("span",{children:["You have successfully logged in as an ",r," user to PasporUMKM. Now you can start to explore. Enjoy!"]})]})]})},z=function(){return Object(K.jsxs)("div",{className:"d-flex",children:[Object(K.jsx)("div",{className:"me-1",children:Object(K.jsx)(O.a,{size:"sm",color:"danger",icon:Object(K.jsx)(L.a,{size:12})})}),Object(K.jsxs)("div",{className:"d-flex flex-column",children:[Object(K.jsx)("div",{className:"d-flex justify-content-between",children:Object(K.jsx)(p.a,{size:12,className:"cursor-pointer",onClick:function(){return k.b.dismiss(t.id)}})}),Object(K.jsx)("span",{children:"Your email or password is incorrect. Please try again."})]})]})};n.default=function(){var e=Object(l.a)().skin,t=(Object(b.b)(),Object(u.f)()),n=(Object(x.useContext)(g.a),Object(E.a)({defaultValues:D})),s=(n.control,n.setError,n.handleSubmit,n.formState.errors),c="dark"===e?"login-v2-dark.svg":"login-v2.svg",d=r(452)("./".concat(c)).default,p=Object(x.useState)(""),O=Object(o.a)(p,2),v=O[0],y=O[1],w=Object(x.useState)(""),N=Object(o.a)(w,2),T=N[0],S=N[1],C=function(){var e=Object(a.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.login(v,T);case 3:if(n=e.sent,console.log("TES RES",n),!n.token){e.next=16;break}return localStorage.token=n.token,localStorage.email=n.email,sessionStorage.token=n.token,sessionStorage.username=n.username,sessionStorage.id=n.id,Object(k.b)((function(e){return Object(K.jsx)(_,{t:e,role:"user",name:n.email||"Unknown"})})),e.next=14,t("/home");case 14:e.next=17;break;case 16:Object(k.b)((function(e){return Object(K.jsx)(z,{t:e})}));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return Object(K.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(K.jsxs)(h.w,{className:"auth-inner m-0",children:[Object(K.jsxs)(j.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(K.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(K.jsxs)("defs",{children:[Object(K.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(K.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(K.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(K.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(K.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(K.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(K.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(K.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(K.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(K.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(K.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(K.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(K.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(K.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(K.jsx)("h2",{className:"brand-text text-primary ms-1",children:"PasporUMKM"})]}),Object(K.jsx)(h.j,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(K.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(K.jsx)("img",{className:"img-fluid",src:d,alt:"Login Cover"})})}),Object(K.jsx)(h.j,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(K.jsxs)(h.j,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(K.jsx)(h.i,{tag:"h2",className:"fw-bold mb-1",children:"Welcome to PasporUMKM! \ud83d\udc4b"}),Object(K.jsx)(h.h,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(K.jsxs)(h.a,{color:"primary",children:[Object(K.jsxs)("div",{className:"alert-body font-small-2",children:[Object(K.jsx)("p",{children:Object(K.jsxs)("small",{className:"me-50",children:[Object(K.jsx)("span",{className:"fw-bold",children:"Admin:"})," admin@demo.com | admin"]})}),Object(K.jsx)("p",{children:Object(K.jsxs)("small",{className:"me-50",children:[Object(K.jsx)("span",{className:"fw-bold",children:"Client:"})," client@demo.com | client"]})})]}),Object(K.jsx)(f.a,{id:"login-tip",className:"position-absolute",size:18,style:{top:"10px",right:"10px"}}),Object(K.jsx)(h.y,{target:"login-tip",placement:"left",children:"This is just for ACL demo purpose."})]}),Object(K.jsxs)(h.o,{className:"auth-login-form mt-2",children:[Object(K.jsxs)("div",{className:"mb-1",children:[Object(K.jsx)(h.s,{className:"form-label",for:"login-email",children:"Email"}),Object(K.jsx)(h.p,{type:"email",placeholder:"john@example.com",onChange:function(e){y(e.target.value)},invalid:s.email&&!0,autoFocus:!0})]}),Object(K.jsxs)("div",{className:"mb-1",children:[Object(K.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(K.jsx)(h.s,{className:"form-label",for:"login-password",children:"Password"}),Object(K.jsx)(j.b,{to:"/forgot-password",children:Object(K.jsx)("small",{children:"Forgot Password?"})})]}),Object(K.jsx)(m.a,{className:"input-group-merge",onChange:function(e){S(e.target.value)},invalid:s.password&&!0})]}),Object(K.jsxs)("div",{className:"form-check mb-1",children:[Object(K.jsx)(h.p,{type:"checkbox",id:"remember-me"}),Object(K.jsx)(h.s,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),Object(K.jsx)(h.c,{color:"primary",onClick:C,block:!0,children:"Sign in"})]}),Object(K.jsxs)("p",{className:"text-center mt-2",children:[Object(K.jsx)("span",{className:"me-25",children:"New on our platform?"}),Object(K.jsx)(j.b,{to:"/register",children:Object(K.jsx)("span",{children:"Create an account"})})]})]})})]})})}}}]);
//# sourceMappingURL=8.5355d6c6.chunk.js.map