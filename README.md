# Angular Starter Kit

Boilerplate para aplicaciones con Angular 1.x utilizando componentes.

## Requisitos
  1. Node.js version 4 o superior.
  2. Gulp
  3. Bower

## Instalación
```shell
  $ git clone https://github.com/jorcalle11/angular-starter-kit.git
  $ cd angular-starter-kit
  $ npm install
```
## Ejecución para desarrollo 
```shell
  $ npm start
```
Al terminar de ejecutar el comando, debe correr un servidor de desarrollo que se queda en escucha a cualquier cambio que realizes para recarga el navegador automáticamente y mostrar los cambios.

## Producción 
```shell
  $ npm run build
```
Este comando crea un directorio (```dist```) en la raiz del proyecto, con todos los archivos optimizados para producción. Al finalizar ejecuta un servidor de prueba, para que puedas verificar. 

## Stack de Tecnologías
* [Node.js](https://nodejs.org)
* [Gulp](http://gulpjs.com/)
* [Bower](https://bower.io/)
* [Sass](http://sass-lang.com/)
* [Angular 1](https://angularjs.org/)
* [Materialize](http://materializecss.com/)
* [Material icons](https://design.google.com/icons/)
* [AngularUI-router](https://ui-router.github.io/)
* [Random User Generator](https://randomuser.me/)

# Estructura de directorios

```
.
├── app 
│   ├── common
│   │   ├── footer
│   │   │   ├── footer.component.js
│   │   │   └── footer.view.html
│   │   └── nav
│   │       ├── navbar.component.js
│   │       └── navbar.view.html
│   ├── components
│   │   ├── home
│   │   │   ├── home.component.js
│   │   │   └── home.view.html
│   │   └── users
│   │       ├── userItem
│   │       │   ├── userItem.component.js
│   │       │   ├── userItem.style.scss
│   │       │   └── userItem.view.html
│   │       ├── userList
│   │       │   ├── userList.component.js
│   │       │   └── userList.view.html
│   │       ├── users.component.js
│   │       └── users.service.js
│   ├── constants
│   │   └── constants.js
│   ├── templates 
│   │   └── templates.js
│   ├── app.component.js
│   ├── app.js
│   ├── app.scss
│   └── main.scss
├── assets
│   ├── css
│   │   └── style.css
│   └── img
├── dist
├── node_modules
├── bower_components
├── tasks
│   ├── bower.js
│   ├── inject.js
│   ├── lint.js
│   ├── paths.js
│   ├── production.js
│   ├── sass.js
│   ├── server.js
│   ├── templates.js
│   └── watch.js
├── bower.json
├── favicon.ico
├── gulpfile.babel.js
├── gulpfile.prod.js
├── index.html
├── LICENSE
├── package.json
├── README.md
└── users.json
```

* **app**: Directorio principal, aqui va todo el código para tu aplicación angular.
* **common**: Directorio para los componentes comunes de tu aplicación, es decir aquellos componentes que pueden ser utilizados en multiples vistas. Por ejemplo Navegación y Footer.
* **components**: Directorio para los componentes individuales que contienen la lógica para cada bloque de función. Dentro de cada componente se encuentran los archivos necesarios dividos por funcionalidad. Ejemplo: En el directorio home se encuentran dos archivos, ```home.component.js``` y ```home.view.html```, en el primero se hace la declaración del componente y el ultimo contiene el html a mostrar.
* **constants**: Directorio para las constantes a utilizar en toda la aplicación. 
* **templates**: Directorio generado por una tarea de gulp, que contiene un modulo de angular con el contenido de todas las vistas parciales de la aplicación.
* **assets**: Directorio para los estáticos de la aplicación.
* **dist**: Directorio donde se almacenarán los archivos listos para producción.
* **node_modules**: Directorio que contiene las dependecias de desarrollo de la aplicación.
* **bower_components**: Directorio que contiene todas las dependecias de la aplicación.
* **tasks**: Directorio que contiene todas las tareas automáticas de gulp, separadas por funcionalidad.
* **bower.json**: Archivo que contiene toda la información sobre las dependecias de la aplicación.
* **gulpfile.babel.js**: Archivo con las tareas de gulp para desarrollo.
* **gulpfile.prod.js**: Archivo con las tareas de gulp para producción.
* **index.html**: Archivo principal de la aplicación.
* **package.json**: Archivo que contiene toda la información general de la aplicación.
* **users.json**: Archivo para simular la base de datos, que contiene usuarios de prueba a mostrar en la aplicación.
  ## Licencia

Open Source. [MIT](LICENSE) &copy; Jorge Calle
