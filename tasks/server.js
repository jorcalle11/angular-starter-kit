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

export function server() {
  return connect.server(options);
}

export function livereloadHTML() {
  return gulp.src(paths.html)
    .pipe(connect.reload());
}
