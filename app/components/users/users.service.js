(function() {
'use strict';

  angular
    .module('bootstrapAngular')
    .factory('User', User);

  User.$inject = ['$http','API','LOCAL'];
  function User($http,API,LOCAL) {
    var service = {
      getAll: getAll,
      get: get
    };

    return service;

    function getAll() {
      return $http.get(LOCAL)
        .success(success)
        .error(error);
      
      function success(response){
        return response.data;
      }

      function error(err){
        return err.message;
      }
    }

    function get() {
      return $http.get(API)
        .then(success)
        .catch(error);
      
      function success(response){
        return response.data.results[0];
      }

      function error(err){
        return err.message;
      }
    }
  }
})();