// task 1 --------------------
let weatherData = {};
fetch(
  'http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=2d3983de5c4ff399c1e730a83f2c3ce6'
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    let city = document.querySelectorAll('.city-block .city');
    console.log(city);
    city[0].textContent = data.name;
    city[1].textContent =
      Number(data.main.temp - 273.15).toPrecision(2) + '\u00B0';
    city[2].textContent = data.weather[0].description;
    city[3].innerHTML =
      '<img src="http://openweathermap.org/img/wn/' +
      data.weather[0].icon +
      '@2x.png"></img>';
    //data.weather[0].icon
    //http://openweathermap.org/img/wn/10d@2x.png
  })
  .catch(function () {
    //catch any error
  });
