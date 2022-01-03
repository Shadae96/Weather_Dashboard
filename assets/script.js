var apiKey = "e3e7a910d69d02a717871b60c895d7d9";
const searchButton = $(".search-button");
var searchInput = $(".searchInput").val()

// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=e3e7a910d69d02a717871b60c895d7d9

for (var i=0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i);

    var cityName = $(".list-group").addClass("list-group-item");

    cityName.append("<li>" + city + "</li>")
}

// Store to localStorage

var keyCount = 0;

searchButton.click(function(){
    var searchInput = $(".searchInput").val();
    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
    var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
    console.log(searchInput);

if (searchInput == ""){console.log(searchInput)}

else { $.ajax({
    url: urlCurrent,
    method: "Get"})

    .then(function (response) {console.log(response)
        var cityName = $(".list-group").addClass("list-group-item");
        cityName.append ("<li>" + response.name + "</li>");
        // store name to localStorage
        var local = localStorage.setItem(keyCount, response.name),
        keyCount= keyCount + 1;

        //Add current weather

        var currentCard = $(".currentCard").append("<div>").addClass("card-body");
        currentCard.empty();
        var currentName = currentCard.append("<p>");
        currentCard.append(currentName);

        // Add current Date

        var timeUTC = new Date(response.dt *1000)

        currentName.append(response.name + " " +timeUTC.toLocaleDateString("en-US"));

    }) }

});























// What we're building
// 1.) Get weather Api
// 2.) Input box that accepts city name
// 3.) Use city name to pull Weather conditions 
        // a.) date b.) time c.) 5-day forcast d.) the temperature e.) the humidity f.) UV index
    // 4.) Icon that indicates if weather is favorable, moderate or severe
    // 5.) create a five day forecast
    // 6.)save results to local storage and able to click on it again to show results