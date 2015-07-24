'use strict';
var gulp = require('gulp');

var browserSync = require('browser-sync').create();


gulp.task('server', function() {
  browserSync.init({
      // server: {
      //     baseDir: path.server.baseDir
      // },
      proxy: path.server.proxyUrl,
      open: false,
  });
});
