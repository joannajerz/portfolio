"use strict";
const list=document.querySelector('.github-list--js')
fetch('https://api.github.com/users/joannajerz/repos?sort=updated&direction=desc')
.then(resp=>resp.json())
.then(resp=>{
  const repos=resp;
  for(const repo of repos){
    const {description, html_url, name, homepage} = repo;
    list.innerHTML += `<li class="github-list__item">
    <div class="github-list__cointainer">
    <img src="assets/img/github.svg" alt="github icon" class="github-list__icon">
    <h3 class="github-list__title">${name}</h3>
    <p class="github-list__description">${description}</p>
    </div>
    <div class="github-list__footer">
      <img src="assets/img/demo-icon.svg" alt="demo icon" class="github-footer__icon">
      <a href="${homepage}" title="Demo: project" class="github-footer__demo">Demo</a>
      <div class="github-list__element"></div>
      <img src="assets/img/git-icon.svg" alt="git icon" class="github-footer__icon--git">
      <a href="${html_url}" title="Git: project" class="github-footer_git">Git</a>
    </div>
    </li>`
    
  }
})
.catch(err=>{
  console.log(err)
})


