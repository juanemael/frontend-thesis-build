(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[8],{450:function(e,t,r){},466:function(e,t,r){"use strict";var s=r(13),n=r(34),a=r(12),c=r(120),i=r(1),o=r(2),l=r.n(o),u=r(761),j=r(762),d=r(81),b=r(6),p=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],x=Object(i.forwardRef)((function(e,t){var r,o=e.label,x=e.hideIcon,f=e.showIcon,m=e.visible,O=e.className,h=e.htmlFor,g=e.placeholder,v=e.iconSize,k=e.inputClassName,N=e.invalid,w=Object(c.a)(e,p),y=Object(i.useState)(m),E=Object(a.a)(y,2),C=E[0],S=E[1];return Object(b.jsxs)(i.Fragment,{children:[o?Object(b.jsx)(d.s,{className:"form-label",for:h,children:o}):null,Object(b.jsxs)(d.q,{className:l()((r={},Object(n.a)(r,O,O),Object(n.a)(r,"is-invalid",N),r)),children:[Object(b.jsx)(d.p,Object(s.a)(Object(s.a)({ref:t,invalid:N,type:!1===C?"password":"text",placeholder:g||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(n.a)({},k,k))},o&&h?{id:h}:{}),w)),Object(b.jsx)(d.r,{className:"cursor-pointer",onClick:function(){return S(!C)},children:function(){var e=v||14;return!1===C?x||Object(b.jsx)(u.a,{size:e}):f||Object(b.jsx)(j.a,{size:e})}()})]})]})}));t.a=x,x.defaultProps={visible:!1}},467:function(e,t){e.exports={base_url:"https://api.pasporumkm.com"}},469:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/register-v2.24c0a62e.svg"},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var s=r(82),n=r(441),a=r(440),c=r(45),i=r.n(c),o=r(467),l=r.n(o),u=Object(n.a)((function e(){Object(a.a)(this,e)}));u.set=function(){var e=Object(s.a)(i.a.mark((function e(t,r,s){var n,a,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(s)),c={method:r,headers:{"Content-Type":"application/json",Authorization:a?"bearer ".concat(a):null,Accept:"application/json"},body:JSON.stringify(s)},e.next=5,fetch(l.a.base_url+t,c);case 5:if(!(o=e.sent).ok){e.next=8;break}return e.abrupt("return",o.json());case 8:return e.next=10,o.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(n=u.error_message)||void 0===n?void 0:n.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(t,r,s){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(s.a)(i.a.mark((function e(t,r,s){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.token||localStorage.token,e.next=3,fetch(l.a.base_url+t,{method:r,headers:{Authorization:n?"bearer ".concat(n):null,"Access-Control-Allow-Origin":"*"},body:s});case 3:if(!(a=e.sent).ok){e.next=9;break}return console.log(a),e.abrupt("return",a.json());case 9:return e.next=11,a.json();case 11:throw c=e.sent,console.log(c),c;case 14:case"end":return e.stop()}}),e)})));return function(t,r,s){return e.apply(this,arguments)}}();var j=Object(n.a)((function e(){Object(a.a)(this,e),this.getAll=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/users","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteUser=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateUser=function(){var e=Object(s.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"PUT",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(s.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"POST",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/register","POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));j.login=function(){var e=Object(s.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/login","POST",{email:t,password:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},763:function(e,r,s){"use strict";s.r(r);var n=s(82),a=s(12),c=s(45),i=s.n(c),o=s(5),l=s(117),u=s(742),j=s(764),d=s(765),b=s(745),p=s(766),x=s(466),f=s(626),m=s.n(f),O=(s(737),s(81)),h=(s(450),s(1)),g=s(479),v=(s(454),s(740),s(464)),k=s(513),N=s(124),w=s(739),y=s(6);r.default=function(){var e=Object(h.useState)([]),r=Object(a.a)(e,2),c=(r[0],r[1],Object(h.useState)("")),f=Object(a.a)(c,2),E=f[0],C=f[1],S=Object(h.useState)(""),P=Object(a.a)(S,2),T=P[0],F=P[1],_=Object(h.useState)(""),z=Object(a.a)(_,2),D=z[0],L=z[1],I=Object(h.useState)(""),A=Object(a.a)(I,2),M=A[0],R=A[1],G=new g.a,J=Object(o.f)(),U=function(){return Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"me-1",children:Object(y.jsx)(v.a,{size:"sm",color:"danger",icon:Object(y.jsx)(k.a,{size:12})})}),Object(y.jsxs)("div",{className:"d-flex flex-column",children:[Object(y.jsx)("div",{className:"d-flex justify-content-between",children:Object(y.jsx)(u.a,{size:12,className:"cursor-pointer",onClick:function(){return N.b.dismiss(t.id)}})}),Object(y.jsx)("span",{children:"Password tidak sama dengan konfirmasi password. Tolong coba lagi."})]})]})},B=function(){return Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"me-1",children:Object(y.jsx)(v.a,{size:"sm",color:"danger",icon:Object(y.jsx)(k.a,{size:12})})}),Object(y.jsxs)("div",{className:"d-flex flex-column",children:[Object(y.jsx)("div",{className:"d-flex justify-content-between",children:Object(y.jsx)(u.a,{size:12,className:"cursor-pointer",onClick:function(){return N.b.dismiss(t.id)}})}),Object(y.jsx)("span",{children:"Tolong isi kolom yang kosong."})]})]})},W=function(){return Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"me-1",children:Object(y.jsx)(v.a,{size:"sm",color:"danger",icon:Object(y.jsx)(k.a,{size:12})})}),Object(y.jsxs)("div",{className:"d-flex flex-column",children:[Object(y.jsx)("div",{className:"d-flex justify-content-between",children:Object(y.jsx)(u.a,{size:12,className:"cursor-pointer",onClick:function(){return N.b.dismiss(t.id)}})}),Object(y.jsx)("span",{children:"Tolong isi kolom email dengan benar."})]})]})},K=s(469).default,q=function(){var e=Object(n.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=4;break}Object(N.b)((function(e){return Object(y.jsx)(B,{t:e})})),e.next=39;break;case 4:if(T){e.next=8;break}Object(N.b)((function(e){return Object(y.jsx)(B,{t:e})})),e.next=39;break;case 8:if(D){e.next=12;break}Object(N.b)((function(e){return Object(y.jsx)(B,{t:e})})),e.next=39;break;case 12:if(Object(w.a)(T)){e.next=16;break}Object(N.b)((function(e){return Object(y.jsx)(W,{t:e})})),e.next=39;break;case 16:if(D===M){e.next=20;break}Object(N.b)((function(e){return Object(y.jsx)(U,{t:e})})),e.next=39;break;case 20:return t={username:E,email:T,password:D},e.prev=21,e.next=24,G.register(t);case 24:if(!(r=e.sent).id&&!r.success){e.next=30;break}return e.next=28,m.a.fire("","Data berhasil di simpan","success").then((function(){J("/login")}));case 28:e.next=32;break;case 30:return e.next=32,m.a.fire("","Data gagal disimpan","error");case 32:e.next=39;break;case 34:return e.prev=34,e.t0=e.catch(21),console.error(e.t0),e.next=39,m.a.fire("Error",e.t0.error_message?e.t0.error_message:"Error Occured. ","error");case 39:case"end":return e.stop()}}),e,null,[[21,34]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(y.jsxs)(O.w,{className:"auth-inner m-0",children:[Object(y.jsxs)(l.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(y.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(y.jsxs)("defs",{children:[Object(y.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(y.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(y.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(y.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(y.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(y.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(y.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(y.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(y.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(y.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(y.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(y.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(y.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(y.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(y.jsx)("h2",{className:"brand-text text-primary ms-1",children:"PasporUMKM"})]}),Object(y.jsx)(O.j,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(y.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(y.jsx)("img",{className:"img-fluid",src:K,alt:"Login Cover"})})}),Object(y.jsx)(O.j,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(y.jsxs)(O.j,{className:"px-xl-2 mx-auto",xs:"12",sm:"8",md:"6",lg:"12",children:[Object(y.jsx)(O.i,{tag:"h2",className:"fw-bold mb-1",children:"Adventure starts here \ud83d\ude80"}),Object(y.jsx)(O.h,{className:"mb-2",children:"Make your app management easy and fun!"}),Object(y.jsxs)(O.o,{className:"auth-register-form mt-2",onSubmit:function(e){return e.preventDefault()},children:[Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(O.s,{className:"form-label",for:"register-username",children:"Username"}),Object(y.jsx)(O.p,{type:"text",id:"register-username",placeholder:"johndoe",onChange:function(e){C(e.target.value)},autoFocus:!0,required:!0})]}),Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(O.s,{className:"form-label",for:"register-email",children:"Email"}),Object(y.jsx)(O.p,{type:"email",id:"register-email",onChange:function(e){F(e.target.value)},placeholder:"john@example.com",required:!0})]}),Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(O.s,{className:"form-label",for:"register-password",children:"Password"}),Object(y.jsx)(x.a,{className:"input-group-merge",id:"register-password",onChange:function(e){L(e.target.value)}})]}),Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(O.s,{className:"form-label",for:"register-password",children:"Password"}),Object(y.jsx)(x.a,{className:"input-group-merge",id:"confirm-password",onChange:function(e){R(e.target.value)}})]}),Object(y.jsxs)("div",{className:"form-check mb-1",children:[Object(y.jsx)(O.p,{type:"checkbox",id:"terms"}),Object(y.jsxs)(O.s,{className:"form-check-label",for:"terms",children:["I agree to",Object(y.jsx)("a",{className:"ms-25",href:"/",onClick:function(e){return e.preventDefault()},children:"privacy policy & terms"})]})]}),Object(y.jsx)(O.c,{onClick:function(){q()},color:"primary",block:!0,children:"Sign up"})]}),Object(y.jsxs)("p",{className:"text-center mt-2",children:[Object(y.jsx)("span",{className:"me-25",children:"Already have an account?"}),Object(y.jsx)(l.b,{to:"/login",children:Object(y.jsx)("span",{children:"Sign in instead"})})]}),Object(y.jsx)("div",{className:"divider my-2",children:Object(y.jsx)("div",{className:"divider-text",children:"or"})}),Object(y.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(y.jsx)(O.c,{color:"facebook",children:Object(y.jsx)(j.a,{size:14})}),Object(y.jsx)(O.c,{color:"twitter",children:Object(y.jsx)(d.a,{size:14})}),Object(y.jsx)(O.c,{color:"google",children:Object(y.jsx)(b.a,{size:14})}),Object(y.jsx)(O.c,{className:"me-0",color:"github",children:Object(y.jsx)(p.a,{size:14})})]})]})})]})})}}}]);
//# sourceMappingURL=8.81142f82.chunk.js.map