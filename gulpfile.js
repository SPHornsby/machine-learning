var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
  return gulp.src(['./app/app.module.js', './app/app.config.js', './app/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./public/'))
      .pipe(rename('app.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
  gulp.watch(['./app/app.module.js', './app/app.config.js', './app/**/*.js'], ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);
