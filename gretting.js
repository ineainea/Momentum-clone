<<<<<<< HEAD
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
=======
//각 클래스를 가져옴.
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//중복되는 상수는 따로 선언.
const USER_LS = "currentUser", //local Storage의 Key값을 받기위한 선언.
    SHOWING_CL = "showing"; // CSS .showing를 불러오기 위한 선언

// localStorage에 이름을 저장하는 함수
function saveName(text) 
{
    localStorage.setItem(USER_LS, text); //Key: currentUser, Value: 입력한 text
    // localStorage는 키(key)와 값(value)을 하나의 세트로 저장.
}

// form태그의 이벤트리스너 함수(이름 작성)
function handleSubmit(event)
{
    event.preventDefault(); // 작성 후 브라우저가 새로고침 되는 것을 막음
    const currentValue = input.value; // 작성한 값을 currentValue에 넣음.
    plaintGreeting(currentValue); // 선언된 값은 함수 plaintGreeting대로 실행됨.
    saveName(currentValue); //이름은 saveName 함수대로 local Storage에 저장됨.
}

// showing태그를 생성하고, 이벤트리스너를 생성한다.
function askForName()
{
    form.classList.add(SHOWING_CL); //form태그에 className showing(=SHOWING_CL)이 추가됨.
    form.addEventListener("submit", handleSubmit); //form태그에 제출이 됬을때, handleSubmit 함수 활성화
}

// form태그를 지우고, Hello ~ 문구를 출력한다.
function plaintGreeting(text)
{
    form.classList.remove(SHOWING_CL); // CSS form display: none으로 삭제가 되며,
    greeting.classList.add(SHOWING_CL); //h4 class에 showing이 추가되면서
    greeting.innerText = `Hello ${text}`; // h4위치와 크기의 텍스트와 "Hello"가 함께 나타난다.
}

// LocalStorage에 이름이 있으면, 이름을 불러온다.
function loadName()
{
    const currentUser = localStorage.getItem(USER_LS); // getItem, 해당 키 값의 이름을 가진 데이터를 가져옴.    
    if(currentUser === null){ //로컬리스트에 없는 경우
        askForName();
    } else { //로컬리스트에 있는 경우
        plaintGreeting(currentUser);
    }
}

function init()
{
    loadName();
}

>>>>>>> b46e0f9d689c23f0a97260787a436bf0b13b221f
init();