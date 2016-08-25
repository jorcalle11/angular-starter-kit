(function () {
  'use strict';

  angular
    .module('bootstrapAngular')
    .component('root',{
      template: `
        <header>
          <h2>Bootstrap Angular</h2>
        </header>
        <main>
          <p>Componente Principal</p>
        </main>
        <footer>
          <h5>Jorge Calle</h5>
        </footer>
      `
    });
})();
