var gulp = require('gulp');

var minifyHTML = require('gulp-minify-html');


gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare: true
  };
  return gulp.src(path.html)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(path.htmlBuild));
});
