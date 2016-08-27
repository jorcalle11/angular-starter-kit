(function () {
  'use strict';

  angular
    .module('bootstrapAngular')
    .component('root',{
      template: `
        <navbar-app></navbar-app>
        <main ui-view></main>
        <footer-app></footer-app>
      `
    });
})();
