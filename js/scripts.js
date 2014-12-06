$(function() {
  $.simpleWeather({
    location: "Coeur d'Alene, ID",
    unit: 'f',
    success: function(weather) {
      html = '<p>Here are the '+weather.title+'</p>';
      html += '<p>The Current Temperature is '+weather.temp+' degrees Fahrenheit.</p>';
      html += '<p>Right now the weather is '+weather.currently+' with a High of '+weather.high+' and a Low of '+weather.low+'.</p>';
      html += '<p>Humidity is at '+weather.humidity+'%.</p>';
      html += '<p>Barometric Pressure is at '+weather.pressure+'</p>';
      html += '<p>weather.rising: '+weather.rising+'</p>';
      html += '<p>weather.visbility: '+weather.visibility+'</p>';
      html += '<p>weather.sunrise: '+weather.sunrise+'</p>';
      html += '<p>weather.sunset: '+weather.sunset+'</p>';
      html += '<p>weather.city: '+weather.city+'</p>';
      html += '<p>weather.country: '+weather.country+'</p>';
      html += '<p>weather.region: '+weather.region+'</p>';
      html += '<p>weather.updated: '+weather.updated+'</p>';
      html += '<p>weather.link: '+weather.link+'</p>';
      html += '<p>weather.heatindex: '+weather.heatindex+'</p>';
      html += '<p>weather.thumbnail: '+weather.thumbnail+'</p>';
      html += '<p>weather.image: '+weather.image+'</p>';

      html += '<p>weather.units.temp: '+weather.units.temp+'</p>';
      html += '<p>weather.units.distance: '+weather.units.distance+'</p>';
      html += '<p>weather.units.pressure: '+weather.units.pressure+'</p>';
      html += '<p>weather.units.speed: '+weather.units.speed+'</p>';

      html += '<p>weather.wind.chill: '+weather.wind.chill+'</p>';
      html += '<p>weather.wind.direction: '+weather.wind.direction+'</p>';
      html += '<p>weather.wind.speed: '+weather.wind.speed+'</p>';

      html += '<p>weather.alt.temp: '+weather.alt.temp+'</p>';
      html += '<p>weather.alt.high: '+weather.alt.high+'</p>';
      html += '<p>weather.alt.low: '+weather.alt.low+'</p>';
      html += '<p>weather.alt.unit: '+weather.alt.unit+'</p>';

      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>weather.forecast['+i+'].date: '+weather.forecast[i].date+'</p>';
        html += '<p>weather.forecast['+i+'].day: '+weather.forecast[i].day+'</p>';
        html += '<p>weather.forecast['+i+'].code: '+weather.forecast[i].code+'</p>';
        html += '<p>weather.forecast['+i+'].high: '+weather.forecast[i].high+'</p>';
        html += '<p>weather.forecast['+i+'].low: '+weather.forecast[i].low+'</p>';
        html += '<p>weather.forecast['+i+'].alt.high: '+weather.forecast[i].alt.high+'</p>';
        html += '<p>weather.forecast['+i+'].alt.low: '+weather.forecast[i].alt.low+'</p>';
        html += '<p>weather.forecast['+i+'].thumbnail: '+weather.forecast[i].thumbnail+'</p>';
        html += '<p>weather.forecast['+i+'].image: '+weather.forecast[i].image+'</p>';
        html += '<p>weather.forecast['+i+'].text: '+weather.forecast[i].text+'</p>';
      }

      html += '<p>weather.description: '+weather.description+'</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error.message+'</p>');
    }
  });
});

