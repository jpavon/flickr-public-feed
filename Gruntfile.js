module.exports = function(grunt) {
	'use strict';

	// Displays the elapsed execution time of grunt tasks
	require('time-grunt')(grunt);

	// Load all grunt tasks
	require('jit-grunt')(grunt, {
		browserSync: 'grunt-browser-sync',
		usebanner: 'grunt-banner'
	});

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			banner: '/*! <%= pkg.title %> - <%= pkg.homepage %> */\n'
		},

		watch: {
			scss: {
				files: ['assets/scss/**/*.scss'],
				tasks: [
					'sass', 'autoprefixer', 'cssmin'
				]
			},
			scripts: {
				files: ['assets/js/**/*.js', 'assets/js/**/*.hbs'],
				tasks: [
					'browserify'
				]
			}
		},

		browserSync: {
			task: {
				bsFiles: {
					src : [
						'assets/_/css/style.css', 'assets/_/js/app.js', 'index.html'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './'
					}
				}
			}
		},

		browserify: {
			task: {
				src: 'assets/js/app.js',
				dest: 'assets/_/js/app.js',
				options: {
					extensions: ['.hbs'],
					transform: ['hbsfy']
				}
			}
		},

		uglify: {
			task: {
				files: {
					'dist/assets/js/app.min.js': ['assets/_/js/app.js']
				}
			}
		},

		sass: {
			task: {
				options: {
					sourceMap: true
				},
				files: {
					'assets/_/css/style.temp.css': ['assets/scss/imports.scss']
				}
			}
		},

		autoprefixer: {
			task: {
				options: {
					browsers: ['last 99 version'],
					map: true
				},
				files: {
					'assets/_/css/style.css': ['assets/_/css/style.temp.css']
				}
			}
		},

		cssmin: {
			task: {
				files: {
					'dist/assets/css/style.min.css': ['assets/_/css/style.css']
				}
			}
		},

		processhtml: {
			options: {
			},
			task: {
				files: {
					'dist/index.html': ['index.html']
				}
			}
		},

		usebanner: {
			task: {
				options: {
					banner: '<%= meta.banner %>'
				},
				files: {
					src: [
						'dist/assets/js/app.min.js',
						'dist/assets/css/style.min.css'
					]
				}
			}
		},

		clean: {
			assets: [
				'assets/_/',
				'dist/'
			],
		},

		'gh-pages': {
			options: {
				base: 'dist'
			},
			src: ['**']
		}
	});


	grunt.registerTask('default', [
		'browserSync',
		'watch'
	]);

	grunt.registerTask('dist', [
		// Clean
		'clean:assets',

		// Css
		'sass',
		'autoprefixer',
		'cssmin',

		// JavaScript
		'browserify',
		'uglify',

		// Html
		'processhtml',

		// Banner
		'usebanner'
	]);

	grunt.util.linefeed = '\n';
};
