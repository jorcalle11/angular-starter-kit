(function () {
  'use strict';

  angular
    .module('bootstrapAngular')
    .component('root',{
      template: `
        <header>
          <h2 class="title">Bootstrap Angular</h2>
        </header>
        <main>
          <h3>Principal</h3>
          <p>Dale vida a tu app, comienza a crear componentes :)</p>
        </main>
        <footer>
          <h5>Jorge Calle</h5>
        </footer>
      `
    });
})();
