var myKey = "9ffc0de74804e28fa563c8d76888af4e";
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
var searchInput = document.querySelector("#search");
var searchBtn = document.querySelector("#searchBtn");
var icon = document.querySelector("#icon");

async function checkWeather(city){
    const response = await fetch(weatherUrl + city + "&appid=" + myKey);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "MPH";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds"){
        icon.src = "icons/cloud.png";
    }else if(data.weather[0].main == "Clear"){
        icon.src = "icons/sun.png";
    }else if(data.weather[0].main == "Rain"){
        icon.src = "icons/heavy-rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        icon.src = "icons/rainy.png";
    }else if(data.weather[0].main == "Mist"){
        icon.src = "icons/rainy.png";
    }
}


async function weatherForecast(city){

    const response = await fetch(forecastUrl + city + "&appid=" + myKey);
    var data2 = await response.json();
    console.log(data2);

    /* day1 */
    document.querySelector(".date2").innerHTML = data2.list[5].dt_txt;
    document.querySelector(".temp2").innerHTML = Math.round(data2.list[5].main.temp) + "°F";
    document.querySelector(".wind2").innerHTML = Math.round(data2.list[5].wind.speed) + "MPH";
    document.querySelector(".humidity2").innerHTML = data2.list[5].main.humidity + "%";

    if(data2.list[5].weather[0].main == 'Clouds'){
        icon2.src = "icons/cloud.png";
    }else if(data2.list[5].weather[0].main == 'Clear'){
        icon2.src = "icons/sun.png";
    }else if(data2.list[5].weather[0].main == 'Rain'){
        icon2.src = "icons/heavy-rain.png";
    }else if(data2.list[5].weather[0].main == 'Drizzle'){
        icon2.src = "icons/rainy.png";
    }else if(data2.list[5].weather[0].main == 'Mist'){
        icon2.src = "icons/rainy.png";
    }

    /* day2 */
    document.querySelector(".date3").innerHTML = data2.list[13].dt_txt;
    document.querySelector(".temp3").innerHTML = Math.round(data2.list[13].main.temp) + "°F";
    document.querySelector(".wind3").innerHTML = Math.round(data2.list[13].wind.speed) + "MPH";
    document.querySelector(".humidity3").innerHTML = data2.list[13].main.humidity + "%";

    if(data2.list[13].weather[0].main == 'Clouds'){
        icon3.src = "icons/cloud.png";
    }else if(data2.list[13].weather[0].main == 'Clear'){
        icon3.src = "icons/sun.png";
    }else if(data2.list[13].weather[0].main == 'Rain'){
        icon3.src = "icons/heavy-rain.png";
    }else if(data2.list[13].weather[0].main == 'Drizzle'){
        icon3.src = "icons/rainy.png";
    }else if(data2.list[13].weather[0].main == 'Mist'){
        icon3.src = "icons/rainy.png";
    }

    /* day3 */
    document.querySelector(".date4").innerHTML = data2.list[21].dt_txt;
    document.querySelector(".temp4").innerHTML = Math.round(data2.list[21].main.temp) + "°F";
    document.querySelector(".wind4").innerHTML = Math.round(data2.list[21].wind.speed) + "MPH";
    document.querySelector(".humidity4").innerHTML = data2.list[21].main.humidity + "%";

    if(data2.list[21].weather[0].main == 'Clouds'){
        icon4.src = "icons/cloud.png";
    }else if(data2.list[21].weather[0].main == 'Clear'){
        icon4.src = "icons/sun.png";
    }else if(data2.list[21].weather[0].main == 'Rain'){
        icon4.src = "icons/heavy-rain.png";
    }else if(data2.list[21].weather[0].main == 'Drizzle'){
        icon4.src = "icons/rainy.png";
    }else if(data2.list[21].weather[0].main == 'Mist'){
        icon4.src = "icons/rainy.png";
    }

    /* day4 */
    document.querySelector(".date5").innerHTML = data2.list[29].dt_txt;
    document.querySelector(".temp5").innerHTML = Math.round(data2.list[29].main.temp) + "°F";
    document.querySelector(".wind5").innerHTML = Math.round(data2.list[29].wind.speed) + "MPH";
    document.querySelector(".humidity5").innerHTML = data2.list[29].main.humidity + "%";

    if(data2.list[29].weather[0].main == 'Clouds'){
        icon5.src = "icons/cloud.png";
    }else if(data2.list[29].weather[0].main == 'Clear'){
        icon5.src = "icons/sun.png";
    }else if(data2.list[29].weather[0].main == 'Rain'){
        icon5.src = "icons/heavy-rain.png";
    }else if(data2.list[29].weather[0].main == 'Drizzle'){
        icon5.src = "icons/rainy.png";
    }else if(data2.list[29].weather[0].main == 'Mist'){
        icon5.src = "icons/rainy.png";
    }

    /* day5 */
    document.querySelector(".date6").innerHTML = data2.list[37].dt_txt;
    document.querySelector(".temp6").innerHTML = Math.round(data2.list[37].main.temp) + "°F";
    document.querySelector(".wind6").innerHTML = Math.round(data2.list[37].wind.speed) + "MPH";
    document.querySelector(".humidity6").innerHTML = data2.list[37].main.humidity + "%";
    var icon6 = document.querySelector("#icon6")

    if(data2.list[37].weather[0].main == 'Clouds'){
        icon6.src = "icons/cloud.png";
    }else if(data2.list[37].weather[0].main == 'Clear'){
        icon6.src = "icons/sun.png";
    }else if(data2.list[37].weather[0].main == 'Rain'){
        icon6.src = "icons/heavy-rain.png";
    }else if(data2.list[37].weather[0].main == 'Drizzle'){
        icon6.src = "icons/rainy.png";
    }else if(data2.list[37].weather[0].main == 'Mist'){
        icon6.src = "icons/rainy.png";
    }
}

    function history(){
        var searchValue = searchInput.value.trim();
        var searches = JSON.parse(localStorage.getItem("searches")) || [];
        searches.push(searchValue);
        localStorage.setItem("searches", JSON.stringify(searches));
        searchInput.value = "";
        displaySearchHistory();
}
    function displaySearchHistory() {
    var searchHistoryDiv = document.querySelectorAll("#preCitys");
   /*  searchHistoryDiv = " "; */
    var searches = JSON.parse(localStorage.getItem("searches")) || [];

    for (let i = 0; i < searches.length; i++) {
        var searchButton = document.createElement("button");
        searchButton.textContent = searches[i];
        let searchDiv = document.createElement("div")
        searchDiv.appendChild(searchButton);
        console.log(searches);
        /* fix this statement to run only when certain values are not already included in the array called searches */
        if(searches.includes(searches[i])){
            searchHistoryDiv[0].append(searchDiv)
        }
}
}
displaySearchHistory();


searchBtn.addEventListener("click", function(){
    checkWeather(searchInput.value);
    weatherForecast(searchInput.value);
    history();
})

