const title = document.querySelector("#title"); /* HTML을 이 DOM 객체로 바꿈 */

const CLICKED_CLASS = "cliecked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS
    } else{
        title.className = "";
    }
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
