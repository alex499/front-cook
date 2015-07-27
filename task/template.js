'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('../conf.js');


gulp.task('html', function() {
  return gulp.src(path.template.src)
    .pipe(watch(path.template.src))
    .pipe(gulp.dest(path.template.build));
});
