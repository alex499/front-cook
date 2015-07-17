var gulp = require('gulp');

var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var assets = require('postcss-assets');
var autoprefixer = require('autoprefixer-core');

var sourcemaps = require('gulp-sourcemaps');


gulp.task('css', function() {
  return gulp.src(path.css)
    .pipe(sourcemaps.init())
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
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.cssBuild));
});
