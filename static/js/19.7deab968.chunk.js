(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[19],{1474:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(82),s=a(12),c=a(45),i=a.n(c),o=a(81),l=(a(454),a(1)),u=a(452),b=a(451),m=a(462),j=Object(u.a)((function e(){Object(b.a)(this,e),this.getAllByUserID=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.set("/sjph/user/".concat(sessionStorage.user_id),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getNamaPerusahaan=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.set("/sjph/nama_perusahaan/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.createSJPH=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.set("/sjph","POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteSJPH=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.set("/sjph/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),d=a(455),p=a.n(d),h=a(5),f=a(1459),x=a(1460),O=a(1461),g=a(1462),k=a(1463),v=a(1464),N=a(1465),w=a(583),S=a(461),C=a(496),_=a.n(C),y=a(500),T=a.n(y),P=(a(458),a(465),a(501),a(929),a(930),a(123)),D=a(931),E=(a(651),a(14),a(804),a(6)),J=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],u=Object(l.useState)(0),b=Object(s.a)(u,2),m=b[0],d=b[1],C=Object(l.useState)(""),y=Object(s.a)(C,2),J=y[0],L=y[1],H=Object(l.useState)([]),I=Object(s.a)(H,2),A=I[0],B=I[1],R=Object(l.useState)([]),M=Object(s.a)(R,2),z=(M[0],M[1],Object(l.useState)([])),W=Object(s.a)(z,2),F=W[0],K=W[1],U=Object(l.useState)(!1),X=Object(s.a)(U,2),G=X[0],V=X[1],Y=new j,q=Object(h.f)(),Q=Object(l.useState)(!1),Z=Object(s.a)(Q,2),$=Z[0],ee=Z[1],te=Object(S.e)(),ae=(te.control,te.setError,te.handleSubmit,te.formState.errors),ne=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.getAllByUserID();case 3:t=e.sent,K(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){ne()}),[]);var re="btn btn-sm btn-outline-primary",se="btn btn-sm btn-primary btn-next",ce=null,ie=[{id:"tambahData",title:"Tambah SJPH",text:"Klik tombol ini untuk membuat SJPH terlebih dahulu",attachTo:{element:"#buttonTambah",on:"top"},cancelIcon:{enabled:!0},buttons:[{text:"Kembali",classes:re,action:function(){return ce.back()}},{text:"Selanjutnya",classes:se,action:function(){return ce.next()}}]},{id:"dataTable",title:"Data Table",text:"Ini table SJPH-Mu setelah membuat SJPH, klik tombol pilih di SJPH yang anda ingin isi.",attachTo:{element:"#dataTable",on:"bottom"},cancelIcon:{enabled:!0},buttons:[{action:function(){return ce.cancel()},classes:re,text:"Lewati"},{text:"Selanjutnya",classes:se,action:function(){return ce.next()}}]},{id:"card",title:"Tur Selesai",text:"Tur Selesai. Semoga Berhasil!",attachTo:{element:"",on:"top"},cancelIcon:{enabled:!0},buttons:[{text:"Kembali",classes:re,action:function(){return ce.back()}},{text:"Selesai",classes:se,action:function(){return ce.cancel()}}]}],oe=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={nama_sjph:a,user_id:sessionStorage.user_id},e.prev=1,e.next=4,Y.createSJPH(t);case 4:if(!(n=e.sent).id&&!n.success){e.next=10;break}return e.next=8,p.a.fire("","Data berhasil di simpan","success").then((function(){ne(),ee(!1)}));case 8:e.next=12;break;case 10:return e.next=12,p.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,p.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.fire({title:"Peringatan!",text:"Apakah kamu yakin ingin menghapus data ini?",icon:"warning",showCancelButton:!0,confirmButton:"Iya, tentu saja",cancelButton:"Tidak",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(r.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConfirmed){e.next=19;break}return e.prev=1,e.next=4,Y.deleteSJPH(t);case 4:if(!(n=e.sent).id&&!n.success){e.next=10;break}return e.next=8,p.a.fire({icon:"success",title:"Sukses menghapus!",text:"Data kamu telah dihapus.",customClass:{confirmButton:"btn btn-success"}}).then((function(){ne()}));case 8:e.next=12;break;case 10:return e.next=12,p.a.fire({title:"Failed",text:"Failed to delete",icon:"error",customClass:{confirmButton:"btn btn-success"}});case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,p.a.fire("",e.t0.error_message?e.t0.error_message:"Something Wrong","error");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.reload();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(r.a)(i.a.mark((function e(t,a,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,V(!1),sessionStorage.sjph_id=t,sessionStorage.nama_sjph=n,sessionStorage.perusahaan_id=a,e.next=7,ue();case 7:setTimeout(P.b.success("Anda telah memilih SJPH ".concat(n)),5e3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),me=Object(l.forwardRef)((function(e,t){return Object(E.jsx)("div",{className:"form-check",children:Object(E.jsx)(o.o,Object(n.a)({type:"checkbox",ref:t},e))})})),je=[{name:"ID",selector:function(e){return e.sjph_id},sortable:function(e){return e.sjph_id}},{name:"Nama SJPH",sortable:!0,selector:function(e){return e.nama_sjph}},{name:"Dibuat pada",sortable:!0,selector:function(e){return e.created_at}},{name:"Diubah pada",sortable:!0,selector:function(e){return e.modified_at}},{name:"Pilihan",cell:function(e){return Object(E.jsx)(o.b,{className:"me-1",disabled:sessionStorage.sjph_id===e.sjph_id&&G,color:"primary",id:"buttonPilihan",onClick:function(){be(e.sjph_id,e.perusahaan_id,e.nama_sjph)},children:"Pilih"})}},{name:"Tindakan",allowOverflow:!1,cell:function(e){return Object(E.jsxs)("div",{className:"d-flex",children:[Object(E.jsxs)(o.D,{children:[Object(E.jsx)(o.l,{className:"pe-1",tag:"span",children:Object(E.jsx)(f.a,{size:15})}),Object(E.jsxs)(o.k,{end:!0,children:[Object(E.jsxs)(o.j,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(E.jsx)(x.a,{size:15}),Object(E.jsx)("span",{className:"align-middle ms-50",children:"Details"})]}),Object(E.jsxs)(o.j,{className:"w-100",onClick:function(){le(e.sjph_id)},children:[Object(E.jsx)(O.a,{size:15}),Object(E.jsx)("span",{className:"align-middle ms-50",children:"Delete"})]})]})]}),Object(E.jsx)(g.a,{size:15})]})}}],de=function(){var e=Object(l.useContext)(D.b);return ce=e,Object(E.jsx)(o.b,{className:"ms-2",color:"primary",onClick:function(){return e.start()},children:Object(E.jsx)("span",{className:"align-middle ms-50",children:"Mulai Tur!"})})};return Object(E.jsx)(l.Fragment,{children:Object(E.jsxs)(D.a,{steps:ie,tourOptions:{useModalOverlay:!0},children:[Object(E.jsxs)(o.u,{isOpen:$,toggle:function(){return ee(!$)},className:"modal-dialog-centered modal-lg",children:[Object(E.jsx)(o.w,{className:"bg-transparent",toggle:function(){return ee(!$)}}),Object(E.jsxs)(o.v,{className:"px-sm-5 mx-50 pb-5",children:[Object(E.jsxs)("div",{className:"text-center mb-2",children:[Object(E.jsx)("h1",{className:"mb-1",children:"Tambah SJPH"}),Object(E.jsx)("p",{children:"Tambah SJPH-mu untuk mulai mengisi modul"})]}),Object(E.jsxs)(o.A,{tag:"form",className:"gy-1 pt-75",children:[Object(E.jsxs)(o.h,{xs:12,children:[Object(E.jsx)(o.r,{className:"form-label",for:"sjphName",children:"Nama SJPH"}),Object(E.jsx)(o.o,{id:"sjphName",placeholder:"SJPH Tahun 2022",value:a,onChange:function(e){return c(e.target.value)},invalid:ae.sjphName&&!0})]}),Object(E.jsxs)(o.h,{xs:12,className:"text-center mt-2 pt-50",children:[Object(E.jsx)(o.b,{onClick:oe,className:"me-1",color:"primary",children:"Kirim"}),Object(E.jsx)(o.b,{type:"reset",color:"secondary",outline:!0,onClick:function(){return ee(!1)},children:"Batal"})]})]})]})]}),Object(E.jsxs)(o.c,{children:[Object(E.jsxs)(o.e,{children:[Object(E.jsx)(o.g,{children:" SJPH-Ku "}),Object(E.jsxs)("div",{className:"d-flex mt-md-0 mt-1",children:[Object(E.jsxs)(o.C,{children:[Object(E.jsxs)(o.l,{color:"secondary",caret:!0,outline:!0,children:[Object(E.jsx)(k.a,{size:15}),Object(E.jsx)("span",{className:"align-middle ms-50",children:"Export"})]}),Object(E.jsxs)(o.k,{children:[Object(E.jsxs)(o.j,{className:"w-100",children:[Object(E.jsx)(v.a,{size:15}),Object(E.jsx)("span",{className:"align-middle ms-50",children:"Print"})]}),Object(E.jsxs)(o.j,{className:"w-100",onClick:function(){return q("/sjph/export/PDF")},children:[Object(E.jsx)(N.a,{size:15}),Object(E.jsx)("span",{className:"align-middle ms-50",children:"PDF"})]})]})]}),Object(E.jsx)(de,{})]})]}),Object(E.jsxs)(o.d,{children:[Object(E.jsxs)("div",{className:"content-header",children:[Object(E.jsx)("h3",{className:"mb-0",children:"Daftar SJPH"}),Object(E.jsx)("small",{className:"text-muted",children:"Berikut adalah tabel daftar SJPH yang dibuat oleh kamu"})]}),Object(E.jsx)(o.A,{className:"justify-content-end mx-0",children:Object(E.jsxs)(o.h,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(E.jsx)(o.r,{className:"me-1",for:"search-input",children:"Search"}),Object(E.jsx)(o.o,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:J,onChange:function(e){var t=e.target.value,a=[];L(t);t.length&&(a=F.filter((function(e){var a=e.nama_sjph.toLowerCase().startsWith(t.toLowerCase())||e.created_at.toLowerCase().startsWith(t.toLowerCase())||e.modified_at.toLowerCase().startsWith(t.toLowerCase()),n=e.nama_sjph.toLowerCase().startsWith(t.toLowerCase())||e.created_at.toLowerCase().startsWith(t.toLowerCase())||e.modified_at.toLowerCase().startsWith(t.toLowerCase());return a||(!a&&n?n:null)})),B(a),L(t))}})]})}),Object(E.jsx)("div",{className:"react-dataTable",id:"dataTable",children:Object(E.jsx)(_.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:je,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(E.jsx)(w.a,{size:10}),paginationDefaultPage:m+1,paginationComponent:function(){return Object(E.jsx)(T.a,{previousLabel:"",nextLabel:"",forcePage:m,onPageChange:function(e){return function(e){d(e.selected)}(e)},pageCount:J.length?Math.ceil(A.length/7):Math.ceil(F.length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"})},data:J.length?A:F,selectableRowsComponent:me})}),"\xa0",Object(E.jsx)(o.h,{sm:"12",children:Object(E.jsx)("div",{className:"d-flex justify-content-end",children:Object(E.jsx)(o.b,{className:"me-1",color:"primary",id:"buttonTambah",onClick:function(){return ee(!0)},children:"Tambah"})})})]})]})]})})};t.default=function(){return Object(E.jsx)("div",{children:Object(E.jsx)(J,{})})}},454:function(e,t,a){},462:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(82),r=a(452),s=a(451),c=a(45),i=a.n(c),o=a(466),l=a.n(o),u=Object(r.a)((function e(){Object(s.a)(this,e)}));u.set=function(){var e=Object(n.a)(i.a.mark((function e(t,a,n){var r,s,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(n)),c={method:a,headers:{"Content-Type":"application/json",Authorization:s?"bearer ".concat(s):null,Accept:"application/json"},body:JSON.stringify(n)},e.next=5,fetch(l.a.base_url+t,c);case 5:if(!(o=e.sent).ok){e.next=8;break}return e.abrupt("return",o.json());case 8:return e.next=10,o.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(r=u.error_message)||void 0===r?void 0:r.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(n.a)(i.a.mark((function e(t,a,n){var r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=sessionStorage.token||localStorage.token,e.next=3,fetch(l.a.base_url+t,{method:a,headers:{Authorization:r?"bearer ".concat(r):null,"Access-Control-Allow-Origin":"*"},body:n});case 3:if(!(s=e.sent).ok){e.next=9;break}return console.log(s),e.abrupt("return",s.json());case 9:return e.next=11,s.json();case 11:throw c=e.sent,console.log(c),c;case 14:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},466:function(e,t){e.exports={base_url:"https://api.pasporumkm.com"}},501:function(e,t,a){},930:function(e,t,a){}}]);
//# sourceMappingURL=19.7deab968.chunk.js.map