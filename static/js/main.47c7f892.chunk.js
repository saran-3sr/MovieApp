(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(4),i=s.n(n),r=(s(9),s(10),s(3)),o=s(0);var j=function(e){var t=e.moviedata;return console.log(e),Object(o.jsxs)("div",{className:"moviecard",children:[Object(o.jsxs)("div",{className:"moviepos",children:[Object(o.jsx)("img",{className:"pos",src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:t.title}),Object(o.jsxs)("div",{className:"titlediv",children:[Object(o.jsx)("h1",{className:"title",children:t.title}),Object(o.jsx)("hr",{})]})]}),Object(o.jsxs)("div",{className:"moviedescard",children:[Object(o.jsxs)("p",{className:"moviedes",children:[Object(o.jsx)("strong",{children:"Release Date - "}),t.release_date]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{className:"moviedes",children:[Object(o.jsx)("strong",{children:"Description"})," ",Object(o.jsx)("br",{}),t.overview]}),Object(o.jsx)("hr",{})]})]})};var l=function(){var e=Object(c.useState)(" "),t=Object(r.a)(e,2),s=(t[0],t[1]),a=Object(c.useState)([]),n=Object(r.a)(a,2),i=n[0],l=n[1];return Object(o.jsxs)("div",{className:"searchbar",children:[Object(o.jsx)("div",{className:"searchdiv",children:Object(o.jsx)("input",{type:"text",class:"search",onChange:function(e){e.preventDefault(),s(e.target.value),console.log(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=56665026e3870c33d4fef3747976d333&query=".concat(e.target.value,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.errors?l([]):l(e.results)}))}})}),i.length>0&&i.map((function(e){return Object(o.jsx)(j,{moviedata:e})}))]})};var d=function(){return Object(o.jsx)("div",{className:"Main",children:Object(o.jsx)(l,{})})},h=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),h()},9:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.47c7f892.chunk.js.map