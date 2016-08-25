import gulp from 'gulp';
import paths from './paths';

export default () => {
  gulp.watch(paths.html,['livereloadHTML']);
  gulp.watch([paths.js], ['lint-js','inject','livereloadHTML']);
};
