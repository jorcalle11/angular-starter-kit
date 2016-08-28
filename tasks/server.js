import gulp from 'gulp';
import connect from 'gulp-connect';
import paths from './paths';

const options = {
  name: 'bootstrap Angular',
  root: paths.root,
  port: process.env.PORT || 3000,
  host: '0.0.0.0',
  livereload:true
}

// Servidor de desarrollo
export function server() {
  return connect.server(options);
}

// Recarga el navegador cuando hay cambios en el html
export function livereloadHTML() {
  return gulp.src(paths.html)
    .pipe(connect.reload());
}
