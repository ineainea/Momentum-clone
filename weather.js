const weather = document.querySelector(".js-weather");

const API_KEY = "d5a28e51c633a95f924f39b59a2c8c75";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `온도: ${temperature} & 위치: ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, //변수와 객체의 key 값이 같을경우 이렇게 쓸 수 있다.
        longitude
        //latitude = latitude,
        //longitude = longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
    console.log(getWeather);
}

function handleGeoError(position){
    console.log('Cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        //날씨 가져오기
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();