import gulp from 'gulp';
import inject from 'gulp-inject';
import series from 'stream-series';
import paths from './paths';

const tarjet  = gulp.src(paths.html[0]);
const head    = gulp.src(paths.entry, {read: false})
const sources = gulp.src([paths.js,'!'+paths.entry],{read: false});
export default () => {
  return tarjet
    .pipe(inject(series(head,sources)))
    .pipe(gulp.dest(paths.root))
};
