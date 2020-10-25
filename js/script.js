// Get current time
$("#currentDay").text(moment().format("DD/M/YYYY"));


// event listener
$("#searchBtn").click(function(event) {
    console.log('button clicked')
    getWeather();
    getFiveDayForcast ();
    addItem();
    // addToDo();
});


      ///Get weather for today
      function getWeather () {
          console.log('getWeather');
          let cityName = $("#cityname").val();
          let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`;
          
          ///save to local storge
          let cities = [];
              cities.push(cityName);
              let cityList = JSON.stringify(cities);
              localStorage.setItem( "searched-cities" , cityList);
          

          
      let KELVIN = 273.15;
      
      $.ajax ({
        url: queryURL,
        success: function (result) {
            console.log(result);
            
            const mainIcon = result.weather[0].icon;
            const mainIconLink = "https://openweathermap.org/img/wn/" + mainIcon + ".png"
            $('#mainIcon').attr('src', mainIconLink);
            $('.location').text(result.name);
            let C = Math.round(result.main.temp - KELVIN);
                    let Celsius = C.toString();
                   $(".temp").text(Celsius + " \u00B0C");
            $('.humidityNr').text(result.main.humidity + " %");
            $('.windValue').text(result.wind.speed + " MPH");

            $('.description').text(result.weather[0].description);
        

          getUvIndex(result.coord.lon,result.coord.lat);
          

          if(result.cod==200){
            sCity=JSON.parse(localStorage.getItem("searched-cities"));
            console.log(sCity);
            if (sCity==null){
                sCity=[];
                sCity.push(city.toUpperCase()
                );
                localStorage.setItem("searched-cities",JSON.stringify(sCity));
                addToList(city);
            }
            else {
                if(find(city)>0){
                    sCity.push(city.toUpperCase());
                    localStorage.setItem("searched-cities",JSON.stringify(sCity));
                    addToList(city);
                }
            }
        }
          
            
            
      
function getUvIndex(lat, lon) {
      var uvURL =
        "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat+ "&lon=" + lon + "&appid=73b47f542215050a64d2b287364ee1d1";
  

        $.ajax({
            url: uvURL,
            method: "GET",
        }).then(function(resultUV){
            const uvData = resultUV.value
            $('.uvIndexValue').text("UV index:" + uvData);


      if (resultUV.value < 3) {
          $('.uvIndexValue').addClass("p-1 rounded bg-success text-white");
      }else if (resultUV.value < 6) {
        $('.uvIndexValue').addClass("p-1 rounded bg-info text-white");
      }else if (resultUV.value < 8) {
        $('.uvIndexValue').addClass("p-1 rounded bg-warning text-white");
      } else {
        $('.uvIndexValue').addClass("p-1 rounded bg-danger text-white");
      }
      
    })
}
    
        }   
      })
            
            
            ///Get five day weather forecast
    };

            function getFiveDayForcast () {
             console.log('get forcast');
             let cityName = $("#cityname").val();
             let forcastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`
             let KELVIN = 273.15;

             $.ajax ({
                url: forcastUrl,
                success: function (resultForcast) {
                    console.log(resultForcast);
                  
                     
     
                    let C = Math.round(resultForcast.list[1].main.temp - KELVIN);
                    let Celsius = C.toString();
           
                    const day1Icon = resultForcast.list[1].weather[0].icon;
                    const day1Link = "https://openweathermap.org/img/wn/" + day1Icon + ".png"
                    $('.day1icon').attr('src', day1Link);
                    $('#tempDay1').text(Celsius + " \u00B0C");
                    $('#humidityDay1').text(resultForcast.list[1].main.humidity + " %");
                    $('#Date1').text(moment().add(1, 'day').format("DD/M/YYYY"))
                      
                    //day 2

                    
                    C.toString();
                    const day2Icon = resultForcast.list[2].weather[0].icon;
                    const day2Link = "https://openweathermap.org/img/wn/" + day2Icon + ".png"
                    $('.day2icon').attr('src', day2Link);
                    $('#tempDay2').text(Celsius + " \u00B0C");
                    $('#humidityDay2').text(resultForcast.list[2].main.humidity + " %");
                    $('#Date2').text(moment().add(2, 'day').format("DD/M/YYYY"))


                    //day 3

                    
                    C.toString();
                    const day3Icon = resultForcast.list[3].weather[0].icon;
                    const day3Link = "https://openweathermap.org/img/wn/" + day3Icon + ".png"
                    $('.day3icon').attr('src', day3Link);
                    $('#tempDay3').text(Celsius + " \u00B0C");
                    $('#humidityDay3').text(resultForcast.list[3].main.humidity + " %");
                    $('#Date3').text(moment().add(3, 'day').format("DD/M/YYYY"))

                    //day 4

                    
                    C.toString();
                    const day4Icon = resultForcast.list[4].weather[0].icon;
                    const day4Link = "https://openweathermap.org/img/wn/" + day4Icon + ".png"
                    $('.day4icon').attr('src', day4Link);
                    $('#tempDay4').text(Celsius + " \u00B0C");
                    $('#humidityDay4').text(resultForcast.list[4].main.humidity + " %");
                    $('#Date4').text(moment().add(4, 'day').format("DD/M/YYYY"))

                    //day 5

                    
                    C.toString();
                    const day5Icon = resultForcast.list[5].weather[0].icon;
                    const day5Link = "https://openweathermap.org/img/wn/" + day5Icon + ".png"
                    $('.day5icon').attr('src', day5Link);
                    $('#tempDay5').text(Celsius + " \u00B0C");
                    $('#humidityDay5').text(resultForcast.list[5].main.humidity + " %");
                    $('#Date5').text(moment().add(5, 'day').format("DD/M/YYYY"))
                    
                    
                    
                    

            }
        })
    }
      





    
// const searchHistory = document.getElementById('history');

// const newItem = document.createElement('button');
// newItem.classList.add('btn searchHistoryBtn');
// newItem.innerText = 'Manchester';

// searchHistory.appendChild(newItem);


//local storage

// function addItem() {
//     const text = (this.querySelector('[name=box]'));
//     const item = {
//         text,
//     };

// cities.push(cityName);
// let cityList = JSON.stringify(cities);
// localStorage.setItem( "searched-cities" , cityList);
// console.log(localStorage.setItem( "searched-cities" , cityList))

// var cities = JSON.parse(localStorage.getItem("searched-cities")) || [];
// var cities = cities.reverse();

// $("#citySearchHistory").empty();
// cities.forEach(function(city) {
//     $("#citySearchHistory").append(`<button type="button" class="btn searchHistoryBtn">${cityName}</button>`)
// })
// };
    

// const localStorageContent = localStorage.getItem("searched-cities");
// console.log(localStorageContent);











