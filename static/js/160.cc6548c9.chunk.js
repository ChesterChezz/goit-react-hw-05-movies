"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[160],{1454:function(e,t,n){n.d(t,{Z:function(){return o}});var a,r=n(5243),i=n(168),c=n(6444).ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),s=n(184),o=function(){return(0,s.jsx)(c,{children:(0,s.jsx)(r.W0,{height:70,width:70,radius:5,color:"#efa51b",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})}},9398:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9439),r="Button_button__wiIYs",i="Button_buttonWrap__ZRtPo",c=n(184),s=function(e){var t=e.btnName,n=e.onClick;return(0,c.jsx)("div",{className:i,children:(0,c.jsx)("button",{className:r,onClick:n,type:"button",children:t})})},o=n(8796),u=n(1087),l=function(e){var t=e.paginationPage,n=e.totalPages,r=e.movieList,i=(0,u.lr)(),l=(0,a.Z)(i,2)[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:o.Z.buttonWrap,children:[0!==r.length&&t>1&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{btnName:"Start page",onClick:function(){l({page:t=1})}}),(0,c.jsx)(s,{btnName:"Previous page",onClick:function(){l({page:t-=1})}})]}),0!==r.length&&t<n&&(0,c.jsx)(s,{btnName:"Next page",onClick:function(){l({page:t+=1})}})]})})}},4126:function(e,t,n){var a=n(1087),r=n(8796),i=n(7689),c=n(184);t.Z=function(e){var t=e.movieList,n=(0,i.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:r.Z.list,children:t.map((function(e){var t=e.id,i=e.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{className:r.Z.li,to:"/movies/".concat(t),state:{from:n},children:i})},t)}))})})}},4160:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(9439),r=n(2791),i=n(1087),c=n(5468),s="Search_searchForm__0FeD+",o="Search_input__PXR0c",u="Search_searchBtn__kEs6t",l=n(184),h=function(e){var t=e.handleSubmit,n=(e.handleSearchInputChange,e.searchText);return(0,l.jsxs)("form",{onSubmit:t,className:s,children:[(0,l.jsx)("label",{children:(0,l.jsx)("input",{className:o,value:n,name:"search",type:"text",autoComplete:"off"})}),(0,l.jsx)("button",{className:u,type:"submit",children:"Search"})]})},f=n(4126),p=n(1686),d=n.n(p),m=n(1454),v=n(9398),g=function(){var e,t=(0,i.lr)(),n=(0,a.Z)(t,2),s=n[0],o=n[1],u=(0,r.useState)(!1),p=(0,a.Z)(u,2),g=p[0],_=p[1],x=(0,r.useState)([]),b=(0,a.Z)(x,2),j=b[0],Z=b[1],y=(0,r.useRef)(0),N=null!==(e=Number(s.get("page")))&&void 0!==e?e:0,k=s.get("search")||"";(0,r.useEffect)((function(){_(!0),(0,c.V)("/search/movie",N,k).then((function(e){try{y.current=e.data.total_pages,Z(e.data.results)}catch(t){console.error(t),d().Notify.failure("Failed to fetch movie data.")}finally{_(!1)}}))}),[N,k]);var S=j.length?'Search "'.concat(k,'" (Page ').concat(N," of ").concat(y.current,")"):"No matches";return(0,l.jsxs)("div",{children:[g&&(0,l.jsx)(m.Z,{}),(0,l.jsx)(h,{handleSubmit:function(e){e.preventDefault();var t=e.target[0].value.trim();t?o({search:t,page:1}):d().Notify.info("The search bar cannot be empty. Please type any criteria in the search bar.")},searchText:k}),k&&(0,l.jsx)("h3",{children:S}),0!==j.length&&(0,l.jsx)(f.Z,{movieList:j}),(0,l.jsx)(v.Z,{paginationPage:N,totalPages:y.current,movieList:j})]})}},5468:function(e,t,n){n.d(t,{V:function(){return o}});var a=n(5861),r=n(7757),i=n.n(r),c=n(1243),s=n(9014);function o(e){return u.apply(this,arguments)}function u(){return u=(0,a.Z)(i().mark((function e(t){var n,a,r,o,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,a=u.length>2&&void 0!==u[2]?u[2]:"",e.prev=2,r="https://api.themoviedb.org/3"+t+"?api_key=".concat("6dfafd08c001fd3262dc3fe23504fa05"),a&&(r+="&query=".concat(a.trim())),n&&(r+="&page=".concat(n)),e.next=10,c.Z.get(r);case 10:return o=e.sent,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(2),s.Am.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,14]])}))),u.apply(this,arguments)}},8796:function(e,t){t.Z={buttonWrap:"MovieList_buttonWrap__bPcX1",list:"MovieList_list__yjDCC",li:"MovieList_li__kXkJl"}}}]);
//# sourceMappingURL=160.cc6548c9.chunk.js.map