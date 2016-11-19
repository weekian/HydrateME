angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('popup', ['$rootScope', '$ionicPopup', '$timeout',function($rootScope, $ionicPopup,$timeout){
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
            $timeout(function(){
                var p = functions.alertPopup('Hmm...', 'It seems that you have not topped up your bottle in the last 2 hours. Have you been hydrating yourself?');
                functions.repeat(p);
            }, 5000);
        }
    }
    return functions;
}]);
