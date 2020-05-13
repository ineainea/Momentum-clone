const clockContainer = document.querySelector(".js-clock"),
 clockTitle = document.querySelector("h1");

function getTime()
{
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
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
}

init();