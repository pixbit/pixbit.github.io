module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

    /**
     * Project Variables
     */
    project: {
      papercraft: 'bower_components/papercraft/css'
    }

    ,sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
           'papercraft.css' : '<%= project.papercraft %>/style.scss'
        }
      }
    }

    ,concat: {

      all_css:{
        src: [
          '<%= project.theme_css %>/normalize.css',
          '<%= project.infinitypush %>/jquery.ma.infinitypush.css',
          '<%= project.theme_css %>/minimal-playbook.css'
        ],
        dest: '<%= project.theme_css %>/minimal.css'
      }

      ,all_js:{
        src: [
          '<%= project.infinitypush %>/jquery.ma.infinitypush.js',
          '<%= project.fitvids %>/jquery.fitvids.js',
          '<%= project.theme_js %>/minimal-playbook.js'
        ],
        dest: '<%= project.theme_js %>/minimal.js'
      }

    } // concat

    ,watch: {

      sass: {
        files: [
          '<%= project.theme_css %>/*.scss'
        ],
        tasks: [
          'sass',
          'concat:all_css'
        ],
        options: {
          livereload: true
        }
      },

      js:{
        files: [
          '<%= project.theme_js %>/minimal-playbook.js'
        ],
        tasks: [
          'concat:all_js'
        ]

      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass'); // npm install grunt-contrib-sass --save-dev
  grunt.loadNpmTasks('grunt-contrib-watch'); // npm install grunt-contrib-watch --save-dev
  grunt.loadNpmTasks('grunt-contrib-concat'); // npm install grunt-contrib-concat --save-dev

  grunt.registerTask('default', [
    'sass'
    // ,'concat'
    // ,'watch'
  ]);
}
