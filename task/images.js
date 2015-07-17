var gulp = require('gulp');

var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegtran = require('imagemin-jpegtran');
var imageminOptipng = require('imagemin-optipng');

var del = require('del');


gulp.task('img', ['img-compression', 'img-remove']);

gulp.task('img-compression', function() {
  return gulp.src(path.imgSource)
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 3,
      use: [imageminOptipng(), imageminPngquant(), imageminJpegtran()]
    }))
    .pipe(gulp.dest(path.img));
});

gulp.task('img-remove', ['img-compression'], function(cb) {
  del([
    path.imgSource,
    '!.keep'
  ], cb);
});
