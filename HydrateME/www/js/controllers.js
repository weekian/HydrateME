angular.module('starter.controllers', [])

.controller('loginCtrl', function($scope) {
})

.controller('forgotCtrl', function($scope) {
})

.controller('leftCtrl', function($scope) {
})

.controller('middleCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('rightCtrl', function($scope, $stateParams) {
});
