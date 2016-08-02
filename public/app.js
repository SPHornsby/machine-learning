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
            template: '<home></home>'
          }).
          when('/problems', {
            template: '<problems></problems>'
          }).
          when('/tutorial/:tutorialId', {
            controller: 'TutorialsController',
            template: '<tutorials></tutorials>'
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
    .module('app')
    .controller('ProblemsController', ProblemsController);

ProblemsController.$inject = ['$routeParams', '$http'];

function ProblemsController($routeParams, $http) {
  var vm = this;
  vm.params = $routeParams;
  vm.name = 'Example Problem';
  vm.body = 'Example Body';
  activate();

  function activate() {

  }
  function getProblem() {

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

angular
    .module('app')
    .directive('example', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/home/example.html'
      };
    });

angular
    .module('app')
    .controller('HomeController', HomeController);

HomeController.$inject = ['$http'];

function HomeController($http) {
  var vm = this;
  vm.list = [];
  vm.message = 'Examples';
  activate();

  function activate() {
    vm.list = getTopics();
  }

  function getTopics() {
    return $http.get('/examples/all')
      .then(function(response) {
        vm.list = response.data;
      })
      .catch();
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
    .controller('TutorialsController', TutorialsController);

TutorialsController.$inject = ['$routeParams', '$http'];

function TutorialsController($routeParams, $http) {
  var vm = this;
  vm.params = $routeParams.tutorialId;

  var url = '/tutorials/' + vm.params;
  vm.run = run;
  activate();

  function activate() {
    getFractal();
  }

  function getFractal() {
    return $http.get(url)
      .then(function(response) {
        var data = response.data[0];
        vm.title = data.name;
        vm.intro = data.intro;
        vm.content = data.content;
        vm.demo = data.demo;
        vm.scripts = data.scripts;
      })
      .catch();
  }
  function run() {
    var script = vm.scripts;
    eval(script);
  }
}

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
