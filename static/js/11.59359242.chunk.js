(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[11],{469:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(82),a=n(444),s=n(443),o=n(45),c=n.n(o),i=n(470),l=n.n(i),u=Object(a.a)((function e(){Object(s.a)(this,e)}));u.set=function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){var a,s,o,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(r)),o={method:n,headers:{"Content-Type":"application/json",Authorization:s?"bearer ".concat(s):null,Accept:"application/json"},body:JSON.stringify(r)},e.next=5,fetch(l.a.base_url+t,o);case 5:if(!(i=e.sent).ok){e.next=8;break}return e.abrupt("return",i.json());case 8:return e.next=10,i.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(a=u.error_message)||void 0===a?void 0:a.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){var a,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.token||localStorage.token,e.next=3,fetch(l.a.base_url+t,{method:n,headers:{Authorization:a?"bearer ".concat(a):null,"Access-Control-Allow-Origin":"*"},body:r});case 3:if(!(s=e.sent).ok){e.next=9;break}return console.log(s),e.abrupt("return",s.json());case 9:return e.next=11,s.json();case 11:throw o=e.sent,console.log(o),o;case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},470:function(e,t){e.exports={base_url:"https://api.pasporumkm.com"}},471:function(e,t,n){},508:function(e,t,n){"use strict";var r=n(13),a=n(34),s=n(12),o=n(120),c=n(1),i=n(2),l=n.n(i),u=n(935),d=n(936),j=n(81),f=n(6),p=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],b=Object(c.forwardRef)((function(e,t){var n,i=e.label,b=e.hideIcon,m=e.showIcon,h=e.visible,g=e.className,O=e.htmlFor,x=e.placeholder,k=e.iconSize,v=e.inputClassName,y=e.invalid,w=Object(o.a)(e,p),N=Object(c.useState)(h),T=Object(s.a)(N,2),S=T[0],E=T[1];return Object(f.jsxs)(c.Fragment,{children:[i?Object(f.jsx)(j.r,{className:"form-label",for:O,children:i}):null,Object(f.jsxs)(j.p,{className:l()((n={},Object(a.a)(n,g,g),Object(a.a)(n,"is-invalid",y),n)),children:[Object(f.jsx)(j.o,Object(r.a)(Object(r.a)({ref:t,invalid:y,type:!1===S?"password":"text",placeholder:x||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(a.a)({},v,v))},i&&O?{id:O}:{}),w)),Object(f.jsx)(j.q,{className:"cursor-pointer",onClick:function(){return E(!S)},children:function(){var e=k||14;return!1===S?b||Object(f.jsx)(u.a,{size:e}):m||Object(f.jsx)(d.a,{size:e})}()})]})]})}));t.a=b,b.defaultProps={visible:!1}},509:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(82),a=n(444),s=n(443),o=n(45),c=n.n(o),i=n(469),l=Object(a.a)((function e(){Object(s.a)(this,e),this.getAll=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/ppkm/users","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/ppkm/user/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteUser=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/ppkm/user/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateUser=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/ppkm/user/".concat(t),"PUT",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/ppkm/user/".concat(t),"POST",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/ppkm/user/register","POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));l.login=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/ppkm/user/login","POST",{email:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},940:function(e,n,r){"use strict";r.r(n);var a=r(13),s=r(82),o=r(12),c=r(45),i=r.n(c),l=r(458),u=r(5),d=r(117),j=r(1),f=r.n(j),p=r(442),b=r.n(p);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=Object(j.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,s=void 0===a?24:a,o=h(e,["color","size"]);return f.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),f.a.createElement("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),f.a.createElement("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),f.a.createElement("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),f.a.createElement("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),f.a.createElement("line",{x1:"14",y1:"1",x2:"14",y2:"4"}))}));g.propTypes={color:b.a.string,size:b.a.oneOfType([b.a.string,b.a.number])},g.displayName="Coffee";var O=g,x=r(918),k=r(508),v=r(81),y=(r(471),r(118)),w=r(123),N=r(475),T=r(124),S=(r(459),r(443)),E=r(444),C=r(44),I=r.n(C),P={loginEndpoint:"/jwt/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/jwt/refresh-token",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken"},A=function(){function e(t){var n=this;Object(S.a)(this,e),this.jwtConfig=Object(a.a)({},P),this.isAlreadyFetchingAccessToken=!1,this.subscribers=[],this.jwtConfig=Object(a.a)(Object(a.a)({},this.jwtConfig),t),I.a.interceptors.request.use((function(e){var t=n.getToken();return t&&(e.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t)),e}),(function(e){return Promise.reject(e)})),I.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,r=e.response,a=t;return r&&401===r.status?(n.isAlreadyFetchingAccessToken||(n.isAlreadyFetchingAccessToken=!0,n.refreshToken().then((function(e){n.isAlreadyFetchingAccessToken=!1,n.setToken(e.data.accessToken),n.setRefreshToken(e.data.refreshToken),n.onAccessTokenFetched(e.data.accessToken)}))),new Promise((function(e){n.addSubscriber((function(t){a.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t),e(n.axios(a))}))}))):Promise.reject(e)}))}return Object(E.a)(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return I.a.post.apply(I.a,[this.jwtConfig.loginEndpoint].concat(t))}},{key:"register",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return I.a.post.apply(I.a,[this.jwtConfig.registerEndpoint].concat(t))}},{key:"refreshToken",value:function(){return I.a.post(this.jwtConfig.refreshEndpoint,{refreshToken:this.getRefreshToken()})}}]),e}();var F={jwt:new A({})}.jwt,L=r(486),K=r(29),R=F.jwtConfig,D=Object(K.c)({name:"authentication",initialState:{userData:function(){var e=window.localStorage.getItem("userData");return e?JSON.parse(e):{}}()},reducers:{handleLogin:function(e,t){e.userData=t.payload,e[R.storageTokenKeyName]=t.payload[R.storageTokenKeyName],e[R.storageRefreshTokenKeyName]=t.payload[R.storageRefreshTokenKeyName],localStorage.setItem("userData",JSON.stringify(t.payload)),localStorage.setItem(R.storageTokenKeyName,JSON.stringify(t.payload.accessToken)),localStorage.setItem(R.storageRefreshTokenKeyName,JSON.stringify(t.payload.refreshToken))},handleLogout:function(e){e.userData={},e[R.storageTokenKeyName]=null,e[R.storageRefreshTokenKeyName]=null,localStorage.removeItem("userData"),localStorage.removeItem(R.storageTokenKeyName),localStorage.removeItem(R.storageRefreshTokenKeyName),sessionStorage.removeItem("id"),sessionStorage.removeItem("username"),sessionStorage.removeItem("token")}}}),M=D.actions,z=(M.handleLogin,M.handleLogout,D.reducer,r(509)),_=r(593),J=r(6),B={password:"admin",loginEmail:"admin@demo.com"},G=function(e){var t=e.t,n=e.name,r=e.role;return Object(J.jsxs)("div",{className:"d-flex",children:[Object(J.jsx)("div",{className:"me-1",children:Object(J.jsx)(N.a,{size:"sm",color:"success",icon:Object(J.jsx)(O,{size:12})})}),Object(J.jsxs)("div",{className:"d-flex flex-column",children:[Object(J.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(J.jsx)("h6",{children:n}),Object(J.jsx)(x.a,{size:12,className:"cursor-pointer",onClick:function(){return T.b.dismiss(t.id)}})]}),Object(J.jsxs)("span",{children:["Kamu telah berhasi login sebagai ",r," user di PasporUMKM. Sekarang kamu bisa mulai eksplorasimu."]})]})]})},U=function(){return Object(J.jsxs)("div",{className:"d-flex",children:[Object(J.jsx)("div",{className:"me-1",children:Object(J.jsx)(N.a,{size:"sm",color:"danger",icon:Object(J.jsx)(_.b,{size:12})})}),Object(J.jsxs)("div",{className:"d-flex flex-column",children:[Object(J.jsx)("div",{className:"d-flex justify-content-between",children:Object(J.jsx)(x.a,{size:12,className:"cursor-pointer",onClick:function(){return T.b.dismiss(t.id)}})}),Object(J.jsx)("span",{children:"Email atau passwordmu salah. Tolong coba lagi."})]})]})};n.default=function(){var e=Object(l.a)().skin,t=(Object(y.b)(),Object(u.f)()),n=(Object(j.useContext)(w.a),Object(L.d)({defaultValues:B})),a=(n.control,n.setError,n.handleSubmit,n.formState.errors),c="dark"===e?"login-v2-dark.svg":"login-v2.svg",f=r(487)("./".concat(c)).default,p=Object(j.useState)(""),b=Object(o.a)(p,2),m=b[0],h=b[1],g=Object(j.useState)(""),O=Object(o.a)(g,2),x=O[0],N=O[1],S=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.login(m,x);case 3:if(n=e.sent,m&&x){e.next=8;break}Object(T.b)((function(e){return Object(J.jsx)(U,{t:e})})),e.next=24;break;case 8:if(n){e.next=12;break}console.log("error"),e.next=24;break;case 12:if(!n.token){e.next=23;break}return localStorage.token=n.token,localStorage.email=n.email,sessionStorage.token=n.token,sessionStorage.username=n.username,sessionStorage.id=n.id,Object(T.b)((function(e){return Object(J.jsx)(G,{t:e,role:"user",name:n.email||"Unknown"})})),e.next=21,t("/home");case 21:e.next=24;break;case 23:Object(T.b)((function(e){return Object(J.jsx)(U,{t:e})}));case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(0),Object(T.b)((function(e){return Object(J.jsx)(U,{t:e})})),console.error(e.t0);case 30:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(){return e.apply(this,arguments)}}();return Object(J.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(J.jsxs)(v.v,{className:"auth-inner m-0",children:[Object(J.jsxs)(d.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(J.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(J.jsxs)("defs",{children:[Object(J.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(J.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(J.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(J.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(J.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(J.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),"k",Object(J.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(J.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(J.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(J.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(J.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(J.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(J.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(J.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(J.jsx)("h2",{className:"brand-text text-primary ms-1",children:"PasporUMKM"})]}),Object(J.jsx)(v.i,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(J.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(J.jsx)("img",{className:"img-fluid",src:f,alt:"Login Cover"})})}),Object(J.jsx)(v.i,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(J.jsxs)(v.i,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(J.jsx)(v.h,{tag:"h2",className:"fw-bold mb-1",children:"Selamat datang di PasporUMKM! \ud83d\udc4b"}),Object(J.jsx)(v.g,{className:"mb-2",children:"Mohon untuk sign-in menggunakan akun anda untuk melanjutkan perjalanan anda. "}),Object(J.jsxs)(v.n,{className:"auth-login-form mt-2",children:[Object(J.jsxs)("div",{className:"mb-1",children:[Object(J.jsx)(v.r,{className:"form-label",for:"login-email",children:"Email"}),Object(J.jsx)(v.o,{type:"email",placeholder:"john@example.com",onChange:function(e){h(e.target.value)},invalid:a.email&&!0,autoFocus:!0,required:!0})]}),Object(J.jsxs)("div",{className:"mb-1",children:[Object(J.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(J.jsx)(v.r,{className:"form-label",for:"login-password",children:"Password"}),Object(J.jsx)(d.b,{to:"/forgot-password",children:Object(J.jsx)("small",{children:"Lupa Password?"})})]}),Object(J.jsx)(k.a,{className:"input-group-merge",onChange:function(e){N(e.target.value)},invalid:a.password&&!0,required:!0})]}),Object(J.jsxs)("div",{className:"form-check mb-1",children:[Object(J.jsx)(v.o,{type:"checkbox",id:"remember-me"}),Object(J.jsx)(v.r,{className:"form-check-label",for:"remember-me",children:"Ingat Saya"})]}),Object(J.jsx)(v.b,{color:"primary",onClick:S,block:!0,children:"Sign in"})]}),Object(J.jsxs)("p",{className:"text-center mt-2",children:[Object(J.jsx)("span",{className:"me-25",children:"Baru di PasporUMKM?"}),Object(J.jsx)(d.b,{to:"/register",children:Object(J.jsx)("span",{children:"Buatlah akunmu"})})]})]})})]})})}}}]);
//# sourceMappingURL=11.59359242.chunk.js.map