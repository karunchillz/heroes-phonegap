var pushNotification;
function onDeviceReady() {
    $("#app-status-ul").append('<li>registering ' + device.platform + '</li>');
    if ( device.platform == 'android' || device.platform == 'Android' || device.platform == "amazon-fireos" ){
    pushNotification.register(
    successHandler,
    errorHandler,
        {
            "senderID":"45769754576",
            "ecb":"onNotification"
        });
    }
}
function successHandler (result) {
    alert('result = ' + result);
}
function errorHandler (error) {
    alert('error = ' + error);
}
function onNotification(e) {
    switch( e.event )
    {
        case 'registered':
               if ( e.regid.length > 0 )
               {
                   var user = localStorage.getItem('username');
                   var GCMREGURL = "http://10.134.124.142:3000/gcmregistration?regid="+e.regid+"&user="+user; 
                   // Register the gcm Reggie
                   $.get(GCMREGURL,function(data){
                       alert("GCM Registration successful !!");
                   });                                
               
                   alert('registration id = '+e.regid);
               }
           break;
        case 'message':
            /*if ( e.foreground ){
                var soundfile = e.soundname || e.payload.sound;
                var my_media = new Media("/android_asset/www/"+ soundfile);
                my_media.play();
            }else{
                //otherwise we were launched because the user touched a notification in the notification tray.
                if ( e.coldstart )
                {
                    alert('U clicked on the notification icon');
                }else{
                    alert('U Background ');
                }
            }*/
            pushNotificationCallBack(e.message);
            break;
        case 'error':
            console.error( e.msg );
            break;
        default:
            console.error('EVENT -> Unknown, an event was received and we do not know what it is');
            break;
    
    }
}