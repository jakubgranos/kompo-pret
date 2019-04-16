const plugins = require('gulp-load-plugins')({ pattern: '*' });
const config = require('../config/env.config');
const task = config.tasks.include;

module.exports = () => plugins.gulp.src(task.src)
	.pipe(plugins.gulp.dest(task.dest));