(function() {
'use strict';

  angular
    .module('bootstrapAngular')
    .component('footerApp', {
      templateUrl: 'app/common/footer/footer.view.html',
      controller: NavbarController,
      bindings: {
        Binding: '=',
      }
    });

  NavbarController.$inject = [];
  function NavbarController() {
    var $ctrl = this;
    // $ctrl.$onInit = function() { };
    // $ctrl.$onChanges = function(changesObj) { };
    // $ctrl.$onDestory = function() { };
  }
})();