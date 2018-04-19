$(document).ready(function() {
  thermostat = new Thermostat();

  $('#currentTemperature').text(thermostat.temperature);

  $('#increase').on('click', function() {
    thermostat.temperatureUp();
    $('#currentTemperature').html(`<p> <span style = "color: black;">Temperature: </span> ${thermostat.temperature} </p>`);
    thermostat.powerSave()
    $('#safeModeStatus').html(`<p> <span style = "color: black;">Power save mode: </span> ${thermostat.saveMode} </p>`);
    thermostat.Usage()
    $('#powerUsageStatus').html(`<p> <span style = "color: black;">Power Usage: </span> ${thermostat.powerUsage} </p>`);
  });

  $('#decrease').on('click', function() {
    thermostat.temperatureDown();
    $('#currentTemperature').html(`<p> <span style = "color: black;">Temperature: </span> ${thermostat.temperature} </p>`);
    thermostat.powerSave()
    $('#safeModeStatus').html(`<p> <span style = "color: black;">Power save mode: </span> ${thermostat.saveMode} </p>`);
    thermostat.Usage()
    $('#powerUsageStatus').html(`<p> <span style = "color: black;">Power Usage: </span> ${thermostat.powerUsage} </p>`);
  });

  $('#reset').on('click', function() {
    thermostat.temperatureReSet();
    $('#currentTemperature').html(`<p> <span style = "color: black;">Temperature: </span> ${thermostat.temperature} </p>`);
    $('#safeModeStatus').html(`<p> <span style = "color: black;">Power save mode: </span> ${thermostat.saveMode} </p>`);
    $('#powerUsageStatus').html(`<p> <span style = "color: black;">Power Usage: </span> ${thermostat.powerUsage} </p>`);
  });
});
