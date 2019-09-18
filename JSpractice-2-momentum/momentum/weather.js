const API_KEY = "958d007ab9ed74bdebc834b9e5756819";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng) {
    //url호출, fetch, API 이식하기
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        //패치 이후 함수 실행 : then
        //데이터 오브젝트로 받고(json) 그거 가공할때 쓸듯
        return response.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position) {
    console.log("can`t access geo location");
}

function askForCoords() {
    // 이거 더 공부해봐야될듯
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();