//각 클래스를 가져옴.
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    const btn = event.target; //클릭한 span 태그의 반환하여 btn에 선언
    const li = btn.parentNode; //.parentNode를 통해 클릭한 태크의 부모 요소를 찾아서 li에 대입
    toDoList.removeChild(li); // 클릭한 태그의 li 태그 삭제
    const cleanToDos = toDos.filter(function(toDo){ //filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환함.
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}

// 로컬스토리지에 toDos 저장 (문자열로 저장해야함.)
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify() 자바스크립object를 string으로 바꿈 
}

// ul태그에 span, button이 담긴 ul 생성.
function paintToDo(text)
{
    const li = document.createElement("li"); // 빈 li 생성
    const delBtn = document.createElement("button"); // 삭제를 위한 버튼 생성
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span"); // 텍스트 입력을 위한 span 생성
    const newId = toDos.length + 1; // id를 li에 넣기위해 상수화함.
    span.innerText = text;
    li.appendChild(span); //li태그 안에 span태그를 상속시키
    li.appendChild(delBtn); //li태그 안에 delbtn태그를 상속시킴
    li.id = newId; // Id를 li에도 추가, 나중에 li를 삭제할 때를 위해서 
    toDoList.appendChild(li); //js-toDoList클래스 안에 li태그를 상속시킴
    
    // 로컬스토리지에 저장할 toDoObj 객체를 생성
    const toDoObj = {
        text: text, //text라는 key에 text 라는 value.
        id: newId
    };
    toDos.push(toDoObj); // 배열의 뒤에 새로운 배열값 추가 <=> .unshift

    saveToDos(); //저장함수 호출
}

// toDoForm의 이벤트리스너 생성
function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //input 창에 내용을 입력 후 해당 칸에 text를 남기지 않음.
}

// 로컬스토리지에서 TODOS_LS를 불러옴
function loadToDos()
{
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null) {
    const parasedToDos = JSON.parse(loadToDos); //string 타입의 데이터를 object으로 변환하여 가져옴.
    parasedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
    });
    }
}

function init()
{
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();