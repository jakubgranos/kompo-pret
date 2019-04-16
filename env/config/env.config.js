const plugins = require('gulp-load-plugins')({ pattern: '*' });
const source_folder_name = "src";
const dest_folder_name = "docs"
const log = console.log;

const tasks = {
	options: {
		plumber: {
			errorHandler(err) {
				log(plugins.chalk.white.bgRed(err.message));
			}
		}
	},
	clean: {
		src: [`${dest_folder_name}/`, 'temp/']
	},
	markup: {
		src: `${source_folder_name}/markup/pages/*.html`,
		dest: `${dest_folder_name}`,
		options: {
			fileInclude: {
				prefix: '@@',
				basepath: `${source_folder_name}/markup/modules/`,
				indent: true
			}
		}
	},
	styles: {
		src: `${source_folder_name}/assets/scss/main.scss`,
		dest: `${dest_folder_name}/assets/css/`,
		options: {
			sass: {
				outputStyle: 'compressed'
			},
			autoprefixer: {
				browsers: ['last 2 versions']
			}
		}
	},
	scripts: {
		src: `${source_folder_name}/assets/js/app.js`,
		dest: `${dest_folder_name}/assets/js/`,
	},
	include: {
		src: `${source_folder_name}/include/**/*`,
		dest: `${dest_folder_name}/`,
	},
	serve: {
		dest: `${dest_folder_name}`,
		watch: {
			styles: `${source_folder_name}/assets/scss/**/*.scss`,
			scripts: `${source_folder_name}/assets/js/**/*.js`,
			markup: `${source_folder_name}/markup/**/*.html`,
			include: `${source_folder_name}/include/**/*`,
		}
	}
}

module.exports = { tasks }