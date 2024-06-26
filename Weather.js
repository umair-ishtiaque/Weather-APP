
const apiKey = '6a3faf1ff85bdfa26ab42ce8b9d3e5ac';
const BASE_URL = 'https://api.openweathermap.org/';
const weatherData = document.getElementById('weatherData');

function getWeather() {
    const searchInput = document.getElementById('searchInput').value;
    const url = `${BASE_URL}data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
         console.log(data);
            if(data.cod >= 400 || (!data)) {
                weatherData.innerHTML=`<h2>Incorrect Information<h2>`
            }
            else {
                weatherData.innerHTML = `
                <h2>${data.name} Weather</h2>
                <p>Temperature: ${Math.round(data.main.temp)} &deg;C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                
                <img src="${BASE_URL}img/w/${data.weather[0].icon}.png" alt="weather-icon">
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Coordinates: ${data.coord.lon} Longitute, ${data.coord.lat} Latitute</p>
            `;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
        });
}