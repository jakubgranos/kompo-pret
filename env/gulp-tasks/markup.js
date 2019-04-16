const plugins = require('gulp-load-plugins')({ pattern: '*' });
const config = require('../config/env.config');
const task = config.tasks.markup;

module.exports = () => plugins.gulp.src(task.src)
	.pipe(plugins.if(
		global.currentTask === 'default',
		plugins.plumber(config.tasks.options.plumber)
	))
	.pipe(plugins.fileInclude(task.options.fileInclude))
	.pipe(plugins.gulp.dest(task.dest))
	.pipe(plugins.if(
		global.currentTask === 'default',
		plugins.browserSync.stream()
	));