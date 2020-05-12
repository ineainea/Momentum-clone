const title = document.querySelector("#title"); /* HTML을 이 DOM 객체로 바꿈 */

function handleClick(){
    title.style.color="blue";
}

title.addEventListener("click", handleClick);