angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('popup', ['$rootScope', '$ionicPopup', '$timeout',function($rootScope, $ionicPopup,$timeout,$cordovaLocalNotification){
    var functions = {
        alertPopup:function(title, msg) {
            return $ionicPopup.alert({
                title:title,
                template:msg
            });
        },
        repeat : function(p){
            p.then(function(res){
                if ($rootScope.notify && $rootScope.displayNotification) {
                    $timeout(function(){
                        var x = functions.alertPopup('Hmm...', 'It seems that you have not topped up your bottle in the last 2 hours. Have you been hydrating yourself?');
                        functions.repeat(x);
                    }, 600000);
                }
            });
        },
        init : function() {
            $ionicPlatform.ready(function() {
                var now = new Date();
                $cordovaLocalNotification.schedule({
                    id: 1,
                    date:now.setSeconds(now.getSeconds()+15),
                    title: 'Hmm...',
                    text: 'It seems that you have not topped up your bottle in the last 2 hours. Have you been hydrating yourself?'
                }).then(function (result) {
                    console.log("The notification has been set");
                })
            });
            $timeout(function(){
                var p = functions.alertPopup('Hmm...', 'It seems that you have not topped up your bottle in the last 2 hours. Have you been hydrating yourself?');
                functions.repeat(p);
            }, 5000);
        }
    }
    return functions;
}]);
