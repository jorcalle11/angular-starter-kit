(function() {
'use strict';

  angular
    .module('bootstrapAngular')
    .component('users', {
      
      template:`
        <user-list users="$ctrl.users"></user-list>
        <button class="btn waves-effect waves-light btn-large" ng-click="$ctrl.addUser()">
          Agregar Usuario
          <i class="material-icons right">send</i>
        </button>
      `,
      controller: UsersController,
      bindings: {
        users: '=',
      },
    });

  UsersController.$inject = ['User'];
  function UsersController(User) {
    var $ctrl = this;
    $ctrl.addUser = addUser;

    function addUser(){
      User.get().then(function(user){
        $ctrl.users.push(user);
      });
    }

    // $ctrl.$onInit = function() { };
    // $ctrl.$onChanges = function(changesObj) { };
    // $ctrl.$onDestory = function() { };
  }
})();