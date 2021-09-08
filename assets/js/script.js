//API Key
const apiKey = 'd079b6728d14fed89167502311b657e5'; 
//API Call

var storeCities = [];
const date = moment().format('L');







$("#getWeather").on("click", function (event) {
    event.preventDefault();
    // Take typed city from input box
    var cityInput = $("#cityInput").val().trim();
    let cityDateEl = $("#cityDate").text(date);

    //Make API Call - Get information back
    let apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&APPID=' + apiKey + '&units=imperial';
    $.ajax({
        url: apiCall,
        method: 'GET'
    })
    
    .then(function (response) {
        console.log(apiCall);
        console.log(response);

         //Set Information on page 



    let cityNameEl = $("#cityName").text(response.name);
    let cityDescriptionEl = $("#cityDescription").text(response.weather[0].description + '.');
    let citytempEL = $("#cityTemp").text("Temp: " + response.main.temp + "F");
    let cityWindEl = $("#cityWind").text("Wind: " + response.wind.speed + "MPH");
    let cityHumidityEl = $("#cityHumidity").text("Humidity: " + response.main.humidity);
    let currentIcon = response.weather[0].icon;
    console.log(currentIcon);
    let currentIconLink = $('#wIcon').attr("src", 'http://openweathermap.org/img/wn/' + currentIcon + '.png');
    currentIconLink.attr("style", "height: 60px; width: 60px");

    console.log(currentIconLink);
})


    //Save to LocalStorage
    let textContent = $(this).siblings("input").val();
    storeCities.push(textContent);
    localStorage.setItem('storeCities', JSON.stringify(storeCities));
  
    // searchCity(cityname);
    // pageLoad();
});

