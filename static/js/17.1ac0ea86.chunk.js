(this["webpackJsonppasporumkm-frontend"]=this["webpackJsonppasporumkm-frontend"]||[]).push([[17],{1486:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(82),s=n(12),c=n(45),o=n.n(c),i=n(81),l=(n(454),n(1)),u=n(519),p=n(453),b=n.n(p),d=n(5),m=n(1465),h=n(935),j=n(1466),f=n(1467),O=n(655),x=n(656),g=n(657),v=n(1468),k=n(463),w=n(469),y=n.n(w),N=n(470),S=n.n(N),_=(n(456),n(464),n(466),n(520),n(521),n(122)),C=n(508),P=(n(572),n(14),n(571),n(6)),T=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],p=Object(l.useState)(0),w=Object(s.a)(p,2),N=w[0],T=w[1],E=Object(l.useState)(""),D=Object(s.a)(E,2),L=D[0],J=D[1],z=Object(l.useState)([]),H=Object(s.a)(z,2),I=H[0],B=H[1],R=Object(l.useState)([]),A=Object(s.a)(R,2),M=(A[0],A[1],Object(l.useState)([])),W=Object(s.a)(M,2),F=W[0],K=W[1],G=Object(l.useState)(!1),U=Object(s.a)(G,2),V=U[0],X=U[1],Y=new u.a,q=Object(d.f)(),Q=Object(l.useState)(!1),Z=Object(s.a)(Q,2),$=Z[0],ee=Z[1],te=Object(k.e)(),ne=(te.control,te.setError,te.handleSubmit,te.formState.errors),ae=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.getAll();case 3:t=e.sent,K(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){ae()}),[]);var re="btn btn-sm btn-outline-primary",se="btn btn-sm btn-primary btn-next",ce=null,oe=[{id:"tambahData",title:"Tambah SJPH",text:"Klik tombol ini untuk membuat SJPH terlebih dahulu",attachTo:{element:"#buttonTambah",on:"top"},cancelIcon:{enabled:!0},buttons:[{text:"Kembali",classes:re,action:function(){return ce.back()}},{text:"Selanjutnya",classes:se,action:function(){return ce.next()}}]},{id:"dataTable",title:"Data Table",text:"Ini table SJPH-Mu setelah membuat SJPH, klik tombol pilih di SJPH yang anda ingin isi.",attachTo:{element:"#dataTable",on:"bottom"},cancelIcon:{enabled:!0},buttons:[{action:function(){return ce.cancel()},classes:re,text:"Lewati"},{text:"Selanjutnya",classes:se,action:function(){return ce.next()}}]},{id:"card",title:"Tur Selesai",text:"Tur Selesai. Semoga Berhasil!",attachTo:{element:"",on:"top"},cancelIcon:{enabled:!0},buttons:[{text:"Kembali",classes:re,action:function(){return ce.back()}},{text:"Selesai",classes:se,action:function(){return ce.cancel()}}]}],ie=function(){var e=Object(r.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={nama_sjph:n,user_id:sessionStorage.user_id},e.prev=1,e.next=4,Y.createSJPH(t);case 4:if(!(a=e.sent).id&&!a.success){e.next=10;break}return e.next=8,b.a.fire("","Data berhasil di simpan","success").then((function(){ae(),ee(!1)}));case 8:e.next=12;break;case 10:return e.next=12,b.a.fire("","Data gagal disimpan","error");case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,b.a.fire("Error",e.t0.error_message?e.t0.error_message:"Terjadi Error! Mohon kontak admin.");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.fire({title:"Peringatan!",text:"Apakah kamu yakin ingin menghapus data ini?",icon:"warning",showCancelButton:!0,confirmButton:"Iya, tentu saja",cancelButton:"Tidak",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(r.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=19;break}return e.prev=1,e.next=4,Y.deleteSJPH(t);case 4:if(!(a=e.sent).id&&!a.success){e.next=10;break}return e.next=8,b.a.fire({icon:"success",title:"Sukses menghapus!",text:"Data kamu telah dihapus.",customClass:{confirmButton:"btn btn-success"}}).then((function(){ae()}));case 8:e.next=12;break;case 10:return e.next=12,b.a.fire({title:"Failed",text:"Failed to delete",icon:"error",customClass:{confirmButton:"btn btn-success"}});case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error(e.t0),e.next=19,b.a.fire("",e.t0.error_message?e.t0.error_message:"Something Wrong","error");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.reload();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(r.a)(o.a.mark((function e(t,n,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,X(!1),sessionStorage.sjph_id=t,sessionStorage.nama_sjph=a,sessionStorage.perusahaan_id=n,e.next=7,ue();case 7:setTimeout(_.b.success("Anda telah memilih SJPH ".concat(a)),5e3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),be=Object(l.forwardRef)((function(e,t){return Object(P.jsx)("div",{className:"form-check",children:Object(P.jsx)(i.r,Object(a.a)({type:"checkbox",ref:t},e))})})),de=[{name:"ID",selector:function(e){return e.sjph_id},sortable:function(e){return e.sjph_id}},{name:"Nama SJPH",sortable:!0,selector:function(e){return e.nama_sjph}},{name:"Dibuat pada",sortable:!0,selector:function(e){return e.created_at}},{name:"Diubah pada",sortable:!0,selector:function(e){return e.modified_at}},{name:"Pilihan",cell:function(e){return Object(P.jsx)(i.e,{className:"me-1",disabled:sessionStorage.sjph_id===e.sjph_id&&V,color:"primary",id:"buttonPilihan",onClick:function(){pe(e.sjph_id,e.perusahaan_id,e.nama_sjph)},children:"Pilih"})}},{name:"Persetujuan",cell:function(e){return Object(P.jsx)(i.e,{className:"me-1",disabled:sessionStorage.sjph_id===e.sjph_id&&V,color:"primary",id:"buttonPilihan",onClick:function(){pe(e.sjph_id,e.perusahaan_id,e.nama_sjph)},children:"Disetujui"})}},{name:"Tindakan",allowOverflow:!1,cell:function(e){return Object(P.jsxs)("div",{className:"d-flex",children:[Object(P.jsxs)(i.H,{children:[Object(P.jsx)(i.o,{className:"pe-1",tag:"span",children:Object(P.jsx)(m.a,{size:15})}),Object(P.jsxs)(i.n,{end:!0,children:[Object(P.jsxs)(i.m,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(P.jsx)(h.a,{size:15}),Object(P.jsx)("span",{className:"align-middle ms-50",children:"Details"})]}),Object(P.jsxs)(i.m,{className:"w-100",onClick:function(){le(e.sjph_id)},children:[Object(P.jsx)(j.a,{size:15}),Object(P.jsx)("span",{className:"align-middle ms-50",children:"Delete"})]})]})]}),Object(P.jsx)(f.a,{size:15})]})}}],me=function(){var e=Object(l.useContext)(C.b);return ce=e,Object(P.jsx)(i.e,{className:"ms-2",color:"primary",onClick:function(){return e.start()},children:Object(P.jsx)("span",{className:"align-middle ms-50",children:"Mulai Tur!"})})};return Object(P.jsx)(l.Fragment,{children:Object(P.jsxs)(C.a,{steps:oe,tourOptions:{useModalOverlay:!0},children:[Object(P.jsxs)(i.x,{isOpen:$,toggle:function(){return ee(!$)},className:"modal-dialog-centered modal-lg",children:[Object(P.jsx)(i.z,{className:"bg-transparent",toggle:function(){return ee(!$)}}),Object(P.jsxs)(i.y,{className:"px-sm-5 mx-50 pb-5",children:[Object(P.jsxs)("div",{className:"text-center mb-2",children:[Object(P.jsx)("h1",{className:"mb-1",children:"Tambah SJPH"}),Object(P.jsx)("p",{children:"Tambah SJPH-mu untuk mulai mengisi modul"})]}),Object(P.jsxs)(i.E,{tag:"form",className:"gy-1 pt-75",children:[Object(P.jsxs)(i.k,{xs:12,children:[Object(P.jsx)(i.u,{className:"form-label",for:"sjphName",children:"Nama SJPH"}),Object(P.jsx)(i.r,{id:"sjphName",placeholder:"SJPH Tahun 2022",value:n,onChange:function(e){return c(e.target.value)},invalid:ne.sjphName&&!0})]}),Object(P.jsxs)(i.k,{xs:12,className:"text-center mt-2 pt-50",children:[Object(P.jsx)(i.e,{onClick:ie,className:"me-1",color:"primary",children:"Kirim"}),Object(P.jsx)(i.e,{type:"reset",color:"secondary",outline:!0,onClick:function(){return ee(!1)},children:"Batal"})]})]})]})]}),Object(P.jsxs)(i.f,{children:[Object(P.jsxs)(i.h,{children:[Object(P.jsx)(i.j,{children:" SJPH - AUDITOR "}),Object(P.jsxs)("div",{className:"d-flex mt-md-0 mt-1",children:[Object(P.jsxs)(i.G,{children:[Object(P.jsxs)(i.o,{color:"secondary",caret:!0,outline:!0,children:[Object(P.jsx)(O.a,{size:15}),Object(P.jsx)("span",{className:"align-middle ms-50",children:"Export"})]}),Object(P.jsxs)(i.n,{children:[Object(P.jsxs)(i.m,{className:"w-100",children:[Object(P.jsx)(x.a,{size:15}),Object(P.jsx)("span",{className:"align-middle ms-50",children:"Print"})]}),Object(P.jsxs)(i.m,{className:"w-100",onClick:function(){return q("/sjph/export/PDF")},children:[Object(P.jsx)(g.a,{size:15}),Object(P.jsx)("span",{className:"align-middle ms-50",children:"PDF"})]})]})]}),Object(P.jsx)(me,{})]})]}),Object(P.jsxs)(i.g,{children:[Object(P.jsxs)("div",{className:"content-header",children:[Object(P.jsx)("h3",{className:"mb-0",children:"Daftar SJPH"}),Object(P.jsx)("small",{className:"text-muted",children:"Berikut adalah tabel daftar SJPH yang dibuat oleh kamu"})]}),Object(P.jsx)(i.E,{className:"justify-content-end mx-0",children:Object(P.jsxs)(i.k,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(P.jsx)(i.u,{className:"me-1",for:"search-input",children:"Search"}),Object(P.jsx)(i.r,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:L,onChange:function(e){var t=e.target.value,n=[];J(t);t.length&&(n=F.filter((function(e){var n=e.nama_sjph.toLowerCase().startsWith(t.toLowerCase())||e.created_at.toLowerCase().startsWith(t.toLowerCase())||e.modified_at.toLowerCase().startsWith(t.toLowerCase()),a=e.nama_sjph.toLowerCase().startsWith(t.toLowerCase())||e.created_at.toLowerCase().startsWith(t.toLowerCase())||e.modified_at.toLowerCase().startsWith(t.toLowerCase());return n||(!n&&a?a:null)})),B(n),J(t))}})]})}),Object(P.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",id:"dataTable",children:Object(P.jsx)(y.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:de,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(P.jsx)(v.a,{size:10}),paginationDefaultPage:N+1,paginationComponent:function(){return Object(P.jsx)(S.a,{previousLabel:"",nextLabel:"",forcePage:N,onPageChange:function(e){return function(e){T(e.selected)}(e)},pageCount:L.length?Math.ceil(I.length/7):Math.ceil(F.length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"})},data:L.length?I:F,selectableRowsComponent:be})}),"\xa0",Object(P.jsx)(i.k,{sm:"12",children:Object(P.jsx)("div",{className:"d-flex justify-content-end",children:Object(P.jsx)(i.e,{className:"me-1",color:"primary",id:"buttonTambah",onClick:function(){return ee(!0)},children:"Tambah"})})})]})]})]})})};t.default=function(){return Object(P.jsx)("div",{children:Object(P.jsx)(T,{})})}},454:function(e,t,n){},462:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(82),r=n(451),s=n(450),c=n(45),o=n.n(c),i=n(465),l=n.n(i),u=Object(r.a)((function e(){Object(s.a)(this,e)}));u.set=function(){var e=Object(a.a)(o.a.mark((function e(t,n,a){var r,s,c,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=sessionStorage.token||localStorage.token,console.log("BODY",JSON.stringify(a)),c={method:n,headers:{"Content-Type":"application/json",Authorization:s?"bearer ".concat(s):null,Accept:"application/json"},body:JSON.stringify(a)},e.next=5,fetch(l.a.base_url+t,c);case 5:if(!(i=e.sent).ok){e.next=8;break}return e.abrupt("return",i.json());case 8:return e.next=10,i.json();case 10:if(u=e.sent,console.log(u),console.log(u.msg),"JWT_EXPIRED"!==u.code&&"NO_TOKEN_PROVIDED"!==u.code&&"INVALID_TOKEN"!==u.code&&"BAD_TOKEN_FORMAT"!==u.code&&"NO_SECRET_DEFINED"!==u.code&&"JWT_MALFORMED"!==u.error_message&&"JWT_MALFORMED"!==(null===(r=u.error_message)||void 0===r?void 0:r.msg)&&"JWT_EXPIRED"!==u.error_message&&"SUBSCRIPTION_EXPIRED"!==u.code){e.next=18;break}throw delete sessionStorage.token,delete localStorage.token,window.location.reload(),u;case 18:throw u;case 19:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),u.setMultipart=function(){var e=Object(a.a)(o.a.mark((function e(t,n,a){var r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=sessionStorage.token||localStorage.token,e.next=3,fetch(l.a.base_url+t,{method:n,headers:{Authorization:r?"bearer ".concat(r):null,"Access-Control-Allow-Origin":"*"},body:a});case 3:if(!(s=e.sent).ok){e.next=9;break}return console.log(s),e.abrupt("return",s.json());case 9:return e.next=11,s.json();case 11:throw c=e.sent,console.log(c),c;case 14:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},465:function(e,t){e.exports={base_url:"https://api.pasporumkm.com"}},466:function(e,t,n){},519:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(82),r=n(451),s=n(450),c=n(45),o=n.n(c),i=n(462),l=Object(r.a)((function e(){Object(s.a)(this,e),this.getAllByUserID=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/user/".concat(sessionStorage.user_id),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAll=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getNamaPerusahaan=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/nama_perusahaan/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.createSJPH=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph","POST",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteSJPH=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.set("/sjph/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))},520:function(e,t,n){},521:function(e,t,n){},655:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(446),c=n.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),r.a.createElement("polyline",{points:"16 6 12 2 8 6"}),r.a.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"15"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Share",t.a=l},656:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(446),c=n.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),r.a.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),r.a.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Printer",t.a=l},657:function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(446),c=n.n(s);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),r.a.createElement("polyline",{points:"13 2 13 9 20 9"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="File",t.a=l}}]);
//# sourceMappingURL=17.1ac0ea86.chunk.js.map