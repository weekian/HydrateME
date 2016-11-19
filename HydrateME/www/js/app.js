// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services','angularMoment', 'ngCordova','chart.js','ionic-datepicker'])

.config(function($ionicConfigProvider){
    $ionicConfigProvider.backButton.text('').previousTitleText(false);
    $ionicConfigProvider.tabs.position("bottom");
    $ionicConfigProvider.navBar.alignTitle('center');
})

.filter('litre', function(){
    return function(value) {
        if (value !== null) {
            if (value >= 1000) {
                return Math.round((value/1000.0) * 100) / 100 + " litres";
            } else {
                return value + "ml";
            }
        } else {
            return "";
        }
    }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    //For ios 8
    //if(device.platform === "iOS") {
    //    window.plugin.notification.local.promptForPermission();
    //}

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    //ionic.Platform.isFullScreen = true;
  });
})
