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

    let apiCall2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameID + "&appid=" + apiKey + '&units=imperial';

    $.ajax({
        url: apiCall2, 
        method: 'GET'
    })
    .then(function(response){
        console.log(apiCall2);
        console.log(response);
    
        //Day 1 Forecast Info
        let currentIconF = response.list[0].weather[0].icon;
        let currentIconLinkF = $('#ficon1').attr("src", 'http://openweathermap.org/img/wn/' + currentIconF + '.png');
        currentIconLinkF.attr("style", "height: 30px; width: 30px");
    
        let citydateEL = $("#fdate1").text(response.list[0].dt_txt);
        let citytempEL = $("#ftemp1").text('Temp:' + response.list[0].main.temp + 'F');
        let citywindEL = $("#wtemp1").text('Wind:' + response.list[0].wind.speed + 'MPH');
        let cityHumidEL = $("#fhumid1").text('Humidity:' + response.list[0].main.humidity);
    
        //Day 2 Forecast Info
        let currentIconF2 = response.list[8].weather[0].icon;
        let currentIconLinkF2 = $('#ficon2').attr("src", 'http://openweathermap.org/img/wn/' + currentIconF + '.png');
        currentIconLinkF2.attr("style", "height: 30px; width: 30px");
    
        let citydateEL2 = $("#fdate2").text(response.list[8].dt_txt);
        let citytempEL2 = $("#ftemp2").text('Temp:' + response.list[8].main.temp + 'F');
        let citywindEL22 = $("#wtemp2").text('Wind:' + response.list[8].wind.speed + 'MPH');
        let cityHumidEL2 = $("#fhumid2").text('Humidity:' + response.list[8].main.humidity);

        //Day 3 Forecast Info
        let currentIconF3 = response.list[8].weather[0].icon;
        let currentIconLinkF3 = $('#ficon3').attr("src", 'http://openweathermap.org/img/wn/' + currentIconF + '.png');
        currentIconLinkF3.attr("style", "height: 30px; width: 30px");
    
        let citydateEL3 = $("#fdate3").text(response.list[8].dt_txt);
        let citytempEL3 = $("#ftemp3").text('Temp:' + response.list[8].main.temp + 'F');
        let citywindEL23 = $("#wtemp3").text('Wind:' + response.list[8].wind.speed + 'MPH');
        let cityHumidEL3 = $("#fhumid3").text('Humidity:' + response.list[8].main.humidity);

        //Day 4 Forecast Info
        let currentIconF4 = response.list[16].weather[0].icon;
        let currentIconLinkF4 = $('#ficon4').attr("src", 'http://openweathermap.org/img/wn/' + currentIconF + '.png');
        currentIconLinkF4.attr("style", "height: 30px; width: 30px");
    
        let citydateEL4 = $("#fdate4").text(response.list[16].dt_txt);
        let citytempEL4 = $("#ftemp4").text('Temp:' + response.list[16].main.temp + 'F');
        let citywindEL4 = $("#wtemp4").text('Wind:' + response.list[16].wind.speed + 'MPH');
        let cityHumidEL4 = $("#fhumid4").text('Humidity:' + response.list[16].main.humidity);

        //Day 5 Forecast Info
        let currentIconF5 = response.list[24].weather[0].icon;
        let currentIconLinkF5 = $('#ficon5').attr("src", 'http://openweathermap.org/img/wn/' + currentIconF + '.png');
        currentIconLinkF5.attr("style", "height: 30px; width: 30px");
    
        let citydateEL5 = $("#fdate5").text(response.list[24].dt_txt);
        let citytempEL5 = $("#ftemp5").text('Temp:' + response.list[24].main.temp + 'F');
        let citywindEL5 = $("#wtemp5").text('Wind:' + response.list[24].wind.speed + 'MPH');
        let cityHumidEL5 = $("#fhumid5").text('Humidity:' + response.list[24].main.humidity);
    
    })



})


  
  
    // searchCity(cityname);
    // pageLoad();
});

