(this.webpackJsonpmemorycard=this.webpackJsonpmemorycard||[]).push([[0],{13:function(e,n,c){},14:function(e,n,c){},15:function(e,n,c){},16:function(e,n,c){"use strict";c.r(n);var t=c(0),a=c(1),i=c.n(a),r=c(6),d=c.n(r),o=(c(13),c(7)),s=c(3),u=(c(14),c(15),function(e){var n=e.cardName,c=e.id,a=e.handleClick,i=e.flipped,r=e.disabled,d=e.solved;return Object(t.jsx)("div",{className:"flip-container card ".concat(i?"flipped":""),onClick:function(){return r?null:a(c)},children:Object(t.jsx)("div",{className:"flipper",children:Object(t.jsx)("img",{src:i||d?"./img/".concat(n,".png"):"./img/back.png",className:i?"front":"back"})})})}),l=function(e){var n=e.cards,c=e.flipped,a=e.handleClick,i=e.disabled,r=e.solved;return Object(t.jsx)("div",{className:"board",children:n.map((function(e){return Object(t.jsx)(u,{id:e.id,cardName:e.cardName,flipped:c.includes(e.id),handleClick:a,disabled:i||r.includes(e.id),solved:r.includes(e.id)},e.id)}))})},f=function(){var e=0;return function(e){for(var n=e.slice(0),c=n.length-1;c>0;c--){var t=Math.floor(Math.random()*(c+1)),a=[n[t],n[c]];n[c]=a[0],n[t]=a[1]}return n}(["cherry","cocktail","footprint","pagoda","sedan","star","superman","unicorn"].reduce((function(n,c){return n.push({id:e++,cardName:c}),n.push({id:e++,cardName:c}),n}),[]))};var b=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),c=n[0],i=n[1],r=Object(a.useState)([]),d=Object(s.a)(r,2),u=d[0],b=d[1],j=Object(a.useState)([]),m=Object(s.a)(j,2),p=m[0],h=m[1],O=Object(a.useState)(!1),v=Object(s.a)(O,2),g=v[0],N=v[1];Object(a.useEffect)((function(){i(f())}),[]),Object(a.useEffect)((function(){x()}),[c]);var x=function(){c.map((function(e){var n="./img/".concat(e.cardName,".png");(new Image).src=n}))},k=function(e){return u.includes(e)},C=function(e){var n=c.find((function(n){return n.id===e})),t=c.find((function(e){return e.id===u[0]}));return n.cardName===t.cardName},w=function(){b([]),N(!1)};return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("h1",{children:"Memory Game"}),Object(t.jsx)("h2",{children:"Can you remember where the cards are?"}),Object(t.jsx)("button",{className:"reload",onClick:function(){window.location.reload()},children:"New Game"}),Object(t.jsx)(l,{cards:c,flipped:u,disabled:g,handleClick:function(e){N(!0),0===u.length?(b([e]),N(!1)):k(e)?N(!1):(b([u[0],e]),C(e)?(h([].concat(Object(o.a)(p),[u[0],e])),w()):setTimeout(w,600))},solved:p})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;c(e),t(e),a(e),i(e),r(e)}))};d.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(b,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.60023ca5.chunk.js.map