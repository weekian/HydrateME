angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.history', {
    url: '/left',
    views: {
      'tab1': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('tabsController.today', {
    url: '/middle',
    views: {
      'tab2': {
        templateUrl: 'templates/today.html',
        controller: 'todayCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/right',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('hydrateME', {
    url: '/landing',
    templateUrl: 'templates/hydrateME.html',
    controller: 'hydrateMECtrl'
  })

  .state('updatePassword', {
    url: '/update',
    templateUrl: 'templates/updatePassword.html',
    controller: 'updatePasswordCtrl'
  })

$urlRouterProvider.otherwise('/tabs/middle')



});
