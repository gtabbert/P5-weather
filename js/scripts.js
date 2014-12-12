
$(function() {
  $.simpleWeather({
    location: "Spokane, WA",
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.city+', '+weather.region+'</h2>';
      html += '<p class="status">Right now the weather is '+weather.currently+' with a High of '+weather.high+'&#176;'+weather.units.temp+' and a Low of '+weather.low+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="temp">The Current Temperature is '+weather.temp+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="wind">Current Wind Speed is '+weather.wind.speed+''+weather.units.speed+'</p>';
      html += '<p class="humidity">Humidity is at '+weather.humidity+'%.</p>';
      html += '<p class="pressure">Barometric Pressure is at '+weather.pressure+''+weather.units.pressure+'</p>';
      html += '<p class="visibility">Current outside visibility is '+weather.visibility+'%.</p>';
      html += '<p class="sunlight">The Sun rises at '+weather.sunrise+' and sets at '+weather.sunset+'</p>';
      html += '<div class="ui divider"></div>'
      html += '<p class="tomorrow">Tomorrow the weather will be '+weather.forecast[1].text+' with a High of '+weather.forecast[1].high+'&#176;'+weather.units.temp+' and a Low of '+weather.forecast[1].low+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="twodays">The following day will be '+weather.forecast[2].text+' with a High of '+weather.forecast[2].high+'&#176;'+weather.units.temp+' and a Low of '+weather.forecast[2].low+'&#176;'+weather.units.temp+'.</p>';
      for(var i=0;i<weather.forecast.length;i++)
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error.message+'</p>');
    }
  });
});

$(function() {
  $.simpleWeather({
    location: "Coeur d'Alene, ID",
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.city+', '+weather.region+'</h2>';
      html += '<p class="status">Right now the weather is '+weather.currently+' with a High of '+weather.high+'&#176;'+weather.units.temp+' and a Low of '+weather.low+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="temp">The Current Temperature is '+weather.temp+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="wind">Current Wind Speed is '+weather.wind.speed+''+weather.units.speed+'</p>';
      html += '<p class="humidity">Humidity is at '+weather.humidity+'%.</p>';
      html += '<p class="pressure">Barometric Pressure is at '+weather.pressure+''+weather.units.pressure+'</p>';
      html += '<p class="visibility">Current outside visibility is '+weather.visibility+'%.</p>';
      html += '<p class="sunlight">The Sun rises at '+weather.sunrise+' and sets at '+weather.sunset+'</p>';
      html += '<div class="ui divider"></div>'
      html += '<p class="tomorrow">Tomorrow the weather will be '+weather.forecast[1].text+' with a High of '+weather.forecast[1].high+'&#176;'+weather.units.temp+' and a Low of '+weather.forecast[1].low+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="twodays">The following day will be '+weather.forecast[2].text+' with a High of '+weather.forecast[2].high+'&#176;'+weather.units.temp+' and a Low of '+weather.forecast[2].low+'&#176;'+weather.units.temp+'.</p>';
      for(var i=0;i<weather.forecast.length;i++)
      $("#weather2").html(html);
    },
    error: function(error) {
      $("#weather2").html('<p>'+error.message+'</p>');
    }
  });
});

$(function() {
  $.simpleWeather({
    location: "Cheney, WA",
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.city+', '+weather.region+'</h2>';
      html += '<p class="status">Right now the weather is '+weather.currently+' with a High of '+weather.high+'&#176;'+weather.units.temp+' and a Low of '+weather.low+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="temp">The Current Temperature is '+weather.temp+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="wind">Current Wind Speed is '+weather.wind.speed+''+weather.units.speed+'</p>';
      html += '<p class="humidity">Humidity is at '+weather.humidity+'%.</p>';
      html += '<p class="pressure">Barometric Pressure is at '+weather.pressure+''+weather.units.pressure+'</p>';
      html += '<p class="visibility">Current outside visibility is '+weather.visibility+'%.</p>';
      html += '<p class="sunlight">The Sun rises at '+weather.sunrise+' and sets at '+weather.sunset+'</p>';
      html += '<div class="ui divider"></div>'
      html += '<p class="tomorrow">Tomorrow the weather will be '+weather.forecast[1].text+' with a High of '+weather.forecast[1].high+'&#176;'+weather.units.temp+' and a Low of '+weather.forecast[1].low+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="twodays">The following day will be '+weather.forecast[2].text+' with a High of '+weather.forecast[2].high+'&#176;'+weather.units.temp+' and a Low of '+weather.forecast[2].low+'&#176;'+weather.units.temp+'.</p>';
      for(var i=0;i<weather.forecast.length;i++)
      $("#weather3").html(html);
    },
    error: function(error) {
      $("#weather3").html('<p>'+error.message+'</p>');
    }
  });
});

$(function() {
  $.simpleWeather({
    location: "Sandpoint, ID",
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.city+', '+weather.region+'</h2>';
      html += '<p class="status">Right now the weather is '+weather.currently+' with a High of '+weather.high+'&#176;'+weather.units.temp+' and a Low of '+weather.low+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="temp">The Current Temperature is '+weather.temp+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="wind">Current Wind Speed is '+weather.wind.speed+''+weather.units.speed+'</p>';
      html += '<p class="humidity">Humidity is at '+weather.humidity+'%.</p>';
      html += '<p class="pressure">Barometric Pressure is at '+weather.pressure+''+weather.units.pressure+'</p>';
      html += '<p class="visibility">Current outside visibility is '+weather.visibility+'%.</p>';
      html += '<p class="sunlight">The Sun rises at '+weather.sunrise+' and sets at '+weather.sunset+'</p>';
      html += '<div class="ui divider"></div>'
      html += '<p class="tomorrow">Tomorrow the weather will be '+weather.forecast[1].text+' with a High of '+weather.forecast[1].high+'&#176;'+weather.units.temp+' and a Low of '+weather.forecast[1].low+'&#176;'+weather.units.temp+'.</p>';
      html += '<p class="twodays">The following day will be '+weather.forecast[2].text+' with a High of '+weather.forecast[2].high+'&#176;'+weather.units.temp+' and a Low of '+weather.forecast[2].low+'&#176;'+weather.units.temp+'.</p>';
      for(var i=0;i<weather.forecast.length;i++)
      $("#weather4").html(html);
    },
    error: function(error) {
      $("#weather4").html('<p>'+error.message+'</p>');
    }
  });
});


