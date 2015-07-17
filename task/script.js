var gulp = require('gulp');

var uglify = require('gulp-uglify');


gulp.task('js', function() {
  return gulp.src(path.js)
    .pipe(uglify())
    .pipe(gulp.dest(path.jsBuild));
});
