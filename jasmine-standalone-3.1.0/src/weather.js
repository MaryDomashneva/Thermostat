'use strict';

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&APPID=c8df41c4038bdc5922376af535474baf';
  var units = '&units=metric';

  $.get(url + token + units, function(data) {
    $('#currentWeather').text(data.main.temp);
    $('#temperatureIcon').attr('src',
    `http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
  });
};
