const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "a864f9d7048064e51627f101c3fc0316";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            displayError(error.message);
        }
    } else {
        displayError("Enter a city");
    }
});

async function getWeatherData(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();
    return data;
}

function displayWeatherInfo(data) {
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

    const cityDisplay = document.querySelector(".cityDisplay");
    const tempDisplay = document.querySelector(".tempDisplay");
    const humidityDisplay = document.querySelector(".humidityDisplay");
    const descDisplay = document.querySelector(".descDisplay");
    const weatherEmoji = document.querySelector(".weatherEmoji");
    const errorDisplay = document.querySelector(".errorDisplay");

  
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${Math.round(temp)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    errorDisplay.style.display = "none";

    card.style.display = "flex";
}

function displayError(message) {
    const errorDisplay = document.querySelector(".errorDisplay");

    errorDisplay.textContent = message;
    errorDisplay.style.display = "block";

    card.style.display = "block";
}

function getWeatherEmoji(id) {
    if (id >= 200 && id < 300) return "⛈️";
    if (id >= 300 && id < 500) return "🌦️";
    if (id >= 500 && id < 600) return "🌧️";
    if (id >= 600 && id < 700) return "❄️";
    if (id >= 700 && id < 800) return "🌫️";
    if (id === 800) return "☀️";
    if (id > 800 && id < 900) return "☁️";
    return "🌍";
}