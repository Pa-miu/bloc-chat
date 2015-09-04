var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    streamify = require('gulp-streamify'),
    livereload = require('gulp-livereload');

var path = {
    HTML: 'src/index.html',
    STYLES: 'src/styles/**/*.css',
    DEV_OUT: 'build.js',
    MINIFIED_OUT: 'build.min.js',
    APPEND_JS: 'js/',
    APPEND_STYLES: 'styles/',
    DEST_PROD: 'prod/',
    DEST_DEV: 'dev/',
    ENTRY_POINT: 'src/js/app.js'
};

/* 
    Development Tasks 
 */
gulp.task('refresh', function() {
    livereload.listen();
});

gulp.task('copyHTML', function() {
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': path.APPEND_JS + path.DEV_OUT
        }))
        .pipe(gulp.dest(path.DEST_DEV))
        .pipe(livereload());
});

/*
    Temporary until I decide to bundle styles together
 */
gulp.task('copyCSS', function() {
    gulp.src(path.STYLES)
        .pipe(gulp.dest(path.DEST_DEV + path.APPEND_STYLES))
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch(path.HTML, ['copyHTML']);
    gulp.watch(path.STYLES, ['copyCSS']);
    
    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullpaths: true
    }));
    
    return watcher.on('update', function() {
        watcher.bundle()
            .pipe(source(path.DEV_OUT))
            .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS))
            .pipe(livereload())
            console.log('Updated');
    })
        .bundle()
        .pipe(source(path.DEV_OUT))
        .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS));
});

/* 
    Production Tasks 
 */
gulp.task('build', function() {
    browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify]
    })
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(streamify(uglify({file:path.MINIFIED_OUT})))
        .pipe(gulp.dest(path.DEST_PROD + path.APPEND_JS))
});

gulp.task('buildHTML', function() {
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': path.APPEND_JS + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST_PROD));
});

/* Composited Tasks */
gulp.task('default', ['refresh', 'copyHTML', 'copyCSS', 'watch' ]);
gulp.task('production', ['buildHTML', 'build']);