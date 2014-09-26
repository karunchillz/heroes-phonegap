

    // Cordova is ready
    //
    function geolocation() {
    	if(navigator.geolocation) {
    // Geolocation supported. Do something here.
        navigator.geolocation.watchPosition(onSuccess, onError);
        alert("Called");
    	}
    	else
    	{
    		alert("Geolocation not supported");
    	}
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
    	alert("Hello");
    	$.post("http://10.134.124.142:3000/",{"latitude":position.coords.latitude,"longitude":position.coords.longtitude},function(){alert("suceess:"+position.coords.longtitude);});
    var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
