"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{1454:function(e,t,n){n.d(t,{Z:function(){return u}});var r,i=n(5243),s=n(168),a=n(6444).ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),c=n(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(i.W0,{height:70,width:70,radius:5,color:"#efa51b",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})}},2168:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(9439),i=n(2791),s=n(7689),a=n(5468),c="Reviews_reviewsTitle__mxqAS",u="Reviews_list__okdpy",o=n(1454),l=n(184),h=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),n=(0,r.Z)(t,2),h=n[0],d=n[1],f=(0,i.useState)(!1),v=(0,r.Z)(f,2),p=v[0],w=v[1];return(0,i.useEffect)((function(){w(!0),(0,a.V)("/movie/".concat(e,"/reviews"),0,"").then((function(e){if(200!==e.status)throw new Error(e.statusText);d(e.data.results),w(!1)}))}),[e]),(0,l.jsxs)("div",{children:[p&&(0,l.jsx)(o.Z,{}),0===h.length?(0,l.jsx)("h4",{className:c,children:"We don't have any reviews for this movie."}):(0,l.jsx)("h4",{className:c,children:"Reviews"}),h.length&&(0,l.jsx)("ul",{className:u,children:h.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h4",{children:["Author: ",n]}),(0,l.jsx)("p",{children:r})]},t)}))})]})}},5468:function(e,t,n){n.d(t,{V:function(){return u}});var r=n(5861),i=n(7757),s=n.n(i),a=n(1243),c=n(9014);function u(e){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(s().mark((function e(t){var n,r,i,u,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2&&void 0!==o[2]?o[2]:"",e.prev=2,i="https://api.themoviedb.org/3"+t+"?api_key=".concat("6dfafd08c001fd3262dc3fe23504fa05"),r&&(i+="&query=".concat(r.trim())),n&&(i+="&page=".concat(n)),e.next=10,a.Z.get(i);case 10:return u=e.sent,e.abrupt("return",u);case 14:e.prev=14,e.t0=e.catch(2),c.Am.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,14]])}))),o.apply(this,arguments)}}}]);
//# sourceMappingURL=168.cdd78828.chunk.js.map