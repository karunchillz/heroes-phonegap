var serverURL="http://10.134.124.142:3000/"
function distance(obj) {
    var R = 6371; // km
    var dLat = (obj.lat2 - obj.lat1) * Math.PI / 180;
    var dLon = (obj.lon2 - obj.lon1) * Math.PI / 180;
    var lat1 = obj.lat1 * Math.PI / 180;
    var lat2 = obj.lat2 * Math.PI / 180;
 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}
function showNotificationCheck(vicLat,vicLng,heroLat,heroLng){
    var d=distance({lat1: vicLat,lon1: vicLng,lat2: heroLat,lon2: heroLng});
    //return true;
    if(d<=1){
        $.mobile.navigate("#heroesNotificationPage");
    }
}