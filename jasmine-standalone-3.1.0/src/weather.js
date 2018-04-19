'use strict';

function Wether() {
  this.city = '';
  this.temperature = 0;
};

Weather.prototype.knowTemperature = function(city) {
  this.city = city
}

#http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={c8df41c4038bdc5922376af535474baf}
