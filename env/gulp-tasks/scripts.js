const plugins = require('gulp-load-plugins')({ pattern: '*' });
const config = require('../config/env.config');
const webpackConfig = require('../config/webpack.config');
const task = config.tasks.scripts;

module.exports = () => plugins.gulp.src(task.src)
	.pipe(plugins.webpackStream(webpackConfig), plugins.webpack)
	.pipe(plugins.gulp.dest(task.dest))
	.pipe(plugins.if(
		global.currentTask === 'default',
		plugins.browserSync.stream()
	));