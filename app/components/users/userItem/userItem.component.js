(function() {
'use strict';

  angular
    .module('bootstrapAngular')
    .component('userItem', {
      templateUrl: 'app/components/users/userItem/userItem.view.html',
      controller: UserItemController,
      bindings: {
        user: '<',
      },
    });

  UserItemController.$inject = [];
  function UserItemController() {
    var $ctrl = this;
    $ctrl.like = like;

    function like(user){
      Materialize.toast('Diste like a '+ user.login.username, 4000);
    }

    // $ctrl.$onInit = function() {};
    // $ctrl.$onChanges = function(changesObj) { };
    // $ctrl.$onDestory = function() { };
  }
})();