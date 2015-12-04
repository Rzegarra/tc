var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('browserify');

gulp.task('server', function() {
  gulp.src('./tcGrafos')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true
    }));
});

gulp.task('default', ['server']);
