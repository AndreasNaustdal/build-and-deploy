'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var sassConfig = {
    default: {
      files: {
        'src/finnFuglen.css': 'src/finnFuglen.scss'
      }
    }
  };

  var concatConfig = {
    default: {
      files: {
        'src/script.js': [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'bower_components/angular/angular.js',
          'src/finnFuglen.module.js',
          'src/fuglCtrl.js'
        ],
        'src/style.css': [
          'bower_components/bootstrap/dist/css/bootstrap.css',
          'src/finnFuglen.css'
        ]
      }
    }
  };

  var uglifyConfig = {
    default: {
      files: {
        'dist/script.min.js': ['src/script.js']
      }
    }
  };

  var cssminConfig = {
    default: {
      files: {
        'dist/style.min.css': ['src/style.css']
      }
    }
  };

  var connectConfig = {
    options: {
      base: 'dist',
      keepalive: true
    },
    server: {
      options: {
        port: process.env.PORT || 9601
      }
    },
    local: {
      options: {
        hostname: 'localhost',
        port: 9601,
        open: true
      }
    }
  };

  var karmaConfig = {
    unit: {
      options: {
        files: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/angular/angular.js',
          'bower_components/angular-mocks/angular-mocks.js',
          'src/finnFuglen.module.js',
          'src/fuglCtrl.js',
          'test/**/*.js'
        ],
        singleRun: true,
        browsers: ['PhantomJS2'],
        frameworks: ['jasmine'],
        //plugins: ['karma-jasmine']
      }
    }
  };

  var jshintConfig = {
    default: {
      src: [
        'src/finnFuglen.module.js',
        'src/fuglCtrl.js'
      ],
      options: {
        jshintrc: true
      }
    }
  };

  var gruntConfig = {
    sass: sassConfig,
    concat: concatConfig,
    uglify: uglifyConfig,
    cssmin: cssminConfig,
    connect: connectConfig,
    karma: karmaConfig,
    jshint: jshintConfig
  };

  grunt.initConfig(gruntConfig);

  grunt.registerTask('build', [
    'sass',
    'concat',
    'uglify',
    'cssmin'
  ]);

  grunt.registerTask('startlocal', [
    'build',
    'connect:local'
  ]);

  grunt.registerTask('start', [
    'build',
    'connect:server'
  ]);

  grunt.registerTask('test', [
    'karma:unit'
  ]);

  grunt.registerTask('lint', [
    'jshint'
  ]);
};
