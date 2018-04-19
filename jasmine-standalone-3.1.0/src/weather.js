'use strict';

function Wether() {
  this.city = '';
  this.temperature = 0;
};

Weather.prototype.knowTemperature = function(city) {
  this.city = city
}
