import gulp from 'gulp';
import {stream} from 'wiredep';
import paths from './paths';

const options = {
  directory: './bower_components'
};

// Inyecta todas las dependencias instaladas con bower en el archivo index.html
export default () => {
  return gulp.src(paths.html[0])
    .pipe(stream(options))
    .pipe(gulp.dest(paths.root));
};
