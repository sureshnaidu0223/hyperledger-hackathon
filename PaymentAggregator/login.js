angular.module('loginApp', []).controller('loginCtrl', function($scope, $http) {
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});