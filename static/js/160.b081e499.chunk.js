"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[160],{1454:function(e,t,n){n.d(t,{Z:function(){return o}});var a,r=n(5243),c=n(168),i=n(6444).ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),s=n(184),o=function(){return(0,s.jsx)(i,{children:(0,s.jsx)(r.W0,{height:70,width:70,radius:5,color:"#efa51b",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})}},1361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(1087),r="Button_button__wiIYs",c="Button_buttonWrap__ZRtPo",i=n(184),s=function(e){var t=e.btnName,n=e.onClick;return(0,i.jsx)("div",{className:c,children:(0,i.jsx)("button",{className:r,onClick:n,type:"button",children:t})})},o="MovieList_buttonWrap__bPcX1",u="MovieList_list__yjDCC",l="MovieList_li__kXkJl",h=function(e){var t=e.location,n=e.movieList,r=e.paginationPage,c=e.totalPages,h=e.onLoadNextPage,g=e.onLoadPreviousPage,d=e.onToStartPage;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ul",{className:u,children:n.map((function(e){var n=e.id,r=e.title;return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{className:l,to:"/movies/".concat(n),state:{from:t},children:r})},n)}))}),(0,i.jsxs)("div",{className:o,children:[0!==n.length&&r>1&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{btnName:"Start page",onClick:d}),(0,i.jsx)(s,{btnName:"Previous page",onClick:g})]}),0!==n.length&&r<c&&(0,i.jsx)(s,{btnName:"Next page",onClick:h})]})]})}},4160:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(9439),r=n(2791),c=n(7689),i=n(1087),s=n(5468),o="Search_searchForm__0FeD+",u="Search_input__PXR0c",l="Search_searchBtn__kEs6t",h=n(184),g=function(e){var t=e.handleSubmit,n=e.handleSearchInputChange,a=e.searchText;return(0,h.jsxs)("form",{onSubmit:t,className:o,children:[(0,h.jsx)("label",{children:(0,h.jsx)("input",{className:u,value:a,name:"search",type:"text",onChange:n,autoComplete:"off"})}),(0,h.jsx)("button",{className:l,type:"submit",children:"Search"})]})},d=n(1361),f=n(1686),p=n.n(f),m=n(1454),v=function(){var e,t,n,o=(0,c.TH)(),u=(0,i.lr)(),l=(0,a.Z)(u,2),f=l[0],v=l[1],_=(0,r.useState)(!1),x=(0,a.Z)(_,2),b=x[0],j=x[1],P=(0,r.useState)([]),N=(0,a.Z)(P,2),S=N[0],y=N[1],k=(0,r.useState)(null!==(e=f.get("search"))&&void 0!==e?e:""),C=(0,a.Z)(k,2),Z=C[0],w=C[1],L=(0,r.useRef)(0),T=null!==(t=Number(f.get("page")))&&void 0!==t?t:0,F="";(0,r.useEffect)((function(){j(!0),(0,s.V)("/search/movie",T,Z).then((function(e){if(200!==e.status)throw new Error(e.statusText);L.current=e.data.total_pages,y(e.data.results),j(!1)}))}),[T,Z]);return F=0===S.length?"No matches":'Search "'.concat(Z,'" (Page ').concat(T," of ").concat(L.current,")"),(0,h.jsxs)("div",{children:[b&&(0,h.jsx)(m.Z,{}),(0,h.jsx)(g,{handleSubmit:function(e){e.target[0].value.trim()||p().Notify.info("The search bar cannot be empty. Please type any criteria in the search bar."),e.preventDefault(),T=1;var t=f.get("search");v({search:t.trim(),page:1}),w(t.trim())},handleSearchInputChange:function(e){var t=e.target.value;v({search:t,page:T})},searchText:null!==(n=f.get("search"))&&void 0!==n?n:""}),Z&&(0,h.jsx)("h3",{children:F}),0!==S.length&&(0,h.jsx)(d.Z,{location:o,movieList:S,paginationPage:T,totalPages:L.current,onLoadNextPage:function(){v({search:Z,page:T+=1})},onLoadPreviousPage:function(){v({search:Z,page:T-=1})},onToStartPage:function(){T=1,v({search:Z,page:1})}})]})}},5468:function(e,t,n){n.d(t,{V:function(){return o}});var a=n(5861),r=n(7757),c=n.n(r),i=n(1243),s=n(9014);function o(e){return u.apply(this,arguments)}function u(){return u=(0,a.Z)(c().mark((function e(t){var n,a,r,o,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,a=u.length>2&&void 0!==u[2]?u[2]:"",e.prev=2,r="https://api.themoviedb.org/3"+t+"?api_key=".concat("6dfafd08c001fd3262dc3fe23504fa05"),a&&(r+="&query=".concat(a.trim())),n&&(r+="&page=".concat(n)),e.next=10,i.Z.get(r);case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(2),s.Am.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,14]])}))),u.apply(this,arguments)}}}]);
//# sourceMappingURL=160.b081e499.chunk.js.map