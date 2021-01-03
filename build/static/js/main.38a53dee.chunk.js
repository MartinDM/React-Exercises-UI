(this["webpackJsonpgs-exercises"]=this["webpackJsonpgs-exercises"]||[]).push([[0],{115:function(e,t){},134:function(e,t,c){},140:function(e,t,c){},159:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(0),n=c(11),r=c.n(n),i=(c(89),c(44)),l=c.n(i),o=c(71),j=c(20),d=c(188),h=c(193),b=c(185),x=c(7),m=c(72),u=c.n(m),O=c(189),g=c(190),p=c(196),f=c(195),k=c(194),_=c(191),v=c(163),N=c(74),y=c.n(N),w=c(75),C=c.n(w),F=(c(134),Object(b.a)((function(){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"}}}))),I=Object(x.a)({switchBase:{color:"#333","&$checked":{color:"#333;"},"&$checked + $track":{backgroundColor:"#333",color:"#333"}},checked:{},track:{backgroundColor:"#333",opacity:.5},thumb:{border:"2px solid white",background:"2px solid white"}})(f.a);function S(e){var t=e.exercise,c=Object(a.useState)("female"),n=Object(j.a)(c,2),r=n[0],i=n[1],l=F(),o=Object(a.useState)(!1),h=Object(j.a)(o,2),b=h[0],x=h[1],m=t.bodyAreas,f=function(){x(!1)};return Object(s.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",spacing:2,className:"exercise",children:[Object(s.jsxs)(d.a,{item:!0,sm:8,children:[Object(s.jsx)("h1",{className:"h2 exercise__title",children:t.name}),m.length>=0&&Object(s.jsxs)("div",{className:"exercise__areas",children:[Object(s.jsx)("h3",{className:"h5 exercise__areas-title",children:"Muscle groups:"}),Object(s.jsx)("ul",{className:"exercise__areas-list",children:m.map((function(e,t){return Object(s.jsx)("li",{children:Object(s.jsx)(p.a,{label:e})},t)}))})]}),Object(s.jsx)("div",{className:"exercise__details",children:Object(s.jsx)(O.a,{onClick:function(){x(!0)},variant:"contained",className:"exercise__details-toggle",endIcon:Object(s.jsx)(y.a,{}),children:"See details"})})]}),Object(s.jsxs)(d.a,{item:!0,xs:12,sm:4,children:[Object(s.jsx)("div",{className:"exercise__image",style:{backgroundImage:"linear-gradient(0deg, rgba(0,125,181,1) 0%,\n                            rgba(1,148,214,0) 71%),\n                            url(".concat(t[r].image,")")},children:Object(s.jsx)("img",{src:t[r].image,alt:t.name,className:"u-visually-hidden"})}),Object(s.jsxs)(g.a,{className:"exercise__gender-toggle",children:[Object(s.jsx)("h3",{className:"h5 exercise__gender-toggle-title",children:"Demo by:"}),Object(s.jsxs)(d.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(s.jsx)(d.a,{item:!0,children:"Female"}),Object(s.jsx)(d.a,{item:!0,children:Object(s.jsx)(I,{color:"default",checked:"male"===r,onChange:function(e){i(e.target.checked?"male":"female")},name:"gender"})}),Object(s.jsx)(d.a,{item:!0,children:"Male"})]})]})]}),Object(s.jsx)(k.a,{"aria-labelledby":"exercise-title","aria-describedby":"exercise-steps",className:l.modal,open:b,onClose:f,closeAfterTransition:!0,BackdropComponent:_.a,BackdropProps:{timeout:500},children:Object(s.jsx)(v.a,{in:b,children:Object(s.jsx)(d.a,{container:!0,justify:"center",direction:"row",maxWidth:"md",className:"modal",children:Object(s.jsxs)(d.a,{item:!0,className:"modal__content",children:[Object(s.jsx)(C.a,{className:"modal-close",style:{color:"#53565a"},onClick:f}),Object(s.jsxs)("div",{className:"exercise__content",id:"exercise-steps",children:[Object(s.jsx)("h2",{className:"h2 exercise__title exercise__title--modal",id:"exercise-title",children:t.name}),u()(t.transcript)]})]})})})})]})}c(140);function B(e){var t=e.exercises;return 0!==t.length&&t?Object(s.jsx)("div",{className:"exercise-list",children:t.map((function(e,t){return Object(s.jsx)(S,{className:"exercise",exercise:e},e.id)}))}):Object(s.jsx)("div",{className:"exercise-list--empty",children:Object(s.jsxs)("div",{className:"message-area",children:[Object(s.jsx)("h1",{className:"h2 message-area__title",children:"Oops"}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"No exercises to show right now! \ud83d\ude27 "})}),Object(s.jsxs)("p",{children:["Fear not! Get workout tips from the team at ",Object(s.jsx)("a",{href:"https://central.gymshark.com/category/conditioning",children:"Gymshark Central"})]})]})})}var T=c(192),G=Object(b.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#007db5",backgroundColor:"white"}}}));function P(e){var t=G();return e?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(_.a,{className:t.backdrop,open:!0,children:Object(s.jsx)(T.a,{color:"inherit"})})}):Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Oops! There was an error behind the scenes \ud83d\ude27"}),Object(s.jsxs)("p",{children:["Fear not! Get workout tips from the team at ",Object(s.jsx)("a",{href:"https://central.gymshark.com/category/conditioning",children:"Gymshark Central"})]})]})}var $=c(76),z=c.n($);function A(){var e=Object(a.useState)(),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),i=Object(j.a)(r,2),b=i[0],x=i[1],m=Object(a.useState)([]),u=Object(j.a)(m,2),O=u[0],g=u[1];Object(a.useEffect)((function(){f()}),[]);var p=function(){setTimeout((function(){n(!0)}),1e3)},f=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z()({url:"https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/",timeout:1e3}).then((function(e){var t=e.data.exercises;g(t),p()})).catch((function(e){p(),x(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=Object(s.jsx)(B,{exercises:O}),_=Object(s.jsx)(P,{success:b});return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(h.a,{fixed:!0,maxWidth:"md",children:Object(s.jsx)(d.a,{container:!0,direction:"row",justify:"center",children:c&&b?k:_})})})}var D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,198)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(s.jsx)(A,{}),document.getElementById("root")),D()},89:function(e,t,c){}},[[159,1,2]]]);
//# sourceMappingURL=main.38a53dee.chunk.js.map