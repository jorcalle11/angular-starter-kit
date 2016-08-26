(function () {
  'use strict';

  angular
    .module('bootstrapAngular')
    .component('root',{
      template: `
        <navbar-app></navbar-app>
        <main>
          <h3>Principal</h3>
          <p>Dale vida a tu app, comienza a crear componentes :)</p>
        </main>
        <footer-app></footer-app>
      `
    });
})();
