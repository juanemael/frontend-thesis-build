(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[8],{445:function(e,t,r){},450:function(e,t,r){"use strict";var n=r(13),s=r(34),a=r(12),c=r(120),o=r(1),i=r(2),l=r.n(i),u=r(488),j=r(489),p=r(81),d=r(6),b=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],f=Object(o.forwardRef)((function(e,t){var r,i=e.label,f=e.hideIcon,h=e.showIcon,m=e.visible,x=e.className,O=e.htmlFor,g=e.placeholder,v=e.iconSize,k=e.inputClassName,N=e.invalid,w=Object(c.a)(e,b),y=Object(o.useState)(m),E=Object(a.a)(y,2),S=E[0],C=E[1];return Object(d.jsxs)(o.Fragment,{children:[i?Object(d.jsx)(p.s,{className:"form-label",for:O,children:i}):null,Object(d.jsxs)(p.q,{className:l()((r={},Object(s.a)(r,x,x),Object(s.a)(r,"is-invalid",N),r)),children:[Object(d.jsx)(p.p,Object(n.a)(Object(n.a)({ref:t,invalid:N,type:!1===S?"password":"text",placeholder:g||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(s.a)({},k,k))},i&&O?{id:O}:{}),w)),Object(d.jsx)(p.r,{className:"cursor-pointer",onClick:function(){return C(!S)},children:function(){var e=v||14;return!1===S?f||Object(d.jsx)(u.a,{size:e}):h||Object(d.jsx)(j.a,{size:e})}()})]})]})}));t.a=f,f.defaultProps={visible:!1}},452:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/register-v2.24c0a62e.svg"},591:function(e,t){e.exports={base_url:"https://api.pasporumkm.com/"}},617:function(e,t,r){"use strict";r.r(t);var n=r(82),s=r(12),a=r(45),c=r.n(a),o=r(5),i=r(117),l=r(580),u=r(581),j=r(598),p=r(582),d=r(450),b=r(583),f=r.n(b),h=r(81),m=(r(445),r(1)),x=r(443),O=r(442),g=r(591),v=r.n(g),k=Object(x.a)((function e(){Object(O.a)(this,e)}));k.set=function(){var e=Object(n.a)(c.a.mark((function e(t,r,n){var s,a,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(n)),o={method:r,headers:{"Content-Type":"application/json",Authorization:a?"bearer ".concat(a):null,Accept:"application/json"},body:JSON.stringify(n)},e.next=5,fetch(v.a.base_url+t,o);case 5:if(!(i=e.sent).ok){e.next=8;break}return e.abrupt("return",i.json());case 8:return e.next=10,i.json();case 10:if(l=e.sent,console.log(l),console.log(l.msg),"JWT_EXPIRED"!==l.code&&"NO_TOKEN_PROVIDED"!==l.code&&"INVALID_TOKEN"!==l.code&&"BAD_TOKEN_FORMAT"!==l.code&&"NO_SECRET_DEFINED"!==l.code&&"JWT_MALFORMED"!==l.error_message&&"JWT_MALFORMED"!==(null===(s=l.error_message)||void 0===s?void 0:s.msg)&&"JWT_EXPIRED"!==l.error_message&&"SUBSCRIPTION_EXPIRED"!==l.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),l;case 18:throw l;case 19:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),k.setMultipart=function(){var e=Object(n.a)(c.a.mark((function e(t,r,n){var s,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=sessionStorage.token||localStorage.token,e.next=3,fetch(v.a.base_url+t,{method:r,headers:{Authorization:s?"bearer ".concat(s):null,"Access-Control-Allow-Origin":"*"},body:n});case 3:if(!(a=e.sent).ok){e.next=9;break}return console.log(a),e.abrupt("return",a.json());case 9:return e.next=11,a.json();case 11:throw o=e.sent,console.log(o),o;case 14:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();var N=Object(x.a)((function e(){Object(O.a)(this,e),this.getAll=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.set("/ppkm/users","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.set("/ppkm/user/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteUser=function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.set("/ppkm/user/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateUser=function(){var e=Object(n.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.set("/ppkm/user/".concat(t),"PUT",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(n.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.set("/ppkm/user/".concat(t),"POST",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.set("/ppkm/user/register","POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));N.login=function(){var e=Object(n.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.set("ppkm/user/login","POST",{username:t,password:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();var w=r(6);t.default=function(){var e=Object(m.useState)([]),t=Object(s.a)(e,2),a=(t[0],t[1],Object(m.useState)([])),b=Object(s.a)(a,2),x=b[0],O=b[1],g=Object(m.useState)([]),v=Object(s.a)(g,2),k=v[0],y=v[1],E=Object(m.useState)([]),S=Object(s.a)(E,2),C=S[0],F=S[1],T=new N,_=Object(o.f)(),P=r(452).default,D=function(){var e=Object(n.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:x,email:k,password:C},console.log(t),e.prev=2,console.log("TEST USERNAME : ",x),e.next=6,T.register(t);case 6:if(!(r=e.sent).id&&!r.success){e.next=11;break}f.a.fire("","Data berhasil di simpan","success").then((function(){_("/login")})),e.next=13;break;case 11:return e.next=13,f.a.fire("","Data gagal disimpan","error");case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(2),console.error(e.t0),e.next=20,f.a.fire("Error",e.t0.error_message?e.t0.error_message:"Error Occured. ","error");case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(w.jsxs)(h.w,{className:"auth-inner m-0",children:[Object(w.jsxs)(i.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(w.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(w.jsxs)("defs",{children:[Object(w.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(w.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(w.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(w.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(w.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(w.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(w.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(w.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(w.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(w.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(w.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(w.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(w.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(w.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(w.jsx)("h2",{className:"brand-text text-primary ms-1",children:"PasporUMKM"})]}),Object(w.jsx)(h.j,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(w.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(w.jsx)("img",{className:"img-fluid",src:P,alt:"Login Cover"})})}),Object(w.jsx)(h.j,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(w.jsxs)(h.j,{className:"px-xl-2 mx-auto",xs:"12",sm:"8",md:"6",lg:"12",children:[Object(w.jsx)(h.i,{tag:"h2",className:"fw-bold mb-1",children:"Adventure starts here \ud83d\ude80"}),Object(w.jsx)(h.h,{className:"mb-2",children:"Make your app management easy and fun!"}),Object(w.jsxs)(h.o,{className:"auth-register-form mt-2",onSubmit:function(e){return e.preventDefault()},children:[Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)(h.s,{className:"form-label",for:"register-username",children:"Username"}),Object(w.jsx)(h.p,{type:"text",id:"register-username",placeholder:"johndoe",onChange:function(e){O(e.target.value)},autoFocus:!0})]}),Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)(h.s,{className:"form-label",for:"register-email",children:"Email"}),Object(w.jsx)(h.p,{type:"email",id:"register-email",onChange:function(e){y(e.target.value)},placeholder:"john@example.com"})]}),Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)(h.s,{className:"form-label",for:"register-password",children:"Password"}),Object(w.jsx)(d.a,{className:"input-group-merge",id:"register-password",onChange:function(e){F(e.target.value)}})]}),Object(w.jsxs)("div",{className:"form-check mb-1",children:[Object(w.jsx)(h.p,{type:"checkbox",id:"terms"}),Object(w.jsxs)(h.s,{className:"form-check-label",for:"terms",children:["I agree to",Object(w.jsx)("a",{className:"ms-25",href:"/",onClick:function(e){return e.preventDefault()},children:"privacy policy & terms"})]})]}),Object(w.jsx)(h.c,{onClick:function(){D()},color:"primary",block:!0,children:"Sign up"})]}),Object(w.jsxs)("p",{className:"text-center mt-2",children:[Object(w.jsx)("span",{className:"me-25",children:"Already have an account?"}),Object(w.jsx)(i.b,{to:"/login",children:Object(w.jsx)("span",{children:"Sign in instead"})})]}),Object(w.jsx)("div",{className:"divider my-2",children:Object(w.jsx)("div",{className:"divider-text",children:"or"})}),Object(w.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(w.jsx)(h.c,{color:"facebook",children:Object(w.jsx)(l.a,{size:14})}),Object(w.jsx)(h.c,{color:"twitter",children:Object(w.jsx)(u.a,{size:14})}),Object(w.jsx)(h.c,{color:"google",children:Object(w.jsx)(j.a,{size:14})}),Object(w.jsx)(h.c,{className:"me-0",color:"github",children:Object(w.jsx)(p.a,{size:14})})]})]})})]})})}}}]);
//# sourceMappingURL=8.9d5b8e71.chunk.js.map