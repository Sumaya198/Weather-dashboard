

$("#currentDay").text(moment().format("DD/M/YYYY"));

$("#searchBtn").click(function(event) {
    console.log('button clicked')
    getWeather();
    getFiveDayForcast ();

    
   
    
    //stops the page from refreshing
//event.preventDefault();

});
      ///Get weather for today
      function getWeather (){
          console.log('getWeather');
          let cityName = $("#cityname").val();
          let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`;
          
          
          
      let KELVIN = 273.15;
      
      $.ajax ({
        url: queryURL,
        success: function (result) {
            console.log(result);
            
            
            $('.location').text(result.name);
            let C = Math.round(result.main.temp - KELVIN);
                    let Celsius = C.toString();
                   $(".temp").text(Celsius + " \u00B0C");
            $('.humidityNr').text(result.main.humidity + " %");
            $('.windValue').text(result.wind.speed + " MPH");
            $('.description').text(result.weather[0].description);
          var iconcode = result.weather[0].icon;
          var iconurl = 

            $('.icon').html(result.weather[0].icon)
            getUvIndex();
            let lat = result.coord.lat;
         let lon = result.coord.lon;
            
        }    
    });

  
}

       function getUvIndex() {
           console.log('getuv');
      //
            let uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=73b47f542215050a64d2b287364ee1d1&lat=33.52&lon=-86.8`;

           
                
            $.ajax({
                url: uvURL,
                success: function (resultUv) {
                    console.log(resultUv);
            $('.uvIndexValue').text(resultUv.value);

          if (resultUv.value < 3) {
              $('.uvIndexValue').addClass("p-1 rounded bg-success text-white");
          }else if (resultUv.value < 6) {
            $('.uvIndexValue').addClass("p-1 rounded bg-info text-white");
          }else if (resultUv.value < 8) {
            $('.uvIndexValue').addClass("p-1 rounded bg-warning text-white");
          } else {
            $('.uvIndexValue').addClass("p-1 rounded bg-danger text-white");
          }
          }
                })
                
            }
            
            ///5 days weather

            function getFiveDayForcast () {
             console.log('get forcast');
             let cityName = $("#cityname").val();
             let forcastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=73b47f542215050a64d2b287364ee1d1`
             let KELVIN = 273.15;

             $.ajax ({
                url: forcastUrl,
                success: function (resultForcast) {
                    console.log(resultForcast);
                  
   //day 1
     
                    let C = Math.round(resultForcast.list[1].main.temp - KELVIN);
                    let Celsius = C.toString();

                    $('#tempDay1').text(Celsius + " \u00B0C");
                    $('#humidityDay1').text(resultForcast.list[1].main.humidity + " %");

                    //day 2

                    
                    C.toString();
                    $('#tempDay2').text(Celsius + " \u00B0C");
                    $('#humidityDay2').text(resultForcast.list[2].main.humidity + " %");


                    //day 3

                    
                    C.toString();
                    $('#tempDay3').text(Celsius + " \u00B0C");
                    $('#humidityDay3').text(resultForcast.list[3].main.humidity + " %");

                    //day 4

                    
                    C.toString();
                    $('#tempDay4').text(Celsius + " \u00B0C");
                    $('#humidityDay4').text(resultForcast.list[4].main.humidity + " %");

                    //day 5

                    
                    C.toString();
                    $('#tempDay5').text(Celsius + " \u00B0C");
                    $('#humidityDay5').text(resultForcast.list[5].main.humidity + " %");
                    
                    
                    
                    

            }
        })
    }
       
 // save to local storage 
    // const storageInput = document.querySelector('#cityname');
    // const text = document.querySelector('#text');
    // const button = document.querySelector('.btn');

    // storageInput.addEventListener('input', searchedCity => {
    //     console.log(searchedCity.target.value);
    //     text.textContent = searchedCity.target.value
    // })

    // const saveToLocalStorage = () => {
    //     JSON.parse(localStorage.setItem('cityname', text.textContent))
    // }

    // button.addEventListener('click', saveToLocalStorage)

    // ///display items from local storage to browser


    // const searchCity = []
    // const storageInput = document.querySelector('#cityname');
    // const text = document.querySelector('#text');
    // const button = document.querySelector('.btn');

    //  storageInput.addEventListener('input', searchedCity => {
    //         console.log(searchedCity.target.value);
    //         text.textContent = searchedCity.target.value
    //  })
    //         const saveToLocalStorage = () => {
    //         JSON.parse(localStorage.setItem('cityname', text.textContent))
    //         }

 
    
               


    //     listOfCities = 
    //    console.log(JSON.parse(localStorage.getItem('data')));
   

 
    // localStorage.setItem('cityName', JSON.stringify([]));


   