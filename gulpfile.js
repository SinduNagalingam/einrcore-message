'use strict';

var gulp = require('gulp');
var litecoreTasks = require('einrcore-build');

litecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
