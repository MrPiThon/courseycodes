document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "719c1e6e86bb3f8e32258c372c484394"; // Ensure your API key is correct and active

    // Check if geolocation is available
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Correct the OpenWeatherMap API URL
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

            // Fetch the weather data
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    displayWeather(data);
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    document.getElementById("weather-info").innerHTML = "Error fetching weather data.";
                });
        }, (error) => {
            console.error("Geolocation error:", error);
            document.getElementById("weather-info").innerHTML = "Unable to retrieve location.";
        });
    } else {
        document.getElementById("weather-info").innerHTML = "Geolocation is not supported by this browser.";
    }

    function displayWeather(data) {
        const weatherInfo = document.getElementById("weather-info");

        // Extract needed data
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display the data
        weatherInfo.innerHTML = `
            ☁ ${temperature}°F
        `;
    }
});
