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
          when('/problems', {
            template: '<topbar></topbar><problems></problems>'
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
    vm.list = [
      {name: "binary", url: "img/binary-sm.jpg", alt:"binary"},
      {name: "test", url: "img/head-sm.jpg", alt:"head"},
      {name: "fractal", url: "img/fractal-sm.jpg", alt: "fractal"},
      {name: "geometry", url: "img/geometry-sm.jpg", alt: "geometry"}
     ];
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

angular
    .module('app')
    .controller('ProblemsController', ProblemsController);

  ProblemsController.$inject = [];

  function ProblemsController() {
    var self = this;
    self.name = "Example Problem";
    self.body = "Example Body";
    activate();

    function activate() {

    }
  }

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
