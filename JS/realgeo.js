function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    getWeather(lat, lon);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")

}
const API_KEY = 'da4992756d3a31cd9b0ded28d6534403';

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            console.log(json);
          });

}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);