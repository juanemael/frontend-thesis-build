(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[23],{1468:function(e,a,t){"use strict";t.r(a);var n=t(81),r=t(727),s=t(6);a.default=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(n.c,{children:[Object(s.jsx)(n.e,{children:Object(s.jsxs)(n.g,{children:[" Form SJPH:  ",sessionStorage.nama_sjph," "]})}),Object(s.jsx)(n.d,{children:Object(s.jsx)(r.a,{})})]})})}},463:function(e,a,t){},472:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(82),r=t(459),s=t(458),c=t(45),i=t.n(c),o=t(473),l=Object(r.a)((function e(){Object(s.a)(this,e),this.getAll=Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/sjph/company_profiles","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(n.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/sjph/company_profile/".concat(a),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(n.a)(i.a.mark((function e(a,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/sjph/company_profile/".concat(a),"POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),this.createCompanyProfile=function(){var e=Object(n.a)(i.a.mark((function e(a,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/sjph/company_profile/".concat(a),"POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),this.editCompanyProfile=function(){var e=Object(n.a)(i.a.mark((function e(a,t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.set("/sjph/company_profile/".concat(a,"/").concat(t),"PUT",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()}))},473:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(82),r=t(459),s=t(458),c=t(45),i=t.n(c),o=t(480),l=t.n(o),u=Object(r.a)((function e(){Object(s.a)(this,e)}));u.set=function(){var e=Object(n.a)(i.a.mark((function e(a,t,n){var r,s,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(n)),c={method:t,headers:{"Content-Type":"application/json",Authorization:s?"bearer ".concat(s):null,Accept:"application/json"},body:JSON.stringify(n)},e.next=5,fetch(l.a.base_url+a,c);case 5:if(!(o=e.sent).ok){e.next=8;break}return e.abrupt("return",o.json());case 8:return e.next=10,o.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(r=u.error_message)||void 0===r?void 0:r.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(n.a)(i.a.mark((function e(a,t,n){var r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=sessionStorage.token||localStorage.token,e.next=3,fetch(l.a.base_url+a,{method:t,headers:{Authorization:r?"bearer ".concat(r):null,"Access-Control-Allow-Origin":"*"},body:n});case 3:if(!(s=e.sent).ok){e.next=9;break}return console.log(s),e.abrupt("return",s.json());case 9:return e.next=11,s.json();case 11:throw c=e.sent,console.log(c),c;case 14:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()},480:function(e,a){e.exports={base_url:"https://api.pasporumkm.com"}},727:function(e,a,t){"use strict";var n=t(13),r=t(82),s=t(12),c=t(45),i=t.n(c),o=t(81),l=(t(508),t(558),t(463),t(2)),u=t.n(l),m=t(1),d=t(472),h=t(464),j=t.n(h),p=t(5),b=t(6);a.a=function(){var e=Object(m.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(m.useState)(""),h=Object(s.a)(l,2),f=h[0],x=h[1],O=Object(m.useState)(""),g=Object(s.a)(O,2),_=g[0],k=g[1],P=Object(m.useState)(""),N=Object(s.a)(P,2),v=N[0],S=N[1],y=Object(m.useState)(""),E=Object(s.a)(y,2),C=E[0],w=E[1],T=Object(m.useState)(""),M=Object(s.a)(T,2),F=M[0],I=M[1],D=Object(m.useState)(""),V=Object(s.a)(D,2),A=(V[0],V[1]),J=Object(m.useState)(""),R=Object(s.a)(J,2),z=R[0],B=R[1],H=Object(m.useState)(""),L=Object(s.a)(H,2),U=L[0],K=L[1],W=Object(m.useState)(""),X=Object(s.a)(W,2),G=X[0],Y=X[1],q=Object(m.useState)(""),Q=Object(s.a)(q,2),Z=Q[0],$=Q[1],ee=Object(m.useState)(""),ae=Object(s.a)(ee,2),te=ae[0],ne=ae[1],re=Object(m.useState)(""),se=Object(s.a)(re,2),ce=se[0],ie=se[1],oe=Object(m.useState)(""),le=Object(s.a)(oe,2),ue=le[0],me=le[1],de=Object(m.useState)(""),he=Object(s.a)(de,2),je=he[0],pe=he[1],be=Object(m.useState)(""),fe=Object(s.a)(be,2),xe=fe[0],Oe=fe[1],ge=Object(m.useState)([]),_e=Object(s.a)(ge,2),ke=_e[0],Pe=_e[1],Ne=Object(m.useState)(10),ve=Object(s.a)(Ne,2),Se=(ve[0],ve[1],new d.a),ye=(Object(p.f)(),function(){var e=Object(r.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,sessionStorage.perusahaan_id&&"null"!==sessionStorage.perusahaan_id){e.next=8;break}return e.next=4,Se.getById(sessionStorage.perusahaan_id);case 4:t=e.sent,Pe(t),e.next=13;break;case 8:return console.log("TES ID COMP",sessionStorage.perusahaan_id),e.next=11,Se.getById(sessionStorage.perusahaan_id);case 11:n=e.sent,Pe(n);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(a){return e.apply(this,arguments)}}());Object(m.useEffect)((function(){ye(sessionStorage.perusahaan_id)}),[]);var Ee=function(){var e=Object(r.a)(i.a.mark((function e(){var a,r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={nama_perusahaan:_||ke.nama_perusahaan,nomor_induk_berusaha:v||ke.nomor_induk_berusaha,skala_usaha:C||ke.skala_usaha,nama_pimpinan:F||ke.nama_pimpinan,alamat_perusahaan:z||ke.alamat_perusahaan,telp_fax_perusahaan:U||ke.telp_fax_perusahaan,alamat_fasilitas_produksi:G||ke.alamat_fasilitas_produksi,telp_fax_fasilitas_produksi:Z||ke.telp_fax_fasilitas_produksi,contact_person_email:te||ke.contact_person_email,nomor_izin_edar:ce||ke.nomor_izin_edar,jenis_produk:ue||ke.jenis_produk,daerah_pemasaran:je||ke.daerah_pemasaran,sistem_pemasaran:xe||ke.sistem_pemasaran,tujuan:t||ke.tujuan,ruang_lingkup:f||ke.ruang_lingkup},"null"===sessionStorage.perusahaan_id){e.next=23;break}return e.prev=2,r=Object(n.a)(Object(n.a)({},a),{},{id:sessionStorage.perusahaan_id}),e.next=6,Se.editCompanyProfile(sessionStorage.sjph_id,sessionStorage.perusahaan_id,r);case 6:if(!(s=e.sent).id&&!s.success){e.next=12;break}return e.next=10,j.a.fire("","Data berhasil di-edit","success").then((function(){ye(sessionStorage.perusahaan_id)}));case 10:e.next=14;break;case 12:return e.next=14,j.a.fire("","Data gagal di-edit","error");case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(2),console.error(e.t0),e.next=21,j.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Kesalahan! Mohon kontak admin.");case 21:case 36:e.next=43;break;case 23:return e.prev=23,e.next=26,Se.createCompanyProfile(sessionStorage.sjph_id,a);case 26:if(c=e.sent,console.log(c),!c.perusahaan_id&&!c.success){e.next=34;break}return sessionStorage.perusahaan_id=c.perusahaan_id,e.next=32,j.a.fire("","Data berhasil di simpan","success").then((function(){ye(sessionStorage.perusahaan_id)}));case 32:e.next=36;break;case 34:return e.next=36,j.a.fire("","Data gagal disimpan","error");case 38:return e.prev=38,e.t1=e.catch(23),console.error(e.t1),e.next=43,j.a.fire("Error",e.t1.error_message?e.t1.error_message:"Terjadi Kesalahan! Mohon kontak admin.");case 43:case"end":return e.stop()}}),e,null,[[2,16],[23,38]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.e,{children:Object(b.jsx)(o.g,{tag:"h4",children:"Informasi Perusahaan"})}),Object(b.jsx)(o.d,{children:Object(b.jsx)(o.m,{children:Object(b.jsxs)(o.A,{children:[Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(b.jsx)(o.o,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",defaultValue:ke.id&&ke.nama_perusahaan,onChange:function(e){k(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"lastNameMulti",children:"Nomor Induk Berusaha"}),Object(b.jsx)(o.o,{type:"text",name:"nib",id:"nib",defaultValue:ke.id&&ke.nomor_induk_berusaha,onChange:function(e){S(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"cityMulti",children:"Skala Usaha"}),Object(b.jsx)(o.o,{type:"text",name:"skalaUsaha",id:"skalaUsaha",defaultValue:ke.id&&ke.skala_usaha,onChange:function(e){w(e.target.value)},placeholder:"Skala Usaha"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"CountryMulti",children:"Nama Pimpinan"}),Object(b.jsx)(o.o,{type:"text",name:"namaPimpinan",id:"namaPimpinan",defaultValue:ke.id&&ke.nama_pimpinan,onChange:function(e){I(e.target.value)},placeholder:"Nama Pimpinan"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"CompanyMulti",children:"Nama Penyelia Halal"}),Object(b.jsx)(o.o,{type:"text",name:"namaPenyeliaHalal",id:"namaPenyeliaHalal",onChange:function(e){A(e.target.value)},placeholder:"Nama Penyelia Halal"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Alamat Perusahaan"}),Object(b.jsx)(o.o,{type:"text",name:"alamatPerusahaan",id:"alamatPerusahaan",defaultValue:ke.id&&ke.alamat_perusahaan,onChange:function(e){B(e.target.value)},placeholder:"Alamat Perusahaan"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Perusahaan"}),Object(b.jsx)(o.o,{type:"text",name:"telpFaxPerusahaan",id:"telpFaxPerusahaan",defaultValue:ke.id&&ke.telp_fax_perusahaan,onChange:function(e){K(e.target.value)},placeholder:"Telp/Fax Perusahaan"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Alamat Fasilitas Produksi"}),Object(b.jsx)(o.o,{type:"text",name:"alamatFasilitasProduksi",id:"alamatFasilitasProduksi",defaultValue:ke.id&&ke.alamat_fasilitas_produksi,onChange:function(e){Y(e.target.value)},placeholder:"Alamat Fasilitas Produksi"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Fasilitas Produksi"}),Object(b.jsx)(o.o,{type:"text",name:"telpFaxFasilitasProduksi",id:"telpFaxFasilitasProduksi",defaultValue:ke.id&&ke.telp_fax_fasilitas_produksi,onChange:function(e){$(e.target.value)},placeholder:"Telp/Fax Fasilitas Produksi"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Contact Person / Email"}),Object(b.jsx)(o.o,{type:"text",name:"contactPersonEmail",id:"contactPersonEmail",defaultValue:ke.id&&ke.contact_person_email,onChange:function(e){ne(e.target.value)},placeholder:"Contact Person / Email"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Nomor Izin Edar"}),Object(b.jsx)(o.o,{type:"text",name:"nomorIzinEdar",id:"nomorIzinEdar",defaultValue:ke.id&&ke.nomor_izin_edar,onChange:function(e){ie(e.target.value)},placeholder:"Nomor Izin Edar"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Jenis Produk"}),Object(b.jsx)(o.o,{type:"text",name:"jenisProduk",id:"jenisProduk",defaultValue:ke.id&&ke.jenis_produk,onChange:function(e){me(e.target.value)},placeholder:"Jenis Produk"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Daerah Pemasaran"}),Object(b.jsx)(o.o,{type:"text",name:"daerahPemasaran",id:"daerahPemasaran",defaultValue:ke.id&&ke.daerah_pemasaran,onChange:function(e){pe(e.target.value)},placeholder:"Daerah Pemasaran"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Sistem Pemasaran"}),Object(b.jsx)(o.o,{type:"text",name:"sistemPemasaran",id:"sistemPemasaran",defaultValue:ke.id&&ke.sistem_pemasaran,onChange:function(e){Oe(e.target.value)},placeholder:"Sistem Pemasaran"})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Tujuan"}),Object(b.jsx)(o.o,{name:"tujuan",type:"textarea",id:"tujuan",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return c(e.target.value)},defaultValue:ke.id&&ke.tujuan,className:u()({"text-danger":t.length>20})}),Object(b.jsx)("span",{className:u()("textarea-counter-value float-end",{"bg-danger":t.length>20}),children:"".concat(t.length,"/20")})]}),Object(b.jsxs)(o.h,{md:"6",sm:"12",className:"mb-1",children:[Object(b.jsx)(o.r,{className:"form-label",for:"EmailMulti",children:"Ruang Lingkup"}),Object(b.jsx)(o.o,{name:"ruangLingkup",type:"textarea",id:"ruangLingkup",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return x(e.target.value)},defaultValue:ke.id&&ke.ruang_lingkup,className:u()({"text-danger":f.length>20})}),Object(b.jsx)("span",{className:u()("textarea-counter-value float-end",{"bg-danger":f.length>20}),children:"".concat(f.length,"/20")})]}),Object(b.jsx)(o.h,{sm:"12",children:Object(b.jsx)("div",{className:"d-flex justify-content-end",children:Object(b.jsx)(o.b,{className:"me-1",color:"primary",onClick:Ee,children:"Save"})})})]})})})]})}}}]);
//# sourceMappingURL=23.cadea7e0.chunk.js.map