const apiKey = '0a0779452cff417af29c1885b8ec1df6';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?\
units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
//q=morocco&appid=&
async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  }
  else{
    var data = await response.json();
  console.log(data);
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451;';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '&#37;'
  document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h';

  if(data.weather[0].main == 'Clouds'){
    weatherIcon.src = '/weather/clouds.png';
  }
  else if(data.weather[0].main == 'Clear'){
    weatherIcon.src = '/weather/clear.png'
  }
  else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.src = '/weather/drizzle.png'
  }
  else if(data.weather[0].main == 'Mist'){
    weatherIcon.src = '/weather/mist.png'
  }
  
  else if(data.weather[0].main == 'Rain'){
    weatherIcon.src = '/weather/rain.png'
  }
  else if(data.weather[0].main == 'Snow'){
    weatherIcon.src = '/weather/snow.png'
  }
  document.querySelector('.weather').style.display = 'block';
  document.querySelector('.error').style.display = 'none';
  }
  
}
searchBtn.addEventListener('click', function(){
  checkWeather(searchBox.value);
})
