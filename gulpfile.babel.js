'use strict';

import gulp from 'gulp';
import sequence from 'run-sequence';
import { server, livereloadHTML } from './tasks/server';
import inject from './tasks/inject';
import bower from './tasks/bower';
import lint from './tasks/lint';
import watch from './tasks/watch';

gulp.task('default',['inject-files','lint-js','watch'],server);
gulp.task('bower',bower);
gulp.task('inject',inject);
gulp.task('livereloadHTML',livereloadHTML);
gulp.task('watch',watch);
gulp.task('lint-js', lint);

gulp.task('inject-files',(callback) => {
  sequence('bower','inject',callback);
});
