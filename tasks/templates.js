import gulp from 'gulp';
import templateCache from 'gulp-angular-templatecache';
import paths from './paths';

const options = {
  root: 'app/',
  module: 'templates',
  standalone: true
};

export default () => {
  return gulp.src(paths.html[1])
    .pipe(templateCache(options))
    .pipe(gulp.dest(paths.templates[0]));
};
