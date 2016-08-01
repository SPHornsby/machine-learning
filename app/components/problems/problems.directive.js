angular
    .module("app")
    .directive("problems", function() {
      return {
        restrict: "E",
        templateUrl: 'app/components/problems/problem.html',
        controller: 'ProblemsController',
        controllerAs: 'problem'
      };
    });
