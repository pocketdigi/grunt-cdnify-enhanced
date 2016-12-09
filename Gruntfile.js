/*
 grunt-cdnify
 https://github.com/callumlocke/grunt-cdnify

 Copyright 2013 Callum Locke
 Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: [
                    'tasks/*.js',
                    'Gruntfile.js',
                ]
            }
        },

        clean: {
            tests: 'dist'
        },
        cdnify: {
            dist: {
                options: {
                    base: '//ddlwechat.oss-cn-hangzhou.aliyuncs.com/loam/',
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.{css,html}',
                    dest: 'dist'
                }]
            }
        },



    });

    grunt.loadTasks('tasks');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', ['clean', 'cdnify']);

    grunt.registerTask('default', ['watch']);
};
