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
