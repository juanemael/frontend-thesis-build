(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[23],{1470:function(e,a,t){"use strict";t.r(a);var n=t(12),s=t(81),r=t(635),i=t(1),c=t(118),l=t(6);a.default=function(){var e=Object(i.useState)(0),a=Object(n.a)(e,2),t=a[0],o=a[1];return Object(i.useEffect)((function(){var e=setInterval((function(){o((function(e){if(16===e)return 16;return Math.min(e+15,16)}))}),500);return function(){clearInterval(e)}}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)(s.c,{listClassName:"breadcrumb-chevron",children:[Object(l.jsx)(s.d,{children:Object(l.jsx)(c.b,{to:"/sjph/sjph_ku",children:" SJPH-ku "})}),Object(l.jsx)(s.d,{active:!0,children:Object(l.jsx)("span",{children:" Informasi Perusahaan "})}),Object(l.jsx)(s.d,{children:Object(l.jsx)(c.b,{to:"/sjph/kriteria_sistem_jaminan_produk_halal",children:" Kriteria Sistem Jaminan Produk Halal "})}),Object(l.jsx)(s.d,{children:Object(l.jsx)(c.b,{to:"/sjph/kebijakan_dan_edukasi_halal",children:" Kebijakan dan Edukasi Halal "})}),Object(l.jsx)(s.d,{children:Object(l.jsx)(c.b,{to:"/sjph/bahan_untuk_kepentingan_halal",children:" Bahan untuk Kepentingan Halal "})}),Object(l.jsx)(s.d,{children:Object(l.jsx)(c.b,{to:"/sjph/kepentingan_produksi_dan_distribusi_produk",children:" Kepentingan Produksi dan Distribusi Produk "})}),Object(l.jsx)(s.d,{children:Object(l.jsx)(c.b,{to:"/sjph/kaji_ulang_manajemen",children:" Audit dan Kaji Ulang Manajemen "})})]}),Object(l.jsx)(s.D,{striped:!0,animated:!0,value:t}),Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.h,{children:Object(l.jsxs)(s.j,{children:[" Form SJPH: \xa0",Object(l.jsx)(s.b,{color:"success",pill:!0,children:sessionStorage.nama_sjph})," "]})}),Object(l.jsxs)(s.g,{children:[Object(l.jsxs)("h4",{children:["Destinasi Pertama: \xa0",Object(l.jsx)(s.b,{color:"primary",pill:!0,children:"Informasi Perusahaan"})]}),Object(l.jsx)(r.a,{})]})]})]})}},454:function(e,a,t){},459:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(82),s=t(450),r=t(449),i=t(45),c=t.n(i),l=t(465),o=t.n(l),u=Object(s.a)((function e(){Object(r.a)(this,e)}));u.set=function(){var e=Object(n.a)(c.a.mark((function e(a,t,n){var s,r,i,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(n)),i={method:t,headers:{"Content-Type":"application/json",Authorization:r?"bearer ".concat(r):null,Accept:"application/json"},body:JSON.stringify(n)},e.next=5,fetch(o.a.base_url+a,i);case 5:if(!(l=e.sent).ok){e.next=8;break}return e.abrupt("return",l.json());case 8:return e.next=10,l.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(s=u.error_message)||void 0===s?void 0:s.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(n.a)(c.a.mark((function e(a,t,n){var s,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=sessionStorage.token||localStorage.token,e.next=3,fetch(o.a.base_url+a,{method:t,headers:{Authorization:s?"bearer ".concat(s):null,"Access-Control-Allow-Origin":"*"},body:n});case 3:if(!(r=e.sent).ok){e.next=9;break}return console.log(r),e.abrupt("return",r.json());case 9:return e.next=11,r.json();case 11:throw i=e.sent,console.log(i),i;case 14:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()},462:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(82),s=t(450),r=t(449),i=t(45),c=t.n(i),l=t(459),o=Object(s.a)((function e(){Object(r.a)(this,e),this.getAll=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profiles","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getById=function(){var e=Object(n.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile/".concat(a),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.changePassword=function(){var e=Object(n.a)(c.a.mark((function e(a,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile/".concat(a),"POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),this.createCompanyProfile=function(){var e=Object(n.a)(c.a.mark((function e(a,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile/".concat(a),"POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),this.editCompanyProfile=function(){var e=Object(n.a)(c.a.mark((function e(a,t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.set("/sjph/company_profile/".concat(a,"/").concat(t),"PUT",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()}))},465:function(e,a){e.exports={base_url:"https://api.pasporumkm.com"}},635:function(e,a,t){"use strict";var n=t(13),s=t(82),r=t(12),i=t(45),c=t.n(i),l=t(81),o=(t(498),t(511),t(454),t(2)),u=t.n(o),d=t(1),m=t.n(d),j=t(462),h=t(453),b=t.n(h),p=t(5),f=t(446),x=t.n(f);function O(){return O=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},O.apply(this,arguments)}function k(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var g=Object(d.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,s=e.size,r=void 0===s?24:s,i=k(e,["color","size"]);return m.a.createElement("svg",O({ref:a,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),m.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),m.a.createElement("polyline",{points:"19 12 12 19 5 12"}))}));g.propTypes={color:x.a.string,size:x.a.oneOfType([x.a.string,x.a.number])},g.displayName="ArrowDown";var _=g,v=t(1471),N=t(1472),y=(t(509),t(209)),P=t(461),S=t(456),E=t(6),w=[{value:"Mikro",label:"Mikro"},{value:"Kecil",label:"Kecil"}];a.a=function(){var e=Object(d.useState)(""),a=Object(r.a)(e,2),t=a[0],i=a[1],o=Object(d.useState)(""),m=Object(r.a)(o,2),h=m[0],f=m[1],x=Object(d.useState)(""),O=Object(r.a)(x,2),k=O[0],g=O[1],C=Object(d.useState)(""),M=Object(r.a)(C,2),T=M[0],I=M[1],D=Object(d.useState)(""),F=Object(r.a)(D,2),V=F[0],z=F[1],A=Object(d.useState)(""),K=Object(r.a)(A,2),J=K[0],B=K[1],R=Object(d.useState)(""),H=Object(r.a)(R,2),L=(H[0],H[1]),U=Object(d.useState)(""),W=Object(r.a)(U,2),X=W[0],G=W[1],Y=Object(d.useState)(""),q=Object(r.a)(Y,2),Q=q[0],Z=q[1],$=Object(d.useState)(""),ee=Object(r.a)($,2),ae=ee[0],te=ee[1],ne=Object(d.useState)(""),se=Object(r.a)(ne,2),re=se[0],ie=se[1],ce=Object(d.useState)(""),le=Object(r.a)(ce,2),oe=le[0],ue=le[1],de=Object(d.useState)(""),me=Object(r.a)(de,2),je=me[0],he=me[1],be=Object(d.useState)(""),pe=Object(r.a)(be,2),fe=pe[0],xe=pe[1],Oe=Object(d.useState)(""),ke=Object(r.a)(Oe,2),ge=ke[0],_e=ke[1],ve=Object(d.useState)(""),Ne=Object(r.a)(ve,2),ye=Ne[0],Pe=Ne[1],Se=Object(d.useState)(""),Ee=Object(r.a)(Se,2),we=Ee[0],Ce=Ee[1],Me=Object(d.useState)({}),Te=Object(r.a)(Me,2),Ie=Te[0],De=Te[1],Fe=Object(d.useState)(!0),Ve=Object(r.a)(Fe,2),ze=Ve[0],Ae=Ve[1],Ke=Object(d.useState)(10),Je=Object(r.a)(Ke,2),Be=(Je[0],Je[1],new j.a),Re=Object(p.f)(),He=function(){var e=Object(s.a)(c.a.mark((function e(a){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,sessionStorage.perusahaan_id&&"null"!==sessionStorage.perusahaan_id){e.next=8;break}return e.next=4,Be.getById(a);case 4:t=e.sent,De(t),e.next=14;break;case 8:return console.log("TES ID COMP",sessionStorage.perusahaan_id),e.next=11,Be.getById(a);case 11:n=e.sent,De(n),console.log(Ie);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(a){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){He(sessionStorage.perusahaan_id)}),[]);var Le=function(){var e=Object(s.a)(c.a.mark((function e(){var a,s,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={nama_perusahaan:k||Ie.nama_perusahaan,nomor_induk_berusaha:T||Ie.nomor_induk_berusaha,skala_usaha:V||Ie.skala_usaha,nama_pimpinan:J||Ie.nama_pimpinan,alamat_perusahaan:X||Ie.alamat_perusahaan,telp_fax_perusahaan:Q||Ie.telp_fax_perusahaan,alamat_fasilitas_produksi:ae||Ie.alamat_fasilitas_produksi,telp_fax_fasilitas_produksi:re||Ie.telp_fax_fasilitas_produksi,contact_person_email:oe||Ie.contact_person_email,nama_merek_produk:ge||Ie.nama_merek_produk,nomor_izin_edar:je||Ie.nomor_izin_edar,jenis_produk:fe||Ie.jenis_produk,daerah_pemasaran:ye||Ie.daerah_pemasaran,sistem_pemasaran:we||Ie.sistem_pemasaran,tujuan:t||Ie.tujuan,ruang_lingkup:h||Ie.ruang_lingkup},"null"===sessionStorage.perusahaan_id){e.next=23;break}return e.prev=2,s=Object(n.a)(Object(n.a)({},a),{},{id:sessionStorage.perusahaan_id}),e.next=6,Be.editCompanyProfile(sessionStorage.sjph_id,sessionStorage.perusahaan_id,s);case 6:if(!(r=e.sent).id&&!r.success){e.next=12;break}return e.next=10,b.a.fire("","Data berhasil di-edit","success").then((function(){He(sessionStorage.perusahaan_id)}));case 10:e.next=14;break;case 12:return e.next=14,b.a.fire("","Data gagal di-edit","error");case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(2),console.error(e.t0),e.next=21,b.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Kesalahan! Mohon kontak admin.");case 21:case 36:e.next=43;break;case 23:return e.prev=23,e.next=26,Be.createCompanyProfile(sessionStorage.sjph_id,a);case 26:if(i=e.sent,console.log(i),!i.perusahaan_id&&!i.success){e.next=34;break}return sessionStorage.perusahaan_id=i.perusahaan_id,e.next=32,b.a.fire("","Data berhasil di simpan","success").then((function(){He(sessionStorage.perusahaan_id)}));case 32:e.next=36;break;case 34:return e.next=36,b.a.fire("","Data gagal disimpan","error");case 38:return e.prev=38,e.t1=e.catch(23),console.error(e.t1),e.next=43,b.a.fire("Error",e.t1.error_message?e.t1.error_message:"Terjadi Kesalahan! Mohon kontak admin.");case 43:case"end":return e.stop()}}),e,null,[[2,16],[23,38]])})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(l.f,{children:[Object(E.jsxs)(l.x,{isOpen:ze,toggle:function(){return Ae(!ze)},className:"modal-dialog-centered modal-lg",children:[Object(E.jsx)(l.z,{className:"bg-transparent",toggle:function(){Ae(!ze)}}),Object(E.jsxs)(l.y,{className:"px-sm-5 mx-50 pb-5",children:[Object(E.jsxs)("div",{className:"text-center mb-2",children:[Object(E.jsx)("h1",{className:"mb-1",id:"headerInitialTitle",children:"Mengisi Keterangan Perusahaan"}),Object(E.jsxs)("div",{className:" justify-content-between",children:["Silahkan mengisi keterangan perusahaan/usaha kamu disini.",Object(E.jsx)("br",{}),"Disini kamu bisa leluasa mengisi atau mengubah isi keterangan perusahaan kamu. ",Object(E.jsx)("br",{}),"Jadi.. jangan khawatir jika kamu salah mengisi keterangan ya ",Object(E.jsx)("br",{}),"Oh iya.. diatas kamu juga ada jejak perkembangan-mu sebagai gambaran letak kamu sekarang."]}),Object(E.jsx)(l.E,{sm:8,style:{paddingBottom:20},children:Object(E.jsx)("img",{className:"company-pic",src:y.default,alt:"company"})})]}),Object(E.jsx)(l.E,{tag:"form",className:"gy-1 pt-75",children:Object(E.jsx)(l.k,{xs:12,className:"text-center mt-2 pt-50",style:{display:"flex",justifyContent:"center"},children:Object(E.jsx)(l.e,{onClick:function(){Ae(!1)},color:"warning",id:"belumPernahButton",children:"Baik, aku mengerti!"})})})]})]}),Object(E.jsx)(l.h,{children:Object(E.jsx)(l.j,{tag:"h4",children:"Informasi Perusahaan"})}),Object(E.jsx)(l.g,{children:Object(E.jsx)(l.p,{children:Object(E.jsxs)(l.E,{children:[Object(E.jsx)("div",{className:"divider divider-dashed",children:Object(E.jsxs)("div",{className:"divider-text",children:["Informasi Umum ",Object(E.jsx)(_,{size:15})]})}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"nameMulti",children:"Nama Perusahaan"}),Object(E.jsx)(l.r,{type:"text",name:"namaPerusahaan",id:"namaPerusahaan",defaultValue:Ie.id&&Ie.nama_perusahaan,onChange:function(e){g(e.target.value)},placeholder:"Nama Perusahaan"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"lastNameMulti",children:"Nomor Induk Berusaha"}),Object(E.jsx)(l.r,{type:"text",name:"nib",id:"nib",defaultValue:Ie.id&&Ie.nomor_induk_berusaha,onChange:function(e){I(e.target.value)},placeholder:"Nomor Induk Berusaha"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"skalaUsaha",children:"Skala Usaha"}),Object(E.jsx)(P.a,{id:"skalaUsaha",theme:S.d,className:"react-select",classNamePrefix:"select",defaultValue:"Mikro"===Ie.skala_usaha?w[0]:"Kecil"===Ie.skala_usaha?w[1]:null,placeholder:"Mikro"===Ie.skala_usaha||"Kecil"===Ie.skala_usaha?Ie.skala_usaha:"Pilih disini",name:"skalaUsaha",options:w,onChange:function(e){z(e.value)}})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"CountryMulti",children:"Nama Pimpinan"}),Object(E.jsx)(l.r,{type:"text",name:"namaPimpinan",id:"namaPimpinan",defaultValue:Ie.id&&Ie.nama_pimpinan,onChange:function(e){B(e.target.value)},placeholder:"Nama Pimpinan"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"CompanyMulti",children:"Nama Penyelia Halal"}),Object(E.jsx)(l.r,{type:"text",name:"namaPenyeliaHalal",id:"namaPenyeliaHalal",onChange:function(e){L(e.target.value)},placeholder:"Nama Penyelia Halal"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Alamat Perusahaan"}),Object(E.jsx)(l.r,{type:"text",name:"alamatPerusahaan",id:"alamatPerusahaan",defaultValue:Ie.id&&Ie.alamat_perusahaan,onChange:function(e){G(e.target.value)},placeholder:"Alamat Perusahaan"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Perusahaan"}),Object(E.jsx)(l.r,{type:"text",name:"telpFaxPerusahaan",id:"telpFaxPerusahaan",defaultValue:Ie.id&&Ie.telp_fax_perusahaan,onChange:function(e){Z(e.target.value)},placeholder:"Telp/Fax Perusahaan"})]}),Object(E.jsx)("div",{className:"divider divider-dashed",children:Object(E.jsxs)("div",{className:"divider-text",children:[" Produksi ",Object(E.jsx)(_,{size:15})]})}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Alamat Fasilitas Produksi"}),Object(E.jsx)(l.r,{type:"text",name:"alamatFasilitasProduksi",id:"alamatFasilitasProduksi",defaultValue:Ie.id&&Ie.alamat_fasilitas_produksi,onChange:function(e){te(e.target.value)},placeholder:"Alamat Fasilitas Produksi"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Telp/Fax Fasilitas Produksi"}),Object(E.jsx)(l.r,{type:"text",name:"telpFaxFasilitasProduksi",id:"telpFaxFasilitasProduksi",defaultValue:Ie.id&&Ie.telp_fax_fasilitas_produksi,onChange:function(e){ie(e.target.value)},placeholder:"Telp/Fax Fasilitas Produksi"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Contact Person / Email"}),Object(E.jsx)(l.r,{type:"text",name:"contactPersonEmail",id:"contactPersonEmail",defaultValue:Ie.id&&Ie.contact_person_email,onChange:function(e){ue(e.target.value)},placeholder:"Contact Person / Email"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Nama/Merek Produk (yang akan disertifikasi)"}),Object(E.jsx)(l.r,{type:"text",name:"jenisProduk",id:"jenisProduk",defaultValue:Ie.id&&Ie.nama_merek_produk,onChange:function(e){_e(e.target.value)},placeholder:"Nama/Merek Produk yang akan disertifikasi"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Nomor Izin Edar"}),Object(E.jsx)(l.r,{type:"text",name:"nomorIzinEdar",id:"nomorIzinEdar",defaultValue:Ie.id&&Ie.nomor_izin_edar,onChange:function(e){he(e.target.value)},placeholder:"No. (MD/PIRT/SLHS/lainnya)"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Jenis Produk"}),Object(E.jsx)(l.r,{type:"text",name:"jenisProduk",id:"jenisProduk",defaultValue:Ie.id&&Ie.jenis_produk,onChange:function(e){xe(e.target.value)},placeholder:"Jenis Produk"})]}),Object(E.jsx)("div",{className:"divider divider-dashed",children:Object(E.jsxs)("div",{className:"divider-text",children:["Pemasaran ",Object(E.jsx)(_,{size:15})]})}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Daerah Pemasaran"}),Object(E.jsx)(l.r,{type:"text",name:"daerahPemasaran",id:"daerahPemasaran",defaultValue:Ie.id&&Ie.daerah_pemasaran,onChange:function(e){Pe(e.target.value)},placeholder:"Daerah Pemasaran"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Sistem Pemasaran"}),Object(E.jsx)(l.r,{type:"text",name:"sistemPemasaran",id:"sistemPemasaran",defaultValue:Ie.id&&Ie.sistem_pemasaran,onChange:function(e){Ce(e.target.value)},placeholder:"Sistem Pemasaran"})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Tujuan"}),Object(E.jsx)(l.r,{name:"tujuan",type:"textarea",id:"tujuan",placeholder:"Tujuan",style:{minHeight:"100px"},onChange:function(e){return i(e.target.value)},defaultValue:Ie.id&&Ie.tujuan,className:u()({"text-danger":t.length>120})}),Object(E.jsx)("span",{className:u()("textarea-counter-value float-end",{"bg-danger":t.length>120}),children:"".concat(t.length,"/120")})]}),Object(E.jsxs)(l.k,{md:"6",sm:"12",className:"mb-1",children:[Object(E.jsx)(l.u,{className:"form-label",for:"EmailMulti",children:"Ruang Lingkup"}),Object(E.jsx)(l.r,{name:"ruangLingkup",type:"textarea",id:"ruangLingkup",placeholder:"Ruang Lingkup",style:{minHeight:"100px"},onChange:function(e){return f(e.target.value)},defaultValue:Ie.id&&Ie.ruang_lingkup,className:u()({"text-danger":h.length>120})}),Object(E.jsx)("span",{className:u()("textarea-counter-value float-end",{"bg-danger":h.length>120}),children:"".concat(h.length,"/120")})]}),Object(E.jsx)(l.k,{sm:"12",children:Object(E.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(E.jsxs)(l.e,{className:"me-1 ms-3",color:"primary",onClick:function(){return Re("/sjph/sjph_ku")},outline:!0,children:[Object(E.jsx)(v.a,{size:14,className:"align-middle me-sm-25 me-0"}),Object(E.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Kembali"})]}),Object(E.jsx)(l.e,{className:"me-1",color:"success",onClick:Le,children:"Save"}),Object(E.jsxs)(l.e,{className:"me-1",color:"primary",onClick:function(){return Re("/sjph/kriteria_sistem_jaminan_produk_halal")},children:[Object(E.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Selanjutnya"}),Object(E.jsx)(N.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})})]})})})]})}}}]);
//# sourceMappingURL=23.cdf9a33a.chunk.js.map