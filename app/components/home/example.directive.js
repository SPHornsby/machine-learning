angular
    .module('app')
    .directive('example', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/home/example.html'
      };
    });
