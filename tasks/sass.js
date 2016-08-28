import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import paths from './paths';

const options = {
  outputStyle: 'compressed'
};

// Prepocesa todos los archivos sass a CSS
export default () =>  {
  return gulp.src(paths.styles.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(paths.styles.file))
    .pipe(gulp.dest(paths.styles.dir));
};
