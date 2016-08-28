(function() {
  'use strict';

  angular
    .module('bootstrapAngular')
    .constant('API','https://randomuser.me/api')
    .constant('LOCAL','http://localhost:3000/users.json')
    .constant('MATERIALIZE',Materialize);
})();