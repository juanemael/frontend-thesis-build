(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[24],{1020:function(e,a,t){"use strict";t.r(a);var s=t(12),n=(t(525),t(554)),r=t(535),l=t(1008),c=t(985),i=t(481),m=t(1),o=t(6);a.default=function(){var e=Object(m.useRef)(null),a=Object(m.useState)(null),t=Object(s.a)(a,2),j=t[0],u=t[1],b=[{id:"hal1",title:"Halaman 1",subtitle:"Keterangan Kriteria",icon:Object(o.jsx)(l.a,{size:18}),content:Object(o.jsx)(n.a,{stepper:j,type:"wizard-modern"})},{id:"hal2",title:"Halaman 2",subtitle:"Media Komunikasi Table",icon:Object(o.jsx)(c.a,{size:18}),content:Object(o.jsx)(r.a,{stepper:j,type:"wizard-modern"})}];return Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{type:"modern-vertical",ref:e,steps:b,options:{linear:!1},instance:function(e){return u(e)}})})}},525:function(e,a,t){"use strict";var s=t(82),n=t(12),r=t(45),l=t.n(r),c=t(81),i=(t(478),t(489),t(452),t(2)),m=t.n(i),o=t(1),j=t(453),u=t(449),b=t.n(u),d=t(5),h=t(6);a.a=function(){var e=Object(o.useState)(""),a=Object(n.a)(e,2),t=a[0],r=a[1],i=Object(o.useState)(""),u=Object(n.a)(i,2),x=u[0],O=u[1],p=Object(o.useState)(""),f=Object(n.a)(p,2),g=f[0],N=f[1],P=Object(o.useState)(""),k=Object(n.a)(P,2),v=k[0],y=k[1],_=Object(o.useState)(""),S=Object(n.a)(_,2),C=S[0],E=S[1],M=Object(o.useState)(""),F=Object(n.a)(M,2),z=F[0],T=F[1],H=Object(o.useState)(""),w=Object(n.a)(H,2),I=(w[0],w[1]),A=Object(o.useState)(""),D=Object(n.a)(A,2),J=D[0],U=D[1],K=Object(o.useState)(""),L=Object(n.a)(K,2),B=L[0],R=L[1],q=Object(o.useState)(""),G=Object(n.a)(q,2),Q=G[0],V=G[1],W=Object(o.useState)(""),X=Object(n.a)(W,2),Y=X[0],Z=X[1],$=Object(o.useState)(""),ee=Object(n.a)($,2),ae=ee[0],te=ee[1],se=Object(o.useState)(""),ne=Object(n.a)(se,2),re=ne[0],le=ne[1],ce=Object(o.useState)(""),ie=Object(n.a)(ce,2),me=ie[0],oe=ie[1],je=Object(o.useState)(""),ue=Object(n.a)(je,2),be=ue[0],de=ue[1],he=Object(o.useState)(""),xe=Object(n.a)(he,2),Oe=xe[0],pe=xe[1],fe=Object(o.useState)(10),ge=Object(n.a)(fe,2),Ne=(ge[0],ge[1],new j.a),Pe=Object(d.f)(),ke=function(){var e=Object(s.a)(l.a.mark((function e(){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nama_perusahaan:g,nomor_induk_berusaha:v,skala_usaha:C,nama_pimpinan:z,alamat_perusahaan:J,telp_fax_perusahaan:B,alamat_fasilitas_produksi:Q,telp_fax_fasilitas_produksi:Y,contact_person_email:ae,nomor_izin_edar:re,jenis_produk:me,daerah_pemasaran:be,sistem_pemasaran:Oe,tujuan:t,ruang_lingkup:x},e.prev=1,e.next=4,Ne.createCompanyProfile(sessionStorage.sjph_id,a);case 4:if(!(s=e.sent).id&&!s.success){e.next=10;break}return e.next=8,b.a.fire("","Data berhasil di simpan","success").then((function(){Pe("/sjph/informasi_umum_perusahaan")}));case 8:e.next=12;break;case 10:return e.next=12,b.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,b.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.e,{children:Object(h.jsx)(c.g,{tag:"h4",children:"Informasi Perusahaan"})}),Object(h.jsx)(c.d,{children:Object(h.jsx)(c.m,{children:Object(h.jsxs)(c.A,{children:[Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(h.jsx)(c.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",onChange:function(e){N(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"lastNameMulti",children:"Nomor Induk Berusaha"}),Object(h.jsx)(c.o,{type:"text",name:"nib",id:"nib",onChange:function(e){y(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"cityMulti",children:"Skala Usaha"}),Object(h.jsx)(c.o,{type:"text",name:"skalaUsaha",id:"skalaUsaha",onChange:function(e){E(e.target.value)},placeholder:"Skala Usaha"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"CountryMulti",children:"Nama Pimpinan"}),Object(h.jsx)(c.o,{type:"text",name:"namaPimpinan",id:"namaPimpinan",onChange:function(e){T(e.target.value)},placeholder:"Nama Pimpinan"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"CompanyMulti",children:"Nama Penyelia Halal"}),Object(h.jsx)(c.o,{type:"text",name:"namaPenyeliaHalal",id:"namaPenyeliaHalal",onChange:function(e){I(e.target.value)},placeholder:"Nama Penyelia Halal"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Alamat Perusahaan"}),Object(h.jsx)(c.o,{type:"text",name:"alamatPerusahaan",id:"alamatPerusahaan",onChange:function(e){U(e.target.value)},placeholder:"Alamat Perusahaan"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Perusahaan"}),Object(h.jsx)(c.o,{type:"text",name:"telpFaxPerusahaan",id:"telpFaxPerusahaan",onChange:function(e){R(e.target.value)},placeholder:"Telp/Fax Perusahaan"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Alamat Fasilitas Produksi"}),Object(h.jsx)(c.o,{type:"text",name:"alamatFasilitasProduksi",id:"alamatFasilitasProduksi",onChange:function(e){V(e.target.value)},placeholder:"Alamat Fasilitas Produksi"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Fasilitas Produksi"}),Object(h.jsx)(c.o,{type:"text",name:"telpFaxFasilitasProduksi",id:"telpFaxFasilitasProduksi",onChange:function(e){Z(e.target.value)},placeholder:"Telp/Fax Fasilitas Produksi"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Contact Person / Email"}),Object(h.jsx)(c.o,{type:"text",name:"contactPersonEmail",id:"contactPersonEmail",onChange:function(e){te(e.target.value)},placeholder:"Contact Person / Email"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Nomor Izin Edar"}),Object(h.jsx)(c.o,{type:"text",name:"nomorIzinEdar",id:"nomorIzinEdar",onChange:function(e){le(e.target.value)},placeholder:"Nomor Izin Edar"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Jenis Produk"}),Object(h.jsx)(c.o,{type:"text",name:"jenisProduk",id:"jenisProduk",onChange:function(e){oe(e.target.value)},placeholder:"Jenis Produk"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Daerah Pemasaran"}),Object(h.jsx)(c.o,{type:"text",name:"daerahPemasaran",id:"daerahPemasaran",onChange:function(e){de(e.target.value)},placeholder:"Daerah Pemasaran"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Sistem Pemasaran"}),Object(h.jsx)(c.o,{type:"text",name:"sistemPemasaran",id:"sistemPemasaran",onChange:function(e){pe(e.target.value)},placeholder:"Sistem Pemasaran"})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Tujuan"}),Object(h.jsx)(c.o,{name:"tujuan",value:t,type:"textarea",id:"tujuan",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return r(e.target.value)},className:m()({"text-danger":t.length>20})}),Object(h.jsx)("span",{className:m()("textarea-counter-value float-end",{"bg-danger":t.length>20}),children:"".concat(t.length,"/20")})]}),Object(h.jsxs)(c.h,{md:"6",sm:"12",className:"mb-1",children:[Object(h.jsx)(c.r,{className:"form-label",for:"EmailMulti",children:"Ruang Lingkup"}),Object(h.jsx)(c.o,{name:"ruangLingkup",value:x,type:"textarea",id:"ruangLingkup",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return O(e.target.value)},className:m()({"text-danger":x.length>20})}),Object(h.jsx)("span",{className:m()("textarea-counter-value float-end",{"bg-danger":x.length>20}),children:"".concat(x.length,"/20")})]}),Object(h.jsx)(c.h,{sm:"12",children:Object(h.jsx)("div",{className:"d-flex justify-content-end",children:Object(h.jsx)(c.b,{className:"me-1",color:"primary",onClick:ke,children:"Submit"})})})]})})})]})}}}]);
//# sourceMappingURL=24.f3632214.chunk.js.map