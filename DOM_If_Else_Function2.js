const title = document.querySelector("#title"); /* HTML을 이 DOM 객체로 바꿈 */

const CLICKED_CLASS = "clicked"; // CSS에 class clicked를 변수 const CLICKED_CLASS에 저장.

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
