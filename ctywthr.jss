document.getElementById("searchBtn").addEventListener("click", function () {
    let city = document.getElementById("cityInput").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});

async function getWeather(city) {
    const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === 200) {
            document.getElementById("cityName").innerText = `📍 ${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
            document.getElementById("description").innerText = `🌤 Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;
        } else {
            alert("City not found!");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong. Please try again.");
    }
}
