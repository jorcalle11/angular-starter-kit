/* run this file: gulp --gulpfile gulpfile.prod.js */
var gulp = require('gulp');
var sequence = require('run-sequence');
var prod = require('./tasks/production');
var del = require('del');

gulp.task('default',['sequence']);
gulp.task('minify-files', prod.minify);
gulp.task('copy-index.html',prod.copyIndexHTML);
gulp.task('copy', prod.copy);

gulp.task('sequence', (callback) => {
  sequence('clean','copy-index.html','copy','minify-files',callback);
})

gulp.task('clean', () => {
  del.sync(['./dist'])
});
