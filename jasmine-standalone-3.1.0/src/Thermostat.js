'use strict';

function Thermostat() {
  this.temperature = 20;
  this.poverSave = true;
  this.usage = 'medium-usage';
};

Thermostat.prototype.temperatureSet = function(temperature) {
  this.temperature = temperature;
  return this.temperature
};

Thermostat.prototype.temperatureReSet = function() {
  this.temperature = 20;
  return this.temperature
};

Thermostat.prototype.temperatureUp = function() {
  this.temperature += 1;
  return this.temperature
};

Thermostat.prototype.temperatureDown = function() {
  this.temperature -= 1;
  return this.temperature
};

Thermostat.prototype.powerSave = (function() {
  if(this.temperature <= 25) {
    return this.poverSave = true;
  } else {
    return this.poverSave = false;
  }
});

Thermostat.prototype.Usage = (function() {
  if(this.temperature < 18) {
    return this.usage = 'low-usage';
  } else if(this.temperature <= 25 && this.temperature >= 18) {
    return this.usage = 'medium-usage';
  } else {
    return this.usage = 'high-usage';
  };
});

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};
