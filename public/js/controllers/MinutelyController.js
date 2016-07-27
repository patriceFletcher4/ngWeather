(function(){
  angular.module('ngWeather')
        .controller('MinutelyController', MinutelyController);

  MinutelyController.$inject = ['$scope', 'WeatherService'];

  function MinutelyController($scope, WeatherService){
    $scope.minutelyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be some drizzle',
      'Partly Cloudy': 'There will be some clouds around in your area.'
    };
    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
     $scope.minutelyData = value;

    });


  }
})();
