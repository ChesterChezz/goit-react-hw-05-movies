"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{8076:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var r=a(9439),n=a(2791),c=a(7689),s=a(5468),i={castTitle:"Cast_castTitle__eoJbw",castActorCard:"Cast_castActorCard__xZEue",castBlankImage:"Cast_castBlankImage__F8I9l"},l=a(1454),o=a(5984),u=a(184),h=function(){var t=(0,c.UO)().movieId,e=(0,n.useState)([]),a=(0,r.Z)(e,2),h=a[0],d=a[1],f=(0,n.useState)(!1),p=(0,r.Z)(f,2),m=p[0],g=p[1];return(0,n.useEffect)((function(){g(!0),(0,s.V)("/movie/".concat(t,"/credits"),0,"").then((function(t){if(g(!1),200!==t.status)throw new Error(t.statusText);d(t.data.cast)})).finally(g(!1))}),[t]),(0,u.jsxs)("div",{children:[m&&(0,u.jsx)(l.Z,{}),0===h.length?(0,u.jsx)("h4",{className:i.castTitle,children:"No cast available."}):(0,u.jsx)("h4",{className:i.castTitle,children:"Cast"}),h.length&&(0,u.jsx)("ul",{className:i.castThumb,children:h.map((function(t){var e=t.character,a=t.id,r=t.name,n=t.profile_path;return(0,u.jsxs)("li",{className:i.castActorCard,children:[(0,u.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w200/"+n:o,alt:"Cast actor ",width:"180",height:"270"}),r,(0,u.jsxs)("p",{children:["Caracter: ",e]})]},a)}))})]})}},1454:function(t,e,a){a.d(e,{Z:function(){return l}});var r,n=a(5243),c=a(168),s=a(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),i=a(184),l=function(){return(0,i.jsx)(s,{children:(0,i.jsx)(n.W0,{height:70,width:70,radius:5,color:"#efa51b",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})}},5468:function(t,e,a){a.d(e,{V:function(){return l}});var r=a(5861),n=a(7757),c=a.n(n),s=a(1243),i=a(9014);function l(t){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(c().mark((function t(e){var a,r,n,l,o=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2&&void 0!==o[2]?o[2]:"",t.prev=2,n="https://api.themoviedb.org/3"+e+"?api_key=".concat("6dfafd08c001fd3262dc3fe23504fa05"),r&&(n+="&query=".concat(r.trim())),a&&(n+="&page=".concat(a)),t.next=10,s.Z.get(n);case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(2),i.Am.error(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[2,14]])}))),o.apply(this,arguments)}},5984:function(t,e,a){t.exports=a.p+"static/media/image.e13b512eb3372ebf5c6e.webp"}}]);
//# sourceMappingURL=76.1363ee60.chunk.js.map