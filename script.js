var cityName = $("#citySearchBtn").val().trim();

async function displayWeather() {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=21d128712dd462e35c64d0421760b245";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);


});
}