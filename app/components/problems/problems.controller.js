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
