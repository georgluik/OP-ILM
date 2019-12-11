/* function weatherBalloon( cityID ) {
    var key = 'da63afd548b778fa72b1109e465edd7d';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)    
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBalloon( 588335 );
  }

  function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}
*/ 
class Weather{
  // constructor
  constructor(c){
    this.city = c;
    this.key = '77f97b598769bf8861004c74e30ebbba';
  }

  // data from API
  async weatherData(){
    const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.city + '&appid=' + this.key);
    const data = await resp.json();
    console.log(data);
    return data;
  }

  // change city name
  changeCityName(name){
    this.city = name;
  }
}