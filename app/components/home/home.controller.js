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
