document.addEventListener("DOMContentLoaded", () => {
    const volunteerButton = document.getElementById("volunteer-button");

    // Function to toggle volunteer form visibility
    function showVolunteerForm() {
        const volunteerForm = document.getElementById("volunteer-form");
        volunteerForm.style.display =
            volunteerForm.style.display === "block" ? "none" : "block";
    }document.addEventListener("DOMContentLoaded", () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const weatherHTML = `
                    <h4>Weather in ${data.name}</h4>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                `;
                weatherSection.innerHTML = weatherHTML;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherSection.innerHTML = "<p>Unable to load weather data. Please try again later.</p>";
            });
    });
    
    volunteerButton.addEventListener("click", showVolunteerForm);

    const apiKey = "b46846c319a525dc0ab42f76a98cf53d";
    const location = currentLocation;
    const weatherSection = document.getElementById("weather-info");

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) { 
                const weatherHTML = `
                    <h4>Weather in ${data.name}</h4>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                `;
                weatherSection.innerHTML = weatherHTML;
            } else {
                weatherSection.innerHTML = "<p>Unable to load weather data. Please check the city name and try again.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherSection.innerHTML = "<p>Unable to load weather data. Please try again later.</p>";
        });
});

