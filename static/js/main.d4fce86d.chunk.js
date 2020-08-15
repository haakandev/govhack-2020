(this["webpackJsonpsuper-check"]=this["webpackJsonpsuper-check"]||[]).push([[0],{294:function(e,t,a){e.exports=a(435)},435:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),l=a(19),c=a(497),u=a(498),s=a(485),m=a(479),d=a(496),p=a(248),f=Object(p.a)({palette:{}}),b=a(249),g=a(484),h=a(499),E=a(483),y=a(487),v=a(486),x=a(504),w=a(252),S=a(120),j=a.n(S),C=a(171),O=a(159),k=function(e){var t=e.inputRef,a=e.onChange,n=Object(C.a)(e,["inputRef","onChange"]);return r.a.createElement(O.a,Object.assign({},n,{getInputRef:t,onValueChange:function(t){a({target:{name:e.name,value:t.value}})},thousandSeparator:!0,isNumericString:!0,allowNegative:!1,prefix:"$"}))},I=function(e){var t=e.inputRef,a=e.onChange,n=Object(C.a)(e,["inputRef","onChange"]);return r.a.createElement(O.a,Object.assign({},n,{getInputRef:t,onValueChange:function(t){a({target:{name:e.name,value:t.value}})},thousandSeparator:!0,isNumericString:!0,allowNegative:!1,suffix:"%"}))},T=[{min:0,max:18200,rate:0},{min:18201,max:37e3,rate:.19},{min:37001,max:87e3,rate:.325},{min:87001,max:18e4,rate:.37},{min:180001,max:1/0,rate:.45}],R={title:"Expected yearly returns",text:"Over the last 40 years, super has returned an average of 10.4% per year, or 6.2% adjusted for CPI",sources:["2"]},N={title:"Super contribtuions",text:"Currently your employer is required to contribute at least 9.5% of your salary to your super. If you are able to make larger contributions you can greatly increase your super!\n\nNote that if you contribute more than $25,000/year you will not get the same tax benefits on the full amount."},A={title:"Typical salary",text:"The average salary in Australia 2017 was $59,328. The median was $49,397.",sources:["1"]},D=function(e){var t=0;return T.forEach((function(a){a.min<=e&&e<=a.max?t+=(e-a.min)*(1-a.rate):a.min<=e&&e>a.max&&(t+=(a.max-a.min)*(1-a.rate))})),t},W=function(e){e.current&&e.current.scrollIntoView({behavior:"smooth"})},P=function(e){var t=e<0?"-":"",a=parseInt(Math.abs(Number(e)||0).toFixed(0),10).toString(),n=a.length>3?a.length%3:0;return"$".concat(t).concat(n?a.substr(0,n)+",":"").concat(a.substr(n).replace(/(\d{3})(?=\d)/g,"$1".concat(","))).concat("")},$=a(482),z=a(502),B=Object(m.a)((function(e){return{modal:{display:"flex",flexDirection:"column",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},sources:{marginTop:e.spacing(2)},link:{padding:e.spacing(1)},button:{marginTop:e.spacing(3),alignSelf:"flex-end"}}})),V=function(e){var t=e.open,a=e.handleClose,n=e.tooltip,o=B(),i=n||{},l=i.text,c=i.title,u=i.sources;return r.a.createElement(z.a,{open:t,onClose:a,"aria-labelledby":"modal-title","aria-describedby":"modal-description"},r.a.createElement("div",{className:o.modal},r.a.createElement(w.a,{variant:"h5",id:"modal-title"},c),r.a.createElement(w.a,{variant:"body1",id:"modal-description"},l),u&&r.a.createElement(w.a,{className:o.sources,variant:"body2",id:"modal-sources"},"Sources:",u.map((function(e){return r.a.createElement($.a,{href:"#sources-".concat(e),className:o.link,onClick:a,key:e},e)}))),r.a.createElement(E.a,{className:o.button,variant:"contained",color:"primary",onClick:a},"Close")))},F=Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(5)},button:{marginTop:e.spacing(3),alignSelf:"flex-end"}}})),J=r.a.forwardRef((function(e,t){var a=e.onResult,o=F(),i=Object(n.useState)(),c=Object(l.a)(i,2),u=c[0],m=c[1],d=Object(n.useState)("10000"),p=Object(l.a)(d,2),f=p[0],S=p[1],C=Object(n.useState)(25),O=Object(l.a)(C,2),T=O[0],W=O[1],P=Object(n.useState)(65),$=Object(l.a)(P,2),z=$[0],B=$[1],J=Object(n.useState)("40000"),L=Object(l.a)(J,2),_=L[0],M=L[1],q=Object(n.useState)("9.5"),H=Object(l.a)(q,2),K=H[0],U=H[1],Y=Object(n.useState)("10.4"),G=Object(l.a)(Y,2),Q=G[0],X=G[1];return r.a.createElement(g.a,{className:o.container,elevation:3,ref:t},r.a.createElement(V,{open:!!u,handleClose:function(){return m(null)},tooltip:u}),r.a.createElement(s.a,{container:!0,direction:"column",justify:"center",spacing:3},r.a.createElement(s.a,{item:!0},r.a.createElement(h.a,{id:"input-withdrawal",label:"Super withdrawal amount",value:f,onChange:function(e){S(e.target.value)},variant:"outlined",InputProps:{inputComponent:k},fullWidth:!0})),r.a.createElement(s.a,{item:!0},r.a.createElement(w.a,{id:"input-age-title",gutterBottom:!0},"Age: ".concat(T," years old")),r.a.createElement(x.a,{value:T,onChange:function(e,t){return W(t)},getAriaValueText:function(e){return"".concat(e," years old")},"aria-labelledby":"input-age-title",step:1,min:15,max:99,valueLabelDisplay:"auto"})),r.a.createElement(s.a,{item:!0},r.a.createElement(w.a,{id:"input-retirement-age-title",gutterBottom:!0},"Desired retirement age: ".concat(z," years old")),r.a.createElement(x.a,{value:z,onChange:function(e,t){return B(t)},getAriaValueText:function(e){return"".concat(e," years old")},"aria-labelledby":"input-retirement-age-title",step:1,min:25,max:99,valueLabelDisplay:"auto"})),r.a.createElement(s.a,{item:!0},r.a.createElement(h.a,{id:"input-salary",label:"Salary (annual)",value:_,onChange:function(e){M(e.target.value)},variant:"outlined",InputProps:{inputComponent:k,endAdornment:r.a.createElement(v.a,{position:"end"},r.a.createElement(y.a,{"aria-label":"show more information",onClick:function(){return m(A)}},r.a.createElement(j.a,null)))},fullWidth:!0})),r.a.createElement(s.a,{item:!0},r.a.createElement(h.a,{id:"input-contribution",label:"Super contribution",value:K,onChange:function(e){U(e.target.value)},variant:"outlined",InputProps:{inputComponent:I,endAdornment:r.a.createElement(v.a,{position:"end"},r.a.createElement(y.a,{"aria-label":"show more information",onClick:function(){return m(N)}},r.a.createElement(j.a,null)))},fullWidth:!0})),r.a.createElement(s.a,{item:!0},r.a.createElement(h.a,{id:"input-expected-yearly",label:"Expected yearly returns",value:Q,onChange:function(e){X(e.target.value)},variant:"outlined",InputProps:{inputComponent:I,endAdornment:r.a.createElement(v.a,{position:"end"},r.a.createElement(y.a,{"aria-label":"show more information",onClick:function(){return m(R)}},r.a.createElement(j.a,null)))},fullWidth:!0}))),r.a.createElement(E.a,{className:o.button,variant:"contained",color:"primary",onClick:function(){for(var e=z-T,t=f*Math.pow(1+Q/100,e),n=0,r=0;r<t;)n+=1,r+=D(parseInt(_,10));var o=_*(K/100),i=Array.from({length:z-T}).reduce((function(e,t,a){return[].concat(Object(b.a)(e),[{year:"".concat(a+1),base:e[a].base*(1+Q/100)+o,extra:e[a].extra*(1+Q/100)}])}),[{year:"0",base:0,extra:f}]);a({salary:_,yearsToCatchUp:n,superContribution:K,lostSuper:t,graphData:i,graphKeys:["base","extra"],yearsToRetirement:e})}},"Calculate"))})),L=a(170),_=a(237),M=a(246),q=a.n(M),H=a(247),K=a.n(H),U=Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(5)},button:{marginTop:e.spacing(3),alignSelf:"flex-end"},graphContainer:{height:300},listItem:{display:"flex",alignItems:"center"}}})),Y=r.a.forwardRef((function(e,t){var a=e.result,o=e.calculatorContainer,i=U(),c=Object(n.useState)(),u=Object(l.a)(c,2),m=u[0],d=u[1],p=Object(n.useState)(a.graphData.map((function(e){return Object(L.a)({},e,{base:0,extra:0})}))),f=Object(l.a)(p,2),b=f[0],h=f[1];Object(n.useEffect)((function(){setTimeout((function(){h(a.graphData.map((function(e){return Object(L.a)({},e,{base:parseInt(e.base,10),extra:parseInt(e.extra,10),baseColor:"blue",withExtraColor:"red"})})))}),500)}),[a.graphData]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{open:!!m,handleClose:function(){return d(null)},tooltip:m}),r.a.createElement(s.a,{container:!0,direction:"column",justify:"center",spacing:2},r.a.createElement(s.a,{item:!0},r.a.createElement(g.a,{className:i.container,elevation:3,ref:t},r.a.createElement(s.a,{container:!0,direction:"column",justify:"center",spacing:3},r.a.createElement(s.a,{item:!0},r.a.createElement(w.a,{variant:"h3"},"Results")),r.a.createElement(s.a,{className:i.graphContainer,item:!0},r.a.createElement(_.a,{data:b,keys:a.graphKeys,indexBy:"year",margin:{top:0,right:0,bottom:50,left:80},padding:.3,colors:{scheme:"pastel1"},borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Year",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Super balance (thousand dollars)",legendPosition:"middle",legendOffset:-65,format:function(e){return P(e/1e3)}},enableLabel:!1,tooltip:function(e){var t=e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",{style:{color:"#779ecb"}},"If not withdrawn:"," ",P(b[t].base+b[t].extra),r.a.createElement("br",null),"Regular contributions:"," ",P(b[t].base)))},animate:!0,motionStiffness:120,motionDamping:40})),r.a.createElement(s.a,{item:!0},r.a.createElement(w.a,{variant:"h4"},"Summary"),r.a.createElement(w.a,{variant:"body1"},"When you retire after ".concat(a.yearsToRetirement,", you will be ").concat(P(a.lostSuper)," worse off. "),r.a.createElement("strong",null,"Is it worth it?")),r.a.createElement(w.a,{variant:"h6"},"".concat(P(a.lostSuper)," is equivalent to...")),r.a.createElement(w.a,{variant:"body1",className:i.listItem},r.a.createElement(q.a,null),"Another ".concat(a.yearsToCatchUp," years of work "),r.a.createElement(y.a,{"aria-label":"more information",fontSize:"small",onClick:function(){return d((e=P(a.salary),t=P(D(a.salary)),{title:"How did we calculate this",text:"With an income of ".concat(e,", you would have ").concat(t," left after tax. With that we calculated how many years it would take to earn the amount lost by withdrawing super early."),sources:["3"]}));var e,t}},r.a.createElement(K.a,null))))),r.a.createElement(E.a,{className:i.button,variant:"contained",color:"primary",onClick:function(){W(o)}},"Try again")))))})),G=a(122),Q=a.n(G),X=Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(5)}}})),Z=function(){var e=X();return r.a.createElement(g.a,{className:e.container,elevation:3},r.a.createElement(s.a,{container:!0,direction:"column",justify:"center",spacing:3},r.a.createElement(s.a,{item:!0},r.a.createElement(w.a,{variant:"h5"},"Sources"),r.a.createElement(w.a,{variant:"body2",id:"sources-1"},"1. ATO Taxation Statistics, 2016-2017.",r.a.createElement($.a,{href:"https://data.gov.au/data/dataset/taxation-statistics-2016-17/resource/61b5ba05-c38c-4551-b669-864d9d29a120?view_id=972b872d-348a-4a77-8a99-b1514e9e48d3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Q.a,{fontSize:"small"}))),r.a.createElement(w.a,{variant:"body2",id:"sources-1"},"2. ASFA Superannuation Statistics, June 2020.",r.a.createElement($.a,{href:"https://www.superannuation.asn.au/ArticleDocuments/269/SuperStats-Jun2020.pdf.aspx?Embed=Y",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Q.a,{fontSize:"small"}))),r.a.createElement(w.a,{variant:"body2",id:"sources-2"},"3. ATO Taxation Statistics, 2017-2018.",r.a.createElement($.a,{href:"https://data.gov.au/data/dataset/taxation-statistics-2017-18/resource/ce1c3e45-4ccb-499c-b9ee-7b06becaae48",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Q.a,{fontSize:"small"}))))))},ee=Object(m.a)((function(e){return{root:{alignSelf:"center",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:e.spacing(4),"& > *":{maxWidth:800,width:"100%",minHeight:200}}}}));var te=function(){var e=ee(),t=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(n.useRef)(),i=Object(n.useState)(),m=Object(l.a)(i,2),p=m[0],b=m[1];return Object(n.useEffect)((function(){W(o)}),[p]),r.a.createElement(d.a,{theme:f},r.a.createElement(c.a,null),r.a.createElement(u.a,{maxWidth:"lg",className:e.root,ref:t},r.a.createElement(s.a,{container:!0,direction:"column",justify:"center",spacing:3},r.a.createElement(s.a,{item:!0},r.a.createElement(J,{onResult:b,ref:a,resultsContainer:o})),p&&r.a.createElement(s.a,{item:!0},r.a.createElement(Y,{result:p,ref:o,calculatorContainer:a})),r.a.createElement(s.a,{item:!0},r.a.createElement(Z,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[294,1,2]]]);
//# sourceMappingURL=main.d4fce86d.chunk.js.map