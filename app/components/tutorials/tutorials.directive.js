angular
    .module('app')
    .directive('tutorials', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/tutorials/tutorials.html',
        controller: 'TutorialsController',
        controllerAs: 'tutorial'
      };
    });
