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
    karma       = require('gulp-karma'),
    istanbul    = require('gulp-istanbul');


// =======================================================================//
// Coding standards                                                       //
// =======================================================================//

gulp.task('lint', function() {
    return gulp
        .src([
            __dirname + '/src/**/*.ts',
            __dirname + '/test/**/*.test.ts'
        ])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});

// =======================================================================//
// Compile                                                                //
// =======================================================================//

var tsProject = tsc.createProject('tsconfig.json');

gulp.task('compile-src', function() {
    return gulp.src(__dirname + '/src/**/*.ts')
        .pipe(tsc(tsProject))
        .js
        .pipe(gulp.dest(__dirname + '/.tmp/src/'));
});

var tsTestProject = tsc.createProject('tsconfig.json');

gulp.task('compile-test', function() {
    return gulp
        .src(__dirname + '/test/**/*.ts')
        .pipe(tsc(tsTestProject))
        .js
        .pipe(gulp.dest(__dirname + '/.tmp/test/'));
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
        entries: __dirname + '/.tmp/src/Weba.js',
        debug: false
    });

    return b.bundle()
        .pipe(source('Weba.js'))
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

gulp.task('unit-test-karma', function () {
    return gulp
        .src([
            '.tmp/src/**/*.js',
            '.tmp/test/**/*.test.js'
        ])
        .pipe(karma({
            configFile: 'unit.conf.js',
            action: 'run'
        }));
});

gulp.task('cover', function() {
    if (!process.env.CI) return;
    return gulp.src('coverage/lcov.info')
        .pipe(coveralls());
});

gulp.task('test', function(cb) {
    runSequence('build', 'unit-test-karma', 'cover', cb);
});
