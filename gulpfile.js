var gulp = require('gulp');
var browserify = require('browserify');
//converts JSX to javascript
var reactify = require('reactify');
//must convert a string to a stream to allow browerify to be compatible with gulp
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var lreload = require('livereactload');
var watchify = require('watchify');

gulp.task('browserify', function() {
  // lreload.monitor('public/bundle.js', {displayNotification: true});

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

// gulp.task('serverwatch', function() {
//   nodemon({script: 'server.js', ext: 'js', ignore: ['gulpfile.js', 'public/bundle.js', 'node_modules/*', 'bower_components/*', '__tests__']})
//   .on('change', [])
//   .on('restart', function() {
//     console.log('Server has restarted');
//   });
// });

gulp.task('default',['browserify'], function() {
  //watch all files immediately, rerun gulp tasks when there is a change
    return gulp.watch('client/**/*.*', ['browserify']);
});
