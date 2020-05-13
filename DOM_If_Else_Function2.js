const title = document.querySelector("#title"); /* HTML을 이 DOM 객체로 바꿈 */

const CLICKED_CLASS = "clicked";

function handleClick(){
title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
