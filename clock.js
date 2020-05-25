<<<<<<< HEAD
const clockContainer = document.querySelector(".js-clock"), //html div.class "js-clock"를 불러옴
    clockTitle = clockContainer.querySelector(".js-title"); // h1 class 를 가져옴
=======
const clockContainer = document.querySelector(".js-clock"),
 clockTitle = document.querySelector("h1");
>>>>>>> b46e0f9d689c23f0a97260787a436bf0b13b221f

function getTime()
{
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
<<<<<<< HEAD
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
=======
    const millisecond = date.getMilliseconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}:${
                millisecond}`;

}

function init()
{
    getTime();
    setInterval(getTime, 0);
>>>>>>> b46e0f9d689c23f0a97260787a436bf0b13b221f
}

init();