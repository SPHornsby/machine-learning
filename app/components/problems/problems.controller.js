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
