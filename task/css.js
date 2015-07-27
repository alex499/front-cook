'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('../conf');

var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var assets = require('postcss-assets');
var autoprefixer = require('autoprefixer-core');
var nano = require('cssnano');
var mqpacker = require('css-mqpacker');
var browserReporter = require('postcss-browser-reporter');

var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('css:dev', function () {
    return gulp.src(path.css.src)
      .pipe(watch(path.css.src))
      .pipe(sourcemaps.init())
      .pipe(postcss([
          nested,
          assets({
            loadPaths: [path.css.img]
          }),
          autoprefixer({
            browsers: ['last 4 versions']
          }),
          browserReporter()
        ])
      )
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.css.build));
});

gulp.task('css:prod', function() {
  return gulp.src(path.css.src)
    .pipe(postcss([
        nested,
        assets({
          loadPaths: [path.img]
        }),
        autoprefixer({
          browsers: ['last 4 versions']
        })
      ])
    )
    .pipe(concat('style.css'))
    .pipe(postcss([
        nano(),
        mqpacker()
      ])
    )
    .pipe(gulp.dest(path.css.build));
});
