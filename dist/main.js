"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[179],{985:(e,n,t)=>{var o=t(379),i=t.n(o),c=t(795),a=t.n(c),r=t(569),s=t.n(r),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),m=t.n(f),h=t(426),v={};function y(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}v.styleTagTransform=m(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),i()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var g=function(){function e(n,t,o){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.description=n,this.completed=o,this.index=t}var n,t;return n=e,(t=[{key:"getCompleted",value:function(){return this.completed}},{key:"setCompleted",value:function(e){this.completed=e}},{key:"renderLi",value:function(){var e=this.completed?" line_through ":"",n='<img src="./assets/todouncompleteicon.svg" alt="todo statut icon" class="uncomplete'.concat(this.index,'" onclick="completeTask(').concat(this.index,')"> ')+'<img src="./assets/completeicon.svg" alt="todo statut icon" class="complete'.concat(this.index,' hidden_item" onclick="uncompleteTask(').concat(this.index,')"> '),t='<img src="./assets/todouncompleteicon.svg" alt="todo statut icon" class=" hidden_item uncomplete'.concat(this.index,'" onclick="completeTask(').concat(this.index,')"> ')+'<img src="./assets/completeicon.svg" alt="todo statut icon" class="complete'.concat(this.index,' " onclick="uncompleteTask(').concat(this.index,')"> '),o=this.completed?t:n;return'<li class="todo_details li'.concat(this.index,'" ><div class="statut_and_detail">').concat(o,'<input class="todo_description ').concat(e,"input").concat(this.index,'" value="').concat(this.description,'" onfocusout="lifocusout(').concat(this.index,')" onclick="focusInput(').concat(this.index,')" onchange="taskUpdate(').concat(this.index,')"></input>')+'</div><img src="assets/detail_icon.svg" alt="action icon" class="doto_action details'.concat(this.index,'">')+'<img src="assets/tododelete.svg" alt="action icon" class="doto_action delete'.concat(this.index,' hidden_item" onclick="removeTask(').concat(this.index,')">')+"</li>"}}])&&y(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();function b(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var _=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.localData=JSON.parse(localStorage.getItem("tasklist"))||[]}var n,t;return n=e,(t=[{key:"generateTodoIndex",value:function(){return this.localData.length+1}},{key:"refreshIndex",value:function(){this.localData.forEach((function(e,n){e.index=n+1})),this.localStrore()}},{key:"generateTaskList",value:function(){var e="";return this.localData.forEach((function(n){e+=n.renderLi()})),e}},{key:"addTask",value:function(e){this.localData.push(new g(e,this.generateTodoIndex(),!1)),this.refreshIndex()}},{key:"removeItem",value:function(e){this.localData.splice(e,1),this.refreshIndex()}},{key:"removeItem2",value:function(e){this.localData.splice(e,1)}},{key:"localStrore",value:function(){localStorage.setItem("taskList",JSON.stringify(this.localData))}},{key:"clearCompletedTasks",value:function(){var e=this,n=[];this.localData.forEach((function(e,t){!0===e.completed&&n.push(t)})),n.forEach((function(n){e.removeItem2(n)})),this.refreshIndex()}}])&&b(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}(),x=document.querySelector(".add_todo_input"),k=document.querySelector(".todolist"),S=document.querySelector(".todo_add_icon"),T=document.querySelector(".refresh_div"),w=new _;function L(){k.innerHTML=w.generateTaskList()}function q(){k.innerHTML="",L()}function C(e){var n=e.classList;n.contains("hidden_item")||n.toggle("hidden_item")}function I(e){if(e.isArray)e.forEach((function(e){var n=e.classList;n.contains("hidden_item")&&n.remove("hidden_item")}));else{var n=e.classList;n.contains("hidden_item")&&n.remove("hidden_item")}}function E(e){var n=e.classList;n.contains("line_through")||n.toggle("line_through")}function D(e){if(e.isArray)e.forEach((function(e){var n=e.classList;n.contains("line_through")&&n.remove("line_through")}));else{var n=e.classList;n.contains("line_through")&&n.remove("line_through")}}document.completeTask=function(e){C(document.querySelector(".uncomplete".concat(e))),I(document.querySelector(".complete".concat(e))),C(document.querySelector(".details".concat(e))),I(document.querySelector(".delete".concat(e))),E(document.querySelector(".input".concat(e))),w.localData[e-1].setCompleted(!0)},document.uncompleteTask=function(e){C(document.querySelector(".complete".concat(e))),I(document.querySelector(".uncomplete".concat(e))),C(document.querySelector(".delete".concat(e))),I(document.querySelector(".details".concat(e))),D(document.querySelector(".input".concat(e))),w.localData[e-1].setCompleted(!1)},document.focusInput=function(e){C(document.querySelector(".details".concat(e))),I(document.querySelector(".delete".concat(e)))},document.lifocusout=function(e){C(document.querySelector(".delete".concat(e))),I(document.querySelector(".details".concat(e)))},document.taskUpdate=function(e){w.localData[e-1].description=document.querySelector(".input".concat(e)).value,w.refreshIndex()},document.removeTask=function(e){w.removeItem(e-1),q()},document.displayLineThroughComponent=E,document.removeLineThroughComponent=D,document.addEventListener("DOMContentLoaded",q),document.querySelector(".todo_clear_all_completed").addEventListener("click",(function(){w.clearCompletedTasks(),q()})),S.addEventListener("click",(function(){""!==x.value&&(w.addTask(x.value),L(),x.value="")})),T.addEventListener("click",q)},426:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(81),i=t.n(o),c=t(645),a=t.n(c)()(i());a.push([e.id,".container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Open Sans', sans-serif;\n  color: #7b7b7b;\n}\n\n.todolist_place_holder {\n  min-width: 500px;\n  max-width: 60%;\n}\n\n.todoelement {\n  padding: 0.5em;\n  display: flex;\n  border-bottom: 1px solid #f6f6f6;\n}\n\n.title_div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.refresh_div {\n  padding: 0.5em;\n}\n\n.refresh_div:hover {\n  border: 1px solid gray;\n  border-radius: 10px;\n}\n\n.add_todo_input {\n  border: none;\n  width: 100%;\n  color: inherit;\n  font-family: inherit !important;\n}\n\n.add_todo_input:focus {\n  outline: none !important;\n  color: inherit;\n  font-family: inherit;\n}\n\n.add_submit_button {\n  border: none;\n  background-color: inherit;\n}\n\n.todo_add_icon {\n  padding: 0.5em;\n}\n\n.todo_add_icon:hover {\n  height: 14px;\n  padding: 0.5em;\n}\n\n.todolist {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin-bottom: 0;\n  margin-top: 0;\n  border-bottom: none;\n  padding: 0;\n  justify-content: space-evenly;\n}\n\n.todo_details {\n  padding-top: 1em;\n  padding-bottom: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  border-bottom: 1px solid #f6f6f6;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.statut_and_detail {\n  display: flex;\n  gap: 1em;\n}\n\n.todo_clear_all_completed {\n  width: 100%;\n  padding-top: 1em;\n  padding-bottom: 01em;\n  border: none;\n  color: #7b7b7b;\n  font-family: 'Open sans', sans-serif;\n  background-color: #f6f6f6;\n}\n\n.hidden_item {\n  display: none;\n}\n\n.todo_description {\n  border: none;\n  color: inherit;\n  font-family: inherit !important;\n  font-size: inherit;\n}\n\n.todo_description:focus {\n  outline: none !important;\n  color: inherit;\n  font-family: inherit;\n}\n\n.line_through {\n  text-decoration: line-through;\n}\n",""]);const r=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var c={},a=[],r=0;r<e.length;r++){var s=e[r],l=o.base?s[0]+o.base:s[0],d=c[l]||0,u="".concat(l," ").concat(d);c[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=i(f,o);o.byIndex=r,n.splice(r,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var c=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var r=t(c[a]);n[r].references--}for(var s=o(e,i),l=0;l<c.length;l++){var d=t(c[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},e=>{e(e.s=985)}]);