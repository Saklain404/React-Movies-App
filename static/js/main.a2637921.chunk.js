(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{21:function(e,s,n){},23:function(e,s,n){},24:function(e,s,n){},26:function(e,s,n){},45:function(e,s,n){},46:function(e,s,n){"use strict";n.r(s);var c=n(1),a=n.n(c),t=n(15),i=n.n(t),o=(n(21),n(6)),l=n.n(o),r=n(16),j=n(3),d=(n(23),n(24),n.p+"static/media/search-icon.077696d4.svg"),v=n.p+"static/media/movie-icon.1e64a77b.svg",u=n(0);var m=function(e){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)("img",{className:"movieIcon",src:v,alt:"photos"}),Object(u.jsx)("span",{className:"header-name",children:"React Movie App"})]}),Object(u.jsxs)("div",{className:"search-bar",children:[Object(u.jsx)("img",{src:d,alt:"search-icon"}),Object(u.jsx)("input",{value:e.values,onChange:e.textChange,className:"search-box",type:"text",src:d,placeholder:"Search Movie"})]})]})},b=(n(26),function(e){var s=e.movie,n=s.Title,c=s.Year,a=s.imdbID,t=s.Type,i=s.Poster;return Object(u.jsxs)("div",{onClick:function(){e.onMovieSelect(a)},className:"MovieContainer",children:[Object(u.jsx)("img",{className:"CoverImage",src:i,alt:"ggg"}),Object(u.jsx)("span",{className:"MovieName",children:n}),Object(u.jsxs)("div",{className:"InfoColumn",children:[Object(u.jsxs)("span",{className:"MovieInfo",children:[" Year : ",c]}),Object(u.jsxs)("span",{className:"MovieInfo",children:["Type: ",t]})]})]})}),h=n(4),p=n.n(h),O=(n(45),function(e){var s=Object(c.useState)(),n=Object(j.a)(s,2),a=n[0],t=n[1],i=e.selectedMovie;return Object(c.useEffect)((function(){p.a.get("https://www.omdbapi.com/?i=".concat(i,"&apikey=").concat(x)).then((function(e){return t(e.data)}))}),[i]),Object(u.jsx)("div",{className:"MovieInfoContainers",children:a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{className:"CoverImages",src:null===a||void 0===a?void 0:a.Poster,alt:"ggg"}),Object(u.jsxs)("div",{className:"InfoColumns",children:[Object(u.jsxs)("span",{className:"MovieNames",children:["Movie : ",null===a||void 0===a?void 0:a.Title]}),Object(u.jsxs)("span",{className:"Infos",children:["IMDB Rating: ",null===a||void 0===a?void 0:a.imdbRating]}),Object(u.jsxs)("span",{className:"Infos",children:["Year: ",null===a||void 0===a?void 0:a.Year]}),Object(u.jsxs)("span",{className:"Infos",children:["Language: ",null===a||void 0===a?void 0:a.Language]}),Object(u.jsxs)("span",{className:"Infos",children:["Rated:  ",null===a||void 0===a?void 0:a.Rated]}),Object(u.jsxs)("span",{className:"Infos",children:["Release: ",null===a||void 0===a?void 0:a.Released]}),Object(u.jsxs)("span",{className:"Infos",children:["Runtime: ",null===a||void 0===a?void 0:a.Runtime]}),Object(u.jsxs)("span",{className:"Infos",children:["Genre:",null===a||void 0===a?void 0:a.Genre]}),Object(u.jsxs)("span",{className:"Infos",children:["Director: ",Object(u.jsx)("span",{className:"spn",children:null===a||void 0===a?void 0:a.Director})]}),Object(u.jsxs)("span",{className:"Infos",children:["Actors: ",Object(u.jsx)("span",{className:"spn",children:null===a||void 0===a?void 0:a.Actors})]}),Object(u.jsxs)("span",{className:"Infos",children:["Plot: ",Object(u.jsx)("span",{className:"spn",children:null===a||void 0===a?void 0:a.Plot})]})]}),Object(u.jsx)("div",{onClick:function(){return e.onMovieSelect()},className:"colseBtn",children:"X"})]}):"Loading..."})}),x="eeba0f9a";var f=function(){var e=Object(c.useState)(),s=Object(j.a)(e,2),n=s[0],a=s[1],t=Object(c.useState)(),i=Object(j.a)(t,2),o=i[0],d=i[1],h=Object(c.useState)(),f=Object(j.a)(h,2),g=f[0],N=f[1],I=Object(c.useState)(),M=Object(j.a)(I,2),C=M[0],S=M[1],w=function(){var e=Object(r.a)(l.a.mark((function e(s){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://www.omdbapi.com/?s=".concat(s,"&apikey=").concat(x));case 2:n=e.sent,N(n.data.Search);case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{textChange:function(e){clearTimeout(o),a(e.target.value);var s=setTimeout((function(){return w(e.target.value)}),500);d(s)},values:n}),C&&Object(u.jsx)(O,{selectedMovie:C,onMovieSelect:S}),Object(u.jsx)("div",{className:"ComponentAlignment",children:(null===g||void 0===g?void 0:g.length)?g.map((function(e,s){return Object(u.jsx)(b,{movie:e,onMovieSelect:S},s)})):Object(u.jsxs)("div",{className:"homeInfo",children:[Object(u.jsx)("img",{className:"homeIcon",src:v,alt:"icon"}),Object(u.jsx)("h3",{children:"Please Start Searching For Movies..."})]})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(s){var n=s.getCLS,c=s.getFID,a=s.getFCP,t=s.getLCP,i=s.getTTFB;n(e),c(e),a(e),t(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.a2637921.chunk.js.map