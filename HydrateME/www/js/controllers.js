angular.module('app.controllers', [])

.controller('historyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('todayCtrl', ['$scope', '$stateParams','$timeout','$q', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$timeout,$q) {
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
    $scope.lastAmt = JSON.parse(localStorage.getItem('lastAmt'));
    $scope.fillStyle = levels[current];
    $scope.period = "";
    $scope.$on('$ionicView.enter', function(){
        var currentDate = moment().format('Do MMM YYYY').toString();
        if ($scope.dateHeader !== currentDate) {
            $scope.dateHeader = currentDate;
        }
        calculatePeriod();

    });
    var calculatePeriod = function(){
        var lastDateTimeStamp = moment($scope.lastAmt.dateTimeStamp);
        var today = moment();
        //console.log("day |" + lastDateTimeStamp.date() + " | " + today.date());
        if (lastDateTimeStamp.month() !== today.month() || lastDateTimeStamp.year() !== today.year()) {
            //console.log("inside diff month");
            $scope.period = "on " + lastDateTimeStamp.format('Do MMM YYYY').toString() + " at " + lastDateTimeStamp.format('h:mm:ss a').toString();
        } else if (lastDateTimeStamp.date() !== today.date()){
            //console.log("inside same month");
            $scope.period= (today.date() - lastDateTimeStamp.date()) + " days ago at " + lastDateTimeStamp.format('h:mm:ss a').toString();
        } else if (((today.hour() - lastDateTimeStamp.hour()) === 1) && (60-lastDateTimeStamp.minute()+today.minute()) < 60) {
            //console.log("less than 60min ago");
            $scope.period = (60-lastDateTimeStamp.minute()+today.minute()) + " minutes ago";
        } else if (lastDateTimeStamp.hour() !== today.hour()){
            //console.log("inside different hour");
            $scope.period= today.hour() - lastDateTimeStamp.hour() + " hours ago";
        } else if (lastDateTimeStamp.minute() !== today.minute()){
            //console.log("inside 3");
            $scope.period= today.minute() - lastDateTimeStamp.minute() + " minutes ago";
        } else {
            $scope.period= "just moments ago";
        }
    }
    var fill = function(){
        return $q(function(resolve, reject) {
            $timeout(function(){
                if (current != 100 && current <= Math.ceil($scope.latestAmt*1.0/$scope.recommendedAmt*100)) {
                    $scope.fillStyle = levels[++current];
                    fill();
                }
                resolve();
            },15);
        })
    }
    calculatePeriod();
    $timeout(fill(), 1500);
    $scope.refill = function() {
        current = 0;
        fill();
        calculatePeriod();
    }
    //Timeout for every minute to recalculate last timeout
    //Timeout for every 5 seconds to check for updates and last topped up changes
}])

.controller('profileCtrl', ['$scope', '$stateParams', '$state','$ionicLoading','$timeout','$ionicHistory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state,$ionicLoading,$timeout,$ionicHistory) {
    $scope.usertype = localStorage.getItem('usertype');
    $scope.isParent = ($scope.usertype === 'parent');
    if ($scope.usertype === 'parent'){
        $scope.defaultVolume = localStorage.getItem('defaultVolume');
    }
    //Implement field for parents to specify default value
    $scope.logout = function(){
        $ionicLoading.show({
          template: '<p>Logging Out...</p><ion-spinner icon="bubbles"></ion-spinner>'
        });
        localStorage.setItem('login_state', 'false');
        localStorage.clear();

        $timeout(function(){
            $ionicLoading.hide();
            $state.go('hydrateME');
            $timeout(function () {
                $ionicHistory.clearCache();
                $ionicHistory.clearHistory();
            },300)
        }, 1000);

    }

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
                localStorage.setItem("latestAmt", response.data.latestAmt || 3523);
                localStorage.setItem("lastAmt", JSON.stringify(response.data.lastAmt || {dateTimeStamp:1479321900000, amt:400}));
                if (response.data.usertype === 'parent'){
                    localStorage.setItem("defaultVolume", response.data.defaultVolume || 0);
                }
                $scope.loginModal.hide();
                $scope.login.nric = "";
                $scope.login.password = "";
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
