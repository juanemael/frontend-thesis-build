(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[12],{449:function(e,a,t){},450:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var s=t(82),n=t(446),c=t(445),r=t(45),l=t.n(r),i=t(460),j=Object(n.a)((function e(){Object(c.a)(this,e),this.getAll=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/company_profiles","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(s.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/company_profile/".concat(a),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.deleteUser=function(){var e=Object(s.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/company_profile/".concat(a),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.updateUser=function(){var e=Object(s.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/company_profile/".concat(a),"PUT",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(s.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/company_profile/".concat(a),"POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),this.createCompanyProfile=function(){var e=Object(s.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/company_profile","POST",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}))},460:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t(82),n=t(446),c=t(445),r=t(45),l=t.n(r),i=t(461),j=t.n(i),o=Object(n.a)((function e(){Object(c.a)(this,e)}));o.set=function(){var e=Object(s.a)(l.a.mark((function e(a,t,s){var n,c,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(s)),r={method:t,headers:{"Content-Type":"application/json",Authorization:c?"bearer ".concat(c):null,Accept:"application/json"},body:JSON.stringify(s)},e.next=5,fetch(j.a.base_url+a,r);case 5:if(!(i=e.sent).ok){e.next=8;break}return e.abrupt("return",i.json());case 8:return e.next=10,i.json();case 10:if(o=e.sent,console.log(o),console.log(o.msg),"JWT_EXPIRED"!==o.code&&"NO_TOKEN_PROVIDED"!==o.code&&"INVALID_TOKEN"!==o.code&&"BAD_TOKEN_FORMAT"!==o.code&&"NO_SECRET_DEFINED"!==o.code&&"JWT_MALFORMED"!==o.error_message&&"JWT_MALFORMED"!==(null===(n=o.error_message)||void 0===n?void 0:n.msg)&&"JWT_EXPIRED"!==o.error_message&&"SUBSCRIPTION_EXPIRED"!==o.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),o;case 18:throw o;case 19:case"end":return e.stop()}}),e)})));return function(a,t,s){return e.apply(this,arguments)}}(),o.setMultipart=function(){var e=Object(s.a)(l.a.mark((function e(a,t,s){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.token||localStorage.token,e.next=3,fetch(j.a.base_url+a,{method:t,headers:{Authorization:n?"bearer ".concat(n):null,"Access-Control-Allow-Origin":"*"},body:s});case 3:if(!(c=e.sent).ok){e.next=9;break}return console.log(c),e.abrupt("return",c.json());case 9:return e.next=11,c.json();case 11:throw r=e.sent,console.log(r),r;case 14:case"end":return e.stop()}}),e)})));return function(a,t,s){return e.apply(this,arguments)}}()},461:function(e,a){e.exports={base_url:"https://api.pasporumkm.com"}},474:function(e,a,t){"use strict";t.p},475:function(e,a,t){"use strict";t.p},476:function(e,a,t){"use strict";t.p},477:function(e,a,t){"use strict";t.p},483:function(e,a,t){"use strict";var s=t(82),n=t(12),c=t(45),r=t.n(c),l=t(81),i=(t(465),t(470),t(449),t(2),t(1)),j=t(450),o=t(452),d=t.n(o),m=t(5),u=t(6);a.a=function(){var e=Object(i.useState)(""),a=Object(n.a)(e,2),t=a[0],c=a[1],o=Object(i.useState)(""),b=Object(n.a)(o,2),h=(b[0],b[1]),x=Object(i.useState)(""),O=Object(n.a)(x,2),p=(O[0],O[1]),f=new j.a,N=Object(m.f)(),g=function(){var e=Object(s.a)(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama_perusahaan:t},e.prev=1,e.next=4,f.createCompanyProfile(a);case 4:if(!(s=e.sent).id&&!s.success){e.next=10;break}return e.next=8,d.a.fire("","Data berhasil di simpan","success").then((function(){N("/sjph/company_profile")}));case 8:e.next=12;break;case 10:return e.next=12,d.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,d.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsxs)("div",{className:"content-header",children:[Object(u.jsx)("h3",{className:"mb-0",children:"Halaman 1"}),Object(u.jsx)("small",{className:"text-muted",children:"Cari tahu tentang kebijakan halal"})]}),Object(u.jsx)(l.m,{children:Object(u.jsxs)(l.y,{children:[Object(u.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(l.r,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(u.jsx)(l.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){c(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(u.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(l.r,{className:"form-label",for:"lastNameMulti",children:"Tempat Persetujuan"}),Object(u.jsx)(l.o,{type:"text",name:"nib",id:"nib",onChange:function(e){h(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(u.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(l.r,{className:"form-label",for:"lastNameMulti",children:"Tanggal Persetujuan"}),Object(u.jsx)(l.o,{type:"text",name:"nib",id:"nib",onChange:function(e){p(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(u.jsx)(l.h,{sm:"12",children:Object(u.jsx)("div",{className:"d-flex justify-content-end",children:Object(u.jsx)(l.b,{className:"me-1",color:"primary",onClick:g,children:"Submit"})})})]})})]})}},484:function(e,a,t){"use strict";var s=t(34),n=t(12),c=t(1),r=t(515),l=t.n(r),i=t(2),j=t.n(i),o=t(991),d=(t(516),t(485),t(6)),m=Object(c.forwardRef)((function(e,a){var t,r=e.type,i=e.steps,o=e.options,m=e.instance,u=e.separator,b=e.className,h=e.headerClassName,x=e.contentClassName,O=e.contentWrapperClassName,p=Object(c.useState)(0),f=Object(n.a)(p,2),N=f[0],g=f[1],v=null;Object(c.useEffect)((function(){v=new l.a(a.current,o),a.current.addEventListener("shown.bs-stepper",(function(e){g(e.detail.indexStep)})),m&&m(v)}),[]);return Object(d.jsxs)("div",{ref:a,className:j()("bs-stepper",(t={},Object(s.a)(t,b,b),Object(s.a)(t,"vertical","vertical"===r),Object(s.a)(t,"vertical wizard-modern","modern-vertical"===r),Object(s.a)(t,"wizard-modern","modern-horizontal"===r),t)),children:[Object(d.jsx)("div",{className:j()("bs-stepper-header",Object(s.a)({},h,h)),children:i.map((function(e,a){return Object(d.jsxs)(c.Fragment,{children:[0!==a&&a!==i.length?Object(d.jsx)("div",{className:"line",children:u}):null,Object(d.jsx)("div",{className:j()("step",{crossed:N>a,active:a===N}),"data-target":"#".concat(e.id),children:Object(d.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(d.jsx)("span",{className:"bs-stepper-box",children:e.icon?e.icon:a+1}),Object(d.jsxs)("span",{className:"bs-stepper-label",children:[Object(d.jsx)("span",{className:"bs-stepper-title",children:e.title}),e.subtitle?Object(d.jsx)("span",{className:"bs-stepper-subtitle",children:e.subtitle}):null]})]})})]},e.id)}))}),Object(d.jsx)("div",{className:j()("bs-stepper-content",Object(s.a)({},O,O)),children:i.map((function(e,a){var t;return Object(d.jsx)("div",{className:j()("content",(t={},Object(s.a)(t,x,x),Object(s.a)(t,"active dstepper-block",N===a),t)),id:e.id,children:e.content},e.id)}))})]})}));a.a=m,m.defaultProps={options:{},type:"horizontal",separator:Object(d.jsx)(o.a,{size:17})}},485:function(e,a,t){},497:function(e,a,t){"use strict";var s=t(13),n=(t(82),t(12)),c=(t(45),t(81)),r=(t(449),t(1)),l=t(450),i=(t(452),t(5)),j=(t(474),t(475),t(476),t(477),t(987)),o=t(961),d=t(988),m=t(989),u=t(990),b=t(454),h=t(455),x=t(453),O=(t(456),t(6)),p=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"suspended",label:"Suspended"}],f=[{value:"uk",label:"UK"},{value:"usa",label:"USA"},{value:"france",label:"France"},{value:"russia",label:"Russia"},{value:"canada",label:"Canada"}],N=[{value:"english",label:"English"},{value:"spanish",label:"Spanish"},{value:"french",label:"French"},{value:"german",label:"German"},{value:"dutch",label:"Dutch"}],g={firstName:"Bob",lastName:"Barton",username:"bob.dev"};a.a=function(){var e=Object(r.useState)(""),a=Object(n.a)(e,2),t=(a[0],a[1],Object(r.useState)("")),v=Object(n.a)(t,2),k=(v[0],v[1],Object(r.useState)("")),y=Object(n.a)(k,2),P=(y[0],y[1],new l.a,Object(i.f)(),Object(r.useState)(!1)),w=Object(n.a)(P,2),S=w[0],C=w[1],E=Object(b.e)({defaultValues:g}),_=E.control,T=E.setError,D=E.handleSubmit,z=E.formState.errors;return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsxs)(c.s,{isOpen:S,toggle:function(){return C(!S)},className:"modal-dialog-centered modal-lg",children:[Object(O.jsx)(c.u,{className:"bg-transparent",toggle:function(){return C(!S)}}),Object(O.jsxs)(c.t,{className:"px-sm-5 mx-50 pb-5",children:[Object(O.jsxs)("div",{className:"text-center mb-2",children:[Object(O.jsx)("h1",{className:"mb-1",children:"Tambah Data Tabel"}),Object(O.jsx)("p",{children:"Tambah data tabelmu sekarang"})]}),Object(O.jsxs)(c.y,{tag:"form",className:"gy-1 pt-75",onSubmit:D((function(e){if(Object.values(e).every((function(e){return e.length>0})))return null;for(var a in e)0===e[a].length&&T(a,{type:"manual"})})),children:[Object(O.jsxs)(c.h,{md:6,xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"firstName",children:"First Name"}),Object(O.jsx)(b.a,{control:_,name:"firstName",render:function(e){var a=e.field;return Object(O.jsx)(c.o,Object(s.a)(Object(s.a)({},a),{},{id:"firstName",placeholder:"John",value:a.value,invalid:z.firstName&&!0}))}}),z.firstName&&Object(O.jsx)(c.n,{children:"Please enter a valid First Name"})]}),Object(O.jsxs)(c.h,{md:6,xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"lastName",children:"Last Name"}),Object(O.jsx)(b.a,{name:"lastName",control:_,render:function(e){var a=e.field;return Object(O.jsx)(c.o,Object(s.a)(Object(s.a)({},a),{},{id:"lastName",placeholder:"Doe",invalid:z.lastName&&!0}))}}),z.lastName&&Object(O.jsx)(c.n,{children:"Please enter a valid Last Name"})]}),Object(O.jsxs)(c.h,{xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"username",children:"Username"}),Object(O.jsx)(b.a,{name:"username",control:_,render:function(e){var a=e.field;return Object(O.jsx)(c.o,Object(s.a)(Object(s.a)({},a),{},{id:"username",placeholder:"john.doe.007",invalid:z.username&&!0}))}}),z.username&&Object(O.jsx)(c.n,{children:"Please enter a valid Username"})]}),Object(O.jsxs)(c.h,{md:6,xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"email",children:"Billing Email"}),Object(O.jsx)(c.o,{type:"email",id:"email",placeholder:"example@domain.com"})]}),Object(O.jsxs)(c.h,{md:6,xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"status",children:"Status:"}),Object(O.jsx)(h.a,{id:"status",isClearable:!1,className:"react-select",classNamePrefix:"select",options:p,theme:x.d,defaultValue:p[0]})]}),Object(O.jsxs)(c.h,{md:6,xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"tax-id",children:"Tax ID"}),Object(O.jsx)(c.o,{id:"tax-id",defaultValue:"Tax-8894",placeholder:"Tax-1234"})]}),Object(O.jsxs)(c.h,{md:6,xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"contact",children:"Contact"}),Object(O.jsx)(c.o,{id:"contact",defaultValue:"+1 609 933 4422",placeholder:"+1 609 933 4422"})]}),Object(O.jsxs)(c.h,{md:6,xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"language",children:"Language"}),Object(O.jsx)(h.a,{id:"language",isClearable:!1,className:"react-select",classNamePrefix:"select",options:N,theme:x.d,defaultValue:N[0]})]}),Object(O.jsxs)(c.h,{md:6,xs:12,children:[Object(O.jsx)(c.r,{className:"form-label",for:"country",children:"Country"}),Object(O.jsx)(h.a,{id:"country",isClearable:!1,className:"react-select",classNamePrefix:"select",options:f,theme:x.d,defaultValue:f[0]})]}),Object(O.jsx)(c.h,{xs:12,children:Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsxs)("div",{className:"form-switch",children:[Object(O.jsx)(c.o,{type:"switch",defaultChecked:!0,id:"billing-switch",name:"billing-switch"}),Object(O.jsxs)(c.r,{className:"form-check-label",htmlFor:"billing-switch",children:[Object(O.jsx)("span",{className:"switch-icon-left",children:Object(O.jsx)(j.a,{size:14})}),Object(O.jsx)("span",{className:"switch-icon-right",children:Object(O.jsx)(o.a,{size:14})})]})]}),Object(O.jsx)(c.r,{className:"form-check-label fw-bolder",htmlFor:"billing-switch",children:"Use as a billing address?"})]})}),Object(O.jsxs)(c.h,{xs:12,className:"text-center mt-2 pt-50",children:[Object(O.jsx)(c.b,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(O.jsx)(c.b,{type:"reset",color:"secondary",outline:!0,onClick:function(){return C(!1)},children:"Discard"})]})]})]})]}),Object(O.jsxs)("div",{className:"content-header",children:[Object(O.jsx)("h3",{className:"mb-0",children:"Halaman 2"}),Object(O.jsx)("small",{className:"text-muted",children:"Cari tahu tentang kebijakan halal"})]}),Object(O.jsxs)(c.z,{responsive:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"No."}),Object(O.jsx)("th",{children:"Tanggal Sosialisasi"}),Object(O.jsx)("th",{children:"Judul Kegiatan"}),Object(O.jsx)("th",{children:"Peserta"}),Object(O.jsx)("th",{children:"Bukti Hasil Sosialisasi"}),Object(O.jsx)("th",{children:"Menu"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"align-middle fw-bold",children:"1."})}),Object(O.jsx)("td",{children:"11-09-2022"}),Object(O.jsx)("td",{children:Object(O.jsx)(c.a,{pill:!0,color:"light-primary",className:"me-1",children:"Melakukan Halal"})}),Object(O.jsx)("td",{children:"5"}),Object(O.jsx)("td",{children:"Bukti"}),Object(O.jsx)("td",{children:Object(O.jsxs)(c.A,{children:[Object(O.jsx)(c.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(O.jsx)(d.a,{size:15})}),Object(O.jsxs)(c.k,{children:[Object(O.jsxs)(c.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(m.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(c.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(u.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"align-middle fw-bold",children:"2."})}),Object(O.jsx)("td",{children:"Ronald Frest"}),Object(O.jsx)("td",{children:Object(O.jsx)(c.a,{pill:!0,color:"light-success",className:"me-1",children:"Completed"})}),Object(O.jsx)("td",{children:"5"}),Object(O.jsx)("td",{children:"Bukti"}),Object(O.jsx)("td",{children:Object(O.jsxs)(c.A,{children:[Object(O.jsx)(c.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(O.jsx)(d.a,{size:15})}),Object(O.jsxs)(c.k,{children:[Object(O.jsxs)(c.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(m.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(c.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(u.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"align-middle fw-bold",children:"3."})}),Object(O.jsx)("td",{children:"Jack Obes"}),Object(O.jsx)("td",{children:Object(O.jsx)(c.a,{pill:!0,color:"light-info",className:"me-1",children:"Scheduled"})}),Object(O.jsx)("td",{children:"5"}),Object(O.jsx)("td",{children:"Bukti"}),Object(O.jsx)("td",{children:Object(O.jsxs)(c.A,{children:[Object(O.jsx)(c.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(O.jsx)(d.a,{size:15})}),Object(O.jsxs)(c.k,{children:[Object(O.jsxs)(c.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(m.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(c.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(u.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"align-middle fw-bold",children:"4."})}),Object(O.jsx)("td",{children:"Jerry Milton"}),Object(O.jsx)("td",{children:Object(O.jsx)(c.a,{pill:!0,color:"light-warning",className:"me-1",children:"Pending"})}),Object(O.jsx)("td",{children:"5"}),Object(O.jsx)("td",{children:"Bukti"}),Object(O.jsx)("td",{children:Object(O.jsxs)(c.A,{children:[Object(O.jsx)(c.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(O.jsx)(d.a,{size:15})}),Object(O.jsxs)(c.k,{children:[Object(O.jsxs)(c.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(m.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(c.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(u.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]})]})]}),Object(O.jsx)(c.h,{sm:"12",children:Object(O.jsx)("div",{className:"d-flex justify-content-end",children:Object(O.jsx)(c.b,{className:"me-1",color:"primary",onClick:function(){return C(!0)},children:"Tambah"})})})]})}},529:function(e,a,t){"use strict";var s=t(82),n=t(12),c=t(45),r=t.n(c),l=t(81),i=(t(465),t(470),t(449),t(2)),j=t.n(i),o=t(1),d=t(450),m=t(452),u=t.n(m),b=t(5),h=t(6);a.a=function(){var e=Object(o.useState)(""),a=Object(n.a)(e,2),t=a[0],c=a[1],i=Object(o.useState)(""),m=Object(n.a)(i,2),x=m[0],O=m[1],p=Object(o.useState)(""),f=Object(n.a)(p,2),N=f[0],g=f[1],v=Object(o.useState)(""),k=Object(n.a)(v,2),y=k[0],P=k[1],w=Object(o.useState)(""),S=Object(n.a)(w,2),C=S[0],E=S[1],_=Object(o.useState)(""),T=Object(n.a)(_,2),D=T[0],z=T[1],M=Object(o.useState)(""),F=Object(n.a)(M,2),A=(F[0],F[1]),I=Object(o.useState)(""),B=Object(n.a)(I,2),J=B[0],R=B[1],U=Object(o.useState)(""),H=Object(n.a)(U,2),L=H[0],K=H[1],V=Object(o.useState)(""),W=Object(n.a)(V,2),G=W[0],X=W[1],Y=Object(o.useState)(""),q=Object(n.a)(Y,2),Q=q[0],Z=q[1],$=Object(o.useState)(""),ee=Object(n.a)($,2),ae=ee[0],te=ee[1],se=Object(o.useState)(""),ne=Object(n.a)(se,2),ce=ne[0],re=ne[1],le=Object(o.useState)(""),ie=Object(n.a)(le,2),je=ie[0],oe=ie[1],de=Object(o.useState)(""),me=Object(n.a)(de,2),ue=me[0],be=me[1],he=Object(o.useState)(""),xe=Object(n.a)(he,2),Oe=xe[0],pe=xe[1],fe=new d.a,Ne=Object(b.f)(),ge=function(){var e=Object(s.a)(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama_perusahaan:N,nomor_induk_berusaha:y,skala_usaha:C,nama_pimpinan:D,alamat_perusahaan:J,telp_fax_perusahaan:L,alamat_fasilitas_produksi:G,telp_fax_fasilitas_produksi:Q,contact_person_email:ae,nomor_izin_edar:ce,jenis_produk:je,daerah_pemasaran:ue,sistem_pemasaran:Oe,tujuan:t,ruang_lingkup:x},e.prev=1,e.next=4,fe.createCompanyProfile(a);case 4:if(!(s=e.sent).id&&!s.success){e.next=10;break}return e.next=8,u.a.fire("","Data berhasil di simpan","success").then((function(){Ne("/sjph/company_profile")}));case 8:e.next=12;break;case 10:return e.next=12,u.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,u.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.e,{children:Object(h.jsx)(l.g,{tag:"h4",children:"Informasi Perusahaan"})}),Object(h.jsx)(l.d,{children:Object(h.jsx)(l.m,{children:Object(h.jsxs)(l.y,{children:[Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(h.jsx)(l.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){g(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"lastNameMulti",children:"Nomor Induk Berusaha"}),Object(h.jsx)(l.o,{type:"text",name:"nib",id:"nib",onChange:function(e){P(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"cityMulti",children:"Skala Usaha"}),Object(h.jsx)(l.o,{type:"text",name:"skalaUsaha",id:"skalaUsaha",onChange:function(e){E(e.target.value)},placeholder:"Skala Usaha"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"CountryMulti",children:"Nama Pimpinan"}),Object(h.jsx)(l.o,{type:"text",name:"namaPimpinan",id:"namaPimpinan",onChange:function(e){z(e.target.value)},placeholder:"Nama Pimpinan"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"CompanyMulti",children:"Nama Penyelia Halal"}),Object(h.jsx)(l.o,{type:"text",name:"namaPenyeliaHalal",id:"namaPenyeliaHalal",onChange:function(e){A(e.target.value)},placeholder:"Nama Penyelia Halal"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Alamat Perusahaan"}),Object(h.jsx)(l.o,{type:"text",name:"alamatPerusahaan",id:"alamatPerusahaan",onChange:function(e){R(e.target.value)},placeholder:"Alamat Perusahaan"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Perusahaan"}),Object(h.jsx)(l.o,{type:"text",name:"telpFaxPerusahaan",id:"telpFaxPerusahaan",onChange:function(e){K(e.target.value)},placeholder:"Telp/Fax Perusahaan"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Alamat Fasilitas Produksi"}),Object(h.jsx)(l.o,{type:"text",name:"alamatFasilitasProduksi",id:"alamatFasilitasProduksi",onChange:function(e){X(e.target.value)},placeholder:"Alamat Fasilitas Produksi"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Fasilitas Produksi"}),Object(h.jsx)(l.o,{type:"text",name:"telpFaxFasilitasProduksi",id:"telpFaxFasilitasProduksi",onChange:function(e){Z(e.target.value)},placeholder:"Telp/Fax Fasilitas Produksi"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Contact Person / Email"}),Object(h.jsx)(l.o,{type:"text",name:"contactPersonEmail",id:"contactPersonEmail",onChange:function(e){te(e.target.value)},placeholder:"Contact Person / Email"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Nomor Izin Edar"}),Object(h.jsx)(l.o,{type:"text",name:"nomorIzinEdar",id:"nomorIzinEdar",onChange:function(e){re(e.target.value)},placeholder:"Nomor Izin Edar"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Jenis Produk"}),Object(h.jsx)(l.o,{type:"text",name:"jenisProduk",id:"jenisProduk",onChange:function(e){oe(e.target.value)},placeholder:"Jenis Produk"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Daerah Pemasaran"}),Object(h.jsx)(l.o,{type:"text",name:"daerahPemasaran",id:"daerahPemasaran",onChange:function(e){be(e.target.value)},placeholder:"Daerah Pemasaran"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Sistem Pemasaran"}),Object(h.jsx)(l.o,{type:"text",name:"sistemPemasaran",id:"sistemPemasaran",onChange:function(e){pe(e.target.value)},placeholder:"Sistem Pemasaran"})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Tujuan"}),Object(h.jsx)(l.o,{name:"tujuan",value:t,type:"textarea",id:"tujuan",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return c(e.target.value)},className:j()({"text-danger":t.length>20})}),Object(h.jsx)("span",{className:j()("textarea-counter-value float-end",{"bg-danger":t.length>20}),children:"".concat(t.length,"/20")})]}),Object(h.jsxs)(l.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(l.r,{className:"form-label",for:"EmailMulti",children:"Ruang Lingkup"}),Object(h.jsx)(l.o,{name:"ruangLingkup",value:x,type:"textarea",id:"ruangLingkup",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return O(e.target.value)},className:j()({"text-danger":x.length>20})}),Object(h.jsx)("span",{className:j()("textarea-counter-value float-end",{"bg-danger":x.length>20}),children:"".concat(x.length,"/20")})]}),Object(h.jsx)(l.h,{sm:"12",children:Object(h.jsx)("div",{className:"d-flex justify-content-end",children:Object(h.jsx)(l.b,{className:"me-1",color:"primary",onClick:ge,children:"Submit"})})})]})})})]})}},986:function(e,a,t){"use strict";t.r(a);var s=t(12),n=(t(529),t(483)),c=t(497),r=t(992),l=t(963),i=t(484),j=t(1),o=t(6);a.default=function(){var e=Object(j.useRef)(null),a=Object(j.useState)(null),t=Object(s.a)(a,2),d=t[0],m=t[1],u=[{id:"hal1",title:"Halaman 1",subtitle:"Keterangan Kriteria",icon:Object(o.jsx)(r.a,{size:18}),content:Object(o.jsx)(n.a,{stepper:d,type:"wizard-modern"})},{id:"hal2",title:"Halaman 2",subtitle:"Media Komunikasi Table",icon:Object(o.jsx)(l.a,{size:18}),content:Object(o.jsx)(c.a,{stepper:d,type:"wizard-modern"})}];return Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{type:"modern-vertical",ref:e,steps:u,options:{linear:!1},instance:function(e){return m(e)}})})}}}]);
//# sourceMappingURL=12.bd846ae0.chunk.js.map