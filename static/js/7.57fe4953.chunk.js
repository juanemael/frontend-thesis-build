(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[7],{445:function(e,t,r){},450:function(e,t,r){"use strict";var n=r(13),s=r(34),a=r(12),c=r(120),o=r(1),i=r(2),l=r.n(i),u=r(490),j=r(491),p=r(81),d=r(6),b=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],f=Object(o.forwardRef)((function(e,t){var r,i=e.label,f=e.hideIcon,m=e.showIcon,h=e.visible,x=e.className,O=e.htmlFor,g=e.placeholder,v=e.iconSize,k=e.inputClassName,N=e.invalid,w=Object(c.a)(e,b),y=Object(o.useState)(h),E=Object(a.a)(y,2),C=E[0],S=E[1];return Object(d.jsxs)(o.Fragment,{children:[i?Object(d.jsx)(p.s,{className:"form-label",for:O,children:i}):null,Object(d.jsxs)(p.q,{className:l()((r={},Object(s.a)(r,x,x),Object(s.a)(r,"is-invalid",N),r)),children:[Object(d.jsx)(p.p,Object(n.a)(Object(n.a)({ref:t,invalid:N,type:!1===C?"password":"text",placeholder:g||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(s.a)({},k,k))},i&&O?{id:O}:{}),w)),Object(d.jsx)(p.r,{className:"cursor-pointer",onClick:function(){return S(!C)},children:function(){var e=v||14;return!1===C?f||Object(d.jsx)(u.a,{size:e}):m||Object(d.jsx)(j.a,{size:e})}()})]})]})}));t.a=f,f.defaultProps={visible:!1}},451:function(e,t){e.exports={base_url:"https://api.pasporumkm.com/"}},453:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/register-v2.24c0a62e.svg"},455:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var n=r(82),s=r(442),a=r(441),c=r(45),o=r.n(c),i=r(451),l=r.n(i),u=Object(s.a)((function e(){Object(a.a)(this,e)}));u.set=function(){var e=Object(n.a)(o.a.mark((function e(t,r,n){var s,a,c,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(n)),c={method:r,headers:{"Content-Type":"application/json",Authorization:a?"bearer ".concat(a):null,Accept:"application/json"},body:JSON.stringify(n)},e.next=5,fetch(l.a.base_url+t,c);case 5:if(!(i=e.sent).ok){e.next=8;break}return e.abrupt("return",i.json());case 8:return e.next=10,i.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(s=u.error_message)||void 0===s?void 0:s.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(n.a)(o.a.mark((function e(t,r,n){var s,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=sessionStorage.token||localStorage.token,e.next=3,fetch(l.a.base_url+t,{method:r,headers:{Authorization:s?"bearer ".concat(s):null,"Access-Control-Allow-Origin":"*"},body:n});case 3:if(!(a=e.sent).ok){e.next=9;break}return console.log(a),e.abrupt("return",a.json());case 9:return e.next=11,a.json();case 11:throw c=e.sent,console.log(c),c;case 14:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();var j=Object(s.a)((function e(){Object(a.a)(this,e),this.getAll=Object(n.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/users","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteUser=function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateUser=function(){var e=Object(n.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"PUT",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(n.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/".concat(t),"POST",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/register","POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));j.login=function(){var e=Object(n.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.set("/ppkm/user/login","POST",{email:email,password:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},613:function(e,t,r){"use strict";r.r(t);var n=r(82),s=r(12),a=r(45),c=r.n(a),o=r(5),i=r(117),l=r(614),u=r(615),j=r(596),p=r(616),d=r(450),b=r(582),f=r.n(b),m=r(81),h=(r(445),r(1)),x=r(455),O=r(6);t.default=function(){var e=Object(h.useState)([]),t=Object(s.a)(e,2),a=(t[0],t[1],Object(h.useState)([])),b=Object(s.a)(a,2),g=b[0],v=b[1],k=Object(h.useState)([]),N=Object(s.a)(k,2),w=N[0],y=N[1],E=Object(h.useState)([]),C=Object(s.a)(E,2),S=C[0],F=C[1],_=new x.a,P=Object(o.f)(),D=r(453).default,L=function(){var e=Object(n.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:g,email:w,password:S},e.prev=1,e.next=4,_.register(t);case 4:if(!(r=e.sent).id&&!r.success){e.next=10;break}return e.next=8,f.a.fire("","Data berhasil di simpan","success").then((function(){P("/login")}));case 8:e.next=12;break;case 10:return e.next=12,f.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,f.a.fire("Error",e.t0.error_message?e.t0.error_message:"Error Occured. ","error");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(O.jsxs)(m.w,{className:"auth-inner m-0",children:[Object(O.jsxs)(i.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(O.jsxs)("defs",{children:[Object(O.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(O.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(O.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(O.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(O.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(O.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(O.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(O.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(O.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(O.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(O.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(O.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(O.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(O.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(O.jsx)("h2",{className:"brand-text text-primary ms-1",children:"PasporUMKM"})]}),Object(O.jsx)(m.j,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(O.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(O.jsx)("img",{className:"img-fluid",src:D,alt:"Login Cover"})})}),Object(O.jsx)(m.j,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(O.jsxs)(m.j,{className:"px-xl-2 mx-auto",xs:"12",sm:"8",md:"6",lg:"12",children:[Object(O.jsx)(m.i,{tag:"h2",className:"fw-bold mb-1",children:"Adventure starts here \ud83d\ude80"}),Object(O.jsx)(m.h,{className:"mb-2",children:"Make your app management easy and fun!"}),Object(O.jsxs)(m.o,{className:"auth-register-form mt-2",onSubmit:function(e){return e.preventDefault()},children:[Object(O.jsxs)("div",{className:"mb-1",children:[Object(O.jsx)(m.s,{className:"form-label",for:"register-username",children:"Username"}),Object(O.jsx)(m.p,{type:"text",id:"register-username",placeholder:"johndoe",onChange:function(e){v(e.target.value)},autoFocus:!0})]}),Object(O.jsxs)("div",{className:"mb-1",children:[Object(O.jsx)(m.s,{className:"form-label",for:"register-email",children:"Email"}),Object(O.jsx)(m.p,{type:"email",id:"register-email",onChange:function(e){y(e.target.value)},placeholder:"john@example.com"})]}),Object(O.jsxs)("div",{className:"mb-1",children:[Object(O.jsx)(m.s,{className:"form-label",for:"register-password",children:"Password"}),Object(O.jsx)(d.a,{className:"input-group-merge",id:"register-password",onChange:function(e){F(e.target.value)}})]}),Object(O.jsxs)("div",{className:"form-check mb-1",children:[Object(O.jsx)(m.p,{type:"checkbox",id:"terms"}),Object(O.jsxs)(m.s,{className:"form-check-label",for:"terms",children:["I agree to",Object(O.jsx)("a",{className:"ms-25",href:"/",onClick:function(e){return e.preventDefault()},children:"privacy policy & terms"})]})]}),Object(O.jsx)(m.c,{onClick:function(){L()},color:"primary",block:!0,children:"Sign up"})]}),Object(O.jsxs)("p",{className:"text-center mt-2",children:[Object(O.jsx)("span",{className:"me-25",children:"Already have an account?"}),Object(O.jsx)(i.b,{to:"/login",children:Object(O.jsx)("span",{children:"Sign in instead"})})]}),Object(O.jsx)("div",{className:"divider my-2",children:Object(O.jsx)("div",{className:"divider-text",children:"or"})}),Object(O.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(O.jsx)(m.c,{color:"facebook",children:Object(O.jsx)(l.a,{size:14})}),Object(O.jsx)(m.c,{color:"twitter",children:Object(O.jsx)(u.a,{size:14})}),Object(O.jsx)(m.c,{color:"google",children:Object(O.jsx)(j.a,{size:14})}),Object(O.jsx)(m.c,{className:"me-0",color:"github",children:Object(O.jsx)(p.a,{size:14})})]})]})})]})})}}}]);
//# sourceMappingURL=7.57fe4953.chunk.js.map