// get weather information
let weather = {
    apiKey: "e728338e5d4fcf0e89363c48a2ded80a",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    // get data from json into variables
    displayWeather: function (data) {
        const { name } = data;
        const { main } = data.weather[0];
        const { temp } = data.main;
        const { dt } = data;
        const { sunrise, sunset } = data.sys;
        // add name and main to html
        document.querySelector(".city").innerText = name.toLowerCase();
        document.querySelector(".description").innerText = main.toLowerCase();
        // add temp to html
        document.querySelector(".temp").innerText = Math.floor(temp) + "°";
        // check if its day or night and adjust icon accordingly
        if (dt > sunrise && dt < sunset) {
            document.querySelector(".weather-icon").innerHTML =
                "<img src='icons/sun.png' alt='light' class='icon' />";
            document.querySelector("body").style.color = "white";
            document.querySelector("body").style.backgroundImage =
                "var(--gradientlight)";
            document.querySelector(".search button").style.color = "white";
        } else {
            document.querySelector(".weather-icon").innerHTML =
                "<img src='icons/moon.png' alt='dark' class='icon' />";
            document.querySelector("body").style.color = "black";
            document.querySelector("body").style.backgroundImage =
                "var(--gradientdark)";
            document.querySelector(".search button").style.color = "gray";
        }
    },
    //search function for searchbar & button
    search: function search() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

// get ip information of client and run weatherfetch function with client country
fetch("https://api.ipregistry.co/?key=acbgkyy5dj3lip5w")
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        weather.fetchWeather(payload.location.country.name);
    });

document.querySelector(".search-icon").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });