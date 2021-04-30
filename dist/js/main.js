!function(t){var c={};function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,c,e){i.o(t,c)||Object.defineProperty(t,c,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,c){if(1&c&&(t=i(t)),8&c)return t;if(4&c&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&c&&"string"!=typeof t)for(var n in t)i.d(e,n,function(c){return t[c]}.bind(null,n));return e},i.n=function(t){var c=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(c,"a",c),c},i.o=function(t,c){return Object.prototype.hasOwnProperty.call(t,c)},i.p="",i(i.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\nconst list=document.querySelector(\'.github-list--js\')\nfetch(\'https://api.github.com/users/joannajerz/repos?sort=updated&direction=desc\')\n.then(resp=>resp.json())\n.then(resp=>{\n  const repos=resp;\n  for(const repo of repos){\n    const {description, html_url, name, homepage} = repo;\n    list.innerHTML += `<li class="github-list__item">\n    <div class="github-list__cointainer">\n    <img src="assets/img/github.svg" alt="github icon" class="github-list__icon">\n    <h3 class="github-list__title">${name}</h3>\n    <p class="github-list__description">${description}</p>\n    </div>\n    <div class="github-list__footer">\n      <img src="assets/img/demo-icon.svg" alt="demo icon" class="github-footer__icon">\n      <a href="${homepage}" title="Demo: project" class="github-footer__demo">Demo</a>\n      <div class="github-list__element"></div>\n      <img src="assets/img/git-icon.svg" alt="git icon" class="github-footer__icon--git">\n      <a href="${html_url}" title="Git: project" class="github-footer_git">Git</a>\n    </div>\n    </li>`\n    \n  }\n})\n.catch(err=>{\n  console.log(err)\n})\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEtBQUs7QUFDMUMsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgbGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0aHViLWxpc3QtLWpzJylcbmZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2pvYW5uYWplcnovcmVwb3M/c29ydD11cGRhdGVkJmRpcmVjdGlvbj1kZXNjJylcbi50aGVuKHJlc3A9PnJlc3AuanNvbigpKVxuLnRoZW4ocmVzcD0+e1xuICBjb25zdCByZXBvcz1yZXNwO1xuICBmb3IoY29uc3QgcmVwbyBvZiByZXBvcyl7XG4gICAgY29uc3Qge2Rlc2NyaXB0aW9uLCBodG1sX3VybCwgbmFtZSwgaG9tZXBhZ2V9ID0gcmVwbztcbiAgICBsaXN0LmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiZ2l0aHViLWxpc3RfX2l0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2l0aHViLWxpc3RfX2NvaW50YWluZXJcIj5cbiAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvZ2l0aHViLnN2Z1wiIGFsdD1cImdpdGh1YiBpY29uXCIgY2xhc3M9XCJnaXRodWItbGlzdF9faWNvblwiPlxuICAgIDxoMyBjbGFzcz1cImdpdGh1Yi1saXN0X190aXRsZVwiPiR7bmFtZX08L2gzPlxuICAgIDxwIGNsYXNzPVwiZ2l0aHViLWxpc3RfX2Rlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdpdGh1Yi1saXN0X19mb290ZXJcIj5cbiAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9kZW1vLWljb24uc3ZnXCIgYWx0PVwiZGVtbyBpY29uXCIgY2xhc3M9XCJnaXRodWItZm9vdGVyX19pY29uXCI+XG4gICAgICA8YSBocmVmPVwiJHtob21lcGFnZX1cIiB0aXRsZT1cIkRlbW86IHByb2plY3RcIiBjbGFzcz1cImdpdGh1Yi1mb290ZXJfX2RlbW9cIj5EZW1vPC9hPlxuICAgICAgPGRpdiBjbGFzcz1cImdpdGh1Yi1saXN0X19lbGVtZW50XCI+PC9kaXY+XG4gICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvZ2l0LWljb24uc3ZnXCIgYWx0PVwiZ2l0IGljb25cIiBjbGFzcz1cImdpdGh1Yi1mb290ZXJfX2ljb24tLWdpdFwiPlxuICAgICAgPGEgaHJlZj1cIiR7aHRtbF91cmx9XCIgdGl0bGU9XCJHaXQ6IHByb2plY3RcIiBjbGFzcz1cImdpdGh1Yi1mb290ZXJfZ2l0XCI+R2l0PC9hPlxuICAgIDwvZGl2PlxuICAgIDwvbGk+YFxuICAgIFxuICB9XG59KVxuLmNhdGNoKGVycj0+e1xuICBjb25zb2xlLmxvZyhlcnIpXG59KVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);