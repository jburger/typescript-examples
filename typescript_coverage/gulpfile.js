///<reference path="typings/main.d.ts" />
// build chain dependencies
var gulp = require('gulp');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');
var sourcemaps = require('gulp-sourcemaps');
var istanbul = require('gulp-istanbul');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
var del = require('del');

var __coverageThreshold = 60;
var tsProject = ts.createProject('./tsconfig.json');

var tslint = require("gulp-tslint");

gulp.task("build:lint", function() {
    return gulp.src(["./**/*.ts", "!./node_modules/**/*", "!./typings/**/*"])
        .pipe(tslint({
            configuration:  {
                rules: {
                    "variable-name": true,
                    "quotemark": [true, "single"]
                }
            }
        }))
        .pipe(tslint.report("verbose", {
          emitError: true
        }));
});


gulp.task('build:clean', function() {
    return del([
        './transpiled',
        './coverage',
        './coverage-report'
    ]);    
});

gulp.task('build', ['build:lint', 'build:clean'], function() {
    return gulp.src([
        './src/**/*.ts',
        './test/**/*.ts',
        './typings/main.d.ts'
    ], { base: '.'})
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./transpiled'));
})

gulp.task('test:instrument', ['build'], function() {
    return gulp.src('./transpiled/src/**/*.js')
    .pipe(istanbul())
    .pipe(istanbul.hookRequire()); //this forces any call to 'require' to return our instrumented files
});

gulp.task('test:cover', ['test:instrument'], function() {
    return gulp.src('./transpiled/**/*Tests.js')
    .pipe(mocha({ui:'bdd'})) //runs tests
    .pipe(istanbul.writeReports({
        reporters: [ 'json' ] //this yields a basic non-sourcemapped coverage.json file
    })).on('end', remapCoverageFiles); //remap
});

//using remap-istanbul we can point our coverage data back to the original ts files
function remapCoverageFiles() {
    return gulp.src('./coverage/coverage-final.json')
    .pipe(remapIstanbul({
        basePath: '.',
        reports: {
            'html': './coverage',
            'text-summary': null,
            'lcovonly': './coverage/lcov.info'
        }
    }));
}

gulp.task('test', ['test:cover']);
gulp.task('default', ['build', 'test']);