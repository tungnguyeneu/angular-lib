var gulp = require('gulp');
var inlineResources = require('./inline-resources');
var del = require("del");

gulp.task('copy-and-inline-resource', copyHtml);

function copyHtml() {
    gulp.src('src/components/**/*.html')
        .pipe(gulp.dest('./dist/src/components')).on('end', copyAssets);
}

function copyAssets () {
    gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/src/assets')).on('end', copyScss);
}

function copyScss () {
    gulp.src('./src/components/**/*.scss')
        .pipe(gulp.dest('./dist/src/components')).on('end', inlineResource);
}

function inlineResource() {
    inlineResources('./dist/src/components');
}

gulp.task('clean-resources', function () {
    return del(['dist/src/components/*.html', 'dist/src/components/*.scss']);
});

gulp.task('default', ['copy-and-inline-resource', 'clean-resources']);