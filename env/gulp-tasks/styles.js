const plugins = require('gulp-load-plugins')({ pattern: '*' });
const config = require('../config/env.config');
const task = config.tasks.styles;

module.exports = () => plugins.gulp.src(task.src)
	.pipe(plugins.if(
		global.currentTask === 'default',
		plugins.plumber(config.tasks.options.plumber)
	))
	.pipe(plugins.sass(task.options.sass))
	.pipe(plugins.autoprefixer(task.options.autoprefixer))
	.pipe(plugins.gulp.dest(task.dest))
	.pipe(plugins.if(
		global.currentTask === 'default',
		plugins.browserSync.stream()
	));