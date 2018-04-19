$(document).ready(function() {
  thermostat = new Thermostat();

  $('#currentTemperature').text(thermostat.temperature);

  $('#increase').on('click', function() {
    thermostat.temperatureUp();
    $('#currentTemperature').text(`Temperature: ${thermostat.temperature}`);
    thermostat.powerSave()
    $('#safeModeStatus').text(`Power save mode: ${thermostat.saveMode}`);
    thermostat.Usage()
    $('#powerUsageStatus').text(`Power Usage: ${thermostat.powerUsage}`);
  });

  $('#decrease').on('click', function() {
    thermostat.temperatureDown();
    $('#currentTemperature').text(`Temperature: ${thermostat.temperature}`);
    thermostat.powerSave()
    $('#safeModeStatus').text(`Power save Mode: ${thermostat.saveMode}`);
    thermostat.Usage()
    $('#powerUsageStatus').text(`Power Usage: ${thermostat.powerUsage}`);
  });

  $('#reset').on('click', function() {
    thermostat.temperatureReSet();
    $('#currentTemperature').text(`Temperature: ${thermostat.temperature}`);
    $('#safeModeStatus').text(`Power save Mode: ${thermostat.saveMode}`);
    $('#powerUsageStatus').text(`Power Usage: ${thermostat.powerUsage}`);
  });
});
