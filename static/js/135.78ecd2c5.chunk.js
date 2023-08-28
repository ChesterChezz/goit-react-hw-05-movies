"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{1454:function(e,i,t){t.d(i,{Z:function(){return d}});var a,s=t(5243),n=t(168),r=t(6444).ZP.div(a||(a=(0,n.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),l=t(184),d=function(){return(0,l.jsx)(r,{children:(0,l.jsx)(s.W0,{height:70,width:70,radius:5,color:"#efa51b",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})}},7135:function(e,i,t){t.r(i),t.d(i,{default:function(){return h}});var a=t(9439),s=t(2791),n=t(7689),r=t(1087),l=t(5468),d={linkAdditional:"MovieDetails_linkAdditional__bvHUj",movieCard:"MovieDetails_movieCard__UPRqg",additionalsText:"MovieDetails_additionalsText__ZKcqb",addtionals:"MovieDetails_addtionals__AVYTi",additionalsList:"MovieDetails_additionalsList__lg322",additionalsLink:"MovieDetails_additionalsLink__x1TEC",li:"MovieDetails_li__hiRx4"},c=t(1454),o=t(5984),u=t(184),h=function(){var e,i,t=(0,s.useState)(null),h=(0,a.Z)(t,2),v=h[0],x=h[1],f=(0,n.UO)().movieId,m=(0,s.useState)(!1),p=(0,a.Z)(m,2),_=p[0],j=p[1],g=(0,n.TH)(),w=null!==(e=null===(i=g.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/";if((0,s.useEffect)((function(){j(!0),(0,l.V)("/movie/".concat(f),0,"").then((function(e){if(j(!1),200!==e.status)throw new Error(e.statusText);x(e.data)})).finally(j(!1))}),[f]),v){var b=v.genres,k=v.original_title,N=v.overview,T=v.poster_path,Z=v.release_date,y=(v.vote_average/10*100).toFixed(0),C=T?"https://image.tmdb.org/t/p/w500"+T:o;return(0,u.jsxs)(u.Fragment,{children:[_&&(0,u.jsx)(c.Z,{}),(0,u.jsx)(r.rU,{className:d.linkAdditional,to:w,children:"\u2190 Go back"}),(0,u.jsxs)("div",{className:d.movieCard,children:[(0,u.jsx)("img",{src:C,alt:"Poster",width:"250"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("h2",{children:[k," (",Z&&Z.slice(0,4),")"]}),(0,u.jsxs)("p",{className:d.descrText,children:["User Score: ",y,"%"]}),(0,u.jsx)("h3",{children:"Owerview"}),(0,u.jsx)("p",{className:d.descrText,children:N}),(0,u.jsx)("h3",{children:"Genres"}),b&&(0,u.jsx)("p",{className:d.descrText,children:b.map((function(e){return e.name})).join(",  ")})]})]}),(0,u.jsxs)("div",{className:d.addtionals,children:[(0,u.jsx)("p",{className:d.additionalsText,children:"Additional information"}),(0,u.jsxs)("ul",{className:d.additionalsList,children:[(0,u.jsx)("li",{className:d.additionalsLink,children:(0,u.jsx)(r.rU,{className:d.li,to:"cast",state:g.state,children:"Cast"})}),(0,u.jsx)("li",{className:d.additionalsLink,children:(0,u.jsx)(r.rU,{className:d.li,to:"reviews",state:g.state,children:"Reviews"})})]})]}),(0,u.jsx)(s.Suspense,{children:(0,u.jsx)(n.j3,{})})]})}}},5468:function(e,i,t){t.d(i,{V:function(){return d}});var a=t(5861),s=t(7757),n=t.n(s),r=t(1243),l=t(9014);function d(e){return c.apply(this,arguments)}function c(){return c=(0,a.Z)(n().mark((function e(i){var t,a,s,d,c=arguments;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:"",e.prev=2,s="https://api.themoviedb.org/3"+i+"?api_key=".concat("6dfafd08c001fd3262dc3fe23504fa05"),a&&(s+="&query=".concat(a.trim())),t&&(s+="&page=".concat(t)),e.next=10,r.Z.get(s);case 10:return d=e.sent,e.abrupt("return",d);case 14:e.prev=14,e.t0=e.catch(2),l.Am.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,14]])}))),c.apply(this,arguments)}},5984:function(e,i,t){e.exports=t.p+"static/media/image.e13b512eb3372ebf5c6e.webp"}}]);
//# sourceMappingURL=135.78ecd2c5.chunk.js.map