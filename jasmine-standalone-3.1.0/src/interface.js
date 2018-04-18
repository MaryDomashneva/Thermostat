$(document).ready(function() {
  thermostat = new Thermostat();

  $('.current_temperature').text(thermostat.temperature);

  $('.increase').on('click', function() {
    thermostat.temperatureUp();
    $('.current_temperature').text(thermostat.temperature);
  });

  $('.decrease').on('click', function() {
    thermostat.temperatureDown();
    $('.current_temperature').text(thermostat.temperature);
  });

  $('.reset').on('click', function() {
    thermostat.temperatureReSet();
    $('.current_temperature').text(thermostat.temperature);
  });
});
