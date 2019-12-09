// js kood

function weatherBalloon( cityID ) {
    var key = '{yourkey}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=588335&appid=da63afd548b778fa72b1109e465edd7d')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBallon( 6167865 );
  }