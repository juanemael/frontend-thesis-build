(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[10],{479:function(e,a,t){"use strict";var s=t(82),c=t(12),l=t(45),n=t.n(l),r=t(81),i=(t(469),t(476),t(452),t(2),t(1)),j=t(453),m=t(450),d=t.n(m),b=t(5),o=t(6);a.a=function(){var e=Object(i.useState)(""),a=Object(c.a)(e,2),t=a[0],l=a[1],m=Object(i.useState)(""),h=Object(c.a)(m,2),u=(h[0],h[1]),x=Object(i.useState)(""),O=Object(c.a)(x,2),f=(O[0],O[1]),p=new j.a,N=Object(b.f)(),g=function(){var e=Object(s.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama_perusahaan:t},e.prev=1,e.next=4,p.createCompanyProfile(a);case 4:if(!(s=e.sent).id&&!s.success){e.next=10;break}return e.next=8,d.a.fire("","Data berhasil di simpan","success").then((function(){N("/sjph/company_profile")}));case 8:e.next=12;break;case 10:return e.next=12,d.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,d.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("div",{className:"content-header",children:[Object(o.jsx)("h3",{className:"mb-0",children:"Halaman 1"}),Object(o.jsx)("small",{className:"text-muted",children:"Cari tahu tentang kebijakan halal"})]}),Object(o.jsx)(r.m,{children:Object(o.jsxs)(r.A,{children:[Object(o.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(o.jsx)(r.r,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(o.jsx)(r.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){l(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(o.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(o.jsx)(r.r,{className:"form-label",for:"lastNameMulti",children:"Tempat Persetujuan"}),Object(o.jsx)(r.o,{type:"text",name:"nib",id:"nib",onChange:function(e){u(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(o.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(o.jsx)(r.r,{className:"form-label",for:"lastNameMulti",children:"Tanggal Persetujuan"}),Object(o.jsx)(r.o,{type:"text",name:"nib",id:"nib",onChange:function(e){f(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(o.jsx)(r.h,{sm:"12",children:Object(o.jsx)("div",{className:"d-flex justify-content-end",children:Object(o.jsx)(r.b,{className:"me-1",color:"primary",onClick:g,children:"Submit"})})})]})})]})}},480:function(e,a,t){"use strict";t.p},481:function(e,a,t){"use strict";t.p},482:function(e,a,t){"use strict";t.p},483:function(e,a,t){"use strict";t.p},511:function(e,a,t){"use strict";var s=t(13),c=(t(82),t(12)),l=(t(45),t(81)),n=(t(452),t(1)),r=t(453),i=(t(450),t(5)),j=(t(480),t(481),t(482),t(483),t(986)),m=t(968),d=t(987),b=t(988),o=t(989),h=t(454),u=t(458),x=t(451),O=(t(459),t(6)),f=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"suspended",label:"Suspended"}],p=[{value:"uk",label:"UK"},{value:"usa",label:"USA"},{value:"france",label:"France"},{value:"russia",label:"Russia"},{value:"canada",label:"Canada"}],N=[{value:"english",label:"English"},{value:"spanish",label:"Spanish"},{value:"french",label:"French"},{value:"german",label:"German"},{value:"dutch",label:"Dutch"}],g={firstName:"Bob",lastName:"Barton",username:"bob.dev"};a.a=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=(a[0],a[1],Object(n.useState)("")),v=Object(c.a)(t,2),k=(v[0],v[1],Object(n.useState)("")),P=Object(c.a)(k,2),y=(P[0],P[1],new r.a,Object(i.f)(),Object(n.useState)(!1)),C=Object(c.a)(y,2),S=C[0],w=C[1],E=Object(h.e)({defaultValues:g}),_=E.control,z=E.setError,F=E.handleSubmit,M=E.formState.errors;return Object(O.jsxs)(n.Fragment,{children:[Object(O.jsxs)(l.u,{isOpen:S,toggle:function(){return w(!S)},className:"modal-dialog-centered modal-lg",children:[Object(O.jsx)(l.w,{className:"bg-transparent",toggle:function(){return w(!S)}}),Object(O.jsxs)(l.v,{className:"px-sm-5 mx-50 pb-5",children:[Object(O.jsxs)("div",{className:"text-center mb-2",children:[Object(O.jsx)("h1",{className:"mb-1",children:"Tambah Data Tabel"}),Object(O.jsx)("p",{children:"Tambah data tabelmu sekarang"})]}),Object(O.jsxs)(l.A,{tag:"form",className:"gy-1 pt-75",onSubmit:F((function(e){if(Object.values(e).every((function(e){return e.length>0})))return null;for(var a in e)0===e[a].length&&z(a,{type:"manual"})})),children:[Object(O.jsxs)(l.h,{md:6,xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"firstName",children:"First Name"}),Object(O.jsx)(h.a,{control:_,name:"firstName",render:function(e){var a=e.field;return Object(O.jsx)(l.o,Object(s.a)(Object(s.a)({},a),{},{id:"firstName",placeholder:"John",value:a.value,invalid:M.firstName&&!0}))}}),M.firstName&&Object(O.jsx)(l.n,{children:"Please enter a valid First Name"})]}),Object(O.jsxs)(l.h,{md:6,xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"lastName",children:"Last Name"}),Object(O.jsx)(h.a,{name:"lastName",control:_,render:function(e){var a=e.field;return Object(O.jsx)(l.o,Object(s.a)(Object(s.a)({},a),{},{id:"lastName",placeholder:"Doe",invalid:M.lastName&&!0}))}}),M.lastName&&Object(O.jsx)(l.n,{children:"Please enter a valid Last Name"})]}),Object(O.jsxs)(l.h,{xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"username",children:"Username"}),Object(O.jsx)(h.a,{name:"username",control:_,render:function(e){var a=e.field;return Object(O.jsx)(l.o,Object(s.a)(Object(s.a)({},a),{},{id:"username",placeholder:"john.doe.007",invalid:M.username&&!0}))}}),M.username&&Object(O.jsx)(l.n,{children:"Please enter a valid Username"})]}),Object(O.jsxs)(l.h,{md:6,xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"email",children:"Billing Email"}),Object(O.jsx)(l.o,{type:"email",id:"email",placeholder:"example@domain.com"})]}),Object(O.jsxs)(l.h,{md:6,xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"status",children:"Status:"}),Object(O.jsx)(u.a,{id:"status",isClearable:!1,className:"react-select",classNamePrefix:"select",options:f,theme:x.d,defaultValue:f[0]})]}),Object(O.jsxs)(l.h,{md:6,xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"tax-id",children:"Tax ID"}),Object(O.jsx)(l.o,{id:"tax-id",defaultValue:"Tax-8894",placeholder:"Tax-1234"})]}),Object(O.jsxs)(l.h,{md:6,xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"contact",children:"Contact"}),Object(O.jsx)(l.o,{id:"contact",defaultValue:"+1 609 933 4422",placeholder:"+1 609 933 4422"})]}),Object(O.jsxs)(l.h,{md:6,xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"language",children:"Language"}),Object(O.jsx)(u.a,{id:"language",isClearable:!1,className:"react-select",classNamePrefix:"select",options:N,theme:x.d,defaultValue:N[0]})]}),Object(O.jsxs)(l.h,{md:6,xs:12,children:[Object(O.jsx)(l.r,{className:"form-label",for:"country",children:"Country"}),Object(O.jsx)(u.a,{id:"country",isClearable:!1,className:"react-select",classNamePrefix:"select",options:p,theme:x.d,defaultValue:p[0]})]}),Object(O.jsx)(l.h,{xs:12,children:Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsxs)("div",{className:"form-switch",children:[Object(O.jsx)(l.o,{type:"switch",defaultChecked:!0,id:"billing-switch",name:"billing-switch"}),Object(O.jsxs)(l.r,{className:"form-check-label",htmlFor:"billing-switch",children:[Object(O.jsx)("span",{className:"switch-icon-left",children:Object(O.jsx)(j.a,{size:14})}),Object(O.jsx)("span",{className:"switch-icon-right",children:Object(O.jsx)(m.a,{size:14})})]})]}),Object(O.jsx)(l.r,{className:"form-check-label fw-bolder",htmlFor:"billing-switch",children:"Use as a billing address?"})]})}),Object(O.jsxs)(l.h,{xs:12,className:"text-center mt-2 pt-50",children:[Object(O.jsx)(l.b,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(O.jsx)(l.b,{type:"reset",color:"secondary",outline:!0,onClick:function(){return w(!1)},children:"Discard"})]})]})]})]}),Object(O.jsxs)("div",{className:"content-header",children:[Object(O.jsx)("h3",{className:"mb-0",children:"Halaman 2"}),Object(O.jsx)("small",{className:"text-muted",children:"Cari tahu tentang kebijakan halal"})]}),Object(O.jsxs)(l.B,{responsive:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"No."}),Object(O.jsx)("th",{children:"Tanggal Sosialisasi"}),Object(O.jsx)("th",{children:"Judul Kegiatan"}),Object(O.jsx)("th",{children:"Peserta"}),Object(O.jsx)("th",{children:"Bukti Hasil Sosialisasi"}),Object(O.jsx)("th",{children:"Menu"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"align-middle fw-bold",children:"1."})}),Object(O.jsx)("td",{children:"11-09-2022"}),Object(O.jsx)("td",{children:Object(O.jsx)(l.a,{pill:!0,color:"light-primary",className:"me-1",children:"Melakukan Halal"})}),Object(O.jsx)("td",{children:"5"}),Object(O.jsx)("td",{children:"Bukti"}),Object(O.jsx)("td",{children:Object(O.jsxs)(l.C,{children:[Object(O.jsx)(l.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(O.jsx)(d.a,{size:15})}),Object(O.jsxs)(l.k,{children:[Object(O.jsxs)(l.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(b.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(l.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(o.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"align-middle fw-bold",children:"2."})}),Object(O.jsx)("td",{children:"Ronald Frest"}),Object(O.jsx)("td",{children:Object(O.jsx)(l.a,{pill:!0,color:"light-success",className:"me-1",children:"Completed"})}),Object(O.jsx)("td",{children:"5"}),Object(O.jsx)("td",{children:"Bukti"}),Object(O.jsx)("td",{children:Object(O.jsxs)(l.C,{children:[Object(O.jsx)(l.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(O.jsx)(d.a,{size:15})}),Object(O.jsxs)(l.k,{children:[Object(O.jsxs)(l.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(b.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(l.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(o.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"align-middle fw-bold",children:"3."})}),Object(O.jsx)("td",{children:"Jack Obes"}),Object(O.jsx)("td",{children:Object(O.jsx)(l.a,{pill:!0,color:"light-info",className:"me-1",children:"Scheduled"})}),Object(O.jsx)("td",{children:"5"}),Object(O.jsx)("td",{children:"Bukti"}),Object(O.jsx)("td",{children:Object(O.jsxs)(l.C,{children:[Object(O.jsx)(l.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(O.jsx)(d.a,{size:15})}),Object(O.jsxs)(l.k,{children:[Object(O.jsxs)(l.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(b.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(l.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(o.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"align-middle fw-bold",children:"4."})}),Object(O.jsx)("td",{children:"Jerry Milton"}),Object(O.jsx)("td",{children:Object(O.jsx)(l.a,{pill:!0,color:"light-warning",className:"me-1",children:"Pending"})}),Object(O.jsx)("td",{children:"5"}),Object(O.jsx)("td",{children:"Bukti"}),Object(O.jsx)("td",{children:Object(O.jsxs)(l.C,{children:[Object(O.jsx)(l.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(O.jsx)(d.a,{size:15})}),Object(O.jsxs)(l.k,{children:[Object(O.jsxs)(l.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(b.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(O.jsxs)(l.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(o.a,{className:"me-50",size:15})," ",Object(O.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]})]})]}),Object(O.jsx)(l.h,{sm:"12",children:Object(O.jsx)("div",{className:"d-flex justify-content-end",children:Object(O.jsx)(l.b,{className:"me-1",color:"primary",onClick:function(){return w(!0)},children:"Tambah"})})})]})}},526:function(e,a,t){"use strict";var s=t(82),c=t(12),l=t(45),n=t.n(l),r=t(81),i=(t(469),t(476),t(452),t(2)),j=t.n(i),m=t(1),d=t(453),b=t(450),o=t.n(b),h=t(5),u=t(6);a.a=function(){var e=Object(m.useState)(""),a=Object(c.a)(e,2),t=a[0],l=a[1],i=Object(m.useState)(""),b=Object(c.a)(i,2),x=b[0],O=b[1],f=Object(m.useState)(""),p=Object(c.a)(f,2),N=p[0],g=p[1],v=Object(m.useState)(""),k=Object(c.a)(v,2),P=k[0],y=k[1],C=Object(m.useState)(""),S=Object(c.a)(C,2),w=S[0],E=S[1],_=Object(m.useState)(""),z=Object(c.a)(_,2),F=z[0],M=z[1],D=Object(m.useState)(""),T=Object(c.a)(D,2),B=(T[0],T[1]),H=Object(m.useState)(""),I=Object(c.a)(H,2),A=I[0],U=I[1],J=Object(m.useState)(""),L=Object(c.a)(J,2),V=L[0],K=L[1],R=Object(m.useState)(""),G=Object(c.a)(R,2),q=G[0],Q=G[1],W=Object(m.useState)(""),X=Object(c.a)(W,2),Y=X[0],Z=X[1],$=Object(m.useState)(""),ee=Object(c.a)($,2),ae=ee[0],te=ee[1],se=Object(m.useState)(""),ce=Object(c.a)(se,2),le=ce[0],ne=ce[1],re=Object(m.useState)(""),ie=Object(c.a)(re,2),je=ie[0],me=ie[1],de=Object(m.useState)(""),be=Object(c.a)(de,2),oe=be[0],he=be[1],ue=Object(m.useState)(""),xe=Object(c.a)(ue,2),Oe=xe[0],fe=xe[1],pe=new d.a,Ne=Object(h.f)(),ge=function(){var e=Object(s.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama_perusahaan:N,nomor_induk_berusaha:P,skala_usaha:w,nama_pimpinan:F,alamat_perusahaan:A,telp_fax_perusahaan:V,alamat_fasilitas_produksi:q,telp_fax_fasilitas_produksi:Y,contact_person_email:ae,nomor_izin_edar:le,jenis_produk:je,daerah_pemasaran:oe,sistem_pemasaran:Oe,tujuan:t,ruang_lingkup:x},e.prev=1,e.next=4,pe.createCompanyProfile(a);case 4:if(!(s=e.sent).id&&!s.success){e.next=10;break}return e.next=8,o.a.fire("","Data berhasil di simpan","success").then((function(){Ne("/sjph/company_profile")}));case 8:e.next=12;break;case 10:return e.next=12,o.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,o.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.e,{children:Object(u.jsx)(r.g,{tag:"h4",children:"Informasi Perusahaan"})}),Object(u.jsx)(r.d,{children:Object(u.jsx)(r.m,{children:Object(u.jsxs)(r.A,{children:[Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(u.jsx)(r.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){g(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"lastNameMulti",children:"Nomor Induk Berusaha"}),Object(u.jsx)(r.o,{type:"text",name:"nib",id:"nib",onChange:function(e){y(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"cityMulti",children:"Skala Usaha"}),Object(u.jsx)(r.o,{type:"text",name:"skalaUsaha",id:"skalaUsaha",onChange:function(e){E(e.target.value)},placeholder:"Skala Usaha"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"CountryMulti",children:"Nama Pimpinan"}),Object(u.jsx)(r.o,{type:"text",name:"namaPimpinan",id:"namaPimpinan",onChange:function(e){M(e.target.value)},placeholder:"Nama Pimpinan"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"CompanyMulti",children:"Nama Penyelia Halal"}),Object(u.jsx)(r.o,{type:"text",name:"namaPenyeliaHalal",id:"namaPenyeliaHalal",onChange:function(e){B(e.target.value)},placeholder:"Nama Penyelia Halal"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Alamat Perusahaan"}),Object(u.jsx)(r.o,{type:"text",name:"alamatPerusahaan",id:"alamatPerusahaan",onChange:function(e){U(e.target.value)},placeholder:"Alamat Perusahaan"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Perusahaan"}),Object(u.jsx)(r.o,{type:"text",name:"telpFaxPerusahaan",id:"telpFaxPerusahaan",onChange:function(e){K(e.target.value)},placeholder:"Telp/Fax Perusahaan"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Alamat Fasilitas Produksi"}),Object(u.jsx)(r.o,{type:"text",name:"alamatFasilitasProduksi",id:"alamatFasilitasProduksi",onChange:function(e){Q(e.target.value)},placeholder:"Alamat Fasilitas Produksi"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Fasilitas Produksi"}),Object(u.jsx)(r.o,{type:"text",name:"telpFaxFasilitasProduksi",id:"telpFaxFasilitasProduksi",onChange:function(e){Z(e.target.value)},placeholder:"Telp/Fax Fasilitas Produksi"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Contact Person / Email"}),Object(u.jsx)(r.o,{type:"text",name:"contactPersonEmail",id:"contactPersonEmail",onChange:function(e){te(e.target.value)},placeholder:"Contact Person / Email"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Nomor Izin Edar"}),Object(u.jsx)(r.o,{type:"text",name:"nomorIzinEdar",id:"nomorIzinEdar",onChange:function(e){ne(e.target.value)},placeholder:"Nomor Izin Edar"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Jenis Produk"}),Object(u.jsx)(r.o,{type:"text",name:"jenisProduk",id:"jenisProduk",onChange:function(e){me(e.target.value)},placeholder:"Jenis Produk"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Daerah Pemasaran"}),Object(u.jsx)(r.o,{type:"text",name:"daerahPemasaran",id:"daerahPemasaran",onChange:function(e){he(e.target.value)},placeholder:"Daerah Pemasaran"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Sistem Pemasaran"}),Object(u.jsx)(r.o,{type:"text",name:"sistemPemasaran",id:"sistemPemasaran",onChange:function(e){fe(e.target.value)},placeholder:"Sistem Pemasaran"})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Tujuan"}),Object(u.jsx)(r.o,{name:"tujuan",value:t,type:"textarea",id:"tujuan",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return l(e.target.value)},className:j()({"text-danger":t.length>20})}),Object(u.jsx)("span",{className:j()("textarea-counter-value float-end",{"bg-danger":t.length>20}),children:"".concat(t.length,"/20")})]}),Object(u.jsxs)(r.h,{md:"6",sm:"12",className:"mb-1",children:[Object(u.jsx)(r.r,{className:"form-label",for:"EmailMulti",children:"Ruang Lingkup"}),Object(u.jsx)(r.o,{name:"ruangLingkup",value:x,type:"textarea",id:"ruangLingkup",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return O(e.target.value)},className:j()({"text-danger":x.length>20})}),Object(u.jsx)("span",{className:j()("textarea-counter-value float-end",{"bg-danger":x.length>20}),children:"".concat(x.length,"/20")})]}),Object(u.jsx)(r.h,{sm:"12",children:Object(u.jsx)("div",{className:"d-flex justify-content-end",children:Object(u.jsx)(r.b,{className:"me-1",color:"primary",onClick:ge,children:"Submit"})})})]})})})]})}},996:function(e,a,t){"use strict";t.r(a);var s=t(12),c=(t(526),t(479)),l=t(511),n=t(990),r=t(970),i=t(487),j=t(1),m=t(6);a.default=function(){var e=Object(j.useRef)(null),a=Object(j.useState)(null),t=Object(s.a)(a,2),d=t[0],b=t[1],o=[{id:"hal1",title:"Halaman 1",subtitle:"Keterangan Kriteria",icon:Object(m.jsx)(n.a,{size:18}),content:Object(m.jsx)(c.a,{stepper:d,type:"wizard-modern"})},{id:"hal2",title:"Halaman 2",subtitle:"Media Komunikasi Table",icon:Object(m.jsx)(r.a,{size:18}),content:Object(m.jsx)(l.a,{stepper:d,type:"wizard-modern"})}];return Object(m.jsx)("div",{children:Object(m.jsx)(i.a,{type:"modern-vertical",ref:e,steps:o,options:{linear:!1},instance:function(e){return b(e)}})})}}}]);
//# sourceMappingURL=10.34cf6699.chunk.js.map