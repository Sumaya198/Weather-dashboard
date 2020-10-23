const searchBox = $("#cityname");
const cityName = $(".location");
const temperature = $(".temp");
const humidity = $(".humidityNr");
const wind = $(".wind");
const uv = $(".uvIndexValue");

searchBox.submit(function(event) {
    event.preventDefault();
    const cityNameString = cityName.val();
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameString + "&units=metric&appid=73b47f542215050a64d2b287364ee1d1";
    console.log('queryURL', queryURL);
});
    //fetchStatus.text("please wait");

