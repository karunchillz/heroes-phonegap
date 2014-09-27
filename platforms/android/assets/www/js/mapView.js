var lat,lng,map,trackID,victLat,victLan,vicLatLng;
if(navigator.geolocation) {
        navigator.geolocation.getgetCurrentPosition(onSuccess, onError);
}
function onSuccess(position) {
        lat=position.coords.latitude;
        lng=position.coords.longitude;
}
function onError(error) {
        console.log('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
}
function initialize()
{
    var mapProp = {
          center:x,
          zoom:15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
function pushNotificationCallBack(msg){
    msg = $.parseJSON(msg);
    trackID=msg._id;
    google.maps.event.addDomListener(window, 'load', initialize);
    victLat=msg.victim.latitude;
    victLan=msg.victim.longitude;
    victName=msg.victim.username;
    showNotificationCheck(victLat,victLan,lat,lng);
}
function acceptNotification(){
    {
        vicLatLng=new google.maps.LatLng(vicLat,vicLng);
        var heroPathLatLng=new google.maps.LatLng(heroLat,heroLng);
        var routePath=[heroPathLatLng,vicLatLng];

        var addPath=new google.maps.Polygon({
            path:routePath,
            strokeColor:"#0000FF",
            strokeOpacity:0.8,
            strokeWeight:2,
            fillColor:"#FFAAFF",
            fillOpacity:0.4
        });
        addPath.setMap(map);
        
        startTracking();
    }
function startTracking(){
    $.get(serverURL+"/updateposition?latitude="+position.coords.latitude+"&longitude="+position.coords.longtitude+"&user="+localStorage.getItem("username")+"&trackId="trackID});
    $.get(serverURL+"/getallpositions?trackId="+trackID,function(data){
        trackOtherHeroes(data);
    };);
    setTimeout(startTracking, 60000 );
}
function trackOtherHeroes(data){
    data=$.parseJSON(data);
    helps=data.helpers;
    helpLen=data.helpers.length;
    for(var i=0;i<helpLen;i++){
        hep=helpers[i];
        heplersName=hep.user;
        helpLat=hep.position.lat;
        helpLng=hep.position.long;
        var heroPathLatLng=new google.maps.LatLng(helpLat,helpLng);
        var routePath=[heroPathLatLng,vicLatLng];
        var addPath=new google.maps.Polygon({
            path:routePath,
            strokeColor:"#0000FF",
            strokeOpacity:0.8,
            strokeWeight:2,
            fillColor:"#FFAAFF",
            fillOpacity:0.4
        });
        addPath.setMap(map);
        
    }
    
}