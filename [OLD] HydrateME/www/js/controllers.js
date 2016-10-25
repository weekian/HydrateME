angular.module('app.controllers', ['ionic'])

.controller('homeCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams) {


})

.controller('cartCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams) {


})

.controller('cloudCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams) {


})

.controller('menuCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams) {


})

.controller('loginCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $state, $http, ionicPopup) {
    $scope.input = {
        username: "",
        password: ""
    };
    $scope.login = function(input) {
        if (input.username === "" && input.password === "") {
            ionicPopup.alert("Oops!", "Please fill in your NRIC and Password");
        } else if (input.username === "") {
            ionicPopup.alert("Oops!", "Please fill in your NRIC");
        } else if (input.password === "") {
            ionicPopup.alert("Oops!", "Please fill in your Password");
        } else {
            $state.go('menu.home');
        }
    };
})

.controller('forgotPasswordCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams, $state, ionicPopup) {
    $scope.input = {
        username: ""
    }
    $scope.submit = function(input) {
        if (input.username === "") {
            ionicPopup.alert("Oops!", "Please fill in your NRIC");
        } else {
            ionicPopup.alert("Help's on the way!", "We have sent a new password to your parents' email.");
            $state.go('login')
        }
    }


})

.controller('settingsCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams) {


})

.controller('welcomeCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams) {


})
