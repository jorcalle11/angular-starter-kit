'use strict';

import gulp from 'gulp';
import sequence from 'run-sequence';
import { server, livereloadHTML } from './tasks/server';
import inject from './tasks/inject';
import bower from './tasks/bower';
import lint from './tasks/lint';
import sass from './tasks/sass';
import templates from './tasks/templates';
import watch from './tasks/watch';

gulp.task('default',['sequence'],server);
gulp.task('bower',bower);
gulp.task('inject',inject);
gulp.task('livereloadHTML',livereloadHTML);
gulp.task('watch',watch);
gulp.task('lint-js', lint);
gulp.task('sass', sass);
gulp.task('templates',templates);

// Ejecuta las tareas en forma secuencial.
gulp.task('sequence',(callback) => {
  sequence('bower','sass','templates','inject','lint-js','watch',callback);
});
