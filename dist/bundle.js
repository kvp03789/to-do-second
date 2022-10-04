(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(81),s=n.n(a),i=n(645),r=n.n(i),o=n(667),d=n.n(o),c=new URL(n(224),n.b),l=r()(s()),p=d()(c);l.push([e.id,"@font-face {\n    font-family: 'OpenSans';\n    src: url("+p+");\n    font-style: normal;\n    font-weight: 400;\n}\n\n* {\n  font-family: 'OpenSans';\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(239, 239, 239, 0.635);\n}\n\nheader {\n    height: 125px;\n    width: 100%;\n    background-color: rgba(239, 239, 239, 0.635);\n    border-bottom: 2px solid rgb(91, 246, 1);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* margin-left: 20px;\n    margin-right: 20px; */\n}\n\n.header-image {\n    height: 100px;\n    width: auto;\n}\n\n.header-menu-icon {\n    height: 40px;\n    width: auto;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.container {\n    display: flex;\n}\n\nmain {\n  display: flex;\n}\n\n.sidebar {\n    height: 100vh;\n    width: 350px;\n    background-color: white;\n    font-family: 'OpenSans';\n    font-size: 1.2rem;\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n    justify-content: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n    justify-content: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.sub-title {\n    display: flex;\n    gap: 20px;\n    height: auto;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left: 15px;\n}\n\n.sub-title:hover {\n    background-color: #c6c6c6;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.sub-title2 {\n  display: flex;\n  gap: 20px;\n  height: auto;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 7px;\n  padding-left: 15px;\n}\n\n.home-svg {\n    height: 25px;\n    width: auto;\n}\n\n.plus-svg {\n    height: 25px;\n    width: auto;\n}\n\n.sidebar h2 {\n  border-bottom: 2px solid black;\n}\n\n.content {\n    height: 100vh;\n    width: 100%;\n    padding-left: 50px;\n    padding-right: 50px;\n    margin-right: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.form-div div {\n  display: flex;\n  align-items: center;\n}\n\n#name{\n  height: 40px;\n  font-family: 'OpenSans';\n  font-size: 1rem;\n  padding-left: 15px;\n}\n\n.form-buttons-div {\n  justify-content: center;\n  gap: 10px;\n}\n\n#add-button {\n  background-color: rgb(10, 240, 10);\n  color: white;\n  font-weight: 800;\n  height: 30px;\n  width: 75px;\n  font-family: 'OpenSans';\n  border: none;\n  border-radius: 3px;\n}\n\n#cancel-button {\n  background-color: red;\n  color: white;\n  font-weight: 800;\n  height: 30px;\n  width: 75px;\n  font-family: 'OpenSans';\n  border: none;\n  border-radius: 3px;\n}\n\n.project-list-item {\n  font-family: 'OpenSans';\n  display: flex;\n  gap: 20px;\n  height: auto;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 7px;\n  padding-left: 15px;\n}\n\n.project-list-item:hover {\n  background-color: rgb(148, 250, 177);\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.project-list-item img {\n  height: 25px;\n  width: auto;\n}\n\n.title-block {\n  width: 100%;\n  height: 100px;\n  background-color: rgb(12, 230, 12);\n  font-family: 'OpenSans';\n  margin: 20px;\n  padding-left: 15px;\n}\n\n.title {\n  color: white;\n}\n\n.left {\n  display: flex;\n  justify-content: flex-start;\n  gap: 15px;\n  flex: 0 0 100px;\n}\n\n/* .right:hover {\n  background-color: #c6c6c672;\n} */\n\n.task-button-div {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  gap: 50px;\n  height: 60px;\n  padding-left: 40px;\n}\n\n.task-button-div:hover {\n  background-color: #ffffff;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.task-button-span {\n  font-family: 'OpenSans';\n  font-size: 1.2rem;\n}\n\n.star-svg {\n  height: 25px;\n  width: auto;\n}\n\n.task-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  width: 100%;\n}\n\n.new-task-item {\n  width: 100%;\n  height: 60px;\n  border: 1px solid black;\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.task-title-span, .task-date-span, .star-span {\n  font-family: 'OpenSans';\n  font-size: 1.2rem;\n}\n\n.star-div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-details-span {\n  font-family: 'OpenSans';\n  font-size: .8rem;\n}\n\n.date-div {\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.task-right, .task-left {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  justify-content: center;\n}\n\n.new-task-form-div {\n  background-color: white;\n  height: 200px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n\n.new-task-form-div input {\n  width: 100%;\n}\n\n.hidden {\n    display: none;\n}\n\n.hidden2 {\n  transform: scale(0);\n}\n\nlabel {\n  display: block;\n  font-weight: 800;\n}\n\n.dots-svg {\n    height: 25px;\n    width: 25px;\n}\n\n\n.options-menu {\n  height: 80px;\n  width: 80px;\n  font-family: 'OpenSans';\n  font-size: 1.2rem;\n  background-color: white;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  position:absolute; \n  left: 20px;\n  bottom: 20px;\n  border-radius: 5px;\n}\n\n.option-item {\n  width: 100%;\n  padding: 3px;\n  text-align: center;\n}\n\n.option-item:hover {\n  background-color: #ddd9d9;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.dots-container:hover {\n  background-color: #ddd9d9;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.dots-selected {\n  background-color: #ddd9d9;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.dots-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n\n/* TOGGLE SWITCH */\n/* The switch - the box around the slider */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  input:checked + .slider {\n    background-color: #262728;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2c2d2d;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n  \n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n\n  .selected {\n    background-color: #c6c6c6;\n    border-radius: 5px;\n  }\n\n  .filled {\n    filter: invert(84%) sepia(66%) saturate(1882%) hue-rotate(355deg) brightness(99%) contrast(103%);\n    fill: #ffee00;\n  }\n\n  .hidden-project-form {\n    /* position:absolute; */\n    font-family: 'OpenSans';\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    height: auto;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left: 15px;\n  }\n\n  .hidden-project-form input {\n    width: 100%\n  }\n\n  .really-hidden {\n    display: none;\n  }\n\n  .check-svg {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n  }\n\n  .check-div {\n    position: relative;\n    height: 25px;\n    width: 25px;\n    border: 1px solid rgb(67, 184, 0);\n    border-radius: 50%;\n  }\n\n  .check-div:hover {\n    cursor: pointer;\n  }\n\n  /* .new-task-item::before {\n    position: absolute;\n    content: '';\n    width:auto;\n    height: 16px;\n    background-color: black;\n  } */\n\n  .line-through {\n    text-decoration: line-through;\n  }  \n  \n  .new-task-item-completed {\n    width: 95%;\n    height: 60px;\n    border: 1px solid rgb(157, 157, 157);\n    background-color: rgba(0, 0, 0, 0.042);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    color:#ccc;\n  } \n  \n  .minus-svg {\n    height: 20px;\n    width: auto;\n  }",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(r[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},r=[],o=0;o<e.length;o++){var d=e[o],c=a.base?d[0]+a.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=s(m,a);a.byIndex=o,t.splice(o,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=a(e=e||[],s=s||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var o=n(i[r]);t[o].references--}for(var d=a(e,s),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},224:(e,t,n)=>{e.exports=n.p+"ceb05254cedfa895b512.ttf"}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),s=n.n(a),i=n(569),r=n.n(i),o=n(565),d=n.n(o),c=n(216),l=n.n(c),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=r().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h={all:{tasks:[]},today:{tasks:[]},thisWeek:{tasks:[]},important:{tasks:[]},projects:{tasks:[],get getTasks(){return this.tasks}}},g=function(){const e=document.querySelector(".content");for(z.taskCounter=0;e.firstChild;)e.firstChild.remove()},b=n.p+"365f3e7f182c9f913994.svg",v=n.p+"2500f612ad4630b14fbb.svg",x=n.p+"b254db15a65e85097053.svg",k=n.p+"4c5d8bc1d4e75cc502ed.svg",L=n.p+"e7f4b5b259c909518ea3.svg",y=n.p+"ad60a413dd441cb979f0.svg",E=n.p+"fee50bbf4b84b1cabc4b.svg",w=function(e,t,n,a,s,i,r){const o=document.querySelector(".task-container"),d=(document.querySelector(".content"),document.createElement("div")),c=document.createElement("div"),l=document.createElement("div"),p=document.createElement("span"),u=document.createElement("span"),m=document.createElement("div"),f=document.createElement("span"),h=document.createElement("div"),b=new Image,x=new Image,E=new Image,q=new Image;x.setAttribute("id","important-star"),E.src=v,x.src=1==a?L:k,b.src=y,q.src=L,p.classList.add("task-title-span"),u.classList.add("task-details-span"),m.classList.add(".date-div"),f.classList.add(".task-date-span"),1===s.taskList[i].completed?d.classList.add("new-task-item-completed"):d.classList.add("new-task-item"),m.classList.add("date-div"),x.classList.add("star-svg"),q.classList.add("star-svg"),E.classList.add("dots-svg"),l.classList.add("task-right"),c.classList.add("task-left"),h.classList.add("check-div"),b.classList.add("check-svg"),b.classList.add("hidden"),p.innerText=e,u.innerText=t,f.innerText=n;const A=document.createElement("div"),C=document.createElement("div"),D=document.createElement("div"),N=document.createElement("div");N.classList.add("dots-container"),A.classList.add("options-menu"),C.classList.add("option-item"),D.classList.add("option-item"),C.setAttribute("id","option-edit"),D.setAttribute("id","option-delete"),A.classList.add("hidden2"),C.innerText="Edit",D.innerText="Delete",A.append(C,D),N.append(E,A),m.append(f),h.append(b),l.append(m,x,N),c.append(h,p,u),d.append(c,l),o.append(d),1===s.taskList[i].completed?(d.classList.add("line-through"),b.classList.remove("hidden")):0===s.taskList[i].completed&&b.classList.add("hidden"),C.addEventListener("click",(e=>{A.classList.toggle("hidden2"),A.classList.toggle("dots-selected"),T(s,i)})),D.addEventListener("click",(e=>{s.taskList.splice(s.taskList.indexOf(s.taskList[i]),1),g(),j(s),s.taskList.forEach((e=>{w(e.name,e.details,e.date,e.important,s,s.taskList.indexOf(e),e.completed)})),O()})),E.addEventListener("click",(e=>{A.classList.toggle("hidden2"),N.classList.toggle("dots-selected")})),S(x,s,i),h.addEventListener("click",(e=>{b.classList.toggle("hidden"),d.classList.toggle("line-through"),0===s.taskList[i].completed?(s.taskList[i].completed=1,d.classList.replace("new-task-item","new-task-item-completed")):s.taskList[i].completed=0,g(),j(s),s.taskList.forEach((e=>{w(e.name,e.details,e.date,e.important,s,s.taskList.indexOf(e),e.completed),O()}))}))},S=function(e,t,n){e.addEventListener("click",(e=>{e.target.src===k?e.target.src=L:e.target.src=k,1==t.taskList[n].important?t.taskList[n].important=0:t.taskList[n].important=1,g(),j(t),t.taskList.forEach((e=>{w(e.name,e.details,e.date,e.important,t,t.taskList.indexOf(e),e.completed),O()}))}))},T=function(e,t){const n=document.querySelector(".task-container"),a=document.createElement("div"),s=(document.createElement("form"),document.createElement("label")),i=document.createElement("label"),r=document.createElement("label"),o=document.createElement("input"),d=document.createElement("input"),c=document.createElement("input"),l=document.createElement("div"),p=document.createElement("button"),u=document.createElement("button"),m=new Image;1==e.taskList[t].important?m.src=L:m.src=k,m.classList.add("star-svg");const f=document.createElement("div"),h=document.createElement("span");h.innerText="Mark this task as important?",h.classList.add("star-span"),f.classList.add("star-div"),s.innerText="Title",i.innerText="Details(optional):",r.innerText="Date:",p.innerText="Add",u.innerText="Cancel",a.classList.add("new-task-form-div"),p.setAttribute("id","add-button"),u.setAttribute("id","cancel-button"),c.setAttribute("type","date"),p.setAttribute("type","submit"),o.value=e.taskList[t].name,d.value=e.taskList[t].details,c.value=e.taskList[t].date,f.append(h,m),s.append(o),i.append(d),r.append(c),l.append(p,u),a.append(s,i,r,f,l),n.append(a),m.addEventListener("click",(e=>{e.target.src===k?e.target.src=L:e.target.src=k})),p.addEventListener("click",(n=>{n.preventDefault(),a.classList.add("hidden"),e.taskList[t].name=o.value,e.taskList[t].details=d.value,e.taskList[t].date=c.value,m.src===L?e.taskList[t].important=1:e.taskList[t].important=0,e.taskList[t].completed=0,g(),j(e),e.taskList.forEach((t=>{w(t.name,t.details,t.date,t.important,e,e.taskList.indexOf(t),t.completed)})),O()})),u.addEventListener("click",(t=>{o.value="",d.value="",c.value="",t.target.src===L&&(t.target.src=k),g(),j(e),e.taskList.forEach((t=>{w(t.name,t.details,t.date,t.important,e,e.arr.taskList.indexOf(t),completed)}))}))},j=function(e){document.querySelector(".new-task-form-div");const t=document.querySelector(".content"),n=document.createElement("div"),a=document.createElement("div"),s=document.createElement("h1");a.classList.add("title-block"),s.classList.add("title"),s.innerText=`${e.title}`;const i=document.createElement("div"),r=document.createElement("div"),o=new Image,d=new Image,c=document.createElement("span"),l=document.createElement("span");o.src=x,d.src=E,i.classList.add("task-button-div"),r.classList.add("task-button-div"),o.classList.add("plus-svg"),d.classList.add("minus-svg"),i.classList.add("task-button-span"),r.classList.add("task-button-span"),c.innerText="Add Task",l.innerText="Remove Completed",n.classList.add("task-container"),i.append(o,c),r.append(d,l),a.append(s),t.prepend(a),t.append(a,n,i,r),i.addEventListener("click",(()=>{!function(e,t){const n=document.querySelector(".task-container"),a=document.createElement("div"),s=(document.createElement("form"),document.createElement("label")),i=document.createElement("label"),r=document.createElement("label"),o=document.createElement("input"),d=document.createElement("input"),c=document.createElement("input"),l=document.createElement("div"),p=document.createElement("button"),u=document.createElement("button"),m=new Image;m.src=k,m.classList.add("star-svg");const f=document.createElement("div"),h=document.createElement("span");h.innerText="Mark this task as important?",h.classList.add("star-span"),f.classList.add("star-div"),s.innerText="Title:",i.innerText="Details(optional):",r.innerText="Date:",p.innerText="Add",u.innerText="Cancel",a.classList.add("new-task-form-div"),p.setAttribute("id","add-button"),u.setAttribute("id","cancel-button"),c.setAttribute("type","date"),p.setAttribute("type","submit"),f.append(h,m),s.append(o),i.append(d),r.append(c),l.append(p,u),a.append(s,i,r,f,l),n.append(a);let b=0;m.addEventListener("click",(e=>{e.target.src===k?(e.target.src=L,b=1):(e.target.src=k,b=0)})),p.addEventListener("click",(t=>{let n=o.value;t.preventDefault(),a.classList.add("hidden"),e.createTask(String(n),d.value,c.value,b,0),g(),j(e),e.taskList.forEach((t=>{w(t.name,t.details,t.date,t.important,e,e.taskList.indexOf(t),t.completed),O()}))})),u.addEventListener("click",(t=>{o.value="",d.value="",c.value="",t.target.src===L&&(t.target.src=k),g(),j(e),e.taskList.forEach((t=>{w(t.name,t.details,t.date,t.important,e,e.arr.taskList.indexOf(t),t.completed)}))}))}(e)})),r.addEventListener("click",(()=>{e.taskList.forEach((t=>{1===t.completed&&e.taskList.splice(`${e.taskList.indexOf(t)}`,1)})),g(),j(e),e.taskList.forEach((t=>{w(t.name,t.details,t.date,t.important,e,e.taskList.indexOf(t),t.completed)}))}))},O=function(){const e=document.querySelectorAll(".new-task-item");let t=0;e.forEach((e=>{e.setAttribute("data-index",`${t}`),t++}))};function q(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function C(e){q(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===A(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function D(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var N={};function I(){return N}function M(e,t){var n,a,s,i,r,o,d,c;q(1,arguments);var l=I(),p=D(null!==(n=null!==(a=null!==(s=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t||null===(r=t.locale)||void 0===r||null===(o=r.options)||void 0===o?void 0:o.weekStartsOn)&&void 0!==s?s:l.weekStartsOn)&&void 0!==a?a:null===(d=l.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=C(e),m=u.getDay(),f=(m<p?7:0)+m-p;return u.setDate(u.getDate()-f),u.setHours(0,0,0,0),u}function $(e,t,n){q(2,arguments);var a=M(e,n),s=M(t,n);return a.getTime()===s.getTime()}const z={value:0,array:[],counter:0,taskCounter:0,dataVal:0,getValue(){return this.value},setValue(e){this.value=e}},R=function(){const e=document.querySelector(".projects-list");for(z.taskCounter=0;e.firstChild;)e.firstChild.remove()},H=function(e){const t=document.querySelector(".projects-list"),n=document.createElement("div");n.classList.add("project-list-item"),n.classList.add("sub-title"),n.setAttribute("data-index",String(z.counter)),z.counter++;const a=new Image;a.src=b;const s=document.createTextNode(`${e.title}`),i=new Image;i.src=v,document.createElement("div").classList.add("left"),document.createElement("div").classList.add("right");let r=String(z.getValue());s.innerText=r,z.array.push(r),n.addEventListener("click",(t=>{g(),0===e.taskList.length?(j(e),z.dataVal=t.target.dataset.index):(j(e),e.taskList.forEach((t=>{w(`${t.name}`,`${t.details}`,t.date,t.important,e,e.taskList.indexOf(t),t.completed)}))),O()}));const o=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div");l.classList.add("dots-container"),o.classList.add("options-menu"),d.classList.add("option-item"),c.classList.add("option-item"),d.setAttribute("id","option-edit"),c.setAttribute("id","option-delete"),o.classList.add("hidden2"),d.innerText="Edit",c.innerText="Delete",o.append(d,c),l.append(i,o),n.append(a,s,l),t.append(n);const p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("input"),f=document.createElement("button"),x=document.createElement("button");m.value=e.title,x.innerText="Add",f.innerText="Cancel",u.append(f,x),p.append(m,u),p.classList.add("hidden-project-form"),p.classList.add("really-hidden"),x.setAttribute("id","add-button"),f.setAttribute("id","cancel-button"),t.append(p),x.addEventListener("click",(t=>{e.title=m.value,m.value="",p.classList.toggle("really-hidden"),R(),h.projects.tasks.forEach((e=>{H(e)})),g(),j(e),e.taskList.forEach((t=>{w(t.name,t.details,t.date,t.important,e,e.taskList.indexOf(t),t.completed)}))})),f.addEventListener("click",(e=>{m.value="",p.classList.toggle("really-hidden")})),i.addEventListener("click",(e=>{o.classList.toggle("hidden2"),l.classList.toggle("dots-selected")})),d.addEventListener("click",(e=>{p.classList.toggle("really-hidden"),o.classList.toggle("hidden2"),l.classList.toggle("dots-selected")})),c.addEventListener("click",(t=>{h.projects.tasks.splice(h.projects.tasks.indexOf(e),1),R(),h.projects.tasks.forEach((e=>{H(e)}))}));const k=document.getElementsByClassName("sub-title");for(let e=0;e<k.length;e++)k[e].addEventListener("click",(e=>{let t=document.getElementsByClassName("selected");t.length>0&&(t[0].className=t[0].className.replace("selected","")),e.target.classList.add("selected")}))};new Date(2022,8,22),new Date,console.log(h),function(){const e=document.querySelector(".hamburger"),t=document.querySelector(".sidebar");document.querySelector(".switch"),e.addEventListener("click",(e=>{t.classList.toggle("hidden")}))}(),function(){const e=document.querySelector("#all-title"),t=document.querySelector("#today-title"),n=document.querySelector("#week-title"),a=document.querySelector("#important-title"),s=document.querySelector("#add-project"),i=document.querySelector(".form-div"),r=document.querySelector("#name"),o=document.querySelector("#cancel-button"),d=document.querySelector("#add-button"),c=(document.querySelector(".home"),document.getElementsByClassName("sub-title"));for(let e=0;e<c.length;e++)c[e].addEventListener("click",(e=>{let t=document.getElementsByClassName("selected");t.length>0&&(t[0].className=t[0].className.replace("selected","")),e.target.classList.add("selected")}));e.addEventListener("click",(()=>{g(),function(){const e=document.createElement("div");e.classList.add("task-container");const t=document.querySelector(".content"),n=document.createElement("div"),a=document.createElement("h1");n.classList.add("title-block"),a.classList.add("title"),a.innerText="All Tasks",n.append(a),t.append(n,e)}(),h.projects.tasks.forEach((e=>{e.taskList.forEach((t=>{w(t.name,t.details,t.date,t.important,e,e.taskList.indexOf(t),t.completed)}))})),O()})),t.addEventListener("click",(()=>{g(),function(){const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("h1");t.classList.add("title-block"),n.classList.add("title"),n.innerText="Today's Tasks",t.append(n),e.append(t)}();const e=document.createElement("div"),t=document.querySelector(".content");e.classList.add("task-container"),t.append(e),h.projects.tasks.forEach((e=>{e.taskList.forEach((t=>{(function(e){const t=(new Date).toISOString().split("T")[0];return console.log(t),t==e})(t.date)&&w(t.name,t.details,t.date,t.important,e,e.taskList.indexOf(t),t.completed)}))})),O()})),n.addEventListener("click",(()=>{g(),function(){const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("h1");t.classList.add("title-block"),n.classList.add("title"),n.innerText="This Week's Tasks",t.append(n),e.append(t)}();const e=document.createElement("div"),t=document.querySelector(".content");e.classList.add("task-container"),t.append(e),h.projects.tasks.forEach((e=>{e.taskList.forEach((t=>{(function(e,t){return q(1,arguments),$(e,Date.now(),t)})(new Date(t.date),{weekStartsOn:0})&&w(t.name,t.details,t.date,t.important,e,e.taskList.indexOf(t),t.completed)}))})),O()})),a.addEventListener("click",(()=>{g(),function(){const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("h1");t.classList.add("title-block"),n.classList.add("title"),n.innerText="Important Tasks",t.append(n),e.append(t)}();const e=document.createElement("div"),t=document.querySelector(".content");e.classList.add("task-container"),t.append(e),h.projects.tasks.forEach((e=>{e.taskList.forEach((t=>{1==t.important&&w(t.name,t.details,t.date,t.important,e,e.taskList.indexOf(t),t.completed)}))})),O()})),s.addEventListener("click",(()=>{i.classList.remove("hidden")})),o.addEventListener("click",(()=>{i.classList.add("hidden")})),d.addEventListener("click",(e=>{e.preventDefault();var t;t=(e=>{const t=[];return{title:e,taskList:t,createTask:(e,n,a,s,i)=>{t.push({name:e,details:n,date:a,important:s,completed:i})},deleteTask:function(e){t.forEach((n=>{n.name===e.name&&t.splice(`${t.indexOf(n)}`,1)}))}}})(r.value),h.projects.tasks.push(t),r.value="",i.classList.add("hidden"),R(),h.projects.tasks.forEach((e=>{H(e)}))}))}()})()})();