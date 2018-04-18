'use strict';

describe('Thermostat', function() {
  var thermostate;

  beforeEach(function(){
    thermostat = new Thermosat();
  })

  it('starts with 20 degrees', function() {
    thermostat.set(temperature);
    expect(thermostat).toEqual(20)
  })
})
