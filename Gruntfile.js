module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
            dist: {
                src: [
                    "src/begin.js",
                    "src/modules/annotation.js",
                    "src/modules/table.js",
                    "src/modules/chart.js",
                    "src/end.js"
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
		}
	});

	// Load plugins for tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

  	// Default task(s).
  	grunt.registerTask('default', ['concat','uglify']);
};