(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[22],{1473:function(e,r,s){"use strict";s.r(r);var n=s(82),a=s(12),c=s(45),i=s.n(c),o=s(5),l=s(118),u=s(1439),j=s(1441),d=s(1332),b=s(628),m=s(455),p=s.n(m),f=(s(1435),s(81)),x=(s(508),s(1)),O=s(629),h=(s(463),s(1437),s(548)),g=s(813),v=s(122),k=s(1436),N=s(462),w=s(457),y=s(6),E=[{value:"UMKM",label:"UMKM"},{value:"PENYELIA_HALAL",label:"Penyelia Halal"},{value:"AUDITOR",label:"Auditor"}],C=[[{action:"manage",subject:"UMKM"}],[{action:"manage",subject:"PenyeliaHalal"}],[{action:"manage",subject:"Auditor"}]];r.default=function(){var e=Object(x.useState)(""),r=Object(a.a)(e,2),c=r[0],m=r[1],S=Object(x.useState)(""),P=Object(a.a)(S,2),L=P[0],T=P[1],A=Object(x.useState)(""),I=Object(a.a)(A,2),_=I[0],D=I[1],F=Object(x.useState)(""),M=Object(a.a)(F,2),z=M[0],R=M[1],U=Object(x.useState)(""),J=Object(a.a)(U,2),G=J[0],K=J[1],B=new O.a,W=Object(o.f)(),Y=function(){return Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"me-1",children:Object(y.jsx)(h.a,{size:"sm",color:"danger",icon:Object(y.jsx)(g.b,{size:12})})}),Object(y.jsxs)("div",{className:"d-flex flex-column",children:[Object(y.jsx)("div",{className:"d-flex justify-content-between",children:Object(y.jsx)(u.a,{size:12,className:"cursor-pointer",onClick:function(){return v.b.dismiss(t.id)}})}),Object(y.jsx)("span",{children:"Password tidak sama dengan konfirmasi password. Tolong coba lagi."})]})]})},H=function(){return Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"me-1",children:Object(y.jsx)(h.a,{size:"sm",color:"danger",icon:Object(y.jsx)(g.b,{size:12})})}),Object(y.jsxs)("div",{className:"d-flex flex-column",children:[Object(y.jsx)("div",{className:"d-flex justify-content-between",children:Object(y.jsx)(u.a,{size:12,className:"cursor-pointer",onClick:function(){return v.b.dismiss(t.id)}})}),Object(y.jsx)("span",{children:"Tolong isi kolom yang kosong."})]})]})},X=function(){return Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("div",{className:"me-1",children:Object(y.jsx)(h.a,{size:"sm",color:"danger",icon:Object(y.jsx)(g.b,{size:12})})}),Object(y.jsxs)("div",{className:"d-flex flex-column",children:[Object(y.jsx)("div",{className:"d-flex justify-content-between",children:Object(y.jsx)(u.a,{size:12,className:"cursor-pointer",onClick:function(){return v.b.dismiss(t.id)}})}),Object(y.jsx)("span",{children:"Tolong isi kolom email dengan benar."})]})]})},q=s(580).default,V=function(){var e=Object(n.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c&&L&&_){e.next=4;break}Object(v.b)((function(e){return Object(y.jsx)(H,{t:e})})),e.next=33;break;case 4:if(Object(k.a)(L)){e.next=8;break}Object(v.b)((function(e){return Object(y.jsx)(X,{t:e})})),e.next=33;break;case 8:if(_===z){e.next=12;break}Object(v.b)((function(e){return Object(y.jsx)(Y,{t:e})})),e.next=33;break;case 12:return t={username:c,email:L,password:_,role:G.value,ability:"UMKM"===G.value?C[0]:"PENYELIA_HALAL"===G.value?C[1]:"AUDITOR"===G.value?C[2]:"null"},e.prev=13,console.log("ABILITY JSON",t.ability),console.log("ABILITY JSON 2",G.value),e.next=18,B.register(t);case 18:if(!(r=e.sent).id&&!r.success){e.next=24;break}return e.next=22,p.a.fire("","Data berhasil di simpan","success").then((function(){W("/login")}));case 22:e.next=26;break;case 24:return e.next=26,p.a.fire("","Data gagal disimpan","error");case 26:e.next=33;break;case 28:return e.prev=28,e.t0=e.catch(13),console.error(e.t0),e.next=33,p.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin. ","error");case 33:case"end":return e.stop()}}),e,null,[[13,28]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(y.jsxs)(f.E,{className:"auth-inner m-0",children:[Object(y.jsxs)(l.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(y.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(y.jsxs)("defs",{children:[Object(y.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(y.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(y.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(y.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(y.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(y.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(y.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(y.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(y.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(y.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(y.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(y.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(y.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(y.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(y.jsx)("h2",{className:"brand-text text-primary ms-1",children:"PasporUMKM"})]}),Object(y.jsx)(f.k,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(y.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(y.jsx)("img",{className:"img-fluid",src:q,alt:"Login Cover"})})}),Object(y.jsx)(f.k,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(y.jsxs)(f.k,{className:"px-xl-2 mx-auto",xs:"12",sm:"8",md:"6",lg:"12",children:[Object(y.jsx)(f.j,{tag:"h2",className:"fw-bold mb-1",children:"Perjalananmu dimulai dari sini \ud83d\ude80"}),Object(y.jsx)(f.i,{className:"mb-2",children:"Membuat proses sertifikasi menjadi menyenangkan!"}),Object(y.jsxs)(f.p,{className:"auth-register-form mt-2",onSubmit:function(e){return e.preventDefault()},children:[Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(f.u,{className:"form-label",for:"register-username",children:"Username"}),Object(y.jsxs)(f.s,{className:"input-group-merge",children:[Object(y.jsx)(f.t,{children:Object(y.jsx)(j.a,{size:15})}),Object(y.jsx)(f.r,{type:"text",id:"register-username",placeholder:"username",onChange:function(e){m(e.target.value)},autoFocus:!0,required:!0})]})]}),Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(f.u,{className:"form-label",for:"register-email",children:"Email"}),Object(y.jsxs)(f.s,{className:"input-group-merge",children:[Object(y.jsx)(f.t,{children:Object(y.jsx)(d.a,{size:15})}),Object(y.jsx)(f.r,{type:"email",id:"register-email",onChange:function(e){T(e.target.value)},placeholder:"email (contoh@email.com)",required:!0})]})]}),Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(f.u,{className:"form-label",for:"register-password",children:"Password"}),Object(y.jsx)(b.a,{className:"input-group-merge",id:"register-password",onChange:function(e){D(e.target.value)}})]}),Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(f.u,{className:"form-label",for:"register-password",children:"Ketik Ulang Password"}),Object(y.jsx)(b.a,{className:"input-group-merge",id:"confirm-password",onChange:function(e){R(e.target.value)}})]}),Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(f.u,{className:"form-label",children:"Daftar Sebagai"}),Object(y.jsx)(N.a,{theme:w.d,className:"react-select",classNamePrefix:"select",placeholder:"Pilih disini",name:"clear",options:E,onChange:function(e){K(e)},isClearable:!0})]}),Object(y.jsxs)("div",{className:"form-check mb-1",children:[Object(y.jsx)(f.r,{type:"checkbox",id:"terms"}),Object(y.jsxs)(f.u,{className:"form-check-label",for:"terms",children:["Saya mengerti",Object(y.jsx)("a",{className:"ms-25",href:"/src/views/pages",onClick:function(e){return e.preventDefault()},children:"tentang kebijakan dan ketentuan."})]})]}),Object(y.jsx)(f.e,{onClick:function(){V()},color:"primary",block:!0,children:"Sign up"})]}),Object(y.jsxs)("p",{className:"text-center mt-2",children:[Object(y.jsx)("span",{className:"me-25",children:"Sudah punya akun?"}),Object(y.jsx)(l.b,{to:"/login",children:Object(y.jsx)("span",{children:"Sign in disini"})})]})]})})]})})}},461:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(82),n=r(452),a=r(451),c=r(45),i=r.n(c),o=r(464),l=r.n(o),u=Object(n.a)((function e(){Object(a.a)(this,e)}));u.set=function(){var e=Object(s.a)(i.a.mark((function e(t,r,s){var n,a,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(s)),c={method:r,headers:{"Content-Type":"application/json",Authorization:a?"bearer ".concat(a):null,Accept:"application/json"},body:JSON.stringify(s)},e.next=5,fetch(l.a.base_url+t,c);case 5:if(!(o=e.sent).ok){e.next=8;break}return e.abrupt("return",o.json());case 8:return e.next=10,o.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(n=u.error_message)||void 0===n?void 0:n.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(t,r,s){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(s.a)(i.a.mark((function e(t,r,s){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.token||localStorage.token,e.next=3,fetch(l.a.base_url+t,{method:r,headers:{Authorization:n?"bearer ".concat(n):null,"Access-Control-Allow-Origin":"*"},body:s});case 3:if(!(a=e.sent).ok){e.next=9;break}return console.log(a),e.abrupt("return",a.json());case 9:return e.next=11,a.json();case 11:throw c=e.sent,console.log(c),c;case 14:case"end":return e.stop()}}),e)})));return function(t,r,s){return e.apply(this,arguments)}}()},464:function(e,t){e.exports={base_url:"https://api.pasporumkm.com"}},508:function(e,t,r){},580:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/register-v2.24c0a62e.svg"},628:function(e,t,r){"use strict";var s=r(13),n=r(34),a=r(12),c=r(121),i=r(1),o=r(2),l=r.n(o),u=r(1329),j=r(1330),d=r(1331),b=r(81),m=r(6),p=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],f=Object(i.forwardRef)((function(e,t){var r=e.label,o=e.hideIcon,f=e.showIcon,x=e.visible,O=(e.className,e.htmlFor),h=e.placeholder,g=e.iconSize,v=e.inputClassName,k=e.invalid,N=Object(c.a)(e,p),w=Object(i.useState)(x),y=Object(a.a)(w,2),E=y[0],C=y[1];return Object(m.jsxs)(i.Fragment,{children:[r?Object(m.jsx)(b.u,{className:"form-label",for:O,children:r}):null,Object(m.jsxs)(b.s,{className:"input-group-merge",children:[Object(m.jsx)(b.t,{children:Object(m.jsx)(d.a,{size:15})}),Object(m.jsx)(b.r,Object(s.a)(Object(s.a)({ref:t,invalid:k,type:!1===E?"password":"text",placeholder:h||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(n.a)({},v,v))},r&&O?{id:O}:{}),N)),Object(m.jsx)(b.t,{className:"cursor-pointer",onClick:function(){return C(!E)},children:function(){var e=g||14;return!1===E?o||Object(m.jsx)(u.a,{size:e}):f||Object(m.jsx)(j.a,{size:e})}()})]})]})}));t.a=f,f.defaultProps={visible:!1}},629:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var s=r(82),n=r(452),a=r(451),c=r(45),i=r.n(c),o=r(461),l=Object(n.a)((function e(){Object(a.a)(this,e),this.getAll=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/ppkm/users","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/ppkm/user/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteUser=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/ppkm/user/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateUser=function(){var e=Object(s.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/ppkm/user/".concat(t),"PUT",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(s.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/ppkm/user/".concat(t),"POST",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/ppkm/user/register","POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}));l.login=function(){var e=Object(s.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/ppkm/user/login","POST",{email:t,password:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=22.064acd4a.chunk.js.map