(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{FJi0:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("JzyJ"),i=n("KTcv"),l=n("vOnD"),c=n("wBNj"),m=l.b.div.withConfig({componentId:"jjvxkv-0"})([""]),d=l.b.div.withConfig({componentId:"jjvxkv-1"})(["display:flex;justify-content:flex-start;align-items:center;margin:0;padding-top:6rem;@media(min-width:768px){}"]),p=l.b.h1.withConfig({componentId:"jjvxkv-2"})(["color:",";font-weight:300;font-size:36px;width:100%;text-align:left;@media(min-width:768px){text-align:left;font-size:50px;width:50%;}"],(function(e){return e.theme.main.primaryColor})),u=function(){var e=Object(o.useContext)(i.a);return a.a.createElement(m,null,a.a.createElement(c.Container,null,a.a.createElement(d,null,a.a.createElement(p,null,e.news.hero.title))))},s=n("v162"),f=l.b.section.withConfig({componentId:"sc-53dvip-0"})([""]),b=l.b.nav.withConfig({componentId:"sc-53dvip-1"})(["display:flex;justify-content:center;align-items:center;padding:2rem 0;"]),g=l.b.button.withConfig({componentId:"sc-53dvip-2"})(["background:transparent;border:none;cursor:pointer;transition:250ms ease;"]),x=Object(l.b)(g).withConfig({componentId:"sc-53dvip-3"})(["width:30px;height:30px;border-radius:50%;color:#919191;margin:0 1rem;&:hover{color:#fff;background-color:",";}"],(function(e){return e.theme.main.primaryColor})),h=l.b.svg.withConfig({componentId:"sc-53dvip-4"})(["fill:#919191;transition:250ms ease;",":hover &{fill:",";}"],g,(function(e){return e.theme.main.primaryColor})),E=l.b.nav.withConfig({componentId:"sc-53dvip-5"})(["display:flex;align-items:center;margin-bottom:2rem;"]),w=l.b.span.withConfig({componentId:"sc-53dvip-6"})([""]),C=l.b.ul.withConfig({componentId:"sc-53dvip-7"})(["list-style:none;margin:0 1rem;padding:0;display:flex;"]),v=l.b.button.withConfig({componentId:"sc-53dvip-8"})(["background-color:transparent;transition:250ms ease;box-shadow:",";color:",";border:none;cursor:pointer;width:58px;height:34px;border-radius:25px;@media(min-width:768px){width:106px;height:34px;border-radius:25px;}"],(function(e){return e.active?"0px 1px 1px rgba(0, 0, 0, .12), 0px 2px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px -1px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)":"none"}),(function(e){return e.theme.main.primaryColor})),I=function(){Object(o.useContext)(i.a).office.officeId;var e=Object(o.useContext)(i.a).news.items,t=Object(o.useState)([]),n=t[0],r=t[1],l=Object(o.useState)("TODAS"),m=l[0],d=l[1];return Object(o.useEffect)((function(){switch(m){case"TODAS":return r(e);case"LEGALES":return r(e.filter((function(e){return"Legales"===e.tag})));case"NOTICIAS":return r(e.filter((function(e){return"Noticias"===e.tag})));default:return r(e)}}),[m]),a.a.createElement(f,null,a.a.createElement(c.Container,null,a.a.createElement("div",{style:{paddingTop:"2rem"}},a.a.createElement(c.Row,null,a.a.createElement(c.Col,{xs:12},a.a.createElement(E,null,a.a.createElement(w,null,"Categorias: "),a.a.createElement(C,null,a.a.createElement("li",null,a.a.createElement(v,{onClick:function(){return d("TODAS")},active:"TODAS"===m},"Todas")),a.a.createElement("li",null,a.a.createElement(v,{onClick:function(){return d("LEGALES")},active:"LEGALES"===m},"Legales")),a.a.createElement("li",null,a.a.createElement(v,{onClick:function(){return d("NOTICIAS")},active:"NOTICIAS"===m},"Noticias"))))),n.map((function(e){return a.a.createElement(c.Col,{key:e.id,xs:12,md:4,style:{margin:"1rem 0"}},a.a.createElement(s.a,e))})),a.a.createElement(c.Col,{xs:12},a.a.createElement(b,null,a.a.createElement(g,null,a.a.createElement(h,{width:"8",height:"14",fill:"none",version:"1.1",viewBox:"0 0 8 14"},a.a.createElement("path",{d:"m0.28783 6.3069 6.0345-6.0196c0.38387-0.38312 1.0062-0.38312 1.3899 0 0.38371 0.38278 0.38371 1.0036 0 1.3863l-5.3396 5.3264 5.3394 5.3262c0.38371 0.383 0.38371 1.0037 0 1.3865-0.38371 0.3829-1.006 0.3829-1.3899 0l-6.0345-6.0197c-0.19186-0.19148-0.28767-0.44217-0.28767-0.69299 0-0.25094 0.096005-0.50181 0.28783-0.6932z"}))),a.a.createElement(x,null,"1"),a.a.createElement(x,null,"2"),a.a.createElement(x,null,"3"),a.a.createElement(x,null,"4"),a.a.createElement(x,null,"5"),a.a.createElement(g,null,a.a.createElement(h,{width:"8",height:"14",fill:"none",version:"1.1",viewBox:"0 0 8 14"},a.a.createElement("path",{d:"m7.7122 7.6931-6.0345 6.0196c-0.38387 0.3831-1.0062 0.3831-1.3899 0-0.38371-0.3828-0.38371-1.0036 0-1.3864l5.3396-5.3264-5.3394-5.3262c-0.38371-0.38293-0.38371-1.0037 0-1.3865 0.38371-0.38293 1.0061-0.38293 1.3899 0l6.0345 6.0197c0.19185 0.19148 0.28767 0.44217 0.28767 0.69299 0 0.25094-0.096 0.50181-0.28783 0.6932z"})))))))))},y=n("nrwI");t.default=function(){return a.a.createElement(r.a,null,a.a.createElement(u,null),a.a.createElement(I,null),a.a.createElement(c.Container,null,a.a.createElement(c.Row,null,a.a.createElement(c.Col,{xs:12},a.a.createElement(y.a,null)))))}},nrwI:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("vOnD"),i=n("wBNj"),l=n("KTcv"),c=n("qTur"),m=n("Wbzz"),d=r.b.div.withConfig({componentId:"sc-5j4wy4-0"})(["margin-top:",";padding:2rem 0;background-color:",";color:#fff;"],(function(e){return e.noMargin?0:"4rem"}),(function(e){return e.theme.main.primaryColor})),p=(r.b.div.withConfig({componentId:"sc-5j4wy4-1"})([""]),r.b.p.withConfig({componentId:"sc-5j4wy4-2"})(["text-align:center;@media(min-width:768px){font-size:2rem;text-align:center;width:50%;}"])),u=r.b.div.withConfig({componentId:"sc-5j4wy4-3"})(["display:flex;justify-content:center;align-items:center;width:100%;"]);t.a=function(e){var t=e.noMargin,n=Object(o.useContext)(l.a).home.contact.title,r=Object(o.useContext)(l.a).builderId;return a.a.createElement(o.Fragment,null,a.a.createElement(d,{noMargin:t},a.a.createElement(i.Row,{align:"center",justify:"center"},a.a.createElement(i.Col,{xs:12,md:12},a.a.createElement(u,null,a.a.createElement(p,null,n))),a.a.createElement(i.Col,{xs:12,md:12},a.a.createElement(u,null,a.a.createElement(c.a,{onClick:function(){return Object(m.c)("/contact?builderId="+r)}},"Contáctanos"))))))}},v162:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return k}));var o=n("q1tI"),a=n.n(o),r=n("KTcv"),i=n("fHS2"),l=n("vOnD"),c=n("c+WK"),m=l.b.div.withConfig({componentId:"sc-1bfeezo-0"})(["background-color:#fff;display:flex;flex-direction:column;align-items:center;border:1px solid #EBEBEB;height:480px;transition:250ms ease;box-shadow:0px 2px 10px rgba(0,0,0,0.108337);margin:0 .3rem;&:hover{box-shadow:0px 1px 1px rgba(0,0,0,.12),0px 2px 2px rgba(0,0,0,.12),0px 4px 4px rgba(0,0,0,.12),0px 8px 8px rgba(0,0,0,.12),0px 16px 16px rgba(0,0,0,.12),0px 32px 32px rgba(0,0,0,.12);}@media(min-width:768px){margin:0;}"]),d=l.b.div.withConfig({componentId:"sc-1bfeezo-1"})(["position:relative;background-image:linear-gradient(rgba(0,0,0,.8),transparent 35%),url(",");background-position:center;background-size:cover;background-repeat:none;width:100%;padding-top:75%;"],(function(e){return e.src})),p=l.b.div.withConfig({componentId:"sc-1bfeezo-2"})(["padding:1rem 1rem 1.5rem 1rem;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;color:#212121;"]),u=l.b.ul.withConfig({componentId:"sc-1bfeezo-3"})(["list-style:none;padding:0;margin:0;font-size:14px;"]),s=l.b.li.withConfig({componentId:"sc-1bfeezo-4"})(["font-size:1.2rem;margin-bottom:.5rem;"]),f=l.b.li.withConfig({componentId:"sc-1bfeezo-5"})(["color:",";font-size:1.2rem;font-weight:bold;margin-bottom:.5rem;"],(function(e){return e.theme.main.primaryColor})),b=l.b.span.withConfig({componentId:"sc-1bfeezo-6"})(["font-weight:bold;"]),g=l.b.ul.withConfig({componentId:"sc-1bfeezo-7"})(["list-style:none;padding:1rem;color:#919191;"]),x=l.b.li.withConfig({componentId:"sc-1bfeezo-8"})(["margin-bottom:.5rem;"]),h=l.b.span.withConfig({componentId:"sc-1bfeezo-9"})(["height:1px;width:100%;background-color:#EBEBEB;"]),E=l.b.div.withConfig({componentId:"sc-1bfeezo-10"})(["position:absolute;top:10px;left:5px;color:#fff;"]),w=function(e){var t=e._id,n=e.mainImage,l=e.title,w=e.value,C=e.code,v=e.ubication,I=e.characteristics,y=Object(o.useContext)(r.a).builderId;return a.a.createElement(i.a,{to:"/property?builderId="+y+"&propertyId="+t,title:"Ver propiedad"},a.a.createElement(m,null,a.a.createElement(d,{src:n},a.a.createElement(E,null,a.a.createElement(b,null,"Venta - "),a.a.createElement("span",null,"cod ",C))),a.a.createElement(p,null,a.a.createElement(u,null,a.a.createElement(s,null,Object(c.d)(l,30)),a.a.createElement(f,null,"UF ",w)),a.a.createElement(h,null),a.a.createElement(g,null,a.a.createElement(x,null,Object(c.d)(v.address,50)),I.slice(0,2).map((function(e,t){return a.a.createElement(x,{key:t},a.a.createElement("span",null,e.name," ",e.value," ","Sup. Total"===e.name&&"mt2"))}))))))},C=l.b.div.withConfig({componentId:"sc-1bg8bqe-0"})(["background-color:#fff;border:1px solid #EBEBEB;"]),v=l.b.img.withConfig({componentId:"sc-1bg8bqe-1"})(["object-fit:cover;object-position:center;width:100%;"]),I=l.b.span.withConfig({componentId:"sc-1bg8bqe-2"})(["width:86px;height:27px;border-radius:20px;background-color:",";color:#fff;display:flex;justify-content:center;align-items:center;"],(function(e){return e.theme.main.primaryColor})),y=l.b.div.withConfig({componentId:"sc-1bg8bqe-3"})(["padding:1rem;"]),j=l.b.p.withConfig({componentId:"sc-1bg8bqe-4"})([""]),z=l.b.span.withConfig({componentId:"sc-1bg8bqe-5"})(["color:#919191;font-size:14px;"]),k=function(e){var t=e.image,n=e.title,o=e.tag,r=e.date;return a.a.createElement(i.a,{to:"/new"},a.a.createElement(C,null,a.a.createElement(v,{src:t,alt:n}),a.a.createElement(y,null,a.a.createElement(I,null,o),a.a.createElement(j,null,n),a.a.createElement(z,null,r))))}}}]);
//# sourceMappingURL=component---src-pages-news-js-af626c1d2ef57ecd0d4f.js.map