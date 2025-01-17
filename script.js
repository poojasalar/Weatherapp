document.getElementById("getWeather").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "09c50eaf905340dd9f1154235242211"; // Replace with your API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    if (city) {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("City not found");
  
        const data = await response.json();
  
        // Populate weather data
        document.getElementById("cityName").textContent = `Weather in ${data.location.name}`;
        document.getElementById("temperature").textContent = `${data.current.temp_c}°C`;
        document.getElementById("description").textContent = data.current.condition.text;
        document.getElementById("humidity").textContent = `${data.current.humidity}%`;
        document.getElementById("wind").textContent = `${data.current.wind_kph} km/h`;
  
        // Set background
        setDynamicBackground(data.current.condition.text.toLowerCase());
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Please enter a city name!");
    }
  });
  
  function setDynamicBackground(condition) {
    const body = document.body;
  
    if (condition.includes("snow")) {
      body.style.background = "url('https://www.snellersg.com/wp-content/uploads/2015/08/snowflake-macro-1920-1080-7836.jpg') no-repeat center center fixed";
      body.style.backgroundSize = "cover";
    } else if (condition.includes("sunny") || condition.includes("clear")) {
      body.style.background = "url('https://cdn2.hubspot.net/hubfs/2936356/maxresdefault.jpg') no-repeat center center fixed";
      body.style.backgroundSize = "cover";
    } else if (condition.includes("rain")) {
      body.style.background = "url('https://www.oceanclock.com/img/modules/oh_news/news/56_picture.jpg') no-repeat center center fixed";
      body.style.backgroundSize = "cover";
    } else if (condition.includes("cloud")) {
      body.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/0/09/Blanket_of_Clouds_%2814415796771%29_%28cropped%29.jpg') no-repeat center center fixed";
      body.style.backgroundSize = "cover";
    } else if (condition.includes("overcast")) {
        body.style.background = "url('https://c.pxhere.com/photos/e5/e4/clouds_thunderstorm_storm_weather_sky_grey_rain_netherlands-778492.jpg!d') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    } else {
      body.style.background = "linear-gradient(to bottom, #6dd5fa, #2980b9)";
    }
  }
  