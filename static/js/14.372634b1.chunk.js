(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[14],{451:function(e,a,t){},452:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t(82),n=t(443),r=t(442),c=t(45),i=t.n(c),l=t(458),o=Object(n.a)((function e(){Object(r.a)(this,e),this.getAll=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profiles","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile/".concat(a),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.deleteUser=function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile/".concat(a),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.updateUser=function(){var e=Object(s.a)(i.a.mark((function e(a,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile/".concat(a),"PUT",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(s.a)(i.a.mark((function e(a,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile/".concat(a),"POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),this.createCompanyProfile=function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile","POST",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}))},458:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var s=t(82),n=t(443),r=t(442),c=t(45),i=t.n(c),l=t(459),o=t.n(l),j=Object(n.a)((function e(){Object(r.a)(this,e)}));j.set=function(){var e=Object(s.a)(i.a.mark((function e(a,t,s){var n,r,c,l,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(s)),c={method:t,headers:{"Content-Type":"application/json",Authorization:r?"bearer ".concat(r):null,Accept:"application/json"},body:JSON.stringify(s)},e.next=5,fetch(o.a.base_url+a,c);case 5:if(!(l=e.sent).ok){e.next=8;break}return e.abrupt("return",l.json());case 8:return e.next=10,l.json();case 10:if(j=e.sent,console.log(j),console.log(j.msg),"JWT_EXPIRED"!==j.code&&"NO_TOKEN_PROVIDED"!==j.code&&"INVALID_TOKEN"!==j.code&&"BAD_TOKEN_FORMAT"!==j.code&&"NO_SECRET_DEFINED"!==j.code&&"JWT_MALFORMED"!==j.error_message&&"JWT_MALFORMED"!==(null===(n=j.error_message)||void 0===n?void 0:n.msg)&&"JWT_EXPIRED"!==j.error_message&&"SUBSCRIPTION_EXPIRED"!==j.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),j;case 18:throw j;case 19:case"end":return e.stop()}}),e)})));return function(a,t,s){return e.apply(this,arguments)}}(),j.setMultipart=function(){var e=Object(s.a)(i.a.mark((function e(a,t,s){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.token||localStorage.token,e.next=3,fetch(o.a.base_url+a,{method:t,headers:{Authorization:n?"bearer ".concat(n):null,"Access-Control-Allow-Origin":"*"},body:s});case 3:if(!(r=e.sent).ok){e.next=9;break}return console.log(r),e.abrupt("return",r.json());case 9:return e.next=11,r.json();case 11:throw c=e.sent,console.log(c),c;case 14:case"end":return e.stop()}}),e)})));return function(a,t,s){return e.apply(this,arguments)}}()},459:function(e,a){e.exports={base_url:"https://api.pasporumkm.com"}},472:function(e,a,t){"use strict";var s=t(82),n=t(12),r=t(45),c=t.n(r),i=t(81),l=(t(465),t(471),t(451),t(2)),o=t.n(l),j=t(1),d=t(452),u=t(455),m=t.n(u),b=t(5),h=t(6);a.a=function(){var e=Object(j.useState)(""),a=Object(n.a)(e,2),t=a[0],r=a[1],l=Object(j.useState)(""),u=Object(n.a)(l,2),p=u[0],O=u[1],x=Object(j.useState)(""),f=Object(n.a)(x,2),g=f[0],N=f[1],v=Object(j.useState)(""),k=Object(n.a)(v,2),y=k[0],P=k[1],_=Object(j.useState)(""),w=Object(n.a)(_,2),E=w[0],C=w[1],S=Object(j.useState)(""),z=Object(n.a)(S,2),D=z[0],M=z[1],T=Object(j.useState)(""),F=Object(n.a)(T,2),A=(F[0],F[1]),I=Object(j.useState)(""),B=Object(n.a)(I,2),H=B[0],R=B[1],J=Object(j.useState)(""),L=Object(n.a)(J,2),U=L[0],K=L[1],W=Object(j.useState)(""),V=Object(n.a)(W,2),X=V[0],G=V[1],Y=Object(j.useState)(""),q=Object(n.a)(Y,2),Q=q[0],Z=q[1],$=Object(j.useState)(""),ee=Object(n.a)($,2),ae=ee[0],te=ee[1],se=Object(j.useState)(""),ne=Object(n.a)(se,2),re=ne[0],ce=ne[1],ie=Object(j.useState)(""),le=Object(n.a)(ie,2),oe=le[0],je=le[1],de=Object(j.useState)(""),ue=Object(n.a)(de,2),me=ue[0],be=ue[1],he=Object(j.useState)(""),pe=Object(n.a)(he,2),Oe=pe[0],xe=pe[1],fe=new d.a,ge=Object(b.f)(),Ne=function(){var e=Object(s.a)(c.a.mark((function e(){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama_perusahaan:g,nomor_induk_berusaha:y,skala_usaha:E,nama_pimpinan:D,alamat_perusahaan:H,telp_fax_perusahaan:U,alamat_fasilitas_produksi:X,telp_fax_fasilitas_produksi:Q,contact_person_email:ae,nomor_izin_edar:re,jenis_produk:oe,daerah_pemasaran:me,sistem_pemasaran:Oe,tujuan:t,ruang_lingkup:p},e.prev=1,e.next=4,fe.createCompanyProfile(a);case 4:if(!(s=e.sent).id&&!s.success){e.next=10;break}return e.next=8,m.a.fire("","Data berhasil di simpan","success").then((function(){ge("/sjph/company_profile")}));case 8:e.next=12;break;case 10:return e.next=12,m.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,m.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.e,{children:Object(h.jsx)(i.g,{tag:"h4",children:"Informasi Perusahaan"})}),Object(h.jsx)(i.d,{children:Object(h.jsx)(i.m,{children:Object(h.jsxs)(i.y,{children:[Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(h.jsx)(i.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){N(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"lastNameMulti",children:"Nomor Induk Berusaha"}),Object(h.jsx)(i.o,{type:"text",name:"nib",id:"nib",onChange:function(e){P(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"cityMulti",children:"Skala Usaha"}),Object(h.jsx)(i.o,{type:"text",name:"skalaUsaha",id:"skalaUsaha",onChange:function(e){C(e.target.value)},placeholder:"Skala Usaha"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"CountryMulti",children:"Nama Pimpinan"}),Object(h.jsx)(i.o,{type:"text",name:"namaPimpinan",id:"namaPimpinan",onChange:function(e){M(e.target.value)},placeholder:"Nama Pimpinan"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"CompanyMulti",children:"Nama Penyelia Halal"}),Object(h.jsx)(i.o,{type:"text",name:"namaPenyeliaHalal",id:"namaPenyeliaHalal",onChange:function(e){A(e.target.value)},placeholder:"Nama Penyelia Halal"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Alamat Perusahaan"}),Object(h.jsx)(i.o,{type:"text",name:"alamatPerusahaan",id:"alamatPerusahaan",onChange:function(e){R(e.target.value)},placeholder:"Alamat Perusahaan"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Perusahaan"}),Object(h.jsx)(i.o,{type:"text",name:"telpFaxPerusahaan",id:"telpFaxPerusahaan",onChange:function(e){K(e.target.value)},placeholder:"Telp/Fax Perusahaan"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Alamat Fasilitas Produksi"}),Object(h.jsx)(i.o,{type:"text",name:"alamatFasilitasProduksi",id:"alamatFasilitasProduksi",onChange:function(e){G(e.target.value)},placeholder:"Alamat Fasilitas Produksi"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Fasilitas Produksi"}),Object(h.jsx)(i.o,{type:"text",name:"telpFaxFasilitasProduksi",id:"telpFaxFasilitasProduksi",onChange:function(e){Z(e.target.value)},placeholder:"Telp/Fax Fasilitas Produksi"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Contact Person / Email"}),Object(h.jsx)(i.o,{type:"text",name:"contactPersonEmail",id:"contactPersonEmail",onChange:function(e){te(e.target.value)},placeholder:"Contact Person / Email"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Nomor Izin Edar"}),Object(h.jsx)(i.o,{type:"text",name:"nomorIzinEdar",id:"nomorIzinEdar",onChange:function(e){ce(e.target.value)},placeholder:"Nomor Izin Edar"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Jenis Produk"}),Object(h.jsx)(i.o,{type:"text",name:"jenisProduk",id:"jenisProduk",onChange:function(e){je(e.target.value)},placeholder:"Jenis Produk"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Daerah Pemasaran"}),Object(h.jsx)(i.o,{type:"text",name:"daerahPemasaran",id:"daerahPemasaran",onChange:function(e){be(e.target.value)},placeholder:"Daerah Pemasaran"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Sistem Pemasaran"}),Object(h.jsx)(i.o,{type:"text",name:"sistemPemasaran",id:"sistemPemasaran",onChange:function(e){xe(e.target.value)},placeholder:"Sistem Pemasaran"})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Tujuan"}),Object(h.jsx)(i.o,{name:"tujuan",value:t,type:"textarea",id:"tujuan",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return r(e.target.value)},className:o()({"text-danger":t.length>20})}),Object(h.jsx)("span",{className:o()("textarea-counter-value float-end",{"bg-danger":t.length>20}),children:"".concat(t.length,"/20")})]}),Object(h.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(i.r,{className:"form-label",for:"EmailMulti",children:"Ruang Lingkup"}),Object(h.jsx)(i.o,{name:"ruangLingkup",value:p,type:"textarea",id:"ruangLingkup",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return O(e.target.value)},className:o()({"text-danger":p.length>20})}),Object(h.jsx)("span",{className:o()("textarea-counter-value float-end",{"bg-danger":p.length>20}),children:"".concat(p.length,"/20")})]}),Object(h.jsx)(i.h,{sm:"12",children:Object(h.jsx)("div",{className:"d-flex justify-content-end",children:Object(h.jsx)(i.b,{className:"me-1",color:"primary",onClick:Ne,children:"Submit"})})})]})})})]})}},477:function(e,a,t){"use strict";var s=t(82),n=t(12),r=t(45),c=t.n(r),i=t(81),l=(t(465),t(471),t(451),t(2),t(1)),o=t(452),j=t(455),d=t.n(j),u=t(5),m=t(6);a.a=function(){var e=Object(l.useState)(""),a=Object(n.a)(e,2),t=a[0],r=a[1],j=Object(l.useState)(""),b=Object(n.a)(j,2),h=(b[0],b[1]),p=Object(l.useState)(""),O=Object(n.a)(p,2),x=(O[0],O[1]),f=new o.a,g=Object(u.f)(),N=function(){var e=Object(s.a)(c.a.mark((function e(){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama_perusahaan:t},e.prev=1,e.next=4,f.createCompanyProfile(a);case 4:if(!(s=e.sent).id&&!s.success){e.next=10;break}return e.next=8,d.a.fire("","Data berhasil di simpan","success").then((function(){g("/sjph/company_profile")}));case 8:e.next=12;break;case 10:return e.next=12,d.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,d.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(l.Fragment,{children:[Object(m.jsxs)("div",{className:"content-header",children:[Object(m.jsx)("h3",{className:"mb-0",children:"Halaman 1"}),Object(m.jsx)("small",{className:"text-muted",children:"Cari tahu tentang kebijakan halal"})]}),Object(m.jsx)(i.m,{children:Object(m.jsxs)(i.y,{children:[Object(m.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(m.jsx)(i.r,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(m.jsx)(i.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){r(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(m.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(m.jsx)(i.r,{className:"form-label",for:"lastNameMulti",children:"Tempat Persetujuan"}),Object(m.jsx)(i.o,{type:"text",name:"nib",id:"nib",onChange:function(e){h(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(m.jsxs)(i.h,{md:"6",sm:"12",className:"mb-1",children:[Object(m.jsx)(i.r,{className:"form-label",for:"lastNameMulti",children:"Tanggal Persetujuan"}),Object(m.jsx)(i.o,{type:"text",name:"nib",id:"nib",onChange:function(e){x(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(m.jsx)(i.h,{sm:"12",children:Object(m.jsx)("div",{className:"d-flex justify-content-end",children:Object(m.jsx)(i.b,{className:"me-1",color:"primary",onClick:N,children:"Submit"})})})]})})]})}},503:function(e,a,t){"use strict";a.a=t.p+"static/media/react.a5aca72a.svg"},504:function(e,a,t){"use strict";a.a=t.p+"static/media/vuejs.37d54a37.svg"},505:function(e,a,t){"use strict";t.p},506:function(e,a,t){"use strict";a.a=t.p+"static/media/bootstrap.689106fb.svg"},531:function(e,a,t){"use strict";var s=t(82),n=t(12),r=t(45),c=t.n(r),i=t(81),l=(t(451),t(1)),o=t(452),j=t(455),d=t.n(j),u=t(5),m=t(503),b=t(504),h=(t(505),t(506)),p=t(959),O=t(960),x=t(961),f=t(6);a.a=function(){var e=Object(l.useState)(""),a=Object(n.a)(e,2),t=a[0],r=(a[1],Object(l.useState)("")),j=Object(n.a)(r,2),g=(j[0],j[1],Object(l.useState)("")),N=Object(n.a)(g,2),v=(N[0],N[1],new o.a),k=Object(u.f)(),y=function(){var e=Object(s.a)(c.a.mark((function e(){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama_perusahaan:t},e.prev=1,e.next=4,v.createCompanyProfile(a);case 4:if(!(s=e.sent).id&&!s.success){e.next=10;break}return e.next=8,d.a.fire("","Data berhasil di simpan","success").then((function(){k("/sjph/company_profile")}));case 8:e.next=12;break;case 10:return e.next=12,d.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,d.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(l.Fragment,{children:[Object(f.jsxs)("div",{className:"content-header",children:[Object(f.jsx)("h3",{className:"mb-0",children:"Halaman 2"}),Object(f.jsx)("small",{className:"text-muted",children:"Cari tahu tentang kebijakan halal"})]}),Object(f.jsxs)(i.z,{responsive:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"No."}),Object(f.jsx)("th",{children:"Tanggal Sosialisasi"}),Object(f.jsx)("th",{children:"Judul Kegiatan"}),Object(f.jsx)("th",{children:"Peserta"}),Object(f.jsx)("th",{children:"Bukti Hasil Sosialisasi"}),Object(f.jsx)("th",{children:"Menu"})]})}),Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("span",{className:"align-middle fw-bold",children:"1."})}),Object(f.jsx)("td",{children:"11-09-2022"}),Object(f.jsx)("td",{children:Object(f.jsx)(i.a,{pill:!0,color:"light-primary",className:"me-1",children:"Melakukan Halal"})}),Object(f.jsx)("td",{children:"5"}),Object(f.jsx)("td",{children:"Bukti"}),Object(f.jsx)("td",{children:Object(f.jsxs)(i.A,{children:[Object(f.jsx)(i.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(f.jsx)(p.a,{size:15})}),Object(f.jsxs)(i.k,{children:[Object(f.jsxs)(i.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(O.a,{className:"me-50",size:15})," ",Object(f.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(f.jsxs)(i.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(x.a,{className:"me-50",size:15})," ",Object(f.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[Object(f.jsx)("img",{className:"me-75",src:m.a,alt:"react",height:"20",width:"20"}),Object(f.jsx)("span",{className:"align-middle fw-bold",children:"React Project"})]}),Object(f.jsx)("td",{children:"Ronald Frest"}),Object(f.jsx)("td",{children:Object(f.jsx)(i.a,{pill:!0,color:"light-success",className:"me-1",children:"Completed"})}),Object(f.jsx)("td",{children:"5"}),Object(f.jsx)("td",{children:"Bukti"}),Object(f.jsx)("td",{children:Object(f.jsxs)(i.A,{children:[Object(f.jsx)(i.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(f.jsx)(p.a,{size:15})}),Object(f.jsxs)(i.k,{children:[Object(f.jsxs)(i.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(O.a,{className:"me-50",size:15})," ",Object(f.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(f.jsxs)(i.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(x.a,{className:"me-50",size:15})," ",Object(f.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[Object(f.jsx)("img",{className:"me-75",src:b.a,alt:"vuejs",height:"20",width:"20"}),Object(f.jsx)("span",{className:"align-middle fw-bold",children:"Vuejs Project"})]}),Object(f.jsx)("td",{children:"Jack Obes"}),Object(f.jsx)("td",{children:Object(f.jsx)(i.a,{pill:!0,color:"light-info",className:"me-1",children:"Scheduled"})}),Object(f.jsx)("td",{children:"5"}),Object(f.jsx)("td",{children:"Bukti"}),Object(f.jsx)("td",{children:Object(f.jsxs)(i.A,{children:[Object(f.jsx)(i.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(f.jsx)(p.a,{size:15})}),Object(f.jsxs)(i.k,{children:[Object(f.jsxs)(i.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(O.a,{className:"me-50",size:15})," ",Object(f.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(f.jsxs)(i.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(x.a,{className:"me-50",size:15})," ",Object(f.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[Object(f.jsx)("img",{className:"me-75",src:h.a,alt:"bootstrap",height:"20",width:"20"}),Object(f.jsx)("span",{className:"align-middle fw-bold",children:"Bootstrap Project"})]}),Object(f.jsx)("td",{children:"Jerry Milton"}),Object(f.jsx)("td",{children:Object(f.jsx)(i.a,{pill:!0,color:"light-warning",className:"me-1",children:"Pending"})}),Object(f.jsx)("td",{children:"5"}),Object(f.jsx)("td",{children:"Bukti"}),Object(f.jsx)("td",{children:Object(f.jsxs)(i.A,{children:[Object(f.jsx)(i.l,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(f.jsx)(p.a,{size:15})}),Object(f.jsxs)(i.k,{children:[Object(f.jsxs)(i.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(O.a,{className:"me-50",size:15})," ",Object(f.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(f.jsxs)(i.j,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(x.a,{className:"me-50",size:15})," ",Object(f.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]})]})]}),Object(f.jsx)(i.h,{sm:"12",children:Object(f.jsx)("div",{className:"d-flex justify-content-end",children:Object(f.jsx)(i.b,{className:"me-1",color:"primary",onClick:y,children:"Tambah"})})})]})}},532:function(e,a,t){"use strict";var s=t(34),n=t(12),r=t(1),c=t(605),i=t.n(c),l=t(2),o=t.n(l),j=t(962),d=(t(606),t(533),t(6)),u=Object(r.forwardRef)((function(e,a){var t,c=e.type,l=e.steps,j=e.options,u=e.instance,m=e.separator,b=e.className,h=e.headerClassName,p=e.contentClassName,O=e.contentWrapperClassName,x=Object(r.useState)(0),f=Object(n.a)(x,2),g=f[0],N=f[1],v=null;Object(r.useEffect)((function(){v=new i.a(a.current,j),a.current.addEventListener("shown.bs-stepper",(function(e){N(e.detail.indexStep)})),u&&u(v)}),[]);return Object(d.jsxs)("div",{ref:a,className:o()("bs-stepper",(t={},Object(s.a)(t,b,b),Object(s.a)(t,"vertical","vertical"===c),Object(s.a)(t,"vertical wizard-modern","modern-vertical"===c),Object(s.a)(t,"wizard-modern","modern-horizontal"===c),t)),children:[Object(d.jsx)("div",{className:o()("bs-stepper-header",Object(s.a)({},h,h)),children:l.map((function(e,a){return Object(d.jsxs)(r.Fragment,{children:[0!==a&&a!==l.length?Object(d.jsx)("div",{className:"line",children:m}):null,Object(d.jsx)("div",{className:o()("step",{crossed:g>a,active:a===g}),"data-target":"#".concat(e.id),children:Object(d.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(d.jsx)("span",{className:"bs-stepper-box",children:e.icon?e.icon:a+1}),Object(d.jsxs)("span",{className:"bs-stepper-label",children:[Object(d.jsx)("span",{className:"bs-stepper-title",children:e.title}),e.subtitle?Object(d.jsx)("span",{className:"bs-stepper-subtitle",children:e.subtitle}):null]})]})})]},e.id)}))}),Object(d.jsx)("div",{className:o()("bs-stepper-content",Object(s.a)({},O,O)),children:l.map((function(e,a){var t;return Object(d.jsx)("div",{className:o()("content",(t={},Object(s.a)(t,p,p),Object(s.a)(t,"active dstepper-block",g===a),t)),id:e.id,children:e.content},e.id)}))})]})}));a.a=u,u.defaultProps={options:{},type:"horizontal",separator:Object(d.jsx)(j.a,{size:17})}},533:function(e,a,t){},958:function(e,a,t){"use strict";t.r(a);var s=t(12),n=(t(472),t(477)),r=t(531),c=t(963),i=t(935),l=t(964),o=t(965),j=t(532),d=t(1),u=t(6);a.default=function(){var e=Object(d.useRef)(null),a=Object(d.useState)(null),t=Object(s.a)(a,2),m=t[0],b=t[1],h=[{id:"hal1",title:"Halaman 1",subtitle:"Keterangan Kriteria",icon:Object(u.jsx)(c.a,{size:18}),content:Object(u.jsx)(n.a,{stepper:m,type:"wizard-modern"})},{id:"hal2",title:"Halaman 2",subtitle:"Media Komunikasi Table",icon:Object(u.jsx)(i.a,{size:18}),content:Object(u.jsx)(r.a,{stepper:m,type:"wizard-modern"})},{id:"step-address",title:"Halaman 3",subtitle:"Add Address",icon:Object(u.jsx)(l.a,{size:18}),content:Object(u.jsx)(n.a,{stepper:m,type:"wizard-modern"})},{id:"social-links",title:"Halaman 4",subtitle:"Add Social Links",icon:Object(u.jsx)(o.a,{size:18}),content:Object(u.jsx)(n.a,{stepper:m,type:"wizard-modern"})}];return Object(u.jsx)("div",{children:Object(u.jsx)(j.a,{type:"modern-vertical",ref:e,steps:h,options:{linear:!1},instance:function(e){return b(e)}})})}}}]);
//# sourceMappingURL=14.372634b1.chunk.js.map