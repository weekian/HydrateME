angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
/*
studentApp.factory('studentSession', function($http){
    return {
        getSessions: function() {
            return $http.post('/services', {
                type : 'getSource',
                ID    : 'TP001'
            });
        }
    };
});

studentApp.controller('studentMenu',function($scope, studentSession){
    $scope.variableName = [];

    var handleSuccess = function(data, status) {
        $scope.variableName = data;
        console.log($scope.variableName);
    };

    studentSession.getSessions().success(handleSuccess);
});
*/
