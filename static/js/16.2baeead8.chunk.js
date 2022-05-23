(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[16],{1027:function(e,a,s){"use strict";s.r(a);var t=s(12),c=s(1008),l=s(985),r=s(606),n=s(481),i=s(1),j=s(13),d=(s(82),s(45),s(81)),b=(s(452),s(453)),m=(s(449),s(5)),h=(s(508),s(509),s(510),s(511),s(1004)),o=s(983),O=s(1005),x=s(1006),u=s(1007),f=s(454),p=s(455),N=s(448),v=(s(456),s(6)),g=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"suspended",label:"Suspended"}],y=[{value:"uk",label:"UK"},{value:"usa",label:"USA"},{value:"france",label:"France"},{value:"russia",label:"Russia"},{value:"canada",label:"Canada"}],k=[{value:"english",label:"English"},{value:"spanish",label:"Spanish"},{value:"french",label:"French"},{value:"german",label:"German"},{value:"dutch",label:"Dutch"}],w={firstName:"Bob",lastName:"Barton",username:"bob.dev"},C=function(){var e=Object(i.useState)(""),a=Object(t.a)(e,2),s=(a[0],a[1],Object(i.useState)("")),c=Object(t.a)(s,2),l=(c[0],c[1],Object(i.useState)("")),r=Object(t.a)(l,2),n=(r[0],r[1],new b.a,Object(m.f)(),Object(i.useState)(!1)),C=Object(t.a)(n,2),D=C[0],z=C[1],S=Object(f.e)({defaultValues:w}),P=S.control,E=S.setError,T=S.handleSubmit,F=S.formState.errors;return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsxs)(d.u,{isOpen:D,toggle:function(){return z(!D)},className:"modal-dialog-centered modal-lg",children:[Object(v.jsx)(d.w,{className:"bg-transparent",toggle:function(){return z(!D)}}),Object(v.jsxs)(d.v,{className:"px-sm-5 mx-50 pb-5",children:[Object(v.jsxs)("div",{className:"text-center mb-2",children:[Object(v.jsx)("h1",{className:"mb-1",children:"Tambah Data Tabel"}),Object(v.jsx)("p",{children:"Tambah data tabelmu sekarang"})]}),Object(v.jsxs)(d.A,{tag:"form",className:"gy-1 pt-75",onSubmit:T((function(e){if(Object.values(e).every((function(e){return e.length>0})))return null;for(var a in e)0===e[a].length&&E(a,{type:"manual"})})),children:[Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"firstName",children:"First Name"}),Object(v.jsx)(f.a,{control:P,name:"firstName",render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"firstName",placeholder:"John",value:a.value,invalid:F.firstName&&!0}))}}),F.firstName&&Object(v.jsx)(d.n,{children:"Please enter a valid First Name"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"lastName",children:"Last Name"}),Object(v.jsx)(f.a,{name:"lastName",control:P,render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"lastName",placeholder:"Doe",invalid:F.lastName&&!0}))}}),F.lastName&&Object(v.jsx)(d.n,{children:"Please enter a valid Last Name"})]}),Object(v.jsxs)(d.h,{xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"username",children:"Username"}),Object(v.jsx)(f.a,{name:"username",control:P,render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"username",placeholder:"john.doe.007",invalid:F.username&&!0}))}}),F.username&&Object(v.jsx)(d.n,{children:"Please enter a valid Username"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"email",children:"Billing Email"}),Object(v.jsx)(d.o,{type:"email",id:"email",placeholder:"example@domain.com"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"status",children:"Status:"}),Object(v.jsx)(p.a,{id:"status",isClearable:!1,className:"react-select",classNamePrefix:"select",options:g,theme:N.d,defaultValue:g[0]})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"tax-id",children:"Tax ID"}),Object(v.jsx)(d.o,{id:"tax-id",defaultValue:"Tax-8894",placeholder:"Tax-1234"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"contact",children:"Contact"}),Object(v.jsx)(d.o,{id:"contact",defaultValue:"+1 609 933 4422",placeholder:"+1 609 933 4422"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"language",children:"Language"}),Object(v.jsx)(p.a,{id:"language",isClearable:!1,className:"react-select",classNamePrefix:"select",options:k,theme:N.d,defaultValue:k[0]})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"country",children:"Country"}),Object(v.jsx)(p.a,{id:"country",isClearable:!1,className:"react-select",classNamePrefix:"select",options:y,theme:N.d,defaultValue:y[0]})]}),Object(v.jsx)(d.h,{xs:12,children:Object(v.jsxs)("div",{className:"d-flex align-items-center",children:[Object(v.jsxs)("div",{className:"form-switch",children:[Object(v.jsx)(d.o,{type:"switch",defaultChecked:!0,id:"billing-switch",name:"billing-switch"}),Object(v.jsxs)(d.r,{className:"form-check-label",htmlFor:"billing-switch",children:[Object(v.jsx)("span",{className:"switch-icon-left",children:Object(v.jsx)(h.a,{size:14})}),Object(v.jsx)("span",{className:"switch-icon-right",children:Object(v.jsx)(o.a,{size:14})})]})]}),Object(v.jsx)(d.r,{className:"form-check-label fw-bolder",htmlFor:"billing-switch",children:"Use as a billing address?"})]})}),Object(v.jsxs)(d.h,{xs:12,className:"text-center mt-2 pt-50",children:[Object(v.jsx)(d.b,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(v.jsx)(d.b,{type:"reset",color:"secondary",outline:!0,onClick:function(){return z(!1)},children:"Discard"})]})]})]})]}),Object(v.jsxs)("div",{className:"content-header",children:[Object(v.jsx)("h3",{className:"mb-0",children:"Halaman 1"}),Object(v.jsx)("small",{className:"text-muted",children:"Surat Keputusan Penetapan Tim Manajemen Hlala Dan/Atau Penyelia Halal"})]}),Object(v.jsxs)(d.B,{responsive:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"No."}),Object(v.jsx)("th",{children:"Nama"}),Object(v.jsx)("th",{children:"Jabatan"}),Object(v.jsx)("th",{children:"Posisi di Tim"}),Object(v.jsx)("th",{children:"Menu"})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"1."})}),Object(v.jsx)("td",{children:"Rudi"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"Advisor"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.D,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"2."})}),Object(v.jsx)("td",{children:"Ronald"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"Advisor"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.D,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"3."})}),Object(v.jsx)("td",{children:"Jack"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"Advisor"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.D,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"4."})}),Object(v.jsx)("td",{children:"Jerry"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"Advisor"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.D,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]})]})]}),Object(v.jsx)(d.h,{sm:"12",children:Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsx)(d.b,{className:"me-1",color:"primary",onClick:function(){return z(!0)},children:"Tambah"})})})]})},D=(s(478),s(489),s(2),function(){var e=Object(i.useState)(""),a=Object(t.a)(e,2),s=(a[0],a[1]),c=Object(i.useState)(""),l=Object(t.a)(c,2),r=(l[0],l[1]),n=Object(i.useState)(""),j=Object(t.a)(n,2),h=(j[0],j[1]);new b.a,Object(m.f)();return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsxs)("div",{className:"content-header",children:[Object(v.jsx)("h3",{className:"mb-0",children:"Halaman 1"}),Object(v.jsx)("small",{className:"text-muted",children:"Cari tahu tentang kebijakan halal"})]}),Object(v.jsx)(d.m,{children:Object(v.jsxs)(d.A,{children:[Object(v.jsxs)(d.h,{md:"6",sm:"12",className:"mb-1",children:[Object(v.jsx)(d.r,{className:"form-label",for:"nameMulti",children:"Hari/Tanggal"}),Object(v.jsx)(d.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){s(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(v.jsxs)(d.h,{md:"6",sm:"12",className:"mb-1",children:[Object(v.jsx)(d.r,{className:"form-label",for:"lastNameMulti",children:"Pematri"}),Object(v.jsx)(d.o,{type:"text",name:"nib",id:"nib",onChange:function(e){r(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(v.jsxs)(d.h,{md:"6",sm:"12",className:"mb-1",children:[Object(v.jsx)(d.r,{className:"form-label",for:"lastNameMulti",children:"Materi yang disampaikan"}),Object(v.jsx)(d.o,{type:"text",name:"nib",id:"nib",onChange:function(e){h(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(v.jsx)(d.h,{sm:"12",children:Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsx)(d.b,{className:"me-1",color:"primary",onClick:function(e){return e.preventDefault()},children:"Submit"})})})]})})]})}),z=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"suspended",label:"Suspended"}],S=[{value:"uk",label:"UK"},{value:"usa",label:"USA"},{value:"france",label:"France"},{value:"russia",label:"Russia"},{value:"canada",label:"Canada"}],P=[{value:"english",label:"English"},{value:"spanish",label:"Spanish"},{value:"french",label:"French"},{value:"german",label:"German"},{value:"dutch",label:"Dutch"}],E={firstName:"Bob",lastName:"Barton",username:"bob.dev"},T=function(){var e=Object(i.useState)(""),a=Object(t.a)(e,2),s=(a[0],a[1],Object(i.useState)("")),c=Object(t.a)(s,2),l=(c[0],c[1],Object(i.useState)("")),r=Object(t.a)(l,2),n=(r[0],r[1],new b.a,Object(m.f)(),Object(i.useState)(!1)),g=Object(t.a)(n,2),y=g[0],k=g[1],w=Object(f.e)({defaultValues:E}),C=w.control,D=w.setError,T=w.handleSubmit,F=w.formState.errors;return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsxs)(d.u,{isOpen:y,toggle:function(){return k(!y)},className:"modal-dialog-centered modal-lg",children:[Object(v.jsx)(d.w,{className:"bg-transparent",toggle:function(){return k(!y)}}),Object(v.jsxs)(d.v,{className:"px-sm-5 mx-50 pb-5",children:[Object(v.jsxs)("div",{className:"text-center mb-2",children:[Object(v.jsx)("h1",{className:"mb-1",children:"Tambah Data Tabel"}),Object(v.jsx)("p",{children:"Tambah data tabelmu sekarang"})]}),Object(v.jsxs)(d.A,{tag:"form",className:"gy-1 pt-75",onSubmit:T((function(e){if(Object.values(e).every((function(e){return e.length>0})))return null;for(var a in e)0===e[a].length&&D(a,{type:"manual"})})),children:[Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"firstName",children:"First Name"}),Object(v.jsx)(f.a,{control:C,name:"firstName",render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"firstName",placeholder:"John",value:a.value,invalid:F.firstName&&!0}))}}),F.firstName&&Object(v.jsx)(d.n,{children:"Please enter a valid First Name"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"lastName",children:"Last Name"}),Object(v.jsx)(f.a,{name:"lastName",control:C,render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"lastName",placeholder:"Doe",invalid:F.lastName&&!0}))}}),F.lastName&&Object(v.jsx)(d.n,{children:"Please enter a valid Last Name"})]}),Object(v.jsxs)(d.h,{xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"username",children:"Username"}),Object(v.jsx)(f.a,{name:"username",control:C,render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"username",placeholder:"john.doe.007",invalid:F.username&&!0}))}}),F.username&&Object(v.jsx)(d.n,{children:"Please enter a valid Username"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"email",children:"Billing Email"}),Object(v.jsx)(d.o,{type:"email",id:"email",placeholder:"example@domain.com"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"status",children:"Status:"}),Object(v.jsx)(p.a,{id:"status",isClearable:!1,className:"react-select",classNamePrefix:"select",options:z,theme:N.d,defaultValue:z[0]})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"tax-id",children:"Tax ID"}),Object(v.jsx)(d.o,{id:"tax-id",defaultValue:"Tax-8894",placeholder:"Tax-1234"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"contact",children:"Contact"}),Object(v.jsx)(d.o,{id:"contact",defaultValue:"+1 609 933 4422",placeholder:"+1 609 933 4422"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"language",children:"Language"}),Object(v.jsx)(p.a,{id:"language",isClearable:!1,className:"react-select",classNamePrefix:"select",options:P,theme:N.d,defaultValue:P[0]})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"country",children:"Country"}),Object(v.jsx)(p.a,{id:"country",isClearable:!1,className:"react-select",classNamePrefix:"select",options:S,theme:N.d,defaultValue:S[0]})]}),Object(v.jsx)(d.h,{xs:12,children:Object(v.jsxs)("div",{className:"d-flex align-items-center",children:[Object(v.jsxs)("div",{className:"form-switch",children:[Object(v.jsx)(d.o,{type:"switch",defaultChecked:!0,id:"billing-switch",name:"billing-switch"}),Object(v.jsxs)(d.r,{className:"form-check-label",htmlFor:"billing-switch",children:[Object(v.jsx)("span",{className:"switch-icon-left",children:Object(v.jsx)(h.a,{size:14})}),Object(v.jsx)("span",{className:"switch-icon-right",children:Object(v.jsx)(o.a,{size:14})})]})]}),Object(v.jsx)(d.r,{className:"form-check-label fw-bolder",htmlFor:"billing-switch",children:"Use as a billing address?"})]})}),Object(v.jsxs)(d.h,{xs:12,className:"text-center mt-2 pt-50",children:[Object(v.jsx)(d.b,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(v.jsx)(d.b,{type:"reset",color:"secondary",outline:!0,onClick:function(){return k(!1)},children:"Discard"})]})]})]})]}),Object(v.jsxs)("div",{className:"content-header",children:[Object(v.jsx)("h3",{className:"mb-0",children:"Halaman 3"}),Object(v.jsx)("small",{className:"text-muted",children:"Daftar Hadir Pelatihan Internal"})]}),Object(v.jsxs)(d.B,{responsive:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"No."}),Object(v.jsx)("th",{children:"Nama Peserta"}),Object(v.jsx)("th",{children:"Jabatan"}),Object(v.jsx)("th",{children:"Nilai Pelatihan"}),Object(v.jsx)("th",{children:"Menu"})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"1."})}),Object(v.jsx)("td",{children:"Rudi"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"50"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.D,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"2."})}),Object(v.jsx)("td",{children:"Ronald"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"50"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.D,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"3."})}),Object(v.jsx)("td",{children:"Jack"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"50"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.D,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"4."})}),Object(v.jsx)("td",{children:"Jerry"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"50"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.D,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]})]})]}),Object(v.jsx)(d.h,{sm:"12",children:Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsx)(d.b,{className:"me-1",color:"primary",onClick:function(){return k(!0)},children:"Tambah"})})})]})};a.default=function(){var e=Object(i.useRef)(null),a=Object(i.useState)(null),s=Object(t.a)(a,2),j=s[0],d=s[1],b=[{id:"hal1",title:"Halaman 1",subtitle:"Surat Keputusan",icon:Object(v.jsx)(c.a,{size:18}),content:Object(v.jsx)(C,{stepper:j,type:"wizard-modern"})},{id:"hal2",title:"Halaman 2",subtitle:"Daftar Hadir Pelatihan Internal Pt.1",icon:Object(v.jsx)(l.a,{size:18}),content:Object(v.jsx)(D,{stepper:j,type:"wizard-modern"})},{id:"step-address",title:"Halaman 3",subtitle:"Daftar Hadir Pelatihan Internal Pt.2",icon:Object(v.jsx)(r.a,{size:18}),content:Object(v.jsx)(T,{stepper:j,type:"wizard-modern"})}];return Object(v.jsx)("div",{children:Object(v.jsx)(n.a,{type:"modern-vertical",ref:e,steps:b,options:{linear:!1},instance:function(e){return d(e)}})})}},508:function(e,a,s){"use strict";s.p},509:function(e,a,s){"use strict";s.p},510:function(e,a,s){"use strict";s.p},511:function(e,a,s){"use strict";s.p},606:function(e,a,s){"use strict";var t=s(1),c=s.n(t),l=s(443),r=s.n(l);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},n.apply(this,arguments)}function i(e,a){if(null==e)return{};var s,t,c=function(e,a){if(null==e)return{};var s,t,c={},l=Object.keys(e);for(t=0;t<l.length;t++)s=l[t],a.indexOf(s)>=0||(c[s]=e[s]);return c}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)s=l[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}var j=Object(t.forwardRef)((function(e,a){var s=e.color,t=void 0===s?"currentColor":s,l=e.size,r=void 0===l?24:l,j=i(e,["color","size"]);return c.a.createElement("svg",n({ref:a,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},j),c.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),c.a.createElement("circle",{cx:"12",cy:"10",r:"3"}))}));j.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},j.displayName="MapPin",a.a=j}}]);
//# sourceMappingURL=16.2baeead8.chunk.js.map