var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imageMin = require('gulp-imagemin');
var concat = require('gulp-concat');


//COPY HTML;
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

//COMPILES SASS TO CSS;
//Main page;
gulp.task('sass-main', function() {
        gulp.src('src/sass/main/*.scss')
        .pipe(sass())
        .pipe(concat("main.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});
//Article page;
gulp.task('sass-article', function() {
    gulp.src('src/sass/article/*.scss')
    .pipe(sass())
    .pipe(concat("article.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

//CONCATENATE JS FILES;
//Main page;
gulp.task('scripts-main', function() {
    gulp.src('src/js/main/*.js')
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
})
//Article page;
gulp.task('scripts-article', function() {
    gulp.src('src/js/article/*.js')
    .pipe(concat("article.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
})

//IMAGE MINIMIZATION;
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream())
);

//BROWSER SYNC WHEN CHANGES ARE MADE;
gulp.task('reload', ['sass-main', 'sass-article', 'scripts-main', 'scripts-article', 'copyHtml', 'imageMin'], function() {
    browserSync.init({
    server: './dist',
    index: 'index.html'
});
gulp.watch('src/sass/main/*.scss', ['sass-main']);
gulp.watch('src/sass/article/*.scss', ['sass-article']);
gulp.watch('src/*.html', ['copyHtml']);
gulp.watch('src/images/*', ['imageMin']);
gulp.watch('src/js/main/*.js', ['scripts-main']);
gulp.watch('src/js/article/*.js', ['scripts-article']);
});
