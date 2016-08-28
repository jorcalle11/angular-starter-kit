/* run this file: gulp --gulpfile gulpfile.prod.js */
var gulp = require('gulp');
var sequence = require('run-sequence');
var prod = require('./tasks/production');
var del = require('del');

gulp.task('default',['sequence'],prod.server);
gulp.task('minify-files', prod.minify);
gulp.task('copy', prod.copy);

gulp.task('sequence', (callback) => {
  sequence('clean','copy','minify-files',callback);
});

// Elimina el directorio de producción
gulp.task('clean', () => {
  del.sync(['./dist'])
});
