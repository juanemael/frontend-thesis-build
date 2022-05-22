(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[12],{1003:function(e,a,s){"use strict";s.r(a);var t=s(12),c=s(990),l=s(970),r=s(597),n=s(487),i=s(1),j=s(13),d=(s(82),s(45),s(81)),b=(s(452),s(453)),m=(s(450),s(5)),h=(s(480),s(481),s(482),s(483),s(986)),o=s(968),O=s(987),x=s(988),u=s(989),f=s(454),p=s(458),N=s(451),v=(s(459),s(6)),g=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"suspended",label:"Suspended"}],y=[{value:"uk",label:"UK"},{value:"usa",label:"USA"},{value:"france",label:"France"},{value:"russia",label:"Russia"},{value:"canada",label:"Canada"}],C=[{value:"english",label:"English"},{value:"spanish",label:"Spanish"},{value:"french",label:"French"},{value:"german",label:"German"},{value:"dutch",label:"Dutch"}],k={firstName:"Bob",lastName:"Barton",username:"bob.dev"},w=function(){var e=Object(i.useState)(""),a=Object(t.a)(e,2),s=(a[0],a[1],Object(i.useState)("")),c=Object(t.a)(s,2),l=(c[0],c[1],Object(i.useState)("")),r=Object(t.a)(l,2),n=(r[0],r[1],new b.a,Object(m.f)(),Object(i.useState)(!1)),w=Object(t.a)(n,2),z=w[0],D=w[1],S=Object(f.e)({defaultValues:k}),P=S.control,E=S.setError,T=S.handleSubmit,F=S.formState.errors;return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsxs)(d.u,{isOpen:z,toggle:function(){return D(!z)},className:"modal-dialog-centered modal-lg",children:[Object(v.jsx)(d.w,{className:"bg-transparent",toggle:function(){return D(!z)}}),Object(v.jsxs)(d.v,{className:"px-sm-5 mx-50 pb-5",children:[Object(v.jsxs)("div",{className:"text-center mb-2",children:[Object(v.jsx)("h1",{className:"mb-1",children:"Tambah Data Tabel"}),Object(v.jsx)("p",{children:"Tambah data tabelmu sekarang"})]}),Object(v.jsxs)(d.A,{tag:"form",className:"gy-1 pt-75",onSubmit:T((function(e){if(Object.values(e).every((function(e){return e.length>0})))return null;for(var a in e)0===e[a].length&&E(a,{type:"manual"})})),children:[Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"firstName",children:"First Name"}),Object(v.jsx)(f.a,{control:P,name:"firstName",render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"firstName",placeholder:"John",value:a.value,invalid:F.firstName&&!0}))}}),F.firstName&&Object(v.jsx)(d.n,{children:"Please enter a valid First Name"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"lastName",children:"Last Name"}),Object(v.jsx)(f.a,{name:"lastName",control:P,render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"lastName",placeholder:"Doe",invalid:F.lastName&&!0}))}}),F.lastName&&Object(v.jsx)(d.n,{children:"Please enter a valid Last Name"})]}),Object(v.jsxs)(d.h,{xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"username",children:"Username"}),Object(v.jsx)(f.a,{name:"username",control:P,render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"username",placeholder:"john.doe.007",invalid:F.username&&!0}))}}),F.username&&Object(v.jsx)(d.n,{children:"Please enter a valid Username"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"email",children:"Billing Email"}),Object(v.jsx)(d.o,{type:"email",id:"email",placeholder:"example@domain.com"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"status",children:"Status:"}),Object(v.jsx)(p.a,{id:"status",isClearable:!1,className:"react-select",classNamePrefix:"select",options:g,theme:N.d,defaultValue:g[0]})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"tax-id",children:"Tax ID"}),Object(v.jsx)(d.o,{id:"tax-id",defaultValue:"Tax-8894",placeholder:"Tax-1234"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"contact",children:"Contact"}),Object(v.jsx)(d.o,{id:"contact",defaultValue:"+1 609 933 4422",placeholder:"+1 609 933 4422"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"language",children:"Language"}),Object(v.jsx)(p.a,{id:"language",isClearable:!1,className:"react-select",classNamePrefix:"select",options:C,theme:N.d,defaultValue:C[0]})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"country",children:"Country"}),Object(v.jsx)(p.a,{id:"country",isClearable:!1,className:"react-select",classNamePrefix:"select",options:y,theme:N.d,defaultValue:y[0]})]}),Object(v.jsx)(d.h,{xs:12,children:Object(v.jsxs)("div",{className:"d-flex align-items-center",children:[Object(v.jsxs)("div",{className:"form-switch",children:[Object(v.jsx)(d.o,{type:"switch",defaultChecked:!0,id:"billing-switch",name:"billing-switch"}),Object(v.jsxs)(d.r,{className:"form-check-label",htmlFor:"billing-switch",children:[Object(v.jsx)("span",{className:"switch-icon-left",children:Object(v.jsx)(h.a,{size:14})}),Object(v.jsx)("span",{className:"switch-icon-right",children:Object(v.jsx)(o.a,{size:14})})]})]}),Object(v.jsx)(d.r,{className:"form-check-label fw-bolder",htmlFor:"billing-switch",children:"Use as a billing address?"})]})}),Object(v.jsxs)(d.h,{xs:12,className:"text-center mt-2 pt-50",children:[Object(v.jsx)(d.b,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(v.jsx)(d.b,{type:"reset",color:"secondary",outline:!0,onClick:function(){return D(!1)},children:"Discard"})]})]})]})]}),Object(v.jsxs)("div",{className:"content-header",children:[Object(v.jsx)("h3",{className:"mb-0",children:"Halaman 1"}),Object(v.jsx)("small",{className:"text-muted",children:"Surat Keputusan Penetapan Tim Manajemen Hlala Dan/Atau Penyelia Halal"})]}),Object(v.jsxs)(d.B,{responsive:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"No."}),Object(v.jsx)("th",{children:"Nama"}),Object(v.jsx)("th",{children:"Jabatan"}),Object(v.jsx)("th",{children:"Posisi di Tim"}),Object(v.jsx)("th",{children:"Menu"})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"1."})}),Object(v.jsx)("td",{children:"Rudi"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"Advisor"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.C,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"2."})}),Object(v.jsx)("td",{children:"Ronald"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"Advisor"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.C,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"3."})}),Object(v.jsx)("td",{children:"Jack"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"Advisor"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.C,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"4."})}),Object(v.jsx)("td",{children:"Jerry"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"Advisor"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.C,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]})]})]}),Object(v.jsx)(d.h,{sm:"12",children:Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsx)(d.b,{className:"me-1",color:"primary",onClick:function(){return D(!0)},children:"Tambah"})})})]})},z=(s(469),s(476),s(2),function(){var e=Object(i.useState)(""),a=Object(t.a)(e,2),s=(a[0],a[1]),c=Object(i.useState)(""),l=Object(t.a)(c,2),r=(l[0],l[1]),n=Object(i.useState)(""),j=Object(t.a)(n,2),h=(j[0],j[1]);new b.a,Object(m.f)();return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsxs)("div",{className:"content-header",children:[Object(v.jsx)("h3",{className:"mb-0",children:"Halaman 1"}),Object(v.jsx)("small",{className:"text-muted",children:"Cari tahu tentang kebijakan halal"})]}),Object(v.jsx)(d.m,{children:Object(v.jsxs)(d.A,{children:[Object(v.jsxs)(d.h,{md:"6",sm:"12",className:"mb-1",children:[Object(v.jsx)(d.r,{className:"form-label",for:"nameMulti",children:"Hari/Tanggal"}),Object(v.jsx)(d.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){s(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(v.jsxs)(d.h,{md:"6",sm:"12",className:"mb-1",children:[Object(v.jsx)(d.r,{className:"form-label",for:"lastNameMulti",children:"Pematri"}),Object(v.jsx)(d.o,{type:"text",name:"nib",id:"nib",onChange:function(e){r(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(v.jsxs)(d.h,{md:"6",sm:"12",className:"mb-1",children:[Object(v.jsx)(d.r,{className:"form-label",for:"lastNameMulti",children:"Materi yang disampaikan"}),Object(v.jsx)(d.o,{type:"text",name:"nib",id:"nib",onChange:function(e){h(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(v.jsx)(d.h,{sm:"12",children:Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsx)(d.b,{className:"me-1",color:"primary",onClick:function(e){return e.preventDefault()},children:"Submit"})})})]})})]})}),D=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"suspended",label:"Suspended"}],S=[{value:"uk",label:"UK"},{value:"usa",label:"USA"},{value:"france",label:"France"},{value:"russia",label:"Russia"},{value:"canada",label:"Canada"}],P=[{value:"english",label:"English"},{value:"spanish",label:"Spanish"},{value:"french",label:"French"},{value:"german",label:"German"},{value:"dutch",label:"Dutch"}],E={firstName:"Bob",lastName:"Barton",username:"bob.dev"},T=function(){var e=Object(i.useState)(""),a=Object(t.a)(e,2),s=(a[0],a[1],Object(i.useState)("")),c=Object(t.a)(s,2),l=(c[0],c[1],Object(i.useState)("")),r=Object(t.a)(l,2),n=(r[0],r[1],new b.a,Object(m.f)(),Object(i.useState)(!1)),g=Object(t.a)(n,2),y=g[0],C=g[1],k=Object(f.e)({defaultValues:E}),w=k.control,z=k.setError,T=k.handleSubmit,F=k.formState.errors;return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsxs)(d.u,{isOpen:y,toggle:function(){return C(!y)},className:"modal-dialog-centered modal-lg",children:[Object(v.jsx)(d.w,{className:"bg-transparent",toggle:function(){return C(!y)}}),Object(v.jsxs)(d.v,{className:"px-sm-5 mx-50 pb-5",children:[Object(v.jsxs)("div",{className:"text-center mb-2",children:[Object(v.jsx)("h1",{className:"mb-1",children:"Tambah Data Tabel"}),Object(v.jsx)("p",{children:"Tambah data tabelmu sekarang"})]}),Object(v.jsxs)(d.A,{tag:"form",className:"gy-1 pt-75",onSubmit:T((function(e){if(Object.values(e).every((function(e){return e.length>0})))return null;for(var a in e)0===e[a].length&&z(a,{type:"manual"})})),children:[Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"firstName",children:"First Name"}),Object(v.jsx)(f.a,{control:w,name:"firstName",render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"firstName",placeholder:"John",value:a.value,invalid:F.firstName&&!0}))}}),F.firstName&&Object(v.jsx)(d.n,{children:"Please enter a valid First Name"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"lastName",children:"Last Name"}),Object(v.jsx)(f.a,{name:"lastName",control:w,render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"lastName",placeholder:"Doe",invalid:F.lastName&&!0}))}}),F.lastName&&Object(v.jsx)(d.n,{children:"Please enter a valid Last Name"})]}),Object(v.jsxs)(d.h,{xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"username",children:"Username"}),Object(v.jsx)(f.a,{name:"username",control:w,render:function(e){var a=e.field;return Object(v.jsx)(d.o,Object(j.a)(Object(j.a)({},a),{},{id:"username",placeholder:"john.doe.007",invalid:F.username&&!0}))}}),F.username&&Object(v.jsx)(d.n,{children:"Please enter a valid Username"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"email",children:"Billing Email"}),Object(v.jsx)(d.o,{type:"email",id:"email",placeholder:"example@domain.com"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"status",children:"Status:"}),Object(v.jsx)(p.a,{id:"status",isClearable:!1,className:"react-select",classNamePrefix:"select",options:D,theme:N.d,defaultValue:D[0]})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"tax-id",children:"Tax ID"}),Object(v.jsx)(d.o,{id:"tax-id",defaultValue:"Tax-8894",placeholder:"Tax-1234"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"contact",children:"Contact"}),Object(v.jsx)(d.o,{id:"contact",defaultValue:"+1 609 933 4422",placeholder:"+1 609 933 4422"})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"language",children:"Language"}),Object(v.jsx)(p.a,{id:"language",isClearable:!1,className:"react-select",classNamePrefix:"select",options:P,theme:N.d,defaultValue:P[0]})]}),Object(v.jsxs)(d.h,{md:6,xs:12,children:[Object(v.jsx)(d.r,{className:"form-label",for:"country",children:"Country"}),Object(v.jsx)(p.a,{id:"country",isClearable:!1,className:"react-select",classNamePrefix:"select",options:S,theme:N.d,defaultValue:S[0]})]}),Object(v.jsx)(d.h,{xs:12,children:Object(v.jsxs)("div",{className:"d-flex align-items-center",children:[Object(v.jsxs)("div",{className:"form-switch",children:[Object(v.jsx)(d.o,{type:"switch",defaultChecked:!0,id:"billing-switch",name:"billing-switch"}),Object(v.jsxs)(d.r,{className:"form-check-label",htmlFor:"billing-switch",children:[Object(v.jsx)("span",{className:"switch-icon-left",children:Object(v.jsx)(h.a,{size:14})}),Object(v.jsx)("span",{className:"switch-icon-right",children:Object(v.jsx)(o.a,{size:14})})]})]}),Object(v.jsx)(d.r,{className:"form-check-label fw-bolder",htmlFor:"billing-switch",children:"Use as a billing address?"})]})}),Object(v.jsxs)(d.h,{xs:12,className:"text-center mt-2 pt-50",children:[Object(v.jsx)(d.b,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(v.jsx)(d.b,{type:"reset",color:"secondary",outline:!0,onClick:function(){return C(!1)},children:"Discard"})]})]})]})]}),Object(v.jsxs)("div",{className:"content-header",children:[Object(v.jsx)("h3",{className:"mb-0",children:"Halaman 3"}),Object(v.jsx)("small",{className:"text-muted",children:"Daftar Hadir Pelatihan Internal"})]}),Object(v.jsxs)(d.B,{responsive:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"No."}),Object(v.jsx)("th",{children:"Nama Peserta"}),Object(v.jsx)("th",{children:"Jabatan"}),Object(v.jsx)("th",{children:"Nilai Pelatihan"}),Object(v.jsx)("th",{children:"Menu"})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"1."})}),Object(v.jsx)("td",{children:"Rudi"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"50"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.C,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"2."})}),Object(v.jsx)("td",{children:"Ronald"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"50"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.C,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"3."})}),Object(v.jsx)("td",{children:"Jack"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"50"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.C,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"align-middle fw-bold",children:"4."})}),Object(v.jsx)("td",{children:"Jerry"}),Object(v.jsx)("td",{children:Object(v.jsx)(d.a,{pill:!0,color:"light-primary",className:"me-1",children:"CEO"})}),Object(v.jsx)("td",{children:"50"}),Object(v.jsx)("td",{children:Object(v.jsxs)(d.C,{children:[Object(v.jsx)(d.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(v.jsx)(O.a,{size:15})}),Object(v.jsxs)(d.k,{children:[Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(x.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(d.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(u.a,{className:"me-50",size:15})," ",Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]})]})]}),Object(v.jsx)(d.h,{sm:"12",children:Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsx)(d.b,{className:"me-1",color:"primary",onClick:function(){return C(!0)},children:"Tambah"})})})]})};a.default=function(){var e=Object(i.useRef)(null),a=Object(i.useState)(null),s=Object(t.a)(a,2),j=s[0],d=s[1],b=[{id:"hal1",title:"Halaman 1",subtitle:"Surat Keputusan",icon:Object(v.jsx)(c.a,{size:18}),content:Object(v.jsx)(w,{stepper:j,type:"wizard-modern"})},{id:"hal2",title:"Halaman 2",subtitle:"Daftar Hadir Pelatihan Internal Pt.1",icon:Object(v.jsx)(l.a,{size:18}),content:Object(v.jsx)(z,{stepper:j,type:"wizard-modern"})},{id:"step-address",title:"Halaman 3",subtitle:"Daftar Hadir Pelatihan Internal Pt.2",icon:Object(v.jsx)(r.a,{size:18}),content:Object(v.jsx)(T,{stepper:j,type:"wizard-modern"})}];return Object(v.jsx)("div",{children:Object(v.jsx)(n.a,{type:"modern-vertical",ref:e,steps:b,options:{linear:!1},instance:function(e){return d(e)}})})}},480:function(e,a,s){"use strict";s.p},481:function(e,a,s){"use strict";s.p},482:function(e,a,s){"use strict";s.p},483:function(e,a,s){"use strict";s.p},597:function(e,a,s){"use strict";var t=s(1),c=s.n(t),l=s(443),r=s.n(l);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},n.apply(this,arguments)}function i(e,a){if(null==e)return{};var s,t,c=function(e,a){if(null==e)return{};var s,t,c={},l=Object.keys(e);for(t=0;t<l.length;t++)s=l[t],a.indexOf(s)>=0||(c[s]=e[s]);return c}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)s=l[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}var j=Object(t.forwardRef)((function(e,a){var s=e.color,t=void 0===s?"currentColor":s,l=e.size,r=void 0===l?24:l,j=i(e,["color","size"]);return c.a.createElement("svg",n({ref:a,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},j),c.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),c.a.createElement("circle",{cx:"12",cy:"10",r:"3"}))}));j.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},j.displayName="MapPin",a.a=j}}]);
//# sourceMappingURL=12.1b382684.chunk.js.map