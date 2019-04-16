const plugins = require('gulp-load-plugins')({ pattern: '*' });
const config = require('../config/env.config');
const task = config.tasks.clean;

module.exports = () => plugins.del(task.src)
	.then(paths => {
		console.log('Cleaning old build files and folders:\n', paths.join('\n'));
	});