const clockContainer = document.querySelector(".js-clock"), //html div.class "js-clock"를 불러옴
    clockTitle = clockContainer.querySelector(".js-title"); // h1 class 를 가져옴

function getTime()
{
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}:${milliseconds}`
}

function init() // clock 기능 최종 실행 함수
{
    getTime();
    setInterval(getTime, 1);
}

init();

