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

gulp.task('TVTab', function() {
  // lreload.monitor('public/bundle.js', {displayNotification: true});

  //entrypoint into app
    browserify('./client/components/TVScheduleTab/render.js')
    //converts JSX to javascript
      .transform('reactify')
      .bundle()
      //bundle will be named bundle.js
      .pipe(source('tabs.js'))
      //bundle will be located at dist/js
      .pipe(gulp.dest('output/'));
});

// gulp.task('serverwatch', function() {
//   nodemon({script: 'server.js', ext: 'js html', ignore: ['gulpfile.js', 'public/bundle.js', 'node_modules/*', 'bower_components/*', '__tests__']})
//   .on('change', [])
//   .on('restart', function() {
//     console.log('server has restarted');
//   });
// });

gulp.task('default',['browserify', 'serverwatch'], function() {
  //watch all files immediately, rerun gulp tasks when there is a change
    return gulp.watch('client/**/*.*', ['browserify', 'serverwatch']);
});
