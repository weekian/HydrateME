angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.firstTab', {
    url: '/firstTab',
    views: {
      'tab1': {
        templateUrl: 'templates/firstTab.html',
        controller: 'firstTabCtrl'
      }
    }
  })

  .state('tabsController.middleTab', {
    url: '/middleTab',
    views: {
      'tab2': {
        templateUrl: 'templates/middleTab.html',
        controller: 'middleTabCtrl'
      }
    }
  })

  .state('tabsController.rightTab', {
    url: '/rightTab',
    views: {
      'tab3': {
        templateUrl: 'templates/rightTab.html',
        controller: 'rightTabCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tab',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('landing', {
    url: '/landing',
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('forgot', {
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'forgotCtrl'
  })

$urlRouterProvider.otherwise('/login')



});
