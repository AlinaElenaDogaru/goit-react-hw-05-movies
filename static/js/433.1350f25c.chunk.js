"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{433:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var c=n(439),s=n(791),a=n(137),r="Home_container__MGYYT",o="Home_searchForm__RM4UJ",i="Home_searchInput__db9ZD",u="Home_searchButton__gCswM",m="Home_backButton__fk1nL",h="Home_movieList__dew6t",l="Home_movieItem__yfa+9",f="Home_movieImage__F3Uf2",_=n(184),d=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],d=t[1],p=(0,s.useState)(""),v=(0,c.Z)(p,2),j=v[0],b=v[1],g=(0,s.useState)([]),k=(0,c.Z)(g,2),x=k[0],y=k[1],H=(0,s.useState)(!1),N=(0,c.Z)(H,2),S=N[0],w=N[1];(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=493c6d740f024fcc02750f44c1518471").then((function(e){return e.json()})).then((function(e){return d(e.results)}))}),[]);return(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("h1",{children:S?"Search Results":"Trending Movies"}),(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w(!0),fetch("https://api.themoviedb.org/3/search/movie?api_key=493c6d740f024fcc02750f44c1518471&query=".concat(j)).then((function(e){return e.json()})).then((function(e){return y(e.results)}))},className:o,children:[(0,_.jsx)("input",{type:"text",value:j,onChange:function(e){return b(e.target.value)},placeholder:"Search for a movie...",className:i}),(0,_.jsx)("button",{type:"submit",className:u,children:"Search"}),S&&(0,_.jsx)("button",{type:"button",onClick:function(){w(!1),b(""),y([])},className:m,children:"Back to Trending"})]}),(0,_.jsx)("ul",{className:h,children:(S?x:n).map((function(e){return(0,_.jsx)("li",{className:l,children:(0,_.jsxs)(a.rU,{to:"/movies/".concat(e.id),children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title,className:f}),(0,_.jsx)("p",{children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=433.1350f25c.chunk.js.map