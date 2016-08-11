var gulp        = require('gulp'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    tslint      = require('gulp-tslint'),
    tsc         = require('gulp-typescript'),
    coveralls   = require('gulp-coveralls'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    runSequence = require('run-sequence'),
    mocha       = require('gulp-mocha'),
    istanbul    = require('gulp-istanbul');


// =======================================================================//
// Coding standards                                                       //
// =======================================================================//

gulp.task('lint', function() {
    return gulp.src([
        __dirname + '/src/**/*.ts',
        __dirname + '/test/**/*.test.ts'
    ])
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

// =======================================================================//
// Compile                                                                //
// =======================================================================//

var tsProject = tsc.createProject('tsconfig.json');

gulp.task('compile-src', function() {
    return gulp.src(__dirname + '/src/**/*.ts')
        .pipe(tsc(tsProject))
        .js.pipe(gulp.dest(__dirname + '/.tmp/src/'));
});

var tsTestProject = tsc.createProject('tsconfig.json');

gulp.task('compile-test', function() {
    return gulp.src(__dirname + '/test/**/*.ts')
        .pipe(tsc(tsTestProject))
        .js.pipe(gulp.dest(__dirname + '/.tmp/test/'));
});

gulp.task('compile', function(cb) {
    runSequence('compile-src', 'compile-test', cb);
});

// =======================================================================//
// Build                                                                  //
// =======================================================================//

gulp.task('bundle', function () {
    var b = browserify({
        standalone : 'tracker',
        entries: __dirname + '/.tmp/src/weba.js',
        debug: false
    });

    return b.bundle()
        .pipe(source('weba.js'))
        .pipe(buffer())
        .pipe(uglify({ preserveComments : false }))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(__dirname + '/dist/'));
});

gulp.task('build', function(cb) {
    runSequence('compile', 'bundle', cb);
});

// =======================================================================//
// Tests                                                                  //
// =======================================================================//

gulp.task('mocha', function() {
    return gulp.src('.tmp/test/**/*.test.js')
        .pipe(mocha({ui: 'bdd'}))
        .pipe(istanbul.writeReports());
});

gulp.task('istanbul:hook', function() {
    return gulp.src(['.tmp/src/**/*.js'])
        .pipe(istanbul())
        .pipe(istanbul.hookRequire());
});

gulp.task('cover', function() {
    if (!process.env.CI) return;
    return gulp.src('coverage/**/lcov.info')
        .pipe(coveralls());
});

gulp.task('test', function(cb) {
    runSequence('build', 'istanbul:hook', 'mocha', 'cover', cb);
});