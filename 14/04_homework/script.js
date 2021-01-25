let coords = {
  latitude: 50.450885516001335,
  longitude: 30.522488105721806,
};
let myApi = '2d3983de5c4ff399c1e730a83f2c3ce6';
let weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${myApi}&lang=ua`;

function showWeatherByCoordinates() {
  navigator.geolocation.getCurrentPosition(getCoords, error);
  function getCoords(params) {
    coords = params.coords;
    weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${myApi}&lang=ua`;
    getWeatherByLocation(weatherURL);
  }
  function error() {
    console.log('Unable to retrieve your location!');
  }
}

function getWeatherByLocation(weatherURL) {
  fetch(weatherURL)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let city = document.querySelectorAll('.city-block .city');
      document.querySelector('.city-name').textContent = data.name;
      city[1].textContent =
        Number(data.main.temp - 273.15).toPrecision(2) + '\u00B0';
      city[2].textContent = data.weather[0].description;
      city[3].innerHTML =
        '<img src="http://openweathermap.org/img/wn/' +
        data.weather[0].icon +
        '@2x.png"></img>';
      document.querySelector('.zero .windSpeed').textContent =
        data.wind.speed + 'м в сек';
    })
    .catch(function () {
      alert('Нет соединения с базой погоды по координатам!');
    });
}
showWeatherByCoordinates();
let arrayCities = {
  kyiv: {
    id: 703448,
    name: 'Kyiv',
    state: '',
    country: 'UA',
    coord: {
      lon: 30.522488105721806,
      lat: 50.450885516001335,
    },
  },
  lviv: {
    id: 702550,
    name: 'Lviv',
    state: '',
    country: 'UA',
    coord: {
      lon: 24.031822689248383,
      lat: 49.84239070223741,
    },
  },
  odessa: {
    id: 698740,
    name: 'Odessa',
    state: '',
    country: 'UA',
    coord: {
      lon: 30.740828101683537,
      lat: 46.46885161897949,
    },
  },
  dnipro: {
    id: 709930,
    name: 'Dnipro',
    state: '',
    country: 'UA',
    coord: {
      lon: 35.04993772177609,
      lat: 48.46654762961848,
    },
  },
};
let citiesId = '';
for (const key in arrayCities) {
  citiesId += arrayCities[key].id + ',';
}
otherCitiesUrl = `http://api.openweathermap.org/data/2.5/group?id=${citiesId}&appid=${myApi}&lang=ua`;
function getWeatherByArray() {
  fetch(otherCitiesUrl)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let outBlocks = document.querySelectorAll('.city-block');
      // console.dir(outBlocks);
      for (let i = 1; i < outBlocks.length; i++) {
        const element = outBlocks[i];
        element.children[0].textContent = data.list[i - 1].name;
        element.children[2].textContent =
          Number(data.list[i - 1].main.temp - 273.15).toPrecision(2) + '\u00B0';
        element.children[4].textContent =
          data.list[i - 1].weather[0].description;
        element.children[5].innerHTML =
          '<img src="http://openweathermap.org/img/wn/' +
          data.list[i - 1].weather[0].icon +
          '@2x.png"></img>';
        element.children[7].children[1].textContent =
          data.list[i - 1].wind.speed + 'м в сек';
      }
    })
    .catch(function () {
      console.log('Нет соединения с базой погоды по массиву городов!');
    });
}
getWeatherByArray();
function listCities() {}
