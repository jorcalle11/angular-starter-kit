(function() {
'use strict';

  angular
    .module('bootstrapAngular')
    .component('userList', {
      templateUrl: 'app/components/users/userList/userList.view.html',
      controller: UserListController,
      bindings: {
        users: '<',
      },
    });

  UserListController.$inject = [];
  function UserListController() {
    var $ctrl = this;

    // $ctrl.$onInit = function(){ }
    // $ctrl.$onChanges = function(changesObj) { };
    // $ctrl.$onDestory = function() { };
  }
})();