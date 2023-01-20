function onGeoOK(position){
    const lat = position.coords.latitude;
    const lan = position.coords.longitude;
    console.log("You live in", lat, lan);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")

}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
onGeoOK({})

/* https://api.openweathermap.org/data/2.5/weather?lat=37.5128064&lon=127.0284288&appid={api_key}&units=metric

https://openweathermap.org/current */