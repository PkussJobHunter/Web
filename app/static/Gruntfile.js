// AdminLTE Gruntfile
module.exports = function (grunt) { // jshint ignore:line
  'use strict';

  grunt.initConfig({
    pkg   : grunt.file.readJSON('package.json'),
    watch : {
      less : {
        // Compiles less files upon saving
        files: ['build/less/*.less'],
        tasks: ['less:development', 'less:production', 'replace', 'notify:less']
      },
      js   : {
        // Compile js files upon saving
        files: ['build/js/*.js'],
        tasks: ['js', 'notify:js']
      },
      skins: {
        // Compile any skin less files upon saving
        files: ['build/less/skins/*.less'],
        tasks: ['less:skins', 'less:minifiedSkins', 'notify:less']
      }
    },
    // Notify end of tasks
    notify: {
      less: {
        options: {
          title  : 'AdminLTE',
          message: 'LESS finished running'
        }
      },
      js  : {
        options: {
          title  : 'AdminLTE',
          message: 'JS bundler finished running'
        }
      }
    },
    cachebuster: {
        build: {
            options: {
                format: 'json',
                basedir: 'static/'
            },
            src: [
                'bower_components/bootstrap/dist/js/bootstrap.min.js',
                'bower_components/bootstrap/dist/css/bootstrap.min.css',
                'bower_components/fullcalendar/dist/fullcalendar.min.css',
                'bower_components/fullcalendar/dist/fullcalendar.print.min.css',
                'bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css',
                'plugins/pace/pace.min.css',
                'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
                'bower_components/font-awesome/css/font-awesome.min.css',
                'bower_components/Ionicons/css/ionicons.min.css',
                'bower_components/fullcalendar/dist/fullcalendar.min.css',
                'bower_components/fullcalendar/dist/fullcalendar.print.min.css',
                'dist/css/AdminLTE.min.css',
                'bower_components/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css',
                'plugins/timepicker/bootstrap-timepicker.min.css',
                'bower_components/select2/dist/css/select2.min.css',
                'dist/css/skins/_all-skins.min.css',
                'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
                'bower_components/fullcalendar/dist/fullcalendar.min.js',
                'dist/js/adminlte.min.js',
                'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
                'bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js',
                'bower_components/datatables.net/js/jquery.dataTables.min.js',
                'plugins/iCheck/icheck.min.js',
                'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
                'bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
                'plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
                'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
                'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
                'bower_components/select2/dist/js/select2.full.min.js',
                'bower_components/moment/min/moment.min.js',
                'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
                'bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js',
                'plugins/timepicker/bootstrap-timepicker.min.js',
                'bower_components/fullcalendar/dist/fullcalendar.min.js',

                'plugins/iCheck/square/blue.min.css',
                'plugins/iCheck/all.min.css',
                'bower_components/morris.js/morris.min.css',
                'bower_components/jvectormap/jquery-jvectormap.min.css',
                'dist/css/alt/AdminLTE-bootstrap-social.min.css',
                'dist/css/alt/AdminLTE-fullcalendar.min.css',
                'bower_components/bootstrap-daterangepicker/daterangepicker.min.css',
                'plugins/bootstrap-slider/slider.min.css',

                'bower_components/bootstrap-daterangepicker/daterangepicker.min.js',
                'plugins/jvectormap/jquery-jvectormap-world-mill-en.min.js',
                'bower_components/fastclick/lib/fastclick.min.js',
                'plugins/bootstrap-slider/bootstrap-slider.min.js',
                'bower_components/chart.js/Chart.min.js',
                'dist/js/pages/dashboard2.min.js',
                'dist/js/pages/dashboard.min.js',
                'bower_components/ckeditor/ckeditor.min.js',
                'plugins/input-mask/jquery.inputmask.min.js',
                'plugins/input-mask/jquery.inputmask.date.extensions.min.js',
                'plugins/input-mask/jquery.inputmask.extensions.min.js',
                'bower_components/Flot/jquery.flot.categories.min.js',
                'bower_components/Flot/jquery.flot.pie.min.js',
                'bower_components/Flot/jquery.flot.resize.min.js',
                'bower_components/Flot/jquery.flot.min.js',
                'dist/js/demo.min.js',
            ],
            dest: 'target/cachebusters.json'
        }
    },
    // 'less'-task configuration
    // This task will compile all less files upon saving to create both AdminLTE.css and AdminLTE.min.css
    less  : {
      // Development not compressed
      development  : {
        files: {
          // compilation.css  :  source.less
          'dist/css/AdminLTE.css'                     : 'build/less/AdminLTE.less',
          // AdminLTE without plugins
          'dist/css/alt/AdminLTE-without-plugins.css' : 'build/less/AdminLTE-without-plugins.less',
          // Separate plugins
          'dist/css/alt/AdminLTE-select2.css'         : 'build/less/select2.less',
          'dist/css/alt/AdminLTE-fullcalendar.css'    : 'build/less/fullcalendar.less',
          'dist/css/alt/AdminLTE-bootstrap-social.css': 'build/less/bootstrap-social.less'
        }
      },
      // Production compressed version
      production   : {
        options: {
          compress: true
        },
        files  : {
          // compilation.css  :  source.less
          'dist/css/AdminLTE.min.css'                     : 'build/less/AdminLTE.less',
          // AdminLTE without plugins
          'dist/css/alt/AdminLTE-without-plugins.min.css' : 'build/less/AdminLTE-without-plugins.less',
          // Separate plugins
          'dist/css/alt/AdminLTE-select2.min.css'         : 'build/less/select2.less',
          'dist/css/alt/AdminLTE-fullcalendar.min.css'    : 'build/less/fullcalendar.less',
          'dist/css/alt/AdminLTE-bootstrap-social.min.css': 'build/less/bootstrap-social.less',
            'plugins/iCheck/square/blue.min.css' : 'plugins/iCheck/square/blue.css',
            'plugins/iCheck/all.min.css' : 'plugins/iCheck/all.css',
            'bower_components/morris.js/morris.min.css' : 'bower_components/morris.js/morris.css',
            'bower_components/jvectormap/jquery-jvectormap.min.css' : 'bower_components/jvectormap/jquery-jvectormap.css',
            'bower_components/bootstrap-daterangepicker/daterangepicker.min.css' : 'bower_components/bootstrap-daterangepicker/daterangepicker.css',
            'plugins/bootstrap-slider/slider.min.css' : 'plugins/bootstrap-slider/slider.css'
        }
      },
      // Non minified skin files
      skins        : {
        files: {
          'dist/css/skins/skin-blue.css'        : 'build/less/skins/skin-blue.less',
          'dist/css/skins/skin-black.css'       : 'build/less/skins/skin-black.less',
          'dist/css/skins/skin-yellow.css'      : 'build/less/skins/skin-yellow.less',
          'dist/css/skins/skin-green.css'       : 'build/less/skins/skin-green.less',
          'dist/css/skins/skin-red.css'         : 'build/less/skins/skin-red.less',
          'dist/css/skins/skin-purple.css'      : 'build/less/skins/skin-purple.less',
          'dist/css/skins/skin-blue-light.css'  : 'build/less/skins/skin-blue-light.less',
          'dist/css/skins/skin-black-light.css' : 'build/less/skins/skin-black-light.less',
          'dist/css/skins/skin-yellow-light.css': 'build/less/skins/skin-yellow-light.less',
          'dist/css/skins/skin-green-light.css' : 'build/less/skins/skin-green-light.less',
          'dist/css/skins/skin-red-light.css'   : 'build/less/skins/skin-red-light.less',
          'dist/css/skins/skin-purple-light.css': 'build/less/skins/skin-purple-light.less',
          'dist/css/skins/_all-skins.css'       : 'build/less/skins/_all-skins.less'
        }
      },
      // Skins minified
      minifiedSkins: {
        options: {
          compress: true
        },
        files  : {
          'dist/css/skins/skin-blue.min.css'        : 'build/less/skins/skin-blue.less',
          'dist/css/skins/skin-black.min.css'       : 'build/less/skins/skin-black.less',
          'dist/css/skins/skin-yellow.min.css'      : 'build/less/skins/skin-yellow.less',
          'dist/css/skins/skin-green.min.css'       : 'build/less/skins/skin-green.less',
          'dist/css/skins/skin-red.min.css'         : 'build/less/skins/skin-red.less',
          'dist/css/skins/skin-purple.min.css'      : 'build/less/skins/skin-purple.less',
          'dist/css/skins/skin-blue-light.min.css'  : 'build/less/skins/skin-blue-light.less',
          'dist/css/skins/skin-black-light.min.css' : 'build/less/skins/skin-black-light.less',
          'dist/css/skins/skin-yellow-light.min.css': 'build/less/skins/skin-yellow-light.less',
          'dist/css/skins/skin-green-light.min.css' : 'build/less/skins/skin-green-light.less',
          'dist/css/skins/skin-red-light.min.css'   : 'build/less/skins/skin-red-light.less',
          'dist/css/skins/skin-purple-light.min.css': 'build/less/skins/skin-purple-light.less',
          'dist/css/skins/_all-skins.min.css'       : 'build/less/skins/_all-skins.less'
        }
      }
    },

    // Uglify task info. Compress the js files.
    uglify: {
      options   : {
        mangle          : true,
        preserveComments: 'some'
      },
      production: {
        files: {
            'dist/js/adminlte.min.js': ['dist/js/adminlte.js'],
            'bower_components/bootstrap-daterangepicker/daterangepicker.min.js' : ['bower_components/bootstrap-daterangepicker/daterangepicker.js'],
            'plugins/jvectormap/jquery-jvectormap-world-mill-en.min.js' : ['plugins/jvectormap/jquery-jvectormap-world-mill-en.js'],
            'bower_components/fastclick/lib/fastclick.min.js' : ['bower_components/fastclick/lib/fastclick.js'],
            'plugins/bootstrap-slider/bootstrap-slider.min.js' : ['plugins/bootstrap-slider/bootstrap-slider.js'],
            'bower_components/chart.js/Chart.min.js' : ['bower_components/chart.js/Chart.js'],
            'dist/js/pages/dashboard2.min.js' : ['dist/js/pages/dashboard2.js'],
            'dist/js/pages/dashboard.min.js' : ['dist/js/pages/dashboard.js'],
            'bower_components/ckeditor/ckeditor.min.js' : ['bower_components/ckeditor/ckeditor.js'],
            'plugins/input-mask/jquery.inputmask.min.js' : ['plugins/input-mask/jquery.inputmask.js'],
            'plugins/input-mask/jquery.inputmask.date.extensions.min.js' : ['plugins/input-mask/jquery.inputmask.date.extensions.js'],
            'plugins/input-mask/jquery.inputmask.extensions.min.js' : ['plugins/input-mask/jquery.inputmask.extensions.js'],
            'bower_components/Flot/jquery.flot.categories.min.js' : ['bower_components/Flot/jquery.flot.categories.js'],
            'bower_components/Flot/jquery.flot.pie.min.js' : ['bower_components/Flot/jquery.flot.pie.js'],
            'bower_components/Flot/jquery.flot.resize.min.js' : ['ower_components/Flot/jquery.flot.resize.js'],
            'bower_components/Flot/jquery.flot.min.js' : ['bower_components/Flot/jquery.flot.js'],
            'dist/js/demo.min.js' : ['dist/js/demo.js']
        }
      }
    },

    // Concatenate JS Files
    concat: {
      options: {
        separator: '\n\n',
        banner   : '/*! AdminLTE app.js\n'
        + '* ================\n'
        + '* Main JS application file for AdminLTE v2. This file\n'
        + '* should be included in all pages. It controls some layout\n'
        + '* options and implements exclusive AdminLTE plugins.\n'
        + '*\n'
        + '* @Author  Almsaeed Studio\n'
        + '* @Support <https://www.almsaeedstudio.com>\n'
        + '* @Email   <abdullah@almsaeedstudio.com>\n'
        + '* @version <%= pkg.version %>\n'
        + '* @repository <%= pkg.repository.url %>\n'
        + '* @license MIT <http://opensource.org/licenses/MIT>\n'
        + '*/\n\n'
        + '// Make sure jQuery has been loaded\n'
        + 'if (typeof jQuery === \'undefined\') {\n'
        + 'throw new Error(\'AdminLTE requires jQuery\')\n'
        + '}\n\n'
      },
      dist   : {
        src : [
          'build/js/BoxRefresh.js',
          'build/js/BoxWidget.js',
          'build/js/ControlSidebar.js',
          'build/js/DirectChat.js',
          'build/js/Layout.js',
          'build/js/PushMenu.js',
          'build/js/TodoList.js',
          'build/js/Tree.js'
        ],
        dest: 'dist/js/adminlte.js'
      }
    },

    // Replace image paths in AdminLTE without plugins
    replace: {
      withoutPlugins   : {
        src         : ['dist/css/alt/AdminLTE-without-plugins.css'],
        dest        : 'dist/css/alt/AdminLTE-without-plugins.css',
        replacements: [
          {
            from: '../img',
            to  : '../../img'
          }
        ]
      },
      withoutPluginsMin: {
        src         : ['dist/css/alt/AdminLTE-without-plugins.min.css'],
        dest        : 'dist/css/alt/AdminLTE-without-plugins.min.css',
        replacements: [
          {
            from: '../img',
            to  : '../../img'
          }
        ]
      }
    },

    // Build the documentation files
    includes: {
      build: {
        src    : ['*.html'], // Source files
        dest   : 'documentation/', // Destination directory
        flatten: true,
        cwd    : 'documentation/build',
        options: {
          silent     : true,
          includePath: 'documentation/build/include'
        }
      }
    },

    // Optimize images
    image: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd   : 'build/img/',
            src   : ['**/*.{png,jpg,gif,svg,jpeg}'],
            dest  : 'dist/img/'
          }
        ]
      }
    },

    // Validate JS code
    jshint: {
      options: {
        jshintrc: 'build/js/.jshintrc'
      },
      grunt  : {
        options: {
          jshintrc: 'build/grunt/.jshintrc'
        },
        src    : 'Gruntfile.js'
      },
      core   : {
        src: 'build/js/*.js'
      },
      demo   : {
        src: 'dist/js/demo.js'
      },
      pages  : {
        src: 'dist/js/pages/*.js'
      }
    },

    jscs: {
      options: {
        config: 'build/js/.jscsrc'
      },
      core   : {
        src: '<%= jshint.core.src %>'
      },
      pages  : {
        src: '<%= jshint.pages.src %>'
      }
    },

    // Validate CSS files
    csslint: {
      options: {
        csslintrc: 'build/less/.csslintrc'
      },
      dist   : [
        'dist/css/AdminLTE.css'
      ]
    },

    // Validate Bootstrap HTML
    bootlint: {
      options: {
        relaxerror: ['W005']
      },
      files  : ['pages/**/*.html', '*.html']
    },

    // Delete images in build directory
    // After compressing the images in the build/img dir, there is no need
    // for them
    clean: {
      build: ['build/img/*']
    }
  });

  // Load all grunt tasks

  // LESS Compiler
  grunt.loadNpmTasks('grunt-contrib-less');
  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compress JS Files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Include Files Within HTML
  grunt.loadNpmTasks('grunt-includes');
  // Optimize images
  grunt.loadNpmTasks('grunt-image');
  // Validate JS code
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  // Delete not needed files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Lint CSS
  grunt.loadNpmTasks('grunt-contrib-csslint');
  // Lint Bootstrap
  grunt.loadNpmTasks('grunt-bootlint');
  // Concatenate JS files
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Notify
  grunt.loadNpmTasks('grunt-notify');
  // Replace
  grunt.loadNpmTasks('grunt-text-replace');
  //version
  grunt.loadNpmTasks('grunt-cachebuster');

  // Linting task
  grunt.registerTask('lint', ['jshint', 'csslint', 'bootlint']);
  // JS task
  grunt.registerTask('js', ['concat', 'uglify']);
  // CSS Task
  grunt.registerTask('css', ['less:development', 'less:production', 'replace']);
  // cahce Task
  grunt.registerTask('cache', ['cachebuster']);

  // The default task (running 'grunt' in console) is 'watch'
  grunt.registerTask('default', ['watch']);
};
