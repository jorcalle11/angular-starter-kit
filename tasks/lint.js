import gulp from 'gulp';
import jshint from 'gulp-jshint';
import stylish from 'jshint-stylish';
import paths from './paths';

// Busca errores en los archivos JS, si encuentra son mostrados en la terminal.
export default () =>  {
  return gulp.src([paths.js,paths.templates[1]])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish,{beep: true}));
};
