var gulp = require('gulp');
var gulpif = require('gulp-if');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');

var paths = {
  html: './index.html',
  favicon: './favicon.ico',
  users:'./users.json',
  build: './dist'
}

//Comprime los archivos CSS y JS enlazados en el index.html
exports.minify = function() {
	return gulp.src(paths.html)
	  .pipe(useref())
	  .pipe(gulpif('*.js', uglify({mangle:false})))
	  .pipe(gulpif('*.css', cleanCSS()))
    .pipe(gulp.dest(paths.build));
}

// Copia el contenido de los estaticos en el directorio ./dist
exports.copy = function() {
  return gulp.src([paths.favicon,paths.users])
    .pipe(gulp.dest(paths.build));
}

// Servidor de producción
exports.server = function() {
  var options = {
    name: 'bootstrap Angular production',
    root: './dist',
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
  return connect.server(options);
}