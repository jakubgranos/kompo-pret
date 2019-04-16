const plugins = require('gulp-load-plugins')({ pattern: '*' });
plugins.requireTasks({ path: process.cwd() + '/env/gulp-tasks' });
const config = require('../config/env.config');
const task = config.tasks.serve;

module.exports = () => {
	plugins.browserSync.init({
		server: task.dest
	});

	plugins.gulp.watch(`${task.watch.styles}`, ['styles']);
	plugins.gulp.watch(`${task.watch.markup}`, ['markup']);
	plugins.gulp.watch(`${task.watch.scripts}`, ['scripts']);
	plugins.gulp.watch(`${task.watch.include}`, ['include']);
}