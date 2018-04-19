'use strict';

function Thermostat() {
  this.temperature = 20;
  this.saveMode = 'On';
  this.powerUsage = 'medium-usage';
};

Thermostat.prototype.temperatureSet = function(temperature) {
  if(temperature <= 10) {
    throw new Error ('Temperature is too low. Set temperature > 10 points');
  } else {
    this.temperature = temperature;
    return this.temperature
  };
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
  if(this.temperature == 11) {
    throw new Error ('Temperature is too low. Set temperature > 10 points');
  } else {
    this.temperature -= 1;
    return this.temperature
  };
};

Thermostat.prototype.powerSave = (function() {
  if(this.temperature <= 25) {
    this.saveMode = 'On';
  } else {
    this.saveMode = 'Off';
  };
  return this.saveMode
});

Thermostat.prototype.Usage = (function() {
  if(this.temperature < 18) {
    this.powerUsage = 'low-usage';
  } else if(this.temperature <= 25 && this.temperature >= 18) {
    this.powerUsage = 'medium-usage';
  } else {
    this.powerUsage = 'high-usage';
  };
  return this.powerUsage
});

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};
