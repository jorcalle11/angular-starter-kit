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

  UserItemController.$inject = ['MATERIALIZE'];
  function UserItemController(MATERIALIZE) {
    var $ctrl = this;
    $ctrl.like = like;

    function like(user){
      MATERIALIZE.toast('Diste like a '+ user.login.username, 2000);
    }

    // $ctrl.$onInit = function() {};
    // $ctrl.$onChanges = function(changesObj) { };
    // $ctrl.$onDestory = function() { };
  }
})();