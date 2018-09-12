var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherAppCtrl', function($scope, $http) {

    $scope.searchCity = function() {
        $scope.mainContent = true;
        $scope.subContent = true;
        $scope.loading = true;
        $scope.errorMessage = false;
        $scope.weatherContent = false;
        $scope.weatherSubContent = false;
        var city = $scope.city;
        var key ="1a64a4a3d8ed078d80f62c4dd5770e38";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + key + "&units=metric";
        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            $scope.weatherContent = true;
            $scope.weatherSubContent = true;
            $scope.loading = false;
            $scope.weather = response.data;
            $scope.city = null;
            console.log(response.data);
        }, function errorCallback(response) {
            $scope.error = "Are you sure you typed your city correctly?";
            $scope.loading = false;
            $scope.errorMessage = true;
            console.log(reponse);
        });
    }

});