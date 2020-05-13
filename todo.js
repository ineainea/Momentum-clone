//각 클래스를 가져옴.
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text)
{
    const li = document.createElement("li"); // 빈 li 생성
    const delBtn = document.createElement("button"); // 삭제를 위한 버튼 생성
    delBtn.innerHTML = "❌";
    const span = document.createElement("span"); // 텍스트 입력을 위한 span 생성
    span.innerText = text;
    li.appendChild(delBtn); //li태그 안에 delbtn태그를 상속시킴
    li.appendChild(span); //li태그 안에 span태그를 상속시키
    toDoList.appendChild(li); //js-toDoList클래스 안에 li태그를 상속시킴
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos()
{
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {

    }
}

function init()
{
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();