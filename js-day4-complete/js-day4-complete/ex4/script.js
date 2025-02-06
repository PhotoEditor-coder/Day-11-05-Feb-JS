function getWeather(city) {
  const API_KEY = 'your_api_key_here';
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(URL)
      .then(response => response.json())
      .then(data => {
          const temperature = data.main.temp;
          const condition = data.weather[0].main;

          let message = '';
          let imageUrl = '';

          if (temperature > 32) {
              message = 'The weather is hot.';
              imageUrl = 'https://example.com/hot_weather_image.jpg';
          } else if (temperature > 20) {
              message = 'The weather is warm.';
              imageUrl = 'https://example.com/warm_weather_image.jpg';
          } else if (temperature > 10) {
              message = 'The weather is cool.';
              imageUrl = 'https://example.com/cool_weather_image.jpg';
          } else {
              message = 'The weather is cold.';
              imageUrl = 'https://example.com/cold_weather_image.jpg';
          }

          document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
          document.getElementById('message').innerText = message;
          
          const weatherImage = document.getElementById('weatherImage');
          weatherImage.src = imageUrl;
          weatherImage.style.display = 'block';
      })
      .catch(error => console.error('Error fetching weather data:', error));
}
