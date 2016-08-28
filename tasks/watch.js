import gulp from 'gulp';
import paths from './paths';

// Vigila cambios que se produzcan en el código y ejecuta las tareas específicas
export default () => {
  gulp.watch(paths.html,['templates','livereloadHTML']);
  gulp.watch([paths.styles.scss],['sass','livereloadHTML']);
  gulp.watch([paths.js], ['lint-js','inject','livereloadHTML']);
  gulp.watch(paths.bower, ['bower']);
};
