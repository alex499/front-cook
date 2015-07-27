'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('../conf');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('js:dev', function() {
  return gulp.src(path.js.src)
    .pipe(watch(path.js.src))
    .pipe(gulp.dest(path.js.build));
});

gulp.task('js:prod', function() {
  return gulp.src(path.js.src)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.js.build));
});
