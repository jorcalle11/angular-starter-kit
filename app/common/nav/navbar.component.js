(function() {
'use strict';

  angular
    .module('bootstrapAngular')
    .component('navbarApp', {
      templateUrl: 'app/common/nav/navbar.view.html',
      controller: NavbarController,
      bindings: {
        Binding: '=',
      },
    });

  NavbarController.$inject = [];
  function NavbarController() {
    var $ctrl = this;
    $(".button-collapse").sideNav();
    
    // $ctrl.$onInit = function() { };
    // $ctrl.$onChanges = function(changesObj) { };
    // $ctrl.$onDestory = function() { };
  }
})();