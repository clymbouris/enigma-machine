// load gulp modules

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	jshint = require('gulp-jshint');



paths = {
	source: {
		// sets of filenames with wildcard characters (aka glob)
		scripts: 'source/js/*.js',
		css: 'source/css/*.css'
	},
	build: {
		scripts: 'build/js',
		css: 'build/css'
	}
};

// define tasks (name, streams)

gulp.task('default', ['watch']);

gulp.task('build', ['minify']);

gulp.task('watch', function(){
	gulp.watch(paths.source.scripts, ['jslint']);
});

gulp.task('minify', function(){
	gulp.src(paths.glob.scripts).
	pipe(uglify()).
	pipe(rename({ suffix: '.min'})).
	pipe(gulp.dest(paths.build.scripts));
});

gulp.task('jslint', function(){
	gulp.src(paths.source.scripts).
	pipe(jshint()).
	pipe(jshint.reporter('jshint-stylish'));
});
 



