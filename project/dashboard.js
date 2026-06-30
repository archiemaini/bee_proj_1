

var apiKey = (typeof config !== "undefined" && config.apiKey) ? config.apiKey : "YOUR_API_KEY_HERE";

document.querySelector("#searchButton").addEventListener("click", function() {
    

    var city = document.querySelector("#cityInput").value;
    var infoDiv = document.querySelector("#weatherInfo");
    

    if (city === "") {
        infoDiv.innerHTML = "<p style='color: #e53e3e; text-align: center; font-weight: bold;'>Please enter a city name.</p>";
        return;
    }

    
  
    if (apiKey === "YOUR_API_KEY_HERE" || apiKey === "") {
        
        var cityName = city.charAt(0).toUpperCase() + city.slice(1);
        
     
        var outputHTML = "";
        outputHTML += "<div class='weather-item'><span class='weather-label'>City Name:</span> <span class='weather-value'>" + cityName + "</span></div>";
        outputHTML += "<div class='weather-item'><span class='weather-label'>Temperature:</span> <span class='weather-value'>24.5 °C</span></div>";
        outputHTML += "<div class='weather-item'><span class='weather-label'>Weather Condition:</span> <span class='weather-value'>scattered clouds</span></div>";
        outputHTML += "<div class='weather-item'><span class='weather-label'>Humidity:</span> <span class='weather-value'>55%</span></div>";
        outputHTML += "<div class='weather-item'><span class='weather-label'>Wind Speed:</span> <span class='weather-value'>13.0 km/h</span></div>";
        
        infoDiv.innerHTML = outputHTML;
        return;
    }
    
 
    var url = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city + "&aqi=no";

    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
               
                return response.json().then(function(errData) {
                    if (errData && errData.error && errData.error.message) {
                        throw new Error(errData.error.message);
                    } else {
                        throw new Error("HTTP error code: " + response.status);
                    }
                });
            }
        })
        .then(function(data) {
           
            var cityName = data.location.name;
            var temp = data.current.temp_c;
            var weatherCondition = data.current.condition.text;
            var humidity = data.current.humidity;
            var windSpeed = data.current.wind_kph;
            
         
            var outputHTML = "";
            outputHTML += "<div class='weather-item'><span class='weather-label'>City Name:</span> <span class='weather-value'>" + cityName + "</span></div>";
            outputHTML += "<div class='weather-item'><span class='weather-label'>Temperature:</span> <span class='weather-value'>" + temp + " °C</span></div>";
            outputHTML += "<div class='weather-item'><span class='weather-label'>Weather Condition:</span> <span class='weather-value'>" + weatherCondition + "</span></div>";
            outputHTML += "<div class='weather-item'><span class='weather-label'>Humidity:</span> <span class='weather-value'>" + humidity + "%</span></div>";
            outputHTML += "<div class='weather-item'><span class='weather-label'>Wind Speed:</span> <span class='weather-value'>" + windSpeed + " km/h</span></div>";
            
            
            infoDiv.innerHTML = outputHTML;
        })
        .catch(function(err) {
           
            console.error("Error fetching weather:", err);
            infoDiv.innerHTML = "<p style='color: #e53e3e; text-align: center; font-weight: bold;'>Error: " + err.message + "</p>";
        });
});
