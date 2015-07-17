var gulp = require('gulp');

var rsync = require('gulp-rsync');


gulp.task('assets', function() {
  return gulp.src(path.assets)
    .pipe(rsync({
        destination: path.assetsBuild,
        emptyDirectories: true,
        progress: true,
        recursive: true,
        clean: true
      })
    );
});
