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
