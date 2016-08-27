(function () {
  'use strict';

  angular
    .module('bootstrapAngular',[
      'ui.router'
    ])
    .config(config);

  function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url:'/',
        template: '<home></home>'
      })
      .state('users',{
        url:'/users',
        template: '<users users="$resolve.preUsers"></users>',
        resolve: {
          preUsers: preUsers
        }
      });
  }

  preUsers.$inject = ['User'];
  function preUsers(User){
    return User.getAll()
      .then(function(response){
        return response.data;
      });
  }
})();
