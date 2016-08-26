import gulp from 'gulp';
import paths from './paths';

export default () => {
  gulp.watch(paths.html,['livereloadHTML']);
  gulp.watch([paths.styles.scss],['sass','livereloadHTML']);
  gulp.watch([paths.js], ['lint-js','inject','livereloadHTML']);
  gulp.watch(paths.bower, ['bower']);
};
