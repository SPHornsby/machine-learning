angular.module('app', [
  'ngRoute'
]);

angular.
    module('app').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
            template: '<topbar></topbar><home></home>'
          }).
          otherwise('/');
      }
    ]);

angular
    .module("app")
    .directive("topbar", function() {
      return {
        restrict: "E",
        templateUrl: 'app/layout/topbar.html'
      };
    });


angular
    .module("app")
    .directive("topnav", function() {
      return {
        restrict: "E",
        templateUrl: 'app/layout/topnav.html'
      };
    });

angular
    .module("app")
    .directive("example", function() {
      return {
        restrict: "E",
        templateUrl: 'app/components/home/example.html'
      };
    });

angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  function HomeController() {
    var vm = this;
    vm.list = [{name: "name"},{name: "test"}];
    vm.message = "Examples";
    activate();

    function activate() {

    }


  }

angular
    .module("app")
    .directive("home", function() {
      return {
        restrict: "E",
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      };
    });
