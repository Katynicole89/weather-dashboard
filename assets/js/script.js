//API Key
const apiKey = 'd079b6728d14fed89167502311b657e5'; 
//API Call
let storeCities = [];
const date = moment().format('L');







$("#getWeather").on("click", function (event) {
    event.preventDefault();
    // Take typed city from input box
    var cityInput = $("#cityInput").val().trim();
    let cityDateEl = $("#cityDate").text(date);

      //Save to LocalStorage
      let textContent = $(this).siblings("input").val();
      storeCities.push(textContent);
      localStorage.setItem('storeCities', JSON.stringify(storeCities));

    let searchedButton=$('<input/>').attr({
        type: "button",
        class:"btn bg-secondary text-white btn-large mt-2",
        id: "searchedCities",
        value: $("#cityInput").val().trim(),
    });
    $("#citylist").append(searchedButton);    
     

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
    let currentIconLink = $('#wIcon').attr("src", 'http://openweathermap.org/img/wn/' + currentIcon + '.png');
    currentIconLink.attr("style", "height: 60px; width: 60px");

    let lat = response.coord.lat;
    let lon = response.coord.lon;

    console.log(lat);
    console.log(lon);

    let cityNameID = response.name

    let apiCall2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameID + "&appid=" + apiKey;

    $.ajax({
        url: apiCall2, 
        method: 'GET'
    })
    .then(function(response){
        console.log(apiCall2);
        console.log(response);
    
    
    })



})


  
  
    // searchCity(cityname);
    // pageLoad();
});

