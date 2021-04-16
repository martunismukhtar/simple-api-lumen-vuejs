(function(e){function t(t){for(var r,l,c=t[0],u=t[1],i=t[2],s=0,b=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&b.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function l(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6c614a77"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/referral/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1c7d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"nav"},o=Object(r["f"])("Home"),l=Object(r["f"])(" | "),c=Object(r["f"])("List of referral code"),u={class:"container py-3"};function i(e,t){var n=Object(r["u"])("router-link"),i=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])(n,{to:"/"},{default:Object(r["A"])((function(){return[o]})),_:1}),l,Object(r["g"])(n,{to:"/list"},{default:Object(r["A"])((function(){return[c]})),_:1}),Object(r["g"])("div",u,[Object(r["g"])("main",null,[Object(r["g"])(i)])])])}n("ac23");const s={};s.render=i;var d=s,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f=(n("b0c0"),{class:"",style:{"padding-top":"30px"}}),p={class:"needs-validation",novalidate:""},j={class:"row g-3"},O={class:"col-12"},g=Object(r["g"])("label",{for:"username",class:"form-label"},"Please input referral code",-1),h={class:"input-group has-validation"},v=Object(r["g"])("br",null,null,-1),m={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},y={key:1},w={key:2},k=Object(r["g"])("br",null,null,-1),L=Object(r["g"])("br",null,null,-1),x={key:0,class:"table table-hover",style:{"text-align":"left"}},C=Object(r["g"])("td",null,[Object(r["g"])("b",null,"Name")],-1),P=Object(r["g"])("td",null,[Object(r["g"])("b",null,"Email")],-1),_=Object(r["g"])("td",null,[Object(r["g"])("b",null,"Referral code")],-1),S={key:1},A=Object(r["g"])("tr",null,[Object(r["g"])("td",{colspan:"2"},"Data not found")],-1);function E(e,t,n,a,o,l){return Object(r["p"])(),Object(r["d"])("div",f,[Object(r["g"])("form",p,[Object(r["g"])("div",j,[Object(r["g"])("div",O,[g,Object(r["g"])("div",h,[Object(r["B"])(Object(r["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.referralcode=e}),onKeypress:t[2]||(t[2]=function(e){return l.validateCode(e)}),onKeyup:t[3]||(t[3]=function(e){return l.validateLength(e)}),onBlur:t[4]||(t[4]=function(e){return l.validateLength(e)}),maxlength:"6",onInput:t[5]||(t[5]=function(e){return o.referralcode=e.target.value.toUpperCase()}),placeholder:"referral code",required:""},null,544),[[r["y"],o.referralcode]])])])]),v,Object(r["g"])("button",{onClick:t[6]||(t[6]=Object(r["C"])((function(){return l.send&&l.send.apply(l,arguments)}),["prevent"])),disabled:o.btndisabled,class:"w-100 btn btn-primary btn-lg",type:"submit"},[o.isLoading?(Object(r["p"])(),Object(r["d"])("span",m)):Object(r["e"])("",!0),o.isLoading?(Object(r["p"])(),Object(r["d"])("span",y," Loading...")):(Object(r["p"])(),Object(r["d"])("span",w,"Send"))],8,["disabled"])]),k,L,o.hasresult&&null!=o.user?(Object(r["p"])(),Object(r["d"])("table",x,[Object(r["g"])("tbody",null,[Object(r["g"])("tr",null,[C,Object(r["g"])("td",null,": "+Object(r["w"])(o.user.name),1)]),Object(r["g"])("tr",null,[P,Object(r["g"])("td",null,": "+Object(r["w"])(o.user.email),1)]),Object(r["g"])("tr",null,[_,Object(r["g"])("td",null,": "+Object(r["w"])(o.user.referral_code),1)])])])):o.hasresult&&null==o.user?(Object(r["p"])(),Object(r["d"])("table",S,[A])):Object(r["e"])("",!0)])}var M=n("bc3a"),T=n.n(M),H={name:"Home",data:function(){return{hasresult:!1,isLoading:!1,referralcode:null,btndisabled:!0,user:null}},methods:{send:function(){var e=this;this.isLoading=!0;var t=this.referralcode;T.a.post("http://localhost:7000/process",{referralcode:t},{headers:""}).then((function(t){e.isLoading=!1,e.hasresult=!0,e.user=t.data.data})).catch((function(e){return console.log(e)}))},validateCode:function(e){var t=String.fromCharCode(e.keyCode);if(this.hasresult=!1,/^([a-zA-Z0-9]+)$/.test(t))return!0;e.preventDefault()},validateLength:function(e){6==e.target.value.length?this.btndisabled=!1:this.btndisabled=!0}}};H.render=E;var q=H,B=[{path:"/",name:"Home",component:q},{path:"/list",name:"List",component:function(){return n.e("about").then(n.bind(null,"1a33"))}}],D=Object(b["a"])({history:Object(b["b"])(),routes:B}),J=D;n("7b17"),n("ab8b");Object(r["c"])(d).use(J).mount("#app")},ac23:function(e,t,n){"use strict";n("1c7d")}});
//# sourceMappingURL=app.84559e60.js.map