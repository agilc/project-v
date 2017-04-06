angular.module('myApp', [])
.controller('myCtrl', ['$scope', function($scope,$window) {
    $scope.count = 0;
    var loginData=this;
    $scope.myFunc = function() {
        $scope.count++;
        alert(this.name);
        $window.location.href = "https://www.google.co.in/" ;
    };
}]);