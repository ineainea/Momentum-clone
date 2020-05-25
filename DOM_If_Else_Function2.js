const title = document.querySelector("#title"); /* HTML을 이 DOM 객체로 바꿈 */

<<<<<<< HEAD
const CLICKED_CLASS = "clicked"; // CSS에 class clicked를 변수 const CLICKED_CLASS에 저장.

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
=======
const CLICKED_CLASS = "clicked";

function handleClick(){
title.classList.toggle(CLICKED_CLASS);
>>>>>>> b46e0f9d689c23f0a97260787a436bf0b13b221f
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
