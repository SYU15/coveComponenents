var gulp = require('gulp');
var browserify = require('browserify');
//converts JSX to javascript
var reactify = require('reactify');
//must convert a string to a stream to allow browerify to be compatible with gulp
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  //entrypoint into app
    browserify('./client/App.js')
    //converts JSX to javascript
      .transform('reactify')
      .bundle()
      //bundle will be named bundle.js
      .pipe(source('bundle.js'))
      //bundle will be located at dist/js
      .pipe(gulp.dest('public/'));
});

gulp.task('default',['browserify'], function() {
  //watch all files immediately, rerun gulp tasks when there is a change
    return gulp.watch('src/**/*.*', ['browserify'])
});
