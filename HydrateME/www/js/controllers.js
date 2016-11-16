angular.module('app.controllers', [])

.controller('historyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('todayCtrl', ['$scope', '$stateParams','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$timeout) {
    var levels = [
            {'background':'-webkit-linear-gradient(white 100%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 99%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 98%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 97%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 96%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 95%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 94%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 93%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 92%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 91%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 90%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 89%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 88%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 87%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 86%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 85%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 84%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 83%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 82%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 81%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 80%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 79%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 78%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 77%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 76%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 75%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 74%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 73%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 72%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 71%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 70%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 69%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 68%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 67%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 66%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 65%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 64%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 63%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 62%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 61%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 60%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 59%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 58%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 57%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 56%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 55%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 54%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 53%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 52%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 51%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 50%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 49%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 48%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 47%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 46%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 45%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 44%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 43%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 42%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 41%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 40%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 39%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 38%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 37%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 36%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 35%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 34%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 33%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 32%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 31%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 30%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 29%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 28%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 27%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 26%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 25%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 24%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 23%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 22%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 21%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 20%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 19%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 18%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 17%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 16%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 15%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 14%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 13%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 12%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 11%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 10%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 9%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 8%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 7%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 6%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 5%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 4%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 3%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 2%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 1%, #9DC3E6 0%)'},
            {'background':'-webkit-linear-gradient(white 0%, #9DC3E6 0%)'}
    ];
    var current = 0;
    $scope.recommendedAmt = parseInt(localStorage.getItem('recommendedAmt'));
    $scope.latestAmt = parseInt(localStorage.getItem('latestAmt'));
    $scope.dateHeader = moment().format('Do MMM YYYY').toString();
    //'background':'-webkit-linear-gradient(white ' + $scope.empty +'%, #9DC3E6 ' + $scope.filled + '%)'
    $scope.fillStyle = levels[current];
    $scope.$on('$ionicView.enter', function(){
        var currentDate = moment().format('Do MMM YYYY').toString();
        if ($scope.dateHeader !== currentDate) {
            $scope.dateHeader = currentDate;
        }
    });
    var fill = function(){
        $timeout(function(){
            if (current != 100) {
                $scope.fillStyle = levels[++current];
                fill();
            }
            //console.log(current);
        },50);
    }
    fill();
}])

.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('resetPasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('hydrateMECtrl', ['$scope', '$stateParams', '$ionicModal', '$ionicPopup', '$http', '$state','$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicModal,$ionicPopup,$http,$state,$ionicLoading) {
    //Existing users who closed the app but remain logged in
    /*if (localStorage.getItem('login_status')) {
        $state.go('tabsController.today');
    }*/
    $scope.login = {
        nric:"",
        password:"",
    }
    $scope.forgot = {
        nric : ""
    }
    $ionicModal.fromTemplateUrl('templates/forgot.html', {
        id:2,
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.forgotModal = modal;
    });
    $ionicModal.fromTemplateUrl('templates/login.html', {
        id:1,
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.loginModal = modal;
    });
    $scope.displayModal = function(index){
        if (index===1) {
            $scope.loginModal.show();
        } else {
            $scope.forgotModal.show();
        }
    }
    $scope.displayForgot = function(){
        $scope.login.nric = "";
        $scope.login.password = "";
        $scope.forgotModal.show();
        $scope.loginModal.hide();
    }
    $scope.closeModal = function(index) {
        if (index===1) {
            $scope.login.nric = "";
            $scope.login.password = "";
            $scope.loginModal.hide();
        } else {
            $scope.forgot.nric = "";
            $scope.forgotModal.hide();
        }
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    $scope.login = function(login) {
        if (login.nric && login.password && login.nric.trim().length > 0) {
            $ionicLoading.show({
              template: '<p>Logging In...</p><ion-spinner icon="bubbles"></ion-spinner>'
            });
            $http({
                url: 'https://iot-2016is439.rhcloud.com/api/user/account/login',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    username:login.nric,
                    password:login.password,
                    type:"mobile"
                }
            }).then(function successCallback(response) {
                localStorage.setItem("login_status", "true");
                localStorage.setItem("usertype",response.data.usertype);
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("recommendedAmt", response.data.recommendedAmt || 4000);
                localStorage.setItem("latestAmt", response.data.latestAmt || 2500);
                $scope.loginModal.hide();
                $ionicLoading.hide();
                $state.go('tabsController.today');
            },
            function errorCallback(response) {
                $ionicLoading.hide();
                alertPopup(response.data.message);
            });
        } else {
            if ((!login.nric && !login.password) || (login.nric.trim().length === 0 && login.password.length ===0)) {
                alertPopup("Please fill in NRIC and Password");
                $scope.login.nric = "";
            } else if (!login.nric || login.nric.trim().length ===0) {
                alertPopup("Please fill in NRIC");
                $scope.login.nric = "";
            } else if (!login.password || login.password ) {
                alertPopup("Please fill in Password");
            }
        }
    }
    var alertPopup = function(msg) {
        $ionicPopup.alert({
            title:"Oops",
            template:msg
        });
    };

    // Execute action on hide modal
    /*$scope.$on('modal.hidden', function() {
    // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
    // Execute action
    });*/

}])

.controller('updatePasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
