(function(){
  angular.module('ngWeather')
        .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'WeatherService', '$geolocation'];

  function HomeController($scope, WeatherService, $geolocation){
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;
    $scope.latitude = 29;
    $scope.longitude = -82;
    $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
         });

    function updateHourly(latitude, longitude){
      WeatherService.getHourlyData(latitude, longitude);
    }
    function updateMinutely(latitude, longitude){
      WeatherService.getMinutelyData(latitude, longitude);
    }
    function updateDaily(latitude, longitude){
      WeatherService.getDailyData(latitude, longitude);
    }

  }
})();
