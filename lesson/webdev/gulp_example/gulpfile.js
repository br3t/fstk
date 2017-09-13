var gulp = require('gulp');
var minifyCSS = require('gulp-csso'); // минификация css
var autoprefixer = require('gulp-autoprefixer'); // добавление vendor-префиксов
var concat = require( 'gulp-concat' ); // объединение файлов в один
var uglify = require('gulp-uglify'); // минификация js

gulp.task('css', function(){
	return gulp.src('src/css/*.css')
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			browsers: ['last 50 versions']
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('css/'))
});

gulp.task('js', function() {
	gulp.src(['src/js/*.js'])
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/'))
});

gulp.task('default', [ 'js', 'css' ]);