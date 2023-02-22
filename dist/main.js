(()=>{"use strict";var n,e,t,r,o,i,s,a,c,l,d,p,u,h,m={28:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),s=t.n(i)()(o());s.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* End of CSS Reset \n ************************\n*/\n\nhtml,\nbody {\n  height: 100%;\n}\n\n#wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  background-color: whitesmoke;\n}\n\n#nav {\n  background-color: white;\n  height: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#mainCont {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n\n#footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n}\n\nh1 {\n  font-size: 2em;\n}\n\nh2 {\n  margin-top: 40px;\n  font-size: 1.1em;\n  text-align: center;\n  font-weight: bold;\n  width: 100%;\n}\n\n#projectsCont {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-right: 1px solid black;\n  text-align: left;\n}\n\n#tasksCont {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: fit-content;\n}\n\n#tasksUl {\n  border-bottom: 1px solid black;\n  width: 100%;\n  text-align: center;\n}\n\n#projectsUl li {\n  margin-top: 20px;\n  cursor: pointer;\n  list-style: circle inside;\n  background-color: antiquewhite;\n  padding: 30px;\n  border-radius: 8px;\n}\n\n.btns {\n  margin-top: 20px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: grey;\n}\n\n.activatedProj {\n  font-weight: bold;\n}\n\n#footer {\n  background-color: whitesmoke;\n}\n\n.btns:hover {\n  color: black;\n}\n\n#userProjInput {\n  display: inline;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid black;\n  border-left: 1px solid black;\n  width: 75px;\n}\n\n#projForm {\n  margin-top: 20px;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n#submitName {\n  width: 1.3em;\n  cursor: pointer;\n}\n',""]);const a=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},s=[],a=0;a<n.length;a++){var c=n[a],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=o(h,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var a=t(i[s]);e[a].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},f={};function b(n){var e=f[n];if(void 0!==e)return e.exports;var t=f[n]={id:n,exports:{}};return m[n](t,t.exports,b),t.exports}b.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return b.d(e,{a:e}),e},b.d=(n,e)=>{for(var t in e)b.o(e,t)&&!b.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},b.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),b.nc=void 0,n=b(379),e=b.n(n),t=b(795),r=b.n(t),o=b(569),i=b.n(o),s=b(565),a=b.n(s),c=b(216),l=b.n(c),d=b(589),p=b.n(d),u=b(28),(h={}).styleTagTransform=p(),h.setAttributes=a(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,function(){const n="projects.list";({allProjects:JSON.parse(localStorage.getItem(n))||[],selectedProjId:"",init(){this.cacheDom(),this.bindEvents(),this.saveAndRender()},cacheDom(){this.projectAddBtn=document.getElementById("projectAdd"),this.projectsUl=document.getElementById("projectsUl"),this.projectsCont=document.getElementById("projectsCont"),this.delProjectBtn=document.getElementById("delProj"),this.projectNameInput=document.getElementById("userProjInput"),this.projectNameForm=document.getElementById("projForm"),this.projectNameSubmit=document.getElementById("submitName")},bindEvents(){this.projectAddBtn.addEventListener("click",this.changeToForm.bind(this)),this.projectsCont.addEventListener("click",this.activateProject.bind(this)),this.delProjectBtn.addEventListener("click",this.confirmDelete.bind(this)),this.projectNameSubmit.addEventListener("click",this.getUserData.bind(this))},changeToForm(){this.projectAddBtn.style.display="none",this.projectNameForm.style.display="flex"},getUserData(){const n=this.projectNameInput.value;if(this.projectNameInput.value="",null!=n&&n.length>0){const e=this.createNewProject(n);this.allProjects.push(e),this.saveAndRender()}this.projectAddBtn.style.display="inline",this.projectNameForm.style.display="none"},createNewProject:n=>({id:Date.now().toString(),name:n,tasks:[]}),saveAndRender(){this.save(),this.renderProjects()},save(){localStorage.setItem(n,JSON.stringify(this.allProjects))},renderProjects(){this.clearProjects(),this.allProjects.forEach((n=>{const e=document.createElement("li");e.innerText=n.name,e.setAttribute("id",n.id),n.id===this.selectedProjId&&e.classList.add("activatedProj"),this.projectsUl.appendChild(e)}))},clearProjects(){this.projectsUl.innerHTML=""},activateProject(n){this.saveAndRender(),"li"===n.target.tagName.toLowerCase()&&(this.selectedProjId=n.target.id,this.saveAndRender())},confirmDelete(){""!==this.selectedProjId&&confirm("Are you sure you want to delete the project?")&&this.delProject()},delProject(){this.allProjects.forEach((n=>{n.id===this.selectedProjId&&(this.allProjects.splice(this.allProjects.indexOf(n),1),this.saveAndRender(),console.log(this.allProjects))}))}}).init()}()})();