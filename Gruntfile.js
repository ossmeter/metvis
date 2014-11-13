module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
            dist: {
                src: [
                    "src/metvis/begin.js",
                    "src/metvis/modules/annotation.js",
                    "src/metvis/modules/table.js",
                    "src/metvis/modules/chart.js",
                    "src/metvis/end.js"
                ],
                dest: 'build/<%= pkg.name %>.<%= pkg.version %>.js'
            }
        },
		uglify: {
		  	options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		  	},
		  	build: {
				src: 'build/<%= pkg.name %>.<%= pkg.version %>.js',
				dest: 'build/<%= pkg.name %>.<%= pkg.version %>.min.js'
		  	}
		},
		cssmin: {
			minify: {
				src: "src/css/metvis.css",
				dest: "build/<%= pkg.name %>.<%= pkg.version %>.min.css"
			}
		},
		qunit: {
			all: ['test/**/*.html']
		}
	});

	// Load plugins for tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-qunit');

  	// Default task(s).
  	grunt.registerTask('default', ['concat','uglify', 'cssmin', 'qunit']);
};