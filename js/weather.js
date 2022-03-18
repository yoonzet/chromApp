
const weatherSpan = document.querySelector('.weather span');
const weatherIcon = document.querySelector('.weather-icon');
const API_KEY = '0a91967618c7d5fe5a5357c5a0f5135d';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = data.weather[0].main;
        const temperature = data.main.temp;
        const city = data.name;
        const weatherIconData = data.weather[0].icon;
        const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIconData}@2x.png`;

        weatherSpan.innerHTML = `${city} ${temperature}°C`
        weatherIcon.setAttribute('src', weatherIconUrl);

    });
}

function onGeoError(){
    alert("cant't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


