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
    HTML: 'index.html',
    OUT: 'build.js',
    MINIFIED_OUT: 'build.min.js',
    APPEND_JS: 'js/',
    DEST_PROD: 'prod/',
    DEST_DEV: 'dev/',
    ENTRY_POINT: 'src/js/App.js'
};

/* Development Tasks */
gulp.task('copybundle', function() {
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': path.APPEND_JS + path.OUT
        }))
        .pipe(gulp.dest(path.DEST_DEV))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(path.HTML, ['copybundle']);
    
    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullpaths: true
    }));
    
    return watcher.on('update', function() {
        watcher.bundle()
            .pipe(source(path.OUT))
            .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS))
            .pipe(livereload())
            console.log('Updated');
    })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS));
});

/* Production Tasks */
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

gulp.task('replaceHTML', function() {
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': path.APPEND_JS + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST_PROD));
});

/* Composited Tasks */
gulp.task('default', ['copybundle', 'watch']);
gulp.task('production', ['replaceHTML', 'build']);