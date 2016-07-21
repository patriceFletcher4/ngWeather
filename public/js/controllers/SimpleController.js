

(function(){
  angular.module('proxyfrontend')
        .controller('SimpleController', SimpleController)

  SimpleController.$inject = ['scope'];

  function SimpleController($scope){
    $scope.message = 'Hello There!';
  }

})();
