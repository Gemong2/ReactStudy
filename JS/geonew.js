const COORDS = "coords";

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude); // 추가
  }

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
      askForCoords();
    } else {
      // 추가
      const parseCoordes = JSON.parse(loadCoords);
      getWeather(parseCoordes.latitude, parseCoordes.longitude);
    }
  }

function init() {
  loadCoords();
}


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  }


const API_KEY = 'da4992756d3a31cd9b0ded28d6534403';

// 추가
function getWeather(lat, lon) {
    fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${API_KEY}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      });
  }



init();