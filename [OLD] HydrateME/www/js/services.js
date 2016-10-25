angular.module('app.services', [])

.factory('ionicPopup', function($ionicPopup) {
  return {
    alert: function(title, message) {
      $ionicPopup.alert({
        title: title,
        template: message
      });
    }
  }
})

.service('BlankService', function() {

});
/*
http://mcgivery.com/ionic-using-factories-and-web-services-for-dynamic-data/
*/
