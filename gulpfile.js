// Load plugins
var gulp          = require('gulp'),
    beep          = require('beepbeep'),
    gutil         = require('gulp-util'),
    compass       = require('gulp-compass'),
    autoprefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    cmq           = require('gulp-combine-media-queries'),
    notify        = require('gulp-notify'),
    minifyCSS     = require('gulp-minify-css'),
    rename        = require('gulp-rename');


var onError = function (err) {
  beep([0, 0, 0]);
  gutil.log(gutil.colors.green(err));
};

// Run compass to watch
gulp.task('styles', function() {
  gulp.src('app/assets/stylesheets/screen.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(compass({
      config_file: 'config.rb',
      css: 'public/stylesheets',
      sass: 'app/assets/stylesheets'
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'Explorer >= 9'))
    .pipe(cmq())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/stylesheets'));
});

// Watch
gulp.task('watch', function () {
  gulp.watch("app/assets/stylesheets/**/*.scss", ['styles']);
  gulp.watch('app/assets/javascripts/**/*.js', ['scripts']);
});
