const plugins = require('gulp-load-plugins')({ pattern: '*' });
plugins.requireTasks({ path: process.cwd() + '/env/gulp-tasks' });

plugins.gulp.task('build', function(done) {
	global.currentTask = this.seq.slice(-1)[0];
	plugins.runSequence(
		'clean',
		'scripts',
		'markup',
		'styles',
		'include',
		done
	)
});

plugins.gulp.task('default', function(done) {
	global.currentTask = this.seq.slice(-1)[0];
	plugins.runSequence(
		'clean',
		'scripts',
		'markup',
		'styles',
		'include',
		'serve',
		done
	)
});