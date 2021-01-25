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
    city[0].textContent = data.name;
    city[1].textContent =
      Number(data.main.temp - 273.15).toPrecision(3) + ' \u00B0';
  })
  .catch(function () {
    //catch any error
  });
