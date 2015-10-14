var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var babelify = require('babelify');
var argv = require('yargs').argv;
var uglify = require('gulp-uglify');
var envify = require('envify');
var uglifyify = require('uglifyify');

//abstracts this section so it can be reused
var bundle = function(bundler) {
 //entrypoint into app
   return bundler
   //converts JSX to javascript, also ES6 functionality
     .transform(babelify)
     .bundle()
     .on('error', function(e){
       gutil.log(e);
     })
     //bundle will be named bundle.js
     .pipe(source('bundle.js'))
     //bundle will be located at dist/js
     .pipe(gulp.dest('public/'))
     //lets browserSync know when there is a new version
     .pipe(browserSync.stream());

};

var bundleComponent = function(bundler, source, component) {
  gutil.log('Bundling ' + component);
  
  return bundler
    .bundle()
    .on('error', function(e){
      gutil.log(e);
    })
    //bundle will be named bundle.js
    .pipe(source)
    //bundle will be located at dist/js
    .pipe(gulp.dest('output/'));
    
};

gulp.task('uglify', function(){
  return gulp.src('public/bundle.js')
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('output/'));
});

gulp.task('watch', function(){
  
  var watcher = watchify(browserify('./client/App.js', watchify.args));

  bundle(watcher);
  //on update, run browserify again
  watcher.on('update', function(){
    bundle(watcher);
  });

  //logs information to the console
  watcher.on('log', gutil.log);

  browserSync.init({
    server: "./public",
    logFileChanges: false
  });
});

gulp.task('browserify', function() {
  return bundle(browserify('./client/App.js'))
});

gulp.task('exportComponent', function() {
  var component = argv.component;
  if(component === 'TVScheduleTab') {
    bundleComponent(browserify({
     'entries': ['./client/components/TVScheduleTab/render.js'],
     'transform': [[babelify], ['envify', {'global': true, NODE_ENV: 'production'}]] 
    }), source('reactDailySchedule.js'), component);
    gutil.log('Component will save to output/reactDailySchedule.js');
    gutil.log('Component will look for an an element with an id of TVTab');
  } else if(component === 'TVWeekly') {
    bundleComponent(browserify({
     'entries': ['./client/components/TVWeekly/render.js'],
     'transform': [[babelify], ['envify', {'global': true, NODE_ENV: 'production'}]] 
    }), source('reactWeeklySchedule.js'), component);
    gutil.log('Component will save to output/reactWeekly.js');
    gutil.log('Component will look for an an element with an id of weeklySchedule');
  } else {
    gutil.log(component + ' is not a KQED library component');
  }
});

gulp.task('default',['watch']);
