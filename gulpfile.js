var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    streamify = require('gulp-streamify'),
    livereload = require('gulp-livereload');

var path = {
    HTML: 'src/index.html',
    STYLES: 'src/styles/**/*.css',
    IMAGES: 'src/images/**/*.png',
    DEV_OUT: 'build.js',
    DEV_CSS: 'style.css',
    MINIFIED_OUT: 'build.min.js',
    APPEND_JS: 'js/',
    APPEND_STYLES: 'styles/',
    APPEND_IMAGES: 'images/',
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
            js : path.APPEND_JS + path.DEV_OUT,
            css : path.APPEND_STYLES + path.DEV_CSS
        }))
        .pipe(gulp.dest(path.DEST_DEV))
        .pipe(livereload());
});

gulp.task('copyCSS', function() {
    gulp.src(path.STYLES)
        .pipe(concat(path.DEV_CSS))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.DEST_DEV + path.APPEND_STYLES))
        .pipe(livereload());
});

gulp.task('copyImages', function() {
    gulp.src(path.IMAGES)
        .pipe(gulp.dest(path.DEST_DEV + path.APPEND_IMAGES))
        .pipe(livereload());
});

gulp.task('bundleJS', function() {
    var browser = browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullpaths: true
    })
    
    browser.bundle()
            .pipe(source(path.DEV_OUT))
            .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS));
    
    console.log('Bundled scripts');
});

gulp.task('watch', function() {
    gulp.watch(path.HTML, ['copyHTML']);
    gulp.watch(path.STYLES, ['copyCSS']);
    gulp.watch(path.IMAGES, ['copyImage']);
    
    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullpaths: true
    }));
    
    return watcher.on('update', function() {
        watcher.bundle().on('error', function(err){ console.log(err.message); })
            .pipe(source(path.DEV_OUT))
            .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS))
            .pipe(livereload());
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

gulp.task('buildCSS', function() {
    gulp.src(path.STYLES)
        .pipe(concat(path.DEV_CSS))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.DEST_DEV + path.APPEND_STYLES))
});

gulp.task('buildImages', function() {
    gulp.src(path.IMAGES)
        .pipe(gulp.dest(path.DEST_PROD + path.APPEND_IMAGES))
});

/* Composited Tasks */
gulp.task('default', ['development', 'refresh', 'watch']);
gulp.task('development', ['bundleJS', 'copyHTML', 'copyCSS', 'copyImages']);
gulp.task('production', ['buildHTML', 'buildCSS', 'buildImages', 'build']);