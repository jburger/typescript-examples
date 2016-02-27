///<reference path="typings/main.d.ts" />
// build chain dependencies
var gulp = require('gulp');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');

var tsProject = ts.createProject('./tsconfig.json');

gulp.task('build', function() {
   return gulp.src('./src/**/*.ts', { base: '.' })
   .pipe(ts(tsProject))
   .pipe(gulp.dest('.'));
});

gulp.task('test', function() {
    return gulp.src('./test/**/*.ts', { base: '.' })
    .pipe(ts(tsProject))
    //.pipe(gulp.dest('.'))
    .pipe(mocha({
        reporter: 'progress'
    }));
});

gulp.task('default', ['build', 'test']);