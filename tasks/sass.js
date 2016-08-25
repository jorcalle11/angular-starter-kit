import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import paths from './paths';

const options = {
  outputStyle: 'compressed'
};

export default () =>  {
  return gulp.src(paths.styles.scss)
    .pipe(sass(options).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(paths.styles.dir));
};
