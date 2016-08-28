var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var gulpif = require('gulp-if');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var paths = {
  html: ['./index.html','./app/**/*.html'],
  favicon: './favicon.ico',
  users:'./users.json',
  build: './dist'
}

exports.minify = function() {
	return gulp.src(paths.html[0])
	  .pipe(useref())
	  .pipe(gulpif('*.js', uglify({mangle:false})))
	  .pipe(gulpif('*.css', cleanCSS()))
    .pipe(gulp.dest(paths.build));
}

exports.copyIndexHTML = function(){
  return gulp.src(paths.html[0])
	.pipe(useref())
	.pipe(gulp.dest(paths.build));
}

exports.copy = function() {
  return gulp.src([paths.favicon,paths.users])
    .pipe(gulp.dest(paths.build));
}