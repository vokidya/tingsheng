module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      concat: {
        js: {
          options: {
            separator: ';',
          },
          src: [
            'node_modules/vue/dist/vue.js',
            'node_modules/vue-router/dist/vue-router.js',
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            
            'bower_components/plupload/js/plupload.full.min.js',
            'bower_components/qiniu/dist/qiniu.min.js'
          ],
          dest: 'tmp/assets/vendor.js'
        },
        css: {
          src: [
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.css',
            'bower_components/pace/themes/blue/pace-theme-flash.css',
          ],
          dest: 'tmp/assets/vendor.css'
        }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      build: {
        files: {
          'build/assets/vendor.css': ['tmp/assets/vendor.css'],
          //'dist/assets/app<%= version %>.css': ['tmp/assets/app.css']
        }
      }
    },
    
    uglify: {
      options: {
        mangle: false
      },
      build: {
        files: {
          'build/assets/vendor.js': ['tmp/assets/vendor.js'],
          // 'dist/assets/templates<%= version %>.js': ['tmp/assets/templates.js'],
          // 'dist/assets/app<%= version %>.js': ['tmp/assets/app.js']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 4200,
          keepalive: true,
          hostname: '*',
          base: ['']
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['uglify', 'cssmin', 'concat', 'connect:server']);

};
