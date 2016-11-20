angular.module('app.controllers', [])

.controller('historyCtrl', ['$scope', '$stateParams','ionicDatePicker','$ionicLoading','$http','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,ionicDatePicker,$ionicLoading,$http,$timeout) {
    $ionicLoading.show({
      template: '<p>Retrieving...</p><ion-spinner icon="bubbles"></ion-spinner>'
    });
    $scope.isList = true;
    $scope.dateMilli = moment().valueOf();
    $scope.groups = [];
    $scope.total = 0;
    $scope.todayDate = moment().format('Do MMM YYYY').toString();
    $scope.date = moment().format('Do MMM YYYY').toString();
    $http({
        url: 'http://is439-iotoi.rhcloud.com/getRecordsByDate' + '?username=' + localStorage.getItem('nric') + '&date=' + $scope.dateMilli,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
        //console.log(JSON.stringify(response.data.result, null, 4));
        var temp1 =[
            {time:0, items:[]},
            {time:1, items:[]},
            {time:2, items:[]},
            {time:3, items:[]},
            {time:4, items:[]},
            {time:5, items:[]},
            {time:6, items:[]},
            {time:7, items:[]},
            {time:8, items:[]},
            {time:9, items:[]},
            {time:10, items:[]},
            {time:11, items:[]},
            {time:12, items:[]},
            {time:13, items:[]},
            {time:14, items:[]},
            {time:15, items:[]},
            {time:16, items:[]},
            {time:17, items:[]},
            {time:18, items:[]},
            {time:19, items:[]},
            {time:20, items:[]},
            {time:21, items:[]},
            {time:22, items:[]},
            {time:23, items:[]}];
        var t = 0;
        for (var i = 0; i < response.data.result.length; i++) {
            var current = response.data.result[i];
            var hour = moment(current.dateTimeStamp).hour();
            t += current.amt;
            for (var j = 0; j <temp1.length; j++) {
                if (temp1[j].time === hour) {
                    temp1[j].items.push(current);
                }
            }
        }
        var temp = [];
        for (var j = 0; j < temp1.length; j++) {
            if (temp1[j].items.length > 0) {
                temp.push(temp1[j]);
            }
        }
        $scope.total = t;
        $scope.groups = temp;
        //console.log(JSON.stringify($scope.groups, null, 4));
        $ionicLoading.hide();
    },
    function errorCallback(response) {
        console.log("Something went wrong");
        //console.log(response);
        $ionicLoading.hide();
    });
    var refreshTodayAnalysis = function() {
        console.log("Starting");
        console.log($scope.date);
        console.log($scope.todayDate);
        if ($scope.date !== $scope.todayDate) {
            console.log("Not today");

        } else {
            console.log("Running today refresh");
            $http({
                url: 'http://is439-iotoi.rhcloud.com/getRecordsByDate' + '?username=' + localStorage.getItem('nric') + '&date=' + $scope.dateMilli,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function successCallback(response) {
                //Check whether it is still the same total and whether got those that are not inside
                var items = [];
                var missingItems = [];
                var hasMissing = false;
                for (var i = 0; i < $scope.groups.length; i++) {
                    for (var j = 0; j < $scope.groups[i].items; j++) {
                        items.push($scope.groups[i].items[j]);
                    }
                }
                for (var i = 0; i < response.data.result; i++) {
                    var hasSpecific = false;
                    for (var j = 0; j < items.length; j++) {
                        if (response.data.result[i].dateTimeStamp  === items[j].dateTimeStamp && response.data.result[i].amt === items[j].amt) {
                            hasSpecific = true;
                        }
                    }
                    if (!hasSpecific) {
                        hasMissing = true;
                        //missingItems.push(response.data.result[i]);
                    }
                }
                if (hasMissing) {
                    console.log("has missing");
                    var temp1 =[
                        {time:0, items:[]},
                        {time:1, items:[]},
                        {time:2, items:[]},
                        {time:3, items:[]},
                        {time:4, items:[]},
                        {time:5, items:[]},
                        {time:6, items:[]},
                        {time:7, items:[]},
                        {time:8, items:[]},
                        {time:9, items:[]},
                        {time:10, items:[]},
                        {time:11, items:[]},
                        {time:12, items:[]},
                        {time:13, items:[]},
                        {time:14, items:[]},
                        {time:15, items:[]},
                        {time:16, items:[]},
                        {time:17, items:[]},
                        {time:18, items:[]},
                        {time:19, items:[]},
                        {time:20, items:[]},
                        {time:21, items:[]},
                        {time:22, items:[]},
                        {time:23, items:[]}];
                    var t = 0;
                    for (var i = 0; i < response.data.result.length; i++) {
                        var current = response.data.result[i];
                        var hour = moment(current.dateTimeStamp).hour();
                        t += current.amt;
                        for (var j = 0; j <temp1.length; j++) {
                            if (temp1[j].time === hour) {
                                temp1[j].items.push(current);
                            }
                        }
                    }
                    var temp = [];
                    for (var j = 0; j < temp1.length; j++) {
                        if (temp1[j].items.length > 0) {
                            temp.push(temp1[j]);
                        }
                    }
                    $scope.total = t;
                    $scope.groups = temp;
                }
            },
            function errorCallback(response) {
                console.log("Something went wrong");
                //console.log(response);
            });
        }
    }

    var recursiveWaterUpdateTimeout = function() {
        console.log("Started");
        $timeout(function(){
            refreshTodayAnalysis();
            recursiveWaterUpdateTimeout();
        }, 3000);
    }


    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    recursiveWaterUpdateTimeout();


    var dpObj = {
        callback: function (val) {  //Mandatory
            //If current day, need to keep querying else don't need
            var newDate = moment(val).format('Do MMM YYYY').toString();
            if (newDate !== $scope.date) {
                $scope.date = newDate;
                $ionicLoading.show({
                  template: '<p>Retrieving...</p><ion-spinner icon="bubbles"></ion-spinner>'
                });
                $http({
                    url: 'http://is439-iotoi.rhcloud.com/getRecordsByDate' + '?username=' + localStorage.getItem('nric') + '&date=' + val,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function successCallback(response) {
                    //console.log(JSON.stringify(response.data.result, null, 2));
                    var temp1 = [
                        {time:0, items:[]},
                        {time:1, items:[]},
                        {time:2, items:[]},
                        {time:3, items:[]},
                        {time:4, items:[]},
                        {time:5, items:[]},
                        {time:6, items:[]},
                        {time:7, items:[]},
                        {time:8, items:[]},
                        {time:9, items:[]},
                        {time:10, items:[]},
                        {time:11, items:[]},
                        {time:12, items:[]},
                        {time:13, items:[]},
                        {time:14, items:[]},
                        {time:15, items:[]},
                        {time:16, items:[]},
                        {time:17, items:[]},
                        {time:18, items:[]},
                        {time:19, items:[]},
                        {time:20, items:[]},
                        {time:21, items:[]},
                        {time:22, items:[]},
                        {time:23, items:[]}];
                    var t = 0;
                    for (var i = 0; i < response.data.result.length; i++) {
                        var current = response.data.result[i];
                        var hour = moment(current.dateTimeStamp).hour();
                        t += current.amt;
                        for (var j = 0; j <temp1.length; j++) {
                            if (temp1[j].time === hour) {
                                temp1[j].items.push(current);
                            }
                        }
                    }
                    var temp = [];
                    //console.log(JSON.stringify(temp1, null, 2));
                    for (var j = 0; j < temp1.length; j++) {
                        if (temp1[j].items.length > 0) {
                            temp.push(temp1[j]);
                        }
                    }
                    $scope.total = t;
                    $scope.groups = temp;
                    //console.log(JSON.stringify($scope.groups, null, 4));
                    $ionicLoading.hide();
                },
                function errorCallback(response) {
                    console.log("Something went wrong");
                    //console.log(response);
                    $ionicLoading.hide();
                });
                $ionicLoading.hide();
            }
        },
        closeOnSelect:true,
        showTodayButton:true
    }

    $scope.openDatePicker = function() {
        ionicDatePicker.openDatePicker(dpObj);
    }

}])

.controller('todayCtrl', ['$scope', '$stateParams','$timeout','$q','$http','$ionicPopup','$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$timeout,$q,$http,$ionicPopup,$rootScope) {
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
    $scope.usertype = localStorage.getItem('usertype');
    if ($scope.usertype === 'student') {
        $scope.userRef = "You have"
    } else {
        $scope.userRef = localStorage.getItem('name');
    }
    $scope.lastTopped = 0;
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
            calculatePeriod();
        }
    });
    //Calculating the past time
    var calculatePeriod = function(){
        if ($scope.lastAmt !== null) {
            var lastDateTimeStamp = moment($scope.lastAmt.dateTimeStamp);
            var today = moment();
            if (lastDateTimeStamp.month() !== today.month() || lastDateTimeStamp.year() !== today.year()) {
                $rootScope.notify = true;
                $scope.period = "on " + lastDateTimeStamp.format('Do MMM YYYY').toString() + " at " + lastDateTimeStamp.format('h:mm a').toString();
            } else if (lastDateTimeStamp.date() !== today.date()){
                $rootScope.notify = true;
                $scope.period= (today.date() - lastDateTimeStamp.date()) + " days ago at " + lastDateTimeStamp.format('h:mm a').toString();
            } else if (((today.hour() - lastDateTimeStamp.hour()) === 1) && (60-lastDateTimeStamp.minute()+today.minute()) < 60) {
                $scope.period = (60-lastDateTimeStamp.minute()+today.minute()) + " minutes ago";
                $rootScope.notify = false;
            } else if (lastDateTimeStamp.hour() !== today.hour()){
                var diff = today.hour() - lastDateTimeStamp.hour();
                if (diff >= 2) {
                    $rootScope.notify = true;
                } else {
                    $rootScope.notify = false;
                }
                $scope.period= today.hour() - lastDateTimeStamp.hour() + " hours ago";
            } else if (lastDateTimeStamp.minute() !== today.minute()){
                $scope.period= today.minute() - lastDateTimeStamp.minute() + " minutes ago";
                $rootScope.notify = false;
            } else {
                $scope.period= "just moments ago";
                $rootScope.notify = false;
            }
        }
    }
    var recursivePeriodCalculation = function() {
        $timeout(function(){
            //console.log("Running last topped up at" + moment().toString());
            calculatePeriod();
            recursivePeriodCalculation();
        }, 60000)
    }
    var recursiveWaterUpdate = function() {
        if (localStorage.getItem("login_status")){
            $timeout(function(){
                retrieveLatestWater();
                recursiveWaterUpdate();
            },5000)
        }
    }

    //Animation for filling
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
    //Run the timeout 1.5seconds after logging in
    recursiveWaterUpdate();
    $timeout(fill(), 1500);
    calculatePeriod();
    recursivePeriodCalculation();
    $scope.refill = function() {
        current = 0;
        fill();
    }
    var retrieveLatestWater = function(){
        $http({
            url: 'http://is439-iotoi.rhcloud.com/getLatest' + '?username=' + localStorage.getItem('nric') + '&from=' + localStorage.getItem('lastUpdate'),
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response) {
            localStorage.setItem("lastUpdate", moment().valueOf());
            if ($scope.latestAmt !== response.data.latestAmt) {
                $scope.latestAmt = response.data.latestAmt;
                fill();
                localStorage.setItem('latestAmt', $scope.latestAmt);
            }
            if (response.data.lastAmt.amt !== 0 || response.data.lastAmt.dateTimeStamp !== $scope.lastAmt.dateTimeStamp) {
                localStorage.setItem('lastAmt', JSON.stringify(response.data.lastAmt));
                $scope.lastAmt = response.data.lastAmt;
            }
        },
        function errorCallback(response) {
            console.log("Something went wrong");
            console.log(response);
        });
    }
}])

.controller('profileCtrl', ['$scope', '$stateParams', '$state','$ionicLoading','$timeout','$ionicHistory','$http','$rootScope','$ionicPopup','popup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state,$ionicLoading,$timeout,$ionicHistory,$http,$rootScope,$ionicPopup,popup) {
    $scope.usertype = localStorage.getItem('usertype');
    $scope.isParent = ($scope.usertype === 'parent');
    $scope.defaultVolume = parseInt(localStorage.getItem('defaultVolume'));
    $rootScope.displayNotification = false;
    if ($scope.isParent) {
        $scope.buttonStyle = {
                'height': '120px'
        }
    }
    $scope.updateVolune = function(){
        //Not required for purpose of POC
    }
    $scope.toggleNotification = function() {
        $rootScope.displayNotification = !$rootScope.displayNotification;
        var p = popup.alertPopup('Notice',"Notifications have been set to " + $rootScope.displayNotification);
        p.then(function(res){
            if ($rootScope.displayNotification) {
                popup.init();
            }
        })
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

.controller('hydrateMECtrl', ['$scope', '$stateParams', '$ionicModal', '$ionicPopup', '$http', '$state','$ionicLoading', 'popup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicModal,$ionicPopup,$http,$state,$ionicLoading,popup) {
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
                url: 'http://is439-iotoi.rhcloud.com/api/user/account/login' + '?username=' + login.nric + '&password=' + login.password + '&type=mobile',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function successCallback(response) {
                if (response.data.status === 'success') {
                    localStorage.setItem("login_status", "true");
                    localStorage.setItem("usertype",response.data.usertype);
                    localStorage.setItem("name", response.data.name);
                    localStorage.setItem("nric", response.data.nric);
                    localStorage.setItem("recommendedAmt", response.data.recommendedAmt);
                    localStorage.setItem("latestAmt", response.data.latestAmt);
                    localStorage.setItem("lastAmt", JSON.stringify(response.data.lastAmt) || null);
                    localStorage.setItem("defaultVolume", response.data.defaultVolume || 0);
                    localStorage.setItem("lastUpdate", moment().valueOf());
                    $scope.loginModal.hide();
                    $scope.login.nric = "";
                    $scope.login.password = "";
                    $ionicLoading.hide();
                    $state.go('tabsController.today');
                } else {
                    $ionicLoading.hide();
                    popup.alertPopup("Oops",response.data.status);
                }
            },
            function errorCallback(response) {
            });
        } else {
            if ((!login.nric && !login.password) || (login.nric.trim().length === 0 && login.password.length ===0)) {
                popup.alertPopup("Oops","Please fill in NRIC and Password");
                $scope.login.nric = "";
            } else if (!login.nric || login.nric.trim().length ===0) {
                popup.alertPopup("Oops","Please fill in NRIC");
                $scope.login.nric = "";
            } else if (!login.password || login.password ) {
                popup.alertPopup("Oops","Please fill in Password");
            }
        }
    }
}])
