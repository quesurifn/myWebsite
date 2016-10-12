var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('browserSync', function() {
	browserSync.init({

		server: {
			baseDir: 'app'
		},
	})

//stuff here

});


gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
	.pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});