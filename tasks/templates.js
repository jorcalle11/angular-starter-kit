import gulp from 'gulp';
import templateCache from 'gulp-angular-templatecache';
import paths from './paths';

const options = {
  root: 'app/',
  module: 'templates',
  standalone: true
};

// Compila las vistas parciales a Javascript para ser inyectadas por Angular y minifica el codigo.
export default () => {
  return gulp.src(paths.html[1])
    .pipe(templateCache(options))
    .pipe(gulp.dest(paths.templates[0]));
};
