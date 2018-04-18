'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts with 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns current temperature', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('sets a new temperature', function() {
    thermostat.temperatureSet(18);
    expect(thermostat.currentTemperature()).toEqual(18);
  })

  it('resets temperature back to default 20 points', function() {
    thermostat.temperatureReSet();
    expect(thermostat.currentTemperature()).toEqual(20);
  })

  it('increases temperature by 1 point', function() {
    expect(thermostat.temperatureUp()).toEqual(21);
  });

  it('decreases temperature by 1 point', function() {
    expect(thermostat.temperatureDown()).toEqual(19);
  });

  it('returns true when power save is on', function() {
    expect(thermostat.powerSave()).toEqual(true);
  });

  it('returns false when power save is off', function() {
    thermostat.temperatureSet(26);
    expect(thermostat.powerSave()).toEqual(false);
  });

  it('returns low-usage if current temperature < 18 points', function() {
    thermostat.temperatureSet(17);
    expect(thermostat.Usage()).toEqual('low-usage');
  });

  it('returns low-usage if current 18 > temperature < 25 points', function() {
    thermostat.temperatureSet(18);
    expect(thermostat.Usage()).toEqual('medium-usage');
  });

  it('returns high-usage if current temperature > 25 points', function() {
    thermostat.temperatureSet(26);
    expect(thermostat.Usage()).toEqual('high-usage');
  });
});
