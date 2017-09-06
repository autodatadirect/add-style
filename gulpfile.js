var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('styles', function(){
  gulp.src('./src/scss/styles-prod.scss')
    .pipe(sass())
    .pipe(rename('add-styles.css'))
    .pipe(gulp.dest('./dist'))
  gulp.src('./src/scss/styles-dev.scss')
    .pipe(sass())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('production', function(){
  gulp.src('./src/scss/styles-prod.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('add-styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'))
  gulp.src('./src/scss/styles-dev.scss')
    .pipe(sass())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('serv', function(){
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });

  gulp.watch('./src/scss/*.scss', ['styles']);
  gulp.watch('./src/js/*.js').on('change', browserSync.reload);
  gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['styles','serv']);
gulp.task('prod', ['production','serv']);