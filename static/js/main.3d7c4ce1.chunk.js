(this["webpackJsonpsuper-check"]=this["webpackJsonpsuper-check"]||[]).push([[0],{50:function(e,t,a){e.exports=a(58)},58:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),l=a(101),c=a(102),u=a(94),m=a(100),s=a(43),g=Object(s.a)({palette:{}}),p=a(24),d=a(98),f=a(96),h=a(103),b=a(104),v=a(105),E=a(99),j=a(36),y=a(35),w=function(e){var t=e.inputRef,a=e.onChange,n=Object(j.a)(e,["inputRef","onChange"]);return i.a.createElement(y.a,Object.assign({},n,{getInputRef:t,onValueChange:function(t){a({target:{name:e.name,value:t.value}})},thousandSeparator:!0,isNumericString:!0,allowNegative:!1,prefix:"$"}))},C=function(e){var t=e.inputRef,a=e.onChange,n=Object(j.a)(e,["inputRef","onChange"]);return i.a.createElement(y.a,Object.assign({},n,{getInputRef:t,onValueChange:function(t){a({target:{name:e.name,value:t.value}})},thousandSeparator:!0,isNumericString:!0,allowNegative:!1,suffix:"%"}))},O=Object(u.a)((function(e){return{container:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(5)},button:{marginTop:e.spacing(3),alignSelf:"flex-end"}}})),S=function(){var e=O(),t=Object(n.useState)("10000"),a=Object(p.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(25),c=Object(p.a)(l,2),u=c[0],m=c[1],s=Object(n.useState)(65),g=Object(p.a)(s,2),j=g[0],y=g[1],S=Object(n.useState)("40000"),x=Object(p.a)(S,2),I=x[0],W=x[1],k=Object(n.useState)("9.5"),N=Object(p.a)(k,2),R=N[0],A=N[1];return i.a.createElement(f.a,{className:e.container,elevation:3},i.a.createElement(d.a,{container:!0,direction:"column",justify:"center",spacing:3},i.a.createElement(d.a,{item:!0},i.a.createElement(h.a,{id:"input-withdrawal",label:"Super withdrawal amount",value:r,onChange:function(e){o(e.target.value)},variant:"outlined",InputProps:{inputComponent:w},fullWidth:!0})),i.a.createElement(d.a,{item:!0},i.a.createElement(E.a,{id:"input-age-title",gutterBottom:!0},"Age: ".concat(u," years old")),i.a.createElement(v.a,{value:u,onChange:function(e,t){return m(t)},getAriaValueText:function(e){return"".concat(e," years old")},"aria-labelledby":"input-age-title",step:1,min:15,max:99,valueLabelDisplay:"auto"})),i.a.createElement(d.a,{item:!0},i.a.createElement(E.a,{id:"input-retirement-age-title",gutterBottom:!0},"Desired retirement age: ".concat(j," years old")),i.a.createElement(v.a,{value:j,onChange:function(e,t){return y(t)},getAriaValueText:function(e){return"".concat(e," years old")},"aria-labelledby":"input-retirement-age-title",step:1,min:25,max:99,valueLabelDisplay:"auto"})),i.a.createElement(d.a,{item:!0},i.a.createElement(h.a,{id:"input-salary",label:"Salary (annual)",value:I,onChange:function(e){W(e.target.value)},variant:"outlined",InputProps:{inputComponent:w},fullWidth:!0})),i.a.createElement(d.a,{item:!0},i.a.createElement(h.a,{id:"input-contribution",label:"Super contribution",value:R,onChange:function(e){A(e.target.value)},variant:"outlined",InputProps:{inputComponent:C},fullWidth:!0}))),i.a.createElement(b.a,{className:e.button,variant:"contained",color:"primary",onClick:function(){console.log("Withdrawal amount",r),console.log("Age",u),console.log("Retirement age",j),console.log("Salary",I),console.log("Super contribution",R)}},"Calculate"))},x=Object(u.a)((function(e){return{root:{alignSelf:"center",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:e.spacing(4),"& > *":{maxWidth:800,width:500,minHeight:200}}}}));var I=function(){var e=x();return i.a.createElement(m.a,{theme:g},i.a.createElement(l.a,null),i.a.createElement(c.a,{maxWidth:"sm",className:e.root},i.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.3d7c4ce1.chunk.js.map