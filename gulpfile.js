var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('clean', function () {
  del(['dist/*']);
});

gulp.task('sass:prod', ['clean'], function () {
  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function () {
  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer()) // defaults ok here
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});