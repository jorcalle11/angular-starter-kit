(function() {
'use strict';

  angular
    .module('bootstrapAngular')
    .component('home', {
      templateUrl: 'app/components/home/home.view.html',
      controller: HomeController,
      bindings: {
        Binding: '=',
      },
    });

  HomeController.$inject = [];
  function HomeController() {
    var $ctrl = this;
    $ctrl.$onInit = onInit;
    
    function onInit() {
      $ctrl.name = 'Jorge';
    }
    
    // $ctrl.$onChanges = function(changesObj) { };
    // $ctrl.$onDestory = function() { };
  }
})();