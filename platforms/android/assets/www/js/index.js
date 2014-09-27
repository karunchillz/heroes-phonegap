$(document).ready(function(){

    $('#createAccount').on('click',function(){

            localStorage.setItem('username',device.uuid);
            var SOSURL = serverURL+"createuser?username="+device.uuid;
            // Send push notification to all the users
            $.get(SOSURL,function(data){
                console.log("Account created successfully %o"+data);
            });
            $.mobile.navigate('#alertPage');
    });

    $('#sosAlertButton').on('click',function(){       
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var user = localStorage.getItem('username');
            var SOSURL = serverURL+"initialnotify?latitude="+latitude+"&longitude="+longitude+"&user="+user;
            // Send push notification to all the users
            $.get(SOSURL,function(data){
                console.log("Push Notification sent successfully %o"+data);
            });
        });
        $.mobile.navigate('#victimNotificationPage');    
    });

});